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
    "4WRGwCzdA9wXjygYHPRikxrfChZ1ps8H6J3g1v3HkdL3C8qefheoe9uHT1LxAS4bouSb35QyqTJ92AaarSra3gEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oW98FwBjuwj88NSGsUb9W8uL6y7HWTFpkev6ZeWAC9T1G3ZHeP1Xo17YGtEtPAHiGCUuL3W1FVa9S4YNJP9bc9j",
  "key1": "5m3KCZRPisaBvSgeSS3DKJNytusnyXC3wG3Bsc18pAwriPZi8ARD4BRu3UeEAVGXks6ST1fJNdqzknPgSHkXZQwE",
  "key2": "4BQJaiQe6sq8KeNJWKcy4jwJsc4sfwEsMz2PxpRpsFhAjBtRBnqH3TMnnaznqmCWbKxRgfFUXmLfoQ5HJb5ZEaUN",
  "key3": "4X8DhB63HwdJ9WqH2Kxy7GGWB654A3VVwbDu1Xa35BtK33uJBvKY42wCq2yDbDbxUgJDs1cL4yvqAycMcD4GETd9",
  "key4": "339ihtXhi8w5uokThQfuzpunQaoGWb6AHmf7YMiRHLpKeh4uzRLymQa7pYcGtVG9U5WeWbmz25Ut14sXqGDjvdnU",
  "key5": "5kxoHiJb9T2GxHHDyifkB6AxYTB3QJRDgzHeGDdYVKNGDj3E5suUVfwoRpCCHw8TTmBvtPcQ9R1bRKaJks272SKy",
  "key6": "3Hr9hVm4BARRc1jTVXaXb9hucMVEpsapNkqcrmLJnT8bZAYvvyWcrgibYQXo9VXGhSnWAViq7QJerUkHiF3PAQnU",
  "key7": "5AVy3v1X27JD4ynqgSTTxd1txcbCaRtCVdM55k1G7Y5MrkySgCRNJoNismQmtSgZaoCQWWdsyBwvjHkDLrzNiUBk",
  "key8": "5AwL9RC6zMQkYKCVRCwsprpvXvRTimh6udha9R7bqNgcJy2YFGpJpdkgeXjQXmd7JHVEsPjSXvsspSjghAzZ4qsQ",
  "key9": "jakyyPSzcomGKcuzmnghKYUBhBykJgt6gq9q3jzS7pJXcb7Z67WDZEoYv9gbDbBuD737MeRET35iZxXHeUcDqm9",
  "key10": "2BpBuVL6FJcR7wjn9v1v8Wy4ZyfV37cx9cdQL4Lm9BmV5Eu2BCtW2y9CKvf2nFyva9wmBSrDMcM6j2Z8MA9Yc1v4",
  "key11": "5SVpomREoUCN47EMjaM8AKY52zfaAPMJ51dRwQzADXay2FC8jXtTSxSPLHZEF3DafzmcD81NEGi6q77Jffdd4bzc",
  "key12": "5VXcHjFUayE7PTYngJWaqtAdTtf2MTCsLfRudzKJdjkqVPpmVteibVBSQXJYt7muTyKXVEeHKuu7DrJ1RtsS8qNc",
  "key13": "4ocfhr55g8SRdhL57xu3b5y9f5RPGuitumwUKcjjE1R3tLy3LcQTu1Bc722GAynJje8GApo6HHp84x4eY4w6N4kX",
  "key14": "28bh92PSY5NcRjyJoSoBkVXPUvz8gbUrKfhY9nagpsmPPyXzNkpeaH6t1snsqNJSP5bN15Ns5ZctDhFpVJXRyktE",
  "key15": "AbAuJ1eBZqE6TwaUiKLZqp7YBpFeH2j6GWWThj42j2NG9xurGDsm1HiALryrBANHNKXn4qPU91yXeDzxuXNXAAA",
  "key16": "gZCzQ1N3LZVzvo3ohxurF1B8GxUaSQuqPg2bQnYURPDmu3xCGPhqohKRpA5mQoJ9rsYyLwp3ab2P5etWmoRyDqG",
  "key17": "3HySKMp9jYK9LDwh1743JhxHTSuiW3JjBgdxzkurPCCeN3BXsErrqALhwt6M9YKw1ph69m2S6khReheUPANpM6vo",
  "key18": "26hD5StxFMNkFeVCz1JqsGxbwxS2kUSMyLYgQhUKq4etVC6Ce33XRTG6binTcKNgvSSrbfbXF2ff8Fjiu4cTdz1o",
  "key19": "uHxucXFqASvGL5tAobDMDaqzAsmKBP1mLrdtqomJ6NQzvLuywtqekLwwmeV8h4MxMPbobLHPqj5Mn4NHRqsjCRN",
  "key20": "4jjdPbDJ5ZCNpZoopbSkMA2VYS9rthwDVbGwQ1y9P85t1TxatLGyVmVZFyc92RTND8CWDTJSdBgAcY6EG1C7FpBm",
  "key21": "358n1FQx6Qmc6Z194QeRU3dnvUjkARbZcUkQK9WTDniRA7k5JXa2QBVZ6Zdd1bmPV2NRnimak7rzDBNriSAgmH9t",
  "key22": "3TFgSp3oVc2628ZjFR8hgTaMMvaZRZmmfCipJYsfbUXtY7kunmyY2rQDnLdoFoE736QEWNCY8fpdyyJiHFm1XHUs",
  "key23": "2cR3RmzxwjCZ9SdUefZXxYDH6aviSQqT1y2auDbaDBmaoJQEAmbFJnbi6iMjDyVdK3e9m5w4fGNx3oj1nwSdCoVT",
  "key24": "127jmZCfWyNyFyVpBvima1bcYUBHqMd7MwYH2UM8G7gWqZLky9NpMg1dvy6q8DtTpepad4MDmghNZpkhNkK3KXXS",
  "key25": "2XF7ERTB9m6oYNHTdr3NGVVtd2VnyZsEkeFknbsZX5tGAsnLPMVLgT8qdqA45PjGEC5GMfnWfPokzjQLmBLrTVTQ",
  "key26": "1FCLi9yWWen8LhtwXdd2YZYQNFoGW7X1dhaujSi3i9eUfd83c4zQZDjKmRatsNzn3VSQgjbXegyb3Fc61wydbQA",
  "key27": "2AHm24VkrxHnh71eonHTv3LU19AJj11tezrpiSDVybe8YMUFyhXwbUyRzj3PfzYaj6tVmn9nHxiFyCZfUYmpws7a",
  "key28": "2rnGdGcDq3T4R4wSWMxFmATaZw3Krcju3qGP3riimh9sZKay3aEBYTgWhc4nPaT2he9P8oJkuSfYJcVUFKyXQaaM",
  "key29": "4buwZPa5WubJHktNa8SrnvtB8ArussvEyQppaZhvYzPqW3KkD1pWCUSAZFpnYngFdDHT4MCBJHbgEXU7jg2GUKor",
  "key30": "5nKepqC9wbNVncX1pgc7JiiLeWkQqapZ2x14ygCRGMuGafi1XpW4HzzYjUfd8Knzhz1gJLR14JiTGd5Yu1LjywKD",
  "key31": "549d3o41PtqcApA9jxYJHNrkcCgK71h48JpLVJTkfnrHbs6x52cxq3z4N7fF2UEpjY7Ps6w8syxkEfsVkamSgsfp",
  "key32": "wtkDL4dYvgS4b7pRAie7nC4XbaM8pHqGYeniPFSmyQvXDkUh49S4jVmhBxVaJQZWhRt2GkeFhFgx9gM65bsNXTv",
  "key33": "5ftJRnf21H7wbJityabwwJABxvvvME7iNq7BcUmXeyEap345neVGurgk1KhbPWuzk2kpWA3uAopit8u8rAGzPJb3",
  "key34": "Mx8Kg56J3Pw8GHkBynNF3te2dpjx8MaXiyKis893WEnJW67uk8EqtbSEnGpcRDeZreLahYbeEweTGCWaDErz6zu",
  "key35": "DqKhmP6DooTc8qAaQ6pJqSwFEb61KLf6qw2MqqcgsUEm7dZKXd8dKzXUAV8oMYfuG8HwA1xksL6NyrzKaGZLeMt",
  "key36": "2seMs8qo8PmHD8MfXSprQ83uB1NaAJ2LXTioPF8LqcdNc2GdKVcxVUSkbwtSRi1jifxcwRu1tkRCSy9JRkGPFrE9",
  "key37": "HEihq3yS91gbPFnbGMZ2JwZx7GFc6y2munNXyUN2t78x2LQQi1ZL95yRvB8FMpJXvKMqg57RWmkJT4RKccFEn8B",
  "key38": "2DpvKjLa9zVNPYxnyksQJhXLkSumTpuPVT8tysa1uZPMTJxmMr1qfEYWUKfvvVRwALGMweHFokmBvq5JKkiovtCc",
  "key39": "3rM8QAs4safPEjdxhnHgKxmkyoP6YvcW7pnvFJXQLt3g3z4XioJFNvhcVyPdbDWfynJjJG8qpM8J6zojYkMB1sCX"
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
