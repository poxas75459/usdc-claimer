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
    "3d5doZuSyRoombW8iLVWaNCu7g2K5MoLJMNWjAbWnR7ca2NYewUgNtnL5eQZvG9xrUSrxaXD6xXdqsPPP3JSX8rp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vBi6GM3iNGdkWiZz7xbVof4xDat9vLRJLfPuQUfykG5h2cuxAy1QpXgwQC9gupuWEmm25xcYpDgjE1pzR3ikHh",
  "key1": "M29nBSKa7W8123PGps5Buvi7f3FXNm2oS8JQsRrcpdRtbJ6UR2DWm1M3PmSEYXqTHJJEbQqF5Mnj8iw9QpjcYFq",
  "key2": "4V1YvMStkD6Sf6wSV4iP7Qa3p9TJS7SLg8AdVAGLyepQJYcbKkAeP1v4XTZFxVG4ctRuVBC7dzXo8p49rXPpD7pE",
  "key3": "YzR7H1RsyozefbQGN3cp7YJaGLVNj3A7BQCgvZ4XDpCFJVy9GQUjNLXG1uruP5ZeKWQt36rPQZQvSrixPjM2Ruv",
  "key4": "3yy39MBfNRbEb51gpmurJFWPR67edzXisBHfk5RspVFkeondWPhQBRfgWK3Uv3wqBBx4jQZ3C88cVZZsjtNxMQvd",
  "key5": "3Nu3u82SS2ccyvzF4aGHL2a6Yf7gXuomBCXziiZYfVoTXLGh8Xn8jLqpFAzy7Egw8Y2tYsrAPuRpH6MkopuQJw8U",
  "key6": "2qkoXw3ZTSWiEfjSyyL5WCWYyd2EGZ9bdD7qFyVqmGQdRtnNyJstcSbSjAVxMAcS2AxMwu2djCjzFb24dWf8rjsN",
  "key7": "3zXVrPhKAt4EVkLx9cHwHQTQKCS7a8DFLLeZiFQyCjfiyNPD7uvDQHhVDsD8Jn7Z4UjfFgqcG2YgkKUxca2iDyNL",
  "key8": "3i7PfrY6ovwvoeABuVtjZSwgLkvV8YnueVmZE83D4doxxQtpnwQBzy2kaGEmsrhU1BdzRJxf6J8xfsrudiahdGs2",
  "key9": "5sRKMnm6cKiK59eyYx98Fk35c3gmYJongpWC1fphpC22JgNHavrFadQi1Jd22NbUAD696EtYrzKNNNF4LujZhG2U",
  "key10": "4FDpfqkUqwSuzrYcMQhd2pje9M69RwEJTpf7EnzUZ5PcAGE8GkrRFwVkgYaZC1mzEoNnHaWxWwfrCAKXExX4JJSv",
  "key11": "4NSbfHcPNEdicDpPzvrBqGEG99bY4RseqJwdj1mmTBtmAhpN3MFMmUP62yKy1xGmrLvj3jBMQ5upXaaLuwgxAZyZ",
  "key12": "5nXXCJ81EAsjKDej93X6ej5jvvtyadE2L1e2QhmHY2V2psvkGPVvMiUUKQKjTfP9CFg2JGtHaQRKcHaUTRPwyfZY",
  "key13": "2i9VgKKxGfbX6UVjv95ZPt3FV3RXDRBPa1tSFwE77JdtPyjjmy9aDE3HNQFT6r2nNUNQuVfRLMQnFuqEd9rizPn2",
  "key14": "2jDxgxUFeEsvkarzQMKPWAYeFgyFXWzLEHFW86zu5t9uBtuKt5aidJ5Lkroo2z5QydoHHtDvWW4sfFj7PjPR7QMH",
  "key15": "833bVWLG8Y4M8T68E56T599KWgBgne8eEqzDzMyRoJvPeYibrqkW86dPrwvLqb4XZgwUT82ZYwrRA7UEH2S9fcM",
  "key16": "4P8RaoHyqkGW7byAyFzp8pMf3pFoa8nR4potgQVCP1oLZEvspUmHN9YmkkKfd1FJrh19GYTpfuAosQST9CnuEUiX",
  "key17": "2XGFtWHnDbPpmin7TDYDkR4L9TE2vMumhLKdrbNZL2mdDaatVGxCXWUzA12TE7fkq8QmRMkoYYW17BRPuHdtkiVv",
  "key18": "3YPGaXfkMo6rpuMhNZE79tb8S53bxBbk5dHRrr2VHh5mZ8y73sPPkAGKDAJG1qocg6FYYNFFWpSmL3LW3eUhG85W",
  "key19": "5moVothxoeb6Gy2dDpsYs916bAJ8aPbkD3a73aU9p7B61SsnCNnZX91WQSL3AgSRnduzwKfWZVeJztTf3YXzhLb1",
  "key20": "3Lf8DUzABjnumu6YosRBsExSxnLjAUGeeaGDacQ8owZr8bsjVFRGiBM9LxpjPKXQBhKdbQwsJFd2coqBP5oQUmct",
  "key21": "5gRSYG2upKQA25NVyoVsNq58ooJb9BZssbES66j4ESrCD4TXFQqYN7oDu7BKvytk6bjpiYjeo2zkcmphrsTfM53s",
  "key22": "4vp3epufM3sfPK6NP14vEXbSd8dZHkjy76rApxmZdrnChqqi6w9LPbP9nYcF3knwJNZ8c6XuppEKcCWFvaZkyjzU",
  "key23": "3oyLgweWRAyJju64X2kdr3miD9HTmJeRiA69ELQ57GVmg5qycmFkMD5DGeFDTjLHLB5f37VnoDheU6d2wUSttUj6",
  "key24": "4KgPF3ivnnpTmDLV88ixM9WhLP2Yb4nJv2YLKu76SxCi31J7wor6Zch2J2foc1P2NJ8NYYSvLsiTHEH9guPWKSv7",
  "key25": "2PXaCRmMGQr5y7FtQgTMv3axeKMrYLSWbaUt4cv8whjHC3ePAta82Kg7phh9gGQJcQQkb8LDHAjnpDSZJUD5DQ1e",
  "key26": "3qsmzDDGWWTSzKPNR9Sej8EdCqeAsiiUGQGoky71xFD63751mAw3Wo76rgHRJ4XTjuMLCSCfXjEdQMq6BGJ3BbdC",
  "key27": "5KGMazi3yNnKL5QykSXFDvmqypFC19YmQXYC3REjXNbpYGWqm7eo2RzyDwNCzu4fTLi6GZqmb5JwQ4haaHduYMxW"
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
