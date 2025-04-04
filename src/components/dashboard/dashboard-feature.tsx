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
    "51aixxs3SEm2vRGt7Xvdhpm5c8QWDDGZLNG3hiLJ3rmNyQBqYQTS27C6TyUVkVkxQZAX1RxkJFP21Rn4JW1AxiiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r3HuH4RSM5Q6Vvd6mNS6koAfByZf8WuKuHnfw1mZscvAnKGmRMER8s35NhugRFj2bq4QmF4RyCmt8fbKGLJJKVL",
  "key1": "4PjG2aiG8ALrnpTTCZviPWc6MifvDbAZNAbjfG9bQnohipYbgsJRm8iXnLYLmYJ5vCkexn8oi7yfzNjudsdQNsKP",
  "key2": "3cWFQGaPX1ygLaeKoAL4x3foSFchGAHGRu8SUZrCpNiwotmrKv3cqcgmr3b3wuk2xCvaNadSpxzpScdMKk3WDfFC",
  "key3": "4EsBYehR8ieLcTbsnjqw7niydKYXFEu8cNYMbdSLJzFMBAhQu2Bkrpyygcnhz9FX1hwzwBWcbf725nUtsedrWLVP",
  "key4": "2AhrQmDwJqksk8McpZm3rzoytniL35jZhUvEy8usDTVg3RhKXFVw4xokF98X36p6mEwyKNLtDr2spKPiQX16a8kE",
  "key5": "5da5rxJeZ2KbrCd1YX69VLuwYBgnogv8LK1jDhTGMGqKn9xkugAZwmS5bZU9VmNqm8FVc2CrmQtRRwU4Ae6f4mLB",
  "key6": "usS9Bwhhi61av7cJNcjyGskbcTCeDqZitSHsg5UgKZ1bnXkrHYpQMz5cftmmxaLjiNMxEFJJBTi2DsQwbTgWws9",
  "key7": "uHcNQ3WPkHePQ3eevCYityPA4rEBKWwN8Vc5YSsUpniARi4CeqgBHn42LMfVbZMs2VJijguKUzFVfb8awepwK7L",
  "key8": "4ZJrV2jEqadLzStB41zsAQcHHK7UJdkiSHPBRAfmZYjwWiv5rRF493nvSEVJYLayi9ofdoUm1ZVaQa323M4RGtc3",
  "key9": "2QstSUYAEHo51M6ML9fjA3VHYBLBqXqZQ5EVFUrbK2wWQ4EttM5vczWB99yEXumJPfjjsynXnJY1a4YH9x7ZSD1m",
  "key10": "5hN8Kk9wQe6DQaH9cEUSyP3oXdDDh2n853bja4L4j411Rgu8MAwgm3aAx2No31CD9gWQtp7euvXyh95pf6mTaAoe",
  "key11": "3dtk13McuHVy6B3ta2H2eVNR3t9szMB3MRhFfY24dbxfDLVA732ZK8LWKxfCnZzNnfHqe25AE8yR1zjrXdgCnuRU",
  "key12": "3sSXNGWfcW4WqoZSorfDxDWpt11STjZnJs5z9KbRdKv97bELR62QLqAA4jbbb15vK9fjPJwzdfNqiasPkAMqvh5d",
  "key13": "34LWDWyX4K3hN6cHhRKbY1Wg4wjuRrFZ1mvFkvwnn8zqBPJRsR35mh4dGuogzouqTGY3XVptY9Zb3vuaGHnjBTvR",
  "key14": "48Anzsop9X1nWfEwv4Kt3me8viteUHYnpuE3ycgJ1qUjLVndGM2jjzFSd1pDY7L43cNdiFfzYeXnzmedzhnbUAqg",
  "key15": "WyCrTfRgFf1Sr1YGWRKQtc5UDDeNrUYoT3y6PsV1bqM4LHHJ6EAn2d28D5YSwQSCtbqtqwhA2GLRhVJVGL84MUS",
  "key16": "3GAEgRey6dCur1bpgTJRKfCptg8sBMG1SmUV27GTJsPCoCg18zaGfh48WieeyFYBGZiCHYbGEfxqVhWCzAtg2SGy",
  "key17": "EfjHEQJAVvkZjBGdkh561M2HJV8EgUJpWQYaFdQgr2eEAYbJmCKoFTVVw8tPBThLqN4wMcz7KKw8SxhHQBsGByE",
  "key18": "3xb3AS4Ny15tkn2CU1yJWUk3Kzkz5hoNzNLu8XQqJTNUemDZCdysW38SNf8Fs3uJjj9u65gSqggzcsEb2PpYFvcq",
  "key19": "24mXxHmgm8LoKTinLiBosfSp5mDojV4VX6P5EDDLchbUVmVSt9rNb4nC8gy6yenRJarz7rHfQNZBucXbTq8aRidR",
  "key20": "4T9UWxjt9RiYyLEGBV7Z128RKLKRuVzmT9JEEC1UGTDLkNb1mQUgghz4FvZ461kzvGAkdMiVbPo2osq6oGwxuVVV",
  "key21": "2ZfNZZ6n5z9qSiDNhTGQUb6emfU69JLuFSssLVsc6tx6FRWQk4pnREyrWcJq7gSNQfEw18qJZvN37ZHVVLYtTZ74",
  "key22": "AGvJQgtuTBgzCkeK3HQefARNbaSanU1n5HcKKPLuhQde552gFWzMVK2Zrzc2VV4fUsgmMJZLPfUHnJeDG9XGubk",
  "key23": "3CfwGUXGBfVriGQj4GaWBC1rHKW9i8opabBpTkuoHmhLb1vyom8oynhjDSizdXjcBu6rG3EhXEKxy5i6djeCVZ1z",
  "key24": "4WqPFXPhJ8X8RV6tUrAGfc87VbSjd6wVPn8wTK7RsAEXyEhspvwGyVPRJkhmgSkAci3YH1msYkfEw3ojV2DVivky",
  "key25": "3SnGAXizKBJtTVp3hu3gWFbajFVsipW5uZvozCLiSFUrEbzZT64W6MkfAbnMixVQTFAzBNcXF5o19TqZqSRqhBgc",
  "key26": "opG7mbgxDfnuWzr4aHtJt6cbmCfJjcWcuTPjBGLFugCaXgdcHfABv5o4qPbiYcRQnhnaFUYe3dvDBeK1zi4txRU",
  "key27": "2W7Pt4rRGYsibcjP7KsQ6Fc9FnbSDr5Gpw1jPJV5DrZwE64XmUHLgUN6HxiQjp3y1qcpp2F6wU4nGkc3jFsDDprT",
  "key28": "4ARQQz3wMe95nh7C4DCb8vCm5orA5Hv1jV73dkBhHnQoMZ6jTbQR6CE6RN7bBdBjzfuMuacAnV3ufEu6Yo5bqquo",
  "key29": "654wCbhNde5xYNA2udKQM9yk1PQ5LGHcA7d2cS6BVbznFtk5p8HGGDiHYha2AsSfhRdnhf3EnV9yQjuUC1CApQjb"
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
