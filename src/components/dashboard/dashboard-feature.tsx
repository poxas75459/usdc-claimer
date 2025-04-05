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
    "4Do5cB45A6n1ESyKn6PYqcASu4bsxYWFhwWgp6e6AdwkP9ayrYBMQAvTcqnqnRf8kvYdVrmXC5za67hUz7BbGjgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MDE3nLH3EV2SwnKKrbRAf5KMHSkWS9u2zNbxYv8fVsHZ2u9N6Hnpw3WET7oZVw4NXvS6FC4mBoiLeYwAQdUgFi1",
  "key1": "5rWgXit3Rjfj2moGp3Y77mepEe7rfG83w2zPoiTuWgcp6vz8bfADz7nfdi5cT16uZU7sg27L7Fn6fJB6BWyoFwjS",
  "key2": "67nypAAN8AdwnKaJQPogL1En9xbPs7u4iMWjK9HaMAUGTG5j2f2Cj2mGEWcNq6ZDFyYAv6azYbeHni8RAkeABbmx",
  "key3": "3LAp5L1tCc5oXsEMf68KRa3DLztwJSgh32PMnKV9icQbX2jedBSdMsH5Sh1EZGskKjNt42xuyeeES2sZhi5qJAsi",
  "key4": "2igG1PfqfvmkAbio2YqURTL1LEGfrsXrm2hKtSXMejyVceNjvkfoKEwyNk2Qvn7XnaMwampZTCw7T9nBXRpsnT2z",
  "key5": "66reRQ8kbpmBp3KzfBHqq13vXNHcukYFY9Zh3FAStwf9qbmFhGmJc3C67KvL7bPrG2B18yZbU2guCqw3WjRGnVAS",
  "key6": "5BA3paz6vn67cq2Ybehn2LTJZJvwtFH3i5qLHH48TDYLhZJDWMEAE1baygY96X8K9GvXPLPPMUvSH7owCwQ42e14",
  "key7": "44UztHkDjMh4biaeZrQwR5fj24AJUUJVKe4e6g2FMxYYKtX5LXLVGNxuBKFz1U5JaxwujrYtGqdRBL9GihzhPhqa",
  "key8": "bArmnWGsCHyvJDzUiti6yeG6Ye77jaTd8B7XB3T7FD3SRm9Rm8Cd5sEHPPFA4ipFrun6NfL8pMWzRqLZtf4vc1A",
  "key9": "3oev37eFuZ3VyFeU6Vp711mKJBtY1FoSvGoKQEMwGXhAuaiNCpoVnvq2N37pTAMJAHnQm21cHsrpEBFT9WRX4GBt",
  "key10": "4iyYPy9LaP99BQSj4Dc489NatYDFQ9FoGNQKusJWKvKF6zrF8uBLkYhPT769XVnEMEuxuj18LWqb9K8rsAFLKdzi",
  "key11": "4Yu9bzfDk5LzEZswPF3bKrGfPB8hzrGESFs2chwj7TpU47rPrJfGDAEvMc4y24HoD5vHyoXKQhqmJQfL4auLCww4",
  "key12": "4uLy39ZRVGEWvVgv56BFtpt6jkv2atc4mUne3D3xVyZxSRK9FguRpH74kEoCMPPWzzrZNkjvFcKnzAqdtWYagi4J",
  "key13": "3gtYbjo79VLH17aHuhtxknWqP2GCNG9rACLBKYHTxYPKd19fxKBvM4XxHTij9TGF1WMtxhMamxbWAmnLsXT8MfhG",
  "key14": "4v4JCazqkWtDRgxS6qmMbfv9XQbVdn6hn4zudcnBSAdqtTmDiHwuVCXbwyKtas1VKbNe1hu4vxjZKQCXriHH77fE",
  "key15": "4JUjM9VpJaCgvKszqNc4b6PQ6K1fGNwbckkhJcVimowCFT44NgAcTs8n3a5Vq4GA9QTAaH2AVhySqQDAgnkmy2E",
  "key16": "5mXP1gQawwDZ4nvyYCuTXbGAeSnbY1uK4xeGNE7ookvqEUZ4VLr34qbUfxAVhHL9m4HZ3sZPg5kFutA6PpsnTCmE",
  "key17": "2LGi8onZEgZNzH2jNyfzRheinaw6pudbe9PhtRUdh2Wk8fqLEKDPUNRFHSFKgAN9TJSNdGvGiWqTj3tUuzEqgWdm",
  "key18": "yXXrackSEyCqh9WMfJuNCnG1izK5nTXgwSoN1WNLESCCqpU9oCytPNyogZXb3td6mjxrKR2Vh9Ydo3VTiNRqc1x",
  "key19": "61mCC1PajZXnacKXKMQZytyPi6AQ3qhi4doU4UgMsYp9zuXyufLwqzWs6MVk2DqMuAqSyxENXrDMqEw1rEPtLChW",
  "key20": "MELhto7waFoJDrMUxnqdMBpYpDPXcNJWXm31F7AEh7y1CJnW1ZvK4ryVtXeVQf7DqpJsS42auMYRw3PG3tMqXVe",
  "key21": "4MXq2sYgV4pWvNxampBAoqfH7U1EL6eHZA4pjxDiLCspshH1fcCuG2E1L7FibwQpUMTfV5C1xJQcqyiT6DdRoX8H",
  "key22": "2Ya3BRZzfqeiryvCgTwXcB4YfXqFePEs3NAxvBDF1ioikKDCnbSLF1oRQdskGnu2pbAi249CzZa9df6TZjBzM3RE",
  "key23": "4CSQCuoQFx9tgewARdEeYyXuWH7EQJFGtSLX8mybhKBmdiDND8S4y2goG6BsG2BKrsB4Va5ZPCxfgrgNEG3MzFPj",
  "key24": "4DNj3fmrAP1KQCLC2mCaGb76zHrcD5KeK61DsYbx6hvLdNRz9nTBZ2VRbNwzHVY4oNhx8JiWuZLzyHtVhSWpU4ST",
  "key25": "LSDEzttbk4TVpbmBScus7vAbgqtBi7os6T55Pm7LiYGHXKCBmhf7LVrNzs8mKRL9vgHjJh7qm67SSf4ahQDJYTS"
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
