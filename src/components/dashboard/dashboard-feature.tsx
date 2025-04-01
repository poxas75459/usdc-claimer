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
    "5w3SU81aFDqK1ixDCUhBiGwJVsF7GPBgvmBvsoskQPGoTLGd8VsPPVhSy5ENVHSPLmQYnPWpe1hzkndejSPU2spm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tm1ESXNZhZUjXtLr9Mgz52LW36KEpY5ew2AXgqjZayFMWQRgAZqD236kse3RcYXvzP6uKw7njEYH3jgYkrjGRBu",
  "key1": "3nUDGb2MZHQtzjeqGovbGEJ4JgeWYLPqtLDfe3iiv3vG9cgJFd3KgFSEYNC62342AmPTePkZJ4yPqzC8VtDnpkPc",
  "key2": "5Gw9HrCAhV6DM5BkNJhyT4DSENhpQAXrg14CcGwzeaDdyQPkUEayUZ5QkskYKF5Z92upqtFiuf6D2HhdpwooiGf6",
  "key3": "4iiDxvc2KNgytrMp5fQ3nKf1xfVPFVrrRs1nwELuWphTMTgbJ2NEoJfv9MEzJEKX3dmJy3DH6Xr3CXtTfeWQsxE1",
  "key4": "28eAgtGhNTxPe7kNRePSs1rMnLhj6oC1Ri7ngUUxXJuwHLN4FKedU7fDY1dfDYZ55ptpQsZ6MJVnLU1Gxn2uJT3Q",
  "key5": "5DNxwMPgPENFbn4huU97RGzkucy5oJy8wdenWRDGuHLFtVmRZ8v8qcEnrU7UFSyDnd1HkAXKMjicL3hb5DGP5i3X",
  "key6": "3SaWZWMERXrYB8A3xfVK22gcZHPuCEnrpJJvSiSQyVBCKeKSBQD7kZuey23dGAwE19ZfCThdkznxq8NQB9f2kqnF",
  "key7": "2SoEZt8EguMGztBtz3WJekr1ujePXBS2X94QaDUsvKZKN2vyWUpxPZr2XMSWYfLLH1qR4ULmE5yT5TrRyaeW6g7m",
  "key8": "5VepzDoHr6BZjX1dtHRU5ipKwWauTA3Qw5KkdEoM1em3f1QqmXZTLGR4exfwPLCDD1LNpg3ZivzsKaVNHrRjPUYf",
  "key9": "3DGH66LJjgXc95GNomhBpvSKKUdpWLD1zUazca4cWfBQMAG6wRUyMbMETUGvHAcA4Y4H2bawT47vQkzZoEdiyGHo",
  "key10": "zJoKSghoA6TAEvXVeS7LmicrES6jGyaq38GcGJGpT8K4syEJd9TXdGia45V61tCvCUAjYZx2oNSBG2R9vyTVCuV",
  "key11": "2sZbMXgtbwt8WAoXDE63JGF5bbfZ85nvqZMWK6WeLq7GQCJhJZfwSGpsqaH2me4d1L6uMe5e4fDk3cEQNRdBdcg",
  "key12": "xVbhmXUARDqhXjyWzy9RDEw46gTACCmGgq3uRNMFCvAhG645s2youB4NYwwbbyFxQ3Mihemp6rkjCUeVCnAVXhN",
  "key13": "FMPaWFGAYDKpjk2qnjyJiDhnvYXeRBCKF7rTTgoGmvFhG4WgomBfuUBDhfNRgo7ut2x1U4RECqCJ1EMP8PHqpZY",
  "key14": "23AFQkGrrDeewNm2RcQpfEYL1r4KMsGkPyGRwPUkv1NvwGd9VE79W66piMXoDnj1zvm2eoZb5Lb3bTUJKWoefUVF",
  "key15": "2uo2eDpndJHunqzFjL3GuCMWjcUDLAsiGTLtQpW6iReTAALnJov534StK92JFwuaudzGNxMrUV1vtEEXB13zCMbu",
  "key16": "4rUK3nK3DawMgc8HL5x8ihVdX14hAaB6hBSmmfL4qr28oTLUEKSzRiSxeLLPqeNp2kdHibo3HQabbmNfpUmSDBHD",
  "key17": "5KBXHiR7ynjga3H4PE4WTbpQ3DEyfTpGKzp3T6UnCoBSc81tPdj1X7eTCnXjpDuqSYYPWepnCaJmLfrp82QxJfyi",
  "key18": "2iJ2FDCwe1FDDSzTksSgg3Cnyk8CWjuhmyEvhKf15KsUpiH7S2bFENhgNrzCBjXKzUbzKKyETbBuKbYc2YrdCF7Q",
  "key19": "5S5jrS3vxaewUC7q2aFbZYpS81vvbd9Jk5rbLrVHBqG1sewkwV3CeXBN8GbTqwwFeJi2qYtmgrPVTWNEvxRbxgVF",
  "key20": "2UJzrNKc32KJy6nve3gaQy2kohdhciKcSvxgEKGS225Yb7sdywD7K5UmwHupXYJqxEZ7JN8P4VnPF2Cg6wjhAtpt",
  "key21": "3viEj9C7ACaMETy3oGreoHAwpaKz3RjXXVBndhHJ6k3AZ47t72AgdSB5iDMdzS77WhR1GKRW3BAmz8rw2hxyExFG",
  "key22": "3zF5j9RgpcmPp95pkxCrWQTggM45mKvgVNLjAftW2GYHpoP58MZe8uV4hN4Un4NKYghBv2rmPNbfrQwjBuWJ79dm",
  "key23": "3kDcnicNXxMjAbxk2idJEesWobqa54CCxwqSm4zVY1auBjWm1myTeZVVz6YYYjcRBWaUvqLDXy3Nw8M3KgA4CfSQ",
  "key24": "WPARJXpTc73vMdyak5WTL1cZggxq2Pr54R1CvfUKmHH4p9wEJYMPmqQQPEce6aBbNFt5XwzVhWCnCDJspZo2NTr",
  "key25": "5T3XM8ciYRMsCU9mzoE3M6YnHSJmsM7UAessfD3Yv5V3NPQFUxneLEtgBSiGgz6ZR6L8NLyy7WtywcV5m5AMaY7w",
  "key26": "4hLgb5o5c8o75Nx1sY8d16DeumQN9HhRWSncFDZ5F9ePhz9n2gmN9VmnXcTxzMQjRtj2VytqGdJ6MGH4K6bZNb2T",
  "key27": "46Sx54nBKohD9E41WYHhKygPSKYNCi5dUgRA6tWE2AtZL5rTbeaCakTNH7pEPQSBUbXGUYD8xWUTft3yyBnTWrQn",
  "key28": "57HS8NUpMJSxkq25wwZ23wMpKbwM14TLKDpLzKv47h9iABukHbc4SnutgADQa8CM4gzFPrt3L2kbPMdEGLEGgBvd",
  "key29": "3ULzjiFKnJvnWDaZm9txXLop6LUTLkP8QoaYwifDrnaf13Ujd5bci7y95a6c6dN4eTd7NANuFMaJSU3zL3U8CchZ",
  "key30": "3awTh5K4iShJtg5EyEqTtJQMxQnR4HCi9fJxwagrSUw4xAn8HugWVBF8Tj6zELbycnVN7PpNHeNhVZKhdQnDv8qx",
  "key31": "2fUGUy2R9p1RmZPamFLVVJhpAwQpMiSGj1pRvCvdjbzX2uDHi9jru1YRmscc3bTztVu5T3pdgNk6bY2uHXrAsjb7",
  "key32": "4aTUP8LUPD4cMaU5Yf5RW55cPX3pVVPC8qvWwJitD5fDBQu4ticScWLnKWXgpRxNdkeunCCuKWoeCBo5Q93L4QFH",
  "key33": "293nHRj7e26jLm23XSSMQ614TB429tygmErGPbQufn8ZMMvcWU5bUXDSvfFhTeaE8GfpQHSEDbPS5ZVZXFNQ5Psc",
  "key34": "4H9thGbrEj246mDD7QaqrdvKQ8pQ43L4LzwZrGrfStBi6Z1tuEB7gNSzNifES5XkSaEg7vMvimGQfyGHdo2ai55v",
  "key35": "2MhYthM8sGR9q68mjjoDXWTxyiyhvP8Fc4psakbdBhKptx9jaMDwdLn9PVKqn3xNMWsQD8ziF6ASA4WMdaxiG4Vo",
  "key36": "48VWSbRCAC5D9hwWsquBV2fTDW63mmEUweHiKcujUWNE5k3x7wE3tixkSEB9yPMZaTnGTmtifZBMVB1bUHb8Pdkx",
  "key37": "4Y5aw4Y7FAvGf3w6F7NtsnoHj3XFRrJu7ukA4cVVR3X5EjfDFgdoeQYpjUzFnH2BoTcAJxjSFrkyTbEjtQ4fn783",
  "key38": "4bfWej6gWAs6jT1MoPMSFhWfKzsrhPFMZdnAjcUceJXvvaBwhV539j1KXKjitJVkdUN2RF1aTpgNuVFuby1w6Drd",
  "key39": "2myNDw5pqtLFL4hrxnMEpcVMNfrb5zMDNkwgkCGbYT8sGjjwy9NdbauccK1hw5B3ky3BnJqzWejdY7tsqjoZgN8e",
  "key40": "495GEw3Rt5dfRZMxZ8EjUYUWrBQNorWkL1C9JdWeAjXRDd1RVpsHB5wi6W5Tf6nxZu5hB4Z43rWaX9yEf1NsQo8v",
  "key41": "3cxi1e6HVzpvPwD9LwkN88fb5C4t5nVmWMsHgmvZWtQMYbNgqX2DVzzq8KSbNGDKza1JuWPEwAKW2rtygMZ4G66S",
  "key42": "22HZ6GySZzcnJSYC38LPCJyGBRi8UxAv8ctv5QBjTdR6k8F6aJhWn5miHcgZa8ZtWwx3Fc9gDiwjSJCAFrsfAHhq",
  "key43": "286mXr4NJDvhe8yFf7auJx8HZmL8BerNYphVZM3v38maJx9ige8in4HcT1Zyq9DVUuGh9sqiGDx9C18Yz451tbqk",
  "key44": "54i5ir1Uxr8BCCTPXowuobqmMoBanrA8ktxNJQz7tcTBDwcZ1P8mEaUc7vwriAf2C1kV8Zac9JcDQrjNJox7nEZE",
  "key45": "5zqFz6QxEn6eupvrWXFBhp3ruBXZdSyeD9rGYktr4ZfjEA6Tezc7LATtLp27DrAoQLn2iVVUxq5sxwNZ8q2F3c85"
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
