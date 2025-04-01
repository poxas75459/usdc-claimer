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
    "63TJ6VqYpk2CfAAvecas5fMUUgW3az2PskfKYkSDcuY52YkaTQ1XfpWPBnZAojcQwaM9g4GbdzWGozCx9sQDvNRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wxajhY3CUHbFkJ31RCPJhcvLv9QKnhWrfo88JYVxAmGGm7yLbHK9yezkhKVx6qhnJn92peZ3wi12Uw3uu7tsfer",
  "key1": "3SwKe38rr7m3BPzMn6Wk3E7vVLLArygxsEhsghfMpdkPwa2Y5kVzrjjU4v4uEAirq7qktijKyB62RyBRK7KqSyk7",
  "key2": "2sgSAG1mHrKiaaybnxNAV4vqqUcmShxuFaFUVpaPANivJubKsusxrf1rNPVZ6yhB6NNwgM46ptWSeN7g8hSHZ4Yb",
  "key3": "26dFJfm7nhktEXqYWXfKsM2JFLmqvYAQuEqVkWLBFh4KDTXRxwD9FjGb9byQ8uAqNRQeR4JCn8tQVyfem3ppzZUm",
  "key4": "izw9pVA3wYwiSPHmx6p6z4JXxFAM1MYHBL8ozX66bEQvAVxCEW16CTCzNmhDyF8ZsXRaSLFzEaaMpjUbkr1inTf",
  "key5": "2tnD6qiDk65wkHCnFBSYvkytAzF9hisg3LTiEpCyxMkgMCP4GwEpKb2jXJAyqmbAhTEi6bKkVDdB5EMRuQiXCDMf",
  "key6": "4gHhKhbQ4JsP3LsSayvXcwxJe5GWZDTCtsx8xvhGJ7AaZVTcbk2ubS2bwNajLzGihRW1hz535pzgotvmWmuqUwJX",
  "key7": "2meSf4mPk9D2zFNpouDoyUbi2NmZt6fzzBRUMg5pcte6dvswYEcEKGUkQyMf4QxVeQnnBcgxvogLtX2rbDHreF4z",
  "key8": "34t63qFdzAK5JEub4URUyks8jj1Efe2mUjchQBEjiA7M2EpbnXNqNSArreMRFBffowSdfuoUSyRgwYNQsWVpWE2o",
  "key9": "3CVSzQTUvNiKRqrR2UcThz42aJpXqaMxDornPVRi1WuGS5EEwhv3fzBe8erqB5myuDf76qbtoTo9q2EceBvF35sf",
  "key10": "nBKFTN4fBRE1gKNahKgrf8eFj8vAdaPmEpzYxgtyigPdyjfsdsaaHD1Nz26YNj93LAqDURBMFrdAgBaGPP8Ka2A",
  "key11": "45CcnnyRnvhUSJ7bCVstdr3oyJFHUzFu5wdQFtmEtaBnxxf2jTEg4MqPpBzihJCTSUaeugdJwaoTACjynfRzNenG",
  "key12": "45XDSzzvr1dHN4hJLydjGiCfKemTMkPsbNhuMi3vzpDkwwDtJJjmF8VZDRMSogz6e9EQjEiRjFdnvLSC4GWYuefr",
  "key13": "43vzzkqGm6ufH2kpVKvbFFYWnjJun98igqAAv4e6sEmCDZxsbCQaW6WVtxesNVm1Xi4Tdsfm9iKHD1h9k5Hv87L",
  "key14": "CS5jdab8w6iE7nnTggMf5jZn8gQH2awge2LpNeeFTu2VXyt3uvAKh292ga2oEyZstGrVArjmgSywJ6quDg4NV3y",
  "key15": "2GN9frMFQJRbsEtpYQQYUFb5zLyQDrQ6shZaRTbrgApfyfMNMrWM5ss9An4Wvr6qTr2pq8WFp1CvWdBKqvui4jb8",
  "key16": "3Z1LhuunKtPiTdgrqcSnazC5mJxY4Ps3WoPfgnqrDpNXLa3fs51ccnBUkHAJzvFZdTrjjskDcohabNPPAFS6JR1t",
  "key17": "xK3AbkrAQBGdrn2i95UqXQG72fGTdydWYNU21yADvB5QUBVmkBiuYnKYUPbduvec3fsofYBcitawVimxtZUiMyt",
  "key18": "5GrEu7wbwU6Fu1ot5cJBAd91MsNurhc2ThQ3tKtGZckv1PYq3TnWTDGjJoSYf2NBpd9C54m5GFUxLoscK4Ju11PG",
  "key19": "5inDXUnCYrt9Ueih7irkth6xLKSDQCGSRmzSu5UQqxp84RCH5YigkbWUeezUUdxJvZtMazouipmh82aRfJNV126Z",
  "key20": "3yJKsXyxY6Hmb7g1qaC7ftcUJ4bx7aJDp26AuVWydRUABajdcbxSuHtbJ6qoGLfpkhAbbgYM5Kn83Ddswdw2gvQS",
  "key21": "2H8N96qtarK9aTdexkPqhniqeyQGFENC3QbfjEkdE8m4qHcRGhUB6jTmot6UKNM6MasZkp3AJkxCZfWHQ3vGcfed",
  "key22": "23iSr8auUWMmBPWMENrsrBZfwDYi3xdHfsuiWsnfG7PB1vryeRi3gFg2AcBn1cpbtwvSuBCTcoBvt3GU2ozDgChR",
  "key23": "5g3JhQU1GDgFzi8PxDScZw5x8urjTaxjJ1SCC1f5zHZHHi1HD2L1Hm9VGzKXmVFZcTJgxKCcXvEgGtBKJB29FKeS",
  "key24": "3uzRgqsFLY5fA4gXwwswRMbCPrFUr1jnNutkFpPfifkrv9mxyDpU38x1AynHZHaRXMSuKJAtNzBWMQH5rz7FJjCE",
  "key25": "21BmmsL3QFej5uMwjwBshB1AEC9qq25eiWPpwxnbzaVHewZafn4DSDihkcaK7GSsU6k9cFLEHKdUSgJWzBfF4AXP",
  "key26": "2yVtrSb4UtXt4fmmKuXFa72ZSuLvuCBVfQT6XDSBM9BtGBnA2oe82p9g7JwdxpsmW1K9WoXJptXu3dSMTPEsvkUR",
  "key27": "QiLKJu1sZuyuKnE27DvimbWQehTM7sEPpdTkv4gtUThS8WJyaEpb3RTTtFd5GmmS8TzYpPJFHnyngUvNbowPKEw",
  "key28": "4rdvPpLVFSZAEWMN8uj99XksJ9KyUE9HhWer8vTgeSTLcQLqHpg1rPk76uqcAsEGGhZwWx8sjYCpSermJsqaTfBP"
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
