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
    "36e6dkhVg6ZSoR1QsTAcaTKWxBNXwTD435GHmvZdkFS2m9hFaUkkP5JpuqRTCsDddiPFe45Dm9WfnHREDN55vx1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VuzEjjQuS8JAi5gEF1YhURU8GvmA5SsZcuLG8ka6wAVwUdWJXuFBYUFc3NroavB4QW8YWpenPFWdFaQpStowSeF",
  "key1": "5EQiMm4xYm71vQng2kHWkMutaJMh7JGS3gGkee3GMhmvW7D4WeqA3DCyvRRD3Kg6RVQuM3FFUzGGt8WbTB1ffXcA",
  "key2": "3wh2Jj1RwxbGYXnB3TvJLKJi6ufD8PooW7j6hMJ7r75x1jyTu2x55wfJ3RgMnRaKbW3WQXCixAi8skMZdtF6bAjW",
  "key3": "2Gs5mZ9MWPrf59TPZsJykMvG6vA7dMdMB4s7N2z1LMDm9y8houjxvxJNftYeo3YLU5LVycDk8Sa9GCocEco3d1AL",
  "key4": "4Ta6oQ7Hzna9AR2dUL7s3mQC1kky69yhXHZFzYJJEWekGAC9nh92MCEFeBwKVNgg4HsEWAczscReXWQoDFF1BtNs",
  "key5": "55qQza5GXq8937hPTvrg32W8oVEKwmgVqwPSbMwPSc3crZEkocxot5qeqxtFmZsLUncgEaLBVhPsho2XG3wAijM8",
  "key6": "3JzntcMbEKkKbcdw1f9wSUswMWRUBsjZ4MrrWvim24Qfg1BD9LcUeNs28RwaFAtmebFWU6o3u5YpyAcQmQdpQrbR",
  "key7": "2aizfJ4YtN6TDkPTLBQzc9YZrARHExgAgFP2ruBKKcoUunzZFuwdhZfHfedm2iZhMZy5xZpLQRfv2qZpdha7vpKr",
  "key8": "2NHfgjjzxq6R6wJ4oGsshAjUs3TW1TUcfzDbDUr7keAY5Urq4JLwu2KSmcPZFPUeUHc2ytdmgT7W6fUNBd13euhZ",
  "key9": "HprQL5Rbh49cBVxtAYNEDPVgBSmeXLSDaN652V1jjda1q1figJXvV5obNeTpQE7dQHdJDmNGxffcUwHV1qE8Wv4",
  "key10": "2SXRenRfu2euV8u5W3LwVR2Lj3NrAMywUQ2itK7an6iidDpMqL82qFwiWnXykDvQqvxm6ZhPPCkNPydEEUJrzbJS",
  "key11": "GWRpXQ77sn3nSN123cDAtphmUTasSv3uLNPNjagCxZY2E3WDhuoWNXRyxQ5i4kpD5xxz12pdauJU3yGkwwacagV",
  "key12": "3dHww8rUzt5G8BBmmSXDtVfSKhnGzfyoPAdT7Ec8ZqD13jmxswFedPvkrFakb6NSpWgjpcNt6vPCVCcT6sNTRH2V",
  "key13": "4nF6k1gzQktBtWRUJWjPjK7Ytc9kiqFQYLheoCkaca7x4kdYvaTCUQjDAuQBEphMDtWypHCPoPNwdqyHCuPm8Jec",
  "key14": "5PKYYViS9QVJaGNGi5M5mjXbdb27fimxwEYFa3MmLenTCGNRFabN6oxoLJ26cPQ27ysup23EJpeACHgUUNEUkfLk",
  "key15": "3WHrhPMviDojprPDv7SAFCbJKXTWteLLQD3UPSG8rgVL6dYF5q8VmUysTi5AQrNQZkyYEBEQ1DxCwovmQ4udmnjf",
  "key16": "3DccVtyyiJYf1spxevyLGgpqTj2Mvtq9jBxo5ayj7aYHjetKgJzLbRZo1HAEGUK3u8xTWBJ72J6LtHvtGHT5MmMg",
  "key17": "2MuaVL4oqSzfBuinW9pibWBPP1aazoUBNHUVBSEUgZPsWurJyqMtnXqnYst6yHCTLyjg5S3yA6MgnW7nUf7P6aKX",
  "key18": "5gu1PZEDAyzprzU4vFthxxxBW64xLdreoe2UrCVQ9G28a3g9PdjEkMoJyQRTJAd8QsFdGuLCcooiPVW5TTLSoJqX",
  "key19": "2goAtVPKemGxSoWWBpe3aXCS4yhEoTgtPaQuPUN8USwfL19Wt9tNYj3BP8PoFxQemXdx13XKnEKw8jciN6fzF83J",
  "key20": "3VL8zwBw2x4Y9RUCNg73rDkZn7AgzLLX1A6oyCnskQkYgsrLdNF8pA2E96AL1484HNWL5HdNQWuy3ws2vopzYYEM",
  "key21": "3JGHR8GPFVZ1sLJKvS71q39vJp1sSY1nCWBNe7KQ85gpisCZbomJXWkdmCyP8DPE8LfoxsB3XdbRSrFFroYvUJs2",
  "key22": "3tLhvFHmaV3Q94839ZMQv9o9GfQtU5TBTiuwzSnGHaKc9vb2vGteKfT2kuR7VJdzt9azYSb8bJ8fNPSNzP1U6ps6",
  "key23": "47aVhF5UMXJ5raZqzrr5AD19qsDu9jw14MnAGnND8WN6BHQJnQNZrCmGjvJhKvgYj8axG9zuQzXh7XRoDBMjWDFm",
  "key24": "3oS1NWrjGhY8VBRJ99X4R2YMSvrnUWpo1RhrgKhBWnScS5bZDE2CKGv1Nd5uA72x6fqKSXUzEBDbCi35QUcc3r4R",
  "key25": "66tFhkn4Qacqi636cG5NBLJwxhUzgfx6HvBPPysAYpEif2Err1MiRTgfkYZDjYND8kucss3LZYxTzpRuMxroSCK8",
  "key26": "3QFkAwgtybuuy1YBRyEhNrYsWSjzznDpkMF8mvfuVPHhxQ561DhuT6UWPfM4NhWmXaWiqQUz1skZAUGJubXq8A16",
  "key27": "qZny119EEjR4MbBS8Sh1kerFbSigBmberX2hAJNdfsviTYHX9StZvk1p9bKKiUaa1ms94vZUSQ8WoStr1LpuGHE",
  "key28": "5VnQ8Uvm2vGxxUgxn4C7dnV73nyuoSuraSdiuF1orAy9vva9Ti9rYvtrmDLQYjv8yfXuVJWd1T4SQj5aU8VpoN3R",
  "key29": "52Mraguj5RP8GCKRjCHwkLWbUWkxZoPkwSWG8enWkRzoDQM6c2eZxu6u6F977Gd8WkxmhRixsJDEDnbULCKtvSGK",
  "key30": "122FSnizGStmqbFRuXDNHweQakwQwnm8gU5QWPAYcdVThcrSX7LJjjAaV3hLJbNjxJc3VMguVgWNNv9YVPF1SP84",
  "key31": "39uFeryrmyv35e7cZT4jnT2kRkv6nGNx3TXH3mESsnH2cpXUm6GHZpv2vKrheRx75W8AhfpaswdVsHGx2jPtnMy1",
  "key32": "22SxBurMY6ufARMDtBcaFGidK3Gj21vDrDr5FpXTw37Rn7t4DSyXgXXFt578jBD2xfye5TNF1ivN72o6Da1fXuap",
  "key33": "27HxvA9iXvW9JVXHFaSwfw4EV6DCVpmWnjXTyApeRdvEA9pjb9bqX3Xss7hnwJTdDwXVFUbDnQddRthtPWrK4Goj",
  "key34": "5LgCszDttJixTqxZktkCUrYD939L9Xu3ynQ6Tj6f12TabeAzJZ6h8EhNLhMkXjEtnhQj9F4ASNmXdNpxkGGM8f83",
  "key35": "5q2mNbsdqoBP8Ra41ddAoJCfsJGxNnc3frs7QH1GMnoBbafwAwaDTREoVZZR2ExFN5bzE1xDGMe2Hh1y2arF3Nmc",
  "key36": "4XSpwS6npMyYbiNUAeowyDmEobYN5K3a6CVJL8MTHF6jji2mUGU5B3L21iuhYzP6JwKkBpYRhy75AY32paCQ6pf4",
  "key37": "2AtBmXugiX7C9FxXhQpUhV4vqrFVRWmvhCQNRLwB1GtRt945QAc4423X8SwfJWycnjNLEtG92Y3FhKWTd6o6aZv",
  "key38": "sqThBj52vW2bD5LX2z38x2BBuBNQ3z4rZwH3E5bZmZfbuC55CQEEydGgroDoGGJgFZZqqzGKux28LJe3Rmx7H4q",
  "key39": "5Dq1sSRBhSJpptDjiVhVpWpKjYkziHCvcDw12mqwQNU4Q57kmxUVC1pqRDV75Z8jnGUKzv7Eg8WC76XhkThMxQgj",
  "key40": "46gesCxPSjAFpNruA3pK2gRqgYVk9g9HHqm3oddKQExkmNKuZjrUGyiBfzATWzGKHEEdnoEsQqhPRrwQ2B2irL1a",
  "key41": "AztJmri7S5L53Ceekd73hABpnM9uwczrBz3mSDMBcnxWDhg6WLgQfe6eXHsTM7wZw5k65VYPe5x9qMZT2qjUgJ6",
  "key42": "4bGmaScq8Hkogeag8FugF9XBVEeSiceK6A7T97gWcohMwNf5ir9cgZW18usN4n3YUQBi4iKudWi9EgqgBx4uxqwa",
  "key43": "4Vvnpf15UM9ta5RD7TE1fP5PSrgfor1ev69A184n2sqMq5W1bFQvK7SgHA4rYhtZKqe8scsfBYQXeegR79yFgfvH",
  "key44": "3hQ7Pe7ZgMbHGSY2L5SEKLDDuJMTC5Wg2TV8hpgaYV2mdKqgcY418czQM2LY8XnjeHFcRMT41KRb41JDNzGiYg6Y",
  "key45": "3wv8QLboPx2JE7tQpjpmyyT6pEjrosJvdNM7XQRyDK3gKLETqL5absNjXKSNf67nSz6pijWqfQ9LS57TNYJR2jPu",
  "key46": "5zh5sYKgypg2hZ5EzQR8SPQVaLgoR51AzStpmcydiSeRZ169ECDp2nsAXp11fGSNcXtXzc73LQhk4js1rMdSkmxR",
  "key47": "276DegtLZMNCh3DXk1zBXcXb1VL7gg2UD9objzfsxK2Fy9Y7pF59WRufKk4CqTh38Vdr9G6DVrjCnCZcaMBs1B4N",
  "key48": "VwRUweh6gqiv88wq9LRnMeDjy82ikjkPYDciy4ijJLQ2pFXucDRnry4ATbDK1q478WuekRnyifwHvcGvxcuWCCm",
  "key49": "2prWnknrRsPXr27L2rdTVeFMyJ456Sg4PqgcFaSSocb6PHiSw9NH4GErTmsfhEux2xt4tisbzef5aU3kv2kRRodH"
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
