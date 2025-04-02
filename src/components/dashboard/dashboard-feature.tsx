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
    "2wsiWScArCYTzT49V1r7Qqu1TtvUAZNMucqXTCwXBkiG4pz7LfVX6vhLGAWbeBwNuqX4gM9w8QdswJdht1Wb1br2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XiTjEr3jQ1VqKRkMxRnkmq68QnSkgqQm9S4hvAT483UgDYqkxtfyfttfBS9SyADHBkJyydEZhP9P46QdAf2CkRo",
  "key1": "2H2JZKA81z66YoWvorYtpvfVfVsTsmduLmxanPSJ2Yvuq3zSr8JwHHTbFqLBdoddhgkrEm4myFwizv1gyybEszF3",
  "key2": "36eZAgnB1GWwbGzFA77FjjAC2MMWq6D2TBKniHWM33r2e3eccBpbgQRwT5YjybeP8m6cbm92Q5tr5aVcNU6sUx5a",
  "key3": "3nTyZhR7sS6vp5TPgPoG4FYjGH8G7mbYGvoxKgWqh6sccnkaXNTbsV455TSiFRhNxRBEnCFQwLCd93hS1yVv1J2D",
  "key4": "43C3W3pSK9BdaeNeTicW5t4qFoPMqPN52PKj22ZKDkyBPVAA52AxUcrxrrktuoKmkngig3HSzzBqqKG1RMumwZD3",
  "key5": "561WffFhsFs94k9hSjLNiK7tpU2RYH8a42iBNcEtvp7wj9FV9oiPjsDn2uLUFU9jnofonC8tZqF86bNqg8HcmC5",
  "key6": "ZWTaWo3cNrynrh8ZZpSFSrVL81d5yyxByPY7buFZXRWwuqDp9zDWptexkdkPr2eYCAeZkzRaDspx3c9anHAnDLa",
  "key7": "59rePNjuW5wWudm31EMxbYyPKkUMai2PKssbZnMZL82e5vV3bBGiRVsrTXUSgX8N1AdhEMrdaJAbpRGYPQTzWxHQ",
  "key8": "2AQ1C4da9WHVVigZSXqCjgJMaJraq2qYZ6KNNtZawEn5qDkQvPZstASPm64w7WsRaGqnNyxP8ogGYdBsXiTXUB4D",
  "key9": "3S74ZcJr8mhJq8728NSjSNtRDbyTYxxa8Da2KBE37KBYfYdg37JDv4JEKDqnBybE1s4bosnEXpLYiBCPawnGzdBD",
  "key10": "pP2j2iwE7yQGdNsBjqDv8RrsNc92BYSuqtpm6EsGJvpCVxKwcFTRTg7WTLrdudZBq7MunJEHcHBwFRQn1qz8vBk",
  "key11": "3QhBvNwqmnMuS6PvFoobwGquKCxo76sJpCG4iwV5T72T7dsMpjd3b49dhmhX5MofTVoZVEEeX2smvFH6b9HVdme2",
  "key12": "3929NkPBHgxknPo1tdL4ZYTX815qXaJnSxAW4Yiy3L8aeX9c2R3KD9ByQh3dFYRT9ukZagyD9WSdCtNV3zmK6c5X",
  "key13": "36AdtELAJqLxxQY34uQdNQunSj7M5ayXiFjBaAvhbVf54kX1U3uuEgYzimy2TJHSuoPVGMRFxJ1poYSovoGcjxCh",
  "key14": "3CJQBbBka6a74rgRLgmEvkNcoiTMp98rsWGpJZM7E9BMc9ZijHs6maqRPnvrLd1qmzEahnPuDfcqa7XbkWBWky8h",
  "key15": "15zNdQiJpspt51z9YjghvYc8Kuy1FHiFrnE64w3oEhcYdcGkfqkrbrqyDVbAmE8Bp4D7RG7JnbcLLa8HvHr5War",
  "key16": "5QrvvCY4e1zDkxVaMHbzD5EC94juCWemgv9bd65f8DZCzyJNBHgMd3Q66xCCRyWFhT494hVHsWkbnHMJYxA1MisA",
  "key17": "5YaZ1BRghpHErH4suME3CcznSxZDRLe1PeoJ417YwJhS67soUYseNpp3RwZgVrnnpT98EdoDs3eEjLQKxR85pXE7",
  "key18": "5vQSujUyu1EL4Mo97HKYh35MTYbi5Da1eCYCpW3NN3qEyNhSq1wJVrYS71qzp2VAu1dbFTEWvRAZho7MY7KDXg2s",
  "key19": "2qhAWcF27MZuswbMEZcHvFVt8JMXa77na93NjG7AcoBPL5C8C6ZMAYMpgQRQzkeqEGfW4BJJvk7vGDSbi5qxQFfP",
  "key20": "PC1YivmWuXLKX9ZbgbJ2Gi9EjhyftfSHTRZtkKJVUw9k8AnSw3VgRLLYAhiTN2d1dqkctp87U5hrYaCQDKJKAca",
  "key21": "2BwW3XYmHBGBxYQhApeAo8rrBdWUU7Y7EWycUuiGx8EqLTN378Njfedi8yKGiXKATD2Mi5FKYQSQmX6PgkQmsF6F",
  "key22": "65ez9RVP6KnWbryE8xrFnNqN6wvj4bKPp11TrQStcfn25oAzzVLKqY6XE5zWBGEFMEqZGF6Jr2zQikWqdx5rAEtN",
  "key23": "XJw9paca1JnUErgh7nJzgqADEEWPphizeu3mUKUnB1sEHyqpHctxiKcHCKkBqfMTYuKD9hBiqr7r47Yx4tAHjNH",
  "key24": "3vyHAMnhSo2M7dwHJ8hQy2zbLCmhSwaAnnY1iS5MZ1WjMjiD5can2Rte3SfihZXPkUqCT6MAoQ677pEDccni8KRx",
  "key25": "8LemjdnVEHjgRCmZKnKYJLjJAX67KM98HjhEikGK5hWcLVXvJG8EwjF6p4X18mxXXwucAPdwBqPHrXesD6bEkjE",
  "key26": "AtTpRseT4pofBncwf2n9TnNARobf7NR4szdtSCpFdhNHLpkjwudKhUbnzQ5Mdmtr8g3JAcQ7JcyaXLtZ4bVSqHH",
  "key27": "2YBZMeEAztBFqbYJfM9Zicn8KRfaAQaEp3RULcs2QY6m7jythLsibrJyqH1NgvJjwzHwMPPje6BqD2piQdXFHpm5",
  "key28": "53LZpCfc6ZZiKN6do7kwejQbifTn2sT8uQd2N6dDVpvZD5cWtB87xivpBqfqtMKQk86mumabDoWdfTQ8rdrBoVrJ",
  "key29": "5hCTMoVnWZrwPhAHtjjPaLkFVneTjzjBVZ2VEaf5YGzAFjhAjtUDVdYw9MHhwNkffc7WY7PRtGFP2ejEAwGXeVZw",
  "key30": "4yQtrP1SQVpgCCh6pAXgeUqndUKoEyTxTNSxuMwFZkYoJHumozmh7ABkWPoXC8PiTrPDPQGamikPt3tWWWH1JZeM",
  "key31": "2EQmHmgo9DzemQdnhpkFqXo6vzsGkFZvX9USGjTeaDYyMLB9SYiSEbR7H3N8FKQCzL7vxFYsVEWUvfEjSF6vBhJ",
  "key32": "3gXSUkpSP3E4njAJgC275nj8pkJ6yzHsEWDfD6DJ5xL8ZCwU4L8b6JMAbZyxkzd6EF8mwpfLBSpGUwuta1kbD8da",
  "key33": "4S5sNgeDdDgjucKFixaRyrAL5dZgzMpYHapBy4fsBGvEW4tVeADq17gcTWkDiJXU9g6nZejE2kqH51D16d87Fn7R",
  "key34": "o19zKCHNFjqJZtjdi1Mxa3pprPSDKQ8yhbqQZcao4sH1CwFRcnxS5Cz5EJ5AHpTZezG749EdjU2hPBL9FZazDhn",
  "key35": "D5qkKTsRoCLbhHACHRd2zWR1iUnACG3ayC93VPdzCNbmde5RFiD2kULPKUgpyVvthhuAJW68xxwAk7KThuEFnNZ",
  "key36": "2JyNsdUbvFC9G2woAnXrd7LyAmCb7oBsjFEL7uGbv9uEYTtfBoYNiiEtTQdFhQC7ov3s973z8GCCDJ5ha12yD8qm",
  "key37": "TirY3as8ykWeMmyZPpKFKobeJ34uqf3kKVUzMLbR7AWMkFy3pNLuu19KjyDkx5Hj3uV2RzC5PKFZQ5WPSPKG2d9",
  "key38": "zdES1WnMgqt9zouyfvVyYb5idBGhokMq7GMy7SJ9PzmyPz9Rvi9BVVtNxLFic22BUU9wdLg5K9xxtvbbRiHYJVh",
  "key39": "5y7ZcUDjZMWEUApHxiTRXdMxZUfGrbbpmpZX8aBpedd458Kbg1ftR9enFLtLykSB6YSjeZkj1nXjgmUBv6wd178h",
  "key40": "4mm18DZoLYtDy7XuSY572XPqMprYKwGvXkbewDZFf1tr6jgS3amArb62WzTzVPkZpxDZnqvGM6vFNhkVkDfGRxNf",
  "key41": "34LHRZ9iFwPg4ShPYon2hRxi6wXxHU8wYiaB4k4ENfWL3G2Cr8NmRtBnoApqtfJa1GuzWfx2wQYxaHnu2RvWN5p4",
  "key42": "3GsQCo5DVDV5MEawekkiDutEsxkbW5SZgjEGutkczugALUx3zzyVJ2Dtq9s2iqcnVcxsK79mMQR7hLAbDb56t7P6"
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
