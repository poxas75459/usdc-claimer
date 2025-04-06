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
    "3fd5hi1A9brUYynHpVFEAoTZsWKWqBW51DjMSkJCLfYHjsqvTpoj36uA4poF6SpKVGgquAFMozY5BVmmnLkKjVVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u8nPFdZ9G55gQXQxzfvpCrSz7oTX1c8wLwN6MkTStpMdWoQZWJe4mGe19Kv1ZzdsdE2iQgG9ULomjfgywnHL7aD",
  "key1": "2e31gHjfcBRoZLYsjkrkAwkuQMhzb2i47k5Fwy8zdYLTVUxK1kNvD3D3CKN2cM6p9PSwRMgdDZSbmTsDmejt9yCE",
  "key2": "4VUqUomefcygwX37UKSAeGi2RHC2hH2ytN8wHMJET7jJ7FsaVvCmZwUBon3zKeEtPY4xFFXT9Eag1oJKk4oqC3xA",
  "key3": "4n6uUDf6QtyiR3U89dGHi1cwBqXP6shyMFwpnRDgTrA7dkrp89FXKEjbbJJ1M9EoRfLDdmsJ1ptPAsFarRHNccnq",
  "key4": "2MRLoi6zcKfYAyosxwmAqvubgVyespbbv5EbBSvbjNM6kHYis3KMpMz8QCKRku74EPKSfTJcdTYZscyy2dAcQKoY",
  "key5": "2vGd2Wwty99Mmj16366XcDLR3jWmAkM3AsFqDLiUKxcuT4yic71poD9bmZ14vpg3pvMMaQzzPGMXgrcqSJaQ4r5s",
  "key6": "5kBeWdY7Fh8RgB8WFfjxbiNNw3e4WBU7URoKUKVsYXiZvupMxGaRhBZ7GTdoKTN1fHvWtjabtsfY8qh2V1gLaWpo",
  "key7": "4Y689FvRMSwpK9LahQcJ1vTgYsxVr84ybhv5xCoU5gyKmEujFxqL5xSTAiUKZ9ZwjRWJc4vWYxFh9HJK6ARbTanG",
  "key8": "qa4CW8CDjbuujKu5tUiSZPNkkaVPe1zFLvgcRUjdidRLfxfuBT5KLp5nq9yG8NkAjFHmWiPnymawSUJxTJ7x2mg",
  "key9": "574qPu4sqo1kswHdGCUbMAVX4nnmnaN1UJerrw71v1ev4ZLZbYGfPBmRv3S6GqSHQswAHwv3D99XASdJjY1Y3PuS",
  "key10": "2vYHS4upGULJ1sKeaJGQax63GBRMeAh65C4ct5MgZBxygPXxPVebeUnMwnaNU8h7uy3UXomWFsJfpEcGzaD8ZdFF",
  "key11": "3sJxuD2gtPxzEZsVbip8o1eKpfDfs7XFxHE81GndNRKkm6avM56UDyrAhC1F6J2yzjWLEhL2W7h8D6pEw2nLdThy",
  "key12": "4wJztWhn2d8tjRoJRDASQf8PFUR7zGYAQKbc7joS8o8b71Did1vC5Jv7fzN3eSxv9DwaQYkAVkw6qkzcThKzBh5g",
  "key13": "574MPT9sDv74MKQTutdgnysAR61rbMSCQeJSzgcJNcJMVjVnVzdLDrPo1sr2gk1zJZUpyJe2quccdRP6b8vFokat",
  "key14": "2SiyvGJJfgRUCcYAAGieUe7fuaBsPuXA2pwfvRdwQG5oZng4Nfcn5xoeqfbTRgFzDr57VJVNUEn4vE7r5fwVfKeS",
  "key15": "3XYxBuvvsGUjQY2UihnYFoGHxJGtVtCsDZFQ9KmvqgSeHDy6YCpXywmBE7wkSBfbQRmmGWam8rFgYLoZkuUrBKRb",
  "key16": "4oMSn4TsTgqPXvTzq7XUiMvH7GsaA31f6cDRZcd62DCs2iYFuvrzWnHzhonBzz2926wqpmVfjQDEoUrquXyETku1",
  "key17": "38FXDJ51zGsqmsZJDuUHJATiNpXmkBTkiNKCtLKrVbjtu5QcsnUqA4CMidresTqyQ2zEsrbH7EGJ9hUfSNECA7Jc",
  "key18": "3eTtQoKK5biiskCyvcaZwVEz7duAJa4Rvuuv5cwevcAXdnwv35Y6zAHYm3JHwLJ9dYcbtXW2W1sqMoWAE7gwQwaZ",
  "key19": "3rH4RnpsN6ZG5g1Bj9WvRbpupNTb2nDDj4Br7JodP7kwnB1B6461CgzCtmDkAvwdFL181Wvy69CshMDxcQt7j5bK",
  "key20": "4XYB36UjWdHHEsQnwKtjsj5SSK7XjzgkUwmELVHw6ZXGn4ZnFwUvM25QeLvaqrLPB4KFwvMUhKsDfjLtgV52SiJK",
  "key21": "CVvmoNHikjMcqXPWYw9ARqwwnV4W3RBXPB1TYN3EdKbkvy1mNYasbbKSkZreRuUHTzQE4PHd1JJrNB4j2ZBVdiD",
  "key22": "3bNx224gQFJeWodZuKZqsu89D7AwxQjdb5Na4UzNfJpLWofqnHjgszCkeuJ38YEy19oYChLZSVrWw5HbsHY3h63G",
  "key23": "4ELinFTdTF2DhuXJ8uUckwZYkiA79kgRhwoSMMP8uKbft2JGwNu9HzMsr9FedxvzSEA74Sbv1qX1cYXVzySjPLkZ",
  "key24": "5EDck1rLawR88gbdCfrcsLmkCqh9YQj2yf5EsGgWxFXHRzDkT5eeTc7Z3qagspQDn1AC1R1r4PGCnAGgzQLCUWPR",
  "key25": "5SuGF3D7XLgdrTrDVx4ir9pXCoinPjs8gu1PEcoMThUZ6Qvygv72mr7kCXJPU9h4UGxDVJ2xqLxeUMxAD6tifcU4",
  "key26": "3GyqUyMKNnPd6vxyqg51HQEkEWZm9VCTAFTKvxk11dhJToy5zHEiuZnZPPDWnSfRdPKSHQp1nrhXJUC1RroPPNqv",
  "key27": "32ksabKTg2xUoyNC7m969j3A5y6ksAhGZ1mJykKrLdu4eYJKSDC9A4QaMSrx5ALN8Pn2733Ada7gZxg5CgD2VCHM",
  "key28": "5YCSp8jMV31AGQMKWx1eW6QMwyT9xujRX4PYa1oUhkAg9Nvghvw8Jj8hSrdhtjgWRLfPuTDBfGyq4h865iz7h2mG",
  "key29": "4AEDF4evRnWKo1t8DnU4KjQWhC515Z9GaGqBYzKquWrLve2nJW3vxAdtheE5B6hwpwWryDNrkGWrYpe1w8mBJ2HG",
  "key30": "2kks6fcHgabEmCbqU2DqE1SA9oSFHPUG41G1oDZc8mNfoGVCQNFrQUnY9Fqg6NWAD5fJbPGWnXfnSztXR79uEQXV",
  "key31": "2ff4FyeoLFxL3GHUJLpN1hXK83HK4UhmZ6tUt3Z555XyxPPBfyxpvbbCE5fMmhC9FqFvzGkGN6per8AdUAXTPS3Z",
  "key32": "3pRy68mSpoPjP5UAXsNCQf79mRdC2wSciAWFqoiJuxc9a2g3tR17jFozKn9Dt2K4yHfuFxjJoZKQbuqmdiLfp5m",
  "key33": "3GjAQKQF84WmYyDNCHDRJ45oWPmFpKfrXWXfosFjJ9RUrPKM7zqizPC8n9wEuL8zB41NpmLmMatx6s63Fx68imYx",
  "key34": "5BzMvm2mrqBmM2nxc4epvnuu2LZv6gDGhyxnt46Dz326wNTakXWryJkScaP2oeRKZhsioZ7doz6uN4Vq8LXTNa8J",
  "key35": "3GCSqqjvKqiDai1SFcf4TqeiDieUgZVBZF3Fpch8x5KUh4UsBas9D3ZfMWnUtvhoA2ZUJCQcdxceD47JaYttZLbb",
  "key36": "YEb8kUSUPcgzyuHbrrsVqRA69seGmRHtd6h6rozSuuPHoyp5bYjRPoTfbVHUmuspZw1u23hKEoEayc8SbpMFegh",
  "key37": "4aqtR1Cs7cn4318b67Wkq4x4FwQDdtQJGSLdfsHXKxdahKBmwCuXhhGxwFeQXsXiXfUs8vf3WrRpuTBLuAx9nxE8",
  "key38": "5CVuToGUZZo8enZoSxkbzjTpZPsqEf6A7fa4C4rLABMmFwrXy94chFBEE3fu4K7diZ9KRX6mqkTTMkBzBXdPHQfE",
  "key39": "4E2f11NpztZEyRL9Swxm3NAdMvxfkRUSiiR5xVCXh91xragBUgkuhxUrB8F7uzL5kNV7QMJktfWPyvYLojncTHAb",
  "key40": "3kJwJUPAPvoHShLKNsC85Qjck2xihf6qhoGnTzfqoPqDZNjhB6uWNjdfPd5L6juHsB5Gue4vQHKq2URNZU9mPeA8",
  "key41": "5766LV12QfQGGfqcfBNx5xHcfPKaU2QPRwFibyY8VvaZDop2CdTzScV38K4FEDPcPgU4o7CxiaMP7PnGNFhpsunG",
  "key42": "3tPberReziHNgnm2AtzmtEhgThjWrRtJTRHBr5JePhVK2BhArG6Wq3hJXK4yNL3D46CgBAWwj7V7qCfzcaXiNr98",
  "key43": "3hmvHL4ukDzHgsSUhHv8DtjmQY4cB9mbfJkhBErAmNpaBDf2P9yikJkvsgXgYn6nDSThdVDFfv2oestALocaKbQR",
  "key44": "3mweJ3otFsJVz218defKPfzHXxmiWqp733axGn5hTTMeEbRA5kQdjV956ZZDqc66Z63Gce1EsNW5C1FpwAJDRzy5",
  "key45": "bRreZue18VatSiJ4fiGubYb92tSDFX1YWS1frB4vhpbuFD1eDRvmDpWV9pUFEZ7VgwiZTfFQqfy1fBW3VBgx9KU",
  "key46": "BYC6XL19A7v4x3WS3PeRAuBSiKtzGFkS2WG56kaiHP5vW8RAKucN9L1P5sRdQVEWSHPTH8WwBvnoE3NoiF6WfQJ",
  "key47": "2PZ7rAQE9t8fRPo3K2WQaHaxbCqxd3uawtisrGaWPezoSLt8vxEKwJwuMVgkpk3gsnFPWB2GPT3H558U1LBptFDh"
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
