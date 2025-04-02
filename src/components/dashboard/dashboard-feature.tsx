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
    "4Y71JWkujD98C2EQpWXuKXsUK3jha4f8NxEyam1Ps4nnx8185TEaoF6T8jKz2nPo6nCqXcAtTrJ9ZDPWZNTYTmN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x6BQPRNquQJPhXoJQtv7mR7HaZEHmy3cxC9GhLZxKXa8VaBrKphwxqmczvqfmfK4fYuDrmWeEKFKRD7HYuvXdx8",
  "key1": "4Mja9wJuSHx5wVLv8hWWhjmXWyZ2kU8nyu9FGF1NSUGhMggKEVJmTNez3AMC6odXSMcJfVUogzfYpCytfXfzGC7E",
  "key2": "4mBrxGQqneB9fkU3wxzRy1APc7U9oLqrphU4UP5dvJwUfdUtkzkcdsfxp7y6mL1CYH6Zx5R8KDweAVLsxU4jMpXm",
  "key3": "5t4ehX8rWRzwerdnWf9naLmn3B7jRHDKSwGP6WHsDtQ2rVBR7N3syfgTMGzDmu1DuXiuWWDkWBBwFf8smXBv3Fdn",
  "key4": "2gS8nJMhQ8ZNJTf7a24dztDKSsMkuHneDnDAwxphqS7rr1thknAeFoQS9f7GyuKBrgYgT8WRCoV6Yh7hUnjmAGPw",
  "key5": "4xtcDbgZrCWNTw2MCsptZiGLNY11jWgWNoMPNDzasf9pkVYygdXQCAdpYg8aRCeDPvyAjGCbbDXqvkKoi5CiECYD",
  "key6": "3PkCx3Ce7qB41GzoNCEzvsLZho7ar8LRB8fHkfDeHJx6sbdVAWKM86LiTPvCkGYpQajkseda5hVZsVaXZfJ2KUZn",
  "key7": "45s2hu27zR9DXGmCuv67fFsYL3NEtTDf5hrqWwPTB4Xbdmshzzv2Pr6ydBX5pLYeAycBoXNQbow6SbNJkTCEJCBD",
  "key8": "4j3TqcSrwA4SiQh4Ghm1YViph2PYo7gNqJr2mVMRUYqBjWJQu6rNBv17yFxUCqqf978xgKcLzYeEtvoL9bttgd9Q",
  "key9": "4WscgHrLY61JFRRhzL27KhBfbpPzGQ7R3ZMSrMoSpMztmPwCYXZQDK3hjhnzDfPiqKUgBy8cV3YSYb4pfXyjNf13",
  "key10": "ZPNEJraXAqmMUaGxeP8vStQuPxwY4NRpY8qP2LXwbWfsjyABDnLpRdpZ27dXGsVkj7yUESQVMLD9bxRmZPgwpXt",
  "key11": "2FPETg6PoNEqAnyqNuNkPP2oFVoDm8hZmoTZeMmw447y3MQJovebqAavZ4rfff8Mc3zoxS3V9Sd1gdJNzAghYEXT",
  "key12": "4ZyvFcVza6Wkp42f5ac1mCYv1iMZL5wyLEC72BF3k5tcviaW8W5F7ekZNx463kVJ4nMDC8PsH5R1HPk4L9YeJzwf",
  "key13": "3daeQkaEzqLXbq9S8ik8wQvjiF4R7CqQqqg85F1SzoGsQVXcTkMVABa5HkddxNpQ9om16GA3mcbuEN9kBPdBWvUt",
  "key14": "3xt9tZZ3Qyf9qZCinRdk1DeTMJGy2mcTm36w7rw2EUegqk6HLQT5ENTD9ePxu6eHLBy9qdAQ5ZY6LJsXGG7JyAwR",
  "key15": "cFo2fULoEchLrFknNbwwd9mgtc9R6S9pwa3S8VzJNaGhmtKqYLj2dQmQadHwKuizA3bCknn28hPaRC6VWz6hM4z",
  "key16": "TUK5WcAAwj8sTpHW8mK6cuyW3qQj7xv6nEkUaygAWjnDihvsyijpKjEZS6hoyPrTeXwyXc3kzAdQAQGEdzZmXt8",
  "key17": "2uFjaGXZQeHpcSptQLFHPcoAETR2ndeGkWNMzbmtqxWGM1AmGa4B7jdSMFs1qTUgzB3PGyVqYP4bPZvvKhvQoSG4",
  "key18": "5wkBAroZwpa9WTUwDZWLSTM76zsCc4bYjG7wXbbqAdJyntkn6C2RfBdFsvXYYf2ngCx87xoTo7yoYic2chGU7zSJ",
  "key19": "3mbqdiFPkT2NPHCfHHMJ4GY9gGBj5A6ZjezNBAvpJDtRWPV8UCXjZGWuKEATtQ1VHZqHB8Em6TNrk5bM7WEGkB5s",
  "key20": "9vqZDjEPuFMNEDwZgRzWZqj6ySYJTt5qvQJXHogystK8umrkfjVwTdFzqJ28zPGrbdk72UyTb64AsAt8p27xoaM",
  "key21": "5PPYUUxTt7QVpZmgzw39T333Yx2S8ZESfV4akoCcqYCBPYCJofKrwjVLbfCqPjqF9y8LCUXbVaYSaRuSJ9SuGGmg",
  "key22": "2ZWY4zYTLpWW3MesCqKMRYDDzB13Eujb2RkexqynXpJeBwqwEiTuKwVQi4A8tgfqB6o52LjUnAvnK1CLeB9d5spU",
  "key23": "AcVP1iY4sEKk3EL8LTecdw5cuuHMej8eQCCt6K1x3jiYUXFWZSJBbDYTR2Vx7nfT7d5RCqkymYoQFse1RGxgkuq",
  "key24": "22GDS2x9SEoZuzACuVRMcd3Cfrni7J8RdDKTXb7gRoJhnB98V1NJpr93Ghe1tNhc7vhVb8XmHE2U6D2WQPQ7mEyh",
  "key25": "5d685Nkkwtgr981hEWNrB5dYvV3Uw6J9bEJb6cQ86FHCKM7RwunQ1xxnwnYiDDU8gYezrG1b1fccqXZfp8HHnRQB",
  "key26": "4mi1GupRouRgkuxN1BCM96apRpBmG9DWVgWXDxaT6QYUKWdpSgXb2auz3Bjp9Pykbg4mQcE5cijV3WzR3mCTGL36"
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
