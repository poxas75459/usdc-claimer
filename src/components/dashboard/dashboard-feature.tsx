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
    "58za3xD8hDXL9KKGTB4Q6tmc9rGnbYnxUtDKFdeQQsMmdoGDjJhexB8xGryPpRHQSKvd4y1sgT9aUa4WFFeRhocF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cB5RmDgJY3N9bmD7ecmMPXp3jqKyhTrTW6cYet8QiQktHV9pqjyt7aSc8HxVtwPU97FppeXg67XAikSYj2XeB6Y",
  "key1": "2D1TnTPy9TQ7ep48VP7oBpjDy2JZPvSbiLrkciFcCHa6HzjpGdxibAbR3FzFDEdEA45m6Hz8nTHkBVmMZqKggN55",
  "key2": "618gbh5QjtdVBX6HYtBe6UWgkCWQqk6yyKxYNskusS9rQRtPK3YRYyEgBTks5EYAd3kWpuRpYL61Qbfx9z9rSDue",
  "key3": "M891vdGaLuDtwwsUGVEMUtjbTcNMFhtito8HVnP2GWnaZ7PWLx8E1ue3WnJ5VRQr2vEV57PnELd3qdNC8EsG1Ge",
  "key4": "5Hs3gDsebVD4hNF8io9cj1xuh484x7SJn7JVRKUjqG8vvC2uUd4nzNnskRrkWzsuAzwTwWerTo67xutpmGYNAXe5",
  "key5": "3wEZ3j4FXqr3H7oEFWXvuRvYFdEZ5LVH3v63gzcFra7no7qrgSjizBYL1Yp2cpcQZ4FqDLeeEr3hnoJYTQwGhCDD",
  "key6": "2wU5TxPmesMxjuvsxAYTKFwRkGXf5fHaHU4mfiGYxpBGFvEtz9Rn7BotyD2xCQyjF5pzsqXPu4bhYBd3BdbhuBKY",
  "key7": "Z2hZXy6SWu4AzvYJr7D6bMyikrBj4sY1DxMeVnSkh5ENxqJYHCkVvdcida2NHpKR25vuEtt3cJzAsc36KVHu2jt",
  "key8": "5sCaqWzDEY4f4SgkbFf4LDkyWjpzaM79REwrasKjkricd84M8do6NMv7JYfMTGkj5UTVxBXs1F546QWvwHfPuCsE",
  "key9": "2vkyEe6ZnyCL9ScMvpUUijQVjJnUPhJFQ95UtsDupPcWGBzZdNjgcpyZh6VSLMmCA44icjJtXkxZh7zWvZ5a1Nfy",
  "key10": "35nLTp8jRr5BkajCW279Yz6c5AdfYcqze8h3uDErNPEaihQexctJiYNEnHmBFrSiMjCexKCjZRDGegH2FEw9A9YY",
  "key11": "4uxqc1ENSbt8caR2BMUgLLSwhd8odpmkDrNyvomixBSnhBuDJNkXtn8FKAHSf7WU3mABEtnSc2t5cURC8DNHJp4b",
  "key12": "45oUzqS3wLsWSZrqXmt6qv6bPrZNbhDvRs5QYKAs3HZkZkEvNZxczGec38PBroQYJLFDqzMkwNnV4qa7H81yy7se",
  "key13": "3bCSCBgZWFNF39wMjwxjkh8ogqPsp2eGBk6Zq63pjDTvL8m9pRYNtJy771NfAMi1wX3fGHCs6FEWfLdQU7s1Fm77",
  "key14": "2AesfsF6qeLyn8unrdifHkcntRymKjDPCkFHFDvxMKWxQDbuuMGXcgoowKgi5E7jRr6cLsFJGtGw3sDaxrbyk3YG",
  "key15": "5k2TfuV3ed3j6x948cSvhVMZWhK8qpQNpm8TCUE5KexPV5BiFopnAYLRp5X15ZwjoNsYdDtBi1k6ypxDvQQZrzSk",
  "key16": "5mUqXY2nhc7Pap1KYojNjLcLJY8ZesQPur9LwwRtjUWy3JaBNPkGcY1m9xnZKqq7X97HkT1fYtcfmumDJ4jwPsua",
  "key17": "21BD1fMLc3in9YQM2Nm4q4WsUCQMgp5pQAVS9kri7zFMyznQ2kULBZthaW1BoQdquNB5nTwR9bGh99BfyHnaoXS4",
  "key18": "3ZhAS4GaYzaWSeYNUEKm7sR6ZJwv5RoFrMXVhDjUwzqfwwxQVYNitRkZSEo8QfAgXdA3uHJ28sffakYj4JiciGnj",
  "key19": "JfxH7T7yfUuhSSxe8EM7n3fg9CchnFW2SSULbia4ukPcj61sZyczRef3CjGh7f4bMQsmBzii7hoFFYd4w4CEV3o",
  "key20": "kuvJgm1ftdf3eMo1S9SV28AbrFDxuHtuFWotb1LReMncj1TLzu23ArZcxKXpBrCwQzZ2FAhn8oFrYS2fYz4tj86",
  "key21": "2BZ9wCVKY7RbRz6Tae8kvUhindc2ELDMyehDU3B7qJoATLRTchgrcQGAoBwxmNaJcCz1Mfo15vFXiHpphdT7kbL4",
  "key22": "2LseAqNtBiMgqtkv2pY3hjZi1PTRQzKftr3bex9bYtHTQiTuQ7whZGVWxWZMhbe6y64NTCEvMYbtk2dyP6bxVPHs",
  "key23": "GycFbJ2sxF6bxYrunpYMJXB1qdhxKnarh6U4uYqC4z4EzdXqkruqn4DNvQeDKmc76Gj9tatxtspNtJa9eut8z2E",
  "key24": "2zhFVokS4F8RizK8FFfsc2ELu8Qa26A5a13fKi8kvevsB2qWPhRytHoPaXASWK6uMNfAoP2RJsDiC53jXz5ycKRt",
  "key25": "3ibroFB7RZq6p9cbcQbre9nnPRKciDwDcfzvmdRv1Dpdz8tYP2XDTxNsnwgQJhJmkKSPFRvRmeZZ45gpw3qEauj7",
  "key26": "3zXFv8LcgcDGRWhPT8KztQXWjjtSmANWYED61WCpxmK35TfkNgzd8ZsYiRwZFDEMhonRVQtUWrjpuy2xchSmzTtZ",
  "key27": "2upiTVB3Pj8ctf8WFF99gdEHMu1C3aKHi5R7WuyzcxqMjRmXh7xvE5TkWFxgN3JHmBAzmBKP4hV6Ao6F8Z6DHiMt",
  "key28": "5VeAjAsNJ2uReTnvSDM5Xs7W3PuF8FPQvMmDMKbqqxwg5rcoswNGVpfjgZbwwdfnAuw19Pn8QNk3QkXr1mFwV24T",
  "key29": "DKy4hEBEG6dYriKM4k3u2VhcSZ5mHs5UD7iLywxoqVTr6p6znfpGEg4x6KWX8XtUXHhaKr2zivfpoHogAum277n",
  "key30": "5J67j6AVhMYCBZZuX4RtCD5H3h6X2gPZpTiHgCtNLqbapFmFZydAv4jwLh6vGpPCgHKdutryaHqVBxKUEpwFxpAw",
  "key31": "2cWhMTwWL8oxEamV3USC7kKPk18Cp8YvyiuW268VKd9Ncae3zBaaZPjhCjvHdqCQ5fSWvTmrGgiiAidSc6L7xcZD",
  "key32": "48L7hAfJtb3VHY25CbrQgswvFPrgwfsQh3XjJazQPYwzBQ4Ln5q5xuCedkG3nNXQWsPq6vDN1rPxNxoHZPpUPoLm",
  "key33": "48v5caUBzkqf9YNtkjnRDBxbS6p7HjMoUTz6jtWmiVeMcy6bbZHukf1J4Cp55SGuy8jNbvn21uFfbns2rNpuD4aV",
  "key34": "3x3pgvPFBE1tPwY1t5UFgyH5XzdCWfwo8fkJpWFqMUZ3EfMqQs94P8Cc4N4F82uvgLnDRmb8m6KP7vzVGbPdao4L",
  "key35": "4U6fQicBejS3HjY8LmpKawRaFEXGifJG8PUMcgULDWskudyyz8A9tzN14Fi7yvBTqj5vhVEF7DtmUuQAoC8vcMVx",
  "key36": "75jUpyCVy3JhUpDfVBmhsYv6dsNdcdE2GN55yXFD8StWFTYEMRKC2Ziexw17usy3rXq4xCNeRDCYrBjoKivnqDJ",
  "key37": "4xph3djE8avbs22Tgnxj3PnQgXH9Z8a1b7bu5SuzJQYwFU4jn82UmH81tUHXU8wptNET2szwF1udo5tVoJP568es"
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
