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
    "4icDFH8cqjZ2PqjJHsP1wht6Vgm2TpZyuuPCsyZU7W1rgX3McdnRNJcuzgVXFrSpdHtjVx3ZpGbtRLxYvfNJmvch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8akGupkGQGRksbQ1XXTsrzTxfF46KvMtD3M6uWBRmyNho1cFNRQfUBpgRVpPRU2sLQZurGWdB5EN1n3RZbmSr6P",
  "key1": "465yXoUPmiaJrukcJh9P38i3WJh75NYk4H9mPcR8WrpYVwRMg7Q13UE5pD3WTd8qgZ5ZjAUPhcxLMd5fk35AR5a5",
  "key2": "4sUus9nzCzvetke39aDVhmgucAnMq3HcqibuZ3sSdEAQ6r9oMJHrpawarDtVbbRPLXvpw38nNrcsQybE3CE22XXq",
  "key3": "3Ly3Cr2MXDYSn9hMZFAdWwjEJQFryrZRTRZSatLwuXLwd7729pa3VkTVQfHB348euWdaQEgUL3mkeX3WEy69nBg",
  "key4": "3xA6hPWfhZFGAnrPqwpJk8LtuwYttPjW3XaKQJXgx4WkA3M71CLfKdsFdGVc3YGGoh1F2E9HabHz2WMdmPZigDSn",
  "key5": "4MULyyHDAkZ89P5NAHjnozaVaaY9zczqchLGiZayRxbPiTbbnDLKi4VVFgLaUSnWFy8pP2sk75xEkRyneRJEPBHW",
  "key6": "47NTW2pTuabt3kdhfTySQoZs3fV3AmNMaYR555pZafw1FijmPoiPhmVKAf1Wvzba81Bt4rcKtUSccGfQfkzPoH7v",
  "key7": "dZLLrZc5maR5YJErsyYdovE9Sq8YJv8DSXdjMqD19GKUvRVGC6MFFBTug1SJdZfEePHB7VHJpQgcLFmeY8CJW3D",
  "key8": "3A5GqZnDaB3wAaJmgHH2MLZ8YpFxtDaMuY5heVkQ5xYU5afzbSUaJcyi5wMp4AbL7PN61VV5FM4RdSUqutEiYwms",
  "key9": "4oNu1SDDh2nd33dN124EKwujwktx74k1fUWupr1HVvyE5RM5BnErxu4HE6sf24PHoZV8o69PBetjLbTgpkh4ry5k",
  "key10": "2QSer58vva7gZz5spV1GGrdG6RDcKmJ3dbdDjWKYd3ZzZtHBSQoz2cdRTtGpzrM5jVgNZiu3EpLd5zCo4AF88mwo",
  "key11": "2N3E3bhSvQsJLgbqYYvoxTAUBz6iYd8uAKrvkRcwmdNtm38oVduabv8uaexbTLFpDDcdBSKup7tsgk5k6TPDMqFp",
  "key12": "38HHUsnw67tBoP5J3WL4xnFfMq7kJQQGGYeYwzmmjqMEaefdpxsMDVnoRvfDmUL4MBn8JrX9cFvVtk8B7W3hwo2A",
  "key13": "2fLsHJFLqfQYZ2HritNJp8UNQp8DM8XPhfLZbzzf8MGxuTJNTfDxaT7yyiv8uNon7gcfpJWCRxYh1FogwCaejSbz",
  "key14": "2ezjyGBFFiZ6Y685FnhYygvQBBQuDxMMWX28cwSm8QyKmb2QQMzh4iywrQuFFNdnCymTG3HV1rEg5p8qhtjxwcF2",
  "key15": "5HXsaPNWYG4TbP5GupkX9P9dM34aFEUCMaMj4eCxvg68nQf7yNBSgKLGEnXdWJMYDjvEFooMUkj4Gx6DSzmmh6BG",
  "key16": "26aAVnvVHquvx3oJNVja43MdNSyTcthrTgdoF4Bo8LXuXCjuVKAADhpdspw2na4i1aiucq31EFPmHKzwg4YbppCG",
  "key17": "2HdmHeXqmeMzLJfJ4vCMsqxrhGEj2iNt7gV3hFYc7hQxFxauZ5gLxnTVYBsQsvGqzL7Cp4KhXQFpSboEjfNzfQgD",
  "key18": "3dnHCi745D68tByq2q55HVz6js33FymMkHGuTTcREci7cKxSvRBLVrKwB2nNtaSXbc86hvJgZTNn4qa6Kjfi5h1D",
  "key19": "32geB42QbTmvts4saFsRjKHdghg3ZgGBEj9tHo69XGLigMBmdt5BdEn6AWurdkXERTZRWCuAJBoternDW6j2WeQJ",
  "key20": "3ZBgugpAanXsEZTNfBVxQBnPrSiAKUtLpVJnTfsbxqKLno3ArKEvroSdkPSvHwTL7nBkhckhLPeXgpNTPbPuq95P",
  "key21": "4mgX4SN3PARP55j75cp4zmUXVX51aH66GhruYP3HJB69rATGxQZDTSzQFsNWzMmTNoTkpwhtb9qz2LA28xao6sAT",
  "key22": "2LjbKTVP1Ss4D3VdKhBUro1rrSqHGcWAv39iRyoJqNWnKard6f7rs88zPXz8UgH1hNE8dncpzZ8kLBqJST4RsvWR",
  "key23": "4AfCZBZZHW97zSULkiJmAtgCzKHH7tCeS6YAyqnSDR8TKyR8Ztp466z9AW6E46inZ7NVqHFkw9hBWUZPwjhH1jiW",
  "key24": "2bjHXoMdsBjBCKLdwbRai3qnVauU9ETLeyS9Rk9kkbCq2JzwCmm5N6RhNkjXmPQhHN3DeLpWyQfuEjy789PR3f1J",
  "key25": "2dbxiQaqVEM6DR7zrx8nUhMbukFqeN1CuW17Tcrhkc1Vg1VWSh3AJwciBE6ZwYKkQGcgyepHu7oukAveuo1mXBYs",
  "key26": "2opL9bYFZCFRfC7BLUntaba6udtyE9cCgKgPPURyDdWmdqSyErweqnLUdMyoR7s7gagcBRaiNTPZmPAWBecnPEf3",
  "key27": "3LQrkUNALZ3cY9zUDjj8BqBxde75fDT4FZytwKfuvsfwab6TyPq81VvEUjvogockZtX286vwu6oq4obLwRGSPGTb",
  "key28": "77z8oS5HEZGQ6S9eAVc66MPcYFtBPin5QqrUW59mkDM7qDLkaPiRWJnhfbwSCX3fh7MixYzNxUgmk2guWBui1tQ",
  "key29": "62qg2qEY6WQhyHPsz6wEx6GxAJfBL6UnG4HchGLLpB2pAgmtLmqky3jWCi5Z3TKtUE8FD5YbZ5AQQT5d6SjKWtWo"
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
