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
    "iDnZ56xNcikUjFUPRtUN3quG2QiSA4BEPTzEt1FKkjps9gkjwRLiBCqVNnmr1qdi5CdnxaxRnBcydG1CEjKwYMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41UA54X5qXqrzyMgJBM9NRjJPYaooNimfSdu3isT6fR1X7gBQAhdnizpaAE2PvFJeQoGi6ya6V2HHLx3R4ZH6tcm",
  "key1": "2vcr9gpExdnx7SABXq7g1kN2BgxosXyHM8qLLYt7xJL5HdmNEGCjoUvi6SR3uiTRgK3j4cV23jTaZj24DiRypzZ3",
  "key2": "2ESv5PpzcEiXYNQLgvF1EKnCR7LCctR2uu8vAWoCaGWofRjE51x46mbWyk4LPG8kVn2m1h3SfbARPZxnPSQqbQoe",
  "key3": "g6osNDtqVV5BW6yCLBpBv16ApD1mjioZUuXWiMnJxZtGAZwxhxcqvFzWcGfWdcEdRNMhi6BEFFDHNgTTFzenDqz",
  "key4": "3kiryW6hJgXiu1ysXm7Y7fEtgyA3MFDYxTQw6Q9zHPE4LLh1fAtz8bVfuqFAkTVL3jVuBVSfkhSWp5mjZmW7vDn2",
  "key5": "5cTthZQxTexB3mLhaxmRLkQ3qV2fpUweTvF7p36S9aDwRR6gp2ScgUdBLFvw4dcpeDQdDUVgUFNXT9o3jRj51bHN",
  "key6": "4i1CRAPbvecBKhzCNiJxisffQADCdQzYuXwsjMUQnypTo16VYesCWMe9JF7BtbaDDUYL9FKfFnA8APqoV6rDxan3",
  "key7": "5uzUwqHzBnXFYzXBeR63nBFZ63cEMFYLPQPNFx5JrGTRaHSbGehu625fE2xMCYzF4Cxr933jx4d9iHbMwpxa87sh",
  "key8": "3jtPZtEuwc7UDBNimgA3bhiEZ4M5kjhPHpPGvo5xBLFjJRoy151B5NjfGCnSGMcbFNz6qvDJQvZuvEM7KaaPazCK",
  "key9": "5GUw3j2wgBKwJ9yqjCZBEMbvvM21VbZPcXspi6gcSJquib48ypwM3UihdHZAH8Ah6w17ztkUWTyZmk5bDYGFNzPD",
  "key10": "5a9wqh1AYkYwiULz2jaqiHaKJ7oAegSe8fAkuvV2LjmKkoUdmqsaaJ4KWNuzgZ57F6HJygJA7Xzw6tZhMjeWxoXL",
  "key11": "4zpYLKPBhPMhAmkqs1eACPm6MwacT9cC94tqGLny9ijhrdZ8eBgasN1SHMw5ehjq9yyiRyKMeTTWV6JZJwQHDFBM",
  "key12": "2kZJKkoUGymLmn5cUZp3V6EX6gTuiBp5fvMRKSSMeJ9pHAbQJkjqmWyRYBGr1KBAPG9ATkvS4FtCPgAvwkS7eKyp",
  "key13": "2QsR6hUUZDN3rCGN49F9zGTnu4gi6QSEQjDECzaRNg6rt2a3Bju7B9NY7utWBJRF5YeFVt6CGPgvBk9bTA13RPJo",
  "key14": "JJH63KY8sSbXDds9stYGVtnfbTAibhgcDBxZa1daKgZSQC2zVZEprT8SAYnubMLswBWyRFoy8Rd93J9UQvYQifp",
  "key15": "5pk43kLLDk8kbMvVNXHA8WK4Qf9USJVXDMT1Y8M49qMYeeXBPTGQVWoBsm54aqzdFGK3FLf9oWiBGbFpBP3DzBHu",
  "key16": "3xFR6Z4TEMtYnm1EG9SctSsZmcCNydJkwVcr7111zmMVLodutAcZGeuB5BJBfTafcEkgpGBytLKRBrqmfTgKPJFT",
  "key17": "V4w8hJn2Dm6xhwmRJW4jMqMeYt5dDG6tVWrm3zt4DiRE7ZZkJyHFcgL4TRenq7iQeoUiFwyqQYvRUVdkCRKBs8u",
  "key18": "5SRpvTQJmY6iJgwzLzVTtw1NqmcvajjAGcH7ywK9fMs1g3DC8jP8F5BtfaECDGWzgiCWe3HSR6GB7AkX9NMeaD7R",
  "key19": "9ovY37SnR3KhJxjyj9SAVEJFTWpkmrTbBk7QacsuHdChLChoPX65Z6MhL3gnpvzwmjVC5fwMwsjYbmVBhvYmLBs",
  "key20": "2sqx6Lzw5v7kvWAyDQbnYyKVDCbY9ZrJUDRQU5fKhmEqoQ2WuR1KLDDZsT6Yrra2vy7KbWBY6iSdjjLuSpBtXNaF",
  "key21": "4UYdJUfScUavu8CUsQsF4PuPiT2p3M1BTPgnTW5AVygpCAsVKVZrw3J4aMCwXXm437G4Dfk4PDx32s7jE5jMhw1i",
  "key22": "2EMnobQtsQ5Wj2LUJUH4gzbXvKxP4JzHrUvwxXoystBZMjYNSUJ1HVQx9hUdJVySiKJxxH4Pn3mVF62La7CUs7qw",
  "key23": "5XXnPdoZU1dET7XB1AW9caG22e6CJmRTVstFTveLKgeWfhAGMUwwuVxN5m8E1u4zYYV3ht1nWiG72Zdciptc1Q4w",
  "key24": "5pgwfB6WmjpHHKqDpc9x53meLEXdf8CHcgjqKwvbhh5ze5cnrX1kLUBGdzqgD83Me8JCJ8r7xUE9bHP29gD6Yyzx",
  "key25": "UsTcMaz8BB3Y4haE96ZHe7XMrwynT7Z4g7i9zA7YbEKb3CtBL9Xp2qUAhua6kKGgTmGZoBMkwpQ4mDVCNkJNLGp",
  "key26": "Jg9i9KnKTGQizDTfuLiJQGciRMs2m98RKRzxK4yDsDVZR76nLkff5Z2dsAsa6EETms41ve2be44a9ZCaTRY7kFy",
  "key27": "3oE9QjCB6J8jphcS7ztYTUhjEWdhUFK4DNZgFDKdmZdkNmdUSSBpVsAdjo4aZF2GpEiuYyWYwwrRRpBt4Lb7nqnY",
  "key28": "3DuuMMXK4FsSmxjjKNpJjZqf17ntE6ABcSvG4PC7WkxogHbrZ8oE2Y5awZvWWWHXActrXZ4kcDch5Z81qoKsiKBh",
  "key29": "3ZNQGiag63hnjziA4dTpBXyr1yFTSuW56wRNBUu2oybaWwr18N5yzfM4qaQT8TAm1Ggy7aXXMw9YaqmP7ecmGhV7",
  "key30": "22bGWyF7E76y5GZWwaqczbHYPWwENSKcW9DUtzBpYAzWnKENNLzCcG5NYGk3Lk4kh5B3N8CsdANt5xsmvQs8QUig",
  "key31": "5pWB6fLgmqv4aB9qGvLDMm3x7uryCZJ6akw5156KsRbXurpZGySBwWb8RdNXxj9KhuzsC3R3Xk8QyEdtn3AzJSgo",
  "key32": "4LkLHU8BTCQfQR7tqeze5ak4uX5PtBk78YfgUyz3MPvAz4cjaD7fz66vzQUhP1PM1E3ogZYGtCFgeP19GeTEbn3Z",
  "key33": "2pvduZFiK9MNmziN13cr4RRqFgG24NU5ifQfmtf2wb4LLn1HANrFgqGXo8KXb6WUUAWtpm6onawTPtcU2LHUuZf",
  "key34": "3YpmvoaBXnPWC25LShC7EfHCTkghiMQmLFR984mMnZmr9WCXs3cg9SFJyEPkN1jRiZiuVhU4mYUeyP5iv1tppFBJ"
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
