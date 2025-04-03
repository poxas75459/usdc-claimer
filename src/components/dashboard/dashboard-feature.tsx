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
    "4S5DMrxXrPPnWpUKuTvFdDq2kyYH4GDgmK6eEuSi5gxYYDgUtrXV4c9f5JcFx8akeKn51jDAs7yADUSsPUnfBRZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dZNiGpcAfMarmWxPxSWHdsBQMLv8Y6iT1KnUBFcmfHcuaWmxo4oRZ5Lc7HdQx7nrSfZX1XCPik4FKoR4ujLABgT",
  "key1": "2RgRJzqLPhY1wgZKeLs9iRi8NaNcTKjTTbzxyL7w95DpauGWTXYKuVNk6KipPaGttb67y3U2fWdDfWPANyZhdfw4",
  "key2": "5s4AGfFbagAupjNe2BE6QVXCbqLXzXDPQKXwtrwXXzeVqa6wpUpPCnubkrS3ZDgNw8J3uzfk9FZqZDu2yAMLftYw",
  "key3": "kinZmnpeszAnHc6rEVm6s4c52GQWCpbzSvALHeThAUgAvhuFEPPCriz8gUBGqQMXFTiRQauzu3PcLX2gWPVqppb",
  "key4": "2RHGUErSqT2Ady95uocUrJZ4oCy25D939PWQL5cy3piHSi17aGedYXTcA5vSNGtNJ3sB1SJXv5xHWnWbuRqSZRwz",
  "key5": "2o7hd3xM1ekkvmHzthWMV3Q5iabcgbUzvCWzGg2uErpZtCHxHVdCBvFzFRQP5kHVF4QA1NXjpbU3RoCp7QWTHNks",
  "key6": "2Zp4nV2DzoQM8gHByRv13BQi7CKiSPoSiA5UjroNcE7QJWrfUQW9dCPX7Rh9vq6suM1R9WVjzw4vMTpyxc7CJPJ7",
  "key7": "658qQupUEeaJhSvtxVp1BNUBvib1kb3x9G3fb4mG2r2hUW6ckaVCCg5czD6Xi4vMNaYSvydcs4DpQ86Q4MFkmdff",
  "key8": "5epRWtuCKH6dxNdkRdCMUnoziJkptPXpuYKcbn3RV2KLwLCxZH2q3d8Aqznk5nk7uQzwKTwkyicKa73VHBvffZZk",
  "key9": "2Q8ECYRUc1qLN3SesEWigXmb2cizERrWKffeQxYYnRwoUNL9cFCzjG8Fsvti4gWJxBmC9skntSxYJ6nG9giiMzHf",
  "key10": "4SevLYyQYSykDYUH38g8W8uBJhShhJzeWdv6dFsZS3UoZGha8jJSGcc7WoYPUBWdVgRggdNBfbtiQbuk1Cy9tf8N",
  "key11": "5ySG9hqxeHPo7JnkL1tKLZm3Rie8k12HT4VDNfxFSWGm4Gr5JMgFTZ6SL9tZQxgBC4VrwWaRGGjA4uVeBdU8Lvfv",
  "key12": "336YmWNcXrjWngXBvnp8ueyJfwFsjpuEH8nks2x2XLe5SNqaQYDj1b5HA6j573FgyrpthjVR7wL4sqfCbnxcJULe",
  "key13": "5Qb4XPw8t2ob43qqRYVbJ6qnBaczD1xb3MwXphErRD5aSbXZw2DxoeH6DZaKvVZxJqy5d4iBoZzMWH3vHxg3ddGN",
  "key14": "hz965rnQnzjC2itoh2Ktn3qmJeD8dfRoz7fXwfzrr9Bgx9ZqB7B3WB55Jaf3QUa1LjXNvT8yZfVxshuLGBchMFa",
  "key15": "2VK7DWkQzGhQnaM9njKHHnpVxXNiUpoE6553GorxuE6zdXsBW77WS1tH2m9HUCSevH5sLjAa8bKsbX5M8zUtxuwo",
  "key16": "4d9tzHainWExNVVvJ9tEvw8FwxNJ3wxpPqrQrtwUxoevdgLsNfF6fYmnvpPkiyM9xftPb847A4GxWQjnA8YV7gER",
  "key17": "2UhfYJabZvHMbZdWWAKRL4gQKKbvH92T5dGvGxLKKRmn8EGggYQgcMndnXt7wt63sYy5Te3Pc3aRGdwQPAvSBkNV",
  "key18": "3TbkVSr4NtPg7NVS1sJmQ6yr8uNFQfHAwECxCm7mMnyz4GyPH18hhM9TPrR13BnTgc12781Q1sYZhrfdhui26kXL",
  "key19": "FUx9RMSfs3uaG1Q1SEVCxfqRujWcHPGCvwNcncBivR3TjfPgSWCPpEoq6WitEdeuqV2DWQb5Hzpvbvxuzz7iufk",
  "key20": "sNn7C1YvQy69ep3X11diDDQtZxwfbv8WceEveDPjMfDujfuNkR8DJzYUZKF6dxq7FseAmZgjFWyNR2DJhKXo8bi",
  "key21": "53tLytZZPLTQs7VV2k7upt4JEzNhybaPoS22yMaUKAD1mfsyJKwKHNyqmqgJwcY8udQttQi1m1rQQ5bvNLq39A47",
  "key22": "5YiJNmMw8G69Q72Q32MTMdNrxBdUo7gmdBzSoybCGgfNoyz6bAyWxaLfqZdJdDjo8DXccJYdtRK3okqT5PxB5yFY",
  "key23": "5EECpDEqzi8x9P4ejYE6ZcNWe5g38ZReAx4DKkYF4Ww8N3MQNzDat74436oQCmyeoZLUbpikt7rhTw5hxaqoVk6y",
  "key24": "2wSjzdUitDS5spgYWiyxLLWVRYK6u1CmQchrv2BkjNS8JAbsJaoAZGEsB6vEvB2jyw8J4x9sqCpptARx38JoUPcF",
  "key25": "52uQExP3rd6r69kmzTcjrf5VxVxCdsSmUgbgb3nm3oXvpiFQXBp3xrCju4V67E95YDnkFwSFizfquzXrnNRPt898",
  "key26": "3EYSg32euPM1kErv4uZHXP7RqbVi5Awhgpy4Ujv8oofNe4WMATGWJ3QW36zeZSGBafzKwLTDUStdCLJQpSToate7",
  "key27": "4DMdpKvySNbsBmJv4HvuFW9w2Fb8KqGjjNo1Dx4D7ymui2HnJBoLDhDDpwG5CsXo3BNXnbgkgRwfj3Yq5J3TFvZx",
  "key28": "1yjgRAbaRz5cLoCsPCYbXB6x4Z217vX2QJ8js7os4vWD7dWAV4MmGu9SrpzvH8LGKo32p6L3QjAh1kVCQ7X5vds",
  "key29": "TzRMzQstzNxQoYxDoWjDDxU2mm8hv4LnXwyV7sxojVQfA97LHSG8Hvehxystthrtpa6nXEAQpccanu3iz8cMkeZ",
  "key30": "Qoiv7MdeNhq3EWMHk1VWL5duyBJiQm49GFZTQHupmMU7sWyyjcLSYi5Q5ov5iKoVUvwzYUKa86Gq1LoQ4Mtio76",
  "key31": "5ntz3d5HFhjYVMj1pqFREoW9dE95CezsH7WSjufCHwz3L72LDx6wyoPLfNEBPHtUgnyi3V2BF8yA8us3Dy5BLkq9",
  "key32": "pd4hUbihJqASowcVimevMj35Xy8G9sarnm5vkwFB5rTyr7z5nb5okEVmPj7zKioFAct99tGcuHxE3aACuxsPoxG",
  "key33": "3Q14ufVv6wfytvoLP7bAK5Eg3jG7UJnaW84LYp6L1HzpFpo8J4HaKoiM1X7zNHk2dPEud9NEofxAVTTtBArxscox",
  "key34": "2MHMsCQs9wy4uYB4S6dh9vpVb25HfKyZKwqU5eYC3XZk3zyTigLcdcZWw6PWMwxnZTeuoieJKdXo6fzKgxdBmTJz",
  "key35": "3nTEktf2CLi8rJsEnAAm5fA6Z8HaGC7uFasdSXjBDdspKHtAkfVJtPg9EM5AxPSWN8Ah9uswz6TDBnoDZwUQGkFZ",
  "key36": "5op39b6tkjFixf5RjuEdSpjz4BqZFPAyWt4dDbCpPqx931vpbNw9YeYiBWY2wtDub85VuPDM5zQPJtkQxj2EKh39",
  "key37": "3vqEsM19k1kKxhV3PN79eJAc6WMBHDWp6jmdHE8bc3VHAVXT64TChitixdvPwXwUsYKDzUWray5yb8gb4dxCVzqU"
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
