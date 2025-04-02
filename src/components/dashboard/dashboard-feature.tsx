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
    "2YnxyfYkM3EiDRsGvTSvRyTjkux2KY42vfw6pyVbpDbeBocCysGw9EZUpxxn65GYu32BNREk8SxBdXnrTFXTnU5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42yb9AzTd6zDWXUYw88SnChVgMv7BETRfdxZTYbWnUMGdAnaGBt2CnDaHQ2bJhN6MydpGDyDnzNc46UQd2WdAeNG",
  "key1": "4bAY9XgeJcTAJYgjFVBB8kScZtAC67qk2RfWGY8ZKgWhFopBiZvHVNWV6cW9aJCf5n1ckL2qr4iuX7ELdor4aMRp",
  "key2": "4VZ4GMfWxmgX9beTw88jFJfR3KhyJ6U8N3LubJqB5dZL2baiWSrmp1A3d1Qxo6AByKXyaYSxkfXxatJqWEeQxP6J",
  "key3": "2zms46tPPAHuJefx78A1nLL7oUGQoDGBajZcEkYf43ft6eyBT3RcyKNDzqMGStqqRGmuyBaT312yGcZoj5Eh2Ykg",
  "key4": "uLDUKdJVfk7e9Wfg1bqrnmbgqnojrVAgMCzdZ39Bma1PHfBoDAbnSHTYpBfy3XG6U4CcHT7QchRiypRLEJWsRjs",
  "key5": "41sSRe7kfC7JZogfBceDpc7bgWmDZ4Mq84vC7DGirKfGYWC8MskP68ctACoMu7XJohHv85nov7RWC2fmLuW3VZbg",
  "key6": "T9CNtCJfuWXXRk6XP55S1TuYPEABqK6tkNJgYHrohSFkhWKx7mf8hrgPXpqAkGY5ps67eLyvtrd4QdVQuotSWx9",
  "key7": "9kiUgH7eTarKFxH4DTzorqjvqkR8m9uq6W69tDW5DWT8df3Dk3x4qEgr3qwPgeCUjm2sC6ekxYoAJW3fmgfxSmT",
  "key8": "4nZmbyxMASZ6BPPq1sSaN9w19R2QnYV9FQBM2zVtdZgnNqNid6hJ7gtcWWoxLms9EVjeHKQhN3XUUD6SpkWbn6M",
  "key9": "4iCu8d6qjRzfX2L2GFecfj9v12G2jgSeuBhurd9nFnXuR9oZdNsVTMpBZUxuG9xCMXxXY28Jwnwjhf1VFV5zvsCp",
  "key10": "52XS7PLm5akYWxvgDMF4UysiPZaZxRuN4CZb3h9mCq7hDrXZRBVR8NgSYvwqdDppv9QNeaRjVLYiuHDu5tYAzyya",
  "key11": "3pkapYcSYoj1XBk5wpwXnz2d9qGUaqyXH9WKJg9bzXrZftmiWobQxERaYUU1Ap1wZrXvx4X63Yj8e1pdywPk8YjC",
  "key12": "3csMiGhvAHR6h9UnWKFLhnyGEHYkCYFT99xyTTBETtvaiTscM4EtKdKKXJrMw4jCPfNDbcktaq81jaN9e5kdu1K5",
  "key13": "5cVNkpCGxtwDqsyxWxaadtsMU91cdXN11C5zxFzrbYjLZopbYsXuFMPUwJaHS9c6rbwXJFzXdpDE2U4XYw3srJAB",
  "key14": "Hyket5wXXVrpKbxfDsdoHzsESf5HEtN1b7BVkrjejxF8PGDhqYdKqUaGdf7yKvbkDLiH13Gc96HoUkqPzswmHQG",
  "key15": "4Q11Z4bgeiAUpCaUGA1DzAmGtwqSvYdPGrYrv5io373kko5pAjzCDpr4LsEL2PM9nBKkGHNrKWBRChLvmrmwZqaR",
  "key16": "5M78kbwuqtXQZqt7aQBQaUN3ZV4Lfpu7fYKehhbv27MGaD2eBfxT5qJ5kpH9eP5nTrE7SoGs3uXDyeDnMS1JoHh8",
  "key17": "96v6ZdAta5DXBY66yywMDt62c5v8HeCdgGHkTvGGBtKeyZaE3NmEreP8zq3WeqcLAwgdinwYb3DomRGjHvUusgj",
  "key18": "2Q39rSoNVQdTzj6nLfYcwJgrymiZQumk5oLTzoxtcGx2NzqyosCrDr7zmHh91uEyNjPJdioqjkvRrYiey92sbQt6",
  "key19": "49mgnAwcYaqinGWS9rEgJRqVVrn6SJqRnjXwYFSRPEnZ3SWK2ox7asw6wsNPD9UT1MMYvDJZMvxRtqoKYJdbzHp1",
  "key20": "5xDCwLeKXMzNcaTH5spx7NKfoofHysFkMLxr6QeABkAgZMeN1AyVYMnj63PK5SU62bxa6y8wtgwqyU5r5HSyhiM9",
  "key21": "3TPU4f1iod6RTDugwJP6mCDrHgnWJnBPmYqL3L9XCbGMXcSdWVKXmrFXpLJ7mZtjqDbW6ELbx6YsvvYm3Roy9Xxd",
  "key22": "3NZhHpWweMkQNFjjg8mNxzafCnpqwP28MgPPL9NJ81sDX5v5so1dJsjVEdnU4u8eSLxdF6qgZg6dQ4Xc7BjzA8Pp",
  "key23": "KNNHQXHz7E3fQaWgUbrpGT7EtmCTENi2g2wkGSnGo2AFmSm4Zsuuc4wL57m6nSN1BmSiCG15fjBVTLtjMrpz61L",
  "key24": "4EpDB2YNXAsDrrDnprqrEcegGSYpTSzmecPpamZTqMfbxAWAYW8E8hmMuxQUpm4Y4XjiaYNAu4goVvx8sZGrAcnW",
  "key25": "5mBgVAsMGiWa1iakA9rW7LgiVyecMcwACqgunUEsSHJ3EghSNPPW8gKTKLJg9tQhDXGzgdojApobqta73KM9kuYe",
  "key26": "5XNPzLsxNSaZW9pHgZPCpmFwoYYYpsN3WeLyvFVJX61yfoTEuFZPCXd8LctfShMRW2BTHw14gWK7o5Hev9K8R42e",
  "key27": "4z3Qc6F94s6k7AMWHgQPXTDFiMhvFWGjCsd1eLVprE7rz4hFxANfSTjRSTpdHG2ZGvAGkBDU9xVuVP7hfUAnENTT",
  "key28": "4jFb6Z5dZN4csCPEhfGufx7Qrozkc69vRAZV3ywvBDJJrpCAgwj7hBCwj8x6keVYLAMmwQYM6QWmJLBUaiNGSPb2",
  "key29": "5WJ9P6bryykxV89DiWvkbnRiPNQjh5SxseWcJXjdc6TTxnPPvBvzWJ3JU1acWc8gfNrvpizZXXDQ52iebWkXnXax",
  "key30": "3rJP3NQSNgBJgTWnvxQNqbz3swSmPBueESgxiVxcGDvxpdWuQ8R9YcEwanCTpyu8ryhHXEKVeuChrsMdHmHPwUHe",
  "key31": "51CAMSfJu5GxzeNXna66QMLeoTrwxAUoLgoh1Qa53qtKjVpePKXJT1McJxziFJzQTz156NHHuWQCb5M8g2Qng8tk",
  "key32": "3Yq4NGdBKGBXt5RxJqvq6BkTsxnimVwYQeifcoDQY7XiJT5rZvtK8LZHBtTyVHrWYt3NAaR6oY4Knb9u36VjS259",
  "key33": "3sMFsdNxVoZxx3TevhmiPbt1U3D1KMcWhgtsDGhFJCPxLpVQqdDUoEuvhZzCj55prD576LLiSiNCcewg4L6iCwTY",
  "key34": "53AKLTKHZKuHEsoBomzubZZrGgmYTX3pJhgqf4EqdhtdGpoDbSzMFbGSksoS9dCCKpcBSH4juqy29UL66GFLaJ16",
  "key35": "FXqC7C6EK4S4aoc3UDs8K1JLtkJ5jTuaxsGB3TwuWArvG9AXFym5v6Tzmua7hRzp2mmYUm4vGFxi3rXyPVfi7C2",
  "key36": "5uHfkpLgfR1yNn5wH7s1ZTqaK5ampbak3SCrzn81CMVHuezJ1s6hEmiqb6CUwzXJJk899BQqBGuTkadhaFiKnkie",
  "key37": "3hcK7PysdPfQpPDnYD93Pc4sCoUrdwdVZaGJDrnzkvieAxcSNwnPF6qCX3DSZ5bK42TcYiW61n9EEzP4fo1ZgoBe",
  "key38": "3DJsYmYQ76fyBaSJkqRKGfZ82rwGqsYTh96fNsGBRvucCu9iyHhA5pKyS5oZ2MbpuKJ1QZrYRRsJh9gDu2KzRcSu"
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
