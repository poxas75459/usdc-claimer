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
    "62roFzkx25rF17hjT8KLwW88V95g7LLMt8h4w3BonY71scBrF6GB5GwEMTrdx4nw4vrKCDY9HjBvXwFds9G4ivSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uZQqQg6fbB7GSkeozkiCScEPNBPtHKraWacqz286XdEkUt5HXYp93ZK2mXTdFvJy3obwpoBJYGjYMPkRvtF8PbP",
  "key1": "5uumcoMequsnKuLgBDxTnCgbxEQLJSfhcjaxyj3DW7NzXTQJ1ctDEoxqhL4MK2sKgZPYZYQ9N2susbawqeu7T1oe",
  "key2": "2dVRoKVYkQ1MXPgzULNR8oR9HS9bZkV1FRp49v8nP2kQmsAwLmtkgmWxSAAThy7VscGuR2udR5Rgqj1VFFUHgkqC",
  "key3": "56VGfmsmccPAazt7udYcfKpWqDp18wt56238v43ev62CAA7BN9jbqYLWbRfiJyPy5KvZquhYWt7HGZXiPAaGVrRb",
  "key4": "tPqX6k9qpEJM1dZ5S4Lhubiodhd5QZevN5ZH2gq5S3UBkmNX3jhsLUYVLbnTgjjRjA5gs1zV1hazJv9vMs9FpXj",
  "key5": "XprcgwVcVJqYSKJZPK81uPC8e5374uuYHvYJQN6xzcwXaA8aKD8hLyNXtWY3cP7APYFxeUGLbAfE74Yvp68K8KF",
  "key6": "3jGmX9wEovgYJvVVLtMbCQyBx9k9qkypzGhJ4Re1LBEo8CNgKLW6yxKC2oivJSWFYdiouk8cT3RySaVHb7YYpax5",
  "key7": "2BVm9Sw71Vku91CUAajQaH8hYpnwXNNcMEodZifNYqYQP1cuNM63tKFhuZCm3hmVqbMyz1h3LbdbNmmyg46ta7JR",
  "key8": "38ytsYU8Z5hdJPWC89dQpY9erGSqFpNMgebWYLHusGagRHZ31GgMzwBVkRh34vUe6Dd4jmF8C2FwCjyYMi9Ui74o",
  "key9": "2J8KZ5m3oXJjE98A9AriqX4C4BkLNTqqW5gRHTgbyHZisP3XaeZQcv3Ky6VAZSmsz4CHzbzr9KvrjWCJFpBo4VaY",
  "key10": "w2moHG6t46d5FjbTPm95m9GHiTrTXEDTgGQQqXjtv6m92Whe78WdToBCgZLwocKutKHwBLANgt2YyjxTFib5zxB",
  "key11": "2sk17eirq75HZA2x57Vd9uoSWTnh8sevsivTGwuzVfRmn8n2M6AkN6WovDL7oUCBGNzZax6dZFKNCuADvJPhQRdd",
  "key12": "3fue9vgWrpQSrvz3v65HuJg3CpCThEEe5ddHnYkVNv5dRyzVV1Fcw33NJuxjcnF4XCRbwFTw95i6xj4RMr6yaWwn",
  "key13": "4ymiuDoaxf6qfo6NAxHCCJEWvu7Ds5CDXxAv5bU2W5dH6rM6kRYKiGVcbVj5Mr1xN4WvVczen7Joj7R6tAiWe1sd",
  "key14": "5G9mMtiQQq8WyNY8Kz5tKLsjRCL5Rt3cH2QyMb2jkuqDQxi7SAqsmeSdbG1HHfrL3QwfTEDU7gUYbhuYzwgBPf1H",
  "key15": "2DYECGGp6Mt5VyUDjbimnv7A4ukS6K6Zbg5eByBXU9ytGPhGSuChrLU2bKZ4kuLC8hdnr684nMYg8MqiavuwsqwU",
  "key16": "49TTriwY7JyDVa4oL2TtcxAr4PXP9xkdTyUH3EzP2yqZPYRNkd1sEwsGjCjGXmvnLRS9tk3ekAjcKiSXddWxMyDh",
  "key17": "NBtRXr6noY6KQRFnsEmBxkPEjhcbjwH47hgWeR84fjMWmnx5cneXXSn4y2bmZk2UMjhRhyZ4nErDiL5SGrUxCob",
  "key18": "37hHfAyz19Wuaho6EcJJuHSGFWssMLUoF7qBWEMmf9h12usqXt2zLABV9FEuZkRy6zicis3SPiehqGjwode7ZSHq",
  "key19": "6xXZWaGnXj8K9VqaWDQm7PQLZJtA56iKWUdHNyipCndxcyuWZDAiGnBFP6x4GEJVJ2Gs7rbTDWXLjjj77CAtsWL",
  "key20": "3ceBknkeAsNp8VGrWYG6qaCqTaD4Ky4HoMX1mcf3PAqW1uZgjY51dYvrxikSUszK1Mh9ktQVPcoEH6VGSMZ9XgCA",
  "key21": "5kiUw1JCjQV8G6cJBbS53AVwnmkwMr5qXx4LxdKzzTAc9H4WtXGH2S5gWCSEErh215Be1ViadN1S6iPfpGqGNvkE",
  "key22": "4kjpX734MWy9nHWmegEXCquwAPCctjiUSSyWgh8i6yDsebyTk2JVSVaNLr21S3hWegJRUrxDMh48Gy77A21SW896",
  "key23": "5mdqeacK3bzcHtwCZhFWNvcAXBqLYPhXP3hbrMmbV9YN7G3BQyqGhyF3i7sb3NM5hV3W75mccqXnMmf9HjsQ4qrM",
  "key24": "2w1Bd9bsh33gxzaE1ko8Yuv4b7K7Xs7xH4xVRZvW85xAA3iXoRYsxpYCUruu4Wq8ioJF3vs7dUay7j9Msd7FdKGp",
  "key25": "5TxcxWBVmqSKvnckSw2hmHtvLd4qBCBpwczKWL7u7NafsmcFA6F1QPY94ast9bw7BQ9Wbx9EBqWLqdtpZ2DwtjTz",
  "key26": "3fYgtYuv96jAMdrgji7ARZSWQX7VBVttQ2TBEb11AdpNMb3b2UKT5DWkCK3XxHm4YFaeHThpF3zSKmHSGePV1v83",
  "key27": "5DiMqQKFB1S8yLAr1cdAw7dJARSnGmfBGVWNpXx6gPW3HQMu6VVCtcTNoFdxdgFjGQrivwFt94VVTokG8ypFqZv3",
  "key28": "3tbHrcNi9R7pBWbhoQYgnWc2rqyssW7UDWkSQtMyxrypSCUVFr4RyoMVonqBJp4p2VVUXG6pNLvsb6WsHVBqNGBi",
  "key29": "2uAGgeUQ6uj4U1ApFyib8DEijLrRgFjHMD2Enuh6dXm5oxnjVw1vu2vqGzktqvcZMvyAL7k5smn9xjZxhuCgrEeH",
  "key30": "4fEz3D4ZDvS88fyTCFkXNefu15D3niWheV23NtnukRodj3zatiSQRDHDZyMKDphu4XfGtUX7Rm98xF4ktNqpRbSh",
  "key31": "35YhsJn8dxi5Z24mx2C5VL5k3CtJGMtt1GEysSTmpXxi2CtaCtM3QWT8DLUthRCFBUFrmTV5VY13Z8Tbiyz61QA2",
  "key32": "5S5Ea5daZGrqinLNQGuk784y4MYPuEXzaZcPJU6TqaPdgHM5abkQWeCMzHY6kSni5sCXf8vhr2vnT43yUP4zX5hM",
  "key33": "5jh7PfMZpHgNLijZX1qZ2W4ALLoGRNtXww8DMsFqkJ2Tj3H2or5HVH76FJAcnhqWR4myS6yf9EDXgaBxPjve3GRz",
  "key34": "5zVHCCuV46to48tLu6murxKJFzVe24E6phrkHxTcbWvRaCU4kChw36CvBzn2ArJxpqJCCJMiYEp2fj8GbGoh6yLF",
  "key35": "2JkN6dffgWPGuVjTaTUxBP5T3XHSNeRUP7UvqE6GUjQQdgz8yVGWr1FxUf9kzN7ZsS6pecB1qKR772VU4i9PvULG",
  "key36": "q61mnC9MiK5VhirWzvURNXhTi22f34KBw5KFAPeft66eo72EtkeJWLf9N9GUU8noQC2gVmFgFBZHDvsk8CiyhLT",
  "key37": "2NSTabHDjqNngo4QKQo7dHRD2y8zGsTZ6dwidy5Cn7JzurU6bRyRiVx8TttJ4V2QJ3i1ue7cRTSa9wERhgzqnGP7"
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
