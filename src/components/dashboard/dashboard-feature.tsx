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
    "2TXtpN1faMVdzyTmXh2ALpYFp7aWSxSNJyeqPeUzfK1wTKDotGF1vmoMqm24svR9tqZavAoi7K8PsQE4HjnZvaYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wKt13jnMsAEHFrkZcwq94NMkqSR2AaLmAquXywqyggYuJrBXCLS9LrrVuU2MWkqMZfxXf1rT6TnApBfFtVDwvip",
  "key1": "FrcJJqh3e1Zo7yfPBEkG8kX4VGAKoXM1kcw7PdW34Av6Gyn9kjREAoUrytjSywVfsmRTHjmxx7atpfzssD1PEs2",
  "key2": "37j7DjAX6BXPKFQVojiGFoBwo5KCyswFj5zNW5G2apYCK6TzK3JFthzWH9fBADtW639uTeY2uACvchSfLCAnPgzt",
  "key3": "5aqquri5Syo9F9xyKrNash9o2i5RL7wAZS98q9pu1zqbm2monS9uTpAqwKzMrFEYQzxEi43JTADwHWRUHdmMZMoj",
  "key4": "5Uotvp1N9iC7M8Vc15eSzKMC69g7cSgcr9XpBPrscyqQw9ZMQHr1z2E2dnbfc2zwDaSVWUSxHbArxPKb8gMWwVMw",
  "key5": "5PJJMs8N2bsKC14vSxovwEmt1Ea6jzeMxge6rnYyFWNQMdBeDWen5PMoLgLBTLTcGAMJ8FgtSzHQQwh21oMEqqp1",
  "key6": "29uh9ewBP2h7Kcmsow4cfWcPUuGLC3miXRtvaLQVmoVwWfNHq3HM6sCASR5vNEZdP6Ax8n5TTtT9RyAMT1CyHk31",
  "key7": "4hvwdZ1tr3JGPTXA5A2QyviPU86FN7pDFFdsg9NEjF8K2uKGbQQKVY6VW3ngEZqod44KFNavEnDN2N547SN8gdaB",
  "key8": "2V9hr211JhgPaB8doCXXqrHw7BXDSC4AzszNq1ozXs3nx1QZBmW44vSnAuq3swAT2hz1ooAoDfzuNPERiVJQ7UFY",
  "key9": "42P2RFq9Q9DUeW49jCHzRyR1QUFpACc51EemLUhxfkQh4SE3j3dajDH9o1cWMEDDPRnNeawy6a29fBnhAexywBSY",
  "key10": "V3S5YWy3DEUmM7CJptRPgYZieQjciSxcos66j7UuiDDfo2VBCYzf2qATSWSymsHMNJQccNqNhyNKM53PBnyowpw",
  "key11": "2hvoD3GGdpT3BTdkQfqAQhZRxdw89hRfoCCUuKMVF8bczR66ngRoN1X5rNFCRwVqRSJ7L8rHG6ZBYJyU1sJasmQj",
  "key12": "2HSLSN14ocQCifdyeHiDCAFZfcCYGHoTqQB4DTP5WjvuWnAo2UyPyD6B3VKPq3gubgszSjLyJmiUb8WxG8VjbzKv",
  "key13": "5NGvYzsVYZ5B2BitKk1P7GfomzTXKj2eFETEFxRfeJFUeiLnknnCtXQUuJBNXfnnuLfcQmBWd9wDqnSqsyUvzLQK",
  "key14": "4FYwq2NcNNTfXoYXWRwNKzQuPfph1haGMp5aNDX1ydFDxVCxEHGmZtUrwbF4DQFwHsJjkGUeuDmoKxFx42zRDDZ1",
  "key15": "4NZEDazxsoDGPeHFiexhNQ61EwTopxr3seRyLs2t3AUU9HKjDYz6YWyt4TS4yYrk7u5PmffVS8ALJyHT7we4b4BG",
  "key16": "2WH5N4pBkMV94XAdv6eK6uDnKtiB3vXZmgqLvSAHaRhgyQC8noxZvSMkcdZimMS162jdeoV6mzbSrYoXLSW34o7D",
  "key17": "3SWULMbwBd8XAZZ6W5Vsw3BiotdGKt1zwpawh58s1UAUtxjZzLqgFkkrV82J3AENv4YfEZQ4LnYrvM3kzd5JsAVv",
  "key18": "CU9EFepNWjMqXyuKbGmAkXsgmseLBYdWnpPZ8PCDmUMW71nDxMbMUWbYU8fFmxVMjPLkTRUsRiWDoHpTQK9mm7W",
  "key19": "2dreSTjM2uVyYBNxv3rSyhQCoMzbQGgCUmZ6on5nMikbSTbxQTzv8uvEVvv37dA767656CcKkr3Xs9YA6fyB6yHv",
  "key20": "5rb9PispxujvVEksWErowkr6PYbSdzZBXyufCzuu5K3U6t75smdiXw9NZPfzb2RA8P2REPLRTL5YTNbFpQ8ix9Bs",
  "key21": "2ZpHezHeCdUKP82WQfVpRT6Bi3nxrkw1TA4T2wthEJpQWjeV9SJiiT9JVgsBWJAvtgpqUH6jq3XKUMNnQgxasp5y",
  "key22": "3xrQGDgjvuURKpzkxnkWWF9Xm2qJ8JbRwz7H6Hx6RJw8wbGE2CGf3CjuWbXvFR9MS1ug8Pu1NNiBPnYie6e6cVa1",
  "key23": "2564i6JMiudobSE5FA7JY8cLHZBRX4NhB2FpdYauMwAfEH6nw2UkEPpMcLQ2Zyj9V82TXmcxufc2dYJtPN1SJWJ5",
  "key24": "2eBZ95vRhjSYy6a5jkQ7bx62cFdH2o1u8Gf6BDGUdAWwsEcxTBxWXQZiJUtunD1MJy7j1pc85echzwdDnp5Y4pNv",
  "key25": "4KPMoNM9jZdQwyDfrWW78JDnPL25pvwqwHjNKhhjfcyc99uAFtmK5D55LZ9tpUhHB55i6hc636nRZzJstwdZpYVg",
  "key26": "2S8bnukdHoeBjGaVs5jZYZoR3e3STAH2T6EynW8GSmwenmyLtMpmzpJvjjkaZf5i8ce6YzFhrVxWk3VEooYVkDf1"
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
