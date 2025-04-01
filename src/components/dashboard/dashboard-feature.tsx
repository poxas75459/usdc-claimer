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
    "Y5iXBtYWSDQ3Y7BSNkk5GMGRfa34MuNCeuxqVQ4PA1nTy1fqqmxo9aPbmMxqUscqz89epdGDtcMNPSEPZUhu3HC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mwoTXSLCHRjPe1RZu23smWByxQ4P3npLjVLGq7SkRtpYWM9piBqp2xFQraZnpV1m5e72dgsyPiXLBg36cfRDjhg",
  "key1": "4wyMY6u4uhmBSQaWYe34uScRumPdaGCZRgNGUodLytSYbFsr6dA4UmLwu9LXb3U92Y5Habd2aR7S9Fvmk2fSpbCq",
  "key2": "2HYbeUYi8uoMGrSCYGJK8zYXFfpr7CzCsQ4ERjx74x8ZPP8Ub1DyMPrEkkd4kqGLxKXWQjqLANuUhwNsnrvxHYZg",
  "key3": "d7mxZBFBdbjjZ5FoSqT9evpxx9CNNaXCprKQLcVxDfYEaNZ95ejbTh6rH3FA1XqrESPWVzXNDZUcDiEpy3dwatP",
  "key4": "44bp8GQJUPmXCCd8u3seavmDPzKd8VAXSkmxdFa5uh3XetK79QUoBASHo6nzeApEhKLnxFJyoEgHXY8KcednSehD",
  "key5": "PHYrH7CwQqRJs6vGJCvzSuGVbMer3GwEDZ8LZVzgCcRxvqjgeVi8F7gf4NDTVhZ4QVWNqM39Mfwcgfk4PFCL1Nu",
  "key6": "4YCAWdSKD2TFdXHdx6SZHs2MDGNnbwk8MYSYUQefsSfkHBNaMifxnxSM3Gnxn1VkFaW4KR9gPx8HdUk5hyhKpQLY",
  "key7": "5tQTJHtx1v78GoTtJYDgHbCMLdecepKBRs8PL24sAURw8rd9fpUMXt1riiHWC5pVQDxc9gKomjzFtDSSt4FAWdgG",
  "key8": "5kQjEshBcqRatqN62kVVc7CNm4wBrNN3UJb92zE1nQzE4rcwF8SrGvLp9hXAKSKG4ypSMsTgTxZTfEWohnTwTXrS",
  "key9": "5bY6zp1p2pLg3WzkVNodzTHgTjfqJZwfbtB2UchSzwkQ678fLBT5tm3EJbWCHysPP93h9cvmaCdgFERKzkghxLzB",
  "key10": "3d2CzvC16iSra6EcBvTH3oS4gnZKE9tiMG3WqP4n4G1rr2Rgt6QADETT5Yc2uY5cZtS3LBQzbxMfdKU67mtnoMkc",
  "key11": "4uqAFWCvYU9jzukWxMSJAnPb5eh4xgVCoXWsdAQ7vYKH6ibGQGntr7CCuUrhYC6uNGAfDFJm1NB6FtDF1TTzV56g",
  "key12": "4bqHdx425dqYB9LzrybBb4gird7sKSq3vzyBaQPNJz4U47ioCAxPhq2CM6b9PK6VL37Yf4HgEnzM3qcwEb9aUsEq",
  "key13": "5kyCBycBfUNKiyikF5QMBhRx5vA3kgv7McJpt2MvjMxtxsQ8ECf4ZoUrqCrnFHpNJ7LwLwsNMQn1e2dxcxPGCKys",
  "key14": "2xp9o3KNYDg8NTbifMJAU14Dz5WpPmZwgoDyXBYXRzttDnn9Na61LnE1Q5yPaPa1sd4uKBFNFaLSnQx4DXHTPLHq",
  "key15": "KCwwnCxsKm6ZKEeEcVZCKJ376rA4gyX81ta6Eh6U4SWi2oKB5UAkKRkjFQypjqNVmFPBpoPnPAMwm7SGcVsvxAH",
  "key16": "Qp9iNq7Rg8tyiJgdhsSkreDBCWpN5qPDVsFmkVck2ewPMHutr7JZaaffKbnzhzjy5g2DAA9encBybdrZ3GNEbyA",
  "key17": "4q4b9uXMBV3oSXzMvC1i3p2LJBshu5sbke9aacFDvoDAV6KGWdUtdWp4b6bYVvn15rwykNuBbvAAP5gs55jAHT9B",
  "key18": "4DDW99fzD7qyDntAsPT8BrxWa4pPrcnrphTmAJHWPKgyLqRTH8hBGk9iVwweNjLxjFHQP7tvfYRzEzeWUd9NcK5C",
  "key19": "37ZMsh1woiKcRfvZgFZwXMuGHseh2dmFB41NM7iaKVDsiodeG7SGNQs1LDpBitEV79tNaww47cxYib5cPyG4vn5F",
  "key20": "63AYyNqtJQjwU7vXAxZ6Dwh3q8XcHKX4c6aPMVvGET16Jc4yn9SV3F5jVWHkGBWwtMjF2itnWC19wwErqzcZybFr",
  "key21": "2rhVR9uzf8ns7RudfX9hXRhEVtJcHLHCUjWtAZMsjbuxsugtshD38ALDhdUq7kvgK5GRZQvZJjFPcmod8hgqGDQw",
  "key22": "3MeMUPMHWp2HMQyKKfGw5mAdqFtFskJuYPs2HBmX8ggJ32QELcKrbzpsQmHVehLuyrsBtT72ADmBx73L8avmsB9h",
  "key23": "5dRV23yuSyy4ENTfN4LJgxi88GGkzpokEQjiSnid1ooLCSirz49RdAx7nRB7oUwGngj3tqQZWcDyiCY8ZW52CtDi",
  "key24": "3SZjhz3vJU59b94rFEnTuLmptQ7SPcgiQnJBcCLTQbRHwLoMdLpHaKHBLFxXmzeXbGmLysEEfjxSowPribSYpekE"
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
