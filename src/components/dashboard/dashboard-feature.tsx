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
    "29n6WX5BAx37moWRxPvZ2qEFUMropq1gGZjQ9WFkX3KWCTA4jkiz41MtSvo3RBCPTrjtxagz7Ym1b3VWxHk7WgMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GVSXzpZiPD35RttjvauDAw4DBDL6sjbo8eSE1RPNgQ3v4ekbhJQdryY8MenxCntTtxfJQPVmgyUSahx6G77GzMN",
  "key1": "4Dvr6dTSRdxi8i1BqGEFhH1btpt6DNtkzpGckgthzjnfmQXppYhoQwtjFfaTFKMKK2SLib9KR6sGh1C1GRHdgnv5",
  "key2": "5USwCSkBcgTtqxQqiow8AyhduFzH9yfEQjbxnrbXypiW8znEk4ceDNosHK1QXqX9WWo3A5hsB4JTYV6QRnTpsn4n",
  "key3": "128jBb5ntFhf34EHzu5QtPrwMCps2yNeWW1z3TvRBq6chBCX8da1eUmgoGQU3GjtzdWQ4PGSuRYe9XyC4yeqv5Yc",
  "key4": "5wmzdrYYpK1ZXQo1kLK2M3w49bzdFdkGu3YteRM29kVn8L2Zek3nmU6nxwTdHcMnaau4iHi4oDmrQ37oTrp7Di1u",
  "key5": "4ti7J2LW1ssBsXczmfK4v4FxGAfJ1nZnvNyQMLM7ZpuaPFxUuV25kL1vzkEDEcfQwo64hTxfNGjUujwFAv1G9355",
  "key6": "3ETySjUVa3ML75Q4bthaJs1wn6iKBpWvE8wMdZjpxWM8GFR5VM39ftfRRZvyBhvG5VYokinZbtmWdxwwPmcjVv9J",
  "key7": "zLDwuLNBFnyfW6S8YUZN6b5mbSJqoiyP6M8XjZF6rbYTFcir68EJawUoTokJdg5dZEfHRQLFHVxjHkatEfvXsmZ",
  "key8": "JWqvq8CnuL5mrauRGgQToxSk3AjhwoCwPoVaVjizJJaqxqLYQFcP6DkcLzDivMPRVxLxrC5NtG2eQLa9XDM6q2u",
  "key9": "2rAMBrY4qb6UmtvW6ErKhiA1z4LQbPcoXPDo3nXj1ASuAVoNFAgQReFG6zgZo2mse5mncrGVs4vz5XQN2L9PPmbS",
  "key10": "4E35jMhLUfwrHzaibZppMuWqsB2xWfnacMP1xDsRnSqK9sUTWp9fT13pNnBTiVthhN3qPNffd9dXV8RGtEQnVuMQ",
  "key11": "wUXFvvRkhhgqnCsNi9ntjKEXjZDfmv6bRLciAthtrAUG4argHrFY9WahLKzfzRQtbApRR3pknFkas9srBh9JZgm",
  "key12": "3wR2uWdXHvrrFP8h9fnE2y8odHgQ3Ck6hWqDS4tWDAVbxAjAnwvBGkD9EUPjjMFgtXdKsAZ4FZJWKjwKEHXk5Eks",
  "key13": "Zn9mkJxuNvKM6h9kHG2se66PaN2qqRRZGkGkxKPsyGFQc9kgjXH523iBPxo8xV2T4uKXt6tTvTQPLouRXq7HLNb",
  "key14": "2XEqTE39EqgtCCwvk7As7BPjeAtBRekCr4D6RVRK7Z6HgE7YmeG5oaxGD5AgiGobFB8Wvs7QmnGgbBqs3CZvVLF2",
  "key15": "2xCeWADcTAk3BTJHrULUEtuRRZPLdYgaFjRmDDGdDGynhPQWegz2pafHctDUxpcg2rnzq4RQoxSrzAEiNTWMqvtJ",
  "key16": "5e9kVZD4Y2eNK1JBTnvFr7f1APQUgdWfVtmuUTYnKwqFBPw9vkLoFenC9SguMfD439etveucLC1iqPAKu5iT7gP7",
  "key17": "5fi1VrgpjPc3EF5fdjau5WtoMeY3jpBnoyZZcY6beSboJot4jeAw3qvUdHgcat6ZttExjSRNqffgDDfACpGz4pKp",
  "key18": "34ayr4oh6giuXcrVn7xrQh47pCH48r3HAhk8XRyHpeGKT7xdAHHdJXtPEXzn8rxXYSPSPREgbc6V57gQPP1anRwp",
  "key19": "3KLopkuwq1H4iqkB7omz6wU87MqTeyZTrae9A2afz6MesF1DVkM5fVjCzoVr1SdjBeF4k5C7RmQC7R4rMgDdh43H",
  "key20": "H9yCSRnxF8D3Vwd8EgY2ZGqqrL1hnYafme5Yra8aBsm895Ldyo6buGmKSu7ezRjaPu8bYsXKYxvWAYdZN9wgomR",
  "key21": "2Co5m4mvK7Udo9AxBv9qxjNpeBECKWHn6tYGhHXb2XRcLUwyj2Jb8X5qXTiVvPya1VhhRWpSgcabczPCuTfHQLBU",
  "key22": "59N9tpw7S2UKH1wxdijnYttRqRxuta6rbwyQfM5x2Ri9bpMnvX99qNEUS9A5qCAfYL4wmcW3AqPtWpmNd9xvZLsy",
  "key23": "2RnitXTozPEF8hbFWBjmBycBwDgECFwWNB6WAzcwrwxhqogNfU2854a5R5Mfj2jUPFweR2iyX6uLxai1tkQKuq1n",
  "key24": "VPwtyx2o2BqBt1nkJzn3oeJn8oJZa9wVz2wG8kWdh4NgNmGqqhZW9gpTT2B4zWt5p1sjiPBagPHYVqSN8y9N4yn",
  "key25": "3xGpNWP4sGg3SnW6gmS3QKb2r8bQB1d8FhXwxm4WjBdwVbjVLqEcv7CBLkaNoG55iuRkAqFAdKt59aYv2GkFJxt4",
  "key26": "5nVuGWGW3CSgfbCDmmc3G5FtcJvzmcG9CdxMP2hfmCuAE96Y1TD9Whgar13HJHEYrDUiXRQs3FxnnFdJo3tvvf1S",
  "key27": "4CDgn8Kb5YBJZN9tyFQWn7bnKgc3N5XUcbUMtkdcSKJCFD6pwoPbsZ2Wycj3voE8QuL6BgNPJvDoAZ4UKmXx6hgZ",
  "key28": "3XNrpAwZqk3DXtJWUoEaRasce8SxGpSygKo26Uosh66sAoYLFjsarv2VuFT1FocRxXWrcUpuNYUuRaqHacaNkfEf",
  "key29": "2QWZqFH5TNFq1c6BwypHwnuHe34xKJ8KhYZ54LKZfKpg4cJZ2EvJQZxtUKgwU4izLyu3X6GUmKQ9fzvaqQHQAg67",
  "key30": "216AYBhcLJ9jfg3NGds8j2ChXmXqAXefQUtHDK57vmMKuYv7SU1dg4bM1yjwLXn9F23CVXzDKzHdzSpyrsNCukHq",
  "key31": "4ZNbQ5Y2btmsJQYKuJnhvYVHJEe4xss855Zy8gn1eU1Vn9r4mWcV7zzMbh5qEgdorpQx5UVrN41sSU22X53sAvMc",
  "key32": "2LdQavmjuoeTpGYXj8dmWbTBjnZ2ZDNAJiFUn4WB2FYEetYUJB8AwrAMWgzN9yPx9EidsyssZWoVdY21CJYt5dz5",
  "key33": "3kfP75fJUzBzdVWVFDwx8VAQTYtiufuJbBhKMdXv5FAYhHQGEqEq2AyJgSjosGa9mNXPBq3naC1haqg3oowyrdy4",
  "key34": "UfJrqfh5PetZX1qzJ4LmvDqAHN6FB7ph9q4qa8NAMcGkzVxhCHivBDUqEhQdqwx1LdatigpFokWUjyFBZUMPFAg",
  "key35": "kv13zBgZuY7AGdf6ZDHZoW3rD4u2xKjpzBQawJWggniAmNn7YetspuNS6op4JzUEN1GdeHzyc4ebaUfGA3byr3y",
  "key36": "873ngtgZJtuBVMiX8BukfoYiHRkhnJWzwec8kBo3Qbsrb8Du85xVeBzgwDYjbkh2kPExgEcffxBpKjDuUg7aEx9",
  "key37": "5ttj93f4vozSMv2zKuBqv7YVipqAXYz5edutMM1qKRPskWx5RFpxp6SRQoF4AmvJ1dD4AXcMupJMLHE4F1jmU3uo",
  "key38": "4FvBU9nywaGj6etcDi721XcWBssUcWGvi3eUFDPmmuwFUZvGzLe8oiKKQFtxsWuS7TfAz5ZNea5J7TQcTbGKEnMc",
  "key39": "3dHyzS7QJpXCtXGe6KV9Lt6CKQ7AFRfieuJBoWU9nUaTwd73DNN1zCasCLsEW9qXFUyVZ5NdATGBRLuMGkEXG77Q",
  "key40": "3597wLgtCwnQ3AZR1zpjarnqbQajKWkDWGQRv3AdCZ2jH9KaEykK571uYtxLkLnSJoWLjNdXfqgJVTvab6Ua4ccj",
  "key41": "2PU3sUktDo4ogoyQHZVNzistEbRRBj6vytYiomtWRwCeSqzAJVZ3QFRBroWuqihpS3gvPEJAfmoydxu1W4aeAkKv",
  "key42": "se4HrfbNTZNbUBykgcW5FcqzHggbWowABmJzBetQBonh96Yq8dVyzqhyvRcyiZ5HnPGpujpYm9xS9XMpu5BSB2f",
  "key43": "4eJS5bAjRyHiyimYCm3FjFKayEyds4Nmumi2WXxbmi4LBcwCLkoZQcMPU3nozdQhbZt5ycS2PamFFttBpKoLZSMv",
  "key44": "5iSbmtWFTrz5Y76TVse8gh2to6vLChM18FtW7iNz4JzVdpgmp1rce2pHpuUi1wo1feCWv99oRW9fRhdXLGcGXT7X",
  "key45": "3cAiKSYenF8pTiiDsxycZTX85wwbYehNZypj5hE5SygS9VjUWbRSxsVsvCfEgwPS43doYLLtYZUDrpgfgutzvT1M",
  "key46": "mUHEQJwqhMwrt3L6UdhpYHtNz1w6EKgkbjeqNeZpcRozESSMtY5VGJjqxpiGZpvTus75zPjwuHXqD9GrjrMBeVj",
  "key47": "3i9iD9NQmVG4gypeSzmJYgfFUF7TPTCqHzenyDJ2neJgixRTW8Wmc8JfTFW9CZFoidF8dWdv4r2MGqJLBwJzE8ZL",
  "key48": "6278vie1JgDoXkaCEvRkvzR5PiofwPiBvaUFxLbvKBxQv3s2BfzS9fqUDziB7aU9YkvyP9hY9StnMRvXKuHQC2dS"
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
