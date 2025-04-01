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
    "2tuTUS5wC3zDhVFnxiZ9vLVxGqHJAo8fV6qAKFkGFtZfrWKbBosZqRsmkZrPcDaAvMJxNhwBREN2a7Aj7FqWa68Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DctpaG4yBY28dzPAdttaXzVm4zeErUjjTGcSAkcHHvt84v82Qgh7V756H1mtSdHnwmLW5YsJNZxV1L74TBhCcf2",
  "key1": "5P2CACfCZiLpVimWPNG9ea7L7yX4kivvAABwLKqjAkiZwrPH1cLU9ocfXUrDGK1mbE3mLro1hpHJayJDjDLBwYmR",
  "key2": "TEwnHC4r6m2yTkxVQuhEoWdNkW17yenxSL3bwBwx2m39Q5qyuJLd3CMeCFRWUm3H94WYe3HPiFB7tAs43W7ECuf",
  "key3": "dDhhChCGgM9UpaefPnD16xpVDjbcN5V4jvPe5GtxoaNKNkzEwqGUkWJfymYShjoHamZu7XtxbVGPPHg4RWbNiz7",
  "key4": "5oyUExGfYaKbXd923GnHZEcD6UY8g7MfB8z4JWCU2cyMyYq3uFnLbksVgK7w1gLuMtCAZJMbEFzvVEAS8YH9b1Wz",
  "key5": "5A1YMSc5M52aaZ9svd1dgL8Zcoc8FETkfijxQHcGZcv78V5N2eAK6k9bXR8YH1HNqhrN7g2kwPfr3aG6gZTHswDX",
  "key6": "3DaKcSdFtNkC33VAsieVRHnzKhd223uPLYc2Lo1GDJ1YEzHV2LKges9fazVLMmgFsCd3qFtd9yTncJugz1LE7daW",
  "key7": "MncGJ8ECKnzizB5ck8V8CRSyHiQwwpcTN96XtApobbT5KWtBREcqe9UYvz4W82KbVLQ1YDsYk6HxDz32vKugPk9",
  "key8": "24YwEjzqMFBF2VcJnri5awhUaxPN7NZmxGZpDyTCoQ33hDKwfz73twwgHDyDyWwJG2VQAcMo5CvyqnErPxS8bxoN",
  "key9": "2H7Pg17SvCxobk2ZPpURY3QBaWX22dRTYUumQV3QmrEHiyanmwoEhSebLPzCv6LUw9CtPx9YRrRXEV22UyxoXKau",
  "key10": "4g91QkFjv6z4vn3UMW6Uh5ZP31rKkf2fX6U3gXcmCqw9jRRW2YHiusMLQPz6owY25Ck3Pyv6i4nRcAnGsGDjrQTx",
  "key11": "3QnKBFeMfkQC2dsWMSUHj3UANaH5UoKQ9zcYEgFBGmC3vUeBPLCDQaoGAVtSv25ebjNbtXa7dnfzawcKQSZdx2gv",
  "key12": "3ZWpY8NUdr2NVFDzD29zjrz6T1aM2WvtLGmiSVjm9UPbwEyeU1GLLxhuvJVeSWNids2k956wKJKBQbTaKAz9nZDS",
  "key13": "2NZbKJafs2gU42gctGhR4g9k13VJCLSQw8XLnYvFCd8qKBrWQYGgRxJ4VdJGtnMcdNKRP1FA6VmtKRFriKqebvQT",
  "key14": "LwzSX1zwTRYezQvvAFBYLT5ThueuCYeVG5EAgtaJsDYgNfJcD25xQrbyHmPRArYGnybP2t4Wwc4uh7osY7z9ZFS",
  "key15": "5hjcvaS7E7mS6EfqeDVNRZ1hxZnSWrunk4wAhGfzcju6NLS42owbYyxAzJk8x7AfWJi1BanQXUPQGtKWNbXNeDV9",
  "key16": "3AB9kNGKKQhrXxZ7gn5ieXdSja5W7t4nHWTZvoshthzCWaNGyzKfH9sKsvMfUnsMvEeVT2mVmPQJVAihjaMuseQg",
  "key17": "4icDuyPW1BSFzy9AazaGLecaZvp6wtJX8HoehKNyTek9zGu4a4592oAi8nGsidGRshsWKGUmpKCzXqZdAfafp2Fr",
  "key18": "3PfFCZdLp8MJX714M6dKRFc1TLzF9STyK1uCwfAoWJ4PH2aXX8BdnS9kQVGZJ8r8LX7rCgMNfFkcmygss84r6vCA",
  "key19": "2SsPUUVBokhANf6URyjU2jQKBw5S6Vm1zQiSTC5agm1K2KoEXWaDif45kSQ6A81RNVqUKAGQDroisfZs2eCdpdaQ",
  "key20": "5W9ZwxCWBEwRMf6u7LxptoBbzoP47eHrvC5taYWCcLNDCcFGfXJLmYQH49owQZiJXi9pKAFHaKAV67vxbufUoiEr",
  "key21": "fvwtJSg6pn5WHKzxk2oUdzJU1Ko3CWFphqiTtKyDkQqreZHAeuC3gWzUQoY4e6JT71pN9XwF7Z4Laqmxsrn5VDr",
  "key22": "5gbGCbvqaWzutxrHWdBkB75qWmTmKTz8EqBrLQLhnMnGjnN35rRFPh4QjVXqv28iCsAs2JmVpaxVAsVonc7T1qMa",
  "key23": "43jEmijimDDLzXHsjJEtPdJGBM2UxxhC9mS296Jak9f5LVdUkVd3EPCDAh9nTkqHHxcbeg4JBAiawCsqBTHbmM8a",
  "key24": "2Lge5GuvtksrjBrQcdbTGwfiCEJujBtpWPMV4oRrt8DWBseU8wZMypUEhaineSsvmUy9iU6Fa3CVTNH2qcX1MMWN",
  "key25": "4KZbqaHhfBAv67sgQ3iKmnNXqnnMfRGRC1UFJKdzdmyyzBAbWg9X7CFYvMP32gvpBeDrVidqzSMgVro33Y26BXBF",
  "key26": "5AC2QbLDiSuRLATV4YNZQi7nefGPn2uigcRnjDJt5omuV4JtAtcgBjbhzoMaBDZXnw9mrG9SR756nUKwuM4wbDD7",
  "key27": "2Rjbqr6YpuRnbi4ihBjQZqVGCmRMaFJZdFAcMr2H1KFiEz8h6vL61fEv82eGjQtzwNQceWpDKPFKeBCFWuD1g7AW",
  "key28": "2oGefrvSC2ygz4A3WqDoqyDr44TnKBqZgUeQfxnN35gXj3MpyG3dKrvoEvYoEriMA7mgbXh3rZ2Vu3pw7qngcrJW",
  "key29": "4GfoPEPZkjbPtvKGURB31g23yG2jynNja7v7bW7KY8FNzhDo5sz2y6knTWk6BVorusbh7zYT9Mx7zL31mHVJXM1h",
  "key30": "4p3NDKvfJLcKBFg179i7CdTNw8sLzjhR4eXM1DrMUKvqPWjQEFYz4NV94qmsz3s5VJV38mX1oPqQme67f5K2nK18",
  "key31": "4hPUvZycvaDhoDE9QimKKFUxU3nhtCnchgMogsyDDDEzSc9mdXaEHw2vmT2ervPtTHCBHjNSDh4AydM9biQ6wc8a",
  "key32": "2qRUxHvx5vrVhZ6EwgiCnLze6Ez3NuWKJoiWdvQv1AuhDVg9khAdMe5P2zvrPZJoEGzicmoKogQhZrTd3HhzMXDF",
  "key33": "4jj23WLbiGuBnjjSGjZfARYnjyKo1u2dPcuZyqU5oGavmjTmej5sqetXLYhX978AbuyVCG9UrfCfEvMWRtbMM7is",
  "key34": "2Afs6krZCXGdWLY1ft6mu8AnrjqX3NK7mBMhc199vWribkxea1DrXR63ca9VZpLTsbdRyceSWtpW8YqJCTHXTP74",
  "key35": "2kUwq9poWiNQazmyJqWJuWAaKC2YBmfjhcAKSz55HCSntPzjPLWfZUgbwAsNX1eaVrSPaMeDbNJ1UvxTdzDocKTp",
  "key36": "27mqSmcaR39JjmRsjKVR8vxraCJx2x6Kv5TCUjezmFqiLCxQHn4m95JAtJpr3bachVdydN3BEE57DXCNLbmPQxVN",
  "key37": "34o5dJXRJd2N46K8MA4wqy7PjcKRQCCajEAX3LuETjrfZrKWGyiAMMaKB1Dsn2n3XUdTSS7AzxNd2yZhDvesEbDQ",
  "key38": "3SfpcdmYUvRRqYTd4ZDjZiaRiEmXwbMgXA7hA8eshUP2Q7KfLbFCjfwWcmK8JEFPMTjKGcAnWhCcTwDzm7mS3GXA",
  "key39": "5NMR2pNmnhj3mQJthYUzAcxoWMUaxn3Zmc6QjwVWpFbwDTiHhp5UBfCctYrCY7WoMjThrBf5kyRkF9XdBqaEFZ8z",
  "key40": "3sxTFt2yXFGjHjHfx6nkjQyn3VWrZwkuYDH9r2MFE6MnigqFnmiQ8eqHsN3FLNd8uVLYrHpsmRFt5CWBTVW86mkk",
  "key41": "5R64yesdEHLejhegt5c5FSjsC1G4sE9FVjBoNu1uP1FDRNNGmZsATx63jZc1FTP6zmPUDj7UkKC8sANEDSbnVyKE",
  "key42": "eK1ntwDyzSNRgos2jz6YhCeucZ26UST1FpyHeaQx5D6keqZHCWfrqfx2HuMkGMigaD6ZiuRtoDdjk2Qn9EeojY1",
  "key43": "wAersLboRzhQDuCeyAMkEDT3xqyWo8ejPS6jovXxVCqRuBC1ruwEFjEoKktbWNXuy6UqD5w4WfgTDHd7M45qn68",
  "key44": "2B2zbwgNRz3beiYD2tBny2b4RZsEZreG6gtpRAfWZakEnVfiVpCn2FfDV5H6TgySUXyf4baWtFr9fJmz7C97Lsuh",
  "key45": "64EY7B2knHibehw5uXSt63o1MxyTdakDERZad6TrhgHjeVHVkt8abrSpsyL3pA2BtyVjtr8pPoC64ZKjsfySEiZR",
  "key46": "36bFP8r3rmCJNJZVRD9QQrjvTWoLMwKdYmfQyALpgEs7F392dam5yH4HGdBoXhjTwwYGQidYR12p8kZFk8U3rSTN",
  "key47": "zvg4doUrmRWBNqxgNgHSWQqMYEHTRLZrgo8BtaAUNLssd5HjPpyWEgd8pfwH4vn3GKjEaWArDu8hdqXgiwikEVy",
  "key48": "DyZX94PFASLbPWqkHJqctjkd2otWokXh8gm8kvbvQAEoE8fvTwP5xt2Yy2YeTvcszQauCjEGy1JUdheF8HggfUJ"
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
