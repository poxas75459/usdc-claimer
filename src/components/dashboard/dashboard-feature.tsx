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
    "4JDjFPb2GBv8Jbq9S2366APMw7oY5hn8iSzcfFEV9cC9tjbwgNyJNid6jcij6xHyez76QbjmmzpodQTM5D1ipRMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b455owcrTrgvfquG1hXoynhgVwU2Yir1bNZ39zvPTduabLBPo7wmrWhDtGTVS2STrHoBbH7PPAWkLr6CoJeorSy",
  "key1": "wjaefcAvNTUGWzf46VQfPZaT4heSwCye5Trakp1QfCfSNuS8upDardrBvecFeEGYC7ANDHU5LAhAwXFGgyQkShk",
  "key2": "62P59hHkEASwTpk4LFyoikvunSgBVhy5qVkELk921vheajXWioLPHLcJqB7a5afDNmQBUMhtebi2qhYkKVkv34fU",
  "key3": "67MgkhLQJ5uHvBB9mBPCXy1bgvr4PwRJmzx8BTy9FiRHPVLFtdpUTRBYwS7dKS4ZXMLVb8sSNDp8EpNnKQW9pvY",
  "key4": "2D4n48fBQoaR8qLxRLowL1zaaWEVos7kASYzaRHHEjgR2fZgEcYbYUcQx7siAbLKQM95nNmgUiBq1Kd8YTQRQVPo",
  "key5": "5PWgy6p9nhwUKPo3MBtNTbAA5nQmn5NWfMrCdgeg4wUjt1LtwrKyXnwXejrvvAugjSqqJJyvrd1v1SmVrV6A13AN",
  "key6": "3EYRXyp9pkb8Ym7DqmUcz8kCWHRkGhFC5SU6fpYG2RvSZN5S3fv8TrVgBL449RwzC9dxkgwwReCU36BryPX486po",
  "key7": "3B2UdU9YFBqPDMCeNuPHg2B1JCeZi4jE4DFFgdGxZiTM35D9hJGEELS5oa5Cvtfz8dnvFPPKeHw8qb3R9wbAvWVF",
  "key8": "5qaLo1hqBvcN6UbSerekK5CSEJbbbDbDrFeSXzGAVtnrmPAYvATuEEwvn1LHQUdpCS41Cti45M8ypfd4gsDRLDz5",
  "key9": "QMHZhVJcuRaDfavUxzWu1xr621RUKXdUuY2dU9kDtbUT8qNL7ceoTR2FS222pTg2brik9WBzPUd5VDcsT8NKNVm",
  "key10": "3uEqroQKTK4ByD7b9DLwLaL4FnckqG5XSsh1JXqyVptY99ca5otUUMdpKUE9y9XPc3rGLxQeRrQVHLyZUnmH4n8r",
  "key11": "yPWcTT6PGFmvfTjs4DJwurrw8hoPBaYf4HrhpPKgzgRS6VXNcANmL97YhGKmCM64PFnaTSwqByYiSRpawHcApnp",
  "key12": "2HDF2HeA8NyMvVD3qLA1SgRXV3BeJXmxBkPyLGfujKtRAL1iACqidePYQ54oVtET8CJS8VmFzzPF6tGrkopSMjfa",
  "key13": "4qdnfVPWJbcSbqdrsXYLFVwK1XxJEESn68tVuHSKMVuoMhSxSbBhf8tLfiXtSyJAxFN64gcUDX885Jrqq91mjZ7F",
  "key14": "5M7KS6137BbKwfKVQBiiS1Xw2B7T39h4zjcvQP7TcmWfyNtWbeRhZpiPNTakC19wnVGjj9EjkX3pqZx14dHsJa9i",
  "key15": "4Lw1binkF3v7fAEhTjvmgUkTXSHwzdSLbu8rxdK6mf52M4BGzxB4vJc7uWZSh8v8RBCM7gFZC6rN9hjvZxZ7mhaV",
  "key16": "66pN2WFS2HkD58BpHttUwkJC1nfnHZWvL3uhDTH7HLq9Cj2kZSNiwtaG5gPqBPBUXPG5saWkc7Mhp6WkpyPZ8ovu",
  "key17": "rBT1ZnSjwHjJNqbbVkwuXYgtF8GcVss1xydrUQ59rbb6T6X58MpbUFt5mtCPNDnfk2pcEaE6Za3zBgbeWtbKRyQ",
  "key18": "5wBtcxRkzY4t1yW5qEqxZZ4gSXv2NgzSwkri8boAjv9CzvdJsZu2FrwvyPkdmtFimNHxzgwEiC5BMLnfGuVZPgzD",
  "key19": "W8L6ETqw72QutTkQ5jwaREJsD48a9wKj5t5PHCQdvtHj3H1XTvRyL27CBXajT1hHgN9CdUK3LzxPDePnCdLSjba",
  "key20": "5RQMkYTDYLWfMwjg5fLZoRpcMQMabCiugQ1nvhhBdgbM9NfSKrpFe1qrK5tcHJvNaCScdmbNZ7Zq6wjGfv7C4abh",
  "key21": "5SmdVu2qpDA8ocgJ6puHUFjPEtVRSi1SbQDpcbKMgF6V4YCPEzhKAxofZLLwFgDeDndbhtNKrL8pAFu44sRZet4P",
  "key22": "5kKL4sj8eZu8xpBJXkemRUvMn4BAMHYS4LueiQfupj5MpFTLbhwwAT8JYQMsEwTSiB6b6TifKb5eUAo7Jnh5FePM",
  "key23": "5YqK69YkADYeAAPfns8mymsGB1z5o1gH1ny3ShuYKVtKi88j51RbURVZc2r2KXpgpuGHVj7oueSz242StRPJKaMN",
  "key24": "3z8Ausd5CiT8YFMAkW31F9jqky3aZ6rfZDQadGTT33rwiB7t6rpjrxpNV7KNYEmYwAtteoLwY2dZgzmjmieWsRvT",
  "key25": "43zANA5LTBjEfQ3BgFTRmd7Qayai1VLsR4tb5Zn5TXRApKZpfYMFEjPk1SGFwuP8Byq8g4fVwXpm9xiDxFzd9e6f",
  "key26": "6bWkZnBBY2TG4pBngndSDepSfV3XyLx3Qqc7QgRq75UuSceDsVrm8BaygwcYi4Z2FZZp47C4hPes9pSJsHkvWES",
  "key27": "fHq8fcZkot8GsPJFACCfnSraW6ALSufxE9bZFCjEomFRF2VeXCyxG3CLsM9m4iQtoqJqFJoowen4un7k5CsZBCJ",
  "key28": "u8WqVv4wYBGLtqFoSqsqDXV3RnLqwbYmpER5A96TLCFt5RBteXK46J9Ntxbbkn7yZTu1fYg4EnUAqP8NMYQebmh",
  "key29": "wAYbYMrTTZhWJNKxAYj4vjwNr9YYDh6GgjvNaJkQoKLCW6ym62ssiu4pvrvQzzick5QbHBzAHMX3jV1ipoSNWCt",
  "key30": "3ggr1xf2BobufNG77k4etRKjZevNnck81GHpoWSgvFrZxozggvVLnLs7ndudr2VwKo77MFwkZUKwUJNuJhdKv3F2",
  "key31": "3AeRWdKsTtLY3iaAVcbLRTLHTkF1CU6YcN4bv6EHfnh45UShWkHe8UySTpVobEYhHy94shNjTzF4zgg3Gx9nosDK",
  "key32": "51Cuc53k7bfUfcKL3y6vLvyoxK3kVPiaCjbwByp8atFEd2FtDnwWhqrhuMnp3j7jrL7xWJvPoEEnRQuCLxT3ErRv",
  "key33": "39aEHqVvPJEtFKG7dUom6i4p21owAASh6RJpMe8QNjU9zNs5LpQsWRSnwv3kL5wVqMgXT6nHehrzf1SbUpNMJ8xG",
  "key34": "3doUF7uqBckgR4wMBRwTBjKgKVEGopppVYkQEWt7zbidkcBmf2F2JzHwv3BhsTatsHGW2Ca6KA7YqFaYDsnprsoA",
  "key35": "cCZ842b89A15GjnqGdZoYwWf2RJHXLAAvKmCDSWjX2cKdtGiNCQVmjmPPFPiGr8Lt8Bxf7eexte1o7Km6AGr2hP",
  "key36": "4gdLSYho4Ygf84fesutFmP61hTD7sRGq288HNBeYCYxXpVEC1WSVqcUUwfakmZe9eDFpR9dTQksdihBGbxR2SzzB",
  "key37": "32iBzZ6CaREDvNThfDka88DTXZ5PuA3yAsZPppHPHdemPu1to135GHihqGV9i4Ba1HYmCPtncDV1aphL13cBfk9L",
  "key38": "2MiKdh8uFve2yMfmRTJL7ZMxfMgozhToQe5dzn5ZJG1xSEzfA17siKteNnzuvRop8Qh8p6azntxmVBEPbVDHnXjg",
  "key39": "5fVrmYeG5cWqMAdefSJoWbrc3UEKVTvovaNG5zexGnEkA9eNkytNHuUcKAavLPgzbkuuqtM4LhnmXdWMKsCX2cJ4",
  "key40": "5rMyuCyuygpukxWts2LCVpGDQNGBnUdRRrg7UrJ9ZW6pCaLno98i2HnywcPVoJcqAP1KneHuXpf8JoeAUZD2YDoQ",
  "key41": "3aYuSeQn2de75LBhyLbD8wSveqbVASUozf9cGRn7qmvjbd8XBsXZ6KAUDYFbXGGmbiUZG2Wa2zSMTKX4TyqdWuDg",
  "key42": "39tnWqnG3HgDLyQFYgBppHs4qG3qzjWYFjHdRM5aKChMu3pTiY4E5PzBzwCR7SpRQ5PZTopmWQ9wBHigvdpMBQXE",
  "key43": "4hJtewzUE68CCFfJmfUinZKHgRYJBSzySNrYP7jM3Jk8k6icuSMQPWrPmw4FRtU2SpzHxNWw8R6Xk2GtKQy9wFhA",
  "key44": "2jszVTGvp6Chz3HqUC4MpekNDpn3Lnvr96UpvsgBQ7PsPbq8F4pFtvbd7fnz3yxunU4b5Vw6PfEHprdvWc2VDC9k",
  "key45": "5d5vtw6jbY8M8LUVGN9LcsHSjb6u1QDG3GdFFwDv9iHuyR5jgceBWapDzmN9qoDfhAV4sqGr4QwzKGtfj2TozkxD",
  "key46": "4QABdEp2XjQTiS3qUdk65BSd4Fir1VLEWenP6JQoYa3JjgvfFPFjgAavt9zV2ppbdn9L3cwZhQ6tmBbu3LZHLBNw",
  "key47": "4z5eVniGzCw7Xb4pRzY45c3NHw9hnnfZ8unqDoJ1zyr5vHcXUzw7kSm9URcKo5axexSFPc9T9uTS33zmRRmMdh6c",
  "key48": "3UZXwXfNajr1dde1UrnXqrysQJzPbjq3DwYtPFXv2qeum7hSUcZuCJYHMuNPdudkLA33f49bHHfihMtGqRew6Qfs",
  "key49": "2ebceoSeaZSKg2RJdaPC9hgYT3fQofiusLkwwUzBmuo1A9aqqpnLbiTUoDbCMoTQsgzu5VUpje7EbJx3oCiFmc3L"
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
