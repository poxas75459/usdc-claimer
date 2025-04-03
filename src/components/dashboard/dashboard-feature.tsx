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
    "3fZsuULBpoceWTh3TRTW1tcCVBQrTRUrrg8Cd9RQWAJAfG6Nirn8DMrvisQnaLiYTizsvjPLk1TTPPTj7XkEq3yy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rW31paKYHtjPwrUofJ8NYbsSLWduL747U37Dj3dL7Ksj24BudEZA6jcWGiwkh6kbbdAhnCQrXvVAkJ5H3jeYD2c",
  "key1": "4RktRi8BRUM5fJoZMYzJnoi81mBrXrybRrfbaapoDd1rFCXWHegbkhkwjUDejuAVVWTJC1z7Szt3XntzP2s2spxA",
  "key2": "5u2vbTdnsYD3LGx6EAuJ9PUQY84yEVzcqfiyTUfxnEA9nPeMWfLKSfxQSUWdruYpkEaTj9DVjUSsBH425Gs7Adrc",
  "key3": "5MwRRUYk6MyK2uyWASUVgYBDnEVZ8p2Vg8tyvhLpce4QiHQTNaKc1wAaJrPtMvdJhH2em5V1fv682wFvrmV2P9MA",
  "key4": "3mjAE1TYBz63kbFaLumUmrRWDxtM3P9g1F6dyZtuK2iKtD1NsS7LTqEp54DEgyJ53Bw7Mh5dEQ8iqhKakK5H8hT6",
  "key5": "5t36oYH5yuZYSPbv4EE3J7qXa1iGtQ9hkzpDKooh9LDNMqQXB1stduRJQmSTb72BRwqUtbyTGmkwdt41KAB61cdH",
  "key6": "cHd3oNWWL3wbM8iPFLLSY5cAuJmCFjLE2LuqJRKroUnvTo9p3nKHv7PYLB9S2ZhmMKt9iQAMi1UWWzBeugQ1Yfm",
  "key7": "2GnsgtHkzWgJXsoRfzfLHe2BLACho29f2j2ew2NpkDtAzcr4PodqCMsmaPytZYBCpy37fKygRBWDcVQStrv59PFg",
  "key8": "5wVBvbgnSp2k5eY9yuzjutRK9bYw8wwfxX9cjL1HsXqqKp88NEwhquHgKFVzMrqiqQphwkg7ff5pcoSWCPGmn1TX",
  "key9": "2ZNqtqYmewEcHujS9vQhk861zcHLYQPcnFY9sqz2hZHN1MibYEza4v36FmQ7GFcfBdBUa1tT3Mty72YEXeFVWqNW",
  "key10": "4sCGZHMXQ3VUcz46jPAttjLdZg7QhDxKLrAiAbFqhi1R5tyF933N6z6cju7mTfnDNFGPC1QAmdKd6ogHDzSs4reo",
  "key11": "Md9j22wjMVVgphSK3PDkXpdCqfLxd4Lv8pRLsPzbSG7hBzyQc5pUAGJvVPsJLTWhxGjG8byzW8GXCnxLTbogLNB",
  "key12": "2sRNgMCfxeDRPG65qp8fD6QDHPAEitVEtgfJVyjuUDSioeaM21uApxAAx9w9vpgCkDHjTxsGJdqC2XH3atDr3twG",
  "key13": "5PeZfckJXGfF9DRzSgp4fuvpED3ab2cJpZ33K5KWoinzvcvnFwUbWSmekBwwB5GmC1YS8mFC3Y2YmYQEwbbiyu7x",
  "key14": "3hZu3DncoAh5Ao9gouC67ucHVZ4vqmg77fkGbC3wo2DdqsPmG2fx5jamSkgLEpqxx7LWkMNeT3oL5G3F16iYUCUe",
  "key15": "3YZc7NHPiyacKroJ3dTv1M1s8CFXoVNnK5gmeeZ1uYBkT9XiddqWFJ93f1TLjcr1GStLUps6Dwrdc9BwkZQr9TxK",
  "key16": "uVfojAdZpPEqZLLWQjyE42oeaAWZfNujLj8AQgZvKmyM6javqYDxJ5G2QrVvLusoiBVVdaHbZnsyLi2SGkZqxtf",
  "key17": "5FDRbrVSuW4Z4bj14T6jRZZAgzPGQW6Kv7gHq1XptomchgvRgRJDnGRFu1sgrNB5hHL3wxPkUhLeDp7h1RJabNuA",
  "key18": "4ZWjkiTJgN1XqwCwqDCwPYyx8urq7M1PzgeHnhLadZ5tcKyj2m3Qs2jApa2c2f1ZCUe9uP66dTymRbUfa4y9Vdc6",
  "key19": "3drPz65FcmGpvucTY68Wv1tDieYGHRNcREBBtxRndxJ7j9VkBG2K2mDjkjhPDo3pBGeiSFPkvmkL8PgA9HSa3uu1",
  "key20": "2LhbeRyE6yvyFZRNjrtk87NjhgxB388gVH89hkh33LN8BDSxzdNUdPUUjamZCgVXQs8mvNwtdnKADmisnwK4shyH",
  "key21": "nDGDXbVXcPy7PAKQtnXrFjYwWDdLFveEeRcBRwyR3Dcv32AmtowA5dytiUiFfYumfWzeNuWiQQxLTANdTte4nzW",
  "key22": "2uaPHPgHHWWhdEbjhYdmMyy26YbWaLsbVJ27h8zVFoH3DRwb27s7sG4YwKVPgDy8WEWCRfjT4YS2zxE5qyycKjog",
  "key23": "hYCMnabynLT4fMMVGSrWfczEPBRaeSYXAE6CYfUKXwbfE7X6ui8uXrJbrMuRxYirGC2CWBZhSAPQPTbFbQVwEPG",
  "key24": "3S8WjEqL7QRRyHbeCpqaqpWRGm7WscgFLHR8TCymYeog41ejR44f4R8HEyTgZqJxj9yro4G2z1qFtpY7sDXUDsaN",
  "key25": "4QrQ8jDtefYraL1MWVrz3pZ3EK7ygdaLnuMeL4tX5KufVSPKWwrh6jWXxp5qeNZu6TprWeaL5kW4qyfs4upuF5Eg",
  "key26": "2yDVKRraxiySACQpo2uMsKbB7CS4hkiXENyWQ6XDkxcTEYL56RqJ6dNNJxM4NkSstNZnvVMvPEYrFSsS2uWEYkmt",
  "key27": "35BDbCVKHA6v7yKpAPfQ5rgjb134zEq1ZzYANVHNJdLqke6f4H7HJasxUV5dqSSKRoJWoVc8MrxvjiZkfs8NZP2w",
  "key28": "NfniRM18SpprWGaJNxuXuKX8BZLEVoVDbFY7Z7wZg2TNYs9oPRNLwRnCGkKSuspAvMQUcvvbw3HJKHDuEVZWfQp",
  "key29": "4ifVfDD2Xd5qd49a4BPtoC2hc2Nhg3Em3U1EfEKCy2aDyzf6aisWksTL6rKToDJXf7yqDmTXWcYPQLieU2fNJwNV",
  "key30": "3URnyfvv8zgd4UT74Bpnd2wkpvDvnJ9xBgcvHVk2kmVuL8rPm42eqSjyqvnHFBR1Cs45QdwxjqrzSgnAEm2bm8JL",
  "key31": "5DkRAJNFDoQZxfgiWpG27ei9tU8Aw8NAvt5WwPXz8wJyn3JubxJXuTn8XApAz1r8wEftJKSy9UkgFmJfD2eg16Zb",
  "key32": "4z925HAwCwz7j8A9gZeEWpei3yQc4BXDyBF6rxAbkke2A9EimKEohtDhaSvXcwDFm7HEjMGY7XafQn73BKeoqsMY",
  "key33": "4KJ758NyzRXDf6m7xzHrfHhLZc9JnQFAwdRGaXXaVvtsarBiLf2QxGAeW94ZQNtokP4sQ5k6uHqenvyYAQKhFckH",
  "key34": "2XPWkT3ZTpV4YJP8Bcu49nUdZvuonxbsvwT2S2SeSyLRnGqnkSnRhQFCiNp1UVqd9md5kD3w1Q6V5NebSocHHovC",
  "key35": "4YbX8ZFSzqojEsyMSxjjmP5jkDqefwfT9s8XPWATiqh4reaJHHsrKeekGBVmnhGAuErM1sEAHk1wiwfry5ZAPn8b",
  "key36": "sH9Y7vTsU2eag26L3BPsFVX3ucEkqartt2QxppvxhsLvLZXwQvp3adTjukxuYZXkezVAHbfA16hGBcH65AsoMYT",
  "key37": "566XC2BhpxMsTyYVLXPhixTEe8yL4kcbzqVUjjhY5aktUiaEjRqEcCc7bYDP23T58Xxcm5UmPCGNuUBFGDcAvAuH",
  "key38": "2pX5HDUSrFw1oGmcdPHScdQKMADyGA3Fxj5nurzBJadyNFXNb4ZESbxiqnpBBctqw3Vs4MTBbVu67S7WN25TjJZ3",
  "key39": "5JZ4zDjtXecjHzk4RLZVahQs8At8CqxdgobDSTMNbzZPTpdnHZ6qF1DePzZHSypA6eLHTXDrEHFXcbLKCjg7xMih",
  "key40": "5qjdPv6ZD6QUb34i3QMtwwz8EcYjyrnjC6smAjLNKxQkA6GSWRUdYsLzs73V9VebXigpWnCqNPMACpc6yWhYMAsM",
  "key41": "qXkoH8PcT3C6wJ6ps1jrtdEZeXpuSABFx4xdNYcpw3RXLqyqY4x4m7gJnK9ngAkGTEChud618o3xjr1wufzswTz",
  "key42": "3cmSDs7vH2D6zaamZDrB9KyKxYZUABasDNsFgjdUEvQNsPdFfhgtzbpEBY5pt1e1j2TmbWpoBeJkSNCLzrgMxXgV",
  "key43": "5dB3pNWyk88WpndYmy9wjWsfgDk627XFXXJqyFezEPqYBm54sjDHbzNqjkQKc69AQiqJS1cRrcnUvbXPB4CyhZiX"
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
