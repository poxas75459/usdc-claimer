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
    "2X3bbiqWmBRmt5ErTGRVmNHvxac5L5hPym85KBVn6RvB8fH2mTX2sD9HGqqtBd7qRieH1osFD85zTWu33xWVwXvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KDEYjotAQgKCpf6aQQcyPQT39RfpP97hdqgMP1TK2jC7NXWZWgPcLUywpcLqGYvEYJUgKXLPuGumaxMmTza3fLf",
  "key1": "4iLbKjnCVj3CHMCduQ9P1L12NUm9hMuandK7X9H9XvQjhFtRc5Pt6fP4VZF9ZypH26ppsbbm9hCpXxMmAcArXdnj",
  "key2": "2z5RDgwbam1zBeQRoutAAyV4xoRM5QiHEEMYd1cDGwUB5haT78CRqqpCiknsLiY56xrFcLbCRbQuhmekaL1nZwmT",
  "key3": "3SB1qEtM2m2dbdPYqAHxdkTKR6gFUkyM6Uzox1uQRZpuNWEvkYPdCUjeHYDPwbPdZu4gHML23vigYZ9cwZFakZNq",
  "key4": "dFAxTwWtkV97waKYdNsQW5xrGtugLBrmxKWxt89upvQ6nBMdNfxoSRKM1HHGa7FiFMHeVoo6d6f2HFPHgPz4sf1",
  "key5": "2BKRQuA9q3pt1JPoEuBW4AcYN2ymmqqApALiWQ4EEVMu6x7vc5DQrRkpCDToXVPSkoX23hGzyEg8ARPmuNARjX2m",
  "key6": "27mYF2LZvM3uorMWRvkx4WcQjZXeX95VH4TwEJcjRqVkLo6P1CmTmZyGkFJf8yn9aFHiC6WYyyG6otPhmL3Cxcyk",
  "key7": "4UgkRP3gEYNEdSD3Z6CrCyJRTx42U3LwGKcaoSnz3cUDXMEqNMjbK6wcLDNhCrwdivkkj583jUP4QTmkWbofPta3",
  "key8": "2SQxprvsPtgrN9bvwxZ8i5s5fF6gpFmi51D31Wzsnhf4XVypsESztTA5YGtN2JcB4d9PhJu7z3mKHpmvURwrMdhf",
  "key9": "38yEK7pHq6mma5Gpi1omkaFpw4QukoDcskqJ4q5cL8Rm6gZTPpRRxSuSxLej6re5cQ4pkp7pxFSfqo1JrKaLma1",
  "key10": "55vgXUJ9tvbQRKTNjgUkYpkPWN6BJgVLp56w28HKjn23dFH5i9HqLRaqouCCv8cYM91kFccGmTo61SK2QWTACWxA",
  "key11": "4UPLMF1uVfM9XKMCTQq6QQky4CnvkX7RmyHetJL8mPQTCNgMqyEtJrq3M7JMPFa3hCHEPhwyn7499GZ1FWrq6BUe",
  "key12": "29C9wEoZEWp3rnNuJvRyp1cmwZgyyFatmCTjNcRdcHCsVeapj3yCXzMG9GEWtR9mJ1hbZtdt2K4T8whd1dTaaDJD",
  "key13": "2zYFzQdEKzr7wKj1Sdh2nFWQXkF4daxqyeV31MdPbyth58h5qCRPpSvEj73XR8qzc59yNGDa2ZJhtaJXp2JXWnCq",
  "key14": "2JtPYPnaJ5RkZkfdD1kKWUvvYootUSiDWWWa3nW7mpWVQXBJthzHEnPz3xHnpYnfguiqi32mcoL59gnx8MScyjkv",
  "key15": "3DPSzujzWZmRJvU1AB5MMNeqpmtJq8J5wg1PrvFcCmgqZ67JTWvzzc3LnG1QM63rPbTAVwvvayscUNZi9vNKWuRK",
  "key16": "27tCxUdckj66dzsKQGsuHrozfVeJXPKREJB74LsCppMbHU5fTgYRb7gTS1M1ZTdNViHB3mo6N1XPdLbLzXHPDFFg",
  "key17": "5QzohF1QepjLQ2SGRm6M5LrR6xqRvQY3hjqQVj4Gb6M1EUh6sRcdRsfdQVCkJmANqdUssAN5xirqgV15N57XS9oV",
  "key18": "2hNtSWkNqtreRpetKNttuCV8usbJs5yEddvQ22Yujcgre1zGycHNkjxKybRWQAaRjmR1jMNPdhKExetAoHwfyfVx",
  "key19": "5JpgqDxfbPv3uVfdx8xeXstgpvQs3XwQvvr5cjbkcwsF4tnBTNagdE6sqkVzEHvEjNECbmTjEB1wkhzak1ewatyJ",
  "key20": "oisoCmYYniAEahTEkmA3jbbJZfzJ7fQo2kJMkUwvjvJLKeE1NvQvb9F1FzSUQS5whKKrCzrE2zcBSF7vYvMyXKZ",
  "key21": "4RD2PJFkoJ9aQMizopEYny2zV75eZ59QyKdpF4hvaCGTA49LZ5KV9nkv3kogNyMw2icUHnRptduT2p7s7Wu2X8X7",
  "key22": "3AcnoG5Hu19Kcqw7qzXqVCDXJQkjHXGMQ6dBDtTJdCBshB35sqyZWW6Vs17wWXKB56Xb3fsNTKpUJrmQMNqpSZM4",
  "key23": "5Hm9Ccz7J5LafvsRZW75fLVFefYiUjXdp2qScd82NgUhiE5cWQdhNYadp5KMyAG9y5LaWaUNM1VcF2dRpEMe5EPR",
  "key24": "3Tvmh9kLRTXdT36Y3uAUCbKKu7nCM4pX8YGn2jNx8pR7KH7nprJF3esDA2gmopbNTXUVqJ9p3DVviiPgHqTSPeBF"
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
