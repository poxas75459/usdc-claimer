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
    "2uzw6k1QVzpXvHPvBQzDTgCoJsmJGoDE9VaW9ehjhkMmnbpcBS5FjDGaZmFxvwu2DgvYsmiyuUd2LtJFuXuMbLNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pb386pnpkoX9uoaoSumnHfpTLdu2QPNXhX6Pzf9kntCCsbwrv5LCzLkM5LgwieK81EVNvqBRyjHhCvA8F1s4wDf",
  "key1": "5GjAQZVJMEct5xSSyLZgzCtRvh7CnYxmXTG5zW3mWMedXdEJpLzHiBkysCuiLnrtz5T6YCA2MSvBr2GSMxK2iPtd",
  "key2": "29Nh2PJjjsDueXXYsTXV3quuVSzmNSJQwzEYJvSxRtyebqopvRaE9VAqbX9kQyqtp6Mxsp94p43WeL4yEko72Ayy",
  "key3": "2cb25F92MBndLH5wVxCAVZSNX87Kc9uHWudKCf4co3kFFRmV6GkkoW6RTsm52QSJsR6UfMVs6RfJAKRiehHpHamC",
  "key4": "5T7Nc69aXxivrBM8Qc7VtZzgwVfMJY6N2ozMRSkB71SJh3ihG6D6bzyqUScBm5PFtBAav6uNU6bs8rFDkggcRYEN",
  "key5": "2Cqeia7yAwNjh1Xwiaav1FQCffbfWGqsUPPeKGntzyzaR4idyJePBsq4woS5DDnj2wR9LNKjhgWaNMhK5A3qYdwc",
  "key6": "mrFMpYhQ7GbqhR5UDUnX98kAxMe5sFupNLZGV4c5KmVVkZnUKxBp7xtcgrumbSZE2qLfHykZzaSVhJKHcXrcckR",
  "key7": "zN861HQWZcHYKJXjGz6X1nX7m1KAtxzEPG9WpZ4ob1Pfks7vi4CSnMLj5X7awDUfN8ztB99v86SfpTuZdn8xNRu",
  "key8": "iLTohp7wa1VKGwYXEsJGuK4GVsP93bfj1tHmAgiBLpBGa1pjQ1MR8QyHrKevTuF5kJnMGbqy2sCeTdBhE26wm7e",
  "key9": "wj4ZCyGu9seY9m9owGY8p6pw9RsN7PWmwKkK31oAU79UsxWTwiLTtiBRom6PrEfWUPt84X1rMmcPs4z2CaSUsXP",
  "key10": "FBm9StXbMZmioEtw4D3jR8qbpu1tGMRmDDod1ecxCN8j1mfKS85aWQmzfh5eKzYE2m1E6nMWjWveo8eeZjBG2Fw",
  "key11": "5Y6pck7dq1oqkMzvzzfmQhNMKoytvDycQjFYSDaimMqVU4v7f6G5hbzn2QhaMhbQLWjm2fyDnJUFNfytWqPn43qp",
  "key12": "2ytLG25AwHtkNZepAVFs8VmHLSZCm6jT4gVMxBWNheTP8pXchJ1GHSNTcAnTpq5BkocgFM4pV7ks57ETNcmcmzqg",
  "key13": "4fw7c6zMCW1NLYfnHTYGcV7PHhHNyFKFpZKmGUpSDU3qqic9Mb3yafDvnn4Gncau6JLhmZ938ydQnxLh46PZbVx6",
  "key14": "2oHWRJwc1hgvDG6JECRyV92T5xaHN8tKuZEWgxcFntGRWun5ckrvtgzPqimzJtpstooZPWs4UmnAw41QiWbQBGks",
  "key15": "5kE6dde83pVNakjAdAXPFkLtDcdgJzYxY8eEzjFeMTioRQ7fP2xHp1TTcW4KfuRtHGFg7uiAh54G1fcAR6cqXFbC",
  "key16": "mXrWYayqNzqzdKGi3S57AZdFt8CkHeC7Y4zUSmrWvRoZZSnDMrGAy7mQ2vGwoTRPnu7dkSqY5yetCAAzaHWZpkU",
  "key17": "3mf5SjZx4cyVLnJzGWWvkhRZCqKkDeiMPRsUmNSRu66zAWVM6JMGaYN4aPC2xfpcLYaFFmJ4jkDYv5C1XCxqDK1t",
  "key18": "k1QjiGqsWWsXNuqRMrsiSRRqt5Cz1YVZvg6t4k47MzV12dmXGTzZ5oVuEbECLEe53iNJE2fTSHxyQ555ydFJMXR",
  "key19": "MgMuGks4cGzsfor9UDB726Rwp32DGSS7tMCvibhPJtq9VSsmjTqA81jXq3W26i8xjncQ7NQgSHbqunjiMgKaT8P",
  "key20": "3rB87UhFaWKUnUV3JrRkexsWL5bvwDW1EVsB9pnTtWcXS3p1xtf1DLtHHUZXEGVxVz8U4L1pT5KFCmAC8dFW7t4Y",
  "key21": "2r1XvXwnnYfr3hGb6McMgUtPpZpCJPAT2y2zRiPWJT3EY8VrQezHtRs45rv1TNWizhgdE5sVUhnPbDo5posdKvDd",
  "key22": "39rp1gFk5xZxEEvkgvP4LGFSi2Xr6xXz6QLJis4topMd7UGAWo1db91wUvKbpFjoB2kXY9G2TQgt3QHrCBXc9Su2",
  "key23": "29yHzsaULvJDqCMnVFPLmCrXMvdKokweVURVG7qyqCSY9UagoMrbsYQ1F1y7vFHsguvoBYgQ9XTYureBESmeirsN",
  "key24": "yyQUMLA5zprNnuF2bmwsiEM1D7Uams94HjKgED1ba8RJ4ow3mTUVbQt8ym3AuGJHV9Y3CmHGtLnHzWavMSRKmfj",
  "key25": "2spu6sQwENivgw4wk1W5GXRamTDcMkzU9PxcdQHanTpyGF9f9ovEUoFFeQ4QxuHxcX6hhULpM2aJrBW1ehDV7Tc",
  "key26": "3XgRD2rzkaxQe4UrAJwKoWFiZ8GJqziVCMFY66owv4vy1c2oFZ3ZFzPEDVzKxm133UCDh2QSQS1SSjSBMWKhiw8K"
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
