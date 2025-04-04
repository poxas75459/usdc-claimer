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
    "5o4nriiZMaDWkiXMeLp8N3Ahi5SzvYgy7XEDSbNthn1pzhXFoC3USf4ETFjDgSWLT6L4Dq332VDg7NPWLYYQqoRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tnCAieFxcGB3EZssFphVDcXYX3NroGZqYT8fE7z16WAAj1tJQ6fM9Ytk3zBA85hfuaxFNpR7ZgoKQY1usTLadZa",
  "key1": "3ULVU61RLMMczVXaNi31TJBPJB9fp8rNRA9upLtjN96wmUWYtmSPuY5d3YeyC6eBcXsrjhdwj6bLUqeyiGwhvE8z",
  "key2": "5LfnZhEuNkMFjQrq9e3cbdgtSbBNKPGPpTzHd4VmmgSHt1BmyEiK7vLYUXVoszRRzmmwBAJETLQz5X9GCFiERdhj",
  "key3": "3mpdmm8DaK6R5NFx3nRBGiNGQkdQVdggvqy8pUgbemFwsVGXq8nvVjnfjFz688H7biSwW4XP7WU7YMrhzX81nCgB",
  "key4": "4pwqU1vcEPciZRLKbGAZXpyogfcSk2oe2NyF1puU6zNiNwEsKfQ5KGkn77GYU5X6nEjU5cpF4i9ezvLcuVCVjGry",
  "key5": "4epY5k3htWw5h9KhyiSahJJgkPXKSpx5au6NNZPPBtJeBwMHFV7rKn6EsikNq8tBfqCEkHvycxij1MtUwYERh5kn",
  "key6": "uukZ4VBUZNobktk5zQWZVxvQngJFFKvKhMo2meUrwiBZJeS2AiCjqmG2hRSk3VpyEkCtBhMoj1BUu6X4G3TKfhX",
  "key7": "2MTTVoHBjprjZAEzy3fwMQTdfab9j9hUDhPYv9znarQ6scJLL5WZsJ2p4LmxqQxnY8rc7yUipqkwrudWidaEtLuq",
  "key8": "4QYdrbCd7KWzaam42nAmtArxjaf8cHgFoXa14V6zCSrTVQr8WNDMur1oixeXMayCkPuLi7Q2iHYJrXQ9SwHaF5jM",
  "key9": "cDxaQfpc6V1hU7dh6RdLifojcieMPd3M83enn4rpxthiDCKBA6mewWj5roe5v4Wwy5ExXzkFpQwC7FuWSnxxL1i",
  "key10": "4WWX93LhGKjdeChZnmgQsnT4BoYn9jmiaEsw9be69nZ6HkyQSPitBiipzj5Vmz9kddRVHnu2rYc9RUYrNYCauQTp",
  "key11": "J27xJcZFc9smKyRbhBGQhgdNUMSUnDyQ9CatjntEqrczidk4t3RtVfYtnCdBUEi9FmuqTkjypdmvHvc2pA5jAW3",
  "key12": "43wvTmLw26pavKRLGa3eVhkHeQuaC4gEXkgxKkFUcu2WkHa2ZixheowrcidHrzsKx5mtHbvaqBua3U21a5zBoGMk",
  "key13": "4AyTjkFqXDVzctWA2G9sTbScYPxEuzNXAZUnadJaGSCoaz16gdEBjGoH21xK4J9ozPjak2kXxudvDo6sG3aTZf1t",
  "key14": "4oPJ5VkeLigLRoCnxJp3nkugkGq1qQSgEgNt2NwJs2vpXfKZKNjz1LzZ6JbBDnF5GE8QXMSUndCd2kNbfBtezQzu",
  "key15": "SNKHBraZbJCtSG8dGaxyXv8iA6yCZDc17mqwbSSCZtsTvfTcGWCzP3QWG2wLn63apPJmLooqdNixErDThPPQPPm",
  "key16": "2FNNTnyQwjZ8dsvUmnwUvX8aFMdpnMeLvKWQRtZQhaB1zjuHcbS5iQVik2uCTMACNDj6LAF7LDthvsjr6ChPZUT8",
  "key17": "4ArAVC4s3x4PxjJxjCBVUVXysp48Xg6Ay2Pbxs19icFyfVQDYVDDKZkmezpLLrF9jktRkqqRybWEaqxJDXrWMjiE",
  "key18": "4wqmfKJCeqURQSVprwzaCydgaDxKqoLAk2zEGpk9iMeY9gfKoZiDru8xbczKFUt4qSareUsR6SitxVGquspTnbKq",
  "key19": "2sYLq3qVnzoGNg3UrxcL2yCmc87121Pd7LFpeMsHfR2fvBRkpt2aQ6cNDc9PPhDnueyKkfrfkmiyndSYvFUppbeP",
  "key20": "4WR4aPoh2vqj9kqa2hBti91BBsbSnbzi6pKo1wxjsGRXVDVwqU87XsHtiSM5qmf8Yo1NgrhzRkz8FKMHCFcB7qtK",
  "key21": "34pEK5UcFuAWxd26qFgXET4wR1VnkJ9mxsD9Ci1zdtgEJDG8e8b4Gw6jWFcTtpdrpqxWqZv1LHESWpo5GsvdBmWi",
  "key22": "2AaVeqNihU3oY3bMkKAD11hhgzY1EwSvdeMwMNWGwZNJdRduytffHUQtwWxu5ihYnbm1xo8kVciMVuEeZqUWsoAC",
  "key23": "pG7uTzWceoyjTjLJBCyupiRbDtGHnbc3UVBGkxv1Nn1wAmab9T5ts96RqxpL7c3epTXB1M3bmrGQeg5DztaXKQe",
  "key24": "Yt1N5g3rdFpNVzU17JcYCMnwBVkeXYeKDF5WZ4mmTuny9uTZrn8F4euzv4PaCNsj7iuXJK7pQesRMbCoUWQerAh",
  "key25": "3ehoLFt6JhJkvqsUAkeXdJdtFmrLQSiqhWZQ6UtwHr1Y4oXjFJoiEC5nv9Rko8UmgSRrf22m7K5hNth6mxU2APpY",
  "key26": "4RzdmW64gSLokL21qbjF4cKUwTKREjtJipWdxjkwaRLG2c3CYxqaHMPJHu8HxFXgG1nRGozd4ruvqrtMQrGtjj93",
  "key27": "2mRbZUHzqATeEgHM417dDaYnyqxQUU6q3Nyhrckm8yBpkKiXHPEZaVKW3AS2n7PcWTrYcJShpNLCCgHDtfKxZRMU",
  "key28": "66EiexHrjcwULJgdMu92jgvaUMkBDyBzmYAwEZsymedvGLWm2K8NjtDXgj27gW8erdiYWGYyUbnznrySKTY4xjxb"
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
