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
    "2prBxFjc82e7obLTh5CojiKMGPdFjq3C1WXsKHf776BS4PyyjjCvCB9QUGhLhmVPCgHvQBDEci68Jw6aRTCZwzn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pgwb16j4M9xLntUuUBbEPHytDjFfAvDdHe62rxsJMnHoXPzEDhF41BuvmpHChZh98bQNPze9G2YRqUnZ37Vii7f",
  "key1": "4cHzs3XhCoKr4zdBekdhcaiaoRfUwtRnvRmkFFFeJFTweakL1Nhb5tybuS8auZgWMvwh429mcAr3vbA1HfLZWqoy",
  "key2": "2kbZHxnNSgyyJgtAsnLvVC49zVJz75AoyicwXaABtmZtg3FuqmBqCSTcPdWn57m1UECFBZ4FpZyFj7ki7HNuwfqn",
  "key3": "5w8kcD14VZ6YPZcqoBh4AFc1jdNd5CUi6CXt4eJhuQqosnyNhGQLS4TGK8ktcoEkhq6dcLn3ZXC38eRDZFFtGTvY",
  "key4": "2ov9BgnC9WqsaejctS9GNMud8DnFTfkcFRbFHkpXKUrW8wU2bva9JUqcvmu1ZX4pqNk5RjycV2TtrHi3msh5hVfZ",
  "key5": "FeJ9ri5FDyFdW2xh9cm38QKPLtCh6m2QYexfG1ShkzrcNJu3dMZBZ1xwzFeUYSxjSDheLRRXhCTxhv93USqjuTE",
  "key6": "36xZUCijWx6Nmc8oGBrGPmGwiBoug7rzfovPkPXRdVJYhvuFcVAp169RS3jR5rHRKdQhwsHiejG12BMQJ2fWPcFY",
  "key7": "5pH28KKhNqjFsjAvhq7J9F4YJYAYnjBygCmQsMckzbDXwhrH67koUmaFoCDCsEsrhJDh1WHraRiesE3MZoFZZHSi",
  "key8": "3W7K8kPmHotZRMWTvobaigxCypzFjHTcf1y2uFZ7g2mqCjfyFzgriTyxRBKxMaNBNkHPFzW999KUuUeyhBzZT8JT",
  "key9": "4gQK2squpXfuEqVd3w3XopgxRd3JvxbTfuTabijiawbRjzPfc28Zet2yefyAAjGD8tpkempR4wV783VZ83jYbWL8",
  "key10": "TufY5DtxH21VbGw1ahgUzLcPAevGqX6M1eCUsoMhf2sPWKhzVA6NRw8Uu3PQVahKSUs9GJYRD66nV3Mi3toyPyX",
  "key11": "FiXAjbarJ1Spve2gKJ9NpbRm45trNTWhu5UkqdWbwHjKXEwyCryPdmAGJTixYAfST36JPJFTZDANvLhCzVHYQQc",
  "key12": "4cu3MvNpzkFKptf4FTp3SnoRxdiMve1ggBDPVqZfyxoVCEXu6oEpiVyBRzxjHBxwywiiBS9wgqbmmja2P9QEwMK2",
  "key13": "4NEwjnrwaai2tr7QhUxkomWVA96dmVPzLgP4dzmAbCqMKz67mCqGoDuZ5yjGQoKfGx1mh18E2pnuEAKtZ8FJ9Si8",
  "key14": "2zkGAtLSPZXqEcK2pF1V4cCgd4kzGucwy5qomBEs3bHAiEJMCcuhKb3BxtZ3DSxond9zmwLXh47wCcrxtZHH3PBQ",
  "key15": "3xBEZMoUcyHTumbScQjATz37jxjLUkt8XEhgvLvTzoJUtX8NHhpjkEzgWfDUCotXfv4uSyKrxMsrZFx49K2MT5r5",
  "key16": "2jyxMAPEpr5cJmuJGGt5XrXHcdwGVBKnCK6Vt9hWVFs5ziNtXkASFmz7NthB7qeDtqxRRSka2aE5rkEcqNMyzf3y",
  "key17": "2QZBAJHuuGD3N2YyTMtcWRJtkMEr1FJivJ3d3LS7wyFvYKfqkHu6u16aEa3bTtyvjt7ctrJL5gvKYKyeULan3DvJ",
  "key18": "21Ug6wQAt3Mjkaknjgz5EbGYboYC92DKQhCnss46zBamjPNRxgd6jdyzVTXRXP5MPy4vf51T4xTp7chn5zHASyne",
  "key19": "FpucSmEbzj68k4woYXsTT3f94R1eef5UonGJj9urfTP6u4YM7UXMbMs1qD9QvPA4TRxUki15bxCVJKkxvCq5PUj",
  "key20": "4yuifVRy1meESFMT6qTm79aEvzdXYcscLCMLxFgTC9LrUvSGAbPGAmAuqyNdoP17pviiH8DmkvWWdJvhNMCUTCU4",
  "key21": "26euSrcNsca3aF3josT2fPTXv3t7HhoJVbMcEut135bACnRUHJAgBZafTqJQkJgQ2bLnFcLGjrj8akJfQqS3T1Ho",
  "key22": "zvGqpVvLMNNDE7kqPFcAGtLSRvnz6xdvAZuRj6qkWanmSmXvvHA99BX1HsEvqqBvLNKiBz9tdoZXRKqnvoAG4BU",
  "key23": "3feDc6Cg9dMu1Cs9idHKuRUK7TK7VGR2b6j37gEY21FartJNwTcNrCQ193SR3QPb5BBcXmuaupD8oLdiZgKmPKvA",
  "key24": "2q6HUzV8a6XkdeizKRZ3JKbEf5vVgucg5tBg6YAfRr6nbaEbdgb5JzmE3K5jonzWCkoXC6V7qbHHNH1dTow1jSae",
  "key25": "55R4JFAaFes1wJE16kPPXmiWijF4DDmvs6AWp9qEkYRcZ3NbjW5BtKcRq5qhrGGaxoC4rTiUQ69KHLdqWBPxKGcy",
  "key26": "4g2skm3BbwbYLjNAsUkqARYwMqc6tut3xTkL3MVggHUhC1G9Yd9xdZ95KLZCeGnDLuxUtoVwH1Q4h5fskAmiYTQB",
  "key27": "47TgWVxTcVrd2FTmrMeKiSomAGsdGxhKZ8kHhCXEtEPf4KtWii8N8XFFp9SAB7KPADYskvzdumo4ui9ETniW1x7j",
  "key28": "4TqXupFehDkLpjtvei9xbM6JnxugnAjoSuobB9wN1oiZTnc4yBfwVQ8CTex64cJDierv7yyEkWkdo5U22jEGaZta",
  "key29": "2Bo8PNdtBQqmNj9i8yMT4KjCphXaReUmMaThMdprAJyyjTt8EQ9xWr9Txtg3XbYbj39JT8m6NjyRtd8ezXGs4eNo",
  "key30": "3t4VuH2XvBRCNVH14K6PmJM4Z4czyAymeRyiDmMPMHssho5Uixgx4wwnuPLeFekats6RmwiAKtCRPDUrN2hJUQbs",
  "key31": "3TFEdecJepZWRqm4UpDSgx2AUwKLTTqp9ZP5C4ycACpcwbpu74zad8NBn5q55GLKNxTzqXpfgzJ8xX83Poe9ojhw"
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
