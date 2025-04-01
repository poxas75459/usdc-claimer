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
    "ubt5CSy8FFab4Mc4ZHnCi2Jd8VCSpgjQJEAjohUUTAD6Xw6FfrFYtkbLeFdEKuL2LqvwsQmGum6BVceNh5hMb1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7p15jbQrAyHuaCuoMUqcHg4i3ebVVnrrJ4icv3MY3TN62WKphT8PmcUMedejL5MQJpb95yywvVnKEobpAPKSHS5",
  "key1": "2zcoQYrjJuMKGVXazYev7c1PfbYu513qhZUNN8vbGmfKvhAQGDddyes7VgxBULuQXyNHdkuqwmTwQqJMXNTXXQJP",
  "key2": "2Y4C9Updt1Fggt3aXu3pBKFJoCXeaC8399Upsd3bAvTU7d849ZsVUVNmarwUqjfd4Kd7wgUrVPWXhN47BmZPZK4N",
  "key3": "RpHCHq6yfGo1nPbqKtUitMVi14GEUm6MsFmE23GDdZQJqEQ451wNa71aLfTbnTm3amgg1Zi5bTHvpY3xqDgzaN8",
  "key4": "2N5TGD5hqHg3W7YSsb736rKGoH9gmPVk7S988tgc5jMAfMi7iVy4QdL6epsNrAttMJaMPJNh2UD6J4tHokFV4oeP",
  "key5": "4eWts9mkj5xPS5ryUP1Ez1B33cPpAVTfVNtytrwYT2yqeUKuPL5o8WSRCRCwMhh6rEuUFtdqLLhVTfz9LhGEt9ey",
  "key6": "5PWuAQSVBz8TsEswr2pdcBqQu8uDTPqvScHg8KQEiYgLuM2tAeJzf1otHLyUgjEsxZcjjxPacDiTgMmfVa2rv6f3",
  "key7": "5eLxhK6Rw6LzWj6iWt2rw6tAozgMVBJW7fQmigFBfzU5iorMQT3rB9MzkincjCt6cN5NZX2gDrseQM8LM2bnFfkf",
  "key8": "3SwwxDQdCJN4gQecjz7rVhbHHTuU6FG74Zs8VgwX5XhTwUCqPzFhwEy31axDz74dQn22fFVDKjZA7z5hYSxWKEJE",
  "key9": "572hYC5Qdsoy4yk5qi82P8yKgXLBSob71ATiXU6JY8HDixJ6SqM84UrUnW7NkdMXZ1SyvxfygCjLdZJuEdhoGJqN",
  "key10": "YSKapevmzUMx7X3FdZX2vtfbFLGY9zy4zDAJk3W9AV2F3Gfw7uvPrn7vNmE4eF8xSe3Dai5vJZp6c5EfZ3e9ohw",
  "key11": "eVeMWTgry1TeuCmgsTvLZSUp2HjTX2RjNwRsj69ekA4qXJvQqyqKAxnrKdgT2ASM5HttYRjXwiUy6sq94Z6y9Fc",
  "key12": "5BczekY7W5edvbmRcajzCBqtbbTTLvs8Dk8mDtk5bVxRBYM4gEU2cG6MRYQnZCNZfVKasspH4ZkW1ajjXntqKFJj",
  "key13": "Vu9LDqpkkHucLksn32DWpprBP96gRLWgJvD4kBTXeguo1ERcWm3wN5H2zPAmcC5W92pA487G8X3noJmj2RYt23H",
  "key14": "2jpY7aTkMYXQv3a4GfnMg7auaTELXdFsPm52UYYZRQ7ATuD1X97HNMnCcGq4g8EKmYKowTcT2TRRPd5TdSbV8Hq9",
  "key15": "3Eg7PUR6MdkjGMDXE8H3pFG5yerRnMDMKjTV1XPnZPMHVACAj154uGrhpS3ETn9htatX3iV4UtXGMSPefJgogM83",
  "key16": "w4PfU6Z1v5P6iiqtUL9riYZQCAtKxx62HvFLmyTDErguvvBPWnf642W3CPK3wqWrv1yXafnjQnUn5EEvnfntcVj",
  "key17": "k3qibkgfGVSskGEbHDuzfJdhZjFHerKx87Jp4asKUPKnu6oe7ZvxmM5q1fpgsKYhnTT1CtwmKsEEdMW5hvx3MFZ",
  "key18": "3DN1XaVBSwpUgq3J19cGQ79ogd8fP3Gc9gM8jC4Y7ecQzoybwE9r6Cru6t9f3riYxaCJ71PjDSAnn8FwBYfDBsfm",
  "key19": "26g4EsGBUZcdooH11ooBuLea7FT6i73pMdUSJJjaB4KRH4zm2RitBapvhaZCznLE3K1KLjKWrKxNSVrMiNx2BPU9",
  "key20": "59Z2ERBeSAz7LUaQRqfCarTUVmBUecSk3GedsMfkchC8LaK8hSbf2nZCgyG4uX4dLUJhewwBpjZc7VwTuVFGfc3y",
  "key21": "2iiY4QD4zCStV4NQ5N3BKZv2qGUnobSi7YYAcAdKohzah9kv4HBgP9LYnAXuSELit7SeYLmA8ocjFqbaiPU6yPUg",
  "key22": "5DhJaMHaBsoiaeCA26He6YFbCSLxT1YAt4AJWMitHDbFye2V2K6kZdnD6dVto1q8dbgF5JXTxQYuZJSmxRygJWAx",
  "key23": "qB35n3kWSCQYLnRyoMDL5KBEPFAJghpARFLpKyKBMYD75moPbbMjCU7X2BuLyXAuvLxRaKAEP6yzdKaU6bmU8aJ",
  "key24": "4ok3Nv23YyktLhKAmKYrfMJewst2FMrTds9xbdtrLTAjm9igLGdskfZoneiozECkQ62PCjNdvugiigYYUSUmNm3y",
  "key25": "2YHZd47aRtL82QgBAdZmccea2bYXiy5gDy6MW5UtS5VgPnNHfsM1hZq7NhnqXHk12udR5XnAXiqPtyAGxUMpv3r8",
  "key26": "3UMZ4NgRJfSucyoR4GznWcRu6u57TYCZW7kunZTtdfWUG7WSVydMPdPAJKjcK6W4hB4BcpMQZM8V331MhmKLGZxK",
  "key27": "37hNZPc2ZTaatFgUxye4XRudTuSJp7r3vjKQKmCUAGdrhPnT7V2BPr5MfdkhVq6wGymGvdm5rr8mfxzWC9WvViee",
  "key28": "5ZMoDDZBTaeHhcULM5DAefqs5sRHi8cxKWKqXzgA7mfpJkBXvBkA1rp2gwCp32h5MhArnNXYUve14xx4PKpJ8gA3",
  "key29": "4KXe5FLoz7fyfEFE7XfgtZMcR5CQL7yMAtDnVJUoeJHwbSjGmC5rcTx5rNghXWXbonMobx2abyG3XfS4ikEAetE6",
  "key30": "5wBr39Uza43PtPUerfvWsNeYAiUmkQtezdhqGK6awsJL3rNsvpNkjEf4DZAJyqtj3ZpTH7sJhVPWUDcMP8Q8pXdk",
  "key31": "54x1K3ngNGAZEMePTgxSrVfyyyCiNUxkbZHWH3HjZr2FxULjtiFUSr2JoMve2y12j7CbetqczXLgFXTd7UhP1DP6",
  "key32": "4ge1kXXB7bnaAfDFhnfSZS66hUAawo1JG39atRhP2B7t9beocFMu3gwitgfk3P4vDeztHmkxFnKLCEkm8LxCD3dS",
  "key33": "ogCVCPjxJENuM5sfuaVrNKEJQ7RDnRzGiE9ewNoxT9ByJockAWbemu52sXX67qRPYSrWD4uEJ93xsS233NYWUjf"
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
