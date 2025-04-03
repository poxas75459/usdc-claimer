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
    "4qGN1fjdRtXYVaNLMvnEayFLdfMZSdoUshAA7WM7NWLfVbQaXyfcQWeCUJLXH3HViiqHqvWCy6o3wzNQnFjtoP27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ovjHMEAT1acqLbTKprdLRqy4RB2mzGUdNdWDq8Dca4Jk8tR6vEhm1tQwBT5KWuvZvcShhuZbeG9Jh2kFdXZXMKd",
  "key1": "tmg15bX83fpRsaGHkHvQ7dAP9uKHYqRYDzkDgKMGqh9FTCXR3tZTbyUFLYkfpiBWTZdNKXKLrqrVs9mAtcNU8tx",
  "key2": "4WznBMwTQkpwMNjzMzdpWsJvgP2Kcc6sXv7EZqP1noucpinj4nbxSjgPSK5wkr8X8FWseqKhtSbEvVFScN1uxM7P",
  "key3": "4k8j4F1hfpYk5NRW5jKp2XNankctafYgCShyPCGvn2zbggdsFy1skcESxwsNLPdphjZJWBdsFbp9eE9Fz5JmZQwa",
  "key4": "4JGGSvGNW3ZWErjdsEyhX9T9cfJMfXCZW9BEzzkPVJbNCPbhddAC5nUQCDKf1ETq67PMh2NytUzvkSrGQVvnViad",
  "key5": "3x3KcUHCdYrT4Zau7H2Jaw7QyD1jLy2KWRq2THmCqUnrJTVLUmoZwVwt8NwkpfHbgUrtcCnv9UxGifw9MxbtiEyT",
  "key6": "366AJh1jfj5eTg9mYzqHfqbZkoKUtGeRekgCNSgjiuzoLNVpYMfqvgRr2pnVLtT2PxoyQNgGiLBb4LSLqAcn5rJs",
  "key7": "5renAd3cwRSZGU6oeJsuJ24DAzdey6NA81t1VWUE4FjaV9c3kuBeWF5VuQH5euDkRiyH5DFkYQRjrUeQGuHsYw4r",
  "key8": "44KZdawqVYF8wFJVHJMJQvtckMPjhWyPKjAKX32zh9MJSTD3bBCJdb44gVcedqu4hcks4fC3EnHHpVGDf3Lpmy7H",
  "key9": "5Br4ELNQn2gi7ojFfqhLdZdx8iQUyZs74NKscNdEjhHV3qMwxVgCLWgb4DehjemeUJdjb3XLVKfWmEwsVvyjVHfm",
  "key10": "2XNeX1A6gPsh26ZbWXvz9Q2MxU3TPTJLzKKWb6FwKoKKiP4f1QsHByMgoxsLkFN4mDHzdBbFgdHFRfYfXQBJ1E2W",
  "key11": "4sMoaMqj2hy2cgV9TDCdC5KSyiWE9muiYoEKnsn2hoqqwDUKkE4Uxg5wHNXqRtunMBSSBCCfTZhT8YpiPhRurSUj",
  "key12": "28tHbzBeiEWnEdhotVDT5RwoPNMm2V2SnfEjSgPeic5P4exefken2V8kx4Fetp8th2ujhnW3dyAFnmvfnmJzZvYt",
  "key13": "5iPepwUx26mRFQYydxmWqd81kUHGVfX2gSe46pnsfq44Pv8TntCyUw8ZHEU1q8ZF8drD5EqwZKXLe1WkoSs6rNCm",
  "key14": "2iLE5MN2GA5zLi9EmtXSRYjMcrnfGaDzoqhML72fFNc9kkd4DtP7QB1mAQJhKGZAWWncAixG7PB2UBjnWmjLwSdw",
  "key15": "2ZvyrjmdRuzDnNaYpRmPr8RT5QPLuGCdJv6jRfmDCdBnESjvag4QaXhhwSapTKJgNKatRuLxzzpBc8KHfmGTtLTg",
  "key16": "3wg1KgJw9vrRjnXbgG1JrEt1e2dQNuWFxYsi6fR6YDLUToCkfJZniMpnZ1Mg88P7v4Br7kwMs5cuibRED3aBe3Po",
  "key17": "4cxoVcjQNJhBJoHi4LfbPzx5T5dcfvJ95SYiATc6DPZMY43sifNWrCr1NWTecxZ3TF2Ny4ykVppHFUyxyJtboFuK",
  "key18": "5CdXvJTB8DWp7KevdcThKzfy4DXwkg3Qbo4GpBPAxJc7i15VmPEiNzU4cp6r8qCdu5GYaxj1XyaqM9mi1hgBTTac",
  "key19": "271JTHi6P5wqJ67qxc5kmLn7EDfYcNyjkPhYzFoeNvDDRZw3ysjZhM5z4S5tbNQFoRx6sKjtZ7yr3k4ucovodbVP",
  "key20": "23ZGrzkJxikuZ6ZGV9R8b1VnwhZ25Ces3CFTh5wiMDCLio5xVNFXx6RkVCRmAypQYhPkkLLE3LrwEJJ4hkvdYXDy",
  "key21": "38kUr8xiXfJtrFeQzFuFK1b9kiQ3CiKRH8aoKV2CqrQ7oQWZP9D88p1Ko1FmGjQYHb9TJMYdhchE9bfwX24fUb5B",
  "key22": "5DwSJsJVzrx9TMKpQYRLquLxdGwRR5ZjqwAuF4B2LjCiupVyxNuT2K82nihyGEdtL2qUNoKDbfzWGG8Zt9R6vjui",
  "key23": "2ra1KyPBUf7GUt5PrebWeio263XgEtS77KHbfx4HcDwU1TtpwCzhRTLWAmBWBB3gKBQwUfbqMMzomG7WBtKxcJt9",
  "key24": "5HjHn1GVcPqZVnRDeGLwEAdAXGNueyPQxcWK3re164xQMobAaj3eroXrqKrktnScbgABUsRraSdHr5FbZWpsQKkF"
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
