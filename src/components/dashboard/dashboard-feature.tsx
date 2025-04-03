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
    "5Nd4a2bVkjtqPy4EaTgzSG8F91pJcPHG8tjqR44psKnFRi3ZnJLcwfgHmrjm7c5RHnK73G3r3raWx9a3FvP3KYH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3evDrPxH86ChBqo7TgTnBGTDtfLWj4UGEgXC3LLuBv4xpdjESqPd11TXB7T2p4WnF8zFvvYWhazRc26h9S7f2rkh",
  "key1": "aHLCht5hREDYBjDFiNUWHVX4UYswuRUXH6mmFNAUqrJYiRg34nQ4XtSvEs2rJ29Kxu8aQznAMSuqx1TP7eSkDYv",
  "key2": "2HiaCdSAM5W5Bh8gXMU89GnBFCYZfWWpwh7A1iCnJSYGWQ4NY45GcDNPAGCfqTyZJbq5NJFFLh5ao1cQqp36WvmP",
  "key3": "41Qofy9wMPRtX2wvPSbXv29hpUmcGK8jHK14To5pTVzJFbXzKN3FJJZGVwmmQamjeByp1bS3BmRxgcvYkvT4cKVR",
  "key4": "4C35Py6fmBehqx3uzVB76MWGqSwzsmkrZ4UrJwor3W59bPvjvCcPpmJ8u4C6GSWnkbsA6N5cfci7ctpRnCnnGrtH",
  "key5": "265QdUhJcUMCvM1dPrH6xztR3jB7N4SVoyo6ANyCKo8n8uzkKzSExaJccufQdqodDv5ePhAgjdnYZB3U3UjzF38u",
  "key6": "aKVB7wLdidau1EbiVfLHS9qCnxEHmk1b4RakrR2qCKbeHGpwwDzK4wEF18Gon8fC9qN7e6H5W9AuPW3KuSvwJja",
  "key7": "2QqtSThTwKdcditxPLVusXC3P2Jf1NbsuZcK88bUz9MyqDX6psEzF9XYTwaogHTRrrczr8fk9yvAhrbVGKm2gEBd",
  "key8": "375C2GLYTqYrv3YS4x6kYqQU8Uc4vWHupB8DqPTA2haBzJuMWG1wskGBGoUSfSBNKzHdK6kPmSqarFLiPC6TgX4j",
  "key9": "5Mhj6CjYB1aa9qGPZXKhQozxCKUpS6cw6eX9z32Rn3CDFM9YEJbyhrBj8ZYJnzvXBPkTd7z19hx1NCEnHmve13QQ",
  "key10": "2m8NUWtfFcmWagFZSKzEs9UUkwi3QbdJqbyf5i4MPyXqKW4bMgb87Axe3r93iP9xk8GjRARRbmN1t3aAYwsXpLc8",
  "key11": "4bNjRaKo9BGvnUjfKCynkmHt9SypMhsbkcaNGZMinybJUq8ArFPLJvgDwF2Kn12cAfDb9Yp2smm1efN4jLdPx8QT",
  "key12": "284HXBhzJad9tkciAKX2PQfHgs9Hdmdpo28T3W7GX58aaEbCJm8yFciUfB4PejjPcXsL2fpDGvF8CzHaV1gXB59Y",
  "key13": "2yJYAKD36NKpS8RdX2n5z8MaKYGKng6TLNPHrfg4FNG4h8wT76fo6kWLtV6K2oECUSNsMUrcfiqQ3qmK3nWhncoW",
  "key14": "4VMQxDPQgp6SPv2YV9kinhKwk7D2827XrxircQQFi4HAFsrSyoqAVHFz9gGoTD4nA6kKszyR9HfeMSmFid8oXVWa",
  "key15": "3T4ngSQj8zkLqBDbGWXWCcMXZHAD3VNHKjzDqWokWP2UrbenkBkP12EEztb5dLkkj5VoTpARhyDMKsMyhZD6SNRg",
  "key16": "eR7fgSHvpNBaoL6G43757ze5xM7i8Mz7eNvtBnNSXNd6Fzn8chy7y6bkAVkp8VS2kNazXdd1mXTJfiNgrV88YgJ",
  "key17": "5pN3Nh7ShYXpMdSBFNDmE48faDsVwKrAdUEEUyDvCCoKNyBuqUyZcQs5JEdp4SoGbno7GsUGCHr19Zvhe1GvsXdk",
  "key18": "5JdDRgq3VW2AkCaVs2ThNQtt5sb6aiRw3WYiMFTcF9GyEZxXsA6JbrFbGZsTybm1SpDjybe6gWHZtPqw19K6JmYm",
  "key19": "2YeejiNRgL4sDcecLZxMDtpnGDjHKdGcxMwnsnfwX69g6pR5YbTWm3boAeopi9hQ5XY1sMZBncLgbe2A69U1K13e",
  "key20": "1bqRRKXgPFdmZVVHQNkPXDd1gzrtUR5uxLnRgbY5AY65n5ZNSWnMbvTzwuf6W91gLSKetx4Pb2SMtuFJGamkZFV",
  "key21": "5qcmR4JAA9na4HnQxNVNqViQa9kTQp2wEjToXYtof4oxLkYR1GonF61rTjHmZTSQHLRAHFmBJJRLCDjzwKQawNsA",
  "key22": "3dRuWBqyCnzahDpajjjEUZHbMRHfxHJ6KL8dQjYb75nCsbrFjXt9XE2p7K8cafzprX84pSKTsrpocPy12HbkEb7n",
  "key23": "39cMnze2t7G2mdXNddvUh6UbcyitE4GMhHxL3U9RoiR755iq1p5HwvYpSv8s8GCKQ9TkWAND6ccK35btm7G7SY98",
  "key24": "dHWXPttf139KJymeygpB9XdmHpqdm3DBxvpLU3N6PJh22Ym7vcWHLUKbBSULkdj4bH6bZpKBMeYYh3jz6oQT1d1",
  "key25": "qTMxk9mFVVKJwjju3wQC9eoTuTMQViEkpQAh3vKQuka7psHnU28CgTEmV23asmEcPe48oVJjf5GEVmywAEWadz6",
  "key26": "5MdqbuDiMXVWVvqJxVof9ipxgvSBr5LKB6UzH3FmGWsTgNvJXNFDfzZm8pujT34riphfbfXRxFvTrazA4DpJxmWn",
  "key27": "567NiLF2tyavcVWniwGAi1pCaaGBTpCr29iW1KsTAZ4ak2SKohcHmL5HfGjJeuRssHAg6cueHoGC5B85rbGLNzxZ",
  "key28": "4aV8s183git6a8RsryUst5h2DM7NBeH3tUnAK1aCWY4hXin3aLL9SFY8DxboGGAfcwR9kBtTT3Bsh4kx8LVPcq9X",
  "key29": "7F7pQuTxwJytNr8szBKA7NKhUc9QEmBLqjDD7gFANnhaAaeTfwxzdPZccJDKdGvZu5GgnWsVEpgnG3v3yFn9RnS",
  "key30": "4QhUbEasdpWTW95d2289Dcdat8QHMm4UUpyTM39X97VeFfFZqqcNpeNsDBT3giFQCVBzAvjuYHBSzrpMNfcs8k1Y",
  "key31": "2zPf9sLKpDPudo9PynphJnadw4NkKcgpx5GKyqqcMuBrC6c48Cm2apkiCY2gRh72DyQDu5PUYXYCTEiYNnrBS1tX",
  "key32": "3QLTg4qHKqyjeRE4rKkgfurVqL1WSqidfLSKCPqLpn4aTxDqmGiYbvSxU5rDyoxAQ6T1rLfMiYeJbg5fyxcv5FPG",
  "key33": "32a5f9Kw7tizGVh8XWn3NSsdhsbamZ4XS46ZY23Y43rLdoYf3hGGVCophsEgPQGDbAcFk1WwxVZtZbpfnA8bVtaW",
  "key34": "U6bWfTwcqNDj2ZjD9nyftxNKyxuF3sxi8A8xPEV8FGjKuBxSFBYDW2gYGq1G5amTLzMwpQQ8sysrAvtozz5z9JW"
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
