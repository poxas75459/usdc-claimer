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
    "3UixaGAMTzVM6JY4e3q6YJqM1XzVcDkfBmLcufqzzsdBPjuCXqbsLHUdqyRQXHf4Su1exuDp2SCyTD7CrW1qadWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UoaH4VumZKcTAnVfWN49RLXZQNpc1pH7ydXWcJ1iRBppUGAuV8PC4RgS57sT2819PToCavLu9jL2huKRkScfC9i",
  "key1": "4k4CSxMUepVbEY9uH2Kpsj1rqrJpMabAUyvfkp341KPNbXqYV9YybmpQ36FbgynEyQvZorKckQyB5b4Xd71gCwhH",
  "key2": "2UDQjh13iKAYjnq4yhWHa5bvjL8neKJPBYQ9ofmB7TR1XnL3knjmvN6bsQV8KDkKmpuLb2h1ZmpsNv5TTk3bWgNy",
  "key3": "3baW3GH15rLL2pFvhSWc7yTUrSL7XN7b8rfZo1tmAtzQ9YNB6ry57hzKcQHKfyRuB3hNqaf22o6wAqYsy9a7QQDa",
  "key4": "53tc1C4NbBzzW7Hwad6E1nhnhaYoXwXjqkTFJmR9P8Ksw93Qc88rKgHdqkXzbSrsVbCQ6Mkk31CCeHezGbk3rJrM",
  "key5": "4rZuea4KX78iBWvHjwuJcJdD13cJjcuksdoP6Y1no3eozvhkqZoNH8MFWfVW3aaSJWkUYn2eXLf8TsaxHnqjSiFr",
  "key6": "951FtocvQdeV1QTBUgSD8rh1D6ksKdcLSaa88yQBEHFYwTSL5e3WakvgBYNCDfphT1q3CiMveGpV2PxE852jKQN",
  "key7": "3XFVEyGgVwXGYoHxKwuYewt8tiND93tF1ZeFEzgX3aV5HkZb4Au6rGT6xyDusqCAYsXJxzKuFUFQP13iFMZKB5Q9",
  "key8": "6PBp3BKW6oAtSQmB4KNr7RVb3zLpw14Azsf2NAU9bT8zxFS3jmyGnWKQbpncS4ZfXzNNwEXLrtqec7igmZFRACv",
  "key9": "55487Rurum6WmbEQhpRbsUTWANqrSszdBC8MnBch9juiCG6fKCbbTwtKCim5gPjjpmqmSd9DobKJ39QH2opCvjAe",
  "key10": "4CgP8rw9vaQZzqQ5LwzTSebp7AGSDoLJh531mYx91BADGRKBghBw2q8LYcJ8BQWUC89V38MjPgujtsMkXsHvfWvu",
  "key11": "2uN1LCqn4ZTFPbsyMPXqGgjQSZMzeMpUsWddjJQT1beVRykfxRTowFb8u1MrKv6yL3TW1dJhPe7QRMiWqTyoHNRT",
  "key12": "4Ya72M3g2yUo9uaMQCKqzQ8Au6U2oRHV4o1D5h12iGgVTkv2aVy3MDHni292uZnkixgtyc3t3YWoqdcFcGvpnR5R",
  "key13": "Bxdb7wTetLKGYQsSnHnWkkkEBd1CLRbsPK98ugopasVqfe6uo6cctmvDszQRF5oDUPJ4ZoGDAo7oLDgzLfFB3oY",
  "key14": "jNP4QiLmCRoogH7tx6LbFdRxjpEMzWzRVJZjZNATZgjxfwsazG1S5hDMPDmvAJiq3DdhG6gYa3iiHZFyv2xSj6V",
  "key15": "3AZUsQ8XJRV6MZZpoKzt7JhSeBgUJeURZuyYAUQ9uNaxjhc23zsHKmbuKEBDKGvsQJhm8EPA3q7b9V6pmbHks6GV",
  "key16": "2hCXxAS1r2W4ombQB2Et47qzRnc1bGbeHGujXFisY76oNcXrZ4zksCPGXyWN1mC9HBLQzVDt2SGgRRa1xsYgV1jK",
  "key17": "5R6Au4WuRijBRSYfTiXf5tiopyRv5LJVHP7s9qu8a5tTm3f7UDxdGnu4kgzqGiV5q7R6gQPenaGAQDCELZMynSQJ",
  "key18": "5er4S6LiNwrh8xLhJ3zXKpMYWbJSNg2LXwk6vq63GvuooH4Ny2VgjFJpy4t7kNSog2DawPeyryVXLdNZwdhosEnQ",
  "key19": "NE8Kkbi4PNZFbcMM1L57Nudagzrdn1w21zshWoit7madaUxzmWr5y9qcRfSMknAztHQDgxb9LddoDgwaTWx1qPh",
  "key20": "2hWUauYbZqQ1SdD69XcLMLsHBQzAr63Y9DSuW9P9c1MnqWsjzUuLCz4PMpQnZMVHjLqz9pQarLTfVKUAtiUfhtqJ",
  "key21": "5zjFBHJeV9So6htreUuY4pCy1BQGhTWSehaeNej3LZm2xMNr1h1AJ3xB6cyhSzrdRQrXwkWhE6XwSJXwrVX8uGKB",
  "key22": "4AJ8wyvfruPMMovPpeauCthoesb8uawgm8wSLWEF25DCibLR6pf6DaavRoxEG7wtXcFrqejkjF7svE1ea6CdzwiA",
  "key23": "2JSxEVQRGRykMrpBM2capLRDqmfqd6DMh1XVbWB6mnYfXz44tvF4aXhn7taoWVSeVL8ZGFWkaBpb5PnzsEyq6zi8",
  "key24": "277PRRXfMdyrnGaZK87KyxavbeeADoy4Z16spHTshoyCHzmiJRrrkp7YZDNWLn3n6uPx8nVQuDJRbziciLk9JTBe",
  "key25": "2axcxy7eHvudXdYyUVQoTBcGRfgpsTCYM8nuKTrwYzaL1hpBiUYuFZwwXmn7tiw7dUHmPUavjSMYXJ162syzjCYA",
  "key26": "55ASsADZaATAM5aaNg8WRN4vKPz4CJ1RHFGuS5qqHYPrp5tGFgWfzqi2nGSG8Bouad3eeRxPLfgXdnnFVUidopeB",
  "key27": "2TU5rwHkrE838FTS26LWwQ53JF3dyMnPeBYKVf5Rq7PbW2kVQCdXjoKnsepycQfdRrG8BPCPLT8Wh8XHUSPRTYux",
  "key28": "25X5wrJSDnHSniH5ZYFuRA3X2w5DwXrGwCgBU7FiWMBcubsRUoWSCLSdrYwTnczrT6d3krtY2vB2CdTWm63gs1yT",
  "key29": "tHWdqgX7tPUbZ1rRbvZgamizpBKdiNwvWK9AjmLfrcpafisxZTyrGGSSKNhWZv8rwQqP5eubkgagUYrtrUrJ8YQ",
  "key30": "LfRSGV3gTexq3dSmMEdZAXYEhuEfHXMegMzQ9iFpUjbpSKjbL1PGVZgNNWxGuvK59gHeegyfi95EAytAyWqpRhu",
  "key31": "39nS7cVhCSiCW8Xx3aTjtD5ttzbLCMzSkPDZbdhSnwDTVpSKMaUB4dhJGc4eYSueBkFw1PuWxQ7pZs57ddGSVNew",
  "key32": "2Nko9pRcAELFvSkz87fJU2whZPxP9JVJPdvKcmi4XeAkht9DsY9PR6cHU52XNvg2f7A8L3gQKdP1pDvWqJXVm2Yj",
  "key33": "4mSEe1iuobSrW3V1yFFEwskJ6YsxDqdiynJStrB6hUSGH2Mz45xUifboxKwUjNFRtyhynn8R1MQJYcKpYwZNhyeq",
  "key34": "37kq9FPAbHoAzPTzVNhuhTRJt6hXb5ZUCZCiwXAwDWqJnkYtU9MnedzwGCvFyP7REjeDJwLhuCSTay9LuJpjVpHW",
  "key35": "5NSyRcsioXGR879mRKkXCNaJd6xz6diYCPUZS7EqgVYX1kMGyFLDGYmV21DxDLtixJWfgN7ZYwfcYA5YD4b33AaV",
  "key36": "4j87a14x4P24QJzzR6hB9AGvoiLWUpwZ91tpn6rZ6p8SYtp2iodpcQKdbPkf78Pj44bCyduUhhmgDAMVRdbzVXfu",
  "key37": "2rM8ordpfVWkVv8BvCGufLu1jE7h9C2gEnr74hAYtfgJfFiSAeY4uU73FWwe89SMYuKoTiseU8oGmyPdkAidam98",
  "key38": "3U1CQAgfJ8oNVuCczKCRX3Mq2J7ZsYNQ9QwyPrjVevTm8JNMX3pu2L4FUM9q2pqnBu5YNuVMxFKjWwbrwoYfZUdx",
  "key39": "3vYYSJ5upomneBjvHo7Zr45JwGsyQYGW1969ZSCFfAKnLV85GfjbwhDaFvNHVv3NVLLEFpiK2Lk3B8wqx39UYujp",
  "key40": "LjB7ySbW1i7dPiU1K8m38QDtKpubfys5iofnN4DaGWGE8XRV3HoTkp7vuYL2mb3vgrMBjPB1HrUSXxknYX91Sn4",
  "key41": "5jVkp3rX8ytJsfrXkhTAoa8htjSpeVZfsrrhEas1CJF6K2K5cEWMRnk13RmWXt2qtJy3CETVYkwvPkiAme1ZVXgx",
  "key42": "38QptBDvundC4ESC3cEW3fXeUSNe6CBo5DTULxChsbNR8stehdK5z5DDtJvxdCpjbLqb1WLLVehKbi5VpFvhKxre",
  "key43": "5cwVghsZmjKs9RfFn3bMfGnebqsR55FzspvLhLP4GRxECoKS44hzpoYtkLCTE3Pzbd2oH9esQcdU5N8yXz4BjgGK",
  "key44": "39nHoaEye459iob9aYKtvDt6hFbeZGRXNKVLZjJMKoXjScb2xqspuBsSCML3dPDqHwbkXhbkFCvxLSdQqMacGpwQ",
  "key45": "32rfCUVrcU1kwu8yxd19fw8zyAGz7YpvCvTgDbsPwdyG7vCMExMbzTb5xT2YQfsx53cgR1evTnV23aA5EFZfgv6Y",
  "key46": "9dWf4wXRKf9DPoJsoJMffoEN67ZzwGjsePmvTTDddhJyNramt3sEY3wWbwAjrC4aMmogmEc21pPa6DdTWAiLuA6",
  "key47": "2hXWwjst5LzbRE4yZQgj9UwytysuVa1CNmk2yAi9nPyRS3rb5jc1SgJzDLzfvtedF4ANpEsxLVnB13yAyB7CHm7y",
  "key48": "2YhnWQLjava6UUHvzz82AYdZr1aaeVLrZn8Eu4EyjHpXQ3L7obzz4tWpQPMiJZp1vGAe2jSDfyhWAzvbpgg2tnFH"
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
