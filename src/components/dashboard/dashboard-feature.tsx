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
    "3majfmToVD9yLMx7TeMYvpzjtJhBMsctVzCUVkcPk2YcGW4AdpZT6ufNTNhbBfDotTe6LSB5Y16Jt1N32JtGwyvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cGu8kigsWCbJEWW7kJQnHwF5VVMBUhPQ17Vdj9JSLw9pVGxhdWQEAaRWdk1SGWf7fNGENvyBu5LTFx2iJcVhoSt",
  "key1": "63vNxg3mNBX4Y3vvN2CKFvuDp5YNygXj2XCRXUEZpugG9P3ziFA557cvCkhpidg4NqBxpifpYg7NGg9c5zrGXfiT",
  "key2": "5MBqokW9ukkFriPNBtwaXXdad2amyFuAxxrozUY7oqJKun7owiVpeoNvFGKJTPEkvuFDpbo1gqqVUqRhuEwfC2PW",
  "key3": "2krPCoMssZeDwuVDMEU1ith45QyCKgAznNXccXkWa3DPive9XZHr27Z8rZm9B4GDzMmr2jy2GmjcLrKTAWBZgu2T",
  "key4": "4nGv5KHsD8MDxuEFaMV4bUpQWYZjugyxhudsVRjjbGxytjecgqYE6hgRjwkLuRQ2FLMdCvxz79gjrd4kMhLoJjiP",
  "key5": "5HZhAaBH42CmdYMXVSeEMVB4CjptU98iGFFBtMVHFjgDPfZqoHvzgcVWFtRMeMW5ZcyZr7yGTU7fjjqB7S4LwbCj",
  "key6": "4Liv7qBASeSsxBwBuf2ykA71bVRJTUqB4fXBa2wqwEkw7MhqKBNNE6XU98BZe7BL1bniZbuqduWBnJbKfmFN7Ezz",
  "key7": "3s6gs1e9f6ad4xfmjDtHwpdQR9QpsBaCxUwEKdgrPwf9gKZcDnYgfvLf6BJGNwouySeT9e1FJw7tVf44AxHXXAgT",
  "key8": "5zwMYSQm55WsUf3qkqq7Uux61zho4ZY37tzEYBmnN7hc78TyZqpVjLrJioHPSwMkoXL9w8ck2jNxmMi3kZ8axELz",
  "key9": "4ucGAFy8nBD1xJ134qwgEU1zGtTpyb2neaXj1vnguBLYRio7NnKpTgbVPJT1Hj9yJcpE3XNJZLUzq8rWwgxwvmas",
  "key10": "341mCRByzyYrD9aeEoG3LNzbS6N2coQyM9tDQdrAgdtaffzjFc89ymbRTzHbxwmTigfgU4tLPFTf9h6GwrCYvUjR",
  "key11": "5HbwWyXjiMt7cuevuLhLJJxiRSPK2hEH9rSmz7S58EGMZ7J2GyrWq4tZ18wtniLER9fLWRzaYdGXWZB5KQfMqLut",
  "key12": "amvWRRoTrLeboEiczXq7vKLXCUeY24KnDCQ7K8ZMn2dEpQ5AZjwAmCB4nBFQfMSqTw2KzgLX3QmkE6wkF2RFfR8",
  "key13": "UBkFXECsSp3GxFoQSGqRv4HhR6K656EsugXGH6mktf3xqJtuQ9KXcPBEntjXcmxqrszFXQ9BYCjsyf9jWdCfKNg",
  "key14": "2R8BLS1Hbh7RhEvGW9jZe8XPQVyro1RWgzPqr6EfAPaEpVDvaEXeNSUBrdiA8NLWoevbVXPNhbbn3XHzpsWx1Su5",
  "key15": "2pGAmRVHyUCqAnTWY7xfChjU5mbAVhywoPyCvnTmbjWuBNEZJFqmELeEq4RYfVP5MceEvK6CDSbqrgt4U6NjDTYq",
  "key16": "3Xm4uAsYCW1Hfgy9nYRGwesmzUqtTMgcp8qBdMYh3oJ5PkFEqSc3mrTUqDdZg9a8G4s44ZjuTTXiHi6nXYBXmTua",
  "key17": "tGZvhqKH4f9qDMmUNFUwmgQexrgzKfqii5uFevN471ovmtfQzDziXGRxupLDfuHXGs14muK3vyLZ592MjK5roNF",
  "key18": "6M9mfcP3wjVD817ScYFPR5rboPXqFfWvEPZzkgvKZFEPTBaQx88XwjrWjhhvhR59vZb3An65fr81mnTnVFewv9t",
  "key19": "5MayyWTYeiUP8Vz2vrDjFHbytEX51LS2VztyWp3jYorYAwqShKZZ1bZ9N5QB5v5cXSSVWqkKS9uFiXoz6C3cHe2h",
  "key20": "5FB9t9JJ5t2woPpPD7G3rZd4LZFJWESw8Ye3xH8muarNru9VqxdNbe6V9fuUvXCAa8w3VRmKwsc97LYBMFNb3Qb",
  "key21": "2NVFq9MruErXR82pfyS2jbR1rxiLd5SkfKzunD33qBpbHyRyZcQKE8P16v8vb6uNHtYbAnEwfGiJeeUg5U5fNn8x",
  "key22": "55gH6sqh1gCsoqbA98JhzgfhzbkxKECAGQL1cHC5RjVFwmFx2z5zaYavDQ3T9hpWGScV1kv9u5zY7ep95QWGJqHQ",
  "key23": "2tbF6JnGG1rK2FtnsqKpt9grdC6nCrZoNrxupfuPHsiwQAG58HvcYsaqSdipCLiA5paPGMxsYqDisjaetXZK1AkY",
  "key24": "3oi6b18dmEAaaKH7YURWSWWYxdpFe9giCcUzyZFn5p3qmA8jJ1XPSR1nRodHfLDJXWd5v6hbEUBdi5NagSFHxfx8"
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
