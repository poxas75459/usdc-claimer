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
    "4SCqimQvSgs5D8gYdMfd4XRmEP5q74F1HP6onepEr5wCphjMr4eZw8sP73zb3wR3SEh7rW8G3E4d3ZPcM1z3fTsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gPu6Tx37jRn7YN1t3fhcqXiJkkWivZKQwrtUPDFEXm3J44aEcweuawhkkQo2SDvjfurHYPoQPW3EhPNHeQhrndf",
  "key1": "5T2FUiHkvbq8Xv6Gce2r3QVMbUSVmVUU8sxYTZZjzbeaDTkJobiGDzcAGTfcfz9WUArSSTGrQh34RiEVW1oivvjv",
  "key2": "26EPgfeiJCicdck7iigKRRWs4FpDq9TYtPX4yL3oqu8ripyKMFaYETLvh9dxqixtby2NmdkpaCAoZ1vNrN5cEKYV",
  "key3": "5WYz5MAJ98zDdLEDDKnrBauUUPNridxFbv3uTEeQ8hz1EYQb7tC5x6JZGz4hovpEMM6YRnDEEfj4FQC8fVCMdav4",
  "key4": "3ymFb4tLZFUNrruitF9cxunR5L32ypoZ8TAaAAD9GQh8x5N49T6idFUsXutq3TFenGJL3jsH1JbznEfun982vBgJ",
  "key5": "2F2ecg2gq5QQvHzw9cUp7HGpnBT2jDCftgmrExEG1CEtXhcak1q3kZKu2gxnmCLpb1v2hy6XMtJJy2WyUmEtUc5R",
  "key6": "HAvJj8KmUQXhkvtskhbgs42wcLWWDtGMzE1iStw9DdxQ8paCqbdmP5QQmKadB6PiAgwpTgvLeYKvL4mh2ZWAeCK",
  "key7": "2ZEFTZt3xqj7bt8dZh34R8a23N4UT3SX8fjxnp9DPqbvMP7wM6mrbUgfdHFzvVJq8d4A8qbPRFNEcvoCrkGNd6wN",
  "key8": "2HJ937crUSevypfDQTszy1dV9VDPwDEhzaqsncp9VLUNehspjcVWCbqkoQ6XyGUAeJRpysjxBtvk8Y1BTn14LXXL",
  "key9": "PGhStLC4SygYb4dC1k4ZfFyAnL4NGFynqRWeHfiCo89Wc9ABgAvd6ytuCgrdjMpPt7XNMLw2A7DhrXpifsnYbQF",
  "key10": "5EeN9M5CtnXqckXjFjeMsXqWcNR6xZeXgp6fUCfq5DmPYgWGswkVxvjzy4EH9QcmCcg7bRBULEyVMskpJB6S2FRF",
  "key11": "YhhPLcCghpxp2zudVxwrrwdvthT6DzW4vs4CsS1QFvKK5pkMqCPnLDAmPidkL5sBfbYPWGor1kk6w6Xhk5dyZWR",
  "key12": "5cRCgJw7bzCgzY8S19MUNLP6bEz6ijK9jb1h3DwC6zidhpPaPaFA3aBL1z3NzACKKra6B18PdDru7Qp7ZxdSfEi6",
  "key13": "5TcwrnFsCkEVUrB7p6jLk6CVcTXrBxSyWhKkNZCbLreYcgByztSSJ6LsaxouymQeoq9PqTistnzKKzhpaKgsbE1H",
  "key14": "MRTGYdUamqXTWXvaJAH2kDe67VoUbbo8pkuGCyyv52scd5Wzu6W4D7ceVo23YLGQGpGjHXset8GXb4uaB5gbBPR",
  "key15": "hN6C8SmKKS3JLyjMoBKxvfDSAb2Ptcjq71UM2Rat9yYHSCQAHX8w8PwVH8djDKRzjuWRmYcUjpoAoVvXj71ZbJJ",
  "key16": "5nKczyCA6CXCamFK9PYJW1hR94Xyjv8t1WXpzLvKUH8mV21EFgJuX4f9rAURoVLujRDuZdBXVi5u4jNhfccoaMde",
  "key17": "24tKoknVZpYvDpaaQ2LbKH2Z5yaTGFaDuM4LxSK1EuwkwroYnHZVdQuUMTEzPVZvuUrbZ91pgggiLvDiBuQAbcpm",
  "key18": "4fMbwFYAvuhrFMtBFhpPKM1teQ5WkRbkrH1eAZkoKZpttzs3zBxHno7Gx5pkp6iyt282jkgg19UAK8MwAhtyzDkP",
  "key19": "5YkfPHwvzeRZLbs94c7Skc3BUghhnLLyQ8hQd2LXNq2ejfMBZm11rX4PWiPkgcoevXXfwxe3CmkuLbC1mc8xQtVp",
  "key20": "2VNJHYbuiCxUcP6hireTcs7bCGRd7bHAUukwDsvjqojVsNEbXRSZWLXNje5WrEwHi1awERtn6kvQwQrZ9AbCGMSc",
  "key21": "dDEcnnubgbYBDu8HoXG932o9fyDJL34QmrwbUBvTowCbKzsySoqfCUMBDNTZ6hhgQHRayu7AK6BwGmGFipuNnFo",
  "key22": "Vw4Ybcy7sp729YdN4aMMxfZd8fj6sbqvzdN6oXnc9TVK4MnG1ypiJSVACw4YLcqYmjtAsuicmbiayvanXM7ZWQE",
  "key23": "4VUtHgQradJrPEhVUzVU2A2QJK3nDvaC7fCsdwx8cumL6QJg5MzLDmQ2pR7VicQvRrrhSwKJTBcYC5xsyhVTnS1Q",
  "key24": "5cZ52iZiQg9sXqw3TueXD8mn6KTszBirycU7bdaY1rkVrQzy8T8uwwYL8maHHQbT9vTU956jRFqavT9ap97eUvmU"
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
