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
    "53C3Sf8jCh2oBXHxkRC2LYB6CBQMPVEk2xhxEr8NzvzhtJrq1xyDfG61hMsCSpzmaoVbJY9he9bG8YDSmBMv5yKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "285Aex487kJCfdoPdZg9beX9BEkyjvx6jUraEPJ5LdxA4FsBtS3G82iDh2FDp6nnFPrdzZNaG1hC2AAhCkXQvBUA",
  "key1": "5pQQ97ePkU2g6DU1qZjBBrhbkdjRZqkacSiwQeNBuoDkC66EgscfUGB3poSiT9QUyw9jp2ygHGaSdMSNSMf2anbQ",
  "key2": "aJbYf3i1sLXnrA1DKZxhFkQbTtfJ197b4xp2hd4M8N1H6GXYEg3eCxfS6MCe2ZjAKBb2uw7eNonNVu4dnxBGHoB",
  "key3": "9T5PQTFLFb3npYCFypDzGwJWfobP2UtAusS9CPhto63knXBFck8HhR3Qqa37dMt4To5YtJVP5ucrDHxVWbvn54V",
  "key4": "5F8azvAYWxHrNtbpJXsxoaNRBAcwiKNB9NpnFg1jieCmxLxXUxCexvnP4ru1Y8dEfBsQYo2KLuMPwtR9cVw4meUw",
  "key5": "53KKe8d64uhUS2t8cyGMNbVeobF7eUu5ambguyrcPpQJfAeKhxwpNnMaZuqhBtpR17UATMQ6oRHz1zQaboPEE5ZN",
  "key6": "3Sz5pUEFVaEw4UAGaPGCSfjxLZjkSXtMiYvVTYjcrJ3qw1rorhkkErdtfHkoPbqkY8f75BYkkq2NdVodGxCr5Zxb",
  "key7": "5YdtJrtJAiWiDNNCELJS7dmZJop2JeohY6KzL1oU4U9xECfWqNxiciuvG638kQ1xGndECb3MBJedf7aLATZzf3P",
  "key8": "pjgQUAQMYMZFBHhDMfTb9Tm96QBwwPVFq1FfTLFHb8R3KsuXCvETCf9pNHQpeocH3uhoHwLdWoCR1frriU3e8WU",
  "key9": "4rCM7fDALLDkjcL5j4WCSND35sWZsrFtemThwDHKqZ91xsVL9EVc7qoQkcdKb4ngSk5fxqGVR9SkGTB6Ny3tBt7v",
  "key10": "4bW7boxzpaqPiauBwdPVdHmGdLhcQXMkhDf3KKicoc7pGUzJicXDenZAVRtpYo3qw42Ta5gYdXMWfGPKkYQj1CGx",
  "key11": "FK77faK2MQQzxWUhnenMaK67L3TtX6WfcWETABQjxiDuVQQF8LQ5pA1RDPNLkHa5yMvR1gfBtHwRguL6oJ6C5vP",
  "key12": "5NPs368ALqyyet3DETTc48EcoBFx74aDS2RuRkyMct2eZscWCaTFUp8ZkEQN12pW7cLxZKGwNG58yq1X8Bi4h6fs",
  "key13": "3pbpF8TRhz5BGRqS2hzoMxbrZMKZyyZJNeeeTdGysbrStT924eQqFgbAEDgyacBCQBBF1mFNCGwPAVmrV9VMTQtD",
  "key14": "2SU9oEusfLugj8UxbxJEiMpT9VLvst616brEmxSYerYR3knHM3K5pwQyGkA1xnjdaNGifn1BhdiPES7qQVRV3xjH",
  "key15": "2Yx93U64SZPqFgVCPZXY3RNUsRhiaYaB82PmMt8Rjkw79Cmra6twUzmNYndmGPMbPvvAjdtmomhxpcXfa97KQ7HB",
  "key16": "4LqoMpbM6tFgwTC6bjF2QUmLRLHcYUkSEhyNSGHT4Q4wkc72SkGMgibaEeLDmdBNvxY8yb6PbhQ5zsrKNdXCSJjN",
  "key17": "2WZaJeDxjHTGhfAExXx6H2yomv12DWZineNf7gReyuvXusVVyYdJKZvbumUib9Eo8cU2Abz5cdUk1kTyTuQygZib",
  "key18": "4hjyQ8gJF2zUu6dQaMqFc5q49tXKENsLCM1EcVpJNxrAsxs5CX5Pmz3uhnRxHC2r2ZfifbeS7tkbVgzyWCFisjsp",
  "key19": "5sYH6CWJn7KGgUtXu7QtANSs7c131o6euE7pHtJshPYuxARuuLKy2xdFqrMU4fnZK4fZ5v4wqpjftF1hsNbyGFXd",
  "key20": "s92erGDFRRcmGLDYYL7xrbQ2suuSdJtPZtuNe9TYeozXaQ7xGbBZt2gBPxBQ1N2XjjDLaPnSYRhfTDwiGpkXPmF",
  "key21": "B4hdVeq33vPn8jhJyeCmSdnqBrJC4Qot9epfRwtu15s8rwqRdkprScBnmT42BxBBJ4JeHA9Mdoakqh6oa8VCsGX",
  "key22": "5B9LSDkU8tEgmCqGgeDUE8gqi2p5E7VHsQ9APPEKrf7kQP6Ak4n8mVQEXQD4WstLVxkc7cdWA9rAkQZdHke28jN",
  "key23": "5qMjJvzwDbYasT77CPEgLmjHespea7SNDDKeXb6fVPdQMqXndjy84grJNeG5epjoKRK4kKDtcmnsWbZRqcfXWQiK",
  "key24": "2ZemWyF8pRH31xn1VvXEvnNAJTorLRJpLMyrphnwUGzNhBH8emMPRdhmqyeoNB7wUdLg3ri2B7a9HVgPCCvVYV3B",
  "key25": "4W7E4ddXyUcqmchAAzScyMaUKaDCTu4qyHVc47ZMizo7rhhB7F9gi5oDCyYc9C3hdmCMzjFHZ8iHzfGSXphkNXu1",
  "key26": "5q9SvEpnGzNpTfbPtwF4ETmBgYQ9Ej8mPictReGv9B7GQD7MmqMvAnAMyDfHu6RNExwEsn6rd1hHFg9TdCqSoLp2"
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
