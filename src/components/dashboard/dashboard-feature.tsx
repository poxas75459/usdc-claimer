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
    "KuppGkgecRQgfjBH779J5kMEYDih4EQ8NWPj5yTuPW9U2T7uiwcvUJpjfWGNurpWqhkGoT3xKFX3qYjuaZKCEBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TQR2NC6X3U8ThDM1v21KxDYzDYkSZr5m23JkpupbwRtx87pSc7kfh1LWauavj1tSPbmVTiZMRTDhx66yUL2SUnk",
  "key1": "38QFfp69u6bAH3zkYUGPJH9pQ2XaTLhFpREVbKAiMHYGbWDCQ6S96pig73J5Xek7afkk1MHbAooZPWJkYmpRKisH",
  "key2": "2FjporusMh3sangXrMiaCowFCPZZxM3x5xWMK91HiEtCpAW8sG9k7L7AxqMF2rey4KMiWC4g1Tv2edmQTraG4UB2",
  "key3": "21QpUVtHgTkMAXJKdE3YszzcpfaB8tQ7SBunkrybVtSswNhgUDJRR5LTpH1o4i65CUhnuVz8wsvSBjL7NGpDcrhc",
  "key4": "5SRnAjKahdosLSGDipxkTeL5Coj3vhrEqERCmhMitXpWeLWtzxP2cjacRsxsVg9atZVQcrLSegNuXdZpCF3sR25w",
  "key5": "5LdWP4DWQb1PW82WcVJx79uHezFQjyRUd6AvzPsTMFuk3opvXgLJRuZ2SYuRTpw9SV856WuE2u5EuszqSB2coT7i",
  "key6": "3ARiWddcGau6m4G4BU2XkyLKA6W87iB7ijDv8aeQ2iGZXz3tthsdVG7JJ2ZXsFxC2UtHMtuzm4SvHujkJnaT6doE",
  "key7": "5wLwgMPpziYSJXmGkxJJFyH6SJP8FSCknuKBghNmiTH77tLcYQtMuf7Per76QFAHvW9gbLexZVyBpUR9jPhMmUdz",
  "key8": "2kiHRKALicW3DxLAYD6PdWYx78ipFUXsLW6LV7bWuCfTfrWVFt9Pkq3BHkk1nC6RseR59JwgVVNzX53w2AigT9yh",
  "key9": "5DXJVWfvx8mU8XmXUuC7F3L1vq5oDgKBDoH1DAyzz4nmz4myxWmKNGCt8QcTnZRcwQurQJYvEkAwF2AwkRyno95v",
  "key10": "57FCcGN9EvUXriWxhbXmwoS6h4fuw6A8gStAs9rvn9dDC2XsgXoa6DqyPKCsCoFDJMyehjJuZYLAY6SdNQqwNbxV",
  "key11": "5evxrJZTi3HFQw3ArUJMXnhfqAutKEVmWRpN6YrHToy9pEHNYL5V88FfR5MTqh36BRFFpLMs7eJzfWbt42R7BrvS",
  "key12": "46HysHvPX11Li64xwjfywzMk2HFzv3Pt6KM15eshdinmLXQmZ551nCsJNm7W1hUHWkHf6LEUoHBfegKUq3UxQFN1",
  "key13": "5Nvji7mRCZ6E8PBXvyRTQQR5kLvssVJRYwHSLPrKXgcMpNYFxRtaKpvphfs2hRsD7VG9e7N5inc4hoyrp6JsyMME",
  "key14": "3Q9fdoMfYzmNZb2KVU95WfDPVGzLQbfKXam2gQ12xqcy85JP7AWja6a9jgnFYFxuTtLWMNiooGX2pkEU1BmjbPAj",
  "key15": "4t1BdQ7hzUFZBQMJgQcJJ7kUfq5KQ7SojGPaZ2Br6Q75K6A9RppdKPkeXJJHYvPj7Zvr6HBpBv6q9vGWb9qerYxp",
  "key16": "4WcFcbmk42bodQiRT9BJv37EjHAg315YduuDCyXf1q4J1FXdQeSBXUF5mXdGwMfeguHq5rPPATXFAtCXVKfgQcqJ",
  "key17": "3WguFjqXJQHicW2QnJxbuXnKPmmMgTE9t1fZcG6xxJXTAtj3TXqjeSvZy6oNmCZdd8aUQVeBP63xnPxxq2Cwedw1",
  "key18": "2q7nmhzvZfJigDfNxg3CR16XkKQUvysJxVaqdZm4qV8JwWbpjdT4m892P3Z8CxL6GmcFC47iXY3VWyrpZSktxbqm",
  "key19": "2Wk8NqENj6iLqV6D7MuDXUjsDairjFg3mDVmExAnTXWT1ny3ufZKEzNCZGjNrnAuhq5L3Me3S2hbov3JUr4rYWde",
  "key20": "4pjhBaE12UEgDzMPEJi2qb8KTUTUjx9dRZQ2XbfjvjE2gvrsL62jihfDaND59cpsYmJcFu1gi4vAASmxvh9Fjbxr",
  "key21": "5C2WD6268k8hQA7FZXmATqZBt7tkiZQo617nNwb63FnFMFQMvHiF3UzUwFhynb5wRpM6W3BeFcxmC1bnwASDoNBk",
  "key22": "2bSC9P6CzPC5QH6qpRJdPyggWZD4AVhXeg3Utm4aagrAsMx9nRQfi9PRNd55pjTTjxFC827ajicH3rTy5EA48wMs",
  "key23": "CDZ2K7hun3pFX7XHEATfTR2kwiv1Ubc5KoctUdUG1FW7DeLc5sANLVkLJEcXUz9Sn6z9yxT9LhsLX3FXWRnrmYZ",
  "key24": "zZdy5zMwuZaxPwbwCjFAiTNKZfan3CEjyjuSLXv9PzhAj8rBgnD2SJoqfMX36MHpg7JJZzAmXZMHVrBsVmB3U1y",
  "key25": "A6ab7hcHpzakaidHoiAs3GKZQZdLvEQ1ePhqz79PTFJHfn5MNshF6AegzyM6yRg1d2ZxwmGx1SjJW4gEREuwGR7"
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
