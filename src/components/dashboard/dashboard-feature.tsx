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
    "2B3kEEMkU2d22rNyBo6Nd51qXPoxcHo1hFxrjFqwTBajWerzq2f2T4AFYwm35ysqevUqSe8U1mgh3Eo3RVCAgq9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tZNdaeToEhwSaoVMeypj6SbDkxL8E983gw9kfJ5NzAXPPSGH2x7teS5RNF5Fz2Jg1dGQL3NK8ARZx7MccPtssQF",
  "key1": "2eRxosMaJGQjE8EWPnDKWXXp35K1KdUa4J2vaNr8SJ3fmpwYDrgdaz8pYM3vt5j1dvvRP2afqDzsLDmMzPdPJvNy",
  "key2": "2bf7jeAYKDPBbW4ExfbtjUoz5R1mLvRAp62Taqhx6rz4ptzmtfrmjmHxzByxF3pm5Zvfffdyn1NSu9yKJAYqEwSZ",
  "key3": "4ELQZtAVztFGz9MYf7BYCtcBwzdKPuhfP7MjJCzQcYtQwidRXuoS4Z7KWyfoGcoWUTauxXd8cA6VTpxgpDyLUgQG",
  "key4": "34DyRrsuHMQ84Kgu45oD6crGdB6XYG5cJhT1mxp1EmkFgikipX56ZcMeFpFz3QBhNxkNsvwHZ5twCBwBYLWhb3GJ",
  "key5": "36UgoFiTkxJaXzRfueVVxVAA5U32ZGvsEzwrM1zRWQBckjdbNXXtTm4RWgXXP7kePJkq2L66cjvy6cR2xMgEPJfJ",
  "key6": "5FAe4fJvMn372gn2ngRoNV3kdcpoTZeo9D6ab2Poup4RCHVJgr1EtXeFN4pF19osXHhpJy7itazccquSe2S5ki7e",
  "key7": "5hG2Y3BgTSrvASvPTiLKYxdh8vweearbZXMMtJww5HnaUevDgvSxsyXTJax76yMcVrKLdReU3gJF1J9LWQaecqEA",
  "key8": "VbpyRPSPdjmY3J71q1hx1n8QP39v9hHQyzKbv7ZpwoysML34CB68RUEyC5kwPMtF5dsdwUtcAmmfiCGwjrGCmJN",
  "key9": "nXAwsxF1rnti9dEtgE6mRF4mELqm3WiBoazn786Gt9vv8KYW3AsK953WsaPVH2NuXE34azsCVZwuwoJ2MPPFKtC",
  "key10": "25LFSN3VfzfkSYfi7EbQhsyER4bLa8136Lb7PBASfXk6tg2roAD4ref1JHRjH82HxvrqNH1sA9zEyPRQQqXMBLqi",
  "key11": "4bCspxdmXJk58wdr9YWv6M3AnhauMrPQtnHZDwGQ4kCTYUeR3mKPQgTen5JxD6Mu7qEQAdMSwBA1YqFodUu6GWZ2",
  "key12": "3ah6jC7k4T5RNQbaZWXWHscqvMU9Btoe9TxB8jiDYKXnjfpGvUiVxtVJvkfquTAZE2UnTsi6dShiPd2eXZomqUh3",
  "key13": "2ggRsNWGnDFUrW1F4i6LvtajmTNWiZB65zeX8oGxTH438t1QS7F8d7zjzDA81bj2hXLYumJVB7ChakmE7Byh6xXy",
  "key14": "4GKS7dLX8Ls2MSMAso4MCTAsq2EsW5hUkUK71VugMmf8ztXDxAmCW7Bkk4F1zujWqusiAxSDqLKSiSuY553JK7qb",
  "key15": "3woqepvvtnquGGkwNVE9HGfcqMD4wwZLdcX6fSciyDVdJj9zPRFD6EJW2dJzg5oLypxM1pGT51baAL5zrcCL4fZP",
  "key16": "5tosBsQrLBof9YHarqrxPqNax1uTwXYGkDHsft2qbzN16AySXLt5ejpXxSkbJyndXMTzWYuJ1SfCkkGBSCKeDGE2",
  "key17": "3sfvLtFCNdN1ByRDpiVVknzKuk9EMS3bUXSqhqYmeFsSCC2tGyy5CtSneJut27zw9JGHYvHk7vcVZd7gFBB1QpuP",
  "key18": "95xCHqpGmYm622cGXDKJ3FDyo5azaUFbSEAVukprqKB1UgVciF8iTjjwuNsUH2ndbkNicXwuXxDv4fbwGcNVQw1",
  "key19": "3gEboJmGoQDkfxmJBrLqULBRNonTPvYYtRcMzMunfRkMeWtgaDpZGkwgW42rFRpj4L5Pb1FWUDPAv7U38VMGxnKT",
  "key20": "3fqXepQPVPLCrSCj6VrnxNM73ZybJY9cbWJtm2Hsr8Kq4TQFDAQ5n7ENtMH561xcSaEU1Do1mYzkCvDYb53itSVo",
  "key21": "3PgXA3B9HURz24RBB6u1kAJc2766gsM4JLGKwoENy9pQASy3mU7LZrXWUa3VMwnVxTZWB6HgNJE44KqYz6GbDCJP",
  "key22": "4zjxN9p6WdFFRcj7NVRfAUrz89hfTTBBiBZsfNUACzG5Ri6xgkAMhGUYDjHw5GzjZsSKNxzvP62Hs1StHBkZwvYz",
  "key23": "3KWA613xgx352DnyBbVNPSh14k9soga6hkukXxew4EGM2P6mHfcLdQxLBLJFVFFdK6Rq476KU6jJ9pmZGeUSstEN",
  "key24": "5PDVg9CzAnGK7KqEhypB3HHtU9odedubmeSAzL7QPzbUAQGgvoTWU2LjTK6b62ShYumHz2vWwbQ2zXgZDp9ZooWc",
  "key25": "3ngDU7p1Eu6LsgERB4bTuRGcq5QZWhEFKTtmdfeF2knMhnGJwzZtDSCBjvsgaAXL6cXhWKs4g11WHZQ1Z2ntHhPZ",
  "key26": "3YFELCZLKR1FyLjnKxJL47ijZzspG15C1bZYGRHwJzYLhoeH6ma9j6ZPyVu8pTKbrq33SQR5cMrxNLS4Y7uRgxq5"
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
