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
    "ChpXg2jze5my1C7Pz5BN8qgGDcGfbmMYB1qkQYtSL6QFMTE4g57MGTonYnpM4QFWGRmpNN9Hdqrg49FsdYCteTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s1Bz2UyyEMsBYoeYfGEBjiQ7FBrrimYskHe2CGhb7JE5Q35gJbmdkUoXwpnaqBVxLQFJwLYEQt3cF62JUfwUnF3",
  "key1": "2fpxjyLUB3xzyDt5M1XF5WiB2jmYwL23y44PFDTbFQGKEQ8dgUiW5GoMxLTYbr5mFkLR2sqKeyiGQ1HyBMuoCGyz",
  "key2": "3WT7HLPzwe5xu9B7YR5sW3GcYBEfDmSzwzztNuuTnUc2ff4aeZC1aXc2KntmtVJiMYyJ8Dy563XRjPaD4dHBz33u",
  "key3": "2NvPsvDQ2RApgR5PX7CwMLQV92gsFjWkysyotkDsAVA6T3QdeWNDYDzsYT1nBzwcD7gw2hMwJw4Y5yRdxdymq6BF",
  "key4": "EfNxxDa919fbvdn7pLzyx7ant6ad2dGczYguXYSAsVaD8sPAi6jpp5hXu2uRCWYRW9bLLbgj2m7CgBWCcidqsPz",
  "key5": "4aJrjbX6UmVk35TT2erAg4GhQEMac3WGnxYLDb4ALpV3CTWFNfKqPkeJuxXaYxBF6AqCaAvHPoFrMAe4y6pjc2u7",
  "key6": "3amfaq8rsvXsvxAQpH3pGBgrRc48qXmowPhEtTUE8seHKG7nJhvSxnZPCso6r7Xo5t8RFuQR1bAiBgxCpNMBgu82",
  "key7": "41i4LhApRZTv7Dac6Pm49YZPLTkWStUPcTo1rC52LSzBcykELVkxDUpKwqMhP2JW3zrtcWKJDvr2k3tncmRnvAdf",
  "key8": "qq9gVxBXR3V8etapcZHA874HoBKoJveVAg9gLNAiPxRBLPkXLon8dw5aSH7BPtMtvVGHuEKCY4wsazHZvszcFLY",
  "key9": "4gDfoZfcuHRg6cd6aRZAs9FiHX5uGMGZCudDJDXvScn5X58gXwVn7hwGbf3abxD8nQEte9wqvqCiwjNW4pcc5QzL",
  "key10": "3amdEVomNi42hVQb6gHuwrx1pDowXJKbnZJTCx3PhtGVmRTtZHJSRyrhiSxSuEropnpxW8pYibr7ce5rEbbDoeX1",
  "key11": "sPD3hY9H9Mno8HX7hQYTwLsrmLrpZV2SGUHhdF6iCATKHTcpLBWtETccaxuDp4hqHFggfabJ9uw6h8u3s8qrHEP",
  "key12": "hrpfpwXHfKv1GNxHFwEt7CLzACDh5K9idDPQfvr6PvhqDXuZAYLGEX6hypsbdk91F5ACHkf2Wkm7E1w58AsJVvC",
  "key13": "5BUiSUW28KLeiKBwDSLRjGDZzFt93sdEni7oD2gGLGVkf5s6Zy517QPgbgXnt7SYYW2cPGhXtW5HrisEbYvgqXf4",
  "key14": "2jWU5fCGbnWKwCY5Xcz4sNJ6acHoiaRthgs9PTYW53PEgnB92UJbyD5QDyBDNgtMBmx44UDVXBWyLpx5meXcA3VR",
  "key15": "5tMsyAk4ma8DdfNxTvuNS9KPTjHfY2LLBTGqrS9wPcjPbrnUtR8JCmyyGfTqqobAw9rpvvv8ZCizkcin8mNjdmwV",
  "key16": "2q7UVcD1MrhTg5TyrMvuSfrwxAxdEbnFaDk9fSpWaEDrihkFhfxvG77yEeFBro245XeDnrnZXMQaUEDiCEayZzFW",
  "key17": "WGkAe9XnSKpv1G2K6dkACTbn5o7UA1CMtSvnZpdmNsY5KMEudZ8zGMWHChibxBoUG6Hci3WTjhZtwBf8AqN1g85",
  "key18": "3kuj225Sn1dwvSqtAkNBvxr18fWjsFRsiAAVdUEGur1vNuALNMUPEM9SpBPyFY2sWih1vY93LpRp2KuycwBvBEtD",
  "key19": "3KRx4rCkzwMLKYydphJrU2avPbvrFcD1bBmBmq19mQjq5gnpUjwDRpMEnkFFHVfsxzYJV6D2zdjFsJyAyon2TQQS",
  "key20": "2iSoyYo1mHcnxShxtha3o8ce84RWs9yENsfHjzR8VmM53vH6VeG9N62LY2mYcHcsRehcYrg46uJ4h1yQwGTgB9w8",
  "key21": "5jks9siPsWowFwkJ2y6thWirHQKf71BksaQqRtsY1dCcRW1ZajrdZERy7ZmfFheJ7yourf7GXPLTxxEb1jHRKcA3",
  "key22": "gugFBwRGXZBYs1KpUdx2tyhH6Jd5A1CSwSs4zm3eP1owfoQk7LRvNRn1LGknrroa492QjMWkdk8saJ9kBgN4Z7x",
  "key23": "5EuSL5GFGQChMqxDYRAJPFd3mLoxfkQDEUcu1Mou3WswC3rCWbK4LaH3UFth5qP8fiA28TocUCJ9uWoo61yhnJY6",
  "key24": "3XE4hjpHB1YU7wdJ6shkpxrz7CuHz8UU5Dq8BL6DHJ9hgHQsVA5D8LFb6p25eicdZwaeRdi9cJ5ydR31KAbVpXHV",
  "key25": "GY3mpLc21kENLYKaJG6T4HiGypP2GRPUJZMyy4VH1cGrmSJ53Yvd6J8knmQks3PMJZUuff6r8EBgkVsc7QQjRV7",
  "key26": "mLGtxbH63Mq3BVahUdJGrqhDNXnrkzhqypp6tUQZEL8DXk99grr9w6fXGMfJHtSpQr72tSeZQJvQiUiuJQJvvgR",
  "key27": "3opnEWi9qnQTxi45cQ9GdbJ5iURLvBD5L1HeMdbpMfAgAo9y48gtPUCu2fuHbmJXMJrMeZJ6Ccp9idBdYuG1heF6",
  "key28": "7M11VU6YnN4N7AaKXQ48pZYBMswEAjQR8joowo3oKBk9ywEfVBEDhqkDHraaE1E1ax5BEsLZdVgu5NsgSoDBVBT",
  "key29": "NWndG4VVE7VYfiwB39FyqU35a2rJ6YrDH86SU2MA9khFsAj5wirW2PK3dx7a7v7wuBWQHXy1zZY4BgQrWW8P2pb",
  "key30": "2YGFRTVwHCikmmEG4RvTHZXMCacNhxo9LLXXEAGUnzfq8cMfzC7fD2BtqUW7658nJC1YwSeJzQsnF6MgFFSxvR7d",
  "key31": "3eTYdcUNCNCTYmcD2stfQwmTeHrbNe1vKhJN38ke24qZHPccxdogbJNqJm3k6JRMn5VFPBxcLqdN6yy4wmS6qm5i",
  "key32": "2ARLekbBfrRanPHaLdzhTNRqsNQJ8v1kF2bkwNqLyFVJ4e9wUEib5ztDUmF9QTRTwd9KFi3ZdiuxxYzx62K2Xmz8",
  "key33": "4cQb4ueiA6RK9js2SotDGRwAPpgNrr2E5oeyaVxr43Qs1PGfdATjULxyoM7JbpKu2unbpjgYYh6nEfBMp6MA7yiP",
  "key34": "8z5S6uiFbc18Q9iXt7RcFCHZR34BzhSx4EoYqVonUy82xGXGQYegaqwGZmyP31RLiYUVjsadkr7f8cJpyhQ22mC",
  "key35": "5dcg7T3qxPER1Zdfyci2QyF4hcZTwVJ1iuyTb7SLpJn7r5WaKZATMB2RVZdJcmm7Wy3XQHaxa83y23VbfU2H2m6z",
  "key36": "5ZLYSdZ2za4CGWciBeS3pLMgVFKzzXiBPJUbG6RnZJQ9tSyu8ryoF1F9gTMkGEkHq8VUhLaUAihoozxmcTsfe7gW",
  "key37": "3uPtSSdYmXecekXpse5w4DBELcRmo4gG1iVsj9mYe4JdU8sV7zwnHPndTrvJL8UJEW3s8hPptNSZ58hixU6oLJHP",
  "key38": "2hAcMfztZQzdJb3U785ei1srxw9QtN7enEv1P3UqooLhMcbh4sLMGPPAMHN7V33mSvUvLKhLdTyvjJwbSkX4W2dK",
  "key39": "4ZR21rvphddziALoMvsyAw8inYasUZAFN74Rxy5XCryELoyyp1NKxjJnMnLyG2sUiEPkvWMcpTjkUMU3CznGUSMd",
  "key40": "4hGcpuP63pYTrNXL5SppQokEtZkyY9ZeLZ4C7fs3PnpJ9jY76zQ7HESvqgGqvY9psefGsRZEaDNxs5J3S2jyf1si",
  "key41": "2LeWKimC7WRC9UACsj6QqmYo5Pr3YEN45gR15fmiEieQudZs7YaxQGg43nYBHb5bbEqmzsopggSbqeVd3n3HXMpU"
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
