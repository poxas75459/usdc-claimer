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
    "2n7ZDVx65ctzbQ51zuwJbSLPKH6kAWMdvDo5ABKq1Pwcj1gP33ZDLU85BHNPbCrsapTjFFDyqX15bsyFaNYWSFGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V6xV5kqzKKf6gTYGf8F4fhPc2zbUyLg1B5kesqHGuJn2atHpHWTrd9ZjzmPPuKxXj1VxyyfATDfmdkoqnvquutX",
  "key1": "4GwP5hrjCp5jrSb6axiRSsBwDdfM7DgScN6LsEAz7oquDzhxSKuaBTxrj6fkMPma5HnDhkF89jxda43gXXfeQyTM",
  "key2": "3PkUCM3rcmqq4iyNSiARRhhYhsSaRhZ41QbZ6vLd2rCEwTiJrzcdCfqpQzDGX6z8s78f9kHBBzFYAcxuH8Bamma8",
  "key3": "5PQb7Hq6mARjdyXcKWwK3cBbPGaSiHvUfq2Y19DcFQ9GG637rbtYCecmAjLRzcc3BnJGrpQ4EWLFP9rZ1yNzb2SR",
  "key4": "3kQgym2kF1XazQMuHZtuue42943m1PYGFDJUNLNefNXjMu585TqhrbiqpY1sQYEUiaggq5nXokR2t3dPf96MT5eG",
  "key5": "4NvDA6XReZywDPk1JMmmCSuYarpyPcqsioF8LyTT1R7pMGQsHyiUHzLgA4x7zHSEke3dEq8VeDX9nVQMZtV1N5fT",
  "key6": "36XS1XszrmXob7mA1MURaXtRF3M55bJ6Mg36Djj5xSv1oscceD82rMvBtTfqw2hqzGnBdThq48hXL8hiZtFuQ3Ho",
  "key7": "5kxkokK3XW1FL4oCoHKZj5g27yczhJbsufYHWJ1SQheFgZTG1SMDMzo5z3wJ2hz7vYycbS4XKRjCXZhbFb68xZDB",
  "key8": "5wfcfpowY8ATYvyVeWzuvosciXfgbSNYziWD2qzcKR9EE886Xk21L6y6fRehf7NromERzJx2isQsVVxHZgHEcyaH",
  "key9": "kKskqMCRpNxMjV8jQbCkrkkqmopRYUr7UgassKShYC8wgzmaiVfnewG9kkDqxXqtstrHWkQ5Pqjc2bG2gsbagfo",
  "key10": "4UcN16BWwcv36JznyeSwbitFG6a6EjzV6H2g7TDgBCgCZh5L7yg39xzErt5ZefbN6kBmKKerNY4xYuLATZLDF22e",
  "key11": "47ATngmnsmQgDEs5vVraqPir2f28YcAyh3G9CvDFispXDaiDMUfd7pTqQqwJi92uXPN8S23Mx8o1VtTK9fKGMLRv",
  "key12": "4p4H2XEmphVDgdokhKeMwztN1ifvtTYDDynktdKNnQKvys4ETUzwDiAusPf1Mc4HFtYsTdDGyoup7SCMfpsD7n7X",
  "key13": "4VmDvrMYk1TfsU62Xx5pbCPERRhytxJybxW74XzFed4oaxQG8Tj4nuNoZgaFMrzm1HLAd4s12obTWiZyab5ryY5o",
  "key14": "FwWD6rLpor9DVsHevmBV3P7piE3gcWHHyRHdNwy5WBwfgLshLLu1e7WmqNErNDEMXTphAaRSA5pKqsQVgTcoeAo",
  "key15": "5hn9tTQmVQ8huQN7owYjaNUjspJFXN7UvUYvBL4P69VBihcrK118hPTASqoQMtXJF2Au2yiqqjLerKbUsyYvNJnZ",
  "key16": "5pbkuUmzgn8jWMnhxYgGxgC92M1rnXgnVmCgodMziVwURqqTosSiSVsbVXh8UShVZdvZ9Lt3bGA6ChzHTFMb4U6E",
  "key17": "5rGUQuxFCHD71Kt2YMgw2J5F6ZLTURhZuN3E76mVYPeooF6vPJN6ZqtUJv6YHeVwAZ1Fq8wmAuZCfhvgToRrsruG",
  "key18": "5XcA83Mx4DzLdY8TDiBhpyFxXy1hHJtfja7QSERodRyv1kHv8TXk1yZbDkoSCqX6RNWiMpzSAp8XAUxP2M8YbJHz",
  "key19": "rfYsUihXvMeVsmBrTMnKL9grCm8dhBQ6cFT2ciKPPCHyNPxtsncHspD9yfxGoHaT3CGAzeobLVaGHNeHee83bFw",
  "key20": "2ij3bW25rS21VAVkqUBr1hKQoSZgJzhbEY4QSdGgHHA6gszxH1Q5eMPdE3EB9LSjkwgRRzSHuQSDjaoM8T7abGfM",
  "key21": "4mcszLDsbvzoCoYfpc2gmTYNKx4mMenJtPSLP9XVHnYcCWsD1ffr3abuD4qoR4YARi5ZwcYZ6avbSGQ5VH5gFLEn",
  "key22": "3YpzCCyckQwrBU6Mj6NbQxXGKWaHruT57BZfm89HoiQ72nGiyCSSkjGrzrFTkp2cvqo5JMjsZ8xjeSVf6Gon2S5r",
  "key23": "4Y8b1t6JvtV7mtnYJCVhNqxe7pztuqZvqRzAci65pXcSRmFjUzRE1LQ5KwyZDR7yvWnrkpaQaqPAtVLKmY8voetr",
  "key24": "2aSEze5YcXb7m3ZdxD1cVwwprpydELSSM264WU68j2y9RN7zAqvTApttUNKTTFUam6XAnq1uGYMrCSDFPz8km7Ct",
  "key25": "55fLXQk37hzYqTiEe7ZM5YirEAxeRAdVaCr5Ptpmz12kq2TVDMo2K8SkdU8epCSD3b3EUVVdRqgHPd9uFhHcCtKt",
  "key26": "64tA9NzRW11Pdt5APWJ8Wa9DXwvhTKSRGAE864sJPwcDJmm8Pxsec6WiEpJXVWxgxC7sSafJFHAVmsbGqtnMdh8L",
  "key27": "4UNZswGrAoHXDaP2rbzsQ4PkesUcQSGX6qEKkNLokwkjVxBNyeZaNzC7SQKFMhMikZFjq671FhY8JuTVoPCo7NbQ",
  "key28": "4JxCvw8DFowVc9VraxFfcY8NS8b9ELgA2SufWjkoxBmvxW8zPN4qmTZK9GwPxDqhv2y9hjg3WP3HYya1ufThAQL3",
  "key29": "5xKLJvR8CL6dvqWDR7kMWVnKHf1EkrKa56EjHsKpZKTjMYDwYs1h8HQscFRMdMmrsP854sZqMXNeAtMec4ftNk78",
  "key30": "3M2HqfQErNe9TD9e5e72uvS1fLzSXgK8MpZsDEh5d27NrEFATureQUdF8SHgGHAkU5W5kUibYbW7ZZMV52WBwgdM",
  "key31": "2B7B5McHnNht4nGWFop2y6bbhNamuhdUoeDp6iq3atnSnxGGSAMyzqDNrypCrc8Mxjq14F1VkNXdDqtTvvg3pLi3",
  "key32": "YuNBn5qBLcusL7gahdJQhiW64cjve9TYbEBfbsGM5jq8dCGooSUL3PeFApeCThbztWAHLLDqhNXvwFwqGLMFM6h",
  "key33": "2p1Qnp1KEoMbqqgERxaipSxqDtpz3irWKnd1ys2dg3uMD2mgwcAxC3vpPtrGM4FF5teWyg94bZWC6TTJFv8YHcLo",
  "key34": "3SQhFNq1g7N9mHCcFg9Fk5E9Wg2hiXGNxpRnHdAKsHLKq3WZynoEMM8XZwpviVpaLpbVvVyKZLW4Qk2M781w78uD",
  "key35": "5TmL84JqdR9RB7D835s1rCsxXS45q3F43SBVdS9wMk7EDdFWYDDM1KtZqXqcadj6dnDNyBp1UVG123Qx1MUTw7ZA",
  "key36": "2Y82XUKDoAgvUHgrK3baj5orXcGFwcwgTtDX7YyZX2kDNAxQBixru1D7y3JX9hpy6agfEjffkJue1jPrUMMwrGMi",
  "key37": "2zoS13aAw562wAqjUCDGSifUjxJEj5mzZCZL7EqFLFkfehDmcNoJPB84MnC7k3hrgUQW54xxRDrFQggKStQjmxDq",
  "key38": "5v47673XHjn5C2dwa7ZunRrMNmTQfwiLBB5i2kJpNXb7iW6G2fJdVimss5x6idfCkXnEEwBjehdBbpdrpiGCHkWf",
  "key39": "cyuVsLzN4sXJoyaST6UaGXqpFSJa7GHAx21JRh4QP9uF8qUZwZXUcfd6gvps8gnr5H2u8nG8FPztsyM1UchnFEy"
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
