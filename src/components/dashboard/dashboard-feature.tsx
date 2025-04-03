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
    "3vdonJYz5JBhghya1n7xMmcCoonhaLNqbpCJbKgq43owKLUmRWThA3Bzm7XG5ezwrhq4GZt4C6xwpJ674CK5uJD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66y85dAxTgx826gdQbteu4pxom55cizcQMXE8QqEpuA4JoZZ6tfuDauTtQyxd21f7vEAMSdzTree2Y8zmi6FwKKD",
  "key1": "2L52Hy2K7jp6fbeZo9c2JbNonZnN5Kq1C4Q1sxu5ypKX8TLzTxym5p7MGJz1fEHsEBJdkUrqbP5nQoWdn2rpYNKc",
  "key2": "2o1UQUaGoLDpQ25qhpK14qPjW5jRb4yqbPo2vFdynKavquFhptvVb9XZts91fTP6WZg1TAQF4Zhod4k4V9kxyV62",
  "key3": "5CCVFWVyfUZTnDfmTe2AiGKCMyHRC1PxYR8PSQsbUnxhL3ADF5X4sCYE6WL54W1yujEz94ZbvmeZfjapkQ9Yamkj",
  "key4": "4th5kbw9NY7CBs95vXPwomBwUjGT8Pt1iSXprE8xdCq3Z2kExhBDVp8ibCyb5zpanLa3r2qRpi5J63NiRaGPizg6",
  "key5": "2aXSqmQmNuje9DLFAQDpU5VddZA8Ah5qgYv1THA7msUEWVP38h81W14XaMzffURdQtAASDbxAs94FrBhah3pw9Cs",
  "key6": "54fEUX1JPH2jjPUuD886pYuukQsXvQvj3wwwBfXJqbAFCT8QjYdh3M9o7NpxDbuDVsZUgMM91B2Gcg524Teb2phQ",
  "key7": "9uhg6wJ6KnWtkHbmxHWuQzNt91ugH2B5WCaoLBbhFPETuPSUYHg1zEUvWMNrsTzw2ZwrQy5VpwChA9CMnz2KBwN",
  "key8": "5zBDhLKTNVzThtwqG7PEAATrv8jMqWjjpH6ZpXftGZKUgBhLrM4PxetVueSPc1HCsam7EG1UWG3YcLR2yCzk3UDG",
  "key9": "5rKgKvsApj3UwzRiFauHqB5yhXs2oiBLQzUnLz72LqeghMBR1sNfbgm55jGLVa86hVsESAjgr54j7TTkfCoQfWFA",
  "key10": "2mguNihZRV27RB8wkGNpZFweHFTJB4QSiQ2QYMUx3rxNYJRvzPX6ixCnXwAcZwfHTPD5P6GBSkcnpxcqG8N3Z8Hx",
  "key11": "2dpSfYCcnydoq2Xo2gwupFTLJgrKpHApZVpkXGy5y82wFWrj1fVcVyzCVx6YbY4agUwQNfLVbUhim2vurNXsFtUN",
  "key12": "21zU9oHpJuHDpvhKUswVFw3gp4EkNS4qPBcbBghS3kmXFmkyWqth1EddHSRUFdDvuEUCqrvRHh9jv6TbPsEX37dB",
  "key13": "2AfoQLcfuBeB2LLe45KnaTKeg593RbpUKaPz7z97dKDuVBuBmhM3D5Tn9cHMG75Z2F56sdkyW1MnxYGUtG2jDti",
  "key14": "3PxYAnpKdoELT1TtD4ToGkSH1qXw7mSeJrNeWBTdrVa9ayN5KFaK6R3KcJKnqJkLDQDx4MAsxqcXJ7KqRoRDJKeq",
  "key15": "dhmuv8PNVwKzkuQvtggit5ZUktMvuZ9LWzTPuyU7hez3hn7AvgCBqPkGhVi4GCBm2AjPNW4fcP6zGGs8eWhr59x",
  "key16": "X5ZmdwEgwNHLvrPGBWrRxzyeYuwsXS4C2B6HZn3MWJms6PpRRm4sMqtWrmPkyzzH8Rw8zA2cx5rQk62BR9BDVSD",
  "key17": "5JJ2Ru7CyM46E677DnnhBti1wXHYvG9AbbxsDesCyLGz7JD54g6jGKsW6wp1QWvmm6nDRFLe2ExVKZskvtJmBSnW",
  "key18": "47AV5uBygWdTTHQjJWKe9VZPwz1knBsB27vucCUy5xHVKHj9E6Yynb1RD5j6ArDZF5p6CZNdouGq6jDmtYNyrbg4",
  "key19": "4uh3vCo4YqLKgCBhAEqDzEBpN6hsnKZ1JQd4uqYPE3y9PtjMA6j4h3hu7YzkzV8BbFwgAmRyb53Yx2wdFffq8Z6i",
  "key20": "2x9ZgC4mMdmVGrp8nvyGYSq6Gds6pVDHJmtXzH3P2v2euQMFQFiqoekaenaRcCHYEJDdQ63ou1DmVAdiJSS75XVx",
  "key21": "2ibHfDHaqJeZeHLCip6QRtkjDSqXSNtfLnYUeDZyMJSw3D6XXJNmS2n6kVAf3kPeqkLrP4XcHiL6ABeHrBvigcKR",
  "key22": "Vc6C28aNmDqidtyj2DzBXfaK5nwYo9AXvbzYxAnAYSbgGsgnbHfTLB6N7ftDrdk6wGymLHvVS3tkxCDFLiZ2RVd",
  "key23": "2hdkvjBu2PajKJCNUJZKzRWX6H1A4R6S8BBVkgJ8duK4DBhSpqqsrWSKGWigwprdhKNBSA3fwgdXC9dMD4cs3dp6",
  "key24": "35CxEe66LFsiatGLE4oDPGw6U53qtFowSkye3Baeu3cwuNQVWE18zLED6kwcQrR3bbe3MedpBwkmbjzSbCfcjypz",
  "key25": "2RveRcNep5HLFzWeMCVuHdEJsNnp96Vvfqh3gqeQEhWqW6UF84EKvDPhGXbP4DSxgrtNmH4fkm4NcHrLWVKhGCdx",
  "key26": "3DohdGgWs9QSqSNPgP5TQsV3VNU8UPnsKVuKtBjdNB7hmMpXVR1i8pXcyY9Hi1pfp18wYpUvb1CcmaJVPUwa3LZr",
  "key27": "2CjSJ1CNysoq1jRoZkWTf4W5rq54L2SMuuj2TTXM1PeRsYt24ZoqGMyNsFYw8bLiNcngFX12DDGKnjgEHtL4Uvp8",
  "key28": "3ky847XJhJ4CsFhUKfVQ4GcGDAw7UfhiqGNVD55V1CakLufS6kePVjKN6hTpRbwY3o1Qbp4LjMaXMcJkJhLHFcvj",
  "key29": "3WMxQs84F6D5yBx7ovwYpDyHD4vU7nWu6JWrpEYmDQ61fZ9Kktiz6iSyPK6Rz2pBPohLCTWPaiSrWgkjcfGYdMgK",
  "key30": "4cNveBeBucCkaUtJ1FY1etaffKrG7fuDAm5HCWZkPfu2TkGUQZxBR8iMd6nVwc2tuFs8Cr8Bx1LLJ5foZKFWe8Un",
  "key31": "BDz9BMZavyWTi33pcmduzjUsBBmbyUXsBHynks8yJJca81gqaBiZjnxjSQ4Uj9k5xV1cSBGbqKYg5k1DpxL87PB",
  "key32": "GShDAtnY4hbbNMf5Fy9K53THshEiD5nnCjPKLuXaxEj2GGUqnDdCq4KYXnQSwVtij3c3eT3DdYU8WtuKgLDtVUP",
  "key33": "5DWaYxN2175x4Z4871PoTBEeK7JpE5Pe7CRteAjTpPh6aBHJv5ERJJoZcSQxLnMe8SAM4mmfmvBMUF7CLBpwLpgJ",
  "key34": "j3m2PHcjkefgjaxXPzVA2UuisjBwfuLPxHM8KBGjvZ8DjQFyGz97D8BsC3AAC5T8amCnY5eDTGFbe7XaXssL8cg",
  "key35": "2vyF2i5CQ3v8dK7WZFcwgapYAVCATgX9gZUTExVLsSepAb4WDnn9TCDQhPzppDcCWX5a2r3fXdHBjqhKHXGmiyZU",
  "key36": "219Dz1nmxnrmcq1xWzZQMri8FU3R4Qnejsept3ruFsEQ8mcGLy1T5nJvTjtaTRCFazgT9ud3vJcohtcBnQbQMXfQ",
  "key37": "jnb9uPUiEqYuVS7yFKSCfjq1hn8GWHVxnHoRenTXgN2cp8dWwDugBnhpzqSUAkXQ9zLNhJY2VsRPTp6PYKqv7Ra"
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
