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
    "2tTkN1ghz3pMh8PEdSiKUGpCNmmzLxqQBPPZX1Vjb45w1GsbpsVZ9U4dh4u2UWtUANorqQNR264sRezxDCiopjk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tRbkh2Kzv133jhjb6bv7kzZDcPJ5xru8KZLdRjBbC5rxVHuf4s5p83qC2Ags88X6H5MkWmQqDRXeX1FE4ZRjEbp",
  "key1": "4SiQzQ1xFeetnFhLsADFC87Q2q2tyWSmK347sQncJ4ZZ4swfZpajRA41QFyciFowfSfJHEuTo2Q3BBzEKS7r5gsq",
  "key2": "2PFVxwfo2HEeeC6YjWkxmtM8ofqwrb7hq6tTFTUeVMe4dtypD5yRoyDf1vyC75CWhPannKvqkuoTh8CH5Mc75yzX",
  "key3": "297jo7u6HmxQ2M7XFQ9iChv9XJy49DoyvUGAGk22BAKET7uB934AWiscGV8vpxpk6tT5zWTGyih3cEAMdnCndKgE",
  "key4": "2J6pDvAk1atag1n4wn1qie12mizqY1LTTGkUcHg8jJZ4Cc4YKFYqmcFtHns8t18hNNZ26drVPv6c8wj5YNLMhmRG",
  "key5": "3j4a2o4SiVfHnvPijNGz7JdscbSqf2sPmvmZpiEGLbb5nV5WHjbG4dwgfyz7VbDYmneXTwu5RJP2L1cEBTNiC4aA",
  "key6": "UhB7TudiJUF4SuzrG5cw7BbMzmg5TspTnUq5VZxowbGCaT81nemGZtNFFxyXwwUtFuvsLFDXNHAu13eunn3SpE6",
  "key7": "K465GyNGZhjEKbwdnsAfYaSGndnVXLYQ4BeMFxJurKuDZnzKLfe6HuMEkZUwEPNnLtXi5NfFMdmEXoWgiKKjG9N",
  "key8": "55gS66o7G49MCCHEQRd4tcNm8zmRagskqAA9op2jbmE65ypxZuGfLF2Pjs23my8sb4CbpUDsre6w3w9mXvsfaCN1",
  "key9": "3t27FhdGsS8hd4jm8uXKZTiFhdybytfqZZFdFDjBY1CXxxwSDbtTAH4rmmuWieYLXKGLrFu9axksBnCbcbN9RDg",
  "key10": "4NDUs2A7x5q6buXdrWUQi2X7QRXFqAQERoevbrG3cf73Xo2nChZdwR6bRRHpjKmCVFmdJJ5yUfoWXsLtfWsCf8QR",
  "key11": "489isEshunShM8EmvFbtkwqXNwt3wvnzvZJvee4bbQLxkoQXi67KCVAtEDWL8PH99A1r9VygquNs7nCgggbm5zzY",
  "key12": "25qkMB2qZpQYRgUAQwPbgWSv2Xh7uS4R8phwwPLLpsUdc7JAiSAPe9EqtBD8HGveWBHy2WWcJtqjJM1McpBG8YHH",
  "key13": "64CRXosGRQUFMtPvCEHtxSuUrttcrfFcjcX3LCfSLYVaK9Vg5W3pzLMsDP6zq4jprrCzyaKiphV41vvkt16Ydnnr",
  "key14": "42UmPqhn9NpqHid4KNc7Q8AXmTa9Rb39QHeewVJ1tUXRNCkW1ff7szjV1kAkwXGFnDCVii4PwmF5t3Ghu6L2UrVc",
  "key15": "3ZkvSXQNKereWXUSxsgHe4DniWGXoTj1qiC2Mp3EJ6XUyZ6dBYGnvVJbDdzAyfFtJHjJNLVEPpbcpQR1Gfxs5BGH",
  "key16": "5GRFrHjPejcoWMHXEGSNwa6oLDA8BaEWYYh4Ebac8orUZgMpqrhrfdu1JuqhWVxgFYao1KLj6f7LSvXDaN9C6FKg",
  "key17": "4tZkrhEFX9D8j8qda2HuW2Y414dyckfNXY4TFfYdKXKeYsGXYS1eMNsDk6s3EshyS5oNFvtpkToPRkhm3cuT6txZ",
  "key18": "4v9tFk3Z278i5kRHBL8E7EDjsSJuD11QKgEAB3BpG6gWJwi2wMKHAWQhpzsLhzD93yfiTNzakjX5MtZeiiY4VHJW",
  "key19": "tiFKHriCJ9Ajm9GxFGTLJppVrz5bMZk6AFwi7wkQ576arQ5n7oURBhaMFoQ4PtCJgTUiZFbGnNZz2s1Qwt3wyvd",
  "key20": "2Vy4p5GGbm5XDtertGpGaKqiggn8jyxEiQgk2U6vy5JYdNyCKd8Rd5vu5yq9koFzARE9mrK3PahM3eokC7iohn4G",
  "key21": "28WGNKrcAbePHaLYgYt693mwZPsVDjyCae6Yg3BCgW4YWdDW7omWHR4mEg5R4azp5bS2Rtm1N7sUseVzGvLzSykH",
  "key22": "51nRFTfo7hRv8ajoVMA5cem2PhjNu62rkDAg5gNbEwGVCe7o76rgqbQNBGZKmufNDCmVcT9cHacDdBHD7bSfHpdm",
  "key23": "3S6E7XEiiDUdi59NUKprQ17YQxUpW6U4E9CAX6KXsFrLLqv1A8vuB5wKigypkQ2jPsZbviyBhtPNaQV6i3DNJ2Gw",
  "key24": "4pavCXdC8vAgeATvqn2B5gkG857mawo6aAAJPuqgaYPyzrQusaBBc35ev95pTwzEkLdqTmKxqgVTRCQeARYWhazU",
  "key25": "2aYVyhTdgXNnkxeA6FpB3YjjmKzwbtVi2zqta8MSzijyYSqqWywtnJ54aQuLLEmmXU3DDVWEJ4Pn2RRQm56XrJei",
  "key26": "2uih9ofAx2t3r6UQ9fpBJog3Nup2LjKL25a6tZqDX1BH5ZmpnjHQLWUWhNsN6zo8FeRzc5DEBLATWXnFELzTrP57",
  "key27": "yfDBF2ubQtnhnuErSNRoPbPCJXa21QF1gUy4jJ6qvgWZgJDZ5DeWHEWLjKmzkmwMHR2STeGQgv5NJpSkAC8VgV6",
  "key28": "5rYRyoVPrkarW9PwSnkjdzs12moAdUsxybbjSHYuSfZuKmDRdvkgpePgwNHc94Mq7Qo2ZNjWp3AkoFRs1RW3kTy1",
  "key29": "2YYpzK3ZTAoGcM6zyNmpZzmSDw3cPm1UNjurrdrtCZFyK3AfVsnXLHdN4Rpz9UHsTUsfgu8mRqcfWNhx8Qsbv1Kx",
  "key30": "21rujBroXW5NkKim3FDLevXUuzDWzc4BmTa21TotbpxyrtaXEBjdv9AtXnSzF1bDS6EZ81yFYrPLwbzCatsN9bHe",
  "key31": "4kBmBwksN6pvG2sP7iZ1aZpX3Cy48TRnEf5M9gQko4xb8ALnf8Suhe2piDyCphzkG6VbA81XrZyZHJxqiyRXFWpe",
  "key32": "5hAg77YvSKSQbZNHsMFj4KiDwC7eefcc48cE59d47qWMJ2cc8cmbivFCYS1nV2czpN9R4brmErpTEbKPVH22FrFT",
  "key33": "5zgwVphqKfzDjkXc9kSaTjudAux6SBBDfq2QbBKsq7cyqDFFL9V9dNs7xq4ZRp2JQ5rbmyqPPVdLaPoRqkiuRzUw",
  "key34": "4A2sGDk7WUisUwPusFxqigBia3KvPT1esSr5VHmkrtc1TmPT2Lc5vxQWGAVWcwDCWAkHSbui1mCnJ3VNVBZy2c1Y",
  "key35": "32X59p2ywoA2hw33mGSGgwQH94a1BvnGv3BNZZP2CRs29Apj3jKR16Rte555rZbWecPMPMrXsNrEAdqGYBU4fSc6",
  "key36": "B3PRik4Ziu85dQem1587u5VQRAcwfWukhbhFZwfBcaAr3Km1k4PkwGrkgBhUznz9s7uaVk8CQAZTya8zAywH96t",
  "key37": "617vt5xSquME54MaZ2Dg7jxtCKDCtpThPRMu1NZo5dHt1RJrR7PSsELHSKcjrx2H6NHTfy9JAFyEFPBS1fUDRK9L",
  "key38": "3RSFfsBJkcdNvu2j7rV3ys3GuWfdGPo2x4r2MJJkyF4pjfhCmUuFi1srqTnh88Bz29CgRYu9EtazZfTSzfm2u4Kn",
  "key39": "2xbcPY1ZkaQRWd6mW6EpABsQyujhEp2AYXVEu1iRc8L9M2sr4tF6tqUtbWACTk9tueFumaaw7vGKMukgzcBczUJh",
  "key40": "5KNqC3japp8ABFR6BnHLrysVNRZfhPd77nbjME4Y2kWojAJ4BAmUhUmTrtR8T1oGYqFcuXWE9BjzNcDmPbrBUcpx",
  "key41": "3vbwmkkm9Humwxfk8RtwS7ZukciRVTqV67MPwxr7ubgmpKT3r3jdheQaGYPY2pd5CrJZargL1Braxu3XKSzJcbPH",
  "key42": "rJWB9FjQiLe5Ys4Hhwv7RkVr476tWoTdqABTRQyYshpkNnjLvZCyL1iEU5RquTVbAX8NFF9qvStLN56QoYuvrVe",
  "key43": "oDBfPPndTSjCB1v2ZziXWDDaWhBKHDBbcmAU5d6CGZcyJ2YUzzkjXXY9MM6QJvkPvz6iteJK7f9Jc7EQ6aHGiWK",
  "key44": "4W8Ws7mWFxseYJ9v9y8CXK9DsSMrjjFYtwg1t49FibpR3nYCtAToyRtkc8DZEs2MspowYFCKQEWTJTeui1MBxHwP",
  "key45": "4ZBkwj367LMGecGNv6eGtNj6GeAGXV9Ca1pnSZUjGPQmf9ve7mbZxvpuJpxfuWA7wJffrVq6Rws4YnQMBzGNpnzR"
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
