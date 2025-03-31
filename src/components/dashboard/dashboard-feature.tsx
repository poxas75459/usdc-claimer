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
    "3AJqyK67KG51dUf2Gq6PqaJj5VjhXHfpMWF97GKGFVwnDSLBKmJXQd2k1azJ28C3WZoJLSHYM4QJUycD3XeB3yyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zsoMBnmfo47fAgz55e1yVyqKEF3rRJRfjsq6RpjVhHTF2CNNkTjsbYdpWWQPo24ZqbUyo7Nz8ncfLftm9zUbHJ6",
  "key1": "63sL3jc3Qq34kCYqKNerBEKqW3s8YjEHRbWL5bmsf4kA5CpoRAwXaP95UxQYf4MGMrFKEVdN5ywaDQz9C3vZNEon",
  "key2": "3A3Th6X75zrnh8ceHksagUSGcQsj92Fer3Fhy95YsgiJ9QB6yAyTGTAoWKm3bBupAqKxJkHQgxELtJoF5GJ9vjfw",
  "key3": "59nhpBuTitbgQZx8Qbi6XXJZScT7rMp1yN7Cx7jNrKViVUMQd5Uv4xUUt7TKYT84WxqoJrzcMvtDtuxcf1JXWTVk",
  "key4": "4UYGSxXmcVBtoC7iv6wT3xyKugHv6aaarQ1ixKdpfJk4yADiiHokTf15Y6xFYmq7TrtMszmPyr5jzSRPuC6ScmBs",
  "key5": "5FARFd8JWd6tDxgtW43A1YEzAUGPfwpqS6qPK8TbJmPg68cmCQuvALX2DChewcrbAFa8Hx1PjNtTfSudfpnsbXSF",
  "key6": "2kDjPrbKSnsuoSCM33esiCcNSVPecAwCS9wSv3gwBxFBxMza6eJg2aSNFkmtFreq9DA66EA36WGXA7A4pgaj62Wc",
  "key7": "2tATUjZoEK25xWrtWMR1Mav22gRY7L24o22xcJawJhf7CYT8kGhh7wcCZbxGodFb32K4uUPLadbasCbwPk4aCxi4",
  "key8": "u7tBqMDEvuDsk68GbbQn5Vm8MiR7EybNYgRJbSboF1LBYK229qiXNoixoUMdckWLTUJ6pnYKX69e9wA2nzkUFBw",
  "key9": "58FmUxtp9LqTS7xqA5X52DrBHR5FNDYsgN6tjBVS7HotGZTnVKyBAb1pTkGmcTp73PiWZvwNbGW9cVCELdQW9oqX",
  "key10": "42hF7gcYXzwoMEpX3Tcd8h6BXyN1FaPgnDAm4ooVduznYbH9aKTByjP7JXVJQTu9sKc1MNsbKnm2twKtr3SRH3Tj",
  "key11": "91mwFYppLSsNQ9wF5UVWPsKbcYQrvomaqxi2jYTzzoZzndBtUK8XtPGQT1yrSjrbDFrgKZ3PekkdUoBZn1WsHEp",
  "key12": "rW2grJSfu2rU2cLFRdQ2J2P4CrZW7wqRtDeTXxQstiWrYpizbWiYXaz4fhcDxLc4UsGsvXPdoKsMay75kUZyxwD",
  "key13": "4MJ8LqXnr1WYHvcBt5ELjbuyKrKTCVB6Dkfs7ctU44PWCGX3TKhTeogawPjMwvXKg4YRFsTfFexWPcUPctMEzkh5",
  "key14": "4Mp2HSMGigqTGqZpp99kjk1mQCoBXUxtW9aWZYUyiRe7CLasP2QNxHGoGkx4PyQ639W7yimRtMHFYnzAvbG8G9AC",
  "key15": "5Zt4D6pzgEVNAYM7o9xAJEw2mQioJySsA4nyC9vrViXyRDeonUXvY6zbx99FBttcWweJxbVehCvdN5wzAisn6v9V",
  "key16": "BeWAdG92S278ZUKcU4a6kxsgbPwkykYo2R2KTWGZ3AP8MwrwhGMwxswKSa3nVGTxdhmKTiaifbifAK9ndBXrKtc",
  "key17": "Agoc5YAsYU4nmCKnLeWmQgaXq354DbNXtxUs9FdRMTp77CoUkX5zHVFvvLX9bEbUbDp4TAELyDuAuvoZx5szF7m",
  "key18": "5xKSgt9awF4BqfobTCSD1Yg8biKcKEA4WPTRebmpdKSd2qWh1vozSV9SRq4c1P7dVH3Zj96wrQ8ebk9CajAgUNp9",
  "key19": "K8enCivpsA9CmMPhBY9dQdXFQH3Fce5knQ7buKjzfxGCjisMQTgpeuwPZzqxA752WECT7Ray7Rfb4Cqn86AGY45",
  "key20": "4ix1kjFFWreg6pfsb3Qo5sZUFqDJCegUACdrM2LCuBne6nNYKQMQhpfVhRz58Q4SsfDQx3o78wbk5KbQHkSHu64d",
  "key21": "2WyrsoffE7o8szrfGfvAbTSNf7tbASPqaASCidwEdp4DATrxKMf16DP2U2noCDiurCBmN4VKVb5b84FpPsp1dmbk",
  "key22": "2N5o5mhJWR62U6okeEhcpyfiij5KHthyAF5uXW1VPMRacML2Rs5HW4ZwKFL3x823tCVZaJUE2bsVQw2m53nHMhrB",
  "key23": "mBTm6DMWBESqxxHHBo437w76EaEupUVZsW9yPyiKyBpudQjyCzeUVkNJ4oSCAMwwypKvUksmUnMPefQVy36z7us",
  "key24": "5cXYWhtQM94BJ9s9Vngkx9UVv3cGsp5W6XsYw3frLTnSghS9fMU5Twhm7un46rxCW7JqKHTHq795nLDJjWnTYXkM",
  "key25": "4xt1EMsmKgeYYTwV6ZvkTot3nBbHEQSxmCNCxpvNAcTzmygAdXDfaqLahz2cyFAG7rRSL15W1w35THA7oP9A4Ya3",
  "key26": "8D5Rh4aqq37V91Y1qb1SctQUQWj3XaXrRWZ5fT4JtntgzGHm6G35xnbef8zaWEdWJSC9m1Kxv56xq9pDePEsVAe",
  "key27": "2eV22voJmfNzXYirYoJLdjcXFd6XAyJ3EKkVSHVimp2FJ5VZu4t5Lv9tR8zCXuKj4VDUSj8WaWMvwfrP28J5rDdv",
  "key28": "4fBA1UG16KaVrTN3XxKVaPYi8Xqgf443SG4QrYxRpdBiy47YuwkvTrPBUKDHwwRTe8J9RaEjzRKbQso66qmY85Ts",
  "key29": "3LLZSzPjLnvDiA47omezStxiiZ9uon7ggRgDJWBFs2VGtdpePmi5D7jWKEHsyW3HnFHtdi1UhdatwWuSGz3KGfpT",
  "key30": "5fqCQd1ajyhQbmSKcHVNtLGYT81ALvum3ZpWgFw2D4adMJWeiE9rvsfbjjFMrXSzMv37g1BGGQwuAt2aQ9ZQVL36",
  "key31": "KPneFDHpAmUDxHSwes9kKh4YutoAmPrHqCT9TW6dZJBJqpdUFemizMW4Tqa9RY2KDf4kp2cg8W6XqZaoCTxWj8A",
  "key32": "3mWTWHWvYZkJGPEkKUE7ipKYoGMpdukDPqgDtaxEHwKvQGGUTJX1gGHakMmeJkMzZVkMjsfXsUynHok3YTajFGHL",
  "key33": "p6F9KS8G7CaMngL7wiBoiaFsZb4qgBwr9QuNhiNfNh5NLA4qNMEnDzNH2vE5y2S4YZKhPiMkHmWc3qokPYP41sm",
  "key34": "5kcnVtQREjRXckg1gaRFhai5Ra5DK6QCC1ysw96YxWtVJRjqJAxP5LWkZW2NcQaaY9mAncJDgELA33gQecdNrCC7",
  "key35": "3i4AZct2ac3eQxYKuqyLen3Euobh1SpVaaXQNo3DwVtTzxNL8FtoLaXWxUP9DokwXNj3vjgk9k2X6t6bfnLTq8gm",
  "key36": "55awx6tTCrLpfWTmynLsX7VDbUSt9vn5WsdPUFR1UmBZYKXBwXGogJhEViHQGd5wVShQF1jL7P933WGswYiERUGg",
  "key37": "26nNG2M4zfvTkKoJU5e4z5jgsEb2KacaqUnQjTLTsimnAXPsLiPLvs2rh2nuvNH39RW3UFmvEAmbhn9EYfgrGhLX",
  "key38": "4EXqMZeGWhk89XHn2Z2o7gpSdffk36ZVdjYTbawVDJ1cZcF6Mi4AyPzW4omukz37Q2sjatzWyHQPFaqT9cgSbuNS",
  "key39": "2GS2ceafhps3RLF2qEwXHy4BMkhRYAPSDcBHkvefo1U3JGb4zae4H6K9BkLLcxQ8bkXDuBAMXm82AyHndaYFSREg",
  "key40": "5DotjK19H7JDwvq2vBxUgtsNSKTauxKL8iMcBsyrJxbkXP3bJPWGvQWoUYQYVbDqGrXUgnA2Zg7G54hchPYgeg2M",
  "key41": "gfL7oeoe8V7xNvP2W4vcsX18eNcxbBUQVUPuUMkRMB8YAYfVmy2Yze6Wmb6ywLZczwtWLagRPcEwmkddMCt1SQU",
  "key42": "5JtEi1JNuvx1wmxNn5edFkTSbxyGHBypAENcAX4Tj7rsL7WHTLch5ha58pgZUj1BwW7WVsdeAPUTus5JfQXGEeTr",
  "key43": "dorT4imaugrwZWog5pDx4QucRqT6wWWjeJcvN3HUPwFv9P9KLbBPyGsPjUFaoeHJrRurP5qMmicXKZVV8YaT5rh",
  "key44": "2uZZ6VexK1iRXfirv1Zfhz9S1giTgHKetdqz57WWQS21mt2P32Fqao3xcmiaVG1FBeDXd5Kkv6P4o9V43j388FwV"
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
