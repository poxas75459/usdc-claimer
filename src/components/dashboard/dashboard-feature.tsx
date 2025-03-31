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
    "3uoPAivX8Yuq27VopwEpMFvpeai85jfE9sGZgHvHMGLz5jbJHMGy2fyx6pLR8jASKCnxbfkArk4mYadVbTrJUZyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J2qAy6ZaSZrFZQhA178gVNKXNp9qaFWWq95uKfi4uUu33TY1CVE3TQYg6GQyxHP1o56R485F1zzFXSNqLxCy6cp",
  "key1": "4ZKF93kU8HZvdL5fDkPSy5wxDRWUfxmjvoniExNRib4WLiWXff6NMhqBgx5Rb1xTF82MYFtK47DPwsAqrZScTpbr",
  "key2": "2bpzBCXE5cS2L1J7k1zCu3LMZSu5rwoFNxHQKiSs6WpjbaS2uV88RGs31b8sKdiCkr4m1Gef2ejouh6U6iNMqNTH",
  "key3": "CQkeFvriHYhta8Bvgkod4WVyBxnQh1zhjhXhrmyNygcEeTJPWKaS5yWE5imQDtimN8t3uSqTr6FxjG1v4PASk88",
  "key4": "3X2JpsVHdHLXCfyJi1R818FKT23RTE3MPe8ZqXnsLXff3Kei7XphVVMRbL7uXs3kwhWj7Aa44bB2iHQGvBna6JaR",
  "key5": "5jNmrn9o4tTvWmvEEEwpApNruFWTryUWHNrnpLC79mPYE5qbAb76TdtwKq6ztqKfW3JuWySt3mxsoBCyzy5feygw",
  "key6": "3B7g93oMbFdWCQvqizRE1pAWtPLgrBboVWLCMEJHkEWSwztTWt47gc7MPxUu1yLQzHbFDLqQVKxcSBd5PzutqxFu",
  "key7": "5E3SWz3k698uJUJCuP4N8fz9HAMFWjdcW2d9xfwmkSSDjLkvGcgkqg2vZe4iAyHCW38tFjZEZXTZfKtyP4CAz9zx",
  "key8": "f84tFqhK8PpKDEYniGe1GC5kseBdcBx4TGcYXhiNkLLWzxBkV5r7HXtsdU2eugPTD1jWHZGetFicAhrZT87RRPw",
  "key9": "65qWY9TCWFAto1JNs7y22e8HfMaFdwQnVGg9AoezoPMR1XdFvEmtQ2DXmztWQ7dG7PqmFniASc7LwEjHRzip4e6A",
  "key10": "5tKR4EtkE4vSigKRyF7R11ctoEasbDS7Y6EHbHc5U3HLuzSo1BQJhxtJL4ypTqWtgTa8B5Cuw7kBqdiLhc9RzM9k",
  "key11": "Uh29C1au3fcVvUPNCepqYQoRJAViK5C7GdntZTpvgb6CNBT8JHeUJs3cxE3nfrWPbAVFurB8qafMvCyg1PvoSJ7",
  "key12": "3urovug5H9xALsmh1J8uvPPad9AKwz5PvodJSgZzLHhvia2FGZpdamzR5t46Fmhcykv3ovcb9dCjQe7WysFD2ZrL",
  "key13": "5JeokfZ4ypirLA9E3ay59HusvscpjqPGjN3rYPJDYcEoxkUx3dEdG4A43r7LMiKvm8H5oVSjzJK6hfdpX1ucDVh8",
  "key14": "5zXNB12RV2pKLBo4u9sM7dWUbQzuQew3SQtrMTEsWNPGk1sywq51AF1J8TcabDiH5ZYPYRtNCTwriaFhd9XCVrzV",
  "key15": "Zn3XTZCekstDuE4D7ApWuVX5oJEU1PJvsNtPGUbyui3DFHyZGiGHdTwpCEvSXVFbgymGYmSp9iq3qznxGU95oyV",
  "key16": "3Fx1Yk4ZVozN1LFxBXMvd6doQRGVT3xJHfvTjkwyUui858UiXZEBer44FBegxphods4BXhqugK4uzhbr375qU4Bx",
  "key17": "2N6PzHTka86CasxY6VxtPdnTWoVJgHptcYm6urYHkyiTW6F51axLKju3zSx7hJPZkL5ZuEcok9ow9qpsHT6ZBNq2",
  "key18": "35SwA235o447BMPWUwkeKbhfdsAdnGUCJTYdP2he2TWkvxsNaYFtbm36Z2fs8NjGPKqmTEpjGrci6LhY6qY5r9yG",
  "key19": "2JtcSHFRTHfmu7U1QMvY6JoF3pgRYDjWb3rk68Yxhmz1xKywSsrZP2zh5F7Q9StwKRAQbgSBWHp5JmTjHBdBactH",
  "key20": "4EFdTwtFwv4kaYs331Xjd1pXYEHCFVsErh7n2dJLPSv88f3mBTrMgKRuVxC3UFHEZPaHFzk5ZRU4aV6mzv8QP69m",
  "key21": "2UemTdjyUiC6bXUYGgjNPEcgEApmbnnqrBERt5kyLFV4X2syGrVfEmPCGT9g1eCXVKR5S2MpuqVMsXMLt9apDsxe",
  "key22": "2qoqk4FWxAZuSKfwgAzo4Fq7wUrmYhu7Xov5nJaF39KAXAmawkDH73Rp5oCGeRnPWTptkw4TcoGnHXYsDYJtzHy9",
  "key23": "2xea9Lm5rfkw1yTbSdr4hemou7afxXUJdur7kzSaKvWXMjMnJFnBZWdoT5vvX1EVHB95JXfTQNPeTqhbZnAUVqe1",
  "key24": "2YZhD6u4cU8enBiNukR1hUfRDEiowCskjBAR5jD1jBuKonMbqTvbNFtc57vHKZW2btvLwDdCXhruUhvRxxHc6sGZ",
  "key25": "z6PtwVUkUSH2GBAnMoDN7aF5ZN1w2Nbx3VM6Czar9xsZKFvtMjVf68CFiTeY3y5gewEjDoNCk5yWugN3kq2EnSc",
  "key26": "5jRPLUdjPPF49iCpmGZfFzoY8LvJ6H7Hbqj7wEfrmzNNCLVxAP75odJKYPvuoZUefRtyvMJ1LBvgLVniqyhH6Es3",
  "key27": "39GnrSaFFhDJfM6yRXH9T2vB86yv1miKoH9pgrtXwWwrrGm26zPtbHcqyAP7yL3M7kxrRQXWttVNZ7gDk2o7rFS7",
  "key28": "4bVfnJ2yVZFETXN3pZtWhE6jR3cpHPZeRAKyvJX3zu45x1hACYWeupUKDuGfX1QZMXz4K4LnE954BKJgHFHApjdJ",
  "key29": "3uSUfJVuwb6KvwyMPJW9MHohGqKDM6mRMHLbv4noBksXHqaEb691oEuPzot8ineP1oYKXUZPbRwgyEA58gYtAPbu"
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
