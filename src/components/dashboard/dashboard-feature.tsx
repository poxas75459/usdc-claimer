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
    "3uvGmEJw9S8fb7zuRWoZMvuGLXqequbUVGV8bWELtCmrB7VB1GcB5td69WMCsVMySrLxK8S4taAopBFR9KCezvwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NcWca5JgMN9hWLHF5h7Lf3wSwEoLLvh4qgvroXfWL7MTKfDJWegbTP3CJhHejBXTj8yWGoo53N99jMuZg8d8L3f",
  "key1": "3JFFv277EBwPN5g3NgyocbSnYGSyzHuFtFPYTa76W5K75iqTD3JLEaeDrMi4ZCsDGHXJWwvp4PHmtSius1qNH899",
  "key2": "45qya8iuTn18zfpSuHJbhvBBVVjzQXLQCJrHGi33PUThsN6wsHEGfKXWa2aeZ92a3vAWFkBbCxVx2N7bhs1M6w7i",
  "key3": "3jzvUS7y4LBQyd3Vg9FgpzRGZ1Yt1irou4Jcs7jQx7RYCwLbKAsiuh5ZEh2yWNnQxKyn22m3pa3tR5xK7Xq293x",
  "key4": "5HXmVj26QuTZ9Ur2RCsB9mKNWxjBcqkfB38i24yHejyQrVQ4XdzxMzXvGU6g4hMNrttL3mPoKq3WgXLgRNjHyMd4",
  "key5": "3eSNKiEPb4mWikr7eovbpdENC3N785aVNUo4YUqNyoMdotTfb7YLFjoK72byho4TFyf9fasoKhDMxfTJ7onNNzqy",
  "key6": "37BtumCC1aRXRxh2CP2HpSruvvNzW3fjHXfyuTiHjjydY2PB3B8dbLiYA215rjbAFDhwYSkzUNc8SB3o8fCEUnDu",
  "key7": "28aEsGXPpPWnQ9EvnMkHhmDYPP9RibgZKXCfna8AAQWzmDuwBC26opfkHQVFx88iNoFS3ATb1LD5186J1W4fRS1H",
  "key8": "5TrGuuT6775ZHcccugJdTAAgy2dgWT26ATnQk1G1sVDTdpRF3Hc1zGb2t6mAkPJ1WMXYgDFemfYwPkYZBxjbfACk",
  "key9": "YX7gSwKD7bggchYUXSaGHiSdZWQHp7qSbmjQ9ZPvEBYU3cw2YCACCVaFG2Zc5LYvd5Vn3pTEZNoTomjiEoLcTrV",
  "key10": "4YZTYC1gCY2Gjj8ZRvLna2MuTD7mdTSRibdq8yALMxqkjA2UvAq9DdfbStzFf9E5Cbg8oxKdbZvvWSDjBzL6kT4z",
  "key11": "64p9mMmL81u3KD4d83Nw7Cw9U1Myq9TArx2vDcL8J6HxzKcvSzzXDhqtsEuZWnopEiTCck3Yew2gbgTv1vu4oTL5",
  "key12": "4pQGBE52NCoEfJKRqRKSadJydJVGk8xY6V9gdRHpzgBjDoctL5eCSJ7FAmv7gQQZcpeDAzmm7pxQrVxmSbzXYq6z",
  "key13": "3mp7ataptMqC1WSn3LUHZAzwVPu1K7326sksZGsLTjy8yGzAqPmWhswB3QfQKyFDheGxrGWibDzqmkZEH4k5gLWD",
  "key14": "2kU2ZF4er2eqfJjMacF9Yh2ajZ9cdRkq6fGSH13HhJk5sNeixaBEXmeQRpiveLGjuoH2sBMV7uXXk6hGqVhRZaHe",
  "key15": "3uDNA28WhENHCUQCS1uz9EwnvYPbo6nJfDE12Cixgo5odJ29kMQydFriT379Lg3rK3R2k83hQYPoMB6Te5KeAgca",
  "key16": "5qwknuY3qwVmu1PNdXiKb1TUaUpKWB2MqQeqnPpNRCsDJwJNGRD6AbiJY3ehv8fY3kpUEES2TQSvHHg1Y9a7XwzE",
  "key17": "3Hp3bShukjXux2NVVBoBtXhjXmSsgyqyLS3wdogCB7BqEyGAPaSRuQEeMFz7McocRvd8iPKqCjvUwdHfLmo2y5ee",
  "key18": "5wDTvfxSzzwRmgoheR6FuPVWZTKiVKdDxCCxEXKa3RABPumKDZR5n2R5RF5BzHr3ZcZ8HPhYCNRJPRTadPLbMxfv",
  "key19": "Fo8BdfBpjEH6bfHyLwf1n6s1w4yqcC4Xd8Tum5XWJahK1tT8HNPoZyWeSvy4fJvxweXpNRxuVjebEmVMbmep2rD",
  "key20": "5FMDjWt1K7FWC9DLdPFM933b5DTPmm38q66facgBoAkdT2L2hwWbR6WW8B3TNjZXRirBMjNaiLpzd54BxD8zJmm",
  "key21": "2W7TZtJiGtXKJQWNbwkvhgqGS5bPRSoy6pRd4R3qww988xCFrjofeU237PhPTdTjSVwBgaSAowi2eosdvRhnQc1V",
  "key22": "21RaWHWYTa3D9wKjkR9xpW3rj49B1bhuKpA3Je2An1WA1Kfq9zqVKEoagNoprZAHkrCC5ZvvPtBgRyEj8LVtAZr3",
  "key23": "123mY431ar88w7M8HBmA7U8G5KPUU8x5uKuGihGfioh4eMDT16i164KDoycyu9VKxFGCibGp498YQ83orafLNsoA",
  "key24": "5c2hyory3Pccj6YBNSeuVie5G45aFgkvSMRNRjipkiwpD8bpfM4dzqV6mJop2XjrwM3yGQpywNWykb3Abbb5Chex",
  "key25": "KS5rG4FJQqNrCKot1EHWd5L5sJ6Dx1U8PsZ6KJmrmCWAhrzqDGqT6PyXFuyEqywRpML5L4ZhwhxGJ27E8AwXpja",
  "key26": "4dHT7LXvdsWjtHjomLt8r6KbHShS2EgVBdjUhhdwTvsufM8BijcaBnTDVKE6jijeuKqMbtc18aDyrhGGezbNFUrH",
  "key27": "3P8UtLhktbv9xhnZ53nKtBep5XN8Fw9r7Fnt3YN5M5bLeidVEPZy1zFFUz3vemxrukk5qmxJS7krbPNcRGVU7qpq",
  "key28": "3jTzUSNbrve6rLdb1kKC9SpnU5nB9xmaPDxYRsGMJsAe5kokr4bwUhcfKgZD1NKUUK6WHZjKQbzWVsNGyPwn1YWM",
  "key29": "4JxJv5HiJ1PvRDCVaYxSBB3WCpgxTr3RDguLbVbSkXeL4Zphxe6PKhu4SMXp9Mx3yeZUqoBzQ2EbhuD3kgyTYPgH",
  "key30": "3THuNKn3bMEt5Gn24iD5RW1uucazsdxuYhzQoXBMsKkWaX3RiJG4KdVFFdkHsZj3CRqKjxBHn7SF9zznnRvno2Hs",
  "key31": "2jG7PNSMNxyGi5EDGCdAKi4qh58mR2gZ1GFs4hnnvTA4qWN6GMUB7RuZB9ggSkovxtTLz8oeLE9AtnPdHCSQ1fX4",
  "key32": "5dagMFqrGdZeohpZJkkD8NSbGEMFbVV9abJJcqNGPNHKgWZoM9dmMYt65MKqG7dvPTyLtHWsBezLXzo4KftSjZ7N",
  "key33": "HvC7X9YjNK1GEJotAM123Y5kVv2k4BLEJdZb2nMjUPpW2h9onfa4GoXKMXtjHJALQQBSm1d1oiR6Fzp8YGeZMWG",
  "key34": "3z3zw5NczyM8wkcT7zymsfFiVBecVDJmgJiTatNpjxUrujfinZFKPgZzmBJBCqsKZqr8weq33w6iuF9tVGFktbqM",
  "key35": "2joJK2AiEXcmMpxcEP8FBNM5iskt9HSJCEdvQZFGkMoKnjnMz94qy3SRWhr9cmq2i4ABfPRdhWHygMT7yE14dR9w",
  "key36": "442EL4JqNCfVE2WJrz476dg4NWgSj3crnkZeicNGPPgCi9QSrhVt9kvmfuKNfJLnPY8QNctK52ZfrttTVNtdfk2t",
  "key37": "5BmQ5Tgm84Jb7J4KzeXVDEM7sJgXCYPwB2gr8M8yHNLas8GGW6NN7RnAa3bfRYcpDQ94T7KS6YfktTWSbFykbKZE",
  "key38": "5UZrnrhckutWWkZM8qtW3DXCkuWkKYHHqhTZ1KEi9ZkNJvuoQfzLGUb98GVojzGgiiqKpD2ViMLsvoFJkdmo3iKB",
  "key39": "24DQ5zPLX66KA313SFWWqP1VQwLkPiSW6FB6578LX7hF92KTJ5QqvotEPkWgytbFgbWRaxkwQWr2jR8iFdLAxQoX",
  "key40": "46W731RXmd2hgTwUyhZi1NVk5tLsgNcz48yNi9eeY46RBM6HYeMzR2DiQQmA5nwjrs8KyqHbZU6bk7TjVPueaj9E",
  "key41": "2RjdWqFdDw9n3wM4nyHKEtaR3y1VxsRAU8FPj24BzgLbuNUYgjGwnrRoDasHYrAMsQqdHu9w7oSGg9bahsMcyqtF",
  "key42": "2C94SwU8huq8o5jC3nDSuf1ySp3DKtCkfBxB6YfFMaxh3M6mAAEKJXSkSoxjeG4RMxkNPRWruucKdytEC3RgGySc",
  "key43": "3ni6s2LSy1qSQQQukURzKaESPUP5XZr2GtbpgQejgUk3snHBtvN7hrrugmVYQSG9tZAn78kXhd38fkvAHBGeZnZd",
  "key44": "29TUR87As2AcHoCizkhbrj8dtWMU8Q2ZArabePj5Pu1GmxLBB267w4PmusvijDKyhQdxbRSniNGwPMWHUQA3zFou",
  "key45": "UMiCukvy5yjzQBrcAKBZcopTgm9tHE3oNL7PSsGHHoo2mrAA4spRFsxgJF2XA1EVJ4n5D42TQiR6YtVixPTramo"
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
