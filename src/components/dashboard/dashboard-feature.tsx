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
    "rq1qfH5sbXpKQSpM6zbwVG9iFzFR6dDiUQaJBD2w92U4f4WrZx6xzcYy2LEvFC6d9Z4VoqykA8qzaLbp5xfmWFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ivxYz8sFVFskPRWmfS8m8zf5ufFkQTyi9AtJYSgaSG6GWXhg64Mya7zWtmQcSQnD7xSFwTdjMfnB7UbGxsmbVTw",
  "key1": "4oCzKJqGDbFhxjbfsEmCuCidfWvh6dpfGuJEmGqvq5QvEafxKVp9ZxqHfkhYXixJc8sBsYozMpzyAxgnQ5fDCaUB",
  "key2": "DBUjipCk3Fj7yGZ1r9kFgrFuKhzNEUkbm5NHnW5hqn9Bw4Y2YfJReB3KGGVYM3eYqnY8ccAwztWr3rPrsvTW5NE",
  "key3": "H5rgSsavARPvHiMCH3ymYc9qMdomWU2PN7zsP7nERskDVfsRHRqV4GUQ2DpQKLBKKi7XC797e44jTLiwDyqPHMN",
  "key4": "2AyFpBJhPXKg7U8DmwJaeRudM76tDWjPHKJJTMD1SVdkSFqoAnH2gogKpr24GSuyEpRY2s45anZbeWe2EWxbiv6r",
  "key5": "VDx18zbg2DWyZWj7nn4YGZGzpcaxoF84ppWTBv1HA9usKwWGsizMpm4jZaoRTZtDYNVUfdfggEsyYzDRbQzLJAc",
  "key6": "3FQ1Us98KRUYAVybxyTxoHYkRGUbCgxHsivaZg1QpxV3tmbFsyfBGJXQL9VRh3XdoEDibXmKdSWHWS98jYh3RXEX",
  "key7": "4xQp5Ua8tQGQRtSGf4B2DJtV4ViUdg1SJjxsjUvHuStMRvEn3AFRzQTuSePZXmDDkZW4Uxs1wSwzT4FKSh5PBMAp",
  "key8": "23Vc53bQijnxZuHCBb1mZi3heiVUE3ADxAoBiAin6GcQajQt6hr7Zvy3kMgXX5AwAm1VMBfMMAHZFRRZgp9ayGzK",
  "key9": "3wAT1SDXXnnEWwvgCJzGghiA8tzA7dLgYPrdjqLatnyjtKytr1Vw3m3NXvbBw8uVV736rVQ2X7fqTfozrVLFJ83g",
  "key10": "29chhJmv15g3i1wP4yEDwcWBkn2ViG5sFrdCPXzFqhcd71Y1ayEmEn2UZ8rXadrPjHAFE2gnbNv1jigTgd6NqUTM",
  "key11": "24i79TbbjEsJ7fcMaC7fwy2W8nAVno6Vp8JrZiqMjToCMmChRMwNUZT6g5ZGKNDPPMtFo6CB3xzfqBzBTzi2ewtV",
  "key12": "5Hro9MSg2yRgBGckVkVAjL5BwK72fxdUdv1qN4D1PfZx9B9585csaMKsAEvUUxZkU5zAnHWGDrLGpz3FVvebGH67",
  "key13": "5whxnFHce8knhfYpxn3njcF6LSzxFF4oTkDDZYND9RKvDJfTMhFvCUe7XcHZnne78N3fkxP7o8gxJ5V4ADPbupTG",
  "key14": "3QUQbnSPwfzhBjZzu12hY7L1YHCmCu2LyH2Y1iP7NGS3iY1UuBeSXq9dtnMKBMnTX9wE1kPNE7HkuGsPBi3GXkK2",
  "key15": "2JbY4YydjdhAQSCLtfRqC4nbFBeSy2AoHoHhEek1FH8nCfrCy9W1oG86m94MYBJexv2i5YtR3htooRbo6NaxnLTE",
  "key16": "2dhpmyPncz3QHFb265xrZ8vBTUSKg7K3cMzZUrqpscwEPHWRiR4fyNVarWUgCYYTepzPy2ErCKTkFCAD2SVP8Amk",
  "key17": "57YFzncF7L3BhJbBuCrufwgL5gxvPSf8jrgVLzygL6p2YRmBiaxghNdAE4XumVWBtiJM7cZmYhJMsTX6eg2q5KbG",
  "key18": "5sW4WiZqcW7agK6tce22aLRNua8y7coUvn5UFMqNZqCz4WY7TtLNzdg2g3kbPHyNBVYNU124RMXySnEDmYMsNJPg",
  "key19": "2ViTgueTRgNJhfKRWGjThfhkKZbjVmuacBagza1tJSXbJy8TGbbLoL2zpKyqVMF4VmUcNXR516VvsfoKxV1GPqan",
  "key20": "Qrz8PGZfVgHgAWY465g2MRr54XhXLrFUuaNkkHjm1R9K6sJspfKvWfZsfofi2yhvyGFjHxPHhBrPgj8qBzuraHa",
  "key21": "5vt8tiVAfuijYr57xSM5HELccC2pimMHSMXwGTAnKdSTVhsV79RX9nCg4aswjvZncjdsABi3koJLPsMw6o3JrfHf",
  "key22": "46YksG4whX8tTpEvwV7cfr6EeUdLAwtoWw2azubBdikW3N2W8mqB21ihfLFMX6fQ9FknDwCnX6pZNyYZtpv59J5a",
  "key23": "4jmj4mtCJnYKvRB9qaqfhEGXUoSDZb2CKUfphbmPd7RZV5eMQyDb46CEXdHniWTaP69zcDmjq6muLx24rRKYcBdf",
  "key24": "5c1aEA6tdkpbL2CZj1QLPnnLUac4JYL9qosPuL5ka2wewjWdKe4r6RnaztaJGcE4dLrPpmwqKMoijQ2FCMd4LG9R",
  "key25": "66wpsc4TU7Bd2u7FUQ7cD731igwa8fqbQiHmvftPLo4ifz24LiwyXr4Cr7F1gH28mAPp2hFQjv7t3npDAWtJyzZU",
  "key26": "5RPH5TmNMMnqgqzsZhxMTqhm2rGvi8Shbi241UwWP6vwyR5KpNE7bWp4fTQeWpzgqGgJATPVt3qrGjxiwhydMj5L",
  "key27": "5HTCNFc6KQaj3GinGvgCWnJickctfXyLYiSGtPRwgWArAzn1bXSzFNeojvMrYYdGgTxvDwbtWkHnMf1YMvAPCExL",
  "key28": "5HUbd4zZwom5NoLDeYUKX1xqvWdWwYQ9mtk5NZkJL4AYwBjCXZyqi5tLn9r9LijmXHV7PjkjA9YyaRqJteQ9zuJz"
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
