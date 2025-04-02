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
    "3E8HHEwwTpdMEcBcA2pZXdQkfAAUnvcFGrFGnWEBaHHvCcbQSYiCum58dtfmcFatYd5nrcH1j2AhbvNQGfgSVbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V1cAiUVxxcHzp8rEhcUjAGiA32Ly5i24f9DCnnY7JffrG6phaP5FsoDJAh7aDuk44oH2cb6vFBSNbACpqogHdii",
  "key1": "4fCd3UGc84CN29viy521kiMehVcVMRp7mMQE2KmxNYHTR7o2hQu6EZRvv8Po3L6r8p6ftUCkUaBdCfZg4j3FGCK9",
  "key2": "5ah3vSSMdCwnnYYtozb8YgNkLk5ErDxvyhArZLdzDt7DbWe3Rk125vC2ZthukgoYaAZFd9UfZvGU9ZLTLMsLG3i4",
  "key3": "2CVrQuNySQ2swBE9acRRgzjkqb2oTGXhj5BH2WudW2bCSw76AkisgQXZpRwnfxDDRKBLquTwfHZuR1ARnfXsVmhj",
  "key4": "sN3Kz37M97QhEt7boQbnvTKsYT7wTEGHS4tGmuhFpkBcRCEDcMPMkcRbPGgchHjYFyvCWryFAwa2Ra2hW8BcEdM",
  "key5": "54v2Fepv5QXg6DxiTtBZjvJNFp6oFhTK5G7Z7QpJtZC6xvWgxZkH7pVR6HDa2EypG3HjGR5GgKFJp7Br82N8zYXU",
  "key6": "3HU9ZeP6XKiyRwBGYEHhGcNn5mVDVKUy11Q6eDnWmtA3cQvEpQW1EaGJUoQt8wu1S2VZgCRs3jL7FmC3KacWi43a",
  "key7": "zx29KzPgE3PLVUrLvgYcjeWYrQd6FF79UYHKh5cAjnAZg2wHEKeiFwrwyoiHq4oDDwHKaKUthacE33daa6f8TBA",
  "key8": "5XyvGE85MyTAYwPbCtQfAP7YtJnejVKzZ9rqgAqmc2PPw9kv2jGA7ANpFRkdRVBuXDPAupRsop7HMDJy6r9c8W6J",
  "key9": "CKvjGzV5qaKwLQuiMxM94VHq6h7864hzCvB2USh1sG8oZZaogqNZqnJ8LP1rosjbbfd5nXvSmjdWTXiH6sEJcFN",
  "key10": "65uwUMQd3LQHWt3rq4dF6fv1mcGwVGEEgnKVvYRm33Fg1ZwKw7VREYXATCRybJiSy9Gzm4GYkucBh2KqVbg7uvwX",
  "key11": "3vy4H4qgw8rt56PJh5g4fX2rikSTwtkBPaycXrYMUu644bcVa4rSvXKJEmbcfZPfW3F1VEbUysV7NTn1nv4otPix",
  "key12": "3hyT1QftKd5xaNyEa6tJ9Ze6boFMYtzKBkQsdzBKMR1FQwUJthiZpAosTUkHVkYH1H4TtMroSR6bPL2V8JuuXM7S",
  "key13": "4n8zz8fy3pTtr5nZp5RPJeiDA2shVK1RezpAfgm4MgipWTDzcJj9TLpWubWksFHT1vkvkypj8mtK1zsfKppp6TJQ",
  "key14": "3SSTHnqh71xBtGAReNLf9manQdjaDMuuwmptq6uC9fxAtvskoW6zw53LE8Zn3SqHpoQNDqe3nnzy6VN9y3QULwQ6",
  "key15": "27RbDvjkXC7tPifbW7NDcHB1ZYBzYWkU3Bb7SQQDZzB8XRfzq25oDiA4iT3cih66W6wbPLh6XVBTzYh99bUzzWX6",
  "key16": "3xYcbuNdPR6XUPkKVgo8jYHNAWs65w1TzGbZR7tLNX1njjaDCD3EpvAZiB2ERdF8zzDJHkKYjDNze2ok7wdjaQG1",
  "key17": "34i5MioHhc7Jb6LRDzZurf92e3kCSY4kj4vqw97tDL9YB8jCWN5kGxBbZQzedKNZZZHUEMDPTYsqYnNw1aPugBNF",
  "key18": "5ptYaX3h1qNimnSpWKDJJViapLxFGYPJMBZwHDBZJHZchcq32yiZ84WjD9wMrLJjCA24nVvwK13Ycdutu3rVFsvo",
  "key19": "5BRNAV7cuTgaQKY6UdCTM1XvFwez2CiXMnjnEkLJoRWF4VpSXpErjKdzArkuDTeFRmttPXRS5H8djEohR6VYbSKT",
  "key20": "5Vix1Vkc3X5vm5rsPkPdAskN7EdXpJDNhKDYD2PjSkwoyissP94a7jA7U7hb25pMM7aMXKSnUhx8pW24CKqAwF6K",
  "key21": "37BpwrdnmoSU6ULp5UnmWhr2z66GAGfYvWj5TvpjjT5EmQq7RRoY1ZKsKhTZxxHh79RZoLQ38xc5pTHb1goYVpkn",
  "key22": "2Wt5enur7LyNfxN5Fr846RXAmwEN7PHqKS9GrtytMX93xdGMfYoh8nzQwQ4aFnB8h9T1x5gbDfbC6XYGaQn98vv6",
  "key23": "5ytb67TvzgQ7NG9pjBfhbZRGHMCQjy2NNnXuQfWLq1Dv7GdjYt2RxzbQroduc5LcQbbR4UJkmxABZ5esG1Pe4oQi",
  "key24": "4y3hB3NvQzgdPNmKPKJEhQcBGYA6eHSrcMt7bputuv19YPM1g9fzqFjDnsnTzFrN2crJaSxYZSzszKzfNwEDRB7P",
  "key25": "5u1dAJAWXYc5RpDZjj7pxhqrsVEDj2Q4JQckC4HssUeYaty6suMi8siPcsjeEhuztU6Nu8trucHMwTLo7WDMegWm",
  "key26": "2BF1232Ve4ofTzuxWkJKMTwriCQR3UYGKxoie5DTZNQdMAByxyYV3fZJQTjt6BTjGRmbY2i6p4Ug5NETyS2BrV3a",
  "key27": "3zbJg7LTwgPn7xCtVF4yvyqknvwvkeeS58Lu3Km1piXvxFJ523pMPJCvD5pGUk4ruLA7zoStACAe14JFSVWtdZqD",
  "key28": "E5xEhtDhxCwZtJKKgqczewFqGRYzqkbRKn4SXhAif7RQiCixo6KAg78XdefCmdaVcsjhAH14y6qS2UDisdVHE3X",
  "key29": "5VL32EVSxMgqBcYY9tz38hhBhEpoGpX2nLWpvTkNVYuzcp24HcvAm79TdWMKMunoFD1x1jVzAJ7PvHKmZXiZ8R5f",
  "key30": "3HvuBLQVizdMuPLgYqNykU82KFbehvY9wrkyJpcPwH1nmCxE4wAdDrc9EJt6iBETZF6BybvqEHoLsGoT7atUmzqp",
  "key31": "57ZuJKG2zsoY1Dz7u6iCZ9vMptoYF3hCv2aVxdk5kX3M7eAvgUDSYkvtRXLGrCeSd1LDJmbj4mEviN5qfYtMnj4d",
  "key32": "2uasE7Xm298o8skrZPWwAZjEJGu5usnmiPkAGpFhDGoqbnasZ4Uden96uiyvxWnTGj4zsDbo5FhU6gTSTspbHNru",
  "key33": "4Tp7Hoh33cCrqJbeaaMG5TaWoWCEQd8BhCXGKCeyMrx9agX5hwm1M2TmXmcnh8gamVbdU8ZNSsoMZPZQSHvuT7jT",
  "key34": "3oF3jAqXaDGnTxfPxrjWvtSJmzY8cyxZdx4WDXRoCqNXYtaYN18HGA4vzuEGZL3xp6GBPvZa6tXXHBNcmXcGxw54",
  "key35": "3e5nyKyoAwGAdUVHBsgEvt1mRrXzna39wQzyy9mWjdBLVQPSnXmdB6FKBWH3caTdkZUjDCTnjAtrQcYEr2CnEPag",
  "key36": "293q6ZTYZ8F8YGyUSRdTavanZ6VdY1GM7beP8YuDGRCpS6FmAnyuCmoDpEEMT2ttC2MxADd5giBxm4xXbqweW2wW",
  "key37": "5nmGnGA4hcVC4epBkniifA1T9xQ3fpYPPShqmrKKPU4Pp11a4qF6FGmvXuLeYSf1JNrnXNT5MdUiTnKivEcZG8NB",
  "key38": "3gyGz9Jzk743Pn5yUA6roL4nD4HityEXx9WXyQ91whEN6UrmEFpvSqceBYc2dsMxSJP1EbVzzZ8TST3QKiwvZFcx",
  "key39": "SHmX4rPd44iHP7cPGoDi45jJYV8Wf6QGePNBjFksVDmfMMNA9FMLSL5BmgpZG1GVekmV7om6v61sG8wHKNT24Hm",
  "key40": "3LvvwNp5ESP3PP7icsLnjvy2CUGprqVnxh1joLtoVyMnCbSxnhfy2pM79J74TQ7WvygWHWQzZVBgjaWmt3ajZaKf",
  "key41": "3sTMtYbi1NqTen565hK58snZzX4rpMnWCStDwRfMmtP7Kvf8CDFN2CFrsXZxYTWH4KMZs2q4Rp8fbcArCybNSQoM",
  "key42": "3iZoVB1w4YeVxawP85YJ5n85xRs8dKCqtGypqQ5DKq43gEmqfAJigiGSAMHThLE6Nnyzbh5E1HTNYMAdAMzxsR63",
  "key43": "51SzPYVrJzUFnrFoxWFfC7XZx2iCDqT1aYF2avTPbX8X96S3mjgG1mVYfK7dtxRZo7jjNYhFz8xkXGGBMtnsyFpx",
  "key44": "38iXUKWRA5cfaL2jyBMN3fh3NG1ErxwrvdZxNzJK27UfWXa1NigetsCcoTeH3sEHCTBa9bTYjuNS3FNgZjVeP9zx",
  "key45": "Q1NQ3LLuq8QJJzbay4qJScLAeXiuWk7NQm5Hk7buB1Agk1EM7zokzxZfLM4PBmZU7Qahyfj6LsnSP2hyuB7p9x5",
  "key46": "2nMPrTbX42kXbVqsLyJCzuSsoxeuXoNNKd6ZKFS549yFxghc6cBF1ks5R4puLHChXWMLoXPk7TakWTiXp4XfdXv8",
  "key47": "oXpPYR35KoSq1taPHMdjyGWGsW8HgSSGtbsRJ6FzLa6hyDoABirZKM8woAYHRVPagBnJ2f8cQrhMnryj2ww1Ky1",
  "key48": "2UTio8zGZHiJZMPzgnJCAgV2Lkfc4Gc5iHXENPxvtLi3weVpmkAhPcMgqks3tRcnCmJmKfNP9a2MBkVYfUtmExxV",
  "key49": "3GGn7yc5ZK9DvrzBf4bXX6S3yv5eUvVnNzBitn75nRZR9W2iHMHozetdS53wWVkdzKbrb4svFY5tzP4fZzqZ5dDi"
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
