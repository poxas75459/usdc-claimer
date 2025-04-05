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
    "3xBrrhFsszdSjZtpB16MjTow6s1qA76z4Mh2yRjcexNvbdHLeqXUUXML4U5SADawJRKRkFpjfaAGaS4nbYduAxCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HSQLNk4f48v2h271tHjhboSNSwXGPWUvS2g1owfCad76gBLZmoWU5u2PzeW7V5UjrHSgXwzVcB6dfDNEs3H2WqG",
  "key1": "2D33tu5fS89mKGorqHhLCvNrThgZBLcicm28k4QDk4Rn9qTKZ2VBWEPFRC8T8Qh8XXEJ6H7fTY1oSXQFJcbjg9Xd",
  "key2": "4qcn9fVYeRe7DinUgMomaLZTsbXjSyFZaZxobxcWSfmvFwYAAWaPRgNE5hxHaFnHad1JpNHZ8P1KrRwdUmfZjc9d",
  "key3": "62zE4UfTLECkB336i7cRSfvxTdLfz455mUaBYv9z87TxRdXaCTjJUypPYQ5unkY99S4nmoC8tezAetzED51oNPZ7",
  "key4": "5edWLWPBo2CF7nQhBBqq4PwTHFQw26PXXh9Dv9dnLmok4CvTXJXzPaLqfEDDiUsiYxMnaEv3ybvhjeAkK5Xiwizz",
  "key5": "4EiRi8Ce46WBq4gQT63pdVkAvumWj4wdraAT7xseKGBdq4jRuwkUQTmU4zP5dPnp7yqRnsGaJhBX7dh7nvox6ihu",
  "key6": "GyZNtgBWzWoKjsekix9937QxZLmuqdFJfppRwtz5FUrQMoAKJK6kF4yU2FhxBgxmn7kwZfM6y826Rrq56P5oDmq",
  "key7": "3Cmpv3amcToUhsXQeCK8SHBNHp8wcsPN2zXMo7NRnCethh3sLRHdsMjc1VN2h2WpbnFTkEqBFmnRJhTwXoVmvrbe",
  "key8": "ivhcx4cDyCJnv8oS5HmiRfkMZAt5CpAhYXTR1jzcHkkqJJvhAjKvf3LZrN52Wo2cm2jsRrCcAb57p7DZxm5shua",
  "key9": "5mcgDBm63sEhqCqFAK9LY1uG29zuW6SAfRpfAnDoEHyEtAwtktmafDc1W6XySXua1w9NwGpBRh1rXD2Ag19ERw1A",
  "key10": "wKma2egQGapFVUHUnE98wUpBzg39fXNNKV2svPmhJhW79tKVs8cCAqkCv5tSozr7gKzVqbmWsvuwzDfEWRbhJKT",
  "key11": "iCJdiRrsz4WEWMgc9bggkKpVPSXNtZZtEUAsXQEVPLvcZUbmnYNfYN3UT1CnfzG7Mn8LT7pXJa5NLLgVZ827cDf",
  "key12": "CQ3XkDhJph6UhXYnbCAm2uhFRrNDaqEiVZTzVzTB3owEBZ29ceqLQFuao77hZgQEALQ1eVkUGFrzngR3D5p1RQ5",
  "key13": "2NGs6vNh6HwFnWyaR7htXfg1LpWn2K5KNwn1R6gJtFoYq4kd2WAXPHYuN3VLPcUi5VNGzDR17gtFv2MTeo4hCMSe",
  "key14": "3LpemK8h4dwKpgdpcwHYrF6qxCpVEsjy1jhJTiPYBmaxoRkqfGSpYR2b9PP65NHyevY4w5okXsV85Sv8GXUXBZDN",
  "key15": "3sEtqxPNKLecSFQmX3BBscfQzrAaFKa2R1MBmsLz7H3n9buAS3VRhLd6U1VuYY8RjtkuTVadqoUwggoJQjmmSBtH",
  "key16": "24g21DyyA1C2EQa6H7GwvPZGWzx61GHF3n2NUyMxyAj6bCw5Ekbg3cgtrws8BgYMX4wNZPMc3VHvWmV2FDRdRZUX",
  "key17": "2MnRfcA2pyauof28ndqLF9CTTLNa6xx8ajnWK37CngHHXyd9RuXWepzQfjFp5gDb6HygLofYLajRXSGGBd559nK6",
  "key18": "29P64gcQ9h4pBgzpWFRJSzSfLvc2GRP9RDedgk8NhmmRrqbgvEvZ57xmF3mStViHnysQM7Qx1kBCud9L93H9TS8W",
  "key19": "2gECFz8Z4s7jYMMt1W5kd8ETJU5HocMwA5XPqX3ksAyQLe7sQwPmqWQRLnt8HhJHVDJN1SZsxA7i2UZt8eb3Fjd6",
  "key20": "3141D7VhmJbip3KE7F9YBtPYzN4QBM8ZLiYf23iDzFBG3duDyf3HoXeAEvnsyBHVjJaVCnD9aEz5FGhQPnwLyZgx",
  "key21": "61mfaYTJ9cv1L14hq1atTmnDKNgxHhDL6D7qPDLKsVSrcysRysk9PGwSyRKWzb6mQrrFGXzvBuKSvTSj3SEeg9sw",
  "key22": "34eTH5thwJuXujehYVWWATJxqs1AzARUNHiEbdLBTppWFxsc4cirgmVg8SqqLMzQRo8o6GcGPXdipL1xWuKgRn36",
  "key23": "5FxptPWutJzE2PwHJiHJxxaPmzDAJzcHLLSNWk9r28Y63JrMD6THCjUVCmWJaXpkVjp6mQFodZVhKaMa2mTZi5nm",
  "key24": "Vx539b5tyiqJwJk4fSMRxPDctMnJSaDQeCKg4E63TY51k15hoEd6byvoidwT3pAzp3EZRFGSUdXJifBfEUvBzAi",
  "key25": "2VtWS6KFzgsS5Nd4EyHbCe9nu9L8egWez3f8CPny4fVU1oSaVsvmqpus2ZDKXChQzKWLa8L5kojbN5vzX2YM1zPK",
  "key26": "3EKVHy1ifPSosDt5bUf1jUdLScUQKDbPBxSTLvsHFBL1jPKsb1bAU4W3y4CuDxDiq913jEAUd4zGXSQskLKWkoDt",
  "key27": "3aBZ1gY8GbnaadmRtJVngNnTsQD2UrDEqFJAutbCBpXeME1WR3AEBJT2CyyYTpwM6Qk4zBxC8iBsVBBYMNtHP8Xb",
  "key28": "2TUAfqhPZnwXGV2KY6jQsQiuATKaU4RvkgX6TZKUTFuBfg8ovFxWY5kMTTQAAEfuhoiGgC8WerztzVKS7wodUhMf",
  "key29": "UL7jZk4MRwLLukPVLu9ruqoQRfQjtGabVEdueiDVHPiyhWnR9vs8S8EMe3yWBcM9xvXf5gGTg9VtGomHbQevX1j",
  "key30": "2eogwyP9QfNPfjRU3E2VGPGpRYP2kYGgM5HKgVbVRAkBeG5u2pEv38aiLfCvT5DPvRZ6tSwap9cdwjNkzB5Pop5V",
  "key31": "3WtpbRRH8E2DpeUUkhKSu7bBgzdCrfT4W5c56fkaYFS4ucxFSQNThhxo4RS2bwS3K5tGtKd7kCK4BZUymGZJPgRk",
  "key32": "4Hou1EX5qYNB8vWPJVkc9M6JPR3emdxci8ZnhWtt6k2hjhrHsULuZPvuXAauMsQ9TzW2iojRjBzSQyG6sefSJ41B",
  "key33": "5YYsh9vpCm3zfFTAhnpg4CT2nSNQG1AkgCBmsuS77GbC2BERCE9qwJAergp6k5oCqLevDADsKYc5uE8CZJAtt8Yi",
  "key34": "3bByPZ7Rt8jnLvsK9M6i8Mnp5fzfWsTst8mzSpXfTCj94z8qMAq2KaXS65rPRnwPF4SDeA4opci6xRCaqJAvHD5M",
  "key35": "2DWsWHYMvkxH353KrkNuL97G1JF3vKQf9DhoAyUfgqPxBwyMScBt7c5yMfiM3yGyiMzqEyuiNqrUsnFibJQStsd3",
  "key36": "2REcoVJU1BXGmhbZujkDDpGqiZ8HnRUDhV1FqYHXRpmKyxYWjMBgEWo9Ka3onEgVrbfrtLUBuQAfaaZW6SvDw3wP",
  "key37": "4ooAdcPGYkBDoLkyJACnxfUGnxb8SgmVgibHMRP3kBBtcW3gLypcTv7Wq26ZvuQmFuJpvc5kU31QRh8QeXZUo7py",
  "key38": "3PhNfZvs5e9bHwVGHjswygouLjqFtQw4n2VEFkuY9Ef2pD2W34MJXjngV2FXComoLY7AJvoZwCEJEFkaF55Pbbm1",
  "key39": "xizgKv2EbPBFeXLB8VscZeaCnC1AD2eFW762mGwtbgMfTpguMffwFABb6pRhsPYYitXRMqYk9GY1ajbzMXHQXNw",
  "key40": "4tyLfS62qmthz8Fbdan1WY2PRhvZ436WjWYy5qhryUy2Qtr29rPughPwGx2eWg1fXq5pSdKFGsqBEcttBv228Scs",
  "key41": "652oxHmrVQbZx6ZT8dLa3bKbHEGxA4mRhVF5fLWQDkyPuZNHmi9qQfnv8uPrePhpFvDuEkVubsVDKFcf5p1RaM8F",
  "key42": "iD3mnjzPTjqUtGj7aWCMJYYfyMKyym7yUy6qTdWnJnAyQtimcKPHMJYqPNn1iL6EiiZbrW1ydCSUesYh16cqbUB",
  "key43": "4h2MTHTeKGZknVSonw4LfYJ4vLebQyxHHfkw7ZkospcSTR41cp2WaxJqii36JzBYKvwQ9mu1LvLPtwpoEPQAj8iq",
  "key44": "gRNC75eJcppZ7uWipTCJRVRirV99uEM2W8frb4nGXqbSQSBDjdwimJuaowfCquiPwBeLYJNBzG91SN6dypMGHX4",
  "key45": "4g9ttUw8aPYaQMJcWcsBk1EyiWdtZd1S9v7jobX6QiaT2AKVvuzUfiymb11NXK3smZNbgV61mqR5F9KgCLUe5tH2",
  "key46": "5bS5UPtHoTHbRyiNbPm6gALAgChyhEorLs5AeYdsTtwE15S5zU17CKtdrkk2TwtcaZ2nhQHaQYfrxJPBnTNY6omP"
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
