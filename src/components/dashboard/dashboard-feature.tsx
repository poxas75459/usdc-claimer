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
    "LKxpWmHvou2ws8TaSf6199uMLhT845mFuTQDNWx5DnAVf9azJMQ6J8QTK9FRe8Tb95XHsXzYPa6cYMN5YrCtYry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LV2JqxKbbXEM4RQGZn5zdDyNPJ9b6B6S7nskEcq8Rd6Wp8AbjVxAs7oGzocWhDuCMbwbNohATMwm3xGodQg55ZC",
  "key1": "4AutTEKK1ymHQCkvkXuY9j3YaLeH73fMURp5AnXjyvX9ihAG5f2rtdPP6u7hDxTZUyBPdPyLKoE12kt3oMRDUauA",
  "key2": "5ybEyJpPnJShdNHtfYJZmzP8JnUtG1yqgoJhh67WssBXbDrQaBDBXapGJcxCS8JK6SEN8yjT31G8hJgoBfa6LbB2",
  "key3": "64QLBRdEseY9F5KioXdmZN36bH38b6JtqiUcNZWNDKSsD8DEVaVFkfkgbfmMCLfQMzfGRkA9LKBhSpUXqRwD99Ec",
  "key4": "5K4FPGH1sUZkjy5avXQk3FwXjW14S8avCon1uLD5sffTQPdggCfZELbSMXVFk91bJT6Huqejhe1rnhdYYZsW7xcG",
  "key5": "3tK6CSsnNcC157nQNcTMgdxcqBVu1S9fUYifRcxGLcFJqFcAT84iHhq9izWbiLZxWHzzuKMYoXKfGXrP7CkJgSsH",
  "key6": "4M128o2tkS5ZH4QizaViGixGwuxRXMWuy7zZoMHEjW7Wa7qHwYjUDAFCYkNDBmhiByn4U226U5Sz5A9avy5HLCxx",
  "key7": "5hGXmuvFa1frsKDxBbDUkP7g8jqVq6oYJaNmJWU6GrjhwwbBBV8GgSAm6h2WW36gBWuytfkm8utP5NRM74RKafzT",
  "key8": "2WwRBX6aMcbuQ1b4XnSxcpY3WkT3pqJ2ViZ6X33pZixA32Qtb2sh9aF774EdcahMcWwW8DFGoMqvZXeoXBgQmxzJ",
  "key9": "4grHvZAqNHwDZeNuxRDDforJYwodSnpogK3pJSkRZgwg3DEYuRCye72i6LJuHR3cucD9TmDg8woxwCR2vBdZbtxq",
  "key10": "cAo3X9Y75g7aJNbjeBmyhjVdNNp3kppzean256TNSVAo7pqJdwDNYvDJrR8ivVZ7e6gqagrdYQqheEEdrVggfhH",
  "key11": "tgtQknTytXnJ8SeR2ZTew9kTghoacvverhagSnBDyCrnGW4AoaHavFeaqyQT9WyVjYPUKDnHUC45CbqaHXN4dJw",
  "key12": "vqMMDwVj45PfVbWhgw2PpXXXtWZHmiCvpnEJBXEQsJ4cR2t2Smj2g1dphsQ5JrPLAj5pPkvofzP94KGxp6SrEy4",
  "key13": "EnpVvnimqBhHcDjoidGoC1ygPb2mUij2Lg4XYpG4cDygTi5TFR9LrZXZ5utwtFcUx3iLcamkojKjMEjRw8TRSwC",
  "key14": "5JGQDB5Ya7x9Zhhy9YBFQ6epoHsHkPrWQCowe6VrRXYrfUFYFePcJnNjbV3KXvTvK2FqExfcWNqdq78pABcAjUXK",
  "key15": "3KA1tZfhPtgtjYJzxzFdJLeuBqZ91bfvSiN5mGa4tbXmahF7zJnJQhjuwqnyqEr9bJm3MbWWbPNNaZFXook1BFxH",
  "key16": "3fMs59ZHm99W93Zda27vWMkJUqaim93DoANus9CgrJuVArKhNa8LMGvnnjKNqdw6MjTwVMSLixjMz2Nf3schXbpa",
  "key17": "4aernG5szu6FnPk6Y4VCNF1c29S7Do2aZJ6Nvb78hg46mBxMH7wd3zNVBMtpzZLvUMBHzVZyTiQp9A1dG98RQXqt",
  "key18": "5ArTMs1DsCeu1rGHiobHg65bQUCjhyuK9cGmcVKz8Mxn2j6o66XHzmbkSSFrDy1seTa9FMKXSgT6W1b7uE7oTRLJ",
  "key19": "4dkSXsXEVPef8m1Ed6RpqGtYL1BZkHgmQUQWTv22euGbhgbQg5WRPeg16rAe684ZX8KzGxSbt8uUwQGCd46u3HpZ",
  "key20": "3TQ5oBmkHthXvh3RSjRu75qHdmW16AqpSrMjYr6X57zqtwiJCXgvXRfdVw2h4YDpx7BMTrRFTy5qxHeDGmNcxVTe",
  "key21": "5CTuzZ5usLaxUQ9uH6ygNRuxpYrBLDeHkT8ybohGjcvAywcXUPeGBFFzKZwwCgPg8RADVCekxGSQdWpHKjLL8FCD",
  "key22": "4LMSrG33AvnggJbt7zh4PP7jZ22f58JofFr9K5zA61sfMMXJSEPwmPk5xx1WrwrWocPj8wGGmg2jrTraViYUMFtr",
  "key23": "3uPA743d6Jez7MTDArijU21PxWJrpacuPRJogksiorYLSfVpjYemPCTRcFpC1ZGrjYKE4y4PNpLvGjHoWFXA9MtU",
  "key24": "4QoRvvgqVyJB6g2qmAXbs5zaUvjewHPiFw9jKjMw8r8zcA91zxJaqohfHB5Pd1GbJU2DMw2ZxZ7TKiRosKABnCGU",
  "key25": "m3cffaPpFJgkHZSv5qZjyk2Pb3TPU7x2dtG69GDDff1N6WiFMq1CetkD41XQQ9zUeM3CtLVjP4VZjju6MvhtjUi",
  "key26": "3TWDmUinipkFpiK5131WBszJ5sdx8J83PLvoQaosRyput6NwtU5VXh3K8K1uUPXjFkYbSpPaFduYh2gXPv69zohF",
  "key27": "jWqVVesywuK12pd89ZywL9Ck9ciUZFWVGySfJEzNS681wW5gQrQtRhy7HheyMGzm9eofFTocWtvusjoGbhnQrHF",
  "key28": "HbueHoDfb1rBGqdBVqnzbCDGeSiqFkxGyuhJsCx9v8Wj269zJoaSP4johJybGDD5bkwjo4mCps89vi9s1pdEW7f",
  "key29": "4Uk3qPCkn4cFw3ufMuH7fM5sASwbdM6kE3NUreqGHJgBgRiR3w2cR6dtGzNJCkXsRi32izve8jgqP3PE6K7RS8c9",
  "key30": "4pbs9jRpcPuG1JSq93k2cQzswVbsTKTzF3924dmViSD9D9L6LNqTaiBiRowKD4dLpe33vKQfk4MVZXVuU7tFoVYM",
  "key31": "4khZPe3nCF1aURYHsXJeBvHYnAQxsUdQmUCGRrdJHkKoWGukvwXByqeELAzzFAPxZbfHDY5ZWhe6rTGAawVuLhJr",
  "key32": "2G5yqSs8BvX6xvtSe43AaNxDMPadp6xdnHiVfRsBRH6MxbGrjqgB8Con9wfVgcrEqT1BgPeL9UpiC7pW3LqUysa8",
  "key33": "4RkUaqtjXYQCyzYQTYzZhrk1rqEUTBxBzWE8RhYTRMzzVn753bj6ZhgBTXrzrnkcGAfsNDrBoNej7LV9UdMXcGm4",
  "key34": "65RhVc4pyJKHAWpvkB4zRV8NoehQpeNK3EyvexP5ChivLe3AVmAAS23bKLv3f6o9dDyQdid6wiU5xX6gpDN9F7Ti",
  "key35": "5YDEPjUaQrhRwhThU8NtkBpQE6Gq7S6yzuMzyo2XC5o3q63WfsLWfur8oESc87yyn2Sojd3seb4agnCKe3FE4JQR",
  "key36": "2cZ11XAmHL9Qsv95rUmdgCTeCgGgoEhKV9iMKFuqTNVRFgqdpynzWTJxYrBzxNSBRkkT392GHgEPU6e6nPtYngHF",
  "key37": "VjTcCMCW7EvYjLDNCHNy3qBVnHM7TnjSzmwsZCrdR4TaNcNx2nFhh8fQfz4eviEz4U949LYqA9xJL8aTVYsACHC",
  "key38": "2mdTEeBuerXB46R2Wce8o5WUeqoaoqLCCmurkqrinJR4YWZ7pH3rAyY61o2tyGPqRnernrtDiXPLmESJF4Nh8EqX",
  "key39": "45EsArM4jYTQ3obXZBa7CEcE1SR6eq13wgAXj2dptWr46aUnQAwuXavDQ6j9ZRR36PPjDZeamdKWhmceTDCcprUk",
  "key40": "3J7wDo1c9SrwCvNHpMouRcFa8xHcFtTZ9v4N3Cfru1S7m3XMz1pDMrotLmsrneadNZGrBaeYtw7p5LAnSYdHdBA9",
  "key41": "xzWB6ZiiY3uQUwXBk4KfbrJx3vtMLxYRjWHFd4j8Z1rScec1qLzfbS19nce83BLEp4nrXyA6oeuxRmrRBFnZox9"
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
