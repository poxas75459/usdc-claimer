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
    "43fsNP47Xo1t8pMjSeML8Nuf16Pcf2fj7S9LMXh7ezC8LAqFP6JxXS1PNQMNBtDrNuwCLxTqMygcKP2Cjr8vBd4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T1xrfdBk9o9wDbwj7w5YKUHVCbBD6Gjq3Hp9AdThaeR6BFpCeGt3miDYzeKcbnYyrrtA2srjcSNrcdzZSX2h9jU",
  "key1": "4K6kfpHyzeKpjitCuCV7ijQEN4vSfGba3nPZBLM7KKUbzbJMR6ePx6hp1vV16jvQMWJiBzATRQ5miELX8Nvwc6hf",
  "key2": "2pGGo2w5SkruKD64vJawR4bjPzuDzKKgJ1cMqk6VNqMgxfLLEkmzJhZP1uQoSjT311SdtppZVLq7yyoJ8Fo6BqWw",
  "key3": "Kr7aKrgyJCxJBjgY99hrDn47x59zdPQfr5oqgjMXJqXxs7UV8eQnMEz9CL8zm11SpV4Bhv8jErNtrqUxMwp8yWv",
  "key4": "z3qM1GJdPyuvAB9BPVMGzAyh2vAaxFxcc9tMS7mCa1Xohq5whxTxyFH99MYQL5Tgky1FCxshDVNFnHXMddPBTM4",
  "key5": "5L9gJiWgbzkiT8Y556WA5bCNXvVBeg6jHba4MghawPCpL88EXAu1TvoqojmgLe6sGxTpciRB57rxAyLQqL3ZobGd",
  "key6": "4EEGxHModqpyhuKsecU7ZR1BqBFFK24kEPwiofy6LPpg5EEZg7NSoV8wJ9agezyLggFisP4uFt72hBmMtJUULf3U",
  "key7": "yj4UGuLNXDvDu1MVN3LbnbQpERLpAXQzEBDArmUqsbk6g2iyn226aN1VUknTLXG1vRiNpBg4Ht2FsXT9uEtZQ9i",
  "key8": "3aUoB2WoQnTGKFs4RwEQmL9f8muk2a8iRXLcUpAC72WQEmEF46MYjfa1ue6nK8Xk7vBUKVLeLa1cWvHCRQ8FDCMR",
  "key9": "4n9ZA2ZV7E53czyxBcfh9esswQWrMvXLRcy3L9k8pQw4a7yvNxHv586XbAexuQYmCkhj8cLaLDV7QpUo4MmTSTHu",
  "key10": "43LyoiHtb1cRqnFPjzTe866zxuoNjBmpDfBQUqGnE5HdxuBDVo5aerdAQ9HQE1HoaRmWP1jpzfq8L5LAFfPDt1Mk",
  "key11": "62tdrstDPuEwUHLuAi3iKLJ4BMQbzBeeypTy2LHc28qcoci4GAZ2kCAQkxwfx14JD6ouh59SFyki4kd1aSPyK4i1",
  "key12": "2ZKRxEsfibU8Gpw1RprVMjHJBLLQA3rsx8tqYpkrcTo88R9GEiqWpMteV5mn3b9vgJeBURagm2ev4AvcyjmijCyj",
  "key13": "5jhteZYiz5XzhACB4rwk96gYqdBkgrvp4XDyYj5W2BmS92UNZgACnP6khEQhB1qzCJ87F5FRF5qgorpFkNDPSgFc",
  "key14": "5aKTyAiLnHH92tW8iK44LSLxxQK2Ke7ZAzw39ZtcbtgNnLSkomvWDL3mtSi6gwSF43DtDPK8aZ7NP53GNgqvLqMY",
  "key15": "8mpWbjLEyP67uSGcnZBhe1zyvj3V49eqXzexZNc2vLaSPfjL9Do2uqoBhBcRdvoThhnVPuqz1hNRgnECCxk7ZPY",
  "key16": "4m8dPqsheCfuAkucrVwaU8oraSjzCWMMkgUv3b82fU5agbQ3SqYEhk1nbEWemNDDj7sCPiqX5mgoToamSsMadgLY",
  "key17": "4NrPVwkjDUyoiFCStTZxqBSLZKWxNPhwKfTYev8Lmsi3pWWhyVN3Tn8qwwYCPWqrcTfJsHgroKELcZUwMeA1To96",
  "key18": "2xyaS99EjiNG4E6QueStuz16iqDc6LnHWXdUaMnHtN8pkbJhXDeo9tphBRX5KTeTe5GSMkgw8vWJHaniaFKYTeSS",
  "key19": "27T32yhqHFi9mnJ19fqYcgjGrbhH7L3wkuHYjXmbdhyzmcSi7ZcbTLamEmoHbZvoF8FAEvALBekzyzeWQU2Kydiq",
  "key20": "VBq6pWt4w4Mz4yCBePrDkDAAxPnhbg2CY7GRx5K3o8QZFjQyWiAWMdj8yrnWAGMYm5NEaXZ1r2T4S8DxyYT2pqE",
  "key21": "4BT7TJWc88DWvS4wd7ehoM8xRApGJTfUc3ZbaArWpCFK6LJ9XUKZ6hMUfX6A5giZ8V6dr4bL86hkSvgm8VKF5Rq1",
  "key22": "zKk2MhKTYdRMggQziEadcx6fanka3sYoGrx4iMEjm5xAHEotQdqqePhMSTz6APgX3Si17MJe6BjK7T9rFi4V2cG",
  "key23": "5REwt39KyxE1TeMQPS8HUrb41sBpC8Sp3PgjDJuPbjw69ETfHwgMxDERarTG7J6hq2ebJaRrXu4Z3zBsDcxuAE3b",
  "key24": "2GHvbktpws1Gohq3JNRQRGegjwWCVZfznqajBTptuzVbgtqBhr4ziDxbEwHyCrqhXPeGafVh5xLkd1cJYyL352LT",
  "key25": "at1PzUnBu2UgmKarwZzARubFuJMrQbgxe3TUq5oXQx2jkiKhqX4t7djWY8YYbz6sntfft5gcCXnQvZ1MWTGGjps",
  "key26": "484cVh8wd2TnwX2ac2RwZu4xVgyW3R3LRQAAntLGtNmERMvdrxftuRemhP2RPAJAFoYHK2nvKPgbJZgtSzXvyr8H",
  "key27": "5JTWqhx2RSifUXa7pnFaJDr16FZNHHoUg3i9PdufrKLukMare2zSygAmgVdu4GzSfSXt93wG6LVEi6f2FUyhLTJH",
  "key28": "4rwbcbPEQ6FiGoZGCpGYZvxgkgzjVTwdHyFrs8weyXKVpvvFAsvEtMj9XgKFkT8orxUFf7KgcYkiWyP7o8fuEMM2",
  "key29": "3dXkEB75EwHQsr1AufqiUkvcs9SYcpGbGknbGZizvkKpD96bMq539jH2oy3vhF5v133PCGBQUbGPEKRN8MXW3Nqo",
  "key30": "2AkhubjJgC25xvvLycGEd4x2n6sU86Kt9bjFcrx4FKcjJXjVswhsrJo5qhWMKxM62W8SvuLeqk9NEj6o8zNF8jaE",
  "key31": "mgkC6gHvpbG1a4fKSxKtFZxd1RUev5CYkKWHTLWiTkvLAxLoFrLBDQaxJVXmqWVR7g7WB2T5QC6scac3RY9vTp7",
  "key32": "4LCZNMGusZTWtYUP7XvWhaqokgyarHSvwsKydvfbCjLDHbKukEXh5g8xmnWCXYMaPyvdRGwfWHQ2gVyRxeK7LnhZ",
  "key33": "41ELA6XPnyDwarWrw4F7UzFjEbqEZrHnNx1ZyxEnxGn3sn5VshZF9sq6Yj2RruaASurLp9JDxUKCvpf7bRs8T4p9",
  "key34": "4kJAv8UMNGkaWXpFpLd4H3bgFas6FCUnRU5aVna5qW6VnXJbLhpx95wqDGyE3GfjpYTJ6iubSrWfTg3QSrCpZV37",
  "key35": "5jqGJXRM857nAXtWCwPoUbj6999WsQr2iNNJiSUQLMXrWCGx82AzHq3JR5nRgCzEzo2AHfRQ5YyuFb2CKxfmhnsm",
  "key36": "3n83rKX6o9eXXWVYPL56XKhqzdQXfwaPc5L2TstvWFLiPotaoewFinbSZeKJcteEkBY1vRMUZpqQUNcRyxDevaoY",
  "key37": "2LjA1D3yqUZXnBVX9qCHWtJ9kHp3MYVppqRRYHnUy4TwsmbM947ydSCtwravE5UdAch4MxaoGptPuZYQ1KR7Qv9u",
  "key38": "2vm842zEnC55X4x5gTCfRmCvyvepG1gM3NKCTcV8tPNRGdo9SkWzjPBgebZLKk36TVqE1h8rkqPLRLZG8o7qaGFv",
  "key39": "3Mc58K9WT7CZp8R9kt5i8AMFkDT4snjJN2HkR19oumXEV8Mtu2aC3cNxsr7TrYP2HHh1wzBtJWh1MYN7EyXoXNwJ",
  "key40": "nLY7CQxfzQJ23fAGjSp2md4q4iKEWyW9iDYbDXrM2whkaRCXujk8cE5bS6vgiehVonpPBdsdkThx1DnPWntcEor",
  "key41": "4KygyPUGMNwFGE3xeMbFd9HvLyce9QAhoxhJQp9z8z1qNaeBACseW3TnRHWwVPgx8GtcEbG5b2yRXJFordJmBRze"
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
