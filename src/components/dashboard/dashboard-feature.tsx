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
    "cmHpog6jf28CinHW5BjkpyEVqz3CMPwqAFm3ecWtp5Dvme5yBMbpSEJqLLtEkQGjBPUV4VWH9td9tjFzG3bh9Lz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uhnyMc4wHjDztWhA8T4xxa3zSwCiJeMqWZChotnvG3uLnaV3Fvdt59fuvwLQUPaVJtScnNG7BGtWMseXfrVqAab",
  "key1": "3nHZXpTaYTSCN1XgZCpXt9W64CjiwdRp4XUEhcecL51iv91T7q8d1gEg3zrnh7cWuEvo2NmCFJboxJmHR8aUBjV5",
  "key2": "3M1u2PoX8ta5rnHLuNFZhGt1yCtvnvbpADfDnE3YKuiS9ZkLAigXVPrLYogjjXZWLei8zVQmihMSezvKwffffdqe",
  "key3": "52Fb5sxLrzSezrbd8WkWTcjLyY75kzwzgUTizEPEEBmniUfTFSaTupkYP96WjkqyCdKEvYktWUBpV4tLnuo2LnUd",
  "key4": "3zLFgzRBh3wmPoBibytRWgCsQSJm6ydtWn6KBQe6UyJWD2Av7cvDj2SHZkRWCd3xHiEFMjuSqBrxqJiuYBgWPhuZ",
  "key5": "TD6diZovTS6ABYb6ZHCHTqZsnN3kz3q7VzTqw1nxqFbT2Y1jT4bp2ZbJddPqQW9pHy21pnwtM67iDTGe3FPzivM",
  "key6": "5k2eWfSdghwshuu9CYVuAEPvpNzo32p6jNUYdJwz4uDHbiTBFgQnV49j2RishrVFxuHy6praU1rBsonsJnZm6Di4",
  "key7": "5SAyLGDXDr56qWdHwG9WMmrWpmm4TyJBUvphSHf4r9PwUxoaYEYVAVf1L82ZKwTNbZbidAV3MJBoGor5ZgSjx9UV",
  "key8": "yAnG79pTmubnjmpyx5b9cxe2WsWnk4iFYZ6p9SGHTfecVML8FNhuEcYZ4AXPnPVET9kSqnvCH7EnVDBrt5Hwnfb",
  "key9": "24v1S6LTqngYKz4ck1sydpFuJiezn8SsDkarHEXo4ZwaDAxKSdkKmUfnZ7GTYsBaoUiSQE68nqhVEaBpcu1eAtA8",
  "key10": "2NTp3yGJ4rgjpkdTQUjrFnfyJwTDYdv5wxDGeqQVtkiAUmB9CxLBWxFhjkaZHTDN2RVeRqs6xzaw8aUh8v3n74o2",
  "key11": "59LhJM3p9u6cFLRZd24zKTWCx6AdsoTsA7iTf2kvFM3aHgavprQ2HCK3ggYbADx2NRZAtmNLNudz1bKoSwNAkvgd",
  "key12": "3zrYFdZmG7bBNk7SjRTTnWmz5Mnyzd1rzr4raGrDWhYwifi24M7BiMUC3YtvRRBLuatCmu3p4FMkVfATzFXpiLpc",
  "key13": "5j1bCx5ZJenLKhYqwRsVQxak74Zptkn1x5iLhKQPpPenjLmg8wUWRd9qSTAvN28NY59KWHsnsV66YzrdaoPtFY9v",
  "key14": "2sNmpwDUVmES5fziDHkohNi1jurK2yL7oY84gVMtW5ExmYPCEmdAdNKb7kp6kaYs6KP7J5Au5Us7iBZzsatkGqD",
  "key15": "2RKJxppTDHsideHQFdbkr75FV9fZTNwQaL7CGXYq1Fuq2VB5uXHoLMNMu4NqUhKM29tAF3G1awfJb4pAiheYvS4E",
  "key16": "3u1PcNSCf4wvyKSigpsSiB9EQXgH1gN6qDvMKtwMWqhnzTR6FWR5b2WSdZrYL9eq62pMvKwnN4vNqYMxqnBPKfZL",
  "key17": "7xFfCymgJCxA1HKQN9R2aLPve9fhzNgRfemGZqoZysB8zvUerUu7HjyyS8Nx1u3kmq6jZwsJvWCorENELoeMH54",
  "key18": "27iMxtB7vDGU7hViGWm1ge8UqBskhK6JP6BqXB7gCu5eFQ3v1uWnJsnCSTX5qyPatsBzYCSPyFuxyKXjJwWzxfxx",
  "key19": "5CHZ3QsHUmqd7TTmZMKWTVCfzMzbGqT9dWcVg5qyFzVKQDyCEK3PiESnUGuoEf6Ls6TkUX68DoSo5NYSYpqajXLj",
  "key20": "39QtDtifcxx3dXuXkMwGCM5dXKRNy5vSNpdRpLksxdNmvwVcqCqsbvRSrbRquLtN7UWCY9sWC6VqNbhQjaq4ZdvD",
  "key21": "21mwjXjPBRvvtuFtC6onqdLvNjfESMNMeoKCyjR9xMM53PGZtnf78xmCfmq4ZG6TWEv48G4VfeHMYDjKfJzTAywa",
  "key22": "kcYNMQadd1doKXzHjhzaDbFezn3hkKYjqoHBRVsNNh2om4YTwZSAyYZWBBhLzMU7SS65BiWCwPYrhJVjkRifLLs",
  "key23": "3m9vH3bx86QfCfUhwTkFuVvVuRc9YF7EPPwF8evLUaHT5CMFc3bt2snbmo3EjDnZ1uTkTYhs5MD9JRqfurMJBYoW",
  "key24": "2MbucfmPQfNp4C2GsUKmGUhW5G89C4h3xPdF5Z12AuvVkdV66FhYepb6GcGEsoyyU1BgAnGk7FSKN5MKP8121PYX",
  "key25": "5BLbaW1WEqoiUpSToadJZ275eR9xPa1X7VWQi8vhJKcMHNcUTd7oPrffnVxH6X4ChnVFqp4MDbaAe8ZDmDzB3kZD",
  "key26": "22ZGcMepT5CkXNMJK1CF2DzSP4trpocfPMkWHpzfCPg3qcXDe8e6iz1A2gsDLbwdq3wa4BfEPLvSz1r1gURSEbTx",
  "key27": "2zkuJ6M7RATy6rucYeRfFXzsFYCi7iUviYYCrrNGMaxreRSHgmJcWpXo9wQ8KNPfEaM5yzKnrbJCLSWJhCMknDiE",
  "key28": "4yxwAkDMwwV7UVh4Tw18EXbrSVxTfrD88e81GnsAjcsCjk5ATy4S4SyDUFShuSoBiVvmdpja9ssjGS78HAU9AveZ",
  "key29": "mR9sfjWDvHp6dd1zp3c1TPYTA7XjByRKuXoKewL7ZCWzdsQVqVuq4eVsqcuGaSc3bJGh1PnthDzeyscnUdU5RZh",
  "key30": "3ih3zoyjQBtD79PiWgDjwRSiyF8XETQ8vwTHAcqYpghyu5jP81eh49A7BfQjHo6KThoxUpoH35b7Fes24yw7ddSj",
  "key31": "2xgiZUgYssjegSgjvMXNBfLRBF2FuPMWANpciKPdMYNdJs1TG8xTzPSNMsw3SHFsWe4H7Pzaq5CNz6yWS9tAEy7B",
  "key32": "3Q4VtmV6hYMar7LmHg2BRoGQEKng2zJhGu5sNhngAdRKfxCVVFmP97DoiVvPPSFh5dQwDbSzaaTBfmTtSDdo8YFq",
  "key33": "2oBVXwEZkBTp9k6mmyCwvN7qJeSsibAXy9VwoYdLfJQpwT41gpXTNAdxQNSG7AxxPKk3t3zmYTFqnk4fthKus5sD",
  "key34": "4gn8KEwtbnuDjV6pAuNopQoZnaxG8ftxFkxADxDXGiBa38AkboZVKY79S1rkPkgaYqX3Wggr8To73qsjPS4D5ZHN",
  "key35": "3wGNq7qHdNBDqfysqDAEKWumuhBTxuGkx5cSNX8VZ3vnZLfSU7HbDtjivK2egXuB6h1nNxL7DqV5b8wsKtrM3h3B",
  "key36": "4SEgTkC8cKppoFebkDwBefuVF3UbKtgRDEqa4Eyg6Uok6Y4GfbZEL4KLGrR9auKHfFr1DtiQU8Pp3kZq4hQXf98h",
  "key37": "2ySSLS6hEQmhaPavhyXkbQ9fVe3VKwAk99EayHcTqEkJjWcenfxhrTLFKq1JAS8a9wAGQEFpz7KyiGaa3QW7rEDf",
  "key38": "3LQVkVSNgbi44gbQ4cXLq2hZym3bh7dpLDBFq62AUWGS5CVeBbeiJDu6uqno1vZf1itky5mV5qwGkK52agaRTFR",
  "key39": "3nrDR8fw4EXh7YGe279UBkHGwKYpDedDzdMWwvTkHuUF7yQdFqNZMJKFmCYX1ciWkFCFB8RP2SqVsFuDZ1zQKN17",
  "key40": "3MKPgU6Jv8NxMme7ieYRtFxrN6gPyZoLBYuMEMFzGxG7mQE4tKQ2cRfpRDFJN7CCmTVkKS4KhfSY6vtaVf3Pbrj5",
  "key41": "4N8dBS3yyPwUB1A8AR2EpA18ebJZ5CNXEdMNENfg775k3WZCkjPipRiavtDyWGocEeMLvPKk74gpGGiDmxphWzgL",
  "key42": "29JzC4UXu68goPh3APBjFBg7yB5uQZWnEmjxwUr8g9PPzN3Fxz3UoHypZim7qeiCzttWEnVxS1bggTV62TJWkpfL",
  "key43": "eAywkpLBGpccZBkKYE89Fo2V16FAQFcUSWU6XciwcQvWnhu6TccHmKqhXAZJvNthvphNw5ZVn2SevgR2F2NKnBC",
  "key44": "avkwaVNCqAuoz8LLE3esE7ABd1VyXSmPZfj15MXyUPNwTR8UB9hCNLc6WkYYSXNEQS6Qu8xSqdhUKFPhzEUqcs8",
  "key45": "4ki3xfNoBgXeozvyrqgjy2rP2hddgtwkfn9b6PEERLyYtCtQJLANfPPQRNhYqhiFeMeg3ZsK81iaEGdPPn7hKnP",
  "key46": "527QqtxEH7ftpJij9JKgcyYZeVTKFskZt3CsJyGdDGiGMfvG962PG5FDrNbc8wcsgtw2MmTgAyc1Q2N715Ny1EEn",
  "key47": "2euJEveeUrmREKZ2xmSoRXYER15wWeA7oXX62C4NNPvdbvs7HTxEC4az14Gjj14wk62G6vytUrWxmYRz24Ju6vSp",
  "key48": "2uhzJ5yb3iRDAReP5zw8kdJ1zdz4wnfPnUBc25diAUhxUiSryu5V2VVjtBbnij4knhVRaqozPk3sg9P1hnsRtVsY"
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
