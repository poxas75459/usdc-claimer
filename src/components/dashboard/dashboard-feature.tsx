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
    "CEJLEb2AWMYZb3dNZy5GKDim9GD7hfbbE8qGebazAmpBh2JWzqGgcbvg6ouzyfkr3gt5qeZvXqgNUKJggn1KKnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QtoYmXbt8LTG4N3LeJ7Q3PhbTdrjzVcT56WfCP42dcwXPNr3ao5PSqrHkGxUgoRPkNJWUawkwmkUwc8MFicdsNU",
  "key1": "3na9zwqvp5a4dWJj4RwbRmohCkjcNZ8CYKY9WDQ8XLfwPAhPzeuBziyMTAR9uUZzdm4hyxwN5s9UozLUcbvrJWR5",
  "key2": "CYU9A97tBJerLjx1hFZZHfHo2EWMofx8QZQKKNd5d46ERXSFmGSDWcKA3JrG7xtnUTUFJYd5i7wcTpwmQcoz9ht",
  "key3": "UGh1htPmZ6rf6GdRG1mMUgvYVYfBvshZtjbbZwRiBq1dA1E2W6QdCMjL7nuPa9Bn4vd7zcBagtpXRa6SzEb7ufL",
  "key4": "4mdZQ9sZCNLvvUU6jXeeksRGgR5N5bwwfLERVbFA1t4bneotu72NxXQou9LiPd8XWNEp66iM1cdQvp64n31poG7s",
  "key5": "3sXji3TLkQwpDRk2UkUQ1etiK7qE3MpizNuaTJru4brsKjqnB7RCDDePwRGdsk3aeFfasq6rmmesXyxPePadvUhz",
  "key6": "3kmd4oeTUCxdq9s8MJ514tS7qyS8xghQY7Bg5H4pmCDsKba42kYk2ZWGEsiYUW2nu12vciSe1ddYb4YwSs1inTje",
  "key7": "2YcZbULaHZ5UNjUyiDABVMyHhVTg38ihFcTPjeW5h9WWiHNvQV1v5isKkPht5HnaHHmBR5ZAcnyG5mMFvMtBHUgk",
  "key8": "4tbj1996r1tkpx5FbTVdjhgmL2YQPjsCRMMmEs5HspU1AJz21d6NnG45d7oKGFcN3hFTzhjdZo1ThYbhLdpmSuja",
  "key9": "2xvS7CCmwnHfq7aV8FfsE4PDsVS9FnnDMuaKWfa6UM1fDAwBrhKy4rdsvviABrvL3rX9UkHqS2nbL6p3FXYRtS6S",
  "key10": "ATFZNSN4Ex12sWLT9b5US8AUcAvxyM6Wp5qkTq7reH9D6w81x5gtUbfM1KJeYg9onRjcWPrWiLDBYueTo6ak7mg",
  "key11": "4e5QpL4seYasp1ejT6rnTpH8b9zEnZugChGLvAvescKNxykNwfAyicg3y91qEhdXgwegKU2GiDGGsLE9jBwNMJEv",
  "key12": "3HSxgUTKEmYVbm8j4p8eWxzaPRuBLWSqAdgdjRDM5x2yLevwGnjML6dMF6bG1qmVz6R5p9g8KziWd5fNZ6uSy8Ud",
  "key13": "ofk3ceqEfHe9Ythttn9LdQXas2fRJ98sWLAHzcTZtQrNGnztvodZMH3QfWWeNstYgzdU3D7YBApVTzju9zoyjgc",
  "key14": "27U7oiXqDqN3oxTYWMaRzXUnTWM6w8tyRtapw1Qmj5JrNjrxFNLncy8kAaD8wFP7kfTpdxKtGefBbjwwsYPZ4bB8",
  "key15": "37BHbwHs8HUS4nmGocD3KJyhALkbxaCPmMUz3zV9UjaW67m6vXJDFq7hYXNtgKu1S8PViwSsbuR7tKh1E9SHXE4P",
  "key16": "2V4itCsVcMRqr522su6wLKMW8mM4ocydsdj8YvLk5T22HpxFYBYt3oD4LPQCkm9bsUgmoEGzhbnvxjGWJxacReaU",
  "key17": "4X6B5UcfEgk3vuwpGPVaPuWZCvKvppyLE2TXySaksCpV3wm27UERUefeAt5ZU4fqXTUdQStzc9U5EbDkejgcgjBT",
  "key18": "ZLxkuCM5VmJhYfcompdV8HCUZ2taQbSbSZGdqdakJfZrhX6bVZ8Xj88N6M4pKpyxthUfGaASumyiofPiQivSZmx",
  "key19": "9Q3a7yGW4pU7ATguc7vMGgcSiUcys7fGJ6U7gNambbyk5MPeruSFW4sWyRLNvgbJ1icmbQAdmzG1EPbQx6D42Hs",
  "key20": "5q3eh5goFzFbVwSj5D9TgCkZ12iBgNN5kQJJYw1fWizAuXHpVJF4fzV6ipKcwbBD5TgVZwTRtryzZ3vasxU76ehP",
  "key21": "4NcgwHBwVDn47CGG4dJDHWgyR8Wwto7e321xS2DwubS5tCTqAeTXnn13oaQDHEfVWtDMaoBHLdHGEPTDYScXQfR2",
  "key22": "5mGiuUg9SoSJ9tcb31f3RJckLazsA5yrEu6pSuz76JUf2u4iBNXEvtxcYNKa3Y78U131ahzp4Ph5Xc54y8zC86z8",
  "key23": "2q8k9H56JphskauUtLrXCRKzucwjkGPtXVLfFNJMDC1pdFEFUjDBLZLK8BbEb1jmB5t6ZygJUQNR8eH1fHuJdWhh",
  "key24": "QYU8QhvHASjQr2jBhb4YRpGPHMhezQMVFQ6TPvagXs4HEA1yhWEivbRNPywgJanBdfn8tZFyw1kwuPQATcuyDHM",
  "key25": "4J8xyBXYnNhHAS8iifUA7Gk44kJiLXRbovxMGreurjjVmZgZLGPVj7foavAZmqZz8q6zG7vau8iMQSC8zZriqUtp",
  "key26": "5QCb8RYgmf2MdJLFJDrfymG8jwp5NUypf91b24AcsJdibn8U2NZ9sEKVyjXpgSHbNNJigVgfNqkSyDGc6vhumveL",
  "key27": "JCWkVZwUyjeJ5WuXU4q8YKXiscLw8mkgr6F7TKMiA2htDFeQtSqqrEbeBaN6zBxqM2qBbAt6Kwnmhs2PBV5K11Q",
  "key28": "3yEcjwzM4Z9vcM2eU1QyuR1pgqAXeTMePh6HiWJp5JQonG2QR9WW3iNWWxnP5yjbdBXawyier2R2hMVmHYQxmkFK",
  "key29": "47LxXdgpdj8VeCdDtQuWqPgXqK2HCSJVKKTyMMyaH1diZDEg824i9nisuGn3Ed3eKUHRXJ75WkPjvPpgArRLXm6g",
  "key30": "4T5943QG3qjZGwn2Gv1QfewyWPGsgn48fjbRXR6SV32dg4HqweRtC3kMpGPvo4CXDT1jWGxUN4d9aPEYkhnb4rAW",
  "key31": "2cX8Ajfxkqb6YZjDib7dwDgEFSopNHv21EDkMwf5Q3y967zFqi9U85f98j6GEaJzV8pkFx8B6k6icXo23WaohoXv"
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
