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
    "2ViTCueuafFAVJtnd3VPaimBrg2MGYYEqqrG9TGNYY2gaSjg4eiNHdgR2TeBDdRPnpnrPh1nhtjbbGkDJr8LqkL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WW4TzQQMtb372BZe5A5DFzpXk81et3W6oxJ64j7chUhrJsUnUdoYShurWEywc4VBAH2hRirQAb7B9sq9QPKbRVk",
  "key1": "2zwc8GPtHWwVp66VZ8mBew7QfrnFrPV3L5PxP9UDKXMJu9XU1cK9WDjUyLEGm62CfWhpE1i9khWx9dAdU4LwFuyX",
  "key2": "4bR5EGPQ2N4mdBgbgUeEV5Etu2dRHf2nFkdT5Ykmfe7QUcL8DL55vWdTh4QnDGHXL4s3ypr98aMFc1M3wzxXQ62K",
  "key3": "3kvdp8ebm4ooDRnbqhftHSnPFdKVLQZmD8jAusVps9Hmx638r9TXGpTgALr1ssJwt4xXqZ6u3z8ePwEekr7Af8Tx",
  "key4": "2E9SCFu549313beJfqKzocVVBfsUewZCrGKPt4MRm5Q8UcDtdqpKoABpyz8npBBsHs6DFrK8TxoMypTvNqAUN4Kq",
  "key5": "5MYxdAzWgcexSwFbPFRUpDC4jYtcRNNjzFWr1fFaMoMhKYvsrK7XFwAZiMmoA3NZ3SJjieSH5nKKSRL2kroXwoco",
  "key6": "34UoX8wJrE2yrxF3dLZdJhWe1dJVTtMwE1XBUEDcSWUBffxHUfT7Xd2PtCjETTKSiXK9Z5QWMfD3wpoGbDMQQnmv",
  "key7": "43hfa2auYs1HkaeB77qwgG29oBNtfeUpJmgYLnsY32PUobFxhDLyi5FNcqGzGEAfAYQivGyLSJ7oEwe4gcocW33S",
  "key8": "4w15eV3GiSuCmBPtFakL9eQbioLk4PqXf6NXAexuRtTp7Jusq9aCEKy75DMYKJ2nyhi1EYhKdihRCniSM3esZouE",
  "key9": "2aBHEQhjtHJAMkD56EgmryWJ4H1igQTuycN7ufzWTVfXPJRJJgkdozhyiuRHYAVoN67TUHdWXnG3iF1jGMtnPXrg",
  "key10": "49wkysjTaee1mPnyjADecM7nJQJ7VYSQLBj9w2j6ER2vL5FXMJ3cn6s7baHfGxYosqhQhTrSeq9BQSo5uXZJsqyz",
  "key11": "2wed8uKZCTHMfCinDqPBJkEymbgscYHB1ap5wB43CpxmcrmLjwn5sbYyt4D1LAaLjerQP42EayHqU26P8T1UmjXN",
  "key12": "2SJLea52wSWCBNpFZRaiJgiBcW9zkHPXNNafbqk57AtJdNaVWikbsvV2PL2uU2aQQyoVeeaW8MA1SML3g2K318LJ",
  "key13": "3ZABQKDF3UePfAG7zo9oMiigbDtXaejL76KQAHrNUq4F8ATjAe2V251LVkQRYyUm8jTCW63EML9uyJp3CMzUktbD",
  "key14": "56dVoR8vzDEEabW2UXSUr7DTWsxFZBkUxi4v4CQGSjVdWBVM5jopbsFAFQAmPgQr6RMJYWTkERGcPGZVvExPtTkd",
  "key15": "5Pz1UGPiaFM9xaY3Hg5SR77nVUDLvTmyptpBDsAKtW7GADUQW3QjRMMh5anHz7iQsAVceb89gUTtZdhc4Ke749u7",
  "key16": "4FespYRX5E9wAaCkuAQtNs5PMtVBp9mmA5aHmhkpiskrNRyLKAYeUctEZhaxfX8JybbTcVki8TJXPiiypfYDYXQS",
  "key17": "3tu7fnj5GLC8274dW9MKsgJJQGkvyY6sbsHAaVrfQSxDgXTuhmR51bQikMjLoEwURMxkUjc7FciAiDrHtcHt5ee9",
  "key18": "2dXoxmXyLW3xZUbZyLSbyokJ23ozXa43JH4q6b9jYWx1mgm6FsHqmGrBxfvvSEKoCdgAzhYN1weuujoJfVYWZSKF",
  "key19": "3t6sXw7c8LZ779zFatSGG6jjK2Qa2mXJUs3cHz7h6XmVyVjyAcfTT69To5cQbasaKD4yTiHMPhLHgiuK1sSro3Sd",
  "key20": "4n3bKS5WhsNHBKrxkjQRafYruFBoJxdZvAjbL8iHdi8qn6TRRnQEitgS4XPCbYnZBDanaJc2e1Rx39xLANWo7LPr",
  "key21": "4xdKrRTdFYiJGuzUD4XeJwZ7ovKpKVQFKC4WoNyHQUAcJmMWgzKaMHNe5RAbrPWqPfZhWK6fm2WcN4Ncq3GRTXNt",
  "key22": "CukBmcsvwCgJ4k3nFmSab54B59fTH8SWtDLET1BjSi8gzmaHNuqpYXJsU8USE991KmbjhRxpWZtGCNZLdr3Hij2",
  "key23": "29hGHPYkurVuL7WL288s5oJAsdFjMxS3vUMAGSgkQwaoiJ45yQREMsVxnkvGxK8XtSaY17JffTAPwP9LZVN35wbm",
  "key24": "48kSK9c9Lk8uz9LBk1Q2Z4VpyWpv3hSJjbjKPCEqkRErbsFAUKt2j6qciksxgVy3iYhNBk8sNYcnv3LzZx6eBnZ2",
  "key25": "2vDcmqHHYTquVFZ7Lmz6mEmN4Q6aJ68pm38rubZrfBcFwj4uPzjGCZizhrHLdtLera3mPiq7Btrq37J6icQywjaL",
  "key26": "MDbCrNLuQ6z1zGM39AiskozuPuH277hwgTDs5GNe5j69iVX4fftACrMiDpozuqNWhnF9scX7vY967V9T1FNuKre",
  "key27": "YjNxaem8wccjHHxhtGay8MtWPyENmV2bxRPTTjqf64XVXYrwmKv6FDRLEFDNqaGP7sPfDJk61txcYu4ixNjkBnq",
  "key28": "2o7PqtENgniC4tJKKVQYDR2QwLFQEHKNivJULNucGktgAFfJ9uEM2Yc5vFdB8LbroWS3gTJ6V9Wy6sh9WBiqHo4N",
  "key29": "3Wu86oNAz1DMhraY4GLJXfnqHedqgjRfW8Y4AkyF6bspMUv6WgBSG2FsfBexKD7HV9VLtJdBXom5uVJ8v5ArE8mP",
  "key30": "4R4qRrLw8YAHpDvUdXrzZL1VmsJqvjS9GJbimA2odw4VhULUo6fcnL7y6Li27xksjLwcEYBDwapuYzonpZMm9Y32",
  "key31": "5PmY7DjWwabSHW23fKZgB8jkhEXxnJeDSGADtUEPYkctQDBpr1G2uDvEtw8sq5zRbMMAFe1gLcLBkTSQtKd6Bnmh",
  "key32": "4tUEhcn6xr4LzLSSSF1h1tu2D8Gvdda5JHyTHUxpX1bhGnu1hsbTdiPwcKmV7jHUWCpas1z53cdKYaZ3ZahvDDoy",
  "key33": "5enSHAsmWTASRBotowudyGPhLo1mgpZngaxg7jwWrFtJkGGdFtS7WeZmDVYjnEDJGhuWdaaKXKsLQFndpizCbEuN"
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
