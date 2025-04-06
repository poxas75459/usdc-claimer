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
    "QZtANLWdz5HqcHUXKhQf1TAsD38eu3iHC5wTuHzFFXLQ738dAN81YHd7u8stAdMhxDVR4A9CXrxHjerZwx3y3fP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LJ4PgK6Unz3HkxRwadBz5b7jjAP3pb71qLjHZHwNrXTb2EBnWc6oQNesd9wV2WiPYeVmE5b8voFDgBvWxpbTnGT",
  "key1": "32JtKkc2xbpJ94iM4pFpHh3akTrg53zApLXwxrHqP9nNfu4s7u9Q3tvBMnsdgNyPo2qJd9SKUa8biyXdopEf7WTw",
  "key2": "5xe2b2dg7WRb7DwqnzYPcSuejx9B6UHixT5fFnaeEujLNHnLH18gvPS7Fj4HvD7qePyigmobcodLpvyL9RwXnjf8",
  "key3": "3L5osiYDXhiHFPvJm3CEENxmimpHHtQuhE25SkBBcHd7K8iYCPZhsMFpCGVAs1TSN1W1xxuKxWKJo683iqwvYLDw",
  "key4": "4XxTMhdpTYpniwv9xjCvaEnJdiMsWnDNvXh6BrznBEmgqf1NqGptT36QQg2MuUFrjCtYXJRG759epyBaq8uU3LVm",
  "key5": "3jrpcYvpummdk1n8MqZGr1ZYi66T1EwJ5gXPWeBKgARRfDSW9ZHjwoGnNU9nRrBPZ7gTgu7gxXnf4XdX7Uw1bdSY",
  "key6": "52sQQRs1SwnzXdsCoBv7owQzCpubYQv3vnch1JHFiTdhTU1exntUzWLqS6frzfCHFRLBft5dTJQ2RCJdpAWL6xYD",
  "key7": "2rPLUY2fwdWxusXGopcEszB4jXxjeMXesB8BtPsBQF9KiMfN1kymJsXujipZV6NEfMFUAZamfVjX3h5zRGDPDkm6",
  "key8": "21f7ZXDAX982Y9VunBNVmHT8Mw8Xmv5TYudLQGkgu84RgShLH66Rw8RHQVZRjHZUd6dU8Lz4NDWvvZ5mTVHjy3Wc",
  "key9": "5Esz8WwxrGPapD3f8LatY8GXFYfjpYESxxTbshuGtqSVYB5h7PXicMBaKqenJFoGLVeAJ5nYWNCprYyfGkCXdXkd",
  "key10": "3jjW1MpWeEg5HdQxvp29jv5ktPS53AHTsAzbanX2TzDo9UXEvrsYmmvKnP8twnVPZFH8BvVdPttQRxLnptZWqSVG",
  "key11": "3mGHxjzH3TokULmFLjNWwxFh1rL9ZMSest1AKUbSWa7HRn3ZNGZ68pz9rFGNZm4MHXzfTgtNcpYKvGFGTiYtrqm7",
  "key12": "YtHxgD5PyPB7Pw1a2rA4etbcudA39iWiXerXLe6Yv7fH221JekSBmxRbZBnNNWYgWZkRL3vmCDBoG3TnmCvLzAb",
  "key13": "41WqNap6XV2Y9MfBTHB7e4Lip3PHup6WLz5s1WYNCXMiGPoEGUWyvk4ZvaXqrG8hpbNfNNNdeWCjwph8Ndhn91gy",
  "key14": "2Q6AEa5xdDebeJiGdn5vKC8z9VBewh6GCvHqu5qKwatN6Y1fNocKziGpB2sjDakR4DxBKpfBkVqLtQbFEfpMqk36",
  "key15": "64o3RVVV4tkBi2hLoP2TQ4cU4kxajSwFoAcwmqSuvfrpmWjQAggJTctAnFA1H5Z6TLYKM7qEKFFyFHnGsXKMhsBY",
  "key16": "z6gz6u181bgnDqunY5bhy7ADu4fxdNY8XUyXXQp1XxpcvqhYGmfCNe7CxnhxdyE1KgEsc6pSNTyg6mfs3wLV6Bd",
  "key17": "5xdurFL7odf2YeEZnWCadzCXbtTSFWyS4bEy6jtz812P3zQM8VqJRs34C5cvzkLA7uRcPPp6uMqPCcfoiTkH5yVp",
  "key18": "2nK6XHbnUzWZNQvELRkKSGVNBHyWGsn79Tb8ghMiay2MocoA2cPvY5yH9onhhrpsaSLwzQbydps76aF2rArgJ223",
  "key19": "3Midmniu1CPzP2T2Wx4RjvrcxywnJDVp9BiFR6PSUMza6BKhHzch35VvYFcUh7v3UHn25rEsjRWr3YFDBcYFmYbB",
  "key20": "22PmgNMS9YhiUeprUPEnwJJGKCaeyL41KghguSZJvjcSFEp94pp73xjX3SKo2ivgRB8pUFC6EVZQ6jycv4n1Hya4",
  "key21": "5W15kQtiE9hoMoCW4CLH5hbVwtu1GMLRoxhmiVbWmw3NoUotSC4c4RfGcFMXT7y7BtmXP6r6K7Zhqz8ZgJpypJSo",
  "key22": "3dMHXZ2685X47QJdmcPrdNH2tfMc5AzyktGM5vQFDDQnDWnS2o8PzbpDm7cAVctFN66a7oTLZqDyFoEeGFTUpa3a",
  "key23": "52C78XsyXtQkEQdYEuyVBzW7oAcMJiocTv9ViarpbvtubpHhzFwU7kQ72boATqT2PLr1ijeJMTrYqZw1jthqQMci",
  "key24": "2n6h8f5KDydFm1k3n3rYEN2FXqnZ9H3cRppoK9xyi2ibn8rPPpD6Quabm4CMnbM7V4RPy8wXd46AN7gi4s59tLDj",
  "key25": "3UiFNbSQhgqVXFtvLKqKREFCgFwJfL9XEAo3V9RVYhWot5gavswgYLdbzzSZNf74fbosbMBxz8mi8U46batpr7oD",
  "key26": "4nyNhVDpZQBiVgii4qST4nGkRKrTZUSTu8T9audvMRu2ZVmMkBf4CFAxU43GD5tviGdFi9R8X5UJ5JCiukAce92Q",
  "key27": "4unb1EQK97G2EzGPRFTopTSqVydbhgqfwkQATHUa2yTGhYhenHS1TUP2t9oeCot28mNpYBsk4Uz83QoUzhvSxGAU",
  "key28": "4i36R9NexrzbihDuBkX4BbtKb57yywEpiTmJgHfqsaD6fvwCzGt9pLzQtQh42xf88bd227P9THWez19CWbhEgCWP",
  "key29": "dzHBvhuxcQRQxqVnFnjx77xQpYkYarV3Gc1Mf7gAPrFrwoHUjwkGWP3fzZy4baUp4XtFSeGQH7MxDjDG5os6nYh",
  "key30": "5xVgwgdZfhc6iwNSV864NQCWPottfaPnsbeNRs6LJugpgJsqQqLpapVUfm84Jxwtr575cGYhcApGqLt6821op7C2",
  "key31": "2FSiT3MtAwLvq4fmeo2zmc3Zwu9DMyDYR973uRoRJV3LPHejRL2Lg2JNXFULSgj41FQzxR9N9jM6ywdFMyhHM4tG",
  "key32": "3jFNv9BM83TmLiPHEzME16zGmXS3aWojSkstydDagh5AGM7NF3Vdcv91GFTUaHpepzZWLDUeDqKAFD73cVmc9G8N",
  "key33": "125V3er2zFqMNPrYVX3842F2enHArWPf7k1bkP1u19zpFEBj1auBr2Ux3fg8erzBi3zprKs428ncj29bgU5oTQgn",
  "key34": "5rbKcPpRrZfLDnmqtusPzxam3BsRyGpWKboc93img5L6F4MfJ1WBFXp17wVfYdJ5ei4exUGgCxxJsXFnNVhzWUg9",
  "key35": "5WYNuB6ZqMWvNDJTajsYqKXdZ5oJyURBCV9E8VHnnR4WmXo59SPMaPf2qAPPcvsWY7RxwqrTEeFVSEmviCjAy62U",
  "key36": "3hj7WovNFbdhwQf6FMDV9j9cfLySV6PTkEsdMCipN8qNMr6re4D7f6TmcmVAFRzHPdv9fgqEa2ubUqYYVg1VeABn",
  "key37": "4GwaPL2XYXXYJn5Jt8HfRrWUmhRzhHzDfZ3c8DY4BneQyFifBLSncXuAoVM5w13ByP3oDJ6DtAQtZD4bV6jLP5pY",
  "key38": "HiRBLWUPMQTFzWtqu8beiY6qPYfbdFLkpkHy3baWebBfwApLeBYchhFDiksJrknk2S4AvSqMrf79HH7d4mDzvm8",
  "key39": "4Vgm5zyfV4MThtCUNxCxPh7scx4yb1MUF3G1EnmjxwFTKWbiZBqJAUuGLS8K5ZFSD9MtDb16wn6auUoj1JN14krR",
  "key40": "wZAop45dDEgzXuyDxn2BuiXxD1ZKJ8pXU7zmUF7su2Mwj5wgVwcheVbk49uKfpy3Tc6KCjtdgPFB9RY9b4K4epp",
  "key41": "2DfQtgShbqjBgn1rj8kZ4LD5fUsYkzFAkwSTrK6hi7AuA1GMRMezYSADtnYsFtSdyAn2pjnQbkc8CJQQ5ZVcf3hE",
  "key42": "5qv61mpQZBKGgEUgvRVVsrSBLNbA9Gw3tLto6qnuxEa5Q8GETLdEbHUTcsuUdTKZ81iprPM236fd2mdfBmfSNFDQ",
  "key43": "3MxYkFh9GzBF8Tr7cT5FZLBTbBeauq6wFH8T3RWQD7mKboLzL2h3LPxxkHFjYKzB7Ugq4vEbL6Um9vjrvYnGnJ9H",
  "key44": "2q5bstSTVabkgNqF8pzLwwTm8RiZyNfhyEz3sbLd6DgEs4rWqqSNyuMXBWcUd7QMqzV4QsMbfucrZwy6QogHJsFW",
  "key45": "5sRYHt7NjiDfBhXX83RRnPrnnBWJ6jCnPDNWRamwkd3dhRjSr9W7QFwXKyQMcmmByRYfzcH4SA8op8hcis679rB9"
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
