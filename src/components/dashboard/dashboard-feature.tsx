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
    "5XhjpVhtBh1epg6uGA7ttSj6E4t8p33kh3sUj2EJA1VxbUYJSEQbbtqxTFq3nqxU4pVMM1rMe8Rz1eHuQpG292eX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F8A5pEtt6JwcRxm4z5XR8kBMMMEmNYrBTtXqEFo8xsUevHbTT6d1iBmfRMG9FaFB8UB65AjVUTSVFBbAcGR9iS4",
  "key1": "5J4pS2PLmxGH3jfuKd3gmAYcELUjjPGArrJycUwA5CmofEQ4zr2ynMpRHQeQxVurM1LntSWXujasksc8yxYRhXNq",
  "key2": "4yaSYs73vPnNtZ9jY5E4GeA3YRdAAapkQcnYgiFBoqTkrPuGKgLWVfm56ipzmeZJhBQpxJuSPHcacr5dcrrTvcvq",
  "key3": "ENf6F1Ey3UvHsWyPRAX4rWiTgePGiDfobCvk5NPivxQNo97jVeako4vSqUxjVWktREBEtqocWoMw62foiQJwN2C",
  "key4": "2xU8qUCRpG5TBdBMmCHuDFg5r6qkXxsDoXso1fCDi6Gbh5Tjo6dv7QyGcuPKZnkwKPTNvohbkMUqNchBJy6tVupk",
  "key5": "Tf8LJ7QWAvaayZvj8a3aUYeWmHmnzkGWcFkUDLde1xZXWqbXzco4uNR56EDjsZ1DKFRKurDSN9WpXgHt54otVCM",
  "key6": "52tRGUaNfSdoYYdxgxpFCrxnyxU3S4CstfgjrwJDsYbA8Ced61pNc8DfaSZ2V2WTmh9K75m3QDu9wqTNbDaEfhUV",
  "key7": "5BDdrNJBb7YmLHtstFRpGgwYQrcxiZa17zG3YKUuyXLu3ibnz1v4BBTwnqgVhACuCnxLFh6YVM32vzxr87jhB5HT",
  "key8": "2bdJyhBaBc7RkTEQnRvWxgqXgUAjGjkcGHwdfUinq56BKKi86Wn6jNzTWRuvT5atWSvdoWzznsnT3ofmFdJMSWBQ",
  "key9": "2Dz6R3dGoWvvEqAeNEjyck1f3FEmU9JzA1KWcq8mAoWB2qmCHBfxMcQE1Yk9nsVVcUFRkethBnvZUXUF7AgESa3W",
  "key10": "5xo2hPMpTJADdPfjKSw2nkG97DNNtxpHaa2s1CNcGzyXoUoX2sGv9nDzVY9JLnE4QzN5aoLPoVDHdVXtuT4tcCw2",
  "key11": "5e1Yb3aP7GLFWvJN5N5H5ZV8EGzrtED7tEd7ZqrNZjHCrYHR7WhhgiBbxBTGktaozznBJg3fqXuZadVzJB99V1o6",
  "key12": "2NWChhT7Z7Btu8CpHroubH99tvsqoeWJrSFZQR4jbh8YuyqCzS5HXNpMnLkrWwbzYSqonVFQe4AzTvCDjg3PD4Uc",
  "key13": "VDWHcF8ZiwcDLokwwixdRQygzpSo54tQQf9rxbHwi3os1usEopNBh67X8CF3btgWzXjegSc9wpgnJoksqEHyJFp",
  "key14": "qFBqJoR2ycwyLcZjvtFaaprzF9xoEAejjskxDA4UjdH63Kq3rGo2xWs9Y1LtXyHiAtkgG7ZFngGuTUnYLmbNN7Z",
  "key15": "3ah91jKETucM4nh6zyFNDERA5MpVNYR5VcwAToZ6sXwRiqQS7BUjAQgjUp2DmTCs9MM8TbHhbFeDtRLtcUML5PdV",
  "key16": "5vgR9PbciNBDJN6LN28wZaDpbKjEKrmF2yECjqT7FxWT6Fume3kYYqDeBZQj44SSqrmGNqD3p3t4wADwi8xeX1am",
  "key17": "52gi51Be95ChLb1X6xVzNjvfdFxNKG9UmbPJfPCDXQ2TU9haSkYkDxax5MCntfcXadJeRnsKthLXJGssXB2w5FeC",
  "key18": "7KD1QuYHATG4cPjxKbKq2gV85y4AB1SDUjojgf416Md8w3WdkxGgfTPdenR2KeNdynVBAatQrkm27cbN6bNkgfH",
  "key19": "2VsKGUFzUjAKGHuevzbNgZnkSHxCX3CRjbZE2f5Znb5XbTeoQz47rTBnMbH2FPryaYpaYpzRsmzeD3pF1z2pKXgy",
  "key20": "3kDkZkgFW4K2cAtxo6xAMpRTpcHUs2qZEpmG9MoZN8Cd6c3yvVR2jhqU32NYiNhdq1CfDBTzX9pSNnWJxYMW6wgJ",
  "key21": "47BJrEZj2vwTnF1ERhK7JubiSKiNiSxN8zwjnTaQNBEbj21j7n82zcdyguthZYzCUjmNcb9QJyStwxhZkUCwsmFL",
  "key22": "5Lo3DdW9STktUFXAicXVeYJvkBASMqEUUMrWsT3xMfcCNdXU8jZNCXBiu6Ry65YHVZaVenZNPQjtRZNQGLhgiHos",
  "key23": "65Hgw89cTHzgq6Kn2BqiGuH9KiAC5FDJw2Fc4nwe75r6RtANv5BPmXNiGU6Y21SD2iC2Pbb5BXbSkP1cTSVCRoSf",
  "key24": "5chJvnF942ANPPfUYkm9y8GTFkbXUTVqzSBYWQYWiM4yqMh2dj15TCwbpFrDSK7JiNb8R8NdfePsBPiUqqjnrn8P",
  "key25": "3TDWEyVQVtATMWrJ37YoCy39BLm6ohkzuWs1Np3VmG3TTnCu5x12Jw8Zi5rGfx5UDdSRffVUnoaSXi95j8Hy5PEa",
  "key26": "BkAbqBG75pLknm3FgL1CiqDboe7TbaT9FWeUk8ukXkMTCWuAHgf9gMSTMrGe6RYzeshDL3fka1CBppAqNDCyQrx",
  "key27": "jbvGKDu4xVcRu31akPrNX4ivMtcn2R1zZghtvXp1kkHKqeJMX3JhcNsaQ67DnoaHC7VXGCDEuatLdKfqJeRvc88",
  "key28": "2vW8aKEz78vYPoazd79VA6AeYd998APaDj1bewtCuxcQyztHKHvf2t6QQQ52SRaU1yzzU8Erbc6U3rW18oH6awGu",
  "key29": "2xoC3YgNBcoNj4J3dVRxfcfHDiRE6WhXRwYMNvhfe54pCu86FJEdsuq3B2Y8nkwr1pwSB8pKozecbBKE5McmAn39",
  "key30": "Ce42uHyk9fFsycjoUpMhMngNpFsreSqbDhTbWZN3ZzQNyJBCgewse2WeftYmBXkPKen8JgdrVkeUDrPXiiEVpWE",
  "key31": "4ScoHb6Zc7c2Mm9xKEEykvZQCWDWBYmv98TJAsxi5dBsHGa5QJwpKw4c2x2KLdLA8qWGyWuVhiQcBfabAQ8WXbCE",
  "key32": "4kHAijENsFEwg39M5aQwZTiaUGxzj1FTEY6hpEJ8AQpjmY8DdScvqwiLoFXpmhbhmRHzmizeHUdwB2ENFaiMvsnW",
  "key33": "33sHSdztpwKHfHPk9w2n7iVtW5i6XbSmb4Az7mBeugRN33qgShv9kXF5eaKtN9Qy8fH3BwNX4dHBdp7MjrKxhnLf",
  "key34": "49zrLL7yWLCxYbctgDFHzHnm1vPVRj5rentjhGbsN2kTaaozyBe6uJXa67cri9nnPD8ciixfe6hGyVidfySND5oS",
  "key35": "4MDmmmRoAZY1RbxhWtpatN7fa9Qz4tbmWebfLBAQk44m8YBMLCQiZiE6aLqjWH6fP8paLvDwKdj4jH4U2doUTdZG",
  "key36": "3rmKokXywcM2oC1H7X2iz85vM9EmHCfEXwfNRMjs2LHzKME5Uzj6R7WiNMSJt2tsDqX3YsBDi9f32dFBddQZVqPB",
  "key37": "54eQNZLs4EXsKHWSwAN7s6yzqfPymoAtUFkNguuoQk7zjDMARRfSAgHD5n62o6qj7A2okk766dqwU7ew2DHgrTMS",
  "key38": "9fksxvfHTpWVLe7aFDuRosmsck4YP9aNsLhkCECQJmu7ayTfKBjdXTSRjapqSMWuadj8L6BgrRgPPLPReNceb47",
  "key39": "5gHhv9CN9x6bUM6WXU1AcRZD2S7GRKz4hRfFX5yhSvJpNtKeSxEFVmroymvMzDRDnTHkuNkSYb5X1tCa3SXkvPS6",
  "key40": "5vtaUz2fbFK4nxQxxUZzkEbcQ2ro95wXFXab3xL3WRceJREqjTVVSqQXYpB6f3S85EaCUQdGLLDWEM7vRoTWHHbk",
  "key41": "3VQnGHVTpkMXMWoj9LEsfm5Mh75NonEL74mMrAakj86deVizjBr8fHWx7z1MVXAVtmxxvNTYQYrUDeC8R9FnDzmh",
  "key42": "51Cyc53Ky6jyQdvK5saUuTyNXgg9iJGqiFo1UFb7zdKTwtKdMooVSYakNDfJ5znWqPxccCW2rEoi4P9xTFGNgELg",
  "key43": "4kRNzM1emQPJZpNNjPWo1Lyw4nXuZizHtavEiVhq9v8PbFcM4Y6eL63r5xihSidPve3xQLrWhU8NKPEcayFowc4v",
  "key44": "4vYQ9ZThZ3UULWPe2tBo5RC6Az5zV6CpSjWNcwhTKGFYpSRu8AYDcweNp2q41QknrQBT6x63QJx5HsyLZoGwBUaQ"
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
