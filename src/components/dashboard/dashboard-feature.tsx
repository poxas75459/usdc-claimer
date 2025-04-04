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
    "3ihpbg6u1nrLAPc95mKoch5JgrsJEpMY4ESVPVUuNUCWaNexKnQPxUZVTTzDxQgpvU6ZXgFEg8E6gkvzp98jNWpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tzvnZxkVDWsFsoci6HJgTfGmr85arDWjnGTTM2GbVN4GFV9bZXhqeAt1PHzmHWXCwyykHcmQkyjDGTMxmNPpVR8",
  "key1": "2ocjV9BPLm9fVLgyv1mWEWXTfaC8ryRm3DZvhgjAcSncyH1ZJTNmu8MtCUYDrZDH1yUWFQsWp8RtjWeAq73hdhFT",
  "key2": "54oovRNUy6hFUQ1x1vScrMyDzVW5fbJ8BYVKFU5PQYf6JP64irmrwa82nC218vP9gUYJaRgDqPkDdcsmUqMeeSPR",
  "key3": "59zD4HuhUGLvnp26k3VQ1JAvg5PEtg4xKvktV4XDxzi2yXajYVuSxBtKsNjYB9FuR11GdsSMdvGQvEePJoxYuuen",
  "key4": "QNhZVrKKFV7NXBtFSioHroRoBWxcKzzSFVgNgbzr78UA2JwapmyzX7noucghGumkicA92zfKKdFmsPNbf3zkTNm",
  "key5": "5HE23xt7XJsieK2mUcWX33Fqwvizhxoj7rt8T9mc8xuMwobUmtnzqr8CmU3d8pJRnJsA2u6kL1CCteWWUwgecxaY",
  "key6": "5NptMMuFrULkDNY58UCCLH8Hx3hBBRHa4ryYQZ7qhNKvG2yrHXodiY5ocibWtXH7myGpN8UDgmVb3RAfbPLfZYwS",
  "key7": "51mygNtqcA4QwLwS25A7U86Rfh4PzbQpCVqzT7XGXziKpkKMkN5jf6HaSuwx5ucxhS4WGCnLvv1C5eT8x6wvfK8d",
  "key8": "4BzzR4RNCxwts7nmohEFvFNgQvuT1b5Y3z9MtU3Vpom8VyRc7hLqtHvoCqeswaJEHzVYjstxSuw2tAoATrWrUmP4",
  "key9": "k2LiCCCma6q8CaroWiai9J9i4aYcW1UJUDEvec8WDZ18NLJoRfKpoQocwVVjQGTzRcSGuLnFudDNcrABZjCRqiq",
  "key10": "DVBzwokzaAAhScvVm31y3CZoLwPAT4Xh2Tw7M82XfTYDtAvAcC1zUAuK7oSwksuVSZfHJ6hFtgcX5WF5N5cb1uC",
  "key11": "2cmuAekzMfEV3irqT1ZK6RjaDU46VZqNYcZfMJuHLA1pxwexdtC2NqFSfbUGQK6VeB6dmTn93mQGm47HX3JRQh5m",
  "key12": "3M7gTvrg8TnC4D3XUkXfuRqirqPXhKK9LqDCrwYapyKqjGzb9Mo95Zbcupx79svgKmHgnvH7hD4Wf4Bp6qjf2F96",
  "key13": "62hMkyWdjnbBnHXE84Rr17hQ37CfVTrDbUBKNjpmB2NPfe6bKQmBFJnC4awuC2XPm93gro5PVCA16HE1j5CDYKkg",
  "key14": "35mEfdHXXnPiwqvCmDcfASTPGCeQQLTvxVZmiPoNJo3SZqhSzTinbmvSLTL98NQXLntqtosmCGU4pzogpNtzuQEC",
  "key15": "4U8uGydxsHt8tqXkbNQ1TZeFe86dJUYdAXQPr9BnX7kAnT8dzAvhRCgakHsbzdSuKDx4e2LXZuLhiHN7Qi6GhaZV",
  "key16": "4bs2FWwV535Ph1qetTZmySttYtnD7SqFW9H3rTmB8zFa8pN6opwMTaknesqAYfkuL6CWxAYmcTtg8MUr5zKZAr4b",
  "key17": "3kGnrif43idXSiZ4vLtwAKhQGU9qR23rJRBMwwSbsy6UyxN4Q6gfcuUBse5E2jUMmgip4uksksREZpnkPhdru6QC",
  "key18": "3tdQLFMzkJt6cd3TsxARdyq9NYJbmzAskTvT25RmTPTpEiKLz4sfwJu7tAN6M3Uu2peNouK9r2s6xQyD878W9435",
  "key19": "4ygr9uNAVEk9TfPteF1tarNYiXK1HYLmMZAaRMDV4kCnEXNr8kLU22SawXBRD4PmpmPbfN8NLgZtcmUnXqmfknpj",
  "key20": "YyLbVRaYWWvmFtbGpEGQyYeA6fXBCQepDSooi8wMs8qQP9PhqyPDSpZSLtJxnrPKdzKQybLyLro6n818DYmmPKt",
  "key21": "3RtjVLw8k75A7HtLmCaDzV7oPGLqsRmvVqfaVbC5SoB9nxkB415rtjYrwCoRP6G2GtjoSm865xzEQYfcc3s9rvqy",
  "key22": "5pzkqQ3ovypo6ykSNwuYg6PfdRpANTU8AYoCGY8YF7Us53oXR514mP5giphwNqHfRz7UPeFdKmfPpE2LN5TGuW3k",
  "key23": "3EYHpMQJ3v8r6QZAxZmqkUoFmfT8URvFBX9SjXP7veAegUMazkvWdE7Dkyji9UxF1YXU2oFQUqVcTN8Azs4maruK",
  "key24": "5r11ryJdh6Gn7xC2aK2DnXqH3KPQhAt3mtdDPmyJespCwYxnbfCu5rRCK8MzG5HgY9cpWmHtxJ9nTFzz7yvp5Gf7",
  "key25": "4x9vi2Q5eNwCTsUrFzwA8EKkWWxa68uye2uX5uvKLkhYNAbbd3CHQ5tfLQKDgS6EY85rqWrLZ5Pb4jXQiNwEwZsw",
  "key26": "5v7q5gJW7rj4tdYUj2VnyWC9h5zTCD6eVhCwWaBPZjuhTKd9A5yeYCCsVw1H5KqVcXodXr3XBfCjgVdBAjVr8SJo",
  "key27": "5JwyDmGcye8waBqQbqfVz8i5c5y4HAyMYG6roBhcG1ekpYcBUKzrpnbpSQ33tksaaSR5zPb8V73RDhC6frvNC4GH",
  "key28": "3VvonFvGX5aqK426HaXsYDRtRbyi7xPsqksxQoHEXcxK7oLPkWYHaA1UCcWt98uVNy46HyHA1oxeQfZXBcqtWVm6",
  "key29": "4DfrhjrcdTRt96eQc1NNSTHi6oDAeVbaGNvdKQ3obRZLY4cxSC6HmoDsXm2j1AceZgRDGxDuKHnonW1kPrXgzaYf",
  "key30": "53vAchBH69Gm2MzRRMNwp8xnCt1vLzAGsfSPMUwfa1oQY3db1v4yxvZ6NAGCsiaUmZSyLVCZFgPA7LFcygKgWejd",
  "key31": "37pB33Mw1K8ybNZ4T3uvnGnLigGRgcSkm6djnnxisFZzEKieJY9XBLysy612TLPfeUdYystczqpG4ZpjQgMB1Uv4",
  "key32": "53oMS9UC5qPLZmQjBvYqXN1vtmRyu5L3YnGmPWoLHysiyhpgVQBMe17SDJSdcyxxcQfguEM5AUXDin12vcpPhQSW",
  "key33": "5H1s1KHrtN86djAU9KFKXQbYe52x7EQDiVaey4a6cYMAbbx7Wis6EPTRtZQsY9ggwJvJCT9reibnLkqjpKEiKe25",
  "key34": "2V5psCeXuGMYB8tGJzTNnQXRD6aUUM5Ng6niWXJbTr2sGwRJforcFCxyd33QSy7SWTEi7wPadTLLea3UWFo6LNxa",
  "key35": "5emgu3RyE8T8z57eSEPzm9TYegzubBG4d6JuFKLCPSstYjTAdz3PjQNPMJY2K5Nh5Dt25Ud6CdSmJQ1BjowQ6ifF",
  "key36": "9MjbvoxN3qVbGEumqExtuZ3CXxPBoRh6gh8wUTR7qvfVTpwKHLANWaBL9ag7RWco9cCcvkqqXkx8wfqLsYsu4Kc",
  "key37": "FLJWZ3hzzEquohUEC9fD3MU3NFWjxR1Dmhg3eaMpeshi8DjteSTBo8LVo9Z1CKYaB8ArWJprkcRHNohPgwBtEs6",
  "key38": "4JbqKbCHHAZMrUZJcoL8uMsMtYZk7tD1fjGVLxz9Rffdd6hfNCHxYBioNiF6MsyeRqBku2qWi2XZnUKhi7aDBkdv",
  "key39": "2fQ12Q56YoyJtnKKmq7DmJJQQ87JviJvxM3Wi8eGUmZmSsUN6uJbbvAn1uMSnuoiNZbEbQPAhH8WgqYvLYv8XkJA"
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
