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
    "32oCpyeeAcYnmSFYE6Dew1E1GmF8gafnNZHzk8DP6CVhkdNNxdeNanrFzmf3j7NoD9GDV6JTesHPqza3uoNu23VA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jtVfBahUqgnpnkWK7GZzCqcGDALfa6u7CXcfMj9WpBVutNUxxKu4bVDMgrEyFvgGkQCxEZ7rwqMxR2qQM2wGnZe",
  "key1": "5K6BquyucUW5qYwd4NodxD8rbHtFrGcL5wXX8uENDoBb5wvxW7MoPAT6SfGxABKwBt4Aqys42srezkW2GALVKQ92",
  "key2": "5WXdpw89kwi2EkDGLQtgtxQY7L5f8V1PTV7qthMnVRcHPx53XHwaW36uehQLBpnPg8FzathysSCKWFb1DTwG94g2",
  "key3": "3aqpPicfjHkaqMvLfySHo21NnqQhtSNmQjSJHjo3Lgmk4kgwnuiYjGmVTDRyfrRRkH1rM5KCGDG7gsywaWw3Wy2r",
  "key4": "41R6Zo2Hac1NTdqAuiFbCpqEQeCqaWf3gnTZ2STEjisc1wPzpAqMCzJQyKezCwkwBgBDrYky7HRpwexFAPHUBLDA",
  "key5": "4LcQPe2mt5QF1NP2DHGkYuKHQFzo1syhhs5TrPnhuNLZr49CWYw7rvbFcu9zpqgjfyVzoZ3CLnxmnXUUYYWCMUkC",
  "key6": "4NRjtQJ7QTjwv5C6J4eoLUPYD8nUUPbuKxMTppu2Mk2p9B4i2iwEXL6YJpgdY9JEGQ8SAjVBgcveTs1WP6AWTHkC",
  "key7": "5fhoPPap9MyjJPNBFcDg6TBoSZS3rgL4YX7aFDV27ZcfLbNPTzE7Ua9zmJdxQmfDLD5UN7NKXTFxW8z23T5RuHPq",
  "key8": "4kk74i6nW7NrDkMa4b1PT7AQiWYNyd2kazNZ2qzNEvRQviNa57PYPdzqhoCrT5HZvW6ixF8FfCyMv9qGdBGMYuxr",
  "key9": "YavRdfi8HSszBAmnt9rfH1o4XYgAZVHwZbs7MTUrV6RQdBP5U26KNYmc7w5Xdc6ErUffrvaykFczjPY4rAicvGq",
  "key10": "R5WQtJna8DHnmumF9SaoeQv35bjNHzrZce9ZwWA3zigZ3rD6PFULudRM9nxydc1Uwv1f84t4j7EaMCZs1RyaqMj",
  "key11": "Q5Dx5kT1JST5eT9qPMxCbHfoGpEmog1FACrcHeDw2PCQFxySfS8g9wX7aVwZfcxoNZyw9hkmBZNvTYPYx396cTN",
  "key12": "GeJme4Wuvh2eVdZXAwGcew9tWYfbc8WfxDY8cg1NNbmh3MWEu44TcVBtYwHodm4Jy5EzSPNUgDfoqTrPdbmuXQe",
  "key13": "5LY2k9j6LjSaJQy8ugLkhGgrHJyRNon3sWtvH8pyfJML57jdH6tMpqXqBBsi9WUbYszSgQsEn2mojQJ3tjdvtyvd",
  "key14": "5X9tGQ6qMBghoWfdQSQwUYtjGvH1uyL1rc4turisGZEcmTpBuUMBMpEvfdBB1A2NnYYnmTxGFWAdrD8eeYnCirGf",
  "key15": "2dxk7NtEXKttLTABayaMDio6mXFBdi9BqBsXTyJf7tTCxj1ay8zseAj3RNsSbazFWQNcuVQrTFGH5mgkQo4DzQyG",
  "key16": "2G8WE9UnQCzyQfYrwUH97RMxY6BwNVAicsJMYztcXbNmfAsx2p9KQn9dg8VEUs4jR7LBCw78jFBnjBy2Les4gy6R",
  "key17": "5Habk6wFqSgrGFFJnqW4aneDAWL5fFvRjAFE7xSPpNMJRbSPqg6KL7MMeztT8rEuuXPacy2D6kywPSiDP859WJ82",
  "key18": "J3SLHP2WKC6jCv72HBp8Sfq6tiAsQ8mB5Sureqvi21Sfg3xRZJmV3WruodQwoPyFGo9Zz85XcznEPgajZghJXV7",
  "key19": "3W6e7bNLMw7vgjtQ7vduj8FHUKFCyChhnKUvP8nNooAnXTCBcXyQAoEeTbfKwPv2FcAmfhrq7yRVifriRpCyL146",
  "key20": "265QL3D5XJjjcdmzPNaaXEp3jrHTqtxgp7d8QYWuc1SHij3zeX3MtgrZhueTyy2JXj1A1jWUQLSSUiFocomBENpd",
  "key21": "Tav5s2L9zVsXvV1Zuo6wudWEaZzjC1VbEJTq7qxAm23h5Sq5u2mGxnspgyU3iMMEMLG9nBedYqv9doj27XBQJ7b",
  "key22": "gu8Xr4fNN7Ex2fMqeSc84xNZiLSur7Zu68FQfyaPaDGDR9KLse19FYuy5x6Votd8GJ8ua1t9YaCMbyqSK7qJkfi",
  "key23": "25oF9NyWSFywQjGKbZMY3YuhzqMgDT7WSzADj8sG2dhbLxk3j3yvprUHzX7UAC3YduZpVKz7Ns1Q5adS1qPaZtC1",
  "key24": "4jWdghq7EgB1KVsgcJsiNiEH3bMUysTJknujd2tn9SYGGkNFXMD4DKFk1CQkLLnVp4eqcjT2x96mgbn1CdWWCm2z",
  "key25": "9ux7iB9J2mFRr22VULMr7C96mTEzLLckZTiV4YLiDP4Y3dQM2Bsu7f8T4v9CN4noT4DLecidrM9KnETzU19tmHB",
  "key26": "4pHvNJk5ztpuAAXU9sBLXD32jf5kzRC7hLGHeKg8mCBWyGuduty23MVW4i3CNQKFiYjjVf7DMesVby4AvvWbi3Gv",
  "key27": "2cyEJXBpkoCgy6eRTTHpchTrVSBeGY7kYLdWQhSTNCSP5dKzxEojoRdfSL3zR7Ecmk59DGeQVkdh5DqG4xWXTkSi",
  "key28": "4p7hcjJ1oCduXHwdSjAYBoSbsjKNYrgao9HmCDBgvv9RdMeBD4Qq7GsBf1BM2hLXvYx4UqNLoBgraZPU2ZM3zTvy",
  "key29": "565pvGucm89Uk1McWBF8nf3pdQsWyF8fGPgDCYhns2XxKq4LhD1eFysd37tGX1d6kx9TShVcoF1T1BdjBGJcfkZT",
  "key30": "2MC2xssE6fH9evx1PGV6BDTpMgQdqTis5asz8XaWgfHxagQQYysVYys4ZXEoo2LWtBcmWkVENPCBVqKYdVRetnAH",
  "key31": "TtnSkKGyXRSnDp8GycYPPXEwJ8mnCUx6UKEo4ssFPu4HonsTt9enLAtN34aaFrM5GKn5KJMRb9jS9aR5h6CPG3M",
  "key32": "5yLQfMzqSLjmh6xrmyHD7f39zSD2aUhYKj1JG93sg2T3ohiJXtVxBsrHsqr7hJ1DZbK1Xh8NZzNv8v7TLi1BsE5C",
  "key33": "56x4Yjk7QSaxQh8x5jvKzqcTJQTSxc5TVGDZvJDcsS7jr7HC67n5cHVPqEhXVYNNFrm9Q2LbcLjYJnwbb3eTT77N",
  "key34": "5ajaSUzFDgFD9XF1pVyWyg2g1JAcTMfv1etSfbRPELzG8zny3CMEgLm9aiUQchiu35to8J23YVjkuH5Cc7tnA5bC",
  "key35": "3XW8Xfs4caocK1EEjEw9HsDYfWBdEWffq5f2PKqdigJEk8QSRoz7p7Pa75GGZxFnbXuzQzHH5qApZ4VFUTZpjMy2",
  "key36": "rfQgtmrWU41rWGR81aYT63Ybo8TJ6REjrJCEfVXXzT46u7oNbBtMm4ZLjEin1MamdHwSmU68qomz6kvDhU9QLTt"
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
