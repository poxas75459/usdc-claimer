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
    "55hhRKs1Miy73KJypmhvi1NpwoqpyyVwzBK7Gk83XziVAt122A4SRNP8PAfz1Mgxury5d29dVJLvL6eqGBr3XSPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sogAmSigrTb1upfnX9EvhoSFHE2MnTAFbELgAeTe6ghXc8VY7tHtaSmweXgN5EefztCUgCV17UJV9nKyDcisZ1M",
  "key1": "3mZSYR3zpqxqQ9mhVaV2w2xRL6pH18TpmecKjPMmBbcpFZ7ts29JeGKeS2TrDEaPXGb6qpsQtWQCFKXb6v2eC1ju",
  "key2": "TcRUmSD1LnJm9YhHT9ioPRBe5sHQVKTwwmy2Hex3hNnA2g7U2Sv8akyfwAxysmrNCUA1UhTz4UU6kPUeAny5stX",
  "key3": "bKBbJHoWZhNoLQd3f5Piyxq1Ki6s5hK9dy51Fy23XzYTgZr2tQqtXq4cFHT86ZwcmxGNyNtbLvEd4UBHkPB7aBc",
  "key4": "3iAa7zAfVKPeCMoRp7kFXgdjZh62ZERsH7cjE6i5JSV6oZ4TzLyVzqZwWvpQNobpMuiTyNXEAQAsXx9NG8GneQ8J",
  "key5": "38Tb3MgyBzZFi15r4DABUVPSYZcomBjdGtqRu8JhoM5M7VMM9w91WsQxP7HnZ3Ub8vw4Edf1XbEvvgKNRaiMdXgG",
  "key6": "3M1ZcqqRHuWN2BXPPYo7aTiMEZ8gb1HtUCPxabFcXyH3mT2UZkyK4WFLxhVFCFy6Uy6wqLJve8bsDfr6kj26ranA",
  "key7": "3xotkxBmjrgjcx8Q9yTvXvNW7S5KBtZot52cMedM58d87CaJf4iAiaZyM43zwXRELTC7FnvBRXZCns2xQeCtN8nP",
  "key8": "4RcFpdAzb9YXpZbVK6ErW2jo6HNNqLbcuwb8iekGTyBfjJLQAcytxCUovutuxLyYufAm4mR7ST2LZL3V7R7S2uTC",
  "key9": "2CPYRWf1q1hg4rAwXVi3EhEnxeTLCK565AsTXxh7jBC5tQbSLt7gZH4ezsiwWdR24t2icwNgnZSeaCqETZE14Wd3",
  "key10": "56m2dDYYNEGLkZZd2VJWSRvy6JsAH9hrdh3bNhJxj2yfY6pPAMG8tM4U237qFrWZzfRxUDi6pXMf7cCCco9nbFGZ",
  "key11": "4hXp9GJSd8FtE9XT6eHpKAKJbKfUCJ1ZtHaNCzJXUSCMZAc43TKgjYviWVHgRt24neoumJ4aiQGtYnBUTddJkofn",
  "key12": "5e4UfLENiHpNUMLQhxhGGyGr8pdTFCdwdEV7qksGetddvbqoGUJDzNEbQe72STxgV37o5nfAHrpc4uNugatYgdCc",
  "key13": "AeQFhQscNhXZCcTc4GuQoFzh161ZdBzYxqSdF8BBpM7APgfi93UzfkgmgRrnVDwPYh7wPou2ADJGRVkiqwXbnm9",
  "key14": "4Gvgcxq2YQm6R6qSeZZMCzCTM3fTP5Pywn1vr1NwTjTrhnqR3vUGfHD2zBHzNAGdvoueDZEhgmh1T4NvoqJL83yM",
  "key15": "4VYPAa24XQDY1V86uYc8PeQxVxWNQHUCMFMsR3iV3e8urpDaHxQgvJ9SxyaaEPQZBKaRY4MNz8xnsCidGoc4kBd2",
  "key16": "8KMAeqUtfDG3CuKSA6E7gSbiyqEzWhcyuYRYJg4oDKWrvBxFqD5uDteCKFsvytens1uxUdBPGmwWaAAYgtv3vWW",
  "key17": "3JiAW1mKXjejsFFt3Rje115ZsRZQ5M3ULEfaHg2ZapHdooQvUvuqW43TReLXs5Fe7Z18ffcBdqHoR84DbuWzMbc5",
  "key18": "2QHff1qE1QwCzHKGNLEvhxtm1qkpx4z5k1sb3ivJSvUVPRdTMwZk1JrGCQCD6pUhdzQJ6AFf1DNg7vx3qD47M766",
  "key19": "5KfuqTp2ZX7cYD4VTDu36xA15CUdjHJjgMC5cybhiBdJwUrARwWW4YKcEgfkj9HcRXTXnv16BstXuj3qzJp1iQdR",
  "key20": "2rfCvh3cy5XarJR3oVq8gmi2aAz6rdjb5nyXbaotJi9asSEJz63YpCPyRNmUKddUbpe4cJMZsChzpCuE3c3F4xUr",
  "key21": "hGPMiV3tSzKiV691Lrjm3dpugej61bpWtvczjvBNGJ7r87w2PBmq4vwiwZm6Wb5oEa9utwkYYJMXqks4pDSxgN6",
  "key22": "2jttVTqsW6sSqE5ij8VmoY9XptS5JsRRsDN5g1GV5MqS5xdzwibUiBpCp3B9SoBRjs59air6DVDhwgVHVzoSyz7g",
  "key23": "i59QjordGprze9eyUZUsY3w8n7hKuAtLa7zDDbkMPkZduJNiCwsBj15toRyTHWojWmGVSFaHNiX18zXdwcRS9Jh",
  "key24": "5FphiPZqreQ6dJAGR14cmnK8ZJwV1SP65Bbk7Pyif1uDKU28vJbgtUCjcTk5bhuG1PT585jcRckHTFHjVXfTxLzP",
  "key25": "3Ym626Zgs14CvqkAACfHS2JWnUf7zwMt6ESk9DSb6BFBMrfQrZDVGaMfykfhWenHmjcBgAoh6iJesZhmQzukb3zt",
  "key26": "XyULXMsp1X32qE5FiqsdeFHgcFeuX13cieQdkQynAwa1jjXXZLcAoG4hrsetbq2CdTGgHcA4dqpAYCYTXFAbi16",
  "key27": "2MG3gEy1Po99NZgMSN2mGnVWvddfnkfFo2D1LpaXXRMs9fDE5GYLNFK1jZNnBDUQJaq4bW1odznixra8DnD5XTQn",
  "key28": "5jAgobmQJYHgXrpzK2VvUz4Fg7PB4gAJ1ANJEEFT4cifwZUnvc7iXTC2ReamGoFGRK2qioRGJuMXsz5SLFme3439",
  "key29": "5vFb5dWfJCB2YqxV9sf43Lx7dNfevPPdNQaZo5FAqDh9EYu854EnPm7GPwW8m6dcRXBZ5ikt4csCQwfiupEtoUdj",
  "key30": "5Gfk5GzykyWCnx4wiDepiGdnea35ZsnbPncdxAiyHz5QsY9WsDWuMQdtErRhPHk6qinhbc6EbGHqQuSH1vwucwDU",
  "key31": "vfsuMdSmTRvDxVkNy4XGbiMuzmMW54ZhPZmSyv3QrnBwdva9EhQYPU3YSNVHXPJp89HbwtSPSA6mgNsQQ5dasYq",
  "key32": "5LKTFh9SNYykyjARHq9K5wVg8zPptQ6wCz82e6pibWm51zm6QRjZhC9a1Nz8y18sg71Tm3JvaDjEAProQB18DJXG",
  "key33": "2xwFJ8QABebjPKCvhQ9r2zkLVb9XFt59TKbCM3PNyT7qMKL9fs7sCeVHTUttwycjb3Hq8Rc8T4RFcpouHbNXPwFW",
  "key34": "ok8RJCNrd3uxjngp1FSY45NXs7zpD8gZkiyc6zqGdg3p5sVbFvZLZAaTEHT17hspdrQFU4ZkpnmZqE7qTbL1LS2",
  "key35": "3Duk6MGEbQ9BfM5zgrk1LRCkDEthbA3pQ7Ghu9rscbgzG4kCm9vbweLXJxJN4ou4JbnAEiH1JmizMCLyTueED8Xk"
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
