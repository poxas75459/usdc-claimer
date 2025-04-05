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
    "5Uj5iQEu8z1qYbrNviimynmJSR9CYQi3iAemxSMbPZRqp2xMwPBHX7vg9GhiHJVEcr2pjDXf71fKJxV6aNfpqhW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58fHbWoDgZntPGCXciRkmq7pLKU3Ar3e9gmLj5FqyvGe6FRXHV4V5hAEukqxNwkNoDgfDMCL1jpvC8uu4XFyB9ko",
  "key1": "4mB57WasbsgSgtWaaqvBe9qAhY51sukeDnD4QD6GDVeMSj8ZhnSousj6vGwz2zC1ayx7yEFUpoGgkTUViCkqrTYy",
  "key2": "CgzoQLXDBkrjB2SU1E4iSUaHnpfTfzLfkQndCkm9RwJ9skCLFqrC8hfBUKURHbAobEYrZeWhD7ZC99KYiCswSE2",
  "key3": "2Th1YXRcnRcmusCThzzWtAYWSf65LKPygPq1ynCzqYyVwyy99e3aaxcEbcENoWD8uARbJ6KW4CuN2JJDYR6ghqu6",
  "key4": "d1gMmnP9BMBxExqh2a1XNp1Rrgsc24RGiNLTzz4FqPzUVhFdaSgR2oSVkXCCF89eoY2zHn7JNFpmeAjiK36aW8K",
  "key5": "4J9rfXwJSFHQsr8Tf8KtR4XHLXN81xSZM3htxUEeQxa1YMjVrbAbX62pVcfXtSGgf5ySG74QBkXbr8aHqvZaSkMo",
  "key6": "25Nq6cG9PinoAopiQUXET2RsBo2N53a9znwiVXR25bk2yLhCqCxATuMLAZEQa3uP1593MfYVo2M2uZqLHJM6Jb6n",
  "key7": "4K7cY4Rtr4TsVFT2Cs7wdAmz1mWFYWEeS4eHXMXt7VrRKtQhkbvYWbEGVxLHDPXXb8kCkSK1uBY2mZUo7yHmpwWo",
  "key8": "4DLfZaj4ryWuvM1kQH9mLCoyVGnKGKAB3jEk4shbXW3cAoPwmURiQPTBKr1MjcANmiTbq5vfFqW7ZQLBUQwxYu2j",
  "key9": "uQZTuZUvMBnhmhCBCCrnkAQwVmirUJVwGbZueKgD7hfKJGSbe3yBz1AMGiYUarf9QnQYEjYVf2dZwdKdeYCyQ5x",
  "key10": "5ptqr3mXn4ALVqaxJpaJuayysHSUb8cWBukFGhJLQyekBBckpRtLHVMSbTTerY3XuPTMvNXWc2K9B8QfDH81gwBy",
  "key11": "3HcpgiAyijPeiLoQdSyrhfZ4Kz5nxF2CLUPrnSGvNVcyDfbx5uAGotFvSbhL9pnYH11qwdSUFZJGbKHyTxz96B8P",
  "key12": "4R1FUFMchqMnB7mfhWBdZ3aQBs4GPmqwiG2pf2wjXw5eqqxiD3TGZwT7dyS79654Z7XuXz8Zbc9aJRfSeQWSFkRz",
  "key13": "22Xo4Fp5vrm3uZFRki1pLycAFrxCdV6X29LNuRGgHYjCYTPC7vYDuL2Gx4QqZ6JpWduDEpPcUr4rL52q21uex69R",
  "key14": "Q8ck8QzyMYwhsas3K6XnNE7WjsZm4Px2r38Xz6DYWq45zypiU5vhC1azVFDgxmhhMFo8v8GhjyNEu165rC7VWkK",
  "key15": "27mLbZAyzWgHpY1ENrNsD5N2AK4rfxbQvmBbphCXmPTpTuCHnbu7qXEq5NHuw7NjuKTGiwaCUKnvZ6Px3MLYucRC",
  "key16": "3v5ti4GjVZvVKhn1LcHeAz3Kk2Pd3ENemN1ZFaxgKsK6sBEfot5BeTZX4Drs1E7aCD7JK5acGzMPV6RRcmmsDpzj",
  "key17": "5ubq7YAeZztnhZDnXBCKUMjx36acRDnBsoraK5BAyzc36urSWk6A4NB3PC6hayyMXTtsGzwSfkPisPRNT1wsbnzy",
  "key18": "5muJp1DgqsmZjjcj3EMWLoK9GLK11hieiLjqs5vSF3NQKWT4vJaf9qngw1RDe6tvtD7ji7DeSqANEijMd65siFRB",
  "key19": "4MgmSMGV22H29zyT7fjtbrjmqP6BB1ofJxSLNBxdn1XTKdMyY9gshVXAFZB1URLMYkHEyJW249vzWeELgAqCeKW7",
  "key20": "5kRE9fTdA1kiqABuqcWRgoXmRRDWnwHQ1WZvYTgroz4dSf8pJYzGAMvqXxdfYd5ywj2LpgTisnLWuh1HXcim7bKS",
  "key21": "3UnJMwd2c1EeBJrtxMMcBVQPSbJajsvJN9vnrgGzhMYiEMyJa2Qk1vxUxtvgKGCh9QPNJmpeLHfYTWzm84eE2ZVA",
  "key22": "gSXXzBr2BXvqgaR76SiTFSRf8WyBLHJyzd2meQ8diJmy5hhNc7mUZ4GjusY32DjgfZzQJGYGab66VwRHgxrKdaq",
  "key23": "33ENX3g5TLAVZJGr5cn5jbjbpT3jT22SD1TcB882DgAZHB9VDRHXYAHiGutFPqSLwfMhd4jiLRWxMQ8p7CAhbccF",
  "key24": "5KRko5NNgukNoLAsQUqpFPbgb7SGQTaEGSPsG4qwJ9wigw2FZxPfviCobdJGzoaY9cKoXPo1uNvUa7aBup8DXFJ1",
  "key25": "LSL7xVWPFA4Eekmneh9jG5dBRp1Wu5SfCmtmobLUAG9qbH4B5sVYFUrYcuzT27jBwGH72Xew8KSWPjGNFUX3H1U",
  "key26": "PbSxKVQEL6A4aDRfgMHH554X7xFboQtPaTdEAZtjjrf5pnBvL1CQQxMSwHgWPA61DWbgUgwZoskVRHA6M2xoqsL",
  "key27": "4gANkZjQoiGCQtpLkC9nVae75j5JfwFuDCDfDXrESL8mtS9HLGXgXAUM2MRXih9f4sL14Jy1MDoU3FN1C1ENdXdE"
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
