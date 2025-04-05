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
    "3TuK7Q4moVTAjnKr9a9FPvXQVNumkm1PqmC5jkdXosRNLUQVapj6qa3MqGmy4vGzGBHt47arzMjBbWFYtTrMv3Yv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EnfYCw1xd2q6KBUaAJCrJcZTWET6yYKg2BVM8cxicjV4zM3ZwyBAndKt1k4z8DMhTpkJ2Apsu3gEQphW8VbpKyo",
  "key1": "5sVUSPaEWvoiVUThiyKeUwxvKdSE9214SVSMUhC3FosJExCDuvUCK19qc3qRkYchur2JRDPw3d49H9oyQTyMvUUc",
  "key2": "2whAYcxyN2h8n93YTFZCkg1Mi5GqZ4XNp17YFtJwSewnaLqYjTAehZMw6h6i28PB3aZds4S2KYPdNS52RgHJCgXY",
  "key3": "5uJV9mWvUfzgMSWcaWoaBUttr43KhJ2JUz9eAX5TrbW4R1bmmi7SR97zgx9ectZqRYUkrmdC1QpgxRT7kx4pG6bu",
  "key4": "2YucNWtWxq3LoVFmEjBBwSABbzQVdSP64vJEECKzrnJ9uTf1bc7ZtDYbgTrAnNu3xjbQeR58sx2de6Hhw7Rzf1AX",
  "key5": "2ZE5b3Y9qouSwBRWDZf4wqUE5mLcbsHRaxzEQ1KAZDzhVKxYpCLZsAtf82EAGe8yBtbcky1V8E4YszgYbUyPDTJ5",
  "key6": "46zowknGiaWNjygR5KqyimEgDjgE3jG9nULQytWTRi44ihUwpD3wJaBYe7cvRT9KTUyuwEEztsjtm1GFgimRi1AV",
  "key7": "esewEHTZo2PWk597eYzBpTfs7TqN4XRQwjABN1r19ma71rL3joZegeWdyLUpvSFdTumx1Pg7XWUYMNbD3AHNxY2",
  "key8": "3CiCqTqYQ84t8VFsSMYktC4xxCALCFWggUq4S6PPjbDoAkvtGM3mUSLk38VdbBwvufjP7YtXK1ST6Z91QbCDgwLR",
  "key9": "5Z4LrrXQC1AWdA4BuYBvYv72qeLw3LuFYi6a9gJPbQs251xTSqxAfhoar9eXnm8R72vY6657SrGUTVJt97dSV1L6",
  "key10": "nag5d6dpVoCbTxtPeqoN6s1nG1VjdSpHxjw84pcJF3LbbQoUNHN9SWK4dkdc6zdf8xFWJP7srJUj6rHJXr8m1DX",
  "key11": "4fXYCed9N2j5knS4E9yW4VhyvppYBmQAAb1h4nVaMxt5K5VbKDPvN1GxEYkud2CvR2vnvFqFcPP6gnwSCaSef5QP",
  "key12": "4V88kuecKHuhq6r5D7nExxXkRpNZcLRJcjS4G1TS6xcTkV7ruovqqCE8mZmPTyhRrAPZBU9c1wzG2DUhqc7j8QQf",
  "key13": "43rbMoEp7pvNeg9LsZpa6HtSzvp85wFHf98nrWGVFY8udtcoR1aV3sU7f5UJ5A3NbVQjBV62ZqRzFGBEcaFXi7ra",
  "key14": "54B25VCD8gMfC3tW4A6RvU98nfMAzna89BgLNbmb5JkLV5KixrCJDPbQQkk51T2MAVPujjS3ATjfGEQUiPjKyLLx",
  "key15": "4fZuEgSzE5iAfyzK4qrhFNfkmLPSJPVUC78KdTpcBQ6zWLuKn2KjRQDTMcdWVqzFU94ACJyJPE827MtyuQQBHKH6",
  "key16": "zmxKfe24mQFMZ2LP2je4Jzpz9uTTXeVsCxxkxSQGviaR1QfrPvSSg2vxHifDwPtvwQSYy85QoSe4nnfKvfSWxEo",
  "key17": "MWc9AfXPgDKwSbKhm3eufS3grkChkRTem9PvECe35RnqNkbEhteBK97EF2KeLr5zzgosZbffxXTQSc6vxddwxy7",
  "key18": "oEp88HFYrDy4kQkmW9GcZcr2dFtg7rzsjFFhiB1bxTVygAvyft43n6kcku2RVv7iYw5gLQoxyNAsS7RLKZqWbYR",
  "key19": "3NQsdVp7W2e4jxKF1UDfUinqCjQyP8XSGiAo7Q11yztPYMCEouULeLxSyF11TMxYTCGBAnxENpW8Fad4nvCLYmft",
  "key20": "2VndbHiqFHGv22maN2xKVetMfDiHUDDewBN9msvVtEEXZmoR7g5zEf1aZCkvy6TCpWwDvNchYGDdouivP6mjyBsu",
  "key21": "5MQ5e9Zr7FPdyK58239UgWTK7o73iz2CveZGH5KSmBvj9PqEoPBYR2NfMmsHbuyXqWMppCujJHbyqJDwpq1sPuwR",
  "key22": "3W6k3o2DPU35xe274QTM2BNdmD7TWH4VzX9539z1fTp4ABn7jvp8EtTaaTe8aJkBbYbA1JGTmbrj5NgA7ruwjrgN",
  "key23": "46GnzWHzNuhvmjZA3WCHJmY89swxWthrwXFSB9BKhCvibx3dSyYTJBGv3tpuu9LKDmfv9w8LHdy1XHWAojvqTbpx",
  "key24": "3y7aAcGH2bRbhoRen3DNmREtQMVPrjiwdSZjxsfvkVhvD9T4bdtUMHK2V2bUcpX14R2WJTxponhrK4PHobybAHb8",
  "key25": "4wYgtkYq1FVoyRLCMrGGxkDZUybAMhmSKbX9eVFbCW9uY8GqFezstEPfjXjRhMmtN8RfRrnJNdEiqcbpHthLLgFM"
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
