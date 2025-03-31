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
    "4Pqc42wXwbWYFH7BE96qhPGBGY77moyvXf8D7vHca5FJRBGLejgQfDzXrhQ1HFpCjnScodwnHa5eC73bcvtLh9ZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59W8qa1jTkm3PkvcnH7naC2tQ85hQ8jEyRg9gxicYjPfeDHToqDFaj4tZHpVxiM687A7EU4V4DCW8RKBjpGvb3Xd",
  "key1": "3BBrjNyhx21curWbjeqnvMF6hVEpU9GWtnBaGzkzeoD8yN154KyZP2ugfEUMFNQNtRNQrAyQe1yPfbPoKcp23QVd",
  "key2": "4cjkwT7y1gWHPV73CkypJY7oVkrSg3fJSw8EBefQHSkcp4FAvV1vjnUEquCC9N2wK37Wx76FkoHkmyyQz6dTJtrQ",
  "key3": "4Rk5eDKHJ5dqJJKjEyyJF6uphYUp8WXUeeDMiB9wSo1iKpqiJWqWgp9HyLd839UgABqCESbMoLjYRPemYaDcK5E7",
  "key4": "3cbZFrbE8G9cR4ELNNNXBHpCFZzGoCzv4yvjEDSfEYpTGnvcLVSjAQ628aXtgXSKRt6ygEYY2nW7aFAjNwf9WBzg",
  "key5": "3BrPmAqcwREVppf18H4ap2c2QVNwAnvKbnDVjrjtaLYNX78mkMzJfk4YaUeEyVhKb1uxAxEPaewHKaY5B1peaMEX",
  "key6": "3HRczi8R2jr9b7wjerpDTDKMbxKB3MUPXKHuZvkvbUXeFXS1AZbbSC2tAFQ3trXycFaQWwSJyppJeGLx7R3tsmbh",
  "key7": "3sDEJaeggMEfxtbistbp1FovQszQxyMad7ngEWZWEAy78UhswJrtqSNeoyT6wTEbibvp58sMtUTeryEd68KWoSSY",
  "key8": "3wK569DucmsQH2cEYdbEof7kDqTKiKzpCbVKEo3NXNkiqp2LeDR56tHqkDz1CZeKRazb5xcpk8qPiLzqFec5kNBC",
  "key9": "4dHiTZF2VyrRLfff3h8hBs4QndrMbhEy7jVQ5SRy1yuaC9VUTCJiHpgBK84FKEnbyNBiz66byZhTREhqw4n3nszG",
  "key10": "2RAbC1TicCWY91Tn7zaqR6GBfNMfBunA4Lw3yqDgKN57x9m8DCW4vRA6tMBGE7azGoZc3waM5MwZppg3qFfaXJVs",
  "key11": "5QGgGKKmaYhPnqdZK148uhait4DBKVLRn3k8LxT2FWRKFMh1AdpQJBg63Vqm2ckbuaFeWXuGgjNeRk4WQ4E6HuUC",
  "key12": "4TTx1KnkkjG7fmeHFn83meK4dvVe6s8qUvMAWqFH6W6JT4JvVgANBsAqbAWZSUsWZGH7rMFE5U6J5NyK2zuwUTFA",
  "key13": "2Dk5uCABXHPEuqfUqgaBV8jymEhhURcvU34HnEoRQZh8LtFaZMLbA3sFtgXHfgUVVFSbroi5xkVPVHHkpYehk9mP",
  "key14": "4PqLJofJDGVHzmTsQF7ijhRqDbdKusiihAgPgisGCsgvBc9JgoBfdKsQnYPmLQhvLSuFeMxAxHdjRhDMipSkw3Ah",
  "key15": "2CQztTSistrK5PwSkuN8mCdSSubELUf71EUDRNj66GeqHZuiygDye4gDX42j21UsWLMdMHuRSSn6ccMSmDRDAgjJ",
  "key16": "4u1BAXf3ijwJnyzQMLiznYBV8xcJh67xjg5zasXj5hV8K3UYSUFdxty7Me8HX7PYWX16S2EBT9zMGyX451ymqapp",
  "key17": "2VKkshYa2k9miZZYtTdRK9a5f3SDZojPoWzpWDSsrsnXH2KvwFnWG4mGZcr8uou8T2dHjDdCxJF6XTzaEURLtHZx",
  "key18": "2hAVbg5Gf1koPWGCv5u1hX1gCtKZqwaNPCZJPkx7rqFj2SHXRSdnzF42VE6nUdaHZbfsJsxjwGSP2aXUq2PkxNLq",
  "key19": "5qTKShn9UBDpM59p6MMKqNjHvGvshiZLiixMoGg5AzkejTtpVRgZwnjhhqtB4A32miXhMJYrrPW7XkCuissEtrcD",
  "key20": "3aVXfZK2LqiH3WvyhekFMM5vuVvQaZkBwVyFaHjikwpz5v9VYnkUHss17KYdof6VB3vRn5Z3eeiPKnACFiGRzAZC",
  "key21": "v8vWxE17MikEPzFfJ7sXmkUgmEZEvbPXxYxAvoAE7vRryfgj4tyzBde8pdtJ7ArM1pncSbQBNEpe6uBqMttgJqD",
  "key22": "47AxHU2kTcccaD2FGLwzmyXEjYEspmYnxBj15yQC9UaBTxKMpNYUJTt9hHRBe6JJcCARQVv1SpZDWzSPpgcUN914",
  "key23": "2y8jik8VYmPQjZe6eSuSwzVmGDdXJCViszE6vE8deychTdHDYdkjXtd9VxoeEtGgJktFRTXoiMcgsoffmLyPYU6r",
  "key24": "3akB3DhbtZojNcVrgJdaH2uFfDE8cV88UfAXUjeyQDkUGjYPSnhnfexw46HRYf6owzJ2EbfVKF14CXPXRGgWJt2x",
  "key25": "4ZvWLiFJiTcvc7xmbB86SNh4M6j9tmxrbcRn3CX1zNSvrkhj77tGp3JTbHeYnpv1xtcBNT1J4rjNUA9UNSgEVF1W",
  "key26": "2vi85ZAaoxD8RUXUjuGZNHjqXVQ7TwRgCTzCcu8HGkyg9EsD4UiTdwgyjVbGADXmQseeurELadBprTjrgcEFULDq",
  "key27": "3JBXVX6ZFhXG8vgVdQ8RtFjtFb7QaJ8mMDeWkFbyuYfkfn6Th184xLtazMU8yaho1f9cshA55NrDNNLU3Gb6PAfw",
  "key28": "NNXGwbSM4GDk5WQUiSHwWLLpE9iyzPzZB4dFpXKuCoFhoQvDvuTUDaWQnd1UeZf7jfFHJfvXDu9heSp5qubMEnF",
  "key29": "boHRcmgcgkoYiULLnxcPxJ9hU98yCRqtWDpP1AsyCMhhqmK8gbuxEH6Jr4xHPa3BggE3Xchu6NimuPQfzCwZyuc",
  "key30": "5JMpTxu5ZcvDvEvqBPqYrKHXvHxMeJvt3fskbxrzGwds4hcU4pVYB28PyrGsMsddqSdzVu1wXCcGNRufvYZJ11dv",
  "key31": "27bPoMSUG7ZKMiMTJH156Lod4vh3hFeRHKo1jghydyxGAC1pSaHK136TJiVZJX7CtP6ZgX6WGecoLhL9vwKQFY6H",
  "key32": "67e5hP8qEiGwqmohxW1b5D7LLLNVwZuH5knjAgGJjeMYrxZDbb5adK42eEkhVg2a4QvTjfQocGB2kA26PQr2jdnn",
  "key33": "49FQAR9a3pemK7e5NUX1jRvqdh4p1F7tEvofk8VtU3XDztBUCJ4wmFd8AdJ1mS7Q2rCyv8KUWzjWDdutLCsbsVcT",
  "key34": "5BRFNP6WPyfLocmmHuub5xV2YLNguomWN7tpETBVsxaULNXuJudafisS8na1cufpiVxtN5uoNuqCrjJ1aoLwTjoY",
  "key35": "NETuNFTpzm9rDRaXBpAeUA7mcxkFanbQVwaxjYWSeYL7LkH2Bk1gqmuksJ2CBh8WFnuvuZtXofcnQW7sK9QUvJn",
  "key36": "6SPpcveKajibeZVds5ac1v3XzweHYAtkYnidRkDRp1NFpjQQnCZyXLLfht71Z2PjDYNf4a2RdQT6SpUJXtXGzQ7",
  "key37": "2geCAg2AojpDQun17hjjfsiokzRXWoGmAau1utRkrNHVkNyQJgP8e97VhRhm29j769x63v14e8Cv1kxt1KraV17z"
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
