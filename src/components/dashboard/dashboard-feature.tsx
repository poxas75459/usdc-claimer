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
    "3oGg3VfdRqK8f7VWo8fdnGoUf8hd49Cg5CUriJPK42AD8Z6y6CaJ1L32vGmuJKxqbAeGQqJ7Neujeoq7nMQjspwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gCQzEyxdKnPLjF1SQ6sKhFhUanczKUuTVRpBAM63CD6NEHmmZP2XTH9VSv6tqzYp1rVaMJh8fDdx7qQ7ezmk7jA",
  "key1": "85djD3RFp2SSvfrtziT6UVg5fBpV2KSg3VZm8d3G64DhF1qQ8WRCR432Jg9ABmfSFVf3d9QPt1hGLN43tkqfTTM",
  "key2": "46Y6PiSd3gHxidVEnomTT1tsGsyoZSJerchc4dE6AzXR9W6ExyTnt2mSx3fUeX2RgiTWvLDu8fihKcjoYzULQnW7",
  "key3": "kq6DLjaifDvP168fG5Bxy5PqugWtAv5Y8BJPSiAKjtPnMcsmwmkXQBZyuq5j52sC79xKcqiYcVmsqXaD83DGkr1",
  "key4": "3FAccMfyL5N7jbK1gW27BFSWihiCPTH8dikGiBCK2FbUAxRyFc75dZNbQuTyrgUbicB4w6nu1iHxZ29y5hX7rahd",
  "key5": "3EhJxsncGjhBJJ7otSbg5jwrAjWpkACcFi1F6NzUWeaECyNMLEka1LXaA5anuVccha6L22CTJWicQe6sUjeaa3cT",
  "key6": "4XdMCAShc2xCEa3TMrkvFXz89LiyH5BbYTKqofSoqgqDwfGEX9WDEWKKoG6bNHn6M5hadac1LzqncMq1BjacqgDE",
  "key7": "2dwjJ9qCc6aNHx1QadsZKKMtmUkZfdbRBD3ue24qx7iWf1mo3qf3eNfMVBQFR3wbJefEzV91ebGDaY6gKKdWnP8a",
  "key8": "8BqT23mQjatHMZnNYU9X66NVjagNg7T1sFiLJm6wnHpSMdExqNi3zHeZ8qTQu5dfVpMswEVf7AgyY99MjC9yKdR",
  "key9": "XFvrYYeivcgBHcwZvihkQpgeuhXX6qnXYvUozuG7yH5UQvainkxpyXCc9M5VxN5on3mfvUWCsx7qHaDGzdvC4MX",
  "key10": "2ZoYpB3y5k7dnm1LH4bA7MbdEzHf7cSBUCk6VFZ8dEy29QR6eE1KYLa8sNeGsfgP3AhYWMLKJX4th3prkJUfo66J",
  "key11": "4y7VEnryQxA1Ddn4DfMzHHJjcTkjxRvEgBJKGG8if9wrKyhQfCKA4xi83QbWn7GfyF1UwS4yoiiqZDPkARsvn9Xs",
  "key12": "62R6wgp2fCwHDdoP5nYbJr6sKiCNDrtzZVzNVdmAmrjF3iWGpiQfbbV3aBpEgeRUMBobHS2QoRRvU5Mr85qpLT7P",
  "key13": "3HzrWq1KaoWmE4HaoBFHJhw9BodgZsyDo47Y38qSy4Y19ibTqbEAjrxLuDHqSQvR6MThjPy21zTGp2Ja1nqNffrT",
  "key14": "4jeN6C2ohKvSfXx3EjpJjExoY6939zhE8ZeGHnKw8BQzMt1Akg4baSmvqLAwyY3pV1k3UuCRkSRXrAwSstXvaq4S",
  "key15": "3N9AXGvGGVaW2NbC4CjDexVwNqgmXerGLnMCoBJDmTDN2cRWdLNFwPJhwGePjaefSkg9iz4hZxxaZwgHw7owXmqb",
  "key16": "u8Jja3KCMPAeaWKEhfsAzZB2PCxnRNSWJduF8Km93keRGcooLBFaeG1haLkn7hL7tnr4S24kjwEtqC9o3J1r6Wn",
  "key17": "63S1pU8quXZEfgEsN56c3GpMK6Z9UUp9bDBbruq4bodQnwxiqm6zq7woeZpNSUwSmeWw3RTnAWU8CVrQ8ZRf57X2",
  "key18": "2wWDwNTVqfWoabD1pT4K69GpxqMNLoXzV9rtF1HoA5r2Et4r7KYjKKLjUn9VTZD79hp5jq3fD52Pe1pDwHz1Q9x5",
  "key19": "5xjQVhiRVJwm8tRiYmcLwYgXa29Dxp8w74HdJT3tebMYCAgvK2tFhoL4HHncKCfozuVMx62ko5mi9tGAcoN3y9DJ",
  "key20": "4UFKwv8Dicscn8B79qQjK2pQkYndmD9umiDZ5UvVJfRTrxDdu5nFRikt3CuiUKwoW68ZtfSrCVyLViKNX9wLyK9n",
  "key21": "5ebRTfDcov22rCKxJaYnJTL4ePmoLudYYVLe1ZrGrdz97UQ9VUJmW6FiDVBLbc64ajzdhDaguybjKT23yS4FYJKa",
  "key22": "2WvaDqBsy5Fth6iFLn8TNtCExtR1gtvetPTHxwvWP3WsKkf1cbGtGWUhqHiZJ3sRid1GjrLr5UvjeB2b59ZePF55",
  "key23": "49NBXrdKghwESJH6y8W72zfSv3W4x4WLsorm8v3LyL9cwRteN2BVXPBRjrWQC5QuSLBuQ2fqTQ5RJ62X1bqMuGZ7",
  "key24": "F5eKWFiUeaZiewTLSyKWSteNk7tTywcrCLPpA1Js9UJCkkTKmgAb3TZsW4ngYyXKGxtqgW39EfVxCqTFr5qyknF",
  "key25": "2qgMTJNMAMRv7fgVDvC4pKVmpzpjdVWw649GEfWwfs3ZDQRJj2yckN5pmECpB9mqfEsHsvabsSR8VuUzFeTY5YQn",
  "key26": "47CywYGhnLG4MuUB17KiD2vSHnbaJDCRbrTh8kPBHxjqpvT8EeySZLkhqoyXxTiEya4VJrgtP2VjD78KACeFzDqt",
  "key27": "5jHZWyFDRfrG8VQspc7AEZ9tVRXQfTT6qTWrrybFaoiPENviAMZatmybhkBn8aRoFswKkVJWmYhoW2GqVyUYRP9t",
  "key28": "33pgPfx1bTvUkeDSBKzfhuKTFUkKrjWixC4j7PbvjDfqziwcDDhUeJSJbyW3wStGzUmWfHSYCJbhTvn1Z6G84REr",
  "key29": "3v9GjCr3y3Wzx1HEv373DgHnJfEVidNzM2Ar1KsApFW8LrLb19S2Bjw39x55m1YTjSDxDSAETVSzCpRCG2sptyVv",
  "key30": "5qqN98M1esLmcRBtxipHDjZvYwKjHTDSAA9qdop3p6ZDNSJ53FUMLy3XEFma5Vvk3mqwjUqGjer8KCPwqnvzGoy2",
  "key31": "tZ5UEKmktZd6g2zWGX3aVhc1nDondec6HEi5AszWtRixE82kN45qDXtJM5Wycs5489ZUcnxvXQGT7zg3cnUkeAg",
  "key32": "4dnMAnoNcJnd2tQm81v8dJEqfaxdCA33jXJAn9vvLTRKtzzzcVFD7ksriSMmStrc6a6Y6UZDTHVvVToiFq9rMoy3",
  "key33": "2xXpmneQH1UmGo5tU4LDN3u4MkrsQfNDZYRigRtqFBLErergDEEXA2PEPqavPeKSWtsoYEZFnzx95VZ5HJUjHANJ",
  "key34": "3w2ctqPXFu32J6TyQeSr7r9j8eZcbsDmJP1eVARrgRDRPsci5RrJBsEQFYC4XzJEwLi6GkZLVm5Xbp8JszL5zXv8",
  "key35": "32gAmUJdkwpwCtZNp4JA5a6LCosegrg8XWWzkCJTrGcm8mHRqVAUS4hzMoaUPBZRmCThRMxv9s8yUXyZyyU1au17",
  "key36": "3sWT9nKDyxcLhjSUVDcHBCaMZGoS9eDH9xZyss7NjEV1L4NYU6i5sUFBP4a8RY6z7HS8oFjJrnyjuzax7fKJ8rf3",
  "key37": "4ZnnpG563PKeeJHdfkeYgqQa72YdVZL7kPXGbjbK4sDVsCxUMHu2WossEYi6ef81UR1sYNFG1vQPv7dCuFUaZaU1",
  "key38": "3E4fh6KsCJEQSZrhYSURtqEKtGx7BMyiPHNkJsqhjaFyQDxMyGiiXABu2UgB21qAFYLa2g8zAi8ZRA52CJz6AujB",
  "key39": "3m3BetbDgzie3bnJ6EstTBRJxDL22KbU9B8dtUKPr2nQZtvFgMzC76eektNcYyxDNUjyGJ6SSWfHPEcqRPjDRu22"
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
