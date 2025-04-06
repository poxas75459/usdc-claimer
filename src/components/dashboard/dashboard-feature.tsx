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
    "5hW91HzAsfPHfw2iLGV4sU6Uz76g6QpLv1AbnU4o6WG8KBeLwL7HAkdh9QqphSPrSUMisi6W9RETZSaKVhPiFJ1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uf2UCRmivjxbXU4F48zTCxG3CuWpDxRKnkUCGPMjSBjmrkXqFnLuRsbB3G55hcXRV5cXPDKSMjbuKzFCLMuxN8V",
  "key1": "4Zz2tW6opLZnmzoM5WVnqeSefpgk3ByHWmWrAMyk7WdRChpTLpGYkHYbFRWwB1xC59wCpDDxiSK7niFcrGynK6ZE",
  "key2": "tnHh2JpVWuWUzk36gMWGX1rwqP3sRR3aZMQaCc3FfCH6bUXyuikrJFPqe7S28kH5iHbJecCJZhaGUTH9RCiqyRb",
  "key3": "3h8VVbAxsdDjkaqpE4RsNqd3rtoWWJQwGjfbkxUx2ogzdpS25pGvVRBbgW4PZwqUjFNEMzdp4siExnLBaHXzQ1yb",
  "key4": "5dBKxAZjjzVy6ZDiUL2gsPkDkXRaJczAt2rtEomeqXKNY2k5qjytvsWBt81VpyUirF1UkPdbvFsXzusSibbnLKjo",
  "key5": "2CCTDRusWMVuppMEjPkASG3eqUPa9AUZEeQBnuP9nXwRj7vZ22tdYe9Kjtgad6LvQtWosnH9KPRsayt9ABfYpRK8",
  "key6": "5fzrAfcHf6k7i23nLffrxCkbYQEkW6CV7o8MkvbAeCHu4LfQawo73YB1RP1yvWP8p8m8F7Ve5KTAsfVfrFou8oBW",
  "key7": "5d8tfS31BS22k9U5wdGShEub8dCShn2uHmcT163jdvBxqVAvhqsVy5JB4CX47zYfwFbBDMWxgiEQPA5oEwcHwFZp",
  "key8": "5ePwpiF4kW7iQSRhwJ9MjDYmX5hSnwz89svwTXsRTcG8LrEfnKkLqMQMXLeMkhoodeEPRtRJJjCxKoNUxwWMvmxM",
  "key9": "s3yCGWtPCxZHXXFjDbR1LtLGUrcmj7qhU7NtkyyMq5rFERzYsPtmpbKFMVgWz6uqhpHaFrkYLgY2pBG38Z4SupF",
  "key10": "5ZK6Yeshhdfg2HJzdNB9Mq6wTKBDY8cS42uWWuuWBc9Z8jJ8EfyYydoxYqbb4Fq39kXvmCFBUuJQyTCMjMNS49Q2",
  "key11": "5G48ugVKKCCSCbcz4TmrEq5nXQJ3wQZuQudHATXRyxGhmQbjJGW7DnHsDvHQVCuLTHVErLXEmz8uX95CQdxZtAjA",
  "key12": "ubjzLNJkfrWA9QLV2n3r56gsXu8FUn5ycmctAdQapJVZ7c7sxLnpuB2yXY6tW2Zd9CJHPM9F6S7Ya81rm8mzZcZ",
  "key13": "4ixUkiXVEEVLxTYVTje1VyotbJtCvbE7X5ZQExyG9dBjpECb9Kc4TwPK8h8BVjEoPSXZjWwkagkMYByrSZgNCkDa",
  "key14": "3vGhXT7JLav2KJ8CHVncrUVEsNaPf3Ewja6c6jVE3b3pCDT4UTg6XLTKWQyCtm7DNiCXjt28FLrm31cGQjom48DG",
  "key15": "2EULxnSAayvMuiapC19H8Ju868o1BaPgq1GNWHYvnaGpZAYqttNQYmPhZmpFd16DSW4f6nm3TLDpWMY9Xx4zLY2J",
  "key16": "2unVx5p8ESovyxvotyX1eWaPa31nDMk7ErUTKEikve446jXydxgsWKv3f2SodymDGR4SR7895YE8TyRf9xYZxtd6",
  "key17": "Q6TKEx2N6rHu7eqFNufhWUsPmTtNqaZ4TUN9YM4dfQmfqUzRJKQx6EBn7L9W2qhaEAfcwLcATwZoEs6D4Pw7quP",
  "key18": "3XMoVztSt6a4dSXGRvoPVg3zkMcRd1TxChitKbBP998hoKwQgEzHHbRtK75zwEwVcD9iwpT2EWLwDrwzZiGSyKwX",
  "key19": "51KSyjU339aeHS5duLLW4JzFGRtkuCsWfow5wwuF9V19dv1YHV3UdMMc3uge5QbN58gbKevsmMMDVxk5zoEh3D3d",
  "key20": "s3NjpFLKGvZBoGmNqZjvjjSn6DQWeAr72bpNpm4Fcd4jGFP8eddMHSLcyqyQJ44ee7HNDbqgkBiN7xZxKAdsu4p",
  "key21": "4v7XM5xadraSc6jAkiW49A34pBGRn3kapK1YGFx8dNS2q9SbJTj2drKDNa1sb1ieqNbHy7Dkxgb5zGq6y4zEcRUt",
  "key22": "36rRYLp9CSi7DQ8j8amJJAvfut61SCTKsyEYHdVHPnrntNFbJKhVrdKAWNfUt4vGq7MtzsBvUjSMp5D4Dqagr6ob",
  "key23": "Vxd7w9DFLAt2oSJ4yufd8AGL3Wp2CFD91f31uHCSzRsYC31iGbnuQq2wVSD6zsLxkZmGinPewKoaFvPK1WywqKb",
  "key24": "24YWf1X5LV8kFY3EktMYZesLYgZ5oxGBokaEfer4xxZm28AkLdEg71mTcAfKc3crUpMiAEkxF9mFv4E9KPtW74nL",
  "key25": "4GB9s49x9o82k7vzwv2rZGSgxPmJEN1wmYwAWP46b7XVxBkEYnQkoALTAr1NW11dRFEgWuQq2um6oLWmC9zbtZDh",
  "key26": "4vnwSSdyWtKKKTd2c1FRNKEFGfz7zA4YRmMfqZXi9Kpk9KYnzVMhSQwbstCMuMFfeueQ4cVGiXQDvHDFr1XRKtbK",
  "key27": "3HZ3QrCo1RuCt27atWay6oYuqwrfYF5hjwe5NEpWJps26K5rsjJqHduwiyuXCp2pnvywmZKZukEGGZMCpiuArKum"
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
