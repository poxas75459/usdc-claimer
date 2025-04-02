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
    "37Nc1q4MpTGGUqTbiZ5gcju4YtJLRnCi4s5mKhQXSNXtD1fTJTowHmCQ2gKFRRwrrNnG41PN6EQ7j9iF9rWzjTHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AwqkEywAKekH1AEqANaJR7Y1XyPjohdAkmCvY1PeLqfNefSombpSCSu6ZqvDJLFLpi72XyFAc4HQ6TyPWuCnuai",
  "key1": "5wbeToCSio2Cv2MQEaKXd1a67U3bs22SFANHZDQ5nLBzWjfiHgbZapT9eZfid79GXbgtmPQVNaHJn7sbLfkWRAnZ",
  "key2": "3hjSYJqvPY6AZJ8KtfP53hN5DgHTiZrKin5kxDvtPr8mJwwhHbrMatvvy4i5x8sZ87ssDPCn75EgPV32YS92GsyY",
  "key3": "3a1ugGLqNjUBe4hLzpx4CfAGkKNaQ9DAw9RXN48QzmLMsUBK6DGDaswgQHbH9uVvAkThiWL7AuCgRokx8dkDzbfg",
  "key4": "4XFZKiYKhiwNMoktM5d6q6qVMuQkrHmtYNizNq4up6vxFZFvKPzmgSifHcggGmtzCwdbcWe2yBQgFtTUtnFBks9r",
  "key5": "4mzBZ41hBiFBSW8xXdqwkesCKzKUDyzJZS8JP6hZbNMiLJPUkgKTZrxHLqPqbjpgCXj8hj9qzEHh68USJi43xWUQ",
  "key6": "3MRwfgHru52ZhQ7pJd7pnBn3xNGdnxyVLJHgDEBChNnwGXHGaNbz9UMnUkboppcKiea8mgVWrCFa6VxVTDpC9ooV",
  "key7": "ZSuNnnQGPghYHLpoSBA9KTP9sLTdQ5cyDoKrfZ3Qc9jmaqbnxkGEmt3NGHNLoCVhWtbRQRdVtBG4Bd7H6ZwzkgC",
  "key8": "32Yc6mLomTstyPhtSJ7ag2SgYAbkdbyeYd77rgjBaX2vXva6ZxyQRfzJv33msTE4bpztvhQZv4aUDBvk3aRrPSvj",
  "key9": "2Z6Lx68oFma3nndyvrAhc21FKNoP3CtLv7sNQeikS7hHPCHKSLZDRrbTjcx1AFuPGDyfyYJXZRVGEhEQSWt9sPnn",
  "key10": "bM7pyVwdSYqEZF2gB7JxN7LuR2xhzvWMRuzGrNYM6ksgrV7JN78jrcxNohhxpQ7vzxMqvLfTcbRtkF2ZZr9cKMj",
  "key11": "4UuzSNtPXxNEZwiiYu88Sixr44BQrvV1bKkw11WYiGkjLJppx561TxSxTfwBiwH7oMSM7HLYZHi5XzddzTDB9eX4",
  "key12": "3z7AqsGu4NjWJ4j5K6gsaqe6Ws52WChWYxz9EsyNWTXthLaxfFX8jsx7WWgDcpk1ss5aTqGbLtD5Vx7sVs57Hshk",
  "key13": "4qMH58ndEjYeifgz6wh5Zr1MzTn1fdnZiW9HdF7kjYgCkwx1Gjnoy2kWeziBuH6TTeP1hZAzVrF76Uf1osYNoDFq",
  "key14": "HPVnc3KFABUeHsqBUw6uwh2aTEcyf8d5nR1oBNdM4QdVWgqkD8zuuem48YEmmfParYt4mX1qXwwuB7Qm8G2Kjix",
  "key15": "EDx61nd2WtqFV4Dd1RKaLzEN5XgXFSBzgAAo3ejvCfebo37mUT65pAhJfDENrBem8hR4mrHcrngwRFW24tYy71X",
  "key16": "AKiAz9nchcWM1hyPpPMdKs2kwJMLQbAptF9HJVCLqvXv1b8BCY3cptWjmUjHARaadsEW9a8PNLs4nevFypWUzY2",
  "key17": "29nEM7JFTXsXVhTs7zKsVPuVLhzuYCBdhidcH8qGrBk7KWLLsD39BPCwgwX9GUxLF49CdzQdobNBX5HqHFo6nQPa",
  "key18": "2gnkGQDMH1jqu3V7nCM4M6f65w5m2X7AFVeRpGMcEfw78aNjTGcKmF45nsoTJ3Kmb6NdC9vtQyBMGAPdWYGg6hcj",
  "key19": "5BVDC25NBY1ePPWfZXWme7HMd4YqX9uCXFqSWSkr5zASmG7pSspV4o42q5tgQ4B14H6zio4HzvZm3TfX92utk7Jz",
  "key20": "3xywgCiHZE1xsura2XumYSkeDbpHmkrbpENro8PK8gLFqPjpTfGaozRwYeQsVh9LEcxbgMCMZUkF4H639dYQMT5P",
  "key21": "MdsYeKD8kyV2zt9X5s2FR9MrZZRgHrkunxyEXKnRwxcND7zdcNq18Ten8mQAqrZ1ad7ypHsG86FF6ZsF6XPtPpY",
  "key22": "2aoEvxy444gN79KRokTcreu3G9mg85oXdLdsDPgmBtBNP3VixUd669633VVK2bH7puSr8Rq8hLrwwecUqXFPQSY4",
  "key23": "zCpCykviqjLwhpMJTza4gkjJ5VimTjoj6PQyeA2iWaerPdiVpQx5uegwmDBcpmFcQhH8i1LLvkKcDbqbnaWWyZ9",
  "key24": "4ReWN9Y5gEN5WPgDMx9WE51j4Nh5Nch4YEHUS4MymK64g2RdJayitHa3hd5qWZET8c1zwYXrdSRsXe3drXoyFeYv",
  "key25": "4pMuV6eVPF1XDgG9CE2HeTDX4SDszcmoeKhgvYmPYrZucHHneDhW8h5Dt23GLnTqpHePFosRySPWMjQ1Fb3VXtNa",
  "key26": "7qGxPkEixaCzGNBFoJHhoSa6Y6C7A4J7ywrwaqqrM5t8Y5aGWWLo3aQzB9gGHmm2RTJGbfXxfPizHpTfThvADJC",
  "key27": "3dgh7F92nMhQkSfwM1LtBAnuxKKvPdBwea8YEn22UMhtpk6fnwC3Kju7BCEgUiE7HJ5qx5QXsTxYQUyFdJgjezyY",
  "key28": "eGtvxiUGRH47aNywuhfYNKncsbYsG2g1nwQHvwN9Uf8Rw6LwcAHgtV3E4ajybpbnmevrxxKTZ6tpQSqaog9NPCt",
  "key29": "zuk8oQwkWP5o18kmzYyuF5b7PN9Hm5F6dzK2tfJYTHhKYpLsrCTVF6Uw4fDrtQLh3YKSBmoniB5cGaEQeDU2w4d",
  "key30": "BVAcwxnbHBAt1NEM1YypD5mLofAgQi5tNLjPvmHZSgziQZTjewQiW9n3VXEs3Wy48omGKoGSKJohVs47oRSLRER",
  "key31": "5Vab2jaekmXbcNHEpw4bW4kPuNSZMMuV4atHfzmrTZZTgHb6wNifkwreyrimTLzx7uDAd2muNQTHWuPfz5YHfF39",
  "key32": "3wF6Ha6Ffs8vfh18KeC2N7HoftNJZ9XESrbciRJvzbZqRebQfb4tNzVGkeRXTbnjQQrWKojVyWPc9PJYr688mQnt",
  "key33": "2SgF6y7p9mqvVjgNVppr1B5ktUfEnJdUs5d2upAyMsULC2qZrrde4q5uBJ8BsvmrwLrT5E2sHMRKa2HXZEUrLVJm",
  "key34": "2N8LLvvGgWxV8LshNg65vjAMbZedXtLDjfJE6yGnmQHPdyh49uZP6pQuwifyRRniDWspbXHebEh3PQM2qnZWTew7",
  "key35": "KtyvjdTjvwxtn7vJtKXsfAY5o5yxGtGb4ViuhksSY9sn5McaUfCb1ffLvcW3Y5YomkqVXJ9TgxhscwvdErNizzT"
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
