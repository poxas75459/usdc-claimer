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
    "4Mypv6tED5TPYfifS6AsLojejr3TH81h1hHRej9qHmEva62yFs8kuWVjahhDqWkT2GatKdTFQdPncemsbAb5wCVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bQcKycn1tXteczVMAFEcX13CUsFJib6xtEPUnuuUZtHkGd2Koes563fH6uPP55zqYLvj2kA2ptL64BCuCJMzvwc",
  "key1": "2yn5kuHLzkLe3neSQEhirmaeemkU1Bad7vHPcYYYfpvDsZDsAKuUuFAhgfc4NEzwebcpMqMWiytpXkRGojkodoxo",
  "key2": "2yVmvpdaaWyY6QFW8My6g9ByyU7m3VPq4EVCBtyinAD9YdKn9PwC2ymwXiLEeB2B2GZmtKTeS9aA7pSE5MgdTWdu",
  "key3": "2qP8Shn7tTLA6e48feDeMtPEJLkie3y8ZYYHE15RHSqT4cMtyd3VtjvS4rrHTvHv146DiUav6FRPYLVhAbMA1MD1",
  "key4": "7ZTXUYcEz1XuT81a9u6vWte3xfA6UCgeCeSkN3TnzuoBzSaFngKxAr3RTfMEAj1ocqcvNfeDUA41oQmsDmG72Ab",
  "key5": "eTMq6cTUSGDZCoKaBgovWGVR9G6RMHicQZsFP7jrqBiqsoxeh1tsPrEnJ1JjdVeczGPZFEpPH7e9tWdVVQYQdsn",
  "key6": "27zp6YDDyP95doPRxYQGZAPxxvRCVQYAfi6pRijULwE4naVgqZKpRCtABPn8bMbsmQvtWBeqjxaw94MZYWPjhxxf",
  "key7": "5MHY7a6Rm5A4EtHzSHxFKgf3GmCLTdBRx21LpPw3USWQ2xQjKqKgAdPz5UKAVhNef2EADxrqvBkoMevqhLkU6gK1",
  "key8": "5hDJy3oXL42iejj1WYMbcJmmyggkL5yFLh5v9pGXCsTgamjqc6DADXucBcptnDaMuXKLqY4L6pyXGzssr4w8Effv",
  "key9": "3ds4osvy3Qa3PE7Xepmgdcx17YSTmfprxfhT44wSNx2m33nHZWsRzPFpTQgELo9a8MTngHQEhTeZY75o7XEyEbJH",
  "key10": "qtw9jCG4EtzGvBh5tNeNRgifuRWiwZmnxPhCq1okY5hEEpvbTuG2xuTx6gTJJMWeYeUhJ2BqQcYPXZB8CoQfBsH",
  "key11": "4J3TaqPsvxgE8PKTh55X7vyPCGbYWTSngYmpL8eBYzJRK4htN7MvbESAUzK3a4bvo378p77Kq19vmAVnUpiqFPP7",
  "key12": "3uGwtUHZTbm7y3TSDgzd6RnKThRcsTJk3CmCrgN49aCgjMtXVvMwzPSkqtghLhN1DmthQmWigoSSwYufcL4N86KH",
  "key13": "2dP8eJPLodBePpYCjChq96CXhHNYS2pvmDzigQA8HbDBWJ6RywR1SMq8Xo4yHLPhKpLspEyVmv8Wcxka1rcvhuJN",
  "key14": "95QYpXuPLgF1PjPgPATjT1yo4GXg3BrAZyEhjhGmN9VAWki1PWWU3hf7SN6CmfzYxd99RxNVv9DfRxKqpjN2WVE",
  "key15": "5dJKPHgfKVvrx1NbpnZWibA7F8bMGrDYuDuf7R8rZTpRwxTHsGoAeyGwRwqZFyQToPxc1bmFZYERStVwfwnCajPr",
  "key16": "3RoiJyCG2uTUVrbAKcVu1DLoEMWZNQTzyEh4oRMMoak66UApXVmhS6jxVZGWNxDHUaCKVNrkvMktJBEa3xeDofUe",
  "key17": "zaspjiJE33QSvsN4NG3hR5L91uPYsaQAsgWz3541jfsBgsweBrNzRTuMWFT3jeh1RxDcPsAUShnTyn2p6yopkVC",
  "key18": "3McMvSXpYek8Xx5ouTNC8YhZBUJCVzxaThUKFsMgrZGPNEwx7T5dEUTtTaEXNMztqs2NXCyLwyaRLXrRcn4deeDK",
  "key19": "4tK2DMSnEaF5vfqMjAPR44tGQTQnJ56MHqc8aoSs9k3Tm5mp5i9RHrBnwo9fipxyANtShssnHcVXqhWCwPDkUAJ",
  "key20": "5TNvedB5MCooGoMFVmjAZonrCd3PSiTgRp3TVBLZUKf8jhuX37GTp8hrkc5mau6RYVU9YYaCMHB6YmMs1XaLhvME",
  "key21": "2yu31kDk24Fdg6X7Ch4AFhE4c14o8yNLS3WFFNPxrdWsV6ya5Rd9yUzC9aPsifjKqM64kDMcCe8J6KkwwyBw4SUZ",
  "key22": "GAzzvxd2HCMuWtqdGQgR6mwFEvBot2F8zs62d3qDeZ4FTb8fKACsRNRzecvNdfaNCjud5ZXjGFHWEFV2q9eK2uf",
  "key23": "5wXFu7NMwLwo7VTUVSzaowfnEuuwEyLX4EfN8jF1ck3fH43K2B4Tx8HZ7AVgPZ4amiqMaVE4B6nkDxapsdyiKRVX",
  "key24": "33aacrur1B3fgQNtUmNsXENMuNhEDcnV7Qy1NAc5yXSVm71pwuYFPzQaJpF6APXP6rVhSPQBSNe54iohj5mxLNbV",
  "key25": "61LyXTEzeFrEZczCJR8g6bREuQ59qYr8ePxnCQReP1pkLxZMP1gzZppTNYxNmqXC2V9J6FDuko9hJGysRsNV7Lmu",
  "key26": "DMpp6vgtktk8komCfQepamFTgyjkN4fR5xe9Gh81jhkTmiwtSSUdPiTgFoKaxtZiheHerrN9NfViPbqszCuZdsT",
  "key27": "2CQ1n17G3dYZAB49ZUPRa2eTJ7yDRRzFLmoWyCgDC61M8LeR2o91Y1GAbvi5yPN1tiWiwQjGpUpsdgCLYVgb29vu",
  "key28": "3BigmUEbyBkwM6KyMbQuXEgNCFktQuEzEQVUahuxSEAxh9qG6M2PwJZC234Pdf6MgTSvAT19HCNMW7ZZ3ik4NcYn",
  "key29": "8K8J2D6zkB2zK6zVhe57938HgPZt4UzEiY2egC51TUwYsGpNav5i2yvccpiKe6TKoQynmztbLP7iocLSVK6P3hc",
  "key30": "28JFbhc7XkcYEvmhNEiDXiphdf3zR88KVgng2j8mELruUrknVjj2EZtyGKP5otX6pkQjfuGKMfDapL9Wkafbh9yo",
  "key31": "3EqJccPKFtbdgqYqDtW7KUkhDRYsVYnYxieeXMGuymZAmbcUFgwpysPzg3YJxtzaamBbPqPduC5syYDcrTRhBsQc",
  "key32": "4Gg3KKywAZKsi1fZzEE6JfmVgguC1cxjok9mtwbV2Wnjn9ERXnCXGt3mBiTmyQ6xmaVKH7QqMbY66Tyzoedwm6eU",
  "key33": "47xGgjEQCvJgAVBaGot5ViYE8q78hVRnMCz54zZNxqMiaqTYKjuqruYrupLBLaXvTGRncrVuh5cw7T4KP59vyFDL",
  "key34": "2otUNNp3gtaDvL1Ryj9ZuuYKCbRZU3K2XxxvwKPcjSP2Hxk2xhnyrEBGkDq7VE3C2BLf3zRmsraLqi6ToAX4w9DK",
  "key35": "V4oZ2XKhj3tySmQ7XwTZUvsMVtBgmNJmVaQkAjT97svm6GL7UNkjVgt42gWoWFZnnVVZpb66qvgR8RvfSbk4Ci5",
  "key36": "4dSxSmam1mJcdpBjZntSWWCUdQu22N2faBNrNAvoYSXZceZcQUJg3Noi5TFbmJ1pmLFMGfVJBsCDkNWg8aaEEofL",
  "key37": "2Kf5pmwu94eiaz8C3MdxKrwe8CNwDZZip3taCpENfLvz5BhcmV6HouWY2BgobcjFUCNbKcxVMW9GyJQF2Zf69Cd5",
  "key38": "2kj3eXZRPd4g5Gg8iByt78gVUoRuYf2ao3b8JUZkkLU2XP22KyW3Rn2FmEBZYJPMnRt9E3EjSwhgKtvWw1EKDJG7",
  "key39": "4QspFRHEff1jidQNFdiZrAkL2TL3fK5w6bFYU81Gam21QQNcaDs9vbEnyFM8ubBHCKGf4VopL8CEkSnNGtMuRUr4"
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
