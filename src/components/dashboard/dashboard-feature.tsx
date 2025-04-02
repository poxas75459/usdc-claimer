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
    "2MSF25uYtfPWCia2mpwCw1mY78TcV3JH2AM9UaFtSx49v92zQUF7Mrmw7skodR17oK2wjyC5sBMNoeVCZcJ1bF8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hJxbyG1MkudtqVpt975bxhQiuWxmz1EMjryKrA18f5PZm55xRPtKsfVjtdwaFzgcsaCFcxkGSGuoMLjf7wKWAyd",
  "key1": "5zbj69bJz3ezJpLpayuiRcCXLQG7PgF3Q2H6mYNwshKJRXRgaWM9a6bLtbVyJEF8WUiZHjeLMH5JiGXCscX1F7yd",
  "key2": "ffpDnZH9djMnrpkvcoq5E5P1d4vCNneFkAcbTcpHPugL6CyU8qcobjnpukaWVARGPF12h8jyx1HNYe1Knojx5TP",
  "key3": "5rS7mBfHdCRS89cArtkLSZucRiex4CWjeTEnbpPWc7x3KaokANNtxUprcqC7FYkEoVYPfZEKwKVskPB5AF7Xbmrw",
  "key4": "2bCgXzvazsVFceCrZmfv3GTa6pmAy2J81ZMezFAownG1KnaKGgbkJzTUMLqNdR41M6TPDGPMMXcxyYQAjtYdsvPx",
  "key5": "BbbTmEbg7LZYYLCcUxXkNVRumjKmyqDcAFLbE67wnYeT7AsnuuZQAq34TWt195FRovJj2bKZesayjXisUKqQeMU",
  "key6": "24wwNvmdyJTDX3CfdK8ud4pg6ENRqSB9Gf2TXQptrx2dbeQ6Uo8HMv1pD5v5z8qW2HXkmEW6DGgecyrTwJxBi3Dh",
  "key7": "5aVDRUqkSkdZU6MoXMDvLsiFvKQSDXBhzgwKKqPMPAhZerdKfWeytQnkm4d34u7b1n6JACzaomfsZcnhLiwLnY4S",
  "key8": "2gjfaQnHyG2STcpyDSecMVNQVLbjTe5yzVpFzVsKAGtkvsK89AMGPgbFzS6AWQyTuzPGcs4LEAyFk59rqyHX4PRv",
  "key9": "33FNwNgijzQjk4gTC9dYjTXJ3jg49h3Cq5fhrb5L5fHt78qhQrsy13xZWDLU4DaFYq6kxdC1rKicVo4seQ33gP4x",
  "key10": "59VHayVenDdjXptbSAjieYzKmytd9yePpnC2Vwnmqbvfum5HfmoXc8NHW57zFuoBgaZyt1c8iwJnnuNp6c9dVMo7",
  "key11": "28cf8ZC7fhQvSgtxXKKFZrvvdD6jwAmhdGY2AmscztiYDRK7AA98awkSPr96hrTkq8cYqoDeeXCZzwBDC4EWXHfS",
  "key12": "5uW137djDMrspa8WMVKdfT6mX2bobphSkPHhPauEBja1XveiiQYCmimEpXwVm7RH6Bcrfgez7WCiZimkn6NUx2W8",
  "key13": "3n1LrYDwoTyFju14rxx2TT7B3QHiobeUMVgyGJLRXtN1u13TBEtktgThQSw7X4wBgB3Kp7RCRRqS2ifk7UZrXAmH",
  "key14": "Va8eZG1cQcSAz94tLFReC4PoNECBRfiXhMT2beG4jmVYtCn9ZJZPztQCVCDDtqAPz9uj61a6XepFCc4uw5Cx6Me",
  "key15": "4nfv3fSFiw7eyW41aycxsV7YgDDgVsDsi6xb8hwp93eqtBFXih3sNqyJEv1spvZiDpYPvr7daVBgaeAHyYP4HaB3",
  "key16": "2dUen4AS7B28ASYqFhdqvdNp9NjaqfWN8jUsofJhLZRRHsHD4JYJqmcVWzBPpPS2fBFYUFer2cvd527cRMB9oQ5S",
  "key17": "485Jb3rnCvGeebYFkAVHKbehaU9gvUgeuu3gYPRqEtrtAfBcfoSxrsjDP3n71DNPsN2rJ7zTLPWLBURV7tG1PYHX",
  "key18": "42pnffyttW1aNoXeqfBDicM5iL1iV8dvdVPfVoN3D63zGjp63UzSe24Do5pPErD3SN3GDwQK3VLLRpJy9W71GAps",
  "key19": "g72KqVywzeLGVeNw3ibf49nquwp6PfGPpwV6AzLnvReSxDk8Kon5RGB14QaG6wqpqWnoiHAdFWqwjXG8qsMQurn",
  "key20": "rVwuFXu9Vr8HX9fxJs46Mak7Ph1qPd5YxaxLqQdnR4e1Mn7tX1h5Ps71Uqk9XE43wCuzxgnMN9ELGhCfSLwXAeB",
  "key21": "5C3snEQa78Aw5T221ELmMaH7FZncn35iStRFPu7vmMh6cxU2biB2XCZ7HJqdHS8wuLHbmybZ8UxnNWSUeaPvUjUz",
  "key22": "5e38cRbikJDA3fgPwtsS2oX9195sG8P1uujNWhSmVP8gspkteiEAjBJCsYhGLeGXnfZkMg5Dnm861gUihTq8qbp4",
  "key23": "2vuD9r4hVufEU5SCPmVCajooU2QGvdkF14oH9Fm16dknNrafDyBDZHUyyVYU4uoCDLJKr3NcvRpdr6imzaD4NPJW",
  "key24": "zgeLGuZHhf9ZVJK2i9n6uzJsc4cBjyNXpV5KzY3iUGL8Lzh4Wmp5XMgJhvLr6wDLqqaML2feEiYFeZN18u5UbF9",
  "key25": "53GdxDH1WVLmx9zb32esMXeiw4AwNt7Y1ug9UPE2aP92TWMiKydwdYdZCmKuxwtqAfDiLijVGZ2h4vpvrfm7Kpw6",
  "key26": "48zxk93dw1sBjx6ofRRmZULRSrsx2QoLq5sStVNUjjecS6QEmtUpHHGFo9R61xjWKpApt5j5gL3j7W8Nz3sh1mV5",
  "key27": "27DMefWe4V1inng1V8TfnH1YVKwooocNQfm6MNBsW1VfjcuC6sDLHh8zBtbHnJJTWR4Rk6ttg7cSsBr8rbFLXaB3",
  "key28": "Zx9U2uFikdrg3pjZBhCTBRLvKPNFJbvX8tuVinG3AGHe8ifqcPYAkGHuHHYVNeP5YQbqyHetFCbrdDfRFZ9y6nQ",
  "key29": "3t3YkaceoH6NtuBeZqCUaMqJGM8bsX8sQeEuyJthmyYfnK1VkVVgWpmiSTZfxFVdde7zW24Pu4PVW96z6biZWV6y",
  "key30": "2Esz3Q7onGVupvwV6FJ3SWAk1uhAJFASxmHjMVJFuEvcJ9Mnn5wrdi12ne2juDCvrbbJAGcHSy3ZeVmFg4fSsruj",
  "key31": "3Tyn4Z75BYqYpuyjZTEbwQkVCeMQsej9UtnVBfqZQnQodWuvFKG5WC3sf34P2msCNDzPy5aJBSAbeLB91PyxLg1F",
  "key32": "pLqZD1ZwBhiqzBJwY291sQ7Xx1txMrkYoKPQqxhwPXiN6KhYQpPoFLTRiApG9JCvrp7eLh6nScaM7dzGUZkUnnB",
  "key33": "5A8bLaUCyB1gr2Bft5tMmQ4DpzfhhStSMU4rytSU4U6DzH4xQubtNjJtPAddfLApDH12jDyGsD6KuNBmj7FbEJoh",
  "key34": "46Jf5Lkve5NuHE6aNDDWmqsNQNKfsQpMp4N9jd11aRZaiAqkPamUeQauVWF46aVsy9LZa22K2xCXyiyV9s8t5cqD",
  "key35": "2RyBUb8ddfb2BtKA691XsWpp27sNiuPAyfn9ZXqDLDpiBMyJuHNV6ocWehdMwWmGojpVAT8uuDiBPXM8oQLqSKYi"
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
