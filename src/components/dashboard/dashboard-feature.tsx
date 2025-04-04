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
    "4u7nD6odVsNswEgHKXm1hMzm92Gv4trjy4bSr9grhVkzQMfVMco3ZNscHdTcS37EiUN69wqkncMSuSVioCCH5VgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pUmqErpBDYZL2CvgZfeY8uCW1wuVE4XesfM2VFJK8QAAZVFNDWkcezVWomeUwwMLdHB7vbdAohgYKU159KsLwu9",
  "key1": "2tU4Gix3id45vQLTwrCvLcuq8Z7Eq8zCzJFNPUzytZ4qGVMyWcWSsAB2HYNA8LTNc685HbrK8GdPjkEWs6QvjsNz",
  "key2": "4gjStfuhJNWAT8iJ6VJR4DTDyY14fNsTFHxpmZWcyyhK9uNrm7zsBdqx6WYFak99osFc1rhDeqrY3NqPHXnajKsK",
  "key3": "3SjTQpge7Atg1XBSAkFxSvd3LqAboAHSRUCTH7uxYZsC4rNfrjvrFE9igbrnwYm7KBfeCQrguahFKF53HqAPXiM8",
  "key4": "3RJQ4r4ntvypwQT8Gs6yPi2RbeeCiaUECzoJwSUmkr7PFw18KgNJajyHu9M52JhJcZC1qiVSoJA8jmEF45ee1fWC",
  "key5": "2MqGTuH7i1yqDRJ4iChaCUYXdViFZMpLVk9YsNwqbfjdpn96MwUbeQiW58z7iv8amQh2jZycpnkjBryUVaP2ff6J",
  "key6": "4figUPtR7ZAuC1N6sYPbpVho6t3e2B4wFJqnNYW6vytbcBr3XUTFAEmPMSDvz4RJJHTwgzGYua49ahSLZWtTpEJH",
  "key7": "4SeLjfs6WnFqFMrB7d2tv2cSjLSPc51nFChCbuyF8uhzEZ4UYVGKjsP5yDprhdhCdc1czQfZ3nS1jfZa5sJmE96g",
  "key8": "4FmEEepreSVRL9hnGhtCBy7w6MuZm16TPDXSmKDdnf25UtBJLVm7DxMNhWUtx6aEt6mnJgbSWXxgMpLrcV5p7gFV",
  "key9": "5hUNgRjrXscUojpiVRTrmDJUeaK3bYE9dCfkwWpeNLa3CB5XSsmKUvfnd52rnQ561H6GhUXSina8y9QSTFK1S6fu",
  "key10": "3xvgMBig6EshjbZCwvjddvQJMYXkNXYEXf8gcbMqFwoCKD6bYpC1qYkj46hrpZphEB2hj2NWzjhU9GbCXyx9mXHu",
  "key11": "4P1N4N9EGd1vizi6jrBZVBKjAteRGn7CCoFtKFWxrMUp3wvcA5zvmNuUtUTw6tG7JrPNpJmjmxgCn8qzbyrpsYGp",
  "key12": "3Y7ujTLiFAxLZpDQiyYrbdPYXbPap2ojjMHHN1pBVdj6CMtZeDxkgHCvpBovcErTQvMSX2p9xWssFgZFAqiGfhnE",
  "key13": "fRx2Lptiap8xYB5VsF1s7mBA9bx5NiVXW1sRLXKeHbz9urvD2DHomrprdoj7xLKppkbSLntHzXZGMKaZ84qHQG6",
  "key14": "3wHGocQexWa9eTPd3QNzMxMjqHDM9UiygBTkGVYXDR8VCwC18dwfaQ2P2EosqFRkyCRrUkti6wSQoAGnS2ZNHTiU",
  "key15": "5Jw8tJvt1PHV5FSok6ZjCptgyahBnviv7gBZGf3L1Z95ktGgsuLEcUtLd9WjYMwooTpdZ8xCFQTYcpDwwkrnSWoj",
  "key16": "5qxKAnvdejfbnL47tez1KzAc2TgDWZHaH9SshhnjNmWEVXPbY72Eq8XWPMWh4ffgiP84MiXoiKrx2ydFuJvwVami",
  "key17": "24MKSpWs5FLdrHMSzV54QNoMxpMttXYX9Q3JmpfL5XnUz979bSuG7rSJWi8bgVXk7TkHbbZpiLdYM2c7U4dbgi6S",
  "key18": "5oeFGXyw4o97gyWu747vrFAhzzMgTWpV9XD9HJah1S9GfZfXybMu6FMQHPPpqYFyrgfRPgCS7ykH8Fh4TCSw3xQK",
  "key19": "55TWS7vwN3WdoKr2wg9GHHE5zicH1LKUB6ixaS3HBHCY8EaWhB5aGfTTWmXyt9m3iNdzujJg2gswEr3WdcWto9nk",
  "key20": "3HCFyQZx2S9GBqJp2vB1jxcgU5nNUF9QvjxwfpJbpdGr3SnSaGaLE6V18BksYKjo3BW1mqyyDneSBjpko3kj4Za8",
  "key21": "57eMJeo7Kzcs7WHhouohv621WED1JTAqnKCvztT1pzzRNdZ8abaT43fSMJeM4yAKVR816wxyGjFh9EKgFSqHqM6y",
  "key22": "3QLA7B2eP9gBy1suAqd3QZKMZWVQvdrgACc46nqr8N4tYF4So4bqtbUPdkRGwoVYSucRw7Jj8U4Befud1PxEHAei",
  "key23": "VrYUt4isH6wA9htpxLyK6n68XYNHEGuTMqRv75HjTXgfFVp1k3eB7zBoZ7thjkh7kbBrUmWXJnaCtnsh4QfBYmh",
  "key24": "3k847tgFgn9b2KqFP9p2ibWNrBAUXx4LkKgqRk9cvqKVsS22aXyXtDS7bDLT5L9nEtg5ZV9SZWCQRucASKDq3V2t",
  "key25": "4PHykkDmy6ZhBSyxp8A3tvSM5ojdfRMtrWQs24aJSUnzbTajtQqBT7hXDxzvx5YS56tQercSpb6Dsrq7rPmoX4En",
  "key26": "KvudtsWG9vhp4Ut7PvbiK2bshtL26b9gZuSWaXd94A1N9Ww9yQ4RaCBM37nFNUjESQ5aACxnnWttsL3mqUt96dr",
  "key27": "4UyjzMnBRwjmHvKMHJPVjGcafHX7tXnaxgA5nC3PXWypgcRpsDtf1ug7zs1K69npT4AKC7CEvjpnZHJToJtmh4DA",
  "key28": "48g5qpau59sE8zJGd2Vh1odAdVkyo9rTVZ7vvBPRsRKHQ26ab61zhhUMLv1eFva6cV9Qc7wuzm3oVqAyTgPovfFG",
  "key29": "39UPbUdijw99PQcibpXCVLz55AT5sE6AH2M1BY7CASethNRpSmE2orZtEWbZ7eifoa4GDMqP9c9sZ8PnQcDGsZf2",
  "key30": "4AhZyuP7XwDrRHATZHv3oe7ENG6eDK5j8sMCKRK2Ley4cd6o9CoJmXPb38tH7KYwSvkzwXPk9pAMHvD41XjpMwqS",
  "key31": "3zyh9iriCzFMkJSaAAVTrWiJDxGwEPrGuL5Gir42jkZPaWzLy9b11JyKiL9iGq7qFVXqXxsgM9PSXpqvHPzHL7nh",
  "key32": "2ZRTmVVqrj447pzfWtNFgBKL4Uj3qjj7kU521yotiTyjMTWWdZCM4tMMsADXCRdMYP52PXy1e1tb1qdpcZbHy3Ug",
  "key33": "2G34Ft5Ys5ZqhQAk2fWUDRW6m2BrJAD8DF65hr2CgjHqUerj6aSGuGEsQxqahPMNJZiH4kv5fo8xHbUv5t9x4kMv"
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
