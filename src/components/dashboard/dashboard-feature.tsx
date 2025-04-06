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
    "27FaheCyyMRtiJfDe3ZzN7e5RNQhM8wFEpeyAp3zz6FvX9sG3CWxCTBmPDjzp6ohDPdwo2DFqnxYUX4LJZLUgkyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33z7YxZAZ8YKCpBEi2XuXnPPde1F9KC78NqeV1yqLZCMdH3An14XnxbRiRVxr6kWn3eRiXRX91hNurjLtsC9RLmF",
  "key1": "3noWt4weKf7aqyzrrJ23KwkuhVXK59PwLgzW1axGM7PKoXsT5mNpUnoAfRysQhDvGCtvchvKGCMSvWUV8ksv3dp8",
  "key2": "4kwJvRWcxWnbhjK4soN917GzvKMwgr4Zy9m8so3BF4bq1G2SJZQC6mWG47oz6UHafipdroW1mDHVBa4JEE4PNsVf",
  "key3": "4i1SAWhTzXHbcy44EAiBYuogmRSqufQRxjZtV9YUYWLCHSpKBT2HzERjpNiEnXRg8DL1AEktsYy6sACQ7VgJjrrW",
  "key4": "kzCKGvteZAahBUzqzR4MLfAMFiyuxJkzCpcRvTATiZdnKWM3Tmz3nooEWwgyTKYMEwzFF4SwTu6GEbLPVf2Unkv",
  "key5": "5dKSGTDR2PkqFRcAbr3meDRB9pzJDbo283AQbqbaxx7aKwKx5CRBWdGvqcXsQVZYPF4nHS1gwYgQ2TmSuRXTYZd4",
  "key6": "2aJjvtQjHFqzqAR6B6mK4Jiv6NgTyMwimhw9Str54oUCHpszDe2GgE7cTABH5pHbfkumVfaH4zbDGmdEceuxseGj",
  "key7": "3GfMRfRn6U5aDnSw13yB7HsuQMSdxjx67K2iK6yG2trKqhnvAUE8N36qhktuMbfTnpUGcCvVAJFypytx6ZKiyR4H",
  "key8": "57QiVEK3X2qhtZkbTEo1BaZyyh3FeqxMmTNijRG95xWJAinCUEH6mM66gVYHRBCc9eDtb6JaYjKdZnRkGQarvm9N",
  "key9": "HJXmjyLxmQTd6mRKtSFbvdVZfYfxrHjMN3ycFJfUZTLU6Xves22w6baYWvXw6xTfNNVvgwP6e91oUUfZ8kpTMip",
  "key10": "3hQwoFVcuJbxCHvVFLHnQJyiEjmYSBC1AU9TKBMCA92vrr9EkWNp2HFDUrirveQGADzF2iSN5SbaVYRM9APMRC3g",
  "key11": "25iJkWDyJ3A3tv7AcVscWAJmu23QzRFnxUzmJCbaWL3FXjbDJVKFVy3wwvc7LCcBAX6LDpJ98oDXLWgGTvZZdxVv",
  "key12": "KDuJRQ9SXRumeFiwfG1ss5efEyPoKqXudz4qFE9kBbNo5qpVJxQXwMtJWfQEgczJ4djs9nnpuT4VfsYztqUBQtB",
  "key13": "5vkZLUj3V6NTVVayqAPiNQtLUsDteWtnieCN94e8ULuFt7dZdvpsBMzsDcqNCF3peZg93B8fcdjDosYnbBkKGZra",
  "key14": "5qvBBi8r83feUohnWvHg2KeQK2supBoLcH1h2GWkEuvwaTTXpydT3QEdZDYC6oF8mUH4cu6fRPhPZnkFx6K4h7o4",
  "key15": "5Ud7tN6iAwPh1FyP5EKfpHVnbfB7PgvuzgSswjdczYx1aduYGdWGe7rPZ28HqkB55LJR6i2xaa36FadtywceH5hV",
  "key16": "2XpSmtLuEtBVWKw653fms8PLoZQupj2b9oEVPd15hQWkXEQNxeTyxfAAZ5AJW7GThCfEHSdnq7eCLFauApLW2jFv",
  "key17": "4pBDa8db1oiBNyGYNtRkC3qEt66kktoFvKseTeSLUYyEf5HNbrY1SxUXnyFzd2L8LH12YuqW5RdFmkpy4rroWBcE",
  "key18": "5y4PhXuJ2zeLPzzTbZ7GwYKojP6pRgH5AAGBS4ViTkLzjUFu489e5So9gPhrYXtZrSfwcXUZ7eJvPfxxsC3diKPu",
  "key19": "rxNTp6fZ6SAeDwdEoDPknH1MCpedQe6cqcnDx81psLmBkhfMAYT2dv7p5pMt1ywT5dH8NVuR1ot9ZF9LmxHPPaU",
  "key20": "4Lgn73uVEDnrvDKM5E3VCoKihLruTRPXHAx9sAZhywgCxWXF9aPz8eqznDRgfpwpAbvdQFbzi221vajfvqTWvVXZ",
  "key21": "2EEiYZfH8nu2Ly3JanJ1umteDJJhvuzhJjJgDsX3srfCk4TGAmf3yQgCKy851bP7XUMgaMzwj1SGNsvv4A2MyZxZ",
  "key22": "3c3NCCCyP5zUZDWLwKsmzo35REeEMBK5DiKkSLmbC5Gj3vZJn6mVsJebEib6jWhg15wTcrPgktMXag1pXgJ1bQtv",
  "key23": "5R9DRwoYJ86WVAYWAY5JLqtC1v2Uqo8MYtxzACJLMKqJknjeTQ9W4bBkbEHPGBA5w5PLnkZrf4w8u32Kbj56bwaH",
  "key24": "3D3U79vdRVY4ZRWidRpDyfXn2uucvbEnECjvEGfLspD72jp5Fj1J8PhBfo9tfudrfKcYBkpwrxsssWt3HDkGDysp",
  "key25": "5NScomDYgh2HZSUghcMXeQ86A9N1vgXcZQXaZV525uaTkiPCzCZ5knuntnXZhHpMk24kdLjPcXgxQA7jAvt3cYsB",
  "key26": "qagzVrLcyLAmDdFxTDpw3s71vCTf8Jm9toNZDEwbiBev9sXbanvDComxP6rXnyGNpR26cTcUFCApcC5VNuWsKTr",
  "key27": "p8FJdtf1dwQdeBBuvTE5xthMzid6cJ9mMFKCVvmoBDjc8yLEtSYHBjA4wF4iKRX77BGuXoo9j1iQ4eHUUYAxaHe",
  "key28": "4jDGMALEXneeNiujYAvmRDt5bq2nqVUkUjQoQiQfDR6QiiqMqDYUsxSViTpuPHJ1RpZK5aghFazPM3no2tgtQYsH",
  "key29": "4y5VcV7Uestys2UYbK1JiEqZwesGDNZ8jtk7xd7vidyC8G6fngN8pQQcFhCeCofbz93k73mR8JWZsud7t9WG8A5E",
  "key30": "4LVvM64hgqNxURXmPgSRDoKp49ugRFbsecWmv9nF5Sjx1eVtMUvf5TxG2Xbe4LamVET57Cw5rkKqkBkypAwVJYqz",
  "key31": "5MegREDaXa7qjEh3dR1y3q6ByfFQzLgUqKfbaHCWLYrkmt49NZzimYWWF2jfgySXHE6yELnTxM2ovJDF8uob7ZbU",
  "key32": "3SkhiXe1D2F1nNwSZ16mk5BpiHwm6RsJGJDYourh41VNm7JBJHtTVd9hbQV997VZ58VaYYaRjW9qW2EAwJabj25b",
  "key33": "37cFBzfhS2b6bRPkvGovaHzStHqn9Ss5AmjoMLm84P2dDt8K15GpqjWEvSvYeCCt5RkuTd2wztwjvBSaR1jyJaYD",
  "key34": "4AYwBQ7L4tYkYDvKZ4ziRGf9svwRU2o8AbuSGguJZJAgXhjpYefJoizEYtemSXGVEnYuDYtRhEixoroAEJxwwykr",
  "key35": "4nGMpTmqXHw6ebLJ2mTwsbHKshKpYtD9Jr9Utv8KTGqZHZctQjJwkMwNhNmRGT4eZfvHDRDwRuswEdoKa5DrGmbn",
  "key36": "i5RoxCyxuriLwLLCbymTwvr88YfXdNZUMya6sAGmHKAB2LDQqnN8y5JsCNvJ5ecdGz5ewXkXREWL3bTzWoNsyNr",
  "key37": "27aidwhSS8vXJURjLA5vUj1vRNEGZ3Z2qnQh4gTiUhkCEEMoq1H9KcBeDUx8dePd69MEMmCe3rzq46UtH5upTEPG",
  "key38": "3pQqwaLU6XDrR12fngUYJXnQ6R7p5ZbUU9qtAyqvaKMrq7dmJsZoCu7gyFswoKkvKvUPRP1x8g3YEsk2cYAoiZXu",
  "key39": "2ML9mx6rjB83k9Bw5XXxVLotAoXk7yWKCG3iQhPvxAAHj2t2Kp3oMGZ4sg3Fu8ajHiFzQPPDJBGR2qiEu484nHVx",
  "key40": "49crB4qmwtz6jrKYqH52CSSUvFZQvNrYiR49Zsianvvd717Yzs5zzDQmwMbxaNPA9wQj1fx8gQzNszTnVQFYfdNw",
  "key41": "cLvH5fsnZXMkUwYmnvwvEMkEgRdtLhZbhjqaxfkj4B38W9EJoUQSdyMXVozhb8fX7e9DUARAMj4vYAKgiY8sahy",
  "key42": "3DMNcAWccive48AuCsCWngjEm9G3mtyh6ZEsRgByJJeRxWw9qtE4m8MUtFvTWGKPXU2uWGqTy42ea4yoQUscfAAj",
  "key43": "2JqH6xrseXdy1d8SeJBB9sx3rZ1CtNPLqpn6aPezjtQ5JV6eV3ZcqoFX2aqCppA1dDRS9viCarvnJuTuuYn6AjQU",
  "key44": "4obB5axVHWZNhu3ekS51xbCE4Q7jrvGmiQjS31dxVERMboskJQJyjHhgMbLKh4SYM1X31ztz6A7KhaZkLDrsRMbn",
  "key45": "4g379DDkaaZwQTkACjs2S7crJo8d9a6Fp3pG513CZn3UwNPiqsfi2EAhCSZTDpuPD7B5x83GEEgstJWVoC55mLDr",
  "key46": "5dsniKRm1fGHUcY1oz1o14Bi2Bu6DQ1cP9Ed6TM2FPVxaWXboaUu7pjQ9LWWckRuagXHPdWXqQAMJDsrnBoQ7xmY",
  "key47": "MX1H8smngC3XhFazabY23MMdyAVTBZRdMV2UwwyCYhWGKD8w2GpwAHHoajs4hn7QsxSyd2EGAbnZX4gQm1fUiuM"
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
