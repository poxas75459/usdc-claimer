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
    "5RLPQt1AXMy144vRiHwyiJ5zhZuxi4NktaBVzLhYYwEMD2WDUJz2Yo4d6wsGk9SXXc77andYkJuTqrUidsqfz71b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ACNxE7K3GbitsQYQuWBnc5V8Nhw6SLjvzgCyWvUZmUq3KZpK5byG2ZxVe7R5dZegfH9BgDBdJuYuDGUcNkqmudt",
  "key1": "5fuxQLQmrmWQGUzLmrCfRR44rjgpy9BczcYRVnB7gZRhFjXGMWXtejPyRoZyUp8Msg278aGr6Mxd6yJhUZj5nPmu",
  "key2": "4tJLhyniW1tNnN1GV1Ytdq2PY1Lu1pEp39RbesXBFk4ecFCCaCNbU36i8uyqPhBDS2j4oMkyCLNiiYvicN8sYv2p",
  "key3": "4gJxoW43rBjZmYnJtxma1aqvVwj3TFrHv8qk6gQC7zFSEPnLEZhZUir3u3Dbiz4FLB3sS3xEfDRdscr7PathZx15",
  "key4": "3SzKMw8mBdoppQtEDrEdBqnMTfMoFDPxhapMA7jBz4nymP3EgexF5NC2GcyS1a3Ckib2P4d9Tkzx8cJmnRoshRZS",
  "key5": "dP9LNrWUz6cV9bxgELS9NMYJDpGqsYzmrYkiXLUSVL6qQe4GzKDtWejTDAFNY3aUKwzBdgUy7vd1XwZ5E38fLRv",
  "key6": "5HWptxi1P2NAWSXCCVxyaDEzmsXdYPNzUe4efsEGsCEsRWzT297REw8Q1AH9AH9ugrNcsWhU5R9vRXNFrVs98XFr",
  "key7": "3MZa6y32nhwoXK4rFGpUirqfqwasNDPmxCZUZqfWzr6LzFyDHXJucv1G2aaXhAaWaDrmK2M4fTkU8c1ArfWxvd9n",
  "key8": "41Y7ohkbwaMJZR6TmEHneXnzxwnVYEDgeon1wgz4Sprmf2o6aLce6D7RQGfjHq4k4pFM4rXC7zkMTL4YLujoXaZ1",
  "key9": "5V8c6r6kPQ2dtqytHADL7xbdLZPMqRVhyQRJUQiZ6gtf1wcTUiS88nXQGh5eZRBHZgcSM5EjE4ngKNJpAmU3wsEc",
  "key10": "61t77qwqghcjZYkxsNozvWTHmpk2fEvi59evuCJCFG8iihq9pfiZnGNnkK9p2PrfpNVPtcboGyGzvFQxzjgisRft",
  "key11": "3NvWY2SfHNbmQ1jLccpowHEFbPRAysfW5ZBnAne5UPUua4XzsYwVosVBXR8qKBzLo3SnrfYq7XWT6Q4iuoMRMvHT",
  "key12": "DqS5a3TsWSJgW78KM6RcC2oVNyCHrNdwmrdHyjJ9bRsiWSgZBj1PxyFjSU9WkJEJP5oZCYN1nxTLHiTH3JMMbwU",
  "key13": "LDdSWwr8L7ykW6M945bqk1WK52Yh7XJ7T1kEFJU2AS6acAiCn26nt3G8NeUktS4RLNAuhegpVJhG5PmRsiaFcZz",
  "key14": "65YuXnjxq4PLt5NQkVwZkSCBYQru18v3MeaLT9J7JpXefJfxECECEwk2ao1VXBeWMgQwDhmBfGj5nUekikYdp7At",
  "key15": "juEH4PARGvp449Qn78ZnWDQnrs3E8AfEM5cpyLLwCeRVxbKrJJwasxP8CK7a3wjHpFgjS6QcoCgMDJzPn3VrP2p",
  "key16": "3zhcmSvwGCpYfAJZcmkccAtyx4kc9bhfCxN5M4WfY1fpKdSjhMBu6U1rCJFmrNejyvphx13q4HF5G1KbhSesRGsG",
  "key17": "2FWQFAQookrGRLewVdZR8DAKgcUbodNG28vo3a8XgMKZVsdVFsrScT9ETjp6CwUEYzAEpwd6r43MK2hYWMfd9v9e",
  "key18": "4ouehQzbs4x6bSZwJqprF8eKBzKD1pNzgrWadpC7jXi2vXAivUPBhEnTcNJEt8Q661ozgCMHYH9agXQTLK3MAg7T",
  "key19": "4U8hvGUzqjyV4uFr2gNLJY1Kghe8DoVtmQeQ4XRfQokzHBFefnqNmhN7KkwSmjewjhFERGFTkT6cmZ4zsNVcXWWe",
  "key20": "YWnDeSFRNThczJZHqboKor5E5QDyvrq3cwtXinTX9HLD5CHVNWfJqGD5VTSdC3XWf7paA7srfN7cLigGGfEJzLS",
  "key21": "5kssxqaTzn2jNU14ChvaTpScSiNDAn2DveTq5DsDi7mnaR6wAJxTpQfK9R37pvgALAoqHyPZDPW9pHx2iXQ4Xynw",
  "key22": "3qGdXtzJ4qKkrAeEGqUuQAGp5eMCbZz9RY35YAgbsMgzAfnPHcc37uDgEKTDU3Kc7R7ccNCZ4CmhCLMdKmhnhu14",
  "key23": "2uXj58wxayJomMoXXwvFfAGHZSbBTBkFAnDLoG78wrAKUGU3JgxKuvZFUoFynj6wqNoCAYvFKXR2JkC83jwRvKyH",
  "key24": "sNZfLD8SteKq1kzZc7d4rppnenjKizz34g6GzzrBqdZw2ySCqjJMMkACZSZUiJx682Ug2Myka9tNWxPbFE4GRFX",
  "key25": "2EdqvPdYJeCwLsWH2rXuKWAfmAS3DdWE1zKMBjCzEGG3nG9DXVP6qMq1jXuKqUy4KiziSWDQbhaCEsGghFmmR3sX",
  "key26": "2utNitkYg4JjR5F6UkwikKEY2oG9XbBgFP1c8fRJprY5rhRHxnh9j7hAs9bYP7NW1TQ7Ccp7f6FSVZ1Aig4hDC8c",
  "key27": "3nVfYEyRkEfngc2Z56s7Mi5xCBZv7g3oVJHnTaJPfGFHEHfYmzLsQEECt7dodCpLM31DmnHB4kfoqMF6ddqksQfu",
  "key28": "3Xb7kFCXDD1m7sAbZTCXHqsRsoQFZsoW9VzmqohksLwsrdA6JNx4YRbzWVik8DWuFkortMJMUSgSVZm1APaBMc6Q",
  "key29": "4sBoUduSEnXHGLNipnqh7WEkxXBAnBL2sEWxBpQvobuLd8tmtYDgJC4X98QTGG7cmDcDdBKaTTfAPhQ1qUdmjEtC",
  "key30": "ZTodthhiiXnPi8tEkhrKLRpX7tRxBmz1nFnjhhQv2pQt7QjmYt3fpEAXCakcnz6AL4TS6sJpJARtsShNxUo86oG",
  "key31": "4mAfENvxyT9HyHHT6R32hVD5BvWEL8UKJHnL4MRdyVbe1pd3G2331pQ4wsXwiyeYo9qSqXxcMPbZ9L7PtDMjw4NW",
  "key32": "56rNkDUoEnkUXewqWsCQaNWW7dMdV4wU77YheyiXqRKZD5ZLZWtR8beqjZM4UN4kJQcBh7X4U84Qr2zmXNwQzx6N",
  "key33": "28SafSREXkrp1MJh1GhfyQhgAHs39P1ooSSMhA7beJ9YWdL4PA5kwvNvZEh67NxM2iQR8ZJPjGcepTh284EB1Uof",
  "key34": "2tATNmf3KoWkbyLDzByeQmKcC8smXRT7pEYybk4cCrkYCkdFYyhR7iVxFPnxw3tE7jQ8Ca1GupBx5wxRzp5AYQZ1"
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
