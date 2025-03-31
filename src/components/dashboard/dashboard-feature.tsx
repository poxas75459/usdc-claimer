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
    "4gV9F2vN9L3xkq6pzL8BBkL7NabyM2mo6GgttzYxrMQHY3XvgK9rbgsptYi3jGAYUBJf1uTNNHDZy6XaHzmHMwXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jrX9iRqZD9fBsAGDqaL9Ph4NTTgYHAMhL5MsW1DZT5fBH4djn7zTGDFdB4D59NukFM7Ca6Kin1hJCNi6uDpDDXS",
  "key1": "4m8S3mRPavNsEXoLsDkFUDH7JBvBjHu7HdqrCrAgKWKMQiSXgwr28whE39acEm6vqxH8PGXofhovS5Yi5qt1n75f",
  "key2": "5G7JE51XaYXCa1Fkw4LRNKEMdscRs8ZeikKdnmGE5qtqQnakoH7ezxzwQrPp8BnarrEx8QwFYC1GLFoneAsTMwrD",
  "key3": "D64fYWVcbTYiZ2a3sVRs7yRCrg42t7jg5EuNa6ik4TC9AMXYNCQBUXhjG81iqLb32G5NVA72ZaYZoj3DhvHyBja",
  "key4": "51ATs9KQvcGoZgGEwM2eCSF1PgDWHwjbzCxXh7Lmp33s5RUcLmK9FHzTta7faVggM5zG3Q5BzDYbN8Rie5SChyfy",
  "key5": "3igbdZkGcr8hJUXtxrgDCzQDA1t2WG8eFooa2NzQT9rLVkYMG9jWHTCRX9MVZjnJdVJEb46SyJ7vpXpYCjEQ7rva",
  "key6": "3UwpSMdGqQpVbRiB6EeENPvCrmrJ4vNhc8V7kGnrJUAmjHg2dzTBjqWQs6RXrJcbpXG9DZ4uAi5w2QWZ649fY2ar",
  "key7": "35o35HYKXsQoDmgaK8pBJdJMA43kkWM5fsaiLVHyE7nKPzSYucNzzFLhr1wf33Laz7xv9KcBBnV63iyNBHR5XurT",
  "key8": "2zjkPXohNNFnD6FGGr35TrF8sCG126otdEUA2Cn5i1V7ph3SMDDkZ4fkKAzi5ujzVpSXo65qVsZZjQFRDYn4NTd6",
  "key9": "SCz6VCSbxQh8cxJyNykWoUWEyEU1YVQtous3bU9hf8ckTQ6XvEdhsHnsizYT8njbQy68Hg2SeDYLkVTe8n2ZgLn",
  "key10": "37RZVgA7GHMPbKaVajYzz3hktbSUBCubAFQEYwDZebjH7HQ8CDBXpMBsAZ9EWAvRYPuswqYxuiJS4aDgDQRWnxFB",
  "key11": "2QSbpRK98Bxues5KWk7jWiW6qUAgadb1C5DMyW2c991Rri27J9NuuhngqEZUFoxpMn528r95VDY7KsJFPEH5vQwk",
  "key12": "6436Z7YEUJpWYCG6cuDnGa4cV8peuDHNjivMmiWsRhAEagzNc7UyVfrkHCGAM4XNzeT9qf1h8qpNNw7rzMw8kcyh",
  "key13": "4iuEE8wF3kkHsmqd7GXpjzgEUj2PQMoPSkJp1nPa5usjDBsXVTKtQsPiLbfVQ6odorHhnMouEMQv2bfqCx8fLdUm",
  "key14": "pqhzApL6zSDzyyMkBXXF62hks2f7h7THDvpMutAGY9tvKjxu2Arn7XirJGqmdbuVmaDSxoqchLBho9fUJKSBE6v",
  "key15": "5Rw83GSf99hLmgE7UgB2UyPi22oNEpV5gZsd75gRXxr9JS9iqNoLengVxuzS1iZ7UCNT1iB3DVGQKVSoRDi1SyQ4",
  "key16": "3GexRKczomW9kDztD6hiP5kAToUPb9D9U69QmVaKz4qJNE2s8aFiTw4Seg7jqJ67Y1ApgDMR46Y7A2iGxtMbQw57",
  "key17": "3tEyang3QLS73EPgiqc5QHgkfJZz3eKXjUmkWZPTMEiu33JWbLF2yiFxbQUNLudxQ2JsgUVS9jsbLJHLXBhjVJ6W",
  "key18": "5woG25mRXVjapHP5jKTxpePUJmcT9dbNeaShiKiM6HsiUgyN9hPNpvxA2H9xPKTrRdvEFEZPtikZ6XaDqakjQu8g",
  "key19": "2eBWrjWGJuHaqPzt5SskuHE3bsN6VAHFqgUw1wkr7rRD9sNqe4xrF8bVdvoXeek7a6Pb8nRCMBawKgcm4ZZjPuxw",
  "key20": "2QnD3rd7RNQhw2YhUVStzGQY4rV8HTjAMfQtrgezVMGpB6Mhe5vkHsZBECssqPQg1et3N9dYZyMpzovEjJvP8YPV",
  "key21": "5PTj7Q6BLTUwaSYscxkeXnKuBoLGHxxHvqpdqN6H8wkv3ZCaZS56pXSNmzGREqSWdi5564c21oMhcpzRv5asv3fv",
  "key22": "27DBu9GHBbntRL7YyPexU8wVHaoB21SiUm5ktZH8VUUmNN335KifEG4TZQmioebBcpm3ejWHatUPgUxs3JrFPKM6",
  "key23": "3Be87MT8M6na2yrM5YaCHa7GbBSDp8eWtLDcNrVvT9xt9hnypjvFsXZvhzY81Y8Xz7eXoJKcMYLGoAotroF63vvW",
  "key24": "qkviyTxsjfQiTKEYSkiapuB2hpURiNgsbGJsLfsBUU4VBZxsTY991eSN11ZcbjcGe8h3f5dc6eH9FBfBmh7xFyJ",
  "key25": "hTUGDh8TrHmiJBsNLPCL82a6MDPo9Q7tnMkxnaCWjtJPbwmKnUazzUMPKL2hyn3iXaNYoDRUFQqg3PenKx1ovhm",
  "key26": "52DkvXSPiA8A2J9RNMYYva3nVenPKDtaaxD2mpyUV35K4t2nJJnME4VqgYYv1CD43wdQxwA4SPay4wGRAgLmhyVP",
  "key27": "2AtitRZ2F8fpbC6h71kCzt1uKo1RyEgKLxBqFn5E2L3K7A88ygCQ2yAK4pkB5XfFy8cLKFgeAQXhYWuB5xD7PmQt",
  "key28": "3oai79QTwDiZyGwtYejoSdp4u7P8XuNe6euZYrEcMD8w9s68UgyZFQeHFLYUQQRK1McuU7hMdLtV4pD3oUy4tuxv",
  "key29": "2dTfATLaZQMGs8CGZk725A4jo6k6V36v1q3upXZUJLg4UNLtPkjoKoDjoLQjQDznreihvEwZFJnpfJWM1WwutFce",
  "key30": "3oFfax9F6mDYmh24AMSjnzD8tepF2UR9Pyr2DwxVM4nNvshGQj5wy4Wu3MGgd4B7Scocx3UthZkuoLJT6wyBunEz",
  "key31": "5ooZ7DLXmvdEtEnYMjZae3XzXombxRT816hZaPiZ6t9SvcXVCaLTbVMZQHmsFjwwAhNwQgCXTiJmGs3oEVkfxQrG",
  "key32": "3eN1qU4mbXF5Uonjcvgfk61UML4PQWKZeUGPMuyZHBt5gnCzKn4yYpxRnp6hjyKR9Qjbop8zN2HJGghJc7ms2PQQ",
  "key33": "2MUNXa4dMJHU6cUXD9P394DdTSSYZL2LMzy6NcKFqFR9Rh4hKGsWabhs8nvLaZazLuXmtFQwzyE9vGCDHWNBDJk7",
  "key34": "612oTshcF1E2JAJRDhAQu6GDhboYLEHJQ1v5acau322Uq3SgS3mRcYhKuRTmAYTqzRVgcSTswkrt2QjkF8o9FhQa",
  "key35": "3Cqy1g2cwFywrVC9trgyarU9ewafZ4HsvBRUnPTcFsrdBeCuDB7r9skDfyE78r8JYt7HYvx8WkpbwEoec1UHCF4e",
  "key36": "paZdFomGCTfnu8AZ7zE9VeGvpvHtDYfCL4wbj4YQzvw1iQfk9dS52MWFk1125GyDDbCq5k849oP9yikA1rGS3tS",
  "key37": "2VqNuBpZrxcac4n57F5KwsYdENPeQYxhCwDEEz7cfv8Vu77cWFMrPAsBG6QodkopzqJxc7DUQhVwJWNmKdZPwnqF",
  "key38": "3xfyFAdpsTPFqQ1RRoFmnSZmPQN1vkNrsEobtS7ypcC2AGjra4gFjFxEQpRmCyNyWKh8mLMS4UKvAdk8fnUCDiwm",
  "key39": "5521jtjZ55cofTa1odERDa3epB4dG4KSdoqKhNXwQihXkugwuLG4ALDndeWdpgdDaRdQpLyVcgtuokf8YLHddgAX"
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
