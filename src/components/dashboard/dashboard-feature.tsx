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
    "XMy9HAEyZewoRLscs2JKJhA2nCxSXS65rPEkpvYRsmgH7oFRrYPTpBBdYskJXA3QG2CCjKxN7iTWrx1eSLAkPuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45XAo7sPMycRPSediwkovTssnoeLc51VNSEZ3rediUcQv82evPV2Qu2R1GronRWmYroQ3Kaf1HyMjbcWJzfvwHZp",
  "key1": "r7qzmemxa5SBU12SR2xfmFbP3TASExyxspsaSvrFtMfuWmdWJLwdmosfsxufs7jdtd5A8c9RYfJESR85uzL5j3D",
  "key2": "5Nu5m3bQC29DHReUPc4c32JACXCtPFJ1iGtkd7sTH7smUf1zgkdDqhEQQGE6FjN5DckaL3efHr4ZnuVamebtFMfx",
  "key3": "3dDBabGzDXUuPHHvMdS2p6UMcb4wHLphpqozPzsrpM2C7Fj9hA1EAcLFQnjG3Q3ivnybsRH7hDsHB259k8WXJtCu",
  "key4": "4VAz52ACnCuir5emNNVfjygmot1LH19btHEhK2yyiKAvMUeybAkhBJS2gN99YGFgqdzfHdq7wzkfqb1HA5ZCkpZL",
  "key5": "jc645SDgPhYzTGnvgpgrjugVnu485z5oxFoDiSvLiQXZkgVLmaKga9m9KWxvcHKNGGSJSvuBZ8T6mtQdn4vpYwm",
  "key6": "Mz8caFgRtK7Nc99z15yJumuEZapTzZu3fi1YzAna8cfkJpScLf522DZoKQ64Js42j5X5BUwcRLdH3MtxQdHj6AB",
  "key7": "2JeFGrsj2n7ma4XMcFA2sCkG7eBdQptzARESwZKxeK8mM13B9eq5nhWPrzGznEZimyzTAsMvgZB4XF8yXKFxyLao",
  "key8": "2tJKtnJffe8FZUTgdpJvS93Pp8zX5PZ6uwc81oaqrExjoLwjZ6snB6vzmhzrBgaZCSBMg4H8EtFrhp8QpM1qbjVS",
  "key9": "zYgdAMj1KGFfb3Y4mzKb5WveX84uFwaGT2eNnvJToxXPE1UUNb37Fu9SByRbzfG8qC65zVPkzQiZsLMQ8NbgHSc",
  "key10": "3qnP9m4MYyWTMw1L6yjCGU24XVVGDFVPVpRp2hECKJquEZZDpTvcKr11gUkrrZkAkcGYPL9LtJweUcN1HYmKM5dR",
  "key11": "4iXgq6uZaA4ddvaanxgXzzgKV2sRanTvftwYnYUbf1VVpP4GUzTk74eGvzLZ1g9QShGbhoYLeTLDj9PkPiWnLQUL",
  "key12": "aPWzBjgK27kT4eysPqzPQL5Q25ffDuLfhnUwENofWdFvxZs5FrSdoGti3Q4yNdVRCAWf7sTWJEFJFCtxRfhpwLq",
  "key13": "2cBgxJrtiShjDofgt9aKhtdVMfyz5S8m3h4tJKp7x36yjQSfjCXPTUTMwX43ZWwX1oL1uZZ4XpEvsWydHYbDdgXe",
  "key14": "5Jh4W5wYBCFBzELZNN163wMQ9Nhgj4rxqReYMRWFgsxvZG5kiwUuSw7RLRteTkPjw9F6EoBwrzrVEXRhnoPwyK5E",
  "key15": "3BqPjpqiihdf7QkKHhUMNQEoBCaZ2Px4H5XSophuKTsoPnmMLwVutS1K3RrvnVbXGLN8CBcMtcMq1w4owZGxQQp9",
  "key16": "5UQrJmSXJS7t1E2FuWrzbSEqn49Ab3DTBFS6nfhX9XbDXQnR62tWfdkEzpTu8MMxrck6RBpWExv3jiWRpCi2YWnA",
  "key17": "4DeNYSXAHQkoVBhJKVKe6ZVTiPDEGQiCu8fvVbX3XH19td9gnNwXXLy9ZpUwWtdYCE927dE9FwBsRAbkRJNFfSQg",
  "key18": "3eMeW6gX9oY2ufg6ot2e1TvrTusSK8zg3s7zz6zxMcsEB6cBCFoaTZBYb1oteqEea9AT6unzqgpc3ybhSnLgeY9N",
  "key19": "2kpq7TggybDP2YhrkqFAtbLYEJhcjzYjvfuN9E8uwTjxxd2PJVsdzksG1PU7kqNswS2PEGNS2Bgm4ukndezNhWsx",
  "key20": "4wc2wcynKTw3pCsAa5yhAKikevtoE1MnomEJoEUMgupqUSTJX3fy5JHzLiYE9wUuKwDoyP26JRaf8CnhVZco53BH",
  "key21": "4JitrRkx5ZLnJW8z19NnpUFwion9C8hUBVLh1wwznMdoq8QKzpHmJLofPynJoTWSXr38JjWvPP5np3bUR6GQQxVG",
  "key22": "2w3R5ox7U5JtK6CTAtSbrQRp5eJXcBDH9qYE2dtTWzYyW6JqVKjvx5TEw1gwAbApxKF2uh4Ukk3TLceARdRKP8Be",
  "key23": "5FMzLnQG5dRzUHMLg2sFFJqfj1rGetk9dE4vLcuUWEBs56d7GhML6RNRoveK3DTbiR9P3pU6BSTLgiTPkfU8WJWQ",
  "key24": "MwZPwKzFGVnJbhoTzQj7eDfdauCKkxFNYAbhratQToeu999fgYki1bjoUy6Wdg5pFpbxmp4cU1gE5UzqjkqJDnP",
  "key25": "z9fdVE3ZRRrKvxByiUxGuEE7DXtEGimStnDJjS6jfT2zC4AMCuPYzVgtdPSdu9nGVCC9MkCoTMKDigRuKRLXeU7",
  "key26": "v5v3ACY4C8cKeHrFeeR5oP8mP6Yjk1AVHXCfcuwUAibhdTUueny9wqGgvjQD93kJqanrCRWhDdDmjd15FDKMQod",
  "key27": "4y9XkHSzBvmREx5uwdwjwZtKJwimZP7h3nZMNYLejLSEQkVj4giGDA4mBPCFgNkdxajBTai3jprNE2AnjvnDwgJe",
  "key28": "3hwL4gnSVFf3PwgncjLfpSzdtAYXeJpin2jspd7h9CrVjz2aS2bapVF3Y9z7BChGdkKVFMzrNeLUbbJJCmZdCWE5",
  "key29": "27zoSJXhgr48nxdnYLowCqPPw4Ky2ssUbXrvQa7vAPRbkvLWAPBsRcwi5pujPH1uQW5feWuWbR6R9qq3GPPoD13K",
  "key30": "RUXvV8eyB5Wu1PzxtEkScxDLEsCS7UezfHfZPbjgWu4QA81eGntfoWSgXAVhFgZZcUpgJCqiJv79Hh5N9E9EDKs",
  "key31": "fdtArwazsmotRU5mWuYVq43PPer9MmxKX39GacTWTwz5kMLEtv2ng7EVr2SnFSJ1HN42ZacJpCto8kgibCcJtew",
  "key32": "4GVS3r9vuwZjPx3oLTMGWMaVdVVRa7rKuKsD9rpNwpvj84h84AKdoQEKE86GftG27RxDg6rN1JsCgbMK1FXXMF7m",
  "key33": "2bKjLBAKYSJcbiK6FQNieELgidzkCRwKuQgxizzHrbaKoGzehowL2KpQobvrbtDiAssav9EqBrCPvQtyVcUFEdvm",
  "key34": "4Rtb6MLNY3gJrRcBuEvBm7AfG2pajcycyr5Ma7jfw4JjBNcJiA3MVb2N9A76sgSSrmR5sZTuVuujsQKKEu7jGC8i",
  "key35": "4oAzVagjVs8QK7vo1L5eR2NCoazwPkrqPGEJtBsiym6jY1JKP5L6zd9ChXEhMStnXd9nVwNYwDeE4d1MJTjQy4Q4",
  "key36": "444tkozATzWq18xvCdAuDKkiGKbRHPu8RTdNFVN3ZPPf4ELrBxNonfqdCQbcpG5Ruc1xsG6pEsxLKYJUv4iyPMCz",
  "key37": "4mJn2Y1fsFRKYmhBtBTwFdcLVXg5PT9kgb4XUiiWZLKyKHKGx79WFmfh3p4thLbY5pHnhNoCP2VxAmrBdJPwwwyL",
  "key38": "4tKfYc7J8rmGeiT5JZJqR4ZdupvpiWfHPMyKCLfjv4fQ1urCdCqyDLzkB1VXq7JchNmiqQS4gS6Rxr2bMSnfSpG4",
  "key39": "2q4PBN18GZCc4c58Wrq6bCiZ3Q388TwTFKq2U3cieuJsDK5feQoSnW6G7nFhJxjiw1AiuNxMFT6qCESYgmv2RzUJ",
  "key40": "3uwTZ2e2igtvVn4bcMZsrHEir1hfjjQVprvmDjLzC1xD6j9LFPaLoMUoXAkjcgn2RsJUUik7J19KYpcorof7qnBp",
  "key41": "5syy1XV4FKBwZibr6ZwuW6YzSobo9HqwhEeBVdBjfCqxktX3vhmGQ5XukbE6sDf9ytoiUabgB37nmyYpDqdyzmCX",
  "key42": "2zmYuUZ9J42dtxu1Lzn4Ht4zou9akz1okj1my7rH4BkK16Mpwuopoa3BNSSCFTBrsp4umYksPWFbPHd58du9kWeK",
  "key43": "UZvzrLqAXMvKYu3yubhwv272yABwaQBXLiUx7pJYujx3KxJye5Wh2C779Wpo9roBbN312LbDUd3cy6Sv8xRjFUG",
  "key44": "3sV8m5BWSzayY55p6d3rL6HBTsLnXvVHct226AeiFun6ZY7ydeQUdpvzu3CGLj72K4Rjckey11j9FynEHqgweCuv",
  "key45": "4KTkDtbb62y8cPPp8Y7iuASUhZPrxfNH2cKFqMncDGznYjXQRsFWMYaBmBRmr28RthqwEFnGss6ztiVqU8ySb4Ee",
  "key46": "4Sxg2C3oi3YZQcGy3PewEBzJKyFrsSHrPpjCE9gHudMon5FYeXZKiF2sNsKWeBbsEhq1jqEDzB1t3Z9epUg7pgsr"
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
