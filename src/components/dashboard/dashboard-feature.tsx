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
    "5DZvXezJSqfGsYYBD7fAHGzHZXRvWLYudmM4LQgdYfN8FenZZhwtjPqr3YcctrHV5Ev87kNgg2Qt9DGCDHhaT9pY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TY5EwEBJ8yFVKn2bzkaVmxTTPCuUAESe7ZNWTpyPeFRutvi5YkCkz1Ec2GqAwcpQ9VLUVj7gm687eK8n7fWXRAx",
  "key1": "2vsMejf47yNM5NAauhfgZBkSTznC1sEZZWo9BG1SEQHcJaAmo9UbpuJwEewzcehXWfL5dnZ3sMUWzLPhmViyZJzs",
  "key2": "4GjQ3acWmUmyZCFJJqAY3f65tCdP8NM6jPE1LBMrAueA9EmJNjzsWZCnXge2FWiJK9UjWfzCC1hRUveb4NYJRXDh",
  "key3": "611GBmiuFtU4Bo7ywjZRE9Lb8qjpcUNW8zgj7eXC1W5q6yb2JNDb1LGwnfHz51zBiVXWV9J3BKG2yeXR6XLeZat9",
  "key4": "TWcTaN9p6Jd1aeaybXs63rQT8seEBk69kVWdGmTrGnnpXNm1QE7EBt4vVty3mCHHCB7RLTRvbePPwQoqYHVrx3x",
  "key5": "53aD1we1sb4t3R1xCApGZmn7cr4zjBY22unw1YJXHGXHMY7vLPoW12sCADzHK7fjqP1uywJpHgYAWchkGHGufov2",
  "key6": "2jG2bMzLHgeMXtBH45AQmn6pLscdS3JDBaDsLuhMDPoL429eGbB3HtY4ENZmL2fLjuZKNms5S94zexNCYFWsLqvX",
  "key7": "55qviS2sZcE9XEm8T8E5rxVusuKJhpiq7PbXwA8wbMNjsD13ybX9UReJAwgL8bbEnexttTXh9pYnRRGrwLC3xDc5",
  "key8": "2eefkQ4TdSBcqdGiVw7e9DxwwvE6y8oA2cBzKpCR2uLLCNVboC8PxoHtyXzRcERfUEWEaEQzaCgmqdoHVMDSorTm",
  "key9": "2fVkgTDkgQaezPjajsPADWxwEHAqqXjiMD1QhjtWeDj13NdT5Z67JHoV7QgokJxKEBYCrsMpXEurykqHEacbQsvj",
  "key10": "x4rifBCn38DKpj6AdeCooxqNurp7KRoffNawnLBmhgLvhZtLyfxrKbyvTwgNScReC9Zph9mVoFRH2xHUQToWoaB",
  "key11": "61GH1cLPDFecJVmnFdEhoAXhX3fACvG8JZfP7zij3KLBKg8gP9AGhuoC7SMcu2eorwk1YU4U6CW8Bc1t1Q8uoqfZ",
  "key12": "4YuLLdMk9ZEK21qiPZAHb6FMwW7gZyZpuhFenzQhQF8c9YgdChY3YjnaXKf2PQk4UcSH43qNo62enMZYUsmQPzpD",
  "key13": "2mp2VwfGdJp7QjAvvDnY3YejSn45bJkXmfxKQieABa4skoL6sFie3j1DkF6oaZeidfWcLjibVij2N8C7wMDj1ESX",
  "key14": "Nop2LaFgD2Z3ZQNrNKeijK4UmV3VTWdyDeetKYvEEJLx1gsWRLfcdZgBaBpWoyLnDHr21r28ScUk9rMaNagkHzZ",
  "key15": "nyMdfyz47Vm57R4fUerSeDk9SdjA16fb1h5ZDYgNipimgcwhrZU47uvv7ZdZMwJQeVyKCagTpjJ1cZ2y7hYLrUk",
  "key16": "ZbQMawpgFztHwhZoYeUwchxb6q2PSL2qchecokAo7gLKe3kGHaop6kMR7M8JLQAvms2D1z2DgN134XfEqJcMYxQ",
  "key17": "3vpgDugtT4kptnHMGju2vN3NuhfjBabhSVzHLGLrAnpd8XQ2MMFp427je5HLGRWRkD69ZSUtF5k4TgHoPCGTe1s8",
  "key18": "5rtzzjgL9jgcE23rZbjEE6ya71gcb9BVMtHxsjvAW13ovzzagPKsG1Pmp8GRvMedQFyNzU4VNkq8EhEsuGHzQNqR",
  "key19": "3n9f7opFpTEDD84XK6SUPeStxP3sLMQr8ZgmGS9XPJq645W4hYpoh5AvdgMHhX5f4JT2BAmEC6V22DT81CzMcvWc",
  "key20": "2yMxLdM5HkvYJyw3F4NsvgX7Y2EaJsQep6HkDXciYGmQqKSMmuPSFsYhYdzvNS2ec6KYNtQt9awFn1cNFNFnoWNg",
  "key21": "4AwJhkxDmyJgTND7ePNBjFSaQkMJCRAdaJWZjeDVWtmbtohQN1BpuK7hqebhGiGbh2ohZJ4vWeKyWvpf4T7Rcd3S",
  "key22": "3BpPS8k8QohWxXW2gkdqZeoG8e9yMDyq3da3UkoABhsWZQrzAUefhb9f1cSvMfws6YrJd9bg69ru3x6MN673NErK",
  "key23": "5s7eczDKHGNiDEnxRf1Q1N7R1xRd6fM8pXhiXigxMNUqDQfmtLAUqUigd8EjhSAreqUMPXb6pRVv2Pv9GeYg6ggz",
  "key24": "YM7LoR3EubPcaz9ZqSa35QQjgejWHvNjyoXHBVnp5GjpAx3J8V8tkUwsiugXTeXUKWkT5yCdHDjhnvFRSgKNJJ5",
  "key25": "4P3PWyAWqwwEze6WcXArbu6qNK5gvTrvGLGeUKHNwuEiReegDwEhZMqokjEC2iWDzgGQSZYkTZaaPRreqQNYa14y",
  "key26": "3Tcjvp29ps79za4nuBCMAXWYZDPhnRDLdJVZva1FNAknf9oVpzfTLAKvBhbaUpvqUqCrmpUbAHu274MB33Y6nPxa",
  "key27": "3JyUQYxst2kUKrQ2PvGDpEKcfiJS2ys7dQrzNkHVNCQ5kazSr3b5G9TSuPN6geDEqKTQe82VLSYRV7C9YZJrgJGC",
  "key28": "5yEBWtqWk8FXZ2PEWc83EqA6ZeroEBKgk16ULNv73FhvH4WVzjVMdoNDXjn3XddNDdLtrPC9cu4cCekCDPeAzgE2",
  "key29": "3LQoXVs8UTkzaCGFnEEAgyudWnmDydj8BJSunTZNhdKkWtDdfwNyAzRvBUqhUdbrAngCp6XmvJrzTKUCAeCphyAH",
  "key30": "3BXGSFqHuh5tPXiq3aggL5D2McoiJLuQDuNEYtJ6aXGrT5mWqvskCCjKgMYtPKhsLcMzkZNjatQGEip4xVXMjVGr",
  "key31": "5UEScHDkCmWUQ1ZJT8VrCkFCbHjNLmuwnLuKXRXxhStYWcsJ7oxKfV2wHD9HJqCJe3EvJ6tU1SZxD1HECmUw7Dp6",
  "key32": "2HXuSNw9D5S6QhbRD4ucirhaHixJgYCKM9XSMxLNNg9BXPW7CBKR9G7w5RZSpJpyN2urWPbfFS4a64nQDYTtqRG1",
  "key33": "AtKD2mw6aoSpNBsXcwuqQB32ZBgMVyGm81Y7fyWqgbqwe2pKxW7JFm2BZ4oohpF15qSY5nB2CCT6vSZn2UxRHiu",
  "key34": "zG3epp6mUangN1NNMbFJTna8PiRmoXfCHeXJc8eajhsg1UbboA4BDdjdpDrxhvcMo3ygBB3iTXhv84SDsEwGvg3",
  "key35": "5E4fnLRmrQ2mtH8NTJQNKsoL3N9Ua5g8uc7PFAfe84uPnq8r2b1QD7D6JL4wM4sbb6kw5uyLBP8jj1re27y1nWfp"
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
