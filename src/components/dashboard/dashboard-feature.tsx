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
    "4qz7YBKLKKpQnJDiSntphYCiBWQqjnEUasxTrngpg4Ycbvkqoub41aZPGi1ZeS1SGaSzeNVvY4vzPrCccFveHxnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9cbPkmLpysNEva6GSgaDd3J8gApRVQurYs2aaCYVmPvPocdeZYXjZPGvqKHWvX7oT5dSFhgxEP2YX8UoQgAVAyC",
  "key1": "2R2fj1KVd3WGUUEALc71TxyLv72XSg1d4P3sdHXbuh71kpPsJps8maj9ECzKATPGFfnetNEzzotudEFU88sM7amP",
  "key2": "4hHTkDV8haBKND8S1RWKBNDWkFscsE6gUMXC7KzscD6oUxnfY3fysDDAKPbXz5eDkWdd8X7KkXyDU5Ux4B4N6ri1",
  "key3": "3TfJC5Yo3FcMEf1jMejeVdjmx7TBAdoPPxrPsGg4YnkKQAmfypxoxJf7NqUWWVMRRx9UF976PSuLJuk4CR4VFF8X",
  "key4": "3RoRHTWJsGqM2jzpqSTJiTRuD1X4XSBaUBBEArHyPkCV7ozBAkdmdeSBfwYpP2BCarMM9HNN5r3vDmSV3iQSixGV",
  "key5": "4amSE1KAyE5jtXu1VnLfGRWHHsjvj8vZnKsM3hZCKDuJYVLWL6yhWbfbKBX9zYjK3NTUZca1XxRTSTJrJubjQPzF",
  "key6": "2UUAa8EHgY5irSnf2MYThTHHebc4wAr166ryPsYSYhEf6GDnRGHE7bX37PJLVkwtcbigUiS46unEei4x1kJaVpds",
  "key7": "4nB7iCB37n5xyfDh8pw2pvyuMYHnKzgtg4QSXZyCwHAXWa6D3nagZEk4phDFDtC8ARofKEZRhkbnH3sE3dndyULi",
  "key8": "61HWqRNu135LtErwsaqdznZVCMkKDEWkkg8vfGKvrofMiR1gZj9UMUYks92PdQgey4Yik7V5g2jjsWxfY248gFyY",
  "key9": "4aNyjiKKsYaV1LZbVcnLpb6h74P2mywDWZA7sh2hU32nostj7mzSbZ7Ybo6o4GCRYWd2m1gHR2thZsCX8wjksFRa",
  "key10": "mxxDCMZVXnrz6GB7MAEPdJA68awamAXsEPTyAtFeaRarQfunRdMKz9avtrY83mtgDkxbpnQri6gNDZkvdftbw7v",
  "key11": "3DcNdntzoZdvSXXVrWjjf51LAGjKecbA8w44DyU51K9rSUhuGL9Axw9dEKPVAiDUyYmkKD9sKWZkqu1cyKaKMeiH",
  "key12": "ejJrUaUnDD9p9nbD7QVGzXHZ4QbvC2wTbtGobucdgbjkENcwNJEFfAvoRRV1A5EbckWVsR6b4EPncw4tLbjBT9o",
  "key13": "5W3dmdS4LNaTRB7HhuT1jhvbhuNuCMQLKUfVfwAH61MjNTchCZf2zUSyASLamqJQbpNzFArYEjF9he9DJicGndr1",
  "key14": "62dDxbTnbCx5Y7C2GUkkcrhj8cndkUw3xdaqVXK2zrb52XxKzPmdyfVbcWfJzaR87cN5JBVwfQLhdbbZpB6P9T27",
  "key15": "5rR4v9Xd7amvUwRPPU3fikCgY7V3ujq12vMCnb16HQrci48itQ59hFkfub2LzsfMVvGwB6zPtjHTuxjgwoKR47qa",
  "key16": "31B5bpoE1wpvZQANrAjZpQmp17pxxWrXouqzTEw7PG8CmhqzunRmdx8pihvQJhNvvAd1QoEnuPeX4Smegu3emgys",
  "key17": "5WE6Zd8833U7jWDkGzmohHtnnnnTKreU2D8gZuiTPTePZYNzG227uQYLDa1ERqQHc9YS6Wo8TrPQJ5LJCqdAD7Nn",
  "key18": "4KW7mZ7boztiTcqFRhcmPTNruc9xcCeggfQCaxrq47VVETLP6ER3Bd9EjDfjpxd7J6hNT48yeSZL5v2qQpJ7YRGe",
  "key19": "qoxgd4WABWMGeQN1TQMDBDpAcZTMfmvhjzdrwBzAnD8zBZctbz9vKP4kpUPRKjf5uLruSegiksDzk4TjqaBSfgx",
  "key20": "2DSiVMesDiz1d4RHF2jNP4o7VQxur1vhXg8MPUpWncQhChapXX4t8icbrzZ9te796ED5s1z2gngNpfLBZxhj2tLi",
  "key21": "4esz7cKYRAwHRkKaPsPM4J9q89dqPoGTLMXT4MBx2RE3Us5Q64WU2ETfhsN39vWGcu3rxC77wcCCm1VVUVPkV8U4",
  "key22": "54kKXTarXELgcar1nihLUnXZD5xuGcMmpthGRo3phX4farLE5UCKFR9QHRiMLj6C7uyjrtmgXgNAkSk4KTbuS4cQ",
  "key23": "3mmGqJWGXGHrsdCTQsZ5WrfstbdwfhX9SCGnaGxMsrXnSmJG6zCkqorApughGm2fUyvomJ7SG2t8Qs3BqHaqFBgw",
  "key24": "ExFFYPbzarpqtM51GLtJwgD3csoecLHV4HahZAGdErGPR4LDHJrtk7Q1SAuRGgMU8uVCse8xunVxpQheubPnjqe",
  "key25": "2U9jNg17rBwgvWGKUmkzRhDq89CXu3jdtSu9VK3YdbAaqA11a7qMXx7jV2t4kD9Gy34ixkz6MktWacmKDXsMvYhH",
  "key26": "5CHoJ8EeFtHZMREBaNYLSFX6WjLn79cHFem5R66isj2EEusp4HaUKP8xC8tNYgjYFRuWVv3UV32cxtwXFjmN877a",
  "key27": "DdRxc4LYzP1MDu2eGkPnbx4hfeMET9BcUPx5GKzLRTRYkgMYScRan7isuKRR2LcsF4rfVshGpnYF3vSXGZcowYw",
  "key28": "2Wxw11W2Yf8zDEfRJo55pNMvygXppApCuTJxb1DxXH624WHeUoZbN7HAjiQxfWgeGCLUG4cnZVyayFSz4T7L5Bu9",
  "key29": "5UNJpviH8EjMH8LGm9UpVB99mRHV63ZdABMvtUTFsPhEom7E6DfmLmzF2e65Lihd4tafYppAGirNVLKNcFFU9RS",
  "key30": "EfpB6i7Zs5M2RjJPHPXiobKC2FnqZscrGKYrXFBgKphEvnoTUrpDZrsqsNL1sGSaLfx6gxjPmywDMcVVeAZnqDk",
  "key31": "3d5BYL12tQyMpbArutseo1xXSYMFDrYnoxrm2masUhViipiybMfQPJKMxhaRViJXzenA32zRk4jQkdqCyMPfL2Dg"
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
