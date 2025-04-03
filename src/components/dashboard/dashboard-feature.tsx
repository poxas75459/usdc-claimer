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
    "5VStmLzUw4Q7gGfmFbHspfJXh9DUYfTU9k4YXtwuyK8eHaiBn2Xkruvnc7Pi736USnTcULJuE548gabFnxoBue5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L68xnrgZv8KrAVUtaz1QsMZ5qJC3REpgmHngfXr8kXhhY7gyP33t4KpfoQh28YK1ik9EyQ8wgibPrLWuaeK9GFj",
  "key1": "2JgaGd6LpimNbs6ZxuPiX7jiuzZbgWAfPjxXQCd482BJkzPYYhXepRaAEY6EV85EpRNssjfcL2qYrF2CM5J1uYt3",
  "key2": "aeTaAtJ7yA6qxZn5CTAvzKmVbFr2BLBupD9zXRzAnJRAbc769eigkZ4F7yTr9RooRAyjSSDV9vY1DPvWNtY8Urf",
  "key3": "3cweuSyLZ2wT9zNGjy242fjbEdqRQ5R55NsHMAaeyBwPKNvRgeZCyS28phQSiiwwVLFrLm4ErUE29W5SqNGVvbSn",
  "key4": "D8u7wu4G5RDuDr5yeVYbGbWq2t8Ji3HWL6MQ3ZtkSCjVAySe9wxgf8einGnZNWGTBnbzDQFFyxoWzQzbyVwLaJS",
  "key5": "4EBjKgZtxWXYcHWPGk7JdZHrCCsrNzAgTSkfURkjBRASydkCDsPERTX1fi9PZbzoFNe9gWpM3kTrYpNDhxfAJizP",
  "key6": "3a75tPzkWneD6Zxbb7ZhbAEqEMAkRgBftxtWJ8nmj6wHd2x6qABtTzitRchMYNRCDjote6Xj2XBMtY2PRnhMq94m",
  "key7": "4hXgxokvQG66LWP54j7EVqKffZm7oLbCLxQeV6hkrJzZcW8tNoK3JKqp1MyKmFoAn6mAY4uWMWtGbpV4Yw56wXjq",
  "key8": "1Hv8exSpiVTcDHwS7SxwCSPLmRR2FvGAxQvvH7LSHUMxqPuTzcDsJoA49Znh7wSxUvXVe2TKyAidB3AFaVpeYD3",
  "key9": "45sjNyRBiouafX6feq5EdUMefHr3ikxpCUh73DXe8KJtXFKMjM9sJfrv5CEeWEHrnzeqEoMoVdGW1LoNDs9cKCma",
  "key10": "4bxY857nHh7wvJifh5RLQRzDtZ99sRgHDk4EMrCqs2887E43JfKKbDh3KdVR1bvGVedWE2fpZrWQwoh1UdYhtFT9",
  "key11": "66LWTN4S1fC5tN27ZtFFozAyDT4BWbECZTPdxtPFcaNMDBVwPnHqd8W2Yy8L5xVCGu8fZi2mG45kTwTdSrqS7xYQ",
  "key12": "EpN7MimPe3HudAgyLfhKNN7jukRrM5EcScdkSjmXFuYNY5fTr7wwcvtgRMWqJbq5NyXf7Fnu1wUi9ySAnmADzTy",
  "key13": "qiRiDDuJe1gWudM5S2kFxS3Bqzf8VmL8EmvB4oC7ttUENU2hGUHgG7dLHHM7d35CYb8gj3pSfEUVGGscMsLQSpN",
  "key14": "c2PKMTNNchYgZHbFKnLJHJNnThqDe1DCMVSPit2b1dPGsFD9L9Ebyfq1d2trY74uVfU111FCShEomYbo7LM3eFr",
  "key15": "4isM3QEkR6XS5axn18aqkWb7QDWzxLzCAjeAHbDahtEinNL59dwrHQXfi43XkA9K1hQWRtPHv1bVEvHJjQa5VbUJ",
  "key16": "4NUGfN4MLGzNukNcgjaWr48LfRuzWQMKsyjL7EtbPgNAUHRqqPtnwRsgMWeCqjvnKtePd7LLmRXMvfUA6pezSwXq",
  "key17": "3DHqwRKBhUjaiCJb5jDeTbUHnrQDEAeHPBeBBjGpGSZWZr9xoJJSDDjvJXCHX3zGHkH9goG1b2oDUUvWV7SJLRZE",
  "key18": "2GtNpdktszXGKECr1fhAiWFk69pFHfZzKxBoga685MQVCMmdNAMBe6aNmWM9aP4VjoiduFtzc3u9WKGwiF2eS83g",
  "key19": "5x2bQnr3DeH5JzQyeugweua4TLEwAoGabnWmAcJkppt3RRmwVKAqQTxQvqzoxBUbyedEA72LvrSgw7MnHt9NUSRV",
  "key20": "2Amj6vXjkgY1dCsAmCUkP3hedUZbMAF58x5idZN8Ec9rqavqLgdWEV5mmP5dpsBAJ6QW7sFVdVCFnLTFrYDUzHpz",
  "key21": "4rwsFdTmnxkxdwUxpJTrDrtweuSXbsA9KwLHMefhCUUfeEq6iUhyH8tet8V3urasX6rwfNXFBKGjeUHN4G6T9Ava",
  "key22": "4oTqF6ALFGEV7vfPZXCwDaDm8ep2FCiwXanbUdqREyg6ogjNt8PjYUZ8v6qCyX3cpCMAcENHWmakJWUGgUB9Zzw2",
  "key23": "5SYVA9aQNMf841LmkQgBBkDHhHBpKsx4AbZQdJTwoFNi4JkLrCgKtBV9JpSJ17aw3RFbsMM74RyTYs5TTY3oAX4m",
  "key24": "5Zj5G9CBDHESNeinj6VjBriDFi5qiixj8dUrFWxotr62RU5EoqmEobqVWwtdokw98GSejmnCJNDyr2fMPJHocn8n",
  "key25": "22Z73hvqMmozGz498s1ZkBjzXfzsdfT27tiYsVenftVLMDBPsvnKSuLFodbP8WTyoVJ56SXMpec7X2Vcjgw83U3f"
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
