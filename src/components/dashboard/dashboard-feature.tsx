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
    "2HMhdi7UBcPUG5zzyUuabrAMzDUDLTreknTeVNJefwpb6wJEQYn7geiy7tGA4AjLa4QGinwoqmt6T94x3yaAChhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56sdDBSE2FQs1xjkkgQ8y3YyCVKBKvGZZ7mZQY1amHtPepbagAgmG6fegjRUQsdvihtGBrLRzQPBcJpjw3PSAh7m",
  "key1": "4oWbyv1jWZwYpFknNaANG4drfuxfTo2m5UrfoFG7PFBXzZmmeacGdBE2w9woMAYvqpYdcRojjFVbxdbEoXsck5PW",
  "key2": "3eN8GeY1JioH9ysnrDnw9bmCLGCjHJkoRBJyHscLjCG8A3MWMZKnBoyKkFqFwCD7ZDsEEg53KZj4gX44PCk639B9",
  "key3": "nn5a8MsncWtQAbEKNS4Cn1Uv3d52njGFsumNwXYv7ESAUV2sBge6FqMeqbU9AVSyMrHiNu2usLQE4gYwr4t2gB3",
  "key4": "64yBzsmEY9TsEhQcK419M6G2aA33A5Ua4BBif9ZWPRr9gypdEQeehoLHjBJkaUz77P9oAxptbsKW9Zo4oVR2FiGN",
  "key5": "5aHwCCu1qLjPDQFv5vB73N8AMLSBbkvcbs1FN7XemyfZmswqgE442KpPXLHjjmy3DVjVprpxHKSbpZeRRnH6oNcC",
  "key6": "59Z4DN4y2cgZ1RYEQ3a1MmRMt2TzxXuCLeNiBhbnEyZHipfVwgdBmFXMMms18bPrtcBZwu8JNEfL4tfsV7zLNTer",
  "key7": "4imwXdzD8NwJ7kZB8iu4bBNzrH26zWqTFQkFU6eW2vkSUtK7xFt3Mfv6D4LtZxM1vz1MhWbATYxQRt3JjcDrW3X8",
  "key8": "2T9f2Z6v2Ug1bcrF1uFGfoSFmJmL61vpcyYuaG3HbUhbifmZuFshhgPkLSfYQvfAUHJa36WyePEgyceajSfjg6bE",
  "key9": "4feJE3a3bRNc2hvUooa9VpsnPzNtC7bvuirwMEVcnTWAfYMLwyvhycXcumESAySMxt21Dqq9kKfC88zmR8JeNM9P",
  "key10": "2HYnG9r6iFfh1o969aP8xFwY8UB1or5wyPYCqN3H7DFwLkffumR6SgYD6PQBwCWrDFZiDoRvo7dVpigsUZr7z6LF",
  "key11": "3LxkgJi7hbTMbHHChSq3vKiMjebiTasfmisSXxSYKg7PwnhFrjpGuhsSCScY2YA8xWeucUnuJgkHmQN3sHXd2dCJ",
  "key12": "47hrMdUGv5u3wdwsBbK9Z2sNpabgya6GPKLufbjnSVJsJZTTLigUeF2htj2FfHiQN92UVJip724bXZ4osqgBRpfW",
  "key13": "nnJ17zPNb3jWgZHJU7VfrFjWxiwgzneFadRcJgKhKRfZkzTWK9GNZrcn7sc6DFFkB37D5oNsScWXvDH77WYx4ZC",
  "key14": "5g8ipHngBA27M8FuKvWuG6vgjovk4V5aDwGPvKeMRSBakgWA48fjVFvnRoR6ksZoeoLKJV2GCTJ8am5ZWDcLjUHy",
  "key15": "5r22J1sKnQLS72UUPXUJm6fTACST3BmbHUejhKtw555GbxShNDJhffm1wvKSzWrUvGoiXVGvpy2PNLt6rCsDgcph",
  "key16": "5vv1X3HtQgWXL4AqYxXu9tXWsejcpKPhgxjFsE7J2z6Hd38fdE2Kj6wWGNMTSmF3XbYaPYkqNUgVYEoDu4ekUDnW",
  "key17": "3gfzxpkmXTbym17hxxd9SR97ECVgdv11TNEwrwXCodsVrHvr47qdUYKqmPTE4Uo7JWA2PJsvV772qZTwfc8YFeRa",
  "key18": "2ky1yLun8oKAAsxQaxdzySzG55qC3cWAN8a4kyZVSszJA4gmyfdUnSRTVvz97iTGnSN7H74GJ9gCmBTrexvYmqQL",
  "key19": "2x5PwsGp2z7jx9oJyofaDh3BuTCbNFUuzqKWnnMtX5HHJfi8gebxnztpTiMBrhxz6FcMGvmUetZTkBfXkc34k4q6",
  "key20": "AYktLrLfc7nhwdwTh8HNaaqio5a7wfdp6g4utM8Cmkd6g8kocZLPAmNzf8mfw3euBmjHvN6M4xhESjfGvWdab5Z",
  "key21": "5ehbn2rU4ULppeBY1CQ1YsyyhNzxuoUNKZNqUi65674AXGawjs2NUpz4Lg3tiQuekPLDm84fuQpWzwPCxkS3PcXG",
  "key22": "64bT4oZjXPFfNjrrecvPBJWSG6Y7P681wvHmPJZhoPACyNPPbUdDsfWZLLuPVMu7qvwQfsZAJ6bNnESq9fozTbjC",
  "key23": "fXoLU9ASox8aKy5BrsnVw1ZMHqtCntpTRq8vKs8yfeUpgeHqtZvDjU2xdLFaNWvr2SSmTu2oioKJUbACkrKUo8D",
  "key24": "2UDfFLVfpFRSHjT12PHLjL9E2V8x2uSA2njiDwD1wTNxNeR9LoatUsua4Ds4cVV7stS4RytzDyRCxLZJ4sBsnADo",
  "key25": "4n1KvmQsbMWCsyCasXj7GTDxkwT8ef6zU8FWr1XfhX49TFF9P9RmLt6HetMK5GQXh2oEse2BNBAFLDptB6PGmveo",
  "key26": "WwSeLvZvDuT23SSYQdKqy18NgZPCfR4DfX8PKmm6JMd7FcQ8TugUs2YZyJEkPPeDrdYxrjZvGyZsckt52B28uvy",
  "key27": "42J4d6ebFKYWidpNy6YAX446gHhSUfHFfCgx6ffAp8rruCyeaq6VZKTTn6xCgpe3ZMPaypNV8zq8a6aQfNN3YuSi",
  "key28": "3EgPrQSx4sskkTHgyVnsA1wGKPNZ3b9vaYMENwRTY7GH5k4hbcJTgXjmY1eD2zSuq3sJqg6aMSkQppAYu4NQoncd",
  "key29": "2ySrUd3UgEvyFim8bm4GihyBupezwvRnN1hrC7RXiRQhQtUzEnkx4zjv8BUVkMF9VfV4Bqx5XDqFTNsJHQh6GJqK",
  "key30": "56AKA1LXwYy5t9SU3aeGmHv1kNmtVpXAHR3c9Mqaf7CnKUfy2D6Uy51sbrvPpNDhfRqSYuZJQ2DxGpBj8L1fkBPR",
  "key31": "3drUPGb2uFYeL1SNLrHcLAsKiSb66hAT9P8gs9xcBPZ12EwJaPMfwj5daEBvh2D8YPiqazuJohKN8JzaspBVUpS6",
  "key32": "2QWyPG8et41zM9vxns3Cug8xEhJmVRRhSXuhSLAb8ukuJFVC7HbivFQSeRAbvJnweL5VovS4B5BDV6MLAw8s8hoL"
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
