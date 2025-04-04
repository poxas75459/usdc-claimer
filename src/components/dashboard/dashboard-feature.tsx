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
    "2zqg2MnTAK3rh3MwSUJcMAxmsuPTGMsQEqmRQtodJYcker1AjQwxEPsP6AF9EHJwHpm4BE8Dp6stydoWs9FyxWTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dM5cJBMWfuUCAHUFWfCK46Egugv2JvvpoPQN28EuQ6jQnsQdXZZnTgo3kG8eNkJbd3Qt1wA97URNYgzpym2ioKn",
  "key1": "26xhSvCLNY5H1tX5YatWuXksB5N16iLWkhrFJtnFZaB4dhYyuWm5L6gc1uykNBTHci728us5PkedE5nFHZdXiVfG",
  "key2": "5fSQe1cwrRwfVt1Ef94ofYutoMTH62TLWHjn5d3kFCKNzP2C4okE9vDRasXhPa6emR5AtySWJdKPkKr5gmZidA8A",
  "key3": "2T3hrcKf8FGjff5SfjCzGDKkZbBZFpVE58yuKYb7duJrBU4sWLmZik2fWVzejkKCbgDEU1KqwgNxwjnMmkzgqFEm",
  "key4": "kGD76kzTJmiwa4ff2sNZjArnK2LDYJny1arkhU1e2ECCKRCgGchrKjD2UzXaQdF4rVAzFhAFWpGnMLwvYA4C4zn",
  "key5": "61Sotv1KoAwP2A7ZWzgpBuAhAdXKyLMbKz1Zf4YJsVBCYdmvF5PcocQLeTWtx5dD44j1kYGouoeCkPkATd6cBvfZ",
  "key6": "226Ri1PeuZ9jbFw99D443agXEW7Vff1oR9kA2vMCweb1g5jYBGEL5UMrj9L6F3jnhupCYHnt7HumCXzfCohim7uD",
  "key7": "4beh9XM5KLoPkfX3PHnS6MT7hFFRJDXu3rqn1zXfSTfcquSKcdMgCcz525GtkTzKTBVrRx83Myuq4qu5LeNjrkEi",
  "key8": "UM2LTkszPuMFQudLXUErdyDT2pQx55Di6TNAZf3pTwMQJi9iaJHNTkhnrkVy6x3GDQAyWRZS3x9QN2gerjZUZrv",
  "key9": "Fk5kyzttWKnDxcveibmuDj31CMrzw3FrGLj6pHM9YJ5rYtepV5978fG48QdSVtbczGb4e3AbGFHSUyWzoueJgW9",
  "key10": "4yK8cFbpwpwn42YpsC5U79AtYAwE3Ksx8fsBu5Z4gRK4Bro39ZEdrT7yHcFsqzwHgAfASqh781naSKgP9fsE1DzZ",
  "key11": "5KhGXf6Pg8J2rfptGYh2r98xKwj7bNrBiy9gqV5TrWMdAQH3Wd9SKug9SyDqe1ozxYDXqRQ9emRDpJQUnNVvQCgb",
  "key12": "4vhWTZ5ocx2WxvxLzaBNu6fN1i1KHhJa72WMhCGK41Ro9He1sWRQN4VY6SEG3EmwoJbn4EhEfDgtzDPFvcbfm3Hq",
  "key13": "2KteXDdjNmipYYKtx2MGeV9TvfnHUZxo5M7GTNiMC9BPDPt6Qo8czzKTHFLRzCEjn3j6AyG6k9NJJYEQmype1t9x",
  "key14": "2XfWoNHV9AXS4RyftSLTVH8j3BLgP1yMuYtFPrcaevJSZKfE1zREZkVxZGgVxE3mMiQ58dqnh2zSoUVUww9d39ZV",
  "key15": "3haUWFrJxYsY9BJoVBuzRwzFVpH8goPhoYJiuvUU8Z6YGbdWUCDBnXZJB6MXeEs3D6LdWF7vuTPfNA7pXR35vBDU",
  "key16": "4YQoMnJMuNjQmXonzfAggrqusw5ehEvSrKDJjy65vrRDfvsQqCqvtTDVC6KTfopP9cYayavWYLWTTgWVBQM2sPMC",
  "key17": "1r8zeQacRfxummWt1ZGGwfAaYZQABb9mGtrtifibgNNFfuP8nzcS24QkpJkhA7AhXc1zQeJ4H21WAXJKuR9yB7J",
  "key18": "23JVwbxmeVmXKyEQuYR2pHcG6tF523JCTLmycCCbR3kFxEbkYtMorRjhXQ5cuTUz2WtYXeEPj3K8aJP8B914kBNA",
  "key19": "3NRK1qhWGxvQoDTKw4vR4NqfY8sn6Z8opz9Ri2GCACkpHWQkFFBkEHcuGUgRBNgjeTzUSXkn2ac6Eq6sGfWGdLxz",
  "key20": "4R9e4oH4GuQNbqWFULzsTG7bc47TvJKBpBLwxus24Z8pDRGDHZZUh5ULEDu4REo5mL9NHK9yVVssL6KcsrouPKYe",
  "key21": "5n26v8pLb3SvefUbnt5Cnv9kHpgZtwcPGraaMxBiZxhrfNoqmWar33NtifL5GtCNh5ftvwmMgwQpwLiH4Jk6qpLa",
  "key22": "2sStN66HuEUVvhFPfVPrD7NRB5A5zZ8vQTsb7g7zdW1mbquuKYD1gYEfJrSdgiiC3BxcnVZYRZcrmY4L9n7xsJAr",
  "key23": "3BYXGymqiEAMe9Wwwch3p3SDNtJfbURBQRpWz6ZPHoSyapvjoEAT9aohNiqdhAzStbFNpexAmLZr6AwNQZDxgjRf",
  "key24": "5uuoHKb2f3EguGQg7P2bCueho2mEMEgcoFnCSGpDeQ8vmkXRLQgtBR1BDLJHt4yxYFihEsRMDgcNto79295WidJa",
  "key25": "5tDfYrAtUov4Hfecq5k86qRuqsvbSrdWKMkDK2gkoZndNwzxLN5iNpQmpLFHCBpTUMekQmSxX6fubEQhtZNbXr8Q",
  "key26": "zJoukDQeTUqgTKkqDnTJzidNASiDKoRFuSwm7Sdor2QkXVjZcJqtQZtDN45St9gcGhL48Bj9dDWKUbz1eBsKG37",
  "key27": "2ZPu6sFoVK6F2MYrmqaFvYovdb2Eha8YRmHJWiqE2fejEXdqAPcy7Kvmg1BHFbFVngzHfWMHVCZGKNwK4TrHq5D2",
  "key28": "4G2dN79dxiZqXNMoEp8PTDqNWT67ws5nX5q2A2jNeoEggD4N73dXpbXXeShHEyghHpyW2pVGE4y6r9qEzHAqZUDA",
  "key29": "V7RFoxHU7d3gJtymGkhKEJ5oeKGQMCsJysVF56rDjMc8AdRmREczgRFnsbx7g83CEo5WEg8ZpQ4qZEUcQnzyr71",
  "key30": "4F4ataeNm68kUQZTEyP3P4RALHT7qnQ1QFeiUBm3tnprwv2naasrtBZpwoEycubYbQdWn6EwtDz9KsNGxNjcY8k3",
  "key31": "5Fruq7P55U4zY9EJ9o3dxaJCMUYpodM1qyhGDbgtNW9xZYyWvK1ZrEyP92DEA91Atkms9JDpaqp7qNnFPuLQeEvh",
  "key32": "33hqTNTjq1jWs7eQ9PCSGF5zMLcpfWnaK9H74t2rfBeWyMz5AfsEc1rgbGsumNfS6pA7zS4KkJafwyyWJc4nFTkR"
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
