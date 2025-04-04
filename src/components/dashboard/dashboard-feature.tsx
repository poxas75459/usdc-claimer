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
    "231cNmRLxSLZPCqEdR2Ud1iLGGHJCmQgG44xpdkNDaQDKNSq6t6fc1HUjyQJPCF9tohBpwmfa5cTPp9UxrXFsZyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NASvVREPxgYn2WD2sCNTpkH4eG6c6hGk2YncXEKiBvziEJqGc4cGEekjPuzVpWbe1Js912ZpFTNJpWPy6ckvbxK",
  "key1": "4nJQTg7uL8o8oWvKBjD1n2G6tfSJUV4yTPQZnACwZ22cXWFTWenSaygGHo5B4pL688vYvpLtdVgX8McFzQcAiXQR",
  "key2": "4pGMHEN5Hgw5qyi1Vn44Sf3bHkMND4ViKPjKKSakw2y6j6xQjtBEwPUm7fgvtwZ9VXAxS26pdj9xJ8KRCWNo7xSw",
  "key3": "4KyUYtpHkxaHS59aVn8tw2F81EgddbX4xV2mqxaZYDXTHF8BLHZVSWBZ2o9VPatapoqhqqSQMCsdMBzXQ3BtBtBc",
  "key4": "BJHZY3A26no2ADtharRR6ej8qUG8CtUbVJnWLEnkzp6FWvJEG81u1NLEeRfS1hbErNxnNR4cVm5Fu6YBmMnNu6u",
  "key5": "4UQDB7afyjh8jZsZ548rJMDCsdwL2AvZZntw4rcDmc1XV5G7ErqcUp6fuFQUgTJ73215fN5acNVmtqZWoeFR2DYo",
  "key6": "5GzHnzbYSn9hvDE8rapKsSj2HXPg63e57SPByUAv8tRYgEriNMqEKfab5y7DpyeXqUKnsr6myKhXo24UFeELGhSx",
  "key7": "LqzcVJdpw2wEpya3CthF1y8s9BK3ZT4JBwysGRN8B13QNw3FU9EjsDkLk35zXCvk8ZeTUHazKn4MnfJTL6uz1LQ",
  "key8": "e2tYihbDvkGFRoNF6UdWsA1ZSFrL3vBGzEU7LpVqwVSYesxhh3qySAdCJA7gmAQijzookP5zJ3ELULMhHWVKEhA",
  "key9": "4HqfieBbigJ1phc862e2uyWzJBJkTWdRmqFNseTsLUwKhojQJK3G4BJWiY7LwcffGzTfyuQihbCUR9d8tJJBkH7d",
  "key10": "4C5JivMkcf7vNtTFi3kCYP3dfJg7JX4hstcCJ1XJARWhUP9QSqa1VtqjStdtqWRdzdmob5sN6popPQkfQ9NQ1zqH",
  "key11": "2D761291Dhg36qrAqUeC7uzdT4XhSf2q5RiHfYoyjc6wK3R8Py3ekbzVFEn2QmxuTZGhoxRdiaSyc1CUG4NHSqXp",
  "key12": "3rohxeKo3wy1eXqR3RTF519ozuVb2EofN1XfFjHoKpBse1saN2mC2GbARWupCheYB9Viz74GGbqTdjS6T46XxGXi",
  "key13": "5mjNCyiixT9epMmcrSFv1P36p2iXpwsDSbVkHfoYvWzTKWJsAUyrLCWVSMoYb4tKYPQzKiL8BkbNLRVcXhJGZ6D5",
  "key14": "3HuZau9q4FVQEgEGEY9e9efL6s1Rt9cQ9Amm5iYiZNJvsz5Mbg9fRKkAmHNAvLUfN4Jv4KZ27bBiKgxy198y1qX9",
  "key15": "2Vgdj6GZxAFch7fsw5mMPbyhv5PnvSVEQr65VLY6GjDNCkUf6MGbvLrLWLXoVNNgS7Z1Pfussm5WF6rHh5ZnQbod",
  "key16": "3JPp4tHxuDo1vpk3Py23d57c365DorgtJvtwv8avA3RFdekiBU8j7ki8mciQVaWWESemmQohx8s3HaqtkrQK8fFB",
  "key17": "59ykRbd7q19YRFMg5C1YXDctcA7LxmhLjqNezj9wkb2w5QVsybB3dup19QMsP54r2FGbiCyij3HrRq5yJyNgJ9Pi",
  "key18": "3um4t31zbb3t984JcWeufAE3FuPZ3KLvEoQjNDtTDR8Lv2dNwPrtMfFpSKnJvhKPKJnCTcJESDDBjwGm57CZLaTY",
  "key19": "3713WHe1RV8FxH7xJWk1DFQMRTggMJALzZUtaooAmDSZTCt8jMN9RmjC8up3ku6MrkgZxtWiDiwSneB6C41iiZUr",
  "key20": "5KPKZb6gXbGFBFW3dqYJ9MP6H1TQmtBJyd2cg2GDts5QZMp8YZkWTowKY2qNfKET3A2LjFK636SdXaUVTyt1G56u",
  "key21": "iC5zWrR8A7MzKFMtmD3aQAyxBqod54LRk3zAj2cpK3jKi8Fod4FjxJMZomM1MFoD9c8aVuHGvRwGrcaDc7cdhnM",
  "key22": "64yQuieDnBAT91W5KBiRYqDrTGgHrctWW772C4vyvdqctgsBWVZYrWdKfazrvd3YBVtbmFhMEVZtKPkqeo7UsfvU",
  "key23": "3n3NYivcm4BKfMyy6ZXmDjGm7rM2494pRhFw4k6Ag6Ukub7pf9ogq3v7gHb25ZKQkx4Jv99DbrndRAbF32Y5gXbd",
  "key24": "5ZjSVXNMp1KjrnyJ6Th8qy2tqPWTkX24YxW9ois75APYGTHnjjHtsgUZLSiMLMTLKSDD28nDF3EvRE1nPzJ6pRXu",
  "key25": "2TdCU4zZxgL6vVrFrxpsSQpL41nsa3dPpBDJKfxszvdGrEVQguAy4mv5yAvjgDH9324xCcbuBv6vpnCcoSt1oWCu"
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
