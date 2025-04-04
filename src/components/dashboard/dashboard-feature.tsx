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
    "24h8tS7kX5uodNmiLXARvdpanyfUHfvujmEiekex4ksVSsUfu7bhBGRq7sXStbeKorDx8DUHeGNV6vtbwZwwCYTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TU2J4h5SVMrP4CxZrcQ3akYiapfPHFqh7b8sdrrEUPS6CUEqB4n16mFt6BYrJdSbu4V7C67sDjGT5mubGCxhWd2",
  "key1": "A9XSiPGSidaupAswX98R916iGxm5Dm87P6yW7fSd119g28qawtJYSZbgveCQQZ7Hm8d6WzcK2fdBjirVXPLuoiR",
  "key2": "2oQRatJk4ZfGbg31xFryPwrRfBZd88Ffe2M4YwjJxpt6DMxBusTmA4yu7pb5BuxxNscK4h11p9FhZwrAZhVmiwQD",
  "key3": "HT2dGAxR2oH83ARwV8g9HnD2dqPQ2P1QUoRZyRFXsegPt2JRiao35gBdPStu8EzF7DnC7N3BkVEkjKK9wc9UDZG",
  "key4": "485MNNdxwrda4UtAok8o4kFRrsj7V3ct7FapvqhV7WRbjgTkvPU5kP6SM74VAWkWmSFWsin3o3kZegKv1gDirGN2",
  "key5": "3XP8fDVcaWiCuDvkGMzedaKKMzohDe8fMGrYMhwyHG9gA9DDyAn7ei9dsB9dxeyVJthNWbiCZ48dPaY7pg7eaTfc",
  "key6": "HhYGjnf6ue4uWJPoyHpZNHYULqNAV6uatVMBpnCuDztQHPZt4BfTvTCdRPeE2CJzPfTpJqvLKnHVdXrmZLoGSnG",
  "key7": "5pu8TKetBR7vuaYWvKUvkvokhtrMaQm9dqDY8aWbA5TRfm4NijzvwuUEUPgWiwJsfNKXtY3VK9h7sghhDHw6esXM",
  "key8": "2DiofMLkbH9Upf3ESoQCp2i6RiP3YY9DVk9XFqYPy6YDcANVGrH7tSMCVTcJ6d5gH6JzqbP8kiZhVhJruEyKMnjR",
  "key9": "1MDuLiBRjNWWYkQcfiq1prr6q3eAru42ERqwAJjxXwggCs33MWPp64HzSnocEQaZBCvjdirPjgKZD5PhGeqzam9",
  "key10": "3SYi54Bm45CvgifbqyvxdWargkdbuz3QbXo8vrwzvAkvCas7wRLVL8PpqxjeJUqx6ETo8uwCPamdZy53LxYiEhmd",
  "key11": "5x2iSYYkFEE2nWsoTm9KfWpke4f4KNQsjhsBKLkpbTCfuJfWvudB4WDYtHjtWgrG1qsc2m5vEGcgMA8wyo5t8DTc",
  "key12": "2W5vxyUNGJ81Bh6n8tpHMk11RocGN1herLGqCZVvS7gyRfr1guyUneu3fDeP56Njoz5KjWBffxjoTgZf3YSn429x",
  "key13": "5WFS5GtMUgbEX46bbTfJHieTWhf6yYMM5omJzgAKtmPEbbpZNyD8CL4ze3NqrACyMeUQTMnM5PE5wUCt74VL2owD",
  "key14": "4wJsMjNK6cmvGQrzeqvcx92bnGbELeSTA8mxy3Q1CcTpeigN2tLEorhBUEoKAQ8tdnTyiobGf7UP4SJXz4NkmRt7",
  "key15": "2dq7urARSoU2wo4E1HxWputu3cWPvzjzhCH73DAxxHNFcAjgr6H65Hjsz9rBEL4oX1DoktXieDntaNe5bE1eJ7SQ",
  "key16": "5bbbxkJtYUMWkFTZXL9bBrqQ7AntPQJVdm57VEaEkmh4rBQu889oFc214NibqvNK7qfgjytP5RCJGaLgcKLxeaSc",
  "key17": "FX1dKT67LwQgfQbsKaBUX4wBQxqaPLK3CoVgcsbBeTWU1kaT5aKNvBkMeTpN1JyK69SSgm1fxrqotzf6hz3HRv2",
  "key18": "5Z1VMGeT5UYq1cLx7bneGZ6PCD1CKvtQPax8aWxkjf2mLbykYaJWYttWVhq9otTo6Wi6bvkx7jHMKFdGWhKoufnK",
  "key19": "2QuD673zmbQE3xkSWpS5fYZMEiuR9MiYJWDtReYb5xQGTJ6cEdLFP2jX7yH4irfqPcxC35exKe88hyzXcfrBRQwq",
  "key20": "3PTFPuacqvxJw9eStBFsarP9EkNoVh27nNZ3ccZiqUmHERNDzhqQvCEpHFr3HHZWTPHRXJZhNwkue9iafgnCv98C",
  "key21": "KQz3pWNyNwGAaTkaTcwsz68RdiwM7nXDRf26ZofNh9h5a1rxkRbFgaP1qjEJwKnXwYrB1vDeu9no4RpNCYUgn65",
  "key22": "2kvYcC3BJpecbmdkYi91FvL1akUsa2t5mr4NRZA5kcCEUKy4KQo5oenPXJTg3ejB5XTsHtguch4BcgcoQxLMpMy4",
  "key23": "SikgPgLPLNc9YGHHJNQof4qyis6iEPMXaNSuph5DTSKAQKnp12QnzuG4B2KnbBdWa2S4trP2qN1P4EaXveyPyhc",
  "key24": "2dzYPBYNymx3PoGr8yvgrnfZvPtQUM1CyCamoGr5XJx2QjEzC1KvKxatFn9MgZ1apvooqsVhMmJRpkQYXBpmcS18"
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
