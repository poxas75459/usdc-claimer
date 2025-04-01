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
    "5G7cWHbthnnGwc9NPtmE7Yz2STJWKm9eW4s9x2SCPQxJ4h6qNfJEi7zh5jFexBFS6KPtGneGBSbzpSgRWag8pU8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62NTRVWhwCr2j6evykC8swW8qHdkVSPCTS2x47VavVsae7faaRmbS59uyKuajxEKd5ySTrk34s8JmWpVhG7KiJ6L",
  "key1": "372Dh95KHGh9miRoPWkcNyvYf6in3WS2Uj2fN4RQbpsASLmpsiMntYTV1DwE9FUoDVK5SPigAcesrFMbQ3vAbFDe",
  "key2": "NPLqx4NhPLeCe4wndPt6TYEXNFLnQXJJG6F4Tb2FeBqf1uNwx8s7KgWVsntmwFs3rTvomyZtqWpzRHkaXPygbkL",
  "key3": "2fttEEpQKAemVoJgs2XSr7JG9SaQWeNRNKB2XEXt4Y9hbLTowYs6rSgxbK7PidakBe6haPJqrz3XaNUfBo4Juwfu",
  "key4": "3ZYKkGNpKoGboa1PNBQWPG3RpATu6JzzkEPaLo9JXbaUKtyUeHDgnMJ2PWqcPkkg4EpMwGo97q8XQzKaXRGPFBpE",
  "key5": "3Gcjq2v9iCoiiTxzXVFShG5cdSeLMkm5i5xT6dx7ofB396kW7TxphRb4oUTNjmv3C6Lx3DWBwtfyibm9hot6WYhn",
  "key6": "5L1ENVGNV7eXaaSv9aNi8h8hbHiSm2imtfurwxbXCWo93Us9Vb18xjXhbKqs6bCvFsTAt7Jc1tLU7VxJr9UkpFBP",
  "key7": "3oF9zCkQBdHE7gbctxZ37UnSGb9ZPR5bQEUs4JoDViVGtSbCnn866CgUkzQMAEmiw6kmRAnNKZouLtXenXEmkquf",
  "key8": "hveupdzb7RSmhKQCunH4NqWhRkpJYPFxzUMBq9jJseZBrZtG5i2QUB7JKDH7JwwZct74gaGFWj7VaYFzYT4L8cb",
  "key9": "62zSCquLyEGdKHCd5YvHWeKcEAyRosgz8JJN4sfea7C4fVCYtt8LrZ2fSdvGXkZ9y1bZoh3YNMbFXycSNpjoQazt",
  "key10": "56bji8tYBjViXbhduP7uAyg8UDocDfonjS3i6gAqM64fQr3xE7SJ96LQsmDk9omSfFQNQd49wka9aZR6nMcWUQ8Z",
  "key11": "2h6HoFestWX9pwmfdaDf2NyocGWYBkTDQQ2izU4MvXXDBk1MBcZCw7mWj3MZUqxuHCvkRLX8cRsPH2UWNhNZaGea",
  "key12": "4BCtbwBaLkycUV7xftAe8MNCkTsL7J2gZ4hBuMBZn4EBKTDibLAjhJmcMYiR6cJS8gYNCnMznzPW49ae1utpgRSZ",
  "key13": "3Edu2Zn6eS7DZ14EH5Nq2TuEVeZs6bst6Jjap92Wf7SUfMoVKhHWRkHFG3ioxmF4RQvjjQ2EH3jnxt5Bq1BemSLz",
  "key14": "2VTDs6d66gHmKKMZ7sp1ztc99iiPLv1fqu9m5SMKVrDRRnLn39nYYsthegkyWoLp2kz3MLumWGawjknQD78sMFhA",
  "key15": "2nn8y7hE7FHvFSneKPCdV7q75DqUWesamnGzfHK9eCspsrEfsGzmoBZq3BvgWSwxKf4SoBWNgDAdEWH3CLWcPwFz",
  "key16": "2gNdsqvDAYfAPQs5Vcxk5DUZGR8EY4CLgJRyxyvWtLmyB93NsuiMdFy23M7C8mqFL3sppyMVtKYbnjMyhc78Jenr",
  "key17": "3zS7WY1QSP4wjJSk3HAZ71bJyjfVNhFrDE9RHn8dvoG61ZgU9QGiXrAKF1pCkcQXFyGP7g4PvViKhRAvP8abykVH",
  "key18": "234q7cTnFsMp1SZMrknnXjq2dnvDudXFmRK7CDNHyHZc3k22BChUS9bAfmic1igwNARuRbQXtRk286NJ7vY5SzhG",
  "key19": "66eysRRdmUYFeBxi2zirLYvdn7McMeZodabNhMxATTF9GM6ZsJUgsMVQbf4pnube59QxMRdqAN3EnCrJutpKSELD",
  "key20": "5Tp6J4zbThSB96fkMDuaMsB9Mu5YH1Qmxmqm9BBv1uhZkoka1iyZQkcKksiVFWrk3z2AerEcd4jaVyJGcWhmEmUo",
  "key21": "5BNdzKujFiwzZAihYoCsnWTP32tVdLZ23mgmz96aJuo8BUzxfLrZVCcEeE1ZiU1hK3Q57S95gQgtErFnYU1LK9K2",
  "key22": "4Ja9v7h3BEKzsHP6cDeenTZJdBzUvU34ay49oJGGgYNiiz5NxwZbNzXdHiYFcnruRPR1BJ3yFGBMzz58388GcUi6",
  "key23": "3rPYxyFWvufx2K8x17Sce3tYdqXuXhPmXXYeXNVgtEFHVgpEDxoLg1M76m7dyCv7zEo1w8NGmQuwvrkkSiYVEbwh",
  "key24": "54FvpChW3wogFtWr48chALoZYYpycPcsupjsspSviJCGeuWVMFrQFA1ceXokC4aR2VDVDkGUjSeuPweKaykwGEhn",
  "key25": "5UK7V5ggz51Pc6ozitFX6XKARzCH1ZBeqn2p2dq7RsK27kDXaimNJTchBcP7AWSM59MFb4h2Mz6rGQXdzna3gaGi",
  "key26": "286Qtuq7yuUGB54mcbXzWtZTURx2xfcrDHAtbS3ZFJHtr5RDpcJXyCENfWRcgvigUXaaWB4Mv8XFkfRJtwJ7PVnV",
  "key27": "3p2xnz2T9okJG6ULeAS7gB5Ud5DyuwXhUthv9soRDBG73CBAhwga6CzfSGJKeVxkpT8fEW4W7GkKQQL2Tgp2mqNP",
  "key28": "2bMaSy5cjLstMH7BvStfpNB7gg3xuVo87ofcnHBaQCNEkPNrrdf6tvwmRsTuNtGm1X1NGDimAz3HXdrWpF3BuX5Y",
  "key29": "2CC7p8iihSgR7TEQFc334oH3FMjxAVGgsoGiq3XTArd1sSUCTidiW3RbHiFr93WhEWyQfw1xYGeZTQzG1L6GbeHZ",
  "key30": "674nKJ7zEkKGNctSi7zSXSvd5Xg3R8s12EAtS2VLWSvKvpYRvs68NyG2ssHZRbC1vj8v6chrKKQ53TLEXQtJFRir",
  "key31": "5hoic1TYVWa5qjyLUfPc8PSCZ1KfqhXP46YhwLjAkZvP6ATUbfMZvyNoEs47zqKwAaTjgcQpNq1GC1MXQFskcvYx",
  "key32": "ko7hDbmvmDhZPJXsHYeRcviG9LPNc5YiyZocJYtdrtkTw2T7SbNL22EvCen21dEkSERsz1MB8GHwSqLtRaugu5B",
  "key33": "3pGvjTQaV7wTLJtAEga42FGR2ZtkPQvw5RvZghxbPXcsgNoLCsER5HK4BY3kRMc3aJytKF995KxCyoxHsC7soMea",
  "key34": "27Kjoe3QbTMquhzvrezrfGUSXkH8zQFE9UfKJ4pWZxYm5fhT4ezqBgyUsecMMxkvHTau2123GrXDW1wmVqd5W8nb",
  "key35": "2vdtszTnBjCqCSkYPeBKT7KhgXwieMob2dhUBL3TPABkNmyJRN8hXExHMESHTd9yxE2sKnfDkBiYSueCDrWe6WW",
  "key36": "4jCZ5ZDFD2NxcQoEaLo9Z3FqC5GvzKqfimk6Qs6YqyF1AHA9R8qAQnpXnSX24XhndCSAGTsKXAhdPB7SCiyxSNWT",
  "key37": "5GT41AqqoYo4TxVwfbyCNxquSoLxP9K3B4pXUVtpCH3Kugvtssh3APGVL24kjyEGHQweLvZXtmCVY8B22LiYvqSz",
  "key38": "3rHpwTpGeUzVj5rTeGPxnyiJ13KLxbvGufWyXkoxz2sEvPKjdW8b7Auj6eU8861FC2sbeg2MBNM4ToojXyx1Ng9J",
  "key39": "3emwdYJJcQuW3782g1ULg453siKcyvAYYYqfKgCTTfjtUXy2B97XMnuxW9FRmKbFugUR6rrueCRWAugSnYeVLqzr",
  "key40": "2vmYdg32pdyNCBBu5DSwNEC46ZnsdfgVAJToouiniEYjyjrHDRfeQEAN7dzgkpKHPre5WdJqLw9hyE87RpBUtZ2d",
  "key41": "5nepMiqyjr9Sexanc6REc6MdpQHNXbTeb2TaRLaFffFu8VDShCDtsL27jS83Zf1iUq6qb6hdEBLhsam1omb3pSPz",
  "key42": "3WvNbG4Na1KtXB952YmMwe9BVd5iG9AYhXk8HxtUMrS3q92MbF1VMxbF3TuWQxPxzTuQ6avtG4QaehaXYUunK8sr",
  "key43": "2ZAFkpBHvv2pC6ixdcnyDx5RimnsMPLmzRHrn1Eg6Ao2vywD8SWs8zzDGA1jSWbuzUFtWMUi5MYZXXTbBBq712Mt",
  "key44": "3nSt4JWeBjWtfQi7pEPUaHubNCmqRxo7pihRNPsQV6g8ha9sVFNRfgkXDMjeLVJqwjbZBMpDBANx1icrETqiGjsX",
  "key45": "5NT328rG3cFEAginQPGrygst7t2K3vCPB7G9o3CCZYQFCEgnq7QsmSC5qWwtofYPe3nqRRzVVyeNaS8aCXSsM38g",
  "key46": "4Kxgdd85Jkv5ftUBDajTQppkSmPLySPEuLoN1gwdyKvioyjoedPYohmGYcXPmMPhNqB1g4B124dNRxtzUn4KkjiB",
  "key47": "5JQW3AgaXZmUSEgSXDwxSGKQSB4VUJ7AQToWZw6BAWEkVuPQbuVkZirpUpuGftUMwQoq7ptPk68AmTf8SWvfey52",
  "key48": "4fcpWNFy3aBmt6GusGtiNLm8ACiv8BjgxB3FmC98MSUA5aDdJpPaaY232Wrcw7bJvdpd7qBpgXkgiWHHGVoeddVh"
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
