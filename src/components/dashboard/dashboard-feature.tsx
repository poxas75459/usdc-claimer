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
    "2fAgq1Q3m6cL8PpvvFeEojtPdVLUXETU6id1cVSMW1EpY737UvbfQBxBDyKnNuqaMX4Y3Kiv8oDZrgGYp6n5MZTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ie48QV8xm7XvsHdDH551mQKYY4p9TY4wWFpAAL6advkxYV5CKq3ExnP8AYqgeb4jq7m1RQkxUs7cW7REZnKQjGa",
  "key1": "31ze3wgKpCARF9P7iGyVNPxtFcifoFdPfTEBhVtEKJ7gkpTZGKVS5T1ff1uYZCukuvxgTh2qQ8wzu9mtsvbSAuN5",
  "key2": "2bKUtMNmd6hRHW9SuUdmNSbKjhRAJE3kwM81RawNzgn1nuqncXsvGcVVh8s6h3CGu3hbNFovoLQyr8Y8FcdzyfNx",
  "key3": "oS2T5XThAVpB6qeTbn28DszNGdTC8qHNUtJNTtVTq4JQuiq7eCHj4LPBQb6FARaWLZV2zcDrnTGjN78j9myTUrJ",
  "key4": "3z9ENEcf5dyvB3Dd71LXQFCSbEhMMrNhv9VwemsCkLrPj9TstvByVtYuMmbytHXPerHP5qUH8qHxZ8MCK5EzU5SM",
  "key5": "1MDcBthx4MRsiu8rMvrXsSsmorDwfaehLuBzMg32wZGQwNyR1F72byiB9W3PseHkfsKYcYHQAun5bZFkEbLvAQ1",
  "key6": "TcGu1yuC8MmJUiMCrMJ26XGznhzJxvx3VGc6HgaauNdoXzGL4tbjRnJQWfzXFHyZvv1JZwNGQXnttNFk46mmUKA",
  "key7": "3aSymkjwBZ67uTyv6UgEm9BRNiErRwj3oWTTtshYF1qnonBpHRfLZDgfPdhy96UkhqeKD9GmYexsTk8yNuvU8N5s",
  "key8": "5WKJpTfP1LJzarKEaiJdHphqhbfmd4ofrbm7Z379TQyEL9uNGxrXqDeCVLmQCAi4eRMXKvxrCuhmgxCxTBVG56VY",
  "key9": "3xKzUWr6AUWyYHxnMr1J6n7cEKawWHZTFS5AXc237EjTMcevcXeVGYzpyJbNABn8TUuqt36fxX3T6V8mLKebJZo8",
  "key10": "Gg14zxjua1Bu5hQwdoJcvXwCywzQTfk8y45DRFUJkzHzdgqhhqnZoTjA5gfoqocZEw4soUx3d1JJhMdfHRfRkP6",
  "key11": "4fXujNTMjBXuySM29ech3BFsMCXzpSTYSzRQF7kTrS3WJ6BnJTBVQ4d9LZMcnCGBJxPyC2yAKiNoAMLYZeTfpvsB",
  "key12": "3nTx3U2MGqspb9Jbq2MH7Vdx2qrjGxqXuahCj2H4QmLJD3DSYtyBkDnpyPzKXiu6qTAzPmPTnUPQh4V2jZnbMKJc",
  "key13": "5V3pDZvtmJTyZLUEA7xfFzHEGVokoCpwwRy9FT8cPBGhgPLLHMoECp64c2xLTLhF9VmdniBwNh2SvYCdRaGwPH34",
  "key14": "5qWMETfUahkppxP9utqE83QbRPsiaLkL4ju77MitY5uKUZRKekDX7w2K44UZif2uFnhffjV9JGY6ts5ZN1egVLAS",
  "key15": "3M3HRx97ABZMDcJdLHBiM2L5NgzG25dyZgmwPWLNTeWYwt53zffcgrWJhPa75Rgb113Yho8yz6ePzSW8UkL9CVH9",
  "key16": "5QrCRGAqN3QmKuwmfWgcu8P9x3pxESUrMkpTJKhnk9ztVWKdkqKfvgXqHUCi3GM8rbFDvipBMiAxTMec7dHtHenw",
  "key17": "MwcHKjgpMqhgD5pqbFpEXSwwMghkExKQaXdQkZsdmsMrdQAqoxgdVT5m3pQBpJ3B7JrqsGDksXPdqwiHfdHHm8S",
  "key18": "4fuNWRs67BAmGsfEsaxmNU52mb56v8jmWRNyBUzynXb78tmeXSw7XhHjYmMc9q8xr14m5SywKLiA1pbKhayLfvTj",
  "key19": "4tdG8FH9ZwVCyhToeuG4fPQqjszmiArvvDvkq1WGySFFi8cRkBKUFvLDqcbs8YEe3NWvU6hbwSv9kHHXiFaXJJWN",
  "key20": "4XxLgU2TrccuCx7aXPwFkjnJW9pkikMS7vrwWZioBcBZeqDzXhjuLT4fgGwT78xYXY7bgv39Bth8D6M69PpQ3G7a",
  "key21": "AJzfCLq8PrSuFtTXJNQcbraaVyAPCikcbEJEVvaKLKkyo6g27jB4MTLGNTKzA18epBfoDoiX9q5M93nCJ2iT26b",
  "key22": "2r4j8ofB6vFvihdFGbdNmL5WGuexscJMkVz53Piouj6AnwumxqkxiVsKj5ZKbZ26iUpA527Z6nNk7EEjMapVgRmz",
  "key23": "5rA9p43en2JeYxNiAGjkhBAjcAxgjzQEpma5bd6qqAq241gtNYShT6E7V6WJ6HFC13wF8jJctTpbp6wPcJCC6yWk",
  "key24": "54xqvx1RiW1eTWXNxcQUxHfd5iBnaZidBXoa7JCNyVc3a1r1rn443TiDhwJktxmYut1Fb8EV2gCKTBF1saxj3aKD",
  "key25": "4UoPGq3aM6bxQnv5N7n8cnKQiRnP5gqW96XZeh4CYbZMknQM6f1C8F4Tx5dmty4QKArGKoM66th5WpxYzkLamMiy",
  "key26": "4od6pnQDCvNYtRNP6CZB4DFTimyskDQEXWYooEUYMeTfQWA2vSNYi4Qdc1SZBT8VA35QrTbsPuxrErtTyLFsGfHB",
  "key27": "5QbpLX4REETfUxyY1jhPb6166J24VZFBpa6iUQDkSvVUcNw2cvTgqwyGGLwNjHvrfdL7Yd3GLe2CrcQjwpMsipRa",
  "key28": "GkcLjutx9KncCP4vJhnCpLTFy1AAZM52QNkBsSMt3APwZCDqJ879iiUeBGbRBhTrHSK5T3M8zdfff6vzMDAmVEM",
  "key29": "4MXGZCzM8dZXPtmVYna8TaHu3PM3xJt9heWeB2dX8uyCeEWKNaBYR7Q1ZW9i7nu5hkieZ7avH1t4zKWMGvxwzo5D",
  "key30": "3y8fzeMaHbbzdStTuyN72oSZajcWWVTouqEHgv9fKBsoGFvqiQAMbn85JABs5vm762h9yddjEC52ASQaiQwHPVPN",
  "key31": "yFX1vjtNiWCSJrw97bRio3x9LThS5LSebLqUBaGrhUKzkkMyx9iV9RckBYopfq4r8AbTtwdbry55xVjVCkyBVTj",
  "key32": "h9sF2TAGunn31KUWu2D6uiFwr9Uf18HXodedrsCvbsQKarbxEVVcc3BJXpRwH82b3TPXpLfBE2y7sdRa6cQkM1z",
  "key33": "3gnnwYW2bHE5bEtxLkxq1AA72QjWfeDWCsP5uN9tAHwDEaTS6rsTAU3pu8aYfztWwEur2c2FZqkbSGjQxWaXyB4C",
  "key34": "3NZGpg6cBv4yJNua4mfSNnoMSNPJ3kTwcZ8D8RTMS35xaGdGhfdgdvcApvmLGNtLoc66X8Q5ix5LveDT485QBtam",
  "key35": "4isgRiVrp1RvbmZzExDtuYdwKe9NwSyrrzU3sQkAwgc3KTm8qfCZsoe43M3c3qAWLKhX2s78HXY5VsqRiz6zkfoh",
  "key36": "5TuX6WMPXWshkobAV1EbkBYskVhWkLM5VMokK8Xghh1ERywbbNXANdTTAXULyBcDM6Tg3bhMUrPccUchEW5X43d",
  "key37": "5S6JETVRjXG1Zn4z2gFAmdobuZHybXbAMBU35gaC35sLJj9mYKhm8RvUZZfWJogrFHgNi4qmcmML9GzcSXaRmXHV",
  "key38": "Ntxe3SfqFZJAXewpykw12oNtExJX9ZFmCZf3CckQtfD2hRbaV4JxHh3MZn2eCSWhS3V1CKfSnrecCovYBkQaULR",
  "key39": "3u7TBSSGKt37ueBanNzRJBuR7kXYm14qrapp5W2VaFaA5LeR3DrqanCSBGi1yRWgVjrtd6ZmvvPLWe2HL4TiwpyV",
  "key40": "3E1aRNo6JJNB8td5ti9M7ftcXkTYMVtuuegfkuUHwB2bhkJh5uceqSi4AYZSV74ViSJgpvATokpCZyPoEoCDfn6d"
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
