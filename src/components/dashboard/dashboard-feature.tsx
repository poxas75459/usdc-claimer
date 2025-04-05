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
    "2LdTLAdne79ogvnJdey4jCuw2ZBMLs1LoYidEfBfphDtQQzgTtkfZuto326a2tuMTQhV4iwpeQavQ5zoUXe1JEhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BXGwRLSkZPSyHopVs7JVY4GEmBX4ZnmK8Bbfbq8iH41mR5hZvZFALBcX5K4BJUjJaFmqZLJwmzewS755BvJ4wBu",
  "key1": "5aHyaGUskKhQMZ4m5axKVza32RsySJUtCCehve55Gz3PYZtfuUaAAdNQ275dRWmW5BoS76oXapgaCeQcpHo3ACrh",
  "key2": "5BjbBpLJ4rJh8bwnKrkGPL4ENabcQQYjaXCdb8Xs9HNgqu46S4uJXoecov4kabAQXoos6WfcqnV7Pg74EUUEbcDw",
  "key3": "3d1xhKdrHVttp9onkSAS1g3wDBeJtap6EnBtYENJUaD3tZqtnD6hZkTxDPFuXEAaXUaW6aXDSiQ6gL4aZq5Ve9FL",
  "key4": "2cJjYEzEPE2yNCLYM9PXfiLs4JT1o3b9ZJk5tJH9jb5whJywh6F9pSnYhp99uqVWxPP8MdPCw3uJZwHvghmL6KEB",
  "key5": "2mPeYiwDoN3GDvLD2qhen8NSL92BEibAvpn7a3ScpCgzJTXwov7U5dQDMr2iAN46jyu4o9hyGrJREXNEWJs3dYCP",
  "key6": "2dmbcebGYYPXTE7kvyqx4hwf8NuVtG75UsYGU5Y8wgw6s6NQajyE6jJ4tds9WVkwoveZynFXm378Z63dTf4A6WUG",
  "key7": "2MZwq5YU3JVvWhHF6t1H9LHCrTsduiw4YQMz4wWaHwQXFZNJcFZzTMxaF8Ym9pbwuPJb1YaHv8iJoTiTvkx2q48C",
  "key8": "HMVTEzceUNnytC35f8edyTaYxGkkzaQN7bWQgvzHquKic4RNnxBQyqEynJHjg52HLMfVA7egiqRkVZTehGQ3PiC",
  "key9": "2c2Svp9sq1rfdmqUaua6daV5VdNn1mupzAkrBa7gYD83U8UgGJ8rRw3fE9YKY98hzoxw1HXv1LzQcFMehno7e2dA",
  "key10": "3NT7a5YbLUADMayicnkCHW8ZT7Boqjis8FauSZL6AQABjdBviuQf9k4k1Rv9XqTStvpUmD8KPAkjUdwJW64CizS4",
  "key11": "5SnhUsMwzwk3em9dUyFrTEVRTLhhbosj62u27SbbpSY4U761ZDWF338RcK7G361ujH8TLJ9NibpcYscq2PBqveGg",
  "key12": "A3M5S5p1eBcvNJb6f9Vui5DGQzrmtNGzGzYNxSyBbmusfL4qPnx4wZvzDhAxQ4w4HFqagyytcHtMx3yTcWEeTNi",
  "key13": "3pG69i6ZhxstanCVrWTM2gMEMHNN7RZS3B7orHSnT3g1aTEcagRkLfcnpwKJP85H8eBcfZfQxLepHiELAjRUpHNf",
  "key14": "33ULrL6nqWTzh2xjV4rp9KoEcM4pjD1iteCanEwxy9sRCPn8nf6afG7Ce23gvDdUfdf1uEdCMERAZasXEBQbo1rF",
  "key15": "67CFjTncenxB3fW59xJxfMwRmTBjnuHpaTA8aywjMdADwZjzVVe9Bq4tTnvPpZRCZ9oYrKg6rnrK6VfUFE15KhFh",
  "key16": "3WmzDu89p5j2YJ9D5HvNb6w8RhFqmAPvRMXK4ykb3NNSrncptKtk8EEiuoYd8VqMBXPVLCyapkiuq2vNC7gL8Pka",
  "key17": "4haDXbAgDdda7xtnNbVpfruQfcXimLQ8MnxNfekZxe8daNKWDVMGc7yyVXdXXnQKjvLKbq3hKWc6Hua7mfGuB115",
  "key18": "3XECTsNaibrnaZmrgLG7BDQtskJGJzojr1VC3yeiSz7xmZesLrxF5raqZUtBcwyb2cfW3fRma3bFskd5hTPp6bEy",
  "key19": "zK4P94BvWCsqj5sceXdHkSBEBRwMJHbqbQRXZNyzwMrJgpuNytq2UjnZgcAxzX92kEkVwLAUPguibekr2XYrWgM",
  "key20": "J6XUjinxZ9cg2KificxUBL9zD1WQSQ7kjs4uzWrrZBYUztXP5Dqgw9zdDh1HUxkrCiW2Lwi7H9Yzje8HnR2g9c5",
  "key21": "5v8UgH3mNktJRaeMH23QZXxpMc37qmN2XRPQmDE5mZtHwZ8EFEq3xu4Z7mwmhBZiHVP4JDKwxkq9NP5g9aBZyeLS",
  "key22": "iJEeLR8vk7YnminbTX2bJ1AdeHmHVE6vL13HfsrkX9eeFuPpikbcy3AbC6N9SRaDqHNw1Yw5cbHa1F54xndMmfv",
  "key23": "5W26Wy5fpucgoMPfrNPHyz9cjK29uUnQmsqNPM3V6EUGkrpr3eo3PWEv8r5pMag8BW375FiFAHm3X4AJqPxoMVct",
  "key24": "3NbBXPy8UdiCReshYkhjXrK5ZH8m59r7oA5ejmMiAzfNipwgTB7AFDnV3L7TKaHdpJm4FBkzBGR5AHi4xVAE4WUw",
  "key25": "3eYqzoBLfeNA56B4F7yFTZ9WoUg4PScAgatvWQnSH3j76R7VjDtmyfAHmLjCzz3HDyh49wrkmguqYNnsjYBHtZF4",
  "key26": "49gZKbN1ZMsvcVrK2tmTb1t9cFn6UaSJqwYJL5yC4ArVks4wZ9w5Zti5NERi6TN7i7ykPk1p7VvGo3mehuiDKipB",
  "key27": "RMJYm45hzzNaL68VvFgxGFt9Xm8M3FvcdagdBDAfDzbw3catZyJUNTgn1sG967iobXMkLLNygGjKZ6MptPWF5fx",
  "key28": "4HzDz9FJyJtQd7RkvDvZVgnbip9ryHobouoNqK4dR9vd6eMHU7GvTMr1u7FkjEwcKsgWqNZyGkWUuVkyZHQP4q3N",
  "key29": "23TTvsRYqpoEDsoQpxtfRqeo7kCFygjJSSmsjn7vTBiQLevHGLvyyxux8Fn6mrXXejwd9EjHHmsbjUY9eeF47QyJ",
  "key30": "4PCA1o8zYUi6NX95SLQNEzSsLPbdY4Utj1iL2GvSSaABYo1GuqDwyRFtVUeK5tHHcrZ84rTXa3v2DeJJgQo3chiG",
  "key31": "3iGeuXrHLjJRJLcAFU3cGWEvMoTdD1AxCfvkZt3gCZacLwNAhEEu7pbKSFYmnSs14KH45xdsfmbLwfAAaAaBRB75",
  "key32": "4TY7zartZ9dVpeu7FSBCRnpLRoNF8LDZ78nYTMvgXEftrc688qjgiNpkArYeTrJxJXFs4HbMHtjqo9DkEYPRo9b4"
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
