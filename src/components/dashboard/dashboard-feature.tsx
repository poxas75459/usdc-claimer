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
    "633GPCCPJsxEovUKM5SgKaJ8xodYnY9qy3BUr3meCCG9g2zL4Y4yEoGcesGhQAgfbhdgiPzZ8beAdnfXkMWNXLZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zukMbVP2HeWLM3ZsMsLjy4ZjAiEJouoYPJ11ZsroFLkZmKfWs6DMPdYCLjyt2sNNRv86Mj6wHre2xf5gar15hUH",
  "key1": "672DvaSCQAKam8wDv3vA682xuU52iKnZcwLRoFYPAPnAyajGBdeSPvaUoNawsprVTxaHMq2ETNKKosDv8LQjRL8Y",
  "key2": "5ZrkuendpYU8JHHEMPmnoMHnwC21S4mrpGjszcpxLHiFWS1iWXXH68S8gda2HJ2QjrEqKDR5VXybChgqgcc1qys2",
  "key3": "3QhtrA23H3qvZMTZr3ctMEjNuXqKGwSuvmaRRkULy7rVg8Xybcy1kq1VLdxL9MoxtBsmKoFBw78QTuj2XozfZS8C",
  "key4": "3FELCq5f8iqwmJQpZorWzcopmarYJBwTwxGznhWnLUX3xcVZrofZV41QodM9FfWxxLEfn8ib2VgKh8Bh32mbLJmN",
  "key5": "3QBs3cg2BrcRKBr13yToR6r365M4yHJFiyHsCxphhSjrZFdQwbRAKRbS8T2shxiACY6XuawWJsyPffcPSYS7ArWP",
  "key6": "3PcCajcYQjfaFnDwqdTYEwvchzXH3NLRRNFjrpaRYBazRWRToSA5ueHZ3dQiqY2jjb7CRAaaXK41GA7s3NFmyC2i",
  "key7": "4JMkUxUxRLpZwpX2FUXuPigACaVhDaKfUeEUxWKyxjVdVE1BYMdJoGgCpiwnqb16vW8vt4ZzdhktDRknq9PYXdKE",
  "key8": "2YN79JPGMaEUV2nQMGNiUpijQFiBSnZdjARFo1ztGraPzHUG8a6YVaRy7FYgBM6cTNc7KCMkoosJ7rF4669kKsrh",
  "key9": "555YbDFcfuuy41rieWqhPceKgPRMvRb62UQfTNNf1gWnSa1SrnsQKCpne6rfsthvRzUN2oYMPN1YDPPZzNCJkcZP",
  "key10": "4RWjUgwVxHmxsph74QvGPSGoq9jasjETc1wz4h6vu4JBFr7DnRhjXW3BWALrpwHiPcfiezyCorK2Xc9cYStvCZdv",
  "key11": "2yMWX3dmgA6iChZDEcucT2GTyJ2tt8w3LV5C26RRWjF1qck6xY6J2mN4TK9izZ64FK9rWWcASgnmXoSwnTAYV9Ye",
  "key12": "2ub9QK5LCt8dAjUr8oC9wRZnbh2zR2tRep3HM5hQDRF1RSoFmZJPKUHfRX1eQLiv8Ui2xe33qL2EsckHBL827FE5",
  "key13": "38rpR3ViHwfBXeoch81my4wLBmJHUYQ55KLTR4PKG1H6c7kqoWJ5KJ71Wtt3PM8CWjJC4ucJ8ZzScTkLcrkfCnWm",
  "key14": "3Siq8ymD28odiR99ERDDU6TDnKyPLpuEJLyFff1UETma4srbBXFLsaU8pPMeUpm4mt59JL9sZYWFN7UHWFheNMmM",
  "key15": "2aqZpC8imnjWK4anFizRtEUg6hwtJv8U7hDB1Sfdiw3v2jZejmfhS7Pigw3JJcCYnh8UeeS3xpRVzNecQL4Ku7yT",
  "key16": "2L9dvUwi4Nyt99WNVzTWSoNUVSMkwL76NkiPB9SKguPFKJk5qrUodhed7zA5zRiUKuQRBCC387WR56xpP5ugRynB",
  "key17": "4m4tgwrToCQzpQFDFNXwDr3aqzqft8vR8SbPGrFkiaMnafwJS9RaqdPF7qKirCYvf8iHc8KN27Auo5sktt9o3p3v",
  "key18": "KqDejRac8vDsPWuqsdFmnGGSP96DyksqFTmmr1YNywsya7p2sTA5sgNEhDreTzprFtgNGXWV3EBfegkb69e6X7d",
  "key19": "5ZM9NfH3zwxVeVX7yeeGu4WfZaH62tnjD52wf73JvvB6JS3AAG1s1qZxwrzzTmCbdMhgdBHTFDtABib74DC9a5zo",
  "key20": "4N4DT9XXEAbDPozJL9jNgmwTLcECmWE7f1f5LzAz2t7Rjbqd4843TZuCmdqwLxV1sxoAzi7e9vhXjLoZkvgfMd8",
  "key21": "4hturLurU8dQXZ1UA7nS9hcpDnhC9gnke5M73NL7Ai8w6UG1uQ7SYvEn7rfTa1WaAT6P2NUAaRMnSFNqwhPsvVEL",
  "key22": "3k38pCXNZvsV1XtT84fdkiAMam8otHtbTjEfamH2RQSgWY8tGKn2rvZSqk9Tcu184zrDaBrE6uwXRMBGzURt3Bjm",
  "key23": "dr3ypkWQtSGY7ekDSURfF97vYGDtzVViSfEorxcBM6Hodv2w9eBE6h42LgfcWwYS25pqfhjBcrfVy3jkBnxfA4j",
  "key24": "26ph5q4QG2dp5baLEQpFr65pvL19yKRHJWBqLW7apoMXVF2RwWXtZ74MzKftHyuhX2SrAF6qfagmX66Nxae23ikN",
  "key25": "2C7bJENKAqg9fB2koQEMbvoJNzTSGDRYBpQc9s4fxjGbxkct33PhP9LKeJQKhiYDr5M4Cgk3FMV8KGNBYmn1DDhN",
  "key26": "36VZsUVUBA4zFQYvqvxUeQUqdNhteUwLDJP6fn1hWKhT4ELFouZ6bLmGd6Stuu76JCyvgeFcoMjPxNDDWfhZuxyj",
  "key27": "52YoRsYDE6Kq6B2SCaBAeLoARhu4sG3fVXk2JB3UwmCXiJUptJvxkXXevENaQMVgVn92WSpA97XezBxqe93gJGkN",
  "key28": "jVAAYwVMw8pFBe62PNHhLJQwneBuEaE4wPrBrvPws4vmsUMefk57oLQ9MB9kW6oYKmsijfEDGM5tuejxuYkLGD6",
  "key29": "5ts7TK6ediHGryFxWiNf5jpETbdSY1wZ4A8PCdz45CaBLatAoJp1qukFW516Lg4Nyii9kdjDzL3djUwPZYjNijda",
  "key30": "UoTx3uFh1dWQjBPHUkdMdEUCZSFpCiwxhZmRxSFFJmmwLWu1cNcFBZX7KnShSGP8v3KBFvkGMXv8ogshZY6gL1f",
  "key31": "62nqzFFgaeAArfmGKfF4mBBPZLwGRAfnJPD8JvpRy4brWJ8auj1eVJSASk9mQwzKycQrfe1cA8RmeUpKeQoTmUmg",
  "key32": "2gY5rtn6E8JW5pA5v7DTL4xCbU2T5Z8mXZ887XX6dUWR95sFLKUasUcVe7Q7euJTQFrFtEhcGT8L9eFGHVVSjP8r",
  "key33": "62BQiLifsJWeuBsXrLePTcWpHKqgesrM5ucqanLKKNwpCAKEgvz7wyJJsCmNKSU3KbLmutgSFPJxdoNur2Evq6jr",
  "key34": "R3ZSMb7p45SwucieKjiHfH9K5DUGyqPSAB4b4ovMa3uUszVk38UNMBHP4Z67XauvUhPTaW757k5B44uf8d4afqZ",
  "key35": "42jMWPFYgMQdFHpCwmSqTxtzukBowXwmhYAcDQmAKe2htSSxASSowcgxkPpvtFVqHPXoEWd371cw2vKor4CKaQMw",
  "key36": "5Zn6VLT3J84H5kNek3yFmuLr3UP4F26fMVyrUW9JwXjbwWr3eFVzo7mw3MPJycehwBcJFQiqRSZ47NQDjMvMBkkg",
  "key37": "3EK4THQqGXWxcLrM3rmriQhN4nzGPiyTgek1jk6h4z7tj9ZrJZfa3wGUMYdKDJ73g4HnDpEJmCyktpDB93UrYNzN"
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
