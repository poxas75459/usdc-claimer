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
    "3LpLJnLjNzUStoN6jx8r6XdLjiRnmbnqeX2FV7fHYNqc6aXNi1F1kfJgvKWjZGktuovxYxR4w6rCFFDTCpS7ptiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w8bmWpDSWAtseBCLEgQTYqrYVWfkNzVw4YmD4Z3XqP71JsfReEmYtL6ztW5RP16NEQNeA18coMoacHUc1XCf82f",
  "key1": "6786tHfxCqxTZTCExDhbq6CzsYHzpnxzhXrVuXrt5EA27fGgvHvDFkyt9F6ab6yaYYnp49V8ZGNvqSmxNnFcctNb",
  "key2": "5aJxk5xxETMRhfZguVRufq2VsgNQF99eyEkruuE5fQHUWajggrDPv3W2EwbnFsuM1jobmAApjguFRMKab1gcvYs1",
  "key3": "4SdVDyhC936M8VFpBmgS2FGznwjvHNUDy9exXZHaob8bzpJugCj3os8cZTjKQij3r5FPbYFjCcL1zVwA2UxPSdqX",
  "key4": "4cPyxc2Q1Ajrhto4GZje6XATs3ormMYHgepZFJ1LbrLdJcvh9mNNbshdUBBvwe9LqMLPedaqEWqJ5JDXLHyx8MqF",
  "key5": "3SWTCKZ71mu76zDNQ97zzPwWiStHsnhhvZ9ymfXK99CrMbH1V3oRtPU7CGSjMRVStxvhYoJ9gGiEnceL28zvk6Gb",
  "key6": "6XTKSb3qURRAPmamvEqQZMQnm3zmJoNgxA9DJMz2xxyAwJXgD5QB9Ba4ehMDxf7G7u6jQ3YnGbhkMGpP66gcfFN",
  "key7": "22rTWVvSXd9UuHbaq7huxEUuwNfNY6ajc94eEDjoKHVt5BZbLruBnKyxRoH3xmeBLkDRXTj9y3uM1qn3SW7gpwcz",
  "key8": "2sAjWdNr6HTtE3CUAsLrBByMurRg5JaeYNdQFrT3Q9tr6xTU1RdN1oKMyFKMiZFtWkoCZupE38ronNpvgDwx9ZXQ",
  "key9": "41q7JiETvgKAx5hFt7totPQUfwt83wyV7EKWCqpyUdnCbhGd9pEjiwPQJhnMcVVc2vnu1jmkddMEjDiubKPWYv8t",
  "key10": "5GtuvA6USx58ha3J5FTiUQXGbkHZSahXQJqSdmKmQrp9YRP3kaytrKhZDRcHHfEM1DUagxpYzUeT5Y5piFpJqArA",
  "key11": "232yKK39MsSb3jFFvGLQvvH1zriYpyvmbXxePEFpE2Q3Fn6v3dmnD5hbw8wQEtbWwDqJ55CF55wWoosgdWpfNnGn",
  "key12": "4NkGcBJPrVheRTNt4KCUGVGbDpRVPZP1LnMwDsoiCJuQha1yCJCjVVLfKZsg5YtCMzZ3qSsDmJPuf2dm4TMvtLEN",
  "key13": "2EmrmWCK8dGM8ihdZCzGrzRiGdsYR12XG8thMkCwndLQ9RTGDXwdbRjF1mwnSJmiHHqqupkL6otRR2HSEnsDS5kf",
  "key14": "4fmcGsquB3SU9tcL8NQyU4KHnwdQMUmJFu2biMao695LD5aqgq6XHAMcq53MP3DbawdEqNmuxeS75wyG9vzhC7u9",
  "key15": "tf9xoKTuxgYUsBDsJMCa3LnZh4gFPWog63NmsLXhefGJAoPCt2W2at1zkUFX6vVR83cgTHWdDdHySzVjQ79Rf8D",
  "key16": "wr5xuHLRZt9yEKya3jL66HpSvDtvwes18oprNmA73bKHizxifG4LtKmAM4GfSRZsnYgXoBTBtE49zLY4vHXq61z",
  "key17": "47nZQPvWbHhHgQGPsbwUkFKYe4WYE3d8hQG6f3kBuQvwCtcvzc6njNiAMUfVtSSoKUzrjotCYRK9iD83JPr3jW8y",
  "key18": "22Sd4sw9mhWvVQxhHoLHL3C7o77Pxw4Z5JUxxPkTzJ3SFDT9TofgYFaM4em2jfC6MBdJG9UFFdSjqESyycittyNp",
  "key19": "2H56MbE2eKB7do2fme2o9Ant5HEQDDykTxRauJZK8EJ4XG7fJFjpjRxTCmsocmrR7fYagJXYC9SatArnENXdx726",
  "key20": "p5izzNHUJtXYpANkrJcQiMAuqNKrXa8nnJ4fMeysrAEnbqjdQE8hjgYrs4Rd7RCTrLc2V3KiY77mpzkzZDMgAhg",
  "key21": "2qQ6iyH4FR27uCnWwbw4TKQ4BQCcKYCSEfsD1MmHbDXY4wJsgCagE123isy2eRGQQKJbV9bknZYf63wq79dD9Jpw",
  "key22": "5SibxBTuyRREezQpZW31BmFDXP87iYb4pqgBfbzmcbJJ5jSLwey8XX1xUjt5R5yfncyHy37QGp9nXopAgv3R6nHH",
  "key23": "5jvEP4gm3NhWqJ2Y3AJrt65V4zNG6grhCT5M3nfp5zD2z9dfRYUJGGHtEUA1BPtSTfc6cpHRuwa6rsQbtRV1ciWo",
  "key24": "38vNuLBsNqVnKmDizUHHjXw6ie8B4pYzj8bqt754CyLPsuVf75HT7ERZ2poEh94HE6eBYBLedtLdPrizVmFVbLWw",
  "key25": "2h6RUUJU5n6dmKV44ezFyubHKD78D3GyYnMTcyBfCMxrVpC4jSD71VWoxpQGfiATpSfgSNYhCBwGRRrxrkJLhcZF",
  "key26": "2Kg9Tc8QYQ745BxYkrc3MVMeK7Lippb9V4wpwV11Wa1KvkqdchprnRevP5eA1UMuiDUoLp9Vowx2sEGjaTg363Dv",
  "key27": "3d91s2m8fAbxD9aPt8jUaY1K2bxULnmTDYooPDWZK8YxBmsdx2XVcj3XxxsD6b7YoQx61H7Ukp5oBaMygsaQQYeJ",
  "key28": "4imxeWUojYKF7ZVhZ1K6NTTcbLP8uWkX62b7WVYjUZoA5BEr8R7r6craZCexpb1w4pkDdh9Q61C4oHJYo9dyYHct",
  "key29": "purWokF2MRbYMmu1mkng2o8vGMz6wPfygZ8NCZbBJofipBGnynmqwTnAV6RkTCzHGWh6emQ4YBqG598dhJPUK2F",
  "key30": "8ZVpVN7eCWeL7nP4EE6ErdMwSx79K3Dy6veWAhKGRxCbwNVB6kK6BPt3iXv2JxAT58bjyHcGULw3yH66D2GcWYJ",
  "key31": "3jbJutBhBc3zme9TrbLccb3MNmBdADGHBu5mpv91ifxWzt7JqaFZZZKDJjyGci9JWFVMZaR5rQ5sWJJsBWqShHYG",
  "key32": "cnm7nMir8Pec5qE9atxk8pXKpVwTj7yKkw4dgJ1FEDK4C1JtkaQTo7TnNVwuBotComKf7MZAhaonjb23jK2tMSE",
  "key33": "5gy164nQFVwTjxzvQhEyBmaPa5z51Qv5DZFM91Jbax8JhB6zBdyMtWkbHEsqggcNqF8NNT2kgbmC7NQH1jws7a1c",
  "key34": "4aTsHa4uaCQVunuFmAiwqW9fk3dcFM29gPukarHsKRQYvRKMaW2vjNQuUBuxx1tXi2nMAtqPYD85Jg4QDJtpLhyy",
  "key35": "3b2JiaS8dcSWx7RfZf26wJkRJ6ZahPohZdE4WaQr25B9TmexNhB6vspoPRLENF9bKLBdfokhEuwAL3bPmVmJ89fW",
  "key36": "5x2jWnPCVKHkN28SY9RMSe2inrwg1RFQTy1Ye8o1wRvZe5PXfRz5RRZdLTtLaX9zXudRot7sc9pBzTnmCMFNbNxh",
  "key37": "3gGZoVUxbTw3R7iVbSoaFtXgc1whCzMZGuYfMKoK1k6eoNFWA7iZivwCowYTk4J8i15VRHVAWAQbs5CAByNqJsxx",
  "key38": "5t5WuVpCJmt5RTbWo2vx4BCgm2rfZqb4yWp6F2tB3oQGw8nLTpeUFa1Pq2Td5r9ZB34JoLZLBj6oWgSnpgmwfFTR",
  "key39": "3sHscxSQ9GaVNPs9CZQd4K4GhAWY91the5rxDRk3v18V1K4THRfbwZ1BuFBMJ83TkRqUGZ3JN9c3f9Y2qpbk7WVm",
  "key40": "35aJDkKBmFXuqRbr8zfeCCzcwXfJ8yDMeKjm7c96jNUAWF1vv8cwSoH24uGC1kVvDVYpXeKdQdQN4QKxVvsnfTYC",
  "key41": "4BguotBQL3GQ7GGK6FU1BcrNFcCnCWnnzdZg2jqR3K1n65FXZsY6V6pbrdp6kWoTn9c3yCuyi2fH9Ho4hUtftYwL",
  "key42": "3YY3GkKLkN761WUrhhJ5i9vt1zDN3EuHEgiqd86uUfkkVNKPAvougaxzpLAskz6sgP8HhHott1WdACjB3uF9A2kf",
  "key43": "gL2fX4XejQiN5RsTJijYobRiTTBDY8h9N8aKZiELksgwm2FU6AoDGY4Zv9GXK82gyK1RAVrmJaKBwTakU9NzfCt",
  "key44": "4cYfWK18N2iJyvEUKByfkeoUgo3q31P1fJFHKBamU9h1rCyiN6gLhqteJ2hXhD4LHeohCV1iF7ioGkU8PHSBYbYp",
  "key45": "4LFktAjKeNpFM1MypkA1xw6m55qMi6mG7uGdfxBhkd4schbUtjs4K3BYBFFZHCxPK5SyVKGPjxQha565tddYQcAQ",
  "key46": "2wMexCqAm6oLnU73KDxMza4QyEP4A7ghNqVoVNuhqKkGQ3EnS7UHcGdUhJBHYgUpm1bTsC9815jm9sTwugZQN713",
  "key47": "5pK15FGbBo3aSPEJC6mSiRQy6z4CqtTnzesH75cxxXvtX1FR65hWQooEMHWX2hJuFuyxkBRN8WagnUE83Cho1DRa",
  "key48": "5p2RqtdmCYfsA1gzCoDVR9ByGxYGWZm87NU2p5XY9MRAco25nU3V2PMTBi1ovrQFThkudE9SVZD5eVzQKiGuFFe3",
  "key49": "zXLCjtUF9HbWAegs39SRbn62sr6ye25D6mqnDc1E6NfxaCLieLeZtZkC37Svo2XBXGXFD7V5Jw5EU9zXoA8a6pH"
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
