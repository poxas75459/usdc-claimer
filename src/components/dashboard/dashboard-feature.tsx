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
    "62UbRi6WUQWh5ELXWYLxm7EvAq2KuGraSm7RXifSR5U4y7Kr2M9ekne17q7X4j2V4wjigJi4oGtQFMrZBpfqQSp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W7pM8c6PTrEZJQKFiqCFFDEJPZiiGKwoAeZYDtHAK7xZs3EvCXPNcBT52sYALT5q4J9NftdVapTbnpiTYBN8Jrx",
  "key1": "3Zy5kF2h1H4Gfu2LJkcbF3SRK1RYFZPJ7y1Zad7qzpkLFMggz6jfQw4RmyAp1YBJZZ94Vh7yM4BXURtYtXGhzW9b",
  "key2": "5H2Kg8t1DTT4odQwrq4KyJnQGpZdf7hiLmHQ6zyugSNL2zSDYe5gAHVES1L3dVFM1Ltx98qYeAmMmhhqBQBp8gWn",
  "key3": "rL1mGT9oryd3giV6FHmaEiAx46ChnAAFjfzXkyuaMWSgx5QGieoR2G9XHtRTXn9moKw8aaKnXo4SnbWYhKurBxk",
  "key4": "3mn3hQr9iB1fJwFgoA2X48yMJCYB8ApdRSdfX1og1NaerXMZBMkkvAs1TGCkF15e2oR17zsdSXgpYRtdcAzsyjHc",
  "key5": "wCXpkC56GPYrd2aXz8o2fUGLqxZrHjxM9w9VfuZGdRg6wQZqiTwDQDC6Rwq4if7XtTYV7Dtd24TAC4Mdkga3RHw",
  "key6": "4ehqe8tmg2uHpubdW9pwFs94UXEYgD5m9xoUgXrtTqAyKyW9bciiSsbpfixcHzarahS2UGSqjsdcMuFFVuufetvR",
  "key7": "21qSaGNEdytPaDVyX1oQScsBUe96qVHTBqT9wvqsVW5F4WB1tbsKdA1SdXyZGKxodzfeurTxtg6g92bwvRVAEXsx",
  "key8": "5dJpuXQUs3mN9Y8x9P3UhEWu2YjZGPxLcNVLZrs3igyv5CuqXkxMJfAYMrYJEafsQw2YUmi6TKWfzkFDVixLGjtN",
  "key9": "2JZ5BD2dfMFJkgB6y8UgxvTWcu2deycxt3MW6XbZm6g88kadPPDgcBxZQm6QgHHjzZjwRjSDwranFHWABetkKbke",
  "key10": "4PSXpsDZqkGvGuovbGeTAZEoTtWUHVqNvfJFw1XXgg74MvHhjwErn1yFAd7ZtNcaWG1Kb81fjH9Uc4PH9omqCNVe",
  "key11": "W7DwqVubjY7a2En7yjYCEroSsHPSMFTZaMq5zns5cCfYaS9sTnkNhDmLQ9BHEWadLNfAY4aAnUpYPY6P6CznWaa",
  "key12": "5sDku65RoBktAYMkU6PraXNh2DPMvJBu5rMdZZzrZjmWMiBtysyNBB3q1XAjk1zuLahN3rrKN4qM6ngmsmK7CNs4",
  "key13": "41Jx1iEwHw4sLGiER1ZtKmfQw9smHXbK2eVPKTSesUUuo5aCZwAJcRVyZ9HEz2JoukthEp4r3aDdk1ZLLSSUXjni",
  "key14": "3g8KLpmquk6GTgTP4rT2KugsyPd5xHzREiDhRGXHAuc9YGHBrB5dWJriHsRLYi5x9wCMjAvJbWjPNukWwqpcchAm",
  "key15": "46XCdmhnXSx1x6g6Ax2BUpzWncr6kw6vtbB7o6DivToknBpqFobdserfwPQQaURd8oacWFGS3Gi834DEx1UJHGqM",
  "key16": "uR6uFySiAE6PB4o6iYQxpgEcV2eJrbzggcn8BTaFHCo7dp3GwdHjQK6fcAFwrkqCjscxY8vu29XXMZZJGd3PcbZ",
  "key17": "3MzmKHYNWrEdEdagFnQ9PY4N39Uz8tzSNpdmwuXnf2GQJE1cJzDdGVBSZKCK3kRgAyxV8vQNVZe5ofx2WDVsgZ3Q",
  "key18": "66UZzJ6hroBLpZaHt769zswSuhHP3yAs31Z9ysEbdTkbfB7BHLWuWVbiv8REnPbaNyzrXA8UZtTnq7wpCYC4QJT2",
  "key19": "4JEWNQwUpw4Yu1UpKfdVVdCfiaxaxXaNMwjJPWGvW1KCr55198bkfWZ5atsCnwg6heD2XE42XejPS7QbNn1ZvQYh",
  "key20": "2SjsBPg7PvreR6imhUyYcSTtAFVgSJDM7m84LGzHKkiNF3a1vJhqyp2viFVSTvC16CwKeeDW2BX4QwDFAQGuF2aa",
  "key21": "625DbmDfSPgDr2qCKQW3DvoPtrNNtVYWPtRbFQtit7z42rXDehPV4jasqwCQGvdrJpH2uzgXdteKWoayJhZ911aJ",
  "key22": "3hMp9KEycLT2k4VXfeYHZPyRnmuQc1FJDsXVP1epxQ9r2ubMN43TTR2YDwhJXp5KHc6FfgzrgLfL4Gc2AExX6YE7",
  "key23": "5Qm4mvARhRGd2FBHZZYkhirxgp18ajZYxw2LU8r1DAtSYtb1LpJh8ABNfydNizw38Tk4jJKRp2zgC49V6TGU6h8v",
  "key24": "2QaAqmSuB7Qsx4pVDP4T3X1cpaw7MSvtCbj71gS6t3r6zjR8xLa8RQvgoAVbrDaS7EaCoVuREWvGseKTQznPZWF2",
  "key25": "2CYeVW5SXhF8yRZaJ6uxzfyfJ9zS1k3qgksNmvA8V3L1HAR6SAhuZUTYgtpRRwyERTFdkUnDJzcPcLvs42HC3NVd",
  "key26": "XguEadTu9SEw5n3AXF5wFDKjgWDKQYdD2RoAMpxDGjHFwZXULbYsjKaAkcFGAizzUypGExqossS85ohSfCFpgDG",
  "key27": "5tAMw97kaQDVJcjqs5v4c33tpeC7e76bTL2ErHTLdcH5H9G5xcsUu5uJUWmHHwukhB2Mwtmq9PCK7tBBnnxvX7aD",
  "key28": "5JzQfu2vUf7fhowLkHexK9tQbTM7iMdNNrrXGRptS5THQbYJTi8eZ94n2t2XUpDd2PD7SDZC6WeqJwmvuo9mNeqw",
  "key29": "4j1wrHtMcnbgC6vzChgHc25ABhLYtxm8jHXhDp9KAqxwk6qVjtraveSDzv3nfZ4YWRMWnLM6ZfmhaR6Vt6w39qkY",
  "key30": "3MFzVZvUCzLNaSqgPpZDBajJ1SGKtprpCGuYSioGxx2ym4gF43GbPPJ6fNxJNRCe19CrrJxv8UzZmDSgJPKqYkF7",
  "key31": "fA4TmJx8t327s2exFooiu6xvkWdkuS8wnSB6uMWUiVTPXekhknxpX1pqc7msUP914ZK8KTCrQTUKNEpB2RnBDNv",
  "key32": "5F89DNwRQA3of4NEkxMZaCxMbVNU3rWVsdjJqxSmeoTFE92z3hNA989npXXjTHQBJueUvYkJd4J6XUx7GbMu4DuD",
  "key33": "5q34HVa8TYSGNzoFXH2N7wYLsTjgDy1sQM2BpXTSquAoFpkH7vrH2try7ovnYwivGgjfKsnj7n2DXJYwpQHHzX9w",
  "key34": "2bd5AtNJHRjsCYSqWoZ3mPLNbDyC3G57reouuJ4KwYmcSCKcxZ1kCL5WyeCco1KoAsPBccwi1XA1Ak4Q4764u5FM",
  "key35": "481nmBXnwAbAGttFpkM1NQGYorabvSa5m3fAAqLr8nEBSyaVkSC3Ay2AATCXkc7BCxoTmuuxWFKYwptNwmBEBEyn",
  "key36": "4MjtqoAemU4gUeCnTVZrwuQy8peGHajuyGHjMBFHZheg9U3mpKrVY5AG32Cxp1N3NjFKodKTMV3BJLJbzYvfMxSJ",
  "key37": "WinwXGntfWMo6QY2ZW2MJXPLykDUj1kW8ZviJryA723wKweNtWCJ2QiiLnhkjaMa1c5QLLjZhUiHW4AXDBeKkke",
  "key38": "3a8bVSZEFAM4uAssWzhhybFba57b6wQuKw2Ld4G3m6ucoUUL8r1o75G18zchmc3ZcsteJY4syopXRMJcrtW5Dh8X",
  "key39": "3cQS7JF8ApLAL4H5abkyvWhoE1hYZ8U1imvrGHwZp3d8pzxawLHENsyZui9TajJxkrVUe4xgBw5dKeEbcJT2AyHW",
  "key40": "4C4YzMhJYNRkWZQLpPuq5PCXJxXQqhAmLzwv4xqyGkqPknGQGzoyfnAtgQjMihpQKY5wsCce4sdwUwviyvoTPStu",
  "key41": "5AkQJk8bLwWU28FVdYJNG1ucyGsQsJMWg1Dimf6MAwVFzXtb5SzDR4WHJTagfWztpzdgL4diQkmtu5kuKCqfxjQz",
  "key42": "4bXgNEo9N7CBqwV3rm8JZnbXhLb23y8EEb3UgKf1P8drXEt869DZqfpHRVHMYX5r4eZW27pHvULoXYoogYtiwmSY",
  "key43": "3mPyA21pDcNRSBA1vPKrkKx2v65fWS4DpdUkeehc7LMde5zkHQL5NnG5GqboqhrHPZuqWgCrWvUnu1cX1gP6GcC8"
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
