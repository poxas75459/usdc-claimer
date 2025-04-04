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
    "4796mMpw3fPYEJo5Gk4VBbp9D72UZeLzdQQH67w3UduAzzx141sBGcCX27szRsYK78LA38g7aoZipRnNrhpjh7bv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YyeqLzJFUD1bjgaEYGv6eQtcfb9GRuvd4zReWjPoriEZAWyLfEiNjaimWd6yt25xeyGeLR5yxSb1JJbnBAy6kwz",
  "key1": "4PGkUdnYKHtKMRjLeQ8nq25RW39uTmu7jL6BFpxzm7jqSUsj7oSN8RKZdffTZu2HqDtGT5ajjaRJAdvLa92x8d8r",
  "key2": "3NQi1XKko7mPdPXPTpsbBFfKjnBkxnMBEaVkoQvU5CqNUwMassJYXhC6UPCPS6o37HsGrvT4gNZy5CRU5Ksmez9u",
  "key3": "4RWsF79fDGbGTyyixQLpmcBpxpQGu2Ti3cH685PSJLieRabTyoZmHG9XTrHy6JgxJAgzL1VwDXhvJptKfmJqj3bL",
  "key4": "WM8u5w916btTqx1JDWRKLbTR37GLNw12oBaXub7ddxEN89SwWLAu9M8p1TXRZ4bCMPow2XExEECGcHzCQwnjQjA",
  "key5": "3RfzeaLC65Cgy8oLoi4Np41nsmBVudThRaxsRWMEFJn6mgwKGBcX72ouwJz8DowEt7RH4dDwB4ohWk6RNPcsw6v3",
  "key6": "5Ur8PbrghBnFT8EhTQKi37aUk2eRviqZVcQiSXgiAxbDx7jvjLRbrS6wztyCGyZK7fFotPqRQw6udQ5pptTjoEVY",
  "key7": "2kemuQqj9tbGKnck23sbhNKvvH3RmVXjbk2vYyhMaUFNWBDVCZVxLQCj7dZxVf9fZdzJTmXcKPbt12WeQ5ywZZDE",
  "key8": "2sEwTaXdXVgfSJck5N2TTCyadY5sFKPoDwCps4FfonfbcujVgfGceUx5MkTzqKaKNxsctTn5z1o4iUUfcxVrrjup",
  "key9": "4HjiV7bvSpKuJV5PwvGc8fGaStvcUi8mTgrayyyTKGPpGEEdTrASpyo6VdNEp1CgToYtB9AGaaEUzgqqvVgXBGsz",
  "key10": "5C69Z2QZNFXBxYDRFi11C9xC57idgHzSJMP36W1SEwJEPhskKmi3n6fA6LTN2qCazBTtBWHirfJY86qCDcMLMrzQ",
  "key11": "5aQjUmXKjDAwmcerXdJgRpWSo3KhEojfCtHRAkxAT7rwGTGY4TYpbXW6xVMHvPq4R3tFXahtFfJmDeTKJsDsNBBX",
  "key12": "mR6Cf9JUo4iP6RV6nVpvXJWS6MzhQcWH5dcZ6aYm2ahNbGweSLTCRcWajcjaCVJegvNR1YpEd9Am38Hzar9HKBr",
  "key13": "3txa9u9fw6f48EAiv4s3ZXMQDCWqbosqFqvfVRozxtxB92t5MPwh1hDMn9o164T5ti26Yg8sRe8SmEHuc3BVV63n",
  "key14": "6RMHLAm4xPBA2Vp5HWweWQNCcQgQgZyAHiBw9CpSM6qyAfg4BNNJFCGyf6tvzrcALLwsfk79g5ej8FcHb1Na1zo",
  "key15": "2mpnVfD7VyUnWt1QYYg11kqTMYaNsfG5VwtMdHX3A6hmkeLc2WwXPaR4vRbtZGva5zsNHF2CgtKSUuSRJMm4Czf",
  "key16": "dvmKS8SGpF2kxNnD1TtUrE65LLzM4iJt394WrQQt4y1BpejXChNJ3nVAWXrAtRno1Ad6JHY7aUkB2kn5J4vN9NL",
  "key17": "65JvpnSYkcxCF3kziAChhBPx52ym5qwedsW9A2YrJwRJ71LuEmvYNnAaKYaeRjKnpgwRyiNr5PQ7RLF7U6WYYyg6",
  "key18": "4zhNBPZEjJKuBewVtiHBrGYwN7gbfn6v5rVC4LjeZgqrgZF5PPEUz63QhPzJjZf2vwm53B5xYrDDSBgLbUdPepJC",
  "key19": "3DjxFy63A7wPoX2kqNdWop7UhJhWK9SgS1c6PmAGB5jbkwrtW5URWYMqREtNLfbyMo1dL3h4iUKipbP7jT562UQJ",
  "key20": "HMZ62kV3fBkny1V71HLR6hXGgx8ZN3Rup6azewZX9kFV2iHEvgoFW28eXq1xtRdpJyopuWfAH1tu8hU7FBU5L3U",
  "key21": "4mVGWV3La4W3yKuSi4yhXn4REF5bg85XBrmC1J2LLpNB71THTCVs2xWd7bE76peuWiQmjWDiDSnxkSwAXm9NLkhM",
  "key22": "5YMYUYg7g8JgGSZyAJSxkMU4F25taChqkurUSoHcDtzTSpnUtszinjxFHEmDkdzTDFTTnN54tpydPSoB5Thdvwsr",
  "key23": "3L4tChMwLWon3VTYDCdPPU13LaBLAtNBJ9r9LQ33WTiFPZGQ2UrkFJ2gjRLjkGaMECBdwxvrSeB3wg8tJ3ZKMW6A",
  "key24": "3wjo2qEAC5JQuG84rhc7iZGcmqDwrEk9m19QTYvhgSWnBh2hSmVrU5w66t2hQEz7AgjhEBXzifhzFwx9cNiic5tu",
  "key25": "2dqeKcn3h3coAV2cX1ug6D6pCRCZfVJG3DW5PLFiBFzn2a7jB46KqZC5jVU2Tvon8gtP3PWq9K1KowAauf66NLku",
  "key26": "5QCchko4R57jKsjMhebzKrnfAxdFEUqUvWsKcLAKhNWRtADrdrSh97s5E1BWEgoN1J7WDokMiWVrSutLppLcYxsp",
  "key27": "3u5Gu9t5ZbdDaPVGvTTE8Uvbd7aDbUgEoDV9s8zw9kckQg1uMkxQvXWzR17JMh3nipqESd1NNZn46wn6qBWZNbep",
  "key28": "z67U5eDq4zvaUP4qaSX9RtjCzRNdTxyFL67kScwYaQ4anycMgBgkwwXDHaZRjudpLk7RGpsFFjYRDZs7HYs6SqB",
  "key29": "2erZnpykhk4HLrCaTRBeRnNZ7QFoF4LEa2K3qfkr7NeFG7TQcP5GsqNcbSZ25VsNBmyBJdrC4nyhwvZZaZ19xE9h",
  "key30": "4KxARtrNyPZLmQMDKZ7dAbQRKCevLX3GDKRj9FeRJdzYubTYTeJtko5LYEyjkStg6VdV7r2yAbC68KUCvsscLfn9",
  "key31": "fXD666vFStMZqKYegZuqtvv4t7TSPVvZyxiUjTkpv8aXqdtaxVLiN3NNRX8gCRt3kWXLBLjo4b9uuc5KNmUq3HY"
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
