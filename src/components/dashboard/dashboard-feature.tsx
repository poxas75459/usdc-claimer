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
    "4vCnLeJ53Uxor3Gn7Q7xFNARdGJM14JJbbapJXA8GvJPHWwnLrAWiXECDEP3amPWr33DrrcW3awkDx8HEtygN1wD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42R2FxycFxhxDkh6ujJuLbWfJYmFmd6gUovUAAd7mRvSJnTZVDtKBiivweDnYK5C3vLV2PbRXcwhzcFevqXQPX9w",
  "key1": "35zjS3QmShzDT3tYA5GM8SixNLL5QJiH4mFGJBv448co34cTMcwY8qTbtxhfTduQvHEGt3EN7yCBDLrD5X9tzGFP",
  "key2": "cEgQ4Y697WduJ55U99VN2cvSWanVkTHTj9xEykf4VV7rRDa3DAPFVY5rxm7qzyYiyoap5yKLsVPwC6o3exYQYvQ",
  "key3": "Q861iPFaYWRYCqkK7Lwms3nSXVYEZLHyKf5g2B7uN4ap4eN8mr66829bq4TrprcoW2b1k8JD3QpT17m2XhNkCZc",
  "key4": "2AiWQ6TgCxFSTxeLNBtfZAyPB3HQqfLKPi1gwsCAGBhsNWEN1UgA61FHixP2etRijXWeJ5VA6idhxPx1cvE5xPhA",
  "key5": "4x9ZYCLCSuKJVGxRViWcq6GGk6rrsToRZB29tyhejP6F2Ti1xSbHjrBppwe6tFETEsxUPcMQJNUgMB1pRnPffGXx",
  "key6": "5UfV58sMKpK8yT7RdVDSR4qTcsD7PcPtEmQDtJa8EMGWJttUVqZSMWKCxdG4cgL3ZX36YRT4KMD4dzkdYTsFNrqM",
  "key7": "5iC52VwpW99zUCbiZeJGaTwZZUUUMqqqywYrSaC6aV2vpfWh88wgqsBzTzvEsaWRuuVbjnjR67CYt5DhSrYm6cAB",
  "key8": "KCpDcViW8JNzstPa8MqcMHzKVPfjJXY9me25PyHf8nGdERRBT1Zn66GyYfjk2ku9FegnE5uVUAJzEJWkMyfWZzG",
  "key9": "3523h9YREm6M7gcY7coXktFNQ5dHJF7G5hAbSKwkpcUjANi8LPUbzCBkbXYAs2rxGkLH1WvUSCsVMGH94fz6XKXv",
  "key10": "587ewZo3VbUWrd9ALMPszqMLDqDQNzmBi9F5zttx5tWiJFY9gMGtc6DN4q95MB6RLtvnADGWrRQHCJzSoJVq6HfP",
  "key11": "3ib838Nw3rxAsj7oqzEEB5eBpUSTnuDy2LgH7zySsP7TZrZmCxvUCHY34zkVrgLrwsB4ESKBYNB5Y3X7baJPXUcr",
  "key12": "nxeDrmLr4Q6xwiqx9zRjps5j3tZpSRPSts74BrM9ZHpG5gikR3J5toipmGhRvwU8ZacehaiwaQDru5xw91A4aTG",
  "key13": "9bDUK81Nfo8s5QMsypwVnrsWzoMDSvZiF75eWMxK2Sv5QcXQXUakvTQCLLpfXYee69FqTpLon6AmntbeeH7boUQ",
  "key14": "33Me1Hhfq3FVcNLXnV19ZxtJpKW2bDAPu4sAbjhDPBV8Q723xWBELaC9Jjf5f9Awq9rrFVRHqXtVrzwrCz5ePBj9",
  "key15": "4YaCK9aHdHNqC28a3tCc7Nkpq31mbmkwav3wHuVJKyTfyuAMp9BaXAnzGFDfBVVcdW77wbvPqPFEzGUwALejZSPn",
  "key16": "2GpW4cioazwWSeWKWRPw6t8j5txRhQ6fnujrdxJL8FGBEaWbUgrD31gB5qBqoB3YZPu1PLY37vadtbiQbufJxW1",
  "key17": "5tm9AwaT9mZYwRGFp2obxSqNXCXubW92fURpYZXfuhQ7PCm6bcuXmtYusa7Yz5Q76P5iKRdJKACPwv4xaKZtqZ8N",
  "key18": "2BoZfrBr6iEY1j5SmNuEeX9f7dtB7niSKRVcLe8cNFT3368bK2KYE27UdJz1hLtXYUyQLLao6mARiSAoGkdVk18p",
  "key19": "Fkyain1xxNFjRUo9er65sxmofXP4HzSMRQLZstjoTzfMhzn4RuJvG4tfdPnFwL8ELntNzV2yb8fJ2o8t2Q4hkyU",
  "key20": "5GD6XLxmekKgqWsQ3MwFjtv74uat677CibjjfbuqGKceosGjb7o6Y4jB9Fcsk6M8Dfg2V6TaHtaxVRJCRHcZTbF8",
  "key21": "5F2VLZ8QVUQZxkZt4hywLc9YdrF9R5zJGANoCacTXfr7hRePT9aJntLKgh8QvJAVSEZZs6L8vqu8DJjetkpzCMKx",
  "key22": "3DMkSMuzwbuEAizm5LnARgfmWxJv1cx16iZ2jASqWjub4b4rhoufx3KogqUbJygUcULXaTT6tQUL6zVMNLs5PLQk",
  "key23": "52KEkE3SaCQAcxN7uRjCj4MSRq2KkLQ9BkEN3xbaRqCNWquMZmhMmBXiH55WT4rf64nCD25UkKRXoeEogziHmiMD",
  "key24": "5xjJs4nNGD2EZHLjrKRUmAqcW2fJaFyGp2vLKcqHEYNvPeteJanYGSAyd28F3CbJZXx42SDDFkdtHHwA6hSz3GFC",
  "key25": "675YJWCSSYKvsLgetrwLr6P3mqgiy3UtcGHtnc7b9LBbMBY2PArVQk4rd8sb7edggP3AGwdeXXx8KnTMnQsF3YJX",
  "key26": "4yERbXT3hdMC416Cu866pf5eEe4RAPtw1BGC5tUue2JjG646T3H9ngHiMMiVF4syrxh9uML1E8msrt3wiiDXKfZd",
  "key27": "2B5ZrAFEpFaGW45ixc7jbBzgidUpapzfSgrYhnwau48wCccp4hsBUbiya4jTsprVqirPxrBWZdWGnN2accudZLNi",
  "key28": "2vQ32mexbDFrjH2mhcxe8DZpm1bf8t2J8ncgTTK5zAadjFB7DggmRMTsu5sWNxpke3kKUfm1cSur6WCduEytexwF",
  "key29": "5wxeUTEC87XWWmnoR4sbkZqsLggvEUsHc3JQYgs2KuzPERKiupmTcniawshEEoMWNJx1BM6jHCub23hAShcPafEN",
  "key30": "2VvdtxxMfB9bM6M1KQoEPDDMXD8XMiJJN2HAJzE6Mtq7KUda53KNQytWXXXaHVvqxmaf8MLszG76HSBjLtk1XRXY",
  "key31": "hiqCgHJWrGUxuuQKg87vNm2tGs88gDZi2MXWCiE1daYdRuZq7aAEvAhSJSBfDLGMvAof6qkxHzqobic7v57nZBR",
  "key32": "sb566tU13JtvYFTuG3AtQKpAUW1RQUjqumN4Yzqn5WwBi4nq7ya4VNjZUwyF1diKmsUeDoWYbRTW35cKz6DVBHr",
  "key33": "3kQ7SQQCmrELJoyqCBQ9xhLTRVctxbFLdz5ysFFVC8usSQUnLXBw8CUYWuUQrRwjidQgTiZkKpGt9L14c7sMi9jP",
  "key34": "3NY11YTxqTjNhpqHQbQTWew7HmGAu29xQ3Gt6gVVzdRk5EuQMkioUufyVQRe5QhDZ8wCDpVcjydkh5mi6p9aNMAu",
  "key35": "4MMxV1huUzZhnHy8z8ujtXfW9VBSFFvSoqhLeu2nUPKnSTU7ebWq7kF1DvC8rSL8gQU7JD53ZnEBUPppDjVsSAXq",
  "key36": "5zCba8tMqLqVPWpkxFHWt9ezyoRMqaWcpXf4Gswt3b4uQLB8ufGiJYYEyaJsrwKRL8V2gYjFY5bfFMVYakm4VEkF",
  "key37": "4WKtLxvJioKzhn893xo7yQZdrJHA6DBAiTeXWD3TdNxEFhUJKP11ZaP7TKFFoYXfFZEZyWFbRpE5ENAQ47jXRWXt",
  "key38": "65tRf8W7aRSxzSZE35asiCbVpZMLZEMM7MRNgFyPiGaH86cgR9SbqpdR8DokqGiUX7M5gcbczWmNme4xJXp3Ufxy",
  "key39": "2foaBydkenwG7GJZNFaqh4zrpeJugXG1TFYEUmu8MK3YWuERkQKv8VGFG1wS2iHbJK7JiWZuqCFALnpp6hzCzzeN",
  "key40": "34U4qz2mfvSZYVvwDbPhvrX8dDoA4JkPbG1WKHWVikAUYtjgTqyWAJaCD7g8kVc594sUe59VxWtme94SBF1XaZZj",
  "key41": "51Bi1ufLJUkofgVaLmryxXL11Ddz87qd2wmrWDtNuzq8w777HYkY7JNQA3r8nbY8VikiSyPL6AnaWvK7PmYLKD7U",
  "key42": "5w6UTT6rDsKDLQCbncWY8UyXiWxMA9HJagWoyn47suA5joWUb9RrPMHZzfkbwE9RK2aesn2xdNGBe2MwmQ2BRBXz",
  "key43": "3zjXKupMG6E89Msduaxiix7aK6AosPQ3XAus6HUPvVGfb58bopnLFXijZnhmDqzeK1hc8ps2ueQn8C9D13LATdhj"
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
