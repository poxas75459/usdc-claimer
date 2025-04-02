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
    "2fvd6as7ymKzVWNRn1kay2ik2fkXVE91HEHbo66cEqg73dvfQmpfqkYhmcq2JzBNTtEEXKUhGJH24EjAaUi4TjVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yfngCwsxLyUVVZxSt9Ddr4xP2XXV1scQPQJefZowMZsMbkGL4h6EhzaxUir2ejQMyDovEVTUBSck7o7CoJYwqAc",
  "key1": "5iBwRWwCpS1X6xZpFaMV4RrghQb9KPEvQXrU891vrdccdtXxyLZt9qX8HmLpWfZM86EuxTnhFoekub75p3jUwD62",
  "key2": "54iq4uvRfdZZiWfUeMZcSwjjkUVS6DsaD1F7Z1yjz43oB8fBciZ1WTreAnejVQ4o4WCQaqoPGSeSmsZ1ukFvCDa5",
  "key3": "Uc39y9Luoad8ESxUEgX9XFD4pYQUbdJvAHEdkZSJoXnvTLuryXJAfYqMjf6KiXMUEfmHpNnqFmVKQ5XJkzZxHv4",
  "key4": "2aea8kC9Hb1VdsYqY7k5ELPEbjdbsyEtienE64aMf5hvrxvBA3kLzhz42ijtEWVe8v3hLwat6bpj4jy14ebLCCxh",
  "key5": "4hWfSjGt4fDvJD2zoeMssWDmB113awSRW5tH76NgPuDkGHwaDmTvWCtA4zQ4eHuJT6ep1fqTvsYGh4UyY7umuvRk",
  "key6": "34VifbSugwxw4sNoaDX4U8yFMy1Enh553FJ9gm1B9GE2BR9JWH7j2sRXPMUh4Sq3BLa2YYJM38Lp5w5T8ss9YJDL",
  "key7": "5D3epwLQL6S21hbS2A1xifMZw4Wa1yzkt9mNqZ1qduS3hRJ3cNf2fs3mvyPXz6MnzYVRdwFFg1zjjhDk1WXA6Eun",
  "key8": "jrSvKWjQ7uNtrgstYj1t2Sewog9KemXHx5ewMs4Pt2EkghqyUGmGGi44L9hucP5Vzb6JPm1NVsDUVucfcfsiJnd",
  "key9": "2U7aGqA9VHmK6WciuWjjGndiAC6rNwNJy7sWnBwVMDLn7ZXd3t2pZkVQJHNrNzRmetCJTiBYyrDki6zrJGoxWzYP",
  "key10": "3q9f1FiKM5LUQ396tMaeQV1aJvPRrHHMZismvUB79nCDVQHRHnursyveiaWPJj4oBTpajW6Y3SvCXc83G3RDC4B7",
  "key11": "4Kfp6RMqVZJ64Ga5B8LgwPg5rMcGx1koFGYRowKSPRuZE4EKp9gjFTYwi4XHbjUZGa9tC3X9apZygs3c69KLD3vZ",
  "key12": "2B2GmVu8YChCGW6QV6RW1pgdvpMMSbaiRyjPCSsqocqguFhNb6X4ehWuuNKogyzAyrfXUM1SSQaCVpnwCaXHuRFN",
  "key13": "NHeeeTECG83iwz9F843kXe9Rtbo23By3qt8iLRXhsyZKcVFPUGPV9dMiFMiUZ8tDDB3AP4y7oeotMcHXr4zUE5S",
  "key14": "r1mHjQ3GSdRvyBPQh3MUDdnFEwLEwEScHLSB45kkhe5eNCtttj9QeYG3aWkenxw7hRG4YoYhzdSvWj4REBYCRfv",
  "key15": "3vsKhiK4XzjJv8zkq9idV1vyYRuyX1xRAotk6DscJSuDVwUcuMaLuXWepD2KLThVdt2JBqoDjAnKJWpZygpTVPNZ",
  "key16": "4xiP4xnLk9RtWTXbgRXxVqFQLRoq4Xh8vNYVxKqquo4weLVKNUEhsEugs7uhcHduiW89TVrMf4NUNWXcQ9fPVH6C",
  "key17": "23y17M2PaNA8sWBHkDc2GxCQ8U77Bn1eEH9bHCdKQf9X3Qsgq6nPwRJsug35PEsRqCZKNCNMzdDeXVcnEVCu9DNG",
  "key18": "51sp8nuN6FrXpVg3hPL8QfaYbPYEGnRsi3KPN7obyTuNU5cuFimPSvKQavJFZzyB3zo4a23AfTZyTtNKaNCRwjqP",
  "key19": "254K9GwVCY9oe9gH3PUjftcwwWxkBPc1TbqFieELHQyo2Z7Q3j8fH8riB1WaB7gBsEhn3TMYoZxyUeUNMwL7x1qR",
  "key20": "3CVa4KT9mEyEJMzdkkbdsVykRzowQ3wfkVenhxXw6J3ry7SfRTVwVsJjy3aSXrzYejec2SDcj8wpDVGYFrh5Zd8K",
  "key21": "oNPbigpAhf2hoHyp1i1akUKv2YPfmjTvcfQRvYxbcJEsDP294wNTDAzZMMG6VqM1nM4JayyVHGSyXp9VebgNec4",
  "key22": "4pdSk1mV6gga8jzfppkgyXirBGfW4ki82j7uv7mqpFfAuKbb3V583rE1ts9R2HfrNu4PQoUfGueukjcMRpnPADe6",
  "key23": "2pU5gpPYDS9Hed7ETNVtNRomC6B6VjzT2TP5KW3omebGzd6NiDf5Krek2VQgeig4QZCsngWAMooERiy9VPSD8rqw",
  "key24": "W9wyKNWXBhL2sxM8eewofpjChMYvicSabqX3BYk4d2R8JZvKt1Gk1o4u7ifmGcviGnANEpfvBM26eeLng71qggK",
  "key25": "5aP5UdFy8jDa9tVxiyeWkyUxPLoe5NirYyhDM7JSC7vfXUcFTuD9TRZLQkjRyxroxHKyfTMqZE6yNnuD76Ew48T8",
  "key26": "BLSLeef8XnbY6oB9BfuAdvdBmPWcbueQgrifbKjDC8Rk9zBPCw9MXTjFn2BqWdAhXLwHpqvqqZKZDcrFdB5jVqB",
  "key27": "DRdK71K6ekgxQyH4dxQWvGGpfaMp1XYGJQ7oj1Mhod6rVMfE6pT1HEors5BCYy839FKAw8ySJoW12Y6DWGv9Q4f",
  "key28": "RDuvypYYQ5EzwmA8t1FoDS2Wf2Kaezk389wmzWYcvzYRSVCBDMUjDM7zfZ1dqg6PdoUV4wGcDJR29FM9ebLetPd",
  "key29": "5ayHmBKYeCipsmcaLiMXnA2p92fuDBjGMym5CSUSBJ2tAixHgEA51nXkHQf6UBSmYs4MBYvod6bT8K99k6FWQzLn",
  "key30": "2MdACRJ235EzdyWEFBtTjpHEu7ARtQTwYEvyfEZbDE7YjZYQTazjWtDs7L4HaqzXTvAPLatQ914goMKQtBn1ePiA",
  "key31": "3V56kwsUyG4QvQsqxYAcGhMaPZQJYLUMrb7r5on35YS1d54UqPHPC2mxU9z49RSSHJ4Eq2BnPhwkLhqQjPqcYWMS",
  "key32": "3hidSV9jdBacqo3egjTHmpxrUTor6SZMCEuLnaHkmVzN9CXUCfbeLHTD5ex9FzLDFXA1UAssH9WiD3GCKoYHDhCf",
  "key33": "472opHVG7Ad7c42V2YSmHEd3SfD8WAkZacccMsnj5b1w4DwwGM8uNWPe9d1eSLZoYBYnMjaSSp1hj6WgRJnJ4kuV",
  "key34": "5XZwoP2thzEdESPJSmjS94GFodYRpgZ2fT7mZuPwaJWKRpbKcwmH52UesWKhPVYuwyhWyqLMX4t35qTfTzNo9ARZ",
  "key35": "3S43dBBpm7Tg6RzAtBDKKpLuFUHkvYwB9xdakuwdhbP3PmFRZdWpMkQUbb71Eg5ALG2wCovQFHxSf3gkzmuFM3Kn",
  "key36": "22qVJtv3fpF6CfuGo9jkduPGpLWgygKKLhHPxVGKqmdxG4i5WgLT3acuqQXPeNfzPpVvv4pqniKh5EtwEpwVxTcC"
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
