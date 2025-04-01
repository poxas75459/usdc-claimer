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
    "2P63bqnEHpgDkcVz34nLDksS8PrFWFquzEqYTjFGj1ttCeBeP9FBDMNU6bD1CMWn3oisBvTfC6wXYNowtfJsF8Sd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34subToswPPt3hCaw98mBajUh1x8in4yw8cVK6BbFHx2n2HLotxMzQkL9MTreuz98aKADgzpXq3SCuN9R1bro6mX",
  "key1": "fr3TWTUAJzVNdKFZf8pf3WPJhbqiHWZorn4Nrje3D4jRHW1xJbSsTtASXoUaVKpAF2frAEKwMCWtfGffNxjz3gt",
  "key2": "3iSihUYdJoW1wqJCEDYu8na6jvAZioe87uS6BotWxg2J6jk1qP1MrbbzE1yF7pFdPUsc9uEas8rFFadRVVSLtB8C",
  "key3": "hfPRtdviyxPCenTT5BGPLgjY2TanSNZPXsBPLyA6zsKgsoa2zp61gdnT2MgPMzmxPahbSZHTXe9vytMSVPSz5kA",
  "key4": "4u1RvjZD56xVfHc3SL3JE2ESRUhyHuTDScoHGV2N9tZPfk6WsCtrDbLZugvVE5gZPSzAkqjCsho6mv4D3TEFPfUx",
  "key5": "22rvUneKpaHsgWnY3ZMt44TBYm4N7FsswveEE9GUnaYaAbFaqcTbi29AXNPMc1H4CQR1y2DhjgyyFPh9upgTMrDm",
  "key6": "2ay755zoRZwsMGiSVawgUvcQNEuN7mgZHfg7mXhJP37yYkyRB9XHqPaEAjfNEwpD7KYvaki2pGtgjcjyyn3r2mFk",
  "key7": "4ZyuDuzhd64Wjm2MLd81mSkqBxVbBWFdLQ5b5iEqaP3kLZxdKkoK9mD2yaNFpHqrrYuHtEmqceUtW4Z8cy4Up886",
  "key8": "Au491HsQamtTzephANaCCVwpqajgfgkyPteK9r8z5yVUabhUHmt13qyWaBLrm7UaLeYWc6bXEWXrNkS5oyLheRN",
  "key9": "53dPS92txcfS6KqKqGvBp6pt3UykUpK2SFPDL5JJwK2oJ3usoHpPiy4ZR9zQ33gYh9pfMCRDxcgokmnGtUyTmD3D",
  "key10": "5iPkKc2CHPbTCJEWwFofbyZJAsH69rT7s1B5YzMsKbmYNKdtipNXtZSdsWfo9aBE2H89931dgpxCk1Z5EJMrNSBx",
  "key11": "4YBSxnAbWXpkcrJtjmih9dXgHBGn7mC6mTVUuAt4xZCptHMKm2jWS2SCoviuqM6NbcucXx1kR7K2EFhUKW8Zkiq9",
  "key12": "3gEUW8Jkfmxcw1QCqiRE8Ko2uoknjSnvhwMDsgkeAjgHXPwpKZULqi2CmR9eUCdcQ11dDmmpq8fTTFo3m5MXd2Z7",
  "key13": "2hsBGwW9sU3HCHsFBXXw5PNNBWNoZqZBQHrWEa549ghEkYdd1MpNUQqzyUUDdg3QmVygk21iDW5pe5mb3NNjK1m1",
  "key14": "2FohVS3TYUk4Mg6h88dNNusJrVCE9hCv55k34AybDzNP5RRnRszTmYQDU3Ynxg7TW5gntNLXcMuJKrVEr95WWMXt",
  "key15": "3ZQBdBiFizTMPY9CdcWtvHDUNw1ST4xWoS1n7aZpbLFNYRFqymKanj6vUg19nKQYPrFiJ4ygQ9TZCHpwNLzoWDXx",
  "key16": "4efPRA1j9ucy6kmXecDVRUh8KteNiDFjQq9suJ7WoP7m3N2cyTJtyD7RF2JkfB7xiCtieagu2eVrLjm8hH42roNn",
  "key17": "5VqA3M3xTWhSCRVSxpQeC76hkK5SZEVmurPyB7CeoYqTt5dctETUXQFVi7j2gDEDjQxNbRgSLjP52eBGBneRjj17",
  "key18": "2F9eJDTsbjFWXii5eghK2bgmD3YSxcRZpJHHwo3wtsneiTuEnikvvjxSYddCAiNATL4rRjJabz1JmeMAEDsVApPe",
  "key19": "3yf5BGoWG1udV515KwMKyTaCNmJf15jCWeAF2rEnvkRyUbFTyoCqxgyqu7oHjaRQgAAMYaJfozTA8EDqkS4FYAmC",
  "key20": "3AKypuua27PmnhuyNwZgQu3YUgNMmV2BurjNBAXQNrVLqgUHvX8U4wFqLqPxENqvudrfhV2htuYXrAgrsepH22Ps",
  "key21": "P5REFX1YLkzTUCzT163SvRsgfVvmYWy3z9fziCGdzvsHRAiyuNDNdAVLZeLesRDefzbM3aHGmPVkbs5yGfyRHXQ",
  "key22": "5WSGxVvHPFsGQxSpsNQXKZKv4hXvF31LFne4fT6Y2GRW4DmDUPRGpepohCPYv8ETfgUrmoW7ky5XxcVrWmjTZPCF",
  "key23": "659ecizT4W2kYHqF7QQ2AfZnpDsVwCEzjZhcRJZZ2zYTTG9tczNUKSkF1BZW8Zyy3MvPt1UzdJyP9ugyhY9hFCcW",
  "key24": "5uHpoRtwoBeTKFjUTfM7GZ8pBgwbZsBstvaFbp1eUCvHYxMphD6bJ8Y5J3LTu1xqmjCz1AT8n22XzraWmqdJAcow",
  "key25": "5iQ2gkoFnvWvtD8TTvPuoutYtQ2C8hg9YAh31Ld4DE8dt3MNXUXe2TZx3CsMEWfLUaPACwaTv1Xhu8WktMbr8Ebk",
  "key26": "4f4Q7eUiypeoXE6uiNzagwMVWKjVuBb139Ux1toUTLAHkg5DyTa13XeTQ437haUEjyZhEHvEKBBRhHid2gXpbBCa",
  "key27": "2aK7gdFgWUFXuTPSotoobRc6eBsvC2RUJkGTha8ayj53uYrGtnJQTkhTaNAok7yHUP6Lhx1vPg1Vs4s9vmkYetVJ",
  "key28": "5aXiNCd9KL3wppi3t7XUhxQAyn837ubU23PyRqaBnD7KWPeTDiyfduxriqmSjEpj1bha1eG4ntWA7Gg6tcmJWvMX",
  "key29": "5tFXsqXq92Wf4wut7jpEeLoRZwKUtyHmwXuxNdQUZKqCu2QhG8kzaqfE4CF4ZerAP7W5xm6Fg4B37S9Nj97nBf8v",
  "key30": "MmUuFhkTTfTECPB4sptzVGybh7bzMvtNEfHB3jHXMv2Cx8gGsHfF3Ceddx5QUPawgNN9q23jLkf2dNTtbhNWBwb",
  "key31": "Ppf1dstxUJSuama2SaXm8kZJrKxRmruqYsTR2BcAS7PAkfytWEbj4KipLj8njdr4NQg6xbTpatoassJD7VkKVrH"
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
