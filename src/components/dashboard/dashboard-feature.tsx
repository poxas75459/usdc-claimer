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
    "5suj1u5U771HL8hR2p43WKadgU9MsasRonrrWoPAvQmXSDJTLCiNX8NbUruRYKNCZup2F6oTFGkmgSoGuWZiCthW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rucvf7JiuzsKzuV4yEwemW6gwZdYpsxd1KibGvPY2W1yhczYui6AGC1qXqcBtLsRedgpoqghTWXqiaXLEWtyFiu",
  "key1": "4jAn3X7wAArtHM6vTH67WE7mVqvRLpEgqFR3iMTficJJ9btufYWCwjv37g3nnRo2qDTzK8C11Q4uDumhd7D9HWLr",
  "key2": "5YF88CLzjQPQzEzE1yiDNYBZPdQJyhNsYXFdWebbQV7LotZseA49y5mUQavEjNNtxmMrRHYKCZ9JY8hbC4f6HjRC",
  "key3": "31QFxwAn9TpffqPQtuQr4u5aeNDP1dJE6aukbVXd19dq3y3NGBQd5YYVMxo3muofcmjktWm1acByLtiyk4T8nowV",
  "key4": "2bhUac1o7BwfYz2YVPsAMMr1G7nP744Jw5qS7jkVrz85wKtW9inxNmK3j5PV9t41zP2M3MtPkN84ZFYbmBhu8o4X",
  "key5": "64iVJSALSpgLZMUaa198mmtHdCZZSX5dMGnzmJpzqGfiM4RZAGj8s83DUuwzExFtheBKxNQgnFeSorKm8y64hX8e",
  "key6": "5GButPkAou2RGQdfZkb7cS9a6giqonLEcndig3t3NJcmYVcxEQET4W5VbT9WSXaFfmi3igjoDU2MjtqPWAv11zme",
  "key7": "5mkFu9ENP5HeFR1U1vekyKwqesdZZzygBkK3X3QWvDkjCzuiQPR3dFYFBExRXG8cLvDDi7PUYXLyi2dk1tm6URy9",
  "key8": "4baEu3Rzyqdu7fws61QoMJrPj9aLdAayketwJRvihaGJXCyBL3MA7vvPFRUEaaA9Z4vr3XBBisev7smqkft4qNCv",
  "key9": "4sUwmCExRqeDnGtNnQ3pavFAWX2zpgupmopQXeXNDKJPixR89fXU2EySihiRThfrK7MEgKhagrDxMTr6XFDQfz4",
  "key10": "4m3ecf3iUrqvBeuX4EnrcyBsuxrkKq5Lz6q97MfXmihBNhkNgC5sLbhDpYeBiC1NuShVpt2WzLCqgf1Dgk2zpmnJ",
  "key11": "5dRSkwwnVdSR2Sje3nRYTSHAKQxCkLBQvfphJ1sqRUX7Ak3nq1chFtUgqpFjPiiJPX6JzvRhCmkT67j5rDtZSwF4",
  "key12": "XEy1SPaDddhPMkzRYdA9WAb133DrR5sT2HizxcfVtX1PCaWHpfFAsEARSUUt2ugXniV1MbJ3XN9dK9xD5ujKSz8",
  "key13": "3DDxo9p8VnZWuWGnVANgfUUnYdY9HyNbWsPJvFX2dm3XXy5b62rmjMepbi3AvHxUzKHvzuiMfzcRtoVtRPm9sGba",
  "key14": "5qegFEpVoYUamGutx6sgg7x4qctL3pNXouB4mjQW7g5DP2Y8n1F5KZd23DTqQaakbo7yewQp97R7EFkKJFkjNDri",
  "key15": "397wTjsHLJjHP8Lyj5cvzbDWWiAh2B6TguydGGmctQCfCWqq7yWwzV3BhjbKQLK48guyKf8L9Re8EJRCSiYf2xSZ",
  "key16": "exWZwT6BfoQPFpXmtobcGoid6EZ2r8LF7qZHLpvUs28Y4Le2fVAGmPBXaKuqphrQ8m5PMGF9vYpVNQVaxTtQ4Tb",
  "key17": "2a3X9ftPGdPnEU6FC5vBJrpqLnqhzE64GsFoSE9LpURksYrYaFqih8iprRUuqgHb2SzyvTrQ5bt48sjr7WPYQd2q",
  "key18": "5LNnaXBthuUyHq4Pv6Yw9MdX8xpiggosdZj8Yu1tW8HFx73toMF8Fc3aRSFMGs29XsPZgsEHuwFhKRdE9EQvgCFy",
  "key19": "pqW4akQjK5cKzAGV7RcrYMFinuigiaR3Lf1ceqaa7jqqdK6XK1J2w1vA6kDHysjceJSnBAxFa5JZwMKckEJ8YDf",
  "key20": "4P1QrTVEg6Ks7SEadJUgo1C56ZyoFmxEsjqibbX2pQK3tR5anXEf2WHj957WUnawM2KotWWM66qdxoqjmJde3JDw",
  "key21": "3HKjU2L19hWc4NnEvSvgvvZpejAcTwapesqb1UbAeT7nfnz9vfjZSYEFSVXtZpsAAcVHwqkseXcSnL8XGkorLPtM",
  "key22": "4AZjYbVQPLzK9Ff7uEDLHww7i5RpJ6wpCyFYvFMMRN1MT8mXBvnsbcxvZmxficvyKHNv6DGcuNG999QbroykQAfq",
  "key23": "2XTuVxuW2YcZDcjDn9nr3XDdQ3BtCbPG2VWtyXhTzBgecwRTP2aX3CmD9cTjoLjbNuB1RrfMekSchP1nAmcw4Byk",
  "key24": "5CvvsVEmBeMnV7gVLZBcDDpRF7tdcB6U582BhzjHvaRwX2NdYSbVXNPjrMNVJ9KN4bYGouPrWMLQjntBHpUaeZDC",
  "key25": "4vmGLK6GjvqnD2i96H3koAmxKEV3MvBBwPUHRHjVJpV2VLA2H6aMGqnBwVccGmKzyVGwVC5VaVsW1q8A2WG5PRhr",
  "key26": "2c3jDufvZbaXiCmcJSGVrtP5comfLPHSfTByDf9ofR8qS6uGZbTf3cVgNPi69PNURMJ17gLGbdvrAdMzuyKDCNvR",
  "key27": "vBePora5moKfLDSByCxMvZqRQPewo68RXdYt9LJ6LPfWXutA2cSFzPSp6k7JyS1A3LVZVAwG3X4CUQAgKq4iCX1",
  "key28": "3hGsjgtGS7D48xBePME4PAcZDHHr4EDVA7tKsZ2fdUiRgQRULVmHjNgreDxnoqJLApNE5RtpEFkQSCddGNmvm5Pk",
  "key29": "35zcBcFcyt15pMxuWCTtWy2a5rTP3958LhEEHQ5ALLu627YgVBEhk9eHLqd5GHEKNYrs62eF6HozZK8Y9zSCMQBG",
  "key30": "4CLEzdDdR3nyThzhB3DpJ7jBWi1MkARHSqs1R3eFtchctS1kRHCQCYutzRT3eau6Vytdmv7QsxEpYrGxyeQYw9rf",
  "key31": "4bNUagDe8Q4NvPwnPoMtpsiJ3tRaR99nRXraxTSABwQVu5YwvQTNNeVjruMtcenQXRRBctcnHwJyDG4bQXMFh8jx",
  "key32": "4CG4Yp6YmyWC4JH7twR6gWzstd6wu6cEfRnpnnULQizMiryFRS6pGd4ckJhJzJaMquQPWRzjx7RuEYmHmbELrkJb",
  "key33": "4FzT8wH88uTxjijNFoaPUmWLzRkgPfqfvovTzuVT4W2gSWevkSNLzDZM4YyFJW3fRFWcKe9D6ooMeCEn4Zkvfqpx",
  "key34": "3t7puramQxTrFTDnYxx77bCuLppxAWiXL6voYwME1mYA3MHQLtqm6E3GosSDvB9SyyGKFtdgS2UhnTS1F1PnvY9U",
  "key35": "2MR8sZ7b8oCEd67q3AKpYeJF9cGUA73M538vH64Gzk3PRBGhvo65kyfP1AJum9btrtUYFtooxcZERq117qR5BLAH",
  "key36": "4Xsoa6DzuSQcEJEw1kras6FCPauPgKJ4MNopDMYh8L6iLpB3NHLnijA5zFwHr6898UWr8w3jzrGXgZ6FaPQHXUiu",
  "key37": "4ZCkmAEgvH3NE2bmfft9FqJ4s2CUAcuLNq2dnWkbNx96QMCYjRX5MwpVS4Zzqw1y8e5bM5ScVrApNPPBg6DEtaAK",
  "key38": "54esD96yTcvDLC4c9ZPVWu5NDx3TnRDs7ZoBXU7oaspuXFVMbXWaZy22AuBxPhQxRNm3G2zQwQpn5fWBVXrKgqD5",
  "key39": "5vT2P5YpjhrZipw2PstiAgiKprvKEiXCpQJcwhgvNsbRFzZdL122PLQe6qYUd7MSJT8x7iG4sKnJrHb8juVRqUCt",
  "key40": "2uNTX557XUt1Yx8nF8qPHhpoPqRj9h5y9Tf9wTj1rUn4y23V6HFG68ot3kzm3MkqHwLCD8vo9kG2u5D4R51aQrVh"
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
