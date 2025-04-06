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
    "3t2kkqGQ4VwVAYGt1YatVLygFDrHKrYpWzYXKboiMLEirFNhe9k2wVGqj7H3GCe26aNyEw2uL4pRiyTP6ekC5DQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hb5KSvQqCShXE5XXqAWCqJv7YBCt9QSG7NCNm5bxTUnhxBVQw3VUjTyXdkupqV5LyxRu9ayqiFkCSrWSeqf1r35",
  "key1": "5QcaKZnzoU219ewVKgz8CYjZMYixJ198pik5YZYQ1sZcZRfDabhWhmNcYNBBVmV3YKqTBLrqtiMUbJQEHWfwVSMg",
  "key2": "3AKJok8ejqgqKcySmRf5CpEZZA5Fcr4fmUpqBhqyLuj41VZVmxPLBcbJfCTjqgHXVju3qxLg9yQ9TpD9EVitAeTD",
  "key3": "2cGWWKn2BcJwCSSwX9xb9sqWWPBh2wZeHr98m2fWRGi4fc9yhy8QJ2umA73WFxveUETguQCRbPgC37ZEdyqfrufh",
  "key4": "rt928YgP8FT8Jm9wMhm2NLjY3DRHTdjWVvngLMw6JYGtshiakwLvKUmkwmLDbgebJjVmpMrX7TGAionKVBLkXoa",
  "key5": "2xXSSVMCwvGbSuAC1k3tUM6iC7rVnknYyhWZH1UmnNcApy8VYRXLH3dfeMQGR4dRNmrWHhhCrKZddu1Yg6WfLWTD",
  "key6": "4DGYUrcyfYpSGCJRj9ATSKBTxkvSWhmiMfTxWBTdvWTTNbmteuPXqpSFCfb3RTS427ue69n4m18CAHkD3GaVyRkk",
  "key7": "2TpaURYgAzqHppzpKV9qAcrMjqCCXfoFxN7VAh91AV1Dj2RARAgbWVh8jFtj9a9XwsaPUhytGkbQvFZHZtikWC1y",
  "key8": "3gZS8HyBhqDnnhAVVoqYZVqVxH94E9eshaLVdnN8GrDshra2kakziBFPwRTwSQ7omesuV9AzdxAZU1Xr5rXq8orU",
  "key9": "2XQFfuWsMRJrnwFhaH26fVa4Gpmm3hfFaeBTEjwNAuaD8dhknmTtyWzVwb3NeetJU3jyN4UMZARZ4Z4Ycp1XLDg4",
  "key10": "5z4G3GuTG3bRqSdjbNupH1JdwqweZPpyRVyE3cgTufZfrchHc3Y9LZ573CPDpYzCY6pTfDWgJ26PzkbNwcP4Nuh3",
  "key11": "fjiU9aFxDCi1PXpQwCiMbKpRPqjuBzP9E9w9QNmyMkXEXD9t2i5hWJB9RqBGfUvRLENkbYnzA45nx3JYQ7diMmu",
  "key12": "3KXeHWs2zv5BQMb88FXciyB4eikeLcaksw2jhHpVpEeV6Jg99viwYdgUqz36iHRF6iojXLWqm6crECqa41r5RdvT",
  "key13": "4Bxm8dUe4rqCotsxdgqK6nfoNhdgTksVSxauP45kNyhPcdTFshkd8jdp511RnZkNgqHWcrJpGEat4rnwQsrBhNwb",
  "key14": "5YGvSmNA1sZ9uE7nJ9z5ggr88YfY7PGtfKWiXcugvEJhp7ASjTY68muqrJKmJRpvi8fhzeBSNgUYBPzitgfGqePz",
  "key15": "5fwyHAVefNxv9JAv1TGYSeiLjuWyZ3wAt3bqEuUuA9esfaYVj6o5TCYGLgr7fboDkhLnu3NFzQ79yCaA5V1U799k",
  "key16": "WDzbLJctuaTJRSxCrMoq7JdNZbSCcYucdxSew87HttJD4JZThaKeyxeGQ12855LTJac25zrFisU49dgzW2q8G8L",
  "key17": "4H9ongz1VYWKqtnpKSJV5k3rQFCFwLHcawCbyRrzhKCnrG9TGAPBCmWP4wdF9snYPsnVKZAdZguZnVfyeuoWeUY",
  "key18": "5BehNEYEJFqLTmWopCB3Qbsm5evxJsHmNJBTTKFt6Xd64eakasFXYqfChpu6jvJSrfwqhFecRNp3xPpUETGKEajA",
  "key19": "5ZW6egDSX4Np6nSbMJHGHzakRb6M7tyVPw35fugyBCiuqHPUrD3KbH6AKvg8sUprY5B9anPmsrcoLpLjq3bfzUfv",
  "key20": "Fns5LadHQPp4xmPHTamzrKa5KdgwNxxvE7XnTtheLfdKU3NgJHCzirFkV7uDvLvBSe6i8C2AALdZH7EBrHhvh3E",
  "key21": "didcS8QFkASwhSxaQL3JfsyyXiNBRwkqewfqA9uz9L2ENs6N8P1LhwhCqgZkjRkHgJ9FaRonVabdioiB2tk8YWZ",
  "key22": "X7FLgtjzEGcpz8MSYDqhPcTawjb7ABNTi6d3SvS6qH5kD6b6vb437CMso7vDgmSXLHCjKtmhtiE6uNBYfMkVQ32",
  "key23": "4BTbF3ebFuZ5XC2ZZFPxTc4Z3g2HxfuMYaXbwvmsWDZh23nQjEmm1GVVF7X8Kf4dRZtoCQcphmrCxR2UuF3e66jH",
  "key24": "5TQA64JAoWAQj5ox1PGMc4G2tfwasZQ3yiayYgNTWgPzrXTsokCDkqkTbNGWqtPCkG1cmYCcMd4KUyxkgdbALfpp",
  "key25": "2h1rpebxAUTqtCL5BbqMbYvZgnLTPQVXcFqYfZkwJzbQReQpEzibo3ksB4ETma7WzGh669yk3YT8jycpEPsjiJ9V",
  "key26": "3ztKxFUD7S1s7CEXxShFVR3c3DLiQPcQgS9Hj2aNS2gRYLVSdiajgixrwCp7EjfA9idPxcsAQ42KFwDhdr58LBBZ",
  "key27": "3GVEeGYK6sVkLwQy8geRRkZEEw8DQg3BP9ofFdHf45XUbuFZd1VbrtLu2n1CszGmFQqSuygo4DibjBCLFt1DqF4o",
  "key28": "4N5PAicngfNiSBCij6snqQNcGGgPNRWJghUG1tBCW8LF8S5YiTbuVXaoqu3zkvtByBwJBEVjayDmhdNGFQwfkWRn",
  "key29": "xJdFSUHRwYAMJQydc5QUDPEBjVgND1vP1z5mgX62AEW3yKf81EyhHmsWJ163PgBLBwwHWCmNPZcwiNjaFKdAR2w",
  "key30": "4iu9UfRXjMrttkdG5s4L3bYzeYxD6fCSfzUBqokYhRe5hC5FLycnsTVrkVdaqTKxv4gzZrGUsVeK9tBxxX7mufZy",
  "key31": "3N45kAuaDr7MkLxPmgMQ7aUzKdiDNVUC2HoNVW5nzzvHV2mHi3GhZ51Eyvr8MU9A5fX9yHbdMWGepUjszKThyYHi",
  "key32": "5D99KqfZR4HH3SSTeL6uZsEEBwW2CSsqhx9dKDhKFbhA6CTGSbahKj2r35F6kPpuTTzUYTgoUfpmgFGwa7Z8WKK5",
  "key33": "4Hi4XFAB8kUiU1GNRKMFzVgxx4hxfFhuJdmTDSf4oLNFz43XCL4shnNRaSyddcjWCxjsBrND8yq3fnhmzVvh23J9",
  "key34": "3o1zREm26pbUwbpYRcd1e2pVFqHh3VM9PciBdHr3V8UcG5hmgMz82BPiWMSygv36FYphh4iYEZHgihYxsTAJEb45",
  "key35": "3uhYcRyCptNACKFKTZ96df2pgk6KsQq1F2hUCHegmp7Xbdi9KkZBo5RxWkK6kLxCCkxC4DwduuZqEnas85MnCwhi",
  "key36": "4MBx6uTFkykEZoJSJWshNYg3HpfAqr9iH6Qm6t5QCng8xbs6oo3W5LWXecTNnMJkq74DwpZmS2YCQetc3aEUxSKV"
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
