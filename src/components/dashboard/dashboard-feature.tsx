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
    "3ECcuTaSSpQ4kcCuy2ZVJULwU3PXCXhGycVnPowgMaGF2nXnum8fS4q7pdUo49VZ7Auy2Kx1hiWiMM194ezqAvfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EakugtmC5ZDSoXZENZyjNFtF3Q5oPK6HfYL42xdJpLyVn9LFqPbz8Hoi49jSJKyfTwnpQLJSZWg9wLAuqgbfxpm",
  "key1": "4gCzY3UMYzV155T2zQGDapFTE4dQYMYHK52VBMb2FvTV2FhA6KiQFN9Pzqc9wrkti2Q9prEvc5m7ybd7p38iWjEJ",
  "key2": "3cA73WKMBwxwmPsz57KfmFCJVxx35BDPNcDqwuQX5KPCqPbShx9LNrSMYzponZyK62EDJBZjTN8HVyEDUFUn9XyW",
  "key3": "264Ru1shjhWgPqtLszvwFb6TtLU4EZT4jJkrWwzv5yjHUAQDy3m7fiDRw8QqnigPABsBwxUSXzDYH9yvf9BVseiV",
  "key4": "529RQAtJiwmbgGQ9dcbHT1NdwBsjfDQcbfLmaCfLE9Aq3aDPZrQm6rfJZXuvkeheSPM7TH5uXxtddnraCJgzZpVM",
  "key5": "FGZh6TZx1auSKjCsD8ZxcTpqdtTYnug7bvCABr632wb2P2fHcBAUJfyop99ds6BBzBZ5Gu1iqmgc2Geuw1TjsoK",
  "key6": "SA9CNf9W8DoyG6osfdp9wNqoQXnZSwGw4vb4Gf3yWTLDSuFTkgt33Q1r6Ra26Ah8mc6PZ9psEV8LYv28L3nQVDZ",
  "key7": "2CG3BWD2v8nspRLoW5PaAXdcAfDwW3D3mX4acrRgNUfDh14iGg13VBv4NM6TDKLca6D2YK6V2nj8Uart7xWhJmGz",
  "key8": "2EiAt8ms8XJpL5PgpMFzNbpNNBXGktSDgBakrbd9SWStYJV4o1UkSe6tiKQhNX2mJNLJC3qyrGsFPv7eSHcKw4At",
  "key9": "6634yJpAaGnhofjEixbgxav9gSV75cjmqFraL4FE4ade27x3eRgktzEtPJPU1KVaefPB48XNkDedCdRHTT5vfPwn",
  "key10": "2T22aGQR19PhGy5YyjAvLRn2y9gK9NFj4vLC7NMQdn129s2GtWdyvBCvSydjbk2q1yRZFgEw4gjV19QNpp6zF83U",
  "key11": "2Tf6v863TTeFKC5KN8uotQyVcza7HUp63Rd2DhYnJY91SCeNGwgkyf1HRtXZkNJwQJjFKXaa891mHZqDKwiHL6qv",
  "key12": "3hUJJqYKDyvU9VBJBzbNYRjwA3V2mVCFcC39duWs9Kygj6vh2xfDz6U7wD9zhioVuYWjRAJNPyUYxp8HYnBAhTG3",
  "key13": "3rcBLcAz3SKzJb77q9cMcd2TfbRy46BUzFWL8PrDCPuebX2p8iuTsAoN39n8eUjj5nLAFNbRLQt8UwrcgWcSJtLa",
  "key14": "3TwH3h83ES71JWauPFkdMmqweMAVyWuRUsMNnEUYPgzfqAzDhSN3LsXB4bRF5BgN7UWdh1z6pKsb2F3AQYRRLUKX",
  "key15": "5XdWWr25nwgTBGeNFsPb9x7gaPpSRviAU6FuKKYhuJD5b6nmsGuLAJfmbqACB1YjiKicCKKbuh14NwgqYBmyiQZz",
  "key16": "bwzrrFSnn1brhyrKwo5QJePmESuu3x45EHyZzi92BBrxF9Twkg2BkTPGyzxUQANjD9ap6uheFBnLuEKC2zS8Fu8",
  "key17": "5DDuwCRz3YdJTjZhNCG7VHtwLWWdB59ENq1xJVgXtaS7Dg7DjJp9LKMCrDeW4DUH15VnpErvxBVHjSebHqZ1dLXc",
  "key18": "Rjkc7f9wYctDhaHJmJCtmayCfoFWSoBShMMYVEbDa9FL6aHec8VVEod3cFhn2f925jnE2RNrUwvevvMKCc3bRJX",
  "key19": "2AnTDE6GbMSKAfwKnzVxRgwnVWuYXpzmsLhYA6Bp3934nuEmHQxi5W6vthPbShiKKb9uH8ySFaH4tUYZB1o3BsE3",
  "key20": "64y7oShYvHPZdLyCVV7YdcEr9pkszNWkMFG2g9k2zUMnTGJkmfuaBDACvxHsUu4uFZ6xoMq55ERgENQNjh3SnuEU",
  "key21": "3TSTpnZnDi1FpD8R96jLjzRDee2ahfxbRdHcYfdxqkAV93ZCDshGorrkYxmd1tpkao16prwace9bvbFKWuhp4YmF",
  "key22": "59ry82mf71f66zeG9ucZwjLi239CSS9o9Thv4FwaQAz8ZaLrN4SEVtFckD4kYED3uxn1M2NhvAZAUMDCnBFEVg9K",
  "key23": "344e1XMopJqvMYSkq6S7D6yeN8mprGoW1qr5o7XrvDjWTJ7jduFvV24jr87SJewQCdcnfLL7UueJsvpdLTryEJ8o",
  "key24": "d7dnZFinsbq9TRULNdpwmFrrT2wiA3aEUZNpQMJ2ZqE4Ls917sqbHyxSRv1vu7REFckhUga16RfbhF5urgfyGpE",
  "key25": "4gNF51MF9sBKdsnH6CBCndfbqJWRQdDZRPY69CfKeSUkQYajQJqpHwYQAKZvb4hFDwzhsAScpbjKS3dNmECvZjX8",
  "key26": "Rix5gD92x1vwAW9oT3vj3mpWeAeZ6x9tbNXYaxeAfjnqaLfcm5mRqg1NUVzx5eMKhKS6JBZuG9YgN5TUUbVPfZg",
  "key27": "TPe4bK63i5e44LjEeNiq52xvZEHaigGaMefUSGG2C49wAMfGwGii7AHzK6ZnkhdxFaG5kymexRZqiZP7jzmW7QZ",
  "key28": "3eAocgu4PPckcxihXxfPnJiaJe2z15eh1HRx688bu6TNkCXAPP8ayAmrj5xpNgKWxJaCcQQKKcFF9QWj1F6x82eP",
  "key29": "65ahBpf2j9Ndv9zqGHMDV5MpnUkSoBo3kXpWLE6Rm5uWRWuG14ZEyCHpXKr8DvmMrEA3LTeBzomNadPv4PxjLtWZ",
  "key30": "5eCp2dYsgzP4bxqHX3x18dpzG6bTLG41WdgjSJNTMeuTqH4GLHYXeCc9A2VKgCwLxvnWbNR6sVHG8HVQkoQPanhA",
  "key31": "2N6smrZBoqwu135tosTLmmhGiSLCv8tQ2vZKuALH7M9C3QjjHxs6Kj6Eao6SLvL4h7rwzdC4wPp9ELJU8vXTbqdR",
  "key32": "bnt2XvmHrYn7NgumEnKfJKWbouc8z7RJ7ufKbhtZRZzhGwo68oyFJbTFXxb5vczKd3JnwSA4eQfYSLSkS2cCSdp",
  "key33": "4METZcw2ZrxnykUNb36LZRTsYUmL9vjeW7DCtknvWjLdnBBfBfiDFEQqVjFp1jAWq6ZKihaE3SKCjHhk6vVm3Qnu"
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
