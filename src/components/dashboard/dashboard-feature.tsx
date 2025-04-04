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
    "63nvbPeymtnA4HY2AfbCCAAsdG9Weivd9n7ybBXdagprnfimrj1PtqQ8R44vN93ecREaW4Cqw3b9UBdsG8xfAgtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v59rRETWJmyfgzuNnrzb6zBoizBzdSgZXZVdNQQK8phG9rUZtHJMhzncBTDngLpfQqZa14ZQYczzH6q8pYrS7tL",
  "key1": "3Dfnf9fyjUpFLZFmw482rTvyokQUM56WuJ79wqR9abwNKL1ukCzEA3FxUmh7qtr7xbcDwpzhK49PD1XNbjKQCPAv",
  "key2": "4DGfCLJrF1rMCWtjr1Q2U3y1vxvFcTeEjagbVNGf2AJ3PR71PHw1JfHGA1teiP5Wp4tF7XdyQMJVLDrz5TcovCph",
  "key3": "51f6ps6nwenQkn9QvhgLfa9kwMwgE4FJuXvP3cWaC6Q7MKoHGXtB6M3QHGSfBUCc3zLesEQexSARakikJyD2cLBU",
  "key4": "3j1ZBwZ8aAB2cNi59h6f7z3cGC6aNgTKt5ZxgVzpVY1Cwk7uj2Yk6FsAxchPoeKvd5DTn8Shs9qkMxbMdRXvhnFV",
  "key5": "3y1Lo6uzYyj1dB4Y2WrE6EBJsDMPJeDLYpCc6FVmMxcVZehei9SxDNSBcDft45AVTCB7QoLbkhg3AK2sa6zwDgjN",
  "key6": "2eRw2SC9z8J8XzicVPPGFsMGbDYoorHCPeUeYEWSNbfvuTaSUqU8CDcCPiNhm2W6NivnKE1fYq8Ve78bcEkwSCY6",
  "key7": "5dNLqZWZmuXUrJzrtHbJD5kJJNAxukQxF7UEd8N3AD4M3fY5ePL57CGeZ6u3Bog2DJaLVq4M1JWXMtzkYvTatX9X",
  "key8": "2BcTXggk36Zg1tzucUe7cjB22Tncm2s8fmxdhWHgx5Mm6wjoZ2MtSFrbBbgWNKbUWEXsVNEYxCXD9btYPqvQuv2C",
  "key9": "67eJxyFRSHZ6LVPUpKeBiUSPMXjvQSRcfBuVCCB4DopEmhjJrUXvuyD9rGpafsNmzG8eoi5iHH2Zghdtjx9TDVfZ",
  "key10": "ksgDcKAWt9ng5TZRPXnPPukR12k5B1E41qpfCmw8WQCUm5Cwx55RMQW3WvfNw7d9mnCxhAq62LmU7aD7TxzgTZo",
  "key11": "4nDTAnV1vvBiutmHyTmvygbV4kXGpAWimaG4KtMkTGrxFJeiSx8a6BUkh47Ann7DyKSdgkDwbHB6weS3wdGdSwb8",
  "key12": "26jN5QAgPWFq4jqeS8VF7d3c5mDpqWPgbHdgJCGYbEFmDfmJ96y3N3sM3DQ1f31sFr2tTQtURAvhMsWrRTppLXZA",
  "key13": "F9xxSF2Yvhcc8CizRdq7bDBxpfhHBX4qRWyGpXztaVVmpvEb8HZhH6haZobutu366waFNp5YfnhrcAiExwovBQg",
  "key14": "3zBpprjtDLRBCnMnWPF6c2iTyjtDoprxbm85vN7zYBuU7NaHm4LxjxP2TyCNFm6mnGHi8Hn4aqRh9Gax4TDYHcaa",
  "key15": "6Hv1Mm67m1Kf5s6kcJe6PdCGdTD1LFLoe76A8QFxusKy7q2E7o5xtWX4hPBPe4v5HhYTfUSDqPyFkoikE8T2GmF",
  "key16": "5tvz8gxio8cczxDMi9gFHkVN44sbRCyBzZsJhnr5ADkk4hpdnkeFiD4WacpNiQUAkpPVjKkTbfRzzzuQ7HDsm7F3",
  "key17": "58YpyTJ5cFXSJCT3Cejs3pGdha5ziVM8S3hbYWpJa4ZqDAzW7Mj7cK4kwHyowWEbewPapibKWmcE5LnBFpZHzpGy",
  "key18": "4uU9AszDEXwxTskpyB8CJ8EmoP587MnRL4H6zLzYfM4Cobhbch1JTDr5bf8wmv4SEJcRWMUM7JuurR6779jdLbbs",
  "key19": "rhcsQeN8KuRmH75aFMe4gz8SbdWdoLjHqikNMitXeXExK5YpTUWpcYSRJrVyUhuoqhMwKiH3UbFbjnq7kMkQHak",
  "key20": "V6p25oXCCuGDeEZuTnHtiLPD3CSvQERkbbRymNV5ztXXQFn1qDvJ2E3CMU9GjZc2uRZj1kEnEBCF6GcdtEEKQFS",
  "key21": "hPjNThTTMX7er7SAVt3vSBVdu8fxRLWHYq2CvWDUTCnAoSsTkUCjBXwkkqKktqQvuzFy7ppjeGDkJKc6Q91oVMt",
  "key22": "26KjhQUNdcNDDr4jZUdQTfSCJMhbdYBnKpSCApwqAUxJp7bn3iMpyxPZzQsqTkEUhgopCiv1WTnJzz3HzgjDpp4i",
  "key23": "5MprM1AwkGAFYrJ2LVxa6xNAotrenPXPC63cgHcqYUmQ53vXeBuVyo6ZNrGL6W1UhWAEjWXVDPrAARrBYeiHf5VZ",
  "key24": "4P5UxwHMWAEgtECQSPgaDuCHPbHE8pbq9KE75Mh3Qyi5gyFPRcshMeqWWDyjSsSwSBCyXW7ZbVLhaUvSFg3GLrif",
  "key25": "2gGS913mivPpi1cdQGhwvRoTaXUNnUnNcH8zTMJQxVQsA41DcJJYk5CKP4yWETjRnpkktDJPj2wpUxutTNeKnroB",
  "key26": "67gHR3hynP6RpvpQJfeAvYeDEeqeq514yRK3A7eUtNtEqgTEkTGJQq1RUXt57oUP9NhW9Coiw9yTdKjPc4Dcuw37",
  "key27": "5Mz1odiZSJNdUzUDEUuRM2hYKxKDM36y64NFrySHMzEi6AfZ97DPMSWyRfseYhrtrMpRfdyrykKquGXUyUnAoG4h",
  "key28": "21d4ity6zPkBzuPWDD6GXoyi8uahEVieh1jUsznjqzCTxYp8JoSKQMdhvuHLYfWt135oKvZQ91dBPopf36i75beY"
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
