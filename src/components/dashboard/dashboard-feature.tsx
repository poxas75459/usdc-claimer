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
    "d3cKPjdxzxpdvSQY7euZMyiF1xBRkmes63pHJfaJu78p9P2DcJdRpo2asnpH1dansakd7hoNRATLmzbCCj7xwpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31yxrFkdqHebjXTtJC7fhtnLJbZTj9hGe3byTAABwG5nBhjqJL9RBQVgpbLsU77XGQzfaWPghN2i2kHr3nsvbEE6",
  "key1": "4rS1giEfvfJysEsqPTp874MFtabDkhXH9dR8b5XvkxdoefMKsja1mB3huuPdZZC95FXs9r3mRasTvdPWomUTMjZt",
  "key2": "3hUdT5V3BGqXUdTXxUVtb3zrPF3MY6EAh6EPKPu7D3HudcAhbw2miFVAgUAXHNgCjpfvyaEoA9NbAsMcMPpMGGpj",
  "key3": "5ShMHEmZco2rvAUpt5eZu9xhfs7yAdnKHm4nJyprAwnHX9ss2dd8NNdC7jC11Ex3V6YwZW2E2mSVowgudYxym3Co",
  "key4": "4VBS1DC9wgEfX2JKyGHJ9NAqXM8XnQsik8BChk87NFvNnkfQSBScGsDb8uGwkU69oV1ahu1SwkT4jn5avCEesjxG",
  "key5": "2cFRnL3wdG7UmFYiKyDDrezP3u7a8Hh3DpNUvnf3ewkpruRJ6YZA4rAYNw39kzxa94izAoYr7bXVE9vzBEPdikYj",
  "key6": "5eASQxMut2ZJKKx7c24sn2bxJt1uKXjyu97ZvBrYoYUuuSrWst5r3Wg2ZaCg7zPVFAmDAFcJHrLrw8FcBw7jiUtN",
  "key7": "33UkFQid5Qj5YpptrEhzQVosXtuxQKL6MRme45C3YgoL91DBNZKT51LQnWWaZqeJEzHYbJVg21RVSwg3LYKLhWU9",
  "key8": "5VpLoWkuqw1arzZN4eKv5P5iGHempKYckpm6E1dBLUeaYUZbwA5gFenXuQ3h5YDio76fuYKrzH4bdMPuW246fjNb",
  "key9": "3gMiCTwfuQcs5jLpr6b5Hx3qGSnmeKchHdqQn2utCBBSz35WHPGmKesGUD9XEQ1JTMYTt7FST7z6Rp963XTkM8pr",
  "key10": "51Evbv3wu447k5d3TPVvjkKVh2bnHMqTqpiu2QBFTvdVMXuJw8TkcG5obZztrk9b66g6G9xsi6Go65kRnRxwNf9s",
  "key11": "3xZrJjK5cQHA2baGeUeK7xiWXGosazfdNawYgefH2RPzkLhHsEehZuZogKGYqtDBo6JAYie2DKfuygRrSX5gQguZ",
  "key12": "xLJ6kHovEhgDnC9MDHZ5ccdtniyi7ZDtL1okvD9RrzmKHKxam57mDJPbVFU5EMyzAidLDif7nBkSRhZ4g8b6Xh3",
  "key13": "27chjwXJe5wvgoPXyDTExkzmiN1RqLKkx7FNxFtkYT8bK5yu89APh8vkryrgaTW4uC8K9gXNRR8U6jSi58ygaXUS",
  "key14": "4VrpKV6TcfptuBR3nHFSzkJfUVo9HXA7Gwc1DgAGRBdNMxWcT56q2v1BsuXgvF5hKkgUWJMBLUNmP4exDmgnnLBr",
  "key15": "5zVFU18wGcp47ohvx8KF38gyrDMS5XwkbhbFo3iNKaZByZNfqZcLooARdy5vSMfUZrqTMMW2mTGTuANSLPfeCFnY",
  "key16": "2edeZnieeKkKNvHBfw2k6FVRpwxm9V1dwzKT52WjKr9eKPdtDu3rDXj26YApcZGszHhDtRammT2GcJnPR2GjrJQ6",
  "key17": "2WAQdhhmfRVpfP6EmHQQAyNhebyhVTXXgzfPv33D8yacy8VZYu6XJUwJ2nxKj9eKUgt8gQmmWjbbZGVj4ALeCCCY",
  "key18": "Cq9JZtGTd6DABdPS4PkZ6KRBHiixRVaXzixbhKcA4yshGUUkhJiVTCr2BEvKUEDNXPSDiFFMCcxwzyKxSi6UbKE",
  "key19": "2NBwRs161s7CRmudBZG3tHvmwaZ1dHYv8i6ZpEaq2ty2o9SncyTX36BKB1QG6dReVrgD58NzGnARjDKW5oFiAWCr",
  "key20": "4fnJHLWpvNypjLNSmVXcJiN6t8w9Q87LfWsixhtLqhwjPeUCBKcQwVrLKPbnmiFKJuxNZr6YDg7WnjTsK3nkQt5f",
  "key21": "2zMADEr68nCHuwjBugQqSY7JjKL9vGPJDRHaSPeLvAs81CH3cQ3e6Nw5F3mP9nsv2aAEkAN4G2DJAnwA596o61Ve",
  "key22": "63KAb9ipgp5H2F6XtPhoHQ41EaRzbvMN1WDJPaoxkTLXzohDzJAJTzPKsLTwnp9ymatwpaEqQ79i7pZYhBg3VWuB",
  "key23": "2kUQPUfVFR4JDFL7NXufGQ7B2SqcqEeiXhRooqWq2fKXXbJofR955yLyr2ogbbKbaopMvnCZpZP6hbn5r6YMTxpS",
  "key24": "63s7o94LVACWBWVezRufwkHHwfNPJgZHHi35WpRhvfzwUrHZwN1iGyrVrbAZgpADB6A1tmqzXXbCY5nZS4acZHLX",
  "key25": "1Emr2BuZkKbG2p9g6VgMLBASNmc2xtWjFt3PHtywERfRrAWVZBKQ5vy4fB1AvuB2v74yUJtF3XL3csX5A21UeoQ",
  "key26": "3uLzBKyVT6YRv6UwX9WqMRoqBjHdWHGrYZVpCxwxs2Pk8jEqp7WMK7xvyEzZcJ4hMRrCWjSEQoxFCcv3bcQxnRgK",
  "key27": "36PkNaTvhavpYPJ756mbHVGvBoandVsTAuvLzJ1dPuYEFoBTMHzgVhWZ7Vx8RL7cLz9weEjqkKfoi4eB1Z1qwVnp",
  "key28": "26TcUJbqDktrfkouQ5v5qEp9dT4UkMZoZaTSmYtaSWhBrbujvjADZB8kej3f3kUmUBzFFcyzhB6DtV7oZAmeFAGY",
  "key29": "5XtbKCMF66QX91LUSqEEVJyvGMzvU7inMKqas4uwX4rUUCcduLuJMK7igGuGAANFXRfWyH1YfwVkJofUR5F7Rctx",
  "key30": "3shTVFAZiHF71SjYtcGHrW2PLUiHRPaXWsCtWsgNFeUBLhSwzZXPuZotebT14ZyQcFHLYAWpJsRMS6bpNXhmKUqa",
  "key31": "4BVnP2yMQ4fiXCLsJqp9op5Z1F7mQZod51fgh6sKqQg8zhEiqSfsbxzxcV5SHqrY5tAptGZBoSYHtFkCzFDgWj2Y",
  "key32": "4VrUuGwYeQrei7hoYtLdgp5JAkuxfD1ZuFuWZwRFGZyYkrjG9asnmyyGRf5omeWHYsqgg6dW2kixKSWTwR2FTZGW",
  "key33": "49UkZh8miAP1bJMngxqLoHkefPVAcHxwTUN7ZUqf7zJWWDrHXPT2ZMdpYKv56hN4FoXhyb6oMZbQ1M34cmnkA5ux",
  "key34": "61D6ofx7j4WbAeF7owPDHPe3qv4EeHgrRR4dEoPcy3DxJJkmGXnsJkSvb35FuehXQwYnr72efn2CJvKEoVcUtUvG",
  "key35": "31UL6h3ytuYZc9mnoN5gfcsQJh1bEorjdmNfnJGpsEnDJqn42SoZSamhKPs74ax7djnhFTHbZy6r72ZhZMK3fm7s",
  "key36": "3eDacZyeLeq6G8PB5YQ1uAsuE7QjAk1LJDeLxQv2ntHUj24xQ1J32AVYh4diz5SGMywcGkgJZK4C79GBP2Fc9kJk"
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
