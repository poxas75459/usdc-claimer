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
    "2rKwY455rau2fjEnf3EK1UW4YQsW99zG6juTjVLcf1bdkPbMUbVtCvtvQm4ANZUpr1iJp1DRWrMZ8ucHtZMaRVXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e1KicM6GqmFQ3bF3e7LjT8XLWi22seLVnDKh6MCd1hEwYsQexvZLJyy86kn9mhVKTNLf8H8enpMR4R3kCFJ1wZy",
  "key1": "S4GbfEThsGbnfiYbvqkE6JMDHVK6oXn3RmrU1UFW3aSg2B65BTf56hiC9em5b6ge7Dtd3Yu6tiTakDoqWGNWKuU",
  "key2": "5iYQAziMs2NtubQzVLKj6m2bv4uJB4bkKCtADx1FJh28mZNxtCKjN1efXPCQyVuEkMhskWUNWWH9iCEG3Yzs5gAD",
  "key3": "3BFLYPpwyWC6FecgnZFyEBntBfvRSF1ctcbhGteNAXsgy6YWgJkwFEvuu3qvoBRTsDtEFRNr2g7WQmdJXB8DyTZm",
  "key4": "rMCcoqLFjkpPPq4HhNvRDcQRhi6VCrgcjmBtisrqCXvBh3U3jMyN5k74vJeRKkLXSWz9pGwMJ5gQE5cyhUvAJxr",
  "key5": "2ZwMtmih2Pf4e9VA1VsDWznH7oFPWyyDX86R79X6KWw1SMeKvEi29Yg1QudHoUkgp2dK1SJ5RjXbMpEFDez3cw7E",
  "key6": "3gzPVEBNPU3pD31Bji3GFYjyNHBsZRaUiSxxWcgs7Zw7UBa4gmFCE1M4jMy3EDVP578GdwvZrRmUuo8df9wBCzQp",
  "key7": "5JLDvDdHXk54xuxgj66yprWYFSAAQrDKi2TJHB4G2QrtH9zQnRdA9KBgktUBCPdDBW18EsrHVVK4nEXLSiFFBVMw",
  "key8": "5Q8fdRJug1S11kVJX9B2d4bG1nta6qJigj45KQTth1r2npvbXw3zFdv8JKowjLCVe1bncXDi6V4oiEibDEXKZffG",
  "key9": "3gQSdFSXy9M4Mg3pHUaFGqQjdabmENavCdYAQ89z2wZgS6E5RywFx1tM9gRESLrvu5Q19Hvf5XorWUbDU8c2Aud",
  "key10": "5zeNyu6LKYQfrfsDWky5CgtVvoCCVYnyWcAu5RE43sLMEWuJBLtG6fBRkLaA6bp9kxgyDMi3C6qxUBi9DD24zEG4",
  "key11": "5Fj3SCKZef9qjQZTjJB13r3VxS5sq85v1KZCrncywWhmjcDABaTjqvEPr959n1t5LGfy1qVeWE9DZ1BXmirKcN4k",
  "key12": "4iUEsDYJZHtsRnYcwsy3wtGtrGJ5C4TKGu6YbdUpmY5bTsNWpxaQuD5NZkhg6kFeQK7XkT6CY2KyTmnAbLWzDfsa",
  "key13": "2BoxUbYzJ2TQV4sdPn5LaA8gGW8bPMDuNcyLg7nwhCyyR6eAryn5iLLeccSL3419fms3PFa3y8nyiYyn4DemjYPe",
  "key14": "4besew45iaKyHxRwz8YM469WJm2PsvrNYpxRaZ9KqyNG23T8SxAxXE7oLvKakHMCYPCN1qCwVjmVpg5zKejxvb9D",
  "key15": "4jd2Dp7kCx7LSTqZWt5prFZZMfPpXnb7FbvbJM1pNVTkiZS2EJ54LMXjEHw6dLR79WYgySr5WNxGMCLS3JbjjuZ7",
  "key16": "bwmvtju26zeTFMZXuoUDMb2Y6QE6yendxEXyp3aF7Vi4Q77fgQJQjMbhAgKFpG2Yi4hWpUbRhUd5UC4CYiSZPL8",
  "key17": "xd15sSZP9kiKQACivZaQKAZ23imUMF7pZZKhk1QEKTHEq7pcUZvLCxXs1rhcGHhYCPqDXnAnQDarJ3Va84dYASV",
  "key18": "2o94pYvvW61V3TEdx1kRt6GU1TzpKt33jbuufFc64bnM5mRQ3K4mYGbm3tk1JWKnvFJmAyt72fZrJyYHpWXV7cDP",
  "key19": "55Sg6dtEWoKYaABzjWmuMqvDBfPiv6eYzMTVjhdWMh4L5EtXHFURtFjv1zM7F6cm5EyhoWBcM1xrpZuRqewPKETe",
  "key20": "5TmRifTiXguqbx8w4KcwVJYwjRUCuKwYUdX9CL4TtvPd7HNfHfPhHamyaZnisTHH7kbJJF2UbZYdBdr5UkBwSMG8",
  "key21": "3F9rtZyvHUKVrVLgXeWehBB95oSHSYJBQKyRkPWVHh59DA4yWBTfPViXWQM3hXdf3bUv1RyyQm3nbVZ9WxtaPQPg",
  "key22": "44UzXYZ82Lif1LaFzneRv6VK6ddjLFEnF6A3zGCGUWAgELQaHbJKn8i6FNHQo53LUdjUbLc4Hkyt8Q6RSt6zomXa",
  "key23": "37d4tjQc1HWvyfLZHttQz8KugQR5mAuvirGLWB6fFT6Frtm7R9NJ2RBMu6wcK6TU9Tpf9nvMVZt1AoaUgy8jK5Yp",
  "key24": "3jQEAjLhaym2SFqCV9HaQeeC42hB7JGMbweGkXdRuJTjef4J6dUjni17ZNGL6b44Ka5BEGaFKPpLwJEippuYtZ47",
  "key25": "xqfw7DCBmbQ2EBUDtL2GN8JksLzXHrHDKGV9foYcehLscYP5cBcrF8gejoAetKuwcFh5H3mqMeb7EmhV2JgnEdD"
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
