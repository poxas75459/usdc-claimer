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
    "4zwMkgWvzNrmKqe9691qVMizmaM6114PoAUMEbGhXpWzLDmVmXbf5aAAbm2ms5nSp1rXL3B52SjwUQSag5zgnDfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2boxe85367M7pCgdtDRruUmSpY1M5Y735J6k13jaBQoLPXciCg4fmoRgMhMXc1bLpVVFZLUqzkr6N1s4an2h7HVU",
  "key1": "3T6k8KVfDAzSzpqeWHntkS4gADUhAvvUt8ccx4SqMRRQzWaamsdjNwYKdfPJ3fko3gBbHqbEnNtwfY2jqbQQFiFm",
  "key2": "3hqPeW7MrQ7wFd2PKA6TUnjvom2Xicmnr3zuffTsWbsy7Qu6shRjYQZXYvtDB1NEos1wWxiETQmgCYJC8bG8yjM1",
  "key3": "4TC8zofFqivKUyC8K5efBHskWciYXU2Zx69vc2CZ5Jvyy9d8oMT1MYsdBEPLsbCnt4A1gNoQW1tqJ5Gzo6a3ncfs",
  "key4": "22k1RBV7yytuxb8MFSEoYrc9hAtdPmRJSphMYLVpuv1Ua3vB6BsMyYqpky6bkM3soK3QADz1iLbsVnRuQCDpNQGn",
  "key5": "3CAbVZDBuW3qxxsCQ3xsGnV1C1gqEDhGAqVYLTgxSuzKussG8gVY7RHCadrGZ1DQ1WLQhiQbF4oQRK9mrKBXnDrW",
  "key6": "3c8BxKb6QwNiKyjX3NhZVhX2hw8MsSdLKeH9F8ZCwS9pgjatyvzHKKEueYFjSx3MYHYEwrY9ZRXHox6jdTVYR5TX",
  "key7": "2fY661vCAopta74iiPE2dwi8BukKXos1sSTknRBMbgojUVPJe5Biqx8soFdCiquJHoqKYbM63wMAT3xqVe8P7HQh",
  "key8": "5pQcZ73rWsd3dq8Nt1RsscAKUgnwZpEDCn2Hd4qbMQmP4hEKqFJPgL5q8VsmUzkoCNQvQjjjCTsxKosAeuufBSCg",
  "key9": "5fwtdj7jqZQeKDqUEcs6dV21nyThTMUfRxLL5wJxPtPTc1uKTecRJ6GQuXG8FpY5GWf92hX6duRzYGpBn6vrYmrG",
  "key10": "2JjSTtDV9zsKCLkZWDYY7awKmufksLZXDhAtZpeXjyHjddwYXMtUiFVV27sKqmg6LBzhNeYhdcjU1Ae7L3V4D6yB",
  "key11": "2jdaUuJwb6ma4U77imFmAArhkZLKwaWz6CitRwDYMJTnVjxg1VXAJxEdV4H9ek5HwgtVHfmZ6nJxeFbMToGygtsz",
  "key12": "4pazi53qaRMajv9ZMnGEQ2qZDsmiRCPk5ia7MKqcBrQK5A5gGQt9Vg2gQqtEXNJPeyfMJYgEyPzKSkf4u3TuQfxd",
  "key13": "3wGKjo3kPP6xXhhSbpHoNePxVCxzfzfq3qLGxT1oK3e1aTyimAH2QjS3AGAj4sdWyAj1MksAqy5HMjxhP5QCnw2",
  "key14": "5fUS7LQ47H8KuqQT6S7m35pSDTEpfd46SZ52qdBCpkmf1bCGmoPFntr617NHnTm8eW7AAEUek3iisxLmcJvHXu8z",
  "key15": "izYh76NvGytZtfwJ8kGyLrnjGqzcVCk4B73K2oDg65uT7DN9xh7Je6xuxdkuH1cm4nkTDHpAmphBXGAPsVVxk1B",
  "key16": "VSUw2WYCvtrSJPkVAPWZbuND76XAu6kg5YC4z6CTEfwjKfWT6NvRJyesyaHKNRohWDGcrCQ4srgRZzrkJyjVRz1",
  "key17": "gwpJ9uFxHZU5JKD2mDdNvoYcbph1QjDQAdeK6A86RZ3654ewmW8c7vuo57XxykHm1tPmroR6W2vYiFtKFQE9mVd",
  "key18": "5qP8MJJq7Fc3DEJcbMPtbeP7BLLorf3RigRYuMEjbcQx1GfZjJr4FGL7ggkS329q6k6FvnkFuJNgk6FbyYfexyNp",
  "key19": "3RNunru2d3GYR1mdsdASTFWqAQ97TZnzUkBnwU4vrL6whExdBaEpw6kTt1voT7peptNXRhZ2mgerEY1PHZ3WpJFF",
  "key20": "5vZLy1gCX2i9Mdn2fSp3JvmHnZTAaRENf9xqcnxLuLJUW8jCfq6U2rfLWMSVxVk3mMPkPrupPvxwzCB2DLd54WSy",
  "key21": "3AEXyxNb4EE5dVWBA85VUwzs5oeCr2vseNBfg9zLW9vU6EXae9zowKpE5nNVfATPcbSoHgqnsAQWwVcvtTYHS4oS",
  "key22": "3bThuB1ZtvnJXYKaJ7T8TDpkqmWHcTMRv7FfAQrLZVqrt2hfJXCQY9xVcBJdDmh5STDYqNM7MJ1P5n8sKzvbyDeq",
  "key23": "2X189LA51smwFYXRwydcawhtnuaAbtkhPGsmFyKT1Qn5yXMCtxZHSHgHtLA9vc7DFpsg3M29HoquUCZ2zzxaasLW",
  "key24": "xRupxacsiGxCgKKebBbq9eJrDxVDukj8g5gZ2UnMTkWS5MdptEPoPZHgq1N76dV7UDCLaNL4JhFRovnRWFdYWjN",
  "key25": "5CPjExEMdroh5kptUjT8jQedYstbmGeNUR3Qmi5FphrRZX3wxXxnF4AsdUCRdRmeobQD5xNoCHG9mXrhXeiNjwqi",
  "key26": "321BQ8sQbx4cwKSdLUy7RLAZq4n62hVKkSGqVsjE4aciBcSiYv4WuKFqyVi4kbafZMHajrC2fnT28LTyEbUudd4q",
  "key27": "5RqVpCr5j2as76gXWbsoK2a1kDLhKaNP8xASxqtQVXf8tJzr5P4bwr8Q2XAvLXUTp4VuAZnNRhBMnL9gbYjMWgMp",
  "key28": "2664HEnp5Z3Fkk8kseY3kFQ13EHAKSU62UNas8JZyu3CbWmcuSU4gvS58E7CuaVcK8YTintbfzsj1YonQqfNdYnG",
  "key29": "3ywkXdvSucvYksRJUT98UeVab1wZvzXVEaZARFQ1ryCGDoLaeZYdeHr4963zzznWF5yqEBogVipLM6GCPqQ4Do1B",
  "key30": "35xzc1P6MoLDxV7kyo6PGov1vAqEhHDEwUEnRdA4Gp7nHUSVGKXBBjFa5Nh6hDTnUUkiUPqco9YvhtbB6xcLLmAN",
  "key31": "5LfrkEZ5tY9uMztZX46yXdagUam58AuwApnvpSMqvZnrDBP7oerty48Azc3iwMGBNHgq2GgS8UKw6N2PeY7bnhN1",
  "key32": "2Sn4npFRn2niFpdXt2Gwq6PpDsL3j72it6qiem5C8noJkS21appAB5oVBCnzik8DxKJtUjfnr3y2hSNLt9FaBMWq"
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
