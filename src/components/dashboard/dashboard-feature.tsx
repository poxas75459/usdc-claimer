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
    "cgkX3g5MGXpL9i6mNSojxLT3QSGLCG9QdEJgWmterC5CfDmGRneeuaH9N351zK1xHoQGZzrpURLjpcfXBKYvQUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RDewJsfyfzxJQtAXpChENej3e3QPwqjxXharUUwJuPCDWSaYY71jBRWRSeoBAenKbQtvWUPD6FsWGbCtMLTeVzi",
  "key1": "UfaRyoemwVBT3Up9D8fPZubsFoxDqG4XNGTPzkcHUdqF1U7QwAu6QVijEsps4H74Wx8a4oVwGSQW861pmDcvoH2",
  "key2": "3qiVSDDG67XJt1mevXmLN2KLerQ7oMPU8LF2Lw5y1AR3GXuajivFJA9WHDfpjCNxUvpZADd5cgULgtjb6YXPgqXp",
  "key3": "2jZBXRiewoA3YiHtBeNyDiVg22nC8HQDS5XKk2pknbsPAxKrHBHoymvxWH8zdFdgQgvDqPzfdopZH9VYVjMKvdX9",
  "key4": "xHpGH2L3swpxfvQGytLD71Y3i3R8QLxXEQky4FFczGptkqTkPBd2j5p5Y7V7pSAbfTvsdvYxYjm7qA4qpU8NyvG",
  "key5": "u5Girs9Ayo8FiZByaLFDoVaV1VYmkwxy1CBcY2VmCf244FBX49pbsJnrSyPkhqToPMQepAw4gCKSCGBmDgb8zkv",
  "key6": "22dPCPwTs49BMWkLyYYRa29P5PwDb39PUGyRLJCA2W19uAFF1S7z1Yd1SF9hgXrfsMUNTuFajGT1x9HhzJiVzUg7",
  "key7": "5sA8LnyUKqakMXbJMeR1yVmiCuZZ7md5gi1JQC7Fu75A1pB2gjWAaj9dAQSRcW9LVS8cz85DnkzBgsmvN8os4HEU",
  "key8": "3P5EyzAr1CDcXYPVEGRdC6nLoBrhvwWbMnfqkz9Zyyj7btCjs1rqqapwsnPt8uN3ssQZMtF87eDUHofMMrzqxhSh",
  "key9": "Sf92CngSsbHnb2NoxzxEf2MaRNFs1JMrqNf6RadyjVyQpDC7915Z9cQr7Cq4qBWes4eqV4orAriY94CvZqozpzN",
  "key10": "38bLeS9Sou4tEybx3FY3vAUe4yaLL2qUYDV8V4zbh4EKYUPwAmkZy3PgqnzaUTu973s6n8hAWz1AMxhL1FhVp4Ab",
  "key11": "2bRiQ73MnWmgUt21ETBidejScePEi2DnrYXpBEs9tehWX39RLvmefTin55bmmCwQu31QS8umAufFWMGwBhN6uAY9",
  "key12": "5SMdn74rnpxAZcjMD6rt1uJ2JERimPcw8Xi9o6AmCtQfq3WTjc4tsNB4Y7z9c8jXCiDVPnNbnN2jxgHWoDacarSv",
  "key13": "4FmCcmDNszEyemUP8oz7vb5xA5wE2kmFxJzxkcWZUQRVmAj7PJieZpgD2LUhHaPqxTiRw5RNxv4ryLsZxBFK4VEW",
  "key14": "3m1SCc65iRiyX1u7P8Q48e8bPviPtAV3AsvPTdeTs2c4S45Ett9BrZozfmdx8ZjRh7rhUfCMbbWGnoQRfJSrpe38",
  "key15": "3ohBZWV9gWozHU7EQaV3wUfkA9PnKHx5CHRDXjh55FNTN6C89t53N2rX95JSNse8oUWa5J2ecGQxJyn8tMFgpwpt",
  "key16": "FVZTwJqvj1NFdzk5QV5Y55SYQYUoe1V9cmScPmKcWn7JAZTvGrpesuBWSuAfpoLYFd7ZAsCnYoSXQ5zRL7DykAr",
  "key17": "3Cp2zcPPCuaKdyV4coNXueSATz9CZavkeLiBjxHbuzVXNU94jhu2SxJbAJsdrzZ3XgvX16HzufpwKEc8b4vR6sqG",
  "key18": "4ysrATKvCtyx9hcqNVk5PcKkrFhHYWUTuEmkfAUiCkEvrZsNYf2An14nE2GDyNa1nuCLPfH1HzWADw1hgKMeFWZX",
  "key19": "2xMepLDsYjuZwuvUWkPgCzH8J35ejr7UfH5hQzz5NJ2sW8gfFKzG9bQtqHk9xeAYpBCzp38GXZ57LxLfPV87YTuq",
  "key20": "2VF3pp8ZHSGyXJeKHUfs4F6KncRssUYwF3tyaF9Dm3AzpkCHJnS7Ls8bHnvgQGnSuPgKwYguYp2HYwFYuJtAY4SA",
  "key21": "kgm9c9wUgNmvxiaPhb3n1YySQtubwtpkp9gECrDXPWz6AmXdyJwmVPBLsnZG9Rpwj7FYeUypuS86JivGZvJApZo",
  "key22": "5g1hsBxHWvdL7cMRPC1vsWXntRycAQyJjaLiT1fBYN89q1yhPHZBN21pVAFbXRnCoNKobKX18RbhQBFGfxcmrtrj",
  "key23": "PxH6nH1MBDm8jWPdk33794814WRpQ44aujihu9n9mjAVLKccdnyMYeBE7JhXjCt2c1hKBAXPahxyZCDsUv5yACN",
  "key24": "APUudG8SGtTVo6DdfmmEkaFNXpWiSUEAsMPRt9NGuMxxpjcYa9jVMkncusEte5H1ckHMWG28mgeav1wfB8wx2tJ",
  "key25": "4H2b7TWXzcaE3vYpcnJExP883v6LBTjX8URQuL8ULdCc74oVJYh4mK8EUUtrCiC62quQckY3AHtBR8VFD8DHsyw9",
  "key26": "2LM75WyxJFmt2zA9BZoqkydDnrUDGQVeZUKrQXx96oy2DKWN1bZRbsZAawMxkQbKdesit3mirHWJq8hMvn6md8gw",
  "key27": "3kPeVGbL6Ef2HHgKB5yb1hKmqQdTT9C1cupntMbAn8B7uVDnXYj6hndss8xBa2rkzhtrTaQ1AXjmSuGhsSAEbp12",
  "key28": "3psqsTaG6bssoU96HCzHFoyJ3RcKBxgfUbWfynXQJS3gd8C8gbXxsHDGVeak7jNJ3rWq3AZmNsPvZ3JVX2orwMtn",
  "key29": "emPrydMKfN73UmK5Yzi7YK4jEfTVEiZDD4md2Agc3RpdkryrMwishphxhykvZW352yC1rGZPYWBfWHCHGcKSL8e",
  "key30": "57xtT8Br7xKjqBtxKbMTsVELnWGZ1AushQunExdxuuxYaxuKiYa47wwTNVyJzZRFK2qkm5YU2RAJ9akNeBqqzNtv",
  "key31": "2qYmotxAoG4WLMsHWoDBnudK5u5h2Xt41PNpFJJeiJiz9jSUnzvhmY6ywJtrSCn9kg5uB76npCZSww8oqtcocb1Q",
  "key32": "Q1CmJbuXxBJs3Jv4r51dyGXY9zh7ozJWPpA459uGSq6Uu56StWDinLXnvQqnBo2W56c7amRLGz6LaQUAVUPp8Zo",
  "key33": "2CGcNBXzVrtu5ewrM7W4JDY6R6WM3iSwXHEkzPc7nJ1aYmwiNyohCk8UkEHtgXeaH2xunWhVcknrN8j35gUK8zhj",
  "key34": "VnfyRhWNfY7bqiiWNoY5n8uz5iE7TwN729dBUGwQPbknMDQPoi9gMT9945AbfhrGJczzxstJx3qztCmDyvcdD5V",
  "key35": "5hji6YDRQW5bJGpxGUwkrcLSi1X8tFvSfYcEJaWrGmHrwTLktCwUpVgdcAnKBqvtPUbhZ8D6J4PrbK75CBjbRx2T",
  "key36": "2wLQYVCrZr4ZtT3FvVM4krdnVH6ne7G8fMMaXtpQbRMxhzPXHxckRg3ZM4rcqSXqYpgq3XNXBB9kzgTR7sV4hEzG",
  "key37": "42BBs1R1hWm4xAYh4s2mM5TzPqjwsV5re3QoobcAQkVLZBajTTn6UvdMG1347nDMbp5efCNFT53heHXSWRvdHt1k",
  "key38": "2XEC5RYp2MUJQHRrEQGUw6Bkakp6z1vEYSfy67pj6UW3DxH1QWJCtyDUqbuwfLn5QNTSbPyN7MgunMWfUEViGvAY",
  "key39": "7A46FYVUYuThoskLDob9tdT1Ho62PyYmHmdRVesvJQsmeao7MLxY22YGbhvUkpikP6SGQAb2hw7PgK5zxKmRZzd",
  "key40": "JwuUpi2PDzYfhAv6QhGFSCqpTcB4BBWLuzvgenZpPEb64f9VENy5wHyUc33rDDuojFhQJH1DE4z7BitYwuDMYsN",
  "key41": "5kbYEundMc1cHRAZQsQXtxdvceDXb2A2CMF7F3NC5wnnw4yvNP8gcQdNSKwu36uEJ63Jknj22f6QsBtY5999Wn3w"
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
