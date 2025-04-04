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
    "5w6zWEuDiUj6cKmBjj3aCYySamNX4cyv3Y7wBDjuDvfEPa2RBgLbf5zHTcpBivX7aoHQcc5c6NbVxC9ofszeNvxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qQNsmYce9F9Avc2JqrxpCUR8xMnkhnbAb48yAqtZjE8FjEzsgWaiAGn5Y3ZYLxHWLmGKkXQ89SC8i7pGZw5D8V7",
  "key1": "437iXgRXRLG6rtGhdqzA311cUMLihe3B3VvZNfHHdfSWqsnr6KPLt79274Pm1AXPSLtW5RYs9F9SJ7oz7HucprD1",
  "key2": "48GnBfcVWn8QffMM6aNBnCh5RbuYr2z3FgCgc1F4Jp4T8q8bukDEKvp8p32E4nb7UznFpaPLTemHRcJwp8mV8FSM",
  "key3": "2Pmzv46WMB4uqmVPubUTqBwPg8ZGr1KXRRriApv1qbRmWjeTGmMk3mvQQSRio9GUbSSrTshTGYKKyHbqx4cS6Ro3",
  "key4": "4sL3wdfgBXDDfKTSqGPKeDZknQYf73J9BrfEX3JkeGPxYYWEZh4bTzEQN4nefFGqViCEPK1Zj9JUJhTMQKcgbbaQ",
  "key5": "dusggtHW9ebDUqjkvkqvUSoX5iWa8em7apvwiYAJmYKXPheUi2WCkzYbsjvfAHK3cZZXpxi15PGDaV6At7V2qJD",
  "key6": "572AQeEwAaykWR6GgDmJiKEkpG9bEyoR8P8grR8awU7iyKtGQ1FYFRVDmQkkTVqPxQM9Xhm5CPJE5oKzUSf2tT5x",
  "key7": "2VeYEcdWHzoa4uxXNp8c8Wq3StYs9vQahTFrJ9M1kSUZ9g5dDqNzUEgjYBXVDpdohp97o73v8QpUhofGhawnqcDr",
  "key8": "3BakMhyGyDhXubEzNNyn99xRpYxb1Mt3e3gHdFE3rJVHqzJtZifUmYjEqnR2j2oYjma8w6p6sak4jjuuifdUQyqK",
  "key9": "q7MJaGddDSkPPUWKeyPgYPgLtodKvNBrsADjeSE6w2bFpC4RUxyCrshTULuUDBg2VjHtfxs7NYHNVdQx7Hmamsd",
  "key10": "29XbYRFU4XM7WRR5tadkNeERDFjLGvmL8RebLkZP8c4e8W8FWseLgeJ3ZxJKjzB7Zees6iHtJFPJakKUpwLkByFJ",
  "key11": "3Qmb35ueqRjtpboBgdKiQz8FzxREmoViH6rE5dDUPNctRJNUff7MuKCtxNG7VpcQefDzgEH1GYuDawaR8Hix9cBu",
  "key12": "3Qvz4Q9wYpvBqp43wkery38DFrKQUd2oM2qaMjT6Z6knwS53LL1MKwcqK2apjAimeUUxQg7W91RoPjHQHMpXQa2s",
  "key13": "5Y9NBZ8oBs2hzoQCEu1cLyL5ZGAR4PqYa9DGNDQGDAq724oKjshuFgxYnXLEGg8HNdpEcxfGbDwVz1AN5B1KRecE",
  "key14": "26RjvWmhXT9XR2j9nbCN1pgAqTMwyzmZ98tw7eaXTaEqmDqKc6nwjfsS7q6Jp6D9kNPMUzQNyJedDhZxfWsB7ws2",
  "key15": "3TdLLqfhouLLja6C8jD1t227PXz3XYcwUUJkVocK3cmqQL7ESvqnQDvE3pgTHtxnDTt8mamXLngP6s6u2ap7VF7D",
  "key16": "4n4s62FojJGDtz1QkbPs5MTSiHMSM2sXVUb1EpvuMN1s5NpTrTqz7UUmDUNetmc9zALmgAQRrBLKhaA35XUspLmS",
  "key17": "5ppyfDTZZYSwFVvSHuVudTaxzExEyjjW1VFtUU8Vpcic8yTw3uA34gL3FdHwmR21uCu1vMTW3ia7oHryXAZGTLpH",
  "key18": "61iCV1JhNt2M32SF5iUqjRP8FRF6EC26zUa5bPJqWMzsaNGEs3TSqbeVwoUK4PV7qHkvo1Qs74WfQN6SfqA43DFs",
  "key19": "52z65TUpM2y914Yq1ojisucQzn9m85qdQf89cnYVuesQyRgZMtPkkUo4qevSr2P2iCtkzzyS2eSnqdeDvW74iiuZ",
  "key20": "gCTHDF2PjjKPEK8EtVQwNMfeTg3gis5R2Cmq9PNAeTmpSAqfQrU4m19kngtRWfdYv4U8Kb6W95Z8hzvjw7k9t7P",
  "key21": "3DY2D6W2sHvX1ZWtbgad2SzieHNYtoUPX811X3nPSxA6eHasEBZQt4HJnMaoZwYiwQmHTm6VZRibZDTTCktW6pK9",
  "key22": "5hMt2iARbH37ZaG2kDug5TPGDW4B7Ei8Mid2s2EeoJPYk1kR5meeoo7UtAvB8KhntXUoGwC3bEVTtMzyqBHd9ZY1",
  "key23": "5pkgw1fh18aMcsM3v1RNGzMkVkfoBDbXN1eY6q3q1htdso3LXHKm9MuisQwNW2FaUXzEKUxqcY5TUqYK7hACBuCe",
  "key24": "4aWANfdE42DaqDMaqeELrWberU2mJcuQ6ac6jD9WW8ZzWM4jcbLQQBv2ztdafcnMbDDSYQCDwdP6RGw6h3oF3Rkv",
  "key25": "4tiaMcUHsvSHErTyCB9ia98XREt3rUtAQqEQtuabrxpDcv7ZsumoVNjysajriMbsncdSu5xXZCdn9eGXJJgax2pu",
  "key26": "5w7pTnt84Mxd62PfHiSta43iDiyVVV1pKiFz7F8PwXTMxWkYQjh6kmXDt1fMsigKMJr3mrBiLhr3cMTVXde9EbbL",
  "key27": "5WSKh6sS7pk2opNmc6g31fU9dmyGqPuheUkMDVY2gw1o8u2eFfzG7795yCwRq2qoQNbN5UjQqdNQg8A8rGRcPwTZ",
  "key28": "f4X2cTkzS2efA9KnmnfkJ5edUp6TBooDgUhpnMdRHkLr9xR1LSm8CqT5hnHNHaPHqDQg2EXFvyozw8B5BEL2FCE",
  "key29": "3oLB14W5noGPmU84VbPXQ5mTXwBD6LjPbpZdwQT1rcDnkTAact1KPxJJyhCjgaqcQQJgfx5vGkYYN3hiDXPuW4LL",
  "key30": "XsM1jTNgK5xrnbBqWEFXpJaEwPxnVVZuasJGaBHv9ikuAb63YCZhuWNcqUxc5DCSErffvbtzMUowq3ZBPdGaVa2",
  "key31": "4aixyXuuQGzvfnxpSWDMJ1S59MYGu3gDSxhCr2tiapqzN96CATNn2BnJXgpYg8m8sKRSyHSQbviVjvUZSFNAxdzd",
  "key32": "2B1WCi3K7Cw5gWEPsEosWQLqXwAtTGR3ciW1qeNaDFscgzosfJvchRKgHtwcAwCeEiMA8hupdHgHY7k4Ej1sZHpr",
  "key33": "Bk6EuexabbVrwun1wU8m1t9DCYGvr2AYgH4qJBjX2oF6FL9nuHMvwhZDcLrZfrBeekRNFSSgGqZLW8iBhh9BTns",
  "key34": "4MCaF7vMWnohNnYTpgXB69RCBEXAfNUSfUJcyRH4VdpPZbMFaudtMZvwKbQFkR63skxyvSUcseLuCzgG3eMm6Fe",
  "key35": "5YQXVpuRPwiJthRgaPcv61crGLYYJrZyNoki5wyiBPpTFk2gT8EgW7gG8uQh4Qk5fJuNVDzNn53rhnDUXinGD1qE",
  "key36": "mP7NjyjjXuDCmmsQ7P9cQvS8E9177248BcSD4aHLdy8ax9hgoFu81kosk6dPky3wAkWZZrfKFMn5P8jvmgKyK5f",
  "key37": "527JhRnsX8PHcjbHSnD8BCaF7mkr8xWHKEp3KVryYbaVodriN1Mo5gUw2t8DRfsR1QkwDeHvivbuNoc6jaJ3S4Vh",
  "key38": "2kFMa5kw9JzKRav4bNGPnhcPjx5QrmqCUCjpYcq7qKbKvA9ciJqJSCGxdMFtsKzYGwX3X4DCkkrckgX8GhpCfLvn",
  "key39": "3ha3KqAwwC52shiaJqhsj2XYoQFJv57DJEJbagAKKN51K23pXH3GVF9mSjce1mjHRC5EWU2jMf63bZMfodXFgFzo",
  "key40": "5wB9AhiGigR7pPkSRasktw4gKTvTXDnJLBk1r33PAi8fxkfi9E6w19pDqXyhaCs6VPKSpg6VTjUt3LAw2Qo9EA3X",
  "key41": "woebZwQcjKmaCh5ASnmR2NKFrBG6GucX5puTB2U9uXYGegSxhAfDCBFYoKAfx8K6EoFEUD1bpxjBrXe22PH72z8"
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
