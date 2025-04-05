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
    "3Z4sgo9Rgxc9MUTd2RThbAxyqQSFxZCaHXhWfpfZZprx36ogjVC97g4ZWzg4rUqtQNDcgpf8KUTxkmsJLyr4jxzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qi1Emgy6sF1TbbBTrBxH3UZ69BpeT92WAwij2rUiv6CeepSSsp3ZqcWMBmETaNhtXeyXHuRe4EDEmtmtkCCKrhH",
  "key1": "2eQFRwKgEsjfcMQEuH4wNpQtJAPX6CwZpaKsrtpKmTSvpYupPL5zftQvjbxBwvTbm4Eov5CLJgt7n4PJvorbFpKC",
  "key2": "2PwFwoCWhxW3cXrqToCA3tVkQfBDEWyJsrBnEcfRm1wqdt3EtuRMDjBUfGwbw9BSWBqNJisVkf7tHxPh6Z7zUmim",
  "key3": "2YE9eVf1CW3ao3DKeS7PmjCVz49kHHbMYnk4TL1816DcKqox3y1Tpq9PvEW28pRYw1MwN4rptyszCpSUjm4KWQTE",
  "key4": "2xVCK3tC1zSyxdMuQvuy2tEKu1c2opMGEsM9XzLW1VX2MvuaNgfHMBR255MrWCPTEnrq9c64QXvuTytCkYPjA7X1",
  "key5": "TJREfMSRX45nPFtKPd9L1Z4oHAk83mSZhAXi8XTCZ3f4sTdiesrrDLGmW6AFuRNiRx4QdWCRuEPvT5DFDW41dFS",
  "key6": "2vYiY2eVHzKDAnNjSSPRgZ5cqNCfckvgg9imRuPPeWrpbKVpQv8xCECtWnYkYLQqnrj8PtAGYXfs5jnq9b1wEadr",
  "key7": "5ESWL7PbXRuKgUWZYGQRe7pTMaFuzcTbKBgghxihYis8Ry4MBzhunNhzPc2FrnC1KAs3kt5ruqHHw4JyyptCR9dY",
  "key8": "V93BsRVEqiY9D1yzqKBUU2LLNMgti5Hek6uXtRq8KBK8BumoYCmZjZBKKhzdBsH46LkvQHDnn9iYLahHB1wfj4a",
  "key9": "5pneprxd6xABC2qttCtJrgXurcXgwg3RsqpaQVvKHGuc48dbzP1SAyitYXUvTPyzf4nD473Q4RioRPiQS4skEWsb",
  "key10": "5dLhZaF4vEv9spSK78eBC6FaapqUqXBvs41ztCcxR3sVLr1bPkm7xDfztWjxFqNwDY3mVCAo7iVZEizaLokB51zd",
  "key11": "3VHRLcWzz8eYcQvwVX72jSdMLot7U7UhYqDnTRLt9JFRkNfPmd2zn8LCeC8MwE3pfb8ppb2ry5DfVk8sTJfF428y",
  "key12": "48rcxc8Rh73Qs2h1DBT91L2WLE4PM2EZ8njmRfu14X4oPH61pByMcZZazLY4pN56YfYKmxHeDiTGgXzsTfhySLyg",
  "key13": "5P79Nqt4FeNGskvPFTZZWztBFPwqvvPPu9RJ7r1NdcoMoVje35HHeoeEqemrwDZhEzkfEa3Y3Raab5XeFHpzySeU",
  "key14": "4HpRP8ewVcKMrWRjsCdcH2qjJiGJoaPSoRx7cxoTcijbTsNLjvwzcYZUkTaHHrdTYJyk8ynHSZCpxUHsSmd58UB1",
  "key15": "3qWA3qVA1SehtQ11ZggeZWHeBky2gpj6i7Ck6DuSiKNo8dE6Mq5nNPEQq9iRxjVxSYhAB3bak8PbLCNiNG9J4B1D",
  "key16": "3ctw4D18F1Ym6fQ5yRZq9M4TX9yPUtFFi8GAUKwmgZ6vcFr4Hc9KHHbRtyWnoMd4PQ6GMAMtQD6zA5nPAJYm5wFg",
  "key17": "5rC4Pr5oBsbDsNNyihm6oSpkjvZHN3X8sK782CAAczz459JHGddY3J7yshgTME2hwBTKEwAVykbiinFFwU1Gfw3o",
  "key18": "59pN3ExCTp7vyzRWUd9BGEiVZcKTWwxMbM5jJRAkGHwPLNp1uBChvgHUfwoykKtY5rxCDXHQQWckDBmd4yJCjoXS",
  "key19": "3VAKVqAeonLdjZTfhS1pbJwF3JYf9okcPR7sQyi21iSdVRnA5Vs969tfxoe8d2pkspTfuc24pX4kf3Hs1cCKykMq",
  "key20": "2SDhiGCwHsM9FMAkQQw5nk89r7cZyxVBF9BNbhMFqXhH4K6BDVE1H4UF4TMrRwbCpLLeeDY7urLKURwQoi5CD6WJ",
  "key21": "2DPgtBXZfEcTqip4gF55Scchs4B5pXnrsDAeNTm91fUK25mtoBnw5WtFTfNsonm7U2RU3y6eYjBSFsxbcfY59rnf",
  "key22": "432PeqDQdrjQRhW3zQJCa6i9FHsSAK5pWU77FFakQWBEkUmrRQbpUydgyJED71Go1LVsh1pePDUQPx8UDoiAGWF5",
  "key23": "5yRuMbbFEygJwMNbyGRANWBvctMaGBfQdY82hFoDyCqMW8Zv85H26QjznXMFT98XsR91kd93n48EECxzrc5T2rjY",
  "key24": "27HmVpoWdjPccEzjwfLasteQdtKJmTPqofn6XrcVWpEe4X2jrFkDH685DHqYytTujZKsHWtmQZkHgdxUjC3gGzZ9",
  "key25": "4468tM5qqbxtWGe4r2t1QiQW4BFBHUjGTDsqUgtABDbdTW9nzoWNdudBTp6Ht9ZXkWATQcnnX48RAhocbgt62amU",
  "key26": "4V7hmqEgJrffajnytLwkESwyemYAMNHAXmNSaYLxdz5WLe8uTavrwUxsg4dUjyofxHkAzyXFbeugeWFFrGeyA86v",
  "key27": "4voyzm2cFcYgDyUkizZz7Gs5xCoCdq2eLT7cWJ29ipYYuy65iWqARSBF1aaPJheobgjgoxP9rKsUYEVhVVvFuGhk",
  "key28": "WNaC53guSvVQ7JHUxyfVbtqRrf5EPfbsCsjBctyEHpLioqRTeh5o5jieZAK5Lzs9sNAEUJ7CrYK4rq4bYXJWETe",
  "key29": "5Q2pJ2yk2bEhfWJGk3iYeNHbv229PNUKyjKF41SEmx25UZFVzbxy8af4Z2dtATyRDV1hezsaNwbxCPTykseLHXiT",
  "key30": "5kFKKZX575vPqWZMnF3QXs8f86d3AaG5pBF51FbbMqHeZudbtAWprVz8KHoFVjMBGijXu45RbnGFjSn8QFCnGsd2",
  "key31": "4jtXkyW7ZQhqZ3D3aK7SRRZ5m8DDNMTHrQguRfTYZkDxuQSj1X1mUPPfrmKsRcYZeg5DweQ9Ei1nL6nCotBD1761",
  "key32": "2py36HQzMRUD1j9MN1HsygA6pzHdMrkedLUYdnbxavRNweGGDgerrRXT75Rtjtqxq8GR67RRMF4VpWC8QRB19EnF",
  "key33": "5A5wHzXv6bppNG2hbnfjSPKoESMBBGE61j6DpDQc9VAvFDRVHokT16qMTiFfusJfRuPjP6jy4pkL3EprNfQz6STA",
  "key34": "3JPWA4bXgGqw8eXUugGBPznSTk7Rixdsry4zAbFjoM9tDpQUTrcNBtmQzemaLbjwZZC6rGUvy6LvKke6sycvC4np",
  "key35": "2NqcPJ2DcSFtZp9AZwvCyukDWpMLfmE96J9sYj842URyAkEqS3AuYmH4uP5kQUUieXZvYxGpPi3c339eevfFij1x",
  "key36": "4EVjMJEni75htprXVo9dsLjvhj82vnJENLweBwJarkh694WsXF3jE75c9nn61ofWRyEh9joTKdUEb5NHtCxNxn7C",
  "key37": "54H5oswJoFx5itBk5aqw27Qw4XaqouAUxDwtJSHPBPLWk62KJqQMgDwRRE1h91YuFjmvtGZAB3Kx2pC7Sq8uBvaE",
  "key38": "u8AAyDY882V2aJjxchErn1auu4b5ozLisHrvsnW1x4S2ogtfYBKNXncwbiJwt1TqFgE3Rev6knYh4armPa7Z8e2",
  "key39": "31KtR8HcHVa3ffaAZvxTY2xS1C1fjwtUoV6Vrr5o5yhE3C1ZXhigJC3hzYrJQzURqUq1agWCMSEPAQFx6nwYxLt7",
  "key40": "28ZEs82BUqiWD2WMTViSTWnfuTMqxrsKin3Q3ExmaqXLCegWMgYMhqTF1YeLPxK2t9Uft7H6T6WZrY3ZSNPCfUee",
  "key41": "4J1cAqMQZvJMD2YekSiQcKT5kzx1WVUaXtA2Y9nmwueLzQTe4H7w22Z4oAvHtnm6xwyPniBuYhXeWgTRJJfvkt3o",
  "key42": "5CkRCKCHQMpL2ASCBwGyGDRbVGUKAX561HWLYDZM8hPemt89rtoDgZSyoLE7Udeof38YAGXK6d2zHCbTFJVHUCR",
  "key43": "2knsUszNRgbPCNjjGuBV3v2wRGY6N6LuJ2F7ayRYjd28Jfc6ncEZUmxnjwdLx3b1m9htLGYzZohP3xMubDnDbfLE",
  "key44": "62Bfob6s6DiVynh36qFKcTDSLA62MzhFiYTxeAPY7S8JW8WS6wSHw28CZYtW1BiPKe5QZvF1dvNVf2FJSacgi31T",
  "key45": "3jG4dRexNH3wcaMmMKh1gK8hwmuS7tAAyWT2PyBxqDvsEmUJqDQJQazE5wKx7w72FhL3CBwfK7ecsYxLv3S2Br3W",
  "key46": "V5QvGn9eifCTE1QRm77g5LKeiaYyYNmH3fWYGnwgqLkygwmzPkJrDdPufZCMtBqNfCf78XKFcNsGTk8iuajKnp9"
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
