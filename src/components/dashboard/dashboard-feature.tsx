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
    "o1JEX36LtDb2bmwbjN7gRVGAF29qHgn5hJG9ZqENXzrTgHPnANWSjdkVQm14MeVafj54iu2cGB4sQroAWWKnYV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SqxBXaRY52TELQwpQFCBopx3DYcgWiftitdg5uenf4Z6PgoNh8BZ4AKvz9UmDpSdsWBEB8JzPc9kxzwuwjBy4Lp",
  "key1": "LJy3VfVG7sizNmKzNdnf16sbhYu8sAqjGiHi3aAdvwj4stoWU5G9LTQimothemyfDRp3jVvD2LmaGm8F5zvTu4c",
  "key2": "67iAXyDTwh1FdEVDijEy812ateUcv2ynrpnnNFQArwFxQRcVYgRhHpmfnzToSboubuuBkifHbKun6vf5F3m6KePs",
  "key3": "44QMxkLkXcoPyZbRWvdvki5QXMgbivjo8drJfNpDNW3REPayEYd9RTUdZtpVHBKwaiAQ9UakYBUDwS9rbyiLL9Yp",
  "key4": "6gZrmD9DxK9dWDVJTxWBBKV8uP3VCddeF6Q62vwHdBfDTixVoHV9fXNwTNTDMB4xss5Saq3tVobujeoRY6vrSVQ",
  "key5": "4bqFXxtgvVtLvoLopmzhs6tMn3Dcew632FecK72xKAFbm6wySYBU7hLQBzRyWUYioSYeWs4P8BpkvhyysXjP1uC7",
  "key6": "5emp3HVsSksXjjCJ2MDDdE4HWiMRQCK9MzxqtxNJd154mp2EqZaHN48uEKMuKdrdXbV621mf6g63pS3uacQhzSLB",
  "key7": "2vHKWcBStJEHyDrYjc6GdZKEq2e8pRrk43aHmGnw5wnU7FHd9tP3ekrrjZf51o3615m3mC1N75YDJeQeteUGn4M2",
  "key8": "3cideKtZqj3WFd6W9tzheGHLT1apRTjE7UndgPeHG138YJjjQzjNGvWZ2rwHXck6dS8kmZDqh7tAQSF5MhdDHCQ",
  "key9": "34f9SvemFDG6aVTNRv9LSGQ2KWDcrNzHAmi617FudtPwFDnrCuAv5ggNuELy9KuTZrPuUBsG8xip1dyL9vur4HRC",
  "key10": "5ocnJHCsdroEX8FNNFK2ojeEeGqGPZhommu2s3yfqTPPziZXeHhSe6gEBL1Kj78pJ7yg5oyfuK9G8dVAuyKXC7Fr",
  "key11": "2YNahQZtuNgBUu9DdH2Tnpa5XYXE8ZLQCVvuBuGFxPGKFG8bBixxFY8EmFGsa3nmLr1boQipCLdjgQmqaEdjyK27",
  "key12": "3KwyZpXRD9txTKipgsKyoRs9tTkF3QLRuQr8jem92UjCcQr1e4TztPzPoQznf7j2FYvb9ZEJRt9NyYU71QRFSfCG",
  "key13": "4H8KD4KjUd9TUyVh1tgjNhNFxo851mb9mMFYninMqJLWW4L4gP1XzySSSu5N5RBrNsGPnoxqSYGnoYpqTeSEEpvd",
  "key14": "4n1563vDiVsA9kPDZWcBgt6V3ACG8Vs3kMD8tnPSV8Z7nkJByShNKhPSvEZ3VaHds38muJ5HfLV6qmkUGDUc5ku8",
  "key15": "3YeSbaVzREEmcq5k2e15fgZ96rPe6sSQqwzM8A1rS913UhC9cdnqDrn44yiaTmKjF5cW5PaQMfs9bs15tDUU3fc5",
  "key16": "3CiRpbFPHVLgrsu8pDstX4VoGT3p3uwfKrKvxsaUdtEoQ14sKttG4sX1rYFrN1nnwYYrzwy6PUdhZTWFoavncDTw",
  "key17": "3AhfZWPtW5gwMFMWxY3oioJdc5jP2CiT8qQ18g67D3Yiw9yVSDPGsTZoEWB416YnivhiRuAN5U2PyTbPm649bwJr",
  "key18": "4jwfq1ih6mE1B7whA6q7Bv8NwPMZEZJZKRnapcWKmGVQ1Sggb3KPSz5hR4hoWSwPZRkpnFvasK3WUL11u3dv4X2G",
  "key19": "3GphNjX5mFYNpC6s5YAf2fNca2RJoWH5bf9bYSxaLoLWE8oQjxenipjzyZRtPPctgpqfeLKEBKGvkcTPh8RYK69c",
  "key20": "2e4KAi88znDwBgyjWF2MNXuxwnuVkA9gJTjf9JfXqggUZhZ3mEyzcrhQ1AnHE2hzQ3Ho4qavt8eWR5yqUDbFm5QS",
  "key21": "292huTjttbYdL7o4a1cPyeskqWX5D2dFwftnMRAcYz5R9hVFFGRBQJ2c5yzxCHQNZUkL29vgtqvsKFtRLwWqbnyu",
  "key22": "2eze3RULBi11M93otzQ92TFGaa1TDJcsMgeL6Mps1TQuaeKLxyDdNK4nQprALbQ7CbFArpxDNAGRrJUJ2SQDmE6E",
  "key23": "euTaywwCA71RKUoZYLMhPUF7c4ApzAd4LttJ6pWYdLdjBidE4d1Dm4KUBnUJA2GLUXToEXLfo6iK75YT8c7c6PU",
  "key24": "51XpaHN4dw14GgoTrMoyh97FrH7UQTrqUEF7rxN4EJX9hEfMQjVhaan6jHm5sCS6go3uRvcJUq9gTiunmD8RJYgr",
  "key25": "32WNNCJ4tdx5PjmkytbcRXWBwU6psMk25y3tH9R3E5rofWPrgFKsFXqpLneN2BfWWMTMxa1HeySdZJP2emEcbkAB",
  "key26": "3tEhWgCFpZr2sc4XkpMXEsNjV3mX1XmerLgff9JvyujimsXcKwQRShTKeehduMqZj6v1sAf4MBVVu38pwTspam3v",
  "key27": "2rKdNWUoGF5ESY2dXBRxYhk5noX8QdCMjJT1EZu8PJJEeGxL7iJ7LJdGp6yxwht9uCw28nMddhxXc2Eir265HV2E",
  "key28": "3e8X14pNxemZtZKLcTYBww7aZcFVLvQDitKApCZY2N31WvDinP2ndcQRekdmY2cj93KxUvTLLxjDiDAMRPCMEupp",
  "key29": "vipAG3niafPwAMjMJfx5ARy5X6uZMhi8G5zR9kxHMaPnKLjrFZW81FmWJ5wuzfcHQX7rdFbkiyvh8L9cm8ZDvRb",
  "key30": "2EowmgqTFx65ec5xm97XfNCuAcDgmUZ8NxC7LZXpFERBoVdw8kKFPUkSQ7StFkHXg2Z4ADW6F8NxfZVfaLK3DkU8",
  "key31": "5wpqmKFC4CXbTEcm6XdtuUixv8zCsUTaF8kKWS75Lynj6i83XikHGfQftuTtnQLhpfJnxWo2oyL9oMtrNz78ZXTZ"
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
