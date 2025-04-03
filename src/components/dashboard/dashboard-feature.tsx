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
    "54usGhkoAg4nLDdpzEkaqry6Bt2JgGts5hS2ZqPtdtT55wostomKMAfJzjzp3QB8LLwgdBzLjXXFj1vHr21RTETR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KuaQN7XjpJNUDMfgVhDfw5iCPHyYnAC4vjc8pQ5iqsNJVxLR2Ko1Zax2X3V8r4L3JDivNRdAU5iLQZwB9XzN2aP",
  "key1": "WKqLVUYXM2yi2KfKRHN4zuvV9qemCT34rdz1kgNGChQuhUrPMibaP1rNapdW3nei8VQ6WLqz5DARPXruVspf5g6",
  "key2": "2iSKL452Fsh1dNoccCXxNoDCxUL8UUSyA7tLEytwEkEfx7E5AFMk6cuR1xzKR4DDxcYVKbh3djWL2YqHY5p5ySVw",
  "key3": "dVbjvSPEQi2R1DJjwWutZmmygX6GpW6coFndKii2ca7s5LisBAwrsFj6VgqCGtJF8YiDLHzAFVYWfwqxaxJuVYo",
  "key4": "2ZW7hM7c5eV56CK67mRJkEkPffMMNpkzwfmcByVRR9CHBQh8w2NU1FgwwJLd6buHJPyCUtxs3LWgCix6ekPcwrne",
  "key5": "5oiWGFQDBM9BQKYdZosKKoztsEBkdJNRi91fPPfLCpgxijXJNZYTwbfpA1vGBvdQE52CjG2CGZaHpXNJmEJmrhvd",
  "key6": "3wEt3jMphghnh24tzH65sCtbDpAYqD71TS2S6jFxMhynZAWeZibzSebBvAVLQpXxtRVUHEyjfksGxz5fQB78GTee",
  "key7": "2JeUnZT6YTXind3etNzukcxNjzNMYBCoVuhoAQXsriuYhcG5p94cHUW2JqzQrHRTH6zomATWmBqxoppfnA6TyYk1",
  "key8": "4fRtieQ8HNXJse6z5hs9j7rsdHqxt3HkmL9xwwcpVBKPNPTtBYBDWd4XK9moXBy1NJDmTUgnuSbVbrKz9EETJstH",
  "key9": "93drDTG7Pxksv9iNMxbTLP6hq6Lnujmjhi1DHeGcW1NzV386f7iYQqLZZQbVYcVBKqbFEhGofuZBa1ozuUhRwU6",
  "key10": "2ya9VSFD12TbUKGmTFaQoXSeJrAskzy6E73pMg5f7jnLnKsfbJF6TdGDUoCuabxwkxubuMCbVmiajvF9gQTiuCT4",
  "key11": "oSuumBX2A7jNWbzLvsDYPGWaAdZxFaqjdjAHXQE6JDaGtvM2ouxvMFiHp3Kaf2hZqryxU9HGK8zUf91zMFyVcLC",
  "key12": "4LfERcwxKPNvfTywgKtEgHHH9dsyKAbjoTaZQiRL38SBN4NYu9B52UJxFqY6wh36y2BWsgZoHvAUqeaN6PVEtf3T",
  "key13": "LAfnWRXzBmbBq5vhf5Dh1BeNrCSRivjKjKHJX6W2rFWtDmXLHYAtLHtivDcrEABkDoDQBjFSPqUyiZ6w378rWAJ",
  "key14": "5s5Yybvqyx15AebAXCAmAwPS8Gh3CqjZiVQg31wq3xBByNBkETpXnwRHt3PtyuiYyPBGjrBF1GueSToNaUaMXY4S",
  "key15": "VMjYvuzvuDBjBv7o9kCGNV42C5qmw2KzFdmfTtJPxMS1Aat2eZxPmuFDeXn8wZcGWY63ogKKA7fxaoz1ULjSXXK",
  "key16": "JQkqhphtabubuPfi31ib1zYfgmVvEJ2yVydvpZWdQrjYqpXSjhPV5LnNXFE4Y6wmPAdjC9qbTzs2ru4v2uE7XAc",
  "key17": "659CxsGrghbBWbprN6F1AsydvvxemBBCzjtvZRjH2YKw42Vk4Nv24Cmb1UE7397KqAqyENc1quUAmGVEiyZAtZBN",
  "key18": "4XFwNNh6gEDfuHf4P2DYAm4v1QgkjhDvUvsuXfDsuK2EBHbfd9PgZC2y5QcdJTufCtZuNTQg83gMiQyhWKkmXbhs",
  "key19": "2buGA32gjFvTizQYkPn4e1ntR81VtFuuTFjaXpy5mJaDcCUxSdFR51rkE1mW8LqmAiDRWQLRqC3BqE7FkH4yDd9e",
  "key20": "3DDmedynb7Dd3WTAJTXWJaQ8PkpP8cxCgh13LX3D6rwJSSwgtbh1P3YpvxYmrnQJiYiPonfMnbmmbouW6BRRtWUC",
  "key21": "26hcmV3M4Dx1kZjrNYqc2miRcGMsAVYHLkHaq8Fkx8JTrcaXdgRUw6wjyZxESaL5rgoCDLsF3jD8xDQD4b7sBnC9",
  "key22": "38vKSF2iPbtgeHcDwhopnnCov6p2eG4FwZt7EcZgXLTBbrWwq6PHPKuA7rK5RoPHC1WD5xVsScwVJRfZr1HxU74A",
  "key23": "64pp14oEcELEcntZ581RrizKqwSkZpBJ1SPyse1zzPLsA6soQ1GW58uwZGggc25Xmiju6PGDrQVh8SNECtP372Yq",
  "key24": "279bSkrTpBCFuZ4P7k8JtHv83emmuwXMdtYJKcNXVccoys5uEUkQyVQFP5Hxy3U7fWJzJXVUZihhouLnEbakv9jV",
  "key25": "2dREQMrQReoQWQQR5HVJyusEwgyp8BFdpR7Jv1eKUfpUytC7UyTAiz6EKwuvfVzzQJ2gMa8EyYaK2BjAHWUU4E8H",
  "key26": "4BbeJUSNMhjaLkt2X4kNUGXQvPM1rCXzT2qGpgv5GKHuxj1Mjv333oiHjDw1kouSceomr11qfgRXyFvA9ej1dec5",
  "key27": "5Ug4M6iANB143bneSrfMSXDkFujuui8AC6A7dHiRbjJYqnGtGt86mYUTxAxFpoKGqAFXyNozWZsjz3SM7LfYx7v5",
  "key28": "5zpRLGz9tq3uE2J16ZN86cNZpumNNWeqzqjV74378E5q8LY7KGyKH4mceGEjRhTE7DMnA7MotLdbaDTszz6zD4wD",
  "key29": "U54zkDyEMz5Jbkc8TbKnGvj3iTXr5DuCagKidsJABHY5UvajNbKNvnYroqmz3QHB8QWWCUss8sChWcc5hnSMvgP",
  "key30": "5bCv5G8UGawUBdWsgb2Xx2YNCPsa181CQ49Hv7QzdnzdWAWtGd5YzER7u8LzGPEU9qHCbdDxgsjvq9TAgqmnXVt7"
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
