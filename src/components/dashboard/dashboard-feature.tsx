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
    "3DKHyDHpPK7z6Pvpe2bpoGr1Ecke6UJJADEF5fJKg9uGobzzmLnrS5xMm51QjA5rMGFvbHT5C8T2e4ukWByMVVRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q4oNdjgXrcA98LEnJWfiJW6QhVxpQ5aPXT8SD2i38CPF8wjEfm9tJ4mcPJPcHer2JzZgyBz7cgNdWZcmKiWBMwT",
  "key1": "5puhU5unk8oqLrpQMQa8mqy6z6mjHeb5gVsTpmxUTwv1sLVp3bjEpnBV1ECqAVUFx9tSmoXmD9aJN8LXVdGz7WoT",
  "key2": "iaMiHDPECgVVcFES4CCL1cCsmnCxwikd9fSr1AtEHMbpprpNiaWVbVZWJw6gpMPhySFmNYnpRLgMPzRBqZhN9b2",
  "key3": "5tn9equiEj6mWB7kqR9hoV1WUaSR4MQaZnhH99d56isSsh7gNHefvErkTinyXnRb5YENuQJ9oNApEos86iMNKKrL",
  "key4": "4erWwpNSnKXxmecD9x2nggvWdozwQHew6YM5CaQ4HLPk4R5RmhGF6EeeEyQQHiSvT679FKFnqKfLpa49ZSFAVbLg",
  "key5": "VczRzBLDG2mH2evkBwouN9h8yhF95yiD8saTRTGrPBrvdRiUhk68bezseqx3KvU5pdgnA6JSHiXGnfYy68nptjr",
  "key6": "37SJMDKRZz54YFKu4oPxzr5VabLEqaBT4TVQ9cu4A7zUUoyAg98GyqwseFC13hFUK2YhRxifx4yR6x4Fcx7MhmEX",
  "key7": "26avEh3j9Pn6fu1tBF5S6UDqGucE9MbSzeD5b3t5ferren2ndqTHLWypBj5tMRXAwpdLDN5d3dBb46JQZMmZQWwW",
  "key8": "RfUvPfBnbNJqiMbPgMTFQabd7snr8D5EPsPXTtjBxvPabvkqkG1MRvDMgLRXbpzNaPaYxJ8M7rxLEBiikkBpceP",
  "key9": "4YMFCMoujYF7jJqWAi3xm9j1cevNYMRbvsbtsuKputXMZGTEPYEQpNrQWWu5ahWBT1CStxNc5AaivZhtqDwMFgkR",
  "key10": "4pJqoiC9Wa3r2L2aagSs2FgnApnEL7UBAn9a6UH17ztGTWkgNyzydyaR9kr72vSTv1XA8SZx8JXkRV2pjMBtMa1a",
  "key11": "2yhjbMBYKSAdcwb4yzyc3rT6BDkmHBXx41c3E6827Yw7uAuqogxgixiyC1xYncZBEToNJGTctcLBryftbYffEwrN",
  "key12": "3dwL48xMMLAZRaqstQK1hfMLLAYM7ehYeNvFahCQrqwWPAJkUrxAGgSC4a9USCkfsejWNgCRmVZL5XFudktK5qpo",
  "key13": "wbBnKhRx29VVE5yfa2SE7D2m48dJ6V6Qbij25FUGkEUfwuVFDPUBKA9H51ZvcD3xgHitSW3QmTMtqrF6m1oQvFT",
  "key14": "3nS1SNfez6cHqRoNEfMaFJieaifkN7YWNTSvQnYVr7oYWLVGBrposAbxkVNQmxeCMLP4ikCgkAaoiFiwfpWVDnhb",
  "key15": "5aZpawnSaTHPjNyqhbuyxJmvB5DqkJW9zyW8vuoTrMfvhocNoC7dXuc21eSGEbFRShxKgiHMqYFxKd2hqy4kNNWr",
  "key16": "3KmdQ6zJ1PpEZEJQhU7EwEaaJ4VpFcJta6KWDkKstqCMoa9HzMrj3n19jJewpvrJ6fuY3swUrxSALKTMbKJpZLHR",
  "key17": "612v42xRZoS74kQMu2byPAkye8DUcRZBNuoFG3bpVp3CzF4nY1MxiXU1FhSzzBVZoZBgXBoPSXk7BgduKsttdhtt",
  "key18": "2JZDKGEQTdR4LEsRRZ2EaZgn9rXDtjerz6tgNMsgcCQsSGrkJWgdpp2QgqrLE8K9KqDn2XC7hPU51LD9Z6g5UzLn",
  "key19": "48ZsMYAfNGd7bc3Xd1jBqRMS33P2KRCzXxq64WioZf8GV4FxAxPzt6JtgaC7huMc1AomWmnGRfg4SDwqTdWaWaJv",
  "key20": "9CN9fsWFUbHtwHwhJ2vZcVVQa3CSQWmchZi95CoLn88crDYBpeaXSj34vnVVmHjDGeDrwXyv7pvVVbcZaFJKCPY",
  "key21": "4M5rPS8pwswwaPtB4euitKo7CTeP8cc9fe6LoKFYYmcPSQugmhLWs8ZMoVh5abGL9ebaa7sQJupUVV158b3aGfjH",
  "key22": "eoVbhtJAxkE2bhAYGw7vErsFnY6zVMncjG3e1dsw3cH76PzBHyDNdbRPoRa1D9ZK2hopcRPAcNuDWrznAMCwvpK",
  "key23": "35qRoJQ3Xf7zpjxHzxYDWshcZvcJXD7v3aBgmZht8mnKr77pt4pEzh6dGgdQgD7PRFnJ5CaA9bBDF5wXAaoxFvTC",
  "key24": "27onYV3xpNuhzLgyjtPDjm8x8Zn4dasC2WqG61shGmEThiTNttLBupG1w4ysWdgTt6vXXPbZPSqsanjcj7hMyQjb",
  "key25": "5qihSsgN3JYNBXrqHr8yqSRETeFbqeShPN5iQDAAH9Bt2xew2e2TFpyb5DpL1YbPq7rXZSe7b6R2dv2T4TfNKUXY",
  "key26": "4RBfFhQfoVrVMszyDSQiA4hLpcxEWJvSFh6jZ4DWUVrJUDEofH6NhPfVZQmcsK17YS7i7iqJ91smSM6sqmz3iTvk",
  "key27": "4zZ55gEgntBWw3KYcskPnbBaobTgjxBq6xTeVP4TAidVik8FzKEysKVZ24XmzmWCgkMaKtKZ3WwGcVUR5uXe65xG",
  "key28": "5zupntTa43H3ct5gagLJw2MsvXiHL5sNXaP28k5Zm1cQQNogwH5giGKKyqgP1kDTnptEYjLSi6dWxLeFRaWJPwo8",
  "key29": "5vpAJKiUjRghdDN3iHtZtRqzEXhBqWbT6RfAXcys2M8inGCnpTKaEZTgeBHxxCHUXobuNSSZSXm2dpygaRvo5HNu",
  "key30": "5KFK1FVCjNoNjniZWXcXRzqVkKrv92Jh6x5RzfH4az6h5QnLpVcqgjVqW4p78U3eGJBM9gmzLTPG3h783xpQQZxp",
  "key31": "2uVJ1fsnEeV23xHkX8TdFdi3dLogj5iY5nDbvZDNRYdehvMX4shbib3HRe38wRiQXYFoJGy4xGrp4fkP1NLfMg5f",
  "key32": "5hWpRtJQSDF3uxnKtLZRwUpVbmQhLnXAnkgKEZm9hyCxWKTUQk9kJ5ikM9H78hjrEawR1dtStNFTDs95REwhQHaJ"
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
