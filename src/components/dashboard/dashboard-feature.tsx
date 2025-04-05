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
    "25GyraZLYDiQcutrFhs2m7QX6svWnrWgd9pVNV9t2auqyJ9B8YjgLgjDWrFtbDYvyCcvSvskPqeVyH6WcidMbJcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "osL8Wt6He9a12kRu91andZ82kUJChVVXYjoaJhjqX9imtzrwt4xZb6XeHuNpi2jC2jLyxrzUo3yPpwKaPpMVQMV",
  "key1": "2topYUErYhHNJmqizQ8Z2Uy6cxsDr8iCig4eo6MDNjFbQvEqXy66D8Xj87M8ry4ncbY2yPHcSwRK8FhSekDhYyfk",
  "key2": "62f4SsrBv9YjUEJbYxfFLrAcbCBqkrRZj6FV2zsytkQSf3b44TFcz6Pmk38bEuzXkT3n6vA4VkUkLKRUs7ydDmVe",
  "key3": "4sEkHaWQYsNcVzbRWfnDVvCcVKsJ1Xh5BtrzfVYjScWLujvvBd7xtarsCk4CpVi8SAxScdsSA9tucH73gXxkLd5H",
  "key4": "43sd3ntKzkf1Enp9Mv6RW3pKYidezu8cTudX9v1pTn1JzMAfXkUmSRJp1qgr5abwxdi45Jb4mtC29cAq29ArNhcD",
  "key5": "3WDacNFej398mdaD2DzNWsH8zNMvBMNEeCzAyWwkAhqSg2UbMtX55EwA9jhqLZwbJ6G1LQdmhQbBZhccnKHbjnqG",
  "key6": "51yqnN55q5HzLWxQgb8wfx1d9CUzwK9tWxZfQ8eB2fkgfzRSMkuXEZoTFC3f8rT14gtDJWGri2nV6vqg5dtXUtHe",
  "key7": "DB1B594PeoLtzu5ZsX4vJ3zH7TXPskZCXsKSbsU9YUUUaxfcZREQsv2FjxTRhUMyqcPGCmXfcMAZ8GsL8nRbjPt",
  "key8": "5Eqz7E5Np3CT4EPGbzGhBMbh2djPH4omHXrNRRZPAbAC6T61t6gBai1x2aXopVyEHHBTRyCq7AzJTYjS9jiR1Sdv",
  "key9": "5pf9h4WowFpHCLhuQM4jaa5ybk7HMfvYzQv49bNCvNXhHpKdGogBRm3sQodz2SruMmnaahjuWBPpqyoQhNV1rRdN",
  "key10": "mwzUgLmHhu4jiwB42NCFF7dD7Fn2psYcMBBrxFGW6bnicg65QRPt6mBuCWpryT5ojUsdrnQpb5WHrCTYC2eAaca",
  "key11": "3CAPC25SDDuapt9X1XhJ72ftWBwNT2nhmaKbEgMKQEfoSGWE45KBbhhXsPtSCrr3L1ApkFjE1EiNC2xbHbFh7gXd",
  "key12": "KsAf6Er8N882vErBFR1WQYJKzBAxqjW89b4Z9SDRpSJBtAqaAypxpVKeSpmTDnVraJjQf7xmmGs5AYJcnS7bh2t",
  "key13": "5eeyKUVdfDyUEguPXVyTSCFWEnsMmZVzF5q9QoB1JBVnqV4CZcfknMMt7n2mQZcYYPJsKwi2g8YDYFExQFecXL5o",
  "key14": "4DxmPmqvXfMnybTDrXijTdaCyQofM77vKxzUKycMo8mz2EAufGJLqHGv2ETQSVkBzniRdBM5Ao3ZjTrXpG5ccbda",
  "key15": "4XsJoNvJtKTRwDB6U8Dqi8MDr5LTyj8Msuzv2W6jNBkgzE2X9KsbyeEyBa2iihQhGnK5h7cSnDYmcnEfVSfziddX",
  "key16": "eL6ZCoWNNCqbKNoPrrekuXrRLouBC5tixeqr79omLuqW1NG75Bkn8XvdWd2U2cVD5gU3sLJNEa1C8NAhhncTqMj",
  "key17": "2ggPkiYQ7s4xyGc4nubQDJAoJhgWzc4tnHDGmANAhKtkjkd2Phpbw36FMaKwAyB1CCECbyuUC1oYfAkdkAPswPVh",
  "key18": "2hdnX5aR2yyXq4p4LkNeBviD1W3bQJ7S3iUwCkYbXSRJXNH9pKNr6DSD2LdaZdNjzhXb98rMrbaPgPsUC6J3iZsw",
  "key19": "3ytbAuC9PySGKv1wsNaudMd41uMSRLCBiyaKiKd7RzfXxVZeUNyqDicT44dswg6XMwRtNXPdEcD7KWM66RHGfUMH",
  "key20": "QKxug7kX2N4Ps94TMDRywYvV5mZXjwzfHUoMb5otWfZbMcr6dvtgZ8ZJjV2h5uwcfDcHNCxkyHgZ9uJcvmA8CX6",
  "key21": "4tc9QeZaw7mUAz34RBPH6VVMEYwqBKsaXNRwEZBDvJJy3xZRknGQo9w7cZz4vFULcEz2CPbqGidZKquTUpSgfpXn",
  "key22": "6YLgygspXBw9VztL5h1drjevp7WWyAyH7VS83VDUpis4j3tdsKwTYymaafDXTCrF4cRUTKTQ2nzxQYSi2BaFAJM",
  "key23": "656qp64mWUmGnxRjHM8z4GU2vgQsKHYB5XepvMb28YU61q8nDhueLpH4NNnWqCgLXKV2E2c3HezrKx6h1z7xqXD1",
  "key24": "22GqQwLymzcYAUuTiXBeyU4Um8udUsRe3yQWwJ5Y71S5ZfGN7soyozDUFjWXD8YF7mFSbwdQp7fM4sYTMesj99iP",
  "key25": "61PBmDRHgzdavchATqgWCsYN8gULYf1EKMYdjUf1xYWTHcJeMGSVbLpuQjjq3fGKtHw8etMm9tjQW9LuaPNd6szo",
  "key26": "4kJBDyrKg64mmJyneECjJMCHg7acrqnGh6Po1wzoSS1KKBzLYrsnT1WemBiDtvWMjZ7FnTf9HZ8BCwzfu2wieoUd",
  "key27": "45VYr7LGUQpC698MUQKxkXTiG6EeVwRahdYeAKiG8pzxHUEPNvGB43e1XEdKiDJMPSo5P7cGmmpHdWrZjxNokZqS",
  "key28": "QKtesRfkDDmrDbWEwpUUj7hdQZB7T3ZUQ6c2aehsNRKrvqevdFRkXuKGjDm2DNm6b2HrK2CjZ3QWNJJ5CDu9Myk",
  "key29": "3dTWKfGHQirGF7GME66zXPxbzhyuPM4Rd1MkXKAvCTctbYcgCj5HYAGHaF2hJhhXgssvmMcJ9YLymNnf7FfQKs9m",
  "key30": "2kREAg6TivJp6KERDxpVExkYzbaQ7boKxYb7aVhkgnt6QicYWAqibmYJjpsmsDR72j3cmgZoeo7kp2nzneCXqjmv",
  "key31": "22yiiBGpZ2w4mi8mi9DqCMsF8KZeNUz6y83vurHXwMPS4L1oA9C6NWF5Ev8X3XFPExUJyYEu6JwY2bM2jmWWZN3e",
  "key32": "65iz8abcoJipmgk6yuS6wLK9srN2Y7dni3gxs3HHWGLusM3TsLkMmGFFVfPuBbWELknzUqhMtCMp7h6ArR2zu6cS",
  "key33": "5uckUsNvMfSWpzSCbawbpZaNvPgKagj2TSDhBCx3achsBne853aswjRxcU3E5HkmoNBjBhSRRVVBCZXk5tWH64NX",
  "key34": "3Q8nzU6kZCAhoNHKSgCZJYL6uZtGnA2pVrv7KUNaknDWMCUAAs35rXrczZzhLbD7uMiPBFCHZxhaFtMXpWiqs89N",
  "key35": "DRgRAmQ1SDxAprP3jRZ9Lp2Ue2o4yykCiAp9BX7q8sRb6gTMmHUQyuQ5qw1YnuATARiELQYdSyH11aMPMo9DGst",
  "key36": "zRppjnVnv2nsq4jHjTLogAGg8KBdGZUgnBnCNJ6bFmxQuUbu6ehgr3kXRS5EYQj9fF3d5RaRzRyxYPr2dDm7CZH",
  "key37": "5jnqB3x4xoYqvBvkBn3ZzbSBDFhaRwQcCcDeAzbGWieiKzwKD6Yu72pGrXfT3hpqzLAbbKidGmv33yvt6qrd5rCm",
  "key38": "AS7ow8bjdEBxcy9XuXL8ZMfap6rteEd1AxPMnNHdhqRKkhqUGCrN16EnFdujYkzxZgSVW46An9sEWgyfXDos5KB",
  "key39": "5unNMGXECQro6ZAppQR3KXXgxVY8j1BxPL9eB4wVwYUX3CdmPjerF6WPhRKob1Xrk2xrq8EbZsbrr7V86wPGeUb8",
  "key40": "RQSfvHSvUmD6ZuPv31ayoxNg5oGzv9tcDVP3bhjiFJYRCCT4TXk8DXW32cUHZJz18zd5Q2R8i3tBcyZKnDbs46Z",
  "key41": "32Vw39bxdRZTzwBpY1X9dan9SJS4k9RPRUR5bRShhuyb41U9nSzsLNtyYbn1zEgJjXbwDbgtZgHBoxU5CyuGBAKh",
  "key42": "5ReRisdwxCxFvFPnmAuH5aaiNeKvRSyzMnFBCnmUtHTDdPbZgZTagKZiTd5f4RG2AsHMgL5SNC3xYfq23nc3NX6Y",
  "key43": "5QB74FH9Nzt15G5ZcnZcJpiUkh6hAf6Enb36u6BHqN85XY3pSW7MTknKq5kDwkYARHzGPiM9o3WrFaVFdR4yNx1Y",
  "key44": "3Lt639yQTnZL8sLjJDrj6Y48PPCVWaRqXJAbJPtZ5XX5W3XzEYFKKcmKHxeHip6rMQWA43avdRd12hVafE9qJUcG",
  "key45": "YcfN6Puw7S2EYbJMX7wsj7z2PmKpPRrbu1GraFTaXbURyjNESRquQY88TR7ReQvAqFrf4fc2RqULrwK51mQHXsq",
  "key46": "3HbNpUJcEZmqn4NdZrK12sDg1nRJXRxEu2aL9hwjAoNChunB5RhHsgytLJueAg6DV6X3kmuCfyHQqtX1gibmADTY",
  "key47": "2ExiDjT9zVdpGyVStdgu8MTeHmt7wUe4rSYUg35VqDjzUpd3k897xg3PimRX7jkSBW1K2jLiqk1m2KHg3HYMUJnk",
  "key48": "abt6tMgjEAz5yt2E364rLLuyvyurbTEsGH9gSYSSKktrJQMcEtp1La3oYNnoWSjKsvsV9PG5gRTgSRB2BZoTZcZ",
  "key49": "33XHLoht2c7fLeeLkChPqtD8myQmGt2hi3nJRnsL4pzr46ndTpSS6uq2iRJgHE9FrrxrCDAMsDf9bjXtpNPuWzEX"
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
