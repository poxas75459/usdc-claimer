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
    "2egndyrkLjbTd6X2PzzAmWSrdmqDxrgacZ3Qf9Kat96Gy8VMF4zxuypEGSvMiMRzE4UMa4djvBKiTPp8fykF2ZtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xf57gugMQxf6ygKU4LyZJaxWUcNfeoF6GKxwwcXE2F5iqJ7NGgykLqXWDN3xP41gwd4rtoFNuGNauQw9pRUgc3k",
  "key1": "5uCQ479Zkwm3nezLjq51tJb5JUgoGSEoarWHhkYrfC1BDnxe6rLgwr2A1acASGkaFbaewWnvJ6aroGKyZUTd17C",
  "key2": "2LPVBrDjBSBVD5LQ5PCYkJ8bQ19kTvC4kcwNHsztknzRvjdWch7MXUxxzjmzPQmRqDTqS3pExULz4hVxNsA5pwm",
  "key3": "ikYJVtYbMSG7ZEhjp2uaEqxm9ADKcJuSyGyfziZujpbGFWgjFDfNHDvqQLUEhZkjx5s6rMY2pPm7aoqYPcpnHQX",
  "key4": "3EdVGNTBhnxXKNhnzpdx6SWTrQbJ5VkQisUZ4UiwTJqGmKBjNCMtUgQ6TRuH9zDjXYW7s344hqLP7zPTrYgG2MSu",
  "key5": "3m6LLHUhhkV9hcwndw6T482aH9FmfkVLzTsRUcMnSQxwLwB9YwH7QMkKPi4f5MVaMSy6w9qBUG3TWtyie5DsYdHv",
  "key6": "2byn6m8Dkj7QYc6HxSzSFUiRLX9wUEkKmJzfxecKKaARo9mEqcEeTURupuC6DWjmKvdyUZ5kMqCfRukw3o3jJtms",
  "key7": "24SJBCL2HwgiEb2br14YUKLsJDKf6xtkjPN8UybWktFjjqRT2moH43QQecAFrEhfdeQsGs9k3UoKYXqCDbnH1Q9j",
  "key8": "5ABFBAw51Gjdf5n9DBt89RBPETpw1YrJiXAQCqkcqLFDz1HoYUp8A8fPGsqVJc6XzbiCA6hXeBS7DXn1LaNWbu6w",
  "key9": "5x6LkNCMQYQyKhNZhAXCBGA17jpwWcaLsBx76EMXfMCrWdwfTEFeoJnSNjM1PcppbAsRpJwZYv14g73TBTeMLrzg",
  "key10": "3dkfapxCphRwPCZMQwD3FBmjkvZDZHpgPt73aX2QjewzLC6w1dL2azb7QuoKsxhcGrFHBqnv5nesJ4YFYGHmmrzY",
  "key11": "3n45rqBBhCQjxA2sWu1J28A7ohWfQRzB9m3Hr1RyExNUA8nbe2kKnNLP13dgfLyCKf5S7EjdVbqLfd8pyaujaHEB",
  "key12": "55bQdwnvTiWBwEUedAvHAc3p9yJLhiLnvaUEcYeQZFo5BES87EFex11U4xijPRZ4zhZRYFbTSfUfisLXmy7b3Mu3",
  "key13": "5k8nEsAS2PMR296Ub8swLSu8r6LxGrvsXtr3XupKt1eMkKBmfGenAjWpTURJCKC8f694QQuueXgFpA3bHB4mkd2Y",
  "key14": "4pL6VD4Pt2XuUmnNSPakcB1oVxxdqyJY9zFHukNCZ7gxp9C3ggE9RiwnuJ4TQh7DD7xhK2xyQ9SYD8BXC8Zdtk29",
  "key15": "2L6faPL3TpwFFQ4a7Sk6fXykgUS9SvaVVPXVrQD9GM577aYTs5SSRFr8MS6g9HrTW3QomihaCy3X11oFbCbUzQMB",
  "key16": "UCsgTth1BcT7yHh2LcQ9ByeVtuQwS4RvQferDHXTebhrdh4DjPq2BD9Wdq6UiBLvLmuQ3E47d8Fr6enUvsP8cqs",
  "key17": "2FJm1oUa8MrhSbG8PfbqiDT4rUoVJSDwP9kmFPU2Ar56xFZ187dKEuWbBhtwYL78ty6dUbWkwJh3B6153nSYYGqY",
  "key18": "4tyBYayWUojzWjt7wd5cty8ZF3agLWoMyVL5wUKBwTqVKrfqHGWdMqSQPCqjwYQu9n6UyzneVkVUm98qteFE78vq",
  "key19": "2HjbUDY7dJ6g76sbELYPTT5Mqe25twc8sDUWxsMmEVog2F96tpG6YZYY93g4ZXZUXzizhHbwMomZLb7YzXmEMVic",
  "key20": "33hLvkmEbGFkqqcw27Ft8SseHnQUDXsSeooUfSBMz25DRk4CX4eMkNkEifxaBniG94BtA792PQohwXWKVTyDy48W",
  "key21": "7rBb3Rx8aQXvsJAZ4r6HMktF7svGUF1uPEGEProDewppRP1VCoLQzvGzPDGm6nLCjz2AvYPLDeUSG7pHBaEhtRF",
  "key22": "4VpSFZG9ZM39dyQNowMQqP19uo22Xc49xe3BTaotyFFdA4KrCQbAetWooLGcRtzChfJ3scvuUaDbFKYtSvGxbwvY",
  "key23": "5Fo5UoekEKx8T5Korpt1Gg87TCzqzCauBUnAFrL5gj7THpFGj1eeYkLMoa5sD5CKrreX9zizPmY7PJTxmamAejXJ",
  "key24": "3ZpNraho3Z38dD6gqJ8QbaWCbUrGfBdyGjhvn7LYTdtvLPXWWSyDZ5RmAo6DAjnsvLmns52qPxvfznnvmXhHsrGJ",
  "key25": "4Vn3gtu9X4KNhH41tJ7AN4dKTFFWG926ywfuxTTy1amnzJE7Kw9XDW8Ps4UH4Stv4hWfqLjJZbtBDxmiEVYYiG7h",
  "key26": "2yMrj5iNui3h8uCUN6VxEhSwyqN4TaCSwDyghvQiUM6UfR49wcSTqWdShGuGkBB5v3RMm8kXs5ZTquD2nwsoYkEi",
  "key27": "3SjUF2iVfE5nq7W9m6qMT7Ys5yLb9w53EZ864CyYtsWaxGjkRvxaKWVTTeE9eiFKs117tw61RnygnQMBRway8qjh",
  "key28": "3v3JyDaG72J5iUWerw1GV28vKE8VeSTZycii8tSQF7wqjMErw6isRowawEb6SsJM4CqN3NjTo99rBgpmAEhfUwQ5",
  "key29": "3cyd9MUSHYFkSULLAYn1CkYGvLwv6UzMRufjncHN6VBqzPjwmPG1Ee3fMXfVovKjvvBWBqGXbfCz6xuibCyNujTU"
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
