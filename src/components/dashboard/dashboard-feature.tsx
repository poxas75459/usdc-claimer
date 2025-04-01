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
    "5WyPKu3KpicTKRDeq42zdp7GGaqjCwapEPy3HtbEkA9QUJTMgxRwEw7gTjuK1s2LmBNdBNfyUCo4PVfo2ezZBfJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Lm9wVAMEFGKG55aSPJqaTKAArJN2SSeS32AtDBPiRJZ1ditqjpSQYVq6PafAK9jjeqQjXP4n1QEoyyXtV1NFEN",
  "key1": "2e1VNt3Z7se1vyR1daAzjXaAW2RH4TrVeFa4NZbmRuZERNHCBizVvqEq2RB7kw27ay59Zqvvuye8nehdupLSzxjP",
  "key2": "3yFyyFQbec96r4F2MJqdRrrJpe24k5KM9Jv9i5gAYJVRwdEAj4Z2FHcRRUkdGPTtaSqXjkBvWHN63vEz3KkSaeUx",
  "key3": "48r3bi3D829SpmBQXMrmMfaaJ9XDYDkdDS4XcNa5fqVccPNv1MomBVoDoRS8Z2sYNNKorM6rStTbWQLqLDmuqrUW",
  "key4": "3KBv916EF5QaQ1siu7TU9QS6wiDi6og8hV1rCcNZv8jn6EETkrgir2EWuRDBG6vCgqanAY6V3qD1uT2csPypBcQ5",
  "key5": "u7QBCedWiaJDic1s6ntFmPH7ma3Yw9xb3PsnANWBSKVnptHZJeTApiSJhD7Nm9zSChLxUakYA9vRq1Lypr4hhxo",
  "key6": "cXnwy1krQ3Nn9X9fyM1rAT3ezKe3jgReU25c7kX6z4dNaqiTpYqEsDk3ZYKtC1eZyE2xjCVac367ZKyKScQTFoN",
  "key7": "46wUuMdnzWrovs59U55oyZXvNveSGPKEJkwJLdGkrs8Q9BZJFGTUQeudMNed1RwJcUk9Jmifrz8sMJ7AaQjDxaHW",
  "key8": "S9VTkvhbasDtup5rev11rcgju9XwUynLRUVZpC7xH5RPCTUjGtGC2Lt9khQYL69x5fVdanmBr2S8y8qoQMYY39U",
  "key9": "38jyzpv73dm3UiqqCh5pZKqXTSAoAs8mdq6Sr3oYZVqNifVxkPFN6SaF6wDxT7c7e1aRtrdqMMjsj2k6Xutb2x6D",
  "key10": "U9SgV8hC6jgtiLxAP2p5E6U3Sp5rHJTq3Yw477qhtvKA3PMn868bLqp9nb27n3chKXLkcwN3CYipx23SemwQVF9",
  "key11": "55Ju9ebsZ3R3a8koVbEPoypKfy8q1xuKDwtU9YAurfirmPdRn7vTPNoRuYG7iQadxMaKNQd1YukqyjXqtCsGceVo",
  "key12": "5x88rhyEH1nVt7uS5Vhme1DTDr7R26HH5mUgcpZWbYPfXLYoetPMKkT3cCkwZagoe5jskZUyw57f8mMawdbPUTCr",
  "key13": "2sPoQHzKxgSDiU5zav6cvZAKe4TdzLVkGUdPyZ7wfo5TcyYeyp6rkuZM5ALvcwQjqdeaigLruJzPMyZZxmeyRiyq",
  "key14": "5UQbqu4Az3Heo4ai7suGcQyghWx2bpiuQSSx1km7T9cgz9j5Ue5dVsip7j8NghNjFB3t8DcQ5RjF1cCbovLpCCiR",
  "key15": "3gz9bo93JRXR4QpR1RDJPjBWLsBEkamphYhZuxyAjtgg9rXY3Vq9L2QCqW4ec8buCmB6J9Zrr3ABn5SpqNSUkp13",
  "key16": "3ok9MYYYGEocPmKsszBfz4pZv2HVoZBYGbWbVTmThYYUjvWt5Sx48qL3zhYVPXaAXyUe7NEWWXv1Ut3NXNo3rbok",
  "key17": "Jd5Xnogkuv72jC8MFKGLBQ3KVSvxEhGH1YLFwMo7hgKSbnnZGK7r61DmJCRpRR4aGTffuJho57m3aWYbG4wsnRD",
  "key18": "4UpTKzTL9TCzvgcCwMX6e8pEo4dhE2YkAZYrWRjsmSkGRb8m1qFHtrA7qf1HxDNAZ2hDFxpeQRyeV4LJhcuAPiTM",
  "key19": "5nVwj3fN4NgQ5vjPLQR2pkL4rLrGYWMmRxKueN4Q9bsKEqskjohVB9Gx1sUaYxdEi5JNctfYeZe1acQdfZMKbyeM",
  "key20": "529dPJwf5CaQsVSfG6DnBKr442WmDgrFMTWK6uxnz9bm5UvZhdirRdDccidXRV3hvs2YRJLc2uVaT6TWvYUKeBAe",
  "key21": "SGQoLKKcQx1RV4d3BU15p71jSt7jhyCcCLEzr9gfb5aoVH6TJgJtFvDBsmb6iRx3mKF1YwWP7LV9qPKfrcDpAYn",
  "key22": "7i6ndwjdJRamKeTPZ72am3cEVhRGPrJzuKd6rqSsQwCqRW4cUHoDwqmGBaU7KrcaKN4MFf6e3tmSic2xiBirZKK",
  "key23": "4MqFtLvaPbGU24uDeGE1CM7RMBRj3xVuprBVd8AZV8HY24MFp3a3icLu5SV6bLtB3L6KNmZHsnZ2krvcJNtc58jz",
  "key24": "2fL8Ab9QBEyVjiPQuFGnRTqBtVN6yGgJyBuTeyj34ERMTQQptZ4YpvgzLX3ZD9P9sinHdcfmkLfv3XwaZgNtGGU1",
  "key25": "3WbEEbjyhq9Ah3R7LPJoAXWH5VPY4txCqrpB4jDRh3yYGeEomKM919Jy1snRBv2mvCZz9vqsXAfyAffZb6SLiWc7",
  "key26": "2WCvUdRPbksV9Gs9auQxv4xs7Bh2mMTbCfFk45pKXdY9k1z6wUuesgoREgLBGD6fBtdRSGtWCyHXD7wf6nFgsqN8",
  "key27": "2PgSg8u1fKM2gvN9yJxdWSQ4o1Sm54vtEFi4ex1Z9pADA6eYPsK4yR2oXHr6HxD5JdMQHp9GHDFG6EaEvEkfo29P",
  "key28": "2rJuYjMxvRF6ZZwhmJjjrLF9D5ZuWeyZ4aYGsWwARdhzkXTRr8iuQJTJLKBHNM3VaEWN8v7H3CztZeC1T1hJz84o",
  "key29": "NYvjJgkbSaJyoGMgzdYqgXtr7sdMhghiCJio9GDcuF5fnEh5ojFox95tUACbLJVjgdCcV2oEQWpuWPuwNnPMjTf",
  "key30": "283ZegcAYmgyTFbUeEt4mMyGvekPYSUu7jNKSLyt2TMCWJb6gAYNRwNSNNVEs8aessTT1NtvaznV5smzyLBLdGEp",
  "key31": "5uAmMFYztp2r6A4XSj24TAkL9667bBqqYraSk44DU8DbJEE53VHV2WMob2sM76rWojgYg4yKmTjE9m8Lqq5axupH",
  "key32": "xPHYEc2eLjV2gv7JJf1RJ6YcpE9qEXC8MZNaNkE9Y6FiXdGKa11qTx4RumhGfw9kJ1YoGhYJEzYMT6uEufR7fLr",
  "key33": "xXUM7QCZi6a7Vj4gCW4A98NZSAPU7DAK2khH5AFquytjRig3AaghSDBgmJTuzkBf5gzFKW5ZsHmMvc2Pvg4ZWBn",
  "key34": "3y8v1oqdynPEZ8ok8JcPKQMefoVLvFAwyCfdATCjHRbdR2vAoKcV2egx1aFTB52UWM62KDMDsV3f56SfvcMUEHGK",
  "key35": "3NYii7oFbcgQzyPfyKZpUW3JtLxmHta8qgpx6BUc1enyLAUfU7qs8jupt33ZKmx4ZF5jpAPYggeg5qcsJaRN7W69"
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
