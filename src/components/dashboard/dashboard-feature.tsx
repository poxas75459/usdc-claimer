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
    "3yPLDyETsSyAFrhK3Hq2PQ44y5iFY89x9MmPJoi43W1xGEKyKjLfVuxkm65wUi7f99RhGY71kmWM7EHwNjZyeEFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JpqwUmWBsKvg4xGWkhtsEWGJ7VX5dRwxfH18LUFZMdrUP7iu4cPeZDP8QL541y1FopyEe1w6wcwbtMCMrGrgz5f",
  "key1": "3mTf7KHUdEETxhH1jV3amaW8nkdX49EJ84bY6QQGTzC5bb8Y5ybGhCrwtMjWdbFBrMvtCqXEMJ71vNBxsfnyAjSt",
  "key2": "38xENaaU4j4t1WVLVKXKd29KgEKkAtwDbwzjzy5NhYGLEhuuHMqih3vABDTL7KG6SJ8rfAxJR2JfMQ3DKVDTWQxe",
  "key3": "2YkfHeLMKqYaV4sLRQSfDVQ5ZyG7DFFn9Nag5LkEhfpj9jBhHdzPqHYXCGpmvGayZN1Ea34Ndxq8HFdNqtapz8We",
  "key4": "W9wLbHMada7nU6xPqmtW5RjbK3tQrrNvwsr529yL1eb6p3G9nMyYSVQJiCDjxJ9cYxF29W5XKatAft5t2Ta5wZy",
  "key5": "62ZLW5rr6dF7aEaS24o3cqoqQva42TsoNZbDsnprcFqSgDeEJUVHr3hPBMGQCtw2Hf6sfotzk7Zn4ofdtrrtCPU9",
  "key6": "DF1ovDQj9E7UUjqctGk1sd4ak5fEZvkN3G6BbXkMTHUHH2WsKndrTPd1uC1vxiNcgCCMcMLJmKaJyFxWwnDym9U",
  "key7": "3AYE7Kf15Gyy9Hwo3DJWbMZNr9GH1PYSqXTq24C3NbzcP1cB6wkqcFG11GyVqWnRLvjHBPoEWh6L4bGhSo6uG6oz",
  "key8": "2xnoLjFDfNurfPiE3tsF58VmjAFPzn2S3w39MNZ48mCB6wBbQWXbPnN5H6vRDveFY5S53NyLAmWw6QpTGcnX6m3s",
  "key9": "7RrYKXFeENGFtrDDjKemJAjY4jR5vSjTB1YBJxWm4p8eS4ePSthv3QSP3YmZkKqtVoiWxchNMqodXXE5xtxgRvb",
  "key10": "5LdW4kwGWiWCwo5WnFXgALPT1czbxtoYS2oX1BXagFHkHjvLJ1tCB1tBg8fcyfHp9yw9Sgd2Ppydwd6iZj1yFJeA",
  "key11": "56pF55Cf23tHiqUSppq5wmjUEa3uWB9Qd99fher2CNWRSXYaNU7P7b2AqNkp3triRJ3fBkDNuTrhJrRohiJRJUJY",
  "key12": "2SRijyM4Fu3aR2wpWh2VhiMZaWDgnHaR5wCZ9RqBktZyc9PX9VEt8URhWCkWs4AWskZ8dL2vkaducLSkvGNg8E6h",
  "key13": "F5VqZTQStwJUjqa6rv8QeZYCCH2sUdRvNnCxN24ivXX3KDXjZw2a5WkZVYYaEFazBF9QqX7Mf5GFRgZt1tuYt3S",
  "key14": "4Ydhimwxkzdq7LeCUQ9m32KrFHFg1ZF4WxkFxsmwcmwzJDxiRDkDzMChDFzETwGA1bMbiEkSmR5FC6xqGq2oXjwH",
  "key15": "5YYXxMPNm13LqpkymTouQiAc7PKn7kX9cwsm1bfVFH9UBgBxpTsoArpCAYuPQvTEe14Z3NL8vXFQYa7weSysofwA",
  "key16": "5maijEicd5FRcNrEXUBwLmFVL9ze29k1mVhsXPz5nTk9QDzZKhhV7e7m9VzauzH2qvnb2QEh4ZonJERfVYgXZYys",
  "key17": "59YL6yjNeEj1698msgcryHVQ2XCgH3LbokFigD4D3jJjk3UfdCVnEqyBX1NFeEPGfhxJaJZFwstzb9sHK8cyHCsw",
  "key18": "5GNUUuCNqEW51rTCh7dX7kcb1Dyp4xx6z7bNEFJHpDzrzgrCphGTZL7Q19x9QaELsPSDQWkv4HLs8EGQs5JQJsKb",
  "key19": "47aZAr4Wi553uVV8evYUrZTPm727woiJNngD4oZmwYXNM5NA3d5jaDyyiJEHHzpssPMtF7yTSj48sUTHwce1ywKV",
  "key20": "638tpkkdGvrMUpEL8jfk2JKLk7Khn6UKftdeseAVbN5Qw2YjnZjNzcd7j1a7aee2RAkgty84o2NoonLH44fpwvdh",
  "key21": "4VRwSc1xeY7iTLNdbV2hUJc2SqKtcsivdxv11jitS7tuSBrgi3xeyia7W85vGKMXknYdt4FYdHSfzb6vPQbM75Ni",
  "key22": "3gg6yhDtmqdM9BSyzjh5CqRVXSbGcBuDA7xhsj5NiiznLqT2bVGPkj7JuaPCerDnexXsMuysesqwBJjSCWi4gXZ2",
  "key23": "5ag1n5Kh3Ez48Q7t8WJhrNhZxnPkuxvbXJ1BGFJ2zvYnrgp42b2trqWLriKbdzoaCrL8Pc4M8g6qaSoa6bAvxmVk",
  "key24": "55APHpXxjVk4SsGqnsytWiRw2DiCAoeE25TZ7cXTq3AXvdnbKXRe62e3BmE4PW3YtPsD6QVHwtkbvFCZrX5PzJw4",
  "key25": "21bXidMaNG3R25oHn2gktttCiEYQYG3YpTJivFFuEQFf2ZQLxNe7hJTPZCiNuBdTvDCptsA79wy1vfd2tq5v5LKH",
  "key26": "5yYPVQ79pSWVfayTFZbLepqacPkhXQ9RdmATCa4CzahNrFgratnhaXa8xrSTQ3Bbp3GrtjoT8Eezic6wcWTjb42s",
  "key27": "2Z9vw7F6mx3oVBW6MhHQBpKR9V4APWYxjb3GANq84f14iqmvUDyy1i1zGZ5MxpU2kJdvHQsESh2mGPRMvvk7TdCT",
  "key28": "37JKswTM4ym4nMvCKKc3nb6cFCFKXG3n85xvULWA8vHC6NqpYG7oaoh6nrRmdikWEG367cFid5UuVBFb5sAy2Fof",
  "key29": "3zBFxggtkspbrsgmkWktUdvcR7VtMsWjLJb8X2ZV1q5M5Yccwca3RmbZK2NXezC7u5SA7yrFjAt3yCHcKtfNHFYh",
  "key30": "3AwatcLcpsEqcnFhmnn9VNftuUFKi8ubyHmuQ3GQTbdcJmXKS5zw3ygdfyBnA1xuRs6H1LfwCHd4HgzBAv2NGiUP",
  "key31": "2u5H8AgiGfxb2Bx1sXEKDHv3tqWpprME1zP9RhnbuoLCcFKbUS5aqGz8xwBheSNLSjUkrfc4KyGZ8DUkeEAdPTpC",
  "key32": "4dhpTLMXEzg2pnZKij2AwaJqMSBomf5DqGomkQG5P6WQ72UcJiAiAdbGcXqLEEa64m377o1m1Uh3waW4D2eQdDEk",
  "key33": "5RwSpGfyJxTaqEDYhqHyuRCcisNWcCq891QNBKqU6CeaADmYKeWfkYLEZ2THZtarG8z9NznDVe889Q7Tb5GM1kCc",
  "key34": "4rZK3wvC1rYUceyFNdJriTj8jmkckuzt682AASgD193N8UvQwqGL6ARiBPpbs6RMeNUtgeSLxeiEtE5yaemgGTBR",
  "key35": "4wHV9tibu9tFcr9PGuQdQ19b86233fYiqJCxrtVgg6tRBWUN1kffA8rNbL7k2ZSVgEtgXRXMeArT96jkm8A4HaoS",
  "key36": "5SpkJtVdEE1meDCGukSiRRpoDz5wAMbUaNDud5QFfXF3SHeE7WGd3Bm7SuYhN4V9EoZa4Wzw5TRu73FjsnFFAToZ",
  "key37": "podEvTmXeSG8CfLQbVxBNFr1cwS28pDessfr53z2Z8FMS9DPZ6yEjZ7Tz6K8JUzv6dLyNWGuVexmLxN9poJk5d1",
  "key38": "vbVZbZcCWzsEfKA1ZaPpDTz1gfEMsA6gksMPutVUg8FyfAQ211cwfYqgaPEWDQu7M3wgvhA9L7rcnWwMzowU9Gt"
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
