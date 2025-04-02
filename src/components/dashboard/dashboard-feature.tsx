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
    "zBfC9QF5wFEGCgN77mAEB3hCBWnmmf9Ym2ep9YX6sRjx6zNo964prsxNoP3ibH4Xrxvy9eMXwMH2yHDqKK3skyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53VEz8eLTByo53AC64HaL2tcxbbVA7AticNZhAieWb2GM12co7ekXBLLQ5answQs98aAeiB7FFbyK9APhUzeSKX2",
  "key1": "2aoX6gXTKu43Wc59MaaJjjeUaWjSKie9pxLrYcnDZFHdBjPZ2Wh7KaxYtmdkdSgsbzgED6C6PxZkJzPDpnipbrY3",
  "key2": "3Sd3kzm3svXZJuiteuNoWMKRLsZ3sQQtiuTJhYWKmtjgAgLiBK7Ad4bD2BPd1vXrtDeS48e5agzECA87RtTJF29K",
  "key3": "3iGeNcisHSz9FWfbCcbuq4V7yiWF7vyz2bA9Kk1zfHehFk3sGQVtGNc9yWuxTvijjWZ9cm9FddcaL86GuqkFvvLp",
  "key4": "3CHTH6P27ftuQ28ib4eEhm42QqzDXcVXaLC1ssiYCJbDu8Hwmqxk3vTSTg5wAVmUDTvbi3P19J2g57jW1p51awPR",
  "key5": "3AhbCQ7CNDPNT7P7DadCo2Ejj9yQK2k3Ge1jiCYcJK1aAVAXk1n8phxuvVD5qNuaNtHMhGeHNXDn92kvcJNaBmJj",
  "key6": "4MDqQYmPycYQwsFZpxHWXQamPfg3zC6p2FMUq7aH9Dee1wXQDivf7NfTsRx5pvMG7bjDkvFc7WZbzs1eKdMMEMMT",
  "key7": "52uJSKd5YvwzQMnTnsbF4z2dESkaJSH7woEet6Rc4jERLBXKVMgmqyAP4SmGtNXhdHViZgGHsKQkfQcMMF4636nF",
  "key8": "5w5pNvnznjUuLSXkMGLVu8jFP4xMpJT1DCcMxnWdF4rWzBHFnHQXeXpcQWdNpg3nd2VAzbnXTX2NeQCutJhHtcjh",
  "key9": "2R7JZRpKJHBtPNyPzzER5yBo7JrQjANqTF63Fh2P7JGSNQDMgRUk355DR4HeQa29zDmVga9y6bLRfz3isRAp711R",
  "key10": "5FGwc6RsDQfgZcNc4diZaxmoKzdTedLUcchtxs8Gvjr1iEGg8F4BXFbNGaqyhkuATCXEq88B6xUfNYnvzCjsoXQJ",
  "key11": "2TAJohqcdCSVdJ9V2usDWoJSt8EuUq4RwHUgShcrJ4kbzhzjLdzj57hNwneLZy544AW7rNXRge5JUiDStpbjXtJ4",
  "key12": "3QraRX9CUtCrmu2dtbJmHxtYPpavCfogo299ujiG3XL5H956S37SoLfmRgmHLmM4NwyuZeXa3hWt6hHtKxAr9dDU",
  "key13": "2jK2NHLY37in19b52erekcLpBhJ699FAVMrYmQaNqSAXiWNMGPWyKH4keBmb6NYJzVdVFamVtoJ9toeF87Rf4aA1",
  "key14": "3Gyd5yxsC9TBE1KN4YwNhqLGkdTrnLKenkLG8KcjrKrjGEGiL9JuCt3CWQ4wfwmdLBTo94LSe65QQUAsR3nukriE",
  "key15": "5ki7wsW34nCrBEYfuenVf2gn97xD3qxgPVnsJ8MKhoxbxXKnQBjwLhnQGEwbM6hAoeDfJgcuhgzS2C7YScEbbnJb",
  "key16": "2eJ25RrDsXqVBYESyLmdgnd9CUQ8UD8dN94Z8XbHTBRKsP1WzkjJSLsDCBmxX3kACTogvXRnSGtWSu14ayWZmEps",
  "key17": "5Diu6XxRe9mob1zcaiqNGNqAVm36FBDNRAmb8TJ5mP5E3JjDtqSg6K9mMofEniZxqxmmnGRHzzDbtvL6ziQPBNT5",
  "key18": "65wA7gk8TsCRKnLJNbUaGweKqmddfnrpm11tZUw3LT4bNJqvcxtdaysLY7TRy8Pbft8xt9DvNwctXaH4MGUwo5rm",
  "key19": "41duW1HV97tnD1pULWfS7uNGR7Nj8Z1iwu9mXe7sy5bofhv5cAuZkVyY2ZjRpwgueVRjzFyCe9nENcrhQpFKzTao",
  "key20": "5kSBPmNjf8ayEUCFvmRnuTH9SVidjYw7yPo1yND6GHW2r7xrp74xewTvTQiiuoY8yVbu8n6B1mSJ41w2bzyeE6nE",
  "key21": "G5GdAd6uykYEyyijRNtvDfP2uTE8GAVhzQ4v2J7mKpbkbBMFhSVf6XoUFRSFRPYmUgxfAArwRDgRpSLGo3bsm16",
  "key22": "2F1AM1NzR6Dpcsp5sn4E7p89vjsKiGqkXuVAanbQFaQgQ1DcrRnVCYvNN2t6dkaW4Pbv8HyLT2Becrg1cUmhjbSV",
  "key23": "2KD2kZKSkqZLzCJUwAxYN5NP4189MjkiToVQ3Kg2PRuZcVnVALp15QYQfTP6apgfhfTnXMtbprcu2Snv7GzrUga5",
  "key24": "2pjpstDyhVkN5AjrwAHvVPsCmek2X2hq2YdwrQ4wBMcNQmVaQWUvzV7tJgitxgUeYfqmQ5ErWiU2RdYmtzQJcfRJ",
  "key25": "57NoUXN6APEDCv5crsiid7rUu3LPziXuj5i1kfixTTtxYFAKxfD5rXhtjyuqaekpF7xnsPkF3AD981NMvWZthXS6",
  "key26": "2pLqW33u35ocDJP2sFzxQyA1JszBTjBXz8mXfgbBcDsp26mJgu3K1mm9gmc7xh2L4XTWfcZMTstvptjHVuM5r2t1"
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
