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
    "4M7hJKnWKhyD35p2FeYpT1uQwgHmSJcz9iiVPqzawxASR8EyCgD1EPQea66Kng8jq2trnRJzbjD3LbvaFyXfi8We"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jKWHEFk2MVGn6q9biHr6WA8ozk9KviBa1vfSnxfN4t5jneaU7uaeeNbmTtVLZei5AhSu3XG7Yo9p9Et8PZkW8VV",
  "key1": "3orfy6gYWx1PVHH5GwyStrXPFqM6pbuXZu9kY6ntYg9ede434TioyvkmifZE68azo8WUjp4h8igQwGexqhMjYKWd",
  "key2": "4LHFuQTnxoiGboCYtbSTpinV3eAZ4Qq4WDztVX9wfviUE389SLZbgnTmofDWYngVyYaF9oZA8yW5xqHDs8kPUYCb",
  "key3": "3efnpjmRmRPQdoCW4HXTbEgy1GmfZfrQZ11UG87zGFsZiSF6Hjev97bueRAwqCCg45sqTTAK4dT6DpbUc4f4xT69",
  "key4": "5nr9SteVarUTqkpmv97x2cB2FnHBTesysTGyP5VD3rH3JPFizCMTWkQQ2wm5WFatxUPNExRDd6AoLLoyzNH7hKRi",
  "key5": "5kxREcjgDuZcSVuX7XHq8JR5Vn82TTJvFaHpLPpMnZm9jH7Mm5S8zAviQ7678JofkATy19K7gUQsD29y4gKQS9F3",
  "key6": "53qB6k7hPGton6CknZY97odvatXT3WHruQCrxZci9GKFtvWHzQHS5LGrUDKDb3QTHsA9QE7MJMQoa4KM7hGxk6Pf",
  "key7": "3txX4fVCWyUGXEB3jvjSFqK9v7sQUxq1d9Ryxa1UNiQEoj18oeXbUNaFUA8VA49p55iSnNfNRBPVchK9tGVq1C8d",
  "key8": "5x8r9ciUiDEW9eBjDNvLoLKqRj9qpdWdz3cPRzqeZNeUxBA9TQGN9PD7jVsQ7TC8UAEkC7RRxCp52juZ6yTD4hkN",
  "key9": "3r9jGHH6SYSywz8UQUzvwdRf4bz82qoHp1vzMNWTxdpgWpiw7YyrijLPns5ehp4SrxDWeJ73GrqN2xpt6gUZ7AG3",
  "key10": "5H6ya8k68Anu6FZweUeKzs77LGzi33Jfi4VsZP1SqBT2GCtnpGVBU8jZkuogoJiFjJbZ7wmAh2D8GusvEuM1J7iL",
  "key11": "2GaX7xcTJKyKr7EUVd4X1LVuG4eH8hryF6sfN7Mwd7rzjuiHEGDNmjWVGNKeCjNq7N8yHnpEQ5FhQzMixdPx8WA8",
  "key12": "3GZmWr3y3XLuzE6r9kYxAYajJPXRi8kbZGfzQcc2Q12qmAv9usU7VGiQVxYN3vciTfQyYrXMNc3QVc2hqq3dkLjz",
  "key13": "4VscLdwMgAKqjR2ZbWWzZoJLyP4rxaBBeu16KeyFJzxaUiuGqZT9dUGAqChee2ya7gxPJyedY5FQvdtVckbTAYBa",
  "key14": "3jjJrV9o73LoYozU8PvgEqtHUpRFLpb71jrZ7qfSSWWVQXEkBzkiQNsunqaCdcWzkaahaSGh6EkndcL6PTDWvyEs",
  "key15": "4VHa59xNAM1hspheN5SdrswRzCCeVcXwQtPwcjCUW5aw21TiY142VegqR9fLkhNMCUiTjfBLZ5pMahgFskby5gZw",
  "key16": "3dNhfqXtL3CarCP2HPCvePadDi5TdLZif9kWpttPEVjLfBKitQ6zRtGQe2GSgEpfGwmZYvopmbLwWS8F635s36Re",
  "key17": "3nZJUiebZ5yn6J5M1aVUUqeWgsyfPU5hju9G2U6T4JZRLQWaVw8TtWpmoWZEw2K2mbMdqbjH3zK1AftVGi6fKoa6",
  "key18": "2zr6P9tUZVPHL6Yu4yNt6dN8LevA6hmwhfxvxg3Jnemo9PYrStw9mYdHYT5Ht59G7xuGE5MucQmVnEBMzw9MJaJg",
  "key19": "3BVhNfZwdfS76zHxve1rsLSrnNGxDR6LXgxDToBG95fshRZ4fNPpYAH12bgR9UzRDU8HB183yp1LhLcdEAqwCPsP",
  "key20": "44Jsh6ZvNiYkKSpW4PidXMhfDetB33HBCM8u9j49J1AUezduEFFH8hpZpu8KPccBh6GHSPW7bZMLjhoj9so3GtWY",
  "key21": "3Rmh3WwxgGSpMDMC5EU4XeHxprmoB1B49dkzmy1d32N4a5rBEZa4jKXesvqPGiL7Pv29tQ9DUqmveabA9tvtxjy5",
  "key22": "3ML6SqYtHFj1cnLHhmMgcX6fpmAqEqS89nXoUTUNU4ukdY4iqBdPS3kxQautxw4p1NacRiiL4xiZdx1vvA7cqotT",
  "key23": "5Le2ieAfPfARvfNP5GZYrcs8iXBvxaqa39fg1gHcMeycaqKS782tZ6vK96VKqtqwJ6VVtt9XH5c59tyB2jjQ173H",
  "key24": "33EsUbhodTyPLdAQoLN2Wc5ib7BMg3kuNbBHzyguT2FMZHXhFzYgzC1Epgjk47juuBVGEaMmMigWQSEkqyT8nVH3",
  "key25": "5LfvWAwqPxiehi8f9Atqj67B6crEMAmjL1pzPoRtzqzquFKxrXtu3yVm5rxu55ZXuJTNQtNkEzj8szoL3Et7TnQN",
  "key26": "2FZ4MFiVvKrgvqSF22emYsp8qtrW1SncP1VeZdwKWdQ8UH2UWLTUfNe9SvA8YqwubzXZDegvhLWp1Q9tRtJmAK9Z",
  "key27": "2C5C9xyZfpScQkffZbARKL6QqeCrPE17kUaCvzpGwEWcVeUzkZqxYSWCetpx2RAwDgDdbBBEePQXoVpj4TsVX99W",
  "key28": "41VMZnWHcQXq1WYStyipFDbHzyVQMkFz5J5yzdiQd9ER1XJ9S3CrYZtV4d6beEH2xjVUNCwCVBiAzpqHvu8qg8M",
  "key29": "5kFLPnBk937pXJdQNvKLQW7JtiNQ3fAoLogS57gaPJt1nrF8QePGsuLySKGCdcXwe86v2gt3pBZyuU942xMsxkyD",
  "key30": "3Pph5s1yG7r4nC9dQMPycREmuMdeiLVJLomRKeyoz3HD51JbwP6CVYXLFPPcjJSfCP7YwXJ8P5LXD5EaTx17vg1A",
  "key31": "3sF3YAm7PXcv7AgW6Em2cSRyUWnAUo6i9rZZSfB6467hC3nLGmr76nrsoivw3hpMAhodMMsTjYdizcymn8VQZqX3",
  "key32": "2fGjNbQ3ZQeJBndx7tL43FQzR5eH2a6MDSfqEfgts7vbaidhtDiw1fQ7B7UkuYsAwEqxo9cAogGP6gGKxvgUytFw",
  "key33": "2rP7iPaR6CVHSwJQRLxFTBYMFPvYNPijW3wu2eHMVix2NEtHqdGwqco7WhqemCgzG9DzD8TA34smYaCJW6CchMyM",
  "key34": "2Uv5kp6uQ5fVjWz324FPTSvSerjy2grUr3WqRjpvdGvtrRSdpUszEy771PdTFjrMBYDwYjXs5fctxRkKcjFE6SjN",
  "key35": "XH8qMocfhFQN7cTNZ3iQRcTPMM4P9xPRVZAtnQn9ztSn5shPHkq4sP7Jjy1pLJTWFyrrrkYPDKWqCZG9drEHJrk",
  "key36": "5FGD3ZYg6t8ipdiWnU85JJmc6tNvNCLJni3frYMAPNQqMBXa8EkWZjL71WWP1ASAPuqJrorrrhTaRe12pE3b497M",
  "key37": "4Km5zYNL4yqaAPWbfaHV4FNKtcaCDS1QJ4mbbfmFvJ9JitG8t1sFtxtX4iY16i11Ja9NpRpWBUnUrRF98RPvB5fu",
  "key38": "4JuPPtbRp9KZcjyaMS8QZJ8d7RVtWJR61FMxEW2rkqYWtRjpVbxG7GNBF7RKYwq13ScdZWhs5VzrXRNkNG9ayQiA",
  "key39": "3U6SZikTne2inZDE8G75Pweqonjdsi9Wu3Ah6S6Dk1JjeDt17nuyokRA9iEGZ7gefeVvX5zZiuntQTmCboR7xR4o",
  "key40": "6DjEu8tzfgtRAUmcExFibCPJNUoSrcJPomYxYPaKNG6G7wZ7EUvM9L19Hd2aC6fTyHYo6L5VWuSMbuCigrKzoJD",
  "key41": "5bRZXohNef1CLgkRErrfgkg15SypiZsKdJHHUSYDzhFGcGSwkjFM87E6Y67a1itkdiBmU8p5dN6LRUsxFcLBZetA",
  "key42": "4dhoZjKnrSYXjw64gaUpdsyzSJYnAR58hsRESvKadwWb326PtHRyuHWxmHwvdjEA1ZodUQfk5JXfFiarU7rm4p8y",
  "key43": "GHXwZHrSJMVKoFafQDmhei8EPehXvJdmrq4wAYdjch1eFGor9hd9Mj53sDrWh9PuD5MWMBMkfEfLokiq8hEXWeN",
  "key44": "4XGnPaFhJm5ok48BhUUXTwQC8it2gyKm2vb8jo1RjQQXz6o5p6V7eai1ghzGcYYQ8VE5Ummu2WGHQKB3EqVGgpe6",
  "key45": "33dokkvyTNFGh36oQ6oaTCj2gRCCvhU2AmfRgTb5NqoABwvvoYfEb8o72B3MPyYfis47WM8Ruxxquohwt9dBzChD",
  "key46": "2imQAFWqdVLvBpLcVDB3dF5Mte6UwmaExULWwEiDYPQr5C6WhJL5SCAf5y9bdo64FD6CLYFpPFhgdrxwGw9xgKk1",
  "key47": "2DZo1gVk5WV4hLVr817bsBK2oPTRqarjguP9ZbwRE8QHe7M5fm2vP5rWGsx1ANJz2rrJHAEmLf9LwCRdBLPtuJWy",
  "key48": "5tnDRY2CfySMCLsG5eFdzEYU6Ygg56uWnrSUED49qWz7D4Dh5dSTwx23xUDVMnucDG978yvhF8iFqnoYuMXbXjFg"
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
