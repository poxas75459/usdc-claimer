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
    "2oxuAo3i7VRAX4YHLr143kgXhezBUKEca1CA8uUeJw7DwNtmJhMNCx7T1PNTJcCXmrSajSxhDiGe6zznevruV7nJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T18UAxBDoJvyRf85Re6pGKpgchmD2xExu7vcDUqBmpYSb3aVjxFtzQnkNt6Ey9ChQAvNC961fJJKgJ6pk4tm5UN",
  "key1": "4RZbF5U8zx1zhfixx1frxNyKKxSHAvEA4ne7XfhBtxTHBKCKUZ51FeRR9HCgkArDLQBxEESEWfHYUiZKbkfnqSi9",
  "key2": "2uGed33BM8aGkwb9neNrd4hXbqoH4atSgsjaJxUVrgaBBzo6qQid9m7ssDyAkuJy1HHRvyhN3B4KWjLRmCFiYzVG",
  "key3": "54f68T27LmnQLvri7EMe4p6UkwurvC2kkHrZUhunJEWD7t6UKQyRbcfnrUeZ8tc2gJeH8gChLuG4BwVu5qFMqiBK",
  "key4": "4gB972RzsRo5JdF17HLJ1udaxJctfBAGkiVbCE8SB517FahapFmnJfxRStiU9TPRArNHbZnGaufgnFJDx2unpMCQ",
  "key5": "3x4EefmSpKph7nbTvWyFcXVwxMzHRtSP3UXp9YotRaxF7R9CAF52kMqY6VfaRQRzsQ2f57UTL6cSn5Lth9w83KQX",
  "key6": "5hEwB3cQExKvhRKGriShbjMa4dnysT7F5CDKdU7bWiLC3XHy9CsnVEsKxeeRu7uXCua4sgmRdpcV1T7xynFrFpN2",
  "key7": "3gU6eoPd5kvQc2WDsGVBJ6niocqCfTLGrEo9evWj5L2LvRwZc1VJv1rqx9gLt1S6rd337e65nnGNrb9pMekSZVNy",
  "key8": "5mK6jUmRbc9an7gyXmjFTv2dseLMKcZtyWB2jfwvDzb9Ykt9w7PHHAHGLxePDf6xkCZgUPZ9uaVW5aM7PdYbVTWT",
  "key9": "3HrtE4UdPqEXfXTUYbVLkfQVRYWx9x6Y5qF4g4uv8oy4YLx46payEe6kc1g9H4H4VpRZQfpnLfwioC123JSVDwDV",
  "key10": "5Rnjb19Ss3v86z56kPscD5EJN9tCodJwLiB4tNXE2NKin5ASvuS8kNxRsZVkp3PRjSJJBB5V3zrhdTrRMDG3q4kt",
  "key11": "2DCUB1uREs8EK5EuTksUT7stSJe1v6nnJz8T3jWPmnWL2oREoxHEqCtzHq7EDbhGh1erk1eKPxRSy79KYmzbm79c",
  "key12": "5rfBWahLbQuHhcGAnUxbrhmZN17fqWUwECFDFrwsSyocVymFhZWS1TzU9hG7ynBTgE6ePhN65uC2huxvb81EXfyo",
  "key13": "2mUCVR6Lbsf9t8chRT2GneUe2zWwJ1aseuJeVAVepW9juv5VAksR1GcN38AvdEzSoNnhKHuKYmH5xczWbgyDJ7Ph",
  "key14": "4M4DMsVnE2HXy4d1N7GFHgZqofv1doJhaD1XhttehLVXeKp2q9figUzdhfGJ95TesHe6rPdiegHsHPQqmKk894jq",
  "key15": "Uho1eYzybwtAYgvUf4iV4gkxbSyaFLiD5jsEmqS3RjzPPF6TQ8gsq7eo9f7zgW1FbdCjm6R7taA3ZYXPnbymN1V",
  "key16": "2t5VUYiru8magoaDNY8HUzoL4hzN4gzdcaRKYwnd284VXvXFuqLMVvEKC5qDQhVpWifu71iRsa7LCb22j32QLkHG",
  "key17": "2Uw2GHx1jRXjeVYKss58QC5UW81YMAa4UzWWbe3YGB7iDyz3rTz6wvUrzXPAE4gLFyMoXotZvqZtUjnev2cnyWMs",
  "key18": "4FpfUWVorxfHbbQTaJ4D3F4wq2x9fomd9naNQRdL6bffci1CCYZ3YARavQBsy6P2CpEfu2edvEY3h89qYJbBEr4o",
  "key19": "3xWLby7WAspyoNf278N14vXe1xE7QZ9Shyfs525fsGfMy6PjU5aBG17PDnSj2vaKA6SS6o5B768hJ14fcbRNjcw9",
  "key20": "5a6L8o7Au75RQtRX5XaX43iQA1VHgpWhEkjza3S8KJW2auhc36suZpcYzNc7Hr6MbLcPtxk3YCkHDD7sZ1XE3z34",
  "key21": "59HrHkB8dUBAi8KcbG1eTSuTYEY9YbkZkrU8q1E4ukT5upUpcvyB5dS65F8kG2PkqWz6MFBfwZYskeVwdHTye7TQ",
  "key22": "3DNV3m7w9pD3D9DLwCdSwUXmaqXfiT8s7B54nqS4XwdTyoXfLJJrsqzqwBkRgnQ4xSh88W4LqKevSahBBB6qWrBy",
  "key23": "3oRPBZLiuhamc34aL2FMKmBRHYNJEoeTsZJkajtY7NCCK8s5Unn46HTuuLbNzLfCNi12MSRxkp1TyLhWTcsDh6wh",
  "key24": "3DcDw5N7bBzjdcJrNvcxvLLAWyWnkqhLB8qXtapvYM99UnDf8baZWFsdYNwDMLvbpUSZu8HnF7tGrSxrEvWrUN3d",
  "key25": "4W1XAQm6wbggkVRH9gG6jqifrfM3ZHNXy44D2mDtCPSGAD6UdB4mZn6XcZAvLFagfEn11arAisLZvEdvr9hQxhdF",
  "key26": "4DLNm8FF2YtNzV2mw5SSCbFmbhdgpH4ob5vCE7PLZZ4vP5EG7BrsbgFhB2xwfUu3hbuP8cYExMm79NMVYafdgYK",
  "key27": "5avah1LJpYBGJ7w7gdkj7yhrbcso57MJXMHWA8j17j96AbeckS1M4xy82Fm9QG5tU38D3fvQoWEW9MJ76r1k49tu"
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
