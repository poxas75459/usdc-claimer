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
    "3Km8EmzbpuKsXb7aa1mj5qko1wYxcwrQ2mBSfaNrp2dCuHhr8p3rMQNnZxhTi7pVjSg4X2NqunjiTCS48LijvWLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x4Qamh2VVBeKKi95TLLSkQ21xLasTDXwyXRJmXEptnUBgvPaCBgJHRNmDVzqyCKASpdc67RpdrceSrt9R4DpEvn",
  "key1": "56um31aEL1zSx8bgiMdgULoW9X1GUMGGQDsy2SjCmZGtZRb8oMzwErpyLYowHGc8rBpgXpVVuJNXfZKQkz94pMBe",
  "key2": "3frhT7hRQa6BtTB5XFwcVYduhRkyrrcwuS8WaewJQkugEcpYoqiYn6RzUzTGLtSxjtvNjLPvwoa7PekJg2dazzq4",
  "key3": "D5kEpj5F1BZTebeYDuybXDRpeVdWL17SBWZjpjPHfiPxJ5pneuDCM1wLB8kpgQaJnP9uBn6PrgjT7ty3iGzadma",
  "key4": "2h2sZbKxvrTb5KYkxtRL9mTXBR95LvHU3mkTZFDguHoX3BnpnmbFgQtLt5TcaNZaRkwm9zdAHgHaCkWzBFCWuRtp",
  "key5": "5BCkAqCuV2oJZF3D5GdVxEWyLJkksvmmXEkesFbNF6mJ2dasuKvMbUKwmtmUsBLDaVDNBi2jTuzydvRDGKqvnkUY",
  "key6": "3xoHcMWbwiWbni74CTp2T9REEYdyBoz8mXV5otrx4zuzgzr2iCLA8RXGo2QpgjDEgCd6jtDeNxLEkPCsBVnVYpuC",
  "key7": "3kNWUkprguu9rVNpMZxJvub3b5LcY79okwXxsQ6YdsDSPMw6BYU373R67kxnotzFYVLbhVKkECQsh8xfXLPpw5c3",
  "key8": "PWBLvRDVcGsSqs3ZRmTtATF9m4h5UQKoenKouBeyRt7tqZ3wuSFEvLxCMnpZVZexvS8Zj9b98jPCN7WX5iGUH5f",
  "key9": "5LQ2rXCMj42ZZofyD3P2xmPcHKKianBy24dvmoZwozoacfdyvcNm54beLgSHiWEGVeEsZYQHgnKRw8vQWPADYPuV",
  "key10": "3Czty31qSbeFUWHUxug7fwRgFy3wAhuuhSm8Fi7gLELoEj7bezK5uF42of5a4rJ9qBmB2FUZ1TWQZxrD3uT7WqoY",
  "key11": "23ZkkJbTzqwEVvVWQNTysev1kpaApBiFWAw7gDMMhrqpGj89K8mJGD5HF2kwY5eHVsMUYqScotNERupVnVQq2AYP",
  "key12": "588jkpeWPgWbose8UE2D79PWEt745Dy2H958YXA3E7ekWFymx4QFB9bXfdktRzXVAgVbPbjECLygREkNnv1r5BDc",
  "key13": "5j3nkXXkYnWxqgfQjRxFxT2YQ6DwN1EiNJL6CLY59naRXTgRSKmYGLwBQba2C5ACRW8DRSZCD2NxfEpfnghC1rbk",
  "key14": "5hb7yPye9SnvRViaioUEGAuEqTXLp8szZxSgDUkYbhFCo2T51uBpEuRqrxB9K8H9v4HEg6ssPiLGi6freXKa5fRy",
  "key15": "2Xs4R51RcgpPPSo6HE41uzkXq58n5cRsx33JNy4CartUAvaRuscuyVD3PJEk2LWaCmeMUXiUoXpGZtCB2H5zECys",
  "key16": "37at1Bk6gXiCDnsnFPjE2yL4nAgwqdC8MuQVsx4rDqzQq2Y5dxej7Cm2mAcuoQwejyjA8wMkhpnfqFX6jhSqm5Lp",
  "key17": "3pK8XP8bi8XEaGE5MADkC67pWftivcf6tyy3KodZY77q6cPGJavAgi4jxVL9naKmuijmrxfjcHEpfRQE1iqzJToa",
  "key18": "2piZ5CJZTFrWGKsfMWjj2qPQPu7CC86Xbozv3B98RwJ8uTQYEJAaYHpFgjzbtjAEczbZzf7n8UR6L8EuPF7UdYPr",
  "key19": "32VYfNE931vBSWf2sHzcXgVGYWWDCpQ8M2bWhToPm5UnAAncRHGetPfmKAW2zUhFup7r1Jyc3pRoQ665jynmhJfy",
  "key20": "4Ye124hSaKryTeBSLo5zLkra1oiiLkiwsoX3kHtsqK98xWY2k76WYyUWucH2j4yVFrum1yKi8DfZ9iKQ5ZVMhsHJ",
  "key21": "4mSUWPQMXTQTcP3ey7Wqt3XQPn2iHM3raJBnY6KS4raMX368JnZC5tecbLu2ZrQ4Hc2QQgWnpVTurWLrHoBxNQxH",
  "key22": "5uU29sPQuVgk8VWz3ZtrbrPex6ZqooqPGhVuzaDzfGMjQrVW3LPiHjrUT9nV8jJU2jZNds52SXJ2PsaXfSwg16J9",
  "key23": "3kgCzr1MWGEsRDh2nDpZeLV8nDsBZJ4ApQqBbR2zR2xZLcqka9BsMYw7jSvtMMCdCDkvRmobiR5yaxRfjwWA8XEK",
  "key24": "5ij9rUwajG4sH55TrGPXMwKXLsxqEgvzcPafSZAzYumbqF9jwc78CDx46p5ZEE7HXNj3H3ywMSFPNYMV9LejUnf9",
  "key25": "2KAkDP6HH7CUh2Z5J9pmVw4C39TvqTEUkP2ox4v1B22HFt7JYTxfyAU2kpVQUAfsVKXubvkLVRSqYuvL7XyXXEKE",
  "key26": "4SWy1FP4KCqsjJTxqY38AgD16guFJnpf1Fxq2cZLrjYMn8v8yqkF7AQWgrJMCNW6dtuKMjbPBfD95gY4FVKJjWFt",
  "key27": "5RL8PaiuE23BHc7TjB9kgPrTTGTFR63nNJr7wsuSB7Z87RkAsvoJqMJeXu5StrH6AgFRmgpZwQFmC45VRMyp7S31",
  "key28": "34mcKJvFXGrzjdeauQsQnemwQXCfQXBwcfckCK7P4qxghc6qaND4WEtm5vu9Vb8vWYJobwrWJF7LB3HpG4sRvkDF",
  "key29": "479ra4oakrXSyvhnb4Cf74LXgyszELcNqYMjJotQzTyPSiYbqzpPaWmt18mWmxWNxNEpmxjMRzPSSWhusnZqP5po",
  "key30": "59XmbBabfW13ZUS39c1oHyNarqPevtf6tUrYfAChPEjeuaYT8pjgnnyFVf5e7u7XFwBnjhh4herCJyfq3pVQhf7e"
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
