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
    "5vaFae4oP4cSpskgWQh8iKAV2gigaKPGYNwnh6TCEX6FJe1gnGz67bho8UPpcEHfFo2X3Sr6gbuVpXko7ZphriDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5usp4PvQXcuR6QayUSzhcJ8kbWEffhMo8jGtScxyJpLGR7iEq49Fnz4hFGLHbrbtdLPXNr5CqAKQXcmzdRH5rjkQ",
  "key1": "4RYR1TD23vdGyp8HKLoQ9Pon6QrzT8tUp8jiTvBqfEjYFcVpSKZKBVkRsHfFL14CnEDdcS1yHKwvFNUbH1FuqG4m",
  "key2": "uD9jyNTNvmAjghDwqmEnaRuj2b2nHs1oxmHFtfKoxPuoYw4ogoaVNtBZvZeickLXzgMRNKwWXFs1YtP4h1GkkJj",
  "key3": "46DjoqDKWbo1k2geR7YqmpeRnjdtc2YwfBJAtP1MJk9ZNYJ4wqVgNzMiCGK3xgcacSuYWukq1j3tHuUTmG1DtWG5",
  "key4": "nXNvSt6xL8cYfnBQE12Negcz6RjLB1PzRcernxPWi3e7cBF3WisxRYs9vYkA3PG7zXFUkU4CxJaKxiGwMowjR8B",
  "key5": "3nifiph6reeBtmV9MhDdAftviH5q7ys69c8FqJGEouZerDRgQ25qgynUz6ihenxDvH54rJWtr9YXvYdsnmAhWJND",
  "key6": "53iRByL48U74bTSBUbYoPpXpBhkrpqWKPARyMGDicDRGnciCB9mS69kE61FVAGtagD8JFB2yra3wqS7jBnvZxKFG",
  "key7": "2mFDR3urqfoFfu2zNXcGcVMApucJs62YGTsh7ZTKPhJDk7TGZ3VU12wwsuBi2xV5F9ogy42B5SbrNBDXAKp28nrb",
  "key8": "4fP1kC9otuB2bfTPsB3YgDh6NqR7S4g4GVmqgeHN7buNF2iiQrbYT4o2qE43wUKUkevkZsna8NMxEa8XU6wiEzAt",
  "key9": "2WtX2XP6jbz7dMrcqhcp2gXKNx1WyYUbAjBdE6XfkMgiKjd6ndgEXguDe8n4Vfg74LRZA17hPfYC5dQsbPVwkQUP",
  "key10": "4T2o5y6Bv4uetMtPo6Hp7kDxXoHmN9KNRDzy2ZR481xLNJ2Qa5K4neDJHkwgycZoBThgJAXcTfhZjjwBDUFJRzeL",
  "key11": "3C9mgoJXGiPGeL8qLJdNPSP9bXePrgfhS13xnExHaqbUTpaLQHJGiZWndsUJMXfsqoJdfKkbnNcYHhN3sgYjXwYP",
  "key12": "3qFLZmPQwrucoryRbWJi9vrPwj8JyxGc7aJBPj9xcGNuaLdKuKRRTe75jxw2XvUrEbf9hq9vM5ju1yjQJR4c4H7x",
  "key13": "335g5YZqAZdm34gsQRBJ2X8Rpi2seFwQVZzEDer7AumAiSzBLiw6kJRCLCAQH8vSHyHsV7ECUJ8KYbWQuGRbKNzT",
  "key14": "UKQPZHWv4TcY2LrprXiThz7PaLr7eFr46fTGpzRmNoVJhZfkoSHAfVRZqgYwzQoDWSXx2q65xgYFQ4z2TczhugL",
  "key15": "21Fde4imSrehSU6zer2HEmZSJtKXfKAupUPQR8GitEnkQkEgqTweb2qKfKnAP4esNsvGNM9MEcvUw5Bzo6LSGTp2",
  "key16": "3P2N5ghRrkexXhfUiUSFqPdF2FNtkkXJZWwjatPAqT7sePi1fspPfowayL5vjGyAkyS5xB2sS2YyAMfEZK84YXvg",
  "key17": "4TXfAyzAdCfyWbrTXKPkscFtcyxQx3DVefDifEcb4dCEAYBzbTuXynhbhUiTHhJ74DtBDR4TapHXVxsc35u946ZZ",
  "key18": "5cP8sxGPQDnNobLyMYEYbhkNfXMXAvizK5KSrdZHUQssNZ87wJZXvgEAdAtk9KM1Au1BGwXid852DzvQiDteqUKL",
  "key19": "2q3iNVsXA73Rn2UK2rF2GGXJgz5HQ5ZUhiHCcDrPBiEdNbYUP7BXWh2doz8x5ppR9NTM7vJQVk9ymFckBQavQjSG",
  "key20": "3ceqEs1hKJbHboxjwVGewTMfCun4VK9oMhaP8jzRNGvTitTariVoJMxJaanxKgCKeP8nwBX8s3qQxQsdMH3EWkvi",
  "key21": "3qRkfXhokmWFXN4UDXbL9z5cGpMrwFNzFfyox1rhxTJ3Le9DkdPr4b5oS5nTKFVUDimMiTCLVx9nNctVNP6pdcbW",
  "key22": "3p2TktfoR3YGL2pahSmjJK73yaTUV6hm158oQJb8hxAwnPjTeHo6mwtmSJvgLzPFpX4udxpYWPpyHHAU7tG2oTgR",
  "key23": "2JQmMRCeWd5puRFfLd4oChk8MmNoS5hfH6kL8XRqTuusL73rpFN9jvAAnMBRzL5gFKVAUa3pfPa97EDKiED5PQ13",
  "key24": "2bZfEvgu1xRKX9Tbz6rhL5Fkf95nvbSCUVaq4T349SrXcyhUaoSdFEPBvWHBo1En324mD1uy7ArmSX2g4bnnhZGx",
  "key25": "3Kr5PWSmtqMt3kH6fqpZiJq7SDkiE6j5b3deox8xnJwX3WmdtaQCxLPoSZcX3Ebu9VJcP77KU9kyqYZfVLXgh9vu",
  "key26": "3AiVnNq5q8nH9YogFzXqsFxmF663mpbArmepDavKQ3yfGExrQ834fjQRy14xWWakUHrEt4h7X8MPJR8wEiGtxi7S"
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
