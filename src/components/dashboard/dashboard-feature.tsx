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
    "4aasXkvNFv6vxzDoz3fET2iKwpvPh3LeTFFGwaP2WsGdM4nMqL53Dj5qHaW1U48LXJYzrcBwMGKQgktvnNavcUBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VcHBd6DdPfGBUHZ16M7oQhBjeW1vh8nfQd1PdyA7xBzF5o6FuLVLqCiK1W1QzobsFj2SdFQR5VC71JZWAb6zheg",
  "key1": "5Thc86qvksS5b4fvAsyhDdyTA4Who4dCSNrudBbtXRtQk7DwJWWZ4iuHSGiuhxWswBek3so21sevN7N9WfaRxcfv",
  "key2": "2hFo8nS8yYUJszdmaXcjSbfTy6bHNXMAzCsQT12jWW7dWGtjuESc5r4vyGQMARmbKzZmEaHAUJsnbdT1zJcz1id1",
  "key3": "VuNoHNiMKFeTiqbe3m6t8cb9S813JqYib5VcwBn4KZxLAdCyecyrvUeG4Pq5tfvCCPDRkLKLPzWRKfjzqXuPUtS",
  "key4": "LVQzEGccPhYcfjnH2Fhi6MrVFxMsSs2ZXSwGtsaqwEnZeAHeCSezHB4o5Hb1qR1KX5UQYGpEwrmZfprzgPXeZGp",
  "key5": "5KjeNNi2vuM5LFSSF1dLEbfebBrq91avM1grfivL7oR2iwPnGLrAbQGfiZm7yjBFg4znCAFWo6UBfpRFEZZTqC24",
  "key6": "Z8dPthH2G62DGGzMKEHcVXRvZGvwwdA8QqZUftMLEB3FtX2vqUoHQBkgx766XBEPjdZQP9TyPMYzV1UiodR4f9M",
  "key7": "386vZ8uem8HboorGYPEVTm5r9g3nt3Z7zP8f6tpcXN3fCzKUopStG4ptbu1R99Bu9r9eM3WZXcwxPRmiZ7tkGz5U",
  "key8": "3NRDGoKuRXAirQCzw8NTP1ekJiRrTqnb9eH1d8n45tDnRzkjNiCWQXM2eeAdpzN4fzJoPM7YmVXRMYTNyS2hjULr",
  "key9": "2j2jbKU8DGw8b5ZkesAUt26C2qSRnGDuZYH6oubPog6yWunxCsTnrEzym6Bu9bSKbapCG3DTY6YmyQKShios7YNw",
  "key10": "5Yiv5mTxCtEUy7UDZYu8Zy4tk4eJgwaXs4s7LF1mDuxeWn5KyiMgpvBSms5zGV5ynSUUL3SZJG7DsNJCzwGL8Kb4",
  "key11": "5aPr5onVSXsbDHzUpAKur9D4uHs6famorf749Yq7h42PsdHU6ojcH57rGZtJCfYYETwhscAZWhcwndvNAWeGeoTe",
  "key12": "38nQCq678n9teKPvX6ry6jp5NdsxYeVU72DdRovEWppquDLpWVNUr9gLXSQuYHTogD7mX4Rcy9XUnthz4dExZ2BD",
  "key13": "2SxgcUMtZvqrUxR93kMVYK2FktCwfWoqdnDf42yFSH8g1poQ289uvYoZB9Sk7EWYKHYaAmLYRyKrrkWmdfi36NDj",
  "key14": "2nJtpfqxZXseyRABZr8g6v9UnEvq9KC4kEsnqYebm84Xrbf9ibF49omg8Y44xKbxp1hYHHeJsZix7xSZ6qKmg4mX",
  "key15": "1zWP4n6oQEjNAA6uBYpd7AsnbsfPiCasgM6pffJo28MouiZ6bgWt135F7w5xjhWet9QP9RfjH6JDmhBsVydXQ95",
  "key16": "2kfvbgpgn5JqiueRv68EgJ5wXWeXKkR2VpcywMKKJ72EbNWU9pHgdxkJFw2gFKppAfPLi2vxBcmfCXgUkLheeLjk",
  "key17": "618F7EzFPfUfp11ntX7krugfzbMGuBKCGV6jseS2gonWqw3My7DHPrEJWmu3EQyWymxbuYf6z66CmUfnQ5LSHzmC",
  "key18": "3eytX2Pfq7eQuMdVXnCpzeLDeQL4bSwqCcXMdjtPdUxEFSotT4bUfW8HsbSbnZpmZVSn8emH2iiNwJVEZm9L3mQi",
  "key19": "5sYK5y27SYCaZtCwcuF1cQBZnk3ediTqBMrHezGL9XDUz3JoARJ4DgFkLdsK6kC2WZ3qaP2agzL2LSnStnY3XWHs",
  "key20": "2Fpxu7jGGSVNURVg69339F9seHexb1M3X2Ce1az3FCuJJKhx5hTaqiY5YCVwxPW8BMDo57rc8kJMvzaRMUCVNsK9",
  "key21": "5rMWHuyi2SF44FR1ksfPEkMZbuWwJQVB4mSZRUEdVchp6UVWxYAastkoiUC5KM7f8tf3Zx6XkWbS3sPFHNX2gCR6",
  "key22": "5u7YP3XubRR2m7Tj1NoPrFLFD81QpAMhdoiw64iTJfEx2tKUQW7iBz9xUtSWcCJaRwhUASFB6cMmFS9dzypWLHu9",
  "key23": "4CNREbd2ACiBiAG8iVoMdfjVdgK4eBpbsMwxpR7tMyzfa9z8btbtTJXayoXEU8GyfYMJPwSRD6TJuiHDcSFMRAb7",
  "key24": "UioJ7UKBhmdZibPvvyBNR1DMFgSYsdWawfnTXUBztrCsoacwEJ5GwuQJSB6uhvzFUsrUcGWqN9BpWXm1EabWofo",
  "key25": "3noLA9GGRC8QrHzdzTaqi9piUNhFgKSTeuQAWvojTmExbM8FmDBUx8crxuATHvi7DLF7oXr8F2g7rrvm2vHmia7R",
  "key26": "3ZkLPqdVtk7YoW5dc9yKDYr4MAtizMf8JWgicSt4GetA8cf65YYcm12iFwXRN4hB1c2a9BjFYA7qGKAzq2JzuzMf",
  "key27": "myC26u2BtXENTrqQF5rcHHpgLEcUkraobiLhH9LMDXSLTK1ujKsusKnMCCGYXqbJrTbV1gJjRQ4yiD1AaQWPF2Q",
  "key28": "5uk4p3AjS9mfXQfcXBHETPicTbuzuP8sF1mxo7we6G15EwWKXx2Wiz1A2XSpHstSnof2TCYTSAt7KSULE7DoB6z8",
  "key29": "52cQBJdFJyeX5CxRFskPZtUgYDydwszbqnAFu8WBeE7Zw2FjEtrk3Vqzdt2PmiW9tGDVK9JuCXQuYzZXVbo6JqWr",
  "key30": "4X3n3b5uAXC3dM83JWokiJL4uhGa2P3kcRawGKn6S9MbL9GRXn4dkAZZaArZqwuRqNff5YH55pMgHL9N7xPsu3ZE",
  "key31": "537tMdB4JuSfgVs5c39bpTJLV9sfCoEapBErrfpnZfjQYmnceJJkvcLi8GBpLqp23axnxxRSQFQLLiVesGHj3bTK",
  "key32": "4syk8RpNPMAb68aKNz68oP5EyShuL5fAomhgxkPusZKCfqkcYvnvodrcbAEbmFEwbjTE2hWLa5QfXT1HoLCrhDrc",
  "key33": "2vtnRPxKVH6gX1NoEt7wzZQPVcvoqcxRcSs7DKXd24LPaPWFshSAVoBVsewxjHcD1DktGzcnnDQRuyo3AqHKnWaG",
  "key34": "2JGsD5EiQow37odUk7qCundeeC3Ddoq5yknxeBhRcSFJsk86AjxhX8XPsimvxz9TRPCSYQMs52c7ZbQJPiambw3q",
  "key35": "5WGv2fdYPhzdMSds8BqgZ91ZJ3yRLLaQz6JqdQqHH6f7nCtvyZ4jNCMNxWRzCQFncnLZWAFBxEwg5bDMgNFswSe"
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
