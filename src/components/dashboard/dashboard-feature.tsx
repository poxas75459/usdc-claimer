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
    "3e52LhGRzR4pY465Z8SGaEVRe9UuLkbfC8j1u7giFAmWFXcDW215wtmjw7Uub7wKTqoQEk9x2pzBioXHnH9AFdxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mhTTaFNvv2xJbWx9DVHrG9GJi4T9URAbUnSELK7dXYvcc1evh9QjgrGNEkVWnSgUpwqC6Y2yj44xb3HBNnZT1A4",
  "key1": "5grNZHqwme7dYHryvNq7yUhTn3Ushxmr2Ukwi3Qp4mzHPUh5Dyv6Jz8RW2p22BsEwm99isVQwVHyLohb3udTfBzG",
  "key2": "5Q7HMpSom8um9RHNVf6DdvFKCtCguK3wwbguDB91orAEyqBK71zjvFtG4AV3RPji1VVtKLyuB6v3xsJ1JMrcNTed",
  "key3": "WdCL6T5NuimBcz757MJV5CbmEfiZRiaWcwwKTmnBoMus9KugntrzNbof1Q1Vf2R3cv1jVRnATQPWckHHp62aAfs",
  "key4": "4iee7Vn2T43kNLunMjyyHzSmpDrEeEMPeioWHriEwiKuQ1vNjWASmtZRH4DBGhKLpaM4d4txM6RWALxuWifdJm7a",
  "key5": "5961657vxe3jqWsG68n6GWBisBX4tizC4ibKkKLUyRMzA4wjXdvZmdmFFBCQ7LPYwMEPtfaacqLW8gUKYjSZjC4D",
  "key6": "2FFRrAJrm4kTDY9X8n2HPBhVbtnza9qB5u5LxUzA7hexa7taPethUfSzsp7pwjVMWbmRs2os2wA1NU4XH15Awyzu",
  "key7": "ULfA6MeDGfKpmnU3YUs9cpAHZG6Cu4uWukQrGm85bMAQ8tPXZnwFHnSScpVBRVswfQRwHo36apgppyqr5MRfqRe",
  "key8": "5HzrC7AR6qyBHBhEmNDwm7XYQsz4dXfULfJorrFcZaEtWgE1qXqaKiTSXWx8XkwdpttDWYekyw6oufdwHi7DRnKG",
  "key9": "4vDWib7CRcKkur9zS1aCZQmrHCNtHExTzCEt4XxRBwdBFYKXwthpaFRDip2wBrEr6z2HS4Cp7GBtm9AZdCh1xJLR",
  "key10": "2ZWBQh4grLQeSbAPYk47H1hKwiaozHsqf3hN3QmeW6MjbtCC91GtMXupLs63rth8uq6aConfQNJNxkwWrr6LaKPz",
  "key11": "4dqDJfCXQqmchcuAKZCTKVMuqbFaS5FVizpRV3hcW7f1kdc1tsuJjJiJhmNWa4MDQtNN7E9ZMr1MtnhroPG4bdvS",
  "key12": "3ZLJeCKXnSUwrz93hpknwadVa8SgujiGzxWNASo4ZKNt169cEUc3HJRE5ncnRiha9kuYAgBMwcA51L4k27RhNUYv",
  "key13": "23jAS9vZvrRuXbbnQ2dNhiX9hr4Bv87czMkt8MemBtvCCJYhuCnvuaceKcw5GLzhU87tHy8UQNvow1VXdTq3dPXL",
  "key14": "5STdZtQ7Vu5Pf5MsCLkxVurScCv5sF1J3NcP7iLovJVDxjzQkpkCyARa5Dyi9nXLjY6JFS5BkzK5dAPNi4mLSBJx",
  "key15": "3TN3CPmrFAAUDPjYqtKucFQwFeh8R4VWpe94iPTC4fXNzTTH7Aqs86QJrWaGhS8fGfZjMaAK528A6xf5sX9wT2Zf",
  "key16": "5rGnDf97bGNs4gXXqd5dSNsbV7Bn81SMRANt4UCVjfEW6BFQhPT8rtyvBnbwYV5BshA67tUm9ZtLUmGfcJHVFSfC",
  "key17": "2KS7yvU8Pt1euSodKjm1SXJWgok5FUCJqavbwipKfkfwDSrpqvxx3RSp4pChj3yisXQhy7z3V8wZcpgFPLfFi86Y",
  "key18": "SBbU96QCFS6rB6CC4EYhLavuKkiuhanjtamLYAfhYppZaTybXZrHHYtX4iqqNu5Kc3WQtsXhEaNGr8YgdHUq5ea",
  "key19": "5tgt6tGZY4kj69x7c9DtF3arZYaYp4xZA27MLXSWbrQr2Sz1WHBx12dF2Y2SCyiLQ7fzUaZr81RRptJMtaV2YA79",
  "key20": "23nhEihuCVrEz4TMf2Nh669JUBe8VhUfwvTFyQtQ1fj4ktcZKXnXhsf7nW8Mi1jzxFFWPoExDDPEA19JJHyVkYbm",
  "key21": "34Ty52WdsZub6vdV2Vk8dwvxY8j2swRybjekqeuZHrPbtku3uLTJdfZjhy8Poi6Cff5aiepQ1bnsnZnUaG5Q2Doa",
  "key22": "2WyD28L7QGdr9uYizGPzokMZChCVg3LkJf9EWf3aKdCd2niciAB625Bk4UCtHJpTiL9NfD8uwT4JPLQckJwK3fdN",
  "key23": "qkyPnDGxpxr6pTpXaabNeHivQoGJFZA2yMUWf8dxChnYkHjB4iobqAgEkzzFLuqN3wbunsirVsWaD8JkvAXnBQ7",
  "key24": "63CEL7b4LBRU7H2HhcUWzjz1aXUxAhq4CVFxHRVHDJzXwYpPCZHQpVnHpLrpc5cicQms8brihcwht6PzoYZeB9t2",
  "key25": "4ywyKG8cU6bR3kYW82aXKBeQ6zpQ2ajULN1TLj3R4qKWhYHHGjaG8ND5BergAakCzvVjp7wTuacxLTZw9vNxXNr5",
  "key26": "5g4qP39fSiPfTtYt93mXAQisUwYcM7zAUdD5oz1szfvTFTXRx123y8179ZYWpc9eU2wwRXFUstCEkkVCJhYLWnuv",
  "key27": "23znNqhJFscqsGf3qgiTAZURimjAJofM1tby7tFcq79o6PziayWvVnY1bMootNYW2ZdNLwoLKn6JXe3NzsPnvpVj",
  "key28": "5cxid7FoPzuJTmwtfWAVuiE3LyS7p9m6X6VWW6vfD84UJqErbjR96HuwnvpCLHK9kDUYLWjn8KYrpEUSbiw99sT3",
  "key29": "tmVSa5JNdc68e3uMeshwvamjGZokojoAox1pixitjYKtRnXXFHsQa2ZsNcCBsgVdiJevEthFnx6B2DjdS1t1vi6",
  "key30": "316ah2KcRwrpre17shmWvEGz6b3H1Wbi9DmF8vPEomw34zwBCTG8Je795KHj3TEqsbuy5BtnKdbz6hWq1S8KoZ3b",
  "key31": "5YobhxWrE6UCnykNLGC8bJPn5oteisNCVeVGPk9ad3KDggH3JtWJ5xvq9HSjwKVdTHcx9hoCVNzcfcf59Ayz3HWQ",
  "key32": "cUvbHDyY8DbeymCxhX6YQbADwE6JYzEnjvMEevs7JDwxXi11yFxBdP1SS1Qe9UPgzZtrntxEhhCwP5wUtrH7wYk",
  "key33": "3u9djVQXyJZxvo7iJ1e8WzEwWbT8KxxtPYeM1yGZPkbc4yUuC5CWDW87L8kT2fQnz4mrif4fLZMDkCTkCH762CAC",
  "key34": "3STteon9vgMRXhCwQ5agogKmYKHFvzhJBoz6UdRSvLuxYVnH92XChQHqbbKuo26qkCWyypxBAf7gmCMRnQYS3a5M",
  "key35": "5AEX144fiugGUF8EbwbwDgVTL2cT1KqWV3r5st7Gr5SFSoHx9iKVrUwTnSxwRYozQYu8KtRpzHnpw8xtF7jTFKRb",
  "key36": "5ZaEqbh4Ub5CVEjPMWBuTahwqYYfp6izCvW7QfWAdMKPbdtM1r6czkjs7DzdqFLjHfNa79oWjvJPiDypqV1stdMj",
  "key37": "5edYfn5CtU2p9ypLCRxCsz81grNdiax99qiEEnj75jcpDUS7BEVG7PZzbRTkYiZLsUegeFUdGgsf79qAMZvporDV",
  "key38": "44jGW7Dx4cKArJNjMST1bGB1ZNzBi9KmUtpHgbcRjeaQWPwQzoWJKvtzgRtFVCKDBhWkVpT8H1BbnXx4GLNpmcRK",
  "key39": "4i96SCQfKfkj44KQPdmSXdmsJPe7C1W4QBmJYLr3pv5uZTTmiJRroEJEYBVzrN7kpa8UaesKu9TLdqGj5XbrkUBd",
  "key40": "QxoEDoryihSbhKahjxdEhe94E2mw3xG82qJPRbQrtHm7cyNBYfW9pP6j62qwBjGU4DUw3JPSVYt1UfHFePLqdVo",
  "key41": "s84vCsaBBScz7HgntAjooVKesPsovKFgW5xHbKYuZCgYvhjacnHstK7vecF6JWE7Nrs4nWSdzUyoKiAU9Yifce9",
  "key42": "5BuQPMzjwzycNz9zZ6USXte8jtwoxrqsP58pHChyieTkV45rfhvZrXamYvNut4ExqRhyfPci92kaveN7NJnjEcug",
  "key43": "5nmJ19ZBdauKWABetbXjL53pqgvY2TA5cAYiriVE4DVMbWeZSobAshJ62LvJAVLjFdrqEQjjjFw1Mq68awgxG6As",
  "key44": "4S2MjSVnSdibRe2jCPLdQMRZwWTpWLNb9b8HjdQ2g38d3aQYRhsFJdAGhfcSemugbezbUnJmDpy6ztcrXPjm2UfJ"
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
