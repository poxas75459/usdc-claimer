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
    "2XpwfUQzQGecwtMC6SMj6w9v2zooaMvJ3UVCBJVUBvd2F5LD2pbQ66nhBk3vjnejvP2KVAgBTm6xXjjhHoVa1TPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xt3h4oABJyq9BKY2eBA3SN8zSg5YapVb1sdznzxYv988ni1qGhfj8ktXJdrQovwahVTEwvwptcAUuoHUiUYjFw3",
  "key1": "2Y6v6EQtoXZxTXcBsN9FCkXj4Txk9dL2pgC8AYwobcCw3Jst4NqnWnbwoZF5dfntZpV9AuyngPkRXGF9JnZfoX63",
  "key2": "4mz8vQEd8HuaXhVSYiMYXtDyRYiiBuqFftgaJSFT2oe7j4rmngL3FTpzKAvaFhSanr7wvhTJ3ojEPzvZndVbKBQV",
  "key3": "3qQ4m6zoX6xPwsADRBdGfwHmy3jHt83B3pB6SrEJD1qU96g2WfsuKKLZnuha1YuQxVSafVb8Hed9Rk2UEC7Ahmyy",
  "key4": "65V3Tbc1gdoQ7JT2VrPgi5b3gyRP38itLwVsb9P5S6dzZ9CfTrZXxq5fBxPWoHUQCMk8CjdVNq5z85tFtAQjXfn7",
  "key5": "25Zy4fZY6RLzPtCNBezhgvgcpeRxjF1gMLqnaDExfn3uuZ2CpkCs9HRukpdpoDzchZvjQ229XejziRZQvs7nAjdF",
  "key6": "3bwsyQPq6BZn47ovMR4V8AbWK2eQtFgvGWcoo7buWJwZsn1uMX2SA8Jqyy8oG1FDbf4FHV4ZFEQThw8qKnRd65Fy",
  "key7": "4hUeFoEQbPCScvyLyHpNN5c7ZpDTQxAL8ELNVGMGM31jeuMnbhmBrXXxteBpc1eKaSSnZWYgEHby9268rrHVfYmd",
  "key8": "59ZwPchk76KjfXWSEuJvNGUjn9TvVto2oWcYBpTQJ38YhL5ZfZobovQn6iD7D1V66Drhic99HQmssuJfdyTME1yb",
  "key9": "4UjtXSq2WeY19k9ff8GPQdo2ywoXDaMpYKT1QCDMRDGLiVBWJLQEcyGn8mriLVeMEjmyrySKsVYcpgV4wYc22r9W",
  "key10": "5uAStbC5o4D2Ux3weLRa1Ao7VZnusjzJpKzvQgPTwJBwqrnfqDbzKaTibCcVrKeRwGypxmDTQB9YTtWnW3AtUWdC",
  "key11": "5PMcd72LxacPNU9FeLjhLw7FpJ7rVDiwim7dHJn3qXpDn1L9W8ekV596QcNZfyK6gCCuNQYdeHuSyQYFvW6C5Vyv",
  "key12": "5TVeFT6JeNHY2wLwEGTFz3dFftdowJheoYQmuWJWvpiCSbbMV9YpZyv58nj5rPENCzk9XfoM83frPGsNhpGDdVQV",
  "key13": "5N52aVv8nBnTVuxuR9w3DvBL3LL1smS8wnoqbsZ2QFH3ZFspiwffxRiokMMwdjZ5QbzKFk4y1LPX7PX6RTZdSJee",
  "key14": "4KMyGbqQCW87dRE7BNwmRx4uGqMoN2vX31Db9uXExWwoSKMtGRDFMrpXanUfDv8dXkdLHfnTQCdgQjRMAHHmKGVt",
  "key15": "5TNX6vXg3g7k1B4H6mKM9jyYPthJ3xX3zuJ64bG1CsVxKxGbcVDgRmftdUrysmAwEo7Rq3g11VpVTiLZmii9MRmS",
  "key16": "jeFvBrq85jikoAhNHawAvYSsFNYQV1rqu5dVKT9MzTTXZqerCxbE8ALY5pHtkygGiGJ66LdmNAJVPUX6gqDZzZR",
  "key17": "59dmibBsEy7CvpTyxmNdShQJ8VXtz1ShhhYkMefkZk6rBaDt2P9GEhtjJq6sbMDc8y31DpLxQMQVgJdKEPxUWrfd",
  "key18": "2hzbooj6r3B6RnMwMKbdVacbdhbDcbWQJkG5QWmhfF4hzPpM6XiHs2dYdn6dWjhAzN9Rdn3CJ922sUcJhRzRLkJ3",
  "key19": "2rv43mkQw3Hjcw8UmYDiTXQo8Yftkb8X7AyzPqqQH3A2wRcnVktVB9Y6HgbpQps2r4DDxpbmLYSrgLhSRQHu7BAM",
  "key20": "5YGeKrb26PkQ3g233WgCTcrpZrYkSrTwCQ2N3t39RudrXYMvetaX9JV5qiezvmgAvevzovNGzj8moSnvhyRLvzcz",
  "key21": "5dAA7KDYPjgV5xp13Tmr35acM89FutRf1b5cbL3LyNWB7JsaqjNxZ13K72oCY3L6oBSKF311q4pCLeXJPSMrSmXq",
  "key22": "5vcSUMa5e42UFXJRAi5hNdxgpQ4wJELMgrY9FUxhTbofqnEtGzggGZ71fw5qNKhEY4tMGTfUDpRFd6ZWbS2Nd2aA",
  "key23": "66q3hf9uSVrWzPddXhC5kRfci357bXUrApqYKGhjsnVFW22FmrA9tmFa6knmgAj55Yv61rjMmSCF68S9MbhfZc1A",
  "key24": "4mNMZks92diewn93ExZ22haWfadUutF2rRy9RzNAHHSBFBmGdix8BPCYnaiT2TtdxobzqGfQ7X9n2iBbrzrmwdTp",
  "key25": "AAnQebqMrJb3idn126PSic6L35cZJeU3zE25AW8kcW9E1U2mhHCU4dWUusdNuoTfNVjUwzrAY6hh6qqzbQtyqpe",
  "key26": "3TvEcdcjt2r48Bpix3wBKaQfmtXB45mEXWGKkARWBne8vDZ6JuXrmzCoLmzqTd4UY3tu5kUoRJy7Q7Cuh89T5u2H",
  "key27": "5pd4FMoC3EMVHBVsajZds9gYEsfMtMHeDHpfW9pgW3wADY3oeZsWoNLe4uP13kf5jgS8xVgNbLCtXJAnSZQKz7vw",
  "key28": "5p17vAMUbZPs5B9ji4rfctkHqgmcCW3zvNBDKtouDUdEZE9RhhR7mkC3ECdBQcJvPFXKWRtEngJY6iZnxvG67hxf",
  "key29": "2Dyw8YeGqT8hPxMu692PtDwXyWhYXZ9YsgQWjrASgEUD2k3FCTGLeWD1EauQdEvACBjWW4twZLKnZEcZCKXGUUoJ",
  "key30": "LXf3qWdgSXf9U5YzJPW6w3ki9gm6QH2j3t4XmWzFQ2ZmRkCZv68jUJ1KTpYheAQtzs8uQMs9iQq981vDCghX4yT",
  "key31": "Twsyc2BRqTESR6cm652UxM7jykdkLLTRKxuHH2x5sR43BdzLuURrTfJm1BUiTfgKSrpE4UsrYn5Mf71hTPt5D82",
  "key32": "MuQjn1GrRnyByaX4MLfPDSvyjMQeZAobRZ89i1FWWb5Rz4J6HTLf2cDsSnXteCCCyJm5mL9SFGTFEwo2NzyC8bp",
  "key33": "5MYTb7zoFfPHJvbvF7kaV9Qcwz2zb7XZw54jTZt6nwe2SeGbdzkeqKXxTAh99CxQEcVuoLV21CTyo2Ck9BD5kuhV",
  "key34": "4oatJXCVGngnTiQLViisvPhZ3CBfCZ9P6hQJscU1gaLZWMowhBDvoeMVzsLK3A3S9ZtKpHnyC5ThS9NXPk5g94sG",
  "key35": "JqgjUR51iQgb6FvAF1fdR5m269p4jEAULNZ5QrCTJ1p9ETtNz7cz5XcQJbcZ99XBd1kQbtWaygMF9UBWeegEdDq",
  "key36": "3JCPie8EC7TuCxUnBc7BZ2drSjG5m46A5Fww4Pg5h2gC1yXAUr3x7smR2usGuDSQLFP2UywT1c15dNbVqGqdUtPH",
  "key37": "3T9LznmxdcSEmeiq2LoxgvUkSJytAH4uN9fxFSHVGvCrRx91ENKAWQaaaPfn16hsGg8hV3RBgzzjSfwWe7W6A5Rf",
  "key38": "5vpNmQ5QuZK6y7RmDQ4vHLFejc8tWimKZ9ciQrLrthbqjDAJyZdUCat4nqVRSyucAzHTCuZutiMZMyizsaSchVHR",
  "key39": "Ya1oScwb3tM8hqw376Cne8tAjmd6iniV8SG2eqtrPs2AanJ8rReYWH4ik3MdweupgNsS53CZtjiLZ8xowuLPKTj",
  "key40": "uZLWBriiVA6pVKpUfft1ngzn7E7rqx1foMnvGneVmMtTKU7DG4Av3AQW71JsDpMzHsuGbYZDjyKnu7shxXAXQjd",
  "key41": "2s1a4rFBJb5npxw19carjUZVf3ckJ9UPnx5KDwz5bRsYRYMPnPEYfJgm1M9TksJ4P6NBHE6BtJL2w47vtQa3YJDo",
  "key42": "4X4wqkokPEWfU7CGZdVR62x355x6VSzyq8GTDWEvtDr84TpnykZxG6nmUmSsLds977kY3aYUL21X2AT2Er5rXKwR",
  "key43": "3uqEL1Lsdavh2PomF8XVMn4uEUrqcWPczGSQQxjcF5mYRggLvBCXAWRqpcyWnrtmaNfAqqqE2fgDTJH1GFxV3Jqd",
  "key44": "2HNcNCmrxV2m75sJipZBhvwTDuVqJNNw6MwHW7hgKHz12Rbr17vvnoxjRZZcfxoB3zkrg6X6kGB61cX82NJWADSv",
  "key45": "fXqddp3Ux4KK6sC2VLRynNXPqGktMAriekPbREBfgTWjH1KoJKdxGdL8C1vwiDLAp7HyduPSpuJRsL9MqL1Yrse",
  "key46": "4ZkC6HdDZx4U31w6UQCAWpJVaitPUCNUwKGJ2ZaaBkNG6aBjkkF7pgtPjdKE9iB4qbZDzUFcS1uhV28e2kc1TSKx",
  "key47": "5BHg43b6MtYJMjxwSdUnysJBdVBsaRVZhrmBqbh7q11iPaNBUUfGgxZYw5dEnV7jKBpU1AqxQ1MZDPTZwW1owuUX"
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
