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
    "4YdzixTz5unSEY2cQnDYDY33Lpq9EoNco9Sh4iH2hVd2TdDw9c33bFRemdz3fEMCTpAdqyVpT1RGxfKT4xfjyiMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CydwpPkddcEGmmUwaVPnimp5kYYXEHZYoHJhLykyu6M9nMRT9MFKf5CephKLcGVX7fF3vHYTxDA9kkccaQ4aoS3",
  "key1": "5LFr4b6oYFbYWCdSxQSdco2tr9MDVMuRTEt8Ansum2fjMFan2RgFo8StUKiijrSw9bAez1VwExEe7vg3YwHQmxHd",
  "key2": "4Dqvv44zEuciCoucHLetNj3F6jXrViLsb62WSq8w1G3jSb9qudSAqKGkE9NUWbU4FGJ7Hu7PZfQnkhz7w2quNdT2",
  "key3": "5DrAvT2btSf6MyeEsodeqrZL8f3i4rHfNSxUQrmPKCR3dHW2T8XEXxfRd1LiP72GxRyKa27VYqt6bTwgbqnBng1P",
  "key4": "4ToY1AcaQ2tsXvhZsfQUG3oG6TJDHsvrRauC92WQ7BECgRAbieo3TxuTNyLnopgmcxKjuazaNia3WhL9Z7ihS67F",
  "key5": "56vLJZBZy8jW7r9St16zAUr6rKNZfzzRgVySuE1xuGXysukYdh8zgYCjVni1C5JnvLAjm5Nrt4pJzKH3z3sYmKSe",
  "key6": "4rFb2skdAemYvx14d78nWoZPgW796mCVp8bedZXL8xHdSzea3Fh46wmG27jVsT4FXMSeWpUSfETUhjA5hNnhieiN",
  "key7": "5XrRpNsciQXMUyjWNdU5KGyRsgrAC3x4xEJTBo5XivvPckFYFcBavFgdtmasAwRRqkZxEpyWkicRvdj1u76Zx8co",
  "key8": "3AXj5oKTAWGcvdGmLdW8Z65WtqA1Znegmnw6ycrVNiU7qijyrj8w81Jq915SRYRyPX2rdzckfR1DbufPefmF6kxL",
  "key9": "2ehWXS3cjPrepLYKhPzdZMZm5HAFpuz8CJ9xxsSXSu5Ho2dP73sjNv4xt5Mw89ckYr4PMR3yUFuakpAwAAb77Sn7",
  "key10": "qQyDMFnzPJRMi3dKZ1eohRjWcWrUmKwDgJ4L8L1Dt4oDX9sZUh4SZ6u3wbawKfcaCJBy8pWm32nqJkXFJZZQfNY",
  "key11": "5AtJWcs2fyy1SwxLkAceq534pbZdAXea3yc2dCeVXWRLWD3mn1eS7BDVWD3PS4zeZE3CkykJUj82gkbWcVpMnq5A",
  "key12": "2jzoBUbDLVYFr1tZWQQj7D4NTHA6vRiKZzs9QaBucfTHBLFXwWRvKvtCVeo7GvShBAxRiGTfpxB8SyAdsp9r9Jm4",
  "key13": "4giQi3AKFGvkKK2rvLjGKgKfXxYJiwJuA97wuYKmZDXnCCv3Pdxcj28NUiBvLbdfYvmoCq5sFh5A64xXECYhF8EK",
  "key14": "59ZYt7T8zQVNnit2pbafUhfdR1FEe3HMCopjgNUnnHU8LdvX6oRh5yhz47cghwuVEWrWgeZG1Pq4TS9aBnBRxK81",
  "key15": "wBa3QAontkGAsjPmVPQLahzvMA2onVRbn328ST3DvVyUp4NqAJ1x5FAMHL9SQnuxsZug7k4WHCaQu5Pu5i3hVHh",
  "key16": "36C13kzVztGCUqPM7Q31tscJmKv1bj1zhwvh8jMqtf8vFHiFJL5fx7yv4G3jiJkMFKQRLpBjjbCUH9GKTvCYLjK2",
  "key17": "27GaCxgNZqKAbUjjjSLe1gQ9qhrJCkbHCFqG3JopozG5Zr4mMZm9xUEmezYzFhHevGhnE1XswvTLpEhLfrZF9f2h",
  "key18": "3pAkYFsqXY6C4iYVeFJmxFVPwWLnwWya87LzZ3fHmmy5FA3tdqQe8fqCcugP8FzXxB3AxAWcFwFPaahh6nhnbmSB",
  "key19": "UM4sjQptMqxGxbSFE4NFaSsMCEcEyBoo2GmeE3zEtjg4RVS7pejb4egENX2MrHU8DJm9gakv6ytsnrDuuzzZ5a3",
  "key20": "66cuZ6vvSzfjZc7fT3s25HpwKhzt4E48QCJ9Vb3ZoiP2rzsh4WzFhf4XddbujT7AnoqA2bWFehA8bNYMDQAD2uo5",
  "key21": "28CFS9mTnAMB25AemLoMzLCE41sXZZ7onGT7g4sgn6qB7GBhbmgYGJ5bgrvzb7sJnjq1YRPHzTwVeNKZj5pKcLBN",
  "key22": "3dr51dHadKZH6igoZsV65CdTaXsUjfm9ZiidT929tV65zh4xAhKLSYDpm4GFNd5UfBw439TkHchVgJatoJesAuzZ",
  "key23": "39nXH8gNQHmRZnEtH4Ugw8NRMmMEdfo3HGYri183WmdUcaPVdiBecGGJuQi9EZBMPcoRwqEUEbfX4me5gFetuaMt",
  "key24": "3KBJiMQarGN5Bm8R147HyCJRykv9nEwWGsjdwzMfcKdiwAt5yPtkDmC38SonuZGas3jWztFZV2YWwA68Vty1keoA",
  "key25": "32FWwAzbi2TVvejSGDXwx93PqBiPahEuBdU7sD2TSiu3yF7TXSM9dqaYMv3FLL9Uq9iEnhNYbzvTPYgcYu2R6JHq",
  "key26": "p5FK2jzTC5cZo1XDrqv1TRTPME51DfQHzNFMjwb3qTmYwXeJVwKVbsSHpQqQWkWEH9uY1gib1kiE5Tk3EgXY5yk",
  "key27": "35UM1ciWFv2vBDrAA4HWuo1tngi4LL45CxKfX3d1KgmhMDrhPfB61znBUQxv5TrfmMivoCbxgQJ6VLwdgFcawq6g",
  "key28": "2E1oEqeQ6TNoZQTzjPbZwHDUfMHMWjEmvGELfF5FYQSP5CqKz8XjHpAF3nERxqbaY2fzQNgMuVRQdzwNiNg5FNqt",
  "key29": "5xbiywY6pbPAQ7iyUQWjhWvzNTJrTxMYT4Fzfp27r1dQK9vMqsCbHEjSYyPPxULitcvGPtLBHoeZVp8sdqjGMypD",
  "key30": "3X537WRvkGffpBo9juJEnxsKN4bm83WHxnJQZctEmuAqeZ7ZAgLtLh6axJBSVXeK8gne592NMWZFpAiiKGAqTM3k"
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
