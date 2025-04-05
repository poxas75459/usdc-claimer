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
    "3TFoV9Ytd8TWkh9mNLKY83utVMUn2p2nURNsvYAoGQHvLEHvsprApZ1rAVSfhFMAym6YUxrqGQcqAX1ZPFuzfBhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ky1DPbLGckSrUA4Am9WTwaD7MoWAujYEp87ZKSM9F22aJjQaZJZ8jk9XANDMedt8hCtiMQbTZpCsyZWaGsDBEyM",
  "key1": "5xnVJEfgdNq9ASBCP8yw4rADNiGDTu6428buXaPrgvbEag5R8cxgtbDmZ18VvaR4DXRbfrtLiDnpeCezL2W1pZn1",
  "key2": "Zy3h3G2ojpgorrQjeQAXZyAdrBALT5Ypz6HJZei6L35eGGrzRRyuJBa5YpmuDMhoTif4hzDD12PPu7S91GsZeNQ",
  "key3": "47FGTYkFDJUdhYsmrFHd3pxQ1UPM9ewQFUqM63BFXKSyUkhZDeKUA6reYQQcxUe9A6euh2CCGULTYynJps2m9B8k",
  "key4": "5hpdSnRasvn4b9VW7Q6gNoVjkkVT7b8EhCvaaQkQcgNczU7cMBQKBNUrZQw6BJcpMB55xdNcmEbLoGx4ZMJCtyLF",
  "key5": "2nAdjHK6BqkC89dQH4tTWnkJwZAEP6PV7UoxJqJwzQTTy2L1AAouzCctJ1wDG3eVDS7gUnLpZ7y63svcGnr8xz5Q",
  "key6": "3xhWkdY4RgBdsLts11ULdYb6ue9J7wHJM3uJ54b7o7QNES1qJdd3cNeKaYivhqRphaQta1szHNtx6zzjHq8Rov1a",
  "key7": "kLJSHLQTEc8pzfSUsR6Bh19fuW5VqbR9S39P9MbW9mhDRdTpvKFGx8pQQ2bjS2BdhVXarC4iqwRFxwZQUCsJDKe",
  "key8": "7FMsF5ePBcaSznN8cRsxxZXUxi4DyZ8wte8suq2ciw6W8tQhbQ2WPtzXzXJttVzUQDwdxq4RtWrCAGuQeW6r4Lp",
  "key9": "4MNQApGT72iweTksq7zJDcFcU7PHEfRuZFdfmfZWpxGvFtZKWC3r9Pm6RwSsopPhMxSHNV4zxzuJz7jqQEZLmx4n",
  "key10": "53Z6NH8JDah3tKMKj6Q1tJtaG7eDkAwowcXVNpjgZ3Xx2gMw9PrQnvWR6spRPBPAu9ybfsqb2eThKpC1ruD5b8iP",
  "key11": "2pAE783msjNMvi2ZnNCG6yoGcPo5VemEREnVaQCKeuRKRyoZkso3uFtqMUfVWgm23iGdZt44TnP1NeUPJi3XTV7d",
  "key12": "54jLGrGrakTKwFJXRMY4kN1zJydB9tddz1XA6cQkeNSd3ZgjPnvhp9x9Fnoip5DXVsVutXkisN3CNpzSgFQG8HLV",
  "key13": "2M3HvD84PdGqBnHtbXfAGecR2xPX8q3XTZuNy4WLAva5LSCTb5NcGFoJgEiWG3qxsKcEE4Erk3thYhC73YST7C7x",
  "key14": "4PW6UhgTVaCMwLownavuvfTM7Vi8QGoxPba647T1xQd1a5TUkoxSups3hPKgHV9JZrs366D6cTjittJ6sL4rAYUU",
  "key15": "5KPu3xXPjC3pDuK2SUeVUZUcF7KwY8jAAgyTtA7Nr5J9YSxTQBSsKzwh6UrH5Lm5URTPeYMngPdowL9DP2n3R6Kb",
  "key16": "3yPQc9H7Qus1z4g8PYBoHB71FoJt44nNSEK7ibLJhKBu49jf2dyvfE8XcmkVsLtP36JuKogXPuz4TdpAuv23sBZV",
  "key17": "2NFHpQgFETQfPs7XnTj2ow69Fve2wCgX89UBJex38sB5xVy5Twryf6nWtFD56Zn91SxsRWnWjZy7y8A4dN2NhvoT",
  "key18": "aUiY6Qeb2sE1K75U87iuaHZZRempvjUpnzGAvv4kqavx8wXWsvZboieb4TLVxvRpHRJ3mVcRHULTpSMEqCsZh79",
  "key19": "2kQD2hBWv3Y2dXepWuUeYe8ZEc2Z9dkd7prYrXLCmda2Vuk7zaJ7AefMTWsXCCzY9SUKN1CBvz1CPY3Ldw156b6s",
  "key20": "59mLNhzUHUTQyEKkujFMJkX8PbEuB5BF4xVuDp4EQHerWdxQZ4hPoWqqmmcWhT6AMmtaArHbpbK1J3NCvs2UJANo",
  "key21": "3cSXpzu3J2QRSyE2ifjCLAF4VTF23obqiaHEHVXHtmJ33uhiM2cRL1XjeXpVbLKAVRpM9ZRPdDL6zbvmbC61Hrzu",
  "key22": "oFsptX6Tk9dpiW3uMUgvUTAg14ZaPrkj6xcLihbtnttXqWdb3pCU7EVCTnT1U6phSMq2kNiaXygNyM5DkZdKdcC",
  "key23": "2x2fmHekHDmrsHkMjuCMA54LbBqBg1gZKM1FMFRqdezMsYNvzqq1iyxZJfPwwoNPmJGYHYhibYBQftbZxK76w3pi",
  "key24": "2rk7hDU9R5romWYmbqA5nwx7Bv4LRpYV7hUDTJU7oU8CfqWqy8wAYj8KP93B53qzqKb25e9WETwAdiXg6FUUPy3o",
  "key25": "4Zck4RwyLJRRjvLffjmmN2hBEa1eHvJZX2oe4B1edoxMmstN3CG9tAv4kX7LCFAx9cFUYodRqs1PjdwGM8PcJUAs",
  "key26": "4BgpuMXyf7PvuejLGLVkZyy4GNGA1vHBJS3z1wcZyrZsGLHjRctJ8cPM6gCgYuHpWy9NkUsj86J4Tefj12uxGp1s",
  "key27": "3GFXF3qyPyAYYH1k1rq914vw38EC4qDkiJiA5PVKEpcJnmXCxw695zdzGRxtMVJGXqqgeQBGMqhyevrXaof5Rk79",
  "key28": "ZiotoQBPyDtSMZ7Xvk785gx3ij9QiCJFTtunUMAGXSt3C8UGwPWJCmeU8oYNpBA8WJgCitTEpDmmFgkWdf5stpF",
  "key29": "5uTSinSR18hybvbvmx7iGkq9Hye7Umx5KRkbe1FgTZZ2MRWf5t2uaAjxnSrZhZGag86iTHBwC1nq4SFRK7eC2bYd",
  "key30": "5tgiB4658w1NpK98zeisLfKuMbkhjxN7qy8U6WhPjrC6XVs2nH78DhRXtCsC4BHTAFgq7zUHDVpdnTz73qxb2CQa",
  "key31": "iFwAWHwJPhCSxxurXeFyHVsW2R1p6SXTX5xiicv5Q7rdVMicUXXWWuRmptGNwoPoAoiU4PBYSidGwxKqBhAVTiH",
  "key32": "4wB8im822AB7MHx2sYuBihmHVNedt7hneFdZ4ApLNWJNoR3SbuXdTfzTg15zi3Rskekx8CLZN1PnppmJdnXVLfTt",
  "key33": "GwDd2t6i8Cw2F14mSrvZDPvAT8r4Q81wyQwiSSiPyioGfYxRqTmZDSGSo4oXHk3VthQ2EKYvYyzLyZYKmivntXG",
  "key34": "2mjwyaP6aXwkjvGj9ziGbkCaQL6iJupSAZ7tF5hA9rUjCgrZrnrGZuEdZtovvUZxYvJbqQ7B6H211Mhq1SxTJhAy",
  "key35": "4kQWesYPd6ZfGxmUNb5dMR8DQwdnuUaKEcZSJFpYX2pPaHHVqjQZP2gQumEFh9AiVJTswb4a61WZcrroCm9H4S87",
  "key36": "38bTcWQZrsDZysiTi8rp5PjdnhKeGjJE8U7UV93NRBec11MSoZwXtynQ7L3ReuWMB2rGoVngxxuUDCeKWoaSDHTt",
  "key37": "X4PguGiLM9U5bs9b9iGcmCHHyY5EGvpQrcAYBXRdQmzWLj88ocZkyuLzpvTKKZ1foXCovysaoos6jUxq4jX3Tyg",
  "key38": "4U7KHCvRexytCV5Va6CYy1wTTW6S3SLo2qArN5W7EDyDnT5R4neNHqbzgNA5Zow9p8AXCTcjgSdzcqU6wnnfBZEn",
  "key39": "GdLaDHdmBQz6ysV2P3T68NYuEpQqAcCo95YgzdTfzcyVGD7uNBGqHBygZRRcJ4riqc5NkJfffvvYaHYmB3WcnvU",
  "key40": "3gt1sSBSvLhTFrV4K1Lfm4qsYrWzVT7gRUe3MQZysFruXBYmwmUZWN7LLjgZBVYsVJA6DbGZ58KrztYjdQWCTUBM",
  "key41": "2kWTVStHePQvT1KzphwVmzjdwiDSzQDr5uLZHPzxdJc3S6ujAJ7JhhQM2K8BryBvQr1uLuuGbsNULUwCJeWPivcQ",
  "key42": "TLi778BVuvvbscxrW2qquKAf54wyXUurmHQho6nEcPnFx48wZvh1eKzUFsqhK47drE7qF9ERpVw7MR8GkR8eL8Z"
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
