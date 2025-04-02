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
    "37Gdk3dsKCUiZ5VyLQy43xCVEaKehQAcWGtCgjaatQhxz84AXBahxgAV7Z9pbzLTvgYL8WkuhndyTbrpERvMKu91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Ti7Xx7a3CFgQaqq9Yv9FPG1unNjwieoq6W7fD8PPfPad7mDa79ssnkU83JL61x7G3VJxZWHMiWBNTvJ277eqQu",
  "key1": "39tctD8ma5Ab46oGrvbRB8ho9NQJHPp5TcSVCHHs3FQ13zaxBtKc9aNxLCjvw4r8BT3xwiyPNH87DCsqmnvjSbhf",
  "key2": "aukejdYQoZ6wKtWB8BrEjYQNZDTRxDYHpo8tCa5rkUpUWYnxSCLUEWEZgdBjhita1Qm7REJ4Gj5RXcUx5Qd3ymq",
  "key3": "aew4o4fNfcDwnwNScDv92Ky94T5SCE5hveRMWHD5JTyJtRMLLrGjAAvC2uyio3VfPBhsHqAP5GAy6amL5n1cKSL",
  "key4": "PzvoDYJ5XrUvPWbK1JuAHKd3LR44CMJuBc2C9S17MyRYQ7DdAJL1hiH7oKTbz3MnYRLmkTa8zMv4tADNKVRCwqD",
  "key5": "58ec2cjr42cWdRHZojKgifecvS5duoNzjpZWEA3iK4fd93MjVto4Sk4zqjoQpqfRGAUBNArE4yv8qJLsWmhQPrp4",
  "key6": "57o1qfDM7YPWHZ4q8e7YHgbMqhvK9eBFb7kpPLHhTTLQWUnE9oq2YmuoRN8CSHsURBZQ5jJU8t94KQnDK85fmgVh",
  "key7": "3iuEVRHNaDtFarWhMtovznrXirYEAwenkeD57SQ1SGejo8rwe4W8kiFKBJrfkVeZwKZSkWHmk8NcddTiNd3CJ38Y",
  "key8": "38rox2CUorbFPUsYz6hhjVF9Hufy9SG11FN7YMPAT8JBbXingattm6nKQSbtqur5RpHq7khyLoYV9WWwijy5d5dR",
  "key9": "3W7Y3JCHwEr68o1uhogAF45QD8BFJKDH8A8rQS9hFPBhWrG7dzD54tsfPgg3WK1VndBizUiURwzNkNoD5VtCLtvq",
  "key10": "2YdtPmYoGereJ6DTb9WBTqQ9ey3kGd369cd2eBsmzTabDevHQDzmL1C5gngMbds5gP8aA3ZsbjEg2C3nTS76ApH8",
  "key11": "5mvk7UWtSmoifH7GfpBoqYiDzRz46MFe8YVME4usk6VFy2nm3TkXUtQtg2YmyYqctmG6nzXrjH4zja3t6EE5yhKQ",
  "key12": "exCFGgz7bTu9jAN386D91HbZ3zoQX5iVoESNMu1NC7Ba8UwZr8atQgSwbWTb7an2iVVC6LYjJ7D18aNGAP68chA",
  "key13": "3PTr5tASm5xALPHypNijwhVj6xfccShVvTKUySS7nDL8jJDoTkK19fNZBW973fSvVrX9zuVVaKi9ZsifSnpKh4YX",
  "key14": "3i668bJS9kcZPFkK5fFgXLisgdTy66S1JsSjfLdTThDwPCtppWXH8rsFuJm6xigVRLAcXnpshtG8kYUipwRBXQPn",
  "key15": "57BC2jhX98QqBeWhqmVxPGoZ4kZD8GyCMtx7Bo6L3SSoBxSs3ptvFoYRJF1K6Cxi6KFLNx5pkwHwQ6ACgYU4XtWV",
  "key16": "3at9vVd5y5iPwMZaRssqAxHXb9z25ifUgMCUtGJYDRGeAsygewVnesqox36r1s2A8vH1ZqtsNMB22eJV5x4Xd9FC",
  "key17": "2tUh1aV7MDDiWkujSe56nztK1bDfHzU1YKDy3WvvRyo4XqkPFbLCAKeddGrNumkUN2atsQQJrWWLWDMoWrFYkv7E",
  "key18": "3pGE666yFjzRTCfsfftfh9V7TZWwsLA2btXZJyLFTNmSf9jspbeu8AcFCPSyjXVH5C2CFD31GFeGUZbPsfQy1JG3",
  "key19": "3GD7SGNCfi7CR9EZfmqayNEbc2xUc69KPB6CTNC7ZspHQ31sjaSAhRcqk2Yfgum6QdVQU9fsJzrDquSpTF71u3y3",
  "key20": "22yERtsLxXWguq9xMZYpj5oLmJVj627mn6axsCGjsnXGo68cH5G87Bcjy43wckgaaXGrnQdkpccCZJhc9eCeH7u5",
  "key21": "3jRPK1WtR2tLmA95ivemsM97HTV2iJ7txHWTGoKUiYwcttCZyA1Q3ZzsU83oEZmpaknDxQtnAwVgRPH911c4NmbQ",
  "key22": "5MAm7dzLgBZoupjc8HBjUgR8KS4PAtAmbMuurBhNPSGAfqKnZyKPrL3KsHjEQqGVvC9Xj9iKL1FcxEM4ZFPe3ahV",
  "key23": "3uwMcnYqiFsdw4dsayjkzSXudh83zDuYNjjW6kS3wWtsDchTu9Ho5jYvWqbrHwe4HXRk5NkKMNiw7upaKZ1TP1T1",
  "key24": "2Y8cXYdtGsSYz3T63FEtadPYyKXskJsKjvq5HVMMrzwsoc3XUQgbjGm4nGTns9AmRqTeDVeN9q42XaEeFtLnbGhn",
  "key25": "4H2XRgDVMfHPeBTWGmzc6dybToeutk2qnteZcd6mo13KpG9m3ytmHoF77L7s4pB5ir3hqLrkQVRUoQj76sR5rRuQ",
  "key26": "3bPuDFtokEWFmG5Vu7d1FgqT22R7qRha2HyGSk6t6LYNiYV512CTkPMvza7kFBKk5mQSTdbyQvVLAkXKK281GqDr",
  "key27": "bUY9BQij88sBt8KsmRYdrk7q3c9YEWbAGuSVTLLibgdjf1LvmLqSH1mKUA18Ww5KbCSuibi8TbYzwkikjS58mn2",
  "key28": "467UsRKM9jzDvmU3ekj2ND8wK9S2RfVZGei8oMr7P49fd2BQYZpT8fUCWurLN2eXRgWgg1Sd2cp1gpaJSpEyqNWY",
  "key29": "4igf52ouBKE1NDqNRTyQLMnXs6vuFpaMg1eZ7nF2D9VxuoaPgyfQip2H9QLYVi5xDzK21vuC76TAcmVNmaHn2Mih",
  "key30": "41Xp5pA8M43oARFavvQkGnQ1b23Uyvz3R2yjMQw6s4jCQyiT3iFvD9yojmDU3i8TWZqPWwbP8rNmnnfVyuP8K1RD",
  "key31": "5yYnymZJ3y6FNKw9WWDUazyihjuam7hVbRzNWWA7w4UPgn6t51bb1EUMag2gybqsoJuEXWi8gega7toUCv3wazx1",
  "key32": "2wc6zZdxb6vWL1srwiXGkg1qLEHV9zUK6YAeLo8yZ5d5o4a8zgss4oK9r7tEd6TEmmu7RLTAjs6EApU9rwazVYuz",
  "key33": "hY6ZoYWTv7piBa7cgrkXZgcHR9c7E1ozjSyE9sa19bySpGAhfZfxu6vGgSG5tiF1LAHkqLfbK5bHVb9LsGrX7fn",
  "key34": "YAogA5EiRJjqzJT8EXW3zENXAnE3t1sgYZWqmZ5FGro4rSBStXEpL1S7ENn57BGUDznpfF43P87bvQAMkDSNLoA",
  "key35": "5X7ss5pDfvq6t144vrucax2sZgnjPSBDbmfLAJQVNtrLp4xp1eSVw2uWYbNmpQwU3tHQmbdpGNCon7tjuH93zo1g",
  "key36": "22fGkxkxcVhY4kqAZnovDa7gY2ysSJHjtfK6snTeXfasQoaFzTmkpmUnSCy4ZNZoytoFvLPu9196Jn3qsF45NDT6",
  "key37": "9WkE6m7Ns8UdK5GyNEB4cb9C7kEEb7trKThEm5dcMhcg3D9rUurqE2kkkt7aYsg4sRAS5RqRcUDvjUNywxYR3RM",
  "key38": "9r6vhbgNjVeGq1JHCiaAU8MVVPHniR8piwPPHUeJKg4k6xYr3YokGhdkYtzoapAd8vUfP7N7oVNju3DM385v1XR",
  "key39": "FoNKhBSdt95DX3t9vTMTvuxF7Dqe4uo5DT2WyGDp7Ap91xpXerphPTwrb6Bsu8mmnepbNPr4pfbDFRUSBF86oBs",
  "key40": "3TPsjf3C9wA1CXkTZZ5X7gE1eAX3j8bRCxB5X6moyEx5wnzHQDUD4A6PHigKUmF3T7J62pRCGEixS8Et7wndQVo7"
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
