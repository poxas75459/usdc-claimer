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
    "2tMYXfCEuZ2iQDufdxrWKcmrNXWH5oS7AUXYEJHnGtoMHrZRTgxXHsbrtwuhcCsQgBcduz1d2o7h4PySn9y9DhnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Eh9Yi6mi6BEeyWYQQHMeQgx6hZiEqFmPP2Xn6J5YdufswvLuUq6HnmbvWocu4nzK687CNZBKXgPfojQReE5K6XJ",
  "key1": "9btceLRzC3JypTcVt5rBkZWeUQXHQR3ZBpmE9Lfy1YFNtrFKjHQxnPgr2qbFVvnp754ksJ9HQHbWEx1Psfp7yFG",
  "key2": "3GKkcaM6VWRUNhREmT92RQsHN5q5E8Jr1T2xJB6nenqUfujuvpDes256g1u1QzA2ZRCGPwAVKBDPdDguuXb2EW8Q",
  "key3": "4C9f9j2SwQZkg6BeVefRNnaSUyyVqULuHDt8GbuhxBNsdWr1eFkXbtGGwoRPxLzDvc1Ya3r1RKem5NcyWvvFX1gR",
  "key4": "3VmEcWqmAjmsnceTtZGj2bKy1Qoub5Kk5sSrAw5tNjDiydKJXRi4riMWe7tdFf2ju6evGBmmYwyzLooYpA2cRatn",
  "key5": "3t8krjecgzgLtmC9oksqWFkXRLL5v34b5M2ZinuERRiSbHKMiNCqD2x4EF3pEn3Cn6waUhH4aiuPu688SmMkwnmb",
  "key6": "AWKK6R7ueHHG1oZi9q1dz5SgRv9TrFjFNuDf9fqLPoEzFeuuaQGhXQuBapKKRa9PFDed4Dqo92qKyCJLbhPVybG",
  "key7": "3tvUeaJYWXh1czqHMVHjY6WRRaHvkoWHQpGMUZuLbTzaWs5tXCTq9bTQ7yXayFafWWPiMNRYnUgHpK8evkD23Yyx",
  "key8": "4q57EDz7z8habsyanzWSZWV4wBetgDerXgLLjVZ7EBpr2D4Hfs4Eu9fG9zecsBeaDdEotZX27URxXeDnNMiN1pnH",
  "key9": "PRsoYnHGBC4mBpaPaJDXjBXWCnKs6qTgDQm5vXvL7MrhzcQq2JypU6ro7ay4hLgxQYrhshR59KEdjPQNyoYxQEK",
  "key10": "5JE6LRaXYdGLTZxyJSNS8182VAEKihonTJzrEe9t6zyr84eeRtTYgZqaTkVgKsQCR8qjCWaN8gWSs3dDa7Rqf7j8",
  "key11": "5RHdpDUk133ww8nA1m6fPKPQRmAssgED2yU7U2TJf9t3Lxk8zJ9L8YQkqFWwaR24N9W59q8vHPRCvTayDfnz9zDc",
  "key12": "5AJRsWKa6AyBkdtbrLGQsFUGAGpAeX36uBCoGUWx66MmK6R9VsfgH9GnMPuCpLSHhikeQgBxEhERkq2ogM7j99S9",
  "key13": "XAYAhsmQEeDDGKvpcKT9hsrrdnsiTHsKwrzWSPLyVpVyCAY6HRk5RoZDSfmUYS6K5GqKbgfmZqHKy2QGFoVJji2",
  "key14": "yePwrUcLQzpvRRkUgAa6zr4WiATdpzJZdVvqKgAjAKjJ6fG1DHoDFnnCVZMHWkohfGsUNQCK9SocogyjkDXYp6S",
  "key15": "4GqjZmrDu33DDQ5AppmY3k3BX2sVZ1oUwRVC5mVAZoBnXU3notiG6eW7MrysRrSygXv3zkvvexTzXW8v52TwJg9c",
  "key16": "2mPmBLbfJGGYFrhGhSKMx1QxdVcFMzLXCLVRXJ61fAsN12jvuSSoZd1PUSYtJDraf8dQfgt9FKH82wLQusfSsxJK",
  "key17": "2DQvugtdsL7qoePkSjAjfNpU8dk2UwknM1G78B2w6Ew97L6e3634QZT3ijwUizasPGyvZYccycsxqhFRguPinwak",
  "key18": "36u1ctJH7cEFoSDedDyhzzU72AcQiqbTJFVUo2inzcy1vtp3FUrQSpY5r5mhinv8sJWCQhkKfVnSMwEw4CkAvFrq",
  "key19": "2EbdMPV9igfLHC91ZTfjKudTJprqJHCEFxrb3CGv76yBUcpKchDST9JTRTkGogMh1tUEp1H79N2M6LwEpqnGntjb",
  "key20": "4oe7D3XJJNXChUzK8dGnJG4DPGLUNkWrAddN7SyrMBDxgdLJxaEHajHtvbM5hjFU2323hKYE5MpSSFkLvGYJm6Xh",
  "key21": "3BgJcAJzg5mQh9mr7Gc644Bm3qwgxQQuX85b557cughFcWCsiBkZz27X8KScgPoXYMUWJCxpXnTxC5LSboqZ3rAC",
  "key22": "5R8aT36kFKVHzvnPMUrCajenS5VVsjWEdVS9PSaE3afJ7aGkd8qzoWfu1uYfE9jdJaosPqGn7Zs8XhNqYUSUEaNB",
  "key23": "21gD4ZUv2XN8TG5ynCeQa7wAwMJyZTNwND4NdpGeD83RyaigMGUasPknExWvM2pmuXUYzu3NCJqA8GX6nWhdBwao",
  "key24": "5iUf5vb6KEmmupb3fcEbLgWPXKzjtNQ95eztjsQpNoPvgiRpaEKAVjs7ojxWv44aXX2UDfKvENrPATZx6MWy7Yvn",
  "key25": "577kb3hE6bnxETE35tnGzvUVKVei7MV1Lwv3k1aeUZ85Km2u7hx8Ex23GrQCj1iZCjEmgGsmgq2kg72YFm3bvmU1",
  "key26": "3eXPVWaugmdPXqRsFdGbamquwWWY4ESMux61ckK1i7KQx8P5H8owWMiVTpBJVQoig5wcMRTvCjty5ER4FkPopThg",
  "key27": "kAbwVFAKitmG9McFBdwojftdDNWzY8MZCgdMaTX5hiN4kuRZeuVTGz4nRwjZK4trRpAGh6Dj93zYfLs1X4hRmfY",
  "key28": "2JxSFDSPGYs3hwedhdADqunXFqHQ2AqbKiApUpcETDR555rVAgbEALpJEZE3sqzJ3Z5i8EsiZLf9hhYR3u3thHiP",
  "key29": "4wwtnW625dAwZ1kV8gEu5mUTA764VnBuC7LyjViFAgnq8YveJFmXC77sQWqfba3oJwqvwcuRei75bMPLx8upNBW8",
  "key30": "5pFqceNnzWBYthx8xyv1nzLFrd3Sb5x4fLQ23LwVB28AyJh34J2kZwoxQnSo6XfPmqLgVF1jMhF41xn5GAGuCTNi",
  "key31": "3vLXKFXXChWk84gVvdjRL6nG7wj6bCbpunq2xv6xrcMPMVXDUnWbLwE6wbXMNeRM3pyrMfR4zDC1nK76nkmBGLx7",
  "key32": "8afWej3QrSVHeLQ3cMAhQdLSpyhvFiiRu53kANeTv9Fj29ZyGqomGMGCK3mtpoe7P6RSPWLxVvGQn1V3Yqpm8Vi",
  "key33": "26p1i4LS8mHhfDJhLYAXXxVT14BfqoAJ9QaoLqdagLvjh1bNqE7mC3Pf8E15V31ujd4pwFtNy5e6X6txWkdxLmiZ",
  "key34": "4h7ovv7QB2KjR4Gg14c1vUbi4yANHUvDZGdUzGScDnESfQcSPx2NKa6RMoRnezkDxDWddGeDTJLRAxmWJRireXjD",
  "key35": "4wxKF5q6UsK8Mbzri2VPKx3ZiphXnwAZvWrWR1U1cYnjRFaZMKGRA2zceb4hbMTNNkTkqaSPFePCUdMeGibcK1Z4",
  "key36": "2eMZpRmMAd2L2TWDc8SeVvTYHcgxAMZQDhYbBxrm2y3o5gjSk3u1srvyJeMKJc55ZLGWKMcKFnmGrrSKMrWJnrpS",
  "key37": "47q1sm7tw6F1TR2cBJ5HwGxx6P27pPj5yH8pac9MYXw6Y3ZicVVexkdBvUxfHew7JVHnBugxCFGKMVwWXwERrj6D",
  "key38": "UoQfe7ZPB3KTjNdPtTHfB2raxZ8nbVhGGv9xDdwdy1twoe7P29BcFaYCAQTFL1ygft3e3NKX6xoZ3o4GKjgKozT",
  "key39": "gyhFApgV3MAvMTPpVSUok9xtpGdLnu89LUJhwuFhtA8QS9UNyiiG47D63hcCoB3HroYFcysCXp1DDFnTLV8Qssa",
  "key40": "3jviiXfmPcGMx1mYy4JpF2eKj8H7JZKozXur7ta9Vge1WWK3tEr5LUTKNqbCGBVmo4kqSjTiGGVihevjvq1C5oFA",
  "key41": "52EzLCpYEWYVDADfugkbX6ZeWsky6fJ9R6Y1GwFQCyhnEkPbjTe4T4xzfJvqNSSBN9A2NWrx5NVbK2EpdYBCqsTq",
  "key42": "5BzPdwtQaaWRECJpGMc6FEyNaBHcYgW2jddWqS6ss5AS2MmYZK7bwK3dMVaNcENCiqV4nRbVQSU3eNjLAPwVeRna"
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
