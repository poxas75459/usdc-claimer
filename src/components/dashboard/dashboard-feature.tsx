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
    "2sJsYVnhjVv49cvA5PsF4caA8VxoXcBrZKdmLNsUrmX5tgbGgLSTiUtLiCEJa95mCCNZ5vxofAKR3zA99BLaRRXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "313Gs756vGXDU2GtQNQSEeY3Rm1F5ozkDv63hJjLZGeAF38XtgHryPuN4HVx16eA3VmEJAVGZbD7Vo3uwcALu4YX",
  "key1": "28CMAgVJvqPACkGWKGucFvwYPDmAjqTZp8TFqgVSafHhYQhdL1XUbbhWCqnUYSrwgQyrDwu4AhfBS8fSHkG8ZP4V",
  "key2": "2VUAoefWsPuVay6tYQ6bTq9hU8AzEGfwgssefyBqqEbH3g3m1gfG5QNN1f3jzKh7rnD54XKddgBkak541bJadF3L",
  "key3": "2vJA85sMquY9ucTievzqpzhCtHt3aK5iXGaUU584PpjuBxUQ6Y6uZnNxwEJRPLDKpvowXj3RE3goVMCQGfKS4tE1",
  "key4": "vzxWCkXv8jrgqUtbcbsQjZXRGY8REzUeND7GDfLNr4tLFxQg2LdRu8V4gJP76CUwn3ZFGhv21BLuy6WiMoBtz7k",
  "key5": "4w39eiNsDTQNtPtqmnSg3zxzFChwqMx7KXTH5b1Noz2ah5SFiJrxRqH9wH3GACUXjNg4FDT3WMKPndMoKJgx9rWH",
  "key6": "61Vt4sBgiXQTUVJnGyyT4k7gpf81LP1DSifBjVEUkAoFnRkCp17juYJ2tdPeo38X14GPMTXavxh4F8hhiyDoM6zS",
  "key7": "39CcNexJHim9xTS4V9VJSaGgpL4bbWYtTBujWwDpi1337oLKZWwmTWtt1hHwu33ubDszTwr8TMtTRZWtzQofD4CV",
  "key8": "2XzSG5P8gRx1rjY4Pe7y6rCHVv8bVqPCvqT9w8Cu8j4QpSrhrbUsNFVceXPdEST7ip1XUooMgNpb2hD5UR3XHEWq",
  "key9": "fMBPbjXSp155CFd4xCbt2VUz3HX3kVPn9nyX1anDQVfv6Pe5fa38ZGCRa6dfTjnuHvuD1hUZpDG8sntLusKqswn",
  "key10": "41Y6h9E6SeCCNHmrMk3GM4nAf7QSsnkKwPhQEAWz6GLEG4674jGDvJffjSWe5fdD5v3A2N73NDgjBbVwkNiSXsgt",
  "key11": "5mNjhw5Cmacr9CvAwYsfUEmnSvCzc5ek3iYZ2CzYng8YhfgMC8eRNKcCEMCEPigG3aHGTRvmAUaRdrPzjkJfmaZ1",
  "key12": "3zPKYdTY5EUkU5SgHfgm2ZLaompnr9BkhK1HHKMGYW7PPSiAueJoimjnDNvzGXfZURg28qRmhPyrkarMue9gAhkc",
  "key13": "2GnGcFPrdkJsw5ByRWxJQh9gttVaPfkrDgAd1AwWBAWUhxGuEdgbT2SJBMtPpfsP7MZmMBx5YfaQJ3nS9VwY4zQE",
  "key14": "4rD8wUh1qmiQDehEAuDuBBuxNXjVKmueM8WCZT665ZyVMWnnck6bWND6HCdgWw7vofJq6WRhDARuXP24Xhp4eKM5",
  "key15": "4AUpQrT4CsZ1MeY1YrvPXJXw9nMimoAvDrErASNTasa9se7PqyU6UXQqFswvt1R88VvysHnVWDwP3CMPfHZBxxTi",
  "key16": "5kCHJW8hMzSYbe3p2tRvPeDFWi6v9gZf4ujCw1ud46LFu7BKJHDMMbg3fEoBAJaZgJRWQkxj4cQtK6NHHX4ESb68",
  "key17": "3pCXAiP8TxGmd9jBBcRpwzp2LC1GE7gJa6gLjPe5zkC5L3a4jzghnzfVA7bTUUgHWC5BgSPBxiz4ZePxqfvfcZEq",
  "key18": "5oH2SKSVWH3NEdcnxnf3tNtTcKNyjMvp8dcisMJajfhvWbkWaAz5bQrnFmZADaeRLuS28U3cRCwfN4W3DUHSEceo",
  "key19": "34pKNMNm3rAAS7pT7iiDsv2Qc2TLTWBSXwgYi7ZR7cr8zGdxLRXTNXpioBqC4pLAK9n3PVByLZ8LYf1DWeneAqUz",
  "key20": "2KrGhfhaHwXAyau2VngYgd7Emthqv9aMNXeshUgTLA9NLF9ksLduPjWc4uS4SAyAjXWEC5EL3qbDj22so6y3sam2",
  "key21": "36CrXDEeFcLMjPtbAGZu2ftU19mwxQfMxuTFrX9SFmASW2YwZED69Kr9hiSdHC5PQ27rZK4mepxhjXjXPPXxjvwv",
  "key22": "39QBj9nB7U2fPav73YUmFabQgVXtF7c9LaKGXV9nq1GEcQQtJYjsSySNCXnj9nuhs3P7xHY4a7JC8QzkQRnHQBvT",
  "key23": "41AzoNexpGag3aUWApobwzaS9C5xbPictKq95sxJ4pxvr2YgBeYVrK6oQrUf8X5FNMWuu8anAm7rpnCdM6BMqQ4m",
  "key24": "4zXicNHMmPw2KswdAPiSMKUd6BmcqZAYCTCrW2jkBcagRcoQRN8NPKcLskiz3woDDhgYh1zPgcT1PdLceNCLMUad",
  "key25": "3wD8YGrFgYPnZsoxTqPVV5pA4AEb5CJuSyGPQuYS5GyjCusWyMemMyFsqckGuv5E8KHMxSFX6bc4U86jciTimxvC"
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
