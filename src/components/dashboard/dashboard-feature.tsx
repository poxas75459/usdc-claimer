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
    "4rvon6D6eTJ56e5oYeBJ8X9iqEHXZ741uk6bUXyeGg3Enk2Zsoebi3AdUNCepNpVZNPQosKm7Cz2Tk5iDcgqF9nC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gvKByVrXKBMGPiuUCWQFUo5vaxkzSbq8s8kTjSKguGgitnK8HePkAT88hQopBnw8AQw8ZcDAaRRWcUXjnxrgbD9",
  "key1": "oDpQz8bj6qtCvTxceZCKcrFam1YQV6QUevvcMXZRLhxkK77XBiBkSgHgLYno4gxfAGaC1u46rw8iFyAbenuAVkK",
  "key2": "4tdzZ9KB8n26HSJSsrJDDzhJJ3teRyAVtAKoLJhUZj7UhPHgouzsGSYFPeUi19p8cpeJBHAKKDquCeNBj8QKnsmP",
  "key3": "2UEti3UJynZG5hyLNeWf4tp8LDVCqNnmyV9N1aJKsa3fmHrZmxe1PWCuNrsL2porCHWh5Fz6YcyACh8sLPSo7qBi",
  "key4": "MPwCScorjLt9vF9zr1VGpywmWyJuKt6Mkd1SSkwUGkjP9e93umygbnP1hcqzfPkASh7HHW9hqwZUJ7hsxEzhhC8",
  "key5": "2tPgRFdSzjPNoewy4MjhxFfaS67sRNvUCSWtBX4T3N2NX7UDM3mbqC5FwTwgF46UyBkBie8vCrbNVvfrM5vHNBi",
  "key6": "2MUoNcpoUMLXS2nHZan6gYZbZjcwNL68SK8TfcTqdQ3uUxZ8hLxQbCqkaCFBpqtctz5wr7QdjQZox6cV6uABtwsk",
  "key7": "3nRxY252BbGMYVLsY3udwnzsXiFrCWVQDThQH51g22Gu7G1v2MCEyfJQ9h84nxgMsczKLksNorapaCAp7u7Ttw6n",
  "key8": "3CP34yYWHrro7axZk9QaYDgpAXPLdPSbD8HqvESUjMyDbF28K6G3xGmWPbvYiEuh5FfafELnWQAR1b1quGpCXUbL",
  "key9": "2aKtAVGwyMGQfpah43dFPBpMQKdXmebbDAwPkmbPAy83kxsij2fSr4dHntk6zquPGpEQRRd862Mh1xVTAetBQUQ9",
  "key10": "3jym1Xma4BfE3diuzMgJFMpnQV8qfxMADzs8v2M8Ba6utuudV2xL35A7BypeRmHH5wVDkA3Jhyqne6vLgzw4Pfax",
  "key11": "2rEnGTko6MJc8r3PA6qCmVciKpgkNHAcJydvxjbgRWi9RwhyFS4CfGizQngicGakCqVARtJjGEPSdteLrCeG6v39",
  "key12": "2uvfrfxHFGWoMSv8mciY7vRUQqFEhuRvcqjEsx2Eu5qK119DZrz4k3pv1nHBL5SLSz6yjpQ2up33KB4DeS88qdXR",
  "key13": "sQSbZg599X1ipFHiiJM4CGYhfmxkhXEmtyCnWRmfVDRKuzpphurHNGLYHX1BbuvPaTMAq9v5z8ghBmkDtSAR2qb",
  "key14": "2FC2ssiQF8yLKi3zcxt9Gzm6qavFFu4oZBZwGpCSaN1p2MUJ2uUE7CzSTx9X8Z9Z8FDZjEZBNWV1w3g7fiDwFfT8",
  "key15": "4X6CUF9Hh2BmzJmTxUwnvjq9wJyWPFArxvKepeShDu8UUZ1fBb7G9kTJxhWM2Md5BGoAAiZs7LKg5AyJsnZJHVsq",
  "key16": "5CqYYJzA1HJHxQ4q5d9V3rniiQQT4A5myKVjUXrh7ae9zSkcF7oPZ1dtnPsLo6xdbTQxQofkC8FeBzQoFzMjbF1F",
  "key17": "3d8cqAs9PNSCeRYcsGbMoZ3NaxEgp6x2BkA2RUgaKeVcpbaEmoyYfXmJCSYxgZi7JC2upDKieNsvYwTXU4MuJoyp",
  "key18": "3ycZYrobsNMAQoMPVqFiPpVfcAkmpXTgLT1nBo8AN3uHm7Wu6AbY6KrtRsGMJFoo5F5zdJaHEVj44MkDd7WEhEzH",
  "key19": "3TDrDWpb5Pmt2NMLk9d57WGFokGqLq3ayjz5gDmr1nq8HZSoHMP5rWk2cvaDwmx1bNVT7puTVky1C6iqxiWw9o3s",
  "key20": "4PieU7BVjTAbH3CsZnsb5TjdSbwC4xeSjZyWMD6TwenkGSGBeWzjKn8SBUD968LHAudVQfFE2VKKdQcwJCLkHkGr",
  "key21": "3Hh65grFh6WGnv7Qf1SB9QjPzjE2Ha278BRzixfm6n19yGPg5XrxmKtRuvRWZHxLDn3WwYMms59vU75v3Z5dvzNV",
  "key22": "ANbcvDad1Aetj2qGH2eqXXQMgtxzZZjx3PuAzgnDG2WBbX99N7Q5AJs9dW4MNosPwwDA937uop7u44L4LMtaDuS",
  "key23": "3Yg8vnhyTuAgtgksV4u8AXscDJmMTHuBwXy3Ay2ZoAUFRdB8maYGTT6HGBTbQXeYA2fnt3DALBfZs2PvzsNrGfdJ",
  "key24": "FNCBayT5bu4gp6qV5gD9jabE9EXwWcPDgtqLoNmCQs7jgGLcnAUHdAppAxoFyYqesUZtr3khSaCJzqs9zt17Cvt",
  "key25": "2k8mLwsVdR5yMqo9gC1hLEs52QcbhuNJTKGRqKsXCo3EfghVLDNbt6SnsokA3Wu9qWj5TKV9fLbyPScDDByTCYq",
  "key26": "2FTxKLiU969rNvSn6Bkp3428idToeWWnT9ThtQ8f4yeNL6n1XfGzHfpxABm2ARMqg9Jjf3pY8Z5ccWgDApeNSn8",
  "key27": "cGY1Wg26RNWHVysyrQXUGgkLasuW1xqmMTd8Mika73DSnD6uSe2YMFYxbyUEMkpSdeBwCrzmkBVvekDCG12pCkn",
  "key28": "4gS981tsr9keyf43heWiwSgMzb1aL4DtW8CcCx4Aa5nZzjZSHswvwCeLH2t31DQpcNeJmydSXyU8MY4AqZ6t5ZcG",
  "key29": "21Fd5yvEQWZMfmfPs5AA9ErJPVEkNv8TzyfZ8woUFekMTFHqRAJy7deh7XqL3Pf72wg3Ybg8HRZFXMSMqRQbjLpM",
  "key30": "mehnbyVyA19EbtceSLjpnw7a9i78jnAPPhACB4Ui3djeziucMSN9Fy9Y5qVhE6uzamd4ez4dQJh7z5meNi2aR7n",
  "key31": "36fJZ7V6nNgWz8rbLNc8yEmc2LjrbGNMhqgfMJmwcA5i7NEcR4FH6f9wYqSFhoMGT3N9ntvyRDc5EDJ9JRAjQzoV",
  "key32": "2WeC7EjX15FTajdgun1s8NLrQ5GoEg5t4qpNxYeQCcpjMZ3P7fjG1ag16CztUoWbZ7AsV2tmyPkiU5brkr86jreM",
  "key33": "tZT8TT3BnU6d8k3524wKNTE7W97PsxPLNV4GKmFSzUNQjKWx6uA1BTH75kV2myhMdQq4Ct1icAsTJg6DKQoVCio",
  "key34": "SztCmRzFpNgt2FF4gyRbf5oUsgpdRtFEndhobTerG4LhjE19ac5qgVSqaXZnfddQCLcLPe43eEXeBThwNB8rNKH",
  "key35": "22yC89Mu5JSB2hSEQxn3uaTzEfR33AgM1X3NY8CG4BJN1asphzarwqLu4gfZ7mv3ZMFh6iYGWpUaeoaAzysHLqFv",
  "key36": "25mQY6i5xM8HbgxRuKXJSDev4C48gCbXeJ6JbAQ7qeXmmoDJGHj3gJm5dpZBwx5zGGa3G2b5keKY4L9i35aLNgdj",
  "key37": "JFpUUbMwKY7CUdixEDufx2DmtF4bm3ZuGbogsGGMhkHVmA6LWmXTfvSD9pMdhABCuwCJ16yfttudFKYXtLKSxVi",
  "key38": "3MPujfHpocxtebGmVEGRc2f1GdtPYopxDDBGteMUxQ9fDF5cpg3JZ6sgVZPt8oQXVaakQwtCqfAm4mxoeeEfX1rM",
  "key39": "5teF35NzidK1dGEpZWR67XxQGMWe9gzcntUBGe6RjK4Y712MCGCoeS5UPDvnNbun4kFR3cReTrHi3378DULUY12M",
  "key40": "2DKp3mQTYdcQruvwLoSXfcqgPB3nfU1FSQHwWWzGYWZneUpzeMYCJdSRvq7ajrxPXuB3aXhfE1J7jxodLhwYSBJ5",
  "key41": "65vMC8HjtuVFwWBi9ozxesxPUZw7gVsGZ282nu2gQjdRDz5Y1GKHJwomWGjD4mVgYPJ7cBXD295BVbzaAi7MivXB"
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
