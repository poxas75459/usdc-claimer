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
    "2U1eLdzu1NkHwdGStk1NBfCjbpMzYFFwHsJDR9j5Ss3fTJdRx7RxNWn68J1SFUYhuJRq2moeLU97juGpibqWykkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b7zSosdxyWzwCSWx9BafumfVKM9f9cxWurkBn8jgMgNjnxHjx8NKCzXiCVzzRKAZ2KLyiRmvU7aHX2sHBLEZ5WD",
  "key1": "4YtczdeCg1MHS3xWAWj6XrtLhS3bxT4sbcj17bvPomdCzDhoJFEUSudA4b2qf42zeKtujjxdxZvCgDLsYzffXM9F",
  "key2": "5E4BZjhHsXvQyGg2542ZbNgFhSsQ4p8G9WseLHdYMC28U8CgEUSyPYRzwXTGRGc4VPNQ5CRXbN6icHR9u7FwkafR",
  "key3": "4UFcs2jLKi8WRTstSbQqLgENcFTY4sByGxJmCn827wosCyJRhNe5EFUcQG5vwHHmnx1ufeYCZzx9sM5MeNQq2CoX",
  "key4": "vQ24vcvdovsDTqs9UkkwKbCf9APkWYEG4u2uE3RpgMZVpMFbJj8VrhsFpC1pSczYsyB1KHexSPgT4LU6HwZZYr7",
  "key5": "3mQohKtFpBQiPtn92hEwNCAtwYvKxFpWyrfsLLjVStHScDrmQYKPY2aS1saUxs6HoN9yYbMuPRi4wyMWkf7XBgdc",
  "key6": "5UKyZDhALmV1UpVEtrbev7RvvsP86SWSecfRSStJAt8s5dm7JiEZVKjQQRDTwPR55bX3ijgASVbtAhnygV3GLtQh",
  "key7": "5zcKDtvvR1WbMsS4W8yPVHHF38fDJhgg4LC37QQLzLJAWs42ri9uK9X1qzHSrh1sRggSEtg7xJG8ePsAjyq4tKo7",
  "key8": "2pgPE6kVrKfCvuKnJ6Hj9ckEcvFg3C4zVJe9Z32SWTCAbRmj3xWuCUqmGieMbBBqWtFzMHmL7EZnwzbPwN1PjLM5",
  "key9": "5tEb4NZhmR41YWxUp4A7EHcFQ9mRn7Difv9RxrkdgPUn89SnrkYAYe31Dh239Z5dKtLLExKyvj57VGU6fDieKvjr",
  "key10": "JcXytffX6MHXaaL55B2Fdckny24i35ddA91JGYVUmL9c5DZwf2FbWEDSNtA7b4bV9BJFQmZnZr1H9NPQJJ92vnk",
  "key11": "5Ce2cQyLoGdFugdhWRtCjztESVaHfZ4ckmYGTKRRQv6epuMVwaQpZjytSSqPbBuyQ89Mq98FdJxhuou4TyQt2Dmu",
  "key12": "2J6Mc3oaNHLnnBVFYEG9eLJZYyEFLPhR3gmKFabvpP8tsfT1jkAcXoVFwGsJFFCj5SHR4nteybXLh9AjKaZStU9n",
  "key13": "7cLpnH9Zy9J5XBThM3Vyz8AbRhp74KKyR9qQ8Eb8UkxxJ6WBgbQr7KeTuYzvakFiaqLKGBp9pDgwmMYVSvnDrwM",
  "key14": "518ZaXzKxEANirxmAK9s8cbwGy4TYfbN28RyzrAku2yy5xAjudryaSGjEGvZY3GBiofRtbVGE8nRZym9QLEsdhhx",
  "key15": "2Aay3yDBFKHGfSseV2kkwd1oa3n9e4MpE7jMEGJVnoQQ5qPXPm2LRv9uQkQT5M8ma2FvnFuaJFPwdHe9zBWRFPHh",
  "key16": "3J9WwrdpWL29drSvHEdaycqsHH1obWvcgPsZ19wtsVYmEKUuxaHgCYuZq8wTxkkxoDtdmkfSYMFPAfpkNGZ1WioF",
  "key17": "3WxoDDcwJ8R7VvU3KvXqk1tW4jzcJj9JdLPGacxKwES4GZt2cWGuvEbKJ96bePLJJBEGtRRFqsXDTfgdwzAXRLuf",
  "key18": "5o3GhQQNSziiHM5nnXQfwnBSvaHvfeaqcMYN4yC6SYMhhnKeavz7AV9hAxyN13PhCwQcp9pEEaiRdjYBY2ozVLmJ",
  "key19": "5ZPLcKiF1zw61CnyCvbTpQyHYt4m5mzksjTBEVCKfPKp5mm9M9RxsKhZ8L4FEdKexNjnFTpBeBovmucvR6zHFXgX",
  "key20": "4xAsQHAXKBcRqm7eonnV3XX4CsAFV5fvDR2r7yeBrNnVpnPDGRri4eS4eEpnJACRppZKy6Tduv9C3rK1AZR9gDZz",
  "key21": "45ikb5GhBQ2NdKqA7o68Kso5GycGPt6CNVCRVEtAQHjEeodqog3qNtg8bavzTrWLdzyi7GmwfHUy1ScrfHb54pi",
  "key22": "Rdiv81UXQfmg8n6ud3fisADcvLPDQhRpy3PLWoqnJqJFDMkKSck9a8WC4kjcihsxj6JzJSbwW1XcMoRaNcij4xo",
  "key23": "2kG9fR621QAjs9SfaSP5rsQ45MDcA8EsdHaJZdX91TjCXrH5ScLdRhF6xq9nfpeerKMtdvHcPnPy9S8SdCaFp3Te",
  "key24": "4oSaP93foPY4caLkqTdLZ4NW8TKmR61KCMZoaWLsHRwVv1aRzED8dXqXQbTRgr2kw2wNtFWGtVXhpfdpGiu5gJ61",
  "key25": "3tM4bTsXc27qnBg9mi7KH56NPGmx6RwR7yAYaMGMbRCA2V3qzDsiG4Xu4djQjfQfVuHbXLFZoNkbVnUopK7wL58D",
  "key26": "21i5WacyPr2qGZwLkZUoZTzmHrenWQaZuv9XXLpbiMUuPFDmZoXmPckmPf1NZNscnt6FVhiVpgJr8HTjJzddWwiD",
  "key27": "2Wka1VU3EsT2yjopbR1PPVteVcreCXQdAdyc6nRdJZotbMzEhwVdJxGLmMgdgZFXtR3KTvaGjouzdHasbALQqf1i",
  "key28": "2NdC6bAvaQ6MRb5oQmr1ZT8pTp1j8WvKFUMdzfMeL8c8VedzxCwBvBwZXSjGudJ9zH4eCDn1XG5EkQMLNSgSnUBo",
  "key29": "5PSXMBsd7L9whvFXuXc8gd3hMYq3mAjAAkYRmPvJPE5MsFuoSMP2bxitvRLvPGwQUVg9fa3hZrmYzb41fVPUHEcw",
  "key30": "3w4eCbXq7ijsCtFL1qhiWKRCU4hWCWxBFMK2v1PGqpKkjTsADePmrpvcCtrDRqqjtkt5CCsDtNFNRrNHXvyQuUAF",
  "key31": "3YJME3Uv5qHocH4HdPHs6z7aeUuUa5k5ZuC1py2fNfs7imwtpxkc2LtVaQtXvxDjTunc7svZucMxmv3LV6FpdjJK",
  "key32": "3AqPoWFtjo7b1dnP7h7Db2trbVQ1eZs5wQu4kdrdngmPKRSN3P8NN9CbmwAoymfzP6byWfdRhwtRaAXrkstkpD32",
  "key33": "4jCNv7hUcpZx1NXtPVuRF88NFj6cXstN2iespRQoZihm3s2NzMFVRhgPg9ixsHZ85UrjoNbV4YXQuYSrygknmnZb",
  "key34": "4ZARgRhAddDKXwvPp4cpSxuiMJo2wGNbx14pNd9iSr7NfReGu9jMUsgiqLGPPtcCdnyDQvb8w97oqCwf3U9g13UY",
  "key35": "4pgVogh7XvhvFbwveBqQ9BqWkdyPQn7igHkRkULf2gBTvD2nbxmkxm1cZKqdmAH17YQ9jgTAWLTpmzVk2MdP8rmp",
  "key36": "2M2zw1NTuUCRk2oMp3RvKjioSEUi47frrV4V6SEhysyE3R8LqkTQ6trKvikmyaLcUjXpBAaavR5s39DJprdjdBVs",
  "key37": "2wiv9VqNiFRPYcGXkasjJWznTKUw8Pck89D9EjPCp9ZwWaCQurdBbu1M8oivpL5nEd8Rx6UvvLGXjDLk4SyEMF2e",
  "key38": "2ZUYKtseTuhTaBviodBP4bexzWNyS4QKHJ8PetomUncixgZjXfgZkhiSQk5EAupLo4cELZ9A1b1vPKtDoaQKtFit",
  "key39": "4mVsUHu6FfS55Mq5BRZknCiKeHtfDPHU2d9a3DQYngzVJR3QhbuCfcrykkTJ9hx85MPDXXWHpcMMKbfjKNP1PQem",
  "key40": "2smn9RBWQwA6zjchBmGYs4XL8L6PsTWHtYr792mrS6Mh1s2y1Bu8LaSY2AHeSxp7EzGjBU7V2bURSdjyrvG41dCc",
  "key41": "2B9Qi7Jrt9hrnpoRnuaKxiBKua3akEXq2HTiFfaH3VRdE9e4QM3JPGBtMy3pW8afSVsHitfXvtRNHYGWonw4sZvs",
  "key42": "3D5NDhd9NvyF16DGHB75KKFc949vgxvTspqkecpMbgq2P1XAGDgrdqkC913dk3XxpBXF36kAmsoyXF6R2MJMMqEf",
  "key43": "66udsq6pi4hGZnKhtPaRoykNtb5BB9nxNuDVzKRxKNp7A4G8sZUzBxzTUABkF7mVwLZhgz2nUgciARFxAsZtHpUY",
  "key44": "3RfhFFP9rKJb3CDHPoBC5gADRb8vh1eQcdpH5EWBTkyq9DThQUoHsQPqTsnVkDk75hyYuqQ8yfAt5GugERPF1PDo",
  "key45": "4BnNvcxUQ8p1x14eSdkmLtoFiHKkivNLVVjdZhCSXGWNRvmgTVmGuuSySYgaEHtCKXpEEbBWYKG6ktmcsmhthwt3",
  "key46": "2M2qamkjutGiM5LYuHhsJDf3zfBMi1xdRjwun7B6dt3wN65voC78U2zST9AzXfYiH2qhQXZrGxo96ym2YHZCYoSQ"
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
