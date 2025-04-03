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
    "2WGaDDBaUPvRHuiTkXjNUYKgARigk6oJDYhvJSM4heufgCdG2468yPRyfDmmF5yRdTynp75J6UY1veD8ffhaeLCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fuerP8RAUeZc7NRecdzsTJBBi5FXcycQx9ZkBTVRpMuJ2JSWQ1QfECmStFv3ZGd6dGZmP1im4Aos7ybhvinFL5r",
  "key1": "4GBBMBPBsFgJcrunfb5iWey24QTUJdvEnsRjqcD9crouvH3EFwfM6VugBPm8sutJsyZUAKaUupbHpb41xgxj9tod",
  "key2": "5Zy4FVc2UnD7zYvGyKqCkb8riN5uZBJAzhZjS9q7oHNyMCKwZ7GG6LHAZiH495JsMJtCaoVmkrb7H4QzisDWiQJz",
  "key3": "3YN6ouhPAdxViVpktLKq4R6N7dBUjBW9bEFyJPM2pMVo3ptevzprveiK6sQVvszT7cGfbpYXExwAEtoQMXYfjkAJ",
  "key4": "36bzF54i155UhmhjmbUA8iFbXAmCfSVykzf6j88AfQgQLaE9zeFKGDfESv3AyCUgoBkkVGexGt6hNZXSvPrRvfM1",
  "key5": "42QhndLg3pb9qwsvNS2XtScD9BfKXid7iBzzVzGSSx1Pxeh82Z8o4Lr6JeUCH2dorfp6FKkYHJSWhBVktHzdy8oD",
  "key6": "29CuuQU4JmZSvwa1svzHTqt1qoccar253beYCLYvNpdmnoYFg8Q8TJXWzcv6KK2rYEVQKc77RtbUMtKnjscvhRMx",
  "key7": "CSr5CZsQeQ56PZfqXqstbxVSdeUyrLdWmsNth16bKTxPoj1hr3TtWSzkerkGGNVRKMhuXLnU4HiQ7PFz764SQ7i",
  "key8": "4acu3GPQm2r2FGcVH3SP8DcRQw93c5kstMj94KJHzCJF2kkn3gzCiUUNpjvK6skJsRyXgQQNAbwCcuQKmGHTAkD",
  "key9": "9s6tiy7bBWdTicPnVGoREm74F2G3yUvs14vCzaaL86Di1wtrkGaRhKPLewWxcaDcL4a7PEmm7SCUp9y1aZyqFPL",
  "key10": "38DpiarG7ax1Wz8RNEjdqvDWXf8X8bW7WLYGwKTub3oBcT7CZZEWTPuGPXk6gFuBaxQepzXCzQBjfqSsf68jUhwv",
  "key11": "DgfyshZrH9RQSJLYrXLsErFUJgRGzhcxxpXsW3yEwPCTLbJQwaG5zrvv74ywUZBFcVYwZPJWGTfS9CxaYCVTFRy",
  "key12": "5bC33me82KcseFb37mXSCN562skounH7TuUnDjHkgfiguQz8E3EjuRrHgdnDan13rDmhU1B9PEnUTXTexb3XzDVH",
  "key13": "3i8C268TsdojVmeoukrY2fWAH4x7miCUHWMnSLqKPBfGHL94rv1ZmYCEYGFQr2YobEwAmNkwgjrXoMmc3ehkM9Bg",
  "key14": "4dz3Rm34n5CTApN2KsNkEzHqyEczNDSU7kJNzCFMnnH5T4U3WNVKbnBcKogqWZ3sV6msk443qB48s6fAssKigHz5",
  "key15": "8duWxj61nKrWD59DZ5qcgrGoov3uKL9e6aDjskSuD5T16paSxjxuenNEedHzxsEUm7131eJpeeZp7iU6P4NWGKW",
  "key16": "MehEyTGVe7CHZqiGMYpGvELzkrgEcHv6Vm4Bse4oN5Fh3yJDhacNAto8SQjXMqgEjdqbLTjGt7iU69Tb3CfEggb",
  "key17": "4ERjq835Bderp2D5qyegSs4LqGo6K5RiyL4dKN5GsJpUyuqUvSZdqX5swhEiFPZHqiWoHtCSCJQto9ySF2VH3Ybj",
  "key18": "3pAHPtTbwngCdGQGkc5SLetE6SQfRVPYctv7JmDs1bsooVrqdKHAqAFiSnZg3QWBs3Hcy2VM7zz8BDa86psekEqr",
  "key19": "vSHCvQoC1T4SwFsbicaSaFzY4BAr1CNswZ5xZFqPt98RcHSKKBSTjfpzFvdeCxYndRVSFHcVCpBRHBZSv56eNqM",
  "key20": "4ukXNPegMm3NZGiuUfhq2C4jSiJGyE8oEEq83Mxd7Pico8XMU5FL4ZCcHneobjaNha6h1BGpnoVCkCuTnmx6iKeV",
  "key21": "5Kf1dwRBziNgQhRFQvnDVPv3x9Ck49kGzshofea3zjA1Zd74h38CbkumB9pC1gcaUsY8LUgPsaqttQRPuzr3xjWm",
  "key22": "3cBoEitbk9sAUUDh28Hp5y3TAaydzrDpszpLise3gwhAFy1mDpHc3gTNUDmrQcfHWynuDBEoA8yaLkFrqLVUgTg",
  "key23": "3jRxPxxW4A4SDX3VmCrNob3SBNziMxy8XdjmrFDws2tf2posKnVVA2et2WRav2KwPnPiZiwLXW6xqC34sDq8eXkJ",
  "key24": "2hUJQyrXSySZB3hBRsSTZjaPEvkgxzmb3ZgeJHHBuYo8MnAj5rpnRje6df3sh62zTAC6c7opeLYzXmmXCfzE1mXD",
  "key25": "Z7RqEDQLTiAYatXmZHvedrv6uH3vQhmDmH1gq8dRPL2DszMkEi3ecvZhsCZSPiVuBFRcvkAq8SYfc5zUgmd5poJ",
  "key26": "PSnqFBywNhjcpcRGB9U5MFyfquQs5vEcKnJYVf4tyHzDtqxYEhbqGHcqviSbKXz1Hx6TYCvoeHV6vAChE5QpF1K",
  "key27": "4bSZKMg8NmBnvRfNvEjzmmwNUdjmbfLUc5EpmQD2fEAhk4xZA3paULjeAyFdwUom1iYQ5XzTtbAUp7WNdi68fDSZ",
  "key28": "42E4gH1kZTtuESDi54PkGVf8V863L2CQaTqqYuFy7819xQqAe9bZq3oH4ySQJr3rzL5Npi4ox7t8xWftztdKdv11",
  "key29": "5j22qhgFt5xkEumYHhmpGSaDwNHqAfwmyCtebLVcDDj8FvMR1KYzP5gSHENjqe7Xxjw96D8tj9DMzfNC6TiWPC6T",
  "key30": "5vGUWpHftjiYzbYb1FNTEy7c68ARSBZdeRHqieYEXeSz6JkaMyTvVDiNX4oxfdGrKNbjYyfoxhW9gzvNC8zpiYFh",
  "key31": "NspKB8kPVeJtHGrHTXj1WznvgWZ4swt5YbMjpgDyV2upuSPQzNF8aN2fnhCsDnRaWAW2bgd7CYNgbADso87Xk2g",
  "key32": "4AseXXNWEKMZFpLRgSywxm5QMtKWggtkgn1861DuyrHoQEfPfpiv6ANFvM8PcKS9yNpkPf6GPJkeDL33E8soGjwe",
  "key33": "2F6SdcHJ7WmHy5x6XCx7ojHPdAhpYxu2PQ7A5b9r9gcPysSGJBASXvG5WDXLKJVC5rnC6ZEWMj4FKDuW8adAPcNB",
  "key34": "5pgADzJaV7ajepcrm5eAscygMUFxkm8eho15FtwB5EoePGdEgWcrvgHjsmsbvRVX6PvDDZvyDZJBurekhvgY8neh",
  "key35": "4oo4Bvq9rgYS8ZzCnC6mpmciRtNsU8yfc9GoiSWovPTNwDwegktEN1cPaGQ8otz7WdgtkxAaZJCm1XaoF9g8iF7R",
  "key36": "3ndHyZ7ejE6J45GPBe6kPtxCPtr79Ev4t7m4w6p6tMcHTJWE64BUQqbgcS9jUJz4pYWJBKwV1c3Usv6iCNuh1xSp"
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
