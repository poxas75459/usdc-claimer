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
    "t5FEEuW8LftF3f4MsjBAffFPDeV8iy6jqSZ3tw2UKmPmxtSoX6cK73ppcaPt7x5Mtwbv13aPS58cTmfdoPU5CP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a7dTxqhhi3FxKhKR5jpvZvm9yU16PktB8g8bJewNHc2JKbUEBYVT9of62wfTMFBSokFAqq1fkXzsFWBLzypbVY2",
  "key1": "3keVUc5KoeW1vJQkTvwZZaTLGHjpWcgesbxs8ydvCccdLnPD4JK9NbHURsRUBaVKC7y1Tgj9wuEKLM1vmYKPWWVQ",
  "key2": "5UMV8Z9TKRQze2Tm53s6FKbQTKgS8byuAKNEmjbdZGu4Hp6YvqGwVyJEx1LwK2AeYeEB98UUKGvp7RHp2A3SX9Fq",
  "key3": "59AkUUm86g7ZJL6VXBgpLZYrJyxY1xA3HsCP7g2A6cKxHW5nEJnFf98fRVCnrzgcBEwvRZWJ1U4aFGvrkoSaJQoi",
  "key4": "33sbAe33usmir6uXRKiuLAPnPuTAw9XQbrgKckLLm2eiXjoJsTigMXvKTyhoeXVnFovH7m3ehuEUm3qACPeE5T18",
  "key5": "3LenpgznSzwhKBiF7iUES3xR57PL3bfGFPgR9bLuBywfuwptoy9cZw34tNNDrxDFmv6Qq43b1g1vK6GR2Zuo75HF",
  "key6": "a5Zc8LdXRW849F1MH4jvhDopr4vahnJy9hyN8532zYSJuPuNpf7U25nfStPhyZMN8aN6bNrT1syTk1WYA94iPvA",
  "key7": "5xiKWqEMg3s6idgoBeN3LfSsMeqJYXpqeHmgS7YiDSWWj3Q565rtSo7et6yaNw2xhrphT5frLRbNs7GgQenX8m7g",
  "key8": "65aBECmBfPuvjdQubpsAnq4r5C1UHhRJmvcAkShHMaJcZAt9EpXYTK93StWSAsqtSkThQPJHXSTjmKCEwTioscA",
  "key9": "3178UgZANpkfKgKkiBeyiSGfL48ZTmUh1SUnJGrYE5WjPS8Tg7Xsf1z9gQzpfapWToGG8MWtNqqHQ7qLnSBKu6GS",
  "key10": "2zVBjp3gEBuyHdijUSwPcwTjQwWkRYthZjjinfF7QbkTrvazusCSDwqzefXKyonZmbFwzibthjUbzQam9y7uZ4h6",
  "key11": "3xJRBBTxP5KAMk74pq7144CDABQ2Jr9T9F5XVU5zcVJ29EGUrkZaEk6uMys6zSVjftSwT2XcjPeZ9QkL8gTtb2mQ",
  "key12": "2jFvRckjYzxeKT3XWB95bo66CkJnCBs22MHU8uY1mjyToRCJkFgtttMxfcsMYjSfN36Ms9L4uQ8cbXJRaGUA4vVQ",
  "key13": "59VmPBDVZBrRbPTSQdsvWu15KZ8bQMYVY67Kqk4MRp3JKkVexkKfM9Wvj1BeqrpveVuWHMKB87ttRVEVqoKNtydB",
  "key14": "2JS9H6fu9EVmTE5PSfKp347ct9wDhS4tLc1vy7q9ymqfxcz9mJgxcQk7tudgb8Lb1u9j1xqryJQb7nMZ4C7S1QYW",
  "key15": "atKBVYGFTJtVpgLN7wdfmjFqDkZLm3BEX4awqWeQTEqWjTMYEmcyBJ6ANV6aMP4Cd5pi6Y6Le6rsvEVdPLyAZct",
  "key16": "4KvzKUydDJGMtxQPN57w5d1bPGmWNESmHRyVdo1tEeKhU6krHGx7JS8bVmbHD2czRoznJ9cLWNj5LFtewcWZvrmg",
  "key17": "jir9vCmbH2GWJMSwQqPQecsnTfqLz6hxYiGn2zqt9omd88VQ6k4YKoCnGtp3zz9yPnXfkDts6qZJ3R71cvt2zU7",
  "key18": "53jidC1oDPcD54zKPqZ6F8AUVKRFrWTbKvEj3nipfv6qRTWKw3vgL2pQsswttQ3cxBuShu6EKekAfLuSFBMT3Dx7",
  "key19": "4Aeu9AtP2nNDNA2GWPs5CWxhxp9jKoxFRgYVsWP4kXh2DyntmuWeeiaAsed9tQa4EWBvr61iPK7ng2sBAzxsgPrX",
  "key20": "1tQTNftcNGhcPkspS6ckM7kvFKY8PhVzxFBXMqCQZpLoRwaXnAZwQTTxa7Qe28yVsTMP8PvGjBvy8PPrW92ubPR",
  "key21": "3nDRXxgRYj8k723ZTJhAoQGQbF6SDayGWBFG7WVXWhPKCqjHVLS6szRyoxfQX2YKWZinBXzZyxA9z9Fuev5rwYS2",
  "key22": "2HE7cR2zDFFgsqDpZt9cwhWVTTkpp77QZtXzLu9fGUMAWqJbTeRsxWVagUxYmQ9cAV7DhkfQNmiMDmNvohWwrSXM",
  "key23": "3wv5ViMwqM2f3DCq8H1aBpeDPBKAD7Zryh7kkgQwtRa9uQUoL3Rze1DTQ2xJHywgZF892Kub8F1KDrCu1HBsqioV",
  "key24": "2qRSFSPthMa3rnqnchEDCuko72nRoBSi7yqnDyCRwEHQ5rvBcwzS6p2yXxfkS89mtRLiVZyZwa7urkqiyV7VhP3e",
  "key25": "3ToAkQruoK5zrWxGnazKxf2PUUbMBfoFnwxkxddAkdJmXU71hHETRWTTzK9QrHJj85UcMZinrZW6JX47AhaRf2dF",
  "key26": "4TtVs3VSH9t4CADcLjhfC5hXhDn7JthEcaAX6FByE2pbUhmNpsPUzYV2Uh3HqELCqi8M1ek9kD7YVpjxqvRUPC2k",
  "key27": "39MRXjD9NbrMGvwpXJ6c66vGR2J647Z8RHfNv5jhqxdp1vAHVwRH2H3yZFkCy9JAzhX2FNZygaqsZt68CakeGS6c",
  "key28": "5VVinuqM53bL1ARo98MdWWbnGZibvVD3cf3HPw1Q2ma9HfxZ2QJW8vqfmBn2WiEZhniQKX7bKRNMYBw51UcN3yuh",
  "key29": "5j1q4WsonKCVk2Me8zDicRiQFje8JBwsM3ZB6j7DzjS9HikJDBuZxDjxV1BAynub8Bi3bzL2mFD8A5PzhAMKmKpv",
  "key30": "33tTpJ6o9zaAr4a64HaYnVcjGq4obpfx9yf1vLMWPfW8qx6ASW9qb2ULPFSEegKGQxCFz89VkVyKeerRR7mK8h4z",
  "key31": "2AZvBbkMmseeqtArZkF6qwqkUBL16zB1WVG7SKLxtacoL6UGkJKK8zoek2HnomMdSwTFZ2wBjz2KCcAw9zGqKnK8",
  "key32": "4tVtgCnMNAi9xvSQuNdCTpbxyZjzDgjszigQjWgX2UjpiudMHpGwZCKZCnKCzLuW1g9GCGgLKeYbThmoNb1AhWRU",
  "key33": "2osr6eVRikWm4gyh3maU8HyKmsV1fUSRmJcBrdXZ53woB7QHacmbcThhcJUnS5uS1hen1iBzt8UZaUFpmzRV7Nyp",
  "key34": "4tokHVd3pSdpcngctmVbAUnn8JnVnXG5FxJCTezhPT7tyn7QZo8wiJcpuuKcUPx6uNryhz6UYaHA13oNVrDR9gHY",
  "key35": "2oeKGUDTm3gyyZacQj8CKXGcPsuRMjcfZY57C6CZxwTZ9V9zxWpzaaDhYGhu1yPE7MWRjSW5HgYk3A7XnW4Jz8C9",
  "key36": "5E7uB514S6VEwYBZXR3V6ZCrbp1iKk446zVh1drrwLHmH95cstGXgSnQjF1MHWVAADtuwi6DR6yij1Pn8C6BkttX",
  "key37": "3AJ9UWQ6gmSV7Es3cvhtXS8x9om1KWsn4q1rm6K6vaTtL6kRFtqHJXpTAqug4a8a2Qwi1iCskg4MtXqorp9Y8osT",
  "key38": "4nvCKZuhuJb5G862c4kLpiBeuzLyxzVf9ZcaZXpsGrPteXpqq6ikrNnPEkmuCAggvrV7FHCQSmPjQEca1xLPuc7r",
  "key39": "2huoNNP5g6p1qmT6zCcHNoSEPrgo7QQiPEdGnaQeZXFReLKKeYJeTrxS3AxgaH2npLkwmEFiA73o8Hqkag5zVqVZ",
  "key40": "i3Np3AZAQ28rAzhzCAv3zFmcANvznCwyV4c3Y8bnLS28RK7R4KmzAHYgdYDcXhDkryAJrPpMMjWTuu1Q1CVovge",
  "key41": "38L2hehu5UDjTdqrWsbeb9oCvExKdhdhx7ktKaFTjecxHavhf93K14LH7MvUMGxS2Zx2R7Wf3FGdq3uGpHj2Ygzz",
  "key42": "5uFFH6d6RujDRuKYoZud7KmUDiDEv7sHkueienJMch9Asrsso9c5ezB8nkWj1Kad5MCpstrKgjsgnMoG1oGxxDzt",
  "key43": "5pTnoJBrmbecs3mDVQr9tgGPKc98sGgBRhDmNjUn66JBUrfF9KTSS8dtV71EMfp4Rk19rwR12AHQ8Zh7ZpYL9yXQ",
  "key44": "2QXXU8y7wbA8MCBvAKzaror5ERjQp5JNfXRMahc68r2fmcon7qZdGX48A8S2JuqSKnY58NEF6ZCT8LGuhtAJbQQz",
  "key45": "3dEmcJnkAJErFTTqx1YmKGU4RxNHkcvFAvDte7CRq9DqFG3BtGjUitvrWXF8y21pcibvw7FGWfuGt6zApVDd6pd5"
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
