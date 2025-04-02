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
    "5Bm14TQyDYKKnXxDS8eJ8GnujnoEwTHdTLnXBF6zMDnR7CVsYn35bG9GAk5eVZeCoA33Pcamx73QfxXS98DssoXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gQ2ASaFgbUzvQY1ZyjahNLPqaQVZ3qaJmVVHTFwN6uRk8QSWebYfJa1YmgXFth8zzLjusAMoJvRMCa3Qn2zYUxH",
  "key1": "4QzYgbrnCxg6MeTu24qxCgyKT3XfwrfMR5qGaj4YaJnjuswZSugWnyVdPfuHEAsQz4Ku7dmHbpajQhyMAhmhyTVG",
  "key2": "mMncAGA5DfE8r1GBghDt1mnToZq9b31SyihcFh5HqWauj9BaTL8o1vnEeX5jLdzmMGA6qd4396AsdcwBxVmUndk",
  "key3": "283adFraQCyY9zPdT16Tp5HgJvC3bh3AsfqqfEFeeeWCKsdZhMFZxnoLGVW9WZ2VEYoYB8Lxh2SA6ywaB46vYzr7",
  "key4": "rQxQi3R2cv1We4NcroCnJBGtULXWc6MvxeHV6H9gX3U11fiA3kvsiErooKaTSqXameAvm4LuQCNChUPeWqZALkM",
  "key5": "Rm6baSNncUhz4yXToxZcQPhbxuk6YWEfWpokc73WsCKQwFhCHiJjtMm6WxHyy2Hz6PYhHTd9sMoy2owdaRSK3Ho",
  "key6": "2rfY6SxMXoiYYrepWX1zfp1JBunt64i28FYpjTWJDitEum5TqCgDnFCEYeybo15t6esyCddRP746hTiquBGXmy3s",
  "key7": "2B3pHsdFGKsRKnneFEKkWZ5A9UPXaYsK4DkX89mVB7mk5DjQnbcS63rvJxboTRgG3Q9NMY1NeyPHjnC2jcuA3fGj",
  "key8": "t5GRSjb6tz6rk5DYDqaN4nfoeyNATVGD3cTzuB3Ypz6jg2gtq2CuQouocYMnYiG988GpTBqfnF27ukkYJY1uzC7",
  "key9": "h69A5qWYCPFtS9auinkh4ueMhz2qWcvEv9niJw1iD7AVFmtDRpPr77RR33PT8cdvzEbfspDPz9W7fsa9SsS72ng",
  "key10": "326vtwxJZ25Pub5hQRRK4L9md3CKwLbDZUU8w4PEzkP4RwgmCoFD43BfF397ReWUvrWEQpd52d83UZVR6mWP9NHQ",
  "key11": "59MvTtzSVWzYmDH3YN7sCtGDM68SHhrJMdjvqGakXoMDEftooe3nMQgRHEkUzAPfTiffjfmdWBB5h786utkx26QR",
  "key12": "2UFQME5MMAGYSj11afCVh5u6HfZjSxAVG96o16uwjvFD3rN7ffR6XK4kNsogdASrpKGQtzxJD7mDgrA8MHcqfF8K",
  "key13": "4R1kr2gzM16yS7ViULUNRNKXCXCEqjAm9X7wMBKoG51qLvoWizWpxgsYk7HHmHWDQaEjychp74kPbJkmE5w1g8EA",
  "key14": "4wbdjbqxyRvYj3yLd1moN2TEoskxU77er7sWeDZEbd4dd7uVU4FRBQN6N8ZbLkPpFhR4RnX9R9GdR48aUZkV9tjm",
  "key15": "4UTnSgGb7xmANVC13VEcdQca9AeAv34e8B4SWQXcsu6vgKctGc38ueqzWqnvsnHZ8ksCfyVatajLFfVV8RrbbaW4",
  "key16": "smETgmKZsxashfhaeysx4Dog4zeUkEUv3i2gcuT9xyioCicmuECX846sKRfVqrSrvkBeTEBA2bWeJGzELdvNWY7",
  "key17": "55HYza6T6xdkfYJo6mRJEFoZKgEiYGBwMqZvWsBnYZrJUe7YMnCa23sSnnqFWyFmopgjZMLE4eZQYuhdEPUNhbb1",
  "key18": "48pj1wqYAWUCKZivrG8Cm5eiQxPu3mf4bxkGLBTAfhD4cRKcriuhN9QT6DQs7maKuEYYUPsgWMGEVQVgyman9Wb3",
  "key19": "3ZjZg3C5Y1zwTyx2tdHDzDmHkQ56TRDoohJ6AqwogM89ydPKVGbcfGwVGEthSH7zcxDkoDoya2TemtgzVCEcSpuC",
  "key20": "2JhE1NYJfUVkhvei46ZXUbjCeKNE77RpTA6H4ahew2r637QhmwvsNHZi6SLFpRYxos1U6A1xiMfDLdJEKA9MjfkY",
  "key21": "5StJ2KYx4NJBVH99yFGX9cEhS7fSNZZBuVg96DRfh7gToYhEaaYcssCxDTCmDMaTJj84dE46dC7cyYq8EUUKA7fG",
  "key22": "3oBdzJvWf9rg1xkyjESLBmoedxWomKARv6FY8T766TtFxdGbMNBtfdst3Jweaj1qsj3VmFjYsENxncYur6NmrF4f",
  "key23": "Ar6ZVZrRBgCkWhJoLyjx5zonEN1ics6eMb1J8L649GfdJ6toFyK5shX5LAdMafW3ndfiugnBkroBccP1goL5Dna",
  "key24": "36K25uwmmhvg2UtMMqprQaB45qDeuuJ2A8Udx3A7E2FdhSmerdp1nRUQqRNnst31Yp95fRakU9iEdLYcRSS7EkZY",
  "key25": "2225HfipkmYpEHQpYcUAS8psyiWvwAaTpGYdX7NuAdR8MbF3qXdGFieEWf2AfB5u9nUomV4QwZD8pvGTp18AX1fr",
  "key26": "YUffqZzR23vtFmVPtJbAtcAWkihxqjYjKHCBsSoYD9ZxqXmCKnw9toVbDQmpS3HcHoNyA5G8yDzBsDcHGY9h8Ub",
  "key27": "2cX37LRAwvs2SAwjs3Yonr6uusRrhPwhfj773HbP8tdALpTZtAv2NfsKBb916VkBoVUv1M5E2fFdTHyip2kStsKr",
  "key28": "2oZ1vvfBPWC9GRo9Q1JwJ8gi4vkNtEMQjQLfybLj3vQLbzuwLbmK7PypmCyT1Z6Y4QtxPXr9wKgWho71p5p7rVrf",
  "key29": "5gh5scGX5dC3ED3MYJaAGTcA44YANytagmYL4LsKEHARC5GDTa4ChCrTDCGxmT1jPQnCYzSnGXmD9uhUVLiFxfmQ",
  "key30": "5gdzWdqToMoGLXTN9RtDGqkpPKA997BLKWp7YKT65Q8KQNcPWZDDR2y2AVbKGZfFkhbVLRycBjXENbxZFYEHhdi",
  "key31": "4CUowAP3vFKaY4ucDaqTiA5b6tnj9gdiBYFQNySoGjuRGCemvmD9QAHFkqm77XZhSyuRFxDnZJ5rzxhg6tyFRr2j",
  "key32": "uUikunzuX1DZR1BtHMWft5K73fi97ubB8grHtythdKoKUUzMA6GjP8tGRrotgP8QMtLdTJnoTyNyNWDNqoJQfxJ",
  "key33": "5sMfQsdoxixetE1X5zdKqGj4k8cdC4euhGRkVeVUdyRTm6kxNDEFjHQ8KkyY8fJpyGQn9YEULRNsecR38Hk465wc",
  "key34": "4Y8ghgTRE94H8akTHUCUreBmiVSSkKXVxyNR45WdsPnf2UkzsNtitX3sLUFJurGV5vvviphwbuiV5MMfcoCTjCB4",
  "key35": "65FhdzWzfxe2ovy4BfKW9euoa9cDfFGLjQAevMQLre4872Us67W9sSGoRLV2FS7AVAtqw11AxJSsr8LRgPuuukBk",
  "key36": "mby9H2HR1z9yT1ayhziu9BkbYEiUbTeEdfW6QDzjkkPtpgU8psCZnBoXLAP9Aaa4koeRrzg5EuRA4BLocsZpgcW",
  "key37": "5RbxkKvw74MWxn4EijTSFEQqV2T2fJFYB7C8vmMiiwwqoodcodHTTeQsdNK9TDgdiaTvMnTN4LbKbkqq6E288ms3",
  "key38": "4uM9fVnR6RTWtYsmDkWYC4k8UTdum76ov7uYVuYT22xMeoYr9wGWdM6BTQ4g5baYttnQTEJDNkoLMeu3vZdD3Cr2",
  "key39": "5wyRwLehWAdobzJKfLSLuf1FJVWB1YrVAFTupTfeDpp7YfvN4xksSc6nAp6kEK1tTbHQCSq5Tqjky98CL9jSXk2d",
  "key40": "5P5bEVVzEFNxxMoXBvJnhGx9t4hSasg9su2wycrN8qjjcEx57XmKFtek8UZRdhbcpynkYZT1WJMWPvtq6biQ6rk1",
  "key41": "5arz7DWh4bknWkJDuuiafPBLDBjMsJK9G5FRZzjcHxi1RJChQ3nAWR1jHCK51DvuLRpfE55bamhBt7keC3fyoght",
  "key42": "4U9H8gZSYkwxEkHrsU5XTqshyTGCe6co4nZjGe6HycC9GfMVLjtQ4eX5ok5JAkikKMvHsmv6CA2Hdpms9hJXD2K3",
  "key43": "2buvV9Q3GK7kgqKjyLNh5onESKh5thGXJeYyciWGNUowySmGm4GFgVqphbSvmSgEZcSz2VrdWVgGL8BtLjeuJKkt",
  "key44": "5dshhKWmtxyXvg86jFyfe31Vc85vmBBASyVJEUV2LeQPX968UovSpzha7YZQBBJPvEKf45j78XHyJgxpsPf6BUjM"
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
