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
    "CZnyzybtWuakHmRiBd61bfZdWtmkCpLbyzr7kQGxKs6cxKQPy5mpPeazPDAJmuv9Ur5fKKG1ZoFeMmz3jVUKGXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CQw8VCtmTvg3vM9ptCgeRxTPC5vr8oVx1EnsHojtjRA2qQvxxzRrBLJTXZT7BHGBwXCn9rLxvmqgU1AC1yLqVpi",
  "key1": "5FoVr8rTwTFjiRWK8X93N9WWeZdT6fuAnsMrk6QCbu8dvQfKyH1BfbGYRVC1kekeTzaL7HqyUx7BhSxrKsEUzJtV",
  "key2": "4de6guyfXiNGHsWMpMrMJ1ghiEVpzUYztfGVy83SrAinhLktS7Qh3wNRPHsJbxoZA8SLoAm1LYN3U7MiTUZTQen",
  "key3": "4ssdJgXg8PcUmsMNn9AkL2VSYPM4ksGP7JsXtRqQCZGWSRPgHpZyNmnhGJfr464vsKNUvTA765D6L8seMkiKQrr",
  "key4": "h5ZK9Ks5rg9QEkwa1ym4yLjWnk9VCWZy9StEWnQRGPhdJxy34KYLPN4DieL91nGGQ6A7LuRVu6iqaDKhuiCik5a",
  "key5": "2WuDHWDRKYzUzjanK7CuyPfnh7Mn6gdxsLi6CnczyNE3jSg1ShDUbjKojQ2uNUxnb2d12R1srdvnU4snPD8YvJrf",
  "key6": "wCCk9RTETRNFAoUqT1KPo7UHqsMtc1iR265vPsKCphTn5uXtBjdqHh2x9TWaERh6DQtWXdBUH7Q2m9oiPDSjf23",
  "key7": "5RKmWrEd19bSCPWcsYqu3WdGmpqRiChtsDCgsmMBAHuYk4oCxDKiTA1AcMAJFRmFEmtDTnhEKG7ymDC6NobLNP2H",
  "key8": "5EXJqjfgECBYawQCz8hXEo2n15XvbZzwbk5iPD7M7wNrr7Svs2PHNaEQ72EcQPaVa6Jo2mnhzeHtcUbwMqrHpErL",
  "key9": "3GaPq18rdK6hwfw4kEaTBckNUDqBEJPxkN8zKt7uKZXc5LrJk8AZ5otPdmY5H9GQfdbCn8SDLncoLUkSYg9KJfAq",
  "key10": "4sjJx7V6t39FaVTbg1eAepkVqYMpCr8ZFBYgCxnqDBsRijq8hyAUSWpw1EBiaKBwt794uRVT2XJUxErKppstF21S",
  "key11": "2kW1DSKCtXPmik4G6LJ6au67AxPstpsNxZEX2A34xneJRcrDD7Qpxk4eTj2358hkKh3tndGWBu2zm6KoDu48Yjyc",
  "key12": "2fYZrf3xooSApdEYVtDEiGbi4ZJsoGQbxUoGnNVn4vNmDVXC4svuGLdrvryo2AfbpYpEP5HvuQhHeARNtJ2S9zk2",
  "key13": "2ZjUxJUTHRPvjj5EjeM7LbjoLLWZ1ZjDSaxCsV2dhb2fS3QK4yqzXLQREFeYhjvaTEQN1PGFEeXM3mPaSe5PzZrg",
  "key14": "34FCSpdN5tTaSu5PxHAgpay4MbaE4khYRydk8z93nsymzjJLESHsymrSKcAbRNp959sjD9Y6UbPXYqFX6Ac49sce",
  "key15": "5eH8E1EiNBELbXLS3FNNCrEv5cgjXmVSp35JvGEKumZHCPK4TjnEBi9gyB6aGcsUUnCK5oevM9nRezTXmRQwpiJ3",
  "key16": "4BDYxk2boQjPhEkWYxijVAG9cPmD7RFTUDerEBuD7aHBbvDSDxXAqi3Dt1zpL1DSSTGq5MfyLVcyN6jKFZo5cBPd",
  "key17": "3wz7FJ7HGTDCY8PH9esPy5VckAbSjeiCbrRRatqJvwRwL5YVpgR4qpqC1YpHaTZryvFytbLtHNqsCyAovA4PgzKe",
  "key18": "4NJRKRC1hEYdfsvvgXiyUygNj2U2953oUSBQ6pdJ3CJ6t2mSQVDeBRqZYAE9ThAAHMkAedcue4StcQdVBGPzeXFt",
  "key19": "2NYAsSXQu2eb8miPnd8idef2siMzKwvYBBbm8KKwPYeiZWx5bMn6CHQYHLQ137zxuCJosM1N2PxjEG2XVdpkmjyR",
  "key20": "23wBp55LFW6TAHtqEMRtYEvqMxRJHSsHd8TyBuFb7eNkbvT7znF8YmW8grcBNDwPupExrr36q6h2xHzHoT8iRKLT",
  "key21": "3bvy726mK7SK37wry7AjG4pGqV98HoJDLu7dFfgD4jsTtZToAsymXUMUi9aT6A12cJuSTR5VUjPmtQ7aPK8ew4r1",
  "key22": "61tT1p2iK3cHzNz2oko1E2ZKySAqGPtmox7SnEvN5eoH5aapgZKCvQDBoJ9sQQYj3AZTPQCyLEa4hattZavXM4pD",
  "key23": "462F1ah9xc9HFsWwKGYQUndgzjQwsxbEyC8pJ5ApjmdnL14D2ARpkRLh1Lx7VG9pM4eKdrBViGmHsX4aP8GT761L",
  "key24": "26LdVhHuTdZQHqnYfrkTD9iv7pFo2854DLbfALzFHUdTd8sXzEZXvAitS6YaPqAnVSaC4TPRtLrvqd5K8WW1RxZ9",
  "key25": "5a1aCBG2XTcXN68auZnhv8YfVQ1Upa1dHu3UsgkEhUWC9CtTFAVPEc1nfP8sQPLfiS5ZSHNXMzHCan8cBoB7NazF",
  "key26": "2bmLCmHL3XXYKJPhHKyqUdoSHwUZMLecKm8wPn91TUTt5oPpqMzDxMuTkrz8YuavWXP61yZ33PgD8vUCV2Joqgma",
  "key27": "381bUAJjXUBdWH2BHToydHgLugvinQuZUqy5dmRGEjnbq7CWGT3kUP2pWWwP1eCsi11nnyFutrSPKnHCBakyGUYt",
  "key28": "4b7vxDV1xhgCZKnMSALsnSjauv1iHmV7rXvGqStXQWpG82y6QH34bhE93XVuZ39GLQw5YnQEXxjZF9xPvPnqhY1s",
  "key29": "3QipctLua62QkGkVyCzwvZDQximFJDyi5HHXgk2PGVmVf6WXS9g3CFUscpDxLfiMun8H3GaqEExxfS7LA7czfzMZ",
  "key30": "tAZvYacDWjwcYQXavqaNdJq78LWiZUFhSMfAr2crvULFxFsS7cEkFZNcr6BxWsA2n8Rjr6nzsKe7nJMYDigWgNg",
  "key31": "3pG8Rs6vKTDLoSZpn7abGWGaUzXsBLPVE6mBeWVGhNuroaA5fqhfuCkGNgJGuV9JVsjQ9c73rNnrGzPqxDwGVJAW",
  "key32": "4rZ199EnoWRkef6h8ZnRUJcUJ2RCurKxDvnn5CZdC9YaLShGp3LpxBqGAkdoKEnwyYCDpexPNs3qKC2szTUK43rp",
  "key33": "5vM6T19Lpb7q7ghs6fCSZCYaaDBgDk1QQFDgDmjmRm4gvU2KPtBQxpTn3RxrS9KYmfAHNgePLuUfCGyP7pMkPrKt",
  "key34": "ALiLHMZVvEnCx17HFPDCBfp1Juz6fH546TAu1eYm9323xv3whk6irh8LKFa4pJgHk4rbT3ihW8R3CNMQ9VBrby8",
  "key35": "5bTR6yfvPowo1P3sizw3wsGFGfdEfdvtZaQi4cDcUqakJk7PwugmyRFwEMjA7ejNEyBeiarReJ5eYwdXvhe7t3gB",
  "key36": "3Yz5tmi2RFZnzVmxGa5nf4A3Cj4AnFjTnx88KZ6VgAUMCsnEG6y8KC3zhKxU72uLW6a2pwhZqqADMZGEEQURD2Lq",
  "key37": "4ufvjkog2GkwmmJXUU2Ngm8kDj9VnAm2fLFnYFdE6XrvhyMvLxpTekWuqsV8Jdozj6fMkjaqDiSsqYYm7uVJu4bk",
  "key38": "akAdA8rseEqyCTN51yYwMygfB5tZraoCt7FytLPfUGrNUGNSoHUoaBQiVvKup5JRz2NkpkZvZtfsWfkTXFui1MS",
  "key39": "4KmPeLJfbdQxHu5y8z2onhNJKuN3XTUjHY515ZShpF3dyyTYuW6RsZZt5m8AoTAD4goTYzRdT9DNcLdbekwmg2zt",
  "key40": "23yD7xk9ghPDo5yKbGE8826fAgG9YSyzHqyejMCsz6NWwVNt9Xg5G9YdmknadEj8ptyd2RyHWzW2DMeTDLn8rUTm",
  "key41": "2kx8LBJrwSFtn1C9gG13wzXFX1PsGHJvwT35dXecpgmAJyeAGUfraP818YH1njBdKvPw5diumPQ7vRtGWyeTH6pU",
  "key42": "2fx93eryeaVMhXpkzYZknim1SLM23cFLW4rqXdY1kYoAM9aQayUq61knyW9RSGRHsKykZ5AZKYQy7sYDRwY8cAV4",
  "key43": "9mxPKYayN3bY5AQ4RYhwbuwQVA9sMdvrcDPP3AdspsXLw2KG3SYqm4ersKZzuyMsoy9qBpuc3Kofpii9rmnjTas"
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
