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
    "36YxaryzZ5nPMATAYGSHR6wyPVx14P2ywU5mBLn65EYKhX1G3UwspcAXKecZ86KLPkXZwvN1MJxqfj6XjGW2Jg6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FTth43vnHqpnFdnsftgWaTsskGcvz5yTmiEJ2ADqpTcpmjk3sU1x2HPdRtedRvkjVQdzZN8uSCm88sJsPYpCnkE",
  "key1": "wJfvn2vgfTDsaNckpK6Fr28oe9z2ZHW9jxT3wHpNqq7S2an8vF1QqyNVAJtm4WbAXfSqVN1GkgySAkBhkks5Fop",
  "key2": "qEsaRBSm37eGLTiJkAeRKxKobT1JzPB3Ry6Wp5FnjnxLeHnFSj2nCrdpehpWMejYAYk5SuEE4UfxJUyDtaKN9tc",
  "key3": "3vSihHjMeX5qqrJZQdyAA6h3MiJVt1FLCdGgft4KuuKm8ThBWYE8wEvzKdRDUg8SbmjAee1koUjqcw8KMrofCyME",
  "key4": "LeGM9Se9Ly5fB5ZDLFTCZY5oNNGRPL8ioVo5Qtyodm76PzDH1apnGHq9ZjkJ65SK2ftiJx93wBnRNhWsb1YGJq1",
  "key5": "5w4ZFhg7iVDvRMePDKgRMuNTfiPVFA96tG7djzzj8MRjXAh8yDLZUapVcfU7M66GnBMDZU7ZdUtFDwRDAUsaviZS",
  "key6": "xTD286x6mpPmFJFzt17MMEnpB2h9ohfzLfbwSntYFFPoeGjCBHhjrQnfn2ZC7DQfV2eMjJ7mqbmaSYu1pZUAg7o",
  "key7": "3WCuSMLkdPmz4prjUN7THyCMsFqFzoKwLchaWzqdEYaptuaF5XyhiLzSQewUXq5GQGGKF1x5Gy3XrsA2GfWjhphx",
  "key8": "2x57xaABq3BbTSLNaMomBiu8fQ32mxdDeMhpayFpx5g4QpfknXdAVA9dzVXFZoywpigYxmPSE5FogcecadjRGnW2",
  "key9": "2D7a8L3oNCbVX2ba4XSrhjC7sUpzWxUobsGz7WruS8HF7ZNTvTLZAnymrjbdpFg1K52PaexmwJFz5xX9e33hHDEE",
  "key10": "5Mc5JoxReLjDZucwJiP9ncH8pu12riUrrznhFitMDbrbLFt2kN4uEixBBzn8qMZzZUKMGMdJt4Bf8ookSmpLZdPj",
  "key11": "28DtcUpc2kBcveVfE54pA9Gn3Qi6ehpCdPLwN5tWxbsv8KFkVdzR6BABDdJpRGaxNWrNWP7wfvjN53ELUcLjbsGA",
  "key12": "41HLWpqMaSnKnjPTJzssTy7pPfhMfCPVn4pMp96ZxHhJQaqAQBzDaZ2LarMjg8ZYV12CShBfXUBvUdixpwCCPorj",
  "key13": "4By4tAf4MNrum9hpTbZQh8DF391aENs5BFH3CzVKCwq7RS3s5AnzJiLGbgpxyAc7KuMCvEgxTngv6kDwRG66APh5",
  "key14": "5bvMSZ75qFQHxUM4awQkqJx3hWwf28wAxdcXoZ5dHan4iaXUiHCkm3v1cfkYikfibzDRrphbtJ1wKNSEgqTdFkQb",
  "key15": "bg4KjqYB27NPMdcqVKHoEHrYuQ7BuokibJxMF8StqmnNXPrGAk5w7S2VmybiVEQqxdRh5WSCtwJFR4mG8ewtLDB",
  "key16": "Fw2MfVeGjp35eKzo8nK8JdLkBZtDJ1GXLpUyKzK8ZQ5afSkk8esHQ6CZRV8c89ZUiBVB1Rpw3DW8ujuA4kdUfR9",
  "key17": "Kab9aoz6FcERizZ8egWLMcWBPDxRfF8S5LS4ug1WoGXpoNKERNHc28L7jC9YZVMEqtRVNoDMVyaQGDfvFhajLQL",
  "key18": "2Q9hvmsdj5cjNb6vG2TSgSsXGcd9a9kGKeNWv8NwFfmExxvYtGG2vmzLfS4x8rzc1gDCLxYo9zjKNB8zMousbRT7",
  "key19": "3DsuG2X36AcgovjmzyYvcAn38HMoxsv3oRr6BvUH2MUfqTKr9SwRzRhSYssoVkMXBXKAtyCc3mtrACKDQyoaVg2",
  "key20": "4mQegDFEZDomHmjFUefisXfPw5H9h61WYXAJRUSDrDEqckAEqAEG72XkKSjpenn5N9PxjvUijSApwc2sxNYmp3pL",
  "key21": "pfk7K1eP5DWTTdCmBQpMmsMJiQCgQMsBGCxzGtuBNkMz9asiBXdVnEUCX1zHgLaEr3omJPZyzPpCLvEBZYs7Tgv",
  "key22": "4XFxEeF6cxHxRscopP1ET5T5JrQzdefB8wkhFDLwQLMsHr3nBYAQ5AG7rSNSoF38oN4GCdN9CbdVN38qikUfEGPV",
  "key23": "3VJkgYpXisoE5dRwsAVRkoQ2YzkmxUAARJPKHpqRxWSJisuacK6ZDcPLAY5ypeuECFmtaExr4rbcKzdEsA2aLHQd",
  "key24": "38ib21MLAf4Xeuk3ZLFrj4rahs9BmeoTr4nUqYQGtUdTZk31ayDzsrXJQV4h26oRibRLT6f1wRcdaLe5xTNJ8oHv",
  "key25": "3d9wWqYbLPaM6xa1sVvKtDWh3UhAAbbu7q3hnjTaG2R3sN4gvckCNhyHHgpJvgwdV7j2YBkMzFwWMRSVhMLn7ywY",
  "key26": "5NsSX5sqcFe7sc6imkXux7qsuAsyt9ySCVsaDcsAxErvVLUmEc1oCXmNJAwGVpDkdQsKswymVQ1vhrvP3xNCNkf2",
  "key27": "2gbji13TTDZAwdoA6sh5KYPThaUqHg3LtbYYBUk6GP8vycyYp3kCPwfjADf31Thmr4tcPrmfAmf8x7JkK1UHCfFP",
  "key28": "35qoZTDP7Ckx56fuhL35SsenfUytyuKS8jC18zpzP5M39HurQanaRTzNQHUPx1MRmpkPWWDY1rzhDp1xDNV43b2R",
  "key29": "TYWN4jUww6ZELptR2SHwh9tveSNdqZ1xT2zv1FW8vSxyks4pZgYukf61VuZYBdCv7NUeC5R5A59zGtMc2497GrH",
  "key30": "2xraemSx81sZbADeqbL3HqNDJ7nZ3QKUgzco4V2YHtaChyL9DxQuwS2SrxtdL3RebHRfqg9TxJ4FRo9mpv3iE9o",
  "key31": "4eGX7DTpPdNGuMbzuRKHmWcfUxapRwZE1EkrLMJLDuAUZzxdUkFcQDBAZMZN27YcXeWrFGP8yKpwrsZXewnqa712",
  "key32": "3F6XQhUMk5FUCRgEQ7DrxrRP5DUYyVuaRWMzudM7ntHJVe2UJTnLXWQQkpvaiTgzHdhGRGBBf1o3wphxkBDkhfYQ",
  "key33": "x64o4DWE1GcaFXzLtyUhxrFnoZRLhr2u4XBqsJHrYrv75S6jRurg2s1Hz5eL2tJpa9StdJbEGAbAwrKJwqMZXp8",
  "key34": "uiborUxaMkmYteBQehP1B7rKBBukEfs4HkJcP1kqcvhg3FcAkpSYsqo9jUmQoRC2A33CjiPLcvfPbXmPx5DVnrw",
  "key35": "6ZfQpocea3PiJujh7TYuVjY49DJQKRVusSVfhWWc6GoZVoJEg3bdjCcJTkcULKYt3CN96hBMEdfuxPcye3SBtTx",
  "key36": "4d2fk5dUSdwjSX6jmYJnPvm1uSrtbjSe6kzJZ6bN1xxpVQo4uthswGWdQMfNacyx91zKiZCSQTBSZoAT6gZTJgzw",
  "key37": "4c1uWQApY7m5ddnUQX7Qu36hGYKvGk96knmMpkWzJhFMkfZjo68yvoqaDp6RUaFYAEwQ69AqiRDCTgLEGbApMo9b",
  "key38": "5zmGFUY5VUKeHbSHfL1EfULLdZe9m7XTshxdpR8wbZRDsafiHNc6nZ8c1PVQdvhRjkuiJAME8fJY3MkKLzF1wUsR",
  "key39": "59eHtcFYjcFnJQfPpHP5dn8JK4vTj6YBdtZZxYWdw5p16z74hY7WwFFY2xiYjhpZ7REgNrjvJHjRYqAhZJA9zx2A",
  "key40": "3tNQ27cU1tCE6JrLqqgtDAWZapFdDTJDzHrVbzg8KpwWs9kXzFhd9NGbzkXDCR76aSYD2WSSXEiSp2UkoSQbbRGn",
  "key41": "KXpod94mvyY1SNPEJcCdLp7Ez2cZYiX6EcVwRxvMG3wzxJsdGK2dRQuKxU2VePUKEj3noX9cm5T7eA32HNnjCoA",
  "key42": "phG4CJA8Kej4pHTyx3UhNHaT4QrdBst77KFTcyA8gKRF8fm2Qo18DJNkPNK64DZu6Cm6nVpNyWqTwKG6aEhixbS"
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
