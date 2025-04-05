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
    "29QAHuCdJiNdHotjUY59Tisrvp5a2ynX3RA1YZz3iWt3um9gwKaMZthGM77Kvkpk9D4ZppHEFUH45dc5KACD2vVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X5shku2piW4B26yYBmrnFm5CR5m2mWDA355JvDkEKBJWy2PWJ2AxfbjauJPcbNRK1pijiPZC9hqxm3wc9cmACsu",
  "key1": "62bvnxhZEF8KRsYPYsEBjTAn8v8JkECWA3dPGdG7fEveJ4joofPH5AjZpexHci1giZXkvD5ZjVf8Bvrea5439KMV",
  "key2": "324eNx3BAyCNHMzEGsVTDbEZGyzV5SJAYDHHKw1xQG6GsCuun2t7riWpR5qhKCwKkMKWddfbDUroKD6Ne5NHHwCL",
  "key3": "5fMkiD8E3Sxa8qefS4fGzbjyUTkn4fRBY1mRcQPTwrYVL5b7qUM1Ne8CGpVsUznfSfXVnTnEHWH3ZbRECg2ngjtF",
  "key4": "3qt8a2dHRqQXhzRBibcBFYPybmcwASTAbjVsF8eT1CBJUf1oE7Q9fWKLoqFWwC7HEdZxpJByoDsA8zGekmAH2cqX",
  "key5": "3mT8HLvkRnFrXoFdZdCF91xXxpSeBtm4GrYjjrYK9YvhmeBj2SDs4QJUrHuNrfpTvGbyLQWpbyXGHJacjoiBL9q9",
  "key6": "2xRp944dZCUHTQ416DFU5Cwep42mMhLmYouPMz5bY6r8c7LSetSDWwEw3JjgZm5gd9T3kULUMMf1i3Dn6SB9Ckkf",
  "key7": "5B3mZvn4ucyBDfb4FcsSpM4cKvxMyg8GXNTH8kDho5vSR5ZKbG7WqKzR2JEPCVz4enMjUgdbkhQKDe6BTP1JzgE8",
  "key8": "5cXwAAUNcZTrpuwbVM9uSHQdr56jCQZYXC8qssWqGLVivWKDeFxsvjSp4WfMSz68PPVgdNRSZ2dAQcQihLCUszhD",
  "key9": "28knV53q12b7JJN9P9LUnaQxnYR8pDVwNWeMyej16wvR8MsytgXZQkuiEXDWBQxpddx6avLuouy6qUkERtRFMdAf",
  "key10": "2Xz7W2uG4EPmaza1j894V8ix28FJ5Vx8ffVRJSgDRXyNuwPjMGvqGEwQydMr5L656FC9krMjZM7W7DtRknMpExWt",
  "key11": "2ANMizoPfEhv1TpgK4AXUHfxd9JiC63nbdfnzhdDeqohq5cP9HDAA8BjbhSsmJ3FFRoSVsEomYfUMygwDnyHm5tJ",
  "key12": "2ATVjRvBo6mVWDsNeMz4yScQP85NFBUJsM9xDEGaocYHt9S6hktVMdi6yGbCZr4EZHdhi1m58qUbjBBJWLftRJwn",
  "key13": "4b5dtETgBcZ1zUhcaJeDa18sYsfyqgd765Bxj6j4FV6hcPu9Fzagi75FSwFrUwuB7fZNE3LEN11J4CQGdkaZWNUB",
  "key14": "2prqS9QBNjvooW9PC5gHp2RzxGJ1VaJ7CZfSzgvrNeZ6o6qYRMVUESfybcZY44qWQedWWTjQp5KhuhjtawWrqyaS",
  "key15": "4nag66fF3YenyHJXGhj1aLJ4372NtF7Ee7voiRutKXyNknzBdo1Q5y9bPTMPH6i4cQmoZMkmt8dFNmFWsZTyYYtj",
  "key16": "4SeXBiDeEV4MT3QMi8Gow2jUbM1aDqTDyK4faZPgHZxfAUFrdnqnC9mv4t3nhApedLCSqKANhMRv7dpHztXDYdPK",
  "key17": "22VB1znhbyAWESKnunUoa6fKTKgXrQpooBHJ29YqZzhT2D7EZyexDRQSfLCxNa6U7pcsu5PP2yYDG6Qx1Pk4WBpW",
  "key18": "3mTzoFXYsH3HM86McXUxhV7qoLVaDMBfsySg63rwTZSxWa5pQDkh8oY9n9TFHLcY57JB86MibSay3VgamtgaMCTE",
  "key19": "2nV2R91CTqAJZjXPcvxZBVGVPrb7wFTNzKpmzekfexpgJbNtc8czDjKfsghJCCd3hogd6QJwrtZ2GnVo9yzBriHE",
  "key20": "33USxXHbwGxpubM2gmfecDMJgUD7ZZBtPAtoTiq6QhAKx77bmmeqe9eqtSvx2QKrRPrgqs899JmANG4c51coYJJY",
  "key21": "4ynfnKA1nZ26nTQ1nZR5Q1g8gc5VGbQr3mqoYmE9vEzB4LW1hJmBozkhNDjqvCrBNzLmY6eFc3UpPdqAHojn585W",
  "key22": "nqF1NSctXCj6eJ9cAsQwPVXev8RBBy5qxqdfnKkh3QWmfHsWEViArtBxqUUtVSzgYBKEyRcsmZwmYgzBK5fAgUh",
  "key23": "2JtoyaGpoDy7zocYe3MiXPisiZSzUzWiDkmtGtzYNqoj2Nx6jqMP3864C9JN3Ldkx1xdrkic5RHEh2pMQtDSuvwf",
  "key24": "JDvGCJesc7niqNQ4BE42pdvBfrqd1umtNGhdLdp8K1AjmeBXnJAztjBU6KBQbKEijJju8RzMEGugMC5kGCZanBg",
  "key25": "v6dA1xsGJPExUTF6zxv6Ft2mqCwmnzfNRE4Zbr45sgQMrYn1Z2se838oCHjPndV1gCDp1Kow7DcNo3KgV5AqUxV"
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
