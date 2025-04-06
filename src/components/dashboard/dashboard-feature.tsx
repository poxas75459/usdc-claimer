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
    "659gMSGcHCtyzr2SkyGTg9AqS6fwfs8ysgV3QdraFbEHTg27NrRam7RQkhkgZAzC24CM1sWXXbvmeoamYQjdTBnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gp3K7R6QZzajUbGygcUxrTbmaeYFhu5StVpSzX6iZfRQNnTmPBgm1sTLTtpSBByZo6NbLFCzRWC6CH2JTk3WNTW",
  "key1": "k8N96BrhqaactZ4qurcaijsFeSUiFmugNeWHTgPgekzTdGXMvgFFuwVZrfiFgWPuQTHf1bFozuDPJvoxiEARCEP",
  "key2": "3bPetEsd32E7Vx3DsiCETSQxWnjyJmDz4JaEJLvsVJmcdYtdBTyD3jcx2nGnF2cLGKcMJroQu98ThLvXFYadkmpk",
  "key3": "Rt1QShBjPisWwETcwgAbhXfvnLVicGpUMXa47XKsZ5AckKpZZjvkieVFdcFBPBc91VZfE5aDjQ8nyMHLMgdtAJW",
  "key4": "Ca2WNYMqJnMB47ZaRa36EA7Bok5vF9SzdjzypQkAShUx2QbSyqeJqtCPHP2gKCrYznbzkM2KamHusS5yACLk9su",
  "key5": "5hnzdBAMi5szQGuis27uQ2KSwcVhrCj7vp5r9dDLtnwouk54ZRozGStwBsju67kkRLfBQhjJNbZTSLatjKPUuvYA",
  "key6": "5izJ3HYctKpYwkoCagnc3BDnio2zpaHdDMoNZDenqZTNMdihVZvKAgCyPEA6hrwM6SmakFhD7QquysZHURLZAHbr",
  "key7": "3YYZ7RFpFJ4LzBATYBiMsri6v6nDT8s7To9uiXywkwPGurgSAXdyNwubz1dJf1Ftq5exEk9pV1D87dKAqbmX9zzE",
  "key8": "2ZCPdAq2sCFfuVRW5bfPynV9wXGwfFRDkrHUknDFCvjmnPMGu1r87JCJyfBr2nxxw4CWPXH1So2zJ9Q2f1oZD91t",
  "key9": "3JPcTph4WKuzupASBp6tZQK7Cnu7qj44n7hJR9tyPKgGKJ1cbZk4GDbTWGN7sVpL7YpP3y5H65zRxqhAvTWCjmdr",
  "key10": "Go9Xurdigz61MPyoJsJxdtbXshrSNeCUM1iWftikX7EKnMJTD4vGNwPbcmLwN9fEBXFq8DCyrPWhrfpEeiv8g1m",
  "key11": "44fcQEvpzFMfZpb33S5PoAS5meFCWawFjFCZui7xbsAsYt7Aj2XYquU7yL6n8LyyichFDnujWrZeML4RLGeWqJpv",
  "key12": "21MD9GckDPw4goFjXWh9kVMwUSQd6tYsi3yJCHcFtP9uYTLyUB4HCgvrgrFgg3qG13EQ4Ycmnrdeux6Xb5feGJ7U",
  "key13": "NJoyGdPyRYAziTLP4po6xbBNSBTvCXEA4r4rA1XFqgpxgj9C33FxrnRtUsdDnSxPy5kPDcBpAczy9ZnBgbZrUpU",
  "key14": "4GH3unnV7w7Z5pf45XpxHuFNsyoAGSW7XJ6e9cfBMLgutrWhxa9rX4MrACe6VQizD8hrq5sywssFzWH7fTnMRqL8",
  "key15": "2sZqDYQG9TktBXKDMxLAoAMFa8EVMMgHVLX6KGtub3cheMR35oGpPn7vxhfkLaj9TADBsiVLRtTTr1HY4cu8arvn",
  "key16": "4YrfDaX5ZM8rpB7VZxnknEJHEKdEYGxoF71EMVwM3Qta4suRsFHwwntTEXZPUJTdJxCSu1KLgGCegN6y1RijYUYh",
  "key17": "2PJBpt1uAyrz1Q7PgXsrHVL8vkSxTwAVbntqKNrsoXeGpCf68BR8pusguJsXBb64FDBNr2QEUruWuxfee6DmiCt9",
  "key18": "2LBCEh8rty3ns6TzL1VaCv9drsf1G7RkwuE721kUjVtnwFcCbHqzFRkV3n8udQNJ9KWsyaymMNkhSmQYfUsaSdhg",
  "key19": "56VH5P2fvbxey4T9s1vHKhjVxH1tBaqz7MG5g7S84vRV293fFGqMCHn7pC4TZYTnTtdDTrXxUmvYLg4EHgwFTK9U",
  "key20": "4j2su1CzLUFj7fZzBS9QCx51HFwf3aduYYJkdWxoqPgiHacGByCNVn3McXhPLTVFpsWBnmmVia3u3ca9snvy4sLD",
  "key21": "5LKgBgq9KPmU6WdsqvENf8FiiUPZ9gWLyw18dCK1ymBkRWp4pPyVd1LUPKF5saB1Zr6wggK5JTkvMr2Vj89T6yWT",
  "key22": "2peGXcz1WR6JBnnbXEqU3Ni2o6RQmC9RPGznNzQkmHRUj38QsMo1FSqnyUJtpRCcn8azKokAfEMBs4jg86dmjMPN",
  "key23": "4TXn4vxf2aYtNWbMADWp3VipD5AzpNDsduqW7aeSEB4S8LM7BZ97PWQcNRgbA2o8E5QxAVyd9xDoUXvL6nFYdw7L",
  "key24": "52Vkb5YWy3bZqwenHQWTG9jWqpQKgJ4jstSoFnjWEypU7qX1HYsf7eFtwfWn44ag1Gx1mcG8HUebkU2za2mGN1vJ",
  "key25": "5umdaVxHomxrdN81J5j31Z1zEZ2JWCi6RsmNo6gG84G7Nz3PZ3aHZc2rybzAUniA6Pk7tt5zz2icxQ61Hb1nfZg6",
  "key26": "sVzW31pE7GanVrrvFBSTQsK5qpp8bu7GaTZPhvhPsTLtPc7FR5Ui26txU8xM85ybu3WNiZg2vRgQrS4N8WyUh5v",
  "key27": "3V6wKyxuGQ5rGtruDof2giHWGRWzWK9KiHHbS3Txdghv9YZjau3zHqdP1KPKRwRV5fS7mdQRuGbK9ErRLt925gPb",
  "key28": "2RugSiTGi2biMbmewjWLuuX3oPunGEes7FLtgVVaCpdh1fuskMPJ6uXCE7eJQa9FHUCoCrHFshJcTpmgjtJCtqg9",
  "key29": "4VXf9oUwezqYD1hci5PPb5gPrsegWtN71s1DkPxqnRxrPiSugUwzQY93T1oTWKWS4eR6o3e3dzjdnBqYtSGQEwnj",
  "key30": "2NT3dmQ5sGdZHGQBTZBsDASozxsUS5p7UkVLxhDfJZYvxWPuYwsXkcATTrQgdJCaRj3wVaXggxb9YV9weNVnsF7a",
  "key31": "3fBhhoRVnZsBEmCXhz7rNNh53NfDhcjd1mLxGHYxpnaUKWiv742gFVzYLxBRNzdHMtsJbj9Fg4VpywBjwKVao6x5",
  "key32": "328K8LWyqHpZPfKEcB27ALdwsoK9YdZ2wHbAt6LVhe9sYD6C98pcU3XQGduguf2kRsEwuPwwBpWfjpqpDnsGiR1",
  "key33": "3CCJJ2JT36zo8Cm6sARJQs9DcB7SPgSS8Bu2UTi13pQiUwPV6A4X6WL1A6Mdunv6KBw3WsjScqFCdydcM3bisEBZ",
  "key34": "gHhYGH1ohN53gEVva4y5A95UCsGZenAM2prXg71Dqu3u21cf6HheT1fjKFZkuUyLzYbfkckDrb7ZcZid23GQaiM"
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
