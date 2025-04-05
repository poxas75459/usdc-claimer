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
    "fvrqy53GNgzjPmPUCeuEUUrTiYzWN7BeZoaNe5jXovpMF3iPCGhYcoCtvPnownrXfYZcV5RHFoTNVkuEG7oERzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YqpYNL6DSVx5wNLp17hqLD2DLXuS4A4xA8uudd756uwzcmWPYLBA3TQEE91fUjoLbk1tsmcsfV43Q2gmhgo4sds",
  "key1": "56npj8n4dVFW2QUk4kxngUi8Y8Ym8xirrPoKFnGFY1rJFcxEtK2kPQEUcjdq6R67X4TyfUFi2F6oJk1t4JvKKfT5",
  "key2": "4j8fndFbjDvG9Tvb65kEV9ZHbDhFTH8nHav9eEF8KEujch8Jd98eL7tXTfBrtFYtiFRbL5EaUyTU9T5ba7qvdC82",
  "key3": "1NQwezvwhvCipoYB9bPJByVkBBJFAJC7i9g7LhLU1daPcP5nep3tqd3AoAbMwNj73TtVdG29c7mgfafunr1s7zh",
  "key4": "4amNV6acKgY6zfELQssND7ZqiJND8iEN5sjA3yfHcmwG32fdY3TWVH64fwdk2tqAaMyvibLAy9pW24Px5qTZe5DV",
  "key5": "NMT8KMkb9yBTkee2bix34U7peaUtRp2hVe1fx4xvpE8eF3eiTYco8SWTSA61EAUNobCZuYeN6KaLp2wPGBPj8AZ",
  "key6": "2Cgf83nf8mFmwTdKtB9gGJKWKR61H2ve9QgHBAsKtiXhKxgFqskX2FzyWmStKcfv4nEfT1SEAv9MaUaYtTcEeJGL",
  "key7": "KDeZuoiL7jKTkJ2y1cYzizHKQoKirbUvJL8ePdCvZjmDroHy4yJYGiTM5BDM1eqDtzH1ZwaDJ3r3m4UzmpJbmVQ",
  "key8": "3D2eXpKDVvoppTD7yWuQuyi5ZNQpNm4oC6oqvMgV5NRmscnHGfKMpXFjrWaiFWE4Y3mp2RvkeYUwofToNDsXCe8B",
  "key9": "61JM3JRqrXmVH7S2wB6upZrHM9ujnbVzUW6ECs22v6fjRznBmR91qsNT1PrqtasZGhFEhs6B9oBurRPtDSSmpo3i",
  "key10": "2biKNzNBAEVqbEwgF2dJ3tWgH6oMfVVixwVJ2dDEGn1wC7F5WWJpsERgjLfQVg5H27T75Uyfh2jogC6hyCCH6gzW",
  "key11": "4bMzs3sZrBaPvDHzN1eroKwh84sQLwNDbLpBqobGoVKdV1AGkCrKnq34QVT5Ts9FRgsPqzEeqSivbUeNrBwKu6y7",
  "key12": "2apC8L9beN4Ld26psJjCno4W3gGGh2JDA4cW4wqe2ZwqshCit2goGr8dMp2gDbnzUhvXJtsicryY4Ag3rzqAUwcw",
  "key13": "4y4WNeR9xvFsiA5ct6md3PBcRC1o4DQk8q9J9JiK8JoCoXimKFJXvE9dFE8iuNthCTx98qjcjA2PBvuuQc33rrAY",
  "key14": "2NuEUpH2BM68LmcnQGhURjTnytTRrwZxsxYzGM4qrNXMooDTkzpyqv6YGMpPxUd6uQKE56G6VYsdxWCFvNFjBznD",
  "key15": "5kZUk9R8D6en1M5c76fVdb2u16wRyv5ePbSihgw6cNdhJUinifgghwNkk3YWPydoBsmahYND6wE63JYxNgDxDiGr",
  "key16": "2d7h9Zo2pQatnxUUAbcPyRtdAWENUJKckxKngvvvqCRvBpTUCqcMxvVzLCVrjj5cigGRNDpwzH2XFrdFrqTsbCHm",
  "key17": "4P6s4yRHNa3C7FmzuAGukdDvEa3BDKieL9bsRWbY92Egz5MLcRZ6ehdkpXYiQtVwp5G8Wzvhe6gdGSY4XFw8rPWr",
  "key18": "3b3gYbA9fnDRwi5JkSz7btrvbyMQiWY7kDdFWPTgG9y7cEamk36uixm1313V5gGrbcaBQFpmRgK1mYrbyR9Yyehz",
  "key19": "2bwsnnviG8JDLuUJDRPRe5Vc2E3fTDPtRXFFZRQ6EAEq3Myk2hKhQe2TMPS1wK6y1uynsJGVGrkWvtBSZ9P6jaNE",
  "key20": "5KQPYHQ3oCvLwJgRB9JyS5YF9BXHTGkGrummZF52Sc4zre6Rd3oXjPYC8fnuLpesammx9keBarDBXGmyoQoDW9pk",
  "key21": "2kEJBqLvYnMQ7o8hwNZvopCohtKjMb84HbktKS5hDaqsZZ1FDShKedbVvC2VFW23pAVKwUqu9TdiVC3J7ZLDABEv",
  "key22": "5odV959hCV8atWG12FkXHGVP4ag9fiiao4sTQr7DudD6GFppox1pWziqRphEZBKhZwQGiPU8xNtHfP7QCgPj8CVV",
  "key23": "2o9pTMrwcEkWu4kah6QrZe3Z2dsPz3AAmVGA6kfMgaNHtCV84DEpgQJapCLo1gWGJjDtTiyWmtBaB5Je9RTEJFMi",
  "key24": "2zFrD9FoVRtswLq2MMg1EjD1mAgrYnc1hsLbzaUAgm57buSZ5D34msFAyMqWZECbR3LazabfBAHziWW1vT1vFteH",
  "key25": "4LtzwHjCnRjrtk1jfqEYaUZpKuHzoE8iLHzumZoBjy8BWq7s4pQX8sgkn1cuRMbZLfNxCKJcgt3Gu1nuuEVvNUF7"
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
