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
    "4FpDbNfyjAZ3i9vX5bqf97S7g3PEeFQcW4eRx4aDzBk1jcQ5nqUVfUnT5pZKcoeDUYs9qJSMpeSSv2dZeAasuFCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cVvAGbWnUD4FKuxBsQYy8s39C4GudJXEhxUkgppah99ZbcNPA8Evfed4ALoVYGo6vu3gbFSEcFTfmXFyYBMNDbP",
  "key1": "wpdt6f3HPKxkYDWfbbJGgZeMZB5yKL3Cx83nLrMCvX9DnfunBioEDpkBZDGZ1Cf9KWFFuLDsBkefRXoDuHRe4j5",
  "key2": "46E9UV5GKZm4qv75bXj7jFPAHaiAGUAjA8CM1AGDLmRzfooaX1Y3VgEvkSVU2RxdK7CkpNWL1XeV1z1MKKkTi3X7",
  "key3": "62aJnUCz2adUpiFmWhqmteDjzNfiLRxSZRHiFZi6cRnNG4cs7MJrE5SiKEuqXAxKwHezHLPmM1vnoqjryBdYeMdo",
  "key4": "4YyWEzsXUUfYqUKkKadMnDTNs4CyReHRQcki3sKAp916k1L8Q8BW2GP6xAqyzeYjwKmB6UuuxHuA74paSM4gWGGs",
  "key5": "396H4AaJjxFGMMA9PMduu4Tvc7NC4MBF3Sn6pA8vQhHPTXksfcQx8x8nnbzYF4UdXLhRLWUu4YCcgvAqQmcGzv6o",
  "key6": "Ps9Wp2mVtuNL9JR22d2d53mQSLnsTjY7LrNuHiCZLiJjsWDboswCffUB7aLCu7QG89JZi3yR3cS84nb3uitQWER",
  "key7": "47FXSxobNJfrK6XmfQWhDP7o1GXikbfEGz4dMfznmekK7qV5T4wsdh8MXE5yJmTbwiPiD7ivua65mAKqrB69KZe2",
  "key8": "5mXhzctFF8d4PHPr2QUs6X1uKXm8CvjJvZ7MxjXDQxXFvEsDLzM8HQtjHfrWXh3nvUWVkfJyMLVv29NdNGNp4zzJ",
  "key9": "2zzXCRiFsU8ELq9zpuu61XXcGDWgAxaitKoBMVCn1FJS1VAsKKs6b88yo77wQX14xSDxxw7BUBqdpgHAG6Np7ZGc",
  "key10": "3G9MDunNe4zzTM9RXVA8Sr7vTwsnJefJsWhsAQ3mhJXz57sZUMrrpbfTQ9bSCTmZvwQ1o83SW3tevrFoikLgGYFE",
  "key11": "3wMraJpAD729YKuposMbJkcLjDxnXXwQayUNcn2LZiV4vzynVGaJKHcMrn1WzQyxw86s8hYyJpA9buSQDMUZBbq7",
  "key12": "3hV9iuZaPdc4wNfa1wF8jFWcSUWPEtCFP2DQ9Ez7TUVRZs1AySQ1gNBuNo574VFWVq4uqmsNoYKN5ikLRfN7hwNx",
  "key13": "5mnvBwDexV1k9NCxJesSRw7iHnM96CJknRnVNyMA2jFHZKf2iYh3j41pBRZ8D5nG637wj43fVgcR1LdCx9GA7BAU",
  "key14": "5PipaouUcqasov88GY1ghGeCfRuS8vCk1dCqaiViFtXkZKV1j3HQgzGmEM5yQUTBp4rGa8MbKfMgYVyBce36yGgu",
  "key15": "2G4EajqsZQFWGhwtwrxUefmkZFeW4pkPPRhWn6RdJzkzGLEYzTMhqKTeWEhP2TKQcFRjwrGTSC5TYgP4sSJrVL4i",
  "key16": "523rn5MPvdsLGH3g6itYyWGQSAupxNY1mrUTz98qw9vXGzXVYS4GHCC8HZQrnFqmCVxgrTP6JQ8RYHrMVQfRDRvW",
  "key17": "ytHz5qxCAQkDnL7K4BLEpgushvYw6eajjb8ea3WP8grAJ7vsgtVpU234hFbRhEUqjnjrS8phM2qmQmsaFNtrG16",
  "key18": "5kJq2PCCMJvMnNrEg6w5S6PWHYBCRf25ytRRpmJ2KYzRY6JqSugnR5DP9B4W41aB3LwnRsiNYkfM2iCqWv7BjqY5",
  "key19": "2KdW63UXaSAYSAzCpaZZUgc6eezckszBA4EBGV8roXQk2WXzCqpG3ecpLpQ9wgNyjpoPbo6oyLCBqhVsyqDKNFcX",
  "key20": "3EMZYD85K6oJThhZznxDc7y1qeyvpYFaYKrC8JWXG5WoGFPicQmwGFkLt3JU7GVNCCGwAqitwAoKUayrCvjDcRZZ",
  "key21": "2PJuGBxQuXUHnuu5sEbTNpRUKVcnGGmHzia6FUBmcDQGzJLYH3k6AX66kvXzvUvAtV8n6eSyTJ45j9suTr4iecfg",
  "key22": "2CbwLxgJE8mRVzEPHgKHkWaU3sKSgJZAmfDFprkLKG6hn3F8om7gT1i12f41v5NBAMGcohhX7nyGs1UVi1w1Cm73",
  "key23": "1XrNUowYKEQELAAsxjZ8rbmprxCfmAy1J1mZJyeEeJ2A2NB67J2Qdp7kvFhJWTCA6ou9LXhovXsidB8riQxPX6G",
  "key24": "4oRSFZBTjdRosm7uMzw8YAkaeKicXP2HheUH3bMLLrnqrxk41wtZymqfgseUjbvux2hrfHRGt7fZgwH5R6zWZ9sw",
  "key25": "66XV4pDeALCM56okew7Jf8fGW5eXXYquQWzW5QxKph4Y5McqmvN2vnAPNvBJ4VXk3kRwf7sMM9mQGFEgnmMujQmr",
  "key26": "4os8hfPQm8iDCm26BkwZZBccJKpAy8BCFFKXMmoRdCuaM8C1fsLxT99qC9evHC41ZZ17gtBEwE3hY2KhBhn63sHy",
  "key27": "3Uaik4XFc1P6ZGeDckbC2zTrRLdB6W8Sap3MvL7bqWZ98URftVRkZnDUEa7W7HTXe8vBzZHpaEF6vBhm4hWhjXy8",
  "key28": "48WRig7WhT83P46du9n6wBmHDq55qH96GTaWky7qXbxCVXUhb9DnLKiMVcUggNQ7BYS8n7m6QEH5RJpyH2AfkAWn",
  "key29": "hCvxn7qBJtDJvctW311UzF7EzQRYYBBdyCmDvWUigQgBViYxZFWJfytD4AqMDAhFnEH4r5GKoHfCb2Mo9Bffe6m",
  "key30": "QvQauK9AzrCJuTk7X45eiK3K8GD7wJGQetry844uzCrkrxQR76oAT5NNzP8DTF1A8iwjzHNvzyyMd3s6WaheZZn",
  "key31": "654FkbWdWYFYy8QrDmTWyXBJw5dZCjnkfU9WiTuYf8Y61jt2SvRyTU1x7ipXUcJ1gtMiMqYDJ2tUfnTdJskLLGAm",
  "key32": "Rb73EUdvMGDSFbcNKZ4SEF7ewX7GbqLpj3YjbJZSEXSFwrCpqGs1nn9aCLqTBnD9zRTvXqausiWtBd4LhjgEYZ2",
  "key33": "2XMdA9Zj6GEN4kuaRgnWVoy1m2UrQzG3EF8iMikxEwUCgpYZwgSttnJpgeAcMzKvT9rBxJgci2W9YvS1esW4S9SR",
  "key34": "2Xzeg4h8Mg3TFBFd5nVt8hvhYbXbEm42CBcLJFXK7ppGCyfxXhMAN9iq9mF2khZ1Yff2z6bSmnfbP7zXys4uV3UP",
  "key35": "5KkxxGxvtHM3E1nswtUdcP5K5gTENMbJffx1a9njiYNwfF1c8MEgRFsz8Va1nRfKofma8carG4tSUeUizgff7bDE"
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
