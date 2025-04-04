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
    "5Rt1NvuH3AdfhyqXrerGJPembpVpNbbJkdxp8pZ5zEYPRX2GTYTfEAzQGJMfkiH3B5AZsTcZg9CaqrhHgazCBTtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dceYzoGAYNTUShTdcWLqFTW5Lxuy562ksxbpsPNq7a28QBsviq9UZHnzePPUtWJf4gN58TTdvQaZ51NLqxdaQSX",
  "key1": "Kmd9gEhNWvH45zVXFBXjscFLqor31uUSRwMa48TJGP1SuaBgBuuYHQxpH9BLzmnY2BCLBYwQzy2GSfmra8f5DeG",
  "key2": "3Neisqi1vSth3UqWtDt34TXK6d8bjS4fp5c5MaYkNf5SE7NmZpaAJJ6xG2hiJcwjvrXaovGzG8i3faRYbDf4rgHE",
  "key3": "3Rq5MrsViE3rcR5BG6FZ5hWJSF3qRF6anLSWAKzn9wqeGjwsGNqY6GFaQbqxUaKEimB1d6hQWyN5yKy9MfF1gQUt",
  "key4": "JZbUzpPPdc7MNzCe5DvsMsP7vmYtk8SrQ3565o9zyQCQ1brmYqcQGSahE3hnniawtbiSVjRYkTpAVzepEsZi9Ax",
  "key5": "3cWccSnDz5K3451BrvGcXUNDgYx69PRHnbLMnejw8HEhS7sFTvPXV6amCxAGKdMbzQGDDTMrp5oVjfMTrQpR2zTp",
  "key6": "zBoVrhN4CehapXGdFXc2STqVuUnHuXVvT7Fd2CuLcNvDab2hTpQVF8e5P4YQvpDkPmRpkaKvuAgEPFLQLmwZL18",
  "key7": "5YAD5xvZGwppqJoXWJAi1Jf5btvaq2PC9F5hQjHCtGtoRiodpDHUCgtHMQtf3ivxui72mcEb5sXZRWXWdWg5fksD",
  "key8": "2fc16HMbVzLuTxqqkdmWbHUTfRtN4tyucomAWfqZ2YxQ4L1T2J3sqyjf4SiHqUCBDREBJF8kWjGQPeocT9iECZA8",
  "key9": "4Yukv3Hcq8DnbQPZuDuyXWWamQ24DdDDPDCA5Tnrw5ya9qUhr5d4JRbnXHiWzxW3yyUN8RHJrXMgMTjk9dEJ78Ut",
  "key10": "4WXxDKrG4nrTNbAGRNyPKKoHAbZ1CVG7VRK3J1j2pzwVJzS9cvoSnGWoGrKzP41QtueUXK2smcmkvzAgKnKMgucf",
  "key11": "3bbTeTgLLH4xZvAYU683u2HiRCyXkvxV2yjNaPNqBWG6rzFU91gEJPHirRJPXfgtVcEL8q5XMZbFPMFaook4Mefe",
  "key12": "4VUap8vf9wcL4XkGpTiyKh81FpnYtXCcHyfxEUG3dU7c81tv6eu6Jz15Uu2EsML2ZN5TvwoX2caMAoNR6EHZkBox",
  "key13": "2wNjcbcf2vaqXQQbEUueUz6hHaAvXzVvAwoqHVkQQT45SgVB9XZdjPMYdFsyEWP4qfARZ2cGwRjBjiYNd3LG12QF",
  "key14": "zEZ3RjCYmnLQ5fDJmpodobJZxT9TUKJMUPqU2y92UmBj2uDp5grLV1yhq6WqHvXUGVvWEnqZZNCWZ1eDVCTFi56",
  "key15": "hEXHrqsT1qvukRSDydzTzU55ur5MxoKQoHb5TSFnn2i6MeLHe4SLyoMTuCbo9UwmXK9UFiRdJ6C8yieMBsHoZzr",
  "key16": "3maddy5L5o2tEepTuU2MnhageUqqQWM3a7wBjAMsTCkq8DKvauMReNge6wpMw5DLeMbeCNPKMBsWEUFx2tCGLnuB",
  "key17": "3JJwPFPTfcNybT6vRmpQdzjCQGfbG4CZeHS6E1MiCgr8aSB4rGpaKFJnaZGmSfpJaA7JFJcVH5Vzdx6uYN6VtEuE",
  "key18": "3qZVELFNvYTZNwT6HPNEdcnLDtdKMkAKfvqWtswknHqihhrdBq4B5b5uEhiuWAhfN3NAPkrJnVPgwz9iMUxu9KjH",
  "key19": "2Hi3ghuRd2ffXfrrhDEAjRaDw78eCRnyRAgXdqkUGSaWs4DGHYhnmHTNuFuThxYupVog5hi4bPsZ5gBxk78vqVn1",
  "key20": "2EQ3XbLccCSVt5M7oiJE13kEfq3Sj9C7z2MRviX62i3QB9CUFsnd8H2pRx69g4x673gKyafujusstJA92Q5Xg5Ef",
  "key21": "5w5cXhb77ML2WoFANoZpcQf9v7WkwY8HVjFwx1Cq5fVSeabTGvW46Zb9V2rvLng1WkyfMV5nJ4yhsu4KtTahRh11",
  "key22": "47maMcBayKhJus7Jf4yy1BZV2NsR9eeJi9yib32ibUKeuZM2mCHYZtjLaZYpUFEdSR25jaieMHsvd9f7dtszitQN",
  "key23": "4hshgD11KtL6QoUfWf6ecJ2sPqLqBNgVafBVHtVtppLDUDrBfEfdgGVGGJoSQ3yhHMShAWDgQndRmTnDNXRZqHkq",
  "key24": "5uJnq2d5tAtAKfwiojh3NzwR3iHadSNTWbJqPQDJsuD7x5gHZhNsCJXgBjo62YsLdLage7i7gJNeizvj54yo2Tzg",
  "key25": "4o4kmdjXnTt6hCm8xpt92gJrEZmWuCuzcCwFC2fhbeSFQ5JvZK76b1G74r2v2iv9m5WJpxtikV3aycFsK5T8DAn5",
  "key26": "49qU8wQdwYye6bGYGGZjHMVVmyTWgPFRMifV4dYwPM1qaf6XFtvCfsVghwCyGpBg42t1wZbgit8BmL6CctCVntz8",
  "key27": "5dNzuEBhGhAzNpfkcLfPJX4z7kmoFxVN1GX7G1wcqukdjPRMTu8Uj4fb8porjS7Ufj5jtgqyWbmYbFEjt9DqxoKf",
  "key28": "fW72VQ82QR6xg3uTcRzU8XFyU1KrcGtXBVBNSJSjvPWSvrRP1xepRPrcDVzJ9sLDjd3SoKR2nVQkNDTKV1Cz48n",
  "key29": "wdYbBpL87Z6GaJQXpxCKPhvLhyT4j6Q1U8jVc6BULXJ4Erf1mpEqhu2dA5c3PpAVXXkqarUY7zcy1Wfb6N6LS9E",
  "key30": "4PeJ9hd4nM3TKM5DGj7FB8mG2vPTDpeGseKfSeuaSi3dFhtXsHwybM7unLjqCtK9h5b8fjdP7gQ3GQ8fonenaP7C",
  "key31": "hAb2yGiEGDBnqBXbgMw4J1yK41vsHYrYm3z7M7vHw5Xx8nyoLmuVnaSP5UpP74wsFkXBWExMT5aiDDzmE8Yq2eh",
  "key32": "5v9QFXa6N7nSt1fvF5cx8sUHno5KZmH8twcitQ4jH7hXhtZZyDhe8cicAJXLxuRdfxty6pGb9JihopgkmN4Z1EqB",
  "key33": "4bFSEoLEBATU9UhyssNmURyuGoZ4NpjG7DnQRnLv792nEhWCgybmHtq84cmEqw1MGCLdbL9WTTy9h8J4RDSg1mCD",
  "key34": "3Pyty5XZyYFnj4kDinXvTmVVVYMta8uyo7GHJqk1vB14TbTrSgBZrBfoA3jnAqeDHKE3xS3wSLrNtR2EBZuFU6AE",
  "key35": "2tMggrEu8fFpLr3sRkkUmMqx7ysTeYd9UsTrhCKPMgpfxyXHugqKUoJyAd8uwjkYJzry2XW4oYZP58C5HBMZHJdC",
  "key36": "5fNXDrjGHxrMNDY6tP2SGNhBT7NAps6d8wannVDDPkxnfERVnGCY2SGF2uN1KbTnzGyPXsLBMqHVrnW6uqNJFWdV",
  "key37": "4Sysj4HK1pCYBRK9Nsrhckey3zG1zmBmteUnQ55981x96gSdKmAXW7EG9s47nWu6xW1E6M6C6TrhTi4m8zxjBkTx"
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
