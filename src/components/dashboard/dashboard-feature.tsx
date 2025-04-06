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
    "274Eh7CiZ3iz9DRuUA32ssAm1kYSQaxs4BpM6EefykndYJxJDGa5ZsK2qn1aR5tYRVyDfN3pyTzBCe1DAtt29nCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CkZfodU54A93hBCPsBpUyh5XQmyzFS5AKE1p76k799RshHbM1MvvthyGmiNd2VxDqPDPD7BcpQ4dpQZbtb8ZFV4",
  "key1": "2UGFYppqpLXa2E5fh85PZT1Ab316qyVkZjb5GT661s7bpr4q2cNsQWbM7KWSa93AjyqSt5Y2hXMMRuUzhPyjhquK",
  "key2": "4FAc1zrzm2cjqgSQ3hidydNSNi8NnBYNuo64xcAyV8QtS73mEThsC43xceK8zrCnfTaR61Yo3RytgHrUqh6mCcHw",
  "key3": "5mb2pnjkjcTJq3hgVAUgcDgkKxW3YMryo2azkPx2zhfPPz4XymPKbScfoyzSQ7rs8S2FhuQ1JL9ajuMwtmhykrpE",
  "key4": "5eBU1nqZkaC9ykr1iDhU2aj3MuhLkjVr4kRPTXmTFLnUQJf2tkQC99N3PJtuzXsHtX2i6AHocS2kpismAz1ny7nc",
  "key5": "qkgECuv5PopCi5XUvfFWJmVo5ScprybuRofdf1EPSsFqsWvGEsggq1sngHck2Xi61oXsyMwtf48BXUKgxYZ26mo",
  "key6": "32aZ1cpRM6LFjx4tukn5797C3xiebvAjmkS9FKm8CzSuUccrBTZgfYYq7ffLmXxHJCgNAXWH5r142ew69kxkAPNF",
  "key7": "zTA1iXoKiSSWBBqM5yjzFhQVRv7c8cVWUvcYFLhrBUgqY5SZTX5T8134dRQTUzRwEuqyowKf2TKyV2fWJh1yMt9",
  "key8": "w3bAdPYtAQN9rKUK5iHvwkCz2hnZxMqTEcaEGpGxmM1zdp2soMCvBK1DTptsshnPmBt23GPKKCzFKHbCAVN7fK7",
  "key9": "57oS15PRcWZniH2Yh59RoUb1setCQsa6Ho3t8wvNujzuyEbqcNbhW1bkBmmxzTfWNYw1oAUdA7QMr3KrqRFh8nuG",
  "key10": "Wu97HKeEWZTp7yyzeP3fypDzQUPxUjruy48J9YbM1irDrnQz27WA8zApVdMQQzxBQJ6xAECGeZd5LpczuYdS8cC",
  "key11": "24G81SfesKE4cW6bLm8wHTrg411hqRCGviBck7r18KJ12MXrWsj7uxhtuQFjMRM8n9GJ6axDSXQfcytfgkeimMKB",
  "key12": "grwb8ztB1tkRFvVnxg7FTyiPVbtwPYEp6o119bDExUgyP9DQ1tFvc7QtHskWgcC2zHV3bMPun1Pt2A9ZPjXYTrJ",
  "key13": "5M4wk83ck2CScwcwubvZBJWziy14PbW8KiuX9fGY3SZi2fMYBjRJypBkYVwjxcZYndpDgx5Z29aKwFrhTe1PykN4",
  "key14": "2RUiVBEaguYa6XT6goH81BVSBErSH2VUiLvHCa1A3F2VyAXfvRNUkYYMidDApQykA6uoh2dpQSS9Cmfj9Eut9k3p",
  "key15": "Urb8PQbc4mBDxQ2WBsP4byA6wx3JH7hh35hzwdVXQRWeJ68X51nftPCx8N65gy3YtTa7cepUNGScoduAtnxZe3z",
  "key16": "4PfdR1pa7Fi3REKqgoyDT5ojS9WdKGGfaCknePgHwB6RDNWK6qXGjKiXbGS2oeJqVX7QUjvueEb56DuJhTvhDva6",
  "key17": "BCnQ9dArXzi4RYNa2VMU8Sd3KmXqeaCr1QKoTaxZbGtz9m88q46MyqGbpJkBBjR5FKYwjP53Aj9rVw81Ack94ak",
  "key18": "2gHtUvuAJVPJnZQjLmmGEynD73ahjyDPX45PZzQssm3QpRZQJqM23p5ZuXu7MPMhWGrejjXyC44Y1ihwfyh9yDmM",
  "key19": "8oefrYZvAYchoMYuZ1QhWJw18toi5Ukezw1UTqPda78YTWA9ofgQguSYKfaBoqi1hqhMuLtYRXkd8jovP7otHCt",
  "key20": "58BWtnnjjMYEnCuLWM6MGoB8ryU7nBkLbLMb54eTPC2eWeUJpFm4d7LGm9o6Kt7N8up1yyPfvFCvjTPz99mr4gDB",
  "key21": "4FcPzcK1iWKd3XQ9K23nfSH3eNJvQMbPP1J3Zrcdyuz9TeCq1MmzzCLbogphos1uBabCsxujJNdfgYEHQXLoP1qJ",
  "key22": "5EqretE5wc5b5Ew1gKv2iHsF2GQk4pGSsqi4cHqp7BkWA7bbkhNwEiNQ6kayDAyXZb8oNrPXmvuGGhKExERDaWA5",
  "key23": "5NVUYscNVRXeBq8sPPdGQBd372VEFn5ZA5g7ZkFWuodaPpFvvNJ7PCKTsvoDs2KPGTq12EG8ZKM6MmTFrm86DzJJ",
  "key24": "5hRwWS5kqhxA6yDJV6FNtjyYoy56314B5ydhAsTxAguAfuEpyyF2ZjgYcoNJz6rGbghkt3eTPa6pNJyzRiFWVMRX",
  "key25": "5nnVaNmfFHr78WZyrVTDbfZevR4UU7VckQ8ruyDZeLQaRV2opivwqmJmB2LVTrqWKHZqTNBSffDAzA2ANpf9cHte",
  "key26": "4n3S468niCZRLQ1K3qsVL8Qsp7z5Nu6EwfrAwwxDZRh9jFaVaEpwZqyqCkF72V8tdAX4DRoQjpMLLwt2jNwcjaJ3",
  "key27": "2tPR45iBKGKFF4t57XiaSn7i8MxqrA2YusBgfqdzPH8kknASqVFuWxeFSoPANetgDAJgACK8e18kkNjtDpXKrtnY",
  "key28": "fcYuGJZN2a89fkYTkfKqC9caoVEkVVRUbFXf4MMCbH7gGEWLs9acjTkYVuQ7fLbBByZxevuST2yEx4fB8oT2cTc",
  "key29": "5GBGh1uRNGfbTRP3fKSK6t7g56DrrguCuvJcH19RT4dTN7jCMZGMijRUsRmLmkhCBykZEkkxjH2CCc9Y96U41kVX",
  "key30": "gSrd1DDSotNZxYdzbqbAN9qo9fAChaJjWZXD6ua1H1ob1ESzWCTnTchgFUGgijRN351xmZNaSw7tfZ83Zn68RSA",
  "key31": "5a5zSDYuntVnry87aTrYMJEmoDajGdDny2LXxaG6qdhcgtcALdq4GqH9WqcjCpvriKyG1ZQATa6P1KQdL79ZCsH1",
  "key32": "4r1TA1Z5Xq9pEiPARV3SnKAaiFSo1gfM82RX4nPqSSjmnFxybqWZX3LqUp8pzUqnPLfmSf77vkrbXpB8t6yX7FTg",
  "key33": "5DuueJ1AkGxeAajVCJSd13CreH47yUeLJLSm5npeueQXRREwbKt7SmdUs2c6mifkNgYHk5rMJ9bevtSygBi1QWnz"
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
