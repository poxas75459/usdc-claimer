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
    "2ZdFHfyFMCDBhX6eCjVh9xeEDJtBjPPJ1MtjVaAJgpYy3pGAhsYHF8x8TdTQvcNXqCd4SkXReB5fFgDBPRMWseBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KCNPNgFtBYrLEBC1b9NVAewqNsjtrmcpwiqLCXRNWdcXuXvGiBFoNzx92iCh2Lb6sZd48EtBgRjTtuMqMbWje4M",
  "key1": "4H6iS1MEXyyAtW2tq7DP6LRz97Ax2HyxPMyfe8jPPGwkyV6zV9zK3f3WyjqVKgWXF81xvne6sMUhDEKoiktdTSGm",
  "key2": "4a685HuPR15XZRHzo8zbZTeGPPB83iCSUgW79FTzRWukDay3cxGQq5VgrZgehYzuVpVvPiWapMoB8GovZYJKucP3",
  "key3": "V4LDoTAvYE1EgdJGzqHpsW1WWbn6gP9PhBctwrKgVVkQCfCy474St4vVkJGRVJJ62r2HnCTJTHvXnqMqRAPJboT",
  "key4": "5epUc6JxNsoUoDEspmhLppbEFkS56PJsfE1wciuHRAoVpnxqaVhtjCU8D9NHAMg7wNKrtpKJeG7p8uh5S4jB2ukK",
  "key5": "2KaP5E94iXPiU3GGP6Hzmn9u65j7uaK9wVDhxHDEJNHMPc5GFpyCkMnPKZLwaUnRCFKk9kyu9HTZq3fwNVD4WuK6",
  "key6": "59GPNbyZ83K52GxuKK32JCG8mr9Mazy85vfeLCjhJps4YVzCqhUGYNucKtsHA4o2iJZDjeDM3DCMZhViD7Y9fuMq",
  "key7": "4cYtehRFQRzYRvSKbiziLAabZsvkuu6MR5JEHveveJLAxhJJasi7uaQEmyYbrTJKMWygEjC5YSz3E3pAP63EumpY",
  "key8": "3JE9nc8AbDuqRWyMGSyAfmVNjxUXtBP72K1nP3uZ6pW8Rtom8R6WSkVC4aLZZuGuHkMkjyXhroqzPSsBJQow5mkm",
  "key9": "4nv7J6Qh9SdLSnYJ7owYYRtkCY12YhDnBmufkxfSg67rQZ74ZyjTDTTX9LTmyP7eNjM3QiDspqS2Y3EMQJTDbvQb",
  "key10": "4qoA43utkxfV9dipNJZpKj5kv1U4W9CWgy5qwZLxu7J7aCMn2gW67yXN2X3HdUsHE1QtKf2D6YTVBAZBJGj6JJ1n",
  "key11": "36YWZXqyzRx51y8CyzS9Hi5ZmyQ3KNNgqbScwkYkKRg7h3mh8obeNj6PPHjM3tdj9fSkt3ayHcAu2K8nkBDcwNF2",
  "key12": "58w6zKf2SShovNhixYYP7dnjtWoTMiha9wHgLZfDZ4BDvVABJAK5PsQY3YtETsqCsHdEDwyEEGtdqX5WFQbyYriZ",
  "key13": "FzoEUu4wWSXcFF3gPDPSaRBBfo6gqXH6xDmnCRHAnAa8PM3rb7EZT4tLM9C7KdYzke5JcR95jZzn4LypH2HrRKD",
  "key14": "2m5z1ar5DqbpYHdG8141QAY48NXCLYyqntPKKX9CZec3hU4PN1Sv7LWXSbqp7GbfAhcqDYVQzyiYYrYUTC1aw6ZM",
  "key15": "QUSES4MSW8C3r185E2zDJGUuuUJRnsBCXmrw1ie8iRPbnrf2axyJaU141nWfLdE6RJfo6gHTkUwUFPN7chXKS9t",
  "key16": "3YE5G6y2bpcSGZntkt4K3ESefayhKH5rcqFTZymVmFL7vuqnwJzbDbXd5US5j5wdAi3xsG3rnQGGEjdS8iFU64zA",
  "key17": "3i6GuNjXC1UEfmFSgQx7atqtpVRSA9GRoj4NjmhkqkwQSaUtKN8FhXPMmuUVk7NMChQrDVdx3sT5tP916JzgMuDc",
  "key18": "5aKW62wGzHWnDJLy6Jcud2k9KPCczikWCoTZh9E6563mPnq447LWr2Nvqs8wtdEytCUgLjKGT3jPCovCg9hGHjPi",
  "key19": "3Q7fJqsa9uzr9ULFcnLH3Bd2RhB6WXLiN31tdV1jVbNrFc4BspwHXFo4WxWygXawnLEJVa7cH7yMRBsjqhdRo1C2",
  "key20": "4j7s7guSEgtLX32otkXeUXN9aReDJwiyajGrh4L9NZsQaQDQr5MV8wDL9ovxDhftW2BfvmAipHyukK3VxTSNqaDc",
  "key21": "2oCeUArpCmsDYCymcVNWh6cinoyhBvFgYnERZB6vF7KjzctYRCJmaMfBdiAUwCgLHXAt7Crj6vje8M9dpbGoyxah",
  "key22": "nd7RopwGUzigEBKtWfRmsj2r9uRkQYggG41NkmdvMdicVTY1zK8vXXj52vMLPREgbGTvjK8SUco7ytni7PBWGpv",
  "key23": "5ooa9xKFCBERfRhL5Jy47NfDjJf6sG98ZcVvuCPLZAvF3RegAfTqG7GGdc5PvGd2Q4cauDeaYpssjNgaN6UsFmkK",
  "key24": "nhTujfBDX4cN75nkJhB7jFVg9jpnCqRFqFT6PKXCM4jUqhCQZorkvNNaZriRb7VCVjLGQPVZxoistqYkMSqZQNf",
  "key25": "5L68vR8ifRLL9EtEjJSgb2iMF6C7TeUSirvp2aJwfz7TMquehnfD4L8KBvxPK9amfZ5CpV4mMo4vtpFpBXnJyMSW",
  "key26": "3Y8qSsXJEd3YBPa1jnYZhd6rWF8j4rbdCHGXCKrYS4G49UpiKves3FGKGW3jV9AdEsFQiJNdw6ku167RTzgceQJe",
  "key27": "2Qi3vDtu69XCJuexCPRciP4cL28WinFZ1bofFsQCLYb5ZdBod3z1dW2DK9VXZX7kqxZg2nnc9BqiYa4DmbKcga9N",
  "key28": "5brcB8qcECiJCZs3dzrEBS6WWBJ9pKSYeFEhKhrcapnLJB7iMMmeQdAezcaR1PMn7FRVjVyArGSn7fZDtWRuUdRG",
  "key29": "5CDzZn9zTdeeuqqsHr8CTyZdt8tYCci8uvFuvUPoogkEoLgps2ZRdS6cEvbnUkhfwvr6Bt2xPEbmpBGJ6ZmHt72q",
  "key30": "3AdiDigPWkgdkNVaQvXDXGQawAgZQgfNrckANZQEch7AC3qPN1eyQTkDUyE6DhZHnrRwLpXitiZbEfJK6GCPrewC",
  "key31": "5QFWeidNLonpLWM16tDuoi7RCDoCvQdSXsLqJ2wrXGLd4xUAPDSKCnGvun9c1GsAsHmuHdGAqHK7mPR89nMafDdM",
  "key32": "3rMj5Kmn41YaogxP3X9BbYxvaJT2HbZtFMf58HvMaP6t6jumMEFYdWtkqwRdjBKUxeSeE2Mb6S9EvZ8Bi5dCimvk",
  "key33": "5bd151WkxV7NAAgUw7Tdvq5i6AxQhnqByETCzue5CdwC3D55tqTaJrRxY8FE6TJuRxwq5C3VnQrpTHr16dBrMKHv",
  "key34": "5xme9SyroPcwGrLbb1ygUXi3rz1jt4bWf4B8WRGq3WAbtCqCFwHj2vRtSqrCsq8WrPWcJA7LmXGfVXGkbW6owiuk"
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
