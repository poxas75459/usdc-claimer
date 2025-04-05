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
    "3juahSadtaFGANDjDV3cDr976XUKf9WFtdJQ8As2oRLxsCuZKitiZeX5mNT1spn7uW5nT4Uk2NExfUqqs6XwkQPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CT9Zt8x6ELqbC7DXojHcovWXd3rQatmSeUgjguRwiJvKQVG3HhMMhXNGB86xu4jmQdJztWLwowu92FatCWFj4jh",
  "key1": "4UTDSmh6aGwcnmyeARXoKnCYQ61TjfRsfUpiDVPCZvyzaE3vgZAEEKJhkGxLafNECnhVfvuWgFUAYrLarA4tSdwo",
  "key2": "cdSBTQei8Mc4kH9NM6EYq9f49sFwbQYxeZBzyymfknyNGayf3JLitBd1fkhth2Tk4d68Rk6ScPEvjq7GcHSqNNV",
  "key3": "4Vr794XrBtyT5bRS3rste1XtpEWf78KKtiW6LdbH7NBrCCimjmRqQRMH78tjEmQ7sZuF9oSVTx9DEDb9n8jE1uUE",
  "key4": "5Zsspp6cWPFi5zd6Sy8qcdoH2YH6GtsAoog4jnisyGpc9i65L2YVEG2DxG4NpUkkUseXAQxijWbFM8Ztha6pp3Eu",
  "key5": "dHvjaMN8gt5wobDqjxg386nM3MjjqreKT2GTSJWq2W8XJYJzBVPQqVzBbbwGVyMqAj2F4CvH2e5D2WajtR8fZaS",
  "key6": "3ciLfZybgPmJEf5fw5oQPRehmyKtFMTMdj5QxQMXD3yTuJF5BBDvqzW3xG7vwas829Zbkw8CfXrFF1o6tDNZnRxw",
  "key7": "4FW7QBqTzV9jA5MfvMEavigm2ha7U2SVRu2MvuMrjD1uJpo73x2juX79jkvKFUAwu8NjU9pRykdxBuaHgQDDDspL",
  "key8": "3MVRkxEq3KC61mEf3LKstJ5nZbXskFT8PamDqbCRJmSwkaWR4diZ31C84cJ4Tr7sPD1RAy3jSigWYe6aScjBWCtw",
  "key9": "5MNJhsnQx74PQUMUumFgKpojgUbh3Tzba2qr2y5UcqDiMQ2cqLxxUf5vjhtuCA5qSip8ibmiSbzjs25qTzmJp7B6",
  "key10": "2cxcLHkMYycPm2ru8GjizecKMSksYSv1hcYbUscbfKQ2oqkKfiyPdXZvk2TVoMsNART8hvfmtFMYGcvFHorHeBj",
  "key11": "4nbwx7khCMkfRaz5x9kiZgPRjKbdoHsPKPVgLnmQmBH5mRHbTomNo2LbAcMs8VSEXMfMF9pjAUV9q9D4PFPezdDa",
  "key12": "3y6kEgjuRGSZanCUC3Z6mrVA92dQvJhd2tYnYgNA9tyiWown5sBH7jzBE9Ak89N5wsVqm7eRSTPimYU34JvbPAgW",
  "key13": "5Zb4tHqWGeyMDC2Yn8kBwnhd1RTVCWBwHERnxgfdxg9EUu3bBwQp5JQXwtgHERHMi8CrpjUszjF1pujnpSpN3wCV",
  "key14": "4PNdAgxvh9rqQun1JzG5dB1k1W74mPJBZmDFu6ns3aac7tWd8EyWrDNcPMwxkYJyCmfzjjnt9ANVXzfESs7RD9Xa",
  "key15": "4SFaHZVyvq9JM7idgCxgtH6DWBqV61v8DmQGBugF3JfrFFYk3VkB76VmbnmkG7J7W9pw1NeUo6RwweV5DAsLu7jP",
  "key16": "5p7YJvbn6auNtqcW3nocnYLVVexeToxrLUNSr5XDDpBgt9VF9eYszx1B9j1ZpHmgTQW26DQxrrqch1cfJNmNUzR6",
  "key17": "2zPnckQUSdoosY5Mg7Nbap4vqeyHXQ66Psbd9a1RVoxxgigx4F92YRGP4CoPfQ1Nk55Y76BjfLW1r8Wsg1rUXZ4e",
  "key18": "2sdcCqtkc7YBYEPdUtjd9JfgwqTgWjMPUZuM2zsybhNbZrcsjZJ7pdco6ykwq1hXKrpi7zjSykoJworZG1uKYxKD",
  "key19": "434pjm6Mqf4q7i78qUkCRTAifsdG8PP7qrTorgTVMLtraaGrzyFdVXBLqJ7VhWUJK57P36McYZgXuF286iKEAWuC",
  "key20": "rT86xpyFuGiM5J1YLHXgW65Ls9a6WcmBxk3p2eTMNACT8GLsTJHnhNXxRJCPmGF8axyabkPe3D4SGr3PMrtPwnA",
  "key21": "5H5Wkf2xHBQ2MCvGQDuvm6iAhNpdZRNnRYd2HeirE8tdARnZFYgRirdV6ak5pUxiJoNUGJrb7A1RnvHy6bdVQsqK",
  "key22": "5QKSLiytGiCrzLryyJyTpzQSqU13RZoKMToPw9LYAV1iHwVZH3nr2YY5w7UWVp3yFimCQa4FpARBBpJQsqZrvyFR",
  "key23": "5x93ryhEECG8i14JrHuGQusnHe7dT4uht6QJz9m356dm42sKX6dpZhTKpsQ3u8Z9aqVyYiBF99Ehpq6xq4yrTgM5",
  "key24": "4Uz2zhkSnbjt33jDbUvTYc8Bjo8huHdeKfcVNo94QVtRLnaL94PRCJ9tkCtthY2MqBHXrEU5VwRcHb44RxmXRHz1",
  "key25": "2w54exnmCRUaLQ7zKmBe4bATuLupM8JYAiFL7oJ9vgirfFySQtfRvy3JL75GGsRvwwyeioJcYTmyAEYcfkqZ572e",
  "key26": "2dYdQwVK6x3HMnTufweTQRoMo3oe7EjA7TBnzuRSvZd9TN6BCcQhyiSYWbMMRV9d9SLSnLEYMtxcX38r5DEektnT",
  "key27": "4yrwAyYMiM8zGMj8eggEvFn8ycBMntnqW9jW8ANx3zvGEBraU11x8P1trjCi4xWexehqAnbrDKQEbjzXs3g4SESg",
  "key28": "2CMXJMJiTn4HCHLMG58qfvQ1x7K5YHuwB5py9ee2BVFfetdNQCPJ3X8ngN8BjHBPzoSjdVkKTgcnKHsEDuu7Fhkw",
  "key29": "4onbj9fpcGUNnfkdyTPofNajbS3nv5d91rCtQyVpHuWnHjXVmkz2ng4aJVkBiKL4GV685ZS5wbyFyRzKNeed8htk",
  "key30": "3MBiEayarADdNv7f57Z3pqYiotYZr9wV2MDRcfUr8jo6vjtESoGWK5GjM5bakQumEoPYH5CoYs4wK42P7kp85tgw",
  "key31": "4m33YCsJYHuijd1rUxY6hhJM3FpXfQTKyReRfSJWnFJAoGkrRFutW5czvDv7SKRU7AUYvGnqbVgJdkoUQifTjiNd",
  "key32": "hYqtsi8uB6jwtab8YoW4zCHGKEYMyQS8LXhP8P34D7UG3C7PNUU9YRdYovWrrpAjszdb5MMYFCV3AehKpaaBj3i",
  "key33": "5Ng2MLiSXpdozRuEfkhanpVNXVQKE1Pr8HQoCpSDqPTFeuiUnZbZx2pNdzgfKocLC8ZZ1ZDVWr5d6YtHoHaXbC9n",
  "key34": "2TAkf6Zurs5RmeNkqnj8q2bYbQv53Yky59JJzpMq8mBh5nqy2mu7xydL7u7LYZh1Lg2CXESmpzT3sKX3bwDvzGgy",
  "key35": "3eFU6jSKQpNBHzu9nfXwiG1kXDpBpWnMzZ12BCsUHuSZs7aLJP9teR1fB4cU9okLMdosc5Wxs7bcMFbTjTGwesLk",
  "key36": "4VoUpWxFgx61Tigr7S1RWahrphn4bcXmovn4AQsKAw4DvJ2Qm4QF11fMZHJD1aCi9ANzZo3YUX4UqCGKPkK6dhsL",
  "key37": "54ej1CS38sDQ7RwM8vQUaETyDmr1ifpKvyhSLYPaUBLqdopx31DLFPnNWJiUWfbCddmamBSUy3MHhE3xPVTFbevu",
  "key38": "3UenBinaUxXUVT7SwmfhXQETfEhBsbScgbZzwUrxHoNz8Zdg4FY3qx9C66rXHrz68urdxUzZq8zUhaGyJm3mUFrJ",
  "key39": "2sxiG8z8ekC2oYvpmFX4XkQMNFVwfM3Qn2znuDXcKFyUnZK4dDGrkH679KGACcg2eU5fzKCqz7HyXdeLiZiSZm5U",
  "key40": "36vkiXhdH3oH3fpueEcUqVSMcbUmRSrHM6RW4bvJC6gQbFZtWda92W2kUkWa8B5Jtmf3T1FwS1BLB4r1P4ABCnYs",
  "key41": "67SHcDoQsygVXip79ZYJB9kQn1erx3JxFrmxEjE1vUxUfyYM5F1UUe9MkMPc7TPk9buK6iTMUtR6ciMYRb2aYRv8",
  "key42": "3NhiLk174Q6WVWSC4iSSqmTteRFES6R1nQYA6tKKvLBMb55RGSyoeCcfbSY219aX9ZYq5cGja6n2sXB4zzaFDGvW",
  "key43": "4QMDp7WYVyVZCHMasFZuCmBXvz41d2aE6yzh8oXDehvcwQzwVb5FS6dtycBhFNfbNAdYMeDDXzwSXAuq2Wup7yfd",
  "key44": "5LpEEmSsfTr6oSogK6FTSbVnXH8A2JBwZ78g4YQ8cStnTrPii2EKwyxR14eJe6ZgAwszGHjpc1W4snEVGfPBxcdW"
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
