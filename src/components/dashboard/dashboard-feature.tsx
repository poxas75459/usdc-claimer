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
    "5WqsMSizQceqDPBH4G7hwoRrmQ7UVsUkCXvVtczyFXzRhnthViowk8ntFz623uPutaqpSvnSiL7Unmrba3q1bKPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51LrMDWKrsoe8SZ1MZTq9CnjTemVnhTgwk7a8LGuQKj438NRNyX2HMdEnq2yj849UB1jxhDgoeD9P8mhcVXVPvAi",
  "key1": "63Dxr1J9m7nA4TLn5qLctkTfuxwenJ7cEeafGVw6nRFfScNTMHTHx6ZVH5ZrDjWhXKJcEkzojDCzZ6MK3Gtk4pFx",
  "key2": "5TxMz4uQmYNSXC8WBDeL32KTybZ5Mmv8hC4xF2DWH2gHaMNThCaZc4yLEM6Z7LeR9k2aiwabgzLxpAsoF8pMkFyo",
  "key3": "5iReXGvBpcQVQQkvCYWKQobBXkUkGaAdzJki5DVWdDezuv27CoVZcZ5NVR2TK6NKf2b4K4fAUF845aCaJBwgS7Ey",
  "key4": "4mjeyYPxsYHxRzGLT7vVGQyAiDw7p8fXocYmEVBN2gNZ6tfqfxEWwUfBsLkanWq9keuD2yaWYZWb4WQ6HhpvgTQF",
  "key5": "23mFAXf8j6wL12umej6QSvrrm5zEP5HfYxgxmgEzRGpffj8TveDRo7SKsfLK4PMu8rk56Mqfbs6quYoST2jieVJG",
  "key6": "DejSVgRyACCLm2rSre4vjdXa1nanMoTQUziS8BQaLVT3kgYToAZi6f5Nhum3oFgo8nT6FZWUYFo3CmCnGABjVHP",
  "key7": "5NL9vJhzPNVa6NavHH4nGQCnUpJG9jpDvTzh1EGjos2xingNkEpBeiiQZYA9UbRY3skGoPPU8qmwJAEWnZdujVbn",
  "key8": "2j3FDb8C8ba4S5bn1PrJpPCtkpqDYwtP5Gk2GbFr4yoeeaGzt2iyRGLYJ2xV3bUq2uGF7f1UwTVwriC8CtNgRuqD",
  "key9": "aSRSWDTZJfznaBH538ScKLTbqHyC1GtZ9LYf9c7n9bqRidMA8mrd1Me9RVws15mWd6CCK9ju18AwfwnVg63ini4",
  "key10": "4FsJem6zyCyQ1o6AALG4fEoAFoRYvZzMW7uYnvdtCrUQbx8n7vcLWPFBfPfcquGCJdqgVD6n5eYUarFkxq9aTc97",
  "key11": "2ncFrNzYT8FVkH7VQRARMSWtJoRAuF8NReHE5S6gRbjPibQDijMvxUmmcdXhyUMdg94RPRwyeNNRQhXiUzfwrLcG",
  "key12": "4jKHHpuKC6JwVc1Ew3pbNiHivijKdfHF9kr44VP3ivhZP2Dem7NkmzquLqEQV4tbCSAm7u1xuVw4Rh1YpRU98rA7",
  "key13": "4dpxeFrAFy8YHexQW7g8NyeC5koJqqBXsR3RKfyyVZnhEg7H4ozYp7QkjKFaF7JMiBQiDMek2MeLuE9UyTWV8EFQ",
  "key14": "2cvw1csMeV73imz9ejNqJBJ4CHRjL8tVjJtFy2zFuuwJed1x7fD1sJYziAEtfoeJemZiAi2d1CQZ8VQDQRtLfk1R",
  "key15": "5kJc24HpvQHVAMMmxzMYnHsNRy2tn4GgaoBXJTAzjxhud3nd4nVo7wqUP7L9SY53tuYXXyc4HqT4NFUWV3grE8do",
  "key16": "22LXzgRaNpbBbuyeN5cNqggaNrUyXdWbA8RqfckEVjGa7tJDfRzV7zfJV3hXRtaMwsAaxhXzv6TRHBG9Z86BwH2o",
  "key17": "5mrzsvWi4gyoCbAugsAq73YWqWUWgwtb7ppyw5zwj2BoqXDysPXopjM795ro5vTyTehrvWUWcX6X3efUXwwXELPR",
  "key18": "5iMCox9Yo6DH7ZErQtimRNhZGj8qPJGrpS1jmSoj7B6EXiLXcryR5n8kP419KBVQ4vsP3toewziGmsoMQXcKV8tQ",
  "key19": "yAMhuoTL6MDeviXLFfu2tZ5qikyx7ySfNfAAa1Fimn45aRC2hYHhwGqRwn4hVBDDQXPMWkmqHW8wEybFQvZPpyR",
  "key20": "4iyrU5aWQPbmJNvsZixNv17x2mohtHpPkDhjdLfir7SAHs9DTRm68fiBwaRUF7v8acQdABSSAn8Sm6oHhjBxh16v",
  "key21": "4MQAUUBwoEBKvAoJyh9Fcaa3AWCsrW9MuGjdSGoKUydWpj9VDJmkFbekrPstomXNLRed3oZdVKMJd1vGc8Pyh6uL",
  "key22": "4fbARUzAFN7a6FzGCeyHVTiHwZAfe97iMovQehtJa9rBLXn12bEhr3KrisaZFPptz1m4jhkRbPQbLS293RxizZDz",
  "key23": "433AUqYCFyjq57ckwQzfufQav5j9oJK3JXWfdtz7WytEPz58dWp3FR84Q5FpaLxehiQCN5AesE4UsySYUF4eEtG4",
  "key24": "5LTKCd3By9HRKqLDVuznsW76FwYuSY5EdFKT7KL6wf4toi8Eg4Qa9AA7BEK6aKVD6G6DZvDaQMnwRotVH2WcJfsz",
  "key25": "4STqU5MKkRzsP3Bi2gcNQ8qcqrLNxM8SjE41DXsZSox6T8P9CVYX7kEfnGBFSGeqFkKv9EA3eHiMjPhgim4Yz9Pw",
  "key26": "4cdAiFMoEzd99nfQjGJeWJuLNj4TwrMGskf31yFvvJ66GwZ72MtoEGVZgJ6gv7yp8WmE4bGwgfKn9AASv46GpCyE",
  "key27": "51Mh6CR7r6MTSgV8y4XWqDcEfsE5zDRuzoYaKU5YmTxBq5dUuXwU2AMkprXTjXWqUZTnUFy2H6jP3dW4DyHzuaCH",
  "key28": "2a14qhHP6aF1Fp8f4ThnwtiLrehSc8AfzZW9ZSJSUhFXuHcn7H1dfBpH7BESgTz8C9LjJAERCvHZVWTDUfg4yV3W",
  "key29": "3PAtmn65XMJv8eMUe6SwLKkWeiUT6WGwcLv9PsjvcLCCLKKH7hbBrJACXu64YaXFXjMuFFkarwmrDyTKisPDABzX",
  "key30": "2X26C44jJ7QzgUunx1CvxskUFsqhudyTK2KrbGSWcKjpyBw37L8Mr9geoqyGSqdvERGVu7e1ZmGez5XQMyHsX5HT",
  "key31": "4ZHWdK8GyThR5tXG9LDD87UdEpXZmGELJvBhHKmLp9ioDxzZdBswfWqnnA3uDabmttRKMcBPpxgLy8TtxXUrtdv3",
  "key32": "52S98dbVhH5h4WY5FmxGzW97jy8XjRmW1niAWBcuk95nSRe3BxZDu7QvzsWhVbq8djvDvmBLJEgDmjgKBLU8ZKK3",
  "key33": "8zZxe1SAGddKchmgB2g7VVzifR4Kh9RnWUvBfd4pM67zRre69JEqBR1gzyhhcBW6uxG7wNtWrC5Dg86aAyMaQnz",
  "key34": "9bT1RqbcfHLQwiGrTHt6Ko8cja6YWz1rMAeuF21ntiYufJFHjBCiWDc5uN3kY8BsAWco76V3oMbbJTNPq3sDVrn",
  "key35": "3R3aU39K5vm19FnJmEKgKeDdP9RgKc9pEo375vj9VUqViJRQggZzvPWdQ1MgmmzFt2VArXpeyhDVhf3fcXGSvK2r",
  "key36": "57n1zFEid8RJHkyjwPPsms9kZn5iuWfQ5gJKYUK47ZhbcPX8foFULmbdahV2mzUTACh32acBiqZjx6BeaxPjPvgx",
  "key37": "2kL1qYZbFqzJvsCo5U77Srtm5A8Mvw82cCNaV7kNicR8SKrmTZYocposBXYb2TiFzMJfLGHJG2ayWTxP99QTDhJK",
  "key38": "3TQGsMhc7ga3mUjY5tv5GvkxiGGEskFDkC9Uh9XPnKiVgABsBDD4dQ2ZMFCk822VhkV3ryKtsuCxDzFZW2XFvrA7"
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
