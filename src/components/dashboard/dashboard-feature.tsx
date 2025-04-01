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
    "2ehKuCJQWDAgmztihKHGcVZdF7LR9mXWH43DzqrhtYRRyTyoJnZeyJihvciT35fgrNBsiGem8RENHAvQkvEHXmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wjkBUCkNVxQ1twGYwCCZsVjZAZabMj3vUL4bF2RkbcLmChCEVTATSPywVWayTTQ2pZt3AJBeJjhLpNpRf632NAH",
  "key1": "Xw3qEWib7gF6HQFHersaek5wiFveVni4NgqYdQpgzQVE5n7YQUtuyJQsW9YoALHSGCtu8tiYjqT22RuZ2PgBXUd",
  "key2": "2Xvnsf5gqcDSLxkUP194NB9QgtbRmzqqrCTPbTqaQi72qxBYBFacdVntBejYrUNzz3MvcKppSpGMCux5RAghPwe5",
  "key3": "2vfn8jkPEV5yNjvLF9kbwXdP59faDCiRo9JjNAo7kJnB5H9iWFxZPJadMCHxFmprZ6Y555nprR6CQx9swJNf5FBV",
  "key4": "5VXY4oPgzHs1bu9iauJZUV2NamxRj8Yu3oMgEcQdLTCUieqEqB26atPTTDFSDFUyA5TJ8vQTCkqdhJEC5rd1ANtt",
  "key5": "46WiT3dGVLfoH4Y9umEkydxoyLLXbHhR2B7JTnJVjnGsmgSvGWWtukY5nzXaQDKrRh4v5etYWWvkr3MUNKr3rWQm",
  "key6": "2YuJFXCX8x5x1Zw7Z5CwHGbPP2K3BnYL7b59tmHVka9gSERNLKxuui4KoqV5c4bzC9X6Qf7mWpsvQ1hSSwR22m8t",
  "key7": "44G5HWffsmckorAU2Z3tknv7rKj9geWG9bL3TzRWWtr1CaEPj61DNFiR4d9oAmMDFQw6B3CoM1uU5dYkQPm7Fp38",
  "key8": "2YL44ae2QPuX3z92qQFKfqri5bAajfUZV8FLxPfEdUm7bFXiEp4tGT9F4gSMrmX31T7q9WhhDzq2oaFeytmUd8yy",
  "key9": "48GntfYFuxaX5K8AAWtyhkF85khK7DHoQFiC95zbriNzkEnJ64KGBsWSgtV8QVhUwVrJtSNZ6CFNVpC9STzg56dj",
  "key10": "3aVfRMkipnYc2Sfi3myYBqisuB9a2FVYcR6obQK8pheayhJMeHYfvQXsHwKsTk7moC5iCG1SwSFzJsNNMsYRXcnU",
  "key11": "Hrn7Znc3yHhqJaHDQXDWmfuxsy83h6zDbgHhWNn4oFBTiSsEt2txZNqzCfLkV4kkk8Kf8r65axVXEVbxr63syUV",
  "key12": "XQVutcvyPfF7pnjwJ6BcPGHDNkMdooA7aomemMe3iFWwGaARrsnvTAi1Xev38oT5QXjYo5zvQgeKcMmGg1Ep4Sj",
  "key13": "3Gs4jCJoynqcXS14NWEUc2hiCJp7qJyYTQwM8MLfjn4xiXUgG9qMFvAFQpP5DDDvZHZJrCygkDu8kwBNGNJvcgab",
  "key14": "5xJCbuqhfbACPou1TXDZQ7Y6kyyHjqDRW1F64q7LvrdLhzdbDQRpJQGqoRZ36dJ898ueLzzczVYScKSGFS3SfYeQ",
  "key15": "3BKd3Pzx6jPyZWQEkQBnSfMk6CspBm7xaaEtJpjhSyivK3YjLCyE4nM2Ep95MW5C8ZARMzoKjmjpg5Nc4HN2pZ3Y",
  "key16": "reuv1xLc8fxRW3QFDFuLu7MFAcRoPGegGaQnZf4Q7KexPqtt8GghshTc97NsJLpYQRyggmwMjpJWeDDiD5sremw",
  "key17": "5xN9DiVbE8mXxBARpT6KoaGAnDE1Ftezy2QJ36ddnbEgb6hLXTm49C6HpRZHU9j3VE9YN6nrDH7DzjvQkzzYFzde",
  "key18": "4rQhiRXYU3wMGH8anfPEkrYCh9fzpMxKxeLPtFeV1NZWoF7hsLNcNGPCHNAyuAVNGV2QD4dkdbwi2ZU4ympWFyLS",
  "key19": "4oZqLfMZzT2CAFhhmtAetvYRhc5TZ1tqBuYAr9b3hCiPPsaDFAJFmoQS54ox6qEYxnzDgbNwBGP1ekeWKazHECDq",
  "key20": "4Tk9eY1dhQeQJuTFiVjjvGKm3oKyq22NeS8jbSwUQV79Aqej5CJ2aWVvaHUpP2WeU4eXvrY15xMZar19e8FyKU2v",
  "key21": "2ZAuUutiZdtyYEVPG7t3GM1pAzKq1BghEpna8McmBirwiD9DwTAvN327CHcejEYxsMUefnTZCX5VxxZohMhoWshW",
  "key22": "5p4ZdozZLcLWEpsqesqMZR18w9ZEF7RWz9mrjYv5WHQsH8mTu4Quobg718FcGBwKzbBHfpNeEZrJXeRtPWvsB3Nv",
  "key23": "3T3GWqkVNdKg4DgPx7EF1DfGgnAu6NxwUhGM1deX8vvLBmwYzsx7YSSSTsD6sRYZUpio5HboQinHqcoBvoyuUzLx",
  "key24": "2ybpqG8TAUN5PdCEy1z7s9wSh9FZ3MEnMu25DSnfRJSfKDTqKJDtVHFvawiv86UaubhQaEJQjbsTy6c6AkYSVR7o",
  "key25": "qx1v1EDxcVUcF455HvCcSdGC8yN26sSDqF6DXyUkWsX2djBx58sC2TQhKdivugG6jHtyG4vhYspukAbYZcFD5pT",
  "key26": "GyGjBzzXyA8zMTiwDg6TkxbPwZBxDGUkWPsSxeJpxwBgpNo74tHb9Pr3NTWPskrkRBM6L8jexu2h5p7acCGFm69",
  "key27": "K39kPq7GgJSnkBLGJNbYG5VBFxavHa8jor4jbdkY6kBC6xhxo72rsq7BzgGA4iYfgZ7H1DiMaFcN5Yg5J6DbdL7",
  "key28": "eesPs8XRnKShpnR5ynrfnwYBrHft67uz3DydSDWyo78FUGes3quihgAGPqT8NTXGQSj5C48c4yXbEh5eio7WQar"
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
