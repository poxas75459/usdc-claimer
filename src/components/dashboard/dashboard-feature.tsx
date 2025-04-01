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
    "4YiPGhuBsmXTv8D2ukbAbTq7aNW4Aj7tzfXUi4CFijAvsvz1Fn3HgBt3rbw6QV2xnuPoGprhTH7Bi5U1UpM8gBHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kGrf25euD7UGiYVb3rsfhSF2FoVE5ZeJVfrsTmBfXXN5iDvaWgdmCBb8icdZr6Nfax8CDXDtGjKVuUSE8KoQN9E",
  "key1": "2EAYLbpVodF78czfwizjYDtmBAhVbSzTNKMBoSAvB4abrtZvabdvGf1QZrt1UybSti1Tmhm8QbaHVvAiEmazLtWc",
  "key2": "3sX4dktdiSmChr6ToiUiRqs7qU6mnfTxmtKjytNNmuF9jsRT8xDsTpvnR6sVy73myHWodvUhh4cnPpoYTzedc33",
  "key3": "Eh8CMjjKU5D7h6ABYwbCnyy25r4NvwrntKREYvvhtho2bk6bUKHTHgwsrQ8nsn5SUjkec6R81MRvvAk7vbZzD5j",
  "key4": "34ZEsesZw9HRTakbc8cFcyKfZXdRqhEYsQxqXmAz4xVJ7zywS3X5U5kFc1h4tLGxLnXjbB4bpYRTYUsPC5BZLc5m",
  "key5": "3EFUTQokcZUaKBjx1jJuGMhJkfiQzaMmSzvyKt5GRBjRjtY9HDSsSZFsn2RWEuErDph4TywkzguaoNNU7jQnmnkX",
  "key6": "3FrmYsJQ726Da4FtmBdzjaa3Re5quuZZKMuBuLvLCJm6fyGu7ZXKdbz7tAA15SCSUFMJXNs1nkPfSPNa9a4WZMfT",
  "key7": "1o5QdcVEsHYxdN3fHUsM74tEG3PHssKcLjTpiwHLQxx7mNmZZYaivYqJDneAuzpfPSS3VZWmgsmag18wL6ZPMZH",
  "key8": "28d35HNMmfGTnAxSffHg4ubc2dbNr33h6yc36iSAkncHmZxVnMNMTtaeJbZHgKy14LPUgewpU2DuTFcBctH1JES8",
  "key9": "4BYbses4Mw525EktUWeX87C4wZYRs8ctxD7FJ2CSrv3Zot1644xLkDRLnqHTVzSMinKiQuDGGGUt58dsPTyxDoE6",
  "key10": "5QuZdtUp8g2aGfjDg6L2NHP6a3QT7NvivPb5P8uuBjwBxyUD9bZf7HP4bJePGTWNXxJVGaEVw2RVLc531qSh35Ei",
  "key11": "6LPhup4ZNfx3SihE3YCcwBaC2Ukwj3qxhjPLr8k8TkcHhQfSM7EDiuHixBccuciGJKXM3ADbBsJ29grvxLMaQMY",
  "key12": "2pZsSZQ7vCxrjwfJaaa3V7D4tHD78yR8rqMpuqi4BvbCZyanGyjr4pwcKNcUPY9KPaRykarxvi4Kdrr87GTu1eGS",
  "key13": "YC7ipCTyB2mQe8fjzbd2cndBt14Hj3fQ9HsTcNvhxg5fX4guL1ySw9Cj9XZdo8vEjeWcE6Q5pszBjsQFuzjh63E",
  "key14": "3kBQdpe16mGUhkFCvHrrBVUntLTLkn5RRuD981LEEjMz6kzgzYhpXTYUiDNS9MgcrSyF3ejrZd93SY6J5TCEzy5F",
  "key15": "ycpuD5jYYxMPHBG2k5EGV3vwV4PsjD5xuR6WVFzNdbzhHttcHTmhPCwa5JubyMrbk82cZh8owiY3gA27cyneZsv",
  "key16": "sCBkJq1615V5rjYdxxSFfDYWwMUDkvdpR7LJZWhsg2Qo5HZb8rAYErmvTZ1k8fR6Rej8ixwZBBfTBMoPX3TQQ5u",
  "key17": "4ys83CcFJcaSnLWAvpocqVvvc9ykFjSCKqFaUzch9cU7DV9iUXyQW7PaANLwVPNhWVMzoQt4DyBPFyKBRxvJL3YD",
  "key18": "25WtH1MT1t45P9kCYemkibaK6BWD2oNQMtRhPC2eJDdMBpuAhfjd2fxNA3pavFDMAXC2iboz6M14fQB1Vw3iWKYC",
  "key19": "4xL9b4FxyrssUCTFsFX7icrP5oDv385zf1dkhA1uYh6j5uHpFn4iwoVfob3Jsc3pBiJEPd4RBcWcSmUFJrbAMk83",
  "key20": "5z6j4v2LELRkmKBnTUPaPEfjgDimTevfABYpZHAkvuqvyTp1vVn56xdpRw3KzZR3Buwbr4CbNPqBLyQ9KKzXKoKd",
  "key21": "4A3QFVfb9SJCBjy7Y9LwLJKMfiqGZwyBuqmvY2rpwZFJhLEE6kyuq53dygUCCZ7ftXUwp1gks1iuzPWkHEDkQA4A",
  "key22": "2HjQtWZFMdr9UG1rZTJ3E8U4tcqrSSSDZJHHDzeu7rdzYjG6rHT3sV5Zw4n59egdTLvHADAKByJ9A6ASFYdTw9CD",
  "key23": "NHZ1gXYYxHsHiJ8qMP666BAVzYzchxRsugKKc7tiyAwmJdSYZopShPJs7QYFY8iuJhX1TeW3vjAsu31S9NYQAUb",
  "key24": "3mKLTEVFW6TcTZnkXNNNDWnhp39CUoVjg2pTUn1fwkCpskGmzvKa5pfFT2icDVcDWec8vdgzw5HAMBxbNzd1Fmty",
  "key25": "bBMd2d46XjyZAxTqMX62BAz5s5Yvado7GCC6oKZBVxqPBvbhWvfqxiVgcXnw6tPfHmFnd1mnDALaQmH3vd9zZNA",
  "key26": "3ANGQZJBfosK6AcYNEvko8U8krdVeaTfcms1jbnJ2acbxbaikVY32QDWCGqLwcdfmWwpMsVAoGWTLUTvK2LQL9Ut",
  "key27": "5aX1h98aKZmyGWjaEeeNQ7FZHTKpTsiZKavKkw3sgzb4GLWtWq4PvRfBu6fJKHWRRPq1xPyvHkin7RMrFXkmfPDG",
  "key28": "jCa1zyK3ELVZSKVaWmHbr3X9ZgrU9ZBRVHkPALUWBV1RWFzCnWMQ7oYZHTCmDC2sKmfz1869rm3L7FGr2adennQ",
  "key29": "575ygKv292z6S3FAnYrgCnNAtfsrD8JkQyfzhX4E1bzNgykKatzLrFjR2Pm9qFXeLtRor29rH98m99E66up4M5i",
  "key30": "LjLADbaP3Q6m8oBZQgo2zqeprcv74VjYddea3c7kiocicNbvG8216dhx9prwAVQq5vUeHEjPvSvdjpbwVm4eoHT",
  "key31": "4USDZB147RCaXn4SgwhXggZXVTHJLYkkGaLYHmhWipTWc7RAkt12vBeGiwWmiEdEQ82h8kiaHr6RSb1sEk5JVmnj",
  "key32": "2HkBxKacFXQw2kwYNYbDinr6UhfpXrMi8aBa3EPHMj5B9DNo4rWiSZXTngxuqv7ERM5muNGDoQ1ji9hf1McBfVXL",
  "key33": "2ahxDmdd41hVWkEkmdSSQEB9TyPJr7tuC4QMQ5LgKT7djb1pmnTxoRhVACbQWETa577U4qXzyxTmQP8AUQVMXs6T",
  "key34": "wvim1gRCTmCiBrCYLr3PxRyDrFptXAnoPHgyVid9SARVXWRi9qEgdwEhYZjMkq1qKVRSKNiPw1DWme9JVr2WEzo",
  "key35": "3PhLW9XJWNYidajPQeY1jf8EgC4E93XrHsM1CyF1c5mLYMZxoiuHZJr2p8Kv3V6EDER9nv6Gxi4z2xcgqPL6in4z",
  "key36": "5N9MUzPbJC1PUZjFHZ4rJXPiuAKDPk2mRUmubjmMNPSkvtVxjPQGdxUNU97ZpKF5432RpQH5ZxCQiX3tVEBD2pZs",
  "key37": "5v3pw2uswSatbRxDkFe6pW6HY75ZE9RhB9MuaYeZHQeZFuSeLXhZAfBuBbt4wMtB5CnhnxnLAomV5QJhhBaR2rJm",
  "key38": "3wFx1TbcczVgDrvQxLx24PMZ54QWiq6vGg4WoFuEeA1MdRYLRCLCGnZAibzZNwChEvujFbjXRjN4es8yKmJKfVJB",
  "key39": "fAf27cFDuAKeqMxYaXNPkHKEsU29uxMz2bmxnRvXDkuB5ypunukm9aHtyrsPPGhntUsXFRym8KKam8e4MeERmkT",
  "key40": "3psmZZdnkLy34i8rYCTjJjd76AZzWJTNzQucmugqkTaJSQgaKYYLDwS6x2vsbZELc6ptc2LhRQA7YtmtGwPVM4H6",
  "key41": "3TwsShubPmSy2bBXp669HzofZt4DvxEGzG9mjueoEFftYQSqGacPqoooecZNpv3ttzPZSM2WDhjRMdG29emPxKAU",
  "key42": "FmWkXtxPwV3uFzaecXUAJauQdQGUgUPVtAjiu28xzg4zHpm55SzyRrfP2FD6wYzbTVkXNyPjJLtRgFRGmFjm8Ec",
  "key43": "fT3mReYg6Up3en7qXAUFc3eFqACJH7qdT4f3to3ejjCbdLy87wm5cw8JepudYQqa6sQr6qECPcwryGa3wsHve7U",
  "key44": "27xsaVUmBirMdJXJCGojvGeYGsbbhEsRsXMhRConwcv89vNS8Lk6SLfYg8JC9ooWF3CwkKwet5GBtzxyo9V5sxy3"
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
