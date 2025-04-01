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
    "4vNEvKWPEzBCse5H9t7rd6zeXTEhBQK6RZ3CKu4RpthqumkZBVJGkqhpGg6jn4hzJWyXjia8vryCBLdSTnnmCT2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sYKbqMDGEp6QCXRT5eUHLcg786iTNNX3dez9jfMWQ4jcrZkRxwTNcZVt13T1ZRENwEh1Nw3Z9gEHyC8x9n9fDub",
  "key1": "AG3M81si1Ve7j2mekvpfsqEbUFMGi93v7m4LkLGjaByuKbb81BXSyxcMn5qW3kWYiQZDtFcXFLnFUMWjfV9k8zV",
  "key2": "4mX6D6HgrWGwGdZUjTQSqrASuxtMi3TpFNz5ZFiLoweAths7H8RZZsz23YjWU7YojCfQn4HRLHMhSMYWCFX5QhSF",
  "key3": "22r7xwuxrPtB8T2Abeo9GC84WNmZjYrwHFeQiupkbwLBgf17WdWeFD5eQhUq15f5qL9ahhuU8sjGgtEjDCUX2QuT",
  "key4": "5XWh2otKxAEXMUG4gnPevdQKRDG9SHLGK8L9GNkUNaHUm7idN7efqSkadNcdTGwCsHSi68o6H3ekVTaM6afyuTZm",
  "key5": "5haCUbyaWQLDYfC8ZqusrdezKKJxsWYQNkVp9VLUN9bV7Dkw44kd63JxLUC9DUouNF9SrVDssKPC4C298ya3Vhy8",
  "key6": "2sHprj8dZgg17xwbertN7oGSmUnTvHEcNUdkm8yK3Bb5WU4JYbU1LNPYfjPaSw7AmHVwm84zjj98AznGMypMjocj",
  "key7": "442PLtMfe7K5CwbJisZFtic1QLrcvcWS2pvrcHMtHwUpXNiPwbz9MwJ8Y9Rueod8Bdv6TWC6NhfVjZB3zwfBgUgs",
  "key8": "5LYanf94JcQ77L5EJpjbRo9Mc6to9V1tebfNZLdRbWGrar9iLQqGcs8zoGnamPNHL2EZE5mhHU6uV9X3VHz2tVPq",
  "key9": "47NyDeXmbQW96dt6FFGgNC6rrp7sWDhQwCR9UWzsgecQbAPZbFPvAq8Uy6cKsQhteNsdrEhtsAKEKDDQrdWKhtCN",
  "key10": "iCeYt6xHEzCMZchVYngNjnQWFiNpNeNPn1SZiMtWGBrkdW33mPFX96iFuEFiYPvKBsAfE1RDoP1vi8QjNyuZTQL",
  "key11": "5CuiEVfYpTN8NC2YMQiYP9PeLxXEdqMm6rXEwgQQv9rKPD57f58SBqTawFC7xayQ3CKaZrUFzF8hyxQaiyVaR6Qa",
  "key12": "4vvo5sw3fsHEC9f82jY9uwsh7xJTYjRJmv53s57b5t4ii7b4qtbcTUFWeBdXL7wgNu1KNQpaYuHpAuFyveBR3RSo",
  "key13": "5siGrmT6DHuq74b1nNsiy1MR1ak7wecgxAHVHeL81hz5NUnJfEp7grzGGGxU6LgfFfJucMrkU4aovSu7t5zBtE7Z",
  "key14": "2gGBY4Abs4JYSEam3SWW68HuTLgommCLuWeUXbiHqfdxU1HmZmYbXrpadBmvxDovDWDocitepgLVBCY4d7BjyZTW",
  "key15": "YorvuddsYhchZQfu5kdJHrN9FTMJyrkqBUKGiRxaeKPL2yK3QsjYG77Cw8uLcb7bkBTARxHn1TDweudYWj9bRXj",
  "key16": "5y3DE7YvMvmNKLGgzzBpKZN2GpG4pddBbVraZtNaCmGHSZrygpGNMjoba5V54KX38j9Vvbs8SywA3uBkdXMkkSh",
  "key17": "5hKBHjLTz7geLjnFntJx8yjMMEYq9b8E2fhtwoZAMpKViB21johVsUjSNBHszSKimWVQJycrZsXrox78uLdkWJ4c",
  "key18": "KvbA4sUhiv5QwCHEnqZ89Fd5A25eMtrx9zV9PKSQa41otB1HwjkmHKjMQmNNDMcFJNbid5oY9Wuu4aYWkxzPZq1",
  "key19": "52zXmH1kmCNAhukKN2kryLLEc2hS8uzctF1ioWAxUa14EheWSv5v55thWVyVaXsK9AG3iaL12tMLEsMak537cHw5",
  "key20": "2Ma5R9E4awsE7ydLsQhURQXy2U9gFu8bUN32k5vfrR99eJdMnQefMs5RDZLzUatDSgJmbRjLkNSycVHoP5PA89CK",
  "key21": "3QCDsHGA6gmAPSC4d4kjRKXVPzCTyX1ADGRThNfrqZ7oD4HHi16cf2tCb81MQZwRE1uLxFHKh8uyyCtQExWUFGhc",
  "key22": "3GGbvsRxedVWXU6hrGgHyGy1j1u4njSVVNAcEPimUMa6cySxzoJfEecXiWzsFt2XgUFPRgrMJxdh9k4HYnprSNXb",
  "key23": "39w73mHJmMsNdx5bWgzU8bdzL7Q7ZrDwuZ3CpaZWKTRsYUZPPUxipC4e6agPworz7LuSQQWbQstMaR8qUyoGijPP",
  "key24": "5NU5bt2ojGN2buDSVgNH4SijQhT8TKQimKpXFKyS1JzezWdiPrV9GmKww2djdzW9vbADbudAr1RzseqtPDpJ1q5u",
  "key25": "3uEAYoihMbBtJFidenTQ1hEtLPEC5n7jgELGUaCdGrzxmejHhAdp8kEUiNNUETtqbM21v2YVwkX67VKsooC8MNQZ",
  "key26": "5Y95ePxdJDSK9PxYA8d5Aasv4UuFgV27YpRUTUBkVsvg6m4p3scnmckCVPxWuN58RnULt4MRstiqJHnaGkeSHVfz",
  "key27": "55tvD1TQonxq4o7WEAyu5Bsh6gaMA7S1vQfGoRhNwFTtW9bFJpo3ZTUPvSgCMQu8hNrbnC5g5JMbwGuCCywNc8cy",
  "key28": "5mv4KauNCc88nmS2vaQsHBr6qneRsgHP1yvcyLXBHZioZnT8s1W3fdNa25ZLKL5bx1mavKaFfZ4AU37XtcNMbrtn"
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
