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
    "43mgbGiRMQLXS3oTcE5LLfZQ8TYihN1S9dEWPeYXqfYBUfPi95Vim671LkVUv8AQJoEnkBBZC7LrhqjWowvJNmit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vfmXcyUgyucFEVouqB8Krvd8A44brsmif1DQHtKG63pfvCkF5uaJFG7ttAWnhX2wvZuB1AJ5ofDz63ZvCzMGqMh",
  "key1": "38MW6XZY4835wGTuAbupxE8SASYhxd57YTD8xq6cJf7U7EKqZN61yJf3edttcnzEkX9vKBQu5u8cG3RW9ZPcVxSL",
  "key2": "5MVmz3TbQkgS7TwayHJJh5Jfutkc4Av87PGP4bmjEWktfiw55S1t6hFp9WpGuDFfi7SksknKV1Q5T9s27nL8KK5p",
  "key3": "5hbjZSCsNg8JJ5GuJGt5eUYc6ZwMxWh8dqicKCV6srcnZWKisHqtySBFf3YhJijxnqXtz53mZNX8eMfV9BmUDUy5",
  "key4": "5xRwxKq2dZ1To8fmtGPUG9zJ6xXqBgEqrQvP8vASMTeZSkYvsa9szwCwcPF5XhjD4oM2DEWkiX5C2KseG1wEymcE",
  "key5": "bzr5Xx1jRhL8KBbFFSyzdyoESTuVzy97c3UPm6MDrJ4BF6L2TMeQF2LNa5BpTDhRqvubKVvYTkAEmQUdUSfvM3s",
  "key6": "5WmV9j6JrS76v4GCaHEtXfBSE6Q47wYE32UjgXG1eXiq2G3pmK5R48nx3qRmVLLekgZJzfyN8Ux46VhMTVgRJgMS",
  "key7": "JDfaT3vG3BLQRqyZ89bM8ynAgtmTDZhf89Mqp63MZKvbYcWQ7hqZ3vD96Guv6f895UxnKjxYtb5AdubDMzmZR71",
  "key8": "4y9ZmjVea44KqWSPfAcEFsBRhZkVRBufMbtgzwcpzM4drZ6daLhVtsj8tHUg7rKau49rAd9jSZPgLkVYifWRuWj7",
  "key9": "3wu8zzn3Gx6VetoUXtV1iBRWhRhSRiwVPbs4m2VSKZTFNM9QGHN5dVuvtQLdavu76hoXtkoGWEZiRWv1URZcZWtC",
  "key10": "yfDQdvpWu5Ud52snVRZxF7HPjm7FyeXb1SDeVSCQknTbpCUbXFTydYcET82rjVaNTkpj7Snnxa1jcaTws7ju2P6",
  "key11": "4XY8TgRxyw7J4CvdXfudzrvUkyvMwfVQpbaSXBA9Cxq88GMVNpBRMhsGBfZbTYEQQov35DFr2bF8U5xg2XGzA2im",
  "key12": "4WwzUuk3bctcSyia7vswXigf5Jy496EHsfSFrYc3SN8QybcZnV68uz1KJ3VVyKkGw13eV7r4k4yHv88QormaeBr8",
  "key13": "2ApWZXdNzBjZPT6iSE4b4NWkogcrACLmye9xkA52z6Lf8Gc21EoP3eXEN3kvHb4RGHecjjtYXWqBvn9sHaFUCz51",
  "key14": "5zJJti1WXKrNnNzTxfJyRVkVW2AZgQh1NUGZw1bGSKRMyeN6LCMXEmsmPQrHneoS2b7Y6kTTQwWnCx7uMyg3Jdry",
  "key15": "28KZxWeV3vzHypikAAJS3MNP5ki7KjhHboqzLUvw5wSAdMEZzK7wMkSMXtcWJU5bJb1qeA3SLWn1jP1XtqaZSC1s",
  "key16": "hGrwymb685swgcjfovk3y95fXTvTXKc5BGQ9vrZMe5h5he8nL2cxACHaiWxGvtXiKdFMuqVnMZ7oBGfBbiSTRRE",
  "key17": "526XLR5gacEpEEee8siGPv8w8T6FNP139zBPpedWT5hQAAQTDBkuZo6x61r652WtsQ3EUZ94tEu72sJFyu8orxgy",
  "key18": "WSYQC7fHAT3APbPsdE6oaJwagcU7neWBS6nnhRswcoRxs4p1zU31aaVkL7dPsqTRRapm5cmZSUgBW8277qTNZxK",
  "key19": "4xA2CiSyw6Dz24H6r3GtqQj7EbLN7zt2XpVSrN217c2cVCX7jcHJhkk7h2Jq2vhVLjGCJxCW1vD6Wfvjwdyvuhn8",
  "key20": "5L4RvjTjsXwRjjGfaczYv8ExVwQZwmUd9MBfWmXR3sXBhmPRkeq9NXfdB9dHkhkM2VYGpQsgfaFaSsttaxWbx6fj",
  "key21": "3byKrzaFTzYbiNCxTtiPTm3ehVrtSpUksaiFuK36h9XRaLoKeJomUj19EihihC81oGBQZt5QR1gVjWikh4p6zGtV",
  "key22": "5KFtrJEZyuP9WXqbQQoJxDoTAit4JNBsUx8rZawdXdHaRxjW2YaYmuToyfP2viJ3zoa5LQSavhdNsqLaVgBC7Sde",
  "key23": "knk6bHVAhqzaoadhE9UFZCFG9qmaDV1JhLcqcBMDBbtCemtGtqbY98H9sm5R7zb7FNrFnSGu8ucqRV9Xtz8osiQ",
  "key24": "4e4JHAcJqsnvN9Gw5vWtFWX23WdjdYm3jNwf9cCW2uuw6YwvChNC6wv6C9cHdt12QAaFk3hTd2zH2iRfGeZtqcx6",
  "key25": "BCMRY1X5Ga8k7sQpQahpwAT8KnMeTJzrbXkijTBJD7d8hzMMow1nTNa1PANnkjKaAsgnqhRK2qzB3kd8kKa16RS",
  "key26": "3JYLegFBiZcL69XwXph8wz8rw32fraHvKyUG5SRTkvKwR8tUXM7zJLgSeoLAW9GgSzNqLzfxkGWYR8eFyAAghKUU",
  "key27": "41DM61wBHMsy8xHwb1jZrRZTMEATBn38NuLt5tow4iBqy8bj2JMaWayFD8CHdsQv6j3QrpAbrpGhtMuCB1Pu3uXS"
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
