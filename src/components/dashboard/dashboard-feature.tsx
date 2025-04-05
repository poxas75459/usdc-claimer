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
    "4kMnvqrS5bR4viFR9nY5SLMjS9ojXUwURrLd8qyfPRjJw3qzSb2MnU2erbgMshdp9cxwLida85yEQLaBMqsbkiRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PiDnHMRGXuSww5q53R9YgjpcKymLGYB2MvLSeCh3afrR3JTP3vAJAsW6VHkDg71d3yWjT76ciGASmvmX6uuSoTd",
  "key1": "2c37hVsAuRBQLKoTK5vGGorfNeFrbzSQMrwBCWYQACr3HCxfqB82PAgzvpBcDTkg6awgMpzRZKgXMJjnCX45MhJT",
  "key2": "4yJK5sxke5gthCX46k3YoYPTMrfp8XXdDiRKJNGuypoJTYsCa2Rc2xRE5Ev5YhNdu3qno9zBv1ewZnCHxBm7zDSG",
  "key3": "4zwAU335XD46AUmrm1VuDHGPJTcqf18TnvxZxjA77tAjpzP1W4RwSUoVewEUYGgnzLF7qD9Yn3wRsCxcCSUX3H6e",
  "key4": "3z6bQsie3LedJpPLmiw6BxKHkS3oJESxC1cNv67eFSQvgsZfSwBdrg5otdnfbDhxttRhUUM2QSuW8VNvzCVgTrvW",
  "key5": "d1Kdrc977VgVKpEewGsRdK7NpF5sxNTnnRfJ9opTm2BZ7sjhKQcyLTsNbNhVkieU3RVYucPydXAL4Atw7NUex6G",
  "key6": "2j8GpkCG8bVvgnKakCaDHuH8CV3hCuEvNq7bD2cgvVKcsYqDh7cvU6XQmamh2H4TFuGFdXQjtK8BdQYayDLpykg4",
  "key7": "5NGCfKEDoYX1C6rBc7SwDwu3yVqgwgeeFycPUWM5vauJnfTov68axb1bp1bgbzRaxDPixTeHi4BCyuewNR6bRxYB",
  "key8": "2Xue696qvVtFf2n8AivspQNM43X5LknC2LvWQY97u1FXF25tgNZjQZg8Bbb6Anm4PLxoeJMLNiwLRSD3ptpDqMmh",
  "key9": "65pEeTTpZ6TvRVgm9CHAbsxRu6mr63ousvTt8DyjXAbALH4fC81NUt4uZEJtdytaEeeM95Djbnz9M11W3PpgMucq",
  "key10": "3bVTc4xdUBaXdVWcBTUkooHv3odkKyMnqxoYDrbHmHiy4PEopuZf79do3pyzCbJqp1sLbwREQJTiTGE9BxqDFDCv",
  "key11": "2WNRweEn3H2EK8YzAtmTCBZo6j3HvSU7L8kVjLstq38fJjj23THaYbuJXmwHyjGu5trKY62aiE9Afb19zNgBjXuZ",
  "key12": "5rx8jgW3EmjVEQuwL7BGgapxTFupXa6UrMjqwVUPNrkhhtKAhdg6SxTKpWAVboZ6aqttwfzsFAsUNYFuDKeqUKCj",
  "key13": "3Wyj1LaR4QFctxUo7WnfSxbMsXgEZK25jycvEkgpcFPyA3aR6WtjSE4K8pXpQqcKTjgPPfbNRybnxrnFwWW76YQU",
  "key14": "5ikEp1hk4BRQzBE56hAV9w4JvsQY8UEepaaPxNk3rqjN9P8vbYbximxykXupMfJRVbvJDoLPppfYZwX6v6aMeUhH",
  "key15": "2kdWMWVmo1wr7gZdutS7swHMJvtFKLsPUKpQi8GVKhw5VWg1DPq5arrDGbXfxVwbPLPmeKmhvjmPqEwpFayH2eRa",
  "key16": "KDk4kvCrf6N9YdsbhM7LupGvWVv3SPpGUSY89vntMggWZ45DaPei6abDwfYGLpVA1hYodfwjHULnmhgD6tSzrxx",
  "key17": "4M3AaXPBW3pWGCW8nrFf1ei3LfRHmp4M8EGVGvf3PyKmdCkkxp1ob6TpZamu2NK1WEn5fECk3b1YTnJUSwrPNhj6",
  "key18": "2bSUYDPKPoihELSFkZNfiFh2knQSdhJhNT9RwXT5iukaFt1C4X4Ax5JKhTDRtSvG8gN7EHAmJ5n9uoiHictbnEC3",
  "key19": "4MECoi8HZmwKm1oCuaum4BRGPipQpZ62RmsKoMfuwf9qrBbKTZohneyPV53U3z88o5fvuz2vTVTKvzFhq2WTxvYJ",
  "key20": "56piH8dSaLbnyxcvrAoQu6jMxGMKDj1AV79WXwLw8vqtZp4tD52WWJ6i6fS92EMM1wVVV8k2mc3nDJrmYKJzuhWA",
  "key21": "3eQLeEyqYe6f9nFPuZinJifj2pfcWAq5B8MeGhPGgecqvBXWmFF97xDxGgCMaKC8dTVMzmfVjPf8jLhb6jK3MGCv",
  "key22": "64H2cSG6TsBDsALY2JeaFQ533kMoRaPe1qTere8so4QC5SpU3HhmSCn7ugsq9P9GFKf1dimGwuqZuiHXLe5ADbPG",
  "key23": "i6KytiR8uScxxHGguNidbXEPz3MkTz4hVmxhfg37jcBb6pW4oRKwK4B5XgdL347R86N1RvxVY2ivJqAyATQWFz2",
  "key24": "5XLfb7PHVahTTiG7abcWWAxizyoQ7het2XRqLBpHwE7QnrT6pxM6MoGRSQ6df4JUzg6Bno4qegaAhZgWKpWxruuQ",
  "key25": "67cwB2426yGqBjrP6YjfaJpEn863zRm7kUePcGpWJVgGedNEBNQmhuaqB4tAi2XdBG2vfcTCnoTNkFZNWiPVYSFA",
  "key26": "3V7KQVGyE7BgcTg67nVKym2QMnb8VUQLAxaN8KSVroT2kVftbMPtAuqma8vnbA1eYjZG5vjRx9htzWR4u2JC2k3F",
  "key27": "5H1xB3b787gKdiaHMpy7aehysnCWkTE9qYg3tpiVb7AqAGvG3ePoRGWZMq9QudtU5dPSDmaP4hyszGLcCZeaEGQ9",
  "key28": "4URt1rY2upp6pG8htk58e4QaV7ZExnmxQXTriDZrwxstA8yTUe2u3LZ4K1JnGgJKKMdX1jS8doB6g3MtkQCfDaLt"
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
