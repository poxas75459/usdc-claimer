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
    "3bPsSeZ42FDkqg6Qm36zCKPUijvW6RPcWb6EHkDt2zg7wu1vKsYN2qEfRBNyaNL91Vk73cqBLBWGbs9TjBz2yfzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AEKBqHhTwzs6uXjhVaeoUHxzBGJwJYcsa8ncSHyrSNfWtBjtanTTcvSZbbw6fxf9PUDGjNFKQ61RVkamUfxbmAe",
  "key1": "3J1aVaSc2vHRz34x5xdSdNC3635yJ8F3fNdYFmdUnikX9gf4p6sB1VWYxUVkNkznDhkn6tCDyxd1JtPGWho8m1NA",
  "key2": "Abj8oLGYgKVafXzFSqFAhQ5BmEy4RCQJWrfi2cWV75ms6SwMnq87PWSQPfU7x4V8WLZfPPGepkUuxhwGh4eQUyM",
  "key3": "4dPQndWq2opQ1d115ax8Qmzq972xmS7fbAJEQe9B65QswBbPK7PQBWcdKCUwbEuJjB6rRbYw5bE4aBgHYnuUuV3i",
  "key4": "2P2a9v5mjFjzehGTXsDtKnSD3vyMmb1uzmzvanvo7kBqXKXEmrc1gcEDAtvfALaUJZNKzE1M8K69LAuuiTVQ4UPU",
  "key5": "98TPDaGdznEnPJnHt6LfwyC8cmEZzjm74A9q12egWM4cvcrcxLUJw1HbRRN5N2ZQXf8K5FFMkTi176zPvYPyUdc",
  "key6": "4SmVhDcEQxjqL3Wwrm9TXVAZfr8ccWHYHKhNdNQ6FXpbxEcbJXX9MVvuD5N6sVyYEQEn1TXgQ4Rp85dekukewhqV",
  "key7": "5HuPsq5TTN2WuiJ3ckqzCmh7KNvPjJM2BuBfymGt65AJkrSBy1VNCxQtgm4n1PHMCXWcJYPKUecodDxHESjwfhSS",
  "key8": "2CL7jYa837Y1smUUpozCdvMyRPmEEqpbbRh1fX9e3t5hKA13KQVr4cZAm6ZsPojF2JVNeM6Cx88a8Sn2jodCf9GQ",
  "key9": "Zc8uakmHKTJ8dyHzXdF4bKBhPXpzQzXMJn2AboKitGDhnqzn23cTkWirWxuFbPw5aXYNNrQJoSFR7JL3hQopE1h",
  "key10": "5m8zBub7eMHazzMqLAzXzKCN1xLyAyJBpuRWcA548WMXeekM581HhUPPg3xogy6FCJ3FPRYnk1SHMwrRwouFCSHD",
  "key11": "wFTbam2vxw7GNbvNJWDgeXdy1neqsYc6SD3Wrnia6aRddgYh8s7D5D45ZLK5JNZSwhZuquxJsyGEkGy8sbsbgYe",
  "key12": "51DuTtLuCMLLuWhV7MSdAQfaqxUd9zWaQsGFQkFULLzYAxLvbpoCx314zofRhJxruT68mBzNGUrT2Z8ezXx9DU37",
  "key13": "3gHdVNJwK8FH9pkqtvD6XExMTmd2dVASPupsTeWv2yEd2uimfN5TMN2wz9WZdLCGt32GFcwUMDCLG21tE53vJndg",
  "key14": "3j66nX4ihTPkShH3r9q825cesi5ndDZnDrtU1EmhgfzJnW6fnYwcc4xVN2pUp4SrcR4FDqG18qSACjmzC1UVZHHS",
  "key15": "3qkQSxVGE75enEnY9D8BbY633eUDscPjY3dgWLWoWx2ZvtY4FwUupLf6Gcd4vWmAKKk5vys5iM4Lc3D6SVdvWoEu",
  "key16": "jSabWXoiNMgFkGMZ4xQcUsacJZKB28cdjWybgdCucNCucT3DFkFJ6MkR94YDnG94YeZrKASX79ChPEDHcxcrzVB",
  "key17": "3hnMq7qunhQeeQQ8srTxWbJPmx9Kmiaw8jrZcKMKtWBBZ1DUJCjGrBrLUrShLNC6JuVntvyhpsPxWHfAv1smEXGz",
  "key18": "51aNJiFq3dbybjpRvkhVZBVsDzQh6JEnJBXv7RtTqvretLiZUNzgsaCKpUjbXavTZtovosTbxMPoStueLHhg9FYo",
  "key19": "4L2yrDvvdVJkEXUmCkKbFrUQPyZtsJGo4VnkYenBSgNNhLEAvW6cuMegkBASdvmQSbiRrj3KMoQyYHaUwfMKP8yG",
  "key20": "3fsmewH7MAoMXeHBa6phdQWUNqp2nCtXYfFffYfrHTJJmWdA4hHLPy3JN1UpLRPLADwC798tMiUqjmndKZ1zUNCb",
  "key21": "w4o1pvVut1CEEBTFF7ic9M36BPqCTB4WAdGdf3TRxViEq9HL66XqcQrD6jTaoeXpfiyN7RsBAUoovwLojhRfH1S",
  "key22": "4K9Hnkr8nwqZSNQqjn32kHG7PQNWHXGyyNATqRFV45ocurc2EtS1nsr8JiG6xPeY86toRyxJHn2QQBC3rPpnqF1V",
  "key23": "dmGdueUr3MW7qmbxmLhtm6ojnEBi4GiZMUz6wGANkin9VtyeNdsmrLMN4kuauEkuKyEq7eB8ngB4yywwf3o9nhV",
  "key24": "2FUyVv5mBniSRrwrhuXkS7U2xAV2XNoibqF8p934L5A8vSbPrZmE89Xbat2eoNVCSa4ksrAhyuK83KLAVca3GbSv",
  "key25": "2ufRwGR6CUapwvNX1nUkdu86eesmJ2bg63yKHZYRVLDsgEhMUmyH3dpL6P1o21VKUDcTvUsCPbYv67GRTTPry9gp",
  "key26": "4AyehYZ9kyGwQTRiiqv1pKwodiPbG19EwsK1ydmhvRoXTXitsm3aiVkxekBZqnrxkNG5jSC8UXdWKgLrPQETPaA9",
  "key27": "5xKkF7mMnECDxKmK3XMvu9EBe3hAyT3cCM8dBFJWRNr9GifPSeDhd3WxXhTN873wzPfKK3duN4YEfDDSLxnELXLh",
  "key28": "4HAN5PXLBkhq1338rAsYSSX3dPigafb4JoMLqhAx25veGbr8SctPQSZXFGVb6Djc9vLEFX5SnCWz1RgpigLqu1PM",
  "key29": "2Lq8JcoBhQmMmdySP7dHkfmQrjw8rJnmDVeNpxcAn4fZDoHUMmbajsewgHyaye4ai4pLtLK345ScMxVvTc9Ftgd7",
  "key30": "2PPyw57EoonK7ipKwu1vnEj1wp71ZgBM1BELq11tjZVNdTeWxHSG2cH7T5A68PKWzDHmbNs8UNK32A6tiBp9mu2g",
  "key31": "5iNNHsfU6LoBa1oUA1RqSMii8aHFJvXPpNJuJjjmMcX6B2gzaLuC3qes8ML1wz3wZoCEDv7kG1GPq5nRTuVUnaH9",
  "key32": "61GnjykoX7fSX34D9JTKU46FwMfEvcex2JAvtySiNJN3dUFsPNvTnVouDvyR6HyihDYCUpJu3e7TvqTsurYQbjwd",
  "key33": "2LmFms75dLGZpwMHjdBC9bTf1ZaffsU9ccRNmy98KkZD1e3qU7e69ZJEQyWvAcKs4ADPui3QgapQ4sDDqyQLptE4",
  "key34": "4vaKzwy5LuY6gNfdjTNmLdFVAQxeFWafrVC4fHWYekTMUqNtSUNmviaEg5Lwca9fQdK3TSG7Qb62QpowvhCqCThW",
  "key35": "384w2SbVx5kytSWRvRstKj2vB8W7MrrLT4ekTUyPfwNgi3iw5KXv5VErpjfKrcE4BYzxKhHfxCkSH6EJDh2dTvMY",
  "key36": "5ZNiZyKdYJNrw7jGY1Z3iv4vxDcR2pRyZpkTfcAnt1A4BEdArmuhtkTsQRBAQJq7DEzD1kjTq4LAjPapFWWMF9wR",
  "key37": "2BNRRrhZwxJGjmRb8hFcNKYFhh8qnZMvKJc28BW77iCEn4R5RdPFaznb45uD7os4bo4C92LGtimeoGch4VwWV6y4",
  "key38": "thwC5QjsDucsoUWhcYRqpvKcYtcHLxTVEcUE8XFhJd1RhXdvGe8AHVnipKa1wCT22S1xn24AMZfRJA4RjnwhPtm",
  "key39": "qXWhrCmqA6DDHSTm1gHrXA8W7jEMjakpaZeGa2DQNrH4iSHVH5YxxK5hGzYwz2pMM72Uz67B6Kv8xkmxP8Njd8t",
  "key40": "33cZ3UTrLd5PtfPRgZjtMNdJBXzk2G4ZALJ4wksCn3UjU5TV9bHb82idEstdBNec8uuBywYzERCd2ZEPD1Eh9ko6",
  "key41": "46cgv6e1uoHUhpXcpVotTYLXcjRMuCseAWAdzEaW5LNWZU5aRWHx3JmbYLorBz8MGSEhXatoXZjoiWK8w8ChEjFp",
  "key42": "Ycx7zLG5yxg84g1rFfkJkKv7NS23rF6KcBqptW3K9sFUom8kEXMRw1BBWEFXs3xN1N7oX8RHBfaX8uUZXTy3BbN"
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
