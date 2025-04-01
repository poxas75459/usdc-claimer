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
    "Fs615CUGDpecdWcyoMNYhGZihjo7VTa8J6cXpqAzqrkwceAoYH9Rky2bWffMbUGnxqHY3ETsRTRCiZZtMHibzfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TK8c57Cr1HAbXwbmvAdPQjrSL2hTwKjmmBPA5vTpTcFrm1eLTXd6frXanqCcz121bDuZk6mBiWxCKKosGZySuZi",
  "key1": "5E45mVmusrKVoZMU9P9CaNNV3ywdUz2QNAf2JWnkinQRzyX7m6TCexjtWozgZQrAaRSJe7wWYrFzR5gxH16DmRH",
  "key2": "5gTpvssTNfaQ76T11nCabQzhQbg7zqEQCyuEakW2r1y42xEwwt5NK28huduE6kBXMK6ZbizdcRtcydSZbEsTNNPa",
  "key3": "5WgTaCdS6mhuFoiJRDWG8BcZNaomBq2SDQcdn1yeQkGEKMH3iGBFLSa5YMDL4akrGfxWDaWnJ1hN9jZZQtix28cq",
  "key4": "2hfkCg4QNAh3naVo3kbtZ3fsKhForGxPKUBhawiHXRkw1rT2SbC2ArNdyW2ZTerLiQhUZvx2PQvejEUmHXWpyGpS",
  "key5": "4Zq8KEAJhQgmP5MMSuK2tb4Da62heMy4BXA7jrys7ynNWBsLL25ggY9QgRDo77VxTVp9ME4t8zqRdTQGizsRuS68",
  "key6": "32DzH8kijcWSs2vCQA7kzpYTkzNhDSwaAjKUdt8KgKah6UtGNz7JMeASTD9UYDd1L2Svqg6HYXgBaWP2B4d21ruE",
  "key7": "4naJ4i9f5UAH27hqacQNx6MWKcjRoZKvMCkSsSAD2eXp421gx7hRrFb68vPG7HbpSm74kcQc9AbH5rGAC4nFXhoe",
  "key8": "f3Tw5Mg4roYE9gmF3YhhuhxrtS81Zdoep3Q1pZbsBZNmi67CbXtxUWzQTpKa1McG7Tn5mqgy7RwVb49u2LDMRv5",
  "key9": "5gz4VrjLnuqf2RB6tDDVkoxuirw5NQP9QwmgzrcWStPQLEhAuWWv6qdaRNpDGQubH3y6PVA6G5YjYSYuAcuBcj4f",
  "key10": "iydo15FQSdNdYH5ZNrLpkBo7MC34bmkdpjibqeAdEKf6kBuMaAgcneQ128iFH45h8tWM2nEy2Xs1oNjcdtcCbCS",
  "key11": "35nYGmKqwiytkCue1ML7KxmK5TeMTdHExyYqnhzQz6nufYnoK2Razt4pLUugUNwyQfwuxnKM2MEmWpTPuLSKQvKH",
  "key12": "2kw7K8H1UzNqizCizc4KQ3unTqpityAk4fxrx9q6de36KAfArwEiREEamHKeFF33UoVpWpy6X493eJShaFszpmNf",
  "key13": "4TGBodG8HEfZ9SGyxiciLW4eCHfxNrEp4YT9DxXHnZgsEoVUQ6hKMLM5PE6Qq83ETwkB4DpKoPeeaX9dzg8qxV9E",
  "key14": "pKyimSGsrqoSiXNGgUE8L2UEQenUuaRSfnyjErz2eHz2V98WD9A6B61sxEPT1oukr1TtXBmhapjGHASK3i9fPyq",
  "key15": "3wUPo2S49Fnbw88yPw7AzNyZcXmHmHiQS6qACRWAVSeFRY3d2j99EaZLxqU8w82ZqReNoN79NuePYMvkigmLvSzy",
  "key16": "4wgPedY7etGwtbjWUtzobXV68zA2TyBrAtb9LrMM1M5xnvM1MZr3feyJFDhikupAG19ycRy2iCoX1UYa3TMAUcm7",
  "key17": "23UC8rcUjDAf8MSLrffCPnhRiyG5uHCSn7xCnzZYjCR9goSEYKWPyDxsNSC5LEBgdqA2YPxSLfXp5uy5vWMoyHB4",
  "key18": "49STTjrpvHb5F2rBMhM6Jn7iPfgAoX9gLV33vYQpJxEiCg2WCSU9syzRrUexun9QMJi5GhH2FMYRKzzT9j3jLg3o",
  "key19": "3j4oyjKqmSx6hnHFh8nQ9PothMQwJKSNN6diS2i31K6mqx9Xyyzyf7vijmzKB3WXWNPpVpPDzLL8uANRbCVQSnV2",
  "key20": "4Bp2v1K9gjyqpk6LGU6CZ99dm2ni97U9pXkdqyK6X56KiiGDJqyDGiTFUiQBLdUw6TNMWb34eudqVwYJYrFtWuhz",
  "key21": "38C8JwtTZWNYASKLtt7jUiizSZr9Q1cusgqrFHA9FJt61Y1YXFgBYN7ZMTrtC36W34sZLdijkwyXgRNw7f68Q99F",
  "key22": "fZS1Hs6j2ZTdBTG4FDaAESSvDpP2CbmWT6egJpcfHqnJHkr25w65wpss2gweAet4F8nRjU6V4EZZr59xFribNhg",
  "key23": "5HrjsefvY5tUq92V6hLUS2J4M7hpnECbtj5qLTLMrmngH4Ku1JNcqNPN3d8FibVMkxictbmbRWKXtKH51bn2ooRZ",
  "key24": "4aPcVEyapxDbsHrrUqi4Ja5WNrgrjVef5nXvShRHzkddZUPktJa3DsirJPfvFif4R8fAUqTiBwFiKfMqvWJe8MTh",
  "key25": "3ucMeAoun3yw5rhM33aAqrBdbi6UM3J4WY1APKEBtxdJeMJvgfRPfQks42eomVH2JZ3xbrsP2pi4FwULvC2VW6ne",
  "key26": "4P2mhBAsW5pqny8eKKyJqva6cXX2raWeDQ3NWunBQs16fGoFCrH1mz3cdLk5XhcCDnvSq8HSb4V2Ra835uj9waJy",
  "key27": "2bYHRaUq1XhYSWnudg12BLgbYhQf4UdCZjj4XXdzja1XGmF2c4UTAf4dfQcKJrwRtD7mgwYXcw5LuLnWhUmDhrHw"
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
