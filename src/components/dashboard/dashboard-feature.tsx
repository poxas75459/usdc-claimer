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
    "5XinfDRzHJKp1tYH1X2fFd3wfG2cpJ7x45vGjN5fMhMmA2Pq3btr9YjBZG5j4tHzu1c6mWq2wFgSHtkbzmdF1Aha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xr7GhCFFhF6yB3yvV6uFQpA3fu8hzFoKxeYBkYEay8tPz2rwjQR61mk5EQAQbT5nJXKyTdUbQ1iJWF3ariGQ57D",
  "key1": "4hMopPkbYaRrWR4ySu5MvFbwiGGgHypyHBjNByQSmbjoe7jSC4XpV78KPgsMfp2FiSx6juAsFRfZN6oiJz82mUzS",
  "key2": "xiuRnLJXmWuWkKKupC7Pvs9qdQySAtP8nVjqgioeibr7d1HmyfszDMhdSfcQUhiw4Kqw7b62CLo646V3bAjeK52",
  "key3": "5ePZV3B1Lvod8FwNuS6qup6HNuMVxYT9hopZwwnP3YumZCz6Y8NcHsKjxk4ujY3L51uYAiyxk6trzxkQARn9XKnR",
  "key4": "2KZ2QYVYkaR4LwLr1MjSrhp2ZJH6dRfbq7xSUv4QtbeN3SJU88QRank6DNQsmFEC5v2YngTGSZKAtrwNXn8a8L8V",
  "key5": "4dKwxxij7B4J3Z1n6qNRHAuUCs4JdmS3kNptwj1F5bSwy3S2gwQFu1x2iGhcpHpsVMzjtxJ5bZNb62UbRsmd5rFb",
  "key6": "YGXdWQEhjoXy4NNWyVMseCic5RAbnP97khXRmk484m27qunsabAXSoGrJ7E8btN2XAfyCkJqc9jEQXkjPUyGrjV",
  "key7": "2jjq94BbCtQKYxDSfCLMmDhBAo3p9sBZ1r8Vg53xuEFzQoDN8eLtBZ24ry97SKq7vG4VuugGQLirV7KvDBa6n8PB",
  "key8": "3WVNoxA98jXCb4bswTSGGN7BawTShdsaM2SwGLAadf2RjF7rUB1wpZu72jHvnedb6cPJZbGEaScczeJiEj8tCz1s",
  "key9": "4fcF8RBTjzPcv7fLMui9w7Pcen5MwkKh6r5UT728VsB984gFCSZuLou85nXFcg9rynRQgxvdo9QiyhEBBikm6CgD",
  "key10": "2h73VGvEJ1XMz5AeEmXyfQgmUVchswwtPtfML4wrv9CyTHN7hjWuPLJknj1rpJNhkgEGGbjwp8TL6VzbRK7QXmHm",
  "key11": "5bkj4SF6gFGrN4RroHGSUef6mjGjYdMpvnpNBVTnMYjEWp7hkBWod1SKA63kCiPaTLhgLsnZkwbsW91p8GiKAbDc",
  "key12": "7Ru77dc3UcQyCx7ifMdeZeUA9ZH6kmBi9CqySkyDqdPBPu6GNW8TC7cGKRnoGCzTQqQNEY8PGB7rW97uuxcxYub",
  "key13": "2pXb6NGF6xsoUWkZdwKcRA1E19evX9XSVzY6MvjCq5mZPqmyfudnTrEGZESiTTHiRsMSirFEUzXEV9twPiFRcjfn",
  "key14": "6MPKLefABcHX1A41ksjMBZtyuQMhTz3mfv3D2Pfevzi1C8P2H8aM8mpRT5gvUQ9zPUTnKLYGKPgNCuqAzehu9xc",
  "key15": "3XfAKtBUc6Qah57awSZWEFU98uQXrahJ9C6vUHoQjaCPxSWvHBXkrCWcm3pLnDEpJLfwtnAyXEDEMf1tZN2jqcRN",
  "key16": "5CX37Z1AH2QaWcVNEuD2y4xyPrcNERfwjupM2WC5xVwq9w1JmxXJzBkuCmrKdYs7ptWyKAGQQkxck86oCzjDAKQV",
  "key17": "5MfZvcS9ZBnHEPALsKi3UyuYr3gG31s3quaSCaEsDASnxxX2Ku1xF12xEpJ6sRDkKDp4LAbFL7ukYLixL1gLuqWg",
  "key18": "3wkexULik3hqT1ZXGsgW96tR7Y9HxMeXs61ux17skcs3Fn4orpiQh8S9ubKLgVmJTePzfv3CjnddhXcNsmMtGrj4",
  "key19": "66p3gCmeJihEA4CS3SeiKLAL6py7sZGwubtoHR87fDkmHxcZxfdDuB6wjEe7GhuzPcg4QS72EFjQzTMfYUjmtcJd",
  "key20": "5fcfJXzHMV8mpngaELP1XuGqFN12Xzzr6gsW87zmkKyZPauVNMDyAVM4CvcShranx7tCTRaHeoNVMyndHvLa4eHK",
  "key21": "2RejtbzzxuTXY8UpF5pZXpTRQhuGjTsKxarsPoKkV1Bpo7qTjRgQfeCoiBkiRuwdfxhaZguMvNJqXUSzmqR2bQcN",
  "key22": "23Ngypqyk6AdYBemkVuieSmeEa8P6Rca6qrgAymcNfHGUApZKDp2skGKEz7zkx3c74HQX9esafNULD56QSQuDnsw",
  "key23": "pqfyCiM98eQFJJyNs9P7Gb8EhuSFSumpg8sLzx6nK6NnDN9FgdYUEip15gkFbUp4epLucYKejcfCJY1itepDbKg",
  "key24": "3X3SVDCukSnxLHd7PN8VfJ8ZXgpAU8ZDhzVnfZt7BHFacgv1xbpDqZDM7y1FTxexiJznVXmGMAnEufXYhikNVC5V",
  "key25": "5DjnEUjvLXiU1Xt6Fi48MoCaxN49Y2anBeBEaksSKTricSbmXZY7ZEfq2RYBp5FsKLvUgyGh6nMLRqewEhRh86Wq",
  "key26": "2N3JhPf2KzzKJbFuAYrGBdBHE6A9bp5RMTdmJsD63ZUkParm2qVHj6naCAH8SPhGHE1yG8BdffY8svPwhuUsjgCS",
  "key27": "gKmyUKzWfnGhu2gKqtTnpiR3GHMJnfKRXvKdbydhu9HuHWiTkB4zGpekV5HVe5NN2HBycTNDkSoHxeUM3nMqeug",
  "key28": "SczkZMmJ3VPqM26fN5JiMxWrA7uvVdvrauNv5cP1ShVUG5hYMzFr4uie48r9uZs1Frc4sH1Kw5NSiw57XoAXmDe",
  "key29": "3Pao65t3Mne8TMRCSUU8yPKUukjwkuBGWp1j9FGFaVo1TaFpWy9dKgV44DYghQbqFhuFQGsL1yNTdrVfZci6b7KB",
  "key30": "4k9sfxeqeQakysC4jkoeeKQG3v2D8gqHnvkumXJFRKCwi5xubAxdUvXtEXh5RvRWHzxPvX19WTgKzRSc2fC6Dczj",
  "key31": "4w5gJ66i6zAc426g2grUNrW5wxXbtn4VYSrK3fcNzbYyU2iKHAB4m6kJZuADjSjtGpDXTFthybJp8ThB33M9PLxo",
  "key32": "61xZU5b9b2vzAKbhLWx4ehmMqvonmAG3W1TGbxWgKRHp6dg2YwBMwhdgJyA1sR8MCa4hE1ccUXZQFYTah7qV9s3e",
  "key33": "41jM8EGDQcNtvGXNvmPDToWMnTQsyHW8QmNwy3ae1hkpLArPFhwwLAUrL6x7LEZxjFhcWpaVTmUoctSLL5QdKcJd",
  "key34": "4JXZQfHMo3nHU1JkMnEtivAd7u2fhmgmzASPCDpZoUyoEDUkWvSjgHDqfi22UVd4Y848xLHw7vCVyd696tQzf6uF",
  "key35": "3Y6w86AL2zxUUDZG96JMqSeqakeMooWvpbVfMAHGB4bT38Tnjjt32ogGE4RCZTzPUE732bUbmnaHNXSxvAWZCkYs",
  "key36": "5GzHib9yGBxyT14iB1mzRcoFyMLEew4deNvkfUVxAEvdigGD1xggfm9pBGQts1pkk1p3dara77C6gSookJVb65Vn",
  "key37": "5NoXNxDPSustDT5xFic1hPwqyvMvz81mWJwoYhR2kQs85oPJCw6p8tQhTm1CAL2dxbx6rT5TGbYX72PYyLGMsvEZ",
  "key38": "22v4L3wUWWZ44xkcVGqHhbGZqcAZuyeTret4RbTk2h9Bp2ckmkLtYUsq7fmBR1Ei5qhmos2bWyZX9G9wCbHZdXsR",
  "key39": "2XubexdKyJeCWDkMdF4SM377GX2oJLktD3w9PSz9hYW7xD7Eas9JJxJnceKK4sYRowMpkd75WgWmtjcvs4gSssbC",
  "key40": "3b9Fz31sfp93wih5hwpFe5je7ChsMvh4rkAHRpn2uY65vBjfGiD7rufFgELQ2SjDr7D7XGBMMnZ2pwwEGFag7ppN",
  "key41": "5d7sBTdipCRGVRvjm1ybaUtexGvR6jAE27u3YBeqz3mwNU66XUDiEE99Ej3jsdLXByv6EepTr14HsMYZt6ADMsJg",
  "key42": "AY2oxcnJfpuNfNmLMjfR9AUXzia6h8kZNXb1NuSFvgZNVZ4wLkyGsMUDd4B61CuVq7poGeFdW8wdEWsE3hEcSLA",
  "key43": "2i3XEEC8MbMaGrnProyrhQojmPkibRiTWMxsprJ57MikhgtCRzoxFoPKZTspktzS2STtJxTTk45D9sqa6Efhcwjn",
  "key44": "3GbqSd3Ho9RT79Ne1YAkPE5xDG6pg97Lm7a3bidMfHknPDBru3UctGRpmqHKag6q9BcpJSNM5DrotFrv46g1uhyD"
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
