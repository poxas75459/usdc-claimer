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
    "24Bf8F3gLPZXAJKSQQPd654Rq1pkpq2vsjd1wBkYyjzmMouhgZoXnbmcPu1EQZympk5bQyRLMocjJxpwqojBYEPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u2Lvzv5qX8MhPtozZYcbTRNMZGf8wA9kcXUNSvcseP174X5CbdogFiTAEMsRbewCs5rVqmhNxBWSLwvYJxD5uVF",
  "key1": "4mQo7PrwMhw8oAX7v4ko8tzTw9o4565wQe53uGZK9oy5e6iYKn85YQjEbZA2zpfG7qh9ipdcrFCpdeeBcpnaF6KH",
  "key2": "2nVeBniLN2rMqMAwo3Z9evfMzLJnGTdv1C78r9XAKv8AdzbyUgoCipQUzUUcban6uUR15HkNRPhymEp7atnFng8",
  "key3": "4WifX3Pdn7NGPZdJEnfbRb8RPAwoBstyDoLvkitA8XrgXK6XBQuFK1oaUjJnbysheFbNcFj6z6kiL1bLpFp2bZr2",
  "key4": "34cA5dt7LCWALgu6WbaGh4KubohdZh6Rp8Fcv5BYHNVh6thgkWP57HXDoHQ9ADtdCPn8BeeWzs3paK1dVHimcpAY",
  "key5": "4dkbjiSnpbaqx8Ztr72tX3XRTtoYJrweHLPtRtmvLRZVF678VzaD87Jm92GX1PTTRJWCoVsJCVzN5i2z2f94ypKi",
  "key6": "4UM3G9JShHAY9ED84VgKA5EtYmETYX5798m3Aas8PgxLtco7b3K1RXtUKUFsGHK4mxQ4bmUH9A2QYnr8uLdPTiyU",
  "key7": "2AmpSnyo3oPpYfwsCVDTTvPMMve25cHRdb7gCJRmn5AwjD2fuZPVcghgGwgT4gQufquJTvvR1SUmFumHQBL1ZUNs",
  "key8": "CrZ62uLju4X2wwPXcdBtAmQ8JMseoTSrUUY7UiR7bfFtLXk449mMLbkVSEMJzQ1FX1sy7VAziVsYXn7tBbFgiN9",
  "key9": "5tqth52PhjdnYh1seK1pYXSoWrVDXVRpv2fcMvh6D6izohnrKieYqaXXdxiDdq87WLvVX2dEHYieQii6hLr6qaHa",
  "key10": "9NNrrKz4Q1BhDMnuLDaTy2RFmvsR8xKERXBTCiKh5KBY5km8j9RyuQkChM8HMkUta7JQahk4HaKcTCBMFtBDdmM",
  "key11": "476HxHNJpwipAiVTQTnThPxvheQWmvShMD7rtJ5McT7gXzHu2hk9wsTBX2arYpxTYgDsTocYQ3ZqXBkZGTkUMbYB",
  "key12": "35VswjggTuZXwiAP76uS6nNM5UQ2k1B5b9CENLt4r11jnJAciQUyZm3bAwCB1cbaUacmjPXKbd8ASc8B8MAVGsBT",
  "key13": "uRPJ8dUErzvEgvBSwtck5dgNwi9qsRE7EEcq2K82KYoUbpxJTkhPGU12tMsNLZQPJVBYche8urncbSvPnsevuFA",
  "key14": "48bhKtkwAiUofSQyrTJbgRzcXnBS1mepPVKsvgz9WC3qSiPngVnCTJZmBM1uavJfwkU7RZFvuNvtwZ5CpjstCcbP",
  "key15": "2sSwsgdbfPA911Ldyiioj5baZYcZtAJw2xbohyxnMoAzkfLEEi5G4fGuDYkAr2mRT4mZCewt8RojWkvdnf6RyeaJ",
  "key16": "53Vx1uM4opX3hzZqBygqbd3pr3S9WLzDAC8cPRPNA18LHp5AwcY6jH4fu9ZECEu5ZFBNDvdJUPvKiNzv4w7XUndn",
  "key17": "5Ejcj1xiMzjGAXneMkWTL9smuPh7uY4HhLfPc3fPpPGS9UMdKWpu1udvtZXiZ5Z5gz5BurW2K9y1ATwNdWmv6yr9",
  "key18": "4yJ6AvQrwWvz9S6hWeYavzKBz6LrM4anJhXvBvvsVCcpxDGYCmu2SdcL3cKF7xNgGPL3sMUvyuHdVnmeqvGzBt1e",
  "key19": "2zjYBcDDwm15Mn5gN7BHb8e6XT8r8kWHsLW1ySpuJRYz4aaxUZszeS6Ktjhk5J6vLwPrpNzBchaaLWTWu1v5UbuB",
  "key20": "4qMK755QonHAHnAHhaKwGBvTa4egbVq7Hpg39WxG6sgfSKzkpbSk81ZMh4fzPKjwaP2TqpgUsffz3XoB8fPcDfqL",
  "key21": "4PNt78a9HFeZKgDogU1PsGcRJB16dN6ZWVXDpDohJZYg8m2kFLGQmEaxBZF4ae2yLCfhXGX559hixc5UEHhiKV2y",
  "key22": "59F1HgZCvrtwNj1wPAh99rvXNbwVxo2cMFneFy8p5H5o8gEBNe3ELBcWSPwFXLkDUXbU2yc8Na2NAgFgf6MfPSG",
  "key23": "3jHhcGDN2h6LpY8MraFtZ2kNoWG4bJMJ5zs2jM1rLnsXi4ps7EeVvSjwV9a3NHe2pBHV7L9tYXkgTLqK2Ezo9XQH",
  "key24": "3tbwsghvCAY2CTnYyCDH4wzGBgaBUdGxuyn3e8SLKXYSYCGMFtAPkipMfT2Yc9qvNpFjG439RJvsfh6u2kqiqNXX",
  "key25": "62FtqiTP6N4Z94xGrCmJwtHcxS8x1TCuxbbzC7rGzzSNUc91WRQRjPAPJoPoPUeATJA8TuszuGgBFegan1WCWf7K",
  "key26": "5THPDEyDkb1geRCPNtxQB9yrkwor3yP4dpwyGU3fMmQBTHkuYF3CRjqUkiMAUQ1UVeCSpRmsAa31SsDSFHfRN55Z",
  "key27": "3kZHpneuXPGQYfFcmeLD5xmWKjuovr1rQo6dsxpc5TyuTuPGZLhs7i9HGmaSJH4mB2qgaSzz2y9caM3HURpQsKv3",
  "key28": "48vtxpXrxKC2hUZ6ztYg7Rvzz6Jy6xsrKyZozUorGfoDaujwrBmJH6beyv6xnFB8p86WQVHvdnt3MzWAiRd3JpT9",
  "key29": "5KXuTT4GkEXRw3dDHpi3b6N5ZX7ws8j2i69SegvyuyRAk4KXxeSvzUYUn74dzDyqxAp24rYyWratDynZwRfgxaoA",
  "key30": "3yfUKkB87KPWa367RNyGHZd9MWbydMMcMxpASznC1eXpAozwpTAAzuxJxsa9nvzcZmLrh1EwmhBXvCo2ydLaMoH8",
  "key31": "3jwEtmKpkz5daFhh434TCeQbnGvyiTMWwNtYw2NKXKrs3AEPBj3MAGFaProS9KbCsQ5KDitEPuuJ6w1Nyp2ofabd",
  "key32": "5pLJ3i9T3XZZXug6UvbBWus8dXqrSS2W1taEc7JFghcPgSb4LUvAu2RZviyFQwLPtHHVmP7T5CuFHUhvYTFKb6tY",
  "key33": "2YRi6r6vZ1mmjoyesGpf3q7nyyz46agHdZic6vNWMT7G7Pxfq9TwbVTwh8xJyjaSN3XcMsHUVUQjpGovdNXvhUf7",
  "key34": "4Ke8FdoEeG47sUmkFcZXjxH1UHDeFmqGsUwzoDmTnEcUffuuqwpm2sMpDESjtXpiGrDKv1zKk1V2G9gkZ6f177WG",
  "key35": "3gwEr8wu1vjLE3T9qcyqogzzGiY1pwW673gboPWYxbsNuHa2xQJ9Td1yP6bPSobuY5ZVhKpDQxsTzD2YJMaGtmFD",
  "key36": "2CCwcKbJtkGtwxvKTqsrKGgVGQUfsiAYAc1ww6xQpSGjcH9FR6L6zEoZkHSBFoyPnLb9NCJZjgExUHWAnriMzgnq",
  "key37": "219fVxuRzUKqe73htXmcy2ZdPPBRo9YnC3czMZxJJv3JZjRPndmnkVZTpxf1oSPn7SnwnS67esH5LF7CmUYndX4j",
  "key38": "2LNErEvBwUFrnmEeMeEC7FTvjpxPN2svgavRoxTrnLixAkxWNNrEKTkE5K2fznkM5CBe48e9p2oSGuQ9g8DCUbiX",
  "key39": "3whj9DpVexJjjyiDNVZZ7hWi9i6eU5rCuJPEY3xWAs5gQJiohbuQSUGz2ppDVR3v1Mmo57pYS7KQgoDP3HJpXhVM",
  "key40": "3pGJNB1nKQNXgypCPRkeinjuu3TRdUjMaXGM1hugZoZrDBvZe4irWbdSqnZnPS8Cys39PriBhhXTNvfJYN9HpmXe",
  "key41": "Ctx6aJDZaZEUok8USdMM41FiL78EVmZGWoBfVpGxY6bk1RYexU8sb4Zfbk8SwiX9XyGYvKJTskqpytyKiBaK2gp",
  "key42": "JDENCZBfMfCXFvBadBfTAqDiRXoCrSpzHDQ31jiUnKkLQNFhQmAxN4HHYz9WDW8pinN9uKACY2L78uxjAawrMNm",
  "key43": "3VxQMGLYKfCg8r6Crg3ErteTBYwCMSpwmf1vdmrgb39rTxry1cN8kcRq2Gj5Ww4JYxwaNVUKa8UjTJUiZigp2o7",
  "key44": "3LguAXEfeXLShqeP5bqowsjNFyNWkAgLfo2fyrnUhQ3YNedpNL7Q4cmLsr2KNpjobpyFn7PP31SSeKa75GN3HJH1"
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
