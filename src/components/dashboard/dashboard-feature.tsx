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
    "JQwwVDAHTV4hQhWXuFRCncqmgALDq9G6G4u8BSjuDRTC7yAawympN992R2jTGo8XoyLtAoPRLG4SfBhRF3XNvVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ut9Lzdd82perRBWAhNiawsqY28gVUuJbcZugwx3Wtpju32Y2VmckPHN7e2HG7hqBDZ4zsjUcg4EKxvNBbbNiwJa",
  "key1": "C7nE7cRcT6eArUfSetynVo8GFTYGKn18qUHuiXwqVaRXUk3gY6fPDg8x3gd12N6HsC78uaP59GKHgf3KvXRm8wo",
  "key2": "5SfG4HPF5DkX6ffViE94mGVi6PzaLSGX1NcohLTxjdzDkzeVeZETameH12DfbJwrEBC7SAKFEi9kioFABjWCG1zQ",
  "key3": "39A887gizQTVAeu6RExaznDDZkCeDnP5PfK5Eu3E6ksEVsmXGzHKMC1yNxdviZcUrbWrfzSTWHb5GTZPMZfGFAoH",
  "key4": "2sEb4VbqPYHi2ZcauFKhd5pcKFfpmZsQ5q4L57Tbt5VtWYTQpW3RhbzyvTChNfaU53cuEkJR91PcQBE1UzpiZN41",
  "key5": "3vVab3nHqcHY6XbZdnqp7uN3V2oAv7E9jjjVgiwWP5Qz859jaETYDeeoHGr8mm6wzFaTG8LqcZBUKiVYC8GfgVnP",
  "key6": "2oxiHWZ5WENaC2zVW9VzCTa5jkn8uJatheMYXZvJAfZVw2Q8q35ZxRNfpN696HLTFtZbP517t3dJdiSUq7hY8Qwi",
  "key7": "5Qb8LUShojCPQ2QLCkkj43aNoyKBRh2uWXHhhwfnHJ7CmbdAx5S7JQPyx5wHpJQeyLMX9cTF5xz16e6m2ZFVWdz2",
  "key8": "34ggrNeVYysNzDzEaM57aSXGBX4xSzH6pvN2E2fkTQ5yWwLdMbCY1tBQDHBiHytFp4Q3y8v2tXWspAs1AsU8eTz",
  "key9": "2hCGu9TGAszyYQjojeiEtZqKADVsT6d5jHEwNvFMUYdmuwCEBgtSYnzd1sEXQhnEqLKgANtetiRHUXET7hdY5kWH",
  "key10": "nw59iBD4xsmitMtcaBKfCuBiPSiJdQhQARHAZZHQPSqbV8z6HkyG7ynZYFutb84kRsn7nmTDcpqACdbdaNgzXFu",
  "key11": "LfX3TVFEfj56d5EbafdFK6sftBM8dgfrZsaMDoDRxMu6FyCQC1czrbM1cviJRveM1M6jKqNd5sfv2hJ6Lhh7Eye",
  "key12": "3tNn4gKjbkCN4cmmThodFgZmJhRkkvSSUajdE64AeQ1unqD3BTxFkgNZDCZZAJ5FDWZhFCTHQ8ESZuUkGSBueLnt",
  "key13": "2vVNiQcEpPJExU9ytqERh8ZoNXv6BFcwvWCvokJQDBiAvxFSewxomRYx3KNTmUv3wZH6cLSNnNy2xFPCcrmqxaVA",
  "key14": "4A6AbsW1mPAdi8ngJP36LhMTkWzXajgohFEh7fWcqgg8eS1PnVKjEkRge47BaqfVG4fgQzCs53SpPxwJDKnJHq9q",
  "key15": "3qKv6KaLWJkZVMqJ58oQ7o2bjWR5QYTdvAoJEjmhe89JZSPUfhvnEgmS8p3iUYVdm3oCWbxpS7V1nr99dpAuHawF",
  "key16": "kqxMWG8Db5QSHbTHpKqMxnuGEgnU774CkWsRmnNEdH3HxQHtrWDS4EAhQPmJrWjG4nmAEeEp35MQR7EDH62Qu3L",
  "key17": "5onwfocmzm4zrxmdzv7Y26VSe8JmrpQZU1wU5FnGdhYQeuBjctzZiam7rpzTRb7s97uSKYwbg6fzdatfWwi65tMh",
  "key18": "23SPFbhU6bAM7mJL7q4WKRR1YbXFQpWEAgHySzmady9xuZyFyzpnrSqmERpfHdLrtoASsrUyoSmbGLLD3aPZoyio",
  "key19": "4YW3e5VRjqyXsSJ2FEUibGquDWGXAPwoc3yM1WTj43pLSQiXihUJQ69dZozrxxWVMuaLxqSBgF97bdBidSEaJ9NR",
  "key20": "nSqnMYbNtRRutb3uR7duAhTBbzrQaYaqrfm3o5iXiEsAVJvMJxQqQLpaagJEbvsHvzjpCjVb9raNqa638aqVXc7",
  "key21": "4miL4UHFjDmtJZ59Vs7WmPQvh7Gje4z6tD57UhPUGttcSggE88uiUqwyid3GPeLwH8Eabv5ry1WVJ94yeXxyF7PB",
  "key22": "2fesqtUE9T86djcncu2uKSGVQgQurMo6uGU9Ypx9j4Q9BPMTndu8zpyBuZPXdcDsY2X8BcWvd4XqBnGMVXZdEiNh",
  "key23": "9ZTUyQPq2hSjjWpBXe1d56HeUxdZBpeaNrfo2oFjjDwJakqgTV2r4AJaAwzBXEz7SwW4eehcYj2gukwJaZn6NX4",
  "key24": "23FRXHv8cWMgJmMpwPEauzxgNv4ritr5REdWVxdynu1ffwVYGJycMapthiKqevsWfB7htnXuzccAVjJ1HycqK4C2",
  "key25": "3c5LgU3QMBha31htTcBdksyfeEZada7fUb5D7jRMpRTyZMAuSNjo5NneupJ3T15skWAy5KojQD1DAAmXKv3rNimU",
  "key26": "2DPK6gHKxH34UBwTjSrpPQGDd1pKrz3gqeKCxHLfrqKZJ8souGHW8wz36FKtd8GBPx4oxFCb78Y3PMWjqYvRVXuG",
  "key27": "2usahjitSrCEQ34h5e99Y76htwz8D8KQtUMFbrESLbhpDdQ2NtUZ1pTbJKcDdCzzdpFLaE2ZixS9gKn7zFnFPNH5",
  "key28": "22usDHuY7Zqm8GnKAENQrsSsY1KDQm84CC5Ed7bTCZJKZ4qDhZ4ReJuZdeCB1c5dzCErZYQnSjY2MxiVQAMu4g2W",
  "key29": "3yGmZMZTZEouWrGLwWy3hKN96jC6GpmZhbuYbhXpBhcBUdg4HwwrAkiDYZ95xpNxbej1e3RTAFHHud81Z8G3R2Ra",
  "key30": "5UoTDirf546GkbGv8Ygf82vmXvwwVzMmh8rRofyrQTrJvsBYWKmZSKCwQcr4YCFx7qoH5r11iLfcaXtDJXYxWSwh",
  "key31": "5kM8SAH9cepwQGQZSHGyfgefoyU7nQ5SycKyWuSxwiS63Y5j5xuTGzwCCGZj2dLEBTo4xCV7Cnwq7GRn78nuhTsc",
  "key32": "2f1pqLBeJi96LrkNg7j4vyWJ445sAE7qi99G9XeFzRYdRgCP2AKfER4pQYpHjqJsENqNjcqZrSeTMWQRLdr3XdN",
  "key33": "3pU4ADPF9gULUEukCa3XSH91Ke6n1KXgA4kYQ5RfJh7WcxrGqUvujsnd4fEe7rVCXGAnhBdPawCyNtcGdnUEzGnE",
  "key34": "3Km8m5Gxj5pq7MKs7nkdWFZFR5hJDPMCvhmnuSaaRaTg6i9uUwVTXiJ6rkK7qeDZpCzbe1kj3pRerhvvfk5WEGDw",
  "key35": "4wcAznQfAH1GEHqWvKYnFPiu6wjsCyKb4JUMzc7xss3jeaKwtszsqqdqRdjRSJGsjkS8YxaZzLjBh5vwvBiNyMeh",
  "key36": "232hdEHWMWmk6vBim4tZ7cMQHowSJ2HueShJ9vpDeXropzzzoxxQCpnWFtR6dwSNX2kRen7P7MNHvLr5VV9U3PsS",
  "key37": "55CJUsNAZ3hLKC1vdw1Af13oXZ1uybi6hpQNAh3ZVdx27auAp4fA2WaUogbJMafQRDYYsShdX8fhkeeHbnpAgS5B",
  "key38": "22SMCjycKPWeCJUhG1VVYiBttR5u7K7YiHZ15RDbgK2AiZgxhFqCMssVdWNEbDZT487TYCtVTCQNM7ejqYt7vBg5"
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
