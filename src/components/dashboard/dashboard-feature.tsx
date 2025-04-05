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
    "5GHhpaE1J17xCrpr27AvKcp8D13BQnbja95gapH2PRJXowaYqzCFJYWwqTtnpnQsbzghzwPqgvxBnG32d69BnDok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SMHgweBz2odE4dAYKM7NXKGWaTbFjARYoH2HTa92U9kq13FBRH7aqLHfHazdbjS9G6jTd4oyqSeXyCLw7Bjtwjy",
  "key1": "4m4fFQhno6zwehe6oUKXMW4MAdxf8jAMTHn1z7ZyfnxJzmFPy1jvrF7ACbmin2cWkkeNQ85BA9jSLQmHxyaoUPBo",
  "key2": "Me6HqkJAq8BeA6oxb2w23fZGKCyC31oUsTqoRACu81y4XdqR6ffEnAhQN4Dc6XGTKnS3qna7ahcMcmBEFspTKRK",
  "key3": "5x2rWx253EC1GvFr15v6phjWZiErg4Ugan5mh6zj4bnjis1Mp4bZ7GLeP3NAC8J1v46aFaq3jsMAqgc1piAzg58M",
  "key4": "3KDtazfyiVesJHdLRjyPCjbKht6fj5yJ68BfmxY7VqkkqdUFPaizArp1r62u9UhyRzfqB95Mt4SHFCEHoYHJes3P",
  "key5": "QzVY8ndu2SiAcMT8gQ4XsRb99f9WHx2Yj6nc3r1mctg31vVWseKZn1bR9SsTBSYs8519nXHNEd1SBCwuRevUr77",
  "key6": "24w94ucahE9f6EPpZ9SUAvpSMSzdaEHjgFWPEXoQRGnYwVBzor4XgZ4z28tgi6Urw2zeXfk4jk7yUy3PwcUkRZU8",
  "key7": "2KhVgfHLXSrmVZm7op56zMP4ijpNojH13DsDNmH1hwY3tVfWbiwd5ReRXhpgw2jSogoX8xnQarBUWyp7qcqG7QCK",
  "key8": "4i1iwbaAYdwoGkyZk85gD5uqxzwFR1uSczCNMyQVzqTmSLPHBuex67wvH9HqdpSvNoAcs9DwiGcibJJ5BR3WnHrm",
  "key9": "67P2q2th4VyCC6gSFKWd4KNLwXi6RiuC2jYECaa85TfZdoGzLaeu5RzCFWeZV17PUr3HsrdFvPPHxrHjY8KLSHGx",
  "key10": "3X88LxJ58jc9MauA61iHkL1Qgaak3zUYxgSPMLqKE6Y7rghi8j9roShP3jJA8iD2L9Ce3EB1sN18F9dCFtY6upUB",
  "key11": "3UkMrZh3DYfABeurdVv7zCPZ6oDyExYCUkqQh5cbnmWhcXiDdKAChvisssKWXJ7rEzHYRN6JbujismDgZro5Rvcv",
  "key12": "5fsrpBgxXzinyocz2CzQHEzoZuSvRqhSo1F7SskCQRwEMNXGiB7gWKmpqmoWhETrNZEt63Y8SVg3ESJxUGo26hxC",
  "key13": "5QKje9GqQZyefu6fKg2zowuu1NnVuK5VrNKfSmePcy2BQfymNrSaCLAU8EgRbzJNtUAt219cyUMLgj19ees7H5c7",
  "key14": "5DT9qN4UjmxJ2bzBs8kJhpEXtqbbX47ZzKvdjrG1RYg2vr3ReYSYke4m71upbMaeDFiierEir742Fm6hA4XAZmvc",
  "key15": "2RnrfMw8CWqd2zkTyCvqZrt1EG65F8yiJHqhXuvnRFrqaD4NBk8TLWS412gATxLgfHcsJXE7hUSYEGauogKzPSU6",
  "key16": "JqSSZUtKwpSUCK5twg77SFKxZmnJxaTdhbrGicTxpTVthk4gq9hBjiFqGpFH5wef2C1uFeH3fQCbfPkdM9JFqZs",
  "key17": "5NLJ26X8uSemN8fo6uJtLzTx6KtmtrjzSkvLNsPMTxpchuWFJKhoDk3QWKTFWqvqTJuv5oy5U8fMXmSu6Hemmc8S",
  "key18": "ntPNmYKU4KwoJ7BnqpE4gGZ9KY74zXvgvNNKVa3vptamR5w7iAkCV1J9b7hhhKQAq67DWBKamqMMCEDA9hmvZce",
  "key19": "3zpjp71D1AsxihPmSwT17r8B6vQQPheXFr6qds1xJ32X7p7R9qzVXdt8HAHZ7fSxx1ZWcGscay3tghKUTGH7qoUm",
  "key20": "33aPYknsaF2tTHHTxMpBW8GRdDYG2LUsPEXA3XzMky93SFjikcmY55wxWH9vvjMBEm1D9CW52knH1NZQXzx9BMm7",
  "key21": "5aWY9miF7Hkv8H5HTF6Z6QMQ5eoeNyeNBRymmFPGq91E7wRrzYj4wegyxB96HDjzV8YaeS1bA1JaFUhyi9jmzwxY",
  "key22": "44LhMB6vxKJoA1Kip5PYyQVYt5mtW8EpP5CwBgbLwq8LpnFhoEW1hZBqUkWQa6PbmVTcw5NMZV9RGcTXeLwu4KAn",
  "key23": "W6uvDBrTnPiDgc7WWLjJisSsEZ3bq7WmDirHXpmCetNXaQHYcYxUBWvrnxzXsJV4L7EiCzkqH48gpfaEqHjYULE",
  "key24": "2FUhsQangcSJUMGVxmyNzxgcDDUXYiQCs2yCWpp2NQxTnqWxVFKzo6EUzNrJgVh3T3GX2f9L46MHgam5uoULTLma",
  "key25": "4xXTsm8P4GmD1ksg3NVSczquAKXxzPzrQsZDAvLPSqSajkx3ojPsLTNqiT6jzvVakhh5yFVmMsTvCqWd5xwTXxys",
  "key26": "5RrAAb9kZts6DsfqGogzicV7UwQWaPi85SXcG1UGLUaS9L2shf5zanaWY7Cxsr1VZtGBiPZWPJ1rYxqh66zhBSGy",
  "key27": "2vKSrpfDBdEuwgRpGQzLrNdEkVzGEVgRN1LjZ7LHTtZgveus6yd6rAnLmg2JfGfuGnaNeBAjJCe7NUyNWgQpB1R6",
  "key28": "2Xcivx4fn7N8943Tnt9rkKJq8tKDjpVyC9TmJQgURdgXtQiSgTAm4kPBwmKZ48yE3idSCJUhSd5HLcxTedd4HXLP",
  "key29": "4ioTw4iQVniFEtW9KM2rpQoNurCjBmgakHfQRAo2xC5UCcNLoaVZzFdpnkYxJ1X45GgkRHgPEGxe9K8bvPXKyYFC",
  "key30": "4Nz8WGceKjxuCxhKxbNAtati7VGVVEXz7WtiTDVsrHXDQmJCRS636PFc44hTkiRzwB3TrVGXJNeqh7Hqe7rNRGAe",
  "key31": "2ho8GGmmAbghrnd2VMqsk9UFX6eHgirFTo2QLuN4eYdYDR8GjEHVMgfQvRQTHtDA6g2SiiuKiYKxGs35yqybxkmN",
  "key32": "2vpZcanPe4NsYMJZP5e4i7zALi2paDWBym2Ygi8WUFoTTbvbS33QZQsR1jpEsM3TMrPppPQGc8S5K5wS2J5Whs1",
  "key33": "4vRg15aja3nGAcrJxhpK3DQvWF7GSvzkMdXeS1qyxaNSwioNKx6ijowHcnv2bz2qZpz8Xz164GdvKPEWksuEDrhB",
  "key34": "LqEcCsD1YEoDHLKhLfuawN9yd2Wko7F1KhTTq4mZcfkHuK29brNXv9T8HCGRKue6S5bfyx4pJAR538kmMjc6c6d",
  "key35": "2sgSUbyEWraP8XiFHKyfXSTvG2WXTcPdmDXbhW1yYopeGAvfBrhgSjGdoD5P2gJZkZ8F6zZ7QHcW6FE63L8Y2KXY",
  "key36": "3Y4jK43ULxEAYKAtGkYQ3uj2vsJ9BWQTSDeNg3VvMDT485NC3h23GKSo5ftLWYMgKd4by5rEWCxmazaTaTMY5Wno"
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
