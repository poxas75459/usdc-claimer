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
    "618dny7FpQp25kFtwW536LsUP8ekjX2VKnrVPs19Ebb8f3hw6Bq58KwtggNND42woKPoHkpbRdkSMfwVdKSXzRjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LAJijPeS17mcemxRZcYZjmTtRr5Gh4NKXhMTCXe9CZZYWD1Kozsiv1SaT1ZHSes6Uwcsr3Zx1T2gxm1ZEgG7MUX",
  "key1": "5DbXgH9ZobeZhVPxe7PSnKifieisnFSdtmBLD6iSDZR2VHcovRLJRrJL72xbefrswdqndq61R73BwB3jyS46z17m",
  "key2": "4KtvQxTqkQhFW3zxyyyZpnnGsKbrhzvDnvHCaTypMZv7567rGjvaJRtR662cJZtJG6t4xCkgGyzygR3JDPRZxPiS",
  "key3": "3vG6sMDHrwyfbWUiPyJP4CYdkTdP2GhwNviC4sPSmNePyLssdWEMW7qQctCXykJCy8yMPoDN6NxRKLJKPj3wnEQA",
  "key4": "3VMqpJy8uUwTkiRPySyXxX3YZEtKEB7m4EtaRwaaWBHdSxb5UYpSaNRD82iocdSwkSLmiV5Tf7PLfnPuKyxNksqE",
  "key5": "48tKPMrhEBSrUXWZX2C41TVW8xeotV8sKMv3gmix9eNWkZvgFkPyStTufZiy4Fdx6MFjGQ1RzaQqHjywLTfZ28Hx",
  "key6": "YDY87rZKPgSRo3rEqB1L8v4ZMrSx7inha5eVVsvWu3maegNEJRK3sC4VEbvQkauwQDhfVPrwaq3Ctkd3AMmwki8",
  "key7": "4sTLtHmgPksFK5g8ZmauzzAzipxVZ56jJ9ER1CiKiJ49Xz6znjhJ2kXBZzoBSpSJFfUGbdeF8wBe41RRWorCtnMw",
  "key8": "3fvZG9MjiPi8a2qD5fZ6Y1iC6ei4noc22GVMVH2CCkSzuRYyYVR8wDyxzWkPKvYMuHHY5LbLZB9u5pHSnUKk5XwE",
  "key9": "sz2rJGvxtEc88rwoztstoyJy5gPjeNBuxyAJv6fMVjf9dHhyFjXY2QeseD2BsDpvUkU7qF64WSwZAwmveAcLaZy",
  "key10": "22sbMf2i3F2AAKZUyUDyhWDGSVpnyBxdt5WhDqWTDBWaVjERRibivzHxnUmwm5wcqEN21KxrDpGs9VgajpeBb9Bs",
  "key11": "4neAj1jTZPGyXsiPChSvZGQZ7MSwo8QUA4fTVQDfinxbzzVMD2QNgtcGSCHZuKztMzASVcZG3t5eupUJEJmcAa8R",
  "key12": "dqcMW18KYTg6ViE1TyJvyRGpqgqYyeurBCzoucSVqEs1QZyqxo28wpmXRtUUPWYLSFSjVpSGZJcpSTbduGxno5Y",
  "key13": "2Us8U6yDgCWTbUfkx9Fmf7UGaCxfYuSTgHbir5q57UVV6GU9cb3DBDmfWiUyNYHjwMz2op4ESnQLr6471L8at9xr",
  "key14": "2nGdK8WA6kAmakcxnhpXUHFf2ZxT9vSb8VuCBkKEsbuTD3KnHKq5agBAh3fFiM9gDYY8wNbJMsrWxk6dBSn5LMrU",
  "key15": "3BKWqH3NckoVWPafkMEz2fAqp9orH4RJTowAKDJcgwr3977pWBstUkRdHvw6H9KCk1DJx3dCNhCqGaREu9Q2DJuJ",
  "key16": "2nSdkJT33RLGq1qCEcUFRuVJh4FATaaEpMHvqXdLRp8MbZ4XbD84r755PvEjvzM8XEKCL63ac19mzjhL7wX8FbEi",
  "key17": "53SgwZqiuRXXqFa5gLJ24sUtbFMUrz1tNREe4BMQhwXmLQPkqAQcHNPBz4rPiomsBeWimsU4MMk1G4BE1TJBNjJT",
  "key18": "3FEH5X4GF39BVyNAh95QN6Lp57TMFdVQPBk6K9zqESHnsaZbrqkE4Nx9QWSnYpDWRoReEM1nqJ62PAanoBWKHPeq",
  "key19": "4oRD5iQEPjKgK9c8VqHrwrqEixHBrbN4kZjXredP3LzM43Bx8XXAVCzaf8K8GR5bk2SzFz5TeDDVTuM7Jc1WgaBC",
  "key20": "FDLxv4SFuYV1uv7huqiyGKkHyK37BLZTvsudxQz2FJcqTWv1D3TJiw9Pk489bp2cCmD2YP8vf4vmE5vc3hDAWJ3",
  "key21": "ePk64PRiezBXmPhcK4jffzdQPwqqfKjPrqnstnX91KoRxBC3uGhzQe5wQhtAP8mPphmuq1rduuicumhEqshgoqd",
  "key22": "3BFsDd7snFnU4kxGgMYWki1MNo2SRwXrXN1zdFnnhooBTcPna5M2ZhCKshUFKgGmvSNX5EiGBjhQ6C2ncorCM9yD",
  "key23": "2HLq4tK81Q8KVfyM2rG5jVZ71Mjhb3ND7a96FJ94qCmSi3Njcmv3ZhqDSjr9vrUtnTtWhauebPZSotaW7ij2UGYc",
  "key24": "5jkifeoEFgAjibG2PdNe4FcgVMo6QctTgueuqBcsEstx1g7iq4jehmw2HAFVwRyHCfZQeavwueye48JBAqhFYUC4",
  "key25": "3GP5o4A2fsuv657iHbs5ZxBYvh8GhytZtuesBH53ntPYHYXsmNN9Xnas5o1myf37rvCiRrcG3adaduVcj6WERBsb",
  "key26": "2CNmxewCBkY4fSCqwucmhGFsDDxDFHwHq2m9xgMELE4GqZd8daYWdwZsf5zhkMSWJJPh8SFiE6FhAFayyd8G49uC",
  "key27": "e6j2gfwcqBxKSaM7MUqN9LJfD5dWELMpsC4appgYKviBr9jv6CLNeKb1gsD52mRwZ91qKKojqJCKobXfejrheze",
  "key28": "22QStarpvjDwXkXbeCK4zJmRpGuHEm4bVcftvGQxgd6GARCds2RkKQw83i62fhkeRxMcvR2afvdgdwJun7p47ArX",
  "key29": "iK3XNXkuEXvGSyBfq8LwLR5morw6pvq39X3eSyWokAz33g1kTm8Sv1pVHwgb1AsepUaz4du2AjHMPsAU94nhdYZ",
  "key30": "5ZjNX9NniKgRYhVvhZcLSuphE6jfnuF7P7wh57hhaJ4ZGzmndVwhmea7FiLhE7oY5QJisnSxPdGtNuR8SJX9Ybu5",
  "key31": "5kz2opYmFuZT3hwyV824isVX76vjnwekn53LENBhez7g4UtS6NKeqoWNa4tzbAAgTpZg7m169u8R6zekVA95nf1i",
  "key32": "5CTBr1DTnKdnM5urAuyeGLH4YLqzojtVC4W2nrEjbjDcDvzm9VUkUpb4cr4JgjJ1uGXHvdr5DxsgBeYrCqFbTDXd",
  "key33": "52n6fw7SyJVXG2C1L92gQS8Vt4fhteU4gbKSSqfYE7YbAKUox6hEX6mnuEXCneA2f9GQPr5LE8aoejXV4yaCF9ZW",
  "key34": "29w2HrEJkvVrXoSrBubft3JCHnTFYPvgM2cxvHAt4hGL2aGYfDnawe75ZtvTL2qBhCZyMSXbGbwVoiVkidkirvF5",
  "key35": "2w6V34XKTBA6tMphanecAMjrKiDh3grNk7ngv3WwFuYwzjqsyQfxKqeHUYgAgyW7mogvxTt3NMBsexqCJXqq6cSa",
  "key36": "49YWZTvM5BuupkFxtm3Y4DJEGqGNakdFAzVDsCN568sL9xm49yNDWQWjr65MsWCCvChyjjK47kYfVxhEnehUkeke",
  "key37": "3aSMtnRiWwdBVPH8tGxwbBcYFYu22PBrsUrowFQxovjF7aaGJn6DekwomnmhndNTDcprm9yFVZPJbPFiAquCBL9M"
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
