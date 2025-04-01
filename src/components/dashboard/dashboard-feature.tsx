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
    "29QAkU8m3R5vH964QRrEuXC3hGXrqs1zF5hPsotLYAFP9CEYZfrk24w3fCuXrthXWaP9A7tQupGEFPA6we8ZcLZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nqksNfYwKQgxGjSuNgLVBCs9x8UbhLPHPHqFrQLPTwcNc95AgzvXGB7X8hZ1Un88A8mJ3oLXFX9XZRvQmn4u8gU",
  "key1": "5zs5EeyZp8k2mTXAdHU19JaSZLmQHA7AjSqVAn8tZ9YSoXbYrFoSiySSnxAWGQct4NMpBcrE5MxEWNLUcvbxRcFE",
  "key2": "2FrhKqf244jAPFeNuCtxYzTNgaCwAuZyYbshi7irXuVMD9sWvCvvE4ytjSCg4YmxD2wtTtEDkHD2mAJSv2e8XydN",
  "key3": "3U7z6ZZ9zWTmp3x1yDPC4ScWu989r5QBWua827uq5M2qdjeqUT2hL98Wvs7FmrFcmQHRRiEFxrEuR3MTkdXVsQ67",
  "key4": "2ekyGnkt8N9hJ2uCc3y2bmj99z9ij49J5EZvBx8eqeB3c89tKm58mpK8LQSyJaiezfxdAvYhkFHUPXWhphtrpo2e",
  "key5": "4zRD7eCzB1KQrpn6njTHbS1xMP964mPqbeynK5bafyt7UFG2gCpbFNMYjC4GSfnKBjgUm32cV7dmZ9R2eyuShgxf",
  "key6": "5RGnpAKRmzwzNhNmGXBnfzW3HVS47m1wFx8ZnEovhCMMfP4gtruW8bPf9m8yichvT97GC7iYtEFXeja1T5E69zDp",
  "key7": "57oKXSW8g5LhyavooBqRVxDFJJfqQeQJGaHwBWZnGHFxQLW1eqkf4osQKgE6QFaQmhih2ozKQTRKq7zT2ebxz2mj",
  "key8": "mHKbFz499hqiCMzrWD2Somn2RsWCXouR57nQxzHKBk1Z9vYMxEuaZpXB1M2JQPsKQtrn2Z2GKRxkNGitW692SuD",
  "key9": "5APpKSHCC8iBJwK3vzwU8u5HFSgcKcWhDQpvC1zV3Qx15huGaj8EbN2d3wUeqNi1aQUGik2Z78GLxAZnHYqGSkcW",
  "key10": "5iBsDYfoNfL7jutTGcMAv2WJm43v1MxeiTHck1LBBqJFQh5gbVUmWpJhhWQQv8Ah9u8MWKnbwfXw8SMXzxbz7gF1",
  "key11": "bf1coj5PxWakPobVSELF5eeZdq6PtbfpJEfh6wH2rKYeVEfww26YNFNZXAc7q93WP1Tt2Tg7RKE5Sge8Yue8gQP",
  "key12": "5wWQ4XFpZcpKcMQ3mkAentGjywEFMbGr3YFxppbseWYhBDx1me5JZ7vWHYkadBTyjqtsTTduuy3j5xp7viQ1PRPz",
  "key13": "4xqDrXny1Vod7jooczq5mXSXYxzVPsVMKuMb5iitqTxLtKURDvrddwRFVxcpd1dmiaDPUtiHWBwZCzzMGG8Sabzr",
  "key14": "2wEsvZcuYZMnypTuLRcwDBnDvKezwZoe7PXNf5Rdc9KBfNkh1YeGBriZ3NvXQRdFTNHzkYA39UF1CiBXBrioYWd8",
  "key15": "54YKYFYDW7y4Vs39xV7vBiLRjJXnGXDycGfzXU9pzie4Yvh8jomomguLvsi5Dukv7TSXaXDo2qLYqjsn21GoMxnS",
  "key16": "2JDW82MY28zCQsYV8kSUUQT2igvzZKNPghLL1narGb3yANxafKPvaVQVVMPeJ9v8svaVfyQaK4kFF1rdRUZYDiRe",
  "key17": "5Qv41QRjZUGnFvrDBZuWhABcY8ncHwe5WwWNbK1MCnCx8Z6E15X7K9cqciVscqkhVqfdrGxSakyKhz3B4kARx8y7",
  "key18": "3SRbabhy4UZ1fAFJrd3FQfCgusbLaLnYpCaN5fGjcN8Muqb8yr1fQRy3i99uKT2F1KgHd6ALC7oyQhZR9nhv7kgL",
  "key19": "NvX6F2i5ZxnWBLbK2eKpiCRxnhg1j5HxB9hpADW1DfaVTJMteK4Qn5fjzovgyicQt8jynivsnf6er9Wjnrcr6mk",
  "key20": "5Jr7G37R5wp5K9CFSYnW3ZUQqjxj8hRDScZU6cZDkYKrGS2hympbvgD5K7EnwF72Lmo7fwwYeCtpvqFAib1TC1h3",
  "key21": "4yMkZfnpyeCppVSVrcNjB9Hf7nmT4mN4ecVSXQDjwRLoQQDG5s2fVsqRJpiJGw4HphuMdQB5TWpuBG96ZLnZ8NKu",
  "key22": "4S9t1Eh721dEvGuVFmnnkh3s97zcfaobAsUX5fwcTH3JmbjmarS8bB6vW91mEEc8HDrKEwBVpCjHHVb4JEzQqYH4",
  "key23": "4rqgLWxx4GK1se3PjucWPv4krseRsaKgyaQUNtDvCvMoa51vANbJx6h2NZ55ZxB5SkKk8BLawCiumwLjwRExKBrt",
  "key24": "4FMjJr8hcjUA89bNRFCWfmDGA7acxrgZpci2UtpvcbpZmdF6DLCmRHitabVk4hSUcko3kWA43rYG3zThBoSYPQvL",
  "key25": "2fPKje9KbogZHQjkZKLkzWUhezhqAneguQx52EUNvrguDhBKL3eUMZerLy7gV1oNVccEj4e3ohHVpyaG7pDAfpnV",
  "key26": "3RwZuns4QqvjdtmwfkJUfA1DwcDHuLmwi2DpzpLudMbit5SvxZ2hcPJb2JAQPpYGqSi4wnJHxSaPPdyeP49g9KH2",
  "key27": "2fYHM3DdNHa6nPtE6W2KyfUYkZBcc7RCMWfj2Td1hMjrHd9fBD4haxutaUbEeuYp7NsnDpJqBj9CgUp9QuP2D8CQ"
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
