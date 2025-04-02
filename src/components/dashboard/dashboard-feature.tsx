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
    "4A9beuxAiX8NcfYu8PL421avVEFWjSxhNsWvQuhJ7M7aBJS5scAnfSFBPbX1r6Cgjn6nJL6YDVKH2YJFcBodF8af"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vevBGNPAeiet2eZQLHMsAF4tedJ94TjtTKy7oq5SXoEFKT3A749VPF2RDCbiiEJMfwQxrwVqosKBo2oABymHqLx",
  "key1": "27fizfuXp4EFkgQ7584CrtpUpyzhHbaQGDkKsXvoKrR94VmTLtDVduPGwztCXR5HoBbB3jUF43nJFkcxTzVeZV3C",
  "key2": "5oADhwkEe44uKTD1MvDsusCb63TsJDV74TUW8xa7biFs9bwWCG4ymzVrVq4iEuKrHZ9oHGT182niHzroLW6wKm2L",
  "key3": "QGkLo6kZFk8uGKcnqr9fTp7Bx3yJ7e2vNGoPNHVdgZWWCN36jqE1nLbwjSV47bt4LiYD8GaebDu2TFhesgB2PkN",
  "key4": "5zduT2eJPXPLwDSiBUX6AMf94Y8QQbjhkMgzed72KPMvPwj9oxBrXzrSByBHRP7Ng8sRpcSS79dwhi8A63D5ZZje",
  "key5": "5F61i5EJNDVRGA46xTN26tg4rJikDBrqYFSwrJGoSbxt2CFjtEjjMarYUPnXrsfkSRCrer2x5KR336NyMYSw387S",
  "key6": "2pyu9v9ZPskBBNmp1HiuxLLXw84R5Fz5sN79KCtdTXMG4YjAQCvHq9UbfVKBDnyAaKPqBncEzdPaygKjidPRHELa",
  "key7": "34WT3z359Hxap1XhQUpAEd1Tebs3Pfhu2wq4JBRBhk1UwxFofgTu3xVB3XJ7jxf51Wd6WkooQ4tvY7XLKAJESxjq",
  "key8": "2SnmVPGmE3Mz6tP8ox2do2dfUvF1zPcNKpAWmyxFJkyYpeahS44o8UN3i3aVjMnbFp4H6Kk7ufHJ2sMrnJPtdbN7",
  "key9": "2hbeaWS1c135fEC8NhMBWigBULeRM2a4gj5V7Gd46cqHn2XJXUYPvvHcZougWUpMRmC15TRad2SCvuxSikJDBUr9",
  "key10": "5nMP9vPNXqHzwW9CjYVWuvbHBBbBSoJf1UFnAV6vJkXHL5xNuJnLT5jPKgrJe9jTMyaED6iD4Z3ceZZbTJDEeCU",
  "key11": "5u1QjNWUJsACApGShJt49QxaQUsAk3nKrNiqcsDftZgJYo88Zu2srC1TaccpEkeYccYaFcsA96q1r6kcMuREE5Km",
  "key12": "2F5T4EKvf9s3DsjLvDVjf5aWVQnsAmQq3Nibe9HmH58k5HLGePWDGZYbLD6qFiB4ya8RsCzuYZK9NkFxjRYxQxiG",
  "key13": "5Anz4F7F8YvjywzVEkBhULSSbotGHdi1wcqW9jaFsQyse3FqbrN7LnjYFRHMubJvA3GPXg7Xvvd2s4d4bTg2HEms",
  "key14": "bUvqV8ACeLZi8Q8seBrjdMxP5A4sE1zETVawZcf1V8FLtJ6GZ9MFvagZbdesHT2nxfbHQnxnWoZBhBgLhYx9a8C",
  "key15": "3c5ZNTU6pwAL4pypCX5vX9VbznjtvfNZ8CtmUXXeLEoscSRAYqcoeqQ1dM3PP3vRzbRsNLBLAZJ3QanC25dpTLZQ",
  "key16": "2xxkSzfHw3vZTMYecB7JE2ubrnyUS6avQgfaFBzakFG3VHXcc1JEgbiAKPjgGNPoZpcLw3jw6t8FCxd7rrKVCHhB",
  "key17": "4tvsKqmvPExXvjNusVVeXYZjZpzbceNDAim3G9VKrMeCMxgAqxNsHHed1uBFoHVQmmNksRn7T7PqckdpU8R7zGqC",
  "key18": "2nHEB2q296CrXfy75823QYGFpJTcm258hHjwLy89ouhBzvi4HWjknyetwhkmqojk72AHUZfZijosvaTYkgTu8QRT",
  "key19": "3Le8k9dPNJLLC1sykcpcTiARrSSTdEicCYXyD8zUGziQomRXgGHpKbKeT8Cy83EGFRNC5YnDGo9kUD1czeN8k7Ay",
  "key20": "GRHmbzM9i6n3x7wZHPqM7HDk6vBH5W1cbVwSh1fuZBELdnNqLnYHvXQW1CbRBKBg6YYerke84CwsAesMwVNM2wA",
  "key21": "63aLFgdBKxao3a6bVmKekJmNgTqzAGj8sMRbqVPffXSsaiqGPm7Pb5P9fGdAuaB9prBSC3AZHdsTcqdJDAe9eU17",
  "key22": "2BLP1u9KQizUkbXrtU3UmoGTxv2vAUbhcEnfSLGRbWPnJK5VXNbGzEwHDG5BWeNTQh9KczhSjbbNQzAts1yqG1z5",
  "key23": "Rc7q7a1Gn9hTYAjs1JFxB7moTdiHDaCkqWbACvy7N7RNd6R1htHi1Dno1Wv9Ayviaq2CquVYdApv7bXWQ4qRk3c",
  "key24": "4LzfstPK1dtydZTdLhhcqWhKSS59gnx3Jqjrgsy6EeoiAd3ptzbCgJz9hs79Bdgsjqx7ExKZUUXPwFCEKJntU38Q",
  "key25": "33xMHWenXZhndfeUfUNirXk2XUb4THqedxN9GAEqiavRaJAZY52z6HhXGspQnKEfxXmF3n9SyqDEi6UGxD7ozUnZ",
  "key26": "3y2Q4aBKESg1S6vZRbEpp4j7wgbvnWQopmKaVYYpejeKN5ec9KmQRGEAVpQ1kzSrPaPjEH1do2nHAjnFa5yFn6SR",
  "key27": "4zUNvvNd86gknXxry5oQbzD1HYMRR3Ei8VuDWkrN6K28BreXDJHUp1SaHWXgvhynZivhwk7GCQEFDqBizZYaio6s",
  "key28": "3MfocBN7ExDkqXTyr7JWz3WBdVcxCFr7QBcgsCmB1zG2wPhrN2CD3iPbq5kU5zqo9qKf1N5L5r5NzUdFPcsu9Ejw",
  "key29": "EA21aPwqocu1Q5xG5bX92vBRsG71zm2ZNY873oBKqCsNMZ1g8n1JUp2SswMF873i1ZcfGMGaxFWNKBMiKRGNqmU",
  "key30": "4qRFxtuiTyAAdbsAvaJAsUBBT1UpZNaAfZqA3QxhoSQkis6ERYgcUaxL29gGYwvERZKpCRaQwEWeFzwc9ch3TuzQ",
  "key31": "4a2QsSxADsiMEaefBY8fw49LwM2cQ7kH9JLybyMyjvQY9qisCXqmqez6a2Vf6ynbeFqSpxdPmHFa9tE32DLBb3zJ"
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
