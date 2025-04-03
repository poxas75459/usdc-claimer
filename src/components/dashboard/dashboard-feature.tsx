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
    "dKP5PeqHXKWL91t1DGPKNXVbcSMgwofYS3gJYrHUxLC9ojCWnqXv4Mg31ruLgMvdwumDsvkUbNN4bZrFY5ohfvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iodp8BVHuTjbR1asQJh1SGQhPBLehhUmtiznmXNzuc9rRWxQti38YnazwcFnbp27bCBQPrdWyffGqG1E1wtNQK5",
  "key1": "3Z7xHod842stYPatk3NA3FDCsr8zVZESPBy4NQrVqGccUzgbhTgSC9N6f8xCoakmqMyMjUfA1a9FA6fxabKyGLKm",
  "key2": "5fbH3wpBtU1zyv3nboJbChmB2ELPMxHJdAwtTU5hyb4NdaduGJQT7CPvPCFEYPFZznCUjDiHAqrf4VuoL5Hegaeg",
  "key3": "28LgV8c8nZBHeXiigJnU6K8GMpkmToyWetQ4FLfG3tig2yoTT75h1zmAstiBQL5CLCwYigAdFjEUCjPEAXEUYeqD",
  "key4": "2qR7mM7tGnvP9uBxD2pahSXkL3gieWyPLtPY1g3BZGPYqkYAbXiCdLpf5xg2bbKCxedZb8qVJ7FrwRPj3LkGxSWX",
  "key5": "5hWYsENdXieNKUU9oqsbHudeWouLQCN9YGArS6ngdcW91in4ztfmirYBoi7XkcvoNpSZWpoBWPvvBMbXNfvemLNq",
  "key6": "48jUzk1LJ7FjcrNk96Rsc1KaHXVG3sAXVJGmRazj1ko3RR6HiCFZx3rnwQUYqmEaEA2zaQ3efVzYkwAHJGPtpmrK",
  "key7": "5ecjKfVKr2rb7HxtfDHGCC9bChQ9RaXGkuxEvXKzLiRFA3CRzQn2NtUWc2EYGymPSVe4Vqg4zAWQZ6FxJnRapkML",
  "key8": "5LNndV7SoExgY2nNb91k45DXpAXzUUH1hKP1XxrVoAWhbNkJPG6Yt1TmxmGH5N32fKjq3WPHy6boWsKoqLWd8wBs",
  "key9": "4CSE1cjnTSsL9U7c1YWkUyZijU8SUzFqF3hFohz7ZgsNE9tfChtGgUYcGESvZSCMQoikMA3ST3xRMWUpHaLK2fSu",
  "key10": "2UZ2ptQRT3ZjaTXPCAKVhu3MwETZHL9Nh82ekJgfZFPGPUUGtaeYmoSecYkLSdweUjHCJEoH8yLybSG2NNioea7z",
  "key11": "5xJgeQzjga5Mi4K8w7rXMPns4oTPYC4xn9R3FvJxWrL8ZsYYko6KKPHrQLgkvMfxcj5BZKpj9VXcWZvGCq8beLjB",
  "key12": "5d4i18BXm8DYmXwz3aEQ9ZentmUsAGh84zXtnihz2iyWHDoy2yGAXHt4Gfa58N1Wn5Rvt71LCftLzV4MoCxDk2DD",
  "key13": "zrwhsaFkJguxvQpL2bFSYbQG5huZy2rro1iCoTiB4niXB83rfamfVFjykepXEbek6Bukgp3X5Mpj46MhRRGipFT",
  "key14": "z5V3kps7J4KPMzaY1vVB2SeG4BayP4ZNowNo2XN5S7VYzUW9VdVMVKCMaNipM8aJqGgy8f5hB3dKMZou5hsPYMn",
  "key15": "32cxwzNn41hM5YS7G2jPahcw6oS5uDYWHikHjQaP16j3tkVhgFpKNfoYCoK9LoUM5uB4ydXRBH6NTHWBm7kK2LhW",
  "key16": "3AVnozGe4cwU7PxMXfsonts2zBixLxs4dg4cPYmbGNcAYUqZVDyQHoSjMa1nCEALP5jr56SG77MifZHDLy9zPNDQ",
  "key17": "5wi9LwFNa7SzPiCejnsdh1imM8WtWBEAUepveXv4K5R1aDB5wUEMrdwM5XoYJjNWaa7no2KkhA56FMgxdiY7sspw",
  "key18": "L72ebP3pmaHsLDKmSUzGsrRXgq59URCjjhQcNxoSq1Cb2NFf3Rf13CVUB9UGRnkJmxCPU3LJqGRWWq1ee8saGX5",
  "key19": "5i3LsbNw5qGfQcFY2dwVccT5DH7Ps4qmu9vD2VJPtamyYK5Hn2myHzcN3nLcTtrMq9bf262vUKeTpByf7nEYiYji",
  "key20": "d6CF3mG8WRuEL5Vq1ViQUWJW6tCrVY2fTDHBJK43zxjVGwStNYBnFMxwwPphvbq2yK1HRFJNphNy3xEQEYKTLPn",
  "key21": "XvqBkiSsB69nk4XahW2wBXBxujAxi1XaZKFHHHh9VqUcGXLuFQA1YNMsspdPMAXTfZtmNrbWj4DBydhja5BUPF8",
  "key22": "4JU8FgFm3Bkn5EdQevzeZoKFZrEkjWqRSb8s4D1GTc3FSimSfngU923KpdWUNK6UuJSuWSh3dHrQ4g1SLLXAN7dG",
  "key23": "5YHM4Kii8nh1KEWvfCm2LinFfXyqZgT6d99qKuzFS9TA1HCxwbV9mnoRCgXVd4DA4YJWTv3yETuTLKNWHqq9Hgac",
  "key24": "X2kJsCZA4gTsCRxtL7nahDEW7x55SsgftWSWwKh9oqv7rqWnbXtPEbqEKw8SywYBmnRhbhqwYPvcPpbQ6ELYNVR",
  "key25": "4JcCCWJB9yAStj7NAZcLDEPXAghog5Uz2jMy3qefUgCWgGQJ592ZWJ9tavut17f6jNQTYTHTmmyyL9GnfvEnDdUR",
  "key26": "3hSiqQRe2SneijQhx9ZKgTvby5N1oTxgJT4g6Z4UXwmut5NLSyWhFPU96eLYsRYxtCkPBZu4CqjfsddYc6aVyTQ4",
  "key27": "4fqDpJPSCxqEa5d12beG1UJ5pJwTiF57RMm434bE8shEZHt2yEPars5HwpT8gxjKtm5dwha4q2E7tWmCFqohH8d5",
  "key28": "AMw5sZ1vrodQEYrfqRdkApQJVBBrAVAwstJUPPECBYy45nUr1Ty9cLwWRno5j2cLo8uSp2VM8VP1YAPhhoihQDR",
  "key29": "vfipp89amXnhzrSiZGFWePLJQSW83aLAWE5PipuzJ5HxAcan3GBWyz1y973tLEkc5BiyQKsuL8AzEhvYtpCggx6",
  "key30": "2aYmSd8skN6pjRSf9dAVHwZcRUhDQ2EvZnXyGUU5pH22F48QPwuVquGKrNkMs89xF2CP356YDMEFCzkcN6B5pj9d",
  "key31": "5Rc5s8fQxvhTqYYeMvVbVZ9bbnnQecCLWoK2BgT8mCDiZ98cnzziJpjR2CEeCZDXJcFyksx9ScvJuRdi3TPyjqH5",
  "key32": "5m7fFvL2qdbwSPj3pPUvJiKVrKYgyw2SkhPmzFiWr48B1zjETPAkexWp9rjqhwNhYy318aMkE7YXK2uhFXwtxVSy",
  "key33": "2bxPFAfhjUQ4oXbjmmTgMC6NV2KbfvBS3kZM4t37sXvxwSNozkGzTELef4Tw2HUkKB6kgw5U3juGzj4TJ8bH67np",
  "key34": "5SutP5vNsqoys5jKe6RCfDVDH4bEjhbmjUDGwLktEX7ynnVnN3Bawvk1qST88X5i11ERumgToeYxY37DKSNv9Hc7",
  "key35": "P4ji1xikYZZN92RbdstmejhsNcSHFvExiSyaSXhgAL6NE6oR9sSEarjGyqHGBzzQPatapvmZSAsfE7vE4aPvjXW",
  "key36": "4vccTeBVaxSdWxvHd1y7x4tFXkZAgfbrw9nsDdF5gtHbx4kZhC1Pnd8Wvs7XzP5aSMfRztsLruHuPY7zcZVfM5LF",
  "key37": "ZWRzf7s54JxmZA5AmL9kuishoduSrUinK66GoyQAawduTdrkusGHoVm198yY5AC4oXfxYwhz3pKUDvJEgHUXs8A",
  "key38": "3ZVQFPyRCJoV1aZ2uyfXNoECobXKFhTG2YiLyC7Bd9kFdCLb2UGs7V4WaZQiRpfgXWGKLRwQfAmcj3Avwe9aVPW9",
  "key39": "5NH9WCrjSEKXkKcfDrbmrDiYfHGsui77MX7t7c3xYdAnuZcmYvSpZeyxcYTrFPnyyLWp8gPuGofWZK8WpqwoRgN",
  "key40": "2LL7DuiN62bqxwwppnpfqqaXFXbpiKEKPjwGR6CaSMnAJer4AsgacNqJALirRuPRvziMDvcrhFGJbG5CN3QBfvNz",
  "key41": "3uKNFakx9FjYiMiEUHxeCPajwaePHVtEcJRKAR9P3GMGKAVSegVYUHsHtzbaSP1xGQ2EmaJUHWJJdBSVmQ3xpH5B",
  "key42": "3XrtgUmYoiTkGEmfvV9frnAyYAgCEBnjJ3NUUWEo89VCmWsRscFbayhri6MrhvC433SCE23gK7cYPr465fMttKn9",
  "key43": "33kP4WsbWU45T8taPKwknkqPMdL8rB1G1UdDpBQQ87JXbJZ697DTFo23e5AMZep5DBvgpwtPVrLhChBiHkh8yeK2",
  "key44": "4nBwFmfeYB11Z8RLKiPXhhexyZpf5hD93rU7igfj2tLkrygrV5vzGnwmRjSe7UpATeD4fTsvYxxrtcyQfYMZQVwP",
  "key45": "341kDYixnKYKkHwwQBse1vw6HedGAu8zz3qhwbsNn95Ry2rTKZFxbAwTwzTpm22xUVyhEFEMHDQYiXKTHW2bdsfX",
  "key46": "33CRyNezGhkJfb5k2ua6sVmCMyefhXjyY43XS1WpkANWGuxNmnT2YPND72q8tkMW5x55YZVZiNYzvFUPPCc1h1Ts",
  "key47": "4hV4tSTtokWbPpCHseFeZZB9C2mLjbzUCqv16ZRVXk4KLSX5EBwpZq6jQPRcAfM9EuHsExwBK6kJZKAmgB9zXjFk",
  "key48": "3ZnsN9F9kbtDvwrYAFEJtEi1hhUyXQDdDYwEVmuF38S5hYJAogV4xWPzAVzu4bpwGT4RJLqUfkpThMFBg9QPt321",
  "key49": "4vNjk8MRKANm3Uqr8F8jN1k2tJWYZL1pN2tU8rpi7S9ek1LDiG4oJ5LLzxkaT2q2mboXbvngeP3RzqziR4JN66zM"
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
