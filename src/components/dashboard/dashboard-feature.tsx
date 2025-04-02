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
    "2VjW3TVQ1HCTGis77TPA4isKZ9XgQbRDnZ2NEYhViHCfTBQJnni3u75VDJ9U21qMYgcpffHArryxbSVY371qvWHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VU5JG3xQrR9EohTvuSLpWmJd3cqe5kxQEPLsTHtGDA7LFBhcuNaEhZK7PrJ2Zw5E5KfL9xG1Ew6vVT9TSVrhS9n",
  "key1": "2Kbq5vKcHWJm4TBCuCq5MJAUfHGoWVas2NzaBJid9vJD37NfcQ8qXkiwF6bX6v4DhUSvh28b5a5hoFsFDLoVDG9",
  "key2": "4M4dFANaGUMugcE6BRx8n3XB2vj97EwMyUpgo9n2H4A1wUgEzoa1qDub3S6FuGuq7um1bCn6HCF51SHDWrVycjyd",
  "key3": "2JWxQLabAEJvW6mWeb2A5ADeUDRDYNrYyUELcGcwGruK159tkVVqudwQfKHjKFpCoEeE1v14nXHf6gK8M4Anek7E",
  "key4": "D91ktSD7tNUZAj9K97an3vFUbQQpcbTSznQVUr7NcKvAeBut7jGu8cEsn2LANGPpCinLRs2U1agXnDVixnCybZf",
  "key5": "4TF4fkLwz9rvEGhvMv1ytmbakhoz5a77jWorQ3rRtJ5kqhwzbucAwEwAcAjf2SkUwyyEzHq6iqWxrNdWmUEj2m5k",
  "key6": "4vHeDH2DqUTgK5hY8LUyVSTVV1vQ5h5dFYx4QPTH7y9teVf2bSU8ufQZkJVv3FhT8rDvMh7MxZcNKm9goBPyCPCx",
  "key7": "33Qm2JV5YuvVhVyGoQntk5VnEvtUtQU3V94T8B9xCpJJfuKe3CjNbYRwopnCt5e5JQG6iKTQJuuKFp3GrVjKbmWp",
  "key8": "2WhAPma3RZKm7rvrFfkn4MwuQBU66yqapQRBbnZTF5AiTWknTjvwdxmHGoA9XpqNTMv5Raz9nDRhtwZUBzcX9SpC",
  "key9": "49vsEDVocNbNEmWpRJSxyKXug7WmsVW5bvXYjoXg3s6pJMWS3j4dLtwH9MuvF8RKCRYQSCNbxURg4v1cfED5EmNn",
  "key10": "4ceRz26W9XzWmR6vRQetbVXgkPuECruuPgUJnHeTbTT6AtHnxFZioLgA7uncexK47H26CRxtQm21FFyvJa3JZYEk",
  "key11": "5kjgy7fhMbQazJ28mtCJoTGrAdRmFqagTq2rNAtD8jfZZmKJuRvwcdtsTBw86V96giGC28FQFAXZujuvaKWiwJ7C",
  "key12": "3DSExzYXd7vTgzFjZVAezR4EHNeow9u58eYzEbQZNgXKFrD9KTeXeLMqDPdeLye1qXtRqTej7UTXTuxjkPHrfH6s",
  "key13": "4mEKqkh3hZa9ymDbvkJjRMSF9TCASG8Mkyn4vQLGHgU6RSAWhNEWRPfmRGUaFvV5ShEJHCwb1YNLtVgEWySBJhmv",
  "key14": "BChfSjpJncgkjeacZyAsQP5xUzXaQnEFBa4UAaEmCZTVLL4vzeUFvV61aNgfjq5WdMRN1DTfut8TtN2aY1Wn4FG",
  "key15": "5tCGqrj9ghD3wmAthRX4VwGXndQaSYYs2nVDEctrbRLg1nckvX9WtXKvpJYDEmdB9Ab3AhJxLTdj6wZoJbDC5c2L",
  "key16": "ZH6tXdKedq9BKqnmhzXRGGJAQp7YB9L2SDLpoWNXNbsf8wp4uAnjrkNkHosY4Zb6Eb8pw2UQjFpRAApWQAUSfbU",
  "key17": "42KKokvVYJrNvkU9NsYo4uGZCNVhdvc2Rp37AQdQUKoXyvKoFsyhHuaUVANZfsjcZ5LUNfYqiLxTWNDYTtfZhDKK",
  "key18": "3DP96ugixsTeLe497Rd48ZgbG3zaC6ucMcPqBymjoUX1QUwRAsz17F4bHEbEdgxYp1MKiUHuay78PgK9GriyAU8S",
  "key19": "23GEVDE72ahPPe4CXPKHCxdctRCG7rSGabnGVwgybb1Cudc7m9LKsyNp3oSoh4jwFKRrJZvLNtH8vFTb1ynuYctw",
  "key20": "4KqwWaoYMsAmpEzLgh9dpCFqjETSgGG4KwRsWUcV6nB3jGge7GjeTbTo6QGW2jLEahQw4MseofAZxA6JQQPuYk7r",
  "key21": "2vHXX1gu8YmQepe5eHRwNwpHcA3grEjG14gu39uj6hwdNCAwKQP37dgQCv5iNa3vLw9ADhsFF3FvJKX6PqtFR9dV",
  "key22": "4fZSEbJytJ7WZheVJFnzwbr7ba57cRnR7hk1hGpQR51VzBigYYiE6fwvtkNNCR6aNBxekWFmusymnAx4A5qxetAc",
  "key23": "5imvs8XXQx19WDVyz8eAVPRPemBJ453gPwSSF8ADYSjuuJhvnsXVYBu8pRBAfTPVqB6JRLKE8fkheUPxTzZHehjc",
  "key24": "3DoVkuSDh88QqUe6yXEJAUcuCCQtD4fuRmznpGJUJd3F7QaaEpEzCGxfRZMYFFBFccqS8mwpazM1JFuWjqebPmBU",
  "key25": "4xCadeKvGXD8oqbZQq87twcXmPTSAfacGmNPbfDh1PPwJveV89rELxcsfHzJkdwB6SwGEQwyrdLt6P92u6VY3Bbx",
  "key26": "3Y915yFWUNFmXZbfJQsRNhvrzTK4aPgtTyjzHEzAh7CS5Jy45nJwbkR67B4RtvmYPKs6j1bpgnAgimjRvZKb9o73",
  "key27": "tvUEi9urf7pKCSSXUKbTgzVoPcZBJ8h88mNUzUQEK8kLTBqx3qoKB3L4k7Nb466kzFfzzwhk66J2iKAauthYadi",
  "key28": "44B8PtBVVZpPg6DGt7nf6rnbVogzYdkqbA7rxe2GLeeeY8JXmwq5daZ4tiuK3bkz5PfX4UbRK5vNQBVHU4nd99yy",
  "key29": "2pDe2Ru5fkEmXhczaAXCbR34FHPFHKKWChCdwQPaBgrxAaQUVN3BqSiVRQVW8yLLM4ihSzwbjkSJgb46AQqsvDDB",
  "key30": "5Kk288DDWRcKeMAsgpapp1vXWE7rxQe9NFuJs8qpvTHC4grHH3Q6kJdWFjn7qfC3KtdmqDoKLvtZzVje47BPz2rb",
  "key31": "5BF4o63Q3uuSFJTTJ3j9hd8aExmN7obgAQvSu2q51m24s1TegzjF4PVFjf384pctszyrBecGRsr3PGhmfsHc52X4",
  "key32": "4m1dFFv5qfJRBJEja8trew7d2DDBYm79g2MrmMtwT7gBjqBm6zvM5gsXiEb7Wq44Qj9bYRv84dhqSZ1JVcg2kEy1",
  "key33": "4cvsk5thzypZdsJHmXrgkcoscWGTdftq1qL4ppmVg8cyRuRCfq44b97Vv6HvaStrh6UCdCtg67easnmZWMW8Yk9W",
  "key34": "3X312nS9LCHBpPkpCfgKQ8gvuBEQzCP9YzKo1aVXgqdNwfZzAbjTySxSFD9rNWWqvY73LMpT71oMrWrrJfAT4ScK"
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
