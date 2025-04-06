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
    "3gXySh8guQiAmkXrGARFp7XuWrY3nz1Qkc3xJ4iGeUDy8jCHTkGFk6QBReBpfoft9m7vg3voixEiutHFkRDiz12B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dqk9UwptE8BmT1ndz7okAxTDh3xiMB7mE3TbYqGZKeWZR3pGmacoEjeZWvSzMjGm8Upc8VQ7YqNkak3LCwqJWQu",
  "key1": "5ueXqxxiHkd1kJvq52JWXSbVTQ6cXGGGTGxVVsv9B8TETZ6kXLZU5DRdxn5pX9eeMMvDXxd5YRgXuiscPHfJA9nT",
  "key2": "4YQ75MqzrW6gPmAfDbAiHGGoKaWfjPjJdNadP84P2yG1qJzK4YhyM4BsqSAh7EeJTu7QAeXqW2LmvTUrwkgCf3nC",
  "key3": "4Nu878AAhdnnmdurocqZZpAxic9eFoQ55KjXEbRHkLDMTsQhjARegYFR1ePb3vPfFSHQMvu8sMEQcr9sJKbf8qpj",
  "key4": "TDqPBCjRVmBT4bBNdeRJbUBQJV8XWypwarfGkxzFGiT4pb8W5z72tZQCV6NTf1BsXfC1BrFbk3LgmMubcvnNX7v",
  "key5": "65YrCUoCgemfeanaajjQXTwpCwJ3sFoSS68vuoXQakaWMHJHXMmkzXVBPn54VqTLU6M2XGyVAFQvTuXWgtX7zT5a",
  "key6": "3XfY6DnQfaQCQQzn4dhxcWHVW5Ame2BLEcKcVRwZJf97gMykvXQDJZGY5BEP5prMh1ukGrR2zu43RS11kHkD7DJp",
  "key7": "3LMJy8C3Gt23Ae6hb623Mdb8xhaq4bXMhLP3yS1mAohzas9UzDH3va8zAo7dYaDyc4ARJVNWgB3M6gTGMML5KiCg",
  "key8": "4aAzGKcnYcQYdEuY8CdX8cwwqc7ayypQTzutDFPPc1n19Q6yeYywQWHwBQuLhAXeMj1uS6Sss45q64dU3cBXgLWg",
  "key9": "UCCyvXBntCZmA2yAEoVL2p5YKZjxBqRWs5i6XVUKpRAzAgTXosMxtz8uqnzA9NLMxcQBWM8jfMuy4tF6CFoyo7u",
  "key10": "2bLLjHfwusHSPeX2cp9zLcFMfCK4hhZH4vH72hh6Z34zGafAqrfVtoTtwUHj5hg6yUsee686QjB4fePEXmA4tEPZ",
  "key11": "4ZEzkPtsLjEeMjLgkdHJHwwr5WyhLgYW79oi2RnGQ3ePWtd6FTh5xUKv8YUVpYv13NyFeK1K3jLtA7tKAqXc5hbu",
  "key12": "4CQo8GJkpzN6F2fZ2JXjEMbFxhNBe4BVDYGcGegPSB5w5VbqLgnG3agJaJEGsTeY8WAVgeBYg85WeHc6W3uvqT3Z",
  "key13": "2uaikELYQCKzYDS3HMi7Ri5FY7rfVpo8KNRmnuUcerFxGieM9HqsAzt46vZdZ1au2CN4Q4yZcWQNN4DWtitUxUS7",
  "key14": "4qkNw7dKhmzQFNXUE4CCc4s8zNWVpMy14wmSLgszz5FfcAWvqwjFRyPd5nVJXJb92fbAmPgedHUF6usVbX67vxd3",
  "key15": "3GGQ7KUFzzSv7XgAL6iu5ci2uwGwEUETzsSYw7RV91yi4sn684Jg6RcvPidMfamALnkJ1SJgEMjGqLg7WT5PPsWQ",
  "key16": "5eRDPWwqh7shV5UFkf2Y4DVqBhT74exo5614S1pVaJWbFHvyHzmSiNsR33ZnMr84H7RoyxjiPMwCkMn6gdpmSFzF",
  "key17": "46t4itv8VCJZPp7TAXJR4qgueD7L84vq9sTGE6gN8caaKF5yCgrQfCQX5R7oTm3jVdgJ4DNVzFfC2bqHX8bn1u8T",
  "key18": "5BH4F9WSTqZqbFt299s3yP2sctFpRWBSnZ7rqs4mHLt2yvUQSQwF2xmWwDNeKMGnVp6aUsT4kM7WkkP7fHTXAyRB",
  "key19": "5VSGQXQREpddepqkfZ2pv8iSieYSdKfiW1CUTkQriMYyRyNDZe4AmmDbCnmG4jFGWH3h32r9xjV74WDfjnbTVYqa",
  "key20": "Wks66CMbWQcf2qu6LUMMdgBVqvgFUQbgj2MmXNn791LsVdY7zJ4bykBJftFW6Qoej22qek9dCExApVADBdgqm2c",
  "key21": "3En6DwuShBLJUpYMWcRQCuNucJyGzQmrqvxxDSCSspdto4C1gziummXW8bZAshwDmohujhmPsfZmhd6m56QzinvW",
  "key22": "3GpxqV3kxfV3b9NnRHJB8oZBPKfGLbFTPm67fbTmquHmrjSoimEusCJszeYmJu4vx1vAfSkp7Ly1CweK1d5Xzcnp",
  "key23": "3ZFV3LrMYsiss7mPR3iFGP7GY2oxNX3UpuREmo9w2hzicz8Zh9hjpUwgWr84E622SQjTtQ4yN5pomfgvVewFvFPk",
  "key24": "MvrvquPh8RyMi9taEPwyMooSZDgXC6bmvWw4REHsHXE8uKjNp7GCsr4mLhmg6jdDvqr4es7L9qnyNjgJSEvfkb3",
  "key25": "21veg9R6aop3ufZfEn1k1kpB4RX72Yp2Vf8LVqr47t1Azn5nju22A9fjcWajDYkpLaboSqqpWq8J8YcbbxSGiikd",
  "key26": "2C9PZKwYPXrtfHDpBZwsUUPUGpRHQffPc5W98BtSAxzH7sszv9CArdrowPAAVMBjkMp8DWyrsEXPMBMQherru4ej",
  "key27": "4Y6GmMmovyjtqL6FeFbtM9A2mDHMgYmhVWmAKfsvbJuHZYAzupi5JHqHmY33srCNxmEXe4Pud5k9wC7uJpvwRwiZ",
  "key28": "3qAgKvgykjCN8XiAUWjamdYkRW4K7inRzd1668e6FBfgWuTgPe2555xVMoLpitBJvJyZG59os1RWK29tMoeD7asF",
  "key29": "4bruzhF24qn1BnHUqsj3Ai1hZ2h9JfA6URim6rtoCoBu91JJyLwEB8TG49pFaExNiBTW4X3DqVnX6e3E6CZD185M",
  "key30": "4Nke4Se2hb5ETd3CeWQXSfukEvu2QdEwh2dPZJ92SihhB9MzdEfewc2uT6e7Jgvg51BnP5CkjpAV8nEst2gR3sFx",
  "key31": "4cgj9BHDrgfcXHyPaS3TZdzuVwKUnwaX8bP4vtWDjCHQbKW91Qc3HAzNvkXZgk2heoXLmLcc38UE3tXCsJa1AT3P",
  "key32": "4cakXMnHGbD8fZfqpn8r8jBgz77wEbQTCPV6hrAigfCs2QbMdvTQtyPi3jJef3CR5wcYG1xPo2NrSHZVgXwEfqhu",
  "key33": "2pKCfD7ghewgDDaSFcJ8QmXkFNj2adq2E5SjRFdLU9zhLvkqzZ1kBYoQWCyN99jgtJtoXscntVj3htkU5N93Z3WM",
  "key34": "5RC198LByyp4Mv2jMNNtv48jdno2UPR8yLyj3gJ3GGLaDRNzHrSr9GunXd4VCh5Y4HGxtdkLHCooo6MqqXzJ13sD",
  "key35": "5KD3ccVnH1JFstRv1v4VYmg3PQnDbPPPR6f9NkqT5P8Zn8LNBxDQC8g4LS9pbZd5QKUS7br7vtkUJSvwXzWqpXK2",
  "key36": "44Em7BrZyC9rNwdyPpZJ2rtqcCtd2Xav4SCeE326XXWD8crSqF7RQV7MmJn1521vLArZur6oqZ9EefCBLkEXa4JH",
  "key37": "4qcmAtARzf6QuqMCf46VbXtwwxvvoPgWfoMZJFYC7yNZUMyhrcXTZGU4McFUdbctyVo8mJGcKMbyPA3XBCy7ChH7",
  "key38": "HZX8H9QDEy55jBSDPboet2Yrq2snhYEMpUtnaRJWyvmwC2xTW9EqhFW19U6bYnKPSUYGMsP8srZ8YDD4HBKMG54",
  "key39": "3AZidyj939vjujtfSYDsbAGSBiiJPDXhsdi7TzXwzPB37DQKh7q3n1hMhTwotTA4x47xN9hAaBZUArx8YqQLkkTR",
  "key40": "vtCxn5NSJNww7Y7rh6P4EMrXyCkqLVcbgDNdVP9PavqH4jR7eBTxpZhzcsAV4a3uDrRSqQVtHsUzyJdyc1QmW89",
  "key41": "5tR95zUTAkPmf4DQGZb56uoFLqyn7FBHFDeYH3QY9fqNFiAJevzdYHSQihRMNf25APMTdAj9YUyrkRsQ166hehE9",
  "key42": "4zphEE6gCQNt6mHpSznN5r6pXq228ukyXpSaXvNqsPrM6NUpioXtiHkFBxZDAZXnLWS51FfoFNdzd722mXJo8WD4",
  "key43": "3Q8MDX1jqQ3dzkYw8eXcJUnFTJnAHceg6wijpbrnxRA2j6yR45rXxmH2RmA9jAy4svMiCP8CfNsLLoqoB3v94ds6",
  "key44": "2e8BkAFbn4n8KhCgyDb66yerhs8N5JvVZEEhvgu2iguP2LcSfX7krhPByKbiSXTN8zYPncuwQXoMVsULnWvheWTB"
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
