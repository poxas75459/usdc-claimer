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
    "53DLR2YE7WEtH4d6S5dL5a5KWJoVJSKuRk2auB6S8XbaSsqQ35hLU3gBp7o5GMpK2oPs3QtVNcxvaYFy9bUSUrj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27PBqfjbxhxgxQLZJqx28Nsspnqj5e7PYrWpJR3yJBSY9cZ4koX3UEqM8wQBETuKKgKKXaN6tXaMwGamu4yw4QvD",
  "key1": "4kRnGnEnQYUzbAvAoQn3mF8NSiMWYzbKnVKkbQydQPcGxMiF5hgmZF4sfp8QNuuoGX6zZvHiLXqY7ed5JQxpEEoM",
  "key2": "514HPpWJ1jQ4fbELJszBnyD8KARrXUfDACZVgi3D4NffMPaJTdmkvYKjkZwkbkLfnmV8WcQW3CMjZAUNCYmAna7D",
  "key3": "3qZNp1inc7pizWcf3yvfymnD3RUHwrJGkum4sacrS94XRQY26VuHJ3jTpR1AYR3WraqKbvqN2Pxvos9fvrZLVdSq",
  "key4": "5AUceS2VbVr6J3S5p3aJEXVHT3zqCwtKWmEEm823Dxya76h7ZyMhZksP4xeRBdv2GM8tbMGHev8qtsNgVfAoDEjb",
  "key5": "2WPH4gdBFwu2uJbT6a2R9ipXTTGHpvc1UvFHH9bmpCDpQvGEd8R6trrJGzbQ6iUZwxqSp6vXh2793AJ2ZENewq5o",
  "key6": "SzUWbG3ykW2jMJxcHnCUKFArLiS2cTjr1fMhN3nXJ6sqWkXXBQqJvxNMqecqXgYMqfbZisGDxWEvTBXj7BnTfaE",
  "key7": "3bzpeJyozauF7LCVXLDT1RDxZmSHo4Mns3qUD6WtmAkD4L6dRUVQeVDnRHDHazYFZa3ShpXTn4qYaYVVhxsxg9J2",
  "key8": "2jMNPaVd9fFk8hMeCoCB3yybiidxkMhvxyMCK2UTqHggh5ZbSKLfTfR5nkoEwFNeb9LUBTs6NMgAaSdbuWgWtqAs",
  "key9": "4kTXG9s4JFPY2wzYaACAGh6AT8hbeFmRAEjChaRzmAF1mxVZoCkxnCMrXk7SQwQxno7UKchQatyNUAcMmaZjNZ3C",
  "key10": "5qBXfxrHJ85ehDhTUV8dAg5nQFEH5RMZqtZ8UqmCuZPYJjVHWRy3fUmhi1pwG5nTVByQaSaKdEH3q1ZxnEwZ2bd1",
  "key11": "5ztc8AfpCLcph89PSnAfrY9BtrzZxZkvv2QP14JfYQRdyaLf6531ChZgDYk9E9UHqpiHQCDGTicw5xC1KJUZCGU9",
  "key12": "5rbAUbS1YiPZdK3rx4ib7cS2Z2DqaAqcL4ofQrpjqCpEmJ32jeMJ7b2hps7neJESkWtnm3BiZXbpHAsSNRJ1Q4TS",
  "key13": "2nLZtdUM94RYJkbJLr6FKhGoMgjxAh96GY94JFYNvVcg4nJSBFnxxaYyR9Vdx5ygJjdPYjwWi7js8y76dJhCFXRm",
  "key14": "26F9Jxs8r1LkFqE7v6WJrdBowaoSxFa8cGsfbL1uWTVAshka1N6qUecBmvtYM2bnsao2ZyWCfruv9nkugzPB7HCU",
  "key15": "38fbCJ9z8NmtNCnUgYgDENySZsvSFRDgJVkySMLqeK9oLUnT71sE7iSYqFx3iJ45MCRpLRrFG3G5s4UA9TpbmL7V",
  "key16": "3CMXSJ39t4C9EsUUxCYFJVHT2J7mnsJuVuyT3MwRJGXHtrHt3Zfr3JNbn3Dt8JPehUJeVWx7boEt4Q6UT4w5mNmp",
  "key17": "Jfecgr97FqvyqJxTehf7xta7UT81M25fiMoQP5o2sQSDhsMuyy2yyzsmeZ4iZfSsCqTQpfWHTP2WSJ7GATqLSLR",
  "key18": "41iUF1sHZ6nymbTe8VAkozaiFxPmP9iQeDbrQhxLLMW4xn1wm8Qkc5ZMsy9Xjtia7KCrLheA4u6DYefCvohhBS8i",
  "key19": "3o2DYp8PEyQmTwktmYjk9hScT9JZht7x3UqHbvxQ8WQ51Gq4rwyujK5ykbVKeDE8VbhU9EW5hgNv5EK2iNZbE42L",
  "key20": "j7Ro7w1gD5JV5z6fE9yt5Cc49pon6g8A95p4Ui3v5SC6s2f8CXdL9mR89PFiKbvtpiBxZY47QqFXhEsdrR7iHK9",
  "key21": "5R28zzbXLiaeGobqKdmwS6jAyN8KLBQUnruPRiRw5sytXBu5JRUCEzBuy7V9Zs1wd2C48BjPxteCKQ1NxdDaX724",
  "key22": "5RAhUj1u8iJLnGyaqUSosfqqvTRwiP7GQr4vBxNnu6EdkBMQZX41AfaxC8SnnhESaqegd1tBVJMmBYj8UcfRc8sQ",
  "key23": "66C9MqxcPWzrZmAsLc8G4kaNRLZnfqfMDCpGpWw4Wc8nGHnZfeRfTWTBt6ypKPHvuSmCpnWhdo7XAUZESbqJmL7S",
  "key24": "3VbaUmzmrZ3Zj2SG1UrfdLxB4qo6LjT9YFD4zCajSJmkCfvXEH7GCyBfSdvJJaG2shZdNBnHuMLkcWscD8LWb91w",
  "key25": "4Z9pMKPfcN1CqHfhWvcozDrvFB6fwy2D8gM6tBCqvydmp1PmMEvScXmbeHGDf8hhopznZxkBGEZ97nC8ybicn1WG",
  "key26": "5tx6CEodXmTeXq6P5uyypZvic41XEJMzP1tZWEQ9vBGfrNc8QC8FdXxTT287Yc5QDg7cuQhB9saueuERsLnbJqp",
  "key27": "2HzNmQMEMmHB7G1HXUvcxxGogNvj3nkbNkGZGZ2ushs8Cc1xnavMPy9rmW9PAJywVuae7kLgPHrRioGhHHHRdNJk",
  "key28": "2gyHETsWCkpTPWUaUMmLiVaepHUDx5qC13Unz6Xa3tyM5qiBcYJuCuuLRgeAnxPqWqfUcFzQDQ9jof9vQg5Fpy5F",
  "key29": "3z9bPaKLkXGaSx3GBCcGdvUZzcKorDvoBnboRqUfFuZUXQMQhv2TaMzntRoEAN3thJy53P6J4iH9zTMC4s1Bh8cy",
  "key30": "3kUTGUQ8Waa2Fg2MqaoP4Ch7dytRMuiiQ3gATWTYXbNARrSrccrj1HSywr6ysboAUhcSfeeoAECm4CRkQFJCX6gc",
  "key31": "4HB6NhQrz4h8TRbbL5RFj6GXWyTo4gzk3KUhdCCuSs1eKXtCrt5VaPLvE6m6pZ42sFXkg6eMF3ijFqK43EYSqz1X",
  "key32": "4fYVLsAxXa7CFq9nfydsyNMqxp3te2cUYNviUcmFPEsWTG5PuiaqPdqRShaehKnK6oh27DDBoKAPYwz49Mtuym7v",
  "key33": "4zuGxQWaqbuf5Hmso7tpr9Gc53DS571iUzPcwp9v9ksBcBZptND3X6zcyUSLkGcJcuYud97DeTEXXvGQ3Rcp9amv",
  "key34": "5ziTmUU4i86pxsBNXRYo2evK6bM6y38YqTUkpspYzQKpAHF2Q4yHGMp2RiX19BUp5jpz1aFMBULEBm1fWP8JRpTN",
  "key35": "4NNxRCk3dzyPy7PvbXjciRGWDL3wktJ1zuzXg1NEN5MpCCo5pCCrtFaYC3rxDenKQpcUzjoL7q5ghj2mMtvnbxcp",
  "key36": "TSR627vtVh69JJj8zMVMQQgoA4iGN4mC7BRSBTyREvZJ94G7GoHjNo1xrUcwPmyQig8XwokhBkPEGxECH7QZh62",
  "key37": "4DWrC8PeBs3KksNHQUEuxUKzHMazsEc73bU43x1rhcRUjwYFquMnbtrCyJvTdC96xpZNQgBYsas8zfradeFdgtCp",
  "key38": "63SQEu6ELaneRU5cVBuSVxcchHAw4GbZZgC22KAKYRUL61EHy7aZmC7NqwMm5h5BgJ5hSc3VR1JjW4VLgq6VuCt8",
  "key39": "4XY7VmsPd2qZgfqbM6dzGRe1QrzdaG8fXFg4Xr6rPq82beWxTg48ykqWnj7bKPbhXRLGzXH7ZLE7K6gyaCoEsEv1",
  "key40": "qnVcyjxWDeH6MuE5NeY5i3ez8eQGytucv4E6sK6w4HTSFfExyCQW9ovDNtgqArLTbNqWYVcvYEGnE5zfRnBzTsb",
  "key41": "4qhge4YftvdvDPFZBpAixYqXgiGvPzaKjsd4hXMXFDqpgsSD7kNQFmdAUu6gmE4KwFcVxec665RwqLsHAgRzru23"
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
