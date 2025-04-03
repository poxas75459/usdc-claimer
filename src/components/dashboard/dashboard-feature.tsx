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
    "4UFwZC3uhx45a5iSVzXQamiw1dvDH128UbMXBdr7SXq8ktJM2Lrs5evjUkruiaeed1BvUBnk3AsA81fE9tUbjdZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uLY5Sthu9PBoMTSvDX9Gr7daNVyX1k4zKUYh7nUbE652g53LwQeGVNAJx7jGiWtzn9VhExMzC6uxemLbMBF4y3B",
  "key1": "43KpoP3mxLrKGmSSjBJ6yoswn6XRjuK2rYEarJUYrwUvSAhKFGyEwcruEvdFqrVejuKBN7pZH1jfws2TCRSM86NR",
  "key2": "mghSmmCKLaP6mwkfCDTDZuDkjh3Xx7mExqjBeVneCPgW4uAf5mBxiKFaib9Qr5Eju7oXLWec5v4jNEW8rGubCZ8",
  "key3": "zteJoqCS7MAaowa6rdVrXYjcvFfzvWAaXR7QXXyK8WNDJjkrjtRAbDJzjm8696SSeDmYS1x28xKUMJ8o6rKDLEk",
  "key4": "4KCxK1wnS547dwoRUtmF16s8AdEsVecTvQ3fkZoAVjCLr21Wd98WY1t7rhrrfGRMfMsP35tvxPRc3MqZbmzGTtw4",
  "key5": "5nBNY8TPaAm3XyWZPX2LiHzNabE6df7856Y5moUj8uMP1LSSSSVgGc5A2bTmwPLJYYFij6mRWuvRxWckHt1hiW1e",
  "key6": "4BxwWho1CJZXeW7hNkB5UgJRQ6KwmH4uBKo5mve9QP5eH3qcqy9QQXMAg26NZByeNgFeTbkHXT9ATHSutsV3RegP",
  "key7": "Hu99AVYJYJviVuLFG8be2qJe3QxruLA8jfU4cwJmCiLkF8N6sK3GRvaNRsCKJK8HUwvgrjtf5AjeHxUGBudBgCt",
  "key8": "xqFaEbk9PcchKEz1EH4NKwkon5S32nKZchzx74vGfhCfz1EFAxDsZEKQ1xmXkmPffbTRjk9CJqbYRgjAJwx6x54",
  "key9": "57CmJNw2S4UXWL74SeNJLSVRrfYbnykMfUeP2L6TtRUVfSVdB2kFnX9HvcKcN36iCabghsykHZqvk7MyR5R1Tb27",
  "key10": "HjjCJGs41Mtoqy9kDSpu4DBo54qqEsKba3aA25Zn4nFfiV5z1sXKnT7Q8edziXz15pgbtuLHQzoYp59YJbES3nf",
  "key11": "2tVZPT97xPr2KtrcdxaooEWc3PoHuV1bJJV1fyLzmQ8ZwiwEZQSFsPi1hnWuoTtkPCYrF8VJYA9PzgDcothNdwnR",
  "key12": "2aJq51FxW1KA9V8UacoSR1d89Ts7yTjP4nygdpPJpVqXtTvoSurfni7d4PFmQdEPyteFnxUVZUAVH8HBvW75rvZs",
  "key13": "1ymWQxWFmtgBHo9c8XsFEYmFfA6eiCb3qvPPwTYY8t7nSxeMaXZ4HjTDxwY4nj6UvKGjf7gA9KURb7PEFx9BkXY",
  "key14": "2QZrpUJCvMYb3tZPuazRB4JEqxph75gdwH28VQ5kfhp6sgGy4r1M86JZq3UPxkVtw5k13HgguA5uEDFxKaj3Cqcf",
  "key15": "5ACiy1NKnn1tiNqVHQDyQHTEgkNnEfNHo4UBcTv23kxPWJD9ZqpbXs7VUoBHPdBPN4rX28ADes75bpXJfeFVLmCh",
  "key16": "59zRQvwZGGF1PtkJ2prMLVpwVrZnjP1W9TqYkmpv7EyT9nZCDh3EQyt5MCfWbcPephy96i5DqwHHUBKgsFwUpqzw",
  "key17": "eWxMkNPvBMxuMby3RdphCUZaLtwZjkZYYpMP556cdPVkCuQsrFZnVvKWAG7QyRXUGa7YqyLvF53UV38BQPu1iNF",
  "key18": "58LeuhiecCWPXxSuGPW1KBgHFdjpZ9SUmh6KjmDtE6xg37QBSNzyr2N221ah6YwscinrkYYbdiHrkuBG6dS821LP",
  "key19": "bxomozHuf5yvxNcyfBcNXdVB2vRjNrirLUbsUSGmw34sWE7W6j1qiEpvNygt9qApsAa56UKeqhp4G4pEEjRT718",
  "key20": "oe2cV7MzBNjvPyRMU9y9DXS9zVJe4d4BD3qyQertSJk3kNwXBMeVLqJjDu4THfa2yiK2e3Jnm5KiSUNiPR9frkG",
  "key21": "33yXYbtwuRqAoZhqtZwG8EPeokWvt4AS3oPVh9azX66Yg57ADamereyJs16zN3qBCRucamNk58uKNL6b9jx8yx6",
  "key22": "5n61KNsUxwP8opaBTf8SJy3hmkcnK9pHzprfx15bervYJiF9J4LYf3QZdjRuWJXLuwL5cTSDjt3ADxhKcHkFDNUS",
  "key23": "vn4xdzRRu92y2wxR45n1coe7BwW4W8YprbHwLxyvc9iaSArC9SWStLsoZmvQ2wUjiXFFoRvFT6AFHxDmitm6T2P",
  "key24": "4DXFrt7PTNAQgMfjXX47Ej8mQS7VhhWYzY81goLBT8fPiNkyracknGNPN4vo1DRYdELWC6BWjJBoFThiVf7kxHSR",
  "key25": "2jLopKyNMoRkppZ5owZZWuaBJJAGCuQyTGQ8TaMTLFbt2RSnnN7fvD6dYH9wSezFTgz5cbkDLQkBdHgbpPJKontt",
  "key26": "3LeqsW2zt8ncW34q1y3uC33zKQUCKHWjvTFr7KzsMqz7Z2wJHGeFK9uZiXND5ELq1iSJ9DHb9dZACs7oWDw8wdBa",
  "key27": "5mUaST5sQdhyDukSURe27nXMi7odJ2ikZ46WfuatytU4PwwfvEWcgXaSg9vJC6jqM4P4pvgcXXeMDzjXqsWf8Los",
  "key28": "2PrjmP4BmEjVTgunt2jkzPaLpTtQx4v3uTkoiHNjNP7qR7eSaGR32z4Uus7VZhPKDFAhNxNJHsMur5ppWGJEhJhv",
  "key29": "UbGDW7mAbxiuNtktscGhf571jE9rtiavcd9hueeYP4BJu8rFGHLz8n6DbyPRhgaZeyfTsS9gS6XsKWMUk8HL2E3",
  "key30": "363bdKwCkLxzfJpHFsMqo5Ebr9TgwHuXiUyTGkkp79GUpr1YnRFG98PUxPbCbqxmNbWg2uZcx3D6Vh1wKNocu9av",
  "key31": "2LkoSF7ZjJcQXFUJmPxp7QkMVhsNBKXYEFsXfWeQHZsGqDK4vbFVjuT42iyZgfYq4mNshpe3Wj2uk6NvQH9fzrum",
  "key32": "4Rqh9Dfej9QXEVoEGebBrjPiF44aLxRNYSTjdjAXKzSvqGhT6xUiVRGupdWaFGFWpbJD8Jpdzr4q2FeTf7EFfG7i",
  "key33": "2LxrrjZzQZDTeyXw3CDvWGv9ou7xch8P6zRuL4coaKKysdPjcG7MfZdntCfrkPbTPSagrRS4bZqVdKeYEr3K8hDw",
  "key34": "2Mk4wVaicCTY4hfXy1tE4aW24FbwrioZji5oEhvWsvmhSzdzJmvom4ijPP6HecMrLyPHRpxAHcs6T9UwES6t3rVg",
  "key35": "2UDhACJ5KogwcvHPtsNEvwZnqQC4FkgbbagsyCq1jpwi1e6esrXBfin6eKdyhZoA67Ju1DLmvnxQbtwovoFPSV2Y",
  "key36": "5tzA762LNx8ExxgFJVqgj8jnTNxxF8txVzwUuKzuknVRYXmQvCHrsyxgSQsrBNWLfe3ivuBh16iBSj4PQty9SzPA",
  "key37": "3FMY395ay7hhtd5yVthZqzBeW8GUtRiSFGm2goDcwDratkDVgCvHRWUmdy4wZC9UAvu4wXfgGghxry5FiSQmzR46",
  "key38": "eZVAY6D9SXGQvwS4cpGbUPLEA5dJW5T2tZRqtG9Lu7HXET8qaHaTXMuRPbqiuWbnzk4kyAjFq3XjHiVd52XKLJp",
  "key39": "5qw9RqVKJXPUp3vsLVLu9eS7GSkYDRRFfihQ8sNXjF6nuVsn2J945EKd5mvbmiQs8zyiL6NRH9n882yUuE1rHct4",
  "key40": "2LNYyzLtXp9RiGSLbFkprwtaUnkJYcHF2YQgwEczj9XjKEQdT6bziF43wfG7Mgm5Y7t18isLnHpAHoFFzEoZQvNJ",
  "key41": "2E7qHbNnuRQspxYemPfV1WjNsZWeu5RZvLDquiGjS9QkjCNmVKxAGt2GG3ZAwrVLPrNdaQoYNtrghbyo1LFKXDGA"
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
