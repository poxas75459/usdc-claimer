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
    "5176dnHKiUmZt9Cbm3Dsp7Uifo9DBZQnFEHm6HgZgpH58AcJ1V8jBesYsq5496j6RPjD7SVMnhnhVLqDW5foD3fH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o5GF1FJEGVWLdri92TUsz3qc8H5A6618i4FC6ziCFiYUYNfpAVQJHE3VfrTSkVY7UywqqWYb2VjZVufZasxZHvp",
  "key1": "29u8Re1FYnA42yKtK4NLza4txKs4y4zoNtsgVU7JhY5oDhVMUZnpD5RZkYPmuF6jGJAt4a5YzbHWdjgBM3Hid9pq",
  "key2": "34efqpTwksKqRFqymPXXfpf5swqQhoVu4p8jdEcHvYzcatrConjJxpHNm8j1C79Ao7U6iesThbaocmzjG7seTgYW",
  "key3": "3rLEvxXtLT7gWndRuYaBNC5q5ar4RzBkgdSqgvDPzBemvMo1HwFSwVtbvV2LnqjB6kzTbYzgjybsH6vQUVCNSMae",
  "key4": "2psPVE8gfpci3JScTUbGppGPfThudJ4sL5GwwRMgy1qeFABSdxGaPdLME7h6P527sVtmLTtP4pg6yap86hP2UgQX",
  "key5": "2cxhEgvQJa5i2ULh1NTydJo11mAFK7wHHU1qtcyDuDGpSetCVb3YeJse1NvZEu6urGyerFCjNCmaztSKiCbLonaq",
  "key6": "2ct8Xf12TpU7ogsFr94RzxQdC6tXBbcczVHfx73uxSZf3WFdRHr4UYfWgWftn71hGcvVG92BRP7WvpouUqjTwfmV",
  "key7": "3KJfhbN24Gjz5HqdSjNkqwrXvGEHkDWTyHLeV7QZQ3CMAh2qdo7TUXrncBep8JBxYNwjGeQYtGcpKef2RYm2EDsQ",
  "key8": "3NrYwBP1ftNtV5zmQ5jB8HFxV1eZMWcjSdRAAeogCqxJWXpaQ49BWvS6sWJnpWjBzobhCGs6RMA5GKMDtfzteT9q",
  "key9": "2s41QoZSvSxgGs3VCz1z7MngXVfJK52h8GkeAZyXBLcvuWmjrvXPxVMJZUK8LnJn2tZu8T6fECQPj2dFUmFSym2c",
  "key10": "5DFjZ918THAmPDCdb3GAMdBw6bZ3Esp6PoVn3DjtHHh27fWAVBbfaA41oq5DJRENrcFAwtv2gorbFzXLzTyT6p4M",
  "key11": "hetCLbH63oWLtq28HjTeVrDugBP6pJ8ANrKmcGvVZgMfysk5X4qPkXxkb14xtBekhjMfhmPP496jAa3uPNSukLg",
  "key12": "2jFdvAffbM4veaabnynsfJyvkSk9ciTuBxUsrFtxMvrizXc8TvFBnnyMN7GbRH5cLqZb2PLzGLdUD9mvkoeisudj",
  "key13": "5LEXPs9eWR2RNKLAuxJMbsYVnoxsHVURRvNmTfhvp8AUxaoykNFDpxiAL4r1vfcDiAcSpA8cTxUXtNiY6Sh2qEHa",
  "key14": "4e515aJNbceXuZYTJiVXjfsugHanrWHo3QZaYw27hSKMLMkXpGUZKxv5B2aCqTrYq47cTrq9YjULVvHFmJtUCGyd",
  "key15": "39DX989WE4o4S1QFjFFZChug1kaQtqR2SaCotLCPhYRKojAwpUsyE9Nuv7wncHABsRrZWkn3VdBdn32jdFZ2YMjT",
  "key16": "4i6dtWy1XowapQP92K8haacYo243kKWeQBCKnj12BPicmLwYNW2pMNFGE82YTZP6rRYdUrYcw2zKk4521g8bQnc8",
  "key17": "3HMmghkXfUdqgU4tZWtUVj3kcjnzTTzUKK9FBRYubYAaFJUfnhthtvmWehFbPym4UkAt53fd9sXecC39qJC1qMp1",
  "key18": "4T5vixkCbVND3c4ri19xMRf4C3oksWZtihKRM84VumSaXoovsQLKHq8jgvmpDHMuaBtKwYJc4qJhEZz8HwPFCdZH",
  "key19": "5r4r5FP1sQeZ6ZJmnRmNpXg6TBg9PoQkFsJqPviW6xY2ug1ZxWS2YLTVNYmv5ceAHvyEfvwZuGU3W99nXkqE4ziA",
  "key20": "5U3gRK7JTywANTTTgLvvff2nGjqXW6iVYsJEtL2Ne2v8nfhqVTsyASzRKGUzSqpe7F3Yv5ALN9eLRoyxgue75QwZ",
  "key21": "4MnZBm3eEvRxXkBpS7FbpCXMu3sPkdUhfdHt3mcwpoMpUtZ23uUUhZoJsHPT72Ab1h8miFdGH2Qn5gPXpc3haWC3",
  "key22": "5aMsES7R1mcaxR8SGNjxjEETjaCNqvnDRCTZP2cCMQ9hK4S8qsZFG34Ly8pmFgVCXrq8uCt9bB5f6aEo4Smbss25",
  "key23": "3E46j5SCCj3sNCx6PYKa7VUqJMLy7RZtxSGKKzXGNtbYqBoQCnop6pfPV6sGsPE8EM2XHGwEjKASFBBCCEfznkWK",
  "key24": "3sjmLTZRggPeeeYxvxdLFN916ktUDW758TJNbWQZjVxHkRecgCSjKGpQsiLwrk6GDrnT6e1t2HHrKCkiodLiEyPd",
  "key25": "27Etaxph8b2gjo9ERXJnmvySJvajn15PQ3vCMQeEtKzkpximi8TwFtruCzATfMyiiF2v66WsSQi8sjNQpBwkLwWx",
  "key26": "QVEPPTTootCtzLscbamjWkoFNWDBwmAzmHxPWjnqZ87W95nRpfi9Me71dVaWiYko2SCd47AxPmTNRQwYh6V1a8M",
  "key27": "n7k9rw2FNPt6ikMgZbFLZvABhTDxFCAiaisxvFrZQAP7JjouJ25D5WRoXiUVQgFVvKgBnXF5tpJ3padd8KZAr8k",
  "key28": "4jSUZcBCUSudiVKnBQ7kEGbmdvnFkGMmMPJtRmFCWhC2ncx21ua9iUFSxywkdPK5gbKZRPN3Wj56GqnY9j4jr4dh",
  "key29": "Hm5zVs1HHfJqN7ZiPpLrhCLXisac42nNqfTDnrRhLDahodmce49Sjb6PjqXWZnMJw3SUK1WqM2gTec4yFDBDhaH",
  "key30": "8YasQGY5zMkFoyVXC389tVwgxFj3P4knFWA9W6Q2geUqY8rW2mx3pu1CiF8kKyrM11yNPMk3VyBRQBTssK4zMsu",
  "key31": "bu8hiCVxbAAJW8vpuRKLzwHcQtBiuRPJUnpDnALmbM22qFPBngiGmGcEc1tc8moWJ5oWjr9kRMbRbj2hAfnmHGz",
  "key32": "4175ApqtMrCw8NmsF4RBHgBkFJieCdhP2n9gmn3vd5GjN4w9pCjTsjiLjH3CWHx1xVjCq9r4UMvor1JMXYAi7gah"
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
