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
    "5Cp5Gbkc7vRmRqk859HG169tzvhiFJio3muEEeitBk3foxVw7yncrQ5CNgEgbsWD9z1N2G5cBd1TMVFWXXn2Lzdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29TfYvEMaJRt5WVEXqE5zGNC9AN6FR1WAdBjV74zNeedr3yjRvdFZdg3ePc6cnWLG39TJ4czkxU2EZsFg91z9jvm",
  "key1": "2gsNjZ7QMRUxjWkSWC4GtBMXQDpDXwAM39sQGdfhxFEm8rU2pAjTpLojBQWjdXp7YRdnpYMVZaX8od6wv4GvAmG4",
  "key2": "33fV8WMuaVLpFmhdEuW1uFEmWYVze8cMAF3W9u9Q8vUeXozpYrjQcHfp4GUa4L1AhS9i7JJeV2KWn1X1Af1RGNuA",
  "key3": "U6CCCwSQFp2yREQebUgSk1U9XHuVkpfAQb4b55k3cjtdZUMLgfHjckfAfYJAFezKxe4SW2tGjaMLHE6xeJG3kGp",
  "key4": "wEYB4ikH3apzQqNaW4MH2a1pVP3jBmTdEEyZv667hQEVBHDAPn8fuPP8u7ePtMu5wAZ2Wj6sdYrz3ZAvEVHrAQf",
  "key5": "5csqgQVdw6erDPMKYjXCgBXb8P8Jz95A5owdKYrjFtuRPr1Fy6sS1w68389P7caLLKjE8jLsVXAv2TvWCdkG36Cs",
  "key6": "5KXxKwF4hGC4xy2Krnc15zguFqNAJs4aVKn9gxVLJ5dvZsgevccziP2HZ4gTwrMuKjmeHdX7m3xfQGKoWDvNGyTz",
  "key7": "4dBr6LGK93RTbutekgNPbMKz6uvH3Ca977a7PAR4QbtFDUgqNG7JfoGWgAQCimwUvoHfNRLfW8Wtbg9KW7yGzVhU",
  "key8": "3KbPVWZbqrNWGbP7CDyhQiR9oy477d9A6keJaXSNHWvUWJrzz2erYnunaD75uqiRQkPZBHstn2eTqnfRzzRjmNJ7",
  "key9": "1D9cVGxShTgVTkKjRRUDitF6yJ62NJSVPdQoVvZQE9L3ssAM7NjCJYWEKJSWcwmngK7xpihUrvpgxpg3Gh9M9Gz",
  "key10": "gdCMCaLwxTRofrdQ2kUBkum7jJPLe6ZquQeiMv4bCJRNoodDc1zkrYcSLrtSFmCeqE5e9vc8Jd9fUfnAi5zYQAQ",
  "key11": "2JR2jbaoR46oG578AzqKsCGpKsP8QEn5MZFRBTPbxjwxPB93enjdm5zuFu8PN8ysUtZG5THJkmwrPoLyBAsixkau",
  "key12": "52Crf2xeuCoQEMCRubLHKByPBWKYztMVF54BYGAdLsCpUA2tACb8cZ2WEhC7r4Dka9m2gbQNFuLryveyjgUuzjjV",
  "key13": "4cGfK5fW9PBvbsXgWfpUXACoKBdjoSgoz4xPdhRNtmUFLyyibMQx96678SRh3rMwvD5r7Fvg3D2ujTdRxExfrh5S",
  "key14": "4tgzZBMJerPtS7ezoKqjcmUC2y6NexcN4eo4jL7iTMFnWp6nKNq3euC9o2GJgHsatBFjZj2jtu1wx6F2cBwKbSuG",
  "key15": "oLNDxXUxYhWECDTj8vZEGTDWGy9RSKgLQb1eoZmMbttJVesXaykXq7X76nE7eqbUWrgVYXbJcbuHZzL6FqsBaiD",
  "key16": "3KSvU6k1o7EdBvR26Jiuw4fAuXUjVH7rMNFtsd6URvPGWL2tcjoVZoMjc5KX3vzxPMbXfYWm22Ab9z1qfnPid863",
  "key17": "2sHnbErowAdLpKj6X2yihqcoYVti3U6HLMCHdee51ADkG8EZySG8x6jkSACfFfuPZsTjZfwg3tH43vfjBNaNUTL1",
  "key18": "2Ch7Ekbr8vjJaPqp1B9LW5ftYXBwgzCMsx1cYJa6DVu1PmNHZw87hmiTJjBZ5rXoN9KdLpMPA3obQsjySDcuwj3y",
  "key19": "3aCe7EATSWqKfYyGSS9NQcHj5PZNrbeRtc9YTTeKLYLkMneFG7KS5CBQL1QZbCgjFccFc5Bo99ugv9xim4U3nr5h",
  "key20": "5WeDidgMG9ixnMeswGeKUcDfqhwQ6BdwGoTJkmBDY4bDsX78RGtDY4jiqsgH2uZ58KPbhrHSi5W5oEpJ7JYfzpcu",
  "key21": "5WqR5W5vMzcubJFfL6nZX9zfz1SjuvR6Ewf11pNEW7B9rMxq4C848YcdmiMAbPqi8VkgWWCKAxAtUNR8x52WRHjR",
  "key22": "3TaEDARfb2goemxFr5tcZZBypxdLvc8jnMBMi685kMq1R89CpetqC14Q2CPyDD79CAgtxHbba11UciZvDWv1Aeg3",
  "key23": "8L2MZLhERyvNpWCHfxMqnmTf9kjK7RyGrsUF8w6pa64MiiYBY5x3BGEk5jp5BGW8VJNX3FUREzwohEjSw1pj2ZV",
  "key24": "2brZyZQfNs8dDRHRZbGHeK1iApQoxSZRhYmtG6YLujBrhVcfoSvKznfBzbsC6W79t74hLy7wG2PgFTtg5GWuEcx1",
  "key25": "sVYCCs4Bw6wB98X7XfUxtYDBn2FdZ5MBj5XVVth6DuUoYjkGHg95FsRb2zfKGYWkijYpofFbCqqx6Si84enDhDj",
  "key26": "2zPNd3MJg4UQHNFXWgsS3fSFCHZo4jmHcoHkYgTeQTzpWLD6gcKbFRXLddGMH8jAMU4Q7Qk1Sw7W7r2G5MuSoKM1",
  "key27": "5cYTxvRxrsUgmBs9oXsNFawBRyrtbGKAjsf4uQ8nMkhXZwecQakRRPv1ccpMueLn99Ri1t2zeiikxAC8c3uKxv6n",
  "key28": "3JS8Tce1ascf9aufYnoMDhwWmMPSnY28DyNyiukKurNCL1Yv6Xywhfzuebd5uXNS667N2BE1QmJFg7UykBrKRTGQ",
  "key29": "4Yv7yfWfEsLC7XwiFaWxBiPXTidKaSmoTz9uofywRfnwdcDTrMhVKnngP67vc6S5j5VihQN7PJLHZovwbxVNUyxq",
  "key30": "4CBiC2tqiRqroXXSCE6r5mKtfM6i7QKi7CJDPVDX3dm4VeK8WsR48g86oqBwL42jowWzqQb6hoLTdqJj376w6sZ5",
  "key31": "2ZyzDK71WJPPJTB6mGuD9MdoEEE8vhRs31SsWfT3rRX73HMRNhAemFqq3DmRV4kirnozwNPNa1fPSbTBYY3PkaM7",
  "key32": "34ok4RdFMZm7CHQnpG1Ce6cARzR2NrVByeQgK6e8mwBGQozNFLzvQCMGTpFMxoex2vaV5AyTfzVkpfKFwWABLg2C",
  "key33": "5asA2vVtqcHUQ7PfZw7UB4s6Z3atkq4ZuMHCBaM7pXj3LS4Q5tnceoWiR7QBiRokg2rfMwTh3UUS77s6ievu7QHR",
  "key34": "tSYgrVVNP46ViHJowPoUzUQG3Xkf41fUDz8eRcjphXkWpEuBvrc6dNNhQ84wgcPmmGofbEQZZnaTjgoEDe63uiz",
  "key35": "3AVA271utxpzZ19HPxBSv2NHPBx3gi9eNS5qo58oGaikkgb1cEQq7tcE31N9ZnVE9PgY5XbitJQM3SYvDLS5mkDi",
  "key36": "5GrxGXyCfDQdzfY6q1CFmLp99pvaB7SFbxN9fHWGgKN8cLuR9h95WRigC9ecfJNpoHT7kdnymvYKtsThcNfjjvum",
  "key37": "318k7DPg5LwJfcUHxc62dHBuQV7w6EzJZYBdijd4GCdhwoCTXrVgLE88MeifNeYuPAnTZxbMMaV12KMQzov7oAd8",
  "key38": "2692Cs6L3LUXd422igvZzrGLVuRdrFufP1DbNsm7fgPenUcj5HRY3PswJcm2fHdFHh7XgCrycQ11WaEDTtNstZWZ"
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
