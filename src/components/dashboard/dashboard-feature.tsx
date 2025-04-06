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
    "4Nf8qYryMTeVQBpq6Qtf9pRPhDnYNxVcevs4A1s2dWv6EYeDcicst9TxoLhjUkhXgWod2iN2rMAvBRFNF2nRkRTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BWM3AgtaXErc8ZoDz7jHNWxfsBs1DJDs3i55HCL2Y1SDCKqjmg8mxsUXtr4G7K98tVdnXk2qbEzq1uUZN5EAbXq",
  "key1": "tnfy9aFZK1LLMjpbPZqs2AftghodZZA3dJtSadXN3mW4rqWGGpbxoVmegUnykXeVZkqzsJF29tY5B5o47M8HvC5",
  "key2": "4XWfwL18vQVraypLDeRNPiddiFib8c9KdaKtebyFeKZhggh2PTgBePh3FBmY89gJpKWrSyJAtaz7tZtARZYRVmiT",
  "key3": "nEgChMrKizun3BPzXykFgY48kYCZR5e17HP6Rc8HM64i3yJ5RjVG7Zuu4YVqd11GQyvHLEJp9x1KANz7v52iZF6",
  "key4": "NUHPGkUMZMAD9RiZ5pDG6fRN1UZDEjAhxZKwuPZ2PjV9ifk34Wdib5yShLMnGVi35h9LQgq9gtdQqVJaRbTUHtS",
  "key5": "2tZ3ZkiApR9CnHcLBrpJgZdGMzLYoNNuLzCfmu3wUMZ6crF39A8owWe7PFoWqvLJGE6R2u24sufeCXrkXJ7b1JVL",
  "key6": "5LUtmawVR5SWxhTLurUtXFcjmr5M8Rg9FpmrUvKqhm3tHnY5WnZUC2ndv9xXhN7nimokCGgpxdVmK86iSH9J9Rvo",
  "key7": "3gq8aKjbsdNwMkskvAa6o7BLUxEfSdpWzEiNQgNYFM6RZ3pNxDFVZjvEdoXELYPka4HFoB5vS7PbMvXVXqasvW8h",
  "key8": "4QeNdrjEmrgt9CCwKhvvyRXtx1apKkiSnhSxzHXFJu9pvrQEKdCkX7p5iWt8P2KczdR9zN2ma8wkZxzvD6BQXTL1",
  "key9": "4wWAzzerSaeLEnmTsCnDmJeAwWK1TRpr7oCKfZsK5cWEwyyLVgroKKiQmupDaY7yxrc32oQBFTaEWw1q5J3Ynr7R",
  "key10": "2vjSx52ZaZ5tVUfuZzRyaY4NUZNwVnih3np5F8R1XZaeooXW96yax7n1HcVKS5g3DqHvi1pTiFR1wnxnnyricXYe",
  "key11": "4Ltm9uhYkXsKsBiauvEDWYG3ZGehKfmWEahtBwdwog7scUxHixdcB5H92Bkc3VUFdG5GTuhEaDhNr7gwiAYdhq86",
  "key12": "5g4rVs9wETNJ4BVNCtvSgPFJpu1UqgpedJAUwLnap8izkXvjqYDWymJRhvLhLpDxdgJSGT5vhZykG2fTDHUFP15C",
  "key13": "65jcU7WfBYDbxfLXyyidAa9AGFqddamuZeHY1CxczwJGBVs1kFFuR8WREko6bZzpLEhWuKoyv6VtHfK77tV74kf4",
  "key14": "3ky2afxU9uh2DAcYsGMF5rwk3x8zBr1pavKfxfY8srER7iNbhtp75tnViKqnNGapXdFfhXrKVqobQ7QPuBcGpESZ",
  "key15": "2MYVBRRHkivEyisy1X5epFVFwPmX5zQUACfCeWkyjNy4dNVbXrZngy4q6aQTDeK7BzeUYDs6RLcTN2bTgCsufDpU",
  "key16": "2duMoi51DWJ8H4pShHbVp18TVBMgKLH8Lwi47pkTwKnpBXYje5dCSR2DRcEbmsTuErnu3an1zPn3r7gS3qa1dMrn",
  "key17": "fZV3jDNaH42AS1ZTEGCDRPDPoatT9M7DSwnut3VTMBNXua2iKZgUmCMzxhXqnFp8M5wWnmxkGFkuQJ9Ad3vGVeV",
  "key18": "3ZzrSyE4jACXByyhEdZcwpxJJHAyLpYjBAce99TAbzW3v3nJ3gpo654A3DyAbt7Hh1WCtdxTZ1keMXCjbgcMB4DY",
  "key19": "3vH52i8Jb5UC2arHnUJdCGmWvcXudYWTBoZKNaoEVtrVaFyGqfRQZSr4hDBP2pJK52chKznGV6mNjMBwz2Ls42Uv",
  "key20": "3a2mnXyrJLYwcSP7ggswJ35s7QBQ2c1rC9APPhpqpjrWms46e7J9tMZ9aWapp5PMJrcpHjSxNuS6aTw1rrXe78L7",
  "key21": "5s34rKysWrvnpytEUPX9YZy6GyxDTVzmNcrNbobzMemiq1hdFL14wxqKE5Z5zE82HNwoGNoZrSStjze11ThJfUQy",
  "key22": "5ShBzZaK6QB3Wa1dDMZPVgNSRwQvQTAWRv2yQMJRe8HH5hVS2zwNavivK9mUBBJNLBm5frVhkKBfSDoTnge4qTiW",
  "key23": "89LW6RfRtMncSvCqmSyG34j2p4G9cKZou2Zhhsw4KhAaHYucrGMqDCb6pZpw8ofRioZLo1vXxKREovenmskVv9q",
  "key24": "4JYsjXUpZoPBAvWVyMLcGAWUgVL5a16NP4b7KYgJqHJTS3o5N94NVHtVbUPzZG78bEq95c8MVsG4XY8wR16ojm47",
  "key25": "4ZX45Nt56Hqw6eLExKjLx2dNVDoaAhDnnNHDa85sdLEhMb4AQyb4n7e9BDrxGwhD1juv69ggNoEMNwHqQ6vkYz1U",
  "key26": "4aN9m7poNnytxGmS8DWFzmaxonq9VLzg4RXQu3m9sm9jdeAxgVbpxAZEq9eRdhFdjJnYjptjQK5f5gupL1BiPbBV",
  "key27": "3T6NjdFx8cmjY9mr5JTJ32Gmvgx5TBYfsNq3AXYF1psNxvf8pKHyj2yEYrEgsZagxbzwQ9A7gZRbqHa5tFnRYF8u",
  "key28": "zLyLRKcMDZ85kmrfBpi8CTqqopjty4bVVY48iCMFZcyc7errirUCpQcSQ24Dg7PF4fAF2ZofxdLwmGZurCbArPs",
  "key29": "59zX3u2jqa5M65QPajHedPvDKhUAYALn9wLbkc6NkmaxwB2ggBQASnDmGZLgfszUh9681qFPBeSqoMmzGaviwcmW",
  "key30": "5d8PmfkkRq9kJifuMgxJwqzhKxpr2LStmGfZ87rg6tNsgUEg1UoviPy5BUNa9AXohuBRk5FqJmuqmue7ytFsUMWQ",
  "key31": "2Y8G7mi6m9L4J3vrZDD4NrbQDxJAZmk1oNB6EsaRLePDn5NVFc4p4c8SnLsA7DQD7J3hbysuwn5a7Rihr5DUw1NB",
  "key32": "4Dij4ATEwZA3gKzod3fRpgdVvrEwZfY7Unukiz83LcuMYwJS7KbTixM1arpJwTfpJLpDBLYyULdq4zfp9eGHwCQg",
  "key33": "4qBPyw52AnqXfauuY9HCs2NCYXN2qNt7RYvmTvPuN2HQ9SM6QyjfaZggHmPpMuMEM1rL6a99GqcW2ZKVdzA6TVwa",
  "key34": "5reKPn96FLVDRMyLP4YEP3aTHSUQ1sNjrCbjbRUVgurC6BXTtai9RMQmYDw63GKnpnsE6AQuCfAVr7rb6cwddJ6T",
  "key35": "3xyoTWU8rAiHPYSE13FQZW8ZTE7ngQ18AGjACVYmv7319B135YHZasqr2H1sasaG2uDqZx4EebXmCEmDmqH5gvsq",
  "key36": "5nKUGDbQmsEXkjgqGb73grnbCkxqj5FSvgrnmppy429EudSg29t2qgFuDQebf1BpesPUccpijEyBoh4NeJUwShgs"
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
