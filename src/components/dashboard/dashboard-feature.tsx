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
    "4qrBMXjmAz5iq78W9yWHRBRotLs1aBoManaXyL6CLTZnqiE1BuhSz2MJKKVCRz7HXA9zw3WkFZhzRFNhYj5eitbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XhPQV2BYHnotHkbAmP5eqkocwtiywxPLFFar4p6T6VdGJkycPoHPGVPTXDDSQ7qEEUGHrf6SvViEPpWQhVTndSc",
  "key1": "3eNFKrDb6nTWRFoCkzaHzo6CbUX6ax28SR3hKwws9oagMsA366PJr3pVxJs9k8dWaxqQG3HJbrE6UwCWQPsLmZV8",
  "key2": "2wXuVpY8XStFxphMT8tPS2Dt7sA8BchBZKJrGjf82iLcQA4eCZmXj3FbaGfEpMS7nogANtg8S6tMQ8ZoxhmPXAQT",
  "key3": "5MiXZKw9ZEAfc88ZZxU2uqxN4yPJxU191HVFDGesRtge1J1dt8VQoXT3H2tSQKgrMQsisy4y9eUeadc2EvuzGawJ",
  "key4": "LVG8kwT8o7FST9qrso9vhMrCj6qhqQgwWmB1zwQuiweSk8Fiu5iLLJPW9oPmBGsFeNUrcYq2RWHeUreNrY9GQyx",
  "key5": "5HzaXBNp4d8oDmwQKEMfkBbrt29XXxqgpRCDQaJFJspr5MAe4X9wjfwTn7zX84r2k4Us7X1L8CxygL1BXCsHxvyn",
  "key6": "2oRajUoSjyVAkBdY7D1cSVT8iro7VzNuWVPYk6KVvu9heyU5duEe4nC2qmqrhWouUTYcPsrQV8g8Fck5VJL3fGwH",
  "key7": "42w5STBzpD19SMzNKWXvCrXBTo58xmaekcMvjbkVVtK7J2rJ4nvGh6yGMK3ve96JMr7w3z9C99U8gyxFwep1XdHb",
  "key8": "FLeU4p3J2FVrtSbVL3AXzhYEEs2ch1EnbmpntnKV6cvrnQiFHhRJmb2SJ3Q6qnMY8H2aZ1PcDsrtCyAc7L9QriT",
  "key9": "5eUmMkvAreP5XMB8ttEjJHBrwchKivfaobqKoJUsnCyVuksUkDNqgW8dbbkKDNpJuvKSnBTVtUJ6rJJTo362x5dd",
  "key10": "2WUfi2MQnSxqh9YawT56si8ThgZsFATk6AciJUQuvNvWyGoFL5e1PUq5UQHxrM2ZyjPx6HB5mZEohkpFxCXeFaeM",
  "key11": "4QksASZSdZTudsGxoCgrQdrBwFUARC8iP7LVpFpU4CHf6FNW15qJf2CkAMAcRi7oaUR1N7ArcfmkDibSrqoiF5F9",
  "key12": "1UHWPqFGRxfnPb523BshDANc6hgdsdHwkFhn2kYRYDP3fq5RBVS4B15dsNg6C12URwSK5mm5DRdFhmBQEgDF8yh",
  "key13": "3GXeqe7QwEvBWdjRHuUtTWz9FnxY8Ff9RQRP6Z86gYkb4Em7QKEfGyRuZiz6YjaMkvYSusbBxsH663RyU8gFYN1S",
  "key14": "22q47oJFnsKsEYwehoRq1tVb7BgyTFuFtS8QzN28N7G3PYyXRMKEdsKttkHFsadJydEj6PmWYqRkQQQKSbNEoCep",
  "key15": "3vgWwZZMuoD6JhSY8weU4mrtVKxvAdWBkfm6W3FUmLa2yhH8oNdeUg3Qx76bAAwTSxXW12yhkNSq2vuUJzFMZ1bK",
  "key16": "3JJXy939aVN4xY4zZMckBfKpoiVMKG5piPj8iSrqqV7naDzEEVrubSoWEqPZvx68APhcXTa3nB4BPgvUZi6Z1yy9",
  "key17": "3aXTXhnjzqP8mSKCgYC78CpDLRDvUyeqeijG96gid7UcVMqBU1aVWLzSU9braU7TYtGvyd8gBqhMAzovrx8XhDJE",
  "key18": "4nKvhg9TUKy5iccvSP1B4CW4iT1WJ9mTAaKjHawPtYcvx2hTvB2cdRrJRkJPfbd5T9pAS1r3bt98Hz9XeP4rTw1Q",
  "key19": "AgEpuXwm9KrRxXU2WgrDpWhxmwxeCGNfzY7FwLF1jnmz9g3mWLrEE5Ly4MqDhe8oAMQRqe5shSPfcYXcXrYE12T",
  "key20": "4evsX81dGVuRTuouAUKoKZpVVe4TGbRq6YRUQVjyzohXhvp7pEBt2jqf7WbgnFCPQx2Sks7J61nAvbUAwSRWA9bv",
  "key21": "3wkUMD8wviQQKrPTsGouqLL4HhtVnCzLmiXM6TK6Ai3JFFN5wGuSTzGCihSb1iqAXrzYHUQwcUKhvmEGFJzs4syp",
  "key22": "8qr2RibEgitmkdbEE77YCbH6L9Uc1dxiXWjovA1BnWpaW753PvScYgta9BFQVha1dqPYNt6vJEF6tZrQHbkYcGm",
  "key23": "3FGSpcbfzPXv4v8k6r1Md7oZyNUT3vvNFmgTRNJXiDNhYAafD6vhoYCcSiGwiaS6e8WM6zeycapgh8yU21H53vWQ",
  "key24": "5RvhWHrdDFsekmiyAbErtqcBKpJ2BEkd4H6YQoQMfAERFQB5cReM6Lh2ZEu5rwHMqrFCWXE82pFp9kUpiM8EwAKE",
  "key25": "3PV6JAA81m1rXrdNrfi7FyaTn3dC7Fms4qQ9vGs334qLq9EAZeBniopXMWcv9rJ2ULSGRFXFc2EpNHeHSPyUu73y",
  "key26": "56wmYFhgzBQHXbkmxWp6URSS63Vigm8WjFnvjqVHz6BRbUBXKt7GenEanHecXYCxWcvLgPmA17PeMWaBLn5DV1wB",
  "key27": "5Q6sGGjrgoFdqbE4N9wikk99J14p41tqBBNCsp87eJ9ToSky3YhvsGyuNVYbK9pf7sX8Jz5g8WNqaGeZeKXBmELK",
  "key28": "29huU7nNwzW5FC9o1upRr8KA9JKVuAmJYbJ56gaeRiqbtwcswgsDh5tjYimfsQ7HAyAFyZTKz9DFiuvaaGFecbK8",
  "key29": "5ftWL8VVaoo7ERkQ5eKfPvU5CeAsWobGnDo7h9bjBxRaxksq2RKVDrPVD2eTAF6JBibVcxtaMYVnMLYSbhmiR973",
  "key30": "36e3FqGa8DT1januvD2Swfv7VyWtBQh1T7ccpAfYE6BEeZrHJGdhPiWoJEeGN5gLVmg1hMuWVnZTKfFAU24bbqNq",
  "key31": "55vMTQpAQXwdXwefjrqBN9HWZsKsdXoCJoiSoP5VPAX2MkFC225epsUriNTkaK2VvviqZfyTkgDEBa2YWgksV6Dg",
  "key32": "3yX7wHNPPv4Te2zijM8hpKVe91Xv8Vi4RPY5vkHogFwgTPN1uktk7CwAok7pRa2ZRM6nxsvGMVtfgojRan7bDE8f",
  "key33": "5zqr88AToPw3zgfVUz1ntB99XfJef5DRUNj9xM1tpdd8UyAFXLwp7Bxdj28gP7gvyrnLA7cgGhTHtUgAVFynZsyF",
  "key34": "5hCZrqCJpBJ8rj2TPx3Nc4rdqq3ghragtxeVcLrhT9Kfs84wDFYaek9KfquJYuU4QMWk4rZ82EM5NNREC3QBRGFV"
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
