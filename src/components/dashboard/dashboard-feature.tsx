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
    "3cPCwfSQtYkHxdTD2eidZTdA1BX6hohHHTsqDEsQ3uhxyH4ie3tEqPWj2csvTAAFVwghsLyuHtnXXVFzXqcczXLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EA8jsKbhdkEvbhooiJnfJpS1onquS3fnrqKo5NfBf9fQETcwBSZzjKJT4gYfyKP3cwp3yx1smeJeAjVqf434k6z",
  "key1": "ph2CmBHWDD2Jn62DkdyLwPpNM5kP7FNwasn1J66drfFcUULCNjHahxXger8be5TEW7TR1JAcsvXNzS1hxCXhv98",
  "key2": "2ZA496bGtN6zPuZCmDLVJdK8G8vNbvRj28oPtkq5UqwEUUddzCyCMXj8iaUBM6w9AMcGcn4gkpb2Q2c3NATKvoee",
  "key3": "5TESWNrT1jnaCTEBPetqNE5BuJHhvLbW9reosVMv7kwXJELF5hsVQ28jd8jTWrn6FAhbJ4nqQx8EAVKGT69sMS8f",
  "key4": "4RSADKE4ifafGhATt1bfK5wx88VATpWUmzgDodPkr8y4FCpqAyHmaMgCjb9eJGxH2b1wxB4fskfFPE9zVsvdFRrJ",
  "key5": "2K3gHxjsCimkPbZmM2mwypewwg56RvSywzgV7fjQCBeaCaAntH1KbTfHG5dHUa6YTfWY5PAiVTR8Hzr6aJLA1XQS",
  "key6": "26VRLURxpGnB3LCGe4fgymwzG8phteSamTexchC64jiS1i2NbqxJiG5nrdssTZYEjyFgodfohGtqq3CwqxEfYWDw",
  "key7": "43bgwmd2nRCXXUvkdjvJb2nKhopkpyxCDLyeonRN2JnhBiy1iv1ypxLsGSqo5F8j2rJvRkfdb13jYgGDViNHgMy6",
  "key8": "2ASCmL9fu7hxFBBaB5harFDKzpSBRndscBCUmNqpxDgejtmq4sxqMSCRFra6SB4W1rZzQEP3FHfDBYKHsCZE7dia",
  "key9": "42srzvVtVjccJn7a7T6bkGVNr6rmeCtE8PZf6nke5JDXZjsrmX67Arevg3rmN3KUCaDjHShj7xRM6mUJr55yUohG",
  "key10": "5EgS7PE6VUxbfgH5QYFoCkw7BygtSfcP7qUbAmQu1BDZwzGbLEt3nLHqawCnoiVGCQk4N6xyZWToqL7BtwtvjWDs",
  "key11": "4FWUpNVxerQE47QqWnM3eVzoLfwvm3P2hnViq2BNVH8Q9H1T8VtccAu2MWYapeHMTBtMBhtTr3E1Gp7ar5u5dbRu",
  "key12": "2HwfRWJTQwM4mqP3yj8uY4ba4CsNximezCnu2HinQdUim1LuWtnW1NpVaHmLCWZpTtMp74vg7NoCf4eXePvbFJ3k",
  "key13": "5tgN88jPdW2izpHmTYgZS4EJ6eDhGVzR3SULfYVfeCEp6UiPXWpyyCPdkw1fEydPgg3mgVNkChinHEn94QUKAKKN",
  "key14": "298396kibbcSnu4uxbzKNaaBvyt3hYnyZ2hysHECcPB2e3pMv4sYNRZJbv3jjTMRKnfLeu5FVDuZMd9nSkzo2eUt",
  "key15": "23DpNcrrfnCPQB5KsExW69DPhrynbNnmKdGsUizWvjvouvn1bGSzqCiK9eccxnbe19mz5QRc6fji2XxJztW3DHrS",
  "key16": "QgGVNAihx4ZkSTefRVH59fNuLJRaq2tLBJ23DF2f17MHyZn2EiXMNmDxrwwrwP7eWjEuCTWuWtw6gLRGJn6uueA",
  "key17": "5m9RTMg9fNupov7eRiX2QDViTkMAusUAMUHeZ3M68sjdj4M4REFce4ChECP3uhay37Ti8Es2mqZh278rfTFDjVGs",
  "key18": "45hPCYHmnDXhRt7eVDpdv7HW4oT5X4FmPW6k6bVKkfzwgprj6kB4yeEp7yzDRajJYUr2dxspTYP9Zvr4uu2xdfww",
  "key19": "3mdQ6G75LmK4pq6b7PSYZss16co4ef8Cpb1EUbmdH5U8PmbV9xA5atAumkknVC3yUxHEFdnobSbTDHwJxsDvoWs6",
  "key20": "2MSBu96apQjJDDVozHUgxg5aAXm2mQCMkA6hZCdZUxP5q4xFrufF5rHogwPmUeUbDr4jroFsxYTNGeGcDQQjeWPx",
  "key21": "HGsMFVERWrnQZ3M4y42Nwgca43bXYSGeWU9inXopGfAti7Jg71MTSHhnwCtfXyM6vWkkiSXsL4Q34w72RwyCueK",
  "key22": "2U3azibxKxD5TfcwJAcKymreFhtAVajEZTp3kzBSdXibZhFbJ3VdhosrxG3etjNHqbAH79du887yh4WNzeVFSn7q",
  "key23": "59PpL1zzPFqnDXVvCtc6y3rTfEF3VG1psLiEjzg1Ua1x9N2GAMiCXGFbxFL5gnHu1zvwMMyMCVKmtaN9duPPs8TS",
  "key24": "hpXv3WP9byPLT26be4UM4ogfz9xGPRnGway8K7hNYKAUqYG2JeVRos1Fe2RFh3jabM4Z38UxnCjEd4UNSxmtPPF",
  "key25": "3yPu4tZ1T1EsGzFGqvt7VrZTVPerqrDPc84RPCvZ21VBMmWQBJJq3v6RiAp19ZUyWNNc8Xs2rt712Ko97Gyt8XmY",
  "key26": "5wbj5GmtpnmzkVUNsM8vy5qra4UxeoavePPFdBfADEsSXN6jmLpsG77JFMJeeBnHTfyKc37HjfUbwSqoTMzum1iz",
  "key27": "3uQi5R29CuTpKWFmzL3mThvTmYLPAVWoCPBMsY9yhjhiC84BaqmVoN9Y63ZkKKJ3eB7dMiLj7AoUy3eLvMmV7ZCV",
  "key28": "8BjAibtgadTBUSspoJyJRSrWzABTQKoyQJp2dYEbpAq74Y4LZJoR1GNdBfna2tx5gAkppayJMk2Z7Zheats1LxD",
  "key29": "4i6pyzQPK21Qfpw9UTZbg7zwdb1PUuBSVVPwbsk6b3vz4fXmquLe9paZp6W2b1XRWwGj7GByUF5UrzKCuBBrJE3E",
  "key30": "3CA9HsmvmqT9VKHtCwtekcr95wAsuZMMRZSjJ7cnEmy3DxNiV9wgEJWjJTGiQGyG86Eb3Ay6zxkkaRKUjTAba2gc",
  "key31": "5t6A93Fbd6yXvqivoCzDDLuPRyZuRTJw17gYJib9bnQR1QXaKCy6MqbFoaMPytwqZka2iQ5VErXgAzeB8Gng1CdV",
  "key32": "51iEALUzDJVNEUn7rZD9TadHGRgyVxUT4U45JbLus6SnRXMFEXamZqPfjHKbUMGrB3jLUHeqdTzBouR5tGUwgtio",
  "key33": "grXLvk2YpqzeYfUqKAFYoV4i2VQTY4waXp9gUYzc9Gp1acGQwnjz8USWSZoiTcZcyNKS8qsN6kBhtEiGfHwHv8T",
  "key34": "2Cg6XLqgmknhueCyBiFTc2WPrS1sDNso1X3jgKy7whRA6khwS1WdaQCUemWWbtHQiR7faN4bHGMxDSnYUSwnWJrB",
  "key35": "5VKkfYAtDxpKoy9Rj8vZdA4B6dTDsdqGKiWUGwtxSu5W2KsjP7waVqU576BH2VaJKzCkmKUrCC8jeS17RGjZqDMU",
  "key36": "4JCGPskTW6dpuBCR7ccb1pfX96fjWRy3NiJmskEH4nADb6FeXYJSNKqbyeTiCbdURSHqgpA3y5RZfsMAESSFHuS6",
  "key37": "EwBfsFP2mCPr82GbbaD2XxqyXC51zsSKvoVZAWP6Q1WbgNd7tLQ3mSMpgwZGzYUh4UQmZwnD1oJjgMkfQUZ2UC8",
  "key38": "4jHfMQuseyxsMd9j67fPC6opDhycYdbT3mvuAXVu2t6qitrhd3gJfEAG7RQYfeyk8N7UjNZk3YPWHR7uqQFmmbt6",
  "key39": "5cvVTpTXQxpAGKqMvtN6uahoLjt17EhnX4aBNkfEDn1jgpPhmqkXNop1Czab28PvpkgukxRoAwTVqT8U8iEPvrfL",
  "key40": "59mcxKVr34ReL3xTVHvyjgexnJ4ykHQwNVMXgSCP5qR4cBC92b4iyyJ3a8SajxkuRFDwq39jiPBRLKMpitypLKzr",
  "key41": "51QcYvqT5EEEdbQAsLKodywHZQwmiaU8mUNHVo1bPZu8q6MbCHP5R12CV6wMBHVBqUvuokFUBoMUqKmeTzk2SpF2",
  "key42": "u915qpGhJrNEhaxTGBGBwRwrKzmKG3o37V5qqEcVcBNpzbhrPYCUfpNtXsdQTEys95Y7pP3LBureZFqrURWgMPx",
  "key43": "4L2AUHCSGpER6jbYH2AdB2ktzR9PFpFHYUfypjC2rtBLD6Ef11B76fYpQxs5n45iuBntGyk1hWJdfejcxzo8RJiF",
  "key44": "2agoukXteFtszPmcUK2VitFmzDo8HWeGsXinJgEVGYWksNUnkCHaDsRx2pnK9Edat74bGcFEJG2m2Dca8Vm3cuop",
  "key45": "4vxqtGWRp3uGd3pz8DJ4iNZT9eYwkKwDU3QjVuNhavAEuQg2v3kfrJyt6zZoVfmNA7z1yF2Re71SN9uECGaFrpU8",
  "key46": "2o8Ccb5VwHCeYcW2est8FD3oMGGT79Kq9MAq5PhDb3HuBEuA9Y7QZrfwk89GNacKevMsrdatUj9QaHoWqtK6aUXi",
  "key47": "3kbeSSt4ZgoM4tzcMEmxCTUBMvoavuSxWwNV88mtVZU1XBKDfCeJKJKPwVYjZ6AvZdvf6ZRwBFUW4jV7zwMDjSfi",
  "key48": "43aWeqjajP8Tp49HugZmpzxLCszDSxziRnD1v2WUMYowKZLc8ANLgm2NPbJ4MhuW7yicVfBWqRd6huDS8ceUBzuH"
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
