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
    "2ci4NDJX65qrG1ZKhKYMhpPBqg7gVLGF2wTcM5u9FmztBGFjZZAoDZouimDRhgVfLLgNEB9HM7HHnaFHLtP1ZYuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32viaKtWWHbLjeccXcGYQ6oD2NNGMfWprPxnKYjmdas8xUoCsNHP1tXTs7ATeEEZdfiUvh6PAunEsvq8LQNcouLX",
  "key1": "3q433ZcJB5KqiKDf8n4PkXqhqdnNP3QLondBJkfcLd79fdV1cEY2V3QydxYYKjNLKKvhR11ks1qAyXF4Y2ngJuw4",
  "key2": "5bEWFNGawanbpTvnBJjHjXppsizSwsAFaG2N8qrf8gbztntmDtJmhp3VbAA28uxk8HJicznnbm5EHLbA64nsiXmA",
  "key3": "3Ukj9WtCmVVX3KwT3Pj4wqbQbBds7BCaoXBjLqU4wtZmvhUJf12CyNX8n3wpLGCPiBpqZZTTcXrBEGsSVjLYy6uX",
  "key4": "5XXu9xvMQA9g7NuYeokn6rFUweBaCWcP5LxPfc5D5czcVCvdrBz9CWcUubMTfFfW9ScFoUfVNrSbJeP4j8mDCyV",
  "key5": "4eTfpmwwBNKtvD9zPfi6XvRn3XBkwGBML65cBsF4cSy3JXBHPEoZ1ndqBWskLG4qPvCP6wphtBFzebMd9T9LdRmN",
  "key6": "65x3tf2MBahQb5Q9Lr5emWi9u7bVaJbGkgwBQMVXVXujJQsFk8obdJ63iG81jJy3jGVhZrMr9FrLzXu1XmqwCUWY",
  "key7": "DMB33R1eSTDsUD9aoGmuimhLkHT44k3yKg37rHxuquuRZowGyDDfjYWjaSsdfvtLX8cqke2gBmrfWpwcpYey72h",
  "key8": "5jAHvj51Q9fNBD7Z1FxYra1XsorBuJbR9Y3mG9hk2jGj8cDANAFHaFwwoQDfFos94pqXS1pbJEgUeSsde1ExkgMG",
  "key9": "5jsFEnBee7kTQEtD8iSmmgm8Dg8MSCHRHdJ9BxJ3CxMPMdTi7oa8HWR7xW5pionvjGprmNSrR9Uw58zCjK1eqVrn",
  "key10": "4y8LFH6SV4VEVS71pVZzLVaDBvzE6huFCaXAJcvktPbt1Y1NNZQJFWyC4TMFwpeiKGhJNE3ayhRTHRkCYgJyPt6i",
  "key11": "4UQywXPqx68NrrDGFJiufrXoUfewCkGYb8M7XYHcGBjWw31bScvaWSrGSz7oAurUgHJXgBwd4aMrPghwEdvP8d7U",
  "key12": "xhzeRVXSyLCmkSQ2gZ6sXDv6XuojZ5j62mk9uGmkuPaYs2brR9W4Hq6NMoqpJDunDKNCYtBmKKiP7YKXeGjRcrV",
  "key13": "5u194veA2Sm26HpFsjf2Zq1fd1YXUBFgDuHSX4wbWT1w4ysDhtU5WMYDa1b8ugJeZDqskmu9sz5j7zTASR3FpJwa",
  "key14": "5KdUpxLBMnq6hBhCLsVHo41ExhKDoTRps2MKAhigANbhie7hBDmeEy34dE4kSYs9QKyjY96UJdbRVR4T98Mw57sY",
  "key15": "2vCJHddnWxa56jJ7XVorJGHC8U9HPdyeDKNRDAuATwfuucceRr1s7QB97Djgr9aWLhRHxVW8dF4iqpgVjTpZBXyk",
  "key16": "5fTYCNH8XTCmiNGProDw5R1yQe6Gj94dhXXLiZMqSqnk2CdpeW4q1dqYzGNegSL8PajU1UdJBmutALKFre1j2BUj",
  "key17": "4gWJigUEayRxSrQUfH5VW2W4oteAea6vcKRCEmxkYkhSiAjcLrjcPrfc67dfd1uMZtNP5hcHZ5tyiQ67h5hYtsMy",
  "key18": "aRvWGK2pzDU9UE7sGjtyF6hmM73m3327hNc8mPNx1GKY974G2CrfMPsXrmoxcqhfH5AY2wkNkwK61ARHiFiqLc3",
  "key19": "2DWT9LYfbL2ZnV3sEeKtoFVw7aab2dUQf6jkhjVxpvnSEeUDavDySDLxtsUaUMkmAnNxs2hemkcHojjCFGrezzgV",
  "key20": "5VHGSa9X35p6WdiWVXQmYmTnwvZKB5U6GcNGrPevDaNKiLikx8q4UmvugUGcbwZq7tLeXj5XfUdQdBoYKxE7iPPN",
  "key21": "51BQuwSc344Nj7mh9eB5LzLdf2PejRJeMye9NhNNaobYbAygHPxyGV2kf35GzuxgpueVNB6NhaD1nuR3CQGCzQy",
  "key22": "4XwoYeAsmZgGK68z7eh39hqgeMQsb3s5cuSAgV15nmoxAUDc97e51JVHTRZ4KBtV1UfS77gLqiZaXUbWhcFpVxBf",
  "key23": "5xJrDEu6kegKMH1os87kytNKUJDE4hA74jK1dzGYqHKVxEWFFkdKppWzX2bX1bkAqz4NUQ4FGzY5ysW4dAqKj4h9",
  "key24": "92LhhywHM8R8QroeW4nHukwuscxmgscPiywM7gYY1UWRAzWgt8Ro2nFmE3unc5bLaVCXfX4hTMKi5g78oq4rWm8"
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
