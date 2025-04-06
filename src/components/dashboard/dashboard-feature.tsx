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
    "5W6y6xXByKzaoy4LT4SiYo1YwHm39sBWVnUexKf9Bt2ggMG3K9s8zrvRLr1aqKJ86J4j8ihaQDfcYkirjB6j2RVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bu5TQC6yCA1EZPMBGRR7rKYB4VejM4DFcivN9vKkF6F5Hyib4tBqKUUst5Sbdw22TtKb4J7q4jMpBa6BofVFvvK",
  "key1": "zgVzBVdep8FH9U7vENk8xrNNVThLTrfC1G4dUe8t1sAVg37GpPPy953j5PEHZvK64BivW74uW41FGNyADYNo2ax",
  "key2": "24pxXyE2er73FBjnP96r2bQKhRDbnYezSXsyqv8HFbJ2B8SLC5bsJSXVHyNeQoPQuxKNDE8zv57oZon1eeCEji89",
  "key3": "3mzwou5SAz5GDFu2oNuwNXWKtDL3cwZKcP4KtSW9AyVVc9GGT44W7vtR1eJPq1HrXQ5PRVp9zjioF9NxYb9NUbGj",
  "key4": "4YdTp81dHJCqJcKCRK3z8FEVzhLnAz6TzZTezBtckBMk7RXk5w28JyozcQaRAWRkDRADNUithptdsNRsvsxMw2Rm",
  "key5": "223pzUR5KwhxBXgffNhWw4ToSKiJhfTgZLG636qdjhB6rnLvg8bXCDrCCXgJ7obc7YUnLsYdgZncP9BfagPDrgAq",
  "key6": "3dSAK61Skbq5HK76jMNmFLcAXW6pBSGKmqkDZM3DLPn5d6mVPy7UVK6CKJPBW82QHL7ZwLRFVfWUXRcNWkZxzix1",
  "key7": "2cLAfFnGezAEoDsThB7KPnYMFBGvKeXe9Hy2emE83Jy4hM2GUaUCqUGSxqwyBMuh6Yw9zkcLy5xYgDCfGBf9ufw8",
  "key8": "23NC9VvbByxuudfyeGh3ZRijJfgusJ3J26fQcWWukjDPaqo1dhQ7bqyszkRa5WfvxT6i7BFDNb4SAwRXspKSwC9i",
  "key9": "5RLXjy7CfgiEL1MsUGVA5a3AwhE1cpLtbbwzkMvxDA5Hcpn6y6hJEtMBZc5tMqgKJNycGjWocvBLLyhCgv1gzq9E",
  "key10": "312VV6WTN9sGyT2iU5WfUVZp9maaPBUqDhnmuRQb7zXpBZr14YzK5D85RuqRWAEyepQpRVaqS2E1ACPHB8tcikEz",
  "key11": "46w9Bo7xKv1EZ6EbXwHeXoZdKQ3hqUWLBHXBRoP1wZv1NAfFETgtpm3JEwEbFEFQz7kCRAUEN4MnL4ahLk7k2sPu",
  "key12": "5HCQ6uejLBC7SoAS3wgs42PFX1eKnbJiprt4g3EWvee49KpmvfTYNTg1tsuBYN3JSoC1Tdm8UGC4XmFawQhGdqPT",
  "key13": "4mbhMmFRAfS23Yv6qmCvWbGNUk4Lr2jAS4PLErfqS1xiLBDMmL7Nzhts7oPVdGhz7f563EvcsHSh8M1kgGeoEF45",
  "key14": "2k2sTGHWJTvBECZqrAUfdTkJVQFF4CRgKWG9UeP9Jm787rtDxtvAWcyZFsCazuuCwHgeWB5UqpzYvWesA3g5V1MP",
  "key15": "3B8iwRryeHNyzwQrsTKS6ZbZx3KvJaTFjpi6m7dQc4QVmBfdQLEXmxyn7wpjeMUsGNJLuUf7ZtTCCdDQyEi65czt",
  "key16": "5SqGo2CSyuEExBvghpN24gzHnHcL2jgc58PJ61Q4k3Z9UN9naQhB1WCkhJ8NfNGDxFiTvVHPKZy42U8fkH2LXsE2",
  "key17": "4RmwVsRzAeoSPRDJeqe3numN9C4yUkLGTQbwstWPhGCgEPyQ3ogvwEUKwjtcLnUfp1EQT7YSkNHdpxxQUvFWc12X",
  "key18": "3xFiXR1NBofxSS5pvzkbmHuQjqDb8fi5msKLYm3kpoC78qNDidKMqMVjKbFnhzMd3ny7PpCBaQCggAj1wKBvgxzB",
  "key19": "2tJnM3jwZs9foPEpT7yS8whSzQsACy9ZKAxg2h57n4EBDT3G3euTnUudvHdYXNmZddYNLRiEdVdhAYoxc9cy3otc",
  "key20": "JFv3ZA4ZdisJx9qryDVsYjomfX68JBZvymHj2m9M5jmsMurb91RPnLWtnAqNWFRRtofBoYQYmChogRT2BRiLBVN",
  "key21": "51kaEyFXbnVAbTh96FDLKHCUsYfzUPYRqMbAFmZQoV2EY7cS5Mrw6pqmKNd9VQfbgtAHTDko2TFLpadtmQ6hymFC",
  "key22": "2eFLD64VfFwP9Nmg6LEzYfAnJsSbZSCLJTiasWkc8nZ9CVA3e6R9nWF3hHvrPKLFcB94fYPEdBxYWeLcTYHea6cW",
  "key23": "52hijnKWaCbHFWF9UE4B6j7pKSA9QJtHhARRZBzSX4mSDSWhTMGB3LGTHdJXfAiVUbdck44kdJNy54r2KLTVayaL",
  "key24": "5GpHp4ZdpSLM6APQefx1kSN2tCRB1T2sNsVb75nN7pFuhmAtyutjqAtiReZCJDHSJKtLZqBVPFSPKyACDeocyaz1",
  "key25": "3SFbWWVj2fCQfgmqp3BaGBMx1Lavz6R3s4e4akSS6E6ECXWXXxvRiys2toDv15pbn5rsuDxhYrcy8bXERLzpxjAw",
  "key26": "JqwG7Hd7ZKzpYuqNyGYp8bUYCRgobz8raPpJ9mujxQrWawau3pDYRijCu1xFiL6Lj74rVM26od4tSDm7enKzE7s",
  "key27": "2G4x3ika8rgKZsUjWUeE1erW9NyBzJUcCQTKSaMpaT6ZaKBKiPfb3S8tenPub7UuxtZqUnNwZuXePSD9U7iE7wTS",
  "key28": "3RLUYNaVAuM4risqKgFMJJH2badNLkfGVKZufBYf4ydy8HC2kKQg5nEwBstAnQjBC2KBzmh5sJEbcqcGd4vmsEQa",
  "key29": "EFEbVE2t4yys1EK2AK8WRPTBF84oZdLTggNHcsj32w6dezpsR3FpTQJV4vFY8TnQeCXW2n8EhTn8xEkARdvLPgY",
  "key30": "54inWhoE9NMer2CokQ2gBPE5s5ktM87XDjB3Yf7mu3a3ypLBhLjgA9zhPqUg9AixiAiw3GUAzeqYax4PzHGjnfi",
  "key31": "7XgUgPTedpYp3dqgCCE5AEdANEK1SKQkPFjyP1RD8JYqTuDkEdUpbxdvQst8iHmXq1VVVSWQvNwULDB985iU6Pc"
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
