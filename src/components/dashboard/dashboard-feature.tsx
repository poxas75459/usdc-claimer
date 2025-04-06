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
    "2Niy1hUZ6TE8MBkquD8RC5hR7w8zPeWokvtZFVijKoBcSkFtAME6i8oYrytRzPuj2313G7gj4anAPnWnDHgyXDKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62GtTyWvsExfc48Yox3UMXpyvUEgVMArSUwsshGeQXoNXxrq1yitwvJfEnmjWSin1Q6MNsgKJmK2jZ7NyHtvpaau",
  "key1": "42upMd43XPWw1nmWmxzRoxd8AMLcjQFJR3kQ8aDFL6Q3PPVXHG4jYDKY2N8JKvZGLd8LgKHbN1HTX2DAYKLgyozj",
  "key2": "4kkymJUN4Wt5wpd22geX6q3miedMivrVt3rChs3sX55YWtXXSj9mCxfYjHbSJGz5ZEr1iY2rUEo1V75vEZ9kD6nd",
  "key3": "5XuMT5iDV6yes2vLGyJ1A7YYpU1RGc6kyhD367uyNtiQUJdZjGvfjd4psWwCxk9QuN1nTUAv4BLk8SJVe3EP6HVG",
  "key4": "64Z7avzDWfjnSrDMpz4AZSzmwzyybCaJMUj2utAd2iVbwK9NdyzRmzqwRbdtRHHPQEXfDJoEDfmFxrqNqZRFznhk",
  "key5": "yKGGpGLbNgbazgMN3sz7p7KMWTEFGuc3xbUBXzMvPcaCrT5P92vGxBPow9rUTGuSyZi1QFS6X3LFTMSZhWfQ29x",
  "key6": "dhF4Egyu4JBbQpnM76f1yqCqwJAuSfLy9Lzrm8f23wRt7JpgT6b9Svh1n9SCbRuNUduAhT2gVVTPXqZccsN195a",
  "key7": "2JvGmDGFbdR7ZzY6UE4cEWcHn6nnJv43bwGQubwLKeRpbQwpt7DkigXn9aBrZiDAnCyVafNAicpTdGYi77XnyKZD",
  "key8": "SGjN3aHiCHj7JUCT52GysZsfzxgddNWNg1awsXViT7Eeii1oUW4Ntoi2dUYC4bx71bfZ1LPn8ypYcNwxarpnPCm",
  "key9": "3vRk7i3vzmWok7g4ZmWwwmSJex8YaD1CVibp5QoKgawSVGihr9AMtsmeFxxi1YdZYpxVDY6g5WzKEpbrnTBALzBY",
  "key10": "9y3vM2i5PTFHqaRcdUDj73HNkC4FwtHVEM2Tz8UWzfpnW7Mcd5191REeh5xVpAvF4FE2qs5f3FXfH2JUZCjuYKd",
  "key11": "zMS7Ji6CQyUkwSbsiPYYJZTHHdDDHhNVJMHcJDxop2JC44uSGQWMqhjSm22ddYFUMFVfTGnGbWG28g7hTsHDvPg",
  "key12": "2uv93gcorTDQ4XSxJfgjsETRP3wAffWUaAbV5ytYggM17YY1ZBbvYGzytFu2TuEXXXi22ranU6DuhPYDXRLVBqxV",
  "key13": "3ELY1KUiiQaSW2BJASmCaEKe9nkotubaVBh7ncmkYPPGy3vWMbSUjrGrrzxsDFqGKC3Tu6yVAM3Lo6LAxPEFadbM",
  "key14": "28gGXvjPBiWZvhynMtjAEj5CHxNhjrDUxyLJ2m5Uy1tZF1fRVESnYP51iDPPCH4qRHy2eDgkbcCQS9RJ6f5AC7Yn",
  "key15": "3hu4nACocSvcb7DkHUSGUnEyY7bE5khQguSBpYcZspnoNkD3MKdizvyABMDLBMeK3HCubJ2yH9a8KZAKcfVnRFBr",
  "key16": "5Kpap94G6zmxvzmEzqDG5WYKKqs4eXwGEKz7ACw24wndSVHqqPV6PKytQ7Z577SpRtyixiV2567f6S3ueB9Fg9xc",
  "key17": "5Q6CLQ1h1WigXBd9PjEUFJTfLw4PV8JL5jxNYcD7zNQDkose3GW8BgMgmm7R48e3JXVJKreL3Hxg7sHHz2cBxQWn",
  "key18": "648t1uCZMRQLe2zwR9CxMxcKP8TvkifsyTmTZdBicNTVmdx4FkcSQnY9J9LhyH6RfPSFYQbdGAgGGbdgfu8r9Pho",
  "key19": "4e6HcAtjPpYJTZLfGKjvm6Wid7hoVsW3CRUPkJocFQXQEj12xt5W3vfaWdPvdihYjhmqUq9skXH7iaAUQWQxbc8b",
  "key20": "2m3dgHuiExoAZccfnvG784HNEibUWcxk75AiLVW7vF1Hx8TmfDDxKEqvPqtawTWvoUAhLfW7LZtE4ihAxAaVobH7",
  "key21": "4PcfBZQcNyBwBWeR5FPVob6uJaatxsgLbbijpPo7Qp1pT6zsuXZwZC5VjLQJ46RDyvD3D6kWVLdtBKMHpF8YtQyi",
  "key22": "4zZeBTSu7if6CpEYb1TQ3brd1Z3dfueb5Qb3KUL4LzUkjNF6ubNwfXz9JfArM7xpvwPDqcUgvqW89GUWuQnq46BB",
  "key23": "4Pjnow1zqKmmRTqfzeXyqoynLAFaPURNzVzYmEJW4MToRGgShkvung7X4qEA3dovrYWZTWHCPBZ9xBWPx6N1ryhC",
  "key24": "5ZfPdhDFaM9yydrZFCk3LKq3zpeLZaMWLM23bsRYdZwSeQ94v2tvzqsBE6M18nxA9Q8Ac4iipCxeHcxmrvakHXG8",
  "key25": "4gv63xjeauYkx6HSvQ5QdmmWdfgno3g9uQWEttWbyKAZfZQYbhaa5VsF2JNKSYVckoMutPa5ffyy2vQ6GH6BEUzG",
  "key26": "4yiZY36C951oUP8P5UkmihWqrVf4ZDB872ssE1We9FaRetBHSzHZYnBAPSE2TWtB44nrjh1ZhjiY8yj66Bc8nWDK",
  "key27": "2VmDo64M2PpiNMR6gyuhCkxcjhapjNWSg77nA3DPyMj6N4tNf7J8HuAMGooZWw8CQPXwRxzA2xkf4Hk4frX2FLrN",
  "key28": "2hEqKNXkJewc84Utf6f2agD8zv8vyxKtYhUAneB6zCHhKd1PaNgv8fNXiQxPAACN5Pu4SC4wDvXyu98NNo5APtaQ",
  "key29": "51rucM2yAtrjtCrinC7J4wnVQwvFBmugDTCK7oXmD3aErzmFArFZgnbPzWUAx9HWMca624xzL3dh17JLsgh5rvqV",
  "key30": "T1A4befioe5NR1FwKde6TVRRytcMLx9v8uFEipuxnmQ77rFrGLxHUQHktBSgzQoNFkRF9PV4UJsopWJ6Y6hfT2u",
  "key31": "66q2fCaggmteApfFQgaoq6m5RCawWU1wKof7xgBK5ftVGoG64EVd2XNfu9Lnd9CPQgdLyxRbpYvryh6qj6ffmQX1",
  "key32": "47NPJxpWTVtspZQeYDGP5YFfU56gsyMyoN5c6AK5a2prYnqV4RpoKUnRgonqgQJJPoS6UDhuT5rJkFpjaPrRMwVp",
  "key33": "3sk55Lwiq3tVbTwarqHEw17SyMumTCF66aR95dwR7HSggfN5yYMnfQap34z8Y9UGYsfi3vVjUqrj8TJXy5744CM2",
  "key34": "ijRR9UyX5s8VyoeSrBjHXzFDeMCzU4iApb2XT8N4hm6L4crKfTy3CbtFMpEfdpGh3nNodRy1LDNs4QnQLujkDWY",
  "key35": "3g8mYC6ZLv5vdhDDjzs2rSVFVQkQzacFvr9XDLq2UbTALCR3ZFiUGLP35JFnoz5maTiE6G3vXEP7J1VhXU6nE12U",
  "key36": "U81LwCtqAQLZRLjqUPTxQWbrFvAPHU5GUVr8XaDN9J7tCptxJ32FGuKHmtP62joZNudRPkD4ofAwYe8b8hr7sdR",
  "key37": "2hFTt3xeTyLfW4uoUGHqVNjMh7Buia6QLgas6ajnjVG4LGFqD7srGrewqHv6caYq3GyoJ7SUCmfT6yiPFhCWKDeh"
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
