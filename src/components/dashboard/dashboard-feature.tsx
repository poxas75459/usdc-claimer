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
    "4qRc3vDshFiUF12qXRi22z4dLaeSpFYDqve1XWF6MxvC4PhWAVkdfif3wLqwvu5fBZFzPiE6qThLhT96WB7x5uU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZzWzPEPU7xCnceRqo2JiJMnH9fXDy58X7B3BRh6Svcye8EaAuaxPa5erju7dy4imkrYiSi9jWXFi7Af91jmakTa",
  "key1": "5rwqyFYuFUvRRWVkqbrMiQMZ1u8ZCgdzWY7p6sdRqxD11TDtAWegwGZezA5GRF1dLWvJYyHvEFZVEa76xmbEfPJR",
  "key2": "3SmHJiHRtQ4ZxhPjoZeZpAi9nCJkq8xNCNSgTPU4dQ8RNcrWn8i1qdxYXudUrEr49ebjLwvzq97MtvBkPiemvCNN",
  "key3": "2MjjXB7cjoqZqoa3noxHzoL8Q3fniJ1e2igoJXtaSUm6CU7RzfiQKaU66rF1TG6UuQtETVKXQGxHEjxDzSWvr6kD",
  "key4": "5oE8sBGJa2E2ucSn5Y2qK3vqjQDk2AVzc8hZWqQfYbeazKsXsbP1kcLWkvQbsj7rvu5n7zwYxuAJ8Sjss2YbUdoV",
  "key5": "2ssYdyaUisE9FPtPJzb9XtsbC5zmmn6k43g5RXJq9ZAicM2YdR9nUmygSuSkPmPob6SDAhYjEWSZuvPbjrMMU1HN",
  "key6": "NnkLwKe5KVsYaXaZroV7WA7SdccWT1CG25sTfLnxEmckRBWfduDVSSDFBbAyrTcNmnZZx14FVawbVAy5KwwCDk6",
  "key7": "33q7o6u2g2spLVkoZdmKRuBmWCxv7a5nuiuLNm2NwXmHdMwEGqJd42ccDJY7UhxNz2sHA9FBQs9d3CEtQQ9YY1Uj",
  "key8": "wKeyUgPthuAHENDnCyrPj1Wf3U1atyJMwudQmKyuvmvd55t2nXZaePd9UzJ8AeMCGbAa683ZxZ2KckLrjN4gpUV",
  "key9": "4jkCpuiqm6sitja8MoqMzyCTTwzUeGFBb8WuDY2Gg4nBXHa3ACrKErwLg6Uybt5ZRxbQHXwJH7qF8KoD1RitiijK",
  "key10": "5C9QoxTevkYyFWZf79kX9CfvPmvLh4mbJUuUHzTHUWEqAiKyvCkK3H7eXXnrBtHagvzqJ8h9i9KcAx6cvfknywVm",
  "key11": "onj6yAkrrGVfk4b2JFfphXfM34uWxMP6ywPZUSjhSe13AVp5cuDTcL4oFJ1H1Mc35KAi45qmcX8Rp6u72GvXdC5",
  "key12": "3GJJWFLgtQVcRUWNs4yrFKvfDs4ixfbs1gtSiQsdJBP5dQhPLirp9Pz1zpbAAtZxJcQvPiRtktJN1jJb77mRMopc",
  "key13": "wc9oXJyxuPCZeQnYaQEUaQMsgQL5oBNCG4z7gcPq3iP1VyES34CPELCsWJTVRGAFJVsgQCcKcAy4EQUKXjpUczz",
  "key14": "42cBuf1RAzukyJr6v47X856uYDkGLRRny4upS2aWB7kkhMG1M1tMtU3vvKTn76kSfbaztFsS8nFzou6wTZ7Bm1EA",
  "key15": "3Yov4BD1Mv8duJ6crzQH38afuNu8mMWMDGV2egXhUMYuo9QMjXjMvPzmR6xSx8gYFDU1uNkSvZ2saswYYo2H5ruX",
  "key16": "234SZJnoCsFnJXFgbZtEdAi2mFFm1HDtFFeFoBF5bdhLvWuYZPBxCBiA28LEQvF3nc9Cf5QJ3xsFd2k7a7RhGg7n",
  "key17": "5knbU3TFawwTjzYgMnaB7fKGbDdmsmxQTc5ozpoeCPuDV1d8xqidpjBWbbh4cPQyAPhVVorLHkDHgiEMaajRevtp",
  "key18": "yG8GqqhSXRLMW4emUFsB4iWCdebjcpaz3ezZFeyykaARToLUupcYRU48H5m94BgSKLPHeW6MT1oH7pzifCxtzTe",
  "key19": "3TVL4jvbR7c9vbuShLFNYffrtkJ7znXuHZKxvGqzRKLbzW87nEijHYoiSygTbonHaZJF3D7EZpfFffRfeLWqQQUD",
  "key20": "4iatfShkNjwSmAcxaBMafQeDSwduxLhf6Qqjt3QPAjPBQDGQKs9Yup8QD9WWABS8or2FhtP2y72VuWcXVQ2MVRQU",
  "key21": "43bE8r9edADy5s3hhjfXGgqXvYbZ2QEXNv45cgPd3ARX6zDDgYqaCDgoqMVAUuf5GejKAS7ykmMN5CRjnc98YT9H",
  "key22": "36PbYrmfJUK7WmneX5YaKdRjxsfAn5EXJd9X4MKoZPkM4qdKVj8BnfzzvJ7iK16CJt7kwTFQB7dUvJVWFF7rFWky",
  "key23": "4X64DZQKbgkfWN1b3CmQSBWNPf5SfRTaxTMoVYrXQDvwYwyktNWMvizQhjmAK4DiUUqyXweL5fbpdeFTu64iLRZz",
  "key24": "5tgsfkUmf7v3LsjegGcFbFRGLnswvUBq8DoZwanVf16i7n3Dcp74afLHVp1WAdnH9d1nkhoNCL6xy63usuGNXpMo",
  "key25": "s1qvui7FT5xEwgJymU9vE84bW8Fbd9iJavEEj86hdwqpAEurZQPx6gebrVzEjWz294tuW5pknsXMWUePHTGkivr",
  "key26": "2XoQJnorbAQCLC5EEyCv53GqbhwG2CYLJRrS7ttBgCn5BV7E1WdiPUGp4rdGK9mLscZCvwyGU1LWa4KSQkM52iMk",
  "key27": "4GspLfZaqi5s6GRT3jYUJPFs4R4ee7GVBpf5xcFvQrckCjeHcR44YavEr1pEkqddkCmgAHnCwBWn4UmdyNgkMPV7",
  "key28": "47onKyEg3LnsGhtoKLnprEPzc6krusXkGwm86ZByMBmmjKvzoYLbJri72RG2yfZNmEZKmoRn7nEriioCnQHV7Kvw",
  "key29": "4c1YrFajTjP4A2H3zVzwgZPHU9yWNkVmCxuLZT56chyGaPTpnRoLu8L1GmHRJh7wooCZnu4fKrEgCCiTtBPRsQjX",
  "key30": "5AysWsAoMuW2Atinoq5cYx44yRTfMHHRHHx5idZXE5Eo1gzfqKbMVwXGdxRVGXGyHpnLP5vedPKXo3TGTqcf5dhU",
  "key31": "3FKZYEMgAtSibFw3HNXuUL1nrMgobJj13UiK6gEbmJqCjSFJJCtwALBGRcxznb6cLPiXP1iXU6YY8gBZFbZkB4bn",
  "key32": "5VJRwe2W4u3KgJE2AHu2pjWPLR3fBki9SJ3pCukUev63crm9Lb2y91wGX3MYV6jQxwJvS9Pxs59LdygBUm7RWbhd"
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
