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
    "q3bPj7ZGdiAqFH8cXaDAAAX93qCBSF9Sts6VFTztDUevP9XeDDNjGWQY8Bo8w3DfkRagLFtu8J3aNSSvq82Uihr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zcouvXaBQV33nL8pPeFGFErNccW971XxAhTkw5CRMaYFqTZ2N5SxX6JQ7XLaAKWFHJZpoRJQBRh51hEDQmbw1Am",
  "key1": "3pry76WrbfjSPYiXQo7kN9RNXdgv9jkpotVUDdBQuGPqwqSkp8kDPLT5iG5QedNHhEUYEDZijyehZjAbbhWjj1gh",
  "key2": "4MzLkZRR7FkMD6s7MJ4WRHvVDVCBiSJx6Y1AYkKVFkwE7nXqj56u9Frkdz3UjaeSYH52nqHprjKhPD1V38Z7BXuK",
  "key3": "62yoTk1m4wY6gS2hd1uQa4WsnprcGJ7P2U5hxhEf9vHkoM7G3ZUbnZJrmVNuXvroqzmDrw3QpiGcHcNQL6NkxTi",
  "key4": "2S1HxnrG56QTzHhuNsPe7bmbA3G5s5ktyvrZj1LR6xkCqSFRM3h12ZRqLRdgXpuxh7pSsNro7nWHUPB56MN4yPTp",
  "key5": "4gfRjPgSMmAdsUB7jTJ3YRFXK2HTgDYV36oLuxrfn3v49VRsiAujerYoLqgEKWntBhyTsq8LCKhpcXryAd4qoTuE",
  "key6": "vM82KWF1GbdAt7UMdAdXPC35ANKf5azPHZgTNo8BHn9tJavYn18LSbqyqCFQeUUEosg5SgvBfmnZV1kPo9rdpAD",
  "key7": "2P5x2AzWg7Pg4CNzS3juoM98qGtApxNmm6ga3vzav5K682CY4ZaoGYkLeXKUpeiqYnFihZsST3Q8jm7i173tHEcZ",
  "key8": "2E2AyYtwXLyJ38kCcR97TD7xrBt1YLYvvv6ZapWAbJ8JiqYnR9PjoDvmAmKj4SFHo8ALSnKvZm8eiNdaki3k79iS",
  "key9": "5v3Jn8rWvCbdLU3Godc4H5Pjz4WBTeJanKcngmxQh8U3qKSvraxRwBfvL3SHWMK8dVgZx9ir9Ao4rPELbh47fgpy",
  "key10": "wuYe36D4ySaxt13sVNeapLuZjtKNEmZ1Z1rKrYgz3A3rZWkXm8aM44VW8nYkwQs6KzY5S6kAtx3RX2oVr1b2sTZ",
  "key11": "3kzoLVZgkiYemc51LthQDe2CC5Hu96EQfsy2yLD17FfnVJE8oeB1p71TpApCrQJo7WkFWzJKZnVVigMh2jWncirX",
  "key12": "3gVXh9Kt7Y8ARLQftjjVVebvNd7BB7RPWqaubngffatpHcj4H6S38xPq7nPikvQe3NZhBea1aJPoodnkxQqp6xk1",
  "key13": "3Y56gb8joft9Guy1rY79ahgQg6W5urdzPm7Ec8d8rY58MCrAo26tK4sKZ71Nzco8GotQEgXbgSX2Abv83iXzXahL",
  "key14": "3SHJ8x6yur295YTTVQbdeoFZ3Duiz3KiG6qyt9zgkffdVUn7M7bzaRtzucCrZBvKL5dhdt75RBwA3Lz32qQvfa5B",
  "key15": "XKLJ8utZNtt8PTtXddijsvVZMW3qPJvqhKPDYag6bRCPYxgi53LdfHiUPh3UKYpoiEQRaG71c3pP4t4ZMnpurTs",
  "key16": "4GAwqNMJ4YbtRhor66BoPKC9AKfa8qhL2ampHq9jUs8StL96wp2wFeWXnbvhqdq1NGerhUpE4a1MfAixherULcFP",
  "key17": "2CSbrwvmcDm27HR8NGWCgd5R2rWJBwu9xTXuhcFcmNCWfgMN6gErWmNUsDThYkiLr81n1poKZbrPNozG1g1oHrNf",
  "key18": "5wRoqr6FMebvMZ4MkF5w7ZQv4KsGyPm1a8kYNwxBLTHR9X1BNynoWXXZo9x4Hy4QRy1J9hG5nhZdXYf7iZTFE8v4",
  "key19": "kiu1Lzxezd96JE8xXD5S9NbfKqmssLbFyNVoTTJvXJppFCaQ8NxAxndCczbQBenfwP1hbiZHbH2RLF8NXbL9fxV",
  "key20": "4g6E7HoJzQZDFrxFwBBBRYMLz3iQirQ388oJhNGZvdfR3fSDKdvK89siaZXgkaooCEBXsEAvuzoZvWVcZMm3uTxT",
  "key21": "2wbTMxDg4ZCR7NePEniarsmrbFQSNY8X6M6fQPjC8eA6QHYriwkmwZDQTcPkQhSZmBxUWWuMN12QkqyDNYzXK4io",
  "key22": "3Ngitx2SQa6WQitrdBA65kC4hZ8P68FZrXSnhuHfUoEayzx2U79GMGd5AquzYvqg1iKPXc28dFkvPxdBmSUC1aHM",
  "key23": "2BbnoSrcLDraXdBaALYwiier2KKm6UVYJmSAuZpvuN1SskU5hP6KoJUrAzK12zdtTe6SpQavYxX1NtrmvFpkVm2w",
  "key24": "5Ny5dwqRpztr3Lqr9nMBcrmUE9yRogQQzXrpVowZsFVAL3ZmjZCFbeL3wH8pW7UtoYcygo3pi51xrZ5Sy9LxR6KK",
  "key25": "4qfCaY5yYEj2ZhAQatM7jSh8sqM6H4MFc3RhBSUjpoWtVAmkSUckxZSaeHVE8w6iNDDhq5QKf524tv7WGxcHvLQf",
  "key26": "2Vcj4WLnaAUABnecaaSC4y64zXWpSe5z4vSni3jN8yqpWwpAVvow2TgcXpjeZEbWfKFZP2YCZ7SRksGT2RsraTdX",
  "key27": "3yz8JCgonsuyE4GKChsvtrkF75qxm3oUeuxGN1fXQX1gABwQyJq69xh57aeCmjgz4t5pci7w3ceTcVB3JtNGUU26",
  "key28": "taYtPH98DaVRtaiivWxN2nyVya5wLu5u2DBUwoPB7hN7EvUGV2j87Enjro6teouPKY1j9qaT1AutTzbEBhBCuAY",
  "key29": "Q8UcXNy43SoXNNE39FX15jduozUgTdM4YrDRzerXa1SupvvGP2d99Zo4bU7KSGB3jCwViHbpUsvKoLR3sMLonKV",
  "key30": "sjH4WN3LxFyVhrYDGCbbL1vCXw3hJwgMD9LPf6GiwkL9DcMWQJDGuz3SUjKPuuQeA53xrf7tp6WhPqT3TtRzXwF",
  "key31": "VehKbWZvjGg9jLrVwpphUKTeDhyF5nQ5fDrdwQjenQdRUodFgmsMw6TfXevLs67b9v9VDXXg1KavfmihVuTeYFH",
  "key32": "55V1eMRe74m48dw8ZTWvXkTRJFFbk8vKm5fTb5QDnZkUhvctuAmBose8LTTDyUrnMtU6E4LknFUTkkVfEcyiJ2k7"
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
