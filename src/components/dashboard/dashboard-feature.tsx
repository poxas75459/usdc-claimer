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
    "4ETNeyrRthyAYTYwLrjWgiBkhMufUiqP26pTu7gobyVzMTuqKYd69V6QiT9xwhnikKCyco2F2byLXvVBWdGXMwoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yfZsFqza4ymrY8Lc3sgLwPvDyhr9bPSfKKw3kCbS9QwNfw25fTVbyBGFQsFiV3j2CCosVHLd9Ks7rkG9jsrgfkh",
  "key1": "5FtRriZTgx4eYNyPdJCPHczcfvMeFt7Ekbf7bXuqeoq2JWYRtj9MtQbzy8H7GLJQvZ33La9JmZbRa6czRKoBrasj",
  "key2": "U4yGgdgPHWveU4s2p4wu5uyCuXDy9eJLAD7ubAnzirwDU8T24Kenggq6dh6oPMC2b3CJatj7E85eF87hEqc1aB1",
  "key3": "3ZdEYAqfCsZUCzBTxyoMnjQYBytTyaLAUNvJqQPRGuS8raF2ByuTmDvoSuFoxyH4tZ2XogppBCA7fFGF1AdUtWfs",
  "key4": "39j8BDdyzD7SZNa6xsrsQ97mUk1NcxFgzTyDcv1oevevubo1ocMjRXsPbCWSKZZPSVYRoJ5F2iu2qd5Qq36UkQV3",
  "key5": "5aT5mhN8AL2USv9Ar7ssGwVHaaHh8PUAEd53SoWQ5F23XZJXJu7VEym3D7kGcsfaivPGJ141PKwKZBHUaTp1qvdx",
  "key6": "4YxVsT7xc7V2KVUXWoUNJQLw83uX1GDcjdkv7xbg54SHYFyCb7QddhakL4b3nHvtJYatGG8qJue4Cjx49dNY5dvS",
  "key7": "252Eriw53onmSBHfiDQ5ACVRFQJSAZugeuB7SDYzsYJUe61chRv2meTZdWM7WdjenRfuDjdgUVUPTDGd9vXg6tHk",
  "key8": "4ZRRkYoh3NBa91aBpPMXvgLwiSi9eSt7ticdAASgX4oNZy1Em2713aB2qbCMGnh9bb2ivvWDq3SLRgg6gu92ngoB",
  "key9": "2tsnfm4KRic3MiVdAuzvMnaDJqB8tNASk4nhokh99TN3hmAbQcD2toGpZY9HyBk74L2aTF3SWnPuAhAvv4BSka12",
  "key10": "4foxVzsCg8x1CRTcHjzvimMfQUij6WgbUnTKvvrAxZFc1Gk34Q4eSmkG4xJgHZ6ow7ghkxnGjh6UM1A2JvgncbJQ",
  "key11": "4kD72gcjhmztaBMHHVFx227NtkRfRxJZhgLHbuN5WQNzDWmsCnpUTBkzgjNo1sVp9npuDMKe2HbC79Jon7cT8pAB",
  "key12": "Ze11ScSV9UZYLpcB98pQLSiAC2QAeV863RcmMgMmKEbjiuEwbEZQSmq3WFzz3Xdt5rQEqAj61JMkwTbjcsgmso5",
  "key13": "3boDbMHpvxQLDs5sHYHbagf13yXaRyEXiFrZxhWnPAb413BMEjPy5C6WuBVn5WqUiVFknxtd4bJHuymJGL15jiRL",
  "key14": "Jk9SFcTnwyA4uwiCumPvA6tcqrCBR5wm2oaqHhF2YRUVTj1LBRVyXPLCR9UFAch9exg8bLQm1e3hsm8WqUt7cTz",
  "key15": "5dZMFtdVjDaLTnPVWthYKeYEpYuh3qVR9C5gEoX2beoMJkFSLejReFgpkXvAeYNukrJyZQYvZCd6PLkhKQCFpXd5",
  "key16": "5jJDZihPHsMEpdWrcCEWEWSb61QrqJDnehLwjdguB6ZHTGpue5ACN5b9eYW1CcWwfNHUtveMXEo52Gq2XLkKBZLo",
  "key17": "4LEszmXk4psyBusdTJfdYQYVNcaqBrUGPWgHRDfSHJ1m3aaf9PmQVBcXJfVBxYRLswRaebkfJXQXTxgPmTFyXdcn",
  "key18": "2Le2RjxoQrJPyM1TTrCoMw1cTujQAN75yUTL9PRXtuSknLMLCB1UnXwsf1GcjTHCgZ496izQV3raSD2ghmqXHa7b",
  "key19": "3CDC3hYbkTyuJ7LBBCap7KCJCowW3FQq95nwmN3KN8ifwMULSLahrMEpxhRm7aYtFRyoK7ZvB58gQkvdNc3MWHW3",
  "key20": "4w78Whr4R1zb9hT1x9cedhi4Q49nh9pxMWFz2F3sY74UMRvPVGoj5ThQtwUSM35aeGyXmLEe9g7MHh4x9W73b1Af",
  "key21": "3AAUQkaAqQjb4ynXgbXLokook11dx4GYtsSiYVuA5kZEMQh42Hy9sA6tMAZ1FdKSrvxUD99opbCg63furf9dgKuZ",
  "key22": "2azLYaVwsscCnTknhEmNmWBMk6L7tbw7ckG5rAUHDhC9LY4MSTJiwCAG3rWdGdqj4cRf2d4ux4RYDS9wpmLT4SLJ",
  "key23": "2Tn1pzfcJu6ohT7GsEr7G9NWV8Csxh7nit6yToaZy2CB6mMmm8Losc2SAxxWYWqN7tmhSV6VpbWHiTa9AhNM73XM",
  "key24": "2HYvC3GH7ZDPnfcEiCkLY5dHmPNFZxupGNEAtwc7B9VTaVUgfn75nySbNBRtkx9kDzZMX6FFx2KzDi41WBU57qDY",
  "key25": "3uzc1N3VkHETFhusGe2W4Zr8B6C4SUgpLUNgSCuEMGLKR4w2LuojDQ4Zdb7i2HkQjWyBEFA3pZ2fVkwiDjRfHos",
  "key26": "gro1Czu8X2DgNcUgW6ejAZka8Ag2KmjfCHRYAux5FGeaPykJ4ucrM73ueuBHyDj5o5ruaa3YG3bHrCUrt79zmMA",
  "key27": "5SPwJBXoaCWLQCwxFxZUTr2yebsAnR31d4qe4fohx4MGYtGdm731HarbfEe7KhXRTz1L1koD4cKSL5CsVwHK76bB",
  "key28": "3qcdf96mqWau3E5CGi1UU5HoBryHNtCfnUPeHhvy7wHHAAGL2jMUhKQmWPoKzd1ciHrRNW5sZa4f2bU7jUK5ENYN",
  "key29": "idBV1s96jZMjLvs79XRpGSA66sk3abg5EVW8Y9Ujs9SGLRfLDfHmGGxGixfQUDJRxnHwufQfUbJ5Xn45DwhPzoF",
  "key30": "4M8Q8Leyd1dU2MuZPMtuV6N3F7qsS8fJB42en5rtvGDCQLoDEhj4SJSnwy5gNARtcP25NZDQzuYmXnaB9qxcin8h",
  "key31": "2iLgYe4YbJkUrJVuABVXHF3o1dvVqpFpTTxCN3a95fYaek9cqGNZsp6Ga5icvmUkqF3Cy8EpEmDq9qgvYjrooEJn",
  "key32": "AkFcCGgWHfTjk7wVfZS2M1NdMRtobjKRbs7viZdXdpG8nHj6CNsQtNHmFRNkrwKBw2BEJH8RLokzpoz9cz1fWeD",
  "key33": "5wNfWJgkrRK7DhwXuqb215NQaej1sTJRkHLbFEpZVpQXRmMDhbpPFsn6bNsmRaPcgenE4cV12BmFH4D3UeCmLM6t",
  "key34": "4UgFCWEXxwgGQSbbvWT7kuXXc3ATEzoVZv8KNKq2cKvkBgeztGk2EC5bu7RavCtkYjCiZtibNYp5CFq6oEdR59tq",
  "key35": "xboXoRLDBMh8Mmfx8QJwYZTXvu3uLfB2BuMtmwB8kK98GjLPirRByaZiWbAArQjzQ1bEaDmPt3ckFmerVaashuJ",
  "key36": "5VFFYvjHmHoSQKmcYfFX2rgUFhsZrpFS9GYsfeEgwHn2ecFhyvAttUmRd93VWmDitsNQ9DjAAHJV5hBcizBQtPTG",
  "key37": "5C5jpvv8NzNHCHfwyaYKRdk7wMuvKNXCqoSiqbhfEGqP38fg1DVXgD4xxrmNwCVL4nAw4cUAGxKsWWhQ7FqYmitr",
  "key38": "44hFJqvwV3H2A75wCnRJKrozphV18x9t2uuudyvtgEQeMi9pUTGghixsWu7W33k8rfySxiQs6whezStpCJJ59NEb",
  "key39": "H4ACKYSiQqWp68TNvw1MJ2BDVeBWyPKvAc67JyryeuRqjdJw1z8tcYDXXUxmrnomZzpi9WTNi5wAbtvpnC4ryR6",
  "key40": "2n26Fci8r3VK7nPsuCzHmvfyxSV5hFkkhrL3AAVhmiHtTHdu63gEW5ZwBhTH3PaCg1eEizAC2yTcvP5Fz2WkoBr5",
  "key41": "3JPVTf8QQaeKChqVbEPmbg8RUMgqHaiCkvwZHj12HtGcLFrravZYyotBqpVyGB58WTjEdDxa2BpbHQgiY3j3aQr3"
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
