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
    "2bH1CGfnb5hzAehwxZ5b9HX8fCzgaBSr9uju9nsC1Cem8nxJYW9RTtALNsyBPwUEa6r9vup6tnm1UdBjcnJzz3L7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QrSjBvRCsemTx3hUPMS2fjDNL5Ta9x6sX62QcbyMsNp31h1D6eaMfSPC6mqYkE69yYVaQSqL3zjP5ePxUphv5fv",
  "key1": "qYQJCRA3DHDfWSQPpMoX2E3kqbcFaz4L1mRXUwYudRLpVTpwdcppaDMe4HHorDejDpTymu1APP6qHEqybPiq6LY",
  "key2": "4ozPBTFcrJywC6j6JHDoHEJZ94DPFtjA8b5oBHYQyXwFBj4iuqESPovfH7Z5Ca49Y54qdqaXAp6XNKAYUCfZqJB9",
  "key3": "AT7efL4pST5pQmoPAXKjrj3nuCFESUifxGn7CQhE717mRHGxS9k8gD7toGSjdpjbgq86aFsseTFsUQ4nRRorBbP",
  "key4": "2WyFFLA5aymM3B38bjMXk1L6ewZAvQDwUbaJLWV1wx7xAc1thyYgM1yYuueJ2AoMvkcneH8kfSkygNi4Hdf9SKDE",
  "key5": "MvxJBv5xVHzSPUzSDpQ63CiM7PAqnV77CCAsoS2ozvVojo17Hy63jXKnknD6znXW2G37Ygss5ustzisigcTEzUk",
  "key6": "xiR1Kf4zqw6k6nPiysCr8jJi8pky8YqKzb4wAqwqoK3FnNsVGPzgfRRb16Q16fxQkezYtdiLXxGcAqkGYikoCER",
  "key7": "3kyQhBDVHjCeF7EDGJpxJZnvoT7k8U9Np4vVEHazD3FwDQxLHQG2N4cYYeSZq37KM3kwDYRAmWK1YpNcS1V5sU39",
  "key8": "22f6PRxg27nhK5WbVycwQMtL6pAjKACWtsLvSs7vFSdgSXkVhfRec5jLjVMqNsS1vdnJh7wc96MvGNRfZVnWidCU",
  "key9": "44nYQMGCeSKi8TregM66FaSTUcnnUbJG38WMGguGXk9CCZotSMPYWiNE7fsy8B2krH6WiJC4aGwp5f3wWBfJHtoL",
  "key10": "4QwxrMd4wZFe1gS587zFdsrxef9j3DmMohtzjVMFdGPPRaUbwgg8QmPHMM7STkN8DSxzTCcseqMAcqmbmm5mPnz",
  "key11": "3mXVPDa3AuzH4ALyXB1LgRgfx5UCsLd9JBkpoxzKqWdCUvr6GywcTFpapJkGKz9HFGs5Q6DZw5ASrVubM6NLuiHx",
  "key12": "2nr5bn96MoLtJQrr9zEQkUhvGE29VesAqhXM7uh4GqmM6VSHcVYbkcWP24vfbC6mYKMYbDVZ5xSb8K2zDSdsHyfg",
  "key13": "2vN9q1rq4G1oLe57JtmcfWAtVvoqMH5bEABarK2nvbNMRuJimpJ3CD85yZnNU1fwnCRLS7oeqt6XZnV7htfu2myZ",
  "key14": "5DzH6misgibob5v1eUgEHfCNbdWo462HPpmhsP5szKYCL7FZWsE1QvZRkkUjpCKiJwQUgxNPoqfGXboRogYtys1o",
  "key15": "2zJ1Ui8CYr8vpLpwaeiaLB5p1WV2P9iN9eHhGbutsjzrNQ4g4VzpxQK5YXZypwBPUvy4Czrm6Bp4hndBPzmuWivw",
  "key16": "59ftVYp7kyHyTzrh2ErHFbek6dxzFQGPSmB7QuAhfqkxAY8AzZiKM9D3RfYauwQ665aw9MR8vfzbq9DwmaWx2XXG",
  "key17": "jMw9iUQ1QSNBGa7ob6KzyqiZ8rGZquQDxgsKmhLm8mdnXa6ezUwWui3BNmG9KH4fgeSB4rtuH5eHTYXX3CQHSDL",
  "key18": "o4e2SbgPq21qKsAz1Jcz3MztZpz9tBJRRKHTpoa8FqTeRb6cPqQG4AeB8bD8DeT7RTQZV7vqA756xGfinY4amKp",
  "key19": "4aSQ4PKpH8zWpQnZrW2mmjWwYkgGmgU7Wddf3ZgCXZd4iixo3r2gKPPNwaXSLD4Vexnrz5Ztp4PUjRWxPwLy9G3X",
  "key20": "5P6JJevXtTneXHwBFFGcygGmhUSoifnEpuNKfxRh22Cw4pzmZiXtGUVCCPNhzzkhwRJCtmHQNLG8XvJNEX77j6Y5",
  "key21": "2XCA1FiEEn9LaHHApWvNENvCQxrQ9iXSHHijNvwBypJsQs9pnwWQd2KgmXioSkYCDUDi5iycH7X5nBnWEmE6YiRh",
  "key22": "FPR1xVcarWPCPF6v63zBWn3vXsRTL64bx8FzSoNsm41ZhJd2vPZ9iA1N2nk7JAbBXcSwoKa1z5GkQuqJDGzhTFE",
  "key23": "52YCrKugd6QfPLS7V9hLdjN1E9Vit4XzioLpvngwfazszYdq4TkjMUbcACWf3vJeCy4EdT3gujxr8vRUyPyEZrBT",
  "key24": "2KnqFeNGJemJTe29EdbCzg9vY3eiet1AMrjCK2FWarSLRNAJYgmuCPmEWYUFwDHQ27fE7wpnbb7nBJfw6U9AUBWE",
  "key25": "QGNkVd8jaLrsvK4FPkUjNBxcNzRvwHkgfMMU8c98dPFBKuvcAeyAeWRMEUWfgKjNBxoBc2FnC6UQT5g9zSPt8Bu",
  "key26": "3DZYtUxCtUzm8sQzzegLQ16mMo1ijEBg3QVNk2s1Q49y4czsxaWWHwCvjrHCf4WTXUPSS3NKW95x8tjSDkaWiykP",
  "key27": "uZV9dauZNruMg6VVAaLT4LN67WoJY2UXuvke5NQyBj7SMJvwuYhJJ1MVF8DiQvenHXCppP3n1jH9fCRGaNGCArZ",
  "key28": "4C4VczHmKSYpmdEAZYcwmwEQS8ct5qvkfzcA2ckobXyuvsBdfUVzy1TEYtPhwxkx1A5fw5xT6o95yttBufAWyugT",
  "key29": "4nRUrJmj734JQyrZ2A6VEXCU6sun5RyCH8TvzYihmeQk9ckgcx8ek6nDDnXSY5ytvJcWvCYcuf72EaFBBJK4MbVg",
  "key30": "2pciADLfstUKd2cJEJtoG27vRG6SemTMyYkCuH75hMqNGaTYmGMPRiJWxFMbTdbBjk6NSpXnuBmwhfws6pCazLX7",
  "key31": "3K8mgi5AGJmwe8PAvg5PPraAuix45acrYPCPoa8R7pRDSiC41EvK68T9xh9PEkQyyB4euLB88H1ZuPrziDj7ADUE",
  "key32": "48o7v7nbK68Q1VKua4fxWcwwVkfrj8o9GP7b6kxtH1czVanuszHorTVH878iwHUoV7xkouBcgdg94ULuLSRX6Vo",
  "key33": "4fPEw7nM9zq5Qi2fTVD35pAbJuxyQxgN2a9cTghgJ5Kdok8dgiD6KmgpLJZbFhP7HKEoRe48XZrgHmB33CYNimiA",
  "key34": "8LEnBvZFXP89YYcTwHjYChorTQbyaz93frc3iMXbpjkxG3WFB7sdKuP8fDaTrfhokEY4peKibiHFYUXU8S1gRRD",
  "key35": "BCkhnTpY354zZ8YGq6bU7K66mQPixNUzfC2MQbx5iCGvTxLtfZ1fKXEPTC8Tut6GuVxnwcuFMgayXXhj32MUt9m",
  "key36": "5FsyLNvh3dhHWP5fLWbnMB7QgAhctnFY3i4umkEwMEULvDfdQVKbFePT326NKD9oCHQu6A2PeAuHW7GCTmHttUGd",
  "key37": "4ipJ9n6CRGwm8XddiahGx5dXYbqYPqzZn6bHm6kpVSo6soxkNbuaaKV9pYvvpAmjrqeTvbK4AEx1bXFW8MEhMDx",
  "key38": "3P4BU25VuWM7QocJUDr6217ix1VHHXfz814w7mHNZedMWaKPtQrNsDWpsuiYaMogBjeXs7hkSjvXvMC3BUaF6kwi",
  "key39": "39dAc32fAS9vLwcPcwJw4CWyYZbzJj1nZguUE7g6r7qcZwSWjdembxzsAXPVVZQ9rJHJmMKvv5NW4aiERmeT95Vq",
  "key40": "4yCwG1SKbj4xvQfDpzJ6a71c9EuHe2Se9pnE1mfkXaQTRV4gKougFoeCJoDs9HAtWkvTkG5yjFFAkfxSSCs2uWao",
  "key41": "4bsuvaTimD8Wtfd8yGwhZNp5qYEKjFAAqBMkDZ242QwkxXv2kG2Yf2W69MgimSGhD1vuducs3sRjUGwmKqUkDoZK",
  "key42": "5X92XoFj9WVmb4h321abpXqCr8wsEooKkAZgvwsB2CNG4DhV3efpnX3K6fGA1T7jFmZLo2oM7cPggGKNXFkbKAzD",
  "key43": "49m1N7bXx9AS6Dg8Qm9RjhJJe1R7uPn8458u4TQcz8FgbKjGo3EKvzRW6WX7SzWqKJwdAZK9cwWpzUx8LgYUGi8j",
  "key44": "t2ybEALeQyxmfjSa2yqMrEixWxyyzjEkooi9WgyTRTtzfCoZJz8SnqYzr36ZsfzCUf493yDcCvLdZ2HeHsxmhfu"
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
