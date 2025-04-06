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
    "4JipGFzHn2Lzket2sWHgg39Ag2ipiWVZWBsLrtBfGfLAKi7DchqXR3hp2Lp7fZf1d4Pu9xtAshTddvrSBGTZ85rG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ppqfekBzt6UaR5aprbqrVzrA3WBFKgu4tWQvmDdSv9HVKWJGGf5j2PYaR74wX3zQqg6sgqh6BoQhCVAwxzxE5Ls",
  "key1": "HFPbTQrjrRcaaHjqVXA6uLZnh7TF8HpieqVgfRjJDGUamPbsSib91igdCs3aCxXJwtrC1hsydz5A4JPnopstNs7",
  "key2": "Vh5VvnY48Qi5P5k2rJkNdNGqq8SPXdz4vypycZbJMCwBtrf4Q9hJsWCRcSpWfzQJ7tFF1aq1sfJkLE8Qu58BSCk",
  "key3": "3vdKTZJD9RKea76iy7kCFUtmowwkrHQnwnKkV8VJew1jimN8LzR3vgLqgT3oGUJQCQBie95nygutfbUziLajmQeg",
  "key4": "3uMgpk4KgNxcFJ3xgkDbPCmSoSDcH9w7DmjrruN2iXxYjdeXLF2e5Q97YpiLy21ngPz4oJYAxvQic6CUPP4edySU",
  "key5": "4DTAAeTWtLFeV69KWBfzeFQmHB4McGbvge2ryScwKykNdpAb3gQEEwiDPrfRSimDdoqbcPzqD1Ydg5hGgz7ShWHa",
  "key6": "2mzZKYaz1yXAz9Z8yqz4oPWTGkfp2wfW8abQKy77bSBUXU1dBxqCcyK7uF7nF4KZMUKRZoAybCAtKMetnjEXHyMT",
  "key7": "27rSPRewgTmSdHb8qsPdoYvKVF8VZgurGHKyv65FmGoBgnfkEctcC8aj85nUxBvBkzvPaKX3oWqKczSaq6GBoJwK",
  "key8": "5CDvzEXFcutBXMYXsutHvNm53GbPUk1Y5NyuRxpg2NVJy1MVuGdYJazEgAAtVJ7ag3vdCZxzv5FKm7hHPbWWpUyw",
  "key9": "2ceeePosberiQxnnFV2gan6zcmUeWVytEcieNfBWbySyCF7MxA1D7mk2WrfNMP2DsKFyUQzi96XcobNuVTGtoYi6",
  "key10": "3dH5ktsQxJwnfzV1Bz2CRWhpNYhp65ZH7tU6Vj42J6G9LQaQbhpWt1RXv6SBk1U2dgarmigbUQ22TsM1ETpYnDF5",
  "key11": "gJ7a4Pu3y2N75bo8Z61hhpxkU6jJjRTBLbMhqQ9hv7A7s16wUioDrCe2bpZcvdEagykuP3y6JU7uEctR869XAtX",
  "key12": "5vvkmoqf5vh2jUGUxpzmwg2m6PackusjSxYZwW6n9GTGUDN4TMZSP8qiPVvTaGpmZZm5MksB9ijF1NDfn118LLGL",
  "key13": "3nwfXMJoswApMtSXrwAgryocqWxR1Y74J8RN1NQr9uKT4rwoKCf7j9Xtk3byivZBAcDk2aFCHJU6E6mpRXsHF325",
  "key14": "4GBLetEPRQWi6sTTWA6ZkbBVansWSGCP7S66biGufoL8QoUZMfYDpQY527RE9ebMPEWnDQ6VFhyyCHZDL8xbACpW",
  "key15": "2u71bmPiBwsxJTb37C6LGHZVG48uU19yhqLwyQTbwVbrUTrJRkexruQcxVNn4rWr1o5hxbgMq4VRL4zCVxyhZUu1",
  "key16": "3BqLtQqEn1J3p6JF29Vss1DvkMsb2NPSYoGBQMSGz2aKpVeUKyMR5UmR7sysBS8mNVVm1zNFWwRsiY8ueyRvnGrD",
  "key17": "5mHY1w2ng3pNLxC6DhgJxehLLnrduqmERn5MAa2TLDc3bfNEBi3uzwHasRmFKCa15YdRJkcu48crFb1oirGgYSPJ",
  "key18": "2GPsq5AgyRxq2nC8RmSjxJLvZggurRBh3dtdsBhTbb8A1dxo3bfNZ4o3LcnYkNWs8i9uVhkNdFXvjsdL5tWSXdbn",
  "key19": "4hNdGepW1oCwL9PzjmgU5Bd7gedvasghXt9tEM7HUtQK9wtRqKk9Yft7wNwmUVt9CdARrNsKnX2ZNwVfGoDZFzCB",
  "key20": "4tEgVrCHsEc7gPMT9Y8cA9HXEA8Tb767mg3fADL5awmU8NJGgB7MGHsvC5BeuCXToLnMApBYVxPdsD3AhDrpXPg1",
  "key21": "ESjs4TxXCtAkdKeeWC3eX9yTjmc3aLJCsJwzm6gy4uZ9tGKf4vZtMXP8wpPu8jXCaCu8FZD7wThW9R9ZThHfNBd",
  "key22": "hbMsYzyLt5WPpoiDbtYrtj7RaH5gGjsYvzJLSRCvKSbiyxzpNLcewQtifZEVhzTJK7fZ3eBptDuWVequbEsfHVL",
  "key23": "cHAkGTXj5CtZac7B1k7V2cLxNHdoVtkfMsDrexCXfuLGEsmPCgwijzEwRFuDdgvJutXENgkf8a2y6McmLFTAcLE",
  "key24": "47EtpY5BfyVkGvecQTqPMXNwtwYkTPxbc59ygAx2GPJVnkd2HmcXN3GGyRfc8BU8Xn9WkKv2eXV8VYyELqY4xroP",
  "key25": "3tafXTKAkJd6HgrMxHByeua3qDhAqcx2j3Y7raTU1SuEPhPn46vFijeRPWcmYYHUJ4hb9q7hhGJAJoDbpTY7uprn",
  "key26": "5ozi2KJqMbcCoZFsqXY9s6EeRpapKXx29ukcrHFJ3E62USuW7F6qGL12aJuChXGZFAXcrdrmgTpuVFmvd4C12Bvy",
  "key27": "5Hqcx91ZiPivhSWNpwwCaBfnkQ6Z5MQJM5AyZmups64NMtsNyip7Zn1QcNjxjzkoPoJg3HCyhN6B3yQKAKNX9i7h",
  "key28": "3PFjThNBRyaKS7N35NcAnThrkqo2GKd85kf2Z6J5rxYHKFXV2V1Ps3FDiiCtS9Qmy4qVPpGJfJBXrZnHxGzbJssC",
  "key29": "4W8SLa4bGGAE3rZTgxhFm792aZvdNYC9NGTfYUR4BqukzB6S39v6fg3qw2QhpsMaMkByWqUrH4tLHTKsPGoswyK8",
  "key30": "2gonEvXrGSCmSw822ibAZp1XmwzYT5EkWEisZFPNVrFsAaw6D4hWqaTT1d1N6MsMJeMUg81PjgnmMdn9vtDtd494",
  "key31": "Yibi9GRB4RvrpEB9Y9m9EsU77fxQmsWX1z1nJZuSMiDVdii6epacUPs6bkt1KsG45hmhaWNG1QhPdWNzmzisR8u",
  "key32": "4NeCyxn127pP5jDVMNsp7L2EcYKy51E6ZMuB5SzET6juQC8pxYdgou4QvMXLVencFgKHiQerFyAvmUgoh6GXtFSB"
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
