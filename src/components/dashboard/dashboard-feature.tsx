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
    "5PMD2srVXdNvbguuUhqEFChJ6cc3h5AWnxsQiwd3MWKj4PtY3AwRWA2xvjrGFu6L1ASE7yqF2mSKvqggEJrGpUc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uFDt7N9wXKtYWaAUqpUJwkzj9FqNzC9FopdcjyisyM77WEUozHsCeP4vKcHTYHEuYiVdKULin6n8BFCnWgEF1u1",
  "key1": "3hyfSVhQ24CfAM7CvqaxZmqX5FuqkWHzNsfGWEsBE2BsAfyyLHAag9vdZWGw1fhdaQwsHuXMMFqx2qjE8CUiwzrc",
  "key2": "5HvTKjbAxgun6sG761uoMLZabdEH2uhS4VgTGp3XPKnwMvX21cBMQsxLRU46JfNNXwKNUDbMS5CQ3F9HsxWDCe7q",
  "key3": "4bQNJoqouWf7Q4sXtEN9gBfgW9JZX8dcuwjxC2WBLuNbhSriVAP6w6p2xGJPQdVVEZuMnJKC3kc6G81MTMpk6NmL",
  "key4": "5cL5eNyueNsQoPbga3DiCPDDCXWjBL9KMMN11VKwrarQfcnG9cEw5ueU4ahgrSUsFTZjVpYh1T2zTW24JvbX2Xay",
  "key5": "2arUtBc2qnogmcV5bN2igvb4iNoxfj9i8WLQQwFa1rxynwfdySmbkEUso1SXPiPwaiGbNHG37stGyooen27mnCyu",
  "key6": "2UxVNLDZsaPpsJHBMboRmMJxtia9gK9Psn42NsNLcCEQC9WZpHYMj85FcBh9Satn19bX3i6FDS9x2tgTCDZPVHey",
  "key7": "5VPrGLC98yfCB7KgkgwPMYraXLznk4mr6QHBuDWk24D6YNSzEJjAexXE5VaPZCiusxrgXjmzPyzrT2YaugQhvN9Z",
  "key8": "253Ks6fGNNsNezuhWbpBpKqSbmVDLyUu3vXBnFQioqDhRQuAwqTJi9GsJmc9wVWPUHicPEKWwmjmqMTgDEvQASEK",
  "key9": "5R26QW8wSD7kQrNjrbBsu2rf4kSVpw4wy5g8tFXc8D7BqZo1XP784uYP9zmm3SHBmm52LqDPHTSfxBmHgk3Q513X",
  "key10": "4YYDjfFtUaDcftRZZ4MMd5f8YDsDNRoTetb8DSKcbPSj7ZeKL6bP3ZQnovv1EqxWw7MzHY7Zpxnofg3VorArNixM",
  "key11": "5riUygEqjxxcR3HJg36LaMx86tpFhH8YDX2zmtj9omzjzi2xDjVhSS6LYKocW4GFfy2QoUzW9ipRYJVeTnAgAaWr",
  "key12": "3FhuizzjmF8fKTRbjhDm3ZsNZhCECebisdQkwmTKu4VNXKQgdaAmWmLKqHavE6WakqFQfnauTvM24LYMeqCjDMfu",
  "key13": "2e6J84dEWkjzvLVrvsoH8MSS75SYPCJeqSvc8jWyDgDKxgUZdWrk8atgNJwLxzahxuL9cMiFPxqNeW7pXBHeanFE",
  "key14": "3S7cJuYWruxLZyQTuLnALfLM4bgJUXC44DG9J4W6mrnkEVQVbAGP9JndbBWNrXsUjV9AKvTgoDJ1fEpvNqMBsQWL",
  "key15": "3wt5kzyQnT79e8o1ZjoLGegTY759nofH95ULjMignsjn3gXDgZsKVrt1Eq5YyJ1d4dUj6XvB5VJgwFtxSs6Jw3bX",
  "key16": "2ip9VcMrgBiwjU3m7p81rXrBtYS9NVfM18TpDfcnaTAtLFNA1YQe8k8gsoanawuUMyKefDEVRoEmWVd7iTr1npYg",
  "key17": "T6hp1G3rustZHmguLD3y5cgEzn2GZzgcsoQTeyrBy6ivoR6n1joW7WLLiATUkWqHVAxYdaXMznkTpKKtUCb1akF",
  "key18": "3UmTNpradp5HsQnVHSKeurmSiY3RcZ171qf6LMfL2q4qkhUWeMm3GvrhDs3ReYVAqbGgR1kN1kWBowbc9nmxcTjE",
  "key19": "45ZdxvanwgcqmRjo7aWLRAQbTbNVSYZ1PKNrroa3fVKp5cwoh4dGHH7JvNH6pDrhrfbWPBpqLB8qG12WBXDHcBHL",
  "key20": "3kyYZzohcT9ZFySrfvZwp8CUDd8fENK2PxVi5iPEKFJhYUWmsjaobjhLo19SQfJNVuy1A4BozzGtYwQzKtdX4F96",
  "key21": "3yhdZQphLRffoDGo7cKGLXDFXPzBKGmxSeCzFfVpvfxVRWttcwW169MZHWZX3Wbaoi8mWU8Bt2A1fD5ZvgK4zwYj",
  "key22": "5ahJEraWiqJGGVChKyQshN5nypsqPNQvbRhes1QsYcrQ28Et7BCnun9uod61ahBNs38VLb1xFDGV17FAHufZN5Rg",
  "key23": "3SiwLN7ByWFtBq4MZz4TvcYfVTsjFU6zbG4swGshrSszfXMUVm7aKaP6eZ5VQNJUWvcfFh1bt6JPgKGbtVhneNX3",
  "key24": "4mFEGtW5c8LT9psbieM3uvRmLfxnSKKdbrTdcpvhR1k1QCfjpMzN3Qb2MMG8Ub5nLkn4sbVtSToGekUZDMHziHJk",
  "key25": "2S7g5JGj7bivut9Sdzzqyu44Rj8e35cDMdq2dMs6u6d8S4g1tYLNsnaY29jZkqzfGshYRDo9KVMxkaZcHbqRK9Gf",
  "key26": "24F9WbFJm8TFqajSWVYg49VRXdfdarkKnN3oAknGterKvPmyFBrgzHmaVTMGExRa2WfLNJepKXVAZPw6apuFUN8B",
  "key27": "2Ws1HuG9gMef8wUVFjR4c1fCCaN8LFAujS1k6dPNbMydAnvAHCT1615yJn4wGSHjkhkfa2WKiTJu6XMBxmrGkfgE",
  "key28": "3P7bK4LGfDdbGp2LCM61bL5AymH4Sh5AZJ9NwntcA5SLzdHEBd4hq1D9aRKYyqXduyAkBbsV4zTePD1qWSc6CKiw",
  "key29": "3C22yaok7aakhR7SRwxKSknhVC6tChn9BLNmwi2EcMjEDtM6pmayaHZt7ZPGZnYDmC1SJuudZ1oACiKbfqrYtGsy",
  "key30": "3wQCP7YHsjo8FCdE9vT6PBuE2WNiDX8fFbZ9TCwESsC6UaQtoyYV4t1B14SNEEqTW72HzWDeD9qST5mFeL2ocZfC",
  "key31": "3cjFgnJLse4tui66mFLZjvyqpMdyHwbEigBGhGcHFx5vxqNGxjXDdbHHNT7TR92rUKAXRVTtLUFntn9PeKFVFwae",
  "key32": "2fCaxNA3pEuoyfRjtKRhYx31s1muH3wQPQL1GRiYeD8rpipBz23Sit4gdbzVkVZWen2P6ctMb6EW1Dq7qWKfGT3o"
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
