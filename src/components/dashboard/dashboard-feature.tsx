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
    "5bHU3LUwrCqyayYindGVBDQmUqGNkzQmXmB8Vo5iyQBwe7xjp4LCfrkxH6na9D49DEL5Bdd7qLFHRpEGX99RdzF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4baWF5yD71NrvNg9nP6tpHrpwcdJZ3927wZxnZo1qzTJGcD3U5nNJR9fyeGoHyJDa3SUUVcqq2Sh8zBjq697p2KP",
  "key1": "3PoKfRYTHzHoGXhxGuh1hQcgDferYiLkJt7UU1x1iHizzSP97dbDZrrXNSL3sruUA8E7TDEvSMTm6bn99t6Peer7",
  "key2": "5o86xefqyykvcNfsuqBBgeQpiwBm5F74rmwSnv6f66u8w8pjj3qhsKEQSRHDEYwYqKGkotazCYiu7eivcBqkEhPR",
  "key3": "4kUiWH8AE8Fypy7fxHqQWTFNfvrnNgTtvRXcyQBXqLPauzWa26bHkhfeFSoCeV2159cwoF94x51wArtKicFdJo4V",
  "key4": "3V4bNMHcUNTV2Xghymbb1hxhu8pHgjuQyfpZaidrFxw2RQc9FC5BdvAtkUxJViBJy5MgkJ8dhE4hkrRj3M7VL6W9",
  "key5": "5hZhHGShDCdiUqvGdwwpNRVm4yWoUJhmLHmidpoCxcWMyUZQiWkWZs2XuW35BEsWHpN8wY1vphQN7MagTYxjET1p",
  "key6": "5vcryi72NuZgbfqnGK22dspoXg5e8PaqefW4LPmckjymTcijncwCjhBGyn5HN65aMnn33KGkvaykFhZVUzfyPNd6",
  "key7": "3FHgcEiCb7QFhjVd8okieAu26xCW3s4nHypBZVuQFZfwmBgFyJHsKout9ZCSoCoixmoYECgx4myiMhDZsqybV4Rb",
  "key8": "2tiVUnLJoMF5zxMFBwsRwRNJp89Ay1EXNg6BoVgjyXRkDK5VHBuNhESo4Yfs93TFzs1gvdgu1og5vauwrSHU4USk",
  "key9": "2TEWv9bvCDayrxHQRXEg4d8dc7SXzRUKDmGkSw72ExviVmBk97CU1Aj2NM4hbtqsSjX3swTABa1UiGwp7w29ngHE",
  "key10": "3QyTFEQU8XYQkWAC88HFPepUPJxrqMwGj2DLh9mECCFcGT5NPCQ4vLwhpiGu3QQ8a3ND8GVZMan6d3acGGM1QU6Q",
  "key11": "2uEEdsxCS135U4ge3BejJSoxdNpaLooMKBSCBX3eaCykia2MHHQLjNvGnrGJ9Fx19nF8kMnCMQWjATzkk4Ki26wf",
  "key12": "3mJQaChamtcxjh3C1eDaNtm2rNpcubxq4sziudXUmdyEtFDf4mMuYp829Gu1P37AcQnSTyE5JAJhHqeiuWQvKrDM",
  "key13": "5V1kBaMjFkrD1aD7317ZqW5nEiZKGq9m1dNCnuDkwTtapZVYR7ebxqdWiP6vp91k926pVwWcM1Etp7ZdJf2fpdUg",
  "key14": "2QPZm9pe9kxttQJS9WGB3sz3QgEqtqziD91RTHWG3ySQW6ebWCSbqYMEvkqiUpXjSUDs1m7Bi4RMLtp7P3dycw7k",
  "key15": "3GUHpsuacf2ry9HNBeVaHcYA8DmgPQzWZUEM2wzzb4zzimFy3jDcBFrCSt1GiKnDiFQqQnfjCx9w26FDhNTaJE4S",
  "key16": "YN7HzKjpucLju8gopiBBiiC8CTbTZSYyA3XYDu2KDGrdMgGBvsFriyosFK6KDxeffnWCdvFYibEocSz3gBQb7BW",
  "key17": "2wN99ThidYXWrnNv352u6DLTRjxDNczqxVQKsZkVh3c3hi2ctsyn74ZT7bdZVpYgHsbRG9hzqJNf3Bz23FKmfthV",
  "key18": "4t6ws6Nk42i12Nf75WqAokmXC9ugJkx94SakpUdtbDKnNk1bLuK34Ljga1m2H6QmiVTz7MuFbBcNVRqJNhGdGFBb",
  "key19": "2qtrZ81WpDHuW162Hyh1nN7J4TzBVGtw84qsHG4FwiG9uA1JULzcxwLP9q8NKyDyvhfPRuGKTshXmfyyWkuEXv4K",
  "key20": "5hEoZMQ6X5Vk69GMaFsyHyLgmYFqZDHrXxXKoWoj7M6PwhwhgWF3aB43fuULKJrTkWQGftR83pd6vgx6fjPVJX9U",
  "key21": "5g7Hto1bR4SZ6cziagtTxAeh2s7aegzp9KEyfmP3Ds2FmNwQ982nvwKfLtpjFVjp1oEq8gsLzcJAfpsLN4DTX451",
  "key22": "EJhzX5Ba1sVWDfqcjwU5f5SMvfR45b9x5DLZy9uwYFubbhNqV62zWYX65UQKdtSv4TGjzpG9cutq7kQohKm2qYW",
  "key23": "3VPjdRLn6ugV6LxegcvUCA6agsrywoUQhmdTAcmiABT9QauEq7dw16DR2gLKjnCS2NpFNaYbHtu5RMJxuBWYQVSu",
  "key24": "4NeqCguQdXamK6mNtidu3cLYwLYPLoTiVxYuhghazFpcYsJgAtBqxAtjSxThHfK8omNAEwgXebCZjoHX8dKH7YyW",
  "key25": "2jZjSG1tSyUgkkc7A9Cq7YuNbhtD1T1nBqvDUEgE6H4SJdfhsDgXsAMYyBY3hpkWXRsQ7ZGd9FcKQidwFn4aLULr",
  "key26": "53wzSzYr8Fpzg4X2Jq15VJsT5RoJnSiJTnMC9aoTEcwptWTtrdnkEZH9TEenckWezJMDaDhsUniQC99VV5HUE6gv",
  "key27": "3cCVhx88XJXW1rtk4Ysgsod6yFNoyRh2Ff3BkKJfHspD3WsgUNk1BXLiaXLxyZ4uRwVjim7epthyLt2T4uyvn2Gs",
  "key28": "JWLSw9zwPfhKekkdbeoxPa3ANUNc477xqX2gpbFGYiR4auRVWa3TBk1Tha7ziSMuy8eSBxeRc4oRCoaQohatWxf",
  "key29": "49khnE6vLDghaPifjbqvd3XxF1Vw8tJxcW6LBRfqKwGkVnGoZzE9rbdbLA9DqCvRb6mHochhqsvQNnGZqnso31fA",
  "key30": "yBHbwP3WV8YsMZyTU5yNNoUAhMGHf86NoVUR7C8qGTE7qpycUgCDrUnNZGKiqYdHy48Km7Ya5BhKi93QU5XcLWi",
  "key31": "3g6vHkJofLTmqmzfSVgaLkLzSkY6Sf3KEcu8rkVELLwHTKG7sYNYghQYjEq7JVSZydzatZ37rLx5Dy7AQo4t7bTf",
  "key32": "56wPyqZQ1TApwHSmgxpRU3zukGe1KyWzju8hXD5j64iStLgy8Xn6fopmmiN2ksUYdvttKLTR2mksh3j6dERzfJ92",
  "key33": "5zLpc2u9utmje5Ux3M15UpnQsW6fLk6FHXwzWF37WJxLEy7r4noPZQ8azxAfPHLJGEjHXuExxiz7QN3oEbJhXFso",
  "key34": "4PUXeoQUBYywUPx9LtaWo3BhcLY8Zg4qxYWugzNQCfMz262AnMFYd4RfqMtMct6WP6bsTBX2dQyW8C9wSNgNmfP2"
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
