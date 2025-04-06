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
    "5ft3MJHpYjkNRQSBKYVdTBEA8Yv1GXwkBkiiQ7oKr4L1uhaUvowzkNTagWVKVt596F7kbcZAjMfewkWcZwcp6tsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NazDQw8X4hLQr87hBVFrsYRrdteRCWycfYxRh6TtgNfXxenxRzkAxWig749dKKAskGZ6RtaUZuXm6sCRXiUNT38",
  "key1": "5a4GpFfQaaAdRgUx5NzRY5hRZwdWBy1vsP7D1jSeAmdkww7QBULrxZTeqSD7bixJesZ3xMScdLV4X5j9RHZmc6JT",
  "key2": "2g2DpLw3Sk8JkZEgVPTRz4JoMbLjkaK33TtrKY1TrZv5Q7CbLw17VWUX8uofDWQKfybq7DrBqSWpACXde2sR3Qyh",
  "key3": "5TLuGkvbE73GgvRtmKtgRR4ox1BCb87ZyfxWvfXWockNEWfHEW17ML2mSL62eWBpWGa5MFCymi9QZG5ViGez6RLc",
  "key4": "62mCYhzpRLSwMqDcrRN5RNAbWbAKSw7GHoFFa67kDsLhHx1zZQ2fSaUqyA6rK4RyRbvXtFyW7USDQzqTVMTeLHGc",
  "key5": "38j7uWBJjPKgt34vmeewsz3bgMeGxsrksYS3fcjzfUc8oV7JQUpBDZbbeQS4ZAcYurMGgd9D1M1dbSEMQ9UdHYX3",
  "key6": "4kLa3w88k3yjeGkuBaouJGoJeGRU3ocTvyenkcrzFZQhe3VJdEAxbrBR5JFkurnR5VSqqTTC72XuiTfw1ncyhdWN",
  "key7": "5ppxRJWdsY7w79UENHuuZdLnd4ZG8JRHLGNSzFN8VVpY8GZDJDufpKTT12xCHqhte1zSwtG55Xv3fHAAzx6odahX",
  "key8": "5KkfAqSnHwEGCFtnq8pbj7GBXPgs3xHoZatizUKd36VMtfvCZctCBEgLoMbaHLEXQvsKZABUDWNh673EL8BiWVoD",
  "key9": "3EcG6deSeWsMeKiyqGeSd33W8YbFZG6UoBb1aNppZLqfi3drTm1cnP4LcTm8GHpVpowSSDv5Fs7eLNCkoYRJiZ6s",
  "key10": "4jPLfTS1va9H1JyLN7dUWy1ABFo1mSHcK74VyHa7xiPK96EWK4fAj7Nq2rTPXPXLnpqQqmTZdwjPMGAm8R5rQtyN",
  "key11": "55mALPqtGqh74jyivpzmdZXjnPxrz9jb2nHJQbzSTAyvXoaTRAgEwTyahZ5pczcoe3yK5AgTN697onBCoGqe2Fa2",
  "key12": "5fyb1vfrfKmkssTNLAPo7MiUDdzPvkUVi154Wkzamic7cd1W8UowczgjzRwfWPyXCDAKjcjT6TWx6XDUeGDrBknz",
  "key13": "2ULpMJmKWrr7p4zXm6XUcXM96X215gQGSeSjkNwmxcwAZYJC3efRAwRZcZWxNzLrtP4fyajTdoHdtC35NNCgswom",
  "key14": "4nLEPRuxdkLSyUGPx9ozHZJXJfSypcSCQpKk39Nn72PiayEcBK9TvWvZ2Xk2Yh8YYQNwpZepmNRtw6M7PA7h9dy3",
  "key15": "3fUTZAy9uHR2QmDTq2Afa2Rc1TE2Bms342adC1DDfPqfT4Fp2uspu5sxnNJU7qLWXG1DSgQL8Vx6PguK7BHVCGmY",
  "key16": "3gNktgA7KKoKP8Bg2WkRRXV5AP3BEJATKFggFnKhtvtLqBMdBNYYA1LuCZEDyRVLMBB7VqRCebHWm8neQwqsbZtv",
  "key17": "3LC1ynkMY7EApd6VESCvHZEbzhv4WFLotmTXWw1qbp8LjmFLqRoxDFwBBHHhJkijGkzh81Yf1iy7foNEjCaN4yun",
  "key18": "4VNE1eH3CZS8Qe69HcR1wxdg8tU9YuPMxg73GejzVn3YzdMtabmDWPsZDhEk6NadC1gu5ntxsRDd6zoiv3oYV7ii",
  "key19": "tAhFB1PpmTT1XXuxKNZXgQxUr27QaNazJM3Dik8oszf2LbzPxaaMWC7b8QX7S1ZxGNdDNsuX3qYVYeTeY9X1q5P",
  "key20": "25Rs3Dk43h9xxskXuXsGT8NbSU3jxLx1fYBbAYiP3v2XvXfWWNur6csD86G2DXM1vPtso8rAqC5HAQ3kSHQtY5Ce",
  "key21": "3cmKHDQ6TmyXtgqfgs6MwRQW155o5fQ23Usa3enJWwGupKH9PChohpTFFQmYmhySkeEhpi7Lg3QpSgqzwnZaSumC",
  "key22": "KyvtHwmJcbhtXwvRgm1K4QGi7eLo9XQQc6FQPKVUY6hanQ7hMkMUDcwAVYzp9ibWe2DhiDfs9jpUuBa26tycU24",
  "key23": "csrCrzREDcxPfNWLj5FEZqCSrytXfQtFxixdH7Wz4YcKmyamN9edcADdZ1sdNf5ZCeH8JtKiP9boeqwJSxmUqRF",
  "key24": "3fTKJaTWWgiboJVi5Qm577YJCdCdZgpGGv48Tp5Kj6Uiq4izNts6kdt6Hw3BSE75NdSFMzZzcP2gXaKfXufHqS9B",
  "key25": "2CNBtHsBsa713fUedtsbKwcrryzv9VgNpAiFiQH8xT3qnEBMFVkTLnW7mVXTt86m6ZDWqwixPe4xgcL2pqQpw1B9",
  "key26": "5qQ6aEmGmZrrAHUKnKSq6gGxU3MJKMHQ91XDgJ6mgr8XboBMuK4GRn6qnx2YLwZ4XA6h1SWFaTbaNiehXWEgQ3k6",
  "key27": "36m1kyDgQ71V79yBAsRiqrXMeHmKEihbHP8yHyNpvpnzq8R5YgzQmLo8jWhHVncCKDKZ9HhsdveXBMTAKJ7ViKTK",
  "key28": "GgUgYvKHYfUWUio9jyhpdVbJnf4YqRCWgrhVLojQrNWRvxSTgsotqUcAXYW1akMeMf1aBGJdzty87QFTGfWD3du",
  "key29": "4ibi45WUJdaBQiNrLQfgZ53moj87QVoF91GckoBadsteYsCuSwABqhW4wWJy2ZTL75tJ1tRWgEMaNmv8Lwzr3raw",
  "key30": "cr4rUnkm6eJYRT5unFwFPQqJegoJSA3hvJXm5etbZzyCyCwsxBK8dTudcH8iFEB22qSyjbUEx4ARYkiVZJKNNi2",
  "key31": "33AebfXgYzPGNQKxYDAG7nGygePkcyMQmQSheshygzWKLe8ncvJZcND5GAf46Y1gvFodX4X5HBTkAZFjdsvPaSPy",
  "key32": "42qEta1TTMq8orgfVbe24ksYqXX4XTpFXWek7oh2Z9G6uFLAV8f9aAKcVA3yxqjteH4DXFzR79xXABTbPcFNaRLn",
  "key33": "3cMAN4rVHSLv3oTv9P5FAvyDNmpGRtMB5so92tQLiHigRLrUupE3xSs43hFzREtCePqrNv3rje5p5TGP4oiojh4p",
  "key34": "5D2e3XGDy1WDqyL7vhUwGztQbeh7aCD9dQ4EruUQWftsVVEVnP1wWeXB2H1Ja37dKEGuusYu2tzfkHNHkc8Aj1QA",
  "key35": "3DPhnpUwwRNa4ko5jMCQU6AL2KAa2dceK7U1SGMzmAqdEwPVCtMNs8yRXnrZiDwdmHn29zaxHC2opDE7um2rKMrR",
  "key36": "481Uhr4hWUECQPmSCo8qcDHCeUmSxyjEtheBFnoz8F7x3DG9C2W3WuADf4fUaD32pfKJTxCmMoBWaP79rFX2itcP",
  "key37": "sbwUaN9DcYKAmM4TweNVUcSmpQP8UicRRa8LLVX2BwovzbvoR8P7zEjGHg8taiKpSCXZ5HZWcc6LhBCpY9bApyV",
  "key38": "39Q6ZeYQnS9uq2QjG5hTS6i81rH4rrf7gNKZBcbLM8vMVg1EfrufuQEi1q7UhvXY1CZpBsSPK5b1TZWAarek75YG",
  "key39": "TmdqYKLptoTQU9ts681GFqrNMtUUgb1GcZE4pPktFK4MJa7h2pzfg7GxCv4usYqGUZjZ6xajLoqDhPnTLJ2pZXA",
  "key40": "2Sz5zmyae2jZ2c87i8vCu2WK2cCnRA6b82vb5zBMnmshQbzLcrBdaTMev7Rb812su2cjgypFz6c4sfa19xZfhmq"
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
