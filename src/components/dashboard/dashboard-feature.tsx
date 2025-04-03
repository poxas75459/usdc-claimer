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
    "5TPV3hucWUJ3CJg5BxU6VpXfYdWzNRqt9UXWCUMknX41RTHwVKguhhp1exjLqfqYEfQfJRxryDEvgpXo5SwyPCdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PhJLoxMh1kwoJbGzyPVGRuFg5RKaLigdrjoD2U24U32YW8ZQcVQeouuHZ3qwt64VHzpTnnzjAjQcgg9nHiuQa14",
  "key1": "2a4J9RrZQRskw3Dpf4rjMqDCND4KxwdZNVFHCMdq4iTDui8xTMnHZzJkTqZxoqEbYdj7UQJbW2CeMT3fAakyqzaf",
  "key2": "2jFvgx1uzoCM7Xd8rgm3kVSPWGjNUcY6rNT66CbChhcjyz1MPxv9ASWsv6hEpXoYDNd3JcePFwFV1e8ejsXKfgJi",
  "key3": "36s49FogJmfQzneRjcg7yn6i7awHkYp3duLJJbsvGotXQTjWJ4bQxP9dtmf3p2CmMkA9spZ4kY6tXrzPaACjq4cv",
  "key4": "SLUxNUM7MRJMadDbpouKtt1gmPqHkM4VXLZX8aJqkyZGRvuBQ59KGSguNBu9kDav3PHvzwQwcMQsd1cPv6un4B3",
  "key5": "KdBu6VaGxFcSVi7z8scjSFNqYM7mxk4Xt3prcvF6qhqNeLLAivCCbzT9wMzLrWeyDCWv9ZXSRjNygmxMi8d3SKA",
  "key6": "38aZBRLUMTJxN5p4wz8D6injEsNLnUkWT4dhcwSPjSz2F7gAPupMwKa6wK7K12TEFe5jfYQTVyGWk7vkpQekj3Dc",
  "key7": "L43nvdJE1a3fsWpHfoqrJqdwcixPjBgnZKT5r65U85yANR2g7tBzjbCJKqfPJjyLSHJKA2YctsgKWhjdjuJGYa4",
  "key8": "53ocBd6SPyJgpwrVhcPpka7B6mtDKEGLrFfUaQQ6a4mDnhg3omNKtpPym6DbGeGtGhNUwLoTQiwkTSwZWUcTmFvx",
  "key9": "29HonrBaQoDXZnUNZtKL81VcShZ5JCy9mss6MuwTqTZmYKB82zQbN6iN7CHuQXoXN1WYTvcSBUf6kwp8QpVFtgE3",
  "key10": "5hLEEHzVhYyth5eeLkTr7Rfpi7cW2tyZZZZCrHuwkYhMS9kErV9UEUjJVFNjhtxSb713DsKUdurr3XsAwJV5MuEK",
  "key11": "5UTry4VKn4Vth4oEHa9J6sLrNadPFyb66abtoyCUjuLfJga3bYtqzzBh3FfiUnXRn3oZdEM2mEXc19XLfgFYNztJ",
  "key12": "3dXF99h4CbB1LkzeCjQ4hi99Vn5FyvY6fAreQrATsPt1QkJDnsJESTh1CqjT2xkbfn8Tq3VuaPyuFuRc4nXbvmh2",
  "key13": "3JT52QQxX6BBzaB2GUcFQ2fpBeAAVWEo8EgQYZv5qTivzXAYaCsEKbpRxd5uQacLXaeK3ygXwipcUAv8NngaPKvS",
  "key14": "5ufB56QWr2vviJ4F6VmUCgV7GkxQQJSrsCddS5QR59PYUkKvsAzYYw8XxxHzEQVyW6xD6nQndh4EFrEreq4uitSv",
  "key15": "2HyS9rn4oeFN8yTdCstKYrn2ntHqV9rZhv1hqfs2YwtiRHcvqWGZYrm77YD1kRd4X3LJbcY5DGH6Cgp15DPPrX9x",
  "key16": "38NkWAwEyXe9sWobSwhZij6TBh7sxiB47UGiJjpoNjp2skprLsrgDHAWeMD4sney4cyGgHiGTjqFfwKGQJU5P8aF",
  "key17": "21KRF3CNDxrYvyyJCe2cEzyNjn9o7LfWheMnpv7ptpfyJEWE3o63gQFRDF9M5LpqmZ3XZNja984mWHhBiLBgHh8T",
  "key18": "3QS1fbPa5aaPGxBhcNEvZDGxcLc6DnVkagz31sv6D5EQE2dnUzyZWEcZniUA53FKR3TY5bFHcrTEZ1K3fEhtBLAj",
  "key19": "5LLh5ecxjA8j9PP5WB4VgRi64uLVV1aRV3fzFmvMcR4S1LaRDvo5HKxxiG5ViFoQfUK1u7WvKTmB4KosCwcGgLRo",
  "key20": "3JXzXs3fvmVtEUmdDMZsjvAgaRZHJNhjhyQticWDSmM6iYT8YHhyGnb6k8iGUmyZhyTU8NStTgSKxL7b9h5WWr1w",
  "key21": "2LMu68XbhNnnTy8jZxEGDBRqouFHCbEAt3BpC8YjVCXgvDo35DNYwGLj8TCMUSLgQvsRhi7V3sequC3A6EsAapo9",
  "key22": "5WYnbuFhUEjxKLYXLUQ6Qkh1wVVKjV5DbZt94qewE17qjxECHG2aNdF6x248QFRJBA8Pz9puqa5BpXXrj8WNEyom",
  "key23": "4N1sJet5hC2waRSwcXeamf7tmb6FCbkFYZUSB5ydZDBUdezt7KdcipJ8wCJX3MytFXbMbqk56rT3Lj658EBninuu",
  "key24": "4RoeAaGkUNKBM7S63WC8tFAmYYb9eheaXkcWdjJH3EPxVSdjxbbWnd5tv2Y1zQJDrnbaHmX7d6gZXVcADjaNcdfk",
  "key25": "EygsC4hzfb23ybhhxDLWZA9AKRAaSyPMrdDVdg9FQpxzC4VXoEB3BP7VRmg6PQQ93FFvtsjyz9Fb2nkc9GvkrGw",
  "key26": "EZaEX5N5KQCSAFpiQwL2jzavEujCYJokpXkp448PYqpneeG1Jo7mJ8bk3c8GFLgmcT5Abw16awba5UoeByAvHVW",
  "key27": "3iiLcnfcT9416akhbbP4haY4RcxD6w6rzFkjbQmxfrqmdF677NYzSy9xDSEcGVbLGyXXsazX3gma3N9gdwQDkupD",
  "key28": "5M9ErV44Uidr8CmvSevz1PQ8zwwA41RANDakjMeR3hL7CnhFzRUJMJqjqEi3RjUdoqA3bUNXuN8epa36ULWUt9Yp",
  "key29": "4KRqRVzgwvi22aPDtJCScRWhLXvzYYzY7EEDxt6QxoD5MH2PeZVHwMdyNhLe8UWRrSuyBrwd1vTTJqAe57359RrT",
  "key30": "295bM7N35qivqdf19wMRZdYPPRkDk6PKYakEMewwYs9yePMDV2TqiwzR7CepGUXhuHdLcAuekJSfCC1kbfZhE53w",
  "key31": "5PbYpW89b8ivhboaeFVmLipaBchxT5WisiJS2UgdsUFMuQnTioUWZp6XBGBVHyd1TgphUS8WwZTsHAGgCWssg8in",
  "key32": "48ApgSFSaMRh4adVoUkXB33mY1MRVpDUzWYpxYxgRQ56TJ3Gfavbm7ebQsmurg92ju9AA7Nuyu1Fw7fapj5GDQmr",
  "key33": "24hVcv7L6QYcBqfCcgokA1zzwsJjeGPwr5DDSNJ72Lkz7TmAfVscugsaWzAwRU2STnWSAzzhknHCFxPf4y89hbi9"
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
