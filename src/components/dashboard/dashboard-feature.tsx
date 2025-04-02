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
    "q1XjsYpRXJQcCUyaDUqFDtdNHCkoLkAc29NbtGnX7FvrUfyyU5X6Nh2aPxUikbVaVwjGd3QWUUfzVaeMMmxrNTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KNaWSkARS9GcY5tWg9k1Z6GmmHmGLxPJeWe4ABDdV6yi8qr6ug381o9D39CJ98AyG8KdJGqv8FxZ6UJ3D33TF3G",
  "key1": "K3pqUWFF1qeVi9ZPyxdBgayvMrBBj2bWsfk2BayWPWAfRUePVnM4cZy74EnLihB2h9CHwMrXJihobi8SwC7D3xK",
  "key2": "4hJVT7vUmnKr399zUCaR6W5gCaNpSYQX7KN1yNtcCmwdmsM95jNtgwuG8pqHwxJkj2mtFGBL4qY7Nd3KHQaAdAxh",
  "key3": "VPYZUQ3Pm9K8Y2wz88cfRP2ec3GHM2WT3r7V1wj3d79boCEi5YD6Wwr9y7of1ikFRXTLBRpfX8dU9tG2YKLN1Ej",
  "key4": "5B71afU8LveqqYzEAj6DfVNbyLhdDYu26rD1Biexv67FBVwcCuDLfqYjmubRy43idWBa2uS9fzBFkcCThgQ2uyk4",
  "key5": "PGWnGUomxGTkCcTjHb2cYMfVPKYPnYfhoobSQ8sJ9XrTNYKyBLiXdeEWbN1Q9zB1AAy8fwWQfMEK2cnsDkAsvbB",
  "key6": "Wm2U2fWJ6Wf9shGG1vTpTN5EAzkNeVZgNFZzvx9x6EnkgDoHu6YZvApAPtScsiWwMjs759EdB7Ji3ZKB1y7j5ou",
  "key7": "uHkSDRPo9fwYFrEzSqwA7CvXbRzR9satiyhsV42ZnpkB8gMyWNzM3tK6XG3tupekTTmGNgCpj74NEC2Fh9nLB4t",
  "key8": "2xZKS2UKYoMmPzpsvHTXimA4tagkz5w6tD3yYTxZhEzfwC4RSTB9E5ZXGmWXdYrsd6VK44WVpGBhDnsZAS1nZesg",
  "key9": "4MUcj9vQpCApscwCscyyfCWgWEgxS7bhCMXCVbrkApLtJjVmUL9nJhU9hWqqsq6B5MwgmgP8FJUfpyVHPUZ4G9Pi",
  "key10": "5q9DpSVpxKMynb64yJJpX6mrUNAYjaza8HXYzbZY4NE5kjqUGotTxc99JqkiLPMxZcJuaC9PcuN449TdiQE7Jt6E",
  "key11": "3aWpkMmEs3TVkhh64GmRYheU3QKdecjW3Wz2Th9HJbiy8QhpzYVekcS1h6uZYM4187yHnqSoJwGf1PN43PWkkZvc",
  "key12": "2Vz41Fkkxt5VL4iN5gyfBBQajXWdBvTKZbDyoseR55h7eM5dREjb5yLLkaRbWhJSvyef1JkkuyV7qhWzARDu4UEa",
  "key13": "4cWGJSUQWWQELxKFf2ytdiKjCMsgS7UqmYXFBJNwcbLmKC9r12DCTDdmYeDocCy7AQFS38Pct9fsYMZYXZsXw2Gy",
  "key14": "41HsVRZC3g3myp3u62y7RYgq2LhFaGhuxjbBgDN1ztPu6YNkmeFvuDJuSY6Fr1GdNo1xm1WZ52aEC7v5qwnnSp79",
  "key15": "3EtWgPYzngCHCAPsb7MNwGcNKT3ku6SCk8eYpTMk1CTpH2mCSfr6AX3Dp7LK2qbLL9EiiQvoaAAYDkEC3MTgQnXK",
  "key16": "2czmoEyC1pSnFAaSbas6jPsEHBF5BVkWbxk6TAAT8R2xuQh5ELsdVaESyxrU2daRugaYravsgKjnmWiASKjX4sBC",
  "key17": "hvzBQS1MWFV7bXeHJf8zGnoyYqxe7fWKfn8CJmcdBHiNDrQjGbtNot3yssMk7BcP56DdK4yDW5wwCyotL5zfFNv",
  "key18": "5rqnyRVmT8dxJSw8ZgmqXJxgNC5sD4gaZnLgtDKHDYudPhmuB4R3g7hv17jfaTU8Wm4kMgk4kPBMsc11f6ztTkNX",
  "key19": "3mQCQ7KegGZDrebhg5fvEBggWHgEMZYimRJXihSKADRX7ST6HjQfR8b3Fa8H2AHHJNdVfE7T1BbrJoN87XyGLorj",
  "key20": "5s4PQbC8UhUEqkqejxe2hUoZDmKNH3SPDfuDECcCHr33PUUPJCXvAC5MVcwoAcFY7ab5AyH2d4gUnpKfy1VEcqb4",
  "key21": "uGotpTg3Z9jjK49NYdyf2e9e9uzQttn7cQ3wdRaRx3jUBAYEvmUPwUosvab6fvnH2Tg91h1BsdCZC9TgJZ1T63Y",
  "key22": "2XZyH8RhF6RGBRzVXEonRsCCTSssq4fccA97aYzTLZNu1J767VaRnNw8t1DXwTj3K5koCZmyn3M1hraJZKGeWsw1",
  "key23": "5Bc1yPeMruvx6TZ2aoK99LdKA3ugxX2U7QvkoFbUPAzj75NmS4Z2sixQ5gux1JVMWoeVkQxszGLjikaMXqQuvhN6",
  "key24": "4WpKB287EzLgs124W4i9xFSMfPvz7PiuEN76aX58g55F6acf8fZuG3GCkRFuNYB7tR32uNVBMEDq2j7VQdXGD4WL",
  "key25": "2iqRXRpmmj2PEYCQ1uCFzwifgL2imirhdqi9ybowECEREbjfqmGiMvWuj8g1ZHvh7RR6xaoM5gXNMfXmgvhP9Mdh",
  "key26": "5VsT8rdjBHD8U24AfVs8FKGXTbehsFzivf7QDHqoM8a8dgjWmWXk75FgZYUsKAfRWuE7zDBSQHn5ZbL3SS1rkEmg",
  "key27": "5XVe7CRgcL1Sm2CTxVwYEi1BAGYVvXmhM86XfWSw5ocuJRjq8oDJAPPPFtC43wL9gUaCp4QomBSq6B1ay43XyxFT",
  "key28": "4tHSM32momyezxE5Ftwwck21ufSJZE6cD2cpLdTa47nfjTx3qw3fhrXPGk4bgyGjGeSvxkzeqtpwsGzMrz2AbJQ6",
  "key29": "4CdkfKmekpUwcz84A71xcZyaWbTto1JAcVwiAPkb9nGcAjyXXgfKyLEeZ4nzbmf7Cg7PUpYxRo6AcuZRxRhwWc5g",
  "key30": "5WsV6dK5F3prZJNpdG7tKjgdeRWCr8YvtZVibaHQ679AksFrTpTVnvPYkUgPXgY2WBUd2HuZRrdE2CZpcnRyEBWf",
  "key31": "4y1SKJ8U4rywAMEbZyx6Dtr6Po2CQHoDU5fVGDAsfJKAAkmv8c3DfQqJ2cnCaC31erJc66UdhbhRzhisL7CgUH2y",
  "key32": "5bjws65btZrgKwVs3deEJnm9f8SXTnheq3rbmKQBe6xKW96LcBgvxAihMbMB1gft6gkPYeH252Z6koHPYfcuCmDm",
  "key33": "2vUzPMh2pqSyvpeFEY3yimC2NiWevkuQCxLKYxa2o4Gyw1XMkfBHvNEsqxRFhszXrumQ986aJ7RxicNP5xVm769B"
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
