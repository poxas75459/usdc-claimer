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
    "4wm63AiuDLefEf5UcQy3qpWf5VtSGopZ7yQZ1du3DPfmKtjucjoto1oTPtboimD52r6ZhmBkM7rVX637hiGK9wL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27zhHat8qvUCQd2gQjqbguWpNxiL59dNCV9b94skTzWMYPP88NQXHF3aETLzCnYhMjGeLBauhqVEArDXhoMGFr8r",
  "key1": "2cGbws7XfzDnV762Mvg8Ly6NXXdKuRk4JQpmukeNYvvgBshrczcz9jhLDqZ2tAgtGT2QwXTwEzEhd2Dpvte2o4iN",
  "key2": "4FazvncymHkJRKqYYcDMP4Q4sGbXULcSn2H4j8se1vPt4GgRuzPhsd1z9LfCzyUhq5BSCccL5ahVKWqD3kusk5Xn",
  "key3": "3hkz5F1jNvRBDGNb68V4Tz4qpD2HKybo65LYtEhwiR4BcG3xEoF8FJVxaZQgJetGQuW6ypAGvY64gd9izuz6vh7i",
  "key4": "2wzMBQkHv6xfgWGZfKB225bykxfHVRt22fvAPQijVUj2nu1Vx1cJK8Y42FC1GE2FuhLH63JG1ovJgS2NrE4PTGjQ",
  "key5": "26Eb23QATfQkTUhZxsi85uLGAxE5ZvJj15vBxt9FDubc3GrePS1djUZJCDR1kjH57rkRbRfWhA2rz7s3zHPnfdsF",
  "key6": "5pC7HrCHve539CbtELFtgKtMRWvCiAJDLRiDjjXveLFFNX8SBbuUBMRtzihVGLjGqLVL2y1CMyJ6yDJridswb7fc",
  "key7": "2V4yYTvMJhVfzDbiSyQVL7Ge3GN22iTPzNNSRAjrifJ3ZtPDLiLCQbCKbR2Adet5zdHsTrhNWQbY66t1ufAgu9HQ",
  "key8": "8mB2rDmPnD99eNyEinq8du7eSgVeyC9bULg62mVUGJ55Mtw2yEY7mkSCuqfYzwuorRBQDTt72Jn52vShbRRGgEC",
  "key9": "4dvsV9RfYmgbiUe6kWCigW1gPzL8QU9sD3BmuQ3u5fE75Es6vetMsorEfSTH8P9RLTbJwWKnoHsCXMzqJeTfGvKb",
  "key10": "35TMRN1rmVXHnjzaBjaJRKsAybX3LTYaJhz42Yzo97NVVjHFYxTFpf7B8mSaHsACU9hQJ84fvR6bPiT7cgx11CmH",
  "key11": "K3rPdT8mYvE4EnMCAgXfvmT61xjfPJKraSZoFYQYVGTjkM1AabT6TwFycFuzLL4R1onKrhXBwE76y3arVnkgEeG",
  "key12": "62mZ4M24v363XgT88o2bj19oLJNY9gpXt6EnKmvrFrgHcaZcQhqcfHKATHANGmeaJLxNxXq8aFWeR6Mu4XcWTYEG",
  "key13": "2CXqzA8SV4cVSbRCYReN4wCkgTa9RarybqANuVBNpA8wCmNpGtKhTa9vMxr5oXHFqgJzGHVXyWg5LmWf9K5pXWrB",
  "key14": "R2bTG2RHipBZe1WGhX9UrHRYMJDnpVw2AbUyZyqySHqw1hTaZY1bggnTcLW8pKzw9AwcXVjEYJkZqHtC5QVWMeV",
  "key15": "4Ubfrbg5ojwmM3ZGrfgXYcgebZS4ibb1xAGmocQyhp4YbJ5me6HwmbL2SP9WhdKvWVLmA7r87LDxePsj2AmTEXVc",
  "key16": "3Aj5t61kvwCKuQaD1uHN98HUi2fif8S5rNhGe1LnBd69DiSV13tybgBexHVBQ3UbUYRxsacwRN27uzwJ9LUVZta5",
  "key17": "5ozCBUb6HuCoDGK3BdP2GXNxrQieQZEEdNr9X3qWMCBP2mLec38pX2d9ePRkBDuAzWBKTc6dpWmvnCFncTpCmLUh",
  "key18": "5vqtKDWV32aiYJWcaMwzcQjeaiLwHwgy6UvqDxUQ9FSFqVfCN6tnCpjMMvcywxW3pYLzQjBiW8z3pE5KXsGq7DJ9",
  "key19": "4iM7ddtksdGXJ3SbWq6gVp44dJem2BucwtQ2g2otxs1s5bhPWcAHwiVFfbaX1f7fT25tQ8NueKQmqhCFFX9UPWPy",
  "key20": "3HcQxGPtm7yZy1bP3JoGM77eihm3wkMyPrVLxkmnmDRCgT4936dqkc2tg1p8qNLR3wxhQwiErEynEgoQHKtyKWCx",
  "key21": "447nWpMwMDtasqTAsBt5c2exdJWfcSsoAJQGDTFBbECirgfHeaTy7fDyvC7p2PhYEWFkmr2Tb59i25wZV4LAVj3m",
  "key22": "2piUupjVWfNoUztPMRyt8Vw9KxLpmSxtjMQU2E7bZ4imTfnbP2tsvzFgkcpgMirRhaffUvRqnqV85U7669i3NS3t",
  "key23": "2fTmtVn6jt3XRDTMDUCvoyt6ZhazMkejiJKm3yRDayQPGsqK7zYKGo3wvZBq9YrbaNHF4igq7bXdEjv2FQ3LQivV",
  "key24": "1ttJUsTQk9QTRzySrAXWhQ226YdgWgjKANtxmABc8vPQun2rEofSfRJkCSFZAUExvduZxkkqTj2wcqZkMd8P339",
  "key25": "41VVt22LXAJbvXD6ADgxkVNVQxZbK7E7n7mpnRCnd6jWok73aNJHQFrKtAk2GmR7iHAQz1ML6gUBepnVEnk8FPms",
  "key26": "4PrsSYZ4FxXLcFWgm2z3WatBNjrMfJsDStyA8G5vr6ULgg8KZkymjpdHnRndXLtfihCyUeyDuT8Da2Y82wzeRCPk",
  "key27": "SNLa8FnseSYRzAEWo6sdJhv8y2XSA4vxzAkeJ1x8tJUvhnEG4w12twbpNrCTvr23XCfD3d4c9yEDDAtbPHgbpru",
  "key28": "2ivB2Vd92ut53TwTQRW1HvS8vMFSTThCrXm4s73dT6rGajMDYg6FHcrF7q8v8YHxWaQ7QkCcSv7X5c6rEx3XhrS2",
  "key29": "3sUQKjSEMdfmUqsAZz54iDo8vVwuMuW4ZzXtk4hvfwJTspKz9etR4m3Ynqmdiuw3q5prdc5LLQhFn3YeAmdAXiZz",
  "key30": "3BUPtnarHXmq3QHsW8agJi4pv9PmQmxaSHAzcnuBkNV17Gm7AnMUb6FfMyWmSqP82brruXr7DJvnBXu65Bhx9eXy",
  "key31": "3M8CjUDH1LTPp72y4sXyyqkzKgwYiUSkunarvhQi9ZiEZgbGuhjFH2FiTUMPWK3acVcu72Z5ezBiQZK9bafUsDF8",
  "key32": "428no9cep17jHx4DAoe7ewW7UWbB5CYCSqPbpV5EXWThq9Bom4kGiyjCbHaYDmSexo2tSJyofZnk6ZeVLVirvWWy",
  "key33": "4yu1teSgvTAMKgWWNKKrwixPBPHwDuxdRU5ViLL1KiuBPJSoZewwapsGafRM5oKhp5VzKZqf3dybC9vuEdm2tEmG",
  "key34": "3VD93HZuToytmPMQ1oqj8hTyw65XzzcVybzryKmVVphh3ARah2KU4DfJwvEfR14AzahagH9b8PV5669rM3LJdbEy",
  "key35": "5pVTxavMdWe9GVSuBMmYxyeFEf64o8Kh22H9krDB6go63kbhY3gwLJ9hKeqJVR1um9cnbyVBP9RTCmKWSj6UCjze",
  "key36": "2T9Nxh6PEjGCUCztNFxbTDpCKL69GhNRGq9rAiDb3s6jB7Ve9uiAS6ie6SudhR3SQpmc8ZBU3nN63Zfp9KqztDJS",
  "key37": "2NTDRtgSvPLwMSi3ZrC27XFpsibqZC66qCYoLWuacsctrJJdnwBsH1utxac2ugprrK9dksBcjAtQikDaawnPWyH4",
  "key38": "5mbKFe4TeFUPF2y1Na4TNeuB6DKjGMNds8TWZnaADQDBEPSCpWXhKRAeb4ZSpiBBsUpKC8CXjZV1XFwxiJRiyuuh"
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
