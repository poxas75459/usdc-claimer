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
    "47GbvnsjaCTXq5H49bY1HGecGkcRHFNaefSYdEt29G9qeno5zMJby8vCjXiPFpcBfU9jdpAymx7V58UXTK72sjZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EmDNHv1KGC3MhEEfnQedUjSbRMfWvjLAfzWJ8duVm5t9sufPkzryUpdm7ugU9sEmfWXhvwVkh6a27auuxEPZZZS",
  "key1": "7TubbzSa5s6Y1moUYHjHvE4Zhmb2FsQCGU4Ywh23ML812mHndmN5wJbkAMLUpm3GNVLcne8KpN17jqG1pCbrfbW",
  "key2": "2QH4JRz7Y3xbyttzBCRsfHJ2VwKp4JDaVErPrCVfQoPKj68JLxs8VDAv8grhxEBHT1qFatEqJumVM5dasjSCtBA2",
  "key3": "2zMZ7z2veKT2USt9gmxdqYYjMEghREPnyHtZvSAYYSfHisck4obNMasyhj7tcTGibjL1r1nirZHauGy6DZLfHEBD",
  "key4": "47zvKnGCScqvVQ4SMTpMQ9WTJSwfRBLrk7eCywGgu8JSVMmJEXjUhZJX7q5SYUZ9CFySfficFDHFXC6AMMkNwcU6",
  "key5": "5FeBLtCsexaVMV9SUBEkMDvoHcmEZGU92BJKJRXoo8Wb4bEKtmfbxCNcnwUaVZKME7iEg5yTFipVQKPLXBnW2YwP",
  "key6": "2o74A8j5oGreNNYL9XxTePSxxqEhjzDYoad8hqLXGm3M92dzGevvWTgQFKBvMjcpfbiEfBz2hsJBjxnkxxZFCPUA",
  "key7": "3EAGF757247w6w8tSYGYXVeL4UMkmbR51yRRtHwC11nM5SoJ7ZuRYLzxcFKmPAke2dtukQEaS1eUXR29WKMQQWyF",
  "key8": "5TTBQub6m19d6D6rxuiQcbb7E5xXW1r7nXGetJaVoYwMJR9Tn2B1HWc4y36RcvrEp578NRPjQoUfeRg8ppmijnAQ",
  "key9": "26F57XJ6FXddG7FEUukdfQM3d2DAvNeBgPzctyAZLYRLskbWawvw3hDzfqTrAe888oEBqfPG3h4rR9kMKCVGB1qR",
  "key10": "3BptpqSRSWtigEq8LkDaFdLTuTUPyK8mETNw16g3v6uypyfH6Qt1BdqjyLEWaVbh5st4BT28PCWo518s4hzsUAfL",
  "key11": "4vEnbLduViZ5E1FRNtEB18dCHKDm97jzXaZcw11R8hx6SYsmhNSvYYURhRRfwaceZ8SZdjySBBuJ6DCvE6ghSF4H",
  "key12": "4C3aC4qrkNjravxcFWKTtftFtC5m5Gg9jikoqEuMsbdaRcBEH4oq9hNePKf5YB59CaLY876rHiMB135dxpCaKzdk",
  "key13": "3nC4Q8qLEgmFefq9PseY7Q4g5Kr27fjc9chXJZj3idWJNkTxk3V2KPdwRsAAsDnXHwQGzGF2aaV6ow9N4DFEKw6s",
  "key14": "3QzQh6Z86dh4JVuCmR5qfji7dsNg3byCGqu5RBCfaeQzb1R9cqQ21Rnn42ox14H4vt4iYPhC7mhagwRR3Wr1iKBe",
  "key15": "5Tpsv1V9ktLE8mCqr5XZ7MmK8E9jSfd8CEVRGQME3LmrT5bsaFxzt7KLuqzFw7opUZ3cC6qzCNswYrU1Yw8ojrWG",
  "key16": "5o8ZwW68mezkVQpifLWE7WQLY9XJibXe2bwScCQdQczz79RmPxV1ErVbJJckgrhyxcv6crvjzcv2g2g1qNib5k6Y",
  "key17": "3HV3Tan47ZRhEaKREEKXZZergMwRmCVE1u9FXooGFMZwu12vR3MZKhp38RZ1kiCrrxUUrLwnaxFAXDa2eQtbEDsq",
  "key18": "5M4GbDoryKFgiQY4Lgs9kmbaBG5pgYqNtWjaWGqYbYqmtfHY3g3n4k4F91dHi6HTnMGjtp9wxzWfHXm2Fi4HNzsN",
  "key19": "BrcxaTQ4uNF5y4iDArn6dxYzSCgEH57mz62VCyzjWkhcveF6XyTFv4Go1xFbYWSb45x2KhgcS2BsCUYFSp7o4qM",
  "key20": "4ENaEoX5AZYFmzwLMiWPyGi8fdcgrTCf7a6ihUowmuYRwmErvMUoc1b2Kajea1FvirozsV7d3yS1ggsBDVUE3tp2",
  "key21": "3iwhFfGUDFqRtmu22YnMVNbvQU2QB4BDMuJTbmiGhYjKyTx5YCNrRf6y215VqgRkZKxZ8m5D8QP5rdKESReYm2ZQ",
  "key22": "56CPowPGUMLRXzuwvvFmv6LhhcZ3BfWh2geo7vBwUNtQyWaL37XwTiiw2Y3qp26J3n6jMD2j1o4Dmpc66gstSqQu",
  "key23": "22ZswLpopQJCVQo66Y5eKaG4qeRBx6LJN9hY4z2x5Hjrk3Ew6XVDgk6CB3SpgBS2v364Fiwb95MNgDKsoYLdtUhN",
  "key24": "3quP52gkBrGUDDrAtvt1kM4VcKufzsnhXLAsJL7cgg63LQF7R4ZEqnnb4p1AY6kt4RiWW48JzCRfS8g9D6QymygY",
  "key25": "2wzRKghQ1eq5jotVB6QFwgMNGH4xfCvpSQ5MWrUvzMpUXaN7r4RAmPDRUB4zgF11FkYkX9Vxm3JQ7pFMDEEWRAZC",
  "key26": "3dGbs2QxMq48YejQVTDdGHmSoLs1s8DhM1tnYoRUpHU2uuzHzUZ11cUPtwd43uBmo9gbGaTpZxQjP7iJ6Q3dC2NJ",
  "key27": "3LxrNufAP2c13QSL2F8KaSshmg11x5VB8CYTZeh8oHuvi4xb9uoqgtcQsCeAzAyV8YKa2fFdQmaE2pmXYGNJZbNS",
  "key28": "5G9v1XjGuyiAeRjfShwh6a3TnfmRnFV1584jqkGAs5cMFegdwihgmREUnaWcH69V5JKe8AFpHCMbd5dJGznhhUA7",
  "key29": "25T1UDY82UQBd9x4jHiwK7Z79H8eWmszVuTZeeStgDvEr8xaUzmvYgJAuBUQGrycWkfejGHiWYrAbn1SdJfVKWsW",
  "key30": "5gWzVzSGZF957wqE7PHvbZc83LpXDvV14gBU9HtGGeP7V86pp3D5k8XrKJ2APuq16FvTjseWsV2z2ZYYa1s9ssfM",
  "key31": "TM3QCukwwfZiasHWVfSwH7TRy7ajXVN8SdfTrzsEZwocK8DNNfM1JXdHVZk8F24p9Wmk6RSVcduK2PRgUbQj1di",
  "key32": "t8BrmS5bvKkyHiZ2bTiZ8j143YCioZy5V7EFD7SF5r7kVADvttn5EuFZnT5ce8zK9NHfzbFECY5d7trwAcw1MYB",
  "key33": "mktbQY43XN8KdoMLT6KeFHFW9ksePHez8x2nZQWj2oDvfjU5H9x23VPRueabcxfVhNvTveLPn3bJYDdS8dWtMs9",
  "key34": "CAMj2t6vQScDqajAjJkB2iHT1MyouCrZmYMTmrtzSdBYAY9aynKt27RxcbXti2AVpcKY8c3zuyDyLwa1WEgZ5fs"
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
