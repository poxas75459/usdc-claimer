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
    "QXKcsyALRD1U8PS6NCJwMyzBD5tXKZhS8Whpa1zZ2hUp7esTcByibb8hUh42yM5GfgrBw3S4yZiLNDhNETP7Lj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HcW2LZbyskLue1PtM7GBzHiSFdKWFetTVqRvBMBpwZUyaWmKXyu5RtDE6ftEiyDhkjc4pHNG5wnHKLixcw3beQ2",
  "key1": "2kQMtgeBn31otAgMKQiKJt4286NvmkTRWUgzhtWJZpLMwFrKjrjaikHdkUQeytU4xjfYEYJVLaoVzTLJd5Zg8Zbv",
  "key2": "2mDs4mEqA9VFWKq3tAozBf3h1QwaQNBtQ8TwXqwCwD14ZZ6MvLpNMSGivdvuK481Z1rz5nTdhxDMp5FujYngA454",
  "key3": "W7g57T3XmbGgvbYoUWCpVaoZBaw1znAg1jv7hcxoyTq1Es2LaQu42ELCq7pucf3jBPNri7nLwh71NpBWFiNyQcR",
  "key4": "3Gmm9keqUnQjk6Usp1hnd113bG8wVXApdwySB4JZFTPoQcT7p6SZFeD8mb2TQpdXSXgtSvRSYBg8zGGs9JBf5sWH",
  "key5": "5MAxqjzJ6nXuNZg7NBtpN871wELkcsQnu79AQ2zG8VCYCDAvZ2MZr6F4EtfecbQw9v1envBfDWTBz7qxxGTZKrn9",
  "key6": "551yF2CepEAVpkfAHFHtcpQUXu8SU33JEv9QCWk5QgKLTPddVdw5HxPRGMjkMRLjEXuBx8UwVW8xQcbxL5tbPXiq",
  "key7": "3paPvtpre6ZTVSGe3maCPjXG7hYtTQUtHTyviFBbXXEiUqyiJ8dmFb1S25c3E5qra16EFLetjpPokVMR2HuybUKZ",
  "key8": "3jcW1YfkbnJbB1hDniZCfTkAva6bxm6KNmFiTfvEsFMHRqRjqjP1zoAwErxGaZRDC62z8KkVw7G4zhHtV1pfwLNE",
  "key9": "2WQ32qGsqJXGtYPEwjajhC8QUwom7J2bgBwgMde8mEZyH2Nvu3XBS9XxKMe1EiqJcii4Qpdfmyfvj1qQznGwM4ex",
  "key10": "4Krg2Rg9fA1fiVcifEJG6oewjrJeRf39g9hB5au8rgJ5FsoPrM5AuMURHngq4sppKdjzE3L56ZxQm4tHQX4QifFj",
  "key11": "27Tfai4fMPktUsDsWKnp7cvxBu5NwNmWnJ28RWFAQ27TQyXwx9XVjtemjW7XACRxKRPtDmP5nKGMZS3bCkCpd3MF",
  "key12": "3RSewQDx1zuSrBmmT7uebxYJHBvbXEvmd562SEpzDoFs7coqvafVH3wYqYnzMDNPRpChYfkBJvaZGXuyMjZoFavB",
  "key13": "2ALPWHqA49MVrLnRcuA6QokyCP8rvYTq7uARwKaLSCHeqLuMJmh51nCZ8X7aYfimeZ1HMH7jAarMvPjTsAob4ATK",
  "key14": "5Md3tLKysgEt3hqjxS9MAxKDctq8X8JBxBLqiL6XvWyonzBsZKVvCAGW77fPnF59x9vdiVyqRznXwfEihcaZhWg2",
  "key15": "3SbzGfLouFsiv9BtuGCXh2Mr6UT2vCPSRRiE19vYVP14MbbXsQAx1fKT6CZx8hHdnb7NkjbkTMnySQNsMVBXKwKB",
  "key16": "5tVi5VPgTfUU3rFDX2TCZpReopUhrFUL1skY7yuTrNPx55iwMygcSQeeVDMv1PpC6vSD2qDHhJYgufY5Gc3tVEb1",
  "key17": "PLG8t1Q3oDpCTXumRWBV9xt9S3NrR9W8fzE4TKdE91B9kMAPbNczunHNnG6AdpTgkmhn3ufjCBeP4Qh2xSvvqaX",
  "key18": "4kxxWmL17614xkHDNFzbTEz5NRGXwkQBikhC4JSopfrYiknRuMu4c3BdvMEpcVrswiqCMybNZ2uG1jNCDhKazKZB",
  "key19": "5DX9fcxk29wLkmP3h1oXiuoiTh8sdR68dhvRbFT4TisDQ8uJU6Cd91dxcNWSeEtgYM7r8CjtbfDGKDEzPysGoxUp",
  "key20": "2mLRvDKM5sKUGu3rmrze4z6bhmMZVqk75idgBXRiHBW26Taz5iFcmQidyMEGES9yktdMGobfP6aLtDCApfFjdmhH",
  "key21": "3ufDAj88huL5mUCYBF5RoVa22te91G7Umpu6uQNUPhH5WjePDKC5NSrvAYXCJjuydZ7ses2VpYK8yVHm5e3FfFxE",
  "key22": "ZdeVrvK4KwvX8XFDcKxEadhAmTZPiUuuxVCNqQDegYCHo1GrgVvwg9XcRgLKA66GuKG9K8RvVjQMMqkjpBz7utq",
  "key23": "4H3xpUF5wMJY7MeU4L7yRsLoyDb64TW1t4gb5c5DZmzUKyN6RjXfcm18nWzuSbKB3XNLY3Ca1C33YcA3LZuLQ1pX",
  "key24": "2hx3EDah5J4YHkV17SdBeRo9APWLdgk3kPtbJu96p5P59St8bjwhutDAcqoM5mayDc6x6DF3JjPdGGWNoDdYVPfB",
  "key25": "sEoik6UvJbM62Qj6BaYbUYHwfbHN2b2cTwZDkRXSLWhbgStyq5noPwir9xNsJ8tqvK7mkRXeeMv7yKsE4MLsYca",
  "key26": "5bx4ULds1VuWJQutMVNdsSWf4Ngjr54hV4oB7PvXTPRRwEGxAr2juyUuVyVa7eiNwSLuWGhy3FbbwR1fnj3iqR1M",
  "key27": "4XnE42ScUDayxN1Lm6zEM8Bj8DDq99nvoKGVcfYs12hxQ9HxeQTRzQLaeCk1jCRWh6j9A6wg7ecXKc3pKz4bZG5U",
  "key28": "3fKxTBrV9vGvPkGh8ViMoLocZ5mtbGMGj7CJvWqJYmMTjLCATndcrQYBnfrNDT6PdVJFTs7XRjnbdzysNG9wDMam",
  "key29": "4VxcsFWZMi3N4Yhw1sHVkcz1yP5pBwri4uannsxGGpP8za9D1rCeqbQppvVV19k2rXYueChtWTZ91KHXxiMpFd49",
  "key30": "2QWQ3ZoNTQEvjsqqM2REYRS9d87hYEB87UryZJYpT6cd7TCY2o9VNnQaaERmWQK5UrUM3RMARNPGpFZJ67Vv6P8L",
  "key31": "55hPfwwLbCsgRPQcpHhzKKCmhZ3DRWyYdyErwcUDpShs9NekyfC8g1gm1LjbwiJtnT5SxG5RvPYqdBCQ4wf4aMzA",
  "key32": "3gbXcJQEfmyG9i4TbeNdCSRt1vhXvEpUfhbDVNgN4csnBxBvNT9V76ezUKu9iDECwtVn79xgt571hmSD7yLkXefv",
  "key33": "22znQGgn46VNwTLxh9PYEpU5cKZhQwm1fGk1JiebFEEK9mP5M7XkLHNCFWFdZfYfhuCGvM6BZzqQJiaMY1gaWmV5",
  "key34": "4CcqXMNSGS5j5c7yuC6T3g7FUuz31qK2UWG7UhCqHFPR39av5EPFizzCEGwZ1egeEexCH1meyACK82RjLQcUpqC",
  "key35": "4Edm6YeDz6qZfQupXt2YWsJCurCzVwSaXbWhWU2RohZ3ujMzHRp1C9NGZf1h7qcZW3p4DC9iNMHZUHuwTAhcEoL",
  "key36": "39ynhUarRTM6jBwTWmroEF3xqmFKGnKE1nhej8XNPceHpiuDVTyso39uRRBTXa55Rq4Z8Dos68Pj8e2ou66LaJ85",
  "key37": "cRKf4RZzqNihmPEZSxWN4kQuDVELHq7a6h4NxhZ55LSbeSiwdAZX67uL7HKRB6bFDTSLhzDVpUqUUEVz6Qjecib",
  "key38": "2KCVrz3W5B2CQsdxSXqayBmTNknkxTstMEwACuWGFasS1agsHdSTbzTqDYSAQgMKraqXpBgtJbqXSEaCpj6688wX",
  "key39": "5ucW3nTyv5FjfHHpQdJqa172TaqTTJpnRL17e2Nzv8CeazTiCByFZ8dRGJmpwXK8tQdSzECFWhrtbfPeLvdfvPwk",
  "key40": "2z97QdxVHYtGf9o2y3AG2bHzjUxxh5ecxEK9p9Fyz9X4tXVbKSdv78uJYR4VFDaZpnbnjvxvteh5pScHgTe5iRdF",
  "key41": "5mekmNnzELrDHAg67uAzS4Va6ZKVXL5YpMDbS5wWbsrDFnnoBucarGynJjuwFSfgctZ2HDqYPUzFmoU4djtcjB7i",
  "key42": "vBP25hnhsxFwJYQcGQwne1UwC2k5DBydjBFVvLXm3sa6iHz6zE4JaLn1Pe3LKrpFboNsoEHD3dmBMK8zBTTLP6W",
  "key43": "hxMsJKyzPJ3Y9Q5KQuV9xAp1SYmihXwKYpgQdpk89paEReUX38CK71pkKM5c5kQSZhhX7hMvy1dGVZ7ccyyTq1p",
  "key44": "5L5oTN4PShvpd56onAxqxuA6iysTRn1d6npzSNchsVRQQro9QoDby9vr2Ut7QkbqKfwinkxRr21qui8PCPodoyQB",
  "key45": "2M6zCpApfs8J5u8KSwWHZUNCrfmQUcCAeLoJTKYFnAN1D5KtXPzFnuo96mry1bYQWmSnuwaedsAVGDkmb7nCHVbf",
  "key46": "3BpKxMgDujYYjhN5XVNBGaP2w2uFkVrR62R5A9pqsAoBVUZYrjH9dfsyRTfPX7E1nuZWGnBD2EfEN45MnUbtwtmF",
  "key47": "2pr1SbGbLZySHNudCUdEDAPCTvMnv3CevrEPtkKPCTDZLqYcDPhSW1C8LuhrLaes4TiDLBC6BV9LssYQP9m8koex"
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
