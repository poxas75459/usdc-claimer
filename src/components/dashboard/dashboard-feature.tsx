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
    "nNAKSWzzDuU3y18u4cP69j9iye8UYndTJUzh5uc95p1PxnS6bFUhf2ZdpjcA1qMi8YXk1CavhkKv8hqxfbnFvPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b5BJiutKexNrefJm5trxPwH46QRmJf5uFSg4yE2hzQnpxdga3FmqLDyGKFQTFtLpXZCXaxGLjbnYAtckAAVi1c1",
  "key1": "iwHisDm1W6RSsdMobtq79sTUCsq4iQaysndCisaGZ8UvrJR33pLX4XePrzr9gSU3DoipC1KVoDWqGAPGYaKujLs",
  "key2": "3v4Q8bU9EzNv8k1L7dU9xpEJSVCvESZ296C6BbzsiJCpgDPLB9Yrv5Qi9REpZJVK9jd9Sc17MKGQLoRsQW6xVAFR",
  "key3": "3PhLHZ8zwZMkHExfc8yqUN4387Yk65rfacufHcQLGpnKrKZEfw6yz4ux1BgMGrELNPBTaf58JPpAwpsnx345rF9X",
  "key4": "4yXyym1h2avZJWyXuc5Q4i96CbFYtBGEhPNa68L2KYcH9dEhporaX1VqHV37LmFgJvYaVw2c2E8VWZwJ4ZGjS4Xt",
  "key5": "44FKvdSsEgW1TXnzZRwG5UVvx4t6yAm7rJUqPayTTTG6uVUD45sFT4BNkjchj4itbvks5pz5QvcmFA5Wzk7kwfVt",
  "key6": "dhdj6UMcnF71naTargSnA6k4XipYn8RkpUyx6FZynC66vU785z5TRzYfhcPtH8PioQ4ppZ24XAEuKjshRNBcAUk",
  "key7": "3Gnuiud21MYB6mhgNp6DodL5FqnNuYzYDThooTYx7f6bevmkUBLW1S5U2Q8MSnb9wpxaPiG2snoVkioSfcoSF5ne",
  "key8": "5jsfEx8jrRdyUrakc8uD3ZKphzPBhCyGKM3EP2N8dUbhPxcBnym27Jcjpdc8PUghvC93aRbsY4V32PR9Mzv6rwyw",
  "key9": "51LHpJozWyvRXWmPob9HXsGL19EvG7NEjnj4cnKAYDVx5rTRTyzEeTueYs7iGZnXXbuM19oWiVHE8foQLgrj9jbd",
  "key10": "2NzWgTy9HMouSh1cC8RuMFTGbYYEz3puwWSBxZwo1Xaoxyba56bhwJiqbK655AQYswJp1E7ncswsuDskd7z28J9T",
  "key11": "2nrzPSspF8xbNrCiznkra4iMggCbqNNmt4MZdy91NwV6q7tW6mXgzdeG4Nm4mvk1jU5gt583agC8X5LT7hoDftCt",
  "key12": "3aurFvtCqF5myqSH81Vdpv9r73DZauhMJk8CcfBMwnndyJ76aNhDCJPJuKaSEMDPrH35KHUNwAfECeurdxnsgr6",
  "key13": "3o74a5Q1aX8coiNhuE6bPopfBjJkQBBGdR2weuKaBDKToD56jprx18rVM6MVZjJy571CvjCzSpFcF6KGBpeWh2Cy",
  "key14": "2PKGmKSwrD7szGL9nT7Q4BgbH9atDMxeuEhKAgUjE9GgjxxhZLMMNEiqwc8es2qZZQN8q6uZrjWUTveaLMCjz9Wk",
  "key15": "2wUt9EY42eELk8kLp2Fx98KghuNu2gwwSYysjnJmd26iaa1ryZFzjXCjQQHZ5h2mRDJHd1a64zEG8B7kbpDfGZsm",
  "key16": "rNgDv3GdKEeU1kesjoyrP4GyySriTv2KtMwBH1rq6DLtwxq4emkfPJnHtoUg1CKKZkgPQBci2undQg4EGJDu8KL",
  "key17": "2udYdCGaD33Sscv8ChbSYs9JYtkX6qmsaJ8XEcRe84Ffi8S45TUetTVAhsrFxECHpmSDtg8JCG8oFieCnFTjRvsC",
  "key18": "5V28doijuSYjdzEewDKd23npmyE8Ghs1PLSmh6uRkd7zjSAfA3XmYAsk9CkSafNdSf3J4sW3t98CuozYP3SdnpRM",
  "key19": "SGnHyhatFz3m4UxAbNiEWNjRkZn9WF4G6B5wucApVMwy5BvYkEjBxyzXAEA9pXL5y2JiKcMKGspuRm3YjnyWbKy",
  "key20": "43LXryeXbpr8EigRsPZm1ucBEuPWLutoQR9zcKaZPqKfRK4xDNu2ud6ddoU978QMVnnU9LWYrpKveTvzYFTC3aH2",
  "key21": "2Fafdbe6xnGSEDWBxB8BJeiqjoSv4yJAVpirZLGUpkwamtYoFWH95GDdw8TLY2NHhPciFJdZABCY5DrtaYY1j2KT",
  "key22": "3SdTgTTnuXV7Knv92R1D5nmAYEkQs3ggPQvxV5eCUDQQwy3eqocnfZ5dvdZE6d4WqzTchHfYak4kxDLpZHzf1Jca",
  "key23": "4ssRpdXPTCeFSCYGHhfYCwzuQmWkQtnL9oZdcj6pu4D4BY8Xh5NstNxofaQcYpmoPgr62es4K7TvGJAZLoHYZFpX",
  "key24": "VeXrpCU1omeGCh9qb2ttpzEajpp4KEnWd5djZN6cri389ZSpnjKjc5ok76dc3Aqoxd4C6deZG1QHuYNb8kpViGc",
  "key25": "4QKRYdkY1Mq16ZGzqBbta7T9z3unmDKX4ZYM6n35hTkkaJZV2J49zUsZD6oJ8GQyxSSLwAdvLyDripnH4yp7MASj",
  "key26": "4uyqfd5fTt5xN7QugRiwzPwrcVSRjifEwnkRmdzctYRCDbarxpWA15VomdtnXGEBMTbgY5adjc6QH2o97MLM9Vht",
  "key27": "4YXSJMELhzProvPKCZs4h34cxKn3qEwJteoADFgD26wi6To49buxep2KF1uFdMvD2hVbKhPcr5hNyn1icY5f9zwX",
  "key28": "38W73HWt7dDAGU6JJ25QqBgtnvpjSVd51RCXqw5dNwHqqoLX6znkHNCKogFCop9REVQi1wf3U7J5hx8FZUucjbTQ"
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
