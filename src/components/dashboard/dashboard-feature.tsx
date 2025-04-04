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
    "4THSmPR6afmaGaxKSm4GQfeztqaxV9ra6KmZcf9Ld9DNH2C4iTq9c2VXRT6jbkW7Bzb4DiGW8RB9ZCFqD4FZC2Mv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cnMa3DGzFBgaoLXXpypiMQpZfYE1n5qakp4S9SF8Rwv3hzKeZZJ6W6w7yqSAdpFuBuUPSbW3aXmqiDtv7PoeBLa",
  "key1": "55SxqmPQMcdEavJp2XmoD9mQGnbe3n2z7aJHmgVtXivH6mtNztbchHZ7ZMaqMJqfsABS11mtnMA7Zq4kKe5PS1uz",
  "key2": "5Edbo29iwqM7vUaEx9UnPhbnB1Qr7EHoAWjpP2Sjmuj2z39GHrenynkBtr3BwDvgNPWaxvagGwgmqSnbF3oKQMmZ",
  "key3": "3AagcQP4xEQvS8VzWijaVgquXiNkyunNQc4ZzvU5pn34dkbdZx6g7yw31MQd5xJGqTDCXetgwLpLxuzZYexewRXA",
  "key4": "5LwK6RMbWDWCnr4ha5TxEThLCqgHR9k1b95c9iBWJwBRGZiSoduh4DnBm4JMKv3QzhW6LLmw4832Vw4nUc4ozQku",
  "key5": "3M6NNrFxQ4UegAmgELKsXPUVjK7mTHhKzZfm8jk9ioCAfSYnHRQxyxHarh72adtbzxspRLkCo6NTfBESWtHJhkqw",
  "key6": "4fM3urS2Qc8Kniwr9LddkkwAWEey4m7tyAQEcPk6AiCpMYBztnQMDSuM2RsAqikQCBbgS75GGSfdsDFNvnT1yEV6",
  "key7": "3dCgmRXtMBvJdyk2jZaSZggmf9ejCTjfgRkFea8nhwVKmxChtfGX3W4wXfeEbfB4dL8RNHTGxTpEEbim2hHUAaNu",
  "key8": "2B8VAY32fqk1bfbZ7V8wSPF1eN6pyqfZiUHcuhKBTb94CDTNHtmXPmnQmsrbyZhQYiPFx3ZwNmmPRUuLVKaGjzPx",
  "key9": "2BnaD4etYbmj7Ty5QfDq4DbRJqLBiv1Qqb2a1shgEgqRGFEx3H6UVHZFpG8Js5C3fE683SaQXLc85dsEwRdHCo7n",
  "key10": "Bjg2E2vCBcmKKQhQfB75tUw7RF2ZqbDvCYLf3tY3nv4i5UhjKqsCr3W9rHv4NyP8UTD8aK1h7nEqoaNLyyueNcf",
  "key11": "3zHaX4XiRKn84yNFdGwrLdLyjg8CCm7wuebwaECb4ij68btgcC25a6ETbVCBtrMnFPLLgjvw6Rp89Frwkw5hdE8T",
  "key12": "5mALMRW9g1JZbdbjCJ3S9ky27hymCupJsA6YAzScuTaQDG2XWLGwtZWUrusxQu4rMgrdxX5Z5jX63RkGwX4Y9jY1",
  "key13": "5xe2R6WXtcxUY1MGSCdBipJqx9PjkzUHnWQczEiwn5KmMnHScJ4Cqqzw5owD793qFwm8WjdNnTDnpRrQii2fToAb",
  "key14": "zFBMVYDA8D1sseKGD1Mp3rSC9Ptgo755bV4MXDZKGtPHVLdfYaM2XZwxUT1jPtVBAZRSXSYG5M4poL8iRcckvEz",
  "key15": "t8e9snCDrVaXTkYMh9sSbZtNbuu6HxxB4f3vQn27JMJDpt5tMr9xE5SQNXLq9LDdc1v28xvWZrBvcpw8F8DGxeL",
  "key16": "4LfArsKcaEGGSiavjXwepqNWuESi4evFEmSp6fSJmdFz1a6A8kWXQFLibtXRtUTSnHN7QYNyR52BtWmjKK3CfM1a",
  "key17": "ZpAmeyyjrD5FWXkpnHb58HrC2EUdwn8PCe7wBZtaL8C3XGZuM4joakZ6Qk671vH2YQkmoP75Q58MdwiTcvhQBaU",
  "key18": "TqepzrK5wvcQnP65zFMQN5rJBDUSK4twm48dm32pubmxvPjdj18D7PKiSPu59k15WDqYkKMP9GCBjEjcga3vanM",
  "key19": "3U1JfY3uTW6fqNZgSPNA4JLkTf48goFYyrWKJkHJT1yVLaWS4j7bC989FqvSLXprjZkR773k9xod5emFtj1P3FWN",
  "key20": "yLGjZF7GEXHr7noEZci7EhgTHBV2FR6HgHcqaVzGLfPVn7Mwpo7MEnzZrYRw8Bajtb1kmtHTHnqRXhWhgoDDQSA",
  "key21": "2i78svYMi28SdtPKp1UjieecFcP5r2kWfzmb9H7NB58YLsz1wCLqqQ2ySHCkfPkc1DgfMKqWiJdp8JyuJcUQXjch",
  "key22": "5DUZDPTSqM7nJmmNQxLXVz32E8pwhDW8AWiPp6UVhC8iACwi4Puc5aAr6XztzNxod1sJZazh4JTeNypf1SNJNVXe",
  "key23": "2DVR3EiqdYEHtfnEVhg2MovJjxXorTPBzhq88NqK1jyUajhY27e88ifGQFpGGpEWGZoS68MWNP5kdbT9ZazMJd56",
  "key24": "2U9RjeBku3aFi73CtZHTQvRUt186RKvmYmfN5hUfNH3GqrQxfMfVFeubNkWNPireToA6RfMKZpYh8cBdE5iPwNFk",
  "key25": "2NeSDYKoeAjsaCAsfemrMW8ZhxoYEZD3qXE8APfN2jxUVPq5YFi5GcqPUBKKoCfR3KwY8Tyfm2TnxKCwxD4vhFK1",
  "key26": "54BNqUcDyD3TwAzpbnRJM66p3d2pVubvsp8yBrKiyVFvKQNCf8dvhZDseowkT9y61XqztQfzvLuYb958hyxngGGD",
  "key27": "3GDGbCedDVWVxANR3rR3GmEt2ZSpMLatZ13tgqKEzLH7wHJUj9biFQmEsDwKpbXUeeY5SUbUaaXaznTscdZWWuiM",
  "key28": "2NxGHLzeueq27Sh61jmsqBA2Bca3RC4Ugh5Jdj5e9PmWtS3JpsCEujEeNqAqivoEMBdHvrns3ZvyTwhRErHgaduc"
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
