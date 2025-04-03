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
    "4f3D8DeZwNidarV5dA2tRQjMv78bV7oExYGL3iu18q3N3YSvya17Z8ms77A93AtPtaaCvcgmwXEFbW4MTNsnqmU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jqeCJ4w6rZJqtBo7mjCnmmAbLTuu1Nno2jcZzMLp61XTDYgSVkfoz83CXfQ3Qk6nyzKZ4Ac2mDnK4uJ2PtUYGKy",
  "key1": "35n1iWUUGMgstkeTaGvbmtB37d4Jx1VBBLqpmD4cB5fqt3u6sWMeNDB5TtmMHac1PQe4ronegstJKLaq6g9b1HJN",
  "key2": "59mx2zzt7WjuRUiztCqVTtSF92a462gu6hjb8RrqCEw78VseceF1L3u4naS7YfccchMFxWhmsF4jxuoV8SCi87gJ",
  "key3": "2KcpmyFShhJoQiR5T3mcvcDSZRToQZwduejhvYj5fvNVWUeTyvaw26xPPVVPtJCxkw2fgtjESBu58AXnERiKAEHW",
  "key4": "4any2PFxsMzp57vycWwEyuQUtSz43s9DzTZFEi53p8sKpad1h8gvRRuV8MJeoQPSxj3n3XDXtyMnXtPLznzmCb54",
  "key5": "2uju8WY1bgUGDhKYyvcy3aYSdZdaeZZjPXB3mzdsPieGB9W174pmYaRBh5GGP3zhztc5aoTzQq7VWLFFfU4WByEg",
  "key6": "49e84MWg8aAUujt43Bg2cztvJXUg5we6frG5GHonNEH2wMNoDY7Sw8XYDLyLhELk2J7Gd8pQhCTV6JK6LHdcHQy",
  "key7": "3tioWQnuy7Q9X8UxbVjDXMfvdwkit8Cg7D7tLbGkkQimYT3HV9uTsnZHGZC5ceXi4cLQpjuXU4UFWZz6F3ZhQFmy",
  "key8": "5983YNREwnzE2G9jiCiGHGkGyJEaDXdvZpLiDSLEsdg7Dk19Bqdi1AnArLNC7Z1htmT6atGKMrLtwfFFUNWT1GJP",
  "key9": "2PSZX5PEUWJ9rvKmn25mTJg3qNAZXLh17TnAdYybGKFkuKgoWV8tuGkbo76k2Z7ttkzi7aq3jgKX4A9MRaYJYfXZ",
  "key10": "3p1U3kEvm5JcSUhhFy44WLrCXxHQRa3LeaPJn7hKnKUBdGR33tSKjxSvDCoNsiKgJa8HLPfN8nvEeVZN9b3JgosR",
  "key11": "4MirPsbXAs1mes1Z6qtWczDfhuUQXQMbvbEnTMD3RjP3WN2mDoEfTxX6BRKYmeAHow69fUKcvpiNQhEHJT6bTFyT",
  "key12": "XjN23vPa51BzirMRiTWx7DWehjj6nkGpHSq2wHWmU9MzJ8MTc2xcf46TXQ9GsxXSACvdDcrH1kVPRQV7p4AA4ew",
  "key13": "KVRqESMhq8TM2Mzjj6diQKNvNDuZStaKBQkspWZ7P88Y3Z6iGQVqCGqcUVx8LYwb9Q9fLEH9AFrszcsxrCJLWiB",
  "key14": "31Ug7yRrDAjogLsKNLh8jY772ANnQnuBVQ1f2emt7hJYDiG7gXsjVPQ4gxZFfvuuZn5GHNuUeLoXEwd2phhy7tAU",
  "key15": "YmCGACPLn3BZ43bHabb2jeWpKadWmzyG9Qo8f3xwUZnV4GpuCv4yHNgPQxoM92f9ZP4KoSdcTNfkY8bxS4eAF3p",
  "key16": "34hsYe5NVtWjveY2Y24KXBMipka6EQYXoSCmHK3HsXxtqcZD5NYvRDbrqALNx3HHhosu98t6ea4y5Cy683vqwjVk",
  "key17": "3NCJNHQuFcfvDT6mt7JgcwB4tUzGpefPt7MfGdi2qbuaVy76mtV1DNxb8SN1xbPSzRoHDgJ7PhxbVYDW4UkwdCTp",
  "key18": "25eBhBYDg1juPPbme22343YRXMFRJ2LYJiriWNeefj9eSqu7DfX3Bp4xn5LxxfB1StHPZi5cjZkS9tHCbyBQaCrM",
  "key19": "3zEY9QxmSUaitKLmUJhY5QuzW9HVcCGMYjLNb4jmNNPZAYsZqk6QJJk5kTyE2FhAAirCWf2UJkK8UR2yfDmTL1Vy",
  "key20": "EHmkRrg8RjF7GRUAHMZJ1LEkvYWuwnwPiHwsbvD7tC6FtC482LzwGrNThtyeh6KLZTsobCXT6Q7vzvPaTDQLMkH",
  "key21": "5QYRXVerVVtVTRpHxuVDVQVFWNX9u3gmhtPNmSxQWL4Va6WuwX9B8ThkmDk2Hu11LJZWNWtrWwvAG8czTwxDm8Yi",
  "key22": "2xWVpABo5YopnTSJrUVTX7xsuRGJ85kSHZZhQ3HaVDVCapiPDdvhpYao3DkyGGMJ4hMkf7zqwRRjVmQpt2vb7bZu",
  "key23": "3tCKjjfyu8aKC4NMznLzBu8JYnyC3KgqXDBbTCpfUAHkbdD1fsanNAuJ6D3iEYLL9CUudHp8S44U5D5Hb9ywH4cG",
  "key24": "3GKd2WjCB9p6VEwmYRCs4ej2XFbreEsoGAWYmYNoJoKU5Qp6TyvTqryyDmVPgjKGoD72d1JDwFq5odHh584A91Qz",
  "key25": "4RcMYxedNEKFnFMcpQDUh5Ka4EaiBTHH8XL6xTQoCxyx81fQvQbsddTSQhhUYjFZHoR2U22mmnAJMSf6L7EnVuF2",
  "key26": "4fsmJ1ZM66rFk67VyAzcUQYDdQq7G5QRhaLv3bCcJ3WwFi8ooY6tcAHiQYB9GRYox4Ut7eqbx2kJXmfvUjJ4LnHo",
  "key27": "4GihcXMKkfdUBCSg288DP4C5a1h9ai3TFG7eDJWWssHVtaVWata3V5Q6MxrDxBZRRxuH1L1mHexezpqXHpFpw6zo",
  "key28": "4eag8MrnCfgzd6rfHKymA2o9neFkYxHBSir4k9R1MPoybgJA7M8H524KjzeNXmAra92Mo6hyBfFKnCD3M8hw2eux",
  "key29": "mV1Ak4iGmWYaiQ1vj5fnMGaViqden7yKsWt9pp8CPgHFVMAkUz8wqDRbwpSsxeNZVvdnFfibFiRgnVr6uiZ22BR",
  "key30": "2y1dR8otJieh69kcqiHjF7SUU9NbtRng3jmybHYgE9CQQoZZUFGJy6wk7tV8CHi2qBEjBKNEJF43RboaUPder1ac",
  "key31": "4ZEzx7Ju9oAAJgTwxJK3k2ibiwaR7y4PLVkkWzqAmVHMs1poFi5D7xDB4tKd1KhjWk5XjjbxvAWgGdMQf2UqVyDp",
  "key32": "3rfDxio6NTz6FJEgwufT7Ce6DcGDNooHZ9DccUWWupyQQ6oR7pDQwnQS1ahc5w6LG1uGb49NoEin9S9hWFGV15dt",
  "key33": "3exRLaFviS9wkibjZkvs9V4WSdLZH7JNJxD83hyPkmwvNs465SF3GqTJvW51ZoQ5eijw2wswJEQetvyZ2FYrfXX4",
  "key34": "4UCkAQRHiREyzGwQAX4MUZoD7LG2PPK5cz77EgLfc4bgP36Jwn8FrQ3ncfJmEzA5JbEkcLZHdo2jJcbpD32myuRg",
  "key35": "4yCRrBcvzdDqG5hU4eiT4QfUQMMDYJBuT7LDaMYzNttnyKVWiSt1NYDUDxBAviMUBcXdpK6PvW5zMhpYMpEGMpvb",
  "key36": "49QbQ768psEu99BRPUYFiL7osfcTETZPDYmq2kMedsBfPC6NxDrjoPcBZjytqPnaF9nGitMfqS48x25W97rRPZu4",
  "key37": "2xSeC4eFmzM2XTc6Y9yM4TuMQJz4FPUkdzAtvatya3dHndK7AdLXyyV9cHubMkuR2s4JirJqJ1vHPYzVFCyET1Hg",
  "key38": "5nA9WznWfrRhCy4vTtWVtc8hDuh1ZeDUmAr6hyWqFzqNZ9uxovTzCBJvc1LvcFFt6ob6siaDSBqaxPM8gwosaAdV",
  "key39": "33Wh4myj72wr1Xk2xYK6w834cuEAB9r5qNcuV97x1smc5ppe8z7c6KPh2VBXgnxC79KQUghygSK4C2qd5ixwj2kd",
  "key40": "4sfrxL3eEWNYvqpSP1GvNCdxdzAmYVRzCJQLH6DkbPL5du2AZShdFepWGzYuiDTXoXe1iKz5mWnNFAMzazE8Aj1r",
  "key41": "248FuTdPTbn2CCidCPPqXhzie3EHMi9aTFYnkWLVfY4YqEDzNtyAjPmmWpbpUjKpYxqjGLD9akxChN87zL1y5nyS",
  "key42": "5VoSztsu2LxQWe4CJq2uCtDqeD1TeEBexoPYeghWv8Y5auFsR7KAZDZ4Y2xWFHEsMRNbmxWfJvEuPBaLTysDzEWM",
  "key43": "2NJF2oQkFHuw5nnKLYL9KzSpHb8ph1GwYjqppQqoevXW2auuWsSsGx6RBCmvP1s5YGZLT8q3mALLjqYtjWthENAc",
  "key44": "25QYbtRuixH4TcA8gsKw5E8v9vSAsiyUqGeVB5DBja2T1eb4PLbbxCoSERbEZrxsovP9oK5w5C79rr9T2Cq8QQU7",
  "key45": "2rbAtwcoBAXP3SVEhxTsSVfiYg9wQmfEeFKQuoYgensG5WvoiS4gUrSF5hqPiJTgJygEfBvyfDdVSoNF4J4hCwfr",
  "key46": "43bVUSQ18h6jLRRqDD6p1ukDubbycMGAUJKnEWwdZa1T8pLfH59CTLKKMZNjJaMHJfyfsyztd5Jni85GKV9AXPWY",
  "key47": "2238FPccxA7cDeNQpaMp7BqdnNsajxXAsEv8MGcyHauUNYfai76YikfetEu7qPdxQGJTnRq26wuGRMY56CdF38dw",
  "key48": "s6aYzmdq7tQ3iFHMruffVgMHBTRDPownQPfEgGXBkjSBeUjb1sULH4aW9Su2twQXncsfz3RoybtjC7Hs7UQgCGz",
  "key49": "3jhrUbW48vc1Qy8fCNLJokdx5jgUaXg3ZVjoGSyCnwGXxeDmtL5LkF51VeB1TabNNSTeioxyfCnHyEPLiL7Mi3zs"
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
