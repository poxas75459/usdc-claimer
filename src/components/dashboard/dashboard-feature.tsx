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
    "39hbThrWsHXGXadA9boYhxLX9VSPhP1NaPXT8keZdBTddSbscHeyzWV5PVDNpd9YXJgBTLeVaCZSbmsWMwPmxUGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CTEGjfUcZMhx8grLy9bk7wz5Gm3jPiMedhCCSSAZ1gRA3L8KdBRxjthJLmJsLjqc1UevgJLe15Jnt5nHKSNqnS9",
  "key1": "3hbE5WfEnBASx1Gup3PDiPiH1ettWsdnFX2kS8wQ8n6oM5dzVgPFtDd9y6nKCzoei25ctnS1CzhkSSh7Bwrenzwc",
  "key2": "oaAWkyXSPCBYQJV8tGCkrjRG8s4stNjwDv4yqrzbBiFHqUmj5r7HBDtUb1B21K2wWB1EcjjacYyemUmxnf8gQG7",
  "key3": "64Ev6zk6NLqj3UKBMe3E2i5VkLtexFEqpfbh9EYbhfiCsBU21Un8CDjHzdSZiHoQ69Nk8hnWkEtRNPkYWTBdQ6FW",
  "key4": "31r9rcesxabXB5F6CCJNKzQzcFpvxwrbDpAbnpSVv7sXabz7LezUDsHD6d6gyUhEQbAUECyF19ENUqmg6zPzWzFQ",
  "key5": "3wMdmjjM8p4ieZ2tQPqBpGoR1e3rTorGyr823vTweimzmBvrQKky2AdTrCSbMLu3wKP2fGftHDrfMyrYoTTX1dTU",
  "key6": "anEwGfdvcNUwEh47Xk1YQuksbKWy4B3iYPZBqLj43GhbUZGZQ6GvSW95gp2ZBdmDMHo97Zx2dd5s9oWehDb8G7v",
  "key7": "4T8cCLjDz2dFLfNTSVXJcebnRBULrafsodDdhm2kjrVJ8SRNwiNiP2pg8QQErho7yo5s1z3p2nvM4EjTiuHjAgxr",
  "key8": "4Kara2rJ6R9cXBoaWr15H5zUc41sU8Vtmc8chrYFJe6TZZzoKiw6zRFdgEHAqyWs5Xbi4ewMNKwb7KG8Vqf9kGaY",
  "key9": "kx5xCbHYx1jzSGXCRsFJFdt3Ud6RbCuYKbnpYQogRxooqn6wGvdzpA99jGow4po5XtjpaiDD3hDeLjKeMYir5qr",
  "key10": "5LpjiRgXbtTurrHigKp7YuPwXs5YEwWyWxcWa9QpK3Z6HrFq4Vq6gUcmsYJbRwdreNcGWfPQDkocEUdBBRueLL3p",
  "key11": "61LXwWevRppPrTKEw6i9ccN7tnwZLtxifxMbdA7nG4ECo1RYG1Y1HEE1PxziCQFNHgmgt9iuv2M3RvyDHpAkbmnK",
  "key12": "4K2gxMDsLCJQyt6sepjj3gyp6tvq2jFZQmd8BuiGKzqdMZycUb5amk6TGtR7RKNpNvy9h4FyN8cAWf9TTHc5hcpP",
  "key13": "5mBywtvjwEw6dDD8i3EWbsfsssnsexioGjK7GMqv5WGK5yD4xXaJKeZiP1spYJqgVkhvca1ZJ3QtpAMZGcNTDqtw",
  "key14": "49td5n6bQh9iFuLoJ4faVC1dfoigCajcE4bQGGYJGGtWYpht2cEYKFSKtXyAGrCSfjYiNLaVXQFsHfTWDkFBBiyY",
  "key15": "28QLXktFyHmJFos4PusU9akXByYRkCSymT356HrQugVRTyZBDnPodDeVW1Q6DzXdp9RHmTxhMydse4d8YoeUU5Em",
  "key16": "daTZtaLXe4sRJt2jtYTFsKAHu8NiP4a7tsUuyws7mn8qURc1DZYYQwrzMeUj41D6PzmTYEJb1zf6VK8C4MY8ct2",
  "key17": "ZuxS1tGycTteqABfP9mdX4Ur1Z2s4yVBzeGM1RM4RsG6fL14ry2pM5BnW1z31P7UAvgEbmjBTWPScXa6RWFC8qP",
  "key18": "3xfUEp8xeVgipZZqfkCyJ2d5Ve1AjfERnXuT97Zw5JfThZPjJYhbv588gU7C9QXGQ8JCxcsabc2CEPf9m8AvLTXq",
  "key19": "wL6eZxZTRhyAFivRMrNoKM71ZwdJfU3MJMZW6AQNJm8aRbyvbjDFs14jxwn3QiwwPQveonFzzfCa4zLnLu1BeTc",
  "key20": "3xdQwCxcaBk1tkD7cxUsWhQgrBimyqXXoLCtJt7gf3jbCmwS5tKC5GvA48GcBJA3wXgU24MeDCw5gAms96HL1Ebj",
  "key21": "22d5Ko5BvyLtjHRpV6nfwM5L8NLbTje162TuJaUHWxvYmiE4P7FTp3rTx7AqCkffKda6PjiRETpYv1n2tUh4dnch",
  "key22": "3HWwuaVS9jwNN79svzb8Nd58qJ7MLw1Xyqi3nyxFt7ECKfohcx48cFh7t4RZYgTWCmiMUFMtuQaXSiPLbP6MZGqG",
  "key23": "2Kt5xhv6hycBtsmSBnFF8q7Mcs4Pa4F1XGx79oK2a2H8A1d8RfDC5EafHGcjp73fqyCuz2UfAM9munGnweVtFi5h",
  "key24": "EmouS3VFZdQF7357VwADdqeEVYnJaHPeMJQgzu3ehzYhwqnPQ6ZudiaxGrYs32xPJ8F2SUuu1nzfsybMRy3huL8",
  "key25": "61LWjLR9YqtGfjXwZK4PsN1GcqJ1m8oUcgEKJi4rk7QSa7tF8qeHj4PaAJgY7KK3GDcsj1fGxzvTWkHhsuewBggA",
  "key26": "Ui3n1RdZmoZfuWjNvo22nnv6cei9r8vAXaFMAjA45iVRCvmzLbEFfnW3YwQTaAETdYqnqESkFUj4ibwfuPfkv4i",
  "key27": "3DNd9mdGShwPKLzhuDSCXCinWe18Jx9XKsSPQgqp5hDpqsN9QGaVSHYngdvxpx8ckQ9EzxYdef92yxuQyYWpvbJd",
  "key28": "5BrDcQVhc685HDanKgTPPQQeS4bjA6izAULzYgTY5aBpwUrMZUKMStFuh2MY1ZZTXN1N6ZyM3R5ppiYP286HRxU7",
  "key29": "2nFwSju6uqzy5xGjzDh6L6gJ2zeZE5o1ABrSxUwWpYcNhhLrTUVtEUXd1LCeH8WwSPgvYcasgiJjUmwYCe8SGqXR",
  "key30": "54Hx99xGVCWFFZLRPkYF3eHb1RYV1p7pXVSY8wtNowzMHZexug3BJZKZxzoLVG2ZpYa77VuhbQEYCk3LPC7nRzBv"
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
