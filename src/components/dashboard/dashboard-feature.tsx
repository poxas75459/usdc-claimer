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
    "2GT6szWgCApi4CsFQYrns25cuaanyXz7Mn9HsBLVoi5R59ssUYzDqm25NnbanzE4LKfraEy1GPzGAV8xzYNUCTZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R2s7v3UKhTTxERiz9sdYA1TzA6YvnSjEqRBZCXuJsbKTy31NuGi4HVTSi2qiQKcXGaJSQa7p2uNWgxeNochmBEt",
  "key1": "b7QVRhvfCSmcBJJsrcjNxtHi9UqcZeVSXJFYSzf1j9UUmhou3y6wsiJkfau5xzKWFWiY1zbFidaT9BmhBxkAUv6",
  "key2": "2Adjs7vjwBJPz388LZ4m9ta6K9XSuBwZ63AoHzwTw8AmS9eHY6b1LcFxYmueT8FEhJLPp9gcA5LqQC7FUEXFQLiZ",
  "key3": "2TNbqzenuUkA4MUzF1q9tPbkQxep1CuRXunr49btQTDdytWj65eHhLHnjGy9N9CCUTs7bDKBbUfqV6t2PRHhCeW8",
  "key4": "3wctybKmrYPRabtEVBZ3Z7C2oFuCYgvNyNm5jtDcg3fhYCLu6AT4uMfXkhD4qRFwCue3CWjmo9giRx11oqCKWamj",
  "key5": "4puPofEELueEMyQ7VHvzs61TjHi4rgzqVX5dpoqduAzv2ARm2xvMtmRPEaa5Mr1oLJNxMdjQfaunRt7KkRyqCAWT",
  "key6": "5ayWY5tKYy9DVUigR7mkJXL8aYbvrzTxNBqynqESS4QP1B4SiDQxDfDDBvESNgvd6fHZGNVDH87Ehmh7Cf621iHa",
  "key7": "Q5kaqoMmPbeExG6uMQgnrYzSNu12UEL6XuZqZHvSuk6ztqqvJdV1S8Q4UP918Ae22kFwhdAwtmGmS6kin6drCfG",
  "key8": "3x6PBewTVucEVbT8mhmKmxyPZ1N9ZxvPxre6t6RMLkXE1ot1cuF4Z6c8jPjqvEGwecsRgfXGPwYLNQNaVA3XhsVL",
  "key9": "4n9tyXyfzwpnUKwq5orjnh4sj5TnJzQCNs78GTyPJc1BhCrLXYv9Lwc5awtFKmYKGhkg24ChyiR3KYYdUZ96PEQR",
  "key10": "2rEjzaaUR2cfmbVEweefjLJVSgGXKx4TXFPgkApmp46UuAvnyCih83kxSfRDcL8wBqQhiLXEWPeFHWP1o1LA5GLA",
  "key11": "35mWVHmniNfZn3YUX1xcZTRKEcGcXKJw3XY5ScruRAg9ob646LEAb3oFuQXQaBxc4DegAkJ7ihy354N32xgtSxn1",
  "key12": "4KKk4PfUn8w3uXDyE6RmGvDHQpeaARNxrSWZcvi2dRtEbbweNLPJmRhXLWH6AasPmWBUt2ZCX2b8CcKBJpvE9bmL",
  "key13": "4vVT3pZUr9TP2XJhnUjns6HH5beuMQCHGrDyk1dUzTS5ZntPcJcheGxvtCmNb8VqoV7AaBs5fGVPtHM9YA5EVVt5",
  "key14": "3Mg751RT4R5xnJtdXBUtFuAUVo2ZCSWQCLJ3VhR1bKDmvChwLnTVCSuydGfSovRCZM1rDYMWwA1KWsixMhY6kt2r",
  "key15": "3YuiLnqLS69QpX1KxWkf2f3dv3L4Ai2miXtizm5GrQL9sx8p4VtU2jQHGKzLxhSWYBDkSzqPxaESXqupyS8ZdqxJ",
  "key16": "PEeLtyFbAMdiSZ5CQXE9HwU9fpPWyd9E5KZF1nL52VGWzywkvJnAhPV9QNT2zy1vDHP8avsd9DeNwvb2FQroX7b",
  "key17": "3ueUTky2mD9YZr1h4u8ANp74ghhauuV7LtbXFdHWQd6wNu7uviw4zD3dH6qQ1bDh8DjnsrnTu93wtJqAeKcPZ5Fu",
  "key18": "4293iZEchtptxpBE55amZBD3EJgWqGjK2ueceawZE4RPTHGHCRd8WRoppURiyW6s8XJLwLDnmFhXHgmzdYeUeSwR",
  "key19": "64PbMcsQZWamS7aYHTP5y39RJGnnpnk1qPnvXCz5LP5QaCkp4wE4ojeGWrfXG2Vj89AaY4Tj5qKRrHgLwVUWJUnH",
  "key20": "5ix6JzyuN1MAdVXHVPxNwEYLCc4EM7mBE4htGJMa34Kq2dhVe2nKXiVSjWJknMXrFcn8XLJjBGC8ZfnTyodPQqhQ",
  "key21": "3dTJFMjfhJu6cC56Rkgd8K6TQEmwnshTQNCAFGGJW2tvEo1dSuCGCn5bP6wJF8BWhctUvmU3wKdVyePRtgD4tYBJ",
  "key22": "3xKY9aSpfc62sHoyrBPcsbBDLTNEQ43HX2pcf19F9TsyroiVQFDUgFbV7xMPDmUKixmdgwp5xsngzxcmm5CxEbBQ",
  "key23": "2Vr4mLLqGKRDjDpTvY8b8vkRW4UrDSnsENk5FH8MDvLiRMPJUwKtp2B6JYAH33zdJiyNjEgFMaYbMbqMzzH2XwGk",
  "key24": "28VnKqVE6Vc63GZ2YJwgdnxUrLhBmxtqS1K8W1fh9ajro7iQeSLH4ZoNSbH2duVknpNMfiUQ6zjBiEaFCRxY7s8h",
  "key25": "insGekqqM8YFkK1DogynqVCBK3brgppyXtCnr3W1yFxAWW9YhxsLsN3do23nk4kzDVXw3K7NJGL8rZFgVcLgkXZ"
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
