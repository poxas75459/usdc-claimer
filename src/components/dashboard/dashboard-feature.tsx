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
    "4Ni9GxDnNYEjXpvyBn8HHdGSvQWiy9dMq6YmFK739wM6oxRw1nz4qu8QS8VDxRfwmWPgmQYWsTrgshjkz1moucMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tjj48VAZyfV9Nt248R1Rvo3RQvFB1TVzePccrchxAYiqFFzDs6L1Qv8sLtKfeuAvQboPkxxKPMnByvs1ThVZWCr",
  "key1": "31FBcjD3MDYGJMTd8SY5djux3a8ezu55VtLdDeD9Va8qPyfUy2WatpSoZfapY1xNyvSDLQrCgtqz45WUmrZzkncq",
  "key2": "2727J2S5ivq8hV2Ks6Q7b6n7gy8pE73wjbLG4gf4iYZ4pKQyPsvNFRZFMBMkc8GbGUxWT5enTVqYrtibD52744QS",
  "key3": "4eD4sXzDWBGB9KK3mXrPjcfyYMqpZaV7FvnKavKNpEL5x9Vf6xh8GnmPbLzpNexD2m2UvfJh1x2LvbCZ78eZiRZx",
  "key4": "5mnV8PrbR81ZwvBJQHe8xLBCchMSEkQN1EqL8yAsNLM4cwPK76Tm3WpLrmgpF1LN4Sz1JVpTggPRsnMEDG4ke7m9",
  "key5": "3yc6Ha2H2kXBFxh8Gk6txzpWiVEUzZhM9YXPXvsmd3om9H3XmJRLLS1pvZWEyzdnJ9AN579nVC3uMDgdEuYpveaF",
  "key6": "5L61y9BqH29r1JGruB4cyC88uRyZvSuSpALwwXDQe916fy9y263C3vNGSMzYroahqnyGj9sE2rbjDERLfLjonKJE",
  "key7": "3wB4KbAnjSJeydjWokVywwpPeDQnEiWVFxxTGkuFvfLpBk1BqoVK8F5XenQrACapCkYpvr5VQEhKZbbmKXC8QzXj",
  "key8": "35S7VgZQnHgi25sKvXTaML1irLGW7UWPVQkZoLxiqiJ3ygzReuCUyury25ZtPC7dfgRUNaoWryKhhBWyaWaoaXxf",
  "key9": "2WKC7z7qdCMgy8xSeKU72fRG1MVhLYwfardFegQrv2SXHEQ81m39qUEJ7uz1bjChrU3tLVBRfGg95KXx3WdZo739",
  "key10": "4NHuhAKt7wrDSbrbhZk9hg1z8hEwu3GaJ3z4pAzXQf433LaXCk54EyGybiZSsDf44yfqutpFrwTrjq7n17q93vgf",
  "key11": "JkrdgN29ncHAorn2Ptu1JmaCsaeJ7GnGd7fr2BZXBWCix7rdSDSUmX3iDGhX9VZxCBWbFvdobBXBHbNoeG6fGFX",
  "key12": "3zaxutvB4Wfu5GS8BiCzB7Y9MqHFyVtYRxZr18Mz23FfZ6Mz2EC7T3ocgnvZ7tAj8aTLMNwhSu3L7w2HS7Kh154Z",
  "key13": "54d8iQoGRfPJzJLcaMVmzAZGctwvo2MPLtLDuYsKv2WebTUSBbvNRcFPozh8BMTDYNbBJuk5D4DYw41FCJW8ozQ6",
  "key14": "4QvGuBSLDVjWZAUVMP1fYEwk9ya6GGTmcC7AxYCyMgky8WewybLhuLVV1A44y3KWBm4i4MfRnnMpcsKbFaygMi2e",
  "key15": "TyGg4hAVdrMn5UdiUDN77fpCCRTaMuBgojeht5Qkjp49FY4sfUMREYx5PcijR7FNdsKFphCAzWbF6LdjbzbRrPg",
  "key16": "3Y9tFv3rRQ4RRADZ9hDg17AT8H9cWMvxyY3pS9Q5kseCDfyFkAq62EKm5qNmYE5keqxMqvEZiNJUSvq7jbkRPzAa",
  "key17": "qAizPL8Hs6BjQtkFPKCbHNcqQuzdRURdZYBJCjWybv9iEPXUJfs3sqLiiMTH8aDzCMh7wCbEc1PwZekHk1rv9Aq",
  "key18": "5yjv6BURjxjp7fM2Nv6ag8ikgPpuBrV1eFY12XaaacqiHxgyqZUZbZfiYddkQNPiuymBoouB53jaAUjW1ooTR9zj",
  "key19": "5qNnt7W6dtQJKddL58ZkNexrdLm33ktAKs4FknNoVCnFK5G3QqWU3fotwZ26Hb1WdT1QPu9GHgovYUC1VUVCareb",
  "key20": "7TUShwYza7AGCivJu1F7AdTu5A7hAYrwbDhyNb28nya9CG7cDKjV9bUkJYtHHHRvc48Z23EJpPxKMihXELq1aKA",
  "key21": "2C2iEepiHV86tAVTNZ6TjLLFxM4Updj4tN6th68KS8rHAk5G7Voww29pixjf15LSsKhgptqsJYq1f22MehiRGNjS",
  "key22": "2UX2btCyoUWTd2oa3hfH7ZRukNpvTFfkFKUYWjSQk44sRsEpY2gQpRV9QaiWVfHZa7RcHsqRRrmk5zg5NFQuiVKF",
  "key23": "4TCNbYznXpKBGFGpbRz4ZbWNfnFNUzbWGTTYaA1E7YkpQUaQFxuXiagrBQQksGTkAiqKwYY4RSZmPSV67FDZrqCx",
  "key24": "63Ak91xo4XdabfxLzHP6V7T6i4bKySgQMNDbdzSmpCgjDfoAmZWKUxeJqdxLGCquDXrtVu4QLwT5A2TPjzF4v2WU",
  "key25": "5JGzc8DB2mt2tEFWeQS3wuCpT7mn2nwviZ2K43cBi12xMnJZfFq8HjRrvMErQ5nGiomgjTFpCDGZuCMvj3icbfTe",
  "key26": "4ZasdGgYvrj2rEEq8xQ2K86nYhyzz2UoxMcUrFfwtGZPuUvjgu3qHnCDz3ecHB1wmq8faytFBQmuZbdad2oJd1TN",
  "key27": "e4Xo58YxoVfn9LNkJWRtWzfDtY5uxBBszjEySC5kZ24XUuvYpFkSDoQHr9epmf6ASWDfQc1xJFHXcgQarM5vR42",
  "key28": "3iXELxJf3RPpaRSGQtNdMHBjuemTnEk7Aq7TtC38jHBuWDBt4Cv8N1uX3yQhXjUXZz1EkrAcF1xfVT4ocaMpWDWD",
  "key29": "fGTxFzTdwgDdUHwMN3JdXLSuvf39xpCV3psEfr3yvK82Vjk2H7ErJouJpi73eXzx9wDWkZCgGLwWLHKdZBWAdxD",
  "key30": "2QtM9Zzt8v4PoAzkNEpGZkF2amobuVUN54kwxHBHbNa2TjkPMZkmuGVJHA3W7hDownNA8DQWjuqchq4J7pfabVbJ",
  "key31": "65LXjZuQ38YLwwk4dVEpt9VJ1upvZ28oc5vLKn9np9vRARvrg4r3R9i8LXGxjEVzwAszxtgRRNkFfsW1g5KxNMZ3",
  "key32": "4MWhuH8ys8KJE9CJLviNYP9sWq351aGzGbtreRBgFuncojaEYK1FgSA4kwX3Tm7Xd3GQKuBgKEeokPtb99KSecEE",
  "key33": "2HhZ38f5iZQ5fuMBCBf5ydYvLJuhS4v5ELm4QKPn7QXHKzEZpb4et6Gasum8ZjaJWSZJKi6UhipEiNqA2nHF4gic",
  "key34": "3kQVESZYV5qfyS7EudqW4Dq6r4LkfBwJ4QGfEbfTFoYVujP8my6xhSU3Qwu4SPjAMcfsGNAYXWY2KbsLhE1NGKgg",
  "key35": "uWqn6ycySfvKrHmZ86wk2p4e4AoJ7H76iR8SysTn2N8tf9BZfWoE5q9zsZwEqfPe8T1V38DqSbFZpBe49aP4MLL",
  "key36": "2SR2LsRm29TQHVxguZEr9w1KBLmmTrUcfzXeUSyUG771KRWqSvEZyTCw5pVuhaHMX4dCtSFUMyYe2QBGYfPstpEx",
  "key37": "5qs7WsV6AdedNCpUDWRBxGBjJdraypkan4yDQnBHHZNQVF9Lv9eU87pYQUx2fm45nvPHmnsnusSULJ3wttvYoZPo",
  "key38": "62TgUaHLkEDuXQ5dqQNBDGpy6uhRU6QQm3kTwVXyGE7tQkt9dQYAvJgny6BYzhW9Cap5pPeDePzZ4WuWjczh7Auh",
  "key39": "7YY3AFWPch3egtpPRUMG8fm7G7vZ6iMNV76BiqN5gBPoK74W2T7oSvz7jx9xpDf7Ef4hrRnqgfVCzt6wQQHKoDk",
  "key40": "3Mmgv48dbfDAFS25rLWqYWyFKVJEsoyifHme1sWo8fQWvgdKiK7kZW6wvBWvzQEtHfYgBXQzDQmzixLe61vaknMT",
  "key41": "3PgFKXbvFj5RnYaGKQ7cARCtPutDHwGVMVsTMwX7ranCwg2wpnvumz5f35Pz1unfiZMRZbdpehpXus7QchQDnVjn",
  "key42": "3ypC9VQeZ5wher7uE8d2fV4iAfNjVuhyLpqEKvjYdxHW8vBWvgz4U2oQ2X5F49ermccUH6DhDyfUW4w5TGmFRmEa",
  "key43": "4LdekHFFwvzxpA5YdHah52h8RnH6KkoH7KNdzr9YkRteKKFiU1idWEvSzmDmksbByGG1i6zvfK6pfM9A6P4iwQQH",
  "key44": "23bFpDvLnDe5Mdy9kjE1qu5mYG1twM8NkeQwbdzrUfVYVfvNcwkZAW6Kz846YpbgVAy9yFehK7YdCQSNLyQnLwr3",
  "key45": "jC6emqGho792vnLEwBRJsbTXnab2AUCitBuNns7dfx8EqtEe6U4ukoZ3LcnhA7PEquNBnvdPeYNDk6oDU4pVSWg"
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
