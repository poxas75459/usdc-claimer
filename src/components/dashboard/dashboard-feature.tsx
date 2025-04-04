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
    "2fnNPEvL9FCwxfBLkpHJbTDrGCFEsiWxKh6tSCe55xuV7N7gqQaAhd9sZvEHjz2HY2Sb6VhG58r1REfnwXtjVtrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eUYc696xStGRshbEwQLbudAQR3PLF5qvenMWKmqrNBFKhvrZ6NE2Dao7APtg3eC6AehwXnm62f4sj7P8zoGjWZv",
  "key1": "2f5Be52s7ePCmSp6VeyssBW7X6TUMpGcZLCGzf4mAnHCiXK71HCWxtWpykC8K81fQ88pNXpWt5t74RT3jniTvk7k",
  "key2": "46EoNoo3FaSMfPWn2xbLDKPHSvCJM2QqybTYzPygn58d2oXy7mQxLoFueUAz7rNku7P9Zikm5w51b68TQSQ29oBb",
  "key3": "4ZGVSdrDyUZoq2Q5WcmpKCtVNT5zmCcZjGt4j2zFHwxGHEDCXMWgvPZSykXzerMofA7xqnnUfFpMfk6NVKUoBJEU",
  "key4": "2M7bNhpD7GV55T2VcR6TFD2qxw7FhMe9L5YyrcoyYaLejVJpTFTYTS8hfqqto4qVgwbVzo3mn1Shek5UycvkoCuM",
  "key5": "53daLDLmcFy4Bd7CJ556wuVEapPP38gNEnD5MjSUXoaM7GriDXZT9kswEWpFz8EwPyW27TvjA7XTYficKDWQbFry",
  "key6": "5rJW65Xvb7BZCyt1upDkAQTwgPERfLzfojw14XqEqjjKX82LR8Db5jxCchPmV73iPrPu6PBUPQCPQHKw5f6yMk42",
  "key7": "QMR48KpokNBSjyKnMbZ2KhtMwoLjP8U5fipYBDtcuDqqr3fKjG2Nf5XX3wGoFCzMT1MRRsjepKZYPozbs7pv2yT",
  "key8": "2n4BNWGiSqrX8tsNnhDUhPEPSH1np7Sj31wC7ym9YiTh2wypWWGjn7YDH9zdBT233z2zcANefxku8EBwSAEy1ai5",
  "key9": "jiTmGG2HKiMzSbpgENAj1J4E4Vk83AVhiasGsi6gaYUS9bSEdB5yRPnqCCiXtjhdbPqh5ZA4HkUFkqDGmJzktA1",
  "key10": "2TK3NRxiVzCu7cB6rsoGB2smDZncqo25tquyEFCMwDMKmXBC4Su3qYU2hm58WYjCjGVGQvroNK7eLQVpL8HTb1gU",
  "key11": "34bg4Ko2yv3BbodwcpbjD2SwVzjhrM7YKbt6LTpbWkAEfiEaoJsYLMjSFURkB5sTr5MKUrztsFcsnz1b1h5fzkNW",
  "key12": "59GKx4HHPbP4DW1mTjoSrmYhBPZLCLctQ9M4xWT4Pt4EXM168hRGiCheYc1ZcB4EdJwkPCamL53yv3kbGqgwXU1S",
  "key13": "41hzbFmnQy3b7C3EVn1NC7fnb6QxbwuLLCcaSpMteqU8e95Kv1AsBPtksnweKu2YBPjZT6fcQL872hfH84zKwc3h",
  "key14": "3gmJPyeqitYgJtURCDPvD3bmvGgTPvHSgdoQTjwzq3mcXMxTUYLR2LhNf3GmkpiZuPsTCaeqnzguFzMBjzvKgBi4",
  "key15": "5kB9yop3riTDaHc9HZTC8ZhKznGGaXQfeAicmFiqSefYSpcJHCHouz3sULuu7tgYaoXdeqsPxQbf7tgZoV77KzAj",
  "key16": "KfStrsf3PZmftXxRJS787nvBDXNAPZg6QUBYQ7L2JriZoUhDsaxPCTs5RDcpaXeibtdsr5psW95WHM1KRcLwMZF",
  "key17": "5g9jQXg7z2ELu2wGcAgNQP79hgNRXr1q5TNRbxRVMy39MDGZFYLFdCA34hiv1fUJiVkoSvwVR1tM3ePriamF1JCu",
  "key18": "3Ax7sCjR3yMbXfAtNCkcUj4mthKwmder7N993tUzqRY8PN3rAjBKPFewaKBt7jwTuMpDjtfzfE7ZGhvZeKexSHDF",
  "key19": "4NjTYzLwXPfYcykYCrPJT573QREhXRVmp3v2tBBiHu7jVRyELVfrza23CBMVdqU2vvbuQQCVJgWwSqhtcNXcDyfN",
  "key20": "63741pWJFHdHkJxWUU9ZjEWQ1ydrpCHegaf728eQH4k5PzjHrG9StuA1mzpxWBQpR3yLJJBGidfJShvzitF2NLU2",
  "key21": "5Dpo5nmNVkVRFhAv2upHB6HUuaf7PLL9h1Do9F3GgHDwLVEpDnhff4d7NrAFK413FNa1DL4uVXSC4JonAVhcpAcH",
  "key22": "42xpauAt9KC27CjrXWZRZCD1VT9NtHGgmmFUigGVd6Hueyi46umtQw5f5g4JfDTUuq3GfmY8dMsrz4fkKZsTP61R",
  "key23": "4XLVee2G3kAgVaP772sS3YVEwf6cMKVGRkWnJgYQ5vxtxkgjXhwtAVjU4mq8ZLkr52WkPHyZpB5E513ExkhJpE4s",
  "key24": "2o6zBWyLkfYgLCBzbT6MMUa9fFmaeNZzdbKQdyhuWRrJSLo3j7t5nk8Dk7qCHB1i53iW45aEduMACH8WLE8yVYtw",
  "key25": "2B47dn8fbTBctEQmcthwsCR8Jzo2RA2D312nBTS5arM69u273P6uspDL4i4UTGHvGrWCybjXUej2WVxbx3jNGtMn",
  "key26": "f9MUw2TbQzJmgZ7V6ZWCyBAL7s4rfNDVZMkvvakVwBYQkbayj1hxxm3XTsc4TfUxbo6Kg5jpp2FAjHDve5FvwAo",
  "key27": "5A8k7Vpzg1Uf2jM9XwkfxZ4kzvP8pctnPYeycLzYS5WvqzedBS5fbwT72NrLxoBWYsFZjCKLPuwy3YnTaP53GsiW",
  "key28": "3H8G7z5HjmWd6hG3SyeX8MFhJYuCn3m2qHD1kwnR5h8FF6oZww1tZTm2kJ2Wg8bbK6bEzjraoSkRg15nXsTf5h7z",
  "key29": "JYnsBgo8w9asQSXggobzxrPCzkVvVuTjfhwirC11HY3YPjLxhLFkwV1HdYYSfe3YoCX264mvaDPSP9GDDDQ9ZdD",
  "key30": "4MVgeerpDnyE95dpyT9bXnUzsjyHSDW3M4RtFKAZsoqR5bJGjFSk2SbydhUUG7JwaUVajnsrEuhUsrSeDHqQkojt",
  "key31": "4q25sHx5NvXnurbsZP28scykunacSe7LHfjErpLq17A2rLqyWpWvrX2bRbFMdikmDZy5QtzsfG5CpsRb7kT6xEus",
  "key32": "2iRFbQobH8AbWVpj1QCRHarZAPtyf1fXRzCaN5fwY4EHrcyGWqLa2QmWqrpi3SFtCxWSgahzJqdgFMvYmeZf6RrZ",
  "key33": "39ZorKMS6o6Ts2HLk9yF4JuTfXvUq2XU4p5TLKSBaPSUmDPqtiP55KAQn3qdybenE8b96mBk7urEJ728CwDmY9np",
  "key34": "2MCSmvzidQweb3zg9yEuzsXMAkq86bkyJeRB48tS6ERAZQfJjJraMXZtBgrzjhmwMQo4zUPWyEZSYeAMDx1qzqp5",
  "key35": "5yA6L7njhAmHQJwJ4yWjHEbcYjsdG6tUyjyLFz5HMvX7xky39zqogaov69T6Dr5mYwBaD66nPKV385XYZS2eTNmX",
  "key36": "4yqUvXgQpe31MEvKxrmp61rh5hdJLzp1YnmE9ozsXaduKC7ooiACdNeotKxCnVncFw7zww7NfYhuEq9DweGG6jy1",
  "key37": "2s5Xg6Bh3PH3RidYRbhWB48QRQUojVwsSubVyGQMuuSPmsYxU47nTVvNBAb7bmgszLwgXBRTJ8JuhKxvTnm18niG",
  "key38": "4ACJA5P1gzzFX8xJdPSK85eMhyp75z5hMHU1La3eWzyY8wqZpLYCSQBxtuc8GNgTKBNMvNWbmWCKkz9hUUJ56Wq4",
  "key39": "5ex5xPoV81cpt3fLzg9qenhNnjhmzyPgSedtR2MmmVgPoBLPQHvrZnYeSyVZSr2K99Tc8sTLnDNmooNV1pMY4Hzz",
  "key40": "3PncsccnLnwyC8eZLDiRzvkLbXxsMg6Tav3w6Gmv6f62hUceHyrvHnZcg9bfV7fQReFSSuVjru3ywyvqJkcis2pT",
  "key41": "2hoanX5xACuw2Htah3LdqroS938BRBUqTB4dSsYSegGjj5Cfc1Bue3VQddx9xPD4HmJwRouZzsm74y5CrYN8unG3",
  "key42": "t3mpHRqJbd53uRrLtRJamDyE1tkDrd53P41aCu7UkH9UwkuH2ePzjxTGRDUhn4YoToDvxDkB8gREctvsFo1ZZpc",
  "key43": "4rHN7T3Cs9HgWgthwY1vNt65ZLqrMVBhN4vqKGCDb1jWBZah3FWjtAzjgR8Hegigpuf5qv6bv6xXjHNsDcoTBfM5"
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
