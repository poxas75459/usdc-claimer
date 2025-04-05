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
    "4s38vRtnWTCToTQXYzuhczEDui3ZyLs9EtRP1faL986hwi7PnYTpYHgqDPWPhApGfKL9dPbEozv5ndVtGSQSpVKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kzy1TXkMY6Je2mW16Atq2hA4z7TUTwYBXpS6mtjQyVmvzSMsZ9xrKHGXckgaC5MmLHGdZXHsrUBnDSv3AmjU4oZ",
  "key1": "5zrF35mugAeDvwbQ8VCNhoeqgcSabZ1sHhtyLKZvAxCh3t9aLYeprPBVYYYQG3wKxtZ7h7pvv6Nn8mHu8ygiuy13",
  "key2": "3gpnVMLf61KMKJQhS2T6FHGiwrf59KoJQMjAzkixh3bRXLP54GxF3UR56qPSiittQKE5v5EAvFbpL9tLXD7JPfTY",
  "key3": "465ccRo8cRKxJYZrLKmQ7EUxiMAF9qdMGTxYLQWyjV5npN9GioVdMAJfSLNqwk3kAf5RcyY5ZgqhSAjnyGtePfAw",
  "key4": "3DBKhCh38UuuiDxwnbXHreiKMe5h89fi8QpebgU6h6dSjX22DDEaTeCiL6wmLdGKujc1fya1SVYytRj8mKzN55WM",
  "key5": "2PD9oVKDYSzrRwKL9pVhe3vgA3EDjNm6mc24jimMmAnsGrifiAQzG3YjFyso5eedZzWXA9ux4PSKPXmdxqxe1UGX",
  "key6": "WX5GtU4kZnSq9dxTPsQqEj4316zskprHRQuLYrJ56uxonkcpHUyj5xBgTT5Hzv8zXDzcsmeMqSjtAmT35SgMfgA",
  "key7": "5SEXuELnfW4PGkkSVuevUwjHec4K1j7gZAUsvN2hxedX8rsGk9GhJmZJRQ31BKyzHrSHTNN5th1bC1bWfu2RWqVu",
  "key8": "5bBA5Dd5FNXpXZMchEVWhCt7sARTzLdwsM4Rkp2VxaawF7z2cXo2JL2YWT3XJmJm745uDqpeFYD6Rj2NjWR2aAMQ",
  "key9": "N6f4vzqyfcdzEVcmbZKcqdQmcEpKcDLPWesEKeckPBgooRNrmE5Ft8kpEsvdvizJNZnmpwMTTEvcu9k8fTwyFoP",
  "key10": "V7TRpVqj5hPCWvQBAYooGNiihv1GGKYQPQggZYA2xNUZPBR47DDPhmLjNnsk7Du5R5Fd6zA3ib78WCY7q176g7f",
  "key11": "Geh1v5zvLPm1tyWQQ5ZxAV4qrH6ivCyPnh1XqKKWktL2zgRGXJoM3khsVhuuZc6EaQDR5ByKsMmm7jTXRbA5iKg",
  "key12": "41Bxw3N31LyKSCGoZVtdiZPGDiFmMGDkneVs5UrEyjftdKrDvqNvZrhwDGoXMcygFqt9Vaad2rQQBAzWjvk7wGPV",
  "key13": "2UdhHpZApPhePoXEyFqU3cE69anWXtLEfRRsBFbLnambgnULFGc7GgADWq1E3d1M6nQVroP8UzMq6mwLry7MH91p",
  "key14": "279vPHzdWeXyGyiEpyXZD6swo3cMxSd7kgvYKLAdLBftTmBL2FqeYhjcWrfs3UBQvT27SfdcXuVE4X9cJQDmnr7Y",
  "key15": "56Dxsw7yHaGQC26yx9icoyxYZLctHPszK85gdDULxgBHGrsZC8Tcv6UFE31h1yrdMt1GBEGddguwFd7qfoSmbq4Y",
  "key16": "52K9stVTS5p7RTEwC1RxKgDrbE2aDJo6RG5jfzaBTuznc5Sjtz4VeA29Vkw42EfDkJnDbBu3nqFXb93hiSic6dyJ",
  "key17": "5hSgC4SWs238BcJPEwMsFf8eurjXNWhMUUpwdZyEfvvfDhZtpnUbYnkP8gDG4xmnnCuBPy1TFQdKmUgRjYmEXC2F",
  "key18": "2geG88TnbByCsMWN3fFHpvdH652jcqY6XPK5naTwLroxA3M8EZSKeGcttYgPWb6hz3ph4njZ3PuZLxuEUXWmVsMP",
  "key19": "17aajEfvvNA3tzxrxcAbLmMp47pqo4GsiMZNx5u2FYy7PtxmoHn8VuHWT3tFsqCdbmcHRnbndubDPpiVJ5VaWvZ",
  "key20": "5KA4V5PkStzZg3yCBXCkhoQWezz2wsiNgJNaeUkfkstBZ4mD1cw7DCKFKsQ1h9sj5QLsbLAP2HX1cGVcUvCtNgpS",
  "key21": "oLi2HqjkW16T9bMEimbCnBTWsWhyTybifQAuayn6rpzfn97dYFy3NLSYZEjdRXL2KWBbYKo5EUYMGbUAVaqSFkC",
  "key22": "5i8Eyf6a2DA78vs197B8NQprqEFVfSggXNvvGUcYCadaJd526LKCUp7dMXLBoRPZqc79jBoXroA2TgKeus8NaYjd",
  "key23": "53pPVZsuJBzCR628XoZhpseLTNgDc5gwBaRyfRHoa9xDvhWFu8VoR1NxW1vcsYkDzQqKfvMbz3JUWJD71qwXxzSG",
  "key24": "5epXS8oHFB3HgFNda6mA5m4GukJzQmWMqNcMykgZTEWfW2tEGm19BhtnPKMUs21kPtTy3MParuvM2mnYsyULkRFr",
  "key25": "654Rq9ZNCoJdfpSKGa76w1dVvd2H4GccWoRSyq48zjHCnPSHEvXWvE1Dp7ii2qPc7WV9boLFoA4UARjHa7FZQEmj",
  "key26": "3dvdEXJY2bbgbf7TFvrkhd2ZCSsZzvzXftdXRWQwDUtu1vA6MpF8qcNACEHo1ZzWc1rP5Azy5J95JvHq4p8f6Hyo",
  "key27": "xCWC1eCd8mqFrWrMwhCAvqLcZmh2os3e1LeXLNexo7coc76GkjP29W3CeXagBtn1fdGgJ3fJJdUPRaniRg4CHD9",
  "key28": "5Xe9vpgv7dyeFsf331pegrQmQqAAMgSJ7W4vDv67hq74fhGkg12PTnvbCuUUhpKk12iAmJJKr68YptfwZDvnSRyu",
  "key29": "5BWw9DwLAVD87bhHS1Dm5QHBKWxFoAmQxMTh8KTxTU1wzwjnmDjEqUhPpFzTbENDpP9wARTBApTTiNim7ZFymJbz"
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
