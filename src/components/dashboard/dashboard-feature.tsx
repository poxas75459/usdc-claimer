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
    "5xQcp1uW4TNd3uhkCzSuh62csVbiR6rvkW3TKufqZ6URqNi9h9bbuuS3i6VdWiJkD5sHK8HRajQ3dq7TSDhWL1gx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bdSnowmSqv15Bh6g3XQ6VPqxTgDKXZxvnD6CmcLbm6L99KQrZyUvAjQ3KvyrjCRiyBvPsKtMnzsS99sUkFc2rpP",
  "key1": "3Sxt7XmnefaxqbiVHuDXd5AvveHUhJQ8fL6uoZ6gMFGEVwadnGu1BvjfNpEm6rfwyGc7pjm5pmrYXmTADvCnsYv4",
  "key2": "2G1dm9hSQxaGtNV3NyV8aioU2843LFnDcZz35xJWWUZhm3LbaxxtnHpw4VhMadieHRGynp9F7qoKpCz43M93JCRE",
  "key3": "4ET83cbytL4RTreaVYLtwrfnsNpgukA9WYbdtWHtEiSTEN3ZP3WRoL22XWvHDKG5PwxPRXqAjzZA1ugndePTbyPD",
  "key4": "66TdGTNxx5UsdyuQEZqq4ZEjNRkhU61bLFHvJGtqAKFTwJSGgoZYRLTfv2wEPExsKw31GHnQ3HhJKSviMvsiTLmH",
  "key5": "52oQ3ovdxCLr5vSf5Tnvk3ojjkCN93ttcu3GgxJz5NVAZMUxYK6oAbnWwcrtunT5byjVpWZoAx9eGnySP8iNG2Eh",
  "key6": "4HhtWtUr8zAaiNs7gjyN4R4Bo8BHEKbLckLzgSyTkXTyLM75ekACMSVLFm48kmYYSNNVgUB9j52huDEkmgWxRVJd",
  "key7": "64iR6wfUrKZyh9E9moLWWJuHkng5dipdwv3GS3MqFSZrzL4MH4GEsSHS3EexrWH6qeu3d3GBiSs5acXHW14Z61cG",
  "key8": "mZA76VvZR8J37Md9NqtzmEDSBtFyFu2EAoWUaBuimajQHDd8R9Aw5kYU2mdjpuPZdrPpptvriA7Tp7zn3fVW3TU",
  "key9": "39AiFnG7AJQn8JP6EYVFkch2P36NDR4bLkCMhrQmRfR55KTxnAu3uKiU8FxxJvhKnDwBk5T7cYxs6PQsHArsK2gT",
  "key10": "AL5d3mHL9Nzq3Yc8jiGgNP3qqEiaX6Ut4MYi7UbE3vy8WHVjn8rXKhnqnGrrmpy1pySK7c39Rd7hYMYuJkYAV94",
  "key11": "TbvBDaoZxFZAfHm4eYVJXFFwTiE91BD1zr6kNKiuumYno1CaqMQ3cnrsL5Neij6RMiQD2hRx2CYFHNhpAzX1BP8",
  "key12": "3KEVhd6n32Ccvfhpbxq4qDXC3J7qZc7iQebJ4uv6p8Y63vqDtsPcCBS8q4Dy6ZQBUfFkTc3UF6B2H4TdWu9vnqPC",
  "key13": "3eTsXoxsoteCj4LzSAPXu1d8WdCS3rXkmeWWJKniyhciBsm7PXbyctv2MaJsPjzeM1ZjNjroCkRkfV4tD12Ld2JH",
  "key14": "5dTK2JqBL2Binrr74SGbLxsvtWdJToLQZczbxrfqjb9W7juRyamp2inMTzjq5nFK4uv9xz5LtpEoiKjSVuFYaBRL",
  "key15": "4tQWXpVgpSkYe5aUtppUT4NuukZwoctkXZXiWMtFKimi4tBiKbGENcw8ASTWS8sxnRXazTiJZNuBA4fDZYnNJLHd",
  "key16": "5uXeB83piHCWxWFnwA7Wj5ZSBiFDJyzT6bkYnm9X9zY21HATHUTcKpTUGB2AgcWsze2Qyv9YqMaczZXyFJA2T3W1",
  "key17": "VZG8iFBsfuGDvuwAKXWmuSdpJnbHE3eZ1zo2FcSNqySDXmRUcAzGrJmG8SEo1ayyn1pNrBRBFg68QsSDyyFJGbn",
  "key18": "4n9QSfLV8pbdbNRtGmp2H1mfA1fAWV9PrQV5jiWDJGncs1GBW2NaAw7Qw54xmCRFbcBsxaKwSgi5jSZn6U6U8u8Q",
  "key19": "4ndiX5J2vpwdCBrDvb13T2KTcrx8bduzDbMQoh9r1aUQ5SCfGxpmufo4vGJawiEcwV8L7Hbb5nqMMnhmfQpKXEUP",
  "key20": "3TJxBwsxVTkg1gr1ztWF29dgcfuujmGPPfjW8xCCKHNJKMQyz8THTtgRzANHywukpggerUtGLRpsZFipb7kbHU1t",
  "key21": "45k4K4zaBmx2zWAiQo4Ta5TnT2rCtVeAvESkZytxQMGSAZuCnTQTaquz2YUNmfoDnbkbXCESYdusqsa4e3ia3ZSA",
  "key22": "2299JCLehbXiFHvEoyvHZD4MawC3yt9BdYJcobKZm4u3yR4BauwPvdjFXhA2u1RvQ3sWmLHbdsz6CjJgN5m9i4zH",
  "key23": "3KssAfyhW5GN2GaNC8daMus1rB26dDC2QBKh9RaUk5YhGBZugzb1zTG3xQXpDW4WpuobD6d7Go4maZkgrzyATgsN",
  "key24": "55gQBMU8zHXgm1jhEHajtguD9WNd7EMy1GL4oecEcgCY8RdTfE5wMftSy6nGmXuqHScnUGaWWxH4enjhHuuHfkLM",
  "key25": "28pcoTgok9ttWWRW3DCnnfnLuepBrDxkQRJr1Wmxxkp3HqYFG1bkLDeKo45vvWawLspgv55yZQAG2QfSba2xdvVw",
  "key26": "2qmps8VACQbNAiKuD3NQdJSopwYYw5nMayEFzFvJcRktxdSn9oW1yh4rU44ScmthymXCGeVmCAY41RFG7ytPdiHv",
  "key27": "592swXeS2kDTwfENUwy62Dg7JMuDysAgWSnmHeP78fpq1n9EEHvf4ti1PR5i67NJUaywcaoNH1AhhCanbV9pRPN6",
  "key28": "5oBRi7M8RuEaYeM8SU5BBsr6T9zyd5JZKFmAWGNXKnESGqwpjQwcwi7GDaKdsxXqPMLSyUKXB4gh4pggGhqbKWvz",
  "key29": "3F5pRgCwrNEXhPJSAR9RraUbGmbQ3Jy9VvdQJtQQQ8nEw4T197RUfYwWM3UQ2QdmUxxYsz95PCeZQodrZVB1n8P7",
  "key30": "45mkev5qGmg2VeVrWpPXZxeZzmXjUNXGjUagLVqBfH24sD6jTqG9ip1oa8B1zgirjtHTtvuVhTmpoUmjzBtBszkf",
  "key31": "7CxVPUYZ5VMfhLpPtCJ8Nv7HhmUtTmRbwgmZ7LwL1XwQbgBkUAgLK6YvBeN7HpbSQ1D52LgiNecj5V3JqnQ4VJa",
  "key32": "2w1VV1PepocnNiMKZ2txmWo2whWJznYVwpZMU7nZbhd99Tz4CPpxj19wKr7tBqYsQRUyV4rYja9RaYcitDZCTPnU",
  "key33": "1qGbn8htM8rGmEFVChyVMD5mTMza7MGGTVaE64gcqhc8kty346vitBGuc6zco9Fjx9Tv4SNKwHFf3Jkwk7tx6FZ",
  "key34": "2SoLzKAV5P3ejs3fFxeCgXzhQq1Tdv61481qpwXE88xqJMxttbAA5RdH6p2ffhcHqHNL9ttMh7e1fzNnUFii6Md4",
  "key35": "SWLRTkVyBAwPSKJWfxYHXBYGKSM8AcdAuzNwg6x6pMLHqA3Vrt7JNGxy4H41sQfHC4kgVMZkEra6wNEGgdc9Huu",
  "key36": "3o96Y4TJYoNDjU28sp2JiLMa6ErNuiwxkiKpmzV18JEa5pTu6nauruWbTumH9KL8xJMHVeZGp75dyUxKAGkyJwkB",
  "key37": "3MuymKrwaSWmZBcQ4ExvhTEke1ZLajG2eSUc9QEFAjVKy5x7mwjxj91AZqYymnatBDpLeHCuWakFiFqRh6WUuJGN",
  "key38": "2neiPf5gKferjSrWiUwz4JLKrYpPrnqpojCaeiQ78VFiqHyxvTfJpHhHGcd5LwxPn2tdGeS3SSbzxKi43BspbaPe",
  "key39": "34NtPtBoiYu6figgAvinS5tAPXyadsoafKzNVmpW19wCYW5u41DTygooFCjfrUwR5UGUNMwtweUB1PUTa8KGaMAW",
  "key40": "2Q3NfUaNchkKAsu87EhSixA356ycQjDsqjo4X6VLTviMaUoXtG8Uy89aN2cRqqZ9Hgo4pQ4usKJ4SWHEApHes3R6",
  "key41": "36JttPEUZburX4ymPgJMuNhqMq1Xg46fUeMzyTPwKbA4dXp41uRxtBRmkXCwkBpeS7Y2xrkvdNuJioxvfU53myTT",
  "key42": "2xTxYJnE78TBwCWPCDFCfn4NaPAcd9d7YbMnPRgDGr34PaUAHYhFguQjvhqjbvCBbc2KCsx2SjbU4xRumDmLQPbW",
  "key43": "2Eohj7rpkZPRb9qgjoquo3mkLBscF13LhvEtQRdVTENLKgNGs1nPzdrCxZhmD8AkwyKZ1X4wTyrhk8m2qxjG6KJw",
  "key44": "64xi5CNEBBkKSJckNzS1h2qZ7PMcRuGxzzTogEbR9U7Br69Q96nPEKLzqy2dDkGEAhPh59SerwSKBzpCbP87HC88",
  "key45": "GUCr5xTBfm9q8YGrEcPkZF7iSTHkz56Bbtvs4zxqkr7xfDYRV4niZkmraFvpBUDwQMicbZm6cqjeVQzvh3HvZgf",
  "key46": "5vvDRR9CK2otfPpyGCPvEeeicYXsAq66TRsC6owbTP5P3C4UJvpSFD8hopnfCF6ecuNLKUHDpdvHL5GjzDZDhdR9"
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
