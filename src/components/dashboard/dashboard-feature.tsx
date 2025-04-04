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
    "44sfVdcj7FLB7wvv5PHmGz1cDQ1jPbVXC6PCVLWWNYdyZh3N5D1skhbVffiCCjhjxpup2EWb4dtx1H1BJB3ByiTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CCtTxgUrw5f16fPGbQwfWcZcegGENmeemFHGeRkj5TSw5ZXyWFAPJCW3wzt3myxj6ctfwRwMFa1sNsxzoRZkxfF",
  "key1": "uhDxcLZhTYEQMUsn34kZe7D5Dv8UGTBJLUaaxK4TNVTEvvZYeGfdUaKRqmYB3fdHqeu8RxcD346hz7PvLm5WKmq",
  "key2": "PLrqn2bniS37GEnZBtdR4qGaDEDzQNEvKLdL6vhUyFQjZnBgBa1uYpSvtKMEAUJSmDZkH4gaZFqfG6LbJpTaSNK",
  "key3": "2uUHdap2DWG8EoYLMW6F5MZmLD46E39oHHHTadxGi4g9bzApQ6doZvHRzuS9UvjUKr2VukZJ5HSZiiEGQFvijRwj",
  "key4": "2tL8PnLtrCJCMjmUReMkCnvT51CCetTkAZwSMbCWQrja7Z3gFRjMwwKjLfv9KbwJcyWMtePizK4wmEhQpjSRyFEP",
  "key5": "2YbgV5uBDtCv7BLc72ErBd6W45nbDgCyKRDJ41eqzvuF5NnszmAyrW8A25JyQ6amPnzTwQkt2F85EXjCxQn8ZpmX",
  "key6": "N3zVuYwqPscWWggmbZ8UyYKE1BKXuEWZG6wFjsq3w2HLdE9KjPKvkeeE9fP8upkpes7bWmssaxEdPpgqJFe99mV",
  "key7": "3BVTQsNEA1QDNk3mLSrBQpmNq6gdu1ooCQbkixJxARXcv8saJeggkxpnXZ51B3rTDiFzPeQhcFYXkz6M8rR5Axvo",
  "key8": "Y6NDWCwG7gsugi6a3j8Lb9YvmR1G8jCj3EjXMrnwuzDtbcfbsHNVZXxw7JncPLHz1fjxUB6QXBkzFGus14xHAhm",
  "key9": "2FNbGttHubFLpaXuenEAx1YAWJWkEtbuD65hh598Re4nW5hBYVyA4mff8fuYHK1gEGwcJUn4P3Etcszqkaksmhc",
  "key10": "4r3KaeYp2qKa4fJRfiAa1yjP2iaiEkHL2rmsDgwz2gYwwu8ECDHf5mXNrkz4HcrEG1qBmz2PzRqaSi7BHeTFqoWT",
  "key11": "3Uf9DPkT3XTAEBPruVwm7xUkSAJ9zMHn4cnd4pvk9brusToCf1haW3fEYEw11dELWvMqrznc9YemmphmEWdhkahV",
  "key12": "TY48sZ4ZUowVYLcfQJMtpKshCB3PVWVdkAtKatMjstbM2f54YJbqwAocfYv8wu8d8RiUgZEL3RwbdcP2YchUipn",
  "key13": "5o4xRTZWVpsNZPYiXUpQhsUDPSzJcQeUVSdRvEGmdQCAoXRspDnuCSnE9amr9XUapDnQv9fjWwZ4JNuKSh21Q5Mq",
  "key14": "WNrycQppD9X4w2PYQqKXzBjPh8x9mceaVVeuwfWASrpSkNrbdArznW9NE8LWAesjXP8JLMqcidKMH1BqVYbmdLY",
  "key15": "3ZpUzju3jDyBJonZMBTF93CynhzKoBbfuxZS9nSJba4XstcHje6m7MbGbNWtHh2mp81CZzHCbBqNhLh5uPbc1MgH",
  "key16": "35P4ALZgJqSY89CJapHQtLohZcVyhSxb1zPs77DDYRoSY6kdTzR2PB3QxrygXfRjJ1SgRhWbkqADhwbeH2ieNNNB",
  "key17": "43vMfAhKPD4S8WaCtD8cf5hyLeg1yMAnemasDv6mdiYXkMt8TmiATNESo913NXry9mpp58jsSgMYWivGa2smt2iK",
  "key18": "5k5nVJMeUzQum9SZvZku1GsGKNkhX5xygyu3Z9BGDVP2TSQ3t1AnDS9HYetNfnCYL5pMtFU162iMG1emRfr6BzbM",
  "key19": "3pG1LSirdQPR58zhUNa5guhDoaj2yjxttc9GjJRZ6jDS94Ei9ew7XeS8rzLSKkHs82NhfiDNU7tgNFGbPEDV6F5r",
  "key20": "4ngXG75uQ667CxgELN3awvHkDJs9wwYEpso6mwnZ8m422YkikQkUNmTMQSbAeSEBXtaVva13Ab7tJcHKN9DwYQ3u",
  "key21": "2XugrF723ATBMC4D8ZqFeWxs4GdJUXF6c3FbBB6VC2NYY7qWBzdhJjxcjBviPmnPcavm7KjzRg1nx8WQ193A2Uut",
  "key22": "3NK6W1q7xxCJAX8PzeBr2GBBVm5KKaHyvsgaLZg2mYsdjkXqpVGUaczE5s1nzoccimo2HbHsxHu7uMrXGGPSskXd",
  "key23": "ZSeoWVJ3piHnFnkvzDhKUhou5ar5gyQPvVsGPnn3XBdsf7bUC2M5Pmsi1dvZQvUAwJDKZNFDiuHDF63DqLKX9U9",
  "key24": "TBfxWaaXtzyKkWb1pAYo1dXyxYhZHwzStyTV1HJhV7wpkU72kREx64zv2yW9CyNRFcCwPThxcSb2WR7quqW7g1v",
  "key25": "vUMTrJpZX4aJVQf6aUyGYQmGuGAP7mzEYyBdZanZMbVCmypakzM2kf6q5xAwXxQXm3g4EtDYip6DKuBcf3u35iA",
  "key26": "4GtQiHqxRku792s5RfUhE5KofZ8SiNKED69GCTrSKZSCAdo5UnHehmqLQq6VUEpck4TDrTmm3JGPBqVXAuPd7A5b",
  "key27": "2j6jrwJm2yxERm7u2uAoTsfRkw8d9yczfPTYFkGGxTgxdtiJoupsV6WsnS67sBCuhWWn9HMQJQuxux5TYRgQ5GhV",
  "key28": "2k3eCdKhDzPjJ77osy57ELR968dYWAbqgfWQMJh2CQHVNjAiu8LymXdafVCDmrCbySXHrK427nQKpbJXiBAwVjKP",
  "key29": "35rRkjcMq7cMjHnP9BNMp72qU5V41KS3bw4bR4w6WqqKbp1hxLLwNwobfCYZowQsZtVNxapdRr1qCpGPbxynZ2qE",
  "key30": "5b8RYZM3kUegmnex55RZgRyDb8aF9mPyoAa6dZQENCjXzJA1NKUbvFVy3jufW7Kt9UmWfxQUyL6E18RD5WYHBqzB",
  "key31": "5TTxTCz5yFzB39t9wy9TrWq9DhGVokm9NNK4zirt5EQEcCbCuSrcTeyvCYjhdgBKKj8Rgc4yctizF1m5QtqhsVnM",
  "key32": "Nvdo5TJDVrdigk1a2RUNkoveWhMUounJBKGpyhEMe4TwGEaJ8n9SjT6oomnfTUVcCWBnoYLMBtJ2ei36CXpArCu",
  "key33": "5zundi1qCa85p4ucRjQ5iYzB36YEh168XYyvANC5gRcQd26kYyGZdRGsDD2jWx6CLSg4M5aMKfNgNTddndqcQpiR",
  "key34": "5KyrPRuCKjv5pyeRyLwgsyxd56mQvtbUfXwygNj5faVtrajehQ9qCvRTVLX12gUFQ7V6khaDQEvpwYXkGB9pETEh",
  "key35": "3AkJDUZoZ9ePdZXdZ6UUR8wDesYU1gu6ioEEJdhkavo9rUVmHdzM5Ri7wCGp2kvvLFcsoNT5zTKMMJNuKeU4kkr",
  "key36": "5iMzp9s7e1hGSPPzz15YCJH2MyAwpcBVRnCx92XchKyZPyfoVWaU1EfiVz6V7HxcHqKcKDmtgyU9mGeCXftMmAPq",
  "key37": "Z2GcB7dW4exuV6y4gKeDAKNcbYNYyDqQ3PF7vvbnmsRYJv35EP9LiqRNbssihrvBkL9PikRMfmJjMNwLb7hWd8J",
  "key38": "58tYaxiLQrasLyceX2CdPrXTaKiZ1aLvtQbcGR21EjKMcNt9Yi9hfdy24VBYGWA1LHntYzEab2ykeZpnrcaxKexm",
  "key39": "3PJPvd2ncsPRWsA2vX76zPH2tDVPXuZJpK1tk89AJork8Pn3y5YPqgYvd23sS3J8V6jFq66hpxjW1GrUj3sL9mp1"
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
