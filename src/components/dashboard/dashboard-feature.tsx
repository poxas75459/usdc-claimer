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
    "32jNLM1MDt7aTcJVCBLoi2ePechfZskTQB8LWfww7N6LQEieHCHFQqxEyMz2ss4qBdRG364Ha2RvB9wRUGfbELJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VVv2fbrsG6HRGXAuF3g4Hrkx28AuKzM9gR5LVPHyyE5RXfLCmmDRg5UxF2x6fdTJ2PwGYdeyRzZwREAo1zE4Q3Q",
  "key1": "59BF9D9gFZsV6Wv2gxMfjmbH54RV9CV5vwMWdy5GpJm5E1wwTiuDh72S2xTS46gYXSm9MKam8Gpd3dcH1VyqQvJi",
  "key2": "UfEHcCQcuABZ64VRnRWXXH4eFayQiimy1Jt54f3E6Wfp42egDz8Umdga6VhP74g1eCL2D2jCDkKpFFa5XLzhdXV",
  "key3": "2g4Ha5K4LqpefjgaTS4cJwBVopaXjcXfYeeMAKFhpz6hbjMbqdx4s1v5oyvfGZaBACwoiQA8KuSgxJJnn6X4Rywc",
  "key4": "3y7Mpc8Dnj3vJeEmCARFe8WUpQR1A5Tnpy3v2VofLy3MHohCeFv1MfhYnJwVtfUwbqEhx6BpnZ1CWe5p5YjHLQrX",
  "key5": "58CYHRTiPfTTgz6gYx7VMFd8XJ7SruFJPMdimWsU7EJZppFQe5USERoaKNKrf7R97Bkib8awS6dkWZkFc4C3w6XD",
  "key6": "5vB2Zny8CnmBrTDdTHZd6EqXziT44L2Z8FFeNqPEZTAMcfYBrCetqPdf1vG2aaVgzxRtDSQeUhZkXzUX3C4fz5kF",
  "key7": "4ZNy6poCp2Ufxbghe8mmDFUWfGkzt5TLZnnugdnFnq93CfAHMVAGMr8xSY128grMhr9pekTCafLnosyBnun9t4YJ",
  "key8": "4zHdh3ESQLZ5rsghwW9cPwWRa2voGEwSHJYwTn63m28jmMmNvSg7qVaadj1RjmnpqhPZr1TVpxorCZi8Z6yzVapi",
  "key9": "3hA3yXie9eNDBRxqopLfZSS7F9uSW3nETCYUjcHJFvk9FHyRh7pXwGTRPh85c7WrCJXJKykfRgSKno5LJChXyTcT",
  "key10": "2HiCZZKufrTxM3YunB39A8LNzfMhq9Moss4wLRPMemiFbTxWM2zJ21Bii4dVLquWbkcS3SEuk5xUXPWX5qKeFwiX",
  "key11": "234mopFhtUZHsi4SywyjBPjuHp3Bom8nWq4o3UrzViF6AuMtGZhjWPUFKaQPMxhpk3hQBn5X7MBUnV8bvqwqf49q",
  "key12": "23PcSwFLcbcwZxT6SqAezy5aTvB6zbeZanE63shGHdBdxbpqTLXE7gRLLgpXbP7qGKFtGYpQAQCPetPwPaibjvFT",
  "key13": "2vuoAhh1ACzukULrFZB2934Nep4pTcWc5S8EEFbJKeVXY7GE8JkUz9CcBK7Nbf1YpzhiRWMup2DqELpoL8GgqFzK",
  "key14": "3t7kTR77ookvURXEfBo2d7i5RAfVUEh5dDC8RA2h5oVcL6fd4ho2kMcYxeENF9y7wjmW8hx1o2mxerXifxFLm5Ek",
  "key15": "4mEJcHZAZx9XLWmyHm2AzFTE7FkvDxVe6e39JbABiDYq9mCQQhxsWAjBqnNrHA2U1fBubnKBD7KnALgocGZ3BsDu",
  "key16": "4HqmUixSWGAo41XLupvAdQSjd8wJ3bgLjTKEawcyvM5DkYUEn4v4gW9kRm7Gn7LSx6ffpoRPj8M3kqxLS6htKLYY",
  "key17": "TbhLv9Gb9XhLA5fQpT1vin27T14LgafCNQzmC25Dpqm4dL75sjWqqggsbK2FZSSxczWQ7HMLcSQBsHhcTcmFASq",
  "key18": "2yZcY54hr4UKyj27fPVwn8igHbGccKZe1apr6Yb1x92V1hndV6U9ydN5yNih9HWASDyGddongFV1rhLpuzijxPF",
  "key19": "2Gz2rxnmRtyJxK7k1wja5Euc53533wmFt1FYa8b2etiYEL2dstdNmLNybkHMvZCyKAb2oRWcUh8jdN9jbnV6pHNi",
  "key20": "5mYntxhn6eWyR2mcCpeZq8x2vWVdA22atvjTovjWtwrgy1i7CHbLH4gGBxRgRwLR1QMtaFKFz1GUo8C57MbXVe8m",
  "key21": "kCo8v3xgZthx4XDhB5NdXtz6e79jakLULpKfVQAj7svQM7WZ3cTBMQqS8vaxsiQMnSUT6xgg5smBxASWCRCepCJ",
  "key22": "5Kg13qoy749Qj9zneqf7bqfsQfjAUnFifWjHnw5HCpbkraY9qKDQfEfj1R7sykw1pP3TkMR3NGGS8GoMAHzCAqom",
  "key23": "5WZWKeeEQti2uYnCDH5uD8p8xFL7kvKrDnjxzHqL1W6x9fLnEuRkkvkymQgh5nHqytfEF7cVZofATWYVFgJdiCJs",
  "key24": "2pPVuSnwHwmngaqnxXYiyVxqpzu31ES8SSEFdqWwfvNQGXje4G1WYh12ToS92ZPQht2yGYh8tLsUCRNx1tvFgc3D",
  "key25": "dVUEyRyHLidCgyfCo74zXgvTQ5nJYZ8Bbn9zvKJkhU97G3yQDvU1VMoWzvCbCxNTAJWLkCkG7r73etyxZJQBw8D",
  "key26": "4VdtenMg7Vq93Xm2Q9zMczqXTmMoeUyu2BvLKrnA2Pq25MKbzCLP7JViNQPCq6X5wxvVWSZ5NQRrFbMgXAGeLkus",
  "key27": "31BVxPxf3wjEZDXiLwhx3iddoZE2ZPZRpfMVb9Ux7JE3Cd5xJRffx2ZT21coMafnKffovyD2KaURmdXJUaFVWoQU",
  "key28": "cHQkTQvHcNfDyXmZF7SZZLN4AFCa1xXgLQtWJyGnBRFU2df3TJTAffidPHDdiew3oNcDi6nzbLnvBg6AYuLwvV9"
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
