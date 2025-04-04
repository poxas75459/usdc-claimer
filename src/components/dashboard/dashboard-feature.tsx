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
    "2UpJoCDX4LZDb8yPzXk1qtrCDGkjZ7AfPEQ3cXnK2uVzD2RSgQrCZ8112unhPkCEzZoiVzzFFcaAxg7bYNiWaco8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zT6gvGWqqYELuLe5T5cPQhaTHHGvBqGKTthw56WDSg8v2LsbL4oRmqHw63nWSb7xvTQfpLE4KsZ2V2jnMKqjzTx",
  "key1": "2Y8q5Ch8WKC3xqgp7Nc3SH3Do1VXn6LFv5qEJXSHWHEgexGQfiwbDgvgw1UCkjWj7ApmwnjSvJyFz3DFD3URbwvL",
  "key2": "3a4357eSiXiZuqUXE14tFcGtVwtkM8yQPHhog2k78eKqExEDU47MNwFicCnSVRvyZPfk6mxry3WCwLwojtqfZUAy",
  "key3": "UiEQShqZD58hQE7KgTGojEBQNTM8YH8psgAZTEh16udLhMoQqivk2z7M4N5MtsYxnj3V55xtGHxdx8iJNe18rmt",
  "key4": "5tebpd5W2yrB1Mg8AKPkvAAaTMABsojp2aMXeZpNL5hvSQDk2gmYoPKWcRusQiqeZqVLgZwfU7LFN9gYohCqf32e",
  "key5": "3Y9LCUMjnniyt9snQsoUv8t5Exs4nDpYyZgyCS1TEagJmAFCod3kvkBXsmefNudJaE24HDxq7ZBJ9GPxAdGNQThS",
  "key6": "3ni6ACZ3ANREKbCaCBhun7upy6vJRu6FPN19fgvb1N6qHFMYQxhnoRufWsKy6jxmaCf2G6eypJMaVs2LkPL2r3o7",
  "key7": "585on3Z3esP4q9JvsDe3Y69h7fwtVfY656hXDohBuVJESdhYJQoht6DBaW3XaVpvTu8guVy3TkyQFKRxU4Kfj8RZ",
  "key8": "3g9tXqzgYmK7Pe3Qf1uGZYpRXdSpYDKSs9VddgRifwpEfa3AyuNyGGowNbzAShfaiZnrcRYCTyspFA5wTwDiD2Ya",
  "key9": "2xDCYbCiq2PuZKKiD1t6SQozHcZKJ9ubCgpJjkoucf2ouA7FWGWFB531s1kbbUi8Ufc6ArUmVDKAWhwMBCvR1CM1",
  "key10": "4DjUYJ4P29zSbM2Db34TvCKNDq7TSScdiAwN9vPGtzuDq5SNSVAEiduaoNVf6MAm7tDp6mjCN3XuB8xxTA7feMQZ",
  "key11": "4yxhbznp9fy4HSM7xtznXeDNvNHzrWm8yR9TLW77GwAvx8iV1NH7mN2524LKyw5uYZUsa6WEhRnYRwE45eVeD9LK",
  "key12": "2GPWEaXvxUEfHyzi9fYLVWaK4JjuXDt8ccaCvXyw5UDjSLWwU6rmPFk63b32NMmz9JykxzVKVKmFDMoiSt2LLwdj",
  "key13": "4XJhAwYG8ed8f5KUhFAQy2wWuQcDrDo98EeVwxqNN8JvU6rzWXWvo2fdTYeL537KD91Bbcikr45uzarhC33s3W6X",
  "key14": "2f1zPD6it97sppRa5CfJSEZNyk58T2d6i319AgwUcabtzUTVpwbThFXHuK6zdXPFYV55XPZuMJhurrKtSrKKzrUy",
  "key15": "2X4QxWi1Pc9XKQp9r66Nz2HwZqKWfhJbU8vnCmdTVgGj8nSPS5Ater7g2YtosgZDrR8iEY2VeWbr8vEBfPWuVshQ",
  "key16": "bqNWwjMiXS9NENq1ShDsaAKxKUn6rRqwk3avgSrfGVQ25ZpADFdQ5c2LR7sY5JMhWyxWhs9GDU7poaE1KFMra5j",
  "key17": "5Q26zZEmtfpYsmuaj8Aga4Vb4MALArkcSyxQtgyyZhYc2BFaTv45kSKWA6jRhuNsdoQcsN3gi6fh5RS9AVAcuhoE",
  "key18": "43zvk8V2X2hSckSeDGLFyeQm2G9L7a94XUUWwBzt8164enugPCRjuXMDgQbNyHuoXs47nBvvvbsBts21nV5CcNPB",
  "key19": "43xJq3vgWC4emXp4zEAGZwCSVNuNsHzqizX2tQb6RbNyFd8fXJGYsj6pMgz42qw1NRVV93fBRFhaGfwXhUcqPNra",
  "key20": "2HWSePs3UWEV8YUkkGGXuGoS5dTyaB5ABZ9CitzK2KpJXTB287YGM2V3tgsbKSbkGCEfKaAYN8vVc9V4KYYwECww",
  "key21": "4z6M6YVMpJo9vU4pA7hTVSEg27JVXdWAMZC5zpcbGgGpTY3mmbVxYs2wPsbvr66orCbtK8LKcSWp6GuDwKx5gxkw",
  "key22": "5Aj16EKBoKrBiBYuRFqrqAK8mVnGkBphFLwSKgm4NBC4u9uoHhbdCCnKNwNQDHsi1RN8JeeoNft42EU9evuDwvKS",
  "key23": "5RCN8SsQf5EZFCKQUNcfpwPgvDF6ob8z15F7a8BSfV7yp2JHYzc1E9g69iQNpuuKfdC8B9Hhc3uS2kquqhyFa7QP",
  "key24": "2HXLrXVhmXsfwbJPv43GpER32Kax1kvEtvd7z7ufQceRPtVa547KoQ8tZPPqSaJT3aTFsu93wW2QMYybmmLMwFBF",
  "key25": "4M7MG6dPzzVnTvWS8BM9x5xeWz5LP2yW4egrq9PRGiHV9JND9X4w3qwM1huHvDVHGUvZc6WWApnBQLKLTEoKHQri",
  "key26": "5uw4tKS9S962eDtqFjDagt7R939JJmKCKutQJ2vqrmUFnQaUqYzrZf2d2sgmVLVCysbCKY1ZijgJHRLKbbHHgZR3",
  "key27": "4DAXUTPzHkC4CJgqqES5Mvt9pMds8ddyi41cRhhMmbiSUs74Skys9PuqLPAF7mE8QgoyQur2QuYtBYG36gtX9MDa",
  "key28": "5pZcPmUEeG2sjUwWzysyaUC9WXKdAGbeVe5ST14cEuHHWiArQdifxe5LW9cpXTb5anPR32JoGyYVKPtcwqdj6EsN",
  "key29": "2j5ityiH1yPG2DrB1kdrbrxygpc5DddMGVJU62Pgpw7ZKzjchWwT2iqkoSmZFgxMU53xChDgVwx3bsvi8zWNZf43",
  "key30": "3c5biA4hrpGCZ4ANm4ykPHREC3QScFWaFQpdkaYfi39BV2ZjBS8qWrcAraW9YnEas8S6Ryv4QwBBMfeiYaH1Rr3Y",
  "key31": "5f5MB3kQKMWbGDWRmRPphtZsuoU9zgVx1NU2MSEEL3C4fJbWnZzDuAyQnZJdiaPwaUPtJx2PYDLXLjPdKeYEH3BH"
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
