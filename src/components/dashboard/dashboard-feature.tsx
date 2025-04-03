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
    "2SDBttmFv9BwcAU9ukyb7h4sY2RJGeAA52UkbPBrX7scfCW1DS5FDVA6ViakNzsxnpGwXvtRWSmNdZiSCC6DfRMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bujyyF9h4xi5bNSPfLgjhUdjRP693QnuYR8mw8squ1bJePeiAZiNYVk2gDDt2UgedesbxqiwSZKoUgakf25R2n3",
  "key1": "3HuNbbWWBfX81FR6RP73XBsGwvBQJ5T2Saxet6jickHBKEtrangDrVVDj2agPrtUwGXH482oJaZjuQWnZeA9BkDz",
  "key2": "5e9MxuJvWVwHzU7vfUgUyjs1QCRNZHz4fyBUxYP93b8fQoAV1csjW6AE94u1kepwp8rneK5yfBZJoa2ybqNrN2QR",
  "key3": "3smXtuaGe9fwvpb4CFB6zqXN2v4jBRw4ahgVNXJXJxepC5f1zB8h4yCzGWTML6eEVa5pVhukEy4YCrUrpyDw4LL3",
  "key4": "7GHZhGg8tF6J1vLvXbeLGd1qEqZt3ZVSTqvgWvmWxJ3S77PhPRgSKcK7Uo7c3cmo6s4BMegBFWU9TnkKXmd7SX9",
  "key5": "4638EJTwBXJ83mzAAko83sdEfEdnW38BBo17qhfPjCatA1zxA6gXzNJe4JkzmLxJUMSZjxiV8DW7M9XEASBQMFc",
  "key6": "yuvrHCjTaoVqkaiTgpdVa1rGJ11hLddDt9c6jLAkSseeLTbiJhNKTxiFwS9NbPj3jHS4c6Dx7tFFWeZEp6YTBSg",
  "key7": "5xkU4x9q3J71YUiwGvwfLr8jxJGTY36W7Td8LCRzamfZJaFZc1GgadF9BH77VmZpJdDL3geWPfb1tB8cjmmhVH1d",
  "key8": "33rXihqfX9NLSHp1GEsXjkj85yKCrWeuHkUgppFUGFSrCJcL2rvnzEZAvM9cHkf1nG7mwSxEabjiSET4qHZJatey",
  "key9": "3r8MoRVma8Spzg9o55UoXQ4iRLExyFdo5Q9V5FAiEn4CoiZpPLhT1oBkFcc56mXNLEZF8aiSLYYNHnh5t3wAR76H",
  "key10": "4QwJe5fsrgLrzKebzKQkRCuznfAg7zuubACDdWgGBp944oUfHQ9JeSbwfzxxp2ukFrCxkusKsFLH1uwaQgzZi21w",
  "key11": "2koubuASDaRSzWPaN91rTKQzN66kbr3tbYMEDVEUukjKxcFndGAf9cW6ReWHcmuKfWC9xgsn4m3nZP5WKD6ghVHe",
  "key12": "3GRwUPJUP1Qq5id4M69XYUuDJMyvVCComB2TsrLFEDQk2cmjDZtYkFCQahVVKQuWQgVjadTd1CfYv5BjBHoihnj4",
  "key13": "3i4gMNwEY143vqaqne9pfFsaUyH4mZziPkiRKwwg9pG7xNETK3LHRFzMjjR6txgfUmAEzsCksoA6NA7F4rTcQF7N",
  "key14": "gR4fCN2LsHrKSaKjN42fAGpit8JcKkU1vepi9nPntTBhehqng1PvVZqfdL7TH9ua6v49NQwUFLUZM1nT1G3deBt",
  "key15": "4fHGXJJZWsf2sLY6zJuF6y9ucp4zcvzgeycCsHwcLqXcT8WncHTViPCJm63ExTFzvy24sDUqfhz6EpsDrBVzoghU",
  "key16": "4b7Bhc5FSueFfvesx9bzc6tUiGuWtZ1VHc24GoZ3oERUJrVxweimWwvE1Cgs1EUDm1n4CsaUy4UMZ5EruhDA4x6v",
  "key17": "5EQ4Sn2Ct9rriwrYdTRWPVDPGgdS9wKx8Tq4zpsJkB2WkKZVtN39aHZTHB5mPcNVdGkz14k9oF5QgvH8ZG6LfCzn",
  "key18": "qjcdkGKePuGpJC2rBzj9uY4riywq8PJuu96jTHMLsUvmcZAced2NUCNVSRRDEHTraDCUoiJFYMnUX1G96wnEhP8",
  "key19": "jNQkDs1C8YjrKJy8feW6yw8aCDLFNFcAXF8LdM18c5AaSRhaJ6QdghzSxZemgpDSQ4o523UojCKQmBYGToTJJv4",
  "key20": "pApQgxat61jXxCS4vs6msyPdiM51pYo1YAwYPY7uW7tKeDDCVeddqCo8gz9A5AwwNVMJko8qEMMyuKhZctvcusB",
  "key21": "4eqpxu1kJPULxL6EuDzxf3P8PXnhJvwarRnXeET3Pc55EgkQnhfp9jdkQqistwPsNeuknRdRsycr7MLeMn78DmoE",
  "key22": "2gNfsVmoznALTta4GFoQNsf2xvQc8qYg1s1yh9ZsAb31eDZaANptTP4mPgUpH27V7XwKFifemDsXkGwDmuom39JY",
  "key23": "3n9HPdDuhsf3kLDxMpshBUVquyDjNoR58fFHzK2UUHXxZ5msX5YebjRiwauQkPAUFYBYXMFVGXiZanWYHhgeh1GZ",
  "key24": "4r2cfjCjTcuNrQu6yAuwL5EvUXPrHxtdwJmHg5TxFjvvR2BerQpLrw865ooDjqkq6tk8ojDSSfDgycTPCFJfUWre",
  "key25": "2mun6aACMvGbKamqACAbCEdewKMNtGz378xtEduXGP2kVzvdJ3osF6D7vsQ72B5W8yBpCqMNbrN8irHfQgUb1XLx",
  "key26": "8aXkpyUzSoRviA8VRurYE7zX9n5nsKfe7MvHV1pdFFkoTzvcGYRutKbFJki3kRhXxUmxw8EHpkCbzYV7NXrU8dC",
  "key27": "YycuPes8WNxha4DnqTRNAaWscfaHCkn8LJUAVEPuiCEqEG24X3MdPDLVj16Gpw3V3WTVRrEiY5T2XNaiRW498qT",
  "key28": "678Tyfi1XiCMYtEwDGryCX9AfKZ2EMCH7mdMu3sNBvpdBcsYd3NPJmqn9pRtxzosevm66h26DxFZb2i1A4cmL9xR",
  "key29": "3witho9EyW9w1p253cwuP3u57jC2qRjzGqKY8pvJhtewTuTcW8DvEcRcBFg18hkkk624opTW7DDgnKRFAoQibtSp",
  "key30": "3ix4GNVXMG2SQvU85LgSnW5t4TWzjHq3khghyzxQiAVJcK8TRvpy3W2PPmnX1hwaj8Kqc1EhE6mnEu69wKNFKfQA",
  "key31": "3JypTwUJG2mPb3Pi35trykrgDeV5ByicrAVkBrUA6CC63MZXy5gaLanoqeMoqCajCC7X15JXvMXorpZeQ1ckjX7j",
  "key32": "5hRJZ4U2M5mBLwhc38ebczx4EpADYo2EtYXzhpFppyGKUxGLVsffvWCyGSZ7oaw9jRGGyWeD5tB4E7RAdGvU1Xs2"
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
