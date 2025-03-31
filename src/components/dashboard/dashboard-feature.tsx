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
    "JEm4XB51BUYMKqYdYae2x7LsSoQnNjPuCbLTb4zFhP3AfDjZh79H5SEPoqKTG8cUX5s27b4D4d55rAXq2Mcrxku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TE7iKNBSXSuqa2hZDx79xVTT5xR5TFLkmiUVCtSKMZW9iK7YMorBc4QYSCoEY6TVQ7R16sndiUFhNop8pPJtjQD",
  "key1": "5Wb3rpzBJ3gKt9ofBAH22UmgkQ7zGNxP4xp6XcoWA3jyotJrjFKuMbANsdALgt2burEnZ4orraxUkq3TdtjFn13x",
  "key2": "2agLsniTWh2Umvoux7ST8HZN1Fut48RZAiMeAT9DgfPahXnMEHKCqtoZDau3Rge4MVbh91qppKbmAQDkrBwWP3Ew",
  "key3": "21NGSV6z7xbRtMRPw8hod8YB1Tp9esLoFTLNPikLQLrHrzmTsV4nejtLoFs7wdnCy6H9fcYHjnV7xEGUErig8SGL",
  "key4": "3CeEHkP3LmGVoYgWhAJkNQFHiXn5jna12iqcqcbdncdTYKnQPHaiXcRQUAvm18thkWVNcFZmRiNUfwjDFm9qcsnG",
  "key5": "2hYeH7xpe8tCiwrmnEWbDSGTXbgPz7wPHSoSryPVHkGjA668cL87sRDqb5bkCpuJfBFMN8q4ErCMSXL7BAo15FPu",
  "key6": "TiAgfxoWoVPMnYxGFNuccXy83ttNWKvVAGgPXAHoNm1RwNRQ6VNdf9HoEjLT5DQBsPUo45CTBv6kA9y8YZNVsty",
  "key7": "2vCFTXk3jssEy9asogRXg4Uo4we53sBDju7V9KMt7wnWJdHfYX6QLPmUQmBAhGKMyYq7xU6vHYXR5nrnVgsa7v2p",
  "key8": "5sju1HVGUpMb5ra2wbHrfos7MR9Tp9LKrgiZupWe4EhHun1efBbxREyH1enYwWDEyH4rvW8Hfbdg3rh6nj19Yhw8",
  "key9": "4BN5DUWPLYo6i3R3qX1x6LYLRDPvA3GrxB1Rn7BPB8qcWEdHSjnzcxY6oftu7DRhYTRfDni2z3W47dJg8adXiEbM",
  "key10": "27HjH7BHocPhowt2L64mCn8yNQnoQopAfnjcCZ4S6g12CAynRmJGS93dfoAZkPA2ePa5Jp6B5jkyaqt6ePzoWKyK",
  "key11": "5TfNptg6MFJ4XFv8JCDw5KyfagYepFqmB7NwyxYxYKjby8xynBia9hpRu1wTwbpya3141w9xcnKALFPTgDaCG4Cf",
  "key12": "q4DQYmrgkPfsJznxeYzo8Qk2pkRsuGc4WV5o3bp8kPhnFtUEXzV6wshMnbq6fvASJGMvr4DBjEQAhz5F8eYoDpj",
  "key13": "5JZQrPayU58Xqzghye3ueCLiikX2B5iBeTUrQSGZPLKwZynqiy2NZ6PcpbEkrBo6zfhdLoUN5uCL5ySfcdPnDDSx",
  "key14": "2mryofvoxrhjZKJuvwMy1jGmbh5y19i768KS53yZ4LQZnc2hEA9veTtqqCY1Xiig9Hz5xArGxGiPz3SAGwDDXqJW",
  "key15": "5nnQZzW55RBpk7UWmJaK3Ce49zHmWHwF3weJ96dpWQxgYc7n1vPGovAftEizCVsESrh6eDJvu7FFyqWtMB4oN7jF",
  "key16": "ohLp3eN4E49sP2rvZ9ojHf2MYMfYgAeg6MtCpy3AZwu9TL4Y45rUXYvJyFtddsk27ZzjkPVUQZs6KwLffDV1KNU",
  "key17": "4xPvxTi4D5Wuqa2g4hpEmszcdC1JSfQcDJcuL2K9Kge6eB4pMxv7j1bo1EthFkFW5bha85CwZ6YUapQTBavgax7F",
  "key18": "5kU87vfSSDdssrEzXDHUJj7XkyhWVbiVZWvPqTR3aRLg3QAqK6FD4iEsYduq7bR3Jzkv3GuqWohrGevG35fA8aPZ",
  "key19": "3czNRQWk27M5bemKjQVJaNsdnTChcpAPA4b6vsMW3CkwQo9jVwrbq7mevzH56STQ6BwF4PpAS63hNrk5kid4D5Nh",
  "key20": "n1GfT3nKbAhtzr527yfKC7MMV34FJ8vESdUUhnQT3pmFqDaqTQAtnx7a4EsrTriA9w1unvU3NhuL8ZVeJkZsuoC",
  "key21": "4TDSES4f9yLDGpFBmNMevtqDWEERLJXyKbFDV2KNof89TktY1NWhxh1qrMntH5GikFbnnQVsJr24maXpxyM3XcVq",
  "key22": "3d5LbCiLjj4oeTWUMQotQycF9mWRfViVMLVbxAbX1QcJEmkBoQJW6VamjdWNPaNzzCHoP6DVLHC3MfbWfRQpMGE9",
  "key23": "EXzbKoKEDzdK6ZHkAzyzQZzRUrphrDJCxwTNvEco96xDNL1QPe7fAw3GYUfDZKWRFGctErK8mFRqBZJPdgMY7yH",
  "key24": "4gJVqdCPmx6HfJyvXhYocJxsUeHwRby8exbmpKNvyMtkD2frAm8PJeES8g4sxJ5B4cpGH7u41qQGjyY5Rmyia1GJ",
  "key25": "5UtgQtr5DmhxiNpgpXH7Gc9ZmPiCFQbA5os9ZWJfHrRknYAb7khKYnWvQrtqeX9oHqf5cXW6o14oknwRPu9cCHte",
  "key26": "5V8pr45jTzSNnfSoH7wQLCGbe3DMkt3X5WFUQCWXJgvPY939ASeZQ7E8sq3nudBJyG46PH7PBt6HaKWeyfjsQJLP",
  "key27": "4JGCTvad8UJvmyTyAqg2n4aBny7BVyxxiZtvgwUSpRuVkEmdG4YKoz96zg6GAckf5EfzV5g5hcuYWnm2TG3E1DPk",
  "key28": "2g14JWCGdt6BUJ5mDTVpBKP2FnCVFJyCrqHGNL4QWfcpcgQzNrvRhHioDyNAPzszQzDrH8UNquntWNCLxcjZk9a8"
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
