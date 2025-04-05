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
    "5WwCUBQ6jTC82unAvPdzNuWkbzSarHUv31rVNbL6QzWVRiJGvq5iiHfYaGjU5sczh3vUFWr8bPDRaXyjdHViHzkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kxVNV5Z7QRCvn7JUDnCVGjzm53YsiMq2UrDHaPtm5TbYknZPXaaw8vYFrVqyfzeijoia7sLgJumUPVUmW3mgMZf",
  "key1": "2cmPMTLX45Ke4xtmBuCSQJBdE7bxnVbPVcJtwDiuWUR88Wzt7i4QtwnBvRwgWRJLGAMahULJMwYwSX5Ljgjttj5A",
  "key2": "y7kwDho4sX8ar59NVeMmQ3BRDtKf1QKTvfWHn81jcz4B19nWKEG6TwEY4nVoLBfzy5CJt9vXDuFn7V5q31KEBn2",
  "key3": "3H2gbHxfdRFYvoYQV9WVVVSQrw6ygsxgptXpuoZ9LV2ADBf2UnfQ5vYK2ANoWABMVY8EGT97tNUyH3MkSFPjME2P",
  "key4": "3XyfgKVcYLV7HgLq7K3kCBeXVBpWQEXQzBKCecuNT5TaDsotWfiBDoa5CCUMBwwqhdkLTofjMJ2Mvu5g4LmhS41T",
  "key5": "4rpPc5BRLr3Q3XTzBDcv8R9endqNr8CmDmakatfAzuKgxckshpHhiZzWX52hjiGrNSXGJCpigbLykCj2K1chQoB9",
  "key6": "4PxhUVetP4EKStWQbhxYGaoUWzRc79embKdi7ViUEthpWvr273FK4id5YcuCJksBvDpVgD5tHqcjk5rNY71DLJhs",
  "key7": "3cYG2d2cxn8uzYULhS948sZWKUieb1CewhngaNJU1EYBokpdj7PNce5bGErhpFg9R2o1ymdRNcZ7uQo9cyMZ7HJS",
  "key8": "3aCMkjwvPjkYZEFUo6oTHCxeEeEwKLjUZSntrF2J35nYkTpcFAMmyk7jsZT4jEj1GVwAJHXq53nQ1L1WARwCkKtr",
  "key9": "2MohssDUuFzjQEjPwTwpummffmP2izGEz6cpr47M9nt1CXJMGHBWPHGzkgmsp3pQUVnb5776cUZZ7ryZjS8ExJV2",
  "key10": "2qpkZ5mrfmhK7U2xhzeR7siiishD1FBwsjAqNrAEQyqW3yvTmdcdqUGN4oNzcPgxAETYaJzVcL9vrANYPUUwbnbJ",
  "key11": "2T1JWKbVdRdz8Bh99pS4D1gyTJn1zn7zz5TKnbd9Df8SxqurPUbzbBzqUGBoSqBdFtgMebnSkTHPAyXT7xofAWej",
  "key12": "4TuYdcbJnUXWT7rECA7A6iRbeTnNu9RbJh14qXeh4t53SXDF51ZZ3P454oUFxwYgmSwWvA15pguJzLozLjAfgJVD",
  "key13": "bffJwKxXtzVLUE5dM98ip8eiegghxNEwRXxB9NK7Jwc3TcJfVKEZadSAyLisc8r4DoVfSMi1wPwdp7qM8LQnfJY",
  "key14": "4XzRRsExmcRbxmab5KLbZXfLdXNabSLQx28QfEgzw59Gs3ant5unjpqmkYvcTkdcgc4BB6Abov8kRSxacMspnF6G",
  "key15": "5H9ozs7SBtu2UnM1dusWiUEMHT7MFrArvaG4iFUh1PQdD7z9z1HifoZc9L92qpRGtnNaRx6qRZcQLxiZMXcvys1r",
  "key16": "QytYLmi7CBwUmXAb5cXZE1uwRKLM3ahzRRgqwVQj8H1Z3JAwvJ8VxQPjizZSxYPxYn5bAmJbRMPdFpz8ysVHLhP",
  "key17": "mHaU3rMjRPbSekXYQWLm8pCTZwNn4qi4xVzmth52GLmw6bnVrBUiLdcVcmPdhTTuTWgGuiaUw9KjJ2XMQGLd2E3",
  "key18": "3xQ94J9B9SadUorcHX6YehTyEfajoUzpgS6gjWHtuEuVg4ERk1r4h8kiYX1Pa7FUHD3ks3ShBWuGZaXtjgoir8Ca",
  "key19": "2H2Ca3kRfYjtMP2tEMesoYBXaj7LRo6UwmMF5WtN3PimWVU3Fiar2yAzBMBnyiyY6mrc31fBdbWrK5sQ3hWCSEmx",
  "key20": "5BTazM4uxKw6H9zc2NXYkqzxecEk31BBG1oqAz2w6JPxx9FdZ9cMexCH3qWDLBZsRZBgLXsDYVvW3qGjQwN1KfXS",
  "key21": "5G14YyanEGa5vDc6FmGsXe1TQie5uJSYLAAZz8diLzyY6W8i5cCjfZN9mcnDPchhQy2sCw9XrRwdmpkg1xFqioTU",
  "key22": "SvQbyFx7Y3NBnrefiLmwi5S6h2FsNAFU7BMpX3cLAaZitoXJgHAuYvJQGFkuPoTWK5b3uYb5onkbsmYUNBkqRJd",
  "key23": "4KANxinTH6ykxhmX79mQpCZrK8eyoQARYa5qZHqMsBah2pMiWvYWxVrnzmSCrRoUzLgP5xS4a6KzCFHEHBRitWmU",
  "key24": "4es9G4jjCaMuFVK3Hbjr5Dux63uCs2RjDHnekHQqeatHmK5uv7FT2UYjWWJkRs4Q1muaqZKCfSjgwEx8GKMwTUTd",
  "key25": "2o33o4Rppr3s4FeWvDDgep27DyAjaiZre38jwdGULHgAyY8uCYkBaRMQ2JS6PvdTy79yVWgKMqeJZWckfepAMinc",
  "key26": "3pGttjWDRQtzEXis9QdBGoBVw7ojA5YUFytTxkeAMcHZ9KMadRTxf43KB526R7HseNvztCNh9n9LbhZemyNUk7KL",
  "key27": "xCKVohbXsKSMcYwcF2zFssXVPJfgZ6rsnFMnomW5LQZ6oXGUVcrPsdpNDx4giH4AXgr2MayNUmzvUkEoiqAe4LM",
  "key28": "666oS4SF4DyWTsx4jVmnaRR7YHC33uwZwAPk5q167ERTwKuuMH8BMGtU6pFSDpm3yVyeNsfphF2poC8bpqbLMf1o",
  "key29": "353Z7LF4HXThRbhxatnyGQozcb8FA6ZHeo1kNT3DaibD4L6Nzyub7MyPcwkt1fgY2NPfc9zvdG7Rxyjf6LsG5hAn",
  "key30": "4EaWQK67jb818G2QuKCAHahszLMK6sfazgVXpP5okSp664PLmRMaSWbHnbrjgbzeVWNebdSADEJkYgnCoGSyYRLL",
  "key31": "5tfpPTY4Q4e84f3A9VohAz8Jb5KfuWh4XxkCTQuJ5VdeWo3rFRUT9hKfKebALJPHd6BHxUnJn7UMCepQRnF64NQY",
  "key32": "5VJFkd9qY3TFcq74meCPWrF4ff8Ntp5mZGEWL4t23miksQq9bWzCm82X6waTVLSugM1PtJGn1CbKS491jrjBVPnX",
  "key33": "oiCHKRq5KfdtFBrC8z4dnJ3Frn2VVHUcT9eHyJZJfJndcqvoYToXj23DQbADXUd2mCRSzYdMZh1Qwb5hdDF3sej",
  "key34": "3uu55HN1Gury9RTyqdh1c1JzZ3jxRADzS9Sew3jDzrT9Hw5asKJsFahQF6guxzw2JMYrcTRA7TmhcY8idMnDTKVC",
  "key35": "4qbDQ3bZsQPZLQ7sGagW4KXJwjZPmh2XbGuEvUBzBSc7nQ4z1LaeSs28be3PTihSBtRdFKyWDE8SgQEBjRTcmHx9",
  "key36": "3gMmEUkY6gxqnBeTDeBPGoXU2VYpn4zu84v2CAPJhpoELCKCm8ubCvVHkFmouxkSdVzRyjEBG85CXMHf4sCmqSBu",
  "key37": "5GKzPaJKFipuM9ncB2qNyGzH2vtET5An5346ao4VaoTWvcLRkaK9ed97da8aQuem3j2bmxQytToFuzbDNjm92sHy",
  "key38": "4ytsD4YWsNkrtuYxssEoFitBkNK4LPfrQZFftpxg6XHevu4EKTQ7VNp1ToZ7hWcZgHBtfhbttP2hbQzC3UcSN1Wv",
  "key39": "3tEs6aRyFYsbwTXS7xzxE4t5EmQMzC7vtiM3ZWqT4dtb1mEWQUZCJKX32994j7qdHtVNxEkmgvinA62LgF8rqkr1",
  "key40": "4Zs3z6PQLZERXEPpxyFiPScm5gCyet5XfjPMPYvXSWFt5e66f6gH96GFbJnkgEi7z4BjoowPUhaqQT1ChgdkGK2K",
  "key41": "4KBzHGW4LNEYe7gGGiaUp2QwFA7xiGEuxRo2QvWCp1G6SvRzg2F8zkszcmzc5irgid2EG59u6XXZNMxHtzXzSH5M",
  "key42": "NjM9AZdz2o7k5rbH19497kd13ucPQkU3gZnQydZwtAtczsrYR6VRnDQ38PHs5Nf9jUjBMbMedTa6CrpK9oACAkc",
  "key43": "3o9m4TsZ9Eg7cz6ag7wN61ryZHQNk3axV5nkJ1HwoUoe4Z7MAUpLbxSjjfN7VRaanCjEKBrzMRBhwoHWWPuxjw2R",
  "key44": "5TUSFdPFTkVwRKYExpJGKGfcdjXccoM1b3sZHn9ZSXHYks4REeNZbGXBHNMKpyqsY6QmwPcvHgZniZPBB4wn9K8W"
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
