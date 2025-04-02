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
    "2v2ra2xQpEB6fitcwUMeeUFUGN6zMWSvhfogEWgrPTkBsW5bCpeLyuWxQJqDrGQkNVJbEHMcDQ1cn3uKvuMFA2GC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QmCsH2HbzvzYmqGRrjGxpjG7dYXnvv1T8irvKR6cE5QKpg3ykeQNkoWrbraYzU68JwHTTJRSB1K8QYZ47jsMCpM",
  "key1": "3M5fMXH7mfLR3EKA1RGAV8YopC8BZ7qbqUqbe6aX4XTmBmenSdXuKQgXP9RtWx1H32WukfAzcvpUJvbBXtMfnLW5",
  "key2": "5MXRtrNUiytrEVfUx56FjAUxsf2vVPGFSnBWstYSrkqNjiZYQaKKw5MwmCL8MLBoq5dQncS8oa2s28Hrsw4HppWq",
  "key3": "bGgWD3gproitqEM8GkgMZMrqmq7ArkY8cEuQ4ftnAb1DBnuraxicVr84rV8crf6VvUJpoWuu7pdhMgRcPwoL2hy",
  "key4": "3UFPmqabdCgTghpK86PybvshhzYdJMvqcwV2aHpYsjGB5NAFYFk6KndYNDKZbXANxCAzP1N8C57EJcbBfQZFvvRV",
  "key5": "5S1W83DV6sVuhnwjF5Y1kJBhpzJ9JfgcB5ZZHYP8nLF577ysZWnTUZezRr4kXNzAkck88tgUBmGKbHVPvpC5xw73",
  "key6": "2D2rGB3PKgdPYqjXSd5ghQqQVNcMfTHFNsH5SG5JSJL5eq5g5JeFD2GyuensdgcDKRNCwhHL1x4XR7LeeaQFePrj",
  "key7": "4pPg3aabiXsZuXDfR37UUTkoZV6aEFGLjw4e1moAxdDouU3yDdJ4z137jq5rqru4q6qSNzKkZbWBVQkkmkrmu32j",
  "key8": "iVXgb3YBpfGgfUvHD15kYhYsVrXt8iMVzmCYC87oqp1UkBttWDJ73Hzme3u2bZ8aTLnVQFQHiLF2kFG4v2AUYZh",
  "key9": "pWv2j8Xz5J35jPuBEPWgWBquoFsK7LT2Fq1njjg8T69j3AMFYMf1fso6dLuttGvM7C8MS4TBEMoGDLQ5SLKQvSL",
  "key10": "Q7cjCevTNeRbNtVktzXExK23n7DtsbHmiZwAcGPnxxWUyJjemggCciwBSb1iK3JazSEC6KSogDWQjzJFjRy4r5R",
  "key11": "C7RipoMtAcvv37Thn3sCZLtTtF2Sxjbyz8p1wStTCijbkyvJwBJbG6aWhUmnNmXykChk2hpf4VyXRogfMgvVHHp",
  "key12": "4mWZymZCd8RZGaPiNrtszMQow1v3gQsu99BzM4YD6Qp5h9d7necoEKbfHWXjyYb26jpjaGW28e1bfFC3Vvv6PvyF",
  "key13": "54h91dEFoxkfxsnqCZTb5jZJ8ZMfLQr7so4XWNcKX6iU938xCWRJnFH2SCP3a8wWUPGJ3kRpAeEBabrpZSotmDXD",
  "key14": "2g333YmPgGdghJBjd3guzgkrncnAfTinuHbCennSEaFjTWsvTrFW862cMvWFpRijtvzhKo2Mdx9zpuVqBMUq34Gb",
  "key15": "xwQEp9gqDWPEUkm6g2nsmaZD5VUPpj1hNp3g4AU4xqr2D1NHD9R2iKJmVjtaqdjNduYBUNLQt5TJxTNpKLhL97U",
  "key16": "pA1yMezsWhZtPdntYLMiq1KZr1C7cTUwPYTQyzFY3jZnkMYpVYtyGZgUWt6LHrGBSu4PRki3PpS8XYv5S11Vr9U",
  "key17": "4EUCHVXP25KH4ErcSm92a5mWYQmuUi8fogS7Pxj7zGfgBfeNYqZzHkRyNPGSA2JtPkKXkPqtvUoDHh85ownHUY7N",
  "key18": "5VmW77RrdF5edivddwg94YhnXvQodhcP5m8dpsVWrNgd8DvbmKwaRRPvBHAeDy3ifJC4i7mrM7z2C2HixWCJBsEf",
  "key19": "2fesVdnCW56vQxuWuuUfRvjTSTYLSjWYW6Q2hsDuR2SdAb1tmfLGdYi6rdG6dqRM3osGJzQm2w4oSNkia4jbpQ4C",
  "key20": "4skdYZmHjSRjogxvAdmRjvDUMfB3se2Uw1HCycF92TTPB6RFb6vK5dqtyX2T4nrWDCAR4UzoKEJmgBKLHWwpZPYz",
  "key21": "3fiYRhBSuchfe2UcBrcfzt2pE8MHATB5pywQX1Cc67HaHzArCMowVvSHUpuJwWpj9fDPzi1zwmZFZCWzC7XsVCSj",
  "key22": "5QqV9PZFm6v8ghFEdyxBikMDTzKMyGPSEqabdgoF8WuUAzrdrj7gRLGuvLKVpMafLyfYDFp2yAQFLbcBSxY8CQL8",
  "key23": "ftymF84saKFMfCJ8SdK7Hkrxf6eg4txfCaWiAeH5cfLo1KiVnMuq37YcUiFoZWCXtnGZ7yX8DaA56VShBYUbEKZ",
  "key24": "3xNC3EFpDJnRudsLWuQ7eCiHmH7G26yssJUe7HGFVQXZH4F4aYazpEcfsF1voV2SYpm5BRbZKhvPrLDpgTJzNPVb",
  "key25": "4z11WqnbbSxDUNRPKsnhp8afdXcv1ZK6WM3ffYsTGJmVNKTuDm6YDpYfeM9yitLu678VVvxCXN2bNKW53jhAmf4C",
  "key26": "4Wby42oofHv5N7KsT8CDfXLdda8M9E7Qki6W1USaBKHEiceF8onqabLZxEW6hfZ1X9Tp4WNS3Fp4XQnet7ScaL3z",
  "key27": "npBDrnLUPHnxQJzKm7hoH6W6sb79ynu8ndACn8WjHFtmH6ZhNTGAwvamyvShdzypij9T8DixeuDt5fRWVosqa1Z",
  "key28": "iMGYwBnmPYCdSPsc3V54EEeurEzCDrjoFkBQv94xdhmLwaW2FdPeT5eVFsiRujyX7EpJbg1VBndAquwgjwh1U7U",
  "key29": "4vPgKQPSQD8MCj5Tiju8idLgGdM1yP3psqYdxFVu9u1mjsnvbPWgAKaF2Nv9oGJ8TxNLPfdEQneUShwLkAZbULHq"
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
