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
    "4oH1uh5SeT7zrzdHH8vJXWirygbWxz4nB87JsTEZh4NdmgRgiUbVHsFDS7gsbGG5csj5TkPFcoB74kT1HLWJJCqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DaNj1Zywhtsf2uvWB8PuBQyTBt1dPcirqVGDH9o5CgTDhBTjRsEMfnS89w3PP4KhkHfTpxufNYAgSUfiEnk5LbR",
  "key1": "NXFVgpn9f9DjLkevXehcxGsSC3zjqMSB9izCffcTRcDPBvgLtSsbH3JEwhzRegJrc5rE7GuqA3x2BUFz524GWZY",
  "key2": "phKaFAJT76L8FxDNr12dnHHhTtjpzoMgxM6xiDJPmXnrdN3UDG5FwjqNhWUthK5WczgwTzpWqxkWJU5EYbhQYss",
  "key3": "67aVDB1rW2gCADadEzWGNaPbqPoaqQCTcdWxuidytCnrc79UvwFqdLc9CePKzF6GizLQCuPvsr5wYZVKVfqMzu6S",
  "key4": "5LmBB8xXHRxT5Neb4AitJU7r7qK8QHJtpbjTGHerfpw9iuU6ahqNhKtznHjYFNsadksXS9Z1RdqDLYQAYppLjgZV",
  "key5": "3Grhh6vHZvexRZAihhQENrqvLtf53xULKPFzLSV5ScT6z3Z3WTAtz3rUmnM6xWam9fxVG1ahsch6qMuA5aPNnRUN",
  "key6": "qcjnCzKn2iYLZM9mCqUtUiRcfEbgEF2DLzn7TCPpGQ8YMgGRS1idkxkGcBarBUmELGHTzDGoYqgfLa4d1m2BE67",
  "key7": "SZ9nUKFxJnDHBG8KVeGZNSwDEN5GMMwPwyx8EZqXhH7uPKcK5g3iuFXyiUr8z9YQ6dqWqDaW5A2gswEoff9Ugmk",
  "key8": "3K5wwasB27MMmskyx2HpVxDAtngs3aq3zp8VJkftbQswBsFToN7wqkhKSNWpWspcpT8oX9QpKm5SvzST9HKMAzfD",
  "key9": "4HdCWr9iLcgw46HxwxeQQ12a9h45ici7mMqpuJrvz5ZA59XXqdbtYWyL9kPZEqDmJbwocMe9YZ9aYpJgV9YwuDAF",
  "key10": "M84fwXp756nF65wQSvZq3LaVky2r78Y82iX3bn9Zv192HJDQufrimB6tjHvYwLCVwis8SUPV5gJUwzgPrL2AJgG",
  "key11": "5JjcgpL6Ho61KcVmS74eYbHMQmNmXbyYqgctSYyP6uwJfRYiDU7sQyY4ej7EvTpyGuwA1o2T4qVR4sv8nQXAMWEk",
  "key12": "36nWbG624fiRtNYiLdUwHjVqQ8fmqiBGbURiXa6gQYP5W7fYoZd8UCyDixnAhzyWrG8pGBC1Q1BrskXDPVX1xsik",
  "key13": "iYCqia8egqLWpLuWNMGV31AUnaBk9mBJn1JPU5v9q5FUjWcLyBQBovZr425hFeUTYB8B9y54fxWxDZVSQCwgeZk",
  "key14": "1SguxXkuuM4sn6BwQ9tFfo518UVWvUH6KyhMSimgbgwkMPNbPHzWEMB1qHL5DPy28Lu4XBbVSKqYN266GKUH7sw",
  "key15": "5kVcKjUTCJbKHxF4Y2rSoZ95LrZXQBNjfuhuqyicBGedySaAW5LBjAsqqg72cvifVWVAe5drNkU4d5hRZg6zg9rN",
  "key16": "4cvRjjmH1JdSLxjNd4NqPYKBLgi2AyFQSWRVgNWMFASGf1DWAVGcNhZGaS782vEZAxtW4Q5DkXywD5Zp1vGc5jLD",
  "key17": "3KJakqvxYhKVDmRUNmnynZdLwEMVo6EAVbWzoeaTQC5k15eWUfbAGR2Cg6G1uGbdK59j6rBpBeqZvfhUu4va571D",
  "key18": "ZCqPvA9Ym8JiFLCkLii4HtaqZB8gV6VwguT2RwYsh5oP7F4nUxfrQzsTKtFhTVbQsvxHewmwYAaCZPBhY6x3iZP",
  "key19": "5o48xvZQKxcgPeREMgXDPvtxUittUFzxJTNtuiVuvLv27rNDq5Mm8n1nn1YTpRykjfjom84nHx8p1ygBzXCNrNFD",
  "key20": "7rxmfvoMEZPyQ3BNt6imqKpafkZeQC7E6EfwJxg37HeiqULENFPTKKZbZogbhvfD4SxFRyMAPCpqgsjFsTgJT4r",
  "key21": "4epArte3EeRscCPVCCbAsPfTQGevpYGEy5RUK2qPRCEcDGcP2vWLCDP2TQ79NvRufK44V6WiokGY8B1kRfvLAWZN",
  "key22": "4uTYWbFcXLnTXdF7rk7TgpCJrv2bFBPNeiEfUb7eZxzykFAZHK6MVk8zLbS5omgdmeZBuRARq9KEsDcEWae2yWfB",
  "key23": "28XNZxcJG8HXntBN22ujYbZ6quNzwgKvSvTmwTsDUyJJyzhPBqX9Q2drfjaNYDZjyrocoDXMQvfszfbVY4BFpdrd",
  "key24": "4fg53aWgM1bacoeAB4H9mXte8nbgAbUgLjFEEKLmy7Qs1nrZkhbjsrEVfSWE6LVQUAFdouKVNPKc74DcSedCMaEb",
  "key25": "4rr3nTgJoupntj79m433nNnCCaBBoPnRsdjCFsq4vakfGy18zCNp8YPK3BkAXL3eUN2CxyqK8couS48SsLi4gUAS",
  "key26": "36JgZ5NzCBUNnb6kFw829zDaiRWQPvRyvz8EMpBUMUuubLSpeem2rQacRhDGFvePwx3q9eHApv3B3mHRjQktLvA5",
  "key27": "437DN8jjcvL57pLbbKmFjPtrW2fufqkSjUuCGg4kmerZtgDCe2o6mfcY54KfnbKcVZFontJYSd7KfyibJXGPETMJ",
  "key28": "vXMWZDBZg7yANsDJKDmZXzcWYXM2cZqsLMMUre1m3aXwBg4bHwanutNSwn14FCgpoyLxtDgpiUGcb14fCoZB8NB",
  "key29": "2N5wverGMmgQfJ7kqCXQtY8yQC9AKbtsjdBMYJdAwxpv85xWRNtQ8aqshLssrUgwkNTP8ev1n6nw1H9Kx6TdroLB",
  "key30": "2VMappjR2X4mMocgJ4NtdaQSSeXWmsnskYqgQyJKdAZZSHSJqnzx4ZdDbuhxFw85TZWPPFxRknNR5qPXEJt6fMK4",
  "key31": "4uohJbvDzewYgobveC3SnpuDcumQuo8hhEPsBPU15RuiASthHLxMepjzxTZ6B3g7NERUF8cn2Ga2uREjaczf9Vmu",
  "key32": "u8yz5ThnXbjHWEU6HEnbnCvH3VH1QdFtnYhBLPg4KMZwrok7pE2XDLeYtqmSL6WZD3pNv2etX6pm6V28hHZKg4y",
  "key33": "36rb4PfBjAZpGACYzPchGsBgrQTTUM5xBLAhMG7Fw32Tq7REgkYHQ3GtvxazGHG7jpYbJ57pry1S2vFKQPKvE7xu",
  "key34": "37iACWyawyivKCZx4aTsi2huhfbSoCyZjDXTbEtBcpEC5J7TXUv8Qnvq6511piBpRnxVRBsr1qsiqfEWQMB2Twqe",
  "key35": "542CQXNxbfJD3WjTKGxRAydPLo9oNdWRVC3FXtziMKB6erjcnxbCbC5iYwVSq24GzBN5WBhveCVGnKBJKLoPx1zK",
  "key36": "3YGsBDLSR448BcRo4PhvfzVaC4zh6RX5yKpFzSKKt8PLeHTvG4PXD2VNvdzEmKntkY5m5ikNDQb9Z9b1fnNYaNyA",
  "key37": "2DZK646fzXMRxVoSPp18er4HSQUj9722tHKjXNqkyHpXk8RRBaXtGZgpr8N62unsaqE9wNpaN6VVUL1eDSsrQZZG",
  "key38": "4dDnLGEvPSgYBqNArgoVkmKnGJ6TiMki1SdVKDDFjoBhNRvTuFUbAjrr96Rr3uj5vK9aV9VV2WRuPvkSfY8i42Zc",
  "key39": "ha7dg4svkxAYVVY6umCXsG6qaramUruJWsPnPX3ZhybC9uDGGtdCrNWgsKH1D6YRAsh94yXZet9VyYW3WTJzTTj",
  "key40": "5uuz7w8k83ptxdiutPkfP781YFoyyz36GUwjb6XMNSm2j3LEttUY4VFCANMYpXH8i9zdS67ewgCMdmEjaAM97xb9",
  "key41": "3JScHH8BnbVMMwzdP3shCfiCcxb61foCn4to7URQLSU2XfjMBmkxapeCFaU9gY8WG9Ee3ouX8rHNUyEHmv4Sh2NU",
  "key42": "4M6XG62ukP5uW4QhumjRgGyNUb1zyG1623jyw54ogRrowvrcfXzh3kvDQwLoXgKmKBXinnrDTvhHBZXvJwGDr7QJ",
  "key43": "2ssWUvx71mqP61SjQjypbsfGB2rRfYRCdBF8RLmu2zmycADrA45VPEp15x9mQviwShNMQPwyP64bbyuNoa2P6tF4",
  "key44": "2rjmEVFNV9hiLypaN8UJWyjcg2hRerTBxB4BS97kpMbAyZKxomnuHBFL8rKaJYrhHniMYdMWD74QGse9hAJeiDbh",
  "key45": "3H38uSPiaBQ9ttbK1XyXS9csuNY37hdLsZwBiLWQwPTyyddUwFDwAvS1TRtGmd9LZymbZWojZtCX4TTqK63dnzcs",
  "key46": "2ot3bWiEdiABCtYV7qrF5s2N4JQZG5f1JzMysAi3tH33cpbaNmAyREE5BAzbiW67ipaecazahHg2hSRUd9V9mbZS",
  "key47": "3cShqzSw6xD8SBHSHBgqNKHBftM2jLoDqbSh5oKScQVx2aWgD3namBCPGQD8Gec2k71QRe577o5DwMycYAPicb1e",
  "key48": "5kTA4VvkHWkiVwjA1yiKkct5bKfA61CWiRLEwHKvfL9CVJeDnGBw91Nd4nuf8SR4dyfWTfmgam1jGp8q1GDmUQe9",
  "key49": "2PMezoMVDaWCWGCo4qeNHdsk48m4hmFvgc4RqwWgF7UVN16bL7KWrJexqExT19MHQFgwqbjvbu7EFmv3ZS8HeiRr"
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
