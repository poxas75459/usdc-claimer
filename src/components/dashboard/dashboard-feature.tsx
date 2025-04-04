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
    "3ia72krsDaQTHsN7vp6y3Cmc9FnEXN7ArMoYR7ZyBxiDFNwoCe8aAQr3JwyCPFA9jVfE7bUjyUdViFMtoTZUdcxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TGmrZpzaPc9fnzdiP8LYNjpiAwgPXJED3FkGU9knuwS1KCLr35FhrCKe4h7eXH1kP2nAdmW9iHfGpubbBmqUZUX",
  "key1": "kB8SLCHSmQ18xWxUpvjaDracggxbgmHxidJJP16QcaPjqsXK4RDomnUzie67UJ2NHjaTTtaR6VuHwwbUTY2JmoC",
  "key2": "h5YQsFNKKAHaYAUx1ahFmhkCvQtMoNt34KvG4TLsH94tCDPRdNcxiYSVdDp2EbS6TDp2rd3Gk31zSbpdiXXetZn",
  "key3": "ncFK2m243gYwfGywzvmfKE6M78qYmAoFWzJdQhmTxYQFYgaKSsR1s2SWQeaTrpJ184hznqKXj3zrMZB2cdRrLJx",
  "key4": "4UBerkdEbWESpwpt74gRNLZ5NS2MQcLNB7EiyzdxbvCsDZPKMx39NRv28GNoUvEQW8s1VjzjsdyA5kKngsuai1Pa",
  "key5": "2tLcfXbgHN2hT7AkfHXSzM5S1gRxCB7AwxVCFsccYcD53PonTn9Jxifw3PrzkqHRE5VgRjPfE461xG9QQ8FUwAMk",
  "key6": "WUiF4TDihHYX22K3djC68rMNzJKmCHZTejfVx4DT7fhwr6jJD8xPg7WrhqWB8rpAyy766LgNitc5JxC4FLoqx9f",
  "key7": "2UWJnz7dYGPJNRWGKsCGGiYii927VsR1gWYZHLU5aoTd6nz6vtyzNGTdSeu8ZuNjPHC7pnGzgdWcWboBAdi9eW5m",
  "key8": "3eQSjGB9JEBnkLbeMBv5RCc2iV65kzu4buQfKrVAmW2ig5RaHEWeoQVEh8DdUj3mDpdFfXvBLMVcVqJfS1tZ3uQu",
  "key9": "5fW5kMdtbdkhbKsG1r1D5ALMZSvYLM8vJTK7uJ5ZXhJprc9AXN9ahHRfvUDtqJxeWxrMtB1JU7TywzKXRWsnpeYC",
  "key10": "5X6sTayQdStbdMb7wHRZH5pJJ5vEjY3JV3peaDmRyJNzupB99vXWzwtN7iQ6MnyoMMvbMgpN3Xr3SXmEPPY9jPfq",
  "key11": "2p4cSqmMWBZP4XvnmoT8n99z4pQEhamLBpRyhmw66X7YBMU6AJxgKYTCsbYwghYbjY5AJbjdxzJ1FHZNWV3sUizj",
  "key12": "4MSUrC2txwPsCypf12X7k3gEFo4TKs6FNnR6b41JP1iZV6dHPCaDxxWnyJPsCQf4LDvPbEvXuPiPYSVNe4M5VBsM",
  "key13": "5SetWUMTdA7iAKeAWPxRm4SRtozfdvkEENVjWacaLkxXspfTfbCDeFuKiHKXeRiVhoqZW3n17edxzK9MWAz2JYfg",
  "key14": "5Fwtu8pCkMKx23G5eCVToid3RHytMeEA6ji1B3zUVSBHPYjUuNVEYxThMLWAjNvxkRvpWkBrutrna22DzTcjydmS",
  "key15": "5bpqVCXHVCe7dK11ncnXBnPc4WwKSZHLnjQwJRxB2mGGF6L2t3zyCuZNiaC7W5uYWgnaJHQVMCyetrPsDjEsW8CG",
  "key16": "5uxSyE6BZRDodhQ4Pe1935WxrwqqaLCLGNX24LgfKZJ5zcsP5pR6Hdq1B9p78ycTMPwnDBXWi2y96LsvZqE5Wb34",
  "key17": "4BrewWDMAvujoVpirghv487eTB1VR5DNLjvnt8jDKAjuGyHonck1d24FpBFYqY9Gjgys1eJwVCynDqrYeHE4RjFp",
  "key18": "3r2eXyWuNhcvdJRf8vxUQyJWguee2ZYzVH8NARj7PuQB6zz7r8r2a6ebSFSfk7yDadeagh3VoruZBk3rHffrdcdR",
  "key19": "63qhTeKnq35tBA1nPNQo2jhsQPKyak7pgVvCDx3g1RjH9zMnf8dbAtZNAHUtp4rf9SvZuituZPeNXgBphGnVoBPK",
  "key20": "4158ozZ7jvsrJWHDfX1sQYh2Q7J6CUEXw7zYBTqv3VsiCj8qS9mFcwk2UTp91HxAYtqAhC323FY5rJ37yHtHKMbF",
  "key21": "4bhM6bGnpcMua7BK7UxzkVi6xmaurjjg1vCc9fjTkjNaiFvh2sL1QKQpdVj1SVhRqoqnX7nQxXLFCpEZbQG6RYDo",
  "key22": "2dTgFoCcsFqJaYM9bV6EoBv13MVFtLBNsaGH2iWSnbq8kF3ehPUsDiaEnGqydzE6EjHL7hEVAJkkiovDqhWWan3g",
  "key23": "617PkEPfuoWJE4EwDAP8zc3SkavDznqSvffyxqXwakhEJakcVFuQTKitksq58cDUgx4BDUqu6zGV9e5f3NAMdyZn",
  "key24": "4rStiFELM7h8UKE9WQcDBDyzn9Nhx5vQSs754r73YhjmYxDJne9o3pfVY3vDxySLq5xS1jk2Q7W27onThPFVqjrp",
  "key25": "3HzAHQN65wpgiSCxtTJHfTSnWPGdnmkdMGE5DeWXS6ZoSgd8UdKe6sHCtzcXMBZQKcoctswYUnohJwYXWEp6vYmc",
  "key26": "3UiwQerM6oQRHvm3P4TGjjQbrc8wUtagdKT58cGwXQJMve3L714aihP7dBbZ8fHUor3HDwMQ22ipNH6iDLxV8GJ5",
  "key27": "4CB1eTwDPxMQnHQtVdndh8hbGQviyQVZTqktcT3NtLh6YeGjQnUkv3y3ZF2q4D5njFAsDu2onsL1JRtRUz8CXmzF",
  "key28": "42XjvdjUhTSm1dacF7SYvxfdMWfKqZPKKSvX2s3DDuQt6wZSne4ATAHE84mQhiBGdGUvYyBX2VHXKvUjBfnfwcPu"
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
