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
    "q3ufuEMeGA5LxeKvY1jDZuprbDjiPwHPgpTqhrDHarCEjXXGwYCjVZJgQaEf8GfjVcTxYE2PNKaetsQa93NJwKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C7CXQncJ3a4zUo49gX7GEqdBCEy8QEvZdr2cT3xrn3Y3fZG3yAgQCykTXqjXX6L8mK6H4grT8XGTqfLNhwuCatm",
  "key1": "Sy7qbrascyE3qh6UQtad7SaW4eJv3hChHEhT8P6gTyHgNAn1r4ZkoT6Up6FL5FtTGrk1Mi1xtF34PGmv5t5BCXY",
  "key2": "UcKJVeGjFsExZHrr82Q5FFXWDnbqPLPZ1dk8kVQH5crDsUH3pZV3rQM6z8Nr9Mse9gRBdGXAcsFQqwCKr1UmZtG",
  "key3": "4zYtJXd3BBqF4wvcHE7xjG5cXAh56qv9DUak9ek3FqeoBWMNXboAVoki5vemckYrT3fZ9qnstpZ8tXYXguT5VHQQ",
  "key4": "2zC2Jr7GVmAn4ZmwpXmMv14Rh9sJ3hH9JqiKsDK87Uco1S8XUm4Q2mNGy3hUaTpbc1vs2pZx37YfMsh3Mq9g6WJ5",
  "key5": "5R78AzanAZ9thiXQm8w6XVzurtM6aHp5Axtxwo4eQsrdU4NnHtzJQgxTFJtaM2CxCDe4NjEf1JGizuJaTz8sTcyM",
  "key6": "4cspijmSrUfcfSsaYaSLsbEnRAmTqPwTYu7au9tPP2GaTmFpysaFfQeypy8i2PyDEDhxP7ZcVeXqWbdF71LTAm4Q",
  "key7": "5mVDdhgfNkACyDW2EmuURCnYah83Vc1muBhGQo6RGDXWYqiAuqFJ8x5xbPAkrEphpvTEAMDZaCFn3LHvEuMSKZTq",
  "key8": "v9hBYT7zmoieaskEwn5DEcA59LWUmbwokifMSu3MjV2TXULo2NVeCSsZ6JNHfLtqoTaqYDFEuJ8Hjd1u6pUF3Aw",
  "key9": "4xP7s89kpg4UyYPcJy1TNr2pAJns2JNFLGqsQ1cmCmFxe28bg79AnA6ggSVjdkHng3fuJtDDHor44KpK4bvqkgoj",
  "key10": "3aBwfo3YocuHYhuAQ79Q5NSMrYU29NHKa8WdEDDuMYtV3pdEdNf79naikwwVJobGGwQZnDHEzbkzKNMtCsoh35cs",
  "key11": "3FEWwH3KaNeYheU9AWFRyJTScqL2WQKRRMARDJ7ZoYSLWF55Yw3LqgSVkw5DWzfi7NLLsVEGznhwc7XZ2owJu4o2",
  "key12": "QwmYYEEdrbQ6cnHvKVcDhXe5s9Qar3qUadzU4m86jk5w9DBbNmnf4AHLivmiPJo493mYgF3qz4wjTDAgAd8Qr1j",
  "key13": "62fnQqcvm26KrvtzhoJvBmRPFtA1o2ttey9omatKxNgzqo1nLGwGm6XXDahDwgpX1av35AG4w3KdbBBU1LTfQ7W",
  "key14": "3VACcBky73qJbd3irAZ534ZNwdSpyw3vB8GT4pZ17vwzkf2r3Rmz74uTs1Ng7U5GBkX6zQrA6S1psDGHYi7Q2Lv8",
  "key15": "rP1rCVecHTjVGrb6WfFKwSeJLsJppavP3TAtScCiNBVbqAW5aE1EXLH4cgxAc1jiGnKrqUFk4f3ZNqFyURWNtM3",
  "key16": "67cjDnaWSfzXz9STq2Drs6c5EGZ1TLTowrKDq62FXTwb1Rk9f4NpP3E1YnyxUEciKFEfVn5KY9JKb4M1HveMAo9a",
  "key17": "3JFrnW3UwmkTWpqCWW8pbP6bBkUQxi5ZwvBs9FuaD1aF4WbA9ebRgWL5sK47p4mUVc5Uikmtr6WWQXfo6iG1TQD9",
  "key18": "LVD7cootkX4f3F7UMDzgNLPbFD8BRsPQdRFDniNggiH9jUBCXta6or2xgdmwjttNj7Datokvu4aWhXaMyXr2txZ",
  "key19": "4SwjnH3kbmUYyXqcnGpH7mVsz63VoF1sKAU4HdJXpczLq4XyohVKaqRqyvaajh4E1LE9H8K9cdBRTUvGWy45psRi",
  "key20": "3941mrRpwf2CpCA3iW1PfuD8Sygawzksso7SfhGpgtTecMQwssd1PjMHQC7LQAgVj2JYjMDYUjLAYH2xBWC4cYta",
  "key21": "2KxQxLkxkU2ACKDHN9q27JeQGwadQisvB8LhSdSMCh2g7WD54v6FLDEaNbCa71eAqkgAJnCfnKCkPLwbGs5toDqv",
  "key22": "4KbGJJUK9zYtpmnxcixQVyLXbHtFGixeX5WDvg1imTEE4ud1cBntFEgZ58jsegkvjk9vF2ZzNwTVbKCTGeqkkZXY",
  "key23": "3AN2B5kLzGfcGd8PzA7kfvKxnwCtskaXjxjtvNv1MwdpYE3t5VwsZ8uGfmmY2thT37FywgCLCXxMuNTKzSK54fqS",
  "key24": "57uhaf1o9GQS5BVNwyMsLkqVjdgnCEyjKiEsx9CV8AHzPVFcS91yevVGnePSvVFjRPLmgw7dSpVtY6DST2JNUTmB",
  "key25": "2QVtNM6rTEq3SetWKwawSoEyyTKpnT5Sdrn9977RiGQ3HqXo3aMdCXKYcK3Lan9gyoPbYoY5gvg4vY67LudxEEAt",
  "key26": "4HgntAQM85dnuqC9wSSUY6RZZqAuEiKhcGFP2PL7zq5A8uqmUppf6Wdcv8WSmi1yW7remPt4ytDigZynxtfgVvDh",
  "key27": "5b91sioRBLco737eZhuE6snY4Xmv9bYH8Mf3jmdrmGzGMKcNipLc45epi8Wdg1uoLhdaJrxv5Lzj5tV7sHbqMcq4",
  "key28": "mnnEzdS4qts3H5h7Xs8PCKfQKWGF5znY9aSVnF72JfCNvqXhroTcqEbpmrZ2EwumztV9Rf1jYxjrqhN9Yb2vVQs",
  "key29": "5v3tVQifjRpdzHBK5DcuJUAWp1uE1cUQoGpxyhQHut77evjQjcMT5h4ekoz5UzvrQTBkjaLpJcSxiy1R6WzqQ4dh",
  "key30": "2dcUBLQiYCjPJ5XpPHu1dcp3F4FszasMHpggMEwZ43EbdPWnXrhYk8A26tqSVGBNz1sms252kEoPCEwdV4biSGRm",
  "key31": "3CsD9N9RRERDyaVGoH8nMSaEkcSFaQCAJ6ZVodQs3J6EPZYZz9X7is62NLgKv9crhoHS31NkpVw91tt6X1QgN4en",
  "key32": "3CGmySEceYbQV8HEsnWuhqAAC81Pa8Y3hAaSHCWWta226crracHAQvdy4Kw3DxnZpnmjxTToaiAQ1S18unotj7FB",
  "key33": "3yNaqLqGT43GiHdbKbMjApShwSh5i331uxfpTrEMeNitveRzAS7wfNrGrTfB4BcQf2BWaSvtiQmC971MeNBSmSwx",
  "key34": "XVAKV5c7RbXrQWKGVF7aAVQLqjz1DA6h2aZBpXWGkdJ4bKDX4MHUeztmZwaGig73U3Fq6SJVi9LWjELx53njNu3",
  "key35": "2jZunueVpxrAMXYeSsfbPpVRNuS1hfHhKRBc5UV1CJLBYfDszK4wS7W9gi7LYJQqV5pko6fPqsqNksLmgB9vSHyh",
  "key36": "VNf2fNNyAjp7fHBrSvJKaxMWr33xfnCPWMhUaM6N5aKXXJoYnPU8werozRBqe13SLLWmtXdVrVqhYUmQ48Bqs4B",
  "key37": "2aSYBC6WiZUw3mXWZn4e8XycPrvz9kBDHb8ERbqcG4aAtL6GsRsQmJtpZ1b4Sdp2oiyceiBbdLVofAkgZWmMKfFC",
  "key38": "57Tib3XATd7TbHeJJh29amkVvgU7ZvhKSZEVbubybyqSgxYwP2e3tYBT4whFoeV34VPQ998MDUL54gbq4zfynpxF",
  "key39": "25NBTebuqfZasr3ntA4uxab2dy5D9wvz4UGV336fGeu1bXs9oRZmaGyhiW3NdDkSdMwtgRsBdA6gMGpcaFJjMxJi",
  "key40": "d7z1zFvd83aqVKCtxQ5URxJDHPMGRe8af6g7jT1qAoTiFegZ9cAXaCNzDmAYNsv8Xb7WSKwC778GNTZLnD4WiUR",
  "key41": "54dofq6vGjb7gfkumTaUcbjFqZe18Vt581gtXkabU5jrFyxxJipywkJZsJdgHy1qXL8tKqfbVMjDJ3saMkpCptKf",
  "key42": "2fwF6vbF5tMMZuRq5uCDbHAfRVgmxZ24Au9Qd6z9Bg32F3fTnbGEM3oJuHSFKZZDbPDPVmu9ERENDFFwqE4RPWHV",
  "key43": "4RzPa44VMmtNdBNQBGMGopbgYmfyd4f8qBfhtXdkKGkixMDHahsFFHSAdgWR3k6Q58MPM4aJ5vEFYzMYGswUXKq1",
  "key44": "2S8jcwJhHQip28zoz5yeBb84w6b6ComC4A7fMxVCdwRsZAZMzPGwkXcdoQTZogeeEFLm8Nt5kzSacYW9HtNXYfw6"
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
