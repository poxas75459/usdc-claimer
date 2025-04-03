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
    "4WeKr1K2Qx7DBCo9ukFhTVTfBLhVE8rBXLNkc5NcWv6H3ywPPFt6CgepM4zjeGjXww7UmEr3Y6Xhz382vGsSMsBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yjHrSKREyQ68gFQp7dDFiLrVoA9W8C4oiCCoZdpZt1qZPPvWkA5fa4uWqBZq8TLzJdTBWsNYkMt7VAS65u7LTHy",
  "key1": "2UjQMcnhchZoFu8iTFHjx4Xe11K2nXP9RYPagb1Aqov9HE2ChDprXSkbsaytyxsxWxXhqwPVyJPauyqH4u94Nxdh",
  "key2": "3A332pM9jqfw1NoG4KVNXqw4pJHNfTX1d8BZm6aXooSjYJtSNxrC8Pm7Tc47ihV8qLqcwwdVMYNxoVbHBRP3oLKv",
  "key3": "5Y7Tq7KFvAzygef3QgAKwdkhHqaAo6kG9JL1R7X2fqbb49JLYjLcNjekma9We5eVwKc4BhQDYrN5yxAz8g7YwTXv",
  "key4": "4tcghdeCwPSQTAC8Wakm61ha5KS6ebyxC3fk2cT89b9ZeovWY3XxrsymgAScxM2FyDwn7Tgzvu7XvbwQHJ1NEQVW",
  "key5": "5isapSkjLbEgnr3bHxUYm3oVAwcJX1y9d2VTm9x2bjpt8eLWLq69XBUzTuyf6kZrpaqmskH3vH3LVLhjCqdA2Tz6",
  "key6": "yYdbMEW1LfQzCZ1ThN7wqcRQ99NDmACKnDVvFSRnvfrh6P2zhAUeRQjbK3KGVLuGq4apgEvtZaScYAmwjCVhTxi",
  "key7": "5sPoiHU1suEhQHDDkRKzu75Nx6YRbqih3wmVvjnStQNiSAFMou9aX7z7EWSNvKAyK5Qv1QfGxgmJdMkVRhvhq1LD",
  "key8": "4waoRVT3tXqqnzjvi41Ww386X4SEYZrJsPypt1mvDQov3Lq5hoP3aLV3MJAUPRwHswjpHdJwp5vMDFBjXmK6PNq4",
  "key9": "32XaSw71BUCZroqoasnSJpXknoqHzS6eGEeXLPxtkRtuuLexue1UFmbpnkF2VBLqgbznKHpGu2EVHQhMgD5eJ6ZS",
  "key10": "64hWhqht5JoNtraUSbhDXmnYXrbPAhqD6Gibt2ZJpVfdFMwALqWj11yHXYWXXUwB3nwnVd4zVvCXDuPKtMiCDXYp",
  "key11": "wi7W2pDBpQhc9G8b7n1esEpmamPQjWCkghTV1bae6eaBgVMsuGxUpvairZ4B7bPcjA45ggpQyTDzkpAQsEWajQ3",
  "key12": "Dox7StFBEN3i3KP9pvgVrvS9VLRD8gAMTHbuCnuCesriwU5qR656XgBtwPnUUyMZPyHfQnf3igfF1waCd8sU7MV",
  "key13": "4n7DaWetZFrfyXLezeF15kvJbDgQ9MPBJ9bJ1BDRQVk2qumPX7AvQ3DZBwehH9waK7Ui6Gk5WMde3gDDm8hXLmYa",
  "key14": "igYjz3s9ZdtzwPpKam5je46upnEo1UGQMAmqxoydRUidsnr2nZAXsT67yje9Hw51NFm5jcpA7jPvKcFjoxHSABU",
  "key15": "3wNGxu4iaUr45tXirxnf6ujnAGqRZ87etAw8vk8x5fmTFcJ9sL7A3g2Rkptzj3cJBg7Uz5gWNX2vAvsKv3oFgX6b",
  "key16": "3QYyUE8MZHN46NAp4uQPAPgomcq3G8ie9GydQQtmvg7i5QRyDHvY1qDzT7SooqjVhUhD6uL4Zax525M49SWanyJD",
  "key17": "UpPUU644kMjGAEYjMcM2SSZgXQxqgexM36J1pUrzXwoM5dsQ3ZgTQ2UojAKz89vwSPg2SXGpAVKTAkVPHuXgkLf",
  "key18": "3594zSMQ9tT1HR1GJ4qZcCFpu8YhXm6j4NEY5edzGVaRDbTTDDdAXWfDyFwfLQArcM91jkEGr16oN6eoeAA9DqoN",
  "key19": "25oK4d5s1bwopfu8T3YKcqW9aj9mobP6BET1nkkBRR3pAbfKTiDCGsPTj5mL6kaj5xgxFMPCrrNLf724PPsogYo5",
  "key20": "4sa5oFJopL9AAE1Ni2vCPW2F3TMKgp26y62rZf1mh57vhGfcNnhHCfczzYtQobTpXDen98KeBW6KioBdg679xF3c",
  "key21": "3WifKgcnCsiH3BWyBNjPNNF8ustSjnexkiaMZcMp7Qh3SdBYwH5xb8SqgDs56qhjvb8bm64CTPDpsoohQzGdJAzy",
  "key22": "25qibcAnC2EpeZZctfTgLrkbaVcmJxs8TbVp6uU8t77CbSACuXiGVDN8erLDPcaEHMsVDjhxfR6GCy3bHxb2hazL",
  "key23": "TrnDZ55EWktHrgXc1toivJGwVTjEynkrxXUSQmEn598oCkfx8tnrCg7sRLWaxLopKZ6F1kh6SW2Y9RvBj9ehKYe",
  "key24": "3eNx5vbP4u6RRFA2VfVq7T82uYQPQgHzcPpoyGEA2sjbu3t8jegA3JVz5BG6NZGTSjzJngr9aBrAJwTTzRFyyzog",
  "key25": "2LxwnSnGVRSzX31bDhbHwDBwjZwUT4abt2QBUjJNSPytrMDG6uTyWT4MHWhAJc15biBv63KHdqCgEhMKFQjXivZ",
  "key26": "HMMsmLtg5SAb3abs695ykrV4hzuUwDFQvupr2dLrkY6P7vJQmT1GPExPnkWivdDJQKgVGUdPkpWhG8yseVJnKVN",
  "key27": "5td8HLDJ7CC9ipX91toCELh8bKtn1cc5NozQez6TsZuC5YVpe2YRfGBY33JcQT2KttPnRyDJFyNWkCvKtzWfZypL",
  "key28": "pGc5eajFi6UFincd6Fb4XmWrWEDM4gcnCucBS9jwJUsLPnhtBJRR7nZGDa9YNtCsmzypsfHnk7Qpd4UEZ7sMTsh",
  "key29": "4t9SvhdDEa2EinXVQANPeGyJoj8UjVqvT6MwRtXDWPth4WSN94RfbYViFBbVckvV79LmPwvzdzbvdtRXZzhmRAcY",
  "key30": "46ux9sd7aj8AdybudsuPKQSo3iR2fh23eXNepxg4CDfuyC8P6Co9JWRcf6A2XBmgFS6uikueJkVyBU9rGhPc3QRB",
  "key31": "3XkgkZ9u7NRAKh7QYdm4qjCpJTQFFfcLKnbywpFdSCpSmwcQDzGohbnvz9gqBJ6LLA7FPgwJri8F3Lymmx3jKowQ",
  "key32": "3mE96c4P1U3NLu9xSaqKjcZwwHLtZE4HmUzUiPKZkuT6B1hCDRdPKYNtb4V9ggm29TGBByUAdAXSvmhA6jGE3J75",
  "key33": "wz4BxY1VT73LT86VJsdoev18Ah7mWma28ZuNe1k5vjQ2wAn1nicTaKRiAdaZUTsksiiphGGLjK9gvveuiY4xTDF",
  "key34": "3vDs9C7nuMbX9XD8PRwNswqBQgkHhL2hSgXAN1zZ4Emo5L8yKqTSbsHrMJUAAyz9hwkKakHUvVv8vNBEp61cD1uo",
  "key35": "2P96yA5EKWwrjPpbA5LpjJh6mL9hXWsBvV9BC2YPJTkmnUX2FAtGgaFWwoSimZV83pj1QzjgcqUooiJyuXbRmXc4",
  "key36": "58ggbnoHmzpNJacH8M569anE2nruzNENso2c4gxK1fjByexCUMP4hcQ2CvsAkWL7RyZLncPmhd67BNxwdzBbdybw",
  "key37": "61poVD1J79e2Qc3T6BG3wqhgoNDGj4sSteHCrU4xJ3Y8Uep4SaL2u8MiUy3br5QMDJKKgQYC17bpi7uoYfNSxXL4",
  "key38": "4HuKJpBgQptczrYvxanMBenCNWPZ9gR7VN8KbhHWmdwgnSTA7V8UZ2PT8nfkwmoKkKJppwdqmnbpiEbPvDrY18U5",
  "key39": "3FKMbyx7fvge3yiN2L3wTrtrKnFRiHQ3waWXHb3Bzwgtg38Jo6hJgyTLgg26nFRcji3c2WRyTDWHNxZP8wDYPxuF",
  "key40": "49NhE6Xc7J7Yf5RGMp8dD9bWSQAcPAD1VZZV1GHXtcbsFybiDPCj3CJcErji2Cb1xMi4WubKUPUyDYgeLgcuSJvT",
  "key41": "5A3s3TyyBFYUvNASad9e3vrtM2FWZV4VH218BS59Xhy5SdJgH5dwpqUrYE7DsEeQvkBR8MANJHK25rk89VoyM658",
  "key42": "5C4giY5GdCHS2fKHJa87HBLxSVRbsupHrNvW9gFTjZvi7CDvAfQDC1AymKChYUfjrZbLeaNQ8wPnmdDhe8Rcnf3n",
  "key43": "64qSZvBZ8utmHLQTPA33tVPpJqmSSYoDgsYfKGPKpJP3RDbS2XxTqA8jzaN2spajYFxzSHsJy9vRz2vQYf4aS1MZ",
  "key44": "5rnaSqZqeUsZbVa4jgLLxWBY4YyuBDrKakbhc7ompjBvsKQNKuCR7Tcf14BqHX75WWn65cd7Nf4YUzjjqRyNKKE8",
  "key45": "xXbQJrKVG4vDe91PMFyX8qL8RmvwZf8rSEY63HxMfzWo86dy9JiszgzHRtyZEuAMRRmyoGbbnM8XjjFZ4gF7XVJ"
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
