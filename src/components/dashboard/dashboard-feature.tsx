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
    "33wV13s9oQ5nDvTxSSEGhZxZ85dGzUd1DbKCRPrbLuL6BETh5ztbQ9j4RsEX5UsoXGHWoswHwcuyjTiqKnAqASZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gkswdv5wczxHpHMEADhx8363sVuCCnC9MZC2FcB8D8Vnr9xY2DcHnQnB8Td4iw1MP2hSKdoE2bioBvA8WJpg8ns",
  "key1": "39j5jV5GH5FS5cynv4RyBNREXmjbxci44uA6gPpzzU65VqfEhaCFzxBK5Z3XNg5uzbALh89QpRewDvSHqqazyV9E",
  "key2": "49wnAkPDASGVTMuLAGbmFSgACGcc4NEFgDpqziQKZrFwDeiacCvLBb3SZttYbiag2EyHS8ZTwt7MkctEpfXqd5Jv",
  "key3": "2uRR5HhzoQv4mz8AwzR3LTJ84QUiHAKEVbZubUJV47FDgjNkkmsZq5TEkmWQg5zTnBRevnAvrzzXDwVEK9m7BEME",
  "key4": "24QrssFbp6TrDKgL5EWst8oN5JBXHxVnbHFEwFyDc5TJBcszRpCqFaBiWRGexDVRT4g8u3VZCeFttBJQbVM1KqJC",
  "key5": "5Y93Ex6EET9aomAxx1HwbX6Fk1fe2cm9ZRe8XnzTt6dUjqCmK4fX387tdJ3MhaFK5hJNjDp7zw9oYkVu5WCY1zqp",
  "key6": "3hGrxN8d3CKi9BPXU51AAyLZkUTkMN4irg7vxFPYNrSPbMba7SrwXbgvZeZWCqp8eadky3e5aFLai3nRQtUSQeHa",
  "key7": "2e4Q1oVHc92GSnBUnpK2LMG541sFkbvv7QKSxRhXe1WmiG14DCLkfDrX59sHNSG2FN8ppjLYF4piU3eTmHr3uy7y",
  "key8": "63hoFBYUtiUyWqxtFE3CsEUHFgxsgnhVwHpxtcoK6zErFANXJ36dxjurtyxSjK8q6rCeF6VPxm2wVEiWQEh76iPw",
  "key9": "gkvcW5Ei3v3CpzkSSKoDv27g1CCbYik1UmR8SP3mRXyjQzZC6Mg1QEdUVyhmzXdonXhKdaqq8uEidQ6ohULUhC6",
  "key10": "4sDXYyi8VQB3EfHNCm8J9btvyybMrjKBqbTAwHW3fmzrdzGChHXst31j55Q6k4wHr2kSLxr8znoTy67y47oaVT9V",
  "key11": "htBVVwNuRKWQY8qism5YFLShySYffQ2Eggt9z3kBSR4oYBx9n4qe7JmZQPkGxAwwaGUZteHyZEP6a7fPo7WJXUy",
  "key12": "57CinT93pWzYwDmVVjjDXn8g6rbkuC6XJ7eDJHALc1j6Gosi3sFWpDSo275Yxw5Pjppo9jiAbkiHM7vHiWvfbs66",
  "key13": "5hQXwNiTQLVyfUZrBssTauTZgNpX5oUEEhkmH6sCqLV1UJ5c5T3KvtqxDDcP2Y5KRrxGZVN7wJXA9ptFMCDeWwHP",
  "key14": "2UnvsX3s2Jio7EJgcpqcCPaMHvVVUwkE5nbT7DYE7t9mUcY573QBUCP2rSCxmSqA1GQNRGvYmX7iW4fJEpufrwna",
  "key15": "2skGkQnNvG2TTi9vnbt9Tt4Fo1hdyVEmjE3vY2efX1URS8LhrdYQoqHHPCRjkuYR54dpkm2H5Yg8diGFgemf9zYH",
  "key16": "44dTn9EyGuH4cFENnxQPsym3ofhb2hQP2vQFXRazDEKqDW1sYdps4NPWQNt16VnsvrXDEQtZwREJAghAtRYGfENu",
  "key17": "9MKdnCP1nvyjUg8C4oHtWEnNQtx7jZv2wNafPqMSmt3iur2Ctte4tyeZHyrZu1rVkpFMVjkFyNJBdo1wM3ppB5X",
  "key18": "Epuv3S2o84tadZENmthhmx1ZVuaxVMidHdcKf6LYffJMyVQBmaepPFQkX1UpxrCwCVfQXMbxjWq3fmKYWV61t67",
  "key19": "VxBS2Q8jRHosso59ffxUChkiAgptaGdZtweRA5Fa1Agk9N27ps4eMQuPhUfSKHorqKf2kqWdmhyeQPUnu9Kw1CM",
  "key20": "4az6aFXE8XVcWHpRBukcNSHwZzzJp24qHHR4eCnF19K1Yfp5qCfUST3RdnsHUSqDWEXrk7BaJe2NNfqMxAdr7chA",
  "key21": "3XNWJN2bDjYA8RgHRdNuKyGGUSWjNBt2rwHzwZJLupLaBe8scvN4v6rQtkXeXV9oF3EtBkpwGs8pForuNbxGouvE",
  "key22": "pnvHJRdP6omToy2v6zN8jn6murbcK8r4xvKG7LQXdTEpjgCVsoQPPzJY8jpn8aAVVixR3uJQ4ovzgt7Yev4aCP4",
  "key23": "2s2yxoCh4EikegyZomfRMBbVs66AbRR1DPq7uRew11BqDPKxEa3hT6BW76jLuVaSnRonNSo2wLYtvSoxzQBD9L7M",
  "key24": "AFp8xnzzYcPUXVyijvLb3pG2AZ6dSnUjePX1NM71cgUsJzE6nJwzKjWvGV1z6MR8BkHG8WN9XCay97U7w8Qwv2z",
  "key25": "3JTgUK3xya9zTSrfuk2PEiCh5M7kJ5D8uHCbTDLnZ4zteDPJywM84YPiLCKLmhgR2pgvtQp2LLVAv2HxM1fU66PA",
  "key26": "44VHnrqPgXupaQmSUQNkCQtAaduCkEMex5jznQTcgTZLyiJJNEayLjwnkL4KtDPxc6YP9JsyDeJ67SgPxWdqthT8",
  "key27": "DBhxEEsWfwBB86sP367vz6bZztsMQqaxwqLJNkPFvXRYsuffm3Xv8Er1WAX2EhosmEmiCwcnwwmWf5apKi1yvCH",
  "key28": "5DjJ4SJPVXddYNYWacUX5YLnNgpnzX43uCFjmqHbQtkrqp2zQjDiivnT7mfUgqmuYQ4Z6RjSTQ1Rho7mp3x6cioH",
  "key29": "233myS8w7Pnhr5Hp6XKEpwj1M712XsUUNc4PB3XxcD66jN1ZahY5LeiHwQpAUTFXj5Fwmr8BiYtyRohWA2pQuCiP",
  "key30": "31FxEJ7WAUme7o4Aw5JSLYpYmko2LrjbfiW4v4jp2YN49TLWuVLjKacPCGrF5T8xHtMM9WrLWUa6NwJ2gGGdhavy",
  "key31": "4cN271PNjxj9jxhvx38zPoEFcEHUAafoZKqpWPV6Z9rPXiksqd1ApHzcUALMs7ndqKA6DPm4yS19SEMbQ3zWv2b9",
  "key32": "4skNipBbYAgZHEqpdpyNg1KzeruSbZUGW1rnozg5zzqgpzA8rgAboXJ3kUpqKywvzqFemVPmPNceGzr3rB1Q7tgq",
  "key33": "4shMR6Mb8S8tYErnQtfo7wdzwxJFfLSAs3SKmgFiojHYjzGFq8fSA1KdTh6CGQSj6cCXim3kvBihwuiKc6VWmzTL",
  "key34": "5hptyPFVFfF9cqBGJgT2YA9CT3J9NtdjzP1KWax8H4LVbJW9k29AnY17ujfvXXL6GH7PTSSffCmVQddj1ov5ew4d",
  "key35": "4JC3VEtvUHQhmSm9prP3tQqonUyr7Y9K7RCBwphstoMEVxpwreVTqqsXMYHYJGuVKGri8EowxHPs9ATLzyChGZqu",
  "key36": "54Y9MDP5SHEpGMgi1F9HQNnuanT2Pw2nkdUf428Qx8D6VyDwQE362aLzcG7kx4cfihV8ooaZZ7GXKz5Kp7GUrAmn",
  "key37": "2wfLBG5VZS3K1mykYv4V7TQ5rk7B71UT1PBBxpFB8qcD9f6nBNZDBay5o84fowmMTwmwvTPYwT4eMgBRSXvaDvLq",
  "key38": "4EbKrDV9wwABvEs6CPXUNptfNzNoYiUHgBopda1LFAoBktrRn5X71zvgLboCtMi4UnsuJSf1aoyvWDPJkNjhwQEM",
  "key39": "65kcymYEyjMsRn7tobBQwDaXfZYJbp93ebXwkpqRNPaZ1U84LFqDYu14mEcbcAwcDMMyhwPV53dam9rEWjCEHUV7",
  "key40": "qmpcdUKRNBLw3DMENPbxaPgNaQCxNMnb39cZZafB7ECoPrQUGfWxJFpfikYKrJgmUutkDvUqhP3KNBg1fRjzN7x",
  "key41": "5bFH1cNUsorMiDXCKLHpDhH3nTooJ38NwP2SFSjzwT2t15RW8ZRKGuBc9CsPxuBNto68QHPWBWCiH32xWKmuCTME",
  "key42": "5irnr8MzyqvqJpTmuEsXwRysHhcuSrksdgGK69qgJyVGUcczyt38szQu9f6tWv2wiRCi7upCrmZ2JEWFSfDtwn4E",
  "key43": "65Y243PyS4ATUx5xCMdn4oNgzV8ovjUiG18p6VXhX5BzAPZjU8cXWhnyfqygrryWNAjjX2BEoEBVnasFVnyU8Lzq",
  "key44": "QBuyh5fVBmifvLhH3PYAqazLZvmUpSPAz1R8csKLg458zBdsfwhecSr9ttd5MZSUqBUXsKRuA6Q23giejM1MwfG",
  "key45": "3vkETL7TPQZ9ar2HQKfFADUUocPqs4weB7vm2c8uV2YU131L7ffYzTW7QzVgfGivWpTehVsq4dnNuQc7v6SF7Gqh",
  "key46": "37r85VArQQKnG23cucMPn7QpMkfyeBTLF7Tvuh4mxp5X3dXFRKZRbtnxWFcwDXsrTfkdbJzon9XwTwCQq99MHYoC",
  "key47": "odmWGxAo27mQV374qk6bvHp7ySZu3afymqJ4mu4hoRvoXTar3VXdzmE95zEQjujRRhhhAsYMMv7LPTTgbgG3bma",
  "key48": "23KHhpo837bawqb7X6EVKi5FxSPbVNsgxcpApEh39hGzgoc7x4hacqcr4aBE3ofazD5LX6FXyeNz5KGprUyo9QVw",
  "key49": "j3nfv2ebkiJPG5Gzzxok5iwbYNMFn16YucvdXgPUJAkkfrDqtQPTt2KmebDLjNKmEM7USWQaqHcdkAZCRvy235P"
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
