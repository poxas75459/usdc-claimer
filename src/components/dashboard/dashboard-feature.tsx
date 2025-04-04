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
    "2936tjUint2BdvJx1BmaxiAL8HeAYqZweMbJ2NEY8uzqeZHeY9ceEnhWZDnLwMZNQ7WJsCtASvTpVoXoVGN4HvhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BXkBqBWEc1mWteGc31FWicwGQQu6XHWFcA7nEBXDXoNQSGxfdXC461cdgzP4x3xtnvFSLhcpwA2PN99gDCvghVq",
  "key1": "2dPWDeZ6C52hKaxdbvwvwQuWehZAfh8sGN6omXVG5fUBHy396jCuLLcsQA9q9hy5ma9Fyjea8dGHH1eSaFmSHp7z",
  "key2": "uKyKuP2DvXgXtTmCjnMEnT6Y4oPv98gqEQYkMrF4BimeBnyN2P3KCzZZKUsP1UAfjusgYuLX6eCmLAsQpVDxSV5",
  "key3": "5UYGQP8GyqGBagFfupYT86T9ZzDQpoTSHBz9qDHiqg2vxPXwKdGgVEDuFzwUfJtYsnMF6MTPJy5bRvDExaJUFyxJ",
  "key4": "39YuvQk1Emqt21rZAtV56G9gXkosGGSrLRj95Kcc7ZeqDqyCFg6gADv58DCAGY2Fs35o47n2U8bu9qYLCAaYq22P",
  "key5": "2kSEU7wbVi7ZLM5V1LqKfmZPTV2PVEPutPY5HBHHetc8J1GSuTJwwBLU8zV5QG5sV2PSDo21kR5EAb2p9xGHAHxq",
  "key6": "PD4jERQwX17tTHZkgDx9noVtnvDkVV7uuMFHVhYJozjyTzzw8grGWStfae7EiBJnkVwbMtRBS9B2BQG8Q4ruJVu",
  "key7": "2eWLjfhVjP3XFH7VVsxfXKmQs3TpdoMJsEgTJv2YoV8XBDP7KonTjD6pP8waXhz76z3x5iGsGBHpHR5MpEJzs4dd",
  "key8": "5TabqF9PhNCfqU6ZbyQmtcpB9mwQpmXxqLm9YGoeLyJk9C3UQfVNwPjRwYiV8x6xwYdjrS3pKiSCAig5DMgxcxCe",
  "key9": "2TLjMN3ZZCxwvbLGy5KAPUiG8FFUGGE23f9j7XUFQZb66Ke1hBtko6bXu4DkxT4C7vPgAyi67MfcKeDVWtKxvc5i",
  "key10": "588VYP7N28AvEF4mQSHUh6pb3R1kS26LiHztpoceeCAUrcYgma8JMwcMqiUckqMhH3yZJaA3nvqJoc3whzUQ5Srj",
  "key11": "3xDRMv8W3KYm6jrBti7Ssvm6qjdVJJPZKQAaQvmQo5u8t1yt7vmpxDQGA9UQQRVxnzKY6szRaJYYuM5jJAKNDKGm",
  "key12": "43gCUf7wooRCLYuSrvPyLnw5Gh6x4edkAGkJRNdS7joxkagmjqsijLmaTxupCbvHH96pWyGtLvcxQTV3YTjMRsJx",
  "key13": "3zrY73uZ3WEjtoPLtdThQT6K7Wx7VCpKbTWLs5hhnXm3BXFou2V7WLaSVzmi5CBRteKPWUHh7bNbz62q1XBUFgfp",
  "key14": "4YXceXc96w44w3cHiqURufDrTiNA91gTGKHqQQ4JSHP22KzdGr9SP2hGN4sNn6JF4WFKmJ755Lh67rFX8K6vxgDq",
  "key15": "4faP4eDbhMXXn4BhS9EiRx8XBfVHcYKwBhYZeTUspL3PLWimdUWhii6hC45EDqZRZm4ttbQuvBKUH5KHuoaEE4ix",
  "key16": "W7wvq3LWEDybFdYau3fpwF11k9qSAwxEFNVtP48WPeBAUunm6LkPo25AQCHLpBjnuZaZZDSTfbHBnbgMi8ZoChq",
  "key17": "25Q5xTjs1QvZf5iYvU2D5fXDNmP24CBU6ZBzkFp6UZ1dPe65kghTq4sjKmkRmyLqJ1M2R4XrxXN6fqZqjDvVhk35",
  "key18": "5fhDUbxvsFanDNYHuRR6iWnhgZuHfoHQ4idGzGkgaPL8UyKK2KxATDed2rjnWWbAjTaTJrEVA6vRy1aL9KDsUdmG",
  "key19": "2vYQRnAje9Ljz4GEXXUe2vt2ymMq3WWayG3rLZTT8ynVBz9YiU2WyEWjTm83C196k3hjLXzcM3veFVQ9JxLib345",
  "key20": "58fqxMkqXfDFMdKayj3vgU7FcFN6fGf8eG7tvShkyM4SQnvM4fYHeVhxFsVJdmprj4EBs6JQFEPeaGB9m9Y2Yuxh",
  "key21": "3QyDyxJAqhMPfcuLacDd7EPPKhCEGtFSVR7nP91uExnBoZHj1swVHz1jJAR7fk4JwCTNWVE2kdJJ2goUqwo9qDPG",
  "key22": "5DcdJNoXa9EKHRxvi958Hxrb6gNhHyKfydyyyxYwmU4TXziB862WL9SDGy3idsipNmjCfG121qMKTrKsCGMFLiV9",
  "key23": "4JdWeuvBbU8U3UggNqSggZaxNrCL2uDiWV1zui7yowHoeDqXKRG9353CdY49egXrMH2cefAyWtjcwWsCiQDpPn49",
  "key24": "5Hug7pAgpFCJgB3tTGsPA2qpVN7W5qDoLGZoJ8Xzr1Z4JMLj79WJeX9RhbBVvpJwQYkk4Jwu4kSq283bkoFZLtkB",
  "key25": "5dLfnSbK4dTm1xaHfsnyRW9yELdwGo49c55fNRWq3fKFSi4SkWPurn6RAwUmutU5F5yazZXehhDTBJeTTgZ3oFpf",
  "key26": "4h2MvPeFyvcHz4NAb3fcmHf9G6kofLT3Gof1Qs1Hr8ocdyVVhoG2FBmLBKYED19T7hZ7weUE4fEZezFKKFnMKzxz",
  "key27": "2t63cVHBzsTwkBveQ2iJN7B5J89LnsDXtrSjviY5WHLhJ68vvHmq4ZbAjoUMUvXGsLdvMwsnhSCdvhvwQhWJ3GQL",
  "key28": "2jQUcm1AdivxDCri94YfZzTbcM1oGRrcrcjZmWftTHoqZA4ubxswYug1t3Lf51kSsKMdffDDu7zJdJV432FGhPaE",
  "key29": "2c6atbQkkrRGC4LhNn5TFTkNHL3oTmhVttbAGw1zfVD2vfRyjzSy1484Mr4sLVhGd7WszeY16df6oaFr92u8f4oU",
  "key30": "3wRsnqAFQKZEoXnsjQCAhp5GhP9P4Y8u4MFwBbVkahQvKho3HDD33c3nD2iS9121TPEV4c7QTgfpW6L1xRxDS7Gf",
  "key31": "4kpY6M3poUXkaVrDbaAAfqjxcnuL26ojFpTY1DU1qm9cbEJsWMtj6ggG8tmLtHvfZkF2uzMx63Nwqrqf5LzZHKoS",
  "key32": "5v81CcYxpimp8aLZ37x8ffjqrSFBj3LRz2w73Qbj1AExnvXDHHFCTat5VZgbjeqNtaXKs1SUJW21UaUXpeVpJK39",
  "key33": "2zKSqLnGJYjzJCRYt2x61HyvJWQS5CBayztV8sWKsZpoA961p17KEt4Nm7nRya3GB3z65HwEZbQQXeVD1csQVRJ8",
  "key34": "5yekWhXsUi91tPEEZagoRQLyagToom8NdGc3TpFivJS9fTmmPCBkWABo6YSjFUgrG4uz7J2aFLDYTASmujLLhYyx",
  "key35": "3Evv8CZApRS6JnhftcYqUVr7jjPtXwBSnWMWbvR6Pj3Aa8cPwgtiagZ2H5qKSjTdCD1ewfNnj1vamwE8geVL9K2U",
  "key36": "3iaSGr2SPMiXqrTT46DAzbhHwPQAgHfXWSnD3ZFoJq2RmDAZCJ9enA8DDfUEWdsZzDt2HgWzTkHNcNrqhNr89Hkq",
  "key37": "41hoY1BLCmAJsXMPWDMK4hGsbwzcDeiQbWEagsEvHWkp6jwnnMhkLA6eZ88im8TMrmWqcAbVLGqFFR14PSgbDYdV",
  "key38": "NYxtxyzXFidCLEu6eQMcSuVLzWE6gRnYKjfzq74zU6smqxLmzsnSM5iuJP34jG6SjQR5n7qjPb5gRwZXJsLJy9g",
  "key39": "51TEBMcVS3ksEtovvJhwK8R2kDBRQ5SF2xBGSSJ9tAKH8cNqMty7TfYy2G3aSjaDqrbk2HNRMGxnBkyPaTieQpan"
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
