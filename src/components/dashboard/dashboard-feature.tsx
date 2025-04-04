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
    "3wUMcEC4WZp8JzsmVAKmfmuto2D4oDm1nMbJ715N3dCUiLSWTJo4VqdLc6n75xE1XoF31YKgszfqAX9j3w4tP5Sa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24jqf9smgaDreHtmwsknPGSDw66XGm5YqVLLNpDzhHsoCPfesCLk4CDPNFwT9FnSt6Ftd3SkZVW59u1ZJdfe52Lt",
  "key1": "3vCak5AmnyLc9r2ozw6iCa21Dt5FKHkReuFGdiFQzgBLLHbMVcQmUNfKiEjdZqGuBMW1VtzGDbY8P1p9DCaWGef8",
  "key2": "5XcC2pe14c16Lqoyoq6gdwmXnbD7mreoy6nxkyH2edb77aoSsbzUpFT6P8mxqCo3VzrCMy4qwotutX59DT2xtjJW",
  "key3": "2jg6EKngHx8pujBhzGbra7skGwVihgdmLaC4fhkB3j64QS5wDJMfW7d2zFyfEKjUV3EPcfwGoubrUymLqGoCNtCu",
  "key4": "52B5u8REQX2ybHP71JnGu39mtyoG6NWqxSbmDGGEeYc3hFYNPT75KFXvaqGEPbyP7dzmj5BCytPpcA2tfdA4Y7ZA",
  "key5": "5AJXkKPqdeeVXp4q2pzZZRnhDnxYPZyM4GvfBF45xTaTfoiv1tTwAwBNGeawqw85cwFP4PCUmTeGsXDpvRNLJB85",
  "key6": "27NHEtTWboGo67v3Mf9hpvpKEqBxfkP1XgAfaQ9Hw3nt2xrzDz2PEecRKZdVq2cEBUmq8sKWhL1BMyoayLM8CaKv",
  "key7": "3QFUFtdR5uB9jrkkz38VNiBCShLLwMrC4j7VcrqDn564Evu36cNtYqfhtA1zKFzXx8F9phQjc1hLabEhqwfnjrYr",
  "key8": "23QtJqFkKYC6EKw6GjtjfyhmQw5RD8wQmxbzLy92LDhJEcDBpMcCcvAmRDS3tvTCFWZ9HmP3yiNn8PiWJTMa2AHF",
  "key9": "51hBeLEkLCMuTpC2hKcJ7WuBTmdobUf2NHS9hdenpGmRxqmqvSaW53J57JY9xCZJCbYdFndYw1RM84aDYC53cPzR",
  "key10": "3FLhiStPaKD1AXbvHUBRQqt3GztbT34o3sLn928kxpDNvCkPe1Xyvuz8T1otSNkuQxSDbbV3wWB3TS216j29x6Xz",
  "key11": "2T1hf4y59h87Yx9FuN9K3d8kPxo5xDHba1pSC5TYXKU3DdBA4M4jTSW2E8WBfJP9fURyoNTFq6gTbc7jshgdkVXL",
  "key12": "2NDQjKdE6WD3DY3QndGhcNimf8VLjH9w49UXBwXUV6Y8CPa5oMgGiLNZizVjiXQoKxhS7hE6aKLL86kQE33NbEgq",
  "key13": "5vrNNX58CLHUZrFTwTuF81z7U4qpNYK4NG3mhXizphm2fL8gxCHu5ro67LF1anVpokVVrq3H7jfcNMoaJbesu7i1",
  "key14": "5an1qXfFaR7ZK4KCcSmTzYUP246o2iDYid3qpjw93crQtXAMNMPHvWaLW5eXMrUB8u1UENzpnS2HT72wVfpx2FQz",
  "key15": "5hEUsCF881qbKC5JNfcG5a1VbD29f2C2cCuUatyKVy2rTNibyFAv64C8yjFk7k5WG37dhCLdxJbTBcouRH6J8XbZ",
  "key16": "2J5CYrATuHATppeHyVJTdiKG2PY2aP7EeN4AbNwrnF6QkqKz7Q3AGvpr3QJPDZ952iFeAkS278UrBkTfLftYFGgU",
  "key17": "4E3SBh8sxCcvKKPw82363xmmTwiymfTxvHTbcf8jtW4y5ZQPHGwHdwrvtZ5LhCP6XBYtRsWFgxpkaGBMBnkB8u2C",
  "key18": "2Hm55C7iFrfmLJBNWLYRtXvJTEuZeqaJQLnFFcnho5L5pzzf4pwcJRuYHfXyWMJacZrsevWjCn1AJiSfY8W2UdsA",
  "key19": "5sQr6axputm289RQLvPNaeW1mj3RWi6vZeVLUuUc1sQxmWzXHyJSFBBUvFn9gBUNHjoKZ9fwd96qY8m9MobHQBHq",
  "key20": "29kjcPo6wTPRg4BJf3nNsEa2VpJyUyRZiQUQtfN2E6fwFX5gnKAUgDRfvoYZpsvMtQCs6aj9XxDvpjQ4fxcfZLZD",
  "key21": "3xknW8hqNvzmQPbMprG5rQSV5zBVKYteeuXgck7hDiVzxgghoSvTGhjzwBZTcyTNtnwCbAMZzKwLwdf98ToGZkQM",
  "key22": "3AXa3savJFALYQpK7b95vgbBEcByyhb6DcNspbYCvWnMizp56FivpAGTQZXN6h4ioPmEPS3nzrGh6HTWe9x4K1GS",
  "key23": "4bes8XXPjRrwmXpqgG6uhKugCzDbchfX325BBgc4TYXrLCAibCt8Y1HM6kgPd68HtXCStoMkxQ2q1Vnku4zMvuLa",
  "key24": "jrmHeDWit1XnzdkKiFUaMKHBkfLMYPHLFSHiuRp9dyeMoDRCtiESbMXZVBiLpPD73re8zmtxpu9D7epxwsA96xN",
  "key25": "6tZxH2J8wzQsDGjdxJzcMD6H8mwS3C7qUoF5ZXHzPZThNSez5o2dyMBbmwbFQXZX7WMaw9xq7JNyRmoicUs9Lwe",
  "key26": "3PVp8UrR3sitEmMpMd9H1vANRtgdkc5pZwTpMLyNjwRcjSGQ1QVNY8qfhGxox7G4CgwQBaaWcc3xwX3wHMiRvdp6",
  "key27": "4agqkta2oZsRZiAKqSokmSre36vRbDi2xevG6U3h8Yhb7qyextXpV47Y8DQiH8BqiY2TqPZ26KWttuoVTJ2wBGYb",
  "key28": "4SjiyvygfqMayobPU5Qt3ZpgMAGsitfMCxCs9ck9ZXCT5pXusDb44ykq2CzcHmwRWcbanJRN1afBDwMmqV18nW4Y",
  "key29": "2x518QCW55KSJFWYkoHNFZidRphNafCTZP7U2YbuJ2msHVUJ6Zi9aoCHVQRgkwy5ZLdBtpgMhM6Y6HEy5zhVZ5nf",
  "key30": "3vFNJgronqpq1fpmAJAiJoWab73WLvhMhyrgUx8zvreYFK8sPw7MSvpU7YsBGoWSLcieAMryCL9qYzGzHN1JmejK",
  "key31": "61rsruHBpnqtD6fUarHRE4F5sBN1VG7gSSxKisw1qmYcNYUYtYGrQXLC2EukKxttmfYBhrodsQChZNDNpDrWATDF",
  "key32": "2q6tZEopoQ5qBidrsfqPEw6qdHQBdFsZCn2ZZJsQrBdn3ZRhJZcsZn5Z4fmUnMDDVnZtyYLKUjhzp2aQNccVhsQd",
  "key33": "2BDyz2cEnJMYQ7TPWsB3q4HNhCrzxU2XrpXcVNLV4unLKtZ9pEDmgnnDCgYT3pQHQ63dssZfNyRzxhRwrsNa5nge"
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
