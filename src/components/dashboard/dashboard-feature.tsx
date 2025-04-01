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
    "5oguBW8EfkngwanJZTS2AKHfBs4gzSdsCMbC2WEyLRonfpDwVmfGtVd1iMaiwHjdcUCyAjhuXCnaajR6gmZirWwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28iRGMYYi18VsEJzQa4yvvFCUfYpF7dW3mYWLF46thNeU3Cv5m9SXVt4KgrkBqWJU4sZxmJnFqrTPtF9YNWs2dvb",
  "key1": "41Hay4DXbQEv8wdZBMsUUUT8APdMDTpQUXffyftArMW7J8BMmRAVtoVJY1hJzCeM8c5dx6dgiKoRVZPxKhHcxyzR",
  "key2": "2dCh5y8ULseE5oCFUfuz2M1tHuK6TVvSbvJfoTzLhTVwsn4RCXov3Gd8XCj4Vt3RLPjFgY6KEX1LE5jvjR6GXjWw",
  "key3": "5JMduAEp3EoDgegdrFmL62a4oyMoYJ2Jy9S1qG7PCf2XkAtVLNSFji81siHfVaSMfig5LcyAx5dfYvCVQdmZ9xiw",
  "key4": "3K6vg9PhJTgwV7CGhn7hXLUgCpNLdwb5jPhataBwiD7NFrShcuiy9BxAnHQGNqb3NtjYNKvtz8QXinr8LR6VM3fr",
  "key5": "iavRXaBrQwu8v8ZPzLnyZhnQUV7aTDSdrTvqkraaFpwukcMV6uisZ3jz7e69CzPk5uDGbXAaLZTSHG8UTpoLTAV",
  "key6": "39sBQqy7ZBMoVckHUf1pu4AHErQeSXWvQUVDUrBs8EwTuFj6mWRroky9iLJhg4Z4x3KBvktyFhK4ewkdhWDaquR2",
  "key7": "5X7gZa2g4a3b6UPewD5Qov6sYFc2TwvtLVsSg8a9XY6z4fwpPsKUSfXddwUy5WQbZifxVJ1P8qgRjr8AZtnkA4WY",
  "key8": "442KQyMFmPNPBwSFSL9mjx622Nxh2KDD8j6rPsywrSwT9wkp8N6muic9YZ3ReowZqw21dfyf6NUw6ehMd8it1Ccq",
  "key9": "2iwwGF24UfJGfsBFoN4cqsY3F2E7iaTsXcq2RC8YM4jCfPmMfZdyDPjHDGxowZGpU6gjSzVyjroXWJxh6XYcDu1e",
  "key10": "2jzZdo4Fyh8owA9ZepLu6Hwf3Z6ou8ro6hzaEFiDNziGa5RunE8Zict5kUJcKyP35pgY4zKJfGDEB9oSZH9eP8k",
  "key11": "FTBYMTg28EmyiGrSdS8pXjSkVcYam5USKL24Ld5aWUi4i1reoknBhMnL6fYAcDbBwM37AHMbvPCK96HMSzMY93F",
  "key12": "5XJcMiEy7oZRQDLsRhhZF3QYDrpe5jHzsgRNdPpUkzc3aqDPfy9GTSsfZrRhQKm9iTfvXntAt72oZr7AcgQxZA3L",
  "key13": "3ZYshX8eKUrWQn7TJkpu48hvbGqh5adBLmt4fWJmLUVncZ2CyMrapYJMM5BaVKE9oZbAriNgFnCMZhvjFg1YyD5K",
  "key14": "2ocv9QJ7y3jVe9FMZD6QkveJiPMqtm8rVUQso33wk39u3nXK1wGf7dWgWUKtnBvdi4i3M7Q5Da3sa4Vz7vFCv7y",
  "key15": "5q1Kdcyd3zVa8yAgAntn1TWyadVdNZAurX34n7LUTLM6dkBp5dMXEuWCnYSnJXTy77xQEcoWrvGXUZYGiHCcNfWU",
  "key16": "4VGYa36ZYc9a9MkbjhvorwzJ5x9sp5ruWJiJ7Q2Hp72LJjvx6YCGpK2eH9N8GDkjJFRf44hUbdzRxao8wZxKwufP",
  "key17": "2RSUBQyWJrndjFKMKxNyfrdQjPryodX9MBnMuiM6kwu5DzZeqNrx8zJcrszr7BbVZhBNZD2yYyogtjVL3CsJ45HB",
  "key18": "3J6kxocVwqGb7cQGPQxX5cUViS8D4uSw12kBBxXCJteSNNseQBruFBuN8q9axudpV2qqsQKhMGbaPoZfc8Z1JkY2",
  "key19": "4GacQ6gRBk6wwBkykvG1Bjx626U9ePnoFTEzMiY6pA4AL3rvxiS3B2fYp2G38x7eXTmNo4m6ZhSNyYhjy5HezQhA",
  "key20": "3vZu52poBqdPYHyYhNZVXHqp25pvpH7BqZxvGgmuBjAbAB29QGetd8gAuga7abdnQPxe5pf4hQNcTHE244HSnqzY",
  "key21": "9r8E5iRcMy4Ym2NPA8VZfFADsBhQswu1ArtXaRGgDGgFvhPQTjSB2wn3hybhyu5hu115HhFug3ghvq3AuTagteP",
  "key22": "5pL9neUmsEPLeuRMpUR9bKo6f8XKCAFB4f1r8bAjFHSbh83SKGVV26j1wLfCg3Yx2XFNJXuCz4WRqLnDVmN63BvK",
  "key23": "48qv1Pcn37KKsTYmHkoNmnDdDBqhixkmHS5gQ4SDhHE3FGyBrQsVScUFyoBySy96D2dEcspUFBYVL72dGXx79UNN",
  "key24": "1ETSinCvb7jkQPd6gyMfxJsW4e5AZETh6YonpUAnumk94nDjaFq574PaY1s8jbmsQ3wuVZtgsmDRpKyHqAF2yay",
  "key25": "5cGJLioJnta9FBVr8Rm69hYyDtwtNiDFLJ66mFCtrDrn6f1jmhgxjWichzKTJvkhhrEkm6rQSZmiAZyihRHfSHEZ",
  "key26": "5ZhJ2fhMBZqbVUL9Q4SW4Dpzmeya6tLDUKqRGssFnkuDqvtR1GbCVRYfUxeHyqxN12hWzkpiUiW3k8RUWCyjPDAG",
  "key27": "4kPucb9UkweAzggEKz7csC75ihJ8L6ZqxsqspDaMLhERgDMmz9Kmw7dmTH3p4hm6f6CzUYAC9srW3MpHzb8bz5CA",
  "key28": "5bRfQ7eiYTmHrj4jofWK6WUVAzCMSnktJkRp9ECr67kA8kEcCjL7NWAdR5G41C2VJ4ba7LK6pjGdSSKMgpW9wMKb",
  "key29": "25wf6N2rEXTJKLiN9HAcE3VBdcWB8iP1aAjD8bF6fYq2bThxCXNubg1FqJwKGdtpguMYEpT8StoSLEGTeKS8vizd",
  "key30": "3vFSgyHZAhoUsGdX6RYSsivnKLM8g32sGR4Y6cP7f5QNM4LprHgdN2vXE6ih7diEZYAAZmYET9tSvWyaSM1nnJm5",
  "key31": "2aLPKoAvHneQwVZNZCw7v89PC26rEbVnGGwSLu5CAmTHzsrd2jANETdtNugXsX4FLqNUHuL54hCXx4MxnR6msA2f",
  "key32": "2R7qjXW5ZtgZ6hzbGiPnYxEgDncY3dVDT4J1GGffeA4tPi7onusGN8f3snTFLYguYpt1C3JaQkPJxTEdJucpYNmb",
  "key33": "YQAsQWSGkfUXWN1nPZt9qek3cquLFP9AWy7fXbQWYWcK5qwARZjTjNxkUoDTLrt1yVDJPbsYJbeEfotKxtCMVAW",
  "key34": "VNQKNN7qHPZa8QgCobEJbCwBMpViuorrJacbKgkthsdMXZHPFxsnbcqG43wbFxshyHP3ULw6pmKdHxC6fbMJzR2",
  "key35": "5PXA9uM2Tezug37kke5mE7fMqoJVDeqqdBKtLfN7ZAmrVpQ3GDiioWjbrYYNX9XUfVQKkcXuyXPKn1GFjgTPmMBA",
  "key36": "XybAhk1wFR2vsiJjFpDhDeX9tn9vfEppxVmbKcBNqQfPAgVGu8gxciPCLMzeqhRmFwMbdMKR562FEekZPZ7nfuy",
  "key37": "5rYqG4L3h4tHypgsBpdUhAmJqP2PzmvqreeV2kfkGizpHFC3zUjor2qmNXjzAe2aW9wwRE1PrzfvL9RHVS71LWK4",
  "key38": "2WBiTG2EXQgUNv1QbDecvdTVRfrF48MefY94P9Y7Ap5wwAHGVZnkBHfWXdVLFfbHn9TDWDC8NtN5jGRAkNSmupjh",
  "key39": "5Ydjy8oNgXkLXCrKbMUEa9roqNfWMUiH7emKs7pqsvmHPtAKznLNXXZ1rfHoz86gXKbhdtXqV8KWxeM4sHKpyN3H",
  "key40": "5rijnyZ5xwFEMYDeLYZPLwmXr1P8RTTuQzLDJJWjn9J7uHhXkixHT9so4EtrTSCzbgQqNHgK3f8YcTo8Hg1LhqSG"
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
