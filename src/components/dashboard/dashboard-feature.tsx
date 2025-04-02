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
    "44ToWXeKX5BknvMSrewPucK83T7AaaWBwHUcFmYm6g39zEQn3SYyv7hJFKHLCPb7qZX5YxURmnXxnvLn99SMwE8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jRZoTuMT6nZyip9f1LrUxcX8sfTFYrKbqVSRqccx3R69mU3aAdwLeFTtW3nMKenkd5nwvgz9fHuGCYd1jGNrRhz",
  "key1": "BEadP1cPRmb5XpXvUoPsyuYqBAZxY3T41Egyxzott6TRqUaM4ac6uzLgVAJfLbumKivr9ih6pZZwWrGma6YeVrY",
  "key2": "3npdiwwULWG3n26j4kuiWjoLRx4FfRNsysDkfJPZNppr8Ue7px6xud5Jnijgw36nCXfGMe2GKvRziwLj1yrQsihu",
  "key3": "4qgPfCNs94P3CixWNA4GQ3T9yN1ApVJDhnSJcUYhDxAdjg2TPf6Cps8j4cvQerng3nNswJVrG3yMPqsxzgiTrsrd",
  "key4": "4jH3JoApusNuNQciYLH9n8fofNsHbXDvggUb7KzBidsFB45LkXkv5arHejRr3V37bAqUb5n7LppmAFroZ3sT43Nv",
  "key5": "4VgvTJE97P2E5vY1wqm3q5onPDupcco6HVfMzHZdxrSpuMMRLhGzqojTiy5wd8tCP1kmHGHdebZ3vweox75PauXJ",
  "key6": "3MLdSKRFUWfiVNiTjfkFks2rqHiNTHJU42EzBNNP5mLtqXgqY185LyZsQgJ3uDxn9qwF9zqK6WP7Nnr54VMfrCnS",
  "key7": "2NG4stQ9mVSVCgMhnQQkFre8YGqV5Y753HNRzeQtrMH3TTpxoK6omSZWwZ4HNSErkeo8eoLMNGs4afYNY1wqVySV",
  "key8": "4kAzuziCWUCgwRoQya4UH7rzTSp99R3Yd4x6ZToQihfhgrq6TE5MZ5bWHj9xMQ8mrAYZatQYPAKRASVYWgoEHUXF",
  "key9": "3F9aodniEGnS6NLyG8HQzE5KrHhyjN2GwgFPfgZ4qj1ZsFwJP7N5UjjMA78TG1TYpRKnpYwWW5rTsAexd2DxzHjv",
  "key10": "3NuLJTWSABseKYWrgRCtAhVH5v5gyLU1hM1SCpp9E1gqy3GKZtTRB3wBkqy86B38z5KmjVKvm27mg39cgaP8iezg",
  "key11": "3zPbDHT8UjmQqz1QqSpAzmZNHUwnA6z313jV5iVfm2hHsXCjWyZ1z1fUaendnWmS11cfwYNsPaiFDeyWh9aVuRFB",
  "key12": "28BUkAGEPDbykV17PG5MyDJbTVoCKyxaSVvRE1xK6x4wdyaGqeRfwTKxZQZnbh1PPmW7WgS4UYBZTDcujMn3e8sp",
  "key13": "21rzimZ1oVeyq7JcBoVrJnLdfDLBu33ZtSopbprVW7CY2mW99hoMLWDSBiWQ6PoqfNsFkcn5AgDn6Xju1YSL3pNd",
  "key14": "2hR8p3Pr1KvRgTMM2sshoSf3WTYzJEavSCjiJkEjJpxkBGBaUrPkkeHcJHJEJqko5Rwd4N6TfcMETwPSBTKNGExR",
  "key15": "3ZdYgy5NTy86TXwjQ6c4S3Xm4q2PnbJcLcvwGajXTugnTmtxKRvEkPi9vtwDrTeyTVyJBJ8nYJ3pawQs9LrYSFZu",
  "key16": "3kdsHKFv53xtf9NHx4Te3qwzH4GyxBt6RJgZ2kLWHookn9MaViWsfKqZzqXgnqqgzfpJxL7gWyFRKxFH1gA8uvWP",
  "key17": "3D6Dx6rNfxSLfa8xN6APmipKFwfuCx7rKGYoZkWB3uWjM6jT86BH2dnYvGKJAHAzDNjKNosxf1P41EPH2HJLrzSt",
  "key18": "Db24jabdxxqTF6cos98qPePQmFL7Ua51M9s2vHF1TZUoAP2E2MpcgbsAP97D4oyVQCrYGwoNU9nVYscaAZTzsba",
  "key19": "5boaMj7M6j3sPi58r9frWQgu9W3PRjhntXW4LW6YjXphY9nDuvCKcKR16kPtkbBhvEbDNyaMa69sdj4LAJaqNAFE",
  "key20": "4qUJkQCywwLYQSbDjxpuFXZyyfBHK8bmY9LDDwy9ELk9n2KZS5Qh2UfMAM8sU4dELPWfrxe75iAKzKjCNoHGxGbb",
  "key21": "4yR2ixFWyYubQXupxpiCyMtHA4mtp74ax5L36jH7So6hne8y8fKpXt15Y4WRPE8dfZycVp7J9ueFiiMFNciCHFzq",
  "key22": "CqX9u2U4iabQ2Qy8FJfiaNGaKS4eGZ1ZoZw5hLtmJ9fS6grbx55f29asMZSWzoffFte37Sc6k6ssnURukpWzmw3",
  "key23": "3K681BGxWG8f9NoEQWKuC625XUezvxX1NrtkbA7jzQZWN6NWkgJ4udYffBk1MKa2kbaXfrqnAfEEoxZbgDj3hsfS",
  "key24": "4vwMr8jRsEphNz34sgnNQQCTyMxYfbewZWMjaTjSpYHXsxGSHMjguV8HhAq5EHbZvuTTUUQTWTKjk3BQoGmwkzw1",
  "key25": "3y21c5eBfR9K7Kh569HjbuhnThaM27ywevoVvtLdMwvHHu5LZjXWfk75jSdbZHmZ13ewvCDgkyr24b6jupoUjStR",
  "key26": "4XSrv8rC9C9qH127pWNZRcXFNhsAsdtD4SCY4VWg5GTU75HhwKX2kwbUUk3eAkSZSsfsCd7vRuZYXT6bm2S9pwe1",
  "key27": "2TBVHgz6qdUxHLnRtY4Zr7nqHoFMaaUwmLgZd2Bysq85HB6aXe7MH5uBfbZqrFFQxvMWdFYGhRTJ82tTjidvGUNi",
  "key28": "2Q9L7YUAW9r7p7yBYtQw9pcnQ5DHVZUDyjQdQmzKdL9MbTAtnRnqsXtbyGBBjFPS9gqyznCX7VZL18KtRizsAYqu",
  "key29": "3xWhyPTQ1YHAKvDViq55TY3oBB9DLQ1mnSHax37nXHwFqYBj2P1N8qQkES815waGWjkmfcoWH9jvqLcWp7fYiKtS",
  "key30": "5U3t37GvLtXJPWaELtbjY7H1fHDommz72SZZbm266t3MWD8fxpEt6pAtkpuPFcLUeeRHE6uBp3TAAif8Qtjokh5a",
  "key31": "4YzX9FpcqauvvnPfQW4xnncSbzn7ZmYb7C8VpWoGVM88LjhpsAkRdtKuKe6F5LgqWYa8TDdvXXr5cjcuDsH3xUrZ",
  "key32": "4YqaFvNgLSm2QZEGAHnMAit9etKqrmm8bzWMKExNvnhbws9xrH4mgPyDmZvE9TsrCAJpmf5RjtUe3ivEDepLoZZ",
  "key33": "VDwUDnSrqkhy7Ey4er9VmkP5JcxG4wkveEHKrSCCiPnA9MxGEcJZUGw7WVu9m1i18ZogVZanF9VL4nvzLHEV88J",
  "key34": "4M736EK3uc21bEp7oVJkiaFwsci8wjNtxTHs1zzZtuDQ7zX91CvFS19yzfeDpC3v9cbgsi9HZNJeykdU3ezNxqyh",
  "key35": "2cxqCqRi2eyLJQcgFqmo3Riio5uzBeMHEkNAvk95pfLQtfBe1Z1W2WZxSHhABQLsHc2e4oHWsuBjK6RNngrTJVY6",
  "key36": "4MGPuF7gn1BPae1UyXKc7wqqQ7GWYf9Hytxbqt3NKi4c4gsjxE9kwAxjHgzbnWVuqei2x3gxFB6RDh9eu6tHVK1",
  "key37": "5xDMVPTmS2ZkRsZoPUhN4WvFkobPb8xrfsYrbbNP1za68vzvoxnfyqLN12vrPH2Kj8YB8Z4XNHximz3ycxwK6G6c",
  "key38": "5ToSstm49xuepzqCdGpemApApCgiSCMhXChsgfeC5soejniwUEsEXoSoe1gBSKvueZyMeM8cDkYJSadmADKnx5gU",
  "key39": "a9861qoh2R2TeoxtnSFoh99LzB12x2GnPuTfuPCi8Rx8byJKLQoiF8cASUwpwfXfSsYfoC4mo7UjQTcPQJkbi6X",
  "key40": "4mpEYPcn6dVtQ4K12jJ22SkcrPiFx9pWzTRtspn2KyNpTYQ7TSZKqp7WVt8de4KcH8XxnZYsycaLnv1gBKPLMRvi",
  "key41": "3n5uwBG3wsFf4F21bKaQrMjCdpPeRjzKLiSG7SumNgfFSFJoxkPEtCQJ8WGYCQ53LfjjKBTKZVMzrpBRtDgsLmkW",
  "key42": "4W7ipdULPEuiBUQ3LiW8aF2ZGFa7vfSqUfNtDfeWTPZsKuzkfxPNZqzwe7G4CqfYbChW5z947VE3kDJvt57fGnug",
  "key43": "5p2vc8KMAm2bLJqdqvRDcH2R9xXR76Ri12tjAxekmm8vxsJcyz2XWjpEzkQMf5N4jCDLrRfBwDLdi1MFAEkMhywP"
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
