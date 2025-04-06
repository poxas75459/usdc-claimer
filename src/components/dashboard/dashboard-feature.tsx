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
    "2L4netaksc3BvEwjHxFZTnNEBZXi1XLvY84Shh5pqYFTw6425fnBmSLuRjA3kgCjUW6QZryS3qhEDDPNmMS593hm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E7TMXnENqorPDvYRp2pBv84A96By9rbfFZ3Ch47V7vV8UWaAt1XhoTGybR8YvXYnEKLxxfepepP55v8hQvENxTy",
  "key1": "5m41ML8NxaHBy7Gwwy1efYu5uzZMB8MD4t3ce4E8BdD57EXfjqpwTAUv8A2349qn4yLW6WxwFr9FKLu7x4UDtrvD",
  "key2": "3vDQYK5MMrPJ4FFzUR1V5ZKQb8Nb2cfCnNb4wnkYaUaXjyiDzjSGXmzGYimujvF1JfDRSAkwEk53yW56V2NbXHqu",
  "key3": "JmfGa7QWC1Phaf2MTtv9gvEJD7MhE135XNULdTtx2gjgoLzx2TzpeFoSALthYbzDYC3r6zcrdYwsmGsFuxA5wku",
  "key4": "Duc36pCNPfmmxtEEHYkdn66nNVEuzdR7kuiZnHcJWzrMpRR3ujiWQLn29MrdPbnk1WVykYVoeLay3UMBuhFCXq8",
  "key5": "A9NVdQHepXu5Afy8wZQtZC9GXyvnKp1mNzcXtHEEWVhkdkjE1roPuy5VMRe9wwj1KQrR38jUBpSbd935MUWDpgA",
  "key6": "3prpFcobGi26TWgeUhNVukVvZ63DTBAxwDLNYm3CvPhPPyUbESDynioKaeyhgbzNaG7eCqrAP9GrHLMV5grMAraQ",
  "key7": "2M9LmtjJ6GcTzHpA7kfGJyx46vh39wgpx5kWBy4K7wYFQvCqYDqtbuYBcjS3BwjnPAwLgzi5YKqvauoyTQ6ykA6T",
  "key8": "5j6fFdwDdEgESe9d2a8PSJabDFicZBoU4PKrKwoDVb1aJUrbL122B91TMUtzuYcmBtfzURBEo9eQXX8Gg28gafHY",
  "key9": "5QbwpCMWD9WvvFGmPLALb1x2aGknACJvbe6mdKb77DKbZJQPGfHQnrnaEsw3KqjKLbdzAC3ja89cGHzX9nAetdhL",
  "key10": "58B7p84jW73cC5FaH1zSAwWsJwJf5FEDFgvT8e8xF9vkgwQiUFzqWYEFNjsxZbbA9dzT1DE4GN2DbMQWHWHCSgxN",
  "key11": "5BQu3xjAkmB21jLHPGyH8qGWPGtPFWFmzpVzfgP2XHX5QVqzqUi1CuWCz7BV61ehAn1QcX7NB6jaswZeE2rmfXjP",
  "key12": "1YpnsQFkKqviApoci9fiD5rKXJ26mpvGjkGqSpCRuGQqmZSJ5rvo8ZM2T1WmVknt9UAw4qVM9L5HvUTPH7jLpot",
  "key13": "4WJhN9tYE54g2sAQgdjKgjxeWbVAycyBBrFG3VBVWFaPArJ5mYCiP9A6gCv6PDW2m4RhHQTm537NsoXvyvnDoWyV",
  "key14": "3LGeYBtQDgJhhNVwhZ9xhVHATChHCh8dRXmcmZmXj4G4EdLKJQPsM16qhVMPFmS4Ds9Y6oHoVPm69a5XYBKkzBGG",
  "key15": "2wzGW3g1wqhqmJzRGWcR4uhFdV3LcdbYYDCTxin67kHRg1Rmm9RyKG6VR5tKkoqfcKpah1BtNH651GkL1c5jMdhz",
  "key16": "5ArbyVSfoXviQrDfFZvMvPQkDGRqmfp6a5Yok6zzDxL2gGU1z7YB4QZZFAnp6EntsumcnbhEBukKPA7vGih6Lwh5",
  "key17": "47cxxVirhVAyPUtwNG8jEmM7nV281LiYbnZkCFLmrsya2c8WcH2f1uSFzQnzmVkdyYEgq57PvJvD4zk2Fa2Wd5hM",
  "key18": "4pw5G5UxzYUcBbcqqdUZoFEv4jVAfYfZ7x5RBKySeHsQxUaSMuPnNNVR59ak5Ris5agaQMDKCYd8RKD5YqaE9JkA",
  "key19": "2ZAvKZgoCrKkcF4MNDsE1bhXezqHmbJjaKTJ1wxtSzbZAb4dgtAu9L9rXqHHpCUYLqB9aUg7qWBGE72eXsZayEDk",
  "key20": "fVpXzHSLcZvb5zjbfoG7UmddmbREPJHpYna95YpbWNgaKtREZsomkoRzhMmQ7SKY33c4dCLhNWEAvqtK5PgbJRp",
  "key21": "5A6qztCz7gBaNKT7yR2M9hxy8Ujg8DibBxMnn5w5rLJJoE2us4Hk7EgrSNn7ssdoqNDtybptd3X3wVaWgWG2xXf3",
  "key22": "5NGbLachXrhvPr9wJGWW4RUF8jm7M1x213fpZ6x4isPSPFn1UfkbaZEEaZVUNQuStN8EtddznJic2WB2XdsmKGEt",
  "key23": "3pfs8WVq7dDb11MToqvuRjbMszGAUj3BuAy6JmhDBiHL3ABeNj4krVEcthixT4eEaB1aMbzWKHK3x1XmhxJ4PhL7",
  "key24": "3iL9rHSVSDuuofL1qaFGCkSQvsmVEX9tJ9dQdp8GqWQJs5EoQmXZW4tsra4TJha6tjf5jwzwVoDQ4FUaq4weavHE",
  "key25": "2f9bAwCiiNWC5uvcqzHuqpNRpN8ZqenrdCuZvsJAqxWWphGPzC17TGdZssv6pwqja7cKEqGnAkZyuboUqMwx7Mcg",
  "key26": "2m8y57r5HMfEQ2md74LG93kKXJLoxf7mJ479okk889TpQTHypzEVVaedpRfLHdn2pdu26rDeehiW1ksGGTXV7SAF",
  "key27": "2nG5RCJdogKbujuLYqxJZmV9aiKNdeVEyfVbgM4YSftb2TdcqkFPHQkpLgPU7k7Cs3sQf6jHuGuuNatmgtgDWwez",
  "key28": "5qMmMDbEa3MvJ7gw5Lx7FqGkAY62EEuoVYsk5RRjad4m5RV9tMsGEJKWy9go98ZQgUrr5CZCaANXRXLpX4MEApN9",
  "key29": "4uN2uS3D8ZhvGN3xomyHbVdQLtNBkVhZWNpKkVSCx3C29oRmuc55gYiR5gciDPr4Wim316ZU82rx8tu6Dzg7Y9FD",
  "key30": "48hFRvFimPu2TibqdXnfwAMLvq2pKVNUpN9G7EKiBtX3R9ju9AuWnNZUwbwest9dWPmR5PHXV56QxNpaazynDXFw",
  "key31": "4fvsh3Dh6ifZMPjm9hsHffqgHkMsT9eT1JXW4wJuWNaDvvTrwwe72yn1NAc8F4dB18WKjxmsT6WSg8sHN4sCRJUf",
  "key32": "3z4RCzvbCP1iPc3nVZB5hisoF4A8vunp44ynBEPRRGjFNxpvaoHZbYW3EzNBRhWjhXWSQkuY1jH5a7qW93mXRmva",
  "key33": "2metbiudpZLHPwv3hQskxHqytvXH1UvKwFfDLVHJo2h26qPfiJFWrmFY9Z2tSPENPVX1upJT8ZSuppp6uFvSiGBQ",
  "key34": "4eddvZsK37s9NVHDKNin6Dy79YUHExUZKBiRhR5zV86HBNbPeS5uSkKvExUUGAGE7vCD9NeUQHeZ2XSifDzNjzHr",
  "key35": "4ceXKXQw4iGyxqpe7R5LhSUSLYjLiYQFuJiQgXHLzGrad8csN6cXMRciX79hLrdvTU3UzJnww23hX4kodBuxczz6",
  "key36": "2DH2yJxTQ6jBFnQDUEUqT2esA7nwhd5jqpQSRdjuXH7UD2e8nKW22o9ZgXSjC15xtzFU34h2kBwNtgRYgPUfSbj8",
  "key37": "4rzwsd9LYG1mKzZJQbn7irkuHgUKCGx7Ctkg6tw3ga7J2kzvrVrPUt9G55jVixK5fwTUMuJNuLtd1Mn8ygZGST5N",
  "key38": "2xiMhwPAkdyj4HzVqoKssVd2FDgKBHwXHwcUgWQ9oRxmhYxmoyQx62NPb31uFkDemM2QMmvhd88HC9CcSQ9o6QFy",
  "key39": "2kTkH4ZbShFkhpAE9njHMTTqpMnyKYEAQcwaH25LBYm4x2TeSM36e5mAp3yf5QYDXgToFaYi6eofdDiR2f18eu9v",
  "key40": "3TkYC3bcNp5abiV1RpckoAjFAqBCZBEiTJp4L6AK7cXrvcFP3mwwrphZkmqxMeqSbAPx1gzKxi6ZK6eD8gzqGzyL",
  "key41": "2VgYy61AJBrWAh92zFoRacVRq7Q73h7SNN2st9AdGZpFjC6rxkA6K9Gwka9fkBFfr3ahGjWQm3h1KTiqDPCVtyNv"
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
