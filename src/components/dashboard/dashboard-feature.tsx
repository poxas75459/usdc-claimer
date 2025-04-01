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
    "5qFybLHXYDgns3zybUrVLXDNYkrBHoJefkXeVCZGjt3jXmK89vRNRkRMH8GVm1bTLQuW5URaoXvWYcCQo15FH8bC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mtD832J1fwvzHPW97ijdLoy3Mn13D7QNy6YdSQ1DhsrS7p7KbVFriXPGfgVhd8R4tz73a3ATnUNcJHYeoKMKmTv",
  "key1": "mtwkgojjtiHSsogVDSAFHHgGkACpLqC9U3GP1TCnfViog6Gap8HGypacnhDpFzTzHGwxEpJ1YbJGYR5cuSfz4pt",
  "key2": "2UghFngzJVvyycdGLBfUzMkw6fZVdUvsRR2WtNqp2SZC59Gs66iQjdB8pZZSEHvHH4wRo1RkSv7pEexMWwVVPGG1",
  "key3": "2EavUd7pjFpP6k2eHF3oFFTJgWPZ4VG7PtuDmyAcsdkfd3mn4PBrfeALMDxqqfUDkRFFxXFDHV7mJrPknphTL8FF",
  "key4": "5rbrVN7aWgHu6Ekr11CV6vvL8JmEYcHVYraapgL1HotwV1igQ7T4tDA32ndSmokkT7MyHZJs8cazzCSWnRmnuLvA",
  "key5": "5YmpP5763Y6eBmLxqnxMBQjqW4PymvVbbRRpRLn3wNhE8ziMXDnWyssS9XFU8tP5U2kCzG5HdnMLAtqrTMzEZXza",
  "key6": "GxuiVDLmXWqCWSdEaWo5eDpkMuKn1QoctLGBHNUkYxrw8da9Mj4Jxz6wA7r6JU8vZnADpER7yjTcT8pAmT2tP4x",
  "key7": "4oWWQ8bQSaEKgsP6wRYSmxn9FChgSkmbFoAKYXTQo2S43DQkGzKCe5W3YNLwAyZBVRWiMyPj3u1gLzJwqwvKnjub",
  "key8": "4VyqafDVheLp1D3TVN15R9y9m3svPaPR7NNjVvdkLHtdTMUzK7nvUv3DAriZXTPM1WcG9qp6UtDxFSXrSZTHz4ys",
  "key9": "5DSMzCH1tHoMYKedVZYmXhtEAF68Ni4BBTYC82rTSwd7XLDMWqBkKqFpiDXDmMmaHd4VAFZQXcNsBu2H82hyfn26",
  "key10": "4SDNv6Tm1TiHVHAJi2JjsLg4ii31sDmUkj7h6omCY9wDKoGsHMKQjckwtqtNvtZ37RQf15BowqBVhV2CYWH9sWy5",
  "key11": "qynmCoX3upRQ65h5kKSpC7FhBNVRAKGRU5KdngJch3CfTbJSjSkxLCZcJkya9zNpC1dRVagUFzxRuo9gASfhAac",
  "key12": "3PwDiJPspkBEUVcpmb3GKMXLS7Rf7wPMSXDppwkht5DyNQ5f2zfTE1aRdtqT2MTNPSs7MdQkXY5HUQQkBrbEKrdr",
  "key13": "q3AzzPNVyNoCXYRXJUSgyUKiN6caa6FH3SooH6BRmPLHi64SHf4if4r3hqAeVm5TctApNCVXPen7Es9zukGjDv2",
  "key14": "2eTM1msBGrrXnx9WDCfRWtGMT8RNAHzEuXfufKiKw4k9iYWSNY9zkDTnTQDTXvJjDAeEo1SmSayheFicGVfaxoNV",
  "key15": "2awBsTPcVmvF4adwrv7HHGQTVMD76SyV9i31ftC5v398XvT2vLs3E8fExP1bADe19vbmafnkxPHVGsFX652mbw4p",
  "key16": "QxFEtMtP5wdByoxMAGWxz5bSnU6cXetMVPLpieL8vUsdCTHaX46WRkiDbfpZ541wkX91rj1HHNBw3H4d6acXRY9",
  "key17": "5mnxpU5PZmMciFNwWH8Q6JwXDQQJSKtrnt7cYL88iZfjaHFDztxW12zPnE4um1ZXwhTtPD2n7YwjwfykhV7HHBMt",
  "key18": "4k6dtGNs2C2pNETDdJv4v3ZbaqCKVDNkdJFKh9rCB2yird2aYymnxJD3LiRpFncb6uU5F3EBXfmtcWuDXTT1MioB",
  "key19": "3nDs9xmwhaoYdyZ3A5Uiu61jcAmVJX2dJiz1o63gPwwyXD3zScELZTReXpvxV4YnJ1j6gKVvNwoby1LSELqj2L93",
  "key20": "3iFkazEbVnUkCEAUECedYYBFwX7gwN1XsQpPapTESKPohTbeN8N5MLkZgW6KzDR7FN2mNoySm7vcCL7kVaga1zHr",
  "key21": "5abFY7K5wMQexJDxJGxEY4cPsKoAvxNsx6oEGZUigsfnaot2DAroGmeDUvNV4apDf89epVq9ZpvpFb4s3i9fMfUL",
  "key22": "5XZPmpMfpavo6Np8madesicSp4T2mamavgSF4mpS4Xy4R7Jp6rLvvrnhekUTatwSVs68qnc64jxow98G2JAoyCrx",
  "key23": "33p64k1pYSXiPU4EjB9QXQfeivdFqxaADTdsXujr8J9j9rC7wjXHLD8SUnMoQfv2URomPrfcCnjk9nSbgnDPQCaj",
  "key24": "5PFRmdLkvfa4H6fzpZYxw7caNryx8n4vSyTD7axfb1SHNQ4UvLuJ9jQCBYTXX4gXYC8pdg4KdHh5g2MGgrVRXijU",
  "key25": "5GopdcFyMG5MCupTTkvTc35L8riyvJC7WWajWmWjsuFFSSCoL26nmPtf9CeAXxm4vUNjfzop4C98jLT74SJ1avMu",
  "key26": "2Kh6YwYnmheT7bFBS4HgSEjoWQGwsjmYFvhWNhVpgCPqjVLUF8dTMiYDAybdJfCAmTurMEVEiGiUceTcfsmmqmhH",
  "key27": "21L5oADKkPUoAK6J4uedp1HAfRpwDiJAahCGM7nYtN3631mxqGBxoUU8bC5DTxazqjyMgbYaVNNoAePGASAnar5Z",
  "key28": "4HokdnYhNiCAcXs5rPFs4SPN8T4VMkUNj6p6barugMdxWaw5rorqieqXFo3newQctNcC958ostvAhuQnGokyenaT",
  "key29": "2mNVbx898sivA7e9hAN5ryS8FkUdoBpYL8f4QTXEgCHoWm4UgGCRzvgVKt2rWL3x6QkBobPuQ2EqwLSTnuDvr3Ne",
  "key30": "QSfzDGbGysAPNakkb7iQn3VWfCPK4HBdGr77bJudLLtnXV3WuSpBoGg6pMwdo23jyCBybndej6UAdH9FMYjtAoA",
  "key31": "3hDb73wjfraRp6gm43tNDg2SKge1dtGcmj7XVesSX7XGxF59G3vmJZjxmBC5usMkjePnQb88yrwcxyC1MRt4j62m",
  "key32": "5HVFDZLNJaKsuqGSjmrM26fgWfSk1DsYZ1j7xBxG6y3u5SNXCDMNjVAdCmHKbowyvQ9MEqgYaSnQooK7BnBy9AJV",
  "key33": "3FJF3Kk2JxxtCVDczNnN2cQhatJg8r5rs2EcGEUQSHRTSputFhLdnmNEc1JYj5jNSsvjPRsm64Yb2hKy5XqAeCn7",
  "key34": "55VhbGLxTsL6ifYY1RnBZSTanvCvaJpptzvbvB66dCTPHkhErDUwHbXFo3MVF19fA2zHiyVEZ2JnydCRdq9DpJAV",
  "key35": "5pyFsrFBSjy7FNk1brgA64sNdWXAScakoqCx3MkNxxudUCx51gpPzqGK3exho6fsAwZqFVgU4V35aC83HGhg83KJ",
  "key36": "2M5CEutaUeFcuMEbZLfnqSjhZg2TjB8rpt4jCc189WWMY6Uu96begPm4cihsbY15B7wxDLmcL5SuBARKDi4caN9n",
  "key37": "2EUWiUatb8joeG2mMiirKwjVGzoQ7fsZtagVqoofbfbjxUXoSTDsFUjFWkYXAZvk5pWUN4zB2jtmSmN65iCr3TAn",
  "key38": "4aHRjVU5THw9trM7YHLAEGbWVu54QyzdbCwHFBPfaVoRwPwzRuYMV1c5tFMYvn1cyKgcLvd3TyFEQ2RXhrh8X1G7",
  "key39": "62rDCU4FGNtc8L77xynT69W3DVfamPPfuxWSREJXwcdZhAn3wEuXZ1GryGDfVnJcKS47U4dfU2y87KLECLM1ZH8k",
  "key40": "42vmTHHZrjGEig1op1QBg8AtcTvjAziFYg9qWvrCPGLmdWBNhnM8Y1TS1ZPnrAatzMF1XWUKsofQis8mH8v18Eh2",
  "key41": "3ue8GZcCNPrUMDcE3CnrHZsbv9xa1Eserro7qrMUQGTMM2yffqTaRjPXfYKFgEKgAAPZaMfyRWm6EmmAYFeqR1MN",
  "key42": "3LRpt7ZXVVbuUJiQ8xVML3P9cVQvTDazMLAs8dLf7MYPQsj2pGr18LUfrxd9ZJs2pMu1m52ezEpUTFut7kwHLRk9",
  "key43": "5xE6N7qWEDjx1ghi9hgtbDGyoMhe1WTzw36MGxRrtiKzUpqhuugSM9N66ZLKgEwLL5FUyEvS7EbAxyXqTymtZzCz",
  "key44": "4y6w32zVVExtKnYoNGZ1nuYt5WHE5aS7nyAzaEhNahuvULnom2JDvAKJQKcBDc73SaTqdTKTDUhQUb6BSKdotwwu",
  "key45": "4YCFJFCHzuW2LyHiFQbjSkpUdj3LDxaYchp7hEEtnS1uuwaSRYoFkGexun2wi6Aq6RxXxVLFoRckD1QUbee5wEMd",
  "key46": "3DJ7ejuMyi1t8n5Tc43Kc5m3pMS8cTokF4Qgo7gkTwmKnmZWg6GcRbwRA5qJz3KigDCScajjB9nEC5Z7GC9s9tKz",
  "key47": "48K697PyUzRgMzbT73pWYVz1bUVgzSeSWvB51jQsEAyy41tvfn7vZgEX3B8axjtfu2gEyVsQKTmarcb9TMXscw16"
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
