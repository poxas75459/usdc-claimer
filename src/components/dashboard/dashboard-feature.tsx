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
    "TfZHyyDvMqYxewz5YdkzVpZ4JCt4DAbssEVkTmDhj9wW34yCXRUqLdDmGbqG2qca4ihLAtq2rqpXQ4tDKC8jqDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YLgCVKMnfCHzxE145DzCR6yg7MAcK19oiVCX5HZJ2onGg7Qmdty2GsARZwLGUC4cTYGR7GjUA9nfzuGtK3mbxgw",
  "key1": "2kSvrDNRSHYpddpPzLVhMosXG2hk4P1sKfG3k4KK6CPACCZAk4KurmbnRG29T7i1APFxteF278KMcpoQDzyqvKuG",
  "key2": "2z6nHgXB3a6FcG3HcjhnX1qngW5sG5VgPY74iGyKSSCV6ZKzorNZHYdh7fdemHm9b6zp6JshoJMrSge479qq6Dpt",
  "key3": "4hA112fF7PfTKPoNpK2jCJnPAjTsT5Hq1aJBxNenXbiciJjh3t2eunw3edWVHg7zczvoBHpxcDMfKxYcNT754Hzf",
  "key4": "2T782CZhqicjSgznvpWNwSNiWH8FfeP7jk6r7CBVk8U1zy8Dbg2rzLBib1jzH8H45ujad2GhiWBWJJf795aSDCFA",
  "key5": "jQTYgXms9nuLVcX3cvfTT7k1ScBHGm6Fv5VcV3CSGch1mHx1UsM2EycsKas73etBysyzi9vsbUrzKdZS5NbisJz",
  "key6": "LBaYHBHokXfgb4m6smn2Ku9ReWm9n2Avgn8GMXjKJBU5gmBypntdRUyqxtm4xZWkDkQPAWr5f1frHfwFsa6M6Bo",
  "key7": "384GzaKXj45sudQHSsYWHihgzeVUCUn8mtKB658GSp9UUWFFYBtpbC2ptN9QKhiy9AGnjkLvrVR5r7CaWfrSeosc",
  "key8": "3CMv6P6udLkqFaAaDUJz5Ei3aRe2XV9Toh6YDZs6pp9Cqh7BqjP9inqp7wvqpSuyXXZUGTWEHfSqhUDFkP8VEvkj",
  "key9": "5J1kHWQMdWntAMyFPNJ1UKyWTR9RXEcq7mvZAS4Stbg4edvyqUqt7ocMeigFfmbF4yRD3o8i4mDAaPsSBSGGSfL5",
  "key10": "56n3d19irmy5W325v7djYRDmWTfg13fQAPXJRcm1VjZtG2FguAi7XcmJKBbb667hbxcBscP5AEzMgJswSqYJgDRA",
  "key11": "2Y4rYmY26VSVd5T7ATmTosCAYqVfanDvrxXV6q7P45iM13sAR2gpoURikbttZn2bhHM75T1wbsaggf4dSkLm4esv",
  "key12": "4ZT4kEcV4CDh911vGRNDEgbA2cGWEFcj2QCshaUyQN9DU5zqCnjhBZpiUx2qd992PdTsEf9vsvSoLyFDtF3xxfUf",
  "key13": "4DhYNmL2SfTCKrM6mHo1tJrzMQGXau4FCRMHTT4Nyo7KhCv71EbsMp1GHvgyjJv3W7vx7KQuLanmxn5FkvDbTFh5",
  "key14": "2G6JB1o7u1jLrFdh1zuEnSFM4DDpYVByJojqcqr9oT1h7Mgy48KnEoqfhbokTQAEic2abAjrhA7svkKDu8UGc9WF",
  "key15": "4FuDD715pXzExGd8PV5beFiP1cXhXWXJVKAhoB2ogacQbT8otktFvFW7KQXFkZXhC9urmwbjXi4SRnLd5p5Fj75t",
  "key16": "SseJzUzuior4Fa7TXFDpfiRrtqKMQy9c8bim9zbipxA9tY9nkMSxd9dZFPbP5pntuNtnsNVQfHA1ThhEBNt4kfZ",
  "key17": "4mhky4kKCbmxLc8R6RDj4vdF6oATKVQHWpisY8oMmkeKkbAQy54qwvs19PYnPRjW12Tk6nU9Zp45JxDK3JZgeknH",
  "key18": "3mYNM1awscGd7dFwVWH18bUbwWBUchM9Z18P6xxgHymvehsqLbvTxnZuFRXKCDN7m9kUuff1dxrJYEWizW6TRavG",
  "key19": "3BQHgXZuqqRDVxsC6QcXdhQ1FRqmXChspTLMsAdk6C6Mnovr5RarjMx26MzPTf2ApLNow9df3poA1cjgZDUETAJd",
  "key20": "WKsQLimnuETpqMkZUwYWRkGkHEgqRmTxkwfnJsTKc8JG7rrMfmcftZiQ24tg7spzZ1PnexeUcv1dk9Lk6SgHBbp",
  "key21": "az1cgzCBwmRd7CvakNxVLRjCCFEm4DPpace1192KAaRnG7XqwvkhLn35u2t6PfV7X6Dk1qJmJRQC9VgweHGaQTE",
  "key22": "DVnvo9ntav7dQaiPjMWRpNXYJHt71EZf6EnjrDTdL5SNFgXkBjcGTsuPB5sh87ieSWVWwrGsP1J31PxbvC1DckN",
  "key23": "RjM7dNutAmtpRysfqPfLbF2yfDfJ9f1H1JhvmKrYsXSHND1tJy2fNV3wsbwcV19ngj4tkb37b2EsC1msjQzVjRH",
  "key24": "5mvr9DsRyMwutvSnfzc77cihmMdPHw7Ayo5TQJ3DhWSmLAaNz52mFqnaEayUBNbwDo8UhvNQmTNL2hxckgQwMEzo",
  "key25": "2aZVv2k9iRHCQbuV1sDHznpQnkrTyZAqZFh3CZxKXJDdBx7dPgCUBBxCqGGVe7XonoRnJzr4ga3MPFZaBbNoBn7V",
  "key26": "3xi9ib8gRFCAdFmr1htR7nNmPLLoFEeUSL2kSPmtVQEGKHawXJ8HUxe5PzBWNLcXTchvrxhddeMQxSJsG1srpHvE"
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
