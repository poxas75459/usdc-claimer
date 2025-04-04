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
    "2pDcDAVpZ7mC6PADZchMQwaCse43nHMx1fER7fUdAS4vUQmUPxBJhLLKGhgLLmnxXNVwZ676xohEQKNPa8HvHpJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SQHtyjLmhGw2Rc1xa6ZbFiHgSnokXRrGkLtHzCaXgsDBYHxAV52KVseXuxJdnQDpK1TUhhxQ2JWeKrzCqYPxpup",
  "key1": "3He7yBf5K75VRB7EizAAGyoFMayem7pkQPLdjrMFcV5Ea7KHRo2175VUyUyrQ9m4XMPjqyyxJsMo2eXboVvKiHWo",
  "key2": "4YZWwZR7Zut4z6NLvawcZkFRJtW9UM2Uw4orLnSbtSxNZjTdxAu9HtnVT9HuB2cKvgM4mhPX1QiPTkQ4xz4Ri6Eg",
  "key3": "4U7y9vxKYRPodA97BvtAUV95X22eAa9CpQPALwL8QfT7jLXAbfNknCqpowyxzPLV7xur6C8pi6Xx9XueUtG2ku5R",
  "key4": "3NQLoLBoahDAAcja2YxwjRBQKoxf8g3XQRXYmqVHd4UqHepKh5KxBpa7GEmpvLp8yea3E7QSiiQ9Entz1jQPzTCm",
  "key5": "ykBFxo6BtFNM5ksZfny3E4TUEx2pjUSPU9aykAnTQJh2h5jUh4MeirSFA3x452TnW1TMpwpVnLTyKgMjf19QmTz",
  "key6": "2Djh7jpC1m6GD8EhMy7DX2aKLF4RdkvBfYKxr3cHvBp97i4SB5VKmioxPXcCi4corZELmBffB5MHJvbneqr4zxPs",
  "key7": "3CP3jGyU5dcaVgWtDyReoC6JeQVnrTi2U9G2efc2GcqE91t4BRZ23DRgXP5BcPmmXpXadap5PVgbQr6x248nBoto",
  "key8": "4wXceLKje5Ttwwh6CdhSQhdNoirMkdjsxbBzzPR6dDH93KUK2tDDrZNZQAEfE7qkbZpWoXfb4VLr2zw18gEtaHSW",
  "key9": "3L1qJKwiM7sUopqmC2GW938hVQQ182TJg1gBW5tXMW28nGHNdjmQGSMooBhEtgbPqHfBgnpbtaTzVcD2CyFHWpsi",
  "key10": "29raXhiq9bQ3swvfRzu6dbuN535MkY2mR8jvwW1WWbbwYLmNofG5aeyCtMqbeQwX9SVKwRvri3w5sibjYxn5HKFr",
  "key11": "3GG9Dr1rPXK8DGWPuwg3TJsNTcSxmeKkRsFGz4S1rmsZkkHbDroUENE3DFzSQ6BjqdX62wDkBXXkJiRd6MY1kAew",
  "key12": "64UWHiD1YrNoxFdLbchLrqqE8dkBTdCbvjD2UnEJggVRU5yXuKBgeybQd3fCZ1qgBnZzZQCLuPXNpB1PMeNBSQEo",
  "key13": "2fYBUdPuWydt7sC5yojvJiowB85MWcGMBjFQRXb6gxJSJnBHaYEKhKQCHWvKgnqFjWK5VmE35qpwvJkLMXDaGJNV",
  "key14": "3weuqfmeFodBUGSUi6VuumxxwSr6dE37McgmG2a1TkQuL4aRA8cKqn4VnKPXUVD5MyKGGB4fkSxR6jt4ThdJ368S",
  "key15": "3nnHp7zvoo1n5ybhqAkVGpc34givHMGnnjYDjAJy4qZwgSVGufyMVfG71UrgvSrgjZtVRmcK6LcDJTbpGNiyUwqi",
  "key16": "28kzCnKp8e3ghLK1PANpUvMN4tNstHtJegAJ63uWCBhv1UL3R9vXmrxMQn17VEeJsviVLtC4f3PEJ1P5Uac7YmdL",
  "key17": "3yVSsgc4nRQzDkLuSVBy8x32JmXxr1CcLs5aoyhxEkxRqd3HbHHd4YBZVAJS1aG1PXc3Z4evnc9TFgfhy5peb8Mg",
  "key18": "3snEvCJrKjfjVZDXYKfgaTMoBJNzczLwKBHVLEVkLBSXT2jwW65jEXBu1i42YRP8UUkEk7ZkTKyD1g1hkUkZr2Hf",
  "key19": "48BjFWumTtMcQqKnyTSR5SiuP3ebbai7KUFnRQJMbTWLMyiw5JhhbiCQQZMtioSXdcpdqNQKJ2dmQkA4jBn9ZCig",
  "key20": "4Tp3K7duDmb4JbXLM5TGeYXzib7quAfhMp188do3kbNc4Q8nVr5DStv85i27KxEKEL7ELS2FZyEW2Y3U1tw1aSsH",
  "key21": "2BXmUDU18GFZojn9j5AMe6Y66Ef5K78YXw19SxUDFv1rBevxzuL69FdFyvSWpwGFTAV7aYGVX22VRd3NfwCSmohJ",
  "key22": "4jwxGLdYcurJYQ3UZ89nmbEKkPDLebHvCoMuDsKSdx8sS7M5VkbJvTcEMFKXep6aeZwqxYw73kXHF172kpyTbQrq",
  "key23": "3FznEwE6MQG5fpmSmSRtUwNYcB6Sct5DpsBowj6jyGdwK3r4LPGdhim2A4MzFjbKRmL2BnztsGMLtMEw2xa7EmS8",
  "key24": "448SbXy8252xhoS7XvaENXRMDZ5x1L8GpDLwQkXLbHYrLWm5CmayHm23Qyi4pnH5zXPfePa8uQ5hjTEFWHanhmLJ",
  "key25": "4FaEqpsehmMRmsrVgSARUA6gEczcU8u8S1MW5CeZ3xbw9d1SwDmeYhoYqo94BwPeM1VcZCVKhKpqkPVvP8fFVm9m",
  "key26": "4K6zxHys73UQaq7AbydomfHEnAvb21YYpp4DuC9zMNLCeCvbvDhgi3tLx6YQy8mPwdErGGX5pTbB9KDSfj3m9VPF",
  "key27": "3aYLZTLSqPLYd3Rebr3cYyh3FC2yQTj2KgjkNrh3LTRd9fa7CGShvzPVWbFHUCgizz19xUobf8MQkzXWjofBFAhN",
  "key28": "FcrUdLPwsbvLJ6eGqPtKbZpM4M2tZ6gqAowwCUBATiTXy6WJP8Jj12Q6GSaYPQNcTTnzsu9xa3XCrTt373DFkwL"
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
