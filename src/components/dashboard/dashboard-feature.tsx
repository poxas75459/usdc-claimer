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
    "2SwRmi8sVayxHBgLjmukndVYnjW2YDiMMqiM7DNKARhXdmbQnkd32b1fcfvKum2SLzRFNn2deumfpWP5Y9SZmNDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PUe7xvDyG2YwnRFy6HiYqcPGxYmRsL1EeV8yXR5i56D78tbZDdu5y163uGsg7oGAYHTv1U8h6bg7g2Rx47k4G5W",
  "key1": "4hSEezkwb973sJwpiCYRtYgCZm2KgG6J8VUN5AQtGfsiLLAxA1fXysqQVnc2GoRP6H8dt4kbdKwsdC7wQ3NxvDP2",
  "key2": "2seuLHW7RdYSdLJWTuvjsJUwQ8WCiSCHaVsLUfnMvHvSn5JbewzJL4gHmpZihuWwDqENt2DYSYcv24jfw2VfDSuE",
  "key3": "2iWRcUc8jrD5Y2EViJKcHJPkSyw6NdKauvAgHbzsRSKVxMCZ6MeL5gKEqasWuvHLsoCtSgQPZctz8TYB2ZrqQcDi",
  "key4": "2M6m5nWBqgpPM8nX74DSooVk5Mbyo7trvVSAuRUTy6mc5YdEyxx4tdAW5cdykQXaZfCu7kmpqEBMHKPzd4MVNZ7s",
  "key5": "55x4vDmec3pFSGbkwqsP3AziWMHgxkWHhmRb3yPSnrLYkxYjMvZizGhpfsSNQwHdi5XkQLcxu5oB16hiS9jv3wM",
  "key6": "29TokLo89A3w9iRWkSguZsYBJVN4NPi9swMZ4PBBAjhDgUkugfvbNwwfU7o1BXdXWbPh65E6wEkvNqvBu5W78jkN",
  "key7": "5xqyu7wbQidfFc3Fzey8rKkyXeRM1sPBY1UAinfyoHNaLrUAry8TZeerYZWMoardc17gL2vhKyc82E8Y2tShDcWB",
  "key8": "2zZv7N15JKcFfXxz2pHavyHZ22fqbi9FQfBSXxUBBGcMMB25WVvYbgKAxLePE6KPraKSacoHEv6gTGbUfUdDq5Q5",
  "key9": "4p8oPyhGX56UunfzS4vWm6hQo2YKJyGzqjy27z6je9XPRvPb2XPqr6ymw53ZFcTueMSoNAeo4ArJcRojaKMNsU4U",
  "key10": "4cAUSWXqe893kEfhigTXQTTEhHXS5KMvZTWLWxsEUGqEhv2kQBDRruoVxpJvux2TgAvwLAqW12yCYWVoEh4Kv1E6",
  "key11": "47SC639BJmGoZhNmEEPs5yuWFNzW4CvxfoVAfdoppi68vg7eBEouVLxEnzTcDWSiDooW4qftYTo4PipB2rD88wr2",
  "key12": "HXwJKtpp8SnmiRZwyDHNurzVqu9gARoQfUHLF4DFJFGJGgUPExLPQVHCoD1JxWPU5wx8VDDpRFoL1XdMk5PGmKq",
  "key13": "wbxGEKtHkoNpKBHti6Hz1qbHw7T75korwwayx1bXejoTXW8k7tNsXjpWupGqpz8AwqBhY7SQgrvcFr26c8MRv2z",
  "key14": "w8sgL4JL5Mq6A2TZStgsezGzt3WFX5LpMhyJchhFQzxfYgamz8EZypDbqYjrUbgugyJhkvy6aDnW2DZ2xW5BmpZ",
  "key15": "4Dyor28fzNdLMP6n1imNagJELgnQZwVuvm8xPNa3qRVbD4dggzoyQ123mj7chitLCfvzHP982i973gwUzvax1UBX",
  "key16": "w7VVyZ9WKWYqcmSj7z3H8vcVPwr53Xk52EJmEJMFWyWpbm5wQYFQ2q1u75d9nH8Y9Y3djPW6XpMvzGr3fpq4bfe",
  "key17": "r19bktvQQHPhdxxZtjw4EVJq4AoM34dz5rQgqzqXxvS2kfxUbuVub7Dp5J1qiQCcULmZLQ39UvZmCYkzypeUJXn",
  "key18": "2spSkUKDHcLY86h2RZCjgE9EcBRZikFRJEw2bCSHnaAo76iWNsTCircggYdbtGqMew558M8oqsFatpMwUv4utPS7",
  "key19": "p31ad7aM1FjiETm5ciBpxP44DFqG5pVcdktWKjLxZ6EEYt1UUcVx6fBdV2zWSSxu3Veieo7zKE6y8tjpqgJAU4L",
  "key20": "2nw9HZGGDgDHqDAMfVQG5YEEhtUrd2e72baM87yh7fiRs6S2FhTYmF6cFGET1PUXEobd8j27D8eokZyQcYiU2k79",
  "key21": "4L5zAJpVgj5ucBMZv2eKXsZmU86bSYNgieujHmrk23Wk8YTV1wQtxNrbuVEAcH2nLpHECwnf2ubKqp7vWw1obVu",
  "key22": "CXgU651s9Yf46fskFJCEg2AYbAnURCkZoX28UsXh3dS7AfJs9PWRtGUwbrkfUvxRph8K5aD6dPhvRLjzdjboPuj",
  "key23": "xDddZgkqpM1ddawSw7w7rrMuvxUCf7ipqJHXEwXmnpseq9dxNePTKsn4W8njQ6Bha6bgCSaSo5txUQ78wNS8MgJ",
  "key24": "9DTJycBhWqsoruPP7H4RYN5SXWo6A8Nq26jQ3USrr92NQANwzYtcYPCLGWuT8ZnMXq8ZBTsdwPLwP17m5KPNwQQ",
  "key25": "553s1USA8kaqHfS5HASAJ9JKHeDZA15aQSeFnSBCX1tkpg4vTtLEYTH7maBdwFdyr5oiVU3RNVT5BPDb9LqRkYyd",
  "key26": "4pofFxeQ3L61RTtMYvk6echRrqfhwa4T9dSsSDJ3xVAdMTGDXemr9oQUAvk1H1BJ8kVPzpusmDHbXirPZzrKhMWG",
  "key27": "4JQ7AZmSRk2jHxfFiWSt9PvJo3VwhL2FD6tphJ721opDEm87vMA6Ze8PVEq2JexihARuXvdDf5D96inNEY7hWtes",
  "key28": "4q41oykngz7H3rewNNhSwM6BkApC2AsuFyrWvBToUrZph2oasHEPPSrXCjifvEPn33WTqGzBqJPLZGPyZboWMaug",
  "key29": "3n2DXJisw2CV1AjZYBi4chAHQmhh5Dbsu8vkzucV7EcFoGYCHnMg2KzxbMYMYHKKp2NfJRUSDiZQRTDYayytqs84",
  "key30": "4muKMSk3iCbNseDsvDbqA5G246sGs9ne9zc3ExkT6vYYtuBPqgtTDrhHgL4ziUCfSaYfJiEWVZgxpGFcGRXbmbqF",
  "key31": "25SHigT9xeKZfzMiNFs9TJQ3pbFDo1n7k8gZRrH5yr68fwJmQeUhdF6viMwwJ1VPuB1zDuPkv51XNgBUBzpedzyE",
  "key32": "2nVaZ2k6Pk2tEP9A7wkjxfVeoKptwHztSkszdBoM68njASQWjg7KAUki3Q5WiV92LJmRP2yNteJ8xCaYnrjJFV4K",
  "key33": "45KjpPatg34AuSDdJM1ZCyk3qd8Zu1N5aXaC8JhYsfrzT5CSKyD1DMty8wJgNtHQuR9Jb4VSW6dEsRRKUHeCHrYQ",
  "key34": "4qLiut7ZHbCsxEMeByoiaCv3DDmC8Mon1W8xwJtPhkDh4movk8XoY8BvWjcGcJcR37Vuy4fJQv62PPwUCFphSUvw"
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
