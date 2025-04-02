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
    "29KLTgjgcHnzT3vMxzffeL23wVtmQFodnFF56x2uwtWaG8fYHyA6DVGX3eqWw7mLAWrAqLfCG6mtC7RkizTPBTNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tS27k4Qy8zqZBtDquNB45oqywo7CgQwGzawBBouq35Ygj7dNis8VxpLZakxFgcuTuY8HETPNsSLYGA7STZ3QdSy",
  "key1": "3ERnwxG5mzC3qGC8dcomgF2ek9FKvr1n7JPe86d7THQPFV6uycvcL12P5oRSUAKuvmHiWeX4DSwFRt2Mk43zUUdN",
  "key2": "SdYCf5Rv6KqjjV6nuzxbQRRnr2iXWk2bn7NAsowrkXbQaVqNxSgxT7k6SpF8WEgJ7kezLLsvvMDLyhLotS3N9N6",
  "key3": "515aaB46u8n6C6TGMGvXrbSyDmyWNoJiLDzKb5AZG7AU8rhzzDn7RvNDTYj4sgDiL3BCnb34hbKAumG78SRrkN4U",
  "key4": "nHXhP8WxmiUgmEQQHL8cKWsp6nzWEAnu5W3tZ55RagKxEXX6Hk8RHiwzy11vfvVTqjBTwnnQjHrEYFPxKqmAxZQ",
  "key5": "4cHmchqGnG84iEgY1RZgNZY4piKhTMMQXybwgTDogo8hkxGnapMGbcF29VRjhzc8zHwnat151QsinLmbbXTpLwHP",
  "key6": "3wKem8Xnn2bLeEzoB3PfxA1jp5uE8w86RR2x28NugzFo35XSptZTkqE1w5eXxVDyFTosnWfLHb5rzVr3cYyQP7kq",
  "key7": "4VKETYuEZktNqQTQegXYWNZXGbZAWRzHLAE2zjFw2jBUQudXCgHfxZ6hMwQ6yM3t21qQxgB8zdA9JE5mgHakaym4",
  "key8": "5KGgnJq4DiTgnunQ8x8ufbiQJ4f2pXEvkmwRHDzFG8zBF4eyZj2Y8cNHBfqctyeCnYdPYgfYF2oXodiysMEwPDPU",
  "key9": "5PTcjx2FBSHXKPCPJkb6Dk1TqoLqpBEuY4Yary4YZvUeT4yP9kWeaNFHC2qCmu9NC3Ln4TgsUDXU7Ec91Td3Uq4c",
  "key10": "4PRVzF4krgkuWBkg3MoR28yFXka8AUwvvaGV2FFQYUnzbf6bVd2iM6jdyu2N4T7iPxGsqzhE3UXzHv8jNG2qQqgp",
  "key11": "2i5xyPCE5XEu5grB4ypp3Ywxb3KXe9c6J7CD8kWt9YFpeyh2wM1n623y4BYehjxrXCwPT4qPAy19FiSGdJ3ZGfbE",
  "key12": "5WEpM519sSzTJo8bu91zVC4TBbnMsycFt8mSBgBeLHaZ6WLY2jW565ibbycAxERwt2J8v4vrYqVo9Y8Y1o1Eajsr",
  "key13": "3fqutdt6hsm8tauME7Yzk7m8gUxe2itpg1UpYF6Q6rB9NF3eSxEKzZBgTRKvrk9pETLDKEBthVZ8QQmY2iRHTTbu",
  "key14": "5DrgbMZVBcQvZMuFWv7qjqGsEMNqBEABUPaK9cGGksKXptYo2VxazGTKHgPSNWAbZzutwf6kbohHNUoD2BVJVA3d",
  "key15": "hbthewLivbhrbBLMYtkkeSR55dXvtsQK4r6EQ3hyMxoh6Q88bifYJJqFt8i2T6r3Zbd3zJ2EEH2wWKxgKGFF4yr",
  "key16": "rdYVJWx92p6rj3RKMUChhPdbfpWTqKqwQ4YBngm7Qo7TYNh7g4LWTaUQGPao5A3pYNBqkzLuy1BM9hWb8Xukr9h",
  "key17": "iUzebwgtEY3cAue8ESxNqSkTstPkK9ZGxDpWH4hzUWvoeXos4RkmfdwrvBRf5HZC9RP6BUeUK3ksXGG5m6rMj8H",
  "key18": "TGowDkkDA1NW3NQ8rnrgN7FDPt9BXye3wL471CySKhuwtMYVw3rnqUzRBo8CR26FRcPK9YumDc2nRCTH5fDrbCg",
  "key19": "c64NNLXgmtr2BYWami9vQnjt3xUHVAW3fPPs1rvfpCrzDNjf6XCBTh17JH575R3C1Z7aucT6NcJv7uUEboQgrk3",
  "key20": "DscU2HjRFnJsgPB9QUvf3zj3GBnrtoQAudfGfNDkwLy3gYrw8CEHGtxCzvzRt7rQyGq8MrfCd7DQYMeQzMun2c5",
  "key21": "5sVmmUQp2ErQFJV5Mg2SCzt2RmqdEhoonaEcacd3piwiUqojNi24vrQcAMXbrY8mkAaFAxdbgg5zicbHY6HpVECB",
  "key22": "4h5M5eFuBXKu2zwdRiTLXdxxV58dXTGQKyuH7NPz6SLkbBK8FDN8tCEPdR9JB6miW5aXyyazT2ZqSP6UksYuTCQB",
  "key23": "KNSBxSFvghdgnZhhJt18TJseV3SC249yUipDqMPbDooPJLAZtnzu65Y49B43rM4nNm8QySEGjmQeuS51kfaqxcm",
  "key24": "nDqTvzoymkXAZyK4mYaJD3nAbxK27CNJNDgkbEBC46ksV2abQqG1zqG38dtfXLUR5WHrwYeGEKZiTCUEyZprrpz",
  "key25": "UgMysxU3aD84hrM28XfKAdb92kdCVQsbrwmfUf57oauXQsFexhe97TsGTcydeA2xwxU7HskyLvRGVMaGqN6Kxh7",
  "key26": "3oR8fHSFgmx8apmqwhwLRAX22iZ93PCk19goajmN7qt17uGHCzE73Tk8dMzFibfE5p1NXWJp9kqWothu2r9hLmFg",
  "key27": "4ZXm4dbBgDwP42JVTbJbtDua6KZze5SXaKtzNKHGrogtB7oG4jTE1nTGLLLUehvkL6DZDNCKfTrsu7kNZYv1iWD3",
  "key28": "2gqhgBJLdp5xqvhmeQe6E4yw38QgKDZ3P5rHF3d8fkYxSRwkkj3RcssaayJjQK2RMXxX8W2CmcNQN3f2stWR7oRi",
  "key29": "5KounErKR9LgJzHBK9B3okL2yLjhqDdxZm7ruA3LQK9nFgiPuh2NVN8bxdDjMhTMixZg5Lr4mYmtE1YhKwc2xL1d",
  "key30": "4fqjev1kqWg5C99d2hHH2GdUPvWbeWHfVT5ndUcotKLvYMyeeKbxHKCQJKX271yrogaXLVRBFp71Zvk9vtQdfwJW",
  "key31": "3ut8fGST12A3zzMwmNgeaA6xuJECXsK2zh1Wpnekbho9HLt9P3y3yPRiamCSvfAGeX8SiwyQsooPWyLmKpWCq4Dz",
  "key32": "2zvdcyDisqmS3ep37WKJYGVbVwDK1StHmqscyUmdrnGYUXcmAvbQtm3xTrsVYC3g7P7wFKgDEd6Z4mL9EgAzQsM5",
  "key33": "2tLV37spMajxUQP3uGdcWZnGhEE6v62XnV6y256JQqVRvr2vtSd4VqUnyFEKrjButHJ78jPedCCrV7tGzRaXyEz2",
  "key34": "2zG7Jz35icY7DTyMVJMjJGZ3V3Z4hdbVQ7hAozKpypNsvtVPyaNdso78FjrtK3AuNHVvyQrJPFSG16kJSt7138o2",
  "key35": "5AmgKpdjbZCbTUUJhyCfgFmrYYpo2XoCGeCA3yjaX9c8F9ZRZ4MVgH7KXiooKcU8RrTFRiMC9QGqZfSHochwDBrg",
  "key36": "4cqPtMEvg7QYdXJ4SdjXH9nCMptJScwe9CXgvGuxgz6VHyL2KrbZaUVhYYpWh2g7MyBwp7K7kCBJAS7RnPpwhJXW",
  "key37": "dFRJ9FJuEZE3ySQkXVhQk1jbpdstLNyo1koJESqxUWvRsj4a8pfhisw5G1gr2hcu5Buy4eRZSsXpUd1C6PgQLyi"
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
