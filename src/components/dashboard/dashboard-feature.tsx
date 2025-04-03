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
    "5QKxSEN3tXHGXwWGi2hdnzF1gUuRkKsQuxp8C7mX6ZnSZ5BrATyyhv9ouBqRPx4xxVug5BePJG4nB1m1vvHsNGTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e5iPg3Hojvg8Gv4yBSPZkkRzywvB5TQ7BGvqfRHRnVAB2FcVZhf4UBezzDEZtiSjfZkCqkLMpF2k53AMbGsHd7W",
  "key1": "3qK5Cupe7uz4HMf9Qe3nqHo9RhSMNiFe2fe3ooK3xsy7Azh39d5pAffev8sF14e2ADYTvkp7hxmb4zKEftpw654z",
  "key2": "5MTj31zn5kKpny77X4VV3VJZCV6vVytuNbSecbEVitDTWe51gNEJFgwsLrrekck9ahLaANdkEsMnmduSG4j2TpwR",
  "key3": "5bPmun74x3VpVE6eT4agfXC5MZ6rfuHscwWEMHMDcsxeu8tbJojHyzk9Si6tJXyQ3JEo42WwEvF5aLZgxQwMirM7",
  "key4": "47Hys1vfCB9y59WZETdmCK4SB1AT6ZNSgux92BtqTYowzUuNNGavPSEMei7JAeocQzNmrdP94kVfzCQ9N1fMPoGW",
  "key5": "4U3Pbg3FJWjLx8Dz8Nq23F1qjYgVp4qpaG5bP6idgPuCd4WgZnGrCQ3aopfuRRQKkoYUhRAUnBFD1JnEQLb33NjU",
  "key6": "38L2MCK4woJs69W9Fi58fVfoRZoRRVC6Twq3f9Yv5JsdLXSS1U2tp28ma15SPYdipEnatpVA52N8xAdyXTGh5Zbx",
  "key7": "NUiKG2mZNTMzL76hnVwL7BVy4c2gEbP2UCVq1kWRMqut9jXirqzVFuxA4e13pT8v9C6LPwiKpd4x7jn3QVkWwDV",
  "key8": "2MKR4N7K611Q4d5uJoJXfxpHmxdqkYYqB2pMTwXUX8zNKjYS6fWcXSWVr4ESe53JYaw6AT4noHPvtwt4o27TCPp4",
  "key9": "52qB6BEia2BMDs1muviaDagKfobYjDMipr3pbdci6W7n9i5Lu96wgqRRUpERbfZ2ZVACeCtwbXWKyT7juAkvgPoF",
  "key10": "hLDiJfbX6g3fnFZug6PjgprojM4r6244j44qwgyHwAjnFnv6tM3p5R9PmgN1ugM2N63RQRqniQJQfgTgamnFPMf",
  "key11": "4EDSdKo2khYrMBkaR4QdVEt2yhXhA25eYdYeuj6sm9QtiKuXTL3QTmcwPSHqTX9CUjBqXX7NVyjHgZzYk1yhQjeq",
  "key12": "5EhSHdT5e9EktuBk7dzWw13Fs6r53cv6TsSJxWkfNyaHQXEaWSidosJQCftdxBWZp8rz6jBZUnpnWVn7ChxemLVm",
  "key13": "WyuxuEho1yvq75jRxm8uuudgVBx1WieKBo4SMV19Wn2ASAcuDZJZGaT6CzGaDtApRa74URT6Ywwxsm6wssDnzvY",
  "key14": "3i3F4dwhvzcMVGrjfoCeFFKHrugczG3tD3AtSTTRvSsPzKUgnsbeb7GK12DHFEj4Ez8ymd4hNvV69exikMJAZRKN",
  "key15": "5LW4pMLz7FfSbqxdd1JNqPFiNcKzo2ZZehzewp1NEicvNKwJfJX31RNc4Uz9P5VjnAFcU8yGvTZf4Fz6B6P1tU5N",
  "key16": "3Nvs1ain7oPPjYXsfZfpgoS3tYQBRu63vACDzT7G6wDWVewph5pxDLFexfBVfJK6r1yDrSzxw6Nz2RLrRdtibrJn",
  "key17": "3pJS9Y1y7EabQg5KkPfXwxxrFWfiUk11hVCxo1DBEj1ipsE8PNvry5nmV1tfsfrQLGLhJN7Q76mzjWNeMiproqS6",
  "key18": "NcbCuQNmMwbengNnR3vSoGJjR5mwyisNAhytAikoEVsMPzbJG8HqLVGXbN6FCBXDXNM7KV22qnTSLKKwVaHAiku",
  "key19": "4X5q5qnqKAbp43SpdfZUDdx4iFikgaLz8Aw4qAy9VyR4uvLLFt58CmGF9vz47coVRrCTejvy6ns4jTviwmPeVXVN",
  "key20": "2zuUKckth4xL4aNFRvt73tm1cYL6yydQXcsvDu4QLChKuWo2evQCgjnZiLLYM4wfothBXiVPMLQ1XwYmYuPzV3bb",
  "key21": "5vzze7U6S5fGQn9J4LVt14uAV48bMFr9XKiaKYxwxG1wz3xnoc9H1FL7LJe1SQfeAoXfDc5b8jbQocW2zkZdXwG4",
  "key22": "5rUxXY5DyFZ68ZwiiRBkR4XZCHiW4pvoH7xRwUyeTNnaAjVzJwjqDQFq2dQSzK5JTJmt9aN2z4JeYnZwPoLEQsno",
  "key23": "3oNdub7EQW88mZs5KY7pLL7uex5KSbmRZvoEhLkNwmcgrpqe3LM17pxYaMGxKUuiPhygw3sjGdhpJ8pjF9DMeFUR",
  "key24": "61v58RZp9CbZe5T3u3NRTAfxAbCnW6VGXm2JNr6i6BT5P3zuhAsEs3VgMYuLJuuAkuwVJGGZC5HjC5xvpPvkRyWS",
  "key25": "pyC2Sq7qJZdbwQsyfFygJdMFfo6uKP15ctZ22oBje5MsyWXAF6VZSqwy6ws3q4QqWxDkwz1519id9jQ5R8Q1EJt",
  "key26": "5NiX2FdrDp3RwoUtz7gbFp7HsefhNttpZy73oqH5neBBq6JCFFqwLJP8nELYLe3dXvMquu9ikpMEztfdjA6GiyVj",
  "key27": "ygpm2Lhb9jUmNk98y8seU7KaHDhyW8JJM32YarUV8PD33rs6ZXtiRrrW6eHAoLktxucA5LBAuixzVAuaHons3MA",
  "key28": "4bwCAFYM77FgE3wBp84rE9Agz1XrUDhyzdbC8xtGQFyDCGBvWqrQ443Jjk2FkXPAZ4qrCrCqB7uhDRMkjiy7foDA",
  "key29": "5jXUWR8RcNjNhbj6aaDm6kkM2F7D89UosP5nJr7RZjjwqrxxm69KN7LzMjEFQV3DdvE8aVbAyxdiHSYjmZDQmxF5",
  "key30": "ekWvHKTDLEZrzhnPF2ZoCFZRg1DjmKbtfRdRCY3CHoMVVyXsyfm1cEYyz99thDSTusvWr5SRqNQCiJyFkijTMXF",
  "key31": "2jYFEPBZThzqpk5xhjXVcyZTinbZVstKa3u619pXVznbKeEevATx4gPS5coCryA8NJZ4fLzMrbxm1SPj6H8ysRod",
  "key32": "37h3oRMh8jmvgmRJXGLPHEkJ8G6zMaf8GoeePGbGEmvZZpFvcUEHCF9E9Cbm5KTRzb2bio5gpotv65ZicfZjPpoJ",
  "key33": "vEpGDaBW6TcyqWWBW6CQfBbNH7SjP6cAi54wSRWufwRLsTixU1PcBoLfoXPReLBUoY5cJ56PfmAVyZqZZtgXwsd",
  "key34": "CTp1XmrYJ1FhNy3yTHMo4ZCyws6JRkhXGArgSa8h5bBqCD8yDjkBBEGjKucRoENKhW1mjF4cttywQhjn4FkpZ5w",
  "key35": "5oGttECQZYUk83A91mp8iPUKXrQj2PoZKy2m1gFGhb2txSsY6pXZyJmCYBhB7h5HH37fQykFX7kjKiWXNiNrmsRS",
  "key36": "5yder6ZbeJfdFWyk4spHXSR4n9gNQEfsia2ztX7KLfcuYQsA6FdrYk8zXdsGjeYDLwA4tJdkqjzC5fDg19BUDdFJ",
  "key37": "44wM66FE3c97jTzu77Uffch3A6xLvo2qDqwwU8SHVuaf8aYaf8XLByk9UcoTdWdrVzhueUQdyN5eqqEL17a2YPtY",
  "key38": "3kEuqc7nZosP6zgcsCuQqjqJovAVLkarZrSmxbQGxFfiPJ3NyiE3Q8Cn9m1sdpQCQocC3b4P6DQtXHgHuCfGSckn",
  "key39": "5fuT1S8mcNpsFxhfvnqY6TyZ2Qf5ZZaN8oCA8CpisCHPC6W2Feio7nyocJbNH1y2kTuex4WAtPrfbPgdxL2GUhnb",
  "key40": "nDFn4scRDHTPPKbsEA85fGvfAkmp5cbEJCbYAerZGpcxjTX1cpi6b4hvUj2iJWQVtkkz6S6fqJMbNAbQEd8qN9b",
  "key41": "3WmsoHKfbEUkn5t61f6YqsMGM4bd9P66v9QtRL6WuYkTHvwAoyBykWWoKN9YPnDodKVpLgbftYTbHB65zsJ4AWxB",
  "key42": "45nW1a8yxJKHJCYwMcK6LTWso89E6Bjg4qGyetXcbHuQN4ySTpBEUU2b7131Re4Yo5NCk5QAC2VuGF1ZqTirSf6G",
  "key43": "5v3qHzzGtzevJEiAexHw3DZeqx83Jrqqq4JmsjhW5pk2tkAoXkaTzBBfv32on5igp5AibfaqBo76J5gHi6rVahA7",
  "key44": "mQhXte1cmnW16uYBqo42786Wi5T7dfB9EAvxkYWoGgXC1ArqjgVKGvBJMWENubwpYzA54fWByTEeJiTFrAsgXQ7",
  "key45": "4gkedJq78VVpcxoAkD8SfW2UYdyxgfZgTgmnwKYeVFfuHD38vbtdhdCxQjjpc3qUeaQD6yTQFZcEuoVY3eGbytHm",
  "key46": "2FG3S3Fgi9URPQsHcRfLi5hqckRupGMUDmCcr85LKgRNC7V9pWrv6jyFSGtw4y5upGQRjygUktetYjN4gt7vszms",
  "key47": "591B8cx536NrqearponGWudochESLw2K3XHoLAWbusSEn9jK84a9upbmE5s4gayvpfz9mbSC8uca9J3VvXMTNVW8",
  "key48": "5jgMnhPpnoZvmTM1YdecKCLpihg3KwixBbPTzrsNjk2WVfhJRpgBqo2myPut1xAeQjAgo9io6Wz72Ty2Vekz3MFi"
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
