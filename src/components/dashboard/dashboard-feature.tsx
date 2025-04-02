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
    "3hqWFdLFrQRLSTxjaUW58gqyLa4af9vSDSxtAQ3dr4Ci2AscUQkvaBMBRcfbR75zAPP1CsGsBnBZtWmGCqSHoLuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sZSa5wDWxZALQEGyomWTMVWMgfZZ1YsY2gENpP1LZ56i7ormiXcinNxdy4jntruymZbgJTMdUbp9CvSd78MfbwJ",
  "key1": "525kExtdeEh1bWutps8AB577h2Au3JqonJsB438QtrAa3pWY9zFTZpYzSXJDoHAA5oiUK1pKY9r3S13thoYxGpRn",
  "key2": "36AcSiwLSfpFCDCqNj8UASDDajVGE9Laqge1BzDeXsju13MDwdLBYjoEMmL1AM23q8cKHgyW86MGtn3pMHyY6QmY",
  "key3": "31Dj8K9Z8kgmbZNVRugaT4Gtmjw32KVrLVaMsLwQL7KDhi8tdP3iYPhWqMbRZGqNk9x3Yy9BLSqRfMgeL3bHhJEf",
  "key4": "3UEN444GYxgGQDqmspv3dYnu65dC44YmGBUR8vQgjSL3fxbZ63FXogGutbMdBTo7uncoeWJrkuo3FHbAg5Moee9S",
  "key5": "2C75r9LSPCuEJtFkQMcaJShcCWn1G5FRmcX2GX6xMLN2jUDn9vzPVqQXvUupmyWouGJ55nfq8R1E7S6EkL5scawY",
  "key6": "2Dy1jAjzCBRHK1Swcpxpnquc51kQXyirHWqET8Vmk6TvDXVksvem8mZrAn6H3F23ByfPEm9ieP287fKHQ9AyM1bt",
  "key7": "3fYD6xhNxE9Lbvka7wg9bFzzujfmGss2P66RhjLhykSvQansvJx2s2SsLKunH4kWjMdNPW2H1k79dACTdGp7gJdP",
  "key8": "5CrVLBrGzMuSNwRjdQiEtAvMog9RQbSEyzrERJWvZPiTWZBW234M5mDvh8KqL44WdbSnHkHoRTmLXo1KPNQgD7D4",
  "key9": "3MkqjcjsomqK5rcsBrAa6UJmnr6y3qs7P5HaXNu16r4a5uAEGi55MuW2vy9dYuUHj313mYL2gTbC8x87XevU4ENJ",
  "key10": "642PUKTFAgA7vYZxDYuingqmDdCjQLwEuVY2S5RrwTpcxrvhUB1EWDqzrsqNwpBHBjoMrQtiZMGmdBvx2MTzUDA",
  "key11": "4hedE1BpJrnaPsC8rj1EWLLKnV69qP74HVqfvjRFxkHgwNpAZn6e9tUPq7wNeqgAr6rtbRhQgskukhdT4ai7EmMs",
  "key12": "4XZP3L9Y6PR7mfgNTCVytJcNwRAvoJhUD2pFAt49oJvsDjufoNvuP2VzwCNW6rhK6XQFoa17hPgmdEvurrwfVzKJ",
  "key13": "4SkaHRhTfzQFkgiQ6DsJDqRq3AznQ2D5w8SNewb7pqLbr3YdMTSMVmdP8rBg4imPoYin3Gr1qtHW1LYhoKmGpLam",
  "key14": "kL774v1FAoq4NBZcr8aAz5S1H9t4LCAdbQJi83HtmSEKKFmRH5w5VhBKbXJ27X4YYGxmr1aoK1apw7UzAP6MqJp",
  "key15": "4HqXfXyZWkfi11RCzM7ZqWNvEWAZuvJEn3z164z4ugNJX2qWPD35BQ1rGbcKQMWDCVDVfrf2o2XS1RtxSoA6zSJB",
  "key16": "5qR1K8SbEm9JS1brLiVAsqA2ky7jUi8pTUrHHSm25VykyW6FXq3KyXDR1oA6Xr5UxtCp1Ca31rRCGhRrQUMdfUEn",
  "key17": "42Mad1vf6oXX6oZuSAJG26Tfkv9xmUP3mxw8qUwmGFzsrhyQiRArj3t2CdGggJsKxKs8nyN5h5EnwkjgoozBdZnm",
  "key18": "4ZsgTBYLKj6miUGPfHySD6cQUPt44toPRXyc5PmE6srMg3mWP3rkyHkSu6U26Z2BC9qchWg8hR9KJGPWrVBRdk19",
  "key19": "4XyJfh5jxM54EKBoQ3ytCGGjQ8oUvwscoGUcGcyWnHSdhVVHem2XZcDf2Hbm98DHcMFsJTKm1mjet6DVs2JPifAQ",
  "key20": "4dXuEmwxTyErchtr5KTUcHywNSTjNUcwr4dJV5P1TDHMdhzH4g2qUSPgPhUnn4ErXrYuUZowsCjmRAUENNpGrvcX",
  "key21": "5BZGUuePKcQPTGj8sNhRcYhoEJwv2v9xq4JPduwETBu3riPH77eR69UtgSWEev4y7vYqtXkZ1dag7CWF9tZGLECD",
  "key22": "3GMQwDbJisMQxanTtaX4W2sTzkkbFJvx38jhFnvhEiRpYow4BHCQWQvV8osWDoaegHJ5uZw4FTxS8P5S7t3LE3bg",
  "key23": "3QrTkydgUcQKBFZ8fzzajC7W2snv4Dx6Jx1KErtZJxrHkruWpvSzB8bUu9wNSGo5qKudLjx3rpnKBWaMtEaVsZXL",
  "key24": "3Mh2rU7Tx15cjdQ1K7LgqWHtQ4Ur6aGJS2hw6CbQHxbHhsJQWMwfotyxLKCSVdhwJnLJUGdnSx8FzjgCfe96S448",
  "key25": "3rPiBCGemt4YmAVgLgCqxF4AoSHZQ3F6NicqzAK25k231zP8P9nHZVzu6VMyyWFn8iFzZo62KMXLVuFBzg8H9Mjn",
  "key26": "2UxqowK39VWj9odvTA9GFd6XLiGavqL12xKhs6ZWmSNE7YBczWf9bKAkG1VcAoWECnouWG5yEHuuXeBKFRX7vUhf",
  "key27": "4MGnC8XQvFmfqqCBVV7KTQcBKxrhrMmzZwM4q6m6fKkDzhJ9EGVr65o5TWKpy7ktNTXPXvT1qhTjd1KFYcgmRuJi",
  "key28": "NjrZs6kHExvuCaeds3vq8N9iPCCrDEaCzX1nkDEdfcxXcyrWCUyyLTSpX5i6AuJfE3txyYgTdBLyPcj1yAUvrg6",
  "key29": "5Ax4A5FM4HvMceSYn5rihbiYvpAtDykBt4QoYKN7aLLfP1oQ6PrPpfBgVDeuzcETbZu2kdhMgAKevzLkRazsJV1U",
  "key30": "2bsncSoiD1gg2FPo13g1mHausf9X2JUCoULREJRe67SJq13H2c6jwnKUUEAsvdAMn7S162bvnuYRa2jPVTbnn6Lf",
  "key31": "6654Qv2J5ZtniBWLN3yGDvkchV3AK2EwJTSpd5AWAvkBhu5mkmq19YBCiTTpZAa89DRgc6DidVdvmnnvnSEj9C3t",
  "key32": "25KtDUr2k4ERSPf4YVBz91VcYM1uCnJyAPi111kJmdeujpeGFxvDfTMSqymAyHvDhFfn1DUYinG84F6N9LxmGJFv",
  "key33": "5pauCht1q39cixawSYUXvUd3859sWgep1ELhyEQC2SbBCvg62Nn2TmbnhC5LT6b2GtcopZFbct5G2HwLaex8ciMV",
  "key34": "3neaJ82BBkRJvHS1MEeJSZ1RBcSQP9EPLsYbjQnpLvUh8xmUSTqdntfX7ZqHPZbjWpXPHEZ3G7xC1NDAxQ7oD3gj",
  "key35": "3wDebqHZtxtDjghYZoUo5D14VVG65UXvD2FpaaA6QiEQbXLGxRv7mzefbqUaR5SzecJMF4dVYwpMWtzBprVDHxUu"
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
