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
    "5KvrdHyDvZaMvPJWeMjfgwu8GbzdVbBHDjsWUKjKicDC8qNpinSD9tBEa4kt5udEteqN9BVDy2LBmb5fDmnYLEpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nGWpBU4Rukj7KpqxsbismRVmEPXk4WhV8XSc43wfwRrngHdL6ZTTrNjtRry4315BhKBkrKEBZQWL1u7b515gRfW",
  "key1": "cpTiCQR2to7GDzTRjoQgfjdA7KRyN2Swd31gaJ8YzHcCJAaE1Fu2pZECQXgZKYsn3cqSDhKiMbPDaMZr9tDDVvQ",
  "key2": "3S2kpsjezbjrRAkdek71ikL7hqmSDGud8LmjXWjrKBPB63gASNciCKwrNAXLTXx1wreSzuHWoZbEqHQKiiMjkGf9",
  "key3": "5Ck6FATsfrBQu2Pm6rCygScfqyGAekWF95Yz6mt2iXUBuAHLBEh3xBhXDDGnXMmSdoXF49UnUkXowSEoTuArJs3",
  "key4": "5Q3rRdj48S1nCL5aAwEKnmjQ2F2dFTLJC2M6NhbynPWm5fW4rK3rHGDPnPfpEHMoamnrwUo1ncspxQwFt55ADMYo",
  "key5": "QRA9HP1yzM6Xq1o4cprRAbgsZLmf9map53NngEmC2y5KDDEAizyM9rhRBd58PevX43ncdCrxrVLuCtrpYKgVN53",
  "key6": "2BkJafAJfkg3q4YtksiVMRnB3s1Aby8D7A3oAWVwCkfeoT2u84ChQYa8osfzSqfW4tdEeGL4YgMM7Y6vhEKTb68A",
  "key7": "3hurGyZ2PiGwy9NRHxfLD7daV5Lz7R1hfdT91jDCumDLPF3b6VNKUCCn5egmCLdStwajvBPV5LdspqQ4yvxtmTQf",
  "key8": "4QPqcHtc55LBF45XJw4Aw3uJWhBuF528vSwcJ5HXJvBeQh2Q8w5EUuKaVNAgw6UBtWFhbGmMa6uuA5zja4NGdj86",
  "key9": "2ETXjnjP9Ld2TspEmxXoPo7Vyoh1r3H6y7muy1dqdkRvobBP11KV2X8sfeZkHQi6ruW91darjLGXY7VLMHDD5SVH",
  "key10": "5jdYc83KYbRnudA85LUwEhzQyENbNxZEbriC7dbFnfcGQNNWF79jRBumJTsyejtqDRFPp1NzkWebBHkR5xGa3cTH",
  "key11": "32rqMmEGiCsxHoaH7xhe7WvZ8PXgrrGXDodZVuHp1Zo1sZxWo5NbRCXDK7RCCU3RpKZG7ejoeQua9akXi32dpv9s",
  "key12": "3zJQ5L55ygQTaKMHFA1CCSsP86EThpoHjHHGRWMA6LLHYqDmVDR56f5h686uVjkJ6Bb87crqn7aP3xbomJdxLdAC",
  "key13": "wKPqZEU6NGfbY1Q2eTLnZ89uxsi8hFNZ4J8UY9JkFVPfDwtkdEgCxzPtDBpiFpsDacyqvgMoYc5DeF8YLw7CovZ",
  "key14": "42Vq4TXn9MuJmv84KvnkkQxosPdfNmRuVUcp59XuasBkhJV8UJQEJCGLfpB6C3vMN5DiKqUmt25NKiDjngL7mtsR",
  "key15": "41WZUcAmGTcg4cVV8j22FQF55sP6d6LgYasLNoDMptpt5vUBN6TkQEhHjiYoqq7STHBf9eBMzkJZ4SYCo9dZUxnL",
  "key16": "h5MdbdSvjrQbyo7D5D7GjAc9eJSstLrTE6V1xG8ARfCuKsfdeRE88fQAhxDAPUcxzyx1R38ghGXS149UMQB6oYQ",
  "key17": "3P7omRmCVkMTKSvEoJAerYw63hE8n8XfNbisKGqdsCXRXuH7wtgeQXdsWfUM1qC9DM4hbBSc2gTZTDjFtwRYtyLy",
  "key18": "5G3RJCoQQ4R9xxVfLpCFp1SR3Qmt16qPbgbBQbQjYERTUMxiK4M5sTBBmCxAyi1aEkv7EaZLdBSK1JBBdKyTUBNz",
  "key19": "5bnVMtR3Tjnb5uMCqv2RK6yM18EDbQyXZfsmfvk9E8GaEGxCtqts5496kwtEccsRtsgFg1CuFKWGJ5cnGKoidqKg",
  "key20": "4YTHJEBEsYWzwXmZEydg1jGAjnKTf9NB3PmQP1PG53WeTT6xvmtJTSDZgRUJ8DHFjfJHF1ro6WS9bXtnnNiiFpAA",
  "key21": "3hDZCN3Z7i7fJ2QskduL55TMZYiGXh7PAYsi1mDQDQ3bAzxU2tNf3h1GdQgo4RSXy2TGzLJxPGY9R8n5q8QaVtuu",
  "key22": "3BU4aLiWjsPQW9EcjucKnhhRjf9rKHmcAerf8dR1Dowt2MRaXVdTeG2N9n2oinDWkpj5Ea2DYFxyrzkUnRpBeAfc",
  "key23": "3Qs6qgpCBCuUCYzS1ef5gVFkKBn2cKyjkK7kribgdzkDagKVu5rGUg6Zv4zLg4PFrJzNSoNR1hNXkMUBkg7KWtkW",
  "key24": "VLTCwNYsnHvLhfhuVSXX2ZHA5WhSgDbV6c6upm5Ksa5CeDWtFRGufDcXuTYDxcbU2PhssZiUKrFRvsYjyp1Xa1W"
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
