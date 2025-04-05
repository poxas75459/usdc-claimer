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
    "4L8jqMpgHi2WvFQLQDMhaN81oqxG12VXkS9h5qQSnHUfzXfeuDYWgdxvrVCH24g9WVnTqUWgcTxQfU9dRo952V9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CZvJD4661U4pAeC6NeVfR4xXE2kydvP1RyZ3fFaZ9sdDDxAF5tyoS9ostbGAm8d83E9fHUjUAdie4CugYbNk1oX",
  "key1": "2yXRtmjZsQKvB9AydNzrvizjcuB7RsMPMcShKbswg3NJSgp3ySkvHeoUynutxDkMWH1crj4MWSR5jyruLCbAL6GS",
  "key2": "to7xP8sQggCpUmZDmzkhKQ5Coxb44FqoRiAfbs1q3anML4wy8nYJzfwsMZQcFseu6q2rekkEJeFk1Q3JwUVT2DF",
  "key3": "3Z16uwiZuniRDrhbJKYQNhuXuK7sn88iicdDn5wwj1VxcFtiwEzxrYjMAbQhRu8VnamKSMqnFonzdLHChkRzjYNm",
  "key4": "38hEG3Le2bomenWCWbsyQ2RnXqpwLJxeRgEqF66LKNTKmyNuVdwqhZG8Q6nWYWWgjjrbEL6F7ee1nVHA21QKQcWt",
  "key5": "4DuC76p7KkXPgswgFEExosKWP5Fh4wYoHKeDkMkWfU2WTs8N4eoapxunVqLFDFmESht7mNvciL2JFGubHWpZATGZ",
  "key6": "EvJhYaynPViuU83jpgCobmM4rgA5tpfA8faNEs2ap8kuAMkVQeAHfdhwjuHQiciWnDcmGh6Wyjkzrfm3prWhowt",
  "key7": "3nazvvj53cahso6rxTD1oVWZzffDxr3cxTTkhwq24LzT3MAMtehzr67cyegXmNqHsWwa6Hz57pt3diGxPc4YJM36",
  "key8": "5Rgp6L1ne6nDomUZX6rCV6NEanDeYsWXonTAMUvrp1HaYKadxWobep8UCZtcgp65QU6Dsdi7E1ZsLAPaDBzih75y",
  "key9": "xA5v87uYAYvuxfeMP22RwXtWfjVvis2mJ6epNRvRGdPJDho1e7FLWvENKiE2WPjbyNzAhX3QNUxxmYjP8uAdVC5",
  "key10": "3vvf38Yp5GsEoaURHyiqW7KP4zB6miXezmmps4Wi4zzHFvuVcTFsaGBo6CQjtUtzhpEprHDeppA59DJfxwNCceKo",
  "key11": "27JPk7PKvtKFPJ6imZytEoKq9WsrFTzE5PPz8jhHaqw386iPiueSsDBfqTHE3nn9pizfzBb73C6eKscDbcrumRVr",
  "key12": "5owFYrhLNTN1hFSfCJFFEVta9zEZinZukYooqcb6fe28PWA8eZdQ1jtJB1Fwed8aTsHq2L6jUfjjFf1ZrTUk349z",
  "key13": "5d6nS84Es4CofuHsy4sPpAwKMypBYqoBRBmP5Msq6sZv8ni62bMuNTaarhrnZa6gfqXkyomVsEXaYJMurPkT8vqw",
  "key14": "4dQJKBDTHb1HMu4nibFA1VZLyFeKFxSTAH9f1bHS2GxA8p1wRmiJrGrhAbTpxoKWoT8wMxhjWWRM6BNvG9wx3vNk",
  "key15": "3aJuUYzPBfJYbpXaZNBBoyyS1KqpyrNyY4M4RnyNa9FFiAxPWdmZJwMB3Jy87KvUZS5uJ3Tc1SiuzYoYbuwf3kcj",
  "key16": "rmiTbQW8YXsDawiQ6Wc5NcaD87AmwsKMJTr1faadi27HxT32cRwjkJXe4aSzS4qjx2ntrULzXc62CNNiPKarYSq",
  "key17": "YgCGatQdpAZSJFBKda3cqXYdVsYb3ZLcGoberSzLnzKDW9yAm1RUPCaz1Cp38JQQMvfrhi1ppWYe88HrpST9PFh",
  "key18": "2hLd2GZRgbDHyTAz8k5ASL6JE2GqrBtvHFR75drJcD9XhB3b23Cnwi1SE5xMKDJqPL4P9tZKRys9gZDrNrpyh3ZX",
  "key19": "5smRxbKrekQVANgwVVhkGL1sFsHTimenYr2op5uu4AAedDfXYvLGJfbtPx29EBCDbvKqACXBtvjTbzDgzRzwbbBH",
  "key20": "4wXYVAiJo6gbcr5uypwqgdcEcnfvtEAupaFoDtYcogHfMuuhLNQKMNmMRGfNZaga7q3vGQ75abQJYawFkEBmjuv1",
  "key21": "3LnQS3TGWbvR5pY74F6JmR3JvsoVrtUhKDYhfUoruH45JkS9DDmZf9VrDuhWBqmLJhEfAzDdSJrnE2VGYH73bvMw",
  "key22": "65ohozGCh3dFYPFPEHiVkBsY3CA3DXQp8NEVD2wWDdqwbR37NUE1V9hvd8b4NC5qBHJKoR2u1v8BJeb1GjDEYQpT",
  "key23": "trmL9piAhpqyUf1VV57yARTHdVs1dYXPawKzeqazWuuxzgfX9bqrGuCvQZFYG7g2vZYmcp4RAKaNpFjFjoGubPR",
  "key24": "HTzgEawSvDbRL7XeR5uAvBQQpvCjF8EWhn6uYQiKU3i4cn7Uf3JGKGRRsSoiumM7WNyXtvVE4DxG3vYKn9MjhwA",
  "key25": "5qFrs51gdgfKXDSWXgyHkQngmZU8Bnk8gv8qyhBSq2fttp29ca5qbNGRqjXi3QstC1NM9ekWwQdfGVJKYztf1q5B",
  "key26": "5PCQDHJ222c2NipbZARdnq7coNeatDABtmTsYo7gRuGAoqKMmAGTfYD4xBEpLvnS7cxrfgAGofkAxawAWtpPvn9",
  "key27": "RaHgcPj5G48JAjxai4MYtg1vyUGgysjhakV42tKuuDwFiGosgKQcBFYwEb59to7NTxkbcUCseshQ4UsuQHhMbRB",
  "key28": "5qbDWhpXv2dxEm2KfzDxj7o3hSpkhaDZQchzARrRD8TiDjEaKsgNtpWyXJzLvGrcvjDU3jjSmy7k8R7HnZJWXuAq",
  "key29": "3gX17LXXdxkTsSe2XWSfrGmxtpQu9ETY6PYEFDncjQqRu7heYpD64ehtqhEtfakxr3raKRjCdFyT5hd1C2fpQx83",
  "key30": "4mdUdwUH6NSNrrEnKWFLZN79MwuDVYjYWnBEW6KTeXLsFHFiFTognuosDMMzQK7LVXA5gB4KuGQ6UzDNKnW7Pgbe",
  "key31": "4MrYpNVXb6nk3MEPxVRTWmxkWmGogoegvt9MEjgkYpxfpiP9wwN7B1KDb9e8aWJqKTuDmVebVxdSJPZaoATM6U6G",
  "key32": "2fqkEgbCHgzrFxDPg2dPZpXu8WT2fSmz9bS1vupw3gQmSRhtcWERUCRm6D8usEKfcrKE9wWnWTVJAia4zxNZj6jN",
  "key33": "3dAYzx1Fr49r8bKYKY6Bbrsi1V3gQ7XjmKLJfG1DBWaBzhGW2owN9HBV2ewRKmXo6aFCNwxj9UjyvrADi9Ggib8H",
  "key34": "de4hUcMH4nYAUHqK4DCZZFuKpDiTdkiXTFMcxkNEokkA89HX746m3ERx2dajtM1rMZ8Vegvx487SJWsepiENeJz",
  "key35": "fFVhmx5ThjoHZ3MaSuFeFb3u8Z4TXxqCwdqLc4ybfi4tc5c24Q1aibNE1chniQ7S5NfvNMRfu97vWvv82GZUtSp",
  "key36": "5CxYVxvri2TTNWouyWFrJbfNwsUhY8VGafC2ytTNF3GWsVH7zKVqeLrjvYwfJKu3yLhi1WYH9Qgij9ixvuHhUFB5",
  "key37": "3K1TmzLFipumpkcpNaZVhd3rBuSaMxhUxj92JCMjXRRbwwFSHEmKHXaW65mp54cVaXJYwD4o3NXzD7qs3ASDLgaN",
  "key38": "45A8cthqkJH5yunJdrkBJXGwA2Dj4JWC31MQtNTS8MwuKpygBqjqPi8XMcxK9bEJsmR4fpKBk8ZN4cxfU1sXSKwn",
  "key39": "gePqxPogUUh5FjFNBniny43c6HsM1ddoqYEzo4WHhDMLSS1sditmsuVcy5zY8sHEpdiFZSqRfWnccENrowbji5o",
  "key40": "3YkH9jb6v6F8DiEgPoG35m1qVcGGrboAWBSeX8hKDnXPbKce9XeHyBnViUFKqRCGQhNTviE5G1QbXmc5oEnUnyVh",
  "key41": "4yooskcngvm9wZtexsc2QV8u1nWatdMguj25UWGkAin5bAyy9pzyamoFTKdwf1CpgVWTuDnuaEduBeGMeTJeKVqM"
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
