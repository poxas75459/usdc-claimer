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
    "4krCcioAondHWZeScFfvg2j21pw1p3NUfVdyv3YwXcf2XspeNYRDK6UeyWEJ43JmpUNzb2FxsstAcmiYCdF4AdCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49tPeZfpuoa4H4Kq2gjtWMeWM2cj6yEMBpHoiuVugA625LyQaR6bZWa3MEUf9xUCXMWRXKMv5MZK53M1ceRYERSG",
  "key1": "YJYnN3BznVwsHpCPPVRVvqsYMQrNztZuGWndWB6opPs2EECKJepgZBEartHFvWGzkwSnEPTtXvFqpEWTgQVUhkd",
  "key2": "4GvJMnTyGXtZ1wwNWnEvsye46TwkhVrvgodtMUMm8uGAJuqtR5Ca7zrBjCcThQuoJVce9cXE5SFp5XgRno3QKRJ2",
  "key3": "3tX2R5125Gftce2Ax6rA4B94EzWG9bAQYXd2LTwVqCou4UvH5EKUHDYTvb7oowDSQHDWJr8GWeQw2SbLZq7GFJ1c",
  "key4": "4BYF3WTU2Txw2ie47dm6iUZhDxdU7Aw5pAQhmnYs1gg5Cj3Lmg3AgkkwRKvdpVeAQXUpd3ZUPKrHZpGSRRkYh8oJ",
  "key5": "2UmNcr5B6M3uktu1ZrmNytmt7iukLGZCa61PLRwcbcCJcjV46w88WU5P6EdjGhXBahSrqPfzdwAjE1hcGvZQz6Wz",
  "key6": "28qjsp3mKKkNdg2iamQ9wQZ1M7sGuCymxBTUugS6cjA51hNRFzvypaVcJoWJSQWTvLaChS8NHxHK9qy23fGRrwzy",
  "key7": "5m8ZQuZpgBEbs23h8kHYoLVUintWtEy7Uo2ijnhY2qKMMvNC1hUiMfjwk5dgHLxs8UVvPuuoGLuNqBHjSSGPCyxu",
  "key8": "3HLPdfupNzBv6SV2ZUfS8DpWUA4w7FtHSrw6hpAxytCnMZY6hWSrz25yc8sLC5UnnTLPm6dqD7KcUAGHvJCX5D7Y",
  "key9": "2K2tzQBNJeo4swjX5kEtzzyAefk6LVYhqk5SBEyPwvapbjt1VK8DhRVexNaZe1MW2AGrMVecdd26zMRXjJ39J4iQ",
  "key10": "4tzzzZFDJwm8wSC3SsJmijpiRCpSQWC2fEj2AziQ8mKC4SATvn7pGtNGko617h9BdPcZ6QAAGmSaSKVZMisHqmMM",
  "key11": "5hosqw4i4HLxwx6aS6QG15SNFdJ7Bj3K5HsWPe1ok2JCqzhB3PiChstAUbJGxkmNB5ofKXtxtPfoi97pgk7XjeS8",
  "key12": "3gDoMeqxAkndZPYfn3qoRQFFRFHwwT1yz7TwWRYTZpswsu2GksZmFbJPpQ4W4ci7oYwRZmHrMsGfCSPHeBtWfNDu",
  "key13": "3Q5U7QAyVLSX56etzguaSUyruP7gXiLTaC4srp9FZFkwXFKTiY3cn8QwnXmAbGMC3epwnCdZomG5ZvKSK37JWCh3",
  "key14": "5QmEjoCuRNTkwGERDzyagSq6Nbi3xk56icCvPeV78cB6gJ9xqd1b2XpeGfQ5L4JEqpFjW4Gu45rwEdFSeEEpXfNU",
  "key15": "5HqfZqUyxzQckpY9R7cDNZgViLSg22SmFanATZdnXEQ1rHkLJ3xBcYeowmNkrweKQHyPxSVtb86uuHjtqJ9TuGwA",
  "key16": "2oX3oTfYxj6M2i53t8ixg8TMqrdHmPKUdso7Bhdt5y5yM7dzHaKhsSwbStumy65iCE7mEivMXnxw7jfib7sUkJNe",
  "key17": "2udbRd6NUoTK99WSp7EMiEgBhNDdjevix3iniD9PNVcSy5CKW2xXp2d4jPdFthQKhK9Gm9Gob9e9m9rKuQFFT8tW",
  "key18": "5CyFGBhYjizFw3357xaqAdvY1EqBNtGqqsSj6foxNtufNka3DJhXhzdnopwvaw7SW4iUzChu1pkqYHgNmpRhyhsX",
  "key19": "53Lm2uQ2YRTma49XZyKS2GEsFc4JEcTRcVdjeJcYB5mVK1T2zQS9D1KY3XXDv2ABgiEgE3pTSZTiwbRifUkK7Re6",
  "key20": "2ToKxiKA4MNucJabjZ6hS7aDBUEzyV1trDrs2AHgHH45MervtXb5W8r9fnJhHmsvXjos2GGcxLr79TUcNjDbVcWP",
  "key21": "2vVXbz6Rj8u8YSrjumVg5RMhnaAoabHEuxn11ncoNqDgLpcUdK1gzzi8jgAai2nCDERkqzXqvCeShFZE7JmprMrK",
  "key22": "4pZt4JGCDAxWF4ajW7ss8jaYEMjvxGphFoDSHVmQXNAWhpWr81AtJoGpkbKTbbh7Tj1XFHZt7i1DNmY5svvK3sQe",
  "key23": "a862KKwneLcWTZNokXc8raosYuS6CPifQn2n7E8PNeTy48dHUwkzQiyvXPYRa882aPfy7oEpCcZC2fSv6eWtcxh",
  "key24": "prorTBVNQ8AStTQKqfqLYtKytxGXD8UUsnPAzFetzhj4iWvPVDM1TioMhxRZ9JdCQFsYdb66kYnFsobaLCRmGV1",
  "key25": "64huVkttijPC3HMgFzEyFu8S15XVfgNpbwzJZ6LoybMn1E3pVyDEHKa6U4cS4Ya1WZ7vrwsQPyC8nvc6r2Ed7aiW",
  "key26": "3bSRT5jeiRCRskFag5iSBA2NwbLGJLtMazicjr7FA5UgeriyGx8kYvoTkiEkMZBitzJBfZ9zoHcA4dq6TwsEqRjN",
  "key27": "5YWAWPE9ZhwY1e8t3Hx9tx34ibEpj7xpuBsdy4LDJc6MbUUVqPxGk6GcYLV2utJnVfumNogw8mH2mAMF735kgw4D",
  "key28": "ycg92wd5sjPx5SgR7nCVVot8TEt2Kq2BeXC5o73sZT1kNsXPbo8Mz2vCJm4A5QHzkWHDoMD7PB3rJRj2Q72Wbsk",
  "key29": "56mBbnXYh1QmPPPKuKDDN8tUSde3Eshfh2jVQD1FydxqwpP5PUN6HDFYVsHgsTBng7BDx9y1nB1MDRJDo2fGe9Cq",
  "key30": "28fxiugGRueCDAL5UqGWPKfJcNkaMFJ7PdCb4RNZVx9SempPWWH15gBda5hbNfU5mmrogJ1Y31eRRT1roaua4u5Z",
  "key31": "2cuN3X1UrKbEZLGitq9MeHF3PsHgiTAg8vrziFUbwze9yqfk67qAsNmqDAxboZi1Ee2FAwWTcWKuTkfgfdxaoEoH",
  "key32": "33kRXnLXPjJPkPifv8HKo1WjkDTemaoiX1H9afqNY2A6tvWkief2AApyAPCiV3JoGYycQyjTuU4cGTf61etT1wJy",
  "key33": "4trAZuWUQWEtXPTCCkbybyibgYA7ikfWj9eioAWpH739qQTD8rfkreZFaZijFgJKjD7C9dXkCZN9D5Ng15k5Zn5A",
  "key34": "5JQWnQDgCZKDbXXfJ1zyeeuDbK8EoLDuKgZ5davTWfVjMgfzY44qYTcHUJ4CoNn1hahdx5vU5s9gg3h6RoQC5BjX",
  "key35": "5HWW6ie5udaJXXM2wWug5bbLnNtUvQ7Us4ZvnLu29VyswJSJWLrjNFfKQWyTnXMNTboNm1TowTq1FaphiTLdyiT1",
  "key36": "9QxjmxmVo995h8XNB5wxNfuZqaSoKFyZNyAsratv81v4smJRLABLSGCSA5QGKh5zppak67rG54iD1GCMzdKTJr8"
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
