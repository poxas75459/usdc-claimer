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
    "3CowwHMvTRVDmGE5MHoTBTv4fFUBbavxc39tDuDg2iZqPmSVLHtiThLQR8UyzFWTDnySeGRvua5EPLVRpyc9QHa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fGCi4A8VyeRtdKHopR3wJAPeKtFpEi8bKqpLmpsbdsdLLPckn8U5QUKZM8KQKZiweKEf3yg5yxeRVZdQJUuUhWZ",
  "key1": "2Dv2axTfxpTsYjtG5DWkRz1Q4t7SLT3NBvdPPX1yu3P5c1cKyCtRZsBteiDFoZSV7Z2Z3BZyBqRLEXxAVgWqFkV",
  "key2": "6bB7SHmzUiTJCqhqT7Cw3E3tvF17pDa3rMYFkhPpZk7xz2kDe42B8E7atBHB4SXE2dcaBVs3oXUq3UhZEMauEc9",
  "key3": "3PqALByMRq6nja7nBPHqzHvFZALGnKrCu37gr4wSxHCfExpHSuY8FVqZ77WZMjMYgrdqRtiDACrmKYTXye4cSqpd",
  "key4": "5yqqftz7VS3y7C9RuzegSehpWnHmc587f2e2YuCpLfuikX3MHS4MEnTBhfU3XY2XNp43aiwaSsyupwG233Mgs13U",
  "key5": "53mJdLNPMAsAx4KfwJZqrkAAttcKdDeAmVdgfrkGccHqY4RVF1rrnbv4UnAvZPAjeEwvD23yz2TSWHZn11iMaTVT",
  "key6": "2ZhtHHwU9TVAnvKDU39R1HBRfaBu3y1KzZGTWzC9aZyijvAvJb195kQN1uXLpsbAt3QZgoij3Jq4T6UfbLEjamHs",
  "key7": "2B5mF1Xs8ofA8AFZa5VhKaR7dEbTNaHsKg8dGoxMu3ekd3DquzJvreRBnm6KaMVowoz2hS3RaP4o8kiZpAU342ab",
  "key8": "4t67Sp4hreWkBydCspPmNrd2WUZ81U8g18hSuDsPaCUgzNdZo1RMDm9kpKQ3phwXGV4xZurTfspMiPXHqLkyLArx",
  "key9": "21zJPcghY8pREPuan5wj2H2JGG6f9ZP2dwxCAHQ2r9CBpoMDsKtxnjmni2zSUj3mq8feuKjMrfa29tNR4jibrGD9",
  "key10": "3qSZfCHN6P7LUqQKWmgCFidxamLPeWxKwy5onW9dQiXpwoR23QkQnZpAu9p3hqEz2Ne1xXx494AYGNoiFprRJ64Z",
  "key11": "5rQVmK1cmKu2HBM8FRiu7jsWWgwQs8yibhZ7dLeqSRnCCxLH3b6hJBedDZvETrboGnWzSnqAQK2P6EAbKg6EMaiM",
  "key12": "4XYDVf63c5rV3uWUssAAL8nPfPRkdBVT42WS5TDkWkdj81LwUakoCMYdoqPzbY3ZiqsB56gRZZb68aN2LdumDfgp",
  "key13": "31oH3hiVfdCo2vcE7Jihq6K3137JiyKYCL7d6B55HNRTKK7Kjc1EUycXifPNmuJZEgbgbH79b2XAukSGZq34Yjxe",
  "key14": "5JusjjtdEUnkDzJzW89Et2Yto5uw8NUMAZqJnm9otqXSMjaUAD9kM3NrwZdSAYDvD78XEfWsB4fd1evnthGvMNQZ",
  "key15": "2cbumQaAKezyBWHnyJVdfEmhUaKL64feeAw7BwCaLks4Qj19k5mmFrouYVoQh7VVj8UqYxA2hz7dDwcEqsS2yg8",
  "key16": "2NyBZsRvwthFL4Akipq52sKs7zXosGfoUf8FHPpYjhNtPS2MkwyL9aBzVJ5Vv8YMdfLWLyFVTs2wu2g5WEv33ahk",
  "key17": "5THhdN4J8fCNovXuGPpjiM4J1b8xTqCbD4PHZNz3SQtPsoZ9zm4CyhXpGn8ACJFnMH5TNy5eb5bciDP9FeoaYfSk",
  "key18": "2AE5dbtiwehhJrJpdagWJ5BtZLgu93Y3PMtLcjhNDrb9N5k9g4cVpyufTz8smnjJGhFi1XfErSuSYYr2F6Zfj6Dz",
  "key19": "2r2QFY7kZN9H1tZxKFb16gBUmoafavLHqS44SX3KftR8BB5crTGAbjeDZoSDtBHPfbMzBjgaYqbCuwm2ft7J4oFQ",
  "key20": "4D6pdvv98YWfEJcNerxH8EouHnveQcFPjRu3z5RLbKUSPjUdFEv7v5R82ZCiRrTqLbK8TfZE7559acDqQgLyQ3db",
  "key21": "4M4ST4kPJW7774NfjMtAYTZSwWbCSSFGWfK2VJQZHfgjS543JVT8qaawXWLELJoRLtWNf7m1cay5SNH6mXFrdnGD",
  "key22": "4es8m12xqyJ29Gk4xy1tnck8WPu7FmUVzZ8gK52wg1HfgUGnW17xaCxLbEVvZcMUaUYcQcJ3y4xrZQHLnxXp59eY",
  "key23": "QZhM8E2wUsRfPrZ2GoQU8xCbc4RqCwvhqE1H7M8NV5vhRYf6mpDqfYvDc6xX84S4YUBqvLjq15qXNyLaFE2MBmf",
  "key24": "5fDX6ATtkcuxKua7BX9obNgqiSB2WLqrj3Nrvb8qGp8wYLFnvEfnUYDupBVb1LuCJk2A6ci5CV6NWGsfoBbUoKeT",
  "key25": "3DiCYU4pDJmjNXoWc6hMn5qFFo18nEVx2jEftwxiUQTL3FKZD6zExmpnKsK1aWPi29F6DYH3uCTiT6rATaoq2xvj",
  "key26": "2bw2PJF3aDvZq92mzQezrH74LHyQyKTNZBtK7FZUy7FHpDLTHT8GEKEnaVSyHCUHeE6Yun4Pfg37zajGx1Gewtyx",
  "key27": "2TBQkCGkcYaYGWwVMNp8BREHtGdgfZnUEbKKMWVV8C3gc4Hqa8ez5VrCUg84BVeKpcWcHVXZEG3H2RpnkyPJEYzr",
  "key28": "DvBBgmyKBqWL1adLdTbgM9551HpAc7h1eGQrzN4MAqSq5qaTumuKhHNFqVGi2ztdqiWyqHC9AiVqpwFSSAyivmt",
  "key29": "5oQZ3HfwQGWizH893AhuvpoWy3nXVTA18ASHb9qX1DfWUvvaLKTGET9fmSavn262SwkdfWFesvejPPWgULmpnXjH",
  "key30": "4cMLwFqbdZvF7gGG1MMN6Zm8eAu1VZak9ckk54yW5kAHb68nCw8tsqfG7683zeP12eFouPebUVGBv5kH5cVALdc1",
  "key31": "2iwiRMrgrQXjWJ2TCtG3zkgmFEbyXEoDwvSc3fhhnRUp2dfVeXTikQXLBcG64EWHRyJynmzurRy4sm26fTVQ9fvQ",
  "key32": "65TnZUHTPJkZtQ3nUSGoY65eMDAeQhyc88WPsdv1mFnjyKFhxcrqpC4K4G26quNxZof89BxySUqfgRj8stnHSHEZ",
  "key33": "65itBHYJwzTfExjPerEk3Ws84YBCJaXGUsq6cEn9wLJxUmXM2anmVkmvmt142CLygHzFtBCQp6x4xa6Pr8eyCHeb",
  "key34": "5pzmzpyBvGrqPYU6fmmaSQkKQtSXBMVMM4r8k3UrnXa7sYTUcdF26mzeFwGxbWynZvLMwfrbTVmogNyuhCcJnuAP",
  "key35": "pvj8FECUEN7jASVUZgXfrEKKovafEKFe4rLddZmCKg4QyG9UZf1XyRbzWkm7oj9hMp76xW7r36TRJAvbhZeyE8F",
  "key36": "5EGSKpe9PQfdqmbDPQ1fwLL1aUA81kcy3tVkS5zvifgJEc4qkFQ3XvLfipikTRsa3Epvdhf98fyNrS2HphuGTGW5",
  "key37": "2wNfXfgwXKgwoaR9hQPairQDSFrqbohwpcJYUzeGe6G8FVMDzLLhu6SFEhXm5RXQAhztpjJ1AgpYxPHQjEL8c5tR",
  "key38": "65SfeCDaN1KKNmNcRvUx6Ca7PmqftxzjPuNVgNTVWEw6bGqaspdaNUTo2XjoFKiPN4MSXzMFoXcAbT2LgMVWeb6f",
  "key39": "3ZBjYgGmqZTmqPvmBfwWmBBNJJHp6aHJU1B8QKJkXuzDraUm9aejhJRgKgTwYuD7MZMscBYECbBXf83GH3z9dauz",
  "key40": "3NBB2CsxjFGcptQXoGTer5fjGV1YAs5tWff3JzNAwJvLhEesmosswoXWTYwyprZmVPET1FzxR78fyZoxvFC5rBoo",
  "key41": "5ZmH86aK4KdPDf25AdQTTiJPkdXx2CThgn7vKS9X5oCtkPayp8dKv15qYjzTHszyH8mtr8Jq6Yh67m5EdcFPP6ho",
  "key42": "34KoQ5CKnSYMqkFmrMKMjmd1PQUh7kDYRubBFAiKdedhcLpbaytwEvM2P9jH8QESftnoKW5P16GbSKQPyV64SiyS",
  "key43": "5qE8DLZo1x7aEVJ7Uh8UADXbFADufSkWoVKj5NNppk8EWZheGDLiT5Phoh3kfLJ46e5kSNXYgwFC4YEwmTRrJUvn",
  "key44": "3dGaKHDk9sNQr4PAMv1LKFLEVTg3EJqxY8A1TTXTotgrVK9rW5bfj4Tz1vXH2iZ8jqTggTBsYXp3dyfDsuiHLcMA",
  "key45": "3FFxJh64GLZ1ddFKmxEjK46WxU7jpJfcdpRXeNfaTAmApaR2n9Th7csFnYA5NSxdEiTppST9qdD5KhNvktzq1xFD",
  "key46": "xUx3KG98mfsaBVyrEtQZ7yxsbE4jrg9Jc6mSGnoAuj27Lr6Ca72knvqzeMiBb8mJRd3apZzugFBFrRmBQ4dveGQ"
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
