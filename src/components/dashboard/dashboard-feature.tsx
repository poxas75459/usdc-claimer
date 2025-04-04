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
    "5re2iKWF22wGEgDo8HMybRBWvpf8PnZaDPVdUbpnCxeF2xpAZKgapVbD8wdmNEtAm14dka81gvKFgqGbQu3ke8dq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UbgZHVcBMGTR1RjqgJkqZRDg51Ee2UWJ5bfCkyZp9o7otN4wTdHv7NJKSYZXXQvoLoyR985oj15EDW3pv29qY4a",
  "key1": "WePyf6Lor1bRBBJS3xvAgq9usodP29TcnpswypEd8SbYkKSbyLtGremkNZSHavcCQTJFXZ6X447LidTURSBBstc",
  "key2": "3sEwPt7ujtXW4mF9cTqWc9oqSXvSSUtUkd9MmWkaRThGTJzuoDQ5pGFsGGdjtczYjMUGX3wxgzZWBrBBsRJCqXRv",
  "key3": "4j7BXU5YHQwiwcnKkiFMBNoagXLf9gdavPv1FigqAGQbsB7fF1e9YHm6kjNxnTMJV42L9NW7dMaTBvgWDMZfAaN7",
  "key4": "nxaoQZN2phhgVAWfX9ygU3kS9fmxsc4M4yQuLyiRwgbAMPBRUEkRdUVcFb2Asn24DGz1bRgGLAFhWDq8hXEeD3Y",
  "key5": "5HPmdAH6ZCLSZF7q8Bcz54pFNETURJNffr5gWdKrG1F2k7JAGdTsqQ4opg3C8qfJAt1aXdPH9QnM11VnwqgSefRV",
  "key6": "4MyAxrjrfE6urf1jyqFhQqYY8JjFeSmBSXZmAymfHGRyFT8TwNpDvKHzkmihHEtRSxzCDJ6EZi6d4KnEYYRPgjXo",
  "key7": "4eRb5p5Bg6d5ugrL3N4kJr36Uinpu7SecmwpphDLStFXmPDZXTyC42M5KgfJqiLyEXngfBzQhs11U6cdYZg73nvt",
  "key8": "5SVg5GguzoTVeC9AoeWgDc52j3VqgqAUiMGAyid9TaXCxjB6FLrwfJzVBYo7GZ4yG5dBC6e38jmEawSpvPWSkDh5",
  "key9": "4brFH2XTXoGAaCZSUZtdzXoVnGd6mSCERgFP39nbbwn5ipff83HNR3RVXcHX6n2YH3WJK7BBcVNQZTuqkRjMr41v",
  "key10": "5TxtpGA6xCH8N3ECtwUmmu71Vr5EKaP5XfZQBn9AsddkKau3T7GwivUnD8vToPPvajRzkgf24g75dbqAKWYxZtPs",
  "key11": "3zXwahT2mzGdkkGYQpEEFqtF5bP5YA8h7Gwbw9P5QCGFqZzwLeHQwuamqqQk6uGqwdEWeVCDYe2M1v1jh7zf5zvn",
  "key12": "4aivsfpRkoVovE3TeT2NYYomYd6CGQvWJnLk8iEebGGvxB7VHy4hM8nA5d3EYzX5x66QgiDMuRLaiqGGCFSjUR6L",
  "key13": "4Bbx5W3DVChpyfpfdqhv5LwU3VA9CxersrStqei4trVfY8VDEfWXuWu9385foYpMaMr6aR5Yxp1txSASp7nSascH",
  "key14": "514vuby5dgKcEUxbaSmYsAbBbAbcTh13awSQ5Y9NZkSZnoyckJurtYc2X21Z9BLNQfeY9FxLUocyM9pCNMc5w1rs",
  "key15": "3yRW7rEWEE2u8YDqGw3RFdamF7fJnSc3gTJ2GmfDNfDgB6ae9FSHVHsuV6jHeiuUkvU9eGoDkY2dwvXFHzaoS5Vr",
  "key16": "4ZFssymuYsGUSzHyopa9rSasvbePPxcQTs5hdra5JffUaexmw8DgGPbfzKhHeQKcDgQf9mG3atx1AJYgNuyvhJ4F",
  "key17": "2w78pVedv8iKpPuT8XeibZsLhFJTaL88yzZbR5YsLNh3FMbnVcuKvgAzKoLDQhBcy9kkSKtwCWfpmQkRoZCTdtic",
  "key18": "4tZy9bLNV9c2VGAjqGf8iE4e4neYrHozx7iMHsGwL5HzNfoR97W79XZPLBwboBXARfdYjrrVrag7QCW1DpuYosCo",
  "key19": "5cWJSEWA4c1KpdtEhPpnJv9kHcrz4KwPvjV18ym4fu2vRQiL8vSDPEDwedZGoK51TjgEK21prqt4EEEiq8oQozvC",
  "key20": "4LCtEgvuNENLvF3DWTm7xGQgwHK9GYZWESdeJ59Gjd3cub6PB95LBksiphziYuCko5iEEvVF4f53vdNaJkqgRupm",
  "key21": "2gFFSr4XPyArwqabuX1Cuqs37gSFhUU61EY52Z1u17zy5tnRFnCLiXAG2HFLvg732t11tL2fdkQphLiqgXmJtMtW",
  "key22": "2nhFpBKwJTVt13HDFUr8wtErGV62ArinoPzyr7prcWFex7QD8E18nXDtgQWYZCH5mMAsfksK83RR7KEsUUfMxMnq",
  "key23": "4HrTt9Xh5wDfDuRko5afHx9gJL2jjgGbcZzostwgB36LNoj1eKT3T8uUqtTWgP9fT8WaYKDufiYe3FKkB6D8T3JT",
  "key24": "5wxLhczMb9nhLY1NsoiLe2B174kgDVHGaHck9RU5UdndfnwS1FHmf3QCryQQnNKZa1tMUqPNn9USJqUxFxWd47VT",
  "key25": "3y2jRTbfKxCnkXcgLVEbedrmqc356vbhApNQ4aeHf4owE927VJsoqsfagUQj5QU1ECwFgh6dtNho9Rnqe5YXhvvF",
  "key26": "2dZ2QcM5fFXHbPtX5RqP3rRRrGVGDQfE779E2ZRs5P8N58FfmpLyYvZRobzQEbtQy7ny4zrsNKyrciLaJ54iDHKf",
  "key27": "2ozndeDzJjyL4pLVBF7ZKn2yNN38RK3Sa5AGtjVUQn8r1Au8xYGiEVhUwDhaFhpTuKu7P67B4cEquVJuqYb5z1pa",
  "key28": "22EqDGKDH27PqieHUekgqR7Ft1EDHobiw7b5yD4XgyX2pjjyJa538yji1eJdmYUuA58CkdLXd45p2GvbUuSocwmu",
  "key29": "2JeMLa83VsN8HXGH58LxL47CzEoCQSPPBcyN4qNYkEA1oPJC42H6nsgNEEDZP3EW3HL3NUatnKhqWQ9V6h6UoQWR",
  "key30": "mUfiFJ41215ZKCRAXrPsa7R69Hy8KNUbDu8ExRhCZ713JsM9TFFh7SPBuCJUg25QnZiqYP8DdqhnaMGb8bsTtKS",
  "key31": "32ZRqAfYWuGmWSq1xL6nXqvxohxkEvDD3d5nuSfUozsQ1SP6PbCJG2eGh7UeG3L126fNV1o3gMeXfdyWdpCJ2ht2",
  "key32": "67CMwJkTkgXsMkHVfVMWm16eUBWeZk51yKrFRfGaB4QCaVJgDHDMCUSZ7xQSRrfrXmDbqMZUAaFq5UL1ZhJnvwSv",
  "key33": "3VqMF9ZF9v6FNsri79hMXUZPdbptUoaGaKCRADkGqy5ML5XmdKKtHuAdS4bhELa9wNKFjPdXoP9kYPexzw2FPVaS",
  "key34": "51TQxC4ZymaovQgtvqvoJJm56Hf4fR2QgAK7U4xhRp3fDT1M7ejcy9aEUrWqCdGC3u1x1fCR3VBzDm6HrFuX7po9",
  "key35": "61FjrTpyLQyk1wADJHbxeAjV43PgnLM7kMttNaai8gJytMHkewD96hSMqJ1GmqfNJeoiBLiqaJhqbyoahsZHF24E",
  "key36": "4V7sPwNfGVzRnX8bHfbkAb3PmLEgGwKzh8unohSKZ7omuTjLZmZMhxEkhrk5PsGrL9kxaMZv9FyjjTH5U6UeRLzQ",
  "key37": "5Gg7y3fc4bj6cD4t1UfPvH32misA1MpCxkD9LJjtWsP5icFaoLceFzj4FWfgqyTv4zZQFK5TFXGjdUs771wk6uMS",
  "key38": "XmGQsZEhrBdVRx6HW2bcYmJC9kyihBFJ7J6qj4uGNWVJgVySucouBtoCRR9gFuowhfX98Y3pF4qwkAcGszLG2aY",
  "key39": "2KBS1WSdto2xD4o6bBDzkvx5YDcvN2GMHV7PRePQYeMQRXgJrFNX8VNb1yy352vKQpgNqj189thqk8iQG4yGWFJT",
  "key40": "3umyNxWLaux1u7MNAqgFod6iJwqUAWR6UPqVzeoFVd48wPDMCcA5evueHLzvid1TApios5XVvaDKNCKpdKbdnAYU",
  "key41": "HyuvH51qM4y4YqGLkwrr18soNacU8qbB3vKEz9RjuePk534372E725bEKvdb7Lp2nxxV6X9KnHXe4X6jKQhKbSG",
  "key42": "53qBYx2MgnfKzsrMB4JEP9zWjhPRmQuoYCR3JZBbXfYhqxq2Y9wDg4FBDzxJC9hpLQsmQWHpqMbVbdM6APD6jP7v",
  "key43": "45A4uJPZt1pCqw7YCorDcpVnsrTqGXFrkxRiiDaU7oQCJsbhHggKSWKovQBqJCthxvmSa6woosFFqaVdV2nXmrzz"
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
