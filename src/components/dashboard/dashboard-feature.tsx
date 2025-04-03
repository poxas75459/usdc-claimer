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
    "66gaYmRTnzyDTpRpEBUeULdK7NpDKBYSezxm7wmNcshPzBLZgALDCVJHuprvHaUDRcuPFBQXm2tfsCvqMjohzVes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HbQBCSQaNK3g6ncrH51ro4iPFrhyoDVcXg7XmsnECZNzgmdWUpoZUpvTD2QbLgzNn2AdJ1GGKKcrvtKEmTrWkPD",
  "key1": "3st4k7n78i6WAxVJ1nkyGhs55EPi4Ty1oPg7ScQ1fCzg5YuYMEbc9KHpkT1YTmRTcU3XtgHL31UHjRpfJ7dbDrNF",
  "key2": "oZWEt3fiT41yGaJcJtBihtyAXefxxcHUpXuHgWe35pDqQi8wzRzAkv8wmX8zf8z86vweiagwCpEYKgAXnQgVG6D",
  "key3": "4xiPrVF2vi2gKHbioFEyxzNRTTf39qptECsmvqJXoDv4kvoixQzXqaWNscHBpZ31HtvSKXrPxUK56LGFKwwxyz3k",
  "key4": "5WW7FdjG1Emek6hMdcLihc51yo1zVzn5PGCBD9Ryyt8SMssCTBWWcF5cZfLtFkAGxCiU29nXkSUQqoQcC6tsqy1x",
  "key5": "3dqyGssTxNRoeRzd2ELMbth5qdbQosjyXdrYMEENbWW3mmyH76MVSwo9bNpt4DPaCqYurUjAJyFxvbNWCoaEMz49",
  "key6": "oi6Ts3gA4tHvgHhipQpWgyM1FK3iZyHtsQMV2uVGQsZk3VY4SYdWcPzEJMS71YCRtYzJv3QNDagrFZzoHyE2HLN",
  "key7": "44q2YGuhxPTaAgmNMnQdK6nTfjXZxEmPt9cjZ9EJdJsrrZ1J14X3kfYsQtF817UF8JhgSx86P3EorLbCG23mdDv4",
  "key8": "Pe9d2tjjh8qxnp73h2H4nYeuTdkWxkNtBWSGrkNabeBBrkCuAHtnhZ45Dz53SsHGzhKsRnGf4wnBCrtYdCFHhj3",
  "key9": "5jWCC6rL3zhYKX8jUsRCwtyyLWfQ6cjRyi4tZYME1BC47xEtgo2ghGzd5Pb4Moeqh8sMTSKqyRM7qYKJGoqbkH7P",
  "key10": "2zjdizQEh2waMb1M39bGg4wGsp3iLkHQgRV2GAihcKTqEQF3Rivgw2A9zfKRC2Mevm4cNLBjFSr9XGYNhLuvGBq5",
  "key11": "3UQh9zndDdJEh9eZdr1ZyZRDNctLBVGKFNj9ZNskiiNWPspJg3cyfJrgQqoJDQqqr6Hz2uPHrMdLH69zFxEvZFUr",
  "key12": "4ACKwmetNqSiLKtAxMteGu2urU83LPyMS9quqRofysTsZ5p2DW79XPz6MZn73wNuyeoViBfJEXYcBSLKGs9fm3xV",
  "key13": "26qWz6JaGPpzAAGSxVm1ikjxhWf2qdQ8Yq3G1dFbztZZXqTZhNUtrh726We41u3kRELNhVvcyD7ywShfnG3scZrD",
  "key14": "5yoW3ptLwPSmXyV92i1CTLmsMuvLYk5FJ2xr28nMbyqZAGAKs2G8FsrCW5mVugr15oUrDcwZeuab937ZQKdQoXTS",
  "key15": "5H6NsNY6VBeds1GL7YHTt8NgK26qgLrAYqNCBurGFYu5cxwngzmntZbRZrvy7yrUyAihwSeMYXZ81Z3KfE5RDEjf",
  "key16": "3oPBGJraKj6HHvmqR1Bk6meAmbBKi81moQEAAdST9hxJJ47vwWMCkWnWeRHk4eophnHqEv8e9EL5iaakSGknompJ",
  "key17": "2u1uuTTuAWCBba4HHEJc2YZFP37zRysSVbJwGCE4oLXj6oLrmJ8Win1UW5EweKi3bHkxgPRerFMBfAF26a5uPgeE",
  "key18": "92D3eracwpxMpidnAcFv1NADbZJ1zYwtgRbw8kpkqyE4iMpoLaaGTS5wix5BqPMuQCXLmX2evRD1UHm3jfRJiBk",
  "key19": "2Wia6ee4XCzjuYhvjSqmLcq1anD5YQKN9gKbgS1GZPgNjABV9t3KuxnuhUUjJ3PPn8xauDRswCLQmx3q4rFGGWG7",
  "key20": "yqDSHCV1B9PfAup5Kk8DuHZ2jrBmrb4i8mP9gwsRc54nrakDnMX9V6dzbArF8XVbk9ECARwtBU2WHRfM1iYT3S5",
  "key21": "4LkK8VbRjqsQeMaHLJBpQsQFNHMnutEiu6uvgVocCbkY4nCxSiPVeLvZKk5WUbfYVEAnkb3yPw7ZcYVqLNDRh7yL",
  "key22": "G8xyxyfq9NJfQ3nrNtZhABtiJbf8kZzz42ECn1SajLSrHpsWVmStQgVmMR8h5e7e5gZQcoqLPqfmqiirFwdEdEr",
  "key23": "4Rb6LDrRv18njPLjF2p2xmje4Ng3DBQUcHaZpZTP1r4GED3bjcggBaXfGwUXgLSmoL9xe1W5aVRhbyextkJ4hVYo",
  "key24": "38fnZP1WL8yzjZpWqLRmuC2nc64rJ8ZgBiWCGqiwz6GKJwRxAuQnjoLWBcs1S8XDLYKH7Q7drJnLGtvxaiEtUVVX",
  "key25": "3aRgTvd82vua6kdPryDwxAAHKEn24ua9AGQnu2gdZyY7AU64jDb2qF2obkio84X3Kz7gvKniYJBDXx1KLuTM7m1",
  "key26": "3gbt23Uay5vzeeMjPr3dKJr8KXsbuoPB2qUYmxDbcpUnQKFjJncVnXkeNXdJsguQTugKFWbuKyhhAiZvr61AmdvM",
  "key27": "4GGSM7YkW2FaZwiNz7vNAyUuc8LyzuYconby4QMJkjN6HTnPGR4MPj7hfDE7Pqug7jkfadM6YRgb3Lzh2bogKA1d",
  "key28": "4XRgtVksJkTo6ThW9tVt7k6jLYi5zjeotPEEQitWPCHiJoozZZ9NGu96qLK4hTcqiGbFHjbkx1PQnV4nSZVWbB1y",
  "key29": "3HfYkPRgEcZux27fuY2iAjUdVJnT1dvdYAEKPWJuVMfJWLpyXEH7zAJ1eLh2knVxEixWZK3Xk1QWwJ3dcTu7zRy4",
  "key30": "4vSLmp6XMsDxT9osquimK4hgHGCbHQqAEK1vuKCbb7EGhUzzZtckovc4ucfiaduguWcwF7uq8H4HfCcKTXE4hT62",
  "key31": "4yZadbeCAgMdGUXb6eQnFxasjaE6gyfPERytDokvsRJLMsimdVYKC48TBeVBcD4szWuTgixuJF3nm29BQ3im9VKg",
  "key32": "PVDRbb12MZJ9EAPER47yK7cpAPUE5zJP6j6z6VP7RPALUeoCcPQkJkQT3TneoKAbeggLMFryuNBY4jCLXPZYY8j"
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
