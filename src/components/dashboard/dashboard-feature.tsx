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
    "4GUH5U9vj4unN9n24Bg9xzyWBu8eNFyvyEHWPG6QTZZKQr6eDbgc8YD4cndGEdi2LmczGDxqrBzmPgaQWHzM7m28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p5z7BQj4fmGBFgkmmMQYi1rQVBybRVDt5xXZjewuosvgRH18PSuNLq3jAnsuZQAB14gzBDk6HzXo2MK3cfXKVXk",
  "key1": "2fY5JMX6aCBRt8esxPaLuV2bDABgEyr2iirvJRSfirCynZTDwmUTRRfksaAMeoioCv5HfNvHSE6H7KXthHi2KEdg",
  "key2": "4VhGGWt2NQ8ctixhFoqcMBMZVbm5e9bRZHNKsKvkmY83LY7UKX4tVk8ZYk7R2mgLtCXKZ3WFi3rDg7jyHZpiKfWC",
  "key3": "2HqH4X1DKKTc3VDHwZMAeJZaP9wWivycvcKmGxWFowqKRkX2D3J47bkL2AH4p4XCzrwLvf52p8Enbd9PB7NR3cvm",
  "key4": "4zbsi6k8yWtjnkwiaF1L1fJ4eec2GTzLwax6dp49F7FcPYiqXKSdPkQ79HLcXNcnPeyKDa3kehFeLMEQEVP6sGND",
  "key5": "3etY98mbL6hgKeeSC3pJPPUFy8JTfN4B67zArj83PZJSwv5NWbP9srmW1rCbGhFc8Z8TfvH9KosdvxhZLqSFwtrQ",
  "key6": "2DMMLcT8DiNidEjyHzCc1MH8avSWpDKLFD5wx6bk4F6Gio9QcerbxkcigLqFtuqyTHarSAs5QVSuuhZuHa8MoUMK",
  "key7": "53qHdWSvdbY9Xzrxr8E2oMXsMEPt9KLPVk3ztTvYHKaDnki7BJds7vf7DUYrcjWGYeBijj1Bsn45iCCgBzSAcfKG",
  "key8": "65czvNAKeE3NtLH7z1D2CmzfCgw6PAM6K7KbYMrnyBXwpuS8vkuCQDwDtdfU8kgBySqGe1GeU5HicuwaPtpzviKb",
  "key9": "2tb5ZK6XEP5G3ucLcTrWSqkdD5fDf5aX725gS86V6C1Sq2EegXzm15Sc68kwe93vrWBdWc1fBFypNeHzy3jUdXhx",
  "key10": "5YdyeHoq49LULwTy6Qnnei12HyFFe3BwissbLyAKRDegfEoyDRHeEFvoiB75BJfjvREoNVDQwSGhm8qrL5cMt8Bw",
  "key11": "6iJpSBxdDvfjKW8fbmsDjmNn8KUQV7yBNjRt69EnGxDsa9d9yvyFiv5JJqqRn69MB7QAqZFSYs4C7kTaCYQ6N49",
  "key12": "51Atza5XHLbVxUAcef5AL9odPcHtsoZ9Jk1pzR8Vx2tCefrJdYxppqBM7eRnnHRuDG1K8yWnDQYrMpMtGzX1WHvY",
  "key13": "3Xm6VYM11QgcsdpJfaDcEi25wGmrg6BeUVRAmEqfuvTbpUkkzygZprtYGiTJVnhHr47VQ444RxDfhSWTzpEJpE8H",
  "key14": "4WHnoNVyxCA959H3XnabLZd4DdMVE8JE7mRNApo1F1MLWhgN29gquWseYGL2FAYFKVQtDoBJYbvj18HPSMpEmoTY",
  "key15": "4w3Z7AF97QNrtCxKcX4Bc31Errn41AyLV7dwdMHKuHzpdiMDPtQuDSLLKMpX3FHZqpt73hbiqYTs1tkcQGQLcm1v",
  "key16": "gFhsbQuL4nRLPPhuEjXsCe7WWi1NXbcwqYpknLiFEWEUg5aKZ2WZCD47dsJEp6gNyZC8tMgABR21rzSCS7bZXXy",
  "key17": "5VkZZxnSngihtTakVTaTppraYgUUuPr2VgvZHWeLu37sUYU8X9h96GWhbsjjHc5Pqpu5zJi2YKtm1A8TvSUt7XoU",
  "key18": "4zHVtYwLnMA9goV39vmQ38fe2Y6KPrNcGeRJxDM78rNXK6wxHHNWa9grPYFn6TL8tUuyfgZxMiqHRWZ47mpWN2Vo",
  "key19": "ieZXFssAtUwKhFKEBuVBqs8uk6Vu1Zd5FQ677LiKP6BJ8hRghSWyKDxSvDFjkXZB3LTpxFMeruQSk8HLGWDenBD",
  "key20": "5mCKNnx5ayqTH7ZSNtLvznRJW7hMoNSSPHRFmEN9S2JTvSuREFz5s1yhQg3Xt3YEjv8h3m8jR1H1Jihqmr6eJ5dA",
  "key21": "5iVvqDtBAWbpwZHBuqYXdccidk9EK1eWxxRR98xBnVYDEyPjj4WjVsQgvDEGgezDD6MVBPxuUB9CwxMYJ6zceVgP",
  "key22": "4zwgrdYwZJvvdLE9aU4Npoo1MPsJM8ibaH3rG6kGchUhP1Nmonqde8FviZnGc2xKdABUgAjc982zCK1dbv7kH7PE",
  "key23": "2ix7HQf656ArcK3vRSnqhroceHzaS7MYz64MkBzNwSKbUKqhpZbCKrFRdVUhA1CSRMXTuzyBn8FHZo3t56nbHZ2z",
  "key24": "67PUkmfyiDrZZ6dihcdY4ayfAmTST9BXwYG2B1g8skQFpkxkyXNsuqpyhUCtK3K2vPV48vP3JeteKxQEZvYYDTfN",
  "key25": "4rwrn1X3cra5ZuvGhUXM1wkQD8RVwjC8D47wpzvTSNJytzwiKC1w14wKe64YqEXHADbpFER9X6seceRjf7wijDAK",
  "key26": "4cjHM7LxjMLDdH5JKCV8a7AZksm7MUF3FAZYpRMFjpEF2uzLRkeA8R2Qw2VEf7VLL4hcjYyUiCSuPiuh3C49PofD",
  "key27": "kg2TiF5cZPaPTMjVje3BHQW5e3tWXbpdYw4wjGa5pQJ3UXH4MVm7JEWD5YBKcCEAnxXZnNWA4wN4K2Nmu7VAkgA",
  "key28": "3gPG9sKcNdJEqyaXPoTEEBZrz8QGDBog72z4WahHVsgNmvjNbQvFWHD2W8DAaidmgXFrGDbzRyEoQMQKaeUebVYs",
  "key29": "3qDtAWbyYPzTSGwY6AzjpbknBXwyajzKV4FAz3yx42kZg3GxbhDKtWSXYCfvXctk56iu6bkFEa2xj2ctUprjvAnJ",
  "key30": "5ZDactS7kFvBA46RQtWPRupUaRuWAdnGgvSoyPkBh12MhzZmhF3V38vE7cj3JXUf8FS72Z1fG7vASieYBC7NJQ1P",
  "key31": "3jkuEyLDESjByqBCPnjRv2EDnLxN9zN6bVFK8Tpt7mNN14xURkpAg2kyppHSnXefz5mykh2BajGH6Ae78v3nVhDT",
  "key32": "3tvth6y5EBNvRHaMqAfH8qT3MDHYt3ZKkDSUfbB7tAcaEuRggfHWT5zRgugZUwqvzod8SAzk3GbSYGcHpDqwSRcE",
  "key33": "3uzKYdQYb4D9ppCXT8zjNtBzs9LiMSa732X3Hz945fYXCuViAkPzfAFsRwtB9etdDML9xtuRcnWem9dbu7q4JxwE",
  "key34": "3a3MERevExZReiBLeoj6mFf8zTvMHxJpuf3DgZzEaxvoCDGqG3Dmp4XvyLTxheT6MkhabQggqsmvjCtyM45YiMEZ",
  "key35": "3vAa29XkicASfJcYgfdFyEcfW1DMwtExCKirQfJ2hReMPqJiGFVsXBSRqfavyVdk8b8fz8ibyktmq5yDj43Xk46a",
  "key36": "2wmwias7hy5Wze57ZnkTBjYcdfz8KdJF8vSwtbN7KB5Z68386tsb7cYPe6Pe7tvhnqV2QSegxQZ1TfDZQaeSDy28",
  "key37": "3zVjen2Z3vFnHHc2LZU9xFjMuRSnymMuUuLib5FxoLkG5aJiKMj4WNnNSkE6WTeJfR4Xy79z8LEeS4vS9F5kFB7r",
  "key38": "2tHzEcq7fy7j8jbyFWxuYLCQrA47CVFrJyQdsBkFxtFEjJY7aP6GYrFbm31ZfL4sL3s5fxJPbgZr6DuyobRAuw3N",
  "key39": "dVbfPKjQoxu5cDtV2E9ZGjNqLg999aGzosTtYA3Aa5VqttTZa6ZeyoqM36mNpAs1tbRbHm6W58hHSZ6qFUAVxEn",
  "key40": "3VM8AixxAZMzrB1nvxYA5X3psAd2hE23yA2Vk4yQpPoWC8zHsQB7qM42XEJG41VUaViQYhi54TctAKh7STE9kGBd",
  "key41": "21aj1Dm4DntWFHYSaPEEx2Yh96GyTUoMo1m5PQjsVdYDCpZ5Kc7CJFCE2AXzss6JDLaNAeMhKbvS1M4uycF62oMD",
  "key42": "5SqFWtFcLdtJepT5NbNfJQP5Bbe2bLaP3LqYwRxbMDzsN6G7zd5tfmxCBfqP2PVrbU6MTxyWh3S5bnia95pX79eR",
  "key43": "2C9ofGkRp6Gqx6R1zKrTcidXmpVMbdZYLTyHHHjsDeAezNRo8hSqv7SwWcgnHYjNXsNs7zGGKH8EDVWt1qgYkW2V",
  "key44": "5sy3vUDnJoQZGgYeQm5zTqmW45ZdekignTaH6sEPrJLEMRnoVbFE9PHMhMidn4ZU5H9FYrW77uuSye14fkUZ5nf7",
  "key45": "aeZzN2BiZeqjeLvmY3oyemTfceVGXpjxKdH3i8rcDvXvahmAgRsi7bhtAN46mHBYbVBWidLV7uzc8cfRNvBTa7F"
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
