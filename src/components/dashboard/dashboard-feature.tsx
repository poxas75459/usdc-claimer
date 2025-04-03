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
    "1NQPZ6r3CaRKwCBhndMXxRNAT94QPogoYA2wJvET8aPBdMGcznB36HGNGVMQG5NYgM8indqYxqxWzqYhguLZWFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7UvjVtrN7Ya3wKYLh68QyWwtd1KPJyY9tnYHpn2Hx5zjyDzAWXDme7g2vJ6GVvVDXVd3Xpst1cwcGinS1M3PVzy",
  "key1": "VKAUqWsc4PHEe2u1py2L33TCxQRwe1buC3eLZgoFXhgJSiPFREULLEUetNtdHBd1DxHDNkT8RKtAcmg15GNCpnH",
  "key2": "2b5sRLRRnF2xcnMCAM9zHFsMqXu14kycgog5MiF9Q35CruhgmXp32Ff8j8WtXi4yBo1Uox9T3UGw8KpJHGjuFzqz",
  "key3": "3HyrNGwZYEpF7LUXSiCkTadWRyN9apnRY1nEDkTjNMxXZv697apDXfmCgsPbM3fh22nBZEuS1qE8j6F3BQkoKkHQ",
  "key4": "5hx6CSAHzMxx3zKPEKSdwSc9fnE1AepCCcVoRB5Xga3aifGwZBa9Frd1Uk5rSGZr3VYPWkJ9exKYweuWrKktFnDi",
  "key5": "4mnJj29zfqc469QcGvc17gvYE69J11Y9w9erw2yr5qgw1c9wFDRCXkaTn66GvK4pghWK2GFMdjYZMVUp7avT7g8u",
  "key6": "2HH8sM1cdwGRdshqzpATb58YQ9CAzghyKGYybZxgyFcZ1HyVAPJvMvidQE7VUSe9KuZFzjvKhoqEcoaKqqdk9BnQ",
  "key7": "3WGaYL3wJSVpNTpkxQCBe1dPFjhyEbBuXkCHjX3RqcozGXoqbv3DvhTyctjvBuJ5cw6GvGLDnx4Q4VqTnBxo1eS9",
  "key8": "2xPFxka46ZJqKYo7g7HyaEiXuzvAwi3sPqE5HB7dPuFveuBcNkzAENQkNehHEqHkPLH91kGBwNFuMKUabrz51pZj",
  "key9": "LBBNzkQ9sTVVGTAgqE6KPLcF7LvyedJ7R8CCxTCd2nFeJoWJKUo9xjjxeEcMroN6WWjEJQPBd86HW6ZrUK9FXDi",
  "key10": "4ywMKqUUARofb1pru2sp7syRJYsnBfhAXqcNC29Zi2jM6cbTv5j38eaGKCztvaBia1UBGPBJVfUG9sG2zeTvN9rf",
  "key11": "2LovgMW499P41gU4jbiJsQ177tEZpVactzvK3MRjJmToWNYra5f2EzMYXxcg1Tzy5xdy4t6GFnSLvTjiAfFTM4LK",
  "key12": "5ksYMLd1jtq8FS79tDEv5tpq3ZpRXhHtRcJBu2qt75yFPkwxjCdi3dTRPy2KtKJyD4Q3KCv4hgf9ywUHxAB1hdrC",
  "key13": "N4sLz7u648pVbsk5PtmfmNzhXyEmjqLvuEVXNpj5r3pZfdmJ6MDaTsusbex8GQGtMAEiYt7idUCFY53guEigExf",
  "key14": "5D7nChBd2vqEa6suHhyQjU7sG8TjCg83VK1P4Hd3LQThL8LeM7pgJSwnWfJ196XdEZWe4dTHKYERv9doEUeVFHh9",
  "key15": "c1K64f5PXg4ip5CNFyZcEv31XVAS2PJAuXsvgbLuEfzdw85CTkfpNJoZd8yyLnY7bGiw7ja5uN8BEQpTMhn6gJz",
  "key16": "5H7q6ko7aTQbrgf8mjuD8mkhfbxqwLeJXeSgkcSAWb5brNBmoJoLPg12ow1QxD77duYfF9C8iNbnuZzB7nEhC7uG",
  "key17": "5Kkcr5R5BdrF6sFKm5LNqZ6wSc9VW1pt54gjhNSSAtFJGe3FJ5yM8MTJFukDnkYkJZ2uuerNkJuye7F7EaUMaFaP",
  "key18": "4rJ1hDidqChFYhLdLhqmyVS1oexmRxuZQesRvq8ztWgWE97T7jM18RzbKUX2Y8qidF6ALhtBf9AbyiptL8JRRAN4",
  "key19": "44smAb1xyWdxX2S6ZewhPqfGTW9tyY5DpCpAT55nCiwKdkjWBCGhSSLSGSp9PeaBiGqwvCyrqbDNb1HCf27uoJW8",
  "key20": "61cKHF4K8q2qsK9rXogd8Vedi8VaAmrGbodP7GYFSmqRs2Mf2CZmpWEtDcMK66gTv3jxzXKKU4JA2KQPb17KQ9Yh",
  "key21": "hD9KMzyREg9pxUaBJfYgozLmKJokRnwwd7N4bmb2LVXV8n37kyjnA4s1ocQ5uHjLRBnNuykG5FF7adRbGNWerPZ",
  "key22": "41Vn82ziqpDSnZbnCy2ZhtzBnEyYS3BwKgYmk9Ur3RpkfhsKMxpYg7Txsss3kqHEkqpobUPBmPmJGzijmJQwqqoj",
  "key23": "5qVcfnLsiV2NjbJTUwEUVXbwJ3ZmWuDkeqfnfuF5JZdXfzLFQLKmK9NbDaSmTVEagKrCBZXPQYyysem99Y8QqvL",
  "key24": "5D6kdQWRYPTVQHGEJzaDFv6yzzks45ogEESUssy5tRtHqEGSs7ag2FN2YzQjraWZGtW1YGSRCDdMG1KN1U4meTn1",
  "key25": "rLtjt3Suw2H5XCfp38vA3VW1vGqfuiXeFhB99mVWBswkhggte7KgCUb7tvzyAbgaEUwSUuZ9Fqd3vfwTP6eU3KZ",
  "key26": "2Dpj6xYKSxiJZZt7KMSibK2f1kskpeAPaUXB84X8QXKoFMYxd1zjYF4wvtS94HsXwbKnmn7frGHv45SanoDUHLao",
  "key27": "49acmzWry8nun17wkXyda3kV3FcXWifxcXCJyyfVx6B8JepctSFcjPKC5UebXGsh1KwT8Ph36y8eKo1YCD46DE7H",
  "key28": "5Y9vQjp6hm3ZaM2xLpYiCHAtaBhBpbBb2HwR2hP7YAc2ksjCG82iqkk2rCDFwcxn229RanaT4VSRfFCtR79WdVBs",
  "key29": "2sH4r85ACweFq9qdzTwKjdcoa13WBNH3AcBKcSiVwBL9a2SeaMDqKHLAgunparn8rQ5wLYST7YsYYrUm37JTu8UU",
  "key30": "3wF8D9eKMhFh43MF3E1g13iZVS3Q35BVkrtHjkhnnzvzKPc8zGtC74rFqZCLLcX4MYam65ud8y3862ga6oySDbjB",
  "key31": "4U6WJFCgUw4Un5RZy859iYW928wsxsVZxD299ryxUrtHFvczWh4dexLFY8dTdevSyYvM6f1wgSZ37eSJJxF56uq5",
  "key32": "3iWB36PcjAxQsiaVMfxZdCAUBRpft6ShcepoZ47MjdGzjR28dExanHyvHaUCbqMi5wFe9nHuuW8Hq6Z3iWPXiqo3",
  "key33": "3Pe8AemBKo9qa6ZBMutNxs38nsSvVh9RqoeRH5b3L6YFYHcMHDgc7faZ6kkh13XQENcnpUL26dNWxNNU2CgVqJ5b",
  "key34": "4gJ8x8fphPuWfvomjs3gSWFP65u81zAs94DRwLvokBRvK8B6sGAi4GQsVcGJCT8J5tfb65nZ9aFLWjwUAXMwRzRC",
  "key35": "3JK5c34jF3feJ3tVzHPFDu1BFKMwewafnjscwVEkbrhSVyyHTQL8nM6S4kY5VC1K8v15Xe7er3JBnKMURjxjM9rc",
  "key36": "4wLJya5LyUbijTXHeyV9MsquVeyPXkUPgeE7boGtzMAtEnfkeyo52ebmankPpLZQxS32SmnGsP1xday3wAtzEBgZ",
  "key37": "5a6k9gzjgHu4CUdgVvWqkbLRQGfyums8FkEUsez2uDydsj17gEgBdMQMjansy9tiudmT1F9x8KP8ccz4CfB6fG3H",
  "key38": "5iQHGNswBr9xxBHyoa9tmmGhvQR1g9HzKpa4UGXHmNzXLt3GnL1h6xb7Rx1MXfGiD3uVXkErrzoeAouYGR45TAog",
  "key39": "73c5kVtj85zK2NXwVaa4znqwR2GVBUg5jR4z7w2ceectJNwTehmZrMYLqnbTEp4p6Yewpod1NWczMqdHv51naBS",
  "key40": "4aFWjCr6iPvPa16N1JmmmvDLkCYwpEJgJzib8kWtfiz57hoJYRjZFwSF8Cod772canxfyKj3hM77g4Ekhz3RYECx",
  "key41": "3R7sLxnRGc3QjtLSaUo1hQ1u123YjajjCLGu7Dr7Qe9AAz6mVtVzc5Dton75ssQ6k77Djtc11fE5dvLWJdRNhSGC",
  "key42": "2JF2jqvhtUZ3xXZi9HyBf17c6vnwrNEJ1dXEoouCKqwhEkmA6BqWeigSuuEzdCMbkmfGAuxKBkpcvaa2WbLevPGd",
  "key43": "2GgihSsFo9H2TRMNDUqwwTGEDwTCnmmthZcqJidUP8PEUhJk8EvtDsaFsk5Rr1LGEJcvEJvU4JDywUnVEYkvoNsN",
  "key44": "4Lvf3kUJCktdRH8SBv1mDhc6mhkwG6cNsxy2mAoHWf8gBF1sdA3eas9dfaUk1g1Y96Ko8Upan6FwWjniX7ufDAPc",
  "key45": "66ivuHemxbhKoVGkEcnNqYJyTG7hVNGw2TeJiiQsws8V7b4cmSejzU9fj88NrXzbgVf4Mgs47kMaMYwTygMrjrAM",
  "key46": "658ePcVY7pJZkZKxaouUVnzLjxxWV9p3ftcGPzgrgCG8WwYv6djj7xb5z3jcfGApsCoa7vVg1udRsV6SP5qoHMpX",
  "key47": "3VquAFnd5dA6hUo1ndoRtmkPv3oZC9VTK4nTGd9hW98fwcqkAPoDY9q4hKKqHt6JE2ofFJzZRzQpJGJsjUqmuf4a",
  "key48": "3Kqy1EVGUtdiCwjDae6AcXQk2JifchsuSMwUZK1FyoPwoGbBZhuRb1HSrojYMpqF54vE44nGp6NWCEmzjxF7Tp5i",
  "key49": "MXDNZCqMLt4QAW1hoGLTHvSksqgqdmDZDVpZrihzFHKrJMsB1GtqHgmmCGMjh8wULYyPr9V7wRCMDt87Vv7wbJr"
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
