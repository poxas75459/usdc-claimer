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
    "2Dk8UYYqGV2zQjDhewzRZ9BkLdNfnuyJsifNAUUr9re5t437hqL7CS9cSUXZxWKMSqMTwx7GYnDJMYhDNXGCKx2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vJJWsp1Q4eLEaXSjjccLz7DyNPcP6MVCR2ooD3wg1g7ReZnFSLBK2PFEzLW8uBundarQTrMopLxT3aNtRXfhThf",
  "key1": "2h1sgoELthuwPcr2ySheHm25qyhvcA8ohq1k9DLjv2rZQhbMYGAigQd7x3EoNrjV84jwyokuwbr1WGXthAgR1fC1",
  "key2": "3Y5bWmUeAM84c76wUbM8nfSmLFGtZBk7nZxJEb5fAGbyXKBEk9fjjqrtSR81p8gkmcUgAHxd8fAgmnxQ8LY1AoGm",
  "key3": "3pcDeTaVR78u5hZzUkuqv6Xj7RyQQenHBrRfyX6B5wpZzfDiX93rcz6vztt4qUxbLNybFUjU3X7NQAHGWbjvCPpE",
  "key4": "wQRnvgGq4sWqRAcc5ZnuESnDWE9HUJQBqY5LTAqcKqYD9AmpVmL4ofHEzhgSBSpxbPVM9yG2v3qzmjmUppk5QP2",
  "key5": "oj9xxf76NcxgfJPpx2jgzsgBJ2WxpKTtetRVKXZTcUSFd2H5iRMYHYUqzHRw5WqPY9MdHG5gsrKHn8GNV2zmWGi",
  "key6": "LNyK79d6hogTQZFi5oUqi9BNFx2uYTMdc2tKefGNmksSrG3GexMd6Ux9eLRqTcEAJPrH8AwX2RBVwhmHoLNDfoe",
  "key7": "5nendm8wSRpej4K3uB7gyraMDpHxbxY2rW5umYZJHbge2GpDragonVBna8UD2iWEzcQTaSqKP7YhbN4t8FShaLnB",
  "key8": "45VTv4sz4cwAo9sJzCRC2wP4g5WXWRgr3KbuPXxoQWXyGuQ4EkoMLiMHMupBpNE4HjaaS9NfdcmcxtsxbNwB6ieA",
  "key9": "26VXoVzd4t9GwJ9pX94rUVfHoEVx4Ser7MKyj5YUHDcAJq41BCfHbQaCxNpPSmaVj12AS7nJsj3AJQFNNT97piCq",
  "key10": "5mBe5GQXkTq1pfLTmMg2By2KfHauNGTsVztPQJftUqZhUXLnM8DFX65uGRYwmmt84k9gDaWtREZqVczadzAqW9PS",
  "key11": "4LCem3HswZnyQgvePbfPQESibwVaJVKf45ToXfLb6rVWU67gQb63QRWDLkcMnLCNZwGQxmmZwZMtrXidzG3pJRTh",
  "key12": "2kQNk49Z4m7pfYm3Jayic5CY7GLtZR5o5hMu2f3TPfNCgJVWH24H3k8koqc97ZTGKD3MmqSL8M8YPGxFnp6SVqtW",
  "key13": "bBmR573NUhfqR4Gcmpe5twt6jQ4sBEFWTTbd3nc4t2v1dBSgscDErGqoLeSTuGQACa8w5AAoTPJphw4ksVKDRnq",
  "key14": "2o8VAwW5F55CipntVprNztnztEX3TohoRFjBB6fSqASn2eVKipo4XjwpzbeCs1GyuNWyF5LRWpzy1qaAidVkuy86",
  "key15": "4c5Lg7P8xTQByW6sr6VgyrUFBGHYoH2EkGHZJUiriF6F5snoXC4GP9kC7muwQnqTnQxw4mTFELwWyR5RJCPNV2jL",
  "key16": "3XqQsku2Ze3ckywFwoMiU3F17ZNY1AuazamFbQdn5NZfL2BuVYPUBCNDSBVrUJwM6eeQAKTosLZEAYudTpYpTcgj",
  "key17": "5jaT6DfmzvD9gKpWuGABB3C3yFy2wnje5NeHmVrpFM552kZDvfzViehvQnwmSBsBWgADvWBrYnhjkhab2Atfd5sr",
  "key18": "UfgE4fY9Hs1oEDDZyTF5TTnmnKwt69jKixBxzndq79d3WpsLY2yZRSX9mAgNQCjDnDpRWDHwgJyVLWr98NVQpne",
  "key19": "5EyrJTXD4mZFnbBWoTba9ryQ1vcscoYC36hFn1AZRZDfE17cicDE7R17ZMfkL4ELg1uCJgcCMtCgS52jZJUZfnbQ",
  "key20": "2umaqpPUNutaKAmdynrYCBUpmQNnaTP5vQvge1HVBVrGXpjTBX4bpLGntjwRSwMpWHR3LeLrV1gNhfRk9zJoPSVn",
  "key21": "33UnkgpBYg5rNxKJ8hjZUr4iJbBvjJzVvy7kKW52F232HaocaENMZQwee2rJeEkPpcHLxrdZaNsWT1mgvDDebGuV",
  "key22": "3T7GX1ntDX7athQw651xbrbABrWTbUe3e8U7JVV1Mf6hQVZPvYQPeB1J75WnaucfvXLJmycyimut7KEyRpKDo6RJ",
  "key23": "42Bqvu5Z7DP28zbnHouWPYHSNtLrBnEmfg2z9N6kT2r8ieKzsmaReXC8kxwraicDBeBR9Q89uJg41KegmVXHTMCE",
  "key24": "3uNbAnfkf83FUedaR2HV9vkUDtjjXTDhAQssxq4vCjZhZWejg9ow4veTioBAmN43n1vEw68C8nnDUKf5Kq1iMsAv",
  "key25": "4RUCBKLonpxBi5BCpejM91w33EWD2NEzkmwX4DCsqiKnUa1HsAv5SYsHjTdMNxKVoKfUFXrfvbEp1xfVgb4pSFT6",
  "key26": "3Z9rxRpwYHzDDYWMUZTbiFHJCoX55VqSDSQoszSUASxGazGShGhNKWEewuAo5kMenH3ffzKCCZn6eXv6nqvki5ZJ",
  "key27": "KFw4DsPbUe8cBrb9WMxZe8xrrUnshskivCTpVR98xWrbU6gbwz9ztdap3EbmhX1fcYYbnauUU3PFhgLeoUH8BRt",
  "key28": "2iT5QnEEk7CccSxRhuAQAWw5pjz7QarUEcGJNzqf9ubinjGJ3b6pbJ88s8Ngn5Jwmcx5AGuPUAiKzbkehY3Thwd3",
  "key29": "5RxhHpGLejUFKxVgbuF8CTLVGyCu8MB9SHnPZZVfV6PwSkGYGMRpPaF4fhGKsdHXJidvDyxwKqrZrb5YMTVobMvi",
  "key30": "tr1PNDysAHaGvyq6nxEYq8u7zNZ8ttRdMH2nVmpNW85kx1e66krxDdEYGkbSx4aBPWQD8FTdBb78Q3TPCX1rqwm",
  "key31": "5NbizxKW2ndmx9m2GCV3erGajQ9rp9tiGKtsqewSCYGAzjL9CKkfcVgt4exTpTkcs9idC264eesVEUnYyjjxwvdS",
  "key32": "4SWsFmFJjqg9swf9GNT6c3it1ogrGB58VFEFKcLviuBbnhPW1iZstuumpYWRZYKgb5suoQBujG1ouBtBmXKSptjT",
  "key33": "5VCCHk6XoWyyTffQG95rS93oFQBjgJUkmLVJ7PsxfFgdMLYTuNAqVLMTarGhYiJdq1BU1acFKEtKDmyACUwmtZGP",
  "key34": "29jN9uDk65BpseC9thT35Y73Nw6xg2Ds8FUWR4go5pFu3wmhbgko7yVTLN3ExgZLNBSxwthvuZcu1172DAMu1esc",
  "key35": "5oA2RvoMoNfz5eizaG9QAKyDhhNuYuqdnuQrAueNZgb9xqhexU5MKm6zhVYoJEWT4hbNbjTVmzraA2t7vVesY5qT",
  "key36": "4d63c2EFehXzHy6auqSn9iNMD9fUp364XDTQ8Y1m7NrUahs73TPPw8P4z5zuACcXVXPChYT3A5ahZbBu3ph9GZmR",
  "key37": "65nkmQGMMsuhjwrda8brF3TSZY9mdwrAyRpXLjz4LQ6oKKP6NEsNjWS8VtTdExJU92Fjt7buhBSvXwe8HAaWyBt6",
  "key38": "3uNydgVMwku5xuVqkGNAFd6oVb6HmnJ5Qtyg1kzjtkoSZGT6bNsZZCuH223hkoeAh2QM3h5y1xb7kdufWm1GX72W",
  "key39": "geTCf8Wiag3Eu6w8Xw9WxajRMHogwyb9g55upuXWLdoH19qG213QUr5D263Vybx2NweD7rPVMC1T1QQ173sUoqT",
  "key40": "53FdT8u1Et4vvesmpXsCs3vDBLicLrozjhisJRczifVar366aXw9PTP318Jf32r6948nueU8fJju4N6VpFsRTatx",
  "key41": "aRYhojBgqFYtRER8XChB6HquNK33udt35rEf73ytvDYN49tAqxVfmR9X5mLiCuEqrBtLnXKg4YEdc8MNQ7kKW1g",
  "key42": "37jzM8emcSfyyveLpdLoQ2Wdk13eQKquC2beWBnNbb42Da41notv7u5od5tbqDDbZT2gBCQ4RaFkWJm4QT9hfHqr",
  "key43": "29nErqfg2xENTBsUEbQ9FCuWwhTnje4xJF8u6NJckdFaceyN8VQszKS4JVW3KwYffNc6G4C27YDwtUTCSN7EXZL1",
  "key44": "22fMoj5KNHaiWconpqzSG4Lf6yhsV1KBpNnStD5SG8LP9qUn5PojeNrKPkxjdxfwBLozf7PYhJPQSo8NYxF7WHUr",
  "key45": "izfUFSDoheBUtXDGbwxzHwFqwXSAmR4dd3HaFCHeZ9YkcbyWJTToET4U8aJJeNJGoV64tZwiww6E9qq2mpEdAXd",
  "key46": "mePYGxY3JuoyPLEYchkkhXndQqRJPYTnNFUDsPzt9rPmUswd9PMzHv3RvVHCWt5gYfzbbNi2vsg1NFqz7qq2uUr",
  "key47": "2FJsTe9Cbdp21AKuhXXxpHzrVxLggcM9TpWxwufJPA6PpQG3xK7RYizC6FsP1ByM4tfWPbGRPsnuytG3Ljfv7Nqr",
  "key48": "5YxDCzGBU1nTmefUaJXhLbgo5kEoGSSyazXaXpsZs4ebsDaBMCXJT8vqFsonHHcRVp9Cu2J5J9989L6tyMLA91da",
  "key49": "vJAGhBrSMmYcC1gMA4ugk66j8jCC8AKNJRho8RgmEfYDqSra3PV3gXHCod39vdPWDFVdGTw2DV3MAYiCMCrC3B9"
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
