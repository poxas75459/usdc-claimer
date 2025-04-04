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
    "4fJaq1SMLiY5Q8pikHYj8wyonA285nUo9wNfM53oUrTD2oVKevyAfCv4dGs5pXwU4Hi4VgTR6bQ8DCM7S55SWZCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B57vdfiW16TBLT9H1W64Voj1zToABBoVmZwde3zsq7NLAtuxPBbLmEn3ivWXopxqRXSnMetuXam4A2bB89jSfoj",
  "key1": "54CHGVePqsJ7FhobRb1PJhhvC3qcvW7Upa3HTzVF5UXqphyY2o2Hzg5tuUJ4jkDc5xw1TdBTtBZLyb2xq3fPxG6C",
  "key2": "4vSAhUWTsEZUZReYAaRTBznnVGL8rQM21gRHhRrighYPGh3N2Q3S3Ss4HUyx3u1nW8eKiFovdGk9dudQvCyb82U6",
  "key3": "4m3viWtF1YmHRbjynTS15PpLdQSTA359vQdfx4ANZhZWT8UHAq347UeCm6EgyXPhXzVswwgkbE2CGEtyKBkArnh4",
  "key4": "5yq23kVVUzjTR2nsp4BLrWKAzcwbupMX8r783B5bEnZ8wDnzhHkTNEgzFKCdKLTuqJ88d2WVFWoEBs1dyr3GMxGM",
  "key5": "PDkM2tKkdgCMVRSH1f5Q1DCCSzVs3kRFdSihmoF3Yu3ozWVp1EerzdR9ZQUySNgCt7LLCkoyhsHgYcqceJW78mN",
  "key6": "huusynUQDk7bC2X2YyfCpXTKYRvMMMQsLcUHG14GEZ1sDSx6ktDpmm9biTdgFjkzztNVCZNFU2PQYP4dEiEXQnb",
  "key7": "5Udyg1eW8iVxjH8zsFtCgGFhzJq6JcWPBv4Wyt1kXYgAH1Vk6D3Evjh9v6e3VPuZGJvTbYRbQckCTVttuQ8Vqbt4",
  "key8": "4JmLZedGvMpBa9CZf2Lm34ZtMgtgsYMvpVxMVFnW1p157fdPxVZcXbjob9YMeGBqvq41Jd58NuzxeejC2mXSuTxA",
  "key9": "5vF7ya2qKnLmgsYS8wuSspCdUEot1ufUPUjosdzXkd9cQW7jCTi92kD7tz2FAwoLuHRvbomv24eJrdKDW9L6e2on",
  "key10": "22N8rFNi2vUj2dzPniJZgKfTUZAEKvxodyxHc3fnMfcy7uXPgHmjeiWR5TvymqVJY82FXAn2VA66bRbVTGHrE12R",
  "key11": "dzL5fB11dwv5Gg4u11DwWLzCG8iJsqrPKEjUDZiziQ1wshbgNVTSYUtDvZy9JopCnCrRJuF1pTbvHVCaPb6eUSr",
  "key12": "TgTjw18QjBegyBByvN1PzcJFYW5xSGPoTsd8v91wBhAZ4q3B4TCLqCbTZJu3cEvJkv3krAJ9ULgDwCCLMiEsqYA",
  "key13": "d5auuX8E2xzPTNQNDnZffNbJZ7Za7C6N2bg6EW2S9TC4z1JbGpeGMgesA7Ni2uaTxRkkAeNqW728qP1bKXUiMUy",
  "key14": "5JDVt1Sp235zhBgy9GuY7XU9p2UfV72t8VZbmBgcuGXVxsmEVo1ca4wSCdEJczoq7SnoeMFFw4snqXfSNqUuwvt1",
  "key15": "5WHsAbMZVphDgbuFrNFEU1ZgKiVe2uXncWJUUKXB5HJbjMqT2Sxn5FkP3vsmZYSsGqcqZkpbUc1NTF57kogswpfy",
  "key16": "2PahukZBG7nLA1AfBwPR4vfoUiUfdwWSpCL5b2p36dZJ4VMEjWkp7rw79VAGP86RiQaAEUJFZW6FFGTZow49KPzf",
  "key17": "gie3P3wgf5N7fCcmuLGPzJAthkDAVZH39QjKGjbgtBcwPX9jwXp59JdGEU9qtTJo56VfmGiRZFvXL7MX77wZL3k",
  "key18": "2E4VsTf6YsgExSr4pVTEsVC8onn2w6EhH88bwDp5ze3xYonQrMt2HYKCwMsnDSFfCDB3UCJohCtCtjxcQjpoXPJJ",
  "key19": "3qbsfqnJ6Rrmc78sLsvatqi2ZrhQ8eJna8yZ5HHvP3aPtgjzT7Ng3kcJNymG1hWvaXAPSSrPwgTuJn1gXHaqazXS",
  "key20": "zJdrQYW5uL6mCsphGPfQiQThAw4kjZ3qvTFXCJHiS76qb1hABaEzf3Nym4KuFXrCgQVHFzSP3FY8pPsLAx7Lxuo",
  "key21": "MnmxMw33GAwH55ATQftAKSsdy9GuScafqacAy51bSu49WD22fGhBUCGZY1ii5P6TSpx2rzrSEZ9CqDBETJDBsFi",
  "key22": "7E8fPzvNYfMPVqigPjPo7fqmVeg8gUEu4gbxZ7vhCHzFogGvRxRWUetQ8s4v4ArpY5gvkPFL8UgHDCavJV5xmyG",
  "key23": "5D52yfqvn3qhSosf95LkXMPDdMkLEGpgn6J1HebvkgXFCsRnYL1uc68r9w7Poc4A1CmrTiZTTftSBFH8PcrgRiV",
  "key24": "3B2RZmPTJjWUZG9wQaz9m3Un8LXfymum1njTsrnEc3s1k6vBwRWxyrCZuwCv8tgYqy49Ej1ivb5rsUt8HtLFnD7c",
  "key25": "63Qh3UT57bk1ad2FpfGasRMJFL5coALwyv3n2ohjFZFCHaRMem3W8SLgxVE1wtWvFppLRp8F46k1amdpAr1ywK3L",
  "key26": "3H6WTbjsC5jg8bnVVTWfrrp7MdwBp1j77VpbPbcF4tGwgofhtRyphFPGoU2mqbmR6rLXWfh7Kpt74WPi4kZz62m3",
  "key27": "25tn64mVEm4GftDzxGwCUuPxkcAu9HvEKetg6T4L21Ghdo8SFmFhLhYGbJPrzEtTyyrgmUZzTnm3T1jP3Gcsn9w3",
  "key28": "LnxFKHbj5XzawPAGayiGnFbNfVhRg4LP7NFXNrNxyufCmMhCUJAVameSa2eQXLAvqWkW22L67NdKTStYdajWx3B",
  "key29": "zhFc8YyABZzfW4nVwEpfnHZghuKsMpNCXPkQ73XHvRJWrSpwbqkiuEe4oJeLzdsZJg4rR8UEtQiyLLf7YCms27a",
  "key30": "2heRY3mjeFKyVF6RfRtBMUmam3Hw51nKzpVEjRNTcic37NXsapf2qtJ9Uk15G21xJKb9bbdHkPw3DdsFaEL4KV4m",
  "key31": "3VLs2H8jR7KEFtwjAqT2Z6GfTbQNfmYiMDkJ626HQJyYinpa7LBkfFfzDLf2u9ND1LcMrNgushWGugNfDgJq8piJ",
  "key32": "5CbiX39UAXb9CjEbE68xKnD4FiukBcrJdySjJj45ZBYr9JeEvtTYhDQbKD5oCXKpd3r9rPLH111qZckFP3jaHF7L",
  "key33": "313W9zQvB1ayT6oTJpE9e9hvr71abh84KT8n3KAhTbYFvcARK3sTxgnCXrAcQYLXohy1zTcqMUbxzs9wvrRQdKVZ",
  "key34": "24DtCwy8R1Ty5JYWkk3GMVp86XkYvPoEcU7hK7uarHQeSvxFkTCQNqdun5SjYfUL1nbWUT6WkEppLSyBx1LPdRio",
  "key35": "5x9eAo9uDbAXheHykkcESX24ydPX1chxmpS33EEaUjjWTKqVcXkXxemxraWjbtamNAcwHaoQnoSUsUvbGGQeSDKk",
  "key36": "2nxvASoJ9BGko7yhazNgZzFW3geQCC13VwX9nhtAT5faxK6SpqyfQHgP9SuwtAjt7pypAn5Q2rrMsFXgs7DGS1CT",
  "key37": "jU8kSEoMLDEFJnzFJHeVqumk5FEY4agGUH9GcSTLbMN5Ry38Rn4q6QrPtPFcxLKZmYozmTZFV7oL2cXrdZqQC66",
  "key38": "bhvCpnJ58Bo77fDr7nyH6kYTuwopDfLzQaGxNqnQyApm62zEbW3DxwMPo4436dBfatYTt6TcF273hw1hyEc8Mn6",
  "key39": "3Yp7CEYNTNUfsJ8THQ78nYEWx6uR64GFGuvsbMshQm8UqNi4EkdShDyZruZ1y7btpF56cUKdXXdNGeidiyrqqcSL"
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
