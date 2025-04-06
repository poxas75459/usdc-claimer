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
    "2riKfU8SAH8cM7d9u2WrMRvjnz6gVo6ZwcL2TqdhiA9iwwmfQYkeLbs72KkigY3VPJzWV7W4Qw3DUEFLFWqXRHVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e4NwJKLRBFrvHUnUuVMe5bobgFdeiVi6HEXBdHdSWqTAqUMykkBpRbyJsZ13U8uLprC4GvRriXoLqKoL5C2cXLV",
  "key1": "4SCqzjkhh9AN48DS7oipUzWeXXvfM4J7twAzpHFubsAh64RPioqb2KSrp5zsf6nL3JdbRuGWz472oCgaHG7eyxzx",
  "key2": "2evoYbC8sRh3xu2G13xoamGzJTrib4i3Hu5i3pGQLw9F35gaii6GHwWq5hfsVsy2GXy5dCVBm2SBM5VQHGMwP57C",
  "key3": "5bxqR6LNVSyS83q5tsJG3qiYzc5UHyck6AjGHc2YMyArrPbXBeWryC2cFGk1YtEbbrZcQLbbtA1E3dzFScPTfWpq",
  "key4": "4pivsRVjcke9noJUQ9QZcW6Gcw9yMBUa32Q4pRiQcrXhWRLBvsTnJT8bQKH93b9DUgBKSriye1TWoDwwd7oWGHT",
  "key5": "nieFNDvdBtWbGETN5GWRACYqQLDmpyvbQL5SMWXNRgaUdpksNBp6cWwAQku77wMAixiioT9yvyKBoceC89vLZUZ",
  "key6": "55gfvfUUcAt9Vjq6yy7jKv4xfP6jK8LxFHkSGscmw9SC7wavDPFQY8owTXQMUgTcWaRZxWcQfH9VUVCWeopGQ7Rj",
  "key7": "4Ci6973JsovRKc74CB3o42VEroT6Z1a7tJVAkSPcCng7fT4vKUsD7KLzG32AsMUXoqnfjjFZAzjCUHxgpoXyrz2u",
  "key8": "2WECTmRTuvfuFt1WRTzbUFTKtuoMM9EbXd5euKzFN9Cy7oLMUCyKe5rHAFL1puAtP6mHVGZqYdLWaSyy1KBRxuRN",
  "key9": "5YE6ZNs8RMioPyrF1ybCwTrPY2yif6jsAX79stqTt4qGHecB9KuR5Jat72yCJrUePiENGrgYQJR3maxSL16RPg2o",
  "key10": "2MTB7VThxBpr6Sb25k2a11LuqQLq5359U5zEfnNZc5ufAijQdpyjaoSmoPWf6fiLKDmD2StE7LoB4K8zufe662KF",
  "key11": "4P5EJPb157qJFVckQG7RS2wDrcxjHt7La6W4RYMWGo9Jx7pkbpnZ6rPuiP6s44kQVmVUyaQFjTph2Lxj5xwhBGGY",
  "key12": "3vo9LEgMUs5UUruTGod6WV9ZnxU56kg3jA7vB7ccV7H8DP9xdJz2Qk1vmFWJH98q1i9Kt81yNPkqvvwsJopPEwod",
  "key13": "hwa1v5ixA7egwiA48XLrFFyHKKYjkUszFPcacwFKQ4sevcWReqYCsoD7CGuJo75fRUFTve5xSURwdYrMqauRweL",
  "key14": "2zLXzKBn8yCCD5DadKx6mizghXys3qhzTexi1y1GoTxknYKZr9bfdjWJG2f5TW6f5y64Rwqi9BLPsGVKSDFbgYmJ",
  "key15": "U17RdWahyA9S1Q8YTfiFwXHuuuxK32usNnyo5KESWFpuzGSree2EwxMWw6kVfKjKXLUVtU54Ao6a3Lsk44jHjNZ",
  "key16": "mUC9gqV5pPmhoEQGKMgUfHZNd9e5EHKP5mHuwijnKi7aFV1vTbW5zPFop6dVMeUcAgEemeGcRHcsznoZbtYsHCQ",
  "key17": "2WAALEWyuLeUPr7zroFBiMvtJwEqSbW6AZbhscf5QMv7LnzGfczwqCxzgWqntGbBLLX6BecKos7XcpFDKbi9cFC2",
  "key18": "2qZeHGCorvJsdNiiiXUkFZLN78hHSKmB2phhtd7qHDCArrerz2mYHDWiYpEPLoosQsEWAnURDpf3hc8nATCVQVbQ",
  "key19": "5hS127B92DN6fbUsaDG9uvce6rgYa6Bdh1XaiuTVRxcijNPTZB8eistPoVb7B35TRyc12yNRUmoFgQMCCf4anj3n",
  "key20": "2AUmQQ7FEajWc9g6bFWRmLLN5TVSCnWvWKGL7DJrsCLVGmo4xkiyfDZ6FbagbXucMjhZgkNFubhyGyvviE5s18sc",
  "key21": "2YL2gA9G7QW4CrYzuTcKchUkVj5qcWqtREd3MK4Jq5yQoEpHt5VjoYyDQ7XxghkFWhvioJX7sRsmSbZH9DzMGwwo",
  "key22": "3v8hho48yeFrLc6KKiuvNa6BmEqXpox6owuo4ABYe6Z73CXtxm8RV4ykosnsGpQWZaGMvDvM3H6sPy82MuUUMYD4",
  "key23": "5md7V2tS54yXDCAD2Frhz6sxCrtEAr9LtHfDVNt451oLsfAQwM2enRdHVRmUUawQGagLZbrYCt6B6YU3RK4fKkDL",
  "key24": "xtsQtDUn96pdFb6cbfjcjg8XgrYEozcFo4f6PQRMhmXdYreYHsAVDHdwsUpXzZbbpBHULhdua9NfBr64MNE9Rd3",
  "key25": "4p3RQ4QxpaTV1AqKLGagX4AKaCMmqt95yezZanJrNDJsVhqZH4cN4yiaBmSThh263poYHqdA5iHPGptYqDCPhAUh",
  "key26": "4bG7siiCWpEM1Yd9LzQH9nRtf4Lp2nvqtLhJGZuHu9F2Y4mzZvvp4CdiQdYEVh55k5hMTaXNnKChk9syHwkvPcZ3",
  "key27": "4bppzUhY7zTcUvdATv6RhfTvJy2WWuSLPGfuV9tdAYn7KRuSvNUsz8cfxpSdZUKWcuMWxTYPDw5nTpCqrLHiTV9j",
  "key28": "4DQ5sP5yPEfNyHAjYLx2CXiRH3yzMkV34GmrJSFR5wET6nTtk41h2BXYibbiKnejJouZgDtii7p4JLTE98AcLh85",
  "key29": "3qzWMrgiDwjsqvv54crAtoXFPBtPF9p7YRTLQiVqtM24XXd2bVYcPoXcBLYh5D3doKKcDSJoNqc6Q2A3AMLkweRy",
  "key30": "zTzpKX8ArehyZSV3fmgdJC6M9qA1LAoB8juezJnpreqkXpizuCpj91d4DdqoTW3Q9aykwx3y59aeSztpx5ige1W",
  "key31": "QyEjxQMY7YJtfXW1Y4zDAAYWjrh4BecL49q1M2bseMD26573DaPDdV5xU4cVsBYVpxeYdNCss2MrioxBsszDY9U",
  "key32": "4hZqZYwdKWDzsXEQ9D7QCaSNqFLjQ1LW2NdbNY8owP17qnG2h74iKpNAKw7u4qt3PTs1zPRYEkdtdQfsoGUsxJFm",
  "key33": "2T6i13xJtcGnUE5XWTupLbV5adAMG2UPDoRSzUhYvVvFJeFz5TDRMGcLVQ143uCK5Wk9LGcCtWEATeTtQ9EPdaQJ",
  "key34": "3xJfiAQwRjM5R6FAeyYn4ozChheW29DHTTNJzW2rvNqNeWXsVHm5fs6ef9ZoSQsVunXjgN8s2L2rWohdPJGc2hx",
  "key35": "2C13D9f1qUEvqozHC9KvuRt5e7rWVW1QmgtMT6uastJ5dtMNkDVW7G4JEdDeQpcNkMCffQ4E2QbfG6VHvomtabN1",
  "key36": "4rQopHA3uGiVKugAp2zdWrYqVP2m1iHAs92WryHDZLrystQkFjo1bE1bDUtxmAC5mcrgfaQjzNi8AnLzUzV3P5ym",
  "key37": "5uB6j3mr6Homn7VcWUGieaT9R4ChkUGetUySqCw5KyJS2QEqRVbxRdhMJh8mM2HEYJXrkXufMF7tdFBPgEsFLVig",
  "key38": "4iToEaAbfGuzjTVX6Pvp4rd8wbrirfrWET9iN3ad6YvoH2iWtpJWFsC1Sds4tsdyJtPSBa5TBE2xLv8ZheXMJDQq",
  "key39": "4DM8wkvsMGcCGDM8JbaditqJjfGMK6aNhLLx4YWpYasXGNF3JTTXjF8Fhi4SsCMmjuDt5HCNr2rzn4JukCpGzY7q",
  "key40": "66QQUDAV4ZgkMkPkaqP4imViAMrb2DfbCKNVDxqtQbWMsgh6sseiFHqLLEvv2Ve2vHUmAEPh4LuABuKyPwxtAMaM",
  "key41": "2U3Lpdu7THar79PSjwFmC73dZVCjV77nYx64hcjRC3FsrSNmQ7B69Sg27nSLfMPjmGdWhN1jfJFhwATaXaaw7hvr",
  "key42": "4epaKcCyaZFpnVMUTDzkrhitdR6kD72BZuGRsPxC3h2VJ2nsNL7rzqjZ4F44x5v1sdiTxmJ9JvSArYLtpvs66VuD",
  "key43": "4xa5XGRF23LfYj9fSPFjRk7PBbBrKBC4UnBPJivdKvSSTAaoPkAMYJ9zUuNYfjvbhaPPyCXN9jopHEe3idEphxpj",
  "key44": "2PSNqoagcGDakN2vTGhiyjWmGfCVHdTkTxSD87hJHG87n4QUm8BdYb6fqAmmvCWSryCzrRZQ5jT9Nnhq9AAuvMbF",
  "key45": "2XEj8z8k11Sp4G9vk6u2uYyMEAvHiVgDS9XbdRb8wz5i5Z1ndVVdTM4KVX84YCHCjfgjBS2qMxJcQKR4auhFwof",
  "key46": "4oEMdCieeHUSHoGS6KBgzUzQRkbuRoC3uNo5MsdmMnMD11m5G9L1qwCtNghKFgLnLaLabSkaSaWsbhPirsjJDLod",
  "key47": "3izykvEAYeExNVKUfhvqgEpbm7HJCzpZFrPdNDNx5awLKtjxpJu7Max4eYtXbx291FRXvazzaLkU8XxNdyUdFA5j",
  "key48": "MfhA3PaEKHeHB6hDSoM7uJpTZ6HAe7qSqMpEQnqu48dMQMCWrXGR8qpworG6dS5xvvKWeqgPBfrgxVkeuECzdoQ",
  "key49": "2iDz9Q8716Rwfdff9SX2HHGvHG2gqKGPTb8HopfSJmFAStwHsgqKcsX4yV3JxcoqKWCz8A53mb5XsFp92wzp9NpU"
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
