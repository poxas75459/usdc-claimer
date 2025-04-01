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
    "33nCANgAGhniGLRr9TtvXWEChnnEbd6B2QLofAsb4JSUNyFU5zRt4fD974Y1FD5ub63wD4Qoun9oZPCmhBPanEdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2us8a4JymR6s4rVRVA7ye98yS5jmGZ3EQjRGM97AvrCFHg69w7XvrxzR5fTonzHwiQ9nQJj9zehPK1rPsidFWHp1",
  "key1": "3EQzPXDpFLdpvUDgMs6cMqTxSo9dnSsFpgiS9mDU1BRkga6nGko4ot8CK3JyZHpznetm9dgTSFCYwAuodKCGkfSA",
  "key2": "5ZBXYmcsTJsQ23ywT3ZdtGz6yCprLo4zErdEVAA9XGJxhFnQgU2ALShytkyYNUNv74XHNfgCFbnaG7b1K2nafqu7",
  "key3": "45N2hDQqawVTZHuNnRLYhfdURaynkqUpRe5E1T5RmQ4SQK3hisnBpytxfRnTm8GskFScF1wQoWaB2YPtnSZh2VUz",
  "key4": "2935jNuJUsH5VdWUjJVJCu4XQmNrPioQsbCuVLE4G27QGojSmDbpf656NDJY25RByvPYDUsMMZfEGTZCKr1FK5pg",
  "key5": "5pJippWHFPznrTU1ZnPtCEREuAZsWjBJsovqvwMRuuPKpsgvkjb14m5HMAqLsL8dKhUhCaEAF2Wgbtz9YLGkepEF",
  "key6": "2ZTY3YHAAZhBPR2RBgQYs77HPUoBbwAvpKQXH8nBuZnuFR5MemxUB5q4gg8RQG4WMs3SQACBD3ja8VBCcyautGyu",
  "key7": "67SxxkKJUyP5WUvrcR4PwSu9gyy4XpGpS1n7L3dKU5mAQL8Sc8taAUR22ERMRSGzDgPJ5jjZ4HLsh5Ka8mGuqYYd",
  "key8": "3rneKDcq76SEj2xXHTjSNdycPHPNUz5PfXVy6meYHoDA6N5ZEvooCFYXnpiaPA56eCbctpjP2VxdAyhmvHq476ZP",
  "key9": "32m2VXPuSedUhrdCKHGtDTzKN2EJyeWnzzyDEi9ZwRTandWTgrFCnibc2C3a79RxYhyFZkDYjo3W95ghyUpGThjn",
  "key10": "2p8nn5tSAMrzhDVaEtnzD5xU3zn9XyMJoN8R1vHHDDFUoUTjdJSY3UA6xaK4v3fiGKiUG81jKin1JMVDAfH4YWSV",
  "key11": "5n8LC6CMa7hqpziFjhwAB8N1yWbRCQHWfHqYnXmCABAzCFF9Rezkdqj2dpeayvyTAuNmqch1npuX2evXdvDi6yEe",
  "key12": "51oFe18UAmSUdsBh2RWe18rbVEgEcvQxjoA7PSetwTQuNTbEvGscyWKaeK4RBgGcZeb66mEwss9UxiD44QbgaWVx",
  "key13": "283iJtmHztQBfEVZgSjZ1mtZZGXefpfB5tTQPajzZWzEqYaEq2tWpQWdkxYC5uRSC3Y8dzqBLz3VN2XmA2LUJU9S",
  "key14": "gr8xMCzviAXN8AeYbVkik3vR12GGEE9rGAwEf4H8gEPCpMiBw41tfnVbXC3gLJ1pABkmxY9Un5aaeGrX2J43DvY",
  "key15": "3duyAmhT2VKf3SDe7rsk3AnsCDDnTxSMTx6LAFtvERKeutbq1o8gBKc5wjanL1ntqcHUrseTgQqqupCbFZFG3MwA",
  "key16": "4pj75vimwphxvtRCPgT411sbyMqbBz9ouMShfkriQHxRreBg3brd3SyDF7rT3CUvbaQ8xv8LVP9HsSj2m1Av3C7b",
  "key17": "MC477Wrb7noLWViKECiVzfzdixYRjq2PAuwi9qTgpfrFwMNSRWTG7hBZ3eyLffE3nVT4eCW5jzHrb6x4oJcbpRn",
  "key18": "4G2BppTncYPwggwADEzyQXzUnMsbuNewQAvKHfhXpQbjV3bm6ZwCeMq4yLDMx4UV7xT6us5gniUqySxVZsTUUmKo",
  "key19": "ovnFCWzJkBFrKJhPRjTmZGvtwxpy8MnxgE9ZJbJ8dSyTp1wvzAreCafhopjPuwL8eqLb2vkYEMku8pdb5oMqeqT",
  "key20": "Xuxc7PisnyrE9DNKqqKpFd8ajom7i8pefsV1vEVzyMf4JqzwFzcZfC1m3Xj7dPWU7SQN7f9eg772auLA7rNGLHL",
  "key21": "YZsiJCiL4MEmJv62TRf1pyKCdP5hQbYzMpj3wmWhQkaX2gvx5KtQbj9dixH9JLcdue5G1nTAicJ5sBCcGK4u5Q6",
  "key22": "4fEmyeYdr34s2e49vHB16Y3nzfVaJq37oogKpCAXtZuL6P8HHRzcfFBNeRdBkrGjvEhPTh6a9U1kdDogAVUsojtF",
  "key23": "5gyRwSB39zugqfYcAJCuWThmFSDBp49oD8vKKsPE8464K5uB6MbT11NnZBicRdKuNF7ajzN2NU2KAjYUMjmcoH9P",
  "key24": "5M7rC2NsMknYtr1Punr74xUGeXxMCcknhTqp5bZWkXi6pu4gCuVX2CMLuw7D1kZ2XVZAQsjqN8BYPmkbQLy3f17k",
  "key25": "3uP6tB4jyCRGzNgjvYwzfajRHJjPunQREWHGEzXWF98xr2iJoH33nPWJuikcgcPGPSoYifLDPfkNVvzZmLokstSS"
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
