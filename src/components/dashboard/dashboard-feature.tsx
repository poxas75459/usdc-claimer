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
    "22vns2kwnuxb8PE475SNMBToGo6A5NVK58VjdNfWfLbzDjSrPudMk19nB5U59gKx2Wmsv9FsXUgvRvQPheu83wpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a1mviKM17xLbsHUaKJktZYxmAhCuEeHqmtt8b8C2K3BFziop3rSvA1aK9CmHef3in4NJCBqYw91o8hFZncRxeRj",
  "key1": "5Qt3XAHRH6xUB3zCMtZb3VAxdyvosknX2k2rp3eGSvqdZzBUUdVgFdbMqSKqmGoGpxeRjP51RUHTAsZzKiwTabt3",
  "key2": "2c1dyQqh4D8s6fP3vKqHXUDzZbU26cBywrHDiJAJb4qABCH2214abXHHTKKT6UqxoC44RpT8SsGKosz5R2EpzzJ",
  "key3": "5cW7REKLZSuUw7AxRfxre5Ld6ETYbr7QzvjAWuEA1TEr9HFpt5nexuytw7uBNs1LCxQ5d1gAEC4swhrtWC6kcMTu",
  "key4": "2yFxnqqw3DTDZDYYbp2SmX6pURnB7oHh4mXyqAaTb616zk92nqoAtEZndX5enj14pGQKJdKsV3tpH3mMXZ9bKWb8",
  "key5": "hUf9mBMjWePxjCxhuFW7mUX7A73ydQ72E6vunXmvJUbEviudebohqaSH37w8XBHH2KdPHNeR7SPjsLAVaToJ8m2",
  "key6": "2frgd67sj5p7RTM9tMb2vrCvoT3sNndKtENCCDasVC5UiZJLU8hWfdgF2D2V1SK4ApPUVJXNawEc7en4aa3wsS5T",
  "key7": "2bjmdFir3CBkMnL7GGapNpabe8ZTJPBXrB3EKM584yMotYA6t8TrSHbv9zUiXriisurY2fnNHkL6RsU5KPomX9cZ",
  "key8": "5Pkx5rJurp1iZXrT1yEAUR8bwnJ7aXCw9JLJG5Ha6ryVeREamEPzeaU5MoxTfXAp3m3UdtF13w1Yqxee4jPjYpoB",
  "key9": "3PsP2sPmweeQrPtgMRWX3Dj8iS8Eg8pBVW9Tt6u6TAxQ7DcWvj2RGKVNX2ZNjQvobwxKXfTXsk1J6eBTfi2w78dq",
  "key10": "4G2oztvP6CvWfgZarGRHn88w4ndffbA3i4wbJSqDDymqKWHk9tfYWuCheAcv5Kd2cxVLkCd1yDb7ux4md5CqpjeY",
  "key11": "4iFFFZz5Xia5GdnqX8UAqMacTaNk2zjoUGE9k8s7dUX86ZHCBf7Sddb1YY1CP8EUiY4PLjDHJdJQEAxvsjevaz2s",
  "key12": "32itbWp5eQmwX2P4guQ49FAnczHiwExdY6C8e8SSpGjUq29pjTaQJENFGopadEradSsqkSDPyfMZeeikKRFFG7dX",
  "key13": "isX31nA4wzDKNgcqpNyVRHSfKyrqhNN8coCh18HaRYEfZLVPLcoPFifWphYjYEFFrfcmaVcnzFHZM6V1KYGD64R",
  "key14": "peKRMMtpVJmMTWCzW4jbYTtSXxZTnobkPKM92FAZBC7EJ2Qadgm9RLjX8NiqZTBX3Fk49qYG2Xb56YhqRsosfV3",
  "key15": "4YbxtYkvE9ady5aMye7MYiqbMnsnituKxodc724MU2yBnQA4jB6qjDmk75Cb5YZt4pzyeHvL4nXS2nJVpNBhhCx5",
  "key16": "2UUQTXayfxmxYRFAXofzWuzHmeaFBqaiR5fCjvmaMMnGjPLdJBP3Bdm1nGkQ9CXscP24Jgc3fQD9pfEof85m1Lid",
  "key17": "4smqzHnZTv4gRFarFp8YLKVUhzBE4FSbT3eBcJg1NVnPh2nL7NKs9LDPXdQYbLN7aVeGGMQcaQ2sXadzNos9eqzr",
  "key18": "G2XfETGdS9dsFoqBNr8jPC5H59QwGYez5Hidi53d6GjoyGFXQi4zimPqwevofA67EEpwcfcwXveYuYovaF5dWce",
  "key19": "VDDfKV41Umoc2VJt4v8Qd7FMrPQ5RRBtZMPwvN7AcWw98ak1RzvQM4JKu7AyhvW7JKje5jcwWuxCxM6mExwHwQF",
  "key20": "5v7tWbr8LurohWL37NnsDXT6D4jr9Lmq4E9RXRQaKuGaLPtb3sC8nhA5PVQyVCfxdyPHAnF9gyQWKLtMpfo8THq",
  "key21": "31zo3sHij2tBXs4QQK4dym6aHVbMeG5ggXR9vEA5hEsM3NaX7Gpsud2wfS3bTQYEGS2tuh7oZpvbEgP1pcjJc9Ys",
  "key22": "3LA3mditwS6F1bNwcEziAmf6et5868d84CPTqf3rAtcXEkqetPwVMAyEW5XyYhHBQqSCUgJh4gMaWnz3fV9AmcdC",
  "key23": "3UBqTXEjb2CumTkh6aH7pf288XVNbDdF6xQ3w3ykGidc3a5XYYvypSY4zZT1EHvPC2tmkDp44MedNdWAdZ5FbG3S",
  "key24": "5c4ife3o43xwLoPBaWcLWGUR8AbV4u9MfDKGW8gMP1QDurF9DAPS9JdwtUUxnRjFyMas175UcMDsG6DDzhGEoFcb",
  "key25": "5JMvX3nqsA3tjM1JUJVWQ1LrQ16y1KMMPNuQ3Gy78PqqKaqwis6U27iWdUzEfXnGguRzBah9w6RL3BVBGt2pKc97",
  "key26": "36G5jMUuFf6pJYKF1vXykZaf4xN323V5pKtH754MWiuZEaekXQ7o2aTgjmtLASJVAnTym963XS35S22w9hnNpJmf"
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
