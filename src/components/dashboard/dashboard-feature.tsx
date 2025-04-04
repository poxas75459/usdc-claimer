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
    "2fno6wqjBoVia9NmmaeqZFZevkighewY6YPsq2fRzkXYqkthV6LSumkDMyMtR3PtuGuKYX4k6fuM77fFxBn2ddeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o659sQnraqcHtRJZRLGaQ5ekhDdCwU1EcLoHny3vQqQP5sEKJ2BvegXZPuCGKocWN8skrV8gXMJSVrvKyvi9Zc1",
  "key1": "D2NtjjYyYa5CtqgyUufjTgoZM3DLnMD9BhunwbX8m9DDicaJEbJPtn81BXqaV1JDrvTxq4pR6ohdBvaaAq2YCdC",
  "key2": "27JW83YN7BSxdDuRqkJ2bJxCe2iwH1w1Mhq67Weu7TiWPDfTFNcYMoW51hSZFeHPzKEAZbKu4u54iSkZGZjvB5qr",
  "key3": "MYGfYKA91WWURfE7K3NcAV7fHYadsjcs4N5awP352xNMDkcKT1uKs11ebX57CjKZ4mVR8dCEN1tKtPd6wjQuEBc",
  "key4": "5yFohsAqZd3KYNmySP6evENpW4YV1dxAesovr2fCiwLzFfP62yudpswAXo8b1ZGNBdAMyUEPSv4WQHHuoUQL5Lbi",
  "key5": "3LrTmNLFjS5P8494jPShkHqMhJ8WTJ7pi3EXwycy7oWFLfEaGXYeoGjTUVqVGZtPXc6fuLTErthqVtCRaWx8znS1",
  "key6": "4WKHYJYTDyJXDSKSsj2nfrZSH8RK6R1gxgniZdzC7tucSLiwXFafPqh3N4Vskd1x1yzuWRz7f8TnyL9m1aA9X4Ct",
  "key7": "2zBzW82SqYovvMZSXaKFmQw2JemeTSKHKtLQ4QJc38x7Fy2mMScV3VGbQpDZFb743nmNwd8u82jFESkZ3bgqBcoR",
  "key8": "3jK9esV1TXtUjwSjwbSkEz2P67cckV3gSrrhVS9bUrNwKiBvt6783ZixqmSvqUxAzP4NQsvpiQxkkH97jYNixntk",
  "key9": "5PiiESWTWVuTH3dYT1GPCzV9SupyWUMGiVBTckmm3vA36TmySpbKcv9xv1nifZJ9fAdB5GkzodY2taoxLZsNbDnf",
  "key10": "37anvJW1q6pp8NQXskxQMUw6CQnBBC555a2dwbhCe1toJryH848cdPPjB2V13tRbNmFU2QEBsFX1AajXFFriwrd9",
  "key11": "5scWZqLTjdRyhS3WXJbhNbcF273v3JewrRZRnxFdvMSstdKYWRfYUj4T94DEsJEJKokKDtgWB1iLoUgyTFJAEFqL",
  "key12": "5QwjUHhi9L5K25EE8T7qo5tAJyQ2otsYhDYSAZBFP8BLEUwcHTG6AYtiSQzYbWeAExGc9FE8VdQhzV6Jdx2b14TU",
  "key13": "3LnXVQrxKbL8ZLHMiDaW51C6mrzR4S69qXfdkagH9qqTfXvRrKzCB4J8bELkaBDKa4qNWiV1vybMcW4WM3b516Kk",
  "key14": "2GB2vRRia9xGxoozpSXcnBPZYEZbAfsaBZpLRh1bw6PZ5pxzU2SqNZDUN1FX1mGpHj5gHQTabGrFvBziTjAyeu9f",
  "key15": "j8SumtGxCaPTByMqAExqCH771RqZgfrTY6zAATUXMR2Y49NHMdKPLQ62zQMWQdpAN2erv4gD2kD2quDEPerJWpj",
  "key16": "7XQsvFf8bwUyWeD56k2nVHtqrP7hzcbJj3ZhnYQtsDhYZorGFuRFmWg1DmjGUuTA5giAnzJ6EnkRZMuyoEgJwfE",
  "key17": "3cQ2tafReihoj9Bs8BDm9MefCZrdvH7L3MazghCN3wqmEktGcrBXEwgRptMh6JaUUY7Jte14pn1dXS1i6oXXbw4q",
  "key18": "yLGqNw1rcGEguHNfZzQ4RwXpyGCSq36zYvrD2JmEbiUvewH9222TmEUjB4iEmJgN8q8EFouZaABT9XAiZvznzGd",
  "key19": "WzbizttCo9Z7fewCeqpmZUCZPzYAGv2CK4YrYS3EiWuTkUATbSXkqp2v4umUWKjCUeBSGcBShFy7wxuAVFqwKPM",
  "key20": "mDv6haekoi925TUyXhiCBkjSysFa5LJpnsRdeyihf79Udzm3FgRUBJX6b2mLD7bTyYS4njqh3ZN6x3bJQKhfxis",
  "key21": "422DdskCxWH7zwgxJRT4txgVJ7etQACgihnkXRKTPp8H8kVT3FQrBgTMk5cF89mxDCDGvFruV3oQTMHGHsXFJ66t",
  "key22": "5WGNsMXcJPXW18Kx9pWZCVRwnNZy3f8muPKoig7mYJpcQcrcKMLYQRvGFMfxTWFWVXFbz9eVMnqYSRiHXaHNg33T",
  "key23": "3Lc1jgbZhx47Yso2VuDmBo8Yrz7o5ibXdV3P2rFTmenuEZfr6rdNWPYQdBTB3jBSNw3e77gcCS5kAK2sUyFNu1qk",
  "key24": "4vZcstdEvp1QwPbJyL54KVnDVH2DfXNVuzFVH7NwE9GYZV8kyVVg2FpjNyBX7KhebXwTZQfP7V8PkgP62KLZGo9o",
  "key25": "PedfrEzkTtQricgeWCmdQnNBRq7WXeDLAQSsrcfzrqU7toSES6CecGzinACBtfnFfKpkr43emPDEz7HwRny9YZV",
  "key26": "2cXhZoinMD8SNcPXexDViwEdUomCkPk5F39UrLQhwGkft6nZimr9zknWWTWEeiuo6b6hWthshdKSU99xLGqF4rBU",
  "key27": "2bECGhywQnEuzBhMqnvrb7qmndc7n1bFc8DGTe4JfuVPrvmqQszisT5HykqQ9cKK11LqCqrgy6cUZXVLVGccUXax",
  "key28": "S5mnq2iWcKqUTJUWuuAUi3kPbuEeFnUuWchQ27wwPG7BU4pNeQ9VytG4FFd5jPApnPx7S7nAtaXgc2JiEDRyYkq",
  "key29": "3AWUZ35o12sRrF89KFAMaGnvfyKVDoQcoQFK2nKBXnQw32QEvQUeAiBVxBzYMWcjneNzGZDkc8HuBAyaqvK4WJMw",
  "key30": "4fKXVeyWYs82YG9xrVAeBkiPhjZ877db1Ec4tt9V13yvgHV2PshTA6SEmcBAG6aapRfwnPMcJnLsbsQ7icnFzar8",
  "key31": "6CDNLZ732UjtusXVSQDa8vnV48MR2uSdYSq7wCNqE78Q18pgB8gpc7ettr93sFrodiuaQ6w24hfoacasFxhkABE",
  "key32": "y8KjWuxDNDxoJpV13gm1tSFQeHrYM2JkgqsR5CevUA3Th2Mg2TrzXLJuSWtJqi6NAyfHmefd6uJLPy39AGPE6A9"
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
