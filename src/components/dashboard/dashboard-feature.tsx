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
    "48w3zYgH8hNQi643Td8VhC7DVs86WpQ9V3n5buajcbt9oAXC3SNrMqLZQC6K5Qi4PgFh6M7zX2hN4a6B3BnKb2sm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "spZkaRKENdK9yM2Hs66NAL6KHrQsQ8fRh47ZXjNg5xi7zF8f3nfWdFeg4y2kdeXJQf6jHpYtL3UcDRjYnLG7j75",
  "key1": "3jcxSVkWjd3aCK8MBiPBxw5RdCmSe1PDdMV63Npg2UDesgsCg7RseKnx5Rj2MdTPAcs42fUcnc9ZbEGLxepXKMUj",
  "key2": "61jVayqdh6fwVn2X8RcVPm22aTxWkBq83PF1MdBtrbsEo4zGdXYdRDM8FtenXJC31UArGDpHqJJhtt1T9qEVa8dS",
  "key3": "47pFDLTns91xE7htmKGchnnP9rJWgWQnc7M1LAP6MZWdMiZDm19jk531PqQ6Rwc2HYKviVk8PMnmVJPn5UkN1Mu3",
  "key4": "2ubfn9ETxb5SRzK6XXvjhiHwi2fsa1FAUhERME9Zg6iYdftS2fNsZqW8QjRVqrTbLagQnQeNpmgE24Ugh6NnvSkf",
  "key5": "4wP4Skj8tDbgVdoVw9JBuVF4WSftmbvUQZcHp8MLdCJgErzk4zzrjbbceJv8PznfS9za8AnGAtaD4ngTYzN4XAu8",
  "key6": "5PaxABwDQmvTPBzsxqRvitYdWhh6Mq6FiXxGJSpEPCvrMjDAEwL3zzjXbvXvxkXVthYV41yD8ub6hYSxUzpTP4ut",
  "key7": "2RreifMxz8wR9Zkzr6Z23H7t3yyTnKPQSnhg5WcrjXsn7CuqL75V7hrxhXjnsUZuNDE5wiajgg3fDp4yvCcJuHJJ",
  "key8": "2NxcrbUhirQdp8UsDs8PRWES8nUWKoqoXz41RprPV4iuhsNKdaBTZSYMuoMaSbh1sNWFhkBsuMtN2B4LwpHqWUT3",
  "key9": "64RZy6EqodCk5KnaBtg263biT2ATF4zpgDxMFBJM349Lp7MiixQFfcExWdpqYWTwGLWQw9V3ZUMrHe5BBUAK3Tma",
  "key10": "bx6ComWraXLFgvXUPuUZ5mzzoRQmh9iMPCUcS19Gp2xPtFbTe6Un6ZWQLixoibzdiRmAd6f9EzTiLo22V98Kba4",
  "key11": "5rhRreKcWdFh9BHaoNUDqZBsYwzLfBrteXKkMUwzxETigK8XjkmosQvE6zGsVUyv1QrQDxz1g3c8ov3XEcH9MgBf",
  "key12": "41JEqZD6LktT8tqHab438gVWn5Ff2zh6GDvWE1TeoxdahGhuF1pkQ9abBEPLGop9uLuzhwVGwfttdC41e9JrsQjq",
  "key13": "D2NAEGtCAttcMPN9SgzA5qjFW7DYXHWRHwigsXjMc3vLDN8LNSCW4AR9kyDRoFq9fNGb3Pqq8zb6a8VgpEEfPnU",
  "key14": "4Tpkb1rMNxiTV9VjGxSHG8TXuPh9oTL9RPWcLDRvCitvnpPp1cnWRbrgTH3cA4Zrrv3ce9uoceip5awSXnXLmuYU",
  "key15": "5XWJNN7HcquVqCckT3UGuv4Howbnjd1UvfRraFsy6r7qgJ2x77K5wxTgMNoH64w5ZBJaPbfWXSLUy6SoEgWjPhNs",
  "key16": "bhZmn7cPQ2aRrjiUGCnV6284NmUYkCcYwUsHTGh8rYPKuJhDeW3tp4q2ZaP6wZa2kCToJ4HYP8dvxVJLcH1jhvJ",
  "key17": "62s1R5jEvrqUQNCwudFkQLrjV9sbqzA8AEjo6awfueQ7H4u65zcQyYTsMsJCfHFWnAvRUAShx6G2JX5uoEZFuBqK",
  "key18": "31y7c8MQLVKhDP3FCtDYgK3uNeMrdtYjkAQcJSAhDB5gSEyShZR2GfnjzmjzFWSR7NdvYyjm5CnFYdrjPKFWHrfM",
  "key19": "49cDptjqaMFTZP5d2BFjZGpF6V8yoz6uhCreRGzz1LYmeKMsRs5p9wy8afJCVfnV3JAA3y6eQhqfL2tMadTrmmrD",
  "key20": "2FyJhNT4sLEemjHpvNNmmFv6X2sG5L1b2Qaet9XciFVKcGUA6pbNnqqLcV4KTrU1kAdhmbBZURfmTuMVS79xsykE",
  "key21": "NSTrBHJDiync4LD1F1QZrR3yKJMrvJNLKynaGquFSEAVSuQ2rXQGcFhhRUWfB2V9KQYRe4p4rNxpCe8vyJzyfu2",
  "key22": "4y7mmZshnCgFmpTnUoiV4avSxXY9A8zyVjd4h5Fu1xhpBFSWBNFjqsCpoZkBqVVZzZHd5Mm8gCBipCVez7fC9VMf",
  "key23": "4ic8PhKdc8LKzAuHjMWpCjHeAY7b4YffDPNScrNqHo2ZQiqNqkzEHVyZfAbr2f3iM3WEgqUdXei87KqvBo15YtSd",
  "key24": "2QPkw9zQ5ScgHn9kGGmapC9k1kT5g1AfeXPoXj275Ah5pEnfsXan37KvLnnXMk7Xf74M9wYLrDmWP4Fa1FPYJBLc",
  "key25": "3jdB7nQaNjZ2uA7DkxWAoo6XUYLfWUaAr95yWmVhbMJkEYHrfhn47nhmUv9jf3mgb6EkeFTCGDbc6kbfE8S3JNMK",
  "key26": "47q8N8Ye5X1X9GWYDn4QXhRLR3nzqjCs4zaFDFZqdcBhcKhywfr79TtmWVhB8cQwM9T5yJUxC9TR46TondsvAq91",
  "key27": "tg3qmGFGRcHNW1REdVBj9VT3KkkxRThscj3wMh1de8X4FacpPyv4enCwLiCo1uHrMTVxqz6f75oTar35LriFujM",
  "key28": "3jeMi2LVEkswtfFoGVBEeq1QQGDdGTrTdYfHCJfbdyNB3L86kryLWpH36taUE2Dx26EzR6qRqWrwLNbiMjCRYYMj",
  "key29": "5uprKNzEBiZZrqRXdodatgdmJcErPJZ2zzXcBgfcn5FFTbUQ2uU5RBRCyzGYsG8BwN9WaYVhDLsVGi8yTqNFHkin",
  "key30": "4BUaDn7LNTj8WpVUqtgTjT1wgHZfk1FvhCSw4ZVveKutrjwuriU3wZTypPsy5fnvNs8TcG4soPiavb1DoEAVsgde",
  "key31": "eirZ4KaUnG6UXTR3eCK4Hsp2BPiR3FBe66unxwELExcM8m5FiQ4Pgu6MdMqZmC6NAc7F6bLKhs1UeUddnxBc3Jh",
  "key32": "2hmConnTPL2asxPnUZm279nNTMVP8PUWR8SFUeXxruWrGkF5hnZ4MVwEZVYnBoRpZhN9ioYoaYz7vs9PAuzPUPJL",
  "key33": "2fBUd8hExczH4KEWV2rQKkhaFPaa1ykcaiau3x4S5buCu6Ee8qFpg8YfVcNLKVaYyJStzJnzXUcJEAvfRpQ7Dj5L",
  "key34": "5x4rfepXRmoQvpzok8z9Ah6LDh2W7y3jFbS1KDbbxw18XxsveLT5H4YF5s3BPH7ARpLqfq4rkgciXwKYpdXcgVkV",
  "key35": "2qpHLmc4nKdiQf5BfiUrr1BGC6HkJbKR9dyBbsi3iTLUGh3ihTQosbTWPbF8ruTtE9rtpNWRgAkdSZigg6rTxCVc",
  "key36": "ScNjRmPxoQWF8LX29fQEYQG1uCKQLT6TcFMkAZFYHfC3QgXRYWEu5kPY18rGWxnrFXVRPD1ZN27uoEDaqxbpAut",
  "key37": "416ZN4F4RggDbiSVeuMWZiN763hbK2uBirWyPAL52QXE5YM33AMCVZxNbEmM395yACCw1oMdDHMqAhYVxuRZPsx4",
  "key38": "2RZLEBG6LYpQZCe2NUjMgABwvRrQeqJUZ6Jobp4HLyzaZm4cVCg1Sn75sSyzKy63khEnbE4kn4vXry57iZMdqd5A",
  "key39": "39wJi2WVZsGaFWYTT3FkxtsUCY2tfT7ZTt4Q8VWGJsD6C1PeNd1VfE49QwwnnyegwKitLK1ZwTLDcm7xYfgu5arm",
  "key40": "5syaruDKTT56aNdZPjEw9XdhBuLf6dPs99fGxtjCLpkXVBM1HgHnhtCaiqKfvWfJccgTYKgzzzvtR9MwSL9cKH25",
  "key41": "5WHaHYsZybuqJrVSEW8S8QGb89aYiTyzJZ6FFkNJDcw8Lv8DPsHRwNMde8niC8ggzgp2GkR2b8LDwKao67zR569s",
  "key42": "3oaQEBevvqPvnfvSKeLDxDMuRs6zCxrRzGmEZRiVThNwJpvJxcpPjp7kBJPAZi6u9vc5g5yT9T9xeC4Jwq2xLgYk",
  "key43": "3Unor2aFBkAU3KbjWS3TEYSSxjG9t9waR41HuPsL5Ppavh19iMHpEp8rhULu8JJVLsNYsyqE4Yo5GNnJq6LUghfh",
  "key44": "3ZNMv1imPyYuAAHE6EPQNuXDEwJ6MHvNipqULbf46rCpyjostePs6fzYyRxHsVwn1DxyZL6Qop6pvm8Hm8Nu3jg3",
  "key45": "46yMmzfXQnY9KLFm9Q5gs6hafPV19S6H1wafRBznZktUZAsDwnnuJ4Cq4P7bXxKTem7Lozx7oBENDAjsi7VtvkeK",
  "key46": "2E4SbybTorhs8aAe6HogsqSuFb1oYrGtcs4ytijgxarEcYQkPjqrbHJkF4ZHYgJ7WWpUGoboUv2NNQJBg2CH64x"
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
