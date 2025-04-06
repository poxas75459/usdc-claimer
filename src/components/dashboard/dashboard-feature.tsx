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
    "265dDnPKX6V1DEkaynLS7d3S5PjjHNDMKZm6LtcRsdiZyxQPz3CQxPhpqHrBXn2rKgx84jA8oJhjmrEV2Dwkpn5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xYNGW61d7yzQw9Qe6cc2rAYP3cpjHc3kAxBzb3h1b8E1rX48ugJ93YYoLzYHnPNEXaAEMt8x2rYWzjUMS8XuHyC",
  "key1": "61fPSKnSVKPBVjNM8pbtRq4WPpBhaT2vjJ1iJppr7cUaSoEz3CbWQDvQtuUpPrtvDANcJwiqvDLgcMFvqLG3wGV4",
  "key2": "4btX3R3eDizQdsVQDi7KMV38qE6R6GgiBw5QCbEKt3djKiL5sxT8jN66MPQCjo7mefdVREFdS4TAa5Q7H3gGDo7P",
  "key3": "2ey7cyXmue6phV5Hup9C3FhxciruqxpSFgxcWK3sLpW596tam6753ATyPNQDyGK6oEncbcDAfXvBzpQAeCRCjsX2",
  "key4": "3WBf5HrW9ySwWi8rRcsxQJwZ736Ay6DKjbTiTzPGZvN4MsBzirqcVfrHZQEBaD6ocjrAwCY4hHCVgdX6g6buyWT9",
  "key5": "3A5B6cVLCixsbuHyovL1AZw1nVGp9B56QTJb7Vk42CVXdv2M7sRuAg5TGJp8nV2yN9dgA2mBKYMet2h5vn5QijuA",
  "key6": "FKDBdSGWoLs1sAzCJ4Xzgu4J38YoHEhFNKUtc4fh7wrhVvvH9bh5mmjnubXbJWXMyMdJwr7wpTE9f6wHcKLo7c3",
  "key7": "5bQTGa4qfCHAL4KsW5f35DmRCpGdABotek9JTLgvDCH9tHqM52HQDMjbC5KhrwiqrTinii4zYHcZbhLQA43jgx78",
  "key8": "56J3EjGQNfa3KSXFAhmxYLWHUbEwb7xxNEj3UnPFVkpSfWcFwN6YAGxddZNumfr2hyEB86VecUmPnSh9fX5Hxt6y",
  "key9": "5A8fBqpMBB4xp1PedRc31ug1b5TLEmmskCdZw1Z6166iUhVoFv1qdqpeCUV5geSaoNfvuKDcTJTZydV3xtxC7Nq5",
  "key10": "zCLwVh4HBrb1ReADroRtxdzt4yUMx11gV5LonQB6ssbLabKsYKrua2Cmm3yUzoZJFPqo2m4bntkWpHZhSzJm2mP",
  "key11": "3zaBHNG93ALrCtDAWRW9azbRUHPPJDWY8HB1bg9MYpSycaVGMuaGfjTK4E515CKRgvrjqVUtUGR82B3x56Hu1oN",
  "key12": "4mbVYP6eMUWvX3breyaYs2SRVUS8nRVSMgGuJg9LyQYdNbtMwAczaoRyJkHhEze3yfE1n5bwi1BnoXG5pemQ29MY",
  "key13": "36Am7XjnuT6Kj7oVMHtvd45uKkLvr67ddd2K6Umfx2eBgz3NYc9wF69z6axSJX43nXaYV9qLyjcAbqurZ983J7Br",
  "key14": "2rjDsFSAhmgensQdomHtdpcunXpwVbSyYSsHiBa84ddZLz14pRUrTw4xVffWTM1q6HreeJiCvSUk1be2DzhwaNN5",
  "key15": "41wiYiU7fgEinSUgdsVB7Qh6CzqsjzKnjVXmiG3wBQAosT2bkHG1fzLmDL4XjQdbWP66nWJsgCJ4j6wdxkFs9xBd",
  "key16": "2HP22QJ81bxFqbd71GkvAETfpZJcgVGdCdjiLyZXbEh9pHoBZVohYMdCKJM7c1C2teg4pbk7vGbMr5GKq9MuW4R7",
  "key17": "3qv8Vdm7HypsUuunCq4f2M826SehyPQopFEHzy4NrZtjeG4cwGp6Z9r2Qqu1bg4dcL9wgtQfkKnRrvQDR8zurwVY",
  "key18": "34sa9dWT6WYrHjPXA4R1WtZvWD3h7gc8wv8uyVaFuizbkM1HGzDkXARCYgjk4jjk4puWMwCiCoMrqjiCdDp78A53",
  "key19": "5XBirwMiiPT6rb2BoAGcXMXkaChiF78qYseKS2H1Psro9Vb1wf6BEEJAzBuQVfVQeenzw2McVUZdxGU7ex9pepai",
  "key20": "3A8qv9tfeAYEyLah47T9XdaYRQHkmzAy6em3JZSZX755BmPN9Ckkqrf7dKEmGXS9r4CHXuLUey2ouXu4tJEKNe5D",
  "key21": "2d1rQ61bsiygnH7iBK3sjJh5G9mL3d21sc9MVGthtTqZorPNgYu2RELeh4P29oJHPA26aNbSR51aw1S3sJwwQsMf",
  "key22": "2mobTrE1KPiicizRoPqorWMyMcyDWG28wAhFxkr8mTpojBGoxSeg27LqhgEzZgcpaCTHntHUTanNnMui69r1QNtG",
  "key23": "2P1JreARZX8RYgLvi4eHuFxqVowgKitMfX4K4dXfk5khouvyL7WsBWNvYL3Qmq3mu3SXaAvGv9hFD71Ar3uuf4U2",
  "key24": "26Pqa7tDvRmpRSVhdnUtL512twTn97pPZVUU1FW3XdJmri6herr3sBff7XbXfCzaLc7scDb3SMhs77rMBamHYxB7",
  "key25": "2ah6g1DQrtwpgou3NeCyWSYQ5XtsVU6ijBGWtvkwZBPdLYRQj8ZPpqypsHj28TcZA6wkJhWmfYhwZ4FK955ykAfx",
  "key26": "3iEzNcpZ6mvvGGwkGtFerhP84qsXkRihewEToNaYZRU4dVYLoYgRPi3scNNXhcDxwMz2BKXYP87bK3cP2tBBEymK",
  "key27": "3DZLrZBPRFXvuucZfnas4zv9K15EvwxAH54MCAF4vwDTsKZS9inbusEeRLRvgAAsG6x3kjekm6ranzcQN38oNGtq",
  "key28": "4CUmh7ZUQjSNSFYZHH74sFuiWP3qfH4Dcn7UhzgM9ZuhJM8o7fZ1BzWSkHpSFjWXRz1HPakMtPFobXLo5TSnMbZn",
  "key29": "3N17T9ugGfzziLkSVazNgN2r9WzF36Xn2umwf2ZYXwtdqNMwZUgwNB16h9nayvw5cegc2JwQnqKAPGK4uY6FC4QX",
  "key30": "1T3ErRJaW3pzLAiDf7ybDSMAmS7VaBdPBQLUBsuCq25AXBt5tELv6k5rsDatjzg1fQdSxeK9QnUtHXduXiVwsue",
  "key31": "5SEjWgY9DnG4Yb3rQPGbZ1e9VtYhhEbeS44Ng4W1tHjPboy5YBv8GsYLBYwoJ7K9Q8GqEz49g9Q4jMJfw1YkXNyz",
  "key32": "5yNh7p1qBdHJAVdR2f8c4CmUGjLA8MekKsPjMvGhp5zu3unVaefp2yJkyNfCSKtfZxax4DhemSQay124DEGk5nhk",
  "key33": "5LqVpm1J55qCcbf9jR5h3xGMFRFX15T45ZCJnRFZ2RJc92REE5SMWoS68jCp8sV9YL3s14BCpGKMFFAF6UWswxQX",
  "key34": "3bhULcC1c9RVsL6Teydi7MecDp9SY3zRG3Zcyet9zbQGWQf5N1rFvBRgfxP41vMUrpaoiFC3gnwxsFoNhuKCKEtM",
  "key35": "4Fe92cPCtDxVFoMxQQaeBpc7tptHWL2u7To3nKrBJ9zjLUE3GoUxWCx2uJBAhE3n1Nc3XS5z4D3WGPTAPVwUQQs",
  "key36": "3GBwixcrp2mFY6H7gN9gyKXLDq6q9bjrEtFcN3yD9sx4dcFRsBUsZ12a6hR5ncLW1rvShrwBxpRpC9R155sEhoTD",
  "key37": "5j6CwUELRi5cacye9BMHxMtgTF3nfWdCQwEWCZ5dhHM8HbSC4go2PBQyNSkt9sEyG4GuB696TCAjgcEPgkHg8RDH",
  "key38": "iHTKic1fzR66kt8RnavCVBCTaCiwGwCnRyoePqRnUrjerMuA9x218gf1NWz9qpLeSySn3MwZZP9LfworiNXu4FE",
  "key39": "eYz6H5TfGbccbM1u3CBgKxoBKcGPpztokUW2jYYF6mtRzgJBi653yxVvoatL8AeRBZBehv58FN4K46mkxVR4SZu",
  "key40": "3p75NNFTSts3RW2FqVuhxha49XAWGLF2JFZjRWJtFeP5pnz2zD8np4ZJ6w23piNZc9SKPLMW88CpkNf2BPiBMBCu",
  "key41": "2qJekeWfbB5fZJspfKmSwfAgdsVGhgr2qB8EXU1HSU3SycVaGQq5jceZeEYpkdrpXntVrWdZmbuQDppZKaeGrwjW"
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
