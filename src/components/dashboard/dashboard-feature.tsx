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
    "4YqwWkrpwUv41AP9mzrVdZ1phk9mY4YVqKDwj28nM1spdQydiU9wMqw1DJ5PjMep6UHUqoFKw75CmEsQZYkVrscL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CLwqhpjzDMqjPob7pykhXriC59rM9qRg3Z1825kJWCKK2Nh1P3BkSUdXN7X4FJZJfaFx9PJbaf9wdQqSS2fZFCx",
  "key1": "xE6ATbw7v9NMXxbHuPbKfsjr4821jhfWKccitKpqNi6jfbd2twJ65wuU1tRi33UvYAonosbaHP5QgC2rD42WqNv",
  "key2": "XeyUGV3fKR5q7NtuoRdAqrwwhqw41yELcwZQ4TnWMmnHVyQda7ZCCvWXwABLM2fs9x8hrhjT7DXkJNZ3zTteZ2V",
  "key3": "RuvNtJxnmAHe5BhqbzoRnUBJpJRQ2eKy3V6JnGeJqLyHFFPtXdxHT6657vyjpN4TFycEACE9CBgPoRH4pYQEo3H",
  "key4": "2gLycRUqDb3B4fn2zCNYD8dLmW26gozoZjEj6p7KngoV6XrKQkXrPDkuiRzoT81uKgKgQ1QCciKngUuphbsjXKWh",
  "key5": "2nmTFVj75TQJ3ZDypGLPsTBFxFPFSzcfwi4rfWeN5Eiapn8u8HyB8TBjvKnSAgTFw8fHyZCaKxAcGmM8WDfdgcY7",
  "key6": "5SEp1SERTfLq9mtfXs58ZFBfqzVSMd8kCkmv2U6wPs52Uhgbj5Yh8ZF9Dajbr4rW5ECZA5QwnD8QhDcdGTB2WvuK",
  "key7": "Q9it7aicGXwy8jT2pehg7QHPwGXcdXvhuHwtaWRzzsV9BmL5sWEYDQTgwsxrNbSNTA9f7jYfGPxdtq4DEWUfvhE",
  "key8": "2W11V9GaCmom6avMDxeNEsoruovPUj1WNmG9NxGxFGJ1NmNTT51D8EKf3EuoTdwiWx7CsrSgY2AhRnAvKAstJNJa",
  "key9": "3GVLSG5tUzemW6T38SYUnu8FxLZfFWcwZaGuJazWPqQB58Sg2k1F3NSXnLxYuEsveMjUABGkRTnsYJqJs1eT3N31",
  "key10": "25nD2vXxyWxFCx6Rovo2BhdphX6dDidPV9ZG4RgNV47G17TXeCgYLRvoQRkoDkZuoPxbhpWrgAxF2EnYzy4MU6ex",
  "key11": "4Ef5LK1xFsezfVfdLLjjDMJqhFYAcM6aeZskj6ccVeZzWeHxqPk9w1md8RTmqSBSijfuHbC4pzwTF4iDGEkYap6G",
  "key12": "37Em51WP5tymGNgXcJknyi2GX9dU2QTimK4gETt2jvk7EcX8J9Y7XXPCbR2GbtC8oNsppcdZWQb9Vp1e2LW85HA",
  "key13": "WhAmv6ggNACe7QPMHEekaM56yYuTzfQ21uz11mkbCt9mu4yygCxw6Zy5rMLSbT6AXNZsHMBfASSAABoUc9N4GvJ",
  "key14": "3xn5wY93kukPyHY9muQ3LMiKAjq8bba5aJminosmoTFW5DsJXeiUmQv6h33i1j44nhb4do3SPj4KCmoPxyWBUPtX",
  "key15": "3jQps9pzQGZR72a9bBhrv6iiVgfamvBiiakZv9s11mnNu3XVdrrJfji795coC6UjMTfrm2Qv3dffC5T6MiRkg6En",
  "key16": "54LQbfWLjCEtJP7KTxjNyJHg6EzYSMxKhp7wxqUgyHaDGkQkDYZwfwmwXrFraCwf9emevBs97Z763QjeSih9NkLG",
  "key17": "3D7NDuojvNkvkQb6wZ4p8GAhtmr8siQfs9FdvH6jnbk6g4XDrY861dK6UUZVxAAa4iJCGYiBF9KFzhr43hzBygQC",
  "key18": "3RZybxrjurHsPBRB1dbgtqBMcW7gfAj8c5UTUWu8mYDFnrqkevmtnuXxz4QPJKC8wwEFnMByhWdPr1bw14zSXdrd",
  "key19": "2F17AdvQWEJgk9vADGyL7cZu7h9v5UGFYa5Bvg6Ku8V8TrsJoSuHA37qSC2caF5m5MXFVSV7xinzQWdXMsuhmvNy",
  "key20": "3PtmE4u36Q6E1s4FbK9FTAanN2uXAEAj7vXno8XZzo19njwLYke6aftJy6JUubR7wHd4oTfrQ8fYm7fZCDaiy1Gf",
  "key21": "3o21iRueMCBy9fevpSa4ggeW6iE8m6etTtFZqfyxugLdJRyECgbbM6Ti1jW4hR8iKbKBodft32xLXh3qktDeUE1o",
  "key22": "65MsZbmNqjrVtTAnM4W55C5R3wbLYp6MtNwng7mTmfWHS92Z7JrTr2V3iMuM14kfmWQPzaqFszPK6tc6Qp67jyVA",
  "key23": "5AepQSRsH6gWrgebAwqVoJ6Y23pabUeaLBDnvP5YDBr8gaediaDTgaKZtQoyWoZbErq4mGvkBbsfxnEP7tVh7Rqf",
  "key24": "NyBsvEMWtQY9SdoA9tn1eEMQshcJPKgc8YP16eUBrGXn9DrT5nxNwM9XBQgo87oxsGeqqBqsXassE6GuX7yKCBw",
  "key25": "5Hztd18ShoKmgWJECGD6EpDJxLAyY8ntRRCpY9sUdEJboXz6vUyK72S5RaHoMDxfYM7WpAju4NLM89S4BP2ZuPco",
  "key26": "5GjtxfUaXbiR8cSS9fk1B2nbW7wMs89WE3wJyrGZZEw1ZhCT6QGEbpqRYzfRZLiDYJhrbR6KiHCXkQzgtpXuSQ5K",
  "key27": "4PaVttAgmtFK1ej3PXsci7BynUPjRXo1dadbSTxNSyYCwUqi1yVCtrGbRWrnjM7htPz9V2N32fHLBWR4wmKC9Srd",
  "key28": "3tYdNtTaWXtxtP9x7mxJ8RXdNfdrhCJntSqvuJePVzjKYgtKqvZ1Bnhk8n8Nk5Jt4vDFetFMY8EeZrJfHkBb1sRS",
  "key29": "4RduHydDrRHY1N9ihLFx4N62eoy1x8293xafHZuYCV1AJxuEi97Dujx3rVw892Br3rmCX4uiJBDKPMxztHGwaJX9",
  "key30": "2btFW1KfWiwZ5jGHdcAq8WPWCbqhF4yasnoSwjbPXwkTnS5WzxKbmXVHQJgTJidwD98xfUnvc8k11eBR6BEWd2BK",
  "key31": "37B2dsDuG162RB3cD9uHsSsXXwxaVHnkJeMUtHzy7ktRqRbEyUXcJFiM1PvEbb9c8HQuQ7qAicYDV4VPtnat6GuY",
  "key32": "3W2ay7bjqA3YWbRpr6MvjwG7t18ebtEbKH7L2g9TbynvRdhThQUKbXA86br1ahPYMKwSBcdELfo8L8g2xkinQQjM",
  "key33": "654tR6HHvoS9f3SbYRTMH9aGAq5pBXqH5UHrMhkXKU8XEy5eqJgecPSimocg1fbbQBTibZZM8hhMWVHwKBwhhZT4",
  "key34": "4iPL5SKMPh6XbfuLN6FLHJUiW5UTuT9HuA4P3jMFoSydr8gEaBKyrnenhmSVrVWidP6foXyeX4weyiJjpcSt34uk",
  "key35": "VFcoN64EqVP3MrcPPe1R7zCSEFqmaP5qXvCYmjq4HYUkBW4w61WgmBkqe52w7rhc9Mn3YLD1yYehcsTfKia6qTB",
  "key36": "p4ae9Yh2gZegirhqouWLsTmqwvcLyn2yTopdJfPWipVj2BBYMmrmnJJxrV1P8xev4hREbzhfdUG4MyMRzGMV7CR",
  "key37": "5MXYYxsA8dVmBinaAYvZsxowjAAf28DsAWi7jpcxoobwcLWE4RSGmgd2tX283bbNbZ8AXhb9nbzN6mjpYCtzkYEf",
  "key38": "3UTBsKDXprc5pGcFLt1CJ7rrtSAx9pKFUh64hTpLnp6zqHgNUL2wLTinSuG3Hv4YXGEFL2mFfaD56p7BQDV7RydW",
  "key39": "3yJ6NjivjMiD98Q8QLnBVqUi4mawJV9ZNV1ktdvanq4roXw8STYVtMj3AVCkLSn7C7atj4NSLzAP56phuuqr9CE8",
  "key40": "38ePtMdLmw6owx7ea6VyZZnsmvHixHZBBS1UtY2bNFsP8xPwGF8ZyPqPLgR46gyFC5RzhMjJ21QCpppN5PMXvMCN",
  "key41": "5GkVfSmDwQD9vkNbBKwjieFDtx4kZzjfM3mdWGW8KMuJgdTpB29iFmP4sj9CSg5BNch3REc1sMDMsk51f9DPKbiR"
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
