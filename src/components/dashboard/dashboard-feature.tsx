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
    "5gLMVdwuBHYmYfAyJy4r7qqG7d9VmdUPiCSgtZiuoRQHB82AhD1oVk67ueatfMgjY7DTJVqQ79AQQ6phiBfBQpbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rqy4FTEgc6sD7b6jio95z15jL3GijUsR5Vumsq5a2bCujJJWu5xcEJsc6ZPKijL39esfFTv5mDUFYPTUQjGNtxW",
  "key1": "5sLKLvRnUXu5ySS2VJWsgv4XL6CCTfhPQLpyUi4DsBeqEHJTHtQ5Jx1cu38t8AW7czSo1NVrGZNUSfTbxJBkrS61",
  "key2": "ZPFSwEAg3o2qd1HTtrGnRWzAMhj15ZrkD64syiP9DkhjLNu6jawd67mgTze2krkfrvaCmeeUiyaVU3M53tNQdeM",
  "key3": "2tVF5srHT2RwfuUpoamsDQrTueWVRtHq8w5CJiV5S98UJJRFrCmRQuZauq1qJzQq4873EMf7uK9BZwZZpYxANmzR",
  "key4": "DTjxujz9EZDP4eNxdHECmo76K3ndbRwnUuQ3aXpcuer3aSDqDKJxFjZAudKN7TFVzVLZCxScZx8FKp6Rb4AGwuN",
  "key5": "2XURVF7uhke2aSYSgQ15cUFKhEaPzF5qLUR2qUiAwQt7dmTugNJor7ekMBH4dC5sENBy8MiP5MRxt2hHmBrGCHZn",
  "key6": "65BLuUm185z2XoBWrEToM9afekDZKFvA8qjnbttELvPrRFPRWWv3Ey9fVYuFyyCyH1eSQjjZUMBQo3b2eAvBcZ2p",
  "key7": "3f6vYQgfKVtEpAMfCy1uhLaWygPXmbUrrqwbR7UTpLJ87Y89zXrfmmRDv69qHYhiCP9pRAP7a26gEAYt2e6Ti9vz",
  "key8": "3fMwbqJtHDVbspc5K6BrsUbQQb7SyVEs4en5BvAxeTX8Ah1GaJsZqWjDE4og7HTBMyNgU9J7jYeACLzw4aX1Fexu",
  "key9": "5wLfZKMzSySPBbQQ8oudH88F5FabeRgKEBvRjyUZm5N1gFniz5sxBWdtMp36UW7S85Yp3wYfmjgfTA8SnuGppELa",
  "key10": "63BmZKFRTY5vnEwjkTh9eEhhkAncfRnhFBZMprt7t5u9oWd7UFvvhXFAzWpU9ov2RZR9WCtby6qMiWtF32CnYCJm",
  "key11": "4S71Hyxwx9BnRKMM3W6ga31CVEPqYJ9vACETvTzzsMgHv5aNENu76cQXYWzSwbZgEsm3srBpANWMw41mZuQL17tL",
  "key12": "EFJDX8muqcdJ6X5Sn7DWwiu4oY2xZ2YK25iRbLbvcCrKJD7hQMZHZkdg9NYhRjPaS4HG1PhTsxRJHzpL6eQNWwo",
  "key13": "2dY1tPPircNj649QZMDceonGpmshHkW17ZG5eeVNwFMccbscK7sgppCgWoeLFZoWFQuNmDFmairfs6qsp4DogkEX",
  "key14": "3dswdJvLtKZxeAaneQZ46rsLf36HYnwgc99aYjizJ1ShKDnutSRTX7AaNK9GvUhQMCg3i7kcgnQjNgYrUk7c8dA9",
  "key15": "5UBAGLUjkgDzveiKPMQD7pV7tfdJpNRzUWjNpgzEMSXEkk5bts6sy2pAeoAaPsPweWA53zvHPTmH2MpGBaXfh9uQ",
  "key16": "5hsLAxmw2fQ8WsAKxZuAwttsyCgSxwYZqLhiP1sgi9gwYdL5EMHp9cPiBb6PzBjb2T6hk3mqynt9GgpUb7zdTmtX",
  "key17": "47Toujo2nVw8SsoEd33cU8SDUG3kuTvsv9sn4y7HT61WDwcUP11jP6ibhWueLW6N2ALsi2krNVWxv5RcZhSA2Rgs",
  "key18": "48JDp9ZvT3iHyqnpkgKcXrFxavVwkMsJkbm1SxSjP1jXSEsjXxkjsepsT22eV5fzdk9eC7BUUWpRAwTpBemYF4fL",
  "key19": "5F3ju35A7a5GU5RocCrCXDk4DXTzETaZuEcWptPhaMDhQZkKVmrT59dnijzzyFtLT4YDs8FyT3r93TEJPFuM78hQ",
  "key20": "2bDVnTJh6hzqnrr62madK9X7syovV5UGmimCownWbtoNP3yG7np4H7wxEQPs9HkfTS6Qs5nbGCtnDBC7PtYugXma",
  "key21": "62mxqad3boTsjQVUqNhhwzxQiCmZHfssGunX9xG3oVYfz63KJtZYwNa7xcET6Aou7UkTx1vCnsuaD2xLk8qymtEB",
  "key22": "29NfhmGuc5c7sxwc73yMn6KsMdFzeAjPXEMPcqLYAzvA3UmxvzJUo3tTo35JmJdnuMYCEdX8MzkDLVG4MFTfkKD5",
  "key23": "32zVqUY5MBYDf5mEzugoknWftaqT4Gdr5Js3EoD57UgfwbQG3jAE29U3TEd5vQZzAPuuLC9HaEwKgi58q5Va7Mpn",
  "key24": "5ctBypqDVCpDaGFTFjpTmuY1N1ZR7gVyokQzMRQvHfdoUnAPDKVtPYToueXsRJ5yWnVdgkUwKhki33rr9Ra9bTJt",
  "key25": "5eQsbfH7FsDNJLStAMnx3kgzNw9iXVUhcpfHLPPpENyTffKeNJEkGLknPE7KuzV1R3cub9TPWMFYGuqMVfY9A8Mb",
  "key26": "2fc5ofWpy1V6c3PGbi4rzkCUCoCPzKcBXoR15s9XtduofGTH8RAzW7DA1dBw6DyD9BFZcynUP35jErFWirB7oTho",
  "key27": "243MDoMTNUqmxXsP2ez2iiHD4S554MxPt4nzsfmf4bM6tHEe1ey9ZZjowMwGWZjPA2pHg1wcD5mgRNTWExiaXwto",
  "key28": "5521SZWQam2dgE6UDi6VzVmPxAZbDgHJZSeHdrJGaGewz2rG9eHt7ymsp6Bn6Pb5E9yFZNjn6qV2pnG2RhXeeUEB",
  "key29": "4omWWMhc9KbhdHMfyzB8EuzsdeBQ7anBWtVbXDfHa3MaKmDqKjd4BWNc84cAmG8qHYrrSNkdP1feZCu2QXv84QU5",
  "key30": "2kRPnqrPog77xGg67Z7ErKZ9x3AsoAYKyhbXTLWZfy5J8oTSHSyHBr6VRUBtb9sf2dnb7CqvXJ9umXvBJ4dJ8Fnx",
  "key31": "31WBcZhfdJZATvxk653wHwdHuk4gAaJz4hWHwsJJjanrkipkGDNL4F8GrUVdj4YJxX2Rq4TXfVvNcLA7uTHfq1dL",
  "key32": "2A8vR6Ao9C9DFX93hJc4Nj7H5Tny3xVm2RTmC7FG6X3iDK2rXtJqocAzxCeFKJ9zzdsVMKsFzFhWEiS3iw5heFbG",
  "key33": "4RD1ToeiVQkQu7CfeP37rTEeCJJfobMf4ck1kzPQBwZbZdRuHXqun73KKi4x1LstMQPhuPG26tSAP4efEwn45pef",
  "key34": "2ZLW5AeDkMgUmQw7RG7yP6phFwKTMxuYkqLiTcYi3Jo3rk1fhTUfJAcsF2MJVdzmZUwQvaoC5hXfw46QFowH49bZ",
  "key35": "5AEZrnCinRkzA5fCjcj5T742T6XcfYW3nZAaqwuhkGccdc1cfjK1sNvBPNeY3yjDCa8bdL56SNsmLCAhGrkgBE2d",
  "key36": "33n6Q3yD2KH9tkcTDi3rgvPfW3oc4VrDKQtph4FaMVf5aERM47HzXHPnZMiiCJ24xAdVz37qdB1hnMiLkw9dnm6H",
  "key37": "3BUFu5N5szLqWoaN3AuW8EwJvDYh4BHJ763zqcPMeAFyHqkQX9Cn9cWyx1nY64SUGJVinNk1Ho4GTc4B25wKQnWN",
  "key38": "44AvyfAULhVm6WoWm7a4Z81gtqGs4P1RCNyoY7RKdjSyuqsqPExpWSunPhGwJZYssZ3u4HQ7ZBYYDoqJsyx55AsA"
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
