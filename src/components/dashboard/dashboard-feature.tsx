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
    "Wonaddze2JNw2eKLMYwnZZBkbermNUZpG6SW7cyP7yoy7TEQj7fdGoFuPhJs4RLfM5h7Hpw3CVAS3kiq5xeDJxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m9LMfYNFqqGpEVPUF2cXUGetAEiVamz9YHWqPDWSfv8Ez84yjxo9JZzhsyJJsxkDo99e5mwkd9DNA4duFyJssuM",
  "key1": "Pj6GxH7kHRc1sRNHqz38zqqXS39oSbaze8zJukYFsfWMr4UuacBqrQf3xBaxqVW47nMVJ2njfeDzGZXdRYwRMLs",
  "key2": "4ZotBr1C4RU8Dj3ViCZU9DdoRXUQsijBxm3DsKLdMX9TJJepGcnYwzzBT6mNKdiJweJF6oV3VXYmuvAKmLDmMeiV",
  "key3": "4ofBnzHKoSSfC25JBDujDabTQuxpM31YUdHhzonq2ptpNAvJhTZ25vjmFGDdmxGQajbisNeW8aVCpXVfRS8EdZmE",
  "key4": "5j25Vikwd6kPPEhnWoxiPGum3EUZEUp1LvdX4Hde547VBHB7cU46mETM6czg7S2Jzgws8sw5JNGBvEBvDQFARVJk",
  "key5": "23z64m4GLLgkmP3yQ5iZYo5eSnXxceXUvzAscKkcaxesDLUNmDCjouxTxRkuctkzKpnq7uB4papqV4MYYpfw54vT",
  "key6": "WLJPGPwSVNrpvrrbLqYAX63jdi4H3FZphvqvGNGeuWrwUgNQXqwtkTGxyLU1W7bK1D6426v2Rnfq2zoCxoPQxo7",
  "key7": "4W5DwH4qLpdGRsy9Wgq1mLcE4PS6P9uM7WQ1RiZX1EntaADL2sn9TJoCseSzB6QryezM5yggkWmqmJtXDgwbPV17",
  "key8": "3uBKFCv1ShGwQFfcx1jemdwjg8JAA3huELbuKyBq7MJ84gyfHYDoMdTG5CYrrwd8dBxq8ftLU1rtRYX9SZFveZW1",
  "key9": "5J9x5yiCgN7pf1roLbGy57dpfMPrjvFrjca9iNZhNYzDLy23BsDDtW5pngF7jGkmxiJ6kg97mJoXwuhfwbYzXLgq",
  "key10": "62dH52G4V1SsmTakvG6ByG7xboK1aiCo76jRXFQdXHUkZUAw56RQfmj5N7z3PWeXcjQpnj2mG8aiqBatkJdhe4Nw",
  "key11": "3wB7Fs5jjYe1D7ffJ6jvsbNdVBeyr6iTEQWj2n1rbn7CYXFrt1smivm2muqkKzYcYWBCX8C2koLawfLbtsG56UhH",
  "key12": "9CazoyZsz9v7x7zp2vQeF6LCtutGLpVVMPoUG18qC4GQVVtLzELsFcuvod6LTTBSZ4bj6HdNfsnR93YuboDHZ68",
  "key13": "4tDpusYFBNHdAznvCRU3b5HSQCAnAAVTUmMuoy8MEt854TAB8dTgDbcmB7oMV2w11oyjMHSQUwFptz1YwPM7R5vU",
  "key14": "4B8ikye9RGo1aPTQeEQbRchXjLYFbeZ4XAXJpeTNzVQjqJvgsX7mwPjBb4HKeXuqE3hq5wQ6Mk4vrMN4i2CMrH1F",
  "key15": "3B985g79ds9Qqt23deajmuYRf9bRM4id4H4aFiTA4zKmGxty1e71KAyynAaEYEsYPmcE723ntFBgzAvyS13T2uUS",
  "key16": "3ZWUBhAMimEWzVKfntyNuiRfkzvufM1VEo7RKQnus6ZUaV2FCazjAAXH51w6j38Xh62FhiJnRUXcyf5iRZ4qC5s2",
  "key17": "4ftRRcWUmQoUQb9QJDtuJmgipiLpwsxoEdJoJqsxMfAdpQ3JGZ7rB3PLK9nyyPzJm1cvCAPVGuN3rPAkSdGEwmAG",
  "key18": "3ofXXMNjr8HqXCVmRf4nvpxcKr1YoPkm7LorUH2g9YQs7tYqousRpaJYw7ABKWXNjovTjA8usyp7XfkqcZLbNc7C",
  "key19": "3JfQet5JtZtPDey9GyHfriiSbYco2J8kbrQqyM97Jk9bGtDXzrT9H6GSU2xEBMEggVhg3eTy6pm3qs5JbC5Q2vxK",
  "key20": "NMxb3S8vPj4BfPR51pFmziTRW8qqsX46JxSChiLknzwLR6hoQwfPPs1xEhb8ip3SRqCpi6PwJg9BKB3GeWCx8r2",
  "key21": "4P9Rpkp3gbEnMRLe9UEu3BLdpbVWBYzmnzhkpWhNFjWEwNq8cbGv6Bvh2f3vjdG7jYdvvc5RzNk2VAS8KjwkSybk",
  "key22": "2iaZkXSpW5sUCWfHai8qPftzHpPTeLJ5gk69g7BYNhHv4jNLiywJgYnGmrW97H3PHo7pDiwzRFfsn24LqhtCc1oT",
  "key23": "2BRCUAhiDwAqFYQKrEwECcBGvCGpfC1mxq7tmTScNVtTK8tYSo1DSJNWAJAR5cByPXPVXK2tvdJGt578wzQQu7W8",
  "key24": "5GfzwwFMNwdhcs16pL82y6DNvd5EoD3p81ozwdD9KJ86o9ndoD7AYLaxqAZ7jbEX6iyG6BNcxvAMaga3vkoL8J3C",
  "key25": "5XbGUmWRVGSqndBhMELGc3TwdKWb4xvjpx5H9TyMD8AVTeBmGJphufgNgo8tZBWR99qBhVGAVQiFMMajCsQjXk9R",
  "key26": "3Ns5FRKCiD2QFoYSXPRo6hupMcQ8p5ponHUs2XxmLwY1byAfEdG1c2MsHJcRkcbhK4Zcdfpr3K9UK28PVosixzdm",
  "key27": "2iUmYsfa4tBorfGNzdugXzFLdWGUok4yPWstPFSJ9CDdwKUdSBSLMZ49FkaJueV5WhjcrokUtFXy2HBKCYeoHrAH",
  "key28": "3NPA5QywK2gXvAmDJWhXqfs7rY7eFLv5yN8YBjXZZPeDDg2y441DQBuRqGTY8RfMvKwZBg1Xx7JEQu4dbiJWhMJU"
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
