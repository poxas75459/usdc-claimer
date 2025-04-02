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
    "4eACpbLD57w5QzLNs3ZJkxbSJqXjpmtchxAYtiTCMEGdM37RgW2LMRYiXsd6i4QPnFMkSpH1vSazpTHnu9kSj2r6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Tv4eRbwJP6sy3b5VYyJGxXaepV9dQagQ53tuMvVKnPtUU8pXPEZu6ZSHKGRxnu7YZX1dV2Nnjk9Eozf5VdToTa",
  "key1": "4J3AaW866WaEq9Tp5GWLnMNy98aJFbYSbrigfB7Ny1ippTPp4pdQ1SjipWuMJSdGFbCW859aHAkQghfoXH6pXnBE",
  "key2": "3CshsUDohcyvEbK7w5jUnUUofZ8bJaAfCj3pzrMocTeBedmkmYNzTcEb6sfTAnLSsHxVBy27HdNP1nGmKY8Gmdqm",
  "key3": "5ZEQL1auYb3zKzg8NQg8MTJTqPUHBhGtY7ML97xGUaRv6PjDLYRVaKL3iV6MDUu24VFLSvWUBt7NXyWFWxnBgHdK",
  "key4": "5HJLFpwdE5nccpXnFdmTEid8yS84sEUCbDRxroUoAGQyNXzzWRjQxhSRCLSyiEsow3ZfsjWWvrM6b9BNVYUt9nTc",
  "key5": "9JqLWx5jcEvjsmMLM7KpAiaqWmn7QPh3TRQiXmuuVLGPTb4pJf1kUYcuSfcvNY7Eov2V8GFBEnSZaD2o3maHbhT",
  "key6": "54YuuGQsHWwMAb6czFckufjPv41zGrhvkTzsTspMXJswjKwxRfT8LGcDZoMsoSsBvddMFwukk8gX5UYQWJVZt9cs",
  "key7": "2FCBUcLwaBRQEVHHKbyZjD8X8tMHtUqWfp12kkVQaWXf3YG97ENjxdnGnETPLkFEjCN7PPipmssWvGaEC4WXjFkL",
  "key8": "5iKBjqTXWvLWn7Gs5JWKAexoioPfJku2PSRUGWBBa1gPNEwvUGHyEG2c9geWGrCkkrjNzyY4bpKKG1sjkCarLd8q",
  "key9": "5E1T1poNE6K2ydTRG614cPrYoFfrJGPDs8G4PcYYNx4gJWBff7Zx2unca7HTYQ9cGkyCjiexmj2ySkt2wnCk9fKr",
  "key10": "3Cz5EmNickbcAWck51QzV3pbLi2C74m5T2ELKRWTyXyC4ujUjdfpnom8ip4xLahhUc6TEDawh3nqK8hMuab1Lr9z",
  "key11": "4yawLizJUpc7EJkxGRax1bfME6T4aPpimZi8rwg8WQ3QWHv7przKwiPhj41bNvkHcwu4iCoAK3peE7C3Jst7TjEh",
  "key12": "27tWfQbii7ZasU3kS9m6hKTxwfnXsGF5mjKpeiCpcb8tJbQyktuReVRhnKFYr1x9xocikm4Ck1qtpqyMG6Jvw1U9",
  "key13": "3ySBLHPpne3RMZrbpn6CzHxX3ocispRyijBzg4fMgc6HHWoTf3AFiCgQD8nPV54s4eKfpNFxPZsYTBNPzEDdj2S2",
  "key14": "gCyKdw1422P8m3J68ybE4u4TEviC3qQ3PefjeN7Ecfrz4HNtqdT6LjLwAaD6Y2nk8RESBwDPZaxCQPqX7garMan",
  "key15": "61AmNPwmR5YJZU8sUUciXtSfoRmoEDSu8ipTKHAzko7jsnFTeVQQCU67asUoZGyH5hEQKCQDU9dpCGG6ixUCAAPB",
  "key16": "5iXEqTTqVhVcSHtuPAoi7bqt4KBQipv4dio185ZGMoWHkJqzRnWBePNytaZn6ELykwz88xxhff6GxkAg2JaHXnUb",
  "key17": "VzgvyjB9kyMSUagEdNTLRNLUcR7Lq2NmdKzxtM4iej7xv6aV4CFoZ9NtXRsZmxyKfw6MQfcy7ybEGRnDvbhDXBK",
  "key18": "5WMRsTZMPRzR5A5mA2rjNSW8VE6ZfZNwnRC9iexKWweXeMnc6a6kpghNMninQikTrhnXRS5B5h6GwWL16w2xYcXS",
  "key19": "32N4PRf61jwBNsM6NBN3Gvqu8TLhj4NJw8e4L67V6ryCWxiRX6QprZWuw78d8pvY2FNgJtGxWsoaKvBEyoGBVATq",
  "key20": "3WSbDCKFVifQs5rHh6tsYiubEZxZphM2TXLVqz5VsM8Wbhxbej5WMpfCkUHKrf8T759Fh8PLkC3s8UZ426KMWzvN",
  "key21": "2fTdXYhidrqNSTYnqGN1QG1rp1voFjtqBXLqBabgFR7sP8XAadwuTUYRRP3VdJWE9EwVUX8mTqPpxvwjWAzcwe8Q",
  "key22": "2P39HdrytTxNfWYQX5cfZ5EDDSNSuWeZGLb3kxrj8cdQTQ7LrZ9vKeYfx2RwcpKMuFzTzzqjLRPWQ8pyzG7kjWQ6",
  "key23": "2EoUNmXi98gREdsooSRiEeM5qFXf3b8e3B9KFNWbUE5PGN6Tgi6SXdg7TRbdk65VYvJr5uxu38W4U5jJVxaLcF7e",
  "key24": "5HW5rZGCm2qzBsubm2zrnBBHw5fsmmRFHxkBqydwVgH3tcX34sDnLH9vWMUDZ1eRANnWPyr6QmbU7XuQTj8doY1C"
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
