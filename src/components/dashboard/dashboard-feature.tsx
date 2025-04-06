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
    "54SfAdsbMKLr8wWmcxsuy5yjqgpN5m3QRGy1xa1ZbFNY6DA5hE8VkbEeKxtueoDTntAPnKVN5yRHU1Dz3Mfk5Aon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iYfujeMUw2RC4yoY9SiaKJxbaHnF7pTYmwXo62R7YoNGYttkbqck5LmDtccVA5WGJFZUyd37DDAf8ZazquFxqKd",
  "key1": "31nRSagdgxFs83sVs2EqyTeATYF6scVsZ7d2vcCPUqsVpwvThJSLmgrnDKqpGQc7GpFzQMixFt4xDgWgwdvA4AiV",
  "key2": "2ph3H4RJFMQDdxmBLESseLs6bWUBfya1HJoSkZFdFmxMpxkAXuqokS3AuLAk64uKn8hj3WxkwwG6d4YDKYmMWBnD",
  "key3": "NE2ZPEVQYqQ8UxbbtPPoyrWjmsTDidFAphYvBqQ8C5zkMjo8rPsQ1kkyVahdBUSoe2UXgifKsF6ytzRcjUu8N1x",
  "key4": "5KjvGa6rj6psZRHnjhvG5CCFqLHXaB4qXCsCHfFJ6UFdz4ScRwTbzByBRaygkfBwCLemFhEaeTFnN8fzUKu4Wg2D",
  "key5": "3mj6WnLpGStPEVqEANsX9MLymKnjmkn1bdVAHTsyu9jJUmL8egohKCUdw3GMaW4a6Wuq31cA7NFsVygw6jJTrDxQ",
  "key6": "5a1UjnEnBB3CZXuYhhEs6o1rdG9u9Z68VtKumSPgsG731TeFp4ZA9qJZR7Rq7SkFkPwFjuWo5fxjjWHMFYHWyEKQ",
  "key7": "3H6vZqnjpX7ostfpQExkLSgkbVJESbbfLNpDm9hEjXq1qjgwHFnCqkhmjDAvwMdtVJaou3iUxC3Wy7sPFBFXiko1",
  "key8": "5qN6gfSHMuWPN6wQhznSymekBvMFAdrqm3H4XSDCfByeJM7tvpsQgSVCUQaY63YaRjReS6CErWuHKE5bUi2KcpAX",
  "key9": "mUjQP6G6ofSAwddKa2Uox3D6ZKQhmis66R7CjZUNCozDTcyX1j5qP8p4wk12WM5SPU4U2xbitxBbQ3f6ZsZWATf",
  "key10": "5ehDRez5r9MkZCrRjMAYLGPx8DvRZWRNSzSY94NtrtNXoXSkFeMsK1fc7y1qTDpm3Bj9zSpXKvgRiw61prk5fcVX",
  "key11": "3pJ9LmLZB1zvm7weSdMZFYJ5rap6mDrMWfsLBV13JxWwDXN8xyGe7YRKoL7jnSKKqVW6vM26gTKkb6HFTjS8jymo",
  "key12": "3VYW28qv9xy9c1mKLRu729TpbVveZu5upjtLNEFMvSkGZtbbaWVRv9psbtxWtHNtq8tbMso8imjsdV54gRy3L22c",
  "key13": "2YzDgFgVPfMwHump1fLdhjYqES3ASr8fwZBbpNaAj7Z2czb3Nwri6RubHAb7xLSq3JhMbA9s6UftXbuyMk6FtThq",
  "key14": "wAdbMrD6z19jeJyhJ6XA77c8jtNUdbCP6H77CrPSkR2gj7r7Nmj6egGuGuDxqoVtd6X1VqM2zDv3v7NkPYFUabg",
  "key15": "crgxStd3frrmt61zZff2LdHpRSnwqoH9pr88uYFv9JWauXqykeysK1EwEWS4BkgeWTMWcYjj4jEM5FQLH2mpfp6",
  "key16": "43cRkb4P1trxEiHaQ5vPUezh8Xt9HyWBiKfojr88M6Zn3prtzgR58a7Thwaj7n8TXTC5QCyBdjiWC5gxmETz8pMC",
  "key17": "3kBEpZ8Le6V7b3MPe3vUy4YMw9iXdjSRgaDWiCcaivnPc2cpdoiSvaSccnhnk75sUkj8ja93AhkhLRRd5t91EANY",
  "key18": "MFjSBxbdSg8LFPmchYd9nmL17cxRDFsTxjPrg34T4uZzCWHi3hnV325yFomDbmuSe6gsqua89YjNo8h8sRifssA",
  "key19": "4aD5eePupMm7Kx8NnJpU2PdjDmAvb1hweb7sJJJjjMYugw4Fou6BwgNL6k1URUNwgc9APfvhRHxCsR231FBv86YS",
  "key20": "TJmTFXDX1E2FLZMist6vzwbTnTThiTwgrR2i7kE2Zs9UGve9sgVv4QcJ91DjwctEWe7FwW8y5UR6FnBKGzq6mPh",
  "key21": "eHZjDx6f4JFjXnAdZAWhcxkyfHT95kYf66DEME1ZmvkPJktR6DUw1NaWmjis61TxJbgH7xczvHme5sJofH3Fd99",
  "key22": "2TuZWUaLdmmY44MM7YVjd7TH5zdMrXaKFByMbH6FZY9owyabc8ZCKLE6KpwRD2YhcQ1SjZZ9HikJsHs8BR4DMmcV",
  "key23": "221Godn1yqwVpgaTKctcYg27WdMmmT68WVd3aBrNcY6rXThLQd2A6JbwezYRP3Yb4aXeAhtnBbp17vBvw1sCr5jk",
  "key24": "28qSPavjzgKzHp3QVLy24K4cseezDNJfv83KKUmrfc3JZu9XgSnqkvs336uNXMcN2Grey2EEtaTHUNoV8CABB9Ap",
  "key25": "pe2wwZrAiiUpcjqgupzgqmskfcjtxjDZittNtTnw3gogzkS1kikgbazqCCofD95Vwmsc74RnAqwR9uPwjWHJLep",
  "key26": "2RtaPgBFZt742o9DVAXb6deTo7ajdC72XwTWM3zcKB521Wqw1m8Gafb3GUQMaJtm4GsXb8r13yxKrtoQVaBcoXjg",
  "key27": "4Ym51Td2M4SFXFDAR1G7sjfSwcUAjfam29FQD9Ht2dMDT67aXNKibUisLjD4VLn3Gy3VT8nBTAkDbY7VA5GXAhBx",
  "key28": "2LhW3wbspVnwCFNqjAbekXbtviMXatrMhrFx6xyQJu3y18vzrXdDFS1Ai23yCZrxhRi4Lm4tCaJ31zkmNDUZczwt",
  "key29": "3XCNCh57DhAHsgZzk8zkJBXPJygyEJLdDSW7M4rHGnnei7dCF1hHKPGA8MY9RogfKYPYvHXeRpdQh3o89pVLhwWZ",
  "key30": "3C8ig1RR4TYnuG4w4BLbQQ9ZGUb9uWZz1JVfr4TR4Ji45igkqsBNBLJP3emZCy74pe8tu9QD4TQJw7EWU8E11bPw",
  "key31": "2Susr5nNRQwSNAuJAric65rFciHLipK4ELQwHU3AbehmXV7PWnYV4iWRx7nJyiAgKZbYz4PApVpbo3fpWqYjFn4T",
  "key32": "4AK1FeFsWSHaSAzK9XrvKBoKcypRmWMRdaBeXndetcthBuCGL6XqRzCBQWxvtjBoWQcKV86sfUPbUPD1wjXrgcmN",
  "key33": "4p8eYxCdGZ9h52gyhcM5V1AyzH2zYa8yigwNJQNWFnaEdDyJGKAMDPeSTkf7nnRkNoeQPUh6HxHDtsVuojT7QiYT",
  "key34": "jyhPtwL1hkRkupZFXmc5ogSEDFCzhAXcEBGEcay9XJYt54gr9BGyE7DGMJbbtDr5vM32vBLMxuMgyLwxByN7Sz2",
  "key35": "2wr21RfjoG3Y1er2s97ioXBX4YsFbpnS9fjMDUJFRSeZ9Rwrng9WL3xGBE8w6uqhWE4utrVQ2VLSFFNondjnFDhR",
  "key36": "3ARvzcRueBfzZTMmFYx5DkG5igcT82XWoK33g3tgDBfBiQU5MsQ1aCKYoZfW1EpDpxZzbx8F87ny55MkJun8CE4k",
  "key37": "3dJBnwVm8EvSeuDje92rDndiimQzmcZqXiQj95drNG8tS9aW2nW8YJpNNxo8SqQ9dd9udPDvSEcCMMSD4BBsTaR4",
  "key38": "6774J8ymefz6WVP6EA2BH6YKrrv2YYv9sH9c8Xx15YGQJK4NNX2Ji8DSPwAK8V4Lqty6HviTahUwrSh3Nsrp52bc",
  "key39": "3mQVBpqDdeApgMSTwDHCPzxS9wh7V5Nt7hgNebUGJgjgLcukeg1w8ZQzmvQo8tKC2xZEp2Ps8WbYYJopKQ63Xqfu",
  "key40": "NFpabuzMq3oVr2NyYf6Zj8eT4Trqt8Uev21Frms77cXWfxXr5NQwzP1LfRpywA25gs3g1zZuK6ewTkaSvuwruoy",
  "key41": "4xgtRabobXFGdRbunwrxJ46au4mn4xD8yLdn4m8gQG65gba3HHroLucdhUExsTwMP3brVvBH8XSiaZQoXigfokTZ",
  "key42": "3YddQQvnJCutcDveuHyJX9YYKdjtGMp65rAsT5Xkyh3ALvmhGxsh7jF3ZvLiK8J4aih3eajtdTTbv9nXbBCxYr2B",
  "key43": "4PyWm6mh837VjnrFHhXWyLL9goJLfMnfQWfyoMmaEsAExAtt7cfHJkKgm1ZYTauWyNnyBf5ew9YBijwZ3kRnd3da",
  "key44": "361HohxxFVMiavwKhd3ZrBhHraPiB2jr6cFJtPBwrTngU7gT1Hv8JWvY967xe1wMZPbkSVYCG3FvioNupys5g1LB",
  "key45": "55TMTfwpFjxjyCi3pMy6sb7eCSoPnT8my6HFKGner1CKoRGi5Q1xMy3ebSReUZLYTjhFJsBjH48D4c4HjT3RJwDt",
  "key46": "32T65rMbZGgyRS1BGZxNztLdLthGuwtsKwTd3Le8CK6CXCkKPjfWLd8X3SihtiGQUyjKNkcWPWARDFfzfxi8xHMp",
  "key47": "3uYUwbApUsAVsFwFf5qmTc5RfdWutvcEG8hN9cbveZfX2gR4eDdLUAtcnRnMjGk2FK8QhEsT5BTFdMvVHDLvRq9Y",
  "key48": "2xXJNSbxgUdtA5FCZTHUqZ4fu7ZSDSj5drT86FwjdNiVkePxcim4BaREHMNipiB5KV9VtKjHfjrW3LKVGy9fCxgo",
  "key49": "Dtou8EEyWz6HQ4eiCi3aFTVP5w3hcMPiXHx5P3CBL32bduYzba4YvrfC6MiqeGkEoRdXmNTVARdwV1BrgFgqxuU"
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
