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
    "2pi3dwZGH2yZXZSqrNw9oiRFi9HKj7ZgiAtt4X8eeVRhQstw1XTKNeeFKKAXXYETLSCK17HNGsPmvb6AwjuBSy3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pE52pNDdrQ6XKPrqhCuHRr6RXjdL4QvDrBhfy9Ca7KZJxanwqynq1NWEzVADySAaUXFcNriW335q2nKuCcgt1b1",
  "key1": "3SfPZc4ymdhWuj5x4CZRtRuE7yXahqHGyu4FmYdKuwenC5QndyAVqW9pxrU5Szaocui7SheZ4vvxwpowWYDmhue5",
  "key2": "5oiJM1ueVQLY3AVavtYbaZ5NWuxHkFtRJXeHhu4LTgfhxAvQ91Wt2UTYehvC4ZPSt6nVs3PZdqwnH3x2KfBuFE8R",
  "key3": "3GnhjF9XTvc8guiNAAzk4fpZjP9ejfQsWz1EcwfS5hXAXzkYtpAYJUwnnYbQYQjMhn36BV21bhiKW2Ri8KetAMF4",
  "key4": "2tMAxURK6XyR6BVet9KydLw5rLbZHcWAJZd19fPs3RVPswPnRyAaM7WznBtBLrpKMvPRjoEyZtDfK7T4jjy6H85a",
  "key5": "3HXgb5ogowGDTdS1hajzWZRGuufc3UYj6f3LUkwFqUzP8UsHLFV6U3fdCTma2e4Gv9Rgth8vj9gbVdyaZCXHi8N3",
  "key6": "5mG5mctZh7Rrs8WNCa9a9LDieKJj5DmqUYFJArgxUvHbpMQvwm3yvnszttKgm9Xck4NqkWp5V4CVV9aLNGr3Ba8H",
  "key7": "3gAwzmjH9wma6t1AXFDF25tkGyNNy3WJ4hcjNwuAxhhBHyrJsMRQ9Z3nYtuamrG4isCs4z4yv8MYKHdMsAVj27Ax",
  "key8": "53FPoDcMkT24NUC4szwiZwkeDzGusjtPcVW5hr1AaMV5pvrppwgS7wHnwVxeiNv6dFT8EB1AUn3ixJQe7MT2XrrX",
  "key9": "2rhcaJfo83mXTpJfyVhmG56qpBWzwcfZYZR6M27o7d8B5jd3wSUcSsN4rtM7UHsNrUQsjDjNRqqTUccv3E7625Kg",
  "key10": "3eknHvnuw9xTRSqYZAfCt2N2wHgbV4cstZ5e1B2zTTm7KDSmUe6MRieUXwoRZ8ckxGLMxikpB8m8WE6oJ3PxhVdU",
  "key11": "2Ab1s543jDs6zBJxwdPFDrokUHfgiS7cczKfQH81RCfLtqLzPdj762p5quZYeGRj5wJ23UKRcxAuL9iA6MUGkB1m",
  "key12": "dV6WthpAVvqNA9BG5exkXjQZXn4XwHsAeacu3CaGGuE3DzYg1SpQurScEea3QTT1uwjfjGREa3DMBKeNbGa5VSb",
  "key13": "3inXTfYs62gkYAc9kFxAWgjkeJXuu2SgUt1VxfhTtFnHi6rVZBhw2aic6XmfEoc5oUgSRdA57erbEyLtHxjKwno4",
  "key14": "2WAmYFSuWUrtQWcYEkZB2SyhVoNYyBtCdKvZRbfF2GunAYcq6Vap3ANhbSYAzbG2X5RCM5hqLA8Y1YSqDBM4e8sV",
  "key15": "kX78LuFvADhDsrJmhFZ2vsECkvqPACUNFLe41Nwv5Bk4WmgQcy8UaaaGRKxHSp63JfN14A4K6cJRrLSabg7du1x",
  "key16": "51pzhF7Krx2xZH21MWA8W9Zmq8BgHvnXSkSVcECT9mFwvGU2ki1Qd1dLJEo1u4EmEnyTnmCZ18dM3sU3ZFckowBj",
  "key17": "3Pa5EeHmF7TYY8uFXK6qESEwAiFbMGbnHuWAFuujowUYpcy4DWubyVRtHf5Hcu18NxvYdHYbNigx395yG7cRqARM",
  "key18": "58nuveDL6LcRiYB3jqy4XotoHcvjgPUY4eUwDzUrAUAM7Q1vkZRqZMS2ADsCU32xBgvGyzHML37YDwattUGmo3vG",
  "key19": "2mvqmQZFMxRjoLKbPBi7or31BHG9hVgzHEK2pempsrkSQvychaX5AdBLFeZkqmWDSPNxjfdYmeGS11TQAE4J21UN",
  "key20": "4i7MhgZC4JejyZYctx61dPYvzz6CBU1XEEKtAP2wnfjRyAptMBqw3H5bgYxdJzSX4EHVhsYbauqVAcHNicSHw3Tu",
  "key21": "2CaUGVLj5CPcCVbyv1bmiZC9yHWcXLc96sGf2YqtGamdFHrykxa9vELbmyaBy8iNfj3XwJ3PPC4Wk3dmg5whkLvj",
  "key22": "5RemWMkXyRwsudMyQAfCmiCwUqM3JJxZY5pXjgtv2uxFd424CjLGeCXFjTknjoTGTYWuij7xyorUhbxZ4F3pn666",
  "key23": "516HXyBgZNuqEeVomibTN55Hr88Xypg5S8gyBzfAKo55PaULkCYTmp8NGEnvV6QixHLaTEwxyDhuBL7mbiitZxsh",
  "key24": "Zn2XS4PS9byNr672s3QN3szuZ3t4VduxyAnBdjL272zsMX18cyQvNDDBMMqWD1uooseyvrksmnuFVGKhxTbTXa8",
  "key25": "9grfMwh7NC8tjdjT4KuZy1L2hPKXA4wQAjKPq98g5RD1xXiiAbkr7ByseXBEQMTiUh8BR7yUtt9hXWFY4jDg1fK",
  "key26": "d6mdavTepKhRxmk3goNxLsVcb5qCTEDR7EA78J7wuqKxHLdvdR3Gr1o3p6Sv6PAJWgYtS51entrzCsbWaVNc83e",
  "key27": "4VZxGYwr2nm2Ep55oyFupvaiCaMF68k3SWzzmtEo1HUp6WHgzqDhR9AbfVgQrrZHB3B8Hpm6vH6GzDDZP9oPF7Jj",
  "key28": "5SVyGsMSxXV6HRYvEfCuAn9Yyes6MXAsLZdxq9VHSw3WF4UAqpoq8EHi2NtLBszNrmKvHjs6uxn7phi85Ri1QkGt",
  "key29": "4r83vypW6XtKyRewG5kfJqnwFYkrp7kUQYAZRaYtojXcy7qU9vcJvAiL4tsMcpP4cWBgByPHm6EXxgxXxxn6zH8p",
  "key30": "4T9HwfTdc9sKSLbDgPKiCjwM6B422zgmbYCQnL7TZE7uLZ5i7ed2mvuxB9p2ruV9MsVFwUwXLCuH1HMUbEqgmx25",
  "key31": "3JayZp5YGnvfhNH6dmBowKeWcLpLMKZNSCTDyD2BZ4m4cuEiDha85Y9PLZ5iYAQvqKCr3RyX5KoAtxmcGeE4NaDz",
  "key32": "tBDW2m9uQnsSbtHf7xYfewuwJEge6Fq1c39FXocKnJKzBj65wYdWN2ur2NkscPz3g9d9Xt2y63nTGcRqrEdN95T",
  "key33": "32hcsKy3x6GgkSZXP2CUXvKpzmwPse3hHF7tDC8HFgtydN5ovK9odHDBVAXzeoHNV8qzP3465gDsa3KigC44sf6S",
  "key34": "5mnrFGLLA6V82JXYYQ9tD4BBG4vV3zd82wzC6fmx63p9idwtxx5NHg3H3r8LCoEjQrBUmexnrRwkjvpffRqU2eWQ",
  "key35": "2vUcv8wiK7ABa2rh99Kz1yJKFkJV4VhHpTxpMUqK2qyxQZa2o3ErkjnpMZRv7psGoxQkBZz6YfgiKKXRV71VkZzG",
  "key36": "25MwKBb91HS7zzkq8sTzZPxamrcgPAACB24K1LZaXp6zsQpFHqrLquBUUUdsf3QpD3vNFu4N8qPJhEvkfraYKSUb",
  "key37": "5EMtUmf2cWcCphC8GSmGDGeANoDBvvDtJgeDtRXawFRPNXwcxtXzBEEUgS5nKVYvktWS2G8pYUfgbhsxytPfw5vH",
  "key38": "RRZnGoHG3KTRhpxMf3sPABzTmF5976YcJZ33qvnbEZPW2h3GgyWaJNSPhPkHBDKKLowJBExajch1dtJh7FxCv1p",
  "key39": "3vLcFRbtnwLV9V28GbVAdMgqevAyKafV1BSBVmvsQFpkzbR7HNiY4kcW3tMiNenijPXmaHaM6Kbx17VqBka8Necx",
  "key40": "3RrUShmaWdRdxxfFhPVUTGXf44BzSf82VGCX2qCu8YiTuosfox8WW3fHfSUiG5uKUnXbpF2B2jJZG5ENQnnrP8bs",
  "key41": "2gtfa7GX27CHc9YhbkaYQ3EwkqJ4N8XatVPZzcrCyBxdzFzx5DQqutZTqTm1c9sepjj6mrQPHsif4mN3rNX5Yy6x",
  "key42": "4o8GDMEgX62Voxbcw9UXr2M1jYHaws1siGU6uJpkRoJo76YF5oGJ2sXuuJFNx1SfXzrEvZNbtK5LdURyJUnHtjA",
  "key43": "5hiBQjDNJrJ33xNNcx2j8UN4jwU5CrN9sCdzpDPsmWyJAuZDEaM8jFVEqcFkHWa7PYE9V2Sb7fz56f2Q7J79QvDr",
  "key44": "4f7zGhfuEqoUL9JrLZ2Cr9FoEyRNg2w461eKCLpnxkeg1WJrPXsxP5NFcu6pmjqn236gETNCMMqeiaYACAamhNX7"
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
