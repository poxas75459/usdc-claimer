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
    "5zf3EnAJ2ZMq21rD36yypVzAQEeJZGNKcBxgEtbw6rdeZst2e4SzsiDnygymPNSiS1FdHN8bVDmvekhzanM2UGqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KKmf4Y1YBiDnrmE8akj1E5BT6jTnR7WJTrGyfXH1GuYX3p67huUkjvpe1PQJRyZehZTmCNLHAK2vKD3RMqxQzza",
  "key1": "2SMZXtxr5594cSFwspMrAbDA6ugQkokCgaTFZYqRMqc9xP3TUvDStRHu2AqAfrhoVWJpwwyD1KvRBQkBJKHuxFyZ",
  "key2": "2mSgxwDBCHGEU9Ymjh2JSDzT4NtG3u8ewjot6tzLbh3o8s325zXEXX11CycQ1KQizN2NAy7Jvv279hwBm6J14XAL",
  "key3": "66qzhhRdzt9cFrkpeJxtKj8GfNYERWudpWg9UbDUYhF6YE86dswdoFfz55UztLXRf5UxKVfNsn3aAzex62gbETaY",
  "key4": "63zqnc23cdZHsmjtCJkk5pNo7BHQ5ZG2hc6MkuWrX9cHfEkaJVr2Sc2zK9mbY8naztLDaGqwiQob2ZzYZfUTvxSE",
  "key5": "4MqMuZySanh9wTxXbMx9Y5WqhHPT9wG474YtiDaT9HcNQPH7cww7r7ctthtaryRWeNHgmJqukKjQkDBjEdH1isqx",
  "key6": "24uxfqiHmXK4SFYVCdGwCZNUjuuBF2SwKwkmf7pVh8AVXhoQ5aH9PPTzX8aGs7BBq1YLWDnM4C1tgyceqHLtbTc7",
  "key7": "4qCFYX5NenEghugGkZQxDp5dsktCgn63VysWSnLdZga267iu3oTz6NehHFucotzoyjqtYJwfjduUnnFGhjx5gWP2",
  "key8": "5RwX6UrF3xBV2vCw6tdMFsHXR4FfaWrkzbvP9EqA2WFkiJCiTauVaekTNpuXWWzx6z9KjFnqW9KPWBmubhrKFxZK",
  "key9": "FcaqqZzUz6LXMt7ac5bf7yGtJ2n7AgVWL95j9m8NGSXX9Qrr7bYaMsz9wRx3YoRJvQJLjp84Po3Et2XW6X9ewJU",
  "key10": "2b37ibsi5YX2bqL9Ln1HDLspDy5zaqXmZJ8S5th6L7GK5AkgazyNHVUPJ6P5mjuJtXZi17fYRju76HEZbY3L6gzW",
  "key11": "2jJ4HKMizASCB1fqx1Aw6JpnpfL8RrQP2YdDAcSNCju9nFK6xz7onGMmR287kspHoGQQzesA55zdV3i2FTFNtMa",
  "key12": "5VKi9b4iMbUgYJSsgNxvkxv5GxDENjs5vDGcbSWeHAxmgdbBC3pihxH7zc3RoLQ839akwdqcR3pjx1j8anCpRaUq",
  "key13": "BPvS1hW4JXadKo94jiQDZFAUx4g5cvJ4wvuKhCsZxUFjXEbrP7kfCfpyetwyr5JottDx12FUH3VRCTMQuZhsTtg",
  "key14": "3s5UkdWQzDKTesRez6BHH63u8ygpwr8xbuVG1KCCMqsvYCDyUxrMjkrqTBXhf6JokmYQaG4jowzkf6hJQnbToqde",
  "key15": "2JiZEqgDXHAFMBnufUqc5tpQt8U8cFxPicyjxXSW8F65FX8GugwWngeBXSLPijTiG21PRhv7XwiFWzgKhAzsNjxh",
  "key16": "5BdjhXaRccxUCW78NfZsq8zqoD6A5kPESCFpUGTgAKrWvnT5CVu6KNb23TMvFR27XryW6xiuVoacTZdyfeUoW6mQ",
  "key17": "5jK7ughkezPjd4VQ3LU6AGcw9wALAZKuGwVCrf2jRiECTosrtcsjVzhe39GVttQRXTP1zSpRpbaKUggkCHKvUKgF",
  "key18": "3VrVXHyuCS1y5j2HJiDpd5anLz9MtEseEkH1dAEQ71bUCYLnEcoWSiCPYDp2HLPHMAc8m9E3waoAEU8cy15STKXN",
  "key19": "4RXQxiphrLSRFn8Ec8bmLAnNmk6Zjfc9CmAJ542682D8A76SDo9UbT1D3sn5dpqt5k1LvQQTCYaHmtKdCsq1dHs4",
  "key20": "WAG74MwpkxeoYKefe94iSXQt98AxZ7x6XLhK91FfnqstXYrcLFSRxCYYnD3BhPfPRy4REmtnXGX6LnFPqZWJHih",
  "key21": "2iZNvxbeb7fK1fpHU8m1CPLh6ZV9CwjafCxt1iwRv4EgrLZA8WSEcpHTdTFvWMEn2URWx2QoTw5YkE3brm3ckwqa",
  "key22": "251hWfp6ULtaSj36GPP3pyPkHiNzFUdggsUJcPN6XF7k88LPFtew3MzT7fZFq3it5nbz5r5CMPTEKzJKG19PdDaE",
  "key23": "3sM8551idu2Y8ghss1nsKGY6q7XxwAuyy3tFAfDnuRYYxMJA5QTTkqhfZmzWLMp9xnu6Q24ELAimodUSUcGaSr8t",
  "key24": "31Wq8NFQZBy2MfE3cPBvsJi5hVf1tGsdyT5Drh7trNtTUdseXatY2fLhkJY4pJMRico2JxL8rviHD7ck2Vs4cB3y",
  "key25": "2JKgRFb1TToJKXHDKPmMgx55j93Bh51v95q9ZhzFGMWGJKW3YYp1UHkdJrqCoeh7JdPGHF817oT6SYtnpTtx7JfD",
  "key26": "2EG5bv8Nksx6qcPcksuGJLQmr5C5k2vUcrpQrCVxPe6GCzp6SwfrzSjqxcQveWqzJTLyD8JuZb2yDX5jGHcYmRsk",
  "key27": "2uC3f3PRqWm56o3ifBgoeo8s1ZBgXtp2RdmAwDtHNtyTymd1wjygrXmMvf7F19RFF9qmwEeeKScKMkxZjUZswHxL",
  "key28": "xeXNq3SxFo8TpKz1Zkw25oSZ5S1ywu9VfUW5s7gq3kpDbvq7zygViHxwnHPFjbVeGFTSvAQET1rxfic4yNYSzxT",
  "key29": "2v6udEAwpXRZBprGvZQoo9GjaHe8pEMo812xRzq454nEpdfMAnXnEMxZ5gc9uHB4KnT46Mi5x1PjaKDwzHY7jpXU",
  "key30": "2ecDgvF8iPTnmp8PmAAZiNYRWc7quThdRKe7rYiWvbgotqMXWrdVowm4dN5xxcdo79ppHr4hT1Gb8YQ5AXsSWjDK",
  "key31": "2FJzMWpKGfMQ8VbyHreHbV7iSBbwmaTJxf31188gVAsHUsJYPLqsq3eqAGGgdVFfFv2WBvdudD14sp8DycDK9UT7",
  "key32": "2zvihkP53ZJqTK3QxzLwkpFxLGzwkWZf1SRA4HE59RUYTsCJqRn5BGFSPxWQEAkbShxwEhY8JToWcXsBK1GRMKfz",
  "key33": "53bRKhbyD8vJpf3EMB7KUiJja75h75kprcQEdHU7QwC8yNJFKjU79TKACqqXbakw66qtU3DXo3ENnafEJBofNaw9",
  "key34": "5Gzq3W4ZGKPS5occ9gMVTt8bSjvR4jA4GWKwVcwxvck3tcBVJnAzT9HTmWrA565mXRN2HMVkqDcFVHmKVXazkptt",
  "key35": "3MZC99aVsqjJ5v4xJ4HqUrP7XUzTgbXG63P6YJkgUsjTQrNWN5YTydBseuSV6N6rfceFiKUnJASB2w8rzf9bkDGb",
  "key36": "3Zp6aRDWQzPUooph8oECBp8Sd82NFyC9dyMVxS3MNyaoDPzSmDmZGoX67qGeKiG1XcCCMcWr7z1spKskJfEq95oS",
  "key37": "i8mJLytvtUh5YivAQaAc37WHBKcHtV6zGzA7YW9cHDdsXQj5Nwb8cV86SPZHduhGRHCPDFRtNJMk1p8xadhpk2A",
  "key38": "3dyUtwgW3crMahhBZU8Mq7b6TXYUVQU9aeXTaSMoNctiF1tyYFXzbpHZcKubgvEJzdEBQppVB6RbTuxAykYaG6hb",
  "key39": "5K4iJMDbD9eUe4i7yfQCcweNCmoCUZVAChRwNbBm6Lq4Nns9eojUF4Tqkf4NYm774thzoM5CVfbAqs44ojHPEyW5",
  "key40": "56uhApq9Pa4awCcQFS8tPBPqBDmMXCRT3PXtrBZVTTvhCPhkzbyRmTj6CiBhtwE135dM4VsvNZGZomL7muFkxFzr",
  "key41": "5YMLTaaZuQvfWQSFbxKpwsYeLsj3EErhT5haGGtiJJDjRE58m525Gz4wQtd3pReUFdGuunqDi9rr9WVRbaL8QBn7",
  "key42": "nKhUm5YdBF2vHxmTV8HPkbs21QCLJ2w9C5EcSpMNdiGBmeNb13NEbLDDC4RYTdfzYKmCRGzjvh3HG2CrYCmakGr"
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
