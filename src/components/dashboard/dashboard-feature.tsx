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
    "2Gum9mvDbv92wGFMSP6PFZ2vNHwpmXDqQC2wuyB5CU2woJyEXJPHg66mPnmujM8K5tT3MuY5eNQYnDJ66N2oQhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kWmTRt6YoKswgxWu598DdH5Aa7qKjikCMKKytV5Ku9MK1uLXi4igwuRGZDgaF6sCnMqBZ2wxaCMJVuYasgd8akV",
  "key1": "Z9QwjKcE96Emphpf5Rp1uCGK7nq6PY2EkCHjCPHMMNG6tZHQoaLaQDDVfmBpiWEnWtiWrdzTGgmgGfLpWnfcXrJ",
  "key2": "5MFcTupWsx2LVrykfa1gsrQxFX9bqexiBHeK586pB2vpKeefF7WysgBL1JnpEbo8rrxZTzUnAXhBfzHCrNvRKU1P",
  "key3": "5djNd1tWo5xRt29SqnBxkDtqZNYM3jUmvp34bvBFP25LJ1hVAypxaSArnWSrFjYJmHvpjYmMxH5Ex7kPUwZRLpfW",
  "key4": "4LvUaZkUqcJ96nYPiRvz1Xj2yVnjsLTQMCbnXhQsCKNkYSUiq1gRpcA8eGTHcwcXqWjQ9nHNdjLcptETcdjCziy1",
  "key5": "5FPXqsCXNr2DkivxiLWZWyLxsz3yc9nTSbLV59C1LJojnDw59CtL5ggBWNxA1sbuZUkt1xw8XCtnoXQHzn3ZyYE",
  "key6": "3S5HxUGfdko6Rc4pwo8DQEUfAruCym4khYhrsCnzJPCPrL5r6bCLotwJ7ywFV6XZj23nvYkyaA4p8KcHTJSa26uR",
  "key7": "54cLTtFEgfG7CniKgbZJyiw4ysjSMNZKdexRswB1TNKVfzfmPTH9AEmymFy8PQPiYhgWPnzk7M2sV3gxGYtqUaJ2",
  "key8": "3BDU4xe6qQWCDF2EFUZahCgxzj9teDVrKE7D5jDvuth4e3R5zdbusYyujqScGMYaLsZDyosf7EEvX2DqWLgtvkca",
  "key9": "3SDYV7iECspAHKhJZ22SaQMTrn1Ugj69kHPPE93hSAiPixFVbLzDRPmfhEnovnxfMb2g9e33st4HBvCfU6aZ1HEj",
  "key10": "65TURspGBDXGo1jCUVpKfyZo6UPEpwKhMWQNzTkjLC8t5SYty2LD8C2nVZbCwBFpVvhWce6GJctuEeUBFUCXroPf",
  "key11": "3xJyec4RxXEKxUfaeHRyiZh77LfbW2W5pAcUqaHmjWaCcGgzZFdZLUFM7zLSwcrCBE6BjCbAvxBPL7wcKniAEZPT",
  "key12": "3jc43hS9o651KFyAYqMYYrgcJNQqGzp7U2eNPaYV8h3T7N1qpKXVrBhEznWEutXkB6sTnuUHTQZYtgwtN6uVb3cm",
  "key13": "3fHsb1tBwmG8DtpRLSu3whnotMdRC2hsWN7qVmFZ4bVcAVin4C1gUCddzH9EbJEvasHTam9RZoAra1bY6VZ3ShPM",
  "key14": "B9r8UAx6NhxdAmGyd6ubki7xjDu1b7L5xcK2CE1YEXnHD6MBJNKEQ1D8u1TJiQZHynJksrzbHGDnkxnsQVXCz3H",
  "key15": "5rrB1ChFefn8ymqNuuZwxLbyAtGDvkSihKfPTqthJGf1hn1N8bG5ohubSF7Fk146ZmdG8qve6anytwSXC89DkGkz",
  "key16": "3etkZVdcz2Cnf8s9z8HM4fqRzs69gQ3e1aX2vCZt8udcv3amphCAZfot1CGP4KzQVSwrAhRDGq99XqWc1ksvzSFC",
  "key17": "2do4c8KwnTNmRVcfY9t2efVw4vKXFpFchGW2kDqqQrg2uPP3m9ifjcsX7PAvRmhAZmkiZWU66affPVPQjNKWR9u8",
  "key18": "5LZYngGzjud6pGv965mknnb5Z2h5vsKHy2Nph98pWcUYVLQjfPbYuxttBErzM4yResrBnJp1PLzUn6UEMqtRqSin",
  "key19": "WcujjNcph9WqBwRKmTgDjR4Eg3Nx8zC7T3kiXbwrtx1oumode1Eu5nnnakPgAGCVtSk6x2zKKoAYPrRj7guGQA2",
  "key20": "5SVpVjMZ29LtmMxeeNwRdqZuqiZDXxXnKhE5rMomf3rxrc3rbCgXxTHHs9kHfffcHkKWpaf3o8UyMTPux5hWSt9m",
  "key21": "VtUuyzJtRDVGye4hxJ3q3AkbNUHqMT5BcfpZbCzJHixcbsfxxKx5dZZaqjZsZLXeqQcwi7yTkwhEH8GfqHDh52a",
  "key22": "4VKpmnUPNEsQjoutz5pWuhenzuJNfhnf2WWiiPz7JvwRxHDUrLPXTZQqQpraxquFYUzrcEnDhjZmJckbYek9Xky9",
  "key23": "XXEYX98Nxxn8iZan5qrgh9dWnpZ6Mrec34uVuCNvQCuP4uJmqdERRWgLYXwviXDCvnGoFVnvf23o9S8oTqtPpSo",
  "key24": "4EiSxfBUx8ccYN5DkMgh6umnt2RhfwswJfbxFpz2PfqQWczpbALvg3AuQdChWCVymQAhVg9unpLNp5fYU7R5LjxN",
  "key25": "TEWiFroPc5A2ydfqzYi6ZzEkjhZ6RyYLVUeFX26XSWqninPB6hENBkeFJP5WiY4MqDEMdDuNFL2c1M6YUz9nhZr"
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
