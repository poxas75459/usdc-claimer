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
    "5vY3hc7aqbrGSDfN9uPUeHLaMSeo9bUc8bEasdBNqzzUvrxaZZzUMSYk5WYjsHsZvhCtLMMHLG1feee2d9pBbumH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BvAjnoznVGrqZiqSJk84wHzhGgRnjBgVMh9Ecwtixe6R75nMpvhWjCzyvCBbq2Hy12SxeMJ76suZ8gD5tBX1oJs",
  "key1": "4HCRTeN6RAsqs86rue9EfZBMsvbLA9AVQQQpkETKoVRPKFn63qofJL9LBQFjUcKho2Tr8n9YU26Mz8bCLaGFRvrm",
  "key2": "4U5sQbuuwAkC17qBXrLTMxZaXKoFZo2wccqfDamLrp4g9NBSKzkSm1AySJS7PBjcBqUrfFH23QTc5PNHtwigasKj",
  "key3": "4yrUsiodRE27FBs4ePa8Pz5YwGLthjk4Rsr6Z37NVpyzrpSp7kLZWY8zS6kmdVodtwbnptmarnbzYCir4pNAgwRc",
  "key4": "3Xv5miWCvdTtBx2UYnkGgDEZhTCny4Wqunxjvp4hvhZ1CjHrXHQ3r1zQPUsZtCHjtfFdpk2Hg4rkkchnPtBzWfgJ",
  "key5": "25fVvmu8hUNj9qXmLUaAHbTXo9L3zxZMycKwwZmBwBJLfFdSjWhz5UiMcskg1A6o7csRDUXcpRHoMdA5DkGPoNso",
  "key6": "5aHuaPutji9AUZsX6fdQaqqjLdZBqbSQBQ2GbZ1VTBuKUXNn3XsB7unimjzoueXynLNR886Rntm6nphHho2CzDcS",
  "key7": "2t38dRbEEupHb1eQwY1xkda7JF4yXYHUKfdXXCBcwVoyzgvXWZxcof5gsF9xAU3wBQB8CnTAs21xpbhRu68nRZNe",
  "key8": "HxGfUtE99R31LsaX9nLBwcTCgsyy9GiMrwoT9KSCeHJE5MwvzuoK7kP3xddu3U5wM3GQw6jZxkUqzdrwtUNuU2h",
  "key9": "3RYgGqgC57VyXuhV7tPfRy5CDoGCGJFYV5ZYN25k8cJNANiaoXjWLFabtTeRYG7nZPyJ2XzfGsdoNFrRFUgXPU1W",
  "key10": "38gd5JCGSYyh1DcyCGYFvvx4YqhixqimzzjhUaz5TwL8xU4TVJsUnQ2v2VD42zAA1kczmVu5KY1QG4nvYAYLvdgG",
  "key11": "3LPx6X8jFE2EinYC4expvkwb9TtqtQFK4ak8PFxDisJPb7ves98iyVSrpyy4DYysKWndPN7ejL52TPEfEGuJDcqA",
  "key12": "3G6224E4RDHXTyTAqcddeDqFD431i7Mjb87WzWUxNX7WDbFU9PkCsAKqtLmv5ThDA7n1vFFivSSThZKo9nsCE95G",
  "key13": "4vRLMdcxAkFzwQP8QVLbp4KFo7RTVQhYvKsJH57QMxkAtNYNxX462aoR8pjoAkRN5QT9rJQDvhmJrTpSyUTthUS6",
  "key14": "rH6123ipeETVRefaU3wkhv7zMw84ZaXx7jWsR8Dx1t1WedmcQkHC3S6homyfkh4YXHh1jjBq4uXmxJJ4ygu6oem",
  "key15": "5fiaWUyZBDPzrPFXFg4yk4NBpnsYd5xcUY1kapfER6K6QxuR2qW6MQT8Y5x1hLiRGQfx7TkqkrqDaW27rbUDpvEG",
  "key16": "2dyxiQto6mwDAShzAc85qM9ufmE6XhEoViqmuJVVVm5LY55RkxqRnN4ebrp8VBjR4hK4ksTzGaw3nTaFqJX9ZTQT",
  "key17": "5qnhz2DNiyAzfo4QhZKwgpk6vHxpHRBX6cMaKN6Q41fCTFPjveBEi7kPvM1hVmT7Ctupmxs4L1KZUX6XgvtvNWCU",
  "key18": "sEgUCbRfDNC2MWaSKcCYfiFPpkkgXPRkhSvV93EfJUCEqDfswzqRwzHJp9c6Mfx7bM1wyt8fXyKmaPu9MmHUMWc",
  "key19": "2ZLrJ43DRbqmwQstSgG12JqkrMzjzMMgcS77TVbhCTqyefEx33y7xym1WuYy68HSvRGZHHH2HQNSWitUc2Dvinym",
  "key20": "XsYz9Y9J9izZYtSso5xq2u4zjiaocgxJMSiNRySr8uM9zDbAoW5JRea3bnKSy6AUVKT1pLQg6PXTArDSvzgMrtk",
  "key21": "4SAWpdvX8R4ChidtHoN82EKbn4mgkhdYDTVUxYEFsYG6KqGWrZRgEUNMswf3L6ZykM1tfQKwFTjw7zQeeXpSBxLT",
  "key22": "2PJ7JjhPFDvxU237fajD7jZ3oab5owaGzqQ1SJTHuvhnFDoQLdYtEHMB426rfVUo12AabzXUfBJxr9bMH9Wp4q7C",
  "key23": "L3YrzwSn8Y1gqYv63kM2YsNFZz6GpqjNP2Efeim3Nwh48s49HBd2VdtFfSXngWMaBwtEqmgvh2VHb5wwpXieAdt",
  "key24": "2E2axVkHPjvbPjSRcFq75wKWnymGtmR53hfwpD5H1JK9hRva6DR9Tt2ZifpfWcAPkha2gnxMTXNxCvMjNNp3uRkL",
  "key25": "4WzYW8wNXH2ggGCLxCoPnpTDRQcx5TQfRPW8taqv4YC2NaYZ6G1hV4Uz84WKX2PBRgc2RnbpBCo7myK2zTddypZ5",
  "key26": "4sXsM4WqigUU63pHWYVu8BPFFbnUcwpLYapLxPFRR6zHBehaz8WQyZDdqPNDbbUxVomK5keq8AHAY4PJ5AiUHtZc",
  "key27": "E9z8DYoRz4ztptvH4xyv2TR3aLPh9h5zcy2VdXzaxF7wcqgXUXUHAsVLjQZXsWYGzKYUKhzCTmqWHg5FYdtgRBU",
  "key28": "3ow26ZSEfvnrr5SVT9euB5trLEKrnUwcrhzPDn4dR4tnBrs4NLZaTNw78aky1V99X8mSKYJXToNUm4FsgYxtyFnW",
  "key29": "cuSAt8FPrsEWcy49roWdrnT8D6mvrqGNjV8gLm4sYGoU88Tb7d8yqQm7G7r4FztcB7wX5TPuePiaGZbibnrFZT9",
  "key30": "22kVdAZbw1bYQAh2tWpuFQD29paxtUj5juuZfm937mNfWTCaiBQXn3zSoXDu6RNXRKYSdCJSEHr5t3YXGfPxxVWr",
  "key31": "9MtKzarZX8Hg1YFHk6ewXXngP5f4A8hbYNc83TMPJV2LoUWSRNwkR771gKPWWsMrieguJPuTt74CpRr4v4Yja9G",
  "key32": "5inuHraEwMqMNQpcTLpLdjYLyGXmDZTKFNbzcHRqse3bFtjKKHyzjoV7AnhJG9vkNA97QyL4Wp29sBoeYYcKsTM5",
  "key33": "SBLQhM4ax6oyTorvfXQpW8W8hYYBfvC8qrNkhwuQ8YjvrDxAf14WRUnaKd5SaMLGJrWqWqQthhjxpDVN5ngJTrU",
  "key34": "4JNPcFQAu3BfbS42Umung1LqH2SyBVunHPhgvrXHAjszVvwxRfKboYMvw74Sx8Mr7aphHUhj3Tv7peaDymDtxjbN",
  "key35": "2fMuUpHXQiF2U6bsTcfxoyAycrbdgbJMVLkfpFq3jJNucnu3gCPzsyxoh6gquPhN8GEgJ3s1DAxZ12jBvCCnELAW",
  "key36": "3YMLH52HLK4N8kq4A7b3QDdUMGC9XbE3XoV8EW3Zf4gjkxALiSsGoMV5iFmNopVaBQ6G8iouikmn56mKu3L6NCii",
  "key37": "3jwc55BRcLBfc3326x4NiZdiPeu8rq7ofCgjLiW8bP5cZ3adFNeWHvwC8H3edBRgwmCXMPMYbwa6kdfi2hEmEnnV",
  "key38": "5NkDq93hunTFzQQWWbKnFHbKGHqgmnsSYm6WTDEz81r7bhnpe2ppGWb7MxF3yUNwhJLJm42MeC2ChQb6bNciLFze",
  "key39": "nK93E9V5KobeBTHP1y2YW76LiWkZs1xAzU2Y4vzA1ZCxWYuYwxZZB7sgzxdcjnM9yQ9CQodTdmj1uQpf5Bi22T4",
  "key40": "4yxNxVk15iihLwokKtG3pBXS5Cnqfpes9xrCVR3WKMMh5V8SczueHGyCpyL89LM2YVgneiEa7ssnkhrUr4URRkog",
  "key41": "2EEcPMzqrhftrgzq4xK9LhhU9Hat2xnoHQ8FcrjhgHhDhebHQZjAtjcHqx2rcMTLxdrCL3S2CsbTT7STv8eqET2q",
  "key42": "2nFR6VrfVSuokrc9oL5QSRcYv4pGjdsdRfMvAc94NPpjj6z3DA72E61JXxyYihb78zGxyWKt2faLWvh9NzToGehS",
  "key43": "4PZ1RkLQ1QULLXuzJBQAQEmDjm8He4wPjrF22iNc72ewGnv3AFof2Wppjw9MW9wzvckGa37o9rQjfAxtLtJMoAbz",
  "key44": "4CW1e8oYWeoL1vXNLRtkaMAiM3USxknGBqk9hcBBrUYtDwYdaEvKtYzS1nwyxB7fYU9584JRpSdwDEfUKS7Yft2D",
  "key45": "5noAW89GUREiCatuow6tDKXtquaj5Jn4WjhyLLsBTQW6irtWdbRhscecjY3rgLdzLVrNoyKhi7JQ6pnBRo6w3Lhi",
  "key46": "Z1Mfg4Mcbyx7z3cJQ7qnQ7AHvhnAuiTiCXuU6Sm82EhaSGbzTsL4moCDPZA2xnKW693eVYiYZBURBbVZEc2HWmR"
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
