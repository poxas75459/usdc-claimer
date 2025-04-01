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
    "2jvp9816WopdtUrhknrzfet72P4UEYdnqzoS9CR47QqSmt22rmfeUDA6JRPeNVUiWs9SPr36rXDQTEVXY6y4HgkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TzZKswzxu2FnNYyVQ9Xh2g4m4ZE4oioKrRXmgKYQSAz9qsbCu3CJ8E9vZRC8XunpJXerKiPZQh5EYjV7q44zk7Y",
  "key1": "3X7jLoaQDSjNm3hF4NMsmiTUEfsdETrYR4sssmHquW87pmXSf7hVhSddELQFsBezsT6yfhXmAAnuWX2XGuNGxozq",
  "key2": "F66XmRvGJa5rBT7LEzTrg2BQBY8mvTL39vy3ARU5UhTGvU5eLaSwPPnKu49mZwXEBJMANpBASa9zSpUYoHMBkvu",
  "key3": "3uBfmPhqwr9oD79hGKXW99xXn9WX7p3DJbQKVCwDsidKG2jNA9c3CoTpXhMFpSEfsB9fo8jg1i1JSHabbh27h3qr",
  "key4": "2jLjozvqtnfg37pcQjPemCaajq5dgH7624AFGbT5Lvpdk7rbeDtHwT8eRUtzKZg7LiFVmnydySuVJqwtMCC97bx6",
  "key5": "2eKYkggtyrjWW3VQMtbJoxNhgWMfbBYU4WQnp8bgq4yYhW7cDSnGazY75ep66gCBCDB3kEEuqVk3hKQzfy1RPTmh",
  "key6": "YgbKLtTvKq9BLmnJHm4KXEhRAWUFbWrXMb99GsbqRz5gMSExGztJ99Kowqg8q3rwmTMjDrxeh5JddeF46d7yuJa",
  "key7": "WpXmDoePKzVzdk8W2yU57J2WLR1UKKReYDymoBa7gaLtdLffaZCDzKvAmD4TRbSktX5pZKKRi1X9BcW4PwDCnve",
  "key8": "52neKTStHeoVbAZeg1zZV7xcU3gLPiNumP3naDgKiUAEdPYstMF4PvAy846t958j1encujDH7kqTekVdiqnMqnL7",
  "key9": "AgD6yZSEH63Gc12nLC5mdVbpaWSDmZGt2XUEeYKitV9fp2tzxgrtVL53AtMSX6Db79GfD8PaTnK1ie5qjsQVftF",
  "key10": "4krrxbH764qMGtCMFhg3PyZhvR3vjtUi9WP3mChK6wDPxdQg9hx5sRwGyaYrWZoWNk2qta8qMTELvbsRhe6GH53x",
  "key11": "5a988KYr6TsieWUj2kaGdaH9YXAuUND82QmPGZcFpu5j3fJTtAW6XZFc7iLpeAhD2nWkjVUe3vWJFDmhf4R17ZSD",
  "key12": "oEdr8gF138NhgGgHbqatkzDBW8eaZR8ML8nmMkitZBEqjnv3uNomDoJoUNx21J81qzmqcN37KaFs8Q2Cj2BQ5EK",
  "key13": "2voNv3EcJy25SJWeFh9GSPebxbY3JRjY3wZ1qUoQ5zG4SxQgh94G3rjZuBCeAnG6jpQfevSR87BXsFVJEZc7CPMU",
  "key14": "4ZZiiSZsTQuMTSxUUXM3NtxSeZaZJLgghsvP6q7t5XQT4CdE921cfoe5ZWda2JxQySwmh43n1MtZ6vsLDM8PPkWH",
  "key15": "4K7emgt5qZoymTrKk11ek33DUqrp8Vzs7J3eMWduoxCHB21JNR4eyFx4ctakrruVcbtpkZRAVhwUHhTqR7Nutq3D",
  "key16": "66YQDt4fbs9Ud7sMiBVcoyENs6V7zYZ3guTtdxatmW2eG9bKjdDPiTSi6af8Xjn1t9wdNdXxiEUhKHDTzjapCXDo",
  "key17": "3yjgQoceUEBQQJDx8L4q9kp6Yg3PsegmS6uAXNqw3Lc9JVTsXkA6K12DwwTSWEioELWgTmVLDC5wrtEd7zwBMy9e",
  "key18": "xJg4Jf3jTBbrPCcknfjZiXY94DzvzyFDrjEdHPanGP7waneTyW4Et721dj3op8xCe65Vi3qizq4bRzXynf3GJ65",
  "key19": "mrygPVhyQdQ3XPReqbqAtf3FHswLQwqnCjERf4cu1uhQcTBq2T6UE2i7a8RaGp5ED63NBWXHqWNhgSMZzgVFoDL",
  "key20": "dhKZZov7tX1zUiaTiq5SNpQiAs7CdeKQij9s8MiqReEUkMa42WuKPttWsRuE978qGVpvjZ9LLxNVFnpQwJDgvek",
  "key21": "5n88Xt5A1c9Gh5zyJGhdJRCv9ufYaSxktM27Wny3M7CQgECtgfNgEnCpxBCh9TftDMvAaYmYCdcdx4aAiJ75mYzL",
  "key22": "3cuTw5Bq1kRSGQ1jKePH5jJCCxW3ogUZ8uH1wcxDXVjcdP8t3KUU1KR8KH3EvozHdiz6PBMVzyQhBk9JMUMMhx41",
  "key23": "2SomCsdHEwMkF83bTxxUcDvhbY729SmbAFZsHaxEizQyJGRZCjfQu5TDwCMHu8majoghzzdWLK6CTtc5ox7fV7Yv",
  "key24": "Zv66XD3wEPEKiAgUbQDHjRe4G8vTKCsVB7R2uEzPL1JFXpKLy4QkysFSgN5K4NCuM6qvBRsT5LJAvn5jzrfZu2K",
  "key25": "3Ah4Hz3J8vLr3p2c4KgVeup8f4b6RR3eMWSZEdQx3e44eYJ3ZnA1XnWGEFt8tCx6iEj7rKzycQk9jcMDpBkmpPaF",
  "key26": "3QVZoA7QjK2EEBGkPT3mhHMsceWaECK6nK82qi4PYLXSDb4kdJ9XGX2xEUwoBZdmmytr37usBMvir6gvWH5jGi4L",
  "key27": "4VTVTREa9SgNRBGrbRrDjQRxQVwJBrqrvgEWhWbWwqG6nEBb8sQu98aAjbpJ5tZGPnszRSEgzRTT9ktde1x9C8cx",
  "key28": "598MU1PmXudKYCTViw4ehFwqu2jaAPuJeJ3BKfEoJ6rPhMcdAv8zmsX5ptnTpgV9bKcD9V1bqRzDUv2ubu8bFgK2",
  "key29": "2489t8jVUPGX7mQmipE1e931Cxm67p5MYpnLEhUsVvSbym1xnt3UWqfJ5VpkZQXvREuCauaLcwxBgUsTz2GNRqqe",
  "key30": "6Nt1sw6GVimknKfsEJ8xKuYjnkcWTgvjNjJy3eRSj6q7i3amB9QBmbV617cd1MCc32deMwJpkmCPioYqYfFZUB5",
  "key31": "2iHYwk1ztzdTGpVDbx1igebNe8aaqvcWgxhQGCUj18o8cNdLoBnHf8mNjd3iEsWF314bNBb27LEb7Wf56gng1mj7",
  "key32": "4YBCWdGTB4h17ucfpjnXTCZy43VjriGumVMPCYCr6yvTdz1bZoNdZxjzgnCcebaHgfeb5xZq7fkbwjDdEr2Yry7u",
  "key33": "3x8fmEqT3JoDNXu1g2eLko4UZ118Y6webRsuAiudm6GUjf5ADWnnFSSMM8GabZEQjLcWNVq7Xhcy9tMaQAZKdXS2",
  "key34": "4AbTNA7kNpgS6Es7PbXmfjquVJhjEYfoRj7sAZnXDqxtHDvyrThjTKs9piq41TFKrbDn9EZrYPtcQy147NRYJ17q",
  "key35": "3fKE65pSpd8Kj2bAVj74gxNbc2S6NzScvcC53RNKHVLS3ctHnasyhaEEoP2TSbjmrT1mEwVEv5hFXLwj6WAa12RJ",
  "key36": "5LUyq8qUNAVrc9frfDwCyq5xC2ZypdBKL1RXeErPj2wA5XfotuBg8BQzeExmNJTrPG8goaQfZgcDZCQkXB3upXsQ",
  "key37": "1uZggVFGXCpMaYD6bpN2fnQgFsQQdeEX8pumUxQCXFshq6oGEbxhDB6XdEUZL9gZaYDJ6fN6vtEdAhJ4JxKv7EV",
  "key38": "4gpnW2C1d8RMYQnLC9TKMjoX5vbzA3fzAuaTmnkyFXWTamQq4nr7ogf35kJ6QfBUfve1Yxhgft29GXJaFmwzvJLV",
  "key39": "Fd4F2VDXHBDh1rTWKgjBaASBsYX6uiXoTYuEgQZ82EATDgQcG28rnKgiB2uPHyFRJpfBW821ioEjjeoXvvzX2c2",
  "key40": "2Bd2QnCXoUHkFy4i766pqz7SDMUKyrym1SQ9815gQPegwwzxpgX9cXKevr2C47UnDYsviRxo3QeYvz5W77UWgYT7",
  "key41": "3nc3VUjWeH6GSjKHwoY7CpGfmc9Zg5E7BiMCb5KDixa2i4MGt9Cm694v8JZmmiw36LJAZuZiHP3EvECjiioVPK3F",
  "key42": "DDsc97ph5vnwoqqe8sjvW387JzotpLLNbQv7Ge2HxVyPdxym4iAoqvcD7fV7Xs9hAb5oNWcDjRApPtqtkpKfRAF",
  "key43": "Gq99LdaREX2cLPX39BywME7u6QnnGdsxfkFHcu5xNdigZQuVYp8BCvT2Cc7mecef4DEh6Phsb7TrL3FK8qX5uDp",
  "key44": "2nvw5XUVbSjKb7q1Cb2uziVH1i226Tie4KNg6N7FrwufPsSnbbAH71yyW5eyNAPMSnDMF8iwH1dDrzCj61WxPJkX",
  "key45": "4JKP92aMPkcSRLanUUo78tY78WURVgcYSUXVrykAxwnBGTwcV4tmjfYkP2es5t64PWqJckpyEfLGkNUZFaKAo2mE",
  "key46": "5k5sYWZFDXim8WhXcnYv1JW7qVyHJfHK15gZfpCKmDTUNzt4ui5Yw9xCsDfed4mfJBZ22iZQcHJXTPCme1rx8tcv"
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
