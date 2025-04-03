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
    "r4ruxraGN2tuDt1nyjGnWcfcTeh1wfPqoNBchWMVB1VnQh1XFVRaiDzPvHDujDeFvKoGbZS5mdMQacCBbntBdJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DspYXZeJKCcyr65rpusRfCzA9bwAUf6z1mEzVREdncHuthgCi7uiTCpNWCLVmpKfRcwdyLTNgxuQHoDWERyGikg",
  "key1": "5Lbi91BCKwEKahnTqzA4GoEGKQAVUjhaycvg5nxcniwXiKYDBK5M7swijXAuLxPgXh3m7Bya577kqtS9pPPEC1zP",
  "key2": "2vzerWiGUkXzrYTyjTv8Q7qQF1P4xWUZrjfJW8oWrhFKimnxene6PWh3nNr9PpP2a8PRAZrLWW6cmGtCw1G8xTCR",
  "key3": "5Hyz7wGWZH3V3cCsgW6aFGjmQR7uqkMyxaCWpgwaiKCMC35wmxcMZUBJE8M4qyu97JtszKYBNu9PrnoRb5SUdBtd",
  "key4": "591fsH8uDz64B4H4BhJC8cRSgxkKYs4Gh2P45RaAf8698FKoiNgtES3sHrnZYAD685MTECyf5dMjSvTLgaHbE2cQ",
  "key5": "3KrYjw3M386CpiVDZHzwBcgKBc4Kaz3cNAzG1WPvuBee7GWwBaKRNmV8fMpoZByAUgEqFcgarDUFrsb8kSLWCwd",
  "key6": "FzLMUGf8YUSTt6HcquHqMQJpfVpnKr1Jy5bjD2AMWAWkZo2KzbxqxGSdnBpa5rwFztH2ZY1xceTpVGeyF58aoDu",
  "key7": "3vyiZsmH7gHzDZzLKcFzC9r9CJx1NdgW8CydztoSQThi95R7rrUKFrw3EucCqFck32FkBPjk9XdzoygSfSmAHhew",
  "key8": "29nQ2epBVZUNrhLqfZSr4bDYnYhVr6Q2dyG3UGbVWqgMf2EbK9Cfm3o868GkRyJZWcm9bBpu45Y1RKAVKYkg29gk",
  "key9": "LwG2cFvxkeiyYspLQMdQx5sJ2zP3c1QkrZdLsanEFxuznCXYfp6py8DUHraNZQoJKwt7MUJViWj3XB1be7KhqPH",
  "key10": "XH6AMoZtQ7FazmGUhCabM1jP6DEe1fRzb8Rvj4sE7dspEaAmMpN7GgaV25wxRGW3Vq2Nv8TNNP9L3y8dHQGg89g",
  "key11": "55g749ZHqnDxAQJvkEGx5BxVx3AZNnS9R4szadDjLpLqbfJLo41brntWfnp4giUeBBtoHNoH5fH9q6kyoqGUB1LJ",
  "key12": "32eGhZFWseN6KQ1NAQ2ifphMCJtA7QQEELcKfKw7EBFja7kEn2oud2bmyLwnZKNqQoiGjM5x7g1qNHd4Q3apA75i",
  "key13": "3umjJdAPvfpiGJ7g4VMtiiaLR5ffdhzAsVVnc7agPFSMATrh6QddqCeB1KMpFzc4U51AKkvJ4Ca96hwvB72oUQLZ",
  "key14": "m6eqoPbGFku6Ufm2zStuNoZyH6ZBxFvNkz251iquYAnhhR8ACa8a7p8EkdwHmBE5kPEDNiEdjuXo7Wso5X8XbcD",
  "key15": "fqnfhgTHxyPyFvrg1vGY5HAabeTNa897RpAaWPmE4QAfEgNDqf74aARiqTfMFXkbxYpBdww7GfC7LVduqZgxC24",
  "key16": "4D62Cdc95sc8W9aFsvt3Wme6p8DYLGpQrZfcyxCoyoLncfiesHbySbDvunhmQitzL2e3r1KYZ8qUSMHds9JB3DJt",
  "key17": "2qUYsCoMKNpfCwMo9GjGtkonhwmZJFjxtYmzrh67PPLLvKCYPd66zL1hwP5oa2KMfUeKZxWxiLcFH5cggxA2NBop",
  "key18": "4yPzM7SCz9TNiUQyoGJwW59HQymnnzeXknAJrnEB6BSdtxZFfhrruZx9aDgD6DPstBfQLGPb46B6KaG8gtJbpas9",
  "key19": "4ZZEsVu6qaxdWJPAFcSxphALGmXrZhtScQuEVaEBazuG25ccRXcSePyN4gGvMaDMLFiETUJV7cE4GpjMB8JX7rcp",
  "key20": "5H3U5en1guHs3RVGQfH8Le8oM7nXCT1b9U9g7gCuGLodT4n7p6As5kjyo4rjtaReF9qgJKkpRoNpCcStpipuhjPT",
  "key21": "2KmrAd3Jt87u5xnw3ScHwfMcD4GECeXoffSQwvWb68szFRrnxKrdPC7FQ56XasFxkP7WEZUH3pX5vWLMu1b2WTF5",
  "key22": "4EnVH7iH2kWvV6TquU3dwSAuJcQt9Xzwis7SzZ4C3TEHCYkY7A8oFLtieCERemx4f4thxb6pjeChG8TCAnw8Wrrh",
  "key23": "2jB1dwoDHAAmNSVSkvcM9CxFpLBUjEAbXhToHDDrrHXpeB7N68CKZfMynFwzMzReW9NrcseemgBkDDLpYLkXJu47",
  "key24": "FgBtaAAQLUZ3CU5foz7LA2CcEqn6HNo1LUGYDyKVfuVUzRjosub5ne6NxerCfL9t1SLEnzL4CUDD5kjmcWPgdw9",
  "key25": "5VC3KzXm3k6p5XE2xTxc5KNHj1BGJBzKVSLTeMs83z8wV4n2xpWeRuS9JEWf8tbzfzKYh5ByrCZUPcSsE3Jpx7ET",
  "key26": "3vJ43KmiBTQVapavv7z4ZwM1m5cGXEwc8BoRjDP8mzmbJGewvT1sEky4a3VTrmh4C7g9DvpeLfiypAEnnKXbDzBp",
  "key27": "23pJ5Do5ZsqbZRjVv6MEyofuE7hiC6jbxYjq66vPYUrew7NsBGHpSWuAjeF3PJcDRgLTh4fjsD8ukk7Po4WvnqiV",
  "key28": "o57et9U3UFj79CbCymcNkYt6Ts6MmXqN7S17Ev8wUUydbEg6zs6xRjRA8Ady2R7TKqK3yozroCDnAaUWkm6CCqB",
  "key29": "66Ao4WtHrQSXws1VeMujoeyfQxJUQXaKYc3rNjbMwcREZ9Jf8uYJ3r19L58X2qS67sYCWeWdjsxXMNmVyRu7M4W6",
  "key30": "2h5a8uR6MFCe1tvqkaK1MjM1QwaoxqqRPGLQwoCuts3UjF1x5tY2iiaR59wWPRxieUNXqik83zjpFNZHEeVGHZfo",
  "key31": "45NPUDgnjrfbbkvtT2F2KmbeXkEqfmP3V8oXHeJ8owzt2FrdWogw3VTo5yA2KfQq9xKAePZ6ff5kuhox4Db8CyAZ",
  "key32": "5CU2xwRqdms7azFa3h11YM92aXAcSx7TtAAFu6TojyiiZSTk1E8CyCRDqZJVvYaMDhTENzdXAcPPn7YZvq6EmZf7",
  "key33": "25DV2z3omYhAeAAP4rTANPTLeuxQwZVVSTZfzxyXotXpyCXZ2yPoD6BVBt21ztEffjhhSWqoUyYzQhJcnb7p7X9f",
  "key34": "4QjvoRhqTznCvdf7nBZVaiB1xpS4ChUDpKVhbQpjPak2Bmn9pbUVdv68soQmujX8SPuKMMSxxiC3RGmwxrKNaW4N",
  "key35": "2fM4jtq77vLSNnV7AKZRxTrnHgxXAZmzDNNdQrshcVQh634VLzGBvPDweDMbar7Q3zx4FSSGXbvxZmJXjEpsFQPD",
  "key36": "27ovdTZ1QdBJsdEdHDKbDF3ZdbyNCitYj3Bzf5R2S4oVLiHmCVDYU2jNh7z2x91uKtaQF2uQrpoeE36kDK2iWxWH",
  "key37": "4DUCsBrabqqbAJ7GQLG1CdbqqZRUJFdnBLvP3WGkYVvUKKcbnFfzq89tNqkMShAee3UpSfrY42NVSF4o5CAWtoXH",
  "key38": "4VEAuvWLBLNUoqBAVmWpzquPSH9sXFSR2gLKRy7zWgePXbp2TRwRXZD9sKuqs3LBUnEapFLnzGhA1Vdxuw96vURz",
  "key39": "rHnfB7AqHq3aeFkwKUJu1p24NnWjzJdKb9Ljv1CoE59gghHeViQ6skruTtQ3VGzGASN4B71zqpHYDyPkcKmL4Lz",
  "key40": "cjHt7hZD5KVh3dJHBQwma92gZyhHVCEWoNxHVEfsK9mTRrDTZhzByy8xoqhCGg4HDtF83mZEqYsBCgwKdyTqkZw",
  "key41": "58aW1F11F2nyhtEwc8HJ7Nw165mvx8T6G6JD2WDU7nsG4gZ76MdbD8vBnhUUAnCKC9wonyvvtm3vYzCyo9r26qgn"
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
