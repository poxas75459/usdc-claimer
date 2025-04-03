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
    "39DQoV5zku8h54fYeTPk8EncTePiV7xpJ188ojYHXvq2GVXUqC6j2L8J7daTqdoYozSqrKksess7PGjg3WWQbC69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kWF56VA2tiSbfBDPcQdMRZzfTNWn41cewS1cCvLJXANkhJfJ9ri4EqcBdw1u4omaEFfKUQd5k1QMGtgWjCVM5mW",
  "key1": "2iyvRXF8UEcSq2ksm9Lb4mPU5MPpHbWg91Aj1gtLcCMhXTwQY4JH33RGC3aXG43BgrCddYTSqfXCce23fXM3Unzp",
  "key2": "4oriKkWqhpAm9PyHZWp6Ww2X26Sj3cfGAJxFAcfq74ySa3UoF31cyeRCj8sNqBLVNqEKHefnq6S1gwvrEjvYaYoi",
  "key3": "2RqVdgecKCmcmvVQVE3Xyqbf9wqZ7RXhGxeLSzfbpGoxVTfkrdK7bGxpkCTngRarGvh5vHgHXVotMPFsjwCnXY4F",
  "key4": "4pBhFLiKEoSJA4uN6FJFxTk2Si1BdCPfdykR9K1NuzTRHCo43FyjPMiu6x3vsj5CxwFbAeYMcJbb2Y1wwwFjnAWH",
  "key5": "5P7k1GwdQ2G7EKpgndiyZtywwKZTd5X1VGKNhYknPs98w7EdoreCNaspJ3U2TevbbVbAA4FsNMN7nq2WTNmqz4s",
  "key6": "4cxsXsECMVqygEANJBmFGmkSgs3ALtUWj178sRMjVGzW7jxnpUQhxY1dcM2UCUxdJkxETLLe6jU214X2nR3sVsGb",
  "key7": "MY5uPiYGrmMKP53gJSioegxNTQfseXn1JyM2cT1fYGxJPAuGrF33fLQqN7hfrKpecCVNLyzX9S7iDk2Au2c75qj",
  "key8": "4mhaancAPq9YqhqMbhHTU6iofzU2GdkzUiTFET89Vuz325qLemTgvrWBTmM4LCfn2irXHDrX3AdcGiDbPsPsWeqc",
  "key9": "3rzad2se5gUsibwDTvcwHo8Xk7EurNE2eNzAJSMgXQ6zYz7N4EREjzM9YsdzdhipxUbWDkmFgw5EVkJkfg8kxwC8",
  "key10": "5cUQTAtVTDNZzS8kLHNqfEA9A4hJu2rYwSs5JLUPGytngSVkCB6tZMEbU1hJsb23A9PLMj6aVVGRkJKLGwzTMUj9",
  "key11": "45M5F2WjzM8DkY9EpJuca6rcFcgGWCX9Rai1TSR8JmayJnF9sGHkEsNah9hDU62ZVpYMYfZz6xKRNC9vFdyx4PjB",
  "key12": "5kofV3TBVud1Fvxtj1oDxyXGpJMzgMga7DicXUWEvNcVcwoYhjd48kPEJn2gphsZTb38ypmp17GHqW3gcStPfNKa",
  "key13": "2vMNuoPndttrpar926LAx7fJgoPYG7FBbQze4ESNBueCtGq9MXWXBG4qb4VEmD6NHTFn3tVeMDFxWjeGzViq4KSp",
  "key14": "2vVpb4yta63LWZQuAs1xrpKr4o8tV5wqdGNXqtoiDW6aMNmjHQUTXSqSuMQt22VbyPV37jS6NcBFmNUHjFv68dKR",
  "key15": "2o4DJP6SS3FHC2r8j4CEwp8gdEEC3gWggvp5YEiNhvhbCLJagN7eoBujyWXXvjds7Zjx2LcxsUTArP4FiyqSKUoX",
  "key16": "5WnVNW1oGjzSJm5F92LdPeoL5gxt6584veDt4yJDkqBxKU69XU4cPV53HZLpHpJiGAiu9Fy4HNW3ZC6mSuRxdnZA",
  "key17": "2H6JcpZgTNo6McnuVcYqNVosYka7BPg3bnTMZsYEjZ9t592afScusMiP4imkm3mXDQtjCJduZVmJfE4sQgJXiHBT",
  "key18": "42CjzQ4acLap8dBWpuTvNc3p1Ypss4m5RMEs6bvvrdKUoLdU9H2CqU3JZDCTvocejgAYUWqDRovLUaCvAhizcnuQ",
  "key19": "4jgQHq1ZXSnpGWBEL5qAkfFTfdxqqRMPr6Lbwso7Dz4HjvcvugdEE6nNKdAhKHu2WYpAR4KbKVHqja8TREkferHs",
  "key20": "62GTTAqePxEvq9FfymDX1hAVuRu5zuPzKnJnFNMVkr4nZn7dN1pt5D37amHWSxRaYMiuJhNacyUdXKKzHaspJp3f",
  "key21": "5XVLjeTLEYRL3MHeLogwkzYxYMoUjmTLbU7jN3j6NmBTqiP9gsthPT1Gu4VwbjkEjSzJvxzEepgZr1bhmBbB5uqy",
  "key22": "5MbdVzDHvWGr7hawphBjJWwwm542TaFziNkNoU4dnnQJuqkNbuohzBy5Rij14EKQBhxSLpxSaAqN89CBDMCur3KR",
  "key23": "4vWxku7NrVNFSVC316adwzdTeqhPwwU8mAu3u9BG3c6zdTqZfsJCK7hesxEwctPJt4GnD5PVc1dNUjvNrWG5qPS4",
  "key24": "5xC5RNi71PYAvA4LtnEys2EdD42h71okPuSaVXugpr5bKGazF5ew2ayxanr8to824Vf9LpnPsHDRJb8Anj9zEcsM",
  "key25": "4k5WopD6hjzgK9pwh36dgPLP6f3mEmAjdyPw1oNAMNAT8AytLdvCiUh37aBNnmqSiJQvviuWuimxPBU3EsDDrBh5",
  "key26": "3MQC49jMDFFuKw4dDC31hDBEBgpNuCDPQEEvSpfJRe3cjhsa41avonxBwmvYLfcaEgHkPs4nEA1QXDS8rge2ifBg",
  "key27": "4ybi6Aftf3qCd85fuxFhKpYqWaigMHJrwKUGAZ8EE43jD1YMoQwsWo1mNAsdQwgTt3AVQZWMJg2V4D8GVo5b1fxu",
  "key28": "4R1LpfQYw8p2YYCtm6i5qZAsUmAj1YTSsAV1ydN9Xv1DgdFAAK5Buo32w1TEc8ggtW7y9LGj4Q4BHSUuYVBtENSE",
  "key29": "3uJPvSvaAor3ezJBtEXiEi9JZtdbViTm1rnNSWoriibkYj9cTNRpXZEfyHkiNFVQgd8JvfksJDHefVERV9bcBecv",
  "key30": "4No2NtSTgJj3tikot7cGL6qspmGGKwGvEkdk8YZnRXRxSA81baXvu9bMcVUikGiMR6Cmt9feHafxESviLUhGwswU",
  "key31": "2tJ97AXhDJZmXXrpHFRU3FB5W4ctXMrDH3s3h5vWNucBk9vnXjqa3TFkrLpb9xdEgumXRXYJQpK3Q7TmFo38HxNa",
  "key32": "U4VtUW5XiVAArRFw2eskBifkCbHqhxRAfzemJcdvdgzYxm47Ko1Qw65QGSjAoAYTNVkZ244CNm7cfGQ5pB3yyPg",
  "key33": "3LS4jq3dMgpxcYZQuJNbpp7fX1GK8FP6HBCdVCyuJf2tS9vYsSvoYEKp7AXf483Vcuuozto19uadpZjr2X3qzDp3",
  "key34": "4oG5q8ZEYP6qMEmyDKaUZYrHPP5vATmoSNqNNfF2nsDCRhyDdaUJdZYf7maqhcLxf88DcPDRE8e8GhPuvfApLaSK",
  "key35": "24Ckvrdy6cJMSgvTw3o2abUFWaTwKUNr7yNveQFPenLzjKSzxGnwcTgB5yrxam3URbAPnCa5up9BpLhMt9egCmNK",
  "key36": "dJxoT1HZnaqsU76gqw2REbsm1xmT3nKKREoWMTfyqpAQS5kNdw2CB59MTiGvJrJfHx7RDJnV9Wfux33Pi8dchd7",
  "key37": "2oenH4K3gfc6sDBsqz3yLNDuXC3h7K7uYw7z3U9sobQMKdVDjdJEHW3HNaaxpR5kjchsF8VevcVetjaML8QfvhBg",
  "key38": "sXfDPgJ8e5QMD92cg34RH3gyxMdMViPGo6PKddUHFnRKpDFgKaEGbg5WRp3CkNWMEzYKpWtKrG77U5M7enDpLjF",
  "key39": "5KyaDAujLjRytmWQV6w4dprRoSEgs28aA1ZbnNFKEXCzSVJy5HmnAQxzaY9sfuNzBr5SUkkJx7ouuwGD6Y8qh5Vi",
  "key40": "RrvWMQe67iK24hw28He2HK89Ld9YHqai3StZZkqrxJZjWR81QcvuumjZWp3F9sR719VYbYeAV5NQJXEVBtxjYTw",
  "key41": "2UH5s8LeN5etQyY3J43TckY5epL2dJmrpFZBRwGAKJUPuxYJrphCw8Pkst5RwJvPyasre6sWkeErDSJtcih4qip2",
  "key42": "2KRqqBgkkr1s2uxaRt1Ls99w5KYFDGoxkoUpWxu4R9P1sAE25Ztt3NKfT9XzDbgQzX5PZBCLQotQ3NARYRBZ69Gv",
  "key43": "3LewVmqY7H8Q8EXVh3sEf99sdCBpfWLhzaPBbVHgKNmjPG24Re3t4jhYqRo1fR7KYndLdKxAaedxReUbV8ETMR8o",
  "key44": "2wNEzh6oiBUn6U2rBEd5SrzizAuL5UmfCjWGZssGZhXTyUAW4NmHcJuCMgdyFUka81J3GqLo3FiePyD2ThRWYueM",
  "key45": "496sT23ZWJTc7SQmFQwbjx75dxQoFxAfhhimta7QRyxDWgnNr5kqi1YbyGk59NW4UBq1XJtK5TqCBgnC241c1MaU",
  "key46": "21zAymmJAjjB8aKZtFqKGjJw4pbdSoEPsU5T951fg8XmXFMs5BHaqDgGd4XXey4wRVxpm8WzZx7khUCJAJ6TttHo"
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
