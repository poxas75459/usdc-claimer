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
    "3fgLgMJMvoLxexN7jcPzJaTYvWeDUM8zZ9Xwbm1pzeVj7xh1FbyHvzpcudimFoC2eg3iFxkuD3bN7wu6zF81EGLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qURKBCSeggacGRA346Pr98y1ssEswBmgT2pLoQjuB9bzPX82SJFuCPeVJ5agn2gdHqsNeaJVrRNjHaA6tJXrcXd",
  "key1": "5BEe2DU8ND6vFiZkEsBUdjNB4njHGq9mKRXQVZoKThcv7UAA1UYagk1eRS7QDCHAMG5WRAQWK731rUFqsma9f5g8",
  "key2": "5iNBqfQYt5Kotm3f5wZ1quqJjtfnF7EKBnGoH23vUptymAfL9ajB3XgoxgQ1Ln3VBqmgsJtSvdVdhMcShL1miKVj",
  "key3": "5Sz6ftHvu3bgENZM1rMtCiiMcYYh79U4taruxGe7sUoL7DMHbCecYvyQ1JGVUoypULkSoKMJJhphPwm6PTxTMTL",
  "key4": "3dNaTTBvVd57pYrPUKFQrYtpCFT9xDMTYerkkw5jSyVGqkhpGN2LVP6RnvJr7cEqWKNcNzyzQaa7bPbvQX2jtpnC",
  "key5": "3hoMTrs9nPv4jRQtH9KutcHMy2HABUib9MFdNMDrxDX9BTtoybfRTGEEWLadUBrbMXuoqCkMc6WHXkvbPVZz4tiS",
  "key6": "3kaXKC6uHtuzh6iz8arvFG6ZrxRGfvAENQN9WcLoKP5XYWxRYHELRGb1H4tUkyJnge9TfPgPopaTi67JS32zYDTg",
  "key7": "3bfSGRAAjt5vMLrfzP3LVcqDqVYZ9WDahPtgYkPrjf1zwquLfbQuisRqeDqxHQi52WZ47HcQgWHStAskocg296Db",
  "key8": "4SAnmgpx8WU37H5byPnDQhcYyRA8oHtT6LoSZ2jNvBWbPBdETC8yKF4wJ73rNxKWFpy4b1TB4mUh9AYZKoHbPDzU",
  "key9": "Er3zuRsme9rLVvXvDkCxihDinLCLA9PZ42gE7T8Q4B9xhL6JtfSqxEjqN1Fn9QTNds42J1L5CFSDjw85iqimQGh",
  "key10": "5A13Q7xd2BUyAn8z2nHxTaNecCM5qtASC7m11VeP2ns8DW6qpqaCjKEV7uAYpYVompARJ28PZNMFWoWEq7N6f9ES",
  "key11": "2L48gd6TXk1LcepkNQYzi7mubTb3TZRQvz6Ut3vE5nSjNmqASjJ12DbiM9PMHqckAKpA9sa17BPqCryUckyBKx5w",
  "key12": "3LGMrviQJGdUFMufPFBfVEhjPKGKMBnbm5GgHSQryUVDPZ7FongBqmTUYyzNif2DZgvytrTF4pK3RQ5jpEiYsacR",
  "key13": "3oYJ4C99UepeqA3rgFui1VcinC2LPr7SACZ87jpwccj1iUrmGsdviyRgVRi28hEJBH2UqZZk1mP3r9fXh2cz2bG5",
  "key14": "2nk5aYTr1mpCVwDn4VuUUwc4BysUHPqFm7qUxxjj1CENgT2YxuJxGpXbiSxByrjREQEZGqjNFboEbSK6X2jKh7F",
  "key15": "4sJRp8b8c9poqydXyJPf79CP4gJ4yoEf5BnfzWNydjicL3RDAd7SjNBGsDdnPszjRxoGYnJtzo2GXJAyExko461i",
  "key16": "3WnGATEwadNmiwBgAc7tv4UwvXtZTUTPt1op4pRqkMGVnby4TNa2RgndeqpiypiMu6XkEnartStC6nzFmkR126H9",
  "key17": "5o9YRPX1XYbh7ZkrTnnwm888ZH2kqzWoL4JGgekPk334pBiAuB7FTFbUGRkf4YVH5tM1tY8DhnL4cQgBxF8ZBSe3",
  "key18": "4LppUwVapKV7kdhmCAngAGj9mSXLysHcKa2dvBx266eANyXgkhoJhTy4ZBcLegaZJz9WQgdi5vanKuvRXPPqW3L9",
  "key19": "XrHKqovyRPhfx6CaF2tgxPKHfk9DrEFFxqF4Aq6ZuLw1P1sddJDHZGDH1dyEzJtnVCV5AAgNXaekRzF6m3DKVBL",
  "key20": "m9TFSzidsTMrfBSNFGL5LPT8rb4u1MdsL6iDsGJXyWKPWLeg1Mm4kEzTahVyVnRTFkEVjaGC3bn3vQxQrEX2fAb",
  "key21": "qNExvdyxYo6giU8oxM2xwHTfV61igHLBPT9gim8fkMgEep4HToApHXV7n6ebyj7xEoot6A5EfCbY5KceB4pexHy",
  "key22": "5G42EHPMUg6uK8hyzQD1QZHEH39K5YmMUyPdpguLctVGUN6UPKUXa5hMdfSVuvU8M9wyMEinemjeUzvc2yyv5aou",
  "key23": "5EAE1vxjwFHFXMqRoCfTHdzuDtdXVV6q82Cq9G5AgWKhoKJaDyLnnzxjaWYsrUpJn2SVWFc3sD1V6MogupMc69J9",
  "key24": "4WPtkLjLzTxPQpfxqesmcf8ARGqUhPcgaSppLMvH41UCnEHbMCTEgCFwqM3BG2zSxNYmyeJ6kNwXF6DYwUPgCfD6",
  "key25": "2xyenh4WuuDxxngekMjNjshnt5MdMowudWRutaN1MgddK7Esh3AKcUCnSsPHMR7D9AWqn6Wx74E4VPt5Wdm5xLoz",
  "key26": "2Hp4HFmgc1WDkz3SXS46RbHg3V8HswVe2WEBJxwAjjizPvXFZwCJUtYAQhxoW4pogbeaN4EcTc4EJc7t7EL2mpM6",
  "key27": "4WTD7TP6dPWCEVP9P7kRTqV7C13XvPQUMCdveJU7PjRe4gH9DKCLS3bBLQjWCvBCr9Y7rpzdjGMsPc6iLdZfYC1S",
  "key28": "5Uv4wgyTydM3KCtG9yhu2NFPwArubmquN5sj7LF4JQ8sUm7U6W9x3ABN2fKRZRv8r2HVg9iykVwfPQ2EzNZXN9aX",
  "key29": "5ZL5YbeA713NyKePQY3ZS5QuYwxMbXfscaULJtz8XxXzApDKV7nfVSDkygKUBauxAYoUSxqM2eKkVxXC5upFKR4g",
  "key30": "2cCsVpujQzrk8Tbb7sv3sj1JBek1PHELxEcM2NJMirTHvxFepzLAi93frVjNBbEGb6Xpw3iCVmtKj73TrivtozmZ",
  "key31": "52vaaSBsgoFoJDdvTL9HswqtcVpKzbor7AendYsjVpER6Bukemo4uYVN3hdVMuCBtrLLnxfKNWgenoBomNcjNwbZ",
  "key32": "3uHRAUA3n8iXbinjHa3VGVauSdETHziDJHvHPkMcR9CqyMWv6dt3v6ReWMAW1AQfWcJQZpAd7Bq9zy6pbGBuFUhy",
  "key33": "PrKcnfHDkmu5LsTM1Tk6QBArvoHTPKCx8GRQfoRmUsWasrbqmfRU97EGC7ZqkHKtPmJCAyNbH3banbFPDntvhbo",
  "key34": "5yFcizdiACAsda14oSUdHvwn9oZqucgWXJKqW4mRBDJftte2gX5UBTA8v9JHRfu6AzgWq7WwhWUguFqwMXCi4rvw",
  "key35": "3DSxbAgPyzsZm1sffX8oHxr4eJU4CEUSVioNai91DV5Gbyq7NZba4ne81SjywtSsXMgRJwdW4oiSkrZjnT1Z6Da4",
  "key36": "3MAjoXGYTiZYW3VsKiZvzY7EKgFZPj1y7rE5eYz5xNiTni68FTw1yL7GmF6R6eTfZ3nUQk3n8uQinrn4r6fAzF85",
  "key37": "2FfJnRXUWhnP83EQbV1JwmDD8LwUe9pmyUtqk6gP5FhGYhkGP79pCqCxMzMh4VP37DHZCBysExPtjvSTAu3hVBk7",
  "key38": "5hC2VYgvMEvheT4RuNxrCzmeBaVhkXEgxhU3JJgkebbqw9NERzobMHppQfm6uN1yA2NQa12RWAahsVSt4xbVRiHj"
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
