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
    "GKneBLZjYd1rTWnEqkPqV2Tnav8n4yvbsZgrbZead7PmUhp9UWBVPuTdECASfaetNoZxTdC8pYzoMDSrvhi4n34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hT2fb8y9R2nT5Dd9GoKGhoiYMELYgpUfQe6St6H7QbVsaSsofWR5pQaheGPP3gcpHUGt9WqG5YDSe4U1pN7kC6K",
  "key1": "4K75HdZAx4vgorskUysar2TUqV2extQpDawcf5qqKPfTBQFkgQmw6qh95uBVwryefFe3ZTUchACgRjnwypVuTBpq",
  "key2": "2ZdBViTArzVjPBtMaYdhBn3uUzEhK2TJZGWJS1MEdG69jHsTQ99tEDZXDg2oyXTZ8K9tTZaHrjF63LxEQjhPJ6Bd",
  "key3": "3vX1f1KeqgA71uVhcK1huFVfKW7EuZopj9U2cDrQqSaN6kjQNA6588z76h7xkqBztfp7JA3GKoYuUEag7iHbT8r",
  "key4": "rRDAvG6TtFgmExTqjjynJ6DrjrXWrjoYtZDWDuXXjqQzqN88BohmvZCWhrvVoh86aBS3GjazywZauzNNN3Ep44G",
  "key5": "4t5Gy5pR1dNYNjBQervSbc4QLFMojcTYPe9mvpEPSDhZa5e8KEhLVymVpEB2J3WhmAzthmgKRkDT2s5mi1keLpiw",
  "key6": "uTGnK3Gtfx9JJRnaFDCSQi2AMnAmWQe4sGEDA8zFHuEfneuYojEUWxVFG3fBGW7JS8ptfiG9Z2YVJYPmWXmRU1n",
  "key7": "65TwseVdsSsknVA2KDdqykSGmeXr8w2QXdpy93ZwpnHsH4Cjn2wntMyZ1KMM6fAHoZHnf9ayqYpzCtrEGZfLy73t",
  "key8": "2ukjCupuu8X1Sg9FZs2QfHjuR5nScj2mQnoe8YtLXCbkvUBPyKpBUCuMgfkgyByxwbMeYM1Xqgr5UpyLqnsYgQpr",
  "key9": "5wthbXZcwsQ8JNmPNKXkgkZzmgyM11VqwR46JXUGpMUsNK5BU74J2mWWh5x1h6RyXisAKHjrrTjh5Se7JebdD596",
  "key10": "46QyEVDQwdN1TVwTtvpECQz8GARk3KtqYsRzLxxAsnsm2iJN29xK12CXZDdiV9chUadEWfN2ivgaPrQkgDa6jijJ",
  "key11": "3yrHJfZitUARZfrSzXJp63bpfjRKyTWdwocmZoYPJCA9hnMwLKaEGkkJ4KSGyQVvXmrZJGcdibcqDbKdTrVijzAP",
  "key12": "66jBQARZ2Hp2p3b4hHtVNSSX8Tj3fFyYRS4Ktp4mYGPDbRee77kDuwoaE3iUysm3WdmhzAPVNzyDaqJ4woYnqUue",
  "key13": "VwHHQaoLTQkbrPrYeQXJ9pyXWh8rjHwBdADEX3TrmeWjHXmMkaVatAaxsexpDVALXqrDegraNdyWPuned9Ysgy9",
  "key14": "5Hz8z19Xg1pedhKNro2sXYPxrR1NodDWPQi7NbHS8XK4sPLKeb1FWLgrpeqYgRTzB4WU4MAvTzcH4o6zKRKPKj1M",
  "key15": "2JhY2jHpPGbqpXEdDBHubE1E8fn4FQ51wU9sgdvdK5c8VeLywsiErMgMnAS1yjvNMmQZi8HKVkMNBRaKcLPoNDUb",
  "key16": "56rjAjpxyQzQ223QxkuURdGdE9CEaqroQqkBG9t679hDtUNwm4GLa4FEappf6TekYiyxSY3Hf5pPLWWcCJVaAe7M",
  "key17": "4ZWmjYM84bHezGWXZduAp1fP9PT8VbdeC39x483EjNjcivRxzje4XHYCtuy1tddNghDgkZSEHhRV6L5MH3qqGKqx",
  "key18": "BLQyRcRNaSHscSKhtQ5KW2D9WMNukiYvnnq2bEKJTNf9p46QeEEkqafoHvBBLcuBRi4bTrXe1cDP37qcKiDSP9u",
  "key19": "2dtL6CgRi3r6C6UmgPGGHmcJjDnpUMhZsAUwi1FnwphsEro1snNsRQVqXeTTWndzgSd8karRuKVQ7seYpcwTWaQ2",
  "key20": "4pkDtAdgoQ57roMfJW7wZ3ZuMriYPtfRk4WTvmSiobrpjra3JNp9ASSSsNqhvuYcP2ivqTwtGDyr6dgfoaTJZa4a",
  "key21": "4qXkGvr6Ns4ZDhxkzSnHaLsMJGf5xGGu7eEpkkkfWbQED7oVdRMs9oZ3S2UrdpnZKN2ai7fmfVaFUutofofC56f3",
  "key22": "1ufyGnrpT5Za9UsFy56yVjEfJ49ZN8YefxLZyVjoS4GGhZxE4dVAkKrHsxLFa5hDYC4bQCC4f8XMrQUbzc48npp",
  "key23": "3b9tKdx7aCRXkZpeDXo8L626S3uejiMsdohTina2SMtJc27h8UFoyg7qM23hpCmdqfkH2rpdGGsLCgRAtwaie4eN",
  "key24": "EpTGPyhZH7CvDAnPqZh1WEpP2eBbikgZymkTkgvpMRYYQDBVkW52SH2mD7ESt2EztdKL1P4hqM2WjE23qoeN1et",
  "key25": "4dkiwYf9CvXQzxk4cXiBWpzpGgNyyPTiNW4cEFCxLESBRHT8PXwyeu7B2rjLzpWAjatrQynw2b9Vcw2F4pJ4Nerh",
  "key26": "2bg67UUXHgyaEzPBrmgnadtTeDiANTc69pBWJjqCF6t5MiL8SojNK9sypxbuSGJgkPB7QGAMSvsYytFv65EqK7EG",
  "key27": "66hGkZcXEQn1LAda8eT1pbPyeht8VHNGduhma6TWGX62HttRmHCuNLSkHNTNdbTjpkqfBDLqirgkAjXVJTc8ikmn",
  "key28": "2rG6XFv36TUGAfaANwD2jR4upTB3KYNn9Pjz7oshfWeypkAXYGMvqSeegNTnHPxMLEUrFamoqHN5ujTKbMcHAq7Z",
  "key29": "5Fzpuj6BJ1MAu7R7gaQFbSkNpRvUHs2iUSBg5GmkewqGovrfSQg95QirPN4WAwv9ftmJkdgsePSvYKydtBPVYvTA",
  "key30": "5sjfbu4Lt12Cbj4hD6jeqeNohpR6i4zy2tqbFJApLKrvcT69kqMvDwssGZ2KangfPQV4fe4q1WbVqT3vbCbQHzYy",
  "key31": "4zWVsP2iXWuFWEhkakGiNaNfZRGS4Csok6ebuq9zhwbc9yZHpTKENr5qW31sR1Mcqk5NqUJtHTdbwSQSiY3KCdvq",
  "key32": "BWVPCwDuiqQAfrmqcAYMyd9E7sCe7RTjRViumrbeY1sg1cBzEZkAUxQvjeb1oMdZCBjXsSN7BJd31G6KQGoVebY",
  "key33": "59Es5SvDRXzf4SkV7xRC4cL7Tuq1MaTEVYVQKvcBsYvNND8n1UQW5gRv97qvagjBhvqnaN2TrxqvjiRGfEL3rafe",
  "key34": "5UgmdvJ2yeNoVAJTD9HnBkQwr7hcbYCpGDeUjiAdCoqeKtZZKz8JVGiSd3Hn8GCHpiiDmSYh3nczmKkHBD3cnsM1",
  "key35": "4cCqsggaEdTEterHgoXoYzwLvdj21oEnqxNpxze7dNPJdZkDa3APZxbL6fdE59nP5seJJ3XgTwhyRVgkZPjvXQne",
  "key36": "2seQCgFVt9Q2FyQzzvEKMRJNH4AnGmoLC5JWzqx1MRs7bJGW34qpN8QCq2p33tWYjaRrCU5qZNC4fzHFR7Tf6acP",
  "key37": "4zaJMXmACxe7pKwR5ZYB1E7pETSYvgfg8bg93o1Y8yjg2wnrpYmBWB6qreGoVnpFKVtJmECZhm6cxf29WBhbv9tg",
  "key38": "4EfS49jmGiFGoPZHBYSFvC21tZmFh8Nj13RDjsY3cTq1UxaJgLvLkdzcP4DJWA6Nt1474zzmxMsXtbkPbJPVc8c7",
  "key39": "RD5NAxbMJLajXjy7rBNjDHhU5RGVhsphbcCuwJQwHYEQKoTiceKzBjo8USzxgkGuFY5bQKRTVBGoGyabo5tbtHg",
  "key40": "3m8FexznNCqYjFY1WDHJ46CgTjvtzh4EPxPVNy6gyyGqJMe5wAz8vE9FKqbDXPQS6BEC2WSgZbDMY7U7e38Tbdy3",
  "key41": "3iHCzaZXWdWTrPUwv7bPpVYasNZiSrbaDqKELcCx4hSMV2N1kGjLLXctz2f5YEbLwysijRRB4s2Mzn23yfpA8w3s",
  "key42": "YnHM3mJ7FqMvUxeanrchwfigRSoG3A5XRxdQHSBpnEfgRdfACZ1E6LGadAuQmu3hUK6aoQ72pebueAizrzs62Ej",
  "key43": "5e6ySmj5BSXyJix452AxrwgFtdQzsREc5qZjMrmUdKtkn9zEMz6CDwABz5He4EKmm61DEYhfjhbv6BLKskdUr6TL",
  "key44": "5QsbqtSiEsvud2pBAfoVXxjoHUYQMJvyLNA58pyAkA4U2w8qWFd2c4NNAHcx2vtMW7BxoqonNjJXBUjwAvh5EKag",
  "key45": "4pScsskpFZsWjEKn1P1tmpGMDLwpZceZioiHgwWnhhuTYpNFE44oyV7fMgVXU2LXcUfabTvFWJ2oc5dTNTRm6TQD"
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
