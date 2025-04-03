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
    "5YgP46z2yLG8Z2rZE1sDGz5x3pRcfvRA7Cm4ffdfEejyLUoCMbK8LFDzU3D8uEjFjZFXKsZ7gvfXHaVdqy9DiCkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34FKJJrBTQvVQUQ7Hds9oyfmT4Fi9Buq7PXvDixTYb9eYry9wkqAeAdcywSZT9CxNSFc3WYT8ygq8LVfxKcs1Krv",
  "key1": "2RuqoLFgrnBbyrn6a5jqs3QJDSjts3YWG1ee7GWG6No481LAGC5cVT2TprqptYAX9BAK9iu2BAAbmWUc44x8zKLp",
  "key2": "3V7UHnEJhvKGSc7d88ApspVN4pDBm4TVbBnz7DzqFVoVwBSVG5RnABUKzHkHLiMWo6sJ92g7UGUha3MvQUqwu3z8",
  "key3": "5ucsXyhrP5dUJeuh5G8UXDT5DDPYVtzYzqgz6PGHtnPYTmLMehyFiHDpAfSNikYw7vPGnf8KkQYkP7ximnRvbK3J",
  "key4": "34ftdRxjMRhBmTHGuDbxiJwX9y8HZTecKkcCGzXo5iJ7UBo4g7fPokVs92CV9DT4htzS5XYG8cicrx7NdmDQGPq8",
  "key5": "2R3cAuPRHz7nBP1PRj6jxnUij5Do6TnnMG8KmpFpyQqvtavm6oqPw9ZiohPznmfroi4wuJ16n7T4yRYHphTjod5F",
  "key6": "4RKd5CEKYZokGoSyGu9GwoNWdzUWJyWDNSmfXnhzn6woKBH7YBBKrUhK91Ab3LrksQcciTcgXAqsoraa7bbgfBA3",
  "key7": "Y5QVDb2c1nBCKGA59QFKpHG2uPq1Yh4PB7rCqpbEjKbRxmPWHqp3ubG3mBqeV6Q6ymqvrFBm4xn9d8aeZ7ZP3bG",
  "key8": "4fjxhjWNvJ9EQUo9oXdT1mvuXppyqdh3EGwozWt5bANdCvXBnvYuRLKaEQ5dyWGfg3wnFMRG9ic9HXVC86RfEjst",
  "key9": "TNLLezrUkK1KgnH8scMf9n6qJ5gkdzw2z4qE6AZ26D5g4iWG5v1gsYW1ur7pL3E92SpCzDcSyzHx8QiS7t28m4E",
  "key10": "3yabuxHfm1dcB5c9n38ReX6iexw9ERJRTsZz3J7awcd92ha1n8k7V6m3Zy8QPUDuMwzkm4gR8dGK7L94L23asCfL",
  "key11": "4m5ooMU9hLpeJ3KLQARQppWCHXA6ehDToKttg2xDbHkpxgMXgkKoin4pa521g1ZKDkydUpz2yDFapNDQc1Lbw6d1",
  "key12": "4UjXBFdKEFZEeSLLMw4mkqfuUVKvCH2G5GwbvqxNQzL9Wcfyv5xeQYV5ocGoPDWmJUHKoqzQDMmDGLjeAixxJdfu",
  "key13": "23Es4eAube3xbDLTQFf1WZxXn2YaNkn5QNn4ydfvR65AWUXzzUzEckD1vFo9R37fM57sE3RnfJsu6vaQpnu3N2eQ",
  "key14": "2xCr5hJKFsc6N4tuM5vXp8H1BLhtX8Tu1XcvgnLc6ySS133Wbk3HyZxa5DVy7XRTo1XN9fnpHFL4Wjd8h9RtnoWX",
  "key15": "5nRxZ2sFU55LGoSi7xFnSPtHoGH1AWBaDmmEWc655oWp8rKYqa5ZKjthtUudRLsAXHWddq7n5L6g2zRP2yX1Cuhr",
  "key16": "44sPLZYeAyTXtbhwaN54DF4TqWG2YVGYfqMijs7MyAQ5j4tTyLNSMR5xkrFCtPdW6QeURBk53SfMhYugKMdCRJNG",
  "key17": "7YYu4X7TZBSbtzvsuYrMxyA9Uwk3vkD2Uh34VXd4f9ULjX2Li94SkMLrcw7cELG526unYYB1DNPe3WEkpYkYvur",
  "key18": "3HSBB1i11tN9xwmGHV7A9R8atGdJMRaec4TRoWZSdGgsbadenNKQrY69aJypABdZ9kQVFqascf4ZY36nt35a7McE",
  "key19": "3g5GGSKefmVCQ3g5KXWCoAMHLBpvg7ZpT2usVXzjkhgGEiwmnxjDrX7Fi6p3t1FtvFmAU72qpnsNUHh6JXqooums",
  "key20": "4J46qbeSi5C1KpKLCWqvwDvxuAsgA1hWe9hsndokJ2fE8gyQFqfHENCcruhLiwgtYq3QRZehArXDdbVkgTYfSf2o",
  "key21": "RZTfueYhSTZHeNh5p5gXYwzebcgKLgvBbs88S82dY8FYqyGydJBevdLRhwFoxFLnjhfhUHdFCdKUpsneLkmwCDW",
  "key22": "3WTQ1unqkWygu5zAbT4FCk7EfoNWu1V6rTrRtDTaYDEKA3eCjekS9kvwA1UMFQUGmdcoEmpoZP5yTkb2e4F3753R",
  "key23": "3VFw7SFbwKAasVAK7PNBg45Hdp8oQUP8a9jbUg9fvuFyB5HAJmbkKtfj64deKoPXBQn8bbLCr5R1S9f5FweGiPgE",
  "key24": "3uDMYneeTar4ih6NtpwtLc8qQBJoVrn8DK5pjtzm4zsCTiJNXvLeyhkEiNZwTok68MXJ3mb7q1BywnKSx142wmq",
  "key25": "3RKPZdNbHQNqoKZCuAsfXL8WoHLp8fhddU3uKNurp7kRxgQCAeo9fW8TNYGF3hu1MeZKCXR1sxdKqe6rDnsFjUgy",
  "key26": "iuXSsZSecFdhRDXw6BR5Vp7iV28HPcawxNwbM8qF8B3gFGSDkVsk8JWoBLEcw8rZT1XkH8Rfrpyp5Y1XpWpcVg7",
  "key27": "3Li9H789jVkwCgHrXxrTiUa7z5p27FMs6sExUHFkXAjS2xvmndwyREW8v5VPT1LTk7c2V1biHQZTYwmfPV1Qi1WG",
  "key28": "42YseDo6Towg5AGghzraafjRgk4vaB3urwzeGkF9qmEHWcdjEdsG1j6qNJY2Y61327pDAFxzKzTkHz3xQnfgTGxi",
  "key29": "4rGhNtqiB73XRTHw7GGi86abRXSGkY6RHjX8bRz7Yd7AARoEzoyo9GQTWA4JvWqwemd8PhBxa56zvtWdzLqpxnZi",
  "key30": "5GAGY4AmGTPUawaQ9wmsBhLgM9tGygfMjQEKwMWw8hx9JceSZFboG4GFSbCiJGJtaQFA8nkiUQrSiECxUAG3xBa2",
  "key31": "3GVLYX161TZ1ttJ6Y9mZfkc7VhjdMeKXzr8p9ZSZMbzVhokLGvULvcsyo352eH5xn4upSGdq6th4uZze3oaXn7rh",
  "key32": "3SVdHroUKLsPuWt6P4n4qVxkheQ5h2S5RYcku7aeMJPDzywEKGNYJEeBKKxJzopxNvNM6DDEcxyihw22zfcJbq7q",
  "key33": "yvg39kGRHTbjgC5tUEEvgDnEiZZDdP8GA3YNUV1Uu2hCyd7ZsV3yxmKLKaoTr4yxueJsyqi2xhQGkscLsUg785e",
  "key34": "64Esb2FTZqPbWL5iLDWEbmnzrJ4eJFQjp4Za4Dnw4cfuUhngDp8ngR1BnTCSc3nBoKu8eUSeznM9e23BcDGgfRb",
  "key35": "3yUveTZ5Paz7r7ZJWkUVQtwS6aHwEJfz2JYkkrbX4LzHv1HQ8JR3CtpiLGo2JY3o2E9ajogdRFVMDGXTakJXqVJX",
  "key36": "2qeYEEfszyDMBU1AFNyefhRsKxr71eB7s9qGvXJVHwPUHJ3NkL6q4X4QwbvWYrrLiGUkSazQottxJSMtiqi3VUuf",
  "key37": "5MPdz236DRyhJsLcWgM1KuBDnjtRghzPSmsuXVFKyBoaujq9YUizAsaT1ABeGct1u62Ujobtz9zCescgyTTwrJmj",
  "key38": "m4pRjdQyw5BH8Ab43vbn7EgKnb85BbSoiBfUg62ND5yP7ausK9vvkZow78Xtmpbs2fzj8srik4V3bfQVwDjXy4q",
  "key39": "4zTBpje9iCAgVxwbYkhCQpKL1iRDFJnVH1LSNiBixf83QcKX7ysn9NeMAbu1kp636fiG2W4Yx73o8R9g8WGNEs9Y",
  "key40": "4Cj2dETWtXYRT6Ze6FBMPGFa86HaALGoDDK3pKNMw5rMbHMHUQcs77RBA2HFLBC84mp64DE5xNJKi6STDGr1vPRb",
  "key41": "K54FcEHS7CzPfxBvYuFav5o2WC9JQi4uAhUEsAVd1jFBfkNdYyHX1VzcjySvdTHhWgaX1nqqyZWmX45HsQuGHjM",
  "key42": "2JqWSw6jLReN9gh2B7txcosmvEGY7mGS3qMy7cuCspcUpPmGxoQ5b6TrFF4owp3rDpwahagdsDHaXZ6Eowe6xzjx",
  "key43": "656BdT6UcbcXjEpR7EKgpCqxsG3R5Wtgxy9JJjZq19KViWr4Jotrr5ByRZNa56o5aJAeL7aTjny4TsHBPiCQ5SXx"
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
