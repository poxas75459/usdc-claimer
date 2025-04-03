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
    "FxCiMvemdWxFspnRe1Tb5bRayNra128sjdu1V8T2bBjKuNZA4uhNKmaEWyysVJQ2yy3z4UJoh22WgYxhCgC1sbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BnDaeLafF2bwChfRah1ncoegw344Bh7WQNASKaaTqYBs5pACF8b9Bc2J8W7Mp8tnBtw4im5UtiKJmjutRahm3uF",
  "key1": "sfUq9pH89vjLpc4gJ9N3LK8JmMayKDMZZBPTM6X6PxHgc7CadYM3YrFFZ3EkPCpAKfZT7conXPUhxRhQCz9Hjkf",
  "key2": "5vEhwaEEVDZVb9hXt6mZsYnex2nQaLwgr1q3Dmwff7aoM85obdHrawFn8q87A4pY7yjYhEuieu4ognkh557Z3Abp",
  "key3": "64BsDu8zR66S6mPW7kBUy4yw2HC6YG5RRwPdE11QNVmwkxRh2ZPCeJ5CcbP7cS5YcXuFT6K2buejc6Qgkg1VFVGR",
  "key4": "4McResyih59tf4rkkUgGHrfRpFd7yLnp1NJedWAs9vRk4naS1kpmLob4b9eRRwC92VeEmyEYTn4T57doPAbxFc8x",
  "key5": "4LjsRyiKYxsvLHcr6vKXVKXXeiWxd96JqUafKSkqxjk4ePT8179cqQZogN7Tqnm4kgWdCP8SGcGyx9zxxCe4nCRJ",
  "key6": "3DkxMyiSP2Vph7k21tRyfncDDndS4yLiLeRbfXstRTFHwpdxHcuV3vxaJZ6Bh2Ezu1qiHwf5EHa5SBH63afeAwWF",
  "key7": "5cCbaEhMoTxjFvMpHJQmy8Hi3ZPGkwnCSN7pegHga4gewu92Prn3Z7Cr7XunsDER21Bs3ZKBv8ARhekcPUMYUR81",
  "key8": "4Gk75dB1dcvjU1jwMcHDhL9M8mgwR2CfuCu3MLKhfx4j8u7YAMXNTZriHR1dYGCRGeausqNSdjuSgsCDXmpELRY2",
  "key9": "652Xp4doi1TXhBt36exjXDysBfjTsF495eP5nUzTD85sHac6oZiijempuas3EbHFd4edonNFTVTNn63oE2oiGGRr",
  "key10": "kpdeZqaQ7HjMKz847Yu2pD1UWeFJ2EZxpWiW7ghS8FmaRmKETd9fNp5186iPUWXH7tWhP39wrwmoDgpy4itUuYk",
  "key11": "2J5eJ7aYPQUQN6NkmtrwToxXDcJrTMYnzK9wrkGq4ZSCFTpMvK3DVV4MUAdXKt2mu1F652ZRwEGqiUwggW7xTkyM",
  "key12": "2N2ryM5LMwC5qJyvkLvgWE1fyuDw6d5pS2tmeNsKkRK4oA6gXp9Z1Fthxwi4wm8r5wsbvU2ybx5WYRVaABJ3baSx",
  "key13": "48CHY4ntRHivtaow8Cb99p7cLVeSFN9mEgCjNrWDeh1HcnaCucHi7Bokhe1sypkXKViQzFWah3pdiPpPXnFghTL4",
  "key14": "tKt3JrykB9KZAohp8UaMx2LkwHQvVKm5D8F1uWcWj7rodc6N5H2AAPjbKu526qrargXjiVykZp4bCkgobrxAkdV",
  "key15": "2z8dzKkkHD7zUSpBXtqTL5ZNu85kbdZmWu7bHox3KJVuMtk1J8bLyfVAYRwWMAtrLL9vc8Zo5axEd6QbA4RoLAF6",
  "key16": "5cbYkQYHyXeqg82wXYaBWoMDZyD5sXkFPTHyJBdWX6FfsoHzF1C3FydJvH9h7mjFF5kujiKtuqeYa16qMM4HKg6w",
  "key17": "2UyfCVbBZWtcnFd4sXpR5AhZXPRLweLb3KrtCHY19Nj6K2VF2ouwwdFmgRmsCkrU74xECw7Jkd6fPcgJiZn2ojN",
  "key18": "2BUgDJfepja4ASJG5WELL3zFXSyRj3WLSEc9dRNQUZUjCU8yvUXU6wKKiuwqAhzCCA1avBpVCDVumFdYHgzJVc2Q",
  "key19": "2w5gJxx6dfVGoTznQDxDHwUVvVgRid9WGYT2uHbsAmWzhbR4aAqhfpkBK1hSsnYymPaKprBcfyQVhaMFkW3CUQo9",
  "key20": "5oDqFT6HqodU4SM9ZvkGfPnPeqKDvnUkXXoiTDFx49PKoQoJtHEMnvYGBNWixYBAVdfXK5752b2nBTtfc7G37qrv",
  "key21": "2uCvpTK7P4GCNKvbH23CdZn3EaaVyPMrjxpEyYpcdBFuMNyqavkMjo2eXc6eXn5LB9SfhdT2bhhgRdLzbXuyMRPC",
  "key22": "3X9V2EkrXqx9gZPVg1nA1rb1Y7WjC27pE91otMeMz1dgKCiQiQkWzikamtf7EYH2J8LBWebkKN9fzS6izxt95qE4",
  "key23": "3jasFsGYoHFswhK89ipiF95cCmcyqZinKKWcf28mPy3hMpG7MBgKAZcsH7nTQ8N6nAq4fBPLo9TpuksV2rG8fBkv",
  "key24": "4FnnSA9Uj46K8s4CUhRw7MFhna8oZ54c954zbrxCg3ATP2rCJ4FxWxGrUUxii5wfqNFGCLE643GcPFfKozoFaCbU",
  "key25": "5g4sh9oa4VAfbu9B63JQGZ5CfFhyRm9b1xWFWJ7YW8Z83XnMwHyMDWyWDdHoijTbvg1KgYquBSubtv4x5B6sBR5i",
  "key26": "4vBFb9rdqay5etJ8sJ1NhpJeZjQW8cLptUMvvHkvVtN91uyhRtkZ49B8zuUq8EHFT1jBAcAFkE7KLb368qFsXk9k",
  "key27": "5cX4umxdb4WDbnudNBi3t2Y3so4TdZs17S7QasHnQd73vPz7hV9hzVCqtBL6ECezrpPfSDczcaGzxu6pxx9MhhpA",
  "key28": "4PssrAjp3P7rQmMW7KLvYRLip1HEwFRc43J2hEd4V5TvenXLTAFmz4R1pcKdxWTVdR3s7N5oXTtGjJGZtoLo6GXW",
  "key29": "2Nyi6Z6W8fegutniafhJ4Zy8UYMLGg52D17vS9LYMXvqNUdyCfzUp3awkUiAsWUt5T6bAjmaQuG2N4eZPH4wNCBc",
  "key30": "4EXieV9TX38qYdNV4xH49FrmD5Q95RjtBsTQ3AVr2vEaqA6Mi5pyCKUQnFsnJob6KYuhRirTefsS6Sumg66uq4C6",
  "key31": "5SY2R75DBzE155ePbyRUgeee8ZexPDTL3UTypmygHACy12GW3Pt1SgtmC16UX7DpVeARD6XQhYNSHHNMNG9TJoC7",
  "key32": "5P4s8RyB7wDytsT9oCK9Q7MsoStTvSzKx2dwTqnL4kNkR3etiwFeDtgYhHfqdMdSDrHrepsr8mGnACSf79kbBVcC",
  "key33": "5Z6iE61AfTap77xqEbqAjxoEUxLkET9zcQCJ5HyYuyCR2ds7SLQMoJWCzMwAbSKRFL1oU58d35stscpRVtd76w7V",
  "key34": "36anwaypcXbEQSfn2hqhd9HtnS4CHwuKewKnMaHg22ktYc4WC2D1JAxEvg6PT4bqFRV822VDKvpPEHxANveua4BX",
  "key35": "59x18Qi7y5gyLuWwx1qTEiE8n99a1aovbps5hVXYdXQyycXTcKW2HauNupLzoxcRZtqrQ67SG9XDAGbvpLd6VB1K",
  "key36": "3Z6YtmygUpPzNwUPb8bCmdM6gjTYh4UDjuLEMHzu5WTdnhYczmj1YNXrxRr53kNhkoxN6gnfoaVNdzyvdckDRND9",
  "key37": "4qiBcj89tDbbnVvEfmfS1xoQzB836ny1W2MrbSzFdRMxH4dhJt3nJRVWzxE5R5tmPjjWLGj15rmF5n6uwF8qtJe8",
  "key38": "241zS2AyqDgnKkhKRnnQS8PdsM3j84AheG8TiMkZVWyt5gTzrhLK2UYdA46jNryY9TonSGU9sCosa9QZbqHpNBXU",
  "key39": "2ApmKNEhULLVzHndsS2zuSb56mdyyjBMFtESyxtBsAtfRrLrp7pt1tj29noH2QqJiMAWtw6wMKfQE2xeRFMv6DWt",
  "key40": "hi2GrttT1GouY9jYiKETBDfMEqU3iBiCjXC6EnFFgbSaL5TvPCmTAQbK2X86quu1kur9R7Am4dm3D1bqkomn3ef",
  "key41": "3iqEwYoxCFN7dWXddDzY7J5wRVaYL2JbDi13hb29vAFZzpy583mecrWPrnfHZ5e17u5tVSk6FtrVqFPs8tKCEda4"
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
