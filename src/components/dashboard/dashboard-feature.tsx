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
    "2YK8Liu6eywxhypo2ZkBEc1JU4ohfkxsBtpzSEW1MyiA4NSUyDqY4JhSQMbhZ4cyQqVwWcKdCJYYq7gzwSX52Y2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qcBTiE145x6SCFS1D4MBui6Ed1ESHASrXmec6FvgSE4Gk9R8tpbgVhFxxUowFuQJtT78EZvYfuJbEWszZh1C5cT",
  "key1": "4eSVZ1U2uQymKzDfBKXAhs8smK1aRqHDi95EWUbvdZqudZmREyXihq8Mjkg6wXEpe4tXWDiKQVeeEiwL4oiwo3Z4",
  "key2": "3gUgQUZT9vt31VRd81quXQLfaN7qAdHoiAQo1SkeRyNvkeAszSBNV5CKBcTxgYyx5uHx4TzbJRfvP6XJ4ReACNzc",
  "key3": "3vL92fYQrRSbFFszcnTTCKqJ1W4Ajbh3TxfpcfGTj4vnQW2QdBQJSSu579HWXJpku72VdEFMhTrzYUcMPB2yUm99",
  "key4": "5hWAeJCZiU2tTF97JtKcLpBCfN5ZXA24zziDmYW2jbrGxN5iGAVgp5jCEbmM7WkJfKZNBk3qWvDeMT4Jq6TmBrLT",
  "key5": "vpkX8WjHy8o1B8bHyMeV4cqDo2RdaHW8qbW5XyTcxLjYksS8oijZNU6EN83mkMj4xg4u34NdhzXCx6oYzv2i5Po",
  "key6": "EctfdyYb1k1fbrnwEdDYUEvsD4LscrZVf5d1q3t1oCbA6LStktq579fzQDhWkTbYghgccXWiRJ6UKyPu5f484Kj",
  "key7": "2DAk2Zpuy1J85o1GGi8ntyv2hq7rx42BTXtkHA4Q7HHQhGxsWA6bdhNAPdnFDBZe7PoWNYbPGRM9tMwtgZr12bzY",
  "key8": "5m14UdoEcZ5tgwajrKJVYeYS9DYS2LQpvCGfx8NDLmEsBM1QcbHLv72n1QXGSZTFrD1VvGY4ZNpvN6edvrKDViVu",
  "key9": "5nSNCu2e5h1Z7QysMBoGTEJRK9yJo85k9swx8pscCeoehVs6WmiXVmPiYeW6aKkvgQJz3eVvcYFQrZJ1SJrGDBcU",
  "key10": "2z5sut95DHeEDr2qWa6h8kR6rNSNtbFAzUkuBh35w3bCSe9ved1xmpGrt8jXWiyBPWzzsfCpTntbXg76Yqn7K2nt",
  "key11": "Suvjcc4jGz4KtmLE6M32EJu7JNacHNHwCM39Y6hbRQyVnskxhwzMToYvYVGDheRMGkwSdN4Xm98nWn19dm7TuVS",
  "key12": "M9HX1ZFx1PTsbZtRkZ2ZdvpuEKxRbCc8L2mgnQ98k6wgxg3G9NjPsNk5PACiWMq71EtyMkXDpb33JXpS5LYBY9c",
  "key13": "2qTtDFEcn8s1dDqr28PLuYmsEquwLyLPRKGT5GcY7an5dTZuZhvXZ9EfmPtAbYQa9yj15ymENxZyj8NH1C2PqEte",
  "key14": "j66kBJdWczHLrCJJkJn1SFiqso4pxYvWQsgJuehNnoAiXAuNbePib5J2EX4JvrkKSMv5PPixQpmiSNxFfW7ME7N",
  "key15": "5pAdpnjv5dkx3SM373pyFZcjRiaVpWJtWJyUF6MDbo47d7rnQ3vao9fRqYvXUSepAh7zNwzvTjdfXBKD2hFdBHNw",
  "key16": "J7fTshyn2gsfixk8vhCD4ARVaYuD8auPJZ481X5jaybMz7iiwyzDFzdebnzWfb8epBiFpfhMYyvWdZZyDGQwmbb",
  "key17": "43QwgJpKGFUxCxn57zKWZsgBrspGtiVY1U5Mvsddko3DhaxtKqQLqoomg4zmWtD1FwnX3ngWFn6yzC7QjPszHsHi",
  "key18": "QNQYWoauYYLU6WwTZMiJ6wFLZRuUjstdLFS27CJkcich5XtjA3AotBsGW5wAGuA46EX8hRtWVhpLw7QwWgpNyg1",
  "key19": "4G64zhyqMXmvDbPEbEhHP68j5qpTgfif46ZGy6DdXtjkJJQ5TC8Yq1sSr2qWdW8eQgHn13CqwGNjNCZ2qKHxS2T6",
  "key20": "34izWXbMfvfZ7s3g1TLtokPdANNtenr1BufY7D73V5n5ZiUxFNYPkVde2wHVR7jyPLFAxsPFnEd4uFm225RFMcHx",
  "key21": "5vB5V5oY1uF9riTi843vT5rGb9uRW5wfGdEBqbjRogEF9gd985DSSmvmCCa9x2yDXnRaDRygHnP4gZ3KRugVdV4L",
  "key22": "5Rz8RpQgqJwo9urnaAXMuAfvEr2d6qBftb9QdTeQXgHMLRjhFue7YWEDXFj4KR3SFaWZ9sPqCbf4CoP12i1t1tPq",
  "key23": "8TQmognyWLpPEihAhuTWk8pwTvx5auXRTtnsuLDPb3RXPw1NWra7THMRXWviTNoZy2QFcX5p9ptdaqz2bjEi5P3",
  "key24": "aydanXX2z1yqknQsR19HmHL1ZxRN17dSj8rcihqQbxiKu5Qt4BamKtewT2tgci54p6n47m6r5g51kXNfrPxVJKZ",
  "key25": "3ZtAEkKGrAQ5RwRoCV3AA2zcw1Fq7HN7TFBDZjhs1TrdGhf2kP6RE7Hsddqgnfj3dMiwRXpJBkPMdgsnZjTH5Db8",
  "key26": "3h9LR5xg7qzoxfLVekx8UErr5eHwoQgu3wPYoBU4kK96aiJDMjEmQJpJugt2bzex6KqaHEit97C9WAdvMRXzBF7m",
  "key27": "3vh1DvXDu6oSmRXtDpj6gQgAwdiZ6W4CA1TDy39yVYCGzjUoTqAHVUWDrjNtsqviXdw3p9oBMMWVW2MUaH13FJQj",
  "key28": "54tFri7qPGvu5N3e2G86YkG2vgvtpne5Pvrrasr8JsZbHCTQQKGSm5nFPZsCrd9r1HN5YMwEBmw55UCGYUtzbmXW"
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
