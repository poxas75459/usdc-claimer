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
    "44ZxweF6ZkUPoopVdYbHzbwgtjz2zx63NJ4qR7gn3SJ8hriA5o6VRumdiim3e57KDuAGewRXVijrKYVBJXNT3HWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JXqjvYb5A8UGEqJAYVinLBtyX3y58DauUd8Y7t5bHMGNr9sRxXk5A6c2aedirEUkEKanxcvZpP2H2U1UsghUTXX",
  "key1": "S121Ybp3HVDc3emkEQMKFmqeQ9VoW4ay1xigZdPVGCZkwx86nhCqWLvMWFpjrg99iRzVFiPv1YAhMMdRL3BDtCC",
  "key2": "2CQpDywhQXbPBky5ZZKVQrLHTY4nKPADbbBY6HzvkMksB6XaRaJSPMAcaEeZttz4rU62CVryTqYGTj9RmwXGiQQE",
  "key3": "3qzf8bAgb3HTzidEUuPpNbEHuqafu6G3X7aYdkpnEhBPWjky8r12KkPM7AbULQpATsjqopfVTn5zXKejMviaNLeJ",
  "key4": "ZAqmnaaeUEK8mcfT9fRNREMDm8k3cm9Cck9mij6cFWAsCy2Sv5ogMxf3goHgjq659suJhHkvFzE5tsJB1hhE9gE",
  "key5": "2iwacQDGrvBCND8iaYjgENvfnubAFyUeMtSG7CNz88pTjxHEiKNEbs1YKfGhtHsLpfYNG7zQ4dG3zr1dSKvBvR2L",
  "key6": "3ajNwkEVcXwzSanVfguzX16MG2gEbtfScZG82EXUVRLmA4RmFWguVQUXycgfzk7YtcCD6KDWXsz4NzDk5SxhXQSz",
  "key7": "2mCmyAsLs922FmdmoeBK6tR8TGUguvKHHbpLcLmQq1t4JbVPTd7Hv7NGweWhgoYqTznfuJgpetDoHzJc5g7xVdD4",
  "key8": "56p1NfUux2YnzAm3m4yARaNEK6ge9R4RpGwxH82reFcqH6srTMVTNYKQNDuTma4SEHDJkjA7XgN3jTmbxFmkcxbo",
  "key9": "31hoE9ydrtK8ag1dq3bJSg14J82QTqZPEPd8mbJwmavGBRyhKp3MPwGvHs1myLRfyCtAtPUUFAaaDyoaFEpSqgpG",
  "key10": "5vN4127otG9JoF41KWvBTeEEv9Vc5mw1XZWb6oJ4pNguu6j1jnCdpFWjwZtAip7e7Lai7QeHXZ9o7SSsVrRbZsnX",
  "key11": "Aqj1aGZEoMxD5VDYsGBaMdosrDqrxyyrzMSWsJ8EL3EY31c9NBVoLxwRTjfgadxYMzASzY4HLMHGQXPENZxQcAv",
  "key12": "58Lvs2TrfWdaCm3BBsjATTkRLr8HUxx43KWDQeYKD5xw3k3stTDLR86yEqW8eqG7XLxWBbUcxixcPc5efHzpRJ2S",
  "key13": "5kxV6hAD7w8sr3sxzMTRdqBoL7Ac3jtgYEQmFw9VUuqbZ1US17p1XopjYPRvYQd85hrGP8H3TcDENH44kEEZagHP",
  "key14": "4wcxKnDLxY8T5qZP2JYrPqgv5wqR4ntgWyKQugEVweDYQoCd9Y1ajLVRsNDBM8s43rqWYCRLrY55zU1fKKJR2GQY",
  "key15": "4MdYrxr4BmdRXKs8jiWzt4EbsB5arKt7ts7bCowqFwBuNZvF8dGZGQYXWGVDvdbrTyw3hjFMxMTaLAek39E3y1rr",
  "key16": "33AHmazJky1dGT2HtEixKm1dZQwAQ7FK4yc2VpVn1vsSDRpKyc4uiAtcryb19okTde9opazcp5wzkCcL7u9XenLN",
  "key17": "DWftvZj5EnrsvNMPgvjK7Wg86Qoo7Y5vqWNjJL8mpdRwfh8X8nqBdDrMKMbe1aE8XPfuvJYGSSFqthHaCDuXNdS",
  "key18": "4teCexSjWkPwo2DKSj4Q7iAsaSaoB5VbvFnDfbGMXeQS3kAsUkGcGCt79Hngw5g3hfYy4QcvW6gvT5tZa134o3LT",
  "key19": "62nBqwkyFbyAdRRihTmyyAstqGdysb2hGoSdLLBMB2CFHDNrn6tHU793QjmDUGvkKVtgcRvsm89PcrEFiio7FtTe",
  "key20": "25JH5y7RDjmTq2gU82CrC8Htbu7gaSEQWphPyfwVkgHgTKmfecP6czwJQdauLPVFXaunDtMyrcivXeuTAyKjYLTh",
  "key21": "4u1Yctu9StfkFwS2KRaqvsBiCdNmAABMBTXHMd8cJqrEDQvGCP2FwyZmhFEdZ5yoN5XsyqE3atnrdVLq6KNgeV1w",
  "key22": "5jxe1gNvJd1gxtjH2m5evxBq55Exi2mUJL6pAwX5ipf6zkJ7yu6qrjFxxHyCq6s1EtiPvpo4zoYC3jBFropa8Jcr",
  "key23": "4prLDh5TncAY7Job5GgVUGdXgbeASYBLjGKTBCJMbD9oB6qeDsWXUkNazp1jXfb4PsbK9VBVs8XUUzQdZHQ3MbkN",
  "key24": "4fgZv16osCgfmVNVtnUWG5JUgWawfhsMFZToBcH6ejey8oxtTD7YdUJ6XTmWUbVQCqcnZaJ7iRtr9niPKqPxFKht",
  "key25": "2P1oULL41qAgu7XbeumvgZT8yYxk3ZdDq4k6z5MD3rLiM3qBeiooWYGXGZP4AZmV8RpPmtoNsY1SRG8GZjRRDgXs",
  "key26": "2DMca5N3ywAwvgNwxX8k5cKhP6gfGYVvAqVViaxoTbygN7kEQtHaWfLs3iDy17mNFdrS1WEKBWPAPJVLM2sKsDSx",
  "key27": "2W8p8fveGmiuc5DLqSPdCQycEdXSV38gDZL8reu3L2Qg51VreNnBi1Qf8owt7v3Lr2dQwcNKf6Sc97P7JPUtQoWs",
  "key28": "35Lks9oBidWmvic7hda26pb3HtNJqp98X9st1mZ2M6R6FkGxf89CRLmPxYKAZ99M2rr9SZNYFsfENT8M9LibRP3",
  "key29": "5N9z36EFgj36qeuapQwxdJFUdX5CrCkxqJ1MP8t86pG3gAwU23gZkY4qxqLJKemjGo78RWkJZWufRLeXiRiK3yM5",
  "key30": "65kBaGB4ebPQ2E1cpCcRLkSshA1d2JhusCyq67JV5pCAj1qnDGR1JdULkjJTAkh34CoCh9DQAbJEQJ1r9QXv8Ee3",
  "key31": "3pqLtFeWT1qWuGNKx7huXCL5RiXzN5TLp86ZZDRAPJsf7mRwktwLfcG7gm8RpvbJVJ9K13uYBD4Z1P1dUUfPJ7MR"
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
