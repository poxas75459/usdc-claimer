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
    "3bi6hfqTxXWAvNDaNCQHcS4xN2c8pTVQmWXeTNmbBjsm5T4nr8WcwkXDQXc36bhPoVKb7srJ7NJXPWsYANHULiFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C4Z21ZuReX37Ux2948yKugjD2nVMGzCmsVfHUjPMd1CdByWBSaHpvpcAJLkjEzcx1AmfvXWw68oHCmHcn8e87pU",
  "key1": "4sduEJhJAvnaLMWXH6p6531egF6hFUxzctdbVJrwQV9w5scj4iUEqinSggF4xde2eMVtMPoxwURKAxYwLSwUqtNS",
  "key2": "5ZMfYvqxYYL3J24S7LQzFc9iGQvtZpGxsKWesjDSx3VqpF7kv2vQxyubtPp4pSGZMoujXvbbdL4VZUyTfUse9X3S",
  "key3": "5biXDXVN6JHVGvfbnuNNVp9RzYwJXq5ZSMGKhZx2LTT6tfCVmLaTxqYmM4BhtV4BGrtxR3HXiTmhYi3zhjakYiVR",
  "key4": "2By8N6Q9mHdfnUgMWwhwkfPGEDnYK13pe56bXgq8XYaZx7PpFY3sLhWvmrZmjJCnq6jkp4Xskwr424cXHWqzqLaz",
  "key5": "3PMa2ftdeWQfiaejU1Rx8gyoLPH8G89fe9y7qqgBYJqT3YhZgTV3aGzZJknANkBoQkYbQC2U9FXdf9eMPFo2RZB6",
  "key6": "36gGLq9CLqV5bPktoFAjyhV1GjFFvMS9aFfH5WhnMgGeajZzNJAQUajv6324A7n6cqsR8D1wjabKursLpwUQaVaG",
  "key7": "4DV9YK2PweZwNayq7KCdsCKaSbpBcipZS6wWL6aFdfBomnBNiKbnwg1MVGHDmUbu6wdZ4Fit5LdaUMnQmEran7an",
  "key8": "29LbbN1tkrtg6FcJfrAaA9GUTionfHPV9EnsynUkstpHp6gUrEw37neYi16WC56Tq1WRcfZV9zKXnXuqEa2KBEiz",
  "key9": "431Z873ePVoNQMPwF71CqqEMmXSyiikTnV841SXDKaVHvqcrLm2m9MvGdcStUcVQWVRHQ5c5HYxeVmXzfctr6yMB",
  "key10": "63TbbS1KPWDp3X3g4PiCwAXaE1sKiphPEtUKVuuJDAfG7R8e6GpneNZF2dS76YxnJkRZNXY9nkbbSY3njZWLoBSu",
  "key11": "2Br3QLBA7T9MbG4aT93GLm7FFp8KjvsWcYxBWME5fmkdaYiDbSxZ26AnvubpUZKxFBkanuLXjhFXhfbcP29vPuFd",
  "key12": "5BkdZZsdJEeHsTU3N9EeknaqHLSrSYVxBpcwp8Sux4Jvv4Kua6RcQWF7C6CHJe5dj4FvdENAUfvN5r7KrPq487qi",
  "key13": "ChTjfgpQ47p8rB6LJztcYEeFQDpGFzLNeEE5uSqbyHpvkbhGYsuokNRxCnGdujUXoZpTKPqmNQXa5cLQHGNamMz",
  "key14": "2gQ2yNuH81MdDU1MQZQN37Hx77pKPPYha8wEwmgg8eQxxr6q7Xk9crd9eV8AKmHo2jkWzzXQUheGkA49ABsSuEBG",
  "key15": "3e6V2XBBTZGMHpgX5JtbZu3rNRsoEwjMCjbXt32teaF19AsDqMWHrcUdLTPesM4CMRWHisFt32BZA4zCixXZyFdd",
  "key16": "nc6LWs3jdTDNWkL8gDxFtNNgGu76USDzfSMTwi6JhpR9TRyK1MTcXRGctmWvFEh5DTKWBtn2GrBMaVL2poxMbGp",
  "key17": "4SvZmQxtE9xXp7JRPav4YPu9KdSY8jQxKtnKYUQE52GUVXfCwPvQ8pwXcvuueYJboNRK9JfS9UahTrCKH5s8DHoJ",
  "key18": "3JjpHyhrHyddBNHFHnZcp8pgY5wPuPuujacst5ihk2iasC84Z6wCMmdNAzJLDpMtRAPujUHA6i839nLrEvCR8fuW",
  "key19": "3Vm2XAvyG1PpPSTugR55VFpbSVatswayPFsXLxqZvFwvaLXQEPEgMLmfeYyu2J3dcEMGBrohp5APHy76qVxk1SX7",
  "key20": "2VhsqtKwhceiZojC6ngqnohg7JtBbSdUmb3UTdFb71NQXXcMbe76PNgRCJqK5LiiYTuMEBmApMYHbQwpRbhU4Pbf",
  "key21": "45EAkAALJtMTnYv8W29Ty5azLhULsUy13nzaCbcfWg3Pw3VLt6yj2Fzhbvdmohfx5NgxDU3N6kuZTUGi1pWWkK9i",
  "key22": "4EzowB4sZRg1LiBesLPjSHMhMZtYqwCuqFwxjWeZBpWo4qsA9tu5mumCecmH9FTrLDaikH3yAvaSQnuccxMxeQ7A",
  "key23": "4PP1QMt7Nkz4TML1sLq8SSNwLU6xUGXzRy62LB25qRHdE7Dna4vchaps8pbxgLUgHJ8nfAW18nwYR8Dgyzu5pWuY",
  "key24": "33eC7ezSewih14XopqvWvdSJEZYQUaKuMyFNX2K5JT2ay3u44MQy6ahdLhXC4Z57rjpZwL8zCDYFMk5eJBDBpSiA",
  "key25": "2ow7dDTyVm5JnPo82uhBJytSLQoKtkKBDgiZZYedp4pU1XJUGeU4umeLZEjeiJTTTDkDmZje5k5vzTFrBustRGH9",
  "key26": "2c8vbmDV24Z2E9L8sS9SQecRhyZezPWEN7kuKBbm3AQ15HDjoyRrKboLfjJkyEsfDedQxbNA1uSuEKzgRUwCFhFd",
  "key27": "48J6ysS3bYbBeVQgzXYhvkcAc1AhGgf7oo6PTnwAEZuLnD7DKtPcP2ScEJt17Z9yMLgwk4tjhHeSbtHaGALemh8e",
  "key28": "24c8wj4zAveFVpieHUKFVoWLmK2KNeuG2BPXzf4TqiKxTwbzcHNtXPLjkMjLEruSHweYRKiSNwmHbM53HZKsTrJJ",
  "key29": "2e3dZ2yKoPvYMkATX6K3rJYRfCafGBcXttkgtjUrFa5bXrw4EgFQgwepggNDa56vVvS6aiFUW7NyoVMaSFTN4Da8",
  "key30": "2kcgehKiZWYoFWLvyfUr2b867fFe7k2wE4MZsrGBcMdNhFoR7hcmBMzArefZiXM7kT5qsMzx6UveP6NgwxrPeikb",
  "key31": "oQnzLB2S2pxVqYMQ8qaBp3CdcBSU9uNrzZ2qfj1px2MmrebAag5dkMvrX6mTDhz5qsDy56S5zDXwarhgG7D5QUp",
  "key32": "3yEsFVuzaD2PPKuM17qNDQkSeeVrSAXzTWF3sSdzxmbJDsfoF9T8cYwg2kHWHUVJCmx2kpuGkSKfJtCzvfPGXHb7",
  "key33": "ZZ63ZmNrRHntmH8W1t3rtexbcowrmEhoRPUr9KXXnJF47K7TiVSYKBBiFZbiyA2YBfGW83nUyaCcMmNGupXSDjp",
  "key34": "4ik85iVe8VFLWXT8v4xABG2rpG58P2BiF45tyV1U8aXdco4C19LtCrsryeBrcYbxgn9q4zschS5YuNLNPuNhvLaA",
  "key35": "518NPAVHLKgJd5MYEWQzv716NtDuwAS9kaqgTaPxwvQJLH82uoCm39YjqCTonTnwTzq3zomq1Wp7MEfegyKcTJ6E",
  "key36": "3JVwrt1m5SwxJLJUdzLY3PVD7YFhgGELaxJ6413G4FHMCE8MiR5An1UmeBT2z7JEbgHNTXnxRPkJi63h4N6CmnJr",
  "key37": "4hCZ5imp74kme79UQKgmEezmpG9gKmU3fRzxGsZRxMGnNPjNveZhdfmrxTvwrVB3YLCvU27CCpSVaKwxMkeW94eq",
  "key38": "2QiZXPbsyZaNzDMj9zr4Frp9JQg8wzdzHsFVuuEfVfu6kCmfvumFGgeGPvWC54AL5uEhqH7nEzmTTMX3YSyEtiXd",
  "key39": "2Lq9r6iL7SVf8UqZiSx72idSyKAAfNHL7LchXe79xTZMDBzCreTus2FAXVrXNsHdj8X1fXNTpCkwhEXAJEBbVobU",
  "key40": "3cnYPgQmF87g3vb6WzMba2pecLWutPqzBh7GGZBTdSqoUT5STijwDhktPsT7rPvycHMj3aVBUm5pw8jcuenXmWeJ",
  "key41": "2yV9V4brNMq9YnEvZniRjaWCqJzLwREJSbZZkCCHkYqqRMm8mPC94dREucvEYh8dNZCVN71pKzFFrR6JERbzYcZQ"
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
