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
    "2Ud6CW7He9CsHsTXkg9VYEvY9QMTUS8GR2A2fe7dH87hN833QV2Po7oNjvqTGKzTtdPYwdokjsTn2CFtcdyrSUHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4stkbJ3VEnenHeQ34Gc3ptzDEVXM1cSYLdhCJp6PznV9eUzB8Kt5Bu53WVFKtPxQux47haLUchzEjETj6bSS3Gwv",
  "key1": "3HC5mi4mPhU77yhPmVVmaSwmcgqUzNJLvkE1q7gzeGjmQSdf1CBfNLeauDtzBbAwoMrcfzSJHs3tqwoZ7tgSUWMT",
  "key2": "5Q7grrgojtfATjnzC4t6vfVRUGKwQkFqEphAirpC4pFKUXqdtTnd4RFXQTNUgGE3khVuf4ZyLJr7B7eXjALSb6Rc",
  "key3": "28LQ4yzdHKpgJCvYiphrQnEnKN69zCfNQndEEUtw1qFn4wrygX6FoUBtjNktatyK7z5idHAuzmxWQtgkKNftiToH",
  "key4": "2N2vQyzowj3NQkR5GVUaiw3s5DEcu5EpGads3T1wdf9bH5iwnpdjd1eWpd5ejcME6hZGKA7vMqWTQAMJTWm9C9u3",
  "key5": "rxyBphVcRoTjyjb3V94qvdd2ct1bXx7BQzYABmnajbcqtQWj9bDg5H4Jmiv9YKnt3Vx7zg6rdpHMaDa1ttcH6LG",
  "key6": "3tni3VsCxLfiHjBRwqmKnCDpkBBkHw5VzsbYA5YrnLVMYPd1MHFcu8sL4Ve16AiNgM89Fs8AHi7SSg6ECBEhfBZL",
  "key7": "4VJE1cuKLuaYe3j3zE9ZvvAoJbxHH62UXXAq9auYE9LLgfETWsABgKCfehsQPUHdCj2Dzjm9uatPqZQ9N9Vfq8zW",
  "key8": "2gDVVr9jH1S3aNZPVGhhc4N9rT1iNvD4RJFShzz5GzwwrDxySEZxJk94aaytSxQ9uHvBwrSwUtf7dgyveGChVRHX",
  "key9": "qusyfBesbjoDvxct8d8AKYK2RqSkUtnKFng1tA71HCbfebQ4Nj1jub73rQTn54TTY7EEB29doqi2ToqTnihRjXV",
  "key10": "5pZ8EjkVc6dV9yeLLNCvCiz71KtznyjxZCLEXevE4KUEpuR8yo4BD2i9P22tGUPE3hrtFwD4291Rwqsvr6YLgczK",
  "key11": "4si9MHq8ooLqrR3HgAwfpCC8WfWaHSuzE4aDAAS2JPjv8N2MUpZxUEjegE4EmL54dY7J9cMKFbgSCK279bFHQ5cq",
  "key12": "494fixYBtqQsHAj4poWfpg69JmnHcNKtVCF8saCxcLapp9vCuw6NcXvQJ4ZYSTRMvifaQhr8g4RD7HagRhqe2g7h",
  "key13": "2aanqBMP8s3Tjn3iZZR8Qnf8JYRecRZxsazGtbJnDQ29qDxJofMGxgUai7iFG3ndQSfvDPrraYniMrydHNw7JYLn",
  "key14": "4cR9iGFHENardiFRA7HXECBhjq2ZZ3mVCpKw1bjiDkjLCu9rhv7MoYUvxGp8VB8sniSmTiV8aEomzCcHvSxZZDTT",
  "key15": "59g1G2FjaQf3gC4R1wQqjs6d22xVZ5irDvhWCNU9ypT18edqXSP5iYDt9JnAGsvk94SWVWvuowDbv6y3SyvqjxQt",
  "key16": "xVXmauzKurPsiYB2RNkm2W61iBT1NcLNpuJdFJwo3igvxhRfrza6o1MocAP5a9RpQjNCW1TycqyGcPSDF3VAB29",
  "key17": "5bEhzdgwWCXoSKiu1cQzUbmhTkuSEGdKCWrArENoQopL21Pnost4DaBhYrSBiQyaExX44f79xE4ZYTJ2vRQLYDa4",
  "key18": "62XqisDmSQs9qRHS52nXgbQFBL2e1oj8QsZSqEQXVLGqKJvrTx68d7qUP5WqoTYCWykDTwQCDWMx1BAtq5GtJXbb",
  "key19": "PAisDtg8L7EQUgeRZwiqraK1YgmT9jvcQgaC1RkrPQMLaEEws4Fa5rVkzQwt5dURq3Rpb6P7hoAw4r1cLkqU6qK",
  "key20": "3XBtPcHNidFvgDJSeYCV1WKts4cfnz1nEYhPb54fRaJp6FS62YS61CAwj4FP1NREKruhNvgpjATA1ZZgjuz6uCnP",
  "key21": "7MiegEfaB15UumoM8j6y4bJ91YiSyzZJ3oqiWi2qyMu41ub49SurhWjkfyhgZtzUk8bHvTzPwpBGu2U83Q3Sa8G",
  "key22": "go7bWFk46AU6aQCB2vig3WJZKHh7pDGx3vbzjhxmHkSKnBookxrWugkxfw3HLkXGTw8drtPm8Dfost8M5M7MaWw",
  "key23": "x5uFZzrgGAF6oL6yxEe8LhfidBWt7Mbz8kz6LmiUfjWoVwNK97oHxcZaSeyU1yWUQgQEs877HxCStrQvhPfVpt2",
  "key24": "eSGG53xrXwhe5ep5GmP7xaAiQNgg58J8V79Kj3afw6d6p6xkaihLnRUpxJGyZiEoVmFNXdyfVshgrEQFMwE87Dx"
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
