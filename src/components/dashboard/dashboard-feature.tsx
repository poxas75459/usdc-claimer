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
    "3NmWudcm1yoLGv4E2RWVZf25PUWSoS2krhEom4ZFAYbpzhnVkFzxZnEdvs1uTdnfR9J5QVWc9LkjcZskkNrHku7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WspmvMzRY9KcavmnrGAnZosZFN4SqiZcg2cuE63N9nGdhMoYLRK9BZeQc6nm4sjvjbKn5BaANNn8n6XEgGG1vPq",
  "key1": "46wgod4ZRDYqjWHRAfJU3WXyxDUpxgvqgAq9VWzTw1EyXJ79j1QFqvvPQbRsKFCSTCjAC2gL54YhthsaB9mGFLBC",
  "key2": "3wNPo5cyhLUdk5Qm1h6oDRuZyj5U6T8mo6x212bidiLMBT32uHhUpkpA3sG83cm5GZdRkkdcT86FktAxGR8qZfVG",
  "key3": "5nmfRgpRM2cWMmsUnAumtrP2e31LpQDsABK1eXacP2XQbWBR53ZzNjpeTM7KCz9gPZEvRPYDQPhARcVqU61osyN9",
  "key4": "4xwj1HifM6UtNEXjEJ3CQpbyJ7fiEqMKRNCEvqppdHzaxtRnqPFyQFSVnaAwJGioG7bzDcdv7yQ1Ei3AtVW7ZpGb",
  "key5": "4EXh46wediRtxVUsC5GSkQhC71mxs3ZVaGKwL2kjYxjqFQxmNpxZiDk4r6fjzNmMyxoWtBbk4WT1QRhrygB97qFP",
  "key6": "wueDUH54wr7ei16iX68LQzcAEJgHvzFrAGBywvwYpoqAjx5N2fCyWnn4qeBJVSaFRyGXFBzDG3aHhhuesRVnxcM",
  "key7": "54VLvRRcVrBk1NStxKNHfSdBgNwuq1Ho44dU8JUvkpDjfV4rfpaScivz9Efj3ErzYA4HUh4a8E8iKd6YS9S3CSg2",
  "key8": "3zh6ikZkiPvJnG6CnNBGA6eF6kbDZcY6NwHyCW6xWAey6TYvxerqR8iXACB9m7qMVLdNerJQFPXVmkEQqosmzPcB",
  "key9": "3ajTLVBoP77pR1cNjNsgoBaYUZMFwWnxYJhqmM6Z38WYmBbA1TRn5iayC47W8tkJdoJR5xGQaQzromda7gGdwXis",
  "key10": "6cmJpf1sZcBQ9XmMuL9n9XdBXCwUkhT86SCDjDBRRCMryFaMDBT6Aazq82FkKhDp9uPJRTxXq98Vg7ihiQ81YvC",
  "key11": "RTFXey2DS9FKhNQNLHf3jiYPWQoVk6rUWuF5waFcaJzr48MQbWqPFPqMmS6Jotc2TkMR6SNskgeHYE3oVPDXjh1",
  "key12": "5wGrQtVUw66Xemt1GbdYcZShv4PHB2rAXLEnfdVdQSpD99uJruEHHzWzLNxkVw85xzuayW6e2buuYUjxSY9PDm1W",
  "key13": "5YX6mJWEUwqq68ZH4CvSyoHtRLbVUA1muSnviHeWd33G8Ec2GUkcTjLGQmHq3Wq48Rb44aZDzFHaVKrbVTTc7pJr",
  "key14": "5N1LEqnYVF2ZqNsphH3JuRwXVxiJVFfhqJmaEaF8qi3PzrS5VL4BW9m1bbUFtH1psfgQnHeTpahr9PbCCkv8cEGo",
  "key15": "4hxGwNTjwuKyZHSqFyhd4eTd2eSQQBZoceuNHP8mRH1bkndUhXiPxkz8wq9yqBJxc3fLTEwquZGDYWXJVuim1x44",
  "key16": "2fxm4XaKgxv674tt7g8YWMzJLeqFLVR2cbNQDnwSpZs4tUtfEErKL3ASvjTUQ17NxGQNGesEf9NWXqCu45KbGzaw",
  "key17": "35ZWcF1xWkAcQ1WvHJzHV6GxkRtf9mjXo4Sy5NFsF848T7yNGVwqEC6ohG9fAdv3aUguV7CNSgmrKi4DGXehVb13",
  "key18": "33TkBgH3rCDJwuiDiFbdss86j26hp147bxx6M2kpA6FHPWS6pvRNmvR8jnPUxwynsDgo2hZfZ9ugV8J8TVWvZwXa",
  "key19": "5EAjrYmKQPMr9Z4XC2fZeC24KUr1xLwAqu1tq4ohagfKzdzBSq2FWVzcdhH6JD3WwVGYieV53yBNHgQS9bZV2rof",
  "key20": "LwzmAgPdhyUCEt1198kuotok4rvNNuyMAbK6VLqUSza4dCz5MW46iTqMw8kRVbKPAtwcjiY3wLYXY3KuwAEFGdN",
  "key21": "5Cdh78oDz968z5CCscMBheZBXiut7VCvUpfqbQQP8RpQXRzovqY86hoi9Bui4A64XdQSTbNw4e6Gc9vteyFMxAuG",
  "key22": "3G8yfL6vRzDHyrfr3Xg1YPZwQRSfXu6ZRt7MTKmGCU8jZivxMtmNcaCFZY4zgiun3MVT6JCzfeU7SYEY5vviS35B",
  "key23": "2fSYtLTga7vUreMmhti7YEkvKGZrjkWUbakpze9tX5TjpsPTGMYMSDqLgB3YtER9NCCA9BUcWr7VC9cyAHj3xZHZ",
  "key24": "2ZxdZXpitx7pEyMAthaCeRRB1CzSexWzR48nyUiBVeiJkQZnCF6FNDAYt9Co2JeCcgH1E8oN5M8PGtRhA52VfCYj",
  "key25": "5UmLe8wSaSeGGvys6vvnB8iAchpDCj4j8K26WSkRRqb51izogVnVU5S7xMhxAdnr6q5L3729gVm4yZc28GPB8ycA",
  "key26": "27LoXAanbp5EyQKNuJpwTzSBJ1doCdB2JEtZScY5CCM4QoGFkYZQFZ6wMEftUxSjcHxQPX6c8erqCgxnxAjP4RKj",
  "key27": "5PNYoso1wTvYpgQ5zFNtWfuJUNuk8imDaU92sURURHm3chfR2DgNe6kvhj4kiGTg9Q6Zy7WD4RNTcGEZ9QhkYESX",
  "key28": "hkC7Bqn9G999TfHrZfm34Pjxsa87rN3MNE8Q4YX5yi5cPNQTkdephHDcnRCGoVhC8rMGmLoP9XWDSK81LV4Kz4p",
  "key29": "33yEFsbH4B7WsM6GzusKNyFxptdgtoP8RnbqNGAoTVZMEL8SmvViv1C562WCPUmfkn5MxynnKn2RfpLfGgfHqJjV",
  "key30": "xQCNunffnonVmja7S7EqyJCHTyaTH39aRbkyUQNmPGthC6vvNqjCiNg2wVP2GSq2WEJKywWQjowrb6RFBH9KoVD",
  "key31": "3qciP2VUtopzQ5gMta12oRcr6q64ak33DvYuNvSmBLRnwXkaDmkMF5d6R3jd71aa8XGUTVicgb8BFXhtwuTVxc9f",
  "key32": "t54wdcn4GJukRxRUfFrFeDkWNWxWRQkySzTvAtFGvGNETsbxwJunVWT5aa3nSzmAmY5XZ6B9ZfxSNKombhVXmD3",
  "key33": "3Fu8ZBRTXwCHmf5BPx7SVdegH72VW2yeURB65bryPkCfxJhN9e5jk1525AjYLccH7Ax76sfkapC5f2Pgr5uPMVye",
  "key34": "5DUDyHXTnMYoqAZd3gAV5yDnj9GtoeUhXvZytRbjhrzXnv1L4QDdegRd9XbVVSLVNfig1wCamBWKF2KPsqF4iyzP"
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
