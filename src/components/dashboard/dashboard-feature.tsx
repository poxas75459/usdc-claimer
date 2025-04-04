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
    "3WV8XL9UDV2caVMDdeZzAGJhXsXJnAr46HcgnRMkZkDB741vGpPaipKAK9kW8vfyR4r7Ky7qVFeNjydjopMBFRAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zoDCzQ9cGYykQJU4oW8STnfbryHQto5XBfP7yMosaaby3qarVBNHQnwHizs9ZHSmnZvwcHf4BRoYzotp42jSkSC",
  "key1": "3pA3HJwAMAfepKcV83VsG2HX8vXU9fNGWtDEdZE6h3QjUXowf2NmtEkkH8zbmpDiXVyuWR7RkEsk6aCWHNfN9p1q",
  "key2": "4reU2zuLbwVy4akvoA4Z9BFbyhtnQ6qeBZG44uMTyfoLmy2T3sM2YUed7HNHVFHt7bDFQ12ukReskAUHGgikXMQH",
  "key3": "2KskRNpSmmMPDApC9qUw9pkCkFEzS3zteXqzKTEk5xazYqjugNYP1W1ND6atnoPLi1nnuR4ZrNihMBUxeaMKXCTM",
  "key4": "3UtN1wHvFvxxULBUPr5ZoXDQTxRDSxnJfXXbEWyEKBGxNM6Z8vCqjS2CaSKdkoDfMCxsLKe2YhU6UwN7pbNv2Eqi",
  "key5": "4AuqHiBsiRBKyaUPJdjgKXabS7hDTysHo2Z1P8iZogwjSDMqmNeRcXJfwWPuikbrSCRJFBVgzpA7YwaJHyPbscXC",
  "key6": "5wjmKCY4a66yE6snHjNcDbh9hA53Li5f6XEnujz9mCsb2y96DCaDJmM2LcLyeqCuM7ZWteK33SU8rcpp1Ae25niy",
  "key7": "5z8qZ67317cu64aa4JLsoWsZwnN1CnSCgDQZWXBfggjXBZNcDopSjcwvCNLfzjsPKVpcDmQsMFTCaxrkbYQpBpva",
  "key8": "4ZkcQ1M43VSQwNQ8qSgRatPgVqxAuBnMcZNqiXBi2oeBpakgLt8hpDiJXadwrKGqkXHsW4NvnMXguM8V3DPNHpD",
  "key9": "5juVXZN1Q4WuBXqTV3o6RhenSDmXL71ywiXY2CgCcGErBxFokcYCwX833R2Fa9sq3ryhpEDgdJs51rX4EtDvS2ya",
  "key10": "57S1Vg8jk4qAstEMcRjJq5v6JjcobjXiFDmN1yAYEPNsKGWivVFEfaDDYtBTPFff5oG3xvsmj5yai9cmSBdX4dDS",
  "key11": "4HYGPTGyjUYTYWKdLw3A3Ch7XqKPhE9eMoDQfxd8T4NqkheUyLofBkGSFzrf7atkYUdhEixVasLWH9DvxHY9AHWk",
  "key12": "24ryDWqPYNSTJ1KLyRkugYvopW8JddbhCphLmqg7UHMjPB4B2sDHQdPuYcY6rde3eeJZerQ9qi9JDjHZGjNQnqW7",
  "key13": "5hBzybH3TGs8e3DmoWnBQAUPMjjMhVoofwcgfPxsapWG6uWNRD3cNKyVDUFuetapYVd9wo9f2LrVwRnAirkqNJvF",
  "key14": "4JPKU6SKvQrLVh8bC2zkFxpzcYNfwxBNwgqFhUgYSJxe6JSQyww63ebyw37GmuBE4ZbvH6o2FRg9EVibUJV7pcH6",
  "key15": "4JwwuqsSSGuHjRsY1U73jYdwvuioHHiu2VFvTXhdtGLfoMV513qBvQG2Mbp5NHcq6VGYD2Q99cUM6dg3z8EpVxgX",
  "key16": "LQudoT7N74MRT7K2GYgbB93w8EKjkWeDEaYxSwVhwdhrfLZtWDTnfmbRvvCUTiqPpgH4nBTFkPyVceivM6KYKLv",
  "key17": "3KBjgU3oWFuR2QNfLBBAc15zThDzsDG4Sro1VxuG1jDYFJCj49gLzqUcdLFykR391bAcc1zW2DrVLRD9bWJjTVwQ",
  "key18": "GYuZS5rRggM87wtgcDJMBMvxVfGXdqb7TRRtskhj1hV6jYMduEaJBD1VR7ddy6zT49rGWDRTCHMKqviJaoYC3DK",
  "key19": "2WBqh8PxC2nWEiPVmc6ampc3fm2znBiVA32qJ9GjJHbsjhuk2zCrR8neizuqG5gT3atEXx6uMXe8kqbZZeyx3LD9",
  "key20": "3tWg6Smot5aGYeN2Sb3wVJLpy2zVVvVC853qmgjTAepxgXynycqR2UQJhh4S6UFdMCsSxZXxxmrJGaiQiSd88Tat",
  "key21": "4YJaeh8LS2fU8kPbs497V1cYrGfgFaHYHJcygaVPX1DNDgKBRgYRdMj3d6UoxoUQmGRnEcjuYefPHgarvj9KDnGu",
  "key22": "5Q8c5gmY7BvgLx4rjRv64WmFJir8fr4XAzC1XfpsLjVaw1D53HWyD6bEFJ1urVktdXfcWFugzkoSPS7UX5VFsRig",
  "key23": "5iqndqSzHbHBMHZjBmXmL5mkRJ1CXQWqLQRTSLof3gTiqqDLqVuh19t1VdP4G2TAqYHPWZgUWo7B9SKabXvcnsjh",
  "key24": "51ETPLSrEoXYPH8gGJbYWP4SDc255Ukq9u5nDJhtUcDwxjw5aqE4yisTZgaGyxernkxSCfA2XYFJegxPto57L8Zz",
  "key25": "2yccGxxNg2xgHKxW7ZCqjFWZupZBEyBjfKaz7d3PG9TizidCrJg8H93qmCD6v96rcMCUcaAdxYBTgqf4gZVCtNhK",
  "key26": "51ZsLk8TMPcuuZy547VEgocn52p7qM46SusZJTv3ovpgBsDZzuhx977VT9MLkd8XdcoSrir4abDHu8qex2wBJqTc",
  "key27": "cvjP1pB5nLVYBg5BpuePvLhyzvQk4jLdecFL8wvmziU6WQrE5VyqXjBiAwcRArJgGDn6MpaJ6GYh8t3vdhsmDEM",
  "key28": "5qwfNnEWDD1SDLdFteLGkgAEHK3xh12ybqQGpfTWu44HWB136dfqSPhCz3djb9AWe24gTV1uvj9GuQekgRLEccYT"
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
