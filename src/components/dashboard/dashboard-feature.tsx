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
    "3G4DVxfTrAUzdgVJ6trTxLCSp9AU6EvsBQAbs5GcTjqvUaSAdN3n4HaKWJ1vbTGLbrQeKSXUY3QnR8wsHwD77BbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CJwEmCbb7vcv7wedk3qKQq1wzmPpc2TE2WE2q3kTDwNDBvsjvta9vv2ywHxB3TukakkonNPokvoVMg4VM74McTZ",
  "key1": "QNiV87kKudA6NcjHkfzhJtV3k3tRWAYAZwZBQwynt9RhS1oxqfVkLgZTwu1Yh7Pm742eaRuABsYkSzUVdKZA3nh",
  "key2": "erYqgJnEm8UAD6DpZ4eSHUzc9rfEQtBisYbQXUvw78ANB7heVR8Qqn2x4UNobGoKwkPdczsQUSytooGd9oWJLT5",
  "key3": "xT2S8Vm2G6S8EjeovRJqv5tRAoYyuejoLnFHG93vnpAkDgUMpewxdfboHZff1bovrWV6rd9zKAvzr3xLXoBsspA",
  "key4": "3bKjaM9JnVNvMZqm35SnfrFWqic2DpxTQr27Et6Etkvu6pXyFDkC26XQP7jmNa9FCEMykoVtqJEPtiuNvYCVmV6X",
  "key5": "3GEwRuPNbLEegvpAyhcwNpn69brF55i5PcSwht3x6CuKHYhB1JPiBRZaTRSKdoMLqikf72xzWFRqV3oBFpvutBtL",
  "key6": "1EDMSAsSroQAnU1YZN8wL3WC8w1tdqZELMTvFuVSRYgZzpwJqomoj22vnpv29fZsJrshJRBxvUUsnZSqfii9Kuz",
  "key7": "bzzeyPW3FfPUBsh8pZj4GchdoEGJVrcXmeZQrQ2tJ1Ypx9aonNLqrCSxqbgTpmhFD8685yA2bUMnYGiaFgTegun",
  "key8": "5mSDRWMZa9WqqQ6KnBe2zzUVNYDLs8eGQfRmH9mt8Pn43cdLRG2XSy7LhRZbf6Rrf1Pz2FYm1wiMiLVVv4JSXnp3",
  "key9": "2CT7FfTD3MYb6SsgZfQxzhwoDRBKNLJS1H2oJHeD6xQu6KCXp9u4DbvkHvhjmgy4QdNbkxo2bdjhmL8WnbTgW639",
  "key10": "44h55d7nbhe1MApUvkUJCrxSdkmnBz2UpUHVo6wqeetoWsoB86BzTARKYyixoVm1FVKWtoaH7SgFD52QqedomTHH",
  "key11": "3np65EJMBVUidaPsFVTTANPHSgynAajqV68tWrDLWwKPHVVpqKUzzPzjy2UHyeAPWg3sQwWjCBnXxpKoG5ytQV9t",
  "key12": "5ZKRoxaE9JRAYVbVxjqCLyojG4b2Yza7bSLz6Nb2LcMtqasDVsRwnfPdL1K5AG84xjwSSMkpUFCJUm2Yge3VmbXA",
  "key13": "39paFTWXmQHyWpuoXUoDb824mcH2FYkRKFFRuDkBvLtA2WdcQsBA3dCRmSaSa6Em4LjtwMV2SgAVv6C67MqYXemP",
  "key14": "57s5NSjYAhK4uFi2y7stLqAmmfEqL48RAMWov9d45RW2Sz5LaekAikcvMPTaZqNCRwFxB8ZiNH4sRuvcpqxM4faa",
  "key15": "5s8n2z13LVbt7b8ZEanKD2ULWioMEQg7bWqkkznF45CSURyEaL56CScLT17GVCqLgbFW4mNuZrcRLKkNdXftJrWb",
  "key16": "68RGzGLKCwhyrysrA51puxhFzSeYunALEMvvbXdUP9kmSdVrvr3bKQPi7MUZTGQ5AfVNHeneVGLo8V2ssvp5Kze",
  "key17": "2jPuJyMbGq6AGXiJFrvB7tEbcgPa9M549eVM9hVXG2uTUJCJ7eHCJ16MzRFSsdRgAHUw1xymBPyNLSV78N7gERxT",
  "key18": "2gA4dfpE8BWjzBrtewx1anXyMCgN1t3qgqZrGVWg2Z2rFSsiT19Y1vxm3nQRioHNrFBiK7usE4TddcfPaPrWvgQ8",
  "key19": "pdgGDCSJxMX1wxLyAfq6gr4NDJEJxJaTgDzt1kvsQ9kWB61QkBCUwbnLh8yU7c3be6HgmxsbkdhESceM8Q7tTjd",
  "key20": "4eBnyJFi5krHU9JoubcZM1pJAHuJrEPWKN69xdiwt958QMU4qHwoNYpCLwCA55XyisSm9M1pYCzLTMiBxp2jjVJs",
  "key21": "iPNJNDFjvCPvvPjE2aiifyFB8cesvXN1SDX4sLhxyGQyRL8biHPqrU5C2423CeszWv7iq2gPgxUk8N4hku7uahC",
  "key22": "5NNbQrMFVHASNgp4SruBJHjAYkhbfUnvBz2tJr6P9TSAgrMEVZqDsQhEC9VJ39jF7zht5kVNj8hakNrSXiAX7Rmp",
  "key23": "37kGBBadT177i8nYtmp6EQ52GJgGRZRg8S8fD7fJx4gMr95Brt2Bepr3Cm6mbfT4gej3xGzqreVwzxjjgybUF56r",
  "key24": "2FY4mf1JjdJRgA6HxnZy7HNGGRbw58srQvhRgSFs9AsG9YFMY1w8Ke9TPrPjGHiizwugMwvWBp13HWcgHhG5MjdJ",
  "key25": "3hiXf3sW2mD693fP9aV9yBjEyQpH4qWGiZWwNmVUNXb9ya1ptivLiGpM1CJwqJnCqCDSDrxY8JupPCnpMqk4MnT",
  "key26": "33ug9xP6RrARm5tTXYow98MGVidgGbwiknV8dtJsf6abHxVSMwaekfqqjsa9FWX2vpexJJNWmqUXyuB2eJ2HrodC",
  "key27": "5Me1EMqVN44oaJ6B9nWdhP4sYVNWSU3baBJ2Q3MRkD4ToQD16puCKo8brSMW6gPGYR83hY4xxzLfcpffoijaFDEA",
  "key28": "8XDkm2co87jVzdF1Mopng4RfSVAKzYg5izTTpq5va8FJ3rRbuRZ3RtpZGkb72eQQRSFPbDA5horpY4DTfcndohY",
  "key29": "5EU6bnT5zFmodHmC7txeoRGHypV1g4fcs3HRfhmu4cVbN3vRi6JWkosykRy8vLh7v8FUYhruNBrxRa9wR4naLVVB",
  "key30": "5PVjuuP6wKYVc1RAXXLLZGmrXuKnL4MkmRvay6zXhF6PoMGVaSaYVKxEcS8pkYxxMc3FqoPeEvQKMsr8yXB84WgC",
  "key31": "GDg2aekvno6fGVZ1RZXgwGKddiFB5fzE6bckkrspxdywyEwqcDPenTXGGCQtBFu65y1ARHtrMraKHemzm28SjDy"
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
