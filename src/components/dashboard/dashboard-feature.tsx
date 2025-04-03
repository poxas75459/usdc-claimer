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
    "4HJz5jVcSYAYYpMtydS4BdS1EWD4VXAYn3Ve9D1gu49rwz3k3h31tTGsATdbbCAhZT2TRj38z9DbDHW48ykmVpQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56FvZk1Vsvn3t27ifW9QH68nu9c2N82rP5euptwMVH2oQBLEAiqsKTdM3SdLwMLpsTW1NBUzsy2T1AzL6ckkhLGV",
  "key1": "5DKj1SXg7BEsw1PhJN7NQMb7dKUAHsvUYf1kyhtyjbzdxofdgkUEQiBeA2ZLKo2pHDaQfktdRD2n9hDBqt2WWdGZ",
  "key2": "3vPDuYipunm8wVhDFrcY8jfrsmvesvyx4rDWGZB6Vc6dQRZWMnD9ZppytXBprfSYMGwUKMQC4ah7PXwo4229NR4F",
  "key3": "45PoPgMszcRVdmSzSGY6zbXBiDcKZdtVeg6DViQ4YYD36sog67ny8eUrBNzDGsTuVvHka8Stc2h9b2y1U35HSvg4",
  "key4": "3vd4HG64xM1iUSKwf1BVYxoAHgUnRFfBZKFyiYa9ZfxZ9CzdPBQ385NVEjRoJSMUsidKj9u9XAgWzVcWT5fu5cKX",
  "key5": "XLjpicp5LM8iAqZY5Pb5yQngSjuACZZxKE8h3zZvkZ1MBVaQZagtDuMF78QiaUXDxgtN8NamqvqCRQiq8bEiGWo",
  "key6": "2r2jxr6W9z4f3k9XyYNWs8hJ7ameGrXgq52SztjZMm4qbe8fPvMQwdnGzKmcBGNEb8si6Kac4hNaiG8NcCQp1Sgd",
  "key7": "2vUNo7eMqXjUjJeGTmS2ejw34JwDZfYhodQfiBj1NRbTziaoPHQgZhjQPRoeqEVqrmbT5fZVb1JAzD2YUdvbxEnX",
  "key8": "29rgpWPZqLf1MZuHR9VjSqGJ9P9etw6HEEMMEgRbme6maCPb91q6T7qLDXi49u5NpJAnEAYgEvhViRWxynwt94gs",
  "key9": "4pmwQWizdWrnH7f3mYEeFsc5KZhh1amysSabwh4TEJBjD7QEAquTtEYDmYryZmHtThXmbivcJkm7Bu9o4N9XC9zZ",
  "key10": "28iNU1ZKWvooZpX8EXvEPQGC8p2FRNHbFrp3hZttv9tiWLmgXAfT5VYzqWw3DjrHfH1VY8wGLFLWxJnfaUS7x7ka",
  "key11": "sdb5bdFiHmMvfBQP4aTBeE82uz9j516GCjMFq9NV8wpSdHRDNSgzREZ5474KNQ6DT24mja3StWq6i2bEa9o1yBk",
  "key12": "vK8WUR9TFw6Lb7mHY8y9r4r5At46GLRReN256giqqFmtntWt6aevYXhryt8EccbvyhzWe5yZymuYjdLieQVdb1m",
  "key13": "gkkxYJnMYzMLiFdxDtsdb8zgDd1mKzDP9xm35MpyNVg6ZpvjgxKbX19PvBz31sHjV6vwfK4UqprKpqU11pXszVk",
  "key14": "5tZkRfKNxRZNA6jNxwKQUmyMNEqUBHEw9DRuCd5WQEtHqs8uxGYMKqY678LE7SCS1Hh95uR3vJTMB4Y5aVJzbQ9H",
  "key15": "28pe9pF5GAs5wbS23mqnB6AdD275gLK1yzTGJAAGDKVhVtYbm2xyujUiz4RCEZB61U7AHs8BJhE7ep9SVTjmT8MX",
  "key16": "3dbBGKTJWP9NXqDns1i3mqNVoPm4gANtYqgMZn8doPv2MBKcySEjPc4wCvenHMXn8k5PqLM7HGBYcSryXTxiX8Zj",
  "key17": "4ftD99wWuVoUDGfgPgbCZw7K1GUPprhW6W4Vw7gQJ8jExnsgSTNUFwdyAoDpKGGkeoC2TqpMkyE6eypGEVRQSwYU",
  "key18": "5V6V5KaHsN4ECS7SWjQ63PeTtE7NtmvLqSo4DEXeNbdB32MtXt29MSFS21zYLaNKUJTM87qi7zNrxjxY43itjisK",
  "key19": "5HNoRRRgEJWBmEZSgLS5ECVXZ8eo1D2eBHuUJay8sdxYgr8QmTPyd5Gba2oMpQhUCtn6EaXbhypTXvykQktDM5oS",
  "key20": "x15tdmQ4s9ry494Koij8d1UMZTDW88BMGpmh5woaMLnUN9hBCSsybvAXc8QEpgsvEh8FFEEnAbGuG9jn1FWNKSG",
  "key21": "32g1ETDYzMmbjptd5fj7QQcY2RbPJw5sgYwbt5xYd9jQwMbjoZAkv116kASWNZLv82kEwbA2kdqWdMVdKHsg2CwZ",
  "key22": "2sqZtFgCntN4Tk7Pm78gzN1B6qnENeAwXQfS7Zr5pqkB8nYH574qa4Fz3tHtwZVCZoSCDvZ6DANa7icgvzge7P3T",
  "key23": "5K2U77pZJTaREE5BMTZvS21AhspfqR4S2mc4TEksggvApefdvgeFpBueMkqiL1PYoZp82NjDiKxe7AyFWV1wTcGk",
  "key24": "2pjWyXCsfUJmujdzKgAQ6gTzgi7FGX8hMffHcTXf1tWvCyWoe2oqFhSR7pPmEEPfjNZw1wgdN8YHdwFpiXt1JyXo",
  "key25": "2XUY5F7SkNnDhnkcziDKbdNMRfQVQcjWnkHdMhprgjR18gx576kRzU4ewBr1XiAaQaTQLoq5BkCqp2828DgnH4BX",
  "key26": "5nsp48DuKXchGRSor3RZSVLUjFMxAUbqWT6jYLoATr4L5XJSh1p5MJFr5Yoksz2mdrEzcTFpdceX4oBLT88K4pMK",
  "key27": "3Pq6zYgn9kDA34VgKuwnYwCX6ZL5J9c28Nx2jjxpP46uooZtYpSeKJTC5Ti6SLDruFHaJ3uNgvoQuAbDA3FWBzLp",
  "key28": "4vmfVoZuxbcEDqVFB96YUt1Z4sUYY9HwksEsxN9zGwj8c9S5pDCVYHrnJZ1smXp1KTYEpvanchN6biLYjJvwa4Sp",
  "key29": "3LV9FDn8EcWoNkYpCjvrsFNnNo7TQh71w2hMboNfteG1ZTt43tFD8g6Upgi9NwJn4gKc86t7cvfrH2dF2tkdSvS6",
  "key30": "4vFcDkmVozhwchgKHvNWocfP54kQLYgjEa4ZoVPnVhP8JXg3rhFjY2wEsxpUWPJSWkqqohSD6DSA54oG5PK4ePPd",
  "key31": "3FPkbMBUmkF7CnL1PhBjuLAbcJ86c6yQVEaVEhZeDZ2JZV6c6rRmKs5s8WTDpcLteKzTQtqSLksPYtcXqsoc3NBR",
  "key32": "3tx6DyPccxg19q1RsBFopy5EWJKDDmzY7AU1mfhKr6eio5XDiw695j73XWqZHiM6edfwJ8i7Vo7GVLCtZkHw7aWx",
  "key33": "LBVdyUP12dAsTdbi89CUAy6FHDYM2Z85o2LRSDAKWMU5aMHCBHFVuLwfkcwjNQCCe9X4Yqtjv1ZNxe8Z4fMp9gN",
  "key34": "2d6etYfMcdBxPgBTuvm6zKVVkbRw6qZvwxLGjtG1YLoyxYMCwTytAenqqom8v2uz7RN1AXNtmeTAWGY8HcZeq6xJ",
  "key35": "BG1p4x4dMprYEGyboW6ZP2yw8M8GaGgBdJzuknSxQYsamox8gDEvy91XYE1uUxVSeFi2XQp3f572BFh1eez8CDB",
  "key36": "47sNBJbrTx6J3y4w5e5KmNYTpJ7QFAza5gdPdHzBMyV6sCib2tZbVBjj8iwMd1fHipHNsVrfgd4GanrmN9fjHndb",
  "key37": "61B49ZKsUh1y2WGcftpiBuVbtQpqtF5RhH71E5x6WgUboARH1dcfAvfCHay3brWDjZBLyfDjcY8WA1ip9BBKuwv3",
  "key38": "KR2LoM491VWJbMeTU275z6N9W8vV8qxZFzfqR6a4fzUktD4FogahXum4i6vory1A3XgESxKDQtZ76e3McEP5KjZ",
  "key39": "54tHfLYqZN59RfepyGb9GG6BqaRWUkp2rydi6mmUm7T7LxB2sYELsB8cvCSW855cv4XJgoVAxzdj79YVPxJbHeaG",
  "key40": "2K8UPQiL9J3GmiqhZMoGnYh8DyuJCNiNCQYVW41PqWKFuwBK7edNLq4fWkw1na5vSEnhiuc6MHrvUCUwf8VX6pfY",
  "key41": "49fYttEFfdqPY3QdfQkUGvsx5n5xdxdvYE5kc8B6qeRNaPhXd6jiaR893RZPRHZTF5jqVhToi5fZkmXgj1RuF9j3",
  "key42": "wGqHdHyd3UYrMeQ6p1DwF5MgcbfoG3Q8rB7nvhbjZA1J3v6F62rC4n6AtdZRCGC4RMuR2vJ8SekzqESFkcHURqw",
  "key43": "5CzAYhoXnEk5DQ6prrxJUg2m46dXPZqy8SPdQ7Rnkf4K6b8786McDNp9osEzE74L3qu7kMrwZkBXxkogT9FjDY8K",
  "key44": "22jrvu7c7XW5TeCLBMSZv13e8hJZ7Ms6bdHWWS4JfnAjs3EP1mY4TYqLSAzKirtLS17KakjRs74MbK1o1VG5koQY",
  "key45": "2dkuP2tVgyosjA8ZA9K9uCfbgDZfJn3VcHdSWPwZM6o7yVHscn8hxp58Y2bzDWR8j5tESxGL9GTL4BzXNWiDsZVC"
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
