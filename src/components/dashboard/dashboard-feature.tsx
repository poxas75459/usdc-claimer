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
    "4PrXSQmKzLuGiqcb43xxWsdkumcpy5oDRL8842Hyqz7BtLZsoEk9Tj2BUioDbWGBFuoCzhageY5ag2NL3w1bPuUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n8hmh2xHnUs1FddeyYAWMVfhezPYaWV7VKGsPFQH2wfKfj2K2bHEA1vX7eoqWwXwuYu34NesGkbcEW9v4nra2gx",
  "key1": "2voTCbfimRjiFqMrpqZXArn8rfctrtK7GY3ykTcyo7XyA3UHJjjqXXxrABgmfQiCRobXx6oEEkKR9KoWoBB5kPme",
  "key2": "283ZtPy12NPPs4GibA1qdQp6s1dTU2cQhvonYEhZbuyajoki3G34rXYqP7MiJabh91yhJ7wuJ2QRghoJgHPbKpKv",
  "key3": "dKx2a31RabmGZYMaerNSoEh7xPpyZgQzLyEaAZj32z5KJPzKjNSiaRhjyJ4LaQyzKFMiGnbLwZjiriHfcQkMC1q",
  "key4": "5RgGmqnmrcWqBVvHXMogWqudvmkW1RA4tjGvxEG92XhtWk5qoJQJZKd1bcCekzNuLtWoikhqdDEoqCU93dqKPnvR",
  "key5": "54qqKQvGyhqFLhgHTbbyrx1gqVfcQAPAomfFHPTGzSCCa6kKaJQp7kmg9Zm9fih6ToXhVME3fP4B1C7TBxzapNnk",
  "key6": "2aKtcBFAAYDKan1CRhp167RDDCndHM6LkjU2MREZNQLwuBfwsiYqV1tk7zBdmkk1ZSAyzUg7Wu9Y41qnpsmqQe1E",
  "key7": "67YGFSmHmfqhSNqQPouQmkJzigXiDvk3z7fUzhkQxxBXeseoUdrtPrVKkfhgfiFyTTKfuM6oqHe3UBf2u1QfHPJX",
  "key8": "5PX9cSRrWf9eV1xUuYgi9ik2z3WUPXbWooswgvdaZnashnpm8f9x47tD736ZiA1CMSrdkXX4xPp1ECN6aPT4KELx",
  "key9": "JUNhFDd63fqGhYzaTrFYsSRkka3KeioHgkesxyvYqGdRYAHzP3ZCUB5ECagDZBDSX9esRYW7WdQCe7FaTfktVZg",
  "key10": "2gcCZfYZSW7RmhrBv6ZeuqYoDeotjKnhPmWprtczqMAhYujx6eAC9tDDJHvkmyPWzjTybSqAEvVTavWKsL6FzorC",
  "key11": "3MwCRUGR1PPz2AhnErtWjvBZ1q61CqVSiNDTrqrBvVFDi7Zkkp97VFhGT3DRn332gB6gfkMxT3s9FypomE278han",
  "key12": "FZ72vo37xvqHrcffCtbMNuURUi2nCGhUj3ogSBLRS6EEKhbHyCWhgNPRxdNXzmh987gKL8ufdBuiqpNE4nbWA3w",
  "key13": "5dRP7AvH618gPpiJU6R7eABQmfEfcYC1qiPbFHab3rXxqTG9B9iXsxWdPeq8B5ajyz3ppiJqd4mbM7frEKbzG179",
  "key14": "J5k94oTVBPSBQUC52hsZUVD7TpgLmzT6yjbU3AMGmhQWZBkioofWSQ2UTBmc5inzPAib1eLaRNcJedWmTdYgo1r",
  "key15": "5SMDrHF4KinQ1UdiUWKCaHdDkvcsHTq6b2hmY5StmuSXTbXeW2ZLiEv6t4nbMfcmJTFrrjyBDWzhcXefE1ukNjnt",
  "key16": "2w7D13QrfLAyLrQQGNTXS7PAofZRe7cFhu7QNVgQ6L6EX4kXMET3bHwPPMuv1BFBTWQssz9eVjXDuJ3QdJTSuPW8",
  "key17": "2TsktaWEXt3vw2y1SBnjD87KnT1c5ExkfygrFoMQfx9FbiPJhnpbMBuBajmBP44WsqmWQQrCqEgzypaZsqp9AzJj",
  "key18": "3i3x67iL4S1EeE4rr8yGjnTNtZ1kE2SRSyhJoRvKVMpiDSvD6dXQ7SoL2EAabfeGqmWrcG2nGmYPm2dw88uTKCMS",
  "key19": "QeYCDoos35hG2YFAxpyaCQwCYRFGqDidr57yueUVShKDuyaVbYo9QieZFF5HuXkAsV2wGH89WoNcWZjAD3PGqKM",
  "key20": "3Niz17ckPYmvxu5uYxN7xrBC6Fh7tz35YC42PKnPAjfUKU6B9EycQcb2XMF3vqj3j5wX1Kug1gqEJ6vXZiwZuo8y",
  "key21": "3Rrn7C2au8Qpm6wC3zowck3LeGVnVN1UJcNQMJdDXRWKqnWSHvXcLv1Eac8uBWRiZuGiN48yY4gMjk8sxhknn8YM",
  "key22": "4M78HT8cuKv1CZCRgXKyVu5nUmCLqcUPcgziV9knx4cEmLK1EELRZ8JN22QPGRqiC6mz2w8PeKFKxepMpGq1ZJX9",
  "key23": "65QJB7D2aF6qQXoM9uBKM2KvhopMKNk72j79qioAf5tc5MjJnbenaWuv2u5aZJR6gA6a9texyNhTu8AGMqf3Bxz1",
  "key24": "2XM2ZGmu4ZATteEBA1S52VoAsYnen5kCNLmMa6JSeQQSvzuL2eKrJgC3DFKr6mdovXrfJrRyN62HivbqVEVxiSN4",
  "key25": "2Jtoudew6DoqPh6ExaPw6C1ZKm87xjnz5g44raDg5sA8Ljckoty6zwA9UwymV6ZHR25cRVbqXayhh323ZLzQ7Brs",
  "key26": "5Y5u4vyLgu8zZuzKNtRwo98yA4RdZqKYEHhBwczzKRspvGxhXAhhb72PwYsv7K7vXQ4HjxDup7pgzgiPXiSFFEeM",
  "key27": "3V88sM9LjXsrh9MgAa4yYAXbHqorYHHuHgnzq5VTFqBgHAPmK26toJYbaULeAw1739UzycdktfGRCf2K5Pq8UQgs",
  "key28": "5rWpxrouKWyXXnxwYzEgqs4WRWSAFmo8z277Xw5RoJLVbobQD654D97KffKR2aqJHzwCKwUC8i72nBZCtAd9pcmZ",
  "key29": "2YjYHNthPjucbxDs2Xid15QhwvY1YPaPsU3TbjGr2Ar42N8NLkDfxCXYj65WnYWD2KvxELKnNDytvPRHqb1UTLNR",
  "key30": "4yz38nbycuWJ7Uq7h9EDzpWaMiLDqqbhwMzHWXCS2YhAbD3RNyVxq8iTyG2AKdGyp2NeDU4JfmeAy3g9VSKGVGZd",
  "key31": "38D5QeBkun2zdUNQPLYDJdU4zs8mcURQgFcXCznz5vd8DayhLfk5TDzuKRSoh7Rgt71EHxXKky25RVrwTkzVuoz9",
  "key32": "rDN6wTsZqNSppc1frH2j6rncZJa76wcd9Gw7gGiWtq4PD7Mf5CvmKwxYHae3GxhXnZuf1tA1BDbi9sjaWSg16vr",
  "key33": "3yN2THQc3YPA6Gw8Ch92FbvRBWnkkLR2W61M7i2LuFnA1kpUzDfe4sJqtFsAj2bJyhKKnKMJGaiCr2Bvx1g5wYVy",
  "key34": "5ytib961SFab6MvyphmkLsHpMYmATbVM28tY6DwYojF9uGnbbkWWLiuDfuExcjPWu9VX32gtzrVTm5jAtx1JZNJc",
  "key35": "5yL4zPEeJS4JUj931vpTZdupYPigfPEwfySsYXFzdqEmD1XGbh2Vuj7GTRsiFyLSpeQbUMeovLtkWDXU1dN67c8m",
  "key36": "449SntuEgBKkX9oBFeeDU3Mie8u7EoTQg16gMkqghCpA99GD7HYevD6dia1x5o2gopVf1dsN3f7dj4J7RQVxx28X",
  "key37": "pcJ8B7czKKise8wFQYxSGWNAmUSimkKyDg4h8HpvNqgJuznnQpja6pq8PeQgK4FhmRGeLHzC46V8fAm6FyhxF83",
  "key38": "2CTXBFb7nifRK8MXVdbbN9BiCJSjt289voXLkvFY719PRP4PUpn19XejCFyyed4Zow3VqE8Eyh4i72v7pi2rhFh5",
  "key39": "4yrFtA9J7X8MJeZxFBTu28pDD2EkevrDaGstSFK8nh3PSqZB7LncMCninwdaiXGdYNgBEv427rXY2suhtEngRZqb",
  "key40": "5NjDe7gr5wiE5V681ZpqPeLxcGXT1id231pUGye61X2dvwxCioYSZ9JYMm4yagx6d8GrvxBfEtKqHCAm1izWetu8",
  "key41": "3TYziV2e8D3BRk2DpWS45j5S5muoxfm9gKpgVYc2sF1kEjQ2pj3LP5Xnxkbq3tQfHYAksAcAwgwnB1NnbFoRgppg",
  "key42": "5EV8BVzNjShpERupHa7tgngrCeJzkqT7xEEtYsMkUUCgtA6oSDVye81XcJki38QKAJcNEf6fgpCq9wtDx3fKy8qx",
  "key43": "5pir4V1dzEPhbpdE4usiN16gB78WcTkxbUcR9i5WvZuP7JHP9prktuihpTPEAnsvJonWMsMgW3tcXpTdZb3S2Vgg",
  "key44": "25LkNft688dE2ZRBSzYM1rVHjc9pgCpY9iAuofuA1Vwq2LFvQ5Lv25BZ3bqMAX3YpG8jBrzZGBrkwUKCPY7kQQU3",
  "key45": "4EWzPuozpVczT9SqnswSSGfGWvsuuLWZuD2DTtbwWM178Fg14RgnFdQrYJir5Q2GBj7FeVC8pFGZfQRY2gX3nXZu",
  "key46": "5UVnjV4S1fVpE7hCnZ2ZQ6f4DsxTEYJVVtcj5U3FGeNPcTvSRES7cbr79uJHmpWLUcdvhFiMtCeUTwJ3ziD6TZjR"
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
