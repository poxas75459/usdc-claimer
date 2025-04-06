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
    "4z1wU5aqqCpDbDGH4XT6Jr2j1MWsc7gjMiPih6RsfUHYZGQzYjDgpNjGhqxu8F4deMtAwjnWi7nVesuJx8tzd1Dr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q7Bn8YHSeR1NPtqS9ZHMhgZVmAY1G87eXNbi1ZN7AbVXqKzEuCG3hJnUzx5GMTy3u3yVoQ5HNqUSRZE1mUL1wju",
  "key1": "4MBEHm6UZyb1snK59DXVD7Agc1H7DSh5K1Tpp27rb9LYASCKQRFwcXAMeBbsi7MYLqL4dViRWcGNDeuipexLYboW",
  "key2": "4qhj4yC3HuDuTxiBa45rLWabadzNneKDjWa8tC36XuRraa7YVX3A4M8hHfHxj1iQhwVcTWSxrYNx8uQWLSruajJE",
  "key3": "3WW4TJaPEJwU6bCDFMtr2xtE6ctgrboktjH3JZTNJZz2AWBy3Yshws1KcZqBwTSRz9ZZoDSLD7E75s1ZRbrY9vgG",
  "key4": "5MgCm8jAKxXnGVtGyyFPHYeM2cGCy2ru8WCuzCEpDRk55jeMLmNrL3miKe7gQA7kWUm94ih97kPA6ZGMN1j3rpbK",
  "key5": "aDSiq7XSb1KRkaW9nbVaR5iEDQtrj3qk5cvXpCPn6AaVwbGuUYcDEmNEv2VaXpoJLm8eDN2udF86Z4TZ2FiSWzQ",
  "key6": "4wiAYtRCMbUuMUp8XFt38wds7gmuuEjTkNHGVAFLQY5taRfxJ6yApyDXM9ChjJU9TsF9vXa3h2hujn4kKuKC22PZ",
  "key7": "i4baqBptRirSYtCmLPvnYxyKYMAq1NtMb1Qh5yyDnYECV81XA2fFSvAZiyzrzjMVAkf2JuBxPMPg43Ew2xffhdw",
  "key8": "975wk6hkxYczRvNDgkHX6oF776tWDWHTz3fi86si6mVkHjhQrXZQTRHZN7wwFHuZUxA3TsVLSRC8xGr6ooapvki",
  "key9": "896zowGDTqDU9wRtDDPMWsnNSNzjX1RX1f91Rcj8k1ikS4isgqDgy8j1J1TKWtQxg76woj7whccwjrxfFaPCUpT",
  "key10": "2yEsfDA381tXwdEbtDTUTxFoD1Ck3VWBN3fJLHXypyQQvmREFtgCV7H3CF4g4MaoQ3qagvJZBtvgiSEBRRXc9GZf",
  "key11": "38ifhvM4Kb31VAyFgQ3iZs3suCXJJJczQwQnJ3jxwV4Ye3B1tWAPEG6UhPM38TARPscG8spmD9DxKAhYt9MKBYfJ",
  "key12": "5j2GHyxF8Vtb9hUZQJkXua4Ridbex82NnrUeF8uUxWofBGpKjKreTtsYQaERxtnYmCkvt5uoS3X4CwcPokCvP1uE",
  "key13": "4kmjxcJ1d15NM9q4LUkJLu7Xt8vgnmM4SYnfookeHykfZ5WXSRVtkNJ3rtgaoL1fAW7StojphMFx4rsB773nQVzS",
  "key14": "4URkhFeKciFwVDCMHvEixbbE1rfrsJPoGtTtvjp1bR6KAdj7mk6Y6s7X8NTtNmacQrAxnFQgcL2du2RkS5vk6mhF",
  "key15": "29yyrwokEuZfpSUpJd81hUNCRBk3a8tSJV9iSERVmoWGCYF5irc1Rf6a3p3rF7sQCFK2HnuHBafEhBD5vyoxDfFE",
  "key16": "5kL7jdCfA5pdqqzBsPMqcmucBzNrgmyBdvNm4q1fCeRyQiHFVDtDtaKjgVEUY2wQSsYqbRydMxY4VPrJNbn7sMLE",
  "key17": "2vL3TLX79soKpHA9roKybEpQxafYV3X35SiCH68hN58igRKQD1qXb3T3Pi9E4UVciQULQwPdv7P6eAA2F4HMbwnC",
  "key18": "5QygDwRyVvHMbnDxbvXG9jt3DLSPBAjr4qXRcwUoX1wBqgyrLx38baa6HvPPq2qJ6oiboe2CsfPx4xWnZJH7j1Vj",
  "key19": "4vDkGYDKUCWmNC2qjbTZHgD3AgjwTCBsDc8YDDoyuKzWx1VTQYiBDBy1XccszpYYJEjnEmBUkShCQ5Tpb4K8DgDG",
  "key20": "4R5Qzk9Y2Y5mkZTsvT8ge7qmBnJi6pirkFCgtrG9BiustujHRPMeuCcq16WQdi1MuSdzko3ahVrYXzEMxETLMWnP",
  "key21": "niw9SVgBe548QgBUgvNhaLs2HRjD157kMZrMMdCpivV9m5SMRWbXdVGhRX52kbTdgC57RTWyCjM5YBD6k16vBmR",
  "key22": "5ppQj5CdEK8ARdWmD7zpfxehMG2L9buT6Vm8M8w7U5pLyjoKqBY8t9RnPLwHVipf8gafeEwBnTEg9on7mt1Y8jhS",
  "key23": "4Q5wf4L8qsh9DTnYW4nMDjm5m5xjVauoZ1negLxZEUFGcq4QMdeRVfmtsWMUVnHeAcWjFxsbQsjQFfXE7QDPF7yR",
  "key24": "5cGvBAWi1v3JGRWG3PVvypc1P3cXPbekL6zReFipvRZ3bLyfstVQ9rmWk5CSpd2NT5SVSMc6aE3fnPLe1wzkWmUB",
  "key25": "GnJxroZAvEpRRV5ZCCYBm24KZr5m8h8bbBkzuhFF3Vxk9E27rQGxBzWeb76xqCMWmdRe58EHZEfrtz2iSgPSxgr",
  "key26": "5nQcUnpz3uKpFXtV3w3xe7srCxkG56oL3V1jWZabyd6KULUcQ8EzFmoasnJcXsFxUBQcQ1pEHykq8AyD2eqokwze",
  "key27": "fkxJn8Q6sCgjJoQJUkeqxM5HSxgCutG8wyuPPp1CcJeZ9nUAdeaVP87ip366ficKpWoRtzBUirK5GGdcEFAQ2EV",
  "key28": "4K5nHwo8LPGQzR2CMn2dEiCqqkAyK6apPqMupJXW69EoSL4dm1gZZT7S5zzPYwUhxPT3qbquyVa2L1ohC66G2HaV",
  "key29": "Cfbh1Y9GubBcbjdPsQJDVeDNVFw3J83gD97WC6fg5ePCUgR6eY38J2SwkuUvVNxjmHxpkkZcU9pGQzJFUFzvQ1X",
  "key30": "4FQtPXFZz8MMoqzfteiiRJcEo4r9XHwJQRHnwJ5w1WnDCafnEGWEDBL9UtFqWBw1A8sVtJHockR8tqSEEa86M7ZR",
  "key31": "3YoWqQuNgzWR2etSLk7XM3QhXxD3deaP1mEtuzxbw7Sz9cupDQU5ZGh7QVbbzJUSJwgDToRbVcWVqY9Lsn6TkgAP",
  "key32": "3G97vJYm6Thah2N85DeSAQbdhD46AtwzCZrTAhYRkkssuoVrGPAFfhB2wvkL8s8avoqL65pJU5gvKVdTzQjYWion",
  "key33": "4m518jfnxXGBk5eVhCZxFUtxygWhp1ujkSz9krdL7pMA5ixRUmL5KbGpP4XMBJiUmte1sMGnU8axmTHLH9wzk69L",
  "key34": "4EHM1F65eEqfu4odbRYtHajeJwKuA5CTFWW9Czy99x1yDUCHxyDiWb1n9ofvWkdszgxqTEvnTksKiyg5G5V6rRMt",
  "key35": "4oy4CFfvCAWx3JfQnovove6JeCmsLSGPzStRSvTymBxD4z1EwcHzdTYBratc5Yhk5P17YSGWcmPHLP9qfrmGQTKA",
  "key36": "2JL7MbYe6YtvyDmmvxWp9KFWT9nzgcLEqo2WHp1q6RMTebghpCmxyDbox1FJmeRSMLZL3uEbaQFVpMw8NMGDftcS",
  "key37": "4ctxriNQNuku95UEgDhv76BgxcyVi7Ze1wV4Jfo5CpF6y3wryB9muYZXzSGAuyDMAp52kqcPwvkGqz3jzneSytHu",
  "key38": "27YTTaMQ9rrfn3yEDQqgMhXkwvPb41D8AWQeocH27JXujzkqZKpfozuUpBjmUveuXyCsuJ9Rpf9xLbCqBug1ysti",
  "key39": "3SLHRMHTUKNmeZnGQpNSoWiWdSeLPcqPLZkHQBySKCVJX6qTwrWKDQtJJbMHtth1K3dgy4uot5oaJquxtHuZmUd9",
  "key40": "3MjJQ5JJksoCa77xaA26JaTXHqSr4dXM4ctfHxJYqHyK9R9vH2SxtvHukakYfd2EvLBuWko2jGshvGzgbpjt8Xje",
  "key41": "2basVB6RNAPERdWiovJnjhAnKaBcAJNTeqpPV35nfaM7pB9FLcBozZcjqCUMz71tjEgunthVmQ6snpPPtzUpntoy",
  "key42": "5LWJ3yr23HaS6mcybGsdxLUjDtjVyACHkmr5NhsiRkEpCmTk88spoARdTq2UJrzD3qYqTHbBhn1KgoVBJ4WCPrN6"
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
