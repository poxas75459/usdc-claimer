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
    "3dveJArrsfubdqZ154MhCa2uoqFk8Ws1nxrBHXMRacUktbrhBKNQeUeXLQk7QAxgvr1iSHaQx1iScikNU6tViZXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ck1e25q1F1JCntK2yw4dzDZBSLLMHCgZdemcTdftadGNmXfuvoTkRzYfaP2nfR6ze7j4EHjHUS1mHssHjyyyLg9",
  "key1": "38JRpZzqJ4cSn86LwKLZfsXU6jtaG1VKwLEXwMQxc8a7d4MC391QEKZp9U7yUqjsKoGDSqGgkdcYWiwrojHQaQcE",
  "key2": "4NF3NTrj3Ypo9f1ksYhBPoBdDLVtUFBpEq1TbLybqqxnfkV1TUeNzHWN4L1FugCtStUUEYjA9fS6MJLouQpPytD3",
  "key3": "C2PPP2mk15wwS78jEzEgXwi1o92fdHjXNL9Mr7dvE6zqx1PomJZvRmePXKYJqvmdPbiTM3FynxNoypD6rV9rQjM",
  "key4": "5SyNroHdnomrnTz8sfJmz8KNDyqGPusaZ7N6n6eMc6UUFUt3iqxZYg1Gpzb5SBtSthMoiNsTAQkcLCmAfeXU2M1T",
  "key5": "2zAzGHTzRiuy6Yb5KXLyun22mFzd4pu8Sjrt5sXjUsPnziTUVYQw5VcxJkGu7PXvEbkRBbeP6kcGUENDwi3a44rt",
  "key6": "JfHru4Nkhghpq4yd3bu5JfrPQNiXTnogdCpNe7GJnRBsozteM2VdqKSey668pgHkzYqyFBBTw7dGcPSKZcrryha",
  "key7": "43tpvT9RCEgvq61SFL36vZFT6oSjrkFicohn8yD4PrANZatYnfzFvypTbKWozhJ73Ng34eEvsVioqUXMgsJXVvjk",
  "key8": "57c9tF6piZKMu66hCHppAaE5gXDy4GUWrYn6fvPBRKSn6cE7Tbd4HkJ3pQqNz8t65Wy8XBMcbN7FMwKLYTR2tGNM",
  "key9": "2AfeHf5rGPEyj64FtKDzZVWgoab3KaSkRxs5yzHk4TrS3YMN6gXQJ1mC5jFYbtHQ6rHjR9dDtCv1sK3wGMZmrCCE",
  "key10": "2Voxw3kyuiKTdZxXo3AzfNEjZSTwh2PNCAvQZQuhAgjNorsyKtDtyyPeWbbTqinj3Y9pmFqW8FxUfB4vpXuS43JX",
  "key11": "UeMXXe1BSGQBtpZFC9nBLpWEpfyjPFYvZ17k6NzBVsTQj4M7rzqgoU4KpzGEB6Jv7Bpssqte2neqRTX6cQaamJb",
  "key12": "3qyJoXCSwn1QNJdjGkUpCuNF441qFN8q79LH3p8DVu4HZbyhBGwJhoYBtmScEGTBCos64NjqMB39RmynoquaMVgt",
  "key13": "3jGimHxnN6WXR7VALmf4tHJD6uDWEsLbsQcyqsy2j5mqcVyRTycQF1fzYL5hhdYgryCofyRJhx6xEFkmto1n3nFn",
  "key14": "UWpqTPU2Ljfw6USrSYVWpaRX4m23hBLyDFBBrLZsc55bB1Dvg2Mwy7MLx5WXYNpyjeDyw6MZ2eEk6a9gLcVLAXy",
  "key15": "4Nsef3DPUZQ5NMY9A9Hrx1wDPCgShEGJ9XnYV8WSW2WjiFpBkmgFhFCvgQgeg9HFQQ8v9iim9yMB4cbdootNpWNY",
  "key16": "2Taf9EURvWWKi25V5rtHt3be5zPfxevVoVkMduzJmGW85M7qxjbewZXcN8vNq19vp5wGyBdRFKELpzPFi3Jn9rSf",
  "key17": "58ZndLAp5BYcK8P7ZJqaCuG8rgrMCSfyq2xWVPWRR8K68RcPoXuvSUjuzvzEGJRAadrBSyiYxUbB8VnLY4rLN96Z",
  "key18": "2ADfXhVQmnaFKpbDrBXdGR5qphVQXdZocsHHa1Yrx8FbyDhpCZ517VS4Gy517vieN5wJipiBnPCZetMqr9fakmsj",
  "key19": "4zYDLe4NAffLx4WGhkykMTuqjq3PPf7azzbd7cHAEV6jEgEPSDZzouauRbT2S1C3XKEM283GGpiqaCyEvqVyiddH",
  "key20": "jtNtxcLTjFGFhPwvBAG3CWMjirCerxWFiUv8AW6G5uzbab8WEyYhsNUtaU86MQ9zEhhzN1D4qRrGEHphPUjTyj2",
  "key21": "2bmCyCGKhzKCiyqyuYMPNUbioyRrrfiUFV5P2xZVftoU8NukczRegEXEjbNgSoc6xJBdSxb7CJvw8Jtf6UqCXDVr",
  "key22": "F1ZPJQKNuAcyAgfxagB19vMiKqRMoQo3HG2kKYV9ztURGqS7QZgmeygc4a8DWHjFkf2NjcnbfHoa1Bjo1Pa2jFL",
  "key23": "3xcQV6RsJk4g5pThyrbK7mzXzizNpLuFHUFtoEcyoLCdkQbj76jbSPMkSbSaKU42eRx32LXL3nF9DpdPXk3pC48J",
  "key24": "438Mkw6o5tcLaYaThitMGwVcBWhXkvqgBLBzJhDfhkZQmejFSnZgwrSVZM1ied5Yiysh4XR7MAaAZzTHegQ9J3A4",
  "key25": "U2YdrXRCbf9UigrJy7m6DeA3HwC57qKRrne2DcS62MbvZPypyrSuq32neTBtjNa7T9aqao8DBxvrphTRzg9WTwF",
  "key26": "5xPAgqdSGYAM1yRmgdRJRcLba6qnHv48QdMMd2ZyyvqSyobpaVB69DiLCH3mfxnyZ3hHJwUSyz7nTjgPVNaaiHWQ",
  "key27": "4phGwQ6tpxMLzgx3krkMAqnnH8WnSsyrqvc5bmHrDLmxtVrSkzxKwWw2uU99qEVEgESYi9Y5SbgdDdhFCnZDPRnH",
  "key28": "1yUb8Sshy2hHEDBgAej6XB9hLHonnEvpf3ujpV1dTiGLBXmQuLnK7MP3vENuKA1yyemWvccK2NSBLfY6pPpMgj7",
  "key29": "55kTuCayEoBLi3pS4CLm25dnKgQneEjkNp1c7C9uFbTedjW5qycafP3hZPJ7ectNcQBFcQKdiMq9N1sxaJTECBH9",
  "key30": "48xM3ZPHZxKUsf7FFug1SkhnfdVY5qv4UoFLUEucp9cH2Eqzo2Vd1BEx89z8btyip8tnk1uDQL8vmPg393XrQxEs",
  "key31": "3F44KQ1qB44CVVfJkzhVf5siHkxq91sXbA6kyw7di161A6ULYNh29BZXioGBTskLo7wjt4xHEV85fyBoq1YpDQjY",
  "key32": "2sFPS3Zh8P37rmsK1h6rxaVDpaezgWSicDUF6mrSucgFzC7KDvAfWt8ZmvY6e63yz4SckMhev56BxTFkN7pPjxGi",
  "key33": "389UzWmp6a8x3FPSK3qiHxLfnXQEj7mH46Y6jWCgp7gJJcdsJrsRF1F7CKzJ841gcRKemCFJFb9SDgtR6yN1Xtwg",
  "key34": "ivfgLU5BkueVcqzwt98VAViuraaoUTwMuwBJhCWTaxHd4AJRJjKJ2pcNrwA4ZsXAqtNu5eDSrgbvxQoQXYU3r8R",
  "key35": "y8KTuqBMW8KcFKGYCGASQkZj1bzZuhxuEpHkpzUSec7xK1AMrJ9sngmHUk8U65SmCKP4QttgzZYhtGeUQV5gCB2",
  "key36": "31fnMg5nGFnwYtPXsLZT2ig9LDe9iemqdxcc41niubzc1NSHW4sCwEmDneVTVruEzQH9aGBUBnsYDKYd78at8RCK",
  "key37": "4qQPzrPE8xDJie6C9VAPHBbm4g2PbTjhfd3NfYPTUati2sV84eqDooftFCR3wSRccLcj9zgs4LBxwUbzzW28HNL5",
  "key38": "2ZtF97WgtKL97x6PzhRUSU8fbpw5geLEkrAUwSRGc7Ftiq73k2eP4MWTPGDMWMzvBJkGbK7XAZRCyyu2cUp8kABa",
  "key39": "2ciw16PQATtAnFQm58S63N9Upri9WC1bD6yFEFDjuFbrKad4GUGnjSLB2xAiymmoPeEhkq5fAPNKVgd8wQnerCbd",
  "key40": "6s5STyUt19XipHiVfQi6iDUDCBZR2HsDEFiFDf6vjDqV2bokkgZfXquxeRh2x4yQM5nzWJwa95ZCxDCFfpwSxev"
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
