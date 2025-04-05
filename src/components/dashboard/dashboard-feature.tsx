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
    "237f6hvazVJnnAehUjNDa1rEvefPRGpgxTGUTLqeyHgmsZi2vPncWqDhqDNV9qxATWsu498VvdbmtSEEHeqhCXaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59FTVqaYhw7q74WawYrkMGXBEjT9UNv26mUqexgakftinxuCCRqKQyUFnWDNUUKgs2j5qVWK4fsbznkREXGFRjwa",
  "key1": "3Pkq7eKcVqJeEq6nHq1WthUUbHCMuzELRbDG83Pv6iiGEXcfGRwAyR9Q6BupUge6CEAj28tF1mWWfRvnGokLhAqb",
  "key2": "HaE68ar84GMTFCRwkniBVnCrhuPe9sFAkkbCEPFr3dAGkFqjmcPJtYj1EteQPjtGCkcPQPupQWKX7VVkBYf7ZV9",
  "key3": "Fyq1u3PVZrdPmufvojaQryXAHahY1UTKZptNdFodxbydtqPNGbK5iNkDJgCQC5rbbz44oVLbxym6YWnkdyAsMbv",
  "key4": "3uBF8qja9Ab194KmuY1K7dn2Bz2F6ZFFjfrzTbr96MJzxfZRVLDqxdYVPRNUSGtVDcwhMerXUZLepTEaWgGKCnH",
  "key5": "mwLiDu22LfvyCtLsfsqdYa9mwaeaNL657JvXgdmDh5p5jkbjrPJFzKSdzQKwVFuvTiUAJcRgwFxxtM4D7dKCPdV",
  "key6": "5vtjoDHqdJqsCLTfhfVBn3VUW7TF1PR4SNteVQwkostJWEFTxpM5Axd2xMBFLvw6LdyKJ5rAh9z6Te1cdebAaUWr",
  "key7": "4CJQSo6zodfMZEpCPJWkCgYkiNq9B7VhEfhKe9YJBhR7YHnrKu1iRoMRq6UYmThiBMnELMRrEbPYDewu2bpwrUhW",
  "key8": "3rMM22AK1m68pbD8FSFHWm5siH1FA5cbi1yUk7iRQYTSkeAECmK1p86hBgrqT6afhrpvEHFAsN3xtprwLyj5cvEh",
  "key9": "3LUFgqfkVMV9uYR1TMDsSyUyQzwpR4ydqG6xitewhtbaxLqe3deYXfFpt91LM2oVbo2o4FHZpV9e181HYuBzFskg",
  "key10": "4Rygrr2XatvGR2iTAGpyWsEQxqVAdJyfZR56gxURjKDZLh1BE8ExPGMoPJgs2447AVzME1jdXQ5VgVtS7tVaKMDK",
  "key11": "3rKijxbyeiC6azu9tHn5QZiQGkZsNHht6fNv2upRqhUU7LTAkRdpFst1fJZn8KNcMr4HbBoW12Dr6pxx9WQ29K2g",
  "key12": "3jZrGK2PG6GNnwR7wxeiEAupe7dUDFD9d3C4UNHfuJdB65xEcWdPack1qAVWaTu8BYirh1eaj1AHJPvF1oL9ASh8",
  "key13": "ggYBn3CacerbHEYaR8DCUpsVxutNpowXv4khwcBQzVm3CMc5mwo5gt138JBnEahVEzqzZhe9JvDdTojMHzzbNd4",
  "key14": "3KmeEDbXbAZRqw3GR3bwLYGUivZNS6k7ik88jFyPmCeMxzWCk337afqZdKEvGXbGQY8JQZz8hd4LEHgriaeHLGje",
  "key15": "4eZbDvn1knZiGHau7S3LvLxaRdYxGVM36WNCV27NR3vJPd9ixMD4y9ND4u3DDFVXSZcfw6zgySFWpY4RX3jTQaQM",
  "key16": "2BihrnjqEbnTK4SrpeZDh7UQcgmbVQXg3XGGdNmm9X7P2GKsgXyz7MLzvo8JPYADuuroi6z5mZXhru4gHRW4ud9z",
  "key17": "5Af5dmUgBGCsBD6N5p4zgE4NNkFzBFABLJKMk4hH7ok7Vb95yesxATSzBebu73YLDY24igkSdUt9Ptt7UrJkz6wK",
  "key18": "cQYaYCY5o71tKEyopRJYxpvtMdw2hhDk5A7UBPZu1kptjTbuYp55A2MGBdPQMRW9u8QU3fzKAWZy54p8e9rRuap",
  "key19": "5Tz2EUEebYWcdaHyFyCiSUcer1FskFqQBC17npd4oiVBycspEaJjgoaeRjHntbE2zYHjXEiAwmthCGjfE8BjJFsf",
  "key20": "35DwczqJmyWwAXhrWfc5Tk532jvQ5pA3AoCJZQgGTvbZMr9xvKzDRW1ZJQhrGeH1vysfLqu3iXpqCVG6smJex7S1",
  "key21": "oK5Nonv5Ywm8KZ2krkf9s6zQZ6TXfShiKuT5AsmexSUSBJSZ5wdbULh2kwcixW8uE7Q4sNzq59MQHF29gt8NfsH",
  "key22": "376RUUmEPTBCeXSnZudEmHCbc5SwrQXo9ESrnQFUzwetxpVTEAyc1tu2jobMamUqipZ92Wk3qTY8zbaWfJMEMgFk",
  "key23": "5gu7EajvQFy5zSf89AAKeqeENaRagf64d9XFYaNb9uBjwWQL4bcvXRT6BLtUxTiw8ybY6pNPtmBRwpg6etwUZPVe",
  "key24": "1WhoQHHjAmp52a6h2T9oDotySfJXn1wE6fixVJMYnj943zGWmhVfJVd47VFnDELkpUc3PdVL97u6gxydUpkwhcT",
  "key25": "3SR3YGhwpncPztLrUTMkLxNkU4zJGMpYEmRVXCwLEhXCcQ3gVCpFFVMnGu5E8hVnQNDsoS9dnkBU6EQYyASAojV5",
  "key26": "biu4KReGrWzBi3qD8fG3DRNPnjrxzMThT4ttgVFe9QDxBaRo9PgHjf4R96VwNLCwMbEDj2czJtahR5oEizjaQAt",
  "key27": "f8QfvmW6a3bFaSH9TNCJ5qtqouL8jivRnn7hwxxTHUb3LDjZMv3BBx84pQhFr6LSe8ksL8PGBcKnTrD98pD5A4a",
  "key28": "qZRnPpPG3WrqWjZkpZimTpxKVpXoCPP3x95WqBWkgWtiVrcEjEcJnh9AfmQDpxBAjLsXQDtCrMV5uMr35Gq8u2P",
  "key29": "gDeUgqGM4gXyVcWFTFf82sug4ZFhQGtXEDXNL1dwpD2B67rJ6NfTDQ4ZNpN4TxHwrs3uSUjyRCfLbngYs1gezQj",
  "key30": "mjDBtEz3Y8vQeyWrKZdsTRFoCJGVPABvoMoCo7VViK5VaHZhc3Qe57n5UBS2GFrk6K6SD5w1Kvi9YQyifhTLA7G",
  "key31": "28SVK2CCHVFjtBeJWPH77c9ZUWz8zHi5PwCh6R4FUiXe3TjfabUvwV35YyCqCJ1B6EuTJyf1UY2g3LwBQnnt8tNV",
  "key32": "ZFMg4YMHhUXQH9L222da11CrnjRQynbMf2aft4AxBf1NzjzwcbPeJdJoEkVJD5CH3fYqcNoZYADXMGgJwaY2St3",
  "key33": "4W6wa5WKBz4FrtaSN9LZto2J1eiF2FFWCmj2UGhsqbEPZa2nk7nwHHZGhdWkjotKfvQkY7Z2r7mRgxu2yjk8GVu8",
  "key34": "uMn9V9eXogEWrEiQFApuRoCzPXGSw6G1gmTs3N1eReChAFt6cUSAAiiAx27sGHH1aQsxzQAUkhxRpPTRbGJfXdR",
  "key35": "2UwbF72LRFAgcnrcPZETNbsdmKwpc6FwcyPs9ZaNo9Eqjd9UonRAvhJ9P5qTNKEaPUd7HTkuW8cN1Qz1jNZmsJ4v",
  "key36": "BSscAt4sCFkwsbBYEWKx4LMJJPFKuiAToJGvxRsQLdVvmMS1281voFgyr8rtyeHTMGrQZF2ug2Ck9B2y8ArnSSM",
  "key37": "4uj4vfHX3FLb3GKZmVcytC2DEDXtEx7Kfk4qtqsua3UEJN8SAxv3dB92VuwddpE5k2EC4SVMjmamNrEMyf3Jbzoi",
  "key38": "4pyS7eYEvyE3bWiXRVuSkvTZeJW6bHV8JDHT6JYyvRDbUEqkAhHUynJds81QvrKFMMGfaomqudLs4xHsZ2ZcSGWk",
  "key39": "4vKuqJLtmSNApMp9veDRBBPR8mEaPrjTvbnMMDsbvhbfqcQ3PHMFRTmQBJpsj2yRvdWtKGPMMqNoFEmTjdWNVjQe",
  "key40": "3kZhTnL5WV5viaDtfdgtY1tEYHQvSEu3ZVCN2Z917yeni9piErESDBoBre3meFR7YcgXbaiiTqjExoW1Eht5E77C",
  "key41": "44UozkBZUaRbTUjoEC6WdXTbGhMnsCBFHudwixqsQMC7vQcm69ossoNiiQ97Sfg99CAdqKdNNscYTZaoxVpmrBRA",
  "key42": "2LVatbHq3YHDvr6FmP87JY9hxznF75F9NBrB8e5mVKpfNbSxKpeD6sAsiyaz8ZX11vfkbFbmF1DKrFweocv9EAmt",
  "key43": "4C3RTyo6ug8xZLSNyGQWFm4N5Q9XgNSoc9r9VDHKqnzWrHqWTavpnuenxdBFc3zYDeXCGqo6i4g7pcutBd6DHpVm",
  "key44": "Pw2u6F5H8tVPMmxWskyHX1uTWj5AmapBL8enoRgcAyVWkq6G7XVG5cDrr2pWpSPsVVrmsh2rcyQxMzbSGdjZihG"
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
