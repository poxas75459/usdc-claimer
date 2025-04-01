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
    "2Ch37qaszeKWBxk7PsBqNXQaGxD7cS75hnhSRw5AsZ8utuF22BKPjBcDPTu7YGsGvAQU3aqe5BYA1GpS6Gwov8bW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PYFYXMhFF9RikFE7gjkvj1wJ3NoGHBTkq8C2SeC9aobd5YwMKBmM9YzFgrBiSv79Bk7X4Fk3nKGF1WmthSe5dv5",
  "key1": "3EXzHbpaV1myL3r7zVcAzcRJuCP36NXfLRSBd2g5QHHJkZ4pqg3Tup52ZaGo8RmP3MQS9t2qPzBo65N53pTxRz91",
  "key2": "5RjCMtWgph2z94oLX1wF5QXtxbt1wAcXEeufmsQCFkW4eHKLqupACY149JSGZ1hXpTafXGTGwwYKkVv8hbd6VNYX",
  "key3": "Q4GsNijpNxA8jRDwXfUpxrDWf7XwRg31nE7wDgV1KQZTFw58K8QQUqGGrWSF6eYmLk4rGuV2G1w4T89iBEwe3xG",
  "key4": "5ahZ8wDdBYg1cmPB2pyJXoEWWFLyU7CUMJkFPKVRo2VMjy4dbbaD3PJcdsFDRbjMyArM9Ct83P9ijDnP9nsA3J9P",
  "key5": "5wdjMbCcux76C2XgLDhaZNd1G4LugJQi4WfEhAtLoAUnW47ryLEHUNzHRrPMb7q7tQ3ZNCzWCoyrNnAi5RoT6MAz",
  "key6": "FxTdZFCFaBvHo3QNNhfD6qt6euYEQhe6VXWpfLbMhNQw6oAccAacNARAEZRobKXP1Yrhk79mTfkCUXH96qVSj6h",
  "key7": "2xWG42rMcLDAvm4iiiTsjvVcUxpFp3amspYAp7G8CQrjkJffaEUpYboHHBtcQjHb1D4rHhT7PaK4bCmBEJiT9ewo",
  "key8": "5VuNBc5P9raoaZKVusSCfrobcYMcxgLFvjvsT9JeZjKPeZMeJQ89Sm8Np7UM6UsD8b29HqzyLr7KpdFvUMUR2ANt",
  "key9": "39gCdzXuZQrTVP384ywuJFku3d5UXMBjNjpkayzQQb7pp8Uc4qcLjwPG8RxLsLGNRednVM13SFZB4UARYwuWCfyR",
  "key10": "58rSt6Xd19ULhbusHm92Kd1Fn73BYXb2Una3gnAAWv2wXS1oYajh5X9RA3knocJqLXKpZfNNnNAeSzHMaRNr56gz",
  "key11": "55qLkcUgwSEZ9fVwfTQeQFRDFDSWvBs2ZeDUZvGwV5rWAV7z6z37TD5praw23hu3AsqPF947rZviK4qUtsEsYkkC",
  "key12": "2M89o23ZyAi8Pz2Rj8tYkiquGuvFhKB76mHvVy7tjjVd29ZSnATwwi75Cfe5macg4BbbFWNVeHr2JqUPVJGVpF8w",
  "key13": "2pwxxTXqRhD8cH3ffKVwxBCPPy26Tb9o4brGcPNk89wYtHYHF5d8zcydnfD6176Mg6mHxiLkzqDbh16mgCS6mMyP",
  "key14": "TQkXrpBKodU7pNoAC8EEZaSSgHpcHPMrhbwVJrnXP1pDpaTE6Efna8mjrzAJr8qXL5L1rH18AQ8RvfioAPN6wB4",
  "key15": "66HwXAjT3YVg1j9vcyiMbunMwDkKpGeQvYzCzMAoygghKgJrF5G245zB3han2xHSwJRiCkyD7nAtr1Da3qhBi2C4",
  "key16": "i1HRdJMiBco53g96xL3EwQ6oDbwPufCFdhBYta9xZkjzBvCjLrctDBmFVz2BqQtVz5nciL26kh4czQsxktEvq6Y",
  "key17": "c2AAPwWofGCu38EiWKfFArRX5YsawMJrzTMfpC8pZ6SuAeeqNizvuFdaLtzJhwqo3PMPB48SPJMgV9Fxdc3o6Pg",
  "key18": "5fLxDa6mQmdf1SYejB4v772xGXJPFwLSoEKHdm5QuSj8pNPx6kGb41J2dv2XuSnJXLdDSxyKyc9qKf7fhjP9hVZ9",
  "key19": "3qUjKcCK14NrcRiBLvPDBXvj2Ch5dv8fBbLfdjEboee5UQJa5TbawnDU2RdDiTUHmwLUdXwksyc26iKuRzir4dDe",
  "key20": "4q1bZgYF4bJo2fR31kx2Xt26xscf1o8HEgFnVsCqs6JGH6ZGZ4zjPk8M47hDBQy5jxFTxU1jw3XVTqXf7XugDLKG",
  "key21": "3jT24rUcdFBpqNNki5au8FmQk7vgkv94STgTqrn35ku7YfYn7KteQqiowDbgcwCHGs1CCvB7phVFxgkySXYSesQZ",
  "key22": "5yxw3SiDPAPnfU214LSN75zLWhbK31j7nRrqy9QgyGtN8jdyr97WLp66GC4hWmqgvNmfHZRB7SFafNwv8LHsqPMo",
  "key23": "4yqf5MAiDU5t3XQP7iMmCQXbHHGavXWD3J5bxghwBfeeQQ6euEWCJbR3Xe4V1EokpPhZgyZAKbznexkqnnmgcowf",
  "key24": "4TTcy7cVidbQSULUi8mt6Nca6krjMiioUc9mjuZYNBUVaChAzmZjcdNA6P5R6FoqAc5ddSRx1DDpiZTRbJJhVGBL",
  "key25": "54DP9T17NFPHhrcqYqLjWLL7zcM1KQPDo7r9EC7PyiVvPRi47Y873r5zQCh19vMgyBkoubysRCukHbN45gngpAGc",
  "key26": "5eWRhwWDPPs1yBTFh1cciFaQTyrxKhVNq8eyiEJUBp2GqyAYpqds8HSVTWBh1ZRqG6rn87ZEeAghCFq476WCW6GY",
  "key27": "CYpRjfchg6ZPjWpmHGjgWPMSfwqc7UKDF4GgEBRGu7hc2AhEb6dHYrFc19KZad2MtnRSvMWBFXXDZ6kPSefbHMU",
  "key28": "37SrMkt4Y4Tdhd8dDXuKWJ5R6crL93RhBYTZcjLJYdZnTJSFGwnvvfrKDQc8vTcDfAHP4vBGzUuz1GWZGcQXYnL3",
  "key29": "S8gGgVk4gjkkujDQuHQqMYQ7q7RpfQo2CQxmBMUced6CQznTydxGZ8cHneajmQkgLM7BYbyZ7yTdBoadTBDUFqa",
  "key30": "4ApDhWWoyn9K3UvoH42dcwyyrZbZqjqsqAJAQ7bevegvFRT95ymnBRSEuwkrAeiWmdErqP8VVPVXJUEtWHbgyadf",
  "key31": "3BQPAHmD55sjPV8TkB6Zs2Gcwkq7158Mnyz2S5bWwbBgS5MstB5Ercmh9yzuZZRXzHRtHMrhUiK54wj3LtRKen7A",
  "key32": "2URgdCyzwqFPa3GfF2Ypssh4drP5pwP7DJT2UAFtxWDdtgxDyXS5U9Mtzjp5CwTByzNRzTatoCEBLUekVS9Zczsc",
  "key33": "2ic6vFx5DsstY65fToPNsSWchZ4dnxmFZ5ujTguosNYVKmcpurHLyKEqcTJdf2m23MkWTpv4gm5RsdGLVJpvu8sZ",
  "key34": "3JR7Nh9HqER28ijVGDvVnFpAoxEjvnpiCi3r8jioS5Z7a2JGZHP6PJc8svPU6UFfDoRUazKAHoWeZWuTztBJoMR8",
  "key35": "zpYtMU2u7zV5w1s4uoZTygasMJpt85Xjfu2uXRPJUVm82MCcsKBkQQTpELa5JqdBq8xu76PCRcek7nRFqKScXmh",
  "key36": "5hUwgJ1HMX9aHRYbvjY4YxKz1ZmTyGmGBntZJVvXwxZ5uRrPeAP7eebRDgLYeqPu7fcB3kXF6g8umnbvh18dmGT5"
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
