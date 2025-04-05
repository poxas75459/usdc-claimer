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
    "4tKgk9LKSoq8PLbhp3e1iqETHBQi5SquUs574otAiPiMew9wqu59qy3fbKu3BvzkL8aXnTe8BTn3FBP1aXqN5u4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3grPEBpZzmGsjmxpuxotXJdYF7n3fp4RsWQsZCjs3m6rEXPkj6Qiv1rz9XUB7KsjHYMTv56YUftuteyrJJkpyvDq",
  "key1": "5Path8BZGoPpwMRfj95QXDjEzoa84NaTJDr2oqXiNB6VFeqHTTKtMFG17c7a6NvyQALbdX86XpjXpVdPb17cCYp3",
  "key2": "2QBb5KDMm6eNMJf4ztKxC3CoMrsH34zLQccmineoKs2HBzWBxxhryNwoubYwfkUUg6H4yujnHWddBff4HPwHrxB2",
  "key3": "2Bius9sbR3SwSHH1Cg6WiViwNdwvLdXht2yxg79ojWzFcjuZSNvysZKbmuZTFZs37zoDTR4r6Xv1y9tcvDvaAVBh",
  "key4": "5BPXvPc7Fd5W2P1KZw8PZnezZyqrdkU1o4KQJodqyGPyREg5taHJTF16eWtY97LrDrNmjZEXT65R4Xk4vYyF9ctw",
  "key5": "3oogK3DaD4DXce1BHGkuL3Pm74BoJUoafJDEFDworza3k2gLVm32CFqzNr6sGGszDtHiQGq6iFVXTwt5EfHiLLPs",
  "key6": "4vEawnnXudsKPk9VNJiGKfpsoPScFxV1Rne6FKdRYjYJ9XyjtuZcziW2CJEfZPahEVv9sK72fXQuFv826Qke4NbH",
  "key7": "3p5bt7WEf7rWRrAvSFGBU13gghBaVG8DANvhug9yvoZWQMuDVGj4HwByvbf4Nm7i7stkDmybyMxUM3QQiBbccwGU",
  "key8": "f2jx8wNwu3FHsn9C5Dm4xnSoocbdse1ibaYpYdJggXbj1LLNUPqJ6CXj6V7MXRH1DANTEqYy7mETyDAp6ufDPGX",
  "key9": "4URQVFmKkZFoPhbtozDiSJGsfspo5k6MAwfiMnKYNPGSXZ7LPhBzfR7Pw1Re8xT4UU4hY3hJ4yMhpt9cd8oop1Er",
  "key10": "k6Drcd1P2csbEwfUw5fnXNcxEo8VnFSejYtBKkGnX3NJdcopxh3apMYXKyJXTS5AAj493wpFkJ4fkCTR4zE93wh",
  "key11": "3W3T9Y7GrGQr9BXRhmkwPJuRkvNpGZYjEos7SQzCEbpgh25K1LMPu7WdRNr2e2cJZA5DUbsNgi8uTet68kPkkY7a",
  "key12": "4fE44CwP2NsNF8Y7qXr6iCshoMAh5KQPGWHeaX3Q7xoeijvK38eMaDK24Qq6z9qCqviN9JsPjjkzgtCqLV6HzuqB",
  "key13": "5C342Z6NBnmuGrNyxwhS3Bw5EBf7WfLbykLkFwhHRQYsEJP5Aw3gpukwFNCJ4R8k6ByXeGTa5Y6tMjnY63MULv46",
  "key14": "2H3am7t2FrLhUrqNHswUEm93ZgzR3VCrCNtnp23gZXZyHdJoftocAAKaAmThSfLH4wydcZErcN614bDyS37qJ8jH",
  "key15": "7UbtA2x3DNCK5wnhMj4FCqP5wv3MkHqjsS9yRtVVXKRckwZ3gLYQpzKDVnEjrzDN2PmZguawmXhdEbpcZQBp54t",
  "key16": "3HqjqsoKwNiCxUkag7KqjYBmi1znnZX4LgmP7Xq4WpmUqwaxDBr8sNv4i3sVLsxxHKQFfRox4HQSaqqVdRUevUfF",
  "key17": "3zX5X1ohiqpKsvs6ptjytTD2X1KGh7jsfSzDLAPnaeoPfGgUvhCigaijvjTMd5ckQKMsg1szXbSAnbYJ54q4T9wN",
  "key18": "2q9ugyPqS4K2wYnHQQLh7pFrTJxz75U46HVFbZAwd9e861Pde6bpwgPG6uDr5KBQCG74mfdqfjXprfbLFfqN2HWw",
  "key19": "2g75ypHvr6KXYwUPEQSFZUpuqtUiNTWiwVrKYqC9LDeTCsYbYoKKxZ34rnncyvN6BjJuR7q6Z8jnywNuqvUGfcyb",
  "key20": "52oS2M3vpiHv8xJEazQCUWtL58siR452L1q3nKFCRNCVwxF5wwDue4MknCXxGmUUvXCbTFyzaDyCAjXD1YZRwR7j",
  "key21": "2entDbFohoqp98Qczmq8acyToASSvSnx1K66xvmTAg4wJEsiMonBnZV9cs1mKQ76cHShrqoRZ7UDTExvkreJvdPb",
  "key22": "5NuZtiDJjaJw3Jr6p1MFTUvCRzqpadYqoH51Um7xerRrqdvgAtt3hQFdhcjh8xQTkqpuuxYMKtkrsdzN53JCKHNW",
  "key23": "4Xd9YEkJDXu683SFDPvGm3Cq6pptrmYvb5dKJ8e6caKmRFdJBKTpsGV4RihYukrZSKvHALnmXiwB7GiFuFiTobJC",
  "key24": "5aeF5bYLQfSSN1XQTh1kY4HiNAyF9kfTdK4VpVW2Bojf7RJUZfV65bVtaTN9R3WH8sKXexmw1QyeUXANirS5tDi7",
  "key25": "2nFvLTiHdW5yM58QBSYgN4W31mwFLGVZcgsMyrxw9EfqigqawKbDHQZP1JTdzUibCb9TR5YPd6qdPcvNyuZdyGRs",
  "key26": "62uo1HCC3grcRi8bfDcXQAPCNB6sFTrDaR3YDJ2gms7PBZz7jm9SSd4NkhTeeVSeSX1dq1zJhWNxrLQaWycKB9uZ",
  "key27": "5N3PLeHDdrQH4jn52aGYtsCXmg8ZkhTRk1RFLz58hT5q6wHrrYqdQE3y3b3zdcm7aeNoHq5B8StULZ5JZ22ZVPHs"
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
