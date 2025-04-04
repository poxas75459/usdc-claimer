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
    "3Lxf5sYyodQzYW9KD55EPPnMcGePBczSUdjTcUmietSPVX6vTDrwZh68ToQjjGSPLKuA6xFHztbHioioK6YB3nXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pqUN64fthk6Qd68X6S6vCd6UMiTmjKb5em3v4THA42xnG4bRo8PaGEWXqTVnQUsy1EYHohQJcLKcvAJHz2riJyp",
  "key1": "KE2u3dJvnhsGVJfVomDfwzM4YyWP2yFNqewF35dMtsB3iVDPh5mn6sLMCoXNgFTVyWsUAs8DbLrkgCDSzUZDA61",
  "key2": "BvAt79dUnidhRrhtG4Z421wsKQX2PmFgPxTUaYBSNHisCgTXb1QiFWV6ZRA2bnhpeCXTE2Pm1K8dStgpg4m1QGD",
  "key3": "4wwWk8XKzujCpjm1nxDY9SGFYY1wKnsbePDPxodTKksavhRWkzrnHVkddFNAbcVJ7GQxx8vhed2b4WRpviRzciLd",
  "key4": "5SVqbC9ucECuZNX1NLWA2nsF3buvqAoXikqG2ssW3P6VeDyncuLd52bBU1M1CCerTgVtwhxBcJhkaLm4M7kbQYCH",
  "key5": "4ggzvZHtbBJadFTPm8Zqdq19kAYvHPV6RChDEoi283jSbhzyiSPD3XxQr1xarMjusin7pXTW2uWjSWZS4jCKVZVM",
  "key6": "436aay92fGMc6ppeYFampacu2SjFsA121AGKFGR8op6Ste3Rfw19H1Hm1HHn7CtmAvrE1FYieUR4BYX6KAuLQ2HH",
  "key7": "2MesQUyZBt2NhmTVPN7xTpt8ikVNidvk583qmA2TtcfFEEfpu9NwfjNnYAFuMuUnd3wQkNVz3ez5HLhwpkZc4tay",
  "key8": "5fgi2jVbbfWDfYH1H3ctgR3GDMKCAggsLjzbpySknN7UHrZPdKEpxVvTb8aN4xM1BnoEwBCK5SwLn3c8dFfFqjuA",
  "key9": "2mQPrApfuvjdGDZHhQqa1ETmJoCdJsREgvt23NmKZZoMkXitGtRt3baH5RDu7pJLhSCmzfWLmT32zZsGeMgRutzx",
  "key10": "STBQqcfR9SjpmZBqrVmHhNMH5VbLzvHaEmhLTkBFoNffPfYVE27tNefrTrw2vPMR38WwG5v7SJ8QonqMa4XBURt",
  "key11": "3tb4HXBaDdDCjonZ1qHDMvNag3F12fe1WwJgxHEL68spgYMVEKv6RUpkkWGrxDr2HRvFqcL6HKtKJQkaV7YJkswK",
  "key12": "2pT6Xhis2nNLC25GcqDGEFKdjJXrQDrN2K3KJfJa6MK576cowjGZZrrs52PkLhQTpha5TBKQChvi4gQh4k22u6tS",
  "key13": "2s9ru7y95w4kQw4PfTr69AJqejnCJaJkRoLPTZ8HzavvtLNahDyvgscaYHx8ieFHhPiaFM8eUfSkXzRKe9CXP9Be",
  "key14": "5yLnR8JsUArNqkCDWuhbnYk4iwNo4gkceP2vrCyCsYUYo3sTsk6W6C8DSvoPVHsEDKN6JE61rsk3mwzmgSiSJ5ha",
  "key15": "cnAtKuh3CwcXAz5NUxrWM3X5gcwywhuoWJ9PhN4UNB8SPBtmhRCbWJK1YrcxWos7nFjzsHnsY7VH92LhF7SNtxN",
  "key16": "2mp1pYeB3CRj3s7q5yzzHQTRniKr5ZHJYwuWwZiYMkre84718ER9Wy4QbBUZk5WAaLG9sKXZHfRJWCj3yJjyEZXw",
  "key17": "4fd5JARGb6vknThswDgbJucpTSsTutTXrgE2XWRmFvSR8YCuD6G2xvW7vh2AUgCMMJzAKGLqXxq4sCcpcXsdGWBX",
  "key18": "4mKcB84H1X8A3JwM7ShHNxMkENBu756SJYbwnXhmQLWLZbXhiwa9BFFdcY8WDSw6FS7uBk1PeqLKkQCwLKpToM8f",
  "key19": "5Vs4s8E2FvJ7LnDRQyBZkX9xmEZjoYu5dG1js5fTgvBnVj4WJK3vvvvUaVNZjfdERMyvHdjuRqH4MW2452TxLJMe",
  "key20": "5Y2uFYZxGwvYwrzWxBcQrAyJYWQaLU6ZjweSaoA22wm5pXLddeg6tEyJrwVveKMnZ64xhderjoJykFyFCJRb634v",
  "key21": "2b5uPWWykYMujyEVW2D32sRLcYDGsBiDqcKfSjyc8NFWuLevkZFsHsmDHLi2VDXrcAUZ1fzCc2PWfe4Vc5uRXrWt",
  "key22": "3zZiNTeXVhKeibjqRRyCsLcpuGdDehyaXRtTGH8PJrjkRwbXhESdx582zdWAMXQzGpWQk8NXnawk8hQbsgjVpDpR",
  "key23": "2yzfbVEaHTXLfdSAJk1jaNEwwioTAstQU8jHJNqnLk9BQ7pdpNyC4tAvm2N8gwqPXoVys6kQ2XTLLCsMVwxxfyiy",
  "key24": "5J78S5nGvpSfdj9tkcVhiq4gdPg4a7Ec4AkGghrmwLA1ojoADdX753dqSSZjBzVVTBZ58EL86hfdxB1hHWo9zVXB",
  "key25": "67kisdeFeysqUcYk7qscBtkbGqvLQCdrtvDBjf6XY5GQi5ixABacrdYzM23D5KRtXM1TQUjFWj7Pro7gfu7Z1spF",
  "key26": "45PxS7eNrVKWTVH1e2jRLk5TQ6PT36gRmavLDspMAavPhjfKWVzwPontrpbNy1pyoytKn8zDDy6Tp4o3gHt91sUJ",
  "key27": "64fDMB3VZn3Wexm5u7hRMd9cBX9RyRPLMmhDoetqSUj6jsdf8kH9jJe86yQ9Wbv2FVXjaKNQe3cSLg5k1simyCmD",
  "key28": "5vwamu4GFvUJEd1828tFqoFBp57We5HmqpYq5HCM8kgeGyi8E271Ktafi7Aj3h3dwYrRvuCnLwgvYccwJ54xQaFP",
  "key29": "2FHaLPYxKFSGh56NBzX42wwkxbNfRjkXrz64PEcE32v5Td5y9t8JEoZjsXq8J54hVyrd4WksHndk9it7EfLaw1sH",
  "key30": "5WyvZjdHERaTLqu7FgaTy8Z2oh2A1UYfzbsRPc7EMn4BS7fsu5PnUvijNXoapVx3dTGdGgLbPxZkcvYfcnBhJLqy",
  "key31": "598CpsmDGGXv8nTG166B5N1NBbgV6iXECBkjUktAW4z2E3MMnYGcanzuuWzVco52B4sLtnta8ft6yrqN9uscbwJF",
  "key32": "3ZW5a2mCnUFwKEhQ8dc9Yxh2Tt2hX9AcdhhsyqDLAxYTDKGRaftanH9PAfKD5wCqHvVUFEFv9ye9nf3yJugs3U6A",
  "key33": "5tEDCa91sG4gJSGG9z23G81FnmoJeg83KK7mf9XRT924JKLHjW1JwvWgbzZzCk7S2UKVXHcH6aCV5f25MjJEgtRx",
  "key34": "5ifsXAs9mXbui6uRRm4kfV7ATqUy742dVoPAP9nY6XajEs2rWGNiqeP75hF6q9XNTAmrvuTNUXdPdH6UinNqVKkG",
  "key35": "2vwAWz5QYExNfLhFcTahbqU1jkf6EJkS4L3wnFxTnxqxxfRpkGcnrYmKSK2FzT2sRZQ4yNnDRg51mo2ea4cgRzH2",
  "key36": "tb5DRqeiVzUtwmbbidsuhoM8Rai2hTCKE4qYZCZs1fGxEDL91zMDyeWg2N186tFa41pN65MsD4WpGgPUod4QBjd",
  "key37": "2ezsRR9ZsuZxbxFgt32xTprP6UhSFKTmJVwAkhxV7jmBJHZqf8Sa2h9JSm1pBrNKoZ6dwsS3gUW12Xtt4J1BmdsR",
  "key38": "5TwGBiKi9Eg6kFMVE7ziekN4FEfwgS3NuW19asKfWRWyFAuxtVFwyb6QpkHUajwxLLJaWH1LZDAXeXTs77JBVWbx",
  "key39": "3w3DGGD7iyJTyv69yc6SAnSQhWxP4rWVmG7AE8htMXTfN12Q58GwhrRAbYuJgZ4MSfXSkVvLBVcq6onYeTv2NhaR",
  "key40": "Jhz4rw93kEZzwCR9spxmMEQMR42VWbkhfL4mjaU378PWvDcv2PXQGmHCrwCN29pEwBrHxGKtUCvTFB1i5QSfVQC",
  "key41": "3yq3aFjCrfJhdqxcJjEopx8pZZSkFoiHDMQVT5uzTYbj2rn6NYxdR2PiFM3Zty78bZHousJaZ5dpRWYYqQzPiJxP",
  "key42": "VYSFJivhD7yAVEM9Pp9MNFeuYQXAciEYhy6pQJphArx2NGRWMbHHcuKJbL9VZ67hsdYeUmuyLmgTru2x7QadHgn",
  "key43": "F5PSG8xKqxgR9YAvYP8hktCqNmpaQZgaVrEhwyytPqYdJ8DrYu7sQvKjvnDuGHh9UQk4GP1de9xhLV13prCEw3x",
  "key44": "5dV5B3JKQVDEjXP6dDpRSHppN8YgrXHUGZJPQFcrgEqSj9acRnmk5vQwaWMCj3y1oGBfJS2HGExCwm6fp5f2ouYN",
  "key45": "4ZxHH3kykYsq8Udpng1A9s8MtMTjucsGwxZsSuX66LGg6civrHHw1RU6eUmh18xHA94o1hMfyRpioJe3RUW5JaYq"
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
