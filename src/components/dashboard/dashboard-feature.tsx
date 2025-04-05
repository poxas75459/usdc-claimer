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
    "659oHoKyRyKFcny6rQ2eUuFMdTUC2AFxELkUrBtHUSPueYiQqrVVFDExEjkznbzQXYuEw5LibZnx7BZpSi5rAfdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CkdEDiQ9ESamefHnmT9rpEzaqz8ws7fzsu9zbpfNseZ9kqrtiMiyZUHYmMBcmAxZQDRaA2RDwZcBRdrh7moHzDB",
  "key1": "jXRVgWCWsvPCeQeF77f8nNyJp9RYTiNzkGmc8DnMvJjjUMvVbaH8i1nrTZ3o3XvhgmVvPp6Mdi4sJ2LapWKN5x2",
  "key2": "24ysodd2BZ9h6nKBQyp1wfvGsRAPbRgNUbe66yHhbX6ASqxC5ELPskCXLBJsxEhrnhJLL81KuWzRoUqHHsXTUksG",
  "key3": "4LyJXjH7HEQ91mscUTJpdUbhVtm3tXygv8kApfH9CTx1qEy1ffaCxys3PY8wSS6uWEWdYX67UP9r7nrKx4ocBgHk",
  "key4": "5T9LjiSnve3SxAyefxDMLFH3NTRXRrBcSGgkBMcqG7tyPEzgkTM7rPDQmsoaZfygYLwiQ2PMmKdKmgEYPtd3aiKK",
  "key5": "3m7YdrircMCXdUSN3U9ref3UnS7sCKqvvmc8sw8UfeWrcM5VpKS21g1amZe2rbXs9khLtvgGcrDM6moVKQwdfKJP",
  "key6": "4wPXDrrEz5sPAR2wChhZGVLWvKFovUh1d94MB4VZeDXUbwHroR2A644w8eorqFEA2JoUxuGCp5KsSTYCDB7Rvk9U",
  "key7": "2GUR4BUHS2E6eR3fy84LtDzxHsfeKkV42sjHSdAGbioyw3HYabHZPpnHHDzWhuihjBvfxDjGUVZbEK1zqp5pRaoV",
  "key8": "4HQd93Ph7NrBJVr8n4MT8xk8KUcqmDK8EpTSob4Hnspa8tgvTTfoUAMPN9QpiGXNe7CHGMcLZbRcABUQjCZGX2V1",
  "key9": "2G9pJqoqYPFnqVoEGoHnEUj3GyqkprfpdorkvgWka3m11RY6i2NVConmzhTJTdbR4fSagXHBwm5iLKN6XEouztb1",
  "key10": "eR2BNfvMgTr1tY1HUULBtxCHJrDHERqZSfqQujBxav4GpHCDYVHjkonX7stD1usPcHFqoDxQJPse4LVk1Ywgyt7",
  "key11": "R6QRTkSzeCzAV8Y5ntytsfNd2koobw7sUN72bszCVdhcyzJ1UiGLpDYc7avk8HmR23TWFYfdzKoHVuhDf8gq5cj",
  "key12": "2jGFEQhZxNESq2cSuggSywubsmdgBWxUBTgrrba3FtZk3cwZHiVXqxJYb5BQoWTAQ7WGfm3D3XTMbzjsnnpn9dqQ",
  "key13": "63TCpMArCYfdmJiCq7FDFrgtfaPpZLLhJauixjRw2pgY2m3ZEbNn3CAjyiNtB2ZBhyJKJew8eXeNM8MVQT3ME3WR",
  "key14": "M6pnxb9S5qH5A3dpw3aeXbYzAr5X9eBj1k5wKnECEkGq962beKyyuF6LuJyn5kAXqVyK7Mq3jniZQH2TUHVvruo",
  "key15": "4chbhvLFJokRYYqdsDvKp6m4KoLygJy3LgWhMdSsZA7d69pS4RB743unYD9G8fv4b3DPJVVFKEuZDsxTbuPFo4mY",
  "key16": "4r1eGftx53c7PhoXUC9H6uEibRJ9WhdU2b5iSzYrkdMuB33xMuZcsezUwB6Bn2XeatMi4sjGjnnjp5RYuvmLoA87",
  "key17": "4E4QUA2hDURBXsk9JS55sTEvTarh9tmFzMSeVPFWEu9e8x9LvNdwzYwLtVD4yxuQ4KYoZXgU5TLQFusUr4QpKa6j",
  "key18": "3abKEsp14EexsxAfZSewse1C7Au1nAdNq2J8PfkBiHG8jSpiJfcgXwSHgySZnJ5Ta5sJ5k3oqt3ipJrk1x6XchFq",
  "key19": "5k5ze1q1bkPKUR7tRcHRviskAQboq3oncosHaUX9BsJSmka9K78bv4bS6XQ2C8nLiSiVkVifhBKHjNWuZGTh49WZ",
  "key20": "2Jyn6moqpVZfEzFSNUh2cQZeSgtgDnT3rjGfQmWTachVCUhhanF5DEUTAi76H1nxmt6338rsTWCTwmV9QVbwtEEg",
  "key21": "28nziQuosuaXWDffYnik12No7JrHnFi7bpBBsgKKErY8xPt63iuCvbAKN9JB9PkxhGAkKbUMVmc1dV6vnkHyqbiL",
  "key22": "5JKhBNnyPoGsCAxzdgiAMgNs1jKK61avTyTmx27ABPe3xw4uWXsPREAdSqehgPBDPSG1N26mtqetFKU8cYdU5Szi",
  "key23": "4jiq4zHrYgZfMzbrkjE61KjHHULht39rAugxjoSr1hipdgaM8uCRUuLEjXRFUzoCW6FjYJM2VTTMaQ4JU2qb6rAY",
  "key24": "4mvC5VR8CBsQDTt5dr63DfREhhKNcGa9W6WU3iURk4y9g31uhXnTqtNjp6y45H9nmMqrno3dJJy57rTsPrbjVsZX",
  "key25": "4SGVUj9phUyMcJ8JJUsfFu1PYNKunog12EDm14BSmPMcaWrMrZpjDm481FbBXshpYXLuAEEaUebd591HW1rKgkXA",
  "key26": "5rcZxMtpYjkzqAawHkRUPMqcZ2MwU8k2VPgVzJHiGZB2YqJnfLWxnHkPc1929Lbvkg99rBehNwMPv9nwfb83gLmo",
  "key27": "vHKHkh5RpbmWPniERGx6FBbxZThitZLczBsfTBTm2QCmfkLKePSRXdmn8aQFpEtgzs4vRYLHigGgmLiRBDH5GAH",
  "key28": "i2bwHgUdc6JDNGpeWtPi4zSuQCtcUytetYJjyYtAVfHPSxd41wcQvJyXTqDoyrxcRNmKPcMpeX7ov9ghMCnwbSY"
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
