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
    "5e1pvXmwoVuQffpQ2YT94UxnTA87njSpCof1q1TmgieM5RmL1pupzsWW51qSpMLfSGqGsHF3kA2PPmmdt2c2CuQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EnNRaDv5aTZtVVNY3UkCnVWyPoE6MZijnQ9R27EzSzp74c3jnHDbWRLptwiM9bff32XWr9AAA7TyZ7peZ9wuv3D",
  "key1": "zYh4GQwYAnvdQv1SdYTiRfVfzzAbguFRBPoyWMRR7dvDLCNiC91df1YSJJxGs8mjp2j5oDMX1Qgg7UvMRVwCD1y",
  "key2": "3fgE7jwndnvE53Psh6sMcN5bHGqnwG3zbD14XKux3KENuno32U1CwDCwLaacu8sUN3ZVYBzrvxbkTTXGH6yvqspU",
  "key3": "4boGrkqCmEQwHMdVGW8gSBnr9rHRbDCorMCxNiZwA8BT7VT7ijQPKPbWrgBBYc9xPUrW5A4LA8DJ8z3qHmTBSxVx",
  "key4": "2ZaGG26NkCU3uJqGsUKZ6GLo6MnBSW1tkDKryWjp7PD2wjoe6k6jXXmRAtXnKbSaSRfLTJfDxwHodE7eLb9tVRY9",
  "key5": "47kKQyH58UGeemeyx2gyuZUwtZtANbWkCZy1CCKPcC4QbYUwg2QcEdGsyGNm8sKpkAs8CCnWeQbNXCjKGQLn15NS",
  "key6": "ERqy1jWvG4xtRbtPqvWyQTanhTHoeVxrmz5cxJkDWUpmRcT7xW7Lp3afKrq23QAJ8FzhrjAPDAcLfGCZs5BJLkB",
  "key7": "4XKnKVavduH7wvnvVkDHnLXkMyz298nna7Qc5oLL1P6HGRGgTMbpN4qgNd5AyypAVYQiuVhPGngpb5soXuey3KcX",
  "key8": "5Sgo5dFeKiwz1XSsX6EwuipP52H6WjF9nkob6Yov3Wk6YZg2HaUtf9hznQS68tVxUVRpdA72rM4wNNbqujVkPQji",
  "key9": "4ENVcmyjpZCMxKsRuG5Zxwa5f7EMb9stpaZLX3vi5MHhcpufzJS8FU5TXgahsjgYVEXc2eC94bWjFxfaS8s4AWHu",
  "key10": "5DKa3sN9CxGqNrLzk5MEKH83FCnPKPG9cQBy26ZsA1BDZxDWY2nPJxDkdXHnsccG4Zj9PAFtbfcZgL4mNrSSZDJZ",
  "key11": "5XUwqPrbfMLsjcLnBBD6iVvm7hAm5F3g7T2TPZLNqrAUG9UJcuHyowEnNh15pHqKddiPxvTbxhN5EuXuZnFKBgyz",
  "key12": "2cDZh4zhfJ3vfiG5MwhiGES9dT8HrxuSR5jK9TL9kVVcCNuAqVDhxNfm5qdFyvJ3GNdRwfzrdMzRLhzwMeAWLUyv",
  "key13": "63ppGN6bFG8ifPZi3cLqHgdz13yWDToWY7ueu5p2NRxEkjCqExabfHooFVNV1jymWqatQ4HgjbcZQt4xgnNRFvq2",
  "key14": "3ivESDMniqnEFFKthSrVhTYCpmAWHBpi2qDDFpJPj18xzpdnGANVzhtX3ydgjrtWF41yhG8ymdfzYYRcKH9LkVge",
  "key15": "4C5LgcMpinDiRCdDi6viRGTGjnjAtAH9BYNCdFfgecYobFPpsKaGPeDJBdXYzsHYHGpVLMtcC4HT9nNFMJFpsETk",
  "key16": "3HnR5AhnfZ1rs7m4AgZ8g8DeCmYr5MGbBF69rVm9Um2YC6kxaKVhwwAmbJHjXe5NnphSjmw4pP2tY4qqdpAo1W7Z",
  "key17": "3NTtvXqxpVdWZsA3ZgjFLHzv9gyFpearqtyYP6WkmMh7UibhMH1k7KHmTNNE73p242RdBkXiFQ48zY4roxGShAwY",
  "key18": "2e5Ua3eSZpe9jXabq8Y9i1GgPwa7RbcEwx3pZqkLgySfNRapAG3FVgtkey8W1kpQQsBsdb54qE2hSmdeAU9iKP4n",
  "key19": "ommFXBBeYwSaVVwZuMua4yrMsScSgTRX5vQTUTv9dA4skzeUahtHJDbueWJGaTWPixuTTh3wZ4raV3jBT7TqP2e",
  "key20": "3odrV8QYaR1fwazamBtfoqAiBS4ehSXJHB6c6WQ3CtjMXjX6xqwW6x2dvNmfmErgM97JgGYBZK9G9egw63pTRCZj",
  "key21": "2Xrt2oXiLnkmRzT9bDKoKVKbiBtVPspxuMV8UhvHHbH5gYunQcwgDTdmtbxmQWrAsBNpAYztEJX8PNJ4YYifAsG4",
  "key22": "5LEpZu9nBeVr95ouDXiNsET4zK6zFUma3bAMXZBoQ4Eosvo8hE4D4x3Y6nXi4MeDmz89a15e8MGe7FkwfLT4pQ92",
  "key23": "48H6o5Vc2anwBfQM1zHL6NMfjEJVuEvJXFhjTYX98SeqtoZ2iz1Dc4eaU47Ph7ef7WK8zx3AymQQbjJWPSc1ppu8",
  "key24": "4M7BxsiToo2tEwfV6tfen8KUktis8xf8R5g5SeKAiXCZQZN4Wc29AwyPhaGDsW2w3farTvY5zKF7CPUjp3JZHyxm",
  "key25": "3NjBpKfypRqVC1Tq62VBmh5VU8wKbDxn9CFETS8VQidiR8ZXKvsszpxMror3w3DkU9AFT6E73bR7SDUVPK3L4Xfg",
  "key26": "3TqQvSbMbMw1L5dreGy1TxL3kp6py8DU3S7kb8hmjuTDqjQqfe54TixY7Rm71FcbHGautVGQQHULVyVcW8PtDumW",
  "key27": "2148eztRtrctfL1UcEsqemSWGgtPUcNvBjtZ8NgfpoHjiDVoXU968QeotDkijKD27YvcGviJtnz9tLcCLyRmYzyG",
  "key28": "3L8jGXxDLnP2Y35iKmXepksQXCMR8QcD5drDNsayGLMAnAXzVTvPDffAFQjQ7KT9z8mVXbbPFjSu1YCpC6qJrWi",
  "key29": "66Ami3yL6YdhzNWfYweowGJ6Ny8nirrTo5NdK3SgDMDeMXka2aUfE7QTGMqecq6JU48t6gEZkT5aGPsuByVRrfEr",
  "key30": "2HRnee2Makq4i2XVQjc4RE4FVz34RPUxbm6tfteykp39HXSjK2DnzSVa9WQb3UNde3jpeUXSXxgFezQKka4RqGwo",
  "key31": "q45V3pHNg2ZsErNHcr9Ym5g8XHY8HqVNnFGM9ZWvdki5JSnpxWRvo3Z7t7Tes5iee3z3Tro3Jf9d1gytXdJvKBz",
  "key32": "XThLof1HZzh1HxY7zmkSntXHCUQ3GGpBFZsdKPzjsXVC8jTtDTcoRAq2wvLCWeixbo6aZmWK6dHQpPX96hnfmUS",
  "key33": "AuEW2Njazh6aoFNgQrC4H4adNpPvra9GnSJ6pkJ6r6ntLeuGiKBN4emwSBKTVhNKdhXQwC4uCqZDew5DxCtXr4a",
  "key34": "iX48YNTVkgGSHuXGpms7BoEf2rutNQS6TEpKwxtbgMZu69S1WCqcsNTpkQbLwzesnyVkVwDiMgUWcsig2fT3fDX",
  "key35": "5DHsqNGADJMNZG2UNpzQ5A4Evuqgj2AWbUKrRzPSve2Wtqe36QqvgBVYutcYN3xEqnv4C4d1DvJ2RznzmZ22kD8v",
  "key36": "3SaHwGPZD5sxAVNbryjNr7hjUf4rpXUR3iTGuXKCpbuYN3KDkGpat3q2HDLpBoh952n6JMKKbTa7sjdpZpUEAUAg"
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
