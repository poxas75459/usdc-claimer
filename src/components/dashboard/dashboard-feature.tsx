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
    "5xwp9PrQFvmHDsVJH54hve1wrcoz1Hb17X5r4ofRMFXVHtm2E8Y2fTuXZcabApYPVcG8TcqXgX93wteoKcRN1dbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32zVcQoLeYDqXxZdXNPt2HWvjFh6TQhAnaAy2oaYDdJRpSerAYqDkPXp6BZT3g2Xcq39wVJjqmsz9SnR1BPDFAG4",
  "key1": "3z5x16koonhu72maSzagHAFwgRGTB4Z7zXdcxxNSNKx4JmmemkRMamccqk39y5DKH3bUTaRezaFoezUoYzq9aQsb",
  "key2": "51cYC2DmdbatoN8H2bNVUn4ZKJ6DsNxdvjqtUCrGwQmAycU1fTSeevqyrkyoTDHUeJnTSjMaGLgCbDnqKkszBrzY",
  "key3": "4Tin9rHZyVSLz1gP5ZvuWwBYnFAyXZtLC93haAwULWg5GKRdJwafRTRxgM1WxVzAQTiWuyFwBnQxysbk2CPGriFV",
  "key4": "5Xz2LsQvZEVfCZbvp93JVNqAMioZEuTj3LhT6XiXKQSMRUR4B5XbMyFoFKgnUbuG7WW8ULzBPpYCuzfQ7A5UKLGu",
  "key5": "2ZsN8YCFZWirGkDmJMXMftrqPZDzhws3WwdhzrybsShynoTkg56D8ZPgnsytCDBGHkrvLUX46bZwejwHbd7A6RXX",
  "key6": "4j7oGkYkdgeCYvzg57E6VDf7H84DJpBSMn4x46LMdoSm885SqWfmou74yAfE4h5xo5rHCLwcYGTAmk3rRK2h1USx",
  "key7": "2vaBQDjGSHv4mZYSev2r8rbaUgstWb3ztjgbj9W9Pqi6DVxEnAH56KZkT4XRnkWwP4NQ7TduLEKadDopfeztaZgb",
  "key8": "fhjRqS5AyxFohNThYtdhiXkEy2MeJX5Ldta3kTpVtv5kxc99XNFJ6C2XwneUu7xgPw7Ti7VczRZwsQs3CFacYAT",
  "key9": "49jpXsdu6svnEWCA9BG65nGwSAg6YEFaxgBqoTviotAjxHff4jHKvBCLCN6Wy86ZBEUgGgRa6FJ5ieiQWZvCz62a",
  "key10": "3Qo6w7ZVbbZExdL1kqQAtEzsHwQrsCXzdBLgKtQW9bTyVjhwt1Nb1FBi6HTE4rFMzPE514ZjHMSU9LZsodvBJK8L",
  "key11": "563TRsxewyx4JDwWg9edQNgSb1JJRC6xd5LcJBAmYC9SftaKERkRtyaJQpdbXN8Sez49DKypn1d8VvoYW6iHSrZv",
  "key12": "25PG7jPp8XoPJQ1opbkhCR8SiygHtw4kbnpidGTmQKLiQDX2vLYsfMq9JZ2hyJV6DXpEUC5X2uxLosE8ajK1v9xY",
  "key13": "4GPdzKHPExMva9iArKmj1zTyhQ6NZLomRGpoVPYQbhNbaL7YXTS5uyQAr3bAcMVE7phMXPQjTBKiKcN2Jy7FoCpo",
  "key14": "3nwf6PJYFmrQR8XWNHdTcEYo7GCsebnn4NePjhvEWPYQgC3vS2MvFCm8hZ3zPUqB24GKHG4Bw89WYJZA2kwSUHM9",
  "key15": "4JfWnDijDffbAwpyQGi2Q2BbUb9nKyheNzM5HwUELAF2x4ME5AgX5NuJhCGQNjLSLmZ8i7nNWEx8y5GkwTU6AHoQ",
  "key16": "4gkYSfFHrvyn6kUHC56SRkTYMX7jWsJmsHGpNo9dDtbGAiLRkSur8nJECTKxn1No4waHmzbBk6FUfKqvLaMkyrBW",
  "key17": "3tMX7MfnR8NosU4fgSsaUudNaGyuwa2XBeCK4b7TrwRYRmvTWs5aeTkjBz2wNvBooxXUiDpZZXwi23kyGdQv1nMe",
  "key18": "pzgrjS9tU3FY7hQWkjdqgdzwoUkimAnoQtpB5mEXhQdu6XT1Eysw4hRSUkPrzPgeNjYG6Sne5sV3TELiC7sLQKv",
  "key19": "3cp6vUmVi3bJhMUMUiHMr7AQ8dYMBN8K4q7L3yrrWk6v3o927QcaTBMix2Fqm2diqii2JoptMiMExCxzAiwrKEQv",
  "key20": "5xuhktDiyorwJ4mXUrFCkT6euREs6iyjo3s6nuja45TUT4j5os84Yp1kaWGX4NJSAcubTMmHBtfQyh1j4tYm76N8",
  "key21": "3KcJRGyfvD29JVakDGXxqaxzseDdVAXheMNmPrknhgnm5yoNn1YeaNTzRWESsXzuNyzTFb6Rmy7bnScvJZyWX1M9",
  "key22": "2G7ZXHu1TmShqH8zWYyb169zdawPcNJ8JSviYMuLxqmaaqrgKGxALfWgYdx2QqDiroxtxQZp2Pq8H5jXAPGJgMHh",
  "key23": "24ZUTJmY3eD2cqCdnTNacCmiE4DMsDSzGDxH31rWDT92zaWMhBW4JPtQcD4pvoHgfEtqD5rkW6tzBGommmqDUhEr",
  "key24": "2tNBPjmWrwUWL17oyLXVAsYjSXs18BgEScMWM7SCP69FQ3CdCKNTm2PrJPEPz8CzJsJdv9w5jPB8BZKVp6iAwicy"
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
