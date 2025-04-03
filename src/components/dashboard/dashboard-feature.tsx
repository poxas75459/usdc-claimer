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
    "5A5D6bfQoPw1Z6nJWgCE7HGv2E3DcM871KgNqEGb3CAS8aPaEpmZycNvRATXw15gN7ukDamkpkAtMeAp9ib2eezN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Aj27QDy4isseSJPSJTTcqrgdQa6ENgNhKni3smZjKxFsp587DUDSgBzZhFgAFQLihGbkNZVEbgkmvq9xZ9ay3sh",
  "key1": "4yWEytCUUdXYKZLCPgebjr69EdcWdBmUZ1VqH5vNTKXWJ1MNidHLhG9Fq4xYjPfaq2c8srrSfdnxe8dRsKsRtKCk",
  "key2": "5kmBnEtN8QpRRUX5u7LW9sfBh24eC1AHbSkPgUDsLKs2ZMKMjwDpPwbDR3DAatRkMWw9WcfJZAVJXmK8pFwu7d3",
  "key3": "5ZmKJ26fNHDJuqJsgr1d91HJSWuiWLVm11kLd3rGmHXnqBBbpvDA28h6T8AuwsHza71ahCCms4QG4SG2U2tWxFwQ",
  "key4": "3oEymVWM77nCmWf5Z5b47WL7mijwgingLqyULMFJ5QanWMLv1UNJrEpdGYMgiESAdFv5nMGjJ3jeWChdCSwkha2m",
  "key5": "5DaPNLLxdJBGuzcsw5resK5FjSbsTk8TTnbKzYxWESgBXzFZYZsFoNYV7GRG9ZJrP8Y3MNPy8UBV9aBnv4QwRGdJ",
  "key6": "31JNg3Jfo2YR5sUQJawMhqZEUSpD8dbcSwQmR1PE8aYm72JbC7yeqoBUiJyFAWmmnsTsyaNihVdWiXYAAxmCAese",
  "key7": "5proyuXgb5tsxKsAN9kkyuAUDdZf67ykXkbVoGXfneMwgAoCfMXRAaoQUyxTBNe2E9xyiYbe9fkju2SKPrVLqKdx",
  "key8": "3dmbiivHz1m87iDftrBVN44uTPVbjmfoDgRTC5Hn6vf6dVLMxms3TEE5LXoMSVANVa5DQwYTcN4qrFGKxL5oMTvb",
  "key9": "57bpSuZkzWiLqfYGCi4WdEnEHWrx77roQZfxd7v5hoFmMTCEBt9RsxnxoaZcgLia5R2qa4jpmDQ8CLqMCMzDuGZ2",
  "key10": "55dRnF586ujmgmD7MvKT91JAg3FbTewHiDNWViMD6H9RdpCaJuh7shL21QKTbjsZDYjWkASJoxNGiuu1H8xB38vn",
  "key11": "3uuGzz47Mpny18bWW1VYoDUzoWCj9cKaE51zU6neKWYtQzsU4ci8FiWpnNimEdPXbK9PLjhrmSGMnymngQLZx1h7",
  "key12": "3hHs5HSeSexPNPjLiZoBXPE4sXht4bKsLKARaN75cR6XEJQWHXn1i3J7QoTRjpR8koDd4MpG6vHPMRTE3uC7k8Yu",
  "key13": "2hjGg8xvJsu2Kz3S5sq5aw6i2grqjDEVvCiFXohXBDhvVvcABS1RRyLUsLgkJpvYPmfVkptBHbmRtAwu2evmVf9h",
  "key14": "NpGhaM3thZ21N4cz8mfZWNK3dcxFy2cNdrv8L69tvMjSqhQKnas4qJkuD2izZMySXp1e6ELv6hL1XaPi7Zrr7iv",
  "key15": "fP8dMnkcz3eQdBUoUSwzueDQAgZtoQdttcYpLoqsAEFJtzEM4PwGR7vtnj56Akhb9Mj4iSCQjwL3EiwxMSPKAL1",
  "key16": "58bZUz3QaGmD5SwB24aKQWjiwzfHbrksqRhyMVrgmKaZkCtY3AkssKhHnGJrj4884gGj1Qb4ijawf5vG6FYRjgJY",
  "key17": "b6ioB4TabbbwAYqfEt8F27avdeiHScgh3fbv3PjAhHR8XV2ntL1RdYVzHBbjAf2Tf7eGnXbmmXmHkVUKtpuusQM",
  "key18": "48UBSHVSaxvUhDSYtgWqVQsv4JJBCioQ2MGUgDuaKUKSNyuXcCEoVZ4D47BoPGB1kWQxyrDck4Vy5dgxykcBuXYN",
  "key19": "2Sbi1njbk1i6aGT72jU1iyqjmMfYp2zD3hdwd3FNvhqL4QxSpxnhim7pRtMjg3RkZfsfquvUSphGw5NAC1K8mXEh",
  "key20": "66FUmvXp8HnovRLJktrc2Rw9pVd6b14yanMPnM3pCCzxy5AKGdb8D4sTFakoZqrjpQtvyZ16iomNBnZefc9MKKsV",
  "key21": "fDLkMCvkVvRW1D1c15SUGtaBYkgpx63SzPujWuzAqLkdq8UhTQg5HmPqYFTBGS2nyHreTQ8iQvkcbKPfjgkuyFj",
  "key22": "5yh4tTvZeBqDKLkLBkraHBJ6d4twyK6Nr4aNsnbUVQZoJAKY8EhmcH55KF6gpWCDNyGhFykDWM8AxSppa3sM7dkn",
  "key23": "5sybsTmpW7wmbZXzvhBoriiMGt5qZ9KkNJCT7Cvvttg4qe2DyQJjzPDz84r7eVdq9XHryT8mfdnUtssVWpfkc4Ri",
  "key24": "3aJcUGHkwSvGqzdxaUriELrDQvcz7VptdorgX7UdtUwvmJM9iRjqfis9PYwQssZnjqLsfRdLSZqnSr7ah96CucyV",
  "key25": "3YQVYd4Uaz5yYUvig7j4J9kguJ6mx6auy39fJumCUxREYE3L1hQyZAKByFgaHJW4qriFKfBEgYRE38cZvR3nWLT6"
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
