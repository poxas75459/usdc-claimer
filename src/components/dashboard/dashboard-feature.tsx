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
    "2ANywd7rTKxK2gtaW6qzG3nnn9P536PJbqTcwi7brm6byUtrmDidb7KvM7nRyaYFmourP9DWobKzxYBM5ovQK22m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g77cDqZ7F3kqB3sWufwAWvxuTCuXTnU1zuRMh27Lcu7nHWDSZaAyDmMaHifWaygRQCMmrPpF7VibfrD7dAs4yfP",
  "key1": "3UzZbVFTqL7EFgTyXU3ezMd7YBtxTykvv321sxGCwKJ8zQ9rSxqsDgdxKBdkxqEhTZgC4qkNZRBLeumeCkVjUGhJ",
  "key2": "5tEv8YzThJQna84mQMCekx7ku9hwMK1eLPiLXCujJNsrLtjGwXPVrcvoM6vJKChtzxqQJsoXiyuMScTjbnJSa3rD",
  "key3": "5g1PXN2eoUuQdPLN8Dcftz22tjrnBFfdsbuEen1GbhSGRSnpX5282LVvWQ2ukeFo4J42Qt9sqXN7iMTymKTJTYkM",
  "key4": "3Cyaza8L4B7rV6rQVHn5DiGdqpp7U4vcJZPX66YrBm5RmFhFjLUj9jaVar3CsSi3wFPtuTrgNu2GLSZPucCcgjqR",
  "key5": "4Wjr5y9Bd5YXSTjxa67U8XYbDFms38NkphMDbM2EbEaovMPJHqc2E1wpTcuqiMaQfrw7beQsRP7izoSf1Sx2j52H",
  "key6": "5z7AZr96h7iMowiRCBSXBM9dehwUi3yxUgE9Jk6s9GiDrs42WUodhQUhD27LVtBY3y3fBe12PLMRRKtZLoQbR7jm",
  "key7": "3i8eNHtxCUacZpMZYspRhzSpfHdupTEi4a3sF6GJjBkEzxBUXknrnKYUaSzWvVmNa5GKojGq9szGBuQKRk9n9oBF",
  "key8": "4eXYM82J7SfsUnTqdYqKXr6PLLvuFLdw4UAC1ZbT1at6f6CpMbG2AxdBxbMhUYxvPooWP6TdpNYfVSMsobU1Mheg",
  "key9": "5XgGWUqbAQCxooYBfmp7pyFsVzP7PdjgXGkxEJsQGnBFWS5dwggyTH3aYeRqMYeWj5C1HnUCaSV3iqQLCP2tmeEj",
  "key10": "3SCZ63omGdLbnBSt9hdYh1D6fcKVGYzhGMhnGkQcT7pJfAMidTnMJHo9cvpCLszgwJCmhVkszWnaa7C2CLA6YM55",
  "key11": "5EtTLSM5SxvmwumX89t8e6RhTHFXHPos2eDzMZFLG5YuzGQWh7bzEZ67ypZWrUrEpWRq2yE9NPi13icWBvQGKeU8",
  "key12": "4wBzpqyvxME5zwa8YjqNmuZiev4Pp41FNPHZryNkpqByntPXs85GA93JKTEfamYEk8822mjQmGQyv6XBGbGuDNu9",
  "key13": "5ieS341KHwb1349Y3RogVcZGLEibQnV3uaetJGLQjU6Txwam2K5DhW33HMY9u2aYw3X92ccAmJvSgxCuS4FyGirn",
  "key14": "2jCmuY1tHRv9hcX72dbLr7gwpmbtNR4G3kbWastiK2jCSAAvPLEC44A36kDfAmuYvf23z9um7iXqQWDaYhDm1wT5",
  "key15": "4CPGfTuZCkXYyBabu1F2i1Zvr8BpE4XvPzox5vWgZSCez1LK9NACFMeHWHoSFzLdMzy282wqHchFDKjxQYW3w1QG",
  "key16": "3KPtcE75CepbzxGH17tHVQxuLxrb8K2p1zNWspRitdnEaEXTCwmD1aLKczpY8E4fd3sHRdf4qPuWeStC7zE921Ht",
  "key17": "5wwX3dM7dBj9UHRsM3G921CtQv37B8e8gZwn1T65GYAUEZdNB2ZkLqspRWgLbWtkuL7ns9U1jEKtMvtZN1f9NfaW",
  "key18": "35L2MgW2XcoRemGxpYa5VYMquqD3aXbKwtBhvjcrS1YZn3mEzGENbwCKtkmQDAGcrvci49BSs3iGchtuBAHYmrsG",
  "key19": "2VuWEAWbfdbu6UgcKvZmM9AqK3U8xop4qku9j9PKJn9scdih455iwkv9eoEFwSEAofc1ramncEQazjtK1t3i9vNk",
  "key20": "V6X13PsxaDZBNCBz7kkpUB2AVvuHP7dETpgyM7iFevwKr6W4WLbHwRZxYXwmqFAj1pMe7KWKf7rwJNbJPLWJM2Q",
  "key21": "qTn96gng7Ux6Bd928oFPx16KEKJzwTrVLqZrZTYbU4DqmYCBdcBsYWsiujdDpoVcjXaXsfSaF8hEzPdmwQPiZtw",
  "key22": "pR5Yx4jtGAM7Suyou9ujS8QKjJZ7iAcYsToQAbQsvy8t5z4GtLaDUaDoFaZuRn9htgoL2JYhv7iLeJnAvmgcUVT",
  "key23": "2eAnMdYxitFvpTHWCrxkx63iNpaDtteWphdsVDWipL4yxNYLuhCzD3vWHaCk26Xn3vH9fTPTydHMUT8CUYwx4JSS",
  "key24": "3NZj5a6Fr52obUNyDJ9gr4pK5JGqLHFHi7r8jrRug4PngbUL7APs152RDmqkM5AkDgcy6sMBVEpAmebg116eDiov",
  "key25": "4NtZoySTxG1LegKYnkAMcTPSLiyQNph4fz99L5BbRUsmW2YSEcG1LTwrw7PkXKZxhVTzP9YXxjrNBRwYf6LNMpHf",
  "key26": "2sKomxAkdgX5TuwUoUxuLu8PhdkgGMDqS6x2568WwKFrXYDr7VMtxEiCw8NNjq1Aji4ZctyDhTD8xQ1Ap1ebfE7K",
  "key27": "2Wfjw2FC1b2BRtjFf5wAJh5sCwPY3d2Hk2r6k4voNgWtoKac8mqvzkuwKG78rYB5m9aN92sSowCw2DWmyZNEzpYZ",
  "key28": "24kXrMhzFXDUzpt7QtxxvCJ1iuJNQXFbRhARA7JdbudcH4xi5baMvuz7bvMSuSo3SssXvWVZsddXB2DAoAjETSvP",
  "key29": "4PHHKoHJvpiQhMHPFhBjW73pFxcEgNX1M9R4FKMFcLtp1oXGCYwiEt313jQNz1uK6WfMHP1eESwnPwnnWrYhmJVd",
  "key30": "43fAUPDXHxXXaYiV5mh2zaA52BmU9agdNGBQVorDxkxisRwVeNX39KVKc6fHQjBPKvZqQ3TcyckLPysvcJufpJX8",
  "key31": "5jP9p17awFMMMqzQofPMMj5hGBnADPGpBZ1xELFEA7wuX76dhRyjNErmTeJzUKGGAgNzKdN9KA64CiCe7P2FwA8x",
  "key32": "4ZFDQSw64aqnrpHqEWvCBYhuFd9yDGTJcAJbkpANSueaUrh5ynMKibqWEGDHCMjWnoBWYRbddXwBFErJUvC3Y48n",
  "key33": "5WoyQ9Li8ziRPrX7b9MqX4N4yQsJqNgBmYtgjiRPmypzozFMr1Z3pkaniFvyVkyhxFhJjj1q83GUoxkpjN5fLuYF",
  "key34": "2GnUchNqqsUwxmZ3bYJC77mqXEiUceFA7s8xNjTWz36G3dv4cYSdDHhoohcCQm5uchnnixaBB4KxSX4GJkN6QEcu",
  "key35": "2LS3195ih5Uy3EcCWr3W9nmmgtWXM5nGDJEvfnoPcaAaFzm3zmYKGUFjiVnoEnNBM8DW5nGTWcDQBfS19AYYWAWj",
  "key36": "2PhpzMsgraHWQRPFhrwwE5ZcPvhhZDUwNteQQyP9bH82P2rv34xbLkakLe95VTyc8y2BPizAK8ekt2pjXN3NeQTJ",
  "key37": "45HbgQQiGSPpYtFLRpB6bMzu6ZfiJp8TyGqsawxhMqWQBmfmnrzmjbPG7qc3ZRCLH6sQEhY56sVrMWC9EXuw1dB5",
  "key38": "4qXzuFhyEWbPoBvyGjYoLJ3EoSukJyBPNTB5j9pHy3gYSvU9Q2EVHuNRAP7M1jUkEob1LuJZ8Z3taRAY83h4gJ3N",
  "key39": "3bnv9tz3rhsG8MqgxpnUJ2nmKf8L855N2H8vDB2b9eEuHGa1qzok92cqRzF7ruwEgjetMn4rgLWqfwtHmHysbzXq",
  "key40": "4x8QdZA6SfG2UGjGdYjPYj3ywj4j5jdq5nuy9J6qP17YJD6JBH11dTFR2JzcPSTkok91LQnrStt33B2UJyDkZuxc",
  "key41": "2tXCcz11TLU1EAg4AABRw2xtKKFw3oeSLNw7XckkeS4MBCWbmQnAkzfACReCGwPgeSnvrxLt59Vk6ci9KPXbkiUY",
  "key42": "5rgYoge9Dcb94J19Pia8RVshY3apbRaxzNwZa5nFtyEZKi7KNH8mVyC33rRwfCYUpp7GUQib9AjmoBQMwpFKJrh2",
  "key43": "3SVo12PwPGRrYskEWCD7KXhMuWEpF8PihHUnVkArkZUSQUdC22zBVUFcsakf2DrJVtYknrwxRB5UU7xpX82Uz29N"
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
