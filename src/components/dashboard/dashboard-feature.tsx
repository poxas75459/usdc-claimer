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
    "4doj8ctbf3xDsqPJ365wqAw55XfQPSES7tQDqv2W63VAquSPydSnJUBTLZMZsoyZHLjXrsb1i6CvaRu9pWm1qZNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BvwHgAZJa9dDi6FG3VAzH7AEcnxbXvH67zX2GXtzW8EWS31ahzbAtm2CbqVUtwoapMkDrHzy9DfBqmYRzV18QLA",
  "key1": "5YZ5iKDqqzuWm7XMTx2VV6jzNSQJRG1MZPdfBP9oNoxyRNbgDj1nVyP5cVDH61kdMf2rJqj5PBFrFYH2ZNYUrtf",
  "key2": "2x1nuGYYdoNRcH3LcEz3Q4QstPg6ve1YpvXM3E9T3KBDmHTkiyMQdiUjd7qWzSKSB6XpVq49weyanJTB3KwCUEdW",
  "key3": "5L2VRZ8HLuNeJKGUbsuARCUfpaHr31aEpWq8LtLmjsv2prVfa9v8ZU9EK7V3sPd7Wid4U9FmvjN6mxHzQ3uUp74x",
  "key4": "2wxRJvD8zXr8Sf2SJmTaeBNrH6QJsfwMpr9kubUVFRNqo3sxT1QyeYiSmR7ViCFAENQNS1ESuZMwVSRimUXeXJSR",
  "key5": "3ijpL7Q57mQASscdnQAutXM4xy5qVL3CABZVyZZuzpqAyuUPXbyWkxAqKUgbFJ8ruVFoQybdj5QJTGjxxUr7gCBU",
  "key6": "2D4MD1DnyQRL2tbpzrTA3Z93UJEx29f3tBRovzzprXGeDkFqRoMs78u3HeB3XzktekxvxjF5ErjwPNUa3PxpCxEr",
  "key7": "3w6kH5gKQzdeKmWVTeKwcsANjMVLnX6z3e4Bw4srfDKwrzatQbw1myh9pLjMzKFkCSdvxPZyzv8QRb7H8G3bu3no",
  "key8": "2f1RrTtszbp6br4sRiGNvZW8siSmB6xt3YHoPVJp7nzBzq6MccR9uPNrxesTzrCmtfGr6sgFPhpHqDZ1TtdeH3VG",
  "key9": "4B5K9UUQ7qn1jW4YxzvMZ2KDksRi6oCeA9BvL1o1TvEyN8L4kw4eVPYF6685LYJFBNcGhH5Q3ALjAKfVrqvsU2W9",
  "key10": "azPLSKpaJpveLzCDzx9SMecnnp1p53Jmd1kpHN9mNTZoigz4YmXvVaWkKDgTUXUAntpqGPCbvLVucnZA9assCR3",
  "key11": "3NXF5HbuYXFLymdngXh76e1RG1GCA2ii2LSRsNekq9CV4p2R4gfbhc8W3xMMr1ox5eBhpfRZSXddcwo1YPS3Nqe2",
  "key12": "4M9D9obFri5cEaQBeewGAf44S3VYcK15AYj7m7DmSKAFeC3cazGcRH2sKp2rSaRL8ykj8J1YdBhMK3PUaXNdBDAJ",
  "key13": "5DungF6w3L9YedLYGiVqsHfXd8dvJsJP2VTwbBbn2X7cyNXkPwyCDnbfAjf9KaGmsFXvPjjAmjWT24XtFWZKNVnP",
  "key14": "3N7siHH2a94Hz1MVp4HrTuLWySyCge1XLLKzxpg6J72aUekhoTGa8MtstbcTAUkfC5NgWDUsMuYz6WkFnHaXwb6Y",
  "key15": "c6hXVcm2eZ8N1D1Gud2V8fS48RLjpZNMsDStVCzcbpd3zdEbQFp1PgQHszq62PminLuW8J2mJNM9USepv1sFrp7",
  "key16": "L2at1Y29YqxmHNGNcMxNXyaPr5oafiPifjtca4bM2BNcM35Pzdoj1ujvJ3m2aqEZTfT8qhcuFyncHRBHSnmCoHL",
  "key17": "2V21msHGtLJyFnYfcw5mufQe2TuZ1oZEbDqr3HZRzuVTMJj3xhx3RFWYpXUQXEew3QnfZa9oieCntkFufDSwYLdJ",
  "key18": "2sQjimF7yGXcRkijMNfm3v2VBJaKJmK8zZ6xXTwg6sZUJnUrXBbx5PDW6L22Zjd4XztC8jWD3yr4dXsLaxadpxwR",
  "key19": "hEe864zBhbgRLo7sSjxWRmvZB1ibY2xVUNmRXZzkrtmcNtK1vgEbFXGeXtbK5oSMcfkVJpV7foW9kojhEZytnEk",
  "key20": "2DZnEm46ssq9XQeA6hwPsXJnzADqQEBSMf6pzaQtPpNFJbF8BPEnFb4fqkfgWdwC7mp3e5nTBxStepNgLjndfHcq",
  "key21": "33nJ6xNrGJGTC6oSCK4EZUHu4oLW2TxtFcvCdBwSWq38WE9dzbAqb2kyHqms8CH9enhssELWwyWsCMvZ13PyyDRi",
  "key22": "5ozQbuyrHRXW9cRSUmuFrVmutiq9aDXJ2pnEGDuf3w5KRZaTiHXfQFqJCVQ7UMGoY9QutxkZev195Fq1ZrmYUePf",
  "key23": "4qjYShDxFDKEn8n4CBSsfoKmB9uwhJEFBYLcycZ3xPrPSEZajSJmepX7Q8exPCT5rM5u61WrcBSne7LWi5GBMDY1",
  "key24": "2DdrKcuyWRS2pzuDSaL9gHom38YMPfZSM8QJ4uarQsVTa1eLJ2txNunB2jTNExwiU5ESCeF2CWk17UpCVB97NfB",
  "key25": "5D28f96QNtM2X3tFWpcX9AbzAkteFvrxWTRiyKJkiE4kBRimzHgSRh9cC3YtcZXfB2D1hkEaBFxmM6c82Jkibb1w",
  "key26": "2W8aUkZwBLzaMmZVDjka9KXTku2YZDATVh1yNjjFGsemBpAC8GDQ49TVFwLi6saNUyy8bUJBATGsKJg7ebqn7CZU",
  "key27": "21CyDC48uLToaTAEhxGwfjVR4WAAYTkxP5BjLoiK3cS1Lffad7rmAggcRcd4KMVMyAtDuiCSjTvWifG4beqk3BHo",
  "key28": "4veq5hPN88v9wRv8zNEpbH16FZwwuJ8LWQvh3H2NpGv8ALx8EDPVbn3aCEYdExi7dkRTeiQugs6E2kUu7v8XM3B7",
  "key29": "64Fam5CGoh8Dfuskk2BR3GoAfAGwNGwBjYRrBiz7v2KcMLn8RKTL81r8pnuX9kKdQ4vpai5qGZ7nFyXEXyPNxu1n",
  "key30": "wxCXUMELdJwhjQqtCkJJGB5ghgBCF2kDGMvPQcTyRCj5PoGHrdtFAbbu7YHnnUwGWC35DYTLwkwiU8yAEnmURzd",
  "key31": "3mcUjXw1Sob1WqYvZx4hHVELEX37VxhnaEuxGqLuw3ukK27wKEW9oHc7JbdJD17Gb42ZCoVoYynZwU2vb2MTqLov",
  "key32": "5dpoacL3fY5wsdtnbvLT1zNHQJCQfacY5QxVetMGXhFaTisdKQ6WSC9U7cnZz1mS62w5jhubDp434NJibjwudGSS",
  "key33": "219AxRkHqrBbPANeprYLmDD2qsSdbbagjwdk4vUAZr26VgDYZ4MhmybFX6guoZnKBhdHp2X6day9hQBzZxizvmJM",
  "key34": "3UrQFGiEs2zrTgGn45zptHEJsrxX9QjsGvzpgp8LkTZdcmonR5zWCrkMmTZb6Wgnj1gCoz6nPRHgWMpTsVD1iXMg",
  "key35": "4ZSsRSys1b6iuQp3kLNi8G6vxojDfu62tBPvj3SfekJ2gQSNTdDiw5wvAkmN9JdnsLghKUg14VffntGzczcnD33G",
  "key36": "4kFGgLrvEt1ThAXmvrbbkRtLSP1G4UCyM7uWzhAnQAgdsMnMV6dENA2CwHjCxqWu6YfoCqfWYzPr5Uj7Y6o4pSx",
  "key37": "5FhRhRJJDYdawxPLhEdHei6TeJkS6HQ7qXDTbuUFjyMZumPR1EftkD7TGGwkc6nbGT7Kzni5hJeD9z8ZrAF1Ymkp",
  "key38": "4oMbjip6AyKxVS4iWVLJh9Vgq8X9dbw17KHKmpmp44iPHHKE9kaeLVE89A2nS75FYtNzXLLzTit38zKTkNC1qHZa"
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
