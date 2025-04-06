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
    "4LFH5HhSbY7tQs99oA1oUK4RLtWR4C7LvxWZJEM5ULv1tWurztFPNQiuB9824H99g3TNQW9xz1yAA74Z1HyJtBHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2snsYtRwhUdt8eMR1sHiiMTX31czLC6U7XvvLVAT3fP1am8gMSo9HXb7ifwt8grCVb58wDDjxbWcTTUwj4ucKAna",
  "key1": "2cz1RPhZM6ptZVRcGdzCgd9kdJrC7NPVLCGGTXrw9xAuEQJjn4hCxSj1w69JsXg3bKc8uy2foA7WmdkG9EsDw2DB",
  "key2": "5iwAwFnGmgbjEnR2BNFAXXMnSgKUWLMB7GNHPN3UUHirwvMoFPzKwrxamyC8ZwDubqhGnmF8zWDDXMPQqUVzKotE",
  "key3": "LXWrgjith92DH6LXFN76AeHKGv2Y2NsnMtk63ioEJTdMrLtD7x1xRG2TdRyTdkw4ownRVdgpNuB2ahkvoW1w7XQ",
  "key4": "MLGLhHsC1q7V313Vdv7qQP3DTR7La3FQ5YGUCUzeRKLsTdPzGidZqwjue48vJ7WBD4ao32HwqsUqPsbTeExdUiW",
  "key5": "FCK3aTKjQU7YAPdNuVU4GcmPzb2jf8A1Pb2bjGdAoxYNY6bShceHyMKHdtdB9wLB73A3gSzwb53DiQx3G4rnqap",
  "key6": "4G8K7ezdaLK5CES1Ffj5KBpzaNxDEJu4tn3SV45ibfLyLAG5kz9a86qTuTuRyzHiJF9iMdRWQ3SmGg5jM7YdmTQG",
  "key7": "2EK8UgsaYsdLRBL1YGFB8EAvMoFjhzGD3WEQDrkQM8n5JJWZTv1bYR9gZK3Vfsa54RY6VLFr2ob7jh8BR6sHedPm",
  "key8": "2hB1amvhYMnnsFfyHkAUyk4mCvPFVQjSYFhPuiLJsatLodUbj174ncyswcYBKjt3Awk1efCu9hjRiFuteHGzNfou",
  "key9": "4n1F726zGokeoh9QsjP6vAdTwbewCr4ynJjf34b8cX6xR9f2oGaNFYn84jRchfoQk3b3ujt9PRQ9edHWFQuHJZ6Q",
  "key10": "48gaTFZb8WMC7EUv4JBukFcMij2ckxQct8Cnv12w1HjWsqmjEFcVrsUqoKo5v69vjAcUk64LmMRW6QNZkjXXptT8",
  "key11": "59DysYFsX9x3JAYe7ma9CWvhFkF3bRYrSaquSPpKCSZK4vs1EjgWyzsiByF7TCZsuN26Nuc52jpErM8hf3ecD5yo",
  "key12": "3xBSqmj8oPA5f8Pi7bB3ZfoiZ9Zhmpsx2C1FjrHZF9hzgzZtWAJmhKfM1ZjWSmRTpHZJaty7gYoA93YDuJ3iBwaE",
  "key13": "4cAUSqvJr9yHPD621AkEB8acuT3rCQWv5xh2CvHo6c5Xdkh6uP8xpEirtsC97ZHhJ8KnAZbWVLtZMUuev9aB6F9v",
  "key14": "3nYpAKp5X5Ej2BaXNoAXyaxYSSoYjxoXBkQEHfJXU4pW1EmuVtAiFb6qxWnPChkagNi63g5cwuQqaCeJ38yTzUA6",
  "key15": "4FnPvPPKCNP2YpXMdRV6njgpSsaWJPKhgdipQjwjiQs4S61sz82t6GCzEKWSWzuC4hT1MwNMtDr6fUC5b546taXy",
  "key16": "2DkTT264MN3CY9EAigGaNj8bRgvDL6seSDfEEBJV7GEXM39z7LUaxavTRovqwDrJiEm5pj6SaM3kWP2bTxTbzK98",
  "key17": "4bjeh3S1hut2v37fCfD6Zivj84uARMAUH7YSZkUyNC8Rm3Wsye8UjHrjEuBEvgHZKHJ4oVuaX99ucc9aaoJTAEQh",
  "key18": "und6gEypveCcUt16LZNrPFFjnYXc6GfmsnAvwKqerPbK2yxSPpxg2efZaPnTe65LBJPFv3hoAbqkqZZzFirMKY2",
  "key19": "u7E3GHzBQK5eX5fVmCx3wBAqGEEKEuPCxEUTyeySCUvk1FvPkiZUiMsPmektsynKnpfspaoYbymJdf4SPuudqSX",
  "key20": "4xyrXe2brdLxxLiYvy3wccqhHLQzpeEge3Y97brtJtijLwvDuohhCiS4m6VH3gWcFkGY24YezPFVTvprGcc9CSTQ",
  "key21": "5CBfXkDiB3KpS2g3VXxhAE3fQHauwqMcripn7apS3Jsn6wf9wMcewR2kGeQhtcVJ5LZWfsoRVLojv8fXbFs54uRK",
  "key22": "njApvBXfYvte1fJ2rfc7PjPdavJ5GPkMs9FDEbhrLEcVywZaTXBXyxV7yJuP2qrttzEfwq9JpH4Cu2fdmHqyCmf",
  "key23": "5WncYDnyTyjF3HqyBzcjvHcHAPvvf1kgWe7XxbT2Z5KvwKnJD8M594GYjEBzJdrAD9wegivwyMGnrHutDsFcDmhy",
  "key24": "3HE1ZdTp1NcUeH1GuMUR2i4EVhsYrf7QTFT5GQ7oS2Ycrz2pLoXgCw69fFsH1mxmi26dMk9rNCz5au83VXzFe9Zk",
  "key25": "678MVbj4JcEUcvKS6veXZbo9oND7wdXz5LingLvqKwdXKABw2cNBhTtnxCob95KWMKds3uQwY8BHrY4aML2S34mk",
  "key26": "5gzfWPAgg2ofPP4eZ9d9FRigwDKW2xYjpzWBTY1NABdpuYj7yaYDLuLx779d322x9cTrjukfZ7bf2URwMNShRkPq",
  "key27": "2JbAA99aq6sEqbWu9oDPpGmJa9qLzozAmTywHfo6Cax1tAKz9b1w6kiaUYT6tY27bFWAG6j66tjX5uL4hXBVyr1A",
  "key28": "3jr6Q9AhEahhzyLGsFHPxEppCTLSLvgLmYxiLVG5NppNAiuivGqRVyBxSV6CYt3qs195eXVgNN3GeZb4arMC6kQt",
  "key29": "4nkizycXJ4L5A6h5E3tFN2SmghZdRHtU37c64dYpMGV9hrhTVuUzteAQYr3b8HnGkuQD7gJNAMA7LHPsPt55HEMQ",
  "key30": "oe8RrBeHXrcbNv74ExxvDeqVgBSC39a6XB5DJYsoV6rSQdKpgGtWGC6iXGbjXKCNby8JykcjDasfpb2Gx5Ertqm",
  "key31": "4r2f6WL4Qqz9AMDrPbLbYxKoBJmq2MbboQ48XsfvyYjU38ftQLgKbTLgyfciP1c3HBUnzfbdvbwGe3jxnR4SK9f7",
  "key32": "4W8HYDpn6RkTWojggtoD3UevD5jBeVfYTgb5SjfiSsHNL4bTviMEoEiZG7HCCufAT8kdfsrV6b5LsmzvLCBBdasK",
  "key33": "5h4Nu7kBLixkKaSTLzh8CMBm1g6G1AJkLdhqQZPDL9Ayag9zofPHpPbxxipSGTFM5MFZt1GinsUAXaxYvbKRi1Qh",
  "key34": "b36sBCgjmEYpvDfSCskPBVNkU1u2Zuqsu7vYXUSchv7o4nGDUEnvpEyVoVUMiNwXw7zYbrPyzwjje36V1NT97WZ",
  "key35": "496nrD4H1RZ1Rfggj55oH7JcVPrJqYkubtaB1qgB1hVQJ4UeSeozpW69mWuUHsi4rr4at8AwAPtEZoo7TvivCUyc",
  "key36": "5gV5bpitKb76uLKbxaPZtxqm8qL3w6msE1eWMCNUaT3Kw8nYrgAtCYPMChcHEGHHMJVZfdQTLYXqiGzmcrYmTidY",
  "key37": "5AhgjzgHyTfkgvqmGPJyCy3xa56sddTg46TbcHWzvjBTuxKqFUapzucJxpvuwe5ocKoDFuEg8kw3m6dAWdGFyx6b",
  "key38": "VnL6LfjkRjHcjTR6vxdyqKbFk33jG2rmRXWRy2a5ibJPxnDahJ1YMkdqoAyPn16SFVWTHMCfdzqyLQ8UaB2VVEU",
  "key39": "3wUXjKzxvGwuP1otgCRYzDCDJmPyi7xgEiTsrtjosgpxgkmWn1ffzVdHzuJxXNdkQLd9ASyFzV4HAKcKXMUnCngL",
  "key40": "4TeaXtnahDqmKXoMsx7ayV27B2BcPWJsbKCZWzik7cXXgAbFMy8qZTDj4CCPwRvKMzc1j71rFHmmY2nRaT7mDJ38",
  "key41": "66EzyvGdESoRQ7ETZ2SY4nc9pf4ckGF4LUZiBuT3RPD7Nvtso6ZawoUzkdd8eqZfjghLFpYMNrxCp3ViqfYKCdxQ",
  "key42": "6KpuPhoUnC6LnQmK7L7GufS7poHBncKLmUe6JkBnPEQMcaE2DNQXwwywVud68ggUcSUdrnURWrvCvRm9EwqfcUu",
  "key43": "3wk8ZkmzDdjD96AvJHH18bP8uTL7rXLULDwiDPnPSW9RntxRNnDSaYSNX82gxZRnmh5MkDHgwpUGSNdroNzLo4SU",
  "key44": "24TRfu7FnNkbnJP9fgM56PAGVWg7K33BXSgxfprv8xtVwr5Fw9C1oGitysQinABAH9HEwEDfyK1M3D8XUk6vs77u",
  "key45": "M8ZXqjVjCKbu9cyVS8wdyi1HjjPNnc433MhPCfTBNLfe4U2FucAC5tUFU8ivqGJMAbNfVCnHY4nSoDAnZ9UFoa6",
  "key46": "XjNamdTtCQfe38XLXTTvfZ97p5TTEw2kYqJrkvnrKnF6CExTxhJZPLfeSG9zySvjHiS8evv4RUNJELwcWzNKy5Y",
  "key47": "3twdpxzq4vtf7sq5Zt5hmKf1Cg8rHXbBP8pLqQveUyNqwky9a6khujQjEJXFxKHrhxuLRGQWK8tiNsDLVYARnwX3",
  "key48": "3kUHqMfQcJDsqnjSHRhkwLN2PzaYsCwFswLmxnkD4dXMqc3ZQPx8y6AfyQgKRDyek5eUwwiTayZp883jAuiANFo",
  "key49": "4m478u2tWmaJNZfo1fGQpDw4WtmGn6BgF7BFqRs8We2tCi6D66Tb3UJdh1NTpsx3oH6m5MM1RH8WcM2HX7VFsaU2"
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
