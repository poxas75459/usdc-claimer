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
    "3nbPReP5h5Pr52DhhkDHLhhiKYhZ5TEHgvn7mJD93F4GvvReqCaXeH4FWM5LvxQhxeDLzYywfySzgWAiN7kxMzQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VjQZNcnisy3ZPK2GAMXqnUjH2cGpNVfSEkp2RFCidgt3sJnCpnwUYr39qvtk5iJM5kFm4T3Jyp96QxKkPmYT1GU",
  "key1": "m3qfMMEKAU46838YAqPupoxHWXavV2nASsYXXZspctYTu2sVD83ES638CcL4vU1puXJ2CXmeBzfeJxAwtAnqxAX",
  "key2": "4syFyWvJo6zxx9EQ2dNG3pDXT87q8dU6e2cAFYwNXMaTbJt5cUF6REufLL3fh65a1Y6YtTPzVMYCMjSntyEXsSX",
  "key3": "zojTGUa2drBgYr5kR2byq5PCDnjAV3iNqPF7eAaVJddYwNW9k1meqYhBDwZ225D6vcuBC7jk7tw7vmE6GYEuRvL",
  "key4": "4ia4ZETdyFFkFuQxC59z6fAvtcxZZnHfcZyf3CotV3LUnPFs6v4oamkqYLnBe4nsUTKkiFhF7eFBnhFjEEELzZ34",
  "key5": "SqWJggLBrYq8fXuxUhTFEcUHuy7FC9MbTDYq3w2uRn2rXZWV99VhgDCqwfJXegHTtgLwz8puxpbUfPtss5EFie7",
  "key6": "4Zqqj2tKLqcYaA8E622KCjddQYMmw9xTwmRksgjahUTfd7KKjp99tbp2uMEc8shN5cGgJhz5ms7Yc3CTT72JYpRe",
  "key7": "nUtYvk5WGdMgu8r2waKFXYqwdThp3QiwoLPqs9aqXY826jMLKqGG8gQXa3whv5Xz5DwU9Rx9pHG4T3hnL471gVz",
  "key8": "3SBod43c8JrEsZKvMDPMdhcKw7A44x8GFY2XA8x7RoKqDSdvrVX8HbDm3kcLrFqgATtunwY69qbG4jjijzyoRMGK",
  "key9": "MLoCcnH13BbrgVe31Rc4jyYFJaYpo4vWhnkGV5CkKyVYEdWvnWPBW4mJMiRJMDFt5yCTsv4wTQsshbRTQrLgy9x",
  "key10": "4P8BewCBDMXVNnEtgT7rYzhgDVGn5eNcX7ESkEA4JLt6crxi7NQp7VftnDXspS95e7nY2yk9PbqtTv3JdxgD3qea",
  "key11": "3VdMYwQ6kyaWtrHPX33KBg7rPUXB4oyhT9nPUUYLKEDkUzZfKPfmJjSCoPQCbUZixoDJN5unoE8xStD2VxFYprp2",
  "key12": "4oYHt2qHcxtPDYJSPdxx5PS53bC1EFqUoT7J9GwEnsTqrJJF4CJ6crSoMpxmavxWyfERcqbU67XLWmyhcbiwXaG6",
  "key13": "3igriH47Qimgq6nyLs6TPNVqog5p8X6WX54FmGQx65kLDRnnbBLn8znjxCQoJzvnDfuPWYTUa1sp2vVDLjH4eq5W",
  "key14": "uC9tYHqxiVJBrp7ss6x2iWASJsDzgHhkJYUJd3bmGEVjJkWGy1WAUCHWco26CdycTn5r9RtPvYc7d9qvdhG4osS",
  "key15": "3Dr2aqTpDS95Dr7SK2Jig7m2naE8etzq2C7x6MK9XxN26E68NVa8d1FSC4Nir4X6qVePuo2d2iwUXa7WMQH8pSCh",
  "key16": "5ExVPTuciBAuCsMrw46s6DLHz3JEBaX3JFKUkkfhPhpjqVk3UsZkvoXganHEhRt6ZYHeAjK86MhVS1img1BHeYJp",
  "key17": "3ujbAYbFxN7zyDddfJ2v3z8jTmtNAcLeKMA51TruSngvrm7mPhyMkGXmhPEN4eiUeDM5nJz6HzVrBosg1eo4cC8R",
  "key18": "3Jv9jKMQfLgT4XRk6MQAThmJTPRre5Eq39DpHWCjz2WznzTZJH7u3sTtxCPv5acGhJDBz74Uh7eg7J2kvGzUYEaz",
  "key19": "44WUfMvgAy6aoqkoLTgJXjZNNCnmnrUoJ7VhdViC1G5LCeVbLe9A9VKZn6CYcA4JMnzQS22nNZ6dagFafcvXzWnr",
  "key20": "2wLrd7rqVu8378xefJDL8c69hwZ9BNN5TCv9EKnxb8nKqEQ2rKJ4jFjFgnemctpuLUwJmeSwpgTsY5jnfzBEHWxn",
  "key21": "5ntauHqM75BwHU41JsF3zp5xfwgseqEM7ozyq7tp56gNb1Knq8aAUtmHL96yFKZD1zYP6prGjaQwu7jDbCryeNwq",
  "key22": "zBPx8DMLTeRnCU7tjSCxEYa1z6cmKr6EcjHVXDAgyvpk9DS6SQeKAiwiEJbMFCF56xXML3x3oUXkaRTFfjfQdVU",
  "key23": "5ZBdQRwZu6ZhqsQc2PXi6iEmEvqrsQbqF9L3kKn9uno3zmfPRV4mVsFqqBkn2Q4e2tJMaL7HQ57fMP75vyUwYdDW",
  "key24": "2UTr8KS44NS4FU11cYm84cs7CipdYDFu6wMTDoSNtADDwHadqygs6wzLviemaPUHc1oLo4SwtgcRnD4qWx1bVLcj",
  "key25": "5rBAxBfQywLQreHUhvtKxFNQCc3QAv8S3fafbbyK9n1uoVkPsggJVkBdNp5zgWSu6nMrJL2VXBFQaPDTndJbnWXk",
  "key26": "4Qw6veKeNXTmRYFTaXxymUFgTAeFXD3h22u7ommy4s1weJBXvDprPqJqCgfSmpuBcXiLTaZquFuRTgd2JPtHGHaW",
  "key27": "p2MutBvgZL9ozVThUkVbkfkyJRKCCNhkTFGqHqJVCvJgK2Xz1wyeidEfRSm12UYLLAyxwgXiTqkFW3CY63mLMKc",
  "key28": "2UwRsYzXcTxp8oRLsXgJCqypJMWWkS71EKDnEPrZwyWBpqGjHpt8aqVZ1A7jY5jiWp95N3kyneYEUr9rSKK1Nntq",
  "key29": "61S1fW7xRwaipyupF2M8pMexY1hh1BrNapGmj7yCmzSzqSAWwiw458BuuUi7SBf5HX8VovthgkbeRntHEmhsGGpe",
  "key30": "vChDb7C2XgZDWsPJhFkVDYNxxJbQN3gHhPfB6SajH5fj3qdb6mZ5oZvNr91V7RfAQbcA1u8ZDpLMcnKTS8cf4fm",
  "key31": "5dd3xWpND7KsoaGURzsBgV7coF7En3HNJBWi1ptz8bpLQ1noPngeoWmqHYXdkfshdpQ2fpXLfHkDgZgMWBDW8LEc",
  "key32": "51wnpX1PHR5hxMaDTxhjs61e7W1fDCon1WpjrZvdQs1zfAGXvnjhZwfygbg9XHMGCNNMJwbqppqz1oRz7CHgSbrh",
  "key33": "39vdkBw3Cx3wDuF5LA8d4i5tHgNZ94SASNTEv5WXkwDh7gpWanthGiJzPQiK8tcEmWmCjzjWitqgNuKogU1uKKCu",
  "key34": "59QMy1XJPRfQ2DPeUeAfysGDEaSsN46BRD2k6h9GTHMVh9rPJgctqtVEnjD98SSnhc3mybgNsmkqeHZ5mgJKES7U",
  "key35": "2S6CaB3FpyK8ULbvQLxQTsRtpxZXfG8K7DiXZukNheFbfF63P1v3BhUHLq16goN5ScmxUfcJ1jczkFA2tsHwEgS6",
  "key36": "38w7t4qWUWXSGKFozgDHeYoXkoMkfXsxQKydSJiYZYWW2KA6AbkoJpStJBnsWtBhpQUef2siRKbmJDNyCfpzo2eK",
  "key37": "5gcBKyoVP9wP1UGyvLUdRdzvNuwF5tmkYESZUSTaNfJvFjCJ4FVFatJCHuCXg6MEb7SQVepF3CRUyNK58FCTgA4c",
  "key38": "2RRf34KUcShZJKNW1BG8kgzrCaBnyMfvNLfyDe5MtnArddnmNpMV3qDMfhymGBNAzksakuLH1HKKYkkvkuX2KDbD",
  "key39": "WyhVEtzhwWwhoFeQaqa6kki9TLrkjosKy6GnctqhCSmnPECGsKV2SyNPZqEWf6bZsuzaBugM9x3hmRHgDmDkUCr"
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
