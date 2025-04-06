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
    "2D8evGNep8rM61n1mLegb7121uvkgpoSqRoZwbjqbBcouSTUyijEe4SP2Mk59cy6ebXebus7RhHTg5eh5DaYga68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49BCgUdav3cvtknfte9b5zvPYKfEohMWy8YPLX5Q3xKHrkHU6uoA1J1rubgBba5LKjY96maF3UvYCEn9YQZvrjkL",
  "key1": "3yjsXzEnqgyoXRXgY6nUmtZZDGkLDFs7KMMTS92BRsM7ANjiTKLNauy87msMofCfa5jcqgrzJTs2S3u25wcW8BGc",
  "key2": "uoN47W5QyFPmS7ZB8AqLfV1tFZgh7NZBnGgJXM1aj6VSYCgy6P3jcMwhHteJTNTmBu7wc2ZibnyBMZLVYr7jzJb",
  "key3": "X7ixgFoqDZzS6H2SjPJrbFucsbe3zvFJZMhy9g3aQTsHCLjj9NrnAr4FcJT5pv7Rw6YN5CyYdpryFjvFyKbjarC",
  "key4": "4dFnTZcMNUsKYJjvS7Nw2VBqakiyGSHyeo7zCw5wTNAFx4yomvtmstxuVMG5TSYr3Cgd4RtHXAMHJ1SHUXH21c3b",
  "key5": "32Li1x9JpqjcGxtfBtzb9rrvsrUPWCMbezGF882drNYDwP7R4TcG9E8yyfniezXHh5aZvjKXdgB69TGKU2cKy7vi",
  "key6": "4iSpiB8u2UahZViDusDfUpKiWkUVJHW66oYHCabAQvyVT3Jk5JMb38zd5Yz1XAnmt3edYgRrunGktshPiZrw9M4H",
  "key7": "4tvqKg5wAYzbQM7TQ3o1kpgb5cQvH94XW2hmjVPi5U6UpVFozwLgJgm2tLvqorSS5gU69RA8XKezLWrg1EZa6Gex",
  "key8": "3b5wf13rPVgBhWso1YeacmRp5qKYaEhnC5MJok1VH6iLobMfsZiiN8nMwksR6wnc87rhhPJZni7Hd82MEpay3Pa3",
  "key9": "4vEB8iM1qyWQCyW6aiad8T2rZjcBdoREj9qknGNkcgqX8j6bbhTQbbgLGiPX2vJkCKasvaf1VHeCX6AVW86RUbw7",
  "key10": "3SvfwMKnhMZE3kk1UF9vWCXiNW2mQfbJp3gSiY9bhJC74dBmpJpXpdpmkFXRznfN7tzW5BSHNm9YMwkWS2xuuDcc",
  "key11": "2J1FJrcZHyZgnZGFEWxeonStzZcQvZtP66AVSwGh3vwgZEfUbjTdzDkBXgrpCX8DzdLJ8YjQuhuMFXVcTm5pJv1a",
  "key12": "29ygdfqRp7S7dmfUrNRLMmyE2Bqx32BL2wYnsk2zXUXPSibUhfVpKeSyDRwroF4wKTZhYnb8nak359VfvhHQTMAj",
  "key13": "YEnYzjvPgi2pFsAjWWMqdx8S6bbSNEbtSFGpnRnBvKdoTn8TcuSrxvqs5CUTUCXqLw61owR5e2hjAtxzAoSc9go",
  "key14": "2qd8d7cRkVv76gfd6aDmYfz7YfUhXgwxeJXHGFHCx23ZTQt4uTWhGEbktzuNFx8rZDF9ovgJN1xBXejf6A8eqKLX",
  "key15": "3banAMy2ToqLap6rZCYQ3DetHNGeCUQuNKJSYqVUSnPxrATf5AWV6khbULZHRdK4TAC8kbB2D5Tu2nkPRmMAuPni",
  "key16": "wdxF2gLPRQ9MuH87WUyBxvfWxBtdMDUyY5tV7peEKgPdgkZnV9NenRSGvvgqKVEYnVVJBAp69GAk7PQeVtni3Qe",
  "key17": "59gGdq6iNTvRSxv9bWPAFjpsPnDn9vJVbrh8P37JFZy8m2z2TbfEUWYNFcBcDDVjm78bLFnd4ocajoZrYCFWFReJ",
  "key18": "2GNX3Xg5DkyRe6XbCcAU3kp9Yqk5EWW7pFmEhuxQ6fG79TJbWQmUWtuuvmy89xgtb39KRcpMx9zJ1tswF2oMvs1N",
  "key19": "4NEPHT63WXfUXE1zQ3vQj1zWX5vxEnB7qkHr41S2XNUzBWdLHqRf8WaMVfNYZDgtdh9xv9oC8CBRbUXMdDxS1ha2",
  "key20": "4DuRsQwkM2DnKjejqD9GBK3uB2yFEicTHFV8sjtcMqPfbCV4vhA4KdqdSmaBFJ67AGF2baXep3uuvpyxWpzr3uBx",
  "key21": "4NjRi7wRTwVQVZNJy6KLQMiFSzdsGK8y4uFxzL1oANn6QsiJUnSstRZHXfdYv1eNPPEoZ9peDGZnDHXxArCDB9so",
  "key22": "X37buGNVNVtn8xo8X8HeDptNsEz9rEwQAw12crsGpSi6ozoLynJv4FFLFx2kSckbFBfsWhu6YWdKFUsZjHmkXqf",
  "key23": "32H93mkiAURLYkSgyaTxGjknPwma16AeymHz1a4X8RP2M5hrJup2LmRwi79X8hXBjFEekBMd6Wgvzeur4dP2ZEw4",
  "key24": "2RfJ8En2DnMEbFuSkZpzroDVzbMULUtvsa3pbRBEVsRiuNWssxAVEa8Cf5GoHWGFwSrSF3oW1ZKFT4jkb8FGX7FU",
  "key25": "3MNNAPamvtzZcw35n9f2yK92VfUyHnHrsqDDyvvp3gyW7QgwBazWJCooKmUdTVQnkxMidtcxXmUUee7wVTaPoHqP",
  "key26": "3engWTinWwsE85VrSktWNmTzpujWnFwpTCRZ6wiEovaEHcYqmSJDb9GQEFAAbRfvpZbPBwzDDh4e1pzwbEMR8yLK",
  "key27": "3QMzLXj9BEt5osJcPg9KqpdDCCzK3po6y5NtUfE7qYayMYjh8oAKN8Avhe2JAbFc8ZGA6BPUbFaPYiMCZMSzfyjA",
  "key28": "3Cmi1HbuLk9TkKohdUKtCBWiVQnNZW8pkwzWrPPByxuBsG5ocUHG9a1F24fZ3rRYg6s4Vv3F8UVaYkUywqiippFd",
  "key29": "4gyKmVKtSNkWJzg4Pb6up4k317LbZSBDgduTuTFNQcJDNXeWJ44842wqKUoGHQZTqw9wNVtZLU3aHcXjHikEMiU",
  "key30": "2XQNPaBtNDPPQ2KdWqiAdYooifHGtGR8273msTnLoY9LZK8Dm3Rn29BE9FXZZnS7nBE8UeCKZfcrkJXZEPE3xQCj",
  "key31": "Z5YZPkJ1Kv4nQw2G7rruFsTVn6mSaRtPijPmqLHBxFmh1w5qtHLiupHBFfeWNRX4rYLYd7GRGYAd7kBXwhCyUko",
  "key32": "41NZdGRt33pPRAFsRKKqTgfBjzD2QGKvQ3QvetmAs4DLmKc9oQkRWuKF7RzCkfsYTRjMM8M48dKa5pF9YFan9rzw",
  "key33": "39QakNiPEkx1mDkMhNtJXaPiDYhAVcytUfffk5rB7Sf9jiSvDkz6Ekfi5fw371JxwnjUizNZnYCUKGaWhasq4Hyw",
  "key34": "hojrQoAK1eQ8xEsBUyV1QTfKeyZZHYQhLtvkQtSJFf5ci1qnVh4TokPFmx2n7nbwep96ZwKBY2ewc2e1B3uCJj2",
  "key35": "5FvJRTb99jc9Vnx1WVUkaJV5YMWxpVjB3c5vzXokSB1Vt58ak21GSxmDueCLcbqdbcep9Kdih1jh5fFZ4qqGCUnH",
  "key36": "2iS9WsY3wZ9jQNGgoz9KEW9WBe7QfQVctCcPZvNChxGwq6xuu8nAqyztniW4u2pbSwSc3cP5h2kiSNDgHzAZGWSf",
  "key37": "5MaPXQdwgfcbmha1kNq5136yHGdc6JS7ZVj6aSrENbYMm3KW2yoEVQzDeYgwDZmDhAZe9DFojJnnWq5rTjHdbsoq",
  "key38": "5hhQ18T1i21PLt4wKycRwQEfRp5iw3KYAhMzu1wnRurZ7L4F4qGLhqwrZ97jLvzJTtk8VzqAtuxAoabuuftPLkmg",
  "key39": "L9GnCHsUqp3udfVPU4wHhzzocM5AVAbETfRWMhFFKuDZ8dSXPbQKWq6e8TcVUCQXqfCr9gyDkTNw1dHPd1WNkba",
  "key40": "454Nub7CTadDxX9FCFyeqXiJfVwkhRBB7QhsrUm3qtzXhSHrKNjqxKgJzysTFsQgdipJFCAiunXMCJ1ibm2RPF5V",
  "key41": "2XBTxamtLARn5FQza326x3BSkzVpkgxZ13d3mACnpmhmLkFq7TT1ngDAiWEW83p9KfErQ8Xt79ah85DPFGxLBhoV",
  "key42": "3FAJQXeeFiy6opHt82bsaj7enEYpcVHh6KimicKx9WdnQYakaC3m4VcLojaUz1YFZjutqxxaHNyF3AfALrzxeK6r"
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
