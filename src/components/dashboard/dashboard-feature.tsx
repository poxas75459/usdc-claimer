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
    "5C1pyXwi2MfEsM8CYPun4xx2NyQ5mn3Td1vj16EhkcSfdUJgmQcsyZMhY3UQdFNGqTUCgRseXC7hKJcMBt388hJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46YQ4uYegxTVVGpRKvVQyjWo9BetfzrP9FhH7XYSEztmhU9rGgJWLcxTU4QgF2Ltorhaac7LbWkQ2fH4b3BEWWXC",
  "key1": "Kngv11pLRVc39KwzZHn8DRQEpwHZXVMv8WmgYULM8D18JLVP1p1pw2satZVUKZo8Rrm3JWR2ivzYbAD14NdnogV",
  "key2": "3PCtQ1pS2N7F9xqrRt1ktn85UDHCKYLY3S7zMrfMmpQCrKPYJBDtnweXnjchvr5EMk9W6txi6qX5bLWBUnSpCzpj",
  "key3": "5Uq8arWbBLW2943Cg6tAT3z1F2Rk8wLJD6QADv4XYTpjGNuSUDwexRH8MizyYxCBNK13gXbzbunpoaD3ah2ptgaU",
  "key4": "WAAEx4CSt4e6vkxe3zMEfzrEGLacUQQ74ZqDmDTYk9AAD4qasWiPBGXp5XMxaJHbFENQYqDr1uTZ8QpEPWFSE5b",
  "key5": "56LWb36suGWXbvsdWiszqytyFQpzPX3fHQHZHxQ4UCmw2T9FyhtHyiYz1bvu1fVAWLWsnFrxDaRNmexvWahcQDxv",
  "key6": "6536wnWHi2HRC5rFAywBVSwxQjsBW3gG2ApxifYSqdEWbEArzeHtS3bb8Dj1qDUGANLEyuP7fPQBBnAR5kJ6sfnb",
  "key7": "4RrV5RBkdVHRmaCcgoUV3A31SxhtbqUMK2TmH16QDjUF7mHb8aLfG56L4saoCL1YjvAZBgYmqoYgVx72Ccjk49A6",
  "key8": "3LTEPRyYmk9wGHXq6GMd741SwLtRHyXGyXDAZ8wQMN2TMfhAiWUBiY2ZJJrAf6da9DdMDaznNeSnqYrSwSkj58Jz",
  "key9": "Z2MmyJTzE9xvR7upUSBFJvQxhkLvHtdF3pgDyDLs9U41bKnc2uU26V4hpGTqmd9r7wHymf9R9GDVBPYa3o1SJXu",
  "key10": "2Fe3a7cA4TcEv4PYcuSTynz1BCwy5ZuJ9WAomzj9M5D1tAC62B8XnXXbETjZN4oBwuaYgvcUuks5acYWBpf6ZAP4",
  "key11": "4yyYSMMRmbs3M4Ao8NKkMNoUDe6WdVHanRhFBwMjiA9H1xPktqaH7KFM3LgzCgE5jH2QbEW3KEdx4Y2hbkCKRmb5",
  "key12": "2EbEF3b7EaJNab6guhGh4piEUJ5c7Hm5JdvSxbMptmcA8i9ktddGo8zvCPcT83var8oaarRfARehQxaw2PkLnz2S",
  "key13": "5ku4JX3jq32gVkkzKoR4hG5GykFGhFGqsteWxJLNpf62kRr4GHv7q5J8efKUTgx3VJ7D3q42pH8Qg6qoLaq4q3fE",
  "key14": "25Q1Mvf21YMwnNbKv6T3HfW3hkgJstBpqQxK4Q3FATQEs7yLzx1KeUFUoY9tQ6r1dLHX51hfoGoQ63Ujw7wmfDBj",
  "key15": "4Y9yDYoGh3wy72sMfNjC3HZtasNC4gEvQY2rdNBZiREwgTGnNyNKrrUkjJVbaWyXb197HQXrUe3ELS6T4ydCDtyz",
  "key16": "2DrDXhwkGrHyxKfUkYnPKKtb8JQG63seXKwMXxs4p15N2E2T18KfrZ2Wg4a8NRUZnq3qSASoy2Xm2iP5jS7q7CWD",
  "key17": "46Nn1RgVXjpNDDyvZa9zpMeJ5eVWHSYnjgyiPR15uP6xnC4RxAP41eRaBCSwJMei3BDCFJV69Q7B5xC1HuWLrZtp",
  "key18": "248YbfWtzGNXm4hT5ujziujFaB86TeZqEfTJPWvqGtsjYo3u9NGWwKZAe1ygUjbj5jgdS8o8zJNz5JdWxT7uTmAw",
  "key19": "4VuADXEszJg7PjStMRxx4nCqLBnaetQtws2oXgiRLQndfJotKAM8JN6W4vMaJzmiXiFq9EYRnWngQw5QvmwcR6no",
  "key20": "3pRaSN7cmdGgh1msNDyS6H8W1WWRynmiakirDikmYwg4BkBJq6cj5SGBwvDw4JtTmnCymF1SMCy4rsAbV59WX1TZ",
  "key21": "2wcgLWEUirxTC6ootgbcrHARXjJSt1NyNuogSFqxui5UkXvQiv4QPMGJLtjDEhUPCYThtWQfG12jSV3Ps3Ans5FK",
  "key22": "EYWJ1xE3XcANabbEux7NpPh5CMtDTDaUd8SKX2xBf94sBttHVjfjwEySVaVauwQDLS3CjrL5sNN6X24PtUhVE36",
  "key23": "3eq1qDawbAB4mrVkGdP1eTCp5CbXZdskbEYkqomgorLKKuHQWTiSxMgT3D7RvezaRPSJFzb2F6mJSKQRN9H8JJpJ",
  "key24": "2SFazSB82RqK82GVNcR5MN76RNGSA8X87d6oA9fXdFLfFXogHXAUchk9u6zDUZa2BDa723Wd79axB8AGj4KYKTic",
  "key25": "2YZMStc5r5WWu1H3x6E2gjkGR64ayKEUYoXnudRQEnqPAAgLf7zSd5uJbP2eGPH6qRB6n6icnwdQMHbX5aNwEync"
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
