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
    "2CrPTTiM8DhDcV2mYZ5HdEPRoFVndQhUZxdwEjavCXhiyB6ykSexrGvw5rBzM3wRmDta5VDwtXKX9gjzefNdn4cQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FnWo94PuMDS6xAJd5wyQDaVfWxJ3EFDPXUz3N6BFA8nSbWPwcvHZKCn55knDzZQDhsUMjLrmjunLmQ6UoGKxjcZ",
  "key1": "2ig9UDtc6wTt6dRzAHcbm86KieyNQ8HHc8pSGnLqtF4JLDGGy92KSR4rh9dhjw7CDXD9ieYyB6VagDpjpouyXB94",
  "key2": "3AwcERHzxoHWgMEGgpPnXTYXUaSj9QbH4SyWW42DsCpSMe4xhpE189NeoCH8EyrfC3YhQ53pF7EbXRSMxKcnH1dN",
  "key3": "3bYPKG6vfvnvDscm5AnfvTpppVr1EdYEZqjAxd27YWSPRs5joYmgQNkQg2N5yDyNfBjskn35mujgrvt2pVJR1dKH",
  "key4": "4yxtq671bLo1WfE2n1x5rw7fGgD7yKoWRnguH2XkfPBxH8ziRhbT8qYyBkvEbE8sFRPsYUcjdXGevbqFgN6TADAB",
  "key5": "58rZMZmLdoxHe4SVzeCT8MF6eRHUe47HnWo6JS8fTWRoZQjrVQoKGGwTygYk2kieZufNVNLjHueUDXMqpyEpayh3",
  "key6": "3QpJgEFdh3LBT7ybGaJgoigwwaeWZVGV7BxPTaXAh2nofLnQTkh3CiaqAztGuVHHZAGjo2gjKDqiU6DNVdtqrwx2",
  "key7": "gJrZSBmcmV1be4rFQBFa4P85XJx6hR4TUrgTXm8dwEGyU4QCuCNPvg59bJZCFcVsNo84pem1URSragW95LxWuPV",
  "key8": "q4H1xQ63j5hTAjWPRY9tUg7rFjTZJ2KwGBJuviY7KvhU5S6ddmcRvF74Lo1kJJtQRvaBuRbUnF3ZBXYisPG3r1R",
  "key9": "467txLw3D35yXXYQpCJFvB9VRPErmS3xZ6QUBmAYVFcVJ4cnJdAB1sjmEa5UVFuXP5mtGgjp3BfFtsYfSYiun1vD",
  "key10": "5JYAmD8QWXiKPyJqLedYb4ipHicueLhTLQ7UouVzRuZ5aSm8fHVGqm8xk1RC84QXHWyDSoTuJtNAEpxrt3ZD9t6q",
  "key11": "5JNRxW52WrJG3G15r3yyEvuCMJXb9qGBstc98x3DZX5RRqJUeCQ4nZUMY4S95YpyEq8UHg6vnWA1TCZpMciKbKnk",
  "key12": "WHov38khcDJxV4Edg4WXzDHLuY32XPZRrUzZgrLckLw49nmyoJUpXAW72ft6H1eunc1JqXFcovdJJyv2DEnz7KH",
  "key13": "5SPimxHaHmhQjbSypbNsdBWUUYkkf3TqbobB4nURuN9r1sfYfqaqxZTW8igUzUDEnFwV3t4aSDdbvTZiMR6g2JMK",
  "key14": "qXUfNZqfUZ4nsnQQBT5FfKh71TD1Qz3nkY67j9HRQQUbTkpDC2BpoQJfmaeznUQ7wannjnMyo23dxKSpPHw4ErW",
  "key15": "8brCfJWcX8FhY6cv7mUVYhmcLgBdEpeyDKwKQdGALWJXioJmu4TmfWwS2RvCgDT2V8vSNqyp7xHwtHsSge7kNkR",
  "key16": "5dDgz6VNTnkSBSZvymfGjdKNrf2CgDDw7o1Ks2WiLew3vmm3gnnXNhEDmFUR88jRNM6y1a8hTNS4D8ZXnPrRkS4W",
  "key17": "4mKDYEmjmDnZKro28s4wjNnNS1yuDKJVWfZF8Ldp5Y2DY9UV283aFUbRWV8tDUWTYdArMe63H8L3YF3QBbrxXosF",
  "key18": "3Q4Nu2aJwruZ2ihbKdcm4LBDsaLmP6vG8EJ3qHjV7JPANQifCC9ecYAWSETTaTW5eJNH12ocqEkg6Vt6BRiMZayc",
  "key19": "5fxJhn1yLeonneJ9ErDtsvZP8CKSee5bs6pgzo6Dbec8Cj5i1dLKMDZCq7CZ4rHqHghCPerz2KK3q7QQDAzMriNX",
  "key20": "4Zd8JqbVVcB68J93WnA5yLdPNMbvW6oyiCsPtYV5C3CfCE2TDBYiGDixavPxbvzhccydeVpSP1S2jExncSXjwYxM",
  "key21": "5sjYuSy4cerVoLVGcrEtRvsPTG1NsxMV2eeFXLxda9JXsbYqxHn7au9fpCVU45BEsEUwr2UJiwkTZAqkAt31a4rH",
  "key22": "3QtrysA5Br5A1sirbFDdLnRaNnChmBviPTLVjHKtCVqtocHSqDbVETTGK9SzHJY2Fe7SjELTFzSrt8QNnBCBf1Yh",
  "key23": "5KqrdYAM8tUXVFLjpxEr84aPAKy5h41Teb1eqWdHHgmkzVZkrYSmDetZ7Gs7rKLh6wezdb1CWFWM4KPbqAPJ1Aqb",
  "key24": "3MSrKnT8vGjXD34N4bVspq2qSGqYwkgd5EQ2SknmWF1Q7z8RfUW9xQxmJXFeqYTNufPGHQWQVU1DxCrsVB6ESnXC",
  "key25": "5AnCS9AN2NiUHmy6Xuav5DmqUWvytnc7FjGw5E4am8FR5PUihGCsWp3A5SH1J7GERiT1eoaPzQwEtCDvQMJ9JPCu",
  "key26": "QNMEDX4zwSFChVGVhAV1KvAdJz9ewo7zLCGqF4NR25iXFsyFXuV2rzqYLZqZN74bjEcDZDahtxeG91q1JsUiJ1T",
  "key27": "n5RGU8nPMGVsJw8NfvL1Ufb6ye3yHEZ3qrx6UKY6Fa9pxxBAQ4G2emA7fdfUoaiYrWkHhJoeePaWz3XxL65c5zy",
  "key28": "EGmsJnyhKGqCk7puhbWEcJ11zqCrdmsV4TR4LncBYXrJWBSaysYA2Y1LwuXAJ9552xXX9dEWzuHsUvYNMRmdwbH",
  "key29": "5Zh6vkBcUkb4xYH2ceGvAk9GcBpV3mk5PCgyJpSy5ipdZVeZ4bQsA9Y2dRtcXT6y12JepwisA77KP8WBJh7A5dLu",
  "key30": "51ULqvXGSxf45YJqCwjWUZPiCixuoLtE9YGupZRprDfUcsQkMmc5iA8U3M3aitpSZNbL6qZQUXucvHHFsvfgUmge",
  "key31": "361DSEqkiVHHvRRoBuF9zfjZBFT5uMBFeTSxCY6Er6LGSBrwNRC4La13Bdmi4oZybhAKDSj4wV3yFQFWWkhuc7tY",
  "key32": "nVbydn2b8osAtz2QNq2o5pXRcojKSbd5YYcJ5DLxStSrHBseuR45VXpQr9CaMQ9W2A9SAMMrrz1cki3Fn2KwfLR",
  "key33": "3kcCe652WgNj5aJog2VS9QHD8A5W3jWmrGVgR1KU5jDjL22bkEqdAL65THHphwZJ188WBKwpVkK4XTLW3FyQbeUU",
  "key34": "ykgJRN3MWrKGJRec62bEcZYwceUymyjEMwqku27eJXC6p4vFST61MoXFCVVhTPwag7MBN7bLmDm26smWxXBrExf",
  "key35": "2VbPCJzQtvBoAbF3uQkDQ5zGoFmS1vTeuLkBGF84nyQow4yLUdxrDbL1eRj5eBffSgf9UtbByQHCuZhQxZLqLFVT",
  "key36": "KQBPgLP3mpqZoS1EwqxudLjm1V8eWRuowj9VLhG8hKQ8JVexDDv4aR8kmj4edxLzGFvE4YFESJ4SJcS3XheCLM4",
  "key37": "5S3qWw9A7B95t7QmdtqWgm5nFL8Hb2dSSQwGCLFArZ9NZm2zCgtvBLsdvKyspmRLBB54XPagrq2scxgLcYmDbnxY",
  "key38": "3G3Q2YiEWkSddA9BF8Ry3N5CkTny9D5VLrjbzR1T2WooSdaotbaNFC64Q1KT4z2J9HehMPm4ewzB1RduwExDoYeq",
  "key39": "gU9a4Qqwo4frNCJZXB9mBWLWd2yqXgV3HmS78cZEAGWGxmepYCv2UjoFmVC6KSthLnNoieayiuNyaAiM8cBpGHL",
  "key40": "8Kg3tP8LrMt5MFSLFCqiV4JZ8niKJbkHSguzMLuHXen18Qoz7ucNvxrrvhWj3qDo3zuuLp2L1Zj1nrDqQdVpwQT",
  "key41": "ee73s7oybvUoGNy1FHo4zppV4ocbr3RbpgDhKADpydA5ki7q2sk1CJ8PksQVtbXCEWaVnGBibcXkch9NoCWuFQ2",
  "key42": "38AYfzfB4Fvm4WcSQtUwrGPSH1yyk4kV7a8Yefb1AhyydzziTNaSy8aqwVikNFmPKmeAjxSCma1vMt21FzkHQQ3k",
  "key43": "ugKj1vYvtPSXXvZ2NJFrEbjQuZN6RyfXGKjREQNU8qKRjYErcwUELQ6Cvw6A3MVCoConSL1F3bgGCAYeqY4o1At",
  "key44": "5KVm3ht8M7vpfnmoBy1WCcjixVioJimxCH1tHKrh2eirDp1A77KxAfPwaCTAu7CeV4rpmT2vdMQDJe3cfiEBVo1",
  "key45": "4PEJKnFmoDJYiBnFXvc7dc6JWzhEqNWp8K9EWcZL7W1FyWcDEEwrTXtn24vH3ubqCB9TJQAuvpKTbHLmdg51pH4x",
  "key46": "2M4kH2L1toCP5g7TQTyM9gT8XECCoTijdjrmNAp5E4oRf2Pmv85DrGJRopapA1a3EDxw9F5Jifi8gKFrW9miDHm8",
  "key47": "3TDnaym9ExowxJ4i4LJq7dcAMdS9jdPzYZsiop8CSfptKF8pb1EiVxTybb77e43mye1t4iFPBZydMmQ78bRf9ZAC",
  "key48": "2q612rz8jXqtNbtznpsTDoEzoqBvG8iWXhRcoWLZ9ayUVAXMKspjLkFvqM83YgjY6gWjsn8f7iBNbJGggPn9FwJj",
  "key49": "4oL6hSTuuvP8zhnd114cYWLQZYPfZR9tvWHYsr42bgo8hxgimRKKvFTbVubNxVmVr77JJ9M2FDxZDSchTSxB4wpz"
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
