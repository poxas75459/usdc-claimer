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
    "3JwsXXdXFJ1Kt12jvVYRxqDQnvHuXMtTVj2kJAGjPGdnDVR96dfF73Fuayn2JTL5ez7gkhBDsKdpiG267MzM9QDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KeEdb1e6m3AM4vfwEeVddP1MdBEjvMKDswUtYEUFb6iZns1SeAHhUchw4RdtUm2QaAgmfTFSrRZ5DyrV8jSka3A",
  "key1": "4Q21ZzMYvmZSTAu8yKSDKx4g7JpaeibGm3DzfFBw54WY6cJ2N2T3wnThpzCY37NRaJQXoF3ZyVdxeBprAq5gJiFz",
  "key2": "46iFF2n1KLM88Jqjr6GGdRPrVKo18gng3s3XajQRv8VWQ6noiYuaMUAbui7Z2wB3XFhWd1TCg5iXzgqZW7f5Kchv",
  "key3": "2KWfGAiyuciiJfuNsHwHjAMuAwWhT4ZcgLvA7ijVFe5J6mF6WYjK4iBxWCjsexwFDNvTU4DcQSE27paLnZU3D3Bt",
  "key4": "5SSjV6ZpNZUiXGZMqD5mNs8kk9Ee7YuTEq945LiSMt8cYnzwSQzGV2UDsywtzQ1Pm1j5L1edwfNJy7qcpCyzMDYR",
  "key5": "3v2hUyirWY3HQEY4D3xuewRvRKkcE1seWJ98GgJJxoZ2G8BLqkvCmYrEAyzGdTHuZAMQJnsdJ8r4fGJjs6wrZf8V",
  "key6": "KSPGwwe14gifoCaCf1bjBTZzLKB5NNoyR6Zrtr83JH9nhJtrK74bBQoEg8wtekkDTNKX52X3o3zfXzREAcKgcWf",
  "key7": "3tMjpvvuzWZsttyNU4C3VSVn4crfBkVSS6pSN7a2yWi2Qwd7UPbJNtkJFqFDmNjqZ8hX7NjuHxCXKZtWxcHYbvfg",
  "key8": "4KLbtLsi8NtwHytzQqQcHjMM3grgD9CDdqKWjafbGWVL2PZj7k1wgxg8Y8QrTHYGE4PpkYjsnPFDsQwzqgbEojrm",
  "key9": "2m7maBvwm3DzaBpoRMY1k74bH6NwnyriVBiVyaDF7irB7PC8Nz5NWu7MvWJYeDQrGSNQGYn5C4vvm7yuSybo4eGJ",
  "key10": "5zixLVpMcNRytbbNeXszPRQpxgAFkD89fmaNxSRd1WeazZTbJqVnd88bJVmqn2U2ugTmejG8fCoa9vFXFkZ26dhU",
  "key11": "5H2A7UvxQm5o69XR7xgd9HALNS9JMzkZhLGpoUfSHYwRpFTWmNKGgmvujPJzbqoBoLVFov4XQDFtJZk8k27vdjB3",
  "key12": "4aTjKiWkVFFnvsa9m6j3uKdoTVyTkLJZ7yByaZeNXPfktEPgxjjJcSc8MxL6FaEP7FBRdnwzzEkSnpZmqahfzvcL",
  "key13": "4ARZ8ZoPyCGp7B2qbjCHNgEUvYhYuNnSf1DCPzr8wCSxYL117f71BZezahyarVpnZ5HY3vvE2fnEdk89ewr4gTJ4",
  "key14": "2mYehhCDFsXsteE63MdtdtiubqMLPEriTVZyJBYHnxgPNwDzr1xfy6M5PtzoTnyyB49AVNYEFkhPwoaAw3Qcu4SF",
  "key15": "4Xq9jHq8kgbRTJWgEQA2JsqpNke9WoQbFJxiXb5AMGVwMtokdRhT68PJHHg9osXfVx1ToKaq4Y5PCYn4hEeqaNqW",
  "key16": "44E61JpF9r5YE9DQvkdbbpwuSBunrvf6wt93BQzbpjQpgpMpfeCVnW8mmwdpRESnFbTqBabi7QVoDivhEMsymmvw",
  "key17": "4GE5uKdvnRn1KLVzhjUhBoFf1YHko8SkT7sThuJjuFBm3qTSiy6MiWrq1T1CSoFVKkTqHQinmJfUNiSy3mDN9wWQ",
  "key18": "4TzzNYMPaA5kNBqQq49Fc21QajkEdgVYM113BsanyoFWE4o2eqppHSTP4Y1oQPVV5qTpVBbU26Ysfr6t8GphfZWL",
  "key19": "38Lp9crokNDzRArbSUCQKZUm5A5EwdqdGGtek1A1c3EVcYBqrenqNr7HATDre3W5NeDmvqod4kVAHiT5c7PrkjYf",
  "key20": "3oV95inZ5a3afKhtxyoZDsFV3AYSYyjGqCNkxRncGHipLSMwKXPMkrCvkDQgJ7ZTr3DgujnDvUs7pmWLUSffSDCY",
  "key21": "tim7fdZt43G8uWiEnJ2KZbtJauwvnoGJok4kwUVMwhjf6tb8T4Ekgh7k4EBUcgvWBALU93WNELWPNMmtBpBRhN2",
  "key22": "4KaVBJue11unzgtRw7XcY6attsQE2o5zvD73zfZ7nb32AMERPfLXA1Kijdy6Sa9EZvh56nXM81zibcLdt6ssRhTL",
  "key23": "5TuqCkFYEpoRgeFviGe1MHDLe2GTa5nvUiZYdfgH2chbxvUNujNqgEMZSsWCjxtkZUbV1EjS79xXEjhm3k4hzv4J",
  "key24": "5kKhzcwxSxP4qpJvdLC7k7ZzSNp58q7QUacpp9xccvaBRXoQQGNzxFvXdmwc3h3bWufpxx6QSrRCcVYHnHcvbRDj",
  "key25": "bcMMYS4JnpdetrJyfNukRKQS68YByFV9oVK2tqqA7Av7YBojptWMYpDy9GHLdCpbgdPiHgQuL5oyf5us5mbVWnk",
  "key26": "4BGtMmQdqpScaaznES8z5B3wfGR7mcwg7JpF3FngMjcbUmTtu2AB1xKiBpXfv5fwXqrhDX1ibiELiQymBSJ7eSzx",
  "key27": "4Mu98EFoyWG5Cc1DG25vrn9yMq3YX88uvu4RZiRN2hufmzZPhqprg5xsbx9Bymv72yt2uKy5R2kvPaYESnpuNvM7",
  "key28": "5EZ6ZnMcHtpYuyzpaNj7o3C8XMau6mD2dLXuJ5yXZ9BWP2FjggLpRaJDu9UJ9K71yUi5zfVNnaSAoWUqWbG66ywe",
  "key29": "5pxQpJ3HfQ7xvehkMSpK1R1P85LMRmDEgPL7JYB3iX7APL8JRUxptjjdZdRqShtzUEmePv5rCMENcxvfgXChKHB2",
  "key30": "4ji1Vvagb3XWMkCmVGjj5x5WpmBkwv7SW1pnikzTqtGCsjes1m3LtLLuTfw9iYimX1hX3D8oBniXQnX4ssxnaS2j",
  "key31": "4BxN9fJGnAzzJUAxbqqY7sxUrsyxfP4baGJWbPFQxPBXJ1ncW7WPwCLrki7XQ7bzU9unhA3eX5HxKAdNe2gpy6TB",
  "key32": "34C6NjSpArirh5dX43ixiToM6uK6r2mmxHjzvpaToMiDtBCA2NXiQUtE9E9kJbEzFEG3dt8YhEnjGp4U4DXvKoGo",
  "key33": "36148zgkZL48d5pdEP6dZorNW5DqeRasWU3cZhjtv3TTQ5c975Pv67xevQEP7zvK7zNjAJA8hD82Dj3m2JawVzfY",
  "key34": "4xeu2Rvr1x86R7k6GBRaF9tqC3vnNwiUgd2E969QYv5n1iZQf1nQSSAdLVDDtSFKS7mAwox4QXF7xn1fomsm29nH",
  "key35": "4fAXJ553b9f58MyQ8S5isna19mx2sRqBbAnp6buxLbjeDgaagsgX4KMsWivZCUK97KjUqjSxLxRjYNMSPQ4fmRhA",
  "key36": "3G5P6b8K9Fwhz9sdSeYNnv6teTy2wyrBQ3bnpooyAujKdrr5q8fHHQak5JpMFTxNy2mD4zTMBbn3BdGB6kuV6TSY",
  "key37": "4nYehsiUFBB9WJ4Wee1TqbBgMk7Nc1UVutXoYKqQ5SZnjEpFMVVErs73L4zUPLXeLzUhguGhkxudKixU3CEmU3Ur",
  "key38": "5unDgKD6NiAWBXEwu93zpspjxBu7PpnFhdgEog3ekQkTRNveAm4mQLAxhmygNo65M2oUBNv9XyWZbBwwCt7AhfCx",
  "key39": "2vxnBcBZEvze8gSAa3TZhmQLGQ2kLpoSZYWi14ZgyUnYaUiM3D2286mnKPz4tu3xY3TezuZj5hQ2TTcjZ9tszWPy",
  "key40": "3YKFQYibFFZkCx4gBpGen25EyVs3yGoCZ9oQj2Md7kMYNryEuyZCgp4iJ5Pta257oCzNKjLaaYCeo44Mo6qFTc8P",
  "key41": "3eiXLnr1F7oZSJ24bpPJnv7iDpXahBf42RQiUAPCiTpGne2mxv99pS82tfK6dJ8VQ7bp6LX7WLZqFTmQGZ7oCeiG",
  "key42": "3oVS4gbnftZWRAw9diRaBn33u4kofU9kxBwrfCvWHWdvwfFQ9n6ZzDtLwFYRswrKFNDcesGgFNyT3ZJb3XSAUdMF"
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
