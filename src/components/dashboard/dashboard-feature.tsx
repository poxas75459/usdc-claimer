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
    "28Q22KtY6YvRpD6BSPVTNttoFWc4Y3mhRcT2YNqfTmzejY2GE3QVqZDZG3X8WGKiZg3pDNwHsjEbTmbSMGpjQiZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6yA3fvP1Jibs6Wp6JWiCjAgdwV17Yb8WsFzaDs9UU5X9xaK5MJBpHfCn1sy2Zno8k37skSCvKtkD2q1Q7k9Rwd5",
  "key1": "2BvasPiFxWDrucM1vdAzcUNxUFp9e5tw37fqEc49KhNe8ZHmm1qHzoyApWFRxGZMmzXpLa2Y3uqdMKQezzEswszZ",
  "key2": "2uZLESmfdVvHWe8Te4rhu6N1DeD5s61Hdw2tfoiENSBTB1gcQe2uqg2GNmzBgUrzHtWWWU6khCaZfg5EsQyYvvJs",
  "key3": "qoZ2tSMsxbxMcKs2VUiy34y33PowswmwHgeDLcGcZ8aDAFBic7NveEdqmxxChQPGEZhd3vezsaveT3qj3qmJAMN",
  "key4": "5Ei5efajTz16ieexGDuWYRr2YiggbxB5NPok2jksmetT5Lhxg8DRzNxmn5eqV2qhPAjcHNLdPsZUjb8HMS63WNPk",
  "key5": "2ft7CM9BzYXnx69Dz616ZM1voTjeLuoQ8kNBGYSTCunanq6C39wxJqWWjZc3gCrhmiJqQdKZPmH8EFSWfBepziAX",
  "key6": "23NRNTRNzXXSmdmNuD2wAEhYQnevxuzmMAEWnatgN6PVdF1vck3jTa28oTNdznY2zfU85JKiLV7XmTm79xxAhkrc",
  "key7": "4SJPW7TNNhfSt3AK3pV9zVJ7RQgQumUsxYnQQNCoTtC55NqoBqGCSMgChyewe4YRZY831muubiWpzxVjJ2rJ4xRZ",
  "key8": "nL11QUrzxunopgBwwEL4v1uBDP2JNLwgKT61zBeTTcpJFHDVvjVhUQZVJob9jjpGuzy544n7huXZ3xofFWrYkFR",
  "key9": "CGPiWFLQrVXXdDPrDYJk1kGjXMdgVV5ScrwBht2ohWroHBKz2M9g6EfpgLJRewxKtz9nsJXJ3oVxLEVjkNeoykW",
  "key10": "3R8copKdmWNcdPSkcuDU1bbTvZrpE3RFaqfB1erUJX9JsFs7KTGt3ph3EGHQxn1LWaRMcEhTUTgZGtCMghHqAHnd",
  "key11": "44cyGkpYyTBgAoTJSoQrC2FovyucmZQ3RUrbRFE7pePeMr9hwqXFdeiPJ8w5uifwCUyc65q46MscsbHvSAW8k3Mf",
  "key12": "39LUPpvVRUr967AX8iLpbe8ZbSKbp7kmHpirhNMnE6Djri1Y8EtgatFS4h335VkJweyUEWMYNMKcKZy3jnfRp1Fd",
  "key13": "3Hdv4JNuvRQZUaRWdkVM5WyJH83fQeKL9DCR74DWfGmLmiq5VrUvemWJbFWET6Sdfz4DxZMDYuDGXvHt998kdZfY",
  "key14": "49MfSrraa9b1af1vpi24URs7v9186oJQuL22wfv7ESWcftpC5ASCutjss59VPtwXyxrzwnhu2eZHGDLujmc9Ctbw",
  "key15": "23Rqi46Yf2emBpoAy5oDiWXq1ud8DUdsmE4qhsV88Vgmn7nR6zd4zC3RzkkffeDXVhYogEbAABqcDYjD6iJwjvAg",
  "key16": "dpk4nRLd245tvoorrrC5ome51BQMJBTSEeSbQELXJruHrUqTpkKXvsSFYje8Pus1uooMAzWo857K4ZN1cBbSbcY",
  "key17": "GwELbvamqFuu74YRYrdcLGZLyM6EhuQBoxzdPrA9Gi1YoJNwzonc2GtDerWm336uu9sqF73UyDpZiSUbv8aapYj",
  "key18": "4weYqWnTK81b5nN3tciJ9Dvqk7RwTxmZosctZAUXMmN9M97nosABGgpH5qrt1q8yPzknJbxrGcn5J8y7HLjaYCer",
  "key19": "3TspFhujUoTS8HrDkfPxJxSZZasrVzj6E1gp6YhB6DaA9axuY4rdcscihVfWZEt9pHEiHSRNEyDe9q2sz3JCoLH",
  "key20": "r8dqNuppc452SAHmwNG3brWA6ZcE6wX94mbS6qTPsF9pqxExTKmoo9MKo9JXQJxUp5yWkwLK3ij6xLWQuLQN4Wk",
  "key21": "YDeqMLK4AQyyJHn9AdtnwA2Nw2dzvdbfJkfaQJLppGY9S3ZMGGN25Vc5cmpA7RWrbShi1R3VfoYziddKcLJriVZ",
  "key22": "yH1jkj2QWpy81VeRg6k7piWjJQ9ByrBFQMBoJTo1pU6biXff1m3sjuH3YnLXTUKqk4kFrTXeRGVxuumyTAwRF9s",
  "key23": "45hoH6dLfxPW47zm7xWLGCPLNQfSVf9XTEQ4AdjVY4GA9fcw7ve7U7C8YRksaT6kqEWY6VKWdVXj8dsMmEQXtw9B",
  "key24": "55CE9gPSagGTjpwC2d1avdkZdzRc3SCv8SfsU6mkN8jhwofoWonS9b52pBeWF5NYb4cZAJFr6PdQPZqYEsDv9oQ9",
  "key25": "4rMbDbrmPZx94uRFXZHkYUckgAMdupozGw9tQW6D1kPUKQkfMxJvkajtrAhhvR1WibHMwyvgjjqbB6xNXYu9GsPj",
  "key26": "5NjiAbriDjzDbMppq8hgoVLKJLd1MGvryML8qAs82ZNxxri5qVbjNPpZQkWpgkwKBAo5CABDZRNmYMurxGGrqBmd",
  "key27": "3eQQfkrWfbN1dNnbA4dufqzjGkJt16S6wi5JhHV9t2H8f854giqQWJ67shFVgBwnDv1FfNyQ6yxqtTmXughcH2Xz",
  "key28": "35CWFuR6FbvQMGw78XbGVBzTo7XujPjNWQiBWrzVHu3E6c9hwWtmjCH1pM26K1oqBqmP11Gs7nTFo7RETZSvYNe",
  "key29": "MiD6snYL1Unp3j8N7P23V6vQdvDyoDRXLWC2JUuvEx9wR5PAXWbLUW9Wmi1TGNRMc7K7JZGj1XoabPZigPNR9xm"
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
