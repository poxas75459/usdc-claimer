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
    "sNqi5uKCTdWCRYnh7UTtPd9kd4dGpimxLF47n6fnFzoHdstt9mN2PtQsiXMot3kc8VhDUAVcSQ7JmqKut1E3Qdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y6B44uS3FvPqSgfRTZdwLKu53Z5pPUtNzKyp7sQ6SbSzPPYVkvD5G4vxfeoQjkwUKWM7HQUbkMEnnp25jZCsysH",
  "key1": "3c9K39rAYn3K7xji5RabVzTBG3Qbi88upB64uvSVyEZaKcqmQUgX7EGjYKD7zELSjGsa32Ku6DYGAsubaFaEyXnx",
  "key2": "yU4UGv4SkqwPetximiaWLJMaCKqp5xtijfjpxW6rruxohyLKa3bMHoEHBhcacYA46eCfHnzH11vAXGyMhxEyWkj",
  "key3": "281SfTmK4c699P41vwb3Z6iKJT2ABy9JATQvvXhuQCn5fJB8ZcZTe7Cfe94fDq6W2N9Tcsup3xgFAT7s4P6jD55w",
  "key4": "4WddN1KvXHa23NrdDVxqSxAxoJ9KHiniV17AYHd8bDEtDiLLL6PtkfnT3hFkjXV1egYCReWfoCDzSzD4UWeD9mzn",
  "key5": "3GakCyuZkTn3p8QXTkrdgqyXu1joLNGA5Lw6aDdQwAjdhqXg6pHaCVEoi8mGvpFdQ17c5eiMSzZCr3xXud68ei5z",
  "key6": "t27q5MYZWd8TxKYj9PV3MSGHwgSgoCNQD5kdBgAAZdWSpiB5NgRvJ9v1m2pAhCrkdSWZmDCVGmNwkKKNATt4qHW",
  "key7": "5ZT8gz6TqsEVpYuFQpaFVAaZrYovHkjvgbyhtdxYJrv3DWNroP41h8sQEatMFjXoz3pGSYJQ23SrjeqYuDmHErg7",
  "key8": "31uLjTpyTZM2yAi9FN5hFJPn84aAJiazkhG11t4NkaLP5i4dC82dYTBuXu99QbxdbcadfuBmLe78JC6m8j4vQTVu",
  "key9": "4vPyB8dUeMVt8cgEhBYhuDKNa7ap7FNKHuSuhpnAUKo7WuRERoTowUq3H3tZvnSJ8fZYdVwoAGskNmm61CNtYiPg",
  "key10": "4wCJvCHvVuWHmXuunHxa1xyX5JM7vFYoZgj5PELHh44XMHpPdwSwmGg5GcMHsmZqUh51KNEgUc5LdcsbS1bjjV9R",
  "key11": "8wix4aGyKMx8P28CNy2A6ZPFbn4L2cGTGAp9aochrwnJtusa839RPRh8B7PRgQKkQwQdTtsYTZr9bfshHFSmqM6",
  "key12": "3z5DDWACSRbsEWx5GdM7zXd3P4y6pDbECuj9J29QFe9paWMKGfrRhuLSTtUojQepHptzg2xLm98ZKgqvr9839mnh",
  "key13": "5oYVFhcukX9LcVMzPy49eNi7Bjib5BowUM82K8hN3buy2wjUUZr6biPbhd6LCTPWsxt4bbyCQJTLWkD9sne6HoJm",
  "key14": "e1YLXHgBCe68kfzbngQc5mYpeDR2eYYpLhMpLeqnnaVmLPfvHBsEqkH91DgFKh2YRoVw94SGEXKvVix4y77AKqe",
  "key15": "64UspTv3eQ89baBnN6SdLCGJroFeTSwVh1K7b1A6kCUv6zroo5QjoijYxx73jb2AuxQ3GEscLMbXNs4anSjEzvNL",
  "key16": "2MHfgA5pji3VCdF75Riu42dGt4RZznSaUgEycpdMpd7josEhYa3t2UE1pTX3MjHfZCMQ5VbqwCLpwRifEn4tZW9m",
  "key17": "4kdHhV9S5aLY5QGGqEBoPeiZD8Jx3kaSWZrKJkNgAienYewkCdSpNcFxK1fPSPSXE74PPT3RfLfsyXMvswus6uHA",
  "key18": "2r1jgv8uiTtNspQTRMhLrzfzD5pJityPidCzHTkeJx9rbV9iBAWyU1czKKccr1jJZbbT7nGbuxBTKgTgjWsfvsAn",
  "key19": "3n8qdoHPn5rZHzeD2XacEfrqySqYdxWrUUhSA4GEnv29aj68tkfapmvJX4tvNu531AhvUhFvn9Mixjyn58SrSYa6",
  "key20": "2N89K22Si3Did4WLbe4DSZ48JvCczELLF2NVtkFwG7Skygc51q7EUwvaQUYEC13a1WcQided6TtWdDdAxvfKCwyp",
  "key21": "GAXJgoFxFvhQVojBsneLJ4ytzVQEj3XFR3S93Cv4nyjAMefUR3ftcjvBYLJE4Tep4w7f4J6kR7p73Vd2Jp2rzkN",
  "key22": "Qsk2wZoSkg7RVXLBCX5fbVmfG3N1AqAv8haeuQEfGqVszDW6WRV22vZpFyk9VLFhT7G5AYFq2JF8KhF2U2XvYoz",
  "key23": "38D3srTfuVJLLThUGjzYU4YLdYHPM11giKMbpVihrHDixLnRkZpW9Wrbno14Q65KRCEjRmvru3WKJd5hvrz9ceeU",
  "key24": "2FGwzskGE4jP9qb62UFKvtmyR42b6Vebfr2MzzZXRrZTgXx3iC9NtrvFGM9aKQRzT7vXBmB56Bd75xoFLbSMcL9T"
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
