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
    "2xdNx4W4RNJyYqRnumEcyVz6mwzXATWDxkdDWrRyoz9GNGucNeNBaAtUxw535GKZUMjHVexakzedoB8c6jKVipfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EgVWpXcdMKuVHoHKjKmgYcU4tTRNwY2pDPgkgQsCgfkwo6uDAuDWPZ9AiDdUjELBcHwAQ7bv9nXpFD2mDwScJuG",
  "key1": "5dLn2Zvdtp9f7owMPMtgBGH2zrXKKxb3jywiQFG3jtFertaMb9rCt3mwaboD58TxSjtGdghnp5PDYS1MNEKADWU7",
  "key2": "47XbhcpPvhR9Qhz52n6ttWxnn5ewtW9U96PCi3AxafwMPgSkyXPakwe4FPE18NfjZLzYuzgwVU38jWJh1GZZZTAM",
  "key3": "5KpVUpEB5eaLP9jrgDscK1MSXpiVdBBz66PvAM9ZGVdT31n6Li4Azxn2Gttf4hTNm9ybsPTBJF9mEmm4ViUZ2PM6",
  "key4": "14e35mZxjKDUyBK7qjzzJboP4MhAWYUQkhHthX28mZ5suGoZH2Zb2Pj4DyTtkmS5F4pjmGXxpLRsACGrei59NSj",
  "key5": "4bBnmcwgvv8ih3ijwZ79Gm4mfJxSDBb7CnUHz2P5b5VxtoNJZcVGv4Nund3gQXwqVdn9ptYw9MaQ9ktmEEjPxcdZ",
  "key6": "yrWrtXFqbiPRoZuyNF45sgQGx4rSwdbgLvvMyCg2gJPfJwTgwFkZwViDB8rPdKGiJS6TdvsKfPWQ9HZsF4dAoBt",
  "key7": "22dxpH1i1Q6nJNuijk9VxXTLSsyqjUQLBjUXATaWJZ2UtHB4Avc3Up9AsipLms1Wqi3AwKvEXL2XTocDZCgm4oGS",
  "key8": "3EAeEjgJ1Ked323hC7XxomBtXkf4jYfdqVS9uec4szXtFtHZncMTH1uUeqRAqLxvWgVE3WetqqFzGxAHCPAhTwB",
  "key9": "2Rv63hPd4rWfAp1CmDEZx3znR9uthL9buHZECCdkQYA8FSNKoJchySPDGJKpc3ho6XRVqHPaJ6CPDBnKgMBuSgGN",
  "key10": "5faZCXNY45YrXbEufGMhU8Nc2Q4MEBumrbTVBYit9gJGBKDgh9CmR5y7bE6UagWVvcfpRDoEmeQqJCZQooB4ntZ9",
  "key11": "5XZkteTtj8BUEoDDSuXXFGccSAqRjEWFU2TcrM1GTZdDfLVPmBwueSMhAGMvjkW3a9Hr4HZbE8eV1sWZDtwPiiJq",
  "key12": "3kdVHKEeBNAZCtJC2aedrPdi9Uqo3EK5eKoSv8ShuaML9DfMufSxeXL7Xjbg3Ep1qZXVJeYPojfa8nwCqviikE7r",
  "key13": "EQNHgG7P3z2ZdeEUa2oZ2crH9zHgQi3cCod1zBKdnC1UypGma2KimoUmAKev2fthmnwAi6RL5eJAbNmFGSuzv5o",
  "key14": "5vAa4Bp4g8NjLdgGb4nWK1X2tfLS5qnKM3g1scXCDE5TUDeCXn6MoHaTC48yywfLDqp6Dqde1owwizKs2pSE4WV6",
  "key15": "kf6ow3EeMgdokdqAa1iuDxviKT3kHSL91cPTAwvTb5WYVjXd1Eocmn2wLnx2YeHjZ1gApJrFh8ZXGQUukAAiUuQ",
  "key16": "3bcontpmfsYx8NDxXT9B7YBpaVoTiuxuQ4P3eUE13mhqg5ZzttghDJYFb97rq8DxjT4rJzqbbhtHQsvMj7C7GpZ2",
  "key17": "2K6jUDFA9JaAe1zidCHQ8jLY2sqG4r6cPehwTiQ6mMKcEuRvsbAsWguykokgFoDo59sp7V4czCspmWofeepPN1L2",
  "key18": "5W95z7LqpDWcaz2pipWYt9yojXmLNWXNjR2YbxWeagnRoUEB1CQniFJo4KnrWAz3KMR2AT3myE8sYYgB6PirczX2",
  "key19": "5MuzHVTr8s2MXLKFyrabnUKu4BDrdHTghGa27JKr5CaCcXpz9QBNmVRYLo7bakmXZidLEpvSvmQrKLMVCZXJzECx",
  "key20": "5VFymtqwjSMw8fiCJhBxEtWavMZKDs8pxAfUoCTRS41y7WREhiwbocqA6FdyWyuePUHjLB5xuDxc1qBMq4nM3uFj",
  "key21": "4LcG6GzcW6d881YLDwMQuLXtHkYz9dqry8BujAWZpCuV2FnA6K7dfojNWooxjcq3VcqPjZ9oPrmSoudXsaDtHXCH",
  "key22": "5cKqPxggMvfv6mbbj4HFKpw76iLKZ7X7DG44hUhZPtp8fSJ6ebhifWqd1PbBEHYcWBURDBpJrjUFi4es9MmNrjFC",
  "key23": "3HkJ1ReQW2DLhUcJPoX1t13dQuNjiezVs3q5pgC6Ts6saRNZEkMctuovdsf3FDHtnYbu9jVqesWd2e93bUJjr8M7",
  "key24": "3iAX2sHF8VSqmxzzucy13hhk8FLvLj42T2ZQosGTRRcqRzLEQfr9YeTNwgF8NqrwvmfkbYYaozY4vBi2FjeEGUkn",
  "key25": "5z25QSsy14oozGwsBMcUnHskjMdSM4C4MYPXuG4cyB9tEtpt7BsG3bYoqhftDzdU21p3yxxjLzbuLbkxvEiLBGBd",
  "key26": "5wNEKvZi1EkEtCyX5pzQoJrVJb6VZzddLZqXuDDg1RuSDkhkJaFXN4b9ypiBcm1xaA1ju9oSHnEHKj7FNKbgJdiM",
  "key27": "5XDfuQSmFQSYFuV2GSyhxuXnscgGz73pme7dMPVLCtxoR7cK3bBkmdvBANMxxv9SRY715ePN6vkajM9GgHqcaQ2m",
  "key28": "4S4xAqSKvCgBUkGiEvUjb47WoFSPzWSeK2xcNFUyEbwoxZZCaskaCajGNUXSLg2bq8Q2SaTYkf2XNtpLpMwnwNfn",
  "key29": "5nszMJjm5ztCephhPJqjq424ZExhRnqSvnnYHqgKGHjy6bS6QMraf5gbeaAkgmHqn1Awfv3kAin2dwKMvkfnaVK1",
  "key30": "58MAgNZAzPuqyebUiSvPH2Wq7cjnv4Q63JRoSwwiijWSqH7uhVJwgknuxk5wieyhkf3H417VTcXjZTbSRxfTAUrB",
  "key31": "4Eh2s5SgBq9CxC7pQsq4PY6oWGxDCUKMBX17AvUeK4hZznE9P18yCq4ogiamjqCuXqGb4kVKEELtBfETxweSSKgF",
  "key32": "3NPoMfFdhjtqnCh8qhQEjjKyBzmnazznyq8ghiSsw68aHVERR6ZoSiyp4zw2XqAq71nq43B1Rxe8fwePSgrfA3Y7",
  "key33": "pUtG97VXX7qs62vtGzeVWkThMma7rGVcir4Po4woSAygczKgDRFCTnvv3mLYcpFY4vdSkapT6TFN3pSn3beh2fJ",
  "key34": "JoJdZQeAbxBzXrGMK7tssZa96MyWgN5Ak5toZB6yQhGaXA4RJpRNtCqcuLvDfxrQm1T7zkkhNBJc1RAQYbHhEjr",
  "key35": "W1BBn4dogPAbvnPgnjnhJdqVKG6YwNKaXEeR1ZTAU56XqDN69vXiCyUrAc87AZwwURtEzckwnTf5W3bkSsRbjpx",
  "key36": "6394bJZVEYuWEAyzrHKmHmuEiw6F3s6phgimtrku6pVQB7y4PWGshGwvs63Knhcmatwzjdky9a2qQHJ9fXbqFf6k",
  "key37": "4oRviJLwNjUDbZxBsF5PGh6Lr8AxspX3rcQrUUr6TDR6yTQP1LkZpyhoBGHcH8MiB1FTd8a8UGZSoeNRJwEawhc4",
  "key38": "2E81AW2R3wZCZRzG6dz2RSQusTSBfZojZHQwYeaBxAX1Y8AG3ytexwoVg8nBK7dhXAhsX1o69xQCGmiJbUzgjGyi",
  "key39": "48VAZFgmNX8HMShbNcixGZp2dnSwcpY7MXJiZeB9FLYtFffFTpcDZirgvFwKXykk2LYsNyUA55HhRzwVFr4qFwT4"
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
