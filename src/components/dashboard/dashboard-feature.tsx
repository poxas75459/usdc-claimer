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
    "jVMBWU5MrbyaVXEKkf7fpep9PVjsC1oGje6h3RVarycYuwvBwoeKpx7PSFn63HBSDk9jUB2jc8uGEumwBjAFJzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AihjrT9P4ywBtEYh2QQShJDLmw76r7omAoQdxpgUGBmGUVYcsfusAEUqYx4kjiwXpwcK7575rs1JWp1dxCawBmx",
  "key1": "2X7JjDaQ11JM5qJZSp5NWURXcc1YQoaAHa2qBSCacyyfxiVWxgDPen6UdbLD8s3TbdS9VrNjN2NTqANvStrL8KzP",
  "key2": "2aferqEcmDvQ4Ge6QTFwFFbzPecBSJVbqdzk6mh7J5W3h72WGtoXzLBiCoTpnWWTeDZoPQofNksKVsm4UiGj2eur",
  "key3": "2s22Ct1Zj54ZGeZcTP2h4xjUPdhRQ4i5uUXgjnqz9QbDoyTeBexhs2Kp8DUdantjqvLXHrxANtJKa4L1a8MMEJZS",
  "key4": "2KeuHbbaS4MgJCujX8BPA3DdQoRqFXpVje512Cie3rrFGH8vTPDNaT83gQaXwhzhYukNVVvPSddSMwsHA2AaPPq2",
  "key5": "62eV3BYN1NJmc6VtCSUQ7Mr9NkZbmp6KfYGufQCeX7vDzw6KuWMUoveYjEx7JshN2cC9ahdx4HGGH36Snd8RcYfF",
  "key6": "2o5j1vA5WkSudbkNafr9ngQfx6xk5dh3yZG32weabKuhHaLiRNwGwQa4utLuZ2ETUSc1uSJ7vqw3f3SKYp98eWbR",
  "key7": "NbAPhxQpcybQhg2A56BQtTDjdk48539bRNTdP76buB3CPjD47EumfmFBeWRxuJAZabKDKGjXzsEABCs6wphk8z7",
  "key8": "3943sDoits51Yui5nkXgELntkd46vdbsDAm7vW5rsiQUaXYRMko5CkajUqYR4E9gCkq9aTZ4XgcMaKmdKpGajAyY",
  "key9": "AaeM6qb1tmbofZ7ny5a8KdtJATTzY9FCtLCxgGFwAGDAutXKKZKYpa3mbveFiyXE9t5Mxonim5wjQFYqr3FnSZ4",
  "key10": "2FdJmgUJ7msMmhUgaD26nTwwyhfKq3uM68wY7CE126GTJ6Uj6SBNiaiGBJLhW4vDmPwbDvjCVHk478kZDahE4WnY",
  "key11": "5Z53GWDXCH1ZPRuaQo1bcbbkV2beQPCwKRwegTpAH2kgJTKTRSmfjfMxMQyCE3xk77CL3rCTNWM51nVQwWCXePy4",
  "key12": "4jPFskHi1Fk1GHiWbu5gUWzGxohRdoGQzXemPdQh2kRyJZcgM5Ahhs45s8GgGFhQPY6u8LeQhXceM3RJ3VSBjcNg",
  "key13": "5irnJyKdmSJRHLoUtGYAP1Gk35Vz7ArTRx9k54s5rpE73kay9kZiVd8b6tcjSVYkTcwfPsxXTRMTRZ2oQydErtSm",
  "key14": "2rMYts5ApTte1xRxijjjpsHpLDE6NdsZyjqNkeCdk1wVc2vwC5UXwLapS9ZoC3JcyqvGefXjhfxshWPPB2EMbXo7",
  "key15": "5u69Ug8o8rNksMasfon7MnpuuG8NujHniVJfBghr5C1K9JHMwoascmbLsvDRMcVsvPGJkHpsH1rXEeGkUX2THJvh",
  "key16": "5DKL2kZNdCz1gmoZgGpkcqL5sMW6gHHt886Pe6QLt9RwVi299hJY1F9WdrSk8YCurQDw5xgmAU1ANpLRzKjxQbkh",
  "key17": "2fzQZsxp3kTwwzMTihQddeBDXzEyYA8jeBgtTJQHEy1GYsTtR7r1NhZcWgXsjE12YpbDrGaG7gzQT33TU8GaVT5c",
  "key18": "2Am7A7cmZu6TnWS7WJsutBcp6SUYKBnzgqbfGTUzgzWv96CafaQjQntM4Zkmcw5cfWLs6r2BF64Bug3SW84pTQfw",
  "key19": "4E551kXa1QiRYaiScWfU7NjF1d1WzXvLkWd8H7p83M61v2vhAk8VkuQTvXPvLCW5UxvMXWNDarJvvXs6FPQo1PEi",
  "key20": "4wuLVrm75FrU6FLjqK34dPYdwhToTj5K9pnnf45T6YLpyhxY9zhqqTCn8WkxsaNwyD6PkqY2fVzMxzxLXM82rJwE",
  "key21": "58bQ2nCCDRBR9FMFtC74CcxRQNGgiSiRfREesnCAiyqYyRNDgWzbNanUMcqhXYWx8jpRc96gyztQWycHNWRwECdi",
  "key22": "55LZdkbBp3gq84jCroVWhQryiSRFuPAefV98YRbRBnTPoMyrGdRQvJfe34x6Q3dfR4PHA53i8bCqfdKVetkhe4vo",
  "key23": "2jT9EqN1X6BrTBJJ2tfS4w5cVswGHDegBfgktDJQRanm7GMq1oBbZUKwoQCoNFsf6rbHByy437yFhbeg61ygz2yk",
  "key24": "4zZLtuS7zSw1rAgx3FCVEf44kvCxnKFdCKDhnQSXD2WKdJdR8md5gZptTUqV3PovtLT9eQy6SWk7WL3ZTCuAiNFR",
  "key25": "3ztUXEQ4G5ELbnqEnSdzVcGLtYbwAmYPAY4de444j2agF82WRGhUGoNiHehQ8Trdx1AbX6eFL5SzynMh8o57o2v1",
  "key26": "4cSEW9ZfMzSmxYKownpbziR463JPd49E7hg6B1CtUWYcbayxqwDhZqk2HcunXM8AAqXhAAs4uPdVk2VgpftnfxrJ",
  "key27": "nsN4gZPGZmF8jFBtyXpT87Nvb34LS7qTcXmxSG8qd184bz2qnwV1Y3Wdowxt1etbX3pPZz1fiSzL1WiB4Qzg7Dj",
  "key28": "64yb4CUEJmSu26s47rL59Jzv6X7p2WhB9sbmSJLrEgT37WiUSURE8YSpb9KdDFRtyhRm8WRthjmRJZar3qZzincv",
  "key29": "4xrcnfVFBxeYRq82Dch1WNaU1gNso4ciESpyQmW34yYCGMinvrA9XgviukeAwEKVSNm4Zyt4xhDUEDqz2QyXxwAw",
  "key30": "45yoh7BDLqgrHr6gixoXVPvA7kFZ8DDPuYyfJw56z3JAbupyKXybbuwf2h4SUiBhPgY8Xf4DPKwAqz4E62HCftRo",
  "key31": "49metiMheDoAeLeUJGp2KYtEEBsNFMtgZpUYMmejHdayezziPR2Q2bow8MKtEsMn1ivKjd7DpeupzvS5rYmwytfq",
  "key32": "f8E3WN3RPCjosaGgBSZpaY3UvgeRiZK81fj35Xbs4Zafg3Dmbpk3k4MHbHUaxVxKtM5xY3UJLGPBR2dfiPra2BV",
  "key33": "2vbNBBPZHEUtsarPAihHYHHfPKDtiCzDZRJY9BmTQmuwdJXKCHiNcCdaX6jLjndGchtgf3b9kfGbHG2tsx3wTSh9",
  "key34": "3zAR3Y3jeWW93rnE7FqHwGXNzHNwuS2Hufn5M4AGUqdfEe3pLK5uLNYYwRYDLbKNxt8ppHpcndvCEgr6eWhFykQv",
  "key35": "5aw3hCfv87fVmEBmqpFuxREBM87Htsh1vBbGve4gSeRx38Wh9Yz6VR63bDGKTPEarofqyxRozpAwsrgJpdzPDKwX",
  "key36": "4qmiovYNgRj2ZdCRT2fzg88yUJc4T1DwJZnG2eAAVRvGbUibGcZuAMYJw9PYJByXCM4Nj2qKbXPTSefRd2xC45Fe",
  "key37": "3RT5ew9eGkcUvwJpMKJ2aSuP92hM4JwVTZi13mkEZPCHDapcpULnfzTVHDbKNbiJfVsPT2PrPv4a5fUbEdLQGDxM",
  "key38": "3XmMD6FVj9WawqtnQfGeaQ8aQF7pXBE1vaPN27f9eRvu17m9Z6me24FE7T3ufaAC4uJ2v1ZgY2VSBumAjJMcMxu9",
  "key39": "47deFjg2xXBYZULUssVt3NVSESUTVF1TGPqGAAr8yC8QeAawyNG5Hsos7c8EbYyUNqCtEFj8gUTtrfNCZCiwVT2c",
  "key40": "4zaZ6MY7uCKGHu7VqjBcs6cFoQDYR6D9NGm7N3zigFrYzjJf68DYvPDJjZ2cj8NidcSZUDaLqwS4D1S425AbHHu",
  "key41": "4uXaaibxJ63JKoDi6BqFNyFd3EhEg4BQ7fkrd3ydLiDe3s4tg7HxisZTuTHiSHHZRznkNmYkMEdvMWHEuJAt6LGt",
  "key42": "44YtmSftHHvQEP3PakEdxHoRBkoiiK127F6YVtJ8ro1aEz86micN4zgn3Ao4XXQuLAKrqTt2Vrrd5RqZw4ATeGc1",
  "key43": "3MNK1KJwE9rHq8KSBWQTfhoyAuftbPG6GKgve5Z7yA3oHKCkpwTT1ks8cU77NhkPBi7hXu9QQWATe9e7kY4KUcJU",
  "key44": "48fnK8No84BVSyYAVqJHP9gHKrMg5d8uLQgtUYwdHTbi6uFqSyZaZJa71fmecfy2jydhpTBtcDxnembYKU7Ta5pK",
  "key45": "3pq2wKrMdzqniAMYvc8KYZCTinCgrY7Y4BQLCKqKwMaLwne6w9Fc3LmyHMqSXqpURugJMZ6KGwhk7oJyJE2z2eWZ",
  "key46": "5rByPjaf6UC7xF2ZaX9Quc7txTBew379nDR1wqdMHTmm2nkYQk5wLiF65RfoN7BCNkjYUBirV1JMkU5GxfLZDF6B"
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
