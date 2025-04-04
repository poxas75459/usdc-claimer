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
    "rmSV4TCL3ATrn4hxw2GmQSDJrEt4ZCLdjomStvcAM2fkqEgoxaacfB5NkSt9M7CDYQiFWN6Ycm8L8J1pZYCuKRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KSQPstjAsNd4MNRvCVozFzLHeN4K8waYSPAM6stuwD8SM58ELAj4wxkpRQ3RHaimLkx2HnNQgkZjKsRXZby8iwX",
  "key1": "5krsvDgWEvu7qxcN1cXC38sp45VEJ76Amb3TirEdJLDqZaiqJyqjXnLEm7PSoTeaWEzoTxmc3JscJSTtg9T2MVMc",
  "key2": "C4RPbCTSmBYWaY7vcpyYqKt7Q8vJoMwkX3aCasZHwT5Hf1S1ryRbvHctzEu8GQSbrWaDEqRHYN7B2V6WWevyU13",
  "key3": "5um4xpiwp52QWnocaP4imwskLh5UHCGHwvWHnmWAkWZoPJjHveYiLhrcbuBr5k6YLrZewXHhFB6F3eqhspHUm8F",
  "key4": "zTqm3qBKS1W7FwdC9hKerr8njGKi8QdS5kiEh7HnNwozcqccVxzPBZFFvYxCgDYXKwB4LrwYZpsXeAPpea7KrDb",
  "key5": "38XTUw7vaxLtn5VZcA1sZ3tkFEEjb43AUKF6p33R4JZMKGaCn4Qu14xn3QxT7vXvv4YRshZi9xaTgeKBCW8LFbkK",
  "key6": "5pUkeKXdMjQqh3YnmzbfS34gGWxJ3dqNpwZtzACrLE6p7cGuTTiKTZpPeGEzzb3bkEaF8oWjgy3oXRrsSdhNhCnw",
  "key7": "3RHfQDQXGYPs8qMhzLeWsfKWB3j7ppCpDWNzsVWi1rjpjFoKmHVEaGMe7YWJhQHcLU7uUd3DD7Ym4zaoj3cze2QR",
  "key8": "2TKVExJRnjymPJmJ3x9LQQLMoS9E53DRvHfTKbjdizYwx711NR4AmmTGdzBF14vxdmKTHdxs6Z3W77rGZrXpiGxU",
  "key9": "5eonFTfPscSpk1tkh8bv3Fd8FN19nwVUbQmyP37sQkkAucTbLQuKCZmjk659kGTpguH4YUA6iSjFHK92Me7obhk6",
  "key10": "2Nr6hyGnsaZTyLjZBbrVYqbMknq9ZoZaWTKTqXwzK57KW54g3hmUo6FKvzmW5Pbf1FbRQnvyX7bJxyVqQ4aRHwgE",
  "key11": "4xR5EKFsJzua1RDS8fnP9uYZ6mG74qccphXMn6CnTWtw1PtkNtmZTp7vuGPC2JpWZB7SQRbY2Q3Xg1m8PKtbXFHV",
  "key12": "5mqrYQTvgznkLesjBmFay7tYga7AyXQn5Kwpp4PJrXXyfdeqiRBdYosC3LMs2tGk51deYBwj8GPUN6hWRTTvCWCh",
  "key13": "5ebrRnjdxfjbUUg9BSX249LfUWTJeLzQWSQmnHqTh55893M9TcPi2Bpr6Z8nUonEs2jMh3nZ9gGAe2D2eRrEHoq7",
  "key14": "3KkYThfJx3aFMuhe9LPK7LU7UgW2Xx5cbxsP5gFij1Y4TEefhYpFDUdN5ZMdg6YzSj7ByRNtcExRw7hNAxxPVQyN",
  "key15": "2RM1VpqvcuRmiWQZHUVFfR8YSdruNFiqST32AfozG4Y9LU355KqjBhtTFj8gRzGBDXka5wkyCpD4hV2phDK34LUn",
  "key16": "dKAxNJN3QFWY7BQJ8UGpcj98pBh21JZLWqHb94rnF2Kb9sQFgwKfDNuQe4WhxTy6Az7Hb5b2RNiuiibXrbtWEBR",
  "key17": "5TSWee1CgKPWQDg2cRHTP7oJTwuAMy3xHYGpLM9sW5cRCVekBsNa4FJLvxd2HBbnecBHkWNe3CGB5rqFSKMtjTzG",
  "key18": "2337JX61nBrxCj7zBrf8Qr48ocB9apnWFxcLFnhA7yCZT837W79h6j8KBsgYuW2qoHpBvLCqcaXr8F1jgzVBYFKK",
  "key19": "5L2aBqMEQbPw19dcNVS8iAgLtpPTz1d6ane6ihhuqSs297bzRvj66z1kMzPRntR1nKGHkXmieWLA7Vhoy3BswnwS",
  "key20": "28tPB2HbAbZXUnxHBRvweZ1C4a2UgfabkmkUZMAPaqoy3Fg9Lnf5ketLLJPtMJFezhHu4etw6MutfngEt3eT5UJE",
  "key21": "3CpoyZbrPNgVYXHPPWQWtz5BCfSmijH6csNbjkWmMRia7g8fU7zGfd8h63fqnQonyNTdxdojeqogA55uzpteQS7w",
  "key22": "4Vm6q23VtxdWwFZwiuVYDcw3etV9FnC4D7HfwXrnmNcbsqVpin3Gcz2EwYqXtsUZtYBXhTLLCg4LTtjNUQuzTXYX",
  "key23": "4estqGi2JSj2qAmmoDHezxbh55WQy9wkJxhFs7Qxy9PNCLrK4axNhSm5qtZ4c9w9z2j2iPTVphyUSmh7vEu22UQR",
  "key24": "41Ebq4nEN3Db477RNx1N77MdmJHJWgZZiu5mXQ5d34HwxBdeULNG8UkFFNMTMcoXdDjkvVnWn7wi1G567Ce4kTUV",
  "key25": "3utgdZPUKFEDtHReh9Ye7G3gTFTU7nBVKUhKjcTeiRy4y75KyUapqe44tLoQDP11yJLtEddgkjy8vVNtBPcqV2p",
  "key26": "2z3XqceNWAA53W8LfRTPov5EKYaV669rMSMf64Z6K5AbaEFEc15WwsNL5mXDoW56JSoUWtHNqg3YXyxmU8y4X754",
  "key27": "fDGCwMMiJ8epymcUA6cqeBwEvP2u7hg1xbP2Q2EwbhR7EQu9NDQVqXqrZhEvZN9LsmHK4L1DQjvedCsFaN85huM",
  "key28": "eVySLgbfxQvr1WxeYSfgqdCLvYtmjrkNZt6qzkuAjhUswEY9XPUaLP4xzfK1tu6dKia9QmksiBKNuviJJ4TFoRs",
  "key29": "65fG9rLePDk7ZuitCbPoWqWfnFUBaq9W6bQwcSMo8BFdB1aUbLEGscge7UuBP6uKQwUJHjuxSScHv3bMk1HLR9xz",
  "key30": "2pMVtXpAwwBijq3cM4bMzu1oLvQGqaNwzdJHdoxz6Bch5GnYKJYiYULbxJmTaUpju4ddkmNQhvYjK69sYBodLBw2",
  "key31": "PYqfMkc8hchrH5t3XFChLoRufoEMWxomyBSd8GBNeqPNMErJQr79xB4SpjQENHpNhvgz8HEp8yUNcYikuLkuKrB",
  "key32": "4bbXXssg5UwYXrnV7Yj55XvykFdNWiEoKUH3ZqvyqfRToUFP1czwfdpSMGuTthVUzutRw6Dmch99HoTPXU4XZZ7w",
  "key33": "5hz2hvc95zcgrHU7X8E6KzRzpEkpUQkbSi58yJw2ywkQnjJFiHDAvfT96d6v1jEs7gJa5PoeiUZXCx7QyXujXbAY",
  "key34": "a1eKMexWa9HKYWfsoepzpF5L7vNDM6sLmcabcagZ5vX3weuyUnVMpxGzjFrqW3PwdhyXLesXJYf1s22q97ZzPbg",
  "key35": "4NdUdF78XyNmv1zba8Jvsa3e9Y4efXJ8FhkTScoJCj6BR7Qqk9zi4sncbVGh6hXWvow6PiiNwKqj4WpsTJ8KHSV6",
  "key36": "Kib19iGf6WXJv9rBPJt1TQBHGHbzmRKGriv6dsGZt7XyiHdupqGsZGNenZBp8yfMbEWHaSAmJkBQDWZrZenV1hM",
  "key37": "5Ek26BQjzGLjQfQ1z6ZvxBgGjyrG6fom7zT3pavEBTG3kQDvt8w3zUW8BB6Qnwjaz5dwfeKRjMNgA6yewRakgxT6",
  "key38": "39JJGfUuCGHkz9WZMK8XBfdC9f9B71CpcTVFTuBAMHXhsoF68zFm66h8YW6ru3uBJxChREC6fkV6skBNenxrwR7U",
  "key39": "V1YsSu3s89BD4GKmjthB6MXvVpREACuYZds4jH5UXFFUfHmv1w5CLYDHyGkmTrAnnLBWTzskVV9tnKFG1Y3hzhS",
  "key40": "2AvwjKVANqXZmd7uC7rRfFLT9HXJqxTEpqNixqX2Hs31jETAb7wdKtLgD36vwXVmhSFcJNuApr9jEa4SL5yrhuj9",
  "key41": "GNiR3C1ysu8Bn6zW63XRj8zBjbW1MYu8RSZnvGRDidjeXqcSvusUsb9PMYajQG1BwmPfy98todGheuAQAZ6JdCE",
  "key42": "5BRQ2qaoygoHLEvRrftLRc6XvztodkcD27iZxW83LELW6CxHb7UshuijJHWZZfavgx82mAJBMc8m3Xf2ZswUwtGq",
  "key43": "YPKGVA1mSo6sokbCwBcuxFJR7MoFfio2RCiMuUMVJYmf69dZtykseDBA8LvNpxZmKcfuUaGyQxC1MtpcvypnTUt"
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
