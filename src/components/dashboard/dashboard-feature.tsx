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
    "4CFqMc7jAJtAHL2qwrbC2Pydkby4LvCLGtxFdkLd4pzGpG1piZepFsPApsWcLLGrYjeZB9No8RYMfAXLSgviSE4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bkU2xJ3hbP5geXCa9uvgPrDRnvmcFY8qsEy279RsxAyeCD9ZTevPDRfBeLdZg8t9Mr9fg8ZbZ7Rs1FsDSnCLtjo",
  "key1": "5Hd5h6f138tud8dEH38gecyUooFJ4xDGZdzGTniYtBiFjhByXnCMGEPMh9mJKomxYjTavtWjhqBhXVaDDN5LHgnS",
  "key2": "4xDJrEmH2jfUqoGWz4cpmvGUnN4JCwSLG7rVfV3mX2cBZWuzwXWMXLeE16ZZu9G2duQmagjp6fFoDSm377HV3cXy",
  "key3": "ma5fkQQQQWU2aW5JKsvn73iw2wuUeB6yEmkwTreS3MCLmVdQqdWAWs2h8dsf1F3RjoDxkx3ksYNgFMJ4J6pfBbS",
  "key4": "3n8oJcovYTVHpUzcwoLjoekdFoZTvQBJTUWZogt6My2PjfT68PYaUBnFt5foh6Uof13E6sF8jZGwLC3x3nWV4ebw",
  "key5": "4vZZYoVCw1hNmNxqoJLX8mK3m1MPhsz9ShsWn4fifmDF6xYd6ArTtaehL8B1Wa7xy5f3DAPJLhHJpmgK1Hbkk1JV",
  "key6": "3btRNFfLqcBM5GZajELhCY6QtvWPFjSy1JtibtSBp8e125ZPVtXypwfTxmcERFJ6Vf2nmMv6Vmuq6nT3Gw85Lc5v",
  "key7": "93ojDzh7rMpqrR68P12TaAihcet8kezz4Va4ZWaDJGhL9BUxTsNoJtJDCeQvn2MJRr3QTCDvNKyRCxeRrpkBBQr",
  "key8": "4yCjx4NumK8sqHqKNPdbQqHFjbrsHA7NAUXieGpGB3ApTWZLtAfsZE4k8ppZUJZPq1zYHajSnSjR3Zy7Z3imHhJY",
  "key9": "KY4LrTAtw8baPaVqmms7fDKArBqex1NmfpJjB7WhtjBNix7HC8CYRYK9jSUgVcGk1NPqyn87prUGT3E4YPxMbgT",
  "key10": "364U6T896rAFo6QYh2K1Kgt9fGJR44fx1aXPnAGcJMd4X4dHF78gF6vT3Qe9QrhxhgkJsHAwEPEaU2deqg7f4YGf",
  "key11": "2oTWt1EXUAjLRtqjB3KDCTCg55BKyfBQdVxqdgbmCu6SSMAZPEN59VKVWo6MTq3y1j39Gqb7VpiS5gm7qdS5t7P5",
  "key12": "KJCfZKwdmnRzQs7QLBTr9BDw1pLNgPAVaLez4mwM1XqLQhYNNCVgnWcQdGFiKRJ1tQmxnmeeqoX8FfJm7FW2dy8",
  "key13": "4iA7ZwMPZtzW12v3jkoGtLtrZsdbkF72d6sgPBPsj2wra2vCbBNfcfx4sVA4LyneF4iJjvnDxLYGYm6GFcf2abHB",
  "key14": "54hUT73xYzYRgvSU5QM7X2V5j24Bwy67QgduQFVi27jhb9JKH8iDwYUEGaSRZSr4C7BVnkEQPTYqhvFvPJkZsoAT",
  "key15": "2DuDUqqXLKAKALCSGwGRg5P1oJmcUrvvpaNkzF3HaG31XopxNJzoBwFhjUig834cH1euyna8zd1utZaLhV8hcTRE",
  "key16": "3uhiEZg66xmQvJwcSrcpxWEdUtVRJ3hpWPmfSXeu12m83iN4DSvPMVYphMUN9qg3t1P1ZHigMHrqasBMTX7LBEKh",
  "key17": "5EVZx5ew5X7gKptAe2VkX1V1ZcBFchEbU13gh3WoDnuqr7dAKn2wXApA3jtKfWRMFHriQVW1sWpFs2quW81JAW2F",
  "key18": "TRrULTLbtTCN9YFanib5j352MtTGy2Xye22jfWtqvg6j6ENKz4LEAmi5xmznWZHFGcNXUv1ny3mndTD1TYHmvGM",
  "key19": "jTbb5dq9d5cbxKHv6AmwbzdT8QkfweignRveZGqYCM9ka5WECDXmzdX87BSnHPzVhYkTVLsVaBWGJEhCavXoc48",
  "key20": "3E2bPgsDQbSC6nsAnhqy5SJxFZGdXrfisuwJAZRBTbqBMLfAsLfBxxEYjRi3eGdnt68haWmd4n96izzG5X6Zg1H8",
  "key21": "2d5y3vcGhC7Kofbj6ZjhPPTw63P3xPXvvtZXm84z9t4ZQAWGi5GQ8VEXkjGsDatWR9zKpqF8vSG8wD8Bd9WLV7zR",
  "key22": "2eaqE6xXLDgwRTPKMx8kL4fYtWHmeCJwC8pnFMLDpTFeoYzXy1QYbTCSSeNUDFGzgKVDJBfa1HauPJZjm9szUHd6",
  "key23": "5wpLJcDU36J25ZVmcjXJmruAQXBkVzWta792uMuzpAsG3LwqqqoBofDwAdCMT1vmbwsHHypJuQn8JqyN3Hj4dTF3",
  "key24": "3dZAeZpHEwm5RYJ6KB4CXZRdxqBkc3TspBgY4UVUGdRCMq1DcUXtDy5stcHk5Y1G8yGVtGkCtEcL9VYn27BkZcJs"
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
