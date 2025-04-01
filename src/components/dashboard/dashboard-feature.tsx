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
    "KB9fkuR39B7extZXXXs9mFmhXKGk3tgAknHf1zDp928iw6UayucnGJx4FFxDChWqEJcLXE4gEAjBVQ6uzGxXQwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gJ2b8ZqaGtL3mF1Hcb4rnRPt49Qvo2rt4zDatgcZiFvsAH9kmLhS5rQeNcV5hiQ6ZQTG1WziWyJZ8xNbZ1n3izV",
  "key1": "5CCELsAxWf3ozAoLXGcDpwwBuMFcMhhY96GtWHRqznA3FxV2apEo95cVeFdsmNNCK5UuRNDqJgxFCj1EK68PFyxy",
  "key2": "2ENKySNUa1mhZX7N6stDtfJGF68aXgMvSSApSN98VKrP7pTdPRZhqGXsZuTh5UbgB6zWBF4BDmfMXYXjuxsMpS1k",
  "key3": "4XqEhWRJQQ2KE7Ti34Dci5hNcLtVGY7CMEpR1W39c8tCbwE87zNQmjgqpZxKq65kGYdvawxRx2PZfLH9zAAXfU3E",
  "key4": "Fe7FqjZ8GrMvV3vybwCG4x54M5qNHej48gqhYRJoK8SiPUxckk1WWcMox8RVG5F2XDcJd3iKZqq6m3EQpfGA2M8",
  "key5": "2WthATwhrE773cGdHp4YZJJNTcdsv33NBqWjHPCcXo2YFgMpu32ZJigaGeH2vAwoj1ocB3FscEWhXkhQjPLYa3E4",
  "key6": "5KNwzrC9hqveZA3E6vy2H9AEViNYJwP5Qks23GqCx3RsbuSDU1hGmHqo81oi8TR5LJvbntuniXyYG67pGgtPqGa2",
  "key7": "4TYEYcmw9QoPzuHKaEyj1cp3F66p2hLb3fgMukQhSZHUsMEa5oBbNpU4Pz7tjGK9FCPjV3sKsaUQ1NQ8zLQfZqkc",
  "key8": "5nfSnQgZ7UfqM42fqHfn4cbXpqhRNpPFkhShRu5KM7nmDEndLzAtFTvr8aHGXdmi2m3356irCxCZaDoyQHrBFo8R",
  "key9": "XdT7bpPHvno3cPFxKieenbjCPcQ83omhDRJM1hZki3hsVzqFMAjPvD6xc7nfyHnDnUuWa4CaFn91h69AbYUpi68",
  "key10": "5z9YPpE6gJN8UpxG4CLb7sSbi8w3RY92Qo7zuGVHDaH8ZdtR965L9M4Uwd9mLWPBbR4h9SBDWYMBmRwWKAf2YFkt",
  "key11": "3rm7HKAnf41eHgnzEWLr3TzfvzrwfTLuNdrf4AkTeE2dJQmfMsGy93nk1ycfWugDRgVNfNfZK7qRhkUsXKVp2Zox",
  "key12": "3DJy7nCC168ZwgUTG6HNkzRoNwWgneRUH7MNRiRWiUNB3yH6DnQaurBNqwba1kb87WZFjMJvfSLnxzge6KXcRtwE",
  "key13": "53Bta2P22nGw9HzqFPxgTNa6k3KEqh3uikxNvw1cCtTPWUFGpGK2cXYVWR22dmqicGuf1usSG8Yn1K9WVWwP2QTB",
  "key14": "3o1jHPi22BgB6uEEUjqaWW1k8QdSbNFKrPUSeZMFy1LQxkwL1gDFcwxiFcjP29MAMYyuaDdRjbC4o6NRSsoEbBfP",
  "key15": "dDVjdWeo8hzQUnTTCMBQPUsh3wU2sbLcVggtJWTLaMdZMKtxEbis3Tem2dKPe43u1xLKvVRWcjJomwSKmBB1oBv",
  "key16": "aXLRvqsdbFsgYrmSX71vB5o2r3mozAhUbAYzVAwTnXdCBYqeAFT8Ld1qaR6RDrFqLjW4UzPyzPM9T7Qt9hXEmrw",
  "key17": "Qk9GsubDSeizGcz4hxeTz4LL4wH7Z9C3XNer2mAuhBHQV3Bi8nShnHRZoBtddeuLJYyU3fGsXNwAQjXu2cbEt2C",
  "key18": "2A6F9Pn3RP2SKExrFPdNkNeH3Hx7SJKdMBa4Cnt5yMMv7pxoPujmyp8vqWjTtWmhirRwZGPGekLTA5H2TnenTgW2",
  "key19": "5tQRbR7onx6GXf6hgyNK3peVrLTE87jEddFmndsHChi48oMrN5FZMEou9iGE5gQcX8Ravb9S2jz2snQVyq8ULiLq",
  "key20": "4kCYduwrvPs3831mVrWL4RATaDLnhcu3fcx4E3JRr8sKk9ifei3Q5BrVLAPCY2aP1VDfsB9VYjJ69MkwZDC1T3ic",
  "key21": "2kJ46EKyUScUEyTbkyGxFbc58u4LqA7XxMBXPHVMjqRMwnHrmLoBTA8v7NG8QeQEcK3hPz52WK6rETZsrGHjFcNy",
  "key22": "3V3UFdAjWqiBTScfvgxuy3yL4dW8mvLtEXN8R7QywaEsNX8A1RJT2wEeeGLrJm6nUzL5Ri3ohTH75iA5tsrhK3Av",
  "key23": "2c3o5Lax5MYta8t21W86oNw7xkp8YcodqCPZkwpGWmghrDz59cfdC7zzMQnaP3Mg3JzsVHHWA56Lxmw4yVEfxLq8",
  "key24": "miV1wYAiqSEg9TVsAJyijWDdvxVMRjMqB8vtCYehhW1rpZb2KXXDDS38Vd9QEZHsrvmjCPc38ayfzooBuWPkoqU",
  "key25": "4urGjtzBpm3N6rGpYhM9SnoqpEZvg6zK7PUoaxUmymBthFnELnNUUCHfL9wMFw9LhUTRv5CPd892AFppBNnWAjbA",
  "key26": "5xdpGZCmu774PiNaSx7qYnBdkTEmPivvh9XCQ8SxE8iSj9AYm4AqriQGpNurUB2oiyfhme2RYfU3VjEezX4xxnFD",
  "key27": "3ST61sVz72mX767FtjqgPW36W3dzmfzTSZ4c8afu6UZFoohtohbxpBHavQbb79nwDmRncfRmCUchGfk9ZnvGHbGj",
  "key28": "3pNrvRepqmQbX1PLwpWB2ri7G9ygtq72EFULYtwKNMEa3rgiksTKhRV1FsQjWL3cFRNLVnmvcxFDUABqHHv6eZMJ",
  "key29": "28KEYaCBqAmJCDedRAhFwzKv3vo9owfTLfMVuvKnNDvR8gTqSQTVYavHQXfuQu55nQh9uQHCaavtLtc2vLX7Y4yk",
  "key30": "35mctNStJHaibiErk6X84WeJ4NajhjVvFF4vhYovWF4AREGbffqfcjeYC9NvNuzRydVwAxnH3H4W8dZvx8dXCQtP",
  "key31": "2wQyChG3Tgo4gi4cPtR1JoQMhSsusfatjDGVsmiw3VDPxQAGEaNuvHamSfzWsY1tZaCcy6M8Piy4QPL5u7pnCYna",
  "key32": "4eYA9MLapVeeRS5vrn3yZ6cMWKW7rw7admj6CP6UQduxsJNEYcQ3kCUAohFus7f7ZUmuG6nYL7xeFHuk5JZyomzQ",
  "key33": "4eZsBsKdbrngJPcKeRNhLsqeDEFnes8TGHPy23F3zrjrcJm8P13S87fmQrmv8AnjNv71YW4E3qiXNpxDAeapbuSW",
  "key34": "ENsk927gsCbAY2ppndMi3Kn3EgeDrbxDR88bb6nA4v4N6GcSpB3cCEubMqPtvcWcqss2ts3bC2t6s65dxhCf2uh",
  "key35": "4motdRvtvggziFSrr4i3QgrbiP76gGHHuDcziFDs4g8qSVnGCWwHm9QWQbBPJAm8dmsFHAoM3uDVSAnm86BtMovj",
  "key36": "5GiZju55NrzGUmRjK2vqHHq1MvoUoyPcHjshpgUs6Xat7WEiiSkjcqspFDdPyenLF2qqAHNVSEqzgQCzc1ybAgGi",
  "key37": "2wXH3PijfrVj9TVGz3NehSbaAdJvSjyxnsmStwjbfP6AnvinJXMkjchYeuSPvKuV9d6xpXDuzAdcPPmvN95fdRKV",
  "key38": "QringxUTYvqT4q8GusVmXBiuReUBJkUhtgLmxaffcgyySQnVizmkQNT7v7DybfCdcAxphjLBg3VSVkbQVyGGmmd",
  "key39": "2XRk8hos7A1i16H5EK87uQa3aYSRu6952tTqwwkuAxZ4qRG6mdkhqw7E77u1ewQTDJrKnG5puUrkRkyzX5sv9zHv",
  "key40": "4bhPrQbTRiyLa1eFQxaZUy6D3NqEYWoeZMo1FTh3ryBJ1bZejrHkU6k1D6RkCK7rFiJjahuBAniVDdep7eEDzZJj",
  "key41": "5AdGXdKSzMpwnwDyBGk9mHNcnRQ6F7UpC9CfNRrT2uoS43qeizSQG9QTd1xyt2e7UPu9vp6LUEyAx1SoxvxZcAuV"
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
