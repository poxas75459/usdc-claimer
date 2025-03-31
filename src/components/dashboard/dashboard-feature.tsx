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
    "56mjNMBL8GEsGGDYhc2N9afH5r9yN5xfiPap1hJ5sbM7MWh2m3vH2YxJeaHPXqmYstfA8a2pMfySuCRdsBJdBSGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fifVhE5HdLZ1pc4a9Lki8p2ZsLz4JhhKbhaYWKWA3bT5sNgN7QjTGDyYZyAvbnNqg7WXkV4W7hiaWD4TgfuCxdt",
  "key1": "3gWLpjvUqFCmh6sHck75UNF9AjNRYyAuLwSxCWUxxc5QjyEnPk4ZAXu4c4vDRrqcX9pDFQNGfFH81tJAVKf47ZTj",
  "key2": "27bDrj6ALzH8tK3ZLQYiB2LgszDX2ZdgjNZKGXDV2M3WpT64KCX4amEBzomhWhLWcuwLjbHWZtt1i4TRA8nWRKJs",
  "key3": "2dk9Tn8CuRHDL6yDFLRCHBVXpQujKMK2VgamvkLQACN5NyyTXHdMYCHAdzDbnM2GVdF3ZdxCRTuoXtu3SiK2n2ik",
  "key4": "Q5rmreyKXjuAvLTBorhiqGzzwe3cRsqNuknXKVtXS7yqiigc3tQ9bNLccPAzFYaASLpEi4TfPiRo17gYcT7g9QE",
  "key5": "5dJEQwZjbuEkN6SEqeBTbNEvjsQkdbY8fzbSxn1pbTLFrpGtLMZBFyq6xFi1CmirHzZKE7Muvr34epBDukbAJfFY",
  "key6": "pkWEoNsm8je2BS3axvHRgzuifDqyXp9vTCVUy2n3GoVgfr2mZQhBwhsUY3iJPur2YUJbxkvdrTJushyPMg58cAo",
  "key7": "2fraaWfXtKPwVktyfi1AddvomuT5jr2pzqW2sNCkC5TTfeuNb14yFtd4udycYDKB39VPhzHrVz2iQKwZhB1Rd19j",
  "key8": "2zfd9PKHbEDWdmjZeYCc8bn4ru4NKUsKXHLXx2xWAofMGhEGJ2Nug7uBVhYLVouJx2HLpDUixHTNG4dtTzSCeF5E",
  "key9": "2J8AKytuizR1qqdEhUphhQ4wQ7LiwK7ARWL9Bf95JwPkBLAbVkhfR6zAyGzXtrwzPmefBgM5VgVfLiQ8nUW472GE",
  "key10": "3K4EpUyUtbGfPf6qkiom9AGmo6Jt2kU42nswyXtycm7umnPrnKdzXsK2DXET1FKXQCMst6gWkqU7XKnEGfQLx14d",
  "key11": "2aTobZhK4MRcs52kmMKGxN287LsWNokDxsY7DvLXYy5zDFYde4KuCfC2GvK22ZXF8df8sBrCFio4XekU6hBVWnAB",
  "key12": "2MmPtjHJFuxQrVsuHkpFbx3NatFbRGnVUsqM1zdrdesoZ6Kz7z1XBheJLDZdn7FApLReqGTTMV3iowxorqHTmuuf",
  "key13": "4uEYw3Ra3Nv1DroLFLiH5u1qZco2jVQmkNx2Z38aqkeaRGjnSr6WyJhwsBYUVyug4nbpNSdyKkeU3gKxjQRU6XR9",
  "key14": "3BYKwiLrQxvGvjoJ3V2gHRuC1xW2eDGThLEZn6nUdZUwxqBdzDJjvW1ipnsh7odFKh5UWGeNzcAsfsvVMTkQsYcS",
  "key15": "2BefKBtwmHspuYCsB8LFxdgbGwyAvhBiv6z9GezeUWvc43QB7YhQ7FuBq47Dz1ASAv78jED33MDPk7x5d1ew8hs9",
  "key16": "37es5zwJQ2S82gwJBMiMx2nBkQC2C2J7H4XX9dHAQ1Hy9NVvQNcT5Ai9xcSMoj3ts9SojSGm2p6RkbxR7CbWnMwy",
  "key17": "4yYDa3YtDyKV7bWBZsB7Ye9uQczzyYiUrrx4EAVs35Qqo1DsJdXUVwZgVNRideA3T6U8ofN9V62Yxq3QbohBPzru",
  "key18": "oycFaszB28mmc5n716Ac2UMxsAWQ6A8BXkpeb5JNTgjg8onuqzwqFP6r84G8EPoRzrSrHKSTqGCEmYowo8Wkx6A",
  "key19": "3UDqQqy2Fn6W4nuahN7dnPYynLiP1o8gDzK6zygYEATpoBVAwY7ouTgszGr16QzP9FuDP8HeriBEHeEvCcPN12VG",
  "key20": "32nf1vPpafwEzHdRWAGkFUU9onYofPgfihb7wyqHbDCTNaejX2bUvtGfhnMCud6SaDZjhU8HdTqjBdB7Kg4LG1CZ",
  "key21": "EwBWEWMb3rtFAUHyP3cWjtYB3mstbAxEhxsXVxRQwfQDSPYVmQYXQzkSxbNja9L38ZoghVwZesPiNnF8XyQ3jXQ",
  "key22": "48JbnPSPvWvcLA8z32jRK2G32fG6PZ5n66eA11cYYLsgh1dnuqrWBcB7mn8ATqL1npHeZ1xNA4pCU313UYMhXQFb",
  "key23": "6VpcqPnTbeqhKzBbYvzfB8i7ia6Q8MxSDDm6BdvqiTv5hTjtTfC3mo24pNFz8KaJ4PWgaLbN4atqA3cQ6sEcT7i",
  "key24": "5guvEFpm7f2tPnBgXuKZBXnYhiJNtBeAVuGANHVwJ9dDtFiPHfNsUucHyaT3xXDDQpmnKttSXMXiiUXPsQa8dU94",
  "key25": "64XApe1rs5UtpSWC7FSAPiQmpJPJbqxZUec6S3v92LbyFdRxj5NSWke7zo5yYz9UmbTSc7a1FpZmKNp3bGqqDfNB",
  "key26": "611WPHSHdTfVYNFUj7ijPiqMWfKYM2zETB74V9HfXpR1Xgh989m4woX18zAVotVbKcRE9JKAN5LmbnbD48r1em1L",
  "key27": "3wXirdkVgDTt8UYufLpurWscB4rsKx9zZKZ8zMA8epQda5s1Po3UYVjGn1q911EjQtgcq6QqKZaohVt8DP557dyE",
  "key28": "61Z1zTKmTLnZArXqTKoUoA7KgNtDK6u1V69BfTSUW88XDQrcCxxKMq1siErcfmYdhR1zTVsEGFe7QwbvcYdC7vYv",
  "key29": "opCtfMowBL2m6x5EMxJK3a3cVfAj18KaJBn8bKUMxA1HBTHk4eJSKycMYeVJR88XEYCR3Aqr1w7uVK5L7PaLC45",
  "key30": "2AYdKizKDpJHDrJenfVsE58X1fHMHyshk12nESAZgnf8FkhasUnAL3GDLnbmsYBB7vCBC6bYhGJ3U3RaVF6UuXxc",
  "key31": "2aexYt9BDDocSWhWkEKEmWefa3CeKmm3CkaW7AVwjEN3dy4pZgqSm2mKGkG8yNK6GVa53EeStaKPszHCQa9ykBk3",
  "key32": "4H1e3zvjsdfN2gkLRMs7n22BbgSSPq1DWD97QLHrnYLBdah3httrxvNvK6FsHkf5FgYKhDqtpLaXUWv6otC1hWjU"
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
