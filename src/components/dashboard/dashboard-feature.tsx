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
    "3oGSL1tG8sMfiauTmP19ppvpZo26wVz2XBXPQNHHgQ28EXtbVVfrSvyCcsVwWXPdH9HFpxDXeVK4hA6QJ7WRuukd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rL74EYkDnY5yayQNVaPoHxVxHNqnwQHiGdPqxaNbyCZe41qUZj1NnCxaKyr7RYZ2CttxtUT4yGa2BiTVzG9WZwm",
  "key1": "3947iL4FsqirnF4zbmoDT5jhNAkt6CprLWyEXJ7VSk7fSNCjww1dnbXXXRbsCrKaZx2591Bw4ywqKBT3XLJHVqgy",
  "key2": "3XDcDyQ5EnQ8SUfehgxSNGd4GfygNGV8aFtTgKFiu4nfMXjjjdJ1SEwb5v1NpwyapGP6WWKT8faYZY2WfGdjjE5Z",
  "key3": "3eGAoGbbjCsE1k4kTzEtJeFtMyKUkTWAWRAJZkJ5YMxGxxenxEqqfJg2hxudeo14ygqxUqXLAopYgR14qMZkpR9n",
  "key4": "2C8mMV6c1uGEtBo3ea7DPsrmxMVTXV8T7wp28oNqeqRiEmm7hX62v8KSesV3RHpqMqe3DH2YVwn2xGZtykwCArf2",
  "key5": "5ZVLA1vSEfH5vp2kE4cT4EvqUMVktsxU5RpomrAVYB5L8ph8kmPtZAKaLihWyLLko2VXKBD5PdSWkuMnDGHhy2X1",
  "key6": "55PNawkWWLzPuvaebaE22HhLX46pRPChVJ3v4tEWQMTyAZv9w2yqV1JdAQr4XrTn7AtJ7yzTqQXgk6LnyD2fUjpd",
  "key7": "3bpJxdED61K6vji3TD1ckto8nkNEMuPsEK8ibmJLw97LnFrFGJffemCdwRNQ6Ed1phDxjLJxt9hCh3LFskriVyWX",
  "key8": "4WMwLCe8PzRU37suqinWqAfXmo9nN8gvmndAFe2mERtnCfmaVK9SPyTKx3ZCtHEErd2YvPZsqyjEuDkjne6MYsAF",
  "key9": "6DZqiubRdqPcorD3JvNeosr2aYCepB11ocxY6jay1YQqYy3PAq4n6gpFD1qMoHewMbzDxkSbq4FjVEgMhC6TeXv",
  "key10": "3LkSvQZZfmxrK6EbsEnJb3mf9LjQ2BKSmyKYSRjBUQeuMJFbNQ65jXRP1VAMz4ZqKGJJZQiSK55QPzAwiBGUGPFK",
  "key11": "4cE1grj9maeuTfNJfg3jabWrELyj7A8888KdAvCXVqYkZXcjgEACATgVk9VJUcrqJaTeDxCzGya85vjLNfyeUTdK",
  "key12": "363biLwCPE4KCYhC2qE2QnJAyxRTB6FqxQW8gHBMoBkM9JhJH9FoUfBtqTTZNvi9Mz3tosKgwAETmoy4ywUrhkJ5",
  "key13": "62uspCbQqYdSScghMTbkLpqjoZXgyJvY4AcRz1yJLPYsa1E3Xqqpjn9PoB2a4ZbB7BJF9AntLbRfKBm2e6XSVybi",
  "key14": "5SJnERp32x9SRRsmXWH8VAh9mcejyrKNzdk3TJxeUecGRAxFh72Hs5UpFwfTNNBrH72L2MitsVJuGpjoB4Zz9T4v",
  "key15": "3R6W8C9mqN9tLLM9uKj6CVU2imzBSD56e5DBNGLaKJkf3QNDexk7aexH1zncg39doyqqPNhuNot1FQFfLKGaJGcE",
  "key16": "56FJ7ZYP1rRWjCmjjpf3gjHNk9MDfvKgzZwofpSA5K3VJ6UtY6FCKPQhhEGk3KqVedXBdLUVtLqSRtNvQJyDM9TJ",
  "key17": "23YSzuseAXoWVgoHTRRWMDmV6RcyKAViUa88ta4xBrw79ackoYXUJGECmTTf5dbSgjmJhD5GgRS2cqRhjFh4FBZV",
  "key18": "2bg9AoQFh59DEsR4uEDc5T5ZXJoz6WXMH5C9Jwj4NeXnRqixTfM72AGSm4eM2s3LLagMYLWGScM7Kxy5RsjU72wj",
  "key19": "3eDfqBy49a8SAcu9CTdVeNPk3ZpccrZkZSAHUtogi4Jb8nYDMCwU3LbcYa8QGmhC6vr6gkjFTdrXitgzTd1o4jXM",
  "key20": "smMjE36RcNYpGAmfnrjYDyyPmkPEBZ128K95Rhukt2rJVG2hXkvQ8FG4qVCqJ1AAJDqM1MRugLqBSNf75UyJrGD",
  "key21": "4NuVr8JeukA4Kq2BJ9t5aDJFNgYLQRw8foScVyN4THVZqC17kftUu8RFrBGbBMLKqmMghWASgxmbzMDEp2vWnBai",
  "key22": "3G72CgSCKNZXNr3QBcuVyibb2WX2QR41c4xe2NLz7cRuVwBEhZVhcgUzR2VFyKLvmmGShJiH42xYn1sEsomYNtyV",
  "key23": "5tnkfk2mnP3sZZPrjRS3uBPWpADR85WQExf53JMvUZCP3BtiFNAcdQQfPQoFodBPBq9g4QCpfkUjCWcaVX1i85DJ",
  "key24": "5JkJF2LKh3kXvkvnRUKgc4JZXBAkidyaLGo6qezvSPK1FxY3TybH3TXsPGkoNnKBjXacgavfdE2icP5Ys9Y43XDu",
  "key25": "5xGVUzddgCvMSBsYWkG6vKWwdDs8VUpZpd32iSvLYPrb1ny3ThCpthqBgoA9RMZJyqGQW4vdmMta3phDhyNDNqCF",
  "key26": "4YxssB9JT65izumS5XiinbDJubYXCP6Tg6pCAy54tHAmKffd8vU8DV7j5XQuLDTrBrEZhFxtrZgSYnw3C84VKyJv",
  "key27": "GZCz52v9UHf8NYiKvMP2FHq8JS2oRMTrqJD9UdsDbU1DXLUVefJPBAMB5EKJUREGe8LMQeX1zCp1vgj64Ti8Xtb",
  "key28": "UfopadHVXX2Ddkg4y8Vzk9EuwTg9yYYQFHFTTp1iH8M6uu97LjuBrj1MmWJNYeVB9t7KD4TK36cu8brg2DpyCQk",
  "key29": "53TDx4k5KxqVV71GKfWa2vRJaiLnqjGfpBmX7LLnAFJQgBdkcH6k49EjoHzQi67YA1qF8NNRVFjdMuT7YwRMQG5Z",
  "key30": "3ZpmtVcUa7s7L4EWE347DTLqtiTwvTHBTwxH9QWwdzkGvn2pz6QoP9xCAW5H9ZKiabxsGzita9ikpctv6GTzwqmR",
  "key31": "5ALqoAMr7yEH3ANjeKac1zQUuxDmPYqoUSEW3phW1ev1mNQ4ZbC7HuitYFziBwHbmQwAFkLYabQCL2TEeoM5ctLa",
  "key32": "377fkYvV5Y4LesWS2qyACLL6mg1zfF47kAS7hwsqE1xjfRFWgSJLw8QBgLmRDpfxJwftDpZhJ9FbNc7jCv9cr9ey",
  "key33": "5hXXtpoB9Q7ji8cQuWV2cwTJuS2uwNRRLJWjX7Uqw16BqXQKuFhiHYU8WC2KEzsLrRZKDwndsFp2SEBzegRg2gLA",
  "key34": "5EoBgLvbYBTvDPzQN5pe1VuoxjLMs4RGdkm34uKvPRh3bEj6UchfLWEhqkKWrYnUpCYzwgYufTxAhWNVswAknM9U",
  "key35": "4FxKfNSY99kBJE3qP5t5j458DHqFcmpa21V7k7PxDs3uqjB6AwpjrMnoju3WvyenFh3WYERPTRGzw6J2oomkoKxc",
  "key36": "54ru5pssNyd98Gshg8yCSoYQbCLNzNDywu3NNjkaL9HynRGFUghs31R2qUArffGtBZFzhB4j34b9TnzzJZM5CGLe",
  "key37": "fLZyPHapLuwxoxRnJY8WZEmLdnGGjoCKKZ87xHCFrQEa2Kb4gTy6mXZZqNx9ejftnf6KWhdgmxsZMnByd2Mpcbu",
  "key38": "4e322GA2vFF5bzovGvP8VtXzDhH5r6m6yh47bE41p7p3MFPq5tMyPpwRVwriwLADfjg5StSZHo2ddZ7i7QNm97ix",
  "key39": "2qqXeQZrZajXeK99PNfNdE5uet5LhZK6tcEZFEABk9fpwy8uamR6w82BB2M2bgZXC7sNnhjLsfWjbW9Aqcdta9gL",
  "key40": "67kpKaK1u1w3goYSkmhMxgPcvq3zaBpqxh7UdTmsMpV1z7CjF2Kz8D3S3kRp43yPd8DihsEC5obexERMvPZV8CiR",
  "key41": "5vgioHduJAErpu1yR142hV8K3cyXp8zdmrU69YMmvu6T7RXftcB5jatqZ8DfW4V1MXTsf3TPQDNZnMUPaq9Vk17D",
  "key42": "23YPpDZekdSGNSUUKJZNX4hUvfm7MsVUtTxPA6XCFmjaGBfNwPeEkycrBcEDYQtkH8cqz4bpHiAt3Eqx2mEhEcK2",
  "key43": "4cPnzNRtM2D57JKg29p6GYUyiyBNXaU3KQPXXhei7TL7B1N6sX1oqRNhj3HX6Cguo9K5JUtT9fzRTKLehypnGksq",
  "key44": "5kSVRYePxgviuiz3MvTd7LnZCRZZeoH3jttygac4BTFdMVXyHkyRJz7ViYYhTv2jhdHivYxtLUYXjGZKPBBYaoPe",
  "key45": "2NePLmwvFdTdoAgmE7kszdMVAXQjdHYEnta6z996uAEx2mGHVY7JAKZRjWKEcowRPkEEKFJV4qQMZRA8XpwjhEFb"
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
