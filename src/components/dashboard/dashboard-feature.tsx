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
    "65xFq4u3fNzo7QoK6eFFFwkJSPt2qvPUXHAM9329N5FKqUvNU7GkNv2pdKjr1ngGCFiHnFfRCxWUVrVBrBVKTVjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GvDwnTdgEdm8pt6dUMWqbSmp5GqYcc99PzFvXjcVtVS2vennqNgfYHh5dHVHHwnYfmEXsyrnKBuVU4fhBXojzfF",
  "key1": "tVdjWsUCxVZSqKLXM7q3E8oVutYfQ57HterbMgftXFXa6zwNXcqeWGFfkJ2mvnnQpKSQvbKLQj8LKWCihKpZ2Ns",
  "key2": "2WBY8sRPoaMUdXnfv4dM13dEYd3jkLGfmP6sSqcfZBDCaWazCNvgrBpTER8KpbXaS1mDfbe6k4SFvQB5zcj9ShPY",
  "key3": "2eUrf7EWYHTav3JcRRkEPUH18SUs4t79Ax618WSX8a5NUTBwSNGNRB2uGMFGSMho3ERsR6dwDVNQAqXjqJaHYtD7",
  "key4": "2LgLDN9XCRiEzB8YrX6qJGkZZwLWzmtP1c2tCfQ2GFTPPYpVmGZdkCLuHvyiYsbtranYdJuCeKKAgpHQBridN3Dk",
  "key5": "4iL1DNztB8tZPVeLP4nMo8gCXnrjtcbumDvT2yYiPLj4ivYs7XCD2TqrvD5pSVZiLZpaLzywNaLX9sumF8q1uYvy",
  "key6": "Up98AGogHyr58mnBgQd4cXMZCrhZmuxwQyfeBHFobCLKbpmuPuaUm68rLdwnDe1iTT9AKqCCcgMvqKis9tjjogK",
  "key7": "4kaZ4ipo2i5dMMXSdfLFzpswbbJWoMuDNnRnG2pZs3xpwm2kgdek2KURxkbfkZGEwP5MsABr5AYACgL7MCvYanMv",
  "key8": "4qgGRaRyVCTL8WqKK361h7CEpNQaN2peebfxstXFh1tbvxyz7uHuqDMd1swyQqCAKatpjzquHidVtp78DjzDkAQJ",
  "key9": "4fM3AwMberShH1kxN4pMRsiK5c2BMKiVhcGwVMKhts4jbcKDNMfTTW18wVPa6C16MGdwvqEmbbDP7TcGuJSzoSar",
  "key10": "PGW1zoSJrMCwPoGnyBcey8YiPqBDM4JDraJcMgyjeH6ogsJuXHMpb7J578WaQXV6VjWqmj3HLQFrw4UFmAkousn",
  "key11": "28AoYR9z2doMdxe7G7o5ShHSidyqnpbFxn4Fa9rnJHgwb6jjtkxzhJs492QrBJeEMUpYwoSEQXJ8SEqicWxwaAVi",
  "key12": "3T9B5HmEdPL7zGXsvv6Uu83qqYj5927Lm8Bw4Bh8kaYTR3AYMet7WzZetowuaCFQMAE1DXtavM9rExtBFn3A7Nvb",
  "key13": "2P3EjbK1CKt4LS4jGoNP8xSdPQGtNe6X1f69gJV26kxXh4Hq2UJhqrrYjt9dkJeEw36jBbrtL42JjMqFM1Hu1MRY",
  "key14": "5dHfMtEMbKu8D2gQCh1gSYjJP7JsXrWkYmxj6Uo4McKkCCybm4BtaLkEgc4YoKa3EjPvAZu5FKNeMWHi4YjkUkia",
  "key15": "3cfp31hE3bQhAeyu9F5ExbRmuri2jqGZwiyFePgEQkYySUbm8Hgyy3v3d5BG23Yc3FL4Gz2HE68L4s4w3FhjEho3",
  "key16": "3tsyfaMzFtjjRFrXZoJzZ2v6qSSa1cKp1J4NbxjSLyedwQVcAjr58gFWJVbfzq7xpCtrSsYNMwJpDmdjkuUyiBQj",
  "key17": "53NEJxdGgS7xYuXWpDA2jWagUndTGvGKUfSsD1g7ByuXbvz6KzZoAvHs6BB2q55xLQyNiSWV3HGui6gwRAnHPEcS",
  "key18": "5bUdsHGp8vgbsKZgE1uboEEXX85narRwTK3LL23fLajZtkz8MdBPS9C5WU3gpAJxAtNPNsnFgigZptqMxCsbV1x7",
  "key19": "63iJeCka4wCGTN5ooLmiTLWDBqh51FpSLYMDUhEYbe7sHr5wL41eoRDJ9c8ash218sDzdqE7gh7okwasK2A2zNSG",
  "key20": "3YqJczgETFHYMJTXhSZK5TK6223UTcu6YrMZykYiPszwufk77QLoy558Cv3awi4Swu27RvTnwooqATA12JcRm96s",
  "key21": "28NMJ3tshJEFo1iVnNJtRdwSvpaXHxVAAXm87iMwBC1jJTSijqYp3W4i9eg6HefWVFKQbKFJL7VUKBdzHGzEzV3M",
  "key22": "BwnUd5U69cDDV1pyokAc9fj94VCm2K4BDXUcLDk693Cn1c49nY2Ssi9riHvW4YGYWeyKdrK3tbQHU8pLBHiwxX6",
  "key23": "5Zsv3yfCEBG9ebkRohPS28SD64aRVBDBKfu2abTMcojq3n7yGKovQK7Ncq2dxa83S4jxyGY1qJczbBNAtdQncyfn",
  "key24": "66PuGKHvuzmG4UtaQUfiWDi4CG1Qd1dMHQBGntAvRWUrFbGxHvAmdDunGrtD7KwQFQWCpw59w9b3tuCDzGRiyB5R",
  "key25": "3NXpRXkyM3ZyHKb5q2b5iXZb5DNakaNe7fauxAaddi1aMb7qa5hvQszPDAUrYLqkpMdJqM51bQELnGDrALAkd3TC",
  "key26": "61drLYZY7cG5Gh3iguo6yqHSu5BXPYtiygkGxyAe6SkensuJkGC11nTiWwQqQHXjH4A6UqK7kwiekvLKo7RjAGue",
  "key27": "3hhNZTtP5UvcM2fWw5Fp5LX2q5GUmgqV4gjTT3ng4a56yP5Hi55FehBziLBvAk3HuMmbb2g2bwv1V2DrBGzpNgim",
  "key28": "4HRJiiGuY1YHZU4wiawVd2HNDgjFF4qA5pjxFc9Rzt158ijEodhYjMExifxpnrLXrxaZ8rZuAEuRRpAkKSxDRejW",
  "key29": "2Li57KGd18SpgrSXVXk15fgN77i32KZXkdgty9dMYwH3BtaHp3DE7SJnigCcbrAB7yfvWLR2hEeXgVhdfLvB1Vhh",
  "key30": "5EotvMWAK6myvS4YQx8j4vKh74wEP7Aj59Jp51xr3Zd8KvWJXAHqN7umJ6cVnQvC8P9DNbhYxdsVRF9xDLByRSUg",
  "key31": "57cSz74wnsuww8ifzHhvyQ6eXYwYbE9sKZ7k9QSVRMAZuPMZ1hEQHg5fo6QfHTrkwi4VRCf3B7M8j9bQPxXAjwpN",
  "key32": "5hUN92ED1P4ZXqmHje6jY2geKpPkUYES4bhPCFn7LFoH3TSTXk7yAXwt1ic8NYZhG6zvYm5bCcywjdmQte1Xo3Ej",
  "key33": "5rrge9vcY5o8q2VTGBqu5bajXMWZKEufd9XJx2vNsSZVyYh1gEqEWQbpbcKQ9WhnaFf7EpfTV89safzLSMFqHQ4K",
  "key34": "5uc8Hqv2uFjx4G5X8DebzvED2sW1pwx6UrpMeAzHQyWJiAxzGYJNqd8kS8fQcdNgT3Jpx3uJMGd5C2gDNU6XMUJF",
  "key35": "2Doxo728dsNaeVojkq2wyK3UGYr7rfrny1GYWUD3SM9CRHnkMPyGgcPFH5cmU1gmPJvCMz9LjZrSkM7Csd6mpso",
  "key36": "4p5TyqZKqrAr6wbYVxvmXdyQRTiGyxHAB5wq6qGWAsh76GQYGcumtJxTdgJWEvPvmMMJR9GEamNh3cFNDdrUmhHR",
  "key37": "3bedsMwhWH7PYejwFxKjDhwKD4GsWteAF2hRzzcXqkHSKdLuAsUDwCsVJKDdFwXGJJMMeeVwH5VjqH561tb5cQ3s",
  "key38": "2XQZTKEmdpzsoxeUC4uM4diuTdgoSxcrsBbYgDBdPqtRh5RnkcibQQD2mPTQzGqe76PWSF9skv1cGs9YuaV7RpAL",
  "key39": "54B84ZBCiHHWrkaTwLSAVFDAByssMbqNXqZCHzjYkJcpBfmYPsHEmVw8w2aKyPnJU8DtUbBpfSMVVTr74kZKMvjE"
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
