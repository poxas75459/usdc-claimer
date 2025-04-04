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
    "2RnSaKL4Pjq3aX512XJxscrEdkRPkbU6XjWWjqzzmF7e7wfHUyvZLQsgsMoS9WWNzmk4oBUbMswJxrUSXJMYQMxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Q43Coz1CNxMCizzE6pkVcgErNvaP9bsUzo1zqH5ZkKzyPUxPDo8r2Bvcjz7vfdTzZy1b7wQnCpdkE9WxMtgqdT",
  "key1": "3QP88b1ebWBYvXD6zSH65TpV5PtdVVU32vojPGNWe5dopp4GEMHJWxwW4kadeHSoNC5FKB3gYr6AUEPTgSEWdEMo",
  "key2": "2gQt3kVGUmf23VxhtokxM1qiDn1kg3HX1EerzzY4RqngsYdZFmrb9D2ixnLHqJ2H4dx1rSL8mS2skD9T6Qa5McaX",
  "key3": "NsuNrjrFY2ij6WQPbXaH1z4tshp6aNgobzmfbuVAz3bLm6va8D6kWj67r2dHviaXqh6QDsyrBDYWWg5iv1CNPYP",
  "key4": "26xScqYGxXZBQwY1514m7iypYtKnreG4iUaFsVmsxKpoRDvajHvXEjCD9NKkBtt4uYvTyg34WDpw3S5Ezd4wpj67",
  "key5": "5GteqpWSXETw8BRGoDx8HULdYp3XgaPyDF5rWjCB15bta9jL6y1vr8zptsQaU1AJJHyZnmPuNieeC26xAwB93Tfz",
  "key6": "2GbixWVo7embgDMFe5o6CSPvUBHxVKy7kYXTB9tt9xeC8pQWEdEBiimiJbHcxgDk5Tff4JfhAmktm86KKshd6x9b",
  "key7": "2oi4X3Wq2AioYip19gcPo3HjRW9KaoHked5VzV5HzXBPMWD6sGX8arT74ZzTSL69wU7yRz7DTvzkfpL9q2AX4MRN",
  "key8": "5HQi6KvTGtZDj88HkHiDSuy4RojotNtiBz7vHjj3nWCjBKECRX97QAmnS3fWwawi69CTKyXgtVA3umL9SZGm5RAr",
  "key9": "3j3n1pvoXRduWSKAH36xoojbWLPQv1grK8KfWf7Q5pksMCLCXqvDu52KVp2QELqyP39HBU22YNecRgTRM21oHM5h",
  "key10": "9sSbDz51bV9MVAberoDJP7K2wacbFkmHs2Up1Bkht3d2XNJyUPpYgHRcFMUZLJdY99J9Gr2fXiZGUxua9VZSAZH",
  "key11": "35e3cpEvfkkhsRQKZSa2pq5qZ6oaAFppiAf6sSSrZVeUxEfNJs8WVqRNj3vGY821rMQTQVscuNPDPED4U3xGant8",
  "key12": "31TKskXj6My4rov2ihWyGLm6MJJsgmo1WBdy2wbAP3P4mdTsxQSJu3QuBuUYdv8bgifMghLYYSSjxt8wuwC2hEUr",
  "key13": "2jAcxCXmm88brBB3dp1fU7XZxmjgXTCj7Ke36kwV19Sv5h1eg9eyP1uUuyaXNJPejVJgoUTKiNUP95CXE1kz74qM",
  "key14": "3ahsLgHdzzodeuqQeqoDV8VdKBugW2EUmXvRJUmdX5Ax4TtbD1okPU6JWGzxYLKWtWZPtHgtkPLWhbmDWxQFU7Mf",
  "key15": "5MXLRYDMamLeHHZdLumixT6irFAzegELsDpDpwM4B7v8itpKAjjpByKdAdxCGFDFZGsXW7xfX1JqdyP8cFCALZ49",
  "key16": "2cJYjx7GFpjbDVShadYsmkKxFmr3B8BExVQPyRy9PF8xGqNVcoMbmoLa5BZACAziDyJixyUb1PbDd7q6wzA1DNFG",
  "key17": "5BhzKoFtxtjSV4wPW1BYUCiCwFeh4vNGHK7UrzdqutMEx3vMBB7tcY2QFNhfUqfwcypdsNPEMk7LCEk8iaMPWznV",
  "key18": "5iqk7ESFzHuaUAuuo9kY464q4W25caGB5aYwDYFiwB5ZZLzXs3ryA1BWPvmYuR6YsuUbHmER8UnBq6BBxvyfbxGj",
  "key19": "NkUCKAmbT64idS2Dbagk81Up7nFkCViZ3x8GLTcoatQYZn6diqfhjxGA8r2o2tfsFP2qMVcFt12jXh74DCcZmSJ",
  "key20": "5VmentsjEoTfpCJDv3JNBYac8CJCLxpWvi9iNvDMD31hgo6P6Ji93mBUEK8sURoXrspC6gP6yfhFyzwFxTwFVrYB",
  "key21": "2d39X3HyGzFFzqUYwo3uJqSC1cs1Lf6DXy4gjeGsA3QhyLZDK11Vae2FKYhVMV4rsXbiwESyPCbFyYdUGdAbVLpC",
  "key22": "2dvU8m8pfKjEPYvuJTNy3oetB3vEHvD8XTKYdmvJEn58P5mnCNrCh9wrpZGqTXdWtuWXPSBbMtA8hkPdWQ2zeFNJ",
  "key23": "5AaBsMjCbFm41nWRdyLiyPxSL5EzPKHfUNEKGVz6woKkung1F2Pq6B3u4vMh35bmSLinRjUepteAmH73TZFZm7qQ",
  "key24": "42YeXN3EFuypr9heyP8vQFVGzcWZYvaYbRhASScLKCopdUtDurwwjj3TTmgzsnfJsUQkrMEVSzqGGEa4cs7K9r9D",
  "key25": "49N5qdYopZHRJWDirqp2GqF5YxQcophJepnySdPDtza7Df7THJNpUfoSv32dLtrqdp17ywFG98qSPnqZMJtekhH",
  "key26": "2ERHpcmLCgfyhkrt8UU6yQGh4WJyTmDPMsPTu49JnSB4YZXrZQB58NZEyn9mNDp2652PsvzdqGqNkityYqr2r1jX",
  "key27": "3FbKCkWrd3e2YPvw6WWyFXBV7gefw3P8yUpwntPnkjwxNT4D63QhuV72qXCksnDU4XgsWghw7MVKpx7uCLdN1a6m",
  "key28": "eGqp9UJeY4Joe32Wg9tjjRV5HiyEXy7Qo5cvWCgYYeipaSuYwKgvthdffZoxf6WQz7tFEG7AxnQCNFxiL1TuEjA",
  "key29": "4uWtrah3ofgoVCeub9pFtJW9jcYivYz5P5uJs6ZK6gBauGkk2cPKhcKnjf9PvcXMucP3RTTzETkxkvwzC42ZSKsp",
  "key30": "59oyFXj3ciM8YcDYp3TSciUuiT9vpAJdqykttPkwBTCzWLFjGiHDPKEAWMAkWDwFzqq4dEiLTcfH8q2dByzjz6cv",
  "key31": "3p213DNZa4im3Rt3WBZxqkJmWS3hD7kvE77XcYcFM2hFJMtdztcvntfFLGVrtoCipHVK88XKHotTTisMhHRJSzzq",
  "key32": "66cX2v1dWVk1TrQcCaHxX4divTb981qSDEMrCQ9dZJdbGNbfnUKooicyERnc9qAgbRXgwjn7Htcp5tXQWzJkE7Xs",
  "key33": "5TAaAErjMHPr3wGVv1Y2GQ9WrbgFbgi33Wyi1Pb1ooKwwQeZLgmo4ymYN8dJFK1rnVTWVifA6DtKVcu2sSxPG4AL"
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
