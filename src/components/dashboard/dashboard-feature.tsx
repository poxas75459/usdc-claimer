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
    "5iHUaMFsySoGN72NWk415bj2Vp4Skr9LHWTdk3xx8gd95b3WK9L6M16KYJZCHUUwM2zALCUgJn1zF7ksGXhegbGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XvDnNkmk6fz8jN4kiuxBYdBALTcQMWa9CpKxnesBeFT1wo5UmPyAAkiPnYy3XVa2Jc38USnhuGgvchQczMCHFCc",
  "key1": "5Bny23ptvnEcqSsRcuVVzvu2xtobCR3QPS4zHQqnPL9sYpTwyBDYkwDNhovh3X5gfuft5vZXBdHKneVr429C8WNU",
  "key2": "2wQfprpZntJZLvLwjDF7xgR8Dd4xpLWt8WZpujBMAdRqqBVgcxSR7fAWZQBUqz84pvZwkZPRqSubVd9mQYv52pqb",
  "key3": "5ZwDQSsMCNTiZtXwbKiYH3zh1ersRnSmge4uBg11jaB8FYjMqdTAsjU8zsaPFEV1kttA2YdGKbnRbatvwjnzqZjB",
  "key4": "2ruWWrpxGovBXdZiSyefkMQ2mCvsvPvA1JStGR6gv7Nyvi2WFcY7La2nHCnENJQJaMVgwoLk29rNMPqn4LNufr65",
  "key5": "3n946Z2iwvYEUNkvMtzFe7LXLV5iedErsmbrCMM9E2zHoVNdxEUZCbKBVCbijHo4Vm66skogUU2DXFxhDvr1yhPM",
  "key6": "3axhWurqiEGbYhKhrsvckvRshSPXfqPfduhtiEnwwuHtxZRCMKCKPj4d8m3GWMUq3KHHaYS15Nxa6kdfJjpt6ngP",
  "key7": "33bCTMRULpPTwmgN58xMbLFmHTeb8yE4vABZiQvVi9p35i81qE13JEq6tJzbu7pAAc5Kwpry4BY339Y1hRUEFrv6",
  "key8": "4Dhifg9GpGnvG8f45w5DgSkb4gErJFSjoMyDh7QDN2rEamfmiRyB3PQ7RWACqCfLWJwcsc5Ptq6PJe6kD3n58qyg",
  "key9": "4peTEwGthV5hPa6ZGRP6FBUrGud26G29u3LKdShPfp47jt3PxsDgnCA2eqGwfU7rZHYozfHhGrjVLmSdPW64kWxP",
  "key10": "56TBzRQWwgQ2sq5hHsWzow4pocdLiiagKqRJoaG45G22TnxD4irkZ6b6Vqp27bADNCx9cwugBwWXH5GfV5kg4gDT",
  "key11": "5xvwm45p5hQLSFZxEpkp6XruFNZt7nrjuHMEumy3EQ5mi9ZbpXygpa5598DqRZbKay5sjCDeTfkCnEhax2EfhZBS",
  "key12": "2ig46juX8ZSkCXXgyFa9uSLUKTGsXc1roUQiVi64ahbHKYRXopP7KZgeyg71gcA85ee5tSAMVczMYiKiUAVX2g5V",
  "key13": "2sbXJg7FsCkpgr39cFd4Hxzh1ELiWn9Qv2EnLasenp7UgEkL9Ca9WdVbZVUmDfHzGmbcoFmo9r62mxqGTgAV5sjv",
  "key14": "3ypKVWdXTrz8VgXPZbBrLGN1h1J7m1gHiDK25ZWUjSr3DdmEABPjqVzCSVAvZMBSeEA52iEgPusm9WdNotczxj2Q",
  "key15": "diDZFD7Bny8Rif2fuogcdo9SAkKiq5cQt4UHs31bhAsmW8Fdxy4rsiGrh1q1N2BepzZdfAJvi9vKGpjSWPA55oF",
  "key16": "AF8dE3meSyZciutYWGLjfMkiUCH6N3yRt97ZQ1W57HzGmgpnbfi13YzuNLC77nGtk4ZKt9h4Z2QcQ5yKPpKBrqL",
  "key17": "3ymEEQ6rW3Y35Y9UYRyQHEhEanw91w8w3pKSSX2U9fT44otgA5CK67Hv3QYPxaYNeeZ11WVy3zeaaXmhKoXf139P",
  "key18": "5VcKGT9PbMpWyTEMbcn7iKrfgc7RsfZ9ezFTACWJADWE2uMBjksXRpuZwPHFgAfYuZXmGgGpmAWVpY6j4CV7v2zN",
  "key19": "64KRQgSHuUFrJwHL8XMkN1qGAy5sLBhH5s8uCTccDPNfKUT6syHxShXKjoc8TYfmM4dnZbHGCSVTPpT6jGbJpjym",
  "key20": "3jJ4P5w1sNyNskpfsLMRBR4ZGtu7s6DNepWiuDLZNDqQ7RKBkPsrJryAvNFUDXHeH2VqzswXKe1Xbp3APBhUyigK",
  "key21": "3v8rh4DxatwtJiFMTWp2u9Ua93HyFf25S8d8x8B1tBJNVqM3ZzZW6rHQ3G5bx5yLEFBbumMjh1nKLG47Kh3FasBV",
  "key22": "2N5iJrEDdv7qA2RiMY7ZbnAiQr13m5jybCPh9msu62tecubF1WpQ7ZgfrGsrVKCd9mhiubUomJhbagHdgiYk6jhi",
  "key23": "5WHAEh6rcK6uXHCL2c9mew76Um2GSApqgc5BRyw11HHcBJWEEAseYuCY5fr8rV4EBBQQcafa45TVqv57KL3Xz4xA",
  "key24": "vRUdsyJp9YEY6XEFS9zF4c5YfyHJtXZY6ukdXHv6hwf7AcAorrutZFRGyjbj4gLaDqJvcoySYfBPPXcfB8tD2fF",
  "key25": "4JDJ67PvSBHWnxc5pGLwiLc4nKbyv7c3FdmQUJsEgtMuEHCU7uDNJMgDrTKSssXNGwTkVogYCmaDkDpymRYJu4We",
  "key26": "xCxLsC4SxPrSKZfzjyGCvCzygVKmRit3ynfCzQtW24YHxZDvqLfA2f9Udo7omQbz6sxWtbqUuta4ebZcH8hypoS",
  "key27": "4XKPcx7juMRcxn6yUhHZjLB8FjdgPX6fVbzj7daYapT1NFkoEUncTsXALxqeb3tBtHF9Cz3qgeA4YEPhBEGWgetF",
  "key28": "4YLLWthuVCT9Av1kARNhrCRxRndwKCnNzgFvTT3WTsD5Xk9y6PrRptw5QGXfAas79HsrypH62yKcKhjJSwRQLz17",
  "key29": "3SdirDRT6yQeFomdBRJ4sFBkFbXQV12KJEyaj9KmFRNdYvfax1H3ww3KCbGWv8ZDjR2uudTv79kVAHd86aDk2jBH",
  "key30": "33sR7hcTVrp87YZbxNKxrvUKLFBVFX8sTRirny9W7h6wp2rGUVs5M9ZDQugvzgjg95VPJ5Ny3nS9YryUZEsMAcdE",
  "key31": "Jk8FHWA9WpricpbisKtRw4PkCqHTnzJrTwGHb7nqKo38J8LvLv9AcbCKLii5abeVEef96MJoyx61if4yWasvcYH",
  "key32": "516GwN8nG1HvWyHrfZCL9iin49F7BsjK5mrarMj8HpADJHdWHNACCsoke9CqsYTbBfix3sp6pC5kuHLQ2rHGBHNP",
  "key33": "3FeQbk3CrteN4Ywk8S6H41UrtzHUvJhjA4J7D1NaiRA8YFb25duxM66G4BG7kCMWGh57mkDz7noZ6ibdREPMMChU",
  "key34": "3mAwhbrzKyNhGAh21GPvi1kPxbeh7cUyaSiGHWjUoAMRo53EkpfoYwxWmTsdYtbRYshurkeuLX8N6EcEr8PSHTM4",
  "key35": "hKza14i9MSaBQEw8d1aHS65YTaoiVMBEqMdTMp61w8PHqRVxcfhRxPAhxvVZnKKXgTEDLSwBLKDBQpKX93iRaKQ",
  "key36": "3wqwQ75AX8PStnoVRaPbvAnCRXPm14e48ibP5uKVnj3SXZzLr1iyiyRY2mFNtCDyNNPLizEXfWrAoGr1pXvEMA7E",
  "key37": "2nXLzYz9UT5zx9vAAFKT2ZsbTwvyScXqaXRKoovs8wuXzscV8DBFFrHFM2hq7xLXd9EjEwLoExdj9LgFGeGrEMjb",
  "key38": "3ezdMVR8N7kfeNgCwbMuj1yN1B2psdc8DHZZmptAozjYkztL9V9YPcQ4XC6d9j9xbdhyVo4WrLioh47WV9Ypj47a",
  "key39": "SkVrPdrbE7Fx4Z4UCchgsRHcvmfD1xHPd97B1fQjitmeQtAZshe2RzHiDjs2AEmJpzKwpnPTY2WQEKS3tMLNmrL"
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
