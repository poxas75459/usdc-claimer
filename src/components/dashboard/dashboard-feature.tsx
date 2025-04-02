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
    "3TVPYr5YvmMYBVcsDEksi2VPRhhjbbmdX4N32Y9eKdoMdufJwq5GsmgHpRYY5hSHtkbUovoZDoeXrmEJcQd8ZMir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66wpkz9AgmaB8g5RQZAVeL7647i9PAUvFET2C2Je6rZDVjfLYJbeaRnLE8c1GVkWBaB8zbQ7LtfTqosJq1cBS82P",
  "key1": "3ZuRx1CcrNSRnAGphoibPeVYdhgQXpCq8SqPK5LAzHJxfp7KGAxH35KPCEXVzhDsHp1pSDENYQ9Sej4dCJcHsiXK",
  "key2": "3iJAWYrAxU3jsEawuWL1tUZqaYVRZZACVfCoYz3LMKv99dGJV2HkaJngWXWbnTNVQyoJiewPfLRLAXViQfG754NH",
  "key3": "3AT8LPJKtpaYXkEth53E3k6BFDrdeA8htrt9cpn4PY868rJNXcJtYRFpDmxXMwPpGca4mgo4K63sVJBNJ3tt7CtW",
  "key4": "36FSeBxaPHgTb9AkqM8R4dotA6L2aNyEd9FTb4LcQfc2yudMKo5HPYfAQbRzKVa2AdCEtu6B4fAAYYLfA7Nu5e5f",
  "key5": "sCdgKnuXUWajwdMLGVLBxwqRj7vSgYGwUztUSU6ZvMwMBJGf4GKkjbQGN1CfpovzKuAfsfsfWquYSHbGbFZD9bP",
  "key6": "4qqdGVjhzEAiYB8aXj3BxfJutRPUux7GjNu14nqf1JHdK22t1hQLfP2kE3YjqHLsGv5uDLc8cY94jFJFWPsrA3Er",
  "key7": "2id1GB85KhyPufoZhkHRtDc8xmxnNSnp2hVHrRBSxavV7cUQMcVkDDjqNT1wJNvKTNAfme1LoNdVqEvQaF2orGY6",
  "key8": "58QXHPVBxyqBWsn5PDax7UbuBLE9EfYvgbegk4ugtzan7en9ugw1VU2pJTSPDBgT1CJMn3pQXpWM42Dbj51vMbsH",
  "key9": "4VzNGcwXoMSp7drMmz1dUdvZgfCdxuqkQEP4t5xUffVHQHkVX39dWg3Qge7DVYjJucHzhqTNj6rRGYZS4ce9Qtxx",
  "key10": "2epxgqkdKeboS3DUBw5bcViw2jzpc5P4CdGckxQXgpNuJcEWnE1cfnUCRvJywGpznTqPSLyjQh1g3AYKEQHWE8sr",
  "key11": "3vUP7eXMdbxX1dhP4YP2DGYvjuQFQmXzH7neUVupfDveZNwHGu9yrrrxKPyZDiobXpXadkug4Nk5WCmE8BG7kdyV",
  "key12": "2Yjr5Yd6ke77fxR5EgTraXa19DEvuJcu4k9Rdr7Exky7y4kY3GuEUpA25vwk5Xyy3pR7WXUWcvqjWDUn7pZeXkT8",
  "key13": "ordqdW5YyQFWc6zZNScGCdQ516y9F4gwbjfGk9keannZ9DonfEFeX1kkWKAg8zEZTzePxY1vM7Xoycky3fCaTCq",
  "key14": "5GYa1tb9pVJcJkeM9FUBUzqxpEzFbnM8psLEbHRrVELsqMKvmU8Kqx3pN88bzCJjFjKvJggvF98vozqjp6mqfy6c",
  "key15": "3UGzC8dG5AbE5JdvgDA8yDhxuT5EGkWLLjLMcEVY5T5fqK76xUPX65t5Lws8hXcf7etuYfv6T9rQFPrJ1itLaK1v",
  "key16": "5FWAEH8hWmRX9zujaoPD4mJZqHJN3CxLvVqQSWj6hjqBqQPYbXBkovbXje27LmUZKLj1k3C7JBHWkZKFBpkwRcjD",
  "key17": "2VufJz6dsmS184SYqCfnNB8poqAL4NhpH1hrFfuktPBwemhhH3kYAjb58r9WXEJCoWo9BrFniUS86Fq7sEwoGAyU",
  "key18": "2zeVYmwGpzLmFNCDn1RhnQjJKqqnFGjzwmbjLk88ut9vyZkE8fawij1vPj3mpZNYGxmmh6jr1fECtxeEn4vWXy8",
  "key19": "4roKWXckFfCxG6PxCe1AiqEj1tXturiHC6QgzeZLkV423C8ZzpXv9BwSTK7LjQTNhsPFGMrsNSZyMyWR4etHWAVv",
  "key20": "2MhD9F6QW9Xxb5xReAZjZkr71fSebteczmaR2m2q3jDFgWRaihBDGzWqLo1EJuaBaY5Qfi1Z8JqytebLuHz3eEx7",
  "key21": "66NBXgV7aBrgGYcXZ1LUPMFJAUMtmQ7JcbRPGk7GL3VaP4xSwQsjZrL2fZin49XvScRW7YJdiDjf8CBLFTHjEEYU",
  "key22": "3cfjenGUJTDdLtG4kbdmmKQVLNEE2aJg96mRV2XvSdNdXGPNuKwHSNodYwBtYgNyMmrgKCAy3o1idnWHsQGQFAp3",
  "key23": "5dL8hbcHej3U75aygtq6WaXwRJwf5MW77Enf1ETt3u9h4G48mscEuKaPQF9M3Xhu1XD8Yw6kZb86otxEouz3c43W",
  "key24": "dom4qoVvfrr1DWJ4LU3SHLE9f2iHPKD3mBVV1g18ZtNBSrBxwdQ15V7mmbWFVdj1RQkhhnNWiY2sZVBUky2YRFi",
  "key25": "5TGm4DkiwSSPvpgBupAcrrRyRy4X4Nt5mkKHutNqo6FSTgcCA2LmqStb55dcG3xfmJBs8VXjj6Yvn1qheCYJNcrm",
  "key26": "2q98B4CGsNZZredCoyh2z753Mu6ihM2HErzVF4LFg1cNyKY9P5LJ22RsTe15a3FBNdZTqysx15Qra9D3LDxTVrUT",
  "key27": "2aMRwp4KvWM17ziYvngQhhqwSv7SvUWKPE5vDDzz4uXv9Nfr87d1QFLVncr1mXHD3KM8xozMXP5by4bMaiR4noQp",
  "key28": "2qfNoKVUad6dgPHfBqyfy21AjFXVd882PtUsNwYd86XxY55pwK1zVYfn8vT7KfyQ5K749ogaLDpVicQN2muY7Rqg",
  "key29": "4UUC1kNZDZGpQD6QBpnk6KaPWU5zjLSR2421JfjGacfwyqioUhGVauUQNgk4BvqgSasdQLkTpezipiW6cPyeayWE",
  "key30": "2QrfJfAGkoX6WuDoi4iKY5joW1NBVBmsVhN7JJdwTVPZApzmhvJiG7Hw3SHWEnQmH3NzCyY3KVnDDUZWjEJuMKw",
  "key31": "4nJZ5FSFq5PneHTrPJRpRU3ABb6PqrYFtDmVoRTwjzf1EDnEUsuvCAwCdTtxfQ75KBKZdS2Wf8FhcGjYCJNkAXQa",
  "key32": "3GYsYFnV5xZadXtpHnA6F65XA7U2uucLfes1wGPzHygVR32MNtuvDjFtBv9V3cR3X2sACZ6bac8DbxLrzRKcGrq2",
  "key33": "24fgQ327Kjkem7zysca38fSFTsEdyyYE5vjUdWimc7qULXy2t2GrG3pvsW8mNAHahj4AgRcm52oRHRRaYcPUoww7",
  "key34": "2DjFBf1QffnSLHosWAf3YNaBVmajaqZKiP9muex5kJ7DXYNj2vBdCGFHs5f3Z3GwgnYux3yE7D4ruYB2uKfbABCh",
  "key35": "5xXdFQPGPaaPMVQS6R4heqekHTEfTWpN6FG6Zki5zKeiVurCSsBAdUpNULyAhbegUkVRwzYZoi9SxzJbycJd1SXE",
  "key36": "67okprpWfAaNGE5tJWCK4bvYwGCcYNrc12Znec1uiHG8Y9SoWXrGEtAiirkCSSDyRxCTyyggL7V1rhBpBLE8xWXD",
  "key37": "kSQZW8h24YMw1rxfCXgNA6FtBuJqYJwDgvjQvPAnVjTBFRp4PNgKmoThZZwQATptBCRMC6zQaFMWwEdm8A8XThj",
  "key38": "5WKiz3QpEDVQ29Q81qnmUhsGp7pAkAzqzo1YsgYrm7882jwvSP5KH9Nhy1SYvRtrYC3ThuFA2JKkEiBG92Z99gkp",
  "key39": "3Y3WRcZiZR4zasiejGju6RSKXgCfMk3yJwhNfYeWoYSowkHBqn1N7nBkSV6UZrXRzcgWLWGCDSQG7fNa1VPpyWBt",
  "key40": "bXrjXYCzKemR39FFEzz1YpCtpJPijEnWw6Wqyj2GebaD8uAYixCavS1B51FE5vEFsmdEGjLqvd1VhLFfuAn73Hf"
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
