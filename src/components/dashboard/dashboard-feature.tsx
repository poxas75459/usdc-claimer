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
    "d1Xa4ka1JSKVX2hKXmQUEVev3DFX7gneEFHhZus8P5vCN5cNJ2vQQsQ1dvicjPE4prWUbyLXpZK9AENCs9zQ76S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MjK5MLow6F7cgcEmGcduDg5iQ2v6BE4ks3PRxzGzFbYv8k16hjDw2xB4BQyK71F7z3DvGtNDHsqZy7dNnu7Rjyw",
  "key1": "2VYevb5jPJ4w5Cs7nKfU5VD6UrTdTFTHZkxsFKzPhULBLoVwGXXeexktwgy7Dxhhqu6zom2cQ7R97XXjg9GZWkwX",
  "key2": "3ZavvdSSdE1EbxUNA7vJvQ7Xh1H1qeNfmgHbPf4bG6qda5w1sfjwNUN6a2sbVfXh6hGVuzf6LomcPmJyqmjztmFX",
  "key3": "614pmGAUKAxp7UkJgSysB83Wsk6z4A1KQbYnykqF5kfNRQ8w6yGqaZCpDKoXMFsNUTY12BLLSEc8WAADfNdTdi6H",
  "key4": "4c7FWAs75EAR7JnHPXMJZGcd6MZEtTBT3H7MWCRmuHRv7F9wdKbMmPnnt9LFCf4Eva9Pn5xoeWHM9xitjUYd8tGE",
  "key5": "2auUGoqHqEXYDDY5oX99tuZVW6vJcevnw8GdpVEKJmognexSWBCC3xxMj8c42MeavsvDQR1gCnXkWBbtf6gyRTR1",
  "key6": "568gu5uKp3tAtVNgpXwFKqZhFQxh8cUSDr36RuF9qakzCVFW6dFWTBD8XAJWtVRx6HA9tZzw7VwRnqbAQ5LPLdYP",
  "key7": "edwvuNcqgbZNEHR5tJNz8eHBhMaxdpJ487maMSDqukQMWu3VHN3uVPAGurGJgTqCSeiPFsMDGcNvMkhftawXbkK",
  "key8": "4f21whc6AjG33hgvjuVSi2Zc4qYLAwZ26Vu1r1L2bnbLdKHXTncmp4xenbaxhkZAWc9dCSQuCUeGTnWmqYdH7BVA",
  "key9": "2iwYZj8YNzFBfbCV1EEdnfsB4xe3tmrFP7Fzuuj6pFwULCRoA48zc6Eo47u4M7rjPYhguetCGXBy23gVCpXtJ52s",
  "key10": "3sSA31puACpJBp9yu5hbMAZLnEXDPuTrgYouuuZKeUat35WV6WkYcbeX9KLgS511axCKNBoEHEi7XNPug6yE5iL",
  "key11": "5qjRPsYmtZX6rRE8mVZ4yyuoRj476dyZBWkQyf3oNWrEcTMY28ozaQtVk9WCq4zCwVE44A2doLsuPazEDLaEi5Ur",
  "key12": "5sPTjUCvncFVGMH8bhoP2RN1VKvnBUdxZVc9NzVarMXQqxbrZ1kWNqajqnm8AzazAQkdfRSRsxoe6a52aJzkQjRG",
  "key13": "66tJtucADoKoFP8aEeN3AiDsm7CXFy86fsdvEeEgcxwqATGHgb8Eof3PWPCohZgXLWG7thi4FLRW4HXQpgh4VcdC",
  "key14": "XZArxs4QwqcEew11x1GfTQS8FRsHAauHNCwfRgLCUKfEXURhdKYcL4fKDqBAxW2nZ62jPVojuLU79rhoUN5dGj1",
  "key15": "hJZmobnHwwFmZxqKsPt5MzSwxQothWPkQiWTaZDSCubenE3RFxMGLufULGTVywhKFqaRLXaDixtowBySk2KRp4S",
  "key16": "2eZRmVRb5UEb8n3nUGjo6gd9tk2vKu1DB9NrPzLfDdDwtTQAombsBxPzsVukGN7bqbJmpinTvM7bzZ77AsvyGSqB",
  "key17": "3WkxwAnV2yRd2iwrWvGLLPbbKhEg67T7K5xJ3isEvb29AwK5nAiogtYRUGC26ee5yEf94Hi9whQg5qMmLs4XSgpa",
  "key18": "e4mauJdWy9GYoxH6Jqij3FEFgVKgXwVe9z7eEM3aSTcaQcteMsbtUYpArW1p4uGCvedGppYf3n2HZBFoqtRni9j",
  "key19": "4Sra7VSZpkHWcZNhzWMFx7c26iyxD6B9Lgd2xK9zKqpMdqfvbvt9yiRgHJBkm1cvTVNS8GhEoZYASngkxo3KvScx",
  "key20": "JFipfj1nBSoW8WcZv3pUGWwRk8ikEz9cyFV8zL43LfvimMSoFQEdVeSiKxEYsn7nS1bv7a5tdPGN7ajU6YFdPht",
  "key21": "RDnagpqG6TRBAX27x84HqpCa8FBuavkpYJYccP1DjusE3yKmES3LoQhNSwDAqLDA1GAsnWBL3jFkaPm2LJbcqA1",
  "key22": "2fUPQQdwhpgGRaAv79V9pN9q7ZPwYzpXjXf5evKbJYFrM7zAxahNoXkqsRRRMsaGJocdqC9xv3haXAKoeuEiomV4",
  "key23": "5MfjDxKQrsY48b94B952gg3DHeS5x9hkvzBjNp7sYRxCuw362hs4zcdSDmtsp4q6LFzMbYXq7zm9gMBbQJUVveas",
  "key24": "5AS2b8QtVSc1198huY5sFJayL36McMo2mbABrZd5QFRvp3EEgyReVUuVzwSaev5UQFPztiU2cGidqytBjwirTzSC",
  "key25": "3g52HTM5M4h9hdLzJkH5cN6iFtT8zf7c79M2Y7nnSSYDtytShZpDQeVwxPWrhep8MJB3dhfs9jJQHAHWjY8KPtP3",
  "key26": "5SaY8p6isTKYzesYW3Z94L3jqMDv37YV92HEqecLX88uTsLCyr8wahz2QzguPvSCB1VyXk4xwpAqhB8ZcfYXEcHa",
  "key27": "5dCYZXvcZkXNF8xN7YzKBvDNBNd3H1rTtjSiBv4iZtbwEjWP2nth1swYKtYxYD7svhNSPsUfhTMUqG5srb8amfip",
  "key28": "5qFAr8wjqej9PzL69FJVYnuSmrv6WHnb21SsbjXNvPV1EyLs1JkvKCaDmQFrfZea9LNSrcLAuFxFgoeUh6KPYnv1",
  "key29": "5Uz4vR4T1AtLUmvvXRN3YtdKLcrj29FDxubWu6Tthi8dN8TRB9Je1CMePZFBkR55p8tZwYjHK8SSautgmkRVrxcd",
  "key30": "3Fbd9excfDMNNRwofFdgnVU1WYyqzfF6P1evUFF8Xagff5TBwogQRJ3FSGL46w9f5p17o14VWwrHLnTqng9KdZk9",
  "key31": "4XNtF7DnKNSTFz4ogkQfjtue7vd9qnYZ48zPD6htVad6nXTJCZAR6MJRj1daRuyLQbFLNBufSQWXKCm3fBTuqbAn"
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
