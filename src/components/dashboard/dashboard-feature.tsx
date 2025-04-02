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
    "3JdE3unNCh9oZKcP9nDuBVCTZgpbFv8QfTeU2eCaqy9p8MAP26wPJghYr4X5ZJjH3LHWDhoWwnTWC1mAznBMDVjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49gZV63YbrgtFYCcpBFgqgJxUe2aGXLeqSKdMSzxPK1N24Z5iXHBwQY3dDSwgXeHVZuUkFm2rUDmfnHXSg5U2NGt",
  "key1": "59Z4DNPKC35g8dM6QM3ksBu3VWeN9qw5rZTf3yh8NkudwfJDQyVHqNFWnFWZaZh5FUpHyc6ZwcD2E93stPAd1kYf",
  "key2": "4jdzCB3m6RfBVXrXgpcksQ2PkYDdmi8zfQBsjNhfRtvypEN9myZXhL5TmUyeiQk816963qqYYoSkdjR5MMLaXP5T",
  "key3": "HTqxDAYJg3Y4Zv2i6HiLJxhQX79KCLTNLBhtjzBbfeN1Y95kSpJGQHSAAwKfQ8HCNNWMoayDsETDtZ7XuRe9mYd",
  "key4": "VnGjbXQisGYzyP2nkzQy1fpjriFhM22umPdeuv2zpLqQvCJyQW28ykFyiCHuuCdAmniDGkkqQuAGvKnHrDgX8U7",
  "key5": "5PR9Af6He6SjvdyfZGXgjFhNpQb97G8AvPLQedMT31aTmQNWufXEantkgWWQymjqrBz71usGmtbo7Zci2uNFoQpg",
  "key6": "4zpD1iPbmrqzDx3968vxxWmoBiJYt8cXAY2b2zraHyosZeof8qcrxZw88FHJqGT71gZ2yvLWJhuCLWpcdoym5vxS",
  "key7": "45Bjsxc5brVvU5hBpdd4XiumUQSWmNYNWZvAuzR5SqdCxH7cwMPxvAGxPc6GLHNzTQYSLmPn35vtgXmUYG5ZiCLp",
  "key8": "494248ixEzZuRwq6sw7Tu3jzThpr2zUjdjEdfv1wdB9aQCzu49rMQwrfez8bsZ2RFMw2kb15CPb4tSvDeWcuW6HJ",
  "key9": "4w86M6WAQXbpcSUGqAuB6cX51x323dPUXLjA9oh4RgNryeTCq8YgMGcYPseoooVRcJok6WDAzFM5odQM93phjsDX",
  "key10": "2jGrsB9PiJygmSfQqwq2viA2aen2UCtvgUmHeATXyeZGueTvaJSW5WBJKRg5qzfwpBZXgwLkCMyWfpwWLSXub22p",
  "key11": "39KiLPyvZ62MpeveP6bR6GMmCWdfo3FuZfV4KqMs7Qb7aqDA3GxZNy9TDdErnVHxjtG7GxYLbgjwETuWzdYpr4b7",
  "key12": "5cu2na8poHhEDLtmeFNwcEY1H3ZSU9hLAMSoy4PR1pB1bWkuGgdqQisvjkAJL7vnDrUTRUmHwaFWxfmeNKaZFASR",
  "key13": "GBGTR5yHARRKg4shwQQULY3vwR8a6nrAwpeaHYyoLKfnHWvq3JQYwdvMmdCGe5ysnk4S9gMGNerptfaEKzmTpnP",
  "key14": "fvGeyYGdgy8V7aSzv6W8z7DUSc3uXqMuBRP2sqLoq2krmJuhC7V5WHwBvL3SM2Y1n4tQH4BJyWnLxBq8gC8JMCJ",
  "key15": "2YN7DCgqidPjEA7qPz2ypxaBQ4jLRffhFYVJ3jbE9PXegMK6wSd7oNYR5cGgHatYmGRaH8PQiWjyn73qqKmagTaA",
  "key16": "3EDcJSvXAc7pZKQmwaT8RtTCjs7ZxLxN29zADwBGq2VDomUTRDNA9RaraR6dM1HKPjv3zuMKDMBSZNyx4pqQirRL",
  "key17": "54zhmmZyjNWZF8HiPxoj1pSa5v3SvXxmXmXjMFHoKR3TWwkuobQDmaMBp9X6ABzsjKuFXXX4s5L1DLtuCcE1vWHy",
  "key18": "3KVc91p4esaHcMCLkopKtmVs36T39THfn7fbuK4nsias1JXH62wqA7uWeRchSw2v7htfRgW8jkW8MNKqHN4JVnRs",
  "key19": "4QhPBceBqJrpLzhEeiQ55RnE87cbPcvzcjjVNb3h7FgV6tpskt1n2PwD3ni5VsyYv8XqrTvbyxM3q6E4irPujsz1",
  "key20": "5NMXLyenhdALx39faRTM5CVdVgbJouyQwSxEYkgnyZRvVRNR7WeQNboULohQVmKdBLLsAXt322qYvuKYucxKLsjN",
  "key21": "5H6iDUuhwwgkHxhD9D5m3ZNX6ewQ74nF8tQBekRfPNtrtd467vYQbF5mQHAHdBDF6in6w4u58Qd8btvy8DtwYDWG",
  "key22": "5sHSjAewNUnttRrJ8WoF1GFvWZZQTRZDpZQ84tPQ2rYJeFmgLsuVX1bDy9oB4AUqbGpd8b9fR54QPR6mf1RJgewQ",
  "key23": "24fpmzB79SPjumyiiS9QTd9ggWTNYyycVpcocfyTnEBr7Vfb9yzrRDn2LAPjhLNoLbipNfbwrkH22dS8W27SRm2B",
  "key24": "2fKvmAGhDR66Ux9WEDdBGKwR5qMNaAMh6UbsqGycMkpduEGwGVrKpXxGYWVrETQycVUXRV8jQNdbFxjNMYWjURSQ",
  "key25": "3p7eCjkLk2q7WDDdkUy9X8t7GU7VWWwzFK7RLf9usr44HtVF8rpzrjcPhebFkKQoBfDzN6XEEqxY6rBZ6NXxgeXZ",
  "key26": "46sJxUDrgwref4Gq3h1nGKbHd2zuCtVMh55ZVfQagcHkB4mqMi6SnaihhCgAfEqubkAZ74pGNSQ12t5hgkd9kjyJ",
  "key27": "3T8KwUPk84QbSTfUuzkp2mqSKkgid1eb5o5wrXw4PmDPfW9esqVZdi3Ej2vz2dgjVLo6FQ6uLfdQagaNNGYqRb2x",
  "key28": "65ypgyrNYUGMHavy6s9eDQqwx8C5w6U37NjjBVzin7SgWN4qy86gSaqay3kMA7XSo89NsUdcfGnbLGL7hsXMD7dy"
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
