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
    "pG8fsXqz8symgfzFronhsvNuLiozqZMiqXDzJqYNDtAu6qcDcizvKBhmUf9TNJrHeKt4vbgATvyECFiUJUWKBTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53F5Rm8AwhCTWverrJ3VtQrXYKvVv4Hf7kwYjxSAxysGQ9tJsp26pmMTyUwLsDVNjLCCVk7xaXyvnbfCRbPghYdX",
  "key1": "25UfcDF6nvG67tLTA17Ari2s69yETX25aAKm574gFG5Rf2kDgZWupZ9ti6JustS2w7WDgL1Hp8AzxQ5xHztF2NQc",
  "key2": "UsWNMghfk6r3V3cea8JaxSZXrcL6VXXgqpYcw1ZAAm9Va8HP1sNqQrgny6k6EDGQ5fN95FDJ3qbEVFkJEYDud7q",
  "key3": "3AeHYgNAqvnkkJgMTaZG4LTBmS18PXku8hTWZMdxntnG2dsMXFXdNQHWXr8kh54Uf1SQBVKErCrD6crxKqiTL7dP",
  "key4": "4CEukiFMwtmEPRXWybMrPiNyQpe5AAATvrAkEJKMyURRcPAGtDwA7yDZdpCAt12R6AH5xifZbiSamdKRgzK44614",
  "key5": "5UFnjd1wuDs92uWxwkZSWx5rbesdPPXL77vJVWV2tuj8qbpNSwaB9Jbd7datfZusqzDbUzUVF6qY3FFNdsKTWAtn",
  "key6": "5sTKbdw4UikbDKVnmrhvNFbyvQt5ZoeuurfBHEUgcMGukEqfmmkd21Nr4JjwkyWWZWbvGaGQhDSo7iGWYdSYZtdD",
  "key7": "3vgm2tafx8a8BX7dSoiws5d1tGiXf4SBsrYmf99PZzJGHXSKSaTRqpjQzzQtgbK3z5R5CQatH2CwQ2MideVqxUzE",
  "key8": "2sMytcTQJ6n6frJ3ccRiBTBTzMy6LJPv4L66k7KNCxbkNoEC6Lsr8CENDhxNB7Nn7xKoNsGGaGdhkf9FKpjYsahq",
  "key9": "3MhYxjZ3uQrkQ1xQJyA3fGfye5rJDgbQpaSnUrJcmpPQrK2mBbnegi3XTFKDa42otA8FX5JjTngT2bNhk2tgiK5e",
  "key10": "XhuMgFAoazGXP8wCitgGvjf9NmJTRAmKn82DJvD6oyzV967curk3MAVR4JQw4hmKVMoSmEWRAPe7XHnSTre6sJV",
  "key11": "2vdgJcA6PtuTWKzWjNpEXmjdPoknni9zdvoGUsy1t6nNkQwsGJhDMeHerxnZUa8vmhRjLf38db4eodz3KQ6Vh8M",
  "key12": "9TspqizW6sJvAeTWbpZSdpXs9QEKm7YTZmyG6ixofYG5i7zP8a4psUihvU32TdmgncPdgtXfmmcTY3z8CEvr28p",
  "key13": "2gLPuQwqPRcmjNdTxMiECqUsQ2zrq7LLiEuzVLn3Wtm1w7YvteyYvJojx4oAsTHRLgGNVZPM9YefV5wBmn1mWvvj",
  "key14": "26N6P78JtTeqDviK89QSkN7AVGDhL5oCFMwEWB5fZAjbRzdASHfLGu7Ynoi93nHtgGr8yNKq5611jTVpi9nhq5w4",
  "key15": "5usYDZj4VxCq1b8Le4VzQBMuacQAYTHKjQYjCTbDsuYzhX1MQATTh9PgHBsbaaiuxcmjjYkVD9dfV9MF84vqdjck",
  "key16": "4AmoUTNqQ5Xk5PAyMtPWkGErdcQ9LdsxDT85oq31fiedwUGwEYSyBE2worEc3yacfDvTyMGLhGrYH4fMMxdNR55u",
  "key17": "31NoqwFRLN76ztbTBDacJSYxK9sUe3ujf5v8dRp973D4kSoN85gVk126Km1ScYiFB1vNWev21Ray35uqmCrr326i",
  "key18": "8WLemFPRUWRoVQ31RkaXdtH7D2KNTpuhBcZGQQAVUXHymNHqSKMYfz8RUsyU2kLLbQFw7Xj9neeDNai4KQQaHc6",
  "key19": "K4eoxuQ1sAGraz5diZyaSYFAYQaRh2AKU9oFQE3knX1cyUqJiyj4LFbpGdaPoSXqBSf1v7y5bA7HhZYaPsjv6RV",
  "key20": "5GQ1mQLHhZ193nVCRPP2xYm8ZLjNoXY444FUCBWq4vJ7ekJZaMKBH8YAgA8hQfUaFNb8r9DVBq5f5DSXPvyRA63P",
  "key21": "5gKGuvsNawtPQ5PBGkwwhcgUZdros1jhw3uvwWEM23aZKiwsv23df5vifVuWRANiZjFnr86VeFgf8kJyxynDvsoT",
  "key22": "3TU4tEV7TAvYjbYdWnMiCzonZGE4KBNFYRN1cxNkB1BSDWfd2Jj3pDDzkTyYpb6SidjqjNvpwYZcWSZoNTf4Tia3",
  "key23": "4TgMTpY3KseGqRMPAnWzxyACzbppZYPeCPkAxbUByu5dmq5TctT1EF7asVLDfzrxwnzr2XgHbsTaZ86fBvMp3JpM",
  "key24": "3qa1peSiuLcrbSvi4Uz5JSFEk5iRFMKiYtx9fdhJjoXGRkHprFfm7w6wYBRxq1dqPD17ok3YE8e14axvVikhe7L8",
  "key25": "52GMa5VG96gQmneQwxhu1coF5dDnNEK3FKg85uhvrhxTUCX78rQ7NWGjSGZv95TMebFJuGHBD1oDaQNHUgFavcq1"
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
