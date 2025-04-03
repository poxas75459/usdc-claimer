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
    "5srrgDGsEUSncpXEuj4SZ4GioiLmPFWxM9zywUch5ijvUkx9bBeUR1CxRAuXj4vy45nwBvUT2WbAXBzcd84cvUR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64UthAF9AhKnTkwEBF5caNhTx872gGx69DdQMqXVnShn5dR1F4yUqQwpAmNPyqkjRsZiAPjD5ARPWEEs63p1PJ9q",
  "key1": "5J6oQomPjhxeZWh1o3NWngyScDXvEeBZa5hM5ZKfiQoNtvxUwNKBK8QXpVBU1xsWXdN8CNhgYfcUDDFJzYGe5hrR",
  "key2": "5gnWtvWFWy5vCxYyuAqrfP859wq24KfVBzkArNUaGxAqifBFhckXYMubqdqpufGdfbu4cefkBVTYRuEjvg4fRAon",
  "key3": "2jUD9bJrgvyGASDRfGNr1zGCnvzme7kjubS1LPK5wP5oVsmrydAC8Nmdaf2b2sCjo8wsc5Skc237cLHk4hBDuwtp",
  "key4": "2b31qQ6RP7fooA2qYHX4k5B8H2FjYaVztYEbU3NkxNy5iXF6eyCYHuaW7HPQ5xT1V1mDJ8FCMGFpqdDdRsm8xQJt",
  "key5": "3QrnzraxNWzBeb76eoxj1VxSyVAaWzykD3kwpxXEJW13Kdrm12iMoZhZqXgVPJVefziY3tQfEP4xggZ8r85AQtVA",
  "key6": "4Moh1D97CQ1nXLaD6Aka5zYj5WzBaPGZSqdHUNJvZrAPU1boGwoTL6Ddq354PCcZoLXM6h4rtHxyhzh7kgDmwHWH",
  "key7": "1wtQkfU7CYmpEwDaL45bNv7b5kmrxAmUGkUoDfKh2fVPH6WXeC7ufBoVYsVv2SM9sScUhZibMzpWiwtgYUpTyr2",
  "key8": "3uhxR8kbAVFqhECxdNnJVPVqakZ1k1RK6r1QeSV3UrXtYsipcnWBNsQJYTd7UANkLqqe6tCoRPvTj6TUBm3Mh6d7",
  "key9": "3h6CkjSmPreES9SfTZ7iUQQRD8wUfFYxBnHASk54UrSxG3xYA7P4vpqvPbCmGUmXhATrz4GLTCzhYYmBEntpUNHD",
  "key10": "5LxjWKfdvKvDvTcyVayNhrkPV4CjrjfAeocZftrxu1wgy6yHns9A1GpSByG784eSNbctpm69AdBC79xgezkiiNvY",
  "key11": "3Wsj6vruxrCoYex393J9QRnaY24Ts1v3qX6kQEBWQGT4HTsqZkNR48UCbHPVncEi4dCX5gp2ZTSv3UrmtUcwURUf",
  "key12": "wSEUWxN1ah3tXvp5t3vV21tkCRgTKVB57vwz4WipxGMDgNkAo5oabfTyBJG4iqtbjeYuscLqyzxs4D2Ph8mDGac",
  "key13": "3LJnkxXHWst1VQGsXdp6SYLKEusp7ri5khdLrcmpzspB9qsAMu2FtWoTcjoryoHd8gq2B6gqhd4VDp9u6ttqaouW",
  "key14": "5QeDzcsVC9mW91CQufLX6wpUXgieu8bV168Ans3GYidV6oCW8XXLi5SuSxEF9dBLivKfYLnRcAG1L2UxhQhLxN1s",
  "key15": "54D2dNhG4dQCFZA6tCb3dum4xUTwsGEXLsZfW2vhypXG9CYAf51c6JxCdTe6mx9ZKtKJBLYQBnMwYTd66715JMQM",
  "key16": "42FwbYcDXtpTNCUrZC7awiHfztfdjLAURbBQy3ZmGypgCkB2HdY2vvcZRde9cmNuLes3w6b1AwcbkuSrCNHkTDot",
  "key17": "Xs31FXKofotNE7hUTukeqwN6nXQNSr7zaesJ2bbeRHnPtn6DmuJocN2CNYkBuqw9VMQjpvG2urM1ZHaaGNQ8gnx",
  "key18": "D9dAWCUpkHAN56MSfLFqiHmmEKmSB9UTPWYMf9AzvW37bh45MNZoVAJZFsQUdqPtraV4AAXFyg2W2uBj2DZCe1x",
  "key19": "34CW3sBbokt3rqzXnaZFnTphosTR3axgF3hXx1KsiN8wmsaA2Wqh2rRgJryLUnxnScLAc3NVfHVvYsUtVEb87PYj",
  "key20": "5UGw1MfopLtGbxh33N8FbhqByJAFsEw3RtXmRqzhQbUXKB4Kj74GEbv9EFeP6pFb1ATSx6r1vf7wveaqtZsme2TP",
  "key21": "4JpKbVxn1cvAkvY2topvwViKbMtfAYCKjLYzp2k4sM2ngi7qpHvFStAjjZ4mnL2rhf8xp5DpQWv26NpaVYuCjaUK",
  "key22": "57snUyjrr12C6JmLyj71MJWpvrhNWgkVpDmiGSLJQQMMSi7fGMV7p6MZWaEgc7qeDJEoCV13JeUUunvogvYEojTK",
  "key23": "3Fanf7hUpCzcDEcpqSJFt1xfp8EXYionLzTU7iLJcfmqMyveN7PnzXkByxjwvQtj3WRxsunogBLXv4pjDFeporhR",
  "key24": "t3xdnAi1JmbR6PritFghH6xvFdALpxZ3aiCdJ1hVinB1uLfiF7BtcmBeTe4a34MkjUXD2S231fnwYiksEDNHQbs",
  "key25": "2DiX5iPnmrQcPZ9aVtXFg6N5JZoiueP5qrpMXhYWk3z93Edxr8J1BMJ4bo9cW6An8bTVf2ocXzfifxJHZCNyHskM",
  "key26": "2r65wYNfa2Jn57JLjRbUN1wRbmeLEuZRyJ2QA9S7W12mHP93DSfNjviPtwh79cA5EerNSYimXvrfkJjEv3nkSw3K",
  "key27": "3hhUaHB2WHdXNGzmWVXL9ZcrqBtLGeEHSRtAPRLQVLY7gNKDPNhsWfyVq2FB1BHDsVGiWKMyd1G1ZDxiFzLoiLBu",
  "key28": "28rEJJ64eqNacjfbB2GZhAJt4uVCKZrt1oB6yjXPyjEPmqJVvqoHsThXdzcE42uB5SJRV2ufGsBmHKS6T817dwaZ",
  "key29": "2rPqHnFf9oNYxr23WtUmRfdzVcKzd6ueDNHFAwBn7faUZkFxaTSDp4qGqXCnFv7cM9sVCMAyd3KBxdEGbXuzTszg",
  "key30": "5AvNiQXE1Te8Gj8St5sULoZubTNpt2FNGA1n6MeCBniDghDfHZzWSg76QcGPQ4MJPJqgLanyZi8s38oWyY221nNV",
  "key31": "2wQ8Ri5DXwTCKCE5HGddFxysp91uNZuGzSUruhdfPKthuLTRfhyXFi9i7y9kCoLKKnYZBiBwaAzCcZKR11Kf5Yc3",
  "key32": "tcfHaD9YjpGLb3Pfk86SHk9L2eRfJ6twJP7kpT7BPD5zD2BqD5mE93N4YzmAfJSzhE7ktZ9p2SFcRpvvtqbAh9v",
  "key33": "DyBupHpaowQ9WMm84UteBYhUBt8kECAgWcpadfoxYgWfuUX3eyj5Wgt5K3bfx4XgUfAzCPfn8pdgeQwpnXQsMrD",
  "key34": "i9LLbgeLvZQRjS8nw2HzVDY1bjt6WRZXP4yGjV7h6nMvAGpvV5rip96dUtPLt3JbXpzBcuG8eDhTWWW3BW4t8X2",
  "key35": "5ikPGKmJHZFdRu4WAwAtEZXRN8FxGAkbtfnYZiKANDL9uws5YzoaznNhjDFNSG9CMZLnm1BRBFFjnkMs2ANyHzyx",
  "key36": "4K1xWNZADgsQ2KXbo63B8pLVfDgNn3Niyh4asPCiJvz57qCM26GwJgcr5NDJp9e69gTU7xqcKBgQcjofyjS5nT4B"
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
