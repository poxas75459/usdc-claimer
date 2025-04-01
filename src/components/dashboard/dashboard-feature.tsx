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
    "4a8XaE6CJjn9Pin7BBzFAkV8L9Do47QK6onjV8K9oV51SZ2t68NfuMqFE9QSy5ZYb5suvKBdaXd4HhDD9xu444Pf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wFsFCnB9dxEtE3R8u35txBuqrR79oowkGuR2denYdYoBZTAnJqXFVMtWwKeUUtX7ikR88Dn2TwB2xgLCy27Ksmr",
  "key1": "5ZjrCZj8YMzKbzqCDZFQPvhnxRkR36kgg18CCCDd6mTMUqJP1tpMD5qURPN3cAAkPTuwp3pt38JULWp7SydGHDhc",
  "key2": "TgtkERHvRtFP1Yw42sCBr6A41UCut7LHRbs4b1fh1W9kPB1JaEMZtEfTMub45uMnAMesrjLsFD2qqVbSxDYJfEG",
  "key3": "2LwK9QqEPUQzR4BWjm8KCtCnci3WoyBGwmrGGpkK4GPQokBV2W83sE8juZEfPqg9pAo2bttmGDMFEAq5TQcaWbAv",
  "key4": "63BYr5XJkww9iSAMDKn4fKh9f7t5FcT9JfuY75ZvhDC2Yn7pjSzBNtMHKukLeQTcJhfGxrDcfV5MAYxFWkbF8dR",
  "key5": "4zQC6gPpU9KT94PYYmsjWHFTLjkz6zrPAaNWqRuiuRqioKZzQ5wE4GXi2Zn94ezPt5dFevAwZwCbY1bEPfcmnYoo",
  "key6": "3wkKg67RATU7TLBkeBk1RDesZ2xNyz8gqty4PoWgAkfxmHy6a1YiThQigq7eNobF2ck7TfCDqFBHD7tgK95Bu8bY",
  "key7": "36wKe8M1hggBAeEE35unBDh6VVKKCeMkUqafiF3ipC1ti8nxV4Rjt1DfbxQYyJvfoYK6v7Dr5shp2s9YF8GC7vKA",
  "key8": "5wX1YEvcURv1w4BgLVXiLtzLzw9ibXKCkqYcAfEBSWeeSXUJSWxigpKwZvGCo96r8dexEGUPWiQzezmySwEi9y5X",
  "key9": "3J7QY2wQJnzWRtV5UB5Zvxpr6EX8WnjSAHTkxU6yFxybm1QqFojmCXiA4nZBhAK72CPZGWBtVVta7Aynr8X7xtkY",
  "key10": "MzL2ZVXJRYubqCPCvzgU3YRwJWshjxPfpGmsK6PduzPVNgxdemHENA7MDg4DbxJTBv1inD9yi9qt92zWCba6nsy",
  "key11": "wjgRnuBSnj3r8daWA2LHgP3EzVXMceYBxdd6axTLzzg7iFP62mVhEd5G72krHPi1JhjDK3CmUnXsHgbfUfmtxaC",
  "key12": "4JbA75Vy1Ay6uiKxkyQJKCVSTk11smQ7QNGWZrB1dhzBM6xnEd3aGgWnTii8yieygw9RxNSGRLQYHtymtdnur32K",
  "key13": "wGKkwbieaT9aVTtDQjJbbZUnYSMeooFx7s62cW8xtQpw9jfL9XWfAcKmyLNJ7kKe5aCEWP7dwLUUxu1aa9MxgSB",
  "key14": "42zfgyqwtDMmEosWjvWxUeiK45XbosRusFMcP1RehFPW8ky29JyY15GzPv6bthcbjjvYWLcDVUwg9H1CbZ3zSMj9",
  "key15": "3Cj2KA4WZh9Pcpb719VzDoa7AwHgqzTAtwtWydKsrzctUMbCP6Ho4E1ZQpRKLQ7kzHJmtDAXD4YKBobQFAVdJKVt",
  "key16": "E82QcbQjQvr9ka6HorLbWz5uJqRRSD6YPXTf1PmcpvWLDLL6XtejLNTezjqbtAR3suSCGveyqBxVebDfHtBUnLn",
  "key17": "3d9JqZ6V6tWQ4VQczJD7v5k1katjYprpP6nsvjBbXm8srjYp7GjvWenqfAX5kjcndBrYZ8RE3fkmJ2Ev23iM4LSb",
  "key18": "3b8k4munku4zMnKbPBKN2GjpWfwDYeG3daHuojnQveCTFVUNhiKGEKSsvsp1amB3kH5zT3dUozaDgNpmN2p3C8Xp",
  "key19": "2LrZnnCLJPkgU2DBjWMQMeydDW1FPqq5vBvk4r9dTsAJtouvLCfQ9ftyB7yrcPS2AuSWLmhWx1yrxuJMLkSHczBo",
  "key20": "L6EEN9AENYaQnDYGexSFTzf57PyUSJXSVi6EpniohcNPRQevD9ZJgCdRTNBekwTt3pmFECsotkzrULurpWqt8Kb",
  "key21": "5JftcqEDeyf9ypu8Rii3mUzEJbgUcLe5egLexQbTroPjaq6mYVrfctuJqnMiMkpnyRgxXmyHESGsXA6Mrn7zRaNx",
  "key22": "qYLCahk2J8xgkiaTVfCVCsnXTS4gs3x13jpjY81uehCycXESjz2L7NJ3gMxnBDfGsD7CyP6YF1Gfuj9kSqbb5KH",
  "key23": "4tbgTdPUGKf5uNNygt9Bb2mDJEF3gEVHyAWwoN7j3oAkYdu8grzgDQg3E55zycCzkQNKquYjRMTBjmqyMpfsdQA7",
  "key24": "2xWvZ6MHQ4Qo7JEripMbJyvg3wRcdDdVveEBppZr6ZVSVbNsYNGZuQtwvh9yjrfszhxuj4uYdiTBb5m1sxjefjwt",
  "key25": "3oa5V1rVVqJZqWfrpdetFm3NBG7W7d5PUdDQzhTo156YCfXpBQdLm3BGspzLrkdUvpcZm8W89TFmjJ2phZ4EMQja",
  "key26": "2hNCZSPSMo788Q2qDZYmNDPXCFd5zwhVWBpz5f9dPzxtvnBp9vRKgRtB5MCGsMcFdp77wzXMFgQ68456hwm27myt"
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
