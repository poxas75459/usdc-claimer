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
    "4uVXPdy2s2NrH2o4paMeQZYzpDh3Q6cu3auoKFHt6umsKfq5nDudx8cMYLFWeHokddBqLUGk4isyfhyBCnrp5yPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RSzCo8pfax3FEtyWhYzmfvPgQo667JFAiJChscgGD89omf3CiudbZCan3bWKRUMpFuLivczJrmCjadiqppNh3ag",
  "key1": "5WeKaRHECcmooKCvRhrhMYSCuz3FwkmLxYE4zjkKrkAaeUsjgsWmkxHejCbYWwauMXToYoQviFGsjCHjWXjefDYV",
  "key2": "2YgpBJStjZkeah3fsuQeoR49bWMFozd8YndXNCy69Z82T2E4xWsGqrNNDBhf3zvLg5ExgPYoQAxGEzTCUNFTPo8v",
  "key3": "2nSEzFJwdffqThbuGWhbnapVmC6RiiovMdt2seqLh3vu1mtwiMvG5BbgxVttTsDqrhQHbBFvTc1oW62ko3PqdjSM",
  "key4": "3Njdgnnn6du87amQBeV9hvtCa7QLRrSJc2SivR2yk8NWHv3FDtxHSsjeG4rDDqKXCaU78qK6QohTyvLWw1kF3sKE",
  "key5": "22w6AcYSy3cm9wGdUJgkrP1devMUDoZuNUFc69bhwfvDjcwhrj33LJJ29PhEvkMwVtvVLTJp4vgyDmNiBffttNLr",
  "key6": "5vquHaMQRyhkbQ6Q8aWfVHVFDtj4eB9zohGUgrWHUaYDeBe5V8Tqrx4bpKhvEHtHgqSttyacS8gr6nhtv87m9akr",
  "key7": "2srSiq1PkKU8FsSnBvHbGXoDtBKTUGfvUh3jS1GyozRwUty7FdbECLDTAM3W4vRZJT4Mh2Pj5SfhMyY61VE1mass",
  "key8": "sLFns412xhw4nDzXUcQGiyfv9wBz4TE7zMwbaemkU8aHByxAD8L1zrzBDXiAe8rw48unGDQHt3kiyZ3nmRdi3ip",
  "key9": "2NQM8uxtuw454rCLrqcY9V8FSHtZSSNjobmvDSjJXmdQfjKkYas1BYgErZTf9vAKBABJKjscAeDimRmWmmZYf1tf",
  "key10": "pPfmN1UJxeZRnbydC2YSuWtBYrFRYv3tccQrYNUQoaWDcY4YacBL7mgq1bxQ38UqUgTN5kQ4cmomyVQtoPhiJkQ",
  "key11": "3WKZwAoTSs2WpmrZ5cBGXxpGVhdeviKbjEzEXCuBu5Fot84k1p6PPnSh6HhoAg4DHQrgJFFoM53T6QaPvzMeHmu2",
  "key12": "EgDFSu9M3z3mEXYdgCbukhdmwMgCbQGZDHkWTZdFQAVjFTGDh8Fh1WedpoyA6xfkv39zof4Z7bNVdfVZpJaHMik",
  "key13": "3siMhLcVb8YkZ6Yg6fUsJKpj4tvRugs3Tkoo98tvtECZLpwa1ndhmTqdhzDWwDJkt4i2X5o2HyEYUvuV6MwbPwjw",
  "key14": "4SkZGdWDz2wnV15rzoSr5zqcCaNqwgMxTgKzRa6xXBsAirszNQbdWcvaCqCkB8YeiHtBiFbYZyK1TcundmxJwMsQ",
  "key15": "4uP7tKFhEBP1Vjwsgv9ZZJZC6a5RoHXQBuBPkxj3iLeRzkzMsovaJLQB6tzaPS1WzpEmXtHmnd9fTsZMmsCtnXw5",
  "key16": "4DfCbdxaGtu2nrq3rJxCgMM7ZpHssVjsse7yWYeeXg2r51jCLoFyxNK6E5UQDrnJZY7orsa1W3DYeTwDL3iuDXjN",
  "key17": "5TWx47SBXjND96SsCNZQcPRGTtRQaH14CRZeFLz5csNBCVwjsJwafaoSWdVqnXQPEmmpBsaV1k9E4b5PG7qS9GnH",
  "key18": "2nYqvhxry5wKHLxQ3uKjzUMtkwjjiH61zxYnUdu821VkdKkxqWX31ipzqDuY9YDRwbMXCdj5aDUavkzHbz7fJcJH",
  "key19": "3pWM8S6kCoLvGBAY3y8RyWF4kPRrQW2TfuP9cLEHnVGJjmQQePTiB3AgWTypMt5UwYNYmToPGqiUGtsrxSCRTcxf",
  "key20": "3GfrbXdvqLfH1Hqsuuz8HS5FTzpenUAFkZeMVtS8TXUdu1CQkMJCmexrWEFL8diuNJ9ShGAAPqhDfwhFq5CRX1n3",
  "key21": "4hKjfTeDehdupGzSzj63paK3J9fX2Nurv4ioQp51kp35i83xu183zioRbG4nQSSJUEkJRrkmKU41C4VNpmSLhcfd",
  "key22": "8SBqueESg5CpWmVoZckeEF69RvpHwC4Jt5vtjtTWk27rtq2SwM9EKaCtk2KuzrerhBeHcYMSmdc8nzBFwPSMA62",
  "key23": "21BM6esozkazsJPyGxnEJbbHE75Ash1CJAxCFXn9KZSb7GfqDX4KeDiE9LrQcrTARG5kko2MktHAeHGi45AbXYaN",
  "key24": "4nrbNwHEJVsZi4p1NAvFjCwdR2CqJCeK5oyACXg5cRZAHxyKWLpfv7cpMuYUkh79g6TVZfZ5tvkSKn4LBP4WV8Ux",
  "key25": "3DW2fK4iCYgokV4WYvX2EKA6JU8m3YGqnZ51JejSNSJtWsJFZD2eudLnMe58W4UXKLW36uo8do4TDwRpp3hVadi2",
  "key26": "5gGxHd8hbY3KoTjNoZg5jJqfAKev3EK2P7Y4xePgCw4Gdvw5rQntfkCR5AVNvbo5GjQmPBCMzvw1YLQz2xexBfAB",
  "key27": "3cFmSquU3XHW121MEwCqyU2iQZKck4VD9R75GPbTX58bK1RjKkwCjewHmFYqsjS1savGLWAAy623XWYEFk9LbCxJ",
  "key28": "uqysHK2WWA6pFx2qoxy2Fm1NPSkjME4hGqqoEQG6HLiFzUrH3qBNUNVEZLM39i28d1b9YsazUkvxgN3bx7uRmAY"
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
