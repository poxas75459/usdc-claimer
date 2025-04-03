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
    "4nwxSfos3RBH9mNd2F4mwzwDJNCPyHKhac5qch1Noxts5g1REy6bwud4SZXm893FWGN3UYwtLAbLsyCykp5WrmJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i8ZyWZX2uiYGZxe8zo7vC1jpRZhuqys4rW8wcahuucuxwzA9b3qhtfESiQsu8RSyqs1U2rPeVrGKVJRQZiSSgP8",
  "key1": "3UiYugUtcesCLFW7BzEgeTgBKcCvWEcw28Sh7gPYUmDZjoovdUjzJ5Ma9mfZGkozqThBHWS8jHj2WkJP3xbQWpta",
  "key2": "ixg5GKMkfatjdbF8x8hPLRqjC3ewEFevXDdMhW9a9e56o1ZGaxT7bXXsZbRitNxEGrfrjZWhJu8TnKF8htzPM5Q",
  "key3": "3fj342SbCCrysVvoWZjo6o4csCFwSdU2bPrgi9AovMaJQUK4bWcQqe3CLeS6QCQB6rb57V3kx7jrco95jEc25ety",
  "key4": "EbzqbD6qEP3f6J8sAQ6ZoT7TLCzCwi5G6popN4cyJxmqZ1r7nBNR6wa44ia5g2xJ3YZHrJeTKxEmQh3yzwEJffd",
  "key5": "nTUe76WrpyumEggvmetsBehXtMxouVFEZTSY9vrHtZoSZcvJFCbjRmmZmCQwMw2dxG8pz5Bbu4MQLHUaCSfBZBU",
  "key6": "4RtqYadUzVJ2KYQ37TCuSDC6oaqh8sYfraG5rZJ8n2fRgEawwjHN3Tk1K1zPp5VAJDUrVw4oimsS4SLzvAQdQbG2",
  "key7": "3KUJWNPcjpbj1T1t4Anyeu1qonEhWioS5kuoxLPCTFEwn25tYHaj6xyQ6tS2xDtNboULKVR28tDCF1UaMZs1jwA6",
  "key8": "5fZzhXdx6j1yxbm16D9ifthzQuwY724utS4m553BtmrBeKoWXcRTHhqfprsu7V6JuRxUYGuwszMgh5F8iDEgt7MJ",
  "key9": "42tZS2uUyw3CPLUpAneCPVEr67pmh2Nh3YXqNU2x5NnWP1mVQ43Skiy99Yyqb27KkkSAoeQNBEkXZHJ2xgfi8aXg",
  "key10": "5d9XZAYs9YPFMsk5Gms2sPPSrrm4d35MEezNMyexckpzfAhh7E7LQ1AbTb3oxzdSzs7iz2SzrZeL9PKN9xmt56g",
  "key11": "2J19umExdvLXfnArW8ZhTFjPX5K61nPsUYKQ5YdQbV7an1coiyBm1hstiKcGhe54VHLhUf8FwrYRfvp3M2nvRj3Y",
  "key12": "2iWHGFucvCcmFMLHUQZUsBopHpyH8WwTF97UouBGHKsN5TSiE3NkUcssGcbDkGNjcm9xvpcVC55VcRuVU7Mv4zVN",
  "key13": "2WoxVXLfjQmSiYpHtMskYPrFXKbTG5x2YDcK5jGpHVr9P7VwgdyUBG2ehQWajy8A1JZirsXbgW1P795umy5NQyAa",
  "key14": "5r98yMnRiCYVw8ut5hjBhHcQje89kiRqbUUPLX8H4akKniYCtar5d9XLby9fGNcLCcYijoUp9XyhqJnKJ2dEYtid",
  "key15": "764SeYQvSWewC8qBr5GbPWX699ERv1aY8DrRUQSzp6H5ff8DFc4eBWwfPaBD5kB9BrqEeJj3ZErxxu61x8d6ZzB",
  "key16": "UG37x2Tw2hEGEMKPTHhMi7imvJb69wwHKRbD292a7HEGBvs1D5zvrNiaJoBnGbw4FKQMpxSZRHjay1pNvBn7gb9",
  "key17": "5Jp57mzb1x7g9XRDNYUcefW2EepBqXpfN1p6HD97HiEawcBBT94qyvWXQA5cC3NZAmfcagd8M2KSbYxFocxgN4Ba",
  "key18": "5TEDGW691cUDj1veWbxePfny6ATDVjwCgMzTr8isZWgNdDJDL6HBTvVosjufzFM6QBCRhaPAMTJRuqvvsGP9seSy",
  "key19": "35abHayse81wsSwXPTUYzdF2NfcFBKxBhqL8MwPt2GrnFM3NfYP1eKrJ5Wq45NLWME97b7Jx3fzWVXPnyqG2axV6",
  "key20": "2h2SJVRAbF79LkaxWQ3mf5EtUpmFoDLHLnavkjTAqNDHiw5ezqdFT15zQZpusjttyHgNKd1CwSdgfoey3pgQ6XVF",
  "key21": "SXzM4AySCc6DQGB2XJHBLT9qXGBgH1nwbEbyRzNRK6vnEWidY8aCCBHmzP6wMmCC76opjQhkEc1g1Qn7kUMsuWn",
  "key22": "64XAjSdqipZ9QSNF4wKX9vo3S6RzdeqsoHUV5wqT1rfnk1sn5ReqXT2HdwfzJb9LMUSF8yQM6CZx4qiYv4QjgSCX",
  "key23": "5stnrDjGtckiyGUzej9MxwkkFzXw17xTBky9yom6XYigFEmJkyMQ7Sj3PhHULd5VZafxvfgdviKHLDaBbrPh23SH",
  "key24": "2DkQUiMs6cQZ4tHZ3jwsTxF4scf4KktqN8HucPG8QLJHMhcCgk7BdFY8gRCCq3eeTMXB2GnQGPBzKoR4SXhcgRxv",
  "key25": "y5BXN9nhDaiaBTvU6HJG3x6Cje8G91pPLSXZUmCAVfbpiTh2oMhsh5jGTMnVNpfx6wfUd4AcWotEHJkBsQmnv8E"
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
