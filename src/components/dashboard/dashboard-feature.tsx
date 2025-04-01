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
    "4BnvSwWh3JZ6Mt8XJ52LW6uNtutZVB91PmHWfr4fXGrrT8MBndbuC4NMn4tF1hrjxoKccjMzo7xntL41atHHerCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m7H77c814p3RnfGGHkoJagg2qb4jFTbGmUrRdERkDXA1QiDew9zRG22X4DPajXPuuQnjKTSeDc69X9sbLLozsoT",
  "key1": "33sPB7oSWpunpv5XtGpgAT5MXhwdvX5pPaUdtocc1ZsN3tKC7CCXDp8kCX9p366ziDgdYeGTknbvzt1fpADN8mYe",
  "key2": "Lhs8Rue8FQpKS7dMo89q5Cioh8JQv1FAuYN9mPyrVQKTXUgpoSmmJDSrHeH38otdc54UVLicTBt5cU88CsAdD5Y",
  "key3": "1y5VEEgwpvFQgMn5YtmwBNHY3pnykB9DvSwmjWp8fbp2pfKKxw2hCiEDfAs91CnF8aSwUjyuWLPCBxYXEeXBVTD",
  "key4": "5MNPBRSwpmkGzd1cztn6n5gNvwM2FwvKAXTnDMMjVQw5HixY2EuePxvuM4C8PEkEzmpnX5m3rBBgcgn7jWfejawp",
  "key5": "XwGKV9BTc492ZGXVE49w6bvgRpNLvdngvNVsxQ2U8tpVSZyFzZCs9bRBYWYLo5bNEW5PE7rH4x58NTUa1bnuM2z",
  "key6": "5iFoT8ahsrsP5mbxFHstSRDcFvw7RYN3TNLCxcgMRANQDqKcWVTMBB4SPxafmzAa73x3QpufVUoxMrHcjsC1p9JB",
  "key7": "5Z6ve86cTwbfsikuYXRkK1rdyErKWH1w1wj2puaGnjeJyiRNntQcGhkbLDXmMswjbjuamhK3b23XdMHgFWDqEHyz",
  "key8": "X13AgiLLyFSvRLqAuFaNgoT9dmWtvjRTSx7xyQ4EXZnTGLkgxFfFEGPDxvQz4dDVBt7yUprTG5ErQYhiuSYpfVK",
  "key9": "5iJf6LSx1QP1ohZfFWnZE4KL9SPjz2UFotBxXvmy3FZ3vnGu1gJigArfrMSXPPFACHhQE4xEHwm9zXv7jE4fiRQW",
  "key10": "5CosoSMmWeVyJPVif1W1xHqrK5SSbwScYz6MHEVfTsxcTbtgvLERg35M9KojTsrJB6Xp95v4svCSravLb6pRWiWL",
  "key11": "4WbSDCe2JpoDTVXGfUrub9Kcn3VuG1bQsw3nXcgaZYBSye6fFwm4yNEskMQgXNEUePTszP7y4P9Ls5HQ2MW5Mq5b",
  "key12": "5YiKXddXSmYXfqYXQvd6XCbuxMGqWkVG2Lw2rpYgA1NTsbR46q3qXprAdKA25LmbjTK8vQqakHDSQMEzaJmWqeDj",
  "key13": "X3rFYsfE6S8oJwbncth8VrYspcThWvQwMiirAjexYygWccXLxgfe6MiRnBJqZHmdjYMsaBkv5AK7i6wY41d5o4K",
  "key14": "3H4UobVrBaeCr7vrvMW8pN9MSBMyarm45ETJ66ZUHrYy7SRSTxLkf5NGVKKMwhfkBQnZMRUtWgfeb1Ge4L8yfZ2e",
  "key15": "2Wr9j2M1tUhn6XfQWvuSPEd51jpdW3EWHJ4Xs2n3qonC9oJWWHt5TKBeT8g3HvNBU5r9eEQT82Crs9NBPAExAEdm",
  "key16": "2V6YV9PQaFR2ZLbWMebdmMdewaxpTqi8paGxT3sUw8W7osMmzaLQKFcFS44q8Zzj2rQnYTTi4HNdFqmF3G1qkY4V",
  "key17": "48gXWEV1wKRQfQx6scV91Sh3Aea65VYREJ5WNsAqiwKAgdxkik838pZ53745tTs7P8AufrFWn2eazHkKgGEmCW2V",
  "key18": "62gbgkrKKkX7jSq7RYzzHV7UiJwfEmNks8ZC5xre5DD9XkyQUvQfB4h42oaJWDDzD8rWSd9cYmgA8iLu3PctqYDm",
  "key19": "SZVaigDBgKJhuUpkQu9RhoBzsc4DYVHScEuKAp7fLSaBKZDN6nNN3oR5JCuPtYQADhikdA8SeK2WZdJA32GokRy",
  "key20": "2JmHX4AY8qWx9ns9cKoCVZMWHYPtmz2QQn2iGj1aB3hRfLouvLKMrcnC3nQ9Y8uAHtaF41u6tQ1JDJnWhZxYgwCf",
  "key21": "4WZBuKLqdhGEcaKsVFGe5oXXiGAXvSTW3k2EsqFyudtkJFFrn1xD5eE6xX5kpxd8jxzo16zKGFR1uM1EUpqtNTwc",
  "key22": "57ruyv1PuMGMtHM2BDaHVz5J5Q2iLXjVqbVfPbu9bj5vLRC33ww5WWWJ91bzdCMPgRaQ7W9NwpzQ6bXKbdJVAZAs",
  "key23": "62Af341Kfv4qMeARmVq6sdkCsjwg8czrJchAcPBVobwSy88NzTVV2CEcxMnoY6VjCSfLd1xXmp3BMk4mowueYbAZ",
  "key24": "586vLwybRcAwc4oKZoYEvPzssuPqG4ZFkfriXbgBLsueQ211KHNgXo3GV7yNzqT9gP9GfGYCVcGX2LtacUWZv95B",
  "key25": "uesF9zbieKQv1fvy3p3CPSdKyy2CoPyfLAUayydjEzqwFSnhe21DCoKa1DmBSCGh8uDGpRYxGEAqX1De6nVJwRR",
  "key26": "2Mxy1PenoGLzaEqXotu3um2kZ6UaQAz28ZveQrpzhkv1x5WJfUZfmm8inJ7ntwPtUrFounYhj2qHcdp7EkAFXjXF",
  "key27": "jngdgLwPtMnrYTYSBNTodboTSPXX74PcTaiNmHGmjfBZ7QX7ZcVDzEamPzzHf9k2dVpoDRHSwNQemRVyu411D5C",
  "key28": "4WVTFps2zeBPEQYETEdyXao6VSwT83MHxgh4wCLupp6fYq6FmtfQHSrZfWfoH9p3W5xvc4JUZZ38Jrptn9f25VVo",
  "key29": "3GakzffPnrghLxqYBYQxpuZAkk2Wyxn2ekTLhTA6yKAMvVK58D4YwKaDz71bCDqfxMX6Yd89yYTPDbiCGvzfLH9s",
  "key30": "4uvZ79kxTWisLTMwTyLyrrZeLaqct6AhEFUaChL3Wo6a4sPVkbirutWakS9GgoGydmS2Lb2qRPLESk1VhfYDnCfT",
  "key31": "3mFkCT8eznhczeq787cpQvLuxCVNnhyJbG4AD5mmS4P6UFB8Xghe7BEdrDaEozBFbyHegDKGK27mTPq4TfDobQgU",
  "key32": "rsFSg3uwsprMFciJufNY9P97Fv4G4ud1wSM43MKPwJRcMCuGbmRVexwKanDWi8F252qBCv5m7UoysYFyssYbN7j"
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
