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
    "4yJ8koqcWJrjw7iSoBsqQGWH5NkvuVFFd3jwSLa8szmoFGSiEvfjMuFiecVD2hpKhDBchsc8JhCJf2ZDRtoNs1Lv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "318AgqsH7X5ykb76X7L6ed7QGV2X5oQKVzn3Yr8aSpN9ZDoX4ihzHhQ1B2QxjhXZP43VpG5LLS6JcA8Vamqu4N8D",
  "key1": "3zpUZ4yn7mu1EiW3qdVMQqsChYRDTi5caBkANdNUtsch4mLka562NUWxuK4pfL1sagy4J3SY4KP827ER6g9EEhWA",
  "key2": "xvPut5gFYBY7R3nJD1ewjiLBbNpbvAH8RzFFiGhtRSvqxLRRmNeBjnUWrSdJVuEa9touZjBfbzH31rGdK5wKPkm",
  "key3": "3mNCBh4jF4mZk1BKNjkPMc5zb4WiRHBMyBT7NFXnYDwwuKHVuRHfLLCC6VCwYUS4CdsBoL4YrHKAq7Nvvfn9bfWL",
  "key4": "4qB7jCoCKP2Le478bVfhzARPpwprszm62Qd31p7QwuBaBVeDibeg9VwBA8My16xoZEgqd3v3TXZt5VYMXTVfv5Et",
  "key5": "49548iPHBZCSUbrkantnrdh4tSQUU7FwrLtEh9CacEfMeox41vBf7iF3kjxkQzNbJ1SsKAPUMC3Cn6vvK1dDjE8q",
  "key6": "3rCCUXHAGXDpiK5u6qFSBsPVrvcSDcC2UqZuwra1T33NQkJNVRWi3MUffXVRmmXKtj5pE5srob17pCa1m7SDeH8f",
  "key7": "2xaXYwSmBK8kccQMTQuHR9MX7DbuTGXG7HTetbUH7xqqwn3KdXGvVXAbxj4NqaYtxez2SzsZ6uKy9uamDTft9tya",
  "key8": "3AQs69KQZ9nSjFiYAdLygkD3AQtLcCN8U7UT8VnBJ8V84TXVt4xyYgbbU9qo86XtMwuLGUGtfM1hRKKxVrA1syef",
  "key9": "5btzmq62zraSZDgAGQnMsuZEJmmQrhPnbU9mYP4pnN1V4UQZ4FZJKtLuX7VKP5Qqs84APw5NJBswh6H1FKBTjmJe",
  "key10": "tyqHrwALZUXiZKiqjFUNqLxUvaqSdetF63FprmjNVu8QmmiGdVXHgrF6PEfU5iCGGuSyE6NSaBNCvnp7EPMiBjZ",
  "key11": "QvSFUw1MJuxrdx8RMvgC8mzdA44VLjBhM741NFZrAmoLL82MRygejxrXbutFEcEC7rxzUbUeyZELFzNKftCR8Co",
  "key12": "gn3zNPeb7tUAcLX6nss5UPWMumikLLENAyr9d1vtzMsVVgqJ2Ed5EtvYNpyfxayidpD3BqJ93P8smaZUzy6chEC",
  "key13": "34UC2qZTf11JQP1teXUCZhpFbMEheYXmW35vSVLMxaw5HPeLXH128v9ynEBkarbYKjVkRUN4oteFtnUT52eAKpEN",
  "key14": "2ypE1L1j9pXcJui1FzQRy1BUJ3ufAtGCBYEcMy2ZJpdqEvPVzTFrKb9KwXkYeSgMNsEKhWK899aQvxajFn5AtNwS",
  "key15": "4XyVGbxYa4RKjdrZ9rY6AKcHdp1foRiuVLxkEYoHGFKMfQ4zqLHaTjU2PHqHnaDdUqeywWyHk7N1tb8Grq4f4FKL",
  "key16": "n6vNe5JJGTye2WxWNu5DEx7n27AEZbnktKbsWxTRZFmNaxnfozT4KNEeFAxsQTs9ei2BfdDUG8kE3MZHUa1VBwg",
  "key17": "61LRkx7bHi4HNkL7NuDg6wsNTZB1G9jMCudJPemKByYx5ZCTzipj4f3W6AUQcYMRX8E93Guzy8UcsMdMMJ5ZJJde",
  "key18": "4dpj5e9WCroE5DVNRSWUEmLdRU2wgHxd5KJXhA4Tazxe9jYk2b4fP6ZTGG2sdXdr4DvthFa6YeNE2pKDevwcC3C6",
  "key19": "XXv592RgNU8wnpZ9qW19r4LnsMNiXGfsqwr8Fqo7ihjn5gACwar6NfWo7BUZGDkAeaqnDPtSftxcjUPGuziLwRj",
  "key20": "31ffnav4nYyeFGrG3sPjSQgFpQns2H4s8bwa2X2pQHhaTs3N6QZ2uemwRevoFjF44BpNs5FAdRTvvxLWRjzC2tAH",
  "key21": "3mZCe2KixPiqwyqj1jvuECSxDPbZ7pxjh99dS1iMDLeXHSbPhXsjzeEUesUMNgGcXgxYB1oDhzrUJSiUAQBx3Quo",
  "key22": "2EdnPHTPjgPktmbF2JoaCNqELEyE8dc4GibZYFfdaovZ9kpm3febk3g2nZM9rZVPy6xhLMf6Xq6VyABmdUKziNeY",
  "key23": "2jSxGVE9s1ZWdsLuaqLtBTBaETnHCq57TkRPcq4e7nV5iErYNKbohW4F8oCMhHFNTthiKb6JwapZTpqVH5ZUb7bn",
  "key24": "4sRixJPPaeDTDNe9qycsQ2ch3oeoztCf4vhJYnaV1AWFTQwqozJry47Tp1v1aa8tMDSvZEkUiAV4rx6gRWAtMPaW",
  "key25": "4PhXAzdMioT3vdx2X7MprYUBz6bNC6eohWnt6st2SaVa3bukx1Dz9JRB3iJKCw9FawaNmPUv2qrppU6adNfyzZKf",
  "key26": "QyqeynTHAJBpmsJuSw1utdxqJADPtivriY8e3mWmzuVCRjg5EozZMJru1q949swK8zfNdTACBzSeACQBmzJQDN5",
  "key27": "pvNaZMycNjhG6a3uEJpUCbzVXKkbfTm77LRPfepgtvaFAvtgJJoMy5JKuCW77QJ9oXAFQxLM5m9zK4FKF3ULu2T",
  "key28": "3ASjzJEm8VCaQixUgBoNxCtuuYFkiek16hZa5zwnfhR1nWsjKX8wCH3EzxJP6wS7JJiMfpK6KQZqGRkWFaj9GZgJ",
  "key29": "3WGkEqAUFAmXfgg9zBdHPeXTXX4yS3tBB7Cs2T7x6kuzM4AHJ882Tc4s9M7FGmDU2ahWFEr6UuraLNw1vPxe92Jt",
  "key30": "CwVvQpNyaVfH8UnAXpYL4oPVHpAe6ozrt2BdgEuTC8uJPv66hdbDVH7UwpybQhyQ2qy5RwA3zhGnCdHa8YPmXUB",
  "key31": "2oqnZDi7Hrm87zKg5TLnFqjaaSmJntGkkfVDnVFXqhGqUPUq6XNfKLi3V7YtQCw2bRuBmzDixpvwjvBmfRSuo2cM",
  "key32": "45ZSYR6EWqwTGkoHLcUvYdUBPm6JXGk32YEZRBWwVnCfG7Ghfrb5ayqzAg7ggg71PjbYU3YVayk4J6FkiRx3HaVT",
  "key33": "HsXJVNEdWd89qR3VS3tPs1iNvPqDHjZE646DqkJzrXmHQNUwhKXYbCA5SWb86uUbZ9LV7tBb7kFTskQVXpye8NB",
  "key34": "2UXasCAFxAdHVHyE7ULRCBGiSgiribgCb533S7H7ZUEuBuMaNoBexjmyfmguxNvYWBJNj7GGhtxqzMLwVVJh4SY9",
  "key35": "3S1RE8fDxdx3pVvo9bc7tPqwEUUDSjcqNVuGr5kSsMZyAQDU4wJyWZRUd2yu6KAep2kBxLVdRHgMdw6gR5SQr7ee",
  "key36": "62TVTMBDFsEXJy2SntgXSDdsYpTGRLsh5QT7E8iA3r6Jyr1bSCXncqYt4hhQ8txcfXue8JdBmPdpiSnYbbFfuhbu",
  "key37": "2gaxnR4Ju82U7og2pg1QkSDnfhGUxB5XG2sTk5ZeyiUTS3uGpYwRofzW9q95ze93bBeuwMcad5HtrqJUQEsWAFsj",
  "key38": "592qw3hUnJ82RHqQiE5CZCxNivVt9AHKTs6hiatbvFqqEWBNVSrbt3EnqTdokH8q6RNcBN13xnP4ZgWrFz47u4At",
  "key39": "3PzUCh8MjHMoBvzZLiUugmKSkpDC5drt6b2HajfGovqUDuMPk1jV2C8qk3kYsRK2QHDiZniLdXH7ZDwUZcuB4S3J",
  "key40": "5wFcidBiPW6CAfm7jED9qF6L81zkvoftcZxpKqEsHLPxV2MNTGoDuk7CCS39m9FoFxaZBcpCqTNpPQiJwoxmrRm9",
  "key41": "5k7AYmNfcQaJZktkuvVdXxFcmGkLonNNrMFJrqSgL4c7ca1SPoqvXbDWpGsf5YGxhVNCxm9tDv6Sc33avLrpRfVr",
  "key42": "2pgVnxbdExWqX2iwTXj8m1EQWJbew7DkE7s9ZBRWy9XALsewnDyZQPeykoQTMUKdAvK6TjpFJsnu3NNZyz7EuGDY"
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
