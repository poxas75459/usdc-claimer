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
    "5DzpfSAroshua6cNcpxF4NgB9RaNMrgspD28ZUp6y858utGqjaSA1569QcC21Azm4eDyEVe8navNDHoF6cU5oZUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C18cQEEqRiYdwShMaXd9zavW7ZMdQpqP4Fuw4zV3WoGoJhaUzsFTXQW2BCFDHqwt7RD8ssSxpX4snEheWvZdXyc",
  "key1": "3aYSwcNeetRdwdyTFdNn8MWQAC6BBSvyTBRsNpmU2UzbHdSZ1XGGrBhXzA2ZhiduKh4XPscCZh839ryAyGzdQuBh",
  "key2": "PhUMZTZ3UBWpvdBVuZ4WhyyGFJGauoXxZVEf7PU5GzsKFYyfQNESoLJj9YzHyFBGSd2jPsZUfW4pNPi72WbsuBw",
  "key3": "2mtuenjKhjpPMTmi7dVqVnXy89W8gFC6H9ijvKQa1aHPuMjhAeqP383ZNGo9727DVVtUJDg8dQeSxsnAJPwszyyx",
  "key4": "29VbXVqCAANjMQPbdVz28nBNtUqULc66xxtYu9r2VgVnyNDR9FN3MTFbtaBGBDjQNJHT1HhjKwSxTrfvVqFji1Ea",
  "key5": "5E2rrCpLQfbvSXoDTyDsZv2Q8bqTxe2PqtFZ7rAu2Mz1Tjugqe4sM2M1YgHXdjFos8q8GXqj6vX5kSzg5stFwpkD",
  "key6": "2Qt4yx2E2WcJ8iPbuJuXzxzcprNKRUSHSPHR2wx4Qa9gDhvX35g1jxuHGLqvC1R3YvU3KxPhtJraTwntJgY3vgwA",
  "key7": "22PJ3qBTCEYsWj2my7u6x8tENcAPvCiqTNu3fXaTV2QiGT7cfj6C582mWC5NxdBfRMXbx3xqdPEzNymga21YpUoT",
  "key8": "hCGxVbopN2wmsyWY13bi4x1ds4PdAS3sb4ZjpsjagEKqsA4LkFrJq7YCHD8tFVfvZSmwUQWAsHpwd5hhF2VxEpy",
  "key9": "2EgNGkDHK5F5fvdBPh3H8tAevZi4V2qAcrzyGiZT7oP1a8sws14trqkHZhgAu6btwWanoZy3UmqRQ2rxLu7rjkcV",
  "key10": "2dyxocnmLTQDoaRN5BqCB4Tgwhar1N3mkixSubDm9BJNjLEii9y7wSwYQVZbJdTgwzFkB1vLYjpBUMCjjmMg7bME",
  "key11": "5bPwNnxcM5v5v33FBobLrqFMEsRoGukDMSxPFKHS9N9JyB17oEWyWzDGcDapYBWKX6EmGS38CgTxBd7w6fQVvR2e",
  "key12": "4sx2CeCQ3MWf9bYPwDDMBhgygpeJtthGsXhymAJV6dzRKAg3rN71j3c9ixrS2hQyyKY5NEFmffGssZszmePNHUAT",
  "key13": "5iUws2vN8d5ZPzXaDZws3mpM69aioyhubio9qUZLRXv6XsHYYZkKqGPVo9LQAWQNL5tEeoizPrrkfkJJRWebCutp",
  "key14": "zjP5jkjpj47jyXmbvPbojYNwnGkHvqCksFVGSohifV1mVKwssD5Ar8ywk1fCtAdeeCEpQ9sQspNsemTeSr2fDvg",
  "key15": "3XqeJiSn1pEv9iWp6YXhCADVBdk9wwdv1r4SLyknUdrx7KJkEtjxAHvdfzA5iKcSmTvbmYsgiLkMFhmPM3PZWA9e",
  "key16": "4guP6vuUhAeLSz5gUtjcRPNXt5LG4qpR1MMfwTpdmdvV7WSzuiXCRomw1MGAPgTpGW1fEkyVo4dzeArv2dXJHXAR",
  "key17": "2fbSHqopM5c5w4hQKHCvzZSeureXCEEJGdk5gzJtz2485xfbgv3GvDTghnmrcCAmZfQNNHRbqL5XnwbrMCRUZVkc",
  "key18": "3XLWxuNnvqeeRpakruMFuznR4FVuXXHFJSapS4iNW2XUdK3MZCE3RdNHqe6AH25HPNyh4Q79f98FveXRffnrtKPc",
  "key19": "3iyxhPQvdArmxYBk5MQ9m1tQqNn1P25Vsi2fYvhr8pTJN57xkwUGHfTJHGGtDanUBqdH5HZ1hmQuqZyDgFuu1avJ",
  "key20": "5peTawC3kPwy5iJEwqHihyARfmrJ1ztLP3LqE9yNTKTypxZosqBswoL5h7zKVDyZZLmPp6TdgtJydswCqj6TxpSU",
  "key21": "VNYfMNeVux7mbAu4RTcYF6e6Xo3hVhMrR5daVe6gPrZEsvPoLRCBew1idCiCSJxffBf3ZWxRktAFarmxWLT8NaV",
  "key22": "4D1wPYbv2BFHV7KhyUQBUYevybenNm8VxLoW27WebYRmqERQmoHThXQ4PDj6tzmY4xMDKTpvjkJvvwPhcy55RiLC",
  "key23": "5CMUhWp82Kc1hw6zvhChuXe7FCWxYg3EXbsAMjWzmyco3Qi5U5c815uWJp4DtkkP8nMAniq65PVxN1wkt9ypaHtW",
  "key24": "2FVFWJFv1ReFMobviNtNwrtCxXoZbuSG9BaRhAcs35g31jnpduzUA47gHj13QkqhqXZw3st6428r4bupcFqYj4Dh",
  "key25": "4jwt99s34gXQNT4L2NfwQ9Y4GB7Wci3NvfHNyKARo4EPfSpLKK4nLDhRp1L8MqxFPpaGYySLcK9h4AtdEfzfEwnU",
  "key26": "49eFxYUdjZXrk4ojSFG8UbkMpN3PnrQrYdXz8N5uYyu8XgUVtwpMLiF9BbMpG7CL5SR6SCDH6orfQmGn5zdfNWQa"
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
