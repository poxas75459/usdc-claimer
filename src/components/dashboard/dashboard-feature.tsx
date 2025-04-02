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
    "2Gz6ZN1W4jeaXYYpxe7RbijxhjaVqev1yDHoHURq1LxYMgHJbDo9z2uNDzEv1nei3Um6WbJzrhPyjRgDJh1z3Liv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zs6GaEyE1ghNUa1s4TohexSkRhapbCTseLiSGMND3ePU8c2riAkxQy5Rfbu9rS5zxZtFHTL6wCdYHPMJivY4KP8",
  "key1": "4AKbpjc2tUEzTWFurwjJedy6NCD21jQFRdvUcqbw8w3PhAB1kHg6nbPVceXYRYrFNZoaLo8nh6VAXQLtpmwDQfyp",
  "key2": "49GkrXPhwz7gDZh7zp3FG5RViUY8bnk6iGjU7sYp91Q5DJBXU9uawHbTRT4EWcxcfDTEXiA9pBLnhXXmZsZ38FgX",
  "key3": "2qZNTdD4NHPLpz4fhxixZdx4doHWLSiZZUbaRuELNxJpKQERLfWekz1UPxpZEYdhudCxQhxEGFfAd8YNJYPDDuxf",
  "key4": "54Havkqvpn7YfmLkTv3VPsHf5VK6KxUWvo5dwGtxEy1T1TR6C5RiDZxWrkMenxuw6kiWQZA4zdMJFDMsd6Npn3wD",
  "key5": "4r4LjEpL8oee9MCWGRuq5WWmoZo6pjgCeu4GMTokt5mgeRzvMTzQUqAedHmo9kf6QZ5xysT8rHn6snFrXNzp4V3b",
  "key6": "41PF9guejDehZeYNJm4Zkwou7NuWwFNeUZ9xx2Aj3292wmgCi4BV9mjgWZnuoJ6W4PBjjqSYUGHHA2R6MvN1BK28",
  "key7": "5H7yeNebeDtQ7SVEib14x3WFM6somsBczgFFQL8khAVcmWfbHHKKcptugvDzboyZi4aGVJkXhwUxV8kMzSa4WDu7",
  "key8": "5BA1z1omo2WECMqatLYLEfxLDAKyoXZBrXyoDEWm7KexD4HeYgmSb3iE2mXJpGFBciUjqPMu4mtvgF8W75GQg2vc",
  "key9": "2GvyBHTgJYuAUx7HawzAxZqMhLErodsBZzsm6ek99U1jZc2XSgNyr6dEaRJgJfXxvmS9kMKNzZ4qtb7FKKWjZu1Y",
  "key10": "BvrF3VYSr3erTwxQoydhQJtgg7UDmkArwBdTqMeevF4jS1uT9m5bSrkw47wFxsJk9NhSS6FSCpNXX6m85CXiw9x",
  "key11": "Ehv93fT2cvtYrQVzAyQLBpMshPrdjyjSJcpcX4zKVGr8iD9yLvcKJ9myswE5XaANXgZ8RTq6HobuScXZSQRbz6A",
  "key12": "2UCRejjw2eWxertsLCrtrvTXCoNoo7knQwzXRrKT1Vu2D9DmHFYLTtnrCFST9rSuA2hiVcZzMCKYiU7BwyY3M4fQ",
  "key13": "4nU7jLV9vYrciTb56XTtedSJYMscmoEdXHtqU5HSZ9uQyqMCTQhrQksjKvJEhYVtbATF9BKTe8nSdDqT4UtHpAfQ",
  "key14": "4d6wrz41mnWdDkkaNupbKBBMcNSGK9n39F3cBcqaLNboPVdb6SbtWLdTWZxrERw8YfjNfC3iryETwMKLd4cAgjiR",
  "key15": "2qeF7DcbA45SQCRs3bLQNJwzduoHHiBpJbVTuYEZ1BbhLw6AT7nCrcdZMt8th2S1ut9iukk2am1hzLixWj1GH2y1",
  "key16": "5Vn2ib5rkUTLLmcAvJbyE1EH8snaZiK4wHbgkVou9bZs2Tf3aZc32Q43SRiQ6Ywnp8VDxrHamFHRYHm5F4eSepYa",
  "key17": "4Se7hn9goorgAXAnURHvxJU1hU4GBgkMq1AkQc1vouerb9Kf7UwzKhPEvzBozYnf4bxNDx2JQF6gjs8iKnybygPs",
  "key18": "3Y4BJmr6qWeL5rT3cGztsUsdefzRdrrK2dqxAFK4zyitygt827wWups2TviEoNbp4whaDnLz4trJUDSrvASPpNG2",
  "key19": "5qMYFcM1fY8LNZXqchGZLd3ckgMSxE7N9YGs2xySgujx8ZsuJfvQMqoMonWgaLs3hKq25cjr6eeQDDY8WFK3AMNC",
  "key20": "3r6b9hu9Tu9hUgaUmxZGbXXZDi3Ptz4XuVsXuyswLjpYWa9E4DETbA17Z3N33ABkVi1XEKoP4BSetG7vjhbuhYN2",
  "key21": "4g9SWoRZGcYGpyiPoPbQTpsGaVaoUx4vfaoaXBEBUhspPr6kKNdWYEfwpM6WwkDQxZet7fwY8n95fvmMjGbtTEpz",
  "key22": "4tntrvD3sJxhLAE3kwDRE1VK2wRXz7aUBr1NcvMpmtMGcmfw3oak3cLxYQsxU9utBPFKKAKTLKf7K9bFzVQPodPV",
  "key23": "5R9oTeJLXuDQjuHTWXswjaEc2Wk6CK7tVmqVVRSiuvjqcyBLeNn3w3mysZVEnZ6qSKv2p9W6VQRJPPKkDYhTCwLs",
  "key24": "2hxKW8RksUCiMddwNB6CGKo6yLqsfhmb4k94PXKSM4LzWr6UN33Y31YgC7PFcF5AF6RuxUqoPrLXksS9RmzQQbEJ",
  "key25": "28WUDt4RnNY2RktsAX5pPoVTAX83MascoPQFnqkuXTpzQnamJREwgWyW7LDk7ouxaUkDvB6V2LHNR6ULfFWDsyLj"
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
