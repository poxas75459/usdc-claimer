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
    "3TNpeC3A8tH3U4eooY8dAUtBX3akv5BMkGCNQybko3dcuPrhgwPYTFyRimiZosFJxrAqbibZCFfj3LBtABF7MiCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Gd4KFbNpjVjdJo1k9MjnAUzEByxTNUr7RWeEqb84X3tpyNAj6k3Yh8GdXp5RcyUWTm2qAxsi9ZwaK8pT338ufR",
  "key1": "2ZqegLh5mJ3fzV1XJV3EJK6hcxgbaS1xch1HkbRFq23jjB98mJevzifWF6kent7yQahCZHEJTbWEk14XEVKpX9GH",
  "key2": "5csfkGkBp87GNxkHgQGpUuVSG2C97tvi57fbg6juBySXpDsNCnYMKMsWQcXa9e52BU2AMR63k5rexU2XnsbNMmqz",
  "key3": "2xJrgAUsVJcVmMVQhVSe1uSEYCz1YvKExBjuzX4xBhUUbMm1DnnhAj15cmnMiNYmSWhET9sodrUhJmZsVJSGpPaz",
  "key4": "4mNcxn2MGhQXf6izKBCCzm57zDf8rr42Hvdfdq1bi7kCzdwc4WW7aktmchEWtRtRNCq9ytheVKfSiUmhZwDTNwP6",
  "key5": "5cnUVQkEU8MMmgj87gDJynCZEZX2yRz7xcuo8cpAMrcK6rttk92zDo9BdZ47eLUiZqMJHsFNwRJinNcdpYAHmvm2",
  "key6": "5t271SDEZv3zgvQoNNgeQJ5Wo1AHhBG3YEsZe2HxSG94UCNFq5nwXrcT14nbM9aVEvcMsfh5Wi8skMChNokyz9oU",
  "key7": "3JaMm4rRWLH3VC5dANbDq9bqbtAMYVrHEpex31UWVP3qMUM7r8nFf8SqFNMAVPTST2suSm1e1ho9twC1FVzruoCN",
  "key8": "iq3g957vQzGvTSZgWQxV74ULt53kzCHDgV4CvrVYgCSKDB9XBxkuHMFj8xDcDWoFq79wuWD5L4wFEuZxjiksuhj",
  "key9": "3H4PkoxvaEnYf7TqN9WCbiFJAjWaGqQuSmYuQEjfnkc8BWsoceuE8izSBWyjf92Xkxjf8T9KLkKGB6beSWd2aYhk",
  "key10": "4g5ziu4tuajuXoSKfdu59dZmrLJkXzncuXKhpgr18TEErapNhz2AjAWCNh2zShAzd5NVwjab9VuPG8mTGyd7m7j8",
  "key11": "28xdaVMCi4PTgATy8a7YFSnUqRbBHDKp9XmmWuj3kXRzqn69wScDqVa9iMg4cA9HviHySHAXkSjkR7Hn5hEcbnK5",
  "key12": "NGc2mh7oTzWMnmi7RhbfeyCfcorcC4JtaxMVU4c1kJCVc1Eh6Xj7LUR6pCRuVZVCXmGhLL4GPQ6hxd46hoLK4bq",
  "key13": "4jgjXsN9yw2ttMfbFiP3GKqLnvKszgjqnMQKjuzpybP4saLDG1zsAC3s6GcARrEzwoeebfqqR4tpJ3LkhWsmaTov",
  "key14": "vee6FQN1j2PfU2pHugniefQgoZgw8EMQoPdRVz1xF1rHRQd83trd6CYLJCLLeE1eGnPZWV7iEqZB8ScjuY36s1V",
  "key15": "3jFZHTmj6SUE6vznWDHJGD6rXVZK4Az8zzTowciwHuKT8Njxag7VnZM8BYCU3QpXkYutQHmCMPPRa6qhZbdKRX5z",
  "key16": "tmKP9TheXB3dWcT7rP8dj1Epkjge9g9uWU8j4qWruHfYdm7hwFTvUccYgqUjkHN9amE5F4fLxFR3NpAubGyrLHP",
  "key17": "3LuabvD528J613wZTRqo88t6SGPMrH2zBZZXmVTz2s9E7DBvzoXPbRmZygssPSNAoRecRDWtgEvxsKhN1LmH3NUs",
  "key18": "2Cw41axBwPUfTvFyfxiM35TFuJzCmpsrNUTYUKUwXSs7fEm8Y1sqL9qQK6bQxr8vFRyrciKeuhFoirrqi7GmaKQ3",
  "key19": "5pSepaMd8i8Vn85jp31YiFmmBhWz6SSx73wmC7ozzCesaLk6XrjyQ8muputkAdf5uhxMUS3D1oGvb2bqqw5erHSY",
  "key20": "2Fr2Ar2kPR4hofHfewjS2KyZDTtmWxMj8mEdEfGCUsLi8CLz7RDjiQf9JnH4rGTtW2kVPACjrWT4cNc3UP2AXRWt",
  "key21": "4MEi5jA2BNXmnPgBadtNHLCpqcqeqxPcCAaF8b6A1DFSySyfMbuwiJdW6utXbWQaPWnUEefaWFycuRg9ppNwXd3Q",
  "key22": "3cSfiJSWvjqzMYGwJ8iztpPN5gvTFPt86LKCkY5tDnbT4U4sR615fp6mHVYfcnZYzQr3Ke3KWJZURiF4G5Yv34J4",
  "key23": "n7G9GCD2FnPQ5Cwh1R4UkUo6VRhwe5PNThW7vG8nwrz5R3n4DsnJg4zzjFbJiQptnikYuEzgKmengehwXSECSdL",
  "key24": "2UbPqzAy8LEuGMJ4d4mpcfF5DPbaJSXyvu9BpVwE3h7HbHFhdvSGe2vHaS56GRmzfTb4jCfRftLRbjvqUPvkGsMV",
  "key25": "4bmicAD1jBjxYWNNRURwrSrMApoLTjgG1T5ZPo9DbS1JerVrrhngah5iubnaa9cwoWWq5gX9TXx9pBfVkYUxP6eF",
  "key26": "3JEtgZagYYFV9s1MoQd8MWEmqySNmTbKwR5AJNv1hHMvxSrEym5MbGo54p2zn88BWWjroDERX1dFJJnteshawqcJ",
  "key27": "3AcFGGY1Fix4fvPBATpeeq4dmD5juqquVEmEn7kGfXAwoESHQ1c2c1tWCXR67MKosibt57iWufyrUxzyk24LHDNC",
  "key28": "5PEjvw8iXYqqkpSubMN1vxLziMVGRtsKHh3tjwUnZuprZX8tDENgubBa2NfiH9T7oEUJtxELRrMaVbtgyChPBVmg",
  "key29": "d46YfDHYhsYTvCzPXTq1EmKfJn2wpoHKkHwAvq4qRqN3u1oFez9x5fCKUjJ1NcHYo89KjQ9H2yaty8WwxaTFe8D",
  "key30": "4fMd6ySvPia8XWA81khzmQYjUcduoEcrmTAqR2X8XCA7Sfz8eabwBpk5jGEhnjU44qHwW75D65QCYXn8jndpH7nY",
  "key31": "4toSnribjpENvUTNVRFmrS84G18JeDXXFG9S85txz9pwPEtZmEqV8p3MBhuEiLV5u5mFJdidxRoYKFRtkK8FHjV1",
  "key32": "5L7pjkiFpVN9dfNcBKKhkqj19NCkvqvkD9rPFatbiWRDg693PKdFsNRLpgVGk6VzqCpqf4UGygyHEnwnLrFSG1bu"
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
