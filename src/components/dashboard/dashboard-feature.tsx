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
    "46tgzjJThodR5GyNcKCyF4Sz6GLu3Bhh2KuS8GLyUFza4NqsDaAUMJXKy3RpNhvJvoeKJMqFsUtnuwU8KcUkQvgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yoBdZkJqBqdteCUktRSax2ykEr1zcBKoHbSMEiE9uizC1VxUsxoHEbis4VZ8mCjUWcLJu8jng4uWDvmGcAR1LHw",
  "key1": "3cRNvTRcbujZRXBaa9NtWNkPTGnLf59udpq2HrH5A7tvXLMrr4Kqiq92AxjCTSYrnETskdKrwBjJKz4NJD1UDPwC",
  "key2": "3uirtFpstfD9UrL2UUFz7ccHWYqaZ7DzZYqgVrwsbK8cJU1YJNoraw4y1CrRtwooYBpwwcj1sFisGuzfRgQ962sq",
  "key3": "5AgMLFo6NyCQCn5BiGJechwM4L18bujKfQJce42DMxvkNMRi47pqs8XiuLdNJy8imwtVaFCUj8b7DGGQmm7TULsM",
  "key4": "4r4qRsmHtRCWmC8yNqX3UpJUzmyM4eLsjUt8qsFbwhVBaSDkaizAusNFjXxAtJpU7kmm9rm6xFfRV3hBYoAy281k",
  "key5": "P6RAHzEofwSpGwhxPMEmBPjSNXM1jQopigTzi5TXbgQuDYwJEQhpDYLa4P2iYqUZq23AHMhsgPCQEEg9fFtDo2E",
  "key6": "rJbHE6Ui2uG9uWWDoG1Htmu1cqZBdskFPi3yTZMYohi9TfoiiFJNGMg7S28dkhggU1GNmDxRN8RXBr3F7pN5VwD",
  "key7": "21PAoZE7zwyepjQon6BWe4Qh6rKjjyqonJM3d49UEpmq2V7QEQy2hdAXK6TkpdHFfY22zqn8FuBUGsErDz6xshhZ",
  "key8": "2H5dEeMCMmTqp2Gmnx8bVzJqbrcTkfwxqvE87KVC3YBR13ADaBxFQpzWyiq87m4jMUW868WQgZjzGtNwKumJZQTM",
  "key9": "5YZTcwC1fN8qpB3EVTSGeTE8ThLpN3u12ojkTedr5fMNdaWyJbjt5emsRAwiqMCJrUiTxsZg7S2UcoktDPZwdafB",
  "key10": "2qb39PoZ8JxtUWhBv8JZxXcjfaJf6t56mZqzVHgGSMBeqtKPnG7sEUu2RoCzXkv6iKpRrGB2vwt3SLuxEygJPy6Z",
  "key11": "4q7WSqBK8CDkQRvpffqy3qwtpXC479ZoGV48o53qmr3UHXkKgpvWfoDNWStA2pvisVbqHG98uVGnh336sJ7sfVsN",
  "key12": "1wjkdEdX9XM5DKHnQBzT2yU6zm5Jd41jKJPJ9o2Sbgiyjo4fBL8GhvcjqjABQTzSrvPn1D4m9MLLMtZNzkyB9fJ",
  "key13": "4xutnbDhWBaSThPa4Sq8wkG22vwTN41gaxntg56SBPRGwHDN5wxUuhDyHJAqmXpNKoKaw3ZUG9WunW67kJgy3ANh",
  "key14": "677FVNEe3XdYhtMHH5DMPXi4L86GgzP9dqPwfZ4gBEwAGWmuNvz3Afdsj5QocFh3ARsoeBhuAoxXL5CjwGXBGSMs",
  "key15": "622rdBJBGf5hHiRGTT1dD5WAk6MQRvNsKtKZtAqpcmpStUibbWHobcPvrmVtbm14ATJkFAT5ixZ9gDuLp742Y4zT",
  "key16": "3sKuJfchwjKpK7P2tisCNnLm7g2q2Rr4ZjmtvH3zoh6xi72pjQnyETkVQzdFwuHFCbx93qT8XZMsZMQcan4ypqsG",
  "key17": "cU8iVcZgxnd6vTX4sNbWw7GG3CQat67DcwTf4tRbvtyxCXDNNkJe7aYYHaevKpfZQLGRDYkwh3SUETmyFFuse5F",
  "key18": "5QEfpPaX5mtmdmJYWVVywHdkGBbkC3w1XNjA1hcB2QZd9QeQyTKL5LwLh1N72xzs4kwNKrbFDcvMXfW5u7Qah5U4",
  "key19": "3nCiGCvEX7QUeLgMzt8RPEAmN3ugqycA3CYDRCZt8AvfqRqhCUmkdpuknvDUtroUVHt4YiVKRauJJoNDyQjtgfbS",
  "key20": "4ugsrSGMueVjZ2dSES7r1AS89DDefsexhsJAgXbv4H4WW6xbe19ewDWajF6js73RTTB7XocMYmXxwiAeQtB2sJNE",
  "key21": "2kPQkcpSLpv2dFoazjKzeF6H99tK3dPU3Z7KSMPNJ7BChg3KLCSqSRTg7ewckv5YUfKeZEQuhGwSs9tDWYxZpivs",
  "key22": "2CmdBUWimhs7c3YmiuNihnMwx4ioLh8svtLbmX6qt1Zq71Hn2yPy2bsttNzzbLR1VbnTa9R8bVjA7ySQA4LsjnW2",
  "key23": "ADuKiHdqta5dyPZ41PH9qtUz4iA2UVu3NuFE7gMd6zsJbB8PPZmta4W2xGhUu3e98wem64BNJDBE2HdDQhpKoU6",
  "key24": "7WNBYcqjhEbk481MMqY57BXJE8aSxP7VZzN9ggxNhfmSva8SJ9n5MR6a2yqFz82aMeqncvxpjcso18WRVy2Ye94"
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
