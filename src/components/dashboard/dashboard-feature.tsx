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
    "1ZguGwe1rzDHeLjQ2sYEqPnvzExdo7MZcDkAEta2oVu7uktwMJgcjuJuBGGeErNgsvrjiFgoTtdkrckpNriAj6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uTzxfzaxY5tbaA3bCFNNQrt4hC7Lgk57iYF7HZu3TokvUo4Uxg86nyvDwodkvrwVhxS8VFRqek4F1e6WFeuX3Uk",
  "key1": "28JK9HtdK2Jusmoqi2mwBgf9rTixZn2xuww2LHVgTLujVbMGgLncz1kR8WFxvLvRSEXfLDXhWQbrqD2kskKoNoJp",
  "key2": "5oH9wPEodq9Bb8UpYyhbzceskTXEm4tTe4cJG17zLdrS1PUd179HB6yrmgDbkiCrL2gugRJ6Smb5fWeyNpS3d3dk",
  "key3": "4fWv7RGNg8hYF3DE7Rw7VP7cC3s5hPwJmBKmxCDnUKpcSaLrkQNpoYeXXMZJUviVF3vnvEzqRnPjHVKs2NSR1qt4",
  "key4": "4hfxkZnRFjnUvoJ9KNj9jXvJiM2TCBxfLdaBoiYqwN7iPpMWsZjC3erKo9KFPd4JCA3Eg5o5DSdpee2GsXMrocG5",
  "key5": "2yRzqVrJ2dNPbybzVMoxpr3McM9FgYdf3gjCN4HY5tNaEMdZXo3AMniLTMkN6PQPsqxZRJc8YJaCtR5nS4T6HxZC",
  "key6": "43UDj9f7hiVTToreK6WxZby2wfhA2tPnrHwFBDUvC3eXnkvm8UKN8X7u8KCQ7o9xCDifzNvGsPjfyVAmaJswSSwN",
  "key7": "262M9mbyqUTaQF1WMuGrkQxPFWGnS4EttaJuo69Z99b7zwSt7tUsUfssVEJkfGHeuxLRvSpTmC7qXoAXfX27siWN",
  "key8": "5MJXbJCz5bGAhxohMok9A9mSFCDZn7mGeoPgv5nyyMHni1ZvfRW9FZfJB5U69CYDCqAsTNHf7rRF6FmxsuNoYMvQ",
  "key9": "3LdYGjo2pi6qLASgeawonDzmy5o8d8onCU9a55rMtUR9sVyjfSsTFsrhxeHFhXcjCrzYcvcSBpifC3vQ5ANCgXMV",
  "key10": "qfijhfbXh2zvQsdr52EnrA7TzBS347JHauALmSuVmsGmHEmHsJn5yYZjCmf6t2HFdqp8AqDddoN3Lbd24Y6zWkX",
  "key11": "37Jf42chrhH87jA5GfEx9WFiq86vMGFvqmroAa8qMdDNZwiY8WhLTgFTaJqBCNsLnELTXuQCHxUH7gpmLBybBxXc",
  "key12": "3EHrJY8ioANmvs9KpyUKVRNMfxLmvR37MrN2FouW3g1Viky4TLH4mU1S725xWnEeiAK2paZcsb29UWn8tNtcs8nB",
  "key13": "4dQBFYCb6Hgh8wnNpgs5KSTgxT5yKMkQ77672ZcTwcrXZap2T23T1bLWgqiUXK4eBhKcpEgSTmhswkTsywkmh4ez",
  "key14": "124jTmi1r9RGfALjW6BeaFgoUf9by2NxjJhgLq3ZDre5HtZUGrytK37EpRzD5TLUyBt3eCnKZumajRcE15FHg245",
  "key15": "4WCo7T6eEveH2k3AGuGnede92G4o3jrTnaX4BKkCc3ABx76LVjWHr4Vke6DTE3xdZ5pwu6rsd6USNRdQHa5hWe34",
  "key16": "4A1Hs6L69HX4j9iCMjPpmsmoFmxRYdEGaY7YbV7doPVEy4QwziaTQqFzrYzhquMvSg6R99s3F2jBjgj2PsQ14Ao3",
  "key17": "TtRygNC3yPBMT72F3sGTGBp48ev64ytqperzk9hRH9coPEtQq63sgTAvgvWSKwpx1eRJfwnjwwUxxeZ7YBee9if",
  "key18": "3LK8gE4PJ3FVb7UfJ4GrWXSTu2GVtqsHtGLFQHkyhwxzdoDCQ4XHm2pR4TMKt7fRWGuZroR7534S8BcZMKB3nXne",
  "key19": "2SkFVn6oeNM1ML2xaffzpqYTkkyXnr4wBgKVp43un5JTiQPjKhSGa8PiVsm5jfGe7RtTx3yVSWPqpoLobbnxP8BN",
  "key20": "2VeihuD6gkb8vDexJCKAmutijf5rTDqgC1bFgAMCZ1YoPQCTcvhp7eaBssHMhTRoBRuJFfW36zoyH9eHQ3X6pA5V",
  "key21": "4K4cPyKPEXseMrhvRmwFHnmZgPZTdabMRwuoPwru1Pcho9WKFSM4LmnCfe2fenX3uKwa6jkKEjvTcyTw28dAej6x",
  "key22": "oJLPPLi3SegATQbGmF2wq7pGoBRFuPbZV4paqrxHQpyMf9YuQPSnwDBjzWbjgkohkChFdMFUMxn5mtSGYpMrgU1",
  "key23": "7auxPurLCwskDnXYNBSi8DCbsHNTwKKLmxgd6NPENkoJKtMF4WSzpPPmpphE5ibaYMD2jB4BAMAXUCQAsV8JzUA",
  "key24": "4ehtgiM9AfZPeNkPSkkGvidJdtFPB5WfR11oLBvwbqbQcDcaJaLHM8HicWkL67pxYs1xczJTkU9fgwNCXzqaRXYn",
  "key25": "5y9MkSMfJ91Rbt8XwKtNq2DPxxxn18yEUzw2qdWBBq4qGdwoQcVSZUTxN2AAhfs7FkA8UCJK2tVyTgHH5QwgZugv",
  "key26": "5ctPRD2p5W6VeYHRiQJWqKv54PLGKuCP9dkZD7Mff2qVSoXD9pztFyAMBupevPLtU4K34nRqAdEmsyHXK2E4oPK9",
  "key27": "5oiiV4cx3n3MhuCxkFEiU7eUnAZSvJPJ2bTii5QTXJv4tVqAPGvdLK8SfmPB66dzKBaTrcbDyaxVxX8fnkGuu2Z",
  "key28": "AGpVkditWcTGqoqNjp9SLBGFFyWMJmWKue5n8AW33hCjzEroyPcsRyLkbuV82syRtSV1FgzpsekqixRFXjgrDQC",
  "key29": "4smXmUmrCHumkYzFYdoPDUtVrB1DVRpmw5bd2qLZWVnnAq5AFcrczaN86HXmt12FBtQQng2LsF7e5iyAwsHUAx8U",
  "key30": "5ZAaGqyPGn5dEKGQtQmeer5U6LFdChsb58e3W7ihAuEEt4oKUUY5eGuHZpQ8m4aUjczVruUDRt4Fs119pJVkXd9K",
  "key31": "3jtYeEqBB9As7cH143hGeh4QdfseJwqSnrE2Qvocye7escCLnR6hWGbRTpsBzecAG4pDNCkAK8dZfG4pZJwJzLBb",
  "key32": "3iDVbYVDTCLgPLRMiPqaNmyuikcYnexxdFHwEqW1bxfNgbuZ43AKGgfpW99a5PWDdZXBvdo8zWnbA3Xeuc8B7Hi9",
  "key33": "3G8SFMhdfYpUaVEDS7gssyn3mt79UMkUxR2Q914qqHAcFAGtyHuVB6xBM3PLmQjVzzryVqzhKN3g2VjY4PHeCUBL",
  "key34": "5LTtLh1UYuCw7GR2FQGg1uQkC8u1PxeghD9NRQGdT4FVERLd8ciACSkwvjrqQxLCpfT92SDuXGgYoB33hxuMJPUJ",
  "key35": "2qMbA5ipbz9eVS2cKPPP2VLuXLABoJJutHEg8wDtee7skrZ1nLJPjkP6pqWor4HLuC8du55eobtYZUJtXrfPo1wq",
  "key36": "5ZEDbR4dBswHhXF6bTSZCzMJrjMPpkprUNdB89D35d2qERRQpbN7aoayhMBi6qXx9z3wsfjUdje2KLc8H4wDf9hp",
  "key37": "5wY43yJCvVhwjpKscN7DYq4WmrYuABxrbGGTrEbzCPbPryjJQw3xWDseiEHVGZsbkZXsgKmKNt92kYoLGus8VCWv"
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
