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
    "5mpwSrcqEWyRRF5Fdi5VKPvzE9KXchtmjnk1hp7KQyAUSqzDcUbPLC32cJfptiHxEYBMJ2GmN2y1SSwqMGVUjqHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SYoa5LkiJqzCgTRtLKJbzK82szDqHH5RP516xr7rAPQE3pMm8xt931X21YUF7Hy6YsmYPPgJkkLSxbZaMe5vYi9",
  "key1": "65SKrrbN6D8idRszhCUUzHQBbav5e9tLf8Z9D2pL7b7pxH32Qu4wd7XDvdgmBKAsQjq4EVFdmZTWonLaxskKAAuC",
  "key2": "8ot7r1CZDcjBSXnMMRvsf923JN5Ue5EWbcZvxn2Jw5wXkd9ugMe2dB6emhJwvjTXYHSEKy2pBYAfXxNePzwGvVb",
  "key3": "9T5zKbzTyAtTBaN713mJHVYWK28rbbKDpPn9K8Fx5eJkZnnd2io2khDtedXYDw9dm5mSBxySeDrVCdZrD2pkg2p",
  "key4": "2GTJ6La3qtBXnFHS52r3b8bYS3TuYo5CPTjNwZjkntzXFnKnnsN4741SEjFp3dUBb9Adi7ixWz1aW69Vz5DJq5bt",
  "key5": "3oNBZ8DjeZNc2HWMFiN13qyP5aSB5ei6TjSqpoLu9hDj1g21zHnvwDJWy7AE3mjFzM7HWUTGFxvEyhQpiTTmY3aN",
  "key6": "4LpEDwzwynHZXVAWNKQ46K26rzgw5P4rL9PUNCUyWR2Dy5fM2SECdBnDPX3Gg1nF9uQo61v6pk1f4NbEKC3ZjAcU",
  "key7": "33ZgCLkirMn1dQe4hYeRgQuA9XB1cUBQdTyZrabNLz8zVQik5er6wtUS7JVKYFykxWDjUDt2SzKVxRgiguRcyky6",
  "key8": "4DoE82fJQWZmVnDo7NqBwPh99e6XNazWzujwz2R5R44zyvij5fn9WYBNqrfCDY1kECa22BEPvYchmvYi3SLvdSas",
  "key9": "269tmKK8ZY149MDgpJedrDZh6WmzeiH9co7C8JjR1wyVYAFpvBwgMRBhxkHFH8B82LU7cwxwT6o9Kpdcv36MFgLj",
  "key10": "2zPo5695jqP6a5tTUCn6aaAfJfcNmDBjZxsWJBeffEE9YNKgeBaVEVN9fyjjfuVpfSGsH4cJdcUizDCrggxDmrhr",
  "key11": "ShshPMN3iDGQfBjpFhs8Dq4guocVsxhKxCDhYjKrGANnHFiE1urYdejCRt3tH8qtJJZNqiCFAKHtY8YhFgxFNmp",
  "key12": "3wNVhoLtLJvG7GEt5QD3fQgfzKevpG8GgBF2ZsEumtWcJxSdkoAK4cYccfN6hGCFA53tGswjQhArEQkaSdU59ybA",
  "key13": "e7781a3RbsuLNucttcpvQymenNEGxK4tUZzySsd2wnZBd1zH95VZTbtQQSkyr5hXzm4Wq5WmqS29euLEdWom7fM",
  "key14": "5w5UqVVjKCmNqh3LNtGfyosUvL95kzNK4aSNFG23BPy3zeretX9ofUbFdHuLLYpCzwL4TKhXg8gDdeKyw6HGBioR",
  "key15": "2c9P3eJ6jCQ2G6oWGw9L3Zf54N4iezAj2VEbuye6qPHdmj2Y4BxdurM4cAo6TEuRUySF2ngU4TWHuSByjKA7gz2v",
  "key16": "WaHbgMeh3EZhuQvTn5eTHv2SjNivWgXB8teGgZejbS997tQjob9D1myBsLH51GtiGUjSZ5JFw53VGa9tB9NL4m5",
  "key17": "61skhpKrUtB8fmHhRMdbNpnsJzJNGrrSg16cXC63pQ1LRsniRbJGNGYsD7sUzMSDfkKtfobub8RmiBLPLuwohuR6",
  "key18": "3cXhBhrtVecY1LcdFuoGmPwJb8okvXPS2UryuBsj2Sx5i7iMXKXvW6x9S1XTjzjLQFULJyuYtujFTGdWCspiHWL",
  "key19": "2U68vduyTngqRHvqGA1v8uMECGiWccWcY4EHGSy14k44h8XjrTaWBNA28QxwChfq4Aj6ivosPdRZFzYdsK8eWzcR",
  "key20": "a2xTzQVzqD51kvx9hB3JczZzzCNu7jJpF9CoJf8Ftfs27EP1M5KjA4oxi7BoFowoYe59VonEQ8U2QbjHic2jHQU",
  "key21": "65hG8QmNwQtAtFW3SvbX4W9fX34w9cru3mXyyKw11wfoxp63ac85RrTqc5LWkHkBMTQwX9T6nbXjAxCntUyoMjj6",
  "key22": "wrtv8z7rfBLxdxZBdq2AvadAcrsmxCbeNkWpM4gBHszNhH4pziegWrNegmbkGYyfrGCg37ZkrwAqwv8pBFpxWkG",
  "key23": "5BCVVegd2Fv6iqaA3PWyLzPmEvU3SoH6nNoPFarQLv6o6wKEGKEFiy1yiBxp67mfjAKQWWCLLwc9wZVf4djFtG1v",
  "key24": "2RGWfzQZ4nFzCZJ55Pj1kjtAZP2Pa3N9JeZdFVqhvd9Ugnwexte9zEYwmXtPEecrP3sHCR6TS1dTQ8tNLaN39qxb",
  "key25": "5pQi9XaRS2oEvCTomPTRYLJC5pc6pWLqfim9Yv5ZWTiX1bew9o5SDpQpvqmFsgVdCq461JtJDzx6yu6DYLcb9aRw",
  "key26": "4STRs4jxcxgpz5rDA2PvbDtvCEFuSqoWL3LBcWE48Nky6ba2T34TRWp3WjP5tpFvXXwh4rmtjV1JcyWPTT7wiaTZ",
  "key27": "1nnWaD1a5VivXJtewTH3SBNmJVZjvVnGyAcQfeDQhzmVByiyJa2UjPSLV3iJ5EtrFrFwYo7uqywqfpKMTQcKM5N",
  "key28": "39uUaKn61qAnyTmNLsiAdRWoFpDzfx2cPzxanqn3QmFf8cUoePSiMf1Q17BTCvqkYeqzMd6RMw3gD8EXn3BmSncN",
  "key29": "Ajor6sNhSkdT7CUy5mAfZTaEHg8eCXeodic7FKcrBQHGMJqEUQPVnoMsx8NEsGnYotXaVPfWkHi7sXuw41v8sxZ",
  "key30": "3tM2b8UteGNsnXFznxJ8jA16vTivwgXFkVKDzGiBXdRPb7qukJUek52HcdqgLThwVkmjf59DTF6TzUVpCDzYagLP",
  "key31": "5Twyoug2gQ9vNRjCMy54rMgimszpYeaXYNg5H8ifKdJpVy2YK88WEaMyAwVSpSGwN1SCQGm7AdG2Q2FsHgqnZnvx",
  "key32": "oSywjtMiV7VhDh8yvkmQyYJeTYGHN11YhYVRbmonha3Rg2szRZ5mENERc78dPCziy8Lcc3SMoKvu5xd6HGWdoFm"
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
