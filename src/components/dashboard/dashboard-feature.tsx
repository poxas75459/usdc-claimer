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
    "2HYqTkoipJXa3a8pSWrdwsFk2CTG31Amm54yz5GGr2dwqRKzLr49DKMUS9yzaEzmPrwkFVPd3z6D7AyPLnNESPcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36bg5CLMw6JjQrujK9WzEcSe2w3ZRRhi9MBVGZ2nx8YAGhAioFvt65LetwtF1dQ4BWmuycmETm94mp1aV5hhXXkr",
  "key1": "4P1bDwaLN5r6oTNcjYCYdEi8hVfrzsjE1SeHdgHzHDQyhfsXh3ykLQqPfWvnWamye6eQ5kf16zutVFyhb447mrCQ",
  "key2": "JD4y55YGmLW8ZvFq55qUYSpSwiwYG8RMCELHgytqdHsSwActrE6L8k6zq1TpTYBE4BNHHr2mkCj6c7s1Q4oEn7B",
  "key3": "62T9pNJd8KcnsWc6eJswcPUMe5EKTcsDgiV9orobHKTVhy536HbHGzY4XaFKzh46ADMYw4LLUT5VzcWGRPytEMSC",
  "key4": "2mpPCAFAA25HqbedCZZY1xgtCdYXNQZFw4TaQBRKt77CUaStMfc4MPaGQyRogUNgeng2MXV3RXZqE6QHwexeSBJv",
  "key5": "wxKxoPzvwJRGmSKihBVfgAZpAgwzphrehsBVxooT42P2bqtrCSWz7bEDoqebmurri3HT9DaiHvF4fzGBqa1Pfhf",
  "key6": "5FYxBZ9caroAkqi7kznL3Yjmg6gz2iQdAsNJsHLCfmpasqGjktpiQA7uwnWL4BNd6JAqiGsN12BrAPbWj8WhGuSB",
  "key7": "9K61ZHKiUvVyB5P4pKSv1pyrKb8uVYgGaGFXKKZzMadLjMR1ketPjyGVfK1P3dqWipm9qzhfuFwfJzHujLyVLWH",
  "key8": "332KFhCh72zB43p3ScQJ8kKtnuxKC9voexPqQicfonWqW81cJ7N37GP78yKzKpkLMjU5kiUSByKA82trNy7yVGek",
  "key9": "5a6Bd57Eu7vottTe8NriYhvt3PgLQBBXqqaGQrTwfzLfXPqJ5mUBpGQWQPyBnKbhnDHwNvGRp93pymxxF7P18gtR",
  "key10": "653kuN2TLwNLMtJUPZzK7vpV3GY89N2HiDQEszaeueQsq52UVgAAR3Wk5AhNVnat8Tm4FwGXG5xwEL91w5pSdVXb",
  "key11": "4SjNj24k4Wnis9ycsKRsFfHBq1X2qoUeK1g3UQ8A3wkRgmvr6y26i2ypgqvtVmYXFDioYAVMiSeanPV4sHy1LwMG",
  "key12": "34E5fY8dabsgGocQQkF8drQdqtnYuoWeaFPnP2gPrW7iSdWgcm3BVXe16eqBxFRMbXLpkjv2dMKBzLcf3naAi3JL",
  "key13": "Ue5PcDimgRd7okMD9Dr45wpjSAfsxtohqSFbyHmieadKzqgSNJa4ZsRYa8zUMmZFu6ZZxcWGvm6HRKbHsdgtqcz",
  "key14": "yiMZegFfWLBL9dVKu75s9Y4xFywNMw9fqE6H5P9yY89fcN6aMtxAzmS8tq951vRy34y87NnBvNsPdScmV8AzUW4",
  "key15": "5SSqT4k4fJpindebRvMEqcNBDHX2p28DPqx1DYf165fPwZ9fVPWJbj3P5LUwvcWJ75BtgSNLvSMxY1xy2MuZ1BzC",
  "key16": "55V1HDgG2CWsdPZara1rRUJhL49nnwiHsZyARrNUh8u47Tpo9iSsudaAmCC7LMp9Xq5rSxaXZz8DttR7mfcu5s9R",
  "key17": "5MRyPvZf6ysunPrQN5x6PFa84Tv5mxh3ytpK881PqdULmDgMUdmaUaHGg8Kg4DTfKVXTfcLkG4y8h8w8pnQXz3b3",
  "key18": "64odbRnsMTJKT5udTQ15GHQfcLt3dYamiUw7fMTAXYTY4GouUtxqvMr1qcYiMFHa6VCXpvZ5q7aRGxS2JDpA6xhD",
  "key19": "5B7U3xpZCHjUSwaaVW8JAhdS7sVRy3KYnG1SNaXpxbwQx5W1K1jx5wqbiWAwU2tH8ThVkaf4znewceibG3XDMrJa",
  "key20": "2hDP4puB2j47LTq1g1AEqpxi5taU1KhZpE6XnwV3axTHXwQ8QqNkMTiUyZayPnFRGHS8MySnS94XwKZKv7jyFYQp",
  "key21": "pACnAPT9cvjKKRdBFvDZD5TU3sr2sFTHiBoi8Jg3Fgc4A9sXBMXu4rUHfU1Pn4xvHVtqzU26ASRnbR8MhUdUroq",
  "key22": "z33ZH2iLxWdi9iM5FVvvKu6ytieB3CTbRGgZGdCtzeLNhz55bbatLtDX7N6UBmdySYFPW2thpbL2i1TaVaoF51T",
  "key23": "ZFvUcRLaYuMNRFBeiMqfLyHtvtR7kbXEvuZU4RZGZcjdyb3Q23ynNLqNvYjdJ8VGToiPyiomA9WmqWMbFmqUDnb",
  "key24": "5BSLBKfvLrWX5MjLM3uKJ6YC3LsnzQpdTBXmXfc62zvEgUszDbr5ygVUA5u4ff5yQrZ392peUhzhcActhNaHJMU9",
  "key25": "3eDSzMhfBPu5H4ochmjLb17STETZqXho11qfTdz8mRK22ciiRVRgd2ookuV5XxLFypMgGiwwUYnBa3LJAaKMi4nt",
  "key26": "4hpJBKLTKiiMJf3Mrp3HDnfv4as7rkTt1RyxxH4uEwb6v6Y97aKYZHbTLPkXbNeFp9zav416vQV4undnmRxbHGPW",
  "key27": "3MmMLrqDCLkYMQEiNk2MKd6puWSgcPreUdLjjsy1BAoE7TanrkU5Zf5Nnso2jSag71gKnbco3nf7Ds6Rfhqp4PDT",
  "key28": "39DN9bnYjFYbLw8yyGDGDtyawcoBURFmQX5S15rhKvJCK9aiNWtd4WQRAYZTUegThZZXadAkuH1HTnnsagYBTrDx",
  "key29": "4Y9teYyZeZQVf7EtPqLpGfK8Dd7GXEm6jrMFGuQ3A6pjat1JPWcSED8H9qUG1KtHZLn5bF7639bHMwubuUt3CRa1",
  "key30": "2hEFcDJVrY3bJnZuE3n2dVSyNKyiPqBcDzhrPbkwmvs7XkwPR1eCieoF34K6mW8KmgJRjpMxiVRFUXfw3dcWyb9k",
  "key31": "3YZNMuAhZQdbkxoLtD4WdDYf6DNbaKepBnsrExsZriMp1fs7hch2gk6DbHBThN9LmrYXaxH9bw1rLhQBieDTkiE9",
  "key32": "4VBvZ6QczENpbRntekH8s4oSnhL3xVP2ez9JBRnqzi784kAkjGVJV2AqtN7av6czQamAcJK6nyuUAoPMn3tGDGWw",
  "key33": "3dkA1tDWzm94QysCudgQ34Dx5pJqtrCRa2ADxjVsggDJsR4B9cTGNCaqk49xvs3BAnhiMBQ4HR2qP98shWkS4YKT",
  "key34": "SYS2TqEESHGvX4gWnUSa8caHeis4KrKkzEppqWxvMLriYD8p55wLuMD8uCv7jKQsVmFfKP7knyBVryAzvdietQF",
  "key35": "3sP9p4hH8SfW19k97nFbEvVHekTEtGc7g4tko1DbSuUaVBseUX6GQUAnGy25QvcQcUtkfyGK4waPwxoGQjvd2bnG",
  "key36": "5tHBmgWmmrUGVLCY8PPqBjxuxK5oz85BbFgaYHtnUV5WFoK2uysj3kTTHr1URnB1hN96C8ixDDuQdz2PRbv6VUuq",
  "key37": "3PK15dcm67mr17BK9unAgkE6yrPWvSxZYkYb6gKeWEGzeNK2pwsjuePhtkWamLTRPbcgGsShisks4DtUGKwWiasS",
  "key38": "2Fa5YJANapu9tXMBAbkiiv3BQftrk4rxua89VH8BPwg6kwoJw7cd8mmZLG4xNa5HCpGRAZydLMv4oGj9bgJ2Kwz6",
  "key39": "5KrtpwH8F2ufLEs7r4DUHoLXW1ruGDJHqQrGy9TSk1kFTwi41469WB6HcZPCvhTQwT6pyu6z5KQaSfXPPg1SU7zf",
  "key40": "3ryvp5XRPbKLjmfs1TGg4BfF7QjPJX32XZrhNUW8g5EDsxXrqAPjQfnMYM1Ddo7DNqBpqeaG5nGrZFp9MKW4iu5B"
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
