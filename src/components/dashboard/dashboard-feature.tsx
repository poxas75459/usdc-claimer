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
    "2vgjingPreJeMXyhEbNHr9XSehK5ETfudiVvTB9RaTo8pzt6YLS69MkENNaYK8b7GzxtGScik8UVdDCSFZpyFJZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64vzsPdvpQbqkFRXQdoJaJ5dcALHTYGqvk3JJnDP43iYYRjkW76oT8bRVNDoWEoU69CtWFkiSTz8nEmtQqVPuKtf",
  "key1": "oHXzVMCqHAzNxqkaixfHFh4dukabpdPT36JkB6cYfcv5qSRkS2gSVv1ywSqWxtFy1B1UENGdFc21R1jjyQtc1uu",
  "key2": "3dPSR9YdMrHCNRQpv5n2YjcUvNWtjPpuZ5PnQsqsD8cSJFUnY2fHrwuGbbJJRZNg6egFSUXqvsS99tccFhTziU9V",
  "key3": "5QWdiLztBzgfMfdPzPNFT4C7QBgACAyimW783xafW9FTmaYRx55hN8p2XBvpC5G7mwz5Qpg7w416BMKbaTnmB2PF",
  "key4": "4reEKzA1bvHvgoERCMrEJXZzpvRFDcr6pSbiASiczkQzyTaUx1eobfgrZsSvruFMKU43gQmXY3u9Dj97o2gk1zt1",
  "key5": "376jpXSjahmpgLDbh6LQVL7zkEdE2ytwyYZw5FbSbofADy1WADjUB7oBHNutjWjso7ZhK8DLUYfmLQuJJhnUXJRT",
  "key6": "4iwtTDChX6tuGcfK3EH6vQ7c5R7uiDpnCZCQPqXRKLxCdCgcWyFSpX6FGEEFRysrEb9Sx8dZZyAcU1Ga5QSqKvvz",
  "key7": "4u4vYTgUH1rJuauswp6arTRCCHGHnZkVcHHaQ1wtyBD5hZNNtfKeAkR3YpjaSZ373u6vUJGVWWBgo3nfLEJeL43p",
  "key8": "ZxQa8kap6A4YHfWqHXeyMTdvJ99RQ1qGhqMTh5DHTT81gJRCNfW1QZ1ZoGEvfrrVBSwts8dBgJiLv9g8iHpMXSK",
  "key9": "3qBM3Nju5jpRDz8yorbApkDdvcXUT4by3ytcdahsx1VzYpyU5eHsZVc36hE5518mNguyWs5Tz65dEwojSn2Jq1C4",
  "key10": "45xtAxLvDsZsUwQPxgkkeyQSwE45FMXmWsmQZEpaJvzdB974AFB6xzJb7YKjVweDBNzK95oiWDZEK8hZDgSc94Lq",
  "key11": "CCLNNcWj8XhqUBPoFXbXDsFHpiPW7Q4XbvSpui94KH81Ca5zcSUJY8D7ttQPRAQgzereSwjHsRuC9pPgh3Q6ojA",
  "key12": "3BrkkvHbJmu1MPvqJZtuwKN9A9fvBGttB58Jsd4YN6GPCZ2Aknaj1FgxjsbRa3oL5AfNdVDhrjq6Gr6casAYVTVD",
  "key13": "4rFraoiKf2BVtkHHssxSxw3gdPc92KkL32MUpwET8ywrEPmo9sSZKLJqAMmro4LRvXQV1gBHNqMKzstfk1oLQt7q",
  "key14": "4z1NQuNKFE56nEnsCEVbRag5u2tmJacCZS3TMb4ym3ch2hNkUoE9J7T3Z9cxuM7gyjk3M3nW5aCMxupEd1wUKUnf",
  "key15": "5xCCwuJPyLopedqPkiAc4e71JzsNKzZe3ErjRnjMvj2Kodr8KMqPYe8R9quYBfVCDtKDMh5TXWBJhdAVBruyyZy8",
  "key16": "5NYXPjPYHK4Ma8YHW7XkFWx9regtVkV7PMD4CBipSm5rr2P3fTYJ1EvHnFMpAbVbZet6fsZfAy8asUggagFPDkit",
  "key17": "3JTLhNix61aqRdxYssLDgbrFy6A7rDTnmM8Wa7ztvY4EFJyfzXJDb4WsEEPj2B1FtnEDyAo8HcmALcvf169tnYEg",
  "key18": "SN6AGv2UJdvQ9j12AnCMER6iZxcHpTaHMTu22sMyqDoCmPKTR2DZtZSFQ86GAWX9s8n13wZUQDHEw9UzFMhJh1K",
  "key19": "3iYXKYmCkXVJjwASCTxw3pxVmWzfguKPQj7uNNems2T7bnBpUos1ySrYz6vtj64YWqhn4zeVfcnymS4jMBAcAMHY",
  "key20": "5rHkSsBVYELZPHHeMyuNdwgdNHxmqUs8E9NggBuAmW775p5fuT7gFjtaXmbpA1ej4Wwi2ncj3uhMb2T9dWpwo96y",
  "key21": "4fNwMsXY2DLEYtT8edEXaUjB2a3vGsVk8XKYPp5C8ehcSBLEYic7hRKq7m4Xh6C4WBw6Ht5qKvV8y4dcn8HxJfF7",
  "key22": "25MSYb2gZmW4QGgNeCjPzwtni3oQySbwLrktAkwmh4B55qpF1t3KMGtTz6x287p5pddebPyUr9fzdtzBXHXcETtJ",
  "key23": "5nHKakZnU9yBaRovDKbs4VryQZP4sG7GPStAmttkkc4tVGvxMPtnvRZi1GHeeUnpT5EKQidCyihWk81CUgxSytwK",
  "key24": "5MibtBUdUrATpqK2BD2p2fqL8MX6Dpj7UpYUZCAgd93Qv2XWfFN6dT1DPKEoH6NT1RhLkRSBVfhAoFxe5eH41DHm",
  "key25": "8oQVUQg17wreY2EXSVQi1VKyJ3L31Mj5EJ6qaGAVeXMnkgCurBYj6cN6pUfMEXj4h3KUhqT5LZ4QFdjJJMhf9c4",
  "key26": "2GTRPdEjeAXLAe5wh4Gov4J8vABGHfNaLhZPMpQ5gCnDZxNTWmeo3ZN9FhNsWFbvNvqjBUmoNCxVJdorW72ac9Kk",
  "key27": "5HYs1CpQMmhgPYFLTPEePkg7tE9w16oxWmuNRQTEiYMpDb3x1Lv2EcbwjaRpLipNqmAGqQPaEDkkdQ1iaP3aF2xo"
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
