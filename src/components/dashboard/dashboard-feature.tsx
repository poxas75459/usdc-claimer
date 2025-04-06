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
    "2yUETrhMabuSe7Xpi6mRRLEpxmBai8mpZbDLtWQho8VDrEdtNpCpccSN95XtVYcZipHUGPA24ZeXcyceJLxVGQWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eTUgdnwWp3ELrgDCWaKwdGma2WZQ5xxdKjMagLeQVTkJPFtWDVWtM2Mi5uSiYpoDqAvDumxrd7TPkKukESb785z",
  "key1": "3z8nkV7mQ3VUaqq2egTX7z97tCkbMVRzwiZaLYA6sSHyDmdjHoPLWkFY1xmEitqQkpkYC3oCUv1Ds3spU4Uym2go",
  "key2": "3doGY1GX93EZanXaSYRUMTjhV37HewN5JQP3MyAaJHK3UX84fZdzTYTJ51m6qq5p72k6xQYqp3Tgo7z74bWSZtrf",
  "key3": "2WmZxVpLDrFZaa1Ww8p1gWaGDdwZ9Gs3rSPJjzY6tLMGBgFoxkMf9F2XBRfSz7otWEsjZ3gyRNpe8mcQYWrNsaUA",
  "key4": "M7uXucQHzA9sukHU86Aq2D7z2rWgBAL2EtBWFGRi1YHaRd8BiFsFrvSJmCxiDffiuc6suSm8MAQyEtT12MFEm9H",
  "key5": "4dBTZh1bp2iMi1tjn2zkvc17zYwTwyq5V7jUDoU2RGEfKkzRFc9woTM2VKLgs2SSeH9mCo3gwe56kB2HReTVVCTz",
  "key6": "2pysEfxBLd4fRJ74QYiowT3bUfsvBGqnoLM3qPEk9PiTMJkBLgJ95rF2dRq1w1UtPiogkQrbyTLTyPXQP93aWoFx",
  "key7": "3GX9Mp3NdTMbnst5GHiWyTqKKxkMv1HTJW82CoKT5wJsa2CRedPzsXiLk5hRYcWvjDE4WyfQxuhx8KapzYUjhXzD",
  "key8": "NujU6HnLbDRSUP7LJ5jV2BY5XRGCn85wvLngFUWrTXectz2QHNTSCMqh9VCN3kG3zxin3fK2eZRu23ujFWHjHEx",
  "key9": "3Evgpa6Dqf8k5UpL5i4fkhj8tu8cd5gQT6vfwYDp2HKrRoWYxbDdEKfJRyp6gtMZxb9Y3WyiU2LZwjo31bLPpUQx",
  "key10": "26M2CP595NYuPo5Woxy6XNmFr7wCPWUNWv9tmjWMqJgXTSFrvjxjte3ekSuFxgxBCP5chJgYbNHv6ESfTtjmwfDY",
  "key11": "4LLLBvAA1cWZuZf6uK5CUHCY93GXoEWBn4qCiu9MSUtUtg82zEkZNG6uHT2My7BbaubbbEBzNYPm4DdMXXD4SQWZ",
  "key12": "r2CSus6LQsaqpp8ZxUBj9kGm1m9b4U9iatnnhjcAmx6mrE27z9fnEQESXekd3UyDHRPk9zsQNTs5iiz9gk8CrB9",
  "key13": "5NYKC99Rn5j8wcbJrbD58ZSfwhW8Z9FTQD1wfYx2ug5iLdFP7AQYM59AbeoxzYWzJEttH5nmP866kV7XKV4W2YSf",
  "key14": "2QPiVpfpesxP98tXQjXypmYYAg6V8Lij14LugSbQBaMw5jNFpL39fkkyqWNp9tkmCmYpjmPPrVcAxvP7XbfvWNyk",
  "key15": "2QhFDEHgdXoeRJfLYF9eHwegqFFEoBrvFheJ6qJBPbTf7u9pBmcykhz3Eizv2atsC6CgyJvYda8C97LR427oFG4f",
  "key16": "nyUkngeBSQdy7FHBti5i7obR7GCmXTYoa1893dBg8yAM2hbsZKughjXZpaZYvt4EKSzoFGd2VtLxs1vRMwnE293",
  "key17": "2FDxJGDEQDET5XgWMC1wY9xqP1W4BB8jMwMwirkJhVR3P6tQVZJq4rcMgepyhEHVbN2xBYzFxSgu4jHeMjkt84aw",
  "key18": "3bwh5BNRn1EHdrgo5ziUQszzdhXBytCRNSEmqqH3vJDiPKUp4eSWgxSBCZ46in1HL8mKd584Nr5xyqqyZG8d2unu",
  "key19": "54ytNtAWdwvqGJ5qjzLpa2DWHg4hta5KVPeZFs949dyq7zZyyuFHwjnkwj8aju8RVfjMWjKbqeYKKTZRS8DpqU3F",
  "key20": "4PBYT9nVPUjwxdjXGawQutXPkQunBFTUfRgy9LCUCYfpJ4ybfXHZgswU4GAQzSX4G2btZhtuXYF1TZKgTgES5rtM",
  "key21": "3W8GnMxt9PXszAmHFhi46Eyn3PhntusiSnPxCQS8r5sahQnRfD4LehCWYNszV42zhk8QHW5yH2AxLx36nwARx4xg",
  "key22": "5KiQnE78RHs8WzwxBfHUjRtjajtzd7WWCUigMN4716s1YwSK8bWpFqPpnSvtZUsTZEARc5G6h1BAUQup6sLAB9fx",
  "key23": "utRXzokQSHXPtupk5pwRXjEfasF92Ht5EQKjhVGD74S142J888mcbDcMqgTFhwiX5CcLbv2DZgnmQ5dPg8AqHhj",
  "key24": "5dKGakQJKHmEiZCyGHJ8kpX4Novt9vuTCyYv2X5eLGA2krwMcRer4Q1LZWr2FtUczkkuHghbKKfvRkzHR3DDxMzv",
  "key25": "2p46UsqKgHwNDvSNz12tfqM5XdzefDWDfKp5hrhUaQA6799q1xKBtAGtc5gPMk79HokkNsSjz1TfpxjSA8fh3ZCm",
  "key26": "ifAAPC3rp8kRCMzRWGHJZsERFsRCe5kVFZJ9sqFoLM4NMwo8n7XanchZr2e5EAXgdLQEytUvHrguNNzMpoGEmhG"
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
