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
    "j3ViaLbRoRjgc8UbSc2Z3EqrLcjYL3kaArxfcVcVJRrZrZicyxMsLYYC8rdbpFv45MejqgBsPxhYikeDE3HRVLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31nno9YXLtN8rmZQeU5BGBL5QFYYFxg4r89ZMcEbMh98f4k1BLcMQrBDhyennGS85NEarXcKzNRJwKVoZuJQ6GV5",
  "key1": "5J1DPUGRWK2Cg9oxnVatEYre1Qxuwbq8B5KrBZYjsVFbCaxb1S521twFHoGkkxPjPJw6ZAtaJ3JHmUNxbkswMoLT",
  "key2": "3xrxrJPR8AGmpHFGTc9ti8cFXXujf71FTReGsE11bFoyBB83kZQm1FPwjTfyBb3f4y1DAZxkUGhMUVsScTL9dNtX",
  "key3": "4PJAdfRTr5s5NsyqCixJzrFYiwU3SDRcBDqmGBJsy6GebcuwRksf7ceogLmh3kf9WhcNGc84h7Y1L2dGJxv9nwSP",
  "key4": "2yRs55mUhSR39brGeTrUKu5aMGrmxgEqnZpCEZZzQvZwaKYEiHmZr3fE4Lp1ieN915B8dFqjZJf5RjUgTea8TtjE",
  "key5": "3XDP1oceacfYY2gHAADrA6dUUPLafDoTDaEXTwAGaMjtFjvNmFNgs3ov4E6WDPJzuYmiGAWVpqXhJ9xqzaTqjCKh",
  "key6": "2osXTFfdwfGM44QMPmN9URxFCzhbcQKfHDw74tuHZVk4URbvg55SfE9WHz3xbFr2r2jg4go2zjqud47FWgc5rYgs",
  "key7": "4VQNXLNKWXQhjt1NxJcN377rJpd5XehhuEb2sF55K5iHF8GwD4VYX7z7wvQGt2RCzNvoXwDoVR6zfKCrYxfwmf43",
  "key8": "2PLvkEwumBD2MfzeiRwsGifNHVd6vSpQW7YWz3fZ6s5ARgG6rUS5s2SG5Y22xmdUTrjkXPiPUyjxHmebJLoNv6CU",
  "key9": "3bQvPkvCjtTGuJbvTRhMpFJxrioX4ZeE2FFee6PvR7ZcWH9RSY8vMy5i3Zhy4WN4WodPyCekXDchVo7evPD16d4Q",
  "key10": "2DjLCtxUW7RYhA2VMJFF62tSxAGVDFBE4deaNCCzdiu9MdNz7sek3jZDZkdz75NveLFyVprPy2BCBuPm6QEJVZe1",
  "key11": "5Kt8xPgpYJ9yYR9hAx5KTDQMkvzgWjb59vhjeAhBiDsNBxirGdxfFtEvbgdUKwzjnc5AkK6fQDJ3zjyyRfwbf1rN",
  "key12": "2HN4yxhn5BytkDnyMe2PUVQL8qXhJzYATy657d1ztg9Xn7nDxdu7XmsqFVTDUzgJxczcNCg2bKNqWHDzsymm4Njo",
  "key13": "5eobAjgLfJR6namGEENRsyyCbTJLr9WYbJ674WUEC5qgZejzA1bhpuZ3T3uCYqcY9N11k4TCeHrM8KiZsdS2UmRQ",
  "key14": "5sVRTYzKeXNeeVsNxaRdtDHNUduawcyyCVwFhnJLHhxq2NYngqgBnEA5CB8XAfNW3YcfxXtWFZNkixazyk6NQxFR",
  "key15": "2dZjtvxY7RfJiJWLAFUDRt7BDV356vPYprdPZH8bwwvAuFcfWnN9WHPX6kdU18ewQD5ap9RpBagm9vhHakvQzBRJ",
  "key16": "5U6dMG8zGFfSPwaEtj8hv2J6vcijMLmpNfAvQWdA6Ra3ULoHQcsUrkaRzv5KaeB9ubreuhBb4f7ZK4fiZsGBUuwk",
  "key17": "3FSaxCeaQt6P4vgKh44hKDxMhYf1sNJXSheq44QHgo8PgSbWKqG8BSFYV88RoF5WjsZEu9LacjCe5sRhsSXCDALR",
  "key18": "5YDX5nXWBzwNSuxhfSVsN52dnjEfqY3U9HBUTvSdYwCE7YnBRT5AzxN3ts9BKKVLQUrRPSEY1XQn9G5az9qUS4z5",
  "key19": "5EAwftQmcwJZuqrZCU6M7Ne3r5jXXsApFJR2VSBVafjhdzRMhN6YUJNwQVkJFLe4bbjYw9gQjLDSnLF8DBQMQvK9",
  "key20": "524bNovU7goWRjUK3uCyD3wgGVErL5WYZ69uea2Ls3WBujhqPsj5zuUcBdohgSVuDLGGN4rJTLyY2sZHLLbX6VyE",
  "key21": "4WmaBF8RK7vrhGnJsrG1Lz6DhsSMVdSMNbsU24LCWuh1brwyBVWdCpPbWjEYKKLhT1aFh7TUb92Rfv29Y4fD5kQy",
  "key22": "2p8XAkD3iefJ9fH5L439ztPUQWzqYCduKG4qjfhEtGok9cvVJteqp9387gSDRDk8yKm5ShZQcd9SZDQw5KUhwnaH",
  "key23": "2s4i1Y8yocFdZMLNpbzoqaBQ3Bt3P1g9JvQ9QmgVpd9ESPWAvrFGSgN85gxAMbmqfm2VCzG5TTERQxvq9Q7qQShe",
  "key24": "3CPaX6A9noAttgARn8L4Ru6m3bknJcYN9sYWUEpaWevv5xdPzVPHgqzw38xRh6vUZVnsNCHSP5dtyPAJmaiX2god",
  "key25": "XTsqwumUPLMSTq5u3pix1hcgD4Nve56ebUpATZLYj12kD3gFg3ky1c8F83izXMUY7wRKfi3HnQXWzfSXoAPHH7H",
  "key26": "5NcBRTp3Z6UzkFC2TW54XSaSVJpxfipo9DcMPYqXmRqhbEe9t9Umhxp1Uxb2faPCFwy8pLpYCR7zZtCXqfqQvcGo",
  "key27": "3dH9AMGZyv2eaNQMx3v4gvxFnYLLTmELJU3hJiwK6P8s1sbChECPSpPiAdVaTkRbpX4ccK9HKrR7zicAeRebYRb9",
  "key28": "2wxCMM83JtHXddLx39xRhg5Qy3mggzpQMXha62D7cMxz2ei6mTGbwHThYE2MUjM83enFmdX1y3gxtFaSDrofNFJW",
  "key29": "3jwmXi7fbKxUY5tMhWtQH1BD1hGnyhWs1NkLe3REFF6Y8soUNU6tXrgimiQE62gmfrHcG6ZRZzLCzpHLARiPA6PC",
  "key30": "2bH7Z9ZgPFetBSHAvprnz7UQ2xmGonvJ5ZaM6mVaVtvzYhgCHjBpT39U8vps278XWiLfDHpJhRnMLcpHedf174td",
  "key31": "5fKitVwUeXTn4hGBQMsqYyAgyTyc4EUHkDxfqhkH1Ex8c6p4Y5CYvKCNv9H8DinPX5ERTot6YVXKiKnq5YbRVrat",
  "key32": "6KDbXd5iqjmd8x5kaLAhnw6uRTRDJSzXKnmwc2ykbjnc6tEdeeu7yUZo8NACcNa9YhKjvew3sZVM95fyRrUseYc",
  "key33": "3ZyghmDAzcd9BhNFuRNBtZK4LM4BmQPKkEHpVYZCfGkjJwenJtHjrJsEWkaif28yPrYYAF9WTBFeKyEmnZRG8Csq",
  "key34": "5X9RDQU5RcmEYQmXMFvMiJxr5bVBkK8jc2yq39jkSH51nK8Fgqz6yxWgQohCY8294MfifBAJdiCrwDvDbYT8qSpD",
  "key35": "5w8QQ4GKn4JXU27ue1kAWn8xCLMCNJ1vjnCoXUYr1TR1xzUnHshqJ3SG2kZajJZbDQqma4tC7ZywVRL5gJQ8zMB4",
  "key36": "svQGQfdjXqWaXk6TbmcATQpKgrJgvpzHeZjc7yK6tuUfGiMgA9RaMtDZreFWkzKEZLHoLhVuvNViTxj9R8seKve",
  "key37": "3nREBrUkAUEM24oTrgPniiTGVZWxDJGawtoopfvgrpaF6xADsUfYL8ZjWhyp21cDsrwx6rq6Z8dzkwyCtAPsHLgQ",
  "key38": "3db4WbcmvjrxEvyoRp1tfyNAWqhbYyFeBDnZpiDMFqD3jeyfN96aAjt7ZbyxhUT1GaUgUwzZr3FXCUwN9LwVn1a9",
  "key39": "47JJQ926fBJDZbS7CgFsXiiMTUxeWzyb5VBAYajNE76YCvgp86MsYBLdNY3FW7WCWeEParhV4Xnd4wBTppdDorx2",
  "key40": "2pPp31knecoeqHHixNpnMKyArNeyrGK3pcovB2MAECnoJNqWPbLF1wmosVboYCcFCTsMgU2bsZ4XXVsUxRA3czQd",
  "key41": "5kfpkKL8e3HRqm8RRyu7YTJgscK9WUB15ty95CNNTFzstKH9oeQwmhgK37byogVyLrywqxuUFTKntfjoeMvTVsVT",
  "key42": "22RkF6GDRmESVUt53jKEmx3djzd1mi4hehHBogWW1L2JvJTUZPD4HWjUV6x5PuAvS2FnMnuuD5zuK48XQub57Y4d"
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
