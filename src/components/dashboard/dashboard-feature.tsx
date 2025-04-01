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
    "2Y75W4QiGhVEdTDXziJsMZksodkbN2KKymZ2aZMKuvUiDGZ6KJBxCbQPwHYYTx7VCMGsDeg2iKLtGkqEe5BgWTkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oeZS3WGWpbvx6SG6yjUfRM5W3dc5pAiNKNRHTNWMtKC7SisSnpykNWYTXKmHAHE1UkBGr2x4G2XUPbbHYzrBFiB",
  "key1": "38twVptMStSGsjBMjD4M3bb8xx6DBGke62WkMPh6dYC5pTW1eMot7sDqXGipdGfQZewi6RrULGfNMMpagvLGbgFj",
  "key2": "429yCsSodnrBqj7ReoutQm6n6HqY5rX73tD8Q2TqicLfF4BbcfJnfv5nAU2SpmZRFmBnHkHChUhjuNAF9ZrLuTBU",
  "key3": "4Zj1S4dw33saGhjkorZ65Bskj1Vm5nQYkY2ur89AHpRgYszRMsGy7WJ2SqeCDkdj9DHDVvkSReU6ZAv2yBs2Qkf5",
  "key4": "4LVKLCABkk6hqy2TAyaqMCPAQ6MGajnDsmcQiXWpQRa9v2KFL5CyiZQ6XwSRP4f9PQg4DJEjaPDSVz1MJ5D3mKDF",
  "key5": "4hQJ2wEQG2vq9ZNuC8CmsUYybQmmWJ9gG4V3stmaSVCLHTVtcL6T6BUtcykvvnobhZ9BB6bZwJ3ptGkRMhmWhvaK",
  "key6": "61DU5BcD7paF5H4bVuox7rstAo7cBx8iKxTYPgUx9jSECpaPUA9saHhZUaTm1DU7hqhZzbHCGfSF7YdUaruabWZE",
  "key7": "2j9vYwaqKydx7euwXkfxyJgVQgN69oZxNrV582B2fkwwohu8jdJ1SXCj9cjjqLPM4wkoT11FXb24EXombwyV9FD3",
  "key8": "52hTFE1SU65ZZtziAaMNeVRH1kXfNcm64coTyPde2FHM63W84AS86HCh16Gm2dWGpxmYnCFfseLvXHdxfUzi2mzR",
  "key9": "HAt6iem8vEX4Nopyu8NvYU7w25BVzagucRm5AqrzJUVDLgNB9gjMdy5YbjFagq11XUVVGGU254Mi8REWLGNnfov",
  "key10": "3bDN814aatJ9ebf9EgH5uc2QMnv8vPqzu1qYsZ6De5VyhVd6yGDiRibxWWWaTEaZEuvo4W8sSxEcpCgE6Gzd8ZhJ",
  "key11": "BVLoDBLBZLbA6PW2KpZS9KAzdgfSRiMfe1J1z8vkh8GURnoxdP3Y28Pd6AgXL9xybhrq1UKyU4E3Xye6jeCW4xD",
  "key12": "XQSb3t1v2Ftok8PR3iXRSvPXeBvFqAn1TPnAKXuJvjRRzZKMQ9FtVbaypzLU5sZnrZoBNRCYrpEzeVUwvpMjZw1",
  "key13": "3Vwd6HyktEekSCg8ckhTHhxbrs1ZMFiUrMwxi4VtQFBeXRUT91euz8zGBUdiuX8v8iVkFNDpTSp9ctuWh645hFPk",
  "key14": "VdoUxxumRHcKXZ5M4H5TFKwitkf8Qi6jbB8BJei6qr9BBjUv8JVzVKzeqKTeePijR55DdsXVKu8fKT6m6PBo6c3",
  "key15": "tFc18zCZL2Jqzt9DDUSZ6EfDgaou6gXuzSvX36buCYtVzaxZkBk6CmUyWrsqgCcmDFMvBjdW4fiJpfxDXeLfgKT",
  "key16": "2C6ZiGoh7XKWnQiZZzAPigZmrqJRsPRs4amaH5ypAfzH6qXAY59e9M7idbNKpnAGoo7dNRfV1buJnJ62pG8fmYn3",
  "key17": "2g5frWmS4QHY9ix2Ppkz9UQju87QyDcKBjJb2JhtuuHwYj6BZoLbGv6kEQpKQPinZCGTqmA1yr66PuqZ4pDHif3U",
  "key18": "GU515hCY4e4XBcVChCvvA2sAfBhaHYeTC4V9J7VfLj9juk6QiGWQEhQcGsZJb2TcbNGu11exUjQ8SEEPmypahGd",
  "key19": "4dhhJkcpSqMpJxD12FRS3rot95tRBjnbHCmX6TXjCGWBx5ax6AMsv1FucbtyzJJ2uRa8yyxDwxnAEGB6U5gz4oRj",
  "key20": "3cEQQQk9prSzcrTWry5tYytEdHScEFuibkKEhEhHjnLgD9K4g8g7FScJnLaBZLKdP4oBEwRU7trtTUUkjxqdEDGP",
  "key21": "AqU6CtHyrkLzNbEX3KzPgKwvEYfSoRuZ4b7s5ZQHfGyoF1qcdkfNohHUFrVkbKMLGPFEZnyRjWMi44757zqn6gj",
  "key22": "2c1DvYdBkPshE3Yxf4tF5jCeXXoSHAyBerGJSPndTgiABceuU32rFC7HwQWdZzaqfHSuXbUFdR8dejgQPKkJMNLC",
  "key23": "5ncQiSbu4f6mjuApWztucXTT7K9X9YW6Us32CdRGn4qfEgCdFqPqsBLJKxee53i9JSZ6r93SBf7GLWuSc7kszsVs",
  "key24": "2npZ9A2xFLFt6nP9gW37DPKD4tDbBXJNwbLYXbb7zLV3Df8VQB8a8PP3Fsahzr5HNzBX9GDHG1GzRk45vEpnjPsd",
  "key25": "5zs2kSzw9iEbJZ4c2GAJjpgzF6HuxZjAuMwGn6TXG87c8ydU8nXNtGniR9zNSmBW1KScR6qYNXAwGLuJzgXAfyNE",
  "key26": "5pQBBvx89hZ45YnVYQ2TUuk4B3VwMEbb6awsKo5qZPUrMwkewxwNnU2YZVH5RZeawGga5rqJoT8i9Gbb3WTYHxWj",
  "key27": "3Tau2U18r8mHbb8DohvoVJq6eECvzWFFh98TP1NBTCyYEVDhvoqTWnLXwudRRhmQnd19NURGjdpDw5fJYmh7oiME",
  "key28": "46yVoN89xE2NVXAMfkd7YC2FD2yiu8NYVYo6FUrWFA8PfrEifMdDp4BvocawUJ3eabTuCcWLw3JkphnDpy7kMcWS",
  "key29": "5xxSc2PUhtVcZk28UX6xBRyTntyK431AmToMvSeXmHfvtpugTu9SX4DoHQnbq3A5fqysQUxYyJvYXzJVUksMVosG",
  "key30": "5MdQSbgdd2BQr983FeNop9jSkrSwuWnXPHcPVkBW6k9fi6X5X8Dm96jJbu53ZSbxTRzzSvHgwtpcEVZ9eUr8sBA9",
  "key31": "2VeQndGupEeJGFDu4zTF5sBjzDJHVRP79bRtjraa3RhUQhkmZgtYaRLsmHsgswmG97ABwR7Z2kfpFyXhFAZAMRRV",
  "key32": "64XMzJpeTXt2a7WXqKyP9w1jnP7yUuuLnAcRt8TunH4ci9aN6okj2uif65SbpNG2LtcpvxbGGPwNaBQNpkpEDbc7",
  "key33": "4XYocUn1muZniit1VYqKwiLQgzo9YwHTneygYz5wehaAtwQubvDK6JWEApcAgNwqykRp7YQLHBEDnhbQnXLeFx4J",
  "key34": "5yUYyCWVGKxzd5UJdHgvijZtR53KRUHYUduvBCLbU1fWtkMnJqhZwhvrNAF5Sr2Kkc9m1uJv3mGzs8FVP2Wcujrt",
  "key35": "3iP1byJps7Rgsq4xe4T1J72PZw3Yv7xd3qNZyh2XjgARq7bVmzzoDmL3nhv5KxScUiinrMsXwWx8Ff7LwNBFTcc7",
  "key36": "3zDcUpGvwUCKoKeCFEi1Lmt9pbiveMZaf8dB7bw4YkShFQURooaNV4aWpTKeqii3J3mvHeYABqRyDucXnruKQdHx"
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
