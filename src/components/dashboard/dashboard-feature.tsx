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
    "5m6WA7Qcfq2Ng9M3vr7qhjRNeKtYoHpXmDmBeZNmGFeebLgParm62VwZrGTanPfaTJf35d5jxg51V9Zndy69krjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M1h3LXVAzRYT2BdWsCqv8c7C7ZeGRt96qQTVGjrANtZBrTKpg9qEVcKSgA4dTC9BYRaN7aNtictu732sbdS3LCg",
  "key1": "5R3hYRcnzyaS886r3rCLUsYEA8Y6Xsun9C6M6ChVmDnZDKXWDRacjPCUSvozYKNy84gDi94152fkkKEcKr5FZux",
  "key2": "5icBAPfVyQMyimjyNx5PBxMiXYHrGP1XhocKWmLBvfDgdJPjEy6DJSdpbNteWZtR3mrx9Ehc6chQkKG7cL2815do",
  "key3": "2oxkGUPi81y3fDo5SFSWqi3Un4s8dQ9VesfadBJ4Q9vvEbGQP9jAkSFRcU3Tr2cugTfFPMyqELFRnixvCwVHD6Vu",
  "key4": "42Gc7dvP6eWA5VSdUpuWtBEAurEJimnU1Mo3RKSc4PtLn7EFfcT213rxC8fGy98bepxwzNF2VVmxg1C1KbTsJPXw",
  "key5": "5qjg1oaMVHZP7bi5cPik3MnDqd4pFcQnpNkCJUUfmSmMqF7rbfMfE5z3XWgRvQ9NbhhLMj4pZATjWSqMjRLWRAwj",
  "key6": "3yPzYRYGTCJbHogwYxpQv43H7PXJY1hAnrYBjC1gpips5iPHdWUGmfEd8B9Sg8kjzbvVNtAbWrYoVB3BeHT3dzoC",
  "key7": "29atQbbeHGaNkWafr26u3KFfq2bdoD1RXUnGjdG3QaBUd2TzufBXUzFSpJsuL4QAyyzdB7pfMpsRAKgQB8y4WT1a",
  "key8": "2udoNPgii5GzpGeaHk8Jot2hDnRYExwc5wm6DVrsxrjQKt7bkaGx5q2JH3ex6tfhfGesvCZyDJEnTZKgdTmegwGg",
  "key9": "2xz84BMyqYWsQbY5rpJK2FTc5LuZkznCjYDNcpNmpayqwuL91SNq4pCryr6aSbigv9rN3RiVHGALTTno5ys17rAb",
  "key10": "2ySzQJW5BTv2ZUQzg85GMWaB4MD1fHB8XX8q16DSvyAtwDB8frNYukd3DUToQdw5cKC2kqm68h35WkP5R4YHXc8",
  "key11": "5U7yHCbPfzctQV4jayRCsTos4htPx79wZcvaXUuZaYHsQrFsaqZzzfdn933hxjJwU8zor3jmXqq681MF8yFvxLk8",
  "key12": "3852ZeWDbYvspo7gLsA8hgQrdgYMfDB7FMVkGYTGvsZzJwavuqt2BfDBdQhLnGcpxnSHGZWX4KR64p4aLB1iQvxK",
  "key13": "Ef6gPQJoE4rPNMYCGHfAcHj2vf41Dk9JoVBcV97348NeqHUP4sNj7xJKRPpJvcLvdAGByLQKCmXVyt4PRaHvLod",
  "key14": "54vk1cM2dYFDRsjynVKxf5h8fczaX1mMSEyMNrZxP3hSoE7PdXPTvRPX5yjKLzm4pcfth1Gcfys4y69DVTL6EDow",
  "key15": "FSgp9ziuBKJUqyTHT8uNoNuW5kMmJrtQgB5MT8XCtUrscPWU4AwD9FBQtnJzwq8ADyUrkeNkVk63oR38TVMCd2T",
  "key16": "muQ6Ys8dg8hxDRLrj1bHGpqL16YWcuzogR2jRdaMt7yGfgCkhwPCuzgiK4t6gomFdtKwiQSD6ttqm4NUCxqED8Q",
  "key17": "26E22vfJJdhbm5PJKefqrrVfm2QbgMJ5dBTjgUCyYNRHFQcE2TT3Yg6xGxqN2TqeUX5SsPScAz9XQ7mjhXZK5bwv",
  "key18": "21sPNaBcNznpzrzgGBZTbdbMMn3UviwtiLCX2Zo2RMevKyoLQje4pJF2GYKqSwfBYeRkkK5ZHgxnRuefb1QRCV3Q",
  "key19": "4SFCXQ4M9RJS4EdsDJB8LBQ7iNxRnHbhEXKAkDiihqxreaAxTZy8awijhQm7QuoFiDqpdX19wtmGFsL9xpV4zrZ7",
  "key20": "3tdENoEZ2dD53zai76cAwvsPgpoK1h8t9Az8YWtaVKE1jiAVj1DSzNcXPq1cbPK3wmp8LggeCmNEvfLKodnHqPPj",
  "key21": "4oidaK9ett4fmuWL9sb8f9DZkc9J21gFfSHWj7Wn7TGV8q6Hi34AfDJ4bYYdvrnvR9JUu15UfVYRnJvabvAjeTGv",
  "key22": "65D44MQwABRykBsp1DjtfWou4aTcKm2jGfbKvQ8fbKA5HuC8JkPQWZocp8D5wLczaPM6ZvHPrW3x2PoJi8dLj8VR",
  "key23": "4aRb9hFGGuK1B3hXfLGF3FEu4r98y4iXWTPJW4MddvqcGcN7jYwMH4mj6So47iZPHBqqSdU1sgaYbgHByebdLuvo",
  "key24": "33j52tL5qvGRJ5eEvYN5PekJYG1wAD2xPjuk8tWe12pTR8uKYLgHVFoVbmJsSQpm2GKB9Ekf9ph55L25GujvusaP",
  "key25": "3hxYCztswVSDRuvKgYzuxTdNseUSjMGBQxxvS8nsdhBT41z1w27f3fGCLkqD2gK6rSBSjxJeh8GArWQ8xWnL2fGT",
  "key26": "4xRTqS6grtJzYZhiVHJ2oYMeyF1UKq9157rFbVCh8JGPD3EZd4AzQzMXz5FP95L7HyTwdD2rc9qTQNAvNGkUEKYV",
  "key27": "34DY95S4bB9vZqe3H5BZQQvyiXsk7Fi1p3vJbjqBrYLuSA2htSkr6vwZyCxTwe5ZS7VbEbU5FbaHEYtg8N7441xR",
  "key28": "qiUmeBiSn56V89ATGnEzNm7MV2BYTHAyCsnsHcE75qWqpZekQE1vnBeobjVTUPXmwhLtFncmFmHdzoSK6WdLD4f",
  "key29": "5E3xdqnZNvaxPoQW3T34ErWreRNAptBJiK1NSnfmTSjqhLQjfDbxF5RBQhDk5RYJpxmXgtf5pYvKezJG73CMFUzQ",
  "key30": "dJe3ZaAhBbN6riz5RduJMpBwELGWvqLKPgs2bK16vTXarJ3YDeHTivTpa42UC34PJsgKDTbg5Uv2URoQz3U2qmY",
  "key31": "5fjpEkA9H229QJ1YpR44QH5dpQoSaAWZ2A2QfmZZxMqhgzuXiJS8PHh5zG1pG6Fa1q36Sc9PBfQAS9zFYTRqLWAq",
  "key32": "3JhW7zhysnfNeFJZwXsXjEwTQDPsm4qJpgg4Fwu1BJytPVsE6DpVC6gdsrR2yucrzCZCEMdvec7Y4L91byJB8Wqm"
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
