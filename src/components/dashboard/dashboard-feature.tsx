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
    "3EwAtM9DXh9zKV9x7218tE1J52F9mgcjNwkGNWAyUXvbgmAk2j8AdifQtEwmk2vepZLTXKEZYrnS3HvM8umc9rJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yTvkYh6UWSXG1qxXsB6tKbtNm4WP59hSEUHgK7ydbY9daqhasyjABT2E88DhaFX4PyWJPtqcuKpGpNZxFYnWHk2",
  "key1": "5Lx4pMEBwaAeYp3LBATVBhHT32AaXzBJoxtcBWiBG9ajFm1FnUM25NciAaQNEMBWdtphy9XReup3fUUViicocUjq",
  "key2": "4EGijnsnxADH1qEzESApn8Bme2vwePa8AE5qKYW51uLg89M9fRwYJQuAhtjbjnzZ19tbnnzta66EySnL3RigwCTN",
  "key3": "4HHJ5kjQiyax1AaxraSahCkrMWp222sQoekE1VqK11nwb6YXuTYMQM1BH6NDXBXMGnaiNUYrJPM3eGLpQKku4Phn",
  "key4": "HAzRTfy1qVrP1H7VmsgFi2yQf4XCYuFfHVYteoW4WAb6XYTwQZoNpa9F5At9rrrFQgkzjrKTJEiXEhRVFzJomjw",
  "key5": "bcSefhHkVyGTpb1VDGELh1dMNH7CNLd2anTSyrRxXzU58jaN6ruwKtt31WtguVBrxKMMWhGUx3sCGEgWG72K773",
  "key6": "jhNq1qoKLsfKkzXxvD9RSY3ypY6FsDvWPJG5TxJn4FAfQ2r1Hhko899QtC4j5iFHbZyoyRKSqZkTkdWdHJHVj96",
  "key7": "4nthg8mKvztPhXDUNUp1hRJiew8xaLRL7WZPVSXodWeW2RzKq4msBiwdCaaWzYGhP5YKym4FtFUptCi8JyTgDtfe",
  "key8": "295B7BgRpHFMGnmmHmwqGbS8fN23ibdycg9A9siBCVJ9GuVcQqXrQ7Z5ekmeqcWh2GVXRrUzfjhLGyBRvvHDT11x",
  "key9": "4XSWZNxLsW65Qva7eDhpMF1vcVDDxZKkTe7bs4nHucJvDMo96dcG5JVS5HgRqSqBrDvXP2uxQngbaTbbbrV68Sex",
  "key10": "5chqxvNiVEg5dUFXJP7Rg9CtzHeaQJ3egec4UZsxk6BTzeyPnG8LhFkJ7DJopQcDGGSVxSgtpSdkkPB2KM4QocYc",
  "key11": "ewBC8NA62rkHSwgbUjsvFtj6MG2KbMo2jCznv9Jxvs6jUCVBL6tyiudts8Wn3a9bNdfGgHUJvhUcEP2wwVaKbP8",
  "key12": "3S5dT8QjcwUrkpKJ82ARgb3QG4QdrxMftDyUF2hokza6xqmrn4Kvy1V5SBbseH559P7fe9taxyHjWW3s3LbqMzYY",
  "key13": "5sPwTaviB8t5jN7aFQZNcfvHTzdZcVuA6osCddNqrBHPz1iGXrDZN5hDHDrSt3yeLpaDJsSET5GZCJfHEbDHPeB6",
  "key14": "3tdqtZKWBrbZNv1Hbd76JP4VB2AcmuvPqAGWKyB4Bfv6v1SpzrVpWb3ixRRqg6hhGow6dT237ttRHDh5GVHjR1Vs",
  "key15": "4Y39uv2VNkRt72AdMDiznMVmyoNYdRJHSznPkJGAndVb9My9z6kAMXLT7SCK4xZvD2obJLmozrGkWYKXxKk5CjnC",
  "key16": "5u7GtYMZmEgnfCrgcZ9ao82oAhDCMEmF99aaBjgfwK5JKN4Y74FNGGCBmEVZc9yW5gBqhLvpjesVQNUAk46a1FYg",
  "key17": "23TTFcjL1vQiVj7Joyck6VKMkVsX248cPTGuXmRNm8A8V5gvEHbo7j1VjtqeSgK93cNiXvTqtDYADaa66JXNVXX2",
  "key18": "Hts9FYiHFiV9XWqESTiatkdYvAPJFz4P22hRCh4c1mbbqyAYUsP8AKyKdQPC7izhtHWRE5R5XWNmAd9EnxmmyPE",
  "key19": "5VifnEZDApMerkHAdF8HjpGhLozPUwtvNiqoXdNqyFssHaNhy7QD2UWSgoNYdFTidzYDNzg1fv6Ramw1gvq2NM3X",
  "key20": "5FokPHjB2S6cnmEm5whXSuwCnL1nJdCRe3nUfDZuwWQ7sxz6svaki74huP5CQqsAvFpEpxvPGbH7DyDEJbXvr3Yo",
  "key21": "3Y3UG7W41RqXR3qXCkYiSX2ffEs42dXRRKts4vPNVdic9gbQ6iegSDgEzYdthC4RY2mfgd1S2kt6LeJUANfszii5",
  "key22": "5FZmqhhzUoinkb5K8EkWWRHzehSrvt9VZQv1UUmpJ2hitBprtoEnhZJEf6pyr7jdBChrpUX4jwmchE3dvxwLovfJ",
  "key23": "2wSVxbEpQFp6dcwnhTTf4yUw1s83XoBGtqiv9r3iChipMToA97BJ4Rb5QuMZXNzQZQqGvAXp3cAD9YpvRF88okNg",
  "key24": "49Evau2D3ERQJv23XtMpmrDCeAeX9R3iZw5wJnykUaE8y8zePQwGyhCqzdxTgZDkMReyEVeckgwYzrg6KcKpmxH7",
  "key25": "2RmvG2txJ5p8QdGJGmyadURbhPCCtAdUq1yLAMNGwCuHUjd6wdH1S52tj8qcaBsSxew3bPU5bubQ1gZK2X4jb56S",
  "key26": "65VTHEgjt9dNon4ANwZt3ymfHJGft6eVd929Kod5PDw35xqNph9HsE1jNwc5z4ShaN2ZFB5pckMY8dJbXDdcYaoH",
  "key27": "34Tnm5119iY4Fta8Z8MZcTKyEp7UF8xuG1gk62DqebEwG952XfQRAecKMxSvKms5VCntbJEjW5vpHgUvexHPiZRZ",
  "key28": "5DhRqRjPTvAgMu2C5CSNvt4YAsDiZyw2MCSoNBZ1zeRLLPwcDEVEP4cd27BVSkW4o1QqKHc9Q84qzFpaT3xzSrDx",
  "key29": "7d1cucMwV2AUJoH49Gzj1HhsdiMoLYnwAwKXjd2j51efNpkqBQTRzsN3yspD3wHDzDL98ATxkjv1LDegZ8GyGAj",
  "key30": "2ctwHVBpGYefUGY6PjJ3HWtXi2PA1cx6zswq5qS7q3idE2gqfA3pRT7oFECcQZBmNGritst4HoNQTJTpHfdGWEut",
  "key31": "4Q8ght1JBaBh2UyVPMaJrfyGv9MQNLx6ezfqqLX5X3UE1jytTtcjPgGMGLvCqQ4XyuSGQCo11BssEmqF3uh7E2NS",
  "key32": "3jcJVPyJZGexHYrwmrmvq8LLhX1QMAmRK3EKnZLDFrQ7CDXbB6wt9g75xVpA1c37jTkDRdTDYNKi4yTreNiqcACz",
  "key33": "2WUHfQUT91R3zTy6BoUVwehGue9oYrRMTfFHC8oh1NK63MJqcgdWu3mHEU42358X9qVHGzA8tJG8mfvAswrAW4FB",
  "key34": "5eTdh9z2QGRDedJLHSE7XEUnF8sthGeKr43qPAMP1Thv8KTjhR1H7ah4SoY5Gv6LeHZLEFZF2ZeBZLeypDpQqg6P",
  "key35": "2Qfd7nvchpTkdRk8sw8VGpnCV5twoTLe37xjWu8idudLLRqF99sgtEAXF2YscFyrHVje5Yp5CDC3qr1EWLMpid61",
  "key36": "5Q2D63JQn45qaLKL31AZdZrSZp9bBYUX8d5hhFXmc8MabNUk2XiMc1xem3VVkUTn9crZ7EeBgCXkrE9HmY7pXPZP",
  "key37": "5N3F9EDy3AvAGHR5RdM6py6jXEkNBBx9D9P2oFomEzFKD56eKPAEfpePxKZLxb4XuHbgA2GMJSbDAMcH5wTf29mD",
  "key38": "3cnM6SdzSeT28wpuSYgSLdQrie2eZ45T7LHKMm8maePyaEEQ13sz8zgUx6srMpAddtvcX62Xz4gDNcfofLBB2s3y",
  "key39": "2JpS1jPbna1DUevt9gTcPR6eVyepcYNVGwAKfcDXqhhiuxU2HsHQdBhrGBh4dEDF1zr619oxQ9fJmRe3BQydfnfZ",
  "key40": "5NbNsN9BvmQ9o7xuwMGME58Ko4DF8maJdA1HPwnR34ckrPNXp343acjjAA9e1pXbJ9MCPmS9DuFdEh9QLTjfe4n1",
  "key41": "4BhwTaTXWEyAHqmH8PUoHvByH3eAzhLcqRWAeCPWUqr8YBtmnnEgqoKDDnutfwutcSvWtS8GNBwDXtgs2eFsFqSb",
  "key42": "2xXhiG2njjfqaCn7STDYrGaJbd6FNXMoxzZaFSxPQeoDdR1km9guf9WoFFFo7Lyf3i76GoYXrbsDSvHQLfeXUSvX",
  "key43": "8h4rej1M6mMYoLap6mtxgET1tG4EQ5j24RDBekWTvSBgfWpYUowzZ8ZZD1KMsksm2QP2inEJQD5o8vewgB71fWH",
  "key44": "44s8ZNCHA9jxoPedxs88bqJtHceR2XqGPNVbagfuZWr3SQ8XR6Ab3br4W6MeTo5HWXFp8bVnP94EgPUFaEaQFpb",
  "key45": "2C8AZy177ZCRSXbLKXnLHi4zKP5oZLX2BPNgEFSU3fxnA33b5Qg6xZ3hBawva43t6MkoWTskTYrwD7CtWsCiatgx"
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
