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
    "4hSZ4CvPrDgWGCTZKtP1d6cXuqG1XLAN2EjqHzsDmJiWkqae5hBqMSa4nbpUKZM91bKieHzQFTWxy4FdenvbCHMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U2sQruZBJTR4NbExo6CBaiPpgu5XZebHqjsXLaHj7x62LLL6GYSA8q6E7FqgFEHmZpacysMqUrGkF9X2uKp7HvC",
  "key1": "h8dPQUuyTTFYFALwwY26kwg6iyHAZNkVsZ27mnxSfyjNCYMFpZpwDzRQGgC6Fj8Yrd9U6YQjypUxdQnSinAV39N",
  "key2": "2D72JcYNjT6FXfieYcuDjj2iV9MwsRQ25Z8PtLGvBWXJvsHCvoyH6RszgxpFqjU7wzWLyv63y5imGe2ovezsiHyA",
  "key3": "2i11Ja1XK2Hr6n2TyWv6vsH5GkUsiPzVFnw3AQc5pbHrsGNsktozEYrbXx2YuTwgNsMBmjAbbzAMXvnuc3cSsTNj",
  "key4": "ZpxeW6L8yqC4gpAQyAbv8cRH6XsMvbtkPu7fZvsVxokUwG6NECyUQYweuENXi52CVgXkZSsuaL2vEH4qTb9zxW6",
  "key5": "5XisHJpEZLhKBGvqAF11XmcneaMWCPrgfCBtyfupWuAjotgxxGFnWE6D1N8X2h9e1MJDymhdsxeTH4Zidnw3AhZz",
  "key6": "5LLbfbaYP46EQDWFkE7TqeRsbHwnAAWanZSSNsMi7hMfuRcEZZJPBvoiDAkbWvi6K3TD7tqG3ETMVrvDpBnn5GD8",
  "key7": "3ro3UMKCrhschwAzsTRovPauQw5sZMGfmAWfRyXYRZr1ubohRr5sTThjB2E2LXQWZrg9maYMrfgufYpmLKc1LsbR",
  "key8": "2oeJga5Tgq9bwSNSuqTBGQcVXopcP79hH91nyAojaoRX6ry4ngSGi5nVAyzEGKJmwqsVXWyy6VtbCpvbjw85hfaT",
  "key9": "qS5QRQt9f7mCeGRdaMgTojXVxcneepV8Pqtmnf57LH3q1VxG7VMUXrYYJG9Sufug85MLnf7YPtKfKTpETkXPFf5",
  "key10": "2yq8jFcZybBXJBT3uZL53zENzZFqzvfe9seVdsAYcyv2Poy4m8JkvcPKsnZrt9g1MLN625WKcEMjjct8v2P9e3rJ",
  "key11": "4MwB4BPVnwMi4nk8WY9myGNVnTn358uDvWrdbhw3YHRt3NNNGjvWj4E35FzdweKpzcy4LNgsnaiosFrbKgzzEeFV",
  "key12": "4wvnH7JNYYvG1rnDhZJitCtQgm2TTYRfUPAWv4CqN8RQFLpaWnB4SJg7NrvCYYimGxgjGjcxcaMDqqec15RGYgRS",
  "key13": "5gv61AVqmWTsVXyfqszD7G61bk7SjKmYj5VPk6sXV2BVTHavzMvPEB63ww1L9QK5MXL6hoZRMooA3ai8rti3R6WJ",
  "key14": "4MbE1fubnJdyMKhUfkVg5kJt2M3S8FYvs9kvizsk8htTE51ccrtDt6iEXHAraCyG6pnX9fZo5vPsYyKfnyCzwqLW",
  "key15": "4jPRAxKT5CLZkgVVxZs3wahKKjFGyfg8Jws9dqJhRMKe9RqbzJ6pYkuSRxEBG3Ecg34nnpJT8HowB45NwtX1ffps",
  "key16": "dV8awmGRijF6p8HCMKK5KsRfWAq8uNR2xNXU6AX3xPe1PJodA5XSB58YrXS8NsBq221Fuq8Rs6VYYMXkzb6X4MR",
  "key17": "suSEoypcsMXY3LzWNttJqxajfJPHuW33WLBivcPqfY8wVa7GfmtVe5XWZV8gF8XcLbnEyjEibi2aJWWnA9v5w49",
  "key18": "4CWBvH8b3ZhWBJr6KWVRP2gNnGWNmVP7P6ZaKgAV96vv7tkn6FpmZjEyvgoDd3eVqJDCCRCGVNmFz8LV6cZrAdjp",
  "key19": "5FJ2cp88pcJidKE4qN9iXL3kKPT1RFqq7miyzv4ZMNNXQnw1noPcr5iU3LxnzwGaUwb7zyqtsyP3wh6rfCRzerDV",
  "key20": "3o8atCGdQMKikeP4ConBdehkWN2fPpfxZkyedrfdDRKmHDE5e6RVSDFigbtNqjDsoF4tHoBJafbrTnkMu78SHiNt",
  "key21": "5S7ptmV2NKaCypAWoG2JX1gQDKTP38Aj3BvirHZ58mr3KhyHw8z9xqxudeQWxjvjY1m1TxVhGqTHAGF6Woz8HofW",
  "key22": "4nJKneBnibvhApfgKgdekAKaiZvWf2c4CtFmoWdUJr2NTs8Gqfhw29Tf2JQ5MMiAc4a2J35V3dpi7idhdxLErprw",
  "key23": "ets9NLtKpypWtTgHg3aV74wG73Zj7dxozFWEnQMY7xTDtafaw7UMWcbDCigXpTRm96suo33Rq4WaCvnAmTvWdZL",
  "key24": "3r5Ydssx2qXq6gT5aiurVRB3NUxzFGBeRoQwufVRXGfrd4wq2XTwufwbEZd7KHgkKNAuaeosQNjRdYFBLV4L8HRc",
  "key25": "3Mwkjj4Vjb9vRGm58NLKExkFpxkxTrUugZbHVjqLbzk9XTY95YocEurYadDMAvtynMeMyKpXPB1Y5Bwe7oQAdK7X",
  "key26": "5fQ1HjByzQPfrhNvMTvyvqX6ze2fLLwbe76R1nYVr98HXQhnUbCEPWWUKUwrcQASFxMz9jddLMkzgbfE7h3y68gk",
  "key27": "F9fs73FykU374SHo6bZz3HMD4c8bSYrjr8UKUwREEw2f8bqQdbEAmaT5mcFNgnQRZJstBJEo5RwFLtd7uFsYCtJ",
  "key28": "31nemeu2ZVrz3kwAyHffB7XJayz1HrJV1K2pPnpfJaqnpyzjQoVPKdzSqxwq64EYwEgHB3gm7WYosr6SkNpz7Ehb",
  "key29": "yzpAhwSs4hxHWMuK8665NR5CvHQmJ5fbNvEHQmRjEEJVVTs1U4SuxUPrLqwdvjGDvR2morJQ2pU4VPTHr22ysqK",
  "key30": "2XFUaF89Vjv78Ggm9KNGDhGUUjV7du2nAGZoN4CqCjx8SGMKZzjYdAQhFJm9U3Ks6HbU2gncf7xLPf7TqhDjU3f",
  "key31": "Tsb2c9e84AoX4WKFePR5YhSa3WSrbYxQLDH4oziG4r85rUFUpzyGxvdbgoETL7FrGmERBNvfW6y96hY4B2tCodN"
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
