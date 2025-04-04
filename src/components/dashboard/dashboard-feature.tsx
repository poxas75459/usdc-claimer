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
    "65X3NSvcmbZftTnFBUDCA5Ju6N17yUAiXypqri6Na42JiDtUehAeWfdn8oH7K6FAcA3Rmvm4owve91wpneSGATyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EB15BqS6o56pua8GDaw3v5Xbo7rFP4ef5cdVaaFUyCrH8CE8DDqYJ6uT83WQRimHzbH9EBg58X4bSDwb1xRkCC6",
  "key1": "4QXRhvc5a4HNqi5SyQt6JVN1WAPadp9RUP7aJPotDPmNrw431b4gG1XDjNr4xKUBJhxrCzEk7KWJyp4qypbK3GDV",
  "key2": "2HtetMnkVi92ZyEDFRoYnEnr6fRhbCzncDpsjZgFFUmPffkhDc4pHGFi9hRp79UWfppMvZqnhyyq5E6ipuUEK2cH",
  "key3": "5PVoYJRxpgpqnXMVeWLWHZYM4FX5mhuWrw2yGTwn8HNdWv6m3dmFRmG4YM8MXDLxuTKip9FrLSR67BGdFzo74AH6",
  "key4": "uCu23kLhYJo3yYFu9LySkFXvj1iFomE8QZ2et1NdNzcr9gM3W3Ftdqk3BLWRUzPjucAqvzKccscMqREzed6WXiX",
  "key5": "28iVnUu2HVXTWcMaXGwuB7vxdmoBhUQ9qPGqv8E2W8fPcRo1CWvuxzyq66Sy4Pk3baPeY23MsVQS2mkgJBuFRnZ3",
  "key6": "5jgmB3Mvr4ReeuRt9xGk9B2DvTTbbLzB9BrrDHkorNbfBQi7iEqaLG54oGbcq6vAnB7V4EcMrLCUmpUn2UwSKDJx",
  "key7": "2AYnypnyuuNqcWT4YQMUoUdtmy39YF2mPH3HXmqRgeUTMw2knXcSnX8kxfjNEZVNNexQa3Xeev3tn7DNmJphJg9E",
  "key8": "5kg4Q9CVHHEKuirGavHucgxy7c5SbCiGC1cW8r6jMPYaLvygDAsuUMzHAWRce85LUPQAxw1DGkUnrGnn3o9P8knR",
  "key9": "9PFtbJ5b5yWhJXebmTMP2xdCipjtRdXeTHqRy5qh78iQ4Gh91rq5W6CYBKVSVPNxenKXwcAb562nGy12P6QUng7",
  "key10": "E1JbzNRh9CRMeCuEJgMcUThLioMcABf1G69jNWCbYurQgzKicqqZZiVz45rrWgyzp43J7unJ7ENoGr6sAfqXKiF",
  "key11": "3k5NUPSWWcqx9NzmF6qPEpigMP5N3Ngp4BCPoZHABgycvyrQhrqKYgT9i2NkksW55zWvUty6RaqXGTRVWDQNBnJ2",
  "key12": "FW2TVBUpdLjEFkL5u9VTqcZNcpeA7BsfEjmadd2Y2Vt4ECkyzefpy3agiRgt6MHdAAJ4AMn81uJskmrrVK8f9iG",
  "key13": "28sBow9qjfPTL3Vwrr6cMHTDWbz5RqkUyjd6Xp1HAjNzvedM99m5jE1r1APjLHFmTsumSZp5xVo5m7ktRoVCQJb4",
  "key14": "5XqV8hymNLgagEu7uFAe8ZjxfPQoTTRzJqx1SZV1X82EWRsG7aPR7wu4HtWcPxhg5CobXbZ95vQuE53G4GboaYBE",
  "key15": "ttd7GpY49TjUt6qYMcuxkQcZ41iWdnxRzLfPGViCLtJ5Xr6V5hTGMYJX4ZVxvzRFFrzBqQkFFFa8AGG3Unh8SJ1",
  "key16": "51dDDjJRNGVbqzAz8GELxZyi9K5nP3SDhamdLJHjKnarSyCDp1qqpnAd9zFiJ82Bco5TgsTc9YDVWAcqrHprVg8S",
  "key17": "3BZYW9GF3vmZBNaaXkrnzC9H4zssBma2dgjDSMQvSDWcmCBnc44ubAhgqZgY9V1e1FQWiNPyf5qcrSKXDVTLLkPY",
  "key18": "JXjSPwmHf6hPqzXUsXEcG6wSZo4ZeT8s5c4MqJFv2zHajfn2CjmswKGg1w1RoAqoAYJaawZ8vmECFKg2YNNpHdD",
  "key19": "3HnQ6DBiPSDBkRUaxJEhUtVuRhBeoPtV8NBMiQPJ1uUHhfD35TEfEAp9zbjwFDGtFcFQtbfrgZdFgAUc7foWtZtn",
  "key20": "eHu6Apoyyo11N4BLRq4o6Z3odv1Fgx2Rff5FPKtRbHpZTFEhNEX45EodJP7QnUokmXzdEjp7VnX8qzswrCBijJj",
  "key21": "4r4DFtqtHBg4QTDCv1DQCnRfV1mXDjQe2CwAvLJFVMcXQbatrmmFV5Z4irE56reLEjtNkdaqQwsjmeAk9basvwZT",
  "key22": "3CU2U6RmeEXfRZ7qdBEc4EuybkmYyDE4RPMCsowYe2sdmhvP1xhZffceeJYMvZEmMMwyREtXJdLeockrmMKq2yTf",
  "key23": "5nQWVHErwzbd2N3xf1jFcmc9mKsLygkFHMwfypQxUjimjKv3Fx2BKRccbfiTjo8r3wqfXk9iW4NFu5gZXyrJEBUi",
  "key24": "3swiT3xRZmRVCyLzA9r7KaB7AqbbvPtVk3RneXzfzSjoPRxTuTbzTTgDd9JHyQcd35tx4opGFuyzUqqyTEcHKJoL",
  "key25": "3mtaHV5tLcdySU3yFbD5BhAQZfwKa7LMYhoDsR2wtxBMsoxdR1Vt4RGn6UYQWxNr6ouWP4qwREbV9girgL1XABRF",
  "key26": "LncAm28YwuWRaFFeAfcxTnWUK4wwQ2WceHFSQHPdr7HLjzMKhvPS534hp3TZj2QkUBCXaw6sKY5yYQGKAqh7XVz",
  "key27": "255ppJbxKzxPk8ms5TxYnmuuWqKzixaS8PqG6xhccgNwW2cSyj1bJVNdMx5azt3TwHoSQJGmpj7ZeeoB7QgGGEN1",
  "key28": "5mELPocYGNQ6JVzvqTV1BdRrMzo968Pd4EEZLz6xVFt7fnHd7My4hPdnaAeYKK3tGjZtRqHgPjorE7tTmX8Qm7Wy",
  "key29": "VPogSFYFTe7U32PWthtKRT2TmDrnnHrAsnyjLjAQMZXucrGoRAEeX232maL64N2Fj2J36QJgnwHAFNJ2FtZBqYW",
  "key30": "3EMcBRn1wvRqPYqSpoBEHeznsmEpkRLkrV9fz245E6kDxrr7pBqTU5ERAfP8Lcj9i6q1oX5KSLhCz6FD7G7nR6Wm",
  "key31": "5R2FSeTWS43wTh5bsR59WRiBYcEu7uDWdfG6iNkbVpNnAwZ4Qfo5bHzfQzajHscVPAk9VJnm33A2mzBoayc72BAm",
  "key32": "KH31koCHmMAGB8D7tPabtV2goq1mbXpzXVzgHo9vtQFQAvwrQJFnaR95RwA9g1J5opNmpz3rchVderD6A6et5iW",
  "key33": "2cTYK9CbksHF9QuQ5NT3Y516Yfr1mjXSnmDAFo1J1ibW2hY83vpRgZaMAHnK1yezF5To1j85tT21TxCaK6byGFUa",
  "key34": "3aT5B9KrDyt5EKMpVUsELSh3iVdGHaLRVqxEgrLTkPXBNn4mYKfGG3XN7UenpDZckSG8QmT3nHpBknTZMMXfonpd",
  "key35": "4bNKWA9f1pWisRSuHf6JeFZsfMWwxjbFtttDB1B5hP7vDy96UGrxwUBiu76VP4nw44fJtnoQmhCzRrafMWaxiijH",
  "key36": "2wjvUJBJUDN9bdxwECB6AHKVKsRFjiJMR4KMWkFvzhHHLkiKgaiFhDJ48a2MunRT3VZfM7Jf5kmYfr4iSS8PLNWn",
  "key37": "3WXiqGR8hWAWGRfPQYZRkcTyBVFB7NtuNQ7QefsWrz8KsHGR7gCb24RjQCYtGeVRu9Y45ooRzgTJB2mMnEfexdLa",
  "key38": "2PpJf5XMRG68sNLq8dqfVo8LUq2hUupUyMpqq8cpBB4G9MKuaHARRtfBpQfEhqQveZNUK5fG4WArGu7KW4S1LyNW",
  "key39": "2wbiZBEtjK5KAZeGzjouo78bQQW3aWojf7GfzUX5UAATDYtdJLuFwUTsV69EGgFSXXNwjXSAtRMKhZPk3SM2CSd1",
  "key40": "3m1ivgrxhBTG5FFemHWdKixReMvdkaorDBBEPq8bCZf9sceEwzMmdi7SKCj9fMaLheAaR6LhU5Q7t2KH8mvcFum8",
  "key41": "7Bgdyrm363HKu4sZfexQMxtMc9EmTZojfcCcoWREc7YNhYrze8frEBdaPjyJgmVM48fzmRUmy6PK8E3XNkFr2iH",
  "key42": "wehMvBYprW6Xp81TStHtdnbTncH2LwuB6TkQuunQ6FzmqvuQdD4BDV1obPD2uvQTmfVvg7RpEnPkA9u8E4RDzzi",
  "key43": "2k268roq1tNyzRo4aaWZ3k7A1ogZBtgi7b86NvpQ8fEcDQUe9ifYP9SRfDfwf44rcAop4eapfC9GagS1518dSvxU",
  "key44": "57Y7vCh3Pd74qvhT2n1aD28ga6tLqporkabCCRs7Zr6xUW8SAQC8nRkWNbxiAKxMHQuXZjHH2Y4gruiBTjsfymsb",
  "key45": "2oGY7qnHPiYBW6xcdomZ4U5Wd3kuWsQWXCapdqs7KdAcD6avwF4x6YH1PSWTBAuBjvTBznhHWLjRXMTUFbq3GihK",
  "key46": "5X5ue51Rn13D8Hs7udKdgbBT87UCLN2G2ZFGLWe5zFiz4av2JdSG1MeHGdch8sAh3mUC8jBeWa6qeRL94s3xG2Gs",
  "key47": "5YNqUwVEGFoqfvygsERrWVAbdaTEjTmkc22XGTpXvN9DA8wm7SWFy2NAL9yhD8gsSU1LWRsKdxH6a74vBumZKG27",
  "key48": "8JAbMaZb6Beyuhqx96ScLXFa44j3XZHY7jP8cdAsuxZbquCxGpD1GCLV2mR1z8CTyKCLdEJDBbHqi4xacmQL3WM",
  "key49": "5kr841YUf45EbP2aAoMvooexpvr5WabcvVwNtEC8f9SdVGwV47uqZyJa1Wh9KkFsm5WnWWzr99sGU4ciY9uRhPq3"
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
