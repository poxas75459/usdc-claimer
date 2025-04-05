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
    "63FQQnCjjd9nfFm5VRL89rLTjhXF7JTo5qu9G4v88P99hNuYiLZ2mE3w9FchQMrbRfkfAw1WhJUYfMuia2SdSMwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VCy58RsT1yYsK9cdbmTDGB329KPjFVER21o2ah97bhL5mBPgZxdsiyREVeuMYHXVwzkHjJnTHmPUeemyCuSPtSy",
  "key1": "bV88HXHgQpV4pnjZLvhY3pwdRPtM7GjgGRZYe6aH7v9y8s2x5MZHAZ2cNFJ5785SkCRLYLVraBTL2FheGYCDNtc",
  "key2": "2XAm8KcoxYqNi8FDCQmn2DvaMgmWiYsSLuc3Z4qoAtwBL8PrGz2JQ2zs7HPRLsKVhU1oufiSPLoHdr4ZMkPbrHKc",
  "key3": "5wBgqgt1xp3d1oC2BtyT4EbT95gaV93Z9EK4KC4r2pAXoomMag8tMpbb9eG4nrrCWgBqeFecq9Y34uwxDAc5P1R2",
  "key4": "zd7QU9ppeEW5Rsbz23gjMSZ8iDLP8vcxB6Y8j37WpVriAD6jAUNBnr1Hop1QwpdmSRnSE4iMeYhh49jbueJshMx",
  "key5": "8jJXZNX9eN5cEAWp3S4n1d2PxxxYvrAMkXgLZsFYMdPKTbgbG57SRdEKtM3kqz8FYxfDGNBbqDQbjyshBQJnHHC",
  "key6": "eTjaULFLSzTccu5nt79VW2SUbqT4JhuFDj3S3RdFHdqP2obPHVR84SFfxhikDfchYqiGtvvRjf8QuQLmb4DCnXY",
  "key7": "45QUYcMWQciLtZFF7CkgHXVGhWy1KzttKTPHnD1PMkZisH42WtMF6fo6GoHT68ZykZR18RYuVtcDDgJeaH2eLdu3",
  "key8": "66rqnNqmS2bP3irm4t8YSzmcM6YUb35kREMdUQQ1vewHXSveVCZRTjLAr6EhHfbTM1TZFkFbtaqpQWWYJuBqK37G",
  "key9": "S9ZLqCPHRnzRKnbcfjDXtLeDxLvPyRJC8hoR1HXSNAXdkxa2V3rH8H2KyxMzbfunojxALyYwHp4mLspABaKYjV1",
  "key10": "2AW3NdaYbqeBMhfaCyYgk2znj1zQfxjuov3HS3ArubWgqHw2RQr5Hvt4Gw8yZURYi8a7vAEkZEWq7cPbgFGTTFx",
  "key11": "41CSAJrXNprtfbWjBKTfbFCeptQuLch2PNHo8sRyBBEgns4hUgcrFfwSbWTuVkiDawzekT5AqhsxoowZCtniFfWw",
  "key12": "3dV7k7AuyxWfu2NPebnTd86ZqxwMKfApEYiy94X7fP3RwG3dAbLjvEWLQ4udSjNJnd55PoSh9ZuDvfFP18ysfEY6",
  "key13": "5eu2iXuVTH2tDWH6C6KAbRcTCT5dECmU14Y1Qa2pgKjoPfy1ZbL8FqJZySuzXkMxarh2Lv1zb7BH6RzvLbGG61rs",
  "key14": "3GgHFUDacEffyWp4c7TYkf2Vox13HyHmp2m9zCDvYWDPxRg6TdBgS7gRGupSiQZ8g5i9hor56ygJwhjida6EjpWd",
  "key15": "61btQk4TZmxqLZQ3kXSAPC21qXUwQMN6fKWP4fi6wbz1wBt5kM9JPcY94gHYkc8fF8DhzT91YNFUntBtjP3hxxYy",
  "key16": "U6AoKfEf4HFtyDwCjMprTEmBo2iednwrxnnrPmJZqrCvNGiistZk6FFVVB3rdFS8rhZdrSQN2NdPKhTiEXvgga9",
  "key17": "26A2UDLDzVCyBawR2JhMBswxFnTLqcihoAJS8UivF2CzrABxNmQqUzzEBWDSqD2K9Vhka1mk124oQJuCWjKBrXSn",
  "key18": "2EcHxbVwyri67r4iwcY1S59fK6L3LSUvAtiPUkE88dtDYwFHnMX9Xzu5QFoiRZQy8Y7V2J64X4dAJYeV9rK3o79S",
  "key19": "5ySyoLeMVa8d8f7PMBKHnq2yN63g9p3G8DFtFfRLTBWeg9onsdmWYe5bC6Z1ptFJ9MBUgMaNnmzxaPkxKQQXfQme",
  "key20": "2gw4nFq5p1m7E9TcbXVQuoqVULmJuNt2LQhSHk3RBF1eQGtPpfBM27yEMNBLy5qT4beyq7mfeCWCMNhPdVNaRkuZ",
  "key21": "5xU8g4qUaBiYTNMgmLinJv1U2EBZekaoiKtpa9L8WAXUiKrCUiRFHADyUN6iMPkMuBLkHhPWyej4LYkgJWBf9THL",
  "key22": "244mdNvsB6Rx7JhdUzWCadt6tXULbEoSKgmvjEWkZu9jm9QqDnyTTSGjCE2oYT8EZMggKCNu6BMd8oPNYtSD4suG",
  "key23": "4shDeXHu8L3jUGjaBMJriw5YJSis4PB7c9c4whnBh4iQvyaWvw2HxxFzfeoDtWtSbRELgjYmz6qgsFE4N3XFCNrb",
  "key24": "34eGWA2ih61uEy8LsBszoJJ4N7tgff8AL7eEmmKk6KytJ1A5of3iZJDKc32DAUCLb32uUo9m6j3eBGYPo33DzSWC",
  "key25": "3CR6JPFZXpFQUnnKCDzSShtwFKr8srnChJKjHREpPT1k9dK3gFRtiFRL68Zxq4SEejQThtkCTyf1MrcPaWqcUyS5"
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
