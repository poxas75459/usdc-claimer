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
    "3cca7u6F5iy4TLqMVGUMwtJuSyZgq5bv3ToXpYjWXDewHeHMeDnNq3D3mUQC1Hz7LaXeyUEDKtiJDSmwBtGpyFLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WPZsmiE9zCt2A6pDAx1TzmwUSqvdj5kNN4HAfgr4jtjF7h9okrrcF4iFBgDfbGZE1UCdCCqxNbBdvQb7RAhfaDJ",
  "key1": "QUMZMPxB5gHHcgULmVERDiMJvBdmZp28M87uErrgv8Yi1QFHTpP8eLxrSYJSua8ahTG4vmB8en5tPhMVwxEi4ti",
  "key2": "3V2D3aM5o4RPPNCFZSQfoLZ7UejLeHHu5NbM1AXCxBPhBmkbBdqo72xVaQQdUcygqaKkws6PiMJTy6BV9uSJkK2m",
  "key3": "5M42JUWeDk5hYMSijUd7gUpsp5E8DmUFz4wDmJWusgkfUhvErNCnjxnzgKQE64V9Nc4GxYX3rBqFRDGjMqNJDrqk",
  "key4": "5ujZMAW3ZjhqMxBE3dU3YRubwm8eXbBGy2mK6MiDfu5Fhnd8GVMwE7dYo9ntajFxgoYCWfaCznVLQj8hHLogQwDE",
  "key5": "21soggLWGtChZQS3xFPntJJXWmfFRZgQcqfAVbm6WNudSWFAz1KgWKKEZtkV326WoApgxnJKE5CawiQ6LxsmfN8X",
  "key6": "L72oJsxxoTkvHvLU4bhrYUn2FAJHBftJf5fhPM6iqcY2bGiXh82wH5qXLuV819ateTPN9SniCd8wevSWtNDmj2J",
  "key7": "WvLFf5msPVE9Xfg1j4eUdmuGqAYM4B6r67MCUK5DEXerzzY14NzrC7enBGaMYDsWWts92fg6XkpsfYKz8wSaYcY",
  "key8": "DFrNGZzfCoaf4qvNRii4Hz6xSJDB6iMK2PqLSobhx3jPQmtFyWTcpRnyMtRb3cwzsd4EF1pbntEFRAZ4a2GrjET",
  "key9": "62K9apWrVTva2aYddN4Zibf41k4WZTWyKEYXGwG4MbETnrW2XwmYp5WscH2wFawnX16zMu2erW3jw38PvxX2BA98",
  "key10": "3aUkjntXsYLphwaUg33HoBc2c5Q2zbSZueof27JjnXhLqyHthgZrmQeio7UcUdV8oAnxi1DMYoN9oYG93yoqxaGq",
  "key11": "eFm81Xnb8JxfALgdHzMvYs6zTmG8uUb5UQX9Q54r95sUdepHCjph9javai1PV9LFkitxe2iLhwH5bX5H2FtCwg9",
  "key12": "5Q6ADVRB4k1k6s3fvj2Pb3UASuCTc5E8NwHz3acbDmY4WcZqQjiMBACtCsGU8WXDeM3NZ1xUmQtPVpBbT2HpVSPb",
  "key13": "fwSNiVkYnQxqohJv3HcDVpGNjaaeVPur2r7LexEZASz4uQLonM2XdK9GajzkLxPpwdU8VShEVRqEJYNA4tX6WEC",
  "key14": "5rr9MXFSfaxBsoZ6Hc5js6RdQA4Y2wnKiPxAiSBx4BR12HVqokvdUWDKpTSMoXxgHjpY7hqdwSzUMCiwSpP1YTP3",
  "key15": "2HNsdrvPDVYtBrrR52hWwojHtoKFGwiTaWFv4e5Bpi8u8yddog8KJtACLoaFmndW7jN2k41vmrq2pSM9i5C2wii2",
  "key16": "GnrZvCb6fyY3sFjsJu4ANU3YPqr5ByjPj7fpM16STGGYLyAWRkky7MCYMNHpBMpnLi8Pk44rErarzM5yscxwsAZ",
  "key17": "51Y7sxKHhTAit9nZb58bESshBzWy7CYBQk1n2mpHVxUQfZaHJU1WhRCvPDyLLBevW3pQQi118djpyVBYnwcF68z3",
  "key18": "n3xU76FMePs7A3D2LaCftZX2AbBkEXM5jfbqctdkHDv4vnM2XfMKqGzoFEZBxvRX9G3SpJLQkXV1wNLtHspA5LQ",
  "key19": "nYzWUgiPpxESiYYqDcVXjjbnkCvi4K2316dbbNpmnnErzcrVhAKgGLjqqLDsucksvjgNQe1c3wRbe3kvzmvRi1t",
  "key20": "3SHAqSY87B5pqZGW4aepVmDa8C3uyRCRTirTCgsGSevV9sp18fZk5gPUuGXRvPN3KrHrXDBeoju8AgNqi8Cfx3PG",
  "key21": "1ajZqkJkcdPCaKwx1dHfQGHV3jSy3L18HkJYwhJnxmD68Xx97bN6wE1ZXC25j8kfWyoGT4UEQ8sEZtCror7gVyq",
  "key22": "5rLJWUfFAhSYbHogHatvn8EuNF3VAT8uHRHcMXZqBb97woFjUEaHMu2XGwd2WYUcQqF6VKHyzB1VDyJ6HobeARbR",
  "key23": "25jBqJnLk4YyoF9H9y5szfjkevYR7BWdy1xdzT8CmtERao9DriiBXJYA7ofJ9nU3jcz7MKou1y1fZs6DzLB8jpiU",
  "key24": "3w2M48g5ME23wz4iptGcmxAWyTwwGfBCEmSemsMPb1utEYNjQLDWvb3B8cpQxL39Cwgv7zJycgHbtQ2xFQYMphW2",
  "key25": "4w1Umgh9btmTMocyN6mxiCm3PmknE7FZ5oDvgXm5DRjdmZCWf9vtS3KKMUv9QeQ2ZbmuW2C7ehkDVotp2EU58M3Y",
  "key26": "4cFyiBeHAY1gstTzyzNuhBrSqa1ZTh72eBX1WJ8KG4kyRL6GeWGrcPhw1h8y7ZeVM9dirKAifVK7X8f75GuDf5Jc",
  "key27": "3WhRgf9zL244WNVWCLLNbAXBW1xZs5mBu3nYx27Ki2yDpFnEgdiuXDV2X1C7jNLiVAJwpKqTepXNTTjj6P3xgmuv",
  "key28": "36x4dUeVEZBYm3XiZc6ijZ2FvN8Wr6P4J9ZKd52WSPFABj7PrnL1yNJGB2Xamj6VoVkNMbqDZuS7kUhqK81BJGAw",
  "key29": "2fwf5rQMQ2MSmAQ8jQYUctqL7QKqqkM82Qi9hdKPFcVLKpNYPNiowctYbH2UyCVXkry53emR4UsjCfbcj12sgt7A",
  "key30": "2P8QtioRvMQK3SRGxidgCpNQsMGRzam6aWQpFmMsfRfJAyEaDkDcQmdZpAND8iGpi11oz6YzE9AfBjppvT4yexGC",
  "key31": "3yh1gRp7SPNyCBKc9LrowNQk1vJscBkPooodpLQUazB145Yo9Yisgs7tGSn4bJoqPfPoTKzqZavRCzoDiGLqdVNp",
  "key32": "3aGvGKh63pLRFKL6NTMBNFtxZartyWUkQEm7J21dm8H4YK9fgSuL2R2EoyRRyUtJNXZoePChn3qTqkyy1kNLz579",
  "key33": "4okUfYwYQWTuwrvjCaxLNnS6pwTu8Ukhq7AR7hcZ9tpkWeHwVJ6GeWimPgJAZaHx2LYBsCanBQNFjjnvrBdPJuuc",
  "key34": "5Lk3d5Yao3c1q9qnrk1164tZqmujVjuDMF7q1DcWFMWyuhU5ovDoPYeACuKtSLyGe46cpE5AUyaYttHuPTt1SGYa"
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
