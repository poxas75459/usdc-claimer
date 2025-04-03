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
    "7WbzZZ11KiL9SK9on5EJgiwrKLFWXAktBVtTNcZQdfv3SusL8mxt8emucSW7sUTqvkwjGoFW1FbLKgdPiJCyDbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cQbEyAXCcTow7RcgUefJohicZDhFGNmA2m1HHrY1b2t4QwQNkJWZs1REUv6QQjuaALEPWr3QvpxSbHG9pVHCNN3",
  "key1": "4xHvvk1oiLDAVeL2Uoak9yi1cxfic3rKX6vUFxuTZYmtX1mZJNobYcVhvGcPXhaNi9gfJCwsGDuMazb7hHr91Pgx",
  "key2": "5Pfz3G6PG3ZYDsyUTNDdafeiAhvGQfTV26UxfiJDZ3hRBqkDVYYByo8QNAe1tu7eLrSwFsuCZdfWHxv594YK7zmx",
  "key3": "4zotqaJ88N4MLnDBcViAj9WxgiXEdYbBW6cWaxtSZnGh8tBfsZoQDZy3WZGZ8qS1FwW5CHyS6rfc1tPmc8Pb1BJe",
  "key4": "3Rn1uauBuiiNV5mcLjspnEUwyKHnrsYnsgozcE81U19H3xBR1VTPpyaFFYCsvVE8wyp3yLffgNpKxXXhahMBFy1Z",
  "key5": "4BAHzKhym9vY9gcyy1CgJL22QdgVG68YN88xQtDqsfMBawVydE5SUxe8giCa1JYNRYVtzvzecacztVitkRnRfyNd",
  "key6": "252NMJYaqGs1ktkPt86BknwfE75Jrbk7xT1fNCBRMyVKeYuG96CoFacBsdRbw3qqTg5nSyyTRyVyZ53ywmSgbnHG",
  "key7": "3ERkuxSZmvUdJvi4vkAZcdpo1uZ2fsHzJHuw4kZcUW3D4pbse2Ycsg4J3NbER6sFiN8u1gtd2cF3RyHLTwVXc5rh",
  "key8": "4fvP1AGrdSfZGR9HfZ35nKvHsuWMJyg79xCW3Kppwn9p2yz8yttDhhmqV8K7SYMxaAWfmwdRymXLQQ9kxW3raNNS",
  "key9": "3nFBHzKFgYco9MgboMcKWXqeNu2VPH61Q8kMD5qWhrfbsqPajWBqckZHkbgF42mm4PvT2mZNAkcXwSZ4mwGVM6Xs",
  "key10": "pBj6Tq2Kr2noZtH2F4pBKjWL7Tacag9KoaePrWfniNDeHL7fAZpVZPgoknJLLUhgMm3vcPjYjiVaTfCnU4w2vR6",
  "key11": "5apRxwLVhRz2zLvqm4dXP5yDsr5B3kJvbVuzQD94LSd3ZWQQr5V5pyRFJvDnFAfGssUVep44rc3NNHkB17kXDf77",
  "key12": "3sezoDMsT1Pir8FYPpkHaWabznTisbBmtec4m8gRAeWb6ohPL5RpSxLJzviu8ctRe6K3sGsx4E7Bps7GifNsTJm8",
  "key13": "N5EZLxSKqZ9pQosqRyb1cJxXBaTSJs9q6QooF2Tma95hmEcoyVey3UTqwFTNuNgMvKYiUAWc9hmFZ1cEBcMsn9o",
  "key14": "5okZNbFxtJXWaW8NVchJLZGuj8nQpvA5Yf4P39umDup841XZbDVCbnu4hHrpwBMnT8FxrD8ELpmvx4KYntJ3Cb1B",
  "key15": "2AXtTtHKWaHkDASV3ES59HJmrk5pwStLe7N8Lz4CP7cp1n1kLqdUpaJUDqNEtEPPFs12xCHx7ZcK1sAFQDMG9py3",
  "key16": "3DcUL913BaoDXhZq2CJro6k9yZz5BC4g8M7SrY83XYFRgr9Xp13mbMCE31cxKLTPyentCsNoBFXcvS7Uf1cqC5Ec",
  "key17": "2qQU7cWyc1ju8PUaJ2e8t7WcuHuznBS4jrhDgzqujy95NR6fDfpaw4agUZKJWMfDbxnfmZUWYFEWmwD9Nt8Su1MP",
  "key18": "4WhWZUhQSTRv3rusYQFjPduDQrGBGXv5NF82wWFFcE7fmqx11bBQGerySHi57ZNWjhP6JpbiHmMa4ML36RRKXiX8",
  "key19": "xUdiUEgdcKzAnfdzyWa4CHdGMWiBRWwGvvs1EGQMBpWJC7eH4mWCuCKgxkhkm3nkUtjpLcyuubSxeWJHg1P3K1Y",
  "key20": "hCfLfPcDcAQ65YVv7FJTM2cFZ9Mm85j75Y8qLhEoCamaBPSgp4zr9pvg7FhTeihfXC3kxksD4nCbDotcaUGRkdT",
  "key21": "4H2QEJ8YLe4WiXECC2YJN2kHhsnUgvAK2M8fPzWhahsBLB6PwEhoinDALGNHdSAEQas73RPPtWoRTrcvkaVVGnNe",
  "key22": "3z32Fc6Yo3gquQq9C3WwhZBFNAqeotS5XpeMSWJxRNinG3qfMqSaYvbjGgtnqtSLebJjm5uaLjddGpuqneigrZoD",
  "key23": "65yXwbFFqYRWzyrLkqF68ecUyYRMKBw4UvKNczKemp8uKNWS4eXBNGaoiQ7q77BNvVq8R3SyB5xEL8kYjQ4vkpzq",
  "key24": "3Ux7intsA7mTVcsC9GRCNDhw5unpX96jxjLuJYcvSW8bSJy4BPbBz5KFbDLYkyy6GNxSRoPPn6tQUUicQ1fLNPCV",
  "key25": "5RZNFUNNFyQMCaxYMnb8bPdhcFeLQyGtt78fst12fM5qhrpkUuKkUesMaVt97NVrNL7qYpAB973XDqDyDJpPsqBB",
  "key26": "4pFk1a8ggrbZ4SqM6rpTugq3om8u7D1scFc8zumcQs8whUAS2uqDhzRnJ5JxhcMWg7bpestUuHmJt3wJddBt1R3M",
  "key27": "2E5usv7K6pCtjFHMoTBArHar61bC6kZQE7QLXzhSmFdb6CAcz5nzbEPKeBR9K6iSeULCvc4vZ56kwxwVHUgn3XiN",
  "key28": "4ydZKfTVgxk2nfUPsaYQMYQ9aqSwHcGPLU7XSwoB7zHpLNDqhd9dAuzL9Gmbjp1gem7vJkprEgDks1HdQm1p2Peu",
  "key29": "3kmSrMsEEgbShHmdFBpf7RGYUXn7WjQKk5ExVrSvbpBfFSFrHBoP5zaosgtDa1S7DssdQPG16iJtBx67JCAevdnZ",
  "key30": "2NprjEFaq6oPovfBJWm2HZvaFBbH8ABdgPpZVNNXabZ53WgmfXpLGBEamFnzUwaVKMuHsR1yFogdqxQdawS563Zg",
  "key31": "5pgR2pyA9CJUViYpeNsFzJFrevFSFPfDf8VkTDU5MQoaWdnkCUTLpEt5Pp6coJwPg8n5nfQjBKpAe5n7w65HZG3b",
  "key32": "2LdyDmzarEwDafQbA7aXfsrPRF9PyYQzk6VCs8HmGoL2uLZKRd7erYPDgJrJqoa6g19muqJQnUUJwuUrUCZHVgkk",
  "key33": "26k9jKmdMBtvoh18efv3dZqGmC8Ka5PrPN6SiEcAzi7JbqTs5Bj7ozrw7zczrt7Ek1K2k2VQaVjBQWuTTLTHuysP",
  "key34": "2Lsw16j8fary1feaRKyDfjL6oUq3LffEBSHRKoTQDiZ2dLSxSLr5A7oW4VkaVaoYyAg9Wf7E6Bd4gaA6SS5rNJPu",
  "key35": "3aJzsJ6pdbUTfwSXHtRt2oZyMgMKa5zDKUJtYBkkihsWeyu6XYTdrzVkCBcYt2a6zAcwiRocFrPPAFLX2FfXXhQ6",
  "key36": "4DuyoFRjn6BW1ABN8SQqJMDi3jCYFcPP569yeci3tKCBtBkmi7zqDxLsUGUpoLFcHbE1AKkCuq6YdTtR9bUao8tP",
  "key37": "3eQq2PBcX1L9y7yghxKzD9SSQyHARWiF9DUgo2u3VvYcyAU9Nc7K2dSqws4UQREFHVWQRAti73u5ukzdHoMeyQaS",
  "key38": "3jhJv9JmbzNCXwUvyvoZTRZHLR8WM8xLpEkks1wxFKb1UXqPtKWwecbfGRcsAGoQh2zy1prJMY2JBz4wN1T1kwCh",
  "key39": "3RW5ENJNsXoCTZehsPi3LXtx5ghjvSxdCURLaKFJaniaQLuRVzxNok9qemxPCF3SQKTFS5dmqVQ6buM1B7MEYbH4"
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
