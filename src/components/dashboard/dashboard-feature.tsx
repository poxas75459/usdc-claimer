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
    "3xzrRias7pmTUqp9QCMC4xjHgyDmsxQTNjmaJVFsYW7UDxCtBiyJz5KxTmeXmmu2JZpeCNQXpPvvVDzTxnUAfgf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hhfh7dJ6z6U6fGn6KbAaN3xd8BftgTe5YexMBeBzEqfM67Ckqavh93kBKkB6SzHMTaUNtZYfy33V4ixNSPdwYxH",
  "key1": "aYYHEGgKNE7nkfN3daSg2Tc6cwbp6tgAW36Hi3q58BxPPfQRq5PtuKm9JH6W1pWJhc5wBTRPW74L36RG1ekUEV6",
  "key2": "27MZtJgkhYdpLDTqxzJPLgNtWg4dhnHCwLLHxzMwyhvmWzzriS4JcZcSdCf3SCWdgNGV5CvkdweQ6oFgE9G69gjq",
  "key3": "2rVrtEvGaG9qafjiSaP7PizuFzd2ojbKKSffrSY5GVYcKWuuMLV7nXY8CF6xARSS9HaFPv9uKCF3ghEvC6qmkgZL",
  "key4": "64KhE9vyX6kakZ5KbyxfDVdB4enZmSUVUMW5m7Y8qw3vzzGbFMHbqoHGEM2orULSMGFGmbVp3ZkcVmVvGhyA5tkW",
  "key5": "2vyWTReEhwoEooYgPbirSJK5HPBRV2wwvhM3c5R7kzUJCubHpN9SRzawtZCdK9fWTt6YYyxBNttG6CHLsh1DUuCb",
  "key6": "caHZGVWPXoGfbhMrUnJ5g6ESabGbkVH1Ub4xHinB4KtB697XZF8wkyRLXVZmjwJE4vY6yFM2FpYDBujUkiZmnMc",
  "key7": "39WVMJG2bFTReEGgCMiFk3geSTA4L9J9d9o9waXczbuakVKecyG32FDgF9KiB73qL3BMcgSXGamGZ5ddFKnxRRNU",
  "key8": "4S96kddAVXNw1ArXR9B3JogDMtkBojEtDMnrNrWwhQWehtm7TcwMPNNX6P85DM2mVHhgQs5SbKoEexzpxyoPJFx8",
  "key9": "2TC66hw3W7noPwpRUZ9x55GfPwUhQ4iZr2CEwN1wn5ooACAcmkmjVLrNZQm35ygEFrC7ygfGH9synEq2VUfNHb1Q",
  "key10": "572tdX9L5VtJaL1yBQNdLWkeBLbxbAyc6yXwkpxtTwGdDJs5MCEVHtscENdjrGM3MhhsyhWLN2KCzJkYNnpEDeta",
  "key11": "61mteKEUuTBftxFk2e6fnUJjvqybM7Xz4brNqaTCqgEfjZ5FfymASrFrww5pgoi9crDxDz41iQwYeYMRRGqSbicC",
  "key12": "5KLhjqNwe5p4L6ddvrqY18StyG4xrVmArNGQ9yprqB7KAktdEdoKPfqwxggTrjWKnTyrZVSQ79z7nLY1Q5XiuWKz",
  "key13": "3Q2bXZXx3zrA3fHRsjt7docnbQfJCk7p2vUDx5DJXcqDnr9NQeFEeyJQG3H4ZM2cY24ogkwVauqAiUWAyx86uGM4",
  "key14": "xjeZ28bMYJ5eY28mnCjr4i3Te4BprJqB1SUBrXMTmM539LmGWKM9hPuqnJyqx8Fo6j9Scx3exGgRU7RFZFAtyxL",
  "key15": "5ZpLZkFQYVSR2Uss6m6gmmbht56BHnbfw2yF3W5RaihfwGUssVC66R7TxjEXjsmKzFaLEz27krxw3bgbNP18dDnX",
  "key16": "e8UJck894XDyAafhB9BKAEC3UQbvWtiCTe5d11USXUGGMoJ1JMx3s9zjH5krcMF9e5smxRmEq4Qj1FiCQHfqako",
  "key17": "2jcZSBmo1YSNC8n1NAtwDdUHKvUcvp4X1Z4BbnCzuamBR6tmdqe9CbmcNnKj2mHE6p6S1PQgLM1UjsH65sjYJbnr",
  "key18": "4pq8yssziNABsG6JBPKtSaxqUUtAGqpSphQycMJ4UPxRHfdrTUJViNC7frUAnfuYQBVbuNPneXMG2YhDVqQ568qS",
  "key19": "51g8FxS65VSPKzgX85EmoQmHwjdHaw7dQLjnoXjSiMeEHgzyP6rAakxQyCC8JFbQkTLG2owERjfDu3zu2XW6TL86",
  "key20": "5aRBQtJTripu9fiTyqLAo1bkCyPdwQJYxqW3rrk8hKC1TNQnXEuLZ9dm3trdJZKAZq4ZpVtTvWu296rFpVnZnCVU",
  "key21": "5BU5344MZNpyJ2g4RFu4CNbfY5drcxdyA228i6vUs7M96HVJqVV5CcZGpbTwzFmaXgYtfeSrhNmDvCqKZ4eH151",
  "key22": "3MxPhgZ3bhCfghay9LgGDE8VbrZmtWH4qWzgB8tLuCjKy58TiMVvkeoUSf7asLWVkfjt7Yng1SoUFEVZ46tu2AaQ",
  "key23": "3YHpGmnjRKFWFrndFMmmzcsBV8Cu9Uh4cZrT7tem7VovyyGVwmmnccQVK7wWSjYizAHbmVioHU8n21uas5Jrv5h2",
  "key24": "4RxjfgWbzV2nYFibqVbhACGWeUUygebLBoRsBVAgwB6HpQg3qDurg3N7ZaGNTzDKXbLwX3qNy3i3yVcwGmzhFqmL",
  "key25": "4As911PNz8zCoZpTdcwYuLDk5SpkV7yQ89vECeNN4NHeXXcvD1DTQ7PTkLX1aBMrUZAWvkcbXJ1F159xmefCjTQG",
  "key26": "5eS3r4zS3XXUA6sawASfvybwTdivGQHyUKAmPCJco4NECYCwdMTqxDNXZqYJDo8yZP8ZttRPWH7JN7cJVNy1iZ7u",
  "key27": "27Jb84dYeL1t6183BDtiyQJQAJo7A1iGDFa3WHwNvB8X3GLQRQPrx35cVjvBdu8f5WUPsBoPega2V3o2uHc5AnG7",
  "key28": "4LfeD3cxT8HHinptQjT5gexUFUj1kTMu4w2it43SrkXq2B9qcRCwmoj1VdMCDe1eix91sWARKtT7aJv1XHMjfPmy",
  "key29": "W355J6mBqUWanfd4ocet3pQEMtAPXuo77VkNQuUTbMi4XKcjjA6wLmCqgw4WxB7ocfNYSBuQaSieFfLpvNerfEB",
  "key30": "3z74SjfFYYUdkN4ta1eshRyegBFtHhZc5EUewx9XkvxHeyiA8t9uHsQ1CpSrnbFUrVTF9AoFgdLzAdNGJ1ToDuV6",
  "key31": "58xFnDrsC4VsZdT6cnoK5EK46zxoPPi2FY7wBccMDYiJQcs4NJ3Bfnqbsg7aE28XUTLNsh4Z6y1dWSazJ1r9EC6U",
  "key32": "4GkxAiSf82H6GhxL2jFLSN7P6JmYVyRGFyWDvT3SaRncKTscMb1xUCEgkVX2NVMVonvdFkGhe4AzQZx6R4GdrW1Q",
  "key33": "FCVXA9XJu1vjyGPo4cxyDTSGFGuBHkbFyMUBVLyDesNh8huYXCnHLdrt8uRag1DwsFj1TYb82kRwdxnc947PCyJ",
  "key34": "5ciNrFxbSaU6zDC2KfqkSud7Tj1jiY48ddPNGh5vBfhkDCSzyJcqAnJaJVAWw8Tpb1K9g6jbK2DhYjjGRbyLENrq",
  "key35": "3uWpxCcGn7kXuzRV2h4W79kJoaLDYoNnKuv4mJcQkMzpVL2NoVbQfotJHPYE93NkFmYcZwtTZGGHPWNq4Mx7QZGG",
  "key36": "4BCSF9M1Ks4En4yoSuTuVQNkari2tku5Gf4qqAMdrkLqQJeYHkfWg8zzVhzp8yP2iLVZ6CGQYsB6T2pdi9tsQ22T",
  "key37": "25tdgxnYX8FwpbeSDBYxjfwSYPmiskin7sANhM352f8uMg3uVm9ZDnb2RuGEUxfnFFppFLU4cBaAr4WcAn9UhU9o",
  "key38": "1EMXpmfgaexPKKwZyDKdzDqGhmVYcLKRcuZidUx6Fw8adBxzTpug9g5R7h8LbiXz9TCXZYZPan2SXyGnmRCsLhr",
  "key39": "43GtRPdhGTE2CK6DTGwUm19BpzL4LRmQPcsBtx2KxpfhSZZnxwDEEtdv5Gi7s2KjLwvTMqvuvrgsqPgct7z31JDX",
  "key40": "63NNTGFJHLtW37aWkDGNmrcjLHCUCcywCxuEzpE6mvEAHCR9ZwEWoEU2z6LYgA7thG4coANFuUVr1ZHqi1DjDcZS",
  "key41": "UScR8vVTBK3dwJdfVn29Z4jLtp4krk1Bxt2dMNCpGh4i8MWqSpzRNPsiVgnRh5MMLGQNndH2yqdTDuUJKAB9tKu",
  "key42": "3Gk9SASNgQGxJNDN2cteQvSraxgJxNLXEyLAD7spiCiPzM14eJJ7cj29W5Nzboppg4wzE2fABNirKqtLufN57hr2",
  "key43": "5cehymXpjVYuphKRDuLhh67Wv3nP3T26m6eduq9vfxjzc5skHV6qsSxAfcto7qJquC3C84FShDG9YCBGLJSG6VQL",
  "key44": "2PVUbeiVB24Uac5JAe67hnvnn4pjCysv4RCgPx7AHMYEcoBxqPWiMe8rmP9fomQrkQHWfJmoQ15mayYoVhDtCxqS",
  "key45": "3s4gSzoZraoYQeeVmLef1VLySVixFwWyjYLk2h2HctrVTAvPhk7evtW6guWMB4bEKwf8cbi6DXZHKRhrF7rEKMqm",
  "key46": "45qw5C11sv6oPTD5RT9Q7TAwJesp8Zis5HveVUH45zxfoahGweTwaAb5DLWH2p8B63xTpb9KutCN12KnNidnQDxT",
  "key47": "hHtNne2T4P1BfLsS5ZR5qWezfpA2t23SCb4JDdYc7qUMF8Q1bQohKmA46QY3KjhGwwxSbGt2DiHUyGLzneLmHW6",
  "key48": "4ANNi6qMsktvBavQAZPKNsKjZai7PffQJ7AU3Er8bVaxnKcqGgucUMAsYC2wHcgf6Jui9a2J1b5gVHyXFcWddU4v"
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
