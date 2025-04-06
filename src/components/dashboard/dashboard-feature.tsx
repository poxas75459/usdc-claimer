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
    "3KgmKHGhYjqBy1wx3u7gv2CqygqeFTHYGZD2x82tWqgGRQpPFpMNykyz8CefAXQMpj7GG7ao9KS5Nh16itC1FCoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eysg4mcYYPvqdEwjTjT9VVNiTratXAysDkTUUknKLckDYEdxdBjxNL9LPqjBKi3VDCCFo3nFXa8GLdcNhJW7rcZ",
  "key1": "RPHuBKqdkUPh1KRw45G1KxC47cY6uBUNkSzc3NpcTxCfV7Tg7deRx3zfyRNPDWRuChxpHpxcXaATTmQ79XW2wqX",
  "key2": "3jucPFBTC9QQ6KgpJHgfc84YAcRmfJZ4f3pnNNYhFSG5QPWVUh9fQ9DiR24jhMsvntJkSvUBYkzmFJ2L74TkWTCW",
  "key3": "3QUxiubH761AtsMeHAQAPWr2vK1dV2d5fhVuZcXPtbxJYrmSiJRFmP9fX7pmz4yKJQHzuZAQmnFrB1Wj6VHEY9zP",
  "key4": "4wZshgNaimQHF8eYWdrkhpNRsfpRVUQX3REjm6JtqkAJYrTgJfLfYB2S2PC9NbYvS7xg9ePbrMpjTqTe3cyrBhcJ",
  "key5": "3CY2pepK4PSpSRqjjyj1Co6supWMYoZm8CFsr3dnYD6nPS5PPW2JdK2Jw6JCMchTPBCKzy2mNbue8RQVoq9VRGyA",
  "key6": "62Qk43Pggj422Fs6LPgbpmYAr74L6ZqtQSm839Ha8rsKYjqUuLRaqKjkMAFhQxmrxfi8deGyVuoouGhEVgL3URyH",
  "key7": "y54Q4oPgY69yfzHEw2CbycFXwVohzTSzKNGQpi24KWYkM7WSTYhvAAcMnaXxBWfMj4y7B9aHQos6snNZDFxer7K",
  "key8": "CnfL6KNQMTwFJjTLAQ2i7SgrQwpH11GeD4Mp2fDnX7Dv6whWqqsvg9t2dfGWAt6FXVzpzUY2cZpHLgMJeXyPwyv",
  "key9": "3cuAgqfwuCwibqXfEMF5GHYDvFYbzAE3QJMXgoa4u9MoxUc1u4hiDvP2WnpFXoyJA6UTYSfQGxNVAeUiCxZz7kev",
  "key10": "4MWJo2E7fTL2B9yqf3c22zPruU1qfvqbmDUqxegX1y2FvAd8KDf8w35JFXypYS4gJGnXWa6CHZHLbUjCrzRy9Aoj",
  "key11": "LAexvqWbhUnuhJjDQEVs4q56rmYfLaYEZm6vp6eZkQWGf1t6b8gyHnWrkfyixVQR7pC94nom2pS4BK9pvXtLDfG",
  "key12": "3pX8JV9d71z6zV1vBXC4d8pqbXQc3CazMHhu5HwNtmh2kyP2CAG6x2j46iTmvC81mq71zhbTVKBAEJehRte5g8nN",
  "key13": "5xSvSth7185CWiDihKwG6x7f5KimKGxdp3ckeFmjMjByRvRpeY2Er6kKAHj34E8rYsLnFCEisrKzvkkSmVc6wu6a",
  "key14": "hL6WiWvUoafWg5AfsZinMSKnKnMpycgrujzq2as9WseEJX9AqQFebDvA3earapdwN2vV5sTpfhEyr8bBGyw4WTv",
  "key15": "22qSJXH1cR54QUTEim3Ajd7Vtz3i4Nbo7zWW9i4STNaaFerWqcw17JpkiPSqH1ASxKfcJPr7BgsdhKcCPFr8xftb",
  "key16": "5MCifbbYHsfzfmh5pjLUJAwGZxTvzHNaDMvJL7m1iaxVAqPDYx9wtymyEsuDFBzjfjGdjHzMce8KbeXeALUpMPRv",
  "key17": "48eHrFbqHsPxQMG4NCuybw9j46tM6xuSjEvrZSGvYXCK4reA5Va2uR15fJPWE83kHgH5iERewYER7PoJdMri65Pn",
  "key18": "3n7zTbN1o6GfVv9afNoxsKnP2oJvi5mU5uTUbjV3kqoXkNY4DuZrmSVQYoJczjBd77RpvHnQYWwgJZ5fUA2UXYnR",
  "key19": "5cYNTDxuUqyza4n9bf4RMNtG5YdAGjU8BvptaMdXQuQNJaGk9Cc6zs3AEVJqrDavuX8FvJar29jseNTKsLEeDsgA",
  "key20": "3UddmKvw8pEDYPtwUaRNkVE219p7nZop4BLZRxywHvurEVG2oufqpo6TP9JicXCSsqnRveGNdD3mb3J7ATqbRRqs",
  "key21": "3jS5yGyJ2Cmq9Wd9ipJdcDm4kTKv8DBfJgizT7ozKCnBZVTV5pQk2treAxd8FdS3cboV7rqdcDMLeFQZE1wFkbcL",
  "key22": "51iyD9QoHJpE7R7VWWtZhZHdoqG2GcRRchMhuSEicZeAytX3BaMSm4CwPmfA4cDNkf85WBAvEpTQnfczBcjyVy9L",
  "key23": "3MPBv93NzC5vP9Wo4cT2cLyF9pGcRtLHVfyo4wY5X8bshWCCQmWodvd18tMXi6Ns87nhL3M8jtBviopHQisyWjwz",
  "key24": "GsSXJB73BRaWjbVU2P14SaKMySn59GX2wEnMheGPwopUg7Bv937tg5FdC1puTmoqc1ibxRAKn6WMW9wwyLMjAKt",
  "key25": "2rcodajt27o2ZWXUzcAoeYrpJsthGDacTkD1g6QKGAf9mwCenPywQuij9XgRTp8eCWVfToS9eeEeieTXwe1kdwiL",
  "key26": "591HACJcWMXaV429upMHpEt5Nzp9LRAPKpF5wF6GuGCeZwDYLCCh6GstHFTJs8TECXVk22UukDNAUwZSYsL6LcZt",
  "key27": "3A4JDt51uqGGoWnppPGAWrh6oixXCpH7YUguHiPzTSyTBPtAxEAY76gKJdNEAy8ss8xos3yvE9dhWjpZ5pYKYbHK",
  "key28": "33SzkYvntxbu5EhJ9pN3Mhq2ANXmCyeUo4c6bEHafba5WwkCyu3Lh5U1ztuF5DfffLgQjfYkcaw7j4xkKxH1W159",
  "key29": "4usi1DX6heeTH3UtNSTmp3XH5mrRjNskUh5DMndDSALZgY91siWrWRA3f9nwCHqgyJ9zmBqF9Qjw1dfp1LErhiog",
  "key30": "Hu5vks8ZPnRAjZXTQBBdseCUVnAaUsc5aQqPRaqHpXzuUPTCBYyhTuf9K3SkZmqxQjQm2ck5Ldw4wapcE1Vhzow",
  "key31": "2YjBc6Gx2i2nxpmJotX5aqFrGin7G4UxexosCaKc9UxsqyNKW2Nmppk4Rmeunp41bZn4the9uVYTr84smBrzHrSD",
  "key32": "3YyAjgkfmaVCx4BVv9S4Gh7Tig8P4bSGWcjeipfrPhsP63y1vwscZsyHwoyMyYrjnbo7aCjbi7LdKEx8gXapBG3W",
  "key33": "2gMZirDUdvYZKbk4MduxPTrGAPKqu4kE8GfAoQvxynBDhi7daZegyNtUWZMGChsoPhDLe2WVwmFQs7UToz6NdWXN",
  "key34": "2bED2RbRDkppaTUu6FFg4ik9wsT2wtXvL6qcgVXRC6LSqkw7JEvgECJgvfyGHvqYRAgQddiVECi5KZJckX4jZaNd",
  "key35": "2DmyY9agxMqiFAo6xDpSeEM5ztqhwcAy7FCDaSpNDWRB21LAX87ZffDxZjuUyfvejUoFHg1zNMWF513PF1hfR881",
  "key36": "3qCHgyS6GeNDvUxJZrZs1tATa6CAcN2crND7EyaqpgQfe17HcWbPZPqAMHiryo1yfP5KFJ2CdMXyRFtctWgfzBhh",
  "key37": "2i3DQCKayTPUewzpELgqM2YXwKPGHsvsk3MoVJNn1GDXuBEByYKpKVNd7osuYiaQrKFSpUi9BAbvUMZBCNfxwKxJ",
  "key38": "V9yXRrF7ZSbyqgHBgbHpqPHEVyM4kqPnSa9AaKgFwr5gswLekgncWN3RjbUUdDa4UGRaxYYyRbX6QmgDhQDBasj",
  "key39": "3owoGsciBAaAhoU4BcV2gZrSBbfEfXsWa1JBmCphyWvjy9mrAqNrLgiR5rNLdCbaia7sUt5iQWARzkzdxa7c8Yen",
  "key40": "3EGgS8DwDQyA3ZYJcocbEAioEaysjV9TZATxx3qA6BwhpAWpRH1di1b6M9yBKvz918SJNka2bJbmG5wMHegKZA5w",
  "key41": "BHGUBJp9N4pMQPGzjYT1J9L4mvQMUXcEgmuKnkzmsGd6rJgqBkhLgi5Q97MXsCiBDvNGjAkXYiTdfk4XfyhCJDi",
  "key42": "3sJnnUmmfafrX25DPZet7Xopy9HSzxJGnTFpkes2Ayi5Lmawng4GUsYTcQjA9hRjyU83dE2pSPFQapRffd7FuZL4",
  "key43": "3z3oZcMY5EfjX6W9ujLF7noMKsuVx75ATaFXmwHEDz6PiFMAPhQ7Y31G4rXMWncsEPtm3idPmJ2LAWXUzn6MrCGM",
  "key44": "2v8oXpxhjEEY7tgkKAh8zUWzaLtdeugER8XJ9uJaYNsMCy7NA4A7W8zb6QBDmJZK7xB6FfhrxJQ3mnSPuVEHVj9b",
  "key45": "4XaYWznnziK8PuAAKAt4jZ1M9TroNnwjgh5RKc1aiCgkjYmTMELsQhuh3A97dAib1TbsvhWfw5wjvM6o5g2SMmgC",
  "key46": "5QV94qjUhpjvadLwm7Rd26JytuE9XqohQbAwoZS4JiRNYfZLzx8aZwG8577eeDtQ6SH6LNR2XF6kpNxZHo84zVgK",
  "key47": "42coX5PTWoXKcau7ZBnGwwUBGnzukGdD2Yh31LMMgNPih2zjsd8Cyn9Z6QHHedkF3A6LrUYH2a93PtZSLs4Fd8H4"
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
