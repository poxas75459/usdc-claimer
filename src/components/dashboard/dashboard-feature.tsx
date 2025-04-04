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
    "odjHbxQA6F4m8q3BLprvAZicSZhmt6Z9w8HJwmFEqyWHcfbLNCawXpFHHy1DoN1asJ4xRQM48LqRmbD2aa2qGEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FbXu5EVPyddWtaGoQLMDhwnTec8phnRYbPnTLLs8AmoTzUvvfn1SGLMNngh8kKPnixmEssG8yutKMNELsMd6m7o",
  "key1": "33G2qUPa61mhzvPTYZhZPxDhEHEiNEBQTBYhdmvtnxgsCfWzTsnuBn4YC13WwZbhS77oMm2jTBJHimhYEmAitG4R",
  "key2": "5dumHVfLJuFvFc3WhkuZU3d6UvDG5qNu6upxRL7EMw8D3ajp8VYM81RgRJZmwpUVV74ssufEHdh1zA9hWgjDpQu2",
  "key3": "58zwtD8TmyagFghYprBQ6KnqGvWSULeY1QdcjgogRKCPqNkHMPdpviLyutEXNkFXUU9sP8LpKcihxjNNaFMC7WMb",
  "key4": "CJTcmP8L45n2cwpitFcFhNrmGybAJJn7YcYZvHaJuZEf4YsFeNJ4Zf7ak26nDx6obJu2Ky23RTTBJ8FEW2GH8Re",
  "key5": "v4qiyDNXBKofiJmfjYgXsgnhKFcGSnFJLrEUEdMjeuijNRA3HLrFsFdsFbVQZuwUDpZem3pZMajFfDF3j4Egvhg",
  "key6": "5nU9WES2Cgz4RTWAgLmR1NRe6BVHt9H7HfthDuKjHqwKZhuGaHYYgZatQSi2oiSUsQQGHKc2jqw42t3m2Vxwwv5w",
  "key7": "538McX6yCigakpyuWMUVpmzLNnFMWRJgiJAnrmwMNhiXsKzixJ711yMNSqJt3XtcF6hco3yercuqvsBzu8rrZHrC",
  "key8": "GRz2Pc4e1BmjF7ZmEheBX2Jd4Uson18NLBBQgTiFGBWVYMJmahpeDV4QbKd62QmzVN19QoHetN9gyJLsZyf37z4",
  "key9": "3UJx2Wr2r3HQMqnZBFNEce7B8rCcVX2M155NGrVoZ3WFXPS8mrJFBtK2g3X6k2qXmJWxfua61xEvQ2XfdjVh7EhM",
  "key10": "2YfTsgdccy7cCFbQKjkRau6wHCvP6mF7UG83BSD2efMseddXqPMHcJbJ3WpgFCTDZTzA6BecAKQKEXVNKn855yZf",
  "key11": "3yo7fEonUbwvZCZVmJKUqLPYTbzroxUxqpgWu2kGfD2d8TjZ3GnAVzMtTmWuuK4oHQTvQPAiASdhFaPFoQULtjcb",
  "key12": "4bNsuq2ipWZtwruJedmMngp9MhywmSknV96UhzTwRSmda9KXJtu2GqQngpPto7hhDPD9XajZpUt8FPETtcyVREwK",
  "key13": "5XA6i8yeicZTbdYWkQRTw25Pc7yo3PhgJva7jrovzQY5zhm4WSDtqBntByqdXS9fRPZRQh5HwrU5w5f5GEAYCGej",
  "key14": "Wu4cLY6G9SKd3osbhF8vqS4us3qqCYPTcKS7Kx4hxiZG9W2Gm3Bc11nfMn5ZTDJgdXMNSNc6FjPRaSrYLBYVfBV",
  "key15": "2J1oGDDbXjK5GHhipGwEXvMNGLWVsfAannaJ3xmzMCf6nJvWGswiCHbWpe2utNQazk62Ss4y2yFLfTLwFgSFFk6x",
  "key16": "3L6VF5gGDL9unu9GmyfNcvnPTn2i7p7y5ETuE9fbNdrCPLWqPt5Jg3MoZBn7oBDDmvKGJ9okpPAouQQHHURa86G7",
  "key17": "5PqSi5N1o8bPYprJ66CNsAZdFxhqAa88iYKiQ38nwBuJN5YFaNXyYGNrXqqq1wLfLtpAztf8pH4xDgn42w3UCpCb",
  "key18": "5F1bsXyVxBAdUuUL2jS4USzZNN6jNyarMQGvHPJ3UW6zxE9RMxnXzXkCL67rEF36ypMoMeFqsAjWbu7aysdHkYYK",
  "key19": "5Sr74SXpYqmZFeLbLmTke2MJrJ2HZT9RZRDfW2pTdqCNSNELN7DBFrj8Hb5UDRp8vVYCaGtXwd9qi1E8Tw1CUd3z",
  "key20": "mggrmB5w4xjAtTA5s5sfCTAjGuZJqiQ2aj8xd216sgHmixtC2tivX6vcgm16Z8N4BnfFe9FdDerKPeEVY6wBpAX",
  "key21": "4Ci32Z6E4pUZbNz1KKMXUzzay5JwNyQ6JFvvwap7nNS32YNMuPPJCeQcFgHFbhQrGitJaKW5GnNNtWCzvCKaNHYP",
  "key22": "28cLz6VoJ9vxZjrUHj3kwrmxWxJQk6WpqpDKwsdFxDiifxkKiEU2dkd9m86D4ZstBNBQdRftKUon5oSkvS5pstfj",
  "key23": "28Cp8FD8xbrDRQpY93KoTHDYXFkgDjzWbw68n4zin1JfArpE93tiAL9CN2XA9mKt9R4BJSKUq2behzoKLUBmVzt8",
  "key24": "35R8Y9EmxH8YovGKuPmFTAt8dk8SSXXpK8D7zxNc7SJTy7EatDbWmrHNT6Dmsqi6Ysn3nxnSPirienE4Rv9FY7tE",
  "key25": "4vwjE7nsJDdfraZw5SR5c9BuhF9WE2G4TATKY7VYwRUNbiHRyVV2rFJZ7WZLdL4z7xbnUGB7oyYNHNsmHh3QHiNo",
  "key26": "5VAa725pLsS1tjKhmjcKJxVLEDSisWvCeKY9sfJGU12N21QKShSkpmtw3oYkx69XyPaBzFudDfgZ7F2MP1TJcihX",
  "key27": "5xhgTfHzesyuiwz35sVd6cvMjLwWTfpyvajDAeq3YutfVPt8875PrS46qMoXDfopi1Sm4fkdGZs9yiGxvj9EDpzr",
  "key28": "4FnoMAzgFMxSKpt63FsMPYTpsVjCGj1bGMNJGetDBGcgqH6hM1HrMyaySXXZ7tMTaRgUFZioP3nn3jYE5cv6jezU"
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
