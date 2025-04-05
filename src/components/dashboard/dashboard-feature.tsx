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
    "5ggkhnsCetgjs23Bri1yApnKbi9mioQRWWdRd2aEGSvA66FhaUgyQRaKVts248C1MDjB9pfxLh8CMoonkSALiQsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zjs19MbEwHnZ1u7NPbogTJd94NGFgvyDDj4frjECpTDnENjmrG2aXcBrB4kzksjf2c6JtRyd9BsR1Ud8c8zK1gu",
  "key1": "iTZoKYKXdAf3XHeUXeitgoCM1Z9RZjAjEcHfb2RnAB7mVvXu99zB21MRpLfyHpTNaLkcCVjVNyTzKHmt8aegbkd",
  "key2": "3jaqreLNK3RJbqVRkcLiX5swJo1DDsm94uAhTPgbeMkuRRSEUFxEJ19zzRRGDQDyjPTxxrxbziCEai5fGs4j6urk",
  "key3": "2LB6oRuB4NPP2gqRiznQaM1HsbXJYiu3J2ASfwSS2t5sCzWEaaTXxsQ9V3jmJHAYfdDSke614EfEAwmjjsQpGfre",
  "key4": "3wwwg9wbM7JLdys6GBW9FLDNdPPHGYTY75zxwR4ZNsaHVwcrVGZCvrJbtHSaUKpGFrn3Gng66vzGobUJPfjhq9CL",
  "key5": "54bj7gBuHpq1EH6G2s8R6SGy43CHpwzHFVKju5pwX7fNmZDUReGYUqF22gsMskjTJLF7vZYDCPbienbyA3skZFG8",
  "key6": "46V2b5PbFvCHwjCTjAEo2jcCm1x6SP9WGBpiHMLaASvPEmFtr7UiHdpXfMF1NinB9rVDdiFmgH3ysqohjGFJ47wP",
  "key7": "3AG6dSKpJm4nyhH1sVCWitn3ziWZAyNsSaJqWMPTiQuX6MbVrv2i33xE7TRawzxSr7ipJ3mJjNvzw45SMaRy29Wt",
  "key8": "3MRMRhnEoUBUFqQfssAxk5FPEVRWJjFbyoLc6FHdVZ6eLKz5udvEDYBsrkxwbqL8EAam1pt5MpAMxVtmVpH7ofJC",
  "key9": "4E3dTbtARC4uYRJJv7zaYS7L8SMfiNxqFLKzQjju8HXoNjoyeLeuZicLpfmQYqtTg8TxVFiXH6bWRH8KhMNGrfmN",
  "key10": "kJmnWJd6D8FFPtQk37oVKd3niFbE8e4MCETx5HgSEr8SQzUCHSKb3dAnCRWzNxecUXvhnFbZpTPRd44nDe7TY5C",
  "key11": "2w7nzNTc2bkgoGUjvbfDt8VPzdneA1dpAYbbhB8SYgfh7Ci9dur467v27qXLH5CpQb1q8vkKKzK6XbokVLYTKvAF",
  "key12": "4GwVQaGqfsYb3Xu7cZ7o5kK1LZKAdfrE1U3cRzQ7CVhCujtq2B8YceSMenfMX8fyH4psn5iRhaq8XS8orHD2X7Pj",
  "key13": "2kqkqrJRYUfuja7z5b4FSVWvYaGVi3GSSEWn3agTkTie12WFCyWDtyW98UrWsdkkC7qxYz3LDoXJ5fA6gmsfn4PW",
  "key14": "5Sc5qQbP6mTLwhQpfRgqo58DxYj9h9CJnpGnuhUxdh68bST5b18gCPcQ5pR1dT6vRBB63HzdkKM19ayun3KtCjnx",
  "key15": "67q46fe59WMYLwWxtfBqZhk1wVFKp7YHZPuSjSG2zSpA99vkPa31oFaKRnjBdJccgVTcutbkJjoD1Wm9hpCyX35X",
  "key16": "3gV5A1gPzjC5CoZygiF6eRppP6U4dzNWjfAPJEJwW2Wj8n95MR3WJ4Wm6EbXnHnYMziY78LJdb8vJEQvj1xcWSC7",
  "key17": "3nKm9rX97bpKVefkDjW7C42QSbiNd3aZgmi2KjaMownKPji44Ltw7RD4DTsbtSRGt5vJJgxyUERQ5xU9pLVT9StB",
  "key18": "3fw186FPEmDUZNs7WUSJTACBdgQsm7PoQvrd8dwGsUKuhEL3Lxtjp8yNSvWu88TcbrMCnDG67RLj6AsbuEwyPExz",
  "key19": "TbQuSMW6sP21eL2re498tR6zizE1xi7m9UR3YaVoJiP8PVqnfZLVn3erxtPMVJpHMmWtoK67jHw2J39KQwBEdyk",
  "key20": "47yU5gRxbWDRPSfBAeh5Cu7zZZAtnBC5XePBJ9V7Gx7Bwo8A6nFMfdsSJu1dSqrHfg4VexdGroKfaApJcoib4tfr",
  "key21": "2dCavwivPa8p4G3Qd7rEDLG34detP9iHSEdbk7v3y7VXTcaw4trA8BgQTToE3KdeLKMGPuMhvHCk1JqrmFuD1cET",
  "key22": "2LPDeBKBk7wg12j5HqKMKKrEcX61KzK1YK11mnaeo5HSXNN6KNy7oHyvhJTj3GpXpXcpTPEPW6QsY7jSNJzZTHea",
  "key23": "3W1KARsUTFt2KPKWUe5JGvXnWE6GpAVBfAsFapCAEA9FHscsBdTneznVyZvvLjemewjU2gGqaNHTptK5DLNCkAnZ",
  "key24": "3pGkUBFbwCzH5prpuxQRBpUHh2RBXnr2qBBmRqGKj4XAobtnBsPtmf5icPjxpkW3XEQ5HddTxadWNzcSGb8HYGjc",
  "key25": "4cK2bogLJ79L95Li1Fm7UHWWuLmDmpUk8DgeGyt2MCiCFBmn6W2CT5LXC49mvYFGznyKFgK5E28oFfXiDn4u5dLC",
  "key26": "Vezaj8u6mWXtfhQDBme4BC4cSgYVLqvFvHyfmVTDizecQfxuNL6XVKwELtwEhz88BDp9QKkiFbeUXF2SoenKCZx",
  "key27": "5yaYag7oiBosyr2PKqoJiZyggMkuKdtDKkLuVF7fUzZsjjnyRZfMHvquRjWFUkfGZT4s9hMWB8PdKkCUkvEJq4VP",
  "key28": "okysL4oCww4PwXafCk3SmfkpNY1gqkQJeeBbwAegdSaDJu5Pju6qeV2yHYgLrAEy76gtSeGvCUZWb5w1qqDQmDB",
  "key29": "4SdmbpF48gVVUR3Kt9q68XtATVrJqnt264nCTckZPe3ThkE2jC2n6bQVT41ArUCmEK7smnZMa5Vohxb7ikswTuwD",
  "key30": "mQ58rf4wHr4N2Z5ypHpH8zCv56tEat2Wxqz1rp5mBdH9uvEVLkpMbjdMdWtsCWjaXhvAUjM8vqoh511k9jHSLPE",
  "key31": "ETr5gg7sexPPZJWGWtCebsJijSXpBDj2AmqkZzGYgdAoqB1aHCJmhi5VsNdNzCKtHi4dPZ3FPe8sJqoGSs48CLb",
  "key32": "5LRn5WBHLVh13BctbRaKKi2FvMBM22mJUGyzb2W6AFjt8XTUu6KMS6JCTwGQJ74AnVg6VEdgHRqBPqjsD7YbX5Lx",
  "key33": "CkK9RQtA9hoqbFJLDiXFF8bPKdYRrX1VS8becb7siRTn49wao6hMrkA76sZzsT4DJZvZ6zojQgAJ2rQLWW3FiFk",
  "key34": "3uRuaaSEjTD4XP2q1KkfWMv8VvPNaNvz5VVoX14UEBgzSZytdbu5BXtqqaTc3s7TpP5b1aH1xqb912Dt9F2wEcMa",
  "key35": "3dzErtxAPjkA81GhtCfvYz7yAWDkMJ1uzrLdTXZVGVPaV3AQp8vPWtwx83mBzF7yc16qZbbkRUsxiu3YqoamgkB2",
  "key36": "5cS7AjPfURki44MbimD7AUMu121RygCgNFqBn8NVQyZvXvjTewY7feB2E9oArPyTQhaqnfADtr4dNYxvy5oNKq9h",
  "key37": "4JPMvw5WKgKgWDX9wsDpubGop9ezMM716GiTysmDUMZYPXZj3UyefY9qt5u2vNmxnFEY5hQFztK6BHVKCzrgu8NY",
  "key38": "2xHMvTxRipVJvEdjnqa1bNnJWziJ2b7SMJaSYiE7trsWYcu7bPjjaE4Ki82VdfS6AosYwQtoMJ4XMhAUt92MhPkR",
  "key39": "3EdThqxqxgbU761ovTaGJ5VqVocHkNCY2V7YaqFwamDd54tFH2bFH2CUexu9nTXgayRYjLBykSnwTzgZ36NRM9KZ"
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
