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
    "4rYXCZwxRPUNDjUWYBNZxMP9nTf6gcQ5BhHMJ45Rz3VWZnKhrpSudpZgUfe8YWPjZ5DbsQoVydoBSkLA9DsHtXJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XpNPQ5CiaaME1y84gmmGooB2j1Sd4ig3m3PtVSGkttPGv1Hyqv6hGkrrjXexNBbTGqX6p6Yb6hgGWBh7FH4f2ua",
  "key1": "hpMMA8khmsbmuqETxbvdbK7tSJoUqm9ZvY8RaWyMeeKG4dv6jZBDXUKxJh3yFYPvdBGd2QDA5kppqJUnWEAdtqQ",
  "key2": "5CGu7iLBv2e3dBebKbqTd4gKJaeoDVw6Dg9rRdGnJeUUvbeQYUMhvXEeWrhGUrAQvd4V8F5GdLQJKnLRZWVcmxgC",
  "key3": "fMBVo66NVKitfs8XYP5TFtmJdmJfMitTb64cQoL3AYbtkkiADG2wJVEgfBsCnSvfPua6our3HJbqJ2v8hH1HVSJ",
  "key4": "5B8NSkUWZr8V5sr9GYnPBtS86RAvniRaGzm4KjJHPXRGdEZ94BSWohtWN6yipR9wfTPTEzLR8cL3GZNnwNqyoGWp",
  "key5": "kNu4trBoEZz5YvheBApnT5CsDvgK62VUsWRrrKQbE39nTbFwbEGNJ67mAnf58Abo2ffoPa4mu8VwaMkGVTH1Ufa",
  "key6": "YotqEZRQSYWNmRjwR7AR8DkZipScStTuf2ELU1Lqejx76zdyEbnUBgVPRxXsHfVoRLMmYzdErZHfpoJxeqgLsEE",
  "key7": "FpeJn5oJb7VLucw56cP8KbyUQVBe8J9d5j9iMVpuwatAWpjanjdVeH2yRSw9gk7if38p3vvbDhffskJ6gNgGQoo",
  "key8": "3UaJknxHANRHP8k68CDYBJtYhN8cYp4HsxqVCbpiHocgVFn1U8tdPyTfeWmsBJBF7iBqDGoBvnmNsVwwvjuJoHBj",
  "key9": "2nczrZiRawd92Bomm3mUhWgEbjjCzwcPiPMyM7mmXKSVmn8dZcHmb47kMgbuzo4un4zPM4ZxGUF64NhnA4p4fKUd",
  "key10": "35REwWRkiFYTFcekDAar78YJo9zRa61shYJbcSUorj9n9VkyYUjna91cXv5D8Jbd6BWYh9dxyAqgVaCoYxttpoLZ",
  "key11": "221ReK6f8CYLp4sEQLDvyCntuwSq28NhvMZ7TuJuFaxwmbMU1FpUAQNqWXYHyRtxobqY9bfJJfH7n9rZErYT4Qi4",
  "key12": "28KdUTNTGohRMWcUqQ9mAFNVfuGJkmDoxgWknMUn9JpydrbWMJxdBuSyYDZPH7PySjx9ca1pDTSa8uUXHGsmt6sW",
  "key13": "CBHPftYoYpHfSiPQjwdfxSxhKJvsGjb3dLFjDuwtSk1dkvuvDHxqiNEXAxy4vzHjafththYASbmqxzTYyTo12mU",
  "key14": "3eDWZ4ercShEyEXtczuUKbwszVeTVH5AFN5C4j9j9npjgXSN3AXTBGy94MqyGM7R2mkFDtdD8NJt7KRNgBxhySVB",
  "key15": "24qrcnSnfhTyRT958BGTjsH53nyhxJqBhY7Lmf1B6U6282QGveUb6vR9df6EkHMpb5DmNWFUh5Lumdf86Q154x2s",
  "key16": "2ZX6Y17Y7SB6FodAX8BnWzjgM6SimYP5vZMhkT7N7RtduzFdgpxLtFzs9XwjekGBAMkMi8m83ozCU6V47yJgqZf",
  "key17": "HJ1nR96JXKdJU4YscjwpiR3zkd3zM8oLgrXkjkM2jFsx5njnaMc35GrbV4uGQ2oRMQbznmr49g4QMNxg9Dqmtfb",
  "key18": "2n3vuYTodZeYQQVhMQt7ZpernFQAu43T3Qb1ucGZXfnC8sVq9Yk1UNebhrttLQcWbQvGBdan6LYu8S7XALLYgRgd",
  "key19": "3uj1rnUfcNGEZSnHWD8EEQid7nrDD786bgaWxFThviuFZgQAw32Z6QaYxXw9EAmoDh2Fqb4NzyWZvJvq81rpg7Zo",
  "key20": "5VAuaXYeYzGko1WKA4fbU8oFrDqzACv7zcreSrmb2zvvBx2BcXA6mZxkgn9Y45EMeeyFP5LBwbxUTdjKG1xDx4hW",
  "key21": "4pA6Csmm3yuTnAjNDTKE7YWMB5LcWnsZBTeHuZzEH2RSExZ8UtyZW7hQR8KsPes5tzVi8MaB4bCzfZcbnd1h2uaP",
  "key22": "4u5MTrSAsVJZDnnM988q8ecXgwPS2FMP3mhhrpFmds6xarghePPTi7EsFrYk4dNgmfrprsQKTZKUzN7iPvoSkJng",
  "key23": "4xxTPU25r4ZdYmxeMdMGgBBt4AkbKF74oupKxgnsNXXAfo7fvDbL7Eah8m2ZUDQEJHvdHr9jY8YUUFMbnu36eu5e",
  "key24": "2xVum4mN84ebDjuPkbpuEy6vC91i3AhVjJkdU3MFfJWG2M6bwzy8YtFVu7ZnLwcJYy3JVsVpajgiHsyLqf1CjkNJ",
  "key25": "3ALr2QuKTYGRRSijDPsafENrV56PjggUL2aw3c3WpEhAB9VR2FK9LzLQhmK8ASngQprcWT5cv3Zs1igREcsVH9MK",
  "key26": "5pyHd49fpbftKy6oHtMtNKx7GQutQEHZzFRyPVpv8b11samC9xwhqUig8tuoXBHkCHXMfPHFwofEb7YwtZR3SncG",
  "key27": "6385RiSpxybKDgczFiBFbaMNdtwsn761kkL4S2z3KJUgc36Hce15pbFuKAXmxk7yjj6nZfSP39xWv7iqazp8ov2R",
  "key28": "3yLxkzaKH7fTgTiX6Wv3ur4qrG4USe2PwK3dsWZgynVcyDkb53zF1g1wcLVyRfSx38KcN87HKShBEWJgjpxWF5Xz",
  "key29": "SgznzSjm1Qb29VE6HbNZjcESSPYJfEmRkMKMYpvh5oKkc4ndsBbURxkbjoR1yiYKNAzEZ37zwegbEtRikjJ1G2x",
  "key30": "3nPEJ5wsbCHxMvqdND64p2rBf1JzXPGf9mR4NZMkA62sL7iTuXfd5rStwbbYbMD28c3yNphJuxBwqjAdbqRNosxv",
  "key31": "2z7Ug7gjYGecm35rqEWdrVoqKYnPdMTkusTNLwja5XFns6mMz4RzFaMe1hovHCM5AVxXNL3ANuGWMgUZLHGdJVyB",
  "key32": "2YGXpaVkw4TgHTLLCW4qMZVasrcTDiGz1bMhUrcYYVihh2NRCdNWkazzsbi5vyj86RXQCmV3uz79SRTDrsX52DFY",
  "key33": "Lcop8E8KSr8igGE7EncEP2prNiUbNcoQfSbhyFygYk2hKhLh3bAuyzqZdfBebBFpvEZzFombbkqvQ2rAKHry81L",
  "key34": "4gNiEKzJujhxAYkJ6zgizypE73q4oVASKR3fonYMdzbJrpx27gW399z62nApa8LYkvZX84gXpUaho7pokPVDAaPG",
  "key35": "2Z6u2wurm58R15SxM2tXPRcXFhPrpSRVZr4WLPhtZeQj1q7xHdciZhb29UbdZMXYwiND7kJX4jJ5cvnMUonGwCMM",
  "key36": "43emYTu4Q3i3CZdiGyZMUVXAmdryZaeqs48nsb3SG1nuCH5GiLKzaurAPhMihm31jWyz8z8bFVPbDEZQ7hzjszvV",
  "key37": "JJ2hQMw4nVN3PbbMX6m4w8JXjfbLXvqKJ6NzcxF6nQS2ughKDrQ5kBNhKyB8wku4FegQNBQcKiMTuVQ2NTjNWFt",
  "key38": "7tcT769fm9z5nnPLJwxXsRqBxHRZoemATjDaL9F4Cqq4X9bNy2FwvRYnYp7PF18sn74NvpqeW9iwqUFZx9mJLN8"
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
