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
    "5ZRrDYZn8Cu5F8hQeoVj7UVecNWRpQoSabriTXe4Fbx13ueToYVgbqQCFpZurzU3mrdmUSKbWjnQ5oT7mKBRxrsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HKy2ZGaToiiGbNrmiFUwMh5f5AAvPXhXssN9k51Vw5c2A7nC245NTHJqz89CWVVm2HY78DwduDru7jRmvhHFWN3",
  "key1": "3ng8izALAqKKxvZc6ZdnVCHwSxHFF7g8s1VJedapZFWsCjGpLEGxbv7xZbLtYQ85P3g8YtGYZpoxphqib4YBFFbs",
  "key2": "xaScqXcXC2BhHZPCxYnUtNDbC4asHUDu9VaHMPNxZPW9EvB2WHUZfBu1WCssFvdYSU9GECDJ4TDuHDxkVYGYxMX",
  "key3": "3zVezk1FpqV31D7bPR4veKJSrp2MpGmLozi7xGuJWL9CdzttPq2LcLKj4JtPMQPQL29dvrBomgWkYTRoMQFq6Jue",
  "key4": "M6R3FPDkvN3UPaEVzwkRc7jsdox8t1P4ZHnxZKbdC1kFMGHEbEYwBjm5EMf8oryKKa8k4WCBqRSn621yGy47E1b",
  "key5": "34hC9eU9hVxWj3JtaR59Zpr8etdQML5vUYnphoYy85G6ZmBn69nvDJ7qSTNyDCZeqiCnD3ustyrphwLzDcFocVVv",
  "key6": "3W4wbqkqAjjx718Kz3M5KCcS7AKmaASp72tGLxZQmQedMDu8S3EUpZGhVGr9XwfsZjMXvMhnTVjPYxVyFFH48sGp",
  "key7": "5WFnxK19CsSJZQZDeA4w9Kxewqky1GhA92NSSi7wDCAB5VTuZcHvJcnsxg79A5iFmaZybUx1maCSAy68u8VFxurd",
  "key8": "3cc5h8cpzQX8mWmam9Ed1FoarQStgQKvA3pzKYNHzJcerKZAMW3FgnCEP7ckAkd6ipuJx8JpCV4dQsrw4z84zP9s",
  "key9": "4x4VUwGjz1dmeC9vFXcV9GaGx24U8MKFaiz77vShUVBiJ6cUXuwiYqeuWa5GhZf7PWHS33PGjh9j66R89MqDTnHR",
  "key10": "oHhykC9cb4BciZMvBFJCLMZGBo2GmkrxVKD4nYMbGd834JmMjG1JomUqKizDS3KGU4Jkpzi9RMpGYBpVxqPjXJX",
  "key11": "3BPVXY4BDXmTTb8vXNB9UwmDzz7VUxq7K9jg9svwPdbARLyivAn44NKbUa9k9rDX4ECCcsUCMoo6S78mumH3kZFV",
  "key12": "yjGxWi3Pp3QrL1WWJodeZx1zYaZPpZfXXjVbpaZUVr4JSeHUDpo1Wj8B5gUTr9eA7uYYCGudVqKv6sw7YUXqvkM",
  "key13": "4SYzU3oRYRDkR521qrGYjLG8fPvqELWUpuGjR1Zz7DHkP6Mvfq3eaRj1ksPycBeaU7263Qm2TnQ6xBmSVY1gfJSc",
  "key14": "5aYwS621HmY5j9vet8crKB6YPukPuFWt6g6grqmVty8YjhXD64UnM7Usk7T5pXhTEMYiwaxgZTaBK5UzVZuwSbVo",
  "key15": "4mFqaNEk3au3HaRAx4KNVRT8F4KgmB5Yu8sfy5aB7KKmhuj3SP9GWYtWtav9vcjvuHc43pAetnDEWaJ6Jhr9Dfdt",
  "key16": "33DABpLZVh69UF5tvAqXrsoroEr5ir2zRc1ff1KFDVXVW57Ed8GGvkMvUL84zGroyji514fQcJwT9A96Z74Y3TAj",
  "key17": "2dZEVY38TSciRVoZwVFzRVfo8yee4UhzUMR66vvrcekegVAsDGgsTtfZQDNoDtQo1yMrrGJuz3XXoMUY2rHeGG7W",
  "key18": "66DYyonFCJJQt1U2f4SjMNXNfBK6oz1u6JoBNDSGNFKPYCY1F2X6JCPfaMwmX1dbTbamQdSSvyHiqkXqwidvY523",
  "key19": "2kkBJagcNMD4vgw7BRrsA3poyfNFXqkifr4ieu9NJ4N8tWbzfmvwuwZBowhW4ow7bkg1QbEqX5fo7HMuaX9ZdDLj",
  "key20": "35HZtwMCCMkPtm3fKyCxiFtUKsyFhv1vzjS6VpqpTJwCaNBorirszgdaLFe9ngfG6rXBvi2fbkhvKi82f9zCTbqL",
  "key21": "SEWV8oTCZ1h9afAFEbwEKXYKmZB2p8Ay6zKe9CTgednFMkGm78zbyvnAw2HnDUDdXNRzyDzZ8GGp3x4Qt3SDDJC",
  "key22": "9deonqAaNWvJmXTAP7A2bj5EoNhfeJq88gk529siqWFL4RMeQ4mAASRBCEYowRwwrBaYYpneQFttesZFwuXU63b",
  "key23": "x19PWtc3n1B2NurwpRHNBY4VVoCxXJ3g7zoDGgjx6bDmCZBmdyzr57TGfztAeLqQ6AeMxUeDZ4VUDng52Vugc8A",
  "key24": "2moU51gCEggeCHfv9EfZf5ryHcibqzkgckpVTMz6yYaiTnrzhKBnTv4PUiJd2Kwa6vFuQ7DkGt5rneAnJirTrvBo",
  "key25": "44zutg2xBztnXgmqHJoHU6BcWxHnVtzHmoN7X1KcxZckaosjmP2HVAYYVXdsZwAp9qi77WvBwwNp4moEGi5w3cqa",
  "key26": "2M2MKhEwhkDRoCGf785f9gDEoqzKbykr616HYAP2HEycoH3DqtDAd4j5gqTcekS7evfZZtA5Kz2aBKdcbbane34F",
  "key27": "3i3YgNgsAgtrG5G96Q7VXhYBAA1fR4gjJJXYcmZbcezKsY6EC5Ag2wJhXkM458ddotL4KvGe961HMqkiMnUq4689",
  "key28": "3DpbHj4cazJ9tMPzSH4RRD7JA1gfm7YW92m8XeGuLip55YEJTNjGHkEuKb9k7kM9b8p6cpzUZPUWEMkFEvPaQTgC",
  "key29": "udPffa8YLDKGFoe8FpBb1s3LBGkfWczYcyiom4kGanKKRxpiEiwE6aDma4iyYrK6feMf3yRPTgiUpsCAUbJrLUa",
  "key30": "iE6ZVrNiGVHyWgcHaYo2eVJEJvbufyNz9kzAVZgryB5Fr5m49CgxW8dhkpnZy8nfT8kWU5YuCnq61VaZ6Y5hcKj",
  "key31": "2S5vQCdZ4BeYBzCzTdKY4vWJSqQ72xiE281f5brn9uLyU9vwq7Eg4nEmWjAhREzQyHrP6hW5E6ee61yYA5rX1kLb",
  "key32": "4EgsRkFMS1RZBYCSmBCzRM3UVkFe6qVX66FhcFPVw1foQPnBYKGk7RUxudhMV8wo93fWfot8ZXTuJfzZJLfYC29w",
  "key33": "41fGGP177aQ4zhhrJn4JPyTjfoMUP1cvz5USVuLgzpSwprW9NGhJd8moPaB6WngzzEN5J1K2jnsMtkhuBFYiz17d",
  "key34": "2Xnd2AuPRKVqghDstKvzZRgh2jHVBys8pgHRUVDdo8hScQGZNiTx8c6sps8wCaKBJF7bZoM384tTaKi5qW76jG9v",
  "key35": "3JDKLj8YXfQRcDVq9wGsmegKAwdnuws88fi8onQ9az45z4he7by3qoZ6zi4nDFTceCjdV611eehXKFn9HQQw8Vxh",
  "key36": "4ahLbDKTjWdwBv9Ss6ztgiLUjSL3tSrmXzJWkc9hQnJtrChGEjaTW24wiVX4VJS31Wt4ZmGnnkqsrS5KUY8ykGTz",
  "key37": "5iuHKB3A3ocFz7wW6tdS8gs97VH2ugMakmabXK3fvE9rBfRANPKvpvGWrpxHqXkxeexcZ3ggyf5BNE8TXvYWBLSF",
  "key38": "UVJF7n14CTuBJAkPwL2Vgdot7jxy8pfWTr1T84KdARRcXGBw4Tik86NWt4DyigTjmKjFBbxwaa3ZPmgbtrCvsge",
  "key39": "61eyXTd8DbjQHys3aDgvHNoLikXUA3jMUCDkewS3eY43ZvBzcmDZYfZMoD356QD6Hoe8HL3vdjKSrbwBJAUjuFGA",
  "key40": "5G6aaQsM91ucGgpP3H93T1yjztVQt5gtiRuBKENhFRXvoYK4sXPoYKmyUHhpwGgYwEL5jDj3J9PJfSg6MuJmQAXp",
  "key41": "5ZeWpoynNvhRFiPeZAYsTJwEBW2rbjpWeGHRmp252j2A1BYhAgG3yU5Nm5VLvXUbgfj4mh4F5imAkpYZM1SJM7SM"
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
