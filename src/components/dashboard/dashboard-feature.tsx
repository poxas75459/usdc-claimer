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
    "5NLuizAs8HfB1NHYxQk16NTy57jknmF11uc7zFsyuc5iPoPB7BeX2iA6U4bkQbhXAfvoFE3QBxWWi5Scvr47kXgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E5fqeQy71oHy6FAxtb9XmAF9i6yVDRKDYi5NcmL9J9h6dqMid7TxMPojg3Prxdb8JFPVh2dFid2AmqmgUquU2Em",
  "key1": "5qLs6GnRffRnGzZpR6YWTCixHUVUHJ734T9XjpdzRrx2wMykiDKGv2tvMdryyHshgxSQHAXkz9EAL5Lt11wGFDs",
  "key2": "2Wma45gjYDCWDk49SB3s6JFt347Ub5v57p2NfDxo7y5c3y6BSYHRnL1PrGVKSKf3x5xwF6R28woeC11AKSsDr5Sz",
  "key3": "2syTM8U6qjhxwbkNG3Qi9nPQHk4VTCdn8VFHxuN5uRB2LZwre795ZavESTHKmBWZ3WzkjknoZwPFcfLtwMpXTvUc",
  "key4": "28xJA8u7sKpC4zkoFEZxYXGwKZAs2MvqhGzfG9ViHHcRFGr8Ba5hvXoGfZ2WYkAdCQtxmToeah5ghpF1BMLx5fuD",
  "key5": "6CtetpYuZ6ejHRC1od2VWmzrr7s1SYNf5LENqjLaQTJnZyvfpCzqbg3jGMc1SsGb1tkD3XpQcH29MPK9k6fRpbw",
  "key6": "4LMLYLSWpuJKBu5Mr7G9HB1z8xu5sZ4W5L5zpPEhzb5mZKgfvETTu8adff8nUqbqABM6WBfY6bCA52Chij12bqzz",
  "key7": "2kt2CdGVBNaGz4hAsjfptPsX5uoXjjy1B6x6gUqQRRnmL3iGa7yDJwdiyHr8bPTVsoEhsSiJLu4b9q7PvectxYCD",
  "key8": "4SECwx3E3R9udrMhPbSxbQBxfRPiCHmd5uikNjKNzA9rEdWNhr51tLWQAW7PkpccnbjcUe3SMBbrAEhYs9XJSDzv",
  "key9": "2SiDMY5n2YsyWfgZhzSDPef3b4JhSoNtXNiQfJJsvBrKPjwn2Wt6t4mdY2G7WZ3c3ciEGshMXbxCEojkh3yYXyFX",
  "key10": "mXy4L9XuxkkRBSuASKZ1kXDMmj7hybwTsvRquqhtx3MpTkJSVdLr5XZvBSYqdHfKHwoZWoJkNnrArgDpJEgkRfG",
  "key11": "n5qj3bj58ufJ61BP5Z7dd2gNwZke4Rz3yCGTgnwvJNpVPTo9TcHyL1bkSBeAH2doBkBaDcQ4QotbHzScqCcMxSo",
  "key12": "CjLbYgCzza9VUfFLuP6KxfU8CYv99moHNy7HYxybfNFZmabxZpESo89mA6XLopmg2Vm3MEb4Cn7SwxrdAdN65MR",
  "key13": "q14g4Fq9EA6LN2M67qnCfUVCrdbazyLHzcyjQFQx6gCEyJbSLNoBSLqz8UGF3QK2PCcm6zafq7EcBAQwBkKvd4H",
  "key14": "PXGiW8K9aVyHUvBPzg9TH96ZKABHWvXrxAYbnv1gkfSUEQ68NAGPW6Bt7EccNQbVPDw58Hz4bLjnQ82UNPrxqqv",
  "key15": "2ajvhF2Vu5k9WEpEemaeSWgH5ZwJL39h54z5C1WtAH6PDDWLWmh7q265m9FLZPAKV8pXbHQPWakcW5AZ9w4Jo69y",
  "key16": "3X24Jf5LPQQJtc13ofk5PUHZM1x17oEKep9BSUoqdPJFEcppP2V6G2N5jngPxHhAf5s32mQypud4U4JszCCDVURT",
  "key17": "2CgMUfu1VUvjQKNAuiJTEt5koAxyDpsMYGD4mc2tBiWTzQkWByarTH5iuzMrbqGpQuQ6dPwjFTPi8y6VvVCoHDqg",
  "key18": "xKRX3NxP1Rmi5DAUcWncP52xRZv4i4jGWjTKCNPAd9Bnq1zvQ98i64VCxwyck377kqHKMUVdpAEYjerGxtMJt7R",
  "key19": "5fjmkkqo1ANtPC4QfBN39rPBxPrS6zCFfc4RVf12vPRKyVhLepDVyiTTG4vma7dg97f7KVJwBMnQF6fFqMFDV6eh",
  "key20": "H168EoA5TycWwFRqrP1N8CD9KY9sSn6k1j6WraJUkQfB1TxJT58kionc26H3KjReH8GvatVh4Vnxjh1GYcWh6Ks",
  "key21": "567VjUdEqkfhLaUUjZAXstuRPikw9mPup855SNjWFLdT1viRdaqvtYvu27WcFSk1bp7y5B8GY9fanNi8JpuRbUws",
  "key22": "2nGbKh5uWqcQ4Js3iGHBS3TeSrdgZ5FzzRdkwVJUcsNCDccYU3jQmahGpRJwwvXAJvKiEtBp9L3NarSb1vhduQkg",
  "key23": "5iFCgHRoALaFDHJcjQrxt31YgJgkrT95UrDxgiQ7u2d6ycmttkjoBiyKPxVkupVVBRyWZzKs8BTaH4LB7byHa8j6",
  "key24": "5yUmTkT1ieNPhfpQz1YkXyXu7hoqvsfiD32GCo2EipZnTc8aD8RazKK8fQ3P8U1pLr95XpgcJj1uKUmdRA3dRw3S",
  "key25": "5WawYvrzQ6MicYSg6tfd8nSQwH7jBTmmm69GUm2WhKzNqK6xwmDTdH5MHagoQVDXu1USHdp1nV3vF9ji63PjGreh",
  "key26": "4WstmhbMH5Rq2RHHmse1k7QzqUbFdZ8tDBUXqkDRmtSxU1fp82HXQLh6vhuzVmsW1HzDnnQZqnohfCXRx6xmQaAM",
  "key27": "3BtM3M1THxQjmnK4W4zSGCiFeFUsVqEDJALmPvQt2nzUGw8PfSmpQy1YAQLjw7i5ccrWdPJdbTg2MD8MgZWYMhH5",
  "key28": "438Dc7Wuz7WwW3CA6Zb3XW1MThQrt39QNR3FARbdgw3PkC1jATgPbbYCet3A3VTcxkvGoabwJKNyZuaJa3G9cm5z",
  "key29": "5mukEgG9GEQHavuHpECGSKmy2ZvqcmDqb1hC5CnKkSL1bVrHJj71hL68y3SE2o7CH7czKhVZ9URM9adSVnUbYmNM"
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
