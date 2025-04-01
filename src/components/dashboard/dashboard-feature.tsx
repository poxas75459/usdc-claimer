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
    "5Pthiuj7mTAqkn2sJ8kkpeChA8nxg5J8VFifEysDpjs8hcVhxotqpG2VDndQT3yST8MTYBmC2NB3j71fUMS7EdiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xdZERTVVVoux4PCnVgDmJGsgJfXe61Gw5LGgTf3sQSKEc1mBV9PCNA8zae9FoS7kEo6T8xkxcNksq9RqEUcu9Vn",
  "key1": "3ETkXq8RnMAmSeZ2UduquuuY2qfgUwTXe34Kf64wP39k2tnV8eUouS3K4mc5WyhiLdfLrz9VbG2BsmiwVce9UGnS",
  "key2": "4bqX4sSLo3HNLgBUjf5ZpkDDB8TvEsJuoVAnEUtStNKXPZG2AGmzhLhttciMgLZTkV1SFbvqUDhEoXKqZf635bwB",
  "key3": "4vSz4wmPdtXTgrbgCqVua9Wyx4w937oWfvNFkCHiHw5u6BzvvvEBYcTGTSKe4cH6XKUZdmoNRva5v7EZQ8qnAomi",
  "key4": "3nMQ6KryJzkcKojwfzfPxDabi67FZWYCcrFfTErLYEobQ7r7B6wzdeRL67gZK1pAJ5qMjQA2CZXqEMVLBddPiw6d",
  "key5": "qG8T92WiMwWUrsBf9nP5ei1USBUvajTU6CLcx1s2hxLbVmhPgPvRH8h3mEaZovyY3FLm1adKk7sxJJaUDteqS5x",
  "key6": "5z2GtmhzopYQaPdGYAubrwmYEa26FdiG7rvar4uuJmgJrYyYL4teAgXBcDtAXtFmH8qivpEhM19ycnYctpPbFBzB",
  "key7": "4DVknJNBkxCb3wD1a2Tn1tXjfxCvpV7YAKzhHQYTuMDSkEdu6WWPFTJqm1CL3bU3CYa9K7TwkXz4GQ82iVBnadRr",
  "key8": "2wgRPR6gHFysk842HCBNCBYTRdGw8nmd9TCpTkXM52eZF9gEpmLoYACKdxV63puXx6tVxHAg4VVXCBs4QUGNPDr8",
  "key9": "2AUu3SHWndK3bwnf12XJ8bAYWMopSUndF94xxdyD3nvrUkjaeSNK5k3A2qzksy1XVMpoPQTo5TRHTQBPL2Kp4gqx",
  "key10": "5Ree2vBBawEHr9zxhwSpnaEDhJs9SzUaAjdDHmu2HYggZeWmZej2PtjNF2b95Rau1XWjJ3YG5wwu65BFndWxfMSQ",
  "key11": "3XESwAy5ELP5JdXMeEZKqx9WivknJRnGZNejegDx24LQms3vAtFLb7ZEcxTXkcRE6vSDJQQAoBvuiBgb9cquutn2",
  "key12": "36Su4pgmigBneRxJMHexcuqzKTidxL1DsBr3a3EQF5KmGjR23FoiXJXS3VLhu7y4XujFpxUFmSpXcRBHm67qCCBG",
  "key13": "2DZiqx5nFEtyoNYv4hxSJFUjQZFinTbtkkkUnQJfJ2HnUMSp9GGsn2adtAsQmJgoSfwSZQXGxe6H7AXgyXKxXJzy",
  "key14": "5bStEJWCKVydGjFY7cowPUhuRAjtCYF3qEn9qLXxBCGkN8zMECgJp6R51HxDmffT2yb2evR6sukJMym24HWq5HiX",
  "key15": "2LxYy9hmUZc7bVDzBXmvenC5AzyQw9tbYpVPHDcwWDec8LwzRqUFjtYzbTVacxufJ18Qr9Eg2icuUJ9NHMtteDag",
  "key16": "2LWEEhp118k6Eq5ZfrdVGmhazipxSvY9S87x2pymR92eGtVT9BD1miZnc17Bi3NgmiSBB169LJ4MdyCuUXm4dneu",
  "key17": "2FKYuPhDdPmzJ6RyPmpvdDugauCj6q4UXQhKK95KLYBHzdzYa8VNLGhTiH4Udcqn3qHn9DEnSoziiqqhQLAeBDFM",
  "key18": "4pbv45jgoPYgZcxfZ3BBP6omNjgysdyqnWJHDQWitcmqo3rVY4YQUTTV9VGhe85r3MsneKGWL7dL1szVSB8HhPPK",
  "key19": "QHRCktW1uyB4RBtewhM9SxW2g8KTyvEKoHXKsavq2uuxQa5xvf4c1HhjTfbPWYvdvetZco6ttLSSj9oB12gUezn",
  "key20": "3JKj78exJpAnHCrvnKR9Z3Zd7WcuLeg1n8aw6aJEU6GLvxE2w6GNxY6ofYvCaoTks8r8o8xLPMb1JzdJAgLh1Tfb",
  "key21": "bo7ooZpRcinuogzKrqbWwS1iN1d6xzxfyux2iBTs3YTdpM4jt8BLrzxnrpyVK41EomqfGAGcp5Dxb3FQ2jh2ar6",
  "key22": "khts9GsZRK9fKQMoK1bev5kHQQYQiQgUK6vYL8C6kffSbhFh9bz4Ghvjkq6phHPidFGBypm6Qz2QjFbW6JEvyKZ",
  "key23": "2ex2Tv9azgtoi3qnApmX3HFvcZuuXzHUetdNmSi8E5KVSsKq2Wv4Jbd9sZmRzYVGMunF6onY8oXYLog82XfQ73xC",
  "key24": "5jr3PAifEwj2F4ybto9SiAMifMzjnwXAsLBkg95DqHAV2X1xPozbpPzSMpnzbFSt8MsigyKpMepitRq46gUxQUEu",
  "key25": "1G3drcLTP9YitXJrik6tRC4TeZPVmLe5722h8AhXDQUmpF62gd1Ud7vmt7WuQQMabsJbGzM2SdpUVDXKTLYofG4",
  "key26": "x3EBvTB3K1U77y5axE88yf9quywp85Pwpkf9C9t7CKxTxeyVWAgHCr5nuKCuT8qCXZuBJZXdqTX6Ny5VcveDgSK",
  "key27": "4sf8fHnmdGGzTDFPZRpwZ6FjYTWV1WzupcRa8VUyrH478CUAsGLu7KZi84Xxv1ekjMWHWKZRUC7DiBNPxDZAdZ3t",
  "key28": "38ouYBWeozFHdhMHhHq2iYcy4vabrhKb2YLuBix7sWdhWWdgNKeesVSqQNoYmiRJtEQzTwmeMf49T7oAxQDyiiE",
  "key29": "W4nCGG6H8QiHs5WPVctARUWTLQkxVERBjsYd9GS7BhJ7BSMoGZTzaXJocWZATmnBwyPadogUsHxEer1G559t4b6",
  "key30": "4AjTVQP6SnrAZj9UWcpE1utzgoqf8wz7tdBAhrPkQNZcsUoJGdDgJDx8dY7T87cz8G3HiiRqAdyGbJUUbCN2sEhA",
  "key31": "3ynMWDWM5kP9ypHh7pVMnPnN3VrpRiq114JCsAivGQLehouWC4BtyXvnbBHzuvdPzZUesPvPBNqCdW4yJeQW3Ka8",
  "key32": "LJfNFjSatpoQFXQsJZfn7GpSMM6czdk93xmx2mMZRcrBjUCtM8uhBzcaHtmjxgRiQd2LRq67UwzgdLYoczcUZMb",
  "key33": "3wgnSB9NuPvkwwugNGRmBk2LnbB5NyKfgePBd4LjnsfbsiR1dfHx6G2pwVbbgo3fPN2Vv29KjPNhH88kaWmmPWH4",
  "key34": "3CSsCCKpmbHKqrVrTAyMztZs6GyLd3yfpGjzLb4xA5QRjRmLkxdXiu9B63URHQW3PAAqgoC88iVQ5CjnJhEygeZe",
  "key35": "3fdPfaPCy4miTir8pPH9c2gUnxgi7TJSg4A2JMPv3fWfeD2xAfe2Gt8hzzPDWGS1bNqd4CdgQBFV3r1wWqyCCPrA",
  "key36": "5KNWCkYyW3txFGAECEWfZ8HjsA9TTKCVpG94vxv5FFUfRCPZz7NKQtVUPWsUw2AVkKz8iuqujmbu3RjX4M2gs17C",
  "key37": "3ZtyEbDEcvL1hczMQFb71DM5RBUDVSdaEhJE2fcjnE6k5NFtB5ZZVJtCB2x1SmFkH93eDdhZFJYGr6mTZbLcXPwh",
  "key38": "Pg4fvADqnR58m9V1uVUTb4SPYvrnGKXMwjwyokg78PZUgkZgmvwR211KSL1JGGLBAoy5wwcdDKUoXArayKYyxeg",
  "key39": "529M1viRnXeSREaHtppeRGtgqnMD8XCWgV2N3ZPF8H1zbusj4VAJmihwK3QdmzegceioQpS88r2mCkzNN6iwJfMg",
  "key40": "65juTxM3uMeWKNAX51RSkVXUbCEQENE1BUey1JpDHx5DqNmuMuD1uUF8iQtfRSyNQUdo8ivLAUtuobPrPth1KiKr",
  "key41": "5VftCF1AmHK2zhqxShkAy61CuvEfMGK2mPeWeWsgcoqtxFUSXnt9JD89QoetJ2ZZrmedo1Ta5c9e6wum3utjgoNs",
  "key42": "4UrouHSN3dcwAQmV1h5RiG59HR5jENVuQ2bsChKtYTLVvJ3HXoyUbKAyYEYVrTuiWtaFR2u3RdPNeFQGK6pbjQjq",
  "key43": "Easbt6r2e6aUz7uAVjruy9Y6Ytskrk4p572FLYGaugGbWPVaaYCpu1tzFJHLDBNgvzawjC8jZz2QDbhwLEyuFaz",
  "key44": "4PrdzXxATzpGvSCrg9Ep4DEsXBQbH5fLNzssBkAGiGR4FqFToCE5WiMPextukty8eUGHd4c97rHeYkDzNAAFH4KN",
  "key45": "4mCdja2xFLRV7wx3AiGqUbTc6wg25Jbs6nqLBVTpcWgvFUhLn8rrTHMh23AT6veCA5KXriW3hu3jZbMpr5ZVmL2n",
  "key46": "3RvAteJm5jSfxjcZZtevL3usrXPW8NUwycziTpgC5wAJoQYvAfiLxhUfkk6U2oGuCNUFdC9YmNnorpB4GgJfUd7s",
  "key47": "668C5CFZvcSZAWXMoWk1KhCncVJF28hLbzcTbTEUcosFV716CKbL5Uv9jVepiKnUeCvWMbzMmkqhXjmFbXrzUc7u",
  "key48": "sMfy6AJZGSsMLhN89i5D3mkjvHzKrp8rpLyGvxxHL3K5FN7SrEVajbjPDY5ahAFn9zAaecjTdZ6Pz5DcUhph5M6"
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
