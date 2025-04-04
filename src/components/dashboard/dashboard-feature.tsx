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
    "2D6JsjBWuWGpjcz9QjkuK23jYHMdiNnjJa4hd38WEkfvFZ6mpWSh5wjZ9zdw33UfLUcJurwTr2Cv8hoGe1JBaxqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MB5eP6wG6fXX6rHNFqZ1d3d3oN3ZfmgdL3b4Bg7tnzchJKBsHxuPFtdiQykiFdekub6FmAZqrEay9Xb69AfHZHL",
  "key1": "4ju8oy1Xfodg9GmHAf3TmZEYfSF3vUoeme34Lm2zszviVacTdDqM9dEiyWbyKzez2hQowjv1WyH8rkoEuf5oHzFe",
  "key2": "3Jyzmmw413i6t8yCxZJ88BR45m2Y2F9mY68n7SYq9K1iF7wTEofTKe3toDYzv9Eg7FA14rZMCHf3SjxYuZo4jWtq",
  "key3": "3X6UrfntDwvJnvCPG88VmC1KnSVCvq7qTZb3dZVtsDwqN3gL3wchDDnosRy71PdH8LxnbiSrwbpeBi6fCbfp8bnV",
  "key4": "5wJGijQegeUo1RiA5ysaSXiNdScepP5CZjNwKTHybUVtCvZT8J6z3SfuEqjwzuMwFPvGNT3RdnEGdJJAfuTXLsss",
  "key5": "5NwiK1ntrBVZTXyyvZjZw1CbAJShzHkyNhR1xfteHq4Wr5m195i12afMYv8ShtCxpJo1ie8MfvjxqyxfxfT6SYRz",
  "key6": "5H3JqSmkwMDLFzrNNAyEeowNJZ79QcYgQ7q8sbX4MkGhWBp7fPuZkNp3BEreZ7Db6oP2hUa53WhzP82Ze7TqaoM2",
  "key7": "2V3JrAaYe3PniSZzmcCoWPFZdzbrCM91cCUeWwcc6nvT2eogUNrsC19uBpx8kD1B38vYV3TTJ495kLB7E8F1G5eT",
  "key8": "2SViG6rMxeRH3zid4Mfw2SeGkk9z9tczsGWCfoBoRccyreBk4C4psytYaShh1k8sUrcduhKxSYSzxhUMqJkoabpw",
  "key9": "3zEKbsZGKYRrekAp51qyZ8Cz6gq5HaAAKkTLDWMRoXrN24A7SaNTxD733kAhR6uW5yEN3XvHXu5iTzjvanZ4sTbM",
  "key10": "3Bnqp7pq4hrodqEvDDfUc96HqytHiKK3Bc8xU3p45W2L9z4aWH8fE5szyCm8tDLEXbe1ZMTcce661od3oZhXntVN",
  "key11": "5eSFpTAvSNyAvsjxZ4yjmUU7s7HXZwhg3ktmPa4Cmdtra97wEhEwE5Y3SdtBECna17YCmA994c15brWBa7R2nTZa",
  "key12": "nF2ceRVvMkuU5AuF1sKA9PZqsLPUymTLmN51VdbLr8ETU8o4jkscL6pmZ8oD1FyzKs8F4WL5SWn1Yt2MNR6pSLs",
  "key13": "4LqcwtPHkXSgwQw4mDDfB4qCYYbR5H9tK3mjmJX9LeZ6jjnDxLRg4SN7F1rCpjEaL1S8EJ5NwfBjCCbsUCbAuVmG",
  "key14": "3qodh2MEpJf9En2H74GHquVHoeLycx3MVU9BeYyW5ow8xdhctnNwuVWETFR2iLrt5XTDtcH8S7CbQqAUifTQR2rQ",
  "key15": "5W1yPzfB9H56ovr3fCNAAppVoZN6EroU7yhuuvZotmQ72KAUac1e75AVZxBwi2PuiPPKn4mHJ9fWv8CsQ1TQkxEb",
  "key16": "2UkBrtyp1Rj5dYzHj6VavqyPvW3RMMWSZPqpBmr83TN6bqNKE6mK1pxUYGdLWnFeekskCAQJLdRDL51qZwQkXSmN",
  "key17": "4g3xAnbUexb1QrqoDWkUm9Jtz1P5VWRagJs1zmJKhR1YMrUVP4ZBrPPFqhQmC9rnetJf971rNPdGfWJcnETnvQfd",
  "key18": "3c68Z1Ag3RPktik2CPgAziqKGoWxeYHK5Ygn3JrvYdgNFTx6zxyAGzSKngRzR2e1EuKPFR1iz6GAcQE86kBmxrZb",
  "key19": "5aYZwwmsLVTPQsxNqSc8Ujfre9xwkiHvbBnGu3rmtuEALXkejSSNCpviJ4cs8RJFq5hmdcUSPSbFff42mUVcA38q",
  "key20": "4sbbayaXuTuMVzAfyvbUxtzGLWn4fLbe7PurUkCadFLpAZRb2e87KcMvgNfXDYZSC8XHx2AEeVtYWE1fuBHvKqju",
  "key21": "5rQ2CeLHiFtRdzqMsdv9qMXM2cZY8Vh1d194jA4mo95KwJn6ichVBW7YFuVZGHcXaPYNLPnKorU39HFkUAZSN9jg",
  "key22": "2Jw4ZVFuYfDFuTrHzLWC9VhtYqcKBbTDtnow1NksVFYhbQhtqmaRkct9yKupbjnqPjs8PEK5gPSsUJupiZBFfL5e",
  "key23": "2hLK2y9mheShfdvNqLx1D3uKh4ExoneZxSpihdnomLbcDFD8LLFytoLJ4oScKe6zSuawvUNP56EaATjoqf2VmGsd",
  "key24": "5FrHEK3AysTaFzoSNqy4sTtvoBLHmZA2aAZNCtE9bdFzgNAbKFYMKMy9xoTp8kXQ25S6ndbzGFN8MaqftP4W1ucT",
  "key25": "5J2mTsSdvCqYgGK8J9Gc64MRH3KcfBLjUGP5sMuUsVsWsTke2w8LArDMiPjqvetfyxMXoxYQWKKoiB7NvT2iL5dR",
  "key26": "5xuRvzBA7nuXL6ahkUQzEH5aX1io8zc9WkKcVH5BiXZgSKEgMvyaPtTDUrjfiKqmHXCJefqdZVzVZzEvnFyaAAXb",
  "key27": "2efQgY9kZM13XxTEJJ3Bax1kDo7rjY6KbYS193YgCvrnn98MwK7FaiAhAJPsMhssYjN4u4yMRdoDxd7Ew4rJ81w3",
  "key28": "5npjmNVv5PLdJGW4t6k4u412DroUyyoJWwKxXUxrEJ6Wawc5CgbJZcY7YBWviJYJqXYJUMGDydZfpi3sQje89M9c",
  "key29": "3AGdya7jpW7eBycvKypP4DYcyj7yJSQytQWSVXd5ZDL4gxQsa1DDULUskjd1ELzUdowCjA6u439aVzL93wCNaWno",
  "key30": "5e5Jqtc9VRzgGZWjaveaugE7xCSCUqLGvXHEzXZLZa3WC2GXj2uwvwBhL3pvQproNXi4x4bWdUVpiSnAwE4n1K8H",
  "key31": "3mqkk6f2Rq8vtGNrH67CsRNe4njvQ1J18gUpou3H1Njs6CTsoS4MpWBXPWX1LQ9iXqzwHhxHYu87jW7SVPTUNwLp",
  "key32": "5EHmgzf8NwFgwoxvMyiJSyHLHMMiB3c61xYTL1rXzfbTo1YZXipXcdHqinSL29Ke6U5qfAk113nBfCCEZKJtdmYp",
  "key33": "4dtsAFgBj2kqWNNuwiWX3swFdm494pTwAtLGbCuEcLegAjihjcinAXjgKRMVwc3VGbayA9a2wX4C8CS42YA8bAMg",
  "key34": "amkaoX4kqq9b92Hi9g263kNCn2MQZ2GR3dqYpsmTj6n6FSMxSnkcBpDs5eMNFenNiWg7qmVyAoMjNBVSU1Mr7Sz",
  "key35": "2KVXptNh94u7ikJqsH6Lbi4ePztns6MMKYDGzhvuvczhf5CjVmw3f5RymXkmg9PJAKUuHsMHgWZjE93JkXDutdsF",
  "key36": "3PW29aNsVBcMfsWLadtEXdSuz99XNgxCo6iQ4X7LwSdKprghtMWXzRJoC3r15pw1f8VNazfACKco3jowLpWDaMAV",
  "key37": "2AUP9hUFXkUFu7975g9AecZEERoN3oXHNvUSuE6G4zAEGnjFNyJycL2bdD6iBz5tpM3nYY7cwULTw9CEjKaLQvY7",
  "key38": "99Z4snENBuij8WfAP8Wefs5pqxzS5tTwTpCWw4hUbA96B21EMjfhCiuWuzHYcXBjC7D9ovU2zo7FEM6Sdfj8vKs",
  "key39": "2cFiBHspoBeCzvUkHkFQLASGYPutYfyV34XLEwZoSmetQPJ2bV6d1jMtLEFt2DCL85dHQgisQvhBnnW3ayhNks9V"
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
