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
    "23P4399tpr6YcfBcRdJ4L9CAmsVs2Brq9mXqAMootgkxiTYiKCpPtz6BhCuDphTfTJEfbhjjWDsyo8iFGnVmMSxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zmf9cg5RciBFRPeULxCiugG453QMt6bQtbhtFf5JihD3FUCxZDWFe9b4eZy6s2oEdAAapcTwCYMWtLq1UEACTo1",
  "key1": "2gA8Bozh184Ymb4EU9M5ix6sZS8gNb21p6PEphGWc5S9aY9dNe6aJMGPncMA6g69Q9T1WHP2KVnG2cbvgZaiicSV",
  "key2": "5XjJ49jr1Y7kJGFerytVYZXPpt9hKeiTDurqDBFiHt1wxdZGKjRdkoEHtBGaeHu6w1UXvijKPLaWaxNK4Cy3J39n",
  "key3": "2V5AE5DXTMzXGqr6yFX6DfhqQBCzbztp5EZnYoyaGUMTBZv2q6Gefa7NGLVcr1bawX5z9jmbuVuXzKVktTJSfTpi",
  "key4": "3XU5d1StBeccHMctUeozbuwe2DLhToWNkUv55ohuhYn87HtmLq1BchLQTBHJBBFiBp433GZ3q8ZwCf8XhRp7f72Y",
  "key5": "5z7bPrP8QaCFoK8ZpX7zoek3AE3SK4U6ASMUhENBVJFhQey2DtdTJpUpTfScuVn96ddFSNyJX2ELEToudWhYTDMq",
  "key6": "3hGBUDEPSNdFxwxYnmqjK5PP5LHEJCtsU8LbLeENkM77jsZ9Ng8FvLKLszvwaVbuP9Ab53eKvnKUWkDTzdC9aQLo",
  "key7": "zViyagtmAp5B1cSN1VzJv27D6STcHv4pZTYWktvWp9cDaH3c197GiuGYteWYusKCz8trKSA3WBJVCdFRsHGaoW8",
  "key8": "38mvxx8n6K6cbJnH1muBg1y4cw23KKeEAHFoMW8RncaauLEdRiTgf8LHUbxMM9xEyUHsvqDLs3bCmuzZ9CPNpkS9",
  "key9": "5eXn6JVozVPZUZqE8VwCP2wJ7UCJiduhfejvbLvSXHZHpwW8EScXbftDoxWx4uSLoXHM8auqQnbXkv4LN3b9gwRY",
  "key10": "5GSLn4sTRQuqVyPxyqtqNnT9ao32dm1QJpEuYeg2HsqNYqsKNuJSsNozaqicRCQ47cDNsZiN2E1Q2VWvFLxjgqNd",
  "key11": "GRdefyEFcQwDpSZUpdxB8bp2sfoacSKVmcr8z2cLyoDtucaS3RCbZwVnuPfwafsctzqpamFR5gL8k19acaa2pcw",
  "key12": "2riH76byKf6qLmfCVRaAQncU3RV9kgYYMP7od9ayfrHFHsxn5y5znq9Ru3GvtcESdoHpep5KfBMVsnxLrKre6nfo",
  "key13": "64YYnUFPxXPjcBvN9fAn8XPpYE5wGR6fkU8V12BhauN8EeU14fJEkJVFaznXWABz6rXWDcy3DcX2VFK92ej5af9k",
  "key14": "VzobFozLC2ho5aTA6WLdV4W1v5GgoMHNzA2reQoB4MPsGcEUpuKBj3eQpyxR8gT9zofbSfXm28eyqL5ZT8Wk1Y9",
  "key15": "2uMG25tbapnxX9tX8h79u11qwtNhTugCMRkJAc51Xd6vxhLNKAnBaNwErTbTowG8pQoenuKb7nxwFbDNnnF23d3z",
  "key16": "25wrzuqp22TpVC22tMBBrkn7MG7Mc7kQZ7JvLm1o2yJi6mdFyLr8Y72sPFdXN1wK5BSpBSGkVzqkTYxuaTQVo177",
  "key17": "4baobFnXfFFYB9GG9DkSZvzv9fVGBwmcH6krnNi47jJ3SndSqqzvgHiCozx9BMo7kJamdHhzok3VvF7UQarRjedw",
  "key18": "dvSXdP1mx1Y8JNw1o1E7MY64ka99esZtbX75MinLUrp818QTWd3fneojqGYYDX1YTAdqLxyc6vTY7rf9zx8ZaDT",
  "key19": "5yed2poqCowhC1gRwA1ocCA6HVXraQkgUV29YrkPwjcLNZnCMLBhSQgMYTLsMFtQHBb36aCN7opeyEb66VYGvKP6",
  "key20": "29VFvtHBtpCR5r7h91k1oqJGoqSe8vky9mJaJizqxXkDHasZvMqR3rmmqLyBTU9sZCovZDuQsuDjx1sY35ish1iZ",
  "key21": "tDeJ327jNeaDbdPj942tGXeimw8t2xK4F5BuouGRHz8RCTGpLD2bqnRxpyb2dw6pGHWwA467BNeh5G3sAAWfVDS",
  "key22": "236HNssuRGMESqSFXgfVJPjP4qxAZDqKxtikmABNPhRt35JCUydes2MMpi7sx59uwj5EZSFzHxVJXc75qCP6zzLt",
  "key23": "5JpmKZSk81QaB6aSDW17VanffSMhdPLRcbG4d6EjCnrhEYzWN3YzNnHBWxMCoVw7N3VQGv6ECkvt7wuVES6cYyT9",
  "key24": "5PfR7SyugJ5WZQkfcmMnrQ2JrPHht9cvE5XgYzomTYwU6Mgj1G2dXijg5rV2neetDz3L392rUtSDXXN9MqwTfMpV",
  "key25": "3gVPap6LiBBpzQ6rsQZakDrg6R5qZCA8b2BDpmi9h18ciJ4irFZgAKDcV7dUy52KPyArduF21fqngbaroQUDb5gV",
  "key26": "4HGtCwMDWnCAfD3GoM2oYgEoHo5k3fgy9EqNiWGFPdvLbbNahWq7x9yNGZfsWY5pt8gNgZGxBmCvUS1Z4AHH2Kak",
  "key27": "2oiVyuJF1vut74EvRgChMD1ecgmeNVUYwUkP8rBG8GpmuCpDCiW2J7nMPfWnh16FegHJ4xew7MepWJZ2T2qHYKgD",
  "key28": "4HJz8hTZnn9Grxsj9tRj5a7K9a2BLzSSXBLjwABUVLhw9WLPiSTkVuVF8DXNRud93qzVWFzBJdBVADVrFtRudRfm",
  "key29": "5Q2M6ZWWm5YgnSsgTmARQGtU7hPNviMvDGjf87LkaZVyga7ekn886C47Bdr7cTyKDDrbkszBXAxtfN5FiKsRZbJM",
  "key30": "4WsYEjnuqsRPrpseeyJwcuyu35FpYxt1rzRbT86P3dg8NHoGz4HaRWWPsiqbcksvLknrabK4QsnjWdFVNN4LNwrH",
  "key31": "4RiqoXbMQT8dMbrdJr75ZtSQobN8sA6JYKxBuc7pfDSgxhntDEG7hPQphzbt59Q77yJ3qXwEqpUhJbQJVXzpqUo8",
  "key32": "32ftJduyX4fVdN1tR7DUcT466zAX6GLqnbczyCU7KAqLxtHgfev2wX1A4e4c1AXQbiiFsyR93ni6QVHAPY3j1r44",
  "key33": "65WZxqPQesEZWScwQVqYk6cLHSpdm6DE1AHg6h5CETr3ghvziYyJTSGDw6Nnw93hQDDQYJuoXoanS1E6vokqxXbE",
  "key34": "4TKvYSsztDAKN27gtapXgde92izZYF7WJ2GbZVdfY6KqBLkcNsGK7YgNVzEXkn8i6AA8Y9faKMjrgafUobjmGLJ3",
  "key35": "5J5rLbcRTvo99eQP1GPxrCWVbUBAHMH4cFKRoECG518Xg94JFYBRXorQgXpvz8fEAdygDSAygWxDi5m55cDC87QU",
  "key36": "5A7JUBwm1FCKkmM2RaYnUD71bHaCiV5BoVN5WQbLVB7fJJiBEg1RZ8RcsTsPNq7CEhGLhpMYxsd1WxQCgDMSM5mK",
  "key37": "65hjRQWB85vjK6P4bohBrGvhzvdscrva5op2nzr1LmM7m8mApiZDTDbGteUV2rxGe1CyFBaWwM7MwJReD57J3Eom",
  "key38": "5LnZJBfZ9qCrkmDGaNyApTX2EXWNdaJW5sRN18x5JoCoutD1i7NGhCr6n3fvMFaJ7KP3356pNxL3BZy6nue9FTd9",
  "key39": "tsb7Hr1dmgJYGDXLniVMBfsu86r7NDCKD21e5u97iV6ygm9oyGTQKTr2WoYHvq7y7BN3dgdyYuxHH2mWFzwkLcs",
  "key40": "53Tj1pE5UN4eNU9mdjiC4XLksQobshr877Qqu4Pezmi6n185dvA7WYK255Wd1JsgMdqjKB95Ve2BAswLLV4NWzYt",
  "key41": "4FPi24Ag18ZokuZr6RH5djE4kQuybtXVXrTzWRo93JSmpPCKW3XMbBki9marEEmf8vi8aosGmPBCTpooA7VQet27",
  "key42": "3xq2REDig8DttFzaCzW9ChjKv2myn7B5CvVKpRcXG5RUh6xKnxsAqUhTufzKtpmi6CUeXvvE3AgYju7wS2da4oxc",
  "key43": "FCVRmkWLuxmCi3r1DLfgvLDFyKg2z6kCtRFVMoLPU3LpHsTvCN9fP18kqmPcY9BrruQGtY2giSdoVaqF9JZxgho",
  "key44": "56Fs87WsmReD7TbHnK3EbxAHLFeABhMDZTyYnf2sTLQHQAMZiHxdNLr3GXTTBDyqtm2Gh3BNE93YrC65jUQr2x5T",
  "key45": "3S8XjkTqsrLcbiKPqg4Qjjhej7Bn56GrCo28pGbNomki8vkb1kmu1ETakq66CnqtBMSHKUcG3Yg7G6R6eXnAP1Gr"
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
