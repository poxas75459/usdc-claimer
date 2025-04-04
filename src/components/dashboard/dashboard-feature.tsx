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
    "24VrhsUBfyJsYoXEZTWDUxb45KGApMCDzYxZaxqE8cfVo6jh4AY1uUnr7X4saT5KUfU9A2UWcYdNemsKteMuG2Ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qGi2MGGcxjR8AE8J6PYzUi7DniTcNdLTHF46n8EP629378SJWWvMitk7d4HWwmyvhS7aNhh4THqmDi1Tu6J7U8z",
  "key1": "43AMG9Q2DV9exW6BHKTNn864eo5MHaFAUcgQZeHchrfKrdfdpMF9RVqrAPFYKpCvpcBRL3in9vdxfFPUqwEQ2GTJ",
  "key2": "3DqaUAQDicLr6kKsAFAco8soWrwB4xvVux7yDNcWbL9EAStaoHPbYsqfZ6rXUPkn4TKU3ZkW8G15AywvXCFYv2fE",
  "key3": "3K354nei5xBb3jBpibLU3CZRe8qjVxXT6FovCqtudWkxM5JcraJmDjtBP1eDph7mXEHWwYu4KRAUFWh8KGBMp8Fy",
  "key4": "5hfHQMhUakGLguWnEYhCHenDUvvTsVHWsJ5gAg34U46GcTneBMar7oavtgmQ3FmEr9ftHV1WC9WEK98VEdycGcFi",
  "key5": "jJZahrpi6F6f7Pg3t1JpRSqoSPo3LDHAvHF13DivQmgFMAr2RVLwMUMD6rf3vPNpfWwtuGH4RxPrgvXSugcn7F9",
  "key6": "4DkcDAm2nvTLXkgNJxDw2y1t674wcVUjBFzXXbh3wo7Z9mphVVTbyYGJACUSziPHfxJmsS3A5cUwYVbMK18MHzep",
  "key7": "4XJbAgJ8GvwKi9d6WPF53JRn3APVsDUcrmNeraB7PAPuXymSv9x4uiSrvtmWMorDBRdDgGJ8S11Y4SHWE1kQHSN7",
  "key8": "537hXYpNTmPfwYYdfLL2qmKcVn6vBpD2v6iJ9scQzG8mh4JaYyqNoyqQCahGHnyARCGLXUPB6ogW1vdB748uknrw",
  "key9": "snxoLki58BUtaKgyjd1U5A2RRF9BT6T6WsRvbcJEKSHpsNjknW1gVz1Ee4AbkCczjowpcTtwykGmXYhgN4rBYAs",
  "key10": "5JfnHScBjfpLpr43VMusVJmWH5mTR8XGJ7uXFL6NoN6UJSpgj2zWuks6WopyWLqcSHscAUXKQ2fLTdSUV3ifh8Fa",
  "key11": "4cMaAkPxKVp6FUKMyZuS7ZE53fE35Jrp6tSirrSeNhD7CzViofUVoBt9pY7EkXzbmcoXevz5BqrVaE8c4L4VVpCE",
  "key12": "2XKW1VYEaKFJwWECzEboEmuVfZexxbv9TovVrxsjtnb4fTwPPHS2YnVM417nwZZVYsKo9aUnBUKew1WGHBqB4n9",
  "key13": "3jEVxWG81vw4WSW6BE1FZcPtTzJNhTWicJxv78kY8UdSf77AHp5j5QDWjx395HpqQ9Gz9XhrPwVX4kv2WTmqipfo",
  "key14": "5WrD3KTWaqJs3rJiFXsHcBBwmoWXUfMVvPNFjVj4r2Mj2G4eHYicBNuqznr3A5E8bGjQHkCF1V6C6B3AMELasXWt",
  "key15": "5kYSLdCKDcCsJwSWMDpJ8pgWWYdguAiH4cffYX7Udksc88vnkKXRoNcK7qQ3or2x3Nnu4psBd4JnMVWrKWAa7fUb",
  "key16": "3XQpiBu8GgA4YZXR2NFfPEqxonxJu1uedievpjARiWNFoT9q79wgH2ZqENseKF3LD6F3stjpAUvKqk4RoifTSfon",
  "key17": "V8pi33xRVJcwfZKfZqtmUb6ufin3ZWsHN9zXKzxdqEBRKi7BbejMxA1hqFQ6TDQiE7CDdVeodKqm1wLuJho7Ydh",
  "key18": "4MUUs8Yvx8xsh8JYbCU7NYwrwShZpA6VYDdQSyethED6c6A1pTGwKbZSyvqtWEv8AYfUV6Ap8sYayZmaEcc5u1np",
  "key19": "5GcroEFAkQxJ6J1jA9QAHzYKb7s2qMpKbupLfUiryDfcfHgA4DeQpoL4pVojFPyQ9taUsGbiTbMi7a1k5pAFUvTz",
  "key20": "4g3FFXCiTAfBHxV9JU8vyaKzvqncVptbS4KG6sfJz7kUYbaDbaXeESAuBfSRQtEsgvdJJGpV7X2gXFtmPhKaLsHU",
  "key21": "5vcgVwqN4Tgz8uLvm3Citme5JDBUnRpmc1m2g5zKGap3tUGGuRhxJr9i4m2pTtGkDZ6zsx9gxtH1SmwnE7eq6bBd",
  "key22": "3a3PYpFTPUhz6cCxBFF2sTwWuhRHzgUnX6ZyVu4ruVZw78vAr7KUbVTiwvxTSbn8usSoJu5HHbNxawMgUCQ3T1i7",
  "key23": "36tn6pz4GXEEzkuBYjLiG3sBek9bwxkmXUYgEBC7K4VW21oqCBFah3QUwLdp5ukMfYRj1SQ1kQvVWwZpTXfUfnER",
  "key24": "4euURfyApsCkPXsCmP4EbTN1pH4JAxF6oWrzzmskkTDMU1MwGwJGHmu6mDzxoFYf82eQ1TDnSfQ5tyMyDXbeWJNf",
  "key25": "2KNBVWyKzSNaJ2WWSzzr51CtiQC3k4kexF97PBXu8rYkM7mPxxNDPTcAiAWcrAmAx4nvjqKE918FHsF95Rivssd6",
  "key26": "5qqTkRTwAawHgVh4KoPQdGCSwZpsEtoW5z1GKeXswWzUPeKE4QPzXYgpCkVFVZcBAe4tcWyaSmrauuiU7EesVKHU",
  "key27": "5t4cE3zv6h2QfyvthUPkZvTFCzJZHz2UDkcsTmtuLcgNqeZq7JdUZ9S8msEdPFUhBnQJ9M6p4TS2fYHfFHXASvQq",
  "key28": "GVaY3JD6ZtjMPsyz58gsZkDCTv8FoCPgQxa4wiBPmUK7YPKg5T5traa765PZyzfynoj6sMza8JYrBetTEtRNmzh",
  "key29": "55zGykxQoCQSvD11MJr9NZthHBuyP1xrRJ5xyKvQdrjve5cQEHuRWyg5gu22cbsJmEtbtg2vte1mYrxsyyswDDdw",
  "key30": "5urPe3K77HNZ2kQA2mUVQmU589HZE6QJxW5c6294iiqh62yAJ7kVjXRbhSGg2Q1kcsWV3S2gyCt5hzY18e95GN8R",
  "key31": "3ffQrGRhKMmnho28AsttHdVLQTuZUKr5ZuqeRkhzPVJadniTsGjj6VAzba6xY5b7L2QWbNG6c4SjYStxSWmRm1n3",
  "key32": "7kxxjtZL8xdjfrpohnPtxFC4H3WWRQ86Qpp2scHYEXJwGUurok8pydyW6bFJaGjJv3mjqsjTZjPSba4qMYeqUeB",
  "key33": "56V8FUpZtko7YicZFfPLWcLGwwxxmPtTRg3XxJotWiy8y91TYFuSZV7MCFg3wN24Df7ZZQ25ehMoFo5PtsvDmZCT",
  "key34": "3DefczAF8UfimvupDe8cwkq8dsV9kWtJA3V4CBwdAKY7dE3uG5YKfdAtFAWBAFJeUw6DuhLgpGq8hQgjrAogRJ5Q",
  "key35": "5Ei8s1nDkkTaFgfU2CbU9UjQUSGt3YZ9Sm1XXrfx5gPafTXnPL8k69GNB3Mz2NVsemB6LeWX1kZPPSsWVhLBsFqy",
  "key36": "2y87VU5CKWQyBJ9o345JwQGhQDAoavQPUtdmJjxMDDgGneyP2P56g5fgoLXRiL1NBf9KaJRF7ShaVp3sZCi7XCHB"
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
