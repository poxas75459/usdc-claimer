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
    "5Zw2aeTqNgjQLgkDfGkzfkyFHLJVrfK41fDfkekpXgAHXb96dBx1TUeaBhgAhHZC7bHRbA7xKzhQQKX4yhZcYE21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w5EwBA78w64Q2dpvmGo8LyE5X2aFZd2d9xkQswLFD66ZWc9stCGXZanBXHtQBzFc24Bw67NVdiswQzPAbnfZtio",
  "key1": "KjKVzTtQ7egkMD9V2A3LcyxBvGhFcviVMt9ZEH1ZSAP744YXw69pD6AcoQidGom3rGYLywjhsn3b7euhQwWAcSw",
  "key2": "47nC9sMYYLwqva57CKmX4zfKevb6rMaEJgewUo7EvSZQW8waWU8HHec8X19jXZ5heYPLL8hAzMAbEgbyv6BWa87y",
  "key3": "3MPPKvZp7J8fw9v3j3uLNZNkkty2SnpLXz96QRKG9keSn2C7RacApJmGizawP787er7XUiDL4czRbko6J9QeDae5",
  "key4": "5rSbiQGugYCd8tkSBfkYJLphxHxRM6nt8kETicqbtc7Cg2SSQq1btNudz9DNhjtNNArGRrpBdAysJhM7wADPP28n",
  "key5": "2ci15UfSusynb8Lj57nhijtdyUb9U5Cw2LbyGD9xxnDFcwtYNqnJ1YoVwN8jAY4eii7JhXryLPEX2pcMFfzoXpjK",
  "key6": "3nsUTJ718MMwdDaGwTHAbQ3WYNrpLpKzkbPqKoLgBAmf1x2YUPKY2uM21ZWR7tAsrratCEAJZJK9DujajLdWyqho",
  "key7": "3oBsNuSCbejVdc5MQvbT8SVUM6z5JqiQY1RLjqx75xoqWo2PYLQXnYHyzF1uqc3tkkwD3CGL4jkqsxb1vQcvxMio",
  "key8": "22L7Ks83kVgWxjxRk5Sx1djYJjx4XhAsBqMkhDs5dzd19oooRNxfzBU1MZTbG2FacCUWJkc8qzBpRX3RdybVmBzz",
  "key9": "5FvmEXTEUi1vXfK6omWjqetYG9wCV1bFoicocqpkvWm8f8c57jB4knmy2v18Hrg45d28pvcp9JzZhVA5H81yvMpe",
  "key10": "2GRrzW5YkYtJH3BoW5yoPQwwrmpVMUCX9e6AfS9h6T9Sev5vWPznCPdQLF3R8BAPT8sq6Q74Lj8kvVVHtKLfatP8",
  "key11": "2XPnkYkoxXL1KhPWcJKe7ewb9auTFQK1wPrgCVjiCmGguuKF3Cyu5RTCswa5rZsXPjDA9zrak6sMZvDTvQ24HPZx",
  "key12": "3bwbachwpytnm4S5ndW4MjLEoodrhuYcccPWFPBFu5dseLRkyG91hgyKpL1pkussqsYpwsXM3iMfFLsBBzQZDY7g",
  "key13": "5rdXHzqVam4YtG8pCxDTovJBUw5xWPdiJ3sEhnvgNG9wyEyeVRbwN5pJHR1CEJwQkUxSgXViSpBu93EBF42rGqUz",
  "key14": "5MohtjLRvGtYjYBamDV7ZJYeX3PA2NJWAFnc4ikBfSE4t5j79wbqSvqEiyHTPiPaL7DD9S3797A4XTKzzUYjfxJZ",
  "key15": "33ySGXM2AMQCbzEk8ssSGy7m4epSSFM6MnuXwRK8c3z1Y7qA73wYU6ksUVZGzdhFYraHuaQcdZqbTsqdbRSF8Ygc",
  "key16": "EShuRWgo3Qe57zSEb6G9hnowt7wm82Q9NPG2tQ3E9j1NzB6Phu7wtNMBxPX3C68ZNCnNNgo21katGrjW2U5VEUi",
  "key17": "41c1XFd5P5WGXq7NJii55n8sQGz8LaCJRRyGUfPdWs8GnGF6NpVvEUUzKz2kx5bXTnG4h1YGELdX6xSgDUvanmCS",
  "key18": "3uz239uArQLTakiz5xgMLVNPKBcKhKhs621pKBHY8qtVSNSi22oonNBWiFMC95fTon8VMCGN4PeD9xP6oKoL3H8z",
  "key19": "2UNLFNbYuEwTom1BG5cJvnVCszHX6JYzZVGo4VYgHrGpEjRCRxYCfXRsvBJXjC4uVAYBr6c4nWspid1CKtXSKbPv",
  "key20": "5JphLzWfZkrbwxaD4M8Dyn7NQyiWN2NfKte3hW6mFThTPFCDCccVnyYZrBaYmPBvbC6KavnnmqL3bwrVroEUYaXG",
  "key21": "4Rq31PRfg9FDqtSvLgiHASC4M7b8wxgfgQZ2sP8LRYxtLq3nP3Hauz8MZA1CGLWbg2DL4zP7LMsmuGq7ZAsRSovp",
  "key22": "4iJCJXvPkVMuxtFA6kXjRn4svNF1yZnusEhetBTrU4MKCseKPmYGzwC3mAbMoaEbZEZogJ17JYdPNpqQg4681NCA",
  "key23": "ZYNTmsaThaLLPZ4vLcmxQHufcSqNk8feCTDoNzEVvNNK8okG8cvshqEmevSZXKLhEhGEbUTA1HhGDdkXyomgDHs",
  "key24": "4YGNdWDkB6GvWrsgR7PZg2JTvGxRt34wJmVbAo2ptxeMi13sfFvqhmGbuk3GLNrtVHyD5jyQNniJAuniS2VW9TJY",
  "key25": "4MohgWweKHyFsgeA4FHwiJRYtfJTdQBB9B5ZDiHzUJN7iRSxA4S7Pk81Esq4pKyvhDAE4hrKP9aR6jXgQjz48vu2",
  "key26": "37cLCG1CqfphBJgLdHhXSaeyrjqv94a1GL2FsGVh5EXCorNM7LY4M9VE5JGNc7tUvCPmGD1H1eLbHrbynHjn1sww",
  "key27": "FrzfFGZqvyPTk2nmz1JXe6a4pcnMTzk3zz5iCDFZYeiDfuo8qhCxfdTgon9JTk58ZJXT6p55NuxHBvCYxpV33Kd",
  "key28": "31VoKd6GwqeLSNAGqbWmgAPaf8ukeZKd6oL14NBQR8rppiFY5QjacqXhD3N4tCvbURh15cvPtLVU6wwzM64bJ3vJ",
  "key29": "5W82rcVxvGbLCPbeZspDaB59HRckXomhphAfxpJqg9pbXFpJZx1nTBSZK3P63sVJSiHKKWEDY85jv4aXVp4KQeKh",
  "key30": "4CG3s7wg8GJVTDFRZUfqbAyWRF2Bh2HbJ28XtDRNLk52SwVn3v6KyzH4ZeJ6QypHK9aDS9uYqc8KurAEx3w8eXKx",
  "key31": "3exKV18YNLua8tVDsYfrYo74wcKcVANtijnaHTUtkUaocYR3fdicT7s8AZfr7zAZWUHU6YHN4vNkQnFzcBw7ahP2",
  "key32": "5FgXHE4kQRzzAMQYrc71TiR3r2NxYLj9ES1j1yW3Vh15GLXVpvQF8Bunu3qxB15Sq9QJeGNzyiLci2Jn2aozCoXM",
  "key33": "3QP9emcgaf7MVAz13U4DMRymU1NYzPMdWmgSiHvvFymcsybcFsaQbTNP9axwt8tRB36Ns74cfk9to45ZfJcuLGz4",
  "key34": "2ohtZVkgHhBMQJyfGp3CQyckgeD6wk26bHQm7BQU6jZp2iTqZ8Peeyp1Zrf6R592W2AaHgY2iNiNNShWu1LTYT7z",
  "key35": "57J4TpRPC6TNnV2cMbRMrNncpaG5qtUp424QhkWStmwsYz8ED4fadwnv7SMMtrQoeb17C9zMoUHVT4gwfCrUPgbc",
  "key36": "2vhgMcN1Tx7uVR3cry92AdmV5S1FL8HoCho1dPgay5TmRVKWMjinnF5oHLETxgpPnXmn4NVM1aSiVRSDTpqYgrUb",
  "key37": "4m5rGKhFZWAdYAzg4meMvpnKwDG9j4QiBxxMCbz5jKgZcNnaxERGkWFKFiuh575dSWWLfQa7ZgshK5BrEGemWUwx",
  "key38": "V2mAv4Wwxyt4iD9QLLaYXiBewjTEqckjuKF5W3JNG62mSkLfSJ7zobsM7X2Kh471C9az3d6oqna6mK5mX8f4jcr",
  "key39": "2FbFuJTxVpFux4znM42SFbCCJ7yZ9q2ae7m7jUiFxtgbZZLTPYCMYGoNF33MRvGqcm9Sd9Mc4n9ytaRCJGV8uSyz",
  "key40": "5AKPBNbE2yzroVEGYTdQvfB1ra4vJvvaKzaYhu5XzdkLDwhy5PXxjcUpYj4iHcVD5KY1x8QhZ3gbz4aTvMcikxw3",
  "key41": "32RnypAEYBBJuc64TuHoTukiK1RdCajiDxUKP5XFU5sFV41Qh2tNXU1sEMEoNnBsECLnmLs4MKwZDwFd7U3BYGzC",
  "key42": "36Ucxpop8jZi5KSueB5yRwx4W2F5DnWGKv1mv15MTq2xoHKSU8d8oHTBu1RTacxkdKdEcGDAsMjxxenxSSoC5SRy",
  "key43": "2uYC3XETWmqgSzK8xHNBnR2Lu4Cj2MFJ6REESUcSmfHKm8x17aQMqq6tppGtNuewRvrKTfVn8s4Qt5XSJsRQ9pDe",
  "key44": "8fbjUh7u2qp8RCsagF2sDLG7DddNo4DPgoEQWNCQxyU2ysEqXK3Gk9qED8QEnMJTH8gtNTyovT1orntoHy37o6R",
  "key45": "5UYcD2grcoeHpgAkPVirKi1jS7ixzXPiPcR6KBUjSKQbAq27VZr7UQuK2Wma9S9gja4tZfjukqbq7jHwPXPB3RQf",
  "key46": "56HuLzKFVveiMo8VEVxkYANsJN43ewZpQjZCYA3j5siL8zJCP4YAsMyLG2RAhhjyEFDVm3cuMyD5XPVZ5EJeRcSR"
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
