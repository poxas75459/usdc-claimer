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
    "5q7fPa12ozfAUsFNtkqd1aVfK9s6MbMcDmAWMCDuEJdCuMbMsFSQdkqwcQfUe88eqEow2DnUVsYv2QG21Tmn943G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oAWkoh6oCQW2Bn99nrZqZojVEXom5KHJwMKKaeKoGMwfqiyazMLYrsgpPPdKpWRksZ96gH5kLVE9u79m2dxbHmu",
  "key1": "5PQUsSFxTZuMPK1kheZ92QLUhxsMVUqgmrhf3fqEfDo4pEnUnbxb3k4n5TuEUqG133xGemGyCGCzNhSJYUK4Tp3Q",
  "key2": "4Q8aSBBLmGPVsRfTgPZSPfJgxmdNWcVCvkfyQ9TZ4JriKse8N9gKWBxHP2LgQ5rpshtpdipq9SKvSUbufj62MMyc",
  "key3": "4TDwspmUfWwqK7gJHJ7LrnmiadiiGLGuCx7MpzRNBqkrMZNVVj6WKU82QFnbvvuyNPeHXpSYnX121MVA41k4PmUT",
  "key4": "2rn1QRMZsUvWog97wzEfT1iJhSeg4rdJ296GDyHrkx7a4pNL7cskLgGY1kwj8DyEQfpWqHKsD4bUQwd7RYQBzvQc",
  "key5": "5v37ss8AgSs9ALk6CNxHSH1Qqi3BxBjX9oXx7RXriVs3re71QxY47SevcefPgvY2ciBiR5ohWanaMBT8btmcJ9W",
  "key6": "L6qdtDCjeMPNgdiVXqcBi88k6Hh5EPdQUiVuAPnGcBvphGKgz9mFTEhrJhbyTXz57mUXdphYuP6DhyrzuBDYg6p",
  "key7": "2DU65iihbAB2dv5gZLsPSZEWgBeYQpQgoXcwaBussCLPi66LpEEniuTkWYNvBJJQ1FpiwT39BPUkFyxqazu5jjsQ",
  "key8": "ibGNR6RfjYZKsSgBxuydB3meY9jGzvEe2i3NnTZq9nnkxXnjZjBuJwiZCAciLg91Cxx5nDkSTcdYDkLchtzN74r",
  "key9": "37FUAjLX3EmhkoDY9hbaGmzNxoSYXK7vhpVMx5YkRCsCXFraezr4qT8dCAqqYwoLUPLiobAFUzi19686iDaB49E",
  "key10": "261oRNQQujet937JoYjpZfQ9xS7tmgsBrmced9tJ7vDBj4hkJERJm1fuD8shEmUHk6YuM6rwbmAo7zRgaiPrXFcE",
  "key11": "4pvfm6ikKYfLNs2RooiNsfBUhsQyjdPtf2n69K9aE7qjePe9NSGm6r3bU9YzeHTf1XC5SDNDUn6g8QSXkzTc37o9",
  "key12": "2SGNdgU56UioDmX2eq9JCswGFX6gwmb3VHun1pyPrj85VEH6FDcshzvonwwDD1h5jyxTpZnhfF7DRwwE6cxtYdmp",
  "key13": "sf7Szw3DLctoc6idnjVaZUEboFDFJqTqeyMRb5VWfxW6GioskkzwW3PDeMkHMczMtGyWaXWzfhqUk1zGFjkD4cv",
  "key14": "4Pdcp46LMojCcRXLK8EVEWLGGehGyFVE6QouidmqeZnKyfTrQuuPKp2wrj6D1UAcesYBVePHBZsZi5BFX5QL8MRY",
  "key15": "4SvSAdmWVhvq8C7hQDiEpWng55f9dpPQuTwkpUKCYXmyZifmcVEQJ8T2VNtrC7jbJkeiXQFgzscugcsMQ2uHANRK",
  "key16": "x3gw6o7k5zRJXkUtpEGgF4exqHrEGBue3PGLYyz92cHbmyyKCi4qnzbjXFWgN1aRLMg5aXN9GMKWfWLmkp1VVWB",
  "key17": "4DNN37m36dATriMcEi85WNLGoutNHL1EMd3M6FaLXdZZwyrxUZybJcmUjcDVm3vhFU5vr3DcoKrbxVpL2MZbkm56",
  "key18": "4XRj5fUJpg1zUB99evgDee1CJqfcZaVACqqeRsRTLeXgQ3WadYUSYZpMsVxtSJUASVTYQbwAR6XVvVnkYRHBDx54",
  "key19": "37zGy8hXWDPZu7t6x5beDh1x2hHf5v9u5Y1GNUBcxfa6vLJwJHR5s1pm6Ajr4DrYYSWbtrMUoZuSPcra28nDjBwE",
  "key20": "2Kp6YFxbaS7ujsu1w2ashnNhZLb9gNpLtaw5xpwQJKgYmSGTJLjVGkLtvR6Fj7VR3kKq9c22hiQYXc2Kby5bm7A1",
  "key21": "4w73V6pBXzH2DfS7g1BoxSG4ppX8AFw897hueBNffKj5a4j7ZpLfic8VFynycKUCFDc7fdppAh4uZZiC8FnyRf87",
  "key22": "M4QNaBrjhxPXtHuntLNvMU5ze6ZRjiue9frWU8262bAUF3f73UnVYc4fxpmj8zteRKqBqgSNewXcfSN8ccqsCHb",
  "key23": "2pf4KgC3UjevD6TXVPSrQiXSmdmy3fEXJ2XtDkB9DJuxNppwsh25JjZ14Fq3NS8oC4hsixwXB3uDwFzgEQS4QAYo",
  "key24": "5WWDqPxGfm3FJmzvAHv8XKhCzHnppDFJdPHunZ4JBcDEP7AAYD2w7NANXzHBJ7tRKmEAeYpijcFkLcvPo5t9NCHj",
  "key25": "wobQafQSAA9iueJRELWGX81CdRwcTZAvmk6KySVqT659CooZywTECBodJj1evo16rZvyRD8Hggty6NqScdWCrgn",
  "key26": "5x8EjgwNNbVCMjcpWhxbM9pB39X1zkMYPgbNNwAqsuHKF7FAwTM9pncB6jfcgt9SaJzBsXCF6x85wPvfARZwFmQy",
  "key27": "2vdkCe91Hko48RsKrVFJEzNZw1Jdn63PuLpyv1nSwGh34MvuXfFYKjWx5cUpTJYXaz1WUVN9fiGG9FS9PJjoog7o",
  "key28": "62Nx23Uz4JQRwXqEJqAu5FNsFxKN5muM7kEBjN31dp9zgD5YVs1kfh6JnM7rDXhuSJyPyoCTgFqHYfFDadThVEkT",
  "key29": "2xBfaAbMVy9jf49LEwXsAuMa5Ew6SBwmUqdJxNa79PS9cjcDH8eqYNc3B9m1s12Yxg5Eg5ZEdefwmneo2GU69Ri4"
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
