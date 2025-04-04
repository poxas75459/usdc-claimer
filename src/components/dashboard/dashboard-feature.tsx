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
    "3LNNSTV3qXaSMnzcdzCThieuHLA7GzYycnkcokkoyF9hg5SawpfKDGq7FByHdgf3TknRNfwG65aiDXYbPv3VriGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eArAnscUYG7oevY4hnGN7LVpPK9mdUCLndqbuWdK1kExdxFCWddpbzqTugKL9YYHYxvE4E3LCNsvSGrrN8upeGL",
  "key1": "57BNWEEzSspup7fuiBvQ7u6nHYf6aTfm2ULr5jJfzf8LZTHZKyFvDLSUURB6ojex6C6f2cqWXc9qVyTeRB9eJU1b",
  "key2": "2nSsvJJWxQxKhcB6UPqpDRED3vWZyDUKrXXYX6PGQZ6Wh145KwGC1BcwuJw4NS6cBDi21vFbmPZKZGuA6GBsHLEt",
  "key3": "4PrSkWrSNFACmW1Qatpk649yzeHgzg2HxU7b9yADLPEdYbpd4hn7U8zwSzWwBP9haq5Jx8mK45aR5uP6PTn2vg3a",
  "key4": "4BoPGULhVSpVuaKh6CipcRz5UQKhqBtQrtM4Z1xbwRJaUyRgKCzQAneaXZCBCXRekG97puRhKTr8QkDSkWo3XNRa",
  "key5": "eM9xbGvcLEqy6EFt3YjhKVxqLDSffzM1kvs7UJjp6K3eM6JmjrQrDLou6aGwD2xT5CzN3mcxUNXetYMFcJU5uMn",
  "key6": "AMX8AXZPR1X2VhtrVXeMw2Mft8drEx4CKPK6VKYYQwzudD8rLxMVAJsc7wgdC6wEoZufG3YviqHVxnevL9hnMYr",
  "key7": "5uhqHZ1y5cfJo9cBtt82bDH1FHCWVGG7q7aoAuyMvV5FgtPBGKM3oABcmZK3URPDSvPdd483bsRBdwYeoeq6XcCq",
  "key8": "4jN8JTG2wD7wgwvwEFehtU391UcGZzCuKmchNvSRe2FU3nEaRCV8rov1TGkqWgMixMeEguH2NKMcqpMf4kLRccok",
  "key9": "2SoGrUS8vL6xz7sdJxq5vhJwtiPe5fvjiAQhAfQRQkbF4kZFWMiX9D4VdsYkPCEoPWXhcaKMG8XVSdH5zTZqhgFW",
  "key10": "41wJ1bMRHHZ94Sz4D6EsmRzVQW2Gyjqaxt8E7KEERCdWfsgfn3xgoLnHGQXCPZxMcVswYCnDwbZr4vuzdwbuod8D",
  "key11": "4RQoUrxyTUeSKfdmeWP499YLb2oAbvGpAdV2cLEku1oQp1XvpVrgt7QY8mDY9iaKnzg5w98CDfNLtYmVBKq2VLxM",
  "key12": "5wkvRu7jLJHCrS32CGe9vbX7Zi2FykgNEtY8Wsq6BF3LAs2GQL26GYNwmqmkiSrfxBpMSrNgJQMS178dsT2kcSee",
  "key13": "Toy48w8EyFKzyCGD1T8EhjKuhAcdw8RjmJryfSLeXPeYw7AU7w5Yo5fTeVTe8DRns9oT1pU1SBLoLQr9j8A1q5K",
  "key14": "WtyrAC99VhrUrEiSnS6SYvo1N46TJpPdX9MNvnwzfxtFTgEr3efuadKTt87TPYQNx2EvMMuHdz9VxTNEBpUgdH8",
  "key15": "2KMAKB5sd8LpSvqS46vNmcyHbmpzzzshNCTucb93dVQHoJLwwMzN4x1wgjxKfrxGAZugGNB7CPepcDLAgpcWLepr",
  "key16": "4ebpk1nVrW93Vsc3kh7ZpTpvgR2UXFPftK44BDVKiPH8j27DMcL1a2wUy7yxgLrBK1J1g8nE8GxFFGGuFTAcNVPY",
  "key17": "3nsAP298w9ka2QeAPcpD2Ryfj6JZJMGqCGnDPJudQJchW5uf3ULvVzdpAVFUwuaxgdcLrtYqGmitv2An7i43mnM1",
  "key18": "rCHnvFwVAFiSZBtwFChQ2e7pFGmvY6qVDshjUkkhyLtEGkDjgqvvW3q4xMRnF6fMXEyeWcDtdjBtbcKd2bwn41R",
  "key19": "5mC5a8SMSXwDXzJTuBwHLSzUb8gaeCrsx9giZMkifdPKSgjBQUUezfoHWh8Q646j1AduXufV49wtCM8qwdVdTZ3Y",
  "key20": "5Jatbg7tnyA9xiXnh48HMG4C7wPaThG8G54vrEqNiZMGuoeiMP4aAK4Lx1MwJqWHyzHNK2iMf9NLmS4zA3QpCJhC",
  "key21": "5feq39wwaPDrxvM2aE2MJhnDEz7QucXa4UBtZ4AqSvsi1YN6EgfMt3QfjZ74TFdLAFKnucC6fa4R3rZX9HobWYBx",
  "key22": "5Gtrme6oh2pS1tvgjrMYoee5FzCanEnXCMVsLJgwQJdNSHqk6DfYjfnC9yuVQCiayTiSm6SyTS1fo8Qw2BLXf5VW",
  "key23": "5RVox45JkfRm9z7QMUDgwsUnbUJXkoSWPnLUYq1KjeXpuct3HNt8wv6yG6SPvbrufBmXbBFP1z3S6MnLZkNg3EdQ",
  "key24": "QK3FnPDnR39e78dExg8qLdCtrfkVdyRzwWYae79KGjgVPwpXzm5sLw9vbt1sUyZTKgjyuv5F1rwJC8cFVJjc3bJ",
  "key25": "2jbbzAKgBqb8SNC2AiFP7YcPFNHpW2dpSw8NTK2rzf5GBqbQyqNWfNQDDnKcyApofjFvg8KPsRZo43irdrhzW2Tv",
  "key26": "2FmBHKukMJ3mEi9M53Yt3va2ULZeiNTLPK85edwwbhkbPyLvrLq5Jb2L6a6r4QbTJzBUViMLPM33Q28MhFPT7jdW",
  "key27": "29pKDSHGkrHomp4A54q4F2z3cN1F7azd9oRnDbhZuLF7azcH2hwazZVfdeMqA4mGvdc79LVBmnPp9xBeZYM9gPfY",
  "key28": "46VKu3MREZKBjaFRNeG1heAi3YbPeYamonVt4HmuVxwoEd9sM4WKumqHP2kLJA5PTYBQtjwLN72xLF3wmra4rZMo",
  "key29": "4313uCGNNqm2xdBnMpwXSj3QUULKfixydj2QGNCwYAiAu6FmVNUAHDsCPEENiaBRd37FjitoKZG7DtXP2aWQVyda",
  "key30": "4Tqxw9pXRszjddZDbU9KUk7kYij7o7pXYYotP3xbwTU6LA9D4yehhv9pNKryjCNJS2qHWHkhSbkZBfMuanVgNfE7",
  "key31": "5kPMrvvFvtJ75UdFng7FtzLY8BRda4HJB933cPvwXEK4gkquR8X6H5U7a4DEMa3ST4YU1i6WgAjysciWeAchvbaV",
  "key32": "3Jj4KtQawi6s1Cebn8hUyYL8ACfPUg2Yvpq9Ca8hby6d5miuTsoh3uTkG2RqnpWHdggoRWcCUe7eoiYFMmK53rk3",
  "key33": "4XJHDq1BjTLEntCVeMR3rLmmWxathXAiXyQVEX2DtnyGKAzLHMoiaEpp4TsaapEaQUGoacn2477cWoBChcMVxQ1W",
  "key34": "29u5MzfqRSEkRkibsw3ayyommRGX5L7b3vcQNBDxL3k1m8vUDFL6HhtaMuRxz89PvfrZ9tk9WbYbRnsEPcmLhxzL",
  "key35": "4jTygB1YdqkvehBkUtFDJhH4rvpSXZT77dfhbRhSMb3Z8foTF4FraLVuy5CJ6GaeY7J6JMHzoz88UumV9cu7WQfm",
  "key36": "2JgkHvAV9cGL5N4aTaz33CcXfQ87Vc4LRgnVSJ2Z6U6pbCB5RBsoJA58nZbGoHBdLGrMtFcQV2rvtDqpeeZimsX8",
  "key37": "5KZoUjje6umbFi1m3vTRbXiG5FTkrgYJDwtBxnvvzuLwXJMH3VNxeoiUJn97ckvD5o8SrYwE4wPZ7TWmSjeP7rH",
  "key38": "2DtnwsQDLPHpE3eFCV5txRsfPXWvLTc6ccMkJSFHn7zVsoGNhzeZCxdVSFyTrJDGtUfhzU223n1cRvgrcrspc3J2",
  "key39": "4mai5iyXQN75grQ21FeCfYwq1mXTmeWPDeFkdWjyqJ92q7UfuehZ9UXeX8xdwB9mV4B74X7bbzVGn1xoBp7U1mKk",
  "key40": "4AzWR7N8UPhMRNBh7zaraGk9o6tAJX2kxZteRrVo24Y4dJjUNfv7Ya1k5XpKNL8J9RH7tyt3cXyq85bpp2Jrk1QR",
  "key41": "56cjnoK2hHsp3A46xEJoMNN4eJH7V8b1Fr6EWUjaMUZdPRggsLztojB5ZUtz2AjiecsD5qLvAxdEvtpp7LBHrvfm"
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
