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
    "5SvhgzVDT5LMsF3iZXAWxcByuLd615rA8WSEwt1aFz7BsYuLrdaKumdJPyhRbbwpzWN1ZfPJTxomczJ8LodexLbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jEjGDqZ2185pApohCdNAMpW65soY6zwK4JxzkoyD3JEnfs59z5vYcxRNQqf7g4sKXhqNSniBRWCtwNmaeGiyqf1",
  "key1": "452KtY8V6iffoWkZdjUiLtCp4thNxGD2zTNvG9U3gaTwYs8Qp258rnponrxmBaEHSrncfAaoetRiqJsovi7vM4Xp",
  "key2": "4EP6dRnNSQQBuGQKvL56x4GnZ8cD7onAAvpUSMZ2t7BT2iWoWVtekEupVSfsBYAAASk1ptPEwfdqSQQvgjR2WWNZ",
  "key3": "teKPZ9GGWobD9F4Cnkp3pMP9yAYvteKiXsYNo39kGRAft8x4W7hy36wFijtUNdS9k9jBAaY26cWPM8Ds5xcvCwq",
  "key4": "3UmjC7v6jVEkrPCew8mLUPHjdeJLdbTNvJPPj38KqAWw888P5qU1wYPqNaP6z2qmqdjoGcNME91FXo5VkPJgC5ri",
  "key5": "5McEvwajRZQkanYLAu4F9T4ekXau4eMasjNPPYaxfGVK3SqH8hGuqVrdFmdhGiftXuvKNzF5phPvd2fA584Xjjw3",
  "key6": "5JLWrJeJ1VjBostUUi3yXHzJYHWHyXmbDorkC5VqVnL2HPfmSujJLjHJP4N4PnZCVWJshWYDacNDfBXdf2P6S1vF",
  "key7": "27xTeNsmTn3RCcHLFLiCc4K9hkfdHbPL71N1v5gSG62S8pgbTmh1KLna3wNbCSzqFwRWdctg53mcomuUSzYSJ9Ct",
  "key8": "3mo3HSMNQrHfHWPDLVfJ4zp62zsmoH5yjEYBWvE1YKrtjAgZgr7dhJoLCdEZ7xdpfFN1nxjuMWeYU6qL7PpJoeit",
  "key9": "4GFAoXcMy3CtwusUXNXUPv4gQhupbLNcTJmFvfm83CgLxLCizFQggZAvsuXgfZat3QJrSewTEUc7phqBe3awacq2",
  "key10": "5CRJidQDFxJFdd56BagZQaq7VfEUqyh2b87inkvgPJ3y7sE94nGkzoTR14LZP85P4gsb6Zs8nv4ohTrtHxqTK43Q",
  "key11": "dJMo71foWiDfXkhkrmxLPzN6BrHBE4e1ZRBa5iQ8hdAo1R5a7WasDbCZGRYeMAoziV72V8NJECNCC4mePRM8YFd",
  "key12": "2cGLPB7npqa522Wf4zxh775wQGcBx1izgrVBRDo2iKiftjDd3CfAwqPumzGVFYVhEbxkfaNh35WreiWvNTVa4C5G",
  "key13": "exKDJ6mRYgLAx4DUoP1PMNfijcGCgmq32sTy9N92jksW7CTkkSWSHp9BrnhSPd15MzzTea5314fEzgwpiFSsuRa",
  "key14": "3VEJWhkd8baAa2dCjJ3RxxWooZE9Hv3btSFXgSgqrYBtZeqbPLXCTNhvRghzXaBN7ALZVwgq5d6PTt7N6KE9m9jV",
  "key15": "3wcoNczUeRY8GA9qR2BvAftqXnZ7yp1ioi374QLZhhsWXqzVLTHomRnLkqHhLzFwgJLYMNvjjCR93tdDFehh4AzU",
  "key16": "JDFSTE1UyhGvZjFCuCRATXqKvcKcCxqYPpBkBrRRa9CKM6yisf2ZvPbVe4mSeGCbpFCL9btqMHtEonuaLwTZnep",
  "key17": "44PXcuJsH5tyPkacRQkNn1J6bALY8NJHyDwt9JngB94urzEVg8My1qAHkzHvC6JnWMpmfd7SyxpEY2btosnyv3Jq",
  "key18": "2Rb5akyF8ZC8C1s43XUCFhxDAFhcusVsrQ8oYYmknyWiiRxcVzWuoD7NLrpK1JwC9EWFZTypKD1qM9ie6SDwLp8y",
  "key19": "2wauY9KchWWb8meAJMQcVk1qXDZVyCDGCcXN9BGb6GZqYtvxrHc8FW6MsTXdjafCcpFVvur6iMXtsMTJB31mKNa8",
  "key20": "4XgEsudhipB7VB2Jd6LRm3PCxgXSTwsCrEQRzkzNfkeS7DEAEXRo9JirSEsEeMndfhKcgsN15qTFWVHeLzEffNiW",
  "key21": "41kJf677YYPYqc7S6j5s6mKTz2iAXVzda92xMvcvWs9m8UiXBdXhXLWGzbVofvE7PzeGUSWNshj4s1DLivgLASuC",
  "key22": "2qjD11jLnJ8Z6HWEQLxPNVyAaez3agQkpmV9pEPfPczExcaD1i3VWqW7iXK4VgnRtTeB4yM6RLvzMLwVUvTKxCF6",
  "key23": "2zAGudxpKwam5rCUtZkTTqv4wSvXcX5VLPsAkSc3ZcwX5CXmrUaV7Sk1RMMRAMXwenNuJgMDCc1uUndgzVYkafDC",
  "key24": "79ye2PMTbe1g6gDiEm8fxiVoJJJynAJZY5jDtvG9dQvCPPvLyQiiysukbB5wexmkNj2ZukaASWmo3EaA4iWUFFT",
  "key25": "63CQEWEbCEVb9jUx7QrH18EysGkrgUMPcQ9nbjZpuMjHMxKxJzJJ5MPf5mG6tBNkyEtUztuAQJMzhmEzPtKvB6rs",
  "key26": "aAZ1ie6H7tamdqUtWZ4h7B6XPP8W2UwAuVZSyVDDf4a5gBKUak5B3aMT95xoXEBcFFwrqosxdbonR2dMdJAj5KX",
  "key27": "46xWNcbgVoRGirXszbug6QffaGoQjaTXy2U5yXyV3xCXoBYVr4G6yNG3Je8FzjtLsD2dHkABKgb7tVM9G6mPMasP",
  "key28": "3CJVWyoX2YDqw1Ru5VfE8k1GSAF9ZzpWBAR1UteAPyY8vjZ7wpFgXHk2ZZBtce1J1AH4Liz7erD9UUXBrTypWesZ",
  "key29": "4bCQB8ijqj8ofx9oTayzVGZrUpj5EYwBE9RoGCPTLxCGXzxewcF4s8cNHgYyCg5zdSiPDqdPovFusxhAMfNCUMDE",
  "key30": "3bpAqNPgkiCG4sBASQTQG3F33qZEPdtYjE6upXFJm5ien2jBdJLSj2rTHihwvMUh2NXojsvxiYZeDoyt6Qv2b6gL",
  "key31": "64CMamvGmxCUweMbFEC5qP9MaDyL1JDGxq3DyrK3VWeZC7emcGBhrsrMNgEqTTXKrQFfsVnPSU7rsAdyqqhDMVdc",
  "key32": "3ypXb8v9vVu1mtMYxWGtWFoGtTHNemvFgsEHsGp42LRyPJ5KPPyhzRUGrrPWTBwoyyVmR6V5sKXHHXNXxyvUeNqg",
  "key33": "27ZHgimaU9uvVjN1hCvg17SusrvWNRUYfpEufboFJ87w3byYJFnYy2J4Jk8Qsmkm252wQzy5cvFtLHsxYoQVzALW",
  "key34": "1KAWJEGPLoxvddGSKL3Y4wzTFiy3qiFFqQAuLYhy6LQPyKfqrDR7iYUeBdNPqQTqXPkQRhLPfmziuA3s5SNRT1Y",
  "key35": "4tDuYQ5GL6oMxRnX4PWpEEvhvDPsrubwnvWsVXnSvnvHwfdRPvrLvj6qx2ijgxXFbTjTE6uRM3fAw4xwP9fHuHLf",
  "key36": "63b1f4NvHmQ4tqJa5n827adfj1aTBtn865uJii2F1tEpLgqVsXbWLyJcs89rfTHUvoHHfyEMYFDNPrMBsGcfH6p3",
  "key37": "4voT87SKyCwFTUSNfKayWi3yBwUfYd9MroaxChUCdLcYuW6hYYg6iGZqE76yWtq8VnAaKWHYVFzEzomyFUZqqcVf"
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
