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
    "4Dsu6B5Pp3JGCzuKBZfWTDHBt2x3urPUpF6CMxcAe3GwfoyLhTGnzN4qqxrVmSLgBaVKgCjNWciqrv2TeRKB2xWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xfKFiSSm2HJ4BcRPfnr37BQ5WhDe7VKeUFHbWuysEGbkak1phYyxL19PCRfLXqXgmwWakeGFi1VnFXkpzGppemJ",
  "key1": "3EygdZ2ouNwFhSwjTJrXKTSumi7yFd9jdRqRTZzVULtWFGMhrAGmNa9jNxfWPr8Kg5cBC2kq3fBW77jCdFtXZQEx",
  "key2": "4PdiBgETyfYYtKRG9QFxS9G78ycsMZ2E4v7dCVwn5QpdXQEVTC4MrVUVxi3zBwaRWVbFj8PKjPg1C6ApnHEqrLGC",
  "key3": "xBjRVY65oS3j7yteyccY4KdavaFJb2yWN4PAhWXcCXWoMdTvPw62BrTEeUqwN25gN1tn6TvqHRkzQGxq5KaWDTo",
  "key4": "3efgaQqo5zxaiunxVnHRSewRpxQiF69unvfwd1RhszxMTfX6XAgp92NTDZGU9ngcTtGXbDJ8XcQAXtvSwKhhVMb2",
  "key5": "2sWfLqfuqU6T3KPiR2UGePRimcPCDkztfxKgnMDDenjrEbae1oYnVhcZgaTR1SKv64ost7EiDybDxt4JGh8HNTWF",
  "key6": "iSfk6wfSh5STjM3RDMxkQcRGSqW4EHCsA2hYNUYQFWT21hDXXAJDmCSHuQkBxquXNqxDJk3pFNEMi9Z4eVKVPhU",
  "key7": "3di35Je7m695cX5C91TSnSPJ3iCjvfXT9zsg5x5K1KsN6dcKLKb7UXjF64eTVuKtxroe539Vpaw3Vcos2WiCj7BL",
  "key8": "mS72dEv7JE5Ffk2sZUgfU8jdEn3VTTJKrFWpF29DTppY9yMvBzcaFjLCQV9vqwvYyCe8nMJN8H8yRxG4uc6EwYg",
  "key9": "5896ARJNsfHm2vTjTjj3m7aKjkDTsnNMNU2nuRGucy6qjNtQ96feysdtXz36FLh9icqCoGw9DbFerpHVCXLznEzB",
  "key10": "5S8rkT2yrHVVw5LQWntXFTwfms7gAW8ZayQzVod4R8o8zV5is2wWPS8t1iiprhBT7mTajmuLg8BsbHTa2mGSNhhz",
  "key11": "4jZXde7jUXewwtWn229hPw3Xfe6DENN3n1N8nygPvSC6pySJoPqL4aj66CXbaejEREFFJhxaMo41gpyXQt1Ccawa",
  "key12": "4tu1yyMqLeY2MLmo5oxXBApga4RdoDGZx9nqD4WZyLmquU1YcUccAjvYhust2nXhp39toZ6PFek29R3aJhehBfcM",
  "key13": "hLbsGRTwP3t74E6C8cYPf2ymZP11mk3LYn8EmnXXUdHcCMoD9dtKZBx62eF4PQcYk2QiTqqHE1Ea55RMUeCrxAD",
  "key14": "3SMkPVCHcimgGfBz36hqRruer1fg2J9rrQoiw5d9QKEuQw5QjgVjnhcFn4T34jBYyj8SNKDpniSzRXhWj7yGDidG",
  "key15": "2pRJDtwyXqMf8DR9L1CNtGqG6RyDiCXJCW7q84CxrHnxfhjbzafRaLLkteU3DajPG4bkC8UzY8uzUTjykf3pADYR",
  "key16": "3G8WHBgmSN11oUNnogbgXLXqtkPQR1WGviFn65DWtDoRnVRvre6VX6vxjZnkjFj8VLeD69MYRVTvoL1VczjuAvAH",
  "key17": "5T2nxhus41S3VVB9d8GzakzXhHZBuLjddLscyQqwnT8hTQR1rdEB68QvjsAykEKAM9B9cEiRsEGobkK3VE6y8CkV",
  "key18": "pivt81p2MivBMtBWds2SeLhEjJZMJCmQ8H3DFSuaccm6TBUvTxvkFdNxfwdahUmQs6it8UGeKPfzk1e3BefZPtd",
  "key19": "5xTBGTperQq56MBvchbEU241nBntvYfnL4fVjadyQp91Puu3sX2ftS8z5sAJayMsJELji3LRHs2vPPZEQVMj7kUA",
  "key20": "4XcQQ7sMPGhcu5hiUtwj84tAobdyszLwr88gz8AYMpvamoeg6Tct2JCrtBC4XqBsPqLEcRQSUrp2c2J7CGwU4HiC",
  "key21": "38VpjaKEENSt755gTbPgivKsauyzK9wBPGomEgzBBUpRhzGWL75Xzs5Q7YZJVKFhkJQw2AGFeDySsovxrFHCRA4m",
  "key22": "4YBifgmaVydwHQcu8svonesnmWjeJsGxSh4rfeZnoDQrng6SQ4p9oZTnqBbVeUrjr5JS2QYmxU9VML7BP2pr2eP8",
  "key23": "5x4rWrSK5wDV7Ljz974orMXM3e9vfkoRcodwMhwmGP6U4t62WaBXgwFCkVibqBkVfEJtzhaeLnDfFLSaDeyBe8NA",
  "key24": "4F39ZEXE27c3MtA5tjjPq1bF5QaFLZvZ9cDx62EiMuziZDLDz1vKnzS2FF12N2Y6eJevi9Q6TDiwmrgfD7mJfeRe",
  "key25": "62tLFDkj3smsqYZrwkCsn5rSEMhGbG1373yF249b9BKzXyfnAPPzSfcjBXLPKKx8TKyKXBHPeiBbLg1irD2cKJHE",
  "key26": "4GTji11CmBMgVXzFRiJnRnGHrSezHitk5M5EEoiRPBdPQrV6TTw3iipPFDm1aUMxKaQQ5fYg3rWwof798GGf5Yts",
  "key27": "gvaU5ApfacJM1MwU3fGUbx4QwG8599R2XZiQokJvQZgDTynLw1XGuPCgz37xNkAmzHovWvMCCQa2mMJmg8Ez3uF"
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
