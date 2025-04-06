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
    "2qhSHgXaj3DvMtLfp95DuAfTJ55V8HdquDyry9v2Gigc5mJARQVMUUtRi8CFiyq7pTMZjQTcD2SDmZPWstMJ2Ttd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "548yMWk5e4bxJJj7MmDqERrJ5vNJnuWF8kN9oEdtQvrBqsWXUvSqCe5vB3Ls3qjuFJZZshLS6dn5T15zThgqFhWZ",
  "key1": "4qth5MSUA3YFrN7CKU8k1NeoP4SGgBCzidXGJKNymzJEjyyeE17YiHc9HyHUPJd62BQu4HpFavAe9AVAzf4b2VnJ",
  "key2": "2C1wAVRDdvJ4eXZyaAwpnmxdDJvwuoU371KRTWUYb2NQuAyDLpi1VnrMhNe6q9GPnp1kUS7UG16MTVTTxrd513zX",
  "key3": "2s1u7sa3w8j4wGEmNVvAsFb4DKToTZqSeDNWdPqHu67nQsVBiKjcMnWTc8yW9X7fHkLMt8TwdARfqmpRVPBDWcpc",
  "key4": "2c34toUUpT2CUQFnPE9JN8HzGjX64wvxHFhwpnJiAkZTAg5VDsJaDUPjQPHnBVAmbcQkNEcMGvUW1jNRk4yzhKrM",
  "key5": "3L5Rpbf4MUEm3sTe9AmezyBbcHm3GbZRVYhbGDdoqqkn5yzCCny287ciB94yDmAxSyY7p1tXauwxJdZbohUS2Gjv",
  "key6": "2LD4YHYBDrvjvgwxRPnHSwNzwoK9oLHVBQCLj2Nqf1Ui6CTiZU85sDFe9nL7SUEK8wg4XX12XgVSWkn9pvhBzEAY",
  "key7": "SLSdpUXPXHDeVP5zfaqyEawXfkXGVtHjH6ccHU28gPzqL9L3mRh5onx7vsQY2ZT6LCPYaSKSabyzc4AWcnXjE5W",
  "key8": "vbL8JT4nT9KPsenLtNDFevuefYbSWhfzYC3tgZBmcGFbwh7uNQkiJBAv3qis2xMJzCS5nEGxBw8LMpe2oUwH7yX",
  "key9": "4t9mDzfrmXwxR92qdADgUwua5yBEvXH9x5zyN8aGryrM89trzhuCCuubCcg1FdDxvMSbNLCzCepiK7BKnEF2dWFQ",
  "key10": "4gRrsfhLsNyPkzb89h5SYtqntk5DLJYoW5iwvTBNVBF4P7kgG1MtW8msBmbzzs5zPF3LSJDUoTRutKp4dGVq7h52",
  "key11": "4wNkG9yyb5cfFBPCdKVQegCKBdY8ujJqkC5BjwDZXj2Mkt2qLhHAEKnczM1wHjKmiKbtKpmc8gsgTwizyBkGKbhb",
  "key12": "5W6o8aqAdb9trku13XCEPCvM4GM2YyA1Rwp1qdtLN23xuFtPz9kvBUQZV8x9UScsLwrsvxh2VgpsNgWeZSayQVUk",
  "key13": "5knMvkDTRRLQh7Vmj8AbwuxWZysz1ZEdmSc6bi8m24dfdeTjAsi8DbEGAMgwHrP5BQzuJDJUj8oBhDoBhB8V3JxH",
  "key14": "5g3AQjPKk5XyijftWvmU5jYFmV9aPRYCzEA3VcZU1HZAsz4CBdUsWatMGgQJSpfwo21p3Ez2SYxecqffp7PmFXXS",
  "key15": "2wmX62oosAuZdJAcGsoR4ngNwKKq9nu38tq2P5atux3ip9wXn3kMHJfb6HphNUghdxo2jTqXTXCuoZv3NvLzpGYh",
  "key16": "B44Vijstr8Cxgo7mEWHcdKAmKoPX3g8LvvP2NL5GMxMLz3yVWoCwwyMbb6qZsKEdgz6xtgue3Tpbo2KkVQwdYTK",
  "key17": "8T2o2FYqr5Do3uQHhr8Kk5cngLqkC3uiHm9YuzVVHrWKUoEiV7SLAb9AJ5mcTuu6S8sH64vS83YKpfNsoVEtNWB",
  "key18": "3kZmCV5CHAPx8y8bhfBetPcxwYbFeqHmyZs3JzYUTJyixBtwGKF5xVnBYyC4zhDepfTu1b5yWu9ToAzChFXLCxWR",
  "key19": "XHYMATh9RbaCRHzcociDcPbzNSqCyUQGq4noR4ZB4JxYHA9KenkYSeReM1NpdW4z8E8ehwweciEU1QKrq5RhCnh",
  "key20": "5bwHt18oSBw9CvBVoaoZpmeEz5TaPJLR512hGDfmnZDSkMBjJ37xDioc77j5tgGpFY52fgHuxi26S56z1oZy1LjM",
  "key21": "2dkgPXTj3ARA7fC77nGHuv5ddK6t6UrbvEmsB7qaiVh8rHPJMHsectMqP6F75LAimXtWBvzef2qv1ZpuCTqmdVNt",
  "key22": "22te5eSKXqF6RdZmC7T1R15kSik1qUS3obVNQ7F9BJbggnX55BywWViT9Pspq83sAS7KAHiezJJon1HLk5W1yNoX",
  "key23": "os7B5ABGAirMx2fkvBtzexfqtq5FYYRG9Pe72BECsfSCFC4aWXrQP9t6Rh3f2WfhQcFT7DpLqF36ypVWPpZ5wzZ",
  "key24": "qabHLfJ65FqELCqT8CpWa4tzTA7PrYqSwPaqAxbTkMZE46nJkZ9GGRhx2iqJe7aFFnfq2xBaPv5ajxFNx5QzVQ4",
  "key25": "3xbmeYMVDxKK4kvZPQ67m5ULYSagez1pJwzSpdSHdnp7PDcNu8w5CfZ63AVJQXps7cwELpH447FEFZWE8ikAC5Eb",
  "key26": "5B7vBiEZPnqTKNqV8YzKoMsdtn9qCn5ZSM65ymAZ3jBJcd822s9YMoM2Ke5QZAfYs1Xy2t6dt21KvmG4uSKpNRUY",
  "key27": "25XFNqp4jG3jAt5omMuEKW2cgCbqQXn4v5Rwvw8cMPstkYZSgrMYCBh4msmkttRmV8TZ3sjLai29iv4XzhcL99mF",
  "key28": "5EmTKa5KamRFVVE1S92KZTfmiSgGD4Kp3rM5Bd9tY4gPujkq6AepNkDNQ35N7dtwjGC2RqX9S62iB49Nb8FZqyUL",
  "key29": "3RgGbJDbcmtWHA33WFW2fsAzo7Svfq4P4TbVEx36uBjLUDAd67gdWizeHBS1fiGExoHWLuRkuzC2CuYc65jm6SxL",
  "key30": "21wNa271JdDoiHwHSSZovpg7A9B1DDJdv62N5jYYDX6X5QQmrYemx1xVpv5UKGW8DZzmdHPpX1ncx18dyTXuK4RE"
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
