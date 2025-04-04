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
    "46X5qdGJo4wSTQfKXHsun5v8njdofjGqaGK6PYoMqeJ62ju8Mqvni9qAULmjvR5zFUq2aHpHxbAbnV5udtBcAyKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b82WMVK1Z4pQCVpzacjqZKPXgXFyR2SfE6Wy4TbUhkKCc2Wc6jp9b5RXdw166pEsNyhtSjoeTRzDLFvXwCeUmuA",
  "key1": "28jZUiQ1YKZo8SSYNyhZSToiTBSsYCftCYDbGUFGApeWwXQtnwHrGDZaDpS8Vnq4aftgpnmWwZgUbcH9eSrxYnKf",
  "key2": "3nRPEYKBCvdQukjPFtQMJDGqXH3q3421jAwo69bMErB2zvw3CMYooZBUBNSC279pw9LgneSTuU7zaRaEovCKp6GA",
  "key3": "5DZvWtNWdGCqFABCaqUicbZQ29xtacHS8VS94W9RdCZsYPiwNqWjfgUQBc1X58HB4gpZMZKXiTMzp6rLc1RgKS2j",
  "key4": "4KE89DAbXH5QMt3Uta162hUi99e2rVcB8Q9TQUCai2a8HLDmtJZfzCyJH3jECxEtT2Gc4EaWtEEx2jVkEeSp4rk",
  "key5": "57UFstPqWVukUppCC9mGppXKkPjBx2cQVndntakLuVJAwNjiFz3f4RZrrVhSvr4KmscbS1JrFtnxhJY2TvtkMpiQ",
  "key6": "3fo3AnWDiFcPnMRPDpxx1jiSpTK2WH5cbzGN8yTmKmfdWTQeFVWYJtF8WccqUjscCxmrhTGqiQp7mocjAkiTM7Up",
  "key7": "61uuqoNdi4ZYB6MZJCsYQFkGyKNQZ11dWTypKGRNKZrgrqziGaDRpK6HU19WMUF2gYqhc9QPBK1mWLf3MpPZut3G",
  "key8": "3gKPp1iiit7xWsiaHPDDVjKSuVZHMaJKvqzumNxj4ETqzGw8FPfZfsFbEuebhxmqYbdezpfHC8ZpZCCGwdD2CDiC",
  "key9": "4iMeKjedu7vyvAs64t8uzJqaWChe7bXjjb2otbf7AuaUZjgBvQaVsz4rP1UJf6qTzF1shwN9VaRxy2T6CKCx9N5J",
  "key10": "2KqxGSgc8kLbb4qJLUmNjhUv8dSgSud72e4rVZZGiX5L5ewQZwhVNSrqL1WFarBSFszN9qWVBxKsgEWFaE1V3QyS",
  "key11": "628zq6drPW8rfd4Mrn62DaC4UB9JCUEF4fFce8S9bEQYtq1magRBu9mLf85QqWjeTPW79JHids6f8xw6bzgXUB4x",
  "key12": "28WvLhCgZ4zoCx7FrBnRvYzAN6r2v8gGtz6xxem6zjE2L2msNXSaJzXCN3SyRL9WSPosafozpmqTyvyqJByG6Loc",
  "key13": "3jeqSDeu4sAHPgiYYX4NXdghCxANKysHSwcW5jcjRH4Uvu7jgDpbQ5MAEVEp5T2bcF63w4aJPgy2no1S4zq1iry5",
  "key14": "2tNyhSjDt412USCqQqnGjaYg1xmEpgEE3DQUzCWbDvHHAuK9jriSqDYbm1SArUHs6T9yug6dpGkGz8YEQxFpkoDt",
  "key15": "5Uq4c97GLtPE3MbZbKuEH5R49zKEhvxffxY9QJpMR18xUCsF5bpuTXgUM6HkaqAuZA9XFDY6AEwRuN7JWntyyFBY",
  "key16": "4pDu6obGrJvrbTJPzemzArZy6tAWZ46xXdgEttQaWzF3h6hgJ4iJcKbpFbABe1Q9JqVxRMTphBdRaruLVHSgQBqL",
  "key17": "4HwkrMV9u9F7Sr5oeBDnveuFjZ4o4tmQT1Eun59ih3xkDu3q7r1sxu7xTxTBvybwtxUCrvSTHbHF5kqAcfdqbfCy",
  "key18": "fCL7ARU5Y9ZrxeU4vXoJyZmiYtnfvv5kE9tBaeZPdo7yQsdAf6JAmQL4cm25cCewghvw5f6FpjE7cgJMp2wnsPY",
  "key19": "3ipoAuJKJiDRC1GCHtgayErQbfPK2nfGC15X5HhXYapB4FWRpfcGfsdxGFxr8xPcLLmoApAWXzAMp9VXry4v3N7W",
  "key20": "3vVfq3zPR9HRPFEbgU4QycFpKeW3MXn7Jr18Dw6dqR1X8S9oxZ8FtPXdo2fk4BsE31r77pLvpVWiwofX9vFeeJmd",
  "key21": "3pkHbsheSoP5TR46hHbdjSHsrB12mzsSEGJqGPw33emtbbztLV4xSy1U23UuaN5LQf5w48F91eymYeYYtaM4yNo3",
  "key22": "5bR6PgC1iEkao2Nsbdc89zLUeGQbasEnh1NHsUZDq4Bdx8evbNdbBX5YNVd81kVmZoR8aJMsJMXCEFPJTkZtFLfM",
  "key23": "3CJ1rULaCoyukmGBqqmMEMpm8NJPpe23Gz3AvRVQ8nFnZmLyFi1nU7sMun5RJCaFeugA5pc28J2LhnLGF2NWjVBE",
  "key24": "5DkrXNdpUsv8saRFGa31856hRaapgdEuQVbt9junsr7qs2T6eG5mfhJLagwjRr99bu4UB9KUMnnrayeHgDjgTT58",
  "key25": "57JYd4XkVKEWqqsw657vA7QbYano8HY2sN8fsHfMQrXCLpVXB8uTFqMKY21TaHkGoq8h6TdTpk5SfYhkJ3sEn9AT",
  "key26": "5KEiYn1TggwHtQoC3zWi6ES1FyT9VyJLN27dn38tJZq1tH888XvgPXojrtUZ8pnLqsyaHM5nJQDaPkstSxNzfF7H",
  "key27": "29x4bjGmP9DYLzXWyzsRgrSNnVUW4dW8NbTmi19zFfoMnsDmHzxVoTTU3Ndiy9CBAbPJCaatwut8NQzCgrMzYKT1",
  "key28": "9M5WU7sz9VuDFc5TN7r22UqPhg5e8V9AtDs1XMDC3NpzidvCKQL6dhahxkTZ7raabbbHzDbeamtPrmsqiFA1YUV",
  "key29": "218FgpvgCmRcKaCXawwjcHCjFi1HaZ3frp8GDimqaNe7HFzRMzuPJTwrcDsRmxsNKmyRPb5NwVQefxmEJjeeLqg9",
  "key30": "5VA4W17RupPmbE1sww9jQkQJ6umAcRBeEcxinXkwEZMyoQ2ciEaf2BiajBQB9FzVwypPDxaKyRheKt3ybRB4xvs",
  "key31": "4NAQFLDTBhZNxm7bQYDBozbHJLxtaE4KEfps54Xz7nGjccdUUSs1cki5t4DDkDwLATaQMrUwi5WmjDoeASnCuQxh",
  "key32": "42Fz9SdgDcme99qpyG3sEgp577YWKH3FLPPxUbUYDtvQADL8SuCZja13E85FmnghyUzX1u6dik5qwhz1Dd6pojqo",
  "key33": "2Pt4Dykaytb1JAhewch4fjTcpiZf1YF2uYYkTXo3CmBzAmP6V3vMjAsoYcFbFwGis1enxUbrgTVphiNrKGCZw9Vt",
  "key34": "4MvrHZLUyBgP7xv7PCrVJSzpApFpnZXiWAufuQyFFZ8G8KoPxJqAaQPav1gjJ1drYozP5UHmd7vDPpdsiNX3oHUf",
  "key35": "2UH7YaQZCxFnWdwB9fhtk69TrC3nzJ9Zu2pFnKZyCmdLEC79RG6pS6xnXT7HiAWkrWHMG434H4UVurgxgF5qUjZH",
  "key36": "5Zpt77sC39jKfBHjuG7w3GNhJaUsuYZAsTdnNhBm1XR1uqXrYiBwxmLefN5pakNbQ6Y9urtfCXL7p91EC6dRTY6V",
  "key37": "Z1CHq1fiAXCBFEQiaJZkfyor2uqQvupD5MdJLbi24LuGxHScd6uLYPZgm493fiXxWFrkVtk9McDNn3BMUhP7YaS",
  "key38": "59nishpPxjJnSQeyAHJ5D9ArToRBh4EAirPeZxg4fHqsxmv27Y94CbEnkvVp2yqrzvBWhymHcsirCsVwDmaXaNnx",
  "key39": "4ZvugRThBqxjE5iDJ8TqGbA4kvJx71MTywvvZo9cZytH6ijBqg5ABf3LnBsFgxDkF3azbJ8MnJYrg9mnkMcRrxwG",
  "key40": "3dd8pwuUbvcwR9CVqLimyqfHi34DnFMP262ReXMz619gTEmd2uFed6cu9eYCDWmqSdXGgX1aEuuytSQNpP5MBVyx",
  "key41": "4xi81GmMChK84nayL9r3rssr1EgeiTCUR3S6rpdNGchnQyYmKByfoJ3BNuGJgiWv4oauJ2yMXasAJSpRoMMb9pM1",
  "key42": "d3Nmx6bxBEZ9kDXyWNhpmtbzsFSCKeACnjuWT3MoWrC7438WQ7jkVwzuHgWPgmVoY3XtVVtmoeKDykFq8BfALdx",
  "key43": "2bCGCJpcrkoQkwa7BNqF4vixMYTR9eSQXSPmbG9BeZtXt7jZ45wF3BVR1JcZq8zSdGm2r4yNsu8SbKAg9juRWRPy",
  "key44": "4ZUiMRRatsfRYUdCWps5tq2KjYspFgqJAf7xtwKxnV6p5XcFDyQog2r9kJMc25o3jwFCgsPEjnFsJWyQAfYzMafH",
  "key45": "iasJyQ6KKnz6fbesB4iFQi2yCGjCs4vuAQnxUuTfUkrck7f8pwTXsJxAHFkQa6uzTZviN1JQAaW7dihn4eS8V7u",
  "key46": "39C4NjTJe2PJ4KAF4vVTms3HMtDvYZsVB4u7Pszt73zpMKQr9GKfuBUWNuUJd2RBdSkCayJWYF2RHjfA1azNbgHR",
  "key47": "5CwjWsWYjzmUGinkhmbjjpNYhnPPWi4ezDd5o4CM5AcvxFH3LESJ42UcP8kfjTRgNg2FZtK8cuxGA9qs1yVjhERk"
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
