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
    "3mKuhgVbrKWrii3yDtmSFEPXP7CMoTVheMMoj2dtqHQDNSuWKpLKyGZUu9hxWWyGQxytgXEoMVHmpJ9vWnWvYQDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4icBSyaBexCcMsyJppWJ5EoAriWyugf7CFRGXBB2KY638S8Dghshi4ioNXxgtTht8Xn5cZVqiA67sBrasjFuLeuW",
  "key1": "3riBhUHqN4Xzm2At1KZcrQo2x3QHRhsgBzZvN1Ft2sM1KQtExsHXkHWFMaXsHncsPz2YaZrMPQyB77Co1Em1fWSb",
  "key2": "2odECrB9xvpRVtcnBmyYma6oaJ98JNyLR8MH6SvbFSawwN6LPrmyNVFy5i4bUw6p2bp9rGE7AJsaFXrA8bWAiem7",
  "key3": "2tMfx5FTYPDYuXCAcfz9FFCgtZWuq29TpukxUwVfKTvZdpYNA3rnVrcSVJBZCF9pphTJWK47RYjLVuZJNoBPmMRM",
  "key4": "ewjns4jwCBzEXai8aZvT2moQ1eiVA4dLS9EDsSgAQiK4RxaupGeG2yuikJGEpAjXNmRjYXBHJZYU9mevCwDAX97",
  "key5": "5RtFQcrxmWmHqrUgWoR8VbFrpvJztCExdGDqGCnyhfSC1LVAyx5UBJhDCHkfL3kMuLT5u8BfK1xSYGCuPmqk7GE8",
  "key6": "5dLTFPqJqVFqJHZy2JuVZTGVaJ5HEEKFfZJWKQVh3pEygfJVMsabZ4efzEPHReD6CBbzAEfwvcmDfGyN4crXLk3B",
  "key7": "4N7N95XrY144gxjdGs2bKp8jncuyR7Z25WdBwcUnMqMh5kfZSzPC5cJjyLS6n3CxtaWjSP31wBFzqG26rRy56huR",
  "key8": "26Nzq42gmWLwzM5reygkNEmucMuauRgzUthx24GwNYMbgpxfBS9JK98XgFCMQaRcM3bw3WdzxUYCqPBu9rYyd7yv",
  "key9": "2Bm4wVUbynaTvQJHS4URFD6WaAYu4i44v6JMdD114h4M4Mw5vKgAkg5iA1RKVo3rcfEQdQmG3zzBiBvwj6cG2Noo",
  "key10": "2yP6xf4HRTRahmEujZTP9ow8Jdekb6i7MjDKJCPS7Yh181SvnH71y6qDukT67KAzk2YAi4rZoGRcQEV8XZTh5bmq",
  "key11": "67QkcZRkiK1v9DDGFz5gcANQJLytqkciHoSyEMGNrGEGLVsKLv4n4fJ9Xy9dYQqXiNNAs6n4gEJ3KogcELdC3AWw",
  "key12": "41tT4STNx7r6QpymjpDD4WNjqF1oY88UZmWJzkqs1y9sJa8wbToApPnLMTvpURGFcSywKGwp2irEC3RDRD83bXzm",
  "key13": "3J9JBRNko1Vn1STjJ5BGf874Fq1c6AFRnykfdDgeUa6qeWp4trjXdfw8G9pZAM4H7eXksFZQBQR5nh3ApwUFcSYD",
  "key14": "2kpWppuVF8RRhQcyt2gbL5EP6CH3utcDSEmE6TWTutgTR9ok7VfxX8a6hegE1bPdLqJNqN8GNUYHy7eJTFkEXRhW",
  "key15": "1N9ixb4yVYJ7akpbu2e1uBo2RMxdqhJQTxvDMr2VPuYf4vt4qW9Yhs3DCigyRmrHwMZT6tfw8UCRCLPYAcgpPbR",
  "key16": "3Mpcaq144STbkYfWFYcBqEWTLzUa5v5ZDczWcMSXfqqiEAmH3C1wLDisma46SHT42brLuPkYk89746m6hXVGBKPJ",
  "key17": "4vvN3MmP6CBUNDfs4orVyC2UmPa3Z9TMZ7rz53H6hUnWB4uhTG38foLa5wYyKUGHUQdRhFCyUPeMX8RGFPefNqdp",
  "key18": "Sz6rF2KChNxP8mhhhr1SprtdjANPSqXf63naeEdxQpdg9eovYuTYnfqGPgaTX77r9PSrfDGFqZZa2miZJqhH68k",
  "key19": "31fUewCGsjKTPbZPDkkj8tRx8BzL4onoMXQDaGYPTJfoENsns9Uw4T4hA7VBwcnfuF2zAFtAweoNEE3tRWvE2GK2",
  "key20": "4r28nMBERRqcFjyZg8xe4BqLm3LHVTsj2AMHS7zNgA98qkbh8vUSW3L6Q6bTh71fGEXXtTC1JHiPu8QbqwfF5fM7",
  "key21": "3RNXeRqXx8gWMei6iKrceZ1Bxied4bPALAvCZpuUGTbSELwe4ZvRQ6smJGJeixWLHNt8SAhvDGjX6bNHjFKfByq7",
  "key22": "2Dfqr16DnaUsnd9d9EitSHe5FTdrAqArFdL8NRKFBDebBny7U7GuaqLWFvLNw4romJN3fTufNm5bwamoN678q7dP",
  "key23": "2VH1NEjRXGhxftzZaJ7pebZwHLVMN4PkqD5inS241YYYCbMm4gqFuB7FritUn6jgKY8sGrxP1jQVCAi3wT8fy5VM",
  "key24": "4VZSqZEqacaT2VBk1hCUy53Nr1SGZLuiag6Fhy7k7HxBvuTwpUo5tv3EWPrz1L2ditMKdQZgHakPAF2G9qZVQdmz",
  "key25": "2EBMrpNTTCxEW4jFfp8WStnxbjVxEaNkM9533MW3B8FhVfsujLjtK4aR6hbSc73fjZG5uz1PU1ydTphmSfnqf2XJ",
  "key26": "4wLqcPBkGNk4U3en2mVz6vA2X8GSdp5CtJhRU3Gi25EtcSDKRxPDmaQzu6qNPtsBVBYtr1BMmXpYjV5VNMs92Kti",
  "key27": "xWX41GHupYxe7CdwiExb8Y9xcBhdHxXcE9uBqYJTCBKF26TkYUpspAJEDSwsA9sAtbYUJyUbRESsXAbcPXwzZKY",
  "key28": "5rMdggnd5q92dE14veoxPYYy33FMyEMB4oZsQcsaQk6zk3jrwhMQVLhvSaNL7gju72BX2sT3YPHhxAgKFuYuLofS",
  "key29": "3iAmt2aEzFotSkYu7yQdFj9kHA8tRo5oUi2npTa1Fq4UzGikr4obyaG9cM4y4h8kyX7R39dxbvWrr8iA5vx5giUx",
  "key30": "4R54xPCcmJvx66WykzgD6iUcYKwfeqbbDE6znugTq2dstyfAYWzMUBADrDwkez2FLdTLA7hesqCeCGTkawAhksV9",
  "key31": "DFUaXLFi9bKAL9wH5upjGRCtfeRWTwEydn3jFTXXod831Pj9euwSDyBzQXtRid5tb4eTB64etfxq91ykdYvuyJ4",
  "key32": "3CfVSh5TBaVZjhs45SEhHBsxHiHXQfBEuXDaxkQqy7qTHJA67GSmps4Lhvc4DsGSLrHsfiFJY6QvgRCRrV71wciw",
  "key33": "3iQDM3qC8SQVMbQydA3pvkeEPzgmkAQFc4srnw6R8u5aXKc5L7Xfred9PhAQBe13AxjTipWfKEWabfmXoXgAetwr",
  "key34": "5uk2u3iadEZY8ELZBpjhvRecjz4qLkUhQDAaThaad3FktSyYgD7D7KCYtHHxCdstjrhFwfxsaniKe33LmcztVMcE",
  "key35": "3jkpa5e11kPHSaYzSJ23T81QkgP9adPqbLPALcwD6SRyLGNi5Gcu7f3mrioXSdXqfnjdZXjKb1crudtu91GK9pmU",
  "key36": "2NmGhcCqEATmnuHiuwJix1G2XuLcbJYCuKaGAmaUTAm3A5zQA4vTmrNME6WdyYf5MwCZXQUdFz9FUmokWV2Nymo5",
  "key37": "E4AmHaPwuHtyZ2Px5e7P9ZaSq43iKybWytB6Yb5GSdqZq1ooJQQamaE6aEoYZax7dMKB1ZeahtTfNL2L6UtDwVB",
  "key38": "2kUETB5qz3NnswRXhfBaiYiQD9G4ydMgk9Q9VghSA9VEixWwsY5avCaJNS9xyjPj5KP9G91mWSi8NNxknrS4sCpd",
  "key39": "4mDjkxstoFVxxjZrxLuNFP1Xtw5ESRYHETs4oB2df7vZVDZnivroemZimtcAkjdF3KzQQvSBnCREj7o3pLwjut2j",
  "key40": "58Wcv6NnJymsx4UJr1b5QMS1ePaJwSprj4BzZdjdNFZeYUcW6ZdL8R2x3oNywZ2y976xzi2Q2pmWMyZLbmUisrvm"
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
