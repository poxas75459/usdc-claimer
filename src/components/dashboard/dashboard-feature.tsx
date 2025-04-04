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
    "4CRkpdXkQACVTHeRrRq3so45Y8Ww3eqppQ7qB5cLdz3rq2HajEji2mJkMDArqV2gY7AaLNamgtYpNWggzpNydYyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XBB1oJm8H1q2RNry5pEmc1jbUZBMsjy6vxNL6JYxESyxN63H4wrDQW7LEZyXToXMiZ1ED7NJNgo4KEWjHnLLNA9",
  "key1": "3bmsyFDbxNRgTyoSPKGYs4MvoFJ7pFwXZyyTQg1B2xfTgxcdG79Mxw2aTtJJQtZFjP8pRYPaBBnztFDzSGBwynr4",
  "key2": "2L7kpxfm6xxkG13Ax6aayMmxoATfhNwEgGL3XU1AHGj228NwPVZb3gZ97JXh7EGJHHoL64T8nLACjeTGJX5wtFNk",
  "key3": "Jm9ZyqgpBNaGW8vv74JWqZdj6PqwGrm4gonAaxjua9V8FffXb7JrAp7pBueZxkNGsKueEWdKWtk7jcxKUHNoSZ4",
  "key4": "bRRCQ5jVWn6JnvZ2qj2a5N7cc3T9FXR2c2ucGMxpX49aUkyf2LyjyVbBVUQZwWmnCQZzpHD3kb6kxUPWt5ngGE1",
  "key5": "3QhTXFcbtCL6roQfr63M6Vbf8RWb2ej7HvRtgFuY6tXxXBFtfmBwuxL3C4DxiuL7SiyhX4q9TPYxZwQDeMAgzbS6",
  "key6": "56i6gFs8hn8i7Gfcq7iKzPi49GQ8uLZrstMHhcMqVA2534P5eJYnjcfPa8jgeaeui4EbHcr7oukGxboSBqYQZiFe",
  "key7": "39ohn3RESXEPvVEdau48CMnZDEUkeAzrWRwekVpTK8KLuSaz4SKmLffgkZ3R4ChF2FY6tjBEtbY5LF6mhsgrwoAB",
  "key8": "4WAWP3UdVAmVpSR7MqQqaChNNkvk6PySJbf1trE5vYPrxFC3s3oAvPcPJ3QzzzkpTMCi67tqz9yzfo4McXt47juq",
  "key9": "2V2Q2g1heFmXHLPXnespcGB36eDVcoefuovcAmDfe28EcpSvominYcZDpwZkPf3XbQY3P7HAWEC3sRsTfhoDeTgy",
  "key10": "5dazrMELhnVXLKsEXGkCtoABwq8YDNHaJVK16wzQXqjL6SxbAGwLfmpVK3cDgpybkFaLohh99QBS5BQWac1Qx91p",
  "key11": "3ANJHiKLWzX92FitwUXfvSB32mmLWUx23RaS7JvGnfLNBhdotEcMmPvXPfSy8qbnRJ7cz22B3x2Jbzw8HcM3j8bU",
  "key12": "4TJ3kBB2vtXw2s5xEvW5HyNqgv99AwXqCckiuHgfTzLwYVmzU2ST8zSq9TCE82VQhFHoAp8DpSaAAdbv8ksQ2xYY",
  "key13": "3oY6f7mkk64SoD6B1Uw421gsgevo4G16tWZfu1UiwMfepUpabUEJ7XybWtbVafkPkFPBT4mw8YhyP36korK43GWL",
  "key14": "2egi1BmKuANxSPsPLUA13Z8oJDeiHV7bAf2tgP35DZXFLxM5Rsi2cWoy5deUHZq4St3X1RGd2ZW2s2Kh9ALbRKS2",
  "key15": "3qYRJDWs3AiSKitU8WCu3N8Pezy5YFnSrPM7LQYQoktj8dFhP5FbT7vQQazq2skLRSvXKPTGcoYQhYrVctxhPpn3",
  "key16": "5qiw4eYTAw7XXfnCsF2LnXcAYQCGMZvVzkuYhjrmhT4A6Y6jM4NUKHCUjcTNV71Qqn75usJHFNtTmRNvVjYLjPky",
  "key17": "52EggeLRoGKSfbjqNHpJisjKbPL5cBcksbZvsWu24hj4F8VuzcR3RQESCMj5dtM3K8wYVBEC6ZieRDKv7hEeryJe",
  "key18": "64q9WfCLyx8CTSVezEdALJ8vMX2tLUErYgzptozeVBS3F8KCz1GTsdNP6SBPy83GoXZb71fetvC8MBq7HVbTX9Pf",
  "key19": "ADHvMTdqXwXKu4wff7b33dJHkhqS67PyJeVpnGTdZBBjkAVQwVrdtmc9VEabJPct6FbKJYLQwCH1mXSuF42HpA8",
  "key20": "4KEY2Maq8bXmPoZXX9hd7yt5gUM2rCxUWFWiR55BQynFj5zrhiRsVeZY5bSguRbtW4uvcBEocX9GFr7HiCE87mTF",
  "key21": "2aWX1ksLHWsgxvhgKyLGc3S9DaJDWqKPo1RMrbY3A5PHaRaa3wu3UWvSog8y7rJTD7KHhKHa1WpjGMcWeLnGZTse",
  "key22": "BBiJo886N7PEkBkUE8qy9tsGh3KmGhqtJrHaN98SSQbaAe98ehyCEQiYcq5aojKHqgqh2Nq2Arh3xYNRQNQKP4b",
  "key23": "5EjByi96SdFTPMfiYurngawiL16LB4XQqYaer1ok3zZu2fExuLCp7gWdn8ghUk7bEq9CXZ9ygQarXW9wAXxtkUVx",
  "key24": "WZJpJRqU3K5pkzHziWUwDBkMN9mFajkjTtBzKUZTAYG79x7KGt793sTCXBWm1oat6cqeYYQMDLMMbTomrVm1JdU",
  "key25": "xpnPzBGUiRiu56fwhqhvZqFHfiAME52TEjw2HmtuphZQ6LgyRUNJRjGRkxgBkgphHb9babspkY2mTVVaTpiXLGo",
  "key26": "HwxDeawsarb93Ussj5fhXsaEpLnDRkw7DVixK4d6LysGd8w2ZKiJWhTLpskDLcm86DDceRQLxLLxVNT3pABTsYd",
  "key27": "59R8MLZB22xAFJQqGBSMtMG3ha9hBYcRy9XX8YGB5Q5fd4dHDJQrip86HKCkhQQD1xKgnL7GWYcjd63j4N4UeQPf",
  "key28": "4hbwX9CUyNmB1m83Uk7PTfJjQkae1nodiCkU36vQqRHdCo9f511gnJA7s6y2Dce8FZviEkQWKuTHRCBgGsKJw3Jv",
  "key29": "36RzuvrrEiesrSEdJYzR6tCT899FYJKD6ucS5kWay4B1uQX5VsTJnczWnmH3x7yo95tkLfwK1ucWFMK6PBch3iLR",
  "key30": "2P7QZgbkG3d7ibph1A4CNdibvNwixbbQ1N13geaiABNotqVdL9RodR58rbFgF9UdvJhbubayWeBUNiS2f2422gfv",
  "key31": "2wexK6nB1VvFHHXMasdcspVGj3YbtTARgP8hgr4SPsj8GH7sKWbdJZckGvQHa918LoDGNJSZkguQE7w9duYiLisr",
  "key32": "5nPBHxwiKHTLbJxQb9CNx572EUoDetHwLJMrJvS1C1QkVPwWFuknxyteNer6gdr5V5NDQDVb4UzQZEHCKD3R8BqR",
  "key33": "4EHiyfd1UHoLvFg31Wjrqip1SSTa2neFQbP8Wc5WYDxN4pxmvP5jWPFT267wMti2QwUNSr4gdQATJTfdntBnh4pc",
  "key34": "2vr3eL7hvf9yAFHFYqyNPcFckvKfZxeZSsLK6pRbHPRNEAsPz2KKzPnEWyeso4aWvaNCRuEb6NX1rAn3uVSmo7ob",
  "key35": "sBPuFcc9Cv6zqC8VUamd7CET9Tb4cBuMCk7CczZraz2BoMLVzFLMzeUJUXmx5rwab3ouqac6kUQwpJ5sHChd649",
  "key36": "35XJWtrL8tXwS8Za444ktGsx7v2KwmjFYz2i5ciioLvadXkzuicB2nDYb98MbWkERRycxtmXqxNiCaZxExeMcZd2",
  "key37": "2LhA6oybz1odw4G2RLtYpvfSRWmLJ76F6Y33P1WgmxikprWmpUAuUbdR8XJBecR1fxQxzJv15SjTeFG8dv4hmhRK",
  "key38": "22srXuqEiqdcQXfbwXd4QSLBhRQticfW3TQSErcARX69jaF5oBEr4WYKDwekwWtCjiTL9owjAiiM5HDKjm7RSavp",
  "key39": "ptauQ3BPj9zjoEzwLHzFDHpdjDF1e9cKvvDRBcvdtRcWN22XjSJ2tHADamBJHfyZ97rXWiCJYxF515kSV1HNayg",
  "key40": "2corGkcZRC7mzv8qjThfXXJcefHH4Wu7uP6Qzwcz1JtcGDBLyFywh5SJTKHXpG7EWWN624RvfN2akUNJVdCnECtQ",
  "key41": "4YSCuR4tgAFBjNX7qE4p2rN1wnM19LubrMsgKQBdNatDhHkH9VkHsdMLpTF9AUVwQjsvTKzHLW3WQ1aC59v3NXxr",
  "key42": "5wYQh16or9uZaHHvNXhJhFoBD2hUugk3SdUVbT8gQvtRyJwAUZ6mXjVChoPcDDEgPGDuy6jmxF6CytzqisUFjAGq",
  "key43": "43CMgpWf2r5k7QV7d9XSN5mMQ9ytsrxmSUbGUKEqQyk1A8fhLu7tcznJ3SZ2QjtTVT734XMATWw1EMaThjqcwfMZ",
  "key44": "trNZFXWRuvH13Hf8NcRAHdFvM3rXfG8dLdv2TqHqajj75FZHw6j9zRX8ivE75JVLHERjtS8Yfk9X66gfqZn36Bp",
  "key45": "23mENxp89RaSwuKakH7V83f2YK8wv7s4EmqDzQ7f3VC3H7rtMYGLoGG1Jux4ZC98ttngd79eeTUJsk8sigmKbzog",
  "key46": "d4CKmRoxemZi9px4yarqHVSTpYBT91t3aCmm72Ha2f6d3iKkaSvknyKkFfQGVCDBT7DUMMfD5vs5RMpAc6e8n7D",
  "key47": "5KzrywWuEDfeS8NpKtS1zNp8aDZ1NaivA5m7MCHX2FZ1iESPCZf9Q9knpdbsXz9PpB4wxXgxNxjW3jrbCzhjSJwY"
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
