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
    "PCM1WL1db49pCpyR4wXCupavTvsKLXNA3VRBcGUUaYKMERfkNrZnGhBzUo5PheNuGXbFQv2d6b7XC1XAxNVnCcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qV9bCqbwtiTXdqFwtXHcoMw9YuYBYJKYn25MEd6sye5VwYQLGDViK3UKHvrYm8mStM3NGuDKxzdRRwAyEA5rsFt",
  "key1": "5ZiYeY2B1XjA72p9RcpDoP7SNKUk8FqeKRfBLgSmtuqcQ2TKYsXsMDQ9BL1ZQPk64A9kLQ5aLfizZWiEWXqvg57R",
  "key2": "291nQzx2HCPF6j8cPZYkHTrUP2tE9RfLNt441rjLRvNjxNvuNqr3moNiBq2nwdpa9JTZiK1vFBnnKxTUqnnyK7xb",
  "key3": "3iWwPpubLNQ2oJvwvr3VnuTuCcNM6DjCmEzToEMM3tTgrvxjmS1g1kg6ZW7GrNF7UTtmB6SxudcEDyYuM3myPEWE",
  "key4": "KznUBTGQoxJrLw9TiBAQ9hS7qiNuYcVussVRNYExPC2eZjkF2yBWr5L95f27hTtvqsD5fzwsJZJYuQ4nx2ZRGYs",
  "key5": "3VhoRUXB3o7FfoL1yt2oHRWrVWw25myMgX8hHwHDoVhZ4y8bt5rYCf1KYKHpMvmjYRorchtmVdSb3zxSfNeEh2hX",
  "key6": "Lc2Sow3DcVLbr7oBozf3ZP7HanHA1FA3z7ocBpK6K4mg9BRRV332mefcbvgLvLonJoqzabcq5LtTgrxWrKzS2iy",
  "key7": "34PhPjUcBQZfBaoSoAEHPRWhZr8hs5tqXLJowUmXpy4B5QzAbmzW9yae8a8LZrByFfC1jGdHLFUjBu5ADq1bThkf",
  "key8": "4EywV3vWLRjxn8ezdtdRUtvKvzpSzZMu4wq9v3V4NCpGs383CEz3JnVAZXTHLQzmxzDTGFtq3en5GL6m2CKNwJjW",
  "key9": "492ZgMbPRadfjfBSyz1rnU8Z7Mwvvf7DrPo54zoZssuFpr7WRxmQUMBUbnfg5SxFDC8BewTC1GmoiFHLX7jJJEwa",
  "key10": "2Kbksu1e6yJPC7YRi9XEzJGqktjpoxtREkyHuowav9M5aiqtsiZ1epA5c3huxwzLeRUpo6pYePasvPCZNT9KxceK",
  "key11": "5pnG2ubNFbLhxTbEm1zDZHfH6bybdczvui2xgSdDj459B45HJinKz2rC8dK3p8JY8ScxdCxYgF9NJzriMHXawiDD",
  "key12": "4roBsZCkAT6i2nFg2DTSmsGzWAgpNC7mZG7VV6JH2T276aCJydQiYkF83R1o1rHxwJjKQkQsJgmX6p1PUEbFmCkf",
  "key13": "5EFXb7oGbrqnTs96GYCQT57dMU1J1k4GWVFEEQfKZKhBAFF64YbzPAKkrCQYJKNvcDWVg1X1rroZ4v42qxjTtd1m",
  "key14": "4aEyd83YTsFQpQ7gPgqZwxCnrPDbxKA3bM8yk1sqAEf2xQQEN5RQz3zoHweRWHreRdFg6MiGPW3U1RTKNs9Ss3Qb",
  "key15": "2Aj4umnDgQ4WWP5GKti1ZYiuLaTKtsugxwVperN9eFGERhBXsPiTEHR3p9uNncsecwimZWogYg31tNNEnxnAAHEd",
  "key16": "4DM3rXCt1uKQrHc3rLSF7hmECuoWjKwbQJbfsMbJCb222yGFkd64Bb1xtGsLoqGdxHHzoJLegGtookPF2wMKufpa",
  "key17": "2oXqyLBPY3Sme9nsZoEy5LwZvAGBp3ysN8Co1i8qHVPe2NGRPjtGyzzogwcz8JaLQbbxwqFUqd9vrRLLdENUtREj",
  "key18": "DXF7Rcju3cLUiMZN14GgnjnCw44jirqVX6Rn5U4hr8iFfB5pboA2A2rkQCBuyMuVCZUikfSGtkdvgcYHbARFJFq",
  "key19": "Rpit1Vbq6914byXkz9nKazHGEmNxQLTm8y6bCaEnwCJmLtveV2iXgzwQd3C6whvaey9MS9srnRukv17HMjP716h",
  "key20": "Zvv2uHcGSKruRqgChdxTHgC5ZsbrZCLph8DCLC8uVC2RG3NQTpYSYSwfMDAXCQXWbcoKPTJWKGHH9sqckVB7pDD",
  "key21": "27ae3zfr5tw9DGmAbfjh4edjwbYNAfDa3EWUnrR9TM2Pt6PK8prSnJ8tfWdu2RGiBV8xgS6PtHo7A3PBVHVz5xF4",
  "key22": "5sypBkgiT3GQkDEtvU4J5ZzsaqWRpo6iwww5UUguDzuKnyLT2M85AaHXRrYGM4U2WuEzNvnSdrczpNjmzELcJ7RC",
  "key23": "4bK8AmJq2bAEvWwcYf36oRyTrg6H91ZtR6tKWHj2Ctf3WzqroRJhbDnGxKX8TJ8eAxeryJhNnrWBT8GF33UyKAEZ",
  "key24": "2dG3y4vfiZRqwg2GkqbsJGFYXtyxVyK5X18j57zcgvfV52vHQ8hb9JLiFFL2sEcLsathrwrrrE3qV2vM4zADBEaU",
  "key25": "3hkqEUWMUVN6zPLVA4chx7CKUEHK31YN1DJxYWoZn9MMQacmm9vgRzQ5Q5VXXFJK46UM19rvLXyfzcaBTbdvySRr",
  "key26": "5RGffDnXZAzs9XKRwC3HGGpbU8oCw6CGZrxpJDC81D3KahVVoub7fdHCwmzkJcwkexmzKEv2H9irfrsNQZTS7RTG",
  "key27": "3oziazmbCBou2CtubrJgMo4NkERLfz9c2gsMUWuQP8NEoBmrtmeAYezVNFB1BSZyM5sKmZYtBVLVHkuaw7AfaJb6",
  "key28": "4wDuK9PgXqKdrrZUcm6Up4ysmxGtVZuGRVAHYNvmi5UFiPzN7iwHsnUWngZTXQuLsQNCgfJbN7iXBbp4c6rK9Uaa",
  "key29": "4fwEyf9PP8e9SFXjrQThSpeRLQVnMuKsfyxu757CAAz36UdWT7JTcgGT6fZU8mMccLorVbpfFFpUtFRGudAw1Cmh",
  "key30": "5UpegNGLa1VBJ3wjEWvBe9s1nrTTdzR6yFthQRh5uSaGSyBjFDAW5xuvLuMyisCRvLFsnYbhP2wH1JJgqvxKkX4",
  "key31": "2L2cuENnnxPvQ9P94eL4poXTaup6Sv7w7HUReXtEbsN5vfLVTE2KhcMBEkmJeV9nGjJSMMTwNWFSRTtx8v2U9V8Q",
  "key32": "3rU4QZ8uCqyCGibthXygvJoLbe3h51BwtKPe5zG1319b4qjZNkCd55C2ekq7HsfHRzYfGvhoR2XcMk4v93yB5KMr",
  "key33": "2HwaH6qXcBETbKAHabZVotHoMX5g48GL5bgMT48kVKxStPTeuexV1czVWpppw25HfbhFxsYpzjmJJhdkVbhHpHG1",
  "key34": "3Sqpy8mM35ja5Chxc272581Xz5vF1UyYKuC2WcbQrLGagqAzQc5UYSxEGdu9fpaVe92aHm7S3tJ3PL8appuuaf22",
  "key35": "3JoFPcUuDDakp1X9McgjGQuy1Jf2wDZsgBMfFg5JZ56MrWSR63kFfKmGcS4ybo35edQLN9NqCW74P7yqEQ41dRPR",
  "key36": "5g4bLcJsZjzosyPhYtvBUSVizMLtbY94DtN21CV3jLJsKbEkZNo1aGWkBawhVGobdoioZC2gBewqZzHcPPNg4iyE",
  "key37": "5GNan8J5TFDJmo7hsDfvVtZcfBYaEvZmUqSucDPw7v2EdYbCjTYnUXoZJ95BuQsrkq1Q2QR6CHDio4Fc8XAuuHWH",
  "key38": "5vhYactWrGQ2FroKSYGgPdEXWHZnHd9QTVbbHvghMf8hUyyaZYnyhPni2coKqnALKFg1KPoPgmQy5tdh5qdkxK8d",
  "key39": "54yWYfCnnVQSaJCHAzmCQDZKGBshYifa4rePD6vUZHGWb9Nbh2fSxs8DjdbWHMtgabFLNrJeQeRgQjA3H9cSqupx",
  "key40": "4YqDmGrmPE1sHdKHHw5a2RUwamTUVjD7ujoqTLpMPEMrFsbQiE6HnkEXm98n9vV17sRpPuNWwLbL4LFSp9QhKLBY",
  "key41": "5QA1heAtFVpwYC1NYtG55rGvFa34CfcbivtWUNcR9dWfzfYfgSowqyqvEorBeZgCQgW5eHDUvcCwQnF2KngRapbi",
  "key42": "gcJCUR3x2JoyzJuCWDwvfot93AEqs5r7KK8PrUdL3isiRBSDHGgpcajegL9VgmSkVXvSc1KXfgxpn96MNEH8b94",
  "key43": "2kdLssDK1AWyP7Ux5tYZ4df5c1Q5LqqX1BU92DTND2hpaw7VbpUGXLLhDKN2oJUReaePJPfurSeWQZoXRsKvcitq",
  "key44": "3NhtbpoZFqyeKFnV56fZwq9w32U3nspCLMY3sqUjE3HJ9x8AQTtUFNfbkqHWUcgdzFmeJXyW1XNAXbXE5XJ5sp1U",
  "key45": "3WH9TKkPYMLutdmrbZCTdCZmPSLy2oDKaD5xE7ZUhiajJqeYmtcDV2nWFsjRaXuJtLSfiPeKSxn6ogJw9dv3GBLA",
  "key46": "2VQJZxSHZn5jr7P5SgKv5GpqrQ32oaBh6sP8R8e3DQGoJd4pbba4Xqf47Sw5QYGp4U1DLinX7MuEFZ8uRpEPMwMt",
  "key47": "3n8tBKYUD3w25GZyq43Fwjtm7EpRAW4aoHzyb1rTFGnt9ahz5j2bvex4KvXontUoeNWwbon6zuWgmfpi2zE9bYtZ",
  "key48": "3d2pRbNeSrR94BWFpeZEcwmdWbijEypPoFcjmcTKbaMgn2M9quwKNdWpCeibDzKKkDGBphC9mWY7aq6CboFYTj5Z",
  "key49": "8fNzWtDFNd1gwSnesXZjgpq5AB2wH6MGQjruDcAN3TTHBRCYXmt6M4QfDjWDoRkpssWKkW2mcEeD5GTBFFoR5yU"
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
