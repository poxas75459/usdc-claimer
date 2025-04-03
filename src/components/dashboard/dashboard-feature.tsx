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
    "2Hz2o4Ffzb5r8tCiekXnKqHVrXhri1F2cweGFCBH3vfdAU5Hz1y43kmDK5T9ETGxcxfA7vc9ArBWLe8Mn4xfEYX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22zxH6ztckNKj4wdA5q8uRfh67v7MsYDGJoSpAG9Uigih7kFAEwwRKLLQ4Q4Se4g6SHTRVjZ1xJJT1MhvpLBtpef",
  "key1": "2bBSCUN3ga818V7PXgjZcsaC5R9Bj7GeV4CtNHEG2bTDuV73KEsvVvaBh83Yuk5iJFLuVDPfzvQXmKQ8ctF7PMKJ",
  "key2": "4v1tQWLXrHYnjyNhyqvzm9UTWGzV3XRJPbWh4RgRKgqjUrQ6N78mgA94nvVQNJU4gYTmYPBHbTsyh4ourQmrwNVT",
  "key3": "4VpEq3S2pEVQKnbqdApftsFzJ9YdBSjcPbRjTJTMp6ZU57Dney75L7ZuVegcoccjcfqEcxg7VBPXYYEMm8L4eSq7",
  "key4": "5nU6Cc2TEzUtEcMqpqKnkZ3fH5yx11VbdNKbc3LsvLumMfE4poeCD2m7sdR9fAt7dNtYw6Yq7STGWwjxUq6bh5qt",
  "key5": "4GA9F1aM7B7EuszuYyNHdsoBkjHYrcgqSihocoP1jBf1T5Mb6cnPDCJ5EUiH4HUumGbfh9KzVtb8tKrVKQewCrPD",
  "key6": "KB7GWZA6ZbisreLQHKK3mypsdPVRFv459hKXqgEYwPdmqt3QQDjDZnd1nXEUnjXNUAXDudinwcaVdxazvXnJL17",
  "key7": "24Bgr7m3PEdEPMca4H1Z7J649JH32PUe88w8bhTWGyw8pLprZTEWFnTktEG8vAhz82KEx8bYNUPfQXPEKKV4NDQo",
  "key8": "1TvJ4u5qJwNooL6NU7gtFJNLTXbfwztLVBqyirnb1x5s9YpXu3vhWdgzEnpNFPPTMifHJ6R4gMmQ9iuBG7mTbyd",
  "key9": "Kn2DbMZnWRPBek5kAy1pXLwEWz7hBVVxtURXxpxBexzNCave91CRRFAgAY98vVrDWa7CPDfVcf5ERNfTv5z6sLZ",
  "key10": "3gMTE9CqFm778YwkekDxHdsfbaWJyqhVXJMGJGW7a5S9MXGeR9DEYH66wL72H2Ky3vvRxPgqd9QpLuWm2atLDTwi",
  "key11": "4JwDFrAcJ1Z3znPtwHaq83YNzNR8Fngs8AcfG6XiZ1LXK6oh7xtjYaq6cgb5VJhA2w1dbsHJqhWp5MUcCJ2ZkNcB",
  "key12": "4irMBJBDHcxanDQExkEBdbfd6D9vxNZ2t3Psjau8WoBiY6oH3Ea1eC2uQiJgotqDpyHrWrxwcXz8vKYK8byXKeYH",
  "key13": "Tzo6rcT8j76mivJ11SRrudwboAJRnfbWJb3XzFF9XAJPKocu4xgKriukwatKNAJaKeaEpRiDUpmKhYnykx6rbiS",
  "key14": "Tz2kUKPQvqa3CegeTgeUnFDZXkHUKMbLKq5UymRGD6SVmEw3L6CkbiqUxeJoXYYCfLZiKCPo9hsSJiyoLANo2PW",
  "key15": "4RAh5LjcrwSoqzkDC9YjsLfz8WimV1csafojhAqeUUwBaMcJe1WZN2g5KwutwQKELYTVXoHo3c9U3tsLVth9c7e1",
  "key16": "3kyp5RxbeyFdKdkmPGV4MzFCyx2RQzDqYGojbzgJc55g6SEK19tZchXG1RNaQFquR4KfPs4xWLiqHPgpHHPtZPnQ",
  "key17": "3faPkL1RGuCTm74fCzTXpGvb3m3hK8HNxeu1AucarjaZeDwavXgoFE49rsiwKpjyh1x8RsbQYkwi86yFpD1FMrME",
  "key18": "5A3y9hnnzm9MibiqkShXgQYUgxm4yE2VwhGQSNN39mH2ABoe4KgCMN4wdhV7QURebeNxXNGmPWYqgp28o5DT5Tsp",
  "key19": "4sAoivukMPTj3YvfpdqbYogGJkJd2kBB8sHjK3yB6hQDzo69PriqBiiudCCm2bW9kZW3wCsHhe1jHAP7HDb6nFxF",
  "key20": "3UkedUuyEcryePBeEsUwQWYmWPKQFDHf1J3ATCZFNGJdaEQ5R2UiXQPBUvpKrMN2FWYxvLFhToAkTSGS9eGprzTL",
  "key21": "3ZA1YAorr3WPrCUdUVSbJfiE3CMcj7zgcaKb9pqAEgJfE7QzHu6L3CrvRbjGouAX8nPqxfypA65wze5pjgaFm4KZ",
  "key22": "4WP7pZt5APSvyAQosoA4Qkw66TvSquidhypoZLMGjCSp9E945TXyPF76aaBCFC3pvPoy26eGUS2Mdhpowno9F93M",
  "key23": "Ytu8AuJkyVr3RyKQXgpiyPHsq93ery15kuWTX5tZbtvEFF1zyzaazQ8uXcetEVhFenhSoJcxJGMRGGHCB3FNbWg",
  "key24": "5WLLeUAdsZ1VzciG6wirk4AXa13AruwtCFJru3Fv2zfNkizDWnutV7MdZcD4Ms4QEdY8nYuYY78j2H55ph2qayAv",
  "key25": "2EVufCLNVgcCbA9X3guGyUVvB92obFGxUWK4oDwdk6BfUHoUwBSTxP46nRARFyHvUaLpSxQJwnsccmqemrF14Kxu",
  "key26": "3RPUNPW739EZV71WTh7uR4majpqRcqfZBZ3zoho1Axw7GUtYoCHJPzUj5jKqTqg3XjtHnKKhK4BGxaaBtxEDFwZc",
  "key27": "3bdM4dXnCUKwG5ov9d18VRuPQ5CvMNvLuHWoHDAdCZQmUBqQLKP1X4p2VJWVFoCcxWFaXSKgRxfhpoHAsygegqca",
  "key28": "6xY54YzsxKoJ1sWL38oPSaVRUUWkiL68kH6M2cYNK29mSF37NzGWfZwHUw9CfK6ZYLUFyQgUESkq5UtTTHwqBWq"
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
