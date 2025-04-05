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
    "3YJrWLUmcyyStGMy8zibAzT4N1FkiAsRJNTzmX78neBx7Q8cuGCGwLddZjT1nPAbL1g8ADtRwfPMdFKyLmr9pNYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nfisRg9jQtHB7FFkHsA7n5yFUbyrQF1vzyuQSRUvnqP3xfMUKBBHjX4AcqFdRuP8UbD6X7f2BsehUUjPWtKHdua",
  "key1": "4ME4kXQVsdEUovaJgb5XjUbYtRjdXi4i5Ju9qDMxa8T8o4pYMQWkXuDSh2z6bw1mgYeTthwtC4dMXTcCiLjQRAxa",
  "key2": "2ji1rTMQYxgxLQiF22LQ95qXGceWXLKzF7Zb2WxAPorS8nC1b6sbogZS4AFGGVC58ThLFY8arwTNwcR5Q7neGDUn",
  "key3": "23o7Z2i6iUVt4qZixEHzFC5nManr4Zxd7nsJPS3sDH32fCvvGNu73AhChx1VS8VcZAK1ctWGTUnjysoYXQxyfZLK",
  "key4": "2wb6j9rRVADQq4QFqmLK1Vs9XLdeRnLUdKDLABvHqrtMXmRXFj2z8yrnRvcC6PoQpYTSfqeWaRmJDNpf7QAfSrB6",
  "key5": "5m1ubdbkUgLxyx84nyPmkFBtPa8AfPnFKTbKMRKwcanVXe24DC2c2u7hLGrg77VsJAHaptTrrmECE8LKG1Ry3JJi",
  "key6": "JchJuLaLavzVYqTxFNNV1k9dEAZ8cywf3fRopSCP3RyMXFvtXhprRLMSjb18YxZUcc2H1fWFY4dzdngwTDnmBia",
  "key7": "q3MGeJDwx9uQDFopbLULDXxXm4X9388eQU3g9WDDoX1P9cFZkFDPoUwr1Wme2ERe3d936aaiaukNVzvtW897iD3",
  "key8": "5bVuVfhhHSrQnYDpYdQzmjh1oyzArbw7FzExYCpbAJmqn8LmjwP4P3pw8qCWoKaTRNCEzskcoyunKv5tgTYtNsEn",
  "key9": "4ezjfPEbCrYRD5HWw7fbHrm3n25joq7mBADQkDip5fjiMvPcvSu9ARCH6e3ANAJjfWVUA8G7MREmkv5EFps1YFjE",
  "key10": "3SuxZJRo1LQkBA5WkPYiHnVfQvtezTxzqJpiasA1g33ynyfWSjVqsYtYMgsk3yMHASRAJzF5a9T933R7CNMT8C5P",
  "key11": "4RNDrbj5FtMuAutwCWAom9zuNoR91i99X5p8gX8faoc2aXF4wcEtfNY1gsr4L2bhpHJGGi1Xz57q1WtNCvJPfbo9",
  "key12": "2NLPGavZ14BTBJy4ZC27vtv4usyBJfZZwUsDKXUEzhZNAbjkjytvG6WgMHFL3vC13YbNczGB5LdhafnegUd47Jn",
  "key13": "4wLcRGDJUzfmf2pNKxad3VFCR9raWJejMqQFsjD4U1WiqSLPBGxywCcXpmJj2DATRaUk57MZyCJeYrxKnhDmkvdS",
  "key14": "4pvZnFNrMrG1AnojdZtYccFXeqXHuzZd2vobp5aWjc8Gz7qB42dTHXmsg1Hq18GntXyAEEyraj9dTYe4An8xKi8r",
  "key15": "2DdYMho1pe7db13UFD5FoXgCRvmrvQmkQF5M73UP1jpfS4TtZhFsLAjiaJrcSaCaCjAo3PbVjmnoMezt9VAmKNqX",
  "key16": "66wspiQpkXv3rbV9wTkjPE5UWyTkeLwRYSAELUPJbiabbQQ2vwE7z5JDtw3x9CHfXiuqfXhWpfv7rDw1CDnLZYYW",
  "key17": "5pURz2hfzcwgriwnTKT9iAN2ecVwPy18xZFTmzwHGBB6jRN6ixUU3SVXPtiANumCxTTEDfZjJKfYFTmF8jrfhocT",
  "key18": "5XnVC12RLZkKF5bYaymirEozP4K32vu5tcFAuUKS2uwYZhveQLLPov278DfPuYT2Yf1uabdzt9qgKznRrHi4znb1",
  "key19": "3jQDmUwiGUBTQzFTJ8Zm4AabP4v6BqxoCZ9HTPoYpHtgfDB9uAX4fJPYmPAhbuDKCqBA27f53VCgxdqiyhAvCCLU",
  "key20": "5w7JDUJDX6Cz6WQCx8o81xWFqnrDuBithjEryn4smdpHKHkji48E67vuhQY6YpQZXRAyovmUZmwD289fwe6wGATZ",
  "key21": "crhGSTCdL4Kh8b5oX9yihBxHF6dbWPL4YTnPkFckECxNNDCKXau6Rh7fAWjyrF97VcDSi7EHHVgFmuUF7Uvg1fe",
  "key22": "K6Mzxrr73XV1hawwcoc55CFG3UMp5cWAmhpsEgmkiZjJ9cTyvpdQQEvZDH7kuVE1okrNWH6mLTtWkiynq2TYrLV",
  "key23": "46p7yevKHfh8YXgUqgTEA74mwCH6NZfpEKRGAwbf9VyQwYveochCoekeMtQxr3vXLH7UaxVYUbXLa24jSD4CEKRu",
  "key24": "63PqMqKbeLMifN8622dTaPoLttDQsog4Qb95mBe9YMTVowm5ep7QFwb5bZPK8PVd1nD96UkBPdmETRmw2nyZYZNq",
  "key25": "2tYPzc67KmJNYjZXSh46NZZ3XXSZE2b2UBPepK9qszs6roAfmEXWra9ce6CnBzKu38JSgRfDGyuuirVjNarHojGE",
  "key26": "2AYD6KrgSf7bQJ7ELkR338raLfjxcH3476cf9Ce29tBAGQ7G7g7TYBCSVSgW56A6exPqrTtiShWRVmxWUf8DeoSc",
  "key27": "4TvrvFMCqyHD6rDd93gpA3FyByAvem1pSuFuf8gBmfkgj7L8yDYtrxUjyfuEnbAYMouEsqhgbnc16MJTVpzJi4Yh",
  "key28": "4sM6vmxSr1mmAtdEQSft25asfNnFZFMRUPLn1p4CmH4C795ebXqUkiBb6Un3Yr9jze5BxydtFABopArE7P9UbSQo",
  "key29": "4dZ16nyrDQ9avbKwHf4nhmgozgonjoqytACUDSJVzF5Lme6jSehdFf3sBMbT4nsjzb33ktBEVMu8i3sYcmRnuGNB",
  "key30": "2Pm5k3ANKJhKKniUKzUPWepbXjRN9wNQKbdgzMx7WRoHGvDrW7rDhLUbR2tfnv4TJb2zNLpS8WaDdUqfkmkBY3GY",
  "key31": "4WFmdGfisfFZSeWDupYQGtrW6PYqS5JWhGRVr7UfhEUUq2K9p37TvSjS7fw5gPfJZW9kqf8GXoh8H7b8PZRMQ1Je",
  "key32": "3GXjEk5x4TSSFh24orhcXzqbZCeDTnPT6YQgY6YpSouu8dKE6RdTCRXJBz2oWbCyFZpVFMo2Pvmo8DwHMDMi4FCc",
  "key33": "W2YA8TcxphrBRT33H5XyLqYKFxiHtwrsctnqC3Y6cuKcoJzkEeX6Mz3uYCUhe6LnX48D4Rj3Ds6VWDYJMKHizMB",
  "key34": "59HVS7rVZvUiYTBYD9Mac1cJGQ7W3iwNEq6HgabXBeandXGdDaJyuf5RVr2QtjoHN7GQkHBgwgr7sqpC8WhP8mWQ",
  "key35": "4r2iimKPRQrttWB9KS9dW9dTFsqYitL6yURucaLkg25KinFizdqwHGqGgvA4AL4xnH81q6ebRtU2qrjwHVibThGk",
  "key36": "51LHWBzBZAZCJLJdYQKTgH5C2ZDb1mTqDvCZKYso5zP8KV6iA3bJc2bjijPE6838v2mEx8iGZ3MVYjJ8tqSBhcYL",
  "key37": "36DErfhFuCQGsfLb8cDVAsJ9XJHRBT412V1VaDDnixr1KuC8vSjyoGLqk3AotrJpyAFoTQa1koFvY6oqX7KYrZU6",
  "key38": "5A8EhXXgpDq4Fk6LzewywZ51gac1FdXKAC1RSDJzijDXyCPWuc4x1totRNfSMyLMUDLHTQfNqXfkBgwN1HXgVZa1",
  "key39": "4ijhjFE5uE19Ggv5Gy6MpaSVZP7HUJbvuPneeT5myqqXhX3uY54oqVHqSrNH2ESUC9PxdNgXUQJ2scxDRsqMduY9",
  "key40": "584hqiZWGx4SHKYtrNu4emjpVrWXNahzhFJ3kh8jsZPbv7UP8NWT625Szng3dqqTYjuTRUDvFS79fWarTtoHdq7e",
  "key41": "Ez2LuCRnYj1bQUffEyHFx8dmf4TjUymZVaqteraM5pWnvbLtyTSnZiv99PVG2nMHxCep5jhUgyj63BP2VZ64WzR",
  "key42": "j3PU3GA6v9E2wn31ayQ8UkMSUTp6oLqpDQtja1wYfdNCD28GnVrPaSszuZq3FpYUaZLXenMAKQ8bkTREgcZFbPA",
  "key43": "bRF2ZpVdLwEhpJBqtnWoqYSHMiZWXX8jVpVwApRSHkDKk6oKibmx6x1Q4QqusFmF2cfdDjNgWEqYZ3BUS6iruG6"
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
