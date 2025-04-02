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
    "2XfYxtNpbWDXwApTNXXBDrJNTUU2hV96kETWaLj6MpqK3mbrLcU1WYcf6wbZLFdrW5gJt6Gdqg6Qf42AxRbwqKYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JtAYvKUTnthvHwpU3pXxBH5N16rC837pwrz4PjGkrRT6wWJrZ8eMRrvLXQKBmKL83jz7eFC6CUSWXrbTMYCLjYB",
  "key1": "5koFgBYuGhNRGtJobzuAexT1tc24ktV1K7eASmQHs3UpdZT3ozyKCq5ufvmJNAN9Bv9UhXS6891NRD6fTxRRDRdE",
  "key2": "2hNytdbqpJh4ZS9J7Fk6WxSkFQ8Kx4VYD494v1ALSXE2jXvzzyzwDX2p49m86QWW7EF6rfNaNtEzbZy3kKghm32h",
  "key3": "56PcQpDaw1RQ9at9S4vwUnpfMk2nYdKirFvYSXkV3DNbjhvLguKUbaYVffFpTVhtTtdebTv6bFc9zJnKgx3FNnfn",
  "key4": "3nfjwb5PbgAi8WC7uqZtHDvoaUffKPqnKUCsojua2n5keM2XFtnGYGVBsbzaBdZiXTHdLUsyJDxyvUhL7spoAT6y",
  "key5": "4KEm41AAmd8u4BS9pFumibhrUSDtgAYzkXRu66D5HHf4mceMQxRucpnEz7Awa6rvQnEW2GJZLVhvTQHNmyonmmDh",
  "key6": "uuQn1xYu4kyKN2PdaAFnvmGRGzmhPP2KBtTPaprRhmosnNog8dWB8BjhHyPEicuKs5wGrX9cg1Tuemgn2TcrF6c",
  "key7": "2dMfL8pRwDq6eQhvu1HyWDSYTzcbaL8ArKKDzJ9WVydnjuDdoTW4KEh1p5G5BhiEgogskeXzq28bSs9ED5QeLfvd",
  "key8": "2zof2473HHqQfoMjKvBC8WKAGwKw8TG8FUioGwetGyNWuknevfnjx5NyuhDtTgwNXZi7bp7DiVBnzYFGFUwKHVQt",
  "key9": "3pM6gbzLxngRu3aYhEhMHaaB3xy24DZHw9eU75zWHkRYbodmgovRdg8mWnAnCVcZcqsCd4VRP3UXRdaoT5RxqQJP",
  "key10": "3uHyttYiGkyZG1UZ4niHuUPs8SZi9mZ7WbdDfHJRMR4jZ8udkxBNoTrguPno2rK52upsyi2hwg12UEA3cJNnM4Bm",
  "key11": "5ayiVjwssSa57ibgT5vAQKH3CjHaMxvoedePbttgFZowurKSYFWieWj2kE7ZFidJg7zx9Xo3LmVKDRKm5hwCdpE2",
  "key12": "3DAqDzsc1cuv8LkSgg8Hvztzdrj3Mm2y5ZrkB5bms7f3E4wt4wvJi4sUznqsMGSnf4qveFBJRd73p69xdSHy9HYD",
  "key13": "qfLejq9f6eAKyyxtLqpQX3wfwGWYxVN2Ux3JJJ7b2FDfVFCqZ2ACGWvVZ9dFQ3nvD7b7qEKPi41GnLQU5dqGjDu",
  "key14": "2Ey1QJ71nYkzot2NhAMhMAeobicuY7oZyCpHDEteYP8vawA3JJHfZDqYcbpQncbfEGJX2KrR7idQ7GRUufiX11gE",
  "key15": "3CkPhkJ3CjHFo69n3yT3TTcX25JhDGxsVMJRjL9sZVBBL74S1KdANVfzequiJuLiQ9ucywhj4iXur6nyC7C3QwDU",
  "key16": "2yh4Ds5CVTq42UMncXb8khRtynPyVQqt9XeDXWKDbyzxdDKpjuDPrHa9cqLtpnoYJE5BrHbtPBtwPhuoaFA6aGtH",
  "key17": "5VMMfLaM4Y2SBLt6k9ABhxgfCvymk1hndHTnBw9gkXojD3ktiCs8vgMajPWFWTfSKzzDisiau6xHnwiL5XVmPeEi",
  "key18": "4BV9Fh5jmftEQT52wHqvc1qvKct4azZnDus2b299q7KL5B5PG5Cz8ZCCtVV4Ap5gQM6XBWQaVfhdeQS6pKRNsFen",
  "key19": "E4yEuhQ8Fju1RaLkPsW8JGKtj1TYz8d3SsuVWWZnfcTBcRqqH6ULtUJdEo6vebh2z2VeMfta22tw51q1LLpv8mC",
  "key20": "2Ay2nkH5SFJFakaoDgsFLm8xd7mKm3cW6Eryx6rcvEDSE5zZmkinbtq9mSeB8irgEFLMDumCXrwK8MVNzqoohRkj",
  "key21": "52pdTPr25MwCvaf59LabxiezY9m2Z5YLasWrH7BSqvPX3zsnZxj98d4L4zRPShPkEtHpfMceBE4t1E3Zis5ZB3As",
  "key22": "3739HXhrepvCKxWD5bnPCUVGBi6rbLpTujans71vbDxWkHV6dRxPat3e12EuzSSLRS41QJpWHKRPZEEizJ7cAJ7H",
  "key23": "t65HEmgNos2XGXDpJ5BahR7dzhYnD9gjNTB927KRhcyKedF8nQ5ku2yw1NCyfUwMNCcXmM6QmfE6b5A6QCrFc9s",
  "key24": "3ktKDRLyH4tjhPD5JuvsRLMEd34hhDaZFrV6aFeSGfVEFbZfnAPCjRKrXkutSxmf6yUDCyDLEw7ZwBq8zqm13398",
  "key25": "2SkEeERxXC7ztxmMmpYE3PrTbt1jN9Uw1BuSnSR1PF13MoghRDNSqxoFvmWEA1PSSE4iRcFsf8rY73ZA8pGopfEE",
  "key26": "5pBUAgFXApnQwxvcYsvQTFMmjq3nu6jGt1wWhdnWHfjUj1uzyRTZZ2iNdvWXY6XS5xvabPq7JUD1w7FafmyeWX7n",
  "key27": "T7s5xeqUr2tDySGeqobhsj8WbHBh51mZnG9NefnKP1QsPTb9m2z6MgQD7UtEUiortinGwHYndwRxn1nVRaC3xMu",
  "key28": "4Fmfh9ZKYioKcDYmQoYQk3PEvc6M2BuNJMQohtAsTkf2GaY9Qa5ZyQx74RDsnvZwzzMBxFt1VFnk8Y1xYFxZtTKf",
  "key29": "35Kxd9qkQFirtcoQbRssKocKtoaF6BiLNpcgXKQhDbkN75jZJiZLPrZ1uAXJT18ir8XuuTmLb6pd3uZpnwityr3f",
  "key30": "5RsQCgxDYN1mXivbRe5yZrrtQ3yQHzYVGnrdVToGP64Tv1hxH1m9PmRF9V3toFtUAR4SiLRDVKZYzeHTbNK3xM8d",
  "key31": "3tKDhuna3Km5Q99kq3aWPYHeF4isEmLSeWD5qDoJQD6RUWTMMAjCezEih1hkq9EvAFPzb1sX86PrxYMYTgtok6HJ",
  "key32": "2U2bhKp1HhRwfL1TuwosZzrvkrS5bJcpQYWt3U9k92yHEureDqQyGJHSrwchx7f2Q6t9jQ54rZE9vHqfX9Qq3gR7",
  "key33": "3S5ySnyRKUDGko8BrDvhKYcA2GwUumSRQ6i2JuH78dRXJdRPacE2XPYnrFsVBziYxgCEkvEpkaSsMoXQdWddPb2f",
  "key34": "3XyDas8FMPKHasAyJtuhDfY8H8rcA56amz85EEnRQhicmapQFuT5xVVFY29us54DcGP1jZuqhZMoodJVeMj21oGq",
  "key35": "5YskUMiQNSPRwxBHr3PEcy75bzwVddqe4DE6G6mEkyPsNdpzXHt1gRiDLEawgqtakkpE2zhLE9KkotPuzzaJUCTd",
  "key36": "4AuSQf9cGMTnwMK97Y3qkhj8yMi9nPZDzWTVo3AcS2D2kLUZ7AqywXFRV9u84qmHKk2so6EENKjH7kFMnhZ5f74x",
  "key37": "5H5c3ttYvfU4jet4bJKPqpTrCAcXrK8SyQJMdrugAVx5KorvSJEFaXiY4ENXMoXeweK9Mn32Wpw1Y3fX5ruaNeLX",
  "key38": "juErkoXNsQXLpr4Wf7aC6YNcGxgtHF8fJD8FQ9KRWUESUfMPpJfLZmwvDKGLvgf2cmzMhw1jgJAs75BtotQeBu4",
  "key39": "2ZUcuXXvT1hmtN6zC5PbgYWj1LAw83rdtYjtgjQT5u3JwTzi1ftraietA6qserGjmr27wxvNFRJiH4YZkR1baLWs",
  "key40": "4TcohzbjZLMkZ8gph37bwzuuQmGZQhe6FwA4Sms1JYvyutoZv63HEFngrDjyQTxzhrHnkkNndhMu5bAJXQHdCxNy",
  "key41": "3hQHneXpefEFCauG9F3yhB7UEqvRsN9ge57RC1px8XkqcUJVtu6pTPNavN8j6bkp4VasZLocP2fkS3exftFtyT4W",
  "key42": "3Bw9wN1CJBpa6PWaAowGxins7GnNPWiP341jQUSH2aMwPP63jgxxPixDXv1cgXf6oJrH6BemK5XJqunyrFdgdhfC",
  "key43": "Qdv5uCzYmob45TydXkpqhW5uGKk61NS9meL9rdzGWmSRKjRwAWPbgnpCrACA9EsXPRyia9QebhAY89nB2Qh3arE",
  "key44": "2Yh78W6N7gUCzc7Nt1WAX8hobHGgbct93J8TYMtMg1igkasKo4e5RTKPihQchU3uRFqRT7HQJm9tzFxzSMuHcKf2",
  "key45": "5vr8BnmJrNe1nFvLw2RGeg9B9j6WKkRmuLrGchvHzhj3jzg3gZ9koCLw9fXAiNEweMwMEMn8E3NN5xW2XHcPNxdk",
  "key46": "2yk1hfeXz2Pa62A1gq53vsszYkY1EAZFtaewQVoLioLz2fu6SejRkQcUYF71HePabK3UqWdB1MXUCAkHnJdS5iaL"
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
