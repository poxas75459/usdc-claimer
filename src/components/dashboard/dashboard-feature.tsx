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
    "28aUUx6sbL5cNbBpAmhgJZVVGsqMkXVnXDL4AWCTLCLRJ33LjWjT7nK4iDtNkW1ehUhk2FWbmphobftYgiZKtMZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jdNxDKBYWot3wFUpqgHCdsttLhi3rF8anh97muvwahkK1VNutb6cDYAHH4WHD43EkaN7WTTv27NQntaZfuLFdXD",
  "key1": "45yuDoKZHiwr7kPYPTx8SARTcrG4EGfVdwseEm5QsPxvcPZjJht2dNahAwq1gSBWp3icCNCHsoyq9zy31ouvzibu",
  "key2": "45pMLLErAP1NGrPdeHWEb1hHd5u5jmxLaC3BSVcwDjeuR55QHh9KHpbZC9ftoU7XkhAYnAWRnXSAmCH43iVhGGGy",
  "key3": "2TkqFbgRRBQ7K4q1EuDvThnEmGufmVagWTTsS1wWJ5bptf9JThSq8nxaEJfimjFRsNkcojpWPfgFBEiZNh2XF8Qi",
  "key4": "2BpGfWHmhknjqsaCDdEvqFZ6UXj2ngacWV7eXtudtvK26WBBxsss1M75DVmbkKEGjPjJmASeWpXSzkP95FRCRq9o",
  "key5": "2A52AAp2hyP1mXy4EBjLzAFJ3SWkkzSEHngR88VmQvUdfn2ZHkukvatZZScKZx7eRBMagebDiD1v935XZCUihWcM",
  "key6": "4APyULH2UDT81JGCTqRrEHqhK24dSP2j3EkLFYWcuErcXWAcrWKmMke7UrTvQidktJo7F8vu5ZYvLeyg3p7G9pVr",
  "key7": "6jTZFBHqMpxXG8h2iMYPV3Jxs2mPCjhtyYE6Ke6QEp9xp9nYCeXMfC82mnS2Dkpo82JuLwjVxzWdpMyJgE8rUHJ",
  "key8": "5e7NQ8ZLN6CqtMFzJ3TFYAvTnrcGZppnD8Vv1r1x9DvdxyUAFqEf41x3DTVrPJjrFBXdw8ajaY2xbxYoxX5kNfV3",
  "key9": "oSmxuSUQJc5yyCwh2Zqa8jFK3WiXEcp2HrxKWKjLeFvwxfSqVDGxfjSNScbj7q8Kv5L6pezK4i9S2JRAKMSh6wD",
  "key10": "5wRdQLpeXVsQqGbnfPrf2Y5LS5KLrFFZEq13Cdx2dTQAfPFLF4naPm2tYkQ7n2Ei28nPRHqoG6zD9cCFHjemKM59",
  "key11": "2W6H24eyALMq5n226LED1T327Q5B63pRHt6ZRyrCiAgdt8L1k8FkSHwACEas5YEiTicNWYiMMGLr7FsKuLSCHYCZ",
  "key12": "4XLeU4npkDJHpyy7xGK3fjrqkADM69D4JUEQheDaF3VLn2KYZT7QYnu4zofKxM52uHB5YFHZAVEVsfdNw7Wkk7SZ",
  "key13": "4RS9874LvNdqqZP1R6viDio9kqWmKojegXC2JnG4fN4ZktTmCdtE6PuGX9f4CPzaKKnZbeVhEdLrWzdSuu8D24fX",
  "key14": "3Y1jDjdL9GUtwMqjgTg8E3eLYedpwfdq1rTCnGCk9mRnSMdXn2hCg8mv1WRgzcanYapYCw4mp7Em2p9zd5fKBWvB",
  "key15": "52ytvGyPctWNRJJJHKmdLvKqmkctpNw9E1nurdKZBmm2L4jSp1VqqqJ1y6sQPMH6Ui7ALFa1Je3wzuBrbevEb1cd",
  "key16": "246NzHRfT3YBUUy3GAZqQtyr8bLE8MkzhL19wDYaeThyU8tmLs5YfD8VhGg5Kw93T5FGQ78Lsekum1HMLhMTtT9i",
  "key17": "5wjVcNkxK38ayt4fVWEfj28jRc2EX3cQJBNFVainViiFAWjofpyf48NTiEEEzWdFctTJujk3yB6NR9hKGAtxQoRe",
  "key18": "VRhenu2mznhF2ct4VCJGocBRBMv1NmP6sr7K9JaLrZjqTKHPApe1vFTNUrRw1f4UsJTFZ74YaSnurXL6DDC2bxB",
  "key19": "aFfyJyxmHng5ZfGsgLSazLVFVMK25gUxyoM6U6BJFqL9j4LrdVxSEAgFNMCXzXXg11rHvQgfxsJbMsGxQjS2QK4",
  "key20": "4we4dZu34ZFJdV7TLsVRAMWsGRLpPFCsqgRfFLSHQHghs2aPMGp6DSNgLcxTm5cEdZ8rzwTrZtebKXD5xUUrsVEw",
  "key21": "3cfkRskz4UXYQZRMtuTpRLe1jUiGy9DKbMPzm5VP3VHFzu6YkTd8WVs53nxXN9rn1wKkqfuxffaozknutd7oJ6F7",
  "key22": "3sB2C8LRqwRPRfbPHCQkVfXS23Mj8jeJzCxdcqND7dbivTx3gzXUDTh7sXN6D1zoZSdW3ZEXKHWKz63RzBUeUScn",
  "key23": "54jQtJtKUcPY2RFS4eGfQVAqfWUXfWeCVYAr8gVomwr2iXJaFBWVnhUHich1wksiLyLumsqZCBVvaXZ79iTTJAhN",
  "key24": "3dWe6VEhpgnVchSiJJHK1XQngLuWKpX7JW8CApKLNPhJAKdssX2Qe7uxhGHRGPnG8dohA7cYq7X9VrYqqJaQQfck",
  "key25": "2KiYsiuuvynQiF8yvVKhMc7rkPnoZNiDsmS1Xho6sNRFd8BU9WRFdEVTTDPacmunfQwxeeAohsWD2wRNPDZ98Yfh",
  "key26": "3H8Bb6ABCU5zqv4eXLHA9SnHaSP7Y5QV6HkP2mYSHDGyG7Z4GHcdF5k8CZemZznPjgm9Vk9qYHWjhkU99vnjJfxw",
  "key27": "5c5jQMtkjTpXaitQDyiMi2hTJU5FkJoxSeX3vSkjfbdfU4o14N2wif23xMPePC8CnLSRX1aWvvb8rNZgUspEu8te",
  "key28": "msXV6CE8gSKukXW8doZkhVzANcLnWxmF2aQJv5biYq42aRUe8B8ZHpbAK5fgvkUvKYgyRzvrf8SCeZMHFT5nBhx",
  "key29": "21TcTcCAG6ZpLRht1mXHAccYzWhWu4gDAfi52UPBT8xozZRD8WUofM6Bwwus5qGTjwh6AbbxBkjM8g8qSGxKh3Ju",
  "key30": "5HuyTKesBm8h382CKXapP1p9z1XGzimZ5fDPRUS4eVumWCxnzkaTN2xmeouSFbu3GMxt3aWPnU49wDmWzAbwFwmQ",
  "key31": "39cKH5SiBduXZpd88x5iY5uMUgwLEWG31DRXub9a4GZFXNggatpbYuNQYPzkA1zc3chyStZVUJGBAC6f5XhF2B4G",
  "key32": "4qi8VMya7BLdeUBwyBh5EVR7pRg8T4LzZAp6rt4LdqHhS62mvfXwvA2VW35hfGxitCSTViv1DxRwEh3w4qsHhbAm",
  "key33": "2zZtPLtEKJFkEFzxKHmE82WXP1EXESurYbDe9apkZbrUYRAjso923TpwRNKV6VQuzwRMSzxqPgpptZ6GaPx8x4Am",
  "key34": "4PxjhUAajEayjdid6U8iBzsCF7dWUjjnePkcL4HMBvg2rv35Jy7qqjmZFLGHnBbmqMG7GPyBbZi4jVnMHuzeSj87",
  "key35": "5V692KgxPQVgoQjywBVMkLXy1936hKohjiBm4LeYEsk7QmVc39ZcR9BUH7EHJMk8ehhUkJMJQTrbfnxpv1i6MHYd",
  "key36": "3pekuUSZTum25fEogCxvq8GuVxpSvqZiiu2DXFkpaUyj5Cv6k7VxojwFmEauziykPufQcpjPoNYuEdAgVfpDYSQJ",
  "key37": "2RTnmcS4tCZ7DUARYaniGiS7LV8u2axzzSb4q8rtYmRsFwxTVWvXRcq53C1BkrRH7PhCoXPSZ634YFUPcSVf7yZb",
  "key38": "2abQowmagnwr7BxEcQqsWGLZer7dWaTGi3yqqUdRPTFkGMRWirggTc858ueFrQ6kePaYKxhJfBLNArHMVBXad8jH",
  "key39": "q3J27jLfAXaXE6xunSCbAjUoPwiU1zoLheCy7nBimV9snqJci8yEASxZVxCqhFsNuKySbjYpjEm3EgEtpCchtNz",
  "key40": "4UA5WuhkRqy2Nazsu5kZYq5C8McxKQkhKR3vcgvf5BDSNiEt2deC2A1KRVbMfZVj1yPKW5Q7Readceu2zudqfpZs",
  "key41": "2yZtLL5cECG1iPnv45zWqWWAxTd5VKLmtztef1NeRTBMWU7XC1GPPMX39jN3gxRiq6yRfKV4xNhQzYitaDm1BLKj",
  "key42": "3uQt7KoyH4WymqTjMRasHxi8tg7KVAsiFcj43yrd6dzTvEhuZhX3m8EeszmFWPdSrjHtd8Ujt6pp9761tRhHQZCG",
  "key43": "3n6dvNDPB5gPQ6GeFUQezgMYjeimmkUpxGzdsi5JWkgKEHMpSNrPrZHHJv8y5aRbNLCYQRE9Vxd8EgrWRfBgi6wc",
  "key44": "2fgMUsErjwiBuogpSGRfywZMPvjPr1mXzfUetbSa4MkNND5KXBmZGXtoYerc1r1oCwHFzmwTGd8YdpcrQrYKF1Qn",
  "key45": "2hA98copX8S5ZKFfsCcQP6cc9mPn9KYBiEW6hYP4oND7UgjaqsfnDhwpCgXYPy4kKxaVWN88RHZ5wcL7kMtPVhZz"
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
