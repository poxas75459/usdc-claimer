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
    "5vTbbzTgbZz9BWREJF6JTY4Vo4yv7h3m6ELSmn7Cg298cHN8X5tbz9Y2Vgfqke64jqPDVtoZepoRFXtqqKEmpCXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "purzCQqzFzuDM8cvZpqcQqd6h3Q15dZFMVjt2sHoCcvbBSWyQzhoswGtQ7wAG2wKPsHPyv7qV31SAjvbEZ7DGJx",
  "key1": "5va8uiF3XVdY4vKysAGQSoXVdRcGrWiFg8y8d8iMM3oYbENFE8A7Nn1aiB69g6zkTftBKwf99HhaEDwmdG2vecWQ",
  "key2": "47qnGQ2n221RRLqXrC4iWeDS1JFTmNdnMSjFfBvirZoChzzGWXFoDN8TaMyi8mX7BeK8yzozsAfU2n2zTkCk8oVc",
  "key3": "5rrB9MvorPCysE4f3UM9spp2mVVPDZhkB2QeMZ7JRcp3aBqPkRY9E3hEANtMN8tTBm2KriXjfreBGKXyk8C8znLV",
  "key4": "5u8LQCK2phRE158rjGtE6MwfcZ8AcXrcuT1wNwvrtLoCe4qB5gLbafkc4LSBGJJHjRwjJACaQtrnixm7KicaeKM7",
  "key5": "5xzq5pDTK3G23yugiJxSd5AfvAWhXqYsMxmy8Fm1rjXhtkexvV6kFrWfnqwDKtyM7njgcmKihZjm5g2wdBmGMSvt",
  "key6": "uDGaLVj51TeLzuKhAnAgSscVjhJiyLJSzSCTxEaJmmq1BevgrVR8comeNmbMMPgjPw1ues75G3xwAxqZffcheqZ",
  "key7": "2MgfeQXGjWRWvfqsHzn9S1Dhx6hfYnx4GffmgTD6Ti3qF93y2uYw7S6HX2yFt12mxJKf61R1hgRsXVDrHjGd5arN",
  "key8": "EbwQaNaTnvD7ByYRZKM1SGKn9aFoVEHMHFSDCshFmRGxK32R2e43vpyV9wseV5hhrPSo8RPjiE1XDbQ3k1NGQkL",
  "key9": "2wknZ91L45DBS6DghvATwRZN286apzgmf7qn7Ds6fEuvXuc6ijjiC6aWUjTqoJY8v8U7hPFUA7mDLj4Y82d9ofLp",
  "key10": "17RSqvBT5rbpmekDza3FkiEMMRX3totjafPom74bGB6ueFVMBMwMUG4ZbHqRYsspg4cVkS1HxNRGR52StuK1Mhx",
  "key11": "5o7522CM4VFEys9kQUuSLsXLkkj4uXf92WDA9cNhtVWo2HxY1zTCKT686EiUMv89WztgAVe9GmeMACPa7RFDB5iB",
  "key12": "2ErbJvmxFC3nj3ZDvXtAK65p9hYzBMtxojYB9PLYgNZG74h3uxuUZ4fSUPQeD9Q9rwa4CimshA3oYpeqyQmZfSfC",
  "key13": "2U29FWzpGA5iknkkkVVG7sF9v7UU7kdTwqoLnrBqGSrXxRo68ZMqJNqiQSVoTVDKxN85jxSufgUsiw5Bp1EQ73Tg",
  "key14": "5dooczGKB5aVbvtmtuqde6YVaKf56DfbCczw5pVQ3f61HcacZGqtahrGMxyy7M3fAZHTLuWhU8duf5qLgMmv8rrX",
  "key15": "2g1hVXvw5jZbxuSyCYE2hJsqpeCFtgsBk6cwX3UmNNqaEih8WNmPTATHo8MZMiqgFkYHeXwikBwoqmbZV7sJvhCm",
  "key16": "2Nxq6AH8TFachTAEq3tBwrNnSSwWvbDsir61XCe8MyU3LhpNstHZ7s1yRPYJBRtbpv6Xb6FysgZJNGS2BLJNQXfq",
  "key17": "QPRTd3rAgUgDWb3cVMktFWsT5PdkDJjvhmmWg2UrcJATXG7k6waJejybi5FWyQeKqMdBou9a9FPYbCmNG3wythd",
  "key18": "5YRaX5VA2ka5TmE5odrCuHZ95Xw1MkPVy8VUwwnyDM4eAxmbgXnzKLjG1vBsqQVb59Ug77Fe5o8L29GFUYnsKxaQ",
  "key19": "2R2wuo9ZsZTBNZxvBKcPNw4KNpGEYYY45X7KhHcpu6UE6Rr1WSBK3k82FqyQaEz9fvP6U2zTjFuDfopAPRNA6XeA",
  "key20": "2QVoZkFLxZy9v9HFiDjSsFDJKtxUGVsWgSdUpyLcDnS5uMTW5fZTot32vwZemJkYJkVwhUe1Vhp6jSUwsRBCYmTs",
  "key21": "2zWpwNPUMvNeXcaoBFcSH5Cyc9LKoMpqGPuP7HngPghV8ndfSL3tt65n3wakqJe72oeWYRc3ocSHiGbrTnhssPkT",
  "key22": "2Akrxnom4cjc2o3ndvjMnVH9kKKs5FDahdPYZyDEnRvF61V1o2ikwCK7pJtZVHrFfzbKg38BLKcEAEBdb8yaqwvw",
  "key23": "4ayESgAwMMt8BFiHUizWBNAEyxTx65cRTtKGmBJBtNKoQi1GHbJdd4DSRWc31QaTHKqpS6aQrx6ke3MiXBvrAf7R",
  "key24": "32n1c5sWm458aBga3e5ceG3cUtcieMearmt1nW4a8iuhTdcuejFb55pwZsh99z3mD1UNJaC4UWdHHGq6drCGMgK",
  "key25": "3f4HcKDFB6wqNoUYt5aULpHGiVahWVy28RL1yamvgdT4zsuuQ7jdXqxopZitQbkCduyDqYwLP1paUMY1N8odf4fH",
  "key26": "3TmfFmHBwfsWvJrM76c1LKTcEYQmUfH3bCJKsD66pL2iEhsbLFKc5cguvDxuEW8L56VjhFUaAtNtX14x5rVe6kCe",
  "key27": "4NjACyvQz6QNsqxovL8nBS1z7LS53Km6fAWXBLBH1yXat5gUfF4S4acai9t9GEZ3ccsG7SDsp3ejFhPeqjkLpZFk",
  "key28": "2mc1Q2HwgHaikhSrPCG7QLpjhrquBzHboxFeKpkdkeBieBovWp9rkZqK5UWX3fNPnWk5v275bszuzQyQYjnRRcbm",
  "key29": "3pm1aM1uzav7Z44PoCFgwUDYgAh6HM2npUy334Ye9buwA6frvKXgZWHTwu4tuCnDEY4ztWvNqiPPDauXzXFkP2Qp",
  "key30": "628M1tuBuD8spAVpeMvBGJfCABJVXPDcH5TNiynv2aUtWFNezbsjDMdDfLaft5115JaN7QuYGK1mEw4tyHq1hByY",
  "key31": "51VJ5ndQr3erFy6K1aNtU8FDS1dtomP6vfz9SToBKbhMxov2MGcBdD75ghutivubSSnU8bWWG7RAMmfQEWQgjTbg",
  "key32": "7RsumCuHLF5UFjUumzoAmnxFawc5n4JJHEQQ21rJbaay3iPtwGz1KH9HqcfHwB8HbctqWAwE9ueD3DysBqG15WW",
  "key33": "4HzK8MPoxN2tAcZ4zSQtaaYA6TJrCqAF2VqwwK7nJDGyfe9XtZeZErXAEiPb9hLQtVXkK8PZHVQbF99caozrGrRF",
  "key34": "2jwSALvdmkfeNYdSbrp2z8QgyLYSNcjZ2DQq5VH3TFcM4JTXykdZnVurXVqmoVQqLGE4Jvc25DzFoWmJ23223sAz",
  "key35": "5TZLFgkZJ7bk7f1a3WRC4N1SEGcMPp68EyuQEFbtDXD56WpnXDbJ2hegEuZTdtZkuTqSqaZEvcjKnVTG3Gb8Wans",
  "key36": "3LuTHydXaM1FQBGwj9QKnBVgmZPcRtBs8heKnNJrVQQyQ3QKENreVayuy9haGUHhmec1tHPEjEd3Zm2cT1HRsVhd",
  "key37": "639s3AfwToYabg9CsH44nefGm3xZdbTHh3ERMjQthCRjfsmxC8mDtBYc3Wd4qXbYcHfsB1bkXUb3ih15KRht6KiL",
  "key38": "6BJHDjP15PsH8ZMf2oK5GscRJMbJ6HSjzt28AYVCLYVAeaxiYMerXc4b8F3G7PCuJg68m4Yv43MFNY9E11QY3VP",
  "key39": "5jkyVkT2jJGTHwmCSTHEGQaD9zwqMxnn4tzQs85V2xJUHNyxphACJH3fVf15EoA7n9rgsjMhdfpRwYkeeCYTipyS"
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
