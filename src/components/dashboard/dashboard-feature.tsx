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
    "2tPkTrrF1kBa1kFvmi7uxb9Mwqybgi6ES8EebriMevsjgS1m78CEadN4jyoEfE8jRiuRJ3Vm6uBdnkV7Pk9ndtd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JPwsnrtsS7BQ83WsNBjPvuFnVgqcMsYMHV4ECb1W6VooDKU8C9FJJJaLzA9SFJyawy9wLBJ3NGAT788REqbdYFM",
  "key1": "37P42g7ZSSqXwrnbf8y7AprxDNSfxWRgBejWm3CZWqaZF1Bmiy9LnCqFrqpWP8bRqV3q65xdgVDRaEeCMUZ9RvGv",
  "key2": "5MEYRXSqo6wEQcsrM84nbVxcA4DAf85MCXzhexiBpsnUYKe7tKAajUJoun3aUmCMqzcZ1wRg9FEZEaz1uzyqroe9",
  "key3": "4E9z6rUtkhbqbkUsPYk3GXjQyzqEwJqbx7SPvY6kuAuvmoUyx58Bk55yd6xVn9LiQ3uAwQTahMhZukEAXZLneDXo",
  "key4": "SVBSvdqCivbX5dhdxDgcXY3NEm5orqfFFn9qZCapqNVKWhaj3T54uu2ZEFw18ThrdfWYxfxBYXmLfQS2zoij9zk",
  "key5": "QvHEFDZThQsGmsuUk4A7Gjmza1CyDqfMEY4X16PeCLo4hLeAXaB7hP7cxF4xg1sV7UmRvmUHmqNGtMo7RDACrP7",
  "key6": "5vVWqWdgFxjtJEYXTYmEC7sSr5JJ727kpHx5FRP274iG2AAQQENy6y9xAfArqq8cAUr8UvxpnxCh4gg3AAAWcwKU",
  "key7": "391EEi2Pn78BvPhfQz34tCEH9teHW74mC4oSUP6p2HqW4bqLKNaSZajSK3dLgwYw4CUvTNe9ELDHXKv3hD2wA8np",
  "key8": "4VdSQ3e5WQscrtnNqBg9HrQ52QDhroPe9yHi6LnCLszi1wjqnxqqkNNzus7KnDjTZQhJriEMdY2c8sFNEvX7wQ2L",
  "key9": "2cRXgDTNJXUV96eocrbvaHtbwo4BcinYDwpRB7bGm9pdJsy6bUoqzBekxgb4XznsaKynivQbWH3r4g35MvtLTRg8",
  "key10": "3DEZ4q1nqkm49SQwpTnTxN7octpmG3YLC3Vdtttx3JGzw7wxFHzxSSqPeaz5p9eAjaUMwYtsFafqvge8RztHES2t",
  "key11": "5zijWwoJEC8L3jrSEbo4M1FzdTsTMemNBx7z5JYj23YSqTHGRrW4dTFMqsZ9TgKTFVXXTEuPHKTCFAKnBbH3LzoR",
  "key12": "5xZ8SJVYyfwErpgyRFdd61E8GohZV3xvr3jhoSp3Arpy1mB3gJT1B1117xSHJKD3PjCGx5FMb1QKaV4MUUZe8pyN",
  "key13": "5rboQCqRZLMLLoiVAztvzj4e8xW41oMe3tVbCr8rtnY67vH3hphNPaDbjRU62DDyUBPYBnTxjEfNDXD549f6rRkX",
  "key14": "5ajBoKQpm4xgPYiaufn4ioQRfwe8gpL2s38oxvrUTQ1KMr2L8tL8LXQXoP4gb7aKypYSPeCkBArgFwbsWpMmhy29",
  "key15": "4KsrHfSha2iq4853w2i8j75YHbqeNSmXFD8outP5iU3ay4BS8QKy6qdK1eNKS38c3aVFGvkSL8UMsMFyH36aeD6Y",
  "key16": "4zb9U3bcKpTASXpdMr57XimZrVa9KZ5UnTWxeroEMiUjCXfz9YFHjgNYZrSwkHgR7Ru2mYA7ad4ZncyASC76ETg5",
  "key17": "2AT829v2NCMM81pzE2e5Gz1dG3GXUsowYw9PWXDR5X8ouLH32csEQrx82Fp7c7P2ygEE9iFgvBQZdaKScKUL7KBg",
  "key18": "5DBDEJjFiayZbhrXdJCQFYLuf1XibszFxdNsodRgZbkGHCbVn9VFawT8NCvZm2vTZHRtctv1X6B4S8KLkDz5EH3h",
  "key19": "5aYqzDkqrK8GEyTtQA7Q8XH8NZEwu8hUbewbRzRa1JhDun3PAEWnqfJQoJb1CLefVrtY9Nkqs51bxhLuj1gzBwoY",
  "key20": "36kqdDrKjEPNVCirGq26kBBWq4wvAmPoFpWHuRKqQMfe7aPGQWCFT7fF9uK3nieiy6iRjBdq7svuC1UJTLCkvy5J",
  "key21": "5xu8VYNUteH5DEJQz8coywgKKDxxxu3HvsFD5FS6jPMCv7Cbdcgt5KmGpdDRuuUpmSGTMsGmEaDaxhrHQf4Ky3EW",
  "key22": "3iBCZVHXCH1VM68nb9NqQPrD7Za7WvkgjhMmGbtp4JBPrm1DreccnPJHDipKUacCmqV54BqpqJtyy9y1uf9ddEkC",
  "key23": "4VHNZQENeerszviJszuzfMLqr1iCyNw6KFXvULdZidNQmgeg4vTExaxiqLMESqUjgzNxxGMPbztvJoJZiKj32CBV",
  "key24": "dNnyNUC7MJZ7vt7RRyrYi4GMVtZwrk1uyd9HL4p4fJZHYK8AAWq771oBHWCZpwPq7TxUjyPsnFB7vUJuK7TfkJr",
  "key25": "2Hu247ZLULNwM7DKdxHtdmE4GFwdavckRQtfTyWJ479G3WcSgTrGDVtPa7XA24qNnpxSjRG46zYXzE8hywiLjf9J",
  "key26": "2imB5mcZSXekNJtqA8YwCaX5bfbqkG2gaKX5KyUxQoknwXqm48EhZyWqmGjKdXGY6dJUAosvRSzVjb9ghv1YBSQG"
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
