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
    "TSgyPhRRAjLJvtjjabAcsV9brMJTZjReCovs4vfjiq9V7v2UwCXn7SnpdxzXjwvRa9chbaYrD8oPWj4w4jaqegz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WcPk1A88asmxhPfnTMT9StGjY9YvgfoFYU6KWCg7tgVrb9BJk3CeSHaUCG93KjZWXkjFeJyJuWRwJ5xBK1RqpVa",
  "key1": "27NrxceYbD6LENe3QE4pgyGG4DNLyus1hFTtWttvRRdLfgzLvZX2YLMqn6HCNscGCRZhdetxouexp1id9u6SH88c",
  "key2": "9B68hrLkPSsr1p1RNMGo1xfEz98YngyF9eFfkMLEwVHZ8KFpQ53F973eFVnYG7RUaeQZzZ2pwF5uUQBJb4QMYD3",
  "key3": "22rHUrWhxDSmWCKgbgQN2t1MXjeHr3StQx5QpqF8yX68vxUdcDurPqvDg1djkcu7dH6tPYhLjQSG7QM3nfhU6cjn",
  "key4": "iPsV6hnjau3bdF4JNJVYELMnGc7FEUEh8Z2X7RB8Sd3tLmCorNtZE9wu8iq56tpJfZeMSRzDHpS8oFWLRp7e1mV",
  "key5": "5Q27E6fMADQvfzJQ2AocnwcFJgDstKjcuCuW5ZQNj5e3gXc3m5vUEQ8sm4xtiGSX7B2sT2UX2Kkb52giGsAEpDsn",
  "key6": "62v3mGNmBFKu8nAXgRdrdELtA8p1Vy1fbk4kFePcnHzqrpPQZtZy5mJrdJiD5Cc5mvLgp9MQbmyd8BeYBvcwEgCG",
  "key7": "5FBkesfYDtA1B3qGoCxxwQEvAYTguXGXQvgjGg7an6fKLPLN2oCwBT3wU56nb58i83zTGhPb6QuGyyigmoDAacZP",
  "key8": "y9144ikS36YYZJMhVvvqcFrkkGYA1L4SxZfWqSkKHvVBpRFRUsa8FvDvYuGj6PvYgPiGmTn4VHGJQys6ypghUr7",
  "key9": "3RbQ9LUxJLPfVxczUENXra4hJeKpLigGkVV4a4J1kqnYd1FyMhbCFobja6SKJtweXsntbYhiNPVrA85nVCx3SRZh",
  "key10": "5tuhJhLJP8maTpdDUm2HRAFfkvehFP9bFzfC6ofPR11uZJTu4nNeoWKjBNLPaDG6nrvcXyECNGQqTtxmxS4AB9SJ",
  "key11": "3nHGnRvhoLUQXauDXJTWaKvmNQECTzy6P7hdCnSKC5qw9gK19Eh75bRHB4oLjJu2M74FCGU2va8FtZHxLzppTE8g",
  "key12": "597QSLHJnvnMJvuY2VA5j8AS4wEmkQuAyeHEXDp3HKCDfBftQ3zA6dTivPGegLSK4LcBagX154ukYMjUJuQ7B3C1",
  "key13": "XyYxajYbR3ZeW4feUx2kvPzRU99i8EzuRRPfcp7L6CVS77Kh9tKyRnVuBKxvani5jDTrWHM5xFqNXhax5EqJPQ4",
  "key14": "3qkHRtBSzek7LbVDTfjqBc2kt7aJr39wQcVEcBHmtndZ8AeqqCZeoAUoNotWkiE2tiE51N6JJ5CqGfaRj4o3rXti",
  "key15": "3A64URgzKG13gJQYzXW7ArthePLEAaBKzUChvAxPFwFcoeCTqjtKX2j7gCcqHB6UoKbW3DxAVPQrsEMyhHG33Swn",
  "key16": "5W6sC5hwrmh19AMrj8rZuHc4sLQgtUD2voaW5W81hNyDEzTPqQHuGuYsLfUwVS3sbPpcufb3fVoXFQWUR7s9oBzb",
  "key17": "54tAQdZWcxviJC7DtNavhvNSFcQwkucUVxQgf7h2f9ppxpnQSL3TShmrxanojLPx8HXKkSczLUrBB6AZuZXxHxzY",
  "key18": "5d9keWehsQzh891d7ar2hscXck9h4PzYnJRzDmsu784yMQcM2grvueavBKrts1hkFWWZxo14EXXqng6gosqZYj2i",
  "key19": "2zkscrYqwcXpNkjzKRG6KmkZ35MfhCRXJSTcCwCv3zJ92FACE3xMUkY35M8vCinyThCfMVL9Hxnfkiu8fjoWgcvY",
  "key20": "4WLva6d6iZKXbFNMV6GJ5n4csySfFLcoqjBLqovDC4sfvgYgMDyisE4zfbdfSiMHPgFZ8LFEx3ZJcuPrML13egb1",
  "key21": "2ifrTMwsybyV7eKaPuT6qmUZFn1p96bxPXUkTp2Q6jP2jZtqsyjM5ujmqoSUi62YnRpSpcM7woH2b8CxTFrywhSK",
  "key22": "2CdLcs5pSEhu5JTwTcfvm1siaoGBeeCQr5NyipXBWZ6EPeqjLW49LQxCP2VWrbJQQqVDE5g83rCpMicP38E5LvLK",
  "key23": "3QJSDYoK7xXeaxXrzh7RviZwrrG8eC9PyfjXRRhgyFNEvkPrF2Mt2BocrF5UXQux8gV42QCzvo77WxnH7j4gnrzW",
  "key24": "2aStpCxTb24vwwb1wMBNoKxoNsQmGh5bkdcRux8MY2QPxTAHUhsSBnH5P4wLSpFjuY6MjQxP6TZ4uAT2wYNpBehn",
  "key25": "4czNPo5JfeuSheA7cYdBWiUi4xSXZzHnoNfBGmg1rEnLJ62tJAce4W1rU98NwKeDEPHagFpydkkuKazVJehMkAYe",
  "key26": "3yWfxepdUcgvGBtbjZQ6xEijkNEEyVSNns9tmmpeMrurKdXzaohtiN5fBcRHXcH3YGyQb3A1Vqmw6JtUdVRYWG6V",
  "key27": "2z7sxVEadUGyVgMZhSt7QnfKJzfKY2kUayViXDJVS4faYPTSbUJihMu9paCUCB2X5U69NbpnNTkW1yCM52JHWiTw",
  "key28": "4cYwmmkK71c7PDnX1WnE3EqnHtFpxofRritvzyMxzQBj8mRhsme1rGUwyJyk2mkzcyJRm93nsxDrEy47AUuC3ZPv",
  "key29": "4y5VMiNPQnNHRAQdVUfWHyTfLwu3PiYiqa8iWkVuVkTciFrxkuUBezAWtYPiPWM4whQqTWanx566fDaXbjvnbBit",
  "key30": "2m1f9kvDcCr6it24wrc2KyEa2q5bJ9VfAtLK2qPs8BzduBQdGYYJwQNSELECt3dmnqm1zCbLUGFHVDgXUNDoBQj2",
  "key31": "5n65WryEEqbijDx6CWk6YSGmT6uuFd71uSPcosHGWsFHBRhTmV38MV3gM6ToPwxEf5a1PhzyFgvWNmoJetRAYGrc",
  "key32": "4ugeeiEzgtF5wgobJGSZ5tTWkoG4akUqLJwbK9PZ1ZPrtWzuKheKne1ATKwtNwT3cy4YDKXBABQRNhusK67Cm5qH",
  "key33": "9DBfncBBix1WAgAbYNoxY55JQBVHEwngpuF5WBh5tbn5GDEduzb4ycnkxoH572yDDQSgcGXRHg8wRqg3pb2R2eu",
  "key34": "2bQENAnvT9hAbU6nHjdWv84KV1hm5D4n7jLWiotni3spUaTQioZgNPGp2MEFa1YAgWo8xyMZodK946ooSTxYANbx"
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
