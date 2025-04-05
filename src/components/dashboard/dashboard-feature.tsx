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
    "2FwsYDoywgrfnu8jvcTgcy3wwJZxCSWkdEoUj8DZFSpPY62fSmTHh77A8RbforxumwRH3Buf35Bdz49KJTM5MxQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zcAKJ8g96GFsbEAWiexXQvNBgJRmpCMsfiaeqU2suxujreo1ZQ3PJydLB9aJkQjL9w4Sgo1PtVJj8HAqEbfAZG7",
  "key1": "kSxo5AfYkssuPqCUnVsmbrLy6P3qM11fafbXEUMB33f15Gv59s9nyPybxbCUDeZckDq2vCtzuVywndazzMRWSFz",
  "key2": "sqvxYPAeeEhhtQZVXut9vxHLGEW4n7n8hsq7pKxyPeFQU1ZCEFGojjytsz87CyTLff2ohUM1Ziza6ii8QuvBUMS",
  "key3": "dQMXTMyFsgFYxUuR6cUTGamwbMy2m17xCTY51GxZomqiqh8GUzqcC9sYPbb6fxeUp6jxQXrZopT4UNuzUfCh5o8",
  "key4": "r4Km8zXfZaUPjVodAQ97M4AMGhapZr4XkwLommk3Kko7vwwjTpxyW31uFrbGJbkWUj648muJEkLi3ZiPkwDVTcE",
  "key5": "2jDitfTP4RDYPQ6ZAaQdenXJ95ESCmWYocpsGwdxqc1BZpK9vYccqhhfnBJXCiVZeiJGgTWh7wojTxgvuGLyjvo1",
  "key6": "4rZaETwGSPREimbcf7qGjxEXK6Gi5BDXYHbCc1VtMr4vYU67C6zWdZrw5VknMLhVTVbekw3LEAhw2im8LLmQQtfe",
  "key7": "5auTHw6cYK9QNUtttyNtZ7sRcGED2wDQLHnDY77nZPTYg5Xp7K6qPCscQ934jYeXxfQgPiGb2C74Dw71qDHqHdiK",
  "key8": "3uKpbDWC3KCZ9zNozz48A2UwCWNXEiMg2VtpYmmcTXi4FQuoAxBPbqi1jG8VTkMcnauDsNW1YZYPQcyJzhYQn4Eg",
  "key9": "4R55z67TUEppfgxrAPhVG4d9fwjJ4QfXqc29uKxc8EgfZ6i4yS7TkDMoPRysRwMzDdTDqghSgJHppn2BJU2yrdb9",
  "key10": "2gGZPgsvYjcSh55NJwh4y6EryzYWdr8g6594RjmF6fCBHk65WBJwZXWn3554PbUh63AGB28rir3iFW2Baq8o7yFJ",
  "key11": "35m9V9aufZrG1tk2cTpZhTyYGa5ARuQrJh3b3dGvGM77mn93BN77zBx1taoZodoPvEyN9eaS5DC785pzo9bR9FHr",
  "key12": "NS7L6aGyxxJGQ8YM9CJp5L9pnKTjpoF9yjCaEy47AbxFupQZ3orD7E92vamyLWBqzUHMrPpexvyDhXnJh6ChG4u",
  "key13": "2W9KxqJ6T514wYU2mvfYPLQdhAkWvUMYsKmxPFrXtcbYUcgWGN3KzVirH6ZidJpK5yphyjVzLjD1nrNztXuNE8GT",
  "key14": "64h442ck7fhJgyYkg6N3BFMWHCbRaLNLTmb7jvjWKMXatok9rgRQTcCRKLeweFRuqR4caURx44612ShUasnBjHN5",
  "key15": "5C9qaNBzYLtr7SMnLJxJNyPirzN1pp33euDCstyh6pfPNSdJ3Vs7fRuWCPUAP5352BkrB9AoozcV6daUjjHDgiWf",
  "key16": "5BAcbBhjdLFjc54Fftsap6nQbXurxHRZakRMZNX64Uq1kbLy1rEJDgKBEA4W4xgp6NKim6862hUqkt3GQQZ91sfY",
  "key17": "3fLAgoFCwtLZxVULbjRSKR3VD54AqF98ytcUeeLd3Bg6vaJE5GghqmKkejxGkuG8Gtsgce8NY8r4ZV1GzGS6dtAM",
  "key18": "4UP4KdZGN1MPCY3pa2EFgMxXfMnKPPpF3BgPsDjtZnKgS963R7ffsecRd8oKpHc9SGteAwMQzNeHUZ6zNz4qeSwF",
  "key19": "2HSjoMdqgJQvNVscvorJ3hNLYpEb3kYSX1i51Hd6GqWYDJayKWCzSbBgxHhA3wELKNzBCg2Ypr499LJJ6nXLWKrY",
  "key20": "4Us5ymrxdhKJoM5ktEGLrzcQSNEWsfc5kqRYWXyJ63fnh4wMcr2ZvVMwJMWoE1vF2VCwd4urvCrXoahLVZPLozu8",
  "key21": "Zn5iJo7zhUn2PmLERijCdCVvDJmJ8gbSHAWeerPhC5gR3TaSbGim81HarpYmaYT2sQFYKq9rVRgTTvuuQtybDi4",
  "key22": "5MPHcMFhcdV84W6KcYiqEXtCLckCBuoXBt56XPsHnqxTJJFCaotaLLuq5QrkS1vxLBuAWtMNQtGMudUWoUEEDPmD",
  "key23": "64QeXHfekZNkNd9gVi3wSDkmPpHSDWBymY8vrAfe3p1CEh2VFFUokbFHmiSBhhkCNAmsRhUxMp1nakC3jNfRUMwG",
  "key24": "2vuPmTWYFnhK8UPTfZKaANmEPv27nzUnHEXKcQH9jWBXQWpX1VAUCJuEz5oTdFc7ffe5iY6onaSfZEvTc3rJp1cQ",
  "key25": "62wbc7DqFiir9Gjc9cMhcv1XHvsK6T8B29jWLrfaLrvSKHDuc7HSQhycM9k2LBhDitesPzSq9n4voGGHJo8iKGS4",
  "key26": "2PfU54wXrRBxQ2V59NAmYEhHSXs6CLyc7LxGe9tYci8ACpwfJDTWMem5R94wuapcaXKVSix7jerrGnWRZGzMHuB",
  "key27": "5q3xKGKS6T3QZZJykATT4QkH5fxohtUqFoSSNZZsb3tgPohHF6SCvReBj212KJtC8fMUbpf2pHJaFGyoSj1q8iKJ",
  "key28": "ZNrfxFjERC9M8vuc9zFBeTkTJ8EMcmE8iB8nVnBQtzmGs3CCzR36N4fH6tSERorqrymTDTrjSYA8suBfus3ah7v",
  "key29": "nKYvfHcDoEfXkJNuCaPBNKDEyCaAm27Uq8JQYc5ETG2LrXKcX4zXUL5RXmQovyXmjRo5vyguJrEyWXdhZ1LQy3x",
  "key30": "3zH8sHDexXpvfnyEsvo6Ufi3duM61xPvrPzd28mMe6EvUCWeS6rrDsz4uoYJqMcgCxj2Bv9hV8YsTqkZ1MuC9pE3",
  "key31": "2iDmsLzqar4bUrWBRJBEFRKgDy3kVHcFcWSMcBCJNLXV2wV8sEHLhVVTm3fPsqLxtrmmDK34r4qBWbLbQpaqMVwn",
  "key32": "5crLCHi3uswdVUMvuNKmC9HuBur8HtKdCtZpT3UhUaYcoAmKxNftcXHh5sZDiLrqDb6Sdsc1dGjTKqqReEk1CDDx",
  "key33": "5AnTRvgzkS46NTGLURA8USDqE7298kd45b6wdqY7xCvrFwsvtv7MdHLR9RtvPCb7osS5bGa5tRHG8PHUCxzRw5LW",
  "key34": "5oep4Jq3U4c7TEoVMRx5fr1xNbVJuEAbsHvn4jryGEEyL1pJYhqT8fLuJ1z7SBrY1EsiQ6NjnobannGCTYHPvRu",
  "key35": "3kB4ieJBX4Lhmbu4bbfKWrBSHN1i8W9KebNZsaAEJ7LTgsrK3sWiHbRW5MDKMoaw1yrwtGxdtg5Nm6Wn8yYBWPLY",
  "key36": "3yAdq2NEdYaARduBxFKbRKJAPZ4u3A8Hc47QU69vwbzjBpbLYtUYKySXieJh629B6Su9eUwxy3MwXJNpREeQxxrX",
  "key37": "44vHJNGwWe8UZznZm518ptKYFbVkqV1KdDptQfUTQyYoFAo69HmhCQB4JaSuhx9nmYohQKyJepbAi8A9nQAXjeCy",
  "key38": "J9PTx55zDAEG72FxKpVefyZ6a7KifZ9jP249MZjspsnVbX6QYXmveFQEmuJh8TvwKeyBN7CyfkVuoCgvnWghqyi",
  "key39": "47L7HmVzJdrq1cpsrcq6Rmk7XYKcBGMPjx6bMnV55DbJF98iLcT3ceRvTyP3WcYXiZqbta4ZXQWWQ4MggywyXZhH",
  "key40": "3RaV3Dmp7ZjdVBprWGiQALkR97byhchjjo3DMkqg5eZjjQ2VhnGpG3LxLG59GRKTpQScaixDFe8sodYDcePrLkZ4",
  "key41": "88fPKWu5P6eu8cLQWDmn9eqrncPfjqP4saezBTxi2kGD2K9r5UM7kbJiw91Fee3uTDoP2AnbFY4F7jkCAriZ2Jt",
  "key42": "zFVZouxGDXHrcAsiZ8rG4ddESeKjn7rCoNTHXS2oUYz4jm51tico9DWGuHxnkUaTj5C5f7SgumpS4qiDycBQSya",
  "key43": "37xibHppbKgHLMFaMa56ZTPxp1ARL7kXroK7Ci1xr9demwbf9pSkJtdpzjkXMb5ByVi9MzU7HTQN1JXftLY3Zme4",
  "key44": "pbWnYnAFBMkFmvg6ZHGN4REvkKNsraTsKssA2obcdJQnN7AvT2jT2vcsLD5A4oB2dWyoejQMYz1RbBnWhUCSSPY",
  "key45": "5qjrBeHpddpppnfQeDcsm2ikbNkN4M1hdKZ852MaNbKHTaFowLQp5bR51UMo3616frTdPHo1qWXsNHtXNhvTbUa5",
  "key46": "5E2n1wmKTzhf5Wht9MCe1wiDBh68kwKiXchp3UDdYpF3NE2hmHHCJEgekUwLYacMEBXu1QgAirhuqsR9tPvX3USb"
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
