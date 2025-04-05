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
    "yqztMQGUEbPPJqfTkQTnxxTmicbPb8aExvoaKBd4bZZmYhmQoyYCennqJxNmZUDvJCDiXB5hzhanPsWZqJtD79S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iLjEEYb3iAy3e8MkKfCE6YBwxYbMoYF5g8SSDpVmPXFpuzExMGzk7jxVJUqDHDVYpw2FuqtkvFCZRaNsVPNt7YE",
  "key1": "s1rv6xQQfuLybVcAb8h3ioc89rmpDxYzaiENmdE3QTTe4qsQ6tc1qXhHu62wGc6qHcVmG9R15HX6AiXUzJCxMSs",
  "key2": "4ByEjtUihRGSkMdGrKvux4fARE7DbMTPuyfeac1uzhg5HUkCsdpyvdKr73hcGX8XAxFzr6GioeQGSHdXnxdYHVsA",
  "key3": "3yD37R1AHvXyQ7a8LapMrjw5s6RmGuXGXgB9RuyhbhYY4YbDAqgdNxLkvw2E9tDoAD4uJZrQCueaPgEQuH8aYbeP",
  "key4": "fCxqycF2z4CxTyLKy6SDmq3SKnYnaHQmB3JaGRK3TrF9brAHVw57Xx5qJUNeMeMP6xuf4fEe5tCPEdByP8sgiUA",
  "key5": "3fxj2879ohgC8JfhrX1Kg1ju9yJxsVPosCk27qYVrzJUWGo46zKF2wiX4CVzKpKxkkZ2GBic7vQ2wLoKZJktuGkr",
  "key6": "hbD9FRVApfytW6w7Tz4nwCGf4ysNJoArAWxnMdzkbYXeQznudSsWFSkWmLT2th2H4JSJKMadPwXAy5g76ZMKAR3",
  "key7": "5boN7VcUiG6EwZ5hE5ro5xL1taq38rW9RBX2DnnAmV6bn1ucWkw3Aji34dpNW7jGM3wDmyZgsCmq5emJiNnLZnrS",
  "key8": "4bDAEcYeHLYRqD9yXzj1RwPByX1RrSdcjrAKdHHxUtGZihzxwotfmbp7ZhVXq9RCzzgrvMKsjtAytN7KQSRaEt1c",
  "key9": "4TumBf1MHwsvXNRrBNMvGhzeAQWfVQgAFzMNh1KjdrrwudkzsxGSoNremh9fdoi26HYi2UBsaVsAvYT5LojC2TEk",
  "key10": "4SDVDxPmYbJsB5PD9nY225ePTTwzYkYQs9sPLPohgz5S2SexgdnEpVQrj8nXG2ahhcTosQVTkERPb3SyvvmUiWLV",
  "key11": "3x8FCq2UvLEcz8RkT9dt5e3tNS1ixkyBzSFuvdmmCDRGvHW5f7oQZFZFqwbbEJieVAUB5WPvxpTV2yH5ncMiFjVj",
  "key12": "5R1Bt2iN1gZfigfLLu4yu24aDzTr2Vea9VSCBbAU5dHLjcMe6EUxaQUghsY3KSUTaCGyvMjPiQHtoB8gzseFGbdr",
  "key13": "2KTQnyTH5HyaCShq5YVT7ZEbfi8xQHWFVX6Yg9oHpCZNm9BXfXbvhxEW9Edi5aEXjtDE8g8e5LZztV2477em3e5e",
  "key14": "5yJ8f8BVvHG2XMDSdr1bsUxzzFmNE1EHTLp2d7gAZBEcTNNn9rFCPVMwh9g7NT49uc5xcPp2imDQA1rV4a86bhu4",
  "key15": "3fKxxRHZvbX9iTujLzMWvom9XxAQrihYg6dSo1GNmaskoWQB4wyhYhZdJniW3eVMq2K9uQrRhysRrR7YzzyteCFD",
  "key16": "JDeJ41C9WDSYaARoknvyqpxkmUf53kzqF3WcqofZenYVysGVGCzmfcxwZMekPEesuCyxrkgqCgndSbmZ8hNqNBE",
  "key17": "4C9hZhgCDn7bqZxyFyfjuFF4sPH3chMPpxAL27xtsWCCnJNrPemZN7cyJpsp8pkyQm5SYTNnCn6yyPH7XwW3DkDS",
  "key18": "2Rn2UbgphrcqAZbUQHiNtNnXTvSqxafFJRMLC4tqJbVZvPmoPtQTrMWeSpxkv2KX6fxZ3WCH9LSVMEkMbKonx3ut",
  "key19": "5YA5tSpRqTnLXGZDQMBrPgbsfDpzvbLU4Xkut8r9rTLkVFHM7avpRvnbE3uvrfmxNfxsWXUhT6ioJPpTHysnrZPu",
  "key20": "5TtE6D3RBxxxrytfzUNEVjtn3wypP6tpv6uZ8SKFJezJiji62gUeK8yEuPhkyhDsm8mGJGCk5fid6v7GpJiS9u7H",
  "key21": "3pKjT6rDkzRG3BkcNHjVZUumm7YmvUAeWy2NpiEraiT1TAbHbqvRRhBsW8UuZKb2V5htsN4BhPGYQiN7Lc7hJDDZ",
  "key22": "5oqDVG2LgFs7g6XLaDJ4ZmTSWrr9FmrKv62XUkVyFXquBgqGiHWLeR3fSwaR599PYrJquKHbyFJ5CvwkGUkBnzMY",
  "key23": "2B36sQg2PHE4wXa9KDoznUnb8YLSRXeEcxTJdgfnqnhwYfHto89DHb6JSjjohF7acYsNLpjoJQnRCGyN7t7guWT",
  "key24": "vf9tA65FSRc6sC6WX46F1YVKvjgRfFTviqfPvQeSN2fAnXEobSWTqtjwcXSt2kG1CWbfDYUvbh4pFVRPdAzBWV8",
  "key25": "29yGqz95ebMSb5m5yqQmbdGeAJXRy3ueJ6seH2pma4M2X31PgsJpoefoiqf3NZyuAeLf5uqpHVgJxpLVRhRtWw1j",
  "key26": "3ETr3ewLysLRU7wmUiwe65Kb2rSxpZYwKr5wHtWgATVCSjNVPAb8nGsMHYzosJUdDx1JErDh681HpxdLYWi9ReUT",
  "key27": "4wYNaxuU8ZKQqT39QEp32ChzEB13TG5vjpodNNwTJB5GK7UDHGxErwGLXZd1SwqtUaJUqdSUv8RKENoaVQEXkGnT",
  "key28": "3dQDLrzLvMjs9rfCTb2c8QxY2Q1fS9WVBoGpntEi7sHr4wX2kFRdEsoibNBPJn2G4v7eQHn53H7Fgq8dENoRcekA",
  "key29": "4iMandp4Mo8ZvBgUGdS7gUX3eSsvyZ2TLfT8yDrhbfqqvwgq4sbaovDHtHv6rALYdg6QujErhdH6QjiTFqMFNNJq",
  "key30": "3KRoDeB6Fe7jG33BwjDS6swUi6z3EWHzpDuqvpu69htD18i1WWNgsVpzrqpvhsk4YzbsF3eL4ZmqSfRNduzgJuHL",
  "key31": "2gbKtUbYGvJKtraZWpAS963cQyBwkeZbHbsGJxnYf6XC5rXGEnmHw8ghwbAT3m1bUjErbdUZd9FDVGie8n4ZpFxe",
  "key32": "2EhBzATaJ1CAfgu1AHS26HwFixeuGCf5p869g4Qx7xi4k4UXFJhL9p57Y4YQoboKY1JrjzLuUCNvGHigAcTsZm1f",
  "key33": "5KivJAZBy9Uu6ws6r2xBd261xeni3jsnc68Ro4J3hcHBcTCfNDWbUjg34EtcEru8fwZiCxvncrDn2cjTLtRbpdG1",
  "key34": "4qGXzjCGrXyUZUJfQq7BJ3UycbWhZJ9moPRTn4UDMR2W7FC3r4txF4GgyWfKTDkTaetGRsievowF5oZX8FVWZtqg",
  "key35": "3u9wso8tw91MgVUPoQQHfcVRjtDDE2SrP1TeqrQX3JsJH7MjGhuHqyCHVTJMngmaedWPYZiS8Cy5qx1ZNjC54ZS1",
  "key36": "3gJGXMgSBTx9ZgGcayshcuQ6dahZPT88EWzFnXqPJMd33qRU7s5NsMUUQwR9xWY25ngCWAKz9o6iBFQQA4NLGCJL",
  "key37": "UNWMfFTQEPV4WNx6Q6UNediMx28jNTVAcYXshV6HLqfiYRwXF4AwT7rc5XKYEkWBn7gvUAAHFbn85WPQ3YjJzFM",
  "key38": "42cRdgpSYwMsdx7frn17AVDLbddifN4LcBr5czTXKo69ok5MXKtN8Zwn9UpNfYMznXLvEogTEM4NnBQyfE2LKcLs",
  "key39": "5wRdmoPPjAK7muBXeeobtMFtxXwoxVKAM9tkZdcxknWvGoWzdtxh9YrzN27JED8TspV3XntJA7UKdBpVjaWj7bWu",
  "key40": "bapk6VM1pJaHncAfbqY7vbrLQLSnu5JxVp1mbu8XoKM43hDccZxm4aoDrjoZzNwHeTcFdNAPoanLTHMcvmaKXU4",
  "key41": "31CDvCY1Sa2z3DVfY4HkhBe71VaN1gWwqru19FQhzJt4ksRTQUhVApvoHeBzeA5Kt24drwYjWPQnhaNhzPxv5b7W",
  "key42": "2KNKucXWmVr1WBkcweAcFC9xSbD44AvQj2oVV9Vqxi7S3T2wdfw9T5kcHMDyX63HUReKShGCgV83uKpZESnacf9P",
  "key43": "UDsXZ7ctUH54mf1w26Zx9YDCMcpoQGj5EjNKcezwQnnn2WVcMFvbAmHNLNJUoHZCnAgGkZXFYXuwEggGBYVuuJk",
  "key44": "3hY9CN4HQ8W1Et83xSdXZeSyMvdSKriBCXqQygoBNMsu4hofnj1orDUjF3mQKXyaMqQRxHDoJgLYaeMq4XYwWAdb",
  "key45": "2foTkNpy9fHNmWaLvjRsmvNkvspE1FETjVVX1bXknB1zn3nmh44wDFDghzp9FVLfLNJV6xBzAuqBHShUfggKdrTf",
  "key46": "FxZ1hndDczofautktkbjvnh4hrW2FgE5fCaeF55w4vzMPmLZfYuPJwQbsYPpWUB6mjoCuoLzbbVDLcR3MyrjRME",
  "key47": "45KT83Lvv9Fzj4MNPQhgAsSyX9MbibWuxdeiq3ru6YitudqzWFLbBipAHurJauo1BsZhi8V2mpvRpn8wE7v8XTJH"
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
