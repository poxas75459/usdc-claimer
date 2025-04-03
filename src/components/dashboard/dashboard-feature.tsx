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
    "4SECY8M4tfRcbTUPr8DEWWE1CvhocXMCySyiXK7PE5aB24ESEU9nzU6yk9pPxZcDqYRQvKZp6CqAKWR5du28es5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38radskuHpyMUdjVosv4TSe8uS4WfcvRiMGRP7sH9eZBJF3iskfHjTuLJogDgjuL4szrW5RQG6fyeGWPQs4fwdx7",
  "key1": "3xYQJnm99Jhnm6FQxXNnpLGA9QBsCD9Vmet2w17rddSEZfEMinxHdkvSGUN5NzHSCN5WT9iHB4UcYKvqCwiLMasz",
  "key2": "3qWvnetPrYKvoftPPEc4RGQysToFqPWFishunxv9m3Su4tGUeTaHhaBgY2b7z991bnNRsXKg5G41u4mGgJZEJaoW",
  "key3": "3BgrLHQi19GWjvGZaaKm9MxnKrVoj6pEddK2gXu6estMe5CxobF8tQs2qiqQGj1TPcedNjgbFomgrm9wLrrjHQch",
  "key4": "m7qwXUGAvy3psigtA7UDgK6NyCf4NC5eXDFrheo9YLJQHbVfie4BwaKVpJGQR3WBnK6QaLczFhhrPfdX7X3oaXF",
  "key5": "nGSfxuyCZpEVvrYe7ZTStTK24hoD2ZLARu9xM1LJbLZ9z9aYdBksWuJVD9hBjtW9hS9hZPs1gx7gvt9ufbgAKxu",
  "key6": "3Yf7Q3CYpuY7a7d9PZE6NMuE5PD9p2wXy3J537c58YjYBFVoRKSLC3YtnfCRpNYC2uaPsTPJ5yNeDkWCALMUkrNs",
  "key7": "29QZpckXUFY4u67PXzHJXG6HLZMwe5H4WanqsRjSZzGNwjgDDqNyjzZE7vQ8QwrbiJNjqEwSeRwmHK2bmmNDvMDC",
  "key8": "3VVLB8ztRoiPxPf1U7kppVYp3af8iAPWxuHm19RjGezNUXj9ab5qrcQD5RVDH3hWAw82BFtNBKSuiSmLSHxq7Pke",
  "key9": "5yRsmfsuRFQ9JR6iyMrbkqw9matYa5hXyG6Rw36H47KRJzoMHo5PMuor2zSDipj5YoUdYzbuqLBcPFTV4EmSpkER",
  "key10": "3e8K5pVzvvCSTgoxPan1zhzcoNy5QKuvGN4nAFmGoMB3QJj1PXRKwgmK5huBDkTsMn2e6Tnti5Rw1qTmn8fU2L7f",
  "key11": "4wLm9qQGKfpnRtQKPKeofDHgQjtSy76Vq1U67J4XYzDu3kJobyFpameCRRRzDXh9xTLxfHBTW1TF6HEibuM3Fipm",
  "key12": "5jcscXy4hnKPyBNbU5ouhp962STqF3ZEt4kirPFoUFJu9gjwCC1sCrZR9VwNiMrE37wFgpJMim2FDFVe3bwHpz6A",
  "key13": "26yvDL3ytvAA41Cq7AAr6zLVvDjdxPiRcGc9LKa9vNUi52QeM285t7HuaSPVZPjejEKaCpCzPNuerzJaTucaenhA",
  "key14": "3C9s4t5YzTwFRNftckAoRfnd8W4bMYafriR3oycaqeqgsLCshJsMbxgC25q8SdfcbEZj6U5BfQmSWmfkH48bQPn9",
  "key15": "5P5sEqYtySYZU7Ufo2h8csEUKqbFv8fKCXRWowXEuNcjXckKngs6mBf68Y8ZgqnXbjryWyf7F9c9TvTi1xXUf3GZ",
  "key16": "5a4eBwS2hQKPx4FhXbK2QDfQihydxF55Ho9exbnqgLKuS895UVdJnM64NHjK2ocMCHdmTPrK23TqaoMfxXfZbvKy",
  "key17": "45Wu4vL988KGt42B2pU3k3RxCZTDCz3qL9NG8JMYqLnmNid12mXX4eQZ7f5ipTDamXJN4fk3Uu7SR3ZBPk9hTGTJ",
  "key18": "4GwTuW6fhWhF2PWEtH4saSpEMjwtGx7uUkBokTMGMN7mDTEU4ByWCAQtpG3EyujjgPWoSESNbgHU5SDV9CNprVPM",
  "key19": "3KBgi9Ux7CdPLzZx9QmibM2tMJG3NMg3DAQBE7EBqdxsUvfkvQiuS4jjHGPskVvcZE7223XBpoAxEBbdKG9GKrCd",
  "key20": "2uTisiJZLqFMRNzjLir8yreXuei4NmchzuZRX9JFrBgkzQMJQKVCs11fcSL7feftaFGhYTMbhmGVebFXYDBmsJwD",
  "key21": "26dGLuH8taK69mcKdYKQJc7yEU3st4aqam9oH9tbrc99smRe4tFDXvKRHiJznkRmba2teQxQstsVQtVEhPobq44z",
  "key22": "2vAgcuDoK3fJvUQJxgEi1BYbXtifzRyuwpZKLEiT2kcWqxT8jVYe6p5EtoNq3kAsxR6zU7sT7U9hRxy4smd1VaBx",
  "key23": "2cp3bwtwuPJgrLugJ139S4LW4BenwkxnrMbZndx1gTBVkhf7ufsdWudEYrc4cjZKZU5gtZVT98D7gs5CGHs4AHUT",
  "key24": "2JXdiy7Dz6gR2rwzfN38nEzXLYVC9ekZDtaByns76V8o2HmUGHd1WdzqSKnnSkZ4zjL6n6end8sf6jJCf5zVuZxR",
  "key25": "2mh6spuC8dzHyoeX2C3ABsRaAfXAUrvVK331srQUfjebNgGemSzrr8NyJYv3DGg5oGCjS7szpHxLyUzeNwiNqsVx",
  "key26": "3RfM9AFSydmEXJ2tPekUx5JMunWkEnPL28gHZGV6HMK1y4TJUKV3SJNpRUQfn8rurJd12Hbj67oaGwRrLr9qmz8D",
  "key27": "4qD2Xd5CZwjycwwdD6MWXEq6y7BAQM7oYiQC5kqyHpwphbukMk6zsVSi3UQyPgZUR684hgoStKKADKrKBGNa8uDA",
  "key28": "3iwwEaqu6dAq5ASeLqZqL6x9ky2y3pbkHjE5AzmRcBBc2LquhhXJHYg9d1ezSfGtwZwBkLkYec6DNUTk9PPCHP6P",
  "key29": "1EQPSkB77XdS55VueWmy4btYJMq6EM8s9Bbnw5qywAxT5FGfzk3SazBh3K2hHFp59DtKBD3hfZ2mW6nzY1e65tP",
  "key30": "5VBQYuxc2XywArArmzhBs4Zc91QzyKGzFyCG7pT8hS9Uud9Lyv8Z7wsdapLbcp7WvhfVnefyfXQAd5dmy2WmW7eg",
  "key31": "3u8Zv6PQYyEkm1U8YZoqgpMNJNQsAwNFKng5UQYHx7DuL37coTxyioJ51WZjvzRouSKzrxzJ3Eyrrtyidud9tTbL",
  "key32": "9VPZQqRTVEhUcRFbgy1vW8nxN6CXBUqwYuoyGT51YRNStoUcD8fTfLyxfvzSX3kKt8TSfvWhVtWegU7U714nSsZ",
  "key33": "2n7uhqYk2AoeAM4QgTyotJq8FMqLfTF4hKQjsrjnww4xaF4nMw4FcEUDYMpfU5MEC1WXBo4bEEGL6sRXyviJjKn1",
  "key34": "3XvhSHMtDHfNn7x3ttVCxbdWAdEhtnukcXHxd4YRQ3rG1p4kYbYYVfUAv2jvXoRz9zmQn4ABqdMFijadsKEmUYgW",
  "key35": "5DkMGiG99zHdBMYdpBci75kwqKtyUjFGMt9RKWZfTRFCoM36hDwf6qBAHqsXpsp2kbxEwyS4jTgrUQonVSf6g4RH"
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
