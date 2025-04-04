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
    "vp4JYdri1BXC4zFzsK7XZdNDWoYvdXaxcfJELDhffnaQhxeRy8XU1xA4cu1YvbBhCKtBu5g8Msn6mN3ogfwSEuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38BKS5uZKZXHk4i6CrW65yzgjH4bTCpFdPAkWML8v6WnWrHgz4DMEpsVxpSYAYW7QQyVG6prAZckvnfgx1Ef1MqW",
  "key1": "2KRRjoiJARxmvgbTNNSLCN7PNDKRHJ77BXpuBUmL8DmSgw9RXHuNYhWdxpcghsGpi43WaULpoKv9cgCJBhfpNFLk",
  "key2": "YSLEVXtNuyXsPodvisgh4jmJyXSDWVduoW4gcB4bJXsqs84MvH57Kt8Q3s49Ntqm2HoyXUJM34whyhqJZdJKswo",
  "key3": "5mNyahwNzK6Wk5bmLwRsa5YrdFWaoKGZ7kRUg9j3vTeXjxAaTdTRaRhGXF9nyZLPfNuZ8evWYtLtZJKRkR4V75bW",
  "key4": "2NtFooGgYS9gk5VQJ3oZy75WcFjvB1oUYqnKfoPdZDasA2mj3279oQaLdXQJdptEudTzEJ6fymrDg14y3gsdGtYr",
  "key5": "4zE6yaYnF7mV5SMTGbBqddGVfr9H5Wn78j7wdorMHMCx3K3uqqzVkvzvEXNtvpPTo2WsvDCcWUPpUN4erndDMXpW",
  "key6": "6GcGqHQ94oe6uEsX5yPL5kYxEMXvhiRbPnCoe4PXnP9Sj7aT4KkBn3XrubJPUs4gm9CdexNBCXHUpNq1iKoUfHz",
  "key7": "mFe1gibmj8qkWKQZPouAPFBbCQh6G1hKuuPgdJzJdRaNdoRs1xUVpPUrMrs13Ea72NLoAwStuxkk3Wxxt5fTvM7",
  "key8": "5469CM2H2uxRTyg6r2SVyGZkZnSrTrSNm2dwXUXU2eBcYY8mUHxoWQf9xXvoRt9UdvS5ZMoDCmM11xAWvpDRAqh",
  "key9": "5jQwe9zQKMXWPwgHQCzofmkM6bwMNFmg6AnFDdxMeoiBbfRxLtM1aXSG8o56PsTusWK3ezktkDnD7USYrFtwEYfW",
  "key10": "qmXbJL2M859HcZYQm1iFbFB45KqMytGGFXxjr4HoRxbz5TFud86YifAApZXgfJQY4RBRsoeuLo47wd5VNHVNKw5",
  "key11": "jP2QrAhZBrwFKWw1Q3gGGMK6fjNRqgDEemaiyZbz5KKmBUFAUZHENHvSdxn4fr9MwZYjEC9aAddTxcQZHY7a4jk",
  "key12": "3aEVeBzdzG8XSv95f9Z8NBQWFT86DaqxzvGf4PrnC5uqAkESiv5LnkSd5EWD6NW6sbvcTPZ6uPhKZn7hYmTGFrib",
  "key13": "4mWU9eqLbpQ61Jcp2vBgLNL67ZgmK3oWrRiQUYfiUU9xivaewSsGFZ8L2h27s6j3ZveCLSTuA6nfLxrqkmKKKjPg",
  "key14": "5VZVHR1gwaxMYTsS3NZPxXHzJ1J6NzkfkTkkjT1tGY3QXAVNycCGv9goYQCpCgpRpoqP2MFfKC41HTVVXk1rSYjx",
  "key15": "4Rv5crUaWYCi4ttJy2PFTA1d31hofkhzZusyZgHSv1q22Pqdp19Uh2CndxkQC8CdtSATDFV8Skri6oSGno7dZJPP",
  "key16": "o3ZZBTLQtL2sauxdzcEhWx3ZUrGhnPX7f1PU8dNGSN7ShfKou1bAzkERn2FWD5xmVAFFMZVWzaeDZuzQBuYxCS4",
  "key17": "oAC2sRqC3puuhuMMpr6xyhqJspcNc1vvzrkRDr4U7odXirEreMzXWehKkWJqXKrnLaFuQLngs1VWoUv14q8yFqx",
  "key18": "4ZgXzgUFDA4mkgKysjQjAgNHfM6yJDNZEd7W7V4Qd2CDfmr4LfPSBsdJnvLVbtR36aiYG6z6avqQTLwa54nHr8UC",
  "key19": "37DBqR7TpNYc7CJm7dsJbyYN8oD4bRAEkFptNWC2Nm1TTWz4kZKSGkm5iSwjjzLMsdQJQHZVd2Ve6joku6aUExva",
  "key20": "2nPTntJgUj3RJS8LJvFbGaTCsqaus6jjZ6Lios486684MPmWHA7DrWLS5bFovJyQRWs23Z8RsUFYeqmSzD27h7FP",
  "key21": "3rHzHTGQZEFQBN4YudHuZMa6SdZq6LguATDPQvEC6v6ieg3oN1pq1Bm72udXecKPmAroq5qFtE2S87u4hu2XdaHi",
  "key22": "2ye4g3PeKHouR6uxvGHr5Pd92XsTfY9KANK76pzH7BwKqpEdijFzPuLyJhYGBho9NFZ44Cs8C3YTDHFMHPdcUNd7",
  "key23": "4Uj4Lq9JoGXgr6u5obEYUvEBnDTgRfdRTddUCzRrUjB9MDUKPQUAjB2mhAgPmb8Ke4vgAscaTp6KEhzGsnaaqtZS",
  "key24": "2zmiU3oA9hBruh3srxZGQPo93eSM9kDsMULveVD5N72Tfjx236d6XEpQgArXvkYvD5zLcus93nUwDxKu65CcmXyL",
  "key25": "2BnAZuAz8zVhjep6KY1FKrQaMS2mssFswh6EoJ6VxMPqC1uPeuX556WCq6YggKZpoa4QYBVHSq59vyDzFCs4p47a",
  "key26": "gT1zZgXn1HirHqbzrLLxf93jH2raFaXaULjyS58FLDXPVdhXPo5F9eyGhNdHq434vpn94t1RWqRgtQDs28xerkz"
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
