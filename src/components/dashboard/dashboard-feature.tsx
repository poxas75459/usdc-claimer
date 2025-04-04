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
    "3VZkzrdPG9XiS5eswQMbhBxWPnK6T6YsY3Dzqj7e6ZCDZCZ8BmfTsrHb5F1dSEDgP1tMzeqUGXBpswDxk8PbGkzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EvyeHHZondvnya9ze2HNuAGFKuAFJFmp82SMPzWk6H8TmgNGJaY3vQTNTtLkqw3PJd9oZuAiXuw7r4LSA9vk43j",
  "key1": "gWtHw69pmCSjkhKoKJfrRrTX89VUaRPbw7Meez4YymrrR65Jr9vGLJqDCVp2MtxnKwgwJTXmRMZoUCSxQp4RpTU",
  "key2": "2oo1z47Q846XvrubqxMYNCCWVqwhDToYivpVUCRCmoCPPDYjUmakeDrDQcwV6bc6d8zB25BHeevEg9waEKnE5Gyy",
  "key3": "4fnoYMCNkugTmAFbuQUXgKgtUwWup8nxBD19eepZH4VPn2nRQ3xDd4U2qMiB8D7GtCMwiHEcmyX6hDxQiLsUVgWU",
  "key4": "4YBruZscy34YSw6fcV6HfXeamiZHpF7Sy8oYsPqh9jHwHYPDthM938pZxYUtgn3evfh5j7cGBS3etZsSuDGvXkG",
  "key5": "mFLWJRbGWAGMeGbtQemfLRAeo9VQGuD5oM53pG1d5asMq1UcjKsFtuRvFppyqKYAYPpAW9X2P1mxziVx59kAoSU",
  "key6": "2KUFZJHtGWcfrkNohM7Rbh5SoC9BdS5Ace8SJYQ9jsJQZBg78VpcvKBgskdioVp75ML1niTMdVS4C7vZNamiPAMa",
  "key7": "3PuyJdD2K4jL3eV5ciJ9UoeRzCJ8EUaXqR6cU7Manr9Pa2ya3u2cnou6UrMdmwxwx3XM1EUcVsnWaeFRqEXVNHFK",
  "key8": "NbiqQVFfhWTRNfWmNkn7S31kcXgeuTs6j1kPDkALAKH6Qpqu8PBFbaKcJh8jsLCF11E67YLn6bXQMq4NWhf1aAE",
  "key9": "5zEh1cx3FnpSCHMKW4JyhZK3TNeGXG2MDFesmfgWFEF94vN5w7nqkPr9EvifgnutSBigo1W5nMK5XQAdnpb1HNWu",
  "key10": "32yavbEbKNvWmDhjLgeXTMv8VCs4QjibPjUp8adLu61ruEHY8KFeA9F242xY9WWpZ6MB77rVMz6fjFMhtdFtPRau",
  "key11": "5cTvrRBXj2XJwRgtcjLnMA9tHU1uKtB11JpBA75dNHFq9k6xwrgapswyUA2CznrA2V7fB6KNqwArws3kCNughgVa",
  "key12": "5KwkEfTNajSwATHQgii5gqQbCVoe9EG8Ju3viqtjHUDPvMxqv7a2Eot9x6YUkDaWQcuJCx2mzs9oHQeG4GhGzHqW",
  "key13": "3TDYGqAcaBNuA1UkJwBe68mkpXeZdbrwYsBWerMaVU6JtSNjZyiUgnhT8rSP1TofbS59N77qgiSyx1v87s2J2dnw",
  "key14": "5niemVpYQ1NWnVAG5YBhccXx2r7svL1he2jg12yUMgXNJisPyxksypV6B9M7TX9NYGcFtfHQoMj3GjXAPCr1UzvD",
  "key15": "5PWninn94SMW6NbK5wYLa4PeVssz2516YUZtNPfw9bBtK3f3ishfd8xp43kELguLSdy4aThREsaE2y4fa4tmjg77",
  "key16": "2AfKtEk75R3CERg68Hke3WoaJm92DZcT9Ax94zhKGMyMHo9vXQDNuBFgA3GwKZ4WJqT1eg3pRPJKgKGJWMp5bo9v",
  "key17": "2ncY49avav6gX3UvAWxxrTpJWd2bTauzXv9E4fizSfbPVZ1rBaHBoHttt6fHT8Z7qvJiwg49wAC5yHBsjQZtj8ro",
  "key18": "2adjiatpzwyts4CDbNMcwpJxyu6e2aW76hokXC9eAMLAVXXAceg8fU17MxTyc35RnXqhQSpampotD8Dgufqy7kQK",
  "key19": "56e5SMyo5Ytm3ruBdR4VJ5uQ9Gt6TShhrvm7DAER8imf3PU8giLL8xyU2K1FDA3Q2XcydMmXWgVpWLRXDeUegeyG",
  "key20": "5xDo4sESxmcypPsTxWvgsVBXy4xsWHFThHu4j6XcjmYNBS5JHbLHXRMytPZE34be5XhuYQzoBbj3zN9dUGmZmwiz",
  "key21": "3kgiwCmk3AbsLR5Wq2ry2B5BqYi9rUNory6maPBJDu545yeSQV9wH7V7n9iH3YctTHPXRgZjpNqXRrsUrpCjvMyb",
  "key22": "yTKfVwhEfXNpueDXVPM8N3n7au1DMQk4pwboJA2iW2QomBCePKB3qyLtAbxUJG6Uv7ucPZj8S443Rpv6WACmZme",
  "key23": "45fx4stC3bLJBLLwoQuCTfyTtunY7iL7MkLxGA5jKcpHDhDJHzfwVc1K5za1T1R6rpYPrThHNSorxHvSwsjxgaHQ",
  "key24": "4FLiUB6qpkWk6qY72L2KNvDJpHbMtNDVtZUfxQK65RRSD1SYdPjf8HP6H71ShyRff9BdtAAhoZcnxi8eBt8WwYuV",
  "key25": "5KtcEwhkRQd5ChQehhiRBZtq7pnqpqF6iTxiR4Db254KiL9GJ53SNqyiHHVrf1MMNXe8iFAkeBmTpzZn1tMnAq2u",
  "key26": "29mt5qNVeNzZ9Habh1oyemtyiQntFHQpzNxvAzUxK89u4zPkHfVVqcFax9MGrSsU16nxP83iCwK6Heg65HzGS1ek",
  "key27": "ikihe4vBmv56nR1SFKjn9nMZdk4wWK8rttfxf6rBcSmdMWMTijM34AiTTAFZfNypj2mWkf7aa9qybESTBDB5vcT",
  "key28": "58FSBhZu7bVShrn7vsz4bTm9YyfHYL8cdt9jFKMvgYGGAdUKmuG2RRdNghit3z52o88aV5q4CPoxWBZWxd3d6fSz",
  "key29": "t2eMVSmnt2e6fShzSU7da9SAP1q1K9gbT8SeL8sEL9yDNLyyrNafCsQi3DjWRrgRMXGdigJfpzfqSvn2iBhYAU9",
  "key30": "Z8Evjtb55oGzY2r6rYCgoXREMcasYWX7UD3YCZbfggpKpdSeS1d8Gp48jwv485KiapBv9gt4BhCk8G69AgnFkoY",
  "key31": "K8GwVfQ27kgwt56rhfJeyUouiU4tV2VpEENgYHBgbni56mksk31Z1tNpvpf7MWq8wVB3dPM91WZPHCkYwtZZPKT",
  "key32": "3JcmKFqQPMZDnytAnBeQ88wjpKTnzsHUpj9JD3pQqUTzX68tC8pyGku7ubrpe9bdqCMVumeJ8CAimoRWWwWXLZm1",
  "key33": "5VevCEzpLQ1bPZjXWszKBd6c7PTy3W26eYkredW5962dsgkYpaDaovLH2uLPmmyqDcdhoEs9qz3SoZtrMqWgyRbD",
  "key34": "49GZThyKgcoYdNZduPWdxyms8mTGj3jnp6kfcSTW5K1PERym6o5uZooEeBSgkfsAD2WKBh7EufwNfPUUaPYCFs8s",
  "key35": "pH2LE89PdCLqms3fGCo8AagGnav2Uymp4JYyqosp82ep2Ye4V7JUWdxwYV76J5sF7ojxhFhybapqqMWoaHJDdEg",
  "key36": "2k17tmJweCKyrUXidaWrChhV6cGtp52obKTV4BmUksJ23dZJW3Hm2rjoay6moEgJFSVohyesdKNGaZat51yFLBKp",
  "key37": "2qksuKf3vSabvkEF5LAFxPq5QBvxtQzG4mTHftYTgEt8ReKV6LX4YpRXbrPT3KtPhisUJSqYQJoHF7BScp1BrT4n",
  "key38": "4QEGKyQgJdyPMc1Qw77j5Mmtuzg5Dr1NpiQnktWsQyLPKfqMrz1mBroXVGvXg6Y9Br9boce9sM8B79Ye8cQKjyTJ",
  "key39": "2ixDGBdzDkBvuKbsGvUS5yovFCaBzYJnTSSmcNS6bqyeDYN3JWYstEMJtHzuoLzpWVTpBetvEK951i8WHhETLkcm",
  "key40": "suAAEMtGUZRG9JHPG1VP8zNDWsFBDz4czoG4F2P51nHqvECeoZEFLRkoqAdSuYo8kgaJFvxq7cSj44SUUqePxV1",
  "key41": "3Puwm2ta5bQgZXtHSfb6SfAJ1o3kU7axJdfkeg3gfMnoXzZjwwnCk6ropjhg8a9nuvDTPv2dqKLLjwsW8vfi3W7q",
  "key42": "R47QGFJ9v4KycA43gG22A7ohv7Tkra8iWKdrXrusLerWRMctkXjK6zfHoPdrYo5nyei1LAtUDkJhZrgr9GN9yEJ",
  "key43": "37u9b9AZk9ZsG9q6rqcMr8dqXE6znt1ceHZ3AQhmS7Y96b5Ro1zTXztPZsABHcLDqjQDPMP2UVAwZBAM5DrVbsyD",
  "key44": "34rfHZgGoj6L2xUeShFahpTQRskb71Uyogt9GRNBWV2yUfU4WQFsHns3rqoDNAJrZ884UoY2Ar35g4UZPmtzRLro",
  "key45": "3QLe78AzQQh6RWNT2QpLYG9TBqjsvDTQ1xQKjPk3pM3mpPHiu1CeADgr6G8nMenVWBT7h8h4pMX8AidKGssGmK3G"
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
