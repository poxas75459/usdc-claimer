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
    "3B7zr1PeiH1HgqStpivky6FnSB3VfHbiNp9afooca2whvMFrezJCodxPzU98AdXpDYAxwr3RFn3fh7eKoUPNtk1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tGkpF69HEZ4PjmK1AdkuCQwiyWCuYPQm8M52pYznZFSisuKeYo72DbixGkRm4ofb3UNpSX5L9jzZSC1FTPNTVeN",
  "key1": "2GR545EGXgYt6gtkc6AMuNGhd1WvW9jv6m8pSnt5cQv9FmH7izNCDWuBv4s5jG2gZ9rHenWLxsiPubFrm48icoeu",
  "key2": "LBSeBDjK9a2WTTkCwEjr5ba9rVv33QoJ4SKM39ewTauyMykye2KoJCjbPBufHWYwyZLsucytfHbncys9Y7DqdAG",
  "key3": "59LjmyjRv5LXGifXLh8yUu4ojscwiqJApdyTcENfMpcwatJ3GhBNdgoe7chPE9XCvwmLfAvefr7enR3JHak1r9Dq",
  "key4": "EE7N5nbDHPwBJYW6dUyAqDa2p7gbzNJWZ1aDvwAyjJumKCf4Yvx3SaKzE1NJVXrigmTs72h6E2FyX5TxsAfWkjk",
  "key5": "3sbaFbwcqjsrb2Jii9kqxUMQTpHu5sG6L3THLjJDJtp8n2tCrfukUMQ5qi2GUaLy5UTAKnMFJcnJmrvtrfC5psLV",
  "key6": "4rAnRQKJoP2BHbGhfc3hGHNFwyKhRGDSNwPy2gFQo8mvwUDKhN4HXymfKSbzXn38E6STSCMR1yWt7XUWnmxpqBht",
  "key7": "3u9k8sA1wZmiGRBffsuYyWDSfDGa3eCsxqnAiPHK2ebftW9Ev8dnaiFutXXB8MBAJZevjZd7KPPqLCoxrzkXrjk4",
  "key8": "5bFGyGWW15nqAruL6DK1YwRRVVyrq4Uu8q1Y42YBHiqtysXAVLb5gZ91jYm6nWXGBYcSpHU8iQRaKY2aTkd8wV4X",
  "key9": "2dX3qJU1rkg4CEqMB7phqjHxNfSRPFMqEZL1fYkFPfcxkCpV9nvG1obfQsMXpjy2cLAWA9SjfwbG4Uz2FaQt1khU",
  "key10": "2NzcNtbBEEqbY5UFehLtuS2Y3whjADNjc9BidkFVqjEPCyXdpvefjhEDdHCsH1BmcuP6QZmh8u4HeewvSk4vj4K",
  "key11": "3CHxgN9F6s82ibqgXTCtmF3xJfRhX184AvZFPNXBybD13EoHndsYtVs97zLJcm47VLSUzomWwrYitXBfnZwkkR7P",
  "key12": "3FKaXuyjceJxBSDUWkxYdQF1wLp8zFfQgErhd1s8hx6QvTZAxV21PgmcXXJnDisduW2nv2MohxNWgf1U7TwvHiKV",
  "key13": "5dPRrnjUiQ3JpWHbyx4bpUTwHAQEg68PbAvfvV8r8bbciaEhcavWHASz6BwphCewixRzHsQ3ci5k4UvrfBpbHLHw",
  "key14": "L3eWaAqezkviGHeKdoJW9EtLdrFeJBBwp2MeNRowZjSqztFDZCDbG2s2LVJDwcRXSju6RieZDhKHpSPSbzdcDDa",
  "key15": "4WCveRj3ArqS63jhmXuHj7dMAqVrQSoocYtzHEFSDBuc5vT68UKA9MqwQHCggMLesoBnLCayViwvbCJpCHw5j7x6",
  "key16": "25J3T7z1Aw8y3iz2weta6ZQDP3v8Me9b9XS9ncJ486rNsjh5dLqbkTjphBpMYvwv6e3ZEWpVmRc2vut6TrkiLqDU",
  "key17": "2e3m1tndwBXeAQHVDH5DoQcwLxyxFJNgEeW6HCQxJCSrPHaAGYUqBk94ANmXGz12wqHVK4ufYxAeMeRJJftTrmW",
  "key18": "2et7ayWQrWrRy57u8WMu2AQtTuDG37HWPJg35uEUxVSpUJQMoUY7f7sVTBq3dNbqcAvwzgpZQzCycrSvm69ei16s",
  "key19": "51Lp33Hf79n3a4dpQwhY5xuhbh8sNBciPdA6oNqqHfUJYwn7E5TD4usYDtp8tZPgH2ytYYSj7gxChiarEDKDWXti",
  "key20": "5sepANdjCrXGu4NL3MMh4vFVroJ3y7Unpm6EHfjfkTXydFuU7X7u6QGpwbaNjTgUndAYoEtFpogVDcChCkkRaKRG",
  "key21": "2mhbERsph1a4LFTJNhJcWHvtsMq11k193UiRubASjJhrZ8qB4F5Xuge6amGqY97nCxaRXTxZeUA4Ytmz7D9bmZru",
  "key22": "2i6SojEuYfMgAqhiBy7qwrS1dZppC4W1KenvUM9bLtfUD25N55Js1gge7So5HX2NZmYK6DcvGaHEFc4RCKVvdBiS",
  "key23": "61oHtR8vED17ZeoqE5Reegb8UUmZofyBHAUz4EgNaiiCmg7Mhnk3dLBer88RPeZ1YEj5BZHHgzmRdd1apnfvWCWp",
  "key24": "3Dsq4teSWpAKwZV2hTpyF1rvkAVTUMs7hnCkyhHj2cjmMPBF8tZS7qNXi2eJGpy5MpaU3NWxPpBD31G9bworihN3"
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
