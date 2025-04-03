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
    "58mjkLNKNrcnAPTt1nJpjhYjsfVduYU2oYhP2wNgKSedjY9FTuZKWQ1mYjYDbHocqRf1VM8YtaGsnCTpyrQSLsWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f7z1orcKK8qc3aq1FU5q8NgqLYaQQpTZzNStSWb1jsNHMYTsDZm6s5CnMfq5R1FBSgSt1AQaetFaj5GVeRbiXLw",
  "key1": "5MfmcTDmUkCiP4G4PiLg1C2G6AY6LNXL5iaYk31DT9h3ARfV3Ckzqa3Q3hwsGqtdGpnnpz6FQYsSPNCFrhpofXVB",
  "key2": "44QBSzkXVS7g8wqh13cfniHMf3j31DFjehKKVBFHYX51yEZZsj9SQjpJsoNVbdtj61k1FT2zGnSaVu68HFGK5hJ",
  "key3": "2y5cHMUgzgR5gezHnLXqYK3ntF9QB9KPuJWEtqPoCXQmYDMtgobzWgB4vkrN8ci7j5vUVGC5gZHoYXozmAhbq7iX",
  "key4": "3y9ma9WMyjVAqFzuftLpGRR3LcbTpDz7TQCCx5TEJGsZn9gXcVG2PnHpmbHBCc3p9TbYCeVMHjVpGv8HZfjQsEw7",
  "key5": "5fFPBr81mYUb68CJrtqNPefG1wAhChKQgSTPnyLJgogMBooiwvpvGabNXbMs2HoG3tMENbqyEKfSQeJroFceB5ze",
  "key6": "t92CjyHgJyogsxMaVWVNdhkH1YPrXd1Hg8U2MdJUwA9Li9ga6feSubWzVjq7M6LHhS9SpajyzbzXY5eaDtgGBut",
  "key7": "4eL9fkN2BEcXwHjuS5pWiTFdqqtzT12hsNQkSPkLHq65cvdoZ1KszHrmry3knYxTVa3pH12Ksr3HV515aYfhAPmN",
  "key8": "4KArE3JYgZpkzH6ruhk6iEffhhWPcWnWUocERcs5JPh9Xz8gbr58ZvVswMtS2jxsj4QBKzfgf8YS19vHRBok8ybV",
  "key9": "3GV7S7tfrmSWvCKU58Xqvcin1Emo98AcgNJ925P3iRwyMhYbcGNVuM2heFC6igGfs3FFo53Q6hKA6bsWD418ZedY",
  "key10": "23PKrJGct1sbKeM4tAEYLdRsbBTKGDxGDVCCXjV8dFJNZBcvc6metL3o1hejvxkakbwTvKUgWTFr6YePTVX28YcL",
  "key11": "21zKEj3J9L7BjA2BT79zrS4JuFf6vQdA879k7dYyWQJmEZE6JvSQmt6YeVRuUgRh6ceUMyNao5vYXV1Nb7rksPAd",
  "key12": "2VGzG4fdiant8fE6HMe6wxqXmRG5SV4314Hhkz1617zrXg2Dyc8Lyfi59tWLq89wm3AncP4jExwtP8phDL9qbbjp",
  "key13": "4zLCQF2UtYz6pBtW2sTLeE3nGCuqnSM79hYtWgvrAqiibxPmCE3pQs5nQuU4CGB5Mz2q2cvQXqehVZ8fdfWQVB4A",
  "key14": "5VEGzWF7g3WCg8DS7jXs9W9p1yzMia7Chmvu2mDAB1DEEqqJtbg2JbqN6JpDP9UPiBgZR9gNkTBwBaxUJqq2kz4a",
  "key15": "3BUx2sTz8tHJn6ws9SFQqFWvZFAzuD2WM4wRxJMscKc7nViyxPriW9YU56k67PUyquZQpXKJHbstMYs6pj39b3Jf",
  "key16": "5QQXrYzLown7qUvZEt8i6GuQHnv8FmHHzmG8QLQL3pPrdd7s777ofc7opZ1uW8GzM8WFLptRU9viYw5QDAnvUP2f",
  "key17": "4GBeYzfASDGsu8jZb7w21VMHzJqfM8eMR7188ddFDp55VSpHtwyiAzanxNFJWWFJ7bJsUbummEHmKsMs5NYST2Nx",
  "key18": "45eNLQQyDcj68TvnyhgoLYyT6UeNt49nzPyRydbnuNZfqF3CeKuHu8wnpGVyuPQ9GEWe6LmWUpK1wU3sohkikVk5",
  "key19": "36VmFcvYah5CwnYoSatzpPgEJqchDfakMV34NCRhSUTxUTRKYeCfveBnQhmkr9qFqDZWr15YMuWQLmsp3hVqra68",
  "key20": "5Ahbdr6VkEFeiFiEMY4FFnYJ48DTtXPTv4xzbNRiLvmvCAtjP47upAZr5VpBaKffHmocgrYgnSqtn6tSNVMTx2i3",
  "key21": "ByvqNgBVKcQ4fh6LwvFTs7JU9aeSrBmVneDPwRU4txVwfuTTF3YkuaWj39ncwJU44b7bR7ozMYgMefEjkFtPvT8",
  "key22": "2Sm5eGkuDBX6zbD8gAHXEj5MZiFYn1UaZ8yt6BFfe3XdwfazbV95VSxbR879hpamDwaBsQ8TjstafpipD1iUFgSj",
  "key23": "2Uggix24AeJQ38pEyFUb1zAFpCpytsHZoFAsUWrWJ2RbAPQ9bwKXN8qqevuhXx7NPeiMCnTS1DdCELL1zsmzhysW",
  "key24": "2QyDtYzyXdcngPrR2RsNZr8zhjdwFGLGpGzHDwfc1k146mbT4Y93TrCUceUUxsighkvswXvzbpmeo3kZwnnEdXoL",
  "key25": "64HaLQa2jEpcvDiH3r1JPesmrnYW4EpCA8pPYkHcCZyrxHVGkHcLVMf119qUkjamSYM37h9S4unL12UJt8amXDjV",
  "key26": "3bYabPaS6XfoCb9skrvw1K29ku2aqVVPZgzS9X87RnzyHSs9vBz5K5eViFw5CznLqJWsjtyynH9MeFN62iUhLSHS",
  "key27": "4pr3ZLiP7mQNeNtTSdstyS5WJWCTcFjPV3jWQ7PXK34hDXrv2WTQKNnyiBujymdi85pyNCvqGa3aGadnmF8iWFmD",
  "key28": "36vZPuDu83MQkB3tvuC9X9sofdR4JuUsaY5vfREuieqN6csvXfB6N1rEGmCb5PmKYks2SHVLMLgTsGj2jsUaHc1s",
  "key29": "28gzCX8o9TourmnEzTmCE6ixbAYMkMwkbRb48ioanwWDaCQ3j9vuQNjDcNiV6uAA3CWdvQp4dynb7eGKRZvxZ1XQ",
  "key30": "3V87mcufZiVNY9e6sgLKohDhXyqsjF3LgDbkhk94bQg7SHvDyZVkpGY3ukqFqdW2iQTYLE7XyaXx3SJ5wgqrxeqr",
  "key31": "44onDyaZduv7d59inCki9i7SqR1sZ3nx871hcpVgQg7kNmtA3EzEeTV5yC3E2SaqmoNKuqxMQoBFEeBsiErCfXiJ",
  "key32": "5d5z4SmrjbJbzNFNf8F3utJao3gL6rWTUBEgixKKadc1uH7DiqcVxPqFUHjNQvuYFvujKJyQ9gYJbo1viuWyGJ6f"
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
