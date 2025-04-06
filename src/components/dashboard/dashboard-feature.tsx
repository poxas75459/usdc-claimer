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
    "7LdARfNyXgPiLCjxgp9rYgMSCs2ow5ZFKP2hr45tuQryF4XYwtn1XxWUTdh5Gj7MDyZkvfPQty38YaCVkC5Prff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "owhPNqryCBCJBHEGuJUQAUHYxP7TBSAhuzGjkvpF6WSUK5Z9Ynau9H9VL6YGD4ig2zpQJNPyxVjpZLF8MAbYpKh",
  "key1": "2t4gbezsX7tCGB5s2us1867EDkedvBQ9rzovu51BedUYaSd5e1fo3fYGarQsZYvfjRFA4RW7cf3JSXmvDggonDtW",
  "key2": "2HDRrD2nVtPwGavZpVp67zF6HTDNBYioLnnoQJQyVMTHYz2fC1gvbfBSD5mGzJHGZzSgSsxqF3ifx4KUD7G2LZ54",
  "key3": "4GrBPH5RWQ1rFcFGbsz1CH42cf9Qm44st73EvubY7b9zD1dVVxZTZcBRJtZwVkTzXE3GzaknRfSwymm5R5oRv53J",
  "key4": "3JXV3NHA28reZ3dU4B2K2T1E3JUPk3KR3K5RuHbSpfG7QSuo35ws1W4KheeACCqf8Pm2WG8i5prvxPxvNto359TX",
  "key5": "539qjWjXb6RuXnaw2S7oGvYmA119vHZkrs1oJtDv3HF8EgRGztp6VAe4mXinuoGjJCvAmmnFFiD3LNdKxgc7m7XT",
  "key6": "5WjK5k73aJssQqEB4PdhS148Lxx8AbSVzkExvYoMZEiA66aLMXAagwX5myHdhquvJk1Ek2KWJYKAc19Vtm4Caas7",
  "key7": "3cAMKDNS1oKFSnk8t12EPJbyXi2qQ9F5Gs3jwuypKqBdxhYzXqz2g8CN7RwB91Tj5vrJuFkFbFNnKtBKfRsY4cko",
  "key8": "ajwyHEmbWXF9paNLVohAWPiexgn2xf6F3dJKjUyp4fHHYucghE13oWTrWUVdWrzbU62rV6W8a8Zjhk24EDTJDnk",
  "key9": "2AGGm6zMvZ1awh9p4NC3JLYsgPng4jr7SFLBRL2N36ZXZ5rWhHe91BPNYaiFawGX4KAkKEXwSfgCPrgYWQmc7L73",
  "key10": "42i31uDkAbFPweEYUUEdrSpaD6VgGVHUR3yWMS1xKEAaEp6sK4TKbNcFEXqemkeFiSSyn1hgh4Ak3dwHi4kdpEZv",
  "key11": "5q6Ug6APbXTzdkQECmTHugRezHRrCoPz51tWh8btvzUrWEUWByBmsv6RmNgHJ4LoDNKvzsrohrHVLz8HsS1kFp1Q",
  "key12": "59wWMPWFfBStzn6DQNsToFByCp4jMr7cqyG1U37JVJ3Nxfr3cd654KPGDse4QVGkwqRzRtjPPwLe2Mk9xBTFx3HQ",
  "key13": "4KRCkdhd5nsSxUMPXDzZznTdXwXGpbUesnYkp97W1CAT1Anf2NxKKrTZQ6PsgwVsh5T9TnNyC1v3vJ6fqAwux2mJ",
  "key14": "5QgbZ5RxELUHXmTG6azqEyaF4ZmkTWgLzeJayvvYLWPQ2qnNS7a1pVKChTejJswHyviZMmJaEWpVonHiTTgg69qi",
  "key15": "2mKR6y2ghmDYHySddQ4tofeAvUCSm9F48nBpq9eN83xnVfrqqP7P8ueBCEvXbGZvbjwZCFWwnST47xayDuPcRrdT",
  "key16": "2mu3dW2mG2TLB6ECJRRvUHeoVR9DnMGtKabsqPRhuWaa6uZvcDV69p4FHP2jLFwjoYJJ3BHPNY7xAs9gMM9Ym73G",
  "key17": "3RjBxmdDFiy8oVU3c5V99EaCxRbpsEhmWft5sFmPqmECrAQixpdCTN59NT8qQ28E6N6Eb8rUoKXPTk1bzjvcjuWt",
  "key18": "4JZFTodn1zwXA28Xc5t15dsJor5PZYajbpoaGzeb8BEkqyCtNXcLr3t8tkycNbaZwP1Ywv6nR7dHhauer6MT4XeJ",
  "key19": "2T8xgAB7xXxLkyFAKBbZWd17i6U3GyvCHmTJSa6E4zq98zHHkf5LU5PnDtZGLDsqMVgUiyjaDy8qvBesj8Q2mYDr",
  "key20": "3veQho1D3Bc7AP86Qd744oG8XEatTqYvozxXc1WkR4QnS248ZcUkTFMfvyK3eoBao3zeP5E3YZ3gPGxpHv9WkDVK",
  "key21": "4DEfEpRiCx1RSpNpVdVC3hZBgsghwqMgPEZgNRPx46cYf2WZEJcnX5z2XNZfckQ5cRJqcNZ1ZQcVuULw4yaiQ7AU",
  "key22": "2uZybdFWDhE7cBaZDLpQLDKv8ihHesuHu1cWyPoSDdRP6ePDCnRXKtyxx7Btj9N78Dv7AokSfMmXxcr4aekrhX1o",
  "key23": "5VrJXinATPcmidqFcpxmiAtkvH3aVTDRxF1aYREvy1BhiyvEczSKDvGX6EavaNj99xEvAVP6R3sLjt8g3RXswjzB",
  "key24": "2qkCjiMqiL2SjpSy6U8uYgMwpJ6qE2MF9SqWNkpYvRnJ4Y429zw8MW2dyNpxXoo49dqF2bpTWx4nYqQKuFT9fQim",
  "key25": "37DAm59xJQvaKNL7onYhGj1V3pErbJZYBtgKPQQmcwXScRGvVyUMa5ECzE2YXoR1qxexNZgKkF3bCjA6r8vsih9K",
  "key26": "4LXnyU6sBvKVGPb2f6kJiH6cMnxQ2oS2TNBKZ3Z7ziVVJoFkV8cwrnch69b848U5pbkELxaRhNL7c2ACM14W5j1K",
  "key27": "3DZRAUEfWh8Cjev87Wh4oTkSmByRiMHPDsQcVjt6JpJtKuwZhAnJEoXL2y4DbSC2Bo8k2R7V91hpt2SFhBDUE2v7",
  "key28": "NxDub961CruoRM3VPdNuipS7Mpg3KzxK4ertmSCwFhiFLB8kfzDoMQWVK9aQyvgd1EvkKptwL3Gw7EMwDsB5zP8",
  "key29": "5pYWHfNhV8Cqbc1j9qFvLbZC3ruCeS44VnpTEY1rpYfUWUzszrUd51Z6KBS874DMDBAyWM1XaFrAWvGVKKPx3A3h",
  "key30": "45NJBV29gxrk25gTHBZ4GrPkW3zrahR7CRJMjgM3JYaEF1vD3qcwfEV6dzd9p6T7j29jLKiqQyfaGD3tESE5Xwfb",
  "key31": "4qitcVBqDQnCn1a65qKsjxbkYEXPvp1Qvd98oJgJKiG5uC64CXxFow94m9cTGof26yWfBi5CyPSrw5B1Uayc2JWq",
  "key32": "sFuZyAoUuDnbpRTzmGuqZRwGu6v8mUqNUQ6YPKDKWqpWC2xJM7zK1ZNk6DkwZM4tCCBj47ypx3rGwZHY734sWvf",
  "key33": "65sWfHuyypps38ZrVjjjAY1RgB2HgW1dSaq9b3WMHnUtC6KsbvxHgknDaX9ygxzdNvHuhqT6N1dSMhcqio2fkKtz",
  "key34": "4tFpgAGUdo8zFWJhUCkZAG387GxCQZhYn1BJsbPxqoUE2NumN9Xetn1ZUJkCFpezaYyBFXnsivKewtuKp78DuUPP",
  "key35": "2n8GuWykXqLuxJQiBzS1rRBonpjk1Sp1bDrYUqtwvafHkNpJXZT1We2c3sRPS9Sz9F3PAbbVdVfdkdYhzMSvUEHf",
  "key36": "652d8ntCdvNzP1b5PogxqhkH4L36pumFfkUwRXgMhF7gKQHgDiBSZkBvErTXiqjgkDYBoPQz9QkvTCazaLWyaFLV",
  "key37": "Qm3mKsAFq2UGX1mr8hxqasNqJXwTRTA5choDMCkZZFeqcaiZRBHC812ixHpWYG4pYFDY71DESb6cs2zpmjDa4jQ",
  "key38": "2b2s1RaeS8tsX9xkxFv6fXFVPqDxfRre7YwLTDkMS8NJvxeWEvZGpmCx7gcRHYpVgVA1BxnVyA6gLdogESmieHGz",
  "key39": "33G3qWbfsG3smBmXJ17jF5UFEZp61v3zz5UFipfBzj5HjgoYgi7UvJskhyGDpUCUwqvWXgwg2VdxpzVdP5DFjLsz",
  "key40": "3mNndmDgiJXcME6EvEPkDSacewdpv3dMCGhuauYmw5WdGiXyBwq24TUbnvqmUs18XfkeWwMNz2i9cQMmRefCEBbL",
  "key41": "2dmdGjFWMkGRxFxqNwL5UtM7pGyEQr2tQAovbHRyermEZDfBodqmiBWrEb8VsVP6aCAmemTMRKf3mjirPiXbA5Cn",
  "key42": "4gcsdGNaMHGaYrtGSGJdA3q7o3NRRrWiD2ggNC1KD5gbokW9KCsqDgMA9XHnGVL92kPzWm9en1R4AXaqmx7CrwJi",
  "key43": "5ha5xymUgFNha8uyyRbndpK7akF25RTWwLg7QhKAm1bj9gM9LCpb7hhb8oM3xWS9ayzBTjrBaWAksE64cJo95VG3",
  "key44": "3pM8tJKpSPA9Fy1skTbMn4nWYsb3vSrbym1L9XhGzxyn3HnfbAudJQ2jVNb1hWHMxcWXPHqfnpzAFiRi1SVbLG2X",
  "key45": "5Hf2zuWp9rh5XqMuXhENhSxwCuRSGZxBSPZE885moojKDkTVxkC23Q4yVi4ANiYdTEG1CBSqBbiAttWodTvx5hTv",
  "key46": "2iugc7fXkqT3qWQa6dLQgi5HYQSc5oyEpkZS5kM8Fyj1MrLmQossYTgDnixXaCtBqQXe4XEd5MgF6kaKCtUnGC2R"
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
