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
    "4MrJZ65WZ9hY2FexdWgKuxrxVkeKC1bXnsLytP4Kmtdu3eZHR8eK9GzQWYFnzh7FKgsAki6qursTZNJ9YMkZ2qaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dqNX7UFTmkvtCfXztVLfB6K5NS2JdBeWKrwAL18zJJcHAaeeMhrosxB4Q4gDazAwbhuZiHUY2obmzspBht9cvjr",
  "key1": "3veHzZny4NNLsUCF2RN2nEsCyBoZr51R6dxgybWQgs1MmeS43m6dzaKP8xNZeRbXH9uHPAwB9Mdsnyk26a9wMxpN",
  "key2": "FVD56TBsp8jfeS1aWwkKK4KRYKG3HWqP8iwrDDuXm9ziyVeVJa74dt4zntpAHa8FUT6DeMghauXs6KKSaPU99to",
  "key3": "5auhHbfT5ZkcdSPUPeFLA7FHcHSi1cWwiCwYGsMadjrzk4XBgTSqcZmtkdVT4JMTxFLhCR4YaLkdNerPtgomM8SX",
  "key4": "4nmqtB3eY8jnM5An9pXDx3dYDYeudiEcPj6gf8mbW3vMmcyyWGnvzbCTEbibvUbTgc3wzntYCoEFmkAq4wCGSa1y",
  "key5": "2bQcYJ3BxfdZiFbuKQMjtDJ9sagPLokEgnWNcNhkREm1zGNGP53hvoiWX45g9wmqhSpovxT51qp8hToYij59mspx",
  "key6": "2yAaDZaqyxhGKLGdmBhr8VTyt9EMGZ37njTyzrSSGC23xooqFi1VwPdgHkPpyDymWexeBrGCmrGMuJ6gNNkh1nqF",
  "key7": "ptA57urPSUHUdSoAS9GTTCkQYWBJjndDbNTkqUDV9AzspHbZ2dKqMRrmYRvXktj7Jsfg9jpjJPhkgNtmQNqB4rt",
  "key8": "BczQr1zTE3yanm972jxBreK8EWJDSvHkH5De1ReQzDecy7KNvmgdmpTZxkT8vm9HqWrsJH37fLH6Zx8gxyENeo4",
  "key9": "5GizvB2dDnksZjNtuh5ChGxJHKqKENAmRZyEAQoxQRB7nGV4KKG6KQKrMjRABu7Na3LF7AyxHB3dHfKQqXMjdjTZ",
  "key10": "CywBL2jsasJdMGLx5DZAEqRfeXPwPwD2VkyEHyjSieFm8RJtdwjws7ki7NvBbHocenAFE6obVhdzLh9nWd1NKgz",
  "key11": "4zbgYMy3iaERcLKZB2JiF8BXcK2wQeADtyJ5pKptWFZ5qeAD2sUubpstfJp8vUG7pw5814AvKtt2MuECb1jVYoBm",
  "key12": "JzJsvNJDRUeuQ7ERtoXgrsLbdeTQcLv9S4JQcV8uYQuafk4iAj34DH2KpXwmsidY7o7FepPdGNb7iPVGZuzbFXN",
  "key13": "1U8oMof7TpJ2kUnnG5f2rQ1NEjam8zqzBWiybkwLoUCYd2xnuUmL6hDhxVhAeyJjfVQkxRbrLXFhJB3Y5UNdzZc",
  "key14": "2vsmVnjCLxJ2fasbQHWvGKJb6JMHwBVA4YtjN5GiaGxaRVe52mLaxJ5rd67kB45AbE2yhVhKfnBefDnM5b8kahXP",
  "key15": "Ay765D6CcXRvuoXLiZ6dCrGNynXpdL5t9tzeAYTJQ6Y28rLRbytq7Th41Rc66e9sL7xwYsQA7Hfjvt45nCp3vv8",
  "key16": "4eRqpPppbaY8JnoDQRazcJtGZn2qCThUzuLhcStnfX3bX3kkLqyEEKzS4qNNajMJ78BzGgrTJdwYBtGtaJ7GSARN",
  "key17": "3c5hPjbkvB6GonoHfmq11fEn9AyrERknmhxfLfeSGKRPDgzS8YuhLK1WPnSjPir8UggPL7Hi23s9Qa2sp3HEbars",
  "key18": "3M4hWoq3UYvvCKPRqPJ5jPVYNpH1TXDabYce3wDLFv4eevj9EjhJtHAb1wPPrXqDa6fjcSySXbfeXirtZYa3AFp5",
  "key19": "48BdLZg57P28usjhvHeVKDUsgN91VE7wAVWTEbnyo1azWprEPGrvUvaUycvjZFRGjgxBrJP1CDcHUhaKbzAajL74",
  "key20": "5dhSGC9pM6DPAfqF95TRWdeHkQk35zcgfmY1ktbkknehDZnAayZUroTSvuT7q9ryGUYEmftA6xYsXAiwf4eMybZM",
  "key21": "28taEeLz6amEXvEePigeVM7gzpyYTKyuDpHMyK8RqjCK2bSnU8C8dxps1LxiR7un3F6SqknqA5Hi8mEWro8ky9Sh",
  "key22": "2Qz4A8jbCi7ia6GP666fkT6B83oiidUieZ2QbFi7jxrw4E9FcNNJ6HpqwHaQ1BDv8kTguPgC7SiNwwqPeJtxUGrB",
  "key23": "3NQzbr8cqUkYfuY1UNw8VS32LRgy5L7UQFHRqjWJMvuyH2VwamiPFB1FevxVdh1ZpuKMUCtt2eUU1WfhTZyhVyFe",
  "key24": "5CPejtxSxni8giiu8hw6Y2H9YSrkufXcsaWnSRdF5tufmacECjFb93r2iHzjRxHQuPEvnh7x3DjKb7MLPv9dgdSc",
  "key25": "4XKqa6kZbawPSbXiCzQT61gcXJkxztqjFYzUkMxn5WFNQRE91huYYRDKxJLjtCqJC67UZGDbgSuccYpawQURVTPB",
  "key26": "4E9ce76AMwxgoqAf1Zpsx2qCRSnRQjQTc27ZoVshGX9mPqXRPZNqJ7bCPHFkd9TGqZH6rb3oVGKhBGtMiGxLALDL",
  "key27": "URPYFv1wZ45Hy7pB6sE2dTaLYA31SXABinfJdXRna6tuVAf6fqSJEbRchwypmA8WFJADnEhKdT4RoSPbQK9H7yb",
  "key28": "2T64htzgvzxz77hxbMRkMMWUj7kK7NDu8y4EL5wocEQhiY42RPDTMdxRcwmzqTknwFUDdQLy1vV1sekojon2JQsi",
  "key29": "hACNQNNoxY5tc6UP4EDY5oenkpxMi9cePLMXKzVK1CUdLWKfqfJ47gwGV2tUmbAJhEv4F4aUdSJdWC4S7bTZv5i",
  "key30": "4S72rZspwNCyAsTUuxHqUq3Lqku34AtjngXarLwo54TWs5ebkYigCre4KB3n8zreDjQ4mHTaB6uKgShkCwyRzFHu",
  "key31": "3VZNUpXg8vczkMpaue7H2ksiiMUmQZggp49srqLdmVj3VdytPC6rxeVMmTuQjsESicNPjEWSjDsba7JjTAy53MJC",
  "key32": "3xSaMSXL7VzJqiQXja5E63JmsaMhA33qedhTL5d4MwYBuZtxiXdbdg5fVj3S8dT7HfcCjPwaEJMT6SvuuLEb4U2a",
  "key33": "2ZYn5mURqwXeann6RQxny2bhFEmBDwYKGoPw8jeKEwNbepSii8BNSQKPse4n2t92hxVAVykqKtkufpm9XnjciMo8",
  "key34": "5CpYuomccZx38Ncsh8uDKtU9QG6ixdJh8aFiLoJinMVgtX2JkEB7d77pp5hsjNVTFy47hFE1vhJ74biW7nxaJvEq",
  "key35": "5gMMvxfY5bmBYv5Kj2qmTvy7Rox5341zR16vrCxKnFtrBtxUmwmfbTxaNddmYLdGQR23JfnvTYtvMwYF5hYDYN5S",
  "key36": "2RYbSsuSvZ7SLzvRdSVDtyVVTt6QQo2rMhxkisnhoPBX3LGsEtM2JTY3DQJWp15qhzkT55Kj5VXPRrBn89ysy3Lp",
  "key37": "2YfFggYgi2UR4tmFoj3SGLLLb5Mcg77ycHsoeoXNcRARD6zjsxy97qpM7juhmhupV5bPbuH7U94rG12y6snEJZag",
  "key38": "5tLE2vTE11QvthieFaCeuvcMjwhGm1kbiEUVDbEFJbexuR55n4CJr8Q9gm55QpsQa8cG9QkmebeJggFaCucZfrMe",
  "key39": "3JmKhtbfgR4JHiNUBZmuwv9wx6rZ5sZXQT3LC47g36qFhuh67iBQRsaKSAHupvifaAwAFmWXSAY4qD52gy4xTeCD",
  "key40": "5j3sahmcHSjBaFeVMXhVq6Ux272wToqihmeTnUGvvwk5G8kdHMYR5fkMh2DvA137UcUTcFGKWKRCeq2P4nAGmR1z",
  "key41": "jJAhpyQwpC9Q3VeEuu645dqpm3w6naji3XyVVz3iWWUcaPcVWEwo2tMpDNmNYJsqB3cq7bK16rDqeQodMSMMaVv",
  "key42": "3RfbGzUT4Zz7DZgZTEXwGn3XbEP9honXmbarUKstJwwv3FC4kQ7dWRmajNfZXoPMFJTv1Rm6oSNrR2rKML3aEYed",
  "key43": "3MgqSbuTKGHhyZ9WwryffL6AFbvHNFzcAsLis4ijQJV58ix86h929Gu8MBKPgDa1VDTbeFokQ4x79WkacWk5BfFN",
  "key44": "4fZiYTugaLekyekyDcb6L3iYx94sSZ3g9GqXqrcmG5JUVUArndPHrPuQb7gdb5UJ9zdawjE5SRUAd9ZdV8dHx8M6",
  "key45": "5pgH5yoQddScsSUjZKXHTfoUBnJvSUncQ8YoT21cVD7AAbWJozEVzjucKCqdKnUVgVVpqv8rmVMzPniE3EavtfyJ",
  "key46": "DAVZ7rLeEJUTvk9AH7wR1ts9xsx5XchsTPgE7XtJoHU9e4AddcfpSVkoa7sBDWrddGhtQs9UvBmB1nE9FpooTPE"
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
