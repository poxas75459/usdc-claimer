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
    "4YKudUnuR75K1LNzUgPQmzqrU5kBKrpUAPXZUVcxKLxsfyF88WDreY96JgzZuXVygvQB5VZz8MRfrBPQiW3t588k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "536JQqsnZUG586gsFzMPA4SpPZXBHTGNaxL91MqXyfqxLT3T8MKcGUNwRibgdxuTT9dGb3KoUndzxNfGh23R5sNm",
  "key1": "3eNr6tigdyn2De2QaKWE8HhmaZfAvFvxsP7tYVQuJbRYhoQ8oSTYHrh7U8LbnCrn1VzWuCJyfXhKmtcyL9n9A6Dk",
  "key2": "3XymwaKjKhPCm9mfg4KSyMQ22uEKhsXZFBmA3Cy1sG7mVWVR7CjnFLSnWibWshrLFPpWK6gtNGf9Yd8iEDmEKnUR",
  "key3": "5oTB3PN9mKGgB22qqMQww4v3A5xmqud3QSvXYfjNWbD8kZmPaRtRPhGRJhfVEVrtYrXn2Dco4yznnrdKMCfpRNoK",
  "key4": "3npsAHvaKLpTFiMSiGQ8qFy2wNwS8pBwVmov2dF3gLrycWysq44Ka5jCnuW62qK84zBRDMKPPxygidE6vLezPhfu",
  "key5": "5vQuTfnvgZxokKF78dJzJEk4AGaR51cXMZfDwgXRy6rSY1pWNENTNF2GvBbk71DycCtFdz4J74oPVRS7RM2vCLT1",
  "key6": "3ahEX7paykt3xaoKJJXa9tThotYmHiRDt4UTDRJojRAdgMenmc51vHprTz2SNTGbvHCd5XCZRVEW3XeSgrAxtHEt",
  "key7": "2ko6sMjexvmTV1TNVZnnyEn5bbATs3pa5T2xqRnshs4Ucn5JCJgRfdC8CcFm27jstzqBuoKR1qymWiWZBkksJ1F3",
  "key8": "vcYg8YyHAY8ysoL1SitBNVZJ2uxxvHMdVNspos1fkFZxViTqE7Vo2doTZB7HogbKrFtV41zPGpXZLnJ3tpnu727",
  "key9": "6BLBGyspRCi9tUAhqkwU4DbAmPbc8rgfJ4r1GdQmcLBknsXsYcZkEFhjsboak5MkCMRAqfbw2Xscv1N6JjKPGYm",
  "key10": "4vuNHEnKpmzvZ9tWjje8fhFyxkqkCiYMKw4bFokC3EDpMAJcj7GjJMubz8jzLWjha43iDLgjfusPQcjtjCJSt5ef",
  "key11": "52Y36dNUHJFBedsaq9saK31Bfw7xcN6BiPiaJfaYZtEYJ2sFjJNP2JzKK7wJ2YqeQx9XEHdNLsftDvUQRey6GJXb",
  "key12": "2GkDxgEkvZijpGedddxYerQ46MEJUQdRfwxeBBWPdeqoWjACfuwgm4sbtb8cNUeyKGXYctfMHvBJJUYDqZAfNbTp",
  "key13": "5Pvoowd11EJYM4BhPTz3EypGdh99HFk3LDhYpELQz9G1AsZBjY1fW4QRJVey1tK99qVseX5ePA83iP2HWoNHXJfF",
  "key14": "3z9rLFqap5SvpyHRPpBFYbCy2te9KrMS7R7VR7hVpiZaUiydMZY1XAqmoVjKHuJUUFGE7fYXENVioJ5uzokgSN5c",
  "key15": "2zDzARYyvpF1ksBZfp3vr2U2fbhZfJq7dMDDA2Xgg4MWoqHE2cx1hRRsTzdbkWWTPaF7PidjSB3tzowQSmSReDvx",
  "key16": "2kdKgujL81hpSApEHvaAfdAyYjhcKqBju4JBtZcP6xevU1SAkTVtJmrp2ipx1PPjHhdu4nXN2n5Fubqy1MKNFKE5",
  "key17": "5aaRZcDHWjB2DRr9DegL6mg3jxFegqMD6fTgeqNCZdv9gM7wQEkXfd9NdXK5HMEgqiMbyVbH46KhLJ8hivUYqSEN",
  "key18": "43SM1h5gcoBHjQYCRkX1mFgxdRnM4FKUbHkBm8WavkD6XdFypDZTmi5zkwGJUSMz4E788jnao53JshdU77Rzf8Tb",
  "key19": "5xbwmFm5AGmXmL25ycVmJBWd6zA2zXbRXokAUEv13Vam6yjnVNoNPxRCkNpDXjThEDEnc1yJtw4pnBi2D59dUT7v",
  "key20": "3g1WNXjLSodytm1K4H1QoxwgbYWTkJnRpHcDET88QVah5V3ZoPvkDKRBwuNmyHa5qHypYf7LacfckS996KAkkpH",
  "key21": "54qJgeMzycNyDpVGuWosJajbDnSrVHsfbyeUaqM5nNwmBAoEE7kNJeUoDjjJwfXFxNyZxZL8VoQiisGqyTrpLxjd",
  "key22": "dukyjHMA5QYuTa4utJvnkcJa7tvD5viBiZ7Ey4JTRdY234zr5QxXteFv7bUeydhwHBQ5pteipTBTfFyD6LuM7Gf",
  "key23": "4P8P44nFcLBrMXVgnBVikbAKNFiQsehjojkFVJE3bBedJKnJJpjBhY7GKwnPGUyeHm7ctjSeqUkZ3LEfitPsguf3",
  "key24": "56hgjFSChZi8i8aiHc6Lnr1KyrvusnQkxJUrPtRwXGEjApaUyJSkpjYLhPuAyQj8vxYQdLYYjWnCkpFUZcsYSpyX",
  "key25": "3QhJNCqCuptqahAdEW4giBzP6kpoh8DZJDmienYhCUwCDanLjT6teKf9bQ2ftjaAnmbnj7MfLQXbJAskhz47HKnB",
  "key26": "2CwWNcfEYQ8MW4fQw2FKTScn8RaKj13MG7NC5fw5Xc1SZbztSGRnWEVLALapigCz8Je1mVjHiajfygGoK3Fk58Da",
  "key27": "3s1qQGy8mksT81SfADDwNGAZko9UngxkrMxvEFiUqKznoqTySA7hrtNh5gNFyixymLHsvt8LguG8WRcgNuVNLdvc",
  "key28": "5QeW9YkYiZ4DWKeLqyPTxhHQPHwYkq84SMyauaukuQivgyW44HbgwzpoFgBAMVqwGKgnPKRDPWqQ8cJB2JDSUSVb",
  "key29": "3EygSUixmbfGTPpmBBFrZ82PuurmDxgZkXsJnfQdix5JkvCVxFrYWvsMsMub4GBzQznJ8b8F6FKpYZd6FEMPainv",
  "key30": "4fwkGqKoHbaR54HunSLNd7mzvrKHFnqGYMQTqP9ZG3Y743yH2Z25wqemSicLNKTqigfS5s4vxBXKvZJ7xtrvZm5R",
  "key31": "3QLSFVxRn189sNWqkMdEfSwXuPnTQm6x9tHQhSigv2VZFTBjy84BjsEEevjySjpKT7RuEzArjSKzsx8fg3wSC9oX",
  "key32": "2hEF6red41sYWAetMoq1SzaC1rr3cAQN9cjsbsJ5gARZRcHpP3EQLKCrigahwyLXDnFQFfzjZgDajWnaAQtGZJne",
  "key33": "DH3GhmRfuP9fWdQmtscfX8qqtmYL3nJsSHjo2TQDCTcDbaVmPQuN1jF962XY9trZg2GUeui3gzTe658E3YEiTKB",
  "key34": "wQqFtQ2jrRzUf2fjMungccL4XLnBs6QDxfADar8uqDizkDSZEhg85WKBx24uBPGAFzbSy3aQNRCyszJNo2sD7oJ",
  "key35": "mJ5xZ7oTAdxukmmNcgNJ6EsmiBmRTMC9ziJyUGiwLE8x3aQ3WskY3HivWKWmBeM3XfXLJYuuMih1PkYxubLiRZh",
  "key36": "18YdPyUa7y6CEoPcktDDEgq1QsNooALwfLdQ9C1Rn4x5nakjcyeAbNjDTfXkNAPJjmeN294huRYhsYKGoSDF4Fy",
  "key37": "49Nac6tuimNTNw3QvaefaQYTFrD9yECiZ86epYf8mtL7tsrEyUnr1uSXojzCuh4qfVsRKn5QDL4hadavJAdFN4pF",
  "key38": "45daRVAhFmDQmfveRbSd2qiNSugDnh7es5GsvtUnPnP1wBK6dNJ2THNv1JHJTjgZcDR44PfMxmXaeC66hnT3LBKz",
  "key39": "4hQpmn9CLBg1mC6emywsT4TE8DkY1svTSgU2BSDiZ9jSfxWJzUNRgfc1npwe3oR8wd7j7UtMmgGbCDLW7WCKjW6r",
  "key40": "628P8HGLTogaYCzU97KPP7jz9hnaTP8NAvXQUJSkF9kCQU75SJfvGKUB4GET6DZKFENqWJwwMCCG4jfivqr4ieDE",
  "key41": "cb7kzMNMdBFRssLUejLGrTbXVv9rf8XYY1rdbuJxYfWzbfpUzvHwxvSoFpbsB8CNRNJQCTK4KRVgzCEU5PHAGRB",
  "key42": "2sR2TYEurYW4ei9Y2zVUgegBuPaPAEXjMFwKp4HB6kqKHFbadsWZFiWWVsTjisD7a1ZVL4N1fGpiPMD5uxjV3UdZ",
  "key43": "4aRwc4YNfYjJBS485Z7RzFxXb3YBym7HkoNoiymCzNJobUDtAFUYJFbWceAbmiDtdfwBM58k2Qai6fXUSNPhUZUV",
  "key44": "39AqRhtiv9ExyfkNhaRRLfgerHaQa5LPNouT4yDxbKoGxw4LjPA5vuSAPXZ8XFknp9AnKPhpBuwm2ZwpVyHPwVFs",
  "key45": "2Fnu17qXZZSmGWWYatn7igjkprJL4XAWngCR3gfV1nnKvg1geqwp9Rwpcae1vtQRuh6s6s1aZjmBgbc4y4Mdnz2o",
  "key46": "5zgMiUG6xVkoWrm1sdiXWHevVeCJmooMbdiD2jFFZCzXG9d6PkmHX7o7PnbZtQqWfgSPh1JgbRGyeqwX6Fa6NavR",
  "key47": "5qBuW7LYXeMaPTGYreHPNiAFCNdWYE1hMXALDG5CLZXP34Hd1fjneRbEpexhc4JQkDfNFFjJcnCZCjn6DeaT7pH6"
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
