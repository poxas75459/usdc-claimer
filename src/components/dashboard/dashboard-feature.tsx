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
    "2bj2SpDj8rZvrZS8uHBjFz99KduSS6dFiJPEv347XDqaVZWSKmYWSabCXm9nqc899Fo3MmWVooi5xtb4jdgwZ7Pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QALP9WXE4jcpAGfVdQgFYFTiJDgSdvZL38yinXiiEfqkr1ve3G55SgHjmRiibFCNgVqv8Cyth7xtNu4mHchuqCM",
  "key1": "5usgHRzMZuNaLu6ingoAWCgPxWak5tqXWUewZQ1itd6QsRDoKHYVH9LFyNBWE2sbyHHfHwcFowxSRW4m6fHSQjcJ",
  "key2": "2V8onscQadA3Ca3dzyKJcpqH5TmN9k7nvbPPndu1yQtgnSZFsZSbrMomAmRy1iQzhwu2B9BXDJy6PYjnfCm17dHa",
  "key3": "4Puk4eMZzF12k3oiYCg5dw712K9JXEqKQPLGFwBpLicsJcoUWq2hvcrGbVMGLUb6iFvXaMrGUcMfJ8i8xRnjFaDL",
  "key4": "4SQrhrcsZcttWa4T3Ti2b9QZoYqeJ7CdXWqT9o8YzZieELVMWCcfYAdgtCGpbQ9uHmiabu6HmnbhXbRKCp9SNx7U",
  "key5": "2U73hbSvzbkzBNYWopbJHFsYLtYZ9Vdw6UzpGvHTZve4dg9ZVFkfkyKdQJ32VyXP6TtnYQ8rrrQcdKZyVX1r1DvE",
  "key6": "VTA6KUamtE6bgk6xswNyduER4R4UM5CbXuEtR8hJMejv5caRcPKXsqfiKbZJhNdVo4kfDwgjSJ8Lqja6w7Lbkar",
  "key7": "2xFQ5bFZQHHSCEmQzYtVjdH9nEbdNNyYiuC7w3Becr5Jzu5zBifpdSfd6pTh1GqzrcZtnHYSfJPnVgRVeuzYXPnW",
  "key8": "oMjZKEQfJLhyo24BedBTwV1VCBg1UvKwQFrw37wGkJTybNtEaSwnvx73FPgqhott3dqdbJMGGsSLWBo21JcHumf",
  "key9": "4P7ywFNmgXpn5oH2xit5xjGnsZw8Aqs4JBWkXy1dyEmx2Sn1FeKBx2dqZoQW3SBZQUM5DyWZf8vcSD8mFTURpWQT",
  "key10": "2grPYqwDEiv2w7cn4eJ7mGqZTYkKYMxuiakiMU7vtGYBftWZQRBV6PoT7ifM1E6NyBSTtw6rHgR79YuMvuyQxgTU",
  "key11": "2shbm1Yaezb1HPKSD85GWzVXAaYA7vNFAh6yqgdd5sxWNqkRCW2cVM5EG1GNsegMKweSEzWkN78ZmTnujHzTBEyC",
  "key12": "3ciTs9o1q24W5BMXqAZ7kXJK3RGcVvAMxXMpTrUs1HruDbbact1qcf6Pim1sn2BpUS9arev6uVB9C9UedRHLdwJd",
  "key13": "4JKTUSY5pYMannaeZXJfm1WjNf6uGTFUpmz98LWgzJeSc83NMJp85vZYd73HxrgDszWCH7pPfmQbdf45VKQGAoL4",
  "key14": "2FSXVKZm4RLT4HmoED7Wmw1MHXiLa8pP9VQRzvunbmr8w1EFmjnhquvDb7FE9N84TbudoH6HSk5QwcK19edYr64g",
  "key15": "55MiDdWg7khwFvnyUvz9VLnFthkvDYFMVys3UjSjpRSnzZGhGX5Ts25W2V2L8GHLwJKpWrYsX3DzBc9P2sPAW2SJ",
  "key16": "2m6e9wiyYEMvix4LvwwTrTKCYpztpJkbUgEc6uvuqTkBsePPq2sVrcw6mr4KdfNih11c9cbrysqCEy6cT3k8Tj9D",
  "key17": "2neE6RAcAryHHqLAtsuQoy591wDknPVn1Cf7tusarM9APW4iSnEkia75nxSj82vqC8AHQyGJWsA6FpMEcet4fx76",
  "key18": "2Hiona4tSQYWgAKSWwKiAUxe1hmpDNPkUYZfMXKXqENKYP3rDdVJBjALJ7h5h3PoCa2nkMPvdFd4zNYCPzZyVh6p",
  "key19": "4VYN1GQPT6Tsdk4TTAzjC3jwar6qJUJAeEaYx6wNBxLSmVz9eSsmDR4QVC2mLSSpCS2AUS54SaTpGa427aHMcPMg",
  "key20": "2b6zDtQGbj5kMAxcfkJrzYgxGt1sswnUpf3axoG1CtcaaU43FQqzfh8fnd7MwSWCbRPKpMav2QLkTETuLvpw8pdj",
  "key21": "GCApJWqhHDDG9TXXkNwkLdLzDPprzi6AP5i2S1EQeU9MSZRd8UYeccwA8GNG93hWAPszHKz3Ypj9bR3Q4tkULvz",
  "key22": "2s9ake6xLj5nS9EhdjBuHMSvZRUdubzsVqZfBrXdoxAh3UZj5cpLxFgmErQZ5VXkdxjPBKXRdB2XXouzwAeRSGGz",
  "key23": "3i3fhxLbkfrDemJBUYURCdfiEgkWPhRoYcmkeA194G71MMvmqQZg9WuCDyoXpxPVXzD9LAoHt8Hu7SiLngtifcpe",
  "key24": "2Yzna3DnwKkBtUxr2heuAEyRVTUUQBtA5r1dMeo41kT7UrcYMbTdAziG5xjCgfrho3gcyQ2TuWDeiVFf2gWf4gwa",
  "key25": "5NFgvLwpo85S3myYLYeDfZVjQBxyeiGKLvX3GN5yexn8XJ5zETGX2uu4kbEck2jojhwiyPWsyHYSRQBc5EeVKCDX",
  "key26": "Q29ApsbYCpS3kuHnPTotUY52Uw3Y1oMMac3UjxnvvZtMoPMRh4QJbSGMpxjB7kN6EDtXsnR9exY2pi1wEXwAeDq",
  "key27": "27AbgrL9cqcpvYHjGAguzSXeWb9KuCq2i6KQWGyL87se53VXSma6ZfnoXye9HXKRD3BW5qxB6FUPUrxsP72sKmpj",
  "key28": "4zdaYar3ymHpUPeYxBfDPzFdE6qmHAHncLCVPjUgyVhTBVxd5UcLisd4SLibusFrWwouyyb4qqsMbp85rd3YEbmL",
  "key29": "Qg4hpEHfm2UeoMYFpfQqKSA5DHyLFrFXysVvkwcegRHbBfo7BXZbAFcjzFWiWRWBuqT1wN1ujq1Ma3kdcGoCDqf",
  "key30": "5HAmymxtHMg6uEo7MCeYqr2jJ7X4ozLdQxNzWYMU2Q3RwNaPuYyZGHMEw87X435BTEdBjD3vLgaas7n6xEoL1Wsq",
  "key31": "4xp3hXAfTefU1UTK8kznXPaPdmFYRmK5urK4zgCWdF2jJs4XJN68Ta9oUsg7EyoW3T736GKp6k8L3xhyYL8AYxji",
  "key32": "nLVRr5DMhcA3xU9hBza2E3EEPidd4fQAyqSA74jpBqh7m7pUiwevooeT2paTZP4zZRKX8cEpqharonwBuEitPEx",
  "key33": "2wj3K2DFRvnzGMvGnRkAKQ9Ak9SNo2wjJAG9ejJUNoAWhHbuwK4APhximQSJ6gtSrLjdtftoFU7U8FQ1A6hMAmgm",
  "key34": "4cf8TqmkkjCkJAdsqgGxpazhgALk4JoT9YBwNHP4Yq5AgDJfPjWJs4udyqdNcqMnBvMffgWKehyvFrLE4YV4Y8AF",
  "key35": "412ax5VmYfGKmTKkkEV9PnG8vtZnLxaz4kuNk8U2ZeCJdhfmTjutp8RRJbrgTGjputbanyM8sEd2etazSMrg2CaD",
  "key36": "46qTPL7C5bFDVUXLr2ysC28H83a4zK7BdwAb4f3b8XHBCH2DpQqaLL1GyiczymFkGEYeDWhab4Nusy7wU4xgTHEa"
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
