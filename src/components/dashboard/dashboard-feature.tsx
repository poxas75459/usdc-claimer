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
    "DyszzCe16L9MeGJdsgWYgacG44Z73zF6ZLVq6cD9qXyddLjjb4ABk98BWR9CA1hpfyJzJfJhtNxhAfcQyCFzfoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HyRasSiccridJrpNyTPy2vGf6HMwrnsUFd3L2D1wpukRyRjwjZAQaJjwSoTWwvRFHPTBbnmxL22vz3yvgdUM7Jg",
  "key1": "4s9pikZgEZYnAbsorn16rwRt48h8NXfABqtZxctJuzsojK63mPcAaPragx7JVsT2pEA1hTGqUwC4WdHxcLi5rkr7",
  "key2": "jiaRcfmeof9m5Mj5F9XeHDe9Uj5d6FSVe9vC5T8kWvj5fCbjiiw219khQbSsgWtP8QeGU8BtYLbXDgivuoRDs8z",
  "key3": "3kwjbYd8uS6iqmsBVLnxooGP4dbJu75uDZc4U9UfFfouJsWdy5QqSGan5uVGwsC3rt1swaMChEFfKajwAcbV2r78",
  "key4": "3c9dhCLnhYdS9wiWcBV5vKdBhH2emCX46SCbiy99RdDVGXq97P9LhVz1MG6YYa4S3yzqrEM27miG234XHXX9krbw",
  "key5": "4UV4S86xrVMApUR1cFpAYXdfqheZpqmkSXC8YMZfuMuR6bYPiB6mcM59hSbucFcpwTpYLGvLqAopp3M27rdHDEPD",
  "key6": "SgGndGRyFJQMeud4axbuobs65aqY8btyBEcFWxA4FVbjCRsCKvKrokdzDFnmhXwyjbSswTBA6pgKen3j7kRSnVa",
  "key7": "4gsPWbS9GQqTGWawCMJLajL8CjDoZX5717VLyQxdcuyFsooSqo4HCk4HbKPoP2WQHTUSvAEEi2pUGuDvCEGGw72Q",
  "key8": "28JM2oUNDPjNrGyxXxEGqoxAchqdLEvpraDNGPvhdU2rDP1uyCAAQExG25LcmHZJwCTwqgn6RHZpCZg5FtuqGaor",
  "key9": "5Bm5t1hRxpZ2WQNSAzhV3gjssh6kqPdQFLxwCDgkekJJaaVnQix6epMY9c8VyhwLoDTXTKuFjXx4YrdoSxANTW2E",
  "key10": "5ubTEJ2m7vYSwf9xLyKfDquU9qSUpMP9GBNU5T6PzJoUTJQbQhfL9HaDFqDBeHgdRth2isqpqDiDi9H8biKsXJKC",
  "key11": "EGn6mvkEw9k8zyFx9ecocTi7Sf2H6puts1FyMff94fQ6r1EWYCcRPT5Vc51VCBrBEFpP7AisKwKMtgd1ppjrHta",
  "key12": "2jJ5GstqdmxiFYJBf6vSPru3PqQPzZ9z3tcQaRPYLuEFGWrFDRmKEcfRbFjFUp7vjXAM3BBoaYqxuQPSc5ShMyKd",
  "key13": "1W779PtUVEx4Ny5VFjQgXprhp5gNunmAHL6vnr232yYWcv4iT48y7FBqofRFN3Y7M6hJxrcHhCynG3vBYotmu8t",
  "key14": "61LqwAdTTdLPMnFZjVwdq6J89qPAcysFSco2Ek4mF4wsmh8An9K4wBXZnVSBMyCR233yRQifNKYPs7uWBenQDLbJ",
  "key15": "5Q8NtNDhezxYiL3ZDeJ2LYov8GUaLMJbEtxMLLJcjPMr3gcUbdqg5sEKBukXtD7ds9gUVYzhQcFAVUd8WtNagwKr",
  "key16": "3X42CqH2jedHYzW2fQvyjzkhvmMLEo3LGUR1az57g8ZcZot5g5xuF3ouPwqNfwLAtE5nRZXRBAw6Vwfm8UswHUfP",
  "key17": "4w3Mri4fVpHCTW1t7zdEaWVEY24xewdd2RBTnNZbQBoFfztnM3DFKGt9mCtv3rwBfX9ku9fgWePiMZPLMKPRSxYc",
  "key18": "4ZE1VPuHAfKH4Cip9faXyFqXZ48ywy5A6Fuvn2sbsqKxN55fVNQAhLQx8J3wLntEDmjLkhygnXmcF9GaYZ8TvhUw",
  "key19": "2DHE3pYR7u1dhfCPWd2zVyponz2zVXFcz3B39LtVymFQ4n36H8okTWh9MJTsSGaDLc3C6Ekj4L5npWVMSQQfmxVu",
  "key20": "4rqt7bgituzqwJKjTFvgW694ndaeC2ENJGqQvrPyUEbo9FDZ73udQaA3MVHx4aAnn8kkTyL6qdMuCcM5tdKxx1xZ",
  "key21": "ZjZBTZGdgfMhVtA7vTYyD7Xvq3RgnTqn54UGfFnEoMKcGYtNsY6gQLijktknWZWtH1y7x1eSoCR2fWiZNYM5FoJ",
  "key22": "33dT5VVj594EzncGPCoY4WxSY4qmGysJ8b6j4DU61WqN1so9fmZgyr5Hy7RaPL8rsW538qR88BGy1BL7JBWjw3Gx",
  "key23": "1ZYi6cNDEUKV8rSBYs2e2ezYsm4Hc1aKx5vsawpFuMgAnfbvtnN5nwD9AAkFYjNPgXes4bm4d5qkDip8yjrp4LL",
  "key24": "48oEFGEjus99BbGYykjUg8Rt26d4RVLZfutdFMiYPQgbmc4xnKsGU9bHAMixq7KePBDHBsxeERZEv4zyJQhi6c8J",
  "key25": "4zFeYDUqrEMQGGnzFA97MyaV6eS3sJaQQibfxNixD2bQdJhzYtXCHFvKFTmLHcW1tPiJZ4JnWYfEDE3aAcjMRPMd",
  "key26": "2Cru4jWBJ4pmjRhryoRgEg79xNNGXnovDVSyAqfabDFnqwuFWYrbY4NXgS2KFCvg8WuHEPj9Y8KJsrmPehpf78Gr",
  "key27": "6xFTcqt1E537bwtuRKoGGTYKbPdZFjbkteKeggzHhGPDtrFxc3ZJYHhnui2oW9YHHC74RpUZH19mXUD2Y5zNN66",
  "key28": "5nKEZ3x7K2mBjg8qULZXVg6zj12nK6J5PmpWqHKF6XYmNnKAxPpF44VrtgUHS1FHcH5HeGr6KVAtfBB4rwuniHiE",
  "key29": "4b6FSEfED66Kgr6YC3rJkyVsJLxgtjSGqyLgrbUiCiD68aNrsjv2YFCqoC97qf9JfpamirCwXBgGQEaEPa61uE9M",
  "key30": "41ngu4KjSpyvhNfohQ6FGiF1HgYYyocvNXM9nQQSZUR72igYYunN7mKbKazysN3cPdMZvzadZ6qyH3ZrdDSM9aoQ"
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
