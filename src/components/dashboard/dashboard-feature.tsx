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
    "uHKCjJkSqvVKPvY9DA5qF65QDQEh96YqdHHZdWay38emL8JMif44bkJeTtUw4CoH4dEybc2ttem1FaLupZyVXRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yYST9k94NNqcR7sgrGKSMKcAFPtDozb87xG6jz1ynxyF41njSNKTr1mKfxsBWyQtmBicjE3pbj9wWLMraiqZG86",
  "key1": "5mFrv1XQMi8hbvmDiJ5zeYmSfahR7RSjXwjU6RdoGDaSRJdjRVYyyVzgPEw6B1BuQcNgNAUdUviVq1zh53L6eqty",
  "key2": "Dms8o54VPiRsV4K43qEwBQRWH71S2KBkL7xofbnuADwzoNyvvZdbu6ei4iLbktdusVncVvHxEPX8MhAYmeSm463",
  "key3": "4vLSWNeDESqGJWntsrbDH9WSCRe3FvVfaV8cw7eHqUgZJY5PbmqXAnLwVBYUTdMRaSY9hDxoc2VNbJatk1Qrcpvm",
  "key4": "4Q6eNzTPxBgw5y1vpo9SfSB7VngervEgd8sc1LTfjjzYgd4hmMa1Wrc69rMTkf54i3nkoQkYf4N7Y5Wp1fijkRAr",
  "key5": "2pzm2ScNwKfdA7HEjYcXGQQwx3f9TkYd7XwWVxMj8Z3WFA6i3QfhYTie2xFzWK6rAHiWCdj3dYfMDPNf5Nmq3fXi",
  "key6": "4dgrFwsTS3Th9sXgN2JzHd2ZikJMm8KarrWMwjTQD3EtZZ2Uwy7DgoUneRW6KusAa4dgGsckzT7ehWQmJrpBJVW7",
  "key7": "5G9FahbfJfYSU7YTLkyamYh4KmVQq3uEc97n3FfASXg7PkAnTH8UExqKzCEgsQN5ZfQCmMkqFFCxaS6pmNha8gCC",
  "key8": "53ruDmLgJJEBDSdfNW5XCpJNvg1kpBeGVf55bHz8cHL9ikQWQ4GcQDDFDrNbJDPVQu9cdgiQs2FR3HwSZmnuVpAi",
  "key9": "u4r6XtCtbkNFXqH4dRPv4c1mGbibixFefDTmVbtt9e3SJPGNtNE3va15zueLGrTPaHHwVaTVyftStGtBWwyBC6A",
  "key10": "3pxCjW7HNNsSqz2DeDX8YesKjts79zaKXKR81SzLFqqH2jseHRFNzobtEaC5ERTBmQ2XCZRSsyP9V2KRC2XPTjkg",
  "key11": "nn3ZuL1QDi49LX98fX3eCjJyJeNxx8ps2wif8w47j1ckb2kaCS5M7QgocWEzpSLcqNdnG7GNgrZTuCM6wboUwrP",
  "key12": "dysgWxvGCSUhgsyNFV2JGp7a1Wf9yznMo3nnprRHcbNn4jwcfWMgmp3QTPPJjHPCY94KexnkaqJwZYWW4aXAGFd",
  "key13": "24EZ3NrCxrrWVudJcLdfjwzyDfxqJjvBiSbhFXG7csHxtcNWT68YWdzttiMFQaSJyfy6RywWeuBmfupP1aseN1cK",
  "key14": "4mxtmYDLquTsVJBWv6QUKpSG2YZEo2cyFUrU3sXNAd5RxJpbSkp8TDYLK9q5djJ1pUnsdziQx8RGUCFAVEfFT8n7",
  "key15": "2pCg8udDn22wiSYMaEb49zDbH2xZvKbdxXoHYU2UvdtgStTVcp8VsgZ6YoAHEtCBMmvzAqDyycaprF2LNuY9giod",
  "key16": "47GKq9K39pjX5N3zM9Y7inm3Lfsv6WqYxEE3eAirx6gZwJrHDsrU7m6X7JiRDpvZdeccLnrLaRi8cMiNG3uieHmh",
  "key17": "3y7ugcKn3HMYDe6AyGb1SHvgZjLppNpsNP192QjD1nFY3Un9jdDSuUqhNJMoPcVdUgk82T8tjr6EU94Y6wHviEEb",
  "key18": "4yv1G7qiXi2btoTmcEBmuhyBh4weXA33WDWDpGDFHprNg2AJCk4ur8xfup8XNsRf7juKc9NQ5SxG2aHMQbrQzQdN",
  "key19": "3n4vSj2R4rL5wyJxveBbHDbcQR4cTCDJfWNVBALZnn4owevUQvJqw44PmhHzqvcKeV661XSNKnYjgVBQzY3MpsbB",
  "key20": "6x4WYYdP5DD8cVAxGPdEcSspvR4LaVnm4Msv7rTRE6bdhytZ8wTpDiEhBgFx2MS5PfJ1HJPjmDrfhRk8aTZois9",
  "key21": "NqYeinqyxzEZSVk6Het2vFbqu32A2ieSbMbtuX3ukmBGhQcnwhuTUBe226HXsCtEtZR7p9kftp7y2MfKHkJ3PUL",
  "key22": "44YMX6zuwLkEEdaCTtsgsNMiCyprEEbBWse9yBC8L6Nj3dFidHDEgL8xHrvojR8UypLkywbfKyPQpfLRViGL19Hn",
  "key23": "2bW5LtC3nNEvNbmCy3RNTW2zkQXoTnbcHgQndQostWG9CTbPR7DhpErbmnTpj6VHXYSTxSSUgKFnj8r9Ef8LKaZB",
  "key24": "4xG5oe7ExzPQJwTPYfmzSW2E5M2fn4rTZCEPe1yNB3if3Z1KgjgHG4fHQR17q3HCHkxhXgGoGR1kgNQUZoaeDhH2",
  "key25": "2yywPXkVsmZy4YAycEz96nuAszTYLhYkM2e5VAXrawtMdW3hDmqDMaMGYyXzAFrdkqaNYYYsCtBghvj2fQUADg3J",
  "key26": "3GavEFNET5ewLkVWxL6nkg1QxiDsuuEDYT9qzj1UeTQuV5iyAepK2oeG4urFSM6MGAGD6iY2q2JUvkXnkXDkjn5u",
  "key27": "4XYJZ1toJadGpN8EkEo794Gjfj3nAsbqUxw4tzDjUw13aRu2kfmr6Zen3Twe2M6UVzdnSyVhKZ4J3zz2anfCdZUy",
  "key28": "3tQqs2FXGhvaNxLNJ4zB4hZU8GFPFS5496eP7U9j4eoLSei97Vv5Nrf49dbFg3xTzTUP3KATUd5mobXJtLMaafww",
  "key29": "3X3TF1mEqAZPGKDQqYV1b2jYB9Sc87mte7d4vSvPqixN34toHyUiAbHXaTR2tRromRUpZZVGLQesEKF8JqKh1L43",
  "key30": "38wKYCyLVFynDnA4d7XXKHZDb4U4xmK7aSxt19sZuEEs1DmKvCh7nPAq4v8oihRVeiCbmRpJ9LNy1rd5dgcmMmKu",
  "key31": "3EFUWwrhTVdAGd3XQkiao85T6nvXhXwiwo7tkbf2G2emnDuHhHCZGDTxPRRjqP5bAXLfqyUCQQecjPKWa2HHjwTy",
  "key32": "2sNnY4aBuT7jcBHy36S3i25pwqEw8URhDyP7XJkK41e4sUhAeFNXqwU74XNsqrfKNBwGjGcRa8X9brUc6E3j4sXn",
  "key33": "2sdTDx2WwCQ8fkKv2zkLdzTLg7QTJMA8VjVQgtP7QBHADYJ7pwJucK3ienbrSArEXNKfZfCLPV8bRxQNXsSexU6w",
  "key34": "3aPNfAeUM7gsKdQzey8CRamsM7ShPzqLwbpQYBZGhVVcvUYenP7fbK7uM9TWUVkM8AprLtxpv2VbtRz9Qk46MDCB",
  "key35": "4tJbJRwA619ymGvPAmmwWfUpvVaprqHthi8yfYRMe8j5xf7z5Cx6wQBJEvvf2ag9wsJFELpiAi5nBZQ9s6PWgWxu",
  "key36": "2CwEQVqJuUvDQBsTF2ThnZpSd7i49ZdaPbAnpruYFvPUbZCGG3LhkhgGY8gjUwv7ud2E3dEHzaYATFx9rQvL17AM",
  "key37": "5AJg5CtnyUCoKqAQRH5n8xpGMmMeoLKv3fZMXQRgnpamksVu8zTfBUMVsCDRiah1BWeyj4LxEBjugZDakCcvR373",
  "key38": "BnqSesGYSnFxF7qLukyVzAFfCsZxddUt4E7Z7ig5i6RbEAf4jxUbj21jxZwZNhqE7gx5tSRG3NcxEwL6GfhdRgJ"
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
