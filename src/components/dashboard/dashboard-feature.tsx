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
    "2Jyigy1cBsueh79eZbF9sRKbC5CDCHNH7QbjdW1hwbJw5GPtfmY7oZdkG6KRLSpvNAwBuRdq7VyVt6hAVq9n4ku5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oKPwm3VZu47dQBe4whAMWsz2RK8dooK5bt8QbgLYJ7AZHbPeoSs5VKgaEBSUQyjLUxoR2BrHAWZZ2Px3biNUmrF",
  "key1": "21bt35q3QC5RXKgoH8Yk5Wj5anGLY7ooURyyAZp5HExpdWUmQustYutFbuK58hb25UXH9N3crP7crRx4JfXhBegr",
  "key2": "5XGWzmiFUwpW2byY9QqbJDWfRCDPTBE1r8SEiqeRgfMqQRrjH8SS1ySMLkRFkFdnK2Kd4wyQSKX1iMk8Y5F8aGas",
  "key3": "3o5JTMkaaS5eh1juBCy76fPiYeaskcigtPjtQgtMCapgfgsJm4he5yiUKQpmCZttwqvum1EaVVBGHL4gmrYUZ2HD",
  "key4": "5wjG63dkXCh33qVkKwXKKiHAaGSCGq7g8tfeHSgNgVUykw9DUKH9EH53BFawhfaHMcTbzAyPwYM6T7uUP9JmGzJZ",
  "key5": "5hTuVq1GcAL8sppFdzjqySJZ8URqM7AsdADBha7QZz6DoUCMfFd98MDbBG87uUVgEtwzkRhyGmJMJiLaaqco8kvE",
  "key6": "24cgXKnxwTJScrZ4Jy1QAPfotSeXesUcEeDxgpTkus4PjMa1hTypbor7HR1EMbWnrdk4qZKEvJZBGSKniUUnwfHn",
  "key7": "2ArHiFKsawBWD7mKxnWbV832L5fty6qQCYZgjb5MNgJvNiX3EVRXv1XBMwPyJ3kaoXGM8t4WQ6bnCsKU13E4RMy1",
  "key8": "5xS2sYYEWB7edoMW9C1vJoZP92dywow7NxJKV5t6rmF2w7aoYasBaLdzegoQpvpQUL5zLwKQqKsu5stkRSDQsawc",
  "key9": "3SxS5MjdjRaA7DkgSsafx6AWKWqrAnhMWEunzWYJLZmtHZFnMXo7fM53rng48LUnbHuKERuonjg5qHetvCAYCmzT",
  "key10": "4ifJAeA1mBbh2U9mvTViYeDAh9ZoRuPeEZCr2UXNg4aoQVK5ryh3SpnELdEyn2TDziyoHrMG3Gh6T2SN7GDkE2TZ",
  "key11": "uHXGd8wZ1Gycnw2wdrxH5sMn87ZSx3uSRdktHgepvM2V9kiyaFHdLuVejnT4K1pxSZ72EVfo56ThdjfpMJ6D6RV",
  "key12": "2v13ZnTmPWMdHjQj3fkYqM1UJEVrd73j3ZmU65hM6AgrJGs7kcWRhPqePEjQDtqgUt4VQkeVZkLDiusxHiuAFbD5",
  "key13": "64X7xyA7o3XXAW6a3147L1phrzG52JydYagvrd2GTWRHxpEreoL34jBL2vsS7hBjjskmJFch8tVMV6yfR4X5ewTn",
  "key14": "3MqyApUtSWUgwxJsKWNw2pWw2vshKJ59UDdcEbkeWSny2Pmp3238ZFaN8vy1wSwdtmkxr4PqrmTAHTERzqFE44hd",
  "key15": "yzbX1hMTbXe36V8AeyHCCswTQuB36qp9JrtqVWC4E2n8zo9Th2CeXRVftx6Zv9SydxCwPoqkQDBJa1uoQWwuFJ1",
  "key16": "4V9oM6gzH41NQZspwTR3QHbeKx6KuDG5stPymCTGvmujAA1SqtAAJhYP89EfMZx3VLWSJ4KRTefxD6zY9ENqtBkB",
  "key17": "ftJ1kei3sgv3AYCrPXbBpraSk4FJfXKxQgD4h88iZ7Mx51qbhLYYn1RkthckEDT3WyeJjsGHDQgvUJUWDtgohZ1",
  "key18": "4tRkPDFdy5LS2xeNFASJ2gRaPGGa4YKbKYPdGSDtwE3DZuPExz3FKgiUe1AQVx6yZSJd9rX2eA2WpYgw9rQZVwot",
  "key19": "5icK5BmmmYomv14Vq13stBwjnZh3dhT3WLgsVZ5fUdkPfC8R4jbmyPStiFWN4RNkodpWBUMNuwiXMihzUgi4pT6w",
  "key20": "7Tw9byYappZC74B7Yh3g6JjVMhEttmtQssNbiSzL6cPhyh8zpmw8w92puWTX4wYcAaZdCXgm3Ke1MX3ksqqgx7W",
  "key21": "2DaXw76nDsxyo6kV6WDLAyxvdMR7F7qvZnvJGjBNCmk8wbJBmndFF3cze5SMsZQRdJKPQLaK2h7AVMnCkWSyiXzo",
  "key22": "2aQArFM6sRnjLb5QUYqoiERvZDCb1fHnSuPGzUeQn5Cf2zr36AQB8JS2Dq5HsksXJejWmYtECvC5s8A1SwPgpW2d",
  "key23": "4Pb7hhttfuXmhcptPS2qHyGQPjVsZT82wemJ28TvhghpBPeC5Lx9t7yr2vWmUaTpXve5pcEKgtU3eozS8huJkMzB",
  "key24": "2hWzo6x3zfoS6xNtRPs4sqTzhtELwMwPazgRXJsjU2x25pmwvv85og9ZSXm6L3TMn8HZgyJdkmfexNWWTCZU7xKW",
  "key25": "3tZ8nFTJtFP943Q2P35P1XxobTyfvxqPA53LnzdWsCwCnwuQ3ar3xPMh6T5WEVvjbGd6gS4pTgtnkynyHCPqExzt",
  "key26": "4cU5qFb3HCUNZMTqNciTJhVbmLcL59MPtpe3ifVKpGicDk18zfLL31rz2itwNGQC9kj9h4u852b18ySbX2ysD11S",
  "key27": "4UBf38s6jQ9tSR8fNy7TDSTpkxrv1xVQGrEm1gn4mnMhUdvaTto15hQqmoJzihpnf3RLvJn9mRmDdCBBzM1s3MBk",
  "key28": "3nf6m2FRed6qzYaeikk519bEaaCXQ5C5u18i881S8Ms8j7aifzDbbEzsxRxmKQHUardTAqMUz27sVfe7aKEDHpUY",
  "key29": "5j5KR2nu9GdDk4J6DGXgAJxhKHEL7Zn5WAnRvVxP2x88qi1mBwdcSLiDb9P38WVD5n2J6tWi8ovc5jXxtPAxBzpj",
  "key30": "5ZGtksiaSkTEvRM6wnByNTUViG8AD3pcuqqP7c5gwzSUzNRyLcc3hKznUpAwwcFd4u168dGAq7Ek147tuP2JhpDS",
  "key31": "vJs4RPsv9QCYXjosLjKYHR6vY6imbdf6S54VTdkCgZpLtPvv4hSViepS23ZdfoBbXR1af6pdopWj8TsC14LXz4q",
  "key32": "252pKjFcAzh8ncicPE9GQMFBTaJXWxZuqCCe5tQKcdHGe33jMxvmpLesHPUmk5mkmDY1KYxLUZ3rFpKzzAtay6QC",
  "key33": "NpsjkQUJGwQs9vKtt19BERpWzujYLVoWuz393MWcFJEutxJTXWbmXot5Gw346iRud8p2gE7wH6hpDijMpmYtzPP",
  "key34": "kBYJ498DBp5HhGpXA8VLZpwX9wyFjHH8N1hC5whhK9uY76pPHB7opZN9KaF4VSSWjoEqocngUjYxP3U6FWYEzSF",
  "key35": "61NWPSTLc1fjsjT2WTfsdJPbAkgRqBRaTJozbv8vSap1tyWZMLSK2SobjxVDsvNFTuEZ61PApeQf2fD8vynFKq1U",
  "key36": "5F35ZmdDdVQbtS2XRBx63XNQpnTpzAmWF1W36cWgd9yJ5g73LwvNf8kvbLbAX5cwZckz54q6E1tTQa6xZ3WTfZTQ",
  "key37": "4JNotbYzHQVidjXHgeGtuTKtqsoe7jTEBVZozmVBZkE1WgvzrFPTYgc28DzZ12npLXG1yjDX4Y9XBP5spKp4WWHu",
  "key38": "4gu53nYbUgyTx89m2JmHHXSez9yTiThLdNMVqYYZTXFmCjZh3pee7Udyx1CMtRCJuAFSpMjATMarPtgbtaEGZpeN",
  "key39": "4gDbSCJJhi51Q4oi59Ja2He8hNYe7vzMV7SJMRR9WUvp3gtoH5tNz8VXqiqGBfuahuYhF8hLBZMW9GRkk2kDrA6b",
  "key40": "2YqyxBecaBPBGkmV8JRpJabdMo6JasnmRhFpz1dS4HnZX4ir8LvDqyXHYQGV4fTGqea1tEgSuMJANkTjGP1XusME",
  "key41": "4xxL7DaHW7MEyPTon1rb5E8QNfUZKPYCgsJHbvd8NwqXNzLcTAnTQYZgH9cYjjozjM2TnuzsepaTdFWL2ezfViEh"
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
