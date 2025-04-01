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
    "36fgLBFR7CUSz9ZHHDvkcidDHGaRj9LmGgSmXxvPVWV5faj3sZpstytQZJRubLRhUmNgsCX7PHZH7Jqk1H3ynH94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xWdZy36Ai6xBpWZkFAJMSN4MkdDUn9jKx6CCP1KQhK8hLjNHmY3D3HujQUMnm5bFkjBs4Qz2iUX9SHPW6kCDXhC",
  "key1": "54eW42Xb9obHxhfhLMqJWgtjHXFVeAdSzqVjWTUopeAfBCEiD2GT37oRRNWx2uqu6gRwXbTM5NDtw5UCrZTkFcid",
  "key2": "i3LPw2Ma69VpBzW3qFxKVRFNnQJvfjYgzWKSsAxxFjLCxNDmSViU37xZGTBt6nC8MWfk1o5mFQzwUaN84tzyx3S",
  "key3": "5xhTLN3dqr3s7YjzRMmwWkCVx6QG9H4m8Mdnd3GQWvo1mJbx8i183FhuE7deVWhgjaPRGq4Jrqx2dhQwzdf3uVyQ",
  "key4": "3ea5QkHhsFDUKDcei1MbT4QrsZpHcNp7svkPTioiToQeBBFjLkdWghsBk6ZMNAqh8amkkqgePi2sisjqx7SVHqK1",
  "key5": "2iVmZ1fjcsYwEA1Z7WhesnC7GgPzUbMaQ8tfHtu9QMzw3qghFEp5np254BSVK9xJY5Hmi1JkrURdM4gucmQc7aUH",
  "key6": "3rdigmLR7NVXnkW38KZinhrX91YaKzEKhoPGRicsRSn4Yuhrjw9bmmeTvX9oFJoJ6ZtanVntFSFjEWznjGjZ7Zcq",
  "key7": "5BdokiWtNmMepVKYvNpAMns46Sik2X6n8GKHjP59nTEcGSAsXbvFXwBC2Sub7hsno4gaGdD7ASVc4iooEHTaspuM",
  "key8": "3eTFkMHsEq6f7UeYakgRQqZcJCqz813d6opHw5bsMMuUoU7n1WN8NguCit1xSBsQEwaMEYHTXhXBqkeQuTvzR8QF",
  "key9": "4yPxQhZfUJ46KEtvYeo3bo5ijzbW1hu6ncip6ys1hMGqzKNpcjAPHHk8qHWhHLCXEaqsykj2b2TCrvLYz61ntNGt",
  "key10": "62n3MfwXWqy6tLe8MJSK7Xd57qekF1a7pgTTBxa1hqHyrxSytanDMQzDGwoiwQLSVLehorqnb4Zo36Lu9FcLTzvp",
  "key11": "5qaE98MY8zDUHVq9ZHi64aLzzdqdGNc3nsDsqmZaenk5aTVArn4RwHYA3spLZs8jQpZCVqTNYjArhUxDLkvFKH4k",
  "key12": "bSpg1P9BkciDvQ18HaZEaxzgHPJAzUJEQTihQ6eVYkX1YY1KzpGxYyCTmGoyVHmbEeyKXqhL9AkZjwuFS5BJ1ow",
  "key13": "2HQGBwNh81x4aMwvMT1EsbtXA1c7PAq5arv6P35sSbE7y2UAu19xWMq1uFi6qHa9uyNUjEdfydLGjg7SvBZJKmMx",
  "key14": "3syNGB8u4Rb8vxHnDixr7jEmN164jB84w6UVWVscYYGddnxdGRU4RtPcddiNfDMXn1q2uerF47FhMu7NYiFZ41pg",
  "key15": "42epuDj8Rp4QmTjcsg5HThCsVyqtgF7QfGpNHcKjoMUtiwzSJyzw91kvs2Hvawp8XBJvTWTMjF5wVsqqWeE2Gj6s",
  "key16": "Qiekgp2he8P4Ve8kY71VPHKEPALzowJ4sSku9F9z1YEobhtcgVxdVjR2FnZBczcoc1ndXawLx3L5ai1vwPozhCk",
  "key17": "4Pz81PComUZjkEqEWUnZokHMy7J542phmpT9b5sy5jNvKgmGbraQiH3EDeYVhGH268aEJEVdKVxc4zZjY5rRp69q",
  "key18": "3A6m8jyN48SjcWW5uaZXYsbXsBbYDza2nh39jpk4N3SwHbXJ91BtpTPJKgTSeeCnVF5nze5v9sfNgu6Rmrfjustc",
  "key19": "4Z6VDRtd9Awakd1mEmeR1Rvr2qY3H4UwrVDiQQipUeA2AdQPXtkMHcn8traUK8Muhz2zus4Equffr1uiTRPSG32t",
  "key20": "59wWrBmUqbP8SGsWsMA7qdG54vHCiPsaXWmGnn6JFxhcDg9hxekJDBTNNfqnR1aLYwrkfMTCknuy8mMWgnYmCBEn",
  "key21": "5RmEqLBRS47ABQoBPpx8jWoDn6Rkh7D2351bpxyEbuY7hWjFovT5jcePxoChv3DB8DUK2QZtQuVmzcdb8ZvTKT5Y",
  "key22": "5tJvK5qpTMwv8mY6gemq3kb4eR8PtBGfzTX9fUBmCtwavMdDxXmYsTFWpZ6QMgrMgi9zPhJnJ1C7Lng5ntdgq6hh",
  "key23": "2qUvEjRP2WE1SGNXabpVX99R7wyjcoinFTAsSost1SKyD8EJfoUo3fpsUsEMFxWxq2PA9oN6CnR2wiMGJtZoeHSM",
  "key24": "FmgTaQdbse9jUq5A8UbNKvzGeUrAVSrUjvb1auoEiq2zgVyRtzi9XUkPXyRLD9ryWX9wyWy25UNUXrfDCrZBYSA",
  "key25": "2rkuk4G28nUp3BoVcRgENo1Z1knUEk6xgKEPYsAsN2bovXLm6q17BynSWXaZbvmLQieA8VQS22HcSn3GeNc8438S",
  "key26": "4swB4MWJLh79Skx2QdAYc9t8Jdn9buDqeaXKazeT8oQEKzntJHgZpBf25iZCgTLNsJ2L26kZGRiL3Yr6vW5P3BRB",
  "key27": "4SJJAHmyrqgQBBpbQALspSeFZ3HPiL9BZYmhiLtysUgMHxz12xoCcALyFndiaC3QYF1uWRNu4SgPZxgLEZMqJjNg",
  "key28": "5kjRDEs55JHZzWzQqTnM2oxMNvPiaPguZRdWgi5mmRjvpptM6yHtYCacSCHmE1cQHsr42KagJX3mUhevvoit6Ws1",
  "key29": "xzLnBT5qLXKendnmKceUyBc7VMG8gEvDVp1gTzb3RndQ6XzVy28tuJmYA62ufFbSTEACaTR1XKAMqyaQ59TbV79",
  "key30": "272wMFWwFG3P6a6vHpf5kXcQptNSU2peK7cm1RKGkSpaUced8BXkvNTQ7ybv6cvVmwQL9gfP7UdZnKDiipS4br1r",
  "key31": "RAJH8q6Q8GBqFDjCoocEX4jQkbXNyATzD99fpeXJP7iH8oPWn3Nn2UfBQEFweQmqRv24UhDECirHakZ8pwLYr2B",
  "key32": "4A7bTjahPjxjys5BacAECNpLU9jdtkgLkEhK9MHfidRUurbjdoWbXiPufdN9G6jUgJW5jc4Gz8kmwGt9hqCfSwgr",
  "key33": "2cYVyGU3UGigy7HTgkkTanL5p7hVMXZCNLu1bK3BaPUBbg86kSKBnamLLXpryTjCArEktbss6Yymc7wCXQbctzRD",
  "key34": "4XRXKUuxHdmc9powAh688v8W6UPEPiPm1k3owXL4bJNzbLxLwi2NAvXpiVsT8pWr8yDwTeBg1M6whJNSm4qb9xpb"
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
