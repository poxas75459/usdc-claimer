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
    "3QkGizoiNtoMugWN9Gqqy6e6HiYbqAiiJsTiKDhFEuBAG6RHM5gp9RMjwZGDs6iKkLH9C3zHZtz5UCo4DA3PSFcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vb3N3HvHN5orqg6zQgcmFkV1oL4FrYhUxGQjMLmHKWAqs5JSi9N8oH3PMj8Rb5d7puzwKcBx4RcSFNdDhAaGGxW",
  "key1": "3Ub4RNJk4J8oJjEh85Brrzi6ySueExdQ6YagS1ScU5Gk6hHow9phvFdna3uwYECgBV9it212tBM7A8AGfrpJPy97",
  "key2": "uaKjmh9D54CF6YwddzcESUF5uNpf63WvS3XcKn1pZFohUh1eAGQMWmRr5YfUvPY58LPpEwPeuwVdNZvq7zxatxE",
  "key3": "41AE2PPPCyRsTUAXwDYXefKLVVNFWzNkqhoXdhZmpa96zVVVYEV5GGo23yFWaj7hj5r94KTiH87BfFwLwB4iwtMT",
  "key4": "238Vj3VFyvFvd9esiakiCNT3DYEBYBqs76CtnQgZJgf5uhJxeHuxTXusoVo4sQtxFSUBswq7zy5L3vj6KWikhvBK",
  "key5": "449SiGxFp5q8ckeWPBjaz9XHLp4THXeEiGzknqA6VuMZk2cxX7k6jk4Mk7gg4cWup86wNaH2tSksJ82XtLrhauxz",
  "key6": "Z2xinQfBeq63oYi4U6GeQUzztgLiQSYXAK3hGGiGA3mL1doUJtg8VaFxJvEzpV3Qwcdix8V77jCNdEkcHwXPuqG",
  "key7": "BRYVh6cY9aU9kXWCc5mUSe2o2y1quY7gSY1Y9jbDzd2ev2gSXCc7DcWKiXXhArAAcsNLhXS6DLsFsQaQS77dea3",
  "key8": "UwfYcFkeDidzH6KanVVuvxmyvtp783X31Cgo6EzeRPSUxHrroxjXG9tLPSR77Bg4HXy7pV2q5PppgtwH5LaEgJW",
  "key9": "4uiadCp3zkRgwCqJ6crRCs2XEHUowkjg3wQNiePNvdtTpYN5JHuyL3edduqLGvWSHKQWgLckordhCd9MYVuGhURs",
  "key10": "35BEApL2KTUXiANDjyKmBoCEZ11uTUqMFnmc3gejrDqqJdjFQzPxWmoiu65HH8hCjbUYvYruAG5kiA3Nk7euHCun",
  "key11": "4mE2DTRekzVPGPPbaCMBtyEB8NyEWUuckP7YUWpeDXgWVc2zjZ2Ysnv5rfVwf5K2FzvyjXrTx21XkkAHqNYzH2gn",
  "key12": "2TtRt3QZ76ACm5gTvedmJ4rybDS8mXzNJ1dGb4LuEoeoSXeCNrw4vTKWUfq5Ci6vbpkJ3c7PsFvGtmoYpHCgV6iY",
  "key13": "57M6xMf1iD3u4XttnZfPThpNubAgn4yF8XsVhkRS4Pw2TyTxJETeQfW7RSMYjqXJWk4tRnXkBb5V4mpbC9oARVY6",
  "key14": "3i1yshfR9FijyHiG2EFdFE2VdcamrkRtVouy7keXuWwsVUGEDyBfsGCWHubgnD6JfAz7xmx5TuXVxNLSzyVhBxPS",
  "key15": "2aKU2oNrcPxmB6M4hUXH1aJGbybkmWDHepa29uaywAYaVptTUQzXaQLpQCyJFLAg2wgD6wrDFTneza6RW9oyK8y6",
  "key16": "6EP5NrYkSsXSAU6wmCQ8nBrLKphBYJHfxgFEaa9wK2v69Udaq4K62iCWc2Z7yPxxqVEM6udcc4juyCAZufemc7c",
  "key17": "QMvLDohq8DUhA6QZZTGU3b75NRQ6L3Vfq1nHtrs1VAiXWZbeMyUCsjiKjGCEJkXz17zHpC3tC9Msn79CddfBPM2",
  "key18": "5raEiXuBnEoGodBN5mCn5tUAmC8Jo5Zn8K2JnZ2t4EbgaJSTt9ZxtksgCA6xZvtbjtv2dpvSqgrUJG54iJKuobTQ",
  "key19": "2EFEWBPaAHF3MVLftCDkcA8jeUrcZLGsBpVcovyvyYuV8rGaAFaVRpwtZDkbEoUREzJcUz5Jn3T1mpptXZgCJJkn",
  "key20": "2owSjDB4DKhqJKvXwHiY4mT8vobEpFhyhtEBA7CycHvrQUaRsUjpEnnfUGKuUcK5y8H3abv2gQG7qxsUBvAzdcVh",
  "key21": "3iH5RuDZ3ujuhevS4o3b8PH8se5o1qe9GSKJob9KP3yZLDg4jMk5SBRtGg7y96g6SYkadJN7qPMBf9weyYBW6Wuj",
  "key22": "c3eUH6nDanCjm59hUK8PhKrxqsK3Mtg5jWyUbrS7GnrndZFtLSnana96zmXmuVPbdez3AAbNgS4AXT1o9DhHfPc",
  "key23": "5hbQrpXASe7SCNogA6Fd1ouauYgJM9b4WjrEJLTXDQk91qX41RvbHJ9s1VGBvjk7RepjUyKAAW1zXobVAzfMA1K2",
  "key24": "4ci2BqcFfoqg2jrD3tftXKbTNh2U9SLn6pUMRs1KqyehnSGaCgrF4n8m8vahjan2h41wAWsa4dwr19G4pXnZGSJM",
  "key25": "3foL1BjPA4WCCo4i8ijuNiQKLanumbAnteGJc3zBGypGksBjao6ir95nBw33Rpy3BBCKW39prjRHvx1NpoRZW4uz",
  "key26": "5U17bK2K1EmDuyDjdTra3Mu3zrgVCy4dKjUpW89dX8Gx5G86GyUPRtzKo9HRq5VZJUALJtZq7TDqQuhkRENNa4kD",
  "key27": "3HCBNjU5MfHm6d6VNLh7jk3dzQ9qwyfGPDC3vjYqxLJaGpbrsdfsFaooWiMte6itWotaGocBZrz3BqoseEVwwCBE",
  "key28": "QFxvinSJvbbNx7mz5oajC3CGrXwHRhMPh2tQUb5icbd6KnLnPQWMusEp7q2ozPUyBCQkUTb4pZFTBvqxBRsWz6n",
  "key29": "5cHuX5k7DVdzKECZAWC4qDZbJmxc51qm4BPGLZgCTako12mWeVi3uWAYtuMeAXCe8fFxRXwWanyzN8QbeGtvZ1jy",
  "key30": "5KaTUHS26YsET7uNEvA94i1RQquZWs1PTkZcWEQkHvfugSDjV6CuktgGV1NAXp7kwTErDtsCEfdmTJnYMWVDHf2T",
  "key31": "5waNTm7RsiEzGUTXyyKmdYEJMELpbudfvz67MsFB2YnWEub7iVBqWJCbALd5ADFEf5VqS3PArqQTWiWp5AVqjLNF",
  "key32": "aCgpCKWiiXRKwUMePmQUP3nx4SF2iefnaPubbMWjRW8qEshW5ZqNeyo2rzCRctHiVA9f34CayCP6YzZbvSEsDrW",
  "key33": "kBUgkbBgrrxsCu8tCFfQY9rMyxTJ3VoihMmh7V6RRypyHE36CMabvqBTbGZkF63UXuUEN9VtdtjYCKru6WpiDae",
  "key34": "4aRp8UuYp2krNuk5zjm91nzm9AvDmxc4FaJYEVFL4kxn2YUxqcp5LPV8UWiyer4qWnoRKCHbCXPmPcuCZdq1vZty"
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
