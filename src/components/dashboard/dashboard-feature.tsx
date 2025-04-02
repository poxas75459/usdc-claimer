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
    "RvX8ryvFv5cEuXx6dU3XgupjUJTn7Br4yiCdiXVXbTCoJxxV7yWXKRxJcXtd5TWebTrtu8MQkxiaQYaMr7FtdP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22vdwEjD2DWCJX4mWfLqBSGYmRjG43RvN3yoQCvS7yqDJWj2vQsfzZp7MTECERD2hrNiucGYihHUTY7jiHqy892y",
  "key1": "3eaiVAcq4riLuhA197xFUf3FGFokMUTH2FNLvTAovTNJyrnaUB6iNTpzp5hPbcnAVCWirRB4Stgqmbx2cy9uyD1w",
  "key2": "6ab1ojJUrVimWxFnm47pwwKPxE1JLN99VYaBMqK3Vhn7UWgQzXFKo5YhN7XggkNkou9DG82sRiQQkvzvNZHqVZ2",
  "key3": "65KyEkpw9ddfbSxDNymPYap5nSbLitdFJCu5WRkLhhq5YLpJAUoivN7KniBtNHpUgajc8a4P9QYXUcnySXGvmcdK",
  "key4": "3mCwQthCiFcPFDgkPH9HVMgoXzTBVkBg3GyNWBHELQXdrfjyzQQAAFozXDw83gn5swnseco5wrHtdsWzK4arxspe",
  "key5": "JXJcUpJAbjdmoCM2cs66bn2T2vSgdhy3vBetLjf8MUgYDZntaqj7jeeSaCAcsBXtYbyub3Wd7HG6r94rHFVPzqu",
  "key6": "2A4whfGWy3sy2Z8hsdvmV3gqBDJEymjtzu8kFgmF1iUn5c5jFRHNsVfeMTF5CNmJk3VfDGEfq3EkJK8qLNKcv9LN",
  "key7": "3k5inv8jS9XE9QxFyvyzS92jMMevRCuUake9RzjZtUona9HpFwEnWa1v3fQtMVaENQvy5TWhqpToYAQn2WvCpAci",
  "key8": "J6VBBMfAN688mdst1UpkTPuPv8bkwsvQZ1jmJos7qpVWq66EDfg1NrXyBx9eaiLHBuf2TMVacHUc1UeZy7ypa7r",
  "key9": "2x3bsufaUyXHJegv7Etadxr6nKqcU4qSY3bbHTySA7wr7c8cezfyf7myFnTxa1GgoYE44rEC2jSQxHCHFbePu5V",
  "key10": "2Ucde66ASQA5eN7Z8fQivcWZvnDb7pEkjXHQuKuyqed4SP42gMNS2xTpvnsJysMHarC9LQ9EMujfd6pYH6rMHqWD",
  "key11": "SdXYbWZnQEAZR4T8P89V5NuF2it7hrcPcVr6Tan6QmB3yzUttwJ9Q1jzh94VQeVGuQNBtwBSANTwyTC3zoTGDZS",
  "key12": "QHMGR61c54mEvmbSvUg8fpK68bkRhactXdoFDRzYMUvefCqeEhpAaix6bHpRjVzq7aeFQ69Um14W4WedxmRvZEA",
  "key13": "48zhs8sS5Acx2kTdCZYzYdAqHDb6ZmwCaU6uC46SMB3AG9ebHewv6K5gDMYBaq4ZNA6ir1bcapaR44HGCj25wWVw",
  "key14": "4uZAj86rczzwYUd1mXmFJb5DeC1B4dsoSYbD6B8HoofXQtWn2Ahwof6kJjmW78LuAA66Bc2xLfm2upogN9KzDKtJ",
  "key15": "2xzcy2vC9qGA6LUgstsTafYwkaBvfw9NCZuhPaVTZEHCz4NFaM6f5X5PxezKDRnEyvh49X8hPc6PXfXWNyb5L4VS",
  "key16": "4cyNFEGz3K8VazeuQ376EjA2AfjjQGoGL64zdJjg92rd2nuQYj1iUoMKbbmn6yiZVMTkGq38KGiF832FuwnFG44h",
  "key17": "GUL9bqZoNsapzCm4jEaSJPDAUxAUFLUG8Ktypyrf4S2wCauTGpF4RuLuhkfEHVUBJFNSxURjiE6SJvTAcAYovM7",
  "key18": "erW4iEjWEsYbEVzepho7XS3nUVAkN1YSAvfqGBebpsDEgnKW5HNTWNfPPpHadZE6mXzsSyVfnJXfszQoFDZzqZ1",
  "key19": "2GHxkHGysRSNhmsjHrQyLdwh1cc9nFNhbsvEaPAJ7mXYZhRUcaTd4hnKcJegSwLVzM5sNNxYS3v8EnPSEHdFFcZz",
  "key20": "hBY65AZ6rExveaDK6n5ttWtjL2t8Gfr7uEFuSJh4gaJoT8YKqVujeiZetu4J4nxCqqEZhKi1v5VgWU2dkE4cgNx",
  "key21": "3tYo3chfCc6EB8sUqWt7t4vdU2n1JrmE9gYxqo6PbEvLQneRjRCDHp4PWQ3aWzZB8VoorQQJfL6989g8pe35TEbH",
  "key22": "PGK6ZTYkgGg3XzyP6tybaKWoNSkjCgPvWJ2x7BqZYmkfQzvjsFzZGFyfyjKQvaFCCfJ9kASzS3P5PvrzKDpqqFD",
  "key23": "3BgwEw9AANhEbLh6G2XtLHkAcCEzmDbheiUvf9axfoQShBj3S33ttyBkNdFyLQWaD5PrSeVvkof6FEm6JzVmoqrQ",
  "key24": "4RzTx8JPVyLdn8QjLpkiCi8qSW57HMSThcsKxyo5X4RWWSBwFseGapeRsj39kaJHktrSCFbvzpQo5grHVmJsEq6E",
  "key25": "2um9mcwVrZyXVGurjYDQqHBEPyvj6Eii1ct3vZgBfc7ZHfT1FeMDN6kS7ztT9VBZbkUvsVpRVYt7WtHcaZhh1ssB",
  "key26": "5pp8TrGuwMW3bPpgbe2xM6aws9PTdNwNjr9mkzGskp8qsUin8SwVsb86JyUZwXf2UKe3cmqftYeLjat6FtBNzda5",
  "key27": "ra8qJraQ1aBK9UDYYyb3V2NcwejnbshniLD2KWu8XTP6m4iW586kUAoadGBq9Zg9ezD55s3QUyoJXV8MqeywyQa",
  "key28": "37NqRF8K9ZsXGGPXojXPXXv777enjEmRZM6Cv517JHWbdoJuEmaNigbbXDivQiWJxYKnhRT6y64i4UkVn12hsKi8",
  "key29": "4G4k4c5yT1LxRrCWNfspovZKzLsXeQW1unAxEr82TC2Z9eu7aHiU16PY5T5cwiJ3U6UkFRBL22DsaHP4tJ47aPTm",
  "key30": "eYfMpkeiWHTtuVAPwh8EhYyfeYyXpydeNqKd6eK5hUweKnzpdouBomvmwEcfxsAHkGRw1NmiuWtKvTXgtUVBcxa",
  "key31": "5FBby58uuLYwyzk1YK2TnZU43dnPqARknbYSsJjUimp5jpLsYPf387qbgDRBt5ufiM6WcUvEJmNAopLxCYt4woMQ",
  "key32": "2fFujtmoz54Z22Eoqg2PfLdmZwgBmHgS2AcsP1445Mo84QWigkAKc3m7TnLUTrUUfFJo8QjkuXJqU9iJtVcb17Vj",
  "key33": "2yUSChQGmef4YeMoUoTKkyy2nviRcYkL2JiQ7WrCPyo66YHawGsUi1hMQw3h14QUpdwH9tzAmvd4q7zstQPgB8ad",
  "key34": "2fD5bL3ik73ZMdH43C1Qg1EGy41VHZob4yEECf377oWr71K3mkb3AJPVzb9wdxfZRtw1kBXDhPMWPudGMsxBwEcY",
  "key35": "BBG4XoPpeTQLWU4Yd3iuHUWpFYqyh5GAoByRDPnZ4E6PBkPwGCHJnSqL1L3sU8GKpjPVVGFAzX9RvhpvtrEHy7d",
  "key36": "5XuyVNMY5taZpTN7itcAEJMeBTqSvEugf8bXKCWw1HYQjKZudspmEE4Co9JPrYymQPfnSBaRqJyr7zxkb3doBsUZ",
  "key37": "4wXAsnsjTj4RwRP2WRk7sLuujjF7xKnc3Wya7wPRSCUR4Afu1qVnVj7reXgvyskHwXbJhgYvxAyVRUHA8dGbcM2m",
  "key38": "5X5Pp4HGArssFRnDGUpCJtX5KfTrTwwQeVpAGZS8uURZzQjSL9tJ15yMGgXQqV8aCcyG4bYAiQKiQrCpcF5Apob8",
  "key39": "iBxygbNERUwfpZZwHD4LETAyGibKfFbt2vEhj3BsYp3spW8vdsHo1AqAnfKDSK32Yei7p5Qh2VWcENVKGCyafg2"
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
