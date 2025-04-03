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
    "38DWYG2Ajbz6AY3mi2SWAYMiAyJYpmgRk7xRg1RD5EkpJ5KYs7rEkxXXs7bVXMmU6kp4zrpqpbcSXPFpvLQ4rpv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xCR7cnhewtoZxn4ikTjxYVzomGMJsAi6iJba53tgdN7ZHg61fhxJo8PSqsf61ob5h8KiSFRw6mC8ZM4aMjWbiCj",
  "key1": "5vKkr7nGC7yxd7e1MLs6SW833dqgW6dyiJGta2Re8pcXNmGokcYrYofEQdzxPwoGeXPCTDXbu9z5KdoqskzYFPDn",
  "key2": "5igPWm4opzMQJgxEhYDnpMENuJmmg6spWRDQ1gRuqSM7a56mCjR6GxMuddPqfyDCkdEhbZSvrswYHVESuTq6EMJd",
  "key3": "5cX2gYnZjXsM6kMNcQkwcGcwxiv9JfjLupaqqp8oU2ejQL9hugwK2KsDVwC9x27vbPeHSvfHtk63qLzUA175UNUu",
  "key4": "b7a77X6ttyByk265z6sh1DhR2M6T4GFnPAhzk6mtqSXBMQrjfRNKF2jiB3KD6j8PndT13uGv1s33GQM1LPCqEQj",
  "key5": "5WHMgiA3F1hUzue6NKnVCME7c5nm8ZYB8GkSgGfhhZRXQvS8B6NBEVZFH5MM5aXX6igS2FPSRqi7yLxreA1KaH68",
  "key6": "4yRn7vkGvVMoLkWGjEF6bJLhhccHGyt6RtJfjW4STYpq6KJWnyzJ3NaYk8yVNWnWj7G3RzhZhWLnJkPAk6Q5Jz1W",
  "key7": "AHQtSnwYGCoU61M7D9JAd2v345e44SoPLgXL8azasNDZuJZEHjuVZR1hvj4PFHWZKYvo3B8Ze7QFhfMYyZGtXCa",
  "key8": "4w6BRnZg8hYnTjKJJ99r8EcpSTpaUHnLdWDdjxDwYaGNq7GBa95mSiQG7zS92xxtHcTDhznCFb36xrRbndaMVuz1",
  "key9": "5G15C1v7V72HGqBtNbxG4aM5MHpfGaSvazoGqY5JPs6AkvpuWzVbxKxRpTB8hfCArY9Xxdxgazz2nZwBrHoC7g9y",
  "key10": "27ipU5a8HbPxQ3ij5uNAemdVPoTUbuYnpEZeE5r19pJ3JWx3TjExcuaJDmWjRpPpTUiHAkaUAk3GpX8pJhMrBFUQ",
  "key11": "mWmifhPS3cNgh8ygD1ANAX6dXuhpjZw851Yg8mfjQDzG9Amf1zmVnawVgh2arRZG97D34d6WGPuw5gfF56atXeF",
  "key12": "48PksvXpWNvk7WDgdYZNmPfcTfdm5YakJFtNSAuVoMtgUePuL5xBu3rWUBe3s14KuN7pyj6RFtn3EmMXsAcrckkT",
  "key13": "4ymBQNajH31K4Pw3BsBsZMv59j4DpvMMSaKa7xDyqvZvAd3pemmhaC3bYNBrMbrKDMHBLGyfVwRB6uTuSxBfaGn1",
  "key14": "3xwgxUvhFpnsp3CjEkwUE4MjexfLPNwZ7TncvecpxmhXNoCn6MJA5K6av3KtX6rJ7rqpHCR7YmjhrfgBcjV5DRD4",
  "key15": "B36Vdvz7rkheEDZAFqiE55Jxa4hezVbbhFYfrvBbMyCqaEvaMf4WhxB2ATnbPhw9wWfBot17PKSHDBXGFCokGeF",
  "key16": "3KBL2fyY4H2Svu9ooqWByysvBqibgRmYhhX2J2yzEqeYjVidt35QXx8iUsZ9nhLLrSipU2zpCnCFqAV1jWCJbndB",
  "key17": "26H7ETD8bxpiyCmKnMeQUc39qKqXNkQkUfUtmSYLgS68uz8fSrKkS6GhXZBC7dMGmv4UUTbehujqd8Efd3g7GzKU",
  "key18": "SsSWd2NVGs8C6nkXicTvyjRkbFp1WcupeJcq7TcyAwHeAZkyo2uowaavGLqBEvN9VTts2Tc6yx1o3RhUh1s1VnF",
  "key19": "nJNMZkDRPXrMUk3wvoeP1KNAMGchouuTd4ceKf4GArkMY72GcXja8C7njzAjUh6GdZVmGrVkRDJZyxc277gnV1C",
  "key20": "3bKXVxEQEzdi6gNJDRSKRbades6fBHAk6BxSLf6mJ1U3WZu9FWGjb47QZrAbvrghfVzcccdbVGLWB1pjgBYirqS8",
  "key21": "4JGRU8GmpYwdQpG4HBomtTpTyXe9bp1cQWDDKvLR2PQHCGKZpaRHsU8QDUJQnwjCjdhyttMqGybsoqb7RWFXu21T",
  "key22": "5LUUweZJXfaXAZGKKBZZ4xXpaQB1tAgU73d4uSsdkFFYdFKhUqehxyJB8BrnnS5UFfr3vWuR9hxaQNfPVRhWwgbB",
  "key23": "2JJ3bWse9gQTCikY1ZrE8WGwmkgJSCNDAuMA4Wtfcvragw8Guk9VUGpzoAwyxSueUYM1z3R4soDpVUftfxF6UhFV",
  "key24": "2DyVGmZk9yPUsqVpj4bte57hR3x17uYaYFS6kHwrPiu7mFt6RM9Zgu7QCuJ9JB6M4rNJKtdccGf8zpzETwkdML3u",
  "key25": "2hckjcxT6PMRte2jo5QsAnB4CzyJ3TVQHA44hfPc7zvDg2oGh8fNznqatDoskq7Qxa32QB5Rdis522GZWvof6d7E",
  "key26": "65XRuh7xoJHkPv6eAg13QBJ7Sy6QcqK3XQiAywn8aTAbxG4qW2VUXsMDxaCmKeyUkvh5hemE1tmPvJKRnV4roNZx",
  "key27": "5uxKbpZSrARyQEYRrsdoLN7DYijMkZUvdwLjZQZPVnmjhVanzshpjBQKrfpD7z3dP2dVmyb24b7nkDHrsohCqutj",
  "key28": "5D18mCVEdEX4ZjT2CKefndbe2uBgWB7ofxACZBvDdEKCYKRmg76bSRFxVUWq9N6EvWr6c9Vd19xBUhUe81hBaCCS",
  "key29": "37v2AFHkaZorT9bgc6QtnqJ8ESiUuPdmtcnQ99EFZeDiihjX99qbtTjeWoRLz12aaBzMMGsT3RwheHaEzh4d8Erc",
  "key30": "3TaQNGKpYzwdEuQxJRKM9KksoQdmNMCmo33MjpfqDgMzbaHy3t6HeDhUj1ZMjFNb7k6ygNfKXMrUSf7hJVTZsJbR",
  "key31": "4RFiLRLHenbWUs3WCczv6mWQ9jpSrntwPqkspKX1xrdGFeyAxZNNjD3LGT6TZ7TQVriJeokJJCqB35uM1ceEHAuD",
  "key32": "gDHUSq33MmoSaB67KwsBD6RrPFgbtTfJWs55nTTE3EXSXf2tWyMRmAvw2muvKjC9ees2PXF8qvbTo1a7PpWVScQ",
  "key33": "5LNoHTgEpqJcfR5ExePdBsv8i9Sq6zFLnBzS1VcycFRMFQUhYtSos3kvXRR2zNw5JG3ax2TUjswPfgxupwj8tHWY",
  "key34": "4J5sDAHSV6Ym1tS4xFFECYhxBWpEvinky6gRfefgLhSPXZ1M92AkPNnCZmHygSshjNcLwzJ1MAiXD14urgdaDboC",
  "key35": "3WXhGNCTrXRt5SFgGrsptjotPdprYC11nwHRS6Ws23b2hPtSX244XcoJHWfHixD6Ew3fEJrjXEjXzK5WF7Fh8A48",
  "key36": "zmbD7isDnXnqh9Aw9i3JcT9zzu8YLAbW532nYXFAPM8M3n2Ja4Bn4q6kK1BR6bh1maAUL2EBvzF7xfiMBSAoQgv",
  "key37": "2s3tH2ytMX82ofnAtCCRnAESHQAWav8UHfJGnFwb5eguw6gneJH8x8SFyKufGC5G4DJWWZHqzFfKDXHtudrucxuy",
  "key38": "GVh2ZbGYwGuGcvt4fNXbFNJcz9JaZgCT6JL3sfaXUcBk9C4A7ucQHD7D4rwqAHQNMDbX5MVX4TbzVn1SkcEcVpd",
  "key39": "4NhTwinpW5Etoc4JX1xifk65M6yxZtJ4CvfP5YWMdAxRLTyFByTu5nWv64hKN4rTgvd8HJoaq1LCtGeKsVs9UNYx",
  "key40": "3YrxFzBXqNnNaepc16386UkF8DtdQoAgtpeJmrAiQTA9hhgx5uFWmRaNhgFv8HEXDwr84d6pJSQqLqhvAnrUC1oJ",
  "key41": "5g5Y55CbMZsKbDKbhQN1iWp8Eq3wHtqbGLojxwVf9nq1jADwAbsiybRkq1d4YNPkgw9STHTAiRGTEoUtqDRdfUNS",
  "key42": "5RY6GaJM2uoSAjfHBEzWJN44G9A5BreY8Mu1YnhwzSBNKaEFqkKnsUD83Lc6tk9hcgJ2bx6h71FWz11gvrfUFZg5",
  "key43": "5VoHwge3r4WcfxWHiEk7qebqXTpzKbkRVCKaqUAwCHtrUivh4Pa5MG8Bfp3VqX9kFPvrYdTKafgrvCN9KdTPfyBR",
  "key44": "VWNbjAGNpkSQzHTaMo2Vsd4xTEGnvL4ypL2r4StcvmU6Z2vaq8QaiBihYYiBzZL2BjnXJ8y8c52qC2taDiANd9t",
  "key45": "ioVgxnbo4oWt4dx8g7TbGRYmSieP5gVik6zrvPrQmZ9vzx1S3S6oHoHk95VvgtJoraHHos2QUEucPhNzRYvRdGr",
  "key46": "4vxyXSQt8GtGVpPToPmgJPFZApSbnVkocmHfRWzyD1E2HAaCPP3qc2xKRXSyMESNPT6G15q9ygowb3L92KVxbTMR",
  "key47": "3dEzthvfzSohDHNmdva9xpqy7FRDY6FGE4MLCovBrSDWasbnRrWoCjSJmg1J5vgRQF5vaor7VaAQ4cJ6DEHp2j8S",
  "key48": "pxuRwcnbcS6UnuS6qKB8t4MKNh3Hd6ufUkuqF7EcAtKxTe2qXWeH3tSJCpMdmZrvAWmrjUdivG6RSWsn2UZKu3s",
  "key49": "FQFeQy1G9kF99YMqRyFBV5Yyz3PmNjYtL395UFhtLmTubuiiisL54kDgwScWP77ynpogmGUe5rGaUAKB98Z4xjD"
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
