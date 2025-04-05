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
    "4bQmUisZUU163LfWZ5VBgea6CHVLrRirankDcFaxJPXjQJ2rrmepkMxUa2CskQbkA8SNLvM1hAzh2y8NLQxxt2Gf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RWdPJWZ713GXYVqKfbxaggksGqsJKW81pMDbdat99ZXc19KAuACvLH9uXKfcaGmUwoqtNTzkVEUUHbGeUtoBmmG",
  "key1": "aeHMsSm44dMxuPJyRTf5GXymnvS4jhexWxDS6SYd9w64326tvYx7CPFFP12PkD2EAgDdkSP6f3YiTCPzBYYhaNd",
  "key2": "vhCjo3jdvanVeSrNpZNyTxRTRiCj5txDGXLUQzgyJLt7j7ypmVqZEUwDDSG3UEvKhQbuAsxf68Ft9fMSEaCQ7zM",
  "key3": "2rHQEdE2mYHqkxEHz6LyMPdaFu5fka8ZRQUYfx4Au8DCWbGv8vzregr8cCFnihVWMvYFDH3jBUPMsH3acxCdyaLQ",
  "key4": "uLiRc44LxMXk5fVXigs9YdRVPKywBKXTBHzcHFuuRGhmTDrfuy5FzAu2ZVmMZjs4PfYkiSva9ommacxmpcWEwQy",
  "key5": "AYZShopqPC2g1dUda3ECDi1R1segyKw553JuP7LDv7JUoY9oN7CZ2TN4AwiEEQCN8CZwddZQKhv8TXvXt2gtbAQ",
  "key6": "qQwx8HaCfyxizQa1L1gxj9pmsmwGpvBqtzAryNL9nf1KqC2DiV24es4Zjkx8BCqV2EHY5tQoviJXsTWypjxwvKh",
  "key7": "5NruD6h9bhULU8S6G5Gb7Zus3DQyGqxED3CvjLQFDDUWRBDRbotPaXGWc95nFyWPVLErkKXQAace1dCKNR7t1uGq",
  "key8": "3LgARuoj7fYG7zxt4f9Qz9pEtdmscA3Hfbi4odMHNqaV2jSiFqTkoeeDWw3MtAnQz1M4Dqw4kVP3F5By64bPyYhy",
  "key9": "2Z5nCTaBfGBrnXEQkBLRGFBNFDepmjwpE3KiN2Rx5enTvx62aQ9x4Anh4HAzf1ENVW6AdPTRxUEKCxLRrN3b8WBd",
  "key10": "3Ww2F85XHWmuQ48BscB2bojMAGnDYfVfeAZzoYyApzdFSx6v8WM4gmtnQS9Vmdvqh7FCrvfxQStUq8stRkCtP9Mg",
  "key11": "3zkti3C7FDW3KDpYNqPUsQ1ZKzxRXHef2VNvEkJVPrtXQ3xTuXVJgPShmjXGqXwB4z3RWQtp6WQgcDQ87gwpieQA",
  "key12": "4FdBGjJXKhcUkc7nCQZjkNvxF7iuRsL8k92sCMcBfWR8pq4xGUHXwrrhcP8FZEH6R1iJiaN5rmAd3QxU7Ezc4Ag9",
  "key13": "3WyPySsXYWYrryg7k5YsMk1FeXtd9CWFGFA9dWeEs9x9AfSLJeepf8jHdHprhP8acRq8fMUy51FrLWKoohxY3T7a",
  "key14": "E76Gtd6XuhEsNC4VXjie3HpFfytBxrW27fi2vfyiKgVx3SLxJUDt4AUoyKSDytkjqxQMBm6geRQL2UpA72NTViX",
  "key15": "436kUKa5P7ixfJ2dHqLcH4em1pSUkTNc63MFmxUdwGxqKudH3KDMdDYJUjN9EttzNiesHCNQnvidgzeJzxN1iAMa",
  "key16": "E4VwBxyxpQvpie8mfhdoa3K2aaJw7k4JPtcg3R4iBEfyhSGrmec1LyKpmzbjUJ6A8M9DxsiLvoaNwLAypuFz5d7",
  "key17": "2HkdJ4zjqohG1afD2ibn1r5m1iYrzXGZYqfhAk15t1Hjpf8EkrZ3k7wMredgLVVNNMQpG1tJietARkTyLRVJgTvs",
  "key18": "43xji4T3UHAarSyPhEeitSkGrNvjfr9rPcWniUtSWt9oM3amoHQwjDsFu3ubUwJVHBbtJmELQY1e2pQ91UVwCVQs",
  "key19": "5YroSQqJaw3R4aAmJgc7BmaqYxaN7aZ1wgjmay6yh9bQVEVXuhuyhL1exF6iXUPLzEkt6qmwzk6uJTz1gxdQwcb7",
  "key20": "5UG9mAJ7eXn6G6UGrVVeDdmqUYs9sPabFL4qwAvNEqGhx211NtTUNLjhMCUUsiBKnpEe3usFytGnWPLzZDzVCTBV",
  "key21": "4Nrg2zZ7PaeKViFjGaWGXnEHcUa3gPvaVSdCRAcuCkhRn6M4BmyygNbvrAMSU42WrPWE6zgmb14yc6GAEKveUEX4",
  "key22": "2N7rTTWNafTSZ8g46en7ZXtwVmttsPWgmQeGhSVVTtWpRcR38KdmFwbJ157pcSiYVnabsZ5GgqPmArSJKnzo7E8J",
  "key23": "24qakmkbBnyMP7bok3bqm4GewS3DZB7X2DXJmGT1fuMvL6LYyzoNJtnzVR8sWerUZDrMoNQqUZuot5PdM3kThPP1",
  "key24": "5bufvsCJjd9HRjev4FeEXu2c44Y3a2bpP6C78GN72sdN2KtJ7VaUUevRuisfQ1UiQyS4V4raWgTndeTW3i6t2vWG",
  "key25": "VgEZhDxTS9Q3PC57SdxpEeC8ieKUUrovyw1zcSmUiUu968TRjtX72MTpL4xQhkL3KdF1g6SmVVenHZ57vB8onwd",
  "key26": "4WiPdpLVZwozUBCDWPNQxR5mRBGpKXaWrcpeAQG2FGCVHXQ71bVi7EayFib8zSkYz355SBUC9cxBr9jfCi7JqCXr",
  "key27": "3wZ6z8eGpav7A1Kpwi2VnyeaQragGkYhZcuYWAkiZBvnBugZxJenBnQbbdQEbgZW2fLnESFeWxhT6Q53PRuXz4nQ",
  "key28": "5CxTdk7D3oVgeS2s8PQ4Hbc67zFtXrtKqJxuybtQLBqhMoXEHTho2VSkqo9nZbwesNGSbBofE16D8ERLcaSSJciX",
  "key29": "49SAfTm63d2mMUjKnmJZheiT9ucC7bs4sSV53MaP8P5miVFYYz4c9TjAzGmQvNXv8f6j179K3W3fz4SmocHRvx5p",
  "key30": "4f4hC1TUD6MHMchrSKFLjopFfu2w1QT4SNRPz8YAZ2c7gMNDVA4ERX7b1BRXYisuTqaWtyyshDGH1HP1YhfLgghV",
  "key31": "5KYTRiYG6s8vjmrqezCUfhcau2FoZDpYYRpKYn2MQT5kXfrMen3yjSABmduWeGbFY2R4suYDwMfF3a1hpAuUGaau",
  "key32": "2HpEmxAxG83o3LcTcnkvvK2SUyLs2NwfuXiCCU7HWfob6UawYmzRSY9BzPs1SEHqjDcBcJo2yXhQZ8FktHTtZx4H",
  "key33": "5nsR1MrB2ofs15j1QJnGGs9qXDXAXGmSGBXvVAoDxLjWHZypCJJsHcUjeEVyzdHeebWBW4WBUKeMfdaxef3JMAqH",
  "key34": "3f2S7aeMr3e1nd7NtFQ4cqdCNaGkkzG4cy7WHz8jAz3utqQG1721ZV471DrhTiqTG8M2nsRe5TM5wPCgR66Cp5EB",
  "key35": "HgKuMDyFd5yCdYBJozvLURQC6HnAm3ZARjSwqG8mkt6buiCQrYgWjMwVBYJkqBdjT6jNJuNQZ94e9JtoH4z6Cr6",
  "key36": "53dUcG2La1Q3eFYScvcFdjUjE6Rv6QL94VeeQ2Xpv5wYdQXNyPYeJZ1yWHJCVQwcoVXoM2a7fmfTMKY4xbtZfcjb",
  "key37": "4NW5oznSFgsyGrGJJyqADRXyb5tvNvumt9u2C64KXmL8EzsdgfAyo8uuAK2KiLdT5cYyQsrdKQDc6JkuJA318BwD",
  "key38": "22sTh4pn4upnbp5jVBsjCwhgGM2zwkf7ii8gBo3hDYNaBy1EXJQmjoMew8eS5fHAdTZJmkBSCytZhZVywbZYp9Z4",
  "key39": "wMnx78LJDupdJecKkVo3xwgBEUoRWM6APNswzHSvpxTtkAish9uNL1mGR6zHDAbZW2MDbRQrrJNThND6pyw1dht",
  "key40": "36fZdTdHEX4CagxwWAi1ys2xyMRVPhNenSuoAtENBPNr7FfxTDNMCczVaFz8vgmqYTeHzhFiE1Jvw5jqrtMemN2u",
  "key41": "Hi6Q8ecn72w4TBwqyPD81DE7oxf56uYGGy1eWXepyeJryZZUgo1BC4ymX381WijGjTPm9iwGVr8ejzpptqQB3iu",
  "key42": "5LELQpT7FEzVQ15wGRLRGnVSktMr5ffw22hzxYizr9DsEUm6RkHq3shk7nRAYFVF9vJyrUBsyVSe9tsFn4hrRFjT",
  "key43": "4VRp3qtNsDRfVnC5yFjP7NiYs3LEzXEtHUYJNfNucLjbBYW5PT9LwVqi5HcvM8tdWrYWbm2YBwTxQQPHTNCB6KvR",
  "key44": "3KjgaZyKyM7QUmtKKvUB7bMbRNLhnnazqW1UdcWPPrQkKteACL26FsHNB2cQDHwzJt4E92xPyTaKDTJUEtfCfA7p",
  "key45": "323Nk9jZ1XYopx5m587HJaUkiBdPfc3js8eFSnh7Lyh3VUFkEunzbaQNhfBXehjaNwC7aZVN6X5vn1iUe4vBM6zp",
  "key46": "4UST8eD42hN9sk7diLchhEDXXUf2ZML7QsFywVscXGfkMPhjfTnn6k2p1aHtHWXW1MfM6Jbun5FF1CeqhQpqc1ep",
  "key47": "43eQ8mCVGz3ARuVJjBQYSDAWzTZ4EWUe8heFddzP1DeqybHbZbTiuBbp3gd7TBVegpCiPkrVmAXmSzkyD6ktumZp"
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
