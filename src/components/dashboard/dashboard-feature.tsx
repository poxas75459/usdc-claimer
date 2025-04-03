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
    "5Ca6yZtGVucqr3ET9eDbagPxwjgj4CjCHuTw9LrwysiX83npcdcH7jbvV4mpyfGxwq3n6t33Nb2eTNh3SHxzpcAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bYGiMnbLg5fBGME2MJfms5MnQo8R2pJtj1gbD4tx6e2iGrk5YSd7jmvQ1KmDiKGa76GPaAYE23JntFfb8pjMGFX",
  "key1": "25jqAzosZhYiNzwtcuGA7b295JtrNq1W7yhg852Ae4CxXYiXgXtQ7mUKufTp5GmAeRQmrMfPEiFpAWvN3RcYhK1D",
  "key2": "2o6QQsdW3zosZryi6HRxeFwvCqX9YFmBqmYJwfrFu2jPjgYSm2wcvBKXa1ZCZyjg3LYcwjM1YyqmAbBEAQh2CWRt",
  "key3": "2RzYdoGzqD25R7svyawjjN3oxqfbrQC3kmondzmNTpfkSty5UTgJfvkvw8F46Dsd9JnFubnzzk1Storx8YkSZcei",
  "key4": "4S4NTdd22GwYmKwqVF7nfAWHscfWsLbjnYmukWEoNvvgSTsY8m3XxYn2PoimQXJw4mcTraLwsF8SQDip3sPQDZrJ",
  "key5": "47EhkfYqqj3esHimua4diPhdWwZTCRp3htLzPNqV4xZhgj85dePC3eDzP5bbZqK4MwRYtjNrnkMfSUjvLjSfmY1o",
  "key6": "5xTYu2sjejrX8HjQmUQJ7qZyG3uH6MZ2Ueqd15HocM7X3br8Qkzv2XMSKUkxGJiJJ5RBuqMQ81ZV6Fdj6YfMQoWX",
  "key7": "5LLAMYC1rTW83VZKr1TS9UfqbtvvZzQy67q9D5eAuqjhWuppLUPDB5iuFgRfv95EogKagREWGjmdRraqRxcc6DBJ",
  "key8": "3GaiCEnTNrSofpCQPwTPgxr6WmeTZpwkvr3GbXemAdGkp76BamcGiv7d82N5huhWVV35Hz6Zty6TKsXXAVr35YnK",
  "key9": "52c1MFPZBhD7tPUSzd4qkx6vhPxb2fmxH4o3yaDfvbBJnMUXzyfaGvHvLnTNZXJnKZ3mUJdJms6z7ATN5dYCZJNh",
  "key10": "28JJKXRQrcPYzvkdiWtGc5vqwt9zNhoJYoB9ffhjRCbESYgWBN5EisPjDPsNWVVa6Tx26PrzR9aUeYxtWejzhYEu",
  "key11": "3Jxp5DmSBUW1GNZgpXeUDnqeqsmUpEtjEcAkeQryC8UbARLdNveFFahipoAaZgjvpz2Lg4VFVVHVZjSogpscZha3",
  "key12": "3e7poMpcHa3VsXd9eEuRgabALTpw46Bmf36xBCHP5nWJxyM7ZaqCbFdYmCsab72rdndeAZQusPF3VNMNRsZYc8Lb",
  "key13": "2meS8KyNvEM4ksxMwumHN8ztKcA2D92REjUnSNZZwjBv88wfizJFmxF4RvkiqEZiAGVncKw6APPTP2RaS9VtPKLC",
  "key14": "41orQ5fSCbeSyZgZGJHDWmTWHar3qbB5ywbJ3h2zi3B2DbDRQLyywPTwUXdJdfDJpuMQ7QufGVLArjzB7oakvE2h",
  "key15": "2R7Y3RGMimXnYHk3Y6Xa77UmknBWSA9JN1ZLw5oBQV44KHuqQCNwGpdnGuonQR2eG3BXNunJCfoDAqpfbHhduVcm",
  "key16": "76ZU2PW1VmCSaPQPSRj3FZQmwSwaihTW2cb2cy61KaiotVDuQkTRA96yM9cCpNmMsoLoub61N9dW23jTS1kuQsr",
  "key17": "2XdA14kyYwGJRqm7kZ91ucpoy1J6PXw19Sh8KjhmoPZreH1oNua4BrUyFjEdxcheqLXEGxyN7ng9DfzwTHojJozD",
  "key18": "3XUs2PdrdFrK5xoqpzEGoR8YNJV16fRgfQA9ojTYFczcbsburZGckBiinmEfKfeJKDqCchVHk74QuUJwA1bX81Un",
  "key19": "2LuG1wMd4UzjD8dXdFueC9onDTU2SvCSm16FKTna64dH3cn8aEzumzXDBnxwWbrhFnawoSKr7gc1JzHX9KjsvjuC",
  "key20": "3tK9UUk1VE8xEYKnxh4TjgRvWYMg3bXFug389QPDQT7dfQaQhurvQVZJuUY25ckCRBg576EqMSQyCxSgZrRCERDo",
  "key21": "2a7DyTQd1YteaqQd8HgukS8ZhQmGAYXrQVyonsPrSXL2QQakf3bD4yiY3TA4DRTkATcsyzfjDETRxbdSeRy9Cv7L",
  "key22": "ofVNDvmzYgsQK8k9twLW7onDy95dKTPcJY2xds9pdszvBDBF7vviJUD31NyKZzYPfubQJRMC7RmEAfd56BY3U6o",
  "key23": "2EahP27dv1B97SVwPHJp3BeyNg5e7SdFX8VfhZ75rYNZ7LH5ieLqLzTGajMwRntrUXPgXEKShnyMs5MJuYZRxpgK",
  "key24": "4LMx51UiWAfoSuRkwVTGsY9LPT6GCGHx6sFygJqAqFnvqNW3UFbqpKApJ3VPqsrbiSaF3Cf2KRM64gnpADaoJgrc",
  "key25": "42g67bKkPbtFfBW7FY5QQiaMNWYcpNDecrdSy13Gnebzm6n2jtMPsfbSpQQR4MdzWFwPCFnT1ZnNUibLXSFqbAqJ",
  "key26": "2zWz1HeUk9wt1Bp1X9bpZNtxKJ9YSsrtDbT7ViaoGwaDdWGjibhcs3dU5yQg45fJuhLv77f3dNpQDm5XxJVtubzk",
  "key27": "5Tsn1npY1RHoRF1uRds7YdEBKdBYhy6c8n6qndPMsaGWYWvM2EtsQ2gxmhcyHNABP2NqPoCvGmmAKLPXR11qPLFk",
  "key28": "5NNSAqc4iE1GbUtgBhDfJ2AZZMvjW9e6AmGaWNWDxFgQprFHjBuZea1Ukk3sxV5x9UR29Jb3qEni4vj6J7uSZ2kQ",
  "key29": "2VepqsJQKabUabxYvP1gSVKTjHwodxTuMf9guNfwo9GbWFMLz1mpCNqdvu2MRM5DWaZBVWMbB7CuAjipyXcMKMLB",
  "key30": "21R9ohwa1fxxHBHs78p2aQzxuJz1eSpmEkcSMQd9WdoXae89i82bcJaVNfeVk5Z2FQ9PSJTBZpiremEe34YxGoKh",
  "key31": "5KzmqvU4XPNF6kGA8NFkxju7fDkkb8Avts72622m3fuhh5GJcuVABsvW4zTE7U15ef2rpsyeJKouQDjfTanGtqpx",
  "key32": "45uKJRCur63G2GzYs5qsYbYfJx7pKgRBvYvcB7cKTwok7YtsRH28ajQhN4MbXSadwcGNdSrcYzX3jkmDgHZwHXFL",
  "key33": "36VdZbG1jiub56pniPBF3MEY6VCcnhyCSXdNAiMYB24d7YZkYB3Dmzdw8dAdNQRhyfjezp5Y5mW4N88cs1C7vDPL",
  "key34": "3hBZpySySeUCkdKWjbZ4vqZCg3S3tLqR8bQ44gr4uyghyQvJeRYQfbwoz6z5VEAWgeiRz9rfJU3R9i3r25rN2G2h"
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
