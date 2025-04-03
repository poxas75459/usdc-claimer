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
    "49BK2hHk5842Y55tg2Ub2N1mDK1cUQ3NwAWLutx15gfqRkpWp87hhEuKXFR1ZeoergXJBGeKQAjhEqWfum3FvCbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FBQ8rDNYufjc6YyjzSJw4yHunBKRFHC7K7dG7c6aJMFnbHgEvi5bymSYZLhbtgykv4eMR3DDru7rtMZhwGqBftY",
  "key1": "oAGSsEm9VmscZcGVg8xe3oiJSvdHKpJN7wfXENneh3h9XQwJxFo52VRp67jKQr4h1wRMcb1vwqyvQhrciUqYcdS",
  "key2": "4vQRxqgR35f5fkngytX2cLK1gR2UE7AKP4Gk1LJRGJtgyLKLsyPMQaiNmehSCpbomRCa2BYQQDMATaWdjnjuWzXg",
  "key3": "53wAzA6HLTUd5FdTgoaVT8P41Xju3mVtDnEVN4GJ5LkCJcyypqZGrsDUKMW6aeCUQCDs5V2oe4PCTiDL5SY6NP2m",
  "key4": "BzdDiijqbszb99rCphFTtiWrqLiCU7phcPsJomrU7B5yACNWDnRND8sgwjdoYhZv1HWk52hFxRGfLMJ6gkSHkyQ",
  "key5": "3cuzqVTNccfrbp5Vb5SbGxniwvAqcvMLamJEFWTRA56qPJbW2bsbGfT1Y5kx95L216CbNtBPw15SsvXC1xWFz4v5",
  "key6": "2uPDUqDwHZD6UhMrC7z9SiikjG8Vh3VdM89qLTDkqXHXTiNdkSaAMsSqTKFuWZPKHTscweaKyoFw3mCMMLHECAHv",
  "key7": "5ZDcDVwNP8oYKpnoG7JziTbPiVquPtufi3WQ7XaXT2AnGewFvihZda6hKQtn1777he4jggywN15AmqePKjorPyo5",
  "key8": "3pciAsCmhgckYbwkgpM5hcuFP5LeHqX6fpnLdGRV9ETFb4UWf6gDv2ATTKpzZD3H1BTjSd4cuVxPo4NsYrMh9ZqP",
  "key9": "48Ar2Lu8gKgtLetQyMtNNTzTuGNdb2bbqvoTYgGbER7H9TfGftXwbo8EP8DHcciF5bY8RdfXrKDkYhReCpnPugHg",
  "key10": "5R5nx1hScAPMrq2itW4nNnaUbG86mmJ7EkuosHj2TrkkfdYiGhxFFFbtzPPHhYnjiwoAXVJRCQPZDgbrmr1GdbPn",
  "key11": "zREoTZpwf4JFvpfN4mMGnahVDDukosJSobkjuhPkcMwemAzMS2TVVVeewWwDTZfFqmBx6vQwDodkDvZYmbqzxWX",
  "key12": "2W79NBS2tZaMEMcYLhQYNncpt9XDZZMSV7SQ1TuuFSpDn5W6pBgBPkq9Cp84qUmvd9K8i2a6x4oKy5Umv97jrJ32",
  "key13": "61iG2jUe8g9tug4fjxLTzQR5jT5DVLCgHiZ9dpgzmyZVVrCUgCKUyBFa37KnMqfnwudgzKC1gw8eD3UGXY2Nk9QG",
  "key14": "34AXfFsxw5R2MabRvN9dh1PXFb7npD5gaLsMwEEUH3Srzi3d175WMz9w7q7RUmXatSQChQwXxZ3BGKV6yYQA5a4c",
  "key15": "4qz9KomcTrauZCdpo2KPnshT8WnFFM5zcpX1Z2znjFZe5Je9gt8oR5B7SqTSv6QAYUZrZQQMnozqxMiQD4BQERqQ",
  "key16": "2q32kPW54PFFfxGxHwciFWX6Tq5H4bPC52kUjLFLBwSNLTEH7LcuPXDC4PgzUUr43VY9ks4p5akrgqaL8jmXig8d",
  "key17": "KKvG1BamKQdDPgBJG8MU7924zxeeE9Jssh97G2G82NtM4UjpFtc9LWXws3TZusjseV6B9539WeBgk4mP3dj2cPk",
  "key18": "4dBpRhCHvsGyAk8mBDviMjdAn6cSxWpLJ2zan58TM8HmcbDoatPNruE19EhBW3gnx7KF39knpit9oSVTprVfim6t",
  "key19": "SDVcF7XCtVjiaUWaLrKtopSshUa2MN7jooSDavhanwMj1EnQ5QmSHB1ozSv4EJ6WYxrXzT7p9rcY5G1B7A3H8Ss",
  "key20": "5vmnTjknJvjxyCMDY5EfDSKHtCyXu79QbuXQCsopimQ9iS2sRGePNWnNytFCbVDYZbrPdsZyiat3Z7ri5uLX6tBc",
  "key21": "2NGwA6qReqzyBGceAWBC5Fueqc3UVLxFM1mNwpjAoMyPB4TCmb36LtAZafLY5iENEdUgMa7A3Kyq8e8EmNhe1Ven",
  "key22": "3nighQpjqajZadLTSG5vzXTfmD173LUNKckqiHdpvTVt4ZYWDX1dgK5SK59DEEo5KmxhiivMma4T72pKpYzNujA1",
  "key23": "5ub2KwULWaoeRJwxRqcYo4EfJ4WpBmkFzuJFZtB5qSJujfEKvseAWFLNnz8DjAH2EsTP2uWdQQ7hetjTjcgfaC1V",
  "key24": "PeE9fVkNRp8LM3BHj6dcPvtm7j9HJH4BT9Bk1xLF8tKP9bQUWKQt4PhEg9qari7KXyNqB7MU7isbzmD4T6ZT2pR",
  "key25": "3ZysrMNvFErgRgsUtJedBCJcE2MRUDsyZev1TeLr1CQr596MvnoLnR3m7ZN3LYgV3iQRLuhaSdnM6hdJ7tPseriG",
  "key26": "ej9TiL5bKnGtpnFf9tevJkQL5mrBrqGS1JLoAtbKsfpTsRh23qdia75hkipnsTSwDNSHMTm6w8WXYpeCPTdnrz4",
  "key27": "5NdLEpnj3WRa4PCNwHbFXRiBEEvsm12V7xHQ4fH8RG1X1HMjUWbMWt9zK9pp9um9xCW4gGCeXgw8J9hHr7S48PgG",
  "key28": "5Y1BH9LStvsoATnRE6nRKsrFwZEz6fkDvQnKz6nDsdeHYYPUj9Z2QHUbGfTXcPNdik9ub9mAVL8dUziPcXFoMccH",
  "key29": "5qTXz5zcyBkCJvowgChTUJkDi6inJwgisjsKkZjevBNGmpJDovQMzgw3R6B46Xfw4n7zSggPs2nkEsRvdHC9GeyE",
  "key30": "3UpTWwRAACukPY1g4wnAcTYHkwp3aAzuC2QkyEf1yu1XZNKELyTq98VqZQmMGCnNdfnuaEkCqhpsemRTqjqYu7Ec",
  "key31": "2JQiqoVpwBNjYY2syJkGZaHFxc4k3jaVwVnAourWjJnArEawSBZ9ciiHxYNMv9ctgzB4W4zmgCLhd4zxujqvhC2V",
  "key32": "3KBfytkCqGHCu5e7fKzRgomFemERkKXVF9VTzHN5fu1GSekwVNBHRuW229NfQVzK4934KbJUj1ytKxTwzHQisvP7",
  "key33": "2TLcrPPTdnQJRznz2vW9fmcPzXYz2Q3PzjfCkMC23eunPJibizq6pcjcLr8ytFYSLuRiVgP1ZJko8RDXwmvcP9Pk",
  "key34": "yCh83b4WpHCE33osmfATNrXZYHmAfNdWghiPWjxfSJ4rL2sjQ89vdib62n1EWYVycgRU2bVNuj9VYHUdAoimvaA",
  "key35": "45M8EyruRk8vBRYJE8npov3KDZFv32a5i6jhpCoc2hzJSu2S49aPH8yDCoKsNwCjjZPit8obXaKRu7uYKciHzERT",
  "key36": "5xmhr4WaNL52LdZ1sXFMxeDbmjtFccgPMXiVgE5GekbX9CsiML87MKV54YojcT4uwB7oEvRrVngEtr3EZdGnRdrb",
  "key37": "4sidhYEUrGZksNFrKXGNYYCHPB7JdHoymT6Ri7v8v1fGNHn6FmSx2rPTEaUePBzHztVz545qHtThWg9CjWRrbG4p",
  "key38": "iWmgaGP5jxxAKmZJrr3DJ11cRYxSgvPEe9hZc2cyNrMMRuDNriDkb91FMS4KcNjApvW4JRbwMDhdPhPFA18BAb1",
  "key39": "4jVUADFbLH1jTrE5JXLMTBShnstrjAmnFjmx84bYw8WfHX2TEPtJr1rJxwtGuwWRCxX2i4tAchFTAMaEAYZ4qkqS",
  "key40": "3RBARpQ67QqBCN1yfEAASNzDXYLWRHKAGu1RdicXLh9AwfS37e5QszTUBB4AAB9NKPNCkBzCsibLzf44ZiwuwCRu",
  "key41": "4Y9x6zKXUiBsyUknCPMqQSFDJEAVjvfxeeh5S74kzsLRYJdsWL4ZrJkutg399fLHVaZzdQamngBgZZvEnwjgbwCT",
  "key42": "nWNBnUTd2gYV6idNn7pCG2gt4Gpnbjf8BuWzqQ67ngCnKB3NpGoViA4iFGxGaaECMtWCavPncg4yrK7tLdNQesv",
  "key43": "34caP4MY7NYAu5qXf3rx5RodH69TwDA2T7J2Ca1TCKQGi7YW7o7LUM77PfEBBEjt5gMUFCR4PStvn9hsKdWhf7K9",
  "key44": "3m6vbiuzt3TSSq2m8fhKx74fhokReBmW5kKgnPvzmFcQJoMhn1wuN1ZkNb9SuPhitbqXvQyrE8ATetWKt99m71SL",
  "key45": "2xQhfiFUYPY9XmspRmEsAvV36N1suPqZff4b2SbXZHsYWALnAGCy2xKyztcAveZ3jAsUzoT13oJ81VwdXLt4MZ5U",
  "key46": "3dHJmZphnsPrMmRW2GsPUEjr2Qb51DGjWoNK7raNTjiH3eUadAq2Dpgr3qpCj7fH4qWy1DbSaEnhJ2PntjXDsMvM",
  "key47": "WFsgG6jECZuGxjeJoyivXy2FbwYFVquwFjGg3gFy6oEES9QXad61vW4ehMVktuwY7nrUSUnYKvm59TQDrsnuHeR",
  "key48": "jqa6DKpUZZU15rXwGgdSjqRbzo4MhCqC99Fb3cRj5LqvUvHNzqgKJorzvSKDBkQ9qzsVZ1b1a2mzsrVE4fvFpAL"
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
