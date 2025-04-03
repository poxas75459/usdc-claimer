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
    "4MrGREdmW5YSbXqgzMcuBzguZvRzesD8oUsRTFgGzCP5MadohbhfVNzq4KMffGSyzBn8u8Scuvc6bqLXBuL3LH6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kdL9xgDmXMjRxX4cZzyg2LiEfc3xKJs9xeb3E8DV2ZyHsu7Nw8q8X3e5NEPPfk56do1wwudPjkjz7pvd4uvYZtH",
  "key1": "2dwqLHTG8Fkfjb6gmh2kmXR6hLwVQbBUyiY28Cfq6mu5uJK2AA61B7UKGaqrLTEmh9qgmQdMVVyJvzDywGsnWG6v",
  "key2": "3kVu5K9shLjWrFB8GBLR6Nb5BRaRntm8NCrahmJq6vnCjbKxrUmuuQkKmQ6zGTjZArHQsKUEMWYmuB6sdq5snXpg",
  "key3": "4wwxBuaPmfsP7NgMeoTy8xyuhDMYPLQUS7yXDQgWTXyRy9YBtSYAtp25E1v9J2A5dJU2t5FZMHTyLt6KmyF3iSjC",
  "key4": "5pcpNic4zrL2NTdrfaciR9hDjxxcdniTwSgg1SzUYi1PMJ6mL5RNZabv9PR9RniWNCXErZ5utnnZdAxYJeeRc5PG",
  "key5": "5otEmBvwCh8UGiiuaHkYXEnhshuHiTB8mEFWFvSC84eJLj8tGRq947ojWm7ebTGbGZxvWuXsBHaj4gWGNoTPcxT6",
  "key6": "5qqiU5SHHKsAaUDdJFAA5X5PEiRTYcyCi2pXzV6CR8VXTiiXuz9PomV5aeBewVsQJK3n4jviBmStmA7dGgyTy78B",
  "key7": "4HrmeYcA4XskxVAP7ikfKkLZPASqrmU3Ur8eJZBvR8EZXo89kP2Epsj9GtVZCF8LYeid4gyEjZHEnJ3CeqKU4Yb6",
  "key8": "5CKWABwQ3fM1koCMCT9XzQYBh3Vw7pkmwWkBwMM575Z6Ji7N9SqRmBfZ7H7G1nHpiHbzfz1Kev32d8ZnFpZA3ruX",
  "key9": "2V2CqFpZMnMA5twqYMe29wwJgbFJdsPPSa14etBLR5BLkEMymKDebnrT3p4K9mKTunZU9A9NbkciGvipDySxsjrs",
  "key10": "Aujxc1Jnqj9jrLx3ikBmXzWbfsCQNGNrkUug4u7xAr4hPvwHVZhfRBiGF8trwWS1sh19HrHzvsyyRKWx4iiSFzU",
  "key11": "2kVmztCswV9hRuukWaxJkRv23JxBZFYwEre2Hm6KUVTo9pJBgNGPGCEBJN5dhtXMhbUe2vGLC9RLXk5sFsnkdGix",
  "key12": "35xJY95vZVbJYZAMau1c5eNYk9MEiiZkU9ZRqqWiUdEpMbsxWcrtKSmdHC8KmZs4JwD7zgH75MLmxNoFw675vGhU",
  "key13": "3P1ibaVF2Y4vpwCx5p4QXF7Wd7a765vakvBapoGdEu78oNSnLbXAU338cmGauq46o9k21EDjKmCZPkWt6xm3ZVsQ",
  "key14": "65bKvVes99A6xaQVPBQmvAxeRCgYDo4ZnYqjEUF7JRYzZ6kRBbwzuznZz71m5XCRzXRFV8NcQUKn8ym9WFmQTQDg",
  "key15": "67M96LNHWDH1MbQsZfinedGR2XHG8gR3i7svx55NEbJdYwfNKHwWegeTjJjPfPgG82KNhJN66kLdtiW2KJB2WE8G",
  "key16": "2jqYBHdgtvZNFb6DiqTfVjbfuWbSj1YbpXgJAPERXzNtudQWkFPvaQh88d5XZ53CfkSiNCNR3C1asGQiftYbBp6y",
  "key17": "PeZRYthmuyUq324mXiHJHi4LV7WJ7tzPadNaYMBkSQdaMc1fs8nTb68Usq7JFTVBqYjf83CReSXySi9TnPSjx85",
  "key18": "oxNygEHQGq3x4x8v6EnWBqMESJ26aDJ5kZofTAzY7EuFanUb1jAj3DLnE1GKwqFJiK3UGtenqgHCX6vNgjd5qhp",
  "key19": "NvinsKdfVzZEH2fHez9miDYYdtWiKcihZZbRzU2GP9JLjidoXq8uPi7X2U2U3c9GQfk8H7Jw9aZn5X8pPf7RM3r",
  "key20": "2FLPBEpEy4tnebqDVCTBso5hcWAop1oWc1Bc3ZcrLYLw8aswsmEDFVNW2U1Xhm2WbB3DWynApUjLwSbJZkdvn96X",
  "key21": "7rxD632Se4cnCmvUJ2F9DgMU2SDk8eXrrjBvarqU3x6ZEnrTFixjxEjaWcXA9YjCXhdTjm4GqSW6rJB4o3hxMhH",
  "key22": "gWpBc4U94AXYP5VqupF23XUcMjrKeeuaAMBj7WD57YZox9J4TSXvJAiu4nE7tknBeJnqHwn4ktaXYAGeLWKDcao",
  "key23": "64DrVmqoykoGJDBsUo28z9tRbZHwCGWNE7DhPFF5P3GtvLH3YwpQ2qHzyfW82XNZ9uFQkryhnsnvFPnBkrWfmD5E",
  "key24": "5HEazVJeB2FdPgT4DfmmsSEiqxgVB7x9kYgWXnRVjrXyjYJrAx9DTV6YLSQbHg3GDgZS37ivSsdYV7wz2o5J34LR",
  "key25": "wf4ifkZ9Ve4cqKFRy89be6MqiaSWKuDGrNB3L4UtstGLroDhVuBidEQA3w4vZyuc3GYv9ArmMtmYfvMxgWXkoPQ",
  "key26": "3Bve6rPQaX4ixaa8kXMk3tcaq6rE8AoHoyCYSjwefkuoJ4bu8VdEXCWpTY4XccafunisrimNhwkknmRTaAf3mF6P",
  "key27": "3aso577BktBvZNeJuuYxfRKzruLSN7ocfH7RZ868Xzm3qwS2bWJbMSNaZv4SkiBvv3MSvJX9hJXD2oCKuj99n3cs"
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
