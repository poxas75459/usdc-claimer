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
    "3M9izJbiJgcapmq8uQfnHCqacSnHGDAxcVParPuaQE6ueB3StdP2jCRBKt1pxwych4DZpa6igUDfJzqy7oK31NZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X8L9GbPEKkfYJS2AQAAnTkALw2YFXUC9Wx3BPsTWNBqwUbzPXXhUgxza2oPXGKADwsLiwubcPPwSWLbGuWeDYdk",
  "key1": "4m6B99Vm3bFX3bj4bVmwgBuLACcRFUf7u4ok3K8UDfSaYYwtqAHWoQYAZuy7Ts4UUxbuBuPzGaurTxBDbb4oTy7M",
  "key2": "3FZcMEgifS4FASAbmsBphEFwXcLcUCFiG6C5uXCr7ed4rABaT6jMNrPDZrEToFXKk8MEpQGKfB3XinUncH6qhS8X",
  "key3": "3E4qUB39SwWtT1SPHS81dKCyjiA2ZT3QKTGcKFpm2s3sWidjPS3QBKeTySgchyHcyYstG5nJv5qha8onkmYSf4NX",
  "key4": "3WYQ5R2hpeuVkp4hW5phGkYYGVceBf3RcAs3ne2DxUKMCquFsDPxFs4K2SRELwgpi7qLf3tmXRFCjgBttbky4TTH",
  "key5": "ExdAvE22FbwVdCroZcUbaspENmZVt9Gs1S9V3gAFApvKWh52oQ9DMeQpRKHMJo78SeU2aEq5Kx6qer18QtCuykf",
  "key6": "5SC52xVxeCe2LWtucfo7KFcyhEy8vrEqHZLe4Udnoo3sMFiwYkm6i7UHgZpba12hJsY6af3d6YwCV7WK6dUWJpUx",
  "key7": "25dtEb2e5MWnWkQJWrav15uYCSUjUo6QSNL2CzvMFUjeWRqxnbdNtSy6SLpXq3L8sUSZoHmhWbwNXxYU34q9iV12",
  "key8": "41yQVsxN7ZVifezcoPRgt5C3yoECBkvySaEm82b9YKnCjqbfZPBxfwiYZzAcADLYGoTaqJWMserGXhtBQvSpCxLU",
  "key9": "G7dfT5cjy72g51GeXzxDrKfPY6hNLZhLGoBGgH32cTqPHiVZQJYu7bdrnc9wViLQ9oVvyzTEePoXDKvDheVc43t",
  "key10": "RJsV5Q9MQ9zjNUQxsixm6CPax2VobtTcYBZb8jP6FLieZTEq7VYRpaNiPL3bmfxWCsAgURMqwBwL5MWpQeBrSWk",
  "key11": "2c3Bgh1twXrdnkgdS6Gz6BXxAbtk7ttbckiBnahJc9CM8DJpdFoeGH6VS4Kp68iftfZuwbtKmGnaH92ujd1ZQzYo",
  "key12": "4ymeXUHASrALesk8HMPV68vSgP4xgdMnzyBdwoKtCCKNZ4zZWcUtGhvXphSa8jHKqxAAC6FLQzfNr8FwP5v9XJe6",
  "key13": "4awpUxrE6z6gTqkijKGGN5ad8N7UqXKSbWwCZqU8Fw8E4G5Yyi7arQ6Ps7NYnCc39mzBZBNHTib7WrQh4bZRCmYX",
  "key14": "5gtWr77in5GmJbZRxJe36MdyriyVJt2ePy3ZBGqtwRmWGZ1ehNhskPrzgH2B8AgMkpwMaZgEMe9K7NQ3cnkTLGFq",
  "key15": "5XJ7Qb8txgAfUvdruo1MvL8nBtj4X1GAQGDx46jjepYyuUgK2Kgpvngaae3KLEPPvjAtsXquUgq8QN3U7WwbiAN",
  "key16": "RH4HJPkQ2GsbjWFenwom4BwFfrwFHLt7ZmPXZ5roepdWFaMWCdyJw2Zs3dku9g5CtXuqMo7LbpAf713FD2iA4hb",
  "key17": "5trKFefRX33jG1tmj3H5cZRPioywcbVW3jdmHeFwjM9KBYZsPXRGYJDFkxeB8p7UYt23uyFET2Es7bTsk4wdpdHr",
  "key18": "3WUcCZCvzVZEvhmqiYJED8PGMu1b9BLNmnrLsQCbZXBJM6TmQWRarVsipiMCmp3payTwLDpsWtQPaSp4Gt2GZEFD",
  "key19": "s7CfKRgPv8Xv6wvZJZVhKKRrJU1eyput2GeujKYjgz9LT3y2aAydgBpwyvJvQdV4Yrq4Zxon9Z4nhbZCiesT9Xp",
  "key20": "4W5JyVNdBuZiVxwc5es3TViqUM3rTMmUR4C6bcJL38eNkzundhCUHjpkP9Eeu7MuVGcEmYnq1vHHKYfJTQrjtMag",
  "key21": "5dWBdfzuCQvEyeZBJywetUXxb1BLLQkrfhqBvwBYryG5KRHXYb1DBw6MiYd7doaWXV98iVXSXDtVTKbvhuPXMiW5",
  "key22": "5tbgG54QgfV11B2uCs2dkLZsp8FYeZjfJaaRX93PBFZyXVX8j7eAznFUTapcuMYahCi1XZ3PZkLi6yU2X4tfkJQY",
  "key23": "3rAZviowYjptPijGrhh73LbRaCxbFC13L9RwZdrkt8uSHCg22imFneMoLxrbsFtCGHpefva3NR6dx15gQjLruGbY",
  "key24": "hmbUkK4D171p89Cq4mUNCsHgQiigCsnKGnBxwnppLY7gnMh61GMDZcbPvrjiEUS5WF9wAueGpoBrfqh5CbUnqQz",
  "key25": "5WXw7pkhBUrkFZghCHLx5j4N373Sbpbf6pry9vPJDhzUYxS5ynZA5uEMmDmxrs7bopTKnpyr4ka9BJJHSpteV2tN",
  "key26": "2gJjqitt63T1onEc7yxbFAw2mQvdHnciteB7HYFESKdbBG57TiFV8i9qCo2p6R1wQro33EoexhqgN7dE9LnJNvAJ",
  "key27": "5kchY36ZqR9gWCTvzUcLvAusSuB8PbV1rHKwino7yEkhaBwDienTadGnNooZN6hsEybZAmw1yMCLUkSgwhab9Ra4",
  "key28": "3tmP9Dngr1NZQVufEi622xvqEUzswD1UdAjbpB67cCz5ogSVueyT77C5Mddmt5ddBir5rFEpP4bjCq94sCGDn8vd"
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
