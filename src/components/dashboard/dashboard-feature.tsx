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
    "2MbxXANquKtwkcgMqweLTbJ6qt5wyeSYwJBpFUt9kNU9K88ZFrnN1CV2HbYuexPiq8gDbuB7iq8VSKuNJDQapyxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kLaquiayriXmNZ8S2qTZoneEe2dYXrp5DnfzwisTgKBZQHSXHydih4DhhCgZXZdCGwsGf19SyPRX2dy5f4HNPW1",
  "key1": "3vCWZhSD7jxAPy7R7KXeK3usA7oqMLFHiXiDyqdoKpUK8gyY8mzmRptVKNkV6KaxNgjjTAtMjtnMr6psjPKafdYE",
  "key2": "58kFaDbEUe9aV7BHWDqqqGiCVyA5W7DiGexajWqHJj38ZgQBDTdegdkuEheo362LpHeawMnrRbuvho5RHcaihL2E",
  "key3": "yRor7iYNHphicd2ijUSr9vtmxqWSjQdnKwW7kCSzKtznfBt3bepeeXgTD9jmkjoUDrXJhQ8i1pXtsMMoYDiPLms",
  "key4": "3Z11gxXcpAhv255KphuUmjhP6L1uLFT1TSs52G8r6oxWzmXRabPMcwbGK2vo7mssYeXSsJ1m1LZ9iSTRgT3SuB6w",
  "key5": "JPXfCRxEgzX936Vk4PYfC2YGv4mW1r6ZLLnbJvd1M8rtfK9DAVL8cEpjZNL7trHfoseLTy5w1MxEynWmFjMMowU",
  "key6": "3bzBc9Hktwrgn1UdQSfqFmJaigAeFoPmioN6tJz2HEYs98WMQUwMznWtFmniKL88yxdHJo11EJq89cbQYE7aHjgx",
  "key7": "2XUzCEhP6kfU6AEvpqKhQMSuu4LaUa7CAN3TBYqjRc5ULaE9N8MJGKmLATp9qXCW4QvgnQuTayCvumwg5GRstPe4",
  "key8": "sPPRVynkGEQXfremRYgMcZ8nUnWdtA8dGS3hp4iuJEWH2GBw4RgkoStCFPccH4R6PgGcs2NosW7DjSpGdk5WkHQ",
  "key9": "5JrBF1gKrtbGdK2y2krwjt4LP8NJ1TscGKcFBQYabmqcyDPEZQiYSh7AfxkdjsW7hwRW2Jp6meVmj8mUti2Bw5Mp",
  "key10": "415oxvCZFBz9xdB8xJwKRQWiRH4SfgZxbKDbh4wi6jts9xPkcaEw6daX3FEB49uF5XD3PMLAgFjqvKF37xwbxvvH",
  "key11": "4h7jSrKoU4tWmiQDBL7EAosxWMqDitGtV5d25tTShRrDPZKC57upM4hexqDgntpQm4GGbjxrAv6gSiq1DE3YtD96",
  "key12": "38nBdVA98pPSKeLYcwLohvVvMA9a99JxUasmhR4uazQYbZyABZZQjjPAazHBjQYaFT1dKJ92TH5XpkiQWCFL1USU",
  "key13": "5i1Qma3b5k5s9Ps1wPSqh9GCN6dLy1GzYSKx3Co8cYPcBdMmrGSV9WM699kqHCyHXAbVm5868KxbqPvqr2iQ4fj9",
  "key14": "3EvpEG7vm2NTsyYXBaLKqmr6wBUsyUmpyFWV6WQBVp8ysKZ8ACfkGjSeqJPUxEGzZvD7tTrviqCi5fwJZ8umYmFK",
  "key15": "54eceCX3tp63CochgejZSJ2o9xyoUDNDJmajHaAKd1LBfBWH4b8FrAYQLPAdLrzgsja1ofa4suo4LbVjAgav5Ke6",
  "key16": "5aBKpqf8fMdMz1P5s7beTPfCvivYRRQ3waQrdmgEGPU1iUgxJiVM7csjBgCMpbvyR7aN9vU4nXfUPZj6D8fzUGsm",
  "key17": "2q4XXKemTa9W5JSUFR2riGACQwV2EZVEccopsreZtZRKKw8X7TKFxqv8XWNKyxCZgBWqEx6HQsi92VDWZrwRHBAT",
  "key18": "4ZzcyRuJMJVzVtC3XBviWYJ6WUQgc6ZhStcViDUkFAVBNz2hSAkEgrftKBEexXAEKDEwqK7QHGrPw1ALMA4TTauh",
  "key19": "5Wzc4UiojfydD3LcEJtjwUUA3LjD74LgoszM5sHTnLkeu44fncJNWyAZd5nuGtYLv5bpBbdWH4ta9esBqT9Psr1T",
  "key20": "4VC3jUemqjxduMD8fvW4fUmUYzEiLBvF2SmrnW6EcdzuNeHfzFxqyJPfzJyp1nzGB9ZUjo4RbXTesPzNT7rCpWEd",
  "key21": "29qq7K5KFXn6zGQovZYZ9goraPfanovmvFazqqixq87jSeVuW9q6Z2hV7xQfjd5nZjfz4RGyL7RsK9sCTJ7aUY5B",
  "key22": "2UvNd9cBuALm3BCJEPPxgs68hBXxZaa5i2MtS41Mt6a6fyrgx3xpCLqCiRE89ym43jdU7CTfofaNmkhBT6dfGNeA",
  "key23": "2gQnjQ2FxktoFtrivrQdP6R6tF8wrHRRt4JnRmFKKyFJFwNTYSbchGLn8o1HyZ7DgS4iLT4QQXZrg9oYEDVydUfg",
  "key24": "3WhKbFkLBm7qxdtVib9nP4VNZ3vH8yA3RNeeauVeh4VwBAqeG5sphEai4fcGcMPRsezNhmkffoqiN8GFkqMYZxkY",
  "key25": "3P8Hnj97YAK7EKEyFwhz4c1PPrkNUoxgC2BFRZn9eXP6q5CSL1pGq7v2tooh8sYKFP5cs4Lcnnk4ijScinzhAeP8",
  "key26": "3avJRj2PG3Vir9eeFn21XMo2x373WHAfMYTLrXNdV8SrAEHU5PZcynwyFARVsBmDe9KhDN7yiGCarfHvSxY61HiU",
  "key27": "NwwHZBQGs8WFHuhNPuL9bKm6hESqeoEhcVS6o8vMVxdt37brdJtLjgLVaUv5f87eHSERudbBs2r1sLaiHJrBYnM",
  "key28": "4f2ew7xQzPULCTpHQerntJEw1w9v9PYLvX4fv9eHQC2LF8NJGgb6XsYcwdk9sq5XQosqn4H7XYTZiNHd5YQCteVs",
  "key29": "5GVRdMrH3CkxqHQkT9MvHyBuAia3Y3MWnRFCTDbf6gVyXwE8FSZs1teGYenF8GBmVqwpg9EkjRGhTXUqRVuorp55",
  "key30": "4hCY91bNLc5peLdk8c1saJTyC3dRfB7fmAKrVvrQDRSe1NkuT2JBDpz9ihQbxeoUFKf3JaYw6PxvNauubVErE7ZC",
  "key31": "39E1gkyQKqMUHjGM3xjdJ7d5V3rVnhpULgd6wkBu4kNoUsmoed1K3qHsPbwzfteMQM2HheNvDUXGFnhy85gJeTZi",
  "key32": "3L2yVezQRUUnwUyoCBDXGYXiXQRmP6B6eaPVuhghpZ1dnnQQJfcnyjkR16Syv2sfQtMCHoLPHvNFvc1YkduGg5yn",
  "key33": "mtT9eC1kK9HHhhQ4YFe7F6hwqLmQYQUp83dzXtLG19MZuTXwFuFmM8LU8tV4yBH8hNy9jqPo6skSEYVAS8ygstc",
  "key34": "5X6CyueYiSCqqYp77WhSN2rV9ezCH4pqiNCCqkrdGKFHs9ice7aV37gxmT3CJBvki5bHzGotHddif52EoWTWG2Ft",
  "key35": "27p3dLMQ27K771UJ6nLfuH5hPfonWYCodfrZwhNED7wu7sswaSTiWS22ZwnrFJGJhM9mS2fEL3jTD8jhzGuMhHoK",
  "key36": "4V43SQA4ugrd7aYqW8UawtnCAwf18HmKCiz1nVn138yJs1QtLr8PRKjwaPT5xbPhvPA7VX9Yh6vXbVwHZPDso3Kt",
  "key37": "3mQBn2iVcYrHZQ3B6YLEkSWXSdnQv2mXbV4bcc3wZ9tMPC9DxsefCZkS8YkAHykj1ZsddpAKbtbyrYDeYwVKxFws"
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
