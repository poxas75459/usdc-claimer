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
    "B5cy5F5TVJWCgrZpc7Wfq9LCJ7qgBWrMm2uK1X4xC33c3wiM1UGcwM6C2iG9r6vz8VLF39XXrRr9dQQ5PAGVsi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32oKCaxRJxdFtBDCuZZQVAbfy6Z3DhfSgknbsX3A8UT2jCznV59FBxYTrtcJ5S4eKkoo5CCxcbLTboNFqBBD2qb9",
  "key1": "zyLrxcjrHregpxSXSUsMM39zhmbH5W2KR9ERqHxaUQxP3dbsDWiypc1xQjwp4eBT9xHr4hRnif6fDUarUpDrD8r",
  "key2": "3Hw1VjnU1d8ztpzGfMWCArSR4MPmabcosWiRhMhmUGHi1YePJ7WN9Xbn7rP8VdbLkdK9g6M2c3ym2oz2RPPWSw2M",
  "key3": "5QfrrK1dSoDquMHexLqmLv8GQ8sQkuMDr1eWAf7b2MeHsvbrwTtLuqyZbBiZehj1kNRazbZ94qKu9PEcxXnvvtJi",
  "key4": "3zSNiscnf3TmympJeJUX9unJmoxcYnxGgdk2igECQCVjkRiPoZ3FTbTEToCB5E8o3bm6CAYRZ3F475v9QeFcggdj",
  "key5": "214uxShT4tw7augMrhmRe7bqw28Qzj9BbRfXsg8LHJ7i49GThcSRQTkqvGAUYJ5K8g2eVwxqNhimiuF5oCJ4GHvR",
  "key6": "4aFWZp8nhpCtPLArjh572HKhQYu8AxQrk4a6uaNEGX52pwjPoXCPM58LkDiEm1S8rQmHPB5ybPBZs7VAimiBmxkp",
  "key7": "3bK4veAAdaJeBzhBbpxpaULu9dqTi1GPkn6tBnCfT6MKkaCNKxTXTawYLiFB5W9odDwtq5TV67QzdNFmFnVad6ng",
  "key8": "5uSWMuKcYkfAUVPXQDs4hRCoKdTZqTLMYb1PcqkGvpKfqscLjqrhiKsxuo1ay17tyJEaLc8JRvBAL7BhyZHWmy46",
  "key9": "4bjc4JgQBjZBuerVs3YpTb6mg11oquQyPPmVaYEmzM5zfXcQ5MJkQMrQFgtEskh7h3zEtfP6wbqK7uMPeMddrQ4r",
  "key10": "XXRwwfmq85WWBHQTUmRpBEzn5QVTaFYRzddYxpBfqHjurBWu8WYzDDLhbZ7m6pkbyNjkXyCbKiiVfZLx4m37H7G",
  "key11": "322KcJyR83hNU2SXnm2kjcfwCt4FMZKab77NGadEXXZKTFhqdYG4UZzr2BwobQvyjE1vstECayHgTwou1xM4RP97",
  "key12": "3qxDNUW9jU6By77ZWVdRQMi1FrdT3pfeAr1ijDuSjtVQdmS3JHnApFzvbSxqosv4qCazvumKrq1VrcQbZkbXxmCU",
  "key13": "4A3UU5MiUuTeq5zVM2esuV8BWKL59pUJvFzd4swKY8NftCJucn3tvr2Hy3rMgiL3tTU2N6342HpEVpKmYmsC4Q5w",
  "key14": "2oruSfbtcGTf9uHrZpWt1se64GPP7ursTQTnxnYUiYvT98YZk3VaxsGSoZnPfZt3LYAPjUTFJbBCbAizxU3Ngtun",
  "key15": "64UrXBXFc8MjNFgUzWVbx4fx49WQbuunjRsvGMyrF5VzEndrpUDFxs5MAKPPgxiYw76e28PXyytELTMrmPtKR5Qt",
  "key16": "5DXrQgdN1T1BFvWaDQtpthwxrBWpBtWg1tyV2WqQGj5gKPD3xd8R7tk7Evp8m8QwFSPd2mwviarXfxNgW5MFESr9",
  "key17": "4wE2AvyWoks6b5JxJkPof7JmtaYFBtgd99jJgxTtBSvTUxewHkJTvTzqvN8MigAoUnUVg88YPpXFpEfWkZzmT5R7",
  "key18": "4ZjH8SWRArTmSqaCWpcfMWhSh88BnpsBwgcEN1U8jqDZxt3o1vEGMXdUuRtdbVyi5YQ5drMaPSr2bXY9vpgwkX7R",
  "key19": "2HVcHrr9xYwgN5ZtWCSifju9ueN9ivQbq8oNikv2fxYLeB37sy56j3oGsHUJQdvy4MCmbvNoT9rMKFF6CqNmLcu4",
  "key20": "5oNq7nxmtQ76UyvmUcyf8Ws8jHcVdJM4jUqfga2zFSuo4qCn6XR7EWVxi9xRLNSyXmgNT2op37i7yzMv28NLrUnB",
  "key21": "3GmAdnT8oyDvLfYNmQkXboHPB7ns57wuWC6Aviaorjb6CEkebwjV2gjMuDQL4N6wTUUPVbaJmqudm7ff1BQckj9r",
  "key22": "27QbiqbgSe2im68Z6gXJxcZhBbB1WzcEJkteogwDetrVDE5u9Lpk1RDmB3Wu3ML2NC4FTt761MA4yb7zK8rsET5v",
  "key23": "5iaPKw4rPNgz4KZUYcKki4KvxMop4ogMkxsfeGYeroLarpxnMiER5BzYh4nFKTCKKgiNz54bbENQTVbC8jENiptC",
  "key24": "4vdreSFGhkgkR7KL5nwFh5R3r1soH8J9eB77S2k3Fgz9qzbLQj8wYnLWA7EuUZHH8LNTLNCt6C2bTvms2aDDd4Yv",
  "key25": "5r94u7eH8a1pAZAjhLWMMZevzG4ZFCquQ288srGtYXCCX6mWmh5SKAHzENjrkUq1K9UetYgfuWPuhCCkTZ2bdGdp",
  "key26": "5ApNzQRr6CMPFvJsfitDiLE4g5Fsev5B91EMMWsLRC4QQFR8MbhWdvWuZ6EbSB6aUPV6e5oAHbuWyFoPJoayAkBc",
  "key27": "3shve5rMYCQ1nuecVLCufu2exThME2wp4z3Yg7jHjEwgCq814VRc8DjLokoWbQvrerZvRMLLHyrmoB3SDkzNGt4C",
  "key28": "4G5y9i4JVcQXpR2sHvERpE7cDEon182fLPjdVGvZgqL8T91xAYeQqBLFcWboAjgE6vzrD2wBPTS9qFT5LcvXEU4A",
  "key29": "4reCR3LEvZQj1D15BnvnXdvUTeCEXkG6aGycnQsQpkKsYJKAHvHKThRnn6yuv5w8tRYqE6mWkpgraz58XQRWVtoi",
  "key30": "3FnQUjqC57pJHbUtqvEiN7DYBWMAWZ4QoHt6XJf8BMULKyQQqaLLrXRyTwvdnapyv1NHhx21qZf2ZCREZT3ymcPu",
  "key31": "39KQa3e841VgUcp1wKWeyrk6oncGGbFY47J8BVG6zeF2oi8Ahr4if2kaj1V9xbcbwMFd9Xt6woGXuntj33dLW2on",
  "key32": "4XYpt8m9PeHnnYT1Y81JMrNaqtpD5yee7CV6LxcAdYMY21ijivUstLGZmrtxs82u6jMZoa8pNm5ikEawZHfqEmzY",
  "key33": "3NME2uvbLyzURHxwUTkPTFsbYVugcaCWMzdtEX5xYCaFqkDSckC21Yu7m5DyZ2JRwVTyggzzj8M3qe2C4EmTJ6Wi",
  "key34": "2KfoA8VeUbc13GcrbENdgNqDo1vsjCjxacHE5HKyVYdNjc5ifCdjKZxgs9dSZqT3wX98rCuBFtXwvkqNHaGiSMdV",
  "key35": "5XpHyyTuoPrt9SgfDsweU1GpgNsoGtx9K4cEwsKBkA8qbPxkgKaZwZTEodKbz8MYpHnZxMs1kbhg6k5EX3wf6KwC",
  "key36": "2duJbQ6pdKvYADQz5ErXmrM8GiG7wEEvYXUpwwkCm7tuzYwzXgD5DEGGKvM4EWkTX6HEiG9DjFedNUE6AYnG6vuU",
  "key37": "2BSjbshQ9oVRDCFdsGEm31iPNEuySKg5CYnCNmZpAZhmDNaco9jFSaeuMd9AdzTN9hVfBH5JEChK2BEV6fcsPkWA",
  "key38": "3FqXCxwKSf7PbggfVnCkJsBQAFay1rtsZdp2AbL6vSqxDDWtxcC4JYR98NQzk2TqNChT7JJhTtjCR2HWAYpkxYwR",
  "key39": "4VEaFg1akLPPMyJrTVMkhmBp7LyDdFf4g8FwYruKXoKc9g1oDLPzUjZEAHDPDxKFWitKXELacAi2hE67AS5ND2jY",
  "key40": "2mewphnLQijxkiEmixtNFxFK8bi3bbpdrDLc4341JWSFMJxYj9wgNCHGMcYs9rR8Sof3yLuyrPEk6sM3AexAKrZm",
  "key41": "2PpZTtPgsLojQs8uZ8u9npZbEnbBapB5kyMwfWo3wiHiodqrZDRq3qBCvyiAXLyc2QDQ82kqrRuwdNyjc7sRu8PG",
  "key42": "t8hSu2tSE4rUwdqSXHTLcsaC2pDWsY875DgNxts9L7AzdhLUgAkPbgaWTxfivuwy75cpTyHUKGBP4pTgwxzj1ZC"
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
