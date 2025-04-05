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
    "35vdMHG1T7e6yeH4XgA1XfBnYscdEbGoT94GF8wTw7AFi8ChWeiYMZ98kc8K8wNTs6pw8pFifnk3FELpLFKyYMPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZTGKdvmrZ6gyqnQDW8J8TsCKR799VYFjwdFSSCbwH1o3oDKgvCiKk8yaGrQkLh1FeLFwzRs4K8D3BZrLQc5G9Cs",
  "key1": "3qPMVvyqyxBS9a4B5NgRMqy2M9jrW7kES1rxrqeehj1VbLkbvC5QVN5HjpYSGMvvKB5nUxJ2cBFvKBFVo2tjn81H",
  "key2": "2yczfeJ65jsxuui3tUHUKty9qahsRJa8vdeQfYRatsQPuKQPtZbHVZuhswEfuz5hLccwqBdJYkpG5GxMgPAymadN",
  "key3": "3zswaNBmDMSUF78Kgh38acAfqupPXAKdKvXReSsHGaoogSWhruqbpDtcaB2Qmf1zyqdQLDiCxSw4ur396ZMpm63U",
  "key4": "3REyb5S9mdZFeZfUeMxovmQUSVNyRnH5jLWAHR7qbyDz6Lpr1vbeHGRCRRmrUnp4RGLwBJTU2XfBSWsiig2Znru7",
  "key5": "4q8d2TVjvV1c7Lbx8sYuE1jir6YC9d92rBo1hGPqxaGeMndiWtEwLZyNdAAgHTNgG3YzFQiYTzimiJJGrWSKRDV",
  "key6": "4ssMVGQotobY6L6w1NDYXDw8LmKRfcSi2ApCycVjAT43wHLvbwgM7j8JhvurNp5p1udaDs1bHykUtTh2p5EL6C6x",
  "key7": "3MhFCkiYKn5CYc5qgmhqRgJrGw9tWcMFe8FhZ7FdRpwKv2FPjv4FxPeB9G2C8KdvchUgJEDYLsDZNzKwvPVJKE6F",
  "key8": "saTwffxwojawrVk2h9Zi4aR5aVCxhD2d59VzDKAqkG4WWKGKFrVVZev19nRou569MiFmtvhUrHG8jxYu3Wsp6Bs",
  "key9": "5ncyWJ6VRHwEBMqf6R8bM4MwyHkdgzqm7mTomKX7TPjJd4cxxFfbedK1mYhV1xsDsLBSWyxtWWkeff4EdvsPxTeX",
  "key10": "4hT2HTo4xGd6bXxQx9TFfugkcDXAy1GbvVb2MsneABWuFLD23K11jeLGi6dBHQTysp6f2YPdKXLNF6oP1AH7JHXC",
  "key11": "21PVchgUYMDqeUcY4BRXkHAEEj8iNCBWCtAWTXg178t68Cb2zLsgVp5EwV8ABkXS7P5dTydtQD4dPWx6kfvN4gHJ",
  "key12": "3LUd32yQwQSksbcz7Wo7Wa9tcz3FWQp1m3uiJ2Fw6ZCvVUYLmw5eoSVA6ABGdAFffTB5nF9U1Z7B5ZNWzDvjsVVi",
  "key13": "5sWNwgEPBFFbt5qTcwSkczSy8BKqjsNEE2F5FEP8QcYzTYVp59Btc6uLmn1kf1Hyp2rccPNHEL9ngrLmYwDqy6XJ",
  "key14": "49YYevhyLXGYsQUPLkfig1i16QBqHRBEHcGzhAw6Dife5283nCTvc1XhaBzq4vUBCLegLUr6twoaKBmJFgnB8wfh",
  "key15": "51tkb8kgMTSd1CysAjSRQ8Nd21wEZu1xyRtzdSJhuGEvFk31u8KADWyrFdm99M9ErdSvFaMN3AhzwhHKZZfGJRDJ",
  "key16": "5HU3MBW9hCjukvuuJz6i3W2h5Wtjz9kLE72hFZRxbAxf92k3MewJHzepMnEfhJouMVfmiqcZsrYspMUQtVo7t66c",
  "key17": "668XwaS2wxuykLNx1yAtTVUxiHi5XrwzDEeBmwX8uEbwC6n1q68CfDrL5LA25QGdXe71hKgDwgBUDchWhkmDK2Rj",
  "key18": "3FD3B3TVuB1URUpD5q5FqN5eopdsLV3RnFoRiZoepTeGq8JLdMX5jun76TSrKg89oxzJPKc52jPoZV92roSdhieo",
  "key19": "MEvBWC7UV9DH8xMuxHu3UyBhiZ2sPCZSsrgjuUAFF1iykNBRC48sadsitzbjaeQMGjwKMqnivMo9dNcnqs9jMLq",
  "key20": "5e7XeCexnLyk3FvkPncDtgn3KUyRRSyBEcBAK4BGEBeaGPsaLSF4nGPeJr7cpX3W79nJVYd7rN4qz22bDfQtUkUr",
  "key21": "5okBuLT23ND34ykrd1WNBwrWaUqiyQRyyqHRa9mQVJaQoz3Gyhc1woRWXEvpWtaU3X8yzEPq89R1qt1kXHKyuwQk",
  "key22": "9qvZ5QTb6pXAU8sfSjeS6rsAnMBTG4Y3r7FQfAXGcfUCrzv3nDPAktjsZTGjzmxN1n3rHDyr4sXmA4Vp6FjhZEL",
  "key23": "kuDSmHJYErjPLy6UBdVp3yFCpzv4iAWs5BjHUFALwN71eXzjaJXjAPLvyGsVCAfPUWToUE4NytNLixSd5RFijd7",
  "key24": "XU2KaMJN1qtnNFr3EYajUtGyo1AP7CeHdoQAkLWueGuSSwEBsEYBMApLsiHb3M3equbGAvifDLEtqm5GLEcg8zZ",
  "key25": "2AbbGSYKAxRfctyZnf9F9NuxgiysGurDobs26LXBui76Q9zVjY7xQxoW8ftW12LRE338yYu2syTQTrqiKa9N6kfT",
  "key26": "jjBYKZvYhAgKcVHiQYFLhx1mmK59PqmbKfRWZxRerZDN2imWKzikcguSNhKQZjkTChDcPGgd2iL6XAM2mgG2KHZ"
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
