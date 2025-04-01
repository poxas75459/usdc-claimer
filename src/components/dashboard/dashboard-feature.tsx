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
    "2iVsN23XVgYHAyBfiGuwy3JxwCm3ggdyWemRBZj1rfgEVczBrHWRwVHKQ7h89q4gndHFA2kVCL9oesZDMGcKVZTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hfproGozspDfrysh3A6DV2GeWNznMNpM1RgcEXjrDwKmqqqJL6kdjoC6rm5V1DWak2rB11gw5KYvmPH4coJsQue",
  "key1": "4GWBrLp6XJupvimZpjc8FeeoNtbbHhUU5aqUX1hu3WDeEwv9huSbgnG6Tu7gPGQoBqKZobuga99tiPMa3F8Lsamd",
  "key2": "5T3YXcDHNewjrx83gFyphwAHGZjhBhk2tvfhMAGQcEruezVEhAK1b38rDS8bW5s9hFRbZ3H3s5Zpimexkrf7v34g",
  "key3": "5HkJf9RKHYQGy3qqpvziVSSTgTpiD17Qd7GjFcowiULBn3UoxqyduARAmiZuE2VePJqMkERLZrAJBdroaz8P3As1",
  "key4": "3k2Vo3nk7v53782toed4B1B2oW4LUcp6dmEVtbxZZzPzMSDEYjCDqqN9y3Esnx64fddmYnXFmG7NcuWTXvpgdezf",
  "key5": "4FV433G1MbVEMRCJYivnMEU1iaYMxDihDoeQAPgs9aqinptimqX1b9n53uA5jgYbmqnxKDTHNDDgMg9fT2ye3tbM",
  "key6": "2VqEqPsXbAxnrrM6JstuKkHwoiQF1b6fZBvi3s3JaZTCkU7zRTjUQzUDJNWVhFits7AJZyRgDR9k9pdPKh8SnvUA",
  "key7": "4LnR2Ykdf6J4SnH8xTFq71dvHiUqc6K7VJMmCcpuFyjzVTpkyRTDi4P9RqLhTXU7Ja3u7NgiwJbAn5HexyWkXp2K",
  "key8": "264XeVzfunFwFUY7wpZ7GdFmmgAw4LQFeoRBGWKN5MVDkmbhHT4wCW6ca7PV5HX6sQHpTBmFkunoCi83hLfguiHJ",
  "key9": "39pP2aJKX4qhKapDHHWovCE2UzroApudmzDPCxvj1KYHmthki2kCyLERd4w69dC7TeuAobn5TUHxHeRiBmHuA9ZR",
  "key10": "3ZWKU9nJ6qeELcYRn32o8keWZUzZaWxrsVYoo7Cbnug7jK6CxiGQ25i2AHeSNcD9STNqNFCGzW1p7spBSXS6tKVE",
  "key11": "5EGDBP87Yne8yzXybCfTXHcV21YdKf9YAABKfEXUM738i3zWyix2mjJ3xhDgknCNg1ThrJPedTZ5hN4xMPoQSinT",
  "key12": "4c7gskCyBWCcQBTye5EYYtcuynEXoPGawsLvfqxgKv2UNb78QDwLobA8DZFeYVQJZXMCWjJQBUr2rxt1KDq2BS7M",
  "key13": "4B9nfarMPbvVkisAJjwE65cuAW29E2MXTz6qXkhpZ4uvgjJcZam7gK2Bi2j6gdyZHVaftssxQAx3mYFqVyiPZ5Yr",
  "key14": "5k8UFQiSenhtHsc6vJsLaWajpQ5JWosNBZG1NVwqxHsFNTfg8XBR7MVzLZSTKHst4TpM8otpnWf8DfMNz18qiUPY",
  "key15": "2XK1uiXBkeNVFGDowWkeAQx5E6z4fuvvw4TpPAapAFW5d55ThzVm3eShAGS1RBqBPHMVd3Jr5coP6kKmiUsqPoJ5",
  "key16": "3VBJcqDiX1HqAU3HuzfHoMBAHJoFAYTniouR3JYSDH2jyRJDEnSZFR8gQxT3mEtecnkKHQE3fJFHzHn91QdeL8aj",
  "key17": "5edHZfnNKmf7JNRASWG1KLYKdagKTjkcS8i1gC3PcAX7Js636RPosLTQpP32mU9zBpdnouEozed4iMMWAtxAEP7A",
  "key18": "2GMnt2qoSkw3ZcnJtYCicEM8NQD6CmHt17AuG6PdNYZoxYYCNPsQWXdVXCEbzuKgK1SYnjfk8sv78HR5cEnmpa4u",
  "key19": "2jPvmw4Yy8V6WJjf2VqxaXLdTDVBPbnyudc3b9W4Stu5Wdco4tzrNKHpxKwdbtKygb7xtDnNFbv6Qd3oP77pRsjv",
  "key20": "36hk4XtThSesUTWAnVydfvRcefffjsZ9WsuDWSmYVpjuq1xV16hXLe7JizicLvg6bopJu3bKiARzSwHoxMffS8qq",
  "key21": "5oD4aPeAw8vovDp5PzSo3x7CiJW34MRGbu6dMTdVHR1YfRTL3bRvZBpjKzWU2sCYEEqoPLm1cLx4ZsXn34tGbGmr",
  "key22": "4TR9gB9v2gysAhfPXqc3gwQu2DPHQCrwWnHaktWpomkRm6v2NqUMgRLsEFxjzwMFBnjtDhBnubdFqPeUaxLf797z",
  "key23": "674zDkSdAjtMtamQZ1rXJZf6SSG4WHw3j73XKZbWbgTTaye6gyezkp5ain1dhVZ3Ax9jSyhRkqBP4BSRdhAp1DhG",
  "key24": "4Q9Ppdb1ikaC53c7EyjiVVB2YDGtQ9KkzJRkrzJK8Zg3hJEUxbPnonvd17R6mHYBGMy4CHcbJQrxPpcSWUwrHjwm",
  "key25": "5W988r8bDbmJx83T44WejzXLXg6LNQTRJdsw2ifQivzM2yKDwFyAUJcWVbpShYJAFLySewyTmWwqYAeKNPswL2U2",
  "key26": "1Jk1jiQ8CLrj8nMpycmbWsui3LYQ9KsQ4kCFrd2gY1yrFPFaAsbB2aCigKPnjDD3H6mSeCpvKrA64QkwvzfrPEU",
  "key27": "5R3wkhfgBuEwF3c15kUosN9PLXH4rPCCPJb5RhpwDrBMhahEZeCAVE2xXSGbFTF6aDHsz8Du8gGjoN8z9n7tVFXj",
  "key28": "5FZSHMAe18hCyAkuUkC5huQyB47JfSdzvwE4Smcw4JFhQWrHz86SBfCaSCzWGv9N2gHjn6AvC4HXJnd7GmMD1eqK",
  "key29": "a6PuUwQcb2tetn5nPsU9vLC9myv1KyDg2ZdQZiXjR98prQ8za7PrH71E46CPNjYcwemPWJm6KrJSwwadkuEBBX7",
  "key30": "3SJtMCcRSCPKTJcXmLHiFqg4HLo8bD3d8kG7zUgyeWDz54ZwvbNntpEVPmTvt74jyzvnUDLJ5dnkuSdy7hpo3mqd",
  "key31": "5UpvzJMPzSKbrMvk8oyfehysqXCVUgM5X7z8XBELu9mkUdooo19w7ouuBvvXZzdAqoc137Ah23bHmDVNo7xb1fpN",
  "key32": "wg2BvACWYaG51EJfxfKiEG4qLyuNYK5HH2tCxBfkkCz7zW9C8rAFBL4uScdwcm6GNv14ZfnyZpaJzo4pLMBsYci",
  "key33": "4BQFPnShgrxSS2EoopwPAKQ4U6SiWHQrpGNmsLdhSdd6bAJ34cq1tECfVp4U2AGcfVwzCtjiNSNdppMMaiUoEWUf",
  "key34": "2EWZ17QzQZmrdTWoz2H92fcc4GhmDmFDurdEVjHQZhrro7Qs6CJE4gDr5gM9jQznJDvibBYMeFpHinCJqXcCgKNE",
  "key35": "3tQNs41k86ZR7v99wQpdfk6jgN9qun8bE9a3CbSXATrbYvgRyX9RzoXuMz2ameaZeFVLD1akQ5gCgV5Wnj7X4yHL",
  "key36": "22uvNpoMaHPdKHmnm6smzYv1WaUZKyXVjRpEnGnGCek8HYwNMwzR9Y7BqRTZeFsVRTv87QkYGAAjFtLqxxwbD2Yk",
  "key37": "59jKUd4vCDpAtef1XfdQp81Fpv8KLjyYJZKVKpKGJsmpcFSDr58zLDS2ryS2naX3JJjMFmeb3z5VjuLkRB99uDiu"
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
