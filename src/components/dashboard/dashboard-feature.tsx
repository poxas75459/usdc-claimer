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
    "2Pn7s1ZtSkSR7SycfqFZLWG2Q92yFRBhcxH33mkRgvJqefSaDtGpwiFHgvkcjXgQK3DJwoU6vnJkkfBuCsZja5WF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZLREQjDsUb3sShaUEngyJNg4nKw3R5vdCK4G898x7m4DErJWsbHjYgcvPqDtjAyVH3fvrqkqknW8dasKq12CTcg",
  "key1": "5oEvtzq1BHevB2mERAhkFeEXCH3HnZakpeVxXfyBniYh1jsnWoZSRbMcP5mZZPvrRS2c7SJT6bjL7t7jG4yGGrfk",
  "key2": "2y1ZoHeUa6FjtDWerFMaHabCB4BoNNJDJdjBof9T3WCVNSMLSwoDaJEYqNPvTXoA3J7nqA7HNWeihN5HPZGx6naG",
  "key3": "2umwCSx7MBudPgBrg4xxQFCkLjicxG4FpKtTCAcQiW87K52hGggG47tZbYuZtz66q9oozxPQNT8RUaaniJNLTjXT",
  "key4": "5Ao6FVFKHDfNC1BKrnAKQHk8k613txssELygWqyNZuBi2ipQnL8pC8P9uHybUzv81FkQZ137ekF7keq66cQNnUGH",
  "key5": "3mKFkGGNJGjgRoNvRRPVvPiddEu18zMi3TyC13sW3MnEYGBrNynCtpmFSe4kUs6C7ZXVbPKp8Ly6dVgfdHsVu6x",
  "key6": "4hU9cU4zDADhbaZgqNf7F6WkFuE7Gv7rwPFAgScgkeugKP7fGTgHbP6tXam1Vbzoys4JouVZnL8BvoDb9yg6L3ri",
  "key7": "34vmSYStgC5tdz2a2P2NmiahXU4YazdjciCRUABZBcy9C47KKyS49mUcrLXNQe2xnHMvQwyN3KNn2XNkxu1pMsc5",
  "key8": "tQ9aHxogbTADAAfvB4BDk83gAngW6ZhG8n92viZ7tSkN5stwC2BbgCdfK2THyxGDWsH6d1CjQaubDQy1cDd4qXL",
  "key9": "r9vQ1onCCSWQeEn3yi6uTDR5xWKj9s6Ka842PiRm4auHRzmnzwuinVBcLSKreg333eNttoRbgNuiFeiBTuZgWEy",
  "key10": "2Ybqv392Ecb2Vs96LtWVzhJsF5Udyw34QQ1m6DFayhKCvZbiDpKHLhNuhhxLC7eDKxqwsfHt4e8gmbJz77qhsTV7",
  "key11": "5gbZwgowzN9zAu9DvWepoJQf2qYiiQFJCvX78mF6EM2zzFsNMnmnU3CAE3iQ7bhBs6ye4T6pddFsbjCG9amr1qqB",
  "key12": "41YdtiqJ7nXtegKDyRst4yyWLvdzxtr9zHuxLHQkrSPPeWHCV6KFpvCpuWKw8EAudadh1FghJRFV5gxmcAR9MbyD",
  "key13": "Upnx73T1VfqnexHPgSaz5youFTGMchSXcmFKDrETmN2hFDPDpourv8KQfHWHyg5gPhSmBqi5qYCp2HV8LQmuEby",
  "key14": "34Y1fMkGG6bMzRe5A4PrmBfnJcin5j7U4D9NsM5WmrirLrdkbpqMdHToa99UQMbsDquX2b5tv5jn39rSNTWM2Xa2",
  "key15": "svUJN2DbCe8Jvb1zaRDTxGxgzMNdmSSkJcjeADQ1WXbQmc9inf3EV7Q713HjpA5SUsAVfQpaFRYGjdto9Qemyin",
  "key16": "2WVSjg5aB3KBcVY5UtdrtnwhEHuTsBq6Z6Nkr8e2Kvxk9thPS9PjwwNhe1bLfby2eBCQSGpgx63WvGwDXpjNtZbQ",
  "key17": "hm6VEdjQLYEQBWztp2wNa26xeZRyucANU97SDTsy3YKGDZdX5vY1EW9zs6dTCheDNtDcHnz8uMBt1aojwZVfUon",
  "key18": "XichX58Z52JeuLWN2CnttzouUgosTkBusKv61trMtQ3M5v7ayDC1cyx6Nc7KemaFTxSzEVGfNT95DHwKdt8ThQ8",
  "key19": "4mY56q8wSvCLtWhwUwc95vEyrhbdTr92SeYwecwSRHgST73ASW91J5HNKSuhWqjmgjKTxiMkAa28WsDtahc6YJZs",
  "key20": "63sBkU5bf3kLQy1MVXjTBk54Y42BkmjQmrwpuBceW9iKn92MDJTewJyHMADDj7RFJZ7A48WK8Yr9HZmF2j9TXi68",
  "key21": "37oA9cxJfkcjq7ykZ9janR1we2wcRUzn9ECSALedWnYdPzmwLY4cxxUhf7isKeaBtGSpvRoutY6eP3dyYAJk6Bgo",
  "key22": "4WAw4J7JwRksvmuUTzgxMNAtpPVifGTTh5puEy82YDksKUQkbbJvSWVrV8UJa9SUqZ79inJVfUEBGWXw12iGkMtk",
  "key23": "4EmWdQDqiyYFe3vUijQWtd9nbHyf6VMTQCKgwv2Exmv7RngxHHyfXdXMKtWdsjyx2ghABs8cLjHoqP9Dh8SrBLq3",
  "key24": "4mACkdkAHjUk9zq6Hjq3Fx4GqHpUQhz82uPiLQ46kqKioumkQ6i8ABwHwFJAN9FFoJvyycBtGZFGc5UpwMN1cxj5",
  "key25": "2r25SvT4B2C6vayNfFFJKc33gs9oesJdju1N3ttaxDsb6rfbZRkt4DpeCamcLJefsH5DXL3Q44r8vB6dnY2eRHtW",
  "key26": "3GeESaARwySSCZREy6kcFyvWzbeVSRMT8nPC1dFB3847u1px2TzaJVGpchv6bBhxw2Kk5dKJpf2A5Gm9AYpbm1nL",
  "key27": "3N4wUjfRBWKn3SBZW7V7inTaxhZNnFv5uJqiiCYcpridEFf1fntMj9Y7CeEgGgWadWTATXp2aDAPrZSXbkj94oFD",
  "key28": "44Lz6Yyn6DBzGRUqZmKgoe8T9fSn3uFo8SLskb6ZqivhMZx9edaDUQTwsvexdwnvhqn1ckhbpDhimVVK2Lb7cU9U",
  "key29": "4VdT7k8j6fSMnr4YZH32Jy2PTbmnhwxxcfFG7fy6evPMwP93BW5dwDLXFbyYghDzwJuoXDXEFeBtofxZLs11iS6y",
  "key30": "xA19yS3e3HoUZiAzdKpWkgED4ZHM1ieyCknVVekJxvyCkAHuUdHSj8JRs4hL9piZAYSUVrYQXVUY8BHuBQD3zk8",
  "key31": "hS6ptLdYhhaTDpVxJ6gW9jGfL6FY4znGQGGSw14tbpsdKrRutfbQuERZ3hBQvrsCMXyWb4Ko5z9LYwKTWBzYLGA",
  "key32": "2dqqGKRRw1Ges3h4on6jua4dgwjH1XGihWaUnCr7KHJvV9wULpGkJD9qxbYVyrQSU1tLbpdh5E4Ek7GnW27vkoJM",
  "key33": "25R5dQh3TbHeYQNLEGKpqStwoe6g9XfR8a9om3KXRswuZGQ9ARv7H126mXuHqj93owA8K495JDGN7CXW7WiZDbEz",
  "key34": "5idtzJonm2YUByi95xiWv7cowht6da1fckV4XRrzhTH3UHQPpeu59Lp3vZk9cgLy3rTuesdaU61bkSciMg66up5j",
  "key35": "3QXvEFNUUxu7WKQHkcGBkkHppZR9G85kkMTHAqpniroMNsho1xkTdksURfhFaZoLz1o7ka1UWjq6kegxMrFtXZsT",
  "key36": "27bpJXhV9wRzJnF2kf7zUzAXYeDLtFvkYU3VUcKfS4cGDWxYzNV5p8AAPxkhsWCdPmZJwa2rUydrvFmmsqYf7tML",
  "key37": "5VU3xuVhhuCui2DiZcLwvunyz6HWi8vTTSnEcazh7p3XCjdmMKDvkbTAmuqmV2wRQJhDWJSrhGLJZ2VqP98YjTJp",
  "key38": "2sQizTKmdLXtE7BVxsubqkj1Fv7T4DLWxvX5b7XnQJNuisaQN3eK1dEGR7kpkSCnnToce7aW9jj1C1FMSvhZowgK",
  "key39": "5aFRLqLYEVM7YVQuYF9RtRoESi55X2utA2xJStFCkQv6UmgZBf5ytpC74qnB5R8dKrVSkapTvfLyED4a4PQKJVW2",
  "key40": "4Ha6184vZoiWQe6j7tChCa687monPtebvTEniXDwfGHccvbCnhv4Dj439MiE58vSzX3kEWvJ2SvJZLnzZF5E4duK",
  "key41": "2rnHL7kQ1eovktzwvxeYqiao6HtoowU382EdQfqCcyGibNmmoeQbPBpJTmBayawXLLbC5Q1uTGb34ZLapf2fX7ev",
  "key42": "6425KVgRAMzMq8WGLuvGjScAJvjJXwtJDngs8CFG3ecP86ZK2dmvbocxdf1rwK4Ft6ErQTvzN1uwPtiLBqDN1esC"
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
