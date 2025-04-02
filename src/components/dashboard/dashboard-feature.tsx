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
    "H2vmNci9WgaA8XPcEyeQWzLaWJritrAYmBc1AnT9BFtKGe7GA7Ar11vPx8vbTxRN7gdx2LpQspun8SvAcXRin1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cYzMVoB8xFwcLDfHjPkGtgkYMwSDYqswZbeVmYbUnuexnonvHxQdNjQS12b8HWqXHhvGkHvQU4wWg7vLFLKKjKn",
  "key1": "4eYKQenfQVD4Gpn4cnvcEtcNGbdwz7TsHFDbHABEqEXiZxPn6GnAzJJJqW8CiYLydfiqCx2bQq2ZmhSQv21gvt5J",
  "key2": "4yQpDQvMtUA2STBPbu7oGGmgbbShKQPMcz6JK2KcRvwy1Bqbccpi8BQqkvecFhi49XcqTNHkLdrPArZSzdBPUkAU",
  "key3": "4KRatDJGrkB95B5Q556bRLb72SezxDw6ydTmn7p6g6F9t1AsfiW2SeqX2zNp8Xoth2ipNfirgAFxvkQ2TbGYGV9g",
  "key4": "4Fkcj7GRQakyxQVwi4mJ4m6W46wG8xN4LkKRNCTsqzWEu5QGA298uNhsB91vdmsKidJxi2yT49aJqpmAiDeY8bnD",
  "key5": "4iWks3LEAwMRdhUqew3UMYox9o8xsEB5sEjHYvJAmuY15kYspytirZCHBGhtmBPnyQQNssa8pKZXzH8DHLeDyz2B",
  "key6": "31enhdTbTJRDTcc5YY5xQrDUJ9ugNbSAuEKaFs85chWETDvWjURYMiBp7WprhvP5h1gLJ449V8L8KdBgSdtdUrbm",
  "key7": "2mMNPAueU3M1GRnMirfA5f8qScjZpbQFbjPtKgwRj6FHHAqYNhrzgU3j2Rmhtfwtq9za3ShzJUsux5RLth4xa89Y",
  "key8": "2LZgvfhQ1nnyPkyvz7PcwwairGoQZ4sw8Cq3shkeRAD2RqmvBY6JPNEgGaLS63eBmV7XBBT4pS5Py5Ng2aMfEHzi",
  "key9": "BKhvhuvo71VhGXxcsj6GuEhqMgiLVZ52L1FLwd6MnsEHsHdUswD8iJ9Vy39zXcuSWSmKQ4DzUGkBoAts3maQHzD",
  "key10": "5Q4D9dWxmUyfJ6HEJ8dQdP98uLAbpKG6fgE3Q5Tas1w2jHnYbtWYbFWhZJcXB1vNC5VbjKKyBL4Ttye8hkGemRK1",
  "key11": "5UXjDTwrMvbfWHQsxfdv9cDKTzQpQTYvWXiS3ekEpgLYpJ9W4heTnbq8pCx1N8p2zEba4RhdeYq6vbmHrLo7PYQv",
  "key12": "5uQr8osbwFALETeCu3zmzJkVuLXFVf6D7dXcdPSWK1vdump9G4FosWfWguqZkSVLdzbG3nEsiQ7uZg4M1rSpHcrY",
  "key13": "Qyz4pw63Fj4UhsrbpaWzvRjjqWZrGHeM5175obac1e2WfvaXZ1oQVqKR3cK8DkivjuFfQ4rn9DEKwq4CGVLz1Hu",
  "key14": "3wRMRwpuBBKQrTrAJDhb2xuuYALPDab4AGV5xNnU2ADLZaUgXXX4FztjrpgQsYmpH2qjqGsSP3C9RM5FQXEzc9yJ",
  "key15": "4NBvxzvfd24HW8cbyD5ELzUk7M1sV2HQpbbn3cNx8QqyfxecJ5dYTaM6kzMME88TwdPRDvkbAVBrGGbAhUjguMXZ",
  "key16": "3qFvF6F1BYrZrSx4qEP6bUcZNPLaXGv54VUUmZQw8RPDQgtniMHMJHVqfxJambbrmWsUQqqdi3wsBDxEkzM6PYf1",
  "key17": "3eguoQSeLtFvC8R6YXDergnaVKmikEqvKE8K7VMksnWASJNS7DGoD3RBKbfkiwigN2tJmyLrGKj9hHdz4ovPXLYq",
  "key18": "3cuhUFsv2yrekJASZTCyqVFSLDR3m8Z5npBqnrPcRXRDyxJaiDTvRXr4VGmw4jeqitqTxNDA589VM74kibLAhjLX",
  "key19": "qgyqCVFsUqtZXruHAp2KKRRxLVTsbkyvY1z71yxN4C3tEnGLcFU519isXzUXq3HmeKKs3N658KAytvEeoKLqmgF",
  "key20": "3ueEdTLqcPXWdEYvQ8cbZdw5CC2PqtYJ8AcZjpJQ5BSmjQ2sksysXkpU6JETWMwwBcHaywond9fJPHfQazfGSHuV",
  "key21": "3Vpo8yhzNxf4ztxu49fW1ik6SDQUrBXzEemAP4cfnVK9wUWWaZ4jPAeZJaocTMcRBfmh1EuJryTT1t6E5NuHGfLq",
  "key22": "3sEdL3m7bJezTUW9rnmBVLxHc6bHHGBNLCCQicEuaDPeL3vYtSgtZPf9KzgcUJQ9vtSMptKFYUJLA31YyUYMhEq4",
  "key23": "4Xxsrz4yEAnC7cJucu2dfzufbHX2V88jgEsKKcruaahu8Dt9ttjWxvuiNt1Ptgkim59yXr4NCVVqe2XFLr44pdkm",
  "key24": "5zFPEQGJHpT8Ld3GzVv55DVawqSN1GGuVrswLLZsrQDANrCuZDePVxZQho216xVcsTpSnXAbVeVGhRg4aXs4PgYy",
  "key25": "57xyyBcfNnX5maxju2DeLfNumMZ9yptkAqL3tHZj92UiHy8ZtBNp9wTKhNhareRPQxSaw3vV5dcvsuaQ4EjZLcG8",
  "key26": "5vHfu1k1QmxMXMFscJpV7J9FXzwKWaLc3PcTMVFcmbHiUvrgXweVmsWf4xzeo2DkhFvHi5QGLKEyEgEjL4NzLQbU",
  "key27": "4zTWNJQstv5yEvbhDinSAUVfYt58h83dyzWBybvcBRvfnUYJbpbiPmQgFKCVTbwMjUNPqYE98XrweayAG5UM2Crr",
  "key28": "31qggaAyEK8o1K6rRu1kvhESdbRDaCBxmajxRnnMAWSgJ9PiyGmrqXDpowQ2rr5gHBW897WRhwtj7YEMZ3TRwZds",
  "key29": "4nbArvSRzrayGwaeWf8UHtA54ZqN2dkSFYAWnEL4k27kVnkqZv3gYYqgcnZEFqY9zFAZWDMX16WfJ9mb8BrVEVhP",
  "key30": "2Gh7PH96EKkMXXmBxpLqP8sLK962G9HG2qbxzYApYeJeN26BnFgMEJ4sRLnosyy4E5MEcSVJwaPC41y2rUSunDuh",
  "key31": "3w83aTnhnFjhq8nxCGoW24BbKdrMTxyBUyoqQgz6aYtwYwVx5R3TEhu3gR4QasUQZj1B19n8ZgnfmS2n4FxE11cr",
  "key32": "zLRYM5eCAD1dWTrUsuVxjDHZQQKiiRz9py2X9LNaTJfBPyNZ6PRR2kRTcbqewmk7xPRtXCbgTaMuTtXSmBK52kn",
  "key33": "3fGvQWDGcLKd6dqhMNGHbSzAkzvzL33QhSSLKE4HJFF34oFnsAAnrX2qMWkEid4msrfD5msKD2M7qvgjVNJ4h9iU",
  "key34": "36YvQN8CZSsbEDA4mLgrAWKaLASjy28Uhq8iCfx4aM6BJJ4weRsquL3PxZszPjzhAwvEVnstgoPinUEqNtfmvvqV"
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
