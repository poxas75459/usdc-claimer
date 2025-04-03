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
    "3e3WY1vjAH8nbhbHxeiUEqdQb2hd2anTEmgCknehzogxkhsG9QZ6bPg87HBE7vdZXQCJ5XAcxheCAzTfDWJMjcvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8C9NuLiBSRWqRkJkriUrwdNjT6BfcmBCfGAC8qcfmR58ESaSd7i6H5woJmWPCcxHtSJNeDq9C4kSg1nfc7XdKCB",
  "key1": "533dDoGPnkVR2pjruyL7SPgFRLUrSTAYJLvbtxo5n4i66eLNku3wiaGjMhRh4b3hKrHz45KpUWc98uj6uMSveAYV",
  "key2": "ir8gVxjyRKLxdCfxzGZeocKeM7kEa3rYY5KMG4CmwA7LExrxbdnPTmMEDJxVKLX4pokfa4T3r4PMWzJKGDyVPdy",
  "key3": "3zwWLNCbENFPwGUkC7vuCxhcfGE8qLTnHAP12wJvVTfozcmD9zQyRN56GNcNAc3cJgiMtNHheTSKEXZiSVGpt34w",
  "key4": "2pKGgi67MDJx4L9Gqr6138yNAYN6KNiW38SFpAADxxDsnJFZ8D2iUkjDetc6nTu6611zXcaTiv964qJ5PMh4cp8Q",
  "key5": "3VV1CZX9JS2qRyNRoQNTWfVRqeQFpf2QgeRrJvTmAsuEwcKTmo9aEjzjWMjRPWTUFoKg2qrNYhZ6WzDimgxRjXXe",
  "key6": "2XEdJzqRKCt3h42eytDULbqeWEAuMF2TdaxU8zAnoctCd8PaYxNnK4YhEA97QdynupRamny7eNij3J7tFsMCtD7h",
  "key7": "MUSiXAS35t86hnnLztivPRy6HPrYyHoY6bkzoQaHA8urhdSQFe8j5ubPVZ3xeWQQHqxNaa6mAG5uJ3zjbt9Q6ys",
  "key8": "3BmVr96DGHMZ7CRi7QHajRuWmkbVpwSc2zRNTL8VqcgQZAbS1CHdeDbZZEcLtcyxXBkCrXwuMDTLAZCyvYUzW7je",
  "key9": "3Nqvgkap1GmyZUPKZkzqiY6LCvPoMrUtCsxBYQAsmHjHnz6nVK2vD3T8i5Hgm2yEKuxAnzEjc5jhoBmrBtq5rEL6",
  "key10": "4gxTopSbEzqcJNFoKiubX8qybKwuYbwcgQQx2htqiGtvxnyvNg1nB9maYSKVHCuLgRTeJEv9JHojRvRaDyrGJV2T",
  "key11": "3kqrTbJQtBtfUCcf6FCrn2sDnDxiWXEJBKX1UyZmMVEFAAMeYYFCf6p9131J51oqcUmUmR7Q9vhsXsuoYN4Wb5kY",
  "key12": "2bxdFTFhTqM4dbocTc566NnuoDD5PTdhmFVfGmME5bX8fv7KKRhgz4vqPYA9e3FNe4UcvvKZ9v3oLCqpUU3o4R8P",
  "key13": "4MkCLdWnymkz8MZBqjHfNYaJrjKLYCBM94GEG9uz3ptMmshUoxxLvxE8nrNKNoha16pxD6ART57HzJWjJks4vEob",
  "key14": "4Fhzqi3Tt3sDvHGa8qrydeNcjfXosBHMeSmLFAeuYJUKpaFoZyqNjqdapj2uyvvwvJBkLYgmcJAEsTgxfMf5jrst",
  "key15": "zWNrvj4WdjC8AnSoYVUcELQfQS9NGaEGdZexaaX2BiA8g9qq6wPcvJFmW1pxtFSHNUHjeku8Ms738Sbas8XYxqx",
  "key16": "3KdKwZtCEhZ66vDWa1CdxHgkqTYdBuxrk64bxeQwYrRHPHdmptMiSbWLfWmrdk97LmcJ1WSotBzJCHYV2W4qAR8y",
  "key17": "WFr5o4pWea6be83htZyjFnsRb1sqBY3A3QvX8K99rQkUordPfPaoeSFVdbEXemMSE4SovvbchQzJKurjpqYQ1qd",
  "key18": "2GFZuDmRDgrJ81AHJJCRM1sie9X4iWtZqTRxXGRLRVdRMrTFJjxR8RyTmYZscwRnTXZ4CG38yEUYAjBpdYo1smxr",
  "key19": "5uwStxGsdYp3JEcWiu97zJLuzcW91FGP7GtdkmDEE6RGymDTw6GzTbYkcsAiZoyPiirSJ7B5h8inqbgJ8GxphFHF",
  "key20": "4b4JSJpzkoxZe5U3BLtwyUejL143CMrWxVANHw43NnkCxmA9WXQgWeZPdG56micqv8qyp88AhMavewXzPPtP8ikG",
  "key21": "3C4cXw2VJFahccYRCp9tkpQ1mG9TSm3SxJDbGwvnQxTfzVPfE58VyS28bNY2YqrQuVs3eF41vmWHbR34ovdX4yy4",
  "key22": "3uzf9Rc9Tgo6MnqyoKi8G4fYt5gNMks4ytFwms3LGVzCo6a6yAG5AArTUMHSfSRLNPyuAiqo8DvDNKDCrrVrjxhL",
  "key23": "31b6n1xJ2a5Z8pZHnLoNj4eyTj6BiuKigYLreNKrzX75qqB5tyJ3w45yJVAGHbiiXtLR6DWM2UUek4pgv3ZdhdCC",
  "key24": "4jz93GDmQRCMrh47EHTn8r6UhLsDKUVGSumRxcSSoCLp5rBJcgpUZWWv9KM9y1H9r5agmYKUBePchGsTPCdWoJ71",
  "key25": "1sqbe3zunm4rCcDvDXn16L3DJLk6njX7SVys9uFsndUKUdSaXsd9fzrpLEABxgsLwBGhPWijChSSgfojbJMNJRU",
  "key26": "4tscwpR6Vuw6QY2b47d9HmK2Z3iS1mBWi39YD3wpcj7r4E2XNh38cmGxNapz79eYMnys2Y9D5Pt6Stja9HQHm7TS",
  "key27": "35scvp1oxRyKCqaEGNVCjUaCXe3KNCWoohCpi2zQ3xX7r5iZ3jg8AW4TE5XtWZocoV4rK919PLhBHmQaJ377UZu7",
  "key28": "2JHhAmqtikdpo1rkEHpKfYXYWG7W8aFdoQ2TDxFJrsRSFGzgYGeiWJZnxVfWcDGfCWdf1upJdfdPSx5LzaEkMuSK",
  "key29": "XKnoSS6TXgYZHijVYEgRLT3oN5UgUCjrgKKnbdFPwpkMkaJSRjQWfCL1eBSgQihHovaz67nVHt4hmznPLs7SVFJ",
  "key30": "4f1omLdfqGiDFmkWWXHMdRqki93J9mJBFnCeGybm7SWhtroPbX9SHF3yhNA6fy9wDrNEhaWxu9W8KYaJZDT7GQN",
  "key31": "3oDZa41KkoiAL1Za57XPZETGNho2ikCcGSusBiG5jZFRF1bxnadfZ5gWDLwp5PWKdQGv78RrZ2uTnoyS2QaJbxDf",
  "key32": "55N27oiP6BNNdf8M7vV7Cp7o4wNwjo14N3iV413Hk7JXDmXc3yyfrWFyDFrA1bnNuk8vXdSt9w4PSUCyemk3zEag"
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
