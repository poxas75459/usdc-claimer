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
    "4RiJHKSGwDbmVG5g6VaVK69n4dMdsas2mMvxboVktnWV59KtngmbZrWWQHi4Bq1gWPPi6JSXzYUjsDigsc7tFhV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yhhmbjd8A2mQuRvU1fKyv2NErmhS9PbhWLJWGgenVmHhDdetmFXkjAygvPJbSYSeivvA5YetNZoQhdp3gSRhEhU",
  "key1": "3ge1LJi7Wb3VPvjBM2zDaaz8Nf64xs1KiV8c8As9iCKJ1Xx8aJ3SzdkNmeACq1s7cUAwYW6EHUVsB22YQ7DAchPg",
  "key2": "bug2uZ7iiiyinG9vX1z8BnsSSFtg453KTi7GwbkopLvC6UMWES3CD1TN3rHxrDroDufLCZnDirpkRKzBKsFzeeJ",
  "key3": "5MHX41wcdP2mvrGGBvrBUV7pD3UmkLBy5Z1WoTtPQPRErNqv6GBGHeBQe6WgsYECF2FidwytRrRjTzgWB3gsNLGe",
  "key4": "58YWisScf8dvrcdjBbmneZdywZjezWMoR1RsbXbUPNTGsEwjFJG7HNPQrUPqQ3NSDedTa3pKeF7NE8A5JPqBJrWA",
  "key5": "46kVXZdyxem19jAJrpTTqPyHW5fpcmQPGVGJKytaZiFrJxeNjriXE2Re8Y2ybm3MM4mvsV43GfwQhnjNymJByaDx",
  "key6": "3js1T34UCeixUT8x7Raa1d33KuC9nQMULp7XPVcJv8h9anUcNmiZUS7nfoWJkJ14YTeE34AazGNXWpQ8b53sk4Er",
  "key7": "4NmwusdbURrLHEjpjqjDGhJCGvxs1Pz5WfDZEn64Z8LbACxm7iuEByx464PPvGCa6uD5ru2KMJKCWkTxdmthjrUv",
  "key8": "4NwyQgM3Lvx5Ffi8L9P9WoF2FSGVnXqWvHKkAVR48tiVNXG5UmdpA53UK796nYeC4fxWFjCjatQFQZWQSRYjKFwX",
  "key9": "5SynQi7tfwGyrbDdNeuRXft2UQZSyscis2HsRfp7zNbPRuMDDiX8b5XTQkjnas2QEFeVXWYGEVB96aFBBvG84mNf",
  "key10": "2KQuUi8uNYvHcUDnBkw3zZXbVSVE4WkUk8KJfiPsjiyPqy9JZDcpo7ZZzkrkxcHCmmhYp9nVTLypoSiNY8nnvpvo",
  "key11": "XrgnvX1kss28zcAG6TzSwaa8GW6Pt1bFAre5K3D77S5kwSd8XNdNV3qKotMDHnW4DhL8gcvtqDxuqtwEWzQkrzc",
  "key12": "XtBYcRaY2hienfxmttR1m6DjBJfSSHJ91G1qUfHFWg7GpytLFFQQP1BpZteif47GgiAfXq3VsAVq9EF4sxaev96",
  "key13": "4rsHsE5RekFgLoxCrj4xfnEAzTPVHZNCJrCXd1os8CU5nnyF42gSCxDGKpaJjvHKPKnkQDT3qxyjsQTmELEhfc94",
  "key14": "2xX5otbbJeYCH7cTp3TRgeD82h3CGZ2QE8zuFzQkMC1Z7Cy9zXszXH9z3j94YH5BUe7RmnFYJogr6C4bZcivu1BF",
  "key15": "4QoGfKhd1F1FHi7vMvk6AaSbm8mtvwNpHrbUDykVVT8w7TK6tBMr3a4Qti2L9d9cgBgJhQWM8mw6muPVUNmG7eb2",
  "key16": "4jLy3FMg6ipX4wD2si6AamRA7UEjjdyypBPpx9rVib8h1gt8UwcpVoRKN73wpgzWG6mAB97q7H95mTVzCfWog7kU",
  "key17": "42n1ni386kKpYHKZMbJXQqpbJ1Xdjx18GnrkDCqcZFNptU4GzAZpbcueHyJWAfRRCMSjWLaTALX3AoaMvZJsWJh8",
  "key18": "52PkL3BMm2CwJPDkhwrcgMb9qWXWqvueNgjG9JFyznf5UfbRQk4JzQtwPcvX1uwksBLEYhvDcBXjejXwVeZbKZyK",
  "key19": "3eZKYQr8nQ6Vw1yLjRQskvkicva4fNL3aqsDZXHvqWTifmK9vsqnZpg2LMKx8FvF9iKqhDYoXgh3NLNuTUYxa7Ur",
  "key20": "4p9vDcJogBFPM18wSzPcmccjqs88tkCRyRxA6RxZWnNvCA5D9cVui1nwF4vo5usvUPH7JhhJVxnoiDEATvMsBEcs",
  "key21": "REF9TywB2XZCG89JZso8BZaYVzsGs5fN4w7kFcHCrjxsvFvKxtoLXGRVxNjvbf3jXTUqzfFoTX2S9H4Jq1SVn9H",
  "key22": "5Fo1UnrmfQJYBXjYCuF8X4mtc8uPvFhRE7kqgtDhBVzU3iivK8yNLgTNZN8hM611zZdFiHG5d56s5NRzFvKN6QV7",
  "key23": "4JopewfeTKpm9ZC9nPkAEA3GEUEXbhaxdVrNefwNGgSBSmd1QseBt4YYnpNVKevPimkTEMjNsZn6KZgEq4mDpZRn",
  "key24": "5xwZAMyMb6A8jqtusFzzsEKGheWW7ymp8ZS83vyhssU5QcHQo7VHmtTUq4ygn9uwwBUoXo1Qq4Eb51pBA2WxteCL",
  "key25": "3AV6N93sBBYs6RG7iQNJiRquM3UNnUecRFrERRbL62Yymgvh9WZ4ca6NtEK7Axp677DQWN3WsCDedBGJPFmD8ijJ",
  "key26": "2c5zvK1YSanjefhhYfNutdN2cBdSXM9UtsgG7bn2qSCYSM6a4QPU1eGsXmdeoaStsrXzukBzAxWY7oyQMadydCyU",
  "key27": "3Hv15UdMMZAxSejGzn3tRQMH3qBY2zKqtUNEfmyr5VBFah3UxFZTu1o5PLWzAb6cLok4LqRDTfknyfKZA3wVnEEG",
  "key28": "3HMteNqfTPUHqgyYWbzFjhu68fgkGgd4iCAAKq3s3p5QqZcFPy8DdBPqpLAuxcxrh7cHh3fqxT2bMgxQSEsYMizN",
  "key29": "575iDQY3RGC41VjHdh1DNsjduYCub6owUs5E3h1sWEVUEdMtw4AKCGHuU6J6ocmLJ2ZfCnDQ7JF9zyhgF38SniEU",
  "key30": "3GuciWiFS579LNJ26XnDz2u8AjSQEyPeVce3ZDePq5dtvGYymRGPexgrWuiFLKZrsR5nYgr6iZUxEP4QymS8CeJp",
  "key31": "3AnHgwXKWzFTqr2Vo3PpyjXzXEwp9SYy8FXn5oMiLa1FE51aetVtoaXHmjFgkfVkbhK3YmP7RFKVaqrZAzuqqj5W",
  "key32": "2gjuSSvWK2LetuUEHbXxipHtwUJWs9cdZE8qLUdPYgZfFZEXwmyE74M8i7p48oPRXGFfBjoiWuduJv6NTSa5Wm4C",
  "key33": "2wLss7stZ7ZJcss6NurECzSkKdzPgkjNXE6Hdu4xkVjmnRMs4rCDETN9qgpVMdiZieVBSrxbSn4CbmQHN1Xi3rzu"
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
