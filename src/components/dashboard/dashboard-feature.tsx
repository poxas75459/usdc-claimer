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
    "4PdTF8oiTwNFvqCiC5yo6LKEzuhnKrnuTEa2RqojVur7jVbxpXYR5arhapEdVKyi9eoLjTuN88tjTF4TjB7XdHX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66XRGTEhWnjHGsf2wc5FSUkXQG4ijC7DQbAw3KoQTk8yAJ9Ss67dhsL36PpwfXqwVSCjn55NXx7MHhW2RMzSZqez",
  "key1": "2hzhiWHxFT932WPVmb61S8ikTkS2xcoimKWuuTkCnHjXCkrNzPDNzYpFRMi45ceFURNa2GLt2qU1kLQzv3NEM6re",
  "key2": "4t7PiZ1THgqsqKXsR2Ry6uqFv9nfLbS1VSPui53S33p57TChdzNp9WAHgtT6qXd5kMu2c8U3Z8KUDnc4cZwgJjBV",
  "key3": "2JLvcrpkVWBVepijhxcsKMk9xzn7KMFRPqaf9tkoWd6jcJdTmx5HdHoabdbiw2hbQaNFR7xRtxa3gQSBtLpfM4YG",
  "key4": "5XxihVmYwm1yG553MLMtfEoBxqxAZM339K8SCiuFzbwj41kWWq8mLbzY2nFozMD7msJrF5ArFo1Y9dZ1DdseKuBH",
  "key5": "vLM5Srm8XAhnYBL8GDcHpX1VvhuYGDu1WLA3S8Fu5s5zt9ETiXmkkLHtmae3rKr3KJXJjhqcY5NFthUBuiA9cqz",
  "key6": "4LAEw2Gze4UivGMZSz3zQT9xTeNxBZ1fUBurZSYqf4rbpQYa2e3kfznYjMvvbyEQ8ZnDQhS5mAkxf2WKcDFvEfpd",
  "key7": "5K2BwVXymi7hUex7FaYfGjaC5jdMN3LSwsGeBHFR7x3CzWFYGEHTySXeX7HowTmyqbTajdga4F3UMjcfbm3KgoCh",
  "key8": "2A7Mj8Sj8Ya7Pg5FvwJVrfMEh8Wc1MeqaaLswnWgoAkA4wHvBVEQ3LiBV4XrQ7ChK3EvNoy9W6DA3ooUk1X3vFCa",
  "key9": "yQSndyD8Mf83X6rXDcC7cJ2JEw47SUSYajuf2PC9RRhSX4no1LdJ952dkFwPg3RR5cVDq7KRGMoPHRv99BERaDG",
  "key10": "5L4ms4pJt8Dj2LS2WzTsfZmLiAGjJ1Tbf5qBSM2FebSZgE4hvD2DkhY3efib6kSTvKaCSyNYLP5gBPBb6m87zmru",
  "key11": "34QP1VRAsz2EfBFXJFHTPYL5H84aNvQdNndLqcvrCSVtSGve8TMQVFphgXFMWr8HNDsSXTX4VmfBNFRVpcgs37mW",
  "key12": "4HWrH96CJCz97d9KrpkkGTHqY4ggp89qswPD2WT4cEhgthDy5A7RLNb3mqaEPPr4xsFw5WjQXVtFZbQST8QAcyJp",
  "key13": "45QRRiMsCSEupF88R5LHvtPTHVN4uMiETZyytUBALGvFSwWBpuvaDG5Q4qxHuQJocU42y4NJax3HBDuc9udSbrut",
  "key14": "61p41NPirRsU1sh9KkwqmAr8M4NZqub3fbhCLVaXnBVD1985aoFoDWFrKh9pEu9neoX8fcJdMtdzJFKpG6kRWaQg",
  "key15": "4545Y3eDW5CbWCiDp3UakqhWEexgFdFKzm35ygnT8foyDbobmTcuNmodFtaJLGBCxn6g8feoWuNU4GgVocuYcypF",
  "key16": "5VUCGq9PzpHGmBVWUbLmtsgSHJJLTS4BQRT16mqk4WpVuzDSQoBLLfKSVBwQRtE8SvDpEvSBx8ptDybZssgvjSw9",
  "key17": "5Fxp7E4YGeddQ1fog53nKhBAuV72RQViBxM3un4FS67XT35yCYdjsD9mMoknCB8NQ1ZU4K4fVGJXiJXxQS1koWw8",
  "key18": "5mHUSKJzzZyBwAhhHMpfeqCB2QJ3nbo3sH1VGxGofgRGEiAPdzjrTjfBiUdYgUjAc4VCgxvJoffNe3h2ayWjMKPH",
  "key19": "38kWn52XbWwRqCQNFRL2uyZootPrrM4mcHkjt9DJ376Az3Nsgoe3MBFpdW9C5zgyxPXioXJ38uBESGdjK14aL9Vo",
  "key20": "2wXqXZrysxrYF6dMehPw7ZJ11KmPFz5jdzC15mrT488vD3spcW2bGp1K2aFFSmkMMiKRK5Vw1ir28QMc1H8Df8Mb",
  "key21": "2if1LjT7ipWzkyB5WEs8MPJQ1z69RSX1njXtpe2DWYz7yD3J5pUXC9QaRFAgSap14o3i5BcgmytMArJdviLhrWav",
  "key22": "4SmZ84cixkAJhAMjtEKcAqZLwsHQSNfENCEqua3zMPWaqKSHEzm8s3eUSfD67RcbT85YeupgMfEYi36ioCdSmZfC",
  "key23": "4RN1TxCVMxQ1KXizMRgWSK1QMhQnFMKBrEweo9LnnoM3NWpGD5YWRjFqAzd7WqPF3Uv8oKxAdXVEiXaYsNdBQA3n",
  "key24": "3gcDDAttTdUhK79YQ31QXkHSKX4jqyvRnKsGN9kaJ4fHfXS1CHvU6iiSDXHNTLfqok5cMu1U5vsr14hi2GkRiRfU",
  "key25": "662GRDsvPXabP9PUaiUMZJLvvkdt2TLksxAg9wDJDJc7632GLewvML6uDrR6cHCpaCqdVRmV7HLk2ApsyvCnw8tb",
  "key26": "bckTGtxwpDLrD26LAomPszRxwvqjxn5E2rBEA2EUv6AfgrT92j6SfkDiUzU61qtJod8ZGSgWMLcgG8xAhzaj42m",
  "key27": "5NJ5hSx6V5qZt7wX8ESe7zJ7BcsgMWmgHwxoavVPzMRZfP3DD8Lxxjpssf4HzW4dchdLG4dyWYHwDK8y3gxohk7K",
  "key28": "fUjVXDQMFGzM7gCX5S2c2kZjec2FR5nPRP9PdjSM3RjteS57eLHSs4fixvHEr7qe1GCoCQeQ9mMSUijM3wMbFte",
  "key29": "4wRcLLhD3r15Eqy8iMUWcKWNiuwTsY3qrEyQDKTK5QnTzb7B8tJWNCkhsTUGWF2i2Q1eX7dHWi2bFcfx7e1C5CVm",
  "key30": "2Ktxp6v46eWQdFt3ESJEmB5FEJr4tx35N51GswCEYfTS7mzqabBys3RNZp6mKBdr6PEUECayyFmYCfJCoYfHgYQA",
  "key31": "2AXJ5JHMFK3ZYPckN9iBwXeNAqAS89MqCMHLi7SFhythY7YACwJ32nzgBmKA4776StQeH9h6AzdBTf5ydK5LjAbT",
  "key32": "43z7GUZZoyT8wmkix1qn16Yr8VrhtqPUxpRYSjf6YRtWV1GdpV2Bp9GsyQm89kMvta2hsPxybZhKnvJzVHRBTtYT",
  "key33": "5BJpdtwAnXbEW17VaX7qTWKwBAKRdEpQVzaf6NntPUaytaeG1wMco1pNVEEPJHhc6M6FqwP55n6PDbDqZ1iEwVfQ",
  "key34": "2aguaYALEdmmoPdSJrCM8WFNzhrWGfM3FsZjW5Poh6QubSgnyLM1c7CUoJHrHtxSKzwPVjwHfKQBCBUZbJSfdNo1",
  "key35": "4ZTtCNUdQwckZqvMquqJEDgLSMZifqaebo7WywqJTKERvoBKyKWECeK6p386337xyAYu77CDsWHY7hGmG4Pn4mK5",
  "key36": "5TycUrDpqKAGoEEAEsV5W3QLbfSEsMZkpoV1S7qqxAdPPRvuMnixEvwqqBttuDV5UGXUWCUedTTHbU9se9B5hLKo",
  "key37": "5555vS4ZbqysFHstKin7LjMBaiQFpqbEbdMaE4EZvgZSRD7bumAR48iV75EjTpyV18AqawWGKJnAxNjUYztootWq",
  "key38": "2j3RriyPCD9vmeLc9WU9V4wdBQAPs27kPKzc4RAnLkLJagKNUVC4BLT6uw5ethXuycxQfQw6eBVUhFkU8wk5Txv3",
  "key39": "DNVGHh3UrQHh2EGfgbUDSyLPZY4SWxdM2JQX1aMHt29rCQYroYjnXAy6Mu2Lnm3RkMTBUtFFAtHQvwjTeE33TEM",
  "key40": "4K3NSP4eHGMrCkQEXBzBgGviDNVC5MzNMxseyfUt1LaqucMAzhFgCZ8fmc4YJAAk93rFcnFVCAu7997ysszguHj",
  "key41": "5xTMSG9uFdoKW8r1KmQsTR19eZ6cMWzNAk9uEdN4nKh2trkgcPDyrgWoCTvzH2mvvkyHSk8HmbMXJmm5SYD9Nmrc"
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
