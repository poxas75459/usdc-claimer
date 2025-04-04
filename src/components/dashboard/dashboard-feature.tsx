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
    "5tvgdjHPJCU6RZQGEGHc3K8b9sUyo8NRzzu26JZk64xj1Jzfd7La3Q3HXnx5xCPXSnujTX8tprVHg4Zinz75YSJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gBsPze1qApK8apTz1QdYVLWticivXxDtZG55ynGHnNUdZGap7PQzeNK4rqedvwHmZof81L945iKiEd6dMFPzhxn",
  "key1": "52n4vT8Av8jjENyb8rT25J6gENsF1s9ZF15qPZhkhDKfvbF6FXWs4aF6ASPrZ3nJi9FZnb9LRgi5QKobzeA48YuC",
  "key2": "HwyttiDacmFpnegTZEmT8ZAn4gTuWeFZW2PbAx1Ue4sf8akgUvaPM1fFjL1vo4c6Y1AXmrmcoZLH8gZQsU7yLWn",
  "key3": "3mhe26UzcbZUSQKQUheAY2qBzWewES1giWofjSHAoj4JSEbgBNCYN686jfeu8DzeJ2gdoVgFEVvXy3mre3xWoyZG",
  "key4": "2GNmTZaBihrGqJ6GmUNZgSGZFzmGrffidBeLSEF6UjGp6jvjaFbVrPbMCHZCCx1wsrKuKh2KiMszsLEVhWvEmt9A",
  "key5": "5AtD2dBQ9nyMSBRfa8jPD39Zg9n4JpuRnLbcubwd5PQfQpaqxBqZY9RA9CNSdisrqRgDTV94Y7NfxtqLJoJ2ip8e",
  "key6": "2MesCNJr6S822iUXmmoSvo5ctU5yfGsNrMDCJZYdoTafkhZBcusyVgjP4y5hdiLayoz9satib2Lk3XABmtJaytGd",
  "key7": "3dcprbWarrG5JsuvCc7xtD9rS8chYjn4a5yYoVCNWZeuFoLSqW5xqQAMjGRNTKyBoE5JHExd1VWQYGdydStGb21a",
  "key8": "2kC24KEWSVhCoY8v2cJbsG4vSrdqSVZ8LQzutut1BTw8Zue5StoFva13LKzvfvu2ZxmFTgcwi1duMq3CtaEeC8ED",
  "key9": "4adiVr8CSX9bPMHnaFbKqw2YABzF7s2Po9sdnxUEUEnfxDSaaTfefZLWmThMWF9p7HTc5eYxo2wyhEdBrs33E9RN",
  "key10": "WqCcQzQXgBrSpp2UAcSQHb7mRDHxdBTVu4YTAtEKuZM8LLKmXAtP7EajsFcaHtqUM9ePirNeTMBx5h4DpWe1aC7",
  "key11": "5GVJhCASpFzarD2F4q9ukYQpjbsXLadhMJpBhChKfyuTtHjSR2u3PQaMRtDwYdL5xS4otG37SwieNKAcGwDmy327",
  "key12": "SXqAVDw7nPkAsByzMnbiB8CJfP3CWNKW6p1mshNADun4UNEuaA3foWF86wR1CpbSMdupPN586qrXKJMq9VTFGJh",
  "key13": "76s76Q7ggqUUbsHG1HDi2q6vDKfN85PRBFZjHCQFjZTP4hVhA4gJA2LUYFHoi1CARMRUgJMM3XLmsAb4ub4AALi",
  "key14": "6zKFkZr21EYF188Tv3DemVrqbnAgdqW68TjbXt6x9PDzqLRXegR2oxT27UHmJ2kC9TLqriCbJvDaMqNFdhkknjk",
  "key15": "u3eHSHngYnKm5Q4Puow6mJNdZDK4UdHgfwrKAntEttsTwrqB4nn51UQpVrC7zSzfYsPkjsSaC5vaDZnyju4TF3q",
  "key16": "4osS4zVRXeNEaPkChUXtiKaiGQTPXpiK9C3744BNFBhL1qFwwfawSZkLQn9YCB39s4tDUGsMmKqzbCjjiSRr96XT",
  "key17": "5k7h9sx3a8F5qpPvq48zahee25CyEiWay119JHo73JCZVTL3xUdxpUNvZV6eXW3NHiLMx244CQmiM2mLzMKWziec",
  "key18": "219r14MDA3gTSKLsdtBS86mEu6c3WV9mDffJcNNqX6BojPg4jXzKQUC22bVY2tVckyQuxE4gv11AiLm9VAs1F5Xg",
  "key19": "p7tbq5Vsucb3PS3vd4sQxRJAgfgS82e6jPVNh9XRBHmaDbi7exovgd1XttNp8rNMAFbiLYohu6FmXWWcixthsoB",
  "key20": "3QWWZitKQhB1ovus2qHnZCn2itgQt9nxjy8nDfKz8qTncWfyKmgCjJNDitsBqHLyfacCmunnWtc5FkZhgUGBEJbS",
  "key21": "31YdYB3XneQcmeAnBcUcZvHfA9JV4qjFyYq7HuSYAYZvscpRpCLwozbfioFUSgy87Ygg1wtvtGRyjpsgTQXEn3wJ",
  "key22": "2uV7eQgUENpWNnA6vqsmoNVpqEyzVekhrAhMmskAJnWMSmdtprFQPDbQWmaLAgi2AiBcibKvTMCdKeM2TsNZTfhu",
  "key23": "WqSTwMiMpYJCGtErQbC7nePqB83SFebhaNWbXQc2WMwzbxVhLxBFAQKu24ze1d2eVu3sxvBuv5fwtnNXsweWYFK",
  "key24": "4mkEYqLwx83KSyrDKBr4MAXh3urncbXsGmSc321V4dkBqAERHibnAUw7UDCvJdwfGeL8YvqZkDRqsde54NdJLyx9",
  "key25": "khTUoHGq3bUZMcfLJDafEqEVxdYsPibaGCeJguQoWd1A4j5dUhjEKgZQMdRdFrWno7fbVbDUndiAQa94Zt3VcHC",
  "key26": "5Ubu1B4iFhU5ZdyfxnowmmaHjejJGFJeMbSTDWYCxBNxpzDJrfbVqKAH8y5hZ1kWhBrfycMUFszuf6oi5aczRY51",
  "key27": "3hXSFkcy7kHTvFcBr3WLU3DuKXxi7LU8TqZ3a6qEttwHX4fkKVMrrBkG6ryieXEVfTDCEpHUamkZ9SdVG96jZkX",
  "key28": "5q8SThToSi7eMdJ5JCDNKvqXRVbLgicwdTRVoMrb8fQn65vdKBWrZAfTurwjHGKHwLVNiUNx5fXv6rmmThwpDdfm",
  "key29": "BVTZanMouQayopBqB1Tf1xRjN3FaAnywQ6icunHboUF72RrgBiL8gTzf2k8ip2PHJ8mT2XBx9YEd7fPzqQENsR2",
  "key30": "2bpQigxjsT6HCoGcgibMukVzQMtprpTKA18aHNzDExxtf4GTbDxp98HMXyAe5kDfsRSsiREnFALvnZsFvtfpcM71",
  "key31": "61BSprmpXFMR1sHNeFQFoMQrVvcyoBhuidqg5xMdPAxXV3DN5AiLCrtdVrz6BojoA3DbYuSopDLb9uNNcy9uXEBo",
  "key32": "2RPCgBNNr6b8iUbrmjcrfYYKdWaYJKKaejdHZ6rNskQ36dQUb25qAXGhr1qjgyq9e5rLuTroMcygJdB2xTRrj9Xr",
  "key33": "4NCr3w6EnfURTYpx8Fti2rgNFp3QBmyqDUP2QGNrqcgAjwWVZNzxQhBsSDVFUW7coxDxB6iJpfucRVFjYhJi648m"
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
