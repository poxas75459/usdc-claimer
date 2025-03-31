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
    "4LvsspWbTEGymqbYr3zySgH1UFrvyUrYinxzjq4fXM6jbxyYmptUvX7Czrn1x5pcbp5N5e9neJJfwmTLRiHgeSBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xX2so3H33PbhQ8Q7i5yRx3k55z9d7QHvUqYCq6CftKGGWfBowF1URdYmbVn64KBL7NGfE14UtZNX9PeS2BbSrcK",
  "key1": "5uxwctDWqaJMhLbkmM6gB4bDYpwqKN7i4kMX5QT99odqCWvvvEKAdnxtwcbgXLqxLodXWMk8o534NW1twuP21aSC",
  "key2": "64VEK4UMit1RGxGDMsxNqBhE7kz9rMgGuPcUT9Fu1g3DnPb1apN1n8RumtHy7LCKWbUsEe3ahAWpvsYNAurfzzuK",
  "key3": "2FBqKKYVM6qunnKRnhk6vSTcXEMW3xPupxiBdjVwYf19NT6sop55rPMwvzE5fNoAwzZXfa2KSzZJ9x54ZWjsYPc7",
  "key4": "5qMC3piG2hkvkHhLuaTF86qgTNuPaXW4LPz3QNyL51mV3nhs7ggTLNxka63FKfbqXnotJdL2NCQg3P66ErEsQi3d",
  "key5": "w2VV8m8FaPDYWCXBqhafVHuvNep5e997tGWXSn5cGkkeHPcViKdSaNuj3N7RAUgf2n3W73vj119g3QxayFw5Ntz",
  "key6": "V3nD33rDXRmjAvuJSftXuwuoZVxyLaWigNNsVbr9jBwr7NLqcvMnbuWrSCGQ2ZtC9DAsrTLPBt7buMaoPpteWBP",
  "key7": "5mBeS3hkAVftRYAqcij9C2xqW4sffCx2CEnrFGW863fe9DqnaZtf7jjfFAjgJTP7vQndphfyg2CRmE3soBorVz4R",
  "key8": "5mw3MLva6woRgPBy4MUDfrH7dcFZSifAPSKZn6UMSXVZpxAg8oh9Pd2LZGUsLA9rLQH884jPFHPJ3T6yySHFNkY5",
  "key9": "2S9Es6PEXMVj16qCvCBgY8MeyJ9Kacd8Db6Piiu1fDFLuJKWTSrTDNfp4PSkUy2991YaiZkR2yMZmbf2Y1mvPQKM",
  "key10": "5hEMNmhUbosFvccYMc7bSyeHDaXWQumNN2LqZnsVmD6xgBiTeMSKnPzuxK72JmYCqneFpa4taHSacoTk4NznfyLw",
  "key11": "2Us1xzb9YD2txPvMAgZAe2sM9ayTXwgmz1h7EPEHZ5XGgdhP1cwz5JB5chQHMBQwJ4DVHYUSXbstyRDiupzpT49t",
  "key12": "363D79hXh6wZyEAbu2jpHrNt2Bw5GhsqnE6R56piGkMteidsFKaBdbLjMB8DAkwKFjx2ouN7J1nUKYwKiUCrzAnu",
  "key13": "4TLzPAMM7BR2B3jcMZsZRz2imsmoVE1sMkneCFmDAxvnF9Q64WRUPRFyyLbwpz4XxV7j8hgUuA4qqfgcbvz4AuuU",
  "key14": "5i57CphnWGb1rcfz1vcK9APAPF3d83woi6bcA6FoieY8e1BthvY94qw4RsWEXCKxTR69PEG8mCTuwmhWMuLJWzT8",
  "key15": "315KNRf9D6AmwYFnqkdPtNQeNNzS73iyfMiSfRt4dLkRKfPKDmjGtX2aP2bwrjUZpSQPitsjNQqMDPtawapfFCuB",
  "key16": "2xxHMsGx7apuZBRxCyZVV7aJhrZsgE2N6jJSrBVqDXNnEdXS7GvtZ3W2vjGY1osXZwdjwLUimpKSTUUwMgoXRpU2",
  "key17": "tYP3WQ1GgV1fUZjcG5rcVXABLAsyGywTdbpDGeKDkFj7VwsTjV2GjmRBny9KotC2GfniwgrjJ37PB1uCfrmUE1y",
  "key18": "28V52CuHZDGVK7U8zjQTAviMRAoMDowcCKuosY5GsMriAVkHpXddVCH5oegEyo2bwgDAdQu4UXZfQT6dxGVFTy1Q",
  "key19": "34i58pU5u6Z9d78u435ViejgWuUtxoHEAmtpvNobk73t2kmyQkYVRG9vEjVmhDxtMwk3WtmEs8ZDF2Gkd1X6UX7r",
  "key20": "4JhzJAULD3To2718kHDBD16rWFsTjJkoGuU2mxWNqiChnPBZh3FEfTSvULuYfPRjW1wV5NCHVdwqPbZZHq7Svtjo",
  "key21": "3hLBvYpB6gtR2f9bGpW8THFr8Vux3D6cXmAMPksfbKs3PM35DCohJ2GzF4ZoJLoh4UwRmo5jSmQwca5ufgEh3wYr",
  "key22": "4o9ypCdjXMZr5bWkSPjMA7Ry82AXhoo9yi2W9YC8mmS6qgp3CNK5DPGkaithpUDK4dWhzTX8fJmh9m2g9KRZ6dPD",
  "key23": "5uiBtKjycHfRSjPFhRmd6Ta5UC1PxQUa7EST5kabzUj4QJ76Vts9JJuGb6fjxtD9PgXSAhvGSYGdNkgaxwCda3Y4",
  "key24": "2ycaKaHicdU6gabAj9BGAgcjNU7V7fwRwAVXRHcZv146XSCsoggeoD5pVBmiuNSkAMgaHw3fPWev9PKMktMSk1Vm",
  "key25": "57ssvjvC8yh6y1d4f1eiN3eot78GrGXe5tfMCvPEf8LLm8yrRpRMAciWNLVEnz1rMKcJtdxtmFoR6sCXDDFVR5Sd",
  "key26": "pmCPmHRwVeZwzg2xSUoXpxutU9Y5ReEDWjMExJoX8Rb9429NGdts9cn7SvXhAzpPfxnt7k6a3mbZ9issNquTFwZ",
  "key27": "2Jo42Pw91VQAkypFSpkbAXMRfet8vbEjn77BS4X3VaWLTEdyy4UC23onq7urUd86SwQSK7ARbGsrLJmFWMuS8Wy",
  "key28": "5BKiNt2bnfYehpSkkKzsrF3WcGUc5h7ak5SQzCtgDf4AhSKvtVzLpaTp2W5VUqidCRaF5KboRd66knqH6xxCMpLt",
  "key29": "5EkwCMH29nz9wZ7pXaaKQ7zCM1qXpcMetDXPZ4vKXMcGSfXkh3jCdu3oDwcgBGcw2Rq6TgaecCKTztwhyL3XNcGQ",
  "key30": "2aX7YeZv8oU44dNwq1PTv8cqXTGe5JMMH1QedEaPiJvNrp99MAt9ExtpTcKnpCcgStKwQ3h9qDpStrdN1w617z5b",
  "key31": "5xLv52nfgB9HvaCA1mduZAXpAzgGuoZiSLi9sdn6pM1bSNosEH7Xa5LZ46WS5VP6WLyDXbfPRqYVxHfUjQrxHBxq",
  "key32": "4eYhKsV3W82RmGwsL9uJb6vphaVBz2SbWbh4PeBNFXfiXzdwtUSa4ihYYy1jp2cRq3vZ8UGTmVpuSwkwcrhA2Y8",
  "key33": "j5WvYx3jxfARDXCpDjgHmQJ2d4fDbcmLHzRp4Pa4yfFeWGbsPgti6W1uwrvSrCAreLj836Z1qbJv9c7Ldhx6Kxw",
  "key34": "2j9f3QbVdZmLGZpcHqs6WyPHdpsYrmtBcFB8jZY9NbaX94vW3Sgt6gKRntdKmA6pc7niCja71JaopW3VtkcnPDfo",
  "key35": "21nMAxu7cdE6YhNzf4seBwgU12KRx7bLx7MkJBUtpv2j2Tc7PFq3xvpxNAHaR56gy72WvNkb7dick2xDxFyP7pkx",
  "key36": "3RSEu3usJpshe9oqY33fNntkV7QuYsATTQjxR6asT649WPmYuFxkQKpC7HGo8KEukaSNFeKkzFXaZTYpNzVK289N",
  "key37": "5NdudjxwNm1X14bbjiJ6DAKTD3D6P2N8cTVrHaH4TsPiixpJe4SkvH5neWb9R23wV6ZD4gtBn14Vj37wgqTc8dYa",
  "key38": "2pZ56SjvZ5Rg2KzBfQ3yJyctedf9pgVKdG9ycF95HoWvJNM6k8t51pPAzPAmeYJsYLHYxzQ2TRfhAcTCvcPNZ1RA",
  "key39": "3smfMEDxmD5oKwS9Fexwtkev2extsWzphf6pCwsYQ8aRJ2pBZ8iwbjr1i9KzV73FyxTY4jeKvqHF5mBWgkipuptc",
  "key40": "5uHVprsR6BgUUJRaMC32KyEpPpAkQN9mc3fNnAVDkYV7UMwMEHLUg6LyqYvZ8sYXEwM7rbREQzQQ7BwGJDXrM11x",
  "key41": "2NBGz2Aa3TdQXAmmRs4rhWtM7ymGKssYfiLPSDZzvWJfUPXyREWts6h1QypW3vVFqGjYb4eLE8zsAy2ze2kUNUmv",
  "key42": "4uvzrnwbi2fzerLue4rQAMbxjf27oRfzi17VNgVEj2pRMimn3b3BCmYS7GmTJHMe37S4A2Yv3cSF6Rt8gGHpcQxs",
  "key43": "vMhavvCjksVoeDYWTp2e9yt5owVtfSMiMwyRLaBakVwxTY1T7wQsTUVRLQZT6TpV2gDikMTS44qWkmyyBegYYrb",
  "key44": "4re1ejw69rCu1Snm1kWQZUjPht9tefBY8CaWW9UNpxWENHb5gyWK4rSJ3x5TGU54jHcN2h7FssLuPgi6W5FbXML3",
  "key45": "4i4ynLC2WGmWBNVmC176pcyp4Q7j5rpgK2En4moLZDRHQuitN3o3xWKDFFv9vuuZrRbF3x8DcU1TSVSytNjuTRaP",
  "key46": "PM9xVB1gFD4z6i8mo6D2jUbuRxbAuSQfMC7y3hv8YxQza8v1SLmEPPFwjawpMdiHTnrKyF6PpmBfhidXHHQrJ4J"
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
