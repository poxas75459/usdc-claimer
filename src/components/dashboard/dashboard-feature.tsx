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
    "4tcLEANAUvZv4q88dsu7ski2pWHK8M8khRvh9EtfewUpzYKn2PCZZv3U6xW2MrpG5QBBXV7R3FRknrN4xisZg2ga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tW4kzjEVodk5TCBJsUH2k454FwbmNHaTaoio3S4FAUGuXpqrw7fJKps2G4tVQBsJKkkCBopaztkYvBgJdQifsJH",
  "key1": "4hcWbmUL8cWin63MgiA5yQUbsdtk3vNa8h2hS5oFXDdrHNbkvHnrkso2d3TPhx2RAQPY2Twacskk37Gfh7XaUNYT",
  "key2": "57YUWP7KezpKN1E9JAGsqWbDfjYpxwbKqX4ToBjf8DTLwryESSgbudVwdzeaMjKx9KNV8dLETwxM6tgW6Nz5vZ4k",
  "key3": "5R23LWZjq9HtRD43QWBR5dEhKSR5tEfTTFVfdfrU16e5fXpMhcUG7t6CnAmfotRNUAp9fwDLfoBw5LNq51oNZAr3",
  "key4": "5cBSAJKL1URHq4xohHFfroL9AXxwvegDreSLPjA6BXndpXwrpxjaHQC45UTH7dJdcL3aE9X6WauW1re5SojtDUH5",
  "key5": "5hcUwjbKkxmuWi1upwVqFjGakvJ466mCHSj9guvu9Xj2T4rSRg3fR3qtTNZEgQSGbf94xyz1hzTTBNtsCDXe6ANg",
  "key6": "3EMJdxGwn9c7cPCfpTnYQDvnhe7fD8wDajhvYhZKxFvwbroCmPZBafDPYCVXBb27GjijEisckviBHZ5JamGBydew",
  "key7": "4AM8SYwyLtgvsqjfK71dFJgHbA5JbvYD5hnwV1siVTWaveRBTPzUcBRBxSaPxqNyAqnCam2VoZxdbzCeJnmUSzXf",
  "key8": "637R72Hya4jFwAdQYYXChxAir7eVrp2Cy5GLrbdZPfE3fjrVbkC1yMabAjw1yZAreE8qzUwsAkbcny9tw22U3b5F",
  "key9": "4XqdwgFf2jJgnQ7jPP5JUQy3eRJvSDxKxC9w7VEoL7GJtkvTmAtynwzTV2yDxyZuPA3bn3xm6MckkNYyBQnSS9PL",
  "key10": "2krD7NCjgFn3djFSNdBdwfNXzsyKsqA3YKq3S2tJmpwutYLQhsekUyi5c9wVdG3tV3zeMS8aSy6XcSKUHe7XSnkG",
  "key11": "52HcWoAbmpjuL76xkGHNhz9zT4M7ZvpqkQFNPz1fzxGMBDLUYyGHEKAkurqf6KogYjJ2wKh53gGpvYSgsVZC1w9",
  "key12": "2F2PLLBmdG1HXqCqamn4KMhwRs75dF4PVgMJd1D4iCmmk4xzAiQFYcVHgCwD6cBvSKxe3fGEBPpDfvykyyusDRbj",
  "key13": "64JxZDxRsFGyYPLVV3632yv5SVv981yPuv5CwMU1AMP2kEkqaj9SPZ4mTo3x67TSkZhokMViaPHUC7TPpjSTm7M4",
  "key14": "5LF8Riscbup7P6as9DyhfSxMYSzvKpEMN3T7gb8raqNDUHGNVo7fa5SL8iQJZaJLzTgPhf4CeuJmjiH8CkKr9mn4",
  "key15": "2jeNrAdShiL9RHxwkLsfevM5EXtE91b5RmmG3WovXUair9qJZdtNbnMzxVb4zDx8AmzJ4gSESU6PnXHc4Zk1CCJH",
  "key16": "c554NDfBsuEa5XfwBgePfN9apEi1iDTfMM4QfViF8m6ZBY3Cp93YVHhRvuQVsqEHc1qyovNj8J2zns77QRXjFBy",
  "key17": "5WdXp3upyqRHBP4iBMErEhiCG8JsV6jEwEq9LS8Tqy7SbH9echJKnrvWv8eE2tCcc31G9UGMcm8txpieDa5Ky1MU",
  "key18": "jsRGhSUK56wCmjtNpFxjFcceWxsrQAJwsnWumpoBgNEjSzqeLSB1ix8ci4wWKPVNhNG8VuyFQVmVNZ72RpahkUd",
  "key19": "3RS3A785jeNUgKuQjfanJ2R6FJtvdyyAkYsMMXzWRcQ8x4z9YercBBF8qxNMkEqFL9nWE2aZMvZwsHnvJMPkxKps",
  "key20": "34K5bvJMvn7msneN5zMJqLhrv8ECuUJeQNhn7qrA1Ui5YJKdbcgZrTCJ7jGkV7sq4MsMDxbyHoMdGR1cAuR66gzb",
  "key21": "68GDNVoPtttDH7cWduZB2JL7q3p5HsyniukWLE9ZzVMnMKoTAk5ysasoVC1MMbJEvQi6zttQi4mZyPUhH9htKSy",
  "key22": "2FEQ8WFy6f5xMofMFzPjjgV5WS9gNK1mE7fVMjEBTnnYDKMrpNEE9dQYfp5ZRQ4gaG712C1gurMptZsdHJmX358L",
  "key23": "4vAahwNda11tvPm9di42eqjTw2zAE7VBtatfTHMhbXD61ZBFJfaGcf9aU83wH1pDfY7s6VL2CLaUH6Yb1GQZXcYQ",
  "key24": "T4aGRANgaST1zD3sKcnYv4Qv92TbEBX93fgX6gT36imEiptFm4jF9HGkpLVEWK4D9iWGLHB3aF6xXeyUw9756kw",
  "key25": "3ghGcp7wUjzzYZ4k4pz77WAPfG5sqpRihU7Mmh1Kp2bjV3v3VMiwNhqtAyUPAaebEWNePHVBVHVdwEToDGpDtE2H",
  "key26": "5NA6amjXFkSScNvd3aVpLJFTVe8qDXgX4bDX6hUMr1aRQnkh5EoAZDXwsoTKsrzoXWnqL7eVDQpnhwe1kQW2syYn",
  "key27": "fU5Ei4S5PKeWTE1yBgg7qxxBCk1LPjVxCXMPZa1veHAWBBZ8Ru9kGqTt9y6ogUR54ZVpEJYGNy1mV7pUU1KHKKy",
  "key28": "YFMqcqny8nzD8f7BTQKnmeSHR5baSmntM78AvSsrpxjtXEUZRwdS1rZ5SVPSDbHSoXS5hHcgwx4fTpQ3ugUpFhT"
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
