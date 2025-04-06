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
    "23ousmJA9zBy4pQ6s6HJyBBJtjv4hSoX5GSsu47qWSfStA2XEkq7xToTeU6ocXQan8bQnLp97aVTvxTjGwceicz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vfWN6CSmV4bAyD5rT8c8LtyxMtfCBc5a7rMPb9R1VLpNH8KGE1aiGfn2xMp6iybXykcYvy3aEfThnjnUapghpXz",
  "key1": "2KLrfZt7GZxB7ymZPQnHEWbpXekkq1Ybzgd9WbFywATH9qa9tEP7927MRUvMKbv4e3mdemdynTwVrocMfXr1UtpR",
  "key2": "3nMnZhDvSXkEKPpCkGRHV3MAnx4MX7yEBBbRvzEBkcjzdU7vswUV6HfEen2ji46ZsDkQmTKkeVyhPe9sM6frxVVR",
  "key3": "wZunS3BiocuVi1vLHKPGmtSoJjna5ZsoLtUwQ6BFHBtXd9uZKEhJ8YCgUz8pGzz8Mc7TNX9scPs6eiebVuQxgbH",
  "key4": "4o4iQPF9uMZ76S5JFh62WnP3pPibiLjcJwAESpCZCD5A9jztFYG9AXjd4uukL2zXSEw7KYQRA9YQJfwdQ8yEwVoj",
  "key5": "5CYAmpndryYsPMrG7LKkcSwNUYRCrMMkcQseE8uTquPPvifVQ3hLuJHDPmR6uQcMXJPufMRkxGNDhT6zkGEYU2DH",
  "key6": "51MZbLBVf3C6S1zrSKTC2Lzp8eraLtR5ERzKgB4m78FALiVKLhh5mn7NXQA6BwgXoP8yXbUc1Fwff66kdzgijjza",
  "key7": "tdJFoL5s9sMLK2dnu65Wv3yoMHxu2TwKH2kbhPDNRYK7YVstmzZCjpNG1YEDmQFzAHbqQUhyheRb2XKpYjDxwzq",
  "key8": "3k6br7p1NBGsN5LNd7pyb7upMkfp4Mx6zHxuLQW1UyJrS2REpnffu3MTH997QjcBqVxFTPsnuEBpieiFqBkCqj29",
  "key9": "4Nfzuny7e6tVS1aPKwp6X9UGd2omyx6aL3iN8xFhaeHqZYgbPDWhBPJkV3czqchRbeSsmvBDWD7x9ZKp6TkzR3FU",
  "key10": "2o4gZh53LmnomPnwqss6xN64He91uGKip51XQGVFTBp8odWRH3EH3mHNZK6YRtL3VrtpuzRNPLvWdjKLNQbJqBrW",
  "key11": "21F4iSQhKPXuy2oFxNpHHogsS1uyCS9sLG9b5YCtBZCQK5Ei74LBEzfyERyEHpXg73j8pfsyvMyxh8c3oKAFRwhT",
  "key12": "2tpfXzyyCW2Eo3895vFbKr8jdfCE8GsPT7LvZWiGiBMgzyXL2j7xoE51XXAbfnZY5s5mS23KdxjbBmp9sWrcv4Dx",
  "key13": "4nuMykgLccjP32U1uDrktaciDiRuvWZN4PVqVwDL6ydUF9gz1YvJsGroQda9ro3NxCrYwr9oWMRkLhUcrubHcwVn",
  "key14": "EF2fqqpbmVWWCg9SxaFvE76MX8muNw9CywKRPLRQegb2jsQBTpMknA3g2KwZXqcyAAuHnqjtxnoJJupoxp2gjUw",
  "key15": "4LEFLgk8TxukZw3CzpCVrP5j86WkbYWz7vyjWibMmFPsL5hntVeyMKjrxW3EX5ZPZdDRWzZmRhdoBtX8DySoxQzx",
  "key16": "59RPTK1L2KDmYDXBZ4XWozztZE64T6ZjVpoa55obh1QSoMrThiTNoztMHafJLtGbUwY9GVNqpqY9RKF7SEwCUxDw",
  "key17": "5ZvEqEDDRtezCy9pHVCKTDF9UHwhnfoThWNfdGT7B93vrdze6qk5rXPWTTcdccwTjUXMAym9TUs16f4JTNpBAGCL",
  "key18": "2Hhmy27VdDxrLbbHJ14PT4oDUUksM2uzaAwRFdhgpvEg8Nkuyt4sLWZB7CGknGWFV7WptapGbMWAPyJjSngSEJJS",
  "key19": "3BQYaLwYYrNQbVFZijNiWnq516AJH4fSnB59u99pR4bB3z26HpHEuUU2dnEAcEWa86zpDsRxjtPY8D71qYnpRhud",
  "key20": "5r4xNVuhjvRF2v8JpJ7RS4MnjAGjjDazqJpPWd47KBsFXqnSkQfn3Gs5s6AQrb1JLbvYrDvrimWE6JnuRb9Vev2f",
  "key21": "5jxNGgK2tmyZ7Bwvb2DHMchE81SHWAkq8SZctTmpCZ1qWr2hvamDWvHtCTboe56JYKUnoWn7h1VkjiXmL7MfH7im",
  "key22": "5ofgqVyRH8GoNiWWyxx4wXhhfcrdEn2bPJS9bCQNADXjsPNUJB5j1k6dY54ppbyeZvxXz4scEtA5bgzp319NM26P",
  "key23": "53zdk9PwGYuugfscrfT8FnLfKLYcRiiu9AML5Dft5PqhxRo2933yaiLSAEGsC2wDCPR5AC3Nw2NK8CPQkhDZYyMu",
  "key24": "2wmp6uSmj9jom7xCEEPva6iNH1qHX1WNQb6HtHzdPVXzeKmxFqJtm14FEQVA98dAPsZXmNk45BDY2nKm4Df9C28z",
  "key25": "ffCu6j7QqibHXTrLcaV7ujpWEr4DveZPfvMbW6VtHuMsepSooruWLtXkY6s8BTQDPn7jPQc2w6dQDEsdZsLV7DS",
  "key26": "3gX2AkEQaqHNrLAD7Y6SnB9tGoFioAYrJHRD7zHtiYTJeH7UgL8HnuunQ6TaBJDivWFnzjRFhPhcNMryYLJiphWB",
  "key27": "335toAxXQQJ7fTUFsLbhv8cSwvExu8Ewhuk7pEJnmy96T3CPZwbpd5YWy6poKkRiinBLw1z5uWEo28VkBdHigWh7"
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
