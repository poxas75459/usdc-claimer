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
    "4Bu7jo9ceULg2sMddg1YPfsobfvVDzH3ZxnjLPxZM3SNu5dgsWT7FVnC8cX2xbU65Jhf2taoaYNy266XMRCVtLhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8TETzEA3biLMUWg6zr6rGKvb9pNquc9QbQchfZ8zQzyRbFiwTaEspGJdZYiyiTKzBHBUYRnMj4yrxTKaT6Hr3fK",
  "key1": "3bDhZhiaqGRaQbfuEs76Dhoprzo5cdBCVgzFNuzNK6oHuS9t1uq9gqvoDoCtC8ESvjH4RFLDvrha2EGL9uLdSxHm",
  "key2": "3aHGQMMjBHvZegVJPLdyvbQv17DpUuUwb6yKGq4ors68yFat6dxcqzcEzqZkMRQKRxNNpUEtLufcfCEypuCxnqRP",
  "key3": "5AfLkNbuQKTWyD5w2PebgGYTqFu7GEtBMpxNewZHEUZVUsx6XKr1xGD3z5yiiutN4fddxDoBgwgpxJGbMSPppdee",
  "key4": "pMt1HeL4wCipx6AyF4d6fJpz4Q6BwAhykj89CPHvJXgALvBPLzJQmRzgiNL7p5yjQ2CyezjmZ3tXEWVXix99yJS",
  "key5": "5JEJBr26HUFvvyT3WfAuRhLMkmP1jnoVDrc1hmg6ktQWLWyTvNxFuvhdMJR45zRfXa8Zk67Wavi2aFkE8rHgfcva",
  "key6": "DfkMQWqAW6aC1BruB3NaSkBmYEunbCNnvRY36KpHj8oJVgA2e1CpGcE5ni5CdHMbDUesT8hY4NGB7VA2uz188B4",
  "key7": "4PHbDo8b5AqMd4ardeygDKL4XgH86KZMzx2F3c79h1Eyc6u4Goqq7qasA5nh3ULUmNbBbum6BkLgefQQAC2WHEAy",
  "key8": "5gDeE2eRTjCEJvNx1f3zWNyKMiwfzCqxSiSaeaKLsGmWRbQ3ma7wFzCxdTF9ZAfdsrFKWaTcdEy77aZczPXun1Sq",
  "key9": "eFAvpEWwaiEZ2oSZ3kACoGMuQ8dJcpQkKSPRfo1scvGLU845xMyXsMuDXG3K2prKXtHbMikHW4G8jULBmK1oHPg",
  "key10": "44GcHfMoiiQ7my9rYXrkUcxee9mHXXoXjWB2dabtgsytjSSZp7XTq9vSwu3RHQn7P4qL2UWWq2y4xV7RjjGaUcWz",
  "key11": "3bMFe2M6y8jz8axvG5sRCtfs9GPkYKhUChHJPU2rsBjVdsJVnT2UrAofrGJhNyR19tbswGFHy8khb6QzYYf2c1KQ",
  "key12": "5MzmBj8UgXXrjnFFk59iZH8ioA8R2Y1R4Fxm3VUFLvMSbyekJ2zYmLTw8WHRSbL1YXvHHjNU7Y7i8ku1uox7rU4K",
  "key13": "2VxFN8eUAb5DqTsQ3TKasVaNd6R3TvLvNCeSxgyyDSkDRKGnwMZFuyYAQVbDrTjfpLLFAZhdzJP3A145JQUXCNgr",
  "key14": "EVoX85p71UUaKzjcMeZCzEzUZXd7ccsFhWZxbwR29Jp5YAqc6iKH9RK89M5eRHDQPX4mwtXT8Y5bmzcvMUfGNEU",
  "key15": "3pfG7HKKbsBNeQU8Vr2EXxurocNC9NYwQNu6UkEN9oY1nYpd2LG2ZWBmQFynW7t6Z4s156RHPvRSZK135kHusBnv",
  "key16": "27xZXXNWcRmD3eFsafHxCGduPNqUaKQ7tWfWvsqtPHuRjDR93fCvqnznyxFFCiRJEmYoRszA2FP3TQsVrfJrqApu",
  "key17": "4ocaR7DV4FSdsSBEHTFDcsFyxpnL9xxqbVxSoR1D4A4kXwP2W9sCF39GTt34RJW6K3WrwGqrgqxKNVRvDNchfurH",
  "key18": "2avztpgySmTTGxQG6LGQh1vfvdi8x7K1fsUGEvkrZkopk8qXJReAAM6743AKBpZ1FQX1Nf3Mmi12aztpyyjh4Ef4",
  "key19": "5DZXtGoVy6MKjsKBn6t5gkFSD9DG81b5at7GqqGrfeTsKmJbWjCJCMcFST1R2yErpYDT9kBivMMxtsa2sNCXskAv",
  "key20": "4yEZRC9qsnT56RyPnNSeidjPTzxe6oFRiDh6PUaNCH7S52Uo9u351ptycHAvRWAJBQqnNjBy25XJ7J3uNeNHWNmo",
  "key21": "fTbwBMkkRSf3WaTk3toMEbP2wCTEWEkgYVr9TBo6Dvn5UuxX1J7e8eZ5f16vXCWPKNXkvPvpcj1sXPGTDoAMkLr",
  "key22": "yWD259FYDLAdwQQ2vtrjxyJcgRApA2sQmu8BauVZgLG85uDZCc8Wk4K8p7nzbQgZR37oiaGedJ5aq4MxQg3xawc",
  "key23": "45cDcSfXfg2xY2kaEi1BRmU3rQUwzjUDJErUBQZXuFHx5xpLFivXVeSJyjgq19qNSKeTy5w1eFVrfZ53GRSzq47Y",
  "key24": "4hgvq6vwJSLfy9qPqjkH1dDJGjn8LJXcYbiEf3UJb3NNJ2hiSdRmjJMiiMJYiCz4Chab6fKCkU7cWY5UnnrfBoWz",
  "key25": "5Nyyp2oVXY5u6Z7wZgYZZVeAMykB2qR8oq7qNEXhMxNN2jJC9Z8BKWyUb9SUxFE2XqXjSjBqpfXwheZEoe7KvkCi",
  "key26": "47Gq8kfNAG9NL2gp1XaDqdd7gULxvPfbBQXudKU3mMMdR9t1LdorRSUkUQJanNwQNKg8S2h9NcAp8MvLH4xUfNVa",
  "key27": "5Fw3ExD6hvjgKLpFpVaBrnvG78rxFdfBSDunQKkPWneydNbJt37cwJoh7iUeSevKcKMEWg9X52egRLsKiA9Vtsa9",
  "key28": "gzxnmNEmJtKeP7ZqgM2vmTx3tSH1nCFwsNUcLcKKYWhArRpRLU9qWGTaouoGMb6f2E4Eh9Zvs6hccAiFKneyVac",
  "key29": "4aHdfq7rZn35bPWiyB3Le5Bh36p3kpwuqB6QQ3Dm8iEDKoELDbKDDtyi3Z3WbUbiDCjzi2sSVsnuEMkg7DmRk938",
  "key30": "4pUZk3TtD53phc98Jw47w2x4dd2PXVywwZjkvdpro5bayJLpAt7QWMEDj8MtjmMJo2GL59yC3iVCcSAFjcW61AD6",
  "key31": "3WdysAFgamCF4MRYnv8x4v6wPqAk9DTCNNyL2M3RbqnGPzgWS3weoy1vtCvvj9N7iCdrLxxy3vE1onniwWKEPySA",
  "key32": "3tXGSNixxPCXMwWgr9sG6FBVyKEzKBAFMkMhHWNap1J2UWAXgxN7jdJEjtozR2BgEEWojQn77LttCCkQ3isHU96i",
  "key33": "hdQzHfeeGxNkEpL1XLFQkTaxH7eKRpJomHUAf2hTcjvvZAXWMUxjFgjUpgBozJ85NULg5FLWFqe1dGvq3S1Z4bg",
  "key34": "3o6uaYMUTeHMMvteUrgckoQUYohPLxex6uFbsLTEx8eFzwv1uN1rbNSLkpbxw5QzRpwV1BSBZzDS4PVGeZ56Sjfo"
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
