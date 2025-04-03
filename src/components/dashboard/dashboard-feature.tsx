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
    "yKRiHVBwJf3Kgc88SGBRriDQt91GhKnsgEBejLkiVFCfMK9AE8ZsLEVMY9qhrxijhBCtMN4q7BB2bCnQubq6FoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jnzveR8f4xWwQWQu8NnYjgA22LkN9ox8osECwJSWfqcPwrrDLtGYjtXw2Guu6Zk7s3amD4e2KTMjkbfJVg3mAYV",
  "key1": "wvWxK1MPzMZWjjwbJ1fgNFAu91a8W1HAtDo6S5iG2tDm7nnunfMM8hMXWDzMXJZCN1fYKQ1xKAmdmZTbL32JN5r",
  "key2": "2km2BES81YCyvgUjLeKLaq5eQXForsNWiF6tkBvSXpXwV6iDLKkRZ7uD9kGqaNvvgKpvR5Wik1HbJeFjzcyRGeqU",
  "key3": "3t6b4B16LbDzqyXba8xWtUU1jyeVChfFef423URFW5DbHvK6LyQpuf1eXcHqr5kxBYFZFRefgKXtZoWgdcnmfyBV",
  "key4": "29wHWtnMWf9z6Qft62odfxCXhq2c45QJAN3bDc2gFyzBm2WAZrAxKEqPkzCzLpmZTLKLDavmKFCcW1oMKLoDQgMK",
  "key5": "2U5ufqnJHG3J87jukWu8SsGnPqdPKdXB4zooNhBACXXM5ofHxipMFqg3ANtYFGz88ynN3Ls1StNAWNXK7jBU1zGX",
  "key6": "2c5effhwWcigjy1RSzxfsDwVYkas1diCvdqS9ctfnLLbCfLJmwLEbukYJCkTcJm92Kg6rSdYLBMr9b7RieZMg97d",
  "key7": "3qMQ6ReYrvtdB7CpKRNW7JNLvF9vJZEP3JKcMRcoiti9iKRVTEGw1xGcbhE3PXNymMQ5ZYKxQQ61yZEuh6jxsURi",
  "key8": "3JwwocbM5J9vo1BXHHvrvd6tcyTrVBNX3V19BDw59E2zG5SXSjJQ4pjV1QhJFxni7ApsruTPjZLzV19iWpanWUak",
  "key9": "4VpwiA9rV29LToBcQPdMaHDj1Tpvo56xg9NKqyf9Sg2wo4SxhZxg1Fuc71DAYMT8F9kq457mmCPtz19A1pyk6bVs",
  "key10": "LHAAAxfSjGXJ4bDTMQLQxR9Ekp6eDqdHF266dmwwkkbkWQLLx7Nv5roPfKSoAmn62bUkMvgp7x8qUyLkLdcCUHQ",
  "key11": "kpcP8jQYjVryG2qMg8rFFH8EgUiv4WUniQHPcW5D8YTwjHv8ZiGiDai4J1q2xDd1nAfuC7Dr7BEYNooy2bmTMBp",
  "key12": "tu9FBhEjHFeWvzVC6DqT6v498fmojz2WBL6b4HuctnnBwyBehmL2JaktELYV5uZKWEkjxVAeuLVWEAcXbiVjR48",
  "key13": "DrLD1ngkhAk4ox8K2QFLftxotxXm4CdatPjuaECD85d4LCBQeVvw7nBdChxJNcG3nwdbtD8L3B2TNHCDCkiZAxQ",
  "key14": "5bSrTDZmqVBQKe9DXBSCFTgK59tN3QkomcYvGV7hy2ytPdpnrPn6bsKzH4zkapn1g5wmm3Gco6psozEMBAuxTnAj",
  "key15": "3132fF3qVNbSvMKxTL2nDE1KT6ZwFrnBn5o252KJ9G82mFTSPqi8WSxYkSRd13CYpLmE77LDJrk8Ywaaj8hAHyfQ",
  "key16": "4KjUsx25ivnX4MFjWq82zbJ31WtmBUYX1RetuEhPEn5vBFiSn63DEwC9DAGQJxcT6bsXg4o9Vg4VjL8R7GVckzoM",
  "key17": "58ru4xsX3qXLDCEnqT35dteMFJVdRJF3tswfgbb33sjnHchRWP5APEG2LpRRACSRi8PHTAShEiDfnef9zehzHG6i",
  "key18": "4vAUS3vezMN6ouegExpDwSRputqxCNUBteQxWBHdMkwbfApbkgTxJow4EYjQL2t9bXoTQBt78UiNaC7XfWXGtNoQ",
  "key19": "5sCYqxJkFVtnnu25Z5aobauwXqE9P5CcoWdfqWY4C7uyLdfNM1ixZ6bUukEwPS8nphQp4E6ia2rmm232svNVTeLj",
  "key20": "5YSg4rHWHMP1JcUfENhxfNwAyygAhEB9VzhqrR5AgHGKTwBGhbG9Lrb3B788kostKEGbf7MQmHXEfqonR1uKWHyF",
  "key21": "562CbHHpyUiwjE1WTwUjN1dGZxTYi5kvGGKxsrRfc4DabBbYEyoAJsz4Q7XKfoEp3257hd6LVvWdiWgs3XgqgY1X",
  "key22": "5JqxiqcPmjKNGRPiyiXMYZoLvhmq2Rs3LNNn6PhPhpBL6YtikRum9AwS1vuv82mBcZzzxR1BtNqnG2FCfiLwPvvt",
  "key23": "DfBhR2ZkykTRXrRrZhqhHcYFqaiWWcoqqivvx7PQU7NBTTpxEPXppjHMFRmRhbfzPBdrw6HsvdKedtKdGnRmYK6",
  "key24": "3SyCznJVNJCoRaaAfoG6Wd43Dp2KDydGpwpYpXSynLzfCU4u1iNEDqRfdSPMS5Pmcd6dhykgCTrA2cPFaPqykdEE",
  "key25": "5NZ3fSLoU1t8yixLrpKHS3Azx8z6GUjR9tFWQNcmwHVgMpimsg9BRwcmCgooiX2eGob7D8iRQg5iNdDvjpZvFveX",
  "key26": "2WZepGwefoRvPpiQdFtHdan5H25bYrNmoqCKBnzokne8125H2CfeTtENjB1E5K76PJKsy4ugUtbMcM2JGUYQ8y9U",
  "key27": "33Qy7ViCRnr8pRJMPS1zVp48KCD6r8oQMzqPUUp64XFkztQZb9oGoh7RZwaX4mrRmm2m5oNtQWL5GQoVeDSsbQ1D",
  "key28": "XbWwtKTPY2NM8MkAgLsQYH78TkXtVLKDBtZikmMWDSdizYCf4wHXNeb6PeksotA8e2T5FfC5r5aYXmR9CcYZGho",
  "key29": "4sJ4FmFaLKj5acbz9px7YKDfVP1i42kFdWvuLddVurrtq3wvaJW91SzV6ZpQ11gaYRsrSvDkFCRK1DSSsYTkxA5e",
  "key30": "5a734WAJnJ7Wxpi5Q3saXXTkpni2pDkR7gsqrcPnwaUnitEAYoCsFJabeAeVT5eqhiwRaUMqh5Qba7LdZQFMVE6q",
  "key31": "2UQuHcHKo6Bii4w7xrNoPzsuM2q1vsXMG4YKkA75WkndHD7rziXerTxp2jmcwJHPnpwzk34vvfHjarMdfJgnkzqq",
  "key32": "2DAjBpd4AgaLyvdb7pRYrqWbLz4XqoTGeG4BusCHQVy3vRdMrcpQPG6AQj7CktTMm5nindYSv15UBEXYytgA3nah",
  "key33": "4j974qzSm3L5a262NCVnWXnN5tUm6kSsi1s65vL38Y8TeEDMg2HNsfHSMNAvyBhopv4GM5m3T29eUoCVEZ7jDjL7",
  "key34": "4kNN9qb6PXh6ihGCH182mQf1jFSeSbv3sXhYoLC6MaJvzj4RtNPnorZ68CwMbZmYPsF7VZTMQPRaK64x8RK6U7wG",
  "key35": "36mkZtSi736KAYxNrNXKPWHaSLSHgsYfgUSJ3Xf3sCeWNAjzbQUXo1gXC2QKzotb62cJBBrhpnRx4cgCf7DADni2",
  "key36": "5CEv1jCJiTByfSz2wEDbY5QhY71EC4tv3kcvopVdqZbkbU7vTbPZ4UnKhiX3u2cEJCGzWT9ELuiQg9NHKXt6DkWh",
  "key37": "3go6T9eXKqzmqyNLqZ27fGW2qCM94w5u6R4uSxL5Mx9EAzUicQARUZjgo6E3SWG3NRrAAsFiH1kbg4vVCi87mdns",
  "key38": "3evJ4R7ncFsLi9hE9vgMwfQpWBFRTntqx497QojKEWmpdYMFTkSNzr66wBt4ALvoBN2JAPZFxpH89psieJiJ2FDC",
  "key39": "54vbamiUrat2ahQiq7aJBhS7ud3MDbxycsEmAAPuk1dMqQTqqJdUUnhL1q7CsarBTh1E9WfCgVCABuwZeTC1GvLi",
  "key40": "3yxb6b3otkiR7wVqH7r2Q5GXnDPRJJ6JH2cwSiu1ukma7K6fo1cpXXpA7xJu4Ru8eJupqsc2zPMViT2uWAvbfVBc",
  "key41": "27opGhF5tCt3ZvULDK8cgDkw4EaxJet4vk2fE3s9SzY3LUJxHjUq44MYtjvJdkEv6a27E1R8uktQRg91YbEBMFcF",
  "key42": "XdiKZjE7oWLFpZsK4WjAvj21BTHHdqXz4XXHLKrMa168mRrAajXqKJRde5kwJkJzhNKd3JwjU1kAovXXqGT6czr",
  "key43": "4J2HdykwyqmN7PP6nLU1Q4vnsMzKJ1TUygXdV7c2xsbBtpudm73SzRQXnFtVRZjQqBwE3zu5XtFbwsJNFhSwWJCV",
  "key44": "317LTCksrqZioMKK7iNPvppz3AjF18ePVtNWWRuPrx8ibdjdSpZ8c3d2xtAw5owV86rTwav6CYaCt7yjCxsGZ6qK",
  "key45": "2mJyFagjFrR5kZ3615UCq3rrZ8C2AF72axjYbCASvytzdDkwS84waupeGbui88YC5DoiwkiNJCktDnoXKZBLanrB",
  "key46": "5tiW6m3Ub5HEz8n3GgGigMLq8w6YfbX9LMjFEWfwp1Uvcxi3DGXi7J2dBcYX57uxJx43ZqNeHpUuh34uyXqB2sUt",
  "key47": "2Sx42hBw5T6DRTHYZRcx7Ldchct2QgLBkcUtjdcXCeUT4C6pega1ZeQ1uB616Xs6BzeSacS9XM4TcQg3azPcSQsD",
  "key48": "2KEZWP4xv55Ad5QSNeTFRodSVf5pt5mWjRFXquuWMgPK5oBDWy7ivRUXwanQCjAvwkzgfSuHhjNjHWHTqJHJ4DkE",
  "key49": "3AS4WLKrS64PnTQnn3PBSiASGW2rSA58t3Gxxd9QrxSHKnXbKJNBN4AzsobNuTRDJGjbtCjfex7UG23WF5as9a5i"
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
