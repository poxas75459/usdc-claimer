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
    "2Ts7iNxYSwcBT58RfNV4zsAAbiDQEQwQ1fPyAC8TZeBbdbidNXNfBcdtXHAbWsyBwA3bXUj2XiQb62BWNmYxXJzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4avmzPXbkhR2XVEXrGjTDeNjTpXQzypMLLGuPdcN6MmwQU1JDc433iU8buQYFK75QinA5Vakg5wiWqbPSUuqUMFe",
  "key1": "DKQ4pbgsHHGUXcycgMFp1QqPgAVvR27xWLQNG7CbYbTPxsMzUZ4xRwTtu1eJHCsrX7G6FFsEmNaZVZDbfXGj6Sy",
  "key2": "3UvPxLZsZ2nfgUacWbdiSkakTZ4BVfTreNcCrg2vn2jVGzmu5otAAQnqnRWGfkThjbQ9fFibvfVRsH1jvW7dWGuQ",
  "key3": "9JxbNtNaf63BuoWYYJ86kXPu7Zx48aX9CCsUsUXS9ekCp4yftMBefgzMHvWugM1KtoW6WgfZmBUqfhj4YTQ4cCL",
  "key4": "2Sp82mEq6vySB3CBydvtY87iySaPwLNDQrCbsu45PjS3zMpnCFnniZPFHr6htUFVnUt5wKffxkdf1qy2LERbrZSi",
  "key5": "3V95SSWjPycYXoqRLWgQsgzM6y6yLMkUFQnTExS4PpUB8Pwqv1u2kFTeEuuvoUvYb9zHFdt296WQ5J3hEi7hv1HB",
  "key6": "bVjECKh6mCRwJyhoGv2vTMe7T3aqx4i3hBeZv7YHTSGXj5Uxi1tLS1wVWuLRBcH3mBQ76VirNYfYYgdz1jnqMqK",
  "key7": "uxLkVwsir8ZUfjFVsCQCTf3sam7MFGKFE9PArR53SwhzXCtRdVD1UPJGDQPApaSVW8YDZFCyCTjti7pYjCjsA6n",
  "key8": "yQNzixxTsE43UkNK7PRWEP8AsdRkDkF6KX7HAg9NjZGkLfosg68yBmXL2bMZBeU9LUKzhA6djkMaCw4aWxVdgjh",
  "key9": "2kgnLXRubTuhuVRXqtXetgpDqbQfp6e6R6x2ymwgqsTDhU3xV9VwWr2o2FVKNVNwtSP9DKFBYteXjGfBguzuNSZr",
  "key10": "4XcbRtiVZ4eitCpN4XHZXoghe4Umphy9uGeiwk8Zuse7xWRJnYWYRuGPNUhf9dvCK9WisNyDq1L6RrpMfqbHBwA9",
  "key11": "4KYPsSWiYWcYkaoSha74zMjW7VjMuEmXCztsQYtrTRxgiq7buzjggYwDpNDwL5ELmYhtycJdCRkN26Z5SiXooBDh",
  "key12": "2BVBL63C4U5EQQsMztmtoPWnYUFhXaWGHkvAt1LjFJn9QLNjTY76HXMqrh63CzuFopqHb8Y9yBRRrdtDXwNegFtS",
  "key13": "33sQgqPpQKAYQaLebKiskCwwP8nbJNmAKcUgvknEeYoMiTST4ExTLgukVb1s7pxPynzKEygAAmM9rdF9Xmgr7kBZ",
  "key14": "44qfg9SkvpipFGpY94s7KyZYmdB9mW7feW2Zys9griTd8ZyyLoCz9i54ymvPruu29XZeSpHbnWEnSEJCDuhWEmX9",
  "key15": "5gN6pLDhP8kUWFWJU4EP1KV1ebpYVAaDZMch5yLbQJUKM58P3uE7ZXJ1LvwWdf4Wc1uZFYtRuLG9dpiJpXYiqnTR",
  "key16": "5XWSixuUgjJftACAx7N1xdVdGqkvQ6HM3cJJPgk9S8nrBZEXGrQAxGPoGD3E86GvZ5qJbCYby3d1tmQURfuWSVbQ",
  "key17": "5zDfH2z7xEmAUmbE1VofSsvL2Tqf8rzjPb1VJbRNrATrJ9JJufSynekGsFteMnT1fHLi7S6eYAroz9UdQeXXbk6E",
  "key18": "XQ8DXNvF34YvDoTp4tZVQLMKWdK3GX3VgqqdHifminLfXTbTuSozzDb4kXN66ohjfBA1FzcZmx4BCsMMMwi7VX5",
  "key19": "Cu7MKqDBzWScaDocFK9THEjLbhSg8QJpuL2YHo9vY13wyrX51XgeQTCsvrWHE3FwkbNmXNRGpVUFH7ZzQakgpbx",
  "key20": "3Gtd5g4CWJ7pFGHYiYZxKtKs3kRCC9NzSPdiba2z5xu6qa3hXVoyQitCmurna4sFGiXZkes38fsZHdMMeq2wQ3ix",
  "key21": "4MbkcDS1xFnXg4VcPEHajcY8PeBk6bxjEpsyBW4JtbzXBGAFNhoS5LQQXsCRmr3EpXykdcw7ekCdGXscaouj1KV3",
  "key22": "4v3aRmTt425CcUvXxMVy4amyDoJNeRqWgs279xN7xRQojQFTpirGgEtDs56HLYmoY3PomeGsh68QxgUZkuyorG3G",
  "key23": "3AJJkiXdCYkDWEtXaAhUWr6JQ9EmsubpxvMqGdCyXDBdTAQerb5UfWiJkoREzzuUWEQ5ZYpPEfHAtywGqaz3ErcK",
  "key24": "62788oYf2eBJZun4TRonBhpWvFAXXNGE4PEaoA6GCbwtiY8bSkYWn863v64PXwzZhvwG9dNXbS5b9dPrbepBerBy",
  "key25": "5aq5QC5PD5qAgWhFdDka8CE6TxuohUzcKqXd2kKktCe61aFpYqGWh4YhJwDqoDegqZcAAVptJp86BybQx9p8TBjW",
  "key26": "4s9bDkrmE2gwwVpJrhjwdiKs8Bp8KWwGFY2HhwqPd3WM1BGkPbBYGrXes4ZGsnmYHiShKAjk5YnsVD6cmnBYKtpK",
  "key27": "65UaEr1aNZUQYNu98EV9FVsbRSxXsoJ9bRuWrLG82HwKiokohtiR6TAKPQ2dGevXgtaKimodmhTKtZaGTGYh81kq",
  "key28": "SxDHt2r5XRzFjakSaa67HpiLwJZX4sVdG68rH3KkK3pTp23ttxC36GNWfyc177FLMYivq9JX5ajbu1RtokNhEvE",
  "key29": "3xemKfhrhfgc8mzTJicUEw2suNMoBQ8CPBwuY7MWxaWvBwrgwUqYyeCvFdZT1GB7MNXjMqdZH8Y3khoW33fymi2g",
  "key30": "5CzGSHKNC7xeYExxex7nzzjaWSGPXALztKUtWBUzG1yg7CG68P5obh2xdw3coraZgqyQMwnuha8FXisz5hHCB3Xu",
  "key31": "TjnMex9nB4RL5LskDVtjuSEvzazZu9JtWnHwR5TqFCaLtR9EUSx2Uw6CfyJxuVd4pRuuk9sbhAshd4iebikizoX",
  "key32": "5GmMgPh2gDrd36SNew5GVL7ggYf7RVtkh5VwtvJuDwxe9U1GS2vtVR1BYbCGPMLmJwY9XGMvHUqBuvQc783i5yRM",
  "key33": "CAVc4Wco1PgW2QzDGvo5KnHDW7pGn6PtiSr57MD4hV9ZTsGLsR8rkTnm9BCWJxSXDUjVz4nRdXZJQNS6UNjnkcP",
  "key34": "48uAUeVtAiycJsr6avxGtfrQA9XkCJwf7KuXgTCjvbBadoAd2LxYwTUmQWDMD8VVf8mqhVvwpLzNPWT5aA7X9sK3",
  "key35": "2b8FFcmYok6bBSDa7dgoP8Zg37PgipBQ8uJtm2uKFtE4qy2QypPvVTTmbD9KdF92kqdAKJWTGK5BUWRYLMdCsFCE",
  "key36": "47BfiemCnnBpf2n44b75HJqpEeVhDYh1cuKYua965amYu96xA8Xo4gAZnBUyu6ANQ2GVvWN3gcL9oCutTiLnCPd9",
  "key37": "2yCKFX7X59P4CGSK38won5m1tR74LaFHtpb2a4vFmVBJpH5MWNcgp8zTDyZHQKVUPnUf8P3sJjg6HLVwLN7s6dTu",
  "key38": "5rZEaYoSUMDgqrPcDhDbAKHr6ShegGc7vabHoFLzt8wXGfp3Y2XhmJJGhQ7PgMVGSGJeUF6qNXNEWbagF5MKjX1N",
  "key39": "54YNZrsqjj4soRZgGnDA7GeWrhMKnrnUkx7B9YfYehx6E8UiXcXhno4CJhoUvidVUDEgd9JiFSb9ka9RWsY3ydHn",
  "key40": "4sZJCFHGS2yqDQkKNAE8ycVbTh5BBXV8mKNtWz8B6m4cwgujLXp8Dd3PFMCfCxCLu8mPpQuFKV98UT5f7GCWwmFB",
  "key41": "2pW5G3At8FxF46FB3BYYdrggQvZuCMgRfGnDxRMd9gQRgnTA2k5dAux4nCvAcf7EqTCrjXiUiP8uSuVoKAc9Ncwa"
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
