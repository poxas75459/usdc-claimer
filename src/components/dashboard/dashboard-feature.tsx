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
    "uo5TuyVHXbBxYTYbwtbhLYJFCvzDkneeNDyvxmu1b26kNLnUfSwunQTiJ8GGgyrAopjA8YLSyBt3fzVtdRWVyPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RbDX2NtnR2fycGn3ZFrMWktZELzPFKcjRBLcUPYwzgYEkeW6gx8BxgVVPSxxrTjkiBJyyXQBm7Lyk4ypDifwSg5",
  "key1": "SAucfMhUzozcPBtDuc338ADtnsrR4w5ppBmsyShdbtShQcSbgPu2kR6hxxwv6ByXjzMLhU9m3aw3nxLovrwX3mT",
  "key2": "67G7ktnqWxwh8aZLfgUHjxJPxUUdjrnCym1LbmJdmt6tYEGneHPixJEiFwbdvJqrBooNT6oxhSzvtknfGXKPBjtT",
  "key3": "A7CL2GJCeWFNDjkbMnY7urECw7DWEjWfFYezHDKd9C3vgADNfimjXNzQmtE9Mp2i1sEdg9fXLy9Cu81Ujf5zEm5",
  "key4": "2eKDHsXQDcBBHda7BvYU6bDceLVRSU2pLzNi1xsjJkQj5muAH3gUkmnNCQJkzqji7Q4fuL4XhABxPHRUJQWXYPFP",
  "key5": "2Zgbn3JDdrCMFyZ4UTBessNbaTHn5R2kQrwVdXp6YLKPPsvMtM5gCoRbV67Y5pY51Lox1VwZhzysqqday95DHJAF",
  "key6": "95sHp9ZmoAfKLtMDX68ZRpLkMFEdC28gFddQhw5EsDZc4MVKtBJm2W2tBuitc6zmfkZmy9WoD9hL8vNfnsQbKFQ",
  "key7": "4MzUrEoHCcRWdisMdJjGkr6XSVs4DpxN9W8fLeDJbaqQyyw7HdZ9arhnU89zL5hWgWQ7LSPwzNqdG1oFRX6BfEog",
  "key8": "29XnSnmpf8pzYxmnfbkCSPHoJbo8L65jYxjmvSVkDP5j18uyqeDpsnBvAvjjh6wsNsNVTDj3kf4rG1rwmSsKFM3D",
  "key9": "2qzvaCbWjQxQACZsWBsnMmKmt2FoVUzDLzPqeEdhuQk8TtiVyQrWDxs1m6yLwt8su8rKF2w2DRTNTCYzcdhwZrQc",
  "key10": "45LBezL2YxcyQDRf594cc5yZWSLiBfAGnUtaguNps4B9RoPZRks7nwDKE95UcmBpPZDHHLdQgQwhLf9c6YDK8mqH",
  "key11": "5vJdUyocPnabyte2nzHXhgef9wCRZFwHRhzWyNr6XUSypZ3VbeLhmiGvGvvTe1dcQh8JDQcGNwmY84aavWPwnhAr",
  "key12": "3rp3bnigG7FyVtnHawyaaKbuuH2nod55cUfe1oM9PFqgzv4iuVnmw9P73b3WV7doSPZbU65hQdWi61dNw7YcB2wW",
  "key13": "25cWDc6iTKCQkZ16AqQHCNxvpVXwjYwhrhWBnDNQHfN6BqTSoiCr8oVKFjWwN6EfvnRABzu3vixuZhgJkjJCzmoa",
  "key14": "2KtokDkHNqJar1a2tja1ESyPxHC11cxRmnFfWgQEhqW23uSu5cmhoyUNeojqbY5EKx2W6gETw2DbHB26cDXxMSpo",
  "key15": "2r8WvCLuYawUvPpnT4MWBVNpgy2E25L8ABZ7K39LGMMMHaE83bc17idvfuPyU43wHfw7QzWvjTaLPEjQSDiK4STo",
  "key16": "61wHx4ASXrKvEwYVfWQgFQj6JGRj8PUHAx2kbC9KfLhCqAHbnRE3idg5WxzrHvrujk3NsoLgcd6iz7V5KRkrjBPH",
  "key17": "3DjQuxzDAfFKidH4y7xnPyQRbEFaPAfwRm8qtE5KdnxM43nY9n6ftSKk93Fmh67jGLGzM6ei1je1Cm3yBg1MfAwi",
  "key18": "45gmewr2NYFeaGQkf5bPVvkkMbsF4LdoW9poBHUuZjKGVrdvr5hdqzmjtnGfSk46rwMc6hePEvL5acfAKRkamSYz",
  "key19": "DkMdCTjCtfhdfRVKr2kaoDMYTP5REj9GnrrUAgp59284MxQWSS9GsbVKdbsQBpZ89R7Mgk2De9yR7Zr1xWbPkHq",
  "key20": "535A7ArDRMW5kxo7j8nSG4nzeiwCsWca6M11uJi9sBVKbKTy42zskgX4PhPs537MmUHrFVvqff55daXMNvrPA1UN",
  "key21": "5CCCFo92pDqNG2N491UbnZUKCrSyDhuwxc1hvEDUrto7SMRAw7K5aHiDJTTg2vnE7NPNRu3FQbYqCY3EmhzgHDsi",
  "key22": "5gqZGp4R5Nj5b8F31Q2JJpgvR17xmH8W2rCX4Jnr4GabMSAvB6hGuNmSD2geAHTheesms7edPr31Kwg72QAHFpBa",
  "key23": "39w3criAphjcgKu7FsRhZu7ZChcEdMGBeq4i8yohwUhff9feGJrrEheRfhWVS6BUxMvT82pybmvfibRm1TF86siR",
  "key24": "5ovCBf8A5RC6DVcbjSNLP5SVNaFzLsM4rstfVhhcJXf35pZvrzTuLDci97wZ9FsLE1cCtAnyZQcio7MUC6SeS854",
  "key25": "26AEQ2wT53TFi6uPzSa9BNMZZc2QSMSimApBtryMFDCuBKWGSDL2E5UrRiHtshT37AdyYR2EEk8RG4FKPwcGVaBm",
  "key26": "2LnsPoH67uzhnRhmaz4iSgdi9dtmM5U6V5yJnC42X5ahR3ccMcweq2bMihKfjq9a879uhTQuF2mjSZwWVyc973c7",
  "key27": "3DF2r76EcSkQuhDZVK2aVTFVgd1a3uBZPKFdWWzSfP2mGcbvvns1Zbtnroh73yrTCuceLakUH6gswZz95N9Y3D9x",
  "key28": "3aE4hrdDYDLm3ExYr5q9VfQ4juf3eWcHczDPrWVTn4gjsy4yuFUsVgLzPuwwAvFLbPKDGj9j4w8Arka5EkfHHaP5",
  "key29": "9avxKjqyYtXMYFisARsuLybmy2aqsX6spNmz47XfFUDeWzQk9jqVC3LAjcVMgmNTQZ5UyCnoEoKVMhESUThgPjp"
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
