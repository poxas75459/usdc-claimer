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
    "2j6RnFPNdyYxVobeiY154tBihd5D7n53WxqUNQcJFSKx4TMtje1QcJs9Pbu8Ua4nSJpZvueAYA7H6UsA9hG7kCgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Un8ibJEv11yeHzSxbNzdKzpShgKEzchKBUynwZsjPiydhuL6TY45bxe5NPdXqAPS3CkD99QxB3P7GS8AqK7KnPF",
  "key1": "39muaCEUQKAZj2jgHHQDqDKwBDvAAj1wBjqsTpay7qinbzKAjhzzC2j8sQ8L12xaSdU2qNyWG5pM18PyV8qzqcAt",
  "key2": "RhRHeAGFFDtjRLLt3Eq6LmeSXYhLToJvb8qGPWw9B5NXVxzBHLGNNvCbXv8ftGvetJCVvZTHZ2LbZiDnhVV945w",
  "key3": "4YJfuj1ehheZeqUnMbdYjDagg1MQykzrRfoSk128PoJF4bv24KLiVCx6Jnhtg7ZDSjVCqjRZ5EAgZbMa4fiyug6S",
  "key4": "3NLwPCqBW6ajyAs7KPWzmA7QFzNpYATBjMYYAiiznwx65ZP5992phNLnzZ15CyBJRvXskfL6sMq1cJfAR5nQhof5",
  "key5": "43hoa2y8Bw9YvggPMSMiQ2nBvMf6PmKamCRSGqfr3uM9HHfWfnNDMd5KLudDHMjgg8S4WjHZL71t7BxoNvZLqnXC",
  "key6": "2rRKhV1cqXnDSEEwEDhd7KVPTmsvZseyabV2Bivax36qdsJBcJ2AoVBBjePNUK4aPmeiznJnfUySzgAVFmG7sG86",
  "key7": "2DTFy2Ca2WrbReHqJtdAHeymfRqbWiuaJcFy3caYNT4NURaTmgRrUvceaotnoXczDHhKS7ehbEVrA1VJJVCbAbce",
  "key8": "4sZMyNLdCCmWwdi6oNZyJn4EVPFpJJ8aJ9FS2utQFSSWMEFn86TgTGbwiSReaqYQWBkSK1sHJyqy9fkiH4Ua8t3a",
  "key9": "41Nf8xKiDM59Vz9JUPrkAdDDSLxr5FruaL8tqoUu2bfB4XZF9gni8de891SnyGXRE1DysXTKtwzQRp7vATt9yTNX",
  "key10": "4UCV1yaiGMzmhukSpzRJKzubezqagrA91cNWRtmya11qPpzDY4MUCxkqsySyPNjbvz2v9qYw9RVi1S1E5iEaMAq4",
  "key11": "3QBeQcuomdfDENRjDYZSYMk2CSxMCoNyjhGhSr6FqRcTmpbZEK4KytoaByi3PnFyRyCa8vwjxYwn42GkhdZ54SxG",
  "key12": "AmgBGuJrqQbYXePne9Vo7XvbciUBD9CvQ6fnZjquQiaiMcEbm29y41DUUQYSV2JpeoAkxwsqz3ziL7UenWtCva1",
  "key13": "5pF7kBwyyDrAnGEMvC4LpH47AjTQuLGWT1BgUbEEbJikssgPW11SrnYg9r5NmpAQ5bPdGyWg4CypWM9NSeZqqWHc",
  "key14": "5oX2Qv6og8LqvwEZWoD1VnMyJpW9jitJLjNnmEs79h3zGHYJTtuVRxrrGuBdC9BiXYRatzrdstNqJQy6V2kwiJVA",
  "key15": "5SZLXidXtKYbMFY9avRoUTsMURHybYkyDCnEiFSHB5qQGDiqFaE1x8CfdMFgBqXRkboshAcKnFiZhAVHxKkQp1Xn",
  "key16": "2x5hehxxyh1p3rQbMVD3McQ2GMMGoKVMwAjZ6u5G5695Fzr1C94vv4Fp9NG9QikvPCKuNGU8AFFxSiQgEwQ7CFxW",
  "key17": "6XNqyaUQMvGTF6XuQJauKfmeXE3zMuGpa1VniYjJYw9uVKmyziuHEi8MJRgoVUagtR8aWmEHavrVPs4N3xZwx7z",
  "key18": "656RQncmQAnwaT2h59q9wrrTtprszfGU8YqRgzuPfEy4NqLKuc1eL1YYcaCQuN1VHa2mzmdjJj4do4FWPMacu2QR",
  "key19": "5RWFtnqLyASuyQ7fdeX8wDbyqcfH7WQeehD1pnTnacCWeeS158MH1TfZj9zCdsW7pfGQBAZPat5kcVKCkUzpALYB",
  "key20": "5teu2zCy2pYgZMRVug3RxoDjTtg2s4McdcRdKRQ2uRnQmoUNPJnPTAkbMk4jc6fRQHRFnSxtPNmqqnEoAsWxHoav",
  "key21": "5mSHEJkqiWpHEwksLtjRgiCSi7BjL8tm2b4uwzytJBDH6M2DmLu7DvBryD1huAbnNn1xnTpiKbtNVcyxus5ryY58",
  "key22": "5xzpaxzzLYstRQwDGafin1p5JVjQGDh6CMwQcSFF84q7ZdGvcd3qRjisHxN9iA1ctoePjF2nueoFt3Qu1um9PAjt",
  "key23": "4o7rzJqmzuEruUTNuR1kn2spDrLvvDM4VAyeNBy1XLcrAxfQGca1NNyGNsXybBdeeWuTmiE84JZbNncVUqNMp6nw",
  "key24": "5FsGoFdqj1fw3oyjJrv5nZR6MLXpzBiUE9qKDvUjSFdUypSAEfrmdYhxT2Xaeb61roLSeTVRcfuwfcKPzEgvy2bE",
  "key25": "4GjMHAzZWMGHDUxqZapYvk1ABePBbdRfbkuBfsudK5HgEDJG4CmPX9sJZRpfUaVy4LLcKX3TU44g7BMuHgHMAE3T",
  "key26": "2um8hxZaFN9AFrPLyRn2qnj8wHX2B35NpgxG6mV7x68yvdYem8JSubzPH1rDMbSya1JpBmEny2RRZmEEzg77BxCA",
  "key27": "3rkZ9KK6J28tqfVQHybWQd3TthQZE7w9CnsEJyQWBe5ih9njMnKHkXnquyiPvevfVfJqQVbgj7PEEqWNKermnknq",
  "key28": "2ucPS2e86dXqqihFjVceYURnPKDeMyMXbbrURsr5XrL3Hj6NrvFT8iUt7UMo9cKHwJMqjGGSvv9ExwKr59WwpCxi",
  "key29": "22ZhXNAKpuUCcYt8tGr3mYXRvEkk7kRkdSFCvT8e7py3UKkKsW67TBF4gPmnJCYYUW4oz5Q2JhCxFjE9KcEqX5Ed",
  "key30": "3aTSzC8Gvxc1J9rQghKJEY2DfpNWjxb1CmBSrNaxcY9uz8G4wXU81WDfGq8gAw9Z1aE38dfV7bi8EoRcteUMSWbu",
  "key31": "42oA3xzGHWQsBqGutGNQ59rFxpTpnppnhNnTZsBmn5uqvUgCkxSrnQXLptteuh3qHFteEe5MieiLc4gNNGQLB6UY",
  "key32": "4bkNUgZZCVoQDT4wmppWrUSc2dPcpyZ2zTFEjxpFA9hgfBN9amZkrtvzFtgjCNrgtU2tVbcTwXaESKnAYwQNofXw",
  "key33": "kXwxVWchpGh4gyDR4owu1Fe8Fq5ipDrGatabL2qqwQC1LymcwJuiCV5M7qLgAbzhCakyAygLRvDti1A6w3X4s8m",
  "key34": "2hn77KY1T5eNBKrwyqjhzmpYvDAi8LuaEMx6dv1kinvd4ZirD3vTMm2ceko3QsRAcLyKY7tpjZsk4ACVSDZXvEHY",
  "key35": "5siwWJa2VmoqyvKNpJ7xjA7tNGnzrz8rd1DHm8DBFvyRhWNFuu4WXLYeRBQqHLoNStgxUkifvptg47YecSeDEdT1",
  "key36": "5VhoXw668Mw1SYsLiu4AWaXPp6yjbqdeM69RirE2doDFf9eYLEBB3QopFj9eqeC6LbVAA8nJA8M5ojvfBPExkJS2",
  "key37": "3EHp53T7PiHGCA29Br35c5eT2V3Bd6Kzi8nhT6gLuRoeH7Vccb9NhmnbUCPMsgtKhHjrKdFM3ooP1i6yxYu7ezkh",
  "key38": "3jotV31PXuHTVCuz3cFVKSQPNCXTzHJbAuZeeAagAqrL93EiMeLYGFknPZ4MQo7e66JMf9PwLF6DWzbjJrhQwBVV",
  "key39": "22S2xT87ADUeibBHosoDJv8Eo7T7hx9nuyX1zoLEKhayPvW1aYi8MfxBgdtqoaVia6nwgYH7YjNhZuTNhDCqiDge",
  "key40": "5qFCCSQ9wf3zYNfZb9RxA8kxWF3ttGWQBdMsFTFKJpjWhZW1pHUGYnm12wfvGwgMPL9TffjUUtdprTzuTDjp9cPe",
  "key41": "3CjYuPT2NZg3bznvu7ygPJEqL17PaDVCAK6geGcTHwuN7uCH5PDePWkTLJGCDPgT2PRqPSh5toND1ZUbxPJA2Kdu",
  "key42": "3pecYFre1tGxfzRewCLhir7qmoNo8Ec9DXUkozRca7nkgDhf555awezNCvyhhzLVrqzicYrsBAeeTvTxWiiQpEx1",
  "key43": "6sDjDNH54JGBXUvcdhTR4BS4w51MU8uNUTyY7QS6kkgt9uVnGnAi98wtGmqP7jaKoS8yX49mjpa1QYQQvzd7AXX",
  "key44": "81mR5SNP22n4UHD3YgG33oC55EEa64NEXq2f67CKiVdxWBLix81ED5T7xtrg81JMbqaZMVvQT2c5wYnF2qeqAXa",
  "key45": "2sgaRZVTCXQMpk6rBnSVxcnyxKkf9L9WCw54k6Ajzp7g3xsrt8qGw5JeCjxSgQGXHKVEq4AMPTnPsp45w2HRP9jB",
  "key46": "5WXowD4bgj1Rf4crcCwZdosqw88zdsHLzrYJDXhevUFmA6qMfsq1zg1rxSEhArw6ycmsvqx6c47JRmLGnfNFyvAS",
  "key47": "4dRZ7wFB8C8NSMxcWyEmr4bs7shcDWudHxJuXqbEiCtvHfLFmNud7HyXrkiWH4UmCggEH74U1ANmorQn85iE7Hzb",
  "key48": "PFPJX8CJeq1wKnpDhxjEngrGVuKeG5ETm1qW4bH9UW7YkwCQayohR8k7XFXNU5zygyjgdoSLVZPwujfTvk6GKxC"
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
