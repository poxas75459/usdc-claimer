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
    "4F6hCzvkGmw3DLr3cjKDapH57nQq6WdNsFQjH21irqpFLC8KxWWgAwCH7LynJzFzsr7LeF6RiQ5EXk1VWV4YwfzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51MS5PcHqpr1gUih4pt7yuV5P5ndwfkHkQodtmfnXma7xon33ZtEFE5RZikhrhYFb6hrAJwfEKuapuiNZBQwk4Bw",
  "key1": "5n5BpbSPqJt5xvMvUMbGePDZ5mNFVnhbDLvU5CuqNVcUueju1jjbDkFrpEjJx5zfbZSqKcNsCXsh9zTorg9no8gm",
  "key2": "5XD6z1u8z3uCAyGRT2Nbieix1TtLmfKzHp1CGJZcDv7ivgGDYSfW2sSQYBWC4K2JHVz9koJ1fS2umKuAnS3fUwPm",
  "key3": "5vEmhFaGfgZLJ2kHjMcFdfQgdw2YcmpgAcZNbgPBKgddc7oecBLrvJ49PAE9Q8iski1F7gTaXjEpiraT29BCu4BR",
  "key4": "21nj4Nz5b1Rz8ytREjC1CKuL4RXqNSvoBH8Fou2i2rJr63HEa8y2dfYtUL3QukrR8e9UWiadkNv6DUP3FVUrKb4f",
  "key5": "5dd6nEJsoNfdiC9uWj54k41kKwknCBrNCUFq61CpaJCr8m5ysQHt3hriXuAB65imck1wwufRrzyMKpBTBuoV9hFd",
  "key6": "2NaxGg7oVM56xuqEaUopHoji5GCBXMq3nFgb7HDJwSuXwiSwVkX8r8bwMB7c3vwYb1NouWRwQV9Ho7Tj9ymKNiAH",
  "key7": "2Nx22q57PQcoQ4pCD3NKxn4daxqZ99FcnPrq8bdf1LCj7GPMDKuuAewztgGNgX47DiRZzt56xqZwyxSNFyGABcb7",
  "key8": "4Zaez5NohsKhfQSXZQVjBbNTghqC76QfNbHLQCfd84wdN72hgMDBrxqtG4Q514C4JrCAnk8jepZP6ZVpi9baLMVW",
  "key9": "3sbxytnSGN1Qqj1wewDxvhAdGYDNwZipHv7rcARvPa3KPsyfdFaxc8YXZsP81kdoFDKRmD7XC6GMqmeubrGXpWzg",
  "key10": "48JnWxdxfA1pMYiVmZcqyAtrzoTtDtyXxkUxiD9tRiUAQkuNcJrA9RkY8UqqLmR6fCaUoKVhpENoT9h9eN5ZysGL",
  "key11": "4XjyX1P2JSdpYLNSPGhHwYGxjtoA5D4p1ddtsR6VNN3qXvCp9kbPZHawSAfmjyBmMKbCS79pb46nuVF6S7pxCJQa",
  "key12": "5RTWZCoaoXkokguuYJhHDLui8icNFi1QvFtdpRJrVhXs5t8HwsvY9LCoWjkpMithGMwQsDQX7gpSRzkWHqdsvWHR",
  "key13": "2XmJLyb17mvJGquhUqmTGqAZuU4KxoxMSyXnNAUDUSVEf7yYXMminEFYdN6DkLhJiUK67uQQNpp9pA4JYQKsZZ7o",
  "key14": "3A4Tfr1YwJSAsJqg7QQA3VoZoUDx58cw7tJsSR453zmhN3uUXsAYpKmHpHeddjHtJnAPwqpNBZ2VWWnenerNbCca",
  "key15": "MNGDaaQptDSug49onmx8aUonzWEuhChg7wJtdKKXgza7Z8Kk2eY6XHnCa8ahNmKGTXisoKxtUPZmcnbaEojXCfY",
  "key16": "W2VaxLRpcoAfDpBL6ZxmMvSEte5gdyu6QaKEuBMCJwmgRwAfaXXj4f2ffJ2k3vQn3fCCxEEUNuTYHhEWyUYRGDT",
  "key17": "2LsVrY2ygHfPgMzoj5PbcD84pvutbuGfUmeyXuG82ZnyLXeRWrTuJYWB2HjBkVCKVb7jpu3vjAyV86js2wcGPeSs",
  "key18": "x18d8ZmPiesKdukePVok9yF5mxs7QQ73aczs3eMbtqECUb3sTxNLusqPBBsWM4k8jh6csLU6wuxoCNGtfyxCoPD",
  "key19": "3T2fHuciuNAke2ifLAGc64XXtR7bUfqeKDDdNUKVdt5EJccXPYYGvDeTuA9499xCstpujUF4tazNYBNeS4QDUj5d",
  "key20": "63pGEQrKYqoT23wnE4hj2UsufFtYRhbcUSgGnud2L9xpx77tZ8nxBj7kZyMLNU6GVYgNX7CtwSBGMq8tEnvzFRye",
  "key21": "7YC8mFtYX3ySK5dGruAmBhbkfGT6ZwEA3QRZh2hJgifpfVo2RNB5mVRTp9VxmHVpX5pwxzqtkEaw7UXigYPEsFi",
  "key22": "4y3uyJD6s73XMZmBUPXkDm1JixqMxc8UTahKdKEXTLMRUqq6Ydq8eTfPreX6RSXf4i7D9gHWcq3h6XXta7QFW3mb",
  "key23": "35o4AHqq4RY6fsVTaB93wHTZ3nwJXB9teCkn2sJDL9rUdc6gCFX5q4gwDvVSi2UCohAuytX9mcTn2fntBHcpZ2Wf",
  "key24": "DFv3XDFZvVP7uck6QSCnJWCBgEDDsWyJAxbtvEjFYUWEmjFX87fgkec3fPBsCx2FpMHvgneR5aHyQqvuXDXkC7g",
  "key25": "aFWVxemPAdpwseFPuiiiZSfVSp8yqvm6PQVDCea3zYuxFYcfk7SSacEP78Jeaeiu2ewBa7e4KVo36ksqXtvqdTK",
  "key26": "2mta4YmynHuZgV232YXAxo6EK7gCkk3u3mzcLuAhkcjA6iGs2bZT4pXsRLb9yPpxikWDn3Pups8GJsQMm5RhYPJn",
  "key27": "3FcnQwzyt6kN9MDyEJFu4dDvuE8bQnFW5HibcSpTZG6i16RL5yroDPsx7w7ucqgThZzD8Q6wMr4Si5xd5PnYyJsg",
  "key28": "4jXGKKHMPeiAw2aDF7bjmG3Rf2Wr1NbfabGGULecu8gozsBkxfXg1jJ4QERn96T5zDuRwAxCM92zfBa2tXCzBtrs",
  "key29": "g1rsEV432KQkqAEJJ3oaHRR89343W82itBti3SXukWYkGYBRXDncrqkFV5ro7y99hx4nicbmWsudkbwAByroBtf",
  "key30": "4RS49GwFLhseyDinfXNzhNCqsqqW62jH4pmeDdiapo5YyaipaTsV7dCiTtZgKvo6GyDMHso3Wc99PU4Vqb6FXs7m",
  "key31": "2oXToUu1JDStKKcmp2DMFyKi2aG7rtdcnss1BDv678UaBJCDt77fX2UPvmLrLLtL2EuwbkEAp9gitMCaypcBAajp",
  "key32": "5WMPMG2vDR4a1nENJ9TgtVFD1vkqyCMaLJFq7B7Jc6nPysTp9ujHx6wrQu3D1aiLBUMVMj7rhBU29YxDnnfNMFjA",
  "key33": "56BzyfWDrYXRdf7uhTbRfcwTLow3aKKT4yRJ3ZZ17bAV1KoGtX8XKC3fbiRSmBApvcsUUkjvGuxT2j8Uyubq3sZZ",
  "key34": "2kMkmTintTjA8sBkveKBhf2yn2kRigrFxbUv1gp2eU93hiuuuY88Wh1PDjYr7JsGaqZ7Z9hXHHX6Xhstkvn7yDW2",
  "key35": "RKxg14ngiv5bCvwwKi1Y1SVp9QT48QWNxZe7rp4xEDiYcebD793CVmNPXinZFCtN3qQh7Rh94pPee3TwPxnSqGH",
  "key36": "5rdwPryYR4dfTsemR7AG5NiPxoU3Had29NFqxepyGrkfrBotqH7uEvJcnkGCajURdfVdXpL3jNNSR38EL6jm9yH1",
  "key37": "5TczQss1Qo1uwytmuMig8AKie5waSyxL8uEGFBRUhDDhv59KDJUCW57RA5HLDPbqgUeuvGZqGzScwvJXW5g7aH2C",
  "key38": "rEXGh3eQ8FDX5A4JpbhEAzFpDrbHjyw8fh5cn3DxpRiQKHQzi6Dap8WLtEq4ezN3d7JSQxGENafsCZJm9nJkq8E",
  "key39": "41VndrxLianLXEH8AQz4zoEmDcXxbF7MsBvE1svEQkJiQy63PMU6bHEv4bJZKP8cNExR7SuXsjXWDGNMhMVyRcuu",
  "key40": "29PdgAfEiH4dueEQGyG68W99zDPUAnaEx6LXT3uMjkaxr1vfczCXzxGXdGqqVJ5pwLkBHCQK1PEqyVBjKUNZrtE7",
  "key41": "2B11tUApZqcXetCWUrV5Umm2hpYF6EExBxzLnT7BasUio1jkjQR6AsbozbvYLEutDUtnvEExRBvdcAJkYwodomvn"
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
