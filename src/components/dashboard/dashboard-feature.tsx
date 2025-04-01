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
    "3tiPLdfv5EcUe4Es3mkfNEckEQAm7yw3DBXGMCA11ZiNqQGbu5sEGe9qPZ8RxHBvi5hzD2QSamwXyfHcfqG2cuiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m5ZWWcggfLWMnL8iEeqguQfRtzGaDLADiZivwd5GZnF6RLoKzQfjNvWyztNHrfMZ3iq7LsthT6KVMdEAVqYE6mK",
  "key1": "nGky2s4yjPfBn1zBcjzm1Zix53CY77GUSS6Y8fL5MeprRqUULFQ5yfC34xB363YnDRnx6zUfePTqytTGVy8Nxr6",
  "key2": "2byCht6wHNb47ZsNJzUAW9kK7vFqejWWVKVX2fdyvEoya3yxmoXRrgrAjJCQgbvzVPY5QVm4FC5xpgU9Qj8hNHe9",
  "key3": "3oNaiVuCM2t1eio5dEZEReThEN4RaJ2N983b2hdXfDcofBz3wYR56bLzvcgaZSRYtup6SkDvSaBwoSg6Nr2JfAxm",
  "key4": "4p9eBcYe47BbybKjQkur7cZXyfdQBR53NxaBBVz8RnrPEqsu6c1Xd1uNCnMSwz5VXep9nEKDEYfxp2ZzXBoShN8s",
  "key5": "2h1JdLgd2QXVEMStUorcfDZPd9DN3DTXdAmd3moe9w4dqzGwmG2s5Qm5tp9SpkWjs7rrnhDuKCj19zxboZFaWhk4",
  "key6": "3QvMHHtisGESxg5UcyZYcnfg3c7mFFzT6egn6inMc9wynmUmA6hBwRi345SSgQrgVLLkX4mgks91JPiFrTTSUSC6",
  "key7": "5HF9eBXJtCRBNJZ6XWUS4pAu6bQvv427qsxHqd4kc6mQd2DqLqhYHhwN9UYYrk7ahBkyvtEQJKaGmt2KvhzF2AEE",
  "key8": "5AnXBcDWwJUEqS4np5dHA3BJmVFcxbbg8fu2pSkBfLVkvuaqu3DR6pNZCMuLVCsxKmMmh4U7FhcR6hPTQAQgdYBe",
  "key9": "3ga7eu9pRy3hRjM1U7rXq8VpXsRcyoybN2H8EkUno8CeeYNYs41vM5RKWejHrFDxHJXDqGNt4dhBVddW4RTuzNM4",
  "key10": "5L7jnkF7YJ9QYHGXyuRyj4exBbMNKhUTcoHLMqf2CJdCC89PBdq6QKYy8WeybUDLZ8Dk91hvCG1Dts3Nqie2Ar3E",
  "key11": "6HPmoADj6cF1A6VTprZGwFCdLyWhny13TZoiZ1MDRxfvcQ7eHUaikpPcUGNcDirHMQP6HPypNKv43e21yQvJqw9",
  "key12": "42E77q1xvrqNsC9yoKy7haPLidDubodXFzVuJNPebYi4zAkVBE44Atda7uyc4Moy6GRys5KjsMEGJkkb8RCiVeEQ",
  "key13": "2WQgCB7czVEy1KKV4bnFYqAvWHC7ft8CVfmPke2rWy6afs8LivTbSajhpcAFwjsVM5HUNvMWqLt3UwtCvMZN7kvx",
  "key14": "3o71dVxrD3hJk9wkZKNnKR63EGuHC3tE1wUsNtajkFF6QUpVEVRTZVKUzkkZhacR4RpU9XRgy2uMqG4vysV5K9DR",
  "key15": "3TNKbkxrbBxjveVXBBnwgmS251p2ikk6hUpMDgy9RTYBeegy458L9TyYKrxbk7RUDmVkNZhfKPCo6A41R3Z9RZXr",
  "key16": "57ZnDzvh6GuackcijEipg9c78xh9tcVUkwxfTr9vDZwHhCaMAzqW1BdzAwKuArMFwxF2otMqwMDFabgMFepUxEY3",
  "key17": "3MrqxNFXJpgv8oXLZ2hmtYLybUBZJKEga73nXJYVierHiP2zX2htgmmnDtskLPiTS5S6fLJuBRBh53hsyVdyBY5a",
  "key18": "3bX4R3hVyrzuELXvXgnjap1A5fLxUdX1Rm2Zw2Me3FegsiVSSVq9zv8nXxpytQT32vDtqJaMpPNBpStegdMiHbwb",
  "key19": "4QywBJj33udysQJ2bJ4bTASzvdyvxWgihd9NTx8sxUibmpsiR9eivMR3yVvyVbbZDh3anzVgyEhMwEhUgQYiMQJU",
  "key20": "5c8qrLR6uRWnMGQdpn8kdu847RQiPcttrd7qC8jEF2cNKBj8mTEAF5m6q5tcyWgHVseSL9dyYquDeuNNsVhpea7",
  "key21": "2KiTMT9Jo3WNiLKFZoBCVd17DdYREgmi3ngDdR2qdUMy8JrbdeAUdcUdQUUucny6JC5buxriNukW5HzvRVRcAg1G",
  "key22": "3UbtPiz4tNvr1j3toRfdUNpRf3YPNgoahnZn78Uk6ChZnhynxJ9wRbTd873Mr9Wuua2GBe6de5F16GKic8eyMS7h",
  "key23": "4EiSUWgxQQE9j3rEim57JLJhs6ydsCKryTpspqLRuzembypBSycB6sQQcQr2hu7Q3AjCYBQy2zYSBe5HqW2teRFZ",
  "key24": "27FFMUgG63jGYtShwdKJh9XkNutSPCfmuwv6E35p76K5tidCh1H5fbXgMEabgh3xyvKdEnPqRR1Pvb7QBF7d1jzi",
  "key25": "5xijGfogWMrHhdKmRPiamhBqduPhtkxm5ZF3EhMfaPAa5wrKie1BxZpjQXm7En7Tab3eYSQEusUGA4ENTa3kamfe",
  "key26": "3ve7M3rHDQgDjSuLCsrruBtuP7kBKeU8d4htwTXMLbkPPzupRtFi2uWmt8vZGHa6epseNBn3Yd1h7T7PoHFJuG8K",
  "key27": "2U7MoSd8pkKSBZuFFy9D6Cxirn9yk8xNYUGaGDYzmPKSY3FBgn8W84ATqVjyiHRCWRuBfZ5d7nQYnRTbG32zXS35",
  "key28": "AtpQ7iNaEy4shKUx58b2i76rLHUDhRSHGNDCtWyerGRqL4Lt4ADipWWbE62TWzkeoDpbjrszoXqFfXvxHC7u9PN",
  "key29": "TUioT3dcHV2GqMXib5JzZGfA3sXaTyoe3u3Vkwgb429sfwM9q9DQefBZwkYRQVuUW843LepZkqYM5rjqcDVZR9L",
  "key30": "3bUiz2aenx681y9BjqiifbskBTznSBC8BJeYjzEqSdz1a9aht9P4UFxBfc74nMuRkiQid8twUKswVQgVah98kmeK",
  "key31": "yDtt8KU95JSRnxn3xCHk6Stcwap5TGPPMUAcvdYm4BBfKZHk2Goafm2Gy3VsZNLufdSScaK1jSCrdq7PZQL4gko",
  "key32": "2ZYoqbr1pBr5GbyXQ8DFtW2kyCywnV76u1ZPkDo8WQauPeQK6CESm36qh5DQVPKzTbYJicLcvkqsnvhBahzQ87f8",
  "key33": "AE1NS9jSGjyxZdrJNdVZ95y48v2TJE2w2iwuMg1zz88DRHL1FQQqqHSUUc59V1o4xWqTan5u78PD3CpJzDyUumC",
  "key34": "2zt4jBASeNdsNxVsk8yP1a6D9LogMCRkyLLMvtgGXciG1WjtyXfYY8LjujhmhhmEZJhy1zvSADnLKmCscx4La3Dz",
  "key35": "V8FR5YmuuBprSQLT5qUuspZ87ErpFRvQLBvso3pAJrwBTSAfzuYukPJ83AcoZkdyUmM2rUyNNLbgs5n5g6PSdeY",
  "key36": "8VyNyiJhXvgyGo3CFDo3WNnnjyS8Wp9UGRVPAkPwL1JHpb5waNAopoDS6MvmCmcaVYVtBAwKwS5nWNeMhUAJBZb",
  "key37": "64jsfU1rJVCsSuEaH7rfEenRueJwWyAwwndApTx6Rw6eJTvAR6SnW1bE5JoGb5shGr6qn8cMLsqaB1XnNjzzTAdP",
  "key38": "5xpRL3khkeeZpCcCPZPdx87ef86NpamUNVB6nsKtkiwgErJBSy4RvzovyqoH7CfKxe8RBn2CUkacRqKHPtYf6hGQ",
  "key39": "KjPBno1fpDFUpQHMBV4BE3MTThaTiXr4nhZbixNKaWxwE6h7keE5QghGmTr2JK9ohgoaqcUN9nb3id8H9A4fP22",
  "key40": "2gJ4bWhMfQfDcqDCfhtKtSRZihv33duXwXCwguR4Aq1gWGKe3zrD1aUzsap5WELZF3UnT5Yx5uGzyt82TJtg1m3s",
  "key41": "36wqmLNwmDi1H4jXfRUroqHEiy8mHfRXPPWTBaV51PxNuNjF93xkEA12jKRDPWAVnBxGw62KJvfm9Vhm9EAeDWp8",
  "key42": "2yryNRR3dSwSmWfthDtW74exLZYNPJ6Qfuszm6pLYqz4szbUZvratVvcexjwNW3kozF9R3EJ5htQKPPKoWGpweSv",
  "key43": "2sQR8B6XRxmujqudEE7L3v1HMdmd2ujYPDkCzPqeCe8rGp92EkzszuzJLmoVWVamN7UXUKqyZkd5X5ajWTzgBLKz",
  "key44": "4HZzk8cubfV7M9HBAiUDeBYJrHRqErbPYueau9RbD1C6SAgiXmiPe35EsSQAAwBQYVqHW2abjCpviAuJnKAxviuf",
  "key45": "3Nvke7c8ZHBThKhvquem8xsYg29hNHGR3mEnDbZQY3pi2rqp82LvitjuV5QghNQEq8KsAvYtSJYN5ccR79Wv8ga7",
  "key46": "3oWY74gA2teS3nubUYtK3NRMpoWqKTfRmh9qJGtnzamWvEiGxd3E6TsCcCVvFtqdobDpvgrxPK2RW5hTTW4occRe",
  "key47": "2MKVtCGpjk9s1supqtrVEDJw3esoN8otPovGhqgkJkpQZwp6gYmvbk7qFvQXCHeBKGa1FWZN7cou12hdPMJEP3sA"
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
