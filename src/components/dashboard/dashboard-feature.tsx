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
    "447K6N8pnM3567Qgmuh3vZn45cDV8vxobzjff4BwxF6hMtgW4C1kxfEesJGDReURPhP1NpKdP5B73mnsAhpg4M5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39A56yuN4En3fV2xTTZRAbSWWcNmyFtM8HxriRJ7329UWFZqPWrMTqeJ5n9y85WtKQAGQftBTQExRGMGBwFHaxez",
  "key1": "3reKTexLbBRGvKHZVrajDZgDzWRww4gHc14vevcFPkRQKRUaZccqZrCxfEQbDq2nKujjXRjDeFRnaYfXEQXr1SNM",
  "key2": "4FmgzHVLoXBYhYSEFhGa9em1jRUX4QmRMA5opmn9uwxDZ7ahPyWCfAiZPcMwPUb6J65uP8td3oU9D8uuofez48S8",
  "key3": "4hUA2qFyWWaodBfRoFj9zBvEJg9gwFdqA2BsTfxAxgM9oKDfwe5ZAEW7LJaPYNWcmG4YJtfqCSnduJTHnFAngHwk",
  "key4": "2x8pLr7ELAxaXHZusoxTbctCLupkGtbrebRmFKowk9fXVZP15vhPNxRRDxCFQjzELmGkLFr6jrW4gyyZF9Q4pA7m",
  "key5": "34zHDDZDYji5hSNUAwVnZTPk2VAoTYGsn3XgbTw7Z6pbqcguBfR2ykxdecfpuNqdNoNXj2Tx1vKZp9btsT6pZViz",
  "key6": "2PhK2VhE6zKTcxaGjRk1KmKtKn2GMnyD7ANaoGx9zrneB53GZbamyBpxTCaLdnaxJYoUKnDkUpJmCrR2osoWdJUw",
  "key7": "5Cwc4fXzcsPA2YrekXKxYrbTp33764CBZKAkB51CNXphXWd56zXXU6AnhrZLeViDRavNgMVdGkFwPBKzNf6q7nQm",
  "key8": "5WaE7oTDkzsv4cTVmUSKr2X9RQkwLSjFUHo8yjxzCGxoP4ypDdsNy3riYdG4xwKV8x83kZTHftspxwqY3MjTUBuy",
  "key9": "1nwbwZVzXucVRQpAxjC3UnByuN6mys3eAGd86qgCxDNHAUs8Siw69wKiTDPBFW484Po6o9mWZwxC7hpJrgbGdnd",
  "key10": "5Vwu4ttNagjqsnXQMqmKTioJmnTXtY2SNaZxMZ9nGCEDBRHThXTRssnsx9XGF8TEKHcGPeTivxwjHs54xjTUBdxB",
  "key11": "5VgXsqBuA5AhgmXr4WVLqDoDpKqA8QU3wNStPvHZ6WsWxXSgmWwUgaaGqutkUCVijxtKEjgXxAoKgi9qG5wH4g7E",
  "key12": "3rTe3A7bxWtCk2tcV4goRDZhY8z2ZNXgrzteyDtEGb4FQgeqTavr4BeVVRYjKa4fxmjjhGDJaSzwWVDQo7g4KL3H",
  "key13": "2XRi3YtDG52EzS11Rdpeh53WeEZEpLiWjF12jHaPphu59iY4XauWGBqV2jx2Nmjrq9w965yD3oU2cRDh8qmFaeqb",
  "key14": "4gpj6dNWnWknmrzKaUSqXHwULJiQTTCWqD2JYNPCHzhQe4MFxM3eyeohKUfutUoyndPkBpZoPAsSTk58ricCZ9w2",
  "key15": "59NjyWq4wTxJ1hZBb2gF6Xyoui6umXm6yYVXnJsHAKLaK6AvJJESA5trKR8SRHiXu2LiYzBzaJcyhxcg5bz3Sr7r",
  "key16": "4UhiwWx8LgA9gP3fWEsNkZJt4cJ6MuTkmG8r9sCpMhSZtHPajyeAfqNZqdmgefDofFHTmaQBNFJHtJuQXjaVB5Fj",
  "key17": "4UnwHFt2pX75Cwc4SU8xMTTXMHLTba3ggYnuWojMZTd4Fmbp8gmFMq6mNBchoeYmizMCuEtWL4SDDeqPATGRhzM6",
  "key18": "3es4D3jh9BPtdACVppcUW9CWPZ7CSmzv7qSM8nvyvMXKdjTVguEr24m719UagGPSa8PhTgfoJN6R9f9Dp1F3r7HW",
  "key19": "624QNF93hq8aiGwiGUGCxxovr1BPoZXi6HQq4gT9iU1oiNH76PZryZKUDuaowToRFvrgCYNkx9yDKGQwFcv3eNZk",
  "key20": "41435ZJXgVP7rBNXEEVUGfEmoqrGEabCPDiJmrmvss111WXeKGXAzG4cy8JACMRioeGmojvJGzAEx4o1tKAVzJd4",
  "key21": "4BbaWSh9CfxiDM2F5DibjpUVJvVMtrpdtkKWHYKWm6Mb2nQ4HxU9DuqE2Pjjocm4V14zGVKXDDUsKdpraMafsLWp",
  "key22": "4UdvztaKa3FhHYfvb9vGYyPWSjvy8ih5aoTsRAkSnM1ncdRBthoZBztD9gZPxf7WZ1pEwPxEFGB2n6izfD8hbCyb",
  "key23": "2tbPhugAGW8kn4f6UKQQ3GbMdeMUaBqzJvLD43TajHNjr7gPPvoubY9cM78bC3gbuzEnAzRyBZRzQWB745t8YNLW",
  "key24": "3P3MCaYCH6A7Zq5HvgZ7BMBN1hkVG1B53HZAaDXbYMm2mYcQc5EVtRXufn9CA2qmVfSUZ6Sx7ATqVf4uCTP6fC79",
  "key25": "4GQzvgztd865MQuZmk9BPQBYv5oULPFg1edYqrE5eqc2B5PV7pLQYKG4PP2XPi83RimsLp8nzLoKkWLESoe7xYfc",
  "key26": "auK5o4EQGxnxdMt7rGPGv25bZujYw1jm6riRqDDJ38o8LMuSZQaWwQFhVGe6CSMCKw5RHVZ6r5msnRtosKKfdAn",
  "key27": "2vrE7Seh6UXCFdoZCZKtm677nwAyhGdzbMUUv9K46usyh7A7iWoRboyANUc15NxximeEjZ7sUM2QyTcfgnHWQMEM",
  "key28": "oN1L2yPfYmMgpHJiE7rqUh46oRf88rMMyLKVt9YKvuaFDeGpzC9iq95Vkvn5sPiNYDj37Tab6gTFGfp2Xkf1Hj6",
  "key29": "4iJQJdqYc2oNsBAxoQERAd59RU6xGu2Yqv6927so7QWdT9noBX6PBMbVWnY9fm8H7nE9twJvZm69kVbmkJgkZPey",
  "key30": "3adLLc9WqjhkSR2B9xP92D1RmLLWmeJNAusnx4kxCPZTntGrWLbtQ5aUgC8eduHkZi2uUdeagpE8u6yda5676Ene",
  "key31": "3Xpb33BwU2NoZRFZTZFq41MzBTgNrFCVg4AuTKQqSV23hiVdwnctxoUDRodTSfasqxzoYVBz6YqoZzdq76qXJaVx",
  "key32": "4XaUBpkBTHgFo1SoPY4ygA2pcSpsB5XhPdppz9a9QVzaQmeDGT719GGz6cZ2eZGgsjhkRbQDePpM3qbyujSQne1B",
  "key33": "3CUtzgmd9FvRFvPBBDbR4ZEJiwZN5Bd1KP42nr6spdHmpCzKT85HDMueec2dToA9jGQHaywAxhBp6PtzhdbN3rnM",
  "key34": "2SLnUuJYk7Bxzy4kHtHfWxFi8bUAqAnWeUow4GJLcixhiATca2fPR1zpvkNyDeJnkbW2H6hpNbuvL9hnxUE3bEKq"
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
