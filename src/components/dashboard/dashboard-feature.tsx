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
    "4Ydujdrmqsk8wJxkP1XTMFDb9iYQBiyUcwyY2Zm6L6QqPzzi7s6r8C2op9po2WHb2B6Mr1B5skqPwEqrRUnAoqcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NfJNPsRJNQnyh8cabgWxzMRx7dQCF6ggKRSt9uBj9PBdeUd3hryWBHjJ6pJb9bRanrDcMB4V1D4kWYkFfNZdG35",
  "key1": "444TF41FQBZmRLaqWMidyXssK3q1C9mesGhz7cfPMSnGSNsWBjegYxxyKRCmwfW6yKWR2dDEoTCKYUU4cG86RQdu",
  "key2": "5WF1jqaQ6E5TCwY1bLKgvCPRC1qxTuGcPAkNL6KirSPKJ971a9RdENP4tBzvy11JbJV8P4GHL2J4Xk1cvQVpvbGY",
  "key3": "ZoBGQBEukZ81CM666G4jWS9i7eWFDmcN3NXHqRgrsfgSK3obk2YdPE3M9taWsiwtWDesTci8XPfJZCuTHevR68H",
  "key4": "2fHoivRtiYDR6jL2AELefbixJYnRsDLs3d1bQ4sPw8zyZptBEQTg7C5yr1hs1hgPCLjGtLJAj28NzXKKNn5T2gNr",
  "key5": "4vrpNJqte4ojqVKFethLDjZkeAFh6ux7i1XF5ioMvFsDL9dWSM8HhXk2GBf4uQ83X5Phqxgf6tbPiA3e77SJdBVd",
  "key6": "3a3pP52K9DtsXAs9sZX3fE2wEXS3rkbdMX6bFJRJjpzh3LWi4N46SB4sJoR3PqpckypiVornHkAQaz8m4xfRL9L4",
  "key7": "2TAp3SWKi1B7dWwT7ikLKgRD14Hz3adEN3urSvAgrBEa4yfKPR5NmrLs1WpActLF6zfTf73xCdkDPcRqnEUnAeS2",
  "key8": "22xK7FMHF7fBdqW1trgsJmwnJGzU6D9irTxCjqrkWM832KLSv3j574sihhvG8JgfAsfVvF6QewFeY9JpUpHKRfWA",
  "key9": "2NMMKsx6Qee4ckZggBvnxTJgGu4ko11Vzuueu72k58aqdH2oXvQHALMynNEB7qvE5uVzf3rzKQ1sJs8QRQMExzDb",
  "key10": "5VVR2m3mRBzZ2bHu1q8gvB4ZwzZ4q95P5x979TXNaGVnZFHVhwRKnTk7pxg1PymPEhDMsjTfnz23MK7DBgzo5DNV",
  "key11": "52WX4gosDaoUapw5vqY5LBZzD7QzdTUuDxGbZi9jjacTtPRamkwXKx6pmmCHpsdSxeaWxEv4k2qq1oPFSzBmncto",
  "key12": "442oU1ZzE1vGa1buryYBZsyRuo4FLn2kedujkhdiMsuYvJ7fNgjRyh65yR1niV6PDWgfuofbTFCKHxbKuhdQDDzy",
  "key13": "48nwK2foaycGdDanrosQSL1MNP4GwkGSkK2YDTduWPBit1MGwpScQg6uGGphM2XUpsFB2Y8s3QMyaK3Mkc5fFxi7",
  "key14": "4FtX7cMpoYRbotN8p2U2uoKWv7q7F79RgJrfL1bhtUq2aJQYDrpv7W9R4VMY5P14XzXMj79G7NXfXLahLB6jjEh3",
  "key15": "2rM15EFCNAkViqPeURJX7S6bF5TUYit7uFYgrERJNcF3JHjYKrNH1MBK2hHugDTC2Ri1mHQGrJXkXUJoTiS2E2su",
  "key16": "EvzY1pfkrRm67E6w3nsWWUGyFRJH5QpapEgxmexBRcNdmk3DjUWAmiB8g5aR7TmSq1FiiJvdLxQz57sT5VQdhYj",
  "key17": "5n6EVQvw7QGuzVv172aa1zHhiM343E4eM5VNfMmfUdVueovuLGun9Ypk454gyucxanCr5umzVd6bzaSBdgZBcp55",
  "key18": "2uWdfWGDUQNpaBuMBw5SEJkt3MfcLYzFF1oN7w1SV1aF9ceetoytpQDufaeGwnQtNfBymMXkJBRDBufjTCN57cUt",
  "key19": "2M7K5o9h35nDZMghXd1FQEKFMRvgFi7BaCN8DKBy7NmfemrJ5xrxwnGKrTNZKhysJHX3tTDtEnvGHXTnVn7CTgRm",
  "key20": "3MXnUkzvw62YRXkNTHd44mDRtzi5YUwohXWdzTDwsC3QGT1iSChxRyU3fLjpYtNERpCiAREzHWkdZqxjeSwF3GZB",
  "key21": "5FxbybN8MZQVWdqyGpKfCPXHEmraYijsBFJ3zVDtPyYErM6HjtqzFfh1WMScM7vJ4r3ukR5EFzpmowAPTGz39kPE",
  "key22": "51VfgtGjto4PsKkoq6ZJigUaq9fbaMmUW7Jd2NpEsGh1YFQa3XPbznoCVa8CopGqv5QiuwWQ38EJD5mtSGDziMz",
  "key23": "3ktp3f2wBgaEnRn71A7fthJmYEyrgEg1kWaE3fvFDTFTva6MC4SJ19jMGxK3cm42BfNTiYvNNFx2uzu48mW8Temh",
  "key24": "32MTcZ7eWZXJ1myEvc3jxiimLjnrYrS4pGHJ1VgDR1CMYm9axxDw5Ux5YrNv8ipTy3VQp9w8SDgpmaUfP1h622rb",
  "key25": "2sbAjhQQZ8A5Qa6ieirLrvfvqvPyUdegta7dQsb6qr9CFiA8o9aAPaWMhbHpGcbUespMWmCYwehh25KTiZNDqeqk",
  "key26": "2B9PEkkTB1r4M7xyKBA3Uq6FmYhnUzkfCDeYoJCoAqhJ2VkpXriXxU14YapMKDMRuiaUaZYUec3GRXuebUL7Xoyi",
  "key27": "muAD6Mdm7zXzM7FZnxd6xNTSyetu2P6Mzq16chuFD8XjeLgUCtk59afwm9ojrdqbRpyGMc5yFmNwYUvV1F8XLCv",
  "key28": "2tfMWVcX8PdpvgwEBXUoRy8kYL2i86T8tHvDwbHCTHNZQ5YDXw97qqtqs8Zm73WEkhHHYetM6fWShqQNyVK6THQw",
  "key29": "4U3Joe5RvE4AYxDiFWZ2PCwjFKLpdxXWeyidGUqmLh6SwrsQy9k4NjJ48sZNMHsNGjnRZ3Dcqk2oB64KFrkt6g5p",
  "key30": "5NNqh7epPCc97hvSbp9cm6dEn5mB9zr1DVYzA9TVC2YoT9Em4QRVfaVPrENS9j49R4k4oeDMbbQVpExL7yhKrv2o",
  "key31": "3yTjgd3N717u4J8wz66aJoa6gr9Q4Dg9gPCgL1V2WoeSq8WX6b5SGaX3PGsQbdM5Wt1iFxS73iv35mFGuDmgrsMs",
  "key32": "4rzXbpZVZPiewyhCtTjdiHopSQLfDmySWJR2KC5GwWqrzKebUscuQaFqphHEk24gpPFu6LopebHpXrAuyaLeceYY",
  "key33": "2cGnKAdWXQdHetiN76ES1kTkpmZMX7qF1vLh2tGY2sUKonE4iJzMgzCHmKhKPiLPmup5AKGwkTsP3qXQLcCnt5CF",
  "key34": "4ktdMyZTaKuMqhmuF2nzEZAMUFoF7NxJETa67gjub1VN45LxZbEugX6wGTCLm7GSucYkLSkNeu8eBu2k4Z2hDGZN",
  "key35": "2jpByAnpzoZCmvbGmpNTEBs5iKRXMd4UVsjyXHSnQG9fpBYELfAMCCAYr1cET1cB5Kvw5AuKcWThpPLEQGUE1N9D",
  "key36": "58h1CkUK2nuLD6ZFYNjS5bVJSQ1zUtxA4BuWdgeQ1Czk4EcUJbXsYavfmrby3QwSJDJsRj6pSNAbEMuycSg6mJ6c",
  "key37": "3L8BFBZmzqG9LXXpTcoJtKvYtFsHAWjYwfVWW9YJ6Vsmpd6KVznxWPhgA6FVdgpJcvL5vzNNxQeeaEmrdSwYkU1s",
  "key38": "3W9fBWnBd9o8UtjKvSuWaxuFr4Pg7BKQZpmfriXzA3axdmzDAmk7S9qMspgbw879XNgCoFsJx7M2tJRXGnVvyCfC",
  "key39": "67b3a7rzoCrXxVy5T25XEjPpb2Ld9ZQu5GGt7fuAf3kHgrXq1dUqat5uRRK3hLbF76PkJU351jEX2BUKYhw5ySns",
  "key40": "3PEjGy9SsxREdvg5j31ZaPgNkff8qbdc9agJ2ruMpaiGVmqjnFBXhRj4kDiZXMiBtEWKv1ffmfh868388zrBaZZd",
  "key41": "66KB9NQ8QdHTW4n74iRMFm1hhLFH6x4JdXykFKbFCFSX58JGirqPxyk48wj9yQeNT8HsDugkCtwfccEUK24iURh5",
  "key42": "6Mo81v52NGXxnWa1YNVnv39Hx8Ey16RAqaQAKrW12fWvNED8ToizcjbEtz6sYVoqBzqf5ELbR2N4sq5Pagu3rKm",
  "key43": "5EU8kn7kk92FkYQfUP2fAUS9XYN3S9SFzw4MGktfAVS6o2racQZrsHJHHD1LmU3JQnFrQFPexqAMvmJkvqUjzoxe",
  "key44": "4QXkrgR8SGS2rmdQP2ViCYp7pSBrG6gV9PbjBBRj6sfxok6t6jUeW3t3L7ugPXeksSbmCqqGgdmj2iEdXyVYUWEu",
  "key45": "5CCEJ58USGfXG6VbTjBGcJJa3xVAtPrKhKvZ24SURQBf3qdtTLajF6fKYmcfk7oshU4KwL3W2A29iKGeqMtxAkXu",
  "key46": "35bJgBV34AvPj4a3W8aU4u5QhE2wbWKxFBSxJubrEYnMYJDBXFY5ykVj8uVSaXBj4oNfAXFAwY6jwbmmFGdZrXm8",
  "key47": "3CzmTm9NvxxrXkctpp9Sx2k87KTn2A1aGZ1dQp8pbQDUhh4W8VweZd18JMsVoZRfW9ULJnW5p56YATiad6zd11U9",
  "key48": "4VRR84GzWDcZ9iZECcPrKTcnmejJX4rLZghCkYPfWhtwCiB297JhT6W9E84WUjweNYFk4Cvsk84M6bS8kzY9JFe"
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
