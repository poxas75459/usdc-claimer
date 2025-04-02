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
    "JBLK9YR4tMzUjyQNtQXaBVphgy4pnHjWYGAg2LQkMDSLyjiXgPjgBDGoScYUPZbYatA4nZhaTTLgeG7VM4WxZSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gasHNW1PNM4Miigwmd6imVAHe4fvuPnhLrMdoE1pRujZCk6GRspovSehRETYZUiCbmKrpuNnYBHrqsTiyUtWFJM",
  "key1": "4ifV2CC1gwxkfnjwKZZK7y17HXDnRbTxRYMZzrEPNW2rwKpqNX2TW53HPLjSAJZSUYo3bVy6uXTR84DbzW1ACzDY",
  "key2": "4Am2TFVAefzULNd429rcBgqGYCpwuvvvzRrrWJThQGfgLoaGBfUXv1d3EMerejxro9USoMACrAhuCpwwE8JdjV3P",
  "key3": "5xUHtBKpHw11cV65f5KXVHEL1gwhqkrNJvUEegjhFp5jJ43aLgXEA1TwPQ1vUP8Ui1eLPJ12UM6Yx9UbSCvspEQf",
  "key4": "3S441VSqwirKaLAHbREpYQzxV1DjfjU8mGXL3yTkNaKB5UAXDyB2pnTySw47kcgJkW5xEX8DbYwxxVs287acWjRB",
  "key5": "4iNYEsLuWYHYVXXTBCWCLHeMbb952Uk2tzV3a8wuKx8mvYXmtpG2ns3zUSXSqgkgMNCerScrv6Tm9cZ6n8ab6dmQ",
  "key6": "29SRBdZdfjAwBeiw7yysF8yvdxMeBiemPND7mdMCgeV2SCg56QVqAA9GfqpefXNgtuEdQw5ETphQHEP7FzUgdHS4",
  "key7": "5X3YUKjfKbu15w2Z8EumBuaGur23vXqW9xf3oSDhyxKro1cHGGURrF3LtepJDGeUwhFFpJruZSzwYUSVapaTTAT8",
  "key8": "2dqfnkuMNBwcigYov2yoKXsDh5x127HhCD5Wfnp7kv53mdgV5oJj1a1tohJPQPsiijLrLZLfyunXkXomENz843TQ",
  "key9": "4wny1ytN5CQJyGPYiBDUhen3WQJB6SNXQ3o85CRJUaoWW4XJiKYwq9kpWopyRk8L97n8CmqvcReSwuxrEdqzt2dk",
  "key10": "oxFm53X4cTprzzUw3LDSkEMDjuS6SdxuoniT5mq4rcZuuGt18ZCtqMCoxrCpzgPRvMLMbdyP3HJRt9KZEv2MFSN",
  "key11": "3ELiZsxCkVqUaxg9YTscJGeDkp3sJSJ5ox1uv7N6Ft8tL7qxyXCtDmbZeHsWdegHEMENajLTyHkxu58ULQsW3mG7",
  "key12": "2iBAJpsSkCt8qpoxEWhX9zsiV8xUpieEovKkroDUK9LuMiVXYAgQsqozG7p8vXUunDTpvDkXMJuyU6SYMgnD1JFo",
  "key13": "29HtWhBcQGkYasU6JR6RFGVFJrwQBY4ZrTKuNfe3iqzobXKy92vFU4rMP3fgba9gygMfsjZvHWjNSBGJAkPbX4sW",
  "key14": "5NTJCQ9U3znLH4iMjn37VvUiDkPWTmoiyBCkEyuUX1ZTSLEaSc3cb1f2vUcegYrLmTLFQDbjicggTP2rwdc8Xjsv",
  "key15": "2xuAq8PcZMd3YnowFzH6B57ZjYJx2okJfU8S8xuEEYMANHm78Ciuh8qhnMPp7hHFYa2Kao4p36W6KYtwkEncTjbN",
  "key16": "5Yg3FB9JuhCSVPzgLZjbCwcxj4ov7KqQz9rXaxRQj9skn4vgp12y4hHdz4B7UuwSr15UfNRvgrRH8a1KfHtcoDvP",
  "key17": "4kjRu13gbzuMrmQgTejsQbJzo1LWYxuuHEDv19WyKEzpi28M8wc9ZcxRzSwZ7KcgEm7rc7RzevHyMgGkv4iZz7aE",
  "key18": "4ifcfRf9p76ud3mA5XvcXiELVUGtK4ecFoLVRMWMS3m8xvGBdbapu3NWBp2UAbWq9MN6ZFZ28cgNrNZy1B3YxUWg",
  "key19": "4AyifL6CN6Hzxc6jyZ3tZHDfbQXK8LFqUrZFEMbt6di7BZ2UNG8tp1YDaYZNXidye63eeftJ25uL4poCKoCYNi1i",
  "key20": "WtiQsT62y3ZKp8caCHH9fokKautPKLtZ7m5HJonCvPq2Mdv4cm4qMitYabREHFwJgWjm4kBWZnvzz5vZenxdqqJ",
  "key21": "DoP9hnz3QZPDQVwtPoGpMtLW4B866HY2QDKAQGDkHrjJU6Pf1pHiu9rrXbSj8pxtvKzVKgE6in2phtTTPk88FT3",
  "key22": "4ve8r7Cv7PRG5G6KcB4Ht7aJ9B5jTKvhUmpFHfdt3LW17YgNjjyZi3J2wCRNcJDjKKAZ7do8kdSfygx5X6xdSetA",
  "key23": "4pTzZp81dmxUHHPL8YEXPMzEuw8rzZxb12LJ8dn9PWdA4Bk3GiVmVQooNEqAei7DtLoC6xjwT18iy9UvP15uVjLU",
  "key24": "3PpAxibyP4gsABqRbaTrbUBuwQcsENNh9ZpFP2tDjFwzUpogWvWq2u4n7efRYLNYv4F6Q9D3beMnFTzrHLff4eDE",
  "key25": "4rV3n6TFzFuoLqrFh187iDfvBHuBrJ3VC9ipjDnqgH6Nyrn95CHTgp431xbPTQurYHS5rbqaRrrcHdrZfQeSUCLS",
  "key26": "38RaY51eoQ8JSXETBtnWjNZE1c7CP1nidsBoYy15wtnnyNtt5ZbLz2gkFPxd2RTzMnQJyxEHRHECyyxiuiYn9pnf"
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
