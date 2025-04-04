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
    "2dEuULpMRZPbzsSXtFHuxTt8n6GJLY7jWkbXnQSLYgzct5DiF2hRYBiANYeGd1Ztbooz7BTyuBPHT5D4P8DrfCkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bJk8o9cgyUY6urcXoAmrxJ4yKQcJqq6N4R8ifSvvZVxz7xGFZrtgTWEpDThhwiVpSqfhSxzy9XGiv4Byk4FSid6",
  "key1": "4fyVBD7PkU55EDu9MMA2tiV1UyHDiJzoJ7ScSEKtmKGXoxP4zfdJbGrHdF4be8T3t7zKH7GtygS96rRCzmkpd8wV",
  "key2": "3xbLSS21hkAHjdzo2KxLxX3eCvHyJTztxKVcJcHNkK3cXgxN7x5oCt4F2vYU5KUiEQG3CkMqkfXcZJbUNYPsKiPx",
  "key3": "23TskDUzunnt7gERWHwRErVEoSoHNiRVKZ4UatMQaoWBET8caDcFp8Qotu4LaEHQsJmaGHNxr3HYjqoCpzsEp4tS",
  "key4": "2rVAKGJ9AQDqrEQQZ3NyW2QzNKiokdW8bpUqDFJc739sPk5Dm9RctkSWET5bC547SDyHhbhd6UpUwDi9uvxk73Ln",
  "key5": "3nmUjknh32tB3ztxFADy9jruYfgfQrs4Lz52t4LzcZxCugXa3wcw5JCumDx7CKxW6dj5iuqv6kr3GngnxiDzmyUL",
  "key6": "8ztzGgSjgGrFEC8QWW8B5y8eKBjRbGgiGXAvLV7TNFuMzW8uprJ5YPcRVYD5eTJQh2316hPxK6cJV7Rz7HJzUXS",
  "key7": "63YbjJ1zzywY3xaUwsecHTvi84EFY4cnLRUavjuJMaB5xWoBSoNmxyzDjZBUGUgAEDNG18BQgHq6i8YGeAfdTvs5",
  "key8": "2Mwzp2uLjv8b5TBp2hF8LsoSSgz4qMHksP56r29qZR73iVjNG8yUJMvN3ecf6oinRo7V8QrsxGztzQVtgtv6NhHd",
  "key9": "3NN7YCJXKgK6k5txh6EMCcZbBPkuLU1zzZ93hpFAfwSAPaNsSmGN13AHw21WrGdj7ya5MdgipC2AqxSzkHdBTpBb",
  "key10": "247ebN923sUNhNTVjLPx2NryrFRbLQN9zDiS35BW1JKdMwTKvFcMXJeUDWUzXyAchZiFnsL1ssRaHDAzbsQhJV3a",
  "key11": "5PA9wLutn6BG9v3ABuxqSQHXrHze6bLoS6KJLgrqYNEVFqdLawxFsoJgT6qgUqjge3tYxJNwdwWvAFTyxd8KnBPT",
  "key12": "2LVvJ9pbquftXBRwd3NLQVC35KzkPrFxdfjqqBp12C9ZyhJchq3qUuTp3gGsUJP3AUmby2XtrZM4u9BeBfHwdSou",
  "key13": "3WdV6247jsvLjvVT8u6CZ5DGiM8vvAhUacQ5gqoYDknsGv5gNe8Y7Yw35m5dyGCNQSnpeDdCEA9RSfq8f9TU6Lgk",
  "key14": "2sFFpEy2G2n7wQuw8yLWvagNQi41gMZ5z6hUA3mREuZzJiBgX14zNeTFVW4M1kCwJsH9x5Twvmtg7B9DrpdEoF3R",
  "key15": "5WhQr3UH5r2E17zg5WkKAizJjr9Pt9JXQkwiLQgjhsGBo7df9jXsWpspN4RSLu6Sr9t6VHfraeGXgzXJAXQ1tqA5",
  "key16": "3E86kKAkxNhsJFJ9xR3Kk3kd5RqWNnLeHRVg2wzacGqvnTQWWiTTtv3ZFR6cGt9N7Ea7AH6Jqr4uFYTDpJaMTBo",
  "key17": "4nsppQL7qcSHEb26tYTnYJKPqeNb9c9kDHM1sf3JnswNptH9te7SY5u1grpHpMGVFSyPU5y3ybBztS5NGfWA6Qmy",
  "key18": "3yEPn8BRq31PGRMaysoandUr9fVsWP1R8WjvN6KNsMW6JQmbwXkVxhYbtj37dv64PZKJ1iVt5mNboULuzYv1yfS",
  "key19": "4k22MKwc8PvFnm7qQpD4eD3aBi7RrzFwkFUqj5iqAUdBCwwPdZ66uiunghFmENgb2eRUec6YzgSr78fcEFHQbnK8",
  "key20": "2pTPA1TYGoPSNBQTEj77Vq31EMPqisQjrrjsgzLZkBdJv7tNrNB3yquJApzG3wSM7RFey7qZ8xQDQjYC6JQwxJ6j",
  "key21": "5n4NHRW3ww5PvBvvfKragfdy9QxFSeqQqywxdbEBqnsTQ1H4XHrFvMn7bGUFBhz3eSzEzHsebnbiMVpn6gkgiVk9",
  "key22": "2cuoe3bs9bKxdycKsvWomLQ3zkUU4Rru38EbjDquq4mYepm3frJRQEL1hB8EndPC3s7zFBRxdx4y9qXipsJmU3AA",
  "key23": "aHhmRSUFiAv5ZxtYaF6EJGxxx1NFPrtHkMrGbr9jHMgkcHLo4YssDEfsNSChq3LVW21dSz1rPB2CuUDSMBn1DE4",
  "key24": "5FHAxqyXDtfbChPt537FhYiKE5L8Cryd3G586aunDF8yaRBPz6DKiKezUQ1fdPFHZn6usC1kLvfovb4j9sZJNgmK",
  "key25": "37TCmVvDhKBieYZLtbTP9KQ1NcXiLho2Fufaa9WHF4VjipV9SLV5qtBkrUCRKti3pJNVEp13QbMuf1rjN14SmzpY",
  "key26": "PXKULKMTrNrb1oq8UAcgpBAbkC6qUdXbUaff75VWgcWPRexdH2JRTaEmz9b1QpAbpY1vzRFVXuvTtuD5eZkfc8m",
  "key27": "5hABiV64sfNdz7qRkgJHLsV4BRdNRpPqoDc4T8i93atCERtJQon1GYJ4KMAVTT3SHYf7q96UAKF5PM9of6XzpAeB",
  "key28": "5bEwgJA8jWMSeqbFhQiPRVRvdbDqSsbdXf9JBCSsXdo71FKwr56k1iu3c2tKpNJ8SfF4Nxyo6qpoi74LQKP4moQt"
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
