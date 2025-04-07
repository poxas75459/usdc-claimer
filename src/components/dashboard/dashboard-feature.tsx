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
    "3LxMHoBXSVSACwEikdKs1zrx3ENRMjE1dwmrYoAZu6rxho3nVnvMjVnzM2Y9MayysLNdM1a2ywHWMX841DnTVxBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bGdG5STynft5uaXQJhQ7hiTkUKKA29zgKgbarH4ZEiNtJmm3WYMtEiMY9KdZERTTVwrQr1YaFLSbxbtpSgR4vAW",
  "key1": "5zyW481RzzrrwbVU54V2Mfih1LDx8wyot4A7g19uwcwUvuFqJ44x2TvCh1WskRMcG6FX4324puT2DgdUwVQu5p4q",
  "key2": "46pCTb5tEKYjJknG7Gops929kMkwSJk9YJxjZPxCad6Mieikzfcggpiwg16puKjoVfhYF72b7WUNVEk6ackm5Vz",
  "key3": "3XoXpVSca1UisG6vXXpiYDfvPD5KrRbxYC2ExkH7F3w6pWzqRj9Hkzkk2oXn745n9G9hach1rqDTgsT2i4gStNUQ",
  "key4": "RSgfRtYcWzMmkT8REukurX7NQvoWne8keaCfDVjq4RhwmjGiToDs4U7UCcYiprqiyCkoPnrmPTEDmTqVzDKS3XP",
  "key5": "443a8RBPr9bPuNu9N1Pp3KAJE2g44J2H9rkbWRVpSYVkGrMswWbSdd5ckH8Q15AYS5EaTBGERpKFsdLbgNa7tq4s",
  "key6": "3eq5RLFpbnDpQxo45eaSB4RfqtPZ8E459LUKderL3Mr7WP3q52u8tYzNPLpPsm81xEaBxbdB3iV1aKgzCUHeHnVw",
  "key7": "5GGqypmev7fUdpFyJn5U7Ee4bZ82y1EvJpyfgoHKCfBEuTX1iysMAWLSfdtv617WY8pwXkuoYViaZsnHt91TfYFU",
  "key8": "3Un7CzYJeHBWsJzJnygovGdoVMYiWXFBK6y7rVRfBZRye671C9podaNafWEPQe3qTKCqgMeM8mgVsUVoUPtRW5qV",
  "key9": "5B948x3Hy7nNHuqeDdpEYrkspYFN14t5zan4TDiWnN7VegJK9cGhAaJusCYEwKcTw14icRBi6dgGfPryUnUBkkLk",
  "key10": "4t1byvjX6nu4RNPsbkNxMSqM2utKqSmnH9WxN18dEHxyPiE6t6Pi4u1cvvRBZqMr6dysJjgZXs2ziSoSZUBimFyF",
  "key11": "5JKbouxCLGULqsR8Z3XUNMS6fjhCYb3Fz7y3RB7ySuPCA2DeXjkH8zTX6qJ7vBJ4p4hEZkK2prwiyGkJnRUsry3o",
  "key12": "5CNnpxjNLC2YtVLL8htDKDeJ6oKawNVUrigrqDKtbNHDyzXwEnZDJyMfiJYWUFfT7PZnT2uhjj8VNRk9ybytk6dn",
  "key13": "UMNeLP6tUcT94k3U4QfLkby8PdaBRSuK2yChYMDGq6RWk2qoXjZHC2jhathB1ei5zQgEHrbcbUMv9hwRVXEhErz",
  "key14": "5tZDE3PtfqSaGHjzPvsQVNS49q8M47iogYuWsS3o2wvKbSRe1UTDyHFqr5kY4UR4T1X7E1jm679eCMFL2VYZrp3X",
  "key15": "2YeqodDoiHnjd85VPBcnrrbA4sta9RG5SaJUgpN5zjWEUeGGfcvzH6Gr7qHHMiQYbBjVMc15G6zziCJZWnx9uLtA",
  "key16": "5QLcexf8N89g3kthzeMvagFtV6eNVUwJbQCdXbwQZMud6qMLYrF8JcqrLXZoyUEasxJk26cZT9XKYXEoyR9K4ukR",
  "key17": "3cDTmwpc4A2hqvNWbkUptENqXPFMMmSdWfWKiCnZGZwfJJunbmvvSDF9JhdBQtJDNXpcZPtsbPGw2ZUyK5BbSKEB",
  "key18": "54tMqnfh8J2XK87xGHYo9ELkGdJsYtau7VW5YsXL6zuPJe38cPCrmXunJLJAqtU9Fw4y6o2oGdaYBv3NkmheYA3c",
  "key19": "3vduMYQStUHdDhANo8rJU6fuaR8EUkMLvqShEANnCouMytRsbgHv3LUUCB6Z4xHDug8ifxMLyG2wmEUzS9pixrg8",
  "key20": "2ku4e9qQtGUqWKFUoN3bCPhFqQ9SSygs34Vfo1BXgq7sjQKYJi2d3zVwbmooqJ4ouP7fTQytMfVYjiacgTjQnFMN",
  "key21": "2Wr7c95Eo3QfmkB61m8BJ8bZjBwRNGBxDmveoRwvKFAshnfVCGB7whCJgYcfyEmWaLYEcixrQZZ6mtB4J2bDL5wT",
  "key22": "5NrhgsV5iV3MH7dKQi8NqnA4n8b6fyFTHCWD3ifVjfrvsPwg3a1LrkCmNfibRzNX4WBjgZGudPPu32y4YMsvUUZh",
  "key23": "3RfGan14MLnvUHLVcqY5zMZ7gd2r7KzpetmnjC8n7P8YrCiCXt56tfrMQtY7F3TUQe1Lcfpf4Ang8jgiCVmHUqf8",
  "key24": "2tb9dbneubcex8r8Z29Upo1c4K2Xgp4X2xFa53T5fkvRL7vwQW7q3EGEWGHip3QSX4i2bm69WYpRLdCMkjaURvR2",
  "key25": "5ucFW1TeKiTrtJ3RcDf99eJusYtuhBZ2sMQK8Vv977B7qVSHitk9XwMmVEeo9haNR6Vccd8FrJvDdzwwgUUc9iH2",
  "key26": "3q7AvUb1q2mH7Nkv96oK1FfoStycKu5cxh3dhndi9eK2bgnWy5jaPzkkFdgWPWTKRgofHLJvHT73CwzicEBowFBi",
  "key27": "52jEeobYkaqEaFDLDUFSZvTqX6pkNvK4q2sb3oxX9bpjgNPQfTBGiAC6vh1fNSQirrUATD6CxAZTnT2NunTwXuuu",
  "key28": "5Nwf2Vg6aabS6u4WwWc9RZWEoiNWNUcggJUpYf2tJasH8JL2qBgyDThz3nvjSDPUuQG12b1LTHHcfRTMP4VaqJSL",
  "key29": "3mUz6eC9GpqiJK2GdzVapn3G7d1Hzi6XwafoXhHmijCUD5WZWfZZxiF6RgYVMZP7fpKEh7wQbjageprNs5VDZ9H6",
  "key30": "5uF5QDegW8BsU7591eW8cq6HfxtrwtruZYugaifGTDQmRbjHwRsF6Tk2ywtkbeU5cuQ73EJRLQz1SKMXxySy6zPj",
  "key31": "38TQStsYGm82D6QDP11x7uqndTENkpZLycx31Lkr8sPQ2Qp5iNHioeepTw8SMM6EorWtCKbuQ6x3qaBKsdNkUt7c",
  "key32": "3qQ4HxDHnVdRvu8eqrar4mSVeVtMGvFzgCg3BQj7JEwVuFtnSPsdDtL2HHS3aHnF8ivqbLHskY6HDbRw3MihUhFw",
  "key33": "4mWZuyuJZB3QcQHTHfZBLaGsxFmLrc7J3jVn2FPoz8oCL9bNFCsAG1MAXufARyLG7fpgXk5aAdorJkGhCacDp7mN",
  "key34": "wTXQ89Xuf39LSiUVExfM5Lcbdom9jgVoXWhcwFWJc4ZcyBwCC2QBSkyH3T6Ny9gZaF7NS4pXVK5fukoBKjiHdBo",
  "key35": "3RMacZYNerELJiVoM6P6dfxQYSeYSYUwhn5hCVg8ZZcWFBhjZS7Qnn3XJnxC6HGSsKctKYLRCWkV9m9Fq3zoXkK4",
  "key36": "4RNo25Wi4t4yLuyDdaYhMMxE1qBkqceKujxsYf613M1A3LbcGUvjRLjeYZNHMgF6xJDRKizT8hERA856APDvJe6m",
  "key37": "4WDQB7HthZLs4DncRYdmaNWRxs5yEaeGpu1L968wmvbyuAV3yHWwGnFmKVpuYMwLfYy5neztjosRvAPCk2BBuXF1",
  "key38": "3bkeWpGXMZ4mV68YhutzGP9UgJPkpZCRMffp24TV3YrqxzNBVhw3EgLgy6C2cZmyiwDjqp7YQLS7rtL1ZJvZ8Cr1",
  "key39": "2zPZWWpAdtBSYfEyeqYjp4u4qAN1QqWGDMCoTdX2yxFJ2cUVkRnSDmLffDAidDjDbNNoduAPT5RT6VWrD1Gp1Mhk",
  "key40": "467MQgYmceeGjccBZSeqMu2QPiTdrFpUqXKq8shTWNA7VdDnjSRuhL3hWFpjbZJM2oxTbRQyRQ6tAxXpKxXSnFYx",
  "key41": "pML2QyLemXQbKYP7ATbYwUMcZmc5Cv8NQPhqN9JBdHSF5aNg7A2qEEwYhwYbZTtUeXmJtavH7xGtvXZBE5mP3Gs",
  "key42": "4vFtjBCXN8Nh3WKw2siePAoALYSsF99dsC858e1JohDNwonYopd8bsGSRks1FuHhdZRSv3CJFwBm27ryBWypZz9v",
  "key43": "3VAn6BXTZWVZWqm1h43xUYbSM3oyyoi6zVoFcNzkRF2BRhMHXosWHpJzto34VhxdKqYDHrpAfyYAAfn1xuQHN4wc",
  "key44": "2C7eLdG722NRs5bbuVJD5M6aJRiokbgCLnQcV5cBaRricueS4LWnQRAq7mXn4ZaX14vBhbV3yr3KpsY9CrskN6bj",
  "key45": "3bEJAdNPPmTi2F9kzAzUmSKnh86mjhKXbm7oxXbgVLZbSTQkBwcZnfh6v7RL4yJPaz45vwzRNa7TnJUd26aFzVCC"
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
