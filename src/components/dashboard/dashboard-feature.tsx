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
    "5Z8n6gfhxEiC8D8ZQjnDosPTQ6VFkAcnd31UJprPqoBHGMS5ffpCL5qSqGFgA6dX8DgmfUBBDkZ5t9EquyzjBjYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GMHbd5ufDE1xSk6x4UQGSKfp6HNspNfVn1TQbJs1sPfRLceBDr7WEiPaHaiDf3ZMym7WmZsWeFSLyoZNH7Vb6su",
  "key1": "2YzXh9aDusxHkMSiQjKUhPWs59PUQPtA7mQEUMbjWuYpSt2S65FGfumqNEH7PhCt8pLuzhLG65QXdPHBfynxEYhF",
  "key2": "56dgyGfVVDqvkjedWxgp7wd7FfBVqW6LrWcfjwym6oiyTkmfMxNoLYZ4GGeAm1ZpXGCpYD2spGAy55LDjAG3y5Y6",
  "key3": "4GpyjCxoWTfdfNMLeFoiXtPWhpBQ7FejKtsSxYtjimJGTqZYauE941eEtqUqhVAgwiwsBfKcfaDjHitzzZieYgNr",
  "key4": "Ewi4w16u1gsexfdCaSBjrSr1kRssAhYfWFCATrBp59PA12cp8mfosTc4E2EhN19RduYwJ5r855KeGMtMniiJQUY",
  "key5": "64NsQY158Qiv8Xy9jR3wbygXfm2wEhs5zEwyhZuhcGb1vkMNPMu8J9C9fvkmK6UL9nsQ7eHUouJvKLk5BSVWVVTL",
  "key6": "24hno4R55cu5CN4xpnYSXjjRJ87ftVW6tNLXyGHGJtddT8hS3aTF4oQWDQq7somzcyDuS3k7xEAenke8gHDabtzy",
  "key7": "P3wEvtcbMGp3QPcMkVxL8tyWuhMZ8yQxN123cWij7cV98vwQs3SZSynLShUQtPAc5QrMX6sAdnWGc6sxrYzWZfZ",
  "key8": "5ohJsRAPsTJqTMMsjCaSFr7kv5iZRRfGT8ZEaZpwc3KeLcR5ELB1QYxd6PwWjLHqJp7upsyS8ZPZcHZtsar5MigX",
  "key9": "2iG7VPwLBuQbLDkTbRPMsTZtWSGi4fAfu1AHntmd9NFqwj5yWoaaxFF1pxQLrMij1htsDtYpxSGaD7X4Ne4QmGQD",
  "key10": "2LJnUtkX3bcAznNso6bXULhTZ2kQTFEQDgbFbed6MSDcQ16Tf86Jg8xyLYH4qEgq1ekrkNUqoz7JyDwrhdDGWk3n",
  "key11": "4E6GFAspfMSf6H3b65j1FGnboLgJ6jzerFHwtmMwbDTR5HxFYpUB1wtNb5cu4cFuwDeaZSz3CEwQ1K3eXW4C5yDP",
  "key12": "2mSH4uJNPS2BEVeeKUq5qqeUhUA6VNrymvDRtLDaPC2QWWCUApFt2g1sAyB7q7ynJxqFyqaFuKWni9YAibJQ5o5h",
  "key13": "3eHdcA6dLrmeCTDoJfiEMJzuLmaBFnS9d6ytZEkW6Ugxw4CLn2PEgxXtmB8L5HD4qrfecfXQBE1r9Dx57sQxaMEk",
  "key14": "4MJRZkYfdUus6Fe4YhjvXLVufe4QYvneHbFgLGz1kJGY9AB2EHV9dnzxKHp4xdjjnzXKFTcfv4fy7VnY9jgvWHuq",
  "key15": "2H9MLKAjZSBhTByztu2ybRtfhbgJgFUKRiFR38iBMqFtNAhPMuJtC2u8nWGX6v7ZnakhCDDsg2CnXGB7tFo5MvFw",
  "key16": "33gS7k8bZ7b1aEjYb4mbTjdh78sy3rjuY72ZWYmexrrwQiSxQxn1wHLTe74hz5NLXMNT8iWA3jFuzoavw7qHUe57",
  "key17": "5DjyeWaPC4PCE1diCCJEX3xnwNh9BAxcYkx4b39Rk9nRzYUaUDrAHiRavzVyrzLyKK9grdw8FgJdxLJeNy4EW6k1",
  "key18": "vDUfY3mHUR8r9DMmeAAwDJjUsopH8XQPau9wg1sXDj7E6i6XeaiKrqhSiCCwZr17MFrhFYB65QZNAQMykFoiMVX",
  "key19": "5vxDsAZC6yCs1TFTDsAuvxr7zqGLSJ8HeSRPcoFgA7BwszLBNfn8T5oP8Vmj7JXid9qLyoe2Y7tsjvu8tvuK77om",
  "key20": "26mooxs8fxYbKPUjQ7C1uhCuic7c4xvhzhtCoMWBMh1ad7KGnmVCU2r7L7T7iFoPCKdUiA43YbQCETrJdBubJq2r",
  "key21": "5USMvha6Ld7V9owA9vNAipc5UDz5EXWyBZQgFKD3rDPefpTvdUficYEESTRX4T46U4sycuXTWufE6qBMmAs5f1tC",
  "key22": "3VpJgVUbzLhiy8DF1TFxVy7PSd3UzVwXg9AQyVAdodf8xsSJzBPXfAGEtCGw3XD18vHxXnW8dAxGXcYJa4qBiQ4v",
  "key23": "5o2cdSW2mbd9yW7gBCUii83d5VmjTe9P2FkK6FXCD79Z23WrV17q7uEwMeh5AJK6mDeWDbqsiywNDgSED6rHB7s4",
  "key24": "5KhSJVL9g5JEWZHb6dhD6RTrdKUrjg1Jysttuz5JfFmbLZPJNqqg2wb3vRkwcQi9nADkMQaWkXNswSDfyyK9b7Uv",
  "key25": "4XuzLtYv2yexzZFpDn2TCVE9eBZEVNw2DHeRSGFu8fc6h7u4MxjVFFtSVTPxYNArRczUCa6DvHWnakP8usxyGXjC",
  "key26": "2yaNx46ib8x7NuDin7JBWyDojyHBPT7F7SGypKVVfrJniLXMMimZJFabqQcWgyGc5UVQ3dqZsbK2fmK5VhnV7kLa",
  "key27": "sxBMqqmr6NQVvtzcnfzZcZcBVhsd5RimiEgUwuxrPE1rW4aeJLGy6ovqRqrtLQZFNkRG7ByAuhQjNuHpUq9nTmW",
  "key28": "3MHceHDetFcuhGbPhUbBi7J6Bhibv9uLi3AgsMk2jLE7cWysRrkZvVK4Yo1NgmV75fvDs6KGBaVXGw74pStR13RU",
  "key29": "511i5FA31mfMaayijsmx8rZ5CHLJT1yX7wfMQbgzEJA9ByNmrMBu9c9bjbaF4Z4cwqGU62wDkYcQcBB7QcDwyjmx",
  "key30": "2MQ19GqutPspmAsRsCUDL2WHyKGyAnvgmH4aTTHaGBx2PT9GSF9gxJ1SHtFqCnVJoqR8kur5JuyT7txmC45tLSXV",
  "key31": "XTCKcwjK3vmJA1F6frXteygiGXJj9sKLFF2WGDF7zvHuhFQTrL4x1J71o2hpYtcEq2mzaN8pKs2LtH4ehmqau7y",
  "key32": "3NK3zjstkuuq75x9qrBZ94b3S2pBPqH3PyLUPiBHiu8Urd6uKS2P2TcNftPDRUh5WA4sazVWJHh7pf7hjsq8hutW",
  "key33": "2qGazoUtKygYN6Y8oo2KCWMiGNCdrcTEhbXGo6WyWEMXbKyX2yAKG61g8aq3d26UtFLst2wPLEtU6c28Ni1yyTaj",
  "key34": "2hLhSQMHo3s4AW9Vs52baxrAtH6scwQowC3N6BHEY2VUh7Jcsg59g82RRUZizbjCokZhUCE9rzkADeTB2J1L6x2P",
  "key35": "4Qhj9vXhFoqyLghVi3WH5tjMGDwPkdiSugcfmXRuPyKtLZDCSD5WgMdxqkVsEe6xCN4KVqFjeeXfagJCqf2izqzM",
  "key36": "3FmbGKp7E7HDakBPWSa81rBpLbDmd4G1M75haNdy27w31yMjg3Qdn8MBPoxexVCH3Vzs53KSW9NUP8q3vD1NTtLM",
  "key37": "4tRim2vKvc3pS83LNmypZ2LzmxEk4ZGTYHyRm9iGkYZ1T4imjhJwogiNU6bsPTbA7aUjsJ2YCs7cPfjjNmimxz9J",
  "key38": "MfySXU8MfGxZfjzGTNWS7bWcYeTqCYi6pPLpz1EaCDyRPcJBtgGe6BUspZwLjNYckYUQF7GA8NGYEqr2o63xxHD",
  "key39": "42njhNJSPamsmDmeeUXAA2CzCB2iNkuhhto2zWYYvuNoy1D4EyHYUiDMM1T3hcJmhkrXrG41uZP8KxLH6gkcSdLN",
  "key40": "4FtpYEvswravS2r8Xmm6MwKaFpNvG4V1whZkwLTd8cwutre5Mcr79gmGhQY6SMXWgjgoeLhEA8FrjP4p7LdhjuQC",
  "key41": "2rQsdPzwav8S7vFDyPE66RbWn1RGR97zJQ1dkrjsA9qcHkw7CD6YXXvJDQPTAece7fi2CjGbti8rGat4QZVb4pj8"
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
