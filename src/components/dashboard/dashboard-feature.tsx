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
    "5BwfQGj8ayzHx79JZvDCMDXxLpS2rqeR4hwoCebmBG8kGAZchC2KQ3eMKwhym6yk3VHQz1cbUb2JC8tQRkSTbacj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y4pcUxTnppVSCtZGcBCu5s59ZVE8mX7c25cAt2vXAwq8fFNEJiu4y41Z8YcwsbQtAuU87C2pKMRmk24Hbzv3nfA",
  "key1": "4KwYFBdd4EhzQ4Lx3RQEdNx9adNkBDeDa3jmirdHZRBussnheBUJbDhBNM84Q3RzUwANgkhU6uJ8geQToWncYqan",
  "key2": "oqsTiX5R3iU5np8cSrWs1XuKb6vSy8KHKJsXLsDNvfWvEfNLjy2hpV4mAojW1HmAsUUFxfmzqnkpEpwPbaPBs89",
  "key3": "4foCdQQMabj2QpCk3eqz1rRM7ZfxpzaqqfWwQb3BhPM7fSRCCtFifeULSL76eTADH79q3vtCoszjhwg1GjAbHSiB",
  "key4": "586gUVVcrjCnpVD57AFfKvJFA64yKyjwd3LFVg6C1ysyGzKomTipGtpZCCC5AKPXEypC1msuc1mHWBiXkdJioEgU",
  "key5": "s8j3P7WgGH4s3rD581vLWRHbEzCkVHX9YE7cJYEQZ9HTvb4nmWyc3Xe5Bn8J3wfxTNeQHLPFjKH8E9hCYnKk479",
  "key6": "2oNv4vi9Ns7VfphvsREYM4Wykr61GswcD6TQkCzza1jKeA5M1g8hhn6qL5yaS4DziTMAzSH8b2Pewgsgfi8iGCJF",
  "key7": "5fmdnE7XpWLWxma4cyjvuW4upwoHo1RV5mpNkmuSAB6gMnZX4erozg1M2uc32eWr8Vc8v5drfgPyC6BynmFyXncC",
  "key8": "uqGwppbC4uHQRydHZixRmwJSeca7MBd7JPum6aYvtDYxhQbBmoSA7PAVkQUXNwVq73kuKhyU2nzz4uHACMa3bXU",
  "key9": "C8SZSLFjkJivURWe4khY4zeN4kLMQWr1wZ5iLNFPzM7v8NargX1sprTfdAKMz83eXe9fcyxR2LFrM1PVyRwnvzs",
  "key10": "29HgGDraE9mgZkhxXTf9YKu3A3Bbqv7ys7cG82xxLXJY54TfGAQkJL5WJXwAZaSDJDNCjmXNSPGhp3Drk8aqRes4",
  "key11": "mKawuhzjXHZUaq2jS4WxHGSMaWNhPE5hTzMT2zZwWPfkJGiVUsG8ozCcoetPZ4FeWMNYbB5VtikULaRee8ha8kz",
  "key12": "YqGRZE6pAeCs1ekY5KHVHVd7Atk6CkqDPeaGKjvFu8vToB9oFNWUBiqR1AFFQujxzhBUthDe4W2ZHdrudHuC8iF",
  "key13": "46xZUGm7gwjpSJMVgDwcocPcWNUZzJdm54CJMBfWCRrY1ESwZperhKwSEWpDLJRkQ4DnW48nXqSwEQ6BAQSXHWan",
  "key14": "KRsnj4vHYgMYCfeueD9quYFhBabsGf3S7zxb7jau85uV7QxPRyMrmetjRsgCWgPNPoEcskM8BGjrvdQgxABeKSx",
  "key15": "2UjsGL9unDCDGj5W4HRHN5XSHikdTQH7f26Fqe6NvkXD8Bo4Wc5eixZv3Dce4kXtKiaEB18py3XRE9GkArfMqwL6",
  "key16": "3AsVU7jMecyaSXHGRVQtGPd2UVYHDWC1KJgFf5f9nySDMV67BaTn5L6acEU7qqqDeaB2Xqp2saVNDtrXqPTMKAY7",
  "key17": "qChsAhR5HuQJPFSii7x7mEwFmCeVrhkrBwVJ3MBK9bgWWeEUKqDp2hkF3KnhyEB9LYzyydgGhsKGwm33hUTwkmN",
  "key18": "QKgZENqypZPKbGTBjRWTvcARXryouXdR3m3G6c72twBVBmtM4DngzEdebWnWGhamdpChGaSARnmSYTYcFa2scz4",
  "key19": "Ecdw8guigMWUcEn5ScDkxuiRb7sLkJShSF6gvVBswvc1Ysa2vsDtFgJePGsPMf9k1e2DURwLjbuYqLbsTrmux4E",
  "key20": "22SC7nGN2LHr94Kacb8JrzuUMdga13AUw2TEEBtvqMVdYqXCwALA6arSzgRaVgLh7MRVzSnnHegArFExkynX9DLq",
  "key21": "4smdyhmoeU6jzjM5XvV9XjEJMRTD6raNfNYke5RJjTSD1Xp11ZyEMavSc5oSgi9rpku4FY21dUpXY4WbH9N5ZyS",
  "key22": "9QtkkSxkfTTfwsys7r7Bn2mFrGmL8BneSgFoYZTPRPx192T6vWA4Crdm1uPXawsAzCe5jPWnesYBDTnHU5maHqX",
  "key23": "3WgCR3H23kwGk7u3fWHyiYXF1VEfK6fE3ZWYhC4ieU4X1iBiTCikiZVgpW3XSHqPB5JCdLPnWFmiRSdDtspa66qf",
  "key24": "5TkscLbqZqfmC74StPpvWxb9jL9rPNqdjBzXeZfkTgD4kVXAZQSLBaGYYGBWvnF5RpAxckZL2Km7ivQas3enNQU3",
  "key25": "2ZkR4RcsQWSRkqvG3YnetuMSZBweo9Bz84su9RFDLh3Ms2fv5EgoNrE9c3KMgBLtFSJ8K8ggisxPENb9Ui7jS6d9",
  "key26": "5SReCSChLrRgdvnpDU7zZfkG5uUnfwaP1yfVhxvhK8ZLnQ5LH7rUdAw1ZK1ZJNgBk2oV2jry9hNKwVZtSSzjAC6t",
  "key27": "3PmNPUJoRB8eQurr5ZZh4JPQKn3dnUDndbChnYtEGTigcrTFmEsb6bQnwZK6r7D3DErAWUUdxSzhW8bxEkLpAWZB",
  "key28": "58f6TCVU6imJ3CdfEHBy2XDdu7HSg8CCALA1ooB6KxQHAQa4kh6mppCvA4NPCnT2dtA6ZJtKgWXepSrz6xFBZVV7",
  "key29": "5DrrpXPRMWgCee4NpHWvnHaAQh4zanfoK3bdj5ceZhgHRdY1c2THcdCMcruj4edCEExhmmoC1KDNxbBjDUGRtBdo",
  "key30": "SgoWCNhJ7JjuT9RC1gkaoaECtwzpZLFWh6go586vuXaA6N8ENhPFUePhv3Tt85qKr9gCHucSViFMboA7XYaRkaf",
  "key31": "2TnEA9GxXoPULJ6XVWgFrHSQfLxKp8ExuLNEQfW9UJqyH9gJ7Q2zZs6BYAQaVrhhjiS1tCF9ffGCY6YAfr72Xbzy",
  "key32": "Uj8MenEZnb85QLo9hcUYoACxBFUcMwnha3mZq52oWyg9UzNkXiDCcSXd9JjktyWqa23rYosY7hBrvxHmg7trMsX",
  "key33": "ZUexbw9nwgxdDd3BLHQBxrJRLtRMKqvZR2FhcoYdYSSZFVwrELiSDsVWdRRvHJmCGSvcLVw7MbbNoH7LSbbW8zD",
  "key34": "5vWEPk3mKUbfRsM6G3bNkefovhmppvnHMiu2oEA4ihoTo4mnmytdHLQNZUqUMBVK9RcpGK53k4tuLoxmW495xhno",
  "key35": "3WA1LRLNh7SpfUCLJGjDKVQ94N1C8LWDCs3ARr5CjR6cXvz7fPKtUfCvvw3DZvVtxNDQaiTg6JgNTNjSw5HU2X5N",
  "key36": "PPiRLUSRX6amZzvJxtNGE87xUU8HB5n1BLtNBWVjKEm9Yp2uXJACXoWGHbSKmJrB4Je8tapazZXxWqunHguExXe",
  "key37": "TyTWWND5LoRX3xijCWQowZKvMckknemmsmnj1f8X2D2B7kj7LPGzHhnAZ4TpzWVJvvsctJnSm9XqLTXMxRLeS67",
  "key38": "2e8zt7D3ESFCKJkBD7XRHWS3b6Nwh4T7HiMCkgM8GaaXuXJ3TUa5xapQQT8kVtQ3jcKzEd4W2NVN3E1WDLC1KT5P",
  "key39": "2yTN4nMQCfoCDiYQncKyFD6bHA8TSSwUakdKcMNg2ECw7PnPTCbBr8CxEaCEb7UUn5MSNc4cJARg7QjyyFvJrYYP",
  "key40": "36tzsuXBhyTsujVH9ki16wdsApaCAPVr3oTBSSQJjz41QooorDtjiAocHhJ1tk9f5N9Fzk57Luk87437p2ihoEz5",
  "key41": "48pUeAX5xuqmmEUdGQ18aoDFf2LkZvKEnd8kTjCJ6jzXq9ha94sBQaMqmWCVKfYcyE9rJnf2P8c1nY4R3JCFom4m",
  "key42": "3yquZqzoRBa9og6UTzwGkV7FcepYZe558VFcXXfBzTmHnF69xZCTRqQNBKRJuJ2B556pgyP6pfW7RFue2XwbjLAo",
  "key43": "4tJXfYFE9AhKJZfg4p3FWqMM1onCpPMbigqPdtppxcXFfFe8KNWuDAr7VWiWU2Kdyyg1V6qYsRFSXmmtxKDuxsqC",
  "key44": "342d4kFqTJegG1gXcdi2xKYuMWUafspy9dc7boupVmDvSkvXPzZ8ykKVAdMjnBo7NCSEWmSdtA6ubBD65NvyvJgq",
  "key45": "nYpi1g774ZuKgqGJ16ZrYES5FTTjSKLhsDVYYqNEJ3J41NSLUQoYCvgmyFxhTfKovg9u8JrCGkeFt63WRGcCu5j",
  "key46": "4XEVQJRTmxqDLpH721EEbAcGUcx8hDpF62x412yiFdE77WoHYwYMe9z72hM8U6q6NZA1DXTiMcX47qJ2UwZL1753",
  "key47": "5rhZG3jtrmp5MFhK6XdPSdaek22kxt16NTb51aDqmBqzSAvHnuTGFuRJq5oHx8w5Rk12mSzDMzaLFcHfbtHcfMN",
  "key48": "2ED5zWgSnzGm1B2NBv9cK16oYMYZB5Zd3iSYbwYU7LreqLJJUBP9abeJ5ciZSceqa9qaLaGZMhbJT8bBMvyQMieg"
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
