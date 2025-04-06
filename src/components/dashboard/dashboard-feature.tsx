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
    "2sHqdgspsgr4fCFU9hf4k1uehcKFs4dmpQUYYB8yat1RXh8WEmaSZXp38JEsV18jrwKts34foQPWcp9y3ugx1CYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n9U3MaugqSBcjKx1WaJEyxXmx9o99aPjJ4WhQ8KGwqLbDFGuX2DxfMaEak73BK9Je6wgRfz9VTUSw45rNyVtG17",
  "key1": "4rnCqpBTJGX8t7dFJHrkLpBTgqy99pnASq4L4sUwUPAgEDi9eaUX6nnwYVJGsyttNsUAyjNAgggUbfEV2uv6BXRh",
  "key2": "3AbahyR6miyHaHXY4Q9V1ocrz2arS81j3c43HEC31S1snUT1xC8ctVEmC7PCH936fQf3BJGRfeQp5BPjbvSLKaHA",
  "key3": "2HioZpfDtUWnJKJ9J3d7z5JXjvSD24mFpkapvMt1MM59VpMF2xcfh4boX6HndAN2k5BkG6RSL3p1sDZqTaY43Aqo",
  "key4": "eU6kLwpXEcTqbp3gJbV5Ha52N8H4V7AFSQ9szr65tqMgJdHEk2CyVum4kazN2SKWwHictNHfkpGRsA6bYygr2ad",
  "key5": "5gEHQEKArjoB1N6v9GznXYQTxf1AFsBYUmr4F7aCsV9q1hWwVr8xvmhJvQN2hQG3QVMVL1QbZ4ir1d2L4zxmB1N9",
  "key6": "ByYGDgE3h38WyGFVzEjLFZjWXEfh97VFdnULAXHkXBZTtPU3ZKTVSd474KJizqj2tcj4D1rYD3vhi56L276Ap6w",
  "key7": "45v9HMnGFjBeycLTfj2vLfihMdYCsuTCQGCk13nzMKDb3v3jhAq4vSKYs7XkADTdL6X4oLNKT2nxC9FCtj4wYhSb",
  "key8": "5PhPhzHa37cpnL4aY3xgv1iZRZehqgFKfdmMniobPMB78FbfHxbLaABtBesYFGrmLv2sx25wr6S6YNv6BMhW91in",
  "key9": "3SeKpLBjWGaUQUjLgkFxEnXwLknJSN4hLE6zkKfrrNvmPGycdAqHmBnBd8tsY4XTPe9BbqW6EsGNwDxWZch6amZY",
  "key10": "4ZMYhCorisTywFN8TwK6NKTmzuFPAcL2qN7nnMmaZgnPwh11TrnBK6pKxQnWGuiR1TYdNyAJhMJ3K6Sn3hLoQZdt",
  "key11": "gSq7BPZTRVx7u5izUK9dz42NFZCaydjkS2im1F4c15j9osVJo6tTQsCdSFp6trTZamJ1uyKyhmBUeSERDsZRVRY",
  "key12": "21aoPXpkGJKSyuK1hsoGU5QXJPXBmvAyb8kw54voaeN4a37J1MitnsxriHNJ3UcthYcQacCXAupNmh3KGc6ZawBp",
  "key13": "3nHwKZXEhwpHBp34KxpWCsDZPZrvA3XF7KGXWwcUrmi5GZUA5dXE65jqsUcab6fXigbtVWFMgbsEkTgfGXLqSUjW",
  "key14": "2GvEunKw6Zk9ve5ds513hoHMaFywdymnd3Q2qXgkLLjKbSjfwPrtP2WzCgWMr56RVJiLTTPdnKmZQH27HiR5A4Q4",
  "key15": "4EpsXjycp5ddPajR2FBKjXRjxyhHfnacECaATfM8GWUm6EeLLv15qE4EVAvfHqs7F5DpnNHQpXg4ZwWibgs89uwV",
  "key16": "3KaNuJaoayiWg6MFQkiKK9kQK7UgdiFEZyhJRUd5PBth3rhfMojtUTkyA8mBmRWt68ZhAxxd1xc1mVjdjdrRQsUQ",
  "key17": "32F6hC1e5NXipUDx4qjEv2knri9Rbrcckc14zhcj8Pcka8NunkTaRAsf43T6646BQi48UDjL5nFuuxz188dowswC",
  "key18": "5S5f4MX8eBPjPnJaGyEmgtcW1MMAe3uGGwd6Qtk4bG2iJwqrUSi5kzN4gR19LQgjtmw4fwzTVjgh2RZU7PdJY8NK",
  "key19": "2GnaHCei4AgsPfGQEwb72sRd24bZXEnR1pm8pJmv6GhpahEhZNufPvaQp49yfHhbmMoBaimodKj7LWb2xPNbsEVu",
  "key20": "5Aaae1VvhCYSu9o3vjGSc8vAMVLraCSiyoJEPD75GVzr5FRdNxK4CW47bhsTd2GrpQLWQHfzW8iVS5u2hZYUi8Kx",
  "key21": "44k19VxuKBre1hAncjA3CuNcPUXE66gn1y2TatcwRbt7h24nrnZpYi1VGVca3WACEjgKcoRVbVmm1e8Yp1GsHvhs",
  "key22": "YYUdcNLgUDCyrCz5h1ytovZuDF6b4ZTCCRe9GuPHUoB2zc1tqdjrKAf4hjcY2mzchnphc3z4EdF4a3fxubtMVks",
  "key23": "5pnabUHsjaLQFebgMmbdALUSyPN7PT4efTJWKKSX9S5vm13rbWJB9yertUfAfroWy5obaA73KWverivjS77ni9Dx",
  "key24": "4FEjWE41ZhrSLGKd6NgaMKkP66VfVZK6ehuzx5WbMxT3VxiEu2P1b8WWjsEuPDN66KsDmyHZ7rGUhdaxsPELfRUd",
  "key25": "4Ej3yUwBwpGv8xxHj6CwDYjcdK8WittjugCDR8bybAQHpiHKHurYERQCWueAsbShsG3g1L6SHA1aXiiMTw8fnXGj",
  "key26": "3sNTKzuDhGTU8LQabPE7yi2aL1iFNna9V5YCHzQW5ctM4au4sHTcnrnwmYwDwtss2h4MJ1EPeXAKGX83ADJkVzKG",
  "key27": "62QpkwRYDXzQfXY29Kr2CfhNJC1TdsVhNuKMjeJRB7UaJUNPpGR6xEY4fpzF3SE8s4HkeYDvz4gPBSMu6zxUt8Lb",
  "key28": "37t51W45hu1zrUmP4ught2FwpiakXwmPGm45j88HHDVK9wmQDduytCzvZZXxXMQkpTd7fiJ5KyWBQxRmRfE31hZb",
  "key29": "2f8BBZJn9FP64EEcL2fCJ6AGVW4hz3U1vYFDUiEgrU2TY7kExNL3X3cx2fRnA4ZxQR3au9rbhHYYhJ4Fn1fF5Lne",
  "key30": "3c8ciJRuGUXZ5x76dZnkFR6Vc6Ec8h7ZcmzK7s77JeZcnG5jShhpZLX61VzMnc4DHCSVThTAKEVNUdnfWTAjdMdK",
  "key31": "4jvDc1NGuehGVm1PdEkx2pv8MQzZQfReMjuADWDRnt2CWxpLpHWnjzn2bVG6cU6txBABUcpPPaUQp8oZ3UDaAhKf",
  "key32": "b94rSwyanj5ZoamuFjZvR6P8iri8aJ4wLd9rgqwAwVtftVdFCDUksKJnQc3XE1ZcQStB6zYBrs8i6m9ZGSD47X6",
  "key33": "3tV1EJTMBLYzz4RExZmgrwdwHRpizPV7npQHhzTCRYF6B46f8bk3wA6w1QRgDxwN7Bm4wP7zSaBev9QwdHcFHCGg",
  "key34": "5Gz3dDbFsjhxwHGatfY2xAoUU15WUMwnSGq81GzpLC4VJmWtzMHmWyjQPj7KDHoxhoU68e2vw2ZUfKjVaVCsF3z4",
  "key35": "4LcdYYgECS8pS51CK5yu2T4X8udwmL5o4ynZE5LiKx6udHN1vhY7BDYasRbGzEZdAKCKatYWERm1BTMV6GHoVuoJ",
  "key36": "UekGicD3f65WyxM2h734yXhgM64FWprFCiHGQhfZ2ZrEFgn5qVuVD7vfDLwa65tkgSfcuPYqVd4u3z19cPc8jV4",
  "key37": "2dNRgBF7F5GRBp5bsLj1E6Hsf64rKYcT2XCyrhzxQTQrUYFZNHYTXQYodb8QEgcKU4AFDKHZwwDA5vPjWrrwsa6a",
  "key38": "2uMPHhipFKbwH6iyFsScqwct9avpVQccpenRxKGpxM62v3j4zqW3SU2Xd9JSbAyu9k25m6qNrkrxDYRbgh3oCtrU",
  "key39": "7MVDAm1EZ54BnApArUPizFTgtEbFwnisKJBJsN3vdeJqcwFqdzNAH5k9Rptr1FZpK4p1QdcQbbGXrjWLWw5rnEL",
  "key40": "4jvKERDjCXbVGowwG962QCfQFojQ8iinCc2r2iZPWmfV6KpCpo8GzZwS1WXNtsu7eaFYb91KQh6YQYwkCX3djwuN",
  "key41": "3z18bBPJDMhXMVvQYPQkviq3KHPL5Hx392TzSCfiLVZuKcZ64vaVf4pPSUHCS2HuSy44b82ana53wzrDz8GadTvr",
  "key42": "DazJS1mPPbzpLFj53yyC4dtPKAVnaHDAhWwXBBfaEAsMbL8Pn5A4dxeyPeqZw769ZmpsaAvZKcTNL6VaV8Hux4b",
  "key43": "pRVN8wgjh3m2qy5i52RuFevaZ7uwymCgZTrbm9PKMknmHLxy8csyUrKYihkaB3mfssqM73WcJ1RgA1LxSTshzwq"
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
