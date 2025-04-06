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
    "7zK9McvC4GhLg8uovHcQzhZwrQ1tNH3nxCNCV3aRUoRgxrad79pbbBJuG93QkfLdfs8LHQsz4obmckxTGekFiho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ehBReK1uoTAwMWFAXzgW2HD9gy9ScTrzC3zYBgW7z22qLsfy7wAeheXjMkyafE2iPqVZd3zmqCeRU9C6ignrJe",
  "key1": "3C1fZr4PgA7kGpWWxufEu56rv4iKqgaTC8gRZhYZDj81PTfxqV5pocs7NtfUNbSUjDVsu2Ysv5DftUtSELHF2Kk8",
  "key2": "2eTc69C99Jf44eKNFBUT652HH6tYCydsNPGq5N8Aj4yoqVLMF1qWQWfybQESe92y7a4bM9Mkirh1b1veUJZx3ky4",
  "key3": "2oim9dtVNsrmc8AxzXSqwjqPMnDiPzbLZmpzDkL3DRaVju5D9StCuoRp5SXk2m8FURqxBDS4nDxpUyzhbo8hStGK",
  "key4": "2TY19RDe6GdnUy18q3p3sRPFGEZMBpD8M92iZKLf9Y7NsyTUVCbLHvVXUVk5qudNtJDoeRc3FwPQe35hBkpyRWJM",
  "key5": "5faTsh8NAhG6dvWLCYHE6MqgDmagKHnb6b97K7dx3wASsWe21XKHB4oJzhjrkfQnyKpuKoxeNqfQwJuVs2P3WFve",
  "key6": "4FuQr5RXf4gLkdxdamHrr2M94z2sph72xDXQrgL1txCZywT3qtZMXdaptZ3c9evp7Ww2c96pQnXMsopPLXcwiyX",
  "key7": "4ta4mRqdghGYLvCe8rhs6DomeyRvdJcXDuFXGwVgPJWhzdUV3yyTh2S9M8ogoKPGQD63zPfdDjcKRhFHxHk3ATha",
  "key8": "eADbJnJvEQrvjqUw45UjWAaSz2Gysta6aPksdG3HQhZeAYPadKb5JQbhrovcJ1i3JgFHRncjURRPd6gVWX6H5ub",
  "key9": "2A4XeqN9JGMKKXCtMufVhMoPr8MthHHcaVTCeK6VUkUjQ54htqFNnWVQ2kJaLwz7vgvNWEfkHRr4mtF2bdnV4HD8",
  "key10": "45G3enVj9AGXSm2JUyFc45RvD3wJiQke2QXC2Es7gMAByZKvzqzR1gssCtLVQRGgS9NuWMjbFUjkppwKMnqXYhuc",
  "key11": "3AFJ2HQioZp6M4mnjTwTN3VzL3ir9Tav9Qcc4xYCde15c27EGZhma7pJLHKvwgkkxT1x64WQirHsvMyPaaP1Lwmh",
  "key12": "2H4j6BwortawvuGCZFiU5PYTkEPWDb4QgAnouAKnKcfcUxKnQEQVEQjBfz3WDEfeukm6ws9bKj4ojWudhmg1VoMi",
  "key13": "4idAN9NvTRaGPx2zzVkYYSMuJZvqNbBtW1Hfd3KU7j35uLL5zjuF6vSWeQLM5xf7GpdEp9M1JDKPw9xeJcYbh2Sr",
  "key14": "2zotu8nKMZXzfrkFm8LzS2Q9YqWmo9fMysU54QNRcohBSCtMWJKwTcEXjDgf1y9zMP1wx6uTT2dvjhUGjfgRGoHb",
  "key15": "5iK9YgdYsRrxrGYy1je7eLLxsVcRM9EQrWYANghmAuertq1sXaVpk17zUCH78xkBRJ6pfYc9dckkWiDX2RodhAnE",
  "key16": "4A75QYVUjJGbkctSwAhtU5NmKXvH1B2L4BCLdAvy98TpwbXfcNXuxGcRsxRpSaGM4F3VGk8TxeNPiXeZNTTr3NZb",
  "key17": "4pygYvKP58qFAUdzJ8qjHAhmiuct67z1ZX1zkHKHJnLMZvZWELBiD7TXi1fr61WirUcsPT2x1Q1sWj38ikK6rFnA",
  "key18": "4Wfds3Sc4ovKxzxEoZGiWcNeDm6mvd8kK8GUGD8HPsRM7NY5g9iUVuco7PkxB6oXAkzSQt4RCdfMgk6j2Ncqe54L",
  "key19": "4SU3nbFFz6GxBdk1rUv5v8TpsTZhmDhXdCkv65shxhirrYe6B8B8cvzBSAwvhz3ATXdH5rjNi29CKPix6v5q7rMc",
  "key20": "5L9jGqCSLFBHae9tzLnHg34ejRZpBn228XczoWtFnBZFqAazHeHPXfuodYXpXmj15M9D7pPVLfCftJZi2au7qthj",
  "key21": "4MecvV2dSfognpeQpAGDnXtARFBC1ERj4rqkR7bvBxumcqYoEyYJawLeinzwWJbfoMXCXA9EGNCwP25fDFsnrZ21",
  "key22": "k2GQAznFZvVRh7sMkE2LMbKdfmkBgkJbtDS1TmLzwjvgg5mJfc51mXb7Pju7tfhELj7VSWX9u7LR5rXFXaEQRXg",
  "key23": "5rLsLLYzvSYwMRzDxkNXqJ5CwFMYzX6zKwnHEfEBhsxvAbNaddkuv2CxnSfnkp84JuoCKWdr8iboN6oc1kXUCd6L",
  "key24": "2f7UJy1hsUbmNMxwRfBnaBv5XcG9eXskypyut5KrWX4J6jMjchjxL59fWZeLmaPQvyaRJUW24FHVBvc2mi3SUh29",
  "key25": "2xYfGUjr2e94z5oVhpQNfHGduq1HyGRohJ5LPPmVgR9jP3e44q95ae3Y8xiUN86jojpFZAZa2VTy1Z5oeXAdjLVV",
  "key26": "3D268Ah116YT7LrfK2BZYppiowarrRkw16tX1nuTvh2v3uv661t2wHdKFwCnKpbnLUFJo4w4Fp45fVK2fvXQRdJE",
  "key27": "2gKr5P2qrxXuAgxewEgR8BR3r4ZW8r4pGpY58xTHC3c8wc5w3S3XsXF7cxj8YpvtURzLpkcAGBMS4XBnrU1mD4HN",
  "key28": "ScDwxpTW8JaR1igP912w78MBgu8vFbzX39Dm1ikH66p2y6AeTR5f9LSoN85uAJbZfJM5R848ASvWK8NHc4V8nBR",
  "key29": "3nXifaSUVifd5QYjhH6P92putcCcBWPLDpeWDvTSeFhCQgxauWhMsrbXwLWUEVWB9UxDCSFT4SaRrxDRcNKfMbfd",
  "key30": "2VQvrzV4NFfr9EFwZM9eXcJN9xNW2EaHopD8rJPL63EpaCSVcUWaFAryP78ZU2qrwDboBxSgChq9RGmQ8CRaB2ji",
  "key31": "4UnRJjeFUG2B5mgSMKEmxbpwyWFyV4F725eDHTjj5X9D8Rn9XC3YdaVi17NJ6yxiNutR6K78C2uWhQmU4eNoTb4Q",
  "key32": "4EnuqHNrBrhoA4ZYTpkEEMwGPb7ipnwAaK4gVMqi5bEwsdcHvuB9uBRR88zhCh1e2QV3sBAj3ZtiHcBGqQWr44xQ"
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
