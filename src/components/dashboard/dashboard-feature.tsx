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
    "4b1WrtNC1fcEkaZ9e5iaVbhYLxw67HhtXNqgHsAwM6FiJgV15KfRp2zqvCuZFyBSWwCk39ieqEvfy1N7xwb9Xzzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LKukzV46aZjxGMBE8TX6ngHZYFPoaMvJdhdiy66sH22dLdYwZzoeLKxWHtEmh7SHjG84wDPpbTWvPgMKTfBxnBn",
  "key1": "nstaYUfkVLkyKcaNySenbfK9rSwoa1LDbFxjiBzdJsmkTF3vKDxw3r4Ejy72SfC7qG5XLE6fVru8x5G2WKYEhMf",
  "key2": "6v7vQEKYFK2YbfUkta4YQC41LCYXiSA9gfTxMJWCSxAriVi4GYFPVqt4WKzpSTZzasp9J7J1ZUbSn5LXUqMLVhi",
  "key3": "2Bvit2VLtH5K8BCjYJafFMyzjNU1R2JaiU5upt4YodFyLcpZ6NRY1HhJ4dxHsQe27Rr8Gsc2P83jDx3mjcxinYFf",
  "key4": "4XkuWZk3Ebm5fQcU7RYHNSvVVmGNHZt9nu3QjH36DfrgxrB5gh7TjHBppizgMu7ceYuncuV7QK1Pn9x4EhHt9fZJ",
  "key5": "4SXf57bH4FozHVCBzWdDywy6u2XhpW7NebzY7nmFYshFSdHuX3RH2LXnnYHKMHxWYVpeko6WABKCiJXZ8fSEJfLP",
  "key6": "2bxdj42GdqGBPmXyoSTzgKctmPEN6L3AQHjkVHC3Sur1qCXpsGu6imqWLpNvhLMvnWjZPA41REzvx4TLSeF46wSN",
  "key7": "2HRytmywAtWdRfZWfNYPqiWjwdcrH771LmxvVdv3B4JH9ttyiKUDi9Cc6M7ZNsc2LC2jRtgB1dZhTTu9Yie6cuzk",
  "key8": "4u9E65urtePXTNZGrvwGhALhPcjdVZgr2yPvotiGpQ67NnKrNpE5nhVo52YuvvCtvygC4uq37oZ4X6bSWdxJwLvL",
  "key9": "MGcKru4BLZwkH3W6F7zrhpTQmY9jQjqMewD33bkAB4xTidpsCyLaqT3SdotSxKiSyx2vzRsHxv49oZYbqSCQZKp",
  "key10": "4tzyjkf1szEyuu3kHu9poVNF57nTWwUyLBLVQJVF4LWegFxGGPWHHftjGSNbRBQL53B85nmWJNbDhrvUgSNpWYAW",
  "key11": "2hqLUcE9maG3UcnFZoAUJtZBzHRHTitCXRaG7rqqq9xSyz4GBbfgK8YBTschAKWXuUv76q8NcVRxdYkxrpMyebyY",
  "key12": "5tAfeXKRwbtGnbTkz8qqBSTdDHi9yMsead8eddHhSi8fns81cKQCWqzDjAwoaVSsLuiiSHmd22gaNrrLb6UpFTqJ",
  "key13": "3NQbFKcyANysKMnyZM5BpzoTEt4AzdrDkJ177gV79JruwiJ7wGWGspZMyBmgnk6YxZfEYxKwNhYcsYkahwYzWgjC",
  "key14": "5VpqcJKpCb7fvFmDC1FRJrCJn6dt52T394n8yQ5HbrouK2s8KMfY5ctitoB4rBTYsr5W2MbtBwY2ddi1K9AhejDe",
  "key15": "3hr9oyHB8kSrzcaCX2cajBBaiiiMqvugRvLrbg2HDcqL2y7UQGnC6SDQ2pRAA9biuHbXSLNdDpiggfBrRjqz2fY6",
  "key16": "3sbJdxVRomDn5zx5xugB7gai3t48agXMmqDpMpVqsyVGUS92czk4H7VMneBJJqXABmTwcH3jJq3Zqv86eaDcfhPr",
  "key17": "N8NUWTLG9b1RKFBhhXz3G1167HCQjyyRd89PEzRpGcDYDHRKLtwPkJNo6CtkCLPCqrycAdQqD7ED6h1QmhskbWu",
  "key18": "3f4mmXKG4sjsXhx7VCCWRPG4Dod8b6q85Rsk5pcKVMxzEvUX6oC8P7Hn61YgTm1oRqh1j3STj7gFx5zrCrjSZMKe",
  "key19": "3sPo5777xK6hkcRgCi7skx3EeY6vpNpRw4Ze6C9yT6VPLaQAqbAMCeSJYTRdmiRoQx7x9kXnQsxoVm8aABX22iaY",
  "key20": "4236djeZTbdZ4w51rpVmYNuJYpUCQB5UAx587AmgUFaiuLd694PW614peZjXdmDJj9bMiGnpFo9VG3vwhQkrFQW8",
  "key21": "6237KuV8q6aidpmntCLvUaobY7kwYgbPMRhbyXSfce6hj1PTDSQXamC1SizhpHswXPbfSPg7LJo3YWULzcxwNqSz",
  "key22": "62EPXHwrvfwna5s1gHa5UM8X5jdTkkoXzoLZVhpwNpyqkF1nxEgucctnDxzVWEnY1yfWojTtdJjJnwVbeTtC1yAX",
  "key23": "u7JmM8zxqztogVkfJr4xPHHM9aMugV7kqdFjiDBq9VmgCz6o1F3cBEKoWbwzstWQxH88oZmz95kmRysY69MifVt",
  "key24": "5G9WRzzDwfLLZtZLiyfUmk62j8LqYnLPTVAWyCT3brAkeipEm3E8hyCSGfk7Q1pjhKCjKQr38w3VxEvvVQpNSRQG",
  "key25": "3uov8BHAGTQvAdSW9oXUabBr3owhX7dUcZ3TDNcHNisWaSUEeEAwSxC4VHcYjU4eFxAc3L8c4w268pBUgqUqGbX",
  "key26": "3oF1qGTCaYJ5eE6keeobUNEa6T4aNJmm2oAxssCUhauJUALiY2sDoZRVbM29BpSWzFoeAF5zEcnk4aagxzVKSkdN",
  "key27": "2jHhWwggtCbLwdHqq87xxP72K14phVZHM6GCQAH6KXz7Es8bBXBEBDaMgGbCNr569bF3CDRLG1tV4VegvGxdAf63",
  "key28": "3Kbn4rpuqxYX1hMrdsZzcSGQmEgBdPR26xfRQaYaq7grCkPpXfx1CqUZtbhBzzXLbtRgLL3BSytmZTSsAphzWAU4",
  "key29": "5KNSPjRo9cooXGMLTx7HbddjHhaxWxT1k9oBjpzGg8F7AyKy5eEkfdwyWR1Kerm76dUehknQrBLgQV1WLd397384",
  "key30": "4zDiHpaKpNmRAD2j9fP9EFC33a6TsD5j3AEZdqgPWpKK1V4VeurWPTAdokFRKDC5ZPsF7146dHUwDuBKnNt3DKnj",
  "key31": "TcmWieaQHsr1gTztdRR2XXWivk6cPtVZMvSUnZz3NP5D6VjJ2ZyR7fnsCJGaCwsFYLMi19HZ7ih2PynPXqsvMGJ",
  "key32": "2ukVQmCaBmPWtSYyN63weBWjkohTn1vw5mzH2Y7axrGP8FsNMXHG8H635tJzmBLwqBxTBRsgQdrbGdB2BNsxEDMp",
  "key33": "3jCGzFcxVtnoCfDc5ByGhyZK2tE4zLAHK57B92Ecds4TVLcBwcTbMVP6czZHJhFDX9cWF4TL2dYb826XFbcSgSG9",
  "key34": "47k66L1Y5X4AAMticzuJ5HgwoEU3zjQqAM1QdVNKaUP3YLwKN6ypUeDspPPURArn2nH5mB5EueshN3sFAq1oPDXK",
  "key35": "2dcWWwroCAkXLtRx3XwA22P5EkPnhLck79BUUMjTMdV85XxbHe712WpyZc69fFF9nUJkCQviG9AEbtVYYfHAa48M",
  "key36": "2mJcizTnfLfhpzbfXVRQx8a8M9DacYzF6FHMeZecwrfd8echR6VZqjD2uvFtpVLbNJSLAZ2bowLPtNAQgHHtDNPc",
  "key37": "3vSKKZp5PRZ88o4M8sdPHygf8q7E1XXXqkHbBTD6RVogMj6zycDKJ253R3cNP7V3rgHruMWEf4WnUwasNbr4Yib9",
  "key38": "BqH1zUntwsqXB5EMiNAxA8ozkUySiLDPvRf9fwDBQj6EgzPCQBiEcDSkjwpeXr2ry5NXVeKqdxLvK4cBmNrd2QT",
  "key39": "4AHGrUutrFkbLm2rK4SacgnnirKk4Ywmf117qufdvqy2cMfxVQ4Xt4FBR744WTxoghdQ8y6GTKLvxunKe4FL8iMb",
  "key40": "44x65KB8RBBwCWFxCMQMNNKdMw4QzdzPLMpFaPiRwtBkLG9xtQqrrPe6XtLWFaWuJjLoXkcRZzpbsErs6q9ycPDT",
  "key41": "4JC84w5pkXUU2qpEGNJA7aUyfx7KHrGpx3z2nvx32ebH8aQJJu27neq7zx15USrQtzFVcdv6BkCFjjhQGzFy2sLb",
  "key42": "3K99ZwxhjFy5Y5rAQGQUaCf4YKfskhecDm84hg6BmzE2TtJw4EYk7LwxR2XDARSybztR9QKH6CxzJeNq9G6zQQ1x",
  "key43": "Ei4pqHuQMjAr3vi5XPUgfFBG6B5XoZQGRg7MDx6vaq8q42eL1MNzx3eyL2ZckapNMJYpREQmp2dMZRiJ62UBSNn",
  "key44": "3oecgqKL2Y3ZPjRGvvNeBTNVeTr5Zf6BiwQFS6XrJAUMmGWQn3M9zSzbQJ27ymfN6VbR2i7V4YyTZEubSQpxuVGZ",
  "key45": "4o7JYbx7ZHM9wM4HLXH8GFny6xtNDmeVxwKQSBiYkgKaqmkuhttFqGvgeR4MUEhQE4zfsX4hjCV6e4N1Pa5TQuwX",
  "key46": "jHv9YBHsTXSUmQFuP155nn5oHBxyfyE7ox4kjYdN71bVcpnLX98tbKCBxwBQG3bMP9BZWHHdNUTfSG4DNJMfoey",
  "key47": "2zCMWE1U4FEopiwcpgHXeqCd4CXXiTVX3v3jQmMFXVtE176UbYUSVYd9QG5fgCDUBN2SdbsFXanYbJ2C83ww5hP5",
  "key48": "eEaLhfWdn3WJHa7rQSe8bCdZsSJjf3RxvJtsAwjcMZ5q8HETPoHUhVSmxLmSwenfSqwtsQMLCbPywvshPFo6dUH",
  "key49": "2ZCxwdxc8918anxQBtd5tnzi5vP9qkCAUPcKjtvJb99T8eRE6KptEN6NY1h6CTdBmJvcTq2nCGBx81n2QmEsrt8j"
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
