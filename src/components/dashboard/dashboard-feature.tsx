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
    "4kamqBZp9bGcTpZS7PChiNUUW83fLxq2jEJ7euUz3NaRRmzm5Vhx5FbB3o1SjBoQrxrdpv57S1rteBn9WfYbwSSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pD2Y3uMmnM9Qz7FKNNtcBb7Q2DqPZ1d9B6ovKRBEKpfa6LfrqdfcUvN1GiFJYzfYFG8B8DrR7tuDYMb58Pv17fM",
  "key1": "4tcYUq4xb71Kh5skB5qFwVavfqrt4hZvc1ZTXpxi1yCNbowQedi7HTUUQ2UyBp4rjQtT7gzsq7H7iz6atAZGBUeK",
  "key2": "3yxhFcap9KSmNiJuv2ZP1d9HFRoVxzG15M7QLFijDrdRgzusbmPJ2QAaCfp2n7LYkgcXCzc4JNFgHuNsBETibGcg",
  "key3": "3DsdvFKPSsLxaaH43NecqXLw94kDZQJzs7R7WAU4kP9PX3iU7Vrg8LPv8Y1JjAcPE2moVy7p3x4AnpxpEHyhTXji",
  "key4": "2V3Cf4f4tL4p9pwvMXHY6mjfZ7Ta2PEUQqJs4BCTavtNKq59CeyhbM4c3MEM5TNds3nUfAs3ois4MF2s5N1MoX1z",
  "key5": "5qcsEPohZQoE8WQbYQEBc6BtQx8ChQzubyALdma1qWZrX4Xauy5xCBzQuQc7D2SxmPzB98tKgqy88Q5VxK45THNH",
  "key6": "5WWUbzCzrXg9te9pVZ7dShqndga49Rf75otjYwJkrM4RdxGbWLXgMPayGuvVKF5LTf8k7eHMqfrrARvq5zFSjjFF",
  "key7": "Pf9ZyHiUpWZKy1g6PcnPZf3YeCfv1rdZSq4TSPpM4Zhof9izuexSqxkU3cRf66ifibe7BxExrtLz4FRjpukmskY",
  "key8": "v6osQqhBEumPULq5P8vfoiS344PrRazRsipe8gHhZhjK6RqCW7stdWGLNFCnF1wHxYmyiKhJraCgQwoZmwVTDJh",
  "key9": "bGq99rPfzUF9vA2Nuun6vyRpPwWDZxK6qHHZqSWZycCEvZpae4RzpcoRxVz8fVaHaHeUEUhTM3n76kVkGNaWj8M",
  "key10": "UCLVq2i6MTpqPEHYsxavjy7XCnKLKAGscjvnxAQwsoGrXcu1N3pb2qBYi5jUpsLDySMsqXvWxtwuV4JLe9D8HgU",
  "key11": "24NX8DtJPgWeMK4UHxfqnAVZrJoS9BH2iMDjJAg5WXni3UFs1guZqL2BDVFfpHJHL3ADjHNjBqD5a9wJ2vDR4qHu",
  "key12": "4WV7hUAWtBCbg3YDGWnoYwKdwkePdrGa7K5e4H3aQnE7erTs62Q9Jg6U72ZdD9hroXbua5jN4ayz8rkphMK3hfhZ",
  "key13": "3hrWmMTqkWFzwNUm5UV5MF7M9CoRam1yxGwhjrZrngoFTFB7zftSs3w3UssqSDmUZCbPGkGnQ1Dp9phkD1RqDNoX",
  "key14": "3BNFDs5MYLULbeU9NTPkk1FhhjgGTDXy9D8VH5Cr8S49D3hFZfCMDeKkiA2TedbkNcYUpycHKeG29v3nLMQGWYRW",
  "key15": "Cd8oXLE83NXrFPMSHPUWU9rAfrt7Acx8XMKBuDJpZF29rD5xwEABcLjJnDCDSzdnASHDtsJqhKYbU6hvKwxHWmo",
  "key16": "28sHmRsdbWXfun5QntkjB3uq1ToCWdHR92ydYGWpiGDwPapgT7N1T7N8N2ukfXQk26PieSStX4x6AcKGVFXXH39z",
  "key17": "2uESw9pVUWumirnoeHQdMtVaJaUadiRyr4UKUNtnfoDBRZXig6Vu5MgZaGjmCzscF1vyPjoTvuiVQy72DJrSxjnY",
  "key18": "2EFq2LTcixfqxTQWA9AMqKgeF8hcn2gXyEhhWd7G1koW8SxGo2XM2bdfsKiaNaLLGmqqmoSVEXP65ALNEFdi9hXH",
  "key19": "26R1jLtafHQfNoQRmSXbfmdtrUZStyrK4X6erPJf1mRY9YyPs3kYzqbLcVavcZiY71MWBepPewThWCj5cLeN8TLh",
  "key20": "28uhZuFXuRzN9Q3hvTBW4hyQtn81fmbDuQrbaxYw24od1m5ADvpiRZUPgydvfysY1t2y4RzefE3vwHQQXtTsWEj8",
  "key21": "2fmeEQAzNYN9HHuiJLvfSFzuNN755FLKsUCAuVbXdEABSnU6nFF7ua11yPPhZcT29wFPYo2RD1kTg7vdWkNc2q48",
  "key22": "5q2GFUx2KTiC22BzFB8N6vX6R8XU3SBDHCXp73tGa16JgBuKNbVQwUkb9bAcTJUwczdsRPEKozzSnpAr5nVfaFCJ",
  "key23": "2QTVgzWJmDcH29ioBMSRFZTAFbk5A219frK6Lz24pJtqZJTT4V66MVCHNoQh4gKffkoUkcNQH4muZmrNR4zhr51J",
  "key24": "5cqdq2C3REowW6Hj9eg9Ev8obfxxKmKStV24L45EHqBfbAGkRbHT38WVmYCZKXABv1oFFPud19ixX7HKbW3NSUPh",
  "key25": "3J869RpGojFbzXLCS3cNgRcJQrRM4LpHhmLqo4ZUFdXo4V4LiBp5yLHG2myb6RumBe6R8M5SWaXn46jKumBZb4zJ",
  "key26": "2v8oageh8QGsuxMHSGzDgFSPxk5U9p3QGdyJB7UC74WTQQJEkicjoqdcxqgzMD78XzPXjXAk4BgJ6NRSEeKBARSW",
  "key27": "jj4BGUT8M72fcEgDahjKHtwEoqUFTSGiE7hpT9kjo86MbqYKXL2qVjptcW7GQJpWfVN86seu87SSc78p4aU5y58",
  "key28": "4Ao2VKYUhaceRBix6FFPNKVt9MwVV6VKM8sEsiS1ghC2GzxMh2wBqT1J9Ef5G4fnCWpep6i8FZmYztbJLfrw5fBp",
  "key29": "2wPw39w8SdEkqs53GAXoDsJ3bNSpXPQg3B85nsozqw3nRGq8h2AbL4AznRHzdK1tmHZPP6MsYKaeCAkd711mtA42",
  "key30": "USBADZJQXQhPk7RKoxtbgwhaFKyR9oRyEyrk8Qq4nqWhKaQmM6VcoLFVowzvkU8AhmUyTiwQ9LxWBhSaJt1MGTC",
  "key31": "3P1rGKKEk5U1434ME3149SpXF32jz51wPnxWKSv1DjpKpaY86GfDAU8gKjNbWxyZEfEFVbribRqzTtw6tHrAjTkz",
  "key32": "5Qh9B4sGAnAiLbuXN8QS9ToSeK4cKm2b9ofgap2dgrVLK5CbzEZbgCsr1wsG1WKXYCrNu42uFfEH6y2FhwkRMRA4",
  "key33": "3RdWGPnw8myj71K1RwtfaPVTwe5coAX6Wn2iQZinZNyvgs4MpbFLJfEEKi3436pYbezPyjx1ynxhw87hSj14PVHA",
  "key34": "4oRkbMZXEajbvMSbY8ftQFAaP2nSSoixuNVqoXYCtX6Lq1gwwMPVU33Fm618DBiq4v5eD1eGwCcnSKbhmRRKR8ne",
  "key35": "5gr6TwwA544MGfdN8XoyPtDqxQGCYRuNpMn7JdqrLWfSzFYqoMQteuCgiK22BGuHZ6Up2g4vzhWaDzyAaTJvXVD4",
  "key36": "3VHZiZbyS7cjmTgZTcm9DKHeurE93t3ZDZx9yHiRDdCCt3eaT7gWxKBrF2JAtVbFTEkm9trT6FeiaDjvUh5v3kQK",
  "key37": "YDPF29Tcrzyb8KXe8ss1zpMu61g8mMVCTJoDeEb9Wq8rtJ2QxV7fNgA1kEjB8GAryskvrd9JUzYNbmxRd34LyY1",
  "key38": "cwKnzXEZaeNHz5kwGYwaC228eSidQtg3HsxmWtNzdsSVpLmV5EhxytuYmbYncu2UzomHJyq9KQnahYy1Jbzj2T2",
  "key39": "2tAfCst5QmpPaC7nWa8BT8dP2p2grDkJq82r8DD3rsupcB1kz7KtNKC5FYUZe6juzTEo98EUDmgMKVz3ruiCMCud",
  "key40": "pKtVsmcNutSQahDboTKXuB5i4CnpxkcvLxUMKKeCkpESe67EuT4efupzgQeFgYNQ17weW1uSCYeAEUtwtFu653q"
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
