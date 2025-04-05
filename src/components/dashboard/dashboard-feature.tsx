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
    "5eb9MgrukUokb956o5iae1NeiSvKhywdHYGEQCcYt32Qw8Ep3MnFCjjj5FXMyBAQPqbmTPrTk7aCFbvt7AcSH5Cr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61vSwTL2TzWNtKi6kvRrY5ent3ADMYnfW78hBqpchshmzyibQ31eaCKb5ovWmRpzY92sE6jCRP4iAKzSA2k83GJq",
  "key1": "2XVRhGxfH1g7X1Sj6nL78yj8dAGKnniqGn3PbQfvqky1kqt9C9CNb7pnHin9UVzWCVK8SbCjGTtRFBQ8bxmTJHeP",
  "key2": "3f1ZquSH84FTtcqw3KgRkK9wQ5pbDDd5X2NXhDMWbEpjD1tp5mm6W6j3bKHK5MvtRUXcBSJasdE2bL3aUCG3fYqy",
  "key3": "4fmvS16JL4XMbejeFjs2datk1RtuTKZPNvAggTzuE9dtgmux4a7bGi8AmAaUH8s63nBJWCiyMveJL6GzoTQP5mrG",
  "key4": "3ktUiKZVCKnZm1hVzDxwmuK8BRmEPojEZNdMC6Fy6TxunTaMtJKVC1DUZj4as4PMXCWhTovNbvgPAHPAWRaqso2v",
  "key5": "3FNEjB9UMrBgtkWca2Ds7JQqq7Wckqryn2qJuUF4D7gbPGwu6vU9CPjjUam1JbeiLe2UkrH6wGYqF7rkN1kdtNb5",
  "key6": "KSuQKsh3J87zhBZUrGcu6SNKdg6AcamiDfpXC5a7a3AH9PmKcWF9MD3PkzDCF6ffPJyEkxUNSmWzERQWMYsMjDo",
  "key7": "2GWUT2NsaK146KiowYAN4QFvbvsw97wEXJWgrfpRi54vw41a1YnKDFXvaPmwZVQNJ2q7zYwpgSQr9Zr9wZAdgCXq",
  "key8": "2GwJCVdZaNgNEngiBYAgvTcW7pKBvJbRU8u8jgmHW65BBnQ6b1QYqxmLm4yfSVRvKBpoLiUHZLypoUuFhA6WvXR7",
  "key9": "3WCVVqNFmMnUoo5FUF7i3SjPqWS19yLxPLWPTR8F32bkPagC9qGQ82XX5or5j3PCmSa9UoueJ9XV4zFkYQNm3L3P",
  "key10": "35LjiveMKjCSMpEQaPmyj8p3upnAeLauFy6CVYRHcDpuLuJRrwAQgCb37KCNtAeLDNjV111CbFWfpE3dTv9NDg5b",
  "key11": "3X6TSejG5An67qEHncYmYd5cmC2i2We29b1AUHx9dXv6wd1XHKNcLxULFvjx3ZKgZoTmaB4E4pd8Pdc4HZBhFBhw",
  "key12": "3QYY5MrBdRjzdkjC6pYx6UnP43C6vStgkmWj58tBK2o5AWvpCxVU88voCFDU7ougnp8c2z1cTKqyUuGZkaQrsxZa",
  "key13": "EnXkzDMWDV7nDH5mMeTkkWpM34LUTJK97PcnPUdSdygymns3FQqHSaSzTrAZ2s6Z78TjdAnYEz8dMR7eBn8tjgD",
  "key14": "3g5NsPXY1TP3R9cbD8SXxV6y14aMhDgoWPs9GKWptMSm94nmxuunfCz5Cme1kfboY4TeBcApAsGLMkp5FnUHxJ2z",
  "key15": "2ccufuEcnsGjcBdJ1HM3LFYgPHVAgr3ALyqAHqSRyMZA4WBqbfEZV8CzvTZctXpCRvg6pmwJVSsVc2xDnUfwx16a",
  "key16": "2SWPDq18wkY9vVDaAWCcvV5q6j98KCDaniTTwmKxzidVDphjRxznMizJeK1apNK3P62CVdJJGnraxSKWSNvUtHrH",
  "key17": "5TZnsZgGXwbeBnwjwQMjmF4tYv2Zvh2TJeLYg6hr8vYhv2GPa2LaViHdAoVh88ZL7Z3jSEH8PSCRHU5NgJy9ZPxi",
  "key18": "2RBMhSwwDgCsZy31dqsfHV8Sfo7Qxf8gzoR5sT7cJwth7TxN3QRykbJDmh5miyG8mhDXQzRJD9ktWXcEYJmtYmt4",
  "key19": "3iMetwfsCjL2jWTraoS7YFPYXwhUoRJZkznZayLT53zKqZ2k2Uy8MwwgeDxHE36W2KHwgsjGStsrS5pfmzk3Fjnt",
  "key20": "4Msg5LZWKEJba4Z6bX4DVVAaf1T3Dz5ZuMHQuhox6dRuQL2AENRFS4i9gUtA3sazSBMHuNTKkCDhEni4MMz6ig5h",
  "key21": "26mqHmFY1Za9xi5iVjdKpyEYm5fSyHi3t4EvrvMqdfm8EA44KtBDQxFu8TDgnk3DMC7VcReM6pMHKwUtU5Ur4Fpf",
  "key22": "5mQryDpdDt6QgvHBU31gm8W2KGozGrMfpPs3F2RASLdXvKFYzvPNoxpxgb9xJCqgQnbduqQL41qL3uLFrEmJkbFT",
  "key23": "5vxz8wBgFEFrBpRBzoKhZeejMUpqhWfyoysGQJXBsKis7viCaLhB74AbAcqSZLD7Hqy8c1i79wjjL7kfkjgi1DuT",
  "key24": "5evjFSLdByZVeZyM6cQAx7rPAS1RgkgW21tXmTmkoA2qLAUiVhhW3QhAeNNJiHxm2urQwSq6HrDAjWhpzZ3qB3z2",
  "key25": "27WXUDsM7PSB3jANvfe4q3KP9UwXCwPMLGRpEgw2c5gg1WAWdanrP6HPfQARvo4BoafymVKgXiW98atrYkjRnhZn",
  "key26": "5t3HFaN7bN2GzfG6RK35TBaFtJeGbkVSCxEdtyFEbqNRtDkzYdoQmBsZotupzgM6aNoSKNm2Xjt6Xj8UaXmZZkCC",
  "key27": "3KvHunSjocdYyKrDdWnYsUsDRs493i9q1FqnLPofX3WdfzZ2XQGcvBY44cA1tEMEFUTrdCVSU8RRyzSW1dvBNRvH",
  "key28": "2K6zW2S2fz4M7FCSEpVZKjhhjKdzvMTQibspHUppjxXhbz44dFbEthMj5auD9HGWW2m7KJQDw4PQhPgy8twKC6oj",
  "key29": "486vTMKkQWektvueqQZZc9tjGiNEw68v6jZWwaGU7fKyaQ7YaCm9QkNTaLdhwSsr8777hUsZ29uAqygx3AHtdLNw",
  "key30": "F7UPFuiawYjUZ7hJqzPj9eZ1SxWPgy25sg6cmL6GoTbM237qSREVo5NxiHiigJBtUUHAiC4kL8qowQyi7Kg96an",
  "key31": "2hzzHQhNZgcWjKkp9Rw8p7Cr5jPm7s7Yz3xANQM3bHGBWmRxRWW1zj7Ev3jmhhkZ1CYUNSJBegicqpDCerLW1Pb9",
  "key32": "72UUPkDfGttoiTW8EjziQu3xant74p88UM2XwT56MXcs7gsuBwL8G2fftbjCRn7eMsWsoK4JsyMPReY79vTT4ZK",
  "key33": "3nege27wUgALSkAAZ5auLWhgtHEWo996MCDcs5AEX8QBbikaVC8A9S7LXwwYxPJAGeHnc9a66PjzriRPtKgNaZVp",
  "key34": "bExnDJF6XJrcWqnqPhu6hRHykmG5y1FrjavDTuxBDkHdotEnsB1mJ3LZZqziq7FR2WhA3YxG469sKFrFzJEadtc",
  "key35": "64pQ1Qa91FDCDKpHfC2ZtVCwGNN2ZwnZor6vXUjwtSeTWoCvEwvTCxuJsJDHTkLYdjvPuETEdXZLUc6j9S6DkFCd",
  "key36": "37LHaHbcPGfWCQdpbKmixyjk8426EpeP6tHqN7rvNtbC86ks4AAw4NKP2NpArXAg3xnQ5UWyZBm9PXQxKKoZF78s",
  "key37": "4nJ4fXjJ8doTp8CV9NCaNp9EJeQkoCYxrWN32HN4w7K4CQZYxnbU997iGVJUVRM8XFeyMVM6nw9BwqZG42fvRfrE",
  "key38": "3wt6NXZJJufy9b2PJ4sYSf6SYEkn9XRp4pcsqSPyPZvuyxnHcysNQnTiytmKqegLXqZDv1DaTzBHhHJXq5kYeW5q",
  "key39": "4EntKMh7HLVnhE31drodPDwtrHr6kP4Q9AVZP4ueMrbTpTY54MUgGAFsUmRQBZnFLFRG8gA3hXE32j7cKKLZNjcd",
  "key40": "5vHDH7a9GpVBYGB4ff3yzGxUuRjewMEh77avQwxHGfcr2sLsgDGUbdDzWGkL9WbNtPjKQuafwtu83exMjY1c25Km",
  "key41": "nLNFHmyTMLqeuDNkCQiEMAZxwioeaCwhEZQLFKsPD8FwyN4uLLiLf3kMQsRU7spi7GwitLJ7bHJr9kxb6wgENM6",
  "key42": "5jRRjMNbSworYjeFYFBicxopUSA8E4JJgejpj7P2ZQxwNQYDTYP16sJc98fAS9thyKLpeApG23Kr67D7neMQarZs",
  "key43": "3HtTyyF6uCohbJxNfzj3ykDqRNiSkUUDUBM8QqBNwi3xzsPD7s9uLMNts8mxYfNJF4qqSPxz95jNfcxQbQFKwi3C",
  "key44": "cVjybvugLiu5ApmafzGFSPgx5cC9pUUEVMKtquz5LWQWHHfWhmTFiY99yHCEqxdThodtbr1u66LqKZHJWVqy8Yu",
  "key45": "41Gjntev7FpaEAZRVLTDyrqaEZWGMB8zSLS5Pv9Xdo5Y5o4iAJkWUctih9zToNsPbRdLTDUcqBBWmQDMEYy59mKg",
  "key46": "MDDL69oYipuyUy2yNfZQd5Yg3RvP9Lgekx59aUnTroVPBWScSSwAjgUiS7p9mmkeDh5sYbF4uQViuR3pEds9tNi",
  "key47": "41q2uQK46EuLdcXtLCks8CRFzGG2WpHvph5auZxp5KFuG3hQCjsEv7mQXJMRkLy5QsDp35HNaa9nEkZR53hSQEfP",
  "key48": "62cmibVtgcPkhj3akb4CXbv1np3RdKQswKFd3NRSdMrv5CnqdRY4HGZUdsnoDWtGXgHBwmdsnF23nnB1jcRWWJ7c",
  "key49": "4h5RZ3gwfnrApbUj1R2VaToyfVmKHbi63jUMCVyhYoJw6HMi8LuxejVQXNK8rC2aEDXm81NHeTtHmrARKK8AL5PV"
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
