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
    "onKj5SmGM8BPaujJZLwixKLZKGCaNmMFLF3KfjWgNinUWxN3kCRJ5L3CLDnwJ1kyvLubm3MzZeULqNTSQLFmmZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bj6GbnuTwu6TG9MEVNu7TuoaNE67HCAik3UQQWdPL5gcXWMiCYZiEUn6GFwoxR1bmNoXgXpWWbKFzTQHvfXD6Tw",
  "key1": "55XvG3TPGu8WdZiEfcLFQY1H6F5iafhZnm7jaX1uyPv2mLc4EkQbhQwGhC41gyoZJ7cKwJ1kLmiYrqeHmhp8PTx",
  "key2": "2rKif6ZJ7Bhd9wv5zBe68KGrLzytK29yKyEtc3Sq3S2YzZpzdXuNUcgJv7K3VCc8NoB2789ueXr2rfzPbGDFdRxL",
  "key3": "2sWZszkoVtN649hnjCrdqwnDGDWvDt6uc5nZoPMTfwEsihFshmLbqucD7i2J4vHny3goFCrq7fm7nuhzaBMjsNrE",
  "key4": "btC9mELDHDmsB8DyXatw1DYnZaBPidLBSPc4Hpqv9nBiwNZWPVgoheZ3ps4kJzpfKcYFgkvo2kBi6frFyddG4wZ",
  "key5": "4wwER8eJkdCboxoexoG7SC3PzbAKDn3WZ2WMB3TSdxF98yZ16ti6ERH3pnkcjJUUVj82dpAGVi43GAoG3ssrUCXE",
  "key6": "4EYudwLuuDtHdX8Ls2TbeABDKF4VCvPkF1rs2HA5nJyWBj986Z4t8Jj2qrke9QbpAQ91jUHk5YajLPWFFHMD7Z45",
  "key7": "3BfdpdTVBGzMBaRTT7WP6TRRb7yP5MU6mcBW6ycHW8kLrEhKuRyxEk42jPGGQRwYsEkbJMYkktJAX5WP9WbAUjcw",
  "key8": "3KVe8pm2jdPxkcnj1PAZ1nEh4NZcZkVVCzt8HTFjt2XbyUCm3RjHHfSyg9LWhwtn3unahV8TBrcPHN1sVsDc494C",
  "key9": "271MFg9Ngc6Bwnj8jwyYKDiVzhuKE7FKCYZJhGrufiki4oGGDfpLDazZZvg33tPM2ca71XPhyJU3sZ9EWzGNDS3P",
  "key10": "5GoEihh1E7xEnAKFTxtppyPwsK13k2xnVg2c7mPUCz8vVs6MZ3LFkeM99VU3bnw62w35YvRRugzax47YuLDiqC8D",
  "key11": "5aCTrv6VCxtzEa9dGQs6Ausyx6KfbN38J3QRTfuY1tBWrfvHYH7aExecB37JAzJJHQW88XZSJJPCr4RgArZJp6My",
  "key12": "HrHvNzQGVBjbmouS9uYkyEy7rJH7kt2kedZL4FNJZBQnN93Ls4mGYRqddezd5Xqbe45LSWMa3bZEjowy5bmuimr",
  "key13": "3h8H4ZzrGPuSD6Pchxro2M3jWuszQvQxcuvDy1NM7oDtAYETA8s5wwEQETyFMjgEjTbzDAhk9Zmipa16MFrneL2e",
  "key14": "4mTNF78NJ4bBbUfLwyKaGw3FtJBqNT26DJ2yggBXK39UctkEheBkkQEnVPdGN5YsuseEnaYiPteNxRpB3n1HCToJ",
  "key15": "r96kXhi1K6k51Lcdiuxe2HwvY9wbQWbn1gv15iPbmF36MnTyckrYCHWL7QQX9T9nz171gZ8CFz9Z9vCsz2cQY1W",
  "key16": "3cyoYMG8ksSh6NFgU1z3bWpv5YiGLC63iGxkXzRfdLik1HREZZ4sWboMv5R77xDWLYYWwVdHfERkYnu6Ui7H43Bo",
  "key17": "3rMXTnxQW7qcgqknEF8UoxczSQi9oeNqHmGNYCyAc9dRA1LjPZZvwqB4V6ndYRtZoWGPVsiavQxY9Vd57fGje9cG",
  "key18": "5cyXcXPdUG12KffHQSjThhkt7B3Sv9uMgrYtfSSvU3J2hFakb4b8Va8rYCcCwdQByDEfNoKs2tbNpVHKKTEEfxG7",
  "key19": "2kqzBxV7zR5NgwSNG9MVorV2LPoVCxaR5x8RJq9Kiy4qj1xEW6SriYbNc8Q8HthSuXCvoyPzrQHfXX5LNmLQmqVt",
  "key20": "SAPKDU9istr6Uu8wGTwiyxqULtXPKDEciMZsPCh4j8zYodqyLLioCkxKS7PRafR3ZJNbzwZZ8nypaHr6fZjzwy2",
  "key21": "bBFCkh2xY5SYw7qRVssvfT3QsATGyWdFJAskdSMrYpQ91LjkGNWMmojwJynooaEBd8k2on1yA7XcQTiyH3Rtc3T",
  "key22": "4rUJsgoA79xriJY3qBmBHtawAxDVeVStHvzRb4Z9gXFxztxgihUxb4dm5WpFW21Zxe527bKBdEcP3e5EPjd1ENmm",
  "key23": "3quZV2W2uMaCVFuySo9X18sxsQMNBXBjix9TDNTShHMBD5v4bsL2pi3DJizUEax1fu1DtwpLg6kKUCToZgMLt14q",
  "key24": "2n7GyMFb3gF5YQd2mUD1SvgJPEverQkNMFQJn6WeNb8V1vJoZg8763cujn9sKqi1VkrCJn5HuLbRTzDLzSMKYCMb",
  "key25": "38Fiq4BSN84ZhGo7rToKVrcGUsYJ9T6dYXWAVqKft8dtySBwDnGumHBxq6NuVRdGmDDy478A9fXHgDVfkmnYCrkf",
  "key26": "2WD4iktU3HzCnH4kRgEP3TpHYSbc6hZDdnY8oJbc5QeT3Z8xuo4ZqAf3iq5hBjakPaEomnHqFYXqmET5JxEdZe5q",
  "key27": "4gvyWcko77ctcPS3CyYwoi3jah8rkTD6NU9ZAWyddteNXuH8znd8kCZCKVkQJe8r9dm4UsQMctHwcoEFKW4hwB5q",
  "key28": "bpXaRNp9idsXNVPWngZNakgTmrSs5U2xCSxKSUojVjKGAJ2k14QZycUfRv3BQwEZZnCiJMyhKiQmvkydTcfd6w5",
  "key29": "5qYtbX81K2S3mTWzdJfhBZ9PKNugJs4WiKmZGZTFUFQUgiVyhRo5khe3oDZoPiwdpLDKVSKexwddu9pRBAVqbQmB",
  "key30": "5iFDdciagKjs6MRmtgukWsZ6tEcbogmsF3DgoJDcLB7MKeEAvPkfrCL5USbRxVc8NQjxAEoVzGbiPo2tbUxJqEXD",
  "key31": "611fFspJfDam8SwRC9HFaMVxMeFvWPvUCtaRUrRDkRbkLrFiRtve19HjTaQgJe3CKAG1ZHJemXtbZ2LQwWcqwpNk",
  "key32": "2PkQMyy2An7VonrSqoV8aBuTDgRpLKW83yqFZ6yHuNyoYW96zSdB4yNBZZ9owDoMoBNuNdxKw3kBzWeJVwebgTCY",
  "key33": "4qnk8eebyfZhJwgkjSJsXoKwud432XWM6u142CF1PQJMAL7vQoRjBwqBprBjccEcKkXMnSEHgkyDkYEGrkEsQTn6",
  "key34": "wGqEnjZYjia1SpNojjX6w8Qx2HyfcSHMD52sQz7mgdsCnoGUWxrPj9CScGzRJ7qnwv4oqezZp4rHuZqunByKxrK",
  "key35": "4mrw1jEdwLq9YvHswBknZvNTW9y4Hvu1xqKRBfUDuF3VT1Qu7eh4Qqani5gkDuLmQ57UhjhKz1qEHfRCHPasPLUa",
  "key36": "PnVKxBbkSpnNHHDk2Beaj21zcpdf7N1fM34krKFqxETFtANTZWzfYQBsVbCP6kgWDoReREHqp1stjz9EM67C98D",
  "key37": "ZniQ1wwgAa6PU5x6paa7pqzJahhfFEd2JwiJFgdK4gdczZiBP4WL7P1yj1BP3T23SedFisHL87A3JWkGWGMV4gD",
  "key38": "56MVkhnjB7vKsTSA2GXN2E4tJyjSY9cZ8Yh7riPnX6TWrv4PUmk9k6RoWDo9E1QGgHemLZUSqUhwJPfyERQ8VNEa",
  "key39": "2DzTrJcenDr3opeVf5jaYdoV9w1wC9EFjzduXChDXHgGeg6QRLavbU4eFotatqv6fHvEwNtuTQxUHN77sTb9yH7w",
  "key40": "3muEw1hjDha32ej2Q2os7ttauHV26sJfzci6ykpCvmMoTM6i8txqqXJn9hAeQL1WZ7oi9ijDVHT2CESPzU2RVo7"
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
