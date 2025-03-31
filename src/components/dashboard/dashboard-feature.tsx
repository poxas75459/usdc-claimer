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
    "5u9Zzyoqfyk8TbVXbaQ8AqQ5gxWnS38UhEQGMe5766vxdLbURjKpydi2ohy8e6BsBhQuuNJGBAV1kAnT6EQLh3qG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tyAWwdXUPXUrMCSxc8EFnAsnrUKcHbHuWMEsu6AuFuQJ5ZhhWnh6gZX6fC6bjRD5wQNk4n4Ut44JBVoerAhx1L4",
  "key1": "2nUf1C8iErwXMDPDX24XBEJGs4Pgob5GgYVwPazTwLeLWeaFKLMStXpQo74UnWp7h3rvEHZpRxAcj8gL7xTe8TuY",
  "key2": "65T3Nh6VmjSJPjdP6gfFxYLkc6fj4E5oKPWUMonJKneeBK7H2zZTiSrsNkW9vNULkfqHTwcMFQtVcQArFe3YBTsd",
  "key3": "4QVyQ7pQX3bfa8eAtaxYFBEajsKEk87u3i5C8ajfsQeX2kP1ySyEvAMjd6JRmAPWJpYShnrLxmLf3Gt2cCA1j6Ag",
  "key4": "42naDjMhuifcyv3seRzx4uoCcovXd2TZBuw4TqyAmgjajWnm5RRjvRbzQzSQ9iAwf1EYRRso7sY88P6HiysMRyqT",
  "key5": "2G6ECoNSjK1UbmxqUByQS5qGfN82ZybJR9hBmSDYfF1LwT3ndFrRm15t3ketiKEcAv2DzH9cCkkffa8XVEuN6RkJ",
  "key6": "4ZaaJbnPTjrf3GAmNZroAdZKDEEz5ErRsL7athHHb8o228NwxRjCtziCZ2Efwz7UDfqmmLf41tjjjFSN5rTWWQvS",
  "key7": "3HTnqvYqhMoABFzAzX3PEsN8YfNus4gvGXT1F5KnyVoytTz6ARZBgWwUmCyDZ5eQsNUGCQkZNMsArkvBwmsSd6ek",
  "key8": "3VQTPBaGnFctoTKmgtBSBXF96jiSCaY7jZgH4vXJgY69eHVY2RXvvCjWAgrokv2xhMrcnUZqeKKrxxpF3uVdvPLq",
  "key9": "4NVsAMZjy5GyNNHBQJt9GDWc3GM5tJA9Lg5dg673T8tP45c2WuuMszjKQ7ss6cZbJmT1bEJJxUeyYkRCxxV9sqSC",
  "key10": "5Y5WZifcfgqiWtiiutntsycqwSCC4xjMBWQh9uqedvVk8byoWy2iozSrJ9tC6V5mcUUcyQLoF6z7tU4gEnBz3xrf",
  "key11": "3rYKmqwk2rjmuz9Fnw5mQHciV15GaJ2xBBfKiNSMHT3zd8AWaBJrmodSASphqL37o43XysPDgHZsafBGmX1FSxEC",
  "key12": "3QVtvg2DyTgqSvQXtncRmUKhxYXrbXyCYQr27zFM4MiyYN7CYbzNQj3iFn1Tj1qDWsR917Nz9BnHSKEgo7KhNPD",
  "key13": "5bPTop69oNfygVZjnXt9uC6D2ESebzDRrqiRHmjPnzHZAioBgSXLKwCNKcBgDougUZ8Vk1qFv92u6Q81i6KhU4XX",
  "key14": "p3E4sPKscTN8XAamGaroDvPZdUABSYjUwHe1p3tyS9Aqook65XzBH1MTZhhgMc9dXq5dZYWH9j613Kr2h7LENpZ",
  "key15": "2gJHenoA1KdcMTYQBoABVCvrjhFGVr7u35Sh3L2eaSzp2VDUAU6MC9sMV9ffmrSAuRTgzFECp8xWzuxCzMPHMTMU",
  "key16": "3ZDg7UZjMmbV3wwqvdPiSdkGWmYZCEwx8hAi59ENhFqqpTmLL7TeYALUWio48suAQbPNzy54VTRMC2sRcca73MbP",
  "key17": "2ptunhf2y29eHAkGZVrZseF3nRZq6XqYA4xrrMqD2gm3yqbdnNGfTMc5M9zEErnvW83Wb9PdWjHddq3oVMWm54dx",
  "key18": "MvKhWVKraC6AeiviC7gnFQt6CKow2VeSQMVTNUrxw2Hh11hUL27kFRXwpMdtZ3vzfveqW3tN58vZnwfRBpc2e6d",
  "key19": "3UiYnLrTFk7Ap7pPoxarxneogZvqsvuhfGNa9vDnH8hg8xzFF5sUmkNjUXWnfWqxxZqfr287tkmC2DxHo6YJWrDY",
  "key20": "2guZ6PdJxLjfXYXkAAX388CkpbbHws218X3aWHWYqtKKJfPeGZs8ox4vNYqh3XdyEMA75tYEE7nxF3VQVpdvPYbD",
  "key21": "2TFo4Z2LTxKyT8h6AQsoD11LiHDNoF1pQfUSNUV338L9cjXcZ9Qsj4VpoHR6oVNGBk94nGUEdvMJzWBzvbcLooJX",
  "key22": "43QdfmGqGzicKG2nMVfzub2US9SQNKrWwp5RspFFWpkqUV7WnGQaa2grzRNDVMhP9WLUGqH56Y3z9Jvvmn98Gdn3",
  "key23": "23GdPpXdV5m5uVJC8ddhF7a3wXYizNWce3hfdi9v8aMjmt9q1pEpwe2d6n5VxPFqd3bQV2uLCiuCmQrrZR5McrPR",
  "key24": "3b9XcXbtoB56NHFvGYTWqRow6cEujgWuaYodNmk6UuUmgWtFNJ1tpBJfdx1PBescKC1kyv6G2LH566tzrAi1P6a",
  "key25": "5fvSpZxgFDQEm95eQnvVMe3vKp8CPrFF13eaQaW3tE5a4nhyC9uzwxL1W1f2uqavcWPtJswJpgagrznAQJjUtqc1",
  "key26": "4B9eryUXXdF6tCSB8HpaQmGd6KzKcd8peV7B4qppgDASp9y9rCeYG9WNHZuXrdMCG7e9qGF4fhnFpLCT5SdnLnH8",
  "key27": "4ToZJC398ub5s6TM5fsYYVA7vaHGyFkyC78WqKhFBXvgyqCAkFGuMBDk66JsRHY9eiL5pr4bUdFrkT3aEZGCi57V",
  "key28": "2zC1ybptGrR9JNVUUUvTZ5HsazNp9srTYVCtrhZuCXRj4cmoyHoGsmrBFVhsZ6LpNP2aZGYLfAA56W3n8SmGSayo",
  "key29": "3dADATZTBRsU8Z6HWivvMHtEhsV7DU1a8BbuFAMSKVwMBhJERpaYZgHjqGauH84MiB375xmoKRgAL11ApgcUNDX",
  "key30": "5kjrehGFHeMbdKQYficMyuSKXBiP1h9izTc1LtYQxBuJVsMehcrWWunaTbzS9xoLQMSGceZREPstRstpZRJxDwEY",
  "key31": "5SaYS8azxLjiP4VihzMNrGxUqGbzKGaBC3NumVNY5QJWSZpmDnRYJqqcZvVJWeteehUC7oxR7BVTdCB8gfTyoCvC",
  "key32": "4Pvh5mBogMUqaHqhr5WAPcbmz9CvfvrTQx8LaRvd612Eahr3KohkzhzG2yUk4jziBWj1xrGuPB4E7n2enEjBqeg",
  "key33": "2YXwA7UY79Ex9LYhkWEjXB5pF7nQZsHfhyy8ZKNorWxxXp7toXdMEtCj83pCe9nTNYJ9scrGaMu1aQA2ToU6Cze7",
  "key34": "5Lyuqhrjw4dMwjDXSkm25YvZ1VpggzesN9ymnGVpSCN4DgJLqRGMd2UViaR1rQjvoRZx9MaXHTajrnBot58aqnPw",
  "key35": "g4GB7fwQt3aYRvmaNSJgBx9Ty2D77aWyJeL2UGrvNyPUeRWM8SJfe3ewjKR81Y5rRKkMhoz3MV49fNdNRTSNMqf",
  "key36": "5qYjSG1eqFcLhCbpffsvHfKQ735koHeGax2ToVB1UaGF1utvYD4cRPeYKGnmomWU3U6NEc4vXN8pfo9kEp83Awtv",
  "key37": "PTA11K9BxFvLSwvZZw8jVgGyKhBZ5tgxuHxbLbZ6Ah78j2dLTjhcwBUjnGM7x4md2rdN2gmqnYtWw6UfnuLQsjj",
  "key38": "3fMr4XpdkWgpK6dRWo5DzDQPHWd3ysGvgHE2dmNyW7N6tUBsVRG6Z795KGRSXEiTmATQMSSWj1CY89WjhPGPBNyL",
  "key39": "5SCvkZmMtCfM2T6Tge5UYZLCwPohRuzUFVGYx9664kddivcd3tVmm8sXWmaVK4hK17PTUs8vf6YabXDmzFhckwYq",
  "key40": "66fo9JpPMnZ67JsyZsnkNvoRn7zPSr7Kko5rz39KMRkvKwkQ3q9Q6GZa3dej5tfTQRDs9dQCNaWUnikYyJS8oNG6"
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
