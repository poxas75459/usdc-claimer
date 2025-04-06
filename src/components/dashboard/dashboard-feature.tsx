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
    "4r9XMqe3BM4KK8ezXzD6KgCs714Thp3jec8vW8MiGM5D1PpU3YTNEGkAuu6SaXAii34Qa8zoZpHuZDnFSDxyBtEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bYMopK4bXmM6W2oq2DxwnAeP2nQmE36rzxBuvtKG3vktdKAUYRiyzgFj6uUG7V86SDSNciCtq84DNfZ7s9bbPHo",
  "key1": "4C9VtCsaTGiqZd1x19J4p4q9jVtciaF52isNFD9CZt9FecDi3VSSv1MfMDAoQqsyv4pCCzWrp8Njm8ooFoeSm396",
  "key2": "497Xs3eaJCviAfGG5weHeNzcpbLucqRnaWaaKA2TiaSpk93kVcLFG575GGLd8NTE5fDqrNb1TwFviurvDo1uzykM",
  "key3": "5CZHGzdgiHRPsooph1o1xn3qbzjJ1YbnVW9FquCHDkeoRVpdfRB3QiaFD8TGWjmcnAHJPoqfARoAFZUcHV5EzHAR",
  "key4": "2XEz8ZPVuSoJdCYDzdDtku9B8wMDt1nEHSH7KDcijudmtbfkrjNr3BvPJoKpY1gv3WCSsMSHJmsn61n3UBdSQb3C",
  "key5": "6uyGPcgshNCfmZVYhm5RnpTd1sZ8KBH7czPM6S7DzppMAqVfxZSXfgtPADicstnKUTn3ZZXvDFobUTrTxMGk6To",
  "key6": "2nDmad1ocRUTvU1bLaMbc7DHHkdvppCvxCzLs1nGZnmDBn1MiyHYDHSbks2B8j4BgesS9Hz5xgnrZPwAbGrAuNqj",
  "key7": "WyhkAr7W1CHc3aMLQyNmjgpxEQ2bECSnt8r9b2vmDz4LVvXUKwmd4UuC2ZKL9SEfrmtjc9pY58pvLsczzuovsbb",
  "key8": "XpjboieLFKB43FFZxrUDE94QvWjXC4tViR5nea4RVCRTSZBVbWeQZyzSTi79qBojtofTQtohEgsLJGYANoyj4v8",
  "key9": "55Y8wbCBHHD857HdM4gMLSqzg5agNnaJqa5Thrmmvo7vW861eiLWi3p4WpMfz1P54fYRT3UAqyBV2uvGBoZUt68E",
  "key10": "32thFj4c465yYjpAnWKsBLxaSRx4NwExR14vGo6Vu8i99sxmML4bn24RfS3rR19BVtaEYtNKwVaT9UVdGVEQzP3H",
  "key11": "2yNmPHwxFyUJ1t41kXkrr5zfXhXFuyqifULazEF2THDbCexN5n7mnin8yUsuyxw4PJU8nbzDff7dCQ6ajxL2XGXm",
  "key12": "3K7nZbX3Ef2rzgntJZwfb4uVEho3mRfpxcd2g3Ygu36padxeFuiiwxjVJwJiJUHn971gFGTmJeiRy5HdHwLCeBmm",
  "key13": "58i5Cb7bQeqfZU1nBNzn2b9XTKy2NAGiwYfZt1w8s951Vj6iroKpa8hUPBA6xxd7PXdkc4EGn27h2XwyWETUXDp1",
  "key14": "4H6GGBzFfij7niUQRRynAfq4cCk6Pxugw3jBCRx2MQDvJ5eM7bjsbNCYqy6b9p52jM5tRbRzC6YrjZaKKLTRzobs",
  "key15": "47fEJZUbcCFxiHb5eLiTv93gFVs1dyMYPjQxafd42YeHNfTZEyP1HRCKLXxgEUkGEkQjK43nkjiyr8z8N5UYSUj7",
  "key16": "3H1WkfVrvQ2ChK3t3XDeNDMJz9qjK6FSJuDJRCha9VLVuRjcFTwrto4mY72JmPgoyuDUxn6bQGeFvfqzZqtfxZ5e",
  "key17": "5gq8j4Y8bhU6sJotWiPvgJJbAMnQpiKAvFwZfcTSUDJ53yNngmVxtgkLRWXotciqXS73mUK78q1zikMT8jvYvtfS",
  "key18": "bgVkrqbBqJD1KDXzoFb7dXW8tvaNB5yjaqhAWK1apk75y8ZdGEHxCoQ5otvYne9sju2VGsoBBav2bxY3mcNduZT",
  "key19": "4kt7VCntB9z9gBLxaAsANaLQN5Yv7gzCYDZHT4kn2J3WeC5RGYTaJmUGvCMH2rCaj9Hod3LtrU2yroGnjzB1VsqA",
  "key20": "3vGfzpFQEWFVYzgweozdwyAgifQN62KdTTyn6uXHKFehe5Y5nWre5JW12LddvwjBpna3GPV2uGSEvtL2qJP2jjyj",
  "key21": "5Z3tFSgVFV6Rer1e7T5ESgtDtpjahEzFa5SBSo5osKBgGvweBNuLuZcxQkg4o54jUwoGw7brG4mo4pfq2ZaxhE9J",
  "key22": "TDy7pXLXPYVuose6HjM6F4ZMY4FwYKJ59Lr6MadCTMFBy7ChVu7osNBnhNGEaV3ZsFGpNGxmeh55KoQUSjEEknd",
  "key23": "ns4ftmYGxDXVG914JwizCCAXSFWdVPtV96wyXUfQGaXyEXgJdA9mLftDWfaJGtRiUJJy6bTRGQrudvZGn6L6nvW",
  "key24": "5m1FThfc5JQtDsqyDDULtTdtxoDoWmHFq1dW5gV6q1dHu5Y4HDh96GPfdguq5zRrzbbJxGpQv8PHJKM9BkJWha3y",
  "key25": "o9Edji2PgCxxRaX1RbLMGFUKnPaCGhC2sRsHNbEKbJDbA2VBV79RFvP1te9caRcDdd8xFG6BwAZUKWtEk7PR65x",
  "key26": "5Ur9WoM6bAwd5boasgcReRU3nJ11o4rD3FYHPJ3eDuvGEceprCzGbn8zfgiPusoNgY7hL47rmg6JinbLzTwG3g4Z"
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
