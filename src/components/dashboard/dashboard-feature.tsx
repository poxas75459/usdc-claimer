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
    "5eGmgmoNvXsZ5uFF7fYSUABHJV5d5hg8QorapuMfGprWWwiWSehgc2eBBR4FxUNeqmZmkUbSRWXApUXAVqMNwtbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YMwzNH16wS8WpjBnLeK8bXHykgBK8L1uTj6DLtiPBJPiGW8o54VsjftBwfXtkrzMfZ3hgofF6dSCBFAGh3g5U5J",
  "key1": "64aDcHdFxztrwsJbi9NknkPi6LVAbrVTCF2ojgNMTi9uMsTNdZCCcPHtaJk4dDCyqnEFUzQQv8uaMKoxF34KzSFs",
  "key2": "5DZuTFHwyoordiu5EFNPmptcT2PJ66jzBeNHFWh6bVrM93Y5sH5iUfZiyiSFFqrddZ2fTPahcHacQ9v46yy26ZjG",
  "key3": "4yuMzSbsuQQeA4vVJaYeMCU2ZHSbYsYiVfSjWh4mq792xgEtBFtuTNDfahktCCZ1bneSASwniWNxwXeMwKqUA7Jk",
  "key4": "5K786witResK2E3ddDrzheYsUBHHuQ6P3vb1tTVMXyqjkMCsr7xX5VL8gHjneHUpr9jgytM5fUsbK667NMfYSt4C",
  "key5": "4ovqTisCfCbAE12VBoZYjAttRY56ff43B6m6rkD18QgpUKzTLGHasMdNfBXKGokE8HfwaHWJExQa83kTYmVJjbJo",
  "key6": "2X3u3ViGuBsuemMMhJASG29n1XhWVd7ywmoBSu93xk32EAg9WemHoSjGmvwJykXP1ri14jq4DcNQVRdAcC9CkbS1",
  "key7": "4Ye9uJw2RwZFMHuXABb9YPZYbZjqr2pQXYE26J2cRMJgQ6Sp3WTukF63wqPnS7tP5svKnZAsW7Znu2Wvf7wTEun1",
  "key8": "2ba9DoNjrjvgsaEz3atCCzv2e8a2F8LEzBaqrFzcCPWCrvAVJuRR4g9SDxdM75hZjkT9ccA196253ZSt62N8TRzr",
  "key9": "4AvnwgcWaCvhiuyrZyJjv1zK4fwFZwDuxzYLHRBE1PFQemtfL78zcfSqDR9sibcYXN7VZyktsesX8gTjvsxyqaQk",
  "key10": "241n3tXFjZrnj4mVoGqszyBWrSqZaBj8p6cPJqqChm9mE68wBpHfWkR2je7Qy5e8G2FvFkqJjHXUqFpCcGgwEYNz",
  "key11": "3SAj9rxLx7SVcMxnVxpXGGqwM2pZ4ree6gJY4iMcKkqL68rNX21ef23SpQSee9HX4w9yPfh97pAU1Zjz6A5GgdJz",
  "key12": "3C1BN1nsJFmi6TYCSF3vzqTWCtovGCNSafNgi7X1dZSMa25w3vQZcv6ioXadAcXQjKETtgcef6ATZb7Ri45oZCV1",
  "key13": "5DZng7z2uJafj3kn52Tc2ouJw7oc8vfkWgVeiPq84G536hKZzNQmiJUjF37kXjp4WWrf4W9PZp2zjU4kjYC81xvJ",
  "key14": "2p7hfwqghnesCXup7Bhj8n3Kky2TdzVwu11keiG5VnTLEdNm9MmRauAxc3Ct869Y1Tfk7cNcVvmZYhJFXHCuMiVv",
  "key15": "mmzNF2TLx7QT5oy4tTmjaCrf1NGVNvMtmxVHT4UhYjPp4WqHFaARkWjWF2zprAV8aFf6TZMqSRnpVG3UEQREtmw",
  "key16": "SShhxSuet3SBwcSsrXGGEchr7o87mp88ZmyTNU8t8YthL9qGKmmuqbf7qFymt3XwvQDiQ8NVJXJoNpJk7nqaD35",
  "key17": "2UVyKwp5k9ExXY3q9G5x3SxvSVoBW9duYRA5Vkqcs1xeUqC4U55t8ZV5PYyPkbaWNHzkwAatCrQQvBXGxjaGB8un",
  "key18": "3LqbKxP7Qc6fPJZsp6CsEYfCeU4DWgBKTRYxWAZJZ2WVYMh6R4wvSAaMAsJ5kfokUKxHcgRbUvpZwrh18ataX9nJ",
  "key19": "2fCvuDXBjEY3bmREEa9mg36uutDL7N6sGuD5g7CLHvxPPkPJhmTsqrrRvXQxrqEcmHuhmsUJBRAeSMjQyV3MxcH2",
  "key20": "2RetMiL7gg3Pyjxip2GoSWTTVgfepze7udcmaKyzbXtMwLE4ykQz1TYaQyxaT4DNW7HhxGBTiqgSrM7YdDWir83u",
  "key21": "3odYnjN36xb1TxJCNQ2nMo7iQQSuaUKKW1siqMBiB12ijStxEkof1fei95LwpgjZKAFvN2XuepRp71UVMCTk8GK7",
  "key22": "2P8TEPow1FXgB3yHTH8dGvRqUy7UNRnnNpUEAsjYUfJEodhGTBvbFaJdgax6AWUxqM7B4HKMy7RVZiYj6EP9acy9",
  "key23": "5px1drWmSgja9uKnEf8h8gkh9QvfGL9zkFX7xh96hBZQ67dooDYt1vT3w6mvDGgjsUsBb9kbYKijyLqeBACTGLcL",
  "key24": "4HnTWKGf2sJiZBQsVR7BCXu3mUFzmKuPKq7WZVGcejNm7n7aRYFPWZ6jwBvqH3sb3MBxatQUSJx9PzEm33qCAHrp",
  "key25": "39a37istuDZnEVakRpW2zrpqVJo8Eo6MwmjzUMhihCsHvA7eiDP1wm7Avnm3aLvpFs2GTBWRtzn2MwnjQCM4dRdA",
  "key26": "2UgwQf1ft8WZg6X5xhQH3m7hZhpLztCxuhRCSRMsDDSaunkkMBFgaKXeqA8qJ43QWhCRuP7nATUYcUS4ESNSQ8xF",
  "key27": "1MjayegLTRQNCE1VEfrpTRbZir4YosYz5P1XJuZuCxJeaprcJ7s4nUawJgDjqENwXg8DL4d4MYgst3mzuTL6USc",
  "key28": "HjdzuTzbq9KJTgnf6KfrhVg6Rf8wugVBms3V9RTVyWMzL8zfMQteheRukVcQJ7jw6SFK1hgNiXXr3mSb8vE4s1a",
  "key29": "2Zo3YYbETuQJZwQxpVBHazC2LQxn6tfNU7X7U5T13tKqDgFsaU4GKw5Vi63uArrrRQCBsnmd3tQbLnBqSTacDgqm",
  "key30": "3yFqmgU8brZGbEW3SbVSRGF3zhPs1xQUGmuU52PZ2BNmi42drBVoR4Wr5AmjjjbEDroiiEFPTkFXH5jqztr9jhhL",
  "key31": "5bC3vgqABjnHofPLNh5tM3z9SbnBQYGzda5rhFP8oKNjuFrVaUtMPdo46XQKMAqiyNb66zS2ppRpAUmyu3UPTUGY",
  "key32": "ywEf4YJCSRzD8dTeJyvyWkAoexgHZ2gFKukLwHQZsZVJPaLazqPBa6eeBicGmLTcjnW4nt2UF4nieW9nxxE7yyN",
  "key33": "5j36MkHrhBKR4BbLo7h6a7JDq9GrTYs6i4CWyjpeisCVoMMrPJ7QPqfDQdV15373u4MJu18Cihxp4PcsoTJvDSee",
  "key34": "2JW9dG7XU22iRfpzXN6kwspuyXp1D1wqTWZB7DAegi7BnEZH8jQ76Lxpj6dEtGZe4iSmkaCngHdJdKr4YwyYWFhj",
  "key35": "4UstJbNUB4jj3u1725PHG4bXJfJrNVWLnomZAagqVb2rGC6atdUsicspzJV3CxW3cZNKUeN5KepmpK94QH4Lah64"
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
