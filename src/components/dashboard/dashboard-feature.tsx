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
    "tMoR6HSnxqDuAy8SPu5z2RGmsGvQqupJyZPYdZUiYmHz2uL22mVomvBMjK5UcEvJthyf94WtJ29KZoJFPu5B8HL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CCMP9JuUG48UCWjc4MD8FTyiKe1WzhwtZSQ28Dkuwe6GypXnz8BT2bWxAwwUE7YAELwzbEv2Zug6qx2kFGHh2fa",
  "key1": "3WrgxFsHJLriop9jS6rDEHoEbMGF9A3HLUEdQDoPi9f5gZkhsNejvDorijiGuhm7WftsPzRTU5ZQhnQ2s3Bda5db",
  "key2": "5QePFHEL34dEbS1bJW2YpsNieNLjmPc6LHufYppt1HSi9bW2dNvkENJkngqB7AocsBqC6hfmMJAPJX85Xf8BuAEg",
  "key3": "5s7SeY7GfvW2xQazc2DFRfEtGfUHKHoZUKLexiTdfGFXqJJx7WhoH6HJvzdAki5GtggRciskHQ4KxK1ktrVmME5e",
  "key4": "3c5JmMtC4qE5jubXeaEi5Anx7NnYThiAZ2hFj1KetxjD7unHKPoThPHt4rk6njY1nY7Czg5xsWhk3u5ArvGZcCpL",
  "key5": "3yvgy3VVXkoHDWbLsgLGFq6afrGwZbfCvzjo7Ji7Lau8c9DQ6rP655Apg4Yjn8ycLbZKaYXYogiycn2hxbVQZe1p",
  "key6": "swndHN6S4ymD7Nq1uJ2rm7WXPH6yNZo8gH2Rm6hJRStmx7EjDCW6dSaJnRRJ7gDG2vdV7Cb32mZ5JknUJqHdnx2",
  "key7": "4xeNHk6RHvqtQd7ddMcH8S8NbZk1HVAR2sMjouhmSJLrdy5xJ7NYiwKbt8176KEmiqjPeY5R6L6X9w1HJ8xvHXMN",
  "key8": "4Kn46vygp8q1D9yhKNKjo49rhzhQABcAMizddQxUPcLPyWuSSVSFGtxC7z1khk9SFuLVz16aLXrdZCuM1Heq4uL5",
  "key9": "3wq4awqf8aS2W3z7XmEtGTozft7QE9iCyJ6jkYmWnDrK2Evs7yQEyebCKUFwMEY9MX7533SyfRHMt4nMs23z7f3G",
  "key10": "qRFJvnFAF3mHaN7hNHMviTswjqGBdCJZSkdhBktAbvK2jb7HSmQ7CHkGh3bNzuaVRVxjkny7uPKfzaQDd1AWxmR",
  "key11": "3uWqwJCZmcm7qtb5zxCDD3CeAz13po4BsRYKAPzWreg1UKPRspcrbf71Q9g1DfX9ww9JCjshmm8r2nsPG91th8Ma",
  "key12": "3LxWs7u8DjC5wdpBDhhpcTBNyKz86aQpQUyA7vUhgZEXf6WaBXkTZZbq5jTFZEDEK9Ve1yTTHgFMUUHb8b8ufWQv",
  "key13": "4XgernLq2JT2hGawXe4usbhpYVp5FfLVWtCd447KYEmCVMk1go5UpV1ei5m1Yp8zsep7AwrGHsMyomaVqPnJVFmz",
  "key14": "2WeG4KGxbx6dZySZ1qd4Bao5RDGSh6c2LDtUfqyJDMiv2T3UBi7YtMPsZufxsUeLTVWErdk74D5wWbR5f3mHJV4p",
  "key15": "3V1vsGrfuY2aBWeo1GkomUfPNT3pRqYYBgG3YWs7B9udQVuymEcFdKT2S2auddj8qhemeeTfLwfPqEtHEpu2A2UV",
  "key16": "4zbN2aokC3ujxVrWRL5FY9dBhqZuxYV1teUN9V476ZtX4EDfGi9Z2Q2XChxGUTQSLGEkJJ3hfTLVQUijdz4FPVUH",
  "key17": "24Cv1X9aiXEEXX7ycDjSkeVD6uSNZrw3YkfT6Huc3VXXFUWvcwBmU4CEfuhRszrtL4hMz9VPtv34GSLWQ6UitSPe",
  "key18": "1fi8w1zGKUm6j6bsw2rq2aoPK9fYvEcfrZxqFyqFGasL9zYcrGM8L9QpxpShmnv2Ykxr26ScnqGhmJdB81a8mcd",
  "key19": "5Cc9wuD13UZ7jfiQVSguLStpAjxAcigbZ5i8adBbkyVdJF7iXg56AeRGk4SVNuxoEuooKtSZLdvHRypi1pUnAuaK",
  "key20": "3ziPLjMtPeTLSYoNPCEvxvSNCKrRX3ykQ3ufJCAXQKXrWE1mcK8Y44r3iZ6iCeYdYjwxT83MSntFXVA4GVe5SVPY",
  "key21": "5P5QYqyRsM4kqmY6rWPsPoBMyBTdh5otk4BLjSZ34wPtTvnP8q8UWxA4QUwofVJzkZ4DEjpSWtBKxdv3kh3BgpZr",
  "key22": "2CRHQwKqmziJANquc2EzyPLgGdjTbwgqSWwZQWM2yrkbAkHoGSjJqWfRjLJ4iF1v6CTLBfqokKR3aJoA7sVg4D6E",
  "key23": "4BnNhj2KCpEK9PQf4p6CcmqWU2qGmodSCthb6P2QzuyTKnmBurL6TRE2KvW3Weg3yLgfLhzBmgBxQyGBMQ7gxEsx",
  "key24": "23MFVeQnHULpLyjm78HfAUrtxyDD7CQrPrDqnZY7vf3aHVm8NYWx4DtEaTMXDuxt8UQYQafbcwzQkJQRnQmN1QN6",
  "key25": "3w3QR2g67XKfpTXnPxN12s4eUfMEESR7LoinNUdRxUPjU5EEYmy6jncNbbSjp4E1HWxGbmCmJN9x9PsPsLcgMNUW",
  "key26": "3MLtbr4fXkAnJzZgZ5BTF55oEmY9fpcWLUmtTnaUvLJnkCtMUk7qvVb5vBKtDDrLKTriS8vh1iHVY5uLWhKpVBHH",
  "key27": "2ESUbuZ8Lj6NinXarRZUU8zfffLMQzk97Wv588UYN4iXiQH8ovZh6kpiC8ARnTWyP46ibUnvehiWbtm3JFgXYCCm",
  "key28": "3usjcneR3Q5EsT3chVG53LBZ3YoBGaCMvwR1x172jqautvss1XrzaY3tiGJoF3R2XyfJhFeyKF6qoqr8k12nxKNW",
  "key29": "5JNrjdJay4CfLSN1wHDm5C6E38RCr9e9xhmdvzxVSnn6EVYiJaYp6XMewqrdv6cRnb86xSBMPdYAWNMM8ix5NWXV",
  "key30": "2V93pX9QfR3gr3VRvHyKTog92PRDrfmCNy46TjDQnKULA1crd4xg6FohtVnHVbFt2vYWzBTDWzkppa4yR35hiGXD",
  "key31": "WfpTf74dfZLUFEHij7gC4h9yrJfqK1wr62BDRUKfozxtSfUdPPLFSYM5DDoRW4M7qH8Z14EKqVVKWeaUbgsW826",
  "key32": "3UhFrGJnMackRiMELyhd99yL9nBeZTbpNvYZLgdFSPC2np5bFKFXixvCfkbZ5Z4zJPGWhnCbnnozweKyTxGhXUF9",
  "key33": "74ECrmFokVGLx4K8DmH2qj75JM2MEse94rZu3FStRQY5BtT1sgkzoRnhsNqhGaUEyZmb2eFESHgKNsbRH2oFgJE",
  "key34": "DVwwZ6YN11DjctPQPbffzLoJczb9koGNu5kK4vFkZEreKbD48SEZkMvLADdyXrWS4GNocwLSPLmfqkQWi76rkMy",
  "key35": "4SGEeHbffZeG5Ym5cj55FUCsDzPvUc3H4VLfdsVMUqRrTj97SVUceDzsQEJZghUPrczb1tsUoFSiW6JebDz1sg2n",
  "key36": "4c6hTrLghycDXZETSJW3fuwi3smEr4WqyqWN4KGHD9PrhFfS3XXG4ejJSH8eaPFsR52BdWUd6LgpxYqLYWXwrPU6",
  "key37": "bwEDCkqvL93DpAuC2T3BKrZjPg8iHBhWLXTeNzFAKjCYXV47emGvmnFzvHX8jWVkvtin1nFeeUT3tauFjsGwooR",
  "key38": "iJkPAF2ocNzfvaykcGdu7LN1u56rjznVGGQ8uF4ZEcvZPq7X17JjAj5fTfPZYB4i3aMujk7CdZBuA3XzM283Xfh",
  "key39": "5Afem2scF8PoarX7WpgJVVcpitxnmnsyLrHG1qEyQhvB5FVhjygpoBiTp4KpFzSdYpZUxbBrxz4VAWTkk9fKfNoH",
  "key40": "266LcVmkk7JihNvGMSXWT6wEjSVdsna6kimea4NTGbhrTvx5X8giPiaeQPyfoPVmpyQTtn2YodVy6svCffp1S3Ga"
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
