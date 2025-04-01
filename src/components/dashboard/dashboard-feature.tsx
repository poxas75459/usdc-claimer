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
    "49czAY587n1tocHRz2D9FkTZmdjtQGJpiN3rDYM4r93rY2CShdfu7RxECMQjg5W6WvpYw72XXGJMMfrYFbCinCdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e1VZea1AfDqaMEUuCJ53e36Zz2LupjdHEzpH4k2aEboBdLwp5MBVE2pATW3rNoXNnL1QkjzeZLjLVMuY9TYzqyb",
  "key1": "2r2WTY9cdeHFzKTMbqxBMVi49s9EFp3jCWGUL2n3s8PJ1GL2v1xncAVKP7AXbAAEhou62vMTe1Jsrjetbn9QHW3d",
  "key2": "3kLkTnnunWh2geKPBUjmhfajcymsMeboDhY6swjXqyyudogzeYJjaBZp7rtAHq2yW4YHy4gD3F78wtaU4VPUBXb1",
  "key3": "4gwptECxhwuG8Naz8jNRg7HYAUTcqDtDi4TXjdQVHnnXzE4HBb1NigLiH8S3aHgi7g1th57MaKsXCDXJibGNG9pJ",
  "key4": "26HUfGXYVRCYqprYcU1HsCXCMTLYwrVxTgvtZNJB5uDLULX4c24YEFACfrs6vC9B8FT1eSd6acmVFZ3Rj2j5xL4n",
  "key5": "3BXqjLNMZ5VpKbFaZzU8rXhQNVuX4CQPGUQWRekiyTxKUY8NLSPN4TKFx16ytjWZUh1JhYCBYXCnqxt1CQWHaqeh",
  "key6": "613AFMiZnERVAhLYo1wz1pL6iBvggjdLzDqf4BmavfxBUwC9zVzPTL4TJdeBYGjg6FhEVnrUWgkgLMZoEv5d7FUN",
  "key7": "4BqCVPy5eHZXBg7d77E8wac186W11Aain435e9vmfVF7dbnQLrYxSeDVvUxcBXE1FXnZb7kJuqfT2hhEcsSCkDR9",
  "key8": "32giTtov9QUiXn8jMmSaciSrvjF1Rp7Y8wa7FgPpiWdJfFPPFHfMEDYh6n9TMQE8VHoHNCYgsYrFQYD47uxwQZcH",
  "key9": "LU5w5SmYWxUp8yTqoCyVvePzGSXB2PdqUvA9qxWhHQjWbyVsN88cf9pPL3FAs9YBz993Vasy25XGBa6tpYbCxfZ",
  "key10": "mXK8P8bnqPxFNJGYJV1pnaa6eTUc3WRvhBBy3giEWaMU6E1cDgsZMnidfKGFMgPwKv6LoWPBTSaT3TsbqyMQw5U",
  "key11": "3GLNb2rAANiG8bFfDyerZdWZFNzgseAiVa9e8jZr2iV3Ux6Y5gjfDpw5WTkWLBFZG3CeHbUkVwJdLQGCEzPmo7aF",
  "key12": "2TFeRx5iXqMy7z8qbxySehGrgmQHK9wgb7fvGRkkkNtKvgepxaY8Cux1LVzxQhJF2dHU13E5hJmnp6cZeQwhqXFb",
  "key13": "2bBB44ny5VLe82qbA8z2pBykJdbjeWqUGL21msi8uHoFYxUakCquRtAsZJ2j3X5SgK95g1Ta8meMP1x6rRf3rfFi",
  "key14": "25iP55hT4x3TvnybKhx5kjkuJ9ZQgpk3FhrDkMUKkfoWy3KT3MaCZZsjF6QSDGo7zfcmd1KYJMLdg8htaxGSLqix",
  "key15": "4xDu5AjBEfiiNymenhEFnSFSZxqUCC54hvWZAw2MWGXMJqV5x4ew5jLu9LgXy3xqsTHdejURSAUj6HUYj5nQicuz",
  "key16": "5YY41RumAnpHfri2u1jt1renGzgNfCcMKfijwpyaS6QFPqFSguQkgLg99x2LB9j2k2haVsJeZ1DoK7s9z25yzeCW",
  "key17": "droyACmvEzrm1SRaPpyGt2J9M3aAahTombsK6z3rPHm246SJMA1pjs4vMncGw1hedmH3KNFptC16JrZx8Wu22ra",
  "key18": "5q3yMQyur2W2qP1zc1qp83U5rfVPAbvLsmAmNZzsTKaEbcmY3kUTVVbGVMsMU5qrTg9TuuTxHK9qE8gjzSNCMMLh",
  "key19": "HgRkcAv1R74k2LEdzCrvcxFxVHGADfJkLLrYRxxCwkRwhA2eStMaSJzWhnRF1VFC8Qc3L5kjjZuqg1TPrEaUj7z",
  "key20": "Df1Ex9tmku31J1gdFjy9BQurufpDThxatRpHJ8A41U7fPZiJJZUbwenF2iXGHvwTwZMDpBG5ewPixUtkst3W8M3",
  "key21": "2kJq34y73YwkCkVcxMX5Q8S558ZxvZRQoRGgZSJj6LefYUrePiVzMLgxPEHvFiXMFjB1DL7uGBBCQSHZPeZN5RLM",
  "key22": "2DfFSy4yfpQgKGLxvnoWn6oTV8qZuHyQnMWtdPu2k3noKhqZTMxtGh8Bcf1DNNLwAkPk4W2fbEe8S7nbGFhaTNZ5",
  "key23": "3AEcPBskcUv96B9SwYuN1YmApXY7vp2Gi7M3oo7dWcgrT3JzHt6R4dhokcZdk48qZqXQwrp8mGr53KDiXDNbbp9k",
  "key24": "2YDUdGWmkuN6yrm1K3AXtciYJsirJrtmxEkw8WudzPNFwMFWjWF2U9nMHhPstA3kPhFUhRmf8QhTaZkdik57HewN",
  "key25": "5sx8GwMoUbiYsGg5EKG4fR2hd4dN223QjSEkhj3SEsZRCvSQPDfzygBEbuQSzbYTwCfUCHSmdjZj3VrHkxMsDed9",
  "key26": "5PfENhhqVB43NF8wDTh6vvqzXSr2DrWTZBSQBYnZwPhWKRC8PzhKiyHuqndmNLo671GQK467uphNWdwwA15uoyKf",
  "key27": "5WM6X5Q3YFGeniAkgGUbBsmXDgs6qp4jDGLYgF5rBqr4nCVqysRebRCZaHGkyFAGoZf4gGrdcE556XY3jFQXsqKL",
  "key28": "5iDoYf1a9L3wc8frWN8mg7qtNBYyWa4SuKUheAiQsUbGvXYHoLvkyMqXmAaWYNmEgLAs7XmVcjaDYpKpwHGuSpki"
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
