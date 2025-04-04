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
    "33MicXEs9YTQAtnJ8up8Xt5Rxah13PNvyzuzQKTKDZA76w9LKBU5Q88qiEKmZxxdzKwUW2SphgdD3fRLMwvjQipj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xQiLaSs3jnCiwvQqc7qtbg625qQYwmrby8KRAHqPfCJKUJEnjYrnnmEfgqXQ4n6Aw8vcJDt4sqDWVDH9jfs4Hnc",
  "key1": "4xETVQ7ywA7nyQAxir2Zbpcki68S89hhVbWQKM2RvK3vNWcL1pjcJr36riHLvQVqiRvCMgEZ7yew7r1iLqbPuNK7",
  "key2": "7KFhp5oBBEyrJEtbMepzfQCJ7G5YY5CXk8WaCCM1bZvzyZX8uSRaZVS7CLiiTYBnd8GYDgB9fJD8tXTFwHi1efu",
  "key3": "4fR7UMyJjV8H6z56dZ3yBtMMab1uvX5puz6iuKiR1TdCYKhyXmMCgXoRnzgtuQ2jiydFsGBhy5YcakSshAbJrjcZ",
  "key4": "2XzV2ahefouc4QHfP2ASuzW7kJm9kU2rQxeGE57rRK1i9oTU71GAAU49zF5XkhWHuNiX8BwxHc3vazWS86pcinE6",
  "key5": "2VabHsSuDwQgooGc7Tco9Fi9sBs66YuCecSrTNL9Xa4cWTBVtSvWd9jggHTLJsdFfxQMT2wwb8FwjXSkczgpoycT",
  "key6": "59b63syiL2EmWkLeGNHi7J4NzYuv8DdXe3VTQsnS73QNeWifJJW98nGvuhuZBTfy4mWxfi3j6665zNeNb9hcm5qi",
  "key7": "4L9h4DhLCbDnYQBYBYoEpoBcPLihqax4XYnrpmcxkDdNBfwJzWnnkYg5rnYL8nGWGrrUpKmQDFMPpfkQqNWYdyGL",
  "key8": "4HhrKuXSAcXw6BecZjp6v254HYuYsRAnSuC2ZwQqg3FvrEZ6Li4b7DQJA7H1ntNCTJRxb3m68gGdJ8rQk9J1bbff",
  "key9": "btzS1HAAkJnvcboCrgMfGJqgSGez99GTe7uJyPYzUVuoyYCefmFLjY4T9WbpLg6NXhXKavcuBHemcWWRcS8FFvD",
  "key10": "5uMH8r14pV1RYGgXHWTA1UNPYufdNcHYk61ytDr862J5Q8sxhgGvAiz9hqApBp3ySdRdBKTTc1dLB92FYa19PKfB",
  "key11": "61tu1kocJ7AMGwCmmuk2f6c68Th6QhaGbkLqU4yXEYF1YtMemEDZZmaKJkbpJJaVig4sJ1Ye2vSvYPGpgTGMwWGG",
  "key12": "62CCEkmHadtMzPf65LaH2DiuLmAS7bKngqi51MxCKa3KVA5CGJ3ETiKmrPP94Q13vY2gm4rmGxwDaB64VCboCwNn",
  "key13": "3cwW8iyfoueE2JPvVjsFbFHpqb2fWop3d7sbsfdJmZMfnTHn9dn8aSvjUc9ZX4cq4Cq7FPKXsVtBMZAyofYCkotX",
  "key14": "5zE6a6GKj8bDnYPBehyMmJ4H7RkUWKsnzBBexCdGMjvYSJ4zT5YpySVxkomNspeKfq4mYKQKo6ArqbQZJRiGvpeC",
  "key15": "3DPMY1F78M3Vf92ctRtCsQbUuvv7tkU4L8yZCsvx7vjqfiGLZdKVktGbbJwctfTm8cr8E6qu7avreXLicN6ssn6G",
  "key16": "5APij9dqBTvocpLW87n7x7JgqzPVeyomopMXkQHhNw37cPeYpMJaRU7yrqrtH7PAwESq12FJoVvqAPCUMSxkEJHe",
  "key17": "2mbqSgMsq6YDDiuEy1bTwtB9VYkzF6WJq681q4PDM1bqjtdSyd8PqH7soXA9ZFZhPDVCvsF2RjPzaRW5FdRVYmsY",
  "key18": "2oUaMVGEmbnMi2shGPRVuUQoRivgK6nP1yYa7CypRgYgM6Fzd3x3CgDKsehiNuABNpo2M7MdpTPJRy96LHqsi6MB",
  "key19": "ScHmjKS1qjqEGuaZiQC9iVr7nf4X7TzV6X3GcMurQrRDU2az9ASrAKPxRZj5J5iZGCS69ejNmS3L8tv1kKcGA5y",
  "key20": "5DyN88MjAA1yYYULVaaN9bxiusbjmXz5mmuDUZ2nE5iWiJjyeLgdQGsJQYnw82z6LnRyXMWFjC4TmpZPxr1mMHqc",
  "key21": "m3XQBgmbxNQteEho3zTpdoyW7fAPE9XDDB39bMiisrDXHw9aWNUBVh7fnkabLbCmfgzvMHQakRJvE1TMWKmjxSJ",
  "key22": "5ioZC5PZnFtpwFAuRKKtfNMeA7JHrEzRMAJfJF4aAgvnY7oEaHpJEcNmeB4hBR2E9ss4AQHXgqamua7z6gh5gnc1",
  "key23": "2Md2Tod6FgQ8NdQ8koibThHnk26t31fuJXewbvS8S1AuGLwXfAT4eXajC6DHaByNS2VeoAzM1mEwKbUmdEJRiYKV",
  "key24": "489vYdXZgdrih2gGYM9Yw1WQQqbGuACtzv7B8jxRM12TSwf88SnamBMk6DzQDJj2SHtWFfCaRQVnqbTsHtrGg7Jg",
  "key25": "4QZBh4GyLpgcp78XtAefdrF99WmoKvux7SH4F41BpoXTN2Mbycn6GuBaKGj8dfSaAr8mio4wWmFiP8Ez5e4FmnQs",
  "key26": "3X5LufVsKB2p9jP7vazu6K9aiJnzGrCcrEYQtPj4V9LeU3D7wDz38GvsFdpq7x34XjJY1TF1rmk3TYBbUSuAj7Rm",
  "key27": "3KEBs5nKM4E5CLqz3t26Eb5LBCb61JS85tVypKJtQQVq9RFJsWPXLxUKgdfjxL3TcqmuBsBtNPPWB2eBQ2tSyPcx",
  "key28": "2rFfuZJCPmXTGRq3Y2AhDNGvohCAM7Tvd4mLrZi8EudjNZVzLydqnT6ndnixsVhk7UrTKRD968PNgtbCe59HBjkv",
  "key29": "4YZDx3DM4TQSVGuSq3tMBQzNZxhaGzVL7L37c7cyVgfWk9WP33WQ4Mmj9qLPGsSvGraDNPGqCLJ9q3dndpZ24hsR"
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
