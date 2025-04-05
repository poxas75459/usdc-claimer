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
    "3n2mJdk9wLGWW85GW9aVXSH45bfPUkzq2cNzsPii3uD122gTEGMNiJmxUjyGzEL6fWxCE6RjMAz32XGBtJrL96dJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cn2nBHcPMrwf3uy8BCZRnq8sjhCMvpR7DEnMF9Q2FQrUgf6CcCdrCo9zNTVNxVCzqYWbncvcQke94tJdQb6XRzM",
  "key1": "S1LxHx3JMgQdBd4v3UAtLoRqGyC5Madyd5c7sV2dDZqgsb96BvSbL58VJdzyVnAJZVTgD5kigXEDo66YxCCVG3y",
  "key2": "3Qw1Bqrkp7vtxf6d3ZMCUi4BdPAeyqJuUe8bVN4EaFo94pbZ8yuJ7Mbkyh3fNGAa6kLvu5oQJ3R9vSjypWMnAWPf",
  "key3": "53bNxWJsBdzybvweDfwM34ESTDcPY4x1K3MpH5HYgjZJJx6iUSjhgjLzX746CBgHZvzAhrBzAP93sv1v877GtxVf",
  "key4": "3Rj1D496BqLYDY3TDJmnvaSHGLbQpZ42vMu8tYgiFManvpa6FUQK2HGKvzdJu73GFUAGLcQC4ekoFeUpnB1XdBo6",
  "key5": "4hzp2PdnqyeRm6fBoxMMhJeiojQPFmYwnFnoK3PatrBYUVdcPFa3suL5gNAGh9ZfQkhnrt6fV1v1FftPJG1zahxp",
  "key6": "2jscGdHvMACuK6qraEVYJNA4MjU8gT5Zr65FV11KT31tGQUUeRTMeqjtgsNABksxdCA46WsuTAXdrGkdaFwSFEmM",
  "key7": "63CFr36mmbW1CTXeiLQhFZjzSRGeXpG2uf3shQSW9Xti3ntTbu1qf7oVoBcuZis8LDRYeqBjnFdvuUW7MFpZPzne",
  "key8": "3RwgJCKPDbhoBkJ518wkLdBURJWgWNCXbehkGNyxH12N3DCSgLWrm68WzJVnQuJVGNqSTijg2vNqvKGuVWyiUcX3",
  "key9": "4Exruse6JaajHm2V1CgLQzg6LBAHYWN8xHGKaXhBH1qh8aGq2g76LLwtAKpQnqYgPh1dVvCeVt9c6imZj9zpY2SG",
  "key10": "24bVcLxVHzhUJrb2v5aFpHihKc1kW8e8zcuruPKWrRXALifzNHUVLKUcHDVQ1CdzEmdJp7puuV91JSjhhsXakNoU",
  "key11": "3RQHqajzKjnX1c91Gmy4r8BD3pi5vQGFoy9rBFTZYNs3FZUcCQ7aYsSeystc4DKonKBVZcEfN7AJtZ4BH6FpWTiF",
  "key12": "5ENdSC8guzFpTnGYwnvWk9gikZCKF8WwP3LkvVWUjedkELLYLnM5xtMZCt2BewupgBMetRnWpyBPCF8kkgrkVGo8",
  "key13": "2AFk3VTEhhd5odPfgf6Zor6Zzma3HKpF9r4mUiBSBDpPjmX9TpnXTPVUGLNsMwcBV5YU1XHFdAg7noeYzMpvstun",
  "key14": "3Zh7FB9MNnJCjWN8BATwfLuXta4a8tBxRg7J2BvgpFkibuxiNgRUGUeCEuY3EpCjh1S5t86Yy5u3sqU1WS8D756s",
  "key15": "39HkHucd17Z7HSy3BBiYwTjAYkbuV5MAq4cmvkbVF3xtfsrbu8dhysZ4uA2hMHHJPeZA11HXCoS64iiH6kSmb7Qz",
  "key16": "2fALXYKTsDpmm6xuwPn2rjKx3VuSTwyk5azNnczjpUdu75rpiBksGykFdKiL8JDxEd3oDY6SG6TCeHa6gB8spwVZ",
  "key17": "3NVKi91FshteNA8Nm2PyGxzgU3A3Wwnwqx4zbLRS5j8BpmsmJGGGuPGLJLC8e4EPnY2vkJZ8ULw5LF2Rb1PcBJvu",
  "key18": "rnJc7E8a16uAZv7ojhtVQ91mzyWNFeEkCri3K2CGWyTW9bH14auwvDvd9YQLWCCzfBcugfkzPL4LnWpLBGdNDwG",
  "key19": "3QCLkvDs4ubhjbHP11vukqccrgx9cDL49S88BFfyG5toUhaGKyFAx5Yk2S16MLF86JwhyYvRtJGm3ktC7Gxos6dp",
  "key20": "3dA2TQ4ufcdnNoCPS5QBaCZG7TLeZjqUgReCuHS5BM82jQaq9neyrLbQSYnKV1YC8qWResyhSJ8NBuGd3j932QHZ",
  "key21": "NBRWbBMcHJbzdK6x6AJVj4Vqo2vNEXvZMaiRjayJ7EZDvj8M4sxCQAZU4PaQ5EQqv2godAAx3rC3wEmWCujNFXX",
  "key22": "KTwQvxjhRakVR7VCpTtBBbAdvuDFCGTMwkbkhxXrHh4dyMvjkP9dsTXtd3bs71SDSjxAstqrppunVvTHgARTpEY",
  "key23": "5YdsKg6rDncqw8JPzNeCLuch87xLkLioGgAaNCjPSZteCeLj8ratABJm4kX2qcUSfJA94jYjuuuMqWyPqCfM9fVf",
  "key24": "3haNCuqCjVAMGdAdimrfoKH6doSLobcjoGwUXbYsnX9jJy79k65BQcVjH6XrsCmj5VJUXfzUtddEEPVoK6F2rERU",
  "key25": "3tP2jTVdfBtLLYbhTCgdHuhNCdoraacEq8VQxddg9iCxjdcC4fJU3dbo8gt7mQ1JCmyFcRa4KcEqSYggGTd8AFmt",
  "key26": "2kknQciHQvVA4aYhseeVzsSVf9eGt3rTRaLuT7VTmyuAhS9XSiSLVWmEvVDrswCahSVjN3yN4adX6VzfLbq13u22",
  "key27": "46w9Mb1mowj8NhJ4FHfJSFDN2fRypgHURh9DhFU823ADG912KPZdFA9yrL4Cev6SaZqLUaCWvoyWpomYkJT2QoG1"
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
