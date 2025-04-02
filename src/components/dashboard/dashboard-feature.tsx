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
    "3tDrb7dXnWaRTCftiRZ8XpiGwyVRgWtWyrabypHQeMQfCA8okmvvKzRZ3XnQEYuQz3wr5k7GszVCtGL6XrxSrdm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QkjrRLuM1wW3iDCTf4UbSq5KPM8dFQiTySRHgJ8bPW6LgE17VtsFZBbzpYqgZHWP6jnyJtRrxacL3hQVuwR5SkV",
  "key1": "Ax8qk8ayKfTusNZ9TksnJb5bTJP3s1MneChr2TU9cwdsfZvhXDKwaJMTuyxQJj5i98ivd7tcLhhCZMFLf514Jto",
  "key2": "3RdFNXTmn8eB3ucrVL92rfMuSncZWrg8Ai9G6RLNZTCfvSiKkzvLRGvdXVovthPznf8eQMbGTGjhYoWRNzsoNPUA",
  "key3": "2zkjRuue6eBzHjPkQZEpvVQNFdRHgdGMtRv91yRZBuWLrxoEbzWNdkQLQrhea1o9AcTU1Xhg7jpaqHWCQvVGe2yk",
  "key4": "58jq8vgpXkSkvMC5uxsq3ahg9h1u7D5jnEi5cExwqqFPNx1YPpJDyRpYsVKmk9twRiRMkCMQAuoNpCnYtwQCFAt7",
  "key5": "4CKzu8zbGx3jUQqv1byD3XwSNChhHHs57hn5EqJhBWXtBqJT8qWDVD8pWDoRhmU5Khfi9Cfpq2J9Ssh7w6YWJcYx",
  "key6": "nRY5Fhws1QSe9cN6QVxrKYzBhXmk6XV3eB3iCWXTDw2YMjiG16eTdKv2MTkkPf29nwBxn7smu6LPhjj35QwWic9",
  "key7": "3j8D7ixSQSRn3QuAbVanKK5MAK9a3RYAvowgyyKKDpxSDn7b598tphFGCZ9p7J481g9Ezd6fVfPpVZUejZirYRfn",
  "key8": "6YWqDR5jV4gVarVR1NGmEqR49aXEPd3oAwA1vsoZ65dTjHDUfiwAGHJGtY57DyVeWDx5MwMzXJqw8VmCY818XMm",
  "key9": "3HHbcShCMmoDwBfRvLg2YEyxzvT4iFy7yYRevFwx4XYNRZuTtp2avNmsiTPuH6N9rjN6CBJwcZq1wHrwZKYZAUFr",
  "key10": "2AqzL66ZBL4H5JidbeCASVWJ7SrtfkNA9XnJf85wNgNuB1PFVg5TZhdekUFCD2CzXUcjGW5ZQTPfXut72PRwhYrN",
  "key11": "5anGejm9dbE188NMaUXGutekasHXDKuwoFUr5YjKgPhUA93dF54bnYfWv9sKcwAw31G4GC3rsYb6S8eN5HXLJfuw",
  "key12": "GK8KWRojJMSc6oxzzY13WWbducdLZ9t3fV1P98uyfpq4BceWAbzzXF3dGPrH985vMCNGNUaioK7ppvcju39q1ZQ",
  "key13": "2wxFqXKqrZiuEREa5NuY7LLzPE9JyvfT6hstP1S6ssBSM1yhHTKMs4DRGKsvTdhqgQFjJA7szW9UBtueUzVyFiFD",
  "key14": "4pqm9Xkd7KrGs6FPXDHg8jQwve1uTSzZ6hQ7mHNxvai5cALg6ixKB7eaHbPWzkrxCVLhCFcdGWmCMPqRrHiJenVG",
  "key15": "g2D6VqYZFz6QHoLq2eonh9GpoxwH1WcjmBpJz6fdGNfrVn9TPrSygPeXYdyVqGCWQD3JXPRZWeFKRsP3XRBFEhq",
  "key16": "4CHBubzQvd76Pfcdb4vdDkAfCCqbk8RVLANXPFfYXrN7DDXgqhqF7rUmXXZL4r4cfgpJnxSRL6hPemfVuCrwyPGU",
  "key17": "2sM5o8X9BgzdLSS7PcGCLsJYTYQe1HgYbF7uagUUiNEPitKWWFHZVKkfkkfFxwh5qUuKCBhri6nUFoDsvDWC4SfE",
  "key18": "ZNsLpqdirxd87DaNoNk43awJM4s55dyCmnWZ3iPiKAcn832ZrcLZsSTche8Dxr5XYSRzfECazJqufruVjmvrR8h",
  "key19": "5WtkNeRdURXU3Y7eJJ231X1eP4W2QeFwthTGRuGLsE9yM8DrNPYKRHKHhKNozSrY5WoA389ctYPXTwkxtTeog9HK",
  "key20": "3rNo1sEkzLYdk3NHRhDwD1Cai8AhQVjFfkzqVgBkUnbMzQQtsdnjJw4LEi4LYg9vuYGTVC1UyNwSaF4tUwju3ddQ",
  "key21": "4aCJfB85Vi1yEfhHnCWTcTesGYmwuxVaVsgm7arbkazCmiAUGDshdicRLcUxJwjDGL5HKe82qyx7F8R5TYVXMg64",
  "key22": "1UPNhGCLqxuCDmCM9cwSZptp2eJPTi7rmvrqqaFPhZ4Cog1orLZJ984b3rRZvXwZkv2kxSJgFZeFHwhfUo43PJ4",
  "key23": "DNCEFh5gSCSq1mozCa8deWzooPLWjpRNMixdC4AotwdNidZz7jtVQhRm9bU1H2rtAgA1KzYcGHF8SgutNoqdp5R",
  "key24": "55e89cQcHxAmzMKL7GaRKLRA3V3MJeWyCFvx56JCpYdNzo5dMDJyjCCvVZD7VDp1pkT67nk1czoSt1voa2HyKqV",
  "key25": "5mVHXLzTWdQhaNgsv4hNfYyAqHGanZ31nGThH5GszVUMmBBxoweB6R5u5SEfLYhSQYCc7e8Jcku5w9ouSnkPrqGn",
  "key26": "49oRn3jqKaqAKcs2jbxStNEME2tiXG3c3i2RmoF239VjTGaHcbqrRBk4nAgTVr2D9UkLQ62J7ECicQMBUiWRFX6X",
  "key27": "4UWHo3XyeGTUH1tzX6KweitfDpXKYgA59H9TW936dzTFN8qKQcb9J7zhgsCzCL3xJQoEK9HhkLbN2DjVpASJDpph",
  "key28": "2qNvp5CJHh8ZZqygM4WW4d598iSaaVxWV134VvHG5DLdJGQdgdG2iDibMhGj2xCjWpMLmmPRCB6WKEwz7fPkhT8C",
  "key29": "5Jjb7xjEeFNRxDUR3mjfJ71iNiqmLDikX1chKdPXQxxuXqgbSbJWM6vSziVQddagKU1q3FDVAPsz4vgW46rwR45S",
  "key30": "2JCjprDugZpmthk6QVdRnSSiJL2yMoMwPkhR8GcPScgqfMEGg9cSj6zHqDvT9pZXHLMjAoqApXa3UCTPHyZ6MChp",
  "key31": "4jE3fFwAbuyvA6mHZjynNagxhKe4R5CQPVf19aJCynWBJ9GREpQSZUBAZ5z7unP11wTTFVh1tn7jQXHd7phnjLA2",
  "key32": "27mqtwvxXMWYkvRUxp3uNJi3ubnYZLYgu5ecYF86JdhkWceDmnMi7nJ85DmgMKBQBFyLzK59u8qdMEBXjGPtpyLV",
  "key33": "2272zCzQNVGrenBBCe28kuEbTrahStCFVcRjkBdfJPWDYZapm2687BqtV4BNzmBSFh6vHGjVw9LXWS2fFzGTbzZw",
  "key34": "57cc2mAgupgVCJL7LcEmTsETtCP6gJRNYtcTH249qntrn5rPxSiW9Sr4QuVqLXkqxhfwDN4fWtwUqgiZ4FzdUpJS",
  "key35": "UoLxbrJRnJScqUzRoVumovgEPRKZNJ9PPGhtZwUqyGy1ywtP9unRbVtmosSvWnjcYVmGACPBJkZAeAUBrYfjvLP",
  "key36": "5fG5Xc95iLL7taeYaxWteryie9AAU6my9excCSzMEfNG68kF8xtKHiEh3H66BZ3NK6uaFbtNSF6FguCg53GCWLao",
  "key37": "3wAeg9EymvLb52vhyYuCp1fiEgXMJ9PDL7NvRUXu9N6NdeM7txzg5nrcN6c7J3TnpiGshvJehWHYUSZvNtEU14bT",
  "key38": "5HKrh1gTUmr5pPHRZkrav53VZEugzGccYMepWEhH5oTCavaGrqjWfUDYnR8ehBseEVFaXKPYDVvf8GPqESWzJfWC",
  "key39": "AFVoCGeS4Qd4fXx32jz6oigvLBWUgspi9PD2wK3hpZZz4pnvpz9cZgELiom3gFTsco2bNEs4EFeYANee3MGFmj5",
  "key40": "5tKa8ESV1QSPXip8L18tNtQZSAuktdJyLkVkygSYXp7Yir2yDbPDDnZMKsnTGgvVCfZv6STpN1Qb4aZEGt7rUDWq",
  "key41": "3oeF3bqfuDv84m6ZiRXmiEN1C5XQRaT3HQARQWSHf8WeNcDgmNy6dCVMugr7ncS5AfM9z6w2a8tcPhFAGBFECmcY",
  "key42": "3jgfhLouohU8vqY1WMxT4kfLP91mYJ8ME4VCgWVhpTGmCK9FiGqgDyGyJQtzx4jbsWFoGUHw38fBcqDQC5uq96xj",
  "key43": "57SR8z9iGN6hwZxtSAwEobpVVJxsReT6Yqv1ec2aFuqVWvw2hEKJKbE8BNFC4r4LTTpepoLPDGEL84rjasdMC4Nr",
  "key44": "3QZq9VYmWKfAYmzQnJUF1DMBDSuiba6nYCE3yD36Go2e6SwWKtGBhAkyC3tcKe6H4z3Fu26rpfNEqrkCCrPMxnqf",
  "key45": "3iMvfARYGfhQA4EWcDkkKwLZwdqRFMV5yqYkvcu14jZVnyKX2PtRXG9TF6UdieQ2M4stceaTUKvQnvDx1UG6PNmz",
  "key46": "j3fAjEKn1tdV6fyMo4VaeE8yb7i7J1oMssHbCovxgqyzoyC9ev1t6PLs5oCFXk2y8WXQsNxcdASMNneschBETxQ",
  "key47": "5d6fCUmWrajKLDH7xFcCdCLewJVfQYLNvCGJh956ntBCcYUdhuiAaLH16rtF5UoRG7uhYAd8Cgrofbfa9D7WHjvs"
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
