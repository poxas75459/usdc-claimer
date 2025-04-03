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
    "36Db9gkG4sH94c2KA34pRVDTuAxWaxxndqQnTUvVdGC6yRdyngNfSPdLXJoi3MYVKGoqVEoK3hP3qBJxfD3cUdK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66kDREhgvw3x9yjpZk1JqhN2x9qizbSwt1qSxRiFom7QCD3Lhu6tCkiDFbN6363NfC95iGH4PEFYqXTigZuSds4g",
  "key1": "5eWJ1zRG52JieRhcYqbV49wENoVebFhoGNAnbaLXQ77vnCWbJVzYwcvB3mBDnkDKJZPt5BmBYhGa1h6gGEYJ3xAG",
  "key2": "3PpxzZDCF77SQ8R4TKDgNLjXmkU4VbQJEMP4d3sMuVKQogk87GhcxXMcDpra5T95E8PJABFchMs6jR18ZTWy4q4Y",
  "key3": "3wXiB2H9XxLcQMqsnQjerRfdsyGWEd54ucMuZVdrf2avNZJhEMpMWKE3qjCDdGnC8Vepduq8Usj8pjBkB2XDCdPq",
  "key4": "4ipQQEvMwKhDbWCYperru7pX8278tvU8n1PcLmk7RPHeQv2hztUSXUHV4ybkttzNnXr42S9f2u2kDiGpwBxSFmzX",
  "key5": "aqrPnu6726G9eQsZWKEqbN3ikmPKMjo8XkxkpKSdNqMMatorU3B1qJUUMa7qftJFZfit4FmrxaiPcpHXPF2tBLc",
  "key6": "2efkEsP9hYphscjrB7kFHtTGm1LUveUMeDTAaXZ4oLomuQbV3hcXmpLVdBtAVWDQkwxJE6zXyL4JSEF5nY6Av8tL",
  "key7": "4ZKbe3wWqjsG6GZM8vyAY1ZwEPiba71zQUCGm1Dp5yJp6hsQaR4SNF1DXmnPfh2rpcxYhTLib8S7x7JAxxzDhEfw",
  "key8": "RXByq5D4aYUds12D77Uhy2oW6ov1dWmBEmZg8M6Kt4pnrzUcbSJhpm7RRG3gixCu2KZFKi7Jq9tbKNeP8azZLvG",
  "key9": "3UZF1s5KmVzAifn149N8jSaBjJGXN1Qfm9Y3rz6cgthxopbDBxHQsmGJoLDo95hWiVwu1WTG6F9jzkmqf7ZrznjM",
  "key10": "616xb9dhgSDuziGfikTEZdgYnc6hmFxdmtNSKo1xfdJqhhMHzQGzkfV4SRXSEBQNySL4odvqTDJFdFjTysdcxwYT",
  "key11": "hCxJ6fT1o2vvKJcP85wf1ppSMfwVN45TwHumixxYWqNmCn1dchgERBEsfYgU5DcJBp2Yct35Pf8AYNYzqCv41WF",
  "key12": "4epotQoHXHqWP25crZLKqyH8zNpUU3Hore849UgLdUqq6doKMuXU9PaV6hanjahgLhkTtYKSgRBgZEjR4RCYxaLW",
  "key13": "4U5LXiwUXWJgcRwGqTsu6inwoZmNxLZPewWoitAcXynzVbzVGDb5TjH3ER9mbdqSHWhvtdDW8T56sokBLbWqqyhL",
  "key14": "25D8GxymGhiFxgxaDcx5qniSMnRzE4ExQeiThZnad1wR3tbxoL1EBNQBoaDy2x9uV2wVtJ7EihtgHim8tYtNb2he",
  "key15": "np4TR4CQjiSebHkVgWXTExWUWwihuoh1cqQ45ebYe87wy9v5ScvMfKioVB5rGvjPL8EibV2jCquAL6eUsJuejAK",
  "key16": "TQjcDrFzbYPyp34iEPAQ9yTeLzHfK5kX2G6cSq4LvAv6w9XQUo844gnZJFEXY3HTZ2zy24ZXz4DjAFZXqes2yFW",
  "key17": "2W6MLmSZA8dqUsS8FUx7d8GFKQrGhvd3FBMguAU9zCFDzwYovmoHZ4Xq7jH5LyRWpm5Dkpgt7Apfy7mi8feuyB7p",
  "key18": "5phZo2wVRSe1FBbnpbNpqaE9axeZdkDfnjrsjpCJvzK87tpMgoiUZfmETUgYDUcE6NKbNXjJnLD2jb8g1jJS2Yno",
  "key19": "fTCG1LtrE8MDEP5x3M9ua3NPzGtXuyqWE547fP6P5zJssfsHYnDbN2yi4zeotMBFEt75Kz14MZWCvyeeGa7CRbE",
  "key20": "5kwc7Z8xG92LFN1KTxMYpH8pHws2xX5vPaeDbYxnGGh9r65bUz2AY96nh1HBV5pxARQJefH4wti8pRGMuKq1bRho",
  "key21": "HiwobDwbxLGXiDx1BLEKnHGqcoex6Kup9Ug6q2qAfKvnvn6WmNGdB5Ljqd9FrsQaPMpQYReGyUssErVv2ypm77A",
  "key22": "3dmtbrMJtdYtqWhuW6HaVEuPT7K2XTkmLaG9mZmkaLGCZAES2heLAeDbK9jGSsbtJKN56K4VTsg3Vp3PBRhnrWci",
  "key23": "4YFWVWfLVu2rfkf61nVC1BnUY2ZUwYsjXVqC3hFxY5bnQbW1DpMjE3pkmBBZ1TKLmGU4DdFX9q6DX4uxmDAcAqNg",
  "key24": "3KAEvBkoPB578zRYB7TGhkpG4ToutiEyFjRiHVjf7MANJtTXVmpBpThXDiUfKh9xSHsbWSfhc7MNUw3v3d9yoFYd",
  "key25": "rzKE8cs9cskHEMerXn16gQt7BquTMJ8zzPAMuFkwHYE8Yi9DzUAzNivDX4ukSYJd6UEohzMPNyrvTnvmni7Evcu",
  "key26": "2RMkehyChji6GpJ1Es9Tta1tmHAAqdumVMNYUWE1kCwCBKUAPVy3vxGJEmyTNzzHN5aynJmW8fdCertejpzbxgqN",
  "key27": "5YWfxk5Hpp7YQLH61fQbiei45NTiMQ8NcoAriLZg4yjTu8cP7WHctb2y9BN4KprfCHkVeqXTWFrayXxxJZA2tqCG",
  "key28": "4iuMcFjntWS5ZEGZWYmjPiGArLmK6sioSDk9EkKFyEarX5R5KhtzK5nKvi5uggK8LoL9E2iTKd7q4Kqfo8kkDhqK",
  "key29": "2UnaQdr5dEa5v5hNvvW3dJHfxQZtnHR5uD8CWr6bFXLeUiY1vMBWj7qy1LzbB4aEU1FATZfJgkzsYZQNWnsL8cWf",
  "key30": "4V94wTKybXWj5J6x1bkYwYpVHwNYGk2v26BeLAGs3BQdKxe7fjtwwS4J8eww1Z78oSAN6q5hfkpoyy8TYm9B7ApZ"
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
