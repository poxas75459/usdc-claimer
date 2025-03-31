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
    "2GYwZcXBPuxr97aRaiZxbndy3h9AhLNa5Kf6BtphGpmbNNBe27GeVxCFj7wRZwChKjjC6DAxJfrCjQyTy2ot2QKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65FPLzPw5Km5MFynAwjxj2phEwr6ULiYRHYzxASoUfZ1TUswN3QtUfjF3ZvatULEZS1Nt2SZsegzdx6o8y5qpKsK",
  "key1": "3V4GfNQgV4DAxa5XyEBJvx3TaykFBpCoSxcyxEvPDWYzLWpmw9ii9CjwNSyt7Vj7724WuhEjiTrK1mRvQHBWLyP8",
  "key2": "3bKiv3pj5b3ix3mgyHsTfZPhC4NnKruguqkWdNnziDmWuEFSiXrFCv6SFP3JJA5QCjZb5ho1XAtnbZZQDob8Cj5n",
  "key3": "2TfDPVDvN9t2N8VaGtbipPvV9Y7VR63C77nmGKvieeq1Kt1MDnZX8JgA44cFrtLhbCd4eGsrxgc9C3VuwhT5UweA",
  "key4": "3AXachWf8yt1xfpHZfvxa5mfVk5tDqhibs6nW2w1met2efS7HN2dpdePbo4o3Em13CKDaaR4ZgGH36sSLs4DiSF8",
  "key5": "5FXdCuAmZoi1kFkkDq1EXmVSenPrMLsznT3jS2EVcD4uqEav71r1p3NJbLxG8JQqwZebDPnLwbG7nSecU4mMghcF",
  "key6": "4U995rT2SDiZLDZ7sBCEUHTwTiLtac79gcrL1LPMi1Gv2gKBUhqHN3qVuQVYeERDNcV7opGLkfY5ePhio5uyLmwg",
  "key7": "4MqrRY53goSjKk7boJGGNj2F746idpTDXymk6ynxrwQGptzLnWSGV9jgmxWhrdowWwy8zR6QdVTNmVuBGvfo7NfZ",
  "key8": "2Hbfjc9s5CNuB2A2esdSSzJmzFinqp9TqmJqmVaTTf5qvE65phqfCCSP1CuTHWcbDeYjwcwRB1iGG8pmuCk1Zifz",
  "key9": "23sMGyMxXJo4s6zaG6x8jXyhaYVttaSE7b6Zn5vTbEvc6dUwBU5MxLR5xDTXz4YovwsdYv1WzQps1b3AajsjrMy8",
  "key10": "5N52USzRmybV7SzVrqqtZLHRogkiyjyzdy6ZQbgnFAxmzKLc2xBCeTBvSRx2cQSTFvxvpA3GXGbururMrB5KhADf",
  "key11": "2MbvrgSxDU5paNdyXj6jFmkAgtW8zMMe5hhs8iYqn4cH1bbQaFDaZVqFmHEMAqC5ZUfwok8CJy3zrwEPwmcF9guv",
  "key12": "59jzo8ubjX8EsF2H9DhGzjyDaMMg9AUi7uqBvztBiYrP5uzXQFjSZ6iEJQwm42zbxjmFK67KaEi5c9UawVFa7QwQ",
  "key13": "5bo2BjBTwdKMZRa8NKddJcHLtBvJYYcMqbtPehGvLxTiTm1iDBNAMqYyDobuviJmpQkdUmVpA913vJqbgxppxxjw",
  "key14": "4A33ekstcn9wPY4fN5KiiJXfsrSa67Uz93zr5fHJmWx1QrhL1YZqTxUM7bRyJBZNYgUGCDvdnB7aNgjy6whUqHHL",
  "key15": "5qJtUTkho5x51kU35pX9JqZJJCA7Db6VG5c383MNbXuU2873HD58kkuNzL9ZyMYzGhPBGtZrP7AFAYb3xVQS9Y6w",
  "key16": "4GhHUwi9Fx8WF6eyqkrM58Yob4qiEuDbovzTdHWCKEBt72YqwiGZJRDUxs5gyRQV1L4r1XWmDHHkCFhFe8NXRpja",
  "key17": "55ay8TZx5iJAu3bvKqd4ZETAjkuK7Wku2FRQK5Qb68PoChXhXuMBu2zFN8YUU5oc9nK2HsyNosAHFJPHpX23i3gB",
  "key18": "5HzPVNZYmPzmWfAEwEFjAKpKceaSme3sX3zUskTd7rMvjuStqHS4MJCgDoiMUpFJyEuxcjJ6wZYKMNqt3HufBAEy",
  "key19": "2yNBDK3xj55Rbig9pjNU4dGdeXM6sPpdZ2Zm8pqpSAvwESXWJi7kFzNeRqGhf3vfZ2yVBKKr38AsJHr4sbomycYH",
  "key20": "4MhfT1n4qR88f8XPk1GTKYrKcHRHeSie1j9q1gxY37VzyZ7egPLoetyMNesDSeTDuy5WxQ4Y3NzdzB3M3zFkjafK",
  "key21": "236kzpQHF5C6bCt1wAieToQhJJ6fVMqTsZqL5uo49bVHfcDeixhSqujZJRFvdwNsR6uUmnXJww1NTRqgpktFgTDC",
  "key22": "2f1LAcqLU4yEauGpfqpA2WD7WPzZdn8RsWbW7xgNto3R85CocTWe99wUz3aYRiVhtsjXzCz7n1Jc9ywYNtcAJt1i",
  "key23": "PXoFQJTHQCsX9MbnAXpnbbz8QkdV5b6C1taLG5isiEeujBCtfaqkydRdo7QckiBeA7DWuZvdSCyX5FphzkaVm8j",
  "key24": "2hEeSwV8BohuRVSWLUVFw4eZRwjEc23L1ydgerA2pwuda1UgnpDLVjx9kwUfhpFeN1GfaR1ZRj5uadQYPUxVP5By",
  "key25": "3zUbwm11rHGHussh1N5zbA9LFs6mEy6ez3e9STCdy7yky37Sen2nMCQj9GRi4LUP9EPdz3cP47GmMsxS6G8pjEDT",
  "key26": "FQJ9wPaDk3RVQYaNXzCwPPxZMvoD8VGoANR6kzWvg5oZCSP8rQpxaHqba1gVGyWWa2HoDxXpju1vjiEwBkWvapP"
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
