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
    "xtzHjpgpgkaZLSG8BNYEbpAUaYxRwsa6iW94QbDkjGVxAoqxK72r78vGrv1AqDdpFXbSkrZk99qgTdSVBGM6Dis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62MnojSSB5hSNtvd4JcJLYa34xkG4fv2Z9ft4iNKZrmAN1BVipjgTLAmXqybDhZWSKPVH5nPrX8WVNxgQdQsTDPA",
  "key1": "66zszjTXDPPSQYtLxzBgsWCT8sL1iwgdth5qy2vkXXb6sefgM9eNQqWimdmvQ2a3Lb2EtpMetd4kz55LMo3WXK5P",
  "key2": "4ueMm1S7vkoc6PmXXkcGXG2duzMH9HyBnKanjvSL9UtFSgfvTjwNtvSrsDWny2L89BeFbugvyWErpzQGoUpBQwA9",
  "key3": "52VoSZXG27DXK1YJ1vytASpLnsDN8bVyiVvA8z2TkUHgEZxK5rxQXnsMKPREcGyPSe6upKydC5CiJm7cZRRVHKhD",
  "key4": "5sbB3ft2dD8T7Jmrx7U9yWvU9ysU6UeSPN5XKNNnaSNUfszooLHsEmff5ic6WDmuWDUjrYHU6A7DV1W4KUEtBs6s",
  "key5": "uRPc7fD8jgKco3FmEfYN9W8CG46Lwzy7b8rtFHC2FkP4xH1r6z3YmU2cZqG8HMo7oUxwDCDGCetinLz57HDdJgW",
  "key6": "8GbwpcsCSU7JNUpgtLv52y82bomEK7EgwVz3j2cTKYfQuWrPfqYqyYzAhPe3EfjEiRkWJKdkchj4ACKXTr9s4HX",
  "key7": "3oTYEsfcLZ5xNtXPckxSUaNxhRQfQ98BzHnYYNAYmeXftvTRYGAwMMrufdRK1ukSJ2FD9L3BvYYVS8jPNNYGyWND",
  "key8": "5C7bhvGADEoPS9Xwi65ZEeJa67tUgD9HfxUSgxuaXuDmZz3KdCRCLdCLrUb9kP7zckpJWJECXTEUpjaLDqgwMBCq",
  "key9": "5veaTtexicLa1L8ZQwk9qZ9PkgJbpSvFjpBdcnM3HPuH4ZPtfqZXHgeHWqF3dP6TpKXioge7ycvxRPfL4hZCUYNs",
  "key10": "55bcLQBqpH1koR2FK5Adh23kLZJf78x8G8iq7C2AwvfPqcV1m8qZ7YnYVusSDc4g1J4Euax4SK7XPyrL8Vk7sQ25",
  "key11": "37DbyTqgE9sUEBWkCxtkNtweG9TEbLWBp8hu4AdwEistu4aDqb88tqm6QSqf5wUrGsdPgikTVfEBPoVKtbTz7D9M",
  "key12": "2iSLPSXmaQ8uRTiZSV6BhF3saPzhxFgXQWFRKikJ3Fvz6EuDaawkWNXWTsmeZJKuFezMcTUj2PvawvgwyDbV8EH7",
  "key13": "5j6Yd39VwqgDAcvKjKzdTtReLAhVL6rejJZJXLpCnRLV3jGKywxMqbmzaAxgRZK7qTZgfwUkvZFSpNrwWqcvgW37",
  "key14": "5YpY8y3JDp1WsYfcEXjz3ZhwgeCi2n4eKHfpvyRc7NncPSJEAc5o3YXmJM6n6gAhgvEom1uWV8zurASj15u7bRNe",
  "key15": "2Cae7CncxacdyizLZagWMpoBZD9ZUNLqPqcLLfr1pQsaguUo7ZwZwm5mLJq3L6LqtePPaP8GNPDfPbhJpH253tjA",
  "key16": "5PsmQMrd4hx5gAdmvwfBhFiteEPfSXfy7Jbo9dS8Cd7jK5JnKkwkFsxnXWAaiXrkBEHroCiCdg6akpv8QV7QMRpq",
  "key17": "s25JRoXDCsjBJhvjBTFe77cEPdVzhZUHpdZA2uhsi8dbg33ijVS9YpXin7tTFuEX8DHotQkeqnbUaa1FuLVikFF",
  "key18": "2nqKdD7qR58bf2NMPYeWxymYjMSKh1HHFwLcSV2RpMYA4sifupGfKLuTAwNKsqZcdE7W3gr4uyrQn3k9wRKxEEqq",
  "key19": "RdiTkbfVXWo1gajZJu9qZce9uUaqBENu1hrgQNpCp3zaJboFDpeDebLoMTpxP8TF4vHjWNqBxyW4VTKVUcknoAX",
  "key20": "27HJt9cjgWTXH4qv9WZ1uSbHQW7Qnur2ScGiHBwYpMoS4v2hryRUgmS8Zj9CiqDr68Ki3bDqHptH1dAdiFb9hCTr",
  "key21": "4kotDAKju4npEduNXAJuWezNg1C55bqdpktiwcrNwFAPkFayBSthuP3PWEqPjRsg5LtAhEj3sx4wvLdcekX9uRq4",
  "key22": "4NxSRJLoj5Xdk2Yv3SHGJkWYs85vh7d3vtB9SjWpna3XEAqkdMkLgKDuNkwfCSSfjJfJfk6zuNzWYc77s5EDyVx7",
  "key23": "BPXcRL4DTEjph1jJ2uZDe6qfQ1PwfgqL1c9jLtNPk1w8zSg5WpdNnTXgCtcdcXgHCoWBZxfQQueYhhRbz5DyQLa",
  "key24": "47RCRAkPBac5hfPyMNbvdAA23To9P87gg4Bd7sP5RJXT9ddYYfnoEzop38jaFR5AoW8FnzPdJVUDTLJ6SUiP1aCD",
  "key25": "WYW1hbshcH2V61ZtrVzbM9dgULGRA5o1SFZSNcE3FR9NwjW1JDnAGVdH5NL9rB3WRvFr1RF1UTfQRhDgpp7t3e6",
  "key26": "AYn38LUaJtWDBd27ty9FS6f2mZVHaSm8m2oaRbWJW5gV61dmYdTywbyCKwTmJAwPxqTaGcwYnJiTaW6BL5hpkhx",
  "key27": "5q1bqEnPaXkeMG54NjJ7PsQj2HHCJP84E928BZkfnGu9FyMn4SzrfJSLyDbmbEejgw9oqn26dWTkKx2LxjmjrmX",
  "key28": "3rksEQJPwPF3AtzhuWygmivrkbdTkSXHyuKtEtu2nnBmRAebL5bgsMiqUxb4ACK9kXpi9fzmQHDyV8mJrctro8jq",
  "key29": "4RoBcoXN4tHDVBrHCKDVDLARddw9JjrmWyB3DCKMjuKxtZSAasYGSSFe8HzmR8v8rqGApbxbh3e57bLKNdPFBkVn",
  "key30": "TqQi9ABM6fcg2JS5ifc4fdjgDDEwANRRS4s74kzCX1brDNuUAHzFvNEvatxghQwHBYTrAyNo9x9e1ukXmdDRrTT",
  "key31": "33M9uAGYabX2Q1oEens3SxU3HzPgFa5nEY5qCqrXv6SYq9yDkJmrKXxd94wpAnSdcb8NNXovXX3UCb22Mf1P3wq8",
  "key32": "5djm4C86VgsrQLBf86L2YshTDwpt6hMz4Kk162TLHUKeq9ADsm4BZi6WKo1Qqti77vLGz6kNPkdyrR259qmxd4BH",
  "key33": "ekfjkUESNMJViQP8ZtQgRakJmjX3zCE4tezuxqgERSqtuHSRb2y2aQrkaLuKnuTVkz4zRYLh7bLHmGU9gACYXJ7",
  "key34": "64rK6xEuarY2JWfz4HYJdFfiGsnsPbmDHXxXFmkZrdNeHkrGX65iYi8fFPLhoBES5Fh55JaupwPNsc9oK48t8FCT",
  "key35": "52GSPoVfcUqkqR59Bo9Pk2TULh3JhhY1vxfM91p6VDE3Z3zSxAt1djSTqNq2Lxih7kgzz51X1jr1u5mF4SUfJNMC",
  "key36": "28cbMq1ippQvxSHzsCFT95QQAVMpkYUyG4pi8zdtjJdPDguanf73pA42iyuWjfXwsGdKeu91mWJLXKchfcJzx4db",
  "key37": "36JLA18vijq2QeyJrDjXYVTB54q4pHZHeRPdHvurgvPxL3p4BrguC6cYxRF6FMHHfDswhWfyWWfX6CdmszgWpYn",
  "key38": "51Fi376JG19U37Gdjct8PtnVpy46p6fZDUHBdXvcxSYu2RNC5ad69oWS6wdtAeRztoF5c8cQRj51LErMUSUsGVAj",
  "key39": "5NRuuPsNJMa16XPNiLMaADhQDMy8qvFYLcjUi4jPWf1KLy9mSpNzz5EGKHH4QVD5i2iYHGn3THmxXDhCj7fdTySb",
  "key40": "2udXPg7whJhh9MXfxxqF2RmynuqhrT37ADKv6RAxVmSFDViEDaD6rCJB29mnTHm3chWoFvFhfgnGXapEEv8mkJdg",
  "key41": "4vHNTG7etjGGfeG7LGZ5PjSAm8mmhu1isxfePUcH9poZVHooqhJL57HEgDywctikhkGPXiowr7ztpMitiQt1R8Ce",
  "key42": "3THq1Z4FoLxV4mpY24Cqft3RBfpDLGovb5ptbDaAxyxc5cSGNWsiaDgLNvi5rjimNebPtmZrrYwLuA6sd6xEbWF5",
  "key43": "5kJto87cFA8W6xqzuRTytJBETGMNVJZZGpEV1CyMhwaH3jeE4HAAmwUrzniXMkKSuwXuWyo5xkjno8kt2PXMHypM",
  "key44": "2uFKUoHNkotRjmh3eswNaYfnMGUYUkDPod82cnBh9hDEy7cg1MJvDxkwP2JtQ8ECFXXLyzNFqDo8as8emcZpzrXd",
  "key45": "2XrqohduvDfMqY7BCWY3UcYfvhggydosXrxH2E1pMu961hKiFb8u6Vu1Hw4zkmrJZNY8uWzD2tRjTgMCcBkVTVfU"
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
