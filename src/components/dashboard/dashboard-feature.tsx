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
    "3KNzwC8rY1u54EP8uCPANoBpL1tjS8wHHfesbt4h9K948T8CsKghXkSAcb9ziUkJ8wDLqqj7VHdvVP5LgY5mhekH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LL4Byk5ukxoDT7VbjViKD1rfMfCjwUWbJB3TJkKrPYN9uMKedWZ1d38GGorPP2asRvKrs6gPiE1pREBQfeHNi8V",
  "key1": "4CzW4quBE3461Qe7movsVkMMsiymwdmRvrsUsxpfY1HZgvNqozfbHk6x8H9c252qtXXjG61X6GQe9jaKCsj1DGi7",
  "key2": "4ZKy9a2cxDhRncT3jFnvDmgyeSbuMMszTpVi4osNHC6XkBPTnfwaih1MPEJVXRpZcPwWL2Af1rLDXVXwNYZ6oPLj",
  "key3": "4L4cnFr12kZAPT6wFzXGRDQmcHeiZA6ExdZQxV2UCAoxwDWwKkAZHWRAWAMLyq9gEW6WLLexk2ijAPfA9cyjcezE",
  "key4": "K7vVtZ6iP2usj87pXDcJfg9oyekV19VdgwxMCnPUmF16JtkcWauXJbmQMWm7VtFRAeWmr9iwKdwKSHgzLVRYFxB",
  "key5": "q6R67hFY9hnq43js59KSt4M9rZ6MHv8YbJcAsceWhVYWhLttaG6hRUMV6VGfrZZdMBettjHvFRATaBXASamPYa4",
  "key6": "3p7KQPyUZHTiutuEzVPL9zHhRqh1qQZmB7A94y81aiDRJ2E2qbBtrVYEN9mZfQ9PcwvfwTBABE2m6VqmVw8axMcM",
  "key7": "4KrSYoJeHCD6Fp2ewSHTkqggK6aNqQXMRPSJiVnM9GihTixyJcxowb4tXMVvXuHHHQ3YAyp3M86MXxHfUPEc4FUC",
  "key8": "3bYSEkJArjzY9fXvBbHr3yVpULd3XfkNobang2FbweoLZtNofBeo61yAYyEFKCQeuZBDnvVAqSf2x55DX63W1QoR",
  "key9": "4mGe6oAmBrfQUbFRUeiMCnxhbwRVDoLEacQDUfmwT1uT4NC7ky7SVBUTuKygttprmYRD25m22zxZNLbwTmYmwsdZ",
  "key10": "5wdENMMRQY42hagwjk7hE5aqd3eX8N9ZaFQSjAamDG2t7obNSz3EAeQjpCGnHi7j8ToMWVRcZvM64awFK3MqVz14",
  "key11": "4RrSt5FTJ9MqFBDTEPWEDghxh5A5PwoRmpytxZuU3L1V92ZDR1PkrrMAzpg3neYR2EXiwRPpucfbY9XzMCW9Efre",
  "key12": "4CsLNmTNDqBvsYM1Agf7YKdWzwdWef2wXPJv6eoBUuXJB8s5jDpUFbUaye5MdqLBPprw1tTFJLG7E5fw9fXd22Db",
  "key13": "55inANGUU4Q5KcjqQQwxSW11FQQA2QobgcVrJagXzSxk6iQokfWYfYbHAPJdfQWajT63bQsZKKVk1bqNRjBJsh2M",
  "key14": "uvMzwbBxuKjFSDVFoaddiasnguVggTVd4VkBg5EdFEm5cxjTXCSefGRuN2kC9nUmfRxCFQwuN1VDNRRp87KtC7m",
  "key15": "4D1vdF7K1msruPxT8zYVCWvUG676axCjgnYaVZhK88cwz3KVHgjznNffXyoN2k8x96gEiHMZzLYChtRNvv1BErdE",
  "key16": "39AubWygzdppuk5aLxfpk22jgKyn3ASYBJegn1sjJ9QaFQGaP66zdBRCFPxj8BmucVRt3HYbw7Yy45ZAqnVCbSjb",
  "key17": "kuHrvJBai6JV38oZxKM7kC5XrZP4V2x4h6qJrChrCf6gKNSNd28rq4tJRAo8TLiQqpg44LnaGfdV8TGdW63bS1J",
  "key18": "25DJB1yzbByu8DGtCnxF4jThdRXBgf7A7riLVVSjcAapKHH5KwQL6sjNcbodpXJH4fvLHMy52fczYG46txL5bunm",
  "key19": "2ev5gwWepU5rHi9EXB2DKnYXQGSkeqgRsC12eokzrGi42jAUVScUawJ4mY1XXvMTu992wZzgLXqSf1oBEb2kGJ5m",
  "key20": "5kPLmja7F5cHQXTQSWVx8YTx2CyXhYUn8ycF1BpmfioqBTeqMwew4YxPkq9sWZhvKQRud6AbkoQ6g76Ggf8jpjWb",
  "key21": "4uPQdhjonDD5Z2tkNnTyX5jQs3kp7T1iPYV5tgScGpwZwqHLbvKqFwp9gSsm5kAZj3kt5F7qYcsm7wDV1XfBik1B",
  "key22": "3SPUGiTeS5pTPAkU9zP5GGhg2Qc4a5CdNKSSs86cvGJMojvXMghVzEK1U5HrhN1FLKxtDsBWf3y9nKEcSW1NQ1Sw",
  "key23": "31WPVmqwt5NUx684c6ZvQWspjjHei7fGKdBT43ruMwARQLXbihtraMWn1S3ScnQrCowjNLVd3pZDDZzSKEfYj6qp",
  "key24": "2LxrNCLfUc4JFGhFLXLMF9AbWAejoQfCKUwpzJiMwjhGfJ1r7DM4QdLeuFmYDuQfVUgUapPtWLQoi97PvpwUMcm5",
  "key25": "2Vavy5fwufbS5v1btvaGFa1qLD4e2DwAphsHiEA6mdSsXC5BnwAcZ2pksyBfx37Xw5c882X5ZjL1x4R7HeD13wei",
  "key26": "2arCag33WLmBsaJEQbim9gPiP3TL5UgngY2i6iH6ADwQSxnsNu4J3abb2JwzH9pvC1CJtWgP3WvLV1EVuRVQGzx7",
  "key27": "5FjaRgQRa9Kg95YtibVnHEnRjTk7jq1jinBdRk8tH8q9XLfeo3cadqw4eeKpNpd8DH3wwZPscnCNtxHdrRtjZr46",
  "key28": "2GuHmK63XvVNZK36gYzJXMtzocN4WsCgFhy117mcxeTS6a5mmoSBiQLGtrYMKDS3unvQ4AQdoTBy4jzQ4VWBkSYs",
  "key29": "3jid8jzVnynzQxEZaEQ5NfaddgXeo4AYzfRRboGGjSVwEeFMiT1BECE8YsGS7obhm3wJj9KsZWKymxK28kL4Uwyu",
  "key30": "3MuYDZorUv4qJNkpKcG2tbkW4YnezeHBrSC2coTchtDWu6SB5SjoTXzQiXFJavfELZaQgr9AqZXJBLoUvM2QL6G6",
  "key31": "3DWKGjbctssgv1g5shU344uCCjNghKx9ZTbKJpGYuUoFDNekMD1x5ewoTdsGdE9e95zeSBHauaXiQpMscKms4HkB",
  "key32": "3WFets9ijiL8bZHRSkVgGC1e6akrcW1RxiYGcaeScWXUWrvJgvSpvkchgFfW1QbtwBcTo9WfYqdbZSAnP3mwAaMX",
  "key33": "4LZWsT5Dm7CPnoSDGaTmzHoWf8kMptsfBJfRznHxGDqL2suuaZP15zq8FYLLotRHgYfJrRecL9266gaTfXtrwTDy",
  "key34": "4X9srPvahUAwiSh9euWYrKRYfZkPx2c81dk8BEEFFAzTDcd5EvBLd3MkDHLTs8ZnZ246zALBmuAFsC2SguoEtFCa",
  "key35": "5a6S9uEXgLzTTs3St6LXn9nKQXpAtaKQiewB3XbztytdAgYDyExuVJiprutfXFZEeCBaLKiWsuN92P9sG9Km4xPL"
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
