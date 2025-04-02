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
    "33Y7NBEJbgs27xUCHGG2CDkT6o7fnEZ7YCFQT3b75R5UFq9ZCtUzJ9kbs4YaUbi2Pgz3i717xYDzcANnqznG3sze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CWjTuovoqn9mqZHQoQq7LPRRhCPoTkcrPUwNJQN6dsDqBPsbk83NgLz6jHUYumM3abez7ii8gJ2v9vnFp4c4rVU",
  "key1": "2pLS73uQXwrxJQW4ezT658cr4zt3HwDnN1p5M8dqhQ7RegHcQibkccQXpaTMxVKP7BkggvswxV3Zmgsjuo17RG7A",
  "key2": "356KRnRgcSKFAHvY9LAkTtUhNpfSa4Tp6h5yciFqgBQ3pRYztbAk7UaMwzdCFQSDDgij7Ffcyx8U7XnU7Qond4rg",
  "key3": "5u3Vjo83zcCmDmum1BfsaWtvZLvnhkw1XoygLsX4aAJLxeutthaJeFJni8q5HvizMKUfWrtxgc5qfsRpidX7BC4t",
  "key4": "ahVBMetLckaZVUuueYFn2LuAVx7g95PYw3LLQJd6i1QKATnAeecQyZTZ95DCrpJLE8SE6LxKk5aqX8AvvMguVZd",
  "key5": "4fNknSoC7tijFgrZLHNB2hq2RJAfEy3Saa3gTcRnfyKioB4t5rDvk3PKxLmiY92bzSTWzvqG7TAv1o2P9tPXeC3h",
  "key6": "63WzdJrLc1Rkfs8UgSrqX8Ci9rft687CLpZtniJHmutGkT7L8S4niYfAEM4gNDJBZ9XEAdBufcQq99fLb9vVcFRL",
  "key7": "2rKDLY9wUKBTXG4eShna9dknzY2CHwiW9XBwjBGvBmHvpyUv7b7yiWC8bZUvRkm8Y8L5mR2eXyCFJjBRSENHpsA",
  "key8": "G9ubbMTpuEFRRns4yzrCmj9TeQP1rK7hVakcB3bz8BXKwx9mwTkhnc1mCSbEHmZuAoAWTUXsaGXUc8Z5QUNwjjt",
  "key9": "gauQLLGmiaNBJgUt56syhELfSGLtBw1YAv1P1X6zvXfPPP5fLw73c6LJCxXwv7FH4YKGFoasgwU2fmxpUceCNU5",
  "key10": "CydjJJ9kfJ5unibX78ceJP8SBGKxjmGL13SuEYSpL2ZVacRraT9yFXYgC7mqr9KfeAX63U9RaHAQzMVGnhFN83K",
  "key11": "4ST9euoDSQD6uMNzT9kdKDm3YrLVyWXhm5gyx9KTUUvoj1MWu9YNELnw1e6mVse9fPXKqSeZi2hYxRK1yVWYnMyS",
  "key12": "5XJ3aNN7pQRZHJAsCdJW5E5FmbERhKnevU34u5cEBiPLpjyN15taS5e9inegQKfjbhomZvVgnhsayWGbijGdrAj2",
  "key13": "5f75j6SuxfGnEeHyaZUoav7aDhfvR5g672fG4X7opeHH5XWYKPRLLHEEfpKQ2KDt7gBbEjd37FssQunS5nZb8hKk",
  "key14": "3RgSonbWEEvCpwL1X5SY32U1YgZrPLRGda1DJmYQBh8yx3ZnKLDm3Z8tpQ5hyczXEbrcchqZHkuRsp5YxwpUNHQ4",
  "key15": "5aS4Yh1ZPAMwhGFdb38FMzTbR9CywDq3FBnWL6Lvejpq5d8yNg1SeaZwaY68qaLvR52mLvtLNx7Dyj8DGKeCVqJx",
  "key16": "3oXtFYKLbaE4PQfiFTqt31zZAsPWyVu1NhbeJs5kmezZEAH6L155mVph55AwUUhzXejh5zpH6PawPr1pU1u83F3U",
  "key17": "3TLUSszbPgVVAZaJg8UoEepJpgL1jfDz7BeP4YTbTDPxWcXSD85nzSYgADB9k2YqrU1xW56Auiz2WrRj3BvQdJf5",
  "key18": "5qHCceZtCajyske9QVAP1BcaUBnsdaWp4HEZBNE3Xkn155GEwQRksWzKoSkkRJKPy13jBjrbWNzMt1zhkWhtQeR",
  "key19": "uCrL5SvTsChdzpvNJNXygwrUMXHPagnoDdrzwHfoqBocmcrd562TD5SaasHNTRf13tsEfY8xUY1pSBz3LGSCdBX",
  "key20": "62d6d4euaCsvayFKZmZRDCj18DhRZSBUjqARWgdSRDg5riVtAGdv8N5JZ1BZr6X7XcjhULHEy19s1JKL4yii7BY6",
  "key21": "4C5ugMH1xdihFwMaWLFZk9P4WP2g3QbVo1QVJ5jZDZdGoB26ucNLqFamXDYpCamqwobCn3Lycns69aBbWZqfsRpg",
  "key22": "65RcYxzSQ85vaJ3yPq2DWXrGqRAsaqkqbvy4Fr8KXXBU2fWtLDZ7DkEaEJM4BE8FdsgsRkKmksoioTF1igCLMFXB",
  "key23": "4mciq9unDWNPsS8FEk1wQ3PVDoUs3zizp63udqwewV5Ya25r3DJ3Pafk4AvTYySYk4vY5Zf6FT9Fj4TVr4gyDGQP",
  "key24": "39Us9sxYRiESgPK3dLR7vaQPCZ2waCFs27LGhXsVekB2v9YcYMAx6N1vH9qL71jYUwucfDiTagTdSyEnTRSFsuQo",
  "key25": "4dEX9NPZEZdYv5xKzmpoPaAfrK6yhPdEjipCvGrY2isFFFnZxKtM1LGgeaiM2WiuN8buJyyhrfXT8fp2nRRTWqxj",
  "key26": "WuaV1hxjeDQE7t1XfXfr2JuA6jJcz2jgGmbBNWfEwXee5KKHHfxYKas7UrUWEeG4XD9YCd8y3NsqFtB7z9q8PvB",
  "key27": "4nCbywrGgrzTjmRhT4qrJa8gKeXSS2d8BeZMzbc98SyX4pCg8nTwpdoTNmkaaFJ4F9BT3oYM4oc55bRSPtNakxVY",
  "key28": "2TcG4UQ7ECS79pdA2mX1S9R6Kp5Ab5Lzmzn9NEchHWnCubVgRz2fk3idx6DFb5AzoxpxwAmupry3afeP9wFHd6qn",
  "key29": "4ZYuGAYDVTvpw6De8Bf2ftFN4LoVXTEDa4u1oDyNSGNc4JZoueyG1vG2fFiKNr8LFF3aCyxP97aUfTvMusU26CMh",
  "key30": "fjsHwiBTgPea1Jtsnm7JTdTyCyqdwE7U1n1DbsqfTWmfZ98wdG84gx3e9M7VLDVNLNMWuWfLUhSSquegTjpd1um",
  "key31": "56qZhebW18sp1zbUenkhHRmt783ZK87TdK4HcgxAyiQFXWcgJqJRCfTwk5QNk9N6mGR8XDmyb7x8LALTVddTFBjW",
  "key32": "4FNkJY4E6zoxGHTq4Euax5YNkwEmwBbwSUguyfKL4nTYAoL2Zb6GkeyfPU5LwLhwKFPAvTHTEJAD9T2S8dhHx54K",
  "key33": "3YJx6HkjwY8Sih5WVyDZoLRwUYXSXGEp7j4BqEE4rpn7kbKNbYau8bNw3pGZcJXHDLk7NXYGaWFpDLTrhw6GwEi",
  "key34": "2PbdAZaowVDp9jp1zc4DmfYcxv6H8jSJK7BpC4Bw5RkrSGYkzseovjAxNFsAUUtwtTopkKftkgskWTAhpJHSohJ3",
  "key35": "4SP8hj5nX45e3hVgXJ3rUXyeUXziBcQGDioL2C8PMKXzdj9Sk7Re9zjcem1jJTNvyuERzy4xAhsssTa8nmPvvpZN",
  "key36": "4jhJVM766oG6y3vf61Uy3cy8NtSn2Yx3PC55j5AXYR7cQiDH2vHWyyLGLk1nTWnAjJ5jnNv6eiuwkazJhEaweXbd",
  "key37": "24P4cRhNThhKVypXmQ7edc7LT5EwT9HoEWPhwuMpVJ4L6xcsmNWqkZKSmeRUDAEfV2r6XVUJFJXcABS74Yyayvys",
  "key38": "3TG8zYp2SQ5rj4tQStMfXqVeKsvMt9Uqwkj1a9YtdJQdGu94EEddYckXMwrNpgKWVCxaRRPj9EpLR4zNs1FigPMj",
  "key39": "3qGwr6fchVDuVj31JCm6xfX9WAFruoLvBAEbyJDWvEeybLghgrNQ7MY6AyGWrSUxchj1Y4wMAwkVVB7MzswnLWn8",
  "key40": "56Yu8jF1H1MwBWRZCUyBQA5892pEgUMpf9F3kCDQjPHowNXmsVM7GQ6QcnuaCXuoB4VwSo3M1VUrv47pj8GMc2Mp",
  "key41": "cUgCqFTMSEJHq9chx1qdznu5MrK9vXq8RRApP29QYL2AaXqXZtJWjEUJhpAgnu6ekQFHA2dRiNkSTSngYkDhCn1",
  "key42": "5eP6iqPtqyDMYAumwfqaevDf1kGHhwYBC1VXD5W2Tzr4K9SCvcJ17nK111VAjgPmUJSE1VBjx7nPwiz3TahXQhes",
  "key43": "5uv4q9FVQcqYCUSBN7FPZApsXCXdHyePnrqgRdrubf8r4ff7VKn3JsnS1CgJuo24qmdp3X9eaSbAWo9wyF6VAbTo",
  "key44": "TPJi1WmdzRx3TL7KjvR9wDdLc888jprbhhbRmjuL7FmejiKgBWRXzTn1wyX2uZW6GxFJB2zvD4v9jfxLmKnpZkS",
  "key45": "EsaR4881MKtWXwpL2smiXwjAPQr4mZz48fEniSic8PENbSt28miWzkHBaMrnTPV72vK3aMn13tBUPpgEWzZs6Lc",
  "key46": "5ee2KwzsmBAnJ9qGbj3FDStNLE94SFWmPqHy8Ey3qKGRfXA9QNYGNGzt2UeujUE5Y1YyrDU9BYtvHCcTZ2RuEkq",
  "key47": "3v93zAd2rRzg3hWp4c1f8PuCReEYia7C7N5to2WRfgf2twNRxg3wTB664d2H1h66Ms93jfvNrREN7DpR6PaykGcr",
  "key48": "2Q5THL3UgTDyh1o4jeiqL2BieUoF54rMhuqGXpLr6ELf4rV52ptsNJzViEEzi1XYvcBeHazhu7uiyskRA7EcJR4w",
  "key49": "32noFkK5vSUbKVU9kMxjZUUZgwjc2wFxbSTpPPxzLTrvjLyc38Sz9T4Y9BZjBaoQHxRpR4r6SwQEL33XjxGPzyrN"
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
