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
    "52YDyZkwRgGgyv1YbJcar3M57BLNvv4d1mDqPYs9jeVdLKn6m5sxGRk2s4JJnefB3EdJdi8LnWf9efzz5VSD7bkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oDoAS3o6Xceez95DjbZUoaRJytEukvVN2pCXLQsRrfDwAAvBoSWpZWAcMTCj8B1ooeScr7QZSBLighNcqjtpCLw",
  "key1": "4GUgDtMKpkQcmqDU5uvx5TzFkLXDMmJuKaWfEP6HVfkLMK1nbLvwQbQEFRm3jZWs842M4LhRANgqoX11ScrMZ6DA",
  "key2": "3MsFoDuP14d2GhiLCDgmHfPStiHn6ePjofwPtn5HAP3x12zheYTGSr5WMkrpoFGq1Anw7SYFLMFyN5Jr4qAkevXn",
  "key3": "3wrh8gEH6YrA8sPpBaT6QV2LE9BRJMQoDCK2hsJpzbJgWmwVC5gxjrBA9WVasHdRSMPEAJAvHKFEKHAKzHDYxXyD",
  "key4": "6i38A2z1WBHTbuLn3Jv5mJDQaEmGXHJ5Faiof79DM8gfq1EgFavwsV1bfzaT4sG8dhuNre1KW1PUQKbYQ86MAYB",
  "key5": "5KzV42kopGcVmNVoMvtVTyEhdPBWSpXCeW3Zji21viEvwdDwgMkHDzhzP3jZrtkWXo4i3wcVTwatVtdb55PAyzyt",
  "key6": "5v2mXZaFW8ZSUxFwxWzVWAJMgeLp5YCDGg3JnTNmND1ZfDKTY1g9VPd6rJZWbq2QfdN5gz1raMH21jiZDeYkd8M",
  "key7": "5qch7dSfK6tgDfUUrunxL7WeUYHgmUw72Ym1snqvm129whfxs7PLkYmiinPE6uVyc3GXuxCdoFhQMd4yKtWyuRVU",
  "key8": "2Af5Rag9HHftkUB82BsdkyPiqiunFAdMLNhZjagbsgNrAq21Sah4iG65fv4gjrqAKrUigDpX2aFvZvBsKGKsXJ7y",
  "key9": "33eJaQThEdqtMWutgFUrMmtCU8AubEL6RoJnTCAVZqtyhrccSBKG7H4jgKCDYmpfokwZTTxGMQRkrx6wS8yGdioR",
  "key10": "5NGmNbgUv6T95o1SV1LzVarxKarSCqkDKbpbew7pcig3KsC8WkVxSgp3sAAhT1HcfAkVQpRUGsv11U54u177REqX",
  "key11": "3Bk4TZMydLQgVjFD3MqcL2WS5wF17hqaNbkgX1Yyhw5P92bnLKvfpoQhA8Y1Mv8Fb1xJ5yMQFPjPF5sMgwFDbyUd",
  "key12": "1BwjxEXSbAFFtbCKomqbtdmhx2NiSY8Sa667m9PNR5hDsFna43WPLf3SezZWjomHxsknvhvUmKa7tdHVs3FrjM6",
  "key13": "53418AiiHRgTnms34hYc3cxxYLTR35wBjjgi9v2xWsRV9HfBfWaGFwCMYYdP2bVomqHY5onCSmS1F97VdL6qjYnP",
  "key14": "4MzfduJ4ATiPAU2Us4AjpPdy9DU3Zw4XeWtRyeNTPHzqYGjjP4HWWqpj9beYQjsgXAycx6dvaexREvreSsQz8pxP",
  "key15": "5TWgEzC2HnB2Bu68X2WUzTQjSnao3ULBrpXGRRTyqiMWxZ8vT7YxSyM4BfUCQRU5QjHa2pSTzFRNCfUeqvvyNKWt",
  "key16": "DzXdLNc5NYkAoWPFhBJzMd1CcNhaLbK2zFwQ6DmNQU6hxnw7rFU45WvMAqyvDqv8qGe3gEq7EuqU5H3eyeXQujR",
  "key17": "3ReixiVz6zTKri56KbENV2Kt2Zybe46DsFt5scHUDUU6F7t7Gc4zea8kyGsN1hTNvw9hCPbSyM3593JFrmescW5o",
  "key18": "4n7yRZ4XRZFS2WCMy2kBTw3nSrCtB7aPUdpk8KX4XtM3c5MYJbnbEPTEQmnZz6sQHfk8TnD5SEr8Z71hiyJYTrGe",
  "key19": "22UfcGTiMmyKFNGqAEVj6NdvaLRiWby7sGWSNGmMyEzc1dzrQi8bX82WM1z2ztGBpG2QjuSQGy1LMqbkhoMvCerD",
  "key20": "5wamHbVAaJHG6MDrpbsxYL3kudWgn72v5Rhh2MKGp2HpJ3CamZB7AH3onM497wZnezWeSrynDtvdXnrAYA6TbXVH",
  "key21": "brvuzxj1CWoeSNmSqfkijxqMXvxm8puaQwRz8V8vgyooypDKb3GwneVPrAsxWvKGMx7fXMKeiUJktoKWcdJAh3X",
  "key22": "2ggh2fokqSY5QhRaXn2KR8pS1yiwhBpTJKSTLeF4m5pvVqj4QBt3o3AktJ72W9mzU3WrPE5PK1NRTya9qSxk6Mmq",
  "key23": "3jPXZ8TcrJYkkmbLhPqEr5Lxj54EfJKMPHf2h4YHCEdY4nfgmDEwzBRwzydmoAnybGrwyev1uxMkhZFnwF5cBe7D",
  "key24": "25yUmyVPrGCJtY7FcZmhSkiehMYktMuyWyTqexpKcqnTx5onnD4cKCuyr77QJ5k9spLoy19gKxxnEJ8RanSREVGo",
  "key25": "3231wjz33cPf6LuUUuLiyukwyb78NZoVyi2hX8AAbdruNB1KAar7wqo6p438WDjHC3wET7VUUbA9J1HCMJqvLWH6",
  "key26": "2Td6e7Cw5eRSvLZsyKXbYixGBGmSihHfrEhW9wq2mrMh7ofYLX2vTVLuAkxUNtKsFAyh6hkPBqEQx662W244ayMn",
  "key27": "h4J77XxZhSJRQdLydNKknsvzQbpjgK514L83PxeW3jFNZKiNfF7YC8icjfxdXtLvqNMcijDed5hQMLXTWkFiKVx",
  "key28": "4fPy3k7uwmfTv3gQfr94Qj79riwQ4BCjYkapgpvNWLSunTfsFzFWyBiYdm3fKpRYmvgpf8DcpVfBQLVsX7Um2zVQ",
  "key29": "4ctbk4fekmRBJs4pPNwPMtuhSWhRQHkPfakRuB2d9XQKJAEwS4JPwjcHf2CrKKkw6G2vxuKBcyc1KDFVnKx5kB5w",
  "key30": "2edSs9i7o5pf49yk9Drp9gfZnMLEfFXFkbhWrZJMggv7tMZxYmxpbp7ECVYt5aFzVT5tWUqdeabvHfBvCaLw9gNo",
  "key31": "JkAmAeA2XJ1C8rwp8zea1N1kg61kv5WxREi1bjf58WjWZaukhcJbGJnqsBUt5BS218kUVohdYh9a61ifybBL5aR",
  "key32": "2RC4g8Wtzkh51ULZENw8QzRzwNhL6SpoozJxNLMydiSWN33vFu46zGgj7xPgoAo9kaZ7at1XE5TvvL2dVvXVPVuP",
  "key33": "oYRZ1e5ec3mvDufnM1mLsQENsN8FzbNPNsEP3Cq6pXxJMRttPp8nZyAggYwoTgFKvtxKay5TSUbhpzwwrW6HkWL",
  "key34": "2RzQNxtzGXQgZgqndq5auyTTScNedeGn1hupjuCDinWfchStF8E1ZJvy3uKvx1QUjgtTGfa62mYsh8KZ5BcPVKpD",
  "key35": "5esqpaVF2a8LH4j6tjNZRNkbhxgzxFQupVytSDteU72XCvB9Wn5tEh94vpqnn3VbwCNUs7Po6Rpt5ZMFrsV9fdn2",
  "key36": "3VfGuM8jiQh3QWULPAKaE7gcwMm9jMnFeaQCRqvJX5H1WappwoYczibFj3TwWisLHLuZQSgFKrL8YaCUwhzrCiWc",
  "key37": "4fjVRJAtG5zhGnuokPhVu3N2JsuUU3Jpe7mYsP2iasj51UVWAhKhiGMfoePkyBy7fD6gGvunnP6UG1afJ3ZGKSe1",
  "key38": "EvM4hTGPfnAyrjeQ3FF1QYbtAFnrTDjBKxMpoi4tTbjoX7Z7bGjjAAqgJScTYw126gpMDCWwSPRtjkgXDYncppX",
  "key39": "3VdjRXLYxhW5BExDuGaSQ6zDtEvNEk2RgnjBzoAY9ctkZcWf9RXHJshkRv6LjWr5wMzv85TqNfyVX8fX9RSTWiSh",
  "key40": "57f6gwiHAYHd8sxyg9cFuP3VnBtq6ZWYacUbWiiwzCc1cChXHsMsZMmQt5uwTjR1kGUGKedHj2knPkj6hAmMJrMn",
  "key41": "2xUGhRAZkTdGLfWWU7NQkcnNuFTirdLXuMV7tusjuB8ZuVo5qUA2Upwo6PrtVQjdf9KPzr8UhrTaUfDiwWX8mXKe"
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
