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
    "63i9V7JALrTvW2aJB1ffrQP5P9K81YmHvXEEqSdkWMnSsdTfhwRhLTHFaJmqPmufhyLsDjhnCFWt5m1wVMoEQGko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UiwdZXEgz7rsVSbbkRurzhav39vDX3C7pPfbnicZaG28myXyrBinwhBLLFz8DCgRUrJRUbzNxsLRobytVdnE6jt",
  "key1": "67p9eYtK71jnXdiThWyDJEL7ad4LQQmXAmFCVUWGyAZX2iyj9Pz4PGoZywYfeLhwxM21bfJq5PY5dLiHwb5ZYS9g",
  "key2": "31Ao22vbLHf8BjQUw658JCDqp7MD7yRDpn2aqYDq5zSBnBEQGjdytRr9AxXGbgVUjv6hg6hsZNb32xrGdq5b2MBa",
  "key3": "3XKGaPrtxCnkyfazLH8AsxWM543mXJdqYuauuHUbmvrAeGzmoBVpTtvABRxEiaCF4QMT5FggdKJpkCWWedC1NHcu",
  "key4": "5drHfX3RThu2awBKWG8835YLy3p53TdhqaDNFtLbGEdprZxsho4zKrBCrGGLoo5nJ3kECzwB2mgvyQG6rKaah1G1",
  "key5": "2BdUhdTwZqpt3gA7n4cna7Y36qH2hfbW5aS1zczeoCnvM7RH7uRYAn1TeRVGGg4DjJUHBA3bPvuWJRGYmG1vF5Eh",
  "key6": "2p4YM1Ek6wuwTdDeWaVnM4nDSFSMrXxE42zSyNNtQ948CSW4SiLeShBwb2LGYdmTqVbzdVidsjt8yGLwA6E7sMQ1",
  "key7": "5QqBmv2C9grgJxbpLpZcQkWXt9AuReubU3iERd8vd4zB5Hmye9Thf1qkLXmCSvX8Md2V9aeF3yuq7YnZ3Ui45X6e",
  "key8": "4B5ehNdt3uiPX87XcHq6mwbmrCZMYn5TtJ4dUer6GrhRrPNnJev3i578PnpsERDXuE7Gupfo365oMxsHfzygjEYE",
  "key9": "37LTXXpdBAwCCpG6tqCt8b2dZey7P3kcH1hPHNcQKM58EN7cphZSqNrGt3UdK65FcaLLHBJFxjHCcSTYXPKEoqb",
  "key10": "27LrB2BwbzxxNNhw7kBT6LPa4KdzQYvKrFJr51ejb5GwAwrEFaxQPVj45nKFZU2YLdkZrXF5PoAzeH3Eg6i8Yh1F",
  "key11": "2LunpaNg3sXjd2bLCoBus5mM1gJ2aoeVQWvZoR8yUUzbgK9YyWBVwvQqVx9Gw7Zivb4GnB83Xx4UbJ4GzcAPX4v1",
  "key12": "5P1zz21xwBy8A8CvySpP4ptsEDhJtLzoEZBjF34RQraeaQ3wAL8PTdS7Vfe76t1aVVQ7D67zHcbgKeweofPCr7Aw",
  "key13": "5YshFhVHbp8yKsjJsnte6TqK4pVdwjy4qa8Udj3SZMVKDoeDK1Ywa17GDborTXNuA1H4eujgA2pRfXZik9rLe9Mv",
  "key14": "FSNNhyLg2PBGnekJbPeBEGWMZ2M7YLsCPegbpAuRssiXRvVoD61Rk2tKTLdTYYXXpMz13CHVAYDS6DwSyeF5UUJ",
  "key15": "5j2KHb6tiTxe8n9UKEP1h1UBp4NCoTJpENqbhTMh5pjzgqh8nkbGL8Np8sooQcXSpDttScD2hEy9f13BtQyJxGxK",
  "key16": "3GssAELkPZuVjZx3YqUenYSqhDa67MPdks8AGaLD3iUpq9t6bZbYnPqyjNErBHVXw36zWbn8do5qrG2MXkE8qiZa",
  "key17": "2EzzYh1P85HmxWjAT3he7MfqJECKdcnNe8sgDk7ZRH2JbBRTutzV5riEUmbXq7MBqcL84SW2ZJoXC8GxsKwyyLSe",
  "key18": "34zgvJFJ16sknbNxiFyF2KuHqQA7ACn84LPERhNDBq2YeHeDw8rDtDGYHNdCXXrPKEgxk6taHdNeWhheWpKwPNcV",
  "key19": "3i5SGzmo21k2fwb9cbqyWXTDZnQ826YnAuGHZvKE5Xnb1cDR9eYCAbHWxBugyopBACvD1MpcQR7KDLABqUQpt2mx",
  "key20": "5zXsrLHQkwEer2EUzyJpAUud3L4FruuVbohJ4gJi9amM9SdVyCpHsL2DhPM6ceCtbUoxmKHBKPndfSZWR2ed5NEe",
  "key21": "4gwD92o5pALZERjHN3n4XJBPX4rnagUEg9p2nAGhgxtavC7HvGGDbibZ5itFc8bhQEsKWfeMfqDt932iuU88DKge",
  "key22": "4CievQkAPFBSwSadnbgxGnnTrLtccL3TKbFMT6oYjWbw5bsXKR21PjQVYf2kLUqcDnDsry1JAerJz57DT92KoqXP",
  "key23": "HyvHgyZ66Mow976pKwbwXa28MuBhpJmborGR8zczv7CNBfWypqupR5Xt2xVfdA5Qmx4yVmeRSTQQx2dq11LArRu",
  "key24": "5RzuuDLS2kbEgECpey5Dcwk3QnZvYkDcuVQQ2oRU1Mm2w2bz2k91DRTuB9B1jWaQpug93zEaWHMFj9z36fYJScFP",
  "key25": "UtLv5FzBsNq3rRa4YetZESNuZirMtdnJMLBe8VWw6DvUdN47rUrGJtwqreuN8xVy75xDR1pPdfKssyWpnwU9FQA",
  "key26": "3bTfYCEJm82S1cCgjYq6qJ5X1rxhH181eMMiXhu5SdmLZGem4L8nBcEeHQkVp9BZ7vZHh6HN8Qb5jm5KXqujSXNq",
  "key27": "35WiUcgcHBmkMnwtDztKFjue26YWDAUvJE3dQwjgoLX8BAxhrmV6gNm4mndHP4gN8T1mWwQvcQBHkzVxiccZNhKt",
  "key28": "sVFkBZ3eXoXtYJ8ez6B2pnern766dLyTc3RgtJxwbWRQm6X228JVNTG34e8L6i4Bmrp3QrQhEDczskYEADPamXx",
  "key29": "tpLRxB436nG7rKHaSPGPj7CamStBLFEKtcYEjA1uMBGMTbQxNnABDo6fdqZAttuH3Z9PEg5AGg7Q3JtE7KGnMRT",
  "key30": "ZFzM2wG7D9saPPSdJMnpCAAVzmq2D5qJWfT25HysKZgYMzFZUuorr8QPZueZGGaHxXez6WXX97aYHLJCVDAzVjo",
  "key31": "4xZsNYcpzevjiWRZQCPjwJWwKg2yoqT38y6zxaZurZ1kgatfR7NDYei6WMVSAPYRCwuYgHES6yHa9694QzFnj57H",
  "key32": "3AGKxeTfoLqUgfLzYqc8qHKYi7jTXqZuEhhEzMqMc3n48xSTdtqX4dZZnvjjJbgJJXw46vR3hasnWL774dVG28r2",
  "key33": "Uw18WDS2sPKQdbj1wqkGT9xc9D4dGJFeHCqQCq9FpKwHVKnm3CuSzmQoC12fGptZXdw92w1o7UCeZ54KMgN7yBK",
  "key34": "4UDfuZqw6PLFzDrxGSThaAhTEZQqHLUiE4kBkpAqPtdFgQayDgh5qHdk2MJdtqXeTcmSqzDeEdbuVntnRKF7C23F",
  "key35": "RTb3odHXTbPSUc27yC5F7tMuoKRisykfPda67szjnCS3ojdSAH8ToEvJCej9qR7rVHSsH8Ka5478WyGpA8RMQt9",
  "key36": "97BwssahKfTUzwjGJYY4xNLVMN2XptvSJdSq7wRMJW8pHJ84Sys8pfVB7UEJZhzPK8H7XunBMHrimNVUnJUUov2",
  "key37": "2EzTWEDEMpHGSFurNZitLPDC3zNmjPQH7zEezJiiS2z9xnjBi2N47etGuvnF1EkKAHxwbuQz7tPnyX3ha1btPeyJ",
  "key38": "vfarajDjMYcJ7NEMFXuhgB9xReXBqxeMdEifQ1d8mj39SzS2aLWkc9H1Qd6dEvzALa1YPFzFVjUGe1S5YmX6nw8",
  "key39": "2moHe1VxTqiB5YmWgrqoWGgeJ3W7eJCccSrFxt74EUZePzUnsZt9dCxBFNaHXNwqvTCwnRpWUSPJ5jwwCEP7DwFy",
  "key40": "4wM6Q9G6abWQKxDyUDK2p8fU9mRQ9V4CWLyheMkWKZxw5PCJZ98SenDH9ABuNQaiEKFFvJjMV8vuhgG4x9t91fnN",
  "key41": "61cuaeSQHhrxPgfy1rdUWaZdQYeBZZUbe2jyKFLhyFECEoPoP3x1qExfv6yPkRZpV3SsCkJxpzfthVu3myaDnFCw",
  "key42": "2AK3L4o7nz9GCg2Bog1jZ7mqa5XMxfBReCrwY6Aeqnso6uWy3MmkexE3821wWXT3AvuPrEEciP6ct6m3wtE81h6Z",
  "key43": "3wgy2ovdCjQjyCX85VegyPp7MEo8Ew5gSriAowJknmEZPD4mKU2MLgnFunyyMCzF8nqWpmrWPxMvHxdWqsR59ptt",
  "key44": "2svTTcGsmU7mhh12jM561GfkGZTgJA5eyfo3vkYt7DkJfp9ypJMqMQsiKouyJZ58bhsDQyZuxVDnNtNJQyHiHNmQ",
  "key45": "5HgpBkjMTUskLceMbJkJpHrC6GZ4T3h2ckoZCAfHrjeXa7ykbLUK79HQpYDcqkk1iZZJfomz7NvYuqTPZZkFeTBo"
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
