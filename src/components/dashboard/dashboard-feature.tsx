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
    "maEDbFWj2UbrunenCxLQzz1GrnfdW9ZVoqom9sVk9pywDJT8jN5Sk5eWhWjhrLRzzcrig4tThCwtfBNspHdVaHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J9cvfxtAM4yECYPnmnZRaWcs49vZirHAXBQKg3TBxkKfK2Cdz7WbAhP5xXi6xeZha5eCoN25fXEbsDc7bmjqNkt",
  "key1": "4C7s1um8QdKmabPirQiuqdU7pwLqQQD8XpJwoqXDMXssugpCWsBwKYKnAKG3DtVXv1NhH3eDCyKPBbwh4F7pJrxg",
  "key2": "3GhttQYNw8wiuXWcQMAxWNaR6UAzHiAJ9b4gHiKpdnStpKG5RU3MWfdaT7WtxJuGK4gxRvDVdo4qZUB3pcNipEoL",
  "key3": "4aDRNgvfzGnVMGAGzxYNLg49vUqHZnEZWW3XTHX8h4VWkq4fSwmpvhSiFGkbT7i5hyT83L4VowrwWTrSrXubSm5G",
  "key4": "2SzcdekDnnYF6PdP7kHdCnNEGyFVCHFrH6RBjMPsMXyC5CZ6LRDDQ2qJzmVqSjmn7EDXAAAX6iZdbXYHofX35JmE",
  "key5": "5N1cVk7A2NmXojHStAc5eu8YgefzZWMxB2fDkNyvenwCF2W4JjUfJsSfg8YotEqLd4LaXK6kGskxRpjeRf6zAJhx",
  "key6": "61x7b4nK7JekiwK6drEmc3mjBAHLGPmzsakqGuixdSFjjMM4LLtR1kaJBTntqj7ZC23ZYwtZFQEnbdB9mpCrzadn",
  "key7": "2LDBhyyTC4UfetLZMHCR5CDfGpVh6V2YNUmpJz1SyyLMv4A66zVrAyr9ouvf18BfjHQMkejX2HyZwmUxqfVjRi69",
  "key8": "5rxQdaVEe8wtUWTffVUt7hKaVjXd9g7es2Me2snX8BbULuSqMUAtwH1XJ9dGbkge3Mkro8Z3fgNbcm8niVm4sMfJ",
  "key9": "2EKfUdfvij3eweTdb1RH4E2AkNwvhnnjwBWqkwYUpfvzbWKYeV5YZogbp5EEiBNzXt1j1B6qKT7Q4RJHgSVDsoa7",
  "key10": "2xDVS5cHwDyPVVxc8UfTutAaX2Pca2jgpDLAEW5BzsL5JVAF3taiQDJRUyXR5iMDsyjwqTCy9QYJsyi2AhCKRN55",
  "key11": "2GmQqvzZmLYhNHxADKPuRhnUpyZfwt8fZV5hdEATdTQ1VJnYGR7Aw6mSjaBj2WzNFCTGyLNYdzG9bYabM6SptFQp",
  "key12": "65nFmH694m2gCguVtoXjav9BRTe6bTzBB4vY21ERHV97mTGiHks5exT25fWkydW8yLz2L4b7GTSDqsmSBtnmT9J8",
  "key13": "d5k8kvfXH1u3D8oN3b49axAdbQ6Eft7kAVjmXTtTFPD48WSM4fi1RNUN4XvoQcoJ7TJvgnydJVHtP8tphWFgYvt",
  "key14": "e7JesS1bGqBHNPDZyu1UGRRcDMF5A3EtVaCLMH6fPQXe977EbthxfoRZdQ7UsjbTxbJGNrYWWBmDxMhfsyifWB6",
  "key15": "2d69xZRfr8DHdiXrFqytSka65sRL6uxz99qACqVb3rfvu8WZjjbfBAvXfsbkFHkK5hF12h91xWM1RRwnWRiiA7tE",
  "key16": "2PXg7mLidwaPi3bv5BfFa4Ggb6ZJ9gNvMDpsPpTQPqYjBZWtwM2927Zq2seHiqvwTAXjZ19xTLNbLPjqNfx2Y1RN",
  "key17": "2RNNg41qmgnV5Xo2h9SA35TzC9vcBqUgHM1Ndp8BqhfqCxHyStKQrnMa8mRN8UndGgLi3KFVdHuvmzbmdVXsPndA",
  "key18": "3ByAwSibZ3m8bwjFvQ82osBDBwLn1WZ1enRKLqduzjn6HAb8NYnSMoBAteDNpvLXkE6mQMNBXd8TwsYXQ3G6EwLd",
  "key19": "4fL1uEmCAYeJH3fmvUfnc7ktc7UPmQ9na3bMa1jiuV99ApDAa4p8v8pBtgd6uUCPAvGBjz3zW9g3NwNLrmSxM69L",
  "key20": "3ZsaFzBJWk1xcXdNA595qn41wGAYZmB4oeSvFs21yHip8TCnhZ8VUnv9HFvwK3DKaVSL7KB8EYvSpaD6t9AoWpmU",
  "key21": "5hyj9ohBmGMjeYH5FKqGTng3UoN1qynyPPR6W263CGXTbegkp1qWBTcgDJ9oWyk2kTukukegetmxfmGfQLhvMXPw",
  "key22": "3H9xPuYRaJgp3aTnrDEcrYGK9rqki2SKkWBuRuWiZtRuPxQ2snEmmHki38MADapFctQ3kzpUwgnLP7w7ir5s8vqt",
  "key23": "2EfEEpcg6jggqv4bdDDruKWrwKiGAeNGbZQaXwv1yDSy8WLQDieMFDh56tCVKHTsfTMi55PRW2m3tM9XEW1UZejg",
  "key24": "4CvbmNeiGKogRCjhT7ppLYE4R5CU1e5EFVNd5XDNfrQ4G6ihFrkLm8z5At9skg2yjp1YuvzUW81DF6fcr4qa4B4U",
  "key25": "5G9NWKZEdtxETcXwgCLKjJodwRXirGf4wWGnnv9CosDqHgpUoBW6zhGAieh7af9p2hCvLYi2j745SEo76A9xN4AP",
  "key26": "5rcSUTWrtH8hwC9Ehuxuj3wUh9n3uP4S9HTLSQasYWYQ9SUfUpiVgHSQZjaghNzMF7vzUTJjWmyDrNXX83scvFNP",
  "key27": "64MyMWdEabJWoizda6zu5MFD5RkKTir9zb32V7jYrT4ZEkW3GSJG2s9Nb5JHbNcSikUaPrjhjB7jeAwgUeHgYv44",
  "key28": "66B7Ct37JkAoCjKXSCS9XbGNSNiHxNKhr41hTCTGeRPmnajiTRYGmwniuUqsNHvpY9sry5rynHZhUcrTt4NgDWAE",
  "key29": "5eNWQioRpPVxugGLmduLySnzRGs9WB8iVBRtbzANzDQDQCWFQaEtjA7zBT8kKzTpp12MMNXQnRAiSLRoVzxH5Twx",
  "key30": "2szCTj8zajUgUpkrsqcokdsb9b2B2yvs77JA4yCiMc8fRQguXSnZpGn3JagAqWnpyd9txQKQjWJzKUgLnhT9eqfp",
  "key31": "2ziyQCx4gg9R3KBDuUopWRFWtTVsZLxBxgVr17hTAwQ95kzr2t3xWG5owvUBvamy8hfjxvsV3iB8H2uDpHaXK32Z",
  "key32": "UfMK61jgXXoEcZTTvp5XDeZhfQJ9AVWcw4uAky3i8Ug8oWgMMBMf1S4N7XLUtvq9AGYHdDfPfF5TYSrnz6mVkUd",
  "key33": "2m6PDFbw5cMYoC2zuxwzCqsdDzpXFpxeKHawpeoPpRGLiPqKLzS4UbrEzMXERQZZURpA27MzS2jcoueYSL98cdpW",
  "key34": "4sT37QJYbcQc7JovKc2i7CDLv83cP9dcrVeKnWzgcssHNq1LjiihL3511dz3Ab5veaW94rWppqxJNbwSx7VcatUE",
  "key35": "3UF3cBZXvwtDZTkn3K6q3Zo83gwoBB8ExMAkzfNC6c3xsex4xuYaBFTc8amwPKZJ4sfXSzKSGAKDFJaKaRsoVLou",
  "key36": "3Ezcc8UGvhrakN8morL7NFTfhMhZ6D2iby9aWuvdznoK1vv4Evp5WnQLiHpbFXcwrdsrFv81sHoVSjDb8n487HhY",
  "key37": "2RPw23DNX89g5GQnki2Ps36zMd6GdToaP6G2xgqqYS9V9SDBPV68tWG6fSHrbnshg2j4Gdtnj227Gr95h9PHU6Y3",
  "key38": "5G9wrcEZ9osjU6ishoEbmVZihjVYqTRhy1qQ4cTf3ad7Je2s4awDXD9KS5E7ZEJJL2uty8eizqy2x6e8mjtnkvU8",
  "key39": "4xehxB7ESUiS8d6EPLDwRnPTXbKBStKTusdmyC9533yCmDz1yeBBVL8A59xwGMUczxrQTnX8YWBbTknBimJNCcS5",
  "key40": "2dvBigEc2DrSmUYg18qe3V4wEwn2mgy3DHKaHgeDArqbR5TuYsLcfPNBqv5WTfkkNaonKFPaXL9c6zvsdx4WHq53",
  "key41": "5ZtWZWpqBe9iR8JtM5zdyvHSdwgadop8Pi3WzPDQociKnKhZJDZ9zRMk6syr8W88VVSTw9SFLqaqhxmUbFJ1uBXV",
  "key42": "3Ghj3hWwbgFtk2bfAruhYKuRjgHg147FbYqT74GizMGPNN6NdsTmJY9Sfsj3Wh3AM3iWeyvQHbh3n7bFrRSgARox"
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
