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
    "5BxQJZGbMZNrgZ6aTZPVQVTDkXf9vMBmvipgsuBQj8h7qeSHsV8Zr4Ggfv7psZ2UWtHeSbBEtq26WTK5CMh4tPqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tdVg53agKUKyrTXFg1HESfwQQ85yBNTGL4rzpgE3RacePAQ3y3ucKZCD8Sn9zwR6rCxnug1PPqkJDYFRudcwXtA",
  "key1": "3DDJnm6vkb1EUbwPrRzGh44JVmgbuYv9FY35tFwbAqZS3ZHNAaPSctYcyCTEpM6A28XstwV25JU8TF1yg9Nz6g46",
  "key2": "5RuWxY51zeu57xDmGcwVQgy76nZDxN5xxDJA4bKbdbYSiFf4gGAEP13phfmgRnpWQB4HbRW1Yy1CQf4VwwFhLJbN",
  "key3": "3uTR8Fh2P6E3TWyXtz2acwiyeMowxc6SDU5e2iqPfXuKdgadjTqCrVKP8EW1fdiPbm8ETPmFrXktT3YfcZM2FNSN",
  "key4": "46e6JxFUy3pUKhQUZPpbBsdGBqBtYiMDtTVi5q7xMkBAU1APXRCAudvc4NqcZczAW2E2TyY9SP9EyND7sf3u4PQ1",
  "key5": "5wnFmHf1WFPoj6s5NozLMFFTFFNWyFY4kvdTX8kDUKw7xeoepaoKF8xyDMXLFgq6XrUTCjfJn99RTY29c8J5aDSY",
  "key6": "2Ba26MEHYrygPBm7qzTyusjq1niqGNBopEjxQbuX1TqLA8GGE9VJ9mjXMUSxwbTven1X6k3XE1k8yH6eoz4ZX7jK",
  "key7": "2MAb6CKXwrtQzTwZ8UxpYQjhMt4GzhYoPjf3UkcsvYEeXMkP3BdVCx45nuawRRDAiqiLE1VUrLd6LRUg3MaEWdgR",
  "key8": "kkKyMsMcW2AxoM7WssTuUuQzqw5HEMt2UJqAcCXgYkhVqWiWLUP5ToFJeCDRQcH2E8Jk91tUZYS52Qyw4JRH8hp",
  "key9": "2nv9CSC7KngUTCQDKfZW1RZg2jkLjnnPPL74HpY2yJUbKLLae3Urwmd8gU3q2CaoaBYDd2CQKthJ7xCXN9xPs6ae",
  "key10": "31t7HgbKqdun1Q6h5APdaV8CJ8r3toQSaUX7SxSfkkTFCH1Xo8gThf4huwraaYQHQgVhUKbqtTdygf51ZbATBkGG",
  "key11": "2rvsUjwwCTLBem63KV1nMoRbKZWah8CPpH8BmZqExBhZFmfq7VBTLVydfFMXNf9ihzC8LZegTGqe9QnmP39KLmH1",
  "key12": "2WpqVJ8FCDe38hmJuai2QMUNr668v33v34ebfVkhxzsELw1V5BvLBWshVkcEdLpgqZ4qfXEVJarinyPA3rQkB3Xg",
  "key13": "35GGNPiEoNmJJiV5w8T3TdwN6VMKfi46JAL6tPy7bM2WCyjrdVnHDimR45kpi5RQZyNmpLXTbcWnUy16yspopgG7",
  "key14": "3uiSCAW3s2iP3TWwfZP3yh1DVodXQAaJcda3kQ3NQVho5QZY6fipauDvJBzHoLKik12iR7u5YbVvj987JZxogoJb",
  "key15": "5U4Popjt1PqKw1CPZ765ex7WShDjiPHkenG7PrPjMp5tYSuGYf1SuuuMrVQJKP5UAXGbPs2UxUo29F7LrYtt7h6c",
  "key16": "3T72CC9RqDs5nnnwRQHZYup2Kv9wytJCEq7gLZLgSTP17ktq1gnWXsd7JKuYmNwkSeYQSrPRuDEzsV7DXASFHELE",
  "key17": "4hFnvSw8GPWJ1qPcBiz1SqdBVUUWLP5AZzW6UJmk1QJxiD1NYeuthRQ1nCZzteYUioutfsmGGMa3zEoCWGGGdRgZ",
  "key18": "3LCE5aKf5QQHHFpHjDhexondDxXT82Gwne1jPnFTDTgoobC2f5WuDkeRYSd5PYgLWhUhPSKraTR9Lrj3cHZFapYS",
  "key19": "3iiZSKeWxdVDba3HGnpeV5KqVKZXup1Nkwsys4fCGcs9u2WUmEVgEETSY88TKpJjostRh4GRjoenNL88T3HwRTPk",
  "key20": "5cbPM8RpJdsoWJ1qzrqrNfuzYdCrnbphBvYNTRCLBqwMVpxe37Lrq5xyjU26e8F5o89UbTVmw6UyEerNFHoatDQT",
  "key21": "22ipcwNJ319nEBvpuvJc3XwBF6vhiVVG3XmJA1FTEfYRRkGu3RBaRbDdPwFe9T5JoHCZV8KNUe29ubjixzY4Zp72",
  "key22": "5aDDq4Mcs8MpPGnazj8P31DmUEyJ3G8Y6pwQSRsGLJ5doutw9NZrGN1ou1TdjxaHTgS7DVZrpzyuDwanBYXVruuY",
  "key23": "52mQjgz2s8NbQqbbdwB2SNvfxiMQ52kvLd7yTXeZcaHFYciCkdGmTqLH5JFFC7ooiKXPx1AYBx95tDK5ZV1uJuZu",
  "key24": "kkpsXCydsoaway8RJqyUtZEBgALrT4ZvTJQyq5SiF9qKhN2BNMGbEGVmYYpmVhAYAVjUSQW194sGsd45vdMGVG4",
  "key25": "47NSvFfH6cZPPsH9DoaAdLEpQDbUucjWp7v66WaYPfUwv6B3rvdBSnYjE9yLjMgo6tDHdmex5bT7fakqVi9Kut5x",
  "key26": "EitE2bMnyNav7Na4Khk2niaG5UEwMazbKUR1XQPQqGb87DF2XQ2ABGPjS3zrNaf6Pd1TrdzVvWCG6gDcwNCBjVG",
  "key27": "61U54Fb7TbAqEYyiiZiZ6C7vyzLof2qeJKhdkVwCf9cLJ3MACewoCes9FKcWQ29Tca2zg38dkMeaEXSSNVe8C3fu",
  "key28": "61XZKiXEtRTyS7Ff2SbUyMxNYdzsYd6MLEzrt3g9a9zQ82erUv5Xd8ybmkkMdpthuEZPi2yzwRKg4jcUF42bVijh",
  "key29": "2ZVshVaoY6odtUmQhurGd1bNQ7WFb5A9hzYxMZu9f4hCRt6XNeCL5EvCVwQoygvk87ohwNuf3Zfk7KZL6aX9doGg",
  "key30": "4hNiq9kXVSf89WLMtvuGfbAekLzbQzCWJoYwyeGuKQ284iJtrZhrvuvtDCktwnF6XWChZp4xWTufehUiiGBC7VQU",
  "key31": "53yeqTUMEkt8dR4DxWyxcppkirRkXqTa7ZsyCm7DJQJMbZT9CwqnU7hAcfU1f2c8djwswKGFkexsonrHKh9ZEo5s",
  "key32": "4Y4AM98aFG4Zv3TSrtaHVtfj4HBQTra51HCnvfjcaNLzJHp6QKuMqCJqxFBqWwJqMEG2s8Tg56sZSRRMymLuCFLe",
  "key33": "mTmNNvREf2FUh7icvxrjNNFkEVq5MfqN1L6ranz7QyJz4rjK9zcbGxbuyXgFJ7iqs1kf98mnYeaS4GN6svxxNP7",
  "key34": "5DdZGAhPijmYbS9nLxXnPqH4wNrD9LTCG1pZoExt7mCgnQ9XDUU49WhfoRPYWq7FEUxsxY2c2iFCGKFuvawucA4w",
  "key35": "39Epe5U1Tkh2zmvUHyPLMtFXXPHhCrX6EmVSzbS3jaQEWZE6LsN9n2q4CG3btUkVnoLThCoEjdD8Fevy8drzcyCo",
  "key36": "x93vZxThvu8o8pSFVXmrFbz4ZUCM2KsNsAWTvRvKhwTERpTgstZSQtz4Upx562qBmw7L1qyuujwJHBZ17EzyqZN",
  "key37": "x3AetWgJAoEogZccKWNBaPeStZR8DDALRvS8TVzKJba1YiksM64n8dUeSqymp51jrUrn5dMY1pdzdZLijkivYtA",
  "key38": "5JhxEqJxvdmujD1DDjy3KihfvgYWswNU99oMo2omPkaDpc8rRKEgCbZGTFdFS42NwpDtWZkUyk7UZBdKoBKGfNJB",
  "key39": "4aQRGe3J8E3kTWAm312BbiQhF8cPmeBJ4YPbKAct9pWQdHuA5Yw3i2M6YaBCZWiPFURFD7XvxdTAR6zeJhCuGPCG"
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
