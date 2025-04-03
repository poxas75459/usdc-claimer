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
    "nM7wZm9VaZrdPKXv2dMg5xQebNj69amW312MgLqkqRweVXPmrT6Nq8kHKQnE4bT2azrvMz4ZtWKnNW6sWV39feX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34PFkHbfZqbwCfo4gbGA6WbtWymn6tR1BQoBPbry8LLjb7vNabphT9F1BRNo9MdU4tJwsvVNp5W3nwaTBMhq9QSp",
  "key1": "33GH75PQUToA7ZaEXBHdD38RDniAzDFZroLC6RoEr2cE4NhM6jVYFYdHSiv9TB65w6akj3xhhqHwqhkwXfGNfjtA",
  "key2": "56PmJuLFwi8BUPyT19zrNLaXJBkMLT8Z1mTiVuyCWeAmLYmQhbJmVvHq9C41Zk6uR6oKNj9pe851upXbckN5a7XC",
  "key3": "EM91r1HqkjAeuA5CoJxnuyTKVop2qtHLRFKGkVgaUi3tGcryYBAouU3jqUCX717JRXra6okzr56b5so7yjvTSPe",
  "key4": "8mPTA2BMttrNgXEXWA4jLjeqaVFJENYqsvcBsuLN4BkCpKQbepdqE3PY3HzJ8YsN2RfYaqWRDCYjfLkqJ1Qss8Y",
  "key5": "3FaRtKGKAms5TZs7MbdEoaLTK5uYMfGyDcjnxQVM9kNYhs74u6DUxRPbfCKcSXiHpzGd4LvMqZnwNkfikYUX1C1V",
  "key6": "3WSa5eZrrQRL38f5SVgnz1uyManWPrwaRSDse3SQHCRvBGZMonoX7g1sAELm2CYHVTgDZqUXCYvjj2fPBEuXdk6q",
  "key7": "2F2ReAZugdVvESLocW4QSMv2VW8MWGBuo2MWSFwqnXXWFiSnKWkGoXVGa1RutqRtbMHiPRxTHNjXUXuarTufAft9",
  "key8": "2Qq6BH2XADRmx25pWLciasU1RHeeZi8SdLPmKmPSuDhSD4zkb9e7ePk4kkdFpq9XQ7usQmWoTh32qWj6dVZXNEQh",
  "key9": "3vND2p9gWugUv2kmWMVDwvekyQ3TgaUi8DKtFwQqr3oba8AKorxJMmgbYdJG86UHQA6ifabkvuJeo2NRgftaWM7i",
  "key10": "3GbnxAkGZYeU3U3fSgUqikVFfCCX4TeEDZ8UAGpjLnyXZUNptYyQu4w2Uqar3cHbgGYvxrmv7y1HjVosP6CKL5yo",
  "key11": "N2k566mzta16uxsyQn1tknDEaKo5ittxh1KyKkSkdGiSqwY4cKRNThYfWW3mLMCCdEYvfppmkRime145GaQqgXm",
  "key12": "SLZkxizdKaShVGJWdMqMoidb2mUFovz9aE1w63Fezv63bKRnBtYofDJuuHMuqJKxHF4GbvBJL6MdCD1J3dzEKKx",
  "key13": "3WQKVD8XSHiWBZ1PDbr463tw6MBEM7F14JjSMKWJYW4Viz1ZiXcwFoQBgjyu2pX53m63NXeocxYEBAkoQRNBjzbA",
  "key14": "QATssWGVXmKRFKm6FxRZ3vnDjT5aPNHgm2t3sn1v6TTMTzoNHs5nPUKDe68Ett2vP9qaThATFWWidga8MuJcDyn",
  "key15": "3Hj6XecBX3Kgv5C31279kcqAaSnY52kSbfCEuteREtgjgBKZ64Lbr4ZVgkUht3gi3MCbxSLnp8DFyrwRGGERGeJ6",
  "key16": "4sPmh2AuP7yHhrDyvgcnkbgiEZ3FyR4mENEVEqGEGhbnxZUAF4RcHvoRzfkR8USwAx78hRWAhRDTN4YGoa2eyUyZ",
  "key17": "2cu1ERKaxSaw3go3npEJNSHGRtkovfpgNxdRHPmsnDoJecmFnBsKKRD6Vdf61238AZ75GjtRaGbujHRfEGnVqV5i",
  "key18": "5DjuJgjV3oMy4izwmJ4akLBq4j5QiwhtBxh67UCkzJjp9kciGzMxXeKgwcJDQ7NL6Kz9khjvuy9cXwS4quAwbhb3",
  "key19": "3Q2VkVrQpVGyDEPpad1CpZouUozqh1bZmM4jhigRaMz4DCup9VKbr9neWKH87jHh7rzZnbEFp4BWW55FsYvLZPVq",
  "key20": "5TUcGB9ac448UudbC4UnRS2sjUBHRakTSbfMBUEGMb71o59KjJwv5XDEyNJhTFVhdnUM1BgXohgw46pBZdDraK6A",
  "key21": "2168hsvbrEivoGr8GEqXt5tKPD6ygYn6EKPzAqZNxmT1vZ9BYT7sMMuBKBR19d9xd4T1NvvqYHYcsSc9CVHqL6f8",
  "key22": "UaaNuYj8G21Sp3aenGfBk24N9Y1x2C3uEUEqpAwdxWCGJjQiVKe6qebSjEdP2dKTsHy4dYUFRfs8b5EE8vSp2Rj",
  "key23": "3RzeCodWjx5mMw9kDteJBVv9cLq5rQfh84LZBawtqoFuUV6yzthjgZFENMxpHre7RytLqb6pNdJPW45D5amVUJMb",
  "key24": "5Fnua8TPQ7gXAL7wswmBoBQeSMFBUdCWwUjxyCbFLqb3pxG4P6YugPJYv8BUq3ygNRnJaK6TMDYTotTLa1W643Qv",
  "key25": "4QLsKJUab6MSQp3twPq87T6BonF93iiB6eUaPfbxiAoNiyLenMgbPLwdMc6vYeGkwX7wJFbgSdLWGpm3dBgSXgqn",
  "key26": "3vJcGBoRNK6Ask9dnEiyo8S1oGPvSJ7LQP9aQH4ufYdoUThSztvwd2t9yfuAz4jAND6nUSb8WwuqjaVCiWPubTRJ",
  "key27": "424HpnHXfPyqsnTHKeL9ngLax3GhdRpsYoJm8A1HYQqugPXtvn8cBjAGF9he6DVHh5fjMkxUGCt1ncXh8iC988vn",
  "key28": "hsc1Yeiy2Vt9NoGadCm199bEomz5EqtJ3BFfeEC4FYMeqLHVgrgcJgg5phtZbBjz83uPHG8Zavwov6owHCNKLv8",
  "key29": "jpUusCC6DwbUj9Mh4XiW2jNWSs715Cb9mU7uNFDJTL7WfLz2xTC7tWcbwEeZSZGRx7d93qSUgLUuMh6pYfdM5q1",
  "key30": "4qxDitewXqyTaX3NeDiv62nRUipazxijxBWziM2bW76LMxBNkdiw5jwutPjVSDWKZ5YuyioM1Cbrv8oxYxissrcS",
  "key31": "48hTtmZyfpgvqEe4A14u51kJiEru3ECJ549c1ce6id6MoMXbURmhasxkeHpKQfVmWoxpoXMBsuyPz2cb6oQn3yos",
  "key32": "3gjpupB83pC9wHnQ7ipgvMrzjWh86aaEJFtaEEvGWLAC2iPB5MKDQE4H4XnQ23RBqNTy2ABuWzJrNCfagXyf93TE",
  "key33": "32U5ZYb6xgunQgJ4fHCQ5G351QtZt36cmbk7pcZjedz7fhDCQ5ftWUBHfyd82rK9ezvBXHkGdDJMu83o7uW8wetE",
  "key34": "4Fo1Mst4N1KFf3LQ92iPHMMsn4y4wS6egrH6xnLxapS5BBfbkcH5XX4B51UEcNB7TAGiuuAdx25nEbE9jZku6oP2",
  "key35": "5J9VeXaCtjvxNbV6FnNvK5GXfz5ST9bvr6krGyGLxAcK4zpr2BFaPZNpKfYKw14hMSz6FnZX3n64U2rxsA5Y8ZEs",
  "key36": "4R8k5kchU8AjiHtNih5TFUR1rui2zBQc7QT2qqaNLr2ZtVjHWkTayxtGsPjxjhY78QAR7QvQVn92j2W5i6dm9hUf",
  "key37": "5tPQcmMa9Zb9ZnwfzDufdESM5TQNC1wZv5sNcMbFuDYip8SCiaMHqJnxQHXXSDd8SjvpvVqQW34oAYxr3UPe97b8",
  "key38": "vVkVZGopbWnK8gL8gi5cnpsBXmtEYkXGJSexLU45aeJ8pVXoB5auJt2nvcUnj7N83Scbq1YCU4XtrDHiMA45Yxz",
  "key39": "3DP5xR1NsPfLkFDGQSwbMUWunakuR1FhoCfhYSVEFq8PnpoSUFpVNsPxXcvzgDGfKXx2f3vdrUVkFyGMjwgzuL2W",
  "key40": "3Y73VNQnM1rDxYGv3AirVvt2v57qdRHTGcSi2taVk91WnUmbs7KwcxJje26MWSANqNiGRRWhRCeTy9i2yHGCLLp4",
  "key41": "2XjPitmkksphugg3LBXDyrcaLyT4dvp7cyPBFKtnGVMMCqJYRqxZRmdH7kPJm9LCpz9czMsuTiXY81iv52ExVxV5",
  "key42": "VqRz6kaZ8jGG3cU76PixaZnNt9W1AtznPeykAm2JhxFucJq3jn7ZaJmyTA2RdbYYitAdtEywgumBXVw6CBmwpHy"
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
