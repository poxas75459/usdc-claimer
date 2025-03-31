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
    "32e4xhBqTbeY6aMaThPo1Y5b9K8oJxJ2aTxF6kJ7VjjgZNq36tcWFjVhmRLRKxuH9eRpBNGoPLNQ8UsNDxZNntwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QoUotDGvRY4f4ara1CnqzuWanbSKSYMNPs6xFrHhCAHVirFCi3JZAPVDPNn4tdY6WPYwfYeynQtfnYEfdQ4vzrV",
  "key1": "2a4T8dK39WD2fPG4Gwy41PVUrULVmuWQ684HBA7zYuRbgBZ1cGDnCLoQRrvgs7JigW9mVEkPDXhY55KySxaiZpA2",
  "key2": "5e6tukuVCR2v8wLiVQh4VCBYMWHNG1SriqkBzjBkYTDXseRMEbTEWchR1Ujt1o6v7FdisfTCZScCcjbmMvfd2VGe",
  "key3": "5UY137B5owYvibgiDGwS3JnhGyoYqXFztJZGUyiWbKTe4Hw6KSqrgpswTUbwwZsyJfWd3UbFmwzXph1b2hdNh9TN",
  "key4": "2nLnPDxQzfR2L2278L1jSeQKCvjLkJB8KVQytmv6X373vbrKZ9WzxEFm1HSoHc2pwUyDEdmaKryn3Emd6uHJvRPe",
  "key5": "5a5yuhgrQgxTCdLLUivmd5HFAU2NdsfWLknZAP76TUDuzQgLPsCzhRQRPVaz3fgzbjAzmgVCYBB1cuyakHXoxwUH",
  "key6": "zpeuYNyhKHX7HEKeoG1xRUbJCaVrefemJE8HGZ2Bgr8rMxeai9KgPQCjc4YpjY8ZXRrxMPsdJNMoBPzyEW9sgxu",
  "key7": "2DAkMQHuXCtMFrYvnoHM9K4wv7trAAdiyE6qyvb5VVZcG8f2jDXVJeacENtsX2x2184Vk99c6gYkYpfDmT9FL28i",
  "key8": "dhjqAPHT7J3TvUMKerBoB5hCXCXhQuHoG9VNW5yqYnGKM8gFQimtNGrnVT3E8frkZ4uRuHxkjCbrkETPRvLASWh",
  "key9": "2qmJNBFuC2w3wrrxq9pkeypBj9hjSwdEz6pr2u9FzVYtu9yvzux1D8ABuVvFWpjejm7Zuv8vQdyVVuKCQpaPrWAc",
  "key10": "WKo4hDr77EVnER69y76tWQX22VbJM5NnuHn7d9GKkWzAteaG6jJRjj75e63DHk8sskT5vQdECUKZYqVxaqKEsws",
  "key11": "5FKHcWfMPZa271Qwr5tJoK7KauAgFFC6aS8n7fdCYBwUqLPcZ53VGDdq9ETwtwkTCFnzwpy51mW2RRRDBXTuWam9",
  "key12": "2AiggECTiyMazdc5jjHPcc2aWSdXJq5ACP1MFuESWPxZzWCv47av1B6ePaYxtxdjAnM8nku6p4Xd9LCAve8gtmxk",
  "key13": "5ajUBPvys2oBZXKifT9E7baFN8VPdtoxYUHJa5QtWMiu3YLEAtPkGmDVnqSRvr34jeMqDhpn45ujaUEqRc3uctMt",
  "key14": "3RxvX1UoAbbwJYmEHGBoamcfHvdJAebdxJSqxNn3MWAAvhEyFpNqRJckawWLnssUGx7rVCKrCuu43pCgeHhjTqCC",
  "key15": "5U2aDWqbgHfwqfDRjixbbAgjdFd1Mi3UzBcu2vVrveX4udRYVuYNdHv2vu78TUzV2DpXiosvzNED4ohoift7KEt4",
  "key16": "4qwWazgprmqTNjx317jhb1SFTnAZmmbbkf1UgDJ6dqxQM5N2xHhGjHBLeAX5Cdy5Xc44r1HW5rMpZNzziP7ENThV",
  "key17": "YBJ7bKQ7P321ZsrMJbjDvwMVaceRLFaExGkQTQ4a5AQkvLQhVia7KLCSdzsyjAwfN1vP5bVdBKwbimRDFQZVmKw",
  "key18": "m45Nfb2VXWgeE3t9wJLXvMsfGGTAq5B1CD2qSKrgaqxJHXMsVNBd7F48EnSyza7bze53XEGDzg3KUibDpqTauMY",
  "key19": "5HMtv7Dg4JzVqkTYe8qGJzWFwmMVC6SE5psaAohHUyJsnuzg8h31EyvXWwjbfLREeka1QLMpmmEBURr3rMxFUpBK",
  "key20": "5kshBz2pwPD68tD4K1vKM3uL7N9TQkRW8aGj8188duABojxbi2kGoivjY6pz7ZV5fHC4DJiXuMLGyB1ecBNMwncQ",
  "key21": "92UZvKfSTJu6wgDJkv12YNYNwLw6RgNnn7Qc74JYbzUcEawErDtiTGDQyPe2EYGoVKXEZiK2NMaA8t7QE3rYJX8",
  "key22": "4GNng5T91iygd8q36JLZKHucjCdyiykXbKsc3qRc95JzsQ3QESgMjhMxZddDQ7AD8rbNHq5cZQAupZRgynu7w89h",
  "key23": "2dWBFRtEEMqmeK6Xf8imQUZ3iGQdLTkGiKHPAZKaHJTj1oNN28XKBBZGh6oC7UuQXmuP1x9wKbVMMBNZbXELrLVm",
  "key24": "4JtiYmhZchZcbgS2JxhYzgniLBA1pfpLYCvYWitcwaNsMZQ7aTgou2cn1moAt5j5awpAyLSSJod2nmTVXHD2G7mX",
  "key25": "4QTAxuh9fww4mnqHKEDS7CzyhVZRPS3Yg5pdZwAMt3dnw6eY2eypKip12baXrpwjVNAb9zGrJSaC3SqjrrpG799K",
  "key26": "5qRRzVoYBZiot7Ev1WPwtrAuiNmbVNYFuA4RuDMdeXebeSApLYET1BcusM6p1zPEUNhxLryP5jLSpGm2z7eF8kFk",
  "key27": "YWFNsDA13UXdPcAXwYwj9TsnCqZ2wobkoXUoh926zXbfjDGB6Y6iaVAjHfYeqK3JqdMLDD3q9aE4MVLU49xKsgU",
  "key28": "2EhtUyNivhtGKb6qmh2FwhgmGsBLDLuFerbJdQXPs5L79ryXkFSb7XUw6YP9W2vprZgpUgMUuFGiQ5fmsrNx1VWu",
  "key29": "3i32dkEf1ThEmNGEUkJaquT4DV5LPb1dDTmu59ZtGpwbVgHgtgvMqciwdMsXDLySg8cetG2kLARfQ6iMQjTCLqm6",
  "key30": "Na58ganbMCUqKUuwCtzMA36ifaxFW4SPMgwHXhcGriamKdgf2oJZ3YopsaxUpBF3XwwiZRnRcu5JPBmzhxQyY3W",
  "key31": "63y3RcL8NLyn46UAiwD5LEQrAu4oDLPTHjmYqu8K9YLk2hGyUE7ZxzxdMHqmmTeP8roPJtpfTe762h5mX3NjaYmf",
  "key32": "2937dp6JaJSpXnZ4f2Sa5Zscxz9nrVgnzTypj2XipvifQpj7sH3g2hnERGEy2zdiwAzyHrUqrHZpiL8ztANfF9Vj",
  "key33": "49kkgtjqNvywa3LhxRbf5PfGqEi6wCAMu7Qq6rp56Y1S5qXTF8Fvtrbi9HnnSQpmnngrdFcRf3NQ9xTtecJVG3NX",
  "key34": "123ZZwucsntiPeV5NG1eiAje2JmGZ8pgLnckFSjpPtdgBXkDUraWMb3AP24Yqqf4Jx4WQ7ZNzCS2rg6c17pPoj6K",
  "key35": "4kBFbEbYWtt7wnT8kmKFeYtBDDSHmySmDt9HcHJ74aLrTq87iYJjmHDCwVHupx3PYAXVxzyxGJExiEQ12wnfzR9d",
  "key36": "pcgxnL5eUJPbGZ12qBGzGUpafZNJfXh8Jtog8JHgxM9cV6FyYbqaDHjkYkHLN2zsbUMVnmrQGLKv8MnNxECDUF4",
  "key37": "cnL3ga76cCW1KebttMip8coChzkcWTUDpeupQEpJRsDJFTbcyx1KL38fQb6fWSBWFvtXEUcWzVi8C4Y1SQCRdsH",
  "key38": "51axhjVJj99XMHzxCsuAsd9jHUSGSF3nfhbAHBbYfWwAqBowtFjPbtZt9jUitP7x5jcYhN1PmFgCD6QRZjtTEAKK",
  "key39": "5D9iUEqqtQLwE1XVWVBppfNro29AcBSAnq2zchC3Q9MmqJVSNcZea6rw4VewHLmV3HVpyaxX6a9nSKJP4iosFdBU",
  "key40": "2aU9CAk4FzeThWAUALVaxsA4tAGdsPicGagdk2gJQsGBKnH4F5PLZRiSPHTQotWbvGM1jzgPBWHUUpTNQPiAEuhk",
  "key41": "victQpM7mujCPiTwyra8MKu9XjXGMvGZ9uXzL6VXayHDRsN2y9vKRU3rfRVMZwUiCjcgfDKuwc2t2DTac12BkB6",
  "key42": "4Cm3wTH83AWaxo7CB8atMSv3tu4DviT5Jj2XJYV4rgHjB2pVLqU1EkrCy6XxZXuxWTXwqT431SWKPSdHt42Vtuf3",
  "key43": "65v6tQaVZg1r3ytDvFqqvfNj6xDNRqBmuMFZMxGh7CbtdYLj6X2ZE8NHizx7WWjCGRWTCuRJGQdZtmBWrxU11XQ5",
  "key44": "58zZQNb6P7v6FBkgWRqpGSfX7dh4Xv9xn87G8J9Hq8Y8G5Qbv86oubxbxdkBAKzNqm8A5bWb4gAbEuu3uMgxELNJ"
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
