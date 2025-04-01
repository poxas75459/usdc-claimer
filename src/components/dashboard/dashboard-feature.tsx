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
    "ao4pw1CQY6zz1YVyBpbMzbT9Nz2izRYVWRpQmEb4T7iJkXzanYnyvCAb8nZY8LBePnCQqEsjpFpETC4wT7CiJc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PtHsGKe4h1omtdwF7zkLBBYjVf3V9qrRZSYRtcCN2yQJAUYBxJeGpfskKYMUiEz9sFbRBeQ4xCisAX1fA3tCbp6",
  "key1": "2uJSUXjrJqsEo1JXgdhoTSB62LHiyTXibmehQ6bS5GtkoW9ZdbWWHQAzHvAm15MiKAEDebQxoyQPKFjzXJQ1zBKm",
  "key2": "3jQVyr7xivMzKx8zA281euhRGfWZeiFYNCzuama677uUxKbSuRcHQoqbvymHziUqzecxT4y4idYDPsWacD7kxwWE",
  "key3": "3FXgz3PrxybLZADW138nzypcGTWYtpcKLt3adPbmfayf7rtKyJJTqK6J4YYL7oKT1tCE1cLjvZBHZekk8bFCmRox",
  "key4": "5PrLL6djb4HJqnTS5Mi1AtSBfiVruPt9UniiCVhc9F2GxzMsbCzpMMuW8oDEsfGwf6qp1P7hswQeT9tPgfzJzYfn",
  "key5": "32y8bVUX1DTJZWhfvSHh6vKcfHLuQ17nsbf9fbUgapQGHjJ2e28fy6UXyWiXVdBRmL6uZLHCqBW4rySY1B5wrj5g",
  "key6": "4nRQwDBTCPT5Vdnf65x3PLR9BP8DvDdQBsSHRZ2ZFqi9zfKePUxtng3dYDjcUFtXXjdDDtXWxmYA8k7vpw7GiayR",
  "key7": "24CWBGMwWZyjDZ9NSZeLJw7VQfJBinzoDVYU9MKPp5mvZNhAZ1gLE8B85K8W4wT1dj8Jyx2tT7zRDtDe7fZwVCmr",
  "key8": "7f99PRCdM7j1poerJhxhgvAxA8R71d5kMcLhSuSRkL1uG22pEnCjvePMcqdAt7L2SXSDWAzafWC163m4KDxukX2",
  "key9": "5GdVVo9UC7Rz9UdNvWJd9jqq7MPAv3ccfmZMS6JCcFbQKTtGwuEEbUVnrsEFN8j5rYfNPUGfaJZjY2pznUUg9HaY",
  "key10": "3YjgexPtxoXuptMrXwB4stbXKmawzpYagP38zhXZzZHYSKxSthiUXn25qK5U21TUXN4sxbQoKqkmWsaggHNLr7ba",
  "key11": "5W8zKMvWYCKfSDJ5fotv4kxjoZZKtswbYjUsc2dntujGjMRUKQv22XrwXCWSDFJR2KKLk8eoLGPX9pMMTioHU742",
  "key12": "zzRfiBMGAtcS8Zc3f8HFnkdc9fWTTF1nfc9qwxycZkYry6JCs2w7exByyNMFk1ARo9syZ28KDzyGDbsgrvudF7y",
  "key13": "izEPoom1oJPeFFnxuZvDwaex1Sg69Jgx27yraepPLFjuEtaADuABxZBLmeqiVRV1tZkFgstMQK9TVeT3meoibSU",
  "key14": "5Wt7XkDtpi5M2izFAvxc6qpiq1uGNLKAqVDt7rmdj3asYcpZF694E3C15oYcvjuLiGp1Qcg9zz4DLErSju3UuwV8",
  "key15": "MM78xV1qkEVE8qB83SVwz63rGuot2JBGFAXo7DJy7XaTEFAZreNirefudHYMadBY764WHEjVu51FiQ67FMnU7kA",
  "key16": "4zyGNztJogxfrUrDh5j99afnRe5qW25Xp2LPh9R33eGghhy7tCsnXJsbpWpy9SxRNXMvaKYp9LWAhRhR7Q8TsSmh",
  "key17": "3rGLWVeQKCGq8GPuQspzXCtrgjitCvi21GxaMz69sK9SnsJvkhK2rNLvDqy3Wju99Jowhj2qyQ15oMR2x54U5Ada",
  "key18": "4ydbuCeqi9evJ3vwGp2FgB24bJn7ir9ng881EoXET1HRLC5czQTyQNbBs6ZksBEd6Nv7rf3Gz8ZEwZJ96Xh1GQra",
  "key19": "4CnA4HNSfXmTW8kpo1YTcEaGXBKQkDTQmhvYvjGiQZPvARRmuWfnJx6GVLruDmgGRuKFXhgFMm9i1gV2Tj25KcLQ",
  "key20": "27VgVYN6EhLu9URHtag5bCCBEugstnLnuQRAZfNGASfwKSb4PYRJ6HDz54JcuNRdJxjjQYAvqQTuTWRMFkbCdT1S",
  "key21": "4FfXPBjA3SqF6HJneRj24byrCSx5xLExPAyTqk3DuBWeLDMS59FhtvC3yVjbAqcrRZYQ9n5wadnbfDw9GeNFr1RM",
  "key22": "3zsEmT9KiBZeXpWepwXPBqfX6DSKmizVfNhRzwKuPemB2634mrYsnfCmWmA4XkxGiT8XsFYxkVCQevNzxCETuBZg",
  "key23": "pBSPZwe8tj4feryNbVj5N7kYQwx8k23BXt1yLDfDrjWQavBp2MvNXaZmRUUya4D1bcE1SAHJJ2PjM2zMhpWwTPX",
  "key24": "2fn3tcqgsgJZRXnBXL47xdsUkbquY1So5i4APxneofkhZyp2HR8A7TdSBt28nnkwWNtBrwC7RmQ1DAi1ZmdLjaHo",
  "key25": "3gjBWcHEMAu9xGb4k7FBdR71NnVh8ax67pdqTPvgK5zz11hnv6Jtg48VBJaXPfT22hpVa12rkTkb8Yyw34S4fa1L"
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
