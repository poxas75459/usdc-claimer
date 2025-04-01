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
    "5vjuoesefvxDe9jpVa4Cve8cjxhUBowXxQwNS8pCa363G3JTiV3py5zKSKC1P6c9LT6i4jdKo2zB6XsWsJyYGjzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "456QnqBehJ76EVXFouCDxoq9PYXMN1ysnjVAZJFEX3d4VA5HBGkrxDh6T9C7G2a1fPTadytaxomuibyH8AE2PHNx",
  "key1": "zbivXxNbXkTji3beFqvKRSoxdhajRYu7XiCvSBCSE2VFYrPKbmN7Ns64z3MMUCHjxxZktd3nsws1Ewstvqe33ne",
  "key2": "58fkak1arp3sPtgvrBFL7oo9FhD1TjBPzzJth18XAr7oJ3FhTpxzaAG2qxYXAJNv8m34nVavFxQbxjxERMsdcyts",
  "key3": "2hg5o5JTs5D1H2utYEpffwbEcgS3QqfrpRaLqLX9cgJAqRDbXNno994NSv88PuS82a8AeudBaDefdrSxHsHrkdCi",
  "key4": "PC2iTgnseZaKRcFhf7McXo4vTGobLJP7EJvzeci5QxLLRoMtU2gPrLhpr2zMUA3wdHLLDtZsbYVyGkbgJyia72U",
  "key5": "GFoJwvESjk5kYwc9tbZnFkBGUtLyeCmMpMqdPJYny9hsGsvzjeHd6nov2NGG9yDuACfHBqjH65MjedVKrS3BZUe",
  "key6": "3Ljd72v6pUBDDknuYMpEpqGky9zDfgddL1FqhgjEQurcCgndwgecEqu14kbZ3kRFebFejqDUYaHduZnzmR9D6rFK",
  "key7": "47Y54fZfLxLpuzEDuYsJjMkwhoCPp8k4xeFLoYdiC9PzqnYk62j4WUfA8QYvpJhhpYsszKLb1VEdSboFgQ3cpeze",
  "key8": "pSacChiwHgk6abJdEgZCQtZzFx4ssHN6HdAXNrGx417ACyBgq9BWttt3xNpRL54RgMQcqLiGaFe1yHsdRhFm73i",
  "key9": "5ki4UZPr4D12T8YEZeS37CowHbtfXcpzZpW1Kzk3eyswMUEjspoqoWEDpDrMkLvoyFXBcsfLiHp7nf7PxJ7P7uyo",
  "key10": "QxwXiwPwK41EVQX7y2ajSjTzfWPLH3DBJcLNjQ7JXathr2jzCj5amWx714bxBDd5PcHuAz195SFRV7jGR25E3HN",
  "key11": "5iWt4nEN3XFVmT4LF8BT5Yg2dNvQra58TEUqFBZ8uM374XMvCWRTukAAWGMTmSpPCDycaYBaXHJTTC8RrNEfHz5m",
  "key12": "3H2mDRzTGAYSkMDkRaWVsdrRPu9pG4dRHLKb2RYvyV9gPVLqDP6qvZsTCa7w6JhA7g2kzNg2i5jvaMRYsACedfb9",
  "key13": "UYo4PCZxRiDELqUaEatVkSaUnNGHU5aQenKmeFfLF2TRL7mYHtw93RtdRME8VhLbiyUkAxBvzr5WF89WxAMRbbr",
  "key14": "4bpnsUfCy22STJoTxFQeHbfh1PY54aXCanjFq26ioR276KVib1vjYuvRUk5ksVPdnRGhxSWWDHfEjpYoXKmoHfkE",
  "key15": "3kSTtgpmyPXrVm1L4H1ouiKsAXsyvRkFY2mQUrAsKGe748tF5AnpoAfokzUpiL1Ns4NMtf1m9VGdgDdCS3RD9ido",
  "key16": "G29C93KLbgzXWbHEpnrTFFxt6BNuJx5ewTicNVzzzUUDYEuXyPHxijrZU1HJwfQjvPv2YsH17KhMnv82mTBdKLv",
  "key17": "41KqkCSsHL6RKLiaHAoCocpdRWJKRAAefu86teMyybDTAtUpR97UPjADdHv488t9qBDgfCq9pDQZ6gQrM7pExnZP",
  "key18": "59TBDu8nfhTW5mEtVpryZ6CFY2K8TRvVVFmqkGWmU7CACAwMyyayQ16DAiEs3huDqxumhBBrgAL38NVB2fR1Gxv8",
  "key19": "3XCKdFhwMMKVKNrchZpZnP9FTAJPa4T2jNbEtfQfZAE66weiMmkkUzFySr5G67ZcJe8vRnupGV7gkqoTaASAr7P4",
  "key20": "4WiSz1UZR6JCsLhnSa59sxtsVHuurYADSqjPUoRyPycsVRVMUZdAXRjvcpTz1PE9DcpcrCzxGoxRpFDTbMwPbMZY",
  "key21": "61wDZ3r4SyCfdNdATKSHfkTxuEJostVXPrN6w5GzRmCwcgZbq8DjWpqk5tzUqawNVJ9nw7L8MxdErShJnYj1F5km",
  "key22": "4xLWrgyLY18C22T87joLRySZwYpDsHJbs8fN5htojRYKScaomUe92hJ4tNwx7KCZt9bkA3wvP8rAaAn2pydWDZUJ",
  "key23": "5WjgVQKkSBvfLmMHaE48ykRVeexmfbYT3cv35mbY4FhsoaE6ABM2C49fNQCJEpMd6pyEGJoJREwBNckAcHczW6Dt",
  "key24": "2ZdVvrvdfUmQ8W1QzMLeRhEagpM5p7zrUMggd3a6Gs1oedZcEezdqPveMLCQcFGzpsrswtkoiLkR93VUmdid1qpm",
  "key25": "2KeYCp6x4REnR4CZnfgziZG1mkR9AWEkZbttqvKxpBz28wVQ8QA15aYdFnuuTnWgGwA69hpYiZh5FCHgAjA6MQX8",
  "key26": "5vFHQz9xnGbCUHLMsQc535pnaZPm1YTKgdxZZ8u3sXDzrmbfQ2496eT17DksbciLhVMEpwDVGAQwFFCFG1jwHWJh",
  "key27": "2rFJQ31huVBr8mXHb6CJTgEnJCXbAFXvMqavYnw3HnF257mrVLUnbXpL8hLfYB9zwijBX9E1WAGWjRzX7R7ZjBBx",
  "key28": "fZDFvH5bk6qSgtya1gob3XC6o7TMt6oTd7Ek1PV3apbRmaDSWyA47mjbnmCpxfJVZhopCEoNSN9wrZTvC2neEEL",
  "key29": "5Hhhs4GdiwRb7emTcKZLyArYrM9fLJ8XFugVVRTeVWeYz4VN97QssjabuDHmzJKRFZoSHwKEqruqdPdwdtYRJGpU",
  "key30": "3n5q3P5j1Ee7tPUbo9TQAtnfRYTYuYYWJP8EHMwEkPJJ2ZQ5xeUkfXyzDcaZfFK5QJr1QBu2jFAWX1qnGmFtTzwS",
  "key31": "4FCpwECG8qMQEjATVZXKRxKoYs9EFYBPg4UpntRP12iCGuPN9fusymxHusaT4TpxEvDWQ1ijsdVRdPPZhqN58xW5",
  "key32": "UwyLP8Ds48CQLbNy7ZmC5eTkrXbT2m7uAvGaR1x8a7o4VHii4y2Ak4DiyW9zMwrzGFND47Gj5sVnsHfbLEa9N1T",
  "key33": "pZMzZSLVsH9WXAB89vwPzZe7EvoRZuf4hADHEGTqhByQPN3DjzA6Z7hqLajRKTMNm3R54dTjgiPJYpXd6A8NmPj",
  "key34": "5jKTPWTugrh42rJZexD8jJM3ADgfVZ7NZhaGp7rsrun7aejDm1MuMCD1xg4gAwfT1SHBUP3erH3nwUczbZjkpQ8h",
  "key35": "3iNrVHe7Z5LUgKpmpwjzL4Fv3MMtvzJh1h8s4UYAneWSzSoXCCGKYeVMQRoUq7mMbfz9tUDusuSALKNaua59SZwj",
  "key36": "5GnqKqtWkkAebhk5wWwF1ysHFNkTYwxfCWqoULTkedBAKMcF1ZWmGe5hxBHPXm6Uv22nZmZvHwrcCJSngDKpwBTq",
  "key37": "3EEMuKRPvyTPY9JdYD9BGKMUj1La7QUaFgGGmDWgvF3fPVaznHKEQMQJzDnYDrebE9WhKryoQCrvp4uUc2obS8aP",
  "key38": "37HDDMU6tc6tpnGMk3axYxwenaFidanvAtjQeMTTwUSRZU6HiAqrR8iMi91Tnr2YANBpYmYWTeiet7PtR1pqPe7R",
  "key39": "5ER1SyuehXWZjhU9q6ByEEQQvTLyehWuK663Wm1RG1jMsZT94XtCb8QCcHPs9DfohEo62sGjAvct977gLhQWh4zt",
  "key40": "2ByvQueUeSJehCsnGZ14CUiWPqdr3TgKCmLrFANUAJCRsBb2vcAofr5NPkrKnxun4PRRee9CCRCQxkwc9TLxPayk"
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
