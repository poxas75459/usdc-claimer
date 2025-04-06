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
    "4rWgDwNeV4i4dtwtiw3UMZn1mNaW3xBVQ6pypsEoJnVdEKy1xKhtu6ogcMX32Q2QskcLMj1PkgMVrsdA23Z5Loxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "APkWPsWtXt5N5AtUYzXq6Sp6tymxgfa4nUHwSTwPBHbTSsbKJjV48j8Nd6XhshN6dhnmcz6xwtzBjNLezotXDKF",
  "key1": "4bxboMeUf5SuPaV8RajXqymxcubdkS2fbKKfwQFiczeiih2oKE5Zytf23kuDxXaBcmFqcE8DRbFmu5K2TiVSiV59",
  "key2": "2wGL7ivjHRGbYYUWYtSqjVbpkD3APAyJvoBJgUpwLU3JVZPay5QYgEXJsJ7N5bGeTutZJE3D6SbL8tA159ScMtBC",
  "key3": "3SJGJsyU6qjk2hamjyRAZdCWN9AMnFvaWHVGN7ctgR4utjNjR1Bqf83CjKDsoVz74yugGg948NKazd2DrbwbFzQo",
  "key4": "5AvaCFGzbQwuk9Tny8Av6yUxhb2a2fioVWqpWPif6V2SXWuBAyEBN9mewWDcxnebNaXTasfUHp5MVo5a1m5gyBTL",
  "key5": "56hPyUqrRD5GeqaP5Hi3tKoJ74ZRZSjgVU89DPVwADusYEjWbCAeuGbxJiRTiQ7kDcvDZuv8pVaS2bj2xwb7zg9r",
  "key6": "2s4RCi8daRhRs5cp8g5bAkRQYr1kCA4zA9Gadfa2iHagxwgiRx7YaUsrXm2A2KxCZ6LR6q9ZYFhzEBmv1M9BAZwM",
  "key7": "5tPCqu6nK8y1eE9beEFbwqQvtPc2euDkyVzbhYVbSE7SG6V9sbCLFdH6XVCn9ZMkJzJMdrvj52Yg6WxH2VntXEtv",
  "key8": "4ddpoaQRrBtJu5E9h11f4NNFAH3Jq3UW3Hxw7maa9BSbBuv7eT36Adehcr4UWHjjUWxDbVCjmngXBcdGvE8hYoHU",
  "key9": "KEXA4bti9CZytrmhFf6VWEEbMgTXXWzL9aijyJWWHB5ztWnU4sZobxzrzmU3cG5ynp6cjZECDkjRU2j779QBk8F",
  "key10": "w5Qmn6omhhD1vKZQPfUN4mcTgXAUfALXhueDkT861kfNSC4r2ErG82d6Wm2jpyXR1AM1PggBrWuGQf9NY5TrFqz",
  "key11": "2uynnBEWGXF3Er3z3edWQgd897dewb5k27a2sP26ZsMEUsfShWuwL2skbyNbdexvCctAgg9PMdaNJT18wALmakR5",
  "key12": "C2ATPVnseNzWfUDEiKtp5vU2BbUq3KQoPYREZWr65s6r34SFXZTu48ye8J8PNpshttwWpWKQCUrNq9oK49h2kzk",
  "key13": "3L8uTP5QHjnKc6LUWBkgG79SbUuobhYAfJKjWxTa2MbNXf2HCkzChNSAMQ9qYL6agWapzVzwy3JfmxWG7JL6j1VG",
  "key14": "4J9kne3wkRzQijKAcKr8QU9Xga32FmLAnmkjtuDbCNe8yvSHgHFNH4Ckny5QcX5MbF8mZuLmzX1CajxFPEf4ZXWZ",
  "key15": "2Q7uKvDvrYLxAs9de24LcpwNkTpYeczAMDvXM8XjpTyky4DiLmnj6A2nAGvhW5yPq7VyXfZnixGHnTFgmukct2kD",
  "key16": "4SMhmYi6AHLkynrTTWS4zmYngVa6TMptfAhkLyHRANohyoNwWQr22JdqmfDoNJzcBRU8tsgXFEPRoodtXYdpKzy6",
  "key17": "5fkcNxviQoSptwG5uJbecwR34xDM2zjPhDGNXQYKNfe47JSAYbtoEBA8jjG6JJmhyaFFGR4p7LercnRAXLPLWs5o",
  "key18": "4PxRu5LaDuwHge421XuE8JPGunUf8oFTrQDE2AmwZ6PztH4HCSpoFt2tLxfepMirYBtuiMQxdjkNZhPJY3sxcJ32",
  "key19": "4NnuwUbUDSmrchrH7dRpvr8KeHfY2UDVHw7dGPYae5VqqeLzmiiawLcs34eHA9N3jGNcwsuNnZBucSyn6bJMjnJT",
  "key20": "2AviQEcMV2HaEq2RsHKDE5yzyL2Wu2EXwXfJPc8iqpZEVEwyyaGskHVL1mtKHNQ1YUGAEoiq3nEcbMbKJ5jiZvYC",
  "key21": "MmhFHfKpzkUno8sDRuBq6F3JZQDCo3CRAS5rHc4CaNv5h8ivAun5zPuzcF1xFhi42uwzDgejFyMFSVpmynCUP86",
  "key22": "37s1GWATg2xscPAnw6fcK1X42ofvREzL4uEYWrgyqFaYcVnc5bexXWVG8Endz3q1dom4NdLRkkXPSthDHQV7KdB3",
  "key23": "2RrEqjwoDounFPQXVfYDVv26Ef1zT8QXd5b74hexYv7WLMXepbUZUXNcL48NEUi7omYGaqwRduwRRdrtmtAdpmp",
  "key24": "2ANsYejgrPgP8Vz8JAzcwFutxD2hsMy5MyiGPzoCagGoMonBZG7daXLMFxtZadwWXRutEZGAJYPm5aKRsk3aS8LN",
  "key25": "4q7uvrELuaNwJ7QZymLBJXp3v6XUnLEwB6R9PzpkXMdy2UYQZbNmdUjh95VBkBHujeqBzYjN2vcAkW8XM8KqCWag",
  "key26": "51xL42omqbXyJUtnZGGbfB19Hv4GS6yLqhwgWU5FUNTiWMqzbyyBBiJS4oNGtzUgoF8jfZezoY7sw5Vdzy2oDjxu",
  "key27": "pb3keyaqcHsb9MBSbtdmnHA9HQ6qDpFqEC7uMf9mcnEv1cCYKt7rcX7yHTtBcjJjo5p9aPea8bU4mn1ix1zFBYL"
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
