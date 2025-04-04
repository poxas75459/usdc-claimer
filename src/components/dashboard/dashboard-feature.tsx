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
    "3cdQhDTnoxfi1D75Gm1ZiQnd88votVksTjmbVLLFmoYwM6v4Sx5j1gDfDNgxgim3UGn95NoKYVSq2677C5HcsZzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GYzmaq1gHonXUJzciueqvGyt7ZXjP9jsRsg3i4Fsd3CuBEc6pPHECr59SURvesMapVmrZjENha8vfuNwykCGwb2",
  "key1": "5icBGYtScPAVMJmDrsdJDFwfhsBdyBYGMNWSpUmkTDh1m3UqA2RDxxF7LuJPseRsAZSUPebr5qCRfsrUvfupLa6d",
  "key2": "31dLC9JFJqme8natekHvMqtRFhvcKhiNMgeVcdudx5Bb8zZ1rNTV3oknZkcg9y9Sax1tT6LxvKBkWwD8HcyLLPX2",
  "key3": "2mrYHrPm2yBvBR5JgMR5p56JgcaRgYwAjcVZtazZ154mMCa6dMiKJpd3fZRJRbVeu2KdJCoPoP3sdH45iY9NnmmG",
  "key4": "2j2F8NYg7QSJR7P1LJoSgqEwvxscrkrb24rTSJ5vwh3WwXx8Z48UcHgRELiTbcVTcRxRLxCiG9wvq3BjqczK8y1C",
  "key5": "4due9CPSFRHEByswLmnegpHxasHU6hunSjJu9zkiB2aitzqpbPV3EKrkMKPqwDSRjfkm6x5di8vVyythaTKRzcts",
  "key6": "qgRaE3cDcxT5cUXcKNdfCBaBFdsoidgptduRzeUy46pG3eDigFdn7LGR7WTqbEegSmpM54XbjnvVgbcGB3cmnwB",
  "key7": "3XUSzdLU7DrHKNgDKLsFz4yjEFzHK6praT2V41uPMcGZFyuivtJX4fBfHiu9jvWJ6zZqb2qn6aWci8mKX7A3Xy1a",
  "key8": "324ppGphtaUetRLbMBzXtRQ4afhjcsN1aUEnhrqxaWnMzKFD6w2TiwDg7bmi6mKzWAsnhtrfKMAhzDofvhYkhWYc",
  "key9": "4zJEjZK5j9MFCgRK7EuG1tp9hZnFH3iYsq6yMSrcLefQCqnSRzmV9w2bpjAJ8sQJwFn8BV9wHUsobZ2ckmLPwxTH",
  "key10": "658AirUfQxoDNfnbyLAzKVaCMmx7e4fiWBsC9uuf9ym7Hhjk2q1DRZysvJjqFk9G2sAz9pR4ZQhodoHcZ8mNefbf",
  "key11": "2ooamcchvDGBa1LVawx9vDG2vANz6WoamvcCEZTtK32grxBXp1XTeFnHq3BB4RqgsvhX85hSb5Y2nuPpbr5s31kj",
  "key12": "53Jz18d5WvPyQBY89RoJPfg69ZKUujD9z3X1yN6hsezzk1Y2PeUsspjh7YE1sExDk51zMiMgL4XHeEsMiSZ8hE3F",
  "key13": "2f9fpuRmfPwD3WWopkKKZUEYAxSBwXLbtcRVe2W5zWE1ohXq9GjSXW8PG3usps6VGZP8YwsEPKw7juoq1TUept75",
  "key14": "32mixe7b5sthCLmxzS6tKjLw6uykdXTg5uCdxo4QL1n4NGtNuW7QZFsNzcfdm59n2oBLzeitq3cZVeMK5zJmUo9z",
  "key15": "2hkJPbvmCDy522tQmooD2Jktr7JSJoYjfPmygM1XKd5xWkMubn84vDZWdvvDRkJL7CcgodxzFdBg5vZPvF44WwaX",
  "key16": "4K7PqQdVAtbgXaKDbWKVArULRMQnXN8tTPfEhGMsTYYEdTCMBvQ8h6ku2gjdiSWcYrxHBmKtwprZHzkBJGd7KD7M",
  "key17": "4QDfT5bf94Yw346nWBt5SQrN8bGdFwm8E7v5fFfnksmpjQY59BoPjYGLpy8V7jdMe6VyzMPZKqFZcrp65PtSVCtB",
  "key18": "YrfKQ9tDeq4Ds6ZjvS1mGobuAbczCvKSP3mJ7Hvxdzp1jFXCgcu3wnAXCQwtqAztzX6Ha8iA15EC5vVYL2ucyp4",
  "key19": "54tkvwpxpNUC2RQ4TVCJqZzubk27p5X3ZiwWr45jsWV3QydNXNwgTTquLztVwmztMAumRbnjGchddiXq8tvYYdmY",
  "key20": "EAD62AzWqNTVcdC9oAneSxXcBmBUbjFhUs9Bz7FjLReswttTxe2oCW3aFWiT7E183yYuVW8anhk5kuyxMshfjwf",
  "key21": "4SPr5J19J4gTgCTT6R2Rrd8sfTTLeEyduMoxfr4Zei6ZxncN6uLPH14gr4uYjcBcZkgknWbqthWoij2vmAzLtqc4",
  "key22": "3v1gXJuShM1Sq8vmTeg385RQZzaF4KBn5SsymctuvLsj9fgqb7qc2xixs9vTbT1Q4SPBpVRd17P7wGny2zx2uxLi",
  "key23": "5WUvKsHSEaP9cBqUKeuH7NLhYqPPKvfhCPdQuCrtGhJePCWsZYVBs5mp13ZbTvn8SoS3E7c4PpFvTtHGrYzk2Qbw",
  "key24": "2dv8hzrfenV6qHYavq7bz6SbAA6C5DvdZ8rEL26Ga5wWVuS8M3hczJzaMRnJqKKCj2yKAkYCPcrMCq8CwJTP5ULP",
  "key25": "4V8fgnZd8eeBqNwMvHktCagGiE13ktRkxNc5mkNmsPt8R23m5hi2HRHgBpQBxo6gVY15pyTfoL6cpJWJAo9CgSxT"
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
