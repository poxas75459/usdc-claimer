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
    "Lej1BfJmE1CfrxWEsdLYkE4hTvJTeweHzBxRHmkFQFk84TACxKFVPvDdZwKN7m6jkbzN5tg9646WCJwZdhrTHga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rrViAPCBncoztvN4zGngJZooexvBbtQoFz4ejaKqxZy41Wd2vtqACWqASSPK8Y3GFf33DpUx5LGgFDMgeCjt955",
  "key1": "3sKNKJXSyWbm599yk8j2Ek9okVRT9TxdpqEh7M8yZpqY2d8BnX4mjAB9eMBW7KqqWeQ9tLh4hkiE44n7ryDYEWVv",
  "key2": "JgkbG1qb5oRtnbLjB81FVxv4v7auq8Sw7HquZzXDm4cSaFnwbEFdK1YRpmcCTQNPsQdtpW4CrQoUUmdaDY77P5A",
  "key3": "5nefcN3MrPHevNPsD5iJbZXRo3XZrokHfD2a28ycMeg3mCHAxgRJJYRwMSXnXXsGESSzqqfSNSzrw6eUbAa7LsNL",
  "key4": "WLt7LAVLK4Np1j4K4iUuzs5ewYu5WDSwzUadVzeERw9t6kkbmvK33Dn9NVrc3TNAXJEUhVkdEaLXoAnuHBgVYrP",
  "key5": "2mmbvf7ZXfwEtPRMfjQjxxrqrSLargNpjwaHzRVcdLpNyz1EFDpdyJHntt6DmYJCS12oPsxVduovHBUtvkyFmiPz",
  "key6": "447NXtpB5bhE7g4rb3yWhmYCxWcPa8NXaxA4gQ8RMsQrWLZEYke8LntNY9XtgLLvyfgMsKgLrycvjbqrYWhwMiWU",
  "key7": "2M12PM4os4qLn9m8h7FoLpWc7W3vN45YTFK7nr8iipvRAHCH3a5BFZr3Rnc9amKMVBAzB2bsZo1HaLUZxXVfatT5",
  "key8": "3nSVvXZFeR4N85d5rtw1KghkGUdbijBu1TV323wazghbzMCucHZTkVojzajoGG6ysE1jdHpDsWCZ2XDUZAku7DYm",
  "key9": "45BQ6sVoqKaZcXcdujyxoczZWgfeH55py7YJ64iCF5qXWPqVSg5rZx5SRy6HBUN8etuazQSj8yETfPsBAJBzbb6t",
  "key10": "qrzLCqHGLztuQz52g2uvVq8rssyupxuHc3tjnnwCwrbWGmuoetquGLCvDjWVXma8DYhWAe75YeAemovTWCVCPEt",
  "key11": "2k4GT1Q2zKEgjC4ikdevpGxZdFPUTmtZjVFUt1Wb7D43jHdtr5RDdepVgtpXd9k3ZXMG1d9X8s4Q9ioggDCGPsYU",
  "key12": "4U7v9jZCtmEFsdwHKyv7ncTV6NT2HT5VHPUAAJSuQPWmQiTMUFQ8RCRh7nziLLgSXvcE4kLrKPwmuqeJ1nRgYQR1",
  "key13": "3HzgVtSUtQZTmJ4jN9FXAwk39eYq1NELfwrMKaPBccURLUVFXoTKQDTReuUn1BCjQSGxPx8RcsMepDmu6s73Uq3b",
  "key14": "5ioq9XjRHqFA9AA6jYYFEH22XgjFsELR3heqL9gN7V49zSvAy8Wkr9brNrR96esCN8qQjo7gDdx3B7ZAyTZRsVBh",
  "key15": "5AvXWuzYvCkpcjY1cYDViMda9n38x3L99fgN3XwHpHLrxa26TxajRYWnXbPtREyY7j6SSYYGerLNmpTxzxdtHqXV",
  "key16": "2NvKRWvicUzsBfP9qT7Az3y52skzq4CAHUe1h4ySR9iz4AnUAH7NErqzYkwnLskG9RfPEyiftc75qBuKYFXnJdPW",
  "key17": "tDCQhdNBdjJegCY4r9SzVqhh8AwFeSQeFWH5UApsq9u8RtsCkKkjT3Ag3ij9UkgzKMdZZQKhmKycSm57U8QmauG",
  "key18": "4ZovZXSqGKEVwfDkUi3u3t4wWXVuqXHCM4wZEeAkd2CTXMG3WjfAauB2xZGyiNYQfbRBGwHEDM1JhaouHUc6f77e",
  "key19": "2jAGvAuD4ktXt2syHBNNKhp4HHLtPPNB1tBQrJ5V17bVSAq5A8WnpJEMfJhK9maudvp7uqiV3Efse5HCnarJdw3G",
  "key20": "UW78nAcxWKtXT7MuGvs5qLo4s5XwU4aGCr2aCcJfTVgAArNDNwMm8WifwBjd1tjWY8HyYH3b6ytreK78cEZbfAT",
  "key21": "5fQk7VNA7uafy7egWfkB2RJrXbzgZzVuimfTVv4eLi5x6v2ejZrCEQpKWna36jf1Nmfjc11xypYyccf8aNdJUaoZ",
  "key22": "3GS3vHMEKjzjKeK5MYiPWdDdpMqtnsqUNMSc8Tm8HSrMNdjY9jWK4mJLNgchhMM1ArYE9JGvKHLN2BH3JzeCfQjQ",
  "key23": "NDaKXkzEkzKnHF2xREjvSfw3zaM9Dv6L89ykDbVXz54PDXs9PQSy647csYfizKLBGpn3uB3pSv2eSdZyqnJPHtM",
  "key24": "5gAdfW3wwPLrP6pfsCJXZDwJc31hAzMmRko7yzDKBJACEbjs25Xhgu5xfy1TZqjnRrDRnDZWeUCERJuzRavh7XVJ",
  "key25": "e3MeE4iknANg18g2MJ7rGKasajqByAhVwKL7UF6Q3jWNcLkGATBbcUrDyYSk6quqkxqXPnP8zAYYEVRcjhorypr",
  "key26": "4oqPu91rv5RZyZDYacNdZiWMXqUeJM15aHUSRN5cKmdPDV3YxQvsJm74g1y5tJWujkAM4fQrV8SMUSJuzbnCwPW5",
  "key27": "x7Skrwhadq4bUjf9nipsBKWEs6sJhLDt3MgTBMAfPRy3sP2C1JivyJF8SqU68Uy1SoHvmgfuDSCxMMCA1h3vYBM",
  "key28": "5G8PzMGyCMz2mXWAJjhs54KraMQqyrjnL85HfynR83yzNXPCn1eAJxnYDpDfmRcVDEQejWEhH3GVm5UqDWpB2aJ",
  "key29": "2S8y89NN8JnhUvPznVMeHUk7Z23nwoZVxQKvrm1NGvzoeZwPaYnej7pt7jmgezw8sZp3nz4sgUuTVjubLqehvUWf",
  "key30": "51rp7oW18LsXDoAqCtBw545NWucE2KNfsNnrF4xgdmKg7LKBrGjPDnatYyhgHAXrVFRzQ1gyKFi4VjKso4Y39J3h",
  "key31": "63PUX1pCC8Xathsg8bqxW2VKmgdQQEVk44NRzfEUk1YF4XvEdaXQXyCKkWs5zzZ7idvDmikBzLEd9ac2EV57LCGk",
  "key32": "3nyhwTbZVeqFvVqu4QNpHJfcaf1NuKihpRt5gJdwyUrL7jkr67PzpsAFMQVC9ibLyd4nPUk6Y4uYTJwXCfq32bpN",
  "key33": "2zamSeK1pqHv3yuVCJPEm4CJSL3WF4cNGjQDxRkjPejsRHvtjsAPbQ4YEQaRmicYtTchaVfYWtVopKrjpTHmVci",
  "key34": "4133pDu6aA7Tjr1k2RA8PTq37wWTmzBsjyuYaGzgZterVJrXrdSXk8GY3nwXXGJt74Pn5d58QyCb5r4DogiPDu85",
  "key35": "3qUYe8preNyEEDr5ZqSdFFgVboKNE8oPtpWnWPnFecoyW7ZmFaZgBN5QLXL4Aa18oHZ9MSnNEQjxBTHuPasBsdeX",
  "key36": "2Vsh8mUxJ3cNPPBeNhHK2rFiZKoC1BepAJw27KMrtoVmmzd5MiJTSrs1Wbtiibt6WrT1QQxostN38RkF2oGv9qaS",
  "key37": "4oww1g5g5baAU9X3znWZobSVgos2AzPi5bSZ3HKUyiSpxyAWmbKi4SSuuZhnPimSmFBAs4dEA9kDGdNvXJeF7MXJ"
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
