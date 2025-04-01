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
    "3CWiGtVG9QApp1GqsfotENj8DogrdJvzRUXa6BGkroWewyAkpkrCQTVHbnKN6MxnXAAhDuaaTs5Gs91zkQd2qKh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iNDkkjg4ymNskhmCRkS24V6iV4JZSgtR5i3G6BF9bhk3g6yNd66gtUgL4ZRGX9ohZ7QeRZ25WVjP1KitsjTeK5W",
  "key1": "9BYRgjF68uxJbeGkzccrsRBhLzEUfdu5jWBhVmkcnqgTHhd5Eqafym9vRdGXWhrFwotNcdfcLTiyqBjiZp3DeTL",
  "key2": "41SHcoVawimUYHcYAziX6Y1A1zA4wJ2RGoJnTLnPq4nWRxEVyhkWBqULRwhsnFA9PNdyXDRimFxDGrUBjxWfp58z",
  "key3": "4SwViFqi8CNwWJmWJU75purs7AHFfH5UvdHPYzCzme4VQWmsCsDEMhUwinD2ibeRJorQbcu16S4q4x6oK4hseUVa",
  "key4": "2TSKPEJhCeoB2938m6wErndqh35RbGvF3TJrEMDsL5HeEBeEeuKTTmr5wnd6DhbvBUJJJLbd1TRCcVFNBb66sQ9X",
  "key5": "4FyefiKAWxsRswoHXH5eFauJS8ERpKEL1pw6i3hsnmPNXDUizMEq68st2jw55DRksvGiqarpngD9GohQ1JnWPqG2",
  "key6": "3U6XzAwTRyqhp8wpdPs5zovJKkNKGAcM8w76zqrDa24X6E2UzuAtd783pXeWLMgNHn2sAPvfdUyARAmQwy92KGzP",
  "key7": "4QkMcVV6UAUhHigxcoE36QNMdu6L4BdK2ueHVp8vouUzmboJJJNDVT7bnPAXG8unZngjmuZFBhpHFxBqNj97gymK",
  "key8": "3WjD1vtFxG442jB3EfT7joQDpeTJMnHygYwuNs7mj4iPeTqdqj3b9mPWJF9URGot2kESTodvMYpPX8DsCr3FbtXp",
  "key9": "2sjN4VXstFQREE2MmsUniCGEQaiWevZBNJHNqaD4oktf1esjnG3EAHRzaFpQDBhY7KicozDVSJ79kyroQxzK3Jbp",
  "key10": "THqZcQPGL2U5cQTs6pDM2CzHERxDD2gT4q8BJh9KKnXL42agKcejdvY1sFmi6eN63mpKTpGK6TUSbmR9q4gGSjt",
  "key11": "3cseefBcfmJKeqHHACkPAj7QPtvDo4TBXeFLa9Atn4p2f2AJmMGvGRrXuTcqeK2DycGPDpUVMnKGC4URa3jiX1oc",
  "key12": "5NYcWDKsNrMbCeoH6Jrqe6MaMDB6sZmRxe9cDvbxYViTX5mKxySx3FC3vieEXMpo387znaSHUbTU6BFJS1ZsZiU2",
  "key13": "3f9XRZeG6tDNJKtg2KMTG3CE5mf3p5cyiGCZpKmYEpcygbAPGCN3Wq9Z9CmQfN5JxKY8DPKyvTASaUDwmbaHeLXJ",
  "key14": "3yH2pRM4cGhADyzKFGhZuL78YuVs5nYqNjC1dPHaxeySkMqS9kofph2LBtJNBAb2sr6GzPTpVwvVFB6hqLe3tEtq",
  "key15": "3oPHvXFZ8uhcFa29fRYocTBokM1NJhNn9dLFR7V6rLYyoWpY1iXUy2o5ENgLg2aD7CfTTvqZ1jUQJ2NL4P3Rbqkw",
  "key16": "5zozxD4w8247nvoMYoEHEHzsqTbHMM5zmxmg4BSnWRVcCZ5TX9TVJ1m9dXLYKSY3NGAKqeqFPSYZxi7MWE3nv6hT",
  "key17": "4Ge8T1Mtg6RkCeTnUPZEvPbxwkLhQfaw9mERC8i8yLBjExLDT73ShAs6GKCYNxxupiH7Ktiqw5CwhkcesR2K3zzW",
  "key18": "2eHTmgSPr7CGfJiVcs7XDeh174Y525cjmzk5wrd2DyYFQe6zuMugkCevfT4a5ng9ppNQUEPtQdWDXib83VUY6kd1",
  "key19": "4xpwVyVJdWSmP1P2tSRdLrPs4M98Brnak5ZEzpFF843eimBPKBnUAcVHqndtzXEVMN5Umjvo9qv1SL1DYsXTCLCY",
  "key20": "4jf1tG62idZhXTdshqGhH1ww58VH62gjFb6XM1nX8BVyy2RhoBmPQZDQXsQFC9VJACVFFL835b28npsZH6VZ3BVq",
  "key21": "2R56xHgEqwtnbbwf7NYEPrCcxtiVzPyC8cXUXgeK86qnmzDbpzSaJSnM3wCaA1pFm9yzP3VeVCexrJgaHLRfyGfQ",
  "key22": "3Wm59ASpjftHttEYPZNXJ1p21k1Lz2mvRFpzLzWq6ynW2zZPNR93K8ckx7yqf3EckJrZfosvRn1nQiXNaQNPZxzo",
  "key23": "s5aeLDaXmVQXcg2M2JLscPAznMSC1dTGNyMv1LsViKKS8izfSXq1mibhpbcMZ1g5PGNx1dUSdnvtmmbZ2AbZ787",
  "key24": "3EfSqTVkLnyeyGH5xUmyh86RgzVFTEfUMs5J1kYmw4y3qkprf8zbjtYophxaCCfTBigWZLcW4dzWPgqmGuYcptob"
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
