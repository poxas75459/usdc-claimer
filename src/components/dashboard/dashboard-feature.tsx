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
    "3poCwcWesPw61dmZwC4oQ7N6H8ZVSzYc3bGgkGFGKfHVyeR3jfCybGsmJYXSk3Ej8jiuZC276rcc47hcrwgvK3gY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TEwghkNTTs4KnVYYZDiaSzNAcCzSkBcFqMZFEbxSTPwSrXfEgFvQYLMjW5Q5YQQFtMwDmFJppPb2Apiau8ThecY",
  "key1": "53huoYxkBii7jWshvUEuxiRLfqwE92cWYxtSrHGy9BMCZd5TMfJj5TxuqW8r5UwGHzRgWSMUsK6RonFMDY7A9ARb",
  "key2": "48mVkHEJDorgqJCvaBrwGKdiEs8c9oBGQuZ9rMiJeitRQ6FwDp32UQKmTUj3bqjBFyDMMZxjXSLhG8ShzCttiJBt",
  "key3": "VDiaGDu5CG7wbHnoRErtK865TmHTj8FQZeXmfRotbczd3zSnStbrByNWuehYAzXcm3TbBaCGuVYuBPG8ZWsqBoE",
  "key4": "2KbGeRi1RDbqs9piozeHk5fNyQqLMtQHZac1QbwuDc42Afqk3Gp3JHWysUayeuhBfLmxRsTy7PtPEvSwB2hrBr7r",
  "key5": "kNgCUDeH3MWKCT2f6pr322T1rjmoQPLPU1TArfdtzHVjCxvRodSMuAby5H2PNpoxzPxAyFz59bNKRKdohfywzTm",
  "key6": "5TfUgV7sbBb9Jqe2Phb9UasCfPRKBz9YR8HN421Jw18FM4wjuh8EsNCmKFV2Yrysm6t1viS1iUwYzNeSb6e8ZvfN",
  "key7": "2Uux51geG5fx6Drg6ygZ8poWJz2FPqAFpJriXy66rB61i6M2RoNmMYf9U12jCdLPR6cUctW3Y2AaSZh1KJvtirKa",
  "key8": "3weyGopr2Fzyzi6o6ajZH61ouwMiQL9QTba8f1pQfHyDr8QFQVHvDzhsJuLmuw6tH826jQQpFcHwV46ekYqRXiNH",
  "key9": "26FsFGNFAVy3DWg2PaLWq6iGEaN9ib8eFZgg3sVGN67TvzXARaC9nz7VpRg4u2rVvwXwA6spWqL5JvC9q5UmYheG",
  "key10": "2CkLPNBBrEpjDYLBY2EQ7Gmarkg37b7X7G36VgaJgfk6pAW2c6VQQbqaHZx9ntRA8vZyavDSyKLMhUB3XwvmrruQ",
  "key11": "3nRNfo5b9eazAihuBaWuyW6JLj9eoX7zezniUqEqSkR6LpgyyYBbsaCyYyZf7JcGannR7KjJQbR7p4e3RJc6dvau",
  "key12": "4Kxf3DGPAX9Bw2LMA8yXqHacG74QJBdHjaYdfVnebRdm7Hvs67gPkpfAFseFTcwKyVn92EFqymL2uU3dmdkZNDVZ",
  "key13": "2o5ZifXRkCi7FCJnjjaLuQYHr7STuzbgB1xYc2YdrVxRtQFPb6twK4XWgTv2Z3TW6US6D2MQtbYbWkG8bKTJ6j7h",
  "key14": "3HWEJisym9wzkEewno8VYjqTt4e6kefBsKgmpwYWtPcWoj67K2zEW6FZs2jEuJnWYpA7EN461Dm49ekSbqeh4L5A",
  "key15": "51dubqLkf3BtZNM3FdLRXgkCfc5qxMHxDuEHaVNXU4LRLt34Hp7yG783Fv8L7W8HKr9PC3NWebz9BMQEnv4Zjy9b",
  "key16": "57AAjBGZX9ZAB2eXhbJCiPcdSEUFTsnvdht9LCY4kFvm4ffvo1PJojXyVnutctG9akbUWssVZ2pF2Xdxp8yLmoXj",
  "key17": "zbVjaVdQxAGW9RPE1kSGn27oxtLWJDQJT25ozNBchb6pHY3ysQ8XcMEzkqeN1vHfxJXMotiDxSQUDLoLuVh4Rpn",
  "key18": "KhhAmUnuyfSKXwUacsdyRU59RprWv7iK72VyX7yiXCi1NsLQE1Pr9q5aq5G3BmBxkjXKot3N21oDNWegTBUHuxC",
  "key19": "5hMar8pxti4BNJxBVxaCtyR2YQBXLyTWKNSqLfwD3WSps4CSigB2omCv3ZyFvcvTYF3iE3RDdVjqQJLwZJa8w6J9",
  "key20": "3p7Hojwof4a69qCMHbWyNSqyWmnXjJbSPKdK1F12Y18wkaaLLVXqYS1jyM5YK5i151F1XMJGtYYtqtcXDLH6j7L6",
  "key21": "4GpZ9jbrZ2SyA4Dx7FrWvr7pd9kpWASb6FkJvHmHKLRBMB5ySEYXr4uN7vAtyxpiFfknWkLSPCaJWcvvbDqfUf7h",
  "key22": "5utqPZL5Wt2vogDY3fwtvugUYwJFc6TP63gikTiv7NiitkquqRYSAr1ChDWgxaHSNHZMuPH3DomH5vCpZajkRMr3",
  "key23": "3hKzKyQoLMe4uz8RQUgYUEam4XFQae8xq3UveGhdDZ5f7WE9Hh312yrQqMZMEb3RPQpGE1vNS6Q96kNcWFHA8TNR",
  "key24": "4nwJebUTyiet2iVF4N1mCFBx1syMG4Dj3Ejv8h19cJBRhxe6UAvZMJ5at6njEfxgf7vGiN1LNwVkyw8EgYWJD9zg",
  "key25": "2qu9ACtstMtZ1jmdAoS9RYffnQXhNrg8aZ9djq8MMCobacwz9JYZn9eCqnqb8qq53FCcWUDcJTWoG9dMMdii78bw",
  "key26": "3km6Tb9AnsJ88tKRmtSmhoKz7BeUUCjsVWpV4dC4mxFJSSDKyYPARgFHESePB8FhQbUbUjb81nxdG6PrPrde4zKq",
  "key27": "2ALC2PeJBnzdU7xgi9Q8Ct4dhmmzYtZ2oyW9xGSDqqxmHEkh4w3kVqZf4Zpyqm7eAcm7dZfw2Mg58SaVmoSaDboq"
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
