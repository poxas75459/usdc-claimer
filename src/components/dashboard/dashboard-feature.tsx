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
    "4eVaGx9taQWPHkwWcetmPyf23ieLGucaBxbvbqmecMedASsHVSZeAW4Ws5VX8iDEX4HFCxp38R5hcGkXffr9LbUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mHVSSLVYBBA6xDWhXViufLHB4i3S6YG7xbCe3nTEGgmbAPgMcgFFDZktRdYNmFCTAu4ERcaar7QZ9as1tHcMsdx",
  "key1": "3PamGSWTdCK54DVKKGJJ8H39J5CvacV56star47EnHbHWSHDhwW9BDG675kxBW9AvohoThmpqrV2myEN93pHtXmA",
  "key2": "4SKdNfQsfvyvKh1QuryxH9GRsCLzqudKgKgSeMSivdNN5SyS1sfYbceJ9sDprnBTo1Kiya23xGeGGuncouTwT9jA",
  "key3": "5jJFipASuYKnaGKt9xqmj9ghXhRuAee68x5dhLDK6Ctzf2Tkybu6E3CUd2Pa5d6Cpa5crjMZrfpEjkh25Sm6qR9V",
  "key4": "2HsQfHi6byvaG38Ek2ehrktVQgoFjjdggxZdQPjq3JvqHoneuvdhzngrUrrDfRmfQpiuUWLAJkzNdVv6ebYEHa7e",
  "key5": "48o5rMqvsARZYCSR8j7jrEWPfAS6ynwddTkcNQoevF3Aw6KPcauQ1fR2rSq8mvr16LrWirjg3qxTkfRAYHDTvyFg",
  "key6": "Msst2CC2DdK3a1aH9ffeK7WuE1w2YBfndpd3rgdVZBdAZxeQatG7eMuyN9kXkY43887kzzHcQCTkrPRvd6UEFN3",
  "key7": "2DmhK2C35aoVfXcN5YVXtR9SowcV2KR2JGMGvpD44qNkGJ2HBFyVP5U834PEJRmrNL8PYs6zkhLCjaXe69GVXYms",
  "key8": "5jGBGZDa1sisCCXEQTGEaXSGQnRLGQkZcszyCjddfAtBwucBZfAatgjNurTajooK79QGwihyAasehb8LJLmMXFVr",
  "key9": "sdDit7Zn2Ajyaee6vYvC9pq2thjhY4YLncX42YFDN6vYZvMBEtM3LbXvKZaJQMBTReDsor8XJuNwLGZbzY7YyRs",
  "key10": "psJWHt4cZ5yfNUC2fT9gCaPSScYvibzMiGBw24sqRbH8VGmaszCzoujJyTBEZP9Gf67fyavDJorgd4KA8ukwhno",
  "key11": "4ZF9i68CWCSZ8fkp5dADAPfR8cVBwSC7eE9sJwKbduc1NW2g3nvMBnQpEhRLzdzXRJvKCAywX4uUaoFxgF29oo2A",
  "key12": "TZhPJW8k3ymJLaLFUbjENPw8ADxgDDtK5UHirBenKMgePFtd2wGq6WDtkuCRVKngf9BokPawfdHdxmegNfQME3b",
  "key13": "5SVvXNpr1osxq6sfEtUDWmx1xKzZu9xRN82bPHzTRXYe716kqKWYNXt79nfd1mMRQW5jSk7FcRaTxNiiRE4f5mBp",
  "key14": "39PbNyz44duQS1f3uXZcw2GRxircKDrH9SYbj2Je5hfhBuAfqsFmh5w7LYLNMuYasBD45jgfKwXsLCR87ywT9Lcn",
  "key15": "TAJeNYzsrn2vdekR3hE18dh5YV35pFjb9xoMA1hgwrESmrkxqYGkgja3eSm5Fu6unee528rnTLxuHez2wEqoAem",
  "key16": "3YStgMhG4Sm25Lvc5S4XmgzZceu17FDA2u5dRSu3vzVLhzMc3x58LXXvC5FUxuNBJd6SKxU4Hwize7p51UxGuu7V",
  "key17": "3UwFDB54JVNCrSNHFHCDvc2xmSBRmqrh5vimso9zxiXmMnLwUXtsXLkcNy3yQHxf27W6kE8nocWV2i6Zqhfso5EM",
  "key18": "3g5sWKTjeu3g3UwxN8VZc7pzoJh1xYpQj83NuPCRjFNCTmmAH9CTK93L5G32PbBaCBS56wwERsb1AcqY5S1pRbwn",
  "key19": "b4vo3smHyo2xVbzHkygmQghueQBqeivr2T6ebFUqFoxTcMmQtXz14N84yNwsAUNwCdf7F73d7jyf1WaBeJpmMN3",
  "key20": "Us5z78kmuu4CRzEXFq53STSun6ji7eq5XYtnQ1CUJ4UPP9W5BmTS9JcvhsKpKfSQ42KKhHUgvKokz4zkfni2ST3",
  "key21": "pTcNeQZmEWYVQXCbYtjxpnSsBqLzqwWUE3Bp4DZCXkdZLQuSzo1rXhyLTbztqkWcp2EGASu5T4TR3zxBkdUuW4z",
  "key22": "LtngnivhAAZVod9HzUbAYNgnfHS6oE7jC47Bg1vDr4rNEojbQu5oDkJ9aqazDGsnKXunNakTpqh8GzzT9RpCf7Y",
  "key23": "48RzFjGHD67E2grxDXjZXytrL8QtTFvygY93t9K8ayzZR18UXG9xX9xrNTQXBFdN5x2BbPVevgjxGKB9GTvo6oNd",
  "key24": "232cRfZBePQbsUy3WxgdmSk3VRFaYUgj9nXCC82G1L2cJ9V7gFfNW5eQhCCKGXaoqVNgiwSSsYTtDq1SNzLs7av5",
  "key25": "3gj6omyCw1uxPuwX8VckarP5saLR1FjNcRwbmAP8mhXMTKt2G4oXHD1yFVfbAK2hR1AZUvSzq8UQWoCSEw1RHaLT",
  "key26": "2cB8nxkwdsHq1FkTEQLvPrfXxpFHA3K9N2CiA9Fc4ffWfinKSARLjRs6mQNHbUPtHw31n37ZmKGnwLUAtEFtPQRQ",
  "key27": "3kaERKLTCZnvvyRJv4ByJybUUqXJBxuEQhMUV86ZDLLWebMSeVRTX1Uma6wiRun8c17ERQKVX8fUa8KGtu1shfHE",
  "key28": "2UEjcoi8BykBVL5WuRHsjKYku6nVKD83UFTzDqPMJWYPFCzaxDAqLM1QeUsQU1fckusPbK7AXww6XDS3TUDeJaCc",
  "key29": "5HNohyXCVMx8ohZJgQC3tWRcV2mUv1SLB4w37M2QjFPFTpofjaWN61SediZEuVWVH3mrxoUdZAfHfu4BcZ4Yvift",
  "key30": "5VU3MBMHpoctzj5nJWvFwEmXmZ74sYut7ozaMx9s9yoMbZUqFaCEQ46sapoaysV2oAxShceuvVv6bqZgjJrvn9fu",
  "key31": "2ehqPdJU82zxWuutmn64FMzxjprurBzBsZVnRpFnQC36HC18LyRw8jcZPMRsESD28PfW8ziLuM1WdAsXDprrgDr8"
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
