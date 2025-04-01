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
    "4ZCcRFH9xBScjupcQFXisBff5sTkamjaz5qD6zxc6iADkBj9exBdd5w6Ksw7qDdxkLBxLSA9wfE6zeuyGcg3Q7g6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X3sKD762NhJJVfhg8bv4JDNgtmN68RvKVEqabMTa5F62q7p8nw9mk6Rwv793bwvWVyh5AgnkrSdZ2fsvV73tmWv",
  "key1": "5b1yRGeaTr7kKmGwt1S8vn7qfsnrBiu3XPWP6jS4Ar4YUrx6NuVoC935FfrXdHe5DNFTEaxBWD8F8CmuZ8b8Uxta",
  "key2": "5vF1gdnSQpMDQNLqwaYRUsypRjzmBy62o53LtSEmZ5XxzKdovmDPKDNFVQrUD65Qfk2J8xfCm214nKnZQceHw3f",
  "key3": "4C1cNHfpiPcFgNW3pjkZweQbwrh5xzPWtKCRbiBh9G7GH9LXqNpZjTtEugD6smBv1oTq13kGr7Q4HTDiQ4yx8aTv",
  "key4": "3tRVUgChhcRYNPUkCpUiMAuj3DBSTFEu2QS4Z2fLX9dGVtHZMZZj5kzzMbGPW6gmJHTcYg6Hce2WnahLJUy6j4n1",
  "key5": "3eU7KG5jHhAq5zfpUGLW1PjKASCG44p58a1qS7fyEPot8WPqgUFRXQpvV64PeohdUDek4wFnyKUR6H7Ka3iQ4Heq",
  "key6": "5bDHcDY3StpUYGYeK5N4JQhcWugjrbwxx7pR16LSu5T6CMoujyiA5nwN18wd9wvtmWPw4zH8t948aFT1EqjmYWKq",
  "key7": "3mvP51Tk36HLkp243Y5eQVUi8GgLi2Xq9fcaSjErCnJG3U6kbnsSNQzN5GSFFSPaV2NmTV5uMSWgtmHwRpTeNsRo",
  "key8": "3y9iNp7ThdFS8CXepZYTpWpCCk3b2iURcyojpThXU5ZYFbVa49ZxRQyDUKMH3o45yBWrZQeXJjrF867auUPeAeS8",
  "key9": "x97fa9AgBFVTSfum5qrj5cgTqNGi6me3xBfg8Vqs88Fa15SqtA3YBj4L26tdB2w9sdmdUKNmGyHdSFvZ1XZTd2p",
  "key10": "bXEpnPGfUUg545gCXhXrYa4qKyT9B4s2vPQUdM3dbErNTb1GUKkDRScvsNzy6fAQmBhZnDNy9g1XXjZ61QNj3Eu",
  "key11": "5KdkMH9JC3QDe8LQurm9jjyBkvW8UwK52fALpdB7TyYciZuwcNPDXkEFaM45erMbPBR6VRKo98rYWLXSg9QBLVXp",
  "key12": "5s3qBE36eqjaUoubPNMJsW6VmEgjt53jRQLn83e7u99z6MfhQiterjJuTdfWBFY7mdc9vprgRkevMn8qZxfj8r7A",
  "key13": "2XPgj2Mf69T4znsAejWjL6ugJFWkhmuWsUBSKoxTcmXEMAHto6nkVue3ksP4in1g3zZoKXvwe4C5UCH83rBJUt8i",
  "key14": "dkki9aaz5hEfoRkPrKEaxAeiTWydrLsqAaTmuPaMehWmUKrSYiiKMm9xRJ3LesPh5ucVYaewdQCcyxt1q6JLCyB",
  "key15": "DjUyLdBv7Uk2H9c2ys5WDtpqGZd1kgM4b3L1afBPeS3jWMraCe7mY2zePfMhLU2ts9nrnF1da7QVzxLNutRjELf",
  "key16": "5UpzdsXBoZk8mk7HHBLFuD5n9ABFr15Fa57TxaBdAaUTHFfJ4jNL3FHMK4XPGz36RJAwk7Uczer5TqFcbaaF8J3U",
  "key17": "p7XjDLvnuCD1AFc2N5uhuv1GtF86zUVxuCiXQaVpNRmsYMLXrdRGCh6pPyZZU4iRU5kBHrjoqgRCRFTk1KUCFGX",
  "key18": "3DVdbeuv7MKugGdvkkKsPTNypiS45JAT6P1Tfv812Km1BHHvdzcUMrRU6pcnduNj5bLaoyg82oX6z89JrP1qRqzv",
  "key19": "2Lc6igUzsFTn3Ei2RxvAGTYRtJe4CVpbfAevzvdkXP4356dinUqgpT6QP6zzb9GPDosi2pwh1LE568WcG72jwx2n",
  "key20": "4thnrbKoA5eLXsVA5VpfRWKyhn37RpfMdhJdzQaiE4znHe9jcDVibdG4GFS1hG3KJwwST5NhJkXeVGtYbejU9QXZ",
  "key21": "3LgLBHdHSRNs7VeCGgwcsKftkixUycCZu6vcCVTDukagj2F9SEzSGhp1NposJ6NRKps6JWNhzFF4mLHWHiTun8oM",
  "key22": "4zPmUVN4mxSHpARcYc5bJRkNT9XtNnF5wD8dwHbke3kL5Lvjhixrhm9dw3vJbiqWXixQojcw57xD6SM64VcrRiWT",
  "key23": "5utDmGnuk3oT9yVJ17nQCuasHikoHU35xYcwbNSFEoMUvqKKScQ7Tm5pQEzCTP5Fpc7aadtvkgXyvqGfwdegQF7B",
  "key24": "2w165H7hK6zxb42d5zZnUQ12uEnotDNCRAUnxh5MvQJF532sVhXb2mJBhqRgt9B9vr8xsbvDB6ARhs5Lr5HFztzC",
  "key25": "378V4xo9QVd12xTP7wE1NaZYGBL3RBtSABMyJzrZPr7sRHvo8BvCr4YxjQYXMREPVmpx31rM76JXsYByyCovtnbU",
  "key26": "5Ym4rFYEozjWUyuzPEMq7G5Gzs2E61Ze2xSWg3QhcX7czZwf6Q7Nnadw6Fb8v5e413XXRNpmt8qLkHhQnqHKuwL3",
  "key27": "4Lez9pmqiE6KCfMs4MZTrvsFxNa6w3cuTSujb8XkyUYam5WgqjtuejLPqJMs51M87snUQhpKft4J2bkvZnvSGsRZ",
  "key28": "2gJ41w9g5MipcDpajX6FPkDw1tN6jCaBSfdNcFY6T4JerPhCV9EQAfsN1h7BC1LYCENSeh3LR8n1FHw7nmrp6UEb",
  "key29": "3o4FRN9yqPPBDDvAKkWdfvMMBJ4es6brvs3qwhvpZ2DbgmFi7UAqSr4yC7Ba6LEK3C1E4Jmn1dkvXvUp7NHk57cY",
  "key30": "5GyUoM4ee6DGcxhRdeh5R2MmL2zfbJaDQYmdnVeEiknLdeMWxQvS2kpXi4oJssyrYRL1Yt4iwRKKjWscE2B1ujWp",
  "key31": "3B5QtqwstqrfXi2vVn8hAXod6Q7QpjCWenCv5DzrTvfDmVxX9HC7TXboRqZvvk3srbVm4CHa2EP2EYxsPmBKDeoB",
  "key32": "32i6zAotKyQu26s9zNMCK7P7ZKAJakJwsZ13S4S5JUAvRaZxbkwqEerYEmAQKkx4dAZhohPf7Xs9y8QeYMjk9DMQ",
  "key33": "3Nhwzr99un6QKH9XwK7VMda9RKvUbBuEJDFtVjBncZ9HWALZ6CysusWnv3t21uDnwZbsNzKF7EzA2cfzyeVuZjof",
  "key34": "3GLzLPJp76AFNbxkhB4okqTqh4b7GWeyhq7W7imEx1VhxxLbnPsUbCdJhDNZJBh9MV1fEZ3ePAw3VupHbyaLcNJ3",
  "key35": "4F6zZh7HvVUFiXHuzXnT3QLypYDVBsojV51DYiXAMHBwhrcGdYkmt2VfBtf8iCY1jM9cwUN3AJykURGRoMxLtypq",
  "key36": "7SSPzfQreiGmmfskuj5emQJfz8pW9ERswymmJFJc8aTvkYX4YugfpHXEDKsRPMaQDPXwUosG43sgUB3wHYehWcT",
  "key37": "pDUBLbak7YfUpp7JoVkEXhjBBJqGES65g9w6ezY5aJvzvF1TXvBaxpCuZSHPvFmHGD2V8SAZsPRKEMr35cwDeb4",
  "key38": "3g12GNbT4XjyCLUb5HfjJ8BBk8P2QuBFv6rq1AWLEx29khUzg5cYdkrU63qHwAi79ACc7XFw1AJS6Q2QNuzAmDFK",
  "key39": "23dZ3GxFUmgYz7bLvzM9XFZ9jFw2FZy9TzRLeL3B4WiNzmwveoHdkT5M7ckFcWL2crru4VBbxHXvFRvP3gR9eZaB",
  "key40": "5p6SfnHkHZUNCVYJZeuu3UdVZHYhAU1iPJmbmo6mqDE13ce7SBApf1TvaG1KPMmmAESg9sHBbpsMUgo5qP77ZbP8"
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
