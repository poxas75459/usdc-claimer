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
    "3PfcawYmXGb83frLZhQPqfw4yBVErH6aYdHrh5pG1sGdSj7rpNNfaJbJbRKh4gmzBuPq8zqFHv99AZfcVBwRWEvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h3mbpa7jkt1qUV2HzkaLmyPecHZXCUrjoG8GjBL4vxv7AytGg662V7wi7vSQqMx6svhhtPi926axL1VXoNzMbfr",
  "key1": "3maS4d9gKYt1VPq4sWeU8xP9CwiCyqGt32RHA2kcdNEGDtNxMBvQ6fRjkgNNKywU1oDGuQ7SvWJ5wtVMcgzcpsXK",
  "key2": "4ZDHHVdfi5q9howWb5CzuowtsVrwRY1CFzKYp9LA3qM3gpqcvc7SvbUoUn4JDFSdGmpNebfiT4Eqw5ss7WK7f4D9",
  "key3": "2T6QPGAmBvhsS8amELpPoQ1mjVAe4shZM4Ttno92kA9FSrh9LxkPjyrRdr5eDKgPbR3ov9hcyz4o1e999vcyAhs6",
  "key4": "2tMN1QmtNbWtpBJCksGxjkoH8yJ4f4fDYLyaTBr3kRUfCXabRjBHm6nJqCNsJ417dLD8FoffiHd5fGfNzxqZCVg",
  "key5": "Tv4FesYHcHPASTZtrx2uDn8oBwi1c3FPJ3CiikqbZtnDB4x7rDAhfeW84qTqMAvaTxPD9HhmKEvjjU65KBPBsBS",
  "key6": "3W5uFMuTfTVcVpNQPKWtaD52NFmsEQ3efpvzfuXzbfwxe8oVnPPMtybvRkxoAgygA95vGDAxYbbjEgW8FsTxJzTs",
  "key7": "WPVNgruT6uzUMY3CmN5c2TcMQhhoaSJP5NkNrWniYrZEChqSzuBqzDFNEJC5AJtAqG8weTzXR79yVRbeMCb942a",
  "key8": "358yC7JmBfmwVdjbTynaRPKupQ4WHKCzNTBEyYJVXzR4enghCUZyGeWaHJpBUSxLsLGUvuXwBe4zTjfuv1Wrk9WU",
  "key9": "2ZbSpnz65AL4dZvKrGok4ijHDmLsmZXLfGcQLKHUck7ePBtNGEDVu3FchLFz26TPkBpuKN7gGhqXUdrzfhqrjRS1",
  "key10": "b1L3hWPdPzKjMfq4VsJX5ZB3QqvkCc5ReASdPn9PaPkEbxQL125pdBPUfn4yQPGr5AqV5a3SV7exQNJKC4aQmxf",
  "key11": "55obqXdsNALSCVibDks9b3R3U3pAwteni3zCfZPpv2cUzeS6zP9X31spBH5XJKZVpkHGS9kdEvUyo6YeS5uiJNgQ",
  "key12": "HpgU5b1ZepgUqigxhkECng45UZnA8G9WN2eQ3RAtgZNb6gYbDc5ZhApX6WgRk7MZiHYs1CpKGUG49QRMUcvLD6F",
  "key13": "4gWGSuBq5snWSey7RtVMc7ujaGiaF71juSe3pyAT19GKDpLi4EM58C38z1rJK3Hz2MF6aZESJQrw6NmrNzpUa4HR",
  "key14": "21pN4pNayzsgabudAxJLhjRDNS8PZW4oqniRQUz52T4BRcxKDjwtqoYYQaVjHmSEhZ5namoLN7ivLeMzG1qyJDjg",
  "key15": "4vpbs49RucsFDyJoYV6hJc4fKmMpeWLRFGfZLbfoDxBdH2gQhGMhY6PRE4scToK7NGcADUAtear7Uufs2Byxsvnp",
  "key16": "3cTRH6sRTxwkoV6SKMEEhhBszAXTJgV5ViWn4B5HPjXgRMxemy1ucjnyCkd9WhyiapeQJpxojFWx7EXK3wANVM5f",
  "key17": "M7yDAQM8ziVgjPx7GbFMMd9XYFnsbqu4SsW2tPm2KwoNtUeTEQQX7KNh86PYjjDzH8aEYoaDHCZizta1sxXXZko",
  "key18": "3pBpjSAYGyXgNxNz9ScJi7K7RLNxErdw68DMZXVVNPPoWM6EEMzkkkVp45VXXCGhVXJSkn7ndcnMJv8XbKt8rhJg",
  "key19": "4A38R3SgUGkeF7oXrZSh1sB8gczSthHa7qGr6GukXyv1kemeTSej6xxEwVuGwrsDvaycW9kMWU2JaywMnmSaQeap",
  "key20": "2nXsvJJzkwdG9BFTZeYZtzSaRHhUYZVo5pT8EqWzpDS6gyaYXns2d4NaCvknfZF2uLjuCk1QdBbvSLS9tocoy87W",
  "key21": "61rZt5nTaHBQe3DqchgajcK4LLbbnb611bQf6K1bYPJ5JZxQqZdoiakgeS9LJ52ihY8szTee3eZQMZpTvmbkxjj8",
  "key22": "44J4T2xJrRwkHXzP3NXt5saUQS7buyWi3GEEqsCz4j6a8WuLA6wPoAyDGue5iAzjumK6h8d2NLTDHwi2hUorCXr5",
  "key23": "2LEm7U7rXm31QYLJ5RPUiTeQLEiffSX5LdgFxcmXvEQESekQSSXx71sHaKp5BQKakK3eRhPPvCu46kN6EgHzvrr8",
  "key24": "2wemarpvfpE69pmkE9KVGdssy8Vucum3obdYgWzRkrm3kzqzrypoVkQkBegSj16z8WHUKFQLhNSNeojLTitkt5jJ",
  "key25": "2b5iyCHgmoBDDHaA49cij7pbjxXfTGFUNHddeDyRnhoK684nFncgAUVruH6GWjwzJBt2813TLXjGgbSuuxyhaSug",
  "key26": "4pgWhHjwpAWbnWw6TZKbWLmSJ6JM5NH4EJeQPgFp7gd9bpcpWzvbkDv3bAPXfov5xhc2UHSKiKsNdTFuGn7KNffo",
  "key27": "5QyKpwggza39s5r5oHrEriDNx36dqiXVW6mSB61XvBJ8byD7FLnKS12eP6FWZxu1HwbQrYK7hqiUtLm1nbLsWUec"
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
