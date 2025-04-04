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
    "2LwHH9J3W64TjceFpbtHUer9kf3M3YFWzbmR6fMcjVSZ1W2Ur5ShNb7URPpcbFj6fFXjeJjyz9pd9fCtrQaYjNFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xCwhn7J88sq1Fq9nWUgDusLXxeazhSX4kQMseuX5QvJh1DNQUKF9wCnrqQ2QXfZtsHKDemTkG4srCLadJ5YDwhR",
  "key1": "5FchEPyNJyJpQRFgR9YnUNKy9WyErRBeroBmzzKuLhqftsnMbBfCLGJ5VUf1RL5oHdPMuqQtPyrfXFjCchCLH8RF",
  "key2": "3jf9EdG3b9JwHtsC5KbiPP3aN9MNTDUJ65Umr2XXo1qbheMQG8T9UxdVT2Eyg9aBLvKdqmoe4ggg6TQyHRZDDwjg",
  "key3": "5yGr7uLU2JaTn9U4tc4HVLc3vysjjXsCS1XnsmUpaAqkEbA8fDai2XeBDHKMznV5eME81MwryRhaKgMcc7DQWEds",
  "key4": "8be4amD2HJ84ymZ7c6yPBMJV7zoUDBC5i72PDVCftVgmzJ4cJy7Hg9UFX553UjWNoKzejN8gLyUp4dpi1eB8Pqo",
  "key5": "2XP9nvuRGugLcfSbB4JiE9TH8s14vyujX48CfFevWPGHTA1NjKU2t9wE7wJRS8orefmLWxATy1AkuuQBeBb9kCvt",
  "key6": "sWpMVpPhsmiy1C5LhZt1rqv3r7Lp8DaejLHr9k6v8HzCyVTKTSxsgypiPPjUSuXTKtLFKPFbz25EFh1xkg41J86",
  "key7": "5z72h4TvQPSQJHA2RSPsRNrpvgpAQNnsh3bXqDF1yCirDz5ML4aw3icuMXXHpYnbwYenESQQFKAn28m3DPCRzeKj",
  "key8": "SYVMfbjfX8r5jUckB2ec85g4RzEabc1dKbNbtPdFLqPQiZ9YAoMDHBXnFhqwGEC5Pc3atenVYMvYMo9g1yAGSom",
  "key9": "623Yf5wHxbBtS2x7dSN3kXpAXuQovs2rLMSqrEsYmgTRAoEjbuSYaqA9kjFLg5Km2LmNFxE1uSzAVM4iWkkgLboq",
  "key10": "4sTpwcoYEH4gzCyVnWrCJMMnSuUNgpP4JkoFRRdX7npcpSb5d2EPDX4QpVgXBzkv2tW7FrXBuqLBthwNJUetAP8Y",
  "key11": "2DU4TB7tNSV3giEuess29bHKhQ8stA1TnC4mwbXkht7m3FNZ3MSFqPCfoLZ2p41Ne1xeMi2VfoYkGbMqcXwZiwtt",
  "key12": "5svWtzTPUYBfoRVyGC6bXeniQQVndXriiv6CaUdLuRVZrHhMCDb3Mq8npRetJAo5Rx9WM6EUNujgmCUigHW7CBCq",
  "key13": "5SXnSjbg8qgstswX7Hi6EsQvLNDp4tnWvmhC1m23S6ggJLTWRiiFZAHDtZ5boHRuxwzyMvj99jK6Q17tichqfRyU",
  "key14": "2anZPnWgzAfSYoZPB5bF1UycQtT73ZCQagAoee7kym6ve6tzr6j7X4bWyTqRTfKJVh2ejvCS4xLfZrrjX4NHdg79",
  "key15": "3mTMWxiLZrPz5zgLvsdJ9L49tPPXBFT6zRLdZkP23NjNDEchd8cDtPQqN69i1BPXzFPEZemktmom3Dobu122fZK6",
  "key16": "5iv1oum1ND14hexxonVmfh9vWGxjAbZQsVEAtsA17qyiCJ9LQUzNHKcvVdfWujMxD3XYhBunq67r4QtRTVZ2B12S",
  "key17": "561i673kk7xNaPmE82WzxMZeP2ndZA126jbydTPS8rgBeUoqiFyVkSMPRqy4G5TTG3JWpKLfrEG5b4o7UzeUG9u5",
  "key18": "3RLzfFR57ohhbDXbYBiqvcr127ktHf1mc8jCHRYVW5WxxbAkwDZYxZ69qGb3XjGNN1ja9Qk95MuiEUEC1ZTz8GwR",
  "key19": "yTXpF4qLnbPxf3BrfJSnrRzuEiAamKZMi8jR76WGPmLHnpsYNmNkjaLTACQ7dMdTcxkLFFV5LuDunFQ7MUAHCD1",
  "key20": "4D1e9qBqXMfj5Yw3jNKFGccBf4J96EdWGBZ3wHZgixsWgAZtGMfZYpH2vmXSYkDA7wZCLJdLrak5FrABjMdgd2nV",
  "key21": "b9uZQP41spD2pycD6JJtAKucrkCViTZojonsYGm7U7PccxDXwpnuyJDi2PKypZaeYdEEi2oxQo3maPwYFgdW5t9",
  "key22": "RWChfzzEDr7Mrh43HgEdftzcXz33mC83dU52H2Fnyuu88Die9X3xH2j3RvJnsLpjeEnbVhpxv4gXhdxRG8oPFme",
  "key23": "49JXLE5q61z1u8c58NXp76LXj2tDLu4FMZKVXVWkUVmYRrGfLArDU5cvrXyV4ezF6TCfSUgD8AVvk5uJtcYf3SPN",
  "key24": "28L59c1tEaCs95ju8qRwS6oVM2bH5NmsByHq37s714ve4d6nSYU3TqcUcKvSUQvh86piYTdJdnFFMW7gTCBvhvZd",
  "key25": "5VqEnRJ8EK4csXaNoYYoZ1eFE892nELhzwgvGqrm6m6K5uk2Qj5zdcf9VKtorezQCPEBYzjAZycEJFrbb4JfprDx",
  "key26": "5yB6NWNmkygM8FsQe4fUgxsQrDdRee7qYreYyBpTSQt3jUugcqVP3UvSxK3EJMHDHJNcDAZ1s2KnNedEwf2dFGo1",
  "key27": "4SUSWS65LCKVxYRvHyEU9gWJ4Me5zkNcYNh7cKeuHY1gV4yXuxTUMJuWu8sjtEPNYszZmuEcLwX6bf8sg1JBJqHY",
  "key28": "2XCRFJa1rnYnbsdE8hoXvnchiukEAbd7obUAGt2aZ5cMQo9r5NJFa5SbMubvxZZvLRaeiVXMD45C9kgAAaDjPRoP",
  "key29": "3m4zBGgLVfubNg7gSecGFxd72bjotUsFA6PwKbwgcrMdPRcz3HGF9ePfr9dnvxcnYX5uXMds2bsUGvF6M3PtyJtU",
  "key30": "4T7AC4X5yeW8MgQzssBnSLmUEDE1wBwaYvXtFimKo5V8JoBQXXqwJjhEtMr5B6iobR34d15TQNcpLazBocgRpHrY",
  "key31": "2pAY3GidAqSEnqEbSwE3p5HpdzmxqSKiHiUHT8nqhjn3kkG5nvMJKJosmqNkCy3beAoyB5yNz6ztZeQs7RycmJdf",
  "key32": "oP7N4MkVR8ceGjm7Twe2AboVBhHjx3QASe5i9LUUrTPPgDuan4eFF9sAgEKJNXEaVFqqYjMvvAdRh2kEzui6urH",
  "key33": "4Q6bGjHq3xE241v8dcMLcmwWDezsimyo8WFothJmi9xsE2i32Hi4wdMLe87caQinxo6eqVbqD4ENfdrDozhWDne3",
  "key34": "2BiztHxwhcu8qjvrbzSAiNHZb5TKFfQLbNfYZkP43MjH6TaQadCG5bQMLyjSi1FVyJ3s3fjv7Xmb7KgeVJRgCHaG",
  "key35": "5VyNeBRSDmGQ5uKAEU7fjgdST5PRPR7HevqNTsEaftEiKrqTDE1DHWKaYJEN4oiViWb4BvM4PBFtBGmt2NVCrv1n",
  "key36": "mgSxtaShuim45wJCyv8RgpVHr7wCgdBSgZYotS4xb5cYSJhpbN9FcHAJdB3C4C51F72XTbrTxTiJRExjSZ5fauo",
  "key37": "4jKDYB4iL5opxcCEhttjdAT2bBUNa1Yb4EZiC4BdfdEp7xpPoHybAvtt3ZrdMQQuZEVSn2REYdBPvjg4SJqHkQ3S",
  "key38": "49nBVCVGx8uCWrWpgL3JJhGpj84D4WobViwGx2jVsZKSjhA5rfMUGr28AFcJUgX8s917s2kxsWHWjmqbuzJzEfpn",
  "key39": "5pSuTqMMRffycMJ3PRuxStTXtyyAEgiZR5sr8USBMwBDdSPUrM3hPaJXkwfVpW3PH1soXCeBQmsdQUcpU2AmhJsx",
  "key40": "3v4g3rCGCpw9DYkh5mudf7fmCGdKGm745Koe2Rg6b3oDrq4YZChmrJJ5wHVfp15numKFxGoiM4WJpsxbBrcfRqDs",
  "key41": "2M5tA8Za7UiSaH2Hd9At6jayY3njZnoEzALtzp2qRQ2v3wLco2r9je8wZTKU5mKwEcts3FPTNBEnuoQW4FpgGALE",
  "key42": "NkvynbcawF6sUPu6Par6Dh6AzGfokQdPiRx6cTmvwaVh6HYAYNzk9NbTqYcDPNmw6RSYi8s4f28LHkhRh5Ge7mJ",
  "key43": "52xjgHvE5oYquU94roAQCtfYR7vDq85UQUtbej2Tgux6Pe6YBNxWLL4b19FTNZasrjnEogzDDptjaTcmsXFDYzFL",
  "key44": "vfDbJXWYFDkkpNacPCpBCgCvmqUfbdcB1wnUvdoc9FgUirb3CDoE7ZS7x3zfuGW1RqCrWd86z8cCtg4vDMGe28G",
  "key45": "5rxZNm8Tc2huf7nzsmTDmtaM7WjCDAoZFpmZjTUDb7uhYbrV4Tm1yyabZ2rwKecwiFGiZ47aVMAYeRmR9P5sf2eV",
  "key46": "3E1DfvSpJPjbYbVP2c3DtdtbPcfM3zJTNQixfQHK7e4esHR7PXzRW1TSpYJpVyLx5F4mJb2XW8TWWHByAVVczruk",
  "key47": "53ao9hWABEArUYnTZM554RKQVVpReQHe2xqEgpYQXbt6AmkHFz7q45kz8bW79bM3rn48pYybkHHfVJGbohisESS8",
  "key48": "24PwMVEkjhsufnqCRCSBZvJaVys2sEe2qA8Hza78AftiumfT9HAR4fLRt5yBtZhkxNUaVVvdGeXKZsnaP3zvaHYt",
  "key49": "4RNCyFf7BgaXCsj33EnoEWYe7R188QD7HnS4DPbx9dB8bNiZQnGCDkHWhucoPWZpfFLGrzVTyoFCwamue2xNv2nw"
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
