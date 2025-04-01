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
    "3ZNhRR6eDkhbJc411rAA34JuDNBc4iYbxL1hh2ajvfLKDKEhyXneb1tGbjUdkaMqLqEaLbQRzLnSJ1BgQd3TbpWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mZ2EC2tHjaEozDWF1d2xJuC6SqD1p6Z2YvoLK4Z1PK4J9TVQEviSkvaQ9yvfP25QuuKvKBAs2voEHzDbBWsZ9Mp",
  "key1": "4i2dKNieeWTSkR1chxZ4G19YKHaehA4w3dMCx463JnKM2Nk1q7uyNvpNH8StSVfhAZxQc6Pj2LdYkomDezHfeQ5d",
  "key2": "NzcvusomeSY2VSdJZmZVMibeCXA3Pkes7xtTR3iW8fz6dXzVM3seRjTWaWtF1tw8UBrNq6M5z5j6UdEEKD4Y9CC",
  "key3": "eAve8qthMgn8eg42fTvtf9zns4JPFTREg27nfffoT3UKPrM233z8PHHwoEAhUmAhz3FDAvuqoXoBPAUwTFu1rWS",
  "key4": "4zEnBJPN2FSXNJCPAJYyMBpgosZbmAfhq1RqPuJPDT4A47tSUmMeGwspdN9SErd3u1ns8jD8iWn9Zu2h8kS35QxZ",
  "key5": "4FV88FfB7jXVraGXGi2ZiWP6rWt7qLZ8CrbkSEnGtwx9Hfdmy2Yr8zVdU6ceNPKcnciECd68Dm55wUvBdBuHqCNZ",
  "key6": "5hCnoUEyhNGjgYoKGNfPqi7ymxEwGtKzaCQYmEwf3uAxwi7DMpkGNyudr4o6xyKHofZZ4dzQiRXGwaTpWCmKcB19",
  "key7": "5K3qDnYjsrGhx12jUifjsYBsXPbZuRyhk94yQznNFodMxbkaMFKFzxXadRGDPLyfBXcqR4VKd6mCLMurTfaDs9Zt",
  "key8": "46UpqeqJSR7QF5oRqyEAddcv57b6kDUggbZokFJ8abhNjtLDAXpVwXPmTX3QeAkPqXyGiTQ1554ZXDeTcY6BtzAX",
  "key9": "V1fJk5AZn25dnutKMViSkU2DaKfQQvGbqZLnGnaXMCq4Ttpn4qqaCw2gwrafjYjHaumk4hLae4H4TE5Hi6ax2k4",
  "key10": "52vuFPxvEzkyhCB3Pj5H24HxGCeEZFevf57ZLXzz6xR7v2XTsd4bZc2c9GmZEcU2efvyhqmD9Awj5HcF3PbS9AUi",
  "key11": "2pFsSGGroZzBiQSKxf1tpaAZtjqcYnG47mw1GLZcjbtgZZVtrBD2nGzmsPstuEm8KF6m4FW97jkRkDsTxrCB1PPW",
  "key12": "HYXPXBYQsuzJBrW9bhuwffNKaAqCdxFXGCziDezvny26KC8wkeVrsbakWHSzHx5cTzbAZo8vaSdpGX37Woja2sg",
  "key13": "2ZH5oyJjZfQuW3gyCFAShBc5owTgGwoEf3ztLBLg22vuRKe65m4QuparfUvEM8oW4DM8x5aSpa4eC9wtQPLRqKdc",
  "key14": "G8nCQsRi9Pb4fU13qw3pv277e4c855uqEVMVSPzuXhPnrHSpfau3Mvt88oyeA2hpDwXBgqWvVnmEaM2dTd6MCc8",
  "key15": "3p1RHqZAL4aiJtjhZHe8NBkKzNR8Lu6DPYFvdirBs5X9KyerZWugkPiy82UPHZSCAXC1jkMQ64JMqFuVAico1mVq",
  "key16": "52vsNTJ1ShijX6vuaoWWTKDSP8s9r1XUqoxK8bRjNjRZdijCL6pM6YbaP2oGf5r2gmizCGFFz8zYsmrgvs7rRuAd",
  "key17": "GRDeUCnJTABkcgTHzHEZB3BwHN3EoCKhDkJG3eQocF2NJ5BHyR9so38gvBJ6HLQD68FwRKmjLnPFHFTz4xwNW3Y",
  "key18": "4X2YGg7dzQcEzNmFZszZcPVgBU1Rgs7ttuAD3q9Lj5LfzUUQUFmGJmL9yEftdv1VNi47VdyU4m8XyuSysPciUYxK",
  "key19": "2cvGppweTcsYEe8Svtg2rgcbr8rLrDtcUvgkDYBREygvdwVdA3bk4LL7CcisFxL1EP9dpWaTPkxbnZawkUiF95rn",
  "key20": "3o2vcTvvDZQkG2GemYaN3PoiAM1d9nT4DNFSyU2qxDnoKCSikEWnGhQSAvfDvKWS9iBE33Wpo6bXBnpoNFt5QhwZ",
  "key21": "2ixDUkMVpqiiXsSd7sK8HaQqgLTuwJNMFVPwTKZ5Zvb8kjTqRbuZjZs9sGTaxAnpXm8RCyAiPThWo3jYYLsSUvh5",
  "key22": "62Jrb9SUP5F6ZGwE7RX6N4gHsWnpa58QJvTmCBkXTMsEptYsEWiz6wAJnVQinG4mdxhTveUnqPwRxnJycssq6TRu",
  "key23": "yw6TVWuuepLcJkva9XD8AfwdtAabJAMzPjYHBYQKmEbDcuTX6L3tjztimqFK4rRjGfYQVWpBMo7MXre3jJMrE3V",
  "key24": "GnGoUE2VrpqrhhSPJXAd16YFT1efLDdZcjZkauhGivD5wgddr3DH8opb2wQ75rQznDxy76mLq3Wtmh5tE5yzkP4",
  "key25": "4gnmPzGvzH5o2pHSeB3RZ2FMkMAdTxq5ENWp4mnbbEeTQRMKzM6tPy6xe8rQsL8a9ta7CSPDiTbU24R8YvBPR52z",
  "key26": "3MC1ks2qBXW2YN1ujTGLMRBKiKmCkGRDMymNSN5sPcY1UnVqnHih1XpcW8dpRAndyfgfXZL7D6ymkUWA575iusJ9",
  "key27": "5SMQDETxnQJUANiruHeJRT3PafvcVkuUUGFyqbXgTFwhYtkaCqxy5pbkkhRtt9kKHK1HbophpyDgDXi3rippfpNJ",
  "key28": "5ctXcQFBem3AEs1t7KajrvqCSamWhQx1qZB8PoSt1R1qqXxmF3M4RYFMr4ZeBckNA1Rre3gp64C8mmKi4maxPadr",
  "key29": "5AueT9tG4NffoYGi64v6do9YUb4WAcosaJL5Scs3HZCpu2qiRbZ82Cc87hTMxCdinBNZrYcmUBS2irLv2fjzQ1bE",
  "key30": "FSwPRFY1pH3WfMH2L4q47A9cdxehuG8hHGhVjayXJ6j4GVXTjTnhacRj15S8xPGW9oQyiHRkah1dTkS3FFmh7no",
  "key31": "2JvsBsNPP7Qd8M54ZCDi8oJFtgWduAAsQ6v8ggGHubTytJkmzfvMM3DwPaKcFPUf9pS3fVMNCXHWeVTvWaL82TeF",
  "key32": "34c1fMjTZWLXLjBtNzXoQ8QaHpjZCNp77cufTrLXWJL21MgaRCCKCjmEknVhwhdU89QR881aTVfZJNwDdXjSwK3R",
  "key33": "4NBAaE3BT15DXbgsbuAfVcy1uuGwTNKxyHETSDhq5XDVCpbGnBBGzWBTDxEXg2jXCL2D4QK9bGAikHB56KbLsPmk",
  "key34": "3H2rK6vZcX22J6oCGr5sK2vY3ZDRiX1rPveJrEyyimj8aTSCTLX3B9LjBXYjiVtxUBiRQ5eCZjAFM3X9RCGKSJgP",
  "key35": "4qaqH1E6WkEmrtqoRHSJ8kZMm8DKjdM25BwDoYyzgqGHhKt9LTBhZeMBHMm99Jrd7ayDKayZ32AgVVJGPqwQteZP",
  "key36": "2eaAxS5Ttymt1mmhu9RaAPNfPutCYtgrQ6YxNqAR7m6wy62tBRpnSNeQahHTy98np8W42paSumMkfHXLRFBsuWky",
  "key37": "53SoTw7sbSRJgucgpPWtzASQWRSgcdXbGLM96XGu8WDnV7S8hQdtdnJMqv62WCMfAjvbZqxoyaQ2qTv1uYrxWeiv",
  "key38": "3Xw5YCgPccgKyKTbc3CkoLFbdtPavrinsPEX3pHBXFX9JACwg4EkheSccKfvc9zTJ92fS6xbsVLzthCQCKvS6pLZ",
  "key39": "5JNVPYLhqbeXE3GkzHYEB6x3SmrgfNtWEBqZtKumLKbNCbCtNChVFR6c4E7Hv2uNPgx6o8N91XAQHFGCxn5vhCHS",
  "key40": "5FpxQKjVkHRCVUoswJi4EfpMoAbJ9LNE6i7ngT883Q1NSj4o4GyDjW3jjtZcM4AQZiSaetiqDMScSSFXNypjfYQ4",
  "key41": "2tCR4Uj6PtTFz5Rw6X3Fu7Lf6n6GqVmLGBT5iXFoKPEmnpPpcLCVevVM7WGP5wbwTNrquKnKo9H28LNpd7EyxCCz",
  "key42": "4B3NYVVspziAGC6qmLabiwByer2zzEP1GaiQ1et4HvT6qmYj4BeQFA4WnCN3DuJbV4Dg3PGp1JwXgEyQtWmTPgu9",
  "key43": "63rsJHxJ9PJaDCKDom4T9E8dR5i9jk4kCDSpdrwqMSMKyyZ1zt5wbDBt9De8CMdPn1uRRbe8ocKgiwSCxHigAHZf",
  "key44": "67fA7xzqTymG9fPPv2EStgnYxXqZ97suKzMrEFtoXBgs8ai1R1DZ6iZG1EcXnUNTt4Ltz4R2iYFUdrXkEM4z1LeF",
  "key45": "iBGJTgZGrn6c1C6vcSZym2rNU78yBmKyLf5vfLUiZPWjhSTBPJQKJMmnFawH2UjdWqSHheHCNunLCemg8aFkiCS",
  "key46": "3q3tjAde4mUQCXSbDAaWkMwK1M354XAXGxGWATvq8vkfeSUpEMqSgwfVFaC24rQky1NZFcJ57CHChhTLLaB7WKx",
  "key47": "3pnEdKQ2L3fCJumCankNofCvgMNYaooHoJMUu3Eim8gTFx1YQpW3UvLLfuXXBEeKY61Nq9vhK8CmLd1odyuaoTSM",
  "key48": "3mCLWmkALeShKhwBUjtxzjYjb2PAKHkYsmyAAqbdd3oL5C3itEa81uy7zPEph4oprNCzxnKKXsPM1AsM9eYkL2zx"
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
