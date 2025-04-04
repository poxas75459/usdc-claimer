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
    "47tq1MyRYBnkaraybQWNRYakjjeTSxM6skPJ4uUKxiEhMiKmXWksXgwXawECi7v1DRtN27n4HVQzusuT3Sxz1d9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MXjKmFNezGY47dHFPrzXhVD6LS8XiV66o1fxKoeCsrx4RM7PaJe3AhAfzHcwZfPe2wSNvrhn2ewt6SQvwkKiTRh",
  "key1": "4o1BTzwukRZobeq3NoV9E4ycxPNkHj9firKcTw7N8SdZWuLW7gg3HRyMY4YpLv4fcmLGrMFkEuqu6eVSFpYenBdn",
  "key2": "38G6AqoUsVoXiZuzKBfqLTSSRMBdKNvHfDYd5B5FunrhdbxpK2SGxnJLeUmDjbkJDPEYLGQ5vw8RTRuGSmkf24P4",
  "key3": "5SHdzu5hfsW44PVxxqdfwtCwTu56TSCfCaofffUocvPeZtwFmtU8kW1KKFqbEPfJYCNirRtXdjQb9W4WE6CiUFus",
  "key4": "2hELsvfarpH3kbP1nf5fyvk5Tfe59jVQZWWXUhLLSnnwbJFLw4XV4pwXxPpcM5BFuwEZnsjns7JpBK5QSsposKjz",
  "key5": "31kWTeMqou1V3i8F7UsCaNmBSWcfdVjy5Hafjk8wD6GTVJrafEqMCVMdqtF11NLhwR1wiAbUf5FVVTRUPHf2DJ2a",
  "key6": "2F9ERW65WkDtYodxSUHdaurYfusfy7KW6ZP1GLhfAqpXsznCaSidhTqFS6zAxXCsmn71uGZLpPCWioh65CfAUh3b",
  "key7": "j2SWxUWxLCKTNWMw6gvfdSnSQAJHXCcFJbDAQrNBVYzmq5J7ev8vKvCmCcoTVrDn58DLXsvdD5NJwM5Vzpyuur4",
  "key8": "5aeqMivC7SUe67wuR9CuWQibrCZgFq6f3MXDwVzM7wMQursM7HSQyiCNLpPcQx7i9bCUu6LVouK7Gi48Mm92wLHb",
  "key9": "2QoEkkYTzHRXYowzdHcGQB4yqbKyNsQFNpDhauXoD8C4pUF3G5yxXuKNerdmU4Adj8swvfSUtQHjFw4M2QjwGcxg",
  "key10": "2EfvB5TkbDidLWuJS4XCnvj2TsMtjzAVx2GLZeEt83K8Q63jutLYNHayFY1b1KWM7CpfxCQu7zGbFfP8jGkkR67H",
  "key11": "4BZ76DJCPkrnzwdXQxziSYyKRrwCvjfnhLpfJ8eJUsUq3ohRyZUD2QWVhdj23SGMA9beWCLggL1AgRQHW8tqKg1Q",
  "key12": "3et8kfSE6mLwdaevaTqoGPf6qVNcLnc713LeJHz4RHv14dx1zzYKXZJQ3WAxsydVic6Z1Bsbmm73t4XjQ6aMnKCi",
  "key13": "2ifAw7LG6i8kTcWXvNNQuT4pxzWtUyx8PhRrQQmakNnV5HVkLmzmDWXf7rZSvQRAwVLAJsRUTkmxwVrZ175iYAB6",
  "key14": "5b9Tj1jwtjYwNCg3TfbFX4LXswmAWm1bv29ghJudYk5w1c2RQSSNUdCfN5PVU5kB1j5fHMUzoa5YCyaTH5uQ9gYT",
  "key15": "5h8WD7JfdbER1RFtFHtVYvB9ftEfXu9HugBnUGZEifgBUoCFsZk1JjLJ7guhuizDoogtVQHHdctrDHowAPkicnvm",
  "key16": "5aNYkhJohhrBrhKN1syuej48RW9Ldh3AgJSaiArRkCRD6YLXoc9Ap3mFCYrwaRZzTNwrxB78XVLrQ2qvSQARWdgQ",
  "key17": "4WLaUjRmyBvdynNfwCpfDMC1z7C2wDqQJTHXRi6MbG63PdBqy9RKRbhXSWGEESqh7tj1X9DqLmswxPChr35isohF",
  "key18": "MjVWejSMtDjWwitwv91YibevatjnaDhHFVcxCYkEeDPHnFX3v763ue1U6bBZagXm7qwYc1JJjtubuLoDjVd6SA2",
  "key19": "zkTovHQpMeYMFaTz1CWXxc4od9R8v9CaPzewwQFoDZ1J3emnmaprAsHzxs82SyYPf372gCMqodH6q5HrXYBUGew",
  "key20": "8JqwLjdZwg2qqT7SoRtJxzHnAG1SpaYiQsEc3DhD6Ftzeb22xvc79Hfns5zewerCa8BqhZRoDMdBdpH1ffdkWL3",
  "key21": "5SAdvpCfMe8RTXwqsyG2rTTq9iDf9qR8vEwvAwfHMQrZDeo7he4BxTLAnXAYo5RjJKbrcHiMgLev5s8FZKbP7dRB",
  "key22": "4ivCK974HzYc9nsTeCs46LJbZhCJT9KvsGN1cg3E7fB7VVDnxqW9vURW9DQKncLKNjfjifXSrqBRJMkiiuN5bEqM",
  "key23": "2UvcmsBwHN3KM3iH2DmanvCtphet9QeecMmf1h33a1KJqG9VRJNe6ej9f7pUEvZNc3amzcGwmt7vM7y2zHAfyLTi",
  "key24": "5VDY5Uv89nKDC5WkdQ8VtZUnYwhjYXDs456bVACCbW16H97mhNeeFZAtSxMUzEy6NTbKBbLTNaK43jHd31FDL2HJ",
  "key25": "3mG1TzZ3H6jFowB3eBySYdkQN5HN8SZ4VHccSeVNJB93HeqGsQFp1wkSyNqaE1yrq3JCKaV2vy2Wv6FsbjYW7fGk",
  "key26": "3yPenVWiWZ6RprLwc8fXYsyc25JSXH7F4Zn2t2yso3QczPqak8vwm7ZNriLcUNY95eMFWZXGbC1JRZZUJF8vopjC",
  "key27": "axz7pn5JuH971FeqbRJvdzWYXdcz5qBwqM6WKjd2czNWPj8p5mLRt7SueLCKYxP7nJ2BHJ93Hnyjj3Aagcb9LT9",
  "key28": "4F2XMibjEQgJKnBnwa3RhavGzxmJwBokz6Azgoic1x38KmnyNpWFZCyKKKWbqeVLbSaDSBpPcCm3mY4TRf73j3wE",
  "key29": "5g49YuAXmvAKwPsFFQcXSMkYK6ZcTJWzsvUxzPPVQaSwrdv4y1SPHgAAGA5QbipULixZqF9Ti2A1xPjujqu9fwK7",
  "key30": "4nRJEUMhT4KchgMFWj5FUQ5g1LRZjHVxpAon2t6inmUzJ1oWvxXDcQdS7t4oKveCTv1KewxgUB7ywrhBrGvrnSog",
  "key31": "31yrZQazFaWLY8x5PNcGv1KHWRvvHJEWRisjZHkhR5kWdxNfqyQEyK6z2xFo1V9E3EJsmZN1AZUM54sGb3oGFiDS"
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
