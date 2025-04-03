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
    "3MnmePqmJi6EctVDXPzzLpxdztHD3Y2duoBYcGpmGFCp9pjXbbu1AQC6gfQMeB8AkMu9GzQRYdgc9yPYEDganyxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a1vAJtRzhz7K1tWkyKnWJrAgEjRgFJKnvsF2ZZBJtHxh1LzsS5e2bnYpaNJyNGBSJhazNC6Eeqf1VRankK5yVpD",
  "key1": "4f9MFJvd8uwksWNgGiMCLde9ykZX5vh93sCxCd4nm8P3umsyKVCetRJ3XiRLmR1tQgNdLmkWq9bitcNnWDZYzX1d",
  "key2": "2UV3r4hvBKgsHgqGCdH3qAmAmDs52Qh576gZw4tq3f13GR1RJDZaassb2riAA4VHdgz2aNghAZR1H7BS46Sr64A9",
  "key3": "3r5WAJjj1FpKZk9JhWAD9s9uXLcALnmCm6txic8c2bmeWwirDd1tExWA7PxtBZowqV4nUduVRkbC1P8Epco5aCqB",
  "key4": "dQ4CVtiPqNUTVumTfhPWjdsVPcoRxMUtm1pDvf524CMeEhYiBczcSq2KU4RJDefPb4USXQk36HXy2iJmjhxjGd3",
  "key5": "2CV3RGGQin63LQbfbBMcnxfmzia24TQesaTRZGovDoCujrG5vkgkpeLY8US17K38LjbGzHLg1tHRvFaRPUAvWFte",
  "key6": "2ozwvKwF5Mhn9ZttNTrKSyFEBPT6XD94RYHrKHrDXZDAonbasQJ4T7eRyezVDBXEM8z7aHxJhmU5pVvsrPnhnCeA",
  "key7": "4TpQ37Ea1BDm7cbZc9MeAmi9HuaVLuvAJ5o1HoRq37uyugeu3x4JZfqAmTxwT5FB7SJrsYXr18aazkrqum1oSQ1m",
  "key8": "5GBwfLtRkfnqzYyZmNfrDsAaocz4KYjnsrE12TNFvG19WeG9j5Kmss7rpfVfPkEqEkToqMkWMJJ3sQCPa4kqdL3o",
  "key9": "5WaoditcyokJGY8VzXmZvx7v2tfsXTQf7cAPBgc8NzvqBxou1tjbD2uKmhEFQbD7Doz5mRaZ963UF5eS7GKoNoQG",
  "key10": "msTmwRPyfwBWvuFnTTbaeJtNG3soCirLQ3FovQmdiF8fEv62D9V3kyZTavFPTC7hrAzvC8CT3iZGhAiiTVT4buT",
  "key11": "5eC2QqTaa45kkjrkV7vf6BbJVixSkHNKiqMqXANQYNoX2g6fiR22UGuwxq2K68kbxcYzF8Uut492ccP9iRfJNVS3",
  "key12": "5RyNAiKMso24nuPVJu83dQWHsvAkcXHFeQXn2yARkt1FgXZKQmcheZA8c73CbDDPfDM21mohmK8y86v8cavjvzMZ",
  "key13": "47TG8XvYnaK9Qhbh6XZLbqKuFnHxFYh9X2dFvFtrXvMfQyLmpkhhHiQwhPjYZM5EnfMCrN1DZZcgHCxHaiFTDvDb",
  "key14": "4ou4FxPrTwcTYNBTyq8ggTycxzANWakJWvkARHRZ2rLmdGKaKuFCXQaqCMC8yvfbxwHLQZFLBEyYDL6k2g16hvhM",
  "key15": "2ggMYE1b4UewxXRjARpf6kLdrPp18arzCeSVKV9KaLeREMNMtaDXJ1wTFmSw78T7CPaqdkfMayKZu34exXrDgBu4",
  "key16": "2zRw69esocZGxkW7fUMunsJwQASgC7SYK3tVZqcqtoGcts9fyJJ3bCwGjJxBV9J7LH6CwbFbAfv5UxBXcgXJWVu4",
  "key17": "5Xn56T4hHDL64pD9dnpboWko2gYiYdG6PYfvjzUyj5AYBU4rcwpSbzK9MEZHSAevsk18eTFXEWX5kFnH8MSVw7dD",
  "key18": "55xLMpNotkrz3mDfE1A7DphsDbP5m5ycHgSPZY59n5gnar6mdpEbYZksbFddSJPGSWrwKvrftbVCyWQKaf4kJSvu",
  "key19": "4Lmp6eTQyRtg3YajuutLdfTD9oBRYdNoDErgb8HRSNfYCmbPs7duqNaM7ajzhjUh34PxxMkU2aj56LGACvA5NH8k",
  "key20": "3KorkzgSSX8n9qWsEauReEZsLHtYpTvrV2mt1eni8fZgEUF1CBHczRWkxLRHuA4QLLm36qe2sUL59MsRRw74kwAV",
  "key21": "2eifxYQnJYmV2b74rpHMDkzQfL8g2YumzcaJpd7U35g4DyczfWj3xy9DfbaRr7JSzi1GpyrD3D2DEkdEajvyLFfb",
  "key22": "4jNkrXXvm4sSEdMyzenEuNcHKtaNU8DPcFvEaV9vPRL3CtEpBfDchwUhqT4ertLxLXXAc6C18nZpuekXqfztj1qM",
  "key23": "61E4gfmXSMjXv3E8pXZ2EGPT3meSV7UdoyiJxoPsD6XnJzT225zHd2FWhZYFpXZTK2YH29fjXSpHQXEfZN1J2SmU",
  "key24": "4CZif9segXxMx37m3yXFVxdFvULrMk8L2WMaErKX4eXMpCT1mftSJp6Tt5Xs9GHUet2EAWc6hpLkFuARtV481cU",
  "key25": "2qaPF1YhgZVaadVsFw9FiyrdtuUZLf3WTNhnDLiMsGqYtf7iHjs6TGSBi5AFbMveD7JiGrJ5Yzritj9xDVSfXHJS",
  "key26": "5B1XkGYQACzHEpgmSuSXeU5o3kG1eEw83ZMVJuyLASpXkbZGoBCSKLbBtopDzBoedVKD9ieG2msFZGy6vTXQvKu9",
  "key27": "AZAwX2snEm8XCZRHtigMWq8TS989w8siAvMCuuBhUpKSvmoq7zPEuNSEK8YnnZV5vCDa1YK6KkLiJ5wtr1yFo1b",
  "key28": "5DiEZe6ShxSxqCH1EkyH6DhZsaunh4QmNTZQvDBV58X4YiJgUE8jMXaeGr7CtLL78Y83vfBkn3dUXQsbFzwAvPNX",
  "key29": "39k5Zpq4ZLpNSPEF3MqXSYZqHXG1Ve79mERff8TCHUP9CJiL5Xoe6RkxQuB8uWsD6ZVYA1szxjUf2T921yKmHzSX",
  "key30": "3LEMtQQHooPjW5apDTehDscTCCXxFbE4FVE61ogN25iwUBdNoC8WRmfTj2tUAGxQJLV3ts7d9AXzUpur9DYf5FzL",
  "key31": "5LPJthwYdQXdrobgBwuZv4pg3ns9pePrwGRHBU4sRpNP1b4WiX4Hfaa1dNQMwTqVEudbfFEx2eNjxVyUif77LNGD",
  "key32": "3XyuqHYABR4qt4f6hRdfrocCSxKG9NkzpaRbKvRKiHRCvJdd9bFYU8wv8ydX2pLLTJ8xyE42LiF7QVZeEUiA7tpH"
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
