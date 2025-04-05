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
    "1wpqqCtSyARsE8aQZ39sEczGmQJ8t6zzub82fnRAhbcCoFjDq4aBvan5aZ4nqFrW1AJuxUJior6HJQx7y7nB9k5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ay5xYe63qaMo2mxFJUbWiiYHwQ23SAwSfo2vtVRKVxj4S3yhrBxwJz1bjgzXwPuy3NuSJjoXBUv3mU9fjQ2deAw",
  "key1": "4eVfiTQwEhanMzEXDsiSieadYNtrfXDVK8ECELYCAtL3CK96uRR87Ci1JmoQMSTL5Jw6MBEnqTgsDsDnqBqcf1W7",
  "key2": "2AwFkTUbLd8apxVAqXFiHHGgue1W9bmzsY5Gu49ZsMDVJ7TrewDTGG7hB9By8YYNGNwXXkXD47NX49sABmTexdSK",
  "key3": "59QxohZ3arWRV5UDrz34UXtRCWG94sePn5cbBapyRqUSSpMbj6ght9X2VazB5TBYQ2kyuW4B59L19biQfRkCWaEE",
  "key4": "2oSjj4ww9YBhMJ2LdJBqqL1bX5sGKnDd3L46fCd5Jwdyi1KpvvZAmaGPZaYa3o6CuEMrQ4P2ZBq7exgargtutTrd",
  "key5": "4RraZWPKLAJdgzFoCgbXVdRxxgBVoZHZq58pgJJwxBKehLF2CiS7pcWeMVs7eJDHYKAH1cjZ23qf4tZLZnVt6oWd",
  "key6": "52Fmc1WyXRCrjWjKJRcxYt5TRaXJCpJ3ie8FwYaJ6iVNmWXD4dZYP4RLjHbcMymDkpVrJhYbdk9WSDyCa23126aG",
  "key7": "5fEbC6gL1dR2Tp7ojMT1YCrh1UZEZDkV3cUmhaSj3kA3MRyT98xkHy4TFgoJJn1j3VFYigKGVnVbQLY3wuqYqJ3x",
  "key8": "2asPmWA7nfvgZeYXsugJTD2kD7Vk9AkVdk21WECLBg99GuZnt58meQdUpwUY7eAaFwwGVQYPVrfnZN7nRkDZgSe8",
  "key9": "4LjdzvJL3EXmVKt3adnGL7UgrF2h2G5tMW4PSftC3zx6rnUi6YdFHo6gFXrmo9cd7V71KfYpEEFU1QEBM9o1kVcZ",
  "key10": "3k3sEfv3gF2pvu965ikYqnadRMU4WB3vjz8qNezSb16wR2EnqwEE6ST3rnA1RKmpMgNWuMMoZcv6J7tnq6ZKaXDL",
  "key11": "2GcNGab4DyRQQUJTCBmcGKxZkwPpnSJFnUdcETaQj6mTS84DWRsmTKnK3jUUs1x2LGMiRjrcs42NioriUAB71c3Q",
  "key12": "xqzang6fguGNCax73NhiCEC6g6uorW34dWNNxZbe1zToSaSAEpfBDLGiHvJH2oa4an5edjxw62Q9AxhPLp2ZFSv",
  "key13": "5yGzPLUwNwGgJR7gDxPiK9VBExw89GFwzDVVR2bZBoVK35CKjZk2hrSrcbJ7NgHPTcPWZUQP1xDLzAHsJFxD5tdW",
  "key14": "3ZSssZBpr9VotQy4gNMTNyEScrit4pT2RUGVWBVhPvC22Usue66kHmUqyYNmwpqrDXFmrLJEmgeiYmBXwoJ7uvLX",
  "key15": "5avSGL7QFkeTAwiLPFUTRDmjDiavgkimLnqTXHSeN5NtnZEVnAa1icBy9FuojjZSUCPso4qK8NmF4LqXregPPDLv",
  "key16": "gLC45KLAcKLHfBz25f9vcmFW3my2EBQmYePqJfAgka5vnR99wniVXfvMnCwqXfX5QLtGrR7amci2o7Bx4Wh5LuD",
  "key17": "5JpAbDovwFoDRTae9CXsxpQTjKkdVjnphPqE3ZoYyQNRhaS4xWhRs38PjpbSMRSf2q9baLhQLZFwB4MU78xoGmn",
  "key18": "2taq3nVU8JZWSHV6ivfHuUPRqm8RUHxWMz5b1EN4xJPEMR86arZ9TSTUhdFdwNdqGEvAXMALB99ngJYTjun1TeyD",
  "key19": "5tFTgzDMx3y6x3y3rpKt2WD4SHUc3rGkhWSF5hSnz6o3iWVVp53Nfkp9EdsaDkZX4jMMQD78Yu6DKj8E7xTULJVR",
  "key20": "27gRGuLwVnXTKJ338jheA4RSxXF8AhqztmgS137DRi8hxWkhj5uUvM5NEMrnp1KGnPjyqsAK2CNwNmLHD6jVxgXT",
  "key21": "2GZgLzTtkXcjEzD9AoKkASUuKiMCR5bcAPLxMwEVNMQzP1Z6SyUfJWztbJjELXUSkWw2K88Nz6q4cRmPyup3AkN",
  "key22": "21LMTsw62zM5FEDdNx5LnZdXJ99WfDNYbjbbJv3NFf7NQjE2jTDidUX5hPJgrM9K6c3ZkYWw6YDwU2UfUsp27cDm",
  "key23": "j3s1Xi3DyssTM69XRgVT67LPguFoEUyGxKuNoytgmqJsnbYeCWDZbVEFj6e1DqR3qjwGdFnCCYkczVfh8Eo6DaZ",
  "key24": "4bECP8yd8WTcWyfnBQkdc2Nz8nbM5AcDTxhmE9A7Y4BqcPYFD5rUtZcXbpraVaJqpDWn84HU8Kf43nXXZqsbK8r3",
  "key25": "iWPtp8reeazovhH6zUmpnarAKzFsAem65a2f7EfUevH2GANpQtceYwLsf3FxV6yfSTNcE4a5nKcuJAKmnAi8Dso",
  "key26": "3S7d83XwB18bckRPtoADRNRVEpkF4ZGtUCgGE8sZJVff4MvA9EUqkjtYqhdTtoPUz64sh4vy6sZ8J115VCJvAtkr",
  "key27": "5J77gevMsTR44ZLgBAgvFQdsL9K9qPUHaXz3dSP13UVuVvoyTjerpEwdU428hrYcgkuFXx2whewJawCb468WAWvP",
  "key28": "66EsDxRXxc4Ro8CLTeAbRvEJU33aZwvq8wvDo6K18Sw2DUbGLSQTyRUbCYorUqneSoQXy3tzNjwMRbAcdZ7sWRnZ",
  "key29": "5MvLrahKaxnKx261QxrrjqcceC1ugre2HeSNvjmUJHL6n7am1MopSd5YjJJr34gJTxX8Rgdax4eFSMQbuFbMkLta",
  "key30": "WEQrmEEMEGkh3JnZuqZ7kgvguryonPvtMJFVQoRHfXj4o52LMWSx3Pu3XskwrcHrDb4QcuQF7ckVLNP7JbShLMv",
  "key31": "123GkshJJRsHyRZdBMr6QgRFERR3MNVjh9whdDP8re2KydYgysDYF5T7JsqiNrLHPEu7qLAiwVogspvha9xDTWN8",
  "key32": "4aJqPCyHvN8NGBSmZ23f85miGdYusP9mvGaipbT4SzV14e4J9ewARSMpzx6J8Rv8sqERcnR6yhHLZ7spy1BTiSrk",
  "key33": "5TP9s12V1qqvWdL9WwoLYThe12JvgfkRSLRqf1wXAnMpXzVYb37csxx8znYBybBzKB1VYSQs2xaRnQkWGCaF2vQv",
  "key34": "4QRAnkotikNuBE5P3CXAefoZt6Z4Uhqns6fvvpqWUyc53TuzEdfbBBCgxL9BLmzHX5D2WZs8Fvy9moNwrMH9kWDh",
  "key35": "2YWKqpYDo5THNoRvti66FcsvwuS5eThfe1WXNdp54uGz8JcEB3jdfxudANKYA2gqYXTywoYcJPmgRzm4E9uKp2t5"
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
