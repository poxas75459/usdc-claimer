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
    "KdF7VdBRN6znnau8M3VvUYQLycHEVfigaqszyXNqthc1jEjsH5huWSYhwrfuJ16qARRcLX2Gud2S3Qcuf18uZeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WxxRumYe67sSCMpFEEqPAtJ3nqWKgskVNpzoAAwEpfgwJNFz5ccaFPA7TYoPRkFZu5M7xAmyAcf5sQi6sbRgzGC",
  "key1": "2198zCJ1cfH3jxC7mVBpPY2XX8FmnvygM8JKti347jrufbPKdGmx1Kh7srFkccEDBoEvg9tbZjUXVXu4h35iG7up",
  "key2": "43rPf1DSMnsfEWVWBDYSLpkpA9XRiC28xC5kv4gVwjwrUyTHyd5YdsDCjtUVG53R4msxke4Z4nVvs56X2n6RXUX",
  "key3": "5mGmYj35vSJX7KNWhY9bAYsnjyHwiJzLpSSJg53Sfm6XsdcJV7xsGFvAW9dqcz3W95ENQPBst5Xea5XoceVJXnWE",
  "key4": "2EdWDfWGMBhWoXGUoebC219KChCTuHTwJSaVwJLfeZMEF2f2cr6hDRd77fFw2NDjsnhdtdYYoKdekmGbMZ3TixXi",
  "key5": "3x7jcNALrZyGeNE9HfEuYGRkpqREkVPxtnVKG3Xx227FatqtmHNyHJ7GVenZC4uNsxYfwdK9RRrMFjx4BfuiggNC",
  "key6": "3QpfdmQAdQ5qswZu9bmiV1tzEo3moExJt9vYXCNYcb8L5SbprhJcJac9dJmt8xcP4ejcz5FXtiL3wFy2FAc1hN9C",
  "key7": "5k2LAMbuygtagsZcdMrdb3Db1uTzpG1sBRpusDQc6Vt7XF3zycg9qFi7BGw5gLVsbiAJAppRBoY1NqVUCaLRnUXW",
  "key8": "2mwyVohGo1C3Wsy5KxL8mJesFhrFyBbXBRp3WZLVHQiqgb2oEk3gchTwGvzyyebK5NUkhYXF6JFp2kn9feEEGAd",
  "key9": "3ByBCnvTaH2PuXaFvVQV59x1SRVZZEGQcMGUssQGSETJLYb14feMWKGBwwkz3Ny5Uc75iQTgZkBaPx2RfHxH9f3W",
  "key10": "3qt36uwRTWb42EJ7GHD41nzTVQipjKoUz6y5dqqfWdtQZbmRAqMCM6D8Dph6nUKM94idmENAQQAMeZWJBip6Eufv",
  "key11": "gSoHHVEauCj3nKMHpR8jJ5PkxGKHv2chvxRz6CkQ1xNGyEYuxtQirYBt9dmWgeu4YKZhjBUz3K9CBgXnEfM8r1m",
  "key12": "3jMDvr2GF3ouD787Xo6BbgVaZt4ZreUvLPXbZLbdsBLbEqULg7srcUoeMJfLjUV3pqPErcNfM8zJAyyF6s5doAFE",
  "key13": "4GFP4McVe8khBPHazV3nR317e36qJMF6N6nwtXKicQ2zwJHo2MD4WiQutYcwE1bHCBUz9eqDWbqbrES3SiJvHmcS",
  "key14": "4mZ4MXW1Qd3qzDK5sinZ7a9yj4KVtAK779XuxU2xq96niX9BSA98SRg9UCtavh7aWy7w3HCFgfZ9nDXnyUvFKfFD",
  "key15": "ncvcSyraizTrUE8MfF7qPMNK52Tx29WsCmUho8kRirs7g33XFtYAqJr9wLSghpzdHVagANXWbuGvx6whGwzCUKD",
  "key16": "5zzuKVnfCrYcAdWfxNQv6AKUnL2FkDNZ1dDyLv8C6hHNCEYgrcsimS2wUTtVzaJJvFFdNRoSxYdL9YrNEMy3AwvX",
  "key17": "5CBZZocJqAML4cPsidjFxzmNdegaenEZ36uibkbd6T3Vrp9foM8tLKgBD37yvrNBdUXCLsZvz3DQZhodNyZyAFFg",
  "key18": "36HRLG1QGzFzLBatm7XPUWPreztxDmwUsK5M6N6ptj5rCy3sR9n4ewWxzCPFwue9nuTZ62tqFfdBDm6bi4jFRHYq",
  "key19": "63MR5jYmHAe5WCfzVbAx2Kv6hfSznYZMc5f3LsNWpV9kdcCkSqigiKiLdu6p2mjvbvndtQvAzECjsxjfwD3KkzTs",
  "key20": "53uz4Hrt74WALutzLmZC4EZDy4KLT7fgm2nEp6MPDLRYW6ffPi79APbcoT2ofViUKynW4XN17NU8G3WwzLYgaRhG",
  "key21": "ckymGuobSFVGcv1CkmaceKCZjGJiPweE2nv4Bmq6A5rNxo4A6aBT8hy865ixLzmp4XtQze7tBwP2NtiWNnHJF9P",
  "key22": "4XCWyKM3aCiFv9XHuufZfz8FVG1p2YT1eyqvPLpppeoc1roocDdEv9hZj1fv7FnwHUCsHhsY7eHt5qdgsVPRHAc4",
  "key23": "3qEJnqMXRKP1ECqN9PaVphqzdY1B83iVEFKzz2BmJmiFtN4Fh2u7ozU3og1KYdKiS2iUuWsuTpEYJ5qfPEhxrYJj",
  "key24": "5r5dSqntNxfeNqBiqRrTpqXxCPqMhKsg7wNdH6VHrx7UeunvBb5rghPzKVZn2UwdT8H4XhFEDd131YLjU1i9PgW3",
  "key25": "5Yb8xBPDAP1hE5J6JsdSWSm4eBRwgDKt437nUeUUtaXukJKnsDX4TnzZzgPSR2CtzuryCh6ZJeazu1FN4ChUWQtU",
  "key26": "5MrgHcbpi9fv9RBkyTSCDoWrSe5F5UzVhwPYMNSM2NX7ogsazPWiRvoYh48zraaTQkoht4RHo6bZh8hQoBAWeynu",
  "key27": "5drLYGkZQdd4LTmWXcpJVmw8M5vtFqqQKv9X5Dg7tTnv7iV52hpCGXBUVEuxLiyQzfT4PZ6etWgVjYWKgSou3AGq",
  "key28": "3ZBGcYPdZvNfEJXqhyU6QX1NaUj1WjJzxtDLfLodguZvZHyXfPYNwUwaMLh4qmKvw4GoGd4aDDm2EXB87finqwwy",
  "key29": "5c4poPVbkSE3cThpQhEqzLQ2yBNh31pNXkia4yuQ3jayTnhUzwdvUQbgj6NdhNBD2KsWkXQDZZjmruYwxsQersjv",
  "key30": "5iZrcUiwvQJQHqaoPL5QerA6WZpcGoZ2bUGMVDeundwRCkB8BdsNJo1TMwMNcL5yNn6ca4yfxKqvtjzxLo5zp7iF",
  "key31": "2bLUHfKGhLLY5VujvzRPKkmk2eEf84tT1QDZWWQ2pizcivgUmSFvPKMp394SbYGxeLgbFSayGPCfGpSPj99grQwF",
  "key32": "56RpL6C41XT4N27webyY9YmpapM9pzQfNZeVKAy6sAHZCms8F2tECdCyW25qnr3gcxEjqU9ZYQJRVmRuX9U8mgK9",
  "key33": "51v4pw4qrrXadPowjWFTSqCkqJwrkSMoLeT1tPG8kaxwMiRQPy853oAw5N3CA1unjDYJmLPLsGmYmL6GPSnvmCCs",
  "key34": "5z7p37RVYj4y4V6Y4kH8uKHf5K8GGU8MppskKPxShQiiuNLGw2Nu2HYgGNGtrAxfX6rkusxPHpjiAoroEgdts1Rt",
  "key35": "4qy1RFeGfNGUnjpvKquZkRTenkm9biYJueKHvCR2zCfW7Y6qvijynzyRMoKA7vyc6r7fHHVS72b6q41KJk3V34sY",
  "key36": "5HBi6UkgJbYV426V8iR3uJtqdazEbd95YCyRwN6KZXQ5UAp2Bie9fhUjdsfasGcMEQYfyLjHSnEhd2zN5Vmius87",
  "key37": "431m1t771stRZDRFtZq2rpPFcTRmgxn8aCDn17oXmUbf1VTJV9eU5reUhhBoopuJNGA9WjaFkgq9wdZZaTR91VDy",
  "key38": "2pWvth84TW6JuEUopSwo44N1NRwCqR6tx25dwNGMVcGVY5JUodTKmAmarTxkE5cCmeFKK4Hg4ard9HSj2HM2k3TU",
  "key39": "8Th5HxKiLZFzHjwPyaDJihtDuRADPm93zP3RReuWUa6pyU5nGz1FthxmpPeZ6nptfPuFmTrzPQy5vaNRGxbc2Br",
  "key40": "2N5zHPkJuZixZAXG7br5mpszVGiHv17yFAfkgBTTN26UExsd9XJnjtxhWbm51FXrasr1h3QvPaoVdux89FLgN7xT",
  "key41": "4mPLzaS5PXCsJP9xpiVUCjtncCVkxYgLDkUNxX7X5JmCeXHjXukCbpvXs9mgPFdrxgSqU7o8cZPetWZ33FVt3kon",
  "key42": "58QbF61moqm49gQvk5S7fEYYErhBcAzmDUWnfZdLCCp4YDE1SvS9QJ7K6FzyUpL352oc3dWdtxtNc5YNDVZcWmyE"
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
