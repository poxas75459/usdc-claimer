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
    "5tSTvjT3oDKah9zhJyFvhbs3phJimbUpowYeh5QF83p7Ayzzogcnrn9TJkjhChTgvCXVUEf2YVFnvSTKAvFZEPqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v2WYkJFzQ47amfHhdshRLtVJkVeX9gYVw7QFgPoJuZ4GDWBJh7CL7nc8DpGU6HtQFjfYLnNFZcKxfuPpicj53w9",
  "key1": "3sgCjU7DBQY4MiTSsU7PPqdGtZXc8A5HCc4uepeYrPmtgZj7EpcDt4WeuQzWsQZU5Dqk6TdQzPiJi7wbTMTjDaVD",
  "key2": "A6D2z21LArnt24pSR6EUeQQ2mMc3K8JH9ijPPwPtmjHg7NbWT4jgjnrGW6YbS8ChkjTrE9iEy26umH5N8g1FZPr",
  "key3": "4r6as5UjEJYWkHJiaWHZV9gf3tS7Ev4jGaZAokP6P5yrBsWTvBtP6gSigi9mq1kUgDw6VkRbf1SKt1SW4LzR9xJ7",
  "key4": "uD8oM9Ku9CtyyS61KeFiiBqRSvZsAimSgmXtGApqAWxcpVzZWA5tihzZD6B9dJ4Fpa6nWXhNs9aLNtWC91PQWiS",
  "key5": "4sYxBB2J7fGhtBTDSXbwidiw5H9PGBiKc6zPRZMdumf5q2G2NRywKYtyzeDExkTuLWNkQKRtpgQxwCNFHuuz2c6",
  "key6": "3vFhNUUCuzc8JCgnxywdjE2mFGJdD54FXRDFw65MCh74FXEQaBEDRWAUBavpNnRooUiumDBQpmeAm93d1h2pBx1p",
  "key7": "3jNJk24Xi7gKLdUBqqbd7LiTrB9ru7yyacRZKTDh6pJDnprZGTUSo9SR6wW6bpbbNHVTkLAPLLuB1c8xPe9QT3CG",
  "key8": "5v1SdEFXYBX2X5UxS8JMYb7oVCPSBu5pXWCc6H3jJ9DhbaymgdiPaXASYcxudvDTUWdrTupVuEUtDueEazyDS2E5",
  "key9": "35v71KDAZbWyU2KQ8i7pT9dKyLyQvtt5peikZvFPC8xf9nA9GSKLA97MyY7mXPQyx5NHmBWgFcHLCZK7J8Bnd8r5",
  "key10": "2FnmuyhCzAUvRGTEojv1UDanLdoeggk6xfCsR7PT3rAUBWCjbPvDiUda5jxHTAE3y5YvZYKVpNmcm1x2LuBwobYU",
  "key11": "2RF4rATCVLk45bJFjibpSru9TvSKbbQ5oj4ZS6ziHXNqbr2aMoeJpYPm7YLhS3SVmPGUbFPRPzysdcMFcQkzoUMm",
  "key12": "2X2q2N7gadq66o9SFQHf2hyj4euvAaTZRbGrLDJPRpZfjXsUuK38aHDNozUUJcpmzHpbvzXR4fe9BdCLdkXZUA8J",
  "key13": "5eMoh8QnDvueK7HHriENFB3YouQZvSuKiya43oazdR9x9PZ2y49cP7Cgmi85BCV7tkvCdoCeZCaC1oiGaxaULzwH",
  "key14": "2BLDa9Bpuk8H3ULdg2yayqCs9Wqf3tE2aGPM3fNPWFh31P5LP9C4PRpGejZtbhS1uvKGuQApusgJ68NVVRt2dmP8",
  "key15": "4YMg1VYgGJamiD5Cq7bbaBARduhAj1HcyrVUc3u5Hm5U2AQp92hmhyRpGh7PBGDAgZPSjv26JePKRRaRT7id1xdX",
  "key16": "4vk4AX956CphjdzdQw4dnVvtWfPwKPcQTaHSVEAuwjaXSuibfuGACwLw6J9StEAd5DgSfCxSyPCYF2NaP4Hps5zy",
  "key17": "3vQbPCqutJpxiLYpfeWFZc3KD6wHXgFgZCWYEqAMnBccZUUDELuqha773h984CrfHJa7Z824szEat955EcGp2T77",
  "key18": "3StW4ppMzLwk3fpVC9j9dFHKyDqfKsfRFeHP2khcdguQBB65Ru9HKb2MKUdzxyrdFJ7puiCLyyWseC2fdEKBCevx",
  "key19": "4ech7XrFnfFePZtVKWx2ZiW76w1D2oc81ERNwYCF7Pnc6HVjLgzL4wueWsG7NNQPBxva2UCkgpP98ZL7H6r3QkLf",
  "key20": "3TGmBqLxhBGxXQ3SkkK5p2kCbPf3HxzWyMDnK1e82jAi6jV8XovbNwryUAq84MfzqXcpS6bx1GQHKjNBCzi5WCaW",
  "key21": "2bRNt1JUzXcymxQcM8FZPYb3d1RF2sxWvodComPW48WM2X1b5c46LjxQvmLqWeJScdnR1zmSDvpZ5XPoBQuBjdrg",
  "key22": "2sNYQcqaSHwcfo41ZDj6yZSpbwiUr6PgJwk3akD9QFGYXacg3ABdfXLuuow3nGm3yYP6QGiyB8h2RfkhCxxFBUHR",
  "key23": "2CLLbaaVxWTVc9sQsR8R6dtXuFP1mnbznF4oEtUnXt9Gh4WmhJF3XxX1aGRhUeBu3DTBwt8wTigQtTzU3BwHpU4S",
  "key24": "CUBBdLDXGZKpUgDTuVDdRS8TVu239Yp8mfwcwUsDZQet4Dnfix3tUqKkoqu6bB9coAZbBcPbcxh3BpK2vDQBRXv",
  "key25": "3pzUsMAD365ep5VrwhbToSbZ1HWf5PaRBQCAWCNaKwsaf9PYcx8JbEf1xsz5uLDG57DZkEAR2GpHfBaoWqqHXght",
  "key26": "54E8upZoGHWwyFDVbPoPRrkHoxFWVTCRWC8YHswmeX4xLE8Kai5mAK3GzQYSSSu68p6Foihp1znvw4bPjw8ynPH4",
  "key27": "aDxcMgATY2J37QAQD2FwXo3nKnHttmjCETCzNF5ddx2rQTBdazS4pBbC2c4NaEk3gwmgadgoXZjoYFLihXi1SE2",
  "key28": "5ZckhwsZ5WiqNTXSkbTeTBy2MzRypCpSMMdi9tUqsigDeghA7VS9aEC2NgVKu6pbEFYLLiup7Pojf7bypVY4hdVd",
  "key29": "56YiR1P6WFHyGbokHdtckjEfVkg95f4oyPrJ9hYKvZSwRb2aBZKRbAZ35QCcnMEap7HQ39zTb4FSJpAbkPFRU78s",
  "key30": "5XV72547dbKuRVyaAmT8AHjb1zu82fBTFLi9n5wMcGp7n7kMrvX2S55Z6fn45ZVxmmAaq73Z1a14qLSSNFoimQn5",
  "key31": "4YVoSKcWSFaraJaJb8wx7S4j6bfkq58mPjcvibmPCN7QD3Zm3oJ195QmFsukKi7EXU8DvaKfU8sS4RpDXQTrQ1nz",
  "key32": "2wTMqfdm5qrbZm3WfYsFebpUc9ETeqWXrByCZ21pydn8ABddxr343VRWVboBK7tpm38J3tRgH1fuES9TzaKJkRkc",
  "key33": "3G5Z14hvAzcnp7fDDLjY6kLNd2K352eAEy8DdY2U33KaqDqSZPsAPTH4jHhAWguAgdrCLeT6MtdvHuQ4YqUgjbFq",
  "key34": "5k6tdSVXejHHgfbGvGoibTEbbPvFJ42fqyR1BDVTZTcPZPVHDptK5pntect6G9ZrcB2268JkqwdyU54fYkwDwvSN",
  "key35": "61gRzn8Y9pQwKdibUERMXf8ibdwG4yZZrbN6aHrWSZC5dYjAySTjiuk6XK2MQtsScDGhgTsjcxFtk5G8Psrw1xmW",
  "key36": "4zUcK5hzeWm8fBjA391MvJWwG53bfUDUNUZYg1f39nYF9f11WdKiG9X5B3jUT6fgaEFEUC6DEgc9CKSzpTpXzhjD",
  "key37": "29TnsZo1n8wyt8eVqz3hN7PN9HqLm1PbMJh8iAahyUMnXHTX6qDp28i4LgAPt1hnCvqxJbochFoTrGCJ2YL38Wvq",
  "key38": "3R7w9S7SPZg2ZMPsWboGeFUZ93bzm8ijfxYaXk54wnGD8g1P9BHw7LQN7hB9S8icVQU2MbisspZK8asjBDYEJLwb",
  "key39": "4WsaNAJz3GFUtNgEHKbJFfxxLuQyhbqE9bGUBozhqnqEqstSdKQ3Hj2izT4nTS2FQspWn8VK2zp9321GiwNE69W5",
  "key40": "3P9unCPqzyDKUoJLS7hdmoNNPpFw7hyVUjDrmxuJWTfpkSyCE26MMqEhJ71pDh4LSWyfjnCLnWwod3JrLnJQUt53",
  "key41": "29mai72LoSEfiW7mC7F6VGbVtc756NpX4uE3jJ4QsDExiH9JHdftSc584JR2jddTuWwPyKGmLqB62Qp7pSUS85KR",
  "key42": "6j2Q9UDDcdf91ajuAwVwppLuLG5vGMLyVMSguf1cnxYfmWCtaed4ANAXDReotYSXfito1jj6gfX7PTgfYFo9HtN",
  "key43": "5V2LNb1F6vyE4gPrmyuHsmp3RRvFymqKQ9Lwznx9aQ3GSRyJ23KsxFVJhhbZ8h9vjdnx2YgEi6okm42FvmquJcnW"
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
