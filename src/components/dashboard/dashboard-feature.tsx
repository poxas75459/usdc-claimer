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
    "BNLQLkBxnVcHoncWtaxAV1Bc1zWwrcqSniq4whQQTfT8NURihYcfkcPT5NE6hJtmY6eybb8oyzJLvuer3BPgDnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Z788KPD5s6iY9dMReSHQHM9cPcm9BSfgkCsmYvvNWGKrt5cAAuLqwK6KzPji1cmVSdgZLfTT3nLRS3kvkHpS5b",
  "key1": "2VcNYYrrjEdZhjEr1jHrTXLEmaEdBHSeRnGGdqwAxBSxgDwXVw9FBSvZmRzM4JLSuPVfsC8iEH6GudVcF8RaspPG",
  "key2": "4aiQz1eracjCqBpYckbvvCRDm7JTTdfYpZ1Kxgngao5kvqf6qCB1aDauqpTBeUELxLYeWg96kPMgmDCLJuiVjkJc",
  "key3": "tZSFNKaHbEACRwcDkiFHveyfzZqGw37Fo2xvkKXbbXHaRBh1h2nY5KHy3aTfJRsSAnFwxuWYnm4pVVHpFv55git",
  "key4": "VADLjn87UaBT61vGD1dgDN5BY6zMpgCL6Gk6GTurtqGo4EWZZ4oHd9y1xM1zePU1Wz7H6fY7CJiNSYLLU8ewE9x",
  "key5": "4EXQdQk3fFGWP6tBUPxsQG2uEeP324BXepb8ao7PfpiCN44GApKcQ9X7yvFgoYe4HAVRN2kjZWmPZuJDD5nP4zuJ",
  "key6": "3reTS336c9Ksf2BbYeRkvNmZ1ZELTf4EbezvZQkSP8urbaZ3RkMx1w4YKhCTejnS5pB1qLYBc2JMhZHU2WuUuqn7",
  "key7": "3TteEqE1FT9GzaQCFnMSAMgsU6cYor4TJJ5L3ovRtDb8chH4Ds3QaYR45vcipXWbjG7ALcHw7xHHDWZfiB83W4ZU",
  "key8": "wD76xJJvEiEniJNo9Jt1toGRYNTkHfmYXyxoirKLAM6TvaCWyDzg2KVTjxCe8iRMq8tq39ArnTsKpt4VKGPc9sb",
  "key9": "5F8KPmrHLUeWq6e1r9iKtxuHoXYj7hEt67APtomhQBhUfzZMnWTo7EWnSeDpP2uraPE9c4KvJzoTaTj7sDiBHt8m",
  "key10": "2E7YMmwvLePnw39BW3C9nACGR4GS9BXgBkkNVHWX3b9M1qVHQqeRjZAdgzX1NHfJHCa6cDz6YjbQQB4qmW1vHMpV",
  "key11": "i1BJZW85aDQjn3Y7kHYpPqrYwhHQX4bLhKKyCGTohcvH5nnRCWp9yzG9gMYVEz1HviJptAnNn2GPbdrUSGmCt31",
  "key12": "33NbFLxvk94RSMivJgA2FmHdcJ4JE66QSievBReDQoKsi3NneYbNMiHVgB5qnkfim6esroSQfuykLdMj5rg46txJ",
  "key13": "4YGzvMS8CcS4rH3N6beaL8aUpNw8rA5c9YbVuFa5GWw1sh3chKXEUkMfbYGCzix3ZFJryZs5wQRS7j3cGkyssTcJ",
  "key14": "2UyKAEsCWXRYKEJbrxjarnAJGSx8mv6ygrE6pbMCs4NAGiiQp12Rg4LrDbBEZn8n3svFTq116qrwqoL354XRe69Z",
  "key15": "2TSNTTqFpjoqbbd3Fiv7XwUFbD8rGNhiCXu9dmFQALnneoyvRZ7c2i46Cou85iGyozvdBL5crwmZpqTCWoJUo5zw",
  "key16": "3Emynh8jYUQetvh8ogasYnyNbwYL2uFdZDVXeDrc5sikHrEevMGTrGt2uthmPUf2zJjBaocccByQCjrgv5Uak3D6",
  "key17": "4bAEPWbv8XZqzKLr5eGfoijL4UYHUJXQ19cQtoHWHTD7LjNQgkNMDuxrZjHKzfZRkE6jB2QKUEhKVmGBPeL1k6a8",
  "key18": "nR7CuvGnMaizy2HA2pzYiVdAp6pYGi25fYERot7rV8nTrNcCD827bvx91zmjJR4b25yMbpJzEg2ybHgfRuTPVaR",
  "key19": "HnGkPm9hGi6kp4R9Kwm43SAikCwdDwmt7FMnZiivYK35kSJwwVxSuzHaX2wFgxX7MSRhfMTRKVkDVSRyXTerESM",
  "key20": "2pCyPA1EPn94hUuaERwtRbooFNhc5uSYNdNV3NL5QrgdyXfj4JxGFvs4MXfDNeFuN93csXsSRnEctTyRzzEdN7Ky",
  "key21": "5dEMoYCZ1FpPf4MnDocrF7fzpGYDTwTAQvAve9iUWwkAcJqLqJ5poCxatZscLCutyUj7YeouWkZtEJrRtBVdTk5w",
  "key22": "5Zov3r37HZe5c6kDfe6Y711vAr7cTDXbPVsGrjsdN4Mi3VagokCjPrf2rJoso1PaaMBoCuB5dFUkhniYUSzuUeUu",
  "key23": "21GWerfLPPzRFPFJzcQKcvn94LkPpdiN6TsTKMVh8kRG3RPFqYzwRjdguTChBZKCsD5xkNqMKZdiWJ1USVNXdtHe",
  "key24": "51mbtUoRtuXY7f7pwytrpkBrFZGDuXpvSuengMWMh6saaDSWZADPhpop32jFBS2EpQax46zaj9AXipCXKgGEtXAY",
  "key25": "3MWMmyqVpVRseaxSh1qf3vQTeX39AYwX3fWJeHvNAWi4a3qusYdZqXGkwjwYeMwcvHeaPgNWfZr7dBAS9UG5bZ27",
  "key26": "3bZgct6pfRLVLBrTeFmZjWGMYTgKKRTTZU4JaxnBn9QCtQdWEpTL2XcdqLwtunfnEKWD7gn7TMC9BzBfafvV2NnY",
  "key27": "3Mwm68KL4xvM7cvycZjGkFfqnUqVtPZcfXYuaG9QyV1EZ22KqUZFJRtBD2nV6Ba3BnE477hvZqo4yr1uvyaTWn9c",
  "key28": "26BjyXTy1hq3Mdx2tkXoXb7SXR1z8oRGkFdZQegpkViFmDnN3B8yHmvaM2SFgz4V8hiyT7jhfinx7t88Rjvymd8b",
  "key29": "3ECtTd1zm1aRougsTZcTrgTBdaawiTctgnuN9KRAmuRwNsGBGiLrqNGmB9wGAaGTx4GqvrGw5vKRgeLmYmFnNeav",
  "key30": "37BoR4AJwQNjY9RLR4YiH9Kt8gBYrQASz7r7fCAaDMiKvKa4ts56jdnoC8SnBCGJCGoN139ufSqT2LzTvut6SANr",
  "key31": "23SaAUWfLMNbmjnThH1Lktaoh15hXtduAr1F5LEM3H3SiHr5rHzdSdua46nToeff7taz9fD5a92dqLY4uKW4KhXy",
  "key32": "kUzzZLSEtSiGwpWx4KJzFCQnwdAdYjvG1UN11W4g3W7odhPDDwgf5QkBYMtRucf4aHfEAW75RqK62zkk4vdZ93s",
  "key33": "5QhfrnKCQ73jk4XqNWBFb4AzdKXFvRbXPZHVAq1dnnFAQb9dwN16z3hKG1GzEineijuhmVupcVW4zM49dR5TdeHF",
  "key34": "2aGUdKEojf2RZpwx3bMzxi2JSwwWN9oyHoFayphsA14UPueQLLPpz4xdZN9A9fGYJZFG52dRRz8p2zScnmfabk3j",
  "key35": "41AP8u7mUUNBKDP8BzGpJmcJD7eAjkV8gvLaXk46snZnZdceYYfTtd7zyGyGW4uTVK8wveZqpuDXnpC2Ym7uzUjV",
  "key36": "2hFjAYzSay5hABBd9YseUdsMaMbTUj3D92DvN465DqEXRftj4QWvMyzGuvvvFV4EPCmbgdErNeiwngux7HAMjWMK"
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
