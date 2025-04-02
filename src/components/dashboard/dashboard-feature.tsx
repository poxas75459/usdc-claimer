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
    "Mjboiufowh2yDr11SkzYLhcrC2hJBTBYsegdfSgXpj3XDuu5e2SKxEhmhqaXPTCM7UL3rv6Cq5ev2Pd1VH4qbHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RDr2hxD1FKUbukmWEGegJLc3BQeQnb7SHUxx5JsUFggfZq6WdWBMGXf5pgVncfNB21HCMeccbqvoydG5A8yBQNv",
  "key1": "3f68CQiTSmWAuSCdvzhGvk6HgWGpdiSkcPALNRgzv8svQubrtwusqGjHccm24DLk3t5dKvVAyAswMXWZS5EARzmW",
  "key2": "65DuiPpBaAbsedKX1S55eAdoiMzyxrKuMwpuZjwWZs62Rv5MT1vKC9H8JsgTyBfW2RqtxuLpdannMF7QBYaaDcni",
  "key3": "5jm4z7Jqbjd4DWhBa2Rwa6Ee8gavN8MSc9Zdh2dPcZEQx6R55vwAh5QBCChvKFgBnoZqLQV1ZiM2N71XcRFdgMZ2",
  "key4": "4xMduGCGWqh6vWfA9vTJJVFBj9D2W1Xh6jmfm7RMgGLPzRS95gEWG5P5dS9kzjwLuvBTEPaev8qnQkfgun2rdz4Q",
  "key5": "5wEFacu6trgPFMj6AvwD9pHdari26U7vez3dQbjrEA9T77asmg3iPwBDdmGNcH3LPVuJ4gdQkRosJ4BGEvV7Utgr",
  "key6": "KwWGH5Ve2bvSmBujA67KTXptD1K9AUr3RqbEPfbiri9yEy9WkSdJJnM5kEMECDM7nWxwj1vTJ1FHu8KwmZqwa7B",
  "key7": "3aev5ceDKmQdnub3h7JZmiEFRPzskaJS1hhVy2KB6gbpXEKCbr313o2oYqE9c6wFXsfxF4zPA4vgkjnjDiXF1Mb8",
  "key8": "5qM5j12Jv59THHks6kHx6kcthTSDfP3PXrn3wKnvzXfLfYkf8U68erBE5A1menCh7jujkbtPr9GwfPjwaHptDHNC",
  "key9": "5aM5iVthiYLPnQ9Gvk6sVBixQEuXZDHcahhp4naoqHFX5RLxUyryBPNoF4mCqkkYu1RoaLZYwCSTafHKkCQSLPUs",
  "key10": "5UxpELdwpU4tSe4Js8krkQwjUdSYn78HqddHv9srqk8i8yD1p4PrcRfhqcHnBZKcq6BfLja8Aciv7FXzjrcwoR3e",
  "key11": "36WtpkqhJGZJXuhBa9uv1ag8F9MvFeZ5jdCZV24uALDBgDArwYMwNJsNyM5QG54dZKj27pRaSBNgGgvuh3t7UYyY",
  "key12": "3iNV4GhRjNiQTweMYuXpqAfw1Eqk8nh6BgSq51Kvwpf9tmNeNBXpXiNMmrRaTR1S2tvXiVkyC9yFFnbwWq9YwMsC",
  "key13": "48a2EgsbKSnLRm6peJKc8zRwcRLzTxUhdq4qoosAKEYHNLCu3GgGCQMBn5hofZRpUfiprf7ThoAjZhGU8rBMn9tV",
  "key14": "4d2o11VJTMqi5VzZHAFxZZotXEqeJ9P2JAmeXifnozKCU6ZDdKkauyaEZCEFYDZKy6dV5dAeuWpviuGK8hBfyA5T",
  "key15": "cUea8fc7jTwMJxVJX4mTCjiXuev5uVwVyALaY6d1EyFHovZHXcsZsi1MqfbfkyhbxSdSMuezAHwddNRzmDKpwxM",
  "key16": "XbyiRSsMZf1zHfrPxKnRwRGNNGdkxYUsX1mrPH91WLZysFzsCNUBWypTjfKEST3FRJb55YCTT7koWRPaEdQqsiv",
  "key17": "2diWiP1Z5AtnzswB5wkAjw9HTD2Jq9Hvp3z1Bt89yrGr2UXPiMjq4JUKwxvzorxENEwrQLdPaPDjfsWTPQWdtypa",
  "key18": "4hk3KgJZ4Sw3Gwm4tKf6Fd5J29hJMXJnSec4cnBQY2rAg3LFgs9VYS6uqHJ5AeLEqm9WZ2sQz5F1fXFfubzCpQwG",
  "key19": "2pThCmqxtyE1wdFSvEzY1asGFhxCdyycsEPBJcXe3Qz9Ag7zgx4mzvHnJ9pbQmKqhqfDjZa21yNgmcesK3X3gnRz",
  "key20": "MxyiA9S5msPVo5UriumT118BQdX2rvq7Sfa7M1tQctVgM3txbuWCCXNiKmeXEM3TTpnq9aZDQ7svGy89r6vocsv",
  "key21": "3kG5r1D59zxwXhQLSHGdRN29xctpXhYYam1Q6VWyVgZk9JBfRep5mnc7vV57t6hGjwyCiPYBYWpVzahEMosS6z7C",
  "key22": "3yeEhHNjEvVngWgJiEZ8yazFcdhdvc34NSqK9u66YX96hqP4a3cYzDoDBg2cECDoSu7ChFx23jbUpUFRKFCmr6BC",
  "key23": "5vgW58242RKZNyREzQRP6313ByaGpZSmEpDgx6m5bh5qiJUUiWQdDTGBzSMeq7xT17N6mGrLU9M3w4YhGP2wgTvM",
  "key24": "3rioSvhKHtJhtcXAoEEwrz2pVJPLuD2UgqoJFhsv57TwEB7HBqFXJsC9tzPjYnC7u1sW4h3XiU6ZbvHdnMN9ExEd",
  "key25": "2F3raHTMKjySwWuTHPuzkuDJdM4JbRtiS74AYsNY2xFtHHyLG7RDmJ94Qotm1ntYNUxuYgA8Z8R9tvpPyGYx5aDe",
  "key26": "3RPymrh7RqhHCdooXfp7mGLhUzGSJsrH627ZJaQ4HuP3K4uJXW3zJoVdz9v8N4GFbDbrTtNbiBKokdNHfFdrVzoZ",
  "key27": "65gDeA6FqdbE5EpMxa3Upu9Wvf5uWFxMWvD4jH84D4C1jTCMRzavaHyoJSHL9jxZgRfsCkGVL5vgMQtqADi3xU1J",
  "key28": "4AmbRteA1YbrgVBQyHHDpv9WCkU33sdA1JTuNuCCcZrgKj4KK93MFpUBhr4e2BUWyLEX8mnAm1kYUu8chjR9Ru3T",
  "key29": "2W49yG4VBHcWWHLfFLJ4LZH5dN1RcqzxVuJUdWVb4TRGTSumnfy85EV3BiyMUkPmtRDEytYzm9Zg9vbMh8HVs3cF",
  "key30": "5t9tbb11uuSMbAzUCqvwv4W7nkGbdHtM7di8AwTzj2bgKm91LXNsCz8XdceWiNjJh99R6sKv1BRkV7ySbmeo4Xo2",
  "key31": "5PRC92eAMqT83WMAd1igHo3g6PzPcQu7EfLTStp75MFSye1H5izkxsk9qkrh24HcAHUinXkUnHeS7A8HRkf2aamY"
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
