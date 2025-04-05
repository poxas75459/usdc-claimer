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
    "5qWLvaMn6SQHi2LFwsSQwf8L2cLRRAZdoBmE88d1YNgntG9sYoGoa1wmMuTx2VZuy94KxqK5aaU6YRyFPFEZ6SBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rAgyZbWdwp2SrBiToFJhD55Ldf7mjVGWpz6d9Y2ifhKRRt7NJLHMsBUqQRZC4Fz2gN7xUNtaC2gnDBNfvHctywU",
  "key1": "21TRMyUCT1YVDgisG6dYCD2wV3w4ALP7mqiPoGPDfXqdB6JrQMjYDNLGKXGYBEucGcRKfmqc55BgWdgNkY7KtJ4N",
  "key2": "5HXduJ429JW8PTtL6jhrYeK5bU55VQiMK3TyjdYpGEE2d25YcMwoVSeWuRWLQa4puuPvFnCDAH61bWAgy8Gv3Law",
  "key3": "5N8KHVSDyeUXSNZUtEmRfxHPQmt1ErqTFCu8tefNDBTRfPsSSVQQmPmeenFKQd687b3yqhdAeQBUYNhUGbBSJVqc",
  "key4": "53Qhg7H26HZBQSHi4WEzLVbcngcKFXiUwyhdzPC1756hmfPSjCWD2rXs7yrFir8225wMFVXoT3M8wQ58Em7uRvFW",
  "key5": "23mWPar22WtiFbRmUMUaWD8gMTAVjFTutFf1buHCgXNF54Qe44iWr4xhw7XbrRQu22ys4faY4LJdk3YjJb2CgQ9P",
  "key6": "LRrnFp6HTo9ado5oRPWnJxW6W82et822HMcXG2W71igB9bEJW86dyN7uiR8C3Co7p6iFRmcFuUXHpMSBvCt8mJ7",
  "key7": "59Um3BQBj7FvrWwGyGkrkzArFCGNH6CfwtGCBCkS2Qsgfuy79qVDr8mnP8JQjz4zxC1aLvL2nxaTT5FDTDwWe1p5",
  "key8": "RgJnvjPE14eQVo4fm6S5Q5zsf37YD9zpqzTD3jrVFyLbimSass68kzAizKKx9esgbBFrepBqSeJ8bZDmxBG6672",
  "key9": "2LuAdHWDWMkCRwyzKYxtw5SFzwkhH6Wu6S3vNoyVRXTexWJziCSA7FdhpsqxRPRW8iEtCdBTi4T1pK5BQJqke1cS",
  "key10": "3gd4Mx3ojY8HJ9UvgMqSpnLEjn5z7BiD8quD8jz79GXg2GXvfVwbDJaaJ3SS4VeZA34oiQMvaHo7zJPcyKY5Yid4",
  "key11": "5jVyy3f9Q3EczZNghHcXbX6aeuSWBpgML1JhXV62DVQMjGCHGt6UYLJnASuqRhiZ1wKttej2dV8yBkNKXs3eHuWo",
  "key12": "4vNUAfv2hDGt74Y8Xawy7fM69YtYZCHfMGfWDtUYYKbH6JP7RRUoWGL3gVRYPSCYBvPcRq3NqwAmmwBuCdfGQCrQ",
  "key13": "qTSRpndKfbwLSNPZFstsUSWQwZ7zCPmTGCUPXw2xXNzK5cMVPyyaghuLZtigUvU4XzFhgStHdoPiRvv44VFNtW2",
  "key14": "3PSnKmbkvRCSGTTtLv2yFDpDvZkbxCh4vfPDmCcADA4x2QCe9smcswRuMKBcNLwio7G4XYcQNGopD5fi81psy2og",
  "key15": "2GMxvM1chxRZPDBL7ehGY4SB1sC15tVBdTXDg8dnuEY4TYptbzXn9KmpXvmSVJvb7UujfDyxNtfPwPaGvdBjybqL",
  "key16": "25c7xuPy7x47BtSFH6uDGiS5VcCVBAGRpWGzkk98Ctbq5Qu1Nnav4EQHQ1LdwHghatDNrvGapEnhMszococ5cSiy",
  "key17": "49gLprQWdaXa94GixZGkZikxTDDPZUYaas89Xgp5ffQA2K9YYsAP8wp7TrYPpXNwpuMVcgy4o8nHrXapLD9wpXPR",
  "key18": "3G7g3rg3Np5GnUwyVE5hfza8iHzVuwTgjPcF6ckddgfDMEFQs6nbALzXhiaHF38Wu8z2TXyaQ63dgRBuTsUenP8N",
  "key19": "4xqfUFfegVkhbZfjAvwZuUkCUy1TvfZnR4rzA9Vejr5982HDzRbpLS5eHyyfpD3ahDQRUpMqRu5vgBuU1PtVvWZw",
  "key20": "3RwvDHT4jkxygJ5Fc8QaoKJxJMBMFtxqknbYJ6aN41gfN7KoMQX8aS3jAE5UPky3ozarHaZZZmFk4Kas1EbamUCa",
  "key21": "4Woz6TErKP7L36d8DNUgR4psjm4AgArF7TuGuWLkggosjHmp2eSzwy8KpMZGqwQdKcEEeA9z1Zoed2owuvic85MV",
  "key22": "2YubZqbcoFsjhUVXh247TJH4qX5zwX2aCCb9TQgcRRbQC4ZpfExYCRLexWWjmaPYf4meL5XDNeLpbC6D78Up7SiN",
  "key23": "574scochyotHYWwpvhSExkHgPiMh8YS6CwGj3xXcLrUJHyuQ54miVdD36rcAkLx6HtUHqUzSWZnvyqQu7n9gZLV8",
  "key24": "ZicmGXxM73Rw3TVi39KkAjTQGYb6AYiFdaUkbJQ8cs3PpAoqwoKgB33dFYwYMpCwHU9xorc13gyHRiFZjgsKdik",
  "key25": "ze3PUzuw3N6cxV9KxFYQ4SYWj6hqvrMEouvMXa77LwcruzXVzk4Rvsr2KB6DKkXf7NkBHGPe6QAbPeVwUCxT2Jj",
  "key26": "5QkbmQH7MusaQDk3YBgpxQHZQBc5u8urNjHdggyzarC18vhkxfkVGcbXEDgXh6rndnVBx9FJ4vzK5JpWHeqLBKrK",
  "key27": "4fLtMQat8shNvRs7wqZ2ikJeVe9AUj5CHyBtozPqAHxEeNwnQEy2xqgPjLtZtnfVxHcLtxFL6R736Nmu1bzau37K"
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
