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
    "3AiLUHFV9Dbet6T6suueL3zH7JjezhqkXgutvbdrEa2WmgD2gwq3SqsTikEweT8wKSezZS7ku9zQtMeYNQE4D5Sb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NHUCHb5oUPXZ2hFfyW2SfsmTiSZwqV7g5koA2k3Qj4KqoJLEMA949NttJqcaRoZcNWkMy3Qh5dkQLvp6k4FPgAp",
  "key1": "9nzJ1tATBKarrC8RHqRN8AKko5JUT8wjBprybhfc8rC31hdMcMNBepx1z1Cc8HjuwzAMkedW6fCiUMWHwDMuEvv",
  "key2": "3RHx1ytoNRebetHXCHLw7xm23iVLtPYrycVMji6ShXzewhssKu8Tyr6L3hvfjc4ZjY4yP1NV3JAkMaY3GzSWsHby",
  "key3": "xzy5xejH5oY97gApVWE5nUHpgH4ys1NZCcdBPskcxbEHj5v7CNjbQ6w3ni2HRWzoyRht5YZ5iGHb4NHkcke7PoC",
  "key4": "5DRHxxaEK37eVHB9i28jkGtTM3kEfnDveHrEXDDKT6CK3ELJW346W7jybh5eqLLHKaYeS2WiNP7rhsSbKn5ZkSGN",
  "key5": "5UewXFivN8akM3h7wCi2rdu9wLNjA7UDSeBjfubFiJTaRTCzoyBUaAnd6VgAHyFPJGcJYCsKosMcRYTeG5m5ZXbm",
  "key6": "5W3ozaba2a4jNhtkYFGrnDWh4m5yG7JzK1RymtWrqXvRSwp9LwvPAUyarbMorc4s5zJFan8BK8ie38AS8eCuwEzs",
  "key7": "5AhPQd4LWT7sWjxSTWSrfq1yfoBYQigK6cUPptCYybZk8DbHh3BbhLzQzkRYdV2Ji5EtM7kuUDkkDyoyJ6KcF9L1",
  "key8": "5RxA9eZijaYCfwbM4LN3JoaAJtV3FnKsuAUsAdgSuQ6m1t4xFaCtnmge5jsYkGyMArgXUz46TJAVsi5CuTCitNZp",
  "key9": "GU7vQCS6GaNMmkHisEojBieh3jGMXDdYFEi5DsHPJEM1XCBbiuqgJ66ouAE7atT3JmKYo3WKrie9kmNoQxJoCP8",
  "key10": "WTWojZfqJ2VAcetwCksfCcAcUwmz3Mb8godqhpDq2MxBYotzdXTZvNpJqh74WYXweJXjJChmKq7pYdcCytqduSP",
  "key11": "i4iGjzDBMs36zG6smPXy5qwsWRLNybvAjFfkQe2ETv3KvvzAuqk9cM2TsCDYMAn38rG2U7j226223wZh5q28xvi",
  "key12": "4MaKLiFwCXhAXfapepbLjCf3aV34T5bTXWfVozALyxwatmJWv984HzJT6gHX5GqHiaLQiauRAsgvCu8CoPDWXFAa",
  "key13": "jYQATXZzRzqta4ggMf1tTpwovw72gdVTxwZX1UEx8ZVGpw9nRZq3PSuxYZkEKrvB9wv73VboFm9g7fXLjSXcQ6d",
  "key14": "iqv699iUcgyx8CC17f4uVPjBJXkyaqhNeZUBMEXf9JBVeeBBynVeF5ivPBtqnWQPi2Y3SwkDJmvACNaZAaqpiaK",
  "key15": "4pTyZzewqyjZg3o86opEL6Y8SXJYe5eT27RgXc9GDCAkUabR9QLcnYeCGv4ihHTQs3iNfoMWHnYVhKJuDsLLnSWP",
  "key16": "22yedssyY4b6fd1trNASPSmCqpfNvnLeDdngxjGYbYTaBUCfghSJps7PVwTvqrsS6Z44F7sDacZax97zgaxyHgab",
  "key17": "1HgoNE91RWULxuUKaZnvZMtoZqNtUcucorAmb5STwAjN5GKmvjrvHFFHCwsa78ZvrnZXdZYAsrtpr69pswpHxpU",
  "key18": "4ZadGgzTVP59ZESU3A1d9KjGH4T6C4zfHP9xdXLTSpHirWJJwMHXXtjq98EcARxm38pPwsV1Dja71rwXSZumy2HC",
  "key19": "2AHrgM9GvkRWYJECdBwngfLWwLsG6REektUZgHiRH2VtjL51dGPmNQKECd1hfrc5a1DLReCrFx5cE3wprxsTF1g3",
  "key20": "4qdK3594oiJdKUQgj5WNxyiXtvkZLobzvTZmA4kDr95tK7djQQfTEW3jE7WTCLhosszveRWezMkQsnSkEWscUhCm",
  "key21": "549md6mXRzEWwJwzLiijGm4sCitf2xKUrViMdwAcLgKsa6HW1RrLVtpJAPPYwdRBsBYZ11saQQGYqq2onLXSE3gr",
  "key22": "2fAuMF8NvSwU2JqRFVz87dWionmzGZvjHot6JLNrKYAk8t757t78vx1E9skD2jzTVS5SbQ9GpUFw8cxUCfoZ53SF",
  "key23": "XzEwieuh4GBm5R4eV6gRxeKXuuq4K72hTNuikxvdikgHskkMLySeEGyk8LScjqYYavHz9WHfLwoz2oSCrGLNVxy",
  "key24": "5ZuNWXEekHHBrzkgpshTzfAMterFd9MVvjVyFrsuP8wpdpbhYGogFspE4X4ZgsvnXR5a2qVSLHFJJY9nJN9xV6cj",
  "key25": "4owyWsjayP4Yccd82YLRBxZEdUSPbPKfevWzR15uze4r6EvSQ1bj5zGDwY5RSUiZP8YnzkhpxrHzrNVGgpC5A8jM",
  "key26": "3YbK2kRbrRgfLMVSChKiw5gFejHPsTUXtnLGfP7AwNKAr87cvwG3XrA887RNnMDN4kbSxXM8CpGDtBp4mNSxJuB7",
  "key27": "ifaUPmuFbJyDf85zWwrWSEUFQF5Y4A95iRemaYtQzLKtK8HFyDhzYr6P39S3g4kF5FWdahpnrtV9rG8d4Ecj2bo",
  "key28": "3SqcvP3DscpfLbJmdjZgWwxDE7KZMfifrtv6AihGGdKf6sXmLos68KbeK8bjgnACLsNJuj4grPV5kSPhsQPTX5JS",
  "key29": "jbraBua5gAeVzUypBjBMXSQh9R2HtQenSCNw1JUcVWbQfmRzHXHs4RMr5veAGB8Q1be7829ZZ8Mjm3YsLmhY8E9",
  "key30": "41rDf5hYBtyLjVNamuGpRKR9z7SKtFyktiskGvoWkUAThNAw62BrfyEmK7vxmNCkGgmpp99iQevp8JcGCzfG7vzf",
  "key31": "2wiBVC6ePuAMs3WtNGotCFEHEeAezvHGdDmyfXn5r5sh1PdpcWnpzE6TxWYdBPuAnfZ9FwxtZJF6RTaPdQRByjJY",
  "key32": "5NFFxSV8JeEHLzwYxK3PtGeVdF3mDgw134FD94hVbHWcaXEv8W4wBPFU6jvdNzBb5TJV6oGje6GFLYjVhAKB45iz",
  "key33": "4XMCGUD7EUj5HHJckEVYEZG5TVrDMnKTZurJZYTBspCNwX7MrXa2MUEj2LwBKrszMczBG5YaUSDxYCPMi8cFpkjW",
  "key34": "65MyKUL3XJeU53Ak4MxP1RNC7vsFMwvVSBfHPtu6fy6aum2Xoj6jV5jSbS5YtGJDWdffAH2rZPfmJ3MY2YsamZRo",
  "key35": "4S5WHX1ZpwbQDbdMV1V7WuCytqjGzFp8RdMrUD4sVoi3bjDk7U97QQFmP7p3BR5CBmRXb29finrfZ4ro1gAZDNEs",
  "key36": "FVFjYVbWMVjudvw9woU9Sx9ADDToevQzvEEkzAUNWyGXErf1UyBCqkpfnu8inwuLA5cYwrcwe6VQvYszZjuVgdP",
  "key37": "3TGs7cAR72XkLsNzoCWqZiZukCX9Jw6uHCkPCeLjPZ6RqhgZr9u7ZPvhUsJjeJ61emC2XeAzYLVf4hEr9Y69CFJZ",
  "key38": "XPeh3ghoXZVnFNLYKiPmkqXfoW1o7gLjTtrpQBGA1Mi6NPSga8PLtTZEtvR8re4hjtuUUdXXJvHhwyT12SQa2Jf",
  "key39": "5JiKkg4Vnmw38o5FSh447pAhg3Nvy7i7CjVAzrYf714bVNPRmUBaBwKgMCtZv57yQYU4kqWhB84Auszu16kTcbDT",
  "key40": "3xpnEAUvswMqYSE65tTyq7so2Cn7D17MEfJyR3v7s4SwKfcrwuEKT68L9L2kMVRByfpXSA5d3SuKA2mStS5H3FLB",
  "key41": "5pLZNPFWcKqnzBAbgKkTTxN6Cn8YDHxPpUrejYgMCsU8pFVRi7kfQTnZcyArVSas9kSCgtboUYg8MsfVx29gs4QX",
  "key42": "2pY4cv5sAddHv44wg1Q8mpius4BDzF9aDN3PYLGhV9CLJu6Po2cSMBPwa4UcJR6jQLA4KWYACsq8Kyr1atV7kgbb"
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
