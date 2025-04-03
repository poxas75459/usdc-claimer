/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "wDZpSjQCtp7Hxuz75uZT5h9FUcuFsb427Akqz9dgCvXDqXtUgHvbEa76m8xge9HRArnUq8NVmnX2Hvfb72AEgLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bvXvHd8R253BoRbzSMB6KidoRkAu1tZuDCbqpf2CfL5bTNKntkx8q2xWLwMRuwoK89bqJVuZqgMLuyCnSzUVsnH",
  "key1": "EDknetaLsoQz1oxSLLRoXC9poisTaXcNZeLnK3oproiPhaYuJknfTS4kK851scvVFkjAPMxsfmnBnr7JuYZV61n",
  "key2": "5t9xobTFmb6JQAH1EPuatsuwqED94epsE9aRW1xdbSx7s67WptQHXwZJX5BmeVhfnN9uDwngk9zErtJ3PBcusEZ9",
  "key3": "2Swomp45zTU41dST5sZkZky6rUeE3sHb1UGoPJzTFjQD1KDR2LEJDdu3bH5Jow9iTarVbgM59X2yJdyLdqkpPHD3",
  "key4": "pS4HXpXZa6bt1RmkHsVF8D4qpHVNZCqChPTHFjn363KxNStiSjt3ur4mUBGi9GTwZ1wrNoQxpa2rDCRRFriod62",
  "key5": "3z6ecT8egisMuJ4E86D9HgDuLhpPvGRWT8G7DpWwaTaaDMHYE84sJU3QBWnSAuAsE7H3hbrJqrSoN4B6CUYcEhW9",
  "key6": "3MKgARTARkyipKvXPHu94sqcsobXJn37msbhDQ6Gk7YdztAaWV7FHPHysi6PgUjRvosABMY84ohjdERXob6Ptstk",
  "key7": "9CHT5Vnpoh4hCahuToiHXYadBTSbv6yfjx8wL3FYmERbkjoHd8gFr4apG44Q1JQ3hAv9kbpSnzqBXWjaySEZu5n",
  "key8": "eqcoGFAucEiyLSFrQA9kjkPaFrg6VzAtoUL34xLXE6kEsqEefVKKMFAE9sezeKahehL5rS3T8jB8tpvDtvFXnYn",
  "key9": "2bX9jLrF1kavdn4wpJKDnvURG5CF6eDZMLWb2QutfRiCoxdHBrzobEnAiksvzfUnyyQVGbYZn2FPGWyVTDgdWKZF",
  "key10": "41pX8iSDQ2sX7zQ533aAAcDhUqJoe7x5KVfHgGxoyzkogekGsFEoeisJLayTWYc2bN2tt9RfsVX2jbQsB3aJD8nP",
  "key11": "63pMYHDnguZqSi76cizwPBCmEhDkyGzt2RZiE5pqAvAd3zkRKtq1BLQ2WfYcgXWPSPNX3zDRmhnUJZ7eS3noYTcy",
  "key12": "3D7wC6ArM3jLM7Jen89xNmQbVsLCpgVNeYWTneszZF5Y8UdPJFqNRr2YsrDefQXXRLvTC3MwKDd9WuC1VqhetDJK",
  "key13": "4WigkQVPVSDM8h4XieeFsxSx7NdnN7wcRKTfQh6JXi21VvZdZVHv5QbsQuXUd6C5JbSdrbH841XKTMToqZ8UL51u",
  "key14": "3GbYECAGMZTNK2bD2CTxEsn2B8WrmZMt5t5gVVdcXVqJrf36hzzgPhHvafwFvSQMHLdkXWb4Y2CUfPHbLTDcJjMc",
  "key15": "5dEJpNhjtRoCnvp2YursRVDKt7UchykStQsv1A91eCWvc7sooKU4cAmPm8NYqP8bMsS7s98z5bBf3yCDptrWLzfF",
  "key16": "3KhpxAwZtNGHtBuWV7NPnSWDYu3wKuXxfDw6dwbMR38BWnFzpRVUxc7324gBPV5NDHgwZ9q787BeS2Qz6i7uPpmg",
  "key17": "4m9hCpkCcffFJkupqKzBMnKNMskJnUKcTmssDx7wE6HyuzK7sDUMv1woPeQxbCUTNq2o52gNyJXDncefR9CjC7dH",
  "key18": "5UYvZev49ispoedp41ni7p8EzTaojpkBiszVjzeYkmJNctWFncxg1G4rD32Ei9eAtF3GdbbR4b1zm3t39oGZKQNP",
  "key19": "2KE7kDYjs79vnSE8aTZbRszVKypjMSizRynjK168M8bTaAWZ22a48DuWCTpxqk4mL26KE6uaLQvD9sHUVrMvZ4z3",
  "key20": "2QgDnXdX812sFm5fUdwMVTUQkoWhNy49LywXQpMHsMnxr2p9bX3LJoB7hrkMfGhQS4AXruW9FwGJBWieTxomFrBb",
  "key21": "xSK4qK21sveL67jHKpFr15rLB7z9JqzeLMQFeVvXkgQ6RdzS7NX6MsfiSZxWEWDkVCxtN35z3EWVK5PpsVoGGWG",
  "key22": "3YqTxKmoVjRwzXmpfLj4arrozG8uj2K6zhWpaHB5FghCHjr5UFZkgnLREX7eSYqAc1PEJkJYGGbyXnjzakVedWA6",
  "key23": "3V86B3p56hDr79EKkRm9BhCqc41M7URakPoW5Y1RPVZtnhAsz5MCAy88wZYnpD7mmutQRNVaiSdd7ka1VwESvVHw",
  "key24": "23LDy45gWwpcZz5LW6T1sH7cfCkLgvDRHJdThP4VmtrxYKCzMNbC7ULFSd77anjcJ6YD3yYkpU6AoRS53Xw2ogxN",
  "key25": "4KbNSuNbx9yXKgtz29ww9AdK6eyywcMAKakeGNcfESgfxfmC3pAqEmybAi2mDRGPqNhBzce3sG9V3NDWRFruQ42Y",
  "key26": "t8Eeq37XQnjJTbUCDyiF2GPkY2in5AqJXLAbxx7e9B7HpcH5TT3G6VzUyRrUsZtKKZkxVZws1tcLviTqYUGtvd2",
  "key27": "2Xukugwfd1mMEwY36acaGDg6gsz8vTw1fnkfWaivBZwiayjS2NqQDXzmheaB2tDR4yqAzAU26DMtTjZds852tr7m"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
