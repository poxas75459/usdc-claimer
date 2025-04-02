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
    "NUjJsZYwKer1PEnhzXkGTutHHqa4W11hrFxshdgVgUND6yCKhvMkELp8DpMewDktsFJceuRnDemrdoVLNd5MWvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vj3iNPbv5kyVbQWFwZdzN5o1JG2Spko5LartnBQ5QBXiUkaXkM7KJLg8sRbkdtckLU3F55tMLLEEoVjDRVg2NvP",
  "key1": "2JvL2HmnSWVUUZaJn3hAYXW2Z3xmcKivGzx3yrxd7W9eHrVXYSDwNkEFtjvJBxjRZHarzbTEpG5QgLdXQTCFd6A4",
  "key2": "3hF1P8HA9e9SMkvevPpZrzeEEHbbQVCUJ8H7xn7VBAmWySBxpbFfhiVfsuEmqtX44JBLmUxKB4ZjpnRap3nSt5Eo",
  "key3": "3mT96AaicobtvfzD1UxxaNA4CK4k9s11qFAWg9brKTrPyiKETuMLKMPyPsQEhR8n7DT8NUZaCVFbvSHT2pjUuoBA",
  "key4": "2DRqNih44ZM5ATuBFXD2fA8sKqzg8HdBbbv6x6oBg2ZBqqpXtkCBuLtWfV9GyGSmVwdBv3G4fQ84QTytMkw9xdp6",
  "key5": "3h9H4zEa4tKLa7qGGuxUXUa9NUVbS9QsReEkU1eyw7qjiwnXx9WgxrjndWyNzBJVrkPAugGNqgWRqXPYjkiPS4b3",
  "key6": "2wvFkB91CqMZVxKoUVtXGA63FDfqf4no2VDZ219Ex3RgF2RvSDTtRokmKDkEP8r4GyoghcQU5s9wf4n9y2HWCR3c",
  "key7": "2G3UDczSDoePbkCHccgy1AxTiH6Aspc9TRjdHmJtQLKmKbZYZ5CjMG9HoSNvTFBsuPACXtXgpsvhmyFWGrtcw9jc",
  "key8": "4KQmw6jAgoMWprW6jnpbRve636rR9UWtx1vgyX8Eb9hGq1ECpoMMVc9FkJgus8VtDY4PAyDnHWRKYjbE4n3psG57",
  "key9": "5cLizwUxc16FuWoHCN5DUiqZw624wDEAx4Pr66ig4xPgngxF28X2LCiH2i4gwoQXdiFNNHczXB2bWfXNadPZWA9X",
  "key10": "2Ao3JnXzCVrvY7RXEiAA3MKmVJFESxMRk3UQFHEJVBRAeCbC9c1hcAqrVVDuqbQ75BtHzSKTGbRGsXL7nAupbyf5",
  "key11": "F3grJu3TPhvzQB1qP8CN9zC49K7TsaohtFFgVATKHLn5aHQirQijgem1W2f2sBBcnrnHt8g2cvHoJK72XE4BWyD",
  "key12": "5r8Wc3swdubNg28FXVzx1sEYh5QyctkaZFxJTfAb1bWUFTMPzNB6xKCivxp29sPJYMJzCU56ShLoUdXi9q1HRF1x",
  "key13": "5F7j8bmx2iCNYHw7k9WdAwejoM23tYc71b4hidmaSewCBffdEN8jXdMG9jjyUc7DtLwR3YSJm5K8qn98xyqzmhAE",
  "key14": "5grAWRKKh8t9VoDS977GpiNCQoMyKXJsHWZYPAYDg6oXU1NLBfhPxMtP4LVLzVpaft5FyB5khjptmgkq2c73dug2",
  "key15": "2htS8Bc6sw9ApZkSVU2ZMEJbwLEfBB8N4huk2LsxFDNBq4uPQ6KWyrED2NsiTdNSVn1SKW99DcLi88du8mLkSFGX",
  "key16": "5qd3rsU2ZYvii5LZJuAvZoAoenhPNtsNpFjVKpqYV3f6wMy3jDysHteRGcZinMRiGTGizUuM4FV4xiarykQj4iTa",
  "key17": "4DSQL4gPxdWuEFdVTeZNkzTD4i9bMuUYJDu7mghRBcvzkicpYTA6gMCzhs72jTTKYGxFjUhihQ9DPPr9aAa3FBJU",
  "key18": "3dSfeDSmb2VBpoHmnye3foPcvT1NwjPBTfo3sceHrBrKYHWMo1hr1v8ECwg6v2F44YNjet9jXoUSGc7YpmTptEkD",
  "key19": "4RHsi4237oxisvzXwzvweRvu2Qtyh6p67Lpb7otE6ksfnJQA28sQv121Pzj9ez5pGNGjbyUGCfm5iEapC8pT49Bp",
  "key20": "4vYa29VoqzfjZzyevj7VWwqgLcuuQVV9N783ChpKNcyUmKSNrv4miVNNKeehch35RqtYYjhBmWTWNAWMFZjZ9sD2",
  "key21": "52uy18VArU7FmACdGcMqE1jEMDHLAKCBwnk8gfQTdHBDbvyDvfjjtSg8MkpXXANcSufGbC6HCFKvRrcKFbm4tfsm",
  "key22": "2Bs23zbq4nDZw6fx9kqA9r9qwAr4DTCCvVRBtoGPbw3XpbtdSVZsojbzo3G4ogxbuxju1qupH5NPsaVzRbshBGgc",
  "key23": "4o5VRu2xWTgNfHTyRTgX4yDbSiPKiyF3LEFVK9g6WyHTTMS3HHoZEk6XqLwKpHcsfCC2tzGanx1RBFfqTYgDvQ2M",
  "key24": "3CP7FkorKGJCu5Go25cdxWGqvtiGQbZduFgqbf1eAe1uG9vqJUzPHp2Wz47pCCvw18Tr3P1ZxuyEwayXa7t2xNk9",
  "key25": "2LnXb5G8CNAXqiBAYYr8hytHVWFoKvmEAYgtGK8b3SppiNGT5Xmju4LBWYjkX3Ej2VWd3ehzWipJ88XWyfmMimCj",
  "key26": "GZsCFWwYfX8xUPYAikKrEEzYHcVqCas2TKxXyWAyXvJ1AL3BTr7gQDXyz8dggv1Ei28ccdQ1tZ9jx8AaYjL3n28",
  "key27": "3VAQ7xM4WAGhH6vQFFnmeYYF5nPy3FesRxUYJ32D45DB9GozzPWDYDLVMwhhpRYFUkwf7CA3B3XZskQcNMf5vBzz",
  "key28": "42DpErJpXkJhJkfyFxKAUNoyXjdBd9j4C9Q1RrGjtzctrpBnyS7fhur7U9GLLH8jqqmnWTmt9MFJ6vgnjPFunmXn",
  "key29": "48Z81GwzH4J4MVR1FkF9xhVrH59UmvdmTSE5B3VE9MtncnkGKM2XW1UzBoeXKUb8iNojXGsR7dZqxixUVK7j76ry",
  "key30": "xDg9PN952gmFWFbisCYS62dWCwqjwCtmwRGXviCGy7RBR2tUjEmQs7WJPS8kQv3y6zCXhoQmd9SrBDsCBFAKDTX",
  "key31": "4tCRspU84kscuzbnU7oDsab2zTzcn1ixWaQTMNiKEnvnZ2cgZ4VLMQt8eAYUXzoipX26gFjTezjXNkbEui7fcnnd",
  "key32": "u6pmCw5HURx23oNNMAvVY5QUC3tsyPYCUxoheua2rgkvfdnKrHSyyvsC5ERxJsv3aU83WnqHHjKDb2iLie2m7J8",
  "key33": "2SqVwrE9b9aK3z6xWwMji1Tqm3AiJz43o388BkSmHJxAcpKQM2uEBHDwxyEpy317jwP2o2bce19drTYrHTRkZMp2",
  "key34": "21QTeKzynA3895XgFTqMru68v9zaNc3DpkNe61qh1rq6Ti1RKcrinG8fsdn92qHkAq4bdnQ8T9McdosauFCuXYXY",
  "key35": "2CdLN452Lv4xHXQQjPE5uf2x6k3ybj2z9qWqWi3fcCB6DDJ4Q2ooJLdjr4v7BSJrjjkNp6BhUbdXpJgp4JtUafZB",
  "key36": "5dh1ibwBx8tSKVsWUioNVHS5hSU6NFCmquB9axz7yK64MvbgKrzvr9Pqk3HZroezRKoHxT3cXMFvr1XUPU1BbE97",
  "key37": "2mUKH8Y8PKMBEKVUZa7Xi8K4cgJztaSqsC55MjreCgf4RuUFufn6okuymjDh5rHS5j8vBni1QVWV8Cfbu5Kqt8is",
  "key38": "4ahnchYaJqGdg8wy8FnEfRGwAyWdMBk6KjTrAWVsjftzxR8FQFVJDMPhZXWDcmxYZ6jB2v2TDAD9i1mes4TWpNeK",
  "key39": "4fTSAgH37fu5KEwfojUNEsU8nJtpKcNcPFPgAPNzm6dcHgy6UFj2xEtVfYkxdKHjF4DafGohxKy8ihwQY7rKFmqB",
  "key40": "5PgT7c53L3xTELFM91ti9WKAu22gY6NgBRV8zsKm2YiTxKRffxUgd24W6XiK18zeewsLFkQGa7QuM2kn9S4KRut3",
  "key41": "3AFMbjaDJms5cEPAyGpy4qh4Vq2w4ByA7GEx6UiRQYFrFDic8QtAwazYxoLd82LHtnHhHqSriYwv4NL2jhLeraDj",
  "key42": "5dRcrZR11VpXAJdQeiMtGEHr5AXnwTKfjGjVPpyanBKEdfuXrnz91DmTpgLHwTU7QRB4VrX1GmgBP1XR574FpQ23",
  "key43": "4SJAeGjkKgePLx3NxyytHNFevNRHkewUwtyhLRL16ePkRQ5gtpiGbh4o2mEo9b271rikYdYKddTDg4Rta4s2othc",
  "key44": "5nc6tHpo45zXXYBbpjLtH6FH2nGdFiYoXc1115LfTHg54VFBbMS3SnujtasZSNuGEnUWJ633ApivwXioHQHbtEbn"
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
