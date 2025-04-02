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
    "5Ek69zjAxec1gmkzJ3WuGN6QnZ72VskLqqgyceWMCHkFaCSGx1ztKjQD8okjNYL2t9ZDKatx37PEkuq5RK6Vz7yz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Djy389ce9ACGX27fYnjhxQUhTxbzBuE573CgXVv6AeMZF4iQfQHM7orBKhhCckqt4nm9meiDfePCq5fQmHz5T2k",
  "key1": "2fgrenPhfZdFHVv54dRFZbPVXzYrochqZJHvnHD2vFiMSBRtPBHKjXSz2xxtQrQrjQ5NLZyoAQBZz8kRBPRfijgX",
  "key2": "PWPSiVVmRQ9VGfkaSjR3Y1xYuCaLRS7qcWeUur3B5gvC3ZBJtoWnXNgz6UWxLyAhaXsWLHasXpjXkoB9TpwGF5B",
  "key3": "4uTkfVvxxMYhK2rTiRmMRheEX4eSDRZeMzbuz3BQbgELM7yBCyXbPfpPCg33cRqZos52Jpsu91QxuxBi4AtgNWz9",
  "key4": "4sbPeq4yCgqM2YbNr46RXK8C62QC8VvZUXst6G5xANcfck6X1MZrbYhfi7u51cLdWjsFQPcpc6JsAqZr7HxrYtTa",
  "key5": "2djSp9JhpiGMrwPQZtgivqiGmR4TsApA1Dyb5h3h4mYaEC9XD6DoXXezvuiGvuhyND9QSGkXhffEJW4ruv6VuqhC",
  "key6": "22yXmaxH7mVHUb311Lgcgbggv7kbjjoe8tyvuDN6meGyY4PzVN6RTFSUXU7FfWa3ZuzCzXJSTRAu1a85e8UNa8wm",
  "key7": "2YATjG9LR5DgCpgvKUdwTxE8TrntmpE2LmzznjX8hwAjpqGArhHYJGbJGeCoMF52HQK4pwdo5kKCd82NPhMP9p4J",
  "key8": "2yamzUsSai6QAZkdJQTQe3bfVYscpBP7REnh1Xg9uKs5FFS2GpexmXoGzWjpKgeLRuG3doiMzDTjuJMH9496EVqJ",
  "key9": "4538GXRNuRTjJtjFDUCjpMJhEt2CdnQ8bs7ML15jMxWyVpjP1NpwfynL9jVG3Bh9f1HxrWTJitosjLEFJc83V5T2",
  "key10": "1jUPdGU6Q9WVM57m1qSvAa1CCuG3sEP44zQBuqUATaVZSUxvrfj24LUK3Wm445drc2QUaiDot6LhER1QCi2x15B",
  "key11": "2zvDiEE4uDbbqc4K6h2HR49PrYqnZs58Tq4nYhhC1jeUoykB8SZJDQ1WoEC1XotQssiCLLLYDNhmGJbDhDYLeM2G",
  "key12": "2bRkVYL1K3d9VGpcVyMpdcNUmSAjwZFZxLTcWen8U5JZpnuVHG2ooDdm3q5w3ic9GvVrXiwqSg5N9tTvAW4twLT4",
  "key13": "2NgTzmtN7QUpdzyNU9KW3zcHF5Dk9iWA1sEDDoWF4UWvPbLxwurree13fum6gVxUdy22Dbsfi6GVD4dwxLYp1Q1P",
  "key14": "58zs6LXxGp1bcJVovnifHVZhmLsomRg6aPfk1HQUiUimTizdoxZ3x36tTkDuvpY22BvaEGs3meFJjgXKN8nQAvS9",
  "key15": "2sEqC5mQpQYDnJLDCY6A5sFGbzbLD1YiRZJ6NdMMdPpyv9RHq2jCxdfW6MUTBxoqZnXfD1GqhhWhCb2nRLRsp2Hi",
  "key16": "2hrYNQPq8HDQQJnPjyQ2uu2792kKGxXRTXPLQB6CXMztfMMrmkD8Rg9FAp91nG1k9J1NJUDCKygReBX2BwmDpyEM",
  "key17": "SvEEpDkzKPWgAVPyKPrsaSJaSzi5ZDMqnDn5HmQumeFkJK2tqeEpVUU3RKKH37dfgvVEsTdEpJmipUMvDX8xdh2",
  "key18": "32ozREUNp5Lg6sJDL8VEb6cX5dzK7FEf1DYeCTdKcAEDRw7nkQN7Ar84u2fYdRRcTrY1K6haWYD9sm1en5Jc6yC1",
  "key19": "4hsWv8YjnaNuGNk8C3FFFexCasJtGEfQMPErf8NgZkC27GydSgNrEiNqnRXLrPtA6hbzWwty8kNevCXotrz5nz82",
  "key20": "4bKNqbiXvTi38bTXnu9eLJ8kpH5ykzRZ4Zexix4pPR9v9ANw14HzQsgqNZ5DQ7ku26QzvCffSymczuUdb5KNqWSx",
  "key21": "R8am3ewGoyDNaC3wb8jqL9xsRiT4asW9rrhXG5ouhYFHVtbq8LYSZC1kP1DXChdxkXufG2EvZyChNzdyz5AqdqZ",
  "key22": "KcMGMb1ehCBmvwDirYgMzgSvG1yXrzkHtK83T5gkm2NSsTuL7dzAojWyA5yA92ZqkX7LaMw8LLSFQKrwPA9AWat",
  "key23": "NSAWEWhAchMD17YXBw7TZiVs3ntUJ5u7AdRSA4p8YnBq5wNyptjMzWHw24Wh3V54wZQr1XqRXoPMWgTARtEfPtw",
  "key24": "4bYErpABzg2QkFw3Xeiw153vxXbvteLzFurRqpYisaCdzMnRFLh193ZVirvc2p1u6H9cYZgNeL399JyeRtt3NMmD",
  "key25": "4HSi4aa21zumKMGpPi35uBS5sqdWE3JtxAuzobSfjkMoEAdm1bnVUxhaXvG9hM5W5haKGP62EqjQ7xqnrmxSQQHA",
  "key26": "2eQ8qQ6dYmK54fNiGVT45PYQGYfxgTfWYyDGw4gFfXsRCV6ZkNNdWmDcp4dEXqqKQkpNSD4NTAMZ21RjcEh4YUbu",
  "key27": "4GWJA9XketqMRTDWXEejWFsxhKemQ1JrD3fQKx6HCEpKbHQv5HddLQc6aDxWmaurwJrZ6wcF51JGvTSF1vWxHgc5",
  "key28": "2Dyo6Q69zfx9kPQKV2HsDZs7aF2As6A4j5P4QcYWaqWTCBHiQ4P5NqPJK87cWCMKVpuorDgawRpSz2xFEd5D69Hb",
  "key29": "4nmAEBpNccFx8TX4XpiNEu4AyBrFNDrgwvJJ56baJxxf4k2gmx6sx3ufZL9Bn3xJ6G7xwFcQ198Pf8wraHCXxyWH",
  "key30": "5d9nb5tQV6MqaJP9eB2Wo5PMCxjxcPtrMihdTeu2W1wJn157vM5CAv7Z36dgSSRe1xxHPEztohZqPr88ijvt22u8",
  "key31": "3n41s2babqvcKnwCNpseGTXgAjzpHb4xEVc4kDRt32tnNvd7rDmqFWTh7k6w2vAGXnQmHuDr4QqkyM8iFGB83CBV",
  "key32": "2FsuG8YyciG6cbxzBHY1ffi7eFszntYqYsao9hbrSYpaCF1s3W2AbUCrFZXd1p1vnPbyJYoDArpVDddyZwkeSNdY",
  "key33": "4TfTExymv3fdg2qHvdYKQX7Nb9qN3u94qoYA25zXhhbztRrTCuigXaeu7oQ37x2NUSwrrXVxVV3esvX9ysdwZGwz",
  "key34": "3tzGVLzPGDRKktWx8S6N7uszi9cXPVrFcQ3UNeA9UAgsUVnqKUSmfmKQRsaRzwt63cdFvkoTNnL4AL4SnLfo1wzJ",
  "key35": "3Sq88eDwj4YcrFi7LWEL7MWSeeGG13q1H29aGw4E12qEeYiBvrXVwKq5zpAciRaXEuNaWeWUFysJRmgnURrxNkwR",
  "key36": "iWRGKd4NXjGg9qzmcTWpmwxoQt2TPjZJw8yji41mF6W7Wki6tCnTDnmXTQpA9CqdVrUtx4sbxXwkSfYw9s7GFVd",
  "key37": "5romxokvauMwzFkiGa7G6cCZodNyoq2xSAAvrMAgx9D4PWLaCbUGHzNG2u4Bpy1oAxaZnHca6XGGoVFxMxMgKKzL"
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
