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
    "3E4KKKQ8QAno6nFsSZ93cpZFg3ddZtpUThtpbDmPm8iLacgtVejwPnCncf86eBXWfRzBUepa68jM6Dj6am1hjFVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fJ7DYEmP9cjAdKgeGE61hgKTmFhpvzz396XJ6BKbiSqAGyHjJHHUTHDjkyKFjCwTY86bmFLieUQ7Upz3a6ymD94",
  "key1": "2DMq4u9SNaq5Es3sSRGduVaNYJA8uBEcRazqvNp4wPkxs3cCyH5AQbZGpXF5rnsWwvjteuiRs7RjTS96BK2JdD3z",
  "key2": "4bMKUagnFtWsqM15FvnNPC3wUEpWVQhAsn6FdKPA9AFZeMSL48Y7ThAA7x1okxLa8ZErTaYmXUsdH11KZxxSNwAz",
  "key3": "3iLLuWLSa8DrBZcH8jrg7Sxv8nVdvHqDa7NTkoZwEDJ46akWQWs2zgs97yjtYGPX3fHfMpL5wV5NdjGDMZDtrNyV",
  "key4": "4Vi3ysQXzpgThM629WxKxgoZN872xwd3G8Du9zpvycdoG9sHtU7XkYcLCzM749bs9QGVt4scuHLprrphCsWHTMcx",
  "key5": "4U7VT2BvDCVNXhefz1ynXWx5smjkJ2dS2kh1tCeHh71D1ztMfz214xMKPHGy7py9uHWhZC5rwYVnZMqHqwqG6GTa",
  "key6": "2XQRdQJfrwWUxvfBUoCGfHzxuid7pkdTAhkJm1shreamTZWum9FWc5gnhtYxuJMjBrbTLzpDxnVvhFck8xGpJSTt",
  "key7": "BabZJs7L8EfmvY1pVJun9WUQ1zkN4TFaDboLBuqQMzDq64gJ6XtawNQrsT8HGyp23Mn6o51HHVbJeAHbfNxbRcM",
  "key8": "3zSKEKbbJaLsZ8hKb5SrngWTGSb4vPRJupm5w6mjr82xTzoMVRZ1cAyuYVQtbkCf5u1Rz1z7jVfJtaK3EkBejBDw",
  "key9": "51EGUGNSz8qF2m9V4c3dQg46VJiF3gUZWgn8ne5VteCsqni6rHPunfgpJJ46PHMgnq3Ev2UYPyDAV3nuxASWr9P3",
  "key10": "6XgHzS5XGd1STHsgHsB4GUVBiAJQMc9x2KwCa6EZjNSVN8rzwqi7mJgmYp7NKkPMYnCcyZE58W28KKSa9jxBerx",
  "key11": "3x1TBaR6z6XFyXYWs6smx6dULvSGyN2nhkmzwWo9qZdWrsgegvBuNDXtiym7NMZsrjaNEQMAasWjMSuQuGas6Ug3",
  "key12": "2g1sgfAruUn9PYFQLFUswFAJkP4cfn54zpKNYrURK64RSV5eWp6hZ2NJhLaAqb16bj5GCDcb2sg4NiTFC3DVQAPa",
  "key13": "BnVByYjkNQfjiSw135o6v4aBSLnXrZM6RmNrBL7cbGx24wr53WykPoLKLGiK7f4mRLbUfLU68eEMjJ58A75mp4T",
  "key14": "3BszhwHJWzTDxf8nHZ8DpTAJBH8C26yK3k3kgS4YVpLzNAfpLvMA7W8nWGBVi69ew24AA9heAtYKDHjafgWNHYfu",
  "key15": "3fbGaaQ6SxU7PaetEPgMszLknaSyFATCnBBnKFDymNQBx2pLF8PCVYLKSVQom3cFEzrBnkxpb8jNXBD3DkRfQTrN",
  "key16": "5dEf8dYFWhdK1N5h2MmpVsyd754au2hT7JUkLkA2Fnbjyp4kFfTs4Cw1xbMrKTPUDdATbtJYvi1BuLQev6rUy7CR",
  "key17": "5Qhv3ELw9iLVbD96QT1mA9rNdrVLBpkYdssg3Srop4wV8rH3AUvhr1iGUEyGDRKReoqnVsh6L4LbeeKy3b7kQGQA",
  "key18": "3Th9mECkvEYNdcFLRo1FBJtse6PQMEs58vm7tJESo14BPsJrwxpwWBKWaTvSeAunUtLyUUFr2BwPLV4qp8n2Qubv",
  "key19": "4nf1oExu9xww1ums4B4tPSRDkHEUPLNHipy8rPbS3YCdFTCPkCufoBSqeCiHy9XgZtF2pfN7z3a9ZMAAy7X4Veqd",
  "key20": "3ZF14CAC74ukndToNbenxpQNFXbaEaviZMxTwdr52effo6ZutF2mkLDXr9iQgcmjDrinJ8udfm8hUD69Ruio91E8",
  "key21": "9ZSMC8K3mvy7pNYQvTuFuEaqNrS49n6LftChQsbvVqiXQXt2RE7YZKmDzoaGhJkaSjQ4S3WB3zBPD1CH1FWQ8m5",
  "key22": "3JDTKL1RFrjceXiu94J24CyfeCzMJEc2LYUYUXNXt3nmtmWCmtrfcNzLk9CNUyHGk6FV44wPgUu72F3Y4Jh6yhCD",
  "key23": "4AMMHD2DhrbFawAzz9WZT8EGYb7mRtGGjpE3BJCpEnCap1SrQjfZus12HzSFUhMpvwVa6xJLuVBTcPQKQHYbRLAi",
  "key24": "3r6qWAB2d6Hz96s6AQQtzE8y57kTBniupzKmyZDoqm4aqEqhSdP3Lwjknc1mSs9ZZx3Ux5tWZDYdGfVqjMdL1y2u",
  "key25": "2SBdxirBrV6Lptp2vQWZfQnh2ypAnUSFKwnYR8in2UiRr8qn7qoMuUh3W9AaA7BiNrbaymfconpJhYTneGrTHLRn",
  "key26": "2wnbokc2LikDdWdUXERkhzm2WSfJ1vbef14bWB7iFceyFNEvPEHE4t6JWuPTGjnyEC82Ei72xgpsbUZ3orF8i5Ln",
  "key27": "5ovJJTmXGRaY1PwrEX1e6tJpdB3ZYv3a5gYz1rspKnrdDdiAcvYCNGbC8JasC6JsAyJqHorx9ymMpS5V9rqcUVRu"
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
