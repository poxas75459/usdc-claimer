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
    "5jgwV3fs9L1hq3Sz3UMGNytis4eRcRm8U5f2r1xfWfKhddLjEAREDZ6npHKqi3LtkNBFSG8PFpzqVjHp4jr1ZKec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GPyokrha9xbiaty8dLn2PGLhB1pxmTDu8vhAYFo2XnMj5M3spbWnm9J6v8BK3TtYdEhXNzjW6xWWUHUansxRWrH",
  "key1": "5ZVVZwjxvW9VVA6E36TqRcjPki14kDm2c23qPCTA23BJQcobdpNEZsjhUK12GVxC4LvwnSL12Hz5PcRC5hrzeqAL",
  "key2": "2L2EZF4cHKWrZPa1REfFpWP1mWdhvicFHc5RHkkML9ZzviJ4xk7ZQsr7gCPDc4BJus1NFiXTdAmqRnhKWtojBY8D",
  "key3": "bBfWBBj1x4QWgr4FEj8oRCrQRAwEyf8Gb8b3j13Ru42SZFqsDBm3pTjLUrArVg3K3ockvKMdqKbc2Cu8TEnwUve",
  "key4": "xybMo2TAJx9xTZDpUCLskkq1ZuGKo5Sciav1kj6cZc9oVjc5nLMRjQ8D6YeRJrybFmEbRwr6r68FS135VHJZQ4m",
  "key5": "2CTSvHf1yGFVzQp1iqpaU7rDG3mjrHdUfBS1ouU5myK25WunK4URvY63noa9dofW78xkttVsnYdLGG9pckXkhEfQ",
  "key6": "5eJtbVT812mCcbhR8xWC4Z46rpa34vqiaityvV74qgs3BCtZxJMS6HcEMKnKLxswGcEnLXJtrTjFS6XgRBpBCiV",
  "key7": "3EtJEnwHiTavPzjcTNyXsLpHYSf5ouUjLjEpMDRcifspXN9Y1BEbt7NSrxJFcdeYKuvmALrXT4jRmdGnwiyYvprU",
  "key8": "3MMpwS1YkZwAgQiecPNKx48TKmcNUamTxjDYnXSSrkmbGZV4xurpG2qJjL51szDFLtVtzjn66FjgYxTz9hvNgERz",
  "key9": "5DyLSKdygNNWXQ8iKoNSvmKbUenNC12y3b5puc3uMpRZtedKzeu2KzbF42vD4jVNEGFHdYDEmtnKXVn3LJJUdPEM",
  "key10": "3p3YSbc4UpibFsAqnBjbLZniqocK4hcMZXMh56ZktDH6Etf7nEVwiPXT2hcLJ8VqfXMTtdir3QN84ygohNSLSzsi",
  "key11": "3RbU4QGdGKat51NRL9KCCRkcP7TB9iMMYp32hs5194BD4zpsnxPXsLkLJ7kv411JNW52g5Q6GbHqWc5G4Li9vvDz",
  "key12": "Gncx2iNPGjScELyMk6nMgNC6f6zTYMuGb8iAaMSxo5rqZyTbRPMENB7ZTqiKXfQobMbHNMXG6PJoeggMSwD6BCy",
  "key13": "2AUVN2BUKNJj3ypMCPL3wH5FSo25LHjMi7QmmBdPfnU3FM46zCrqTyKRFY964Pm36ENFYY6CN1GRLdd9RRXs76zD",
  "key14": "3qU23U2cj9B2i7D1TKbJjRoRHgti9LAPtK11P77PLoL3xTMf8Yp1WHEMyH1qWHr4QTBUy6RdF34oUH2XgsWCwwkQ",
  "key15": "5yyqXbuBjQikfsJNPjsskvdHY49vz9DdKnC8iWHru5xrf9A3bcbgDNgjgLHMbQJK69V9kzxCfE7H6upAfByACgzY",
  "key16": "2hTWhbR52NTmXB7meb1fYd4teqcJdH5D9gAreCbZ4JPBhBczb62hkfmsrGExSf1tmfvqwtRe3cCar2y1Q9g4V1AT",
  "key17": "4cvsmkG5Tjisiw85ayV7q5ko96kiEtiPRBkKP81HDteVNiBvp1bDSZyb9aBcPonkqwYc4UkTPdiEc4gYuxxaXgY9",
  "key18": "4FFuUq27foezHxT7aHJpvtaLPMmCJDEzAjFzC6sEWHfHiaAqriCvxtQe1ydqmv4vkPvB3GYKLW3gFTLYpX4N4FZW",
  "key19": "5ZxiswkE8JakZz2MPxJmGTGcisWJhynZHvGqBJefQHWbfHTGdXfAVSJfosicK1EyCnNBKTq7bh8sZWBtvhEEiPeq",
  "key20": "3iYZ5te836bXNRy8YxBYyrKB2M8gD5XKMpFm61KwCzXTdYQNJadNMC9nn9M4CeX4BxFyNT8tNx67uxGmsQgBi6Pp",
  "key21": "3PdxDNMkcQ1zWk9qAMgPW21Jwz8fPnansFYATMKUTHooazQsM6CRiv4fyt5CykAYqLpYWpZyCwW2SRrgfjX9qPd6",
  "key22": "4jGdXZZnKV4UoZEq8h3Csc1DocNP1SphH3XGh1q37iUTz3TS9NLgBqehb49QFHT8FHDyzGiFS9CbekXBeSjJF4dy",
  "key23": "4J8TsDwrgf8QCh1ZGM4UiAiXJTRQvbFhxdrZij2aVR3TVb4Y5uKaP3z9xcrrUfue4Mawb28HULT1xAtcg8PVNTiz",
  "key24": "2L6hfheMd8C7586GPUQ3upT7SS6EWXf5zyhQVc1CcrwdsEuFRbQxaDEq3Hkk4GbjHso2KBxqMz4oUo778J8PH2JY",
  "key25": "4cGyZcbdhaeWEASHFN5Jc4Qb3kYXZX1qFYrVp6wwXzS8FxxLgjkDaZE5kFU4JWt3Um3qJuWDTR3Q7oa3EWjWWow6",
  "key26": "5Ci4mo697gWbNXF66HZsMsMxfniv4NBH7Nb6cdLonec8Dya5iiE9THTuHgC3iN5HtEvyoQK8XEoE6nu1gZ8wT6Tj",
  "key27": "29hQo5bGN2t47qurjbjpU8JE4Fi77oG5pJjg2ck9GjYqpovUH4ZP9tXhmbM28fRSNFCWYxcQZX9UDxGv921coKea",
  "key28": "3ZJUHQip2gyp3uWXDcQmQA67FJVwSYnRMQN2wmYMfvYdV4t3EHqYL3EZaCredE2uext7dzirttowsHGLkWd9459u",
  "key29": "SGnNEHKQsQjGnZK5zkvcXmZFX8jGhrq8kBdeAWPUHdotxuyXCeJvADUhAtbnSUNV2xp1osW9KhRYUttfv2aKy1s",
  "key30": "29cqbKG1J3zLrTam7LiQMpFbD5e5NgedFcBNNW957nvqN8NcivmjAXunMF23Huuxm8FV2uUDWr36dQhQS5XMBX6g",
  "key31": "412UqyTe6L7HgBTeqsBsCUDkestTDctiCmBYCKkcgSeB1PBKxEWiE8H4EKQPDxVucyN8C7a4eFt2VcdmWPQiNP2N",
  "key32": "5LKvs3Sxg16RYiscFF8eFx14Zq6yAKBa1DLRADV73V4cbSyWW7DYo2mVs2KqkxskLGdk7E1Zi6RdKcdLuUZfBA5r",
  "key33": "4W9rKzjBmi8ysg35ih2aB11D8BQ4v2hG9qKuDoNzNWUSwB56C3oRLg8tLvCgLXSd62doaGPTyUeT5fCR915dZC15",
  "key34": "3adfYL5ctGVfVXmJYVBSXLJAnfkazTgNx5PVhe3L2ySfPdgJMHerg56RT7gsdLFtW77DBVaj4qukf8aizzFNJrew",
  "key35": "s62wo41ZWeE48mfaQLF3K7kTuwdJuzr6n3JRzun96UUV4RCCKSGrPRyPc6gWL98nxs7nn1Ur3d6Mmu51hkwikNH"
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
