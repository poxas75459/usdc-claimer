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
    "35J4QrMXnP5HP5eCgrjBsYQQRnaSBYTnwewricP4nyNWQy3ZiGY2zazQYXWtkiwFmxytmtVuuwGE9TcJyCgbZZDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J5nNQWFq4TDF14b6yDqRhH3SQ8sMXvVd2rTJEGP4utnTaULj8pN7d8GWMwMvEGRz6Ap9FrMvywmBjW1XVrQrYPi",
  "key1": "5faCr2LvkLWoR9oEkqx6TJEZnU1wsFXoT9kVY971G3g8DR6sKfUMf6t8hoPaeKdhZtKvDvvgWfaBMFiXXa9F7rLE",
  "key2": "42SHAReVovj5smgNvwk9b4wznVwgYXD8FygTXowqHYhmP4jTkVgTf177u7HxxEiwxeAxHfCZu3j2mTqYLhLztHzR",
  "key3": "4bGgixJeZzqTKnzJXZiezGSCoQGaGwQzU2ouE3RtT7ppZqx3xRy8dyFevwqHkjHYSd4Yxh8s6uysvCvKnn4JN5Dx",
  "key4": "33BwgFs1kTNjE3mBq3t7L6fzW7xudJLQDk4XeRrHDNx3rDREZerNspgRbRSH6BHLANUmoDX5MpaaDZ9TZKUv8Tw6",
  "key5": "46xyPwf1rs2r1fSEuFByDCduuvpYCajQYWq3Ubmev5DuFU4fZ8NtBHWuDmwseB4yn62rcdZ1728CZPwy4rqbwMew",
  "key6": "2y4gf9WKuNwUAUtBUd1fN95CTN7MVbsBQCF7wCEgPgfkw1rjwUgfpDCKDVpitE7SiAmqo6c62TF997wPEYvXRg6A",
  "key7": "2Ts1M5vPgeXGRckB1KokrGXRboMTMcUGiqhE88jXwAk55g5D84qNFSaDRWs7cd6ddpfb6x8vvmz3yZvmqy7qT4mq",
  "key8": "5tE7FPqrPiyJxPauE3Apr3tMwf97ZW39dvaVVv6LCWbVgXjUXGMfpxkjBKMaouix56fcoFuwtKCLwBMv1ZWaSFRi",
  "key9": "4ekXvEAPmHtsG43qnEmEZWiZsvUKHQHMuWh6bULW7UgdmiFLZdLKi2x27rhwro1zvcPQP6fUyVFvVhU9GLnmYPSW",
  "key10": "5tqeggDbFcbi9H1QRZs36AMr3wcrB4Ev2G9V6oqgXCTHupSMywbbWyqANusku6mKmG9s5GYyu5w4k6XPvX4JgrJH",
  "key11": "5Ny8d7QRSE1iWaj6VKCXcNADTJiHhPrrkaezA55bDEXDPj7N6dahgYe899rqdqpMasCE8dXU1z7Bt6EksfA9yUfC",
  "key12": "48cSBGTyPJ1hcGPwjVVQNrbz5kF1tXvNLeyAc42SKxV3KjbvwyMr5pxNDzraqoSgx4RNRWrZFUwcLKh9b9Dk75FM",
  "key13": "LE3vWH4uEo1b4q21B9HAifX6F69SJgQ7S5SX4RbPmMGAaUhWRCTwhP8yfSeAmA3mvhez4rjaPcR9Vq4LB3ho2bp",
  "key14": "2PzMyQJSV4pLs9hnWHZDQvviUb9hBvfBh3f58zBPif6r9sToBUMzQcXqNaRrcDfxiC42Xrt6HjE6dAjD6cmXbYTK",
  "key15": "5ywU32AGSubBL17cncj5woPsTpgwmkSBZBqh3ds1o9sXrBrQcLMkkPZUGkYgHCXJVqHd67xou32ZJtVrLZFvShiR",
  "key16": "3qciZVftDoKB3tW3fK8kjXC2HyBKK5H8cbF2zSpECHPs5bNNpZhASDeCNBv5Lq78FatF5qiz4REo4sUuan5VyVR5",
  "key17": "5j1LQzivyyQywTCHuwe9DDnqkoADGALYS22vLC1TAGzggFYVwzQ7pTtMTsLSqFBuV8X8YfRyT66N3Q8DXCZGqMpC",
  "key18": "2an4ZK6x4ur6XS7RyrgVkgEAUNZFrJ1ZvDZhRBZ8SNKUdSwekGj1H8cBCAerqDmTEZXVCGPx7hBA3e5AewQtADDN",
  "key19": "5aN3B1C7eAKjnvXURZvaMq21T3dMTbsa7XCosb4DW4NLT9hwhwSWyvGcyugMUphkhVaQ9sgk6gbVZJ5jFPGyW2Xe",
  "key20": "3dYd27JrTH6ajaMyNBBjmxT51De4z6KgR3sk7fcimVat1jpwPPK7N3rE1MBDb5K3jN4pNxS5ViYCuGxU1S3J9Y5A",
  "key21": "3N6qZZeXqQBPepxRnr9G4i13KqvSwqX5EZHxwPHuKhJXhpDWbTQaQS9VzJ21eQAqYQvwyNoRK27eB5y5iP7D1ZBs",
  "key22": "43mnCS4yuDsx7sDfEVPLbuauv79rmwFCKD8zX5XNANcm7m71dzuR2tujufcRd2WptSEhLX3qUF3MtSF9pmWnus3i",
  "key23": "5WM9j2nH8EUUaQLPwr5ryZGP3sCXEdVRXctN2fWiHcAj13g2pb7LC77XJEvWhm7H8WqqWcsYbQTjGJAZWJDvw8XB",
  "key24": "pLoENedyN9ZrYmmbKzCdz5fYkkp62kagByKgmazb2unPJS22fcbt2E5pbuJYqUgMK6Zi7iEZxUijXz9niLqpdiZ",
  "key25": "3Y1xEJheDVFBQTVAjdMYE2JjoFUqtT2xDoERtCU5ni1gd6zaBEhhdrhRxvLkotEowNh4EgqQpWHrbpaGqQYmjKoh",
  "key26": "34t2377RWfoKUCskP2i6e3EPifb4LXncybVfhVHbuK8ZtBtsRK4tvUwXteg8oBjjfa2k2DuHkm7VQhES5Jq898xR",
  "key27": "Vh3ue7ig9KPry6y9jj3eTnowYZtdKcbWxFHomnV7LKre2uDEfzqKeiN2R4Xzi6tWu62QLhbg58cmq9tagsytLyR",
  "key28": "5c1t3c28uBU8QpeHtG3X2EpRGj6LejwWTcm6MkSDbtbLV3aLmSCu34CFPF8WZcuM91L1CFFEmPyWeXsy3uyMq3rb",
  "key29": "3LPPiN5Jn4wk7kmVV9k3whhxGBMPXMtvcrTtFvLCSB3GLewkSnJyVbYLPAvV3bvtv6ZDr7qYf3jvgdzHiTKNFEjq",
  "key30": "4TBAVFnnepXXWRCvBf3LVKrQoXRm73Bgod8SANmuWrsLxBPPQ11RW6ugPWPBpsHw89gzyyQhyhZjv9nss84qw3E3",
  "key31": "4U3ei9H2bqo72dFPKZ2DWBKwEgWmUPbyGTZJBWzqFTL8t1HTpZLanb34c5JZ54RztN8s6d4eF1BFUhYcxnxjRc8T",
  "key32": "T6RJd9LHdFfmxBFjnxrRboCq8z437fWDaPVMn9u1JwaJqmaJTzCCpThjxpViqcP5ir4jobdhc73kfPd833jd8AQ",
  "key33": "2ZrLup2NBg5xHKNcraUWcZGJm3G47yD55Gdgpb3fPPpdo5DSr478qMnUsV9oSTPmf1nRkkpyzj5RJ4pWZunTN4pp",
  "key34": "3vRt4yombe3j7skPDGDJntTdN6Ewpm1RCbPH83Bs89ehQnW6oKvnKTSi53CGU3d6yUtrysXfq72Zfisn1fV7rdtV"
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
