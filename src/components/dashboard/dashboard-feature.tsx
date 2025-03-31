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
    "3YnrTE74QDL1ao8JnKqJWv8fBJg7TnmTmTzPm9FmANDQfB2YKowfbZia6ahYfDsLAKwAY5Dj4rQ9Jyk8v3w9PU3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TopVfEDvk4aLNaejh1X8DZYh1WNFcrJYAfeKT734CPG63rzs5xmySznDBzxYYWHHFFKD1XXSMpJMM7QjSRsV5d",
  "key1": "sUacyG62X4rdt8G9hgwo14AfsgyMNfG2ThhYHPxeoySYZHwocgdkeSd7rbEKhfKGpgfjQiLD1PwTQEoqdPXFsfm",
  "key2": "2STUEPvWBPmJMJW6kpcoRox4qeQ8nH4gy1SYVpPobMErsNQ8Y7SHGnC3PqKgiUt84TieCgsBRKnVHB7Dm1bvbDJb",
  "key3": "651cPuWnUesCUryPJ6rZyvLyVqL5x2UwmFQZysaReSdCUxnYMBcMQ45Yq7XF4tRevdSdBtZEFi8J4BEvcChXSsYW",
  "key4": "5PrvMyB3hfWc3Wagw7y2uWkWYt3hWNdDFVVCiEWmWwZHfZUxwikTDPuNbzxiXxopfWpqvvwMguyHR4f3g9xDeo9G",
  "key5": "1VDahM5aFfDQCsKwyrVb32euCL6fcBnUo557oLKMALdvYrxt97FGpSXSsueaqeKmgFLJxbdNnNDiJFd7tm15gnC",
  "key6": "63wnetnLKH9hgq86pwLDk5CxBWARgTTqjmg46M1kDdGVfqVKZ9SE5LYVVeJkRuiV8Q2T9SpXccvG9RFZBQoAAzRu",
  "key7": "452MJ2qBw5brJ89TTCiG9RxaUZGQatnYT6bQeXi59B5ZJQWR3zaH5YSCQmwaUcGagYU6Hhiu6oNmJokC7vMryeaw",
  "key8": "4Ja4UqgtfQgrSZQkSnCBX9TKMWHWpL8SP5uEtXL6YmSYHQUrQXjyYLpAfxCCsKDAhUncopLX2bc6mXJeFRpbQC4K",
  "key9": "3rdVERWSXV6HHddu2QFZhQRtJDH6Gki1hFn39ZNMuFnsfuwFt4D4RrMk8LEVYPWWkqyP5rj91zuu5zqFu27AQGzj",
  "key10": "4GTaNQtGHyEJ6B1uhn12JYn91ZzkqRWG6HdzdJQipDU91wA55N75MFbWvveu8o1uLnatCZL6QtgAedAiPndPqxYT",
  "key11": "5nBoEGV2c7VqeMLRy8jS2nx9ABxwMghFkoP5WMUHvrghXbDNQtJEBeFivcA3YcTMKZjnvzgtCwWHV1stNSXAE1x3",
  "key12": "n3Ejpp7fxVbpSqys7pFJFVN2qozAGik1QM2DLxTRT81brung3mqYKt7SwoiXdfJXen7Qq7YNHTiqLxEYvePkm7o",
  "key13": "cP3nwtKodBaBxpEW4DxLro2v97iSfKjMm5X2iiN8A6RLYuuApJQLxyyyC2CVpgjzWnu6yjA1Dq6Q4YePhkw1h1s",
  "key14": "pdHtxHUKfmaUFjiGZK83i6CwDA7vqsYiXB7PNJLXU2YfDkcjog3QKc32GfpnFyy4geQ5wpTdQjmrCneJx6x5V1W",
  "key15": "3oGQF6yWwD85hUK1PMzHaUqDQW5iFiaEoRZVSVJYdjL8KGhH5PkxqVWrr6m3GfRJADVX9sUsX8EK9x1mHYnJtwue",
  "key16": "58gsvciqLqDxZ4szgChtnfuNGQ7WquaEbqepXLYp47c8SbGHidYWD1nX6ouCPXNch2CXcFjgp9P8zY91fPMnxEBg",
  "key17": "4F6vhcyrU5DdWM4wRAWNEwXNpBr8b5sTFDMFws3qGUj7GphGPVuaN6S8RHLG4Lee5zSiDNWv1xEUrCd6ED7nYdbj",
  "key18": "3BM9zdF5nAGKqEQfZEK1SRGACacYiwJe9dB4XEoFj1ZU45FJgQ7hfS7dBkTZFCExJR7uqaz1oQYJd6QyaDnqy5YH",
  "key19": "3rA7vq9MkG1xFREv5NyNRp4d2tYYVxp1Gg6XTDcJsNzJToSvzGgCBcWCKrwvCHcWs1PqRqUoqEbWz49CourrxGHp",
  "key20": "2ZmRgD4VZdSjoqCdomJPRjAoCvFcs4LGpayheui2HMGtTxXeATqZFerQKECTQi983eHQRJ25ic2G65QSvjkyGCyJ",
  "key21": "59ZFUr3qsC1uAMYNqea83XR6dwKVbgdWc7pBPXXoSxspQNFmfZ5oTjY9uPdxvR6vF8ZUTT9mRLHTMg5nmxaokPUZ",
  "key22": "2QmEsoGqvZ6eWkwYC8Ap41yXEWoeHkWvbUd2TYA6wX61qemnoXysBkcA54oXFjE1UnYbkDGhjUFKqh95Yh5eb1fw",
  "key23": "65qRvAEed79xz5A9ARhnqfPDjNZeobmJsP6WHmuLyyKdRoPzXgjvjZCZD9KTWDD24fEUC2qnBBVzq6cJdaQGPRnZ",
  "key24": "bnZ7W57oNstq7mYCzZAu1hazm5MgRUHqMYFaf46HvnL67C3hgCZWeReSFZGAPF2vqPE258PZRH78cbkSkixB9VD",
  "key25": "5L6FnJ7bnMReQrbHr7BDvaXhqDMDzFi4fHbT1iYKErGHWvnLhtLT1uYMxXeGm8m7d1BwwVYRfLaJGh42VUu7X8bx",
  "key26": "4HvTCCQ6Yh7ko3LX35ixEkXEzhNwp7njN3D7YwAgVrN6YChPQYoMoFL3hL8FeTzGrhNnQbzHKbkw2XXByeFj58u4",
  "key27": "3g8EvFM88pha2vBwSzaDv3orULWhNGiK58Qes6GHtqQiikE45VC3uW8VGHaXvPuSfY9TBnfDwmEGb6NL1RF1aZgo",
  "key28": "1Pbaf1XwHsB5w2jryi539DhjFMyk3jqUzaHqZgoB8NJYyw6bavruMjRLAmT6jNjUWsh3oiUmwmuCp3DNmg6MZUc",
  "key29": "3uPNtTez9rLLVpqp815nPweEVDEp6EBnroJfbaH1uhB7LUvjiCGMQL3xLQ6jDsEcdFFYFqZL8MPeiobtFcX1JKdA",
  "key30": "45SyE8FbaPS5x4hEwh6WLUYTJu1o7ByJsTW5kL9Pc1uusp87NA54Sp5tYSmJXSgGieeGGu8vXU4bGk6mKBinHtUg",
  "key31": "5awr5Wn2rgWfPLWTpZTp3MjDyQ7hWBkVdhy6WhGitmgRmbrSZAT1TrYyd3TVcoJMtgvsJoReZdqT4a5QpM74xwuK",
  "key32": "2eTa6afMNcCvuh2XbuBmAUPz2kKKQ3kmjfCJ6ESabpGnVdN33XUzGQWRaeJAAaGZZCPwb2pSattypv834iKWEq6",
  "key33": "4sphA1ZX942Nbt3FMmFFyUvhJwzs84aPpScrB6UWXR2EkKax2woqEM2d4EUxbWQajRWkmhjMNrYsKLmhShABvno1",
  "key34": "BHaZS756PZxLVrP5LdToXEi9TDA3bCtHccxjj7pMZ8C4m9Uc2M1jiuVpeiNK13qE9tfuRFshXPN52gQrThWXtZu",
  "key35": "2qqW45dvEhKjh5WbdW9XsS4F7g7Zjrga3cdqr3QpbLfeeFAVRxiNk3GX7wf4Gb3TGiZsbaTSTmw5zJS3bAd9rDRY",
  "key36": "5iEcs26kNQ7QfPWh1WiSjAuJt1oFgHSN1PNjAW2kTZ7qDK61MoYmZ3ABhukHQJ9fYTuoK1J1pKR8sxZwzs2yqCbc",
  "key37": "3c17GmCzySVAgJDRmj4aHna6Fj9aj3sWwxCBCtRFJNmokv5YVos6SS96BppSkpKuExJz13QX96ZnQmPnP83LNwGZ",
  "key38": "3xr6fc1jL8n8otiQb2CS1hyRGVE5otzsNQnsJH5ze1DaLmXooERPZ57Y6A7gEiu8mtScjqExjvkFbWtK1LkLuM98",
  "key39": "UMYkodkmNnmHVGbJQRBkNaoVYTGvxjt7B9y3SroM8Q5G8eSPRX5FGbfngvs76cudFSWzhVY8KiKZ7J95FAMw2P3",
  "key40": "zPGdapoUNavGBasdLy2MYdmFq9nfXeXhCDsR74TrxQQEj5ZY3Pa4mj6o4yxu57nmhHXyQXPLc8sRfEdxBgseQN3",
  "key41": "2ZWdFpundytxeA58AfupeSpSPJkYjjnJ4Ez19Yr7PZbYYYEBix9hYxCcHJieeUkUKBpL8FfNdseZGBGTtaFBDjjo",
  "key42": "5gwjEC9gkiiQzSzaMXn8Uhpb63QkaxmsunKBiHsJo1v5BXweR9jsybUbi2HLYy53d9yVhUpS8kf5ViXRPJiT5guS",
  "key43": "3dHoKv3QYSvwHvrGiAkiqsoz2KXAtsi8qjae2pPacueSKGAkNDHCEkTwapfPZuJzNDJ1GRpqNE4Pq6Uop8pDnMqw",
  "key44": "2NrHKddwToDnoZ1qZXQjxW9KxPRovoWqux1Xns1QXxfvYofq6JyzoTXccW9vLYFEmY9mpxbfLxvLbQGewbAFD6p5",
  "key45": "5XcuSBKv4GJaJT1Mdbr4Vr5s8NN1Q5kecB6MGwANRgQdMUofJfju1XaUjrstJEAMdoTFRTnsir5Ch79Nop4X31JR"
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
