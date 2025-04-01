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
    "1b1ND4hQsHuTU7PZYB2xFCGx59W6kKSJbknFMKUqtDxsEis5hNcAvF1YwxVnTtHdQzoK4DTfhwkz2i2EnmaSnJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qDABE9gXrXkALA3mBGvbhFajPkNM6T3oSagsZ6Rds1sFkZvrrYQB9KrbVQNdDvaR2ndLLSuhddGh3GGWayqKZVC",
  "key1": "2FaEAjqPHBQo2DqfDgaNqwDjxX5vj3iSw6RjegGihHJkiU1cGR6YM21ZK1iDCshTmm8rzu17cS22WrXTskP7WUKH",
  "key2": "3T5iPJupNb9dExCz3536eHvxhqAKEQ4Ki7WT2VNoAzRXvnajWNx8XpEB7UFTCwuLTUSwPyZXQrMmexhLgA1Gykjn",
  "key3": "5SDCvt2KbqiWcRLbJEYvCB2kp8QrspPRYnnJ8TczUiqm9nDGUEgh99wRduJPDvTULMf1J2yyLhz4DnTTL7eGr2bf",
  "key4": "5ckVfE2vdSpaXzhZEbYx58yMJP4Q685R5NfmGJvzNPe2ZdBHAWekpdhx17wBqtFHYctNUtawkQz8zC4tVyehBv2M",
  "key5": "3vBBEqQ4mW9zu9wLRSMGsg8x5BLZT8iQuTtyLYK9QiPRcHCb4DBb2yXZqVz1ARQ9ENUg7G6ZQCGrSrb7WHXcWrAP",
  "key6": "2MFzMjA2iszacFnHGBm6dJiGysp6YrJG5WBpvff3dobed3GEBDR61Cpyytg1wdZgfvPApJVMCrgQr3qQ289ZXJCB",
  "key7": "5VG29uHcsrAPWdcirGrEx9Hq19PBS3md3mFE3Fq4qzYjPV8j1EMfsNJb5pw4onGvg1sqqFmyJGHiN7Q3qJ3GiAyg",
  "key8": "3jK9LyY78etLNJJYJ7mvXrkXrrrbm4yFfXXfLYa2egzoL3Z2EhbRXZeE1j5EA28gz9j1bFGuMrmVhjtq5dBtqfah",
  "key9": "3Lj4rk4sLU5iGjHGWo7GLkAPphFWhWyhTAeS29EnZFdVkaRJmni2VqFEj8sVaB9QNevNG1NCjX9KJSkUvLnv7xxm",
  "key10": "3BHJg8dGt7UsCryJDP9KuxxjiDW7EofP5pBeiS82gcd58TMqGBH5Fdbcgqdxi1is9y2oi8ijL1FefG4nn2oqeg83",
  "key11": "2rtZprg73CqAJSFNyvfUReTJaytb6DTwu2kjZB3ysLSnG39aEt5gAJUYp4gmMUwtxE7M2HaMjAtaMWqt7aM2HHwG",
  "key12": "567FJXXAT2PG8MBM91FeWqHewGThyobdYRJzHh63oJZtZjU5ypPCK7FqLNeccPDnWyNSSA1HWDHD3ZcRn5dEv7RG",
  "key13": "59pePt8Pb9SC4jcKZdWy7iLgBXRhZULARQhFmDMvbSnQKLMGWmg2ukDfg4EsRuQxCGMUeooaJrCCEucu2tu3RB3c",
  "key14": "3x11PBNP3Wv2Wcd9E1cVeASuuKvDyEuRnCTVfsxd6FcJyWJu2VsS1Cvhqkz3a7gG8jV2FPEDbwDRxkTSrwBPtDeA",
  "key15": "RRXAzcRmLE7qrnqVDbqofD5Wq6rPQDRvY3cgq5FuPrY3y86qom4y8WYRZgKiVPSp2KXXAQy7upxwsEAq6bHC3Z6",
  "key16": "4Yy4bKbTEXy7zGe1Z99f1dCRwDEXJDapvg6QhGkFASsALGJEt9qk7Yrbi6DGMaVmMRCChDzdksPLJ92bq8HeswZU",
  "key17": "29AkGv3qZMBDpDgz7ECCHY8ZFtY5w7rbm34U16xSFddjyp6H7yKUtSNhWLKQxq7nJGt33cSaD3inDswHHdg1ArzP",
  "key18": "tBSaTXW1Tywumq7vagvHM2X9HBo7wfMSNsRm8pq7RXBEF4hS349reP4CuYvBf13DA4cWg16BDehUdCZW72KFxoA",
  "key19": "5n4GPDuxfB2hTyqutFBZrQ6b3CiZcNFjsmcu16gftL8guqEhYcFF6zzAffdVAgFGKDwJ95wBomzEthCwmTPGq67M",
  "key20": "5baFUzoN3ACHNaM2bF96h6mqtyjxYQdS4Y7f37uXbK7iwGRq9v5aDVahe911iK5VCwrBf2Nfx5tTTwbbz8UujaQM",
  "key21": "4N8qjVkNAQpZA8yrrUCfMbGNxL5XSA6pzaY9w6ucFmhcUWnUn7E8X2zg2dhPauMRm9p4yFgZtZVEtPxeHzDo7FMb",
  "key22": "3REDZSyFkhijyPpZVhU2jPhwJoPcTJxsr6XpTVLBqXKRo5xV6LN417RNxvdpMp5DeFw3YUTjK9AegQm75dLndTk8",
  "key23": "YqJn9AoYZ3Xz7DpFr9z54B2EFMsFqiFLDVR94SvUgg8LZJhtJJvnXTZ3CvvqykKAYCtep3vomHCPEcU36XnHnq7",
  "key24": "4nTCiZre9Kkovpb4xm5xED4Un9za3zpGJEx9fp7kT1eUPwXGxUwjp4FxUHDGajQEfiibXLmiBEDryFecBbM1hizH",
  "key25": "Dv1Hxs4wuYMUq6ehBDHQWDmzurkUD9yi2yfP37JebW2d4HjT4KU5C2xBy66afv6Tdj1WAhQozJf2FuYbW3Dzrr5",
  "key26": "3dhCTKBtLUJAyUKvQjeyVLAuskpR8EYBextQk5Cim4p5eCFAC9HEsFYMAWRETHMN3KT6jW14TSVGGpJd1ByErCa1",
  "key27": "5QHWCy2jWCfrBareGyB1U94przKUDfYrdriA5WPCHcYavesxptYQvzVzV4KxRBNJbDk9mbNYkLkC4HWbZNoJz6Ct",
  "key28": "3Cag57SCD4pdwgtQDkFSg8k8csyMJijEq5rRij6EchGX8xR4KDF5xoUtQ5hXNJn2BTJkq4DBZWn8izAhTnkwxU4o",
  "key29": "3b8G5z9a4W1o8hy2enwk8Jpw7S3X6L1juriHpkwfmQ24cFNjZdD6bu58jKVBWL6d628HENEjMzSZcE26d6uPjHdi",
  "key30": "4SWQhr6wGN8ktaapD1KgvvjkVWkyx3uh53WHmQKbCUChTiYpHjeDUveoTZToFzjqJkLf3FzDK6sHszbDJbKdSQqB",
  "key31": "uZJhyTQEgCyzLG71Vx4o74QLGADpQW1EjsSmqH7iDLsMB3L7katVAzQbCYEpBE3jZZaGwort29xm6kdheDa8pwF",
  "key32": "52na8iokpzJDUT8M6yRzk6t7VKLwyaurWfU3wkDZjphpDdC9GMR2GBhNRrLJ9k6XCGeEJr8BC2YPk1Mhy8rqUEBg",
  "key33": "5JAiekSuZ4yGWrmApEGDvE81JqnP8hRhG6Dv58M1BAyDifd4xXhms6fpyQRjReJcaxwpeDxHh9bSKyywfZU9ePAC",
  "key34": "5FgDUgTayUk5SKdiZvtKBJohtiakHTpdx2bRTLefjKPsitvbRxDnLG5WoFvZdCHzkeQY2cex7yy3Ki2mKf1q6tU1",
  "key35": "4yZLmW1GcbXbyNSoedRoZb39Ki9ypmxwXYUvrTtF7ujrVivuZh1zySmLKBKNqbp6JbtFXTingGAoEnPPQq3cgioE",
  "key36": "YcXh88ke6ns3vhekGfahyfmmC5hUZDHNiF6o7A76JxDTuAtp8K5wNdRRkvLsRHA5fTJvDVvPEJBxw7EQQ8F1pTJ",
  "key37": "5RP47otR8d1cK3o8eUBPHy4CEntzfQeg7NqQP3Bed38LrH4FTqiHHAPEcXkg9mjPcaBRPZbTN6jhmoejS1QmCDyu",
  "key38": "za8GuUcCcFAouDFfYFx3Ejzuz74YF4yssA1Pdpny6EHnzEV9AW2NNUnF1DSDEseWoTc5goTQ1HAtgUiLs2s8tvu",
  "key39": "2TJD6rbJ4Q7An6xTQmjimTqm7sYWYHviiaLtDifsDuAzBVUqtyP4Sqz6zgHGxoBqbkxkeFyVaR8tz3DFyKks3F4i",
  "key40": "3uB14vTSBXWDcut27ZCs32Sw2JtDNCkafG97C6SJjgtBhp5PrkCirNxpAtLbsNjChpjyRmQaE38xuWaLcnwxQui2",
  "key41": "3vB1vQoWijGXC6XD8GPBdSrtCL93DKbcD5qkq1mQESa9U9FuMtWvupEjXCT5bqWn9cL5PXMGJJC2xPxep8z6MtMa",
  "key42": "LUhhJQkpUw3wj4BY38gW5etwoUAphfJhoMwqBukaEvjemRk6Vb7Utay19P9qzjzGKtB5BDTEgY8EmDLHqcnn4U7",
  "key43": "2RqB73i2f4cZ2ovwkFiEv8srcvVxf9X5mM7VHwoTbu4dyybbeNjGerXMCNaedNuoENxUwaZmqA1Q5j5yzGhy661m",
  "key44": "47wg5cCBDoMYLugtrDy6JNTAQHcfhNDs9gdk98CqULYN6mFzWXo71vB7xzRZANgNu2gm8dieHbcMjPJdAx7WU4Fj",
  "key45": "4ZfpCLPMB89brjxcsLM3xjynsRV6NjbGoYnBnVNwfuAhWjvsZL3ccyA1brqgCLSKET4Vg2ZdTC9VABfu39U795Ud"
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
