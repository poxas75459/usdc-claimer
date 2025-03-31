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
    "LFDZi8L9aBa2g5EZodp6itVy5vwRousZ7jY9MXfWh5pgzAq699xzT4n9vtZtCRUJ7HFgx2oFsjmXXZrrxocjVpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63CMTcknYKEGvb2BKM8D9MCdTjWceoiLeGyGeA9UANy9Ly4g5oWaheqxX81Xgernac3zTRNF18ZRdNtkaoQdvMx2",
  "key1": "5hF6fV17ZhaTiUQ4nfWG3A3dcaykxbjeNwKC5yJ1ANLYXeypgozrBoJ6qzgNBNVcP76ewAn8caF3qAuMADZFUbAe",
  "key2": "5TtKMqaF3AAAuBiX3yUwMfpHbacQh8HqHgCZVDMZLis1RDyyp7LfEy6r15hQfeaHAQkoQtuBeYV6Lx1TVNPApCz2",
  "key3": "3ZMQnfuwwGAKWm3GJdsABSahaCKKd7CvWwXRZcJJK23AhSZK7f9cDFquGsYjnGNMx49oqeBFKbYiv1G11YktQXQq",
  "key4": "57wDVwLgR52rjycRazQP3NBPR7PRAiSS5v8oj4UvMoqe7GWobJQkaJVNUzFfNmNy1Pe7AZLQjyhXhmNkSHoN4TxU",
  "key5": "ZeTAa3MEq5H8aK7jyx3Hm3toq3rdkPTrn6bCCkQYKh3i96BQYeB1khR1nsZFMpxmtfJLGuvpPFDxSHKXQ5mNEjw",
  "key6": "5ErUe4DqtM7cg6dVurxbuyazJzm3UbzrcqTw5TPaMtZMuHurnSh2EKjPx225SP2MfeoEk3iJQeQnDpsDiWqLM6rq",
  "key7": "prcskVQbyecaneri8yZAXCNwWAttVtmB9LwLcFXcztg1FDWtsN7pHTgM14B8nHEAkiCzTLDKSdQPtVRVKcBhEbu",
  "key8": "3PCNJJy6rpCB5PxCJZiCDNtK1dVGfSZRPTv669m8h7RKm9tbPPEB3tf2u7qwi6UCC1QA13D92ztMnaUCgdLNxh5u",
  "key9": "y7euE8nB2Rg5s5p7CTvrdMCymbKRRUUChYG6y45UpSNa6NZehNgoUQNvuaSZCVhGhJoohD7y2topRwfatn5BJP4",
  "key10": "28SbSX241TH4vc8BHhxnWka8kM2J3KyMKvsxdYRVTuwSRnUQJro1csfxPbNgHwGE1JFajuyAnDx4gKhASheztFqh",
  "key11": "3AK3GB4BgmRufqGnXazj94wxhcUBSHuCX1oDpiWJS19U2x7fiALdqL5jPvmDjSW92Y5q51py3AS5jMEipJk33Li3",
  "key12": "3yYnFyh2mcBYNTMKRfVVais4Jfhsbnhz4svWpYM6Lg1PNuM6vv4gnZ84KChySAkEEedc3fwFi9srFxFxR2W7uZuS",
  "key13": "fs66ehJnuASsKiUe8HhxgijkerPUk2trLrjMw53LTDGeMifzNGRXeRNysz54D6Hyjz8nXHjF6QnK3h5rMvjkyVB",
  "key14": "2frLWha3SRW7KtZvjzGeGdUq5VhrLwYiAgaktNgTsB6Qs47wkJBnmv8m1jKsDqaTaac9fTkAtJQhdBrCSRQ2hWf8",
  "key15": "2U2DWb99iUMqcoWMMmghBBQkBaetKPU1qoihRUCdvck2zfSWp3e2K5zSz3rfKaLyPP7zGZBJMpu9daCjKuF3FBtw",
  "key16": "39YQ62ZoJ6XHgDKDJCvNLXnprRSzWNBvW1USEGhemd9z3MLNqw1hVyoruGEmqchWjPNG1FjeTjY9DeFhiYf8Jet9",
  "key17": "5fL6BGBRdJKx1wGF81jqxUJdGnvCTkieoaWZXL1767YAmFiLWWrK1Nb4qWyK3YLw4nDM6CfCwUeySBJMB6nybdHN",
  "key18": "fEeoMn8Ljzj1Phyinnm3HLJ3Q6gKPuqxobF5aMU7cTgaLyCFk4kSmspkpmWej8NTJg7SZzs2JSR3kc91BSdivCz",
  "key19": "2mrpfikK1SggbVsNxrMoU6rMkwky7U4koD3Tc2SRZ68gptSDqnyfFgDE4eBYZ4GPAYXrwmjpMuudc95qsMUWKVyk",
  "key20": "4Cf9XzyzP2s5wpowVAEFtEAGvhAT1r7o3GXPUbWVsiPHphgP7J2YVNMKQE9UF4YN7pdCNdZoTgWN2e8EnFTYMZuv",
  "key21": "5YCPCuaWKAXhhVU4BKKTJKQnQjbRPEKeLq4QYf6s5qWZR856qnjebC2Yy5tK2tMXqr4zkxn6TuRxZtadQTcC4Fy1",
  "key22": "4MRtpcERRixMKoiDR1rdWUE4w1HrrQy3Ku6NMRTJLPWW8zNvPrgfWu1NwLvwh3EPSTaHmJtx4eNvNHZaVcJhL3vo",
  "key23": "4JbM42tUcYqkN8FxrWFeB3PUrpvQtiUdSSAwKzzKVT8Rm55aJvLWf5XPn53obNVyhivRAnz8NoMMirvqKcmbr6wp",
  "key24": "2635MfwaJgqc1G5GGMb5sBTqBF8sUdqbBoBrT7RbrvjFRJKZ688QBLY5TvQJe4tHpgPvC8F3trR6fSKmgy6ZxoKU",
  "key25": "2RLch916r47tLcgD7w3kjLjxevZN3a75WHZNrtKfoLw2CAfFogCcrg5cEJYfvkEd9UDaAutAYFF8AWKmmeVnTSUM",
  "key26": "3GFi8xEX5cy1Z1CTxaU2kzxduyX8uaw7kzyW7oyvexZmA3oymRnSWzwXJz2pCcgSqDSNR2AvfFrdyYSG2hUhLsm6",
  "key27": "3CThiouf8HWv9Xa9YdfsCRzxMLNH5J13LYpUSLHx4EPtWzfZcQA3q3g6gdmnWJJ268uR8QUVRY4BZ7NKTBif36zM",
  "key28": "4r9KwCt7oC7BsrzQgjB2BWcxFv3QgHY2msbWAuvyTnEUpSDNQzxDp2QajjjCqhqdYkJWSLjqxZeVhfk16tkf3QXv",
  "key29": "3c4xrjYaL7CXGY12c7ht6CHTdpkLmK4h2VKsX4APoBuzNDJchjKaEa2Fte47pGiy2kC7Jyv3FLWaW3DxepgJFCfQ",
  "key30": "26uahaiqcJg4hzdzry9j5jiB6XrhSSmi6TQ9eN3xK8AosN7fZfsMRRKy9KidfwLjEEBuLbZUpyzjkUnWfTZipTdj",
  "key31": "3cAvv442Qp9ysiHhViRgi1kmYfZrZ34awSKYJTp6SBzdfCsyE7REGW35jHUuhS1mPvYGD9g7XcCZ9HAsH42oDpuv",
  "key32": "46VH8iUraxhccdDTRLk34Kv4xid6ZJr57bdCywS6EnyoMiYEficsMY5sXRcaVEneYdSxesCoXTM6dupsqeabt7zz",
  "key33": "4ZCrKpUQfEZRWTFERi4h6dDLe1LE5QkVQhKE3rE6FhHp6TdGwh3nAoz5fqoykpyhxgzNdm7cRWf6ubdKLyR9DfQk",
  "key34": "4frdogqdgp5Yn27Dbb5MdzqV1x5NXtBGmKwBxHfgQWzMyY7fjyn9HMsJtpiZjmKtR9YmdtKBWJAzxDUVYoKhS1xg",
  "key35": "3HTu7Ap1GjfB1Mp2FJuCHkaWJhtzhyi7xtd6tpxisJdriKfiYDGYDvJoLSmYDi2tjbpKwgHJ3yPQdUK89GdfC7qe",
  "key36": "4Mn2oqEgfvBEVTNkei5Phg4WpkBgELm2K31DMjwAsCzjnvYakViQX82s6uVUREuByb5WoitnLvRMMueXYhBimBvi",
  "key37": "5PziGCJPcTZg4hjYSp1edGumNnTBJUSgQatF9NG2SP4W4jGs8g4qM5P3HVBF6Dh56i8ywcKFNtfPNUgM3AqTFTwT",
  "key38": "tstAAuoPnC9zMjiTi59ZezFdkpr8csfc9MfLmTNKcqPERjL3QuB89zYsCehWHB3rF2F7zE3HQx71Qcc4JvLWJ57",
  "key39": "Zya99RZfe1aw6Bb4VMbHz4nNp57bpUh3JN4KrDsBn95wD36FJY4zBFrFJujdjSG1zqLY1Ac9LBdr5aD926XywWN",
  "key40": "2PUWRGG83afwYZNiGaN7i3tx54Hc7UpNGqpVbciCna7axKbJUX97qCiBUWpX8rT7yTPfkGFqhmbGukMhwfZ9rzFz",
  "key41": "hbpKynvuM4cEGB4uHxf6aKjnNghdTpYBhAkWPEAxcTkx1HLovgaaHrWFCuB223DpsNbCJa6PpsWNwWvMcpMCayp"
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
