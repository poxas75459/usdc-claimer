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
    "5HETRsKAKqK17WCtzR8LDg28BuUsw5EFoGvstfHbPu9USZMDXQXY791knF68dDr8aQ26Smb8b9ceR3Dgrke6kUKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26xy6CDwXBqRjbcUzYGXDAA8mHh4LfPjYAWNjL8xkVzJkjpMSCbbnrLFv93jpE7D8A5YwVCS9NJ9z4oWHD7aHe9S",
  "key1": "fAeN1xZLHxZEVJj21RR9KATzJbMpyPyZuUkbo4WDhnt6n6qNTVZueNkQSYqDTSCKBjzuk1xzhgjb2L6xtY4vP8Z",
  "key2": "2Wem5666MM1L6vmhY7E4UsusHJZSgM3PLWxkNuS5r9MYAFY1o3J8c7DoziXWAuFFRuQx6YRGebW32AAvRvntSfcU",
  "key3": "BaWe9FSVDxJdMhV5d6CJvqHysn4szcz2UQVzfNbfo7DaFkX5kSpzY5UbckXtUxB9MsgvmaPTfcg8qf6KsMGFVhZ",
  "key4": "3WENrcsnraVX6m5eaXPrEVN5yj1sYjV7pmtpatBzEpZbUiJeJ8tFfLeu5kkSwuEgkeQ7A1V5ocbSaaPP3QPAeecQ",
  "key5": "3k94hnj1fMrgteqcHZvo9MG8wUfLyNd66TK18dU2bRLFPHssJv7EXRdmZ88T5SWws6NGtDn2C9DDr5GBHn3zP5jV",
  "key6": "35mJ3S3aygxJ9UEr96JNBbzzTKQXSXPfiGcUFdWTzodQ96EjpyodzwEtRKDtjmJJVXf563qBz1wwDTgHa13bbpAt",
  "key7": "Rt8im6csCSw4sGiRnjkkGwXTNMQRyCdPfi9XDvTk45APSNjEozPuwi5R4kx31xbULutN2XjENMACKgpBA1dcNrc",
  "key8": "3AmByqMU4Hx4an1xNH8Ymq5HdgcHAmaWXyAri3BC5USzRYwpECLJPXsoH9gYVaxvD3UAD5VSmaWiwU1gCyS4vpix",
  "key9": "67ECvTL6pfgBAHWvzAGum87iX8HPb6Sq2bhAd43MBVJCcQc2RThvNp9YLfCvjqwmaMgjo7jo1RYeZPQFeXHgDFkh",
  "key10": "3XPX6MZwAwphgQVVwb58kwqNcR7JmwxSkVfHtNAQSoLrjbBcaBbVPFqWB8nzy9ZurE8UiUC7BccV1HKjHiT2dSLj",
  "key11": "yHmFE5fySd7Rxg64NvV333SRkNgqy8gAe3FQBhEUKWNdHSYRdJd7SMQCNezmsYkFkBkdpFopR7vRMRjBx2vJKmW",
  "key12": "3GDX9ewqSGPkbZjZDJPKVyexi7iz6jks9zze3BXMJY2aDiPFZRy1zfoP3hZAkobobxp47NJMLRM5bnVaKf3Q56yb",
  "key13": "5g3mvnwJBU543PiQL4zYaqxrYEigDhL61YPRdXmpvhxzHwxnoSavkMZXrjXoB7tutwZGwfgSsZSs6drVALvdC11U",
  "key14": "5N1NoNCLC3N9Zm1Va5k62bZkRVyqgFTg9dPquuZtm6geYcfKns7W3x9VHApxtoRTrcsVbaq5vrTgjrYL5QuifGLE",
  "key15": "21X15pSkoyDpoTU6S6RGDgQAiFGypoDtfEJV7hFtP71jvC7TXw5kGxD9zkH3zrwBTogHhQfsuNCMYgkAtXTTvFoj",
  "key16": "5K2fTHaBThnxXAPvXn35QAJHGE6TSrei5XpFzu2HKTi4ZRbNMnWgHbL1RvSxKoGjyvmMWDQvYw2D2h8N5VLZGAoy",
  "key17": "3pbMEdJA39DyAvy5b86hiUGWPL3BAVB856D6bHSC5iEmMuDHJeX5YtcTdjfAbcP7oHhHGi6jzwbUizM1GiaGaGeu",
  "key18": "28NJYk8yvhh3JjccEBocK3URPVktPYzVYYPkbSA8TXxmxVNM29ErYzY6izsZ6QKFNahhXHF3qLsGR9V8MqmKasMW",
  "key19": "5gYudwd9AqoL3qJXnqFcgeEgYruuDyJ6L4osVbB3A7c97PvWgh25LcUdf8JCtBGwruEF6U4jpwjUg2xW7uh8z3nM",
  "key20": "2dfeJqkpHyawqMGy4R4NQ38QJpgtpn5KWtLkHFydPHZf1egVRQvBWK4C6AaWKQ7bo7frQbCRha9ztV1xipjVrGjH",
  "key21": "vjhSrCp6eoRaCo23ostdsSmqdT1DA57YYg7fZhaymbhm41s8LtQuqhTQaa9Sqtd9D4dgUeaMkeayqAVeZjLMQ4D",
  "key22": "2kq5pFomjASisrfCVws4R2ubJFsfTQdFuHR2xot3eZVq3NGNPciVCFiay2c5M7rLgbcRrcsbsg56DVDr6yJt1PPr",
  "key23": "61MFHFdu9jvorwy88qRSvG5sDs7Xfd6ybbXjvM9eYkuaQ3nboRxVdv2LVV6DBdCyPyKVNsUoAzneeTb5RZPdxvio",
  "key24": "4YvUdS8ArKmfYKjmC39ioommSctfHB6phCtbnm3MUnjXywffua7CQBkyp8kuXGVuy4vqH1y2czEWhye3LAhoL8iV",
  "key25": "3ZZvB8DmNTvnyTPFwWShBQbsTSAa1MdxvzHAjK5ggM8WHitoS2YZELL7qPV9z9DNSRAK1Zag2q44x2ivtE5Zu5Z6",
  "key26": "4mnuJdSr1gf8aJuGsE5auZVsHDrsCZaepdsHCpsRQTPgTMW1x2ACi4VRuJaZdPrm8Dp22YbBh9tanDXVenSEWgbH",
  "key27": "4RB6JqGr4jd8jr5GadjkbDgYWJGo7gMoZwvvte9oCZM77aPWiouqFbt2bGsEheWKcMwSZREFqxEcUxoATouZFzfd",
  "key28": "63PxH7845nGpM8sYKXnwUDWp2gzBAHCAWzYscEsFfQLxafHgTR6sVRpZSzXWy9gEHZNrEvAGcnkzZsJh2GTJKRxr",
  "key29": "3X7QaMrCeAmJtqZi5k6Yh912zy7yRBCD7kx51RsBBdrbvLWqiPYBZEyr51KfnUzghz8pXL1nFUXF3nGL6EHqVoo7",
  "key30": "24MdqcVpp2qxGS2zTD2Lzg5ebv1Puc4T9rKLLaz8GTZ18E1uUMEacRBKv7qybQoj5tzm4G4CnJteuQxDmSaVCRjT",
  "key31": "4pp8exyuoinVcu62LVw8vBtf9ZRk8UB5Lp6fej8hJX3jsSu9dPXzPAJq8ojBYePHhPa7KPnyCUVE4uux6xf5rDD8",
  "key32": "4c9jbi3P4BMH62Fg1MegAmgmoPwNhSjow1XQx1jbuozCcHjFFutAdH9eWp7ojogFrnXjHjHJKUrBFZC4edqjktcv",
  "key33": "56ZRYcdq14UrjAqykahSNko7qpcPZX1PB7FydydVzNWivw57fr4nHhUo2eUHWYTeDY3bzqh7p1MAWDw1j5jVDi81",
  "key34": "3qkaZxxueKVociiZD1Q44T62rQkAEohN4WTLQxuh9BSjpX7Vk9xz3eYnshm8eFq9kcA3nqjrnLxGetVMVfWLfg1d",
  "key35": "2Jk6GmDDNx8WV7UVvNbDAzeoMZQab3GtAd5PZB7RveGddTLgkLT7QUadzz3uVB2FYVWsFTvseVut39s9fFjKny8T",
  "key36": "56UhuYXQswunb8ERHNyF1nBPhFQgE2zczByfKSjVwKKbWJzYwa1QRKG7fa3KBSKvVdYFr4zVKnvCgeW4iJGj64T2",
  "key37": "5m3ZaG4h96LyZHYHNJj8fy6NscybWVLsGBLMfGGsx7YXzroQHCmJSTzE77aDbBg47kGe2HiptymA4aH1N7KcmPwU",
  "key38": "5R9tEiAnMnFJG8bmQ6XtSNVruJ8Gvj7zPru3tDF3nQSvag8Zh1wzAkMBaP7iaLJ6oNqnccKJimKgCuCWRS7XiLwM",
  "key39": "kkMV2722u4XSPnkndPRXLBbq2ppstRLz5ANjZK6fmqPCNS2D4Ybk4gwnUg8QbKTAMVbxUjVQa1T9LqxSNKgDZ3B",
  "key40": "RVFaXLBAHuWgvf4bmYf4Ydkht5cL6c5z7sPTUjo6rJCGPYAg9RwJU1e6msJau2NE6Jbd7PyBvqdRuYMuBgGWHd6",
  "key41": "CMpAU5jJVg1pvFanHMiRRU2d7m4Lf8V7B52aNEjYUZZ7ae4vknm1cwRxgJmn8CAZCywDEDms2tacHmJLU4nbSwb",
  "key42": "5VFR8NbXGrLEUKnaNQUZachSwi9sr8e8mdRequKdSLZm8MUujKBvuBCh9523d87tpzbneKKpS7RgqXwePFf27SEK",
  "key43": "1oFwg8SdMoxMtFh2rNNYsxM6Bnvsmi2w6JxUnj2nD7oiWLHdDpSyowszSM7GkPGTkmsWeDV1YZnFRoJwpbkuDPW",
  "key44": "3pR6BaGSgaDjcFXaPqQUvjuemRE4Sz8FJF897cqvd3kXT91RwHVRChTmUgBKhXs1dK7eDE7zbYKBkxLkp9gGTyDP",
  "key45": "412dKeBK7oohvKN4Tbu4mHoZKTwwDmvUAC1LWHu9drs1tgK2P1ixieYQMmYrviSfi9fiH8Hsx4BJ4aH9sxQfK4go",
  "key46": "2FTt7CJNV8gdyn4B1mbhHDEuLaSYjPELASpx7YwVcpyj5t3jpQF1ZnNMgsDsRZnwyTRVHfsHvaKfiXvXWRJpBaFv",
  "key47": "41YdFp4jjfpjT7rCT2RgWqBjppJg5Uij2tVntD4X3Qe84EF7G4sQtLLASNWYQ3QzDwQtGWAuqMn64vMBwGT9FBFX"
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
