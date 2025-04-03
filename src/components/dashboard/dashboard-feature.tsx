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
    "3qLVnnzRsLugkdE1gC8kj1LfbRdfrb2DsZQvDNKXjyB1GoeJVc8ApJkSh2Xat2oAa3tDf1KWtPr6XnGyDKzTaLnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TdqS7ipAs3PYNA4ZYjrX69vMB1H9fezYviUHvft5ghxubGF1kudFeuXfXdg2geJH5GkMkNFaEngHwkDQZmAbUYv",
  "key1": "2yqTquBtG5jZmEpSaUYn3aEnKetS8n983t5rtZhjYmsczR4c3ucHcY1b1vyQjuMAexu1MNS4kHiuzJx4mAWVPF5A",
  "key2": "5KvhdAkAnWWXWPivL8aXuCYvBpFMGNrfHYuBaYwwQ5mMD3hE5X9ovxXJUghnJdVwLigGdGQWY7LKiNzRJKu8dLKX",
  "key3": "3xxjADTgWVtR8E4UiLqwkpWTkNBm9fnNwzM4e4AC2sHyTBmQqbnRRxXVfteDBLih2b8dKzEhCwQw44XmoLft7adc",
  "key4": "24fDC5QB7cf5YowjU1Loonp5igijwX2WLwTi3WepjK4R5t1hFS88HwREwYDtAhzSUrngGhAsmzWk4AWLUF7Ee1ML",
  "key5": "6PHUcHxPQw63Gj9wRkyihgSVWcNzAtBipkcR5yBU8wBpzowNph48fQwkFktSu4fspCyRfY45LYiKETNDaM8ytMt",
  "key6": "4cP577UBBxa56wDKFuvtDcgKXDM15T76ksBGq98k9Yx9fUppKNsZywcNuwRcRXwhCAPfs9QG6Ripvr8LYnhU5axa",
  "key7": "378sot8sdrLvhPYYTeGqa19cJo6UZX9h1L1F4mQYNUVjPppgwvuqWU6WBihiXNMWAyECXByHUhdeKUnjGGDvRmvG",
  "key8": "2bVzHFNJeKCrRH9WmiuiKJ6WzFYZ3UiPs4sJACQ733Hy7sZ2kBBrof6j8kV7UXEDT2Tq7wdzPjuATaFKSHmUabMK",
  "key9": "duMUWWopx8qf1YKbAuJQA3LaYSNhn2yrJrLeTpjL4EknML9ZKyKRixTcf8Ks2kciigLmYiKw99cPBk5QXafhNxG",
  "key10": "4MwJb87xbJihzMSLMWZYfu9fdfN5yN8YpLFxtoQ4gqKXJocjxK8k5XDAZZo19dHh7KwwMpuoYRk3xwAyzawMmz43",
  "key11": "3BAnNnxpyX6TKeuTYoAgJzCknrB4gBEZjMeQwrU2CNRYSsdqX7eqAN9g9KE85mZ9GQpCyfJECYYsnndx1XgFQX52",
  "key12": "4YoPS86mBYF6d1h3MKbT5FCV3Udd3vMzQS2ApVRq9WhxTghyDdPnhvgQA3euG99UYg1v8kTwRcK4ernxe9SKMqfC",
  "key13": "5KQEEMjAUDNkvpCoFk9aSrTmuASxVF9gFSrQcTYnaVZmBe184Qhqi3ZWuA5pmrJe45sDhfaRdHhLpJwSKsMWinhj",
  "key14": "2Lt1hViSjzJVDW7bSPp3KdL8FUpMVhSdXVMLXp9MMAyrUDxZ5RtBWDm4MBJM5X2EZMQgp5scoDPq29py5rVfdxYP",
  "key15": "2ccPreTyoD2JtSdmqMXsi52CXkHVaXzevweTn9i7iom9d4ZVjHD2ce2JNnv2Vr3iXeTsYhbDdVFvpcvtZc5vT6Yb",
  "key16": "41i2J3zrg5LjBfpGRNM1ErNn9UQFXwcSsFzTsCRHQiponXUP5BSydjwCzW5haAd4juUqfz51xRGnmeb8icLE14NR",
  "key17": "4s3i6L1wPJPoaR8DwAezyg2uJJVfKmW6TXPcAUTTTquTf3of2XDxNBj9tRH256HVexVV88NDCpcTKKW6S8s7Biyj",
  "key18": "4a5H7mQcseszYCpC6AHAz6ZVnuAiKUMXUGYjvDFsCghtxAotbJmEVyzJL1HpbKdfm2XUoHTKRyWkszNfhf4czrX7",
  "key19": "4CfwU6kMYJRZX6L1rga2197uXkh2og3oEB6a9cqMLHMW18NzNUjhjcgH4UwwsaszJKWiHjH4Duvr9yvvkuMA8od1",
  "key20": "4dvR4hrKfjQwNkNkUaFfRvKAWhDbGUfkAZNLjGekm12AUccfSrLv6BRz6Zn3hd97VNnEfPHWGXMfUK9cKHk4Fwge",
  "key21": "41fpaWrL8nFN9UZqFEtiGR6Fpe2G6trMaZdnPRgyvJqitL47wMNXkNkyNsDyRfbo1aKiXRqb4yKzJB6grfZF1wbZ",
  "key22": "yTZwhBZLyvTD2siCbnvUMV6xUVk9KfLzmERfYpLGmyyBWVtzuVS8iBNK7yonfyk2amvL2b8zR3AoSr2ZS9Z5R2E",
  "key23": "27FQQ96Dx3WGiB8MiXZVEKEEQzhHpoN6suNXu99pibGpeAwjriGant1JSf1C3zp6wsT43FRXJor6zzGkuDQjW83g",
  "key24": "5vF7KHF21yo8urTvM7Ai3eHxKnFisvDJjhRSRusT2cW3EQpDf2RWspt2y7cVjehC5XDaLnVsLLwwEg7c9kAQXmVX",
  "key25": "2M25QcwpXchFhLdRk8h4485cc9B3taQQPntbh4QziGmtQuaCagRqjgeHT2yQZWTo6oUA7L7Z94723UF6PrMTUYXD",
  "key26": "4WpJpQcnmHmhan48M856U4ciCjxWV8KN3NvYsLkL3nof1Vs63UcmEjBSSSNA5UKhzri8iznYAsJ9rAqFMFfmebaS",
  "key27": "3vhUbpVtKHuot2tr1Md7aEehRBHiN8eGuwjNJhkrWMQvggkfnxzuWGLCQtF63aXaahS3rszvRFiJaF4XB6D1cQre",
  "key28": "3k5mWLsAfVt5JWqYq9FrFJ1Bhn8EcCkcX5Nbz2hhF8TiUJWgdA1Vc94di5XBE3BkEUyH6wRmVEnX5SjSnUEHSHdg",
  "key29": "2pTXcFXT77TJAqVoCANHGZQEFkRv3W47ARSBbnGgfPpdLHN8LkEH2VrkjUGextGSczTid35rGP8yvdvHBvgZj2pt",
  "key30": "vpZjzaVwijUkm6PMFak7wAsrLT7kVMAjrveL33y4vS17NDgG7QLE5AVZeSX9uWXRDctKZvWci774zK1skyaC4cK",
  "key31": "34X3dni6VJVcqCCV6wntD3ZQJ7aem1HnFJWyUXa9zBH19Upe5rB5HtZC6uiyiZ237W4ThoMBGsBMjSM2siiJAqyZ",
  "key32": "5nmUUsbNCeCPzFgXMCYtigvAjK9N1yZWMHiT5z7zzKWiCtsXDC8gAdtuLBApHc8Wz5uFCKqisarURfE6vgw7HVzq",
  "key33": "pPv64s429NjWfUyqH3r7VFYgV8TjsfEGfbYME7xnHMphZqwAhfiLh5KFdNyWFSeXDsx2fhEVbysepf9LyCiq8Jo",
  "key34": "4JkoAsHS1nY8HutMFgnZuva1NdeBSpUs2TTWekWtBG6xiLiVN6LwwaoeFSGtDfmGhjz9f4gm5orF2UXK99EKqnwh",
  "key35": "35SM7Rcv7iFEncdHNib72jtgC96N79QymhjAZjBdN6rnfMndVpQzmavKr7zpzw6qsM7nNAcvpiH88KoQxsLU4MQ1",
  "key36": "2poDqfHQafRDUVWLQpRp6bXLi8Mq4AVXMszSBJrTRSuwRkpSGSMZ9xXAxsCQJBLiGzSPi5QmTSi85UGxxRouG83h",
  "key37": "hsZHNKaqemtcCGFVCZXps4pF8xMm6kBW8Vt5Fx5JRCah3A19pCPdUraKCz1BjDQFmz77iuVNFcHZbx5XKWB2Rsp",
  "key38": "4ScYn9SbgbM8vVsDsgFk4obqiM7vcYwNNsQf3ymNXJ18wS1VmJ5GTZ5FpZt1mMxJXzNRtUXxCLHskCJerDsRNpxg",
  "key39": "3MGqa9Cx3L2k5QHb5Sf51BAFRQ5bewJAWgMhxQuBwj1SDUQthfFjFofYQsLys9aG4Etsw9AnTvUDqBjbKvUfeVbo",
  "key40": "5uu3MLQYecBACAAWFfGkooDox4oT81zaf2aWYEmfqRCLuxzfB3pGkJPkTnU2N4FZZadbKyJEhde9FqtwW9uuu5pK",
  "key41": "3K3eU18zovUT9LYxjPKwzZD82YmYfdkY1vXdfegFNezXzaiC4zup9JD29uGFSXbhuqVniMyVRWKWUy84pLrFdiEQ"
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
