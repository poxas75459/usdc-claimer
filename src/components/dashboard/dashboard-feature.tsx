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
    "2V4u4XETLPCMZLNPEXQnzPcwYEephU1CNe2TJvy6R3tk2VTJ9tdv8CjDYjLZPcimqxsqbS4qEdDb6ZHW3T3sUJWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SqcwmkAw1DJfmpzRo8aPYe2LW6wWbZu69mFPTYBrno7tJtXuPSk96AvJmuYqnWVRHhVmx2UWQ7PiRwWWRZLKrd4",
  "key1": "AC4SnhM7KbXuoeY5LZgkA63CQUmzWCpaztYTohKSMiNGW2ohbPFeHxevexeFpSQ7WDKGLyTB16AMYPmBLQuUxPN",
  "key2": "4fMnD5sVztoi4hmdAm4aK49HJUdQL7GR2BRP9NNahAjk685QsW9SPT4gEDUdpf6F8oGgvjeK4Qnjw6wezHkSX9jb",
  "key3": "Z4hjBSEo1GeWEqg3TQGUHQNcctuyeaMcvaHnBV9isitfN4dCs3XsCY2kHS6QLD9QkWGjvK6FUCUBR5R4VJBDGzf",
  "key4": "4WLQAK25qte5BL7urkj5v9VYzqLBMhphX9AK3nPb5v5WjmLeXLXr66ZWpwLr7FqsnWFSwBLCReyEkjNDEo1ztnJW",
  "key5": "4KuVhJWMFunJwPfczTjkPZBHbXs3ZvZcvnTeTALGA7QUtyneHRkgwJZHW5h7CSY5DXoJpH1dxHSkfmaftnc5n55p",
  "key6": "3kHbaFkhJqH3CZrgEenzQv5grKiZRUofQCQ3yhb3SqgnzkfqjgGCLBNPsQZdgUzUeRDW7ZVCAkDER3uNcDtDzmVV",
  "key7": "3iuM5BFtjJ2gwV94xR7vu5nYuHcsTGeiuYGxTkJtZW6goXEuP62ReNTCLYzHL5cWs6hwGuWSnoNoqVMxcMeEzYJg",
  "key8": "2uzkg7nJ2Y2QJ1BEn2NoM8PmfBbJRJy2jTvuVY91qN1fstDpZHiYJWKsmWCeysUbm2ynJGDGMS6u5CVnuoD6XFjc",
  "key9": "25R2GBqM2GcqujGwFXdFmmCUzguwVvUL4gFhHwSm9VbF3GmQSTaieFaRYPDE5dgEjYTiQJQ2wirX3Ze9W4CEBsAX",
  "key10": "2dBN134MnY5g3AP1C3vapwo5g9j4uJuYcNQ7tRd5Nrr8NUxo3SZKG5UPfosaRFc3NMmEFMGgFbNct8rfRDFrhRDj",
  "key11": "2h6MMktpQMEbaMxfNW8QLaurS366tw1uiJq5H5bGJc4EMbn58oN6Gf6TMxCkxcsrkQF29dJW7qjdM8PNKsuMT5Uc",
  "key12": "2UeBi9TPA83Rc6N3cj7a2qcieVQVaruvGnj4qa9mqGXjM19aahNp3BmXWmgdDczYW6FBBCk1ZArzS8NHV7PDznq1",
  "key13": "5GC2FMUhi9GcfVSX3gXrY4K7yrVyZWhpdFgxT37diSktTACRL4zU6RHLVLVniWeapvXUd19tBNzo9cvq7xaggLKZ",
  "key14": "3cmazYoPUy6LM7siojT8WKTBUfCx8SW7jBtDzSkYxSK7VJitEtPNRAE3ZqA3UJmN5GDUbPwsMbKJkDiihdZUv4dT",
  "key15": "4g9m1XeXHEvQ8kW7XYaPMiY66uedDk4jUnUF45V5nZY5LpkPaCmgUNXgm7FBPpCKvM2B3RfnytqSCCZB6Wkv1t21",
  "key16": "q7Jsnc4D8SUMYV57ijTZSd8popkDU9aRWHuSxyT6Num26hKRMYKkd3RawkAuJTKhicCjpsowwV4KmpqDaL2Lw6e",
  "key17": "4ETpjUREbHrFr5N2UvimAtsPBW3xHnfWNVJWpQ5KjArLuu19y9E6BDPNrdS8PicuovCCcCgeKXomYPUgGHjWyiQi",
  "key18": "23Wz6bpejZGSJLqsBbSgUa4tcbzWJWMYo92pH8s8TqmQiMBNNRfj3i6x19AV2cZdbx7wiK1KwPArpatVD7EbwVJ2",
  "key19": "Ev9r2j6reHm5BQ5ZzPz57AdjXHuzn466BkLveyH8Cp3kiEvExYNssKighzsbzcvsx1ArgCdeCpzareb5jEVHegy",
  "key20": "5cDoHq5DHeuWUpPxLRbggzfd6MvziphfyaWHYA6KwRXYLhifBt6Q5aT2GDX9kBfvxsgQ5fUHKA7v9Hon9q4kwnXx",
  "key21": "2AYBVGzsfQfMQyE6WSVz9fxFjo94ccv5PMEYZ7xQYKqFKGzt1yXdH7ktdAeVPAuFpwoKCP9F77ygzP4vJMdbiQ7Q",
  "key22": "aQ86zcoHZPyatADx2wmYpr3eLHWAhbpZWS25tHVkwBhv7Gydmn1A5ScSsfzwm3iLdyV3rt6LXAXaFqkVdeVgg3S",
  "key23": "1E4En9WuFhc4Bb6YCUYckfaXBByt2w4HcEinkABbQZhFtoA7r9TVELoCW62bwMaZrxV4oKq99UDedr6R4T25YB4",
  "key24": "3v1Jcmn9zzidxaDh6VgqQdoBA8DuwHJhtbPM3xNxBYEFxBbf1sjvUrNXfezBga4i2pgACfAzNhKJSw3G5aRpmzV2",
  "key25": "3v5tmMBiCnPKEuTLhXA34cfr8vkW6irXNRdS4TA1NKqXr8uGVKUcPFj7toPZevpnwj6zLPpVwLoKUgmveDaXHAnY"
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
