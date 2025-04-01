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
    "ohLQFnxaCyis4DcVVM2YktytSyr7d578WusG1vStpAtuYNymnfzY9FWiKPsGDURTuJBtoMDktvfPgDJFRrJVb4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pzVt3tuSfXEG3ByRdfGg62jvBxq5MEFAVBJekmbef1eSRBMUL61T4sTLz21NaEaXsmRc7AzgZZQW2oDJodDdPbw",
  "key1": "2wAQx3fmmrifTnf1HGgZcEWkpDwfxeDQrzqnrdYJGscN261YpvNEBNNCj9rt1G2ERcvgq4jHBGvgxgz48YD4dMce",
  "key2": "4L5WiAQ4b2Rr6FAPoZxEtUgWhfCvEsQ6CNSS9skhgEFJnEQ8bsTr2dsk5Ft7XADFVoqCAXqkkQDgtKkjNQRghCVe",
  "key3": "5aNMNbZmkK4kmo1h7FyGDvFZBt6FaPWQ1cd2Ee8HwVUJDgfNbo8ZevADcptjnTyLRnHFzTixo1bcntAbkhn7dqXh",
  "key4": "3xzR7tdCF9RvWK9V6gTdgu2fGYVhTSeA3EwY1Dt2eMRmK6abVkXhqS3NmzvPDH3XCnGnUaBTK4kDWGc8nX2sKsPy",
  "key5": "4dFmtGJMKAZZNqELqf9AzRQcmRzBGkUzVsD9U2MzBraRcmFe1VqBaYLfJMUhmvSifSsZhem375C2VYPxHSjbtY27",
  "key6": "eM6AGNhyvbCDRjZpqFazp4B39wR9jNGeU2TPeJCV3bR5nAxd9fTTeCA96mxmAMpF78Y5Jh6NuiiYP7MemLn2zn3",
  "key7": "2r9ccLw7LBuDi3Dkgx5hf38RetaALCATEfypqZvRHCaaPHV2mah2PP7dsDwjJHXojJiqCHcQVPHf6yWh1w1AJYks",
  "key8": "5Eet7YRU56Mgy7Fv1ojLYZ3PbgBLKNTi8xbgKmj3qHfaZFwFcV4qZEmgMcZg9qqqybCyrQBP6iD9kkkXbNZsoRgH",
  "key9": "5kAtErHgrnCHxF6NvTsLp8EZTPHf2LAZKqAgD9nTe1bPpRoXBg4ohbTDdz5UaN57ns7PtY5aM6etoisCEo9GLkQe",
  "key10": "611hzFUMGtAJknc8ky4694THEWqPfqZPTdmrq17XYMUpsEk2JBvv9aVaTsWT9trx4wf9ayyyuiqwWtQbGPqXigz6",
  "key11": "fqDegEV74ynwHcq5eXRkCpWP44WHHH8GSARg16EehZhnfKuz9pbWkiE4MNv2daTu5BGW2TbB29BaJkkGvdb9DYh",
  "key12": "3wixP82P67DMt1Ew71hpb574s971rnnjqThDwnAiaEdmaCevWetQPnn9XeXLSY6dmikTaqGuQUg8ujRGn1vS1HjS",
  "key13": "2qQCLhksML4Fa4SPhuXb7RLFv25RxAF75pUMmnJ94eLhB935HA6jawUu5eCRqAk7P3VooBkogxnKrT8gff5CpaJ5",
  "key14": "5sPJXtkKQhuT3JpfTY63QbpU3HFe51Z6XBUQn6NAnrCwDfQNafT8qLNan5iEhnF2hserWLqt9gDWks8gEy3gAcMt",
  "key15": "jvs2KXKwbsYs8AcwjgrZV8fFNA1G3euYx6dUtpXzgi1zayuD96dSp5SBRg78EkM7CDnCEDwpxfAZHUou72hk4Cm",
  "key16": "Pq6Hge3jwHu2MDaWy3Mj8BoQJaebezj3iuiff811NNEBDipTS7SaU4QHT692PrjBDjQjda82Wg6qHehPvW9JeN2",
  "key17": "2CWRcTDEJm8RwQbZ35ZnXVoDFRuxCmF8xkPb73q5Gu1xoUgrjYLBXi6mqDU6Cex3khScu6PSGgvCC8Mq8dQtxA4x",
  "key18": "3UhNSrcdFFpEeewiwwgeiNaSeoabg1uFpCwAZMzka4FKjijjjWzr3o2L1hPFT6bXrEqyp93JpENQjMkbWfsrfWSP",
  "key19": "2bNXXWJbgEV8jHg26vjKMPYyMUEtiZdoPRqpN5WyRwJ5hH7YyqxmbnvwCSisCrwFfPaR8qCUQ2zH39khi3SFXKvK",
  "key20": "4RpXToX61QtnXovk3aPC4mkBaiLkzYksv9t5FZy6XWFcid4qa1g4VTg4ZbSCx1xSJighuAjgTidAHbk8R4SCNm3d",
  "key21": "3MPHYbCB7iPrEgC6qDJnG25xZkLzgPrRt9p6B5pEPzCTDB6Lh5EZhQC6UqLD7Xn338dxL2tX8X2wwxRBVcB3uXMV",
  "key22": "4d38qtwTY5vwFJpX6r3G9TvcL2BnBsqLhRkB7EkjFATV4a9iWoyoDjhyN875KVtnSkRDFje8w2K6w5P9tGqnWYmZ",
  "key23": "2F9mJqW3Q6wMPKk64CxfrBXDPazgzPWzdgx8rNUFBrQdRFUTepvpM7z2YbB7hNTavrcF83cch2QGa5tMELxoC9F1",
  "key24": "oyhpB42iyzpRCFKmNxvXS5tFHsanntsf69c2TK6xRu3Z3vCSbDWXCrFbQ9Di77WjyFEjkkV9tpfjMqeKAvzhwCy",
  "key25": "2WgEXSwJiQbSpDPX5DxDHQgLA6onukYRiw4wGchGMoy2T2zLzk5LFrX1vSVQfBDAqxa2X6W6e6cE2jzNgacEKeRX",
  "key26": "4biEFvRnryGyPtbHC3V6riorhPBHa7EsLBWJiCGy77KehJsJBm2hGoG7QU6PCTYkcm5sn69ZFwY1ph49FBxJ3KpV",
  "key27": "sY2DLQon9wT7qcFGKPvdRP6AKJsaPpWWBJYoBxF48bMzxteriYtLtHV3EksYLduTJfJ4ewiGMdRBQJxL61VzF6o",
  "key28": "VXTAhkWi2ERuirMBe8bW86MysXzaEV2WATHfWPBoMjfYnTDTdyrYeXAFL7HjBZ8Q72E3NSPaXEXYii6DediQudU",
  "key29": "4KkGpqDaJ72R5wCqSgAu2FbzzYEFv9Yfss6gQmsd2bZhnnbRpyT6wtxmkiBebBSGfq1vCJfYFvmp78Cd3V2F7Coq",
  "key30": "3TrSvm4qUETCyjSEtZH7osEdm5PPScd2tGvGHmDfoEYrNqRx1YRiTtxbYFoq8bvZZrXSLPo2rTF4Ax7r4vNnrLWr",
  "key31": "5tAwyLJBEjxF48wH4vPsTSWZ1cFiM4JGdVEwxtmo419pxEdwdWxn4Fuy1i5crLwoX9AqKDwydsyPQepE51A8S1wb",
  "key32": "opoKjpJiMc4CB1oEf7CaFovw2g2eAvf3zUqAEsfvUfnDerjFRdE11QXpZJHBjxxPesVTJm3eDzPv7azFpSopk99",
  "key33": "C1F69ZkxyqrJ5knVFkmRC5A1qQEX9eKx7xEiGh9ZwDL1TzHPn76fijRdjBcs2NfDLqtVSbvgbe7QLd8kKqHLpKh",
  "key34": "2FnFM9a6JipHXiVh14tRBiuvtC67oFLHggGJC7NGirAxcTcvNWwGpsAGqEaZQ5Z1DPd2WMBsRpor9Z1UWEDjDwGa",
  "key35": "5KfCTzak3qQ8b1d3VKFQCds3odEo4E4PN7ghq91ycZgdiHPwCGidUF9JkduSqMfQUoLFMSYfKP4NeG31Uft3FMyX",
  "key36": "2JEhr557Y6gmvidCoq6UHHyrkLuD2uTRfyRzjXu6HhYfSZwDHwYa8NCTHkdgJr2RdGT9fmue1Gjtj43wTyRtDird",
  "key37": "nEFZu1ErMRr41DqtBKYEgVSJQutcg6D7fhd7xoU8ZTSWn85k5JyvRgVcPZaRqUjHaikHdVVGzbHSdUgFjCwvdYi",
  "key38": "4Yxem9PmeiUurrgQ3SAayadaNpd3iCJ1gju9LG517vtbUUgyNN5WUPMVSoG3jtEzvCfE2o27gtvvTCi9jQe1pQRb",
  "key39": "2km398pF4boSVGe3MTdvSFAbvB9nCAykdr7SG1GkNzHQECkyLyzSF6NC9bN3FTto594wXEQ78nJRf4m8f9dfSrsR",
  "key40": "2k6jFiozuYrbBGF2WRqdVuhMqKeKuFkcoZnm7sG8gN6v193nCcbdDU9Uv6xH2ihm9ZXBgwK1xTzLoL2wFDEfDcyr",
  "key41": "ybWqSyMgmadiULqjDMx6SuUuNyi4JAR56nxq3WvmRSrTjmZoiL64zejdr9PGaQ8EnwgsRNhEQEyPFc3PVXHJzQu",
  "key42": "2MGEtDYx2zusok5Jqw8NHaBjVpTMJDt5GFssKQMXpnMmnynL6Gr7JzBtjH2wFsFJWz8fMKsiUsZnF3QQKfBjjgfz",
  "key43": "4mJpNntvnKMSu932nQVDuin9MaXghNHHbcdF7gaDMxfxpdmMYQMKKwCx19PxexAV55FMFB2YcmBo5RP8qnX6dYQq",
  "key44": "24gxLEibonJux22NCwRpCDdxC52ac1gbaakzujrmHCqXf6wF5UxRSKAccbEgNfBpLvFUCxnrqw8x5zJsNpM2Ybg6",
  "key45": "56dXJxRYb47mfLJJTviRhrmhza5ktchHsgen2jmzZScFJRsenrhxsSB192Nz36k3RZUSar874teUfWgafracgVzL",
  "key46": "2icRgZrwhg2XjxR9fvV86tnr95qfQGJtCfegpWkAcKkSUv2BgsADgKQ8Xr9Rjc3t236k7NbLTCk5e7FxR8jRE8Cf",
  "key47": "42ReLWgQTpLEbiBBEF4NZ4mpb5KwuSeRguADve5TcmUweTqNi4CuzitSNh5AQZbwWHxmn9JgW5JzCCch2FLBN4hX"
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
