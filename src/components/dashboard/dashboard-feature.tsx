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
    "61GWtt4TAtjHJgc41MoWowVtw5rxhqXjiRZuvGzn8rHnHPouQkQSzgbkKUQotwcFwTMJCK6m9hQHEUN6AnkWYGf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28AxQyQQ5obo1kADFnQYBS8G9pnZxoTW67d25QcFZgkbKy3w8saitfex2LRJnuSat7743o9QwTf5xXhjja4fm6kS",
  "key1": "5HrTtbhzg21sEB9r6iDJ3KZtpXPcnUviPjkjma8Y7hFnSABQioxJLSvZY2Y1XdRJAwNyjhxLDe2PzTaRdf9hhWtK",
  "key2": "5zFF1YrwsNFc4rTkRx7T18sqB5Yip9EgjAySx7ToorAszvgtamaE13qhuFAE3aXVtxnnSm1KbGRkSFsd3nsCYAEk",
  "key3": "5MuJALe3SH5mP5gHmCb2PyGXrBujhLowWzd3Kr3nsXph8QozpvFmq4vsAQJy8mCpRc1XAWeg969q1gXmJsg6uiaw",
  "key4": "3wUKPzJnUcoEzq4jRhmQmwqwTC6M1QTVXp1aopCUbi22VyK7L4TsekcVx6pxxPxih9vRQ3oEANkVeCyZQEWL7Pqg",
  "key5": "5V1xoMsDSK7cMpRyxFbX3hnKS7oJJS1P89w729u2ZFYS2wiS7WFoBsM8wqRrMdw1CwjVTYXBn3ET3PDoKYoYdBb1",
  "key6": "sPU4pVrZ8wewtyL2XVFhCfynfUKCeGHwPoNsbgeG64affdf2TwPmLwHe3gsHpKYYwnAoKQeGGd7o2TUwqmSU3mc",
  "key7": "49G5VUbagsxjQKSuiAvi15DFxQ115As1qiZEapH5SKeiiqFex2cxeNgUNqXD59FpePuvvJwHyiviRMZKM9cHJCfA",
  "key8": "4t446Bpjy1VNhkaUbzuTCECbmkRFTTPyAV8SuchL49vcwww6bcfdevyV5MSXdCwM8ChFh38NAMK3Ra4a9rNGLX6y",
  "key9": "bFjSt4eG23AVV8m2BvmSct2SkoLmbXTkzg7MvvBwNThMahKkbvJs67HNDS22HHZEy7JjifDNH9RtTLV6hC8JKFQ",
  "key10": "41q3mRvWByYUzCxiwGJgmvHrWaAhU4kQFTenspV8LQcSLKd5tLpYwpDaPx8mo5p19Zhzm8uGNw4nCoTNiy1RSG2q",
  "key11": "2TfyYU121Aa9J45jpvCdUEt4U8Fhi6g7ysPbtcQAkKfgqhBmiE2c7ZZ9zGN3hLCZEzWTSNjrDAayiC6p5aGupqre",
  "key12": "3bk8nZxE5f7TRTVFFAxcgyoA67mE1kHAbkmbAt5Cx17eXY4rKELeRhxfgCCbE43D12DhPX8tP2gphBnxu8xyX5AJ",
  "key13": "3CUKZ8uyKZeX7FZep5D9B6sdC8titGEKpyj1vPX1L18257yj8aYWoJK9wR6h5hGfRjEEenmzowZHdnnczDt4qpVP",
  "key14": "UAfrqKP1X6zQopPj2Hd1d5hCrqewHiibj2YqjUzHwFPdHKsE86svvU6LSgHXbpFRFLtDZUWbC3a4ABrfAv56UX2",
  "key15": "39XDPuVyo6M2ANLPeXUw8mpRuZMfew8sX9iSGYAebnAqnEgDKfviUjKCX8HtkRLSZ8g3CCBVVFfHUW5dwH2wdcFn",
  "key16": "4ct5h1CuUnMVZFi5Tuatr2BnJehSFGAXGSx8nSqrvtmEutUDieNocQ4z1UnMm9YsMP8ZMz4xnRMVp2WRUZSqzGr2",
  "key17": "3Xbrrre8cquvbB4tRptrdrJPp7nBwPpH4wBgen96rCpSMmhBEtwnJ3T1sn5HXAWb3HAvXeqSqRsrcx4Lr9oBokUS",
  "key18": "5Ydg3JS8j92BayLrnEjptipeZkipNjspN2KHt74uEaGYbZgwchFNX563TESkNaHV6cVpL1bWxT43YBudTxriLHVR",
  "key19": "4hSH8WigvHQnKSJ5xv5BXB3XkgZYG6JHpzHbmLTeRDrGMTnUoahnFs5y1Qdtcin5AauNZWXCA71ykuUpDUE16QXn",
  "key20": "2fE8qMhcc4LLb8DahDkySkSSTFsTnxS8XVSBoTfr6pH32fD3HPFh1Tre6PUGi8pmMNAvXy6iNxYwAAKHKVcJsSbg",
  "key21": "2NBf9f6Rqj7yiyLR6K9irA5hm89F17bf35vdiWsT7KVoMUnGc8j2X8J3RCcy4AB7LJJ6py92Q2hs8AcxxjQsNa8m",
  "key22": "4ZUFWpktqAZPwnEvdtSQL5BREimQuXWe9xRm8rrSpJikUu827cG917pyfFdA27KkdKsMRFkcU9dsr8JUiLSvRRSc",
  "key23": "2obVvtPjWA61164vyxHtrwws7MLo5r7UyrqTCCpHjwSyJFfDJWUMuuq57Ya7aQSTPkqsbwYGoqp4yUfaModGe1Ms",
  "key24": "3J8UDkYcFJTzf3bjzSUzN5Ure3qTZHFksUzqCYCycxnAqs5vC457cczuPUamv7fpyNKj7Tuh4X2zUPki9v61oQGh",
  "key25": "4FLNemqp2QkMD9tNv3yA1sJY5C39xceuMiMpmBYUdSYPuQJvWN8iRQ8D4TAjLuuobQ2MBsSbVmkTMG1MvKL2pEBT"
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
