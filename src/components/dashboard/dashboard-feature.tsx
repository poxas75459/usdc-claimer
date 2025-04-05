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
    "4o6bxB2m3zNE7VXPaVJibt99vRncf9qQSrsrXSUBdvp2y3S4wK7uqTfhsCentRBJV1pVS58DAEUPuz51PmnenqnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C7r8nUd7HWJGHWkxpSS8AtAE4Qw4Z6cHZQRiyeHhfirNFb4kACq5tut6GyyG2NX9ReCdjrFR6VHi4nYSTxi6Jmm",
  "key1": "4NnyY8jFKYVX8QiYmKn3gxbWHHzzdYQ7eNisognsybe2P9vSbozdxTEF337BAo52mwMaGomGBzD9pQmqeTZoWAvd",
  "key2": "ZTmqBH5vPoLJUvhjqh7LRHKcoMp7PGjfnophgwDpL7AVK7D78MToXGkAR4NkWH1bQ2FMohbc3hBkUMoaWQuAKst",
  "key3": "2fPyufwWDrGbf8AWX5W9gutxsntQba7jk4uLpuBPQmVDRYMmp3vzbXj69c6AW4fS5NVZzJKyJ2JjdSBTwfxjgKWX",
  "key4": "5hn9EpNp1xojTJPiNDe4FHfLgPFVJNyQnhd7W1iF45KXKYGGVGTMkxieXsNxNc96CRhyCVuYU1E1QzQa5v8s63dy",
  "key5": "BD5ih3A6Fa2ctm6L5hZ26en2NprrM57D7EERB58acf2FKunpoZv2zUHENNRDyEk3dAcz6c3x1rCFCpyWwB24Tcb",
  "key6": "4zdLmkecVCqiFMxSEybEupkFayMmDpkrNRBS9YDgNvQW5xxcSpzQVBHrKSv2ATUBmoaxABGdn75kQwMeVtYfdquV",
  "key7": "XS6jB9kNwJXNSM6aigjULymuNQobvtSaCbjudhSPXuFgdUBFvio1SbFWEVAUouGTQXVVgUUhfUFwocqEBsYutFe",
  "key8": "3iKqFVVmT88eS8JPUvsUF91veGL6vk9zfGkVgEJZZudJ4d43D6gU4S9jPNbUDngJGLHj53uh6Js5mpuRdjX2PTAn",
  "key9": "4AZYmxinGSNrcUfABZDv2Ecawqa2bwhgsNfKjtP4hb7c9H9tJrRmAFcYoh8jMxxc3yBXEYyPVkURVfKLie657w48",
  "key10": "3WVAEam9Q3Jc25i2o5UshUbGnYmtxHFWf989y1hS4NSFLhbZvZtWujJdHrqJsGXdTE1H1AB4egrhzJDG97BnM6ng",
  "key11": "617dLiMj2oJNTTxG7ZRiArtzx5uoihkD15kwpfCYxeSYyzJWHrhhkK7DPaBhDgUB78MkqwhsTWtD2KaSHiUYHPeR",
  "key12": "3NvxsFmqKAPhCXawDT9YiZVMfCpQzyqbqhLSSLUyiDCDAQA5yLDUCYpUFZjkCBRVsP5yRWHzEttx4iWpCgNVCsfn",
  "key13": "3EzvkvTTvvy2KSDScrhTQLLqoCn8yUjdKc4vLvQWh5eYiYAJjokCo5VKZqMENSfR1J7Dca8xTEGBkY6WTH1Xs7rK",
  "key14": "2oYx5HEDWcxUMjrAc9NnbL2UTE8rKYXdfXAxJyUSh82KWqLQc9RpYCYYfTPsBJs58eqViPrTCLzauBSeaMpkfL9w",
  "key15": "3b8sHYadfGkTHL7Qu35gcuAwfEYAQv4Ugf5zVJU4rMw9tYfdQz2ism8gjXNsTxK3VYED3nY77LUupE1uLoxsDKUC",
  "key16": "34T9BKYTSCxRfpRnGFrGUmST4A5oLsgMzDdX2sGnV3aB8JiRo3F1phihkFSUa4i2aQzrHnUwe4GJ7cviEUg72f6P",
  "key17": "3J3cvJpEnGeBF8yae4ZYndns5xLJjg57x1M8knt9yACYBrNQuLfNffrWtTBgcyBsz1ARn9f7j4ng1WZw3NENefGv",
  "key18": "1YvvR1yAcgH6HRTCP5mJWk9N3XiEXtyENRNSNRGrvwFFSiDaE4d6AvHbnguo5u4bxLdevDgJYqcjh6FEJWbd7iq",
  "key19": "4RwJMXnygVi2m4jkYcDunbbxEuZEJ4Zp9bHmJTFcxxiZe59kpgbaBjZ1wydcmFbJdLTQNrtr1NaeSM2bjNAFLTjH",
  "key20": "5rZE8pJNh9q7vT88nYnGGLK2FdaRex1eWk616i8ePFEqJnCMHRDGmbFJbtQNeBgnUxgSsUUJQecaEBytWGmoPE9j",
  "key21": "5D3ZftZeGQrqQ7RZMovftTJC7rXJXZQEJh3smPSwV8rhuDZQaLB5vQn4Xqa5irQHn24Rz61a7ZYc6ANvZq1ATnLy",
  "key22": "3tSzd4dZF4JvQuusMCtkuAykFuX5iYNqasq6t9XXMoNF6CK5ajqbF1DiKp2YrLmCkRY9cu8VvcnDgsn3SCkwoMk6",
  "key23": "34SATvAma7qEUj3pictWbmqT118ZFUXMn4aQxK4YUcofRCTj21AtbTTh5KiLxvioGhkDEvR4pxVShzKqAiHzGi7S",
  "key24": "3ALAw4iZGqkcmCjkFicXwSPvMHtqFu64muRqSedaPrqgmK2aeSXZGHWhEp2WVdG5VWhojXTcvDVkbKTGG6dW1ybK",
  "key25": "jF2G7KTw3UAoxEFJj7vJCWCNrH7b7karsqrYDjx6nL9K4YH4cgedtCdYC6DsW1vmoe4LrYe3P6RMfeUHRmLrvo2",
  "key26": "3c9nXEjcjrD3YmkWTWkLkJSTjaeTbRJySHrP8Aj4x5NNQ6pNT6XZ22yiV4bsqXFDUNanY9SWqB1CW2CVM86UACPZ",
  "key27": "63Bx5f8jK7TEHKPoD5122vawrnWyAWPpafLCkmG6hZPe1ysugLQ624QBeSusNVxWGFQ3T9ZocLPbMSX5nMVbziDh",
  "key28": "4Fzc4UaqjJCXzynzDuX6otnKCRA4u3pFyieLwyTHccKrDSAHGQnQp8UqZVUVTMcCs5f1MrQXGChPxDxoWp6bWgat",
  "key29": "3VTVypGr1XN2a4GG9hddqxennWb2jnhMFMKqrYuUPSCnvUHJuDeUzTTAPb9ZSpkKJajyvWPs9wNgYbsaEDUDvJBZ",
  "key30": "NmuFJP44oj1uy68d3oGjyMsqhK8cHNFmUhMDo5WvsbuVkfSQ6YZL63Xb4Mt9mae6A2VprYEbrDoR8NYTUCwcLFs",
  "key31": "5f2QVHk6cvStHQkqW9Uuuc8rJsNmUbUbnWJ9p23UphB4ruPk2ZoGedKxfWriFGJVXn8VRkfyWQhY5F4XDbxLs423",
  "key32": "tzXzvzM6ZSKhFQ4ERgBrAj1W7dfZGEQ1UAWrLFimYz8VFetksCZxKTUy6kpkRRaKj8mGuKhQ8DmfF72jbguWrYP",
  "key33": "4YLAp4h32YG6tAfGBuRNgHMza7K1c4xYkM9fzKQDjWNUswA4jmBHbkKtqMd7XsmRq7LxgncY8h2NR3VKZtGeaPrw",
  "key34": "JxapgHbUE2JhxD3GuBGr6BFTmbrSGhnwmCJhgxfcumHgLuLEEuhvqRZjjDoSm3XfhbCtmUCqXVvhgbM3Er2Ji5v",
  "key35": "37YVwvB1AG6QBkCkcMkQvsMDXvtnNrBnsc6mZgVRvyViYN1M5KrxDcY8UzGUJJZZ4PbimnJR11xCMCNfD3v8B87",
  "key36": "4KWaGEs9PoYFfPzxgcVLAH2HHMhafNtRGWUN9FhoxxXiXyKerjvE1mkHRwmfb2cpVBPRjheHU3p7rqJU8t6yfV2f",
  "key37": "44JmZ5BgVi7n3gpkgeoapJF9DZeKNFaaMVMsZmtMnsziga8UZzRSEUFmcmV7hp555YxJ3zA3vMGwvBWEt1FTYvRx",
  "key38": "54FStRWuvKUYZFbwpv55NtuzbG3453qzPrd74EZLSbjxJyE3c153kSmtak5mU4GCH7QwjsteSAqicJnZ5Ai6pxR3"
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
