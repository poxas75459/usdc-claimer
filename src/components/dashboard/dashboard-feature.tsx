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
    "27i9qRoPrJDgKNBBWhMLUd7TMSyaQLk3YGrpBbqR2bdAzAtGJsfBfBNMh5ACaKTtvnfxuAzMqH1WtPA8cSJ3cLtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47zeXjrTRwQnZDsZNFCGAULYFPvyeT2JFEtTREjUGCWZZRoTtDx15RwnJCbXAyFdSocmCTxmW9uiKuPGo3T7MBEP",
  "key1": "2LsoogqC1CZm68eAxsQCn1gLMxSs8nbjSWibcn48ferTzivvMsMDMB8UcVvSPfN9y3QRSMj9EtPaw22dAGboK7RL",
  "key2": "2uvBcV5qwef2yzE312fTMqZA67BRKV5sFrzopc8ofBQFGoDnqFR31maFHofe8eAWXdfxKn9QwNwmTDnpfLffs4dX",
  "key3": "5b1gYBLdvYNFbR6fmGPZxeUBFfY2NeCWXAASAnWBtaeqJivDtKe3yDySQ3qKjdMaWVU5LomUq4Y2A3d1tBh8UnWX",
  "key4": "7W3Kd8wgLw3f74ppqmu8LaaADJV9iqRDjEmVo7gCCi6GvHsnqaW9L7P3GNJTQAvweLadAQVxSW452ydL13723oX",
  "key5": "5s8yCMJtfXn514Q7mKJuyKE2oBZ3nFFTCogj9bXWn2ESFsHQ5G3K1KRV3UAwVrca2qoKEzYrqcDAtKpBfLQBEhGR",
  "key6": "5vEqYmUeNKYwzyHSebkc4EuquVyvyKNMtmPqvsnxZAPTFWigQaZGV58WyGAzWw7t5MtCibDN31Ncb3htV3s7zNJT",
  "key7": "q3ALozcMTRf9dZTDR9SYMf4fupsWuKS8ZczWcXNmspSNCri1ay5zrm37v5xY4tYVEwE1Rf2FvjSUwvDXaTpfqmb",
  "key8": "3GLVacmXDfBjrAUL9Xvz53YDHxW5QZppjUkatLkkqWzrdCtMQRsrhEAg3TbE8PGiD4XdmT1uWmGci9EAD6aEp2cf",
  "key9": "4GK46H2pc3MQisPUkfddWPDkswAkyjAmfWqv3wt7a9fTchEyi4AMFnjpefAANayugddA2LyvJV5dfnJdNNGwVYVm",
  "key10": "GuuEiUEJ3xNQ5wojgRdMieax2YNEwrdy89HT8QXTcJXBvGeB1rCC4ZN97FT3xYf8fHrHmg9SYgPDCjcTYcadt5c",
  "key11": "2KeEKMu4hC1XxYVqJpXuS6YouZWcLiPnh4vDf9RWWQTrvnQSqh1WqJjTBMNG6XgKrcVZEHwn43zAcKNLPzti8DgZ",
  "key12": "556cAaisGvNEYXxwaKD5y3TBtv3FFa6bHK5VmwhZmw4QviyqhDo4bVXT5TYxLncqnp9USLBgMzRweZt6SNunnHUV",
  "key13": "xBmtQTKUheAKGiawRFsuMGrAWuKYWNEV8UcoUVG1fQtkacnaYzff5vboMAiwgbWCE4ZQa2oBL3itcxfcHVEJSz5",
  "key14": "HeMeRcPQNXkfMScMf2kRMVEWm5hGkWkjuoGX92uWFfApgxrNXLoStfyYnboBUD4Xd6D1mSTBH44CbDP5SBANPZ2",
  "key15": "495N7fnEHVWMu37MfTA6uVDx5sTsLTxAw9GEMCA1LwqowwAKxkXXbBWgUjE4hH9UGtSVEbEmp7sBz9FXEDx6C2ZF",
  "key16": "5k9qK9ijRxZ4DofepiE3EwUqQJtgHQ4nwFjQEsHmSrLuPZUpUAyx4kW13QysfiQZnyBzugUjuf6gCvN9pkMJGCDh",
  "key17": "2oNNTEK3rgWcueoaQyPEqASeE8tDmZurkmC6ZGmHk9GgcDRXn76uka8eSEYd7T8Zy6WkpvaZfM7LJ6kmskdATSe3",
  "key18": "35ywR8MeSWXhc1scd6z6km25u9CXUQvxfP2TADDKTQL51KShwoEQuc6R6UEyQ37z7UJPZ7f8EUH3sNHtnbqFLLrw",
  "key19": "2CtUcrFhQ7SP2jV3hgMbdaWzs3yykgR3KULesafUvfJXKo89Z2kmeDqQWJnRnTdZTicnkA7PSTT6xiCfrZoMVgFo",
  "key20": "4zuesYwMDxGLrgCXJqKMg9p5Gwv7LMRdRjX2EnmcMranNGozX8cHb7igdjwyZ7Wpm8nfMmdEJ9sYAkD7tALxf8iA",
  "key21": "6LNhZNPvNxcoE36RmNdY4nw5yvZCoXSiHU9uTZ8kaJXMrWDwTEpYXhtbiWK1z5dLvcn2FR5mxS74T4aJ2jrjAJ2",
  "key22": "26pB4DZ2VXsoUGTzXBC1bDi7Qt7YSR21Rm9JdGqYodJxhkS8dZ3FQpM6f9BV9gcdjKsk69CgctaTEvE3tcjKuSk6",
  "key23": "5WvWUi9KTegM4eyKtCqHGCBm8RFBPCEhGi1XfZ7KB88Yf3pSL1iSMG9L3uSQw2gASfbKJ95qWTjE12G37NPZbdH4",
  "key24": "5WPGwYPXLCJYE7g2Jupb4m7kLpGMSKSup7Pb4Bb4vhxzgThruWe3ApZMeJ1DwdxfE3iRyyZ6yBkSN3KKqZyXaePm",
  "key25": "4stZ8oB1Tge2yrxcUckLb8sF7bqnc5FJB6JCy6ACjZw22md7WGvNUHkDrj2AVixojDdrwSYKnrmVuZ7mDBcthL7d",
  "key26": "3ykXhgMYd2NbX56LncUS1VoG4kouAGKthYFfUDRpYs11xNdxHdmUkxSbdp9uz5j82wVShhLJeTT2bP4coaN5dvJm",
  "key27": "3JNR2ZBDMCJugzjbs8WeLdWfe6c2HvD3yFRDiZ1XxLkYWoyakDxgd6WZ3AZkgnnXfFg8CKewaKQ1rDzoqdPhKcJ2",
  "key28": "3ddopZdJo3uabyuWYkqPV3GeQBB66dWdgDUCABpVAKaeiyX638xtLPi2LYTGKUjZC8spihAsvvc64KVvp36TCwkz",
  "key29": "VQnXhK4jbcQ9GoYUgj1hPbimR1YxT4QEykC8xYjtn3yKpo3EQeqwcVWFsvXbfP5SJWxJVRJuGtKZfKGhPbCM6QQ",
  "key30": "5Kvj3MKSZSbzgPW91WEZ3qftpDGS4Kiw5G46cZ7dZHdhk5u6ZJvsdxnh5WceC8xo6GY1ZyM58dDEwyMX6Z3kQ7b9",
  "key31": "3XYfrpNiPuhwgXZRL3o87LPisiqks2vKXQmYxTULdqkjh6MBT44kcDy5ecX6ssm67bNmEX8yUZHoSsfSGgFfA9Hu",
  "key32": "28Lg66M9z1KEvo5QPCwaWAUfoQv3gFCXstp7fUCjuTQRSPg7VdgmTR7XfTF3rqq5weZYuFBSa3XxPTB32tdrFL6d",
  "key33": "3CYX3MALDbXhKE53JAfDLqgN92mxTJRVB88kkv1k3yGvh3qN7ktMXe8aR5g21ntBcnnk22KCVZFNisHVr77FzzZt",
  "key34": "4jsDmE5ymkZDzXmuAEksAZKYX87ZDUWZWbQW6NgpPBWfwEnycdJJsfnwPggLkhDeh8eCCAa3V48oKF54ZrMfA35b",
  "key35": "21QWR3Vsr5zKprBrHkRmuXooaaz8B51rqEUD9N32ATLoiAmR292vXQzT36JPanUi7Ccxac3KZhtr2oyszPv9ZCVb",
  "key36": "2XtFk8hokLSQT561REGtuw7uzmF5rfW8jfr5LGPP3uZNjDhkTKPQFp7yii28sLjEtJ86rthzcp9fvrBFgMYzZyqG",
  "key37": "4Z6xPAfNrUDV2EXJ5hUsLTdaGtFP7tap3RWiHFAh89JQVKTEDTdrck7DihC5sfmGiSt8gr8hmeiKEPA5hBVMgA83",
  "key38": "2zUpJkC1jBCbnXBNJWd9cW69MrtuRtVprh1H4M2QTxHeL4xS75XNPZUmpZTLRDvNMDzB5jCe8myKVAG9KGciNVMB",
  "key39": "2miWG4SNGgDQmEPq62ES6CXCvrVJqyEha1VsGv9KVbeRhiEKy7ZxYSA2oy2Wosz5TojWF7s7RwswuBiMfC3qnej",
  "key40": "4he3TjQgMSCEVTqZqyZasYDnXx1FK4J76yY92FsoRdtmLKz1tdZ6wQeg1ePLapw7qhLp44a574fxm8w4M4UB27Y5",
  "key41": "58MPC2Ew8pqnkkuVS1veQG2XpExRQ8sf6QdXC4y5fqn2hNTzxs9sDsLo7hUkXbDBvsC48J5JfNNtC624UhrjLqYH"
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
