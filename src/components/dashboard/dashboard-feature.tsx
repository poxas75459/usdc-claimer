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
    "oxLRK5WUPbkc4LAvMb4hjxh5xbdUqr2UTiCo4tNuNnwnmGqEuhTkmP5pha8wMBf83tq4vCDzDDQ6ZinENsCf8Qo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3otWjYZXu3mmp8Fs8TTADeULziPqWB1reRNqV7PqbRbxSKkow5X2YV5qGaUmQMkvyQcg5kT5QRePs7Euw3eZyQcz",
  "key1": "2KsaXQL2T3ss8hXisTxxPKJ9RoVfndiKX9epTJmcjkj5gHN7N4QQLfyumEuvDTo28PTS4j617hV797nGoGw5DwiH",
  "key2": "5A6GVPeLrwYEFAvXnwDqPhhiypzcmAWctFCBVSUnNtRAnuCQetm5oHxyqTj4suLWXH4nJBGrfwoqJ2tj38nFx6TY",
  "key3": "2ywptrX8pbTn3j4pb4tyk7x2sMbYP24ki6c1FMVhkWhH86DfRiWVKUSwTLggLafYDW4Kd3em4TUCRcrhWyTsYKcY",
  "key4": "4EWEd4ZBvgZuBDGCHUJUb947F69yWpGR6Dk1EGN9gFmh42QConSKEhsYNGot2MNpduAxXRopeNNSewBuzJ9HfsgP",
  "key5": "2UYfaD9WzXkXacPVtyN1qUm99Zzf9FhYwyxB8kq9Ex1AcTxUMVH9sWNJ3tDidPhwB4HpKnvQHQwxeh4XJZzC9DsW",
  "key6": "355EDq8FZMs5FaZocuzkS1LBjvV5eL6bqeRCUyNWRsfDyrdXHmNYMMZXL6T6RwHLe85H7hrkvFcH2a8oU624cua4",
  "key7": "539KBSzcNHcSihoazt7H8vyHfCZKpT3wyaKxDX9ctxD12cZU5622dhKe7aCf5iXc2FxLMdi9CZ16FE3JeiFwN1bH",
  "key8": "4JFbUL6VYfjAf5iu4eyjFbHF6ucz2bKUSNVrxUhpDgwsb1idnYT9An1zbtMQ3KUxqRbWEyUmoBWj65nzgcqjwWnB",
  "key9": "4hpKT5NRR3kc17xZMKPtui5aZCjEnRPgxeFMRKEPMo9GFGbmMsFzXumQxkVmPbT8cPvwm3SQ1HPDYtZZjERLLvqo",
  "key10": "281fKwHQghZGmr1wRnN5zGb7pemDDdZ6f6QfKXC4UTpamQ2nAJQDt1rAsuwT84JRyMioaRYpLbkJNCiqEpPsT68c",
  "key11": "4uZbqwuHtLXTaJ38WoKkgJTsxbqMC9PrBSHEFH98oDLJV9M5mPyXVHNX2KCJ9prZeT8scCGXfmriSrjAr3zVxVKB",
  "key12": "4frvQTGDMb7BC55c8yETgFKZT6AVKcyTDrdErdjZz91GrJ6uA5M6JhHNsoQrd854KKLrVMTTsMGnAuh8Sgvricr3",
  "key13": "38po4PfeJ1yQY8zdLHcTUBjEAuCSG9bu58vLJMvxmpWYL4RbTjmrtchbZrCXUnGy4wY23ks3iM9y1zCG5h8G54L6",
  "key14": "5nzhv669EDgrLpBm4TeY8hQUqWtQnbJwtCwyZtgVzq95oUYE7DCxieBmmXPHo1JSrVpUAweCeEA9V7jNRZnjprAd",
  "key15": "5SGzLMRtufPE6XETVT67GVwqj4aYgnSbH43F62NzNpNfwbhj2qso8uQEd8rAmdhRUrAFyfppo8ZVpyHnT8vR7LHs",
  "key16": "5rtriZM8b2qXx1YsnLg56mvYxN5eDD6W26ExKBDsqRtpdXMAzi5acbWdDxHDDeV4yFzvJMtg9hUCJfH2neMYVVZZ",
  "key17": "bXbFKDkD7FvsJTxwwQjVqqG4JkDW58pxc3TNZF4xGSNBEmTgXE4GKNF8uzsHoDHSg6FZiiS9sTJjSpLz5rjKYEn",
  "key18": "3RFNgTQgW34PeUBHgfxpb3CokgNZxudZY6WzsNxGBrjEodAFmEQiGszLPreZjh3qD27G2gLUN3UcgQie2YHKFAcH",
  "key19": "3F16RKaSuhXs8ECbTxkpzumWVBTjymdyGNkxLJVczm2G5TH2FZa2Vb5cCrPAGQ2kTF87dHyFYZzXJgisdJ4yfHfN",
  "key20": "3LMSpTpKb5XXWeNJKMcK69NpbhhKc8hgq33GSj29MZRwZu3cXPkGjWeB8pfYhqVFNzmLRiTsyQth5RsxRcGeGPD9",
  "key21": "abigxE3hMXbdRpp9ugP1PMbPh8R6Fag32zn9TuCnm5mwR87pzEXcZ7udyMjBmivJwUANB2Q9X3vXuxEKHR75X1h",
  "key22": "3GH9L7hsjNmsJ6Y3frqs7PTcxBs7mEaxcdkeCSNkHeJ923ktpipXSpshyutbAA9PtXEZCuqwB5zPeRiidoCuP6MA",
  "key23": "29ymeFjVRsxByaft6G8pMLx2bZYmRxSe61wmfe3c4XZJzWoLVMoVoGvQScvfXsxhADzADzzpTeXddgR5yRf54WCP",
  "key24": "2i1QqLL1JRdvh7wREkGhWRdX8SY78wE6DpdJxF8gyAauZDAe24PvcP89B4HaVcQurEJuHG45s6NsMwV4ezM2CSzj",
  "key25": "2858Xndbk9Bi624LucqqcGskBhZri914KxkNNuJFaCEiaPDRg6sBnLkixBuE7koAhj3UZsFhPoizhSdGR3mEsw4g",
  "key26": "4DhKiEUiReuVZodfrE36byqn2fFYaq3SpyXkahxbr8sKHS42xh81MCrXYPLH7wepW9NHVj6f1ptKLpUF17sLxA4M",
  "key27": "293UkyezBjBsLU3BuQCX7yduTzmqmH8AHf13n3aZs5KmGCExnKv8EpszTQ88JQ4uLWuSTgq5HCYTMVVDkLof3Q3d",
  "key28": "4Htg2L8K487P5r4x4atTcbHRbyKkgiQrdmT8vhc9JzVeQAkSTezMExgde7ryxm7PM6H3kzCU9zeAjvSCRuM7ZSVd",
  "key29": "5HETg8PUzCb9QPteJR4KNnKkd4SWTw5Q45JntCktuGWogrCYzTbTCtWiUFpN4YVAspKPrVs29B251gkeq6gg1NQY",
  "key30": "43LUYksNykmgNRThHThxMvqhVZmPxyutM8Ht6yPfiWwtnS9HDERE6kcZLQNSrxx8RcnQc1H6DUM8PkFzxBAGmn12",
  "key31": "3a67CAmCSvX6xEhsx4oKnUjHdxPvVqhxRLLMk73nCqqajPgFt3ibALxWxBSkje9gRi6jY3o35j889g3TKWiEsRvR",
  "key32": "2uWyqeZHdxLDx1SiL7VcNDsoJamndKTmN8gqVjZK1oxsYoSuGJiEC8se4r6WY8EVT4qwbhXcieY5VBj8WNnGjQ91",
  "key33": "69P2odHhmbdrAyAqAfZu4DUEdJkRui6dDfJL9Z1Vf5oq1iByLibyJhRQW3skSSpmm8s4G3icndziypV968NhvDu",
  "key34": "5ZgMwwu3VUrTEFBj1uwVsvhs3T9eaUDwpHcHwWCF48pSYBkjac9zzySLgN9keKbdN3JLMB6Qm4Em4EKqyYPtEUg9",
  "key35": "5S8jioRd4faRkDxxnPRCazxCfYfRPtgXipCnAf6envQktcEbWw3e2fumrfcWiDBWmRCdHbMUngbASnnZtmRvg2NE",
  "key36": "2Hi4TScm6PN2kcuDXnAzE5vAiS8ak5pj197KMykYwQikkX8mBYQ58gVcbzA73Gyev9U2saZRTuiXcr7K3xzkgEx2",
  "key37": "3uU5TB5zLRm2FReUxfCb6PJ7uqiUKcayqUQspAEieCGLEY5HmntintcD2CwwZejaW18jHzcKetRJfepbmXL1B7CN",
  "key38": "4GGfW8D8b64GapBeY9Kx1HrqKLJRQaWSyLMMnPYAgurhbhXjMmTshstnJAuHjgfwS81rAMKRA9xRMNh9yoqpX2RH",
  "key39": "ux4Ryp66gwXGMZKWXfmrptHUX94tfSbHhMFbydtbsPUZMoHrbytq2Eavu1bVWKKM5vxPgjHuaHaxRe4LUnfqXtE",
  "key40": "3KanYb7s2FDHsxHuozdEfSAtafLH2KDZ3Bjz2nnrmFxQa1i1pEcj4Aj2pfwgieXXftsv1vaVwBShhhhWwBp7VhTk",
  "key41": "qofZqWWyKpGur66itVwF23qFMxmHS9DAZn3f7wvUdY4iC3o4LXsBy92LeuDLCZ13HZCrxVQEx1kSMmBnTSJjZ1P",
  "key42": "5BTJnSvbbPL16w8Q6mDJTqhVhtFzLavcAFkQaykZHnewf5cSsuxZoAvgsoAsABVVHnoF7AEyZVzbEXVnWPbafDhM",
  "key43": "5WNSgFnuTmnX9y3H6CMJiA4hhETi36ooARvurVyEMdTfDTSGRDZqwVYwLpcmGZbCnjedBGDcyPUyNQgqKZwjinJv",
  "key44": "4xqswMTT6ync3GrHyUNrsbG4cVvTRyDRZoo47RA3NVktKQiZq2tqYZd9CVCgEC3FZukTvAu83rJEoLWLtT9dNHpQ",
  "key45": "4nSngFCnY3XTbqMQueKkSb8iqj5Jb2j9nK45AZ53Qa4xPJqbRHxq7C4exQCc9XyGJfsbtsawjto2EHF9AWehLfTM",
  "key46": "DgXHYbFEeeqwLj7X3UtmLB7EsSkBCr2uerQF9Y3L8LWx9K9FjmFM3TDeK4d1FnQwppvcLP2RqZ66VUg7eLKm95s"
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
