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
    "4cZuW3uJPowJsuVzdDVH2rLtr6wDGy4ixbLahHF8di6GCg22oDS9m9BGHca5cRFw3rsEzamjtA7k5R1DuLAX5vAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tDKVz7wyLC7yLKSLiusWhhSVHvpv4VdSKB6FWPnqJD4n9uu2fHAu7RZ59Mh2Dk5N5r7VxVr6dCaSncQksMyb1au",
  "key1": "4DkyhNhG2j91Y6n5nhHFsVoGcEmVBTgpeDS49fAMJ1oo8zuTHoG2M4pFXaJqbgwmRTNSCUkcNw3PZAPZ2iNm3uQC",
  "key2": "GXtoBJi24N3Bi5bj1JyyEVoAW1Zcxc1Cyqa7nzVQAiaPHEwmCRRut4RRaxuicBHoa2JhdG6YeRohBQxChPm4n1j",
  "key3": "4gn1uLTk5nzqKXYQowQugbgyuKvtRbMhJEtm7y9QZG8wXZQFzFjAVUMA1ZUAoQGurF77JdYiTWneTcQBTHEGmivT",
  "key4": "2CLWN3MJZe3j2cVs2Wited2focGbRSmsmp4zrW9xo9HvcDreGSY5mVg9cJ5SoWbUhEFKfLs2iB4QJ3CXQ8NgR45T",
  "key5": "63YASv17w5rnDTAk1Badrsxkmfa3ao7nPme75CuPsARTimhWGKh63tQTVViQEMLEQL5FYv2kve2mbNQqSC6NWgs9",
  "key6": "JUu4UH4ePRZzwgWGKikFDVF45Zv55dW6gCQJU2SggZdELD6cVbA73RdZokuZvGQhnvdYeugeydAV52PwFovr4i4",
  "key7": "3VBf9kRtDgQSKWzFB7ZacXKoC9iZwtKxHa3KMXNUdp4CBsscfeF4tokQczZ8t8QNWeU24bm6qaQVbHZ4UJa1jtwK",
  "key8": "KncMTz9ASBQkMBtkKkUfvWdhGtcyCDU9z7RpMUtRNybC2j288TPAzhrP4n1iNnPBexG1Yd1UAGgF2KhJ6exvSVE",
  "key9": "5rkpg394TbtamXZQ1WiZdAMTJgLX7H1adnC2E3HCD1p9JSvU55vjSpPJThF7dQ77LzyxibXvR16jip4tCRFortct",
  "key10": "5zJrs2YFFByQhTPUKLwwicQUyLXUjTktXS7qNN3Dom6xRZ3mmKhutqaekgCJncFCkU6PzhgmbLYYTXPqmav9eTza",
  "key11": "4vdEgZogMz18FjhRBrLEe25wQpohB96V8pazBFTYkr7tqWpZENcbYuNeXigj61gBT3Nk88w53ZQsp1dyZe8GyCQS",
  "key12": "2RVYJ5pu18B2cZNkUAaMTVpZXx2ByWucJthUEctVaMUyCEdoQ1kJmHMD6yZ44zHVWVY1rcrMZi2hkAYqrHB5FyWX",
  "key13": "LVkBV71rfjkTg2NiiESrkeqXWxjKUwCUodPJSZoHwJkkzBjsKW3HWrCZCUFjwUs36YRf2itnwS7aeFAzeAvrsV8",
  "key14": "631JtouPmDeYqNbhN7n6UyuroxUbJeeSoHstwxhdfZGGVCgxwFUrsw1StoCvQxiRUQypnAh7P34napwah229qbLQ",
  "key15": "G6kyhDAGobizK7YBbEnAQpEEzY1Ap9aqGgdHMMc1pxbAS4iQu6qng1pDbrm2burQJRUUCYUUKCYPfpED193niUh",
  "key16": "3vnLM4DPVTknm7daVeaMycCambDJjct4bwYq5SJ8fQgSsZF3thQeGyJ1tGv12DPe6BNCUcDuomR3TxJihRM3a7b3",
  "key17": "2Z9WuUcswQMJbWwXXokbG1ku7Hdvzpy2qsXvD7xPD8Rauzmf7GxHpRub3nvQDoDkTUaWKcWTaWTt45SfFdTBAMNc",
  "key18": "4HQsE4Cvv9PCAsxbyaavzaVJZ8QaRAqfnJ7byejXUyF1G6HRTdAomrd377U3j4bN9rxbb2EP3pQvVLvpLwd7K5VC",
  "key19": "2owDQUVKZFtbL5bNbC23cG8TQduzKJdh8SWUi5GK1kwPHwEU6rWWSohkXfc8DY6sMnakJrsw8GtGJPLvAbYX4wyt",
  "key20": "2W1Po15LRxrWAZ65WMfeJJZqzS8pvZMrC4ccrp31zwgqyrNXVMFtd7wRZeqRZNZ4qQ7tzhjwRLDZUdG1nQJqwP63",
  "key21": "3v8Xq4Sd8x1z6zTm5pL87XbPfyJUjjJTXDWeAJXy2NmYZwTtHuqcrbZeeiMBwScUsEeAKPFTgswJPLTSHgwhhm3q",
  "key22": "4XqNdxEL79xH7wpvoex5BErgJhQnh8EBKxmKYqQo74CWhPHZts26SUj7WPkBL66GZGSC9oweruSGrSPVFuxmpFqv",
  "key23": "4eWYnmm2QJto1zzUbaYVuDVj6v8V7GpztTKsVJGS2Mn2pvGE7oQDP8CoA4ssRrzHGM4LGWerR1nw6CojmFdHs71T",
  "key24": "5dLxM1PS3WyLoVD3hN9yKQZxD1nx94mzkKLaq53tJrebGXCgiyjgNFRZz5P89Xg5aAje8psxsGCF8Kk3QHDiVdyC",
  "key25": "2bvX2JgwRY4RdtE7kcF8SuLrwMC3YKfJG7De5foiVSWAuRSKDUhTC12WjvPbe85xEnBCmkf9A92UaGL7o1bWvrBZ",
  "key26": "61rvuz3wweugCcjFQ3iQKoJuzjA1bYmjwpspTpQdiAyaBJUK4ac8qTPZA24tQVZcTkTrsxTehQHz3CCxGLUaSAaT",
  "key27": "5nKGxoB9h18tFu8DyfBsARrEAdGQC3ttVZDskiA5xgAWKAYTUvGWPPa33hBZsBe15TYeigMLe4bmrsWVedUXCwgP",
  "key28": "2k9SrdUWgndTW5ivywJyQ6xtm19barzuZzcQaUmPd2chR9yCgRckwxmy7YWGz6YQY3Lz2rU4YjUfYMnTtR2jd9g9",
  "key29": "3e2CCPaT7CmN6MgGS7p67sYH9SWg6b2T3wh7e6HSBgga1Q96PhTjvsyJpaJzsVoUwJcgnExLavCjbqy55WABUT5K"
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
