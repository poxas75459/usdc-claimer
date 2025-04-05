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
    "2ZbQkmD8Fdj696SCLxC7qqMqD3fp64QUe9XsdvX5fLfheX7SLvPkxbhP68ZAJN3uWrRqoEK5HKMK5KyU2JZvg11Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LWAncCrNYpB4LimByAur367wT4yvtmNMA2dTYi63uRAVXVhAMzVWsBKyv9pvNQgghitT1qksmrSyHKwKEQDNi3V",
  "key1": "31TmqS9pZUPyqvJhcpvu25XCkwcagnkm6nJoKWpWN7eE4NoWHNgesPgqBwQunqeoJJvxg28YFM8svNmgNq2Uj6SC",
  "key2": "2fSbYAnoFnAvszQ7s3nUNGxpckUi7S6cXdbEsQN11eb3PLJK7fEUBypZhBv5ZCoJjMKYadfWHJV3Unx3FYV89zHP",
  "key3": "qDpuDRc2s93k1T3MX3Ef6ZXVeDzV7Q8m35yUWfky7L9zov2RfD8YdKa9LjYDVY26uLXCtcjVwywRAUyga8257PM",
  "key4": "5XhuiWxY17YZo8u2yqtyJ8i2gEJHAsQijwH1UDgF5ZCnYrFGGrRhT7xY3iW6VcqJc9an4jJXa2of6yx4DaBWYHae",
  "key5": "5iDbFHCB2hWnhrwEoFKyiszM7CPnexBU1Guv2XJT7aEZTLPsqnyrm7x2VciTuaXtuLBRoF3YCPA6FMJUnvVU5BFP",
  "key6": "4s1LrfybKkKE28FAMKW16XkHr4zwnrMeKBCyFjW5e44BqkYAVtjZSxZpVovLH4zknncUQR4mpC4zxQb8JVYSuY5k",
  "key7": "28LPMtesUDtbh7HPju6ZvkeEXDYuL4eqjqc43d6DYDq2anb3E415kyBVxVkKqkyq1kqTHjjdvBWccMR6i13z6oGQ",
  "key8": "2zYov2ap7oyYqts1UeFdP6fNow9bfszXNBe7fAsEaVWartHfR9aNLfopWXZQyFiKUS6heDfAKkPo8F6VQjMWvNvU",
  "key9": "32ktyeavTtkP9T3V7Smaj8LCwTkqKh2ZgpmowivfLwnMTJt6vDF1KYLiiXbwAHw1AFjV2ZVRqzagLs6iV49bkyAZ",
  "key10": "skjQH1aBCm4V883ggPbURx7WcP3HnKb89qWefmy5yLrr4mZojURKJYBxWCsK17nRZ398RGQutVfMQHsPM1WwPmy",
  "key11": "2kf3GescpX4E8KUAWx9rkR3pLEqLbuWs82KB23bD2opAFKswvoXyiLg6Q1S6wfCnK6JE4XTa6ALZLByYZF7UA1ab",
  "key12": "R5zTtTumYgUoca6rKVLje4pHrMTYD9DxnQbNrJPmeTT2E8UrS2Nqr3jf7Eyebeo8ViVoVbyPYavN72drwfi6CmF",
  "key13": "2YZmtgq6fD4rAtAsWDMtj1zdE694vnijvb1Hq7gjk1gGwiK9skDbrKcfpx5bZg52nL1NKy9AMddnXDL8X5Yri5F6",
  "key14": "4Vu9KN7zBxPF6unz3axFqBakygSa67KnkEojjJkMZGB6NXxr7NKiC8jA4XhYKHL1BTjeShjng8scDkRtQD22WeqE",
  "key15": "2fYSeCqHSHUtyk4d7mWQLjxNHrCnQEV9CAuspQxABirZdBYnmhdTQqaZyPGADpq4VPKtSuNjbdPNsS29U2GfgEUV",
  "key16": "AkcaoKSppyVDF8Pv6kDDmYtEsFFSn94xb84XoR59vFeqHpoDJ3Ch7qfz5NCWkHbCidC5Q9MoWtnyqrJ5fak4HHu",
  "key17": "8i6SgeiimxaQe1PPihsMbEzeZXrcYLsYy67b3V3sUgQbXC4E7qBdxd8tAC4bXQc8U4dNSWaYy7LuPhCZgxUUj9Q",
  "key18": "51un6ykraKAD3NTQ1NtTzBJtDwdUT8py2KSoU8fHVFfUgQMvmF1v87zB7sYhErYCpmStHpQdsxRdjpnhgGPAvg4v",
  "key19": "5jcSuQx7aZcFDCjSqTTpkn9eAqa9SEWejoXXaucq7cmX3XmuBqbZdBWb4CeT7koYYaeanDCYhXpN5gcs9jYR2LBT",
  "key20": "4y14FtN9imrmQqApLzzFZRoC9HjrLEqrJaB53Jh4RobaoXMGUoLfrAxqD51hur4actmSgx8vesN7apM2ex1TqX2k",
  "key21": "5A1bHF9JaqGibeHQf7oUXkgYiuVo3sNZJN2FJddCKd8eQf43Dn9fdTy1h3nLcR8PqEACi8hUV41tXwyCjvNdVGmR",
  "key22": "5dj6U1LuVNaRtaZ5t8EgYMz22w74mJhEiTw4FmfsjnhrpxEe1nCf7v51Qp1kPEWhDw282MTuLHUdmBcUF5m7c3vh",
  "key23": "45FJaCcNhFPDt2AR1JxaeViadPKYtYZwPGKV9aPdK3juTxRiRn5ohLM8TCZ2tUdpcPpoyqajC6H49i7ZMSDqj2W1",
  "key24": "5J7GcNAwttx9fY8y37SEVs8BwfFw3vT6oiJMb4py4MySq7CPpqWi9aypUiar4DT5BrTekX7R8D7kgATWu9neww9G",
  "key25": "2TmdR5oJBNTwv7SR1FXkMDPHEDdBySeQTkU5kdLAtUNeoKtySX66a437DpQC12iugxVWQ4pMsKGzcXjbXbs9V7xj",
  "key26": "3eNh1fy8vDvR6cjnWjwis2u4jSjtRUHvG89eVYBE47SnuPgGhM4zZXN5tVBLzDgqLN3YqnoQbnehnPnWaTRvhmxN",
  "key27": "2U424rv87Yn5ZLQ1Rj6fxhdC3LCmak9QyzvUsntHu7q3sFmAcDsPrrc3bP73JHbAh7h95Kn2SYSJgC9PPCSfcYsX",
  "key28": "wEFHhWnnBVqEyAPQaY6FrPMRv1fsNYtaZKVQzkCVzMWBjtD3zBRRy1avS3s2NeTi3XapvskEG1CB1MMPdDuWDDn",
  "key29": "4wfDDa3jt4JYNPVcSpJcv8KLhuwi591PGD9uS254Mk9oq25ux8mcRo9ek8dut2ufs59h8mBC3Yd8QRAiJsUBFe3t",
  "key30": "GsMLJvsje5PsZ4nudSuPQhCP3shaH6StLx6kzgt6oaNNGuTwV3RhoNK5YnWimt5YXGvhLLG1jvcrnmKMicBh8h9",
  "key31": "5netRvYuzD5wcx3LyLYLL8Ds3xMrpq7VGytrMeKv6ap42uKEW4gHCVeSk2Yi2vBGuXRiCtLnEd55xHQNSDRoAspS",
  "key32": "M53MQ7HdZhBXaHjzXDB8XbQTbb5NJTRghnW6VoqHFUzDM5rZUrjhfHLKaPvjjoXNdvRk7sazAEnSBxeP9jiD5Va",
  "key33": "44eFPN1vuTCgJwv3Z6h1qRYf9t6r6YvdhgjxWeQFhyij1kVqAJP2GThbPPGEGvPo47rP1uqxgmUoCT6RNDoFzKPQ",
  "key34": "4ukmqKPgCd4PDRtXDLTiat3JAiMFKp1JvuVj7US62G5bTdV1WM6XiDBfVsvjo31fxU5v16bgNC8BUgpdH7nBAQD6",
  "key35": "FNzVC93mcfToeHnFGg8hywaXSa7XPpxf4ewQVjJn5SVHN3hTs1npUm3H2e5ZbkfArzrZ2wDafGqB9KWBtBeBSzB",
  "key36": "2maygKJt7NZvtgKmP267RBZKHFqPDvPMfnUquG8qMsHNP1jLpAofi9wStvG5cC1L6rBumuWrZkFTZmwzawfXyJpq",
  "key37": "3u4wC9xRKpeevTUn2oJ8pcf1sDh2JTLRTbkSdpDiYcUkkVBdajs7CNHC6j73g2RqxUALhTisRXGkxhkq1ruRLC5C"
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
