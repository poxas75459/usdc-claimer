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
    "3Uk2uDSmefZLDTrz23CifX7BRsyMinD3JiBJ1D2X9TB7JRdZZhEi4ZCZNRyg8jPPJaSgxLTmMfCSScR8B3GFKUtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VpjPHcX55rczQiC4wsQDh8PDXCRLyJ9fNKRhF6Q2md2d4LnKj1KH9dEX9mgaRJ1ZUJCnZURqvUYek1YKn4BoJwV",
  "key1": "61bYrptSEfvQnWum1PcYUBpLHrny8W5XxYUidNumDtwCbF34rtg8auDa6MCNkXw9CVRnf7nvLrNXa25RC8dRr1UJ",
  "key2": "4kmB5cRAvKrJo8Uwh8fmn7tp87kUowsf5bNznTK8iwgtqWeZfCPFo2jxtsDuxq1nJfDrZ3RDYVLVFVGBnq4B8cLa",
  "key3": "3Svd3pAkiUMM6sx978LSSC7LSec7Q8uS4BxyjNSf1naqntdk6FKqXW6hLxQssMY9k8q4fCH2Xsso8sNABRnXAjeR",
  "key4": "5Tr238buAqsiNyf2js2zevGCNV2nUAdtwPjRzdWErxbhL9jjiuRcKjam3jxZJfDYykvZGbtJdmEmfsYW6zVTPAZU",
  "key5": "3rrHs3EFjdzQDu3hQiD3Crv9KKC2ju6VMqL8HT7WWLxi9UWpCxdbygzPsAuEZcmGo5K2jxaG5osUPTT99X37ZATt",
  "key6": "4175GZeGQD9vUJDmnFfpfpGLNeixVQyxgYabutXkATKtfALtAJSd42BFbWUvzggsWoMZ3gybKnRR3UUehseL2ieT",
  "key7": "3ghhEdxkzF1L7rbC4vCNN1oXK4C4BcXAr4nmVR4HzFZhWyUL881mFzU3h4mYMy6n5zhGFmMQxofJ24noM3Lt4vDP",
  "key8": "4cPrczviVrUjaHFwxEJestVwfJw487UxrkfVJ2wTXA2kFxfHnK7KuSXyvhDDcWsxNvAPVbYb4SHEYrefp97jtpN5",
  "key9": "57aruLyq8Qk6gx6DbkmWGMQsF2Ap28CFtZHTKuozQFcdXVz4hRct1vhaUhH4484deYUw7UKp8HrSszvG3cLpNark",
  "key10": "4FTKP5rPKoVyunSMZRhzKPk8rBwW5NLAiWkXW8m3CgK5nXGnuUW9jSrrrjG3dcsee9cn9kFGT8VcCXYFF24V21aK",
  "key11": "4dbQoqaru52AbJfYLReRecas5e568s5xCT69826f7PKfesb7ZEhyrbtxFqLZ63kSvEhao7s19wb4KVQkaCaESw4b",
  "key12": "5SKfmiLN66ANXSYiuihQwTNQi9rUadjyghndT7suxJcT33szj6Htg5My3mEkuCQHFBRGBZHJ1FQqQfc5oNxwUBWG",
  "key13": "3gx8c1ii2svig4BLQgYRAGFZ736vkJP19USQxQbwoaMBWbaSPMsr4voAYeTRJkmcDuGYdyBFrZdkkAZjrjtNv4fF",
  "key14": "46jg4y64eQMCZB21JnFP3WVPiNo5q4FTZtPLrav1RvC79Ff49UAdzfuzGqpcPr7f78YxzwkxoXzxfa9QM5wrakgG",
  "key15": "5UdS6EhJm49v6NV7b6eLM4ZnzoAZ9k1v47xQExLs8RpEFq4fMEr98FnwmWEWC532okocB6jC6cW3ZVEm7GbtgnCL",
  "key16": "2t1fqFHjhRYwYhVXZJqK7Q5rZukQZgMLj5VwtyHtxuSyhPxqGQXpr2ikeu5dMNosFF8xCtmNakVAAmd8EEmCr7F5",
  "key17": "2dmCnHCTM3DxA2zeMfU3NZLLDeNdee52RMaoaAPoREFh1ZTabJeTudY7aQiAKnnMd3daxZ7KyZZySgf7tJU6jTZ8",
  "key18": "3FJNXsdBRD4JK8RKgyMEuB7R37Xuo5rMrZRbP9MQFfuvLJrSmqunBGz6ev634Zx1G4ZNvZYHaFkuvXXfUQoQasoK",
  "key19": "3kfYdusBaCSzMZWB2r3f3P617CS75UMNeYQG4kSnjvLQmiBGTarM7uWJLxiMHtX6h3Y4SBq87qgrkjUZeXHrgxmk",
  "key20": "2k6nC49KWYnroBH4NB2Zaix2akScKpynSA6HTLR8RafuaVnpnqb1o7Xk5Q9dh6r78SwvQDWLFBRTtaWsKwNZ14AY",
  "key21": "3wiKru6dHAcAFBeMJP8nshgXpxwtLTzHZKztayi3dQP9SPTUMv9HXf9Wt9g5kTwjTH1hjEGvcYeCWYANZQX54EoH",
  "key22": "6eYAdMHiwemmtYZh6GgYFbo8ZXNJYXerT9vgNi5HJsMdeHDDz8FCHEJsULuFjcZVLToiWxsoQ82RsobdaT4LkTr",
  "key23": "3xSz5iudXPHp3DxB7BmDvN9V2tKyueJXgf8Rkdw1JVSAFYnrByBQrn9veuT2uDyE4F3KbuuC2bZSMC7utJdHVLVq",
  "key24": "3MqmxRb1oK4kyQ4MDdsqzTdRntdZvP39ArRcUn35JTCQAD4rL7yfvmXSwsDnBg93NWj5VZovnhuFtnbDBpWk6ftU",
  "key25": "4B56pbUgkc7oby4Aus1YuPVRXYw2vc7N63o2CdPL1P44V6zNCx8wDi17NjztCnmRJpV8wDicjM8yeso5JjNTw8gb",
  "key26": "EJH9hQwWrknXJyJ8JNebpcwCM9WwNM4sPM8iwptpG816DSZNtyVLo5pRoLj1AKMaNeGSzn42hDNcWcDYduEAiyp",
  "key27": "5hvf9h1v71AbjwtjqJ1g4adDKPnKPTvuwMzfobpHGG2JXokJFr2VoyEBEe4Ww4xhoyjMr39WDE41qafpT2bwdpc2",
  "key28": "3xN7QYmFiHgLhyKFpdnBHJfzksz3dkoewHtSg3Dwa35GDyS5PkMDM4CrC3MN35HjqpZXHNSsh32E6c9odBKb6FzM",
  "key29": "5LdHUgWQ8dfYRGyQVJAh2gmYJQ1kagK2iEXezVLFBqVCb6dLQZpHPf4m2RuC5XTWfcuRFpsHzbnsvvXRweaC8FPS",
  "key30": "3ZdNXAPuf7cSSCs78FRJgg3GwXsArRY84jwzxcwVG8WGZ6XZeuRmphaJJBC9hVsKxgXb95PsurnYwbUFE2abzNZP",
  "key31": "4uXzHLFBcx6sC8zcwFhGMuDhNLyesJTD25usfKATFbK173b3E9gAquyRPzNJwaQVQUM9bkXzCQLhapkLHGLQZZgu",
  "key32": "ecp4LQuoqE1AMoDARutBhk263SBhXXLh9vVrHsZRjGQnSHdJ6iHa7sw6x6ptP7FyTCDiDiq4ue7SBiGoW2xAznR",
  "key33": "3NJYNywu3xcZP8QjjMHyKzQ19E936RxM9Gq4uysHBZHFjSsqVQxuBm9AsaUnzfFc4Jb1WBr8QBqR5KvY25GWcDGT",
  "key34": "59baxfZXeFbkPh9BesQb4xjL8Zd5FEWNPmokwnb7DK2ccCVrWqfdiDVfM5NqX4VddCXaWb7VkneRWs6MzMKtxALj",
  "key35": "4ZfKi8PQaRptLrUHpy72CgHkhizdxmvqPASvNeCLsmP4uw4XV7unF7nyqptKHYvihTSpnkjoGZ21Qy8y6Yaak1gt",
  "key36": "31CmKK3dzSyZC396Ado3gxrNGkvom2akJYaG45qvN3fVa3c9dW4qX8hMtBu2LMfpSxeUibo4xCT1s4xZeswUWXgu",
  "key37": "5GutYdL77k8kuTP8MH5zj27pSRvnPzAR5w2Vb3MZkEcSwC6J7bGBHUM83NyiykCgij8J3ZXPVFN197W2kJqANniQ",
  "key38": "2GrRgpmN79sMsoMQq7yEvAaGdqBYPE5UdjYXEBvrFoMMRVZjy6Lw3w3tJbDbJ7KFMFEBpUdV7pgCst5vCakaBbjK",
  "key39": "36Hq6xAc1JZ7HxWr3gks86qxBihhdwHBjYjwcyAZ5h8FAXU8td16WP4Kma12nrfmzN1Kpt9RvArMbEXnW6AuvMXH"
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
