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
    "4Jsq8XEi5bD98s4MXpUcsDFduahaicBixGcKiEm7vRYu9Z4AEbAiMoi3W3DHQYHh65p9UrZU9tKn82vjtk46Cp8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qiyfx9VX2UjT35Lucva9gzYUbQiAYupjx54t1Coq6a6GKpvuQh2Lga2mMAgXqakzqtC2LtMuB5HXkT9yRyCjSjg",
  "key1": "WAsASkaPkzHmYeSGQMiiYZFW3UZD7LJLV7FjAF673wHQ3Mg9Wk88o6F9cnhq8xcampPX9zarAr4EGDw5fiYbo3G",
  "key2": "4q1N3ktkAkwMLXbUJG8kM8byDX9mTb8jLGz8bPyNGUFDFvfc2zTKE2WZiA2yghz3kVdaAnRtSSfKj1wGEdQbtsG9",
  "key3": "5pmANgqYDs2UdHMiat4GBatqrxJ4bArfE6YS9uhS49w9rqdNpn6xxhdmNR5dBP6ZmTGNsGo2YREQa4wSzumuXb5Z",
  "key4": "2kSCfY3QM1hmhXLYJ1mbdDBJCmbiKocdstyS9jMbpthu6cipgmG64ePPcCGrzvgMJhGkrKnPhmtmz1xkmfuVv8aF",
  "key5": "3MiqjmLUkfVCiUvXUo6piFADXLjFodr5j1jQMeEaLbGANDZNrBnWHKF6bTa6xwdf5R7tXKty284nt1qX2xSXhRF1",
  "key6": "4fST5UfDNjoXcJbqDVVGNMXM8WzbqNDmvWHhergexga9NNtXhERa3RBrDbJG25knunFG4xnoLdwtEieiYowKJ6w8",
  "key7": "5eScrwQEqJae7Swve2LAHjVvqrUCX7EYyfAR2KNw8tUzj96nZdc4PUsRiE8Zk2fty6KhgyuK7wtVYwBM9nPzba7b",
  "key8": "675eyqNQoU9oKnDpkqK5BERfPg5S8bpXAhLfJTy5ohvfuyNfee1CyXZujeHXNrXDsyqPoxnd56JSjFBf5oKn69vh",
  "key9": "2zccoQ9JHUEW2W1V5iRZ14oTQRf7Vjq7sQPrVd6zCSL7ocinNFDebXTY4csRZTXavepqhp9fbriDPxJ7QZqZ1zsW",
  "key10": "4wAv1A2AUUxdf6TnNoqHfrkKMfC1xbyNzMPRUF1D1TeGdqNCJDq6MvxkncRM4HsCGZmxRBDCFVyzJzE4Wbc3c6rU",
  "key11": "2HfCSQ6FZMWQ3wmr8ko9bSvppvRo2nnCwiv6Yo5FeyMRbzeBmv4HobGZ9ZZXdW4ZNYFWPQ86NGpxKfMW5oHdYv4Y",
  "key12": "2tNHyZrDQ1r3xwpG6iyMM8tXQaHdyS8uBEKGYhrmPLYWt2adhpRMth4q1frRBU8p8VMSePzFhbRCcjLsfiupHSCo",
  "key13": "6osky1Vs7iZFG9tReS25SqzRLcXdD2Udq5cwHDQicP7xGH8YsL3cwzR5XsxWFHYqjNiBTDWfRFcnHmpjVzowV5a",
  "key14": "3FkgVvRRoD3vUdGhC33GdKVyjDYFmXwtZsx9U7sCSsCR8AHdsCcFppajxqdq8hxnwcoHu7tNrztKTEKd6LmtBvHW",
  "key15": "24AnThLHRmtRepJzpgUyKjK9rNHKQkrQps2Dsond1JW5YVpDfVNdFRJ2mjmbkZa5hiZX5B8tpcmZKeLejvcm7pat",
  "key16": "5fo2ocUbGUU3ZDdNmA4sn8GZ42sGEoFUDXxtvLQJadsQ5VwEXQPVpNo7gzQbz81WTipMtXQaXQgQG2rApJrkG75B",
  "key17": "2PHTcaspJiTcMtPc5e655pn1q48DXcuv9ySb9oJHge4mouSnzGwnqqec418rpV6ze4JN1tQynwt9atiHsWVJ6zrU",
  "key18": "3gEUNsNuyaSgGRM6QAoQ6cCVpB9TsowV5jtUkP1GjuEC9vY9sFqNHd8GeHe4EpUm4NiXpM7ZQEsxbcyuWruuYAMU",
  "key19": "4fEfmS85UsyRass3bCZ2oeKY66ZadD8k8SqL2xKyYLy9ru2kCEF2iTDWTgeQ1AsXZ1Suikdr3TS4ECr4BUC4k2xD",
  "key20": "2mUVpTnF49cyQgJzFuPRGoTPwZhB81mVpaZFwQkAcAY2ux8kDoVfQGrGwAK5TU7aMt7VBpSqFF6w4HeDUAF8MhB2",
  "key21": "2jg6dJn1zSMqUhuHEJBUPQFKPkbhJ9gaEjxbBSwjeerqGWAfZ9Wc1GkLK3tpMAFshCXfh9GhaHRJWyUdgMg3sWcF",
  "key22": "3YKsA8FGkHuGRAqYuuup3q8gpGSwKUUm9fssJGHMmkFLJptdutVpUiNU1QwqUmR3g7Bi34JL6JfuWNzKEZnREgKa",
  "key23": "3XsnRRsZpceGHJHDwUXwitPMceFRrHPY9VhGU2epsdQzpg1AmCw5HnaN3JzgVB5oS89q55gKM23PvwBcacDTxm7G",
  "key24": "41HNzPzpLq8Vd9g8pMKg1h9hS7seFaCg9Eq2QgJkcLZq129RiZ2u5SoUyQsQ2CLEaaZwp3DjoaC6SFdwFfrhh51g",
  "key25": "r3BvdWvSbwFFJ4sX6V7gYGEG5rcrDKVrVZPhbLSVNsN7MdgvTCiR8vqy3GDusfcxhoMK1ynzfqP8nL1s2263UAm",
  "key26": "ZyeQF4LfhXFwwVFuAgWmxAe8xAYfASmfqEaSu7hwyKzWssKrsaybXEdkwytQLngyqxtXkxZytyAJoy5yQtAXpsz",
  "key27": "31rNoGhCCRjXGxULThDDbrzjjLTdEQjezqC7N9tmtxH7KDxP25EHSqAcNmF1xmn8LM6n74xMaCYPiRSZXNdb718X",
  "key28": "5TXGPEQu8aeaZ5gbCXKPHrny8oLXeK2UiEZBjx8roAFcfDdUBGYfEP2c2mPR7i5MnqYT3ri3oVUYKsbGt3gxf2uU",
  "key29": "3ySS9weTDBY1LmoHUwnmx7AByHmXfHfiLia7fLn8cnGZZpQxwJEFV2uPjjsRSCiaiRjhSYZg1RYaAYAVKhS3b5dr",
  "key30": "mdqNKUQeJiDJ2rTvAdHWnVJe1uvmW4jeEEscq7nqDm2kVW792HCkVadkVymaJ7qdfVRHv6V5GfNxrjPJsLummTP",
  "key31": "2eMfrmtcqssRforbkXAzN3cNmZnSvSP3aenuBY5fMpnKySCZ6WPFhs4prh96g4VpMv6aERAzhwJJHUijzuM6hyEh",
  "key32": "3m1hvBJysFjKfLfv9YoH2G8KBoVWY9vYAb4droZY9VELePsMWMzCEAW8mZLuTAdozN5U2in1YGk3R4vAEyyD6wXt",
  "key33": "5spt3JHfYV7kacNoAj6KsPe7TQnCoFJqaGZ5STCx2HCGdU8i2wXVxEhx7Dnm9VgJcrcKWSscJB8Gxx21ZsPxnUVZ",
  "key34": "5w5mMtpCcPJ6VSrgNm3KRXNaTYqDW8m7tmm7RmmTCUFT2naLH2ajtVjaQGjDVp1puowzrNLengWMHG6TWG2Zfjbj",
  "key35": "3WwD7BVJ9m1GXDt4whqnrKgxU3BvAq7oSnUPBcEYRXkNmgvLct5CviPS8FMBbmAezDJyCQZv4QsJgKJuhRWF1gqk",
  "key36": "2NQhTPGGFbv18Rn7PYHSjX84kkndDgUyTFCeFebpBFugDXmVkRrAMN42XiVf1QL9VBxSvHNr7x5DvcivFYxSHpfc",
  "key37": "3eS1n2frMoRX1ZueaGfE56WyVfZYTaEKWzYBQuHXVXQuvAgQJphchDvpswEDH5P8PxMYMqYk9hbmY15NyZUjcU48"
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
