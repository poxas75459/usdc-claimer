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
    "5AUHukqocaMSWEerpK1U6x4dcUWQ2k2yRbPANzHbZMuJnw9J89yhkzJBtYsn5iVHzV3iVgXvcCUzk1g8F7crM1zU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46NK3rW8TwtdwMJftHsWPywLx5nn3Z833TeufNtTUqJM9Y1TUyB9vZPrJFZETARnbnuRTUay3HgBfCL1b3Ybxkxf",
  "key1": "4k6K8AT6rkmXTPuQL3MpuH2dZw3VsKqbJBKaBrJESAj2kPp6Yqn2jVmei7RrtfyKWWm52EegusP7oYB9BzcBghZg",
  "key2": "DCQM4eUGUW21ozSsYW3JAhyX2Rp7gEt8uyNWhaw9ibcsu349fder8fYUT59PuxeFbm7tEmzFH9rAx5nTwH1noP9",
  "key3": "5nQkKuFzWMsEpcFiWqMKpQdAKcU3y2gNXTzsgP8SDoVkRrmMgZmHbNTMn3Tz77uvQKxSvMsK6jzdC1Tcd9qGSkp3",
  "key4": "3aFDY4rCeNJEutxFYC7yYRwP1Jrzp5NvaqHJDGrZcoPfbCYWgwg3tRw36vNkwy5goZnRCd2iBgQjruRmjSJwcPSK",
  "key5": "8CM4fhuKrgaVJvf8JHxTJAHYSp9pKis54yedN4FtBMnChcqVJ7MmxGQCPVHq4nftLnjRPjKEZmqRvoZsBjMfvnf",
  "key6": "2AMUn5oYQqz2Gef9X7KvfTemUSXxHUtRLPxuQqQBtPSZXxmFRjsoZA319muRojdES119T4MYZz6WqNaegUM8LC4K",
  "key7": "5YJjuLnYU8SmtZGynVaYhx8JfmGPZbKSbu4Kud1BGaFDB6HcG5mCArRGv2ChNvZ9kmAFqcbDB7kCT7goS94m72vs",
  "key8": "4j3P1hQ2kV7vwcyFoXshiJtf7TPjmVJrqn54K5tUqNy8TjbjkZguezKqxy4kdbX6zeoARSVCJRcpzfw8xsftUA3V",
  "key9": "5m4aHEv3xHgwbzYCrjJj7eTFTw9smGHz1aach8dzaWYSGuKahvcBye7wjfsXbm1xo2oPpxv6KGRTpWxuPy9EGAWA",
  "key10": "2rmjxN1j3ZcnSEKTXWv9w4BnHrePv87ms3YTUuQMEKNYtn1jTXTJzUg686zcGCbacrtuUMEaQTWXoZkqC9rz3579",
  "key11": "5oMb3UapZ9VxeXWFXY6Jx5xcByWds6bcnrm9uBDFoi1RTuDjH64yKG6VZ99aij7juVkFmf4z1R38oam75PncsJrH",
  "key12": "32GaiXuQbtiCWWPCXvWVT3BqscGuQMiT3Yz5P8D8tCez9NR6D2FuNrzQL42grbzYwEhynkMwPDF7jRPeKPRHm6DD",
  "key13": "4iPvpMB63UkiwLDK6ZLZbezVzN66du2ZvxYrDAggzxuuQV9SPX3umedz4fTyhuH1rYe4i62sEuNWBSULkxHSVMW7",
  "key14": "3qoTo5XvG61Jo3y65yjJ5vAKvvU63AHfvvzmHmGVWxWmmLma4wzLxBmbjB4j4FUPKwcdMWfPQkbaSZgfRrGLuavy",
  "key15": "26KgeBq3hq3jrzjMGwaKe8bEMMvBYnJtajXBwm39okpW3TRBiBU7YJEs7YfHLkzQ8kD5BY75cFtj5qn5VY5sHu34",
  "key16": "5iVRAaTnCveC1cNnoY3seGphjCCG8DCpqBHCrT6NsqkR9P8GjVqSkVKJf4wRZmFSajXwHy4gfgUpA8F7pwMGNvyA",
  "key17": "3uPKdV1iiGKFqA1T2NdYrCqiKZpdR23hEjPVkwSHrgzwAAE9NCNHedmyLzrmffgs1MfkG6JqvuK1sqfe61oX8SvH",
  "key18": "5VvdrmKSQiF5Jv1gVfqDZnqGzhjRP7aag5YBgcxhxo1NApstGy2PRYXDVgpgUMrM44f7eeHvFDz9DpeXYnpxM1HF",
  "key19": "2PfWQVZTxfntZrPXpgX6MvQGAQC9cuaDs74jQyACs2hML3mVD1kEiXFpiS3cJLgqMHx8S31wAojNGQnWRXLTYH4G",
  "key20": "4YeS2mNCTmX4t8FKtgdC9sjcAJ7m16exzedAmjPAfbdZQnqagAwz5UrXdGtyb5KDZtwuyCNaqeJdXbzLFXLqTa8B",
  "key21": "2Ucrts7RacZgrE9DVywojd7pJjmF1fXX92vBz1v9L9uAakgBeEfvf4iSPQH6SvH5dXsuMkYwfUMhRrQroXtj5oJh",
  "key22": "3V8R1raRbA7Bd8mnJSQMdxBMr5WrFKjVCimb7LKovCEx7JBRGwVsgcVKVpGayPbFdmr4ydxWQdmXTW5W9wRCosio",
  "key23": "2EERVQYMKFFRfnZg5NbzUbcWRAKKDHXhi8XiTN9Ld1psP2KJTpsBZAXHZLiNgmV7mCs6DQG4mmFtR8WqtkVB9fvb",
  "key24": "5yktWBYF48CG8A5BJWKM8jCTj5e6577Jyqmdaw611FLcc3CJoFA3GG4Gpkq9rHNYVPSEqZZAHQ1PnpjpdiYNCtcF",
  "key25": "2hALh2myhpLvpCsWcaCPzho11uJ5TDxtpPH7qnKzCETfbtXxoscNYhSUKGz166NHqrvGtVifEsXinz1QD958LNuG",
  "key26": "41DCkPBCbcx9Jw2x5Bw5cbyLXCmeZjaWTrysLhzn95XmW7fkAuko86UbN3X9u8gJoKtncj3S4kR8xjj63uFeLLU4",
  "key27": "3RHmkESVM9QBLGwZRkvAch8DWD4YdQW3NQUSzvAvVfVhnZ16i2Nk6eUZ5uHJgauX3734cNX8X2MXfsw6JDZyeC4t",
  "key28": "438W8rfJD5rLH8Yr8W1PqPPV85C66YyMnde2Xt6HfFHyitA279KRwZNRjevr587xpsiFUGahyajewLzfVB4qAUKt"
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
