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
    "4D7VqY3KCuUdxS8ZiVbBQTExs56ZRDMau1i2KMKQycpjR3XYnuB5zNTUB2WBTuXWr31JTsQVvtAJTyy7SPQQjKVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FyMLk9ZYM74Lojo9HbWnzqXkrD9wSPY6FSLmdfs8MRw74qeLbhTRXUesZg5xda85mVmhX4LTjPmEQ8pAX2u2tEq",
  "key1": "3PAeRBrKc4vyVeRcAS9R4sGDGr6FXtokFtrM3gw2MpCugRKBsB1qcWhLq6SjEMrXRDcQ49DxRPPKoJBhnXtShu2d",
  "key2": "4ruydGhcpiDCk4NQRKTaxPY1QfuqBYHxw5ke6EBtEFUM2RGY5NkR8uFgbgFmcANTGXocUkWrJQ6xnzRsvXGNDoVX",
  "key3": "bpbDAH7Jgg57WKTedqPsYCaFngPw78Qs5DA4r6gV4X5q3cVRvyWDpXmZVFSnPaCHXogBQtbn8Fso1kCvgQ5Wk7M",
  "key4": "3scN471sM47kKU7orJvsAudyRr4wp58XjbM9Z43mKBfyWETjt8Y5MdY4nWcgwJA1jzHqr3uyJhZBW6QhXeTrkFHh",
  "key5": "4B6tMcJa92XZz3TasedK6g5TjwHE5C1Vap9zg8akz1ActcSsu3fauksVjaAQJbsGn8WRmjYMcNLzHzWqX1bJboiy",
  "key6": "2jpZrocKsQgh1HwQfZU9RsN67V26wUvpbJo8YoG75b1U2xBS39LQcT2HzFFXYf7nqYEyGiNzyJhQTPXtjQMbotwC",
  "key7": "45E9t1hRP82HqvLiLVdo19AGXp5jdqX4vutoHw85eXo7xqTNZLqTa9PgLirTXdYwYD3QwEMcfb6AkumibbQyBb92",
  "key8": "5k8tmX3UrSQBFoTfkpNoeGH4BVMVoCJmxfg1bpuhaFZ3tPdgFTRXTMhpC66ErbfBjV6N8NvcvRELp2Z82CqAhXEF",
  "key9": "3Pr4pgKvQfd2tnoj1N3Ew5SvqdBn3uB1TDbV3WAcnuk9gTKNyXeuBTrHf6UYmTQgjLtkWCjuBiGxjR4PLHRXy5nS",
  "key10": "4dqTAYQ5u2tVoyUBciwfAjrjb36foQurFEoAvScwSyCeHg1zSiMA5Ark9ksfvnx9SJbHwRKtsbJ8QiRdeRYyLhkV",
  "key11": "9DfaFmG8JhnPkBJQQ9AT81aiYjg7nsED74KwJBEQ2uZdsJuvCG1JZpuzRJDpNjhEogzpvk3N973Rz927zT3wgja",
  "key12": "5gUYsc9kgzaL79xbPbKij7q8khPNQCFk9dVo4Zga5qFcAmk1GipRMkyshjRfB1isHPtDUQ9XrYJyBp7hNhZkoqvj",
  "key13": "4769RsRjHtKHceG6MiRRKkaG8B8pESiWcf5PyvXGknETuDNExSr5EPCBFjCXHZaEFX4cveaseEMWfgkkFEKtfFWr",
  "key14": "XczWbvwoL9W9pfgbbqfU8Nxi2yPpd4UaituRNNKaREN2WFtCvZQ8pMqUS6VdVupmJg97ns98X1aNHVzoYqrNZQ8",
  "key15": "xomQBgodR2GCnMUM1SjzF9HsSYfmGXLQtgBeSpM5EVbWwMqDuatrmYqe7HfEtCvtJQkPzT7BTmQrppE13Ks3sLz",
  "key16": "5ww5TTjuGvxggNDF67UZAghgMafTvCGbXJDUALwj5s84FSwP5X4YRdywHzdaJsBnbiuGAhLPHtYvjC5ycah76Lin",
  "key17": "2XrnBGaM2VeynSiLRpMwJVeGFc2rEcGHPwEouG2ZgZu2VRjJSFdWFxXf5pzYbiy8GvwtU9sZ4vNxA8yGB5C4prfr",
  "key18": "2xuwYwGLaepnQfrDu5fM7o4dnAxvqTJD81sj7fsjTKWjfBkKDgV1wxLpadE2NZoGhrq5cTDdetG9SWqNRcJBoVQ4",
  "key19": "3uQaHWV26qTGav99wUd6MLaTL96kEBBAZ3KFLcCDcXmu5JGojMoNHdSvyhP2ksjGJnq8oHDYc36XEbTdz4tUPv7r",
  "key20": "59KpSsPydRWBxN5KNsK2cBhSwHkSCSAK5mp4tbknoDMNMgMndXsY2CwqteapapvNTKNtn9J68D3ibGmrx8sdKHsX",
  "key21": "3pgWEyVTqN5ngb9YHavCh1tA2JZm6JsirJvqCsPkKNRRSJw3EQoFKpCFG23FBVuTfQh73br6TAUBhitwoFRdKa5T",
  "key22": "3XLV14cJ591F9xJaRZ2GUvLxof1ms25tHwjSuZPf2B2pSpdxXERb2NRR5f88g9aGGvaqQTivooC3LWLJKb9eHhVm",
  "key23": "29jK4prhVXFGF3cMp9g6cA8Himhq2u2zCpMt38cqE8yrTi78ikpKucn9Dig7GTssffTvALFDWMZaDXXpxmzQdQa8",
  "key24": "2eQJZZonmLkAt6PCTGnhsj44NxLEivtB8LPm2n8v6cZmKQRMJnig5CEZpyD7yQMdvf3zpz8XRRJpYqAQxm2ADaxB",
  "key25": "2TyTkhpAfk1TpdMPt5ortbkuLLXWgCnQvSz1sZAX8izMS4zygNMCySaChn2uU5UGWzUuvE1EiBeyhPFfSuLCJdxh"
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
