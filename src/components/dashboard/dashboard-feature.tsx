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
    "55yKkkpbsTtNZg8gzQKuPNgbFBiLw8pStwA8eQhVBiw1ocdiShiCDcrtNxArmfiPUbCXR7tjB77i9y9Tt8BcEe2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oitrEPe6Pu8WNgx1p7BcEbFUBTqdSXpB11h1kRvegnjwg4ZLvL9ftAEcsUfAxHb5UKbr1WhGjX5sQp9CWCmHKRw",
  "key1": "VH3EoLKWBt2gLRFTdfzdjtMEQN3wBySHsuKehJjCMbnr8qiNQRdbt92bsqTECSzSUatZTMcLJmxc9GV77MHPmqR",
  "key2": "3yZHDdDwJufcxvaoB9xnnv8E9NKPzCKVxHk645YJnEP4sk4VS5f96xChANMR91YR5iLKeAZmM5tq4E9bUMzh7Xv5",
  "key3": "58bLjzB6cL34tBZ1XgKy3XoMTDZkxftkWRN5EBrnx4gu9B8FeuBXaCeCuXPhLXhodfdqxHpZ7zhpxQJJ7FgFdBgG",
  "key4": "5QEpbDHz3DfxDEtZA2Bj4fuUhpP3cyJCZ9Q34fPHgizRYuEBCD2XVFFgJdDeNnf3fU5hMfd585BEk1pY2DgvDhf6",
  "key5": "5G79P8jMz32XdrFvdZhnDLsUTyKxkMe1xvXv9CQ5H8Mh6zrzZDxoS2iSKoZ38fnT9NknzKjJBJM73gvkcjXZnD5h",
  "key6": "2P5LU9cBMUiafbJGWidpD4EfGmSc56jyqApU51JfW7pP4kCNBTNuq8yADorXQZpGpYpjJyMtSV7HxcKGg3CC11q9",
  "key7": "4XNXjyLWnp6Q5CgwZBEirVH7t2nG3os5pkvx3qN4xMDDSeyGFG4mkqHsSf12YaAtULCsre2CjBucqFy4ctHXkjw6",
  "key8": "5N82stL1sA7HkJeUH75ZmRCzfpDv8NRyzuLsLDEzfzUADSsQW6Uab5N1w4MxB8L1nAmVMRTDY9GUxkJMXr2K9qVp",
  "key9": "4vo9pcfZxNc8KMzSki9XjnUXcY7qGScEdPbsDfsEjkL2J77XSGFi2yhurJ99vPipzmqDgQ9ByR6L6TLc6RuYVFca",
  "key10": "2qjZZ4tdYTa4WZidGukVDYgzSYskasVx16DmsiWB4rVkbfVGbu14UM4oF5aB9Het6V9dvzk5M6YVp6FNzzKRTvUV",
  "key11": "5VKxtqEZCEq1USGAajqHbziKJuKYQgdzpxV38PsgZvrYrNYapUzadWy4wp7QzooR77CiXGmBvytHHyutQS9J1vG5",
  "key12": "3dvGEzhu44FhrnQTDmgvniUb3d9HDKqDuB37X5cqMvQfuYbzSnm6rtT2EBAQXmspAnRpZhXUEnQxKjoMzFGnbCvo",
  "key13": "3s1y8t62BfFoJLUjBWTd2g9ncmXf2Gw4KJfHW1ciU91PPLhCLDVHY27w7SZVAsGw2W6uwA4rnZHXA4oJBWGJhVBo",
  "key14": "3BkwcnmhktvyXfgfMEwW2YgJB64yfAwywpaH9pCyEtEcNF5SCmDgu4s4iGEnvqi5MnC39QTuSpDwJ9GrKvLVGWzG",
  "key15": "4qxQGEeAjWZM16nN2nj7FQWzY9Eophbt8AYV3sp2ZhTujVMLpWjPsxd9rEzghFRXWrvbKggnWiyZBeJkNTVaknEu",
  "key16": "51BzjyTebDFkwHeAjo9EpWLW8HecLBRV8T7pANTtxf2ptuyJYa966pcEJWNJfr4BtQbTRjvi4TZ7JbH2XmcdVQMN",
  "key17": "65aPkr829puYA8qYmwJWJGBoU5GbaAZLvEVBrcQfSsSRZsUcefdoNv49upWymmj66G1ZuMRVuCYhUdiDDcov5p3V",
  "key18": "4bUEPiiYGydFFJXVAKbiEw2oZWcDk8x8KYTi7XS7Fhx5PCg38iobKbL3nvEMR42FDah2PkEDDbSKrfvtWH8tCYwc",
  "key19": "3XrrUgMKLTs9mg64coqF5X4zV32n6TaUPJggWVCrd9Mcm5kkfyS9svB1NPrBCmYm1HP6QuBSUat1A1QF37NoZWGL",
  "key20": "3CwZvAwh6SEt2tFdLTJMd7qfzEJfqoYUKBW4ddNHKThZtgNCQu4vsRWTxsbBGrrwyBWENZ9WAMsQEoARD3marBy7",
  "key21": "4hLMV3rbsxEVmZPco9eotUjsZoRR7cwoQikE8C2wu3A4ADL2hnKkjrmZCcAm6CcoG2xVQSadZiEPPtkLKsc33DvB",
  "key22": "5FJriAgQtU6NxNh62frS7aEW1x48CBk6UCfnUNgLbgiUXSjXGX2gmbP7gRjdchJXmvvvcRThVddWQFaGopDNUGZW",
  "key23": "3Adzdt6ufpSMLEUDVLjrMYYGGKtkofYCpb21JzgfDyCWUGboFpuXrDu1Ywgj1ESpRSequjdA6WHS9cqoyjfPdNgW",
  "key24": "3mKPMVqjKodbdxSANwub7kBrtEuhjbKn4SvWWGQhDZssnU2eEQjJyGQcj5VmTArjKCYwJ3j2qHHJzwVydp1yJrQj",
  "key25": "2YDv3AnJc8XUrHFURR5nJKEzJsxxGQELHvMMcC4c7vbpyB6veedJwn7m5Ybpnkj76vowd3Fkjxeuwe1SBiCCFDde",
  "key26": "42qsUSfRZNXfr1NZiFhyKsavuui5jzdBSome94A7nCPZn7QFqLQYdsBq37f4AjjsQBQQ35hUBseNTXonRzcV4bXn",
  "key27": "3Y1rh9aSwpBVrJPFKds39oQLUYB1TeRFrojsNjg2RyaYp2eMXFe9cW9xBKdh7C4cZk1Ba7tMzYUyLqtuk6s4xBHH",
  "key28": "67ZA1WjCj3CcHeDVenjLtTjwpijrMPVHYtsc6Xyk6YS2S5c8sRaz3rWYvRh3ZLJELhSgYE4wxxnbkfh31AKuxAjX",
  "key29": "3DJWv8AFQ7mH977yrmv18mH9AWm2rncspsV22DZeinP1jvaqVyzH4N9uGE3EtNtdfcd6Lw5cSN1KcRiHiDb3ADQd",
  "key30": "62aGJmuvH4BYDR64dmxoE8tWYe6pwkKtvrEpWy2NPvMpnHH9wPnLvci7yfWnZ91FKn75X9y8FGz1X3CFULsRQCh4",
  "key31": "2iLVGJTuVZteke3n4VnKi7csupRX4SywEo2JREoHfpZQ8VjgALzKLqGXbQfKFmDWHjRotF8aUHDbLdoy6SV4YH2a",
  "key32": "8RnHuqnCxWaMCWmFSJywpZdNotfWkTMqKFUdW3RZcdNhNh1kt6StV41DL8suTgq6HQrHqSEJBwbDeUPYMPVbNCY",
  "key33": "E5hdNsL73F3LWC6M4NgyF4ggYMmfGZcGVFbhFkkMYsvEkhcDjq8D4XeFyCqyB89gFRwJzb5mHG8SeSZWvARtZCq",
  "key34": "5PzSJFGvHjozx9j5nCKqSARVvGH15WdxDjM5WJjfGBWXq5juHS3Sp5boD4Uzg8kLj4NYM3oSfSaaxQc8NhV8yjPM",
  "key35": "gFnKtr7ASYL48y6Gn3aSQyXacgkHvCMuWrJL8e8zWTG9qBtgYzRdUy5GVrg3umc1M85gdD3PrNjHcZSdjUfUAA8",
  "key36": "44twnQyMwZRs4NrrVeDHDhHRuYEo7HYNooEkDLMYjrUALidb1MMndeKMk6EnMEnoDkaLk9woj5EWoSyimK3haFgw",
  "key37": "3VZfpW7acTVP1xPFfvZSqzPXwS7Wq6m79To96s5E13LP7X7sKJEmWp2B4JAeDCVGw3BjhGZ2TskZnejEWWypdvQ9",
  "key38": "492dkA551JUxBTkFvBBCFDShYBgSGSrh8Nae4xpcFeFg3M6JwsDNV88ZCHcGThUo5Vfqpqg2X9Jb9gStJVc25zjp",
  "key39": "4U2zYvp2tRWgbEhQN4gvGuBG1sfwFrfvo9N4phVZi6NdsH7PuudNVS7g9eSdNfnctFbZoHoUL5acrPScpNe7VB7W"
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
