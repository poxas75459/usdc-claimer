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
    "WrYPWP9vL69tfFSjJNTwckygT9zy4y1ntndGmPjuY7sMdKrUKXngjd8yvfWqCDJVC2rERVk4jmjAJooaghRaHwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B4eNpTRMwGzUKUQcW6wmihRQzVvi9ZXRHa3VwULZnDJoGaqNyouAPzsYC5tgY9nK3Xo8WanXAJLjdzi7VJTKpg1",
  "key1": "eh7oCTAWytoS7oPMgbh9vVx5bzpozrtAjPoVWE2ftJDYtEPFkM8cVpuidpGAsB8UHwv2E9D3Y4yxvvtWKnJPFgW",
  "key2": "12WypSpHkzAPeFFETFhvyAJb8npRHFoQkscqBDYcn6Uc66cs5Ya2GSrZy43tL4Pd5XPpkFdHs3KpjbxWTGfcxrA",
  "key3": "5Cis6CDhHTy4qptpJRXQ7PBdkyra5Lyam3BuyA2z6bQyU9FcBRDwQryhtbBP9c9RYACs13FeKCBzhtcPDEdBRPEU",
  "key4": "49qkiVKsTmrjpbh83JUAJMLgZZRcuAi6iz8XjbpueYvbWcjBvs8FFQK91ukaajRDyuRZj8g11LHaXzE9o2MZAooS",
  "key5": "53heJ3xRWqwmVrMwgWvz42EL3dbtvp4k7orur5VpipmhvxVCfLcM9J8gmVYuJ9yPLsby58PJPMoNdEFGZe9umD9q",
  "key6": "2EccouALhNDHaaH1vQDz9Y3hGjAwxmAnjv2L1xU3Yp3D9j7LEDa6fuQHZRHd4Q2qMGVrK616LuvC6c28jKpoiiwk",
  "key7": "67RGCBCKQPEqYo7yH8w5uEpwCRXfBKspbyP7fc7PUh5cCUWRTtinYn7X8jSoFGGcyxNcqUyJM3RVCMi44hvTF8vf",
  "key8": "3Fdw1d1Y2vK1ZzaUh1Gy1cjKkYFijSxiWRsAzkLGXj2dvV3m4Rw5gJL4cU8XJhRazweXMMj39zxpwuny3TyxK7qQ",
  "key9": "44rARp3CMA8VupkgH568gt1nNAMCuQA73F1DpT1VN93ZF7Fh6Pu6yQRsW6fT17q78AxjCqUunrRxSCfK3GiKF3nQ",
  "key10": "2A1SVjd1BPap8H2w1X7E8pzo2VYgnTrDK1j53TdfAknpkGryDQMuHvJrB85EjiLZnP6v4VQKatngpJDS4tZGtkzR",
  "key11": "3RS2fAY3L9kYwf3fJmQ6UQuk5hKzDR1exuL5FWt6D7ixpjHJ1RgfvZfXUxRvogCTdWjm1QL62872EuHa3SxHuBM7",
  "key12": "2NB45ZgjoQ6yRWk9EpRsAUM2W5UNkYpe5g8VexY2oZh86sx7WX3MCenZrz5UDFauf28gbZ94RxYGs3wY1Fam48JJ",
  "key13": "5xgq2kpLzHtSbhtf1dQrqjPMqo9MGsGJuYkmPpxyBwivcb5mEduEHDWGvemiw3sYJ1caGNtrrhw1nuzQdx6HLmcq",
  "key14": "2T83nxkcUPDfdwfU26zDVKi4z1u72vLv9ed6VTd9ZLK6dcJi7M5qGS7UoQ6KouLBmr8Apo55aeNszmZybETNKsxm",
  "key15": "4earR6ef1zU3bMwTPm8GF3UZA93Yadv8ZBJHvR3Yq9rjRur5mzdTrvzPjBDQvDWV4j2pRV54irPktzWDLUBa3vVJ",
  "key16": "5gNhCEjR7dJ7M1hZArGLF6zFgaxqjKhe1ka41iWTrH3biGuASD9uj5qenTkZcK6qkFhomeUWFDKUNDq8NLUqm7pq",
  "key17": "3u1TMtdsaaYayLUBHkwQ55sErXrM5uYovN7ioM4Rs8R8zTQHG1aacoVHMAfoUXb14Av9se65aHGhQEi2Btuu1mmi",
  "key18": "3WTwKZG5aeZFGMeutM2LzVDxwVxWG7WvtFjfSCRtyeEkSdUfDK2FAiBsEQ3JAVgfopkiY7GGeZiPB3AG9wSQ1odx",
  "key19": "253dubaN44YK818LptwyLn2TLsmohzqVwV1wLJFMH69QrWXpgMLFDGY72ogwegtNnBFnjEvz7pgQk6xqkCWjf79m",
  "key20": "22bwpyRKW6EJRWQGoUf996DWyRarZoHXcU6PQZgq6JwM5NjNkCNxD6C1U13ox9ft1wr8Z4KCasVTEHzSbEK9Y6oB",
  "key21": "HfZe5FtBaZxoMQA7GP1oSx3NzDkDtpoFmwv47sweoMF14qDWjmozCWbFJXme56x7RByzzS8C4UxNDDdpGYkSyzp",
  "key22": "3PYRb6m47wpvX7fNs5hKoxchcEGGWepqRmEpEGEkVFwBuELjNFeczYLP4RQoFNw7RxjUyMmPDw8fRtZMabEqgebc",
  "key23": "3kZTWnBsPNvZ2X3z1cBRgYgft2kW8V9M9e2JNotx8VixpA7ft2FjeiQcy82AcLkMtnDnoTq917tbBHNdQxSuD6UP",
  "key24": "3twy1bnMmYnrsSAqqgbcudvmVdWkQTen9edagBtupV17pTW3qGySVWbP7pBfUajyTYAyAfrWwVNhAqKv6d9TtMfS",
  "key25": "2wbm87MeaRGNHQbapsXgNYBWGymj3SeJzcasKd4FQ2rXh4sCMUg3S8RcDJnBKJCWWQm5m4QUCFD2wNgxcVq5qbXn",
  "key26": "2nhDeydRtZ7sL7pUpxyFCz94vAtS7VqgvPBPedkfee5VhLZiKfVpnX4hev5472MrqhC5UiX4t5a3W51Ge8kFX5Ur",
  "key27": "2eG5ucE5QD6YP1STh6kwbqVcuEp3MCaReRAQ2ZZweXnbJ5Vu9rBxDYuANRzKCMopY7ugVLadm6mez2q7iQrCJzFE",
  "key28": "2xjVZtEcFAKH7hRX1o6t5WxeQrkzU48YHNet6s1buX3DfX6TF9aySZX39t9gHhEcghsoMMp61NjvA55SyTxBapRm",
  "key29": "5Rc2dwcu2LJ4kegTywNWqVbTzSyaz8C7bUjnpNhXdMvvQ138xVpzs6f5vX78N5TRi2dD5KdayxUXFmuQoLChaTh1",
  "key30": "vz72y8bX2KXFYL9PZQJaqzESywBi24z4UEoLyG84qZ3coJah2L21jp9fdFS5v9JJzBkS4bfKyoHTjYEZr81hsqa"
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
