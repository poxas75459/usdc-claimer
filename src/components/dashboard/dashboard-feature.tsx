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
    "28M5qXK74Kv2PbtY8Cx15pKSz6wQTp48dpQYnF5yxBtKkBLTi99qwUgLfvVDSEue5mmRNKRnyH8RaNrenpjskMFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tqzyqKnZZPxxnAK6n6Biyr1DYtteDZMn4dqrhnqPrHjq7BxA8sMHjQUDHjRhGKPPGHKsdfoKbrW5YBbFHustYxH",
  "key1": "EjWNbiwyc2n9woaLRsCxZV1XUogXrfTfrhDLyWEHH6BqEY5KqGhDb12FjeqFTuh3MvpyFc2P5J2khWyj4iS6gz8",
  "key2": "21QvtuuvMnnuoveRo8EMKxgFGAec4XAgFUDC7MTCETgYeNS2pzUg22eWPGTMqNpmLsneN7J51ZRkMDHhqTnciHhy",
  "key3": "4jxnxJnR8omfQgyQqrXDvQc6ToyUJmktupFBpdVJL6TCGwNR1aeBsg9vVvheva5SbaReUmHW9auAufLtojJjdVUF",
  "key4": "57ce5ubk2rbwtc1BRDp1H9fYL5x87eF556ByvbLM3rMuJQuoFNcNEse78Le5edzVor54wdLXy2SgjTMTJsqvUJU1",
  "key5": "5VQZeuveswQbXUKRjFpmuxDWHqhWew7pv8C4KBywUAuamFBiyy56Ui87HB3zYnk43crARhhgaN3VXUKDeYwJij8w",
  "key6": "5QimtRjRbUrfoqDr53RHiX8bh5fcUeEt3Dr7Vf8hxpeX5oBHi7aypyCVwmVVDGMrK2z1eGHxfN5oysG6bVn2BcNG",
  "key7": "3JKrX3aVgWUunPUe7BkYXQqCzv2rrcjXWCR2ArR8eeLjMTBs1ewhEab6wpsQLZwZJVUKkqLAb6EePWEb5gebPY98",
  "key8": "4AvV3DqV2kDCBBJWXBwgF5x79EKf4oAgGtowPUCJaUfitHLdjicVwzWJ48tmi6mBnMZ5WLd3n59A6BYAkXxVgSGv",
  "key9": "3hRVg2SuJ79FS8hWXA6pGpfpyPNRfuKbHn9N7yLCnpiZKYhojyFnZ4D8QiyrxgfjT23aSvZMbtTevLZXJaguDSQe",
  "key10": "4RYhgjFJcHET7zKxfXX57EYgYRhSixh6oz2usD3AE6LpSjwbJxcVfdQiEb7nipvD779Koj2E64TRUrVhzYemUhho",
  "key11": "28bjp4K6Rn9rmj1HEDz3ieHMbqwnMWdRKTPcYVEVnYB7JxLW7urugQzCSRiFEqZqMdWVSiF4gfyjxAJhjQ3QM8zX",
  "key12": "5HZzVi1jTzicbfPv4TyGTLBECY3V5NxdAJfQ3ngMtwVjL22gUYDgoZcpJBC9RSqL6SJ3WbegjGVR3AfZHbomQxpL",
  "key13": "2Bs7a51edJmhLcts8Rj1jwX7pz6mdPCAKBDCCSm3Jo1Z8X6xCDti4DBJwq9Vsc5dNQ5wHvR7qQEBdVvRhWwkE7MG",
  "key14": "5o8v3nheyBAM4yLAD4v7avQ2CEpjkzWVdFKKxhFhqhgB2SwGcFpaLivKoizji7xuKBKFZnSDwaUgCNmqZ52MVQcP",
  "key15": "4hkiEU71XH5YJQpFsve8XBgjRN2qFCzJvTTkM9gDuNsnyCYS1RUgU4gothb2ZbAxNbzAgCLFkM4GiBSXgEEmr1fV",
  "key16": "4Qc9kuQYSJLe6YShfuqrJ21tJATHJskdwAKcFnqf3kLf1HmhL31KB6PYaQvyuW2Cuh6vkEaNyNzKX51TXdmQu9Ni",
  "key17": "4HE8sYVbpsA4MjqoqyxB8sq5rqbNcERPmw7GRAH6BLmG2mJdm42qczNDP1pZJTBGXxenmCFrQ4wAjj3WEYLTtahi",
  "key18": "rP8yfQEG9U8MXnXGkfnjMeUyEf1DwPDMFzQ9W5SNhjsNWa6NooCYS29D5JEA1JjKJRWxYZhxPQGVhWLaz4BiF7G",
  "key19": "2zexotBoo7pQNoReEy3PCT1iMr8kFqJPhjJujQrX8jQgQEPngktacxdJt1a29xf1FnSoB7AUQo3v33HQ8BupuexB",
  "key20": "4yXoFLmxZfCLbqFnywGSwwnzQcZvZu2QMZeZpNcXoKtNa2Bxxt1psohXbHPZD21jxRtBJhjPp5aWUh2Ja3xjAMPW",
  "key21": "5qCgaRcqucwS49SiKtXFePG2A2v3wf1fAoZpaQDsx8YDv5XvmQHqdRS2hrdFnb4ywH2BcXPkmmDTfagKQRFaXfHG",
  "key22": "qK5LStzpqMmPgSiQSRgtYjKyHS1k8YJrytRK9EU9cZTX1cftkTrWfcRt6izV9o4JNhfBBDyikix2Eu5fEEwa7gs",
  "key23": "KsJSy9wPzpLVsAriUCAVjW53pDRLAAQjPZziQmgQXfJuiRAzrYDudQCv2bu1qMgBvYxbMoxqcaTFR3VnAG9aZUV",
  "key24": "56L5vVmjGewq5Mvv2PHBVe49p2MbH99BJ9CyT11xfFw58T5f45EjErF5GkjQKvWsEm5pWU7LPBBwDryo2UGAtwL"
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
