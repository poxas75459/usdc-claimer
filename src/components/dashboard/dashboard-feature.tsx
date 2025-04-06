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
    "2QzA9C1hbEXCjPuGzwXyvoERcY1urJ2Wuoi4rq8hRMmQxFCnJTYJjBpsz2vbzSQg4nv7yRFJXh8p7GwLK7QD2Tuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e5MJw9yK65Skhsupf3KSqHo5pokybLaNLWnKYRDYWJ6z1ZP8AGeQwQPKpYgbKnJTcZHfdt8VuqPM2tcWfQCkQWY",
  "key1": "3BnoWd2aByyjEdQFtFNs4zwrh3CW1cwMYas6FCwGdXAusLg8daTxBt36vNxjHk4CwrU1r6dDntqsEuvbNgprCvtL",
  "key2": "41ucfWb9kGMP6i3QnLmHCRhYkvvNhMRRYacDkmsvmY4N19s7f53i4fuoUBYBCsSLKG7itiRBLKC43UeWEtqrU7a9",
  "key3": "5YBgtrtySeG2RhP1Wi3QuMcbUAwvV32FUQnA7QtfovpqdikecznKApqxFNr1q1P8ikwWuquTX61gMZ24VCy2y1a3",
  "key4": "3VMGjeRUC96ikKYNCLkLcpugtgjDqrivUxFHWahBsnj3ZzbCe77x2qaN2cqtJFzhtoTQC6PLXALK9kP54JTJniUK",
  "key5": "4dW6MvcQz3MEdPAjsVn8ZNKU96xA24u2rSrWexSRr8J1dX6HffqC9wLB8hz3ZPHAzQg48Ty2jDaxwNY6VGwtfCms",
  "key6": "4j6uFqwv5Ub6VrDnzZCNdNDQehg86jBwf8FCFbE8bVZbHBKHsa1BmfG8HHK6jGfR8tFNufLMYk6cZrnNjv7p5XSj",
  "key7": "zMSpNRLmUYkMFu2jMMxCDtK867YVJDFMdftr4ncH4Ew4mmMXwqt6c2HouqNe1CMsxD4hLYpx9zGvk65p9USGj9P",
  "key8": "4FZJXGC1CZqvz4HCEmisVKSB1a2N6qGjFo4ZwezGBi7dMXM2H58S1dR8HrAot4X7wdRA4nRo6Xi3ezMdMByojHmZ",
  "key9": "59kMGiGaScPUeQxuacSuRx7Kbj1SGc3UPBgV17gqSHEFwzsVpDJeFwYEJhjuQXAJhCJTYdpkh3HjqWfUQPrE47FH",
  "key10": "4f9FkFuNtfPCViuNQr7i9UyVwDmcJm4GcWjHj4KLqjGUpDJ8h3Ad2u8BJoZ62Utytj3m68f2hy1daSnUWPvACVfJ",
  "key11": "5MTQneV5zzdVTqWSnGmeWJw9sWvhmLwsqdVSFHjD1hay28qD7L2w9AE5hk4VjmWt4EXJgokvyAf9CjVC8Ej4KLq8",
  "key12": "4daJLGxfPuGKTogVF3Xdonm8kb7B1pqRP8uKwrUFuCPHo7AkQYUymDKqcTXWgmUsMA6tpp1HgTd3y3utceMovKWs",
  "key13": "4U7c6wQsnnApaUThPjW4pk6sfULqfcGfAP6oho6zKnZ895SDq2Vopvc1hgXBohNykUqV6K3UGtVBketTR36nidFW",
  "key14": "49Jd825oWBnkUc8JkFSQdazrCVkEwTP9yfYrezZqHAZtRNsQcNvsKXgqYWUy9J8FMXcHYEhqk22AyuZHCWmLw2Hu",
  "key15": "2YKwDCSVboy6rq758TcUjvqcNXmCKCnXMQxQ6ScSgWHPUQHJHDFanjtbD9PiDb2z5bGgHZ9zgd81zykrhpa1UK5N",
  "key16": "2M8SEqFXyrCLMDaA2L6NAJLjUcfyYvU7kHtwcswHY1nLFiAMdm9qYBajPcTeFVRtcwdyPhZGL2Bdgz8LaR1v7add",
  "key17": "3gbmiVgPw2WjrkmeQTTytmeMPLPEY5k7YwbBrYBV9Eqei9b848MXcWYXEM89DAirF7R3J9rvdvsVfT28mNbVqo6v",
  "key18": "3vCng56SZVuAK5FuHakAeTPeHYVDHXYXsb341tM63w3ysNLRjrdYsN2WCRKpckxMms1zgfZ8y9vuwFKCCgwP3YMC",
  "key19": "3N5QHcFwYh7AJLXDSh2ihhusvkMTdDG9aQ5bLkMhfCCgxdabsQkHWa2PimivVdsopKobdTcoVzXWm542gyR9bHGk",
  "key20": "249YWt1iFcUeRM8ZfSrbdJN8esYBDaaCyPJrcN1f6kTcoHoRwxbiLrsw27FPpJHGffE3nKtcSJpPJ9BVQvmDm6V8",
  "key21": "3JVX33zD94DZ2WNJXcQy3Xc7RKHkcwSXPH1PyoHQM922VEYjbSxQdPeKnyY9HMQYehk1tQcAzg3p2egj75xRR7gK",
  "key22": "5p57BRw3XMXMrMJCqGUsYKARuMB1tbuFjLaD7zXdmYTVwne3PyFgnEjm75EXXkmy8SrNCbdwkNfzDAgKoxskBHsM",
  "key23": "4YsQXzK4rybsnXsVTDQiMihk4jZDUnkroKFKKquB55GrKPtXRS1eEKpvPAp18UEEA49dbzEXqHxaEan4S64AnSUL",
  "key24": "5RFw6xmoPHZoHjnrANFWweTxDmydbe6Vz8b176siE4xdTfmkwfLT2zoJ5dut46o7x9dt4vDJtf8FHPP7v3H5sXEg"
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
