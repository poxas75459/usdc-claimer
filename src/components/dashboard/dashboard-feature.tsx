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
    "411CFMBqurxsxEZFvP1mcLh5vEC9UeXMFyzhJ99NLiPD3iMHSdqTUSogjH39C2WuqhR8rs5UrzXHnEE4N5KNaT6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ReAvUkShTxERqMv9uFM8oT6bpfgbDBqPToA4r4aAZ1xdnRkbBcC7rQiWZBmj3PebEgR2G357W8NJQUJtVXUGQJT",
  "key1": "2pYE9vL5do96vrZiUHvB7zy2yrMoqeLiG5vEEzLVrLDyFPoSZu244186ULGxZuMjhHFKbVaWsc8wxgC5BfRJBF5N",
  "key2": "4BEBe5orh2ratgx7WHsVvyAAZi4NbzSj5sSib9Q8j47y8kq5q2hNUYF2AkBTFxupnhXpcJ9zdtTcEqog695kWhkU",
  "key3": "4bcdXEAaNSwETP5eg5826VDZezA9WPZg7XPf5ThTgsC9VXPFC9eB2BAP9jZ1QUwCgP8A6NahpmjWitEXJTpDcpdM",
  "key4": "2TtuHHhoV7Vu5xW4zyQWhQWLvvdBqqTHsqMkeZi1xwuugeoC6Yx6Y5M9GSXkR6NtWEif3HHupCTRH8DhxnnzhtT3",
  "key5": "mtDyUb9qwUJR9Q5rWZUMTDUAzqDqruGULtBLVLy1YPCUbczfvP9Qcpg19JGxYe4zWSm3YY4gfVLUST1SP6te2kw",
  "key6": "DAHf3i5beBDY1QQkq12NHRq8maMM27dvSFz7ixEBRw8MBEtPToum7czEN11pKbLceQcw859cq2w99gCww4rwYxz",
  "key7": "4aKTa2qKCvjTLfGmY87SprZkMabq636cMDrGh1SaGmYmzSDzHTMWBHbvhBQ4NCirncbYwzmxATjqK3ALB7YKzcUJ",
  "key8": "EeuiSRMgxAcYCuPxN96i4aAFzZ94EWgNzonABSFGeqDBG46m5BKvZdAXBAJXQanHsqcHaUmw7ZuLp4dAyRkAzyp",
  "key9": "5WzKZA37fJ3kM5PGnpKsSNCcAXQZXUVgtvq7RrkrtgdXqjSPuUXB9vqma6nqRtnWm6NVHN7MSGfsQpyozNKt7bw4",
  "key10": "41mV49kQJehHzk8jPCobYoZYNRHUtSqEEuxedjn3KZLcioZ6esekFeWRRpNgQGZbuDAcxFR6fD4hiCKK8RDPWs8V",
  "key11": "MqFCJb45r9t9ccJALK937DRDY73Rzrey6XJodVQ5JHJDSd54rNyNwzU5TXemio1p3ABMfh1EXQwygV3wDBqLEqe",
  "key12": "3gh9f72RtmWcDH4y6CSKQib1dCgDz1fxDzfCx8QCrswZxGLy23Xw3cHduqmbZ7PdSjd3jLj8bsep3S9KPF8sKLhK",
  "key13": "2dqUxyhWgkJ4FeEoD8VYG4UWapWctqtjQLYqLiAmUrspcW4dU7Awo6JQfvjmWc55F9Q1TfDbRC5aNcPtKX7Aq7n1",
  "key14": "62vr4rj5c1d34bNAq2jHMkSTg6D6den8uLtcKLALDp1VYL3dxpE9kawUg3rV4veBRK6NRQqFpzpmrzN8GRoYvx1L",
  "key15": "3bH1KJRqr79aMFWutxwBBEf8qP4vNi63gXFPEjromfoLtrUjh4qC3bM2sbYjhPockeNerCWmmEwomEus538oeRt3",
  "key16": "2WWFsR5qBuRTodfsbshBRLiZpKT7jABQvA5hXgFpaYQDwkBa9qeM69Pomf61U3rtAdB5msfB4j2xnrhuDxjK7C5e",
  "key17": "3qfX7YTepLGqEaeK7cvoUqCj3PanUYt3xzHHRM6RN5aoiL7u831Xdma4o6T8LMztGC8UebTHWCQd87Mm7MGfY2Zz",
  "key18": "o2fsUmN1k3jUasyCPFFdVEJB8NFyFPNK7cRAWvdasrqTfYMDwHc4EaS1N3XDgzYTatpT3kQuxAjy5yY9bJsHaWX",
  "key19": "3V1ApiX7W3oF4TiCbkN69HMjbWw6knNgei26k8ZZBJHVhC86pPryqz7kj3nxXq2Ps9VrQqWiMHtkv4cYTBRFYDJ8",
  "key20": "2wWwEqkdP5Y5GBAaHBarbVCwiJYtKDGrV9YDDpCHWomzGX5G562Fxwbo4kUBcgS8Yf6kgctfi2WDH1qV9saZGBk4",
  "key21": "56cfvLusnLSvHy4NQeeGKDN4Nzowq9yRrbHW6P4qrUTigD3nSWUPy6mKh7zRq7ZFfNW88k9L7mZgx1WwUz6HHbS7",
  "key22": "4wYEDAtezebLrXqK7Yxhwd7BeSfx3r4r5zM3tguc4NTVHMnLHnBRca57NiVkmeLyPkMZHCgxMRTzZ38RaqLd4NuH",
  "key23": "3YtwuvfYpVoWLkByYaJPpjk7XojqF1cADnEdsesVojQeSBAG3XFkWB7S9Jpj4Uk6ft1gdUt242urTAyAJm6tD4FG",
  "key24": "rE9cWj7GA2XYvZEwBuUgj36GznDyWd4r1BhYC5bf14ZBbXmfKNxhYu69NSiJtuPG9QEnWCfgKtnJysZDGiXTjPu",
  "key25": "31RiDPRqD5G2ACxZYMTkPeK79X9LVZde7x82MFhhE4X8Wx3vovDYGethwR1yZCCMnEg7RbnAJxauGPUsoD9RySea",
  "key26": "1Dx6pwwcxDFnwYs7c4vVbxMXFJzUAGYXyYtPFbpf6xrCav6U7TVZpeW7Z29LKMLmuXgAD4svZxh9qRBz93HMkN5",
  "key27": "2i6MmWUHo7eVMgz6Bkx4BViznvD8VULFGVxz9jj8ytFN1pqH9s7zUf5UiNG8WDGzgLywvUCCBjTQkdXwrkhM89nZ",
  "key28": "dveeYwaukfcadvsadwCTouqfMqHF5SQpEpoMH22qiMQa5CNgkeTY9SnKmiRjnGdiYQXkfMF6JgsKy6ZBEZmUN5U"
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
