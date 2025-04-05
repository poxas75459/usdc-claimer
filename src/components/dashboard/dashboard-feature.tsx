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
    "BvZtZ8rBcjnQQysCxUUxJrrgjumWNGUiUAHGhzYnKvzuG17KQPgpdw9nx7rKezNAKLV9YJUVbX6aCCrrq5kcUBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xu9rawKSnNzmF5MY6yXGcjancZv4ck5kMK9eJMAD2H8xnqwPCD9U1N4pqPgv95AA9ber1JVLSPJRohJsEj4B82F",
  "key1": "5i3kqHdUZV6MjwSZWAAnvBTgC6eX6Pj81KbtxJZnvRhPJvugtAxmNrveG3uhHejFmTthkjGXbBWVDBJbuesmEc9c",
  "key2": "4Qem61yCa2n3R47rkt6Uib8yxRozBjh7SARFuudFXC39rSSBXFkdNGQSshTKp4P35w6jTSvC4UzD2jRwvGjtmQC4",
  "key3": "5LWcyWGTWgxFS6W2PaviaLeCQrcdRMuvEC1caBPb8jmPJ3GhYEJdKyiKhBZiRst8BRvR7cJpbBFnF9reh88T6D39",
  "key4": "7vxgKM2Z6Drko5Ebrp3ffneXFpWkWjJsZogNgJhDW1hwApoVrs3EsD2admcJctFytEPAmyMRoPXuReyiqrpkKXH",
  "key5": "2pCBnY4tQnG9NgSjA8tEQ1WjvLwQWjdvEMAvmtkx21VHgBbynG7u4g3PRkgjaiiXvdrVkwuQMA7mbAQENDxe381N",
  "key6": "vjcfAFKYCemCzR1tYmJR7yPVjq5SQxX6hp1cV5HgobP9aZadTzLhd3Nus9SpnEZDqHE6MYBDyWBmN3F9CKcfkn6",
  "key7": "4f7ZkyKNfP64DVrkLD5YjdH6dj5HtZfsKW1wGGRTiNxVQa4EMiJ3H36uvGf85zqztABMbJ9vKeALA29LBDiymUfp",
  "key8": "RgQbecJp8e4fTfecgmuhmzvApTF5E6bm78KM3y1VvaetBKjMsxxreCqSWayfjthQuvUHa6duVu4Zz2YRWaAVLZ5",
  "key9": "XZhScfqp4ZbTTTVmTmTDQhLj8tGkaTPxzQKmHjdgY22cBzKoPzpREytF1LrpQ4Tdmj8V5AZF8M9h2nyUudCfG8y",
  "key10": "3LpNk2p8EQMRzZe4y5kBuaJrea7LADMwfofZT2ECpSoDP72mpkgZRo1HjoWw8CKPp7ZHEzoCejgSZVgzHULw8hpW",
  "key11": "3A8cDANfhQwJv2eJcfy5UHmE21pqti3oERzYrFys8pBVGjMESVXzR4tw9tMKUy25byW2QZ4QE6duVbwuM8aDpmY",
  "key12": "3QYeH18WjMD8469rKFPz2xSXWancdSEzN9wmATYHsMurfeFpPQemXMsWRVwppKBVCTdfFA4dd4GrY5A5tESYJMyU",
  "key13": "3ozjQUk3qmzgkQDhhvgMHpHgi7vTMr3RhT2qrUy4ftqEfk9c9tGtYzEihWsz4LYsrtzUeNy3UpYEEhBnZxoWrfrr",
  "key14": "3RQyi8RVAnEiN7HsrpUUs777dmZNghYsm6eMiAomLco2rumzQjX7dJcB6Fi5A85fcsu2esYnXK5LRvkvPoaSYe1V",
  "key15": "BepNQ3KByBdLNT1ddkzpmsfq8eRUpjthcTaUpmx91arZK3VgxvyEVQqRHsptB8AKVmZQHdATCMpTDttNBLELJVN",
  "key16": "Ed6iYyGgducXoDxZJDeJc3ztW5tTtSneHMrUiCSsXkYSL7NspzsTbxmEPuQfUGVTtxFzZft6DQWEiCkk3ekGjzA",
  "key17": "4fE42DVdhY8zHhNBMKnmgodT7PF8fW6ZgLYG9tXCKWpN6xsop4mSVKYpsJUyh2rGwxzqojLVvydeSHC9GNAxbLdk",
  "key18": "2e1vr32AGHUA9XPHLS2H3yXmFjFCxbT4S8N4UAZNghjhp7Kn5527YVYq7RnrezxqeAG5DnAXGH8ZXHMsFCwjSZGW",
  "key19": "446hsviJ67xqhroejbp8eE6j9fT2NT4x8AQ27W2EJVXpF2XuGJCT9tRqU5PFwLzuRcDVg5h28nqkhAjvELUbPJDD",
  "key20": "2t9r4FXbgrhet8MmFeLWsqmnaQhiGfXGcmKmYuVVxW4PLbDKisSoeRP35QABeQaXxfdP5ozNF1ywtJLnn1ESWzdR",
  "key21": "5JdY45E6HNeM2GNnioRszyMFgrsrGcC3pakf3TbA7KyuHbY2CXUVxygjM5xPceUsoJXVaDz4reBtBRuYVC38UinS",
  "key22": "2zPLe3u2ttX2wrG35ARViEKG79SfdnXgcJxY4YhndTXTgarVzJhE6MxnwRd4e33qDwkeABpnTBAkUQsdGKqQrt3M",
  "key23": "5zTi7DwEb2RPyw4s1K6zvdZMq316e2E3ySuyw8QyUTDUfyqbVMDJmmRZtvbz49nAkkNVsXtbAPkZ5TSy83Q6J17q",
  "key24": "53NKKmTxXFWrDvGaJGMUwv35fWNDR3p2gKHARHG7T2Z9CthXS1Y3DvdPNF9EXjzvuhMnGA99bDoJL4QZYQy95eXT",
  "key25": "yPCPVnwK4j7WBeRzyLbUom3Bvn7q7HnnErh2MBZE9EvYYPS4UDGqCf9S1FBUjZsAJK8JXxUVfWGijFG1ximzWCV",
  "key26": "rgVW6Lr9U1VcdgNn67DwVUpMZz7Qg9ucafnCoNSwitoCDMu7zYjEMuxdonrZZ7r5DfCCXnge6HWGKKmzYr9S2pV",
  "key27": "2dAZL7uvgn3TwAqGwBrPQmYaYxdjnUSSFp8Wcxjrf4Sk2ijmGR2HQ5DEZp5bFbqJs8U3gL18yTVCudwM1duJpv3B",
  "key28": "5jCuNH9dLRPYF5Q4ZfrJGhEDqC4aSudLhfDbvyzxhvPvJM3F5wzP2nDnnm7pv33uvFbwfqVRgV7A7nbRR3rLSzYG",
  "key29": "3AzDMkNPNwU2yE5EaeKGvdDTqMbe1NWhR9fa7iSDMF6KkFm28mFXaDHDY4Ch9oqPD72LHpu1HQjfqL3v3J27nnpX",
  "key30": "25wCXWy9Y6avzwZk1BuKj6zjEX8GijC9BokRgDxagig28YNbcPj4MtZRBLhCmS69FnaMXjSS4seDdMBXVQ91u8q9",
  "key31": "c7faxX2hQLA8tQuTcmuXpMcvTnngnHUAtwpuV748jJqJoodDKgKCVrrnrt9Frce86zn5uxpqq4t4vtoSmjr574d",
  "key32": "3528QdggRbuzo8TiB49729Sa2J9XGE67fg5qGuJrky9FmxZYa46VuLcT3KkhShK19aKcCKjhVK2eWw9pBQcdZEjq",
  "key33": "2AhaUp7JGy8Z5yQg94wwyAgrDNH56BRA24SzAJFyKhmr9yyPsssbbAkRncnSZwzhzZ7S546RceqCgHbnv4juXgLp",
  "key34": "Fek2PpszEWonRnFq93t6Ron6qJnWzLj9u5vVsqZbRWmsRLQ7V3LrrzpwPtUUhTx625VRebgaDPVNH1cyLy39rM7",
  "key35": "41dKThDDG8kM168az1R8w4Msaj5UU8fk2Uv4PHuhqyu9MjkBk9aiEVYTGYYWLgtjT9iZUjtNM6JD3Nngybbyy9Qp",
  "key36": "tjYiofwWyzFitLX4X4nBhmNguV9258135YLfTW9q3A7eZU7SsSi2gGNBijMMpgWRsdN4vVRQAFvS5DQtUhUbpXT",
  "key37": "3Xcok5711bnk2k9a9XivhhnRBgR2L1E2tJdwpyHkZMVgzrEhXMf88q8GZz3B7uM6zo6Q1KaKcidJ4tedWNDG1Qwd",
  "key38": "2FXBE1Aj8GiNGE4rEGayCUHapemt5Tckyu9jr8gWmEXfMFCAhVmPeGsSvQU8YDq5PpwspHtgauqvrhUUhaDBpbE",
  "key39": "37u1MjkFF4yzyDSVqKFawkca7cNoiZg9hkKBEkdJCGr6uRLuQvJRZDjSzxH1LwbLNdfAeYLXvPXk81NCFbiHriz9",
  "key40": "4URLKag5kBqpaMYhC2LUwsYDgV6y3NWs8V2Qn6p6BFYZJ57LNXaM51psy93uEdb9xQ9xCR2fxzQXQuNDk9mYdS74",
  "key41": "5PKf2aHk4jLc1NZMSHzkMnUB7c8J7CHG4kVSFbv5wzjP2rEWzVrM3K86nPZ3rcJuTvo1kcAqPaoo7RwfmxMRpgc6",
  "key42": "wwFw6TAkt9zRnhfwEtjzs4D8uEqdtH5htY31rHBGn6hWNm524zX4TZeLTv5C56BzyPgbWbndrUFvxvDNN7QZtjs",
  "key43": "kv2mspCofkkN5fDN66fARA6uXPv9vnGQpijgYVHHcSEd4kbJs37QdbwMRzzL8GavGKWVeVc7UjMh8eskuChu8QJ",
  "key44": "2myESdubSUxfXQX2vcDhHwANGB49jKiwW9LisMDSENoWHveG1XzWp4tFQixmDEyFtDtXJfVyXRBpu1ft5uBmNAQ1"
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
