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
    "2JbhFJ9521LGD5ZHQ4AGbb6LtnwAXS52M3WqNZydeGzDfxLZzz671a2QxrQkVBBS4GWvAcTSQtRJVVJgtmNQ4hF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "js2zLzoxw8oujrvVZDHfFM6s4XuSYFaHapuuDG24C5qYhPYybBe2Pxc2MVi1bfDHv1gaTY5Ani1ig1F1Km7sUGP",
  "key1": "4yT5ftp1ykPxTkHhqBA9Tjm82hBnLLoWc1UHNetpUHs63C1yZRKnV53GDbeHS5kouZvAwfSSn77vPW1Bpvwg9vFu",
  "key2": "5nLnEcyvrWN8WGAmwdokQXJpfgHjBTCe4bG1MQuM3U2ycDU96oJhj4WbXZfmFCqDEo1pBRmXxNge5efA3gZdh5sK",
  "key3": "5pc1QymMTmDHRaQUL5Y9o9uGRa9tf3WSPUp6LG46i9CNnVjEioU8pRgkUu6dpQE2TGbWs37WNu9Fi8pbbpVwE4jf",
  "key4": "HMERPCd34FfeBQeGKqY8qVLnEzog8m7cSp6mSNgjDaee68e7CZ2mB5K4jDpjNaAPRzFNUccY46BgCyWeFHbzTQf",
  "key5": "4SHwJcEKFeHTgu7gWjDTrSA8iisZZhdsAbmpUE7hVYPPcRf8c7p97tE9zFFeP6iP6akeevuvAXL5pWs3XkVN6zQz",
  "key6": "4Aw3dCJui8T4jj9BJavdr85hRuPxrbgYhR5cceUD7bHzkhrCfcmEZiXxVNMSTP5mYp8rnLuSaFAgjnwfrGFpULjL",
  "key7": "h3QTaqmTaMyqgvtUHyHseqYoQVr7qPd7az4JNftaSi7gC7M5uxEE4bkxEpmTTX38JgXoh241ABxLaNyUsVqLCsV",
  "key8": "2BvcxD4DUy4M3z9Dvc8yZ1kcop5om52oprF6z8v23Md86HoYZ8S9apyT3y8AVTRn3hjDTDmcGyJoYNbyesSnyceY",
  "key9": "5RLrVEqVk2keqVg3REkn6kQrQq6qLj4dimqJdkXvEpduzimaoRYC6AXP8Rba7hb5bNwUWDnGVTsV28E2418R8sfc",
  "key10": "3t7iwkSYkZkaL72CAa3vnE2QB3F9EvrvXq4ERfSzqsB8CcF7zEfLz5Hb16ZV7zzCZThWHFngrZCA2qCEU8b4E21U",
  "key11": "2wVxMZ45P7TtubsE3gESHaityjByctatJdKnZsnUVXHT5wy4FKCSr571FpiDyYA9uX5ZZUjWTfLj89VZkeHAMzkM",
  "key12": "2QDVDWjghLvNFj1XRYomN9wC7TgYnmVitWkZoZ6Z5uRsqZbvtuJanT5bqzxmPiGGorLx2oBjHroxuaZfDvvWq3cD",
  "key13": "3KobcdB2RL9MQBb7dd3nVKDJck68mjAXxFnkrY8tEVbRT2vgWWZ1tCLo7p1YZ9Ai4BVWpdNCsjgD65ko8Kzq5MPu",
  "key14": "5YATMDVegVbdTyzawrgTHsiiNYLwxMDTDMahijkJpm5kKrjzjy4igAMm9CVcnccj6vvzp9jr9M8qE5abMELMfbUP",
  "key15": "5VW7ouQHFFd2VSMs2AdTWXREMZr3csti7grNi6HExwA2LMUmPg62SLJLm6NMzT9gpQnoQsuqcqYzqYVuj19TmoCd",
  "key16": "4ormnqbVVhauzs5JZ7LnfXhrGwdbmPnQZMR7nCn1UzP9TXqe1VhnRi1njZHbrBxkCjE5c5v2fBEdoGV1Pc5EJjyY",
  "key17": "3xvJaRiEBKSjQiZN1nh3P9yXhxm9cdDBy5fNRFYAweh6qmdPjFLkvcSHHs4PUBD5zQnnY8KC4nLjUUPbXhuva6hX",
  "key18": "FMAGYazVuDVW2XChtKHzM1J7S4TwDWYbuSYwFWfiy5pSseFVNFyZ8zjjVcohKJorUFLmpqv5RW3jC5Yw5ci6PUK",
  "key19": "2im5buWEzsTbCYdLaw48SDhxXfXSNTvQUNP8GRc6GKxLMxgNaPa8eNVvKUapANfrpeYx85V4Eyuf5tmqjTeXTrYY",
  "key20": "3dUrwkSBKDMH49KkVxPVAvkJZjCwTDVRgWSTVfG9ucuuneiLAfEVthyA4CQZiFUpgB38319sDCYSPb5apkFqsjFe",
  "key21": "2RaFCEXH25KTi579kcZeehjG3A9XTsyaYt8BWnLZb1TEitMRoziY7iaG2pW6snT1cstvSxYb3NZyA79htRh8qr8y",
  "key22": "5fsFsomSCVw9uX8R9UnPpMJZFNuSRUryvtFFLSHcBWGRCATNpsYV9pVv6PngD3b6QUmofxf7tTcZPFkSnRoFDiLv",
  "key23": "iYF2JQpNJxpMrGkRAE2nnYhbecG8JjrECbBHHJYY4FZktgkmNHnFkjApM2pLZqV4mwGuoVmHNjwBUXUVKrhTi4v",
  "key24": "24BX7i5PEXjxrZPH5qNb81RxRs3pj8picM4U1NuMDF3pLdHKPKZitY3jbzYguQfpc6y3YdGFXkLdoBg5woobhRfY",
  "key25": "4i1RWVwQBbVkqKs1B7HcVy9x7FsRubn2EvyAwzSDUVckATHveFe6NMKwNc7sxKhEBhWTNSbMWFnrt9qCoFK2R7mH",
  "key26": "JCNHK5PwKbNasLfuTDAAiNXQAkHZcVYpi6mPdscNzhN1NPWPfUGSMsWnJfZkXnYX6sYUnUdnUkVjT9YFzPaug53",
  "key27": "4V28T8SUYu36VYMCSkcPhAdsoyLZ1S3fRB8nhHPHNk2bXCpFNT6rgQwfvC8MniLjB6z4jjcRJbzEquqR9bekzq2J",
  "key28": "5ghhTeEhT4NN3dJygHit5BAiogmykSUcKqJSBfzfLgshqL2JcsXmYWT737ifvfMjuwS2PgMDBzqf6uMCzPDkJTBk",
  "key29": "AJn7wiHv1FsrXrnW1SBLxJZEXVtepajPwunYkpK2F3Zs8Dh5qeNBbyJSCEqLziDvxGRWC7ce9ESFcfPaHkXRsy8",
  "key30": "LCeF2WuqZFaVtUdwPh2FF8BKBXSFuAzsUonzwkNogDCUawucLdBTxgHYe88PKwruiiH3LGJ5x3PuC3kRDCM96YG",
  "key31": "5mR7u74pEtomXUTxtvkmcaquYLC2BJ2NMZwkfJaqwSY2SykNJpu8As7nqyCJVMtd2W6WgpkfpWoytFi5pJdubtHQ",
  "key32": "28kiy71FC9uAGoM2ioZgPmxSJXHdgD2mTST7pq5QNrqyBn111bEm6eNFDa6GsbZBLVcxXuRQij2G9m7ggLNuXLAh",
  "key33": "4Mq2vifJpjAoDZpP9k8XmGKZyguV7qo2Jps65vXdiibc82AACrCK2deYji1b2Ahywm2DiHX5tBkUMAgD5zZ71c5C",
  "key34": "4Lh1xg6rp1ZSaBFs3BDUPHSZoe5tgPZpp5vi1qtmDTH85g1hsRUad2ESz5PZ9sGFBoBQ7i3cZHdbVdcryz9wuhSz",
  "key35": "2NMP4QKVUADYfrksRLLMHRJn4zSMBdvkYd66wavkA83hx2b3fSMGhPGzdoK65ysHMcXXewhTqQdmZekA53J7cJ3v",
  "key36": "39oG3GUkgyn2N9ih7tUPiqmBRpXMyogHpRKTm69VPMAu8qBa6QQDYf29V1FPdwz9KqQPvjFKemcdc9v5SrTkV76q",
  "key37": "5LPM4DHafEfzgoRpv9drmkENXH1p5C7ZJ54eYywWzyuwpbmHwKdUomPxMvZENELCYRyqjZYHgAADPzj7sJWwb9TM",
  "key38": "5RpJeBkgs69d492wKX452JbGjN9NTyF22gXcpWFq6FCtmyxzo61zotNU1SMEtKrrUuhuiCrnHGMuWjmSm5woaFFz",
  "key39": "5S25NQ4nVypMmTmBQ9wAsh5LzkvcfvkTZnCYQLzKuXxX4xAXX5pooFDbXAqxBCD6RtfCw9215JGr2mmoco6fEm5D"
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
