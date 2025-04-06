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
    "2AfWk6XaNLk5J3fgi4KZ85yEiVtYNeQ1raNaZau9dgp8KzvWfDmmxqgfGXfFbx3MHpuAKvcVYP6m9pjTp44UyAc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PabJ7wfBvwELu9Szx7mBYBFeVuTeZZWmbi3QJzuqhF49geAYWWVjNtCmBqnnfz6Dza7MPpJp5A5c5GpRRBivNQo",
  "key1": "5G7WB8aBy6BL3g7yree6UQRKJPYhKsWYFAQg54utNPGotW17EAZ5fLaUnBv5is3UPBY3Ntd9XpkPQPLy1gVYHBXW",
  "key2": "2DQWk4Mca96TFhUTviXq47LfanHKTBRKCxPZdSBWHWqj8nqFi6DPuv116qiXJEVBFSFHmWo8AiX8F1Go5deEdT2T",
  "key3": "8ENyyMsdrXJjsn8qWrpdJhaLPAUHXTkPC6WyF6PDCh5RivLapMDp7m5eQ5nn7DijhWezPiTNhaHTJb8xm3tu9RJ",
  "key4": "3NxfGsXmaSkHWVFL6gvY5WDijVA87jkwxytRQZq1UtiRkPebY4aajSh45cVy6Q1zz5LLi9pD2VU861XsLzj8WtgP",
  "key5": "3ZuJXMZNFxZZdaN2UAfLjF9L3uTa8vn5V63z7Sf97uYHf9Cco5RbYBKP6HMFbpKPGB1M4ikH9dGEEv4h3skyL3w6",
  "key6": "woAvfrQbgyHmkJjrLo9wEQ9GAwXCabBx6NGBRwwKoXt3BXHcWBQHoM4UZ8Jra8u11gHHCyMDhKGhmarxNmzFVdx",
  "key7": "LeWXVmeboJjhpGpkDvGRMcrU6uEAmSQdZkwpZUJaFEDtKRSWtke9CiTKjBMuqyDNfCRoQpc415AJmwyrdXArjrf",
  "key8": "2hmWtDYn4HXne9AjntktiWgKRvSJ52x5dQgkw2VcUbhNYFf6r9g1pzNaQiJdM5R1JF73p6iY9LDC9sCrUeS3gYj8",
  "key9": "2rHjceZsH3Uc1mB5u6YQdr5wo6wSCFHR8JFXd6TqMQLCkAEL1cHTDPPJLCZPAmRoNrYqECtT1PsuqCNPaQZv8kWZ",
  "key10": "51XhprR4omfUQE6hyyb9oR5sGFXbGCMuYJsPK74mrhd2FbDtaPZqkvXyFksbPRQSLcJYrbmF6SS3vn1fjWyGj1u",
  "key11": "3XEUauy6QtSyeUUFjqakR5ARgHbmxP89VVtWfif4FrfcRSiT1rfr2rbHpjL59VtaaHPVKSfDdNS1317LySt8vosD",
  "key12": "3GGqSS28sHg6e9x1uaip7jfNyvPi4cqDbARskfPe6X8Crjmf87SAr6faiEgooCL1HSiC6QVdRfhq6k4uLhXP8oWJ",
  "key13": "5WdewApRWTe9xxDaxr2FWETCCHYqrVwUK5msSNkbRB7fuunGWhdZMkwDibLmmzbno4sjbQPaV9g7wib7ZdgnMd67",
  "key14": "2axaF79ijnpDCLxbYkKHazvYP5hcz8kfC6hNjDp9CzKBHAN9Ufi9rh54aeQbFSGTg6ftvWUiPSsN8gRqhpLq4zyC",
  "key15": "mfD6fsQbWWnVisbLyFRsfZGt9566vXGAd24Bq1EkHcLEi3B6kw4iSe3Jo1HnJUxjHnLtRzyZHue4xdtKCFnNCwP",
  "key16": "2dPCxZEKVxyegmft98MZZLNFy8G1bx9TbvTbxNsvzEath6zJ4tXSj5iPSzwhAFN1A5Vi6qu1sQTS6ePUPj9UuHa8",
  "key17": "64pfnJN8sZwjdgCZUxTvg6UXXcM2Zi8yf8AAtmDa139JCwgXREgrtTaFfC2bPHcunFRyhcU7XKXy1f6tGUBEUMbr",
  "key18": "5dFrsYUFPoptKyFRKjSWN2oGnH3fZb6efN8BG7As5T55M85drLC2LEToKt5qCzEniGAtXzvrTnBQwGEuZGmMo6VY",
  "key19": "3hrR9YydJ48aLpG625ffDpLMdZ97baN9mPFccoVAEkUqVRaZHSmwJAsu3EFmAen3BThkwptfaiajFSrtBMhdiino",
  "key20": "3H9WXfMQjUhRfEaKwdNttoF6EbM9GxryJYuSUx5xXcFPaY2gdjcWD254rFJDJo7yZdkjyEporYNwaUBVMuoiMCHb",
  "key21": "2kFJcqaCoEU6VwHYKzN98BU5nCyinYMx96tQ665rahR4n4THBjwxMp6iUZ91rQQY9BQy72agtAgDkpbVjzVtxACC",
  "key22": "3VReE3KkMXw7qRfbmzSD5XJGKUJcdQNpbfnq6igYXfieFFRfm33H1fZEKyaNiSQ2Bau1gDeDrqQszjgwoHfXogLZ",
  "key23": "67KyUxzkX7Jvja2JFkfnkVcRNxrCu6qHUT1yzP5u58MrqcD5VNQXjxnut1v8cYJQ8tvCoSCsPPwUos7YKzJGinDd",
  "key24": "222BQbq8g6VoJzwJwi7aMsA3yLaPEZ7rTEpeeSQMQvk1pNsh3RVzN8g5sPh3cRW4Uj8jmHGzqHTDyuNK34TbdQaP",
  "key25": "27vyTaRWWh39MjgDcUBW4Wwt8cJWse5b6Q3rJ5rzMZi4xbGpDu5xU2gJetwS41jqxqZvYzxrT8tyRAFnGLk9VDAJ",
  "key26": "657bqGxcmL1cFkuCQH3RDxi81YnrcvPvZadRxoouuS9tEsDrnNEFRhxRf2myJDRbbJdfSL8j474Bofcf34u2wPEi"
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
