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
    "3VcVSRsGGy7ee9oAKzd3ZSXz3a9QoAF2AuACn1WeabuaHGWESUVGHBTYF9ixd3aDB6ESbFKB248YsPn4RxUpUpkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "493CpYWetF6v5FjEWZf5kJwT2h4bpRj1W44rHhWAUCeemmBc6Mcj7DpeoLp46gPd24XazP8hnaiNEyyzcdACV1Sj",
  "key1": "cUTE1pHM3JQSLRtA7eo7sXGCp3LnjZKVrnUHHYUQcjwrYaZEzx4MVSVdB43PsjxNYPp4ReqrsF6PKUP6nQWdeQR",
  "key2": "VmG4F9Ya42QXoWpD5XLCiPkbhb2Kax1RhVGHXHTjBN3KuvjbR7kq7GNqoSo7D1dBBVorpP9ucbMqptSV7vTSKex",
  "key3": "TnrhHdgrz7hXjxqUN69c6qhXpx2NoK9oA8bXGUCiUdJqMWz2ihdu9FCHhZ1WQzPYtGJs8JzMZoHQ3sCgqA13EuQ",
  "key4": "2vcicC3cR4zDPFnbJ9Xt5bodtVi1M1LUoH9fLCUSEzgxrigbMzjQ4hfLFjT1WqvjBKRxwGxXP5s8kg3fCsfbwNDx",
  "key5": "2mJa1M32GnvUvPhQaHRy2DYn2gKjpvuUyQXV1dFzgnEsGNg6QfJPdDnjJ1rGHDT17p9ysQBrfa4Ns5ozDrqvEKfT",
  "key6": "5Lr34f3wnimT2U5Da5bdB9K7Sv27sK3xV7GLL4q41xrVYbNLmeMd1zHHf1Y1ExL11GACBqhSJ6jNq5WMDQnGkXfH",
  "key7": "3tzrjmHighV1eLD34krTJxETmcZfMFVd4Ni4VV7yZuydJYHwLpS3aR8fiThtD3m6b1hpYrrKo49U4998tGccn5wo",
  "key8": "3Vbh1x2DCwV5WxmRSkHJjj4SeKMFstKjYFoKN1qs6x7w8XNLuYfXAqBvMGptCSYXRgnfcwKTSiYXkfsXgU79hrsa",
  "key9": "3CRc2mvqNLXMBVXGLbE9iyruEAnqCdTKgEfVsmNgEEHmX1CmaLeY5G2xgS49bakXKwizKWf7wqZNhqN9zk9yMQ2a",
  "key10": "3GsF9enWBAuec1QCKjGM9aKsDdDz5xjt6RAY3Ep7cuj88BoDDHfz1Stk1qjDt89ZZPMTiiKKLev1P9gFBKQFGNMX",
  "key11": "5pVTM2668AwuUK8P3aZFoBHnSk6obgJpDuZcis8BJ8MPMsuHrUaPrMHFz2bxNKVDEJkkEmpSYdLfPiZ6K6QNSVEV",
  "key12": "4PDmvg14Mifritg1EyDLkUiF6qBzmxpRFwsJaaDLd7M9VYXGV5ATMgKFTgYMpPLKUvkwv3q3wNT4hQWrhowUnZiF",
  "key13": "5TH7Pa6uScnoMpAyjx8hNNrDtcEyJPg5drS9i9ebhYHAQaxHZDKA5UgAM6iWhvxoSb7QheBvs6LmzrnRsLeYpLs9",
  "key14": "4HJnQNByjUHaaaeAdm7ySDWkwqeZ5gF8NR1KSVBhVhwvf6CUBFKdY2utKJ3CTdAmVAvmVw5yBedjkpDtTtWSd9Vg",
  "key15": "4MDjSLTTvfEpWVaMGgVLHhDmY5EBYVzvVQ5cmaMCvu5LLSh3G4Wd5Y8tfCXBN6QDeMVX7iyACWWzQHkpxWrUYHJ6",
  "key16": "5DVPFGtZRvhgYJVUT3S8WyFV5bRP6PgibhoXw28DFZNqDQevc1BTKx9kS8LdtEQK4UZPEAap8hMU82F4EV8JcQmf",
  "key17": "2p4pxrMSrYHZzyuXQi6W6fUEQoU2MyUAhKEcd1cDkSwTgnSxZLuXd2DhtREhQPqjEMAxxHPa8Z15gHqBZSwko49Y",
  "key18": "2h56tWKQFxaPxr9RyHFNSc536wCFu5DcSi6zy3QEvZTTA5j4L1Ypgje8L3kWZtSs4HyMWT96LmbAd54JjwBgpgqd",
  "key19": "5tea6n3KShbsNnmwuxLKfMfVkQFXSkRR7ssdWkWzZhcgwUXXiTL1gSd4MoXjxHkmD49SpHzndAEfZkenAYs46iej",
  "key20": "5dR2ZFpKgrpLN6wKu1oFyAvqNR5EHv4zMj34GfLpWhQmdx4v9jNvi5YPtBEowQaHQ2FG3vH2Fq6TEuaiNYk3mZXx",
  "key21": "3jVE8Hy1KsWMqf6hy8bkDWHqVsmcT1KXp6SQRfPZNUAbDyF6vy9F99zh12TuyfbVwrAxgcArJC8stzz4Ebkyr8ez",
  "key22": "5TsoimN7hwtgpKiqgS83thz17WKgscPj77pDBPVr3V1hoburjxV371tm9Sbyh7RnJTBEBftXhVgvCrakxBo5iwz",
  "key23": "5ak3cqcrBASmpewfcHEuesBj4Xet77GshgNpK4odyGJ9qwUrTEsufcandesEoUXdpHjBujU7MvZpVrsU6yfJkDN1",
  "key24": "5kawgXTZ9Q7wEUFhvoGZEC4JSMjCPvfzKQi2gtf49XVP9oo3dJsZ6TsjRK1rQGYYd5TbTTzE2s1sszxTFn5BxTn4",
  "key25": "5asZbsqpgBzDbC87UgVvp6pd6mQvNjL2QD6Pr3CHgSMMnqPiFh2bBGx66jHvRikL6o515aAAymLg2uktGBjCiSMA"
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
