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
    "38qwEnBjuY3ezHQjjLTsumtUdnkE1QvyqsqWnHd7pur9uNdopkXyABb7SEMgK5QeFJhe1mRRQmBMsyjGgotGXR67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HGyygzNUijq4kLnqtP3U6g5NN118gBYQR5cq2DTpjCrZpMPEukwxUCgS4aH5bxpYRWcdZx8rC5ChMYwx8FxjQ7b",
  "key1": "5k1wR5NqJXBhN5UYQ7ZBqyt3mY362Ltgw2xwFGXofGmsi21upCqzXe1fmSxmUJxL6wqEkqHid1w11xxvnaFePaNV",
  "key2": "4Dp2Hqrz4eCdSqySrpBYfs5uAEvq43BgDRzKVcVThjsYbqkzNEXg2YSuMs6TaodyYgp1kAWpNsyAJxADkAkhbx6X",
  "key3": "5nGDbBZRc2M5FDVrhTs75ywKQrDhdmEUvsF6bhJ6tvXGs5het4EHAbF5RCKimxQoXRrnMbcs2a84t7CLaoFgyMHg",
  "key4": "44LRxJ9CnvbrwapD5xrgMis6gpuj22xHn5peoedaPVzakGYrSFhgag7cKf2nDRXe9W21eoE7kJD4PUc48P2m8Z2k",
  "key5": "49d8fftZ5A84F4XkvbLRUVXxehCmNc1WS4cnTu25uqHZn4ApPysZAZHMD8j5mDbY8fCd98dU8noniPFYxm6CcugX",
  "key6": "2k9VpajZWEeRDMo7TeKUypVb8w1asecjCDzDmaNTwrufQLyxX9afYZkPNT8vQb2vzgzcLWftUUM3FNoRrcgjMTPv",
  "key7": "26jLBrfGsmxstPDm6yqv6HDRsYBXk6ArnWF7jZnXdaNUMnoinznd9eHFVFvD4h6jJLp9Q9jSUadA1MEAKhuXDfuc",
  "key8": "3cpCTQqS5UZAqVLq3WV5bDg28ix5GVLKaGtNcAkBvykTTPRvMhCG6WNAbmwg1Anxzdoo11NCWqCNgiqq3unazhzy",
  "key9": "45GCiECSjZRxKrtjqPfBXxaRgKcY6kcPXS2fdBiFLeF79MapgeQLwCGaJuqTskHBp4DVsiggpALEsZW2XBHNzX9A",
  "key10": "3XQ57G6SXFxPtxecsm2KQZZwkM3h6MM113gAf8YjcuKEi8RfHuvuLrrS3R9j3tBhfmPRYJsPnpRWnrBr1srGuyjD",
  "key11": "4jiZSisCfDUieENoMUoqKrYGLhBj28e9NvHdJQbKwhRpcXJvQiHM27rK5JTix2cAXV13qbLLi14EiUafvvE9RkC5",
  "key12": "2Q8woueUUSzdmpydsMqEvCdNSqYzsgj6Vz6W49st5Ypawqb4YAJSNLfuFLuPxMsEBJxgDK1PPMuPGZgMMW2dVT2T",
  "key13": "4T35uphvXABwA7xarWuGpeT6Ap8TgnBDNPRRTMmLLZCbv7nN4F9MojbHFifq4DpkUxPbvP2nHmt73khugRqonhsr",
  "key14": "xAHVmx9fprrE2YYGj6a2ndVkGbXYv1vFVgGmuXaM57qsni3jDWQUjEsGEdgnHVkB7hgAqTCos44HCT5fiDqCV63",
  "key15": "2NhCnVt1pShV3KRGtUyeqNzD9L8T9kJUkWi2HMPLruKP6euPDzpifzPpFF2LrU4wV95EsCRiBM65mX2FamhNU3fb",
  "key16": "63mYPzYmyTcKKnoj4cXgUqnHjJhC8MYy1SwEqYHDGTjudacdCeZ2fgGMrurt3gdVhpeLroT2ziPxs3K1tYhv5jZb",
  "key17": "3ZFDdsCsJBxVFiVWw3Tgvt2NKvegcFhx6BKJyLHURHQSgBg91aTdEYtC8V3tGE2b2q8ee6MCABoPgyU7TAKdtFun",
  "key18": "3ccjDuHsjcHMdFWWPXzrvYdVoW5WzdaxpwtD8CFg4R1xVKKe3XRKtcGhb712eGvd48fghNDJ6kDLSWhVdQtcFad9",
  "key19": "32VhAxpX5puXjNzGCZkedr13QJPRcuu2ZsM1GyXmzph5rVfDvzRvEDvyhVRSVotn7PXK4orxscaBbM46rdeuufx6",
  "key20": "2zy26eETfE2C7DS35LcqA679hE4f6Y1trixRLgRbUhnwvgupQa2ctyGYHgCp6fhoVcUqaUcAQ8cYDKSGreiXsyvs",
  "key21": "3fWoT3tMJ55mvLxsqWHXG5MgjqLwMDsSAXuaHe7qZtJ7mFpLMgYnAAs6E3SzAo6YhahhjxZe8XdPdzWnxghdBnzK",
  "key22": "5StbLL8ReBjGKctR7VKy95nGrtTa4zqAgW6Pq82caQxPTdEWUSaHgeNaz2YkiWWP2ffiiNTMJqE6rEPDWa5UADES",
  "key23": "66hNMTwfpgRnHezdFAaGifYsErz2gsTqoTuAeq2n3L8Hxpmt6NCx7xVZaTshjEdAy8gSPsfLJ4Wb76rfKJVnWGbw",
  "key24": "4sv9Ksde3yU2PjcMHUkQdktoxBwJmGsG6vmZ8djuh8oZhepqW5gQEdEB6c82uLjnQEMikxnJ579siRx6GDttJuX7",
  "key25": "3NaQsqEsYVPneY2mZFrUoKPiv52DxPgbupmdKaWKYjWsLMAcX4zckYFKTqJoB1SZ4jiaDiiXP7cPbtoJAUCDSRqC",
  "key26": "21NkUGmXa53U6kDTQNRLWrRjLKWncZTyUjubKnFPuzo2zrB9V1otTcnZZUH4Xq53zysxK7pvtpJcwjVDqyA72B8N",
  "key27": "LyLGKiLJSi3FLrApZfYQ9ni4XqSE7w2oVxnRkgkdkRCMMDwbyrzN8w6WY8SJGQPWXFmpGT7gTodqSHW8rCaaAiY"
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
