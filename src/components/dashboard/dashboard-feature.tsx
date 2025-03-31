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
    "32sBFJjJqUwDHHmQUVWnXy9TeTzgFEAqe2Q7etMRaH8dB6kgFA1SA16ckYegknhcFaeW6GW6sp5Xaw1rFhjQtAmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YdVPUjJSzKa2h5iYmYFxarZ5Csr3nnQcgaK91xzpbFtvjuieR4Af74GZDw2phRq8rrFM8sDaRUKwW3EfxqfQ7Wy",
  "key1": "5WyHRrV8KrVnqYP5Wqd7CYo6LrorsJ77meTUfzGjrvpoh3mnyDesPRt1BLVZEZ1R6qcnnc8afLo5eFw5qnDEvRQa",
  "key2": "3ox5NFPkNfYzTKxWbdbLisYhfzu6DnmwyGi8cj5ELhEaJ3Ms32nay5e5qtjfdEA9r3Le7GgpEnSVZ6sWDhSkLkvU",
  "key3": "5Z2sPN8NEDmtiGKhZCBmg4DkppDQJD4Cx6D6PKYqqBZszddRBT6CFYKjay2D4Wp5qPdY59XDWiptuBD27cfZEtUo",
  "key4": "53FBuEordSw6X1NnvVwgy3VAG4VVNJhCgw1Zh183BNUqVAouMnZUW2wpvH6vbuMVtomw551M2PJWoA3CiVz5XkTD",
  "key5": "2mQLNkaVgTCW7sT2NjH6wGuEeVQ91NiAAZn283Xe1GBSgjk3k27CDyFVBA9ChAQeaGeNcURTeFrxoXexkCfCsnAm",
  "key6": "5k6kXd2WuY2KUXTsMkTwQFUMzcCjwbRwm76N4YjXt6a7bR76NskcWkDKypHk57Uimwsx4cEmAeKA7YBXGGUqSntL",
  "key7": "5jFLofjKDs7KoYzxwtijYWNcqe5UHak3qU7KFCNgyVhM8WcvWddzsUeRnLk6xNzYeS87TaUAbFxECFtQpehcNmHx",
  "key8": "vZi5sDhc4ojRAB6abvuA64bq4gpXKjDTseBe1cpgCDy3ApeweqVAm8Ew5JGSWtQbTUVnXFaWwbQEFKMuNpdZLJv",
  "key9": "4wYuz2ZtFReLG9w9M4PGXPCav4175TVmd65sF74grJJDcr7NUQvqkwnYhoyQSh1D4yEPNZzgyJqKNWaddueT8uxm",
  "key10": "PBVamTwWUwEugi6kszYi2f8Mvx9pAqtA9vhufyW2bUkBvnzPZG6FyDck4sGaLxBki3EZpT1mRFbxH9pCSANWRW6",
  "key11": "2pB1sZfHZK1JgntNUsu834B3CwBiuoB8szU8WDbhzzVQxwcdvdW51MvpXbztbeH6tdKKRKsServH6Kv28KKLKtSB",
  "key12": "2meniEAbmu3xpJJkGh9u2fXf8NbfGbz3qR7BNkL7KMG5492rmWepFibUs8N7gNvJcGxdtWf22HhZ5weHgbMUKmEX",
  "key13": "Jg8zCF9F6dwtKhnghEpvH3tuQzTwmuMVUxGGv1PKWxiZw5dFg8TnaiPeFVfGf7DhR59KLzFeqx82HGWcVAhYEGt",
  "key14": "3xM6Y7dMgeiCEgX1YDveNpt39BZjpA1Yk9gHYVgfTgi4Yy889kavJEPrN2iU1LesW2rcdPWdBitNAUFAuXrwqnJF",
  "key15": "2pfx8Fd9dTTSzp6YPQtZAnKxj6xJrSnmPBEEmwXnLmMepGs46QS1u6bzoGX9Lte6cyCj2c4bhpk4ogx5HVbji1Bw",
  "key16": "4UdBADGdXS3vNsqMQkxkhsSNXKdQDBJYmT7BJftBbNAh8JdHvKiCDdNYDS8kXa9b6LuQfaEFLAQL6Kp68u5cQisJ",
  "key17": "MieL3jL8soM6oXXEw9xaud4E3DQ8vWiMzssYPrPLkbw1rfnvZ6c5gR1cPPR3dvt1GrW5Rif38zFxzNseUPTNkgr",
  "key18": "3HLVskQGZ66dPifMQGhTrcSgVofiuYHJRmWkCbgv4DfDt56jsTZemiKLWz4bjxUcoRa88xioUo6epfVHNjaWZQbA",
  "key19": "37VdU1LvikcHr9Sta7y4Gk7ipju9aE7cFuF391UU1JnS8prTTEceXUHCDzs1kpJXhzHhqPYXeWotRfQVgKbVvk5M",
  "key20": "3dgUqkXxrdxcgX1m9Cbt5dopDs1dfWWoZe59MrwpaYTuztDhrd367S42JezeW8k9emBarzfc8ZAWnBvmW1rTHGsX",
  "key21": "4oNRcJuNzZaxk1PhaTZSXuQyCjXjeNxLVi6USP32nwtgMgzfomdxfH3QmyzBPhKLA7ZX6vxPKK8JRiuAT5H3qtbL",
  "key22": "5auizL46sJPW6sif416tRB2FjxcFUAsXdVv5kUNz8NxoouNUzzv1bqz3jWgqGZTKbN7AtnGw6R5JGe6mEMLYJjyb",
  "key23": "285TYGPjkUgRUWZfXuLy8LqFXikj7kU6kHMVtcmM6nF1FrqxoAd9z3qrRps1rEEUAbwnNDqu6uCKcjogtK37wPCp",
  "key24": "4i3W3biiLhTsnsQz6rvtrMKeR4EPFn6YoXGFfWuaiCcm2vBfDN6XoEfTtapDzhi8Y3SVx7G1jixYD8BJF7PJrq6J",
  "key25": "Qm8CrGgybJhtFkvqr8f4r98Yk19Ecfz9CdRH3b95mWmx8uH6rZbv3rt6xdzFSuYfe7FpSdaxgujZCtyvyagRtz6",
  "key26": "RXbhD3qwLPV6YBSQJ49HE8PhWfe56ZJJjE1rqyzeXqXWmzCLcqRztiFxtHmPtcKnXDSA7HBCzQsGNxxyYC6wjfu",
  "key27": "5psVmrxj5z5VXNFUc6ry5jAJrVmEJx3spxAhHhomFc63JC9PSk3xcmAio3LPbjppmxiWRr7wbNZrWXWoUwXfHtr1",
  "key28": "3cXo39Dgvh2tPsBPn7j9tngGmNm4xACFBP64cKTLaEqfe6MQNpYKNsmyoGKxUoDM5a8NBqEAND1JvX6mV2edJU5R",
  "key29": "15JEdWGzPp7JPApZUqALtacC65B146VyiR6ieXkuR63cuPdKfEGYNMWAwoVWdFWfeC1YEAWwzZZNy37znr1LYTv",
  "key30": "58PHVPewQGgT8niNRqXshtqNT4M1xuwudXrNzftkgMn8CfcLWPzXaG1j681d2TsQPU4YZKwnCEb1gTFUVoVza3Kd",
  "key31": "4yCmBPvYyjT1pkSD52yF894LTnhasxsczPADnuAuh21C49fembxZobQbtqT4fgQEPhC6xkxbYe5eV84cvP7AZud8",
  "key32": "3ui2gWqmMYPKDk4V4CpTh7r8JwvTkLLa3E8kib4c2s9nYVTRrxrviH8n5Pm7v66nde3K3ci6LnEvGFZcLvV1ob3j",
  "key33": "3VNaRAMSQumfFg9bqmHSuJsoVYj81H2Q2a693bynBhSXeZHt7ijzcFpkn5LeeqrSGFEsiAokw7n6P8PcpU7rm4PC",
  "key34": "oDuuJBTsErZxJCb9yY5cDvoeWu8oQbgyk6F3tFUQs1rGu79D2BZR4676zdx5w5EAHW1J3ZbbV6iznVjkMG9pZqK",
  "key35": "4ZFywegyur88xcJMJBqtxZtATrBKbq5yfB8YJDKAPhVr6vGh5i6EvNQfbinVKBeMEksdh8DbcYk4x7idGayLrBPP",
  "key36": "2SbNevnxaBisgJFFxxLLWUhvEP8x7m4Lj3rVgZB3SEkwpXZWNQsF6xruhjsr49knPnRvZPGjemFcDfHmZMvXBNzE",
  "key37": "wFK2DBkZocbZjUkN5ZW1zNFTPHnLRYn93sBs2dXGvAPE7GJtZkyBgHtY6259fzWW2ZSmcgMBNDxhZJFUqV1gbLR"
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
