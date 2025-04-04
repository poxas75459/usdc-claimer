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
    "3UyXGU4j9Lxo5AWFSxj4Lvm1oXEXagXLmTRqZaLytuo9HF663oS7Vnrb2uGSDBcTpGrXYkVnJaRPRdVrH8qWP6B2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iK82suAAggjyAZPjs6ZJvR9d8ERAGJDnhBd1tti9dULjMUH4C4jYHVs6ZRPnY3dxwouRoVZS68bJKQAGsuE3fod",
  "key1": "2mN6jahHLipsvfVacLfooNuz7k6iRyCUysFDk6BYbr9Xw1PW9VDxTem9qqgbofEmRMc6mBXvEppc63MD5JbfmWsJ",
  "key2": "5RKyV6Vd7iKdvpxQv1DvmTi3zp3x8ZzQLfbPy3EQaagLjsMqMuQKeAmM5fdyWmwZXrUed5ECTwjnH3nN7NtH4FvZ",
  "key3": "pnygZAZBNv7mRr63qcrJZyKYf1MCzbVecSweoV43JvtTGV78LtMe6rFSuYXMBQ2Ds4wq5mTpUBbDqbsaxsy6SaB",
  "key4": "26F9fVA6ZhV47HUYWduUYEUkRtcGBLxALaiAd9QN7ZaGhxhMoPey6g5jduCo3fuRGvFzv6giLLovoQaXVhxTmDwn",
  "key5": "4PC8ew7C9j5q3SepZjY9v61V4k8U86qJEw6fVLsXycvXRNJnzZmeZePV84zNjdQVXdiWaLA9JU3zKAJzoBciV2y4",
  "key6": "4aQi1v8KXTZ8zuwn2hhhNXj6m9j9engUGv9BoN4fHVDT5yJdFqjhty6zM5CnV7jUrqfhoBJ979TxaCckFtb31UJw",
  "key7": "51VGWwDspF7DBQhrta2fnjY2HF3xU2GHsUPTHzuBhtT98Xmk82L4ovcog3dZAX8FVSEFoVmjfsFra2BcruUGUaUm",
  "key8": "2vHkPVfDMWwdxF4MVDQZ5PMDLRxc9gLMdRqngiA6FnNVsoUssYVrPsRcL7et1L9R2ipbe1sAAH2FNgiK3i7tYPnv",
  "key9": "3uhJ1fRr1jLKXcndCKN4oUAE8teJBDj8vuqYaVFSxJVUCjHbkem7C8svDnJUbNuHi1C2VL4kPrix8KKis9cDGa4V",
  "key10": "2x1VtR1FzPh4tQQ1VNZXzswCKwcEwVwauTttCJEMwBbyphqZd9RCDdWxZSFK44YieKsZt8ycdVuavzERTiG3T3ur",
  "key11": "2S44yDCZkMHZ4PJVmYpQP3riZmDmQCStnZfwpubq4VmQTYTLMc5JvtupNdktjrWidoYFmxdeLd8Zj9tkQa6ay9z2",
  "key12": "3WvvQLkjSow5UhZ8jJNwmZajcZveX5QDvG7WqVA3Yrhsm4xHo94ge1Ps3fpGaswr4juKPBjakbKbttervChnb6ww",
  "key13": "33ivtqJdep8yFjSsNwEDQtmTttJYAvzPpwSCqnBfJV2NiKBiFgMjWBwGefKyy5QSb2MMmpYghL53vT2VgLEfcF96",
  "key14": "362EWH1jGk3A66dfEqN15T3bg9Pc6LVaEuRtJTKyCDd1pmTLfgDMrznut8AnTsLYWr553swURh1eAfJexaXtypXn",
  "key15": "yaLnTDr5E3qa4oGysRJSULsLEhZEdn85oBTTCb5J6wG5F8Lrd9kaffTTtNAaxqb8qYouR18jKRGj1Vbn13EdjDr",
  "key16": "2UcMMjAsnWV9EJQUfhvjkB7b7TzZKt4g6BCAvuSWq2znQFTPQCebQUek7wMZDGY5Wj8DgHiBuLWFCyAkFyg6Juou",
  "key17": "3G4mw2yUwEsaN4woftvWFpcHTMoiDxQ8D66MnH2p97UenhjjtoF3ZUP8arkyi8PYR6BhdUZQWmZhyupPZd8Myeg3",
  "key18": "58bUqhNk6iZDNN1aZ8kufHkjSpTngigA358dCMQDJ7AjttHngySRXrmaWMWECraPAmGZT1iGfxo9VTBBKgvrV4zt",
  "key19": "3GM75hjSGoiPXY7wGQW4QZKaHyGLNTGZqk1w5MhuWxeBgvJV8jJ6BwWYk4AxUP2T62d2QzUi7wMfEvAwFEb2G2TU",
  "key20": "wU6QSqxrBwHgWne4ZGwxk9tpbYocrSNaxbNjykCSM3dTCYb75STH9y8GAtcWyN3dDUj1NSgpbCH4BNRQtYdfC1w",
  "key21": "2QZohT2cA4i31dTYwvJiztPdJHrkA8r1y18VWP9frBmBu67vTMn5AxqdsQUWjBSat4UDSAB4z2dJz26Lo5oSWrLe",
  "key22": "4uBG4wX6JSqWRKgG8Qz56HtWGbSQ9f761ENyv74kbx9zdaaRwXY1eF5xPTpELG994M5nUq9DCPDU4LWY4bGyfn3H",
  "key23": "2HjHpC9CDSCZvJcxrHWztwYcBiVft7bymgSsR4pqyRwJLFehCbwuDAjcXAovddSVU6Ax7oipnjhq4PfVwjupcJeV",
  "key24": "48CsDZNnBCQTt82pxMHiG1ku1iPUe5knBHF6XmACmzps7ja2j5WRBkuUv3RKBJHRHGJUBPFRWp27Es3MTfNDfyBP",
  "key25": "dmCTXnUr1aHu2ZEqj858ETTKiiURG5T4ToanQWWLBeh2dkbJAL1A6TN4NVYHgwwNopr8z2F5mzT4L3Pcx489PQ4"
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
