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
    "4badUAcxAdBJitpXETZpimPtQjRK8h65U1iTiidU8YZN85mjtcHkegotFgtBKM22bHHUbj4J5QXYeZvUytaLendR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HT1yYhWSMC693MKA94omvwDmVPyaPY8neay4Aje2vnV7SGr7NnR6MdkBphsHskmdfAEtP3Q3pfKpNNNxydAWHoj",
  "key1": "2PLTGoS2TWrJrz6BS1B22MCfXgjmPMHf2tUSrakA8ZhH5Eug3RowtHrb2qgqhaDAjKegDBWVphjejpv9guvohUBv",
  "key2": "4r9ajzTk8vufN7Uei3iBqnBDXAHX9q3tkrKdhxMEUbqLkQ79BVCxx4hYacYMmpA2J2jF5cQPqaLjwhC6G32dLKep",
  "key3": "4ScZKYjEgxGxoH8qTuuL99otkbWU9YgqyDsqDPDmSuYXgSa7c4ku6JAbbLNdNgMA6Y1VS4gzjGJdgkAzHVZQxCtK",
  "key4": "8VK2zDcpVfXEYsgzieYTByYHbSQsKX8MoaSxmv6NfrW7TuDxLLFcMXxxEEMzVuMuG29Wx1C5jQLVdsaj6rWNRgv",
  "key5": "oGfhRrStpykjnhfA8inRekrfMeTFJ5cKaabgF1RgqHLYBWDGbLsvZAVJVzKzmeXqMXqLU2SeLoL7gfr8RmGg6gv",
  "key6": "saz21SUjPkhNoyEymwHSQr1jFUeJcD9XmzfbaRtqt6cS9jcjAbbcogtDYseqTbsSgGT2s5hybHbFNHRYZFefqLZ",
  "key7": "ic7zUrUVjHq5YBu1zCg93nmabK2FsoZY2eri37n8zd5a8TCzG8TLc3N3JuQWMTRgPenz3dLGcXQC78sHweteFd5",
  "key8": "2Gwc56J9doKCc8Ftvm6kV8Px5u8uXA2CYyuDJogFrqhCwD3EppUJuxD2FwspXPUQbRf6ZUgr1zGK1XYyugAXQEJY",
  "key9": "2u175n9UxPLRmSsfkndgeZ9k8K7JU9WNSBL8sXhU1njozsZA4dA7jbW1eZ64WEmafikMFKDyLKwk9AnSjdLJkHBP",
  "key10": "pt7eNa18C8oYsHZFkHCfnKhNxQ7HmDSJM1xmR4ZG7HXpw7AnQUFnEH3XkLuGTruwxpV8cZF3uLcuyjN2YsqVQeL",
  "key11": "3QS6SVCyW5z5MVJiMGRASEqvNA6WWUXFL4H6PtR9p87q4DKP5airdtt9VE3cY1zFjJnbivqUQR1Rz87v4LUJbMSN",
  "key12": "2BBZAd3EqJghk4fzojBiZxQdtpJScWcyx3ot3bAQbPrNSd3uBFY6WAbjwww1uvQQuEuNmC6wcNBffcs4X7hPmfw5",
  "key13": "yP8Uf5kjFHJZFP2ZeWrH6urA2EVzhiATWyLqYvGr1QuHzjSf5Q65ZoghC7PqUcLQDCQwf9d9tyf9KZ21RT8ubQ8",
  "key14": "eicEgGqpFyBxsVVLANVPdVUm38BvwoUYd3PdVaVNXaEgDszhfnit3XvQCnspuTTWkXRGY4diA9fQTkUq3hZvKF6",
  "key15": "3L4gT2mvZ2k13xnUS6Roxd6u9xwhDhfJoyaiKCzVXgLgpdm1XoiQ34b2cxDGR35MuScZgK8oc4kEpuNAUKase2dA",
  "key16": "UENtyGJT3L5sV2vcE78ocxeLiyxKcwyR5dJLC3M55JqLWLTDWyMGmDKhVaNmvhfnWBhrRtvXZ2QNgbp98kiGR91",
  "key17": "2s62hksLKm771jBxzhjeDYeuJpa6XddujAVVzWPu75MsV9PCjhog2VkkHZa6YyJzYA2h2mK5Dpi8z5MHqru5pTxq",
  "key18": "5E3CucApjrM6sXxhARMM7dJbQetAVzjx9hexxbZmyp8CZBaSVohRYTJvNRqXCwjznVpmnyNRWN4pFYckMZD3Y5Fr",
  "key19": "3anNjeahJdiD5GFPmN1emhoLaQ4nf6HMukNZb25FBceYvt7j6EDrRzsVqaTzBjSjuK5q9KtvT2V3i747Q8YVAg9B",
  "key20": "5BhrkZAxKSzqiYMLeoyshDP7o4f2vKLiwrLW4mT1XWTyAf3FaCk3Gaq2ytZKKTgPHczzbyPjVLmJbZCFSgajQWn1",
  "key21": "4LTHXQ6xtAqrEBprB4fJpPmqCwAJZdsBFLGuxcmBqjeckosHGZqCLMYR9Sb33sBeXnskFqyPMX556gHenYqPSxyQ",
  "key22": "5P6wKbU7SFS5qachfpitHsyaPfCU6bfqH4geRQayqrSAYnqxb6NQw8qVREWEkhdjPdQHkYRgoK5RcBh5Aww1c2ih",
  "key23": "naVASezUFsWvYvV3ntEAon8CrMmw8AEVWXMEi6C2GM7MvpLf7cdjwJZM6HEXUcayykT1iPVZuWfN2oB4ZC8UyqC",
  "key24": "5saMJegg73z9feWcJ9mkAi9XHzRVLW7qZzKjtYxgQ2JakhPmLQdsAawX61XKwA37Z4X2511eHjTfc5jxTFJyU3tF",
  "key25": "641qwDuiUc9QKdkQ6xZMQjnMYgiVw5ba9cWUm6a1Kg6PVDDfStkAYw9T2EfZb6UgMaCe5D2QhHf7zDzN3NrwjTNh",
  "key26": "256Zw5CsnVW1uPidFeBv54bh7aBw6dC6qBgyzDTusC7GnCpyv2DpAsRsATtfZnFiX9kfeWhg4xUVg7PGoFocHcyr",
  "key27": "5TXSQVKsKr4GvdGqCWSM4wZRtNgV9PgDorKGXqvnjdYWa6zZr34ZiVLL7NMFaUkzwyeUBLF6YGSp414iWJzqXbgP",
  "key28": "2NEKfNcLGA9fsi1HXQSD9omDzHiPhZGb4Mxsts4yxQTBNR65nwGNTFdDfLieaojB1iRKEP1EADesgTDSFuiynSAD",
  "key29": "3JrjiC7EX9SGe9bsk8uG4YfdDfFsQ2cxgGUnSyVuygHpW2BtEmMRqPWDJPZ9SoVV39NRR4WEwqGQxr8BvCdYMsHP",
  "key30": "62NT2pT5djNiRwhw75wURadunNcikEejW1faHi4q3cw1xU5eZnzKaS6KdVkQ8DUYMkQKwcer2QcGV8uxyyHgQmfc",
  "key31": "2Br8YiiXwKP4P4KPW7dBcAbSpChaBvtsaq9eDFsvRefm4JNmSySmtGQn7eHjsHLN5Ps9dviENijxMC4nYF1dH6Zb",
  "key32": "33Gpi3XdiBQRPs3BqmemovJSwJZ41ftxXYrbtbFNreEMtZRMy5FdwACc9NSG5eP6CKeXBiirvJWM7rp82L297SHM",
  "key33": "Prh4fBusJnUHzYdGvzLkgQAhi2hxdCPcVbQf89JHwQ1y9fCLzxSmYDDmdaTEeuZukW6raGB7rouZfMtsSfepasz",
  "key34": "4tg7oFsehffhV6zwjDUAkp4E5dDEMwE8dFJyy9aS62Y8Bgm7bvJ91m6tKkiisGT8p3zTCm4wBwoHX8H2MNTNb32u",
  "key35": "5uVRxAD7CTAicGHxMPS8ZsKvQbesofQ47P4BLfd8JhqKa7ANUm4YuGXrq4tb2YV6D6A7B2anc6P77GsAs6a5XBVy"
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
