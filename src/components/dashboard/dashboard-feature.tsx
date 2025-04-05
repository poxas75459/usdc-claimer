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
    "5GPnSdaeNxtg8iq83VgtfBA4ei5LbDxPnekGvxKRzqCMt4MUVjcWu3PPiY4Zfga49pvMzwgHqM1s53diXaiDnwaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dXjpwWgeJWxuUiGjDaWHdG3ZZ8gPvLY8mZsgo8wu7rjrSwj4R1pLHBCj8HUH3SfzepKdTviJ5Y9K99EYNZdt3YZ",
  "key1": "HsYpryX12wtUnL1JRVrbVYQwUhWwpLRDtqKcTMnhuGnmQsNiYddKWcp4Wsv5F6TLq4skhmpxwspmfJnzu3hMkGY",
  "key2": "5dBFDG6fv73du1AUwfFRCLWM71zwKHi4dcp5Bs2yEhDE1dk3TayC3dgoQjoGHcr9h7H8UALxgGkKiaDZLR66ChCq",
  "key3": "33SKGhcW5L1JjiNsNT7HJqgTKSBHfqy8c4JiPTuQGboKgtwhrWSUkkns97PoLHfKBikabUcYQ4fkSwNkgKGzyXzG",
  "key4": "2n1xi2Gi8NYc7t4RZ1D7XRe4vcYpm9DyDN8M8gdPNizKv8bWVtpKyHfdhMGtiV7UkYZZpCUPYQm6U2DM3Xugsh5d",
  "key5": "fyLc7GAwjMEuyzeFSPDUHsKP6jZurTJVv4cBsSVCE9PpsnS4hvV4YusA7aipyCR7gBHs5hfTb9LNnKMPwdC87b8",
  "key6": "41KnRxw2LqeSctpxuys5JnZGAYMH8tZe1iXo8BLGwzThd4PDLDc1nirCN5gcYAhwdjKqgpEhKUsxUSARjnpt9Kxr",
  "key7": "PRZMr6onmURiP3hVkKSg6YAtVDc7Ww7EWbDWCF5RuKyRT4pCvpGGp6AnWDSBr26j4MDpxwb3hHSugWcWYU4Zz7u",
  "key8": "25GBQBdgpKNvqeXoqmvJXc3cBzdsseQZfQRE84q3YUyJtLJTaw6A2xGEHxNGkdQA3bzMxYgtWAgsk84Kh1pPNE6F",
  "key9": "h8jUNrh6rvm7Q4XfwWLTSfdDfJDQKaCMWME7GHik58t2Jvi4C6LNRuMZUcwBcMounxx5w9GRHscoocmCXUvENvK",
  "key10": "3yC5YpseoegnpsXq2gsmHhGpTZMtQXi3b3BhVUFS4ZU3PfF5AXqgRwMDhg2JGzR1VDLwivH8W2MYC6BtzwvqCtUn",
  "key11": "2i68wNkiLv1MzNK3gzGsJc7GBN6Me9CaxCS9EucqAkvLPsDUnRZBKzGASfwXAz2q6Q3vY76MHLG9vBDDz7zfQs47",
  "key12": "5YocsrXEn2aiHt6DZQdidRggMb1psgPKGX4KuPLoMfCgJTwVx9YpVboGUnkeEGG9R4aTkEcbbNNKeNy3MWN7msxE",
  "key13": "4VW4NoXXs2jZsNoJebYDRnS9VwX5Hp7SBbgf9UzM3ur2KpRidbfxv32vpeRjW5azQjzssq9YwKWx7k2XgJYt8251",
  "key14": "2u1Bau6oXQMZfQ8Eh2L7GLGVM2bqK3B5o3FhAC9fX9HpjYxNgfwHM51p2BmuSrQqfj2tMpsgUxqQDBhauBRhW1au",
  "key15": "484LcSKtiirqk5X11w69ZThJTcdgooucTRAMooJScVYSJwmWgmoMieMgSUUkSckf7c8Vw73Jjm1SWqNpCXkicjvo",
  "key16": "5hpLoS4dctihBXE6N3pyPjrTEgz65XhhionY3xrvNU4qwARzYy1sgmZDuE9CBwJopW6kX35g1MgFSSK4bbWmQg8z",
  "key17": "4iKuBP85d1izKQQ4Ku2TsEMRGpHUNUHw3LBqkQTv7hZ24dZRiVuexvrDAfHJ3zsr5JbvoezGvYAQ7d7ugzvxeYW3",
  "key18": "2Xsg8jG1rHa4XF9Jw7x1u9GxoqFddiHxTiAsML9nEXy5Un8R8tfAnJW2iZnvVi5EVoH2CMsLRhzxTvjExdtos16Q",
  "key19": "ug8YSVdHzvsMuVK7QtpDwjDZGdkFfFNX1PSbQzxkyxD4GvKJKKYXekTRHdijVLKyzrNNWNnHqX523iYKncTT3BD",
  "key20": "3LNFQRvKokass1fdSeXdFgH8r8bxsNU8jau2Wt4Y6wG5Xs2uvFT36azY3NG6taoQpaHWfcXRp8wzQ8AJffNkPF9n",
  "key21": "HJjP7Ttsi8E3dyqXvuQ2PxMSQWN76UmgehECoBAnkUS5FVdMby879mvaUtJstAakqWs2HMA7L422JyowQddMLtn",
  "key22": "2Q6nR6XjXqakRW5StEwcgc8iJ7Kv8XcfJNk4uCUHioNy4xGV9Y4qALxHrD9FAUVKy6Gg8MVBwPyLYNqGdrLvEdAX",
  "key23": "5w17oSszMS4RNQtsGLH6e5jx8Cn3KyY16gJo5L6uzBN7ugmxv4hyG1Gd3oLHhZY5wAcJkEqToCNeEjPXvTGTvGNA",
  "key24": "2GcZWmGZYUrF7M9Y3aZASZrHyHmpUQrgmLJAaVxpi4vCJJ6kiNpWgbnxMZJTSfB6nkzv5CjqKhz7AqHDixDJWgMF",
  "key25": "3TmethKpnHPRWAAHXeUbKSq22ZkFMgzcuT9KTvUrTERm1GsFjBXU2HaeEKKzd21zkfoERFAF2yA5QSoXNxpffow7",
  "key26": "62qw4fizMr5uV8dYpJT98JrbCDNnVmgNmFjsi5rTjWSvCeXSMPhnqJz6EDKdoAAvF77d9NbJCiqKEy6fUxHS2XYk"
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
