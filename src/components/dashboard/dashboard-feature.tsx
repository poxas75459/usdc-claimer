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
    "23Px2UJRMKuqucHxyghvjUvPGmk95Zsp6yxxvu6o1apjUqKhUV2TLc2xHC4SexRZME7KaLJyuKGyyN3wmvBXRV3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U9xRErKqRaHUs7R363nrVmpvmn7qxFS7Q6SdQAhMoiiZwM6gPC9LcZm5ZCY3231T3G2rPZ9B9d1MJt9MxWh8Jca",
  "key1": "2MUDpvL2kmp8ps4wGTVB4onnvcBJ9mRHjGvNRchVhfAsdwumEcac7ojjathHYnr8hL1wh2PfNgHkrhJR3oXbA3eR",
  "key2": "eiH6b2p4Q5jx7cPT6SKXvvGLeys4hz5FQrLryifsMyjX8d6dz34rjzmeM7tpi9ktXHmLt2dfRhtbL5Wb4mngPqP",
  "key3": "4Ann4tywoqVkxtLmKGmCvtnH4c2Srf2VKiwS3erPpjtv2mxUaA5MmZnLmVbjPLB2oaqMf7xfKuWuLJDcpWHEGNfR",
  "key4": "26NpA2rQBogawkf4zzgtcGso27CXDU8xxDhfo7GJsV8dhVJCziDb7Kr1pAkMFFQVzDUQTcoKxD8PdcLRgekQ7q93",
  "key5": "2TM4SB5SVHgWEDJcLWi8yrwKyiRY9FaENUVnminGtbwQmeFwc3F9TGeKiLQdrw7u7KaHGpdCwskm79oLddCoPhSG",
  "key6": "2an2hpzCVgMiRE1psPVnJ4eQ17otH9VLJVSHwnw88VCdYUsvLnVzaX4PWMPh7MPbiWPGTvgwqg8kxaJFC8LCcNjm",
  "key7": "5brYVh2ZPcskmwZ9sS9mXSBgJmtWL8QHEAcRCAKViS87DmsSEtPsQNL8CTQYAXxi5HzvQeHqW9W5VirENH7P4XWH",
  "key8": "4FeLa2SyMXyW4YhDgW9QZYXEEt7r2Bs3YPx126tSzQW5v9p1TysmzxPqkDJCGjaJtZbGi3jYeuDr2Y9xfRNK1dEz",
  "key9": "2rEinV4ntfEh3JbkTW5y7a84EuP4XpBzZEptCnwQRk4MspMp7JEh7sVWCVzpMSP83DzUQjrVgqJ8bS3WVpJ8YvLi",
  "key10": "35BwmFQtq4hmZWWGUGNBAiC9CpYQMeG82XzbQD6rRJXc9a79SZDzZMzLSbTFhpNeYHwkyrjbTQssi3SGPhxipkRp",
  "key11": "2QbKPg12PpuHDHALWspQkJDNvyJjEzjvuBZtykQnQJCim8qkG8Ho3c9zkC3gsrNaQCeyoXysXzLf82GTcYAEksHv",
  "key12": "67aHUPidwcb1n9hZgTBrvm99zE9weJnY71hY16G2gAWxTncY5NEqeGMLXbmk7uxayv3G8eTYMFQiN8jmApwwdwT1",
  "key13": "2jJxpntZUBTSsPYidyzVULfTdNvc4Rs6zLNDjq67dWi8JcQHaJ5S7hAJpveWJJhGjTBbfvtrJQPVXJe5ffPSHXxC",
  "key14": "25MdJP6sCj1AtW4k7hXBxfsSatYQseBEESkFW86etEjweCqtP1rPxx72pZsVyCBcjQGaF8ezmo84cHKQyFCtFou7",
  "key15": "47mk4EtjViHMT7QARXut8tvFLcZZJjCEAg5xgVLsozUK7M3vxSs2YKjPKPGUxF32fLj49UakJA7xq1EijZgPVXCz",
  "key16": "4N5YvQoseFnTehmFmVTij3oaRsigxyKKfMK5FWYoBDUbGwuHbCEdJc1F6NN9uuPFMyBCjMZqwJ2UKESzJB1zvkJt",
  "key17": "5MoFqno9UQoBw1sS6kanA19L9PRV8ZgXsX3oedsNjxwgTEDoVjyGGBp5nhHHjs3z9CgynqB6qWHrT7SfK923fTFk",
  "key18": "4MG5aA654M37GSWg2j2LLDVwAr2QyoyThzYmFFw3bAskWA5Zy2hAyXpz31NHsKDLE1D3HDjXdA6yHLaWKKS23QKD",
  "key19": "2sxtMWeJDXt7tkDdtqGmbgjdktqv2Uzt3HMdYecj9GRhJnoinT5DmWYDys2g5XE73fzHaXNUTt8y3GmW4qRofgMk",
  "key20": "sADB9p4ff7MwNWeQzHdUzs9KaUtaxR6BGjZQ9Ht3UhaSuPtVSScBRgXiaDY7ubvdaSksiYNZaRPKUh5Rd5StACC",
  "key21": "65kNLovZg4njBp8f9FT2891Z4P4Ca745bSUpnDuU7z3Vem2JDqrLn2avXSyo8poHrUPVkgTCnhig6rKEZjMwCxgn",
  "key22": "2GvhoGCQYwVqmCaqCEmNPNzqUfBX9PKW5GxAGvJXzEBsp26xZn8MYRn43wr1rWVGThmbBhQib5fxdBkUvvyMYcBt",
  "key23": "5WoC8bEksoCEhy7uzYEK2t1TGJHNCqn5XQeGhFuCuAggAWmXrQYxdExJVn22uRwCdtKJpEdLwmiTVN437h7S5Rqj",
  "key24": "29kEQWzM8QmktKTVjcSgkaRqKGeUCvfaekHrLkcBjwxnKa6YpJH1n8VGEYbRtn9j6w3V73jLgUa3zQsYd8PHQ4qQ",
  "key25": "2gNTj1w9b1DrKsKzDp1PgG7dXFspXz19A9m6bscsN3sNZSRbD3C2HbbAvo9dFcGXxuj7ckTvv2euNorG5Fj6hjvq",
  "key26": "5Ee2YCqtsWYMWZ77PZqGNeyYV8n7VimVkJM2DZrwo4ZaGSbv9eYT1Xmer7eUDQ5j85nSAyg3JCFCVbR7gb3QVdZV",
  "key27": "4bgrZLHpH9WB8dtioaW4wPdPZXZYM43rtiVnrYtHtyZwX3vYdmM9DdpbUdi46MbMVoSrH5fRuzdBaauzEBbvG3WD",
  "key28": "3vwtJUGtRwajjJcKMAAH5gx6tNRBCJrMd92J8KKgCGreN2v8UiPADT19hVsnHFUD4r8PCjbjwPzrnGforkUnzGv3",
  "key29": "3cuimJThCHHVES2ZCT8cBritMhDMSW8rdyGNpb2ZLiDpdAYe1Zi7PhXvsTc9DEXhWChsMKECnGQnV236rpSmLrkW",
  "key30": "4YcWKtEDcqHLPNPGboyHNca667UVBe1EwsvA3F6CymevGuuoBzmC7dWFkHhE5wNvVib1UDSUCrzJ3pJWEo91gKaw",
  "key31": "4fQ5h6pfn297R23SGvvdqrbQyuNtzf3Hd17rWKf179bdymXxTE1bdbfWTqcPTCTqMWwawX3uETMW8w8GqbQMWpf3",
  "key32": "2VHruputBeG8VPtivYuDkBtXS2ty9QhdeDYhEQxdTUe8YjuMzwWdsbzLUzhZ7XZijZv5Po6ZfcxGKs4788RVZPXH",
  "key33": "4t6wAPCdxLxwU5yYJazr2yMUsuas9WN4b1Jik2QAJUrTuzontUGSeb5LTcUxydXmSXPUD5S7Tw4V8HEkWtfK8fAs",
  "key34": "VtPSrjg7nbNVocvLXnbW67svc9Pvt4FbKpFacwhf9MRgmuNXGg4G3Xsh76LUjHL8pESqWUaFnWANdiiNgdD66b4",
  "key35": "4eZ2gfEo1zrpgL2QaCe2v8HVBsNXFvrbjfwHCsaCsmZ8a8iQop5cgKRRTDoFtgpB1DiLu7fSEbD1zCgj1drunH4R"
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
