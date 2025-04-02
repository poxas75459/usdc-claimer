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
    "56obciDYhT2t6S6HHrQoQ2iGn8zywsNV4fTZAsHHhK6VuC552MYHNy2Z3pV8PtWoAHUZH6ZA9LjX2U4gFqzQA75U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D9DgGPDCGxaJTjWhjp3eKkQH1WdvYbUPEAzZ6cu9sywVRN2rLzGpBfzuwvFnq1ivP7YvF8fMx8ug8dz5ohfEZGZ",
  "key1": "oPdNLqdrj9sE4MUXiU2boGGpd95nFQbGdW46TAK3X7rqHDGhWDhTLDE2NDnYtdnQ7oRiRHLbVCu2eh9eeCMX9rU",
  "key2": "4ym6MEwbWLWjN7vYTaSK3LEQkNGjs1yMx8wsa9ZA339bUKd3DVmioBjA1tcLnu7nJ5Km5FehhAaNa1qs9yq6Lp5H",
  "key3": "5145tJfjYMwb51cMQznKy9iCXGHGm7ekDhMFSN56x8HdffTgEL9bMLkeXekPJjhaxuVKNoWyvix1zVWXrip5CPYC",
  "key4": "46tXGtY5MnyNUvUxHMHWc7qwdETcJsAXNko4ZWKoQAsAHgG5YFCbd2rowuyNuHRmWBMqJUGSiYMhErgzCeJjtnKz",
  "key5": "4GUhN1acKPq861Nxx6MTgMUHHDhF387MKaafNNKHDV1zaWZwU2tPFWHhT4yeqZ1KwnNZWYuH9cb441jMJ6oUEHEz",
  "key6": "32VQgByZKE76j9XBL14Xxr9c7o1UPs6NRkFrJwRb4ArAeM1jm7MdG3oyEnbeZq2pjLBMvrE93g47RXRHduFodbmc",
  "key7": "3wDaQ66choC6ystB2ctaXUdaefzqRyFShZhvb7wTb8JaZuVk8xnASeX81wgDdbowy2nMpCvnAggMiz7nhvFvjdmP",
  "key8": "31fL8CkJKVajXPvipCHBWi2fbUNyZNfDZNbJA9cAa7UePW3sxu5ZeGNRUMN9kCEpVmpHjbCqbS9qZWgCCqWnbRUK",
  "key9": "qatQGGqqm3pC6QZ658XSifPBdQW7wrVX8t2xnDESCy2s9cEuMPGt2kNt35wLiFthB9sEkSBEgPM2VhUo7aFBqQH",
  "key10": "5wG5ALwFJZqWiGZXgoDw6JJiehKCRjUwbercYsEU8gnyUs5rUghDDeAP21grhza7r3BScC9U3DxA8orkPiatgYs7",
  "key11": "2NJHFKDwJqPLrSB6vxteZJVLaCK5rgqzs6uh9d7hbF43iz2ftfEZYdi54touT2MH6tASHeYmc3cy3zk1FLEix33f",
  "key12": "cSEQaxcrWPX8XoAM4youYeefaxTTyGQkpzLTKye24WZtFGhCbyiDY3k6Emb51YwzsZy8YLzeCMeB4vrAfRXqDTr",
  "key13": "2UDk9Jda36Q4F2pfsU1xiBiLzRNi2csqoQUjjKuvz2manAPUX27QWys12otVoou5fpLBLHubQvhdYwpXYWihfzVt",
  "key14": "ncVKnBxd2AEMUVTxxbJ2VFCzPFztS7LvMq3zL3raTYsxxkV3hSH8HGw9MzX2nEtD12Mgh3ZaJRoTuc7nG6Mw6Gf",
  "key15": "qZTXCzzvWtdjwFUxcyNvp9FPeE6SefYRiwi7tHq4UpT5qZ3VHRFAthCWKLquziVQ7gjMkAjVJbd6nGhEk8N9KCm",
  "key16": "3khSN6k7LRRbud3FNZDuLytURbUQrmpMnUnxLoWy68qQ2SomLZtwERT1dQm3qPV3PYGfP7S5FTjPY5k8CSnpaTBM",
  "key17": "5EcfC4X8MStZfoH73wgfhgJPLnmWg76ShH2hkyRvCoq6112HNchkjFkd8hptK6Dqjz8j5C8amwVfq22UhgiGCwHr",
  "key18": "4m4DcGcmWqKvHRSZn1h4uuqXrRsyDeoTvJzGJgJqeDv1iSfV8GpDEL15PLF7My1uCGv35Wj3KW8BZV3j71PSW5Nq",
  "key19": "5htaUAHGJgxq3Y5VXcmNgHF9PCMtttSLf21QGzjaeYkAoexT2NHyYdjhvepzZ5ui6VJaGGaKooqkXjJvRRn6yZ6K",
  "key20": "4wmeq1V6zuGaMepQK2WiyHARC5CTQHHt9LeuGGdGQ4nKjvH9GMxSy3UfGgFeXRBJNgdZYhtqiAXNGMFT1JjUoy4o",
  "key21": "4yLjutv53keYzJi4MmgwDBJBSpUHrG66ZscNWexWmpEXBB5dHzgbkFDCW9jbSnQYCjeHbvAW1PoH2LQRkaquaWHE",
  "key22": "5CHuZ77rsmNyBMW1PgTuaXPJE38XGyt7HPLpwFv74ugVw4rJCjMYA2QdLGAPkrBJYD9Zbi9FC6EYejQQaQcarBaT",
  "key23": "3ornP2kHqCtwQhqmRaJrjhdsURCfMTXA5axym3jqVVP6k3fdCpn9E6sGe3scx6NinQ9fFWrXJkGBT1aeYtHzBcuF",
  "key24": "Qk6Zfjn83ekCVyb6xYpTQfiB3tkAU7DWqdJBHK6MSc1MjZfPFFJfQa6hEPLXsNuZJrgEg5D7qFJ2Qf7e6Enxtsf",
  "key25": "276XroR1WD8DYZvquTXviqHbeLkiBN7cLdBPNbu7LrJ6q5zmDipfWSDGNFmCfMBUG2Kpc3ovRpNmk534ohoMocbJ",
  "key26": "4tMk3LcrEpkF7KVBKTZH99i4qRyqHFqywwxRLoCH81NZMpcJ7FXpC66pjTLTGm9iPuc1wMv8ZEnRRyRZnvFny4X5",
  "key27": "5N5zhnWbQLzUqKM6dfoPwQpvsS38CemABM3T5wbW5NyC8MamF8g2fn6vaTEw9SLoBpD8oJRzzMFiAUDiAQJhvsCD",
  "key28": "5FfVwnZXw59WQRY8fsYo16vCARQs4Xo32LPNwhuXhkFx1KqC3V8sRyksZnDW5yyS84hwfV63buJ54CSEsTWSBeX2",
  "key29": "NvoUMcPfw6Re9X3kCZoof3zHRyGUVUHh8cXRQ1qp9JbYgANnutVogAx96mz9T1hTxdRh6TNDZL1xaecA5cH9bXe",
  "key30": "2mEUz141KwSzQUZp7geAb9jRw8VqciZqD96eT42gCq1NLhhQq84Kbot3q2VwGEYMu2fpM413rXVpEBaZzfNZNzqf",
  "key31": "5LNELsz5LbJ9RfKdqyj9dA7x8wdGvqHJjFcq2dKmCPoyn4VyeBn1eMVDqB9jVLGR4pM6ptWqMDfSpQz65Y4Hek4H",
  "key32": "3w6HmTDDC7XJRxjFjqQw7xB5dDE4rZB3ypxqfR99ogNh3Zq6KXPiDZvRQAFRG6ee8tRYmUdRrXv4uafmecvSjDqc",
  "key33": "5QnBsFsweH1QFbbr95mcEYvdXGQupTjS8P8sBTc52ghRi9zvAtaGLLLDjddQZHn99eCFLWWvZWq17pXEA6hTQVTp",
  "key34": "FCtxdHvHVMFFTUWf3bQ3QGGTJobTMj1s2st71bMVsAWpkksGqCaGYcG9zu8woppnNgqHrna6wVV13iVoetgRjAP",
  "key35": "5KaDwxMYCQVWU5PWydBAjJJ519qnQ4r89c4wvt6uENXqKnBhy7dwBhUurKg8SWhRbhZokgzYQ6gNxDqtiZ7LgLKS"
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
