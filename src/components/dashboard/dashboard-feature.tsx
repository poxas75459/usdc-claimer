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
    "UoQNyGBgWW8EHJFiiAcq3ov9dAKkV9XRVJTBocNG97sLM1QDJoLrB9p9qkkPgeYcEdY3HfqgMbdeYYwh1eCcSet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u7PLE6um5eho76HSF6ywTnb1TFNFN28sn9Kw4GpRGRps49Nvy51JPtb8YERHKv5wZSpy1yQ87MJkgpTeWhbj95G",
  "key1": "xG9VecJZRWctgaLBFu2ZL7RWzUHgkMYNyuXnwtjA6WvkWpSw3HYZg65XoKKedQ13xWReL9iGmXhZuW3hzNcoMFn",
  "key2": "4TDHZtrVfKc1dj7DE9pvFPyheaQuTiNuSoMzqaCmh4XdEBat2m7MjHC9xHh2v1xjCfcDNBU34gQhKYG57WeZbPht",
  "key3": "4DchDdQLLUcnayKTCsq7z8ua6UhD8nSMRLGusVghxRmzkk6Ze1BMNQfWE59F1Zppgbv4mQ1npoDYy5wWgjuyWgf",
  "key4": "3YewyMYpMK4Vkr3rExkagi1Mmv8YVdNyiDBSVT63drUUV7JTreygV7xGgxDvvLyYtqjLD7MkuF7TksMq9Nt5HpKe",
  "key5": "3yUjZyXQTcEEvjRQs2w3rdGANEdZmiyJzKvAoLsZ6vGVEiS7f2g8L8PQkmVDbnaVbgx5trgmbE36zwm2HpWoQfJr",
  "key6": "2Rp4BEmdH3E5Xd4tDUrnzsqud7kvYi8YtBMytaGPhT836ddYiSiZadZRkJLB4gZGVP5yYgSs3f92UV55LSveB61d",
  "key7": "VHCyq1exHrdtyFj5CviuU7d6DgZ3ejdkhDH6cU12f2qz865gTA7i2WApykKv8HTCMmjL1y67MDmM7AqXZC3JboL",
  "key8": "48ZyDv8SU6gcXRqvWbogemkhD7DaDKUL2nL8KxMQd5jeivdam2CY17mK786u9oGPBjThrTfEsXPDpDNAYShWs6Xw",
  "key9": "4yBkoPJMDATbZ1pxwYdzQovrq6bydUUJtGwXUMUKGTTy8xeCPprxJRmhVvVwNyn78zpJvcZEMhLiyCEmj9aKk2WM",
  "key10": "wmZKYi5f7hNsRNzgpCbrmjjqiNc8RpLSHpWheciLHazc1mQcNr9gMZkN9wiYuJjpmgok3D5v54rirsF9fBME7wT",
  "key11": "4Ei6zgHKTiJvbSNTE16EeKiaj6oL5Ejv9sjQiArYEhcWwBRordSawB4RJixSBQ1rgS5HMvMqKyb9HKra7SiGkU3H",
  "key12": "2rqjrXWJ1zYSA6p6VNQpoEtZimf9qFa6fyKtKWxm3moYEZbZdyW6oq2zvkgJHUyb8hztChrHrZUc24NnGaUz74Ys",
  "key13": "2j7nq9vAwRF6rZ6ffa1kp66DCGK6V1M5hAtBXjDKt2GGv77bZ9eDATCcw9azHZdFBQwNDAbxC6vS4eAtz6SvhhWq",
  "key14": "3vhw4Qx4jugtARDtYZJRdUJrhnkPe61peoLKxpTQ26N1ynnKGVF9x1PMbvCbLz2iadajagVqd36AHQrwhNsss5gd",
  "key15": "rH6X52cAUVwtV4eoCUJMPNeh9xS4qusgEDaC3uPFGQVhzxYd1b34pdewadtGDw5VZbmZJmEYt73M5k6TbDsAzKm",
  "key16": "569Cfb17m5cqFgTDgsJQT78jQYu6533az2ZZDN99ZjmGUqgdzTFXesd2DwV9qHNqSrKfjn4gjEF3aWi7mLtLaSn7",
  "key17": "3cntHLWdUu77wRrsRK1ytT8caDCQUgDfif1U122NWEhAb9zVEN81Sn1RP7cXEWSZdQPkEpmxSqYRnmee5iYXbTHz",
  "key18": "4pkiDAYfXFdrcsgFHNBXTXfLdkFm8CX98zb44xLj28Z5MfvTVrU7rjo3qcZ5ZyDMDCDbmYjJYBvGFkjB55ZX1phA",
  "key19": "35VioHtgp4Dq996FCQBqSY6Gvu28uMS2mbv1LvSNbuHjsxguEVEbXTqtVAsV25cK16gRu4dE83kuMkLLHAdQ9Dkw",
  "key20": "3Rf5NBgbkY5Zax4bcNG7KpaNScr7x2Qh8q2KdQdU7v7pBBFRE1M674RNBY8jGmTDvznP61EyZAJwLB9bNZ59sxMn",
  "key21": "2jd2FHNreX4P5695HTJbfN6fTSdcCzoBRn8nmtH8VftgVunQuKBgYaS5mXd7DRZNZ1vw5KJnMqeNGrse8hF6hwpM",
  "key22": "FteiYVbTx4rq72MdkLSe5gkZLRdAcJKzDN2V19G34WUajaPCZKv4VLavQqisWf2DKafMcCH84Yf9eptS8bP3Rao",
  "key23": "25NDovDdBVTYYGoVzttfjq6vTqh5QW4UkLFntD5am51GMtc9DZhmYfoAa1g7vMgqUsUJXbq5ab3Vd7zqktMYXAqW",
  "key24": "5i95yJYmSoR8T92AHKAmoaVWxNWpLZtuNXN14MpPbdr42yrYJD3XA2nZE6zGv9NXfTKZfYtHAdgSvPKMUjtuUH1E",
  "key25": "4Rb7vXN7nf6dWr8TziFhCXG6JJSEc78awvrSbcwR8cYWPioU4PmSrovhUcMsgQaw4bJBtLfdLcjT9z78v5XZFt3J",
  "key26": "quwD8tsLiGpg68Gu9XQCapaWokwLXaP8XBP6b8JAG9j8iHyP1ssr26711sucgWnRGaQsudAyw6cD7AYGWdYp3Ve",
  "key27": "534aukAUkyHbJVzg1sxesnX33AdnpQmwKjBDnqgdFuPeNV4A2AFCPj7rMgbDQpw3WrAzJkyGfxDNXBJWaD13dDDM"
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
