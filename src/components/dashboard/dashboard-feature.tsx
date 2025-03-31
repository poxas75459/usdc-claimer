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
    "m1aP3fyBDGQ2bBsocLKpVz2CVz6cgJkXc6cAFqYyEDJxCE4EFyb7CanjxVy5d67uRk1MdwomUbrQJ6bFWXbjy3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32weHjpCrrtcLFRGhWTLCdRJktxgoFoo8fHoH4As4dpuH8mgEyHK1qPxn6TYYTFYpLoLkRh8zN6oJvu5pXuujMqw",
  "key1": "3LmNkCKrp9WjHA973deDFx3Tt6hjcEw6VouPcVyAiWwoVSyJZ4QxTXxe4sYcrdPgNU3aVktUBjHsNXTioqaNkfFs",
  "key2": "ypjK3HCA9Ng2mQcmGRC2G2gM1STo7GVfuoe5Enez6mQhbutLaDH5C6vkirVss5HkcKxuYuYfdn8MCPGQRK8ASo2",
  "key3": "5tyuQYzkiP4rYZtbgVaFdEb9GVpKmPh1NysQxi7vgcGz32NKf8385EJtLksqcXdHfPVVvRhe4sg8Pydaubn1hGmr",
  "key4": "4KF9TBbPjiEptvGE3BhspuCq8YGb1ccQcsgjkpve4TsZHC29PBw3d3e27Hti2EXxbfbHhAVBY7GGDJAyMfnsXinz",
  "key5": "3HxnTSDuhy6pcVuxdh9dG5CHdS1HDTwsPpJ3oUNB95qtY8W6Uj77tL9Hj69SysKRvY26N9ieBZHcH4K1VLYWnonh",
  "key6": "3nk1gePtqHVxWAekMQMHWXmpZym7Wto1t6Pu75pmj5KLdmi9UXBD9sCqs5nLw875fkrmqjmmu6YxZVGwcVj7nc8w",
  "key7": "YvD7UzVeYvUAkLLcZ4UmSXHRxRAok6WjQ2YLD4EEjpirE2kK5jQpYukWxMVeM4tAu7R64XGE7ZnTNkhsR1s7bF1",
  "key8": "66MztF9mMAgPa4fdqXuMaEpF68mdzwUxGpMK13zBAnCHYBbP7ETwPxksCKuVePXZi1cwqkKUMt7qwRqLHnu6uatg",
  "key9": "4SriJGc7w4yGNNxvr44uQZjbtQrpoku9fX3UX6CZFaWXQ1f4XjnMs3tRKnWg1YFx4Y3yj1TXCFMryPNLebJuyogY",
  "key10": "5RRDSLrKdsRFdN7CEf9areJui4KmjngR8mk7QB6VHNrMmQg2jDs2sMiGzvBobPzf4YtvzCcZrPie6QMLwJT56R73",
  "key11": "5MxUchyvAxAxwYB7zKNKhitZFHspQX71uAqqPn8soYxiajQxw9TgHYzfdLwGgKRKUoqafTsNjnerYRfWoz19jx5",
  "key12": "2E8U8rQopdCNEfWf7wNeEnUanBm59D7JVgNctpKLnun7EMU9JoxEFmgEcMPSD8EECH3qTtz3aVura41CWKBkbdkT",
  "key13": "nYGxR29WPvTzsbt3JWrX77x9jQpM32WfeVdY1FSoYXNSgChvE6fnGTbe9PbAZ98Ak6ebQQvpthLz1JoK4FAUiCb",
  "key14": "gueFAMa8Btd5GYYKpU62wz74SocWBLSfSiGnSk96j1a9n94tVxrcEu3arkRQvJGER2wCtr1mbnMwmbSVjP89tQS",
  "key15": "xp7WfSBhrCYvE6LaXNeuA7LFL9nCU4WCd1XF21WKwdxRcCecbE6FAiuR1xxhyahpTvaZvB1jffroE5Q4VAudXaF",
  "key16": "3o2uTWZLzdeB7FLkBSxWqFK2Sji44FA3vZf2SWSEzZEWnMA8eaxEB33yvKirJ48w7ayDRjhbzAXiMZsirVbtBA97",
  "key17": "5C5M9EuU3xwQLDLQcf2JbLm45ZaHKMjyfM6G48CtgXcmYiAhMA7ckfkvBUTp2bx3fc6n2iqQpGfoCC4nuqTHjog9",
  "key18": "23reuUUT2REiArmYKzCLHjapFmSzthwcG5iegPRSuK3XUhTsZLc2fVPxiPWfuVCoewW59x3q29558z6fWDE3sqpX",
  "key19": "2GqVjDfcKpgZ6K8BMyvNBFzC43UMwNNj9vsk9Fy4f68awt6746nSPnH5zJPcZT1GL44uHi4HTwug2fScBHjxz27a",
  "key20": "wAssmbV3cHx3DWXHkuRX8ZFyyCaU4AkkRQCs5rnt2tbbyKv8vgZLHScPmgYkuZiG6q2Td5mFFZAGV6jdVmVsfsk",
  "key21": "5zn8Ls4SZENuHHTXWjuK1fQxG6ZzncvMwQ26oU2ch69EZ2kdmPsywerXL79YCg5hz4oMugQzXpuyj6VYmNBwETJ1",
  "key22": "5gqs219wmUbLBudVeSbfKWJxXqFK1oWhwLGwawRcVbLDgDRCmH1FzWMbiGgyZjgmvsgS779FSq48kXC8pGmMLyng",
  "key23": "9rJSqrHyXduKiyUzz1JzVjzow3LnDwHBLkJCYQEDAH7ntdb2te3uyF9QL71HiejadHN6e4qWJvJh9oDQkDxoxPN",
  "key24": "HAuKxCks3PpgFrBTKSSGqHxmwz9SeUn55pELjF2PAFRK7xK4241sk4PvFvdeYkUpjasLZb5h6spTuYa5mUqBAWu",
  "key25": "7sWfJy4Lvt7LaiQCkeHrFjnLpPFCp3VtX5K9kniouvkETgs33fG78tC2iUoZnmLTg6po4HaTy5XWpAGeLP5q9f5",
  "key26": "3J6M46YFTnCaE7KUCSaxzFrTU7M2nevgasf8dhuiRoTpt9fTvcG49VoUaCUVphKbYxuPDVMab5RYQSgPQWwNntPB",
  "key27": "5uQAg7d53snfjQACuiPZzEShGD4G1s7YyRcWECZ6gxGWQ4tNG9BnmCh9rJVBqKKd43pwaXbHqz5pxn3bp9dbhegu",
  "key28": "4JWKmZdCoKUYch9hZS9k9BVHGw8QkJZskjp4FfUyC9ZpaJNBQmUpMG5UPg3KLwprFNhnnqYfS9hBh9jcpMBeZpu2"
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
