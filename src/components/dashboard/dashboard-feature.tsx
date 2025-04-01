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
    "cd9eepowFVot1nP6qdn34zNJ3Pszj6HvFNr8Kv1mdzmpbZrkd3byuU3XgfKHarHPptKdgqiAQEmJ1bztcpaxchZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RQG8rDYuPC1ywd9tWfY2tEjRyUjG3qY6yJu7yhU1iZYPdEW6BkBV6CU5CS6ave1e9iCzfhVJrau78owVwT6YQb8",
  "key1": "HYHxrWTN9ZksT7K3Gn4aKXDpnEWDgvTvhjDGqoMr1WS4SksanYVzjxh5PXmehvMJ7YxhKjSo7THJXhkQ6CztG3U",
  "key2": "Rp8jZTjiuPxGAto9Ypx9Wuejdg3ehSNLirku46gZNhg7KzpqugPyHafmpF2Pa4NaLdq8TgpZHWMMgAVQcLm7H7v",
  "key3": "2Jt4QMRHCWZc4mSb35j9dVcLrPHcznvrof3PdHdJMje2hyQiiBgTL88ZcYigW8smuTHKSh4Zq4po2PzywpzFMZPa",
  "key4": "29GbMK6yutsu7YmsKXK8tDqX2si8EBQv16eswony9ecBKYBY6AZRrUDeCvvWwwytGrtSDYDEtir4kCB4Ly2oH451",
  "key5": "5R6JdSDrtQ1La4emAE5bytMaJvAiqCjVfVomKXA1E9EUCpMtBN8zkjHaJHciLk8j1sa2q5wWc9JiA2JyqK92VAtZ",
  "key6": "4ThGahYV7QgmN7QCzAbhzo6i7qDhPgcuj7GCfudcj88RLXorLRphcFuVTuuGNR6iX2fdZ7VVHgws9qTU6K3uUqhP",
  "key7": "36t5Dfsb5f9h5dvJ32se4No5tnWPSPsi16Pzecqg7cqnyWwk8MoB4xRZggpm8pUmaBeJUJmLAhCqRebT8F5Q4SRR",
  "key8": "3B4QJ4LSRBUjxULXCYuwnhaAH78i6kD2yxuF4RVyLjMjixaS6D9UHYrwsmwZCgjFBTjvJMjBL7RGKySS4zjGmRDU",
  "key9": "3fLBKXTfiURKGhQEDeKT7bHbxj4pHFXw896KNg2ddBaMkFsvchYiExws61Ldy4jVDnKa7ifzde4sZA9W6wu3AACr",
  "key10": "5KvMMufnEJH8c24NAnhtsVzwb57SNMjmRC4WKWsVKE614hSQuZgbGtW1xTNd4jDDg5DuF7PDpdMaGJ1iPpabfYVc",
  "key11": "3ZfPVC7tV7WNMzVQfegbKACaBnK7gYunFD4ZDLYytGQwSRfpBZc2qAdTuJxNiE8gbBLC4rgpWM8iDyQj9VagEcV7",
  "key12": "3A9HzZeijCkQYuThb4icuPaDDZnZZWk9yC7sUJdjBzvDjusUYRuUhghJb7Umed7jeTa6G6ZRoKvhvPJeKFNyLPGR",
  "key13": "2XV9SHx6VHu9hDR5L1uHdSHydHLp4VXBXzMNC1MY4HdWGG7NC4QgNpapazsd4DYKjf8C6Kz3HFZDsqUC8aBUpeTb",
  "key14": "5zxMneSfhS4mz2M8gBP4ZVEdoQ4vqQMByRTpvdu9Kd1YrMwzoHJdMhrnhbQ7bgJXQpMxiepUR5o3JeADv7trr3Ku",
  "key15": "4duWsRxhbZidHSmo4PfoRYKrfoTiFV2frZcdXnscAXMemEWdQQquneBZ1ZZjha8kNy1Mcj1Em3kEpYA592HH2T1n",
  "key16": "56rG1NmGZ3VXSk98ncDJ5bdkYSM7X5wt8x2Qfc6CRw36FZX8TH4EUPvJWxPk14ToCmBBWU6iGZrKrkXoxcdVDpgR",
  "key17": "36hJvuMnLN3EiqMCoRX7gYgKr2gbsj8zpnKAJooYUd9K3rP2U9XG3bWbFgE2ZL1Xx5iTA9Um8L4k3wUnogDNi9V2",
  "key18": "5RUcmaNZ6qJM5cG3kM2Dq572shR9MPoPmfe4ohTbTAHnqsmQxeL1HNcvuRzxw89uo5mjJrrYZT5Sh5tbSzPkdGKf",
  "key19": "5qhzD56CTojCgFX9ncF8QudruwYhobfeFPxTL4YMke9TRW4uqPcHDFHBhN3KMnTECHanKaEYrTBd2kTtJKT9GdjF",
  "key20": "2VA8hw48QmE5rbD34W6xPqNNogzCL6t7eLg3jcZxMStcW4DbASTrM8pBHsk5yFnfWHLXsz6SEAgsuhqDiFixoFkj",
  "key21": "5bZxfMVgcfMdeQAyUHYxeMMSxvPtoDwe9j87P6Rx6rhtU1w747CTcUk2PJZNZgc9fPveXR3jdhmQxyFskDx2cLdq",
  "key22": "5J9Cq2EXU8sHCgAey7VXT2XhcBc1biLcRwKoFBvdD9Jc7RpcAEdUKYh6ThV5G7WNjxCZ8YW2WhvEeKCKwyYNNgUp",
  "key23": "4eQGpnmYqDd9PzmHabb3Ktesnhm1xMKUXarobiWwPFHr2ANccMhhHYM8vxFv5L9WWfYMh5Uwp4YGYWtdfb6yCu1n",
  "key24": "dkuF4Hcp2FmZttSWPrbtCgVnowaLcCbUutLtiU4Vr1FTctcrWTzpn69M86kShSmuRDf9AdCTrvefawcH57KQkgm",
  "key25": "54hoe8KoMfcNQGy97HxmfGjgAV2kCTNZx4surmAK1Tm6nANCjEVv2o4VkACqTbHy6vFZygdktkke4vpk8q7k8zsE",
  "key26": "21qpy3V92d5mU8hBnuKpxWfh1yYG6sn5zAgYa5it9EnP5QfyA6nhRB4B5cXGSb2XDTrNp8K7g4S5hqcJ6Kpf3UUV",
  "key27": "2Ur2m1bMrdqVQToGah9vrm3yhGaiiTwgyU1XPgVefwfmsWXmYDwaFV7xthxpuFPxWCeCQ2KoBahantUNHWaq6LYw",
  "key28": "2jx1qCpb9ABQLuGNue2A36QB5VSEz7cf5Pa1KBuP7eW5kBpNigaBQxDjWshRK1vLiDK1pcnpP5bR5cbWee76P6sq",
  "key29": "5Jy77HMUuv1p9buR1PxGEYiD7WssbRwmk9D7JW1DzFuF8hH3xFi66tymUSBcbiYQVsJBB6EGTJSP38hN9a7RvXkF",
  "key30": "1skzmoRm2tYoNT52F9ggigtcZcaCmgSsDYAaXdjUjzriXDymFo6nsYXbQKU5B8W9SABd3sD38gfubB2aYWMsGyM",
  "key31": "3cDgfNUPgBorCjkWMPo1oxUp3Ny7FD1yUBtmGTZWCMB4mPya8L97EoJ9pHEieosk3cdfqNZsViSVQmQRHxKhV1gr",
  "key32": "iaN4xMww4ZzSvLXmU6apYHKbdYYaDPt9RQzBJjwLEUD33zVdtC5GLGb7qHUk9Xbp8WwXRFNspjTQV3CC1JFNLRa",
  "key33": "3fBVVVuDxqAHdqfVWY1HPibhvSyCx4FpjQ2AwhCKr2mmn5BHka41Jx1V8x3bJH73uKb2uNTy9adC3gXoiSfkC87p"
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
