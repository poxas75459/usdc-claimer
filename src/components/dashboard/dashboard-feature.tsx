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
    "KXCG9JEqiChuGYcFkzJM1wCufPFBUHRhFDjUfSqjX4xzVhu54pGqxg1RxJ61zrR9rdicgoYXQfhtckEKhshpsDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CaoqkzEB7jQwBy5pMhad75wBy29Vpr12CphiUeNDtQrYAPtk9mixxjGSi4o3Qvc32GMrWYkkrAMRBuoSemozenQ",
  "key1": "NXmD51eRZzbtAhFhgWzrqja28bP6ZK9ycPBnsZm9zFHBRnWGo4GXZC8ZUp7hfmBqjFPGbb7J1RuFGCsM9CZhX52",
  "key2": "3RALDZWmvsT9MpDK6UfNXy7ktiysVX4xMcvXx2mQQkuavt3QXs4qkJQJoB8t2CWKCMBRrQqbGajAtPnbnRf7ZACf",
  "key3": "46dXBEGqQNY93xpC26thmdoAqzM8kGqWbz32tgPk2NCv61Xkzvz67SxA6ZaGJYbjPBQd1qRX9T6tk1EgjBXCF7ga",
  "key4": "xmrzSrrkMhVwX4zHCoEtoq1tDDSqZANvCy2mCuQfYjaH2ibTdgtEmUdTxHwYFer5cjCn8A7GgtvCnnpr37vnVDc",
  "key5": "61DgCW9zAwzCtsdVV8i24EWRdNFsSe4yJcsggZzDyEqgAs1eRaFfKL6VasJpNDbHrYXvVKX77UsoNNEycdSxLTgH",
  "key6": "67GdSXFgWvtAmAp4WrSU5rbmW7kMYbTHxmq69uN8YgwnWcwnuSYTKAAPoteDQKBqumnTM3LWWUhEP5nQLmSwuA9A",
  "key7": "59aopwyUgGPo6Qtcx46ohqoG4EgSUYC1CCMqCU3TRdF2qTsNviZtsTnB5toePAzi5938SjNoFuzAf2yh84oNjJzV",
  "key8": "VkkXEiwN4jjNYTCL2KjufevyXqV65BPMDii8ExMf4NgPDziMP9XmnKcegpgFMwEmLR6YxMgvebV3i9KNmuhyKrx",
  "key9": "5NEpuGBQ1PDWsR8yxzn1Q3oPEu1ehRg4DQk9xEqb1LwNyNEUqEmxh45XTzVF7gn7ZUL1yhKvb2Rk2iDvEEdQ921n",
  "key10": "4z6144m771qw4A8iknPTHHMVjxkZqNipSeMQMRHDGEwPY9Nhe37RjRFBpa6cKUUdsCmktaMeHTZgaW4dfcKPCS1h",
  "key11": "3y1uVcE3642p1LciqMg4ZAN84fJtUf75MArbkdMijQKgkSBNZf9bcaHrjfLKYY9pKbuWxsKpTBhQWfHhCUpQCK4S",
  "key12": "5dbdHWLQ7pKMtAf1hBn6NjVsuHWX2Q2VKP9twz8Pu1RNv6X7cRfSoqVBY3neXdWDbVAQQXBWkkF5nv7ncPCv4W2i",
  "key13": "25dDh8Ey1hBmScbQ8JmqYmwytFXKoQ96gipHVRinqFWD1LxsQUu8mzhNmpd3tdyLrTWGeJS6ysKKVPCA7TbwxmMf",
  "key14": "3HSFZzrt3YUS7F4mHEx6NJbVH6TufABqCPjWcCxAqsz4fVGdsLsbBPnmnV9FX2gpFFs59aYBQHB6JNesho4Cixqu",
  "key15": "4zTXFZw31ZbHwRXe4QnKrH1dN81RJsipTHCtp5JPYU6zyJU3wjaePnB1Nrm7ov3wfzGqwnhStyfWJSFAGLefDRks",
  "key16": "54wrGnxYLs6Eq2JcemoYVai6aAUHFAZtv1uwjqExn1jsHnEkK33S3BwiT7E56DziYPRyd71u7uacCgi7485AQbmo",
  "key17": "5cKWbbXYnYa9sHKC91Y2mdTG5zMf4c9mx68PVYG7JRt4W5UgKw5CfFKQ9YotYctspC3RQKCTq1B3V522aLtVhPSR",
  "key18": "3AiMvYaNEaxSiUbQEJdLTMXSjfuXqg6AcXXvPT4jBKwKkWuk37fSyxJfVym4aDmgmZ5qSNNpxSNkxhMePUy5ihT",
  "key19": "3cHNcnmsfWzQFQn8ithxfuKrZnph8Kd3yeUCMVFYdUFd2FMCautAfCn6QjysLkVpSTUo4msqsB3M3eHMFp4p6nUY",
  "key20": "2C8mWdh2idGnzfs5S59v99k8hyRvEaooUAL2mWeLbyrZLMm9DmNakeM658pwCPwaVafgm3g9S7euCRbJs9YPnNir",
  "key21": "38BAvP1yWCczMwb3NjJSAKwyjw12roibLQ78oh2gKqmaAnyVZiUjYbA9JNnCEbbQZghctDxDbK6iTuvP8DfBMoMy",
  "key22": "61BCrsccTjFahc5AEum6quLCoRbqK47bhjeih6cUNEwa58bUSJfh8puG7uxtgSoFzQbmcSKyGBmBhheGZXepsfGY",
  "key23": "24YUFPMtUYi79xWczEYivpmroiAybNGSeRj8mQqUN4htJLzLp7wSAqrJPVtkVZB9HubPhMDoz5av9omKvMW1DaqP",
  "key24": "3CzXH3FFAkokSuu9tm49g4h2cnzjR2pa8GNjt3MbvEDVQsL2Mvv2WmjxHLGES2Rijw6RzuM11PxsU6Ej4aNZH7E2",
  "key25": "y9gbgAF5RHYZnzEoPhtmVuP6mdb6CT93qBNw5GGedtz689kXM85FEg6GfPitrZHAJmHSGwAP1oyV9uCJzJtaytk",
  "key26": "3Zpvias53AuorpMv4ZLE7w6cR9YHjnJ8HLpmYwRz5fDTh9ce2kvkmYHUj7RaAzK1Ht55HAmEeTTa3NSYQfdt5tJe",
  "key27": "r1dF8j8R1TgYJi71vVs3q7ifVpGaERL3rM2Qk5oLRBmKeyzETbXYLy3xbgPHqhCHAo8GTBVsbpnK8aZSZ5t9xbo",
  "key28": "Bpw5236es56a18rNRc9gNV6EQzEyYWgUE4jdpr7aTpXHGwi5JvLyy2ne1x3rGAdFeejF7APDRrQa1pi5vXWnfEH",
  "key29": "64cMm61VU23KioETCd8zsG5TC43vYeW3mrNhtPPrzx3kF6P9guE55kpfQw8Nq8F6Hjb5SbEutufEJ21Q9xtYnaBx",
  "key30": "3CRG5bFJjtTc3FaMCWv4ZKrqDANbR4zsbNph7WdgbrdbcpQbWS8UoBtwtrngzVS9D6h9uhCQ2Acd4udsuQHJkwDK",
  "key31": "3S1n6h46pqriTwtb8F9hdwJrLVPNMN8eW6dsKE5LbngLfvryEEzm5M6sWkYDr2ttfv5hdhsPmTvooubYTtLXuMku",
  "key32": "4d3haJRjcrL3FDttpHfzvCWywhvK6dTe6sYWUtSnsrk9pqsb7GNoX7FPKqYkKGUnGGaksAVFbG1eHjddUUFFDPod",
  "key33": "24vQ9tg3AaeEZqMdPePeGdy4T6pA3qEKY9EQvyTi5LydX1CAKu2vdGXJFYQrBVSYeX9dzvn4exJ4H3FVCRt34ky6",
  "key34": "3pBHmh1yiTfPcF5MQFT1pqRpaSC75zLYA58CAcHNpmRAn8s45ocMx8vx1thFafTfNko9W7qWQdj85fTNb6wV317m",
  "key35": "3rFqGN5wzYfH49hH3zXDVuYQh5B4FY6HFrzyocxAfjz79Cz3v7Aq9c49NG8Qqfmvj6raa3gFFq2BkqTxtPZnrG3K",
  "key36": "4uMC1wySSkMyko8z4Ekw858B4DGpyX37CRJbNPV8tFoyK6HJLLBKLyB4h4HLPKLNijbh9Ea1FQNgxjczJrBQSctp",
  "key37": "4apnsvQ8uqSxLHfqWtqhnj5V7oVXWmxQ9vxL1EQu9kPh4njb411rhjNZMTaAfvbhG5KzuzXkew9q8eaqcGBcuwzM",
  "key38": "3mxmoDz9HeP74MBuWZnrKhCUGGakRTzsq2uY9qDcyRw62g2NjsVgHwMTD17gvuNui23yzhjmfcbfRbXLSSyVBFG8",
  "key39": "fF667277a8yBzVzGWUw9mwkci7DDYAJyP2gk3A5KGpqDaTtDdFdAHQoqjQSEEuhqYirfxGJ6SZVYh714MXLXTkr",
  "key40": "BhnU3qeFwfkjomt6CQ6gGMAfsHSwYxpkB89AbFpPtqXKud2Wa5BSAtSphmSgVwCZoBjqYXb4Q3wpbza5FBbGHrg",
  "key41": "2YYDwev6STuNvSkP1yLU1oJuFgxATS57hVPn7jL438e4GPQW5rg5tPG5Kyg3jeJJZSq28e4HXid5S5oAVtXNe3g7",
  "key42": "5PDR6ThQDqxhLoqAAmkS7MfYHczbBVGoTFqtfcgfQj5iYrYEfw9GJ7mqGZSfDMiK4QUrTTv7np8gn17sDUwL86P5",
  "key43": "3YwfzGxbQ2kqpzVVRxmsFkHicMndU6jupzMat359eMwSUJACi8mD1FEKtSi94cyENEHtkFgvMLF5u5xus5koBCjP",
  "key44": "3uFiLz4b4kyBnWmqhbjMZPbTD9tqkbyxAALSjdRVXGmSD1TiN2nutoT91P9tA9AZKFwsHB393Ekn94kntCwfSAdm",
  "key45": "3CNr38y2DvAHmi6f1gHBB3CrNNH3f1veAAJH8icXXeEhgf9xPCovcVLWmebkA8W8Zbjhg5WvWfzoQf2T5br1aLH9",
  "key46": "U6uWEuZosdGAdvhHYY9XpwCB179qQUxhPi8LQd9cajbyM4j8P6SUsVVjGkeTtt8JTKdQ7DZPjYkUtYkoA95YRsr",
  "key47": "32wtekeZcUudXwWh756AY8WNCiARZZ8GL75W8dpswmVAxuc4Cr3qYACpLnF6uEEZ6Cne3wvm8NvkWbA87DCLXZ85",
  "key48": "ejNyr8857reHUTGDPPRXC3MjdBfwLjKDtmKGdW7WSTeeWPfAPnauwxcog9FHL8GTRVLVimZR2PZcJsPQpGx6M7H"
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
