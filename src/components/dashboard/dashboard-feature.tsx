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
    "3FBCtqSZD96GKxVYz7i3ZcBzz7rLxVTZuLvwvzz4vxoNdUn4T2eaiC2zzFBPrJRFk5DQ1Gvre5WzMgK8wwjRnKkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kd8pdE2fi5H2GJ8btjYaT358gx1b5pA1LjjF42M8wzC83XgXDjXTx8Pg2scRdQMkbfjy3A5Y6QgA3cc9htbjngd",
  "key1": "5jgRQharVm1sVrBz5DDgLS25sBVRjJqNKmhUvf9gNvXjjHH2Ndhzv9jtZztiuwn2rpeTT5tRb1xxkLD2aZ41mYeC",
  "key2": "2Cc99hPLcdHGUF12qkwfQswuaW8DUeJFxFMQ82bSj2tJc5fXsCrf5dvGkSeXDJbnotqWc6rY1nC8GpZRhBTgCSCV",
  "key3": "6698CWbuggerYMiY4kvJptZhVggMcc5ZzW2PJRbZBf8YHf61GXoeeUYYgnxqKRdntjLy1tMMcYHgZvAq9JqsKPXZ",
  "key4": "5pJAC2owNUXKqv3bfreThZRVSkDvU1MA7KQi8PuiPMUjnUtd1jostLS2Fq5WMhd2ebXQud4a4B35HUYswggfpko3",
  "key5": "66Nraqa636H3M9z2PwZVMWuTKUnAiTvaEL2oQNbboe8p6EuKc552qbKdSA3eidpHtvWatBkvEXREYr6edp2Yd5DJ",
  "key6": "49zkBEAFKjjvZDA6MwizCLwkKXb64z5muJsfjvjkmWWonYSNsTgmURDXVSWBWWfepHhfUE5MDjK67gYH2WzKfmR6",
  "key7": "2sUeEGGNEgDjyCYBvq7mogVKgYuXsRtnuHQgKebvUutkMqNoiTAVStcdkhBMnY3bp9hSsKMdkyCnCR9KGzgc3zz9",
  "key8": "4qR3xjaYtos9FDKGHNkc9zWnz235bwg84huJp5CNJpMYW1f8UWtyvUNRgqZ4reMjqNgtpyqkXjRhBpBEfJv7an5f",
  "key9": "3ehDBvULd1nnih687Wp7KSJ9JBcRwGSkXU7LkpF4bYakePcdfs8tXMFnrnqumQdk6uCSQHtGGRaAZVFz3SXTKwny",
  "key10": "XCT4N63BYXUqDY7LVNZjk73nAquTVvbsjXN42KgaTjMopRkQXL3gqDfhLA6pNpSCd5D2awjbWQGMi6LuPVAf8NE",
  "key11": "24J3ttigDHiBvxS6pYVxPyihHPVVHhvRu2zA5FyDbYB9wmHeDGmUGjntv5pRvnYhxUApn7poJuxACtmUPJFrRdXq",
  "key12": "3qfbqejp7jPB1CVkuNdMnJX6kr8ycYDJu67YvXGVSuc2kpwGMHzTUXQCYyHEnd6rSS9eiBoJCbKrbha192J8bNkr",
  "key13": "3U3EL7quektCnV8sE5xz2huYLu9moRxyP49kWPi4TdPJyQ1ehFEmjceAjcFe3xXNkYJiaeYXsS2W1zFgjHqT5QJj",
  "key14": "4hJbGhcu6AmEE5KBwmpsZHYRXqCYtK4tn3RJnWK3WcRwsE9cbPCRezwK9wVg3VYQoo1DNL4T8NEaiHtPFsb1KRhU",
  "key15": "374nrm3hJzEUjRbbJ3876jAZetvRZcjVRr3v6CbdwUj71FE2EmGp28vnK52ohDyarnWHsowRmjF17kfMce7896zS",
  "key16": "2JFgj45wGbPBpY9k9VnUaPtiB3b1qAHDdUQBaXW47L7wjN1CdLntPp2Tte1Er5tKWgEGZSKcEaiJD2BYVuU3BXTE",
  "key17": "4qfFXfSdrgTiy2cN4UfUDZCp4NGFs4ptg9oDLrzQYozjy445aEVmfwN6yrzxWY41wEvKpXUYTif2z7DKnva1yfK3",
  "key18": "215PZiBN2WNiGg3F9EJf6kaHrEyUsNuw2PmwGWg4CGSScwQEY7GvLRj9V8zToEAQ2MMeQEktR7WyGojoZUd5joni",
  "key19": "56rkydNAxJMTvauB3QSBQxJFyeqXxW7csVjt2xPiPCKufDYWXx9Zdc7qSHDsCHMFTM8YnEDg8zhnmuWCdJYyWZ4V",
  "key20": "4y3K9V6RxXsJx6Vj8FRR92A95PXKQMJHB5uf2N1F4XieUQW4JA9Braw1oTb71aGcP2KarLnKaWcqBRTpnNaWQXxa",
  "key21": "4C3cvn3zp5rg2wNib3LQioBkELprqTmCVrLktzzeewcPep3YDskSR4nK47QndVKH5Ude4t8AUrDNro1pMqTQuD4i",
  "key22": "3f4MywwgSi3tKL5aCbF4dS62BS1nfsXv2tjLRpQdD8LV4JuBpNoNBH3oE9YmhqVTUCDEPRPBH3JWMJVP66DUT3ys",
  "key23": "ktJRG3GTtxs2aKnGmFoo4PkQuMr89bw42LxQNn5bct5MrcEUwGeW4KhXAJ4W6KufzzvAky2BxsCLZ2o4i3WFiQD",
  "key24": "584aRiaKCuQZ8ooSr5GTNFtvMUcWeXGyvpjYzKENV8hmzXv9cWVPDaAF13EHKS6Xm1JMEGSknNQsNqfj7NuwGTVg",
  "key25": "8XZDFZs5pjuGiYfcnStFqUC3yQM33n9izBTEzFkys8jJza6i2d9HR33jsc6ra8VkHRuNpPaEcnfhsGpucjj5sgr",
  "key26": "umfLjnjKaVZaHo3KomoLHXdKiir19E1dwHrLbbJYmSJRr8s8fLfq6KVdFfUBytaJeJ7zJy9mhydF4j8oLgrm6wb",
  "key27": "3ttvJwuU91VZ7DDnbJsh5edqzdXWQz5j9xaSrDpvLLUWt5RMVi5ejKwHjnHiSgiHHrzLxfcEF3MvKPR1acLLgzDC",
  "key28": "4LCVLv3x49sU8UUqMzBSKHx1sinA3bQdVHeGkGqYCCUqsUKiJBscozkSLmkBS5vNwUWTweXN84SX9wBGuigpQxqy",
  "key29": "kK6tASAUfDwqvvKiVMrgwPJkPNtzTuSeMwytY8HU6QpYEEE9KzGfAKynQ2WPXCix1Je75nPYUS7d87v1k5Hsefk",
  "key30": "51mvjmLF7gK7h7S3Vo9v8BwdsiGDZbdxuz8HivEhQdD7ERAeEERPaQALT75agbU4cDkdUgrTV7CJn2XXPs92gh8A",
  "key31": "3bUMdjk4qBbGk5wkaxwqJFcQhJgUmxnAngPnQdTNhpgVSpk8RcCawxcARw4abHJXCPrp8rVQ2twKdweprgrzZV19",
  "key32": "4WQFMaTzhqSyfZ57zYCpJXAFt2D6ETndoFYQM4gzbJb98c58DGFtkzb2hCnAtDvH4pUjmBjeB6G5pzQFPettrjnu",
  "key33": "T8ojwTkGJDGttEP6c3jnkggHXkokuTxQJfmmC8Xuq2SoPP67QD86BfMxsi9r4VCRnom9LTyaB9JE4FCvA3hhH6h",
  "key34": "4zpnSZBxF4bq564GYxdXLwXRngm5mrbM51YvnumF4e4EsEx4Fi4PkurLFYRyuNLwSvt8AkitrmMJRgV4YpFyMzN6",
  "key35": "JdgLRJcmHTvzKeXgPFVq9vKbEA6i6mfWxGFSATTSDUoz966rgKNbCDwH2SVrbnBj1x3poucGgMufiCrxsDVbHKa",
  "key36": "32DSx8yDCXhFmAjsyY43z4uuzSMVKRCQVk3sGxz6p4vkVa8X8JRtrH78EE4LQqUBNY7c2mhTpYjTeUZZM2pfdPSz",
  "key37": "4LeZQ36mYy2HVD2g4oGo5L9RofrfbBV43wkMByXVikvUdMYAdiG5cRGvBLwD4fGw4bbsGkuVvvyyRgyK1H6AZ4tK",
  "key38": "2Nz88gk6EUYHrBU4eHg9hd7WgmBpcNvAQgozn3QJVij8br7T3LVGYH6TTcWbAb7cWvfwqqhZbuqkBFCCp9PTnRRy",
  "key39": "35rLync12iRRzSxQvMJfoRttivmBHvTf7vo1bxrcbMNpJkrAKKHpsxjL3gSMX1PKx7Kwpk7czbji3kjUZ2GDAzVj",
  "key40": "4a6FcJymefQBJWzh8cB6hYxVwDTX1Bp81jxZpy5KFN3hqXWjT9ejJr5CBVECrkGf46E8tr98EeXAoBktLaThGsFz",
  "key41": "3gCCth6scbYhhHskvXasxZYJGEKsoE3Y1XCgnEbqQwzVCtHsPfaKH8DDksuCv91qm6AufGbTFgtytGRD6twAcYDR",
  "key42": "58z9QEYANguAXr3aMF6zCYYTmEkcWKWimV1LYcsq9CBew4PUXP6GaYhzDkWZ3Y9yAC7RgvLyoFdbJegWTzifVtT8",
  "key43": "5MLmJybkXsRTp7DbnvvQbMaQxpUXKarHNtheeHQarA7gPFjbR2rUfh8HDAkRuUHW1i7g2gadEu5t2MuBtwNWK86E",
  "key44": "2dKW5YLBat3WGMmxxK6RbcuJMqT54W2QurGCbN3eZ2jPh5Lnbg7VrXbxzUekgTb9t5EyDWCA6KQrM91FcMyVXzHw",
  "key45": "4RSgajxA9wE1fD6jxgYmN5FJ98SfLuJJV5crLjjvxkMGjYw6DdUxK9AttGKWB8JWAz8e1aK2teNv26QerqqKGwF5",
  "key46": "xx9aEpSQyUoxPhmTgYfP1H9tmFc1658A9q4KjZNuhj5UHiX6tSzRqDeCyAkgSEXrXmi7n2iBdr7nMV7fagDyeCq",
  "key47": "2XPEwPmj8ueyes6s8WDFDrpmHcnyzABXAGdJkNbNNUULphD79arofzFPXE1xwzewCLiQMMsMdJh9dHx4JxgULpS4",
  "key48": "2dsgiWz7jHnVAb4SvonD81z7j1Xj6U8etUep9428j4gcqVL3MZ5AJyyqDxuiUgzTYFkhGuDxrgtDPf1krTh8a37p",
  "key49": "5uceuVRzwM9sCPjh2nv7sS7gk6jqT7XJrDpvpo4pz6JduRdNX29r8uBBrv4gsEhHs4QHGjwfxZgwpoijiLfNbiyU"
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
