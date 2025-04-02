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
    "5RKoT6QPtsK2zMpDTErBJ3TLcKB7zVPPUb6M9k8upAFqsQtwPyopHX24WkKh7Cdmfux5XThWz1jW5333JX6dbASk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51UqzBjm4QPjGAQtBc1bPz1VXbfKXbXwBG1qgK2iCpmsa2mcXvLGrgggCm8Nik7vKSwqr72bveg1yKydz6uAav8d",
  "key1": "2zerGejg1s71oeuEM6wPfTTFp6jZmukuJm44MQPDeSCuiz1jQ1bvketzoHDrDRxhiY6YPCSgVSDuEC86KXK469FV",
  "key2": "awYeYZng4WgMzpTCSmQDHrDKNSfnuyr4odP8AF5Uou6DC39KAfBz3BBbLUK45458jAauAkL6snwqEtsJm39RHNj",
  "key3": "ERQgy2jSXtbi2YQfDmJ2JiwF7pY6uaBu3NWYTQfoYJfSyT4nPwF3sz7c9p6bVSnPKjXT3dL8Vi2War4rjaiWPDR",
  "key4": "5PcsBYziwckBe5LF5QdxJDRiqXeNbVnSWQSEAE7kBeLd8mVS7mArpYZR8Z2qLmrFUaQq1eWvqnG5ejvvLTiHk2rX",
  "key5": "3h4B4EgMj8HGYWa9Cvmz9uxjdWscb1dwaUS3x4W2AnJj1BcTdAT6fmjEAegBd8JisjY34UHNsJuQRFzij3PMXCPL",
  "key6": "4vxYXVq72bsmeucL11oMSgCRwwxNco9UvdbhLQDcLtGFJTuDfj72QFSAzfmMpf3mE7zPVqwNRFQMazdozYmg42Kr",
  "key7": "3Sn5qFm5MFU1BnCBPR6pxwbFtnJfpEafJtHHmCUAUHWq4TFRQnQxTAe1uJ5xGJ5Fit8zYDwAmz1VoGHyn68Czgc7",
  "key8": "467SrQ2hmHspg9SqYNUHzxBMGmgDdKSSZewDp2cjJ4dbZuSbWrYAQTG81iCWJsURWHWtHTXc9XbdyYwUhKfDrXND",
  "key9": "47deB6AXsW2XftVysx2uX7FxC1DTdHzXUMdT4VNWpR4wUjdmMbbSTSVGYesTQrM2UmrSRcEJdCRG9NjXhbhiDjwV",
  "key10": "5BNrjUC2BY39Hs33CDRwLBqyqwcU6BAMsSCRHraWtBJpHhyAzQtokLu8ciG6VgrzQMidhw5K6APqYnZc4hkz8n8Y",
  "key11": "5Qhf2w5d9uSkr4feXLA6WvBMWq36y1AGvPSx1phrcom8DrP7bqSQvxyAqmXaj3GACdsKvM2vkX5Vce4LfXTL5xC7",
  "key12": "2vmo56c9zeYNCiQMYAT36Kc5i7s3X5BdSCwJFxMa694tEKhMQc9Aq6Zqh68E8UvWPTEZCC1v2YCfzvVJk9t6ejbe",
  "key13": "25V4cVvnZfHXWTVBsAhvqqDLwGPm2Nyu2aMhgBqApcToiamh5ut6KwAVRvfzEFzXpUN3MnshptWp5iLPSdZQJ7di",
  "key14": "5czWE2Q3UTYKHczrdnuNMWSjwpheRP4QcbXMxfhcCenhNmAKYpqstFBvqQPH6gwXQvCicY5zWoEbZs96xpCyDeRs",
  "key15": "4eNdXx1LQQRjX2kbW5B1Xg24dzQkUGjhQk2GkLNVUchbbBLysKarR18APbVHG4jgm9SfqSNUCfjkbnJKiu581u9N",
  "key16": "ZgsmWuz17ABz1grTwzYtqHEacRc8aoaRcoENmVpWvfpnNDZz22jXhitkVibDoSCixwZUsBQ7vX1BAA73JMxpjd4",
  "key17": "372krYJVxy6S8zWCYNZb5iEruy4Bh2t7uJmd6t4Z676v8KCz9e8T5SyB4mL1MyU2cSLWqM8iBrpvDPk64nJFsYkT",
  "key18": "5UJBqXCoDUaoAuHzPxS5Lw4eC57t5oyvMP6ydW2xQmNUqd6npp7TtXYu7HS41KJMQAtQbU2UqCH7D4ZK6bsVQj4k",
  "key19": "2zQahXTNTVQDi3xYfjnPJhxYiChjVwXou99PwoKjGfLCBgjaBwPohFYCrwVyUWVGG5APeCAD1b44muz5UXqskfpm",
  "key20": "3z1Tri2w1mEq5ByazfmRwn2arzqpiuTa78SWoxEzbQdgrKkLZeFrpZPMKSn2tnS3e7vdcVbNm1VBD8N1GuH1v1yB",
  "key21": "vrfmWUi3ggBWB24Rue1gx87oCCji2SNtefcKacAMK3dddEnPvgwcmnieipLgiWXJHcG79ioTL8Yupx38qu4Maxv",
  "key22": "3WrwwytCY4i4D1nXeuojob8cn4DDCUZZgEh2VuF8C1j7rcgWQqUB3XzafyX4YRp2RFCdiraPg938JMRVdzKdY5V1",
  "key23": "53yPxTTVoRfQZrFUw4yn8fnGTnCDZKoFGpWkf6kcm43humyS1AY9EAbBUBYxf1hVcdCohsSAqZw5zzBQNDaCesP1",
  "key24": "5SfnBPn984AS7i9U71rpiDPXyC7epWLBSCmsrFzg43C3ionsNhuexuDMKioXutz3utPTotQZHWWC52fd19VTsYmo"
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
