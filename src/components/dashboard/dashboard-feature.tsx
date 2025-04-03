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
    "2n9ikSpQXGqhuhfe7EMNWyCXcuG6PNpJUgiwC9Ezg8Gctj6Tk19jUE5JLtrGiV4LJ64q5xBvpmJKtxhcFpLbgN5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54cWyDcqckw5hUzL98UqidPhieNiAMF2eXU6eVfmu1kpaCxm14EVSPFbcChY2i7NKDtGbNzBYRughGK76eEuwden",
  "key1": "441mh8XzczbzarUz3M6D5Wy8ooAfFsGLWWJCQg2YAjmFo4fQrFxyCxRAPmihdwX4hb1to2Jpv2q4gm8RLhTQ7y2U",
  "key2": "5LBN14kHuvC9DzHTgqbJuFdcm5967QJqna7ftrByq6W1zaR9Hyu43Goi5fbRpuHiTD59oauD5u8mjd9VhxDsNZ4g",
  "key3": "3yvfJ6krcKBFj9ToULcMArbUF8Xaho1G8nKDRg8uUp1mzYGm9Smna7dRhn8sfobSwd7qPnzfcUcu3wCGtauvfe2Q",
  "key4": "3NtbRq2gisNhiPkuSi4GknreXzNWokfDHVwggCt64nFXN3dwpoEfSU85HcDbwRsFghrVaWJpQuSD7hjCXpoStwof",
  "key5": "4j3dqULrB9zSUUqQ3i4fLWQKSaE8uak55HECxK4exuBjkdxRNEADxBs3jjhubCpFNnuYSEy3EJ9PFeJRVeik65gz",
  "key6": "41RmGtW6hy12cGQzRhZNnES84Qpgjd15airFjid84P8ag4Bg38xFYnnDLpnf3Luzr3W9t5JVq9B3SAkjHVsTxEQ9",
  "key7": "3bhbMjTPCfTbno7gPvpPTgwbXf7n2yxA62zaaWtoh62ZsAC7oU1pZcJY7KoZG4tD9ghGc33E2kWNSMgt1Rdba9N",
  "key8": "1pae1bcGJ152Fysf4B66b1evtNnc48M7kThhLgQpjLUTMSENJxpGpwkdd9eVQzKmEMoB7WC6BqarNBnJ2G9cBUp",
  "key9": "m9Fw6K7GfgzMjM4Dx5Nyd5VXaAhsqdxCnb9aiPvke5jmU5TSBTwGsepb5yeQG2ugZyQFrLU7syA4hHnmvJkEy89",
  "key10": "2RTz81Mu26rAmbSLLWd9m6p5QrGRgRw43PL2h8cwfvWn3Yw8RUgEsGhsUqqNs9L5WPVPA3cmGGCmksGkRyaDp9Nd",
  "key11": "51g4hodFPikvDkq8XKMLkWRUfQ7gZ7GSw45DSiuTgrM3QQWCnFtkio6FpR65ta6zmJkP1WEAYDveAKzJY6dYQia5",
  "key12": "3qFMHgcJGUFeDm3J5iQnKoBQCfJM3y4LmeHmCGC4djB5UAMb1QmitQXUn8QyeE9WzpJTBkgqfCCwAToX6Py8EzTb",
  "key13": "f5HEZvdJvTdGALn3sBNY3Gz8tAGf3AYfi6Z4hwyDzjrXdsp4PkLkoFgobp2gjg576aRMQZdPgCFHt1g5rABdtfv",
  "key14": "n87xDwat3B3KetnC5yu58Nheeoq6siDSp3wQVJSiV1vCkuzG96ugJrk1KryJbGHzv2piNb5Dvq6JohkhbH5oCYj",
  "key15": "4CczyDdyhDRfghLNcooAa8TRqKhD7mc1eSbHtQ6zqCTDCqeRj8NRE2xxZntTuxUVQKZxryNf5VrebCbjc8UAC58x",
  "key16": "2jtgmVzL5QFiWyW1iijLokN5HFskRGZfZmWZzgzygWad1S74WrJBVDLmf4HHt7ebZvEBMVxVw2MQ7xKgexNX8sfz",
  "key17": "5iiSUCTC9bcxTLtNLrYD3CT8iAxREqEF6EAowhsL6y1hrovejX87UYHJKcWvE73nEmsdueB1Ryxe1SsAM5XPUJk",
  "key18": "2TUNqd48eZWYmkjLtorvCHMMJggGzeUYdTRgWgNRZk2yoQ9vfUT8sgUHitLxs5vBvyWYRukQYPvwtXCzc2vrXn7A",
  "key19": "5VtQU7TBEcouweRXWoDpFbLWAFLDUNMiN1J2PmUkArGBbp7gpnNTqH6vf25qonFtTgV8nsc5qnSc2V8q7TxTNYB7",
  "key20": "5ysBnEfr8f2WChuPqTPQorCQs553vhoT7JLTi8BED7qJdxhkVTNppkxMJcNnCHM6ATYiVf7v6F7vgdQ2YvsLktq",
  "key21": "4ku4YngvfYQqm4DwtpPizhr6tbcTWV2KE2VUusfriZiyncVr7EUZYsHVfTPwRaJvYZ8H5d3mGu1YvRYzFvBbEoWN",
  "key22": "4XJgNNKPFetCNYUuZKUYjsPGMhB9PaGKHJb3eadyqAyVZrWbqHiP5nSQrDU6P4hFj8WX3V591Gb3xEpXZSzcqjDY",
  "key23": "2aBz8ZEXYoxD2CUpKvSd2x27qSgrHZpCYQFKJ8phXoBFifwKq9Gu8QryZ3kQfWEe7bXEF3EM8xbJ3t4cqbth1Fce",
  "key24": "4qgpgm8BqkexWvrg4JfZFg2QuxLpiJG4N9jm5WvS6iJhajevWsX6W3ayn3BAfyk3FzjUSgtuJqHPwZt4eX3FxFUU",
  "key25": "2ixN54n4UKYtgXpcQnnEn3hK74CJdcgPnFgn8cDHstRRxojM5MXLgFtDXAu83pjyJQS8jhjpG5vHbpvRuGrL1Xqr",
  "key26": "4PmQs6RXkR1Aq2BkFupVcSojJM5E9TnuQpXPoghKs3Sv2hMXLYimyWnEnt1MLR41R6tVX7qt2wbQfLMJfvcFtdwu",
  "key27": "2v4eLedHM7ZDGGRdVoz3vjaspss85o75FjbVzcTytph3zdhTBnoRnPLuZG4sTg6rJTvusyt8W1EB2trP1KAQDH7v",
  "key28": "3fuHZh5M8na6XtSea8VwVB1tYnfEi7kzLM7ocHDh4DM1LyCmj9fiw65j2p4Wpmu8j1KgF3HK93k64hx6nyY1Fw6s",
  "key29": "8JAgKDRS5hRWUQjHYRKZgqL7kcgmp4rh98WWcagbbC8rkeVhym1Yj9tym8wQtsWQvjCK12xUB6B3WbBKyEn4NFa",
  "key30": "2iZHvo81Q5WPLvTfinMJEK2RWsFmcXVwsZjxKLCXsGu5sFeBMYbg7boDGv84TbKu4qASwYsNgLWp8R4zCWVia28Q",
  "key31": "5sAwHrTRmjdBE8S4rDsjKckc1R8DtW9QSkiQoN3ADHHzMTMkJVZQs79iFjMGPxJkEPAKF4tfGZTSqpVE8axsdnDA",
  "key32": "2PFgaHAthsFBrpUME2dApCosbG7pkcJgpo2BLB5JyWRuwuDa2upAH7Qii1YfnV8vmtoHAnUHYrRxZ5F7VjP47di2",
  "key33": "4jrguAW6scGccSZfRaY6sR11CtHJi8k4gLpGBpRPVxKW91DMTpicxoPUR4ZtFiSLpY6JNFspoRrJjJ1P3zJdxQV4",
  "key34": "2JxE48jpN7FivCdoqt22Dka3mezPKyggR3rRfbaWZR9z4GwBAA9CtHFFHcK3wmiw32oTm1mEJRWL1DBPLemD55Yg",
  "key35": "2o6x7GzvKMqwFVbVDQPB4EMaub42MJ2evtWooc9SieLLJSnLgArif2JjX4Tzw8dJx4FdYSNc6NgVWminLL2KY4U6",
  "key36": "3PfaWm9CX9SFRG4HiJGxfqAiscXNjiBeiTSGJz6stdFtHsEEkNWC6byFG89irX7mnT2JntnjYgH3JStQAt86AZLS",
  "key37": "2yY7cq2dozPBocHwYnKUMjrQcNH6sPzDxqdcuf7fLrMnnKMEJBb7D1htRRZqYjobKfa1eMLpMDWXmcETcKwhM48j",
  "key38": "2sQyB8cntV9f2NJ1owGWDnSsBHBxWdQbBRQ7Ee3mEue3j7xKuHtyvv7k8uBQLvUfhnxhpqfM11Vc9PhSSdxDone"
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
