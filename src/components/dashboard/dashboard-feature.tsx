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
    "3aCz6j12rW4CQGs8MVUUiMJ5cMEEVZHrvq5rTocQJ4Bow61AYPpPwTsL2jFTcKcNrLprVH5yjcHrJb7QkJwVXhEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qoCrqHKNYcosteCh5v9kcSYVecVcbpKJv7qxBDKHTcsHa8ADT9JnbWtEB5pASNL1sHgBQgVpA3JT6n6kQ5SWMMy",
  "key1": "4fdUMu2YWdTYbEfGSeD4NFfGBJMatCi6QnLReNRrxsk5wTAFnnQVXyaB6PngGr3h2acCUXjGrPJsRMSAtfeqL5aE",
  "key2": "5Wt8xkNuXo85yqk987d3iDgJhw4JE3PbzmYdwErBshTCZ9ccsweoMuFgnZxgexZP5t9JRdPLE2J5YbTZRqEhVQUX",
  "key3": "3MU5SPhSs5b6dh4ff9HF72vyFkYZifPXr59ocC1FN2Abr1joWnpvzazaKghxKtbZhRVNjc9QvtWphjWPcUvQKP2j",
  "key4": "2K97EjHTEXaRnn9axTX9VNzpSx3AtjqcxfnAzsCkn4s2kM6do5jkPH5Mahy3GYNAJF5kgDXWsbW5jdky1FLKDPv7",
  "key5": "54LoQFbjz9eUYd8tR2TQncCHvU2Wy4Jh3P9nPg9zGGrTWHn5SuskvZqxgzgjS6xvNVhQqobUbmFhw4xCAwvmTyPd",
  "key6": "4R87u3cfYCSteQpnFpXGJjA2PJXZYBXNrnwfGKPTtrHFUFsMbfWiZTpLkutJwyGxkxGdaTNxeiNCstE5cFwy2KqP",
  "key7": "3SiBUwJAFFRKc1TdD3KqviZX77FAQSM2V5ARWfefbBVEbCSHza5CtzEmnUhkzUk2E7mqJ4MNtDsQb6Hj3fwe3to2",
  "key8": "2n4AjR6f6FVR5pdFqGSuN4JUuWr2CSiCcvznTEq6y7u2RvV2j5nKBY54N4AzS4aBXVkEKi4uCmidX8HctJ6tMijz",
  "key9": "62MUQKbSYDx2AuwjC4UBZGNep71rFVBydHDmqdR2r75dfY3MQuviQ7Sk8yw7iAmTLL93mhQ8Br2WNRao2s4qYjuq",
  "key10": "2VbNgAkrpw7MHYQQUz3tGwo9skkJ19RVbEPsJ9xbdYZTRma2DTK6QSHvfpDX88p9egFHdmYkDCPcFRxE47kdXjAJ",
  "key11": "2M5Giqikcq13ZKA1rAjG7NUc1XisRWig9nRNsokFPjDU3dU9vTSbjAUyBSzaisw2hV1fwi5bdFXLe2ecasCYibEg",
  "key12": "4XzbmHTi6Xy3BJMe3cG3abgDHBCDWPh3V3xiUZ5bWLepkza9QFGZuzKNoMWBZ7g3J6oPFn3kxVVacATF1TwfEH7A",
  "key13": "2XnL5f699QZLM8soAwsViqx1VPo9WN1sKVkb4FRhFjHSjJ8F56wy736xKoaeQ1zSbp4gmrrVfg6G5ND33bdfhgki",
  "key14": "iJZckzVUevR7oGCXZBmkSr9jWwqXvGFpeRKgTULizQU3oKpvC3BixQzMP8Usm9P8fexomrq2oqC3NBTjds3z1SL",
  "key15": "3MzWg4V7Ng1bHVufAZV1J8tojR3XW3PM8waE2sv1FStaArdbt7Ts7DBTi7tAH1q1RkGpNbGHY4shJBbDTt7c7ixE",
  "key16": "vP7atATuwVBSv2fp7LH8VvHBdmDY9UMsR9ZZnWoFiuhMn7Jx4z2SNFbodLSMViTsPJq5NnxDhmcjkdAudT5u57x",
  "key17": "3375iHfvDJcFKuFZeQX28jQowAgDGJYrhY7kC7vBVRsFg7WX2SjxbihdWZd74SBhJCtn8RTXMqs7Y2BjSDPkAhXf",
  "key18": "2vXTATyv68y1e56LFBKyhkZSpierr4C58hXj6sxi8z39gdj6z236dCrXde7v5uCw6WwtWAqhntTbDnzjqZVCb873",
  "key19": "4hjezQm91Eod6YL7EdmjENdpU98GdeHLDuGUyDwQJo2ChyUkjiKFhok6VUFfRz7JQsinwJYuC2sCUspQ6wpneHhx",
  "key20": "mWTwJxKqBnmA1oNhPG2Sed1RSAN6KVXWCZmv9CLno6G2kesQMm9GfuyBy9yYnbcFWuBaxgY2pfnDFWgdUjwBWDX",
  "key21": "mVKdXZw2W4MTNWLuYFx4pn6VRutJTzBhhXyXNmes7iQNcLZhjjxgk2s7HKgWiFvw9AgUUGoxAWLbXYKAtiMAczA",
  "key22": "2bMLyDrtGbd2AtGpDVcwnPbTn4gn6b5wUTkzA3PiRMJPirLDvAMYqAQ6my9Msnc9MGPuaj5rDtCWQwKxqzBNo8dD",
  "key23": "3AqdLPTKi54uG6BaqiuKz4B2C9Xp4o8QDG5mMbcnNZPrG1DQ3QmBYTj5Vgu3BX6pWSMBCj1BEmbUtbrTXG7wKpga",
  "key24": "2TzZdv7x2HkHx5THDCn32jrdD1P9T7qRPVA89FYzX7RY9ERNsU7iLHxNForGTk4KGVRGeuant5KvNF7FXDECc64H",
  "key25": "5vUSdqsN2VWhVu9ZTaxfXvgeQkDrz97c8yQT7mNd6ZitBaFBiVg6cJV4TiMitFLbd7AVLhMkdr5pAsT7PyAZW5WB",
  "key26": "3ErrSiKyGRvtAkrLghhC218RSVVurU636uNMXtU3n1ei6rU7RFT33iqob5eiNiayK88aWufVo2JRbwXwQMTdBasP",
  "key27": "2F29dRcnYsQbXsF8CvobyjrcFfg5AmABr5CxxhGiKoaH8ej1fw89qra7ewt683b4H5PVXVZhVVFmWb5FtgX3S1Ws",
  "key28": "4bXWgYzNw5eHoB1sw7rzoeYjvS8XxgM4FB5kVkzGkvLWAdqwdEGHdJpuKB4xQWbbHQEc1YumFT7H23EMTWfqH1tJ",
  "key29": "5x2bdftsf6thLU1XdnWjjAS9Cf5Enc4oGkz3PEC13ZbahtzDT996qunodaukHBzBvRHrn3yo6HaW36Fw3hRa9DYQ",
  "key30": "bh4AkCzKytimonMdUvJxq7TSinfGjXH6N5BqvdR5tHDFnPf9gj5gMT5oi8ZnkVMGbor6cgDA4FxZuiPtqWmN6sA",
  "key31": "4Sps4w8xDGXe8VNGyQmr5xxu8M8JLCAcuah2XEsNeJEQXPMXYZyqHiiJK9sbCZeA41rAxJkJtc1mRViyVJwdW1r5",
  "key32": "5J8bftidae4HzsqJvYmpMNRLC1spDMNDztQnBYyja1Y4XiMBiTa8NDx4FX1GryzmJYMhVtpTmaMKH4yYNkbVpbUU",
  "key33": "25wx1UgQP1KYyFizSRDjg1Kd7M7pXtpzb8xzmio3yzdRVzY6dyiUj8iJbz6KgeRtNTwbzbN4XEdtaeSGUfJd8bdB",
  "key34": "2ps4nDX5KTSSTm61xKaQMJ4HJfLUbtrAEqtodVNC8N3GmAhdauh5JHgcfi2SYV4pMYNaZYyJ7EUQgk4MsZzciuUy",
  "key35": "51tcVCcTBwy7GbvUx22k5W5ZUjCTj5aFhxnwqEBxBtWUGgZBx26Z2274XtSEWkC4f7VqfuKxiS638G3h7fmc78ot",
  "key36": "3veoyjHJGx1SuMjVQBgi1ZrcS2KNf5A6B3KA8ki58WL9P4G7zzks2TQM8cSTksoV7mweZKguhML2cMTCPq76FXHW",
  "key37": "2c4pTLq3GQ6Yb5hiCgypPrxrXLBFda8Q17tEJP4q1h4HCKZCRbSQhUcUNnZNHdj8zJS1zxCenqWLtbKQt2BF7T34",
  "key38": "588kjbcg4G8ARMmZfdUNZFrGxiezeYWAVWqsC597RADPM8MGqJWGRMf53LKD4PHrRWNxoE5HAizNVJYekX7r43C7",
  "key39": "3M71APLW27WNk4MYquRbVv92SdsvNijtbafkxw7XR4kbNNeQEwj9U2fscZ51Hv6tPsXDYWVtWNL3mJW1jtyk526Y",
  "key40": "3aSiMKbRfqBS6ssZpDV2QnXAEdzDeqQsEs9wg9aEr6YVdDBmWPXSgh6gBmKqJ4RbESEdbFxNiwfqhwo2Xz34od9L",
  "key41": "2KWZqAgJVafZj3UoK2oMQDKpe1XWKbH3uybpTJo6zDcBPaHRgs3boEobMCp6H6VKEW7DUbfdHLLVtTWKVjVaXSSw",
  "key42": "4VadFZn7evCVxyq3dnysiWRmM21XgukmGnGq3TPkpMxuGaTgFcbfo5V9Krtwjc3qacYQNwK97Bx6STifYvYPXqwc",
  "key43": "4vYviLLdsP68kfhVRphWAEQxvsgVFbpupzZosgbmszChLG4Enn6ZpMfEzQtdhQQvNoUzeEuKewcAf1DzNhKDey2Y",
  "key44": "66H8CzHYGeK3kKAk5ycu8VJ7MgHy3VFH6pKFEF2hzxEqn3Ts5m6AeuETMqE8rdGPRGpVWxat76aGX5SMuiGXw8tm",
  "key45": "3GCfzDRbKFwsphGdggUZZiAkspx5vvRYb2emQqhSrXxAzho5crr2EAvxHvtwjDZ2t9AcUxTy1CQR3S9yDvVuA5ZR",
  "key46": "3rSvfyTuiL26c948sc6ceBg1cC1SoRabuqtf3PWyyP5fxdxXpw1ECHDKdaUWZXwkBXb3fSpMqivRy3E4hz8ZFtSY",
  "key47": "2m3odRSt4piwX1Lupd4T93R8KhghTUC6rrQEXCiwS7jgtPg6NGzKfWsFTMk863E1kovfLAUGYqU49YTvKSPUGwZg",
  "key48": "3kkXVuYLXGtDfJ9QfRikDJphyxTLvfXVQFHCqMgFzH3wNXr5PiUJmirypAm1krPUUVLd3bfDLhjuz5Ww4EzxRhLX",
  "key49": "3JrMwv1e4PYVK3PTVJfviWUaapg7mx6TDmaePAchip39urDGPvLDSqrL8xyXo4wFEHBV3AQZssQeQ98j1T2LEhgy"
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
