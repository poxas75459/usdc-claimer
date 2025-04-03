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
    "5fdXYctQm9wwHr9g6sJVBMZbJnbCLJfA8cxeKEQrqYJPAiuGBrtCJWn598AqscgT87Z62zd36zPBGt6UvKSRGb51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gk7aD7nrsgZPFfSdntFVkqCpFeCfou2B4miK6fYjvFiasVDwchKNRvGWpMgGHWXpEuERz4nuhswu1Sxa7aGMBp9",
  "key1": "28JxyzCSNeBsUZPX652fTsCvsGKcmX4dzKxSbpQgdC1zWBacchrmiiwFyqZnfXWnEdftHgzbniikJd56dD7SeKPP",
  "key2": "4BF8ZxfazXtL5ezWp24TxMhL6twvUzjY4BMfngfCSgu3opKuuhVDLSTx7CAS47vYyfjWuWHD1K1y9BU28fEg8vxw",
  "key3": "5gpaQTujmY4vc3h2fUBwZrHnmnqiUYNyPakxvrTgEEijAjaMcTTUuJkqTQfKSeycgB7iz4agkWNScb51rjPGR7zR",
  "key4": "3CJoyhwHYk5xrBdEPXNEoP8s3r7Qs4HqJ9pDX4ArtiKSoQpZBWHteNymz2Lc55QppP16nigNVxwUPzmYBdQEvxJU",
  "key5": "mcTPRsb3XSmwb9oq3o5K2WUES1e7YwW2drbvUrmjLcaoKzT7C9oRJ4qUNmcfBNVL3ebWZnUY3kTcFQpo4NgkKM7",
  "key6": "2V6mVrfadGUQs5n52rshpwrLXBVBC3xtBvoXCTWvpGytc5dLJzo5TD6jgVPBikHLTBV2BoVoxVzZqtUbnFkLMTAg",
  "key7": "svnDTKRQrqUCuWtd7aN9NCCPe3TJicNpp3f8aMsy8h7yH9e4te4sEYLfXHte2pDG2VLugdR1qtoQVVsk5wPbkh1",
  "key8": "27xyiMDjopaK6xxqBHKq6fS73TPuydJVV3KkPV9adnSMuo4XuYFQ6iDaKGgs1BeyfMm8pXHQMs8PAK3Emo4vu8e5",
  "key9": "5kYxEDhPaLrKWVDz41wpyEt34GsnVuK4NEVGd9W4n81LpQ8LHLMTYQt3HVukzHk1yEjDt4N6L3b1woURqPpBu65T",
  "key10": "4DoeJenjuUq3bXEGbCp9E8rALyadQT2ETh9a9K9oZoFnSTmhy97mDSWTv7X4NJoVLoqAXSBRrx9jvFDknpwKNPmT",
  "key11": "2XZHvgDcpm3AVN3mF2kq9gqE87WiCsDb577m7xzBCEJMexU7Lt4K55sh5QJjsX6k4p8nmPW9ZaPpqEyTDf3tQhWH",
  "key12": "3FSvWLfCh8yoD8ALdaSVjcssjmtQr76n6zZUBV8kxHrMsx2Vb6Ug5uzGTrCBJSKHB4zwMaMfxj5RKPjiHwdVwaAZ",
  "key13": "5TDvWZtoRnBSWEwbBozumHT2FdFnopSniHvJuKiuZ6cZjzxp89FeHXzTZyF4KBLNNGWuQ3CovyDKrXp1sJsdhvHs",
  "key14": "qeQcrbHokKYUN98Bb3JSYygCrcSEV4VfDpHLerwJdaGeeaVjpE6EPYPx72pK6vUZRLVS85Y7aNsJGzXogNaUSg3",
  "key15": "4VNutjXLQcmHveF8D87x9Hh8wBfXVkuJXm9v9SD2U3Dc4s5JYbtBVtgNLpEUxBh4hkitHQdQyYJDVi8bzkL529mP",
  "key16": "3qG6BnbaGLogULeHFh5cyn7N8tDMwPHqTRhMBaf4LYmSzpc5g88iAfjq5wJymZJGH3q5auRMbjoCQ3sf4tNU6Kyo",
  "key17": "2cUjgmGDhAPPyUhoiusWL6T76mZwY8fhYobkFEsTWnGbHzMg3mWSkyJBDihis5Pn6gpsHHjSGxo7uMM2PuPSKNYQ",
  "key18": "86hjeXNFY7GcEjEj1MskEx6uALAgzVUtUPhS87SwPvePJ2H3pU1gEEruGMeTSCsSBCTKPBMKqELTfjrP2hZREsG",
  "key19": "8A3QKc3AD8dfnbeN6RCRkFnEPFVYMu1GtebMoe4xXWqCuFAEZyc6ToZQJeYJaKPuruJfS2Tb2yXhBMhLJLEckAh",
  "key20": "5G2vKEr2XWLQAHuxM4rrHxY3CZ6qkXzESsUHZbLksp61ULzRRHLDLA7nEgDeaRkPaCM5PWccCy25gmY2vKLqKgXp",
  "key21": "49KMXC2yHrKhtowmWVmMAne2ujAtpCD3jA7TFvGFeJmvD3RN3d8P1FbwaLvo4zZNtjFEb7QysaYSVhm1Kmhd5Lhu",
  "key22": "59Eq8S3kew7iYqHxs1CgHRvFNd8xR8R6aCyPdWgf9UdKZdm5i26Mi3sShNeKnyH4HxgXFHJopY6F5UpYAeJdgWZe",
  "key23": "2jm16uUmfkrmpenN1FGZvytu6pXbXVWimUTDD93Sq4dscgNgMdFveW5NF7TaHaRkyF7A1rf5puUExZS2T9pAQoA",
  "key24": "pY5UpK32EYjGZB3rU1sXQ3dHiCLsz7JurAG8rRr7VjXmNQUPM7EP367S1jBLHVu26TDnwWJZbkv3Fbm5snGxytT",
  "key25": "2YWx9nkzNbYDTGmqVuDv47roV5oMf8irrvCchjoRC4abDjyeWUYu7eVwxMsL51t5Hrf6LBQTF9ss1tjJx64G2BQ8",
  "key26": "2C8b8J9NnqiYhuNVbo7tsZ65uEswkL3TbGELnsaBwoZrBcVfW7jqxvJ4KSPMFNKGrhxfDFHeZeYqoyrsx3d6VR4i",
  "key27": "4eTpMVeFinzNp6FNduLmtZAEn9wiwG6aothMhsQwy24eJpGvMrf1VgVLUw2PxWH6dUfX4ZEhbUHaBYvdfGc69VkT",
  "key28": "2GeaLMM72LeqS6ReuDLkJsmuRtyNHgwfs9Ly95TVrzZfGBPYSgXd4YNqTwttHf3M9L66LRxJLueRa1VgFphBFdu3",
  "key29": "2YUroz4fgdnHU7jTdQFzAzXiFj4X78g5UFmUPJB8p2hhgDjgAQzRp85qag2iUJADfPQTHrt3rnJdrdEWsTjT6sb1",
  "key30": "4yA9KaBUqrg3J5uUX4asnffF9fxQft2uEm22NjNkDCaD3FUyPNDtpVAWzwcbDgdTx5niUYbPB6ZsdpCyHTsx7TTY",
  "key31": "5BzcMMsemMDZgGmg1aBmngqw8o8K8W3rb8cG91vn3RyECrP68SDyj7WNBpG8nmZPQUPGfvGZiDWhbDNzLZEo3bH8",
  "key32": "3tdD82yAW7sDFEpaU3ac6iqSqB1WvYN7kv4BcKafMWeJu2jTAmoiKherj1PzWKACArfVDA8cfEonUw2ptXW7B1Vb",
  "key33": "2sPUzvX4SomaYdW9Hb7uHuWhq2MCe1GW9YU9dtBHQR6psSpk1BniJPdB93bpDZtgZy4qByaH34pJjAPtDMwcD1Y7",
  "key34": "3cTAYndiMgm877EWGjiiKRg2TifZAevHNP9hCaPyQEwWriJ32Ckf27x6YBXZyNtafx9xQJZSgpt7yAT8VQ7yayvh",
  "key35": "2rAjUvHLLQjq36xfKjTMhX5jdygr1KhwnkjwiHTGaSwCfJAiD3i16Xi73tkmk5AVcjUJaYC5ugSMMENowiSc3QYS",
  "key36": "vucSz8HyRiN22B9xhAoBK8FTd4E4U1X1iVFk7EYcwwVdeS5jSoJR26cjRCsQngMSZ81Ej5Ad5vBNGWenHjJsycB",
  "key37": "2VtqHD4BbvseWKpWedT76vnqPvHcUjBsxTXueahXeRJDZeGayGsUbqmb44xfnWhBC5BKmAVveC3Xjv2rzGLCTGyX",
  "key38": "3PC6akJtXxsX8CChoV8wUHsLRRn4X18M5gA2spa6sDjFCm93mgKu4M4mowN6UoToHa5W7Nvd3J1GTCzio48szRqz",
  "key39": "3yLXFGCxiWwFxuG819ZYs5qpCwuZmX2mdCdtMkMtNkFYbxbyoufH8VuYtxpsiT3zJcj9Wq9D7UTYFqHwy1JNgU7e",
  "key40": "xhnQrmx4UM8BShQHnbjD8cztEkmzU6CzsE1qzgxJNmgDzybGGmzHHzxY7BXDhVeNZW2XRM2DaScHDUtxX7DAMTX",
  "key41": "4DoVuQwLiwJGMvfdTuVewtQ2EZrLoWCDevwkH3dMU7561DdKB58VjXLVHHeh2JT6zEoGLjtbzatNsaoKu6nUfpZD",
  "key42": "5bcDSvWFJrmDP4biSZumRvjnZwp4sPHHmSAUJcKxNMmgpLtV1M9VkAdoNpaTaj5JAaVBmt38dgUUjcArLrqPbRme",
  "key43": "3rwJS1eiYZv5Ffw7wXEBaxq4wT3qwBxjSVK3QxU7aisfmeDFtyv7KbLEvpjrWnGuJsb28AVEPPeied9cbC4xarEd",
  "key44": "25SJsAHEBwmh3LPi4XcP9nxN3Re84mZGDKZYPTRX59t4uMgAGkFPxuWGC4sj4eCVKUwF5hHqFf2F6wGn85CzJ7VN"
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
