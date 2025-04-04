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
    "62EZYo8AfNYvQnUHLfR8wVoBPWuCb9FJmthaaAyr5kXZrjnND2jFtwy1134qv94XJKQ2J8cSkWcKPd9oGNYD4Txo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23F951bNiRinNgxBabwDQt6iXy4RbtsQtgMnf7QwYJWwZmpoeXsvd7pB1SMUTEYSNmAK6e5sdv45WrXHLSL8JqV4",
  "key1": "29p1WsZB5kBoQoVzeJaGxUSh9xFrzPhNi4LdDcSM4MscG1VY15iNsSCBd6RaUwoAQhwoz9HrA82EfoSVpKt5ZTzR",
  "key2": "mTpZVHgCJR6WcgQA5kGXLpQ8a4ruQFXyC75EjgeRvg9hKHzNLbF3cKeZtPXfFoGQurgkW8VtKB9dGEBNr7Q8pen",
  "key3": "5xfSYiH7mWBtYhmryysfkibBXEbw97pBi55jGmXJH2chF4NrjdBSgBtDH22QcrVYMgNVwZYPskRdxbo9Kzos6kvL",
  "key4": "4pqU4XZHcxcU1ka4V9W8q4h1mEHxYJE6DHX4KahUCQRRExFbc2DJ1HK8HMGNoUM4wNHqdhXmNEXnetYMLwR6W1uL",
  "key5": "3fuGDJE8CZiNVv4bEJ2egvrBTJGXhek4Z5PCCrLVUuEiwkMP3Sf7x7tvNzzKqoGv3ekTxGtdpEPq2cScWvtBvS2Q",
  "key6": "3q9gmtuerurfjyCHYnQ2o7ZdCvrSWxXt41Uj8oXKzdzN8nauWC2A4Nv45xZfcxnD5y9sqVnBGycHr35zxBwzncts",
  "key7": "43ksoDpAauQcLJKLCUW82Zz6ZisQQRLefJem5KeMZAfcy11yM32YSrfoQoe7yYwzgDvhKRZ5snFJ99Kpdf7FEp5k",
  "key8": "2cyPRKUUUC1S6sHeWDoknyfG7VCAyjK2fngD1CC3hmQVBZtEtpqzKF3GzxHVTfPZPKz1TvBxWRzFcdzZKpMDQB3z",
  "key9": "3j4utoWBM5Qjra6GxshQ7Gfq5QLezbHXpLcByJDkKsA81HBncYGtfnfF1fRD2SPHbKFQcQK4PuZkJ4y6RANLmLex",
  "key10": "4kYSFht7QxhSYg58NkCnSaB3h9chrVshjkDXVn5JZpxCeHDFt96nLaNJHg146R3d945VLmSQXyPj2b8xnC6Bg6HZ",
  "key11": "5Sc1TgKi4g7bUcm9nFuUwmYEmvWTuAE4q4i8y3Cf1XHgc82zUenmmQf9YteETMDPR5HgUmrqSppaBuQqwQmmWsPW",
  "key12": "2BsfuMiWYH1YCkr1AVbaZjYuSzUxETj48wesKfjovoXi3EF1Zbjc5UA4DK9jNoEQsC6ZS1pJEdUWD691j8mwSbDb",
  "key13": "urNx1QvGa7f1QcC8Tw6RVU42Jsu2QkU92EHewLi1mHGWHPfkaRfYKNcUmAi5kmArZUJmqWMF2wBDQ8kR3xkErce",
  "key14": "25a1H9vxCxvoeuqH7yhtNh4GmtdDtBzeZSX2VowMVomCf2ffiQALDgCBYuR4yytY5qznRN5uSb1d9xbK3PDc3Mz2",
  "key15": "2PwTCnGnX8R55uiJhyNaJifGBwFh3TEkWU6Cnw5zeNUztfqKabV8WJaFaBpN9K1H7Bi7oHQigqUXAd6a7kXe6gqW",
  "key16": "VbufbiiRKA5kAJavHJSEzxBxhdEAywBzic2t7X3BHdV7r1MESF1njmwUHTF2iEj7tzhMgBMtUczoMLzBFVtBvm9",
  "key17": "sp43oK5ifmXgLU7aGrVAji2VtkLYTPUTLxb3Xjn2UwFAzq9WE9VimeFEUaFo1aHDoWej83CH1jrJy5xALdZtjN9",
  "key18": "4zggw7DfYwxkLwWiWiS9jJ4hxTEvWmjJXsEhKPLaTYwpTmJveiVqDRsvwPMiaRLSUdvRAjf8iwSfcD8mjHuXMBGs",
  "key19": "5CJRrRnhbv3q6AHvdzk3u1HkXLEMWg6gsimTwybvLLwux62AoH4wDkghmxHr4czPmZHqL6RdhKiVoZR2HuJsYo19",
  "key20": "3CmaF7rmgmmQGMGhdGvfMUobv2PA8cd8cJTKtrUKiFUQBZGS9z8AnP9UfxiP8TfQLCiCBWGijDHjrQ6FNqVpm4zb",
  "key21": "5tLMkWFZyw8eYoPEcymo6xH9hMigsK77B3GM9fBygnuxfEATPgP1MczEzgHfBRU7HP8MDi3qWvcZeJswCHKVaVJC",
  "key22": "2FXc8snyQAY8HKVTKvQWoyWHfsi5BLvYE1GojqzsVfkEEnvoac6x4ixoi7bJmYHu6KuAgeFTuQn66bz72ER5FSth",
  "key23": "5pbTbeLdBWxEEQkUjj9CogsQgYo6Xx4h5xSngYT84bgTmCHAqVkjvq4BtGNFZ8eVX3Ez2JgeP7co3BXgVgZbhqU4",
  "key24": "2YFoh14GJnX1pwqjnfDqvQzpeaERehiRYjWAh7KbBYZ5eJGLTanGxNMpB45MCZ7UBPN5NZwPYMu4utKgfEuymrN",
  "key25": "61DWpXEjZvzkxcXBkD4CbMxCV1eyZaKuZisiPEEUaRCaSEPrfDkUCVTnBsfDbNtRE4ybUP3qtJYVs1zhYTJGcQpy",
  "key26": "4kNq53mAahKSNQh3uTzNQ5EmvWKrU8Nj16xG9Uyp3t7vLfsAEkzBxAvpgDLJe5W61PBvT8ec4P9swraDmarW6LJS",
  "key27": "5nMTubWiHVbpsXtqVm8HL3n5or5KxELKv36aVXgqbbApxwMqDZZAJc5WD6ZwRa4CtBNhSZVqhTWCJ19tM3eqgWv8",
  "key28": "5dg5VJFa64qn3c9p1K9PFafonX1nFhxkFifRVsGLi83Rj9akXtTkkpVExNS6HYvFHMDpKpTWNkA59Lp8BTcsj2tB",
  "key29": "2eiypzbT1vDVuEzwZW7snazh8LScrTK1QLqvs6xRGVyVnv7DkrsuVmhhf9q6dPUcY9EKPsjjYwp9uUSyNHmh5uUm",
  "key30": "58WYDHJmmfr66WZWswpSCakxm7wp8gKGirh8THmaTeh2F9Wr4TLv3GHJKgfPyzKjWyRSncBziuFm6RSfYZzePswU",
  "key31": "SejirTHE2poT61eXC8T2sscSFQP2UpQwPzXVW3g1baAH1cVPSu45hNBNFdTPDz3WZ9TWsxyBz1zkRAkv56htFDS",
  "key32": "gzvvo9ewxSDFosCuavNeHPa1uc3bvbYUeS6KDhf1BV1NAopRBtW7EJADyZ3SkFBVcMF7zA9ue5PuXqV9EFJAHjm",
  "key33": "2FvqUNyeg3wby1zFCBjufGmUo11DCpCA7xeHRzDA3BcnR6LXPNHPmARro3wb84qxFJn6iVTiP723TNAdKewJXcik",
  "key34": "5jfTNAFsPc4v1Z93CrYD5EFtpLWS7hktDZgopgb1Wm2CZKeT7P7614MSfFp7ri4XhiDQvuZJE62NxmbiNjd1Kj57",
  "key35": "22yRSJxL3MucPnR3a7Nvo2nYKdCnWR2PdrY77xLqK1CWryNGnXYqunpisi8M9JVWkibHKn5VdV9e3c3RikfiF2Lf",
  "key36": "WEE7TKS1i352SAq7zxnyKd8zuYRGWthr6wPqoaCAe5sKeieDFUatcsfBMik8czTHVvAG4G1VgrN8ySVEHkwqmnr",
  "key37": "4RMfWizyg5tv9pMFNoEg1ah8H4eAcxvHk9AAb5NTUUjuu4JdV7vvDpaGahwYXhcSRsw6G14BQ9Y3tYTprke3wahS",
  "key38": "43yzh7eRMJZdsyXhoQw193M5thamevEVhNCaQHry32k312qguF64FKV1WPpm1GX21bM72cqNce8LrDCLn9aypzhu",
  "key39": "CeXMeKBZKTQ1pC6i3optafceonaQMfQbbEDkqf2NPeriHxUtCr5u5qWUrqudx3XVPCe6dgp5DBrsmwzNybUu1Fg",
  "key40": "4wgdLwooenUgSJb2RJeGeLVBv6sJw14QmEzMxL7TSRE6yyz1huB6oYySPnPytE72BjrjwHkRKrGSKRfUUfaohM3L",
  "key41": "YHQmAsBm7YNwdaeVGQXnR8DgovPeim1SdGXnTc9bhdgrcqX2ypwFZPnGt5yaRFWxGcerUfd2tj8xXW4daE7SGZW",
  "key42": "2xLwxNYsUF7awMqJKvfH99DMkYrUB8rTxWjvL7NzFM2PUnBfZGBWshVaTioEhRaLL6poqLXgkrNrxDVy7PNsuFMy",
  "key43": "5DXZTAj98KttMqRBDjL5dft19jxd9HxXgjD14uDb2DUUBnsxHMxzkQqhiF3RetSVTnA2g2aNfdnPBK1UorWcNy8Z",
  "key44": "2YSiQb9GbHwJd5USTed2mJFr4H43oPDhDew2J9p8LshgWW5xao99jK3wzfapLmzhk7TzCsZjtfy2S2LUAuBeLzUp",
  "key45": "5RmBCsCgehbFud3KkxaB92xp5cXcPs59vY9m8vxCQbsKeLiY6pcwTy1bYzawcoAEhL9uNrjEb8m1UZuX2MvRyi72",
  "key46": "3m2DwdCAvssTwPAnLkGDtb1RzGrGU9Gz4EG6YutMV6EoPXp1GaauMhuqji3gBNEv2BWTVDPQTHYkGjgMh3j18ReB",
  "key47": "4MrFh6nbmfNvBbMa83ryQpZoizyfHVsEDnSRAJpiJLEjc3ys4SfsmpADFh4gGoVGUmX5NKWUNErJ453W4r6Gv9id",
  "key48": "2W8MPziTfCbc5YhYNcFVGC8Bzv77c9fJfParo72ywbCiRZE9qeBh2T35V2if6xtmSr2kpfJMqbbvaxYC63WVMKv2"
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
