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
    "3X4LA918Pid8AHhY3aV4bWqx3tNh7BHLCYwrRkfoQc7ufBqLFgGPpFBMCrPsAq8NQgDLMeM7k7JFZDnVHoEbciby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Lf9H2gg1eXcXSGVdfaDcsvDLaoQEhNPD1RGWzJNNgEq8CQrQbYA6Q7WDNk9Y4J5kLsWuaagvGj2mAN4bFVV5PL",
  "key1": "3drokux2b2sFwZg4kNiyzhdv97Tdtr8mGncy4EhP5uAp3YNkwJ1HNX2oAusni6yApSQGmAtxLQjuHqzQDJ2iEsUG",
  "key2": "22YNsBXGdFTkSzFXidwPVTgpXt59En59xN9Hfafw95NyJyh1CRftUWcQ92t79qbpp4Bys3FHGe5qG62uYYbA2hJL",
  "key3": "3ww7qBG6btF2JXn76PVuvksCwz2QVmJYGUmdMt8BwVVpT7kckkaUz6GAyTG77fhMcYa4mY3ZTKgKW1QHtexsrj3x",
  "key4": "4npCCk89qvQbjmsrUkWJKSvRZrurvi3Qw4o5PkvhATvnazgVoST1Eftb5rfgVLnV39VCp95jWt8fHUYk8LLN4Q8p",
  "key5": "5AsdQMxjTDyEBc3XFJhZdFeisSGfEVMfVyo5r2YPt9uGxsnSYAm7TD7RXetKuVB1oubPdbxmKZqmf7AvF5sYuxfC",
  "key6": "3sWmYMz86VTMiyy7Fh18kydjt7CS1b2XXVbbU11BzXNmTKMFF3VPqMmqYCvZvafZJEY4zrrfeqVayrLqdxXaRfS4",
  "key7": "5V4NyLXC4dNcQ9XrGVP1bQbMfWgcjFQZ1cC53YSabBXNfS2EtnRQ3dxVv3LMzo49TAA2gMyQw3SPR7THzaiUcfRq",
  "key8": "2rd9LuhDNkz3BpaiNaFuR24o6QAT5Rbb8nkMQ1KMDNt6zE2ndy9xDZFdJfAQqi1WhPSWCatoirJDpCdzAdo5rKqS",
  "key9": "59Ld6U44VeUh52aHSehmLbioVAS48s2wZ5MpF1Yw2ev9QpGzjjnbWzwCiuwxcAa7mjaYwqM7htM95Ft5RNnE32vi",
  "key10": "hM3tRSckuexTkbBGo91DJmdfA584FES694Ada1DPhMRu2WpYd7MmuguB4jDXGQhRksnUU8L4kKjBGcnJXSEBL4z",
  "key11": "2qeB2HkzWgMDtM1r1BkgE43Ch52Y9NaeiUjQzj4EBSnxSYANS5F7auHh4SbcAa2evFyNEV1ybCoU45o3jvy28tYQ",
  "key12": "3sp1qWtXsavCVU6fqPmZaM5VWmeDrGmFCUFoHxivqpPrHuAqD9K5ZfPSdE3j4hnwn5W1DgYK3brR2KqZodc4RSPj",
  "key13": "4bkJLPvwVtbTekZLq7RPcyRpTN59RMMf73pggPPTBctQkMc4H4KZnJrkhw8ia9DtGhrcyzKGhBBUMW8TVX6z4uRQ",
  "key14": "3crJo5R9Z9kPt917jYGTWYPAfiGKUXqFrJFYmvWb6qroTDKQjuuy8f536hEkEb7xSL8t1aSp1cdQCeCHaknUxz9U",
  "key15": "2J2oAfXcyy6jbNXsGLvuTPpawgPedUhQpoaixSeyiRzExKVM5CXGJqN8hivXr7YRoCkhLQqFvoaWGSExBXL59pTv",
  "key16": "3hmXjNgpWV2ZEwafuVb7BvWU68oPa5j98XR6hbVj1JsqZ1b2iGy45meJkssHYMvTNGUYwv1hCjxbKAcT8pBu2K5U",
  "key17": "4UHyV1zeQiVicPheKkCPznNGccdnsXh54APAPLw3cjgsnBcgRcypJz5AsbBTTf49E88emDap7AbveA4452nSypjT",
  "key18": "49Lt5tk1fuMpdpZEZn8R9Zq2PzjZ7WNb137pvvbajH6srXL1RdAnYXfWdbgMWUr4H4zPesTqFAyVXfFkEh2thfQE",
  "key19": "ZaMXKPtHt9kDWpNtnpavcdvLXCRJ7bATv62iZHJi9ZbGRwjEC1MnsWPJCNLVAZgrDiE8AFj2y5j6o9PC4G8Hq7L",
  "key20": "58tijTGLocEmA8CJCtbmtHZ6bikD3eC2Sokmp91TPunCsuhdnQhJDhkUCVwCE4mxE7GjfpajV3UpwmWMRQSrZstE",
  "key21": "aUwYQTiArRSgVXyYJwBzMJ9ngjvHEpSC7u5RtCoGJW3kUArsDL7c84kBRUEr8ipfGRy74LJySbYYSqdycbKWMed",
  "key22": "3NnaQXHRGLtYnUEFcBaxodWagYU7L58qEEd9Lsa4vStHpAPwZGgFMAqG8EPwxtVe1Pw1SqmdcYRctEaXaYUwnKhA",
  "key23": "33PvPJiz3ASDcFdh8augqhNFjZ8bUpkrZoLQbzojUfxQFQSmdNQFPfcJvkb7fmbvsBgo9bGufZhA8FyZXR7vQg1w",
  "key24": "XR4bQWj88ZGgUrQ3C2E7jj2HBBGsmYqgNdBLp1djy9ffwgtPf7LsBDUZ9apHgMDEbrQYJQN6irU79UQg1KZmtjR",
  "key25": "3zUNiQmwDnRtCeFJEUiRTzGSnpXjGa7rGNG35zbEtozdZetXT4H73Ziho5WWsfQfVA3vYxP9izqbUFgRWQjeRw3a",
  "key26": "2tvTDBX22p1S9y77okKspuuKxEaUDhaG1G5jDCegfj6WU6fcE46vgnjCkRRGbeisyF7ssfT3TyC3wi4842AhBUEr",
  "key27": "zXEcVLSWu2VvS7rS44jmV3NcLFvWQRnyB6ssRhTH1KXJeoYr79sCZkpCjYtfcmDsGbRZTGFa8GuaQGy3Cpqjw4c",
  "key28": "3NBkLhcSvrzpPjfdmPd6NJAj9LeZ9MB3Hea26VQkPCUqerYQTXhk8jUHtR7HUbn6chdwUojyS6JYbgRhw4aw3keR"
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
