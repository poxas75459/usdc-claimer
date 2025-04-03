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
    "Z9dgoHEEPTPTrLSDyfTRRK8vrxWVMNHiA94qfoJKaawduUzjFEKFZP5j6ZstWDjB4iaM2LHJURkEEijgx444Xfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59L2WuRpEg26GoewMpxeRXR85nr6Dxkxk3PZa8F8eipJCNxPph5wQy5gDvj3Xa5SAmQejkbaeUV5zcZsR6idKPTy",
  "key1": "2aTPzSMS7dH835fFu3szo9jqGSAEdQpCiNUHTXPbAPsXAzMAsPC8Hdn8jJyR5PKK6aGKq3sjhjYK8qNzhDFdEk99",
  "key2": "38FWPjgBioY8cFGJ2AC7ai8tHSfQqZietqru7rmx4MbiEXSXaq5idpf2Wn3kRGiFT54sPd3uduKwNSJhSGmgE7rq",
  "key3": "inr6iPJ21hjoPfFFHRJqDmxZ4joeDeqwKmMbqvVUbxj2xXQxzMvnDVDLHyFdHwWvMafP3rxxXF6WDjdEt6AAZjx",
  "key4": "5ovg5Bu25sMLt5LYj2A3XPZbJ5D3cD8YLbUoRkD2gvmFutJKaap3WKVfWdwM3o93fe1zuAMGTBCtx5vUQ3UinZ9u",
  "key5": "21cmVJxWP4XUDKCjWi9tUHw8hUCdyxpC8QcVSiqBqXyxDWCfnZ5g3YaJWJRd4zEw4wPt7r9Nw5mfoES5UdADiHYQ",
  "key6": "FpE9SZ3n5Ki7jTZ6HeNzhg8f79CnG2q34M7SJNh8bfMyvcS31A1p78FxoLKM6HrLGvrqKCzKFmeaKA778p3uCEW",
  "key7": "7v51Sjx3AL4NyPJjSVaApYwNQ2Dax7BkkH4zrNeDBbyEammdaeMkmNGhCS7N7km8c9KTik7feT6TWUQJqh4BQrL",
  "key8": "29HZFyqA2J2WKGR52MpvMbpvP2iXJ3eyZ83jusM7x3QDNVK3rFFjpkEoRF6tzaPUBurWf2CeKc38XW1EG1jfq7co",
  "key9": "663BN3RtHf8o9PH7J5GrounHKs4rb1Ckf2mE3KirqjYCWMSCq1H83Pe4fEkzniKxMMLwB8kTnbdV9X3mwXXKDtA",
  "key10": "3itHCCxen8putzgyiRLSbXtV5JGS7ftGweYiqxBSbMaxwnKaSJoNXjgVvuWmompj52JM5rF3KkfX2h2QkgzDYpa",
  "key11": "5aDCVXCMY1egoUHzcRthJLe75fqwhUzBhfVnkygM1MtphabP9MudEmYrt6yjQW79zopdPHhCz9k2xQbm31T55nZv",
  "key12": "5ssEsbNPUQhJ7BiNC2rAcLFUB8WuSGSBvnrAqrByJvj1NqFZy6M1Mtpo9mMAjfMkBxuQm1vxKmriTLGFKAM6nvFx",
  "key13": "35HaJsyb6uC9Uyb691hLAKWm8jTHhCB2kviekbjuTegzXH1uba756BSquLfSBj2F4NeiDn2N3aADawAnc5CVxj6j",
  "key14": "51NFiArAjZVVaa6P82inqAwNB5h2oX8kBgPHXKPPezpNoSeagQPSd3ozffEarrPWeon3DGtHiKZ6v7kENUxYUAVF",
  "key15": "5WmsduBbpH3zAZ3zgRk48rffUaq8hrhKMFzHjauRxzZgKWuvSESb4zhEXZK3761qV9QFzLuRxpaLRkzk5JRCjsSf",
  "key16": "6pESg9NyFyjXemfAzMtrmrpPTkETqeivfLKUYSZNU7XJSrJkHvDkA8ciYi7M8JXC8scsnYHjF11gKn3gpvkQv4R",
  "key17": "4WnLvWcZaDpFpZVCmcxL35cBDzsJmhiaZNgKPg2PT4EEQUVoUQ3LBV4GvirrhHZRsfFeU3QKnoSizWZ5x6wqevFb",
  "key18": "2ZpsTXYp8aiz7YsPi5A6crgaD5VabmMJqNTAVhz7x8PtP3X6f3ZNZ3d1amDFTSFru1tGnVnV7pcx4KqhaHqk2YuM",
  "key19": "3iU4xdfhipNWRs5ej5M3HWGV1oaiRbvtjjZgqrVLYVwXDiTKYtHv55SBSXohaAG2ARhJEr1jpCsDcoxAYsNy8rgV",
  "key20": "4MbAmQDpheYFUaNrAykjKpWmBj2U2FGSZ1ZPx9dXni1cBPgTPAih5TtiBAjz31He41dQ5Y8r2h1R6aHhEeZM3ce4",
  "key21": "5qB21jWSSzU7QnQQPWycWN8H3rdKPnnbs1SamiLpyCHsGrSfmqs5nFiTbqD9mhdTGN5fHQ7NjntzViZcSfysiyAk",
  "key22": "46cLJ6M6bufqZaEWvVAvVQPDBNrTEHZZGBVkiQQae6zuGxpYo48rcFNhAWmhahoE1gXme7DYWTVxrR8EfwbpChNW",
  "key23": "5en2yTJ2BPngfsz6CXBpPwiSTiEm6CEbBf1h5d6c78HTp5kotr4UHcPvzDThH11m4SLNpaeSATwr3ipqfZ81vEUp",
  "key24": "464D9PDMTP1MuJcHL44cYfuNEF1zNm9WqzRDpzqoELEy5PamqhmPxmuAcRXLGiiKEF7nJy8VwXKX6Zgf6Ue6kUQ4",
  "key25": "4ycQoPRJJmwPWkj7bmyHud2M6gsLKEAUXc2EtXD52okVy6eMYj2h7Bykdd2Es6sEWvQ7jnzA5LpNGiSc3ACAP5n4",
  "key26": "2CZECugzNtZWjwnx1gPWajsNR956gWQTnv5WAEud1p8TTCBG4npsYNoWynt8BHB3sKP1B2u1VAjC1E8dXw6A142q",
  "key27": "2DE1S5EnrbGmn18jzVze9Yu1s7s7zdxZe2Vymgm8CARwrXWSCWFQoY7fQUEoCJSDG2Ua8GBPkSfyiQxdYvfsCWQ9",
  "key28": "2BcmRk7MWdJwzZ2DXYR9ZooJDjQAPdr6L8TCA7bRZcjF195wARgfQW4W8yfLsMsD53he3GULczEX1vr9ZjkqaVgu",
  "key29": "2gNE2HaejDvWDcZhbHpMLJpiyW5jy6qU8KoU8Yo9CGkDG14EdHgBkShsngVWnEuu4yAg2mBqPss39RsgmPa9MHeZ",
  "key30": "2rfgzz6jGCzkzQqYuRcvzA2UeVwm77axje9BhgJAvN1g21NyzTUnDq1tp5xrkCgzDABf8pXgKzCyTM4Hm3TaWady",
  "key31": "3ruBHQuKQ2eFwWKeZVo9wpenHDeZ7yCVqQFymxV16XUcR1cLPzGwyFDANYa1tkXXxw5baJ5Ko2JueE6hR5KtToWq",
  "key32": "5HXNBbXGoXdHkTnwuFHhCHHw4SA1rGxMjmHJFtrTM2jk8hvsYnch7KPKy5Ljs56b35icyGXtLdKdz73W5NkzCtPx",
  "key33": "2dEkWEBpEcik5ThvW1SYEbWWgkZyMHZUyZTe6c9tWNNVDu9d5rsLBV9yWhJx97CY2AFpFw5qUhcCaMwYKrthCiZ5",
  "key34": "2dXkHtUFfaCYBxq18yKs7J3jQKPjp27P94tXQtyAKqxfPmNL42LPLd3tRw2DGiUAdAuyLjcG3wDAkg8UTSnz442W",
  "key35": "2Js4jxmxJ3RYfchvBCuWgZ9YSrF3PGYNFkjBTNifGiJNV11jKwf5tUNXPd18FJkq9tFTGVyQgeBXruXRvBpiYtpN",
  "key36": "39PTV9Q6D6hrTrMmogXFsp2N4A6xzzFCiR5N184We8BMcKX3DqJPJjMTr9pXvTrZUXujhANoocq6F25XpwJNesBt",
  "key37": "4yMbJT1JVUQM5tByKGZyikeFVfP9jsg6aKJajMYapBG1BV6B9vn4yS3xPcVWWjbsEK3P6sSQKoAv7AKiNZDPw8M",
  "key38": "4VZbbEtn7XtmMxV2odQwoyxVPj8Es48ufWzx3SCVXr4PFFQigBnhPFMpjuBZZ7h1A7kEZY84Nn5yJU6U6pBPvo5W",
  "key39": "GH3PxTH6AtnKmGutkN8euCQxMAeUcoL27DHPPFZpEbjSVxbUsApBoWL97xCsVZPfxx8NDQgBotJ8yi7jB6iRS9q",
  "key40": "56NRvNhXrKixToEmaV95Jd5tK3ATXMBwwhiV1FHj4f3nuX1kN3RmrHU4qDSCvG7kYxogCx5oUGsvTwdpXjWcH1ua",
  "key41": "2P1KbFamdV1AkKgoCJoS6Vh4U291ZWE9ugPu7b4mt5vgedFfVsuFPHsz7wMyAvhPmQboatdALN4NU8wiftm6reaY",
  "key42": "Jibakpnjr14GYhsGrewLDWDVBKiffA4MFgHbQiTzqVj4fRs32cacVQbEaf8eQKNrjQ4yybkX3i3gg3AGdPsUPg1",
  "key43": "4piKZiQg2cgLbHqPQyXGdfJuezZEx6a6K3YyEZGbxp7nQ4wtryhRmAW4L1fzLMiAxcyggqRLrGhfcmdDi6eiuTCv",
  "key44": "311xNE5QqjhEzPgqCdkB8pycEXHFtC2p6L5heiJ839UJ2G82JSkYvN9PWRHfRRcLcC2P6t74oNQGuuyzce9TJmJP",
  "key45": "LF6me3whN6zrUY18dw1oS5U1h4U5VCT78qUqpfuZLw7uzkzuEyqkXfUg6mKokuqsTyCNGKj27jiEzGdY2goroq5",
  "key46": "4R4e8Xm4TSHC4KkMWh7tapKfgg3WLoe95Wvh9VCArdoXQZfdZN49CrDjhT4EUxqne7mj9zR62nNBzPfzCT9X6Wwp",
  "key47": "48speL1QBjqqGBQy993vces6HPhVz295Cd8A5TrdwwvR94Xgb97kLkjo6egJnkvkVfh91JV5e2tA2uWKyJj9GrZq"
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
