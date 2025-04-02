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
    "5j2vEtw4Kd6qUPLykcBzZ6Y2UDYAmxYNqNGXGZsNdd1QS44PRVoPm8hoQMg6usuviiGvuxXMTcU5aT9QnqVzwfyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34BsgRvx46sFWPzRWdCE8nxyAvuStdWiP94EeCnF3Hp2Twtk9M9LFaxMQqxr1W2EKsfVe8cQq2uXitJuo7P2k9He",
  "key1": "484RU93kQWaYpd9fvGwKAPLWAuhY7znJ9kWAd4q6GBXHP8RwJqjbRzN6XeNmu1ZxtVWUxp18frBQbss2FvW17MQd",
  "key2": "5XGMwDsLmpWdzyuF7wYLxaPDifEMU85yZA3Rau6f77DdduypgJscjxvKj9JCzB5oETR68F3Wsn3kv1LgTX7jN5k1",
  "key3": "YGUzLw1uRPKYQMtv4towPwvw9nb4szfdT1EiMzR5ejUushvakft6MU26UBGdmTTeyz8uTS8o5uSLuRxLCvnGnC3",
  "key4": "5Fr7G1CaivfN6suhkQ3uUNMm9paSGGWXUAqzGU7saMB4hPJ1GEtm6MhosTctsAwxz2H1ciDAaTNjiuF6KVxQEc6o",
  "key5": "27aJi4BD2CtwYVqwjgFeR7k5kxzBx7svrztypS6DfmvooewQjajAto1JjDp141zjEvZjrWJ99DxqPr3NTHnApMEv",
  "key6": "vdycANMmjAJhD75MZb84nSeHoWgdTNmYV4DotiVzkLF93zRuyVAzUcc3FAfpSYHcYyfVEx4PX7qVCqM2TESTdAp",
  "key7": "2Jn8EDfgVh2FwNdtowxpDm27uZ6fdjNwRpHKJ8X3byLWkbndfkrJSmmM8HaeoMAe7uQfGwfKDeWAzj5vfEAKWhps",
  "key8": "5czYqiAjKxt42aMS5tvPgzeUZjABMBJMvmQN4wQMJWqHtbyZZ94uh1yLcRigWVXY1M6Wsnh57ZEDf7czgit7Msk3",
  "key9": "3UbHXUP2Tjf1x8R6wrJQ1hvppuHnsueMEQwofCiU7tB6Kni1r5PzpxgP2mnrJj3S6JV8f3MQDbp3bv727cdprNnD",
  "key10": "4q9jpwxtE38DRJAcTnxpWM7fuiJAms4dVwkJWJzsWdsL2t6QZ1zwSqKaXiT9QQVq6c5nHPkQXtqh799fyLcnURfq",
  "key11": "3ZPp5qBxXhQBEnioWbvPafq87XpWJcbANGjPU47kvugfUrD4EeVZ7biSc6iUNvVV8LQ3Ce7V2utj5aqQEU48WsVT",
  "key12": "433fh4dnE4yEj739wHoHakqJYDrfCe5aFkptqvwkKFMEG9hwx2c1ZfPUmTfY5sFq6R368Zw2rCPFTFbFoBnx22a8",
  "key13": "2MGU3EzyK9nqJAxNNRpXP1QoxYGyJCDxhau1U6UbrHsEP5ybkaNLPVZrAobF37fpj8XMvwUbbCUYLqxyDfenmi4c",
  "key14": "4Agy7DYg1VdbomNY5f1oUEd34NUeyDX9hteeTo9oCfYL5KZ3tKaeGWNQpaqPrZmNt93LdLVi5wTxBKYxM2UeZ2KA",
  "key15": "5xRr3ZuGeD6eusD5EEa2QA6mDA4Wh8aTsafg2LLCDAg1oMoKuWi51NTA3SnqFUsWLgbrN2x4Gtga8RG9Pzixy8sp",
  "key16": "3tKY3965H5EKwz2Tv1mBPZLgWwQTJQPxLPcgFpDZcaAUrB7YZJHCsd8GbM9Pd3MDsQvGk7vbWnWbgX7jBuXKjwGh",
  "key17": "4nH3WVftprE7AvR1fBN7E8Qy3KqGrBHqt98jhQdRQRUX6TECdFFqdwW2KZKQ2nNSigbc8jscysV293qc4eRY83ST",
  "key18": "2jjYyAejtSLY6umDEdraJmx8JEuBa7WM4hd1fRf3Bk9kvhVPsSvZtjPj2P11neaYAt9SEiQgy5yBV6QFPShYJZQH",
  "key19": "5twgLMY5TeuXoc5fCrnN11UAZuQVr1oivMzSLeZnijydjfSnyjyFBDDUE2TNGdcmwskYAh9SMNGbEKiFUoMXRjxW",
  "key20": "6Rcg4nYqEecdxGaBCjVyMQ4yCP3iwvU7XFDL96d3MDUAmiKxdWc6efDK2EyvszBWEd26KyWw1y7XdZWAeQqfqQo",
  "key21": "4BgTPdmuR8RFN5YNJQWmUrBFEWXJ6atQ5pYS96EGWaMB9ai5MndQjjZ12YnS6GXW4pq2v1iKwqgEUBa77vES6FoL",
  "key22": "5UtCwhVHST9vbGuFSSySgBNGkMrGYPfpDsVcdjYXwgoXyj2UpZucwkApFcuiZH3RZYceADpotEwkjkhH8dn8uVeT",
  "key23": "5eEBLXywgM6rt2C6Db2avdcRuyijcwECH6X2RTxatmaEAWwJ7WnRAMJVdR3UFWGjgonXsVXuh54MsHukFQ1L1vWU",
  "key24": "2EtaBd1fiMPAzdMzrgc1SqwMKRbLH1vbEpLP5K9utXgmrZbrjEJm1aevqAFaoN3T3bzNkJzTPvSkfuPQEMEQH79u",
  "key25": "5nH1fBTEqB76i7hBKwqNcYwWW1EmimsLGdjCQ5A6zzfSyYgn2G3JS9ddVSWiha8AJ8xhfXHbSrXyQidCXocStgQq",
  "key26": "sXEKeTY42473cFUTYWKBPuCzWUzx7j8J3WjJQzBdEMX25AZzwPVrNNzfgtvbr1RPPBXMxcHSeTKWt9BzMCMwMt6",
  "key27": "3UiZUugnna3EpFDATk15D8x8CjyLij6SDwyrngqV8Xuui5F4LK9bUeErZAHaAzh2fb3Ry9zFWmyE95giQqwCXD4V",
  "key28": "2kfe82zdjaewf9WMsNzQS5Svy7RbtFKGEr6Q4rSRiE9G4rQmTMWQ2ofV4dNGZXrBFahHX1feeHFWe5XWupizRAUw"
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
