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
    "5D5FCrqePFNT59M7NecWbNUGVgz6M4UVvoQywyJPNjMKpvdYtZGo9UcsxejuM1nVHftU3Kakw5QPGrSrp28N4xMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hS3p1qfTPV7WbrsfLQRAgUCBd4reaH7wYT7VNMjJ15ZCiZHkVKozMX7eXu9J8iG5d1x5XTvH9aDTvXozd95yMv2",
  "key1": "s96VJbQHbkkvQuFAHKyQFxmNiRpj4wiw94JNPVK3jsSgRnRLk1m2vyRMnZPLJEM3eCPK5Tk3ExHjkYuGuM9gKzi",
  "key2": "3iVC9H4tRHQPgBEERWqgiuEQ6NRVKJqwS3sU5Boju9ypXkHjNwHgPerB5tNKi92ZFLhSPYuEiy5SoycgvZgHn8bP",
  "key3": "3c5kifKnBXUYGqEJApofgXq9U8gv6FUpAf1BSHtVHvNWinn2fA9Jta7gNdUHUnHgPbCTnoZbub9HB2m4gue7dVv3",
  "key4": "5rafBiR3rQgXww4vZ75mN3uDA7Z9f5HeYTeBSWsZK4XHSmvNVCxVk7N3jZNRkPAb3pr3rdR1cMoLfjMsyEmCT9dB",
  "key5": "5nbwY3pxBiqhPdkpuKqCoKWGRMtfc8Y5dDdZyimFYAzCtvfcZwQKH9ewFgTuwWrni6ynyzmaSeS6GoKRVFvoMjjP",
  "key6": "61T3smaaovoh9XT6wLL6y7n3r7tECTJzXDGRdL89rQYRcwc49J4ASzjXMY1UWDWVC57HyRtMQNtenpjdCUxjSiR7",
  "key7": "228wSXjXj3smixmpXY7L8j2rhydGdm8axnE2sAS4pyCmQXeCAtnVPsPRSwLK1ZyZKehHbvngmAWJ3xb7Zb42A5DW",
  "key8": "GeeJmMd5fGzfLYmtkQyVK2waemqTomdno6fkJgmKqFaHWvX4rcb48ZMKGb3931gJ5U3t6ctiRtPUxfGc2bSJ9Tp",
  "key9": "uNLcLAtFptYKT9dnvvxnvNiXLDUV5KgkVkpy36bew1MNXgiqnogu1f4zR7RxBewPDsxuAQQzNdhHgsTwKekWPVc",
  "key10": "mYiaV1dnDRRMkTvVNYL29GM9X1oBtaGELVXNsSBpaQyW1juhRbEXqd9AzNuKzKjnXr1KxKjoK49rRNyc1D9446v",
  "key11": "5GkE9hiwk5m6dFWhaxv1BHpRBhRsKyJkNP6VJ7iKSLr6Guq3ogEcnGT9HR2VsdB15miidxdvo3QV471xp7eauHqb",
  "key12": "2oHHQKW1RJLh1JxYNxZSbiV4U3qLQTmgQPfLGyBBkEuY9aU4DJwmGSmP7k4fzZrSVAT3Y8CBhwdA2KsTxxkFkY7D",
  "key13": "2AVAX3jih6Ud6hPimV6AgWzjKNTdUX3DSgh6AhivPVQgQxhYyyqxtMd4WMuhSWFVKz5BCcCGWFi2a1m2pVTby9kq",
  "key14": "3u6MxWCnj4zxiJwdWgrM9FtkfxX2dovjrByt9UEHZ6Y2P86qsYqCNqa4gHyNFu8Rurdg3z2YfwYcZTNwCGoUFeKH",
  "key15": "61Xt9uRpZRwzYnDc5vxciaMZ8CRLYGSyvuvKZq6AHKhUPscSfwHDoJgHKxhua8mQ3jgrPNCymAyhzhpesB6nwZCM",
  "key16": "2oi32hEjFxqG2JCnLAZWTBvCGjWxynhqcY4RuDxLPhoro95obzA8xffuopnyUTvRNfW523Ad3beefwDfkqoG8JFj",
  "key17": "5R1WE6URbmY3caco2hxBoyX4axCGAeCbfigPtekjzXMFExegQunwehQ7GUzddfmgs6ceSawv9ozq7qms4H8Ao1vF",
  "key18": "AY9svQ7WBAPEkgym4NBeH852RUc4AX3JqrMPUB7suRVwK9F6bCZQwwZANUf62WyKn88DKAynHJ7XtdUPQAZq96Y",
  "key19": "2fjpgAqeAcUtT5XB3m2jPSoAuGw8CimPyLpRNP5ZGy9PnfSbsn6XAQfBYhznEjiiY3eW6bSmVQE7oCPmgXymbRSV",
  "key20": "2ESzqM7sjTDkSgcWT9mURj4ba1Cvuitw6yZf5oMLeiuVsiyNgcbYuF9Gy8HorfJHmH6GwPL8s5BuxZrxMzkVMkdy",
  "key21": "29AzPeFmDrathgvUDFucqkcfUgWDbVwC4nusGf7eYMKY9HVUouaeeGfktQTMxwNDpZMgdeUCQoyuFig9u6PE8esU",
  "key22": "7Wz7q4oDFYygpUNGpUZgr6AmzDjc2bgdBJNYST68vQJuDVPPUkv9hyRGZ3j3xmyQ28ubQc5pi7GCdLDJ4JWWeDD",
  "key23": "4e43HiVBeKGaFN3T52VggGEj5LAcQoJeQ9iZGBZ5JKnrmToDABEDQiFDkRDtMEb2nPz5VJ1ZdinPoJNJ2eb65PGX",
  "key24": "4RyEtYbadZBDspYQ7hhwtQ4Y3udsZyTDwVZgS7pom2vmnE3PmRz9zwDvY4K26fQqzKKtCzZwPuZQfqBz5sEnqDD5",
  "key25": "Nx6msR8mxLQMwuaYGEnLqQUpw8fPszvMGcuXGykcbDTbfvW4mdpv2eeKAyFEqG9tZP9AiiJvLjwxiNQwtk4ACRx"
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
