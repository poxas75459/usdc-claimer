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
    "CdUnQhN9dfN5GQar4HRJQnZCQtxd5vZUbCvfbrn1jBCayPx34QsfgKSaxQMWhRa7ij4Gx3jA1J5AqPQzCqNCmtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UMhY5x9pvZBd6kD3SMMnzfcCEeCFmUqcJQ8UA9w45P71gV5dF3g3E9qNFoLWxQv2VzzEDq7RhDv3dFCsAZ86KGu",
  "key1": "3DPruv58GuSPbwJvdLAx4SfjhDyofZVHWzx6zMfn3xDUwUyibzhsxkNbpvDjj8ENxmaw9Sr2RAwp8FGCoxesYuS8",
  "key2": "5nbaZZ919o4rY7b8UFXm86eMkvNs3KChzx9j8CamzYxcwSpGbhujSjknDySNoZbNWrvQqaLDs634ms2cQ32f5LCo",
  "key3": "rM4fvp1zrSb8zM265symS8AHkhNYEhyzQtx7RYk8qr7SKG5VXFiC3vuawv6g9WmPeGz9dv3Ac5k87Wd6198SYwW",
  "key4": "679JxoxwRZuvoSYPGE1GcBuK7ySiMu6bJubLDu4FMVz8hj4rDRzcdsXP6P1PE88NwptKzvuSbA8QHTprTNXKZ8PN",
  "key5": "33DK2dKEJxF1iNZFEvMvZpcW14ASK6X3dDpFZXvkbWiyE2w3wft5czFDe63gmknVWXtFbRd2tkSnFz3ijQpJ9NcE",
  "key6": "5XzXY1a3nT6V63kKG29K6AJrQpyCnN8NzeH9xs4teSXPoSx5AC9wbv3opeQdQbLa6FeMRKp4GkY2qy5nADetsUCJ",
  "key7": "5fkBxKTeTNb6CUQDyHV7DfSkrfLvLEWy4BRaZBhvq9nkzgRALADU7VvZQHQfK6fKmdYNWykRiTzJJSNbUBnMwgGz",
  "key8": "3AMjDSg3dk8CoURX2t8Jh3HrE1tK8mKw5XRQUNLzdfnM5evxnT6eiJKMTknqHbB6CQWEdhmtWTwsw9in1niCcbcv",
  "key9": "6ri8LjHQesovQNtxUzEmk5qczcMPnCgTSWWgQ6rXMdgbMtfekq1wzBqokkuKpRbJZ3xxdEamW3e6CoVkci1urSv",
  "key10": "4BDX8ML6uscd54KWDu1FMnNZfceUbyTFNJvSuPFqwk36bRaESvaWqinMaWnPRQnc1kpUA3GhMFdKQk8DqgDFkSJN",
  "key11": "4NCCpUQPUFZ12w5YEd1juP9D1fYzcbXjeCVdQmwM8x4jDJ5o6WjEXcix9zbxALnRPu9ni9Jt79aj2QMnEj6BsZLZ",
  "key12": "5XdV6Zh7BKwWcpRpjz8B7ysget3UGQdavjdaP7rrvq1Cx4n8HTMSiNEkpnwwAokhkn6vpxFErTJF2yjJqkMQyPqz",
  "key13": "xoGBF6A1LP5qFRnbNGipRpBCtmUwXD3H7b7t8atCh7yEwrCgUZvNB29ePtcCHN4oUpHPwotHkLcPoqLLeCexFzm",
  "key14": "2KM9cqZsY6ngtAvd56HeM1AJtynm9fmZ1ipn9kLLBPDkuE8WLiR9wRKgTCswvpA7pKoaknXH9FQP6G36RWX6twto",
  "key15": "2VduJ5vbec1osznE5PpZJwGb6NNqSoSyML7FnzW73oH8H2HdpHHAHYUAF7LaSd5PJVWED39zVXj3DPyd6qe7b6iY",
  "key16": "5Qt3ud6etV11BNcmpzVfHhuN1yPfS8bUgdhUZ1NmMJjVQNwxvpBXUQYeRYNE7D8xo3p2tkFPPqpHi32Ww4DV6LHZ",
  "key17": "2MqxDMW1TLU95DeDYBbJk5qtUjEZVFXEqtuMWDH2QqLJceVFBJJzRvYEPRxDQP7gzAPTWtpCFFMwiFLLZBz7wUbq",
  "key18": "2xnSpn88Yxj5YUPj4txnfxUH6vMDMrXimvB96esHD3yVu9MispecnsDWJo33fnBBCSSc2XZ7qrbCg8aXXCfbZQrR",
  "key19": "2KGuzYuo9wqSjJmZDK4uBxgD8GjGirvUvkMBjQXgRwcdSfkE4Pj2GBCXNqibU1B7R7NeeM7zCCt6vfQ3iitSn66o",
  "key20": "4VN9BJNYjyTJ2TwKgu1zk9gf4MBRTKq3hcfp186EVRAeYaW2vURi7h8449xT6YvVXUeFDEc6aFEhkQhaQizpKRvh",
  "key21": "3gkzriF5V5cTY4KNcf6qmFgv3fzhcfGV1bkcFn3XUkKGqGjgaHUfRFGYSvJuRcTACLyztFde1xpwmyTyDqc4bYrt",
  "key22": "UDQK9bZf7YWQnDuCh8DAKpw1Wu85rE4nYwDYuPLWhSWyan4p1jtcjX2cYch2pYnSFzPQKzZkykGw89d1oqwbsqM",
  "key23": "5NVB1qL9WBwJEhJi9NMEkXVKiUfLCkr77N3VJgf5fb378uVgx59J5gwoKf9XF9JhhurpP5XnpT3whZ4X5ARzP1dH",
  "key24": "McPqzVyCEDF519C1G2zAPFUQimQUCi44o1nwYezqQKL3ALu5r4jo1b9ru5T6aD4jgSZBStjBtpzYwgH2PryMYog",
  "key25": "2xEmuqAkvkeLtkbaDQDiC2i9uUWn61RYAXZ5GQZ7z1rsZpE87wrBP4Z6rX4K7agqh4pAU6kSiD92yxGTgAvZhUjo",
  "key26": "5tniUCUVaptmHCTXq5ksHEg4NeYbQbkjL7VS43Kjh4zKQWMaV9Z5Heot4JmHTR5dA6A2xk7iZaay8Bwrbe7Z5M3x",
  "key27": "2yS9KNE54J66bePcBdjoJTYFkZWKWLH6JfeZR7XT9TCJmqqYSnuw27iS8ePn8vPK8fCdij4NbD6Wc7MGjnRKkvSa",
  "key28": "5ztosZZ7hFpV8SipHyGuqqfP6sPYtct6vbWjf5Ejrdg34xKmxE7ejAh1oJKp7RFWoR4qMDs6ocS7DY4wgFbvw2ST",
  "key29": "4qJFt5wHieBqVuH2uDMQkhQyDZjct8vaUFysG8uQLvBgfczHHguJYMJuq8b1vASTqZKB8Vdhq3uNxxUwu61wjvMo",
  "key30": "4FnUbnbg34khbV3t3Zg32eMJyyuvQgFrxQtoQCN2ANnLKXDG7JXVHodQAzaw3u1B3NbqGT6DZXdUXJ78cN5Vq2K4",
  "key31": "5LEPN9WDk1Kv8tDn5xKi4HdpMnwBaYRiMUQBUH67AKsUGy4Y8fFKFCbt3BusZHdgSAniMydudEXgbS3Lr533qLcg",
  "key32": "4GhgdAmSFwUNPEMFKvzAg4ybLZ8xjmjnSyVP4hoy1oVctMFmHfLzGJb4sW4Qn8CG9YaUTPnFWH7UsKiXoMMdi8Z3",
  "key33": "zZ16rugHJ2CP1YtDYef2X6MNJf3pG5w5VkaB3ba6YUFfFisMcrCpgqA51Xa14kYzDQQrSjH9JqonMYzbmY1d9zC",
  "key34": "4Qn7EcjRxBNzoSCN8pyQnvGLxALPPZzuH3sxmLsc4WJaVjXggPaMQyoZSFsngNuGQEjVmzamFo2nfhPUpmS6qVc5",
  "key35": "3ZDyUWUed2MS1TUWsks9J8h5zygYywkkECEXjrrgdtqbP7xisKBXUns2iwgGEk6ZJTQ4mTNihu8i2wjxbAfpd4P2",
  "key36": "4jYQGrBzNrJ6zcAVooKAjdVbbpRNh9BNtKBVKu5TuL6XUNTEboxphEsppmaDEZTkn3P4ZD2575PE4xRRYZTEdFMf"
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
