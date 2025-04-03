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
    "trSjHyUXRvjvgKMw2yb3ZKFch4FzfKD4ydBbCHHoYsXHCmuWVNxLHic5pfdXN7Guh69ixkU3fvENxJrhHECg7Ge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zw9pnmz7jLtMHEEJxsBEprzrRcq6pH7W83Wexx1mKUUqebQnznsydcf6SXshctHzLb3kvNYfLBmp678B2zVznFw",
  "key1": "qzPpFRCzpfEHmpeEPGf2jdTu9sQKJeWAZN1C1Ecm8GVu3BEvDSQ7k7QjD44smBj1gRiFVdmFuTY8oqWNAfxvhwS",
  "key2": "r7RHz4ankhfQbR93XDyct6pf5s8kwtx7eJEFsXvp3GkoZJhS1izuavoaQASfXxTuXgViBAX3iPmtJz66dwq8PxS",
  "key3": "3BzkgpghnZKi58YEuvoKaWjqpGVhhTG4eyYUDHagLfw7UETeynh7FJozbUuz3iHQM2WSrhjAreJooBVSka5FTFPP",
  "key4": "dJtaDMuarU83nWdzLbJ9iPJFEVtKbi8J43wo6ZhV94jfcUSAhq3GkojFRd37y4N6gbPdjSBnqQTfYD7Qp4fcKDa",
  "key5": "hp27E1dmrqsmUWoQ3qJNYB8kb6aTDxVPTgn3iBmMZ7XnGapk2BzD91BtXB5jKQKt3FXcPthmKztF5iiAkGWWAAn",
  "key6": "3krLFCH3ktUg7i7KckX8wBss12ADbje1i7qqw5AFa9zR2BJz5ndBTv2sAAnvPK4G8qWiQfDcM5fgcq4NrY1kS3Y7",
  "key7": "5Y9Kuj7tSphbMM8UqJmVSSCsCNu9HdxJi3PBocnS4qfnX3pLRnKRx4kAbLCtRYbQfckD9zgq7RTXVWRCUsywMPFT",
  "key8": "iLagUNbfvFXfMwPNzxdBzcKEEG7zknkHSLXyrPxfhVsF6Kv5ELLqhrrnPYKPPm4QSNsVisj6H4jTxXJ3Pux1mck",
  "key9": "5ghJy8cCvUa9cbDTeDsTCesHo5jpyv71d7CbRhJs4PCfxEF8pGynHvWuq4uuKXjpWB96pwnXhBQ1zvWtfySMCv4F",
  "key10": "5JQbtFVSfV1duFD2zZqamL9uUZdRfNSVD6edhSNvu8goiKc4Noz43ThGzy6RZvmQZZT5gDgT1QYo1TV2oL23ZNsA",
  "key11": "2DEaSArZ4QUKCooBvm5ifnbHDGtNB6gH6Ba5TwzuKrKTeTP3H8tDiJ7xA66ujsUsNFjetiDoDMLFsdd4szxJocgA",
  "key12": "4yNKrw1ifJQWHjEfKBxWgfQrcwoRquoeu3xZYYqD6bknGzvWAQcAC6QJ59N4esjHqjEWX1v1gpdD2efcgk7aACSx",
  "key13": "4A1T2GHSNRcLosaZGMCvxndwvEgvb68QvdZy6YowDu2BjXzfJFsuB2vLCUovSfXo2crYERPmiTa3AG23wcQMCX3B",
  "key14": "2PVsoiABfpimcDuzqibaSjeL5MfDLGX46Aj7qBWe2P7Uj5aAERm2jmNgJ8n6Pqk8BDdtUPLihP22BsUdG6Zu1Mhe",
  "key15": "2nBNdvRUkKfn3DJJsjrAvdJEeNHDPa8FPRExPT3cqb4X9eiMvhF5QRz1sGXD1shYkTeYvDqrnJbb2u1TvSbbs6Cb",
  "key16": "2Qvb21rGm3XvvNS6dro2TK7WxK1X4XcByGnVqjBvKrttkHtqs6LhKtnotgDy6nRyP7WbAuPLzucpuGVQC6bqSp3i",
  "key17": "347cWSgDxk9Xe4aFCJu2ZSKu1qt2ZMn7qftpXdmM3GV5EShgwafRr6jUg5nnyS5Gf9M25yhxRmcfWimQnzXMyvy7",
  "key18": "4EQBXZaSBRn3YC9iiwwsYdr3W1Jzo6D4abXsm8hvShfbVG1Tq7AeJMQL3tx9n8TU9FAtu2vhr4RgFgfpiKxkE6wA",
  "key19": "4Y6mTY5eZYU5PT6DqN4LLdn7soceLaGbxDMNfr38pVWJ4hA6EL2WfMAYM84n4TNzQFiR5KYWjMvLBkP8ufp8kWjv",
  "key20": "5eh97yYtHNKCc2Pmt2aoGsYC3mECTsMHjUgQV58CA14YPJTmLiZRU7wUe8GGEAgh4mBywkFg8Tv5DmLkwmP5S5jF",
  "key21": "h1wcWSSUfkSjB9pvkpTUJeMrPEpyQ19zxSLEhByok4e4GZNcSqM7MbsTLY1CjExAv9PdHPjQxAfb4rCtgrJn6pf",
  "key22": "5XsW9drMAPdgp7iE6Hv6VM2bi5K5GHP81FEGYDQyZ6ziZbgnsKnZXj8zcTG2rybB9YKkRszxLUzk5uFcq5o5tXVs",
  "key23": "UfHb5qXTmH5hXSXD7EGcKLkHmW6FPRqKBLgckbH4Lknx91mmSXhYy9ZURkAxZtKmEgEVtAvP8Ht3HdRACmMMLs6",
  "key24": "3K8FB8yZ1n7YXTAYWTgfHshWBGUWy7sNpqQ3qTrvF3WRAc1R6bz5hKuvsZ3V5CRK83xdd23knHZNJedepR7doXt2",
  "key25": "MLXEwsCXMncd3Fk1mjhuevnCjVzimXJuZ4JWWcJWTWkCtAzLMnap5y2pdEootbg9wSMme2JrE35GSFhU754o19W",
  "key26": "3KHxRBVYw4i9yxDX2dvADJMU2w9NSPpcnNcdRSuMavuTBA4HVp7rfdVEZmsq8yse6A5Y5NUU2U2ys1oUamwr9Xzz",
  "key27": "2gJPfqNPCDZ4yGZJX3jeFDDe3kKaYCdg5p8mc9tLQbVciV87VVPVDLYcNMRirVLmDVEeo5JSJC3utpHtg6YFuo8u",
  "key28": "3quekQ77eJKYhtnGTP5mkPLLrmwgFiBEreU7rdyDvwcJL4PtTTTkU4pNhvrFYAbMkgnR8knqZKpyGFe76fcapTZe",
  "key29": "4PQV6JLB7811Qdm8uxYJ95Tp6b1nt47uMV61YUyEsxdYxwSW27mLbQUsCgv6cAegVXHFxMcD4NsKm1Wma3Z8crxM",
  "key30": "4Ate5uioiU3JynbNsU2mi5oWMrLDZAThdH9d5rXz1AE8fBPwLSTJ3fc3wtBy4p2K6WSqXRNRYMGPuWmp6ouwHKDa",
  "key31": "9txBnyEb8edQcGQjiBcxS8V1hv8mZKKdPS3T4koorVu9VLpYpHXXfNV8qZR1vBF6vKeF1xnaB9f7xcSyEjhpvGP",
  "key32": "5AWQnk3EmPp8FG6QUh8kWdaZKqGXJcxsnDfLieM763oZUSv4ZSDFB1jcqkkxZMDsKyLugU18tjd98TtQXKVpsuRj",
  "key33": "CXtBcXUngErJpCJ7hzRDJcnkBGmtUfJamLmG3yxijTZyEfAPtfDGU9fzownnNWhPsurjczNU53rEJvY6iXg5ct4"
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
