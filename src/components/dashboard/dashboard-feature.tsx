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
    "4Uxx5xCaLLMSHjCyeAEh5yCddaRqhMxEcdKu8vXgCnTMCtZe4mkUKppNXTMF1YhkrHb9cQo7exVJveLjWU7s2cSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PSAZ7Z6mB32ZvX594vgRd5Lf5Z7TA6kpjCXYP6cTZtFG29i7BrXr6LxLRiAdZCN27RVjrBTRkqz8ECAgJ84PYTf",
  "key1": "zj2tU6CeCWvCYssAeStzzHZWDuSqPTKBeYZzKDKcSRCM1ona25DK2HhQiyHm3nSxauyGL52Z14prgttsFQ1kdM2",
  "key2": "4tHZRSZ7RFp1ZkwhGtjqFqV8165fXns17aPVoPEjW7EgfXzA2yQR6yvnFgTEzv8U7Vbx5oFf4a8gjxdW6coPqBXe",
  "key3": "2SQU4UVY3CUrKAzDz12uaK2fc4hjgztZ8RXnJuqQVgfjk7Q6vJUcUzMYY6x3pgzMnB4RQ967QnhZ26VrW6qGzQFt",
  "key4": "5kYyLkGsdcDkuA8KmY9TKMqjET3rHp5YDU5cfE9o35gFbjZtNMzvu2B8gS3aGiFtYyh4Ta9xZmfkJvSuMvdXsRRE",
  "key5": "4JWGWYXFsSu1ZGkayqX1d5TJES5QunParzyix7Ujr7jCaBCEsQov2XnCNVQrUcCiHevPkdjGVYGYRBQJMr1TFutC",
  "key6": "FUKBhk5fgnoiKsLFitUaTXWh9g7uFky5G8KBLEFFek3WdGj32BzRi6zLrfgJcyYkVSLBn6EmmhEt6spmSikRrss",
  "key7": "ntVvHoqD8MH2mhENhJ1sNMikNhGXoojxMZEDh73zkwGPXZfYwBvHxzamPW5o6KYod2gBk5yXYepQDiGd8iEg2gu",
  "key8": "3weRyZi2PTYCEQJ7Z9HqGNJPsWXVRsmdrWaJTBX1s36mfF2mDMgybw2nrsc2g6KDGJLsZBy5Fh2jzpshzHZRHsiH",
  "key9": "5UmWJL4XJygyPUAEgetZVu4fAKLofG2s7WXF9PA1h515YFyfAUcR1n4YKNpUhVWRVkot9z4D4o293WMiriBRJyqU",
  "key10": "5Sa2sznkHer62e2qRDPn86kBUdDGXuQCU1fF5sfa2ggMJekjggmHTJBq9URBPVziH1cwub84PTASTiihVHGKA1GB",
  "key11": "5G6NAMmsNkqM4wucJtAUQhjbCYx7PyMHiSYewcPUQg9D2X52v7AkFQxbiKYALauXL2ZJ9YQVyPSJUTQbTfYTxotc",
  "key12": "JXkcx1j8uMCxbgkXtSBq9Rp8J8hRnk7LipD63ekbLPje4CyE4LKY54ahXM4TPRaCfmKWGiW6S4Mft2hyT5jcEd6",
  "key13": "4AsC4UPyoKQrMaNzMB54syG2toA62CtEQSrrg9ou1u5abaEGJmAXW9uNrTZq2tsD6i8f2bC8xvaVVJ7DKwFd6uKq",
  "key14": "2HWS8m9Nz2ZV48TNUJTmFFcLfLBFJxMMP7owHfUYAFYT23TTQnw93K8QfGo2YPpANxkUuBdmuRprSxpbSMpmUByT",
  "key15": "25Gtt2dqwkMDzDAbTR9KPqtsAWoqdbrBrymGkQRRfqTf7UpWkZ41yb4cp2zGz92Tz3Fq6LHyuwxhooWfc26JE1E2",
  "key16": "4NwfzG8kWLm5hA7bDCvqgAKcm1GudFHbF7QkTSoGW2oHVAAdNA4WoPkWwhSyvu2McCeLk2CYqMDfWJXmKfKps6oe",
  "key17": "3dHZreGT7mSJjv2dGBfjqRAwaLR9PvvqE28Tttm4gGbLAc6YEaX9XcRqySV2DNfwRCEe4L2nSYFccXM7mfAnJnKN",
  "key18": "3DRrox6vzdfrkVacNh6SRRfLzht5BUyhMREdAuD6diveAAKvD2qKRw9vGQYxCfDJoN3m2jztEpWpphWuLgfQNjAE",
  "key19": "2JCCKiKz18cazWbNmrBpfyWy8bjuaGK5jo3Be2q2cdJYnamtCtbseowkw3b9DAPmLeTXiqD8KqV8ANo8nJ3KWAUv",
  "key20": "uCtQeFLB1fdPeHhebT7UKTqiiNCcmiYWFQowCcdyD3E81rfXppaVScjjtaQ9kVwvKCo5az6dwCm4h8HAgFBmM5F",
  "key21": "26VYpCPpPS9VoJUm9TSPYJtxLtJ5BWrqzmtUMzGwRweD2bLvHJhQ5LfjvfunTRyqbiLdL9ZkEa5LzUGn9MKcws9U",
  "key22": "3NhXZP2AJPcQdEPfSf9oLQkRtBBdkLYTzV8ZiDJHGqnN2rG4nimo6p1jPisucxAvaEdj622eJxzSZysc8A2avbjg",
  "key23": "5ywkKWu3do8Z5y9tFEPqBFJrAhExSDx7uZJrPbhsWuPT3gYCbDHLGCFdSqTs3C98Bh1nhtzS3GLofpjP2WGwRZMz",
  "key24": "JD116114YiD2r4eKRG7Q6P1GLELRsENhedLiTwuyApA17FG5pKTxM7obf1M9SXutTG7LZvKxqMgqRjk4djegXEi",
  "key25": "55zdM28GuwKsV5PEvjwuYXqJ4WuHHif6cvsxtjJqPqQTuAi9EwpTsf7HCeQ4f8R1mNE4NpdJXuNAaD6MMowaU537",
  "key26": "wovUbdsDBPtDWkk7xTts2CmxdksNMviBxsVB3z6kyFVAXAahnx8LgXk9cZGFSxkVKrMFeiD7cw6r2VCfkNZdsZY",
  "key27": "3WRxcsiUYP6Po62wsRNouvvEJUf47BuRkSz7Qkxmpv9aL2GcPfeFP7pNcdtW7rxdKaiZrani3WYF9rkUe6JydS41",
  "key28": "4AoCUJ58ViBAJ7zx1vpCPpjRRUWZ9Y3433xxDLMuZQ6P75nJ29cM4seuBuDSSq4EDqsEkpHNosqmLwrh84RtNfMs",
  "key29": "5UMwKHcDGpXNragtJQuEa1xR7h3tLDqtkj16jUFDGk831ohC9rGXny9Zhubmcb7bAUtPA7bmrvk6sstZiLQ595xc",
  "key30": "5w7dAxtK5QSKfm25u9CMwFYHUTYyU9QknuLNPE2JMrzwZ8uD5fzjRT4Lv3PURFm7VC6Rd8eGk8Y513J72qDyaM1z",
  "key31": "37GFgo2Zm9xLfEpFezg2rSGQZFjD7w3LWRzHzsz5drDxpstwnrpUNEg1Zdwc8rk6M4KfYrWAdzUgegDogfgW82A5",
  "key32": "3uojStoSSEMKdgdpCEvN2MGamTz7Lqz6yHMhiMZrTL5dW2sksJcpQFKVZBVwtqoKPkPxVNKWJaL792VMSDLNpdQw",
  "key33": "42yPu3KQaggyp95ADBTGLJsviBbxPCkfixurfMRvU8fp1uFv9faQ9gJGaJft9V9V9oaqKg4gCLiFU4Yau5be1SsM",
  "key34": "y3XCqHn2oL54nzp4PtbetAhWcGqp4HUbh5VqEdRmc6wFF8u8cMk7a5QfLxDTx17hkw6a1XxW7sjLbJ4K3mLAwdz",
  "key35": "2etQXtpmd1JTKREsvnB9vi3nCfcxNUPaRbnse39UnnJ1vFBUmN6eNiGaxyub5ioc3WECXVQRbDtXHf2RzP2TtC5J",
  "key36": "3Pi6LgE2oT1L4B95thyYgymykeB2CZ45bnnkqXHXHEPSKYfuEcdQigM7NxBEcugavLaQHs8fDiJ5paMhS2CFFPgn",
  "key37": "5A25j8PepivtQsQkwo358Axcp2jFpUtKyuLvcptQPEdoHeNonJjPsbtVK1fyevQvy8ecNs6XsTtwzuwXQnuLwomZ",
  "key38": "5KsgFTVVUbJH4iW4uFm8FniUk9rSta4Rog7ZHvisKbMfRkdLGPK72fqUFFcKnhBuj1Rxw96ZrBzk19hgsmHRj4tW",
  "key39": "5C2d3Z4rDsXTarnecaDR13TGnrLxMToDmXA878R7DMLWWTxhdeSYhgyvp5uANys1qHKdyHoKNCyD1kvjYhjmViWw",
  "key40": "MMvdgPXB5zQKW5Vej8Gfhwuin5fwq1UDyHWQnvZGn9o4SFzBv7YrK8ybv3EsaJ3pLmxFKiYd63XjG53bnH9Mc1s"
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
