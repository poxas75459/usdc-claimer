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
    "2s45rAUuvSGJd8mqsx3kBpGoC3fXHq3z1XdWr5huBq3j5PBs2PijM5JjeNg8fzaW4bMo3vW4Y36k87iRoEeALBFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KSqaxyxqqToh1wWUJxrSLfBWSaXmfxPwwZvzgKhc4iybDHgKUuNpp79joM8oES5kw7E7SDT5s4X2546wvitJjnQ",
  "key1": "3PPeiSA8yqRiJQTRAq97VQiEMuMCVgHVjzS38y87a1iLiVuxDeDeWs7bFtHA4HNxxsZodPgccp35Pg6pwHYiL4Zy",
  "key2": "ExMsAdd3YME8bHpaParykQyxYwUnxDLdkptf3x3GjGKKHKeiMWAeXfF6wJB39N9PDgQWDR1uGZG2RrtVc1WKDz2",
  "key3": "5TWpBbFaQGRwwcsaerHtmAadGFCjh2wvry2fuqmLuqtRW42yzEJ6jiYMDhU1XfVFpHemSeiJCnJvMrKDguSgnSv7",
  "key4": "2DeH77EgqLh3cxFhKVBhkyrxeGHCikyCCDHB12BmFYBjqjpfbQV4sE3etP8oENipd4QsEZ2jKsXftCQseZHhPLnh",
  "key5": "3kSBDUjd1GTME2MvRpZkzo5qHVmVfiSesCATV9UeLyoiUkZDTbDsRCVmr2vV8bGutxg52jrisb2PBDUHBH93Md7H",
  "key6": "3byL1Bk9t8u2fMMpcAAbHLxgvnB5YvBdUugsjkEXPPZ7MJmgviSkf5han7LTmoDJg32awnD36Tt9TLndMGjJ8hyJ",
  "key7": "3V1wBKMUWBZPUFq8WS6MdyqvtUfyqgUoUEuydVP19aH2zJWQK1JqtFCBLhC8XHgdGeHEXhUMeZYbuoEMJmTPuPkX",
  "key8": "zXvNgwGVstuno3KYBRaqpUrNjjTUtms1Ehhdmyoz6zkbcGUNRYQvR1HsTCsqZHMywW3TZfRA2WRT3LvshQHi7oZ",
  "key9": "3conFsVp5zrnukgFmJFXcqogF2nvemccq3aA7JPmyt9UfzBQ7p8fYssYQXtuXn5dcoVCYfN6CbuTjMQ4oiFxHq17",
  "key10": "2bZWW7CcxyeS4dhUcqER1Bsr5ZDeAh3LvHxY9i18ae39jScnLMcmFhBWMcZd9bcCBVVsVRdd5wY75NnYKu8CfiRn",
  "key11": "3bjLRDbtuKm5r7rqVz75vf3HqSDbziiFvPUTmRf56ZNDo5qzr6LGqSwWzJycTUXrzJm3JJhkkmAdapXoBR7U7g9X",
  "key12": "5eKJpS4xiV9f68kJDvbJEYpqgm3qs8bmSbUHPyRoYcxeVYRAiy27rywrxdQGaFmK392JoL5YHAWs4y1ezLN9AC3x",
  "key13": "3hAkzXU2UkyPP4iwJyHmjhDAnxCw6EePfmySLYJyAShGNaYnScDAaZnVgoYY8BMf7o1hJAYqid6izGn7t63ARySv",
  "key14": "2YAfyAUbnSznxzP2jnjb5h8UTR2WK6XkX8BPA3pudmv9ixFiHwjTmzf16ZRU5FP1EHj2MiTQRr8XHhSzpAxSSh1K",
  "key15": "5GnJJTNNbaGghrCG2b2JHMMAuLZQ3iSa5iBshaMT1KoKKwiLzreYJugnT1eAp5CyzUt8aRfG5g4V3k3Lqvn8usMz",
  "key16": "5QQBVKhiYNNo5iCEYnEbHFAETCL7WgZaLDf1twATuoExTDKijepZMLD3vPBg67JBpznKRf371bCTB6jJu5oKPNuC",
  "key17": "4LpXsw3aV6m1AagqmsAQYNeNThsfefuTPNjNUabbkGxPLhxfziXYVjbWekzD1oStZWcifcAVhtW7JovPNyK8AS7R",
  "key18": "4uhtccmrTdR38kEDxact7ir2zFBL3P6XdtMfKxjLEb3GKoxAHUfCGLWQbAuWWQNSJcyHcff9gGTv4ETFDFRzmaxT",
  "key19": "3ivLy8LUfERJjX51X9R1xh4VTtM4hgDMVoU9yqgxoshc45BCg8nWjEpJSqdgX5US1cW8y5zxM9cd6CBtvQQQtLfw",
  "key20": "51fhPjzwrkaDmaz8JpZq5ckC7FDh4XhkuUic2vxqXL9FcYUKtPvvF6S3NXj56zDNS4iSAbwpMf13ByZcjMsHLXo4",
  "key21": "3Yirmx4tiUC8DWkKVwLKmrewaQ59jwcdofoXmEdvJLZSXgiB29k8hNwRZMkoLgVjzrZDruzFd8adc9wQFhtJ1ar4",
  "key22": "4ebf9nRMkvHvY3SCmCHe5hzzdMT9RBYkrJobqqjWnvDKDS2CC21fWRBJzmhjskHojGYxngeSmc3Kj5RtnPmisJra",
  "key23": "62sjeJ14211iiMmRxMFrFwzQgKBYiZEukzYA846RwMXTDg3W2pNjcnFBHXgryF7r8Lw7NEF8x2n9G3P8vHJswofG",
  "key24": "5BXsgUakomnqeYmAi2ixxHGagXgYVwatrEpz4pMmwXyR5Pjtd6TMsXKAGgTJN8vpNVU8t4PDnhGf4CJL1hsnBWwn",
  "key25": "5FqZoyax5xvoT4QmBjEmDkTgqnCFZEUKuGh5qaFyyoVKVwbrBEMeEFGE8EqvmnwfmwgAdeKMaJhfv7P3jGJVkqD9",
  "key26": "34qvv8U2xsodbw2obPATMhGy5hyDvXPD68QFs2SABjpvw4g1iFCSL7VVq8N2RZnWHh7TCBua6y9L6BQWZta83Ruf",
  "key27": "3Gepwfg5KJzCiq5EpmMxEQszspW9HAC3y1ihDG7xBWcoChJneKdELiXVP5Dk2NgNfwUfnB92SFLNbKq2ML8hyXZQ",
  "key28": "5LnqbXx62Qfi6SCj76WaMmhL4vwhu73bu882JajZr9jFWCJtDmk6Yw5hz9rM3W5Y4JBhs36KAyVV5Gejndas6zL2",
  "key29": "2jfsfk7hebaLEEp1y5jFywMVVSWf87412n6d1Y8XQrUAXLAHVZhsbXb2phGKrxMqQYa2DSJQXAArRcddgB4YXuLf",
  "key30": "Xq8J91QTjvLxeEKrXVKxPPJGgW1ZLgRVmmVanuiBjS6H3DC8qD7K6J32xEhtpnFHUtbW9CyRCMnQEuh1tyirBjP",
  "key31": "V4J7Hog5XwSr1HyXXLnP3GRcXSya5EufRQP28ymTqhz35KHfVZ2YgtkvPhXa36x5NTgyU7i8DQajkRd8GsviEzJ",
  "key32": "4Bv3934t376GXbWVcDBh4VAqxCLqMz8vjpMEijcC9btVsMDNmrm6ZiPByaU8ZJ1KeA7Eq62wRV6WXCndrEWMsFat"
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
