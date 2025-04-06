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
    "4m9xpyF1QLGQD9mFjcvNxN1aTh7WHHYi8kaJciDqTpLxWroQBySpSK7Fm9frKMsTZQmWnxgrWojCbMZJoc82RyPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61iE6Q5Z8vgk6TTaPxuGEiTDKH9sHQaRpxNLBdW3bpPMzuZh22Znc26s4j6bkHcJhJ6Lvih4g9iXgEYdLn6WkWvc",
  "key1": "5daaT8x1GEoBLVYXyn6WYq1sdRFTjMHtLHp6Ydo8kThuhigUYVTBwEYVMD9tvBoZQwDEcRGqeKeXzU7eRGyRohCF",
  "key2": "436fuXCWssM4cA71Tie4CuShHh8gWX4yCvvNHyosMj4vR6fdGeApbag2UDBo9oGjYKgMtjMpMu1FPpfw3Yi5BrgD",
  "key3": "59b5uBLerJ3deLDHXVs3TxqCdfJUYLLN91YJoM1XmCNNdZXcetMfqZ23axAwkcFMqyvogvBSL9m8Dobiz6so1MJu",
  "key4": "3feneRKjkQtj72ujWUBPw1FdGAEs9NtaPBxz6d6Ue8Sww2tSjYyXTtpPB8R2xJbMeXzZjMpfqckjLgYouyDX3wLe",
  "key5": "45KMKTHroEAonxibG7D4Egqd5y6di5VU2y8XSw8pjJbMuGZgBiuBrJhVoUU4MndkysdHr98L4YzGJ9Shf2HEakiy",
  "key6": "2t2YihzvHsm3z4JfJZk2EDjhzUfJA17yoj5xPLn9Ncdua6m5sFsXpKnz8LigvUnzF2B3778yv7u1YfShPWCS5phu",
  "key7": "2Cp36pFNLRbpsYpxkJureryHiFmUv7mzkPFQjCNho4U7jBouiM4rEhbYfERKGjZrhivStn7WqYdQHmDqG4SRkzxZ",
  "key8": "3FtokYToh6jN6m3AQ7QevtZLR6Utm2tfS8qPfgkBxZbZSZZFVeNLDN4evjGvPpiySrFvjvgN6NftVENXt87YYFvT",
  "key9": "66v9sxNnDiQixEgTcF5G9xLrtwNqoh6cQvDP7NGXm5HsB2gR85K2kP9KA98LxsVQdFUA6YAt4acp4DsGgPU9vQKt",
  "key10": "2AuKjzpa8S4ikiLYNWE78rh3JTL8HxDcjZVd8s1fTs3vk4z1xU3Ga9sRDhAiZEZf5kEURwVeaiSQxWqyjxasA87G",
  "key11": "58cZ2F538aZxCU5Ry2ELvauZGg9bTY3zREU5Qh56NeuL9VKwKRVZvuHJGoMQowT2Z8BHXqUsTkfdeWKmaHSVxuWT",
  "key12": "2rRPKBKNLGUtjLZvoU9PqZ6Kofc6cWCjCd6v6jNqsLj2MgdvZ5mXHq1T8JEwyrVpXgPUB3HBSV2WLUSpa8DHdKee",
  "key13": "4LPJTMmSJLib9ZfvD4624qxsu4zVMgfiW9BaZ88BRP4bvRGjHCUX5C2J6mJCrYav3rTCw7jYrrpGSkMF5aDXwCc",
  "key14": "LpRnkJ8RYpRwbbqpqCxXGqTD8gYQ9WFScpY5FhxgGuw5jgvE5dABL3kwrrrFjX7DAjWCd3Ks8VWNHQxrKHhNjsY",
  "key15": "JRuYVEnB8bPPRTbymztumJm1J6TxP2AgtrnKdUZCXDy2FULik8DuLZw2kpCSv5BT2SedsEje4ZjvPHSPYPH53EW",
  "key16": "3tZXZH2PRcwXbM3fA2sXXT6UXjzMi5UmEbGvdcdbWWomucBS6nNVHF9okcRzNYkxLvgDK3BgXo1d9LRaFksjrafD",
  "key17": "4QJUoQRxbDpbTtoukWniTTJbrfL96niZ56eJ3VNiEFeQXX8Wa88wiptFsxMW7eHZM6AXiypQvPk1rz6NKUZCmXWF",
  "key18": "4iM6mHmTSmtjSZrFTik8QM7DtptvhYqmwEJuKHqgicouixpU1o1QNchomQ7mC1b7Q9swktXAp6cbAdYHBorP9ths",
  "key19": "v9pKhdujxsMTfx4dUjHfXRbkrdYA1aYhS6DBTDQbMzfh99frxvcSrupDQJjhLaGgThsoWWyTUyN65GCF5cttg1w",
  "key20": "24AAhMFkZuHcrEBabiFzgVty5Z6MMdszgnejntaX1UnWRQ1UXhoVg4MLTNXeL8XRsi6du6AVV48y8KAfe3YXvcuQ",
  "key21": "2H6DjFtr2v97LqNFigUswzHe95i3BDQdCQZirqYRcsb1nPNTAhN3ZGZp4eYUVVhmcx8jt7RLyJ6FgGUxGChiKdje",
  "key22": "15D16pNEq3LfDjkqqEcdUnLQbB6YqXGojrG9LWuSUsmNjbWeHev2dTLgyYcHjpHbsHEspDcxBVMxdqNoiKR93DK",
  "key23": "3sHukCNtMtjcWWUY2ffzodzhd9U8X7y3ZN4JJvMksXkgHZX6DZhxatN5ij4tTvLkTnAwvNKEf65oLYaSUsPyTsye",
  "key24": "2iNP9Jaf6nHYUFiztz46Bm5khCSqsjvTpwmYkb8PP2GJJBk1aY6kF5Ui6cNQcAyetGuLTBVkECyiENxUeyPJ9bVo",
  "key25": "2DURKGQ2LUqs6MQh4cJmkQKrC6RPF6Z155vvrU4JzB9qDQiFGckGJJR41jsJDkDuCD3hP8XsgoUCSMs3yM9S2SUS",
  "key26": "2aLzKewUre7UgGWGoNGr17xYwJHFkqXYoeXPT1wBY2CtYWySMnpRk8qCC2BhnnotLpKot8AQVrHdDvQwiMALyxKB",
  "key27": "3xAkGoQhCMh3BZn9pUxcQt22bDT9evxwUuyxD9JNCXhe98fS4aFcpMqkfmaCXD6yTakaC9QQpvjVgxaqK85NMnXd",
  "key28": "3o6cGNxq4qMUN1X2L2wv9zByg3N6tsiPTbjPxSWhk6c8Tb7RjcUkLf88hdyPqa3DaMhf6BPTP8PM1pcxLVHd8nFM",
  "key29": "5p3Abm3VhVESLdgoYN89b34M8jnWsxDKk5WsUHo7sqcmPXgd1UoCFnLEG8XD87XfMQDtkmH2UA7YToD8ksRDih6Y",
  "key30": "3XU3nb2pp5AvYCdUMKcgUd9nuf3PsgAfmRvEZXWm4jsbQLWM1FPQtXvbRtaGCKmDFUqYwftFYM1XJy7Hj84FHjCc",
  "key31": "5JCLNysHuaSzFJNf5wYyoHRQzuaKqWAip5hQfkB8oZTU1kGvkG7qKz1ZHTzMqQmskVPERWxdUs3G9BPW7TTyxuPe",
  "key32": "5ESNUmu2J1ay6xZMepNSFPiRhnsPfxCmBJFVPv5k4srXY6vwwoJQnE1oW5f4BiLn6JvUQ6BagbHNKH3wuHTtCkkR",
  "key33": "3JFmoQdsxCA9p8cfL4nwRRa2KR2BRSXqGmu2Es9vNspmGW3fUwpN42rWo1SpVZb46cyK1XEuXGcG2yLRweBVtmyT",
  "key34": "8MsuMxvsGna4LfKZwUwrkEkKar3VoPWM9FMypEH1XzjDo8bh7qWvUyk8dngAQ4e1dciR8s1eP72ANN96h9zZK8n",
  "key35": "3dYYCtHWQb2m2KXk9hQBHt9V5reULASyB2JQMaS5aCyue8JUwWfFFGHhRHUExBQbt2yoZ1Ea6APBwrFxkSE1fv3X",
  "key36": "2c3RUUmt7X7gcHaGCWVttJaebmCYFQMutgQikmZcKyNFu6Nnuwm1kK7qGKxs6zKHmTyyHd4e6n4fdezf4ST5GW2p"
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
