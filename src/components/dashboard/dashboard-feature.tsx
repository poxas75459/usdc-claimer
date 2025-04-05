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
    "31LRFCc7EqacXXeE8WNWcoJb98JhzN9AVNhjWcnxUqoHAVqnJJMNV2ypxmSa9mnSztYWuyeL51KP1E3Dh5UXU4ia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KccMs3F8dn5HqrJFtj3b2RrayYNTytutQQQa1nUkeFAZsNY9SE7wwZFg82vh33RqD3fFrcb3wzrJoG6y9qoQgBy",
  "key1": "5bDx23D9WhQpw1Fwy4sdfd5iEsTVrbKEyfsNnKvjQ1iL8jkwdRoVSRFGwf1k4CcxrZ9XSW5gaCwzU8ewRmKkoC4j",
  "key2": "2tvc2BLdrP1MbKwoCC8m5ikekDtjU7goWntvi2HaSfzSJpoFW25GtUUSKvStGTxyycuRWbMvTAqMc2ZgTuEquSVb",
  "key3": "5pd4nSq21hS9bTJw4uY1jpy3oGPdPLbJApfWD69zhRctMKuYTxxkQR2sDQ6ULyEe9ezm8ob5miC8U1hK3AV5q4j3",
  "key4": "4YXMaahq2hBnrjdGtPGXLNt7d7RR3uzzQAUJ5gNu1kRkTfSPJU6BGzJ8Ak6GXsujiYfsVV7dnrERb22t444BuM5k",
  "key5": "4VCLnrAmKEP1medw7fyBr6faQoBKDRei9HhSPXS1dzZTYvNiHYMs8zhpebXRGPFsLvqKivzWTTgekkjdXdaj78Ki",
  "key6": "2NyzGz5H5jreGQ6AnN2tKxRWJNiGH2Ut6p7ooQpjJKUxydsT62BDmj54V29ioKXfwELbQLTtrSyo3vaAn7A5KoJ",
  "key7": "2VmAdB4zQa7aCfgucabY1PuxzzvoKjkyqWC6J3udCKxrhUWzoUG8vhr8h9CMuycjqmqsPRFNfgKFDsB2BhKgHTTB",
  "key8": "2DJ1iB65UNqo7gEWA7B7NJuduoZLoz6abs2ib779vV4cQcStuscjfNVee5gsEPm5v1qW3zz7cobVPJjJR1eCngtX",
  "key9": "3PTEnNxCki156vdkJZJYRm9RCR4Gq5ZynEGYJkkSL7YEDsyFYCof422SwzQA1SYrxtGjz5eqUYj4YkTEAf2L3ef4",
  "key10": "3WYv41ev8YTfvNwH9M4rzVTna5ECVJkSTBxVmJciQauUFBoQytJPWWrWFtwbFQkDCgGuyWzTPUVD4uUB38FbDrhY",
  "key11": "xrakquZejXtmXF2uDtGPfjR4TUp1uaTGiiFd2BDGW88Ed7V46HWSoikKcCq1mPyF85gNM2JqHWv3CYugeA4SKF5",
  "key12": "2U1YueA97PVqG8ARMyojPrTSpsf3B188VnSKXSx6hitGm6mDVV248CEg4dbCeWydjaLhE3s9mL3yNzKa1gznayEr",
  "key13": "44XcgPDEB9DKeqPZBba2z1G8DRMnFsFYgxy6aSLyZaztbYKbG75eULEWLGYjC7mXB7rU5g95Xq3VyB6x5SPkkaXd",
  "key14": "3U8hZXXBaYLp4s8sEqF8W7KQLpmuxoNJEoTGzPiy9CF5LorGo48w3UgCb4MHcMKBPwcDUSjmRK8qikv6Co7pYtQi",
  "key15": "4T6u8S6zm3UyVhGgUA4JebMeD35AKfJJsgWxoNTrQWU8uiwXgaGTNfJnJCLzaa8iFm8bTEtjwDXNiE1ePHvmpAKk",
  "key16": "41MsV1f8j3VriGFArVDuGdQRCcHL79Bqpq6QSNdfpyjWFz1G5twdtzjpS7ZCrzmPjA2uu3ff35FuoUtdrKvsWuhm",
  "key17": "3WFT5W4m6Ufi3FdgmLzaqYViX6UbfXDdJj5v1Km4hA4ytGmRb4rbGr4Fi16ype9ahZBHoZRxNobvJTmqjUexW9HM",
  "key18": "7DKwyqFoidP7DmYC5gmaa63GWR11MDxhywErzKsrFrx5uSumhJqj9UZnnveRVbf7MTZdhQ91iTPnDSg4fAzVnTv",
  "key19": "45NPFJKhYoZirmFRtbkafQLtsofVpmaH5sgznfWvik9GgQdo6xPjXpMKjD8w5koMMkhEPzBMkh132s4dkuPCEE8C",
  "key20": "4FjUhRUTEf53RRVuoNRDCsECce9dcr9FpFFBHeDTjBvqeNPk6pKFSaA7EpagSpG4df32DXjx3S7aNYSuwB3kf8fW",
  "key21": "43oxHWANWpwiEhfML1STCrZAmyAF5Ggpz1RxRSgNd8AQNV5nNMaMU2v9oHxksNxRA54edwnNW5fiDk9VkBrKZzCQ",
  "key22": "2U1xw7R8bQ6g61NG7L3rJWMbG75Lcsi27Qis8aYeVe4CVEigT8HTDWvEG1QrCHinUqergj9xNHBy5bfY1kivamjv",
  "key23": "2nGa2Ca4pMeA3hN9atzi3nUHDsqpp5s1aPUgp5Uj7TwLiWuTqcT8Bnii7ij6JBpT6xc7pEa7TJtkysaapqGhQ7Ka",
  "key24": "57NjJ4wUDf8yKNZ356mCiVKE315MEPq3KMezPe4i2mrV43Fk5j3N49HcoQGNvyLKQYHrVvX76zNhbce1KBdE1gH6",
  "key25": "3JMjHjUnwTTkoS3i6aEgoCXVFszStPxSCV9Mskbi6q2ji23R6jwezbPLG5WkrhY7oDbecPbyjpF4qii9mgiJjRJv",
  "key26": "3G7JbBu9Mv3mNpaEAVBdX8FqCbjPkFURbmp142zpzktqEtvyfWtgHa7jyAe11aAF77j4RtpA13tM4K99aKexcBTr",
  "key27": "2LTZUixLdA43LtHLYqGnJ2GhAUnKULYvJXXPQ3K3yDhMqTtQ9LGM4R9eQZgJbGeUXNzqsY6bkKEiqPCa7jVYAfUP",
  "key28": "43GZUPjvwUhZr4YyJzXs3kQDoLGnsRqB6T9FrHQ36MaNfsqMAnhotvQenjiJBZN9XEa4T6q4zEzoNf1hg55xSs99",
  "key29": "4bTJZEQacCWguci99GjkZ5DHuR859fE9B8aMHe67CSbCTmCXfPu4Avd3vrTFqcRPnPZHW7xvhaQpRXYB6p9T4i7s",
  "key30": "5B4AtHHAoyC2Sqta69s8XVqVk5NZ4V3sHSzVk5zx8ZfYN17jz1bLBQztYFYvBhXkMFwMdgYeK2FQP41NWtkmAJwq",
  "key31": "ESXo3pYo3tVN7NapYhDPHFXAe72gGAmFEXn3D6sGmDpTndtzjajRdezSTAa1NCdxsbNVb5qvcMNtCYkrx9avBQD",
  "key32": "5DK19au31eRRWTkYMi6a36aZQEQL2QR8Zc3MhjuKzp1dCXLbqQhW2Gnmmpt79cmz4FGtXC5WYy83xT2nbeiXm5d6"
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
