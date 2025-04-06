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
    "4PKq44pghRrdeuMcsvqo8aeCzdtGmBntxFnZVEoibdaGaSF3463Yqukt3Mhhs3KFFKEbrUHJ8PLYk2cPJ7B8nKWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UEmbqvtQvVz7DVjVAon1AM8vaUwdxB4yiJD4a3hr58YQ3UnouoYrswk2mJKnuZKEu1GSEBB28LMfvrSDCRKpNsf",
  "key1": "4sVDifZqrCRBVSzNor7Ms9EzLjgiN8tvhkviUrxgi5zWdXKJ7Uf4kp4phkQ56fuKXbHsCk7R529LMFp6G91bN8d3",
  "key2": "3EatFvNsfdMvSYajtrpQbqtNgC5GT8iCH8WEKnMMrkYBmsUtv4hAS9WTSenNJTjvPpXCFW5sYzmWsBueDTtDK8jW",
  "key3": "neKYSkwQRFW5hg6sbBPBMmdS6xrxL9hQADREBwGApPkjqPZiRCgpddKVbGCnKctgxhWbZx13WTLNWa61xpUfJep",
  "key4": "24LkzA5TJ23uJoLz4hByS62oo6C8wWR5BYyN32PUc15E2ugGXUhjoHQts5g8PTnmXTLJWHVedD4GPFFfkQCJPQmJ",
  "key5": "3mbyZZ1QnkLrxEbXSiDDoLznU3auBbnQjnmsqHAZ8WSJNGtfqvM6mCEr5KViKFQprkjMkSogEqWUd3DvN8gribBE",
  "key6": "3wELfZjo2kMNEpyECMFAiyt18A4vx8DiCF4VeckZYNZLuvXBp6WGkEGK2QwtZMyunM7kFxeURChAVNXijFXJB3H4",
  "key7": "4M1uHpaYc1gizT17jk7VznmbxKerXkvQeBJujFd9vPGujTEc1m8b6soVa4cQ6mjKJsbJKBZiJuLETeuAPfr2Wmit",
  "key8": "5BL7FSUG7QXvgPx8e1xQJK9M8F7CxF7S5edCVAXNkn1vE98nHFPdiZbFgy595ALMnNbnZkXLqeaMJxu3pWQ9B6DG",
  "key9": "4jB6Gafft4Jhn2MuA4fYereu7Anyj9hMooVT8A6ppoV6g4yuMJSgmbU7prHSy34mBK4FRxmvqqAEY4b8JcCzjMcP",
  "key10": "4QeMNq596XLaGPjWGKbarWCzqDAAVDKZLCSP5xDJBE6UfPrSJtREqKKp5oWurHfNfzAUEmn2aqU1TAwrtcRvb1JX",
  "key11": "c9qLeg5yJFdFstQvsQH8YdrjHr6kyvSh2sDHx6ExHxQn2ToCpeE88MoPKryRd3kLZosqger9pCxZgxiqfMczyfS",
  "key12": "4gqt3EfS7SNDsmD4Co8UA2bWeUJQSJSEqsoLHHwm2p7rYnVABXdkQSNgGWBozWVk2P3bQtP1YnyCRz7Lznv2cqZU",
  "key13": "42QLPdrNyDN7i5xoFHanfenorVrgT1zZeW8ua2AgHCJVU3VHdbqHetPtzgnmfsVRJAChtH2unkZ9FX6jUCTHiRno",
  "key14": "bPnen5y1njSAawcBSWo6DcPBNXaWUt2kyJXk8xd943VcawGZTEopYEGHs1uZMSdBiR1HxUDe6js68qzG4ykekjo",
  "key15": "5ir2G2Pp5Ra4Yp9QoTU5H2FR2cHbQKAKHuJiDRk3k2fcbaVpC2uTS739mhsUUVYhKL2kwQH5gDsX2E4gVBRoBqGX",
  "key16": "4bUFMGSLtgr2H3JpjwKu3sTn2zGwgQHFfkB2gXeztg2rPyyqKJ3uXuHFyygMGi66MsLbHYPb7oJH8mHvTNE3gTBP",
  "key17": "4V7m118E5xaaKBKcTEBtZH9GiCFmXeyHjsbGonqCvNzon3Y9Gm5Sn4XaABCitbWKX5d6GoQTtBNRZ4ypBZb196Nx",
  "key18": "3buAc8HxJkiSxVeJ8EArwV8QFLWZbNHPJ4QmAKJEqZEiZ2cmp3ALgpiHm3vJwMSxuxT5nMy9bKF4E6tgc9iVbRXK",
  "key19": "55HWCLw3YRTwj4ZgVxJx2VYz5UXYW66tQqYC5u6szM5HyNvz2E93YFMJHV3NQFEAJDyL56QzJDQ2symaTPis7bDE",
  "key20": "51nXEPsAj9M7TpeiUywCiNi8WxnTkKPbgV35g3N69GGxuMGe67LyKRgmCM9KrCn11qm2xFwspFPL8eoU7c2fALZF",
  "key21": "3DwkMehfBqBBqVN1T4HGvX3iCPpHC72X2y7gaKMKdeidxzEU9wSKEMUwaNHHWG6Q3qsjYhtfqqeJ9fQpaChpfphf",
  "key22": "5mUAwHBFSZfp6dTxc2kBjKikbQGUCvcrJqWUANaN6CQ5jfZ1rRDFKNDCiKjMRGsud89vkiSZZujY6bfAzLhreuNK",
  "key23": "38nnK6oD7PHMA4aoqC8Knr5GWgD768sNzHj13ebAubkXfVurUQzN57rQKH1NHhXpcRZWm2XzBfsNxLRhRAK93P6B",
  "key24": "2tWUFA8S8QRrwFqrh53mHR8T1EN8bZ6GUonSGBi7ospv6LJzkriSSaXrmVvzHHRi2811zyNFCsnewywwbn6z6HG8",
  "key25": "4qq13b6D1kD4Pg9szvJ1kRVBn1AdQBHY4pTLyAqFKStcraBQqTApaQQYs28iwtFe2mmGH8CA7MaHcsNp2dfXsgg9",
  "key26": "v5G9pMFNbnP7XGSQ1XXiu355fsLnpPJVn8STWP3FSBHdzYoc2rEceSGaUbTH414HMPN5NWtmPSNkGAuzHk58Y3R",
  "key27": "598rMWHCopHAqEgt5DogVvveoCiWHNWX6ZRXoNUjTTj3yBqaeHsma1Z4xGbprvAJTQGtYcqv9JNPudpt95t8koXq",
  "key28": "4vdiUASt1Em7BRSYzTeKe7EbqwcpGLhNstWfS6BPu2pwCwn3fAYVKSwSGexUS4UdHGNhJNquDHLdvMZZXnRswZrA",
  "key29": "3z77NMvFwdhNd2RdUoF1F1Lkhvh9b89XmJgxiLknxPpnM8G7gfZDxf7YRQhvcMgbZjfUAWVqWeiAxoGD8DV87Jnu",
  "key30": "52TU4EuLsrnWwdCNDU8Z3WGPHsrQ1KEKuns3ojuxX5mty4R8myWCGowvrh1WEnVLZxRRKvnPSd4Z5s8MZeZZaZBq",
  "key31": "NVi3LHE9HcVrrabDK3yppgGjPJShyh4G2kS2v6PUJwfQi257hDFL4Y9KMFmGH5cTWDAvnEwyoSvi3NeEARs9Yjx",
  "key32": "65k61R9hDJmXJxK7d1rySTPsmfzHjr1XnKjhV7bn5o2YAUkphGyeFv3iCeuMz6bX2oy2agAyf4eT5ezFX8UPnAL8",
  "key33": "2mF4BdN8bSEqdJqJSTu8Lbicw4QLjxMoviyFcFe6eBKA6BnSkmmDKnFEzCeSRofU8B3YmDTLwanvjMCZ8pyzJnCz",
  "key34": "2NakyEeQDXJgH6wWLNQpN5RsFh3ofzP3deRBpfkXWhpvda9CPVYXC3dMYv6UDj9e43RN7yXpwj9hViGNma3N9nYV",
  "key35": "7jmyq5jxwF7ckFVHZBh47JPQfuFuc59Vt5xsdG1kq6hFBsq82QYVBktVBkdoVSFEx4uBE1ewZiJ28se1mDn4nYQ",
  "key36": "2zoAHbhUHnX3cVDgq2oY8JB4t2qg6RrKwrmqunUecvmvALX6e2UjJBovT62eJXMSeSWNkFsNHub6R3bn72LdxXiA",
  "key37": "2zotX6YzU7pQvdUYmnkD6vqSAtgiCNwCJDCTLXFYV2resz6BWt7uJ8iimh6PqrrhkikWTeFY5a6XvBdUq4kAvPbG",
  "key38": "wJLpx1ye79h9GU56JvNBrfgRFXjtoS9PyueugTXUYKfqLUndsxhX8fVwcXX7rGWsyrLP6dsj7k5Eh7xZsmMNqwP",
  "key39": "2s1EJYf839gXdajXNeZZak8Efta8uyrsnS9KAk3VMc4bj8Wq8gbZ9fvyP1M49kG3umd7pBJrsPRyRzb3Tu34xK3C",
  "key40": "31njekCB2zSVo9f6ee5gyLL21T2t4v9o9sZNzNsoL8TQfLu5KTopXkuzCW5D9LLu5wwMUTNGuvgjnd2QByz9LYAs",
  "key41": "bsgf6j8zLnxn2WNTmJjQymomBsu1sQAbjtJu3PYa25yuEXDc7y3Y7h3gCSuxx5h11Ara7UqrqHcYzPrFMBHv7Co",
  "key42": "53MEhcjtaniyjkxBrKn1vbjnpdqSuKAK6ohhARwrn37tSyZNWgo7qn7HQat89fV7JfRvyXzBuvYPWneuLCYW3Trf",
  "key43": "PejV3idvu2jxa6tbGouXRzfrZaELFxH2buoTuH76Yo2xRzHUxKFyy515hhJHgFSaftuFDPRAamjJJNvvSuGypSp"
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
