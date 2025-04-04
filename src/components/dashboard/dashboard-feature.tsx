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
    "3LpgkSzm85gQXWFzx89k5kwdnGdbtipGmjvBb71oYCqUd47uXtwZmSA4YmakJrU3By6WbZ1cQdWpXtrhYnNBvTyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41fqirWf83cpxZeZGMbw34R75ZyPxETqrERhXTrjE7XNfrfx95hk6vwY75c1rEmALnrtvYbtFXMzPJacni4wHQXW",
  "key1": "4nCjnaMjSbWgimqvLVxYFS9Y5oeT5MPwWx49ZMpsnPWLqnMEPRtXfswKNZoepaBSZDBHJA73zhSSgpYJjnQDXKwS",
  "key2": "3kygz9xxZqWWjgfF5Z6w4TeTNmvchMpeyUArypPVk1cM3TPQmFSoS7ku9m9MMUmwS6iFK49nfgHot6WH9sZSFTLZ",
  "key3": "5x1aL431oEzqG2Y9aqjvBNKYvp2wyM7chzTRh5GVcmhmMdCwrqJPgJ9U2NVJSMymDy6FEwbWPohiBQKyLE1iYnDT",
  "key4": "5PvrJdHoD6Nq4HyP12p55hTsTfLQHkyFNdJ9EsbmhmeAfNZDYRzLUp6g5b5eyequ1YRAjVgpxCRT4HFCka8ntEky",
  "key5": "2aetLa2tYznP4kcgXgCXHQ9wQ9tvADLYzUBsy6RsvnzxhFCVvWB6aE2txzpgUnwhpAtbcqEs8DY5MfPPZuVKY1Lk",
  "key6": "4herFckx522AiTQ1rbUmRnwd3XrtxWxcshvPf5NJzHebDzCrkatqgVo72AhX5HTtysvhqZ2Yqc541FsYAexwP6aG",
  "key7": "DFJSwcVAgVxzf9qt7ciDWLKctFE2T8cWzcJ5bzrzKRNa8tjd44jT6tT2vyiEWH3BHK9rWwu1nQSz15a2bRs3YzR",
  "key8": "ANKLwHhaLxB2gjhC6fhkWKaFz4jAS6aQVFuZvKSYymAKdbFoUgS3AQ4W5hPFR2VudBEbmG9dfoiUgJcChqZ1ntD",
  "key9": "p8hXpZNN3BX6DmjsNUyDSHzz6g61K767yNzwEiwgqsbUGsitzc3DoXqoY97J46gGuXPFFokKkwgs3umX7PdzH7J",
  "key10": "36wv5APWYhVZK7kDg6JayaWJ2nubfqtSNYgrcJBep4aXNkuovGDdRH1aQ28uZXyGgRo1dpERkoJ7JjqbEYvJwhBz",
  "key11": "LNESpt4F78DHKgWKeoYjjHYuipq2usLVnU4g6x4MnbxesbDBHsdywN7tfD8aV5jsn7fggcHvpJ526dd6Zv68wKX",
  "key12": "53f4G52vxYkR9b5cwm1VqHY6oizazc9nue6iWMR7oh5XWuaVfxUFZeDqQ7Q8dL1S1N7KH53RmcYsLesHu81MQ39Z",
  "key13": "hPhtmYoxhHWmew6nTc2PngfyPDoxsuWrKHjYysrWDAfJ2J2DUR5RW6UPRR2hebyf42LghvoEh7SLT2uoPHm76Xa",
  "key14": "5Gh4MBYypaZM74fQUcHpu2Co4faJoSqLH5DnH4pppir44XTWV17hiWu39hfbqTmBqupxN2SjH2HHmFnw9Wiy7FF8",
  "key15": "3fLCTgxmtUGG5ttRciT9TTi6RBVoqcfUZMDBobf9YLYTFYyucoQCYC5GPkWrZMwmN3RU8pfQwBfE6Kt8iPfKCFJX",
  "key16": "58aGKQEUjuNbrhft4LtdhH7wonaqpeLcm3DdhEdrP3eQMifF5vhCoFfbrCofbz3ST3vqoKrusZqaG4Xg4M6KyCPi",
  "key17": "2ch1BpY7nM7Qysq1H7FjRvHcYKFVWzUdQzKgWkKVLjzpPyeyiPxZxLD9Kb118LzVRMaXugi1pGyinB3MWbiRWAWB",
  "key18": "4AMh3pMfM14hP7uvbv4oh2EMZ6abhbbYfMSmU2uWLoa5Q9VRwEhKyZcMibMPpcXQo2gAt1z6f53qz8Y4MogndB6g",
  "key19": "2CiS4AERots7bdYhgCF3ULyrVG6Bmjxidcvb2YKsCeGjPKxR1tLjthNCMWxcnPxm56waLzvctDiT1ooa4gBYTS2v",
  "key20": "3zGqU2fZzErJ52CUyzJQv17aPcgdtHu21mtrjyn93n7m9NVt5oFB9janAohCM2wVDQgzW7SEzqRDYE93QUF3Wb38",
  "key21": "36vCWmqF13gPPraPNqKReFLNSuicuPV4aim6YxsqYFMXxPHaHxwH2GwN8AVdT9PawXPwhUd6fZvzKRcDzevDpJuT",
  "key22": "3X65WXuG5Usejts2KUJWhpz8Qcyqyqqcab4Q9rBqVtwmUDZn7BboLjbChreMKhTbmgtebMrAkr9WTyoHtCsvzgYX",
  "key23": "d2HD3vtLXSBJgL4ZimRjMHG46hPHdEZ5ehyQK4p7TtWNS7boszNfDLAB4SgaReJ1Drv91JZwGjee8rmeJzEN6bg",
  "key24": "2CSZ8mPmcdgTERkA5m3iz1777hyRK9wyK9D4wtmFsbAfhmhatWyRL1JQPKGb2PY4DSrCse6YswksVQkwzwcReKr3",
  "key25": "ow73WkWscMpzGv4wUeCmJUXbHxsQXZ4j3bNvNPGbzeRjJw7BbECMGnuryzUtkU3A6Nb6wNzbuarb3sJXmZpNwXH",
  "key26": "4i8M7Uvp23G6RUGzAaoVYR6SALDwzkxSox2frGDiY1mt6ArhzemSAfmpb1T6d9BhGY1XzGcyRaQSsYnJcRfASvQp",
  "key27": "53EkX9K6seFEQP2kdqhp9jv5v9bshqveDupVPy4Gp8FxyBPwH4fZyyeHj445b9EiKFKpt512omXpyYRDebv8KTDe",
  "key28": "VAkPJfDNiN4sJRPN1Lxnz8HwJd83hyjsyjcDxhTeRS2odit2c975Rzhhyy9BCDTPNhJDNXUH5WJ5xYgkfcK6ddH",
  "key29": "5J35wtWqqq4YV3AtBZziDYKNzsziJCEXSmoq4NnCrUi45f4eJ7XqMYYWRUcxXHYLHfNhEzjkkfagzhZ19MrVN7X1",
  "key30": "4EyQM7UHD61x5d8tZSYf72bboW5v2w1iguVN85aDMwFjfnC83rQtzSKvjBzevvRrD6nnQXrJgV6erZoe6UEVzuKp",
  "key31": "raqFzTzPZVhqYwDmparJAM8YFEWFy4ZQTSoEFRmaGk4zGMk7Fk4NgdZGXcHSiQ38WEiYpbw27cFJj1CHn7jNFVX",
  "key32": "2dohvaVwyLVhjkdnFzsUzcRr7jqDpftixoMwSsKBJyycr3W2s3Sob8LWwySH24VjSb8BdVomG8h95Svi9CkeerUu",
  "key33": "3frBo3Z8DJKU9N8Ha9CckMP62kuGoUqrbG794VruVrnHbHAMEHGK4narnqg5a15hKyYaXuDyQh2vmZuZt8BKsbmk",
  "key34": "5CNbLd57dk1CviqLHj3rfTThLVS9dKDHypxqLqZrUuNcSRGUDLNtRC4Jh3uKj6tCYoqVHE9ZTpwxmjX5UQ7kzsjN",
  "key35": "5Ag7gWkhr4LGYpU87gteqbLgXekS1kGRt26bcQTUGf5PEE4UcpgVHSCSMNfJn2taWLN7crqrfbA2fpmftVxeRZqN",
  "key36": "3KLxRkHeCQokfnDKZira8VwmdHRW8PriH8pJfMny4cqddGT14PdE58CzWEFCBKHBa9Cqw21XVd3kAGDFw2tEZ5Xd",
  "key37": "2io5F4CiXsqZpRuGfcTQS1SKNB6uLhEvhyh2jwuXBgRt8i6C53MyKR33aDaUwUSyU9LKo4ZiX8ytNTAh54Mn3QYP",
  "key38": "4wN31KTTJwnC5HYFtSEjqGzGvPVd994rtXcgzmibez4eYhLVhXdmk7gPpkWNgPos8jmYxgB9JGDGhP9WTpAekQDj",
  "key39": "5KUbtTspLD9oeTcBUXHte3dqwsULEqu5d4tHoF617oreaGRxW3WDV99v9jpgZmrt66BEUg1Zn63MkKz9Dy6y5FzU",
  "key40": "56mFzo3GQ9RB5pA7w7hspe39o8T77CwYTAPVER3W9Cxckrh3exuUAtcBqDvj8wphpTccnz36aatL1girq18tE4yg",
  "key41": "3a63zjcapu1QGCK2v337WHCnDcbD4vpwyNDb23cumwDvzPMkrFFvP4Zr3Teiio8LNbnxQ1wkNfiRJWWFtxaLdH7y",
  "key42": "3vRDRptHiKDgJwgwadyF1t3srp8XG66E8BN2SgvpUxEKz3oCzTg1ZEe3f2LEjAFR9hqG5hSqpKbPnGHu1EV3U3sg"
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
