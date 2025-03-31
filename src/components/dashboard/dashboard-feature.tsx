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
    "5KLqrbg9AkaYrvvWVepRbFvYfkKvj1cZyZPmb5dRYCALiHoURa8FQRr4z3bqUYRZdk5wm4b9SADi3HSWXG8Uv9jG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mAvECtnfNt6buZupe44cqasuUzrMTTbmziGAV5w6522WS62FbvEw7AkjmtjNfXZvJmDcDjxu9XvG1oiZrXsBnoh",
  "key1": "4TttewBLyWpjnuwTUVuJo9SGLfo9WquZbKVurXW8eYUmcxk7eHADNQyxD4kDhKU5WMccGooLHcDmtvSMUTVru5rz",
  "key2": "2HXWbQrVCzxjj2PAV8umLiavB5Z1fJiS2ohhQxeqrpxgUt18aqXykWqv5q9QdcrswvYHcP2ZUsdQWu7F9b9Ci7mu",
  "key3": "5qxtZeVFp3LaEhJGCok6AP6FrZgeZpY7NAeh7f7YCPugjJaLdsdWmun7ALY1x6oF1Z4Qs4NBS4wGEtcLpUhKMoWt",
  "key4": "5S6FVipJjVQi8qLAqoWrMYUCZQm15vDkVQpiZqnMSaoYH1bTy1uFCXFo6qMVRESz3H4zHXZjXdhzcXewjmb7CcaS",
  "key5": "63GrSDZB7XJVhdBz7ankD5MWi2KxZi8yTAPrLRxY7BffmHH3ntnxdWmjzWR3WbgQYYLz8qJYbD75J3EGuAUQhsZr",
  "key6": "2nNUEUiCDCBQR1SqzwVZDMtrEga5L3cCRDvSdRHd3gHh435qYzhqTXcp6gxP6DrSd9qK3oPQbNk1AAyeAL45NvxG",
  "key7": "4gG938P2ffeskXFKqhyvjxabsV3Rbg9MNpoXE2coRtpGUtB2FNpVTRRdVnBwnquQDZLHCKRABr8jeYLXnfj3oXzK",
  "key8": "5E9iUb5szKdF7qwn4tDDsvMWrHrYzy6EU4wmUPnp6yfcwpo6zGhPvQJSKmXaxrGtwr3zvQF89v9v2JtrjTyBr24q",
  "key9": "1oAa4LbB8Vvb32RZLjD5HMLZh6WF6cSxom8cbpf7kYwrpDgqYkfGqd63Pgt8DgsDz7K3BoDdd4rP3BLfXZfFLUj",
  "key10": "22PWWA5NJahKWRkzz12qxZoQ9JkL8rLceuwLcLpbJQjB8D2DxXSXTjf6ZQjtADGoAt7YWD9PU79uRB7c6oHCEDM5",
  "key11": "3R1Vkobcp6VsxdCNnWQj4Lrveq5BXzPGMnmSBFsChy2tn8Lqz9FvGhZD7GCiFL2KsvL7sSauqFnPEMALnCvtZ6CZ",
  "key12": "3616D4Uan8evrCKsDUk8hKL4dYiZcQwqNTH74RxRKCDW3CviqsJcT4rSxXcHsE7PeVJgCBKzbhJqMrRetdGCAmRH",
  "key13": "5pNuCq8JoBLb4gZQDAgz8ZTKjZ31qHkABFEpDpzi3a3hPUbURaUuGR1K1nyyUECFgJCsQwB6xHHQAM6vAvWBw8L5",
  "key14": "65z5rL9TbhikVyBFNutE5KafMisugTCKvfVXX9cueX8FJpHn91SZKFrhdiNwYPcSALQZRB8f7m5bfBcSJcmq2KZT",
  "key15": "5TF8CQS4ZctBtPE5jBtnrk5hpTHE8bd3Y2S2GVdGeFjp9sNeUXG6XXcdGQaf3adn83sVhsfNrN6vpVMHduoRgjgZ",
  "key16": "doHCHpAaUYKzMNv2MCvguPrUu3Kq6YeDVjkfRTt4Bu4rhpZ6TWdhUX4rAzsTyVfD4N1DNfGHyXwNJMWuZXh9NPS",
  "key17": "1RxKcPrfdTQN78scd2eRuSrsqsBHru2bzDsAHUoJHLfzaZjUoaxSvqDxiWUAGgihrpNtAzq8p9FaF7HMfLyS5t4",
  "key18": "2mCf3AFnezqW7pWjSyetPENeHMCcQPDADSGyZYG7cVnueERBSPEMgUVC2ehmCjzcigr974xyS7oQU4KT82ASoLye",
  "key19": "jxFVqKnSGKq2UkmRN2YpwzB4V5XV9uzF7wAiZovLEa4B1mscBrBAiyuazrmrvb18VKZbKqTXgt4epjiYzpB4Atm",
  "key20": "62Wf4uk9n2DBW6neVaiL7w7rfJjrmTuYBESA8kyQeGG8LhrBcxKtD89Jg4eY9cveut6uqaapkiiFyiTsKPQiTLyu",
  "key21": "2hYpvCCDU5o6LqyseaMCJg4SCFLPMizx7AHEJdM7BMxQvZ7KHNKPZWgsvpcApdvk267yJYXehWrCzo71Fqz58Fhy",
  "key22": "5BoMRiV94oGMSrTqhGYRnM6i1PSzPhs8MWGhpVHt7jn7nYFUwkd8rNCxpntGUF1Vd5fXsC6N8Vv6wzcSUaEAL2a7",
  "key23": "4Qod4SVyPGxH4r2kwT8behKViNAkDw55veep2XhWgyVGnMAcTGKkoJojqFmiUzwX3Hd6sowufhR6vD19zpPNXo7r",
  "key24": "53RUeGaQ2e7yMnTdPNei9b3cw84pj2R9NzfSwKodYexZYkXPJ5Xpoy6smrVHsPFRG2XMPyLTgPoLAQYPwYNa6YKG",
  "key25": "3rFZKSS6iUB81UwkHyTrcbqxUzQiPKA39rLCPqGm67i9nWZDaSTWG8SjvZSLywNuoBsCAm2EAhSfvemrTtQasLYN",
  "key26": "4bmymdMyy9SeW7oncErK9Kq9tu4EHzWmGNUgxsFgR1bRXSn3FKZwrtARN8ZNi4YH5WhHw59MN3qU9KohyTDJizeB",
  "key27": "3T6q8oZMKrraZHd44casHmFfMusfAyu9jCE41wKEfFM9pmSqPk6hrBJp5QBwv4XmPeCx6pgK7PUxcwNkKezc3TMa",
  "key28": "5wxsm9Pf4PDyw8Dzf9JxqNoh66SE2JH6BbaxK51Wx85uhnBQKfkYJgUhKWFXvRvzcDL4om2MxUKUGpEWGsgLfvLi",
  "key29": "4ncH6TsfPS2Q4PWCCWo2LsMTwohw6Cv1qaPHdFJUtQDgeH5tznLeBU8DzcXTteaFPodoNV7StuTxLcPHBewns29i",
  "key30": "3FeuGg6f5fLMtYhSPstHabRbrQgQ3MNtQzD5SnxwVYhbh9Z1JS8vjKkggn9i3yYpXbktG7pVz2uAehyhXqYmWmMK",
  "key31": "5wqAVtSRbsX57tbjR3XkjCsuLMA88ezsy2XWRotuFcfnYB3bynrzDfNUSX5DHwTr3hzSKyeGgnmLTKVRmfYaFUY3",
  "key32": "5XxUX4AWKTsx5i6arB6YkHsz36v7uiyy6dc3s8juvh83vrb1rLPLq2AdzYE7JfK9bN2BuM4chc53E33p9oGdYqq7",
  "key33": "GAAz5GxFBhFLmVYf7q146EEjaWimcU8sXvkAutHqnDTNTttb1ZaHB8E6jn3pWNGyb5h9uwZJhhinW6hgsH1nwyB",
  "key34": "XH32UYHMXSwffLuwPy3i69XURp7H6GvmqUE14Y7XGfRMZTJBNKmz3GbNjSJchfJoE2tNmPBCLhpj8BB94ATikVT",
  "key35": "2v5yCcFZs37QwekkkybRr7syMruZtW1LPF4ShGKFTBCQytQYrFi6egrWmTGebWf7W6tcm38iRVszMrWGGq3ANKk3",
  "key36": "5dwfEAt9x9KvdP8K1aPyydtDUHVRwrMufqKNH3kkoB9wF26zL5ozGdgU7BKZqvrXu1JWSLkptPaHTr7w2JquKvF6",
  "key37": "61ntDUQS8Mnj6qWcgskT6dcnEsVbdefTsUq939a7TG5Dt24TEyPJ8JHAUB5cRsJmJRYjcdkZtzAJmqLTmBnWjQ78"
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
