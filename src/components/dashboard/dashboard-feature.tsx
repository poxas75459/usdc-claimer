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
    "2xT2mntPPXiTL7n8ZyMFSeUSMj3a9N999KrJ2Q1TbdUgoyTEMZRnWNaKHCyZSmqiJx8z9VtgqeuUxttgAnek4QQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KsQAqkiYLEK1pfwJseFH9bTxsURKkYK7BMp7HToqkSchVq1kBstDCA36UAdSW1zgsRKHkoALKtER8SSDtV1KmVN",
  "key1": "3wTCh2bWZvMKKChCjC6wUaRDCpnX4RUE7Sc9jVi76iHDZJuQriD7kPJhW1xj9Mr5BJtQ4hv1g44uuHntZ86aBMj3",
  "key2": "5ifmSZHe1pMBCGJVbW42g99ryL2Cw6AHxuPyypAdWabWHRpFBbCvRDpJivA8nhAhZLiMEpSyAjLZ2xynCchh5CFX",
  "key3": "7McyuWpBLRRwGsN6TzCwpHStmS39Ew4VvXgteGsKYNBeqHjAhygfe2tdYf1Rpd9RGSCZyK6jvW4kJC3XU6Q9nRy",
  "key4": "2C7wAeJ7JogpJMJB4k296K6ctKmvhcQzAC6CUKb1KvpP8aDV3QLyYKJQzXhfEgWoFhxDy5SN52yCA3AqSrY39Zkv",
  "key5": "4nYpVxh6DaYpJdAMdGEJRQvRn8mfuZeZyaL2JobXR1VcUuUHvnH5M33xmUQW9x2kBCm3Tu8K7xsBc3WHkXrQtjGr",
  "key6": "4nrhqMSMepXdMbrk3erXzRiZVVXbWjcmmP8iHUQWyYXyYprcRVuFRUTRbu56hJtpLy7G5QkK9XW55kNqG62Sph92",
  "key7": "61mnCSS2wbiUpLx18Kw6MyVHrz5NDRGKDuRw8MCTYxgioVQbxUjbLAAY6U1rajjSBMvUFFiqC6X9RJJd8FLZbooz",
  "key8": "4bs5ZZziL4mXAaUSXyEq3C6fNeaukWfD5c4yWKS6doFuhmmv9xWKoMh7AjB7CfXdxLEFwZnRNeoGFJNYyz91Lbgi",
  "key9": "bp3yHk7MmgtF4663CYeeziZVRTN53wVKonBSaq8HAkx44R4c9ZSchMwdMJvmVVGdhG4QBcaDiTv5szMB3BDQ1uV",
  "key10": "5EUZwxweBB1FLrioMmp8dKSPDFcmhrso94FhyDP8w1XDPcYkVt9HL2QyotNpGAGA4bDP31v3Q7Y4xAKdfKiXhVYt",
  "key11": "3s8BwFiQPqQaoaSzRTJpErj99hpQCoUgUWYnGjdS2wrQUm6awQYMEyCx7KZQ9YkgBUYYHHEXTigccD4A4RrXETzF",
  "key12": "5bTRH4ibpeAPHsLEWmrP1g2rVc7XjWmgwpaTHrUF59G75cLEaDKHj6QDzmTn1ZtN4eUZPMQK7ZV3QcgPQeUK3Bkr",
  "key13": "5UW5NMEtKWxmx9rjhAxxB8EVGuqFiZKVJkqugB7AN6uKxaNYmm41pmfwwqG41aNcHLJ6AL2zBHHxwGGnUrW1U55D",
  "key14": "5UfTUD5zXxafhUucqkCXwNZYMfULPAdvSwtBaUrJu8ogBMKrXKmVigrbs4ewELGfKApPbfrmvqQQWtZjTeMucwNN",
  "key15": "5RtBUyGeDbtb2iueZotVbsjS7CqKsakbxP3R34noLpRxjXpgiBQ2C7QqUwyrs5SrEDVUS1QpPjzmugFg1wWSDw8p",
  "key16": "3rCM5kVfYUT9tCyCNZQAcuFoT7r34GAFRZGiLTNR7ji3RxH4FL72ffEU5Ba9z1zBe1eWPUGLGgYPryfyepXowk43",
  "key17": "41CWGQwx7K4irgELymcy11RU4HoJmtSEY3pPem9osdPNL2QezeRDYUXfkiQtsnd8d291ivdYxv1tr9fu26VXEw4U",
  "key18": "4jXXRq4my2tG9sXUZ3M8Ex9SRAiwTa5J41cknTfaKFysEvUpuzVh1GN33Uhc5iz91vx3G6NgbUye1JstK614Y8MP",
  "key19": "31iGJaEthqHj5B72cASmAxAHaT3YbFTu5F8YEFotahtQn1S9x7uX8RQSbxDgrPshZQt9UnQ1Cwapr1VFgXi5WtGL",
  "key20": "3Pe4qg34NVUhFJE5eWHmcCwuMK1jox5nCFfACoEt25u2uYBGkHo7dicarfJYqv3jD9xDtgyLkR2nCMBmSxCvU9YP",
  "key21": "4huBYhtMy2cuQEu24AwzNpi7YcMAFaanrPvBrn7FKr4coE4VpzKuuzZChZnkDdobgJLF9PhtFrfxEpc15J7TUUqL",
  "key22": "4k3zAcetNS5F5bpGD8s6wVrv3wSACGbLvqsrMfEjhAeYppnuRmGsyLd3JXNUAVS2artt4LsQ9WahTKbvTSUeDHdY",
  "key23": "2sJwSPUkpCATLRoDToBfXDZ8MNz2DKG7xoxZgv87A7oAbXS8YdxjNVWGBLW3CZY3rYvRRQgnj4BH43iF96Q7XAFV",
  "key24": "2zNjo54SKjb4FHsnmWSZywzfjxjWEr9RWiSag8vz1TZS8bcEtLUHiQqABGw6UWNQT8FoJoi6gRUGU2Y8R9WpwpYq",
  "key25": "5iyjAUWkxAmTpBH6Xyp74yT9johQg37GPbsneWo5qCvx6jB5C6NP3UgBeG6AixL44AAqt63XD6uzMLXpEmpdLuJa",
  "key26": "22h7xpaxwDKPR6wmMVJkL1Ym2nhJFFZFPA93LKNPGr8XmPWwX4FzL8y7khvUDUmHMchhUsgHXua1xGVKaGCL1kxL",
  "key27": "41k6XboVaKdcuPshLcBCYcgPy2BHhnL5zdNL62hqv2nJyJ8Fte9mfi63QG65LdAJNfA8FREjcaMjKZP9pLdkBTkJ",
  "key28": "2ccKYacELebcGgL2P4QZRaWVwMR7pWMcUDbHApVNXBjosQVgQ5gdEGrnFda1QGrpMcNvx4tht3GfDx6ZqfrssCHe",
  "key29": "66V2UmKDZSLA4YXcr4TXPaeui6yLPUNZfD7qmRSqQCv1bVY9WC1eeatcK3soQhtaisLYXdwwRMNAtHWdaMi5yby7",
  "key30": "4MVfss5mDTGdUgqAhtKuVWCWi45pDTncaSGWNKELdKU6prJjXrxJy46a4GmiRLYDEZ4CqgkorS6ERRJMDGoFzbjD",
  "key31": "5Q61uxtTcSUx45LYd9wnH7Qfq7Qk2MM1KZrqVyYwPTzmVUBCVuTrkZJ7QghvzQubBEVg9sxywnkgL48B7zqXGXN1",
  "key32": "5MgcRMGiKrTu6CpCE9LjueDYEPWfaQ9x5yxwG4YRnG4t37xPGhz4PbTuqDDTY1JsqBKs2D7foaxVZtD9CNGbsJdx",
  "key33": "3Bjuvto5dkf5iZ6Rw4mtzcqjASKsUFJxNxhxKxXYcywvuzFGAYwFHXhRkNNvDN6J2bqxHn4JLpvMYmHK1C5mbEuF",
  "key34": "uKnQGsoYm1Fsjccqih7dZRxgUKWYdXDqurzTdvVdVbr6qyLhSypTwDAgUsoUYRSfrRBRTi18p7XwNYsEvSa26j7",
  "key35": "3emKi7NvXVKbC9TubUhTNBDETT53DdWRquGy9LdjBxASTHCZnQEPJ1AV9C51izr9GQ8C5HqHiLgctYsBbc41bcpQ",
  "key36": "4WviUZDXMpcUbrZNf9mnRRcU9WVBADXid2TgF1FaXMBKfYEtxqQnuJeicvLCPhWreLPVCbJTet4CobapRsqBYs5s",
  "key37": "4Z4sXM2tMQjNwHavinbTn1h672C1ZsFD5MfiyGDMXzSLqddWmTxvN3EzwjcCEsx17Fv8Pf4fMxNEmcMS6A3jUSeN",
  "key38": "5ufjL2TLcRijnEkJiWR8L361cEJDpeMn2hD3unPsv8F8nb4gd9XqQdWJ2pynXqhXbuwpz2fcuusQGqpQMrhy9iqD",
  "key39": "48eJXhBsgzGCYBXWoZ65vQVmDdprKedUYXkdsUqGMgizEz8337NjE7tJ76xL1MYpLnWtFzpjWWZTT5ihh6aM5L4h",
  "key40": "FD4x84LyB1D5McLsCurG3ynHYDomaFpBeqz57LVN1jzAUHZqphJCN7CYvMdsJBoqKmXHrJCBL2mWKemNTmUMyRU",
  "key41": "MCNwqyoVwDDZw8oH5R596s6nQBWaCSNL9oeGVizNpWmRqiBJg1oxmshdFy3D4zP9SNJ1a1bK6tdpZRG5rKMucM2",
  "key42": "26YFhFWH91ZgGYQvkkUh35BkrfbV4QAzVB2ZkX2YiX1YTdm2hYHVjeK3gfmW3GAtNz1vjuzimRQcRSTkQ6Hk8zi9",
  "key43": "28DE1ynEov8Xj7AFEvdf5hQwttptTSnv9QGVdF1RJ57KkngPUyXmLd6xS1GsjcdYR6T6z1NuecJZLmK4T4e8oFUH"
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
