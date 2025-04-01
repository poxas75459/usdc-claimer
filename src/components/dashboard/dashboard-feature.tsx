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
    "Whzga7UPqhUenyAyXHwSZbv4ssziQgN9fav4QLn2U7TVywsXrwgKVq5DYn2C9k7P3oo7eP9WKa6svB8cKjvTgXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37bhHSHFphK2Ud5wCPDPJruWUPDK5Gkfw8o3TwAzKQNJdanpq1XRuKr6f6iRKuc17NkwZe8jxbXQm8jgV4b9hEvR",
  "key1": "od9n2UDStD2sRwmpGrbmEyty9Uyji3mpHkUgzoBLjVZisPPp8Rx2SbTfcPed9juwgyTNdrC3W6BvifhQKkGdGjJ",
  "key2": "3bK3JHrhUJG6SrNUTkhpDSWZu7W1KJHAePTHKfF8QAvHVXM23umNeeuHNg9EiVrySPcrBAkcvNb5ELUitNcrhoHF",
  "key3": "2MagNmZK2caHihyYXwKW9uDgdwHz4p69HRoqtBzv7s3nTFSd1EcFhrRVnUK8s3ZRzL2TceeYTMQtorBA6PxdRGJB",
  "key4": "fFM4T6m6TuD6JNTUke9fNCbNgqGzZSPZ8fyYyqEj4zSr3kRC3EHA45Svoj8HEsMLdVzP32kpgTnoPxBRXq6NVxC",
  "key5": "dziE9VHqN3mHQZU8mMwwEqrcxDyRux8Ae16zwWzaVcK3hrLVxTFhZznypS8KTUQSQP5UGvDfmvarQttN8Zi9uB9",
  "key6": "3p8AvU4mekWZRchLKo5ANnWFGZTrwShdMYNpuHqqUVxUcn1StcxN7fSov8CEmv6MMuuRfFVTAjquuatoA81vLdQF",
  "key7": "X8copdewnNA9sUkha7MoTrr4UEePTiym5rbuqugmeuxS7mk1Hm46878Nhnq4erApeCLocpvFZ6bY7PETqjDnQ8B",
  "key8": "f944qPzmPUFhZXH4yqojY9Z4a415C2T4Gj5Co6uatHcuDpAof11LbrM6N395qWwFd3Ua8Grux5hH11qsuu3nkZr",
  "key9": "55WqtKPqYpGpaZ2kGFy5iMjx97PNnn37bXnyyEaDAvnsRnxPj4teFgPBGrLHp62xjYC5a4XTmdXVYNBgtNKg46mx",
  "key10": "3eC8wrg2XfqhZSLrQdsGK29A5uNJK2QBPkikoUkLspaKqoAv1ztmxrzu6tvdffZcPrDZ5BrVUL2wFne3ZervBk1E",
  "key11": "2RZrPP2iJBkLZ8qtRmbDhnuYP9Qddyzs32bYuKdMhN74TrgVRsLFTtVB8wQ8A4VzY5DHyU1n99LvMPwSVCcaDR7H",
  "key12": "63dMyUSyiPfaHR1sCMPB3732jn4bN5cEoBm9kCBb3r1zwzNRedQ5i56krxKkBU2A64CbU4gi3vZZWJp3hQryP7R1",
  "key13": "5jBXhNQbXpmyrdfDeMEyjDsSB4iBSMk54s2wVZQHHWhZZ6ogDvtcSXUUc4BjYtJqJhEurYiN8SoZAJ9jkZB1sjoi",
  "key14": "NPqgjYAVWvjTwVbWngwRjCiDVfLMJBumeF4kYWdSKAPw4Ka2F5CC8R4sKeP9SuTrQTaKinK4ZajhyVFN4VqdxV3",
  "key15": "5ERfcjqyHESSPRp5c3i7VtzP8bgDvVWjcqcHrGHnUq9MdmJ66njyVbBMe44Rp87sWDmYrvWsvBgB5nYEDyboDx6y",
  "key16": "3vUmvbb63Eoe4CjGnE2KaLHmaTY965wzqCrZvGMCc1GJwHRV6i6kKRMpYCLoEfUziyMDCrey77Tizt4MehTFjyuo",
  "key17": "4YdrUYmbW4AetkwCdutKJsUrZt4rxYVvKd5o7CDuh7DJ2ALJMTvuRo1swp1X7MjqHHggmLTy149A3cfnub4Cj2Ye",
  "key18": "5dKgEARndgY4V6HVeNmE7hsteJKVjB82Xtr96NWYA3qCBxGVcSwvy8wYFnBLw2gQ7DyPHs7yQsxQiUdnpTQ3grdN",
  "key19": "2ENb7y69yB7WRHWAoTG9MgMjehkDPryCP1gwZcJwX5Ryz52vbvUTPP1upBfnnfz3U2DShC4TJqK3jhgg5JFN9EiR",
  "key20": "275TXJFVSGG8sEvzTL6Z7XwEgaUveTGM8sHA5QKcvSFt7jG1pKNgYm1W2QUAbseGo7W4XFCL6wnpAFTmuEzx7wtQ",
  "key21": "5T48NeHBv6wF81naP9Gw83By5gJcQLq3Qt4AmViiUF5G6bzEn4T4dCeKpKx93ZTuMCixci87xtp6oZPUP8SSfitA",
  "key22": "4LtNSEvk16R91ZKaE4DREwXLKiaSA23is1xNuepFf92hTELJb9eczQ4ouA4BN69sXTNYm7CZaYZiv8V1zj8DCARi",
  "key23": "4tAk6P1yHSHL47pqyj4V8rRUkNH9nJEwM92FR1rf1TMYxPyVJHkKhWScnHhNNUhPYQweYAZ2MMqJjf85Q7iSXJxv",
  "key24": "29EHezmZDHF2qRrzPCZY4unAhok8P6d87Kq3YmCoe6knz45i6HnR2HuncMJQC57EVJYhw24h9t8tV7Q4LrW4ieAS",
  "key25": "3GGyKC8Vg3i6mNvpKBJRpyyKu8DaMKr4ru87JHaqZCRCpDibedSYP88xjjD4ZJBVL1V1enxQr7DTQA4akFoxKLho",
  "key26": "4B4VV6jRYWPWyV6eMh7D1QLBAfMRaJp5aWhrR2rEDj9rHeGA8rNscJq4AUyM3ENQEZmGQHTTzMHTvLhgPNJqT4Kp",
  "key27": "4Ffr9ZogVRX41DbdiHqyuB6C6uknfaGKGjMwcg2Xe2X9AkQhqytwKS23ndmTjEgearYNxXi76Gq3YW7hPmWDWzEn",
  "key28": "5MrNwRjFoSVSrc4F5tabgTBmWzqXrAzE7SWMu1cGren1AKYtq4R4gm9VkHrwhzcH2f14EPhRP2PGT98tbgUyHjrQ",
  "key29": "4tPCFdF7AsLe9ieYLStReecEd28eoGzf6uojSpVev66pyQzUoMMmksyBmXLsxD1dtQCxpdBDTmCNxo8HVp1uiTmP",
  "key30": "53ymsyK9P9hy3bcJpPZfTEmQYKQhKWhwVpNcN7jFLh7frDtiepcP8XgtCtMy2EHnBUiAGtyXUt9DYCrgryZ4GMbY",
  "key31": "4Lqx2LcthCcX95jKWwCobZF3Kk3UmLWgeyofybGeNVmne7CvDDfGcbT9Ps7xRhoznkC6PSe1uJexGPTdJjmK75je",
  "key32": "5BHSXGLXuHzRTgytLw7TJrqJrvu8weE66PKYye78VP96QaFaoL8NHhffVudjEkgoPPTproFXTdhB5QBzJJtNoQZk",
  "key33": "2ACs6b25H7i6HQatnXktJioMCM7oC93ML68wPp2qpn2PCn7rnXBKpqsGXx93MfKiy1EUbtLrQtrweUeRpHG4kyLH",
  "key34": "2eQ1mUvnEkHKggEVHnQq3Gk6nQwAZf7bjzZ7Rt1nJBsuUeDBc3eonYhcMqPAspzoN68xdfhJqDN3GdB8CWn9Qgxo",
  "key35": "29wLwXpiZtJDHfkeCiu2PGAY1Pbd6f1y1KbQJ8V3x9dh3ourpo3Jh77MDAwifhKnJeMapgY5rMo98QorqJwfrmgA",
  "key36": "ELPGb5kcfMFA5Y5SHEHmSZmNVSeRANeurfTh37eLvYSJzNCqZz6EZ8bPxsexmhgMbuwq7fDE4qnDAtAN7Tj5G5V",
  "key37": "Z7FNHLj8Y6uBv6c1r6ac9XNcSPmRtBpYE6dqpqJw9txUeG9MUwN61CEG9PSDDCDiaF5GVjjSsT9XGhFht1SUWmR",
  "key38": "5175veKK5UdQeMWHPKRyJ9Kx6Gu39BqXX5sMTkZFRVX94nfr7oB1TbVryme4HjsxMnY2gf7YNzJ9HgGEjYKNu36Q",
  "key39": "36Sg664DNFZZxy7BDR7N68Dapf6BrAn8WnLNs1Ao43HqCUGCDG26pYqwfU5z95yfpifxcxU77UvnkowLEP95LJ95"
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
