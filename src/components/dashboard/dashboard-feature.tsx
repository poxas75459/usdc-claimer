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
    "2T8W6QnhKYt8zEtq3LqfuUgihzyenLZzskdLZ68R6SmKtbBTerVFVpryUY1hkycgH8z9TD9k85WXrEJiWQ5cBkyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DDMaZbJ8moEPmKayMxc4eQ98ULaGxzh7NvySAfnbgmBsy255fuMqgSNRXdN1X7T4WoCAL4fGMYPZZd1njsHi3KU",
  "key1": "5JUKKGtx4aHkwpw18pCCPhrYt3nJp8mGoTgJAgZ4GKJjScVAKEfW2Dau3JppLLRfGaDDyjmku3euS8g5Xut4qQmx",
  "key2": "5jLHqgpkCyGzbnmV4k5LYTZkmfQHjt3oNtGWWtzA3z53fU1RctddnyzkUUXrJf2YWvzifB8gmj9SfQdkPxM2eeQw",
  "key3": "51ur9a3Fn32uFXy4e9pxf9rcpdaCD9yxCWwf8xaixb5VQVKD1FcJd6FFNs3SA7qbKpmiiPw1hfQY1jET7GuXLazU",
  "key4": "6A2A7sdcVt3dESEfBeJGDxYt69mTHxtNwtMUDDozw9o8q57FCCHS3xhaK3EvcWcFVsPyegeBt8PshXKNeyfjMUg",
  "key5": "2zSkc5Biyb1XTzuPmoStPox8UmBxQsxXH2WQfEPcTjegdpuCeAESFEU6F2Do35vr94oVR3YdYNXzYvdkoNwjcSmx",
  "key6": "4DF7tAYN95CAcvcLkpX1Xu38x3HWK9ZtiyYkwx7S41CWuKHZg6QhT5bqfqXqAdA4jn5jJnWWi2vy6NoLV6LPBZk7",
  "key7": "54iPpCei7PFxjhPwR5Kptub3qiRiJfsygFsQDTh8MMmRS5qKDHbaczBoJTSp5yPgf76pAqWLi9sP5HmEcGS2oWxj",
  "key8": "4fUEsUcvSdUkMAkyntUj2uLbBVVYNRmBAm1RPbv6g1B5Pv1bHdLAj8YAJk6vqYfgRTD6CafBpAkbQFVTmSZpWEW",
  "key9": "4TraPbGd1euCt532QdMrUAfeNNcGxjZK8CoEPGo1C5aGRPTtFve87vCUywoohYE9YQA4JdLRejGc2JXhQ8U1Uo1A",
  "key10": "4hfxe8QaCVyZFAT2qUKSysdb6FbPzWpc1S12G6EFHALtkmeDMXTXx6sDTX5Vqde3svN4ehv9MYVKecGBGy6vd8zY",
  "key11": "4U3LLkXrreUghTWcAQp1PZXQUWdXxJgpzzxrorVcGx24ETkutwtjU8jnw44UF51xZPKGRLGGsjFfHcXLoV8c5Gx1",
  "key12": "5BtthPjK58gQbsXfz7CqhzVNcMzoqRPupS8WABAKwewdHQxVycBUebtW1AF1k4kB6AdB2GiHAxmRhmsmqXd7b25V",
  "key13": "657rD5zkRd2YuvXocqYV2ZEmeunuuBPJZ9LXBXSPVGgGD9jvThV6RBobHif9b9Urp4XcYpMANAXnbaqjUNmA3SUk",
  "key14": "5WHWE3s4R1umETD7NiXdf5n4587BT145L8UAoVZqjAjerAtRt1DGytJ5hsGZ915w2DAmNHWPRTuSMTcvfK76mSp3",
  "key15": "553RCBrjyhY4Qc7D1xp3xwSYbvkZb7B4KcE85cKnn8coHrp8tX8mMTe7TMwBHokkjAPndu4zKyLEj4Eu7BE7Ueys",
  "key16": "5XBuS6Bb2EvBtjYrpLSfKdDogcJQG9gvQKh2KCACbz5GisNgmgeBQvfsaC3rempQpQFyHSKcnJhfE6VpjA7sSRzP",
  "key17": "5Vc99auvtfSNJzPf1nJhndf1TnA1oHzNnr3EH5Astdqs8d9xzSxjuvthyKSKxobqaDqzkg56y1L1YLSb69Pgp1Ei",
  "key18": "5oEmXsEAfszNJjGqZpVciqaaVHqic6Xx9z548g4vxHwCfkwnYNseiJjjwfosHaA5qnUmEyVwWqfZS6aEgY7aJyHA",
  "key19": "5aUFMTNPmehKKAhAmhM4pswEc7wXk2inUYM6MxPNe86mrm11Q21598YnGtb5zo5V7c8Ko8zoPGkBjRQNBBgWPHfW",
  "key20": "36YSkHA6Qdcoj5iLHTTiRgir8gsopQDSXYQgtmv9aBnDMJgaC1HDsGrSJqSBh7QKSQ1y9sLpGuDbVwKaJ8sNKNUY",
  "key21": "KST8RFt969BEWmu4pYDUCdmTm1ctdcHLHLQoE6HEbAwy9hyQFneksBvwxJRo7zMUeoT5x1cRp2g3udNdUYAHcch",
  "key22": "kfBMgY3A9WQS7mWyVAaYLputB6fHWcLTbqMArTNaSTiiaR3YUiGmT9NLLYgQ8XbBEXJDhwJd8CMgdCrGFJKniMF",
  "key23": "SNtPcv7UWrYjucLcJiRmkdYfGTBijtSn2YbgdBqmmZCpXNins9uBZYnDZjxDTQ8HBHe11MLobBBmJ8saA6UXAJw",
  "key24": "37ybFjoXLgn35EakSKCX5wDQro8rR3uowG3huwPPmLZAEwea1MuDANTCFzmcD7GwZaiUSg3DHosQudLFCaNqgqm5",
  "key25": "5tuNJsdhXyBUpTmF3Y1uRaH8WeaB27bSFFibMCg4qAU8b45LpHViAuhrxFP5yGSvEwYEivF1adieaSoiBoJKQtYA",
  "key26": "HfisA6Rcvdi6k3S4ev7thZJuFxfoKG2BEer8cQ1CRp8Hmhnfs9bXR1ws2jxL2pKkQ5WSZpFryC5qxwbBAdomPsk",
  "key27": "5XeHGZV8Hqn7f3MjLeq5yu58q3EtyU7aDjHitUdfAvwKR2LAXKY15wyZSqJTVec5g5eK5iUJ1A7KhX4vso3kD612",
  "key28": "27TDoxvE45ue8mprM51wKUTfAKBL7knv9UANeok9idyucAJXFhpCU2gbWiqBLJh22LDyEykX7fVkuqRUEWCPe2fo",
  "key29": "37yc7gnRSDZYXd9sz25HHQc9zLz33jwDSvFujB5X9ywFzj4Vn1e2ogRdjp8JTCUuQnp5oUcrjYqBxT2q2TXyTubz",
  "key30": "2QqSUeWXCvDNHcuRUvP4cGceZNs4ZwhzGrCuCpisMj4PStYe19351J7U72Gc7KzU1hqTDMv93wjQkbtqMd8CKWc9",
  "key31": "284WuumQrnjuRC3y4L5q7dPMS9TMGYzSqnmWjMvyKXa6RRCXggirSLAuro5YirsfTw77H5sjGhwKh4mJqbAZij57",
  "key32": "3k9zLcHqzy9YHPE9j9up3yxYTQxrZG36SfbjsUifKsRS3hqgEbDab25JoB6gJ59GvLFHcAeTa8kgZckyqrJCq9Wr",
  "key33": "3PVQw9v3GPuVxZiT7ZrSmpdd8kXCgBEJbSwN8ALzLR5kZn5H9Nv2fHgFrrG3SLZKaSsiEPJp4QaKfkTKky4NapRR",
  "key34": "48r1nHcWJbwxNQjXh6VsF2sc2z266iYrSyJPgDmrNTtRv1HVem9gEA6cAgpBsfrcxnU38qSWfzuy1xvc5MoBefmj",
  "key35": "4BTy1UZDx4cDCgxcp4qUYHaeVQ9B12qiF6TRCVrW8pVNsrFFUFYNdSq4KWaYK7frBVUkBNpV2hpU5qx8ztJzZaq2",
  "key36": "3CPwFtzqaXg6VyNRrpo84exqHq9Twu8yofRzmCz9MrpxusXvUv6rtBgt7vJNGRqDg4dJ8sQb4iEsipx9o5mXr7Zn",
  "key37": "4hd2HSLpZ5MDRds5L699xVj912cid4MjA7bdudceNGZt5AacF6VVPbSi5rowm2o2yd9xLUh68dp9ji597bKQCixE",
  "key38": "4PUR1sf9Bwcnmv3c4tx82T95932wuMt6PdWEUaqfbyJpFmorkfscC65W1eDNwXqJiAnAZL1oQAnGtSZWzGGvCTYT",
  "key39": "4vFWLKAGmhJQCh3vkEEWQ9FPdE6gfrkT2fZYFYfZ5BjUt97KAVr1Cr9irfnT85dJht7JKHZjAVKRCBmTyWHjpgbD",
  "key40": "2HvbAJsWQCCPot5CDVjaqUPYXoKtZF6vysavAa7kkokWxw99b9WvWXRR9iVU4VJb3WjgGh82RHLKk15ZRHmuAibs",
  "key41": "2j5sidcTZ8jf589jZ4tfaCm5p1kbvf9QZg8gMCrg9m7gpFuHfg2XMiPhkgCzvfyueW97Dy95EkttTB4iDmbf3yzV",
  "key42": "3jiAE5BhLiLGCXr2LtiXFXZTRyP9rHCsTqer8qfaZTKg49Bogd5Ka1ENZKpaoQG52UdABZEaUD5vyhC9q78CnN1p",
  "key43": "5SRNrKqbrnBGQyX9yTK5KCYpx92fFKJ1RYrdJoEsZJKcY1Bquf5vKcAMECk96z7GKTx2xgUPDKeaTgRhBxzzkXUn",
  "key44": "28d8iVfT9PdmTXukfenZPEeUjA8Duf5BWQDgv29jXRfuvQ2aztgnXEL9HobNPjTKLiJoTteCKVy2CaFz4zLXKZZT",
  "key45": "tYDZfT2mm52qNjarSognvwpzPMURJT182YFaGD3vs4HkZByCd58NWfUovi3bM3SY7Zi5baWEgt3CgXgawGPgRst"
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
