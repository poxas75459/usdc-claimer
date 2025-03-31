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
    "2LsseRiGqshczVBQVWBRhZcvuQjC7utg6CLD4GW7ETTKPiFaHeJorzLXzzCymLZGZvGtpBXxZQ92A71aK1b2HQMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54934Go1beG1En32u9KWV4QhkM1tKY1XFKiLP3SL3RbUeXQp9xR3kU2Kypqo9TEPL4qQm4amrjpUVVHdWu9GEyin",
  "key1": "5pX2chHVXMWSWY5ADSG5LCawJB992DnyniNNPEe6EzbSaEmryC2GvowezhtgG12gfrgieZdoQYniFGaePeVZjNwo",
  "key2": "4Tf3nXKBCQFdLBjH4e7UUgwh2324sg5tr5sgCydiPCb8zqtkDdt7HJYxuB4K5aBvtd32M6cX2f9S8J1kJMV5ZtYa",
  "key3": "52EZNTRM54GT2xd8Wn6xqjSn3CQFyJEXGKy1dH1SeiRRVsmhjVWfUmvcqDG5yT8wB2vHanRManH51BYTuiYKNpsa",
  "key4": "4UGujiwBZQvjQSnJoZcmmGCgShwLyBhoTRsaFXTWcPgckHc75vgTNY9SsAutff1Dk7BPWfqd8g8uTC6TR6bz9X8z",
  "key5": "CunFYAy5f9o526cWg9XMCmieYtvg11rtUjNLCXyPLMWZzcqZNpPqUu6REcWKXm4s2urC7xD8Fr24SzTexQQRV22",
  "key6": "5wtppMcBmrvbcV1jJkViDaxdz9EGWww4xandBCXU8yfvxSybeiLcn8L5YG2Qp6h1RCf2KMAuWgB5JmnXTewWfcvs",
  "key7": "4q3D8C79N5uLYoAXZyevNHjdYkYCgGyVsMhQy9y9xj1Qs1JjBwt8NnvwquT6ZPJ9z2HzURkjLm8t4E9P5CboiEdd",
  "key8": "vWhoq3grPVo6GTRcPVKAVnjBpbwbsf2DWMSmb6B8rgyucpoSEDDZppaSuCGfK249hSBPUwDHtRmdJLKPyAn7wb1",
  "key9": "5uJn1JbHgGJ3ZkPJmX1g1i2rgpQ5DET5RoxkqbE3nEvj7krh664B6LeMZKFe7qaeQhjnpwcgoc8oTLXML52iydmR",
  "key10": "2R7t6jM35QcUwP3rPGdgCkXfAm2bdHikDdy4TA11MYGAZt9Esd6y42THYuqwoJ1upbXsm5oie2rY9Xqk9uBJSXmY",
  "key11": "2iAF5CKAsxk5EVnJp9R2dptoxZL6epgdbpJ7rmxKjrUYG25K1uBuHjeAc4JU1X6QSGTBxB9bRXtLQ65RS1S14zfk",
  "key12": "WGvL2i3grnnhKYvG3QRWNjEoyo9CLcJ6kHzLwmJJBYmgjpyEJmdirY8nq9su4PgiYboawZJ7shvjGAfmNnQEdJ1",
  "key13": "4HhDA4Mq75yj4cuE8KeVQEMor5vMTVuCLjWxEcafMx8eBuLecPFw5wALA5KMNHNu2UtsB7dSv7BDD8TQozVEabdE",
  "key14": "67JDobkxXCN2M8iWExDEVQ27z15WesVpwdRvRKuTTLJg2qfpXQLCXqwawwG3ZJDQKko4jjg5LNMr26Xtof1sUFwu",
  "key15": "59nyCthymadSRPrvKpkMvwQ1X7jxuaDW8EhkjgvHc8uGRgSNqXrpHGs6LcNb4k4wTxTGkj5sizRhgsodoEN6xEqJ",
  "key16": "5DC8gx2feEGwyHcvW6ox7eZ1LrKD4CdUg8NGP1eoKsWgwtBJ8M85eDvc4rNrWruiWx1QktckvnKnJVpZkfdspHKj",
  "key17": "8HbAZpXjuQdEg6CAKxJRxqeNmiR33qn1H7PG9i92CgM74eJtNfQajY6HNErw5bBATneybzprXDa9dVdNV97YzWT",
  "key18": "4iMAqkDS7xh9UP6tVtB1e3YdejJKzJfNSeMm4esHPc5EVYgtZPPhhVEnNpwE5osDGoE5sjCEPJwviD39TRpcwCzy",
  "key19": "5tzs15BdC1MMgYcorZVw51q2bUY1ZQt4d9pwzPrZyzuV2RHruwMGDimd6SEn85gnYjdGjq6kAmpq2yCYDhG39qCP",
  "key20": "36mUpPvQRuFWYjaJ1LakoM1NVjb4YAG86qyp2ZPLeDJ7X7JHXuqQyCSU2yWQJnB89gGAKY2K3xhhUT1ALGsi42un",
  "key21": "5P1cKWA67bWGdyVffN82Lz35ipRLUfoqP3QfgQNwofMhCN7TLRgkYjTt52DvhzdcuHwAYajNTqfKXq6MEBBMgBWt",
  "key22": "U69RECrAmmUQr8d51DYbuewx5ojrAoBGjAMf7RmzJuSxaz8s6ecJLjj5zwK7bUgDaU2rAqbD5cGLmasqYULTnHb",
  "key23": "4BFMp3ptqRgSmrPMxELRfRm8jndLML71B28SfmTBk1AzA1wnDdPA8xjHfSDn7rprRqPYuSJkYuEe1jguKMpGAWCb",
  "key24": "3MECSkEdTphwP4vrzXBb9i3vUU78evhxDk5UCwmGt3QVpw9N72rHkBxgC6MNrSRfVWkWdGSijsaqbXqdnTqc6Uzo",
  "key25": "2faRkRZ6JDSQY4BPjG2sTsbt21NB2KCiP1vV8QG5t9YN2NgKQTFFhAZS1BzwdW3bnDCrEvHFvmLNEmUQBNCHCzaG",
  "key26": "e1pXXhE7PfrnKJ3eXCBhTyhPHCMv4zJCoRLXsCE7AuXjr1WfVUjiPzFxc3rYgQbxQWdwBHcFfBe7MXtUgvqKMwj",
  "key27": "5Y4bWHEN4htAJhm5rDCbGWopjhDbX7sz68wCtWP4Q9nLRniRWXJRJ5qgLSLrAoY5hu4473pKcyqXQPrVNc1SAYpG",
  "key28": "3HLGAp1y46yWD6QQtYdpueoqhYdoRapnR73afx3YVKtR98cP4e9DHysasYBnnAt4AQpdWvXVxyPHEkNUee4MCtXg",
  "key29": "wo92td8aqPAcAZqNDZAjH8oP7osqPWanxjrTNeCFE1JcGi3cJ5aiDVfbjNwLa3FDTFv2YkBTkBGazLnWBtAwwXx",
  "key30": "5QjSn5kVJth97cBo8siDbpsRq3yUbriy4LLbZbMPyoVzJeSUS3BPkJhnKHEYP9BJKCbCwUNs7reDQmPZsF8z4uFk",
  "key31": "h9gZfTS71j4zSRPUZd6xUk8sw7e3JbPyKjHWj46W8DWvQFsFYk1aLxvtdZpGNLJWmjXj255a6DhZp4pwGQ9ZYJM",
  "key32": "a2gaMb1DSX2nm5nUZx5Jp7eFkT8FRjuVMmjW63BTVVCDJPreBXof3b9QwTGknKkwrSDWxfHKFwSWnXRNLiBLaGV",
  "key33": "zxEPLyGM3Gj16w9rMQj5zJfPe6zZBmB1uKWMRrt6eCBMiKbLH1Hy1N38C6NGvPiUAwyrSXiLH2bSRAh57YE5FVv",
  "key34": "2AVzdYCGB2kTimJoBS3GLiEER6QgRrR6HiZNTA6XaH7m2Z9mEvjCap2E81QNX9d4FsArJMyEEPdJLy6LkWipGRoA",
  "key35": "3qQAxpmCZ3CqjJoaSE23pvECtuMMouxKGwejUysA2cHRhetG8YfRys15pzczxpMkyspPaGDyBi1Wb3EZ1TKGrFQG",
  "key36": "2tp4gpmcD56dv7siLdTcX15DATzE8M7gHFcyFRyMxJYcrqdLmuNc5m62B7JP5BFAMmmXcHTyCbseuU9nEB7jib5j",
  "key37": "4TgQ3YHYQoexxkgrLXpDPpHK6QW4m9d6KaVeYytjU3uZXmrAhrGdnGsq8ykz8aBHEvgM31NHdJVvzLtVFraJ7KLj",
  "key38": "44XreZwFjdgPQwQCDkYYarLKFdBWMakB7vbg5EikZMhNMVEf1P4w1v625A9pdrvEWFjJfYS1ukbzt1dh9mE1Lizj",
  "key39": "2JBSXgi4RDqdf3w2ftZwgCGDgwXXvP75xRiggorb5EBqgZvFbTVtGttax5hjnMij9FA8HkmYaFmB3ayzajLdUJ7g",
  "key40": "3c1dLkk22Z4uz7qHz2auF8cPnqiRcUfBozHRnKu1r3Ey34ANiTKurNiwRxHS3xk432oRgg6STbcCVWGipCWeSRJa"
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
