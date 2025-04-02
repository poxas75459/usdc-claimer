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
    "2qkcSMczEyZbVvoVGqX9qHDj9jcA7UDoJReHK6GG3h7NsAqD8G487i5rXewg8nEj2seMJCh2zEPqjfQ4mYUuw9yB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24JxMzh23zX1uRAibjQ71oSwgoGoBK1YBJSdps2y34zhnQSuE5eQkRbuPnH3YYxFrdqH8RoPaZYV9pyJmYMvYDU3",
  "key1": "CrnM2DeCnkMZWiy5oHfhbB6ZncBx1AZ3KQeeknW1daXTBtLmrRJBoKG4ARKp2XZC8jrheCTpuDMfD5yFuHWJ3yd",
  "key2": "64jXJtqktdWbgg3KUc6ghv6mG1qqWkx948ds43xMyRBMmgXKdFAPpinBfam6yTZ3nCExhRjvAu6Tj2LM4saCJ2Cx",
  "key3": "2SeRi2coPwvfsQjRsEkx86wFPMuuby91um6i6LQQZFJRe8dRcCUvTK2FD5YhGMyAPVsC6tZSsi4LrSheAs4HfrBP",
  "key4": "9FUb46bVMEtTogEgjR3kQ8Sj6xiibjUr5Fv8HXTHShNAMwxbd7vXPNR689eRrqP84iiinL8jfGXGxidwwvtGA5J",
  "key5": "3JwHaTXsv7bekThcmcx83F4jg7T8Zo563u4fFxx9mv1zXPP8bBqMbKRgkSiivXqSm7XDbbzXd98z8a499LZ8SFv7",
  "key6": "3zfqf6fhep6sU3pokF8NMsVrJEF4aJy33ErRbKe5dnLj9PVmWSMLXKMjjpJnCmxfW7thtc9xNKdMdasKfcCQ8iDT",
  "key7": "QAMT9DDj6VTy5pMSbFppFUiQBneM6WG3RFpZhpRVcAqApSJxQw4wgM5BmXe9c8mkxhUMAFnLpAk4kiBLzPAXdbF",
  "key8": "5hPgx34uSYM3cCDtrgBd3qD1jWRWfczDJmpXzpgPat9c7rnSEVpDc2Zc9DeKssQ7cwLdMJtU8VHKgruuDq1PZ5t",
  "key9": "65YiwHSzCpWiQJR4r5LWkZSPqSXvabjMwXgGHAP4TCeDu5d5gyoUccJWKh8V4jDSzoK94qV8evfpeyFQh9pGXxZQ",
  "key10": "3Ej2YtFiCQXCBUYfY7gPnjVW1mp6CUoPgEEg2pxA3mmuJTr4kxPRMNt4hxoSM8tV8PsVmZG4iwx82q8EhzqkZuq5",
  "key11": "4CntW3CTHCLVW6WQhwx2StmCj8aXshYTvNieCktK89gKVyhikhTwy2MyLiTkcNR6KwMe6DxtCw5PE7HNaMCo7Xrg",
  "key12": "4P65qczdLfd3CQFUdhmebeuDujcvXavCcAvNk6Zu8yK7xM9MnEa4pGQiR9qXUU1EGcoJva6JUGKX11gED3uSxDFZ",
  "key13": "63snC2GRhVmNoJTCQJTLYqN9GE3DGm2MxfLuwAyttdgoA4dKybN5Q9gziRpQLCM4VkaY1dKVK4TZySS6TohsyMHj",
  "key14": "3RM32UMaDvJhdXFSWtXMtNbJsJ7HC4DsfmVfCTDsbCHz6ZjMcyDqkcfHwtbyvMvMzvtEBKVdetL3F5WpqCHgDrpv",
  "key15": "3qV43UfAW4yjJMjxcF2XrxGA5RCauz9ckzPP9M8BT8vbzmHiVTwvZwx1sPhLViPaC1PsK1wWFh6R9BdQt4oZi3Rq",
  "key16": "aXM4Gpyd48G9bYpSdxvVHCNvzxrAZz4T6HGCRNQuCywzQahU85bZbGHdqfDTEXrHm51ZEUu82NZFQJnbG2DsQ7u",
  "key17": "4bDBef3BTN7Q5QFa5goWQsGWsAneJVMNeYAnwAa8tmNJ3cubndj5ak3UwV9c4JGF6BDvZVYUeCftN162JzzvnU3u",
  "key18": "4QMDbSaf5ozutvHw4n7s8BkvkXR7KXmpS1fTgrAdHGZbVJMaexunfqWc4Xdx5GiAiWPJtiXTF8FgmAR4c7nsGh3x",
  "key19": "5GDcGqTf8fN84PjLz9kpdzKndAwATNAYLk1ibvVYLJvew7G2uYvfL27aG26m8Z1RUVyfZKfXZdVT9U3k3YVzpUt9",
  "key20": "2w6Bs9Qk2k2E1u7XmrQSta2QMNPVFUsog2s9irJQaLiMPrHvxZL3GPYcJZRGmPCv7JfCwD9dS1BzQTfMeTLVeRaE",
  "key21": "3RBw41ci73AzWRbVraskmS3p3UAaqhckxWpBKDHRM6n6y4SP9X2L9JbSVoTMwHCBhhQYQne9UYkvgZuGtLTtdSbc",
  "key22": "3zYeq4ZYnBmv5Vwa1iJU7FmtK14e9xGxinxeG7wgkgcsy899xhn81X4cZPTSvRSKkE7NuxnUYVjLSVZmDZQD5zo3",
  "key23": "2jVHQaaScP5Fd5i55Zxx5hsBtPrXo27QAMYUapSECrzqeF1Ze6LhZbWLyRjLQrL6MkMmKxSNADJLx9sQcjFTXTVi",
  "key24": "47XL4aysNFr5Yy2KvQmqVNRUaE6QP6GAWdPHpu9u57wMQnVAwpyrmAGxx85AitwMcWcShKq9AqKcb6RkNwmmAYzR",
  "key25": "54CNay5D8nUkPUrfVuNxN3tNT1JNdPSo7M6C79SZxrd6hpxz97aP5pPhQsx7nVCRRZ3uEZor6WA37oGSQLTU3HHS",
  "key26": "4QBuofYgqtb6oRHrWFg9n7FypDgxkdSsFMkpkz6JiadHre8h6CoJVhQmKAzgfu5tD3u5X9c16J6t2JnpcG97w5M9",
  "key27": "Cr4SaZuVs13B9FXzjNXQEVexnct8AA9UzbjxiSK9Vd5XAiqFxg8rpmdHX52twfDWvrf4QYf2JXSxpTubS6vh3yG",
  "key28": "533PwYRtbRQ8oFk7jXjSjspcwhg3YGprfWganM1CcaMaEjtQLZbgD4WjUD3zfujpDuNpf4WJeqbGusT9Gi695Jri",
  "key29": "2HsdxaGq8vKCEN9LhV3uT6sArvMmAj3yxPH3NZdrw35kvNuf9dKyesskM7dn4pibeCTXxX9HeuGMFNFvHmzBS5Wd",
  "key30": "4zVYuc5qStB8pqyBKwdM4QuG3p1mvANVpPMYLvAhwuGDVGjnYpdrKNqNWxTDn1NVE9EjmWKubRyoZUFkbXUPcmTR",
  "key31": "638xKSGV6gbccYkC7DsSYR5tSNo7P6fRwfq2TDeuqi7pYKHsQkuFPdyXdvrrEF8Vo7f7UGU5MEi1g5b4eWMq5FM8",
  "key32": "4dnqGidmHf5SfzW1XD65Ms5VL54dpQDVrCyuGwmzqmEQ2f4MZK9XkryRCYVWh1gpTiwnFrNw9QwatUyCEDrVZurw",
  "key33": "dNy76LTdrmvcJH56AT7n1Rm9bUvvUaVNhv6LdwLsrVgxu12tBXZjhBzyMXK4NmoXgX6xiDQKLpjtXboYPgDDKrX",
  "key34": "65WDuCqRqURPRH7sHB9MkBEdYT33mJfsWAdtDVPsFPqBXT5gPkePmPGRHSYcb2VSGZ62LddLFDk9kjuCU8d7Jzyf",
  "key35": "4CgvrE3CkNauMtLQK1f2sLb6eSt8e8TQACuSob9FxjpHxRjetWzvbD6dUbiZboB5ZcDDEWbGXPyADAVoZtRw6kKs",
  "key36": "4RUfhM78RTvMwzz3RQNgLXZi3PoPrsUP1z99NNoHatPuK5AaJr4yHj4Dd16aqeCtKeuP7hHf4aFNr2M37UFUtdw4",
  "key37": "2e4KfcbgVtxVVRygRVsosHMYEtTNv6znu2HMWhAMYmhYKedUXfEdQ5ZNCrAkF4966g3AD2aDVVDYbDx5yEMJJxUo"
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
