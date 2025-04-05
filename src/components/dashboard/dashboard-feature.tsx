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
    "5Jc27DBygD1JhR7tDHSyYci1FeUKP6hoQxDqDnVQStb1jcss15KGKwGZx1ftbqnfXeGMxAzKwcni4JxXz9yWevoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k8EhGjTAGw3xsUkuvxHtzi516Gwv8VtBzeoKWWJBBRAQ8ipoU7j2SsvNWESamWEWr7qNnXabhevGEzQB8SFK8HX",
  "key1": "64nb4NkjjbBjdCxwSEuqwVFXTCLZrPATkW4jjQdC7qwrWtgxK94b3AU1Giojv8PfAkRDYj4CyhKRUbLTGPNvxXx8",
  "key2": "Ju17W3AxY8CckbtMUYPUV4N14ccnz8waqf52LQVLtHhETEBH2AmMD8e51GW8ZBXfiUy4YEVNxz9ZZZfGtYAwY23",
  "key3": "23qk5LB61vXkjcm3YMCWeHkuWLC6o4Aid2hnJcoTFApkt7hwUaU9cfeK8S7YN9jh5y6N684Yw1MeazvqjowkJgy4",
  "key4": "5k3VuvtBa8RcBVufxz427bu3cH7zGQcFrWCvKZo14hmrPQshHK8o2U6xe24qiEbJFaonc5NBBqVUnZNVkxiKRi2k",
  "key5": "4A4QfspDVMoGNMUMwHoAkF7x6ytuLpZftAX7MgWNv3KtzKbf7gjdRroiofLX7Ld46AtFhQhuVSr6L2hnaq1wWeQw",
  "key6": "3GV6pw3ntuH6kRENKdFYiEZku5rRh8sYH8o9JMHeopZz2QW514KJ7PpPbEQbvVzU9tvEUnPfF5HdRD6ex4ftZp4Y",
  "key7": "CEVoUPqFiWhw6hccoY32Vt2GRPuAZugncyv7mMwnXonHeGQvNhADcN16tfyVU22VKZKAtzBp3fwADec95d9FXnV",
  "key8": "2jufwtxyJNYRzbLbEWbqFsqGcyWCrEDzBTb4gSSyXHeJob3ha15CSJHWBKkBwne2nMfYxSF8FFZsANiiV6fkdX4i",
  "key9": "3X1952fypXxcAte6xhChZzbTLiRiGopLLQy5jDkZQHisDyn753nGjdfhByZxDYtMEu63XEp26R9xBKuHN5AC9iVo",
  "key10": "31sA7Nvn6FzchWmTeENnb6SZQTqr8ANwpYj53fkPfQXr8TQEzmJVT5KdUJmSH8Qu6CDFuMmiAx9hDsV2S3LxjKT2",
  "key11": "3pZaRpdrwexAXSaCcruMSMTd4wGGZAbgLhbP4gPtfXui1DteTGXTvA1QUMKDa8Lijo22wCedv9qWfZvEj4LLcn91",
  "key12": "31gLCRV5zndfg4nvRAAgReL59Ezi1giHLyGDVDkxzerWkzSmfTUSpZYWkBe1EKPCPhJ1ENLCmptia6Q2zebst6td",
  "key13": "6q3aW1AkXiBxrLxJh5nbRHas82bLJyasrcB2h8PqhgHT7rQAX37mmrRC4VLPqgohyGNhwMR2jmr4aew5y4G2Ucu",
  "key14": "41BGaW6AypwgPbj9aA3x2hVKEdMwSzCBjn8xCdABiaj5YpWGtbjG2zgdvYWpEH7ZDoZ1Ljz3qkMZxBWV3TGrCY5v",
  "key15": "2fTpc8Lywe4RdYibvXb1CyaUgSLZM6u8uARnV9ouXseqe7C5ubGgT27NkWbVw6Lom12RA5KYKpkjrARgssHr5BcL",
  "key16": "3NissSkJGCPYMNJCiofoZqSQvCYRPaYZqACYP2eZVuNaVqsjSCrCXrCSxspHFKeVBRD7USvkKuAUd9ZNnd9yPvJP",
  "key17": "uZLC9Teen6J7Hd61YmQJq19ZsLSyQm12QQsPSzU2wVpjcX6BcVtR1Vx7f4ZpEHw8T2hNw5Hp1mm5VhtfoEeQFzk",
  "key18": "2uex7U787hpk679WZpXe4mC8SKy2sZkjkhXEQL1RSEEZPnv2ZKELecCmTTc5MgVXAnVCbXezhRACYFkwcnj5TpAn",
  "key19": "4RuJyZyMCoaBrtjHr5gjTcLaJovKSUpNRbyrFWAn51YQAZ8KVzDXz3Kuu5iRw2788qmVBLtmkRFEZJg7btZrWhoU",
  "key20": "52efNn7Wj6xvYHQjVQs8ycfKjdgsFdi8qzYeTTJvwFaVgjMx5zVkFtMNzWVHmYAr4vBjUhKxZzjpQwohsz2wPgz6",
  "key21": "2ct3CWJtFHEnj5yZ6NpWnKtr94XgFSyKsSfcjeveJk8bfJxyvvPTr4mQSwDxuPtddXs9FFV6TpZnNTGnAfKhDycn",
  "key22": "ZVgb2Xz6vdxiD6LpDNFjskACYU8FvZCw2v7pWTBS1CKeLHyaUx55Suy5Ma5ZAiHiKFUFoyLJD27yL8B7K6y9PLb",
  "key23": "3BnqTdZKDjBbzDESYBYevVV68AYF9guVxFnMnFjkQHQqjntFXczk321kwdkKDbMWHPs4kTGxWtDsB5nVM9EyHKHe",
  "key24": "4tfcFozDiA5tc9VoXpCVBcJccKMsWQ7mmtAz8ufh6GW5eqYUvt3pLXAas3nTkc7a2TpK6DYo2QgAYYDk4mDokUEC",
  "key25": "5k17RdhsDuoK1PRqxMQJyZQboEWG7XTPnZvY74riwgT8T3a15kpi5KfzqsAu5rrM8hw7PBVywshR36GJoyGZAFKM",
  "key26": "4kFtXBzM4pSvUbkpy1gdxEtrSj5DBRk9VThhL8FqCFNFwwiaXR26bR7JDkHMu7npzkFpE5WNufxhHJtGiasCLYXs",
  "key27": "2zSdF11AApjXH4vKF5ty42NiyKgjcLmfXRXG4mfL7osjkM294PecCHhaCDy6twtD7aVc4i3VYE979to1e1hMfe9c",
  "key28": "3f7KvBSLtqQrmwqXmWhZxEwZpo9C7fa3upkmdvbmtsnxrv8nKv41S14119oTVnhP8pt4M17npbX6XrFFrgrioEpT",
  "key29": "34B6xuZdk4AZ2wYgRo37E7Dyi3CR2DWTAsK9wcjmj4qpF6qwwKidgakfj96DtX5njkEbtE6ZhjWwZszmjBJbnVD2",
  "key30": "3g7UERJ4Bc2rF1oFFrGAv9o4CHamMqSkyeqF96ZL1jeQ9Fbs8sot8AASdruBBFdRnZ7UN8jx6NAnp92skKB92GVp",
  "key31": "xHYUwx73P1BrVYXJspNDR8mfMdwp6vg3RuPyVABDPBJCx9ARVJTGgH3AT5bsfqiTDwjsrvWuA1fmkqSZ9oLVtH2",
  "key32": "3fb2Hd7Bgb7rauZf9fmwrkqYjoQMzSyhMhHwj8nXwQAdZofstmoGJb2ZH7q5iEbiAdXZuF9rcnRhut8yRhmNM5WG",
  "key33": "4nW4YYQRQNuhdUyt8HijtggrW3fP5VWUTRgd6T5DZPMtkXnGAEZjtVyqdQ7UxfrPbM2JbysfUjpgyowBaxiiF7Sg",
  "key34": "4vHTK4zcpswuTMxxtQJEuWDunAdT1dVTfhEEN5tNHcE6rsXR58RJtP9JCigZ6DaGnCFev3tsJiZumu8Pkf9PQvun",
  "key35": "2A9BTfanv61d2ZJWSHSG6W48RurQkXMCb1pNarxU1vJLQpq96m1D2aPhCyeThW4iarsnbgynFPWsdRWrJddL4BSj",
  "key36": "5wMY3XMPbFyh9iBGBB274FudApoRx4mSkyDW37Cnhss6XWuVd2wvJPxUdNg9QCYNBTWqhxdLhww3ATrhKtSR58eC",
  "key37": "eoMYXL4hrbqE53HupHLLERgjNnvvFAsVSpDJAAtFjYtjDgWT797qpfeWJPiu79KQUhyjYJpeVJnTw3m48uE767J",
  "key38": "6ftdthb4BSGuFAgsTBvzZkBeugGpWuNfPFMiS5DW3xy4JAmmkkxpDWiBqtWk9UaRDYkRv1weRoRi42AU9qfz2HR",
  "key39": "2hYU9z18aA69VJTtXEVAcBh7yXpGPNdopi5DHUeCbAvZdNbnu1dDu88A2dLjFvmLCpzUhd6hNt2gKj4ZNu4duemS",
  "key40": "4iXjASx45gDizd84dhbg355gosa2tBakFoEmSX5YgvhzMann7a9im3DacV6h7SZLVz2mao3SCvoCWsaDDvpkvVGC",
  "key41": "3mE1jgtdUDyLvfL9kHuGFjYM2aK1eMuz2XtusQbtrPTWHUhqjBSYKKKFEgyT8fBkqxBxTEiqNRG7SngDPPTamydV",
  "key42": "4sv2bDKFMFYJSbXGQ2kmp1j9BdnR9zbqP7E5x31UdWwT9hVVrkFAMawnWUZNQisjWrvDzx2RAyUWDHwfGCeZ9kKZ",
  "key43": "47DxVG4aPAJjJeV8sCXouLtWP26yhpiEPJZJRzfAYVduAqDWYVejZwyiM4Zt7sXJrhvute6YKXi4Mhi2oXNJUuDD",
  "key44": "Ps7oR1judpBk9hXpyyq4C3VNiKjieE1hBcKqbK1j4q5aGjQ3CmyTWQ8HoNPmzNi276kVW6AVNJScSJAqsDW7zXE"
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
