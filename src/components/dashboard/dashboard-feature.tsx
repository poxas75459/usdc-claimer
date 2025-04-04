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
    "5EpdgG4z9iBhE6DEGUhwo3usvkKCRuReVGJzALS2ZBjPMGVPJU3uFdDrJzrwoup2UufV8WDBWwJSde8VhWBgxQgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66oyTD9rpHdoHMfoC1FQHpDiKufHDM7bzTuL2fAJtWpQQhMyLaPfL7FMJUA6mWpTs24ZoanRaM52rDA8mEEARp7S",
  "key1": "JAfTQpqEvwjD4SS4EcWBSfF3sS3XWSu4gYG6L7dCx6BxxEeuDSNbo4NXYZHixgvnwTHXHYiG1fiKKci8kU5EbZp",
  "key2": "4JMxkVUGwrmtf8obJL97QtquFzckSfwGQazFoUaZaypLHUBA46Y4BEQCdLb47BD68qdXNKFYuj5UNCwUxpvHgk8q",
  "key3": "47JRwu5xaYKPqJioHSkza99EN2RNWbTfW4UnjTDEKfydyFMXU1tNu9iTPN314LHGsEUeoU7cjzvaraPgnssxVys3",
  "key4": "43gmvfPiBdXL9RwDMJZ7GL45jwU7Y5hmncQiHMnNfqTKHue735w2hJdP1ZAEnR17TxmcJ1tq6E96xLNKXZCQ1XYF",
  "key5": "46LukZaKyLan53YdSbmUBjw96c6sSBEKBVL4AVmMaecAq7siHfof3b9NUcAG5JY8bjSjH5A1BAmtJ2bTif9ExfSH",
  "key6": "7tNk7foEehMnahHHGejgpQDgRdDZG4hQKejpFZZ6i3ND3WHwDfHJ2xvTwhcaqrf5dQEXuNb5U1ThznqA8jW2yXm",
  "key7": "4bPF9bWncPsn8nCyvRn2HLVbnoEoTzXTSWNMsWdqybLFWrZKohYoaSuWggvmqAQrpoGpLtxn2nj23NcDYCf9yoMd",
  "key8": "3DSneLA2dqtinMo6RgJ8Vzqu1oFpT6SgJZEgPa6E4rL6vgcnMCknFKjr1NH4NRCrFsaLXgk3vfbFx8XHJrdXyjtg",
  "key9": "5mHT8n8yMyFugiU2zUptQ2DEGy47YSmTqFDfb7oWkx6rPKsBEgkitaEF54mzbjUbjYnPN4sXT6sJATZZgskLtHjW",
  "key10": "5u1w6stRURcgDjSNdh46gtWeLpDDLSpFqbHJoqk2v6HxCZdgXq8v9AwH5v5VdHk1ZxMGfLLfkADNcKUG4woaMLA4",
  "key11": "5eTw7qF9rUg9BoiY1AHTVsgbVmgDqcskbAj3JaqUeaogviBCkLKC6cLJWQTeL6qLz4RZFa2sfAdC65u5tw2yK2hV",
  "key12": "4m6VpVCPSgzitjsLV55NawBe1Tx5ndqXurR63n6rPKRz536hQhmnL5WCGRM6rFKDjW5TEZvd5zjhm9WL9cGANbjU",
  "key13": "5BXpuLMghtFSTMuPxedvT8eVKBPZPr2kiiDWzfnTjdMPCFDjuaaE7NZJ9tBb7kwCdKK7n2re74717FQSrZomX87k",
  "key14": "4fp8Hvrv77nVqUPxi47h8TTvrYpiXPBaj4Ag4XX6zn54AxNLHfTAn2VxtxTKDY17fEghVjYfh2t8XDdf1Y7Quzij",
  "key15": "3hTfRbaU9MtbNKcTpSnyPpAS5XEGQdFC2sw9AHxeHhujoMcLWoWDgk7i4JijwqKDtV6hg6aQJncz5ZLxDimkoK19",
  "key16": "4kkNrSLWMTvYQ2VRhq1sKJ9NaNTrv5XAwqKzWRzaRCkDMN9EfHUNGZMvqgPeoeajzKe6tLh1Duh4fGzp4NkY8Lcw",
  "key17": "4hnpJsdGTT7qk3WZqU7vDPYGHMSHqJ3BkNY1naJsLYwuKgwiM1BgtGjaUkqSQtWy8JmUrScMSQDLFAmk94cKs9wd",
  "key18": "2eo13WWvK8ojv95GCEGLVt1MW7UKa1WHZXu6Vd5SkriVcFyBSJYYJM89cwguw9roHSsQ8nUPWwSxNfxZPyVNSsnd",
  "key19": "2pmgKNgbdXkvQNGRMPGR3pvyHtR8sm7cxVXDnbAyMcJiq9WdkAt9AawrptFVor47dAVVUzpTqVn4iMNATyy9k2zR",
  "key20": "5nhZ8KBkJqrBALYGuzEsg7f4SsWkZbvmeSpK8Jk9kKSG4UfAq8cLVEfRKEZztrHNGM7NUE6cMgaNd4FdtxdESvft",
  "key21": "4kGyA2LvdrxFqURLadqZtDqcqevi72QSmPdj3qgASe42nDR4NZ7qQyGwZcNKGz41a8S3RUnp6MdqFGnkUJkvPNNn",
  "key22": "2UQSo5HcWeoK1JEoXhZWmryL5HmKCfaCB9bzZG4wpo7G2LfgxtE6ow5wt1PUZAdBU1niGF33oW7bpZUzAeh13Y74",
  "key23": "tC6vs7zXPzBwtGjmfNBMBfrVUeyTzMJdskwqYtjUwhQLJqw8uiSmr6PDzr4oJk3bmAPZ2tZPXcsWaAeNHyThVNh",
  "key24": "3PSahn7wbSZAufnXs48UKXmVr6FV2Qo96xfb9Qi8VtuRXHpXLDQTwBPNjF8NqZ741znhs7Wb8TYSDDN7zaELidPX",
  "key25": "XYD8bfbjz8KyTAj21g2hKdz6FSbUgyoWhQeYB3BEcwhPstGHv7dhHsjpgMX8D7wptYNYtYLvaaR4UkL7vftWA2T",
  "key26": "4u4W5dLWWqDRuHt6eNoR4KwCRXWCrtLNMhpmofXJ79QagkSop7rGXoXbumFNBVFqXc5MLzhMD18HfHeNgx84vaBb",
  "key27": "3E2emUM1LqG17rRE8XXdxh3SHnH8Rfw8MGZV4oen1JU6z1JRMzT3K14nMXoFqWEm5AiZ6uR9v2jkbzsgWickfdS",
  "key28": "5igJ5FdtBUJBpaw8sNeXTKvpZ7P6dMMbwWcGjCaV6x98a3AeVK4B7v3i1zhq9sBttj3iRatfQk6UN3PKNikNuDqy",
  "key29": "fE1ki8iWrQzLVc7LvKg8Lrq5pWRKh9bW9cvecQktYng3SPH4Eqf63pJfpLTvS9p9m9iX1prsCQepZyELgx65dCi",
  "key30": "3bBE9Q3hQ9tgrfZMV2AKXsTxuiT5MZmtnDsetMErmwN4XBR3yzCzBVeLPUG8t9DEd5Smwz8Tzf6DYdY32hdxFYSY",
  "key31": "4ptSNXFuJ9y2VrX5dDKGhrznv467M61u6oqg7DwNVuTg6Jse6xd6pSPbBNXqXhGWcDGWpHUdDninq8Ym6ASjMdz9",
  "key32": "53cWfx7QQqdLomi81irzVADaQU3Bj66nAvsPDqxnvABLRnkMy8gT5Q4h35KDdnqrj8RPzkSPWBw1d35U3YPYknZZ",
  "key33": "4JXKuxZSPWFPH4Jh8mXpsxDxrRuwdixdN3yjnqQNd3oPBvBH5awcugrTn4tGsKvknvJj9ywGpP9xDhYyMTqfqmT8",
  "key34": "5ReypbnHGo61uv2awzHw5w4YRQKWB7KmoQXBzTdkLhEWXzTNqCpNapgfJQwH48iT54omb1g27M2LYrqudgWNuSXu",
  "key35": "24RbzZf4d3bvmLmrHKeYvswtxP5qpe1btRrVr4QkhM3xRhRjHxFh1curDc2Vo7o6QzGQDS3xX3r9CuHatBCQXyEf",
  "key36": "3S8KadXFYUQVLxfBR1kmuyKr5cXV96kk1QnJzaVBHcACR4yp64BXNM2LszTMwjVjCFMHKJPt24JLn6mpqtni2f4T",
  "key37": "39Aj5T561VTuC7GCJgk1j7HmbEYFJbdsSbKPsL5WNUU237WQhN4wjZFuUqXHuPHv1EVevhNXFQgU3DQc1NfKDHF6",
  "key38": "5NwovKFCBNo7S3iF7zzEbZjnXBC7F2ewb85vMousmrQgaX7tQthfZtyubj1NkovNVE19JhuFq6oG8fWsJ5hsM6j2",
  "key39": "2gU6R3VDCf3iHMDMt4JbeXWKP9zESRbsoAm11aVVCLSnk47wDsoHo9rDbV9p72ZJVBTctMw897A4MF59To43HwBv",
  "key40": "vR3AcTEyV3t2CuDELzwAfNcA16r3qNVkdicEyFgSn2XTVKwwmeJU1tT8Tmvsh5WaVwkUfhTRfkTjsE3DHxPzd76",
  "key41": "4m2KFBSxJ1gVAQy4M6hJNT2pV3jgX63fCeMkABkzWWPAmZAmrXgGXaHViVMbvgdhnNZ6tg7GEuDrqdomjfNTBJeE",
  "key42": "2GueUMRhfCurWgsUsvpNamSKmPvvBL6t6VDB7dv36U6fEEcj4j62wnVhEwPZX5suq9zHxZ21t7JWpitji5xXQGoV",
  "key43": "4roKVLgsLXH1mpMv4nyzcAG613xpoGTaqe1JCig2g8tGfhGSzeeLEXxgd92N4fXY3B8EE67oe2phx5nZsxmZUMyZ",
  "key44": "59TrCn3nbeKKCYYGdjqDHhK5Wjfv1P9uviKfmjnhaanEtsasyWLqBXbEzb1ZGNQEiy1GpK6GTHMcx7xuxHcYyr6z",
  "key45": "5BWYVfdErd4SLmVf1jaHz5aQ5tvATV2vA9w8LDa2NagZHkpBDLTpr8BYPwr1m3br4mhjnEKkKH1jNiW8qF7jT7Yo",
  "key46": "2bc1kBnYutp2Bd8bD4ufvpnk9FnVUTpKLKnX2BXERPFAnVn8PCwrTxAo65eWTXfHHwaM9K3QHNDzgobeRBzARbxP",
  "key47": "krsiXus3D7uApr7urWX5Fo7YFegYrcmhPL6qQQBdjiVfZjkava3tG2mFRg75RuVqrs2U4Xi4TXBFGjysRHCffTG",
  "key48": "4V6b8F4FiZxUbeRPBDcjcpv7GqF3LEsiUX3fBCRgFpnmAEqfcwm8LmN2yXeSWKrYEaggeUCFdCRhyJwf3UK1tDeV",
  "key49": "3KF5UuAN8PxMG4DBLsKZD8w2w8MyoMHHnhZcn7KLTHR2CYuoZhfJP3XJbNHtvEQzdkgp9CpxuYwD93mYDw91HWp9"
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
