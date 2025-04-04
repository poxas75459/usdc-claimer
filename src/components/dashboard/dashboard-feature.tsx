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
    "37icZHkga5fmpfEP2dYzqvutgrmVWyoWpmgWNjZ7jjwX27HiY4UTwmWNCSU2EDLqpZCTikarBEckBYp4GKxYpNiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZbgZUA1b7BpYCq4ypMRQ9xN5xEuQUeDLTvgRLT4SeKP4XySZt7JtTQEqpRGBDjoTR1ZyLU8R5Z89a7N7J4YKDCS",
  "key1": "VquUvBUxWgFnMestNh2Y5KPSZTnkkF14itSLGxAsjmiVKauVd6PdGJUhNJAW1rU8rb7o7m14nGgq5kNDotUwbum",
  "key2": "3UStLXyqZever9qTmiLbq4JeJ4AKeYxa28BEet9x7jpN1evrDmXqkQYKxTtABoaW1jRknWCNX7ij2n1TS5RzLTiu",
  "key3": "3YhBmBaSeyuoeWD6cHsK3Hbz36aYREKto9drwwYou6sqUTwLoF72RtykGJAehbR6AgxTtAW2guW5jrd9QY7gJGjQ",
  "key4": "66neNJkK999auaivnHqBd1FFYhSY2xnMPBwz5LUCn5HdrQkgfGrz9ziWABMLrx5VGDtmMtczoe9kN1AmMtz72fz8",
  "key5": "2pw2rcvj9yYnt5R1ChefvwT1BRfz22XBvRcwzyHuUJwaCgz9fDjvnqAEWSzsy4pfjDZuyGeArR5EzwTZm2kvdoqm",
  "key6": "3DbGj2FXDv2Yaxihv6Vxy2dkgeYJYNLPthRdhYeMoBi9yDP7mnQiZ5AXCzQ1CJpcpCP5B9Y4kgKoYUb4XX7oWyDj",
  "key7": "wnkZxfecdoeKTirMPsA1jRZfunUTBp33rGMpUF4zczBYjZxn68HLVsG2sPeHy17zhjUPmTmGM1SdQFvqpq3hNLp",
  "key8": "2v6oZjcHxdEpi8f4bBbipgA52w8MYFsSP4ZkTeArrXfo4p6oHp5UfPwoGLvxgAvoM7W3MFsCfi5xoAfuCS84SuLa",
  "key9": "3qwBEFcdNi9NfY57kWoKkyDXLrywgUUJgYhXjY8ZaDQFRAHAvugt8JRadBH3WB8NWM5pi1bcvZrV1Rmt5HazBwvJ",
  "key10": "5zNV4M5QPjHBiQRNMyk1Ffx2yzBdquhHGu7C3Q6CJcYE2AEv6cvNByTZFLqDmHhPuEsWm5FJXpZgznWejpZv5tUi",
  "key11": "JrXvPh2c5zrmiiXyj88fm39mbbZYM8mtftT3CQYhQsBQwSJTHuKphBfRSB3TDYxfq318VrgpcZS5j85MsSK5UVL",
  "key12": "4Cckd6YT1GJsjPSa1XuHyfEpqLcZKFU9p6KXj9j28nEJtgR54w4XfD2dSGaNkPnfZ3XPS9bpLfG32v4Zg3u4F2se",
  "key13": "GrqNpeZHUEhWbtSfr51VPxUqfz6vLEAeefa9ZGvu29cz4cRj9KscEakPK6vnCpaujapx6Nc4TeazZ7nnkgirv61",
  "key14": "4Mp5NmZht7GGHUsLYJz4U7uvHatmjcak1UQzzRYYQ9MnPCtDGgdGpkqbXqBKTwy4HAtz6J5VWXH9hd32TfFNxUVy",
  "key15": "2EcfWwN3eWuEvgP5vFrHz4DjiTUpiuamiZcFa1Zjb91rFuPMRfmssaS8RSa97C87kddbiquCEM85ZoPdCc9Hk1E4",
  "key16": "3u2x1MVe8QbMDvySeAUy7s5mqHooCgMavADzUQVDUkYtumSCiDDS3iVJnA4RGCNhN4aavboLo8VBjnQNM91QUaut",
  "key17": "2623bQkDxauBNNa5UVp3YfNrfbPGyHPGx5Z2DRUxRk6xmRACQ8dLCNqFRPptM6r4gSafzsozGRZ6LgtFaakn5kH8",
  "key18": "4YSMHde6TutzEcwc42L6GG32caMBtaKX6WGwQ2uYHXDfMzLjy2dD6uAXtini4tCMQkcFedyjhahNDWSq8ovNwY7v",
  "key19": "4ezJRBKhGeGCmokMrvnA1ecWXBHaisPEPGKAYKm4FRnn37ewiAsqX6RsvBbCNGGTF2HSUxeYDCYpaLM5yGrLPooH",
  "key20": "2zAdw3UZ6d7u2QvkbamXBXw8Rg2ZL55xncfkPUPgjNM7gHQ3Q78FTWL9K87Gireh9NWezbAszcU4ntAx5UEqE3vu",
  "key21": "3EjYeVGnaWcYyMDA783phxiuqsfEM97ExN8e4B7Hcq1mMZk9ewo53GdPxUSXDhGoKFLeQQsoHJhN1fJBSLnoVot8",
  "key22": "4yFJky59KwzqWvKAa12BoRUjW9GVP2v1CLdxGnwi7R3rk8U12yVnAJBSiiZ8GfaeHT5t3PDCq5VdvS7oSqwKzDRj",
  "key23": "24AKbdQ1xPAB8kNHGmhZrbMw5LFwaqW5PPFfwa7NJHEBx8j4dUAepCLM4xBdNFtAJ1PkJ27DzWepGKhr1oyC48ES",
  "key24": "4RggBNL7S6kYr9YcQDx633RH9JmMLDnrMBUNkBJooEj9n1uJ49KYEmhYN9yYBwVwjHoh4aR1LWWSSMnwoWbT6pBM",
  "key25": "4stYCMbYq4bXN4P3SevA6UHeFgan3tSQmdQEVyYvTpzFGBVhfSQydTHPEnDqriDEg6FwUL4oaDjMVhUEvQok2Uzd",
  "key26": "5Q49LtnihYdKNL2SaypkLSWn2mKmsJhETg3ucQT8J76cp2bLk7i8zyRHKH35zt23z14mRVS5J7wzHFPXGXuej7a4",
  "key27": "3Sx2n8eG77fWKCiTFm4GicCNXAW56qWeE71gQDDXLaNXGqoxFt197uktJAvgZeJ8Nz2Cpu5wWYD79sMwajFDsxiD",
  "key28": "2sHEodjrcLNSUNBrzx7oQiipLd3hsdsmTSe9j2U8K9CKyituVt84kASoNmHs3Jsx77u2nAHVcNCKihojtg937kHB",
  "key29": "2Moiuauf8TpeH4bmPK35A4r6q24moC7Uvfbq74UenXnka21GvGCti8SU7vUDdcPVhJAv82L4RDsbkVhLKi29x518",
  "key30": "4LHixKuZfEDLmCUU9TxgW3gMbNnVJGRMd5aaU7SgbZTqAMFVuX83Lm2GwfsJqV6Ve8pirYLhm4yUKgBQ7fm3GJVX",
  "key31": "YGb5qTvZPZjSY49dsK5VdmHqKohnunzpY7HZYexVavtkSm8FKbGmwvtKW9TegcjeLDFpZ87JrvpiMrJfaiCSLuE",
  "key32": "2X9HLfo1GAoJwaxA2EAEcnXHnYxpsRN363CenMmzd48PDURgJc66msQx3okz6EA6R4nWyH2mRbq688DaVvVe7wkB",
  "key33": "4TZccPzXUAv7yw7NWkZh781oMZiTZSUbLyYgM3qFa2YCDPKbJrpUGuCpN3DMwRf8fYWQqcrwSrJLAAiYx7FrzHfZ",
  "key34": "h6SUKQk3TMvprGLuKx8zdap3PHzfKmbdjQmR7CSGJeQCbWypKtB7HUozw5KZAveoFprVybtNga1HYTVpB5Pchcx",
  "key35": "2BMeteUqyQ3h2BJVqbsiaoVYbpdfhndzD2K9UV9ktnCdHUxT4crcfBjrd84qweffLA6u31pFAwfeHEZmGFkkGNFN",
  "key36": "4dTarQdzm9NcrGK8TFQ9JE58Y8XzAH9fcTXANLesG6oN2VHHnqY8SQasnzoS5QdFiFC9k2MEEndY5HpMSoAPc8Sy",
  "key37": "5eQZgZpnUmDVABsTm6Zcnk8V4yHCnH2B4XQD5oE6NZvMxHjC2fo2tmqARmpieh94fQMXLofhw5dHWSPzZz4bprMW",
  "key38": "5XBJwxekbojfJw5y9romLDCTM4rYhcUZ1pXhU3fQT8yPHGmPk2Lv8UUruXSXc3nARHqTynk3tHCCcZR9kbtXFgyB",
  "key39": "3iYrhh2SHPnq86muNoCxzS5RK2xVJgxnbFktbXjXy9SDkiD26DCap4WBabMmUtKKrqtctUs4fa9L16ZwsGmVrUP4",
  "key40": "4paUAVonphrWfakpVm3a1AFkGKoiLjAb2MwbSox6zbWf9Ky8WXVCd2xXtSYCxggGsoXypssbY8zj9ZGjzpoV2xtX"
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
