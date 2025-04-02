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
    "3XZmHGEG57cmvYahh8Fmz6BHbAXBqgFjoNrrZGN7y41tY7WmojYe9cSQBnT8FMCLnd82BcTPuctgi4JbcKKZzuKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DYWUa4a6ASyTGxmd7Ri5iJuJDPxChapoqPYScSf56szGc8w5KtummAXAyBUABarHhRoYLGAh1qLgkqCjnuTX3qt",
  "key1": "5TvZUo43N92ZjkYk9UQSaB3jZQPF9ud9ZQG4sfLT6BWuamzvFu3iHte6xBU6rR98oGJLRkzVg9v2VoEabN5U64nS",
  "key2": "3sNX1GCQ7njcNt4cBLmuybRSRKmsiDc1Jy6AnMW2j3w24BsCgswMr37iqKpU8DyjaJHQuNxnoniQUiFhkJyDFScU",
  "key3": "xMSuwtdTzN5gsmd6xANqfog7ssAsh2JFgbPb4zvfVbkMAC34U4PUTToy2o9ZrFePX4WSHzr588WgHZZtTnNSTW1",
  "key4": "57ApgNP1cbCGeNntzUQk6r3ypzsgD6ZUq7L692eE7BjNyi1gLCoXPJpsX2oniHpVMrgo83J4cTe645mUTY7adQMM",
  "key5": "5TPaHfMGuPoARqfk6BbmrwgNZN9Jf6wKY6dtwDGSFW7Yc91RAMPxvp3NphYX6siRUyLeqSc4Dc5g5inqb42hoiFL",
  "key6": "q96rWUjWFxCaTsGGA1nCFgLMEDFH2qZWBQErvN9akyahXgQNpHWtxQTcSgWwDm1mySpzEqRPwQUaaLHzSteb6mq",
  "key7": "3cHsDW5Lhi1BvuZJh8iaYy8y2FWXTEYEBpjPpQLpUurXdpVRnsoAr3pYj3DfcW9WbaiVrLdMnUnJMEqhBwSnpaES",
  "key8": "592sEGLaaGab3WWWYUyGMHKiUS4zsx7xrFgTL3Vt6Km8L1LV1qaX2TtZNodnv95tT46hnw8idpTzqvhm7HLSwAuD",
  "key9": "3iwmzDfCJmZReftCuEdiMEt5og9fVcxq61gNWZRxmQg3Cy5T52ZY7XUh4ao74AJg8YbspTnpd8n4Y9gEwSdWxAGs",
  "key10": "5cBtae7tQshfPBWPo1QNadxgvncLtUWq5b9UEb4ujq97qEEgm2qA67PJwQho7SDbVB6T3pbyr3aBL6s61t2ofTgD",
  "key11": "5rSNG1wHGaqEgkBmv2BQU4wZDhfk3y1CkWYDZxJzLKw87bxfv1y4Gsr3Mh4AdCqffA6NMpktLdQM1n8XACt9i8tH",
  "key12": "4h1MC7V6jFZtzKxNjtf7QscAGqXke3ABgntbwGZS7htd8ZM4ZMs7BYUeThsbsS7kyxvnFW3sqYNhRnihMR743oPN",
  "key13": "3LJwnrpqDk2GdQC2K2gabm7oQvYqPx8SgRPLagjgVCMLmkQWaYu9qdBKJ3XUv3jqpeir8W6dJHMaimxQGTPgrrsX",
  "key14": "5rmwbEwYRkobrTYLwpqemSs3noqRbq4zu94rhXaefJurwUZRhstaveYR9ukuhmncxF8V4hajn8yrBLteKh4mmkVG",
  "key15": "5uZKz4S1HgoGA43hhpSRiWSzMDzAALnKjHe65dCaeJZiTjKDEdwiKWe8qHUVicArZuN7RruLEHqQmg7i5gWWDkvp",
  "key16": "CaCpujepxJw4u2VU5HHmYKsd5UsfXuJn1279n2h2WoyNUj1MeEv7c9Gw7FH3kgLgnV64Ahssbue3bEsfy1DDmm3",
  "key17": "5hVjN3cosfTCqwbwBpKkKiyKhw6eTTBiowLm2qCgWi9FU8GNbqfTh47hAF9QyLVMbohgnVojhP4Ka4AcyPhH5axy",
  "key18": "3LPZ33FdKwAcLAgegcd5kU7SjPjSqRuft4MXKi1k1D21Uo1bGaF5H9ttDpq2qB66avwa1AcYqo514d6DUpPkRWsu",
  "key19": "4wMXK6AnDmc4jXhXsqChq85Q7mkyJD23E9SkypWnVaCDjy9eqNZrydyzEX5YpKbsPeJvDCGEiJvdSPYmUM2WtKxp",
  "key20": "2LvXFgQ8BotEkttHMu6tHX6dH22EG2TEQzTgVdjzb6yJ6oBxCcLqKRz73fo4XbxdjMz5vt7cEV85aBwGAh98xUg1",
  "key21": "3NNYX2kaGV5kDPCTRQ5YDyrdcfCuusVKgtfHeV7MvoJpjuzs8QPoqgFDgWY86o9zWBwyxL58kgyeD8FmN687UjL1",
  "key22": "5TZMpu7Tr2F388kBPK5oWFu4CS2see49zr8k4PNJCCqvCJetFTmjCGh9fmW7LA9XjhkSmjtkpfAiTp2ELVTp5Zo1",
  "key23": "3q4M3o9z5YngjFx2bUZMWGqaaodgLjS7EwQgmMg8Am3aCBEqtvWT69Va46D5yA6Bqaekhd5uGfRXbvjDb13zuisD",
  "key24": "opSfsZsrXdnBzpmRjwwPqZJgSYtXfhzbTyYCWKgrUqoTUq83K9SDu7DSK1yCb7Y2xgzag5PPVx3vvJWAeXa1vuB",
  "key25": "5gT4KxnHatSs8TxR1ESSZkvug5tk9euKV6jijfe9wEqdX6QWUXGUjxk7rWXEZYBAu5BzH64X7Sfo9qSwmQpQb5Kx",
  "key26": "5LHdEt7f6QWE6D8TvnLnnHTGPjh7MQkENznepjD2jxC3FVdVyF7djr63tivgSU98jR4cgZwErNvSuxEsHxzpkjUa",
  "key27": "3iEQHYmnEKCerA4sdUqyJ3HCpDWT7UXTEfr4PWvM6LKEJ76QqS87rnvGWPeBAYsbZZAdd6u9UsT4BoKgquuUF9yh",
  "key28": "3WZTSpAx3x4xQE9gG5HDVKwJ9c1wWejC1b7Gzvmesdqiu5Efib5YemhGv1FKMchVcykSuPbQqUKF3nJCUYDkyiau",
  "key29": "5NF7sn9EFRQzcTNBsEwcbvFFfQcag8oqRNbz57mdSqLNvgzRvRBYb3Z5M4er2RzMRJYyZyE96n9Ypzjg85z2cVNG",
  "key30": "2tcP1oStRQzyeGsCsSxLs8rYbBoYMzQVX2hCJsRqnbJQQPTwLaidx2kNiwCevRxvbUpAdLCKbqgi3etT8NG82BXp",
  "key31": "5wg31irMAfv9yj5nrusb5WiJZuxzF3bY4aMHwX9kngKfwTAwR17vS638LDXRvkj37P7tysyuR4sKRy8kjxDGnQRj",
  "key32": "5VEa37Xhpc57bT2QWknd7MLep46CtKhVguM6uLAmUPgnSBexk5jZi1jWTggKVAyfc3fms6HSUPA9F5cJUc85Wt3L",
  "key33": "3DsjkQ3jwB2f2wHEs2c1wiYms3phZWZKzdJo2CdZeXygHAnUkWc6o2zJZxWnEurPxmJA3MEhpWsAEEDjfaiWu3fg",
  "key34": "5NrRAJTuqBei5A15wGJxiRGTHqyLXJ1QCeGnUg7vW3QhD8MQLYFqvNT1VPxio2eRdVsiXatXacsZHCpWtm3RCYd",
  "key35": "4vDS7tDP5MV8wsBHUqHBQYdFksE7ijjqF4grUJffjB68wjvfTQJKWwbbrjSYp1FBKxEABbGrqoxRDk12HPLVecjz",
  "key36": "sTmdhg6C8Co7UFFqKWSEvVFTZ5h2ad8Ef272htrn4SoRovtSzeBFMzV2nQuRQ1MsXudMc2QwSCV6o2n4TUacpKC",
  "key37": "2Y7LbxaLWPYV5w3sn6ZqAHfboBjZBSN5f4oMr51BASKguTfAX3Ad2LN4BLmLkPgQK4SSPT2dBh1We456BsCWzjoJ",
  "key38": "Lb7dDZ7Qhm7LJUjbmqUGyHSsAPJ12ec6MhfhMtgsMSQjEJ2bzfSGGHFuaP5n4dGGE6HvcNWPWccKQQoJ2g5cCZv",
  "key39": "2id2qqgyBiCZwpxM7TWYdjBNCCRyLH6jvJfuCeqU6iBEtyA5bRdr2a5oorVghj5FhTSQ9ZEFZjGnMnySn72L8cdo",
  "key40": "4n85XyVYFrM2LLvwTVS1KZEuE9b2ff8nreV6AoDnDm2cr2KqZHm5PBBFjpd9uSn1uGV78pa9eQR1UhrqHidKBMN2",
  "key41": "2h5pkKMWbBEgKt4FXne4ftCsz6bkQRWMJPX7niNYZz7sVge3fSgp1VgKFEL7TqczPbVcg8vhrjBMRkjgHE8MWREx",
  "key42": "5nMxD7JrGYw5wKg3pYFDuvPKWRCQWLrtaGxXhca6fGK21ximzC2NnW1ZrS8bpQSCo4bFKpHVk8jcqmeF8tVo8N9r",
  "key43": "5EqbPsi8zthEhDWUghbUUFKWgygMkcjXyZbPmwB6rhTFuYG8Fd9kRzS2hrgJiLgiPWPeE7H84m3XZWuCibQEuVf5",
  "key44": "3DvZwGRM2xv56NyT89UD2zVJH9HuCS3USqMMppP7SZkXZ3o4WHKhgpr64TvReRiPxwpdADxpWpDckYHCJ3nCz75J",
  "key45": "3KV2sPfnngvB7ZE8z82jF2HcgPK7NcHTzxCb76Hv9vr6Ut7AjPK9zV7wYQw4yUS4agqyTVrWsZQ3K6nWzXMVpjeJ",
  "key46": "5Lbfssui1urqi7TUVZnRmrXDYxjZrLo4BJsai3mR6DU39DgGDu9z63TfG1AvwZjm6uNq1EqcfuhDJNcTEDZJkn5p",
  "key47": "4KcZnEhJcAtRXDrvqkM2qG4APw4vEsRSQFmWNuw9Yy5XyKCs74LABEDhfNxQsbmrtusAWkKX5pWfFMZoFEcCWHTZ"
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
