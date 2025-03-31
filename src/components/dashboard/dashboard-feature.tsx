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
    "qNGtR4FtNoYU7A8FJ8o6aSZZQZv1judv8MMLxcicAJDEvwHPWXM5btMDZknX6XymaYAKx3T5AJ6sHCrjpBLtXrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xpe5xfeqUmPykUcRDrtph1gTDw5MT8C2cWZLVfZ6yAtLm2DwNH2z3739gmj9kgHvZrzkd5177Qwi1bZkvZkNLmU",
  "key1": "5GBVwKKrovoubNRxQkdv5XF8A8LRy5RM65Vs5P5698cC3BSwnKPR9EsE7tDrugxLmjDRTrDQqK2RBj9pRHaC8Tak",
  "key2": "2g6vx9N79egbzgp53n7aMskDrmUDAH88UhXEt4njDi8VCuGKfm4dwNPimzpRaRWEa3UMJ5HtWZmSDwCdKZrAWBPt",
  "key3": "2t2Vk8AovHFTcTKVcVQsXnuxxa48zknLEbtMe2JyWFRASTSoFKhZgFdhzwM35pBDNr9nTyRUx91yPjGpdrmucp83",
  "key4": "2eN88VBUjYzvCE6KK8RV7frxiyoFWRWyjxriUAYbB6BrwCaeGtYvR3Nf9YJYpcz6ip5LpuyENPjb7iSNUr4o2DNZ",
  "key5": "2eC3kDq3qrYTgkpZAPRbfzNP6sKWWbTE51JAmHvqb54wMSzicyoonTqLVZMcmL7rv1rVzzsBRt1ehibrCE4auurr",
  "key6": "n9punn486Kfgz26ydJGiquL5oFruZZ2n31LAYGEEzuGyTnRpMKWNhm7Y3knB5AbAXHkbwLaDNosZ6kKdyiGRvAb",
  "key7": "5mqyfxHTP3AobSN49xDpoKoeCsV63RSdCQpqu6Q5vdTjqHURFvLB6nuC6P1YLkDZNhHB5baG6sV5D32BoHPWQiJB",
  "key8": "5MwZRAxoTaQ52pZ2A7A2T2vvGa9TnRogQRgTqwYjyGcWbcGWfAh1gGTS1fpYMhutUPrHwm7CRmCRm8DLwiUieXyH",
  "key9": "2XCcmbg2hS9BQXZp65FBhJa7LrZKzznga6jKFCNovWgPEBZgwkmQsP9noRZP4GggyoVD7ixN7RSpjRJNWtqCUttX",
  "key10": "NPCAqY93tMcY8D2beQ5EdnJqcmyhWLwhcxNytHwQBiYEmtSPdugCaGcnkCAwooJRS2KsLykb9xVpNBZYt4DWCXA",
  "key11": "CbMrqGbfBJW7vuk8VXf45uLj842bi3Hz3cBXZfpenTP2dRigrLgaNsSWYpYGXsSwc2bAwZtVL3mioNjkSLbVge4",
  "key12": "gvwkiQJkK511s6bmDDZLjmEJYfYAWTaT4fKcWWqQCgAJrQjCP6fmYWcJzwnVp4GC1zM6RQVpb5eFheT5YNdc9Pc",
  "key13": "5n3xPm4M6gnUjRKEvykvv28FusV2cPvW1z5zLe6zUpG8xadWgzJCgSDYwRqm1utsmA41Xuz8vCPCxSMbguNQPntG",
  "key14": "3UyJMyncJBFDsVyKmsKscYiRmPKpdA9jxRXt68ziDoqXhrrxqGLuMap4uv15m4BverwJT3QG7JzyhwnwPbZ26cxB",
  "key15": "afhFejAkg5s5sxGNus9cJWxYbMA3GpdEAyoBG4WoDvVqgsczmZK8p5xm9BJmuw8ZiAw2TRTAHJY4h8JE6eubnSe",
  "key16": "4zr9uvum6A7ueEatvtjiuaop3VPveAfBuNV8ykesZZVedn2SryNmkB6XjNMqxVXhqJ71musnyFCnbx8vR4Es2EKz",
  "key17": "4XyxRuieoPwSYE3XXboEWZf8iDfJXU7Q8oJ5wdsYRa8uVquCua6XCzXjrovtFQdBA6FNUYneyUCSSwLQDLNMw4U",
  "key18": "m4NvJmGPTFwuqs5prjtNGvwKYdVZAvGhuwGAZyJLsxsirT1dXqDciXXJSaBZryYCLiJYSpvdv17o17nUaMfUuoQ",
  "key19": "2DqZNURa1H9j2Cq9uBteEBWp8CGHfinTTi7iaG5e797TGht8Cap6X2WxW5F9HsUvJcdRRy8AdR2xFtTgUtyGckiJ",
  "key20": "5ddY3K4T8dwn3XJi6k8hSgGP3fe8AvyHRC46S6y122KG9HvjkRJ7HCRLsJL31G6q5usj2syebcEs4m3gGX3gdm9w",
  "key21": "2vtKKsqVKeabhqiRdRmtdh4eyM4Xu9U3MUcgB5rib91XqjoYZUC3Hx7RhyuMvGoQKSRhcoCRxRifWRPMnmQNMzze",
  "key22": "53Wqa33wng85inKDfvZFAw2zsNS3UdLfwi6aqMoietpa145yhKK9ZU3DPsJwWoVUQduDoZELCW7tVwgpqTABvnwe",
  "key23": "4GVjVyLeANUHWxDbbCsmzn3aTdBevpnU3CApHunc7JbanM5zx3EPtnnfkZN9aKxwBEXLzWMmg3kkEgTTa71uPzBJ",
  "key24": "4Ay7k15mVA4f2AxjkEnk6CqNGviVTyLmRHm7ef95KE8WDhDmcQxWKBp7t8LbuePpWyG6gbGQY7QC8Lb3MYzjLKkc",
  "key25": "2Tgn8hvdssRkM2RJXsnseC8mgFTJWyt1H1v64SiDtBuyuxvHUUu8p3hRXL5eitdz4aqqawoFtyfxBwvw5wkbwm5t",
  "key26": "3t3MCrmwQbKq5zczU9WbtQKq1uwSZcYVZ4Xmbp4zX3uc22pvBSo7NacsFVGn8Qs8dK17fRyBiLsWR1pgk1pw95F9",
  "key27": "3ePEPj6DouWypLGBUQqEjkQj4Sa8CD1n5sM2DW5HBCnvyUuYHkPR98BA2cxJgA6nSETQXVrTx5MoRquTikZQ43fQ",
  "key28": "47eVDsSXX9wiPGEgkzNPoFHcfLSCsQQ6djzf4qSYYpAjspJiPKGC9dH5CPp6kFRKk353KZjuU4zCdxqbfx8vGSM1",
  "key29": "5h6bJHkGAvRSSQFnd3n1qTMC7s3XDj1YDiwWDZFn7k4jfgERJb32eQaCzBEE9yf8SGbk2cPGizteWUteb1UsVUw9",
  "key30": "4Fru5wfH99APRUryETTWufCMsC4iEYbBNYEVazHGJSqYch2tebutkytnRsxEjW2QcQF2gnpKKzthdAF2wWMB4mfU",
  "key31": "JZ5i861CjPcrkCvG12FwkZ4txFi2wENNePzNUtJbnj3btCtLfJDcZjEN4NiEPdDhVSE6oS7iWGgMWZRHrTBLt9t",
  "key32": "4Sohz5cTHVS1hzg1udLXPenQmFXJYstkETWYD8dC4cGnNJMsEqVLz6GHQq7jfpRirj7TRRtkgkf1NZ7gc296nGiM",
  "key33": "qNjkwPtbtiBNxaVwPAATLSiiRN1J4w6CHUjzwbAjt4ba3o2zaryEJtkPKMuih4Xu4F4rJNJXLunWnPUar7peHCK",
  "key34": "3TZZAaSeDbSyWewQdcVP6HbEsgFsb7n8jqu8iUVXSBBzxUM34GtYg7dSRsGnovJYrUjzGr4LjMcsqVr7za635vQ",
  "key35": "3eYSH6QMgi6sYSUTL23YWbFLUbrZCbijnJuC9HjHENaXLmhrd2h5qj1NFENQ1Sxc3E5GZ2BtcUrJgciNk4gDoRy4",
  "key36": "rsyaGUn4xWCKidGmww2xwiVW5HqkT3tyaBMzmHEFQMMe5GEuLDJX5DEnJiyUJM8qmgjBy1dWKPx585vYYszz7wT",
  "key37": "4tmTieVzQJp1Wrs8mhxUqH44oE9KaUNLPgtEeV3bBaFzp2wo3CuG2AQ8ZQAoE3oZzGuX4HyRUCjCcmrBgzYuweqN",
  "key38": "2XEc4xbiYQg7mFrbZwDWgKVuFjPB4hWZv6p3kYX3TpaeT3h9jis5jCQ1k92s6RnqDKRrQ1vtLtMTYNejzKttDUhm",
  "key39": "aDoFrB1VNJzZnUEEzdgri6uccAk9GyF2UnY3hW33TTegc6VuWpNsuZS9RovxxSX8HUNYTDyZkuSPuXtyrwyeTKi",
  "key40": "As1g6CXhcVUhHwrAfqKd8duJ2XJtLbNWdqT2dPS8PpxugLeUa966xRyEanVVHvKgG2CSiN5Avs1mCVgV4FAThYw",
  "key41": "5b6rc5h5BJVRJt529SyKhQqZVetdNGbVt3qQT5kHGvSPUMUi6uLaKnCUH9vV3ezExfDk5W5PLotD78WucwW3x1AR",
  "key42": "5rU3krChC2L6Sv39iyH76xr9qjJMkhW29zXyR7Bq2zhMKS1FPgQsDCYVV4q8CfHqdEjnWNG3hqwMr2oQ7eb6d437",
  "key43": "7BN65CdJBdaQ5z6HZELDYmvUpfqUHZAeRwBmko11N3FAEz2X6fNgWRD4B7DodR9Me6E5JW3q1dZcpvnax9ADxah",
  "key44": "3CvuB8oAQFcA63kEWaaTG37Xtkvuzmz5KRqTw4ePfAHfxfctigYZUAxBf7ULuySMPHyzAJxkkUKYnXvzqt72eoXq",
  "key45": "2VeoZ89wBx7uMCcJbyw8aNt9thuLWNL6KJMP4mgUb9shcTr4F72fMdUH58yFoBWgTvkJ5pfuJy8bbrNKxQRFC9zz",
  "key46": "5ynxkEHyHuQRaNKrgY4aYbGAwVe7Ei2TiEVWUtUXp3SsRBvTSGRfQaea2bs5KfdYyppXbLXnN8DXk1uxNakTKM2E"
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
