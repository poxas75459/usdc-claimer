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
    "26kXcZTZjjpgUYtn1UrvQ6yn3REPRx45ZoLSxJ7QWSzJa46H7yTgJFTXDE91MoGVCYVGahh2AUNVxaTnmJoZt9Vv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Fs3Baz8AdVTKgc3J4VqoZzF7ZRdz37qhUy3X63TKdmx6ctHc84w4T9XcFMXZmJppdBEEShWmFuziQzWBgPJJtw",
  "key1": "4i44jXnMRtaJBnQjeJKPWB3msc9YaMYqFmBcz7z5sD2mG3Tq1zvVN43tzkehbK1oGuSXuAoqTWbFEzdzkbHpLsB",
  "key2": "21QCUeqXrgxDqLyPTjWgrL56vra8RxB393nK9kPCRneatpaZFBWoVYpTdJjsFbEQnZfJnLtwHiivf3USdvgLJWz8",
  "key3": "2rZ8L6G6GTdzXVFcb5NoaMNZUYXp6ArJatN3gbBnqZkrgw4djDi1bA4VAQbDRJB3kLhXhi4M2SLEtjwfGrY5HM35",
  "key4": "4KGiwAAYqFZRaMUnyazaEWFa1vof8xxyQgMDUXadU4MUoTmNFy4v3pcsieGN4XNNRYDna7drkmG7ZW9HdSuJTech",
  "key5": "3H7pidQYGRFAnSKWAGLf39K56McKPKho5VcksQNLk2aVXLVNtykLBsXV2KFSmSAkMzjgPGcWx9vn8WPs6HXnbf8x",
  "key6": "3wpNBYrwhzn8aLJw4JirTve6AEBkYV8zFdC2vPebi4of9jCCbGTwgkrZePRV8bD7BgX6anCzpA9xi8LPGbYSR9xa",
  "key7": "33fgfweWFfyiAm3oonc8BvEQKJWydRNfE9h1MssJmbbtfy3RroaxxUwS5makSaj3whcTqtpHu2inPbgb6uhUdaGj",
  "key8": "4iXGRF1WFYShDAqNQhwaPXxSURr38Byebq7VYqayCdbk3vEuZTH71mw1nGVJBYu7EpRPR3WAeMSD5TzYWJvmcN7d",
  "key9": "4DpwDwZfp7rJMdM49ZawVMgPcWPQsKxG89deSgmFK35hCLxjRZoBZCiQMH2estZdUdsBjns3y3oHVpFW5nc3dZ3j",
  "key10": "53chUGNeZGr1SAL5yutXwdxwUwkbzwA6oxe2kPqUvKXGp2sNPqYThKb43HBaa6QGdzbKYNUdtFFb8egNFqUWw1S5",
  "key11": "5Nr8Sqidoc77XKcxx7iGbt2Lm5DwSL7HYLQpTezGSF3DNXbkj5Ua9knTT6YcZPhdes7JsTVfJJp9A5DNxBdpVRT6",
  "key12": "4E4J2i2KASkqKhDYSwcwbadHR46QLev8uTervuieDrgakyemErTM8odDxHP3kBMAihs6XyD9EBAQEqvCB7kydy2N",
  "key13": "69DdHWcGk6HzfGjon58ZqmE2mELXoNfDYGYi3sLr7AJ69uQdremkCq86ToiUJZcKDiFRDQHnE8VW5t8thXU4tP3",
  "key14": "3KZcd5w8p9xWHbKhk2waJWKByiuQLfZrJ5hAqcZWcxesWrdCUAGovBJfnt39zoBz4gHN3HdG9f25YVQm6yeCJRV1",
  "key15": "5VyYppksVPMQUHyYFtX8ZvD33Xzz3DP4Gmfqt5GWgUhWXigXJupFEQPGHE91i7ReZAoikiXfinXDkFVELBhuNvhN",
  "key16": "2h8Wtkum8Z4GAAf8r9U7yLLWVDmUcrzeTVSadG67iBhikt7kF6pgVbE5jzCysWG1o663i5YWWeb7BiRrj9XVWNda",
  "key17": "DpcFMEZhnQFw9ZoPpsJVjDLzLUzffrQj2QwRqp7kSiGVMzMCvXNEXt3ysUPjESgdUaCdEWhJts9G5cxvenuNV3T",
  "key18": "3MF65GTYP36KpEfMWB9y9nbz4pYFuqFDUydqNhLdDGatp9zV6jN3mQ2mQELMxfqH6QpWJwRy1p2sDRR3JZ9eVLik",
  "key19": "3bFYBK89nboChFytxaLocye5VCvNoHzaSfj81erxBL423Hp6BMZ69nmucC7eDhEq5YQUHsdU33dWZv1rZRSu5Pdg",
  "key20": "3F373f46vQzg4v7F938LdEnbgD344PNdeNzYwP7TynTwCJNg1iXVNdY1GswkSbyFWnaA5wxxe35DZHTnNgXLrnpn",
  "key21": "4cF78GJvkYLJkB7QhJM55Y6YsG4qJ69TFRZQjBvqzyRMFhK6PfQbo1cJoK81Zb3cqbsVCoLikppAf94mgD5z5K8g",
  "key22": "2hQcHBPvrECWQWoG5HYsDNvLbEu8VBzAihdNFQSMzo3thxn8oGXwkDsjXFhZaYboB2tYqCrWN33yXMNEYWd1P4tf",
  "key23": "5Lr8y1ohrZX9SX6U6vouQzJj5FnHHWfQKT2ZM6SoNjZdxMHTsN13B9APNkVhm3WpJ1qBwaCPymh3bDABvHDMJrCU",
  "key24": "5X66UvJ3xipNBdNJUkQ9xwMu1uB1G8XPSoR6Y9Tf77tc8PSSvoJqMSBeSVqKvPBDUBNdGueNyvYeQR5KgvLqKEqz",
  "key25": "3hK3YGsfuafKVagcqUEf947feZuVGByGThpAebEKZzsh7ix2MkuwPUUDpDnDJFb77GeHpvea8iP5Hta82JF9bzpx"
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
