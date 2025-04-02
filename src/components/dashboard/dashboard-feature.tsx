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
    "3G11tVtsQuyUwjJH2esS7uzcA89iU96pTJA1PuKi1JpwbPqdbW1nKg3RQFve7pX3FocZb3YfHu9Lr3i78zhBZ8ZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j7J6VKKzqvXE6q8qnLSgg9p83euToUZ2iEnp19X9ZvWu8qbeG85RD2ZHGPL8BD2t2pKjNp9hwR5pdgVwdkJFsq6",
  "key1": "5bKZExsvTkPKqynkxrFPdyt5J5jQHx9z6VXaGC9dF2w4qDo5UmRDVgEnstBnhh995XAx9fvJxQD17GGJEiQcCAdP",
  "key2": "Ec6DSFsg5XE8Xj12WNYwDtDkiNmLuNgR7ZUMAxLcBzGDoS3t9BAyAsFswxuMbo2hDHitDJvgTqLny884Wy5dwBg",
  "key3": "31xsc4tKPSJTQUE3MBjAcy8uCyGRxRArs8JgbJ198WU1TRYTkaLdF4SfcyoWMf6aj6Ym3LSQTZL2hs7k8PuPoNSc",
  "key4": "4WFmSpgUt1FpWBfVsFKeCF9yx2TZoS4ymeuLFqen56T8GpRzoseNvSyXKPV5kHag5KtrTk548t81f317HTQ81UeY",
  "key5": "2ok82CmtyJpXjaghZnWzgB21zKkKYuSPZZXBhpM354Yb9NovHNQJb2oQKNMRCvzprQcnkbVFDRGxC1egaHmoWYEy",
  "key6": "5enqd8jYPGCo1znuV58dtDWgBjvtfSkCpntTxNoEmWzuJd48QQDZrJ7ptZwSX1hZQ2ZMGx97uENVyp55fTTQCAYa",
  "key7": "4s6pXyS1gmMVJw7TmBGu7sz2dkMPe9S5nEtmY2HFQiFGo84CoUwwvsjS91vy8BRpRQoM1xLk2tJ5NKPGyWFTG5Q",
  "key8": "h3maYAXNdwa4hboQzDUNsHFnoGbwkj6sqGa3whxMJ4zFd3zwfjxbUVVc7HsyFdzZhDoV7DeKaygmAnWTaJjKwzy",
  "key9": "2BNCTW8tgbwCmQqNQGBQHDABV42juPD4rAquWofpbGvtcwJVdTMNoW9dM7gCgix5S1LimZKfMhrCfPLUXox4AYTC",
  "key10": "33qTuo5yRe67ox5vG2FFgcZ56kACvtfaDaBupfgnJtHK2Ngi1KCXRNLjRc8c8Z9QvekPuJhkH4M3vF671aPcggHx",
  "key11": "3RKKoggBABPjVkMzn57WmkqU81BuKXYiLaWaH8sz9rEeQeH9PfgpJH23eBCYbwew6N7frjrTRP5obEfu2iKou2Y5",
  "key12": "3yzcUSDAkfihL3SJSJSdjG488YKmv8uH2MRwMJT8B7mULjBXVPmHxbUCeunEC842cjid4ahEaVi2KSswz79k4rMv",
  "key13": "67gDQFxeBQJujFK9YdxVPRaDGjdkoeYFF92mqEfyzAxquPfJJiYAfcxWsyH7rdo6ukcVKjKvW68nUJ5aiNk2SFPm",
  "key14": "2Ggtq74fKbgeLk9BW5mQa5RA6LAgTzAmeyHGazDq3EQnPSNfnhyNmwB6KR9L9kuN6PBudcUrkrTJTMmfjdeLVS2T",
  "key15": "4xZxRA27fjJwa8k5ZrKwHRcEZdGuL4y574yhFHNMTkgVgAeH96Ce883PHPBnzfv4kSKzeLSjesUNBpyp6mQg5hMz",
  "key16": "5BQwKr2NKNNE7J1SRgEHr39U56aWrDDGSmmMmnpaBn6jUn7nht7UAZLYUyECTcWSezKQKtXfu9p8PKtPUnP7UuPe",
  "key17": "2hbwGMTnA3PhJg9EGArcQFHyZdkvEVRW5hq72snrcnnAvjqgaJGqjZ4BrNRjV4nPgxpeUpT57JLGCQpiFBgcdQZN",
  "key18": "2H4yzZRePCTSfchrtEzNd5kYeKnjzFvjGogJybTzYZU4gxxUam8faHujP8cpSC3HQwHjvhfaRzg59cu5UG5jmvEr",
  "key19": "4AW49QQUQcguD3qpzQJh6wquTPcMUzkG6Yvg1LbKd9HpLTo2tnM2hCNmtc1NcerU4kQ8kTg6c2t9QxhxeJ1aCT9H",
  "key20": "3bjzrLk9L4dKfbGMwEUCTJCi32ZJWi7szQFXjTQrATUaaYuTZS9PSaV7dTkX9pAvFNAY4mUVnM8itUUNghNPMoeP",
  "key21": "59ee2wKM2NYFBxzZ2hbZ1K6ftpN62MH41Zt9PRjHcSihPJbufG3b832DKVb7Y17MGtmGVh8xLszjLrBhKCb8JjZo",
  "key22": "3E1EF4W2JNiY7iEDJbShrPitoRmLW9dF76qa6PitkWQJn9jP1GB8USGDcBwkFBC4Rf4wLkGfqJRqSMXTugCTD1uA",
  "key23": "28SJKFhJ4KVRSAoyXXrTMuJE45xqopaFJdrvHW4mETMit7VVSQUPJATLevZnQGmCjyKLzMEHBVrxdHuAjWhfPury",
  "key24": "5WCH5pQ6GKoDbeeLedAUBPVEpKa4bJERfnPosgSHYnGQjzibGypXRoBGNaCtNzLhMXMayeYE2qMaApJ2T5AHzdZR",
  "key25": "5aFGeu3f8BaFcZc2ALV6NvKeD7KNvkDz4urJ8E93ATgtZH65Z2zbdaV4V825DXdAQ1w6CYNoGtRUdnjyR6yRtydj",
  "key26": "4xihzTg3wPthJW2kym7XxZX6qNuWcnYVV8m1paJyiCAuGc9R61hYv2JHCw3iupe4Rq6HDjYpkNza4zXbYcVzrfZ9",
  "key27": "2s9knLefJPqTLHXevgKPVBDVR5yT1PrXTQX4EDU2yEMegDL7QbnryiA1HAgKZFeQPSeQW8oSMdg7WCLoX4jZhzDU",
  "key28": "2Fgu1MhKx7T3XDB5peS3pjZf9UYEDq7VTLbwa3GzUvzUvN1b9hj2yhRHojFTzXsoVwxTGPq4cyZxYjzGfDPMdrEm",
  "key29": "27bPofFu2bPGXc8fUeAtd4N47Uokt1d1NbadWjDE2TQ94vYDf9zMTKn7Xhrc5LH4y2oNo6UHQCxXgVjtSZyNXFa2",
  "key30": "hgVSRCQiGHpK1gFW3wSZRPSKncPwCyMga1rtT1btQfgqWrRExCN5XJbGvymQw3AkuYkfwys94wiWsvYUBn7KZcU",
  "key31": "5JwUr2nsXioYyyKXaavSxsxEEcusbR8PGyb88yFZoonVea2Qp2HufhtcX8D6QUg6v864FKNsM9pX4HzRNgUDw1E8",
  "key32": "USjbnaZrVmhKZiMBwkXJoxCKZ9hzcQCQS9mFjSTX4eNg2ZFFn9F7paNomgkjr1JXZaqEmAoP5tdMbx4yzvunLXw",
  "key33": "3F2gwm5RYDSxsBfCMaD7qgvNA1KSprMdaGuFsCXWrZmGsrGQ4dxtDpsrEST3K8ibve7CHXWJJbW8L7zpg8WLxTxH",
  "key34": "3dqPEVRPhsXUr54AWPhu9kg3j25s96VgAZcm6HdiurcCGHt2jPeUmoQFvQYCuL9YUVgbdYrNnZ4xuX3kguufdbv1",
  "key35": "4yF4UWBTh2MGCtBPaENjWAAKSiAZPTkhmUnA9AgnHFu1sfSYroxVm3AbsZ7tvCbdeTuC66WXCmcDHqtxnraCNAGk",
  "key36": "43qCEP5he6Qa3wZ3wvvP4uqB3KyHiGjUz1XZUf47YBGsxfk7oq5KGD6a46WDbtHvhXFbMDWDQ4vbDqxfx6hPvrUR",
  "key37": "4f5C89F9F1vMbNkzoe4CPSBAw2spcKywW92GpkbQWDhUNZgkKmVpbFuRBS3MkyuG8UKxTgWuhDN4LFLjCGvP5JBr",
  "key38": "bh3D4vLCMG3jHwpABVzCwcChEQmQk8NQ7VYs6t2wXdBa7m4zbQJmkng7TkoFUZEp6GJP4rp7aLzFx4PjkbZfzuk",
  "key39": "4s5R3S2prd2YW52n8eFScLaphz38V3om8kvZhfjtkrd95gsES38rrXT4zhrVurtCswSEfAFQZRB1YZcRgvcPUdHe",
  "key40": "3n5qo61xtufBMQHPGM7aTGYVvJj7YBe7hiyvq5TeEC4F3dbW6KwRd8FTHqqH5AMUYW9ekGQCEiiYV8pRKzwvZr1n",
  "key41": "4mvFpoCo8p28Fd3Eh7dd6CjkbUXrV7tRoKfRxgaoayPkSYaCpNXkAnR8Ra4VsP6BupGVftEQ9SzSNV8xbFDjHtCw",
  "key42": "5tKqeh68QL346nbxcsv6SZ5F2gonozaR4xqqXba6L7GVatatHp49mAy7iCbMuztJFy1rnV64dYRYav44idgeQjsw",
  "key43": "5MQNC6oKob6HLzHZSUakkD2bkGuDGc6asxAk1o7QWizSntmRzwkTPNZ78wLm3JSrEXHAeHqoF5rDzNMjS1FUi2wZ",
  "key44": "2MY1eULNo4cjE75adjPdLV5GFsrSFey3euvMAQ1oVZaKW4TKuXmCsZFLcCrCbyLm7jXDfdK8XWAGBLKhSZWDSxcp",
  "key45": "5PtQA1rnqsjYEjBdXpt5UWHJc6KoJrPjtAT4UVafEpFdTRQxeVLW63YZ3sDpctUwgZQWTUy1xVpjricjZJhk9YPs",
  "key46": "2z6JS6SRF7JX25PLhSgTh45gT79Gn3g3xCj2hJYXSzfbKtRFoZPoiZwugqangpoAqoGFi1fm96Ftwh1Q4JpVPRHK",
  "key47": "5Z2i5xTjmNrwj22y9J7oepd8wkN7Z6aG2Ta9Mt9uzsCgHg1jdG1N2VrgzX4hLrEyZqvoVPvFng69Bo5maQCyNVNM",
  "key48": "GR84eBi6Me7TSPYPUfM7sq92ZsHW1tsR7jqWgJZVFinoYZWe9FB3exY2XsRac7erEnw7Vp2CB9KXg1KRcHg69TH",
  "key49": "5SQaiy5fRvey4A92hDnt6VgGe7tkKtLJMEAJSnnfXtUcVEuh9iyU9LuWwZZzvxDiBAUcSnr1BtVQw8zpoyBgsbnM"
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
