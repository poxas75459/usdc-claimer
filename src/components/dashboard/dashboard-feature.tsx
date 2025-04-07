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
    "27sPEvWtmFwQmmN9byTGu9Z9mFRQQ6dutf7o2hgbAz4K8EgyVc7o4wz2YRWpbbNuDZ1pkKcifC6rx6eSLF473eCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34rsUMh3WTJpSYqyTjGgX75vrvQF6VEKCxV32mw6poCbA1bsTEwK7sTHVDZHVLkrafxfdGXNbF1Zk8E5Yx5kh59F",
  "key1": "2gzkHqAuFJXzG6VTy1oBZoPpT5QrSD6xbnqHmgDwKwHestjVG2CuFczvp3nJyqV261DYMERXfhS3DWgNLMVkQsdk",
  "key2": "4PNpChwxx8n6vandKNrZPXh7pJUYxpDmQGu7JsfxBvuN8pc6EtdUd9JcdsKyCwLXCC3ixK9vfi9fVMvwSbYdhKQn",
  "key3": "4bh4tqtSFTyZ1Xd7PrP92jjXCzfUnTh22GRPnGJd2WRu6TNs1p8NBayjAtqrYNFoABXqyy1P7Meu9q83Wen4gamx",
  "key4": "3eX1mzUvLrrvfr2kVjaC38tPoP3vMNaBPTmqQ7vopPTjmXs2gyHYN7TwT67mXawE7XAQLD4esqVWB9uKxRCCCteJ",
  "key5": "5yNFtZxxhHR4CCXFgBTtTqaw3s8CnGebZRWFq8Y4bwF8QK4oEGSw31xRzVYqBMTTkc5LPfisdVoiAsnw7Japtz8Q",
  "key6": "4RR3TD34ea5Wx67CTgEuTftTDTBeDSgU78stGbpHKBZQo7EjY123w9MW1PytcRqdrvMt4q96bN5hv1mUBfFaj6nc",
  "key7": "C8dry298Qghk2sK9Xk52idKFDpEK1eGDFdex5TjRRkvxFM3hCY2BPH4Nk8BMvcitPMSPvgvdaqZynxsBUGp6fJH",
  "key8": "43pmBwBq1U7DyHgppm3hU8J6vDKASCTfNhgRMH8fF27mhhkPBMetPcKkxxEaTTrpsCJP8n5mgMnLuERDmWk8qW19",
  "key9": "2enikz7GHjthAnrTY6vrErNArz834uKCQnWLD7cCpUzxtHLKoEvzrjVNaQ8ZA3CTBTf6B3BM7aobuciNcxAQ4j5P",
  "key10": "5kv3VkVbVaf4jr22cLjPyEi3BtvaraG7BzdL4MLvFAnEUeeB48UnkjS3aRZ4arREREjSqzhfLAyMQK37Jr5Ukzbm",
  "key11": "2XWEGmcvtyAw5MVHBx4DCMKdyk7MmuPiMhCzYBqBFpEyHi8nP26MachnXu79pvZ7KtDfq1kaxZcMXYjyHBW5STu3",
  "key12": "2qnYqrf1J46Yp6bcyUJ1amAnyLoxUioPxf3tnP8G2ku3DPh2zD7P62avWNiPYwuxonRvwkSQvK6Q4aZdEhNvSL1X",
  "key13": "5EFdkhgEn7a42WjK1EJV7k3wnNwhc8tgUVGiPhjLvS1NAevJV5UFDNRdAeouNskR8G7gaZMGHg9f7f9RsUG4oegN",
  "key14": "3z2P99cFUuFuodnP5GhXYPg1Wa43hVmbCoC7jgLHnK86DJkLX7RGyEyb5xDmFeHVSo33fPExTLNzmMTh6PrH8fG8",
  "key15": "2fXkMGNwPNchGMWhofumL2Q7iCTZ3pyQ4acLTeAC6y63G13MwthuHgeZAqgqGTTDAiHeEqa9M31hBzV3uDeEZ9De",
  "key16": "3ozF73LcbiPAZMs91PREHGZXL5TcVBKY6uz5gyR4FNW1dzjKpNvyvzMsbpLThv6RrZzS11knXxpwMjQkEWKGZyqf",
  "key17": "5HXA6jVMN1HEk3F9xHEFQQuLUP4tz8ogtj61sigCFkvTqv5QdZo4GXB8LvSWdm9UdmmjpFr5NHJACZPtvk2pQ9AJ",
  "key18": "JWRjxGKg6oybVj25fkgACYmh8fMr83yFSentUgTausaAux3ggH3tKFfgNchgWS6SMCWa6Q7dWT6g8Aq9ynM1V9J",
  "key19": "3VGSAZshpEqpi8NZTPp6ZhgEtb8ZWtz5c18CbKGice4KpFTtBK95tZPogpu34RyegkqVXEdjgoz964cJbhFL5Vwb",
  "key20": "c1r9kCMWpuAe7KW1uQKxHXj2GtxLcj8E67WetZPVG8JLQS76xQfghdUP7hg3ixcJnWh3Z7rKvT6HzSpKPAreeqz",
  "key21": "5PdjNHPXhp2dfnvHqupEBThSsCratMQHxk3PGH5KfnW1EYUjS1j33GuHKc1FZSN869mhRxJfo1H58V5YgECCDb7p",
  "key22": "dJXKRcoJsWQMZVt6RXGmq2yLj5uo9swh38krBkGQf9wkvt89w7TEf3L1z5vCawYEqNBcxN4NcvgZjao5ffKEfgV",
  "key23": "8Dpn9KL9QF4BQNBc3X86noo9j4fHE3Nr1SS3J29RYd9jx64G1crYQ1TN1AK5eyKfNXJyh1T5Yf6z3VLmHaiMNjD",
  "key24": "JaLdAD2FLjGDMBjCjgf9GGacC4YqWBQXwkU1fS6jbXTKLWeCwCuP4Cu6f8AsbgRkHmy3BnJjb4ZHu6c88kKX34E",
  "key25": "4gav1eBJX4SQX2Zinf8CXiwSoFLDEkmrB1Fz8Sd7UyB9FHgJ6XWMfMbEqCmjoNXKX4WdNipp2stEELaW8ieZ9SGU",
  "key26": "2f28Sf1rb2wGNrhS2TbKeqMB6qv6s2LxMS5WnMj19kzvVcrAUKEb8zWUNWmM2Ntmeh4fFxUXjbGX36QjzfRSyLsr",
  "key27": "3gsw5ZA1DJCLg3nRy2sppEsVMemRj2NDKd22cRQM9fFLQQ7cLLXyL96XH8nwGY8JibojaJjaTe7BgXYe2KdxfN4k",
  "key28": "btbMKSUQY4WQtRZJWmWN5sjfMTWL2oFLVFSEQtE1nA7gerqDpWWGcFVnLjp7yTc8SkTSvkeKyZKXP4LRMgC8c4n"
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
