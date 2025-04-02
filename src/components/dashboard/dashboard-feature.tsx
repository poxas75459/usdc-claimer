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
    "5WfxbM7oLEPpVZtMfrvUmoG5nSV5JGaD7HeVquFsSJroTA4NAcQvG5hW8aJ7FYJkjeUXTKJXowfuo2WDrXrbLZGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FL1kpwfxn5bvorJnLLKLnLRAmUEjgCSNaHehMsRQSb1WGdDVs9L9BLCGffSLNWE2TC7Ctn6ByRKesmDKDgS3SQH",
  "key1": "4myRSfU7Uy9VpHkszEiyvv7A2UYUJMCah25LaYQPU9ZkFEoThKdmMBjiqVTqkzTtHfz2cfRKUXLkjq8HBQpWieP1",
  "key2": "4mSW9c8r4QKH4YLidA86uoJM8xeXwofMTWNSjUUFHn6amPaHykgHC5SfE93RjmowLEjrNLp7xjhy3eihm5s6NN3g",
  "key3": "Cp6oR4xupApRettdBTCHqAPdbrSXoFAstxGur4tfad7brRkqw3T9iQTS8k22cQ5dLFBeViGKWywxY7je88JbGKS",
  "key4": "4866m88JarfxS5JhqQm7JQg5Fu2bQ1MgYahuHmcNUtjbpSC7gPwKekao2YuGgqSyzdWfoHAufTDkgGMoANoYCsUg",
  "key5": "3dEZtA1DyPE4H8qZMHFm3bLGCUA3poZPkPvScrMW2DVDbEcXS13RN1PR3hGhba3MzMZqh3zNrrcJheNrfgGoy8RT",
  "key6": "3vPekipCw7y5TGT5ySNGHL1s1pwHaYmp7meojuinMA8q5Pf45iRLVPwNfYC64ND7NP3NAFLhBXVhWesgscoF5Rey",
  "key7": "2vMnZwXFyxLiy4x5ig4B824Dwgurx1oGtviGmWMq2pMNvTYmctE6EVC4hYJwC4tSQXENgzP4ZVeAY3U66r7qtLP2",
  "key8": "3eVh6jwYwwMUyVZSGLvHp3wyJxfhz2mgHxDVo5f2aCjuRtsVEw4XrEiJi7XQduAzPfeBMBy7jGoP6DacDFuC3Dfe",
  "key9": "4dc4cpmmcjPyAJbRNkQADuVdjBaDZ18MiBEttp5w6xzs3nrypn1V3BB2NHi9rrB929K8TxmqnbbSw9653GpuyzTg",
  "key10": "3YQtKEd9a6iH3XaRrMWiZvgF7H5Zf5259Be1fackKe1s1tpDqeAHnbpRwVerceMDw9wyEaSenWFNYpbpBNt1Crn4",
  "key11": "3ZgPYsWfy3sbqUjEXKXFXeaB9A6GMqUyUvzExVKzaWVixYJxtPj3mCFegY6YVoas6nd2kDiq3Qk26ioxNobeWcgQ",
  "key12": "ckReDVzZGGTw3YnXUGXoSAYpmG6TNs53dPjRnmrNAx7EHk7vdsYxnbyggP6JmDp8Nq718EoK9pqtueFjDKwy5TL",
  "key13": "2SmCgJFGbA1XvyLt1kp2eb2BWJxqYMexqBdHZFd2Q5iw6EL2Yw2MtFKHhfR5i1VLEP4ykF45rD6KVMe1YxC85GgS",
  "key14": "4B3ckvCgbzFuEjrBoxdZqFT8jWZp3M7tPktoxwow6ZFmYLFyKg2LrjiRtaAVaW2SxFj52dsYF7rf8wdqtTaGB1NC",
  "key15": "5bdNnLzRHnVRP4RTuZ6n58mMGZTiZpPhgdMCk5zfpyvAYT3nB9HnVmD5L5M7nG43m2aZRzpuNJMdggsV6prg21Pd",
  "key16": "kCd5o3CFnGByGfVpH1HSpFHvJnhwhyHanMuQzbaPK4QSpgDo4ej9nzZ85NiHraVjYK66WsUgHXYpQRDesrHsQx3",
  "key17": "2kmH5yHYZV2NwMnng5HFnTeorCF32mBVu51vpVaBt9oWSMWLGgH1xLWEH3kDcqPDCqZC17YyXgohvwE8pvmnYcHG",
  "key18": "BnPcNxDe6CEyN7s6yU9zPpipZ9o2uJVGhPgccUDTT65wqYwm1ioJssm3wX26QciUJr5BBWje65fkJYmt86aV2dT",
  "key19": "4zFHqwjwngnBB6fMdgRTgE9hoodJzx2s4AjxFBEgQXaNWbXRngCMsK1hBefcF2j14JY8WVweaGNQdnu3xPK7yEvy",
  "key20": "4ruzM1kWg6JDzeX4i1otrSLqvsYVyokdBGgVUAryoZ6Agi8FFP7HPYXi5vuMthQ5AAg9MTuek3MqHtAqPWgJiXdH",
  "key21": "3aoEJtznmRBnZakrzeyUNfwhdAVUSSuxcZHnPsH2AZtq9aXtCwyVDWpUpoziN2KFeWLRUT7uoDH35DxsP1JemXdi",
  "key22": "2fSCL6jS7NX6Yjbn8h3DccWjTFbK1pwqtRMnqQcvAsY6nfrbJb1qLrQaMppiQ5CEdBVE1WcQCwtd9NzTQ12ARnVw",
  "key23": "3Tz2SSFWj2F5AWEQtPdVad4V3sa64HvZUZomtJbgiG4waaJnf5TkkXAZ3CSR7fZBPNnjZKoPt4p7fJjbH3Sd82Qz",
  "key24": "26ZsKjJYrxP9zASbqN9XvxHgPk6DJbHRfssq595YMjFV4nycXYdXwU2mFce6D85MAQxprpLcSYj7jB9y2FMGd54m",
  "key25": "37LpDXGtPQTPYgKNd7Wx4GZ9GQhrnjhiyB4Fa9eJbyMpGrD8nrcyP7qGWBAAhF25QFHDPSoGjWBsR5Kij4k7eQhm",
  "key26": "3Y2S28ZZFR9eie8FW5AZFFtX6LDCRixDgS56tFE3q8yG9X1VqqS6ggRigh8DUtZ3ajnSyVhUuJ7ErRjARfFJ8Fqz",
  "key27": "5mir66hDmuHM1iTFcoz5BDvZ7PDQakZiLWSjT1C3wgVS1mYUbQCXzGXZjPrGnvYSJbAC6dTja6P9qvod3oG3LQTp",
  "key28": "NbfSwN1upfaDTg8YbYLiiSXG9ZKN1XF6WQ5xVgDwbWwbf5VVkupYqnX5tNyTTEaLgz9g6TtrThG5ruPf5bAnqqt",
  "key29": "5MucF2xoTkXFiQqh9EFpN7se5NhcSKqNoipfQV52wgtiEWHaH2vDQ8t3wHCXctYxKLvwz2KPJe7eiyoQFJGv9CFS",
  "key30": "24Fi7HiCWbxEbjAJLJwo8ZYaxT9FvybJYs1eu2YjJNQmncxBjMax38X8mTfLUN2kWzVdifDL7FttuVxBADkxMAby",
  "key31": "4EFtJGaACagpdfvmwJ5MSGemAa96HC6dbnZPLnkCJ2881Vqce3DN1tEn5yvHG6AL4LF6o7LprRELXFH8ppoZBjSJ",
  "key32": "KhLDn5BwGMckoZPfcK7nzrQH6MgLCEizgYhNTh4ceqq5Y8CKfQfkbwiE1u5nBit978GH1Re2N7W6iZRBpEjmWXs",
  "key33": "67EuJ3r273Dk1PmvULuaAoAuTeAoYY7DwQvk4yK2u1X118vmPoGE5Wrwm9ktRcbiXBhHDkHhkdS6BCRWxaEBE55L"
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
