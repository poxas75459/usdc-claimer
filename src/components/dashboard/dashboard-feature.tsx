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
    "4GbFkezPYSwJphhSM62edFKx2PSeLRxCkmYeBamHAiVLTKTFnm6M48CsfuqNYGSpp39a1MbN1jcYYBEDnFZaCmpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31uDM3TS4DB2Xpz3AiRwiJksqpdLFk4QVUMGsEHQdX4wFAsCcNwmrfTHqcZ8TWLa2MHQivEULkxQmkiq1shYgfcd",
  "key1": "3sXcEWLCEVqKHZs149YfEGcpbywVSn1GpNy2ECaacsvKabhRAK9Jvjz1mGqSeA2xS3cnvhXD1gdzKdXsUEY6cNaG",
  "key2": "2k7XTBmpc5LvoRGF8vA7YMcWfXKKJnisuUDPq37sfBfhF74fKkdNMd1x2QNvUFWeHQNYV1SQxucGw1VPt6q3UXEz",
  "key3": "2CV8NT5HuQBfpXuAgoDDAWpy9aWY39yyVWd4GugvWDdnEBsx6Z7j46LZZsAxif8NTdC8qKgp6NoAtyfpnDxH5h1r",
  "key4": "2pMrWdSSKkZthR5RDX9Q8eDB2dw1wu9CjxWQYSfmTppRh6w1DsCpeTN2H3f3h8gTeg4z2JjZDXD3yWWCAPh4Zsbe",
  "key5": "4ErMq2FMAqxL1ZEj7pxCRHErigPThnsNqNiJRH3gbgQFNhbEZqU6R2A81qRmn56NMVqk4uc2NZKy2bWpo7sWuJ7W",
  "key6": "56pvitC6sAFvJrR6gEcqRStG6XKSFz6kDMZDbtt9jdBsPGvkhgqSLp7pJUQFDLmijo9K8U95rQ5p1MSh3hY1Npq3",
  "key7": "4b3aj8Bv3aqhJ3Hy2HSErovfnLrx5nTmJHV5n6PrP9gdLF7AgfXHDZXdVKUuFwDrbPZ5Y7NmEiEY7eDdTTQoXhJj",
  "key8": "38B3nxors9BRzJvNhkMQ1rg4TdMwo4VLeX7B7xaKbteNArX1WyrsoD8rjPY5A4yq1Eikgk575bmLKQiBFDJj6Hq3",
  "key9": "3VMqs6MWPh2hrfjVA5Cf5eTCuKLREoytwEdKivtXYbTtJv9a7zj322CLQyZiiY29du28pifMgHBKxJoVGJMzTKtu",
  "key10": "5WPAyW3KCzhoj7WZJ4zUC2LXR57PwybohK78Ei4eB5Tyt23StzQL9xY8Pz7v7kcj6A1udJxYfrRTDT6m67qbc8Am",
  "key11": "QdBthWYK9sBV5Btd1RGm6JqyuKcwQkhYLUYP4vJwGN2tkySCtbRCpuW9mHwkkJQ93TdoJLfi3FBoy9MvDWnKobr",
  "key12": "PXGSVNPxvac6gJnGzdYRwH3veJttpYpZ8HFS6TDrHYqs4QTmeVkBoktKsZyG3qX9abwDvLUCJPRcusV6ZgFyRQG",
  "key13": "1weurEo639kzPNZURTgc5px9xmRX7HxLvT5xZEXBX28x4Z3XnZxZKu6uHCUKxTi2qT741Ni7N2As3JpjYcX4TaJ",
  "key14": "dcC29pYKirR3zw7wTzELRCCYVykcdox9ZB4VP6oUQKSHEtKmrVSnnLycrw6rbTQV1Bh3x1GzgAmnjp3WRdZRsww",
  "key15": "4j3Qc1jqQPLr59VW1DA2UHUTMVgn45R5cVRGNiUpmHpyipJXCCSxya2SYmaLVVhrQN2nekYtM2fU5WSLEp5Fbc9r",
  "key16": "5PuCgySKeUpWfDGX5294kHKRQK11XbJU8LZCFio9LtN2EazNpPs2L6VVEshfg7yJvEuCVMB6e2Jrwtdssqdmyhev",
  "key17": "5VzoJTCe4dWSKqzVpPoxZoiGLdPxLjg15Cxbg3MhT17SGz5xj4om5MQuUPuvs8czoNjmtuUhfzCXjZ9qTLNbVhJW",
  "key18": "5zaHanbN2TsgHJogZY6YZoTs78Tqqrfmtde81DaSeykpZDF2sw7LdBoxExYEEojY7Uv61LAuzkvZgfqi9ryjTPnM",
  "key19": "4unQv3ERQ5t9TGGgmYLv2TVrEBLEapCbZgDkdyWm1T9Jop6wyjmayfBiaLBNc6CQZvjmQKPem18TWTP9K6v9qv1K",
  "key20": "nqAidM5nBJK4UMuQPNmH1wxS8L7zG1CB2aBiFVgftaEjL26H95ppfWbj3shy2GWfnY4baEvza3RWCLhfSdjqN6H",
  "key21": "2PE2A1BQ6bxArq7Xm3qshCHwFcrAhHHatgmXhHngCrEmQPZKorW525WKaGTVKQumyGFFgauMzJwym4Jt45tJhSxb",
  "key22": "2GwFw4sxusWYvR6UZK7TarK2Snn1mNaZ95mqYmcbwKksmVGG9ZvXcYQ7Mwq5qz6zkSHYCJ8EyUpx7EMfFYHbuRrP",
  "key23": "2b1sBMtbTQb8rrjzkYNexsiacXNweAWoFc83RS7kqau2TKmtGjg99BKpzTaUNcjcjj6AUPp44husoUw7RjMyHUVw",
  "key24": "2TRZHALP6LcGH6UVknwKGwzqVxnZiMh6YJPuzfVc2S2QTkFybqJWX6ghZfLhBSkhJcaCwXi5yiaC9TFbUtzEAcao",
  "key25": "4vpkpMXqJtn9WxD35uBssm1xdB2beQhUSXdhpfwU1zmrPU2GodbXJ7ZnXxPBKDLnKnc1Pb38TaSDJNkfZXVVjDvf",
  "key26": "3UiiZt3GqgpWEjnt83X57JD9QugdpemDt6wPWcrvLhpcApQadtpHhha3MbKuzhahrLvejzrjogKZ3hNhCpfdVpGd",
  "key27": "2FFVM1enKnqF2nQ3Br8137Kkrs5Uu9sPJ216u3D24oAeEwRdrrRYgYYUGsDqrqF2JRS2qbNM1zTLfgAGBqUXxVL",
  "key28": "RCyphuhnan42dKqFDL6oMzF8LC6iPpLza3HXA2qw4L4AtLXtMFUvDLDiEe3xDZCqhpoj9BVwSNd6THUHihK98pX",
  "key29": "4oA4musTV1CeZkebV1L4Bf8wgVxiqEm47vHksPKnGJYEm6nNWDsYMmWwDSaqW9BJi56evYr6gFvcQMPqRCVrswuK",
  "key30": "5D5YyUz1k5CbgGdjes58iQqgEahjnpPQag5Y2EKTZcpVFn8y785Agg6Mtvn8MK1cAmMYQo9A1yfbMUbZcERCfrQQ",
  "key31": "3SssCY4wxdhugEQqfw79A5DqVoMEaLM1cTiLZg7nveyJbZpjkRrPxyFePFPhmvPRNDmZ7dRjGmjNSyAk9XJQni4p",
  "key32": "3pH71JEiA1NB4UCTpY1CfY5faNg9eqpzd8EYq9Dk54Eq4vMFHEb18E5Pii3nsfchS9vrf5KZzcpPzscUfgNs6RVb",
  "key33": "2hk6uFvCSy4nghsevawyf3Wwd6jVGPWPTC1H3GyteWYzLWCSVKVsjjhqfD1nRdYgbgsb2LEg7gLDY8XmkPCzhP2e",
  "key34": "3dHcPN6HvYafXwHQMGxM491X3FRD1vq69JVfNu253ez3z943ZHpRse1E2ESKrpVfWzNkR4ZrsXBDtg4egB8xZNnv",
  "key35": "3iNXTAqSiyRNJRjjosoF8jT49s5QHfP8pkEFtz7AC2AX2DgVQnVFoVZNNWfoeMxXz1p1GJNdy8HyuJRBMcoGv37U",
  "key36": "2RpDsSHYPiKK6FoHiyCGCUD4bNr5RdhGBkSJJBehZJzoiugTsjdCWZB1YENgpbmJsnvwR6P5HZjjQx8aHLXAMdP6",
  "key37": "3QyLLXDfo9q96fqFtBMzQH1mjdrVwNhrUuY4cgnsnj9k5cvZfDWqVCkSgwY1dmWvMh37CDjAYqpJ2BkSUVC7DBuy",
  "key38": "3zoHN6FNXoXctis8KCHsKmonKq5p9GMmPyHAPbSYmDLHxfBMeird7AJ6GsvQ3XQMtzYQGhd1B7fPVDy1ZGEvgKc1",
  "key39": "5egLxkanyKJd515L4cDu7zJY76GDNV5pcKhtq1VVjiMYqQFVudaV8sHbgg33LdWLuYmirg5z1c9T3YLxkafEz5YU",
  "key40": "4mRJZ2wHKhGbA9RjyCkZ9tVYskuexRQxUqhCxFnPnFvGuWodYBa2gnjo2jbv8kHbeyd1PqEMbwFWDoPb4KBQN5EB"
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
