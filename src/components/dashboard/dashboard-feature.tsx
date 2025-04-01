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
    "2tTJg7VJV4RGcFHcQQxUw8YZscQvudc1Fhb87iQnGuK4XRPXBw1htgVB8XwucG8bGDoWvGNzAhQmhPcNsXXQqJ35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ENk59KqdbHJCLJCUWy9nZLQKhr59DyC6LiLtt6XQF4v6uQ6iWbVDEmSBrvEja1Lyy2iCq5ywjsWtMiSzLn12KpG",
  "key1": "5r7xkJUSN42yeD7829SgKrCBGBW7SXsmyMcsgsL9FbdXuTeBhPaRsxkzUG3HLZkwsgE4yj3vMy3QwfWjghVFBFee",
  "key2": "5hHYn6NyxLwkwgw99TVrtHGgnnU13DvgGvjwn1wHz9KH5LXEpNQM75dYVxEnJPJvqp4X3PMQapzMASRvH1Tyt4vy",
  "key3": "332uoe9dGFU1QyizBm8qhGQFgfixtaSUdHQbohR5p49NUzhKS5JWv5xqFXbjqbcD7YUfdC5Xrqns3BJ6BA23tpS8",
  "key4": "47xnwgEQCzKfLAYXtmNmdMUGYDJ89pa568jfkJd7ZXt2jvWLQvsaHmMeHMq82nbn7NC2RR5wZwr5LLZHMHisxTAb",
  "key5": "5jYi99sFK9rABow6jQrX3NQ7ovwJxm94snfhEUR9kB492z8ck55Vqf2uuYZTjLDawmLfauwNftuaAeJZQPrGrrHZ",
  "key6": "2Fa9Qv5mR3fksTyoTCoNAuHvhK89YHgNKK22TdRQv6wieYh3bpyPCyrenpah88cCE3HLeebry3iDFd4zBh67A77D",
  "key7": "2MJhk2VbtcYcnS37NNtriNt6FyFVFnQfyPd3yD1iWTdK3F1e2FMcQupdcKkj53vU8vkXYPNtJnG5jBV68sL8hZoB",
  "key8": "4YKzaC23ULziDsEEJetuLTmBxVJBXfshM9echYaJKvgUtDzsTd45e9PKHgAQPyezkXZ2xH2i4GGa5iUrDuu6NynX",
  "key9": "4okucWFkeMYkiHsesxntcyvhi47RNFA3qWNJj6ewXf5HKNNG63Gq12BcYoiUpHLgF2p4QanEJLEeAtsv67dfp4Zd",
  "key10": "4jNxWgtdUbJDCkHNtsqudevCL67Y8dY3mwXiMoDRXguhHD36jDMrbFyjtyxzb9E4T1XgY398T8StF7rkqSwGducc",
  "key11": "4yWG78iA3v98L1KyziqkVrk9fJ7JBgAgXiQ1huHY9uN5FWT2484Cpui8oJstmmnA5ZdM2eJ3tQ3RtjvbpwRTDd1T",
  "key12": "34GgdNUpitHXgMbeXXVNxGYovPWjgx2frkLV6z1M3PC7cddJb3C3EPhJTkjkctDFTBuKi22DfCGYjDn3f65EaSxY",
  "key13": "3ADTxRdxhx3DE2rAKkHkquDFaWKkGGwn1Ydmos4FSnS4v7gCuAyorRvsK1x2sEkCv24AjAU9AP8B6Ui9jS93typG",
  "key14": "4ecRm98M7dt4swq2HtnwvMC6ojNZtPYwTy18zULKSjiJfrbNJzZAfG5rQ6PgpLqdALP3buML3eNrBeK8UoVDmNaK",
  "key15": "2f6nx2wni8G9Ch2BRdTBeo8WUuqc3676W9binMj4nHvGwDxxQ9yxzVkiiQSeew4mp8bSmq4aiwRy6oP1zS6tWEUA",
  "key16": "4CpHEgDCwyESMU4ySazWJyeokcyFBZDkQ1R4fmzhTAB8QhjBuKK4pQqQtosw5gpzKbarSKeeqS1MbGSh1xXMdmhB",
  "key17": "51STj3P4JVwWYse67YhMvwpXJLqtC7qUHfAHNHCoUAsMwwWkVT9Eo9BpDCrmo3NriNqGQiRGryLN6vAyJLCFGFsD",
  "key18": "4qJPLxpwVS4A8knGzP5ejK4zgV5qNanzx9EJFa9GvBV62iEemoCVAWeUhzA9CYME3gXqsqUV7pCNpwbvPE3qcw7d",
  "key19": "2GabWJGTFEkXPaJMCJVoV8ywsqk1h8JXWDRPBMDcbMNJTEunXXs1m8CyBuZfcQabuYiydtz6EBs78T3FsURayax2",
  "key20": "5nmCb7AJkFShNR6S7qL1UJ8txV4Ssc6kiXaT2GqNBYADE82mkGstgwybvdPXiGPZ7WWjqGk4rwhC6UkivDpxw86C",
  "key21": "2ZA2ecM1zZp8ES9vm3Mx8jbDqwan13J6ZmhKXaf1ui4UyVTz5nwMSsJGJddxEophZY4K28w3P7fP55C13TvRivjz",
  "key22": "4PaK9boaRhX3zexu6Yde36Dgv2MQXTgDV122Rdatg4WVpbCMBW77nzA7sj8oXBKsH4kT6E6WBjGcZoUie7Kwk4QV",
  "key23": "9DRwKpNEUoPUwUrzkmDr8VYcYGYFSfvXvw2nz1EqRztMxpYiuFtaoYj6XM4553CM9NAsJUQawvWdm8xrfKZoVnu",
  "key24": "3eoqPCVkYCTa3g4KrYiKk1KdqWmbz4ZJWzBL5ehEKEAEbcYUH1wFLhp593sqkkHynRtkUfG31Dnq3JVMKad63JLx",
  "key25": "3yV6rfJCgi3BhuhfJsSBU21TT5AsD3jvfpj8rVE3q9ABPo68i7hPksbrd3JmWJWhM6QNovqTMwJoVRDHghBKpcEk",
  "key26": "3rmXSB9hGvQXQxHzJ16fxx4qVRW54W8tr4yitVi4udG6LGGFQwVR56uomvadHcYptyS38aRVDDzgRjhS15ywUQW",
  "key27": "4tmdYE59EXbcfYhghgSJ5Agm8ygX5WnpxpNiS6qtYLk8XHGpX8MEi6o3WxNBVsMi4i4K8A7rnfGxfvtBZW4oNjoB"
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
