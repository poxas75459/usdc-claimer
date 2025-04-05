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
    "55SqGUnnFyXuACSNZ4ku8wEVdP8qRTMMWnVsEQWuWJvfWz4JvfL7B4tX4r3RRxccFUnRyGoB5ug6mUbCz8Uvjhv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S9tVZ7WqvoFKNNH1RU4UZhFfNP9489u8inB56eyFdaAYnrHFjuCLfSoUGoQ7LgKqrcQijYAoZQo93WSmse3xfmJ",
  "key1": "3xpuJBKri2hUFRSK2y531eVs5hxtYfRQAYzXG7BMqSFG2xH8r71pSR5Pp51scR2p3BZyu3UEBvEEfVk8FovqqvyX",
  "key2": "4cNyczRuhJBJWuM8ddzusZ5twnwee567naNVUad8JWnBCwJTpsRHtZ7QmzfZ5aVD8xcytcRZXxqTaTfe445s7BPs",
  "key3": "4iQjXjqd2PGEjnK7eWeHUtTe9ETKaSeYcNtGWqb5V2twG8tenfTgaiKyribchxapkLNBcoMVEwGwj3TWcVKQTjnU",
  "key4": "5z96betRob7juA6dudmiiaUskg5RbH8cRr2Sta56pLV8obNoZYbtf3v4mEXAUBM21adaRRpxAUmKUbTvh77n4j1F",
  "key5": "qgoLuHNQgZgWMcTRJ1Wi8Tv8pgGmJAJ3G3io15Zek1jDRcEyURsreVzuv3U3fjhVfT9QETGUHRNyTbShaaggsG8",
  "key6": "5cX2WsiKfDjgsJRSqzXqj61mG4D8szv7eTQrpje58AmZ46vVpc5dtsHoYV1YM8fLmaCeL2usDBb5nKpovorsFEEX",
  "key7": "3VCpQiyoVNoRN7z7PMedBvct8tztej68wM34rbAqyK8WFemYYA9vXKpGMNnjtkF3kvreRNeChuoSmPLk16fvT5f6",
  "key8": "3pbwx8Q3kQ28LEtwff8WH4W6DUVr6gdjvFxFw6SqPkJCUGjVygYwjs2HBDoLrbefQv1KgHhrnCP8rcRbnXy7zLHe",
  "key9": "5WcAL2yQ128ystEcEiqS38HXdbf1dvnZyjR9PTDsRMYpJUWHVruH8V9zQE3g2mWbhs1c8592xR58Gdocbe3fVDa2",
  "key10": "315V7DHSFsPxdB9cy6e82LdQr8ZWYzrZ9TPCFhV4WWbqHQn8CgPqTN8wihNioPuoCtgkXBvjHBSGNPsW3t5FsnUU",
  "key11": "5j9DecSyYfwejBXNcx3AbeUSBJEoKDsMqo9SN5EanNuSxLyGfAPLa1syJqfzaKLjtRSjLbuCEWTPDfRzddrSsWpg",
  "key12": "2kHU38RJsQsh1MmZZw3thqyEqEb6xGHvZ3GndKoPex89GMDj4LcSuxUmvaNeXLTvcNQfPWjMiMBT8brn12tDMrsy",
  "key13": "37fuSPXaKebyRtLvF7ti2gb5QgS8NMcZd3Q7jfaL8TGwXjzgTigLxNeUVbjyNrQWHXaiRgvTzFYXhR7JFXybbVdL",
  "key14": "4o1ywX3BFG3Gp1u87N4upSjxzvpCpa2DPaBVaPQYZr6jdFMQwwAFE8PY69Dw668NMZdzKdkWcJsP1E2RfTjkZDCx",
  "key15": "3iCTz6DP8TqaqWkXthDErgmqq4YUnKbXAwyz77y9iRQfKTgh1UPNRHQLCkhzjXikLEouvRHtqoicr9DDtqP5qGbg",
  "key16": "2Mt9ynF1WYjoxSCmueSYqXRh3MCj1chgNrmsfycPqWRCX87hgNSb1tGyNfp6YJ5nCfuFQACjtS93cp1iagCHMBFV",
  "key17": "zEgnahQFy3keQWWnvzjsPeCWUXkPqQpmX5L6DKTGuSGdg2VZn3xJ5spRxWkLkzin1HMoyQb2JG1m6n5Kt6raKM4",
  "key18": "4CnPovCSvcWHprWQwTMYsw4nx3fhZC41XzGDnpxDVBgfs217xX7SGLaLYbNGXyBhWMufXQJkS4KWGYRW21nerZUc",
  "key19": "5dtp7kUNtVPw2Qe4F7jLRDov4PHtMDkspziqecpR7221oYhDopG2MMCp3iXcPfaPj82aaoQgYW4R8rXcbgFkkiXJ",
  "key20": "226GaoqFTqZMBniBQErFRcXMVQueXqbQusU14Szez5VmQRX4Cy9xCDAgPBSYDx7twbC8ZSCj6vPSw645w5E7KdAs",
  "key21": "3tPnMnQvLQvncLU1pUGBoUzN98uncVBge2ga8794oepCuU6ghKEP1D35AuvEAx6DRn4GLvRSUtsuq6HuWrU2qcsy",
  "key22": "grmk4n8kTr7qjcF9rvG9H1Z64snwprhJUDpHqpvxfLSJqGyJthbfEmFZdFDiGrV4Eado7mv5XARJhiRahcEESZH",
  "key23": "2LMyR4JbiNVwmqqHQDGhQvpRSRyPtPdy9A1h79b8ZbhxPntg2C9wZm7RfhicxeEjxXakDxWzkV3D1tZmjzKKi2kD",
  "key24": "57LRLyHjNH5vzXN6Lq7qjY3A2RRkrL2YqsGAkKJ6xhQ8jCVJGyZywmHfpMfwTbAv35W6A3MkourigzhXUzF9TFHR",
  "key25": "623rWZrsX5YVWTMW4KGYSLxzEz9SyjtqMZSTkSaGJRoTGUtjtCRKqesLGRq5GudSagKGYET9sDvUju1iucBcU1ew",
  "key26": "5wgxMXdmafMZ7pQGNYJ4d2mgdtTg2YEbLGKS62WzvRGXuXsVY6GUFump1CUbwAduNCQXtMmtCNnkcVSiHs3wLZ3a",
  "key27": "5h9SsTFV4vrPjg5HHmk3Nw6TAR9QdJxhodGe1i62YRhtLuooXFpZNrVUrUDAMTnCnivww2xVwkHpqETDNZe9EsyE",
  "key28": "3okTwUzTEc3fNDtUPCBemLsdmHWKyGuaGigcVQuf1LBAU4hTFsorRCKY9422CHN6QzrEGUrbULjdHd4f9akKEueK",
  "key29": "3mzrf8RBxC1MdWZ5WtmwFT7biCJxDGy7JUqcfA1uxHtyHtbf94fcsLXnzkM8HyGvDJudCGqTRMCK5b5E2hv2dW1q"
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
