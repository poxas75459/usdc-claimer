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
    "345rorDnd1XhwQnQDFRafMQnRif4br6ecHTABqmtrWbJpCJC7MDjp8h3pYAJ62VwEezWTd2db4pFmaAJx49QE4WR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KpzpP5GSM59zZumSdSTsmXTRAtnRJq8cJ6ZfRWf4ircNmXKS3ciEwyiQx6KDhNXuHZWF9pDUS1KkeTVDUMoQ8KV",
  "key1": "4hzNDC6zvQY5UDx4VGNQ5xBwRYBvS8b2VAwAa1zEZ3g5BhNdyzcnk1sy277yDoE2cFcgfkYNJipZmCNPbKniL7hn",
  "key2": "QsvfNVKLRkgJbkkUPug4qeuUjVRkUStET3bjYBb6fmhEym7T84EMC6XD3ktSiYwQCcT9M1Mx5SQJ4afksKbW4Mo",
  "key3": "62GZHYT5Kf7kQodiMBynnWKCM8EUgBzy5MEWfhhqjMnTaZFmySL16NEff1cqavUAB7ADX1tgkFkDfixHAPhyL19Y",
  "key4": "2J6ebFYgYmjw8zHSJavkiGDytcVA9FgxA6UsP1wTGtnw2ay4Lx2ct2xgc5C9YVt2oLpW758iubLLNdfRA1DFcqND",
  "key5": "6ki4Lce97Uhwc6PmuCteCfHCSva7qKqpsv8yWpgW7mUXymHc5VY3N3kJTWPkQHtkcW9EDsvgY1CTWE9HFqXyq99",
  "key6": "3K9cHamejA6cBRp2rJjjcqnTyoU68b8GkKXZE41nrqT1LnS5NzgbKAuMs5VvxTS4UviyFz1RiHSZSQyYJqbXCiCw",
  "key7": "3upK5qWzpKkhGYi1kSzUk9UHWZ8R7rEitEoHztNUvpmFEpifnshGwVo4rbMbDuMhsqCqAdokLtxCNtTNAYnXfAg9",
  "key8": "2mEciB7JNZQtNiV4uDyMnvvpmXaWXvni3S21C5h9R7kV1XsW2TcY8Kq5gvWSuk3m76jZPPoDt2dwUWkpMXCN1cEN",
  "key9": "3PHD5akYeD1qaPSN73KARrHsgTWViq52AyTJN4AF7hocyJFf3cc7HCDb5V8vKcJGSrn1QETiGuAtbb3rsatcBjHK",
  "key10": "54GddWtMCwrqqKiSXJwfWUDQDaAFH2Pvx9nyZFNV2w7gkiXaRASDVXZ5XLQ4smeXkmJaaHsXf28rHPNfYaK3oh3m",
  "key11": "5ULkcBANpUBEV4kMZGeV7uSjbfpY882XxoM1rKwAQSfQHfPL2PR5spqQUx5v6N81MAn2wVMqnWAdA4tWZPGoADx8",
  "key12": "4dDdxtCaD2jqQG8QUFXVNyQPYS8Lrby7gRBRFM9qG6QYHATSPb9Zhm96Evko8QxDcLYgyvweXWsmAeu39zAyG5w3",
  "key13": "2hYjzEy6zZCbiAxStYMEo2bwhHtrJBAYuSHk28mchf4TXqwpD1oWixNzovMxBprBfd3Ggv1xhH7h5YZfhWwYPwca",
  "key14": "5VWK39x36iJxRC3tnEAAEqYgJ7u6D12jqjZ3riqsxB7d23fnUDPcCVkTkHC51abxy2JbDFCb97XQB2QVYLt5VuqM",
  "key15": "24YnZW4g5eg6cXTNRbyeZtdRFoBuNyUbRiDaHXkDJLww8Q1LNQkxWHJWXHyzFnAKNvSnEddneeg714hyZRNeqZfW",
  "key16": "32DDetkapjS47H3rEizXDFWpYmdBvHzC3c5gWqH8wmVp8CWx8EctH6Y1btkr2vZyz9uQSYHJmuDB24haChjFfX1R",
  "key17": "E4SKL48gxLAEVqQrZio2SpVhgT5RG6dKv8Ccva5oSLZFEpvoKjxSUuT9f7AK5r1p4pmjPPuX88TQUVCLFiwzmGx",
  "key18": "3TAksSqnMiZ9HsJdXZSwiwXEoUSUELcuQvdtnE8x6BHLqQs9Ndext3YV6vxtfzJk95mjsnprNCk3A2j9JnddvV7x",
  "key19": "5C69vLTD2GDvNaepiPFJJnim6uPbyctrM6aSRjrK66Eavu2s8y2swPqXyHdZqVe42CioYy41Waz6HjLVc4ivAxWY",
  "key20": "4FJKWJTkb3ceTY6GzVDuxvgUBUDrBtrzuvWJLJzFDrCF41KxqrwmP4CnGTxzKfWTUEdvGoHDaKeovivGJ5tn22xt",
  "key21": "52zyaF8MT8okmVHXDkvbi7fZHbSio5ziVtMrxLca1fdZ7yomfQKqha97Qd9TFZPdEuU2N3ktkoQ6hCbXdkRvRqUZ",
  "key22": "26NpkX4ppr9YCqx5t7uyjFAfJCNSfFeDczC5Z63ywHfXERs4MMxb7Yk99z3WtEpu2nRyz9ySAg6So8wz8SN2jzwE",
  "key23": "2YYUtaQktFjLdUjsDZrE6qKhTMAHWDPfSQtqwPQdyiJhJYWMwiGfzBF3reUfP8whk6wa1nc3EkYQrNXYTigTwdc4",
  "key24": "4T4b91AS8zRjcjiXPx6mS6Mv6AsKDvLGHKeY1BYF2DCD35j3eCSyag9Y4oP1gmszAiZFd18frPKwmEVsBzu5hxZ3",
  "key25": "5RaVxZxQHnupHdVcX8pUjxw6VmTcCcnCgfdEjuXq411i27Mn9KU25GNRDcNozgKXj4TX9k62sU1GvducNs2pjnXy",
  "key26": "2zjCCeRUwQnLkD9SW77KLFzavWoZGuJqWAjssDNA7wZYKQDYWfgb3PetxrWYXAnpMZ1ZJWH5ditTJsj6WyboDook",
  "key27": "3TP63GTA8qJafkXnLhRRcQUf3k2Ctv5do2V5yMThHeYA4BRcGcxkEHrFLf1wY2AZF1HxSBJxohvWU5uTzxgLYr9t",
  "key28": "sgsX25oF45Bzbg2Yjbzs3PBFCjczAj2Ki25pGELZigWxninqMyrrgcBpooji5x19PHMV5ffoiWEjBngQ6tfJj6w",
  "key29": "2qn8cGrtmzwufFrbN2evH1fjWv9Ft6Rwc8faX9jceyn2iP2C2eL9Noqon2Rx5JzXdo4QJYtiyeNUbDQkyLaGDEQs",
  "key30": "4gpiS4SKhkq6R1UwyaDeKo9JRCE5miX8QgzW3u5FhLW2d8r8nxLRJ5rz8qpkFjCV7DCzmravv7kJMqWNdv3tJpzK",
  "key31": "3jQTQJbjXJ3W7mDUoEpChsgkyoErYdHJY4kTQGPEReX8eWx651zXsx6yLg4ZfuZkjkhpPNj7jc6mB5EoSwzCwLNE",
  "key32": "3qsD7Mmx4MqBBdyFNvfwLBsPYnZ21wudZK7oVFfYKqYVpL6kyxPLKvCuG2vNdck2R8jTvU3XyXNMh3sbLmWM2Ar7",
  "key33": "4Sc7tEEekbWHneywegHuSKkPVfxQHQq98ECxm8rTZEFEvXdyZPN84YrnFNRKPBuBJJQoLwVyDfXCmnk8qcQ2wV61",
  "key34": "239MQWx6MkDiTkXbUqGopKcLVDRRZjBh5UTwHu7QJJSEaGRm77kdkmsGuG8kD2TvZeFdH7KDS4n94qn2GGqUGtSz",
  "key35": "4S342YzF8PepWFJRH9czXaKTbTaL2qC2fwoPZBJxyzp8Jq2sQ7qtBP7xiAC1Z46P4Hfgs7QRwbR6PVdzGEHz2Rg3",
  "key36": "5VWpgNG2MpnLAK1aX4Jv4xg9D4hoi6JqkiRAZqvuLq2BRCaF3MgtHVY1NMnUUiLkYS5UAUSattfbmLrV1mn9rNor",
  "key37": "62wd4NLXZ4uFwPPRSFfDjsdeeBiLMcqUeRNXyjRcsoCrX99d4yEzEjvQWhvmgdPipeLPTbHrTZHPu5T3Lv4EZMBX",
  "key38": "3EVwPq9AQ6UzFTyQr74o9BWDavVgtbE5EdePXvCefp8xkaHBbjabrprqvubgJbDQZ2wzuTn5a3CMP1CHHS2fVQNs"
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
