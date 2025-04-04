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
    "4s2zUpFDfsz8HXDyKyu1EeHrsdJjfGXU8Z9h7v4vJNjg1MVgEjV5Z2wmWSuFteLtiHza3phvC2jPvCxB7oq4WPYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vuqBHxv5cNeVrh5Ldf5qDzNgcuiKktR5uAWYhxk4qTyYh2gHNFrt4ANuGUX1tGWwqLZrfsyss2YfZi9hXHc3c7H",
  "key1": "2UzzJE6xMywoTht7XW45BJojRYw9MNCd5SZZMgzr9Lx3QUimZ2R88UGaZ2iGeppf8B5MfEbvCw4MnjbN8Wo8HfPC",
  "key2": "2Bf7AdykRtyBWwC12mfpE7qKvFdpuMk7b5YmuzzRhtXx5MASMNMDcfBwPUXKyo2EWJJHQ4gL1Z6SLUSefKjwam1C",
  "key3": "39goxTTr1aeTDBR9R8VuLnvvo1yGLvizwwYqB3BMHseS6kYHh2sf8LjTLcWBfyfaTsfagAB5SV76rezJWjFBavVH",
  "key4": "3upmduhsZ7bucjGJx9p7iCYYn7hi5hm7XbxJ65x5VQs7t7UqLHUMeQ4TEg5GabUXtjC4E9pjZSW7SXoSS3T4HsCw",
  "key5": "GsWeJ6suLUNqqJ2nqdjsHCVP7fW141SQcyAj1RJd6vhiaAjdK3fcNq2cF7AvtaZLxdvBJ8FjMCPArwBRrxL7k5p",
  "key6": "RE92vso2Rc6rLqAa68ugbbkq8oyrkHqJsAQTHTZuG17EaNHeA1viMn1e5hqNFDYGs7sKKEqGb5jJFnfbYw8KYLj",
  "key7": "48iwJkYa7m2UjvRJhXC1Df47xp2BTr2hmn1TujWpkQ4otA6f2s1ymvWnoNaBExQXN8WfL5K4dxrkGgipBRQUUT9x",
  "key8": "4AVwXr12J75zbXfQMWTn3toJxAszqxs9cQf5h3qY46yhkMhwUKqvqq2AJnBSHrAkY7muTcpAnJiZV3wPSZ4YenT3",
  "key9": "36jtWJWx9aWrPVVfxgcqDwmDShoeddoCqa12A16zvrcvnRpa8UXFcuywKA7mznLTCanSpPMiBQYPxJcC1xEZSuLt",
  "key10": "4zBuA6N1PHuufmeV9v5G6jAVUKtjCGx9djyR8uC1Txe1U1uv7FSQSj5B5R5SZLT3W59JhnZ3ziLmcZuC6eGMK4im",
  "key11": "E4r4vjKRCdem5BwWCyiNWapruB7jtnxVeapzxtdWKemDVTQ6hZPqBioJotC6gTGsghDk84ymNcbUhGH8d1Ge4Xt",
  "key12": "4nJjM95RxyQUVcfAVyWr2UPjJvoEN29CyeRvGsAFPM3nh7hfec3NBDdu9SzP3GnnApYnYUaWoVKTJWoYuAq5q3Ee",
  "key13": "5MDviASBYxndsWwteHcsX1pHwpdvEspCamjXtd9qWRXfctUPdDpUgpknJnmNxRc5ZiwCfmniALdvCafQrhx2w9cc",
  "key14": "38z1hhAH4wLsufMytmqvva1F4G5BR68PUm6TmnkwYsC9pVR7G3ttqCRLobh8nzmVAPy829cJW67Z74Zj8WRbf8Gv",
  "key15": "3zNK4dVEpdwDWnxC57J2ZWkub2PBsrrA5dvDeMyDvyLQ8kuRr3S6y95SwZkHkT58YPHC43W5qm24qkz9qzRCePF9",
  "key16": "7ai6prHDySeNsaRZWiAjzmVvFZijy9Lc9g7rZwA9gWLozSujckxqiwTyJ2MriXLqC8Ch4k5APRWxTiLnq7Hdxdk",
  "key17": "5txjECmQg69if4Nzbm8k9FrmvtwprATdu3Mo7RjjGPqwTTgV97SSQwqJzwA8bMGBgwqpjVo4r5EgDy9i4pnzmnNN",
  "key18": "4s3T7Gmimti5ERT8fcFt7FNuErB4GJgiDT2aAS17MDSvdyjDBEzw8QRXABH4cXKJ2C7bu7Vokh5zbrVWFKgbRKcy",
  "key19": "5tFoAkBjVYhMQkBWWX3Prmyb3DCFxBDYcWgBbWvSPZH2jX4PYz2uJDPZRUy3g4CewqsG4Y4BaTebqGgVRCN2oQP6",
  "key20": "49u543btYpLeqdVzg45DBY9te5Fvf3qUxzK6AqNbrkLnfGUajyszumMJpo69GLpWFHyNrKj2L4UCiS1pegTR3fyJ",
  "key21": "2QVh49TGY5L5CUUzTEUCZ3nVd2dR6uCPTBmZgWcLrcRJMyZVUeptWuvonfw21oeKFPV8N5fREVVxehZ2Pp4Qm6U8",
  "key22": "5utEkx4ZCQ4aShFgh83pjhrkAQKDfq9TcdhR2fFKaYb6QicK8vaDYp2VixitqUbb1wuwu1HW5at9XCMBZmAcBZjg",
  "key23": "YQk1Vm9KM1Rd39sibnJjx6W8rvVQurUNbyuwosseYi6LhAs9vq3HyJYh7cPzD2pUSx7z6eUpwgMFA4v2iGt9NBj",
  "key24": "oP55s7FtsKjWQf1dzgqmLXW8NJ4LbTt89JMF2hzQQ6JVz6xvdDhUyE5EdCa4J47KWAn1QzMx9KyUSnTtfRozEVR",
  "key25": "64cNZGTnvbYrDzJGSCD9ZsRg5t6BVj9LABHFEWCP3JTmz8SgaghXoDLFePgdu2BWASRYgHiqe4VBbYCVKkZx25ua",
  "key26": "4A9WWD4ZedfKkNrjJP3hk3Eo61LmA5Mk7Ad85i7Z2kpZAiLMnh4AWsxKwsYM5sZpZ5NfZXMLVnC6xs3wyCUuDvm",
  "key27": "4P4ynEheZLTX2L2Wuef85HGzzoPADM61c6Jk9Km15xp1YTzoWDvTm5nKKRfGe6PQ4dH6suKnQVzXrT3tp4Sx8sFF",
  "key28": "2LyRj8YJs8v1whHsLm3xTngAJ6Wt3LfJjrc5EvqHUKrJtannbff3V8GJbZ3cYAwJxc23jBnp2vAC1z3ju6d2cHTN",
  "key29": "kABH8igRE7w3WmyB3ZU2CP2ye2g4MmKYns5V5G8fowRuabaSm5wPGKgNDvgMyUCHQw8V8uRfyti8fvbQbkNY3KS",
  "key30": "wjRoyqBmdATTfi7zMu9KDkPYc96fyYP8rL3SsjaZfZnhVzx9q8b73Twwcp3hrdG84vqVSRDifAPRgRubnGbskuE",
  "key31": "2RLsTgDw7d9nyM9oGRaVjdbUAH7ecfz8iy8DJB2dVx8SFZEpihzTeFs1fP28nmHqk8tbApopLf1LAnp1aDfLvp2P",
  "key32": "4op9oXnDtGt6So64fAsXAkSXYh6DZAMr9LqiKJPD5eNmhziqkcB5f6aNviCiwCKNzMi8mzHoGiyvqysUazPDjxh4",
  "key33": "2hLC1nYMuZCrusLvJF8mW4hkiPynu5j47UzfZTfgHZbGMqJTq5bEzaCGiaWmztJnvhVeiNv9hBt6fqynsbnzwKF",
  "key34": "sD9Tw5kbtnaY59X9kDFaL51KndDhV6bkKN733KjVS72UJw8NmRwDxWVA6CZ2U5v4fXM38PezL4QdNXCAcvjSf4o",
  "key35": "5aV3wqAsLd3K1vNURfSSk6XFW6SbvnVKboNqwGEjSNA94LcRaCZsskCuWJBNKvihV7R8h51z8MY3hS7DV93TH2cq",
  "key36": "43CzTjfjWjH1MXbZLMAogfQAhPdq4eLSNk3M8XQF29uYuEG5rfMkEcFRUH1Y8MkNCNfkxqMhs5fuGWhN8NbeQtka",
  "key37": "64mQwy429bU9ggibi8ywAKWR2hR7vUNPt7QmM61o62KHXhiLgo4y1c9x2XKQ5iG2GM11KLcN6gcpXEg41N1df3gm",
  "key38": "fHN2vpWXTfomaPYLpuGREHB51dS3RptrStLhwkYhZY4HHcQYAYKCKTraWRQbhKHBfvPDsqcruNHFzKjWbUegE9d",
  "key39": "5mTy5UGoLWvyiHeXVVpHmtQDpc6HK2TAYEPRit9j5m8nYx7zXhDoULqLD3dzJBHry5xiwxzU2Y5Ldzse1NL3pFX2",
  "key40": "2e7pBP6xRVkMBWAyxs1KozEKAHsxzdSCtFwEzaVpYJnpUM4ga42HcVgTxZiPrLHubEkCpXEM1NuW89cWDgojGRNw",
  "key41": "3ehKp7xXd4xRouKbqLLBifNvKQPZYRuy7RUUCTeiKXLQP4icEYA4txahi3qxbbjg1C8rtGMmDfFwbzDuvcgccyxT",
  "key42": "57xe8qDRGAxcQtrTQU37uLiNtjrPKjXnysnNCPLva9dC8q2bpWVkkj5Lt71LCsRJdhNt1StnwacnZaLcocQNrKPm",
  "key43": "4kWWJ4cvVDwpv5Re3yG2Ms7MgAjj4ApiuZZEGG8zmh1QtP2bT93UaXZ14EFDCdiKVC33M4WWjxEzJf6AsAUWLtH4"
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
