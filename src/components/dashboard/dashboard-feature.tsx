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
    "3zV7nrdFqZE2KFymomPmt8ZCuU6HpUYaHpbpbFvgc1Svt92gc7iVpTftNP3UkzUpGmjMqwMWwtDagyed1m2YvNqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bUaV7pBwa5HPLLYgMW3KBzt2VWhqpL5BBPigo5PAxnUMYehvUve52wtZqc3VTDdeQ6yjJPvRTKgDj2J99PguT1r",
  "key1": "26fiwRhRSMuhtf7ZKRw1UqXyEfEWienaWEBsLETN6H1CNvEMmtM2bfrP9Gkx6UqCr4FFtxaGqU3rWdbtWYAP62EH",
  "key2": "2J4GfvoMBPJaPH3LuG7vTbxxbRTjWZQY4QmuV9Hx1ZyCgsoUHGHMmv7pMYaQQtaKJuEznmvBNfFaJCLJHE1iHLZg",
  "key3": "3BhRhxTFyJo9jHA5rEnC4qq6kkahoVDauHr7TNB88cDPQVfh95S7zQ9k6GFrqNXrC77GHNbfe7SB229WP2iaDGJ4",
  "key4": "4QHjTP5sJarBnrpuMvy7wfpr4VTzqkMi41Cyjzgw5HKjKuCJ7LnedvgttMFQxZadTNeodnieef3czPnCsVYCzske",
  "key5": "4pB6R93ykdY39X2G2tu3DLpZoq3hSD7VxanoUPCRBkkPR8qCLjfGpF8BZrX9jehNwbFTyG5LtKcg4nkT4k9xvhMy",
  "key6": "4QHHXVaGqmaUoCWVY92LbdBq41w9kUkvXBRQWN8HdL9dciFxjXXEnHBLeGkhFJCrnNhSB7y6tetK7vBV7sktxHTf",
  "key7": "bDHHH4YmQxmTihPE9i39GnNXEP1ETnok7SNpo4C4qWPhDyZE1i2Am8EkKuJRDSdZa8fCFzNQxXi5hMBxanF92BY",
  "key8": "3A3735NPdvmhG2MKhztiqpZ5AvEWJKFQt7Y6AG2ZykU8XzizFeadQfcTQvSvChk2e5zEYP4Behcu4Sz8sYS66tkR",
  "key9": "CzGc3DMd7TAD32JcVrJQfNLjpu93AiKQz1h4Si6C7hy1ogNpPYJrvaVpiqLmn6ugKCMfZoSjht1dYphQThpis9K",
  "key10": "3WUhSeNR6YC4KeBiKkvw68G9uKXr3BuS27TdHnXe7Yve6MRBTYnmQSZdytR9pqgEB1MryfUrLdZ7BGDT6TMxQ6dt",
  "key11": "5Uz9mdCRzHT2pCEJBywm9zzcYpanEtT2XGZEhTpYi8XqUarhMh7jqyuJvKSu5wgmN9kDkd5oLRDJsKa4JWLXF1Zv",
  "key12": "2yvN2wGQB4FiUZ2fyny7tWpcNN5uUAJBjcFc2u7YsQFUmyi2cCWkQjGqA2ry22iXsM1b7fPMFkHz8EUZgAQRX8hQ",
  "key13": "3WXopyJWWi5AT3WcVge9ntDxw6v4urRLpkBmnaGDqzNdUcXZX61ed83j3BJhFz4VXntbMuA1Cu1W6M8dRRZGtFLZ",
  "key14": "3n4ca3GLLNFngKKWpvpDMf5CJu9RV9fmd3wXFoRi8L2jjzJTG5RDqnpxNBnmdY97wxhjEVcY98mqXvbETPupDgW7",
  "key15": "DVEwn55f4HJiT9sJeR193eM3BzYXdkZsQhPTPp16nxdVSQZuJ2R6hxdLEqAKALUd2MDE888HEmYqv3rG3ubg77K",
  "key16": "4o96xS2NizpAbxRg2kdkjLQ3H5KqJ6eNZbNwyDoacDPx8ZPzm3soFM3jE9DRjpUEuSoPhcYiTBKL5Xh7dP9bYf5U",
  "key17": "uQoyA6yyktKaPxPUqqyoFBNKo1Cn8qqp2MuLwiVZTqNUeUCZ3UWiXHU5qhxtcYi2S1m5ihpwccFAar99ZTnSVbc",
  "key18": "LHgVtzYg9XKEFya36T3fUz621AuUMhMdR6Bg7zjgMgdj7T8W3GTpcW5DAXQjXGuqPN929xTdq2LzvdjiNqB8YSQ",
  "key19": "4TiPQZRMzewbAUrDnZhpUmWsc6imKcaTy7DFvabADEwbbL4BoC3YrrqPsoYcm7LHtr5FKCcmowaW6LTvRZrouNVJ",
  "key20": "LtCkM5VU6DWKfev7me3yepFx5zBp6WFtRuxCZuxmjn9pPDKURuDJHVD8vCQtR4TAEPNYNTqxo5hgkZLZQs6qyci",
  "key21": "5zT2DSWcgB5EJJUCLM5RL2VG6MCjxFeN4PmvjZoQnqCSfF1T1qgP4L8b9DaEsrCvNabXVjwRs2PJa7BG2k9MRewY",
  "key22": "2MrbRqPwZ9uLG87pjxx6PKqwNbm5hK1xCVPnLDiRLxLccdg8uCTQZQfMHg7xqHe2dT4kvZ2imZoz9BubqaGBEyHQ",
  "key23": "4DQkSPEMvfnu85C18s63j7hE2S3DGWhJnVpBSVgZf8dN2BZ9QUyz32Bf2yGeaeLdUPEsVm3g3MQ9M4V3TYWioE1v",
  "key24": "5uAGMRVa2KVYwjn8fnrvGp3Hyaz1jjSmz3nzcS1DYe7JjQxZaCT2Cc7jxgY4knLqw4Y42PxQpjA8cG6JuK7H3dvH",
  "key25": "4tCQudniyqV3YfTrsgALfxs8HaWdMrQ36cJoQEa8JvP2KsQ19aYUmJMmYFUmeg98ta9rh1MHHMrZRt9bdXcEqukz",
  "key26": "2pSk7p8rgSyNbkM3G5ugVjNTGTAeYcZ4XQyANGSoZwrePCmvxrRQFYnMP2RTMTezyTZKyuHfGDj7tqKhc3pxhAqa",
  "key27": "48dRwrgoNekutyQ7TPKezbx5UKa4w1nm72nk5XriNZ7S8eobHjeB2asRUBpQYRquM9nAywQv33bxAKH1y2nQdMGV",
  "key28": "c2ymSzLzjuWerwcK7LCWgTE5vYdQ5Hy4xVAmiTiVwVouLnDkFEHWC3JRDJq6oTk8BmPq9SJYk2sMvMKz3RAYmDh",
  "key29": "5posgrqk9Nwz8kLLWwVz49jqFWUaVKSiMFNcxBPJgWdRveXQ8xUVTwhNnKgUkcLbaZFZaVWGtHYNwVq47AQtYbDR",
  "key30": "54WQwWCbWPzBFqAYseD48DMea1KwwDCzdneFfDzyAKBZvGmAnqfctnGTbqNRSp9BkcxT78AcBvWhk9LkDrw9QQdG",
  "key31": "5fdRCkBxHMYAFPjgrEfCq4ba66Z88nLV138ZA9bo1Xk4tNs2DJxVygcox5jvGvqC9fCC985XhHvR9PJbLNpRhkMs",
  "key32": "39tdperqnDLvcBou3xcRWZ5xVtHZqzC6VMFgH1DAzB62qgL9LAk5PFqwHHVWVa33mSVKEuC676JA4JHEQ7RniqDC",
  "key33": "4rB6DfruVJkVb6XcSaxLzLdU7ePVsxowfojW3ovor3F9AtCXrN98N38rvvk9h8bJXwShVHEXYdDEnVS3xCGX7L33",
  "key34": "2jKwx5De2qahWxrXsZbGb4AijftwRZBPbFrgui6qcNxexxAnz44qcpqDwEYAc3pbexjNqzf1ewqvPhwsEsb5aJBu",
  "key35": "23xULGHMcHbZPJ3vrbbyaQVNZ9QQiCPh9jRtZzmXoaYLK2vNH4vtVoZH6HKo9mNmg2bPoUL8ggXLsrKtaM7vdczx",
  "key36": "4oYH8TQaAt4VKWEfsbW3LWCKT5D9K1FFwo6Z3aw9dL685hMYAAiMGJe53kAPyX43XG34kbLTPT8yEPVA8TyjTR3T",
  "key37": "3S3YQpGU9LH7djPZrUK9oEMgJWsCJnmb77yj7z5YdNwjxgKgmYLBKHrckJK4TFa5MpFaARS7eDvPsftHmnZYHKoQ",
  "key38": "4k7vCzwVv2sUbzSCTuYRiJxuKbo9RJmdafjjqtwQTxvoAoGHyU4rC9GsUqAzsncE46GdYxHzj668JkGC2AowQtty",
  "key39": "n934iK8gB1VyjUspFyUatiUDv8mN3NPmuVXaYCigxdvgedp2vLvNEKqbdMxNnMfyWq8fv1Cqx35G2azScWJDJ9P",
  "key40": "62FfmUx2bHbb9fuYJi1GTMfqwQbmMdo1CLeatXHTYxK4MvcknmMKYpaHQAC9pLx9FkKEKEiZtkBn95rt7m5YoXdC",
  "key41": "5TFucHmRQPkvjrkjNfTGFPTmJzmrw2pEHxNiJuo5RC7u3qAazjigRqLV7bXAULfQ9DQfBJ3Tm3ttgNBz8cScUUYg",
  "key42": "3gciEcvJM8LLcXPDvsFQZGuviZMTcucZpyheEAv1Ru4nmqijE6cVkBiX5PgQM6grpmQoD3iEKuE7zpxyoRAos392",
  "key43": "c6u61MKcUwCQZN1pMPM3edGPzdL2zGi3eXAcysiAqGpbdThpLQxJiRb8et3pDfyd9qvsGJMFxDhfvXKoWEw1vU9",
  "key44": "34dNYq2e82H5tYW6D26G6TnbpEMErnnTARXULZXt1FiSDvg4dH8Si67DLVCtuYuj7mBj5DQo9HsWw6oVyoXvxRMx",
  "key45": "5ufc31UZYtxU7LmRsE9u2xt1zGwMZDuXFvPo8XCmAeDwisRXnFdwE5zwCikb9eTcUdVRmaJQnix6JZxHYFqKoFh3",
  "key46": "5znRSZ6A6E6DvZ6jiYWT4FWasVaY6HRiXGRxGhh7Huo6psYRDvnT9FNc7bkENjjnQN335xw9qwmWcxfJZhm53uC5",
  "key47": "2wAzgAExHxCc485AdVrdYEUtH6hC7zJ3eVCxG92mLr87WJHUxugwrQmF1nDv2xiJGEFbHoWXezac7mk6cx5Gq6s3",
  "key48": "3a9ZVogtt5x9r6CXHdNMFe2j7gHe4fLvhxNc9JozWFfjrDBUoGcV8eqVJyVF9cLDxYg6McgptQYygWke1Ek6nhpe"
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
