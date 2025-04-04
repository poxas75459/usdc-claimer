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
    "5YujVNkvAzcKrRbG69EiqhpHGWC2CNCusFaFHZTyXnHNM7F4k227SXKC3Adt3QGCuzLQH21oMrWRktXqELRRj5W6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gmJrNUmVGx9SUF5iHMryc4pS7TGEwgwqg6MTDCqBpmqGP2mrRUDbQy7NP2mQCWeHd8aYGjKU3F7mREY4pmPyXFk",
  "key1": "2cmydmEmnuZ43wcveMTewBEXM5ptGY8h5DCpC8oTsNvuoomRUjzDezvbre17wTX7X44Zgq8E3jEbN9mQJzWhEJA2",
  "key2": "5P3EZPnRRrxGzZNuPDUXn9HeF6qsPELGPf5CunviFC6KdxbtfNE8cCBA6u8jm1W8cHGnRbAxeVxJyi4e5fRYbMeG",
  "key3": "4LXpvsgwq8Y6jy6UhpeCiXWYWUxGkn9vQ9Uw1DsQ1GHPxiAYqnfrjGpC8RVR51LyukwcEPWjKVY8auMpY4YfqkS8",
  "key4": "aMwjTifU9qq1HXctcntoVyNxbQNdWsm7ffn87uerEzZxMUiV1pncyRyHvT398L44v49iAADUf2eLpNbDynnaKVA",
  "key5": "2MR37hQKdtLasKbYGyVfmXtUbrydXb6C6gh8JNFcAbTtCEsyg93oMP4DMW8rX7rPnRJsFg1FtWAZ1KtvBHNso3QK",
  "key6": "5kaMGJr2FVjJWB2TFUcwm2x3CZMPksKbS1FnWcjtyhA5EdsSb2SjxGa8LwNqhWb92RZEhhjEXgPfFhnt8H15CzcB",
  "key7": "5bHppUE6kuarZ8wCyD5d3hdEZuCwTwiMpqLn1gpJSyUjRw3apx5iGRKc98L1RKF8FNGQ9E9jFXKFSN8Ngh3J15fP",
  "key8": "2QoZRpLQdWminUM5wZJHcR5Sb5mWpAN1ohNCNmcNhUMvnwQLYUqUGPcPwm7ujN8vitXNBLBCMnKWmTpPJQh1WRb9",
  "key9": "32YEwdXrWHVSRKewC9GX5sdZdENvdAcHWRiXwtzcgeEAqEgqiXqX83Q3FJd1LgbY3xewySeMFz9rAwtUW3omuVpE",
  "key10": "uuccmktxXRqhafPyKW6skJSgms3L6rJAzFzNZ4WocmCETdFALi5zo9yBKVQwpC8CX48S31GvCWpmQJ1eqQ2MfET",
  "key11": "5QRHwD3fT3kb69HLwbLSphuVRWDo1LJiu64R9yAPNTKXQcm7oxBJFTxDHG2vT3yhdr8yGqLQHjDfGCcFSLZkiP3s",
  "key12": "9DfwBys5zuNzanVwp3hkQZFGJz5i3WwY3zLGDJqE8jAgyXqDbiwCDkjuGUSnLcFGer5m7wHKGT8vHNdot6Qp6Rr",
  "key13": "2fqnM7GT3VYwV91jALUhkUPsgKGfBiq5mv4g886d774covqQ4nnLrx1zV4HTWJm4ZGTXCyXc34ppHLGP5Z6t2Vt2",
  "key14": "4jXQrhtcLTqm7wpL6ckUVuVizkWKU3CRScbB13T8NyEzvZDhbeXbx1itumhAJHkhnHQrhFQ2vXCRKHksf37PfoJD",
  "key15": "TFKZccbtaWxHehChBmab9YCdDANyqBkmeCCenT4H3PqH6w8M6bhHEpbZd2U1E2imVFv6atvpGzDxc6RbtwmRLh9",
  "key16": "4VfUZNJjd351ipJJZeKJuby1a2YAiPrNCkfDqDiuPRZz6a1oTQUaUYGXdFv6iWTWzqYLxsxGfGz6GJ58BbVKBaZV",
  "key17": "5u5coAhCjAacpFEVkoBjGnLggFTmQzt4a9oxfNJ2fK9BSo8jfPF2BUb76S6STeGFTeRBxYctvuA8ztfofnWZ8vm",
  "key18": "2pX9WPKNQLVCbZeo9hgAmjCB3TPuYT9BrmCu49MV6fFq6goYm4qnszKhMsKQp4S51ao3KfkrYgMtwtV3DbQxsPDB",
  "key19": "4DsH8tEs3tEW3espaZcucqAoJcLQYD5zUJxwvfopHNF3PPHwBr9vuw4dinzTBWzVE62y5Tf6FWzVajuzqthxmeZS",
  "key20": "3GNGxowDT774CGZ5kADr3iLm3FNaeXbsMznkG9gVV4YP2X9GqYsR8R4jVDt4nKTcSQn4oBLCQUDF3YEhgnQ4Qbvo",
  "key21": "42Lgnv1GW9EqXMmUS2qSNwhgcMKWqbNjdq9dih3rcMoCzariN932fnvXnbuyTvMiwWetCnoVmuHstrmnnfzH4weB",
  "key22": "3MDfrLbcjUhRrMqAJp7FAGTfYBTwkJ6s22APK13mBe57iykR4Gv7jo4hZQEZZS8CF3VWgqiufMeXfniL8kgGghZi",
  "key23": "Zw5g9HycnWMp9VL5PhaZqwUHmAdj2BZ9EXD6D1E4ZHYjHLAXNqHEaNZtDHCVqoVbamsyHDSdnR3vUqmABPvCEmp",
  "key24": "f4y3ffapBwBkci2fgWTLXVFyYDzc3mGfih3g6D4NvgnpofatPs3rCfd4FUJCVB3B9AtAfUHdCmAiAaKcQgsFX2X"
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
